import cloudinary from 'cloudinary';
// 1. 必须引入 data.ts，否则无法读取本地数据
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
      // 2. 获取图片的 Public ID (这就是唯一的身份证)
      const publicId = resource.public_id;
      
      // 3.拿着身份证，去 data.ts 账本里查有没有对应的资料
      const localInfo = localData[publicId] || {};

      // 4. 决定标题 (本地 data.ts 优先 > Cloudinary > 默认)
      const title = localInfo.title || 
                    resource.context?.caption || 
                    resource.context?.custom?.caption || 
                    "Untitled";

      // 5. 决定提示词 (本地 data.ts 优先 > Cloudinary > 默认)
      const prompt = localInfo.prompt || 
                     resource.context?.alt || 
                     resource.context?.description || 
                     "No prompt available in data.ts";

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
