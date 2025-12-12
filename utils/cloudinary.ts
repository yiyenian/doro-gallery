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

      // 1. 智能匹配本地数据 (防报错)
      const localInfo: any = localData[publicId] || 
                             localData[cleanId] || 
                             localData[noExtId] || 
                             {};

      // 2. 标题
      let title = localInfo.title || 
                  resource.context?.caption || 
                  resource.context?.custom?.caption;

      if (!title) {
        title = noExtId ? noExtId.replace(/[-_]/g, ' ').replace(/\b\w/g, (c: string) => c.toUpperCase()) : "Untitled";
      }

      // 3. 提示词
      const prompt = localInfo.prompt || 
                     resource.context?.alt || 
                     resource.context?.description || 
                     "No prompt available";

      const tags = localInfo.tags || resource.tags || [];

      // 4. 🔴 终极修复：使用 (as any) 强行调用 url 方法
      // 解决 "Property 'url' does not exist..." 的类型报错
      // 只要 Cloudinary SDK 装了，v2.url 在运行时绝对是存在的
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
        // 如果上面强行调用失败(极小概率)，回退到原始 URL
        url: optimizedUrl || resource.secure_url, 
      };
    });
  } catch (error) {
    console.error("Cloudinary Error:", error);
    return [];
  }
}
