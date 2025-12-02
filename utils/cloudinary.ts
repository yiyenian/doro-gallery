import cloudinary from 'cloudinary';

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
      .with_field('context') // 告诉 Cloudinary 把元数据也带回来
      .execute();

    // 打印日志，方便在 Vercel 后台看数据结构（调试用）
    if (results.resources.length > 0) {
      console.log("First Image Context:", results.resources[0].context);
    }

    return results.resources.map((resource: any, index: number) => ({
      id: index,
      public_id: resource.public_id,
      format: resource.format,
      width: resource.width,
      height: resource.height,
      // 🔴 核心修复：移除 .custom，直接从 context 读取 alt
      // 为了保险，我们同时尝试读取 caption 和 description
      prompt: resource.context?.alt || resource.context?.description || resource.context?.caption || "No prompt available", 
      url: resource.secure_url,
    }));
  } catch (error) {
    console.error("Cloudinary Error:", error);
    return [];
  }
}
