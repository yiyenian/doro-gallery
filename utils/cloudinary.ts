import cloudinary from 'cloudinary';
import { localData } from './data'; // 必须引入这一行！

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
      // 获取图片的 Public ID
      const publicId = resource.public_id;
      
      // 🔴 在本地数据中查找匹配项
      const localInfo = localData[publicId];

      // 优先使用本地数据，没有则使用 Cloudinary 数据
      const title = localInfo?.title || 
                    resource.context?.caption || 
                    resource.context?.custom?.caption || 
                    "Untitled";

      const prompt = localInfo?.prompt || 
                     resource.context?.alt || 
                     resource.context?.description || 
                     "No prompt available";

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
