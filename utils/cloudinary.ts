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
      const publicId = resource.public_id; // 例如 "gallery/dr-10_u0ugns"
      const cleanId = publicId.split('/').pop() || ""; // 例如 "dr-10_u0ugns"
      
      // 🔴 核心修复：精准匹配逻辑
      let localInfo: any = null;

      // 策略 1: 直接用 data.ts 里的 Key 匹配 (最准)
      // 如果你在 data.ts 里写了完整 ID，优先用它
      if (localData[cleanId]) {
        localInfo = localData[cleanId];
      } else {
        // 策略 2: 智能去后缀匹配 (解决 dr-1 vs dr-10 冲突)
        // 正则解释：
        // _        匹配下划线
        // [^._]+   匹配非点非下划线的字符(随机码)
        // $        匹配字符串结尾
        // 这样可以把 "dr-10_u0ugns" 变成 "dr-10"，而不会把 "dr-1" 误认为 "dr-10" 的前缀
        const idNoSuffix = cleanId.replace(/_[a-zA-Z0-9]+$/, "");
        
        if (localData[idNoSuffix]) {
          localInfo = localData[idNoSuffix];
        }
      }
      
      // 兜底：如果还是没找到，给个空对象
      localInfo = localInfo || {};

      // 标题
      let title = localInfo.title || 
                  resource.context?.caption || 
                  resource.context?.custom?.caption;

      if (!title) {
        // 自动标题：去掉后缀，把 - 换成空格
        const baseName = cleanId.replace(/_[a-zA-Z0-9]+$/, "");
        title = baseName.replace(/[-_]/g, ' ').replace(/\b\w/g, (c: string) => c.toUpperCase());
      }

      // 提示词
      const prompt = localInfo.prompt || 
                     resource.context?.alt || 
                     resource.context?.description || 
                     "No prompt available";

      const tags = localInfo.tags || resource.tags || [];

      // 生成极速优化链接
      const optimizedUrl = (cloudinary.v2 as any).url(publicId, {
        fetch_format: 'auto',
        quality: 'auto',
        width: 1920,
        crop: 'limit',
        secure: true
      });

      return {
        id: index,
        public_id: publicId,
        format: resource.format,
        width: resource.width,
        height: resource.height,
        title: title,
        prompt: prompt,
        promptCn: localInfo.promptCn || null,
        promptEn: localInfo.promptEn || null,
        tags: tags,
        url: optimizedUrl || resource.secure_url, 
      };
    });
  } catch (error) {
    console.error("Cloudinary Error:", error);
    return [];
  }
}
