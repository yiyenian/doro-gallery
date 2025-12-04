export interface DataRecord {
  title: string;
  prompt?: string;
  tags?: string[];
  promptCn?: string;
  promptEn?: string;
}

export const localData: Record<string, DataRecord> = {
  "dr-1_u0ugns": {
    title: "全景式角色深度概念分解图",
    tags: ["Character Design", "Concept Art", "Game Art", "2.5D"],
    promptCn: `Role (角色设定)
你是一位顶尖的游戏与动漫概念美术设计大师 (Concept Artist)，擅长制作详尽的角色设定图（Character Sheet）。
你具备“像素级拆解”的能力，能够透视角色的穿着层级、捕捉微表情变化，并将与其相关的物品进行具象化还原。
你特别擅长通过女性角色的私密物品、随身物件和生活细节来侧面丰满人物性格与背景故事。
Task (任务目标)
根据用户上传的主体形象（若没有具体着装（包括但不限于上衣、裤装、外套及鞋履），请依据角色人设，为其强制搭配一套完整的、极具时尚感且细节丰富的全身穿搭。）
生成一张**“全景式角色深度概念分解图”**。该图片必须包含中心人物全身立绘，并在其周围环绕展示该人物的服装分层、不同表情、核心道具、材质特写，以及极具生活气息的私密与随身物品展示。
Visual Guidelines (视觉规范)
1. 构图布局 (Layout):
• 中心位 (Center): 放置角色的全身立绘或主要动态姿势，作为视觉锚点。
• 环绕位 (Surroundings): 在中心人物四周空白处，有序排列拆解后的元素。
• 视觉引导 (Connectors): 使用手绘箭头或引导线，将周边的拆解物品与中心人物的对应部位或所属区域（如包包连接手部）连接起来。
2. 拆解内容 (Deconstruction Details) —— 核心迭代区域:
• 服装分层 (Clothing Layers) [增强与颠覆性设计]:
将角色的服装拆分为单品展示。如果是多层穿搭，需展示脱下外套后的内层状态。
• 新增：私密内着拆解 (Intimate Apparel): 独立展示角色的内层衣物，重点突出颠覆想象的剪裁、前卫设计和材质特写。包括但不限于：
成套的蕾丝内衣裤（展示蕾丝花纹细节和透视效果）
丁字裤/T裤（突出独特的剪裁和极简覆盖）
丝袜/吊带袜（强调透明度、透肉感与袜口设计）、塑身衣或安全裤等
所有内衣都应着重于大胆和颠覆性的美学设计。
• 表情集 (Expression Sheet):
在角落绘制 3-4 个不同的头部特写，展示不同的情绪（如：诱惑、闷骚、嫌弃、冷漠、害羞、惊讶、失神、或涂口红时的专注神态，选4个即可）。
• 材质特写 (Texture & Zoom) [加强版强化细节]:
选取 1-2 个关键部位进行放大特写。例如：布料的褶皱、皮肤的纹理、手部细节。
• 新增：物品质感特写: 增加对小物件材质的描绘，例如：口红膏体的润泽感、皮革包包的颗粒纹理、化妆品粉质的细腻感。
• 关联物品 (Related Items) [深度迭代与真实代入感]:
此处不再局限于大型道具，需增加展示角色的“生活切片”。
• 随身包袋与内容物 (Bag & Contents): 绘制角色的日常通勤包或手拿包，并将其“打开”，展示散落在旁的物品。
• 美妆与护理 (Beauty & Grooming): 展示其常用的化妆品组合（如：特定色号的口红/唇釉特写、带镜子的粉饼盒、香水瓶设计、护手霜）。
• 私密生活物件 (Lifestyle & Intimate Items) [客观、详尽与直接描绘]: 具象化角色隐藏面的物品。
这些物品必须以“真实代入感的客观视角”呈现，重点突出其设计感、材质特写、假定的品牌型号或独特功能。
可以进行直接或露骨的细节描绘，将其视为角色特定偏好和背景故事的符号。根据角色性格可能包括：
私密日记本、常用药物/补剂盒、电子烟。
高度精细的私密用品展示2-3种（例如：瑞典声波吸吮或德国空气脉冲、法式宫廷风加热震动或双马达混合动力、不锈钢纯爱权杖、真丝眼罩、环形口枷、麋鹿皮散鞭等相关用品）。
重点描绘物品本身的美学、工艺，以及材质（如：硅胶、皮革、金属）和设计特点。
3. 风格与注释 (Style & Annotations):
• 画风: 保持高质量的 2D 插画风格或概念设计草图风格，线条干净利落。
• 背景: 使用米黄色、羊皮纸或浅灰色纹理背景，营造设计手稿的氛围。
• 文字说明: 在每个拆解元素旁模拟手写注释，简要说明材质（如“柔软蕾丝”、“磨砂皮革”）或品牌/型号暗示（如“常用色号#520”、“定制款”）。
Workflow (执行逻辑)
当用户提供一张图片或描述时：
1. 分析主体的核心特征、穿着风格及潜在性格。
2. 提取可拆解的一级元素（外套、鞋子、大表情）。
3. 脑补并设计二级深度元素（她内衣穿什么风格？她包里会装什么口红？她独处时会用什么物品？）。
4. 生成一张包含所有这些元素的组合图，确保透视准确，光影统一，注释清晰。
5. 使用中文：英文标记，高清4K HD 输出`,
    promptEn: `A panoramic character concept breakdown sheet, concept art style.
Center: Full body standing pose of a stylish female character.
Surrounding details: Deconstructed clothing layers, 4 facial expressions (shy, focused, cold, seductive), close-up of fabric textures and hands.
Items: Open handbag with scattered cosmetics (lipstick, powder), personal diary, daily accessories.
Connectors: Hand-drawn arrows connecting items to the character.
Style: High quality 2D illustration, 2.5D thick painting, clean lines.
Background: Beige parchment paper texture.
Text: Handwritten notes in Chinese and English.
--ar 16:9 --v 6.0 --stylize 250`,
    prompt: "A panoramic character concept breakdown sheet, concept art style..."
  },

  "dr-2_bdkvvg": {
    title: "诸葛连弩结构爆炸图",
    tags: ["Industrial Design", "Retro", "Structure"],
    promptCn: `请创建诸葛连弩的复古风格工程爆炸图。   
细节要求：包含详细的零件拆解（机括、箭匣、弓臂）。标注文字为中文。
风格：复古工程图，类似达芬奇手稿。`,
    promptEn: `Vintage engineering explosion diagram of a Zhuge Nu (Chinese Repeating Crossbow).
Detailed mechanical parts deconstruction, wooden texture, gears and levers.
Annotations: Traditional Chinese text labels.
Style: Leonardo da Vinci sketch style, technical drawing.
Background: Aged yellow parchment paper.
--ar 16:9 --v 6.0`,
    prompt: "Vintage engineering explosion diagram of a Zhuge Nu..."
  },
  
  "dr-3_eghzd5": {
    title: "泡泡玛特风格宇航员",
    tags: ["3D Render", "IP Design", "Blind Box", "Cute", "C4D"],
    promptCn: `角色描述:一个可爱的Q版宇航员，大大的头，圆润的身体。
穿着带有光泽感的白色宇航服，头盔是透明的玻璃材质，里面有一张萌萌的脸。
材质：PVC 塑料质感，类似泡泡玛特 (Pop Mart) 玩具，表面光滑。
灯光：柔和的影棚光，边缘光 (Rim light) 勾勒轮廓。
背景:纯色背景或简单的星球装饰，保持画面干净。`,
    promptEn: `A cute chibi astronaut character, Pop Mart blind box style.
Big head, round body, wearing glossy white space suit.
Transparent glass helmet revealing a cute face.
Material & Lighting:
- PVC plastic texture, smooth surface, clay render style.
- Soft studio lighting, rim light, high quality 3D render.
- C4D, Octane render.
Background:
Clean pastel color background, simple planet props.
--ar 3:4 --niji 6 --style cute`,
    prompt: "A cute chibi astronaut character, Pop Mart blind box style. PVC plastic texture..."
  },

  "dr-4_cscuhq": {
    title: "极简科技 Logo",
    tags: ["Logo Design", "Graphic Design", "Minimalist", "Vector"],
    promptCn: `设计主题:一个代表“量子计算”的科技公司 Logo。
图形主体是一个抽象的字母 "Q"，由发光的线条和点阵组成。
风格:极简主义 (Minimalism),扁平化设计 (Flat design),矢量风格 (Vector),
配色:深蓝色背景，青色和白色的线条，带有科技感的渐变。`,
    promptEn: `A minimalist tech company logo representing "Quantum Computing".
Abstract letter "Q" formed by glowing connecting dots and lines.
Style:
- Flat vector art
- Minimalist, clean lines
- Dribbble style
Colors:
Deep blue background, cyan and white gradients.
--no realistic, 3d, text, shadow --ar 1:1 --v 6.0`,
    prompt: "A minimalist tech company logo representing Quantum Computing..."
  },

  "dr-5_tiubjj": {
    title: "微缩森林瓶中界",
    tags: ["Macro Photography", "Still Life", "Fantasy", "Nature"],
    promptCn: `画面主体:一个透明的玻璃瓶，瓶子里装有一个微缩的魔法森林。
微小的发光蘑菇，还有一条流动的微型河流。
摄影风格:微距镜头 (Macro lens),景深效果 (Bokeh),移轴摄影 (Tilt-shift),
光照:瓶子内部发出神奇的微光，照亮了周围昏暗的木桌。`,
    promptEn: `Macro photography of a glass jar containing a miniature magical forest inside.
Tiny glowing mushrooms, moss, and a micro river flowing.
Camera:
- Macro lens, 100mm
- Shallow depth of field, strong bokeh
- Tilt-shift effect
Lighting:
Bioluminescent glow from inside the jar, illuminating a dark wooden table.
--ar 4:5 --stylize 250 --v 6.0`,
    prompt: "Macro photography of a glass jar containing a miniature magical forest inside..."
  },

  "dr-6_xwhvt1": {
    title: "流体未来博物馆",
    tags: ["Architecture", "Futuristic", "Zaha Hadid", "Parametric"],
    promptCn: `建筑描述:一座白色的未来主义博物馆，坐落在海边。
建筑线条流畅，呈现出有机的流体形状，风格类似扎哈·哈迪德 (Zaha Hadid)。
环境与时间:黄昏时刻，金色的阳光洒在白色的建筑表面，海面波光粼粼。
渲染:超广角镜头,建筑可视化 (ArchViz),8K 分辨率`,
    promptEn: `Architectural photography of a futuristic white museum located by the sea.
Organic fluid shapes, parametric design, Zaha Hadid style.
Smooth curves, concrete and glass materials.
Environment:
Golden hour, warm sunlight hitting the white curves, reflection on the water.
Tech:
- Ultra wide angle shot
- Unreal Engine 5 architectural visualization
- 8k, hyper-realistic
--ar 16:9 --v 6.0`,
    prompt: "Architectural photography of a futuristic white museum located by the sea..."
  },

  "dr-7_phzi2h": {
    title: "新中式赛博龙女",
    tags: ["Guochao", "Illustration", "Chinese Style", "Cyberpunk"],
    promptCn: `角色:一位穿着改良汉服的龙族少女，头上长着晶莹剔透的龙角。
衣服上有金色的刺绣，混合了现代的机械装备。
风格:国潮插画风格,矢量线条，色彩鲜艳（红、金、青）,敦煌壁画配色,
背景:祥云缭绕，背后有一个巨大的全息投影月亮。`,
    promptEn: `Illustration of a dragon girl wearing modified Hanfu (Chinese traditional clothing).
Translucent dragon horns, golden embroidery mixed with cyberpunk mechanical gear.
Style:
- Guochao art style (Modern Chinese Trend)
- Vector lines, vibrant colors (Red, Gold, Cyan)
- Dunhuang mural color palette
Background:
Surrounded by auspicious clouds, huge holographic moon in the background.
--ar 3:4 --niji 6`,
    prompt: "Illustration of a dragon girl wearing modified Hanfu..."
  },

  "dr-8_s50wbm": {
    title: "朱迪和松果的联名杂志",
    tags: ["branding", "fashion", "photography", "portrait", "typography"],
    promptCn: `一张宽高比为9:16的垂直肖像照片，展示了一张干净、独立的高级光面时尚杂志封面。
    杂志顶部是巨大的黑色粗衬线字体标题“SONGGUO”，散发着奢华品牌的氛围。
    主视觉是《疯狂动物城》朱迪·霍普斯（Judy Hopps）的超写实高级时尚大片。
    她摆出自信、充满张力的超模姿势，手中精致地拿着一颗天然松果。
    朱迪穿着一套极其显眼、夺目且昂贵的高级定制时装（例如带有金色刺绣结构的鲜艳祖母绿丝绸外套），
    服装设计华丽奢华，与松果的视觉元素完全无关。主标题下方是非常简短的副标题：“JUDY x SONGGUO”。
    封面底部角落包含期号“ISSUE 2025”、今天的日期、一个逼真的条形码和价格“$25.00”。
    背景是干净、中性的高级摄影棚渐变背景。电影级影棚布光，极高清晰度，8k分辨率，质感丰富。`,
 },

  "dr-9_xaidyz": {
    title: "城市冰箱贴",
    tags: ["character", "photography"],
    promptEn: `A clear, directly top-down photograph of shanghai landmarks as realistic miniature 3D magnets, 
    arranged neatly in parallel lines and right angles, knolling on a neutral surface. 
    At the top-center, place a souvenir magnet displaying the city name written in Chinese characters, 
    and a handwritten post-it note also written in Chinese characters showing the current temperature and weather conditions.
    Incorporate realistic miniature items necessary for today's weather into the knolling arrangement. 
    No repeats of any object. Aspect ratio 1:1.
 },
  
};
