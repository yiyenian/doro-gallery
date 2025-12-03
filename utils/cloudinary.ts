import cloudinary from 'cloudinary';
import { localData } from './data'; // 即使不用本地数据，保留这行也没事

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
      .with_field('context') // 务必请求元数据
      .with_field('tags')
      .execute();

    return results.resources.map((resource: any, index: number) => {
      const publicId = resource.public_id;
      const localInfo = localData[publicId] || {};

      // --- 1. 智能标题获取 ---
      // 优先级：本地配置 > Cloudinary 标题 > 文件名 (自动美化)
      let title = localInfo.title || 
                  resource.context?.caption || 
                  resource.context?.custom?.caption;

      if (!title) {
        // 如果都没填，把 "gallery/my-cool-image" 变成 "My Cool Image"
        const fileName = publicId.split('/').pop() || "";
        title = fileName.replace(/[-_]/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase());
      }

      // --- 2. 智能提示词获取 ---
      // 优先级：本地配置 > p1/p2分段 > Description (alt)
      let prompt = localInfo.prompt;

      if (!prompt) {
        // 尝试读取分段 p1, p2...
        const p1 = resource.context?.p1 || resource.context?.custom?.p1;
        const p2 = resource.context?.p2 || resource.context?.custom?.p2;
        const p3 = resource.context?.p3 || resource.context?.custom?.p3;
        
        if (p1 || p2) {
          prompt = [p1, p2, p3].filter(Boolean).join("\n\n");
        } else {
          // 读取标准 Description
          prompt = resource.context?.alt || resource.context?.description || "No prompt details available.";
        }
      }

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
