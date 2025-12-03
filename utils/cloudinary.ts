import cloudinary from 'cloudinary';
// 确保引入了本地数据
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
      const publicId = resource.public_id; // 例如 "gallery/dr-1_u0ugns"
      const cleanId = publicId.split('/').pop(); // 例如 "dr-1_u0ugns" (去掉文件夹前缀)
      
      // 🔴 修复 1：双重查找 + 类型安全
      // 无论你在 data.ts 里填的是带文件夹的 ID 还是不带的，这里都能找到
      // 加上 || {} 防止 undefined 报错
      // 再显式指定类型，防止 TS 报错 "Property title does not exist"
      const localInfo: { title?: string; prompt?: string } = 
        localData[publicId] || localData[cleanId] || {};

      // 🔴 修复 2：智能获取标题
      let title = localInfo.title || 
                  resource.context?.caption || 
                  resource.context?.custom?.caption;

      // 如果实在没标题，用文件名代替，防止开天窗
      if (!title) {
        title = cleanId || "Untitled";
      }

      // 🔴 修复 3：智能获取提示词
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
