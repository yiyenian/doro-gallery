import cloudinary from 'cloudinary';
import { localData } from './data'; // 👈 必须引入这个文件！

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
      .execute();

    // 映射数据
    return results.resources.map((resource: any, index: number) => {
      const publicId = resource.public_id; // 例如 "gallery/case-670"
      
      // 🔴 核心逻辑：直接去本地账本查
      const localInfo = localData[publicId];

      // 如果本地有数据，就用本地的；否则显示默认提示
      const title = localInfo?.title || "Untitled (Check data.ts)";
      const prompt = localInfo?.prompt || `ID: ${publicId}\n(No data found in utils/data.ts)`;

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
