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
      const publicId = resource.public_id;
      
      // 🔴 核心修复：去掉 || {}，允许它是 undefined
      const localInfo = localData[publicId];

      // 🔴 核心修复：使用 ?. (问号点) 来安全访问属性
      // 如果 localInfo 是 undefined，它会自动停下，不会报错
      let title = localInfo?.title || 
                  resource.context?.caption || 
                  resource.context?.custom?.caption;

      if (!title) {
        const fileName = publicId.split('/').pop() || "";
        title = fileName.replace(/[-_]/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase());
      }

      // 🔴 核心修复：同上，使用 ?.
      let prompt = localInfo?.prompt;

      if (!prompt) {
        const p1 = resource.context?.p1 || resource.context?.custom?.p1;
        const p2 = resource.context?.p2 || resource.context?.custom?.p2;
        const p3 = resource.context?.p3 || resource.context?.custom?.p3;
        
        if (p1 || p2) {
          prompt = [p1, p2, p3].filter(Boolean).join("\n\n");
        } else {
          prompt = resource.context?.alt || resource.context?.description || "No prompt available.";
        }
      }

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
