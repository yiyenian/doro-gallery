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
      .with_field('context') // 这一行非常重要，告诉 Cloudinary 把标题和描述都带回来
      .execute();

    return results.resources.map((resource: any, index: number) => ({
      id: index,
      public_id: resource.public_id,
      format: resource.format,
      width: resource.width,
      height: resource.height,
      
      // 🔴 核心修改：这里决定了从哪里读取标题和提示词
      // 1. 读取 Title (caption) 输入框的内容作为标题
      title: resource.context?.caption || resource.context?.custom?.caption || "Untitled Case",
      
      // 2. 读取 Description (alt) 输入框的内容作为提示词
      prompt: resource.context?.alt || resource.context?.description || "No prompt available",
      
      url: resource.secure_url,
    }));
  } catch (error) {
    console.error("Cloudinary Error:", error);
    return [];
  }
}
