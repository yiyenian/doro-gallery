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
      .with_field('tags')
      .execute();

    return results.resources.map((resource: any, index: number) => {
      const publicId = resource.public_id; // 例如: "gallery/case-001_x8z9s"
      
      // --- 1. 智能去后缀匹配逻辑 ---
      // 尝试1: 原始ID
      let matchId = publicId;
      let localInfo = localData[matchId];

      // 尝试2: 去除随机后缀 (例如去掉 _x8z9s)
      if (!localInfo) {
        // 正则: 匹配末尾的下划线+数字字母组合
        const idNoSuffix = publicId.replace(/_[a-zA-Z0-9]+$/, "");
        localInfo = localData[idNoSuffix];
        if (localInfo) matchId = idNoSuffix;
      }

      // 尝试3: 纯文件名匹配 (无文件夹，无后缀)
      if (!localInfo) {
        const fileName = publicId.split('/').pop() || "";
        const fileNameNoSuffix = fileName.replace(/_[a-zA-Z0-9]+$/, "");
        localInfo = localData[fileNameNoSuffix];
      }
      
      // 兜底空对象
      localInfo = localInfo || {};

      // --- 2. 标题与提示词 ---
      let title = localInfo.title || 
                  resource.context?.caption || 
                  resource.context?.custom?.caption;

      if (!title) {
        // 自动用文件名生成标题
        const cleanName = publicId.split('/').pop()?.replace(/_[a-zA-Z0-9]+$/, "") || "";
        title = cleanName.replace(/[-_]/g, ' ').replace(/\b\w/g, (c: string) => c.toUpperCase());
      }

      const prompt = localInfo.prompt || 
                     resource.context?.alt || 
                     resource.context?.description || 
                     "No prompt available";

      const tags = localInfo.tags || resource.tags || [];

      // --- 3. 核心优化：生成极速访问链接 ---
      // 不使用 resource.secure_url (那是原图)
      // 使用 cloudinary.url() 生成带优化参数的链接
      const optimizedUrl = cloudinary.url(publicId, {
        fetch_format: 'auto',  // 自动转为 WebP/AVIF (体积减小 50%+)
        quality: 'auto',       // 智能压缩 (肉眼无损，体积减小 30%+)
        width: 1920,           // 限制最大宽度 (防止加载 8K 原图)
        crop: 'limit',         // 保持比例缩放
        secure: true
      });

      return {
        id: index,
        public_id: publicId, // 这里的 ID 保持原始的，用于调试
        format: resource.format,
        width: resource.width,
        height: resource.height,
        title: title,
        prompt: prompt,
        promptCn: localInfo.promptCn || null,
        promptEn: localInfo.promptEn || null,
        tags: tags,
        // 🔴 传给前端的是优化后的链接
        url: optimizedUrl, 
      };
    });
  } catch (error) {
    console.error("Cloudinary Error:", error);
    return [];
  }
}
