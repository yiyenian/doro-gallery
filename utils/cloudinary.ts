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
      const localInfo = localData[publicId] || {};

      // 标题
      let title = localInfo.title || resource.context?.caption || resource.context?.custom?.caption;
      if (!title) {
        const fileName = publicId.split('/').pop() || "";
        title = fileName.replace(/[-_]/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase());
      }

      // 默认兜底提示词
      const defaultPrompt = localInfo.prompt || resource.context?.alt || "No prompt available.";

      return {
        id: index,
        public_id: publicId,
        format: resource.format,
        width: resource.width,
        height: resource.height,
        title: title,
        // 传递多语言提示词
        prompt: defaultPrompt, 
        promptCn: localInfo.promptCn,
        promptEn: localInfo.promptEn,
        tags: localInfo.tags || resource.tags || [],
        url: resource.secure_url,
      };
    });
  } catch (error) {
    console.error("Cloudinary Error:", error);
    return [];
  }
}
