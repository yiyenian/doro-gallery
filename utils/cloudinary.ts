import cloudinary from 'cloudinary';
import { localData } from './data';

cloudinary.v2.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export async function getImages() {
  try {
    const results = await cloudinary.v2.search
      .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
      .sort_by('public_id', 'desc')
      .max_results(400)
      .with_field('context')
      .with_field('tags')
      .execute();

    return results.resources.map((resource: any, index: number) => {
      const publicId = resource.public_id; // 例如: "gallery/dr-26ezwl2b"
      const cleanId = publicId.split('/').pop(); // 例如: "dr-26ezwl2b"
      const noExtId = cleanId?.split('.')[0];    // 去掉后缀
      
      // --- 🔴 核心修复：智能模糊匹配逻辑 ---
      let localInfo: any = {};

      // 1. 第一轮：尝试精确匹配 (最快)
      if (localData[publicId]) {
        localInfo = localData[publicId];
      } 
      // 2. 第二轮：尝试无文件夹名匹配
      else if (cleanId && localData[cleanId]) {
        localInfo = localData[cleanId];
      }
      // 3. 第三轮：前缀/包含匹配 (解决 Cloudinary 加后缀问题)
      // 只要 Cloudinary 的 ID 包含了 data.ts 里的 key，就算匹配成功
      // 例如：Key="dr-26"，ID="dr-26ezwl2b" -> 匹配成功
      else {
         const matchedKey = Object.keys(localData).find(key => {
             // 忽略 gallery/ 前缀差异，只比对核心部分
             const coreKey = key.split('/').pop() || "";
             return cleanId && cleanId.startsWith(coreKey);
         });
         
         if (matchedKey) {
             localInfo = localData[matchedKey];
         }
      }
      
      // 兜底空对象
      localInfo = localInfo || {};

      // 标题
      let title = localInfo.title || 
                  resource.context?.caption || 
                  resource.context?.custom?.caption;

      if (!title) {
        title = noExtId ? noExtId.replace(/[-_]/g, ' ').replace(/\b\w/g, (c: string) => c.toUpperCase()) : "Untitled";
      }

      // 提示词
      const prompt = localInfo.prompt || 
                     resource.context?.alt || 
                     resource.context?.description || 
                     "No prompt available";

      const tags = localInfo.tags || resource.tags || [];

      // 生成优化链接
      const optimizedUrl = (cloudinary.v2 as any).url(publicId, {
        fetch_format: 'auto',
        quality: 'auto',
        width: 1920,
        crop: 'limit',
        secure: true
      });

      return {
        id: index,
        public_id: publicId,
        format: resource.format,
        width: resource.width,
        height: resource.height,
        title: title,
        prompt: prompt,
        promptCn: localInfo.promptCn || null,
        promptEn: localInfo.promptEn || null,
        tags: tags,
        url: optimizedUrl || resource.secure_url, 
      };
    });
  } catch (error) {
    console.error("Cloudinary Error:", error);
    return [];
  }
}
