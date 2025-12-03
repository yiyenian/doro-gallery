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
      .execute();

    return results.resources.map((resource: any, index: number) => {
      const publicId = resource.public_id;
      
      // 核心：去 data.ts 查户口
      const localInfo = localData[publicId] || {};

      return {
        id: index,
        public_id: publicId,
        format: resource.format,
        width: resource.width,
        height: resource.height,
        // 优先用本地数据，没有则显示 Untitled
        title: localInfo.title || "Untitled",
        // 优先用本地数据，没有则显示 ID 方便排查
        prompt: localInfo.prompt || `No prompt found for ID: ${publicId}`,
        url: resource.secure_url,
      };
    });
  } catch (error) {
    console.error("Cloudinary Error:", error);
    return [];
  }
}
