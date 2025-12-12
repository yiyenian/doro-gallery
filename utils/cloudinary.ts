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
      
      // 1. 智能匹配 (尝试去后缀)
      let matchId = publicId;
      let localInfo = (localData[matchId] as any);

      if (!localInfo) {
        const idNoSuffix = publicId.replace(/_[a-zA-Z0-9]+$/, "");
        localInfo = localData[idNoSuffix];
      }

      if (!localInfo) {
        const fileName = publicId.split('/').pop() || "";
        const fileNameNoSuffix = fileName.replace(/_[a-zA-Z0-9]+$/, "");
        localInfo = localData[fileNameNoSuffix];
      }
      
      localInfo = localInfo || {};

      // 2. 标题
      let title = localInfo.title || 
                  resource.context?.caption || 
                  resource.context?.custom?.caption;

      if (!title) {
        const cleanName = publicId.split('/').pop()?.replace(/_[a-zA-Z0-9]+$/, "") || "";
        title = cleanName.replace(/[-_]/g, ' ').replace(/\b\w/g, (c: string) => c.toUpperCase());
      }

      // 3. 提示词
      const prompt = localInfo.prompt || 
                     resource.context?.alt || 
                     resource.context?.description || 
                     "No prompt available";

      const tags = localInfo.tags || resource.tags || [];

      // 4. 🔴 核心修复：使用 cloudinary.v2.url (加了 .v2)
      // 这样就能正确调用 URL 生成函数，不再报错
      const optimizedUrl = cloudinary.v2.url(publicId, {
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
        url: optimizedUrl, 
      };
    });
  } catch (error) {
    console.error("Cloudinary Error:", error);
    return [];
  }
}
