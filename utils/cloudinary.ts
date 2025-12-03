import cloudinary from 'cloudinary';
import { localData } from './data'; // 引入本地账本

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
      
      // 1. 查本地账本
      const localInfo = localData[publicId];

      // 2. 决定标题 (本地 > Cloudinary > 默认)
      const title = localInfo?.title || 
                    resource.context?.caption || 
                    resource.context?.custom?.caption || 
                    "Untitled";

      // 3. 决定提示词 (本地 > Cloudinary > 默认)
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
