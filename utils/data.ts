export interface DataRecord {
  title: string;
  prompt?: string;
  tags?: string[];
  promptCn?: string;
  promptEn?: string;
}

export const localData: Record<string, DataRecord> = {
  // === 01. 全景式角色 ===
  "dr-1": {
    title: "全景式角色深度概念分解图",
    tags: ["Character Design", "Concept Art", "Game Art", "2.5D"],
    promptCn: `Role (角色设定)
你是一位顶尖的游戏与动漫概念美术设计大师 (Concept Artist)，擅长制作详尽的角色设定图（Character Sheet）。你具备“像素级拆解”的能力，能够透视角色的穿着层级、捕捉微表情变化，并将与其相关的物品进行具象化还原。你特别擅长通过女性角色的私密物品、随身物件和生活细节来侧面丰满人物性格与背景故事。
Task (任务目标)
根据用户上传的主体形象（若没有具体着装，系统必须主动接管设计），生成一张“全景式角色深度概念分解图”。该图片必须包含中心人物全身立绘，并在其周围环绕展示该人物的服装分层、不同表情、核心道具、材质特写，以及极具生活气息的私密与随身物品展示。
Visual Guidelines (视觉规范)
1. 构图布局 (Layout):
中心位 (Center): 放置角色的全身立绘或主要动态姿势，作为视觉锚点。
环绕位 (Surroundings): 在中心人物四周空白处，有序排列拆解后的元素。
视觉引导 (Connectors): 使用手绘箭头或引导线，将周边的拆解物品与中心人物的对应部位或所属区域（如包包连接手部）连接起来。
2. 拆解内容 (Deconstruction Details) —— 核心迭代区域:
服装分层 (Clothing Layers): 将角色的服装拆分为单品展示。如果是多层穿搭，需展示脱下外套后的内层状态。
新增：私密内着拆解 (Intimate Apparel): 独立展示角色的内层衣物，重点突出颠覆想象的剪裁、前卫设计和材质特写。包括但不限于：成套的蕾丝内衣裤、丁字裤/T裤、丝袜/吊带袜、塑身衣或安全裤等。
表情集 (Expression Sheet): 在角落绘制 3-4 个不同的头部特写，展示不同的情绪（如：诱惑、闷骚、嫌弃、冷漠、害羞等）。
材质特写 (Texture & Zoom): 选取 1-2 个关键部位进行放大特写。
新增：物品质感特写: 增加对小物件材质的描绘（如口红膏体的润泽感、皮革纹理）。
关联物品 (Related Items): 随身包袋与内容物: 绘制角色的日常通勤包并将其“打开”。美妆与护理: 展示常用的化妆品组合。私密生活物件: 具象化角色隐藏面的物品（如私密日记本、电子烟、高度精细的私密用品等）。
3. 风格与注释 (Style & Annotations):
画风: 保持高质量的 2D 插画风格或概念设计草图风格，线条干净利落。
背景: 使用米黄色、羊皮纸或浅灰色纹理背景，营造设计手稿的氛围。
文字说明: 在每个拆解元素旁模拟手写注释。
Workflow (执行逻辑)
1. 分析主体的核心特征、穿着风格及潜在性格。
2. 提取可拆解的一级元素。
3. 脑补并设计二级深度元素。
4. 生成一张包含所有这些元素的组合图。
5. 使用中文：英文标记，高清4K HD 输出`,
    promptEn: `A panoramic character concept breakdown sheet, concept art style.
Center: Full body standing pose of a stylish female character.
Surrounding details: Deconstructed clothing layers, 4 facial expressions (shy, focused, cold, seductive), close-up of fabric textures and hands.
Items: Open handbag with scattered cosmetics (lipstick, powder), personal diary, daily accessories.
Connectors: Hand-drawn arrows connecting items to the character.
Style: High quality 2D illustration, 2.5D thick painting, clean lines.
Background: Beige parchment paper texture.
Text: Handwritten notes in Chinese and English.`,
    prompt: "A panoramic character concept breakdown sheet, concept art style..."
  },

  // === 02. 诸葛连弩 ===
  "dr-2": {
    title: "诸葛连弩结构爆炸图",
    tags: ["Industrial Design", "Retro", "Structure"],
    promptCn: `请创建诸葛连弩的复古风格工程爆炸图。
细节要求：包含详细的零件拆解（机括、箭匣、弓臂）。标注文字为中文。
风格：复古工程图，类似达芬奇手稿。`,
    promptEn: `Vintage engineering explosion diagram of a Zhuge Nu (Chinese Repeating Crossbow).
Detailed mechanical parts deconstruction, wooden texture, gears and levers.
Annotations: Traditional Chinese text labels.
Style: Leonardo da Vinci sketch style, technical drawing.
Background: Aged yellow parchment paper`,
    prompt: "Vintage engineering explosion diagram of a Zhuge Nu..."
  },

  // === 03. 泡泡玛特宇航员 ===
  "dr-3": {
    title: "泡泡玛特风格宇航员",
    tags: ["3D Render", "IP Design", "Blind Box", "Cute", "C4D"],
    promptCn: `角色描述:
一个可爱的Q版宇航员，大大的头，圆润的身体。穿着带有光泽感的白色宇航服，头盔是透明的玻璃材质，里面有一张萌萌的脸。
材质与光影:
材质：PVC 塑料质感，类似泡泡玛特 (Pop Mart) 玩具，表面光滑。
灯光：柔和的影棚光，边缘光 (Rim light) 勾勒轮廓。
背景:纯色背景或简单的星球装饰，保持画面干净。`,
    promptEn: `A cute chibi astronaut character, Pop Mart blind box style.
Big head, round body, wearing glossy white space suit.
Transparent glass helmet revealing a cute face.
Material & Lighting: PVC plastic texture, smooth surface, clay render style.
Soft studio lighting, rim light, high quality 3D render. C4D, Octane render.
Background: Clean pastel color background, simple planet props.`,
    prompt: "A cute chibi astronaut character, Pop Mart blind box style. PVC plastic texture..."
  },

  // === 04. 极简科技 Logo ===
  "dr-4": {
    title: "极简科技 Logo",
    tags: ["Logo Design", "Graphic Design", "Minimalist", "Vector"],
    promptCn: `设计主题:一个代表“量子计算”的科技公司 Logo。图形主体是一个抽象的字母 "Q"，由发光的线条和点阵组成。
风格:极简主义 (Minimalism)、扁平化设计 (Flat design)、矢量风格 (Vector)，
配色:深蓝色背景，青色和白色的线条，带有科技感的渐变。`,
    promptEn: `A minimalist tech company logo representing "Quantum Computing".
Abstract letter "Q" formed by glowing connecting dots and lines.
Style: Flat vector art, Minimalist, clean lines, Dribbble style.
Colors: Deep blue background, cyan and white gradients.
no realistic, 3d, text, shadow  ar 1:1  v 6.0`,
    prompt: "A minimalist tech company logo representing Quantum Computing..."
  },

  // === 05. 微缩森林 ===
  "dr-5": {
    title: "微缩森林瓶中界",
    tags: ["Macro Photography", "Still Life", "Fantasy", "Nature"],
    promptCn: `画面主体:一个透明的玻璃瓶，瓶子里装有一个微缩的魔法森林。微小的发光蘑菇，还有一条流动的微型河流。
摄影风格:微距镜头 (Macro lens)、景深效果 (Bokeh)、移轴摄影 (Tilt-shift)
光照:瓶子内部发出神奇的微光，照亮了周围昏暗的木桌。`,
    promptEn: `Macro photography of a glass jar containing a miniature magical forest inside.
Tiny glowing mushrooms, moss, and a micro river flowing.
Camera: Macro lens, 100mm, Shallow depth of field, strong bokeh, Tilt-shift effect.
Lighting: Bioluminescent glow from inside the jar, illuminating a dark wooden table.
ar 4:5 stylize 250  v 6.0`,
    prompt: "Macro photography of a glass jar containing a miniature magical forest inside..."
  },

  // === 06. 流体博物馆 ===
  "dr-6": {
    title: "流体未来博物馆",
    tags: ["Architecture", "Futuristic", "Zaha Hadid", "Parametric"],
    promptCn: `建筑描述:一座白色的未来主义博物馆，坐落在海边。建筑线条流畅，呈现出有机的流体形状，风格类似扎哈·哈迪德 (Zaha Hadid)。
环境与时间:黄昏时刻，金色的阳光洒在白色的建筑表面，海面波光粼粼。
渲染:超广角镜头、建筑可视化 (ArchViz)、8K 分辨率`,
    promptEn: `Architectural photography of a futuristic white museum located by the sea.
Organic fluid shapes, parametric design, Zaha Hadid style.
Smooth curves, concrete and glass materials.
Environment: Golden hour, warm sunlight hitting the white curves, reflection on the water.
Tech: Ultra wide angle shot, Unreal Engine 5 architectural visualization, 8k, hyper-realistic.`,
    prompt: "Architectural photography of a futuristic white museum located by the sea..."
  },

  // === 07. 赛博龙女 ===
  "dr-7": {
    title: "新中式赛博龙女",
    tags: ["Guochao", "Illustration", "Chinese Style", "Cyberpunk"],
    promptCn: `角色:
一位穿着改良汉服的龙族少女，头上长着晶莹剔透的龙角。衣服上有金色的刺绣，混合了现代的机械装备。
风格:国潮插画风格
矢量线条，色彩鲜艳（红、金、青）
敦煌壁画配色
背景:祥云缭绕，背后有一个巨大的全息投影月亮。`,
    promptEn: `Illustration of a dragon girl wearing modified Hanfu (Chinese traditional clothing).
Translucent dragon horns, golden embroidery mixed with cyberpunk mechanical gear.
Style: Guochao art style (Modern Chinese Trend), Vector lines, vibrant colors (Red, Gold, Cyan), Dunhuang mural color palette.
Background: Surrounded by auspicious clouds, huge holographic moon in the background.`,
    prompt: "Illustration of a dragon girl wearing modified Hanfu..."
  },

  "dr-8": {
    title: "朱迪和松果的联名杂志",
    tags: ["Branding", "Fashion", "Photography", "Portrait", "Typography"],
    promptCn: `一张宽高比为9:16的垂直肖像照片,展示了一张干净、独立的高级光面时尚杂志封面。杂志顶部是巨大的黑色粗衬线字体标题 “SONGGUO”，散发着奢华品牌的氛围。
主视觉:
《疯狂动物城》朱迪·霍普斯(Judy Hopps)的超写实高级时尚大片。她摆出自信、充满张力的超模姿势，手中精致地拿着一颗天然松果。
服装:
朱迪穿着一套极其显眼、夺目且昂贵的高级定制时装（例如带有金色刺绣结构的鲜艳祖母绿丝绸外套）。
排版细节:
主标题下方是非常简短的副标题: “JUDY x SONGGUO”。
封面底部角落包含期号“ISSUE 2025”、今天的日期、一个逼真的条形码和价格“$25.00”。
背景是干净、中性的高级摄影棚渐变背景。`,
  },

  "dr-9": {
    title: "上海地标微缩冰箱贴",
    tags: ["Product Photography", "Miniature", "Creative"],
    promptEn: `A clear, directly top-down photograph of shanghai landmarks as realistic miniature 3D magnets, arranged neatly in parallel lines and right angles, knolling on a neutral surface. 
At the top-center, place a souvenir magnet displaying the city name written in Chinese characters, and a handwritten post-it note also written in Chinese characters showing the current temperature and weather conditions.
Incorporate realistic miniature items necessary for today's weather into the knolling arrangement. 
No repeats of any object. Aspect ratio 1:1.`,
  },

  "dr-10": {
    title: "一张黑白影棚肖像照",
    tags: ["Portrait", "Photography", "Black and White"],
    promptCn: `上传的图片是一张黑白影棚肖像照，照片中的年轻女子面无表情地直视镜头。她身穿一件纯黑色圆领毛衣。
光影设置: 背景为深黑色，左侧采用硬朗的影棚灯光，面部阴影清晰，颧骨高光锐利，皮肤纹理极其细腻，呈现出逼真的照片效果。
参数: 照片使用85mm镜头拍摄,宽高比为3:4。`,
    promptEn: `Black and white studio portrait of the young woman in the uploaded image, looking directly into the camera with a calm, neutral expression. 
She is wearing a plain black crew-neck sweater. Deep black background with hard-edged studio lighting from the left, crisp facial shadows, sharp highlights on cheekbones, ultra-detailed skin texture, photorealistic, captured with an 85mm lens. 
3:4 aspect ratio.`,
  },

  "dr-11": {
    title: "Q版星巴克迷你概念店",
    tags: ["Branding", "Character", "Fashion", "Landscape", "Product", "Toy"],
    promptCn: `这款3D Q版星巴克迷你概念店设计别具匠心,其外观灵感源自品牌最具代表性的产品和包装。
场景描述:
店铺共两层，宽敞的落地玻璃窗将温馨精致的内部装潢尽收眼底：品牌主色调主题的装饰、温暖的灯光,以及身着品牌专属服装的忙碌员工。可爱的小人偶在街道上漫步、休憩,周围环绕着长椅、路灯和盆栽植物,营造出迷人的都市景象。
渲染风格:
该店铺采用Cinema 4D软件渲染,呈现出微缩城市景观风格，兼具盲盒玩具的精致美感，细节丰富，栩栩如生，柔和的灯光更增添了午后轻松惬意的氛围。`,
  },

  "dr-12": {
    title: "中国各省美食地图",
    tags: ["Food", "Map", "Creative"],
    promptCn: `一张极其详细的、俯拍的中国地图照片，明确包括台湾岛。整个地图完全由各省的标志性美食雕刻和堆砌而成，精确构成地理形状，放在一张质朴的木桌上，光线令人垂涎。
东北三省: 堆积的锅包肉、地三鲜和东北大拉皮。
内蒙古: 广阔的烤全羊和手把肉。
四川: 沸腾的、红色的麻辣火锅海洋。
广东: 蒸笼里的点心（虾饺、烧卖）和蜜汁叉烧拼凑而成。
北京: 片好的烤鸭和荷叶饼层叠而成。
上海: 一堆精致的小笼包。
台湾: 一堆油光发亮的卤肉饭。`,
  },

  "dr-13": {
    title: "9种服装风格和背景 (3x3网格)",
    tags: ["Fashion", "Portrait", "Photography", "Outfit Change"],
    promptCn: `基于[上传人物图片]并保持其面部特征绝对不变，生成一张高质量的3x3九宫格拼贴照片，九个独立画面分别展示该人物身着：
1. 飘逸粉蓝唐代汉服（古典园林背景）
2. 干练深蓝空姐制服配丝巾（现代机场航站楼背景）
3. 墨绿刺绣丝绸旗袍（复古上海风情室内背景）
4. 威武黑金锦衣卫飞鱼服配绣春刀（黄昏故宫背景）
5. 洁白现代护士服（明亮温馨医院背景）
6. 典雅酒红织锦唐装（传统茶楼庭院背景）
7. 青春海军蓝JK制服百褶裙（樱花盛开校园背景）
8. 帅气皮革飞行员夹克制服戴墨镜（机库飞机旁背景）
9. 时尚米色风衣休闲装（现代都市街景背景）
要求: 整体画面要求电影感光影、细节精致且色彩和谐统一。宽高比9:16`,
  },

  "dr-14": {
    title: "城市动态天气卡片",
    tags: ["3D Render", "Miniature", "City"],
    promptCn: `以清晰的45°俯视视角，呈现城市地标的 3D Q版微缩场景，画面竖版（9:16）居中构图，建筑置于画面中央，突出微缩模型精准细致的立体美感。 
视觉风格: 画面材质细腻温润，体现真实的PBR质感与柔和逼真的光影效果。整体构图简洁干净、视觉统一，巧妙在城市建筑中融入天气元素，动态天气效果与城市景观融合互动，营造身临其境的天气视觉氛围。 
排版: 图片正上方显示醒目的代表天气的图标，图标下方是日期（超小字）、温度范围（中号），图标上方是城市名（大号）。
城市名称：【云南】`,
    promptEn: `Present a clear, 45° top-down view of a vertical (9:16) isometric miniature 3D cartoon scene, highlighting iconic landmarks centered in the composition.
The scene features soft, refined textures with realistic PBR materials and gentle, lifelike lighting. Weather elements are creatively integrated into the urban architecture.
Display a prominent weather icon at the top-center, with date and temperature range beneath it. City name directly above.
City name:【Yunnan】`,
  },

  "dr-15": {
    title: "多彩剪贴簿海报风格",
    tags: ["Fashion", "Landscape", "Photography", "Retro", "Poster Design"],
    promptCn: `风格: 色彩缤纷的Y2K剪贴簿海报美学，鲜艳的贴纸，多个人物穿着相同的服装和发型，摆出不同的姿势，并配以剪纸，色彩斑斓的笔触和线条，无框拼贴风格。全息纹理、柔和的渐变色、闪光点缀、趣味涂鸦、杂志剪贴图案，布局看似混乱却又平衡，极具艺术性和视觉吸引力。
主主体: 一位年轻的千禧年风格女性。
姿势:俏皮自信的Y2K姿势——微微侧身扭胯，表情可爱又酷，微微嘟嘴。
服装:浅色短款宽松毛衣，粉色裙子配白色腰带，白色短袜配彩色粉彩条纹。
配件:彩色塑料手镯，厚重的彩色戒指，闪亮的肚链。
发型:Y2K 半上半下，粉彩花朵发夹。
视觉元素:心形星星蝴蝶贴纸，复古闪光，宝丽来相框，霓虹轮廓，涂鸦边框。`,
    promptEn: `Colorful Y2K scrapbook poster aesthetic, vibrant stickers, multiple subjects wearing the same outfit and hairstyle with different poses and cutouts, colorful strokes and lines, frameless collage style.
Holographic textures, pastel gradients, glitter accents, playful doodles, magazine cut-out graphics, chaotic yet balanced layout.
Main subject: A young Y2K-styled woman.
Pose: Playful and confident Y2K pose, slight side hip pop.
Outfit: Cropped oversized sweater in pastel color, pastel skirt with white belt.
Visuals: Heart, star, and butterfly stickers, Retro sparkles, Polaroid frames, Neon outlines.`,
  },

  "dr-16": {
    title: "9种照片专业打光效果",
    tags: ["Portrait", "Character", "Photography", "Lighting"],
    promptCn: `编辑场景，3x3网格布局，冷灰色无缝背景。人物（面部特征与上传图片完全一致）身穿炭灰色无袖连衣裙。灯光：大型顶置柔光箱，轻微侧向反射光。
照片列表:
1. 脸颊和颈部特写，前景手指虚化（85mm，f/1.8)
2. 目光锁定镜头，可见顶部反光（85mm，f/2.0)
3. 单色下巴托手肖像，画面填充强烈（50mm，f/2.2）
4. 透过模糊的肩带拍摄的半遮肩照（85mm，f/2.0)
5. 正面特写，面部阴影交错（50mm，f/2.5）
6. 斜角拍摄的原始人像，头发蓬乱（85mm，f/2.2）
7. 双手置于锁骨附近的特写（50mm，f/3.2）
8. 坐姿半身侧面照，画面边缘虚化（35mm，f/4.5）
9. 侧面微距照，单颗水滴高光（85mm，f/1.9）
原始素材，平滑对比度，编辑柔化效果。`,
    promptEn: `Editorial 3x3 grid in a cool-grey seamless backdrop. Character wearing a charcoal sleeveless dress. Lighting: large overhead softbox, faint side bounce. 
Shots include: 1. tight cheek + neck close-up with blurred finger foreground; 2. eyes locked to lens... (see Chinese for details)
RAW, smooth contrast, editorial softness.`,
  },

  "dr-17": {
    title: "一张超逼真的8K人像",
    tags: ["Portrait", "Photography", "Realistic"],
    promptCn: `创作一张超逼真的8K人像，人物站在深红色背景前。她五官轮廓分明，一头凌乱的深色头发，表情自信而略带锐利。她身穿黑色西装外套，内搭白色衬衫，领口微微敞开，系着一条红色条纹网状领带。
光影与氛围: 无限免费：戏剧性的红黑光影突显了她脸部、下颌和颈部的轮廓，营造出电影般的震撼氛围。
请勿修改面部特征，并保持头部姿势不变。`,
    promptEn: `Create an Ultra-realistic 8k portrait, standing against a deep red background. She has sharp facial features, messy styled dark hair, and a confident, slightly intense expression. She is wearing a black suits jacket over a white shirt with the collar slightly open paired with a net red stripped tie.
Dramatic red and black lighting highlights the contour of her face, jawline, and neck creating a cinematic powerful and moody atmosphere.`,
  },

  "dr-18": {
    title: "大幅的油画肖像",
    tags: ["Fashion", "Interior", "Photography", "Portrait", "Art"],
    promptCn: `使用上传的照片作为面部参考，绘制背景中的大幅油画肖像和前景中的全身女性形象。创作一个时尚的电影场景：一位女性自信地坐在她豪华私人办公室的桌子上。她身着宽松的粉彩色连衣裙或宽松的浅色套装，优雅中透着一丝大胆。
背景: 是一幅同一位女性的巨幅艺术肖像，以富有表现力的粉彩色笔触——粉色、桃色、米色——绘制而成，动感流畅的笔触营造出灵动的氛围。柔和的日光，时尚大片的风格，简洁的构图。签名：Jin Cen`,
    promptEn: `Use the uploaded photo as the face reference for both the large painted portrait in the background and the full-body woman in the foreground. Create a stylish cinematic scene with a woman sitting confidently on the table in her personal luxury office room. She wears a loose pastel-toned dress or an oversized soft-colored suit.
The background features a huge artistic portrait of the same woman, painted with expressive pastel brushstrokes. Soft daylight, fashion-editorial mood, clean composition.`,
  },

  "dr-19": {
    title: "泡泡玛特发展史",
    tags: ["Product Design", "Illustration", "Infographic", "3D"],
    promptEn: `Role & Subject: A massive, encyclopedic 16:9 3D infographic poster titled "THE EVOLUTION OF POP MART". 
Visual style: High-end fusion of museum-grade product photography and complex technical engineering blueprints.
The Hero Lineup: A complete, linear chronological lineup of all historical versions, arranged on a measurement scale.
Rendering: Hyper-realistic 3D, 8k resolution.
Background: A deep, rich Brand Color textured background.
Dense Annotation Network: Hundreds of fine white hairlines connecting specific Key Components to compact text blocks.
Technical Specs: Octane render, Unreal Engine 5 aesthetic, editorial layout, information design masterpiece.`,
  },

  "dr-20": {
    title: "城市户外LED屏上的3D视觉效果",
    tags: ["City", "Illustration", "Design", "3D"],
    promptCn: `创作一张超逼真的8一块巨大的L型裸眼3D LED屏幕醒目地矗立在繁华的城市十字路口，其标志性的建筑风格令人联想起东京新宿或成都太古里。
屏幕上播放着引人入胜的裸眼3D动画。人物和物体拥有惊人的立体感，仿佛突破屏幕的边界，向外延伸或栩栩如生地悬浮在半空中。
在逼真的日光条件下，这些元素在屏幕表面和周围的建筑物上投射出逼真的阴影。动画细节丰富，色彩鲜艳，与城市环境和头顶明亮的天空完美融合。
场景描述: [一只憨态可掬的巨型熊猫用爪子逗弄着路过的行人，它毛茸茸的爪子和好奇的脸庞逼真地延伸到屏幕周围的空间]`,
    promptEn: `An enormous L-shaped glasses-free 3D LED screen situated prominently at a bustling urban intersection.
The screen displays a captivating glasses-free 3D animation featuring a giant, adorable panda teasing passersby.
The characters and objects possess striking depth and appear to break through the screen’s boundaries.
Under realistic daylight conditions, these elements cast lifelike shadows.`,
  },

  "dr-21": {
    title: "纸艺剪纸效果角色",
    tags: ["Fashion", "Character", "Cartoon", "Craft"],
    promptCn: `[角色] = 陈平安
木质书桌上摆着一件充满奇趣的手工纸艺作品：将手绘的 [角色] 从纸上剪下，折叠成一个立体的站立小人偶。
[角色] [姿势]。在它身旁的纸面上，不仅有那个留下的空白剪影，还手写着一句它的 [经典台词]。
画面比例：1080 x 1080`,
  },

  "dr-22": {
    title: "彩色手绘风格表情包",
    tags: ["Emoji", "Character", "Cartoon"],
    promptCn: `为我生成图中角色的绘制 Q 版的，LINE 风格的半身像表情包，注意头饰要正确
彩色手绘风格，使用 4x6 布局，涵盖各种各样的常用聊天语句，或是一些有关的娱乐 meme
其他需求：不要原图复制。所有标注为手写简体中文。
生成的图片需为 4K 分辨率 16:9`,
  },

  "dr-23": {
    title: "可爱玩偶版电影海报",
    tags: ["Character", "Cartoon", "Poster", "3D"],
    promptCn: `style_name: "3D Q-Version Healing Toy Movie Poster"
Description: A highly tactile 3D digital rendering style mimicking macro product photography of premium designer toy collectibles.
Core Aesthetic: Contrast between matte resin/vinyl surfaces and soft, flocked plush textures. Warm, diffused light.
Composition: 
Top: Stylized Bilingual Movie Title (Chinese above English).
Center: Main Character(s) in Miniature Diorama (Cute Q-version figurines).
Bottom: Healing Interpretation Quote.
Lighting: Soft, warm, diffused natural light. Golden hour feel.`,
  },

  "dr-24": {
    title: "杂志风旅游照片",
    tags: ["Fashion", "Character", "Photography", "Layout"],
    promptCn: `使用[地址]提示生成杂志风旅游照片集，融入实时天气与角色旅游场景，布局精美如专业摄影。
请将指定角色融入到位于 [重庆洪崖洞] 的实景中，呈现他们在此地观光的场景。务必确保角色本人脸部特征（包括五官、比例等）100% 保留且完整一致。
整体排版需如同摄影集般精致，充分利用9:16的画面比例，制作成杂志封面。`,
  },

  "dr-25": {
    title: "随手拍的照片上添加超写实微观景观",
    tags: ["Landscape", "Miniature", "Creative"],
    promptCn: `将超精细的微缩世界逼真地融入上传照片中的现有物体/表面。分析照片，找到最合适的平面或曲面（例如桌面、柱顶、石面、书皮、手掌等）来放置微缩景观。
微缩世界规格：
比例：微缩人物相对于底座表面的高度应为 2-5 毫米
极致逼真的细节，达到专业微距摄影品质
包含多种微观元素：微型建筑、微型树木、小型车辆、微型人物、街道设施、水景
技术要求：
真实照片与微缩世界无缝融合
自然光照，移轴摄影效果，浅景深
8K 超高清画质`,
    promptEn: `Photorealistic integration of an ultra-detailed miniature world onto the existing object/surface in the uploaded photo.
Scale: Miniature people should be 2-5mm tall.
Include diverse micro elements: tiny buildings, miniature trees, small vehicles, microscopic people.
Technical: Seamless integration, Natural lighting, Tilt-shift photography effect, Shallow depth of field, 8K quality.`,
  },

  "dr-26": {
    title: "艺术圣诞肖像：瓶中微缩自我",
    tags: ["Portrait", "Christmas", "Surreal", "Macro", "Artistic"],
    promptCn: `Concept (画面构思)
一幅精心构图、竖向构图的艺术圣诞肖像。一位真人沐浴在柔和温暖的节日灯光中，手捧一个透明玻璃罐，仿佛捧着一颗温柔的星辰。
Microcosm (微观世界)
罐中，是她年轻时的微缩版——与真人是同一人——独自伫立在一个自成一体、白雪皑皑的微观世界里。这两个“自我”并非镜像；相反，他们的目光交汇，在现实与凝练的身份之间展开了一场无声的对话。
Visual Guidelines (视觉规范)
1. Lighting & Atmosphere (光影与氛围)
外部: 真人被柔和的琥珀色圣诞彩灯照亮，灯光如同弥漫的星空般柔和地融入背景。
反射: 玻璃表面闪烁着斑驳的光影，将真容分割成层层叠叠的碎片，沿着罐身的弧度逐渐消逝。
2. Details (细节描写)
罐内景象: 积雪被雕琢成月球表面的轮廓，旁立一棵孤零零的瓶刷树。
微缩人物: 身着精致的节日盛装：编织纹理、簇绒羊毛纤维清晰可见。
霜花纹理: 罐子表面凝结成象征性的星座图案，暖色调串灯以抽象螺旋状缠绕。
3. Character (人物表现)
真人神情沉思，深邃得近乎电影画面。他们的呼吸在玻璃边缘凝结成薄雾。
Aesthetic (整体美学)
整幅作品营造出层叠交错的宇宙景象：外部世界郁郁葱葱、温暖宜人，而内部世界则精致静谧、神圣庄严。8K 超高清画质，雕塑般的反射效果。`,
    promptEn: `A meticulously crafted, vertically composed artistic Christmas portrait.
A real person stands bathed in soft, warm holiday glow, cradling a transparent glass jar close to their face as if holding a gentle star.
Inside the jar resides a miniature version of their younger self—the same individual—standing alone within a self-contained, snow-covered microcosm.
These two "selves" are not mirror images; instead, their gazes intersect, initiating a silent dialogue between reality and distilled identity.
Lighting & Atmosphere:
The real figure is illuminated by gentle amber Christmas lights, their radiance dissolving softly into the background like a diffused constellation. The glass surface dances with fragmented reflections, splintering the true visage into layered shards that gradually fade along the jar’s curvature—forming a visual bridge between the outer world and the inner realm.
Microcosm Details:
Within the jar, snow is sculpted into evocative, lunar-like contours. Beside the tiny figure stands a solitary bottlebrush tree. The miniature self wears intricately detailed festive attire: woven textures, tufted wool fibers, and the plush tactility of winter garments are rendered with astonishing clarity. A serene luminescence glows from deep within the snow, casting an upward light upon the small figure—as if the snow itself still holds the memory of light.
Texture & Symbolism:
Frost patterns crystallize on the jar’s surface—not random snowflakes, but symbolic constellations echoing the twinkling lights behind the figure. Warm-toned fairy lights wrap around the vessel in abstract spirals, transforming it into a quiet cosmic nucleus.
Character & Composition:
The real person’s expression is contemplative, almost cinematic in its depth. Their breath condenses into a delicate mist along the glass rim, adding a fleeting tenderness to the scene.
For visual cohesion, costumes and props should remain consistent between the inner and outer figures.
Aesthetic:
The entire composition evokes layered universes: the external world lush and warm, the internal world refined, suspended, and sacred.
Rendered in 8K ultra-photorealistic quality, with masterful artistic lighting, sculptural reflections, and poetic textural detail—this image embodies an intimate, symbolic, and quietly supernatural Christmas aesthetic.`,
    prompt: "A meticulously crafted, vertically composed artistic Christmas portrait..."
  },

  "dr-27": {
    title: "无边框微缩世界建筑师",
    tags: ["Miniature", "Architecture", "3D", "Isometric", "Creative"],
    promptCn: `角色定义
你是一位无边框微缩世界建筑师。你的目标是创造一个高度密集、垂直堆叠的等距世界，使其感觉像是无限延伸的现实切片。你必须移除所有人为的边界、木框或玻璃盒。地形表面必须延伸至图像的边缘。
核心能力 (关键视觉策略)
1. 消除容器和剖面： 严禁使用底板、框架，底部边缘不得有任何垂直的地面剖面或切口。地形表面本身必须延伸至画面底部。
2. 无限延伸的表面： 图像的底部边缘必须显示地形的顶部表面（例如，草地、路面、沙地），如同摄像机俯视屏幕外延伸的地面一般。
3. 集成式 3D 标题：[作品标题]必须渲染成巨大的电影级 3D 字体，直接位于前景的延伸地形表面上。
4. 高密度垂直堆叠：继续使用“之字形上升”方法，从下到上排列 5-7 个场景。
工作流程 (思路链)
1. 构思“无限延伸的地面”：想象站在山坡上；脚下的地面没有截断的边缘，而是无限延伸。这就是底部边缘视图。
2. 布局之字形：
底部（前景）：位于延伸地面上的 3D 标题 + 第 1 和第 2 拍。
中间（上升）：第 3、4、5 拍向上蜿蜒。
顶部（背景）：节拍 6 和 7 逐渐融入大气层。
3. 文本整合：3D 文本应在其所在的地形表面上投射阴影。
输出格式 (最终提示结构)
[1. 无边框全出血构图]
一幅无边框、边缘到边缘的高角度等距景观图，代表[插入作品标题]。图像不包含在框内，并且底部没有垂直横截面。地形表面充满整个 16:9 画面，一直延伸到底部角落。构图遵循一条垂直之字形路径（“脊柱”），连接7 个不同的叙事层。
[2. 七层上升世界]
地形是一片连续上升的广阔区域：
[图层 1 - 底部前方]：最前景的表面，延伸至底部边缘。巨大的 3D 文字“[插入作品标题]”矗立于此处，种植在地形上。
[图层 2 - 前右侧]：路径向上延伸。
[图层 3 - 中左侧]：上方堆叠着场景。
[图层 4 - 中心核心]：密集的过渡区域。
[图层 5 - 中右侧高地]：陡峭上升。
[图层 6 - 左上角]：场景描述。
[图层 7 - 顶峰]：最高点。
[3. 角色攀登]
[插入角色名称] 以微缩模型的形式贯穿整个攀登过程。
[4. 品牌与氛围]
无边框、无剖面图。光照采用电影级立体效果。文本“[插入作品标题]”以[材质样式] 3D字体呈现，并在地面上投射阴影。采用移轴摄影、微距细节、黏土动画纹理、Octane渲染，8K分辨率。--no wooden base, box, frame, borders --ar 16:9 --stylize 750 --v 6.0`,
    promptEn: `Role Definition
You are a Borderless Miniature World Architect. Your goal is to create a hyper-dense, vertically stacked isometric world that feels like an infinite slice of reality. You must remove all artificial borders, wooden frames, or glass boxes. The landscape surface must bleed to the very edges of the image.
Core Competency (CRITICAL VISUAL STRATEGY)
1. Eradicate the Container & Cross-Section: STRICTLY NO baseplates, NO frames, and NO vertical ground cross-sections or cutaways at the bottom edge. The terrain surface itself must extend right to the bottom of the frame.
2. Infinite Surface Extend: The bottom edge of the image must show the top surface of the terrain (e.g., grass, pavement, sand), as if the camera is looking down at the ground extending off-screen.
3. Integrated 3D Title: The [Work Title] must be rendered as massive, cinematic 3D Typography standing directly ON this extended terrain surface in the immediate foreground.
4. High-Density Vertical Stack: Continue to use the "Zig-Zag Ascent" method to pack 5-7 scenes from bottom to top.
Work Process (Internal "Chain of Thought")
1. Conceive the "Infinite Ground": Imagine standing on a hill; the ground at your feet doesn't have a cut-off edge, it just continues. That's the bottom edge view.
2. Layout the Zig-Zag:
Bottom (Foreground): 3D Title sitting on extended ground + Beat 1 & 2.
Middle (Ascending): Beat 3, 4, 5 winding upwards.
Top (Background): Beat 6 & 7 fading into the atmosphere.
3. Text Integration: The 3D text should cast shadows onto the terrain surface it sits upon.
Output Format (The Final Prompt)
[1. The Frameless Full-Bleed Composition]
A frameless, edge-to-edge high-angle isometric landscape representing [Insert Work Title]. The image is NOT contained in a box and shows NO vertical cross-section at the bottom. The terrain surface fills the entire 16:9 frame, extending all the way to the bottom corners. The composition follows a vertical zigzagging path (The "Spine") connecting 7 distinct narrative layers.
[2. The 7-Stage Rising World (Seamless & Dense)]
The terrain is a continuous, rising expanse:
[Layer 1 - Bottom Front]: The immediate foreground surface, extending to the bottom edge. Massive 3D text spelling "[Insert Work Title]" stands here, planted on the terrain.
[Layer 2 - Front Right]: The path climbs.
[Layer 3 - Mid-Left]: Stacked above.
[Layer 4 - Center Core]: A dense transition zone.
[Layer 5 - Mid-Right Elevated]: Rising steeply.
[Layer 6 - Upper Left]: Scene description.
[Layer 7 - Top Peak]: The highest point.
[3. The Character's Ascent]
[Insert Character Name] appears as a recurring miniature figure throughout the climb.
[4. The Branding & Atmosphere]
No frames, no borders, no cross-sections. Lighting is cinematic and volumetric. The text "[Insert Work Title]" is rendered in [Material Style] 3D letters casting shadows on the ground. Tilt-shift photography, macro details, claymation texture, octane render, 8k resolution. --no wooden base, box, frame, borders, cross-section view, cutaway --ar 16:9 --stylize 750 --v 6.0`,
    prompt: "Borderless Miniature World Architect - Create a hyper-dense, vertically stacked isometric world..."
  },

  "dr-28": {
    title: "时尚人像拼贴大片",
    tags: ["Fashion", "Portrait", "Collage", "Magazine", "Creative"],
    promptCn: `1.总体目标
功能描述：根据用户上传的人物参考图，提取人物气质、妆容风格、光线和色彩特征，创作一张独一无二的时尚人像拼贴大片。
差异要求：保留参考人物的五官结构与整体气质，不直接临摹原图，妆容和构图在同一风格体系中做创意变化。
2.画面构图与输出形式
主画面：生成人物面部超近景或近景，头部和肩部占据画面大部分空间，视线参考原图气质设计。
拼贴结构：右侧或一角增加多张小图拼贴，包含侧脸特写、手部特写、局部妆容特写等，形成杂志排版感。
背景方式：保持背景简洁干净，以纯色或轻微明度过渡为主，突出人物与妆容。
3.文字与图形设计
标题文字：画面上方放置大号杂志标题，字形简洁有力量，保持居中或上中对齐。
副标题与小字：在画面一侧或底部添加几行小字（主题词、日期），排列整齐，字号统一。
几何图形：在人物周围加入细线条、窄矩形色块或半透明色块，增加平面构成感。
4.风格继承与变化
色彩继承：整体色调、明暗对比贴合参考图，主色提取自最显眼的妆容或服饰。
光线继承：还原原图的光线方向与质感（柔光或硬光）。
创意妆容：在参考风格基础上增加局部夸张处理（如扩大腮红范围、强化唇部晕染、增加雀斑或高光点）。
细节手势：增加触碰嘴唇、脸颊、眼下等手部动作，增强故事感。
5.整体质感
清晰度：8K超清，保持皮肤毛孔和细节可见，避免过度磨皮。
色调处理：整体色调统一，强化主色，降低杂乱颜色。`,
    promptEn: `High-fashion editorial portrait collage, magazine cover layout design.
Main Visual: An ultra close-up or close-up shot of a model's face and shoulders, capturing a specific mood and temperament derived from the reference image.
Collage Elements: On the right side or corners, include artistic inset shots: side profile silhouette, macro details of hands touching lips or cheeks, and extreme close-up of eye/lip makeup.
Design & Typography: Large, bold, minimalist magazine title centered at the top. Small, organized sans-serif text (dates, themes) at the bottom. Thin geometric lines and semi-transparent color blocks overlaying the composition for a graphic design feel.
Style & Makeup: Creative variations of the reference makeup—exaggerated blush, smudged lips, or added freckles/highlights. Fashion accessories (earrings, rings) matching the main color palette.
Lighting & Texture: Professional studio lighting (matching reference softness/hardness). 8k resolution, ultra-realistic skin texture, visible pores, sharp focus on eyes, soft background colors.`,
    prompt: "A high-fashion portrait collage with magazine layout and creative makeup details..."
  },

  "dr-29": { title: "待填标题 29", tags: [], promptCn: ``, promptEn: `` },
  "dr-30": { title: "待填标题 30", tags: [], promptCn: ``, promptEn: `` },
  "dr-31": { title: "待填标题 31", tags: [], promptCn: ``, promptEn: `` },
  "dr-32": { title: "待填标题 32", tags: [], promptCn: ``, promptEn: `` },
  "dr-33": { title: "待填标题 33", tags: [], promptCn: ``, promptEn: `` },
  "dr-34": { title: "待填标题 34", tags: [], promptCn: ``, promptEn: `` },
  "dr-35": { title: "待填标题 35", tags: [], promptCn: ``, promptEn: `` },
  "dr-36": { title: "待填标题 36", tags: [], promptCn: ``, promptEn: `` },
  "dr-37": { title: "待填标题 37", tags: [], promptCn: ``, promptEn: `` },
  "dr-38": { title: "待填标题 38", tags: [], promptCn: ``, promptEn: `` },
  "dr-39": { title: "待填标题 39", tags: [], promptCn: ``, promptEn: `` },
  "dr-40": { title: "待填标题 40", tags: [], promptCn: ``, promptEn: `` },
  "dr-41": { title: "待填标题 41", tags: [], promptCn: ``, promptEn: `` },
  "dr-42": { title: "待填标题 42", tags: [], promptCn: ``, promptEn: `` },
  "dr-43": { title: "待填标题 43", tags: [], promptCn: ``, promptEn: `` },
  "dr-44": { title: "待填标题 44", tags: [], promptCn: ``, promptEn: `` },
  "dr-45": { title: "待填标题 45", tags: [], promptCn: ``, promptEn: `` },
  "dr-46": { title: "待填标题 46", tags: [], promptCn: ``, promptEn: `` },
  "dr-47": { title: "待填标题 47", tags: [], promptCn: ``, promptEn: `` },
  "dr-48": { title: "待填标题 48", tags: [], promptCn: ``, promptEn: `` },
  "dr-49": { title: "待填标题 49", tags: [], promptCn: ``, promptEn: `` },
  "dr-50": { title: "待填标题 50", tags: [], promptCn: ``, promptEn: `` },
};
