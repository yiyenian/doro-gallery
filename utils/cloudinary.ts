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
    // 强制不使用缓存，保证重命名后立刻生效
    const results = await cloudinary.v2.search
      .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
      .sort_by('public_id', 'desc')
      .max_results(400)
      .with_field('context')
      .execute();

    return results.resources.map((resource: any, index: number) => {
      const publicId = resource.public_id;
      const cleanId = publicId.split('/').pop(); // 去掉文件夹
      const noExtId = cleanId.split('.')[0];     // 去掉后缀

      // 三重匹配：全名 > 文件名 > 去后缀名
      const localInfo = localData[publicId] || localData[cleanId] || localData[noExtId] || {};

      // 标题逻辑
      let title = localInfo.title || resource.context?.caption;
      if (!title) {
        // 默认用文件名做标题，把 - 变成空格
        title = noExtId.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
      }

      // 提示词逻辑
      const prompt = localInfo.prompt || resource.context?.alt || "No prompt available";

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
