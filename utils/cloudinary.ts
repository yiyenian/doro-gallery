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
      const localInfo = localData[publicId] || localData[cleanId] || localData[noExtId] || {};

      let title = localInfo.title || resource.context?.caption || resource.context?.custom?.caption;
      if (!title) {
        title = noExtId ? noExtId.replace(/[-_]/g, ' ').replace(/\b\w/g, (c: string) => c.toUpperCase()) : "Untitled";
      }

      const prompt = localInfo.prompt || resource.context?.alt || resource.context?.description || "No prompt available";
      const tags = localInfo.tags || resource.tags || [];

      // 🔴 核心优化：智能压缩链接生成
      // 我们不直接用 resource.secure_url (那是原图)
      // 而是手动构造一个带参数的 URL
      // f_auto: 自动格式 (WebP/AVIF)
      // q_auto: 智能压缩
      // w_1920: 限制最大宽度为 1920 (足够 4K 屏看了，但体积小很多)
      // c_limit: 保持比例缩放，不裁剪
      const optimizedUrl = cloudinary.url(publicId, {
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
        // 🔴 将优化后的 URL 传给前端
        url: optimizedUrl, 
      };
    });
  } catch (error) {
    console.error("Cloudinary Error:", error);
    return [];
  }
}
