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

    return results.resources.map((resource: any, index: number) => {
      // --- 1. 处理标题 (Title) ---
      // 优先读取 Caption 字段，如果没有则显示 Untitled
      const title = resource.context?.caption || resource.context?.custom?.caption || "";

      // --- 2. 处理超长提示词 (Prompt) ---
      let finalPrompt = "";
      
      // 读取自定义字段 p1, p2, p3...
      const p1 = resource.context?.p1 || resource.context?.custom?.p1;
      const p2 = resource.context?.p2 || resource.context?.custom?.p2;
      const p3 = resource.context?.p3 || resource.context?.custom?.p3;
      
      if (p1 || p2 || p3) {
        // 核心逻辑：如果有 p1/p2/p3，就用换行符拼起来，忽略 alt
        // 使用 \n\n 是为了让 Markdown 识别为段落换行
        finalPrompt = [p1, p2, p3].filter(Boolean).join("\n\n");
      } else {
        // 否则读取标准的 Description (alt)
        finalPrompt = resource.context?.alt || resource.context?.custom?.alt || resource.context?.description || "";
      }

      return {
        id: index,
        public_id: resource.public_id,
        format: resource.format,
        width: resource.width,
        height: resource.height,
        title: title,        // 标题
        prompt: finalPrompt, // 最终拼接好的提示词
        url: resource.secure_url,
      };
    });
  } catch (error) {
    console.error("Cloudinary Error:", error);
    return [];
  }
}
