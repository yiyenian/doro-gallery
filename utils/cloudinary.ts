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

    const resources = results.resources.map((resource: any, index: number) => {
      const publicId = resource.public_id; // 例如 "gallery/dr-1_u0ugns"
      
      // --- 1. 智能匹配逻辑 ---
      let localInfo: any = null;

      // 尝试1: 直接匹配 (如 "gallery/dr-1_u0ugns")
      if (localData[publicId]) {
        localInfo = localData[publicId];
      }
      
      // 尝试2: 去掉随机后缀 (如 "gallery/dr-1")
      if (!localInfo) {
        const idNoSuffix = publicId.replace(/_[a-zA-Z0-9]+$/, "");
        localInfo = localData[idNoSuffix];

        // 尝试3: 去掉文件夹路径 + 去掉后缀 (如 "dr-1") —— 最常用的情况
        if (!localInfo) {
           const cleanName = idNoSuffix.split('/').pop() || "";
           localInfo = localData[cleanName];
        }
      }
      
      // 兜底
      localInfo = localInfo || {};

      // --- 2. 标题逻辑 ---
      let title = localInfo.title || 
                  resource.context?.caption || 
                  resource.context?.custom?.caption;

      if (!title) {
        // 自动从文件名生成标题
        const cleanName = publicId.split('/').pop()?.replace(/_[a-zA-Z0-9]+$/, "") || "";
        title = cleanName.replace(/[-_]/g, ' ').replace(/\b\w/g, (c: string) => c.toUpperCase());
      }

      const prompt = localInfo.prompt || 
                     resource.context?.alt || 
                     resource.context?.description || 
                     "No prompt available";

      const tags = localInfo.tags || resource.tags || [];

      // --- 3. 链接生成 (带优化参数) ---
      // 使用 (as any) 规避 TypeScript 类型检查报错
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
        // 优先使用优化链接，失败则回退原图
        url: optimizedUrl || resource.secure_url, 
      };
    });

    // 4. 排序：按 dr-数字 倒序 (最新的 dr-140 在前)
    return resources.sort((a: any, b: any) => {
        const getNum = (str: string) => {
            const match = str.match(/dr-(\d+)/i);
            return match ? parseInt(match[1]) : 0;
        };
        return getNum(b.public_id) - getNum(a.public_id);
    });

  } catch (error) {
    console.error("Cloudinary Error:", error);
    return [];
  }
}
