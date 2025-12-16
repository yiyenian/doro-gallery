export interface DataRecord {
  title: string;
  prompt?: string;
  tags?: string[];
  promptCn?: string;
  promptEn?: string;
}

export const localData: Record<string, DataRecord> = {
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
    title: "3D名场面海报生成器",
    tags: ["3D Render", "Isometric", "Movie Poster", "DreamWorks", "Typography"],
    promptCn: `指令：请为影视剧/小说《[插入名称]》设计一张高品质的3D海报。
1. 知识库检索：
首先检索《[插入名称]》的内容，找出一个最具代表性的名场面或核心地点。
2. 核心构图（轴侧微缩模型）：
在画面中央，构建该场景的精致轴侧视角3D微缩模型。
风格：梦工厂动画般的细腻、柔和渲染风格。
细节：还原建筑细节、人物动态及环境氛围（如暴风雨或午后阳光），自然融合光影。
3. 背景环境（虚空意境）：
拒绝纯白底。在模型周围营造带有淡淡水墨晕染和流动光雾的虚空环境。
色调雅致，具有呼吸感和纵深感，衬托模型的珍贵感。
4. 排版与文字（博物馆铭牌感）：
底部居中：书名/片名《[插入名称]》，字体设计需匹配原著风格。
书名下方：自动检索一句关于该场景的经典描写或台词，使用优雅衬线体。
整体布局平衡精致，如同高级博物馆藏品铭牌。`,
    promptEn: `An exquisite isometric 3D miniature poster for [Insert Title].
Centerpiece: A detailed 3D diorama of [Famous Scene/Location], rendered in DreamWorks Animation style—soft, delicate, and expressive.
Details: Intricate architecture, dynamic tiny characters, and atmospheric weather effects seamlessly integrated.
Background: A void environment with faint ink-wash smudges and flowing light mist. Elegant tones, creating depth and "breathing space" around the model. Not a plain white background.
Typography:
Bottom Center: Large stylized title "[Insert Title]" matching the original aesthetic.
Below Title: A classic quote "[Insert Quote]" in an elegant serif font.
Layout: Balanced and refined, resembling a high-end museum collection nameplate.
Tech: 3D render, Octane Render, 8k resolution, soft cinematic lighting.`,
    prompt: "Exquisite 3D isometric poster of a movie/novel scene, DreamWorks style...",
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

  "dr-29": {
    title: "3D微缩城市岛屿模板",
    tags: ["3D Render", "City", "Map", "Miniature", "Unreal Engine"],
    promptCn: `【指令】请根据用户输入的城市，生成一张超高清3D微缩岛屿海报：
1. 核心构图：
主体：一座漂浮在白云之上的微缩岛屿，其形状必须与 [插入城市名称] 的地图轮廓完全一致。
标题：岛屿中心，巨大的白色3D汉字 “[插入城市名称]” 镌刻于地表之上，字形现代厚重。
2. 城市细节 (融合)：
地标建筑：岛屿上无缝融合该城市的标志性建筑（请列举3-4个，如：[地标A]、[地标B]、[地标C]）。
自然元素：包含该城市的地理特征（如：[海岸线/山脉/河流/森林]）。
特色装饰：点缀该城市的市花或特色植物（如：[植物名]）。
3. 视觉风格 (科技与自然的结合)：
纹理：地面装饰以未来感十足的电路板纹理，结合真实的植被覆盖。
灯光：霓虹灯点缀建筑边缘，科技感十足的全息投影标识悬浮空中。
光照：电影级光照，黄金时段（Golden Hour），暖色阳光从侧面打入。
4. 渲染参数：
视角：空中俯视视角 (Aerial View)。
引擎：虚幻引擎5 (Unreal Engine 5) 渲染，OC渲染器风格。
质量：8K分辨率，超写实，色彩鲜艳，细节锐利。`,
    promptEn: `An ultra-HD 3D miniature island floating above white clouds, shaped exactly like the map of [Insert City Name].
Typography: Massive white 3D characters spelling "[Insert City Name]" engraved on the surface in the center.
Landmarks & Nature: Seamlessly integrates the city's iconic landmarks (e.g., [Landmark 1], [Landmark 2]) and natural features (e.g., [Mountains/Rivers/Coastline]). Decorated with [City Flower].
Style & Tech: Futuristic circuit board textures blended with realistic vegetation. Neon accents and holographic projection signs. Cinematic lighting, golden hour.
Render Specs: Aerial view, Hyper-realistic, Unreal Engine 5 render, 8K resolution, vivid colors.`,
    prompt: "An ultra-HD 3D miniature island shaped like a city map..."
  },

  "dr-30": {
    title: "古诗词绘本插画",
    tags: ["Illustration", "Poetry", "Chinese Style", "Children's Book", "Watercolor"],
    promptCn: `[角色] 资深儿童绘本插画师。
[风格] 混合媒介（水彩晕染和彩色铅笔细节）。
[氛围] 治愈、奇幻、童话。
[任务]请检索诗词《[在此输入诗名]》的全文及作者。
根据这首诗的意境，将其转化为一幅横向连续的四场景叙事插画。并将全诗内容以书法形式自然融入画面。
[版式与排版]
构图： 流畅的S形曲线将画面分割成四个连续的场景，并无缝衔接。
标题： 在右上角优雅展示诗名。
印章： 在标题旁盖上一个清晰的传统红色方印，印文为该诗作者的姓名。
全文展示： 请在画面留白处或专门的文字容器中，以竖排书法形式展示全诗内容。
[视觉叙事结构] (请自动对应诗歌的起承转合)
场景 1 (左上 - 起): 对应第一句诗的意象。关键物体、天气、光线。留出自然留白放文字。
场景 2 (左中 - 承): 对应第二句诗的意象。与场景1自然衔接，创造如卷轴或水波般的文字容器。
场景 3 (右中 - 转): 对应第三句诗的意象。画面高潮或动作转折，漩涡状纹理。
场景 4 (右下 - 合): 对应第四句诗的意象。结局或远景，意境悠远，文字如星尘般浮现。
[艺术风格细节]
色彩： 梦幻般的粉彩色调，深邃的夜蓝色，温暖的琥珀色生物发光效果。
纹理： 清晰可见的纸张纹理，柔和的毛边。
角色： 一个古风小孩角色将引导观众踏上旅程。`,
    promptEn: `[Role] Senior Children's Book Illustrator.
[Style] Mixed Media (Watercolor washes and colored pencil details).
[Mood] Healing, Whimsical, Fairy Tale.
[Task]
Retrieve the full text and author of the Chinese poem "[Insert Poem Title Here]".
Visualize this poem as a continuous horizontal 4-panel illustration based on its imagery. Incorporating the full text of the poem into the illustration (e.g., vertical calligraphy).
[Layout]
Composition: A flowing S-curve divides the image into four continuous, seamlessly blended scenes.
Title: Top right corner, elegant layout.
Signature: Place a traditional Chinese red seal (square vermilion chop) next to the title with the author's name.
[Visual Narrative Structure] (Auto-map to the 4 verses)
Scene 1 (Top Left): Imagery of the 1st verse. Natural negative space for text.
Scene 2 (Mid Left): Imagery of the 2nd verse. Flowing connection to Scene 1.
Scene 3 (Mid Right): Imagery of the 3rd verse. Visual climax/turn.
Scene 4 (Bottom Right): Imagery of the 4th verse. Fading/Ending atmosphere.
[Details]
Colors: Dreamy pastels, deep midnight blues, warm amber bioluminescence.
Texture: Visible paper grain, soft deckled edges.
Character: A small child character guides the viewer through the journey.`,
    prompt: "Classical Chinese Poetry Illustration Template - Input title only..."
  },
  
  "dr-31": {
    title: "3x3 人像表情挑战",
    tags: ["Portrait", "Photography", "Expression", "Grid", "Realistic"],
    promptCn: `关键指令：绝对优先级：所有面板中保持相同的面部结构。无论呈现何种表情，都不得改变底层骨骼结构、鼻子形状、眼距或下颌线。每个镜头中都必须清晰可辨。
格式：3x3 网格拼贴
主体：面部参考：用户上传图片
身份锁定：关键：固定身份，与参考面部特征零偏差。强制 100% 精确匹配。
细节保留：确保每个面板中瞳距一致、鼻梁形状精确、下颌结构准确。
负面约束：不要改变鼻子形状，不要改变眼睛大小或间距，不要改变颧骨结构，不要有整容效果。
风格：超写实人像摄影，8K分辨率，RAW照片美学。
皮肤：高度精细的自然皮肤纹理，可见毛孔，细微瑕疵，逼真肤色，在所有光照条件下保持一致。
相机设置：使用索尼A7R IV拍摄，85mm人像镜头，f/1.8光圈，眼睛清晰对焦，浅景深。
面板详情：
1.喜悦：灿烂自然的笑容（保持下颌线条），肩膀微微抬起。高马尾，留有几缕碎发。粉彩色棉质连帽衫。柔和渐变天蓝色影棚背景。
2.惊讶：双手靠近脸部，睁大眼睛（不改变眼形），自然反应。自然蓬松的波浪卷发。休闲棉质T恤衫。浅桃色影棚背景。
3.悲伤：低头，眼神柔和，充满情感。凌乱的低发髻。宽松羊毛衫。柔和的薰衣草色影棚背景。
4.温柔：温柔的微笑，微微侧头。优雅的半扎发。柔软的针织上衣。暖米色影棚背景。
5.大胆：自信的眼神，下巴微微抬起（展现流畅的下颌线条）。别致的背头。时尚的皮夹克或牛仔夹克。深蓝绿色影棚背景。
6.俏皮：脸颊微微鼓起（确保鼻子保持不变），眼神俏皮。短款纹理波波头。条纹亚麻衬衫。柔和的薄荷绿摄影棚背景。
7.迷人：眨眼，手指轻戳脸颊。俏皮的双丸子头。时尚图案T恤。浅粉色摄影棚背景。
8.震惊：嘴巴微张，眉毛上扬（额头皱纹与参考年龄相符）。蓬松的披肩发。简约的丝绸衬衫。浅黄色摄影棚背景。
9.愤怒：双臂交叉，目光锐利（眼睛眯起但保持一定距离）。高髻。深色修身高领衫。深红色摄影棚背景。
渲染与构图：
灯光：电影级摄影棚灯光，柔光箱照明，冷暖色调混合，轮廓光用于分离。
阴影：逼真的阴影，皮肤表面散射，一致的面部建模。
质量：照片级真实感，超高细节，获奖摄影，杂志品质。
一致性：所有9个面板的形象一致性和灯光设置完美无瑕。
网格对齐：完美对齐的3x3照片亭条形。间距：面板之间等距的白色边距。背景边框：干净的白色边框。`,
    promptEn: `Critical Instruction: Absolute Priority: Maintain identical facial structure across all panels. No changes to underlying bone structure, nose shape, eye distance, or jawline regardless of expression. Must be recognizable in every shot.
Format: 3x3 Grid Collage.
Subject:
Face Reference: Uploaded photo.
Identity Lock: CRITICAL: Fixed identity, zero deviation from reference features. Forced 100% precise match.
Identity Preservation: Ensure consistent pupil distance, exact nose bridge shape, accurate jaw structure in every panel.
Negative Constraints: No nose shape change, no eye size/spacing change, no cheekbone structure change, no plastic surgery effect.
Style: Hyper-realistic portrait photography, 8K resolution, RAW photo aesthetic.
Skin: Highly detailed natural skin texture, visible pores, micro-imperfections, realistic skin tone consistent across all lighting.
Camera: Shot on Sony A7R IV, 85mm portrait lens, f/1.8 aperture, sharp focus on eyes, shallow depth of field.
Panels:
1.Joy: Radiant natural smile (maintaining jawline), shoulders slightly raised. High ponytail with wisps. Pastel cotton hoodie. Soft gradient sky blue studio background.
2.Surprise: Hands near face, wide eyes (no eye shape change), natural reaction. Natural loose waves. Casual cotton t-shirt. Light peach studio background.
3.Sadness: Looking down, soft eyes, emotional. Messy low bun. Oversized cardigan. Muted lavender studio background.
4.Gentle: Soft smile, slight head tilt. Elegant half-up half-down hair. Soft knit top. Warm beige studio background.
5.Bold: Confident gaze, chin slightly up (showing consistent jawline). Chic slicked-back hair. Stylish leather or denim jacket. Deep teal studio background.
6.Playful: Cheeks slightly puffed (ensure nose stays consistent), playful eyes. Short textured bob. Striped linen shirt. Soft mint green studio background.
7.Charming: Winking, finger poking cheek. Playful double buns. Trendy graphic tee. Light pink studio background.
8.Shock: Mouth slightly open, eyebrows raised (forehead wrinkles matching reference age). Voluminous blowout. Minimalist silk blouse. Pale yellow studio background.
9.Anger: Arms crossed, sharp gaze (eyes narrowed but spacing kept). High top knot. Dark fitted turtleneck. Deep red studio background.
Rendering & Composition:
Lighting: Cinematic studio lighting, softbox illumination, mixed cool/warm tones, rim light for separation.
Shadows: Realistic occlusion, subsurface scattering, consistent facial modeling.
Quality: Photorealistic, ultra-detailed, award-winning photography, magazine quality.
Consistency: Flawless identity consistency and lighting setup across all 9 panels.
Grid Alignment: Perfectly aligned 3x3 photobooth strip style. Spacing: Equidistant white margins between panels. Border: Clean white background border.`,
    prompt: "3x3 grid collage of a person with consistent identity and different expressions..."
  },
  
  "dr-32": {
    title: "3D卡通表情包挑战",
    tags: ["3D Render", "Cartoon", "Character", "Expression", "Grid"],
    promptCn: `核心指令：3x3网格拼贴，面部特征锁定（基于上传照片），100%精确匹配。
风格：精致流畅的3D卡通风格，皮肤具有柔软、光滑、逼真的卡通纹理。
面板详情：
1.喜悦：灿烂的笑容，微微耸肩。高马尾，粉彩连帽衫，柔和的渐变天蓝色背景。
2.惊讶：双手放在脸旁，睁大眼睛。蓬松的波浪卷发，休闲T恤，浅桃色背景。
3.悲伤：低头，眼神柔和。低发髻，宽松毛衣，柔和的薰衣草色背景。
4.温柔：温柔的微笑，微微侧头。半扎发，柔软的针织衫，暖米色背景。
5.大胆：自信的眼神，微微抬起下巴。梳得一丝不苟，时尚外套，深蓝绿色背景。
6.俏皮：鼓起的脸颊，俏皮的眼神。短波波头，条纹衬衫，柔和的薄荷绿背景。
7.迷人：手指靠近脸颊眨眼。双丸子头，趣味图案上衣，浅粉色背景。
8.震惊：张嘴，扬眉。凌乱的披肩发，简约衬衫，浅黄色背景。
9.愤怒：双臂交叉，目光锐利。高高盘起的紧致丸子头，深色修身上衣，深红色背景。
渲染与构图：
灯光：柔和的摄影棚灯光，均匀分布在所有面板上。
阴影：平滑的渐变，微妙的高光。
质量：超高分辨率，所有面板的色彩搭配和比例协调一致。
构图：完美对齐的 3x3 网格，面板间等边距，简洁的纯色中性边框。`,
    promptEn: `Core Instruction:3x3 Grid Collage. Face Reference: Uploaded photo. Face Identity Lock: True, 100% accuracy.
Style: Polished fluid 3D cartoon style. Skin: Soft, smooth, realistic cartoon texture.
Panels:
1.Joy: Radiant smile, slight shrug. High ponytail, pastel hoodie, soft gradient sky blue background.
2.Surprise: Hands near face, wide eyes. Voluminous waves, casual t-shirt, light peach background.
3.Sadness: Looking down, soft eyes. Low bun, loose sweater, muted lavender background.
4.Gentle: Gentle smile, head tilt. Half-up hair, soft knitwear, warm beige background.
5.Bold: Confident gaze, chin up. Slicked back hair, stylish jacket, deep teal background.
6.Playful: Puffed cheeks, playful eyes. Short bob, striped shirt, soft mint green background.
7.Charming: Winking, finger poking cheek. Double buns, graphic top, light pink background.
8.Shock: Open mouth, raised brows. Messy loose hair, minimalist shirt, pale yellow background.
9.Anger: Arms crossed, sharp gaze. High tight bun, dark fitted top, deep red background.
Rendering & Composition:
Lighting: Soft studio lighting, evenly distributed.
Shadows: Smooth gradients, subtle highlights.
Quality: Ultra-high resolution, consistent color palette and proportions.
Composition: Perfectly aligned 3x3 grid, equal spacing, clean solid neutral border.`,
  },
  
    "dr-33": {
    title: "超写实生活方式产品摄影",
    tags: ["Product Photography", "Commercial", "Lifestyle", "Branding", "Realistic"],
    promptCn: `角色设定: 你是一名顶级商业摄影师与品牌视觉导演，擅长用真实生活场景与克制但具有吸引力的人物参与，打造高传播力的产品影像。
核心输入:
产品参考: [用户上传的产品图片] (必须严格保持产品原貌、Logo和细节)
场景关键词: {{SCENE_KEYWORDS}}
季节/时间: {{SEASON}} {{TIME_OF_DAY}}
人物气质: {{MODEL_VIBE}}
创作总原则（最高优先级）:
1.产品主角: 画面基于用户上传的产品图进行生成。产品必须是对焦最清晰、细节最锐利的主体。
2.人物背景: 人物作为中景/背景层级出现，身体结构与姿态必须完整可读，避免碎片化。
3.吸引力: 吸引力来自身体整体曲线、姿态、皮肤质感与光影氛围（健康、自信、放松）。
4.真实生活感: 画面像现实生活中自然发生的一幕，保留轻微生活痕迹。
人物策略:
人物用于放大产品的欲望价值与感官吸引力。
匹配最合适的人体特征：清爽/夏日→大腿、腰线；精致→手部；高级→锁骨、肩颈。
呈现方式：人物在画面中可见面积约30%–60%，可裁掉头部，但身体躯干与曲线必须完整可感知。
姿态自然（坐、倚靠、站立、行走、伸手拿取/放下）。
服装与场景/季节一致，暴露程度自然合理、健康审美。
核心场景描述:
生成一张超写实生活方式产品照片：核心主体为**用户上传的产品图片中的物品**。该产品位于画面前景或视觉焦点位置，为全画面最清晰对焦主体。
场景为[季节]的[时间]，地点：[场景关键词]暗示的真实生活空间（如窗边/阳台/沙滩/泳池边）。
画面中出现一位成年人作为中景或背景元素，气质[人物气质]，身体比例自然健康，曲线完整可感知，姿态松弛自然（如坐在椅子旁、倚靠栏杆、从桌面拿起物品或刚放下产品），通过光影与皮肤质感提供高级的感官吸引力，但绝不喧宾夺主。
整体情绪：松弛、真实、干净、略带欲望张力；像手机随手抓拍到的高级瞬间，但画质与构图达到商业摄影级别。
构图与镜头语言:
构图层级: 前景=上传的产品（主角）；中景/背景=人物+环境。
镜头: 35mm或50mm写实商业摄影感，轻微透视。`,
    promptEn: `Role: Top-tier commercial photographer & brand visual director.
Goal: Create high-impact product imagery using real-life scenes with subtle but attractive human presence, strictly based on the uploaded product reference.
Core Principles (Highest Priority):
1.Product Hero: The **uploaded reference image** defines the product. It MUST be the sharpest, most detailed element, maintaining fidelity to the original design and logos.
2.Human Context: Humans appear in mid-ground/background. Body structure must be readable and complete (torso, limbs, curves).
3.Appeal: Attraction comes from body curves, posture, skin texture, and lighting (healthy, confident, relaxed).
4.Realism: Looks like a natural moment in real life, not a staged studio ad. Slight signs of life.
Human Strategy:
Purpose: Amplify desire and sensory appeal (comfort, freshness, luxury).
Presentation: Human occupies 30%-60% of frame. Head can be cropped or blurred, but torso/curves must be perceptible.
Pose: Natural (sitting, leaning, standing, reaching). Avoid exaggerated posing.
Clothing: Consistent with scene/season. Healthy aesthetic.
Scene Description Template:
Generate a hyper-realistic lifestyle product photo featuring the **product from the uploaded image** as the core subject. It is positioned in the foreground/focal point with razor-sharp focus.
Scene: [Season] [Time of Day], Location: Real living space implied by [Scene Keywords] (e.g., window side, balcony, beach, pool, cafe terrace).
Human Element: An adult in mid-ground/background, [Vibe] temperament, natural healthy body proportions, perceptible curves, relaxed posture (sitting, leaning, picking up/putting down the product). High-quality lighting and skin texture provide sensory appeal without overpowering the product.
Mood: Relaxed, authentic, clean, subtle desire. Looks like a high-end candid mobile shot but with commercial-grade quality and composition.
Composition & Lens:
Layers: Foreground = Uploaded Product (Hero); Mid/Background = Human + Environment.
Lens: 35mm or 50mm realistic commercial photography style, slight perspective.`,
    prompt: "Hyper-realistic lifestyle product photography based on uploaded reference...",
  },
  
   "dr-34": {
    title: "3D时尚杂志海报：9种风格挑战",
    tags: ["Fashion", "Editorial", "3D Effect", "Magazine", "Grid"],
    promptCn: `创作一张 2:3 的竖版时尚海报，同一位女性，同一套服装，以 9 种不同的杂志风格呈现，并添加 3D 立体效果。
人物一致性（最高优先级）：所有 9 个位置均由同一位女性模特出镜：冷艳美，棱角分明的下颌线，20 岁出头的亚洲超模脸。所有造型中保持完全一致。
服装一致性：黑色宽松 V 领羊绒衫，高腰阔腿纯白修身长裤，黑色皮质乐福鞋，金色配饰。低髻发型。
构图结构（3x3 网格）：背景层 (Z=0)：包含 8 个可见的杂志风格单元格（中心单元格 [2,2] 被 3D 人物遮挡）。
[1,1] Vogue：高对比度光线，精致优雅。
[1,2] Harper's Bazaar：侧脸回眸，柔和氛围。
[1,3] Elle：街拍行走，自然光。
[2,1] i-D：坐姿，大胆图形构图。
[2,3] Dazed：动态飘逸，实验性角度。
[3,1] Marie Claire：自信职场，双臂交叉。
[3,2] GQ：极简建筑构图，倚墙而立。
[3,3] W 杂志：艺术姿态，鲜明对比。
前景图层 (Z=5-10cm) - 3D 立体效果：同一女性（造型 5）从画面中心“走出来”，完全遮挡中心单元格。头部触及顶部边缘，鞋子触及底部边缘，占据最大垂直空间。
姿势：动态向前行走，自信迈步，直视镜头，气场强大。
技术细节：人物饱和度比背景高 20%，清晰度略高，投射真实阴影到背景网格上，营造强烈的“破框而出”的 3D 视觉错觉。
光照与质感：背景网格：大景深 (f/16)，全清晰。均匀明亮的影棚灯光。
整体：8K 超高清，杂志级修图。`,
    promptEn: `Create a 2:3 vertical fashion poster featuring the same female model in the same outfit, presented in 9 different magazine styles with a 3D pop-out effect.
Character Consistency (Critical): Same Asian supermodel face (early 20s, sharp jawline, high cheekbones, cool expression) across all 9 slots.
Outfit Consistency: Black loose V-neck cashmere sweater, high-waisted white wide-leg trousers, black loafers, gold accessories, low bun.
Structure (3x3 Grid):
Background Layer (Z=0): 8 visible magazine-style cells (center [2,2] occluded).
[1,1] Vogue style: High contrast, elegant standing pose.
[1,2] Harper's Bazaar: Profile, soft lighting.
[1,3] Elle: Street snap, walking, natural light.
[2,1] i-D: Sitting, bold graphic composition.
[2,3] Dazed: Dynamic movement, experimental angle.
[3,1] Marie Claire: Professional, arms crossed.
[3,2] GQ: Minimalist, leaning against wall.
[3,3] W Mag: Artistic pose, expressive.
Foreground Layer (Z=5-10cm) - 3D Pop-out:
The same woman (Style 5) walking OUT of the center frame.
Head touches top edge, shoes touch bottom edge.
Dynamic walking pose, confident gaze.
Technical: Foreground subject has 20% higher saturation and sharpness. Casts realistic drop shadows (blur 12px, offset) onto the background grid to create a convincing 3D depth effect.
Lighting: Even studio lighting for background; Cinematic lighting for the 3D foreground figure. 8k resolution.`,
    prompt: "3D pop-out fashion magazine poster, 3x3 grid, same model different styles...",
  },
  
   "dr-35": {
    title: "抖音风海滨花园人像",
    tags: ["Portrait", "Photography", "Fashion", "Douyin Style", "Seaside"],
    promptCn: `技术规格:
媒介：照片
风格：超逼真，电影级HDR，广角平视
画质：8K分辨率，清晰对焦，色彩鲜艳，纹理光泽
主体特征 (基于上传参考图):
面部：严格锁定参考图面部特征，100%一致。
身材：身高156厘米，曲线优美的沙漏型身材，腰部线条分明，腹部平坦。
皮肤：光滑透亮，散发健康光泽。
发型：长款层次感发型，自然蓬松，柔顺发丝随微风轻拂。
妆容：抖音风格，可爱娃娃般的五官。柔和甜美的眼妆，细眼线，自然美瞳；亮粉色腮红；哑光粉色唇妆；清新水润肤色。
手部：修长的白色美甲。
服装配饰:
头饰：白色蕾丝荷叶边发带，配蝴蝶结。
上身：(参考图片中的特定上衣)。
下身：超短白色飘逸长裙。
鞋履：白棕色韩版时尚凉鞋。
首饰：银色项链，镶嵌灰色水滴形小宝石吊坠。
环境与氛围:
场景：户外海滨花园。坐在齐腰高的白墙上。
前景：茂盛的亮粉色、柔粉色、白色、黄色和橙色花朵，搭配深绿色叶子。
背景：清澈的碧蓝色海水，晴朗的天空飘着大片的云。
光线：温暖的金橙色午后阳光，反射在墙壁、花朵和云朵上，营造梦幻光晕。
动作：身体略微倾斜，双腿交叉，一手拿着一朵小花，表情平静而迷人，直视镜头。`,
    promptEn: `Ultra-realistic cinematic HDR photograph, eye-level wide angle.
Subject: A young woman sitting on a waist-high white wall in a seaside garden. Face strictly based on uploaded reference.
Body: 156cm height, curvy hourglass figure, defined waist, flat stomach, glowing skin.
Hair: Long layered hair, natural volume, soft strands blowing in the breeze.
Makeup: Douyin style, doll-like features. Soft sweet eye makeup, thin eyeliner, bright pink blush, matte pink lips, dewy fresh skin. White manicured nails.
Outfit: White lace ruffle headband with bow, [specific top from reference], mini white flowy skirt, white and brown Korean style sandals. Silver necklace with grey teardrop gem.
Setting: Surrounded by lush bright pink, white, yellow, and orange flowers with dark green leaves. Background features clear turquoise ocean and sunny sky with large clouds.
Lighting: Warm golden-orange afternoon sunlight creating a dreamy glow and reflections.
Pose: Sitting with legs crossed, body slightly tilted, holding a small flower, looking directly at the camera with a calm, charming expression.
8k resolution, sharp focus, vivid colors. --ar 3:4`,
    prompt: "Ultra-realistic Douyin style portrait of a woman in a seaside garden...",
  },
  
  "dr-36": {
    title: "古诗词电影感截图",
    tags: ["Cinematic", "Movie Still", "Poetry", "Realistic", "IMAX"],
    promptCn: `角色设定：好莱坞顶级电影摄影指导 (DoP) 兼视觉特效总监。
任务：请检索古文/古诗《[在此插入标题]》的全文及深层含义，并将其核心意象转化为一张史诗级电影截图。
视觉风格 (Core Aesthetics)：
1.震撼感：大广角、强烈的明暗对比 (Chiaroscuro)、体积光。
2.电影字幕：画面底部必须包含“电影字幕 (Movie Subtitles)”，还原电影截图质感。
3.真实感：严禁 CG 感，强调皮肤纹理、物理材质、真实光影。
画面构建指令：
场景(Scene)：根据诗歌意境，构建一个宏大的电影场景。可以是著名的历史人物（著名演员饰演，粗粝真实感）在充满张力的时刻，或者是壮丽的自然景观。
氛围(Atmosphere)：根据诗意添加尘土、烟雾、火花、雨水、迷雾等元素，营造战场或静谧山河的氛围。
字幕(Subtitle)：从原诗中选取最经典的一句，作为电影字幕显示在画面底部（白色/黄色标准电影字体）。
技术参数：
Shot on IMAX 70mm, Anamorphic lens (2.39:1 aspect ratio), shallow depth of field, film grain, color graded like a blockbuster movie.`,
    promptEn: `Role: Top Hollywood Director of Photography (DoP) & VFX Supervisor.
Task: Retrieve the full text and meaning of the Chinese poem/classic text "[Insert Title Here]". Translate its core imagery into an Epic Cinematic Film Still.
Visual Style:
1.Impact: Wide angle, Chiaroscuro lighting, Volumetric fog.
2.Subtitles: Must include "movie subtitles at the bottom" to simulate a screencap.
3.Realism: Gritty realism, dirty faces, physical textures, no CGI look.
Scene Construction:
Scene:Based on the poem's mood, create a grand cinematic scene. It could be a famous historical figure (portrayed by a famous actor, gritty realism) or a majestic landscape.
Atmosphere:Add dust, smoke, sparks, rain, or mist to create a chaotic battlefield or serene nature atmosphere.
Subtitle(Critical): Select the most iconic line from the poem and display it as a cinematic subtitle at the bottom of the screen (Standard font, white/yellow).
Tech Specs:
Shot on IMAX 70mm, Anamorphic lens (2.39:1 aspect ratio), shallow depth of field, film grain, color graded like a blockbuster movie, 8k resolution.`,
    prompt: "Cinematic film still of a Chinese poem with subtitles...",
  },

    "dr-37": {
    title: "电影感3D动作广告",
    tags: ["3D Render", "Commercial", "Action", "Cinematic", "Advertisement"],
    promptCn: `为 [此处插入产品/品牌名称] 打造一部极具电影感的3D动作广告海报。
核心画面：以紧张刺激的动态瞬间捕捉精彩画面，产品处于动作的高潮点（如飞跃、撞击、极速运动中）。
运用极具冲击力的慢动作镜头感（Frozen Moment）。
视觉特效：
灯光：专业的影棚灯光，强烈的明暗对比，轮廓光勾勒产品边缘。
粒子：动感的粒子特效（火花、碎片、水珠、烟雾），增强速度感和张力。
质感：光鲜亮丽的商业质感，超逼真的渲染效果，锐利的细节。
品牌元素：
品牌标识巧妙融入场景（如刻在物体上、背景霓虹灯）。
简洁现代的标语清晰地置于画面下方。
整体氛围：浓郁的氛围感，极具感染力的视觉效果，尽显高端商业大片的视觉美感，具有病毒式传播潜力。
8K分辨率，Octane 渲染。`,
    promptEn: `Create a highly cinematic 3D action commercial poster for [Insert Product/Brand Name].
Core Visual:
Capture a high-tension dynamic moment in a freeze-frame style. The product is at the peak of action (e.g., flying, impacting, speeding).
High-impact slow-motion aesthetic.
Visual Effects:
Lighting:Professional studio lighting, strong contrast (Chiaroscuro), rim lighting to separate the product.
Particles:Dynamic particle effects (sparks, debris, liquid splashes, smoke) to enhance speed and tension.
Texture:Glossy commercial quality, hyper-realistic rendering, razor-sharp details.
Branding:
Brand logo subtly integrated into the scene (e.g., embossed, neon background).
A clean, modern slogan placed clearly at the bottom.
Atmosphere:
Rich atmosphere, viral visual impact, high-end commercial blockbuster aesthetic.
8k resolution, Octane render.`,
    prompt: "Cinematic 3D action commercial poster with dynamic particles and high contrast...",
  },
  
    "dr-38": {
    title: "文化信息图 (诗词雅韵版)",
    tags: ["Infographic", "Culture", "Poetry", "Chinese Style", "Design"],
    promptCn: `[主题核心]
垂直文化信息图，可视化 [文化/历史/品牌背景主题] 和 [主体生命周期/加工流程]。
视觉旅程从 [初始状态/原材料] 到 [最终形态/商品]。
四个不同阶段呈流畅的S形曲线排列：
1.[阶段1: 原材料/初始状态]
2.[阶段2: 初步加工/中间状态]
3.[阶段3: 成型/成熟状态]
4.[阶段4: 最终包装/成品堆叠]
[细节与质感]
微观瑕疵至关重要。
基底材质：陈旧的 [羊皮纸/皮革/丝绸卷轴]，具有可见的 [纸浆纤维/纹理/编织图案]，严重的霉斑，边缘扩散的不规则 [水渍/包浆/老化痕迹]，以及自然的裂纹/折痕。
主体对象：超写实纹理。
阶段1细节：可见 [表面微观纹理] 和 [边缘细节]，轻微半透明 (SSS) 或 [特定材质属性 - 如蜡状光泽、露珠、新鲜茎]。
阶段2细节：[形态描述] 带有 [光泽/质感描述] (例如：油性、哑光、烘烤质感、颜色变化、自然瑕疵)。
阶段3细节：高密度颗粒凹凸贴图或 [表面凹凸细节]，[结构特征]，明显的 [视觉重心]，微划痕，毛孔可见。
阶段4细节：[外包装/外部材质质感 - 如木箱、纸包装]，物理 [物理痕迹/磨损/绑定 - 如绳索绑定、边角磨损]，轻微 [边缘破损/陈旧感]。
[排版布局]
构图：一条清晰优雅的黑色虚线引导视线，呈蛇形“S”路径从顶部中心到底部中心。
标题：左上角 [5%, 10%]。巨大的浓墨重彩书法 [主题名称]，传统中国风格，具有戏剧性的墨水晕染/羽化边缘和“飞白” (枯笔) 效果。
古诗词融合 (核心新增)：
背景中巧妙嵌入褪色的半透明中国古典诗词诗句，以优雅的小楷/行书书写。包含 [主题相关的古诗词 - 如咏物诗、田园诗、节气诗]。
诗词文本应显得风化并部分褪色融入基底，创造文化深度的层次。
诗句围绕水墨山水呈竖排流动：
顶部：[诗句1] 漂浮在雾气/云层区域
中部：[诗句2] 巧妙融入山脉/建筑轮廓
底部：[诗句3] 沿着河流/道路/景观元素流动
标注：关键对象使用漂浮的半透明白色圆角矩形标注，清晰的黑色无衬线中文文本，柔和的投影以分离UI。
插图框：左下角 [10%, 80%]。一个矩形框内嵌详细的木刻/蚀刻风格插图，描绘 [相关辅助插图: 如生产场景/运输/起源/人物活动]，使用复杂的交叉影线代替颜色。
[环境与背景]
3D前景对象与2D水墨背景及诗词融合。
顶部：宏伟的 [顶部地标建筑/自然景观] 从白雾和云层中显现，褪色的诗句 [诗句主题] 漂浮在雾气区域。
中部：褪色的水墨 [中部背景: 山水/城市轮廓] (山水风格) 和古代 [建筑细节/地标]，古典诗词片段 [诗句内容] 以优雅的书法巧妙融入景观轮廓。
底部：[底部背景: 河流/道路/场景] 带有微小的 [交通工具/人物]，展现细腻的 [相关材质] 纹理，关于 [主题] 的诗句沿着环境元素流动。
氛围：朦胧、历史感、诗意、梦幻、书卷气。通过大气透视实现深度，褪色的墨色调和分层的诗词文本创造视觉深度。
[光影与色彩]
配色：复古 [深褐色/暖色]/大地色调，具有书卷气审美。[主体色调 - 鲜艳/自然色] 用于 [主体]，[深色调 - 深棕/黑] 用于 [细节部分]，温暖的 [陈旧米色/琥珀色] 用于基底，棕灰色用于水墨，褪色的深褐色/浅灰色用于诗词文本。
光照：四个主要 [主体对象] 采用柔光箱影棚照明，以揭示表面微观纹理和 [材质特定细节]。背景山水和诗词层采用平坦的环境光。
特效：主要对象周围有微妙的白色模切轮廓 (贴纸效果)，以便将它们从复杂的背景和诗词层中分离出来。
[风格与渲染]
博物馆级教育插图，具有书卷气的文学审美。中国传统水墨画、古典诗词手稿设计与高保真微距摄影的融合。
古代 [皮革装订诗集/御用卷轴/学者手稿] 的美学遇上现代信息图设计。
Behance 精选项目质量，矢量锐利的前景与水彩柔和的背景，分层的书法诗词创造文化深度。
陈旧破损的基底，具有深厚的包浆和嵌入的中国古典诗句，9:16 竖向构图，强调视觉艺术与文学遗产的和谐融合。
技术参数：--ar 9:16 --style raw --stylize 400 --q 2`,
    promptEn: `[Subject & Core] Vertical cultural infographic visualizing [Cultural/Historical/Brand Theme] and the [Lifecycle/Processing Flow]. A visual journey from [Initial State/Raw Material] to [Final Form/Product]. Four distinct stages arranged in a flowing S-curve:
1.[Stage 1: Raw Material/Initial State],
2.[Stage 2: Processing/Intermediate State],
3.[Stage 3: Mature/Formed State],
4.[Stage 4: Final Packaging/Product Stack].
[Detail & Texture] Micro-imperfections are essential.
Substrate: The base is aged [parchment paper/leather hide/silk scroll] with visible [pulp fibers/grain texture/weave pattern], heavy foxing spots (brown mildew dots), irregular [water stains/patina/aging marks] spreading at the edges, and natural cracks/creases.
Main Objects: Hyper-realistic textures.
Stage 1 Detail: Visible [micro-texture] and [edge details], slight translucency (SSS) or [specific material attribute - e.g., waxy sheen, dewdrops, fresh stem].
Stage 2 Detail: [Shape description] with [Sheen/Texture description] (e.g., oily, matte, roasted texture, color variation, natural blemishes).
Stage 3 Detail: High-density granular bump map or [surface bump details], [structural features], distinct [visual focal point], micro-scratches, pores visibility.
Stage 4 Detail: [Packaging/Outer material texture - e.g., wooden crate, paper wrapping], physical [wear/binding marks - e.g., rope binding, corner wear], slight [edge damage/aging].
[Typography & Layout]
Composition: A defined elegant black dotted line guides the eye in a serpentine "S" path from Top-Center to Bottom-Center.
Title: Top-Left [5%, 10%]. Massive Heavy Brush Calligraphy [Topic Name] in traditional Chinese style with dramatic ink bleed/feathering edges and "flying white" (dry brush) effects.
Classical Poetry Integration: Faded semi-transparent classical Chinese poetry verses subtly embedded in the background, written in elegant small regular script (Kaishu/Xingshu). Include [Relevant Poems - e.g., Ode to objects, Pastoral poetry, Solar terms poetry].
The poetry text should appear weathered and partially faded into the substrate, creating layers of cultural depth. Position poetry verses flowing around the ink-wash landscapes in vertical columns, integrated into:
Top section: [Verse 1] floating in misty/cloudy areas
Mid section: [Verse 2] subtly integrated into mountain/architectural contours
Bottom section: [Verse 3] flowing along rivers/roads/landscape elements
Labels: Key objects labeled with floating translucent white rounded rectangles, clean black Sans-serif Chinese text, soft drop shadow for UI separation.
Inset: Bottom-Left [10%, 80%]. A rectangular framed inset featuring a detailed Woodcut/Etching style illustration of [Related illustration: e.g., production scene/transport/origin/human activity], using intricate cross-hatching lines instead of color.
[Environment & Background] A mix of 3D foreground objects and 2D Ink Wash background with poetry integration.
Top: The majestic [Top Landmark/Natural Landscape] emerging from white mist and clouds, with faded poetry verses [Verse Theme] floating in the misty areas.
Mid: Faded ink-wash [Mid Background: Landscape/City Silhouette] (Shanshui style) and ancient [Architectural Details/Landmarks], classical poetry fragments [Verse Content] subtly integrated into the landscape contours in elegant calligraphy.
Bottom: A [Bottom Background: River/Road/Scene] with small [Vehicles/People], exhibiting delicate [Material] textures, poetry verses about [Theme] flowing along the environmental elements.
Atmosphere: Misty, historical, poetic, dreamlike, scholarly. Depth achieved through atmospheric perspective with fading ink tones and layered poetry text creating visual depth.
[Lighting & Color]
Palette: Vintage [Sepia/Warm]/Earth tones with scholarly aesthetic. [Subject Color - vibrant/natural color] for [Main Subject], [Dark Tone - deep brown/black] for [Details], warm [aged beige/amber] for substrate, brownish-grey for ink wash, faded sepia/light grey for poetry text.
Lighting: Softbox studio lighting on the four main [Main Objects] to reveal surface micro-texture and [Material Specific Details]. Flat ambient light for the background landscape and poetry layers.
Effect: Subtle white die-cut outlines (sticker effect) around main objects to separate them from the complex background and poetry layers.
[Style & Render] Museum-grade educational illustration with scholarly literary aesthetic. Fusion of Traditional Chinese Ink Painting, Classical Poetry Manuscript Design, and High-fidelity Macro Photography. The aesthetic of an ancient [leather-bound poetry anthology/imperial scroll/scholarly manuscript] meets modern infographic design. Behance featured project quality, vector-sharp foregrounds against watercolor-soft backgrounds with layered calligraphic poetry creating cultural depth. Aged distressed substrate with deep patina and embedded classical Chinese verses, 9:16 vertical composition, emphasizing the harmonious integration of visual art and literary heritage.
--ar 9:16 --style raw --stylize 400 --q 2`,
    prompt: "Vertical cultural infographic with classical poetry integration...",
  },
  
   "dr-39": {
    title: "城市极简手绘插画",
    tags: ["Illustration", "City", "Minimalist", "Line Art", "Poster"],
    promptCn: `这是一幅精致简约的手绘线条插画。其美学风格类似于高端丝网印刷海报，采用大胆的色块和粗犷自信的黑色轮廓线。画面铺满整个画面。
城市：[插入城市名称]
主题：[插入标志性视角，如：从外滩看向浦东]
[构图策略：动态透视]
避免水平分割：严格避免将画面分割成扁平的水平条带（天空/建筑/地面）。
景深与角度：画面必须运用自然透视（三点透视或两点透视）。地面（街道/河流）应利用对角线引导线从前景延伸至远方，而不是平铺在底部。
元素交错：构图必须自然流畅。树木可以从前景向上延伸，与建筑物交叠；建筑应动态地切入天空。地平线应该是断续的、不规则的，而不是直线。
拍摄角度：使用平视或略微低角度的拍摄，以强调地标的宏伟，营造沉浸感，而非平面的地图视图。
[色彩策略：语义和谐的色块]
图像使用有限的“平面”调色板，应用于特定物体，但通过透视进行塑造：
1.天空（负空间）：从[插入城市名称]的调色板中选择深沉、浓郁且精致的色块（例如，深青色、海军蓝或栗色）。它填充建筑物周围和背后的负空间，而不仅仅是“顶部”。
2.舞台（地面和水面）：
地面/路面：纯色的中性大地色（例如，米色、浅石色或柔和的灰色）。至关重要的是，由于透视原理，这块色块会形成梯形或三角形，而不是矩形。
水（如有）：亮度与地面相似，但色调不同（例如，淡鼠尾草绿或柔和的蓝色）。水面应融入画面，而不仅仅是横跨画面。
3.建筑：主要以纯白色或米白色渲染，并用黑色线条勾勒轮廓。
4.人物（融入场景）：
风格：完全白色填充，并用粗黑线勾勒轮廓。头发可以是黑色或深色自然色调。
位置：人物分散在不同的景深中——一些较大的人物位于前景，一些较小的人物位于中景——以此来锚定透视。他们之间的互动自然流畅（融入画面，而不仅仅是左右移动）。
服饰：服装采用简洁的色块设计，并以[插入城市名称]的专属色块点缀。
[文本元素]
手绘黑色文字“[插入城市名称].”优雅地置于一片开阔的天空区域，平衡了整体构图。`,
    promptEn: `A sophisticated, minimalist hand-drawn line illustration. Aesthetic resembles high-end screen-printed posters with bold color blocks and confident, thick black outlines. Full bleed.
City:[Insert City Name]
Subject:[Insert Iconic View]
[Composition:Dynamic Perspective]
No Horizontal Splits: Strictly avoid dividing the image into flat horizontal bands.
Depth & Angles:Use natural 2-point or 3-point perspective. Ground/Water should use diagonal leading lines extending into the distance.
Overlapping:Natural flow. Trees extending up from foreground overlapping buildings. Buildings cutting dynamically into the sky. Broken, irregular horizon line.
Angle:Eye-level or slightly low angle to emphasize grandeur and immersion, not a flat map view.
[Color Strategy: Harmonic Blocks]
Limited "flat" palette applied to specific objects shaped by perspective:
1.Sky (Negative Space): Deep, rich, sophisticated color block derived from [Insert City Name]'s palette (e.g., Deep Teal, Navy, or Maroon). Fills negative space AROUND and BEHIND buildings.
2.Stage (Ground & Water):
Ground:Solid neutral earth tone (Beige, Stone, Soft Grey). Forms trapezoids/triangles due to perspective.
Water (if present): Similar lightness to ground but distinct hue (Sage Green, Soft Blue). Integrated into the scene.
3.Architecture: Rendered primarily in Pure White or Off-White with black line art outlines.
4.Figures (Integrated):
Style:Pure White fill with thick black outlines. Dark natural hair colors.
Placement:Scattered at different depths - larger in foreground, smaller in mid-ground to anchor perspective. Natural interaction.
Clothing:Simple color blocks, accented with [Insert City Name]'s signature colors.
[Text]
Hand-drawn black text "[Insert City Name]." elegantly placed in an open sky area to balance the composition.`,
    prompt: "Minimalist hand-drawn line illustration of a city with bold color blocks...",
  },

   "dr-40": {
    title: "真人感街拍：城市打卡挑战",
    tags: ["Street Photography", "Travel", "Candid", "Portrait", "City"],
    promptCn: `九宫格真人感极强的街拍照片，保持人物五官、穿搭、身材比例在不同场景中高度一致。
场景设定：背景为9个不同城市的特色墙面或带有巨大文字的标志性背景（如“上海”、“北京”、“香港”等墙面涂鸦或地标）。
镜头语言：使用超广角镜头（16mm-24mm）增强张力。包含仰拍（显得腿长气场强）和俯拍（大头俏皮感）等动态视角。
人物动作：自然松弛的抓拍感，不要摆拍痕迹。动作包括：热情挥手、自信走路、比心手势、抬手遮阳、回眸一笑。
光影与氛围：通透的自然光，阳光感强，画面清晰锐利，色彩真实。
人物形象：[上传人物参考图]，保持该人物的面部特征和服装完全一致。`,
    promptEn: `A series of hyper-realistic candid street photography shots featuring the SAME character in different city settings.
Character Consistency:Strictly maintain the same facial features, body proportions, and outfit (based on uploaded reference) across all shots.
Settings:Distinctive city feature walls or backgrounds with large text typography (e.g., city names, slogans).
Camera & Angles:Ultra-wide angle lens (16mm) for dynamic perspective. Mix of Low-angle shots (empowering, leg-lengthening) and High-angle shots (playful).
Actions & Vibe:Natural, relaxed, unposed 'caught in the moment' feel.
Actions: Waving enthusiastically, Walking confidently, Making a heart sign, Shielding eyes from sun, Looking back with a smile.
Lighting:Bright, translucent natural sunlight, sharp focus, high fidelity, 8k resolution. Real life texture, no plastic skin.`,
    prompt: "Hyper-realistic candid street photography with consistent character in various city settings...",
  },
  
  "dr-41": {
    title: "电影故事板：3x3 镜头语言分析",
    tags: ["Cinematic", "Storyboard", "Grid", "Photography", "Reference"],
    promptCn: `【任务目标】
分析输入图像的整个构图。识别所有存在的关键主体（无论是单人、群体/情侣、车辆还是特定物体）及其空间关系/互动。
生成一个连贯的 3x3 网格“电影印样（Contact Sheet）”，展示在同一环境中完全是这些主体的 9 个不同镜头。
【镜头规划】
第 1 行（建立背景）：
1.大远景 (ELS)： 主体在广阔的环境中显得很小，交代环境关系。
2.全景 (LS)： 完整的主体或群体从上到下可见（从头到脚 / 从车轮到车顶）。
3.中远景 (MLS)： 美式镜头/四分之三。构图从膝盖以上（针对人物）或 3/4 视角（针对物体）。
第 2 行（核心覆盖）：
4.中景 (MS)：构图从腰部以上（或物体的中心核心）。聚焦于互动/动作。
5.中特写 (MCU) 构图从胸部以上。主要主体的亲密构图。
6.特写 (CU)：紧凑构图于脸部或物体的“正面”。
第 3 行（细节与角度）：
7.大特写 (ECU)：强烈聚焦于关键特征（眼睛、手、标志、纹理）的微距细节。
8.低角度镜头 (Low Angle)：从地面仰望主体（壮观/英雄感）。
9.高角度镜头 (High Angle)：从上方俯瞰主体（上帝视角）。
【一致性要求】
确保严格的一致性：所有 9 个面板中必须是**相同的人物/物体、相同的衣服和相同的光照**。
景深应逼真地变化（全景深 vs 特写镜头中的背景虚化）。
所有帧均具有照片般逼真的纹理和一致的电影级调色。`,
    promptEn: `Analyze the full composition of the input image. Identify key subjects and their spatial relationships.
Generate a coherent 3x3 grid "Cinematic Contact Sheet" featuring these exact subjects in the same environment across 9 distinct camera shots.
Row 1 (Establish):
1.Extreme Long Shot (ELS): Subject small in vast environment.
2.Long Shot (LS): Full subject visible head-to-toe.
3.Medium Long Shot (MLS): Knees up / 3/4 view.
Row 2 (Coverage):
4.Medium Shot (MS): Waist up. Focus on action/interaction.
5.Medium Close-Up (MCU): Chest up. Intimate.
6.Close-Up (CU): Tight on face/front.
Row 3 (Details & Angles):
7.Extreme Close-Up (ECU): Macro detail of key feature (eye/hand/texture).
8.Low Angle: Looking up at subject (heroic).
9.High Angle: Looking down on subject.
Consistency: Strict adherence to the same character/object, outfit, and lighting across all panels. Realistic depth of field changes.`,
    prompt: "A professional 3x3 cinematic storyboard grid analyzing the input image...",
  },
  
    "dr-42": {
    title: "自然微雕肖像模板",
    tags: ["Digital Art", "Macro", "Portrait", "Nature", "Surreal"],
    promptCn: `这是一幅细节极其丰富的数码绘画，描绘了一个自然的微观艺术世界。
核心主体:一片完整的 **[插入自然载体，如：秋枫叶/孔雀羽毛/透明蝉翼]** 悬浮在柔和的 **[季节/时间，如：春日午后]** 阳光中。
微缩雕刻:载体表面精雕细琢着一幅精致的微缩场景：**[插入人物名称]** 的柔美面部轮廓。
她的五官特征（如弯眉、杏仁眼、挺拔鼻梁）被完美刻画，但整体色调和谐地呼应着载体本身的色彩（如琥珀红、腮红粉、奶油金）。
融合细节:人物的头发/服饰与载体的自然纹理（如叶脉/羽毛纤维）浑然一体，仿佛是从纤维中生长而来。
环境氛围:她站在 [插入环境元素，如：盛开的樱花树]下，花瓣/叶片在她周围飘浮。
留白部分展现出梦幻般的浅景深背景，沐浴在金色夕阳的柔和光芒中。
极致质感:晶莹剔透的露珠闪烁着，宛如液态珍珠——映照出人物脸庞的微缩倒影。
载体呈现出丰富的立体质感：凸起的纹理构成自然轮廓，薄如纸片的激光切割区域投射出柔和而富有层次感的阴影。
艺术风格:融合了18世纪植物插画的精准、当代超写实主义以及电影剧照的美学（王家卫式的色彩诗意）。
构图:居中，微距镜头视角，8K超高分辨率。`,
  },

   "dr-43": {
    title: "极简角色折纸艺术",
    tags: ["Origami", "Paper Art", "Minimalist", "Character", "Studio Lighting"],
    promptCn: `这款 [插入角色名称] 的折纸作品细节极其丰富。
材质与工艺：采用高品质彩色纸张折叠而成，边缘清晰锐利，纸张纹理真实逼真。
折痕以简洁的几何形式，精准捕捉了角色的标志性特征、服装细节和整体轮廓。
场景与光影：作品置于干净的摄影棚平面上，背景极简。
柔和的影棚灯光投射出细腻的阴影，增强立体感。
风格：极简主义收藏级艺术风格 (Minimalist Collectible Art)。
照片级写实细节，焦点清晰锐利。
规格：1080x1080 正方形构图，8K 超高清。`,
    promptEn: `A highly detailed origami artwork of [Insert Character Name].
Material & Craft: Folded from high-quality colored paper with sharp edges and realistic paper texture.
Simple geometric folds capture the character's iconic features, outfit, and silhouette.
Scene & Lighting: Placed on a clean studio flat surface with a minimalist background.
Soft studio lighting creating gentle shadows to enhance dimensionality.
Style: Minimalist collectible art style.
Photorealistic details, sharp focus.
Specs: 1080x1080 square format, 8k resolution.`,
    prompt: "High-quality origami artwork of a character, minimalist style...",
  },

    "dr-44": {
    title: "唐风雪夜回眸人像",
    tags: ["Portrait", "Tang Dynasty", "Photography", "Cinematic", "Snow", "Full Body"],
    promptCn: `一张超写实的电影感全身肖像，描绘了一位身着华丽唐代服装（齐胸襦裙）的年轻女子。
人物特征：年轻东亚女性，面部特征与参考图完全一致。精致的唐风妆容，花钿点缀眉间，面靥装饰脸颊。
姿态与动作：全身动态展示。她正在雪地中轻盈行走或微微转身回眸，姿态优雅舒展。一手持红色刺绣团扇，另一手轻提裙摆，露出精致的**翘头履 (Cloud-toe silk shoes)**，鞋尖绣有精美花纹。
服饰细节：唐代齐胸襦裙，袒领设计，半透明的大袖衫随风飘动，飘逸的披帛缠绕臂间。整体以红色与金色为主调，裙摆层层叠叠，质感华丽。
发型：唐代高髻，佩戴牡丹花发饰、金步摇和华丽发梳。
环境与氛围：大雪纷飞的唐代宫廷庭院或梅花林。背景不再局限于纯黑，可是**雪后的清晨**或**傍晚的蓝调时刻**，白雪覆盖的红墙绿瓦若隐若现。空气中弥漫着清冷的寒气。
摄影参数：8K 超高分辨率，85mm 或 50mm 镜头，全身构图。光线柔和自然，或是具有戏剧性的电影布光，强调丝绸的光泽和雪的质感。`,
    promptEn: `A hyper-realistic cinematic full-body portrait of a young woman wearing magnificent Tang Dynasty clothing (Qixiong Ruqun).
Character: Young East Asian female, facial features strictly identical to reference. Exquisite Tang-style makeup with Huadian (forehead flower) and Mianye (dimple dots).
Pose & Action: Full body shot in dynamic motion. She is walking gracefully or turning back in the snow. One hand holds a red embroidered round fan, the other gently lifts her skirt hem, revealing exquisite **Cloud-toe silk shoes (Qiaotou shoes)** with intricate embroidery.
Outfit: Tang Dynasty Qixiong Ruqun, low-cut bodice, sheer wide sleeves flowing in the wind, long draping Pibo ribbon. Red and gold dominant colors. Layered silk skirt.
Hair: High Tang-style bun adorned with a peony flower, gold dangling hairpin (Buyao), and ornate combs.
Environment: A snowy Tang Dynasty royal garden or plum blossom forest. Time can be a **snowy morning** or **blue hour twilight** (not limited to pitch black). Snow-covered traditional architecture in the background.
Photography: 8k resolution, ultra-detailed masterpiece. Shot on 85mm or 50mm lens. Cinematic lighting highlighting the sheen of silk and the texture of snow. Full body composition.`,
    prompt: "Hyper-realistic Tang Dynasty full-body portrait, walking in snow, showing shoes...",
  },
  
  "dr-45": {
    title: "概念神兵设计：小说精神具象化",
    tags: ["Weapon Design", "Concept Art", "3D Render", "Game Asset", "Fantasy"],
    promptCn: `请根据用户输入的小说或影视剧名称，将其核心精神内核“具象化”为一把独一无二的“概念神兵”，并生成一张高规格的 3D 装备展示海报。
小说/影视剧：[在此输入作品名称]
1. 核心概念转译 (逻辑层)
时代锚定：根据作品设定决定形态。古代/奇幻=冷兵器/法器；近现代/悬疑=象征性改装物件；科幻/未来=高科技装置。
阵营与基调：根据主题情感决定材质。阴暗=腐蚀/黑铁/暗影；光明=水晶/黄金/圣光；疯狂=破碎/混沌。
2. 画面主体构建 (视觉层)
在深邃的虚空背景中央，以3D次世代游戏资产的极高标准，悬浮展示这把武器。
视角：略微倾斜，强调体积感、厚重感和结构美。
细节：材质极致逼真。根据氛围添加岁月痕迹（划痕、铜锈、血迹）或完美科技光泽。
氛围粒子：不要使用静态背景。在武器周围生成环绕流动的元素粒子特效，属性直接映射核心意象（如：漫天风雪、飘落桃花、燃烧余烬、流动数据），颜色和氛围由主题决定。
3. 铭文与排版系统 (文字层)
在画面底部正中央，生成极具仪式感的中文排版，仿佛博物馆藏品铭牌：
作品原名：最上方较小字号居中写上《作品名称》。
神兵赐名：下方用极具设计感、霸气的书法体或衬线体，创造一个富有诗意的武器名字。
灵魂铭文：最底部使用优雅字体，自动检索并摘录一句该作品中最震撼人心的经典台词作为铭文。`,
    promptEn: `Based on the novel/movie "[Insert Title Here]", visualize its core spirit into a unique "Conceptual God-Tier Weapon" and generate a high-spec 3D equipment showcase poster.
1. Concept Translation:
- Form: Determine physical form based on timeline (Ancient=Cold Weapon/Artifact; Modern=Modified Item; Sci-Fi=High-tech Device).
- Tone: Material and lighting based on theme (Dark=Corroded/Iron/Shadow; Light=Crystal/Gold/Holy; Madness=Shattered/Chaos).
2. Visual Construction:
- Subject: A next-gen 3D game asset quality weapon floating in a deep void.
- Angle: Slightly tilted to emphasize volume and structure.
- Details: Hyper-realistic textures with appropriate wear and tear (scratches, rust) or pristine tech gloss.
- Atmosphere Particles: Dynamic elemental particles swirling around the weapon, directly mapping the novel's core imagery (e.g., snow, petals, embers, data streams). The background should not be plain black but filled with atmospheric depth suited to the theme.
3. Typography & UI:
- Bottom center layout, like a museum plaque or game item detail page.
- Top: Small text "《[Original Title]》".
- Middle: Large, stylized, aggressive calligraphy for a creative "[Weapon Name]".
- Bottom: Elegant font displaying a "[Classic Quote]" from the work.
Tech Specs: 8k resolution, Octane render, volumetric lighting, cinematic composition.`,
    prompt: "Conceptual 3D weapon design based on a novel's spirit...",
  },
  
  "dr-46": { title: "待填标题 46", tags: [], promptCn: ``, promptEn: `` },
  "dr-47": { title: "待填标题 47", tags: [], promptCn: ``, promptEn: `` },
  "dr-48": { title: "待填标题 48", tags: [], promptCn: ``, promptEn: `` },
  "dr-49": { title: "待填标题 49", tags: [], promptCn: ``, promptEn: `` },
  "dr-50": { title: "待填标题 50", tags: [], promptCn: ``, promptEn: `` },
};
