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
      const context = resource.context || {};
      
      // --- 1. 获取标题 (兼容多种写法) ---
      const title = context.caption || context.Caption || context.title || context.Title || "Untitled Case";

      // --- 2. 暴力获取提示词 (p1-p6, P1-P6) ---
      // 我们构建一个数组，把所有可能的分段都抓出来
      let parts = [];
      
      // 尝试读取 p1, p2, p3... p6 (不区分大小写)
      for (let i = 1; i <= 6; i++) {
        const val = context[`p${i}`] || context[`P${i}`] || context[`part${i}`] || context[`Part${i}`];
        if (val) parts.push(val);
      }

      let finalPrompt = "";

      if (parts.length > 0) {
        // 如果找到了分段，就用双换行符拼起来
        finalPrompt = parts.join("\n\n");
      } else {
        // 如果没找到分段，就读标准的 Description (alt)
        // 这里的逻辑是：只要有字，就拿来用，绝不留白
        finalPrompt = context.alt || context.Alt || context.description || context.Description || "No prompt available. Please check Cloudinary metadata.";
      }

      return {
        id: index,
        public_id: resource.public_id,
        format: resource.format,
        width: resource.width,
        height: resource.height,
        title: title,
        prompt: finalPrompt,
        url: resource.secure_url,
      };
    });
  } catch (error) {
    console.error("Cloudinary Error:", error);
    return [];
  }
}
