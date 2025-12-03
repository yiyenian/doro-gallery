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
    // 1. 强制获取最新数据，不使用缓存的 context
    const results = await cloudinary.v2.search
      .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
      .sort_by('public_id', 'desc')
      .max_results(400)
      .with_field('context')
      .execute();

    return results.resources.map((resource: any, index: number) => {
      const publicId = resource.public_id; // 原样 ID，例如 "gallery/case-670"
      
      // --- 核心修复：三重匹配机制 ---
      // 1. 尝试全名匹配 ("gallery/case-670")
      // 2. 尝试文件名匹配 ("case-670")
      // 3. 尝试去除后缀匹配 (防止万一带有 .jpg)
      const fileName = publicId.split('/').pop(); // 拿到 "case-670"
      const fileNameNoExt = fileName.split('.')[0]; // 拿到 "case-670" (去后缀)

      // 在 data.ts 里狂找，只要有一个对上就行
      const localInfo = localData[publicId] || 
                        localData[fileName] || 
                        localData[fileNameNoExt] || 
                        {};

      // 标题逻辑：本地 > Cloudinary > 自动生成
      let title = localInfo.title || 
                  resource.context?.caption || 
                  resource.context?.custom?.caption;

      if (!title) {
        // 如果没标题，就把文件名 "case-670" 变成 "Case 670"
        title = fileNameNoExt.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      }

      // 提示词逻辑：本地 > Cloudinary > 默认
      const prompt = localInfo.prompt || 
                     resource.context?.alt || 
                     resource.context?.description || 
                     "No prompt available.";

      return {
        id: index,
        public_id: publicId,
        format: resource.format,
        width: resource.width,
        height: resource.height,
        title: title,
        prompt: prompt,
        url: resource.secure_url,
      };
    });
  } catch (error) {
    console.error("Cloudinary Error:", error);
    return [];
  }
}
