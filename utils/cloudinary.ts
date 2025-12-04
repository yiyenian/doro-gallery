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
      .execute();

    return results.resources.map((resource: any, index: number) => {
      const publicId = resource.public_id;
      const cleanId = publicId.split('/').pop(); 
      const noExtId = cleanId?.split('.')[0];

      // 🔴 修复：不再使用 || {}，而是允许它是 undefined
      // 尝试三种匹配方式
      const localInfo = localData[publicId] || localData[cleanId] || localData[noExtId];

      // 🔴 修复：使用 ?. 安全访问
      // 如果 localInfo 是 undefined，这行代码会返回 undefined，而不会报错
      let title = localInfo?.title || 
                  resource.context?.caption || 
                  resource.context?.custom?.caption;

      if (!title) {
        // 兜底：如果没标题，用文件名自动生成
        title = noExtId ? noExtId.replace(/[-_]/g, ' ').replace(/\b\w/g, (c: string) => c.toUpperCase()) : "Untitled";
      }

      // 提示词
      const prompt = localInfo?.prompt || 
                     resource.context?.alt || 
                     resource.context?.description || 
                     "No prompt available";

      // 标签 (如果有的话)
      const tags = localInfo?.tags || resource.tags || [];

      return {
        id: index,
        public_id: publicId,
        format: resource.format,
        width: resource.width,
        height: resource.height,
        title: title,
        prompt: prompt,
        tags: tags,
        url: resource.secure_url,
      };
    });
  } catch (error) {
    console.error("Cloudinary Error:", error);
    return [];
  }
}
