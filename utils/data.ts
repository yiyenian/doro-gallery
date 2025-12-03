// 格式：'文件夹/文件名': { title: '标题', prompt: '提示词' }
// 这里的 Key 必须和 Cloudinary 里的 Public ID 完全一致

export const localData: Record<string, { title: string; prompt: string }> = {
  
  // === 示例数据 (请替换为你自己的 Public ID) ===
  "gallery/example-1": {
    title: "案例 670：全景式角色拆解",
    prompt: `Role (角色设定)
你是一位顶尖的游戏概念美术设计大师。

Task (任务目标)
生成一张**“全景式角色深度概念分解图”**。

Visual Guidelines (视觉规范)
- 风格: 2.5D 厚涂
- 构图: 中心立绘 + 周边拆解
--ar 16:9 --v 6.0`
  },

  "gallery/example-2": {
    title: "赛博朋克：雨夜",
    prompt: `Cinematic shot of a cyberpunk city street.
Neon lights, rainy atmosphere, reflections on wet pavement.
Highly detailed, 8k resolution.

**Parameters:**
--stylize 750 --ar 21:9`
  },

  // ... 在这里继续添加 ...
};
