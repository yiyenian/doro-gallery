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
      const cleanId = publicId.split('/').pop(); 
      const noExtId = cleanId?.split('.')[0];

      // 🔴 核心修复：添加 'as any'，强制忽略类型检查
      // 解决 "Property 'title' does not exist on type '{}'" 报错
      const localInfo = (localData[publicId] || 
                         localData[cleanId] || 
                         localData[noExtId] || 
                         {}) as any;

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

      // 标签
      const tags = localInfo.tags || resource.tags || [];

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
        url: resource.secure_url,
      };
    });
  } catch (error) {
    console.error("Cloudinary Error:", error);
    return [];
  }
}
