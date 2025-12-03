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
      const cleanId = publicId.split('/').pop(); // 去掉文件夹
      const noExtId = cleanId?.split('.')[0];    // 去掉后缀

      // 🔴 核心修复：添加类型断言，解决 "Property does not exist on type {}" 报错
      const localInfo = (localData[publicId] || 
                         localData[cleanId] || 
                         localData[noExtId] || 
                         {}) as { title?: string; prompt?: string };

      // 标题逻辑
      let title = localInfo.title || 
                  resource.context?.caption || 
                  resource.context?.custom?.caption;

      if (!title) {
        // 默认用文件名做标题
        title = noExtId ? noExtId.replace(/[-_]/g, ' ').replace(/\b\w/g, (c: string) => c.toUpperCase()) : "Untitled";
      }

      // 提示词逻辑
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
