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
      const publicId = resource.public_id; // 例如 "gallery/abc"
      const cleanId = publicId.split('/').pop(); // 例如 "abc" (去掉文件夹)
      
      // 🔴 核心修复：双重匹配机制
      // 不管你在 data.ts 里写的是 "gallery/abc" 还是 "abc"，都能找到！
      const localInfo = localData[publicId] || localData[cleanId] || {};

      // 标题：本地 > Cloudinary > 文件名
      let title = localInfo.title || 
                  resource.context?.caption || 
                  resource.context?.custom?.caption;

      if (!title) {
        title = cleanId.replace(/[-_]/g, ' '); // 如果没标题，用文件名代替
      }

      // 提示词：本地 > Cloudinary > 默认文案
      const prompt = localInfo.prompt || 
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
