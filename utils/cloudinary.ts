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
      .with_field('context')
      .execute();

    return results.resources.map((resource: any, index: number) => ({
      id: index,
      public_id: resource.public_id,
      format: resource.format,
      width: resource.width,
      height: resource.height,
      // 如果没有提示词，显示默认占位符
      prompt: resource.context?.custom?.alt || "", 
      url: resource.secure_url,
    }));
  } catch (error) {
    console.error("Cloudinary Error:", error);
    return [];
  }
}
