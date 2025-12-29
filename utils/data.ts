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
  
  "dr-46": {
    title: "3x3 3D混合时尚杂志海报",
    tags: ["Fashion", "Magazine", "3D Render", "Collage", "Grid", "Pop-out"],
    promptCn: `角色指令：你是一位专业的时尚艺术总监/AI。根据固定的服装和人物特征，生成一张100%忠实于原型的图像。不要改变服装、风格、颜色或层次。
核心参数：比例：9:16。风格：高级时尚杂志封面布局（类似 Vogue & Harper's Bazaar），3x3 网格拼贴。特效：前景主角“破框而出”，打破网格边界。画质：8K 超高清，大师级品质。
人物锁定：面部：严格锁定上传的参考图面部特征（100% 结构匹配）。服装：严格遵守上传的服装单品（100% 材质匹配）。禁忌：无变形、无随机服装、无蜡质皮肤、无换人。
视觉概念：风格：光面杂志封面，混合流派背景的 3x3 网格布局。主角大胆站立，“打破”网格（前景层）。
美学：混合媒体拼贴（撕纸边缘、半调网点、排版叠加）。未来主义、几何线条、电影感光效。
布局结构 (3x3 网格)：背景层：完美对齐的 3x3 网格，带有艺术性的间距。每个格子有独特的视觉风格。
[1] Vogue波普风：眼部/细节特写，红色实色背景，速度线，高对比闪光灯。
[2] 极简主义：腰部以上中景，侧身，深色渐变背景，柔光箱照明。
[3] 全身时尚：动态行走，城市街景背景，自然光。
[4] 原始情感：黑白肖像，发丝凌乱，颗粒质感，朋克字体。
[5] Marie Claire优雅：头肩肖像，下巴托手，暖米色背景，伦勃朗光。
[6] 科幻风格：配饰/手部特写，赛博朋克线条，双色凝胶光效。
[7] 美妆特写：唇/眼极度特写，柔和粉彩渐变，环形光，微距毛孔细节。
[8] Lo-Fi街拍：双重曝光或动态模糊，夜景散景，概念光效。
[9] 数据美学：剪影或抽象形状，单色背景，极简平铺。前景层 (Hero Layer)：主角全身或 3/4 身剪影，穿着完全相同的服装，居中或偏侧站立。
图像清晰锐利，与网格背景有强烈的视觉分离，产生强烈的 3D 弹出错觉。排版与图形：英文主标题（衬线/无衬线混合），日文副标题（增加视觉纹理）。顶部大胆的杂志刊头，底部条形码，装饰性取景框线。红色和白色的文本框。
技术规格：摄影：哈苏 X2D 100C 中画幅相机，85mm f/1.2 镜头。光照：专业影棚布光，轮廓光，体积雾。后期：高锐度，低噪点（除颗粒效果外），生动清晰。`,
    promptEn: `High fashion magazine cover, 3x3 grid layout collage with a 3D pop-out hero subject. 
    Subject Consistency: Strict likeness lock on uploaded facial features and outfit. 100% fidelity. 
    Layout & Composition: Background Layer: 3x3 Grid. 
    [Panel 1]: Vogue Pop Art. Macro eye detail. Red background with speed lines. High contrast flash. 
    [Panel 2]: Minimalist. Medium shot profile. Deep gradient background. Soft box lighting. 
    [Panel 3]: Full Body Fashion. Dynamic walking. City street background. Natural light. 
    [Panel 4]: Raw B&W. Windblown hair portrait. Gritty texture. High saturation B&W. 
    [Panel 5]: Elegant Portrait. Head & shoulders, chin prop. Warm beige background. Rembrandt lighting. 
    [Panel 6]: Sci-Fi Detail. Accessories/Hand focus. Cyberpunk lines background. Duo-tone gel lighting. 
    [Panel 7]: Beauty Macro. Lips/Eye close-up. Pastel gradient. Ring light. 
    [Panel 8]: Lo-Fi Motion Blur. Candid action. Night city bokeh. Conceptual lighting. 
    [Panel 9]: Abstract Data. Silhouette/Shape. Monochrome background. Minimalist. Foreground Hero Layer: Full body/3/4 body cut-out of the main character (same outfit). Standing boldly, breaking the grid boundaries. Crisp, sharp, 3D pop-out illusion. 
    Style & Atmosphere: Glossy magazine aesthetic, mixed media collage (torn paper, halftone dots). Bold, electric, primary colors (Red, White, Black). Typography: Bold English masthead, Japanese vertical subtitles, barcode, decorative viewfinder lines. 
    Tech: Photorealistic, 8k, Hasselblad X2D, 85mm f/1.2. Studio professional lighting.`,
    prompt: "3x3 grid fashion magazine cover with 3D pop-out hero subject...",
  },

  "dr-47": {
    title: "现代都市光影剪纸",
    tags: ["Paper Art", "Cityscape", "Architecture", "Lighting", "Creative"],
    promptCn: `角色设定：现代剪纸艺术大师。
任务：根据用户输入的城市名，创作一幅该城市的现代都市景观剪纸艺术画。
城市：[插入城市名称]
核心构图：
以 [插入城市名称] 的现代地标建筑（自动检索该城市地标，如塔、桥、中心大厦）为灵感，通过精巧的镂空手法在一整幅纸上立体刻画。
所有建筑与元素均以流畅的线条与结构相连，无孤立部分，构成一幅完整的都市画卷。
材质与光影：
画面采用金属箔或光泽纸材质，表面带有细腻的明暗光泽。
在光照下呈现柔和的高光与阴影，仿佛被城市灯光轻轻照亮，体现纸张的层叠感。
环境与氛围：
背景以虚化的 [插入城市名称] 天际线为衬，点缀隐约可见的城市广场与树木轮廓。
作品中巧妙融入轻盈的蒲公英绒毛或星光般的动态光点，象征梦想与活力在这座城市中飘散飞扬。
整体呈现：现代浪漫的氛围，8K超高清视觉，细节丰富，真实而富有艺术感染力。`,
    promptEn: `Role: Modern Paper Cutting Artist. Task: Create a modern cityscape paper-cutting artwork based on [Insert City Name].
Composition:
Center on [Insert City Name]'s iconic modern landmarks (retrieve landmarks automatically), intricately carved on a single sheet using hollow-out techniques.
All buildings and elements are connected by fluid lines and structures, forming a unified urban scroll with no isolated parts.
Material & Lighting:
Uses metallic foil or glossy paper texture with subtle sheen.
Soft highlights and shadows created by lighting, resembling city illumination, highlighting the layered paper depth.
Atmosphere:
Background features a blurred skyline of [Insert City Name] with outlines of parks or trees.
Incorporates floating dandelion fluff or starlight-like dynamic particles, symbolizing dreams and vitality.
Style: Modern romantic atmosphere, 8K Ultra-HD, rich details, photorealistic texture, artistic impact.`,
    prompt: "Modern urban paper cutting art with metallic foil texture and city lighting...",
  },
  
  "dr-48": {
    title: "微缩建筑工地创意摄影",
    tags: ["Miniature", "Tilt-shift", "Creative", "Macro", "Construction"],
    promptCn: `将日常物体转化为一个繁忙的微缩建筑工地现场。
主体：
[插入物体名称，如：百事可乐罐/香奈儿香水/劳力士手表]。物体在画面中显得巨大无比，矗立在场景中心或平放。
微观细节：
无数微小的建筑工人（穿着反光背心/防护服）正在围绕物体工作。
搭建着精细的脚手架、使用微型起重机、梯子或绳索。
场景动作：
工人们正在对物体表面进行[插入施工动作，如：抛光金属/重新粉刷Logo/安装零件/清理水珠]。
环境：
放置在[插入环境背景，如：方格桌布/金色镜面托盘/工程师金属台/厨房柜台]。
摄影风格：
移轴摄影效果 (Tilt-shift)，微距镜头，浅景深 (Shallow depth of field)。
光影与氛围：
电影级布光，温暖或戏剧性的光线，强调物体的材质质感（如金属反光、玻璃通透感）和微缩世界的真实感。
8K分辨率，超写实创意摄影。`,
    promptEn: `Macro tilt-shift photography of a miniature construction site built on and around a giant everyday object.
Subject:
A massive [Insert Object Name] dominating the composition.
Micro Details:
Tiny miniature construction workers in high-vis vests or protective suits swarming the object.
Intricate scaffolding, cranes, ladders, and warning signs surrounding the object.
Action:
Workers are [Insert Action, e.g., polishing the surface / painting the logo / repairing parts / cleaning droplets].
Environment:
Set on a [Insert Setting, e.g., checkered tablecloth / mirrored tray / metal workbench].
Photography Style:
Wide-angle view with Tilt-shift technique. Shallow depth of field focusing on the workers and texture.
Lighting:
Cinematic and volumetric lighting, highlighting textures and reflections.
8k resolution, photorealistic, creative concept art.`,
    prompt: "Tilt-shift photography of a miniature construction site on a giant object...",
  },
   
  "dr-49": {
    title: "故宫华服：雪景时尚大片",
    tags: ["Fashion", "Portrait", "Hanfu", "Forbidden City", "Magazine", "Snow"],
    promptCn: `项目目标：
生成一张 9:16 竖版高端时尚杂志封面级写实照片。以用户上传的参考图为人物身份参考，100%还原五官与骨相。
人物身穿明制华丽礼服方向的重工汉服（多层叠穿、手工刺绣/织金锦、贵重金饰头面），在故宫红墙长廊雪景中拍摄。
画面具备 Vogue、Harper's Bazaar、ELLE 等一线杂志的摄影、造型与封面设计质感。
身份锁定（最高优先级）：
100%还原参考图的五官与骨相（眼距、鼻梁、唇形、下颌线）。
真实皮肤质感，可见细微纹理与毛孔，拒绝过度磨皮。
成年女性形象。
场景与氛围：
北京故宫红墙长廊，朱红墙、红柱、雕花窗棂，强调视纵深。
天气：细雪飘落或雪后晴朗，背景干净无游客。
摄影质感：
85mm或50mm人像镜头感，浅景深，眼睛对焦最锐利。
冬日自然光配合柔和补光，金饰与刺绣纹理清晰，色彩通透高级。
服装造型（明制华丽礼服）：
轮廓：多层叠穿，内层立领清晰，外层披帛/霞帔结构厚重，裙摆纹样连续。
面料与工艺：织金锦主面料，盘金绣、立体刺绣工艺。纹样为牡丹、团花、祥云等，拒绝单一金色，要求宫廷织锦式多色刺绣。
头面：金色为主的重工凤冠，密集簪钗，左右对称长流苏（有动态感）。
颜色矩阵（随机应用）：
底色可选翡翠绿、暖杏色或深朱红。
刺绣必须多彩（金、朱红、宝蓝、米白等混用），形成丰富层次，避免单调。
姿态与构图：
半身或全身封面构图，留白给排版。
姿态端正贵气，双手持扇或自然垂落，表情沉静自信。`,
    promptEn: `High-end fashion magazine cover editorial, 9:16 vertical shot.
Subject: Adult Asian female model, strict identity lock on facial features (100% match to reference). Realistic skin texture with visible pores.
Outfit: Magnificent Ming Dynasty ceremonial Hanfu (luxury court style). Multi-layered structure with visible inner standing collar and heavy outer cape/cloud shoulder.
Fabric & Details: Brocade fabric with heavy "Panjin" gold embroidery and multi-colored silk threads (peony, cloud patterns). Avoid monotone gold; distinct vibrant embroidery colors (blue, vermilion, white) on a base of [Emerald Green / Apricot / Deep Red].
Headwear: Heavy elaborate gold phoenix crown with dense symmetrical tassels swaying slightly. Pearl and jade accents.
Setting: The Forbidden City, Beijing. Red palace walls, intricate corridors, snow scene (falling snow or accumulated snow). Clean background, no tourists.
Photography: Shot on Hasselblad, 85mm or 50mm lens. Cinematic lighting, soft winter daylight with fill light. Sharp focus on eyes and embroidery texture. Shallow depth of field.
Composition: Magazine cover layout with negative space for typography. Pose is elegant, regal, and composed (holding a fan or natural hand placement).
Style: Vogue / Harper's Bazaar aesthetic. Photorealistic, 8k resolution, masterpiece. --ar 9:16 --v 6.0 --style raw`,
    prompt: "High-fashion Hanfu portrait in Forbidden City snow scene...",
  },

    "dr-50": {
    title: "将人物置身于9部电影的圣诞场景中",
    tags: ["Christmas", "Collage", "Movie Style", "Portrait", "Grid"],
    promptCn: `一个3x3的网格拼贴画，所有9个格子里必须是完全同一位女性。严格保持与参考图一致的面部特征。不要改变她的五官，只改变她的表情、妆容和造型以匹配各电影主题。
格1：《真爱至上》风格-机场告别场景戴圣诞帽，手持包装礼物，温情拥抱，背景机场巨型圣诞树和彩灯装饰，柔和光线
格2：《小鬼当家》风格-惊讶夸张表情手捂脸颊，戴歪圣诞帽，背景家中圣诞树、礼物堆和装饰彩灯，喜剧效果
格3：《极地特快》风格-火车窗前戴睡帽，手持热可可配糖果拐杖，窗外魔幻雪景和圣诞村庄，梦幻蓝金色调
格4：《圣诞怪杰》风格-真实人物绿色调服装配红色圣诞帽，搞怪表情，手持偷来的圣诞装饰，背景圣诞村彩灯和礼物，创意造型
格5：《34街的奇迹》风格-复古百货商店场景穿经典红色圣诞礼服，手持圣诞购物袋，背景巨型圣诞树和复古装饰，经典好莱坞照明（中心）
格6：《圣诞精灵》风格-完整精灵装扮（绿色上衣、红色条纹袜、尖头帽配铃铛），欢乐跳跃姿态，手持糖果拐杖，背景糖果色圣诞工坊
格7：《冰雪奇缘》风格-冰蓝色公主裙配雪花皇冠，手持魔法冰晶，雪花飞舞，背景冰晶城堡和大大的圣诞树，特别的喜庆糖果，迪士尼魔法感
格8：《真实的谎言》风格-黑色礼服配红色圣诞饰品，手持香槟，背景圣诞派对场景彩灯和装饰球，优雅神秘
格9：《Last Christmas》风格-时尚女性穿红色复古大衣配绿色围巾和金色耳环，手持圣诞礼物盒，站在伦敦圣诞街市彩灯下，背景科文特花园巨型圣诞树和节日橱窗，温暖夜景灯光，充满希望的表情，现代浪漫电影美学
每格模仿对应电影的色调、光线和氛围，圣诞装饰元素极其明显，电影海报构图，添加电影感标题文字效果，专业电影剧照质感，4K高清`,
  },

    "dr-51": {
    title: "云朵形状创意合成",
    tags: ["Nature", "Cloud Art", "Surreal", "Landscape", "Photography"],
    promptCn: `创建一个超写实的天空场景，柔和、自然的云层有机地聚合，形成一个清晰可辨的【主体】轮廓。
云朵形态高悬在明亮蔚蓝的天空中，自然漂浮，其下方是清晰可识别的【景观描述】景观，为画面提供稳固的视觉基础。
画面构图为正方形（1080×1080），云层造型位于画面上半部分，下方的风景使整体场景更加平衡。
光线清晰明亮，呈现出日光直射的效果，云朵上有被阳光照亮的高光，增强了层次感、柔软度与真实感。
整体氛围应当宁静、积极、富有视觉冲击力，色彩饱和度高，画面干净纯粹，营造出平和而清新的感觉。`, 
  },
    
    "dr-52": {
    title: "3D国风画卷破壁海报",
    tags: ["3D Render", "Chinese Style", "Ink Painting", "Surreal", "Pop-out"],
    promptCn: `角色设定：3D国风幻想概念艺术大师。
任务目标：生成一张融合传统水墨艺术与现代3D CG渲染的“画中破壁”海报。
关键要求：保持参考图中卷轴的波浪形态、倾斜角度以及人物的动态飞天姿势不变，仅替换人物为用户指定的 [中国艺术表演者类型]，并自动生成与之主题匹配的卷轴水墨背景内容。
核心构图 (固定框架)：
长宽比：16:9 横向宽屏。
空间关系：
Layer 1 (背景)：柔和的深灰色影棚渐变背景。
Layer 2 (中景-画卷)：一幅巨大的古风宣纸卷轴，呈波浪状腾空，从画面左前方向右后方延伸倾斜。卷轴表面是二维水墨画。
Layer 3 (前景-人物)：3D超写实角色的身体和道具（如乐器、兵器、飘带）从卷轴表面动态“弹出”，姿态必须保持参考图中的向右上方飞舞、回首的S型动态构图。
关键互动：3D人物必须在2D卷轴表面投下真实的阴影，强调立体感。
图像生成流程：
1. 复刻底座：重建波浪状、倾斜悬浮的古朴宣纸卷轴模型。卷轴左侧保留竖排书法和印章位置。卷轴右侧的水墨画内容需根据用户输入的[中国艺术表演者类型]进行主题推导和绘制（例如：若输入京剧武生，背景可是水墨戏台或战场；若输入剑舞者，背景可是寒山竹林）。
2. 替换主体：在卷轴前方生成用户指定的[中国艺术表演者类型]（例如：京剧花旦、古琴演奏家、剑舞者等）。核心要求：无论角色身份为何，其整体姿态、身体朝向和飘带飞舞的轨迹必须模仿飞天造型，以维持构图的动势。风格：极致的3D C4D / Octane Render 超写实风格，服装和道具材质考究。
3. 融合与特效：确保3D人物在2D画卷上投下柔和且准确的阴影。添加漂浮的元素（如花瓣、光点或与角色相关的元素如墨滴、剑气），模糊现实与画作的边界。
整体视觉描述：
风格关键词：超现实主义，基于参考图的固定构图，弹出式3D效果，水墨与超写实CG对比。
色调：背景古朴，前景角色色彩华丽丰富，形成对比。
画质：8K分辨率，电影级光照，高细节纹理。
用户输入参数：
[中国艺术表演者类型]：请输入你想展示的中国传统艺术表演者身份，例如：京剧花旦、武当剑客、古琴大师、昆曲小生等。AI将根据此身份自动匹配服装和卷轴背景的水墨画内容。`,
    promptEn: `Role: 3D Guofeng Fantasy Concept Artist.
Goal: Create a "breaking the 4th wall" poster fusing traditional Chinese Ink Art with modern 3D CG rendering.
Key Constraint: Maintain the wave-like scroll shape, tilted angle, and the dynamic "Flying Apsaras" pose from the reference. Replace the character with [Insert Chinese Artist Type].
Structure & Layout (Fixed):
Aspect Ratio: 16:9.
Layer 1 (Background): Soft dark grey studio gradient.
Layer 2 (Midground): A giant ancient rice paper scroll floating in a wave shape, extending from front-left to back-right. The surface displays 2D ink wash painting.
Layer 3 (Foreground): A hyper-realistic 3D character (based on input type) "popping out" from the scroll surface. Pose must be flying upward to the right, looking back, S-curve body.
Interaction: The 3D character casts realistic soft shadows onto the 2D scroll surface.
Workflow:
1. Scroll Structure: Ancient paper texture, vertical calligraphy and red seal on the left. Ink painting content matches the character theme (e.g., Opera stage for Peking Opera actor, Bamboo forest for Swordsman).
2. Character Replacement: Generate [Insert Chinese Artist Type] (e.g., Peking Opera Dan, Guqin Master, Sword Dancer) in front of the scroll. The pose, orientation, and ribbon trajectory must mimic the Flying Apsaras style. Style: Extreme 3D C4D / Octane Render hyper-realistic, exquisite costume and props.
3. Effects: Floating elements (petals, light dots, ink drops, sword energy) blurring the boundary between reality and painting.
Visual Description:
Style Keywords: Surrealism, Fixed Composition based on ref image, Pop-out 3D effect, Ink wash painting vs Hyper-realistic CGI.
Tone: Rustic background, rich and gorgeous foreground character colors, high contrast.
Quality: 8k resolution, cinematic lighting, highly detailed textures.`,
    prompt: "3D Chinese fantasy concept art, character popping out of an ink painting scroll...",
  },
  
    "dr-53": {
    title: "产品引力场：商业主视觉",
    tags: ["Product Design", "Commercial", "3D Render", "Tech", "Minimalist"],
    promptCn: `生成一张可直接用于官网、发布会、广告投放的 [插入产品名称] 的商业主视觉。
通过“产品引力场”的方式，将结构、材质、功能与应用价值高度凝练地呈现在一张画面中，传达高端、专业、可信赖的品牌形象。
整体定位：
商业广告级、电影感超写实、极致质感、品牌主视觉风格。
画幅与构图：
画面比例：4:5。
构图方式：产品置于画面正中央，三分之二构图。
镜头机位：平视或略微低机位，强化产品存在感。
画质：超高清，广告级分辨率，适合大幅输出。
主体产品设定：
展示对象为 [插入产品名称]，以真实比例呈现，产品静置于画面中心，姿态稳定、干净、完整，产品外观线条清晰，材质真实，边缘锐利，体现工业设计与制造品质。
核心创意表达（产品引力场）：
以“引力场 / 能力场”为视觉隐喻，所有视觉元素均服务于产品价值展示，而非装饰。
悬浮展示元素（产品卖点可视化）：
围绕产品悬浮的不是杂乱物品，而是与产品强相关的功能模块与应用场景象征，例如：
产品核心零部件的拆解模块（结构剖析感）。
材料切面展示（如金属、玻璃、织物、复合材料微观纹理）。
功能示意图标或半透明结构线框。
应用场景的抽象符号（城市、家庭、工业、户外等）。
性能参数模块（图形化数据、刻度、线条）。
所有悬浮元素风格统一，呈现为半透明、金属感或极简几何体，避免具象杂乱。
空间逻辑与层级：
悬浮模块以多层环绕结构分布，前后景层次清晰。
元素之间形成视觉秩序，体现“系统化设计”与“产品逻辑”。
整体构图稳定、理性、可读性强。
环境与背景：
场景类型：高级摄影棚 / 抽象空间 / 极简工业环境。
背景颜色：深灰、深黑或品牌主色渐变。
背景干净克制，预留文案、LOGO、参数信息展示空间。
光影设计（商业产品级）：
主光：柔性顶部或侧前光，精准刻画产品轮廓。
轮廓光：强化边缘线条，使产品从背景中脱颖而出。
点光源：用于强调材质细节、关键功能区。
阴影干净利落，增强真实接地感。
色彩策略：
主色调：中性灰、黑、银、白（根据产品调整）。
强调色：产品关键部位或卖点高光色（可替换为品牌色）。
整体克制、高级、耐看。
镜头与质感：
镜头：85mm 或等效。
光圈：f/2.8。
对焦：产品主体极致锐利，悬浮元素略微虚化。
材质表现：真实、细腻、广告级。
画面质量要求：超写实。
极致细节（边缘、纹理、材质反射）。
无廉价 CG 感，无卡通感。`,
    promptEn: `Generate a high-end commercial key visual for [Insert Product Name], suitable for official websites and launch events.
Concept: "Product Gravitational Field". Visualize structure, materials, functions, and value in a condensed, high-tech manner.
Style: Commercial advertising grade, cinematic hyper-realism, premium texture, brand key visual style.
Composition:
Ratio: 4:5.
Subject: [Insert Product Name] centered, occupying 2/3 of the frame.
Angle: Eye-level or slightly low angle to enhance presence.
Subject Presentation: Realistic scale, stable posture, clean and complete. Sharp edges, authentic materials, industrial design quality.
Creative Core (Gravitational Field):
Floating Elements: NOT random objects, but functional modules and symbols orbiting the product.
- Exploded view of core components.
- Material cross-sections (metal, glass, micro-textures).
- Semi-transparent wireframes or icons.
- Abstract symbols of usage scenarios (city, home, industry).
- Graphical data/performance metrics.
Style of Floating Elements: Semi-transparent, metallic, minimalist geometric, unified style.
Spatial Logic: Multi-layered orbital distribution, clear depth, organized visual order.
Environment:
High-end studio / Abstract tech space / Minimalist industrial.
Background: Dark grey, deep black, or brand gradient. Clean and restrained, leaving space for copy.
Lighting:
Soft top/side main light. Strong rim light for separation. Point lights for details. Clean shadows for grounding.
Colors: Neutral (Grey, Black, Silver, White) with accent highlights. Restrained and premium.
Tech Specs: 85mm lens, f/2.8 aperture. Sharp focus on product, slight bokeh on floating elements. 8k resolution, octane render.`,
    prompt: "Commercial product photography, gravitational field concept, floating components...",
  },
    
    "dr-54": {
    title: "水下梦境艺术摄影",
    tags: ["Portrait", "Underwater", "Fashion", "Surreal", "Photography"],
    promptCn: `整体呈现：水下梦境主题的艺术摄影。
主体描述：[上传参考图]在清澈的水下世界中漂浮，阳光从水面倾泻而下形成柔和光束。
动作与姿态：人物身体微微后仰，一只手向上伸展，另一只手自然下垂，姿态如水下芭蕾舞者，优雅而安静。
装束：她身穿白色半透明薄纱长裙，轻盈的雪纺材质在水中流动，长长的裙摆和飘带随水流延展，大师级构图，头发自然散开。
整体氛围：梦幻、浪漫、宁静，具有电影感与艺术摄影质感，超写实，细节精致，商业大片风格，4K超高清。`,
    promptEn: `Artistic underwater photography, dreamscape theme.
Subject: An [Asian woman] floating in a crystal clear underwater world. Sunlight beams cascade down from the surface creating soft light rays.
Pose: Body slightly arched backwards, one hand reaching up, the other hanging naturally, resembling an underwater ballerina, elegant and quiet.
Outfit: Wearing a white semi-transparent tulle long dress, lightweight chiffon material flowing in the water, long skirt hem and ribbons extending with the flow.
Details: Master composition, hair spreading naturally.
Atmosphere: Dreamy, romantic, serene, cinematic and fine art photography texture.
Quality: Hyper-realistic, exquisite details, commercial blockbuster style, 8k Ultra HD. --ar 9:16`,
    prompt: "Artistic underwater photography of an Asian woman in a white dress...",
  },
  
    "dr-55": {
    title: "LOMO风格：分身海报",
    tags: ["LOMO", "High Angle", "Portrait", "Collage", "Cinematic"],
    promptCn: `基于[参考照片人物]的艺术摄影。
风格：LOMO LC-A 风格的高清摄影作品（高饱和度、暗角、胶片质感）。
视角：高角度俯拍 (High angle shot)，镜头聚焦于主体。
主体：一位绝美的日本电影女演员。面容与气质需与[参考照片人物]完全一致。
服饰：身穿黑色长风衣，气质冷艳。
环境：她正站在铺满地面的无数海报之上。
关键细节：地面上的海报内容清晰可见，呈现为黑白网格排列的艺术人像。这些海报上的面孔全都是她本人演绎的不同风格的高端商业模特摄影大片。
意境：仿佛她站在自己无数个不同造型的分身之上，形成强烈的自我审视与时空交错感。
画质：4K高清，细节锐利，光影富有戏剧性。`,
    promptEn: `LOMO LC-A style high-definition photography.
Angle: High angle shot (top-down view), focusing on a stunning Japanese film actress.
Subject Consistency: Face and aura strictly identical to the [Reference Photo].
Outfit: Wearing a long black trench coat, cool and elegant vibe.
Setting: She is standing on a floor completely tiled with countless posters.
Crucial Detail: The posters on the ground are black and white artistic portraits arranged in a grid. Every single poster features HERSELF in different high-end commercial fashion styles and looks.
Concept: Standing on top of her own multiple avatars/past selves.
Visuals: LOMO aesthetic, slight vignette, rich colors, sharp focus, cinematic lighting, 4k resolution.`,
    prompt: "LOMO style high angle shot of an actress standing on posters of herself...",
  },
  
    "dr-56": {
    title: "3D微缩城市风情",
    tags: ["3D Render", "Miniature", "City", "Isometric", "Travel"],
    promptCn: `图像设定：类型为3D微缩景观模型渲染，主题为[插入城市名称]城市风情。风格采用等距俯视图，现代与传统交融，松弛感，细节丰富。画幅比例16:9。
视觉描述：一个生动迷人的微缩版[插入城市名称]世界。采用清晰的45度俯视等距视角，微缩模型玩具风格。场景包含标志性地标建筑及特色雕塑（如[插入地标]）、具有当地特色的传统建筑或老街区（如[插入老街]）、冒着诱人蒸汽的热闹户外美食小摊（如[插入美食]）、以及散落各处的休闲元素与茶馆/咖啡座桌椅。
环境细节：地面上散落着[插入季节性植物/落叶]，营造出轻盈舒适的[插入季节]氛围，传统屋檐下悬挂着特色装饰。微缩小人模型正在进行当地特色活动（如[插入活动]）。
文字元素：画面顶部中央有大型白色3D立体中文字符“[插入城市名称]”，下方附较小文字“温度 日期”。
整体氛围：松弛、鲜活，都市感与传统感并存。
光线：温暖的日常环境光混合特色区域的辉光，并带有升腾的蒸汽与飘落物效果。
技术参数：3D渲染，Octane渲染引擎，高细节精度，黏土或树脂玩具质感，柔和阴影，景深聚焦于核心地标。`,
    promptEn: `Image Setting: 3D miniature landscape model render, theme is [Insert City Name] city vibe. Style is isometric top-down view, blend of modern and traditional, relaxed, rich details. Aspect ratio 16:9.
Visual Description: A vivid and charming miniature world of [Insert City Name]. Clear 45-degree isometric view, miniature toy style. Scene includes iconic landmarks and characteristic sculptures (e.g., [Insert Landmark]), traditional architecture or old streets (e.g., [Insert Old Street]), bustling outdoor food stalls (e.g., [Insert Food]) with rising steam, and scattered leisure elements like tea/coffee tables.
Environment Details: Ground scattered with [Insert Seasonal Plants/Leaves], creating a light and comfortable [Insert Season] atmosphere. Characteristic decorations hang under traditional eaves. Miniature people models are engaging in local activities (e.g., [Insert Activity]).
Text Elements: Large white 3D Chinese characters "[Insert City Name]" in the top center, with smaller text "Temperature Date" below.
Overall Atmosphere: Relaxed, vivid, coexistence of urban and traditional feel.
Lighting: Warm daily ambient light mixed with glow from featured areas, with effects of rising steam and falling particles.
Tech Specs: 3D render, Octane render engine, high precision detail, clay or resin toy texture, soft shadows, depth of field focused on the core landmark.`,
    prompt: "3D isometric miniature city landscape, clay toy texture, relaxed vibe...",
  },
  
     "dr-57": {
    title: "全套电商KV视觉系统生成器",
    tags: ["E-commerce", "Product Photography", "Branding", "Workflow", "Visual System"],
    promptCn: `【任务说明】
我需要为我的产品生成一套完整的电商KV视觉系统提示词（10张海报，9:16竖版格式）。
【第一步：产品信息智能提取（基于上传图片）】
请仔细分析我上传的产品图片，自动提取以下信息：
1. 品牌名称识别：中英文名、LOGO设计风格。
2. 产品类型判断：类别、具体名称、规格。
3. 卖点提取：包装文案、图标标识、视觉推断、数据卖点。
4. 配色方案分析：主色调、辅助色、配色风格。
5. 设计风格判断：包装风格、字体风格、图案元素。
6. 目标受众推断：用户群体、年龄段、消费层级。
7. 产品参数提取：规格、成分、说明、日期等。
8. 产品细节识别：材质质感、结构特点、包装特色。
【输出格式：识别报告】
品牌名称：[中文] / [英文]
产品类型：[大类] - [具体产品]
产品规格：[具体规格]
核心卖点：[列出5个核心卖点]
主色调：[颜色名称] (#HEX) + [颜色名称] (#HEX)
设计风格：[风格描述]
目标受众：[用户画像]
品牌调性：[调性描述]
【第二步：视觉风格选择】
基于识别信息，推荐一种最适合的风格（如：杂志编辑、水彩艺术、科技未来、复古胶片、极简北欧、霓虹赛博、自然有机）。
【第三步：文字排版效果选择】
推荐一种排版效果（如：粗衬线大标题、玻璃拟态卡片、3D浮雕、手写体标注、无衬线霓虹、极细线条）。
【第四步：生成完整提示词系统】
请严格按照以下结构输出 10 张海报的详细生成指令：
LOGO生成提示词
海报01 - 主KV视觉 (Hero Shot，严格还原产品)
海报02 - 生活场景 (Lifestyle)
海报03 - 工艺/概念可视化 (Concept)
海报04 - 细节特写01 (放大细节)
海报05 - 细节特写02 (材质质感)
海报06 - 细节特写03 (功能细节)
海报07 - 用户评价/更多细节
海报08 - 品牌故事/配色灵感
海报09 - 产品参数/规格表
海报10 - 使用指南/注意事项
【核心要求 (重中之重)】
1. 产品图还原：提示词必须明确“严格还原上传的产品图，包括包装设计、颜色、LOGO位置等”。
2. 文案排版 (中英双语)：所有海报文字必须采用中英文双语排版（A.堆叠 / B.并列 / C.分离）。
3. 包含元素：每张海报需包含中文提示词、英文Prompt、负面词、详细排版布局说明、LOGO位置、CTA按钮设计。
4. 风格统一：所有海报必须使用相同的文字排版效果和配色系统。`,
 },

    "dr-58": {
    title: "古希腊黑绘式陶器画",
    tags: ["Black-figure", "Pottery Art", "Ancient Greek", "Mythology", "2D"],
    promptCn: `【主题】：[插入主题]  
画面比例：16:9
生成一幅“古希腊黑绘式（Black-figure）陶器绘画语法”的二维平面叙事画面。
状态设定：
呈现为工坊里“刚完成”的全新作品状态：黑漆饱满发亮、刻线锋利清脆、陶土底色干净温暖；无做旧、无磨损、无裂纹、无博物馆陈列感。
输出与裁切规则（最高优先级，必须遵守）：
1）只输出“画面内容本身”，并且必须裁切为全幅铺满（full-bleed）：图像四边直接贴到画面内容，不允许出现任何外部背景（包括白色/灰色/黑色/渐变）。
2）禁止出现任何“被拍照展示”的感觉：不出现画板/卡片/海报/贴纸/装饰牌/实体边缘/厚度/阴影投射/反光/展台/桌面/墙面/相机景深虚化。
3）禁止出现陶罐/陶瓶器型或曲面透视：不出现瓶身弧度、环绕叙事带、圆柱投影、弯曲的上下边框；上下装饰带必须是完全水平的直线。
4）画面边缘必须由“装饰封边纹样”直接触到图像边界：上封边贴顶，下封边贴底，不能在封边外再多出任何留白或背景色。
色彩体系（严格限制）：
背景：赤褐色陶土（Terracotta/Ochre）质感底色，均匀、温暖、哑光，带细微颗粒纹理。
主体：深邃发亮的黑漆（Glossy Black）实心剪影，边缘干净利落，不要水墨晕染或毛边。
点缀：仅允许极少量紫红色或白色（用于眼睛、符号、少量衣饰/器物细节强调），其余不得出现第三种主色或彩色渐变。
构图范式：
严格二维平面叙事带（frieze）构图：画面上、下各一条传统装饰封边，中间为主叙事带。
上下封边必须包含希腊回纹（Meander）与棕榈叶纹（Palmette）/莲花纹（Lotus）的组合；封边是直线矩形边框，不环绕、不弯曲。
人物/物体以绝对侧影（Side Profile）或平面扭转姿态呈现；空间扁平化，前后关系用重叠表达，不用透视深度。
线条技法：
禁止明暗建模、体积光、写实光影、真实阴影。
所有内部细节（肌肉、衣褶、结构、纹样、器物零件）必须用极细、清晰、锐利的刻线（Incised lines）刻出；刻线呈现“刮开黑漆露出陶土底色”的细线效果，线条节奏一致，手工刻划感强。
叙事转译（按需触发）：
若【主题】包含现代物品或概念，必须神话化转译为神祇/英雄/圣物或仪式象征物（例如：手机=发光刻板圣器、耳机=神圣头饰），用夸张肢体与仪式化动作表达叙事张力。
若【主题】为传统题材，则保持古典叙事语法即可。`,
},

   "dr-59": {
    title: "圣诞精灵四格拼图",
    tags: ["Christmas", "Elf", "4-Panel", "K-pop Style", "Character"],
    promptCn: `一张照片般逼真的4格分屏拼图，所有画面为同一女性角色。
关键：保持精确的面部特征，保留原始脸部结构，整个拼图中角色完全一致。角色皮肤白皙，质感自然，眼神明亮。
左上图：角色穿着绿色的圣诞精灵服装，戴着尖尖的精灵耳朵道具，对着镜头敬礼，表情顽皮。
右上图：角色手里拿着一个巨大的玩具锤子，假装要敲打镜头，眼睛睁得圆圆的。
左下图：角色正在包装礼物，嘴里咬着丝带的一端，眉头微皱显得很专注可爱。
右下图：角色坐在礼物堆上，双手托腮，双脚悬空晃动，一脸满足。
环境：色彩饱和的圣诞工坊背景，红绿撞色。
灯光：明亮的影棚灯光，无阴影，卡通感强。
风格：K-pop专辑内页风格，色彩鲜艳跳跃，清晰对焦，活泼搞怪。`,
    promptEn: `A photorealistic 4-panel split screen collage, featuring the SAME female character in all panels.
Consistency: Maintain precise facial features and structure across all shots. Fair skin, natural texture, bright eyes.
Top-Left: Wearing green Christmas elf outfit with pointed ears, saluting to camera, playful expression.
Top-Right: Holding a giant toy hammer pretending to hit the camera, eyes wide open.
Bottom-Left: Wrapping a gift, biting the ribbon end, focused and cute frown.
Bottom-Right: Sitting on a pile of gifts, chin in hands, legs dangling, satisfied expression.
Setting: Saturated Christmas workshop background, red and green color block.
Lighting: Bright studio lighting, shadowless, strong cartoon pop feel.
Style: K-pop album booklet aesthetic, vivid colors, sharp focus, lively and quirky. 8k resolution.`,
    prompt: "4-panel Christmas elf photo collage, K-pop style...",
  },

    "dr-60": {
    title: "角色收藏品-装备包",
    tags: ["Product Design", "Collector's Edition", "Character Design", "Concept Art", "Knolling"],
    promptCn: `【指令】为 [插入角色名称/IP] 设计一个终极收藏级“装备包”。
1. 分析与推断：
基于该角色的原型、标志性场景和道德弧光，推导出最具代表性的物品。
2. 视觉目标：
一个带隔层的高级收藏套装盒（无明显Logo，极少文字），采用 4:5 产品主图构图。
3. 布局规则：
中间隔层：放置角色的高精度迷你人偶。
环绕隔层：陈列 10-16 件“遗物道具”，这些道具必须能展现角色的成长弧光（如：早期的简陋装备 vs 后期的神器、象征牺牲的物品、关键抉择的工具）。
底部/侧边：添加一个包含 5 个节点的“弧线时间轴”长条标签，每个节点仅包含 1-2 个极简图标和单词。
4. 风格与渲染：
超写实产品摄影质感，顶级材质（皮革、金属、旧物痕迹），柔和的博物馆级布光。8K分辨率。`,
    promptEn: `[Instruction] Create an Ultimate Collector's "Relic Equipment Kit" for [Insert Character/IP Name].
1. Analysis: Derive iconic items based on the character's archetype, key scenes, and moral arc.
2. Visual Goal: A premium compartmented collector's box (No logos, minimal text), 4:5 aspect ratio product shot.
3. Layout Rules:
- Center Compartment: A high-fidelity miniature figure of the character.
- Surrounding Compartments: Display 10-16 "Relic Props" that narrate the character's arc (e.g., "Before" vs "After" items, symbols of sacrifice, tools of choice).
- Timeline Strip: Add a small strip with a 5-node "Arc Timeline" (1-2 icons and words per node).
4. Style & Render:
Hyper-realistic product photography, premium textures (weathered leather, metal), museum-grade lighting. 8k resolution.`,
    prompt: "Premium collector's relic kit box for a character, knolling style...",
  },

    "dr-61": {
    title: "简约圣诞杂志风人像",
    tags: ["Portrait", "Fashion", "Christmas", "Magazine", "Minimalist"],
    promptCn: `（杂志封面版式，极简构图，留白设计）特定人物坐在高脚凳上的全身棚拍造型。【重点要求：务必保证人物面部与参考图完全一致】
造型：简约时髦穿搭（黑色高领毛衣、牛仔裤），一条红色长围巾垂坠飘动。佩戴低调的驯鹿角发饰。
道具：一颗红色圣诞装饰球用细绳悬挂，恰好位于她的手上方。
背景：雪花光影图案投射于背景墙面；背景采用纯色浅灰或白色无缝背景纸。
光线：柔和定向光，打造干净利落的视觉效果，同时形成轮廓清晰的阴影。
风格：《Vogue》或《Elle》杂志风格，高奢时尚，线条简洁，兼具现代感与精致格调。`,
    promptEn: `Magazine cover layout, minimalist composition, negative space. Full-body studio shot of a specific character sitting on a high stool. **[Critical: Strict face identity lock matching reference.]**
Outfit: Minimalist chic (black turtleneck sweater, jeans), with a long red scarf draping and flowing. Wearing subtle reindeer antler hair accessories.
Props: A red Christmas ornament ball suspended by a thin string, positioned just above her hand.
Background: Snowflake shadow patterns projected onto the background wall; solid light grey or white seamless background paper.
Lighting: Soft directional lighting creating a clean, sharp visual with defined shadows.
Style: Vogue or Elle magazine aesthetic, high luxury fashion, clean lines, modern and sophisticated.`,
    prompt: "Minimalist Christmas magazine portrait, high fashion style...",
  },

    "dr-62": {
    title: "3x3网格高端商业营销",
    tags: ["Product Photography", "Grid", "Commercial", "Advertising", "3D Render"],
    promptCn: `创建一个3×3的网格，宽高比为1:1，用于高端商业营销活动，以上传的产品为中心主体。
每个画面必须呈现独特的视觉概念，同时确保所有九张图片中的产品保持完美的一致性。
网格概念（每个单元格一个）：
1. 具有大胆构图的标志性产品静物特写
2. 突出材质、表面或纹理的极致微距细节
3. 产品周围动态的液体或粒子互动
4. 极简主义雕塑式排列，运用抽象形式
5. 漂浮元素构图，营造轻盈和创新的感觉
6. 强调触感和真实感的感官特写
7. 受产品配色方案启发的色彩驱动概念场景
8. 成分或元素的抽象表现（非字面意义，象征性）
9. 融合现实与想象的超现实而优雅的场景
视觉规则：
产品在形状、比例、标签、字体、颜色和品牌标识方面必须100%准确。产品不得出现扭曲、变形或重新设计。产品与背景之间清晰分离。
灯光和风格：
柔和、可控的影棚灯光。微妙的高光，逼真的阴影。高动态范围，超清晰对焦。编辑级奢华广告美学。高端感官营销视觉效果。
整体感受：
现代、精致、视觉统一。高端商业营销活动。专为品牌网站、社交媒体和数字广告牌设计。超现实、电影感、精致且充满吸引力。`,
    promptEn: `Create a 3x3 grid with a 1:1 aspect ratio for a high-end commercial marketing campaign, featuring the uploaded product as the central subject.
Each panel must present a unique visual concept while ensuring perfect product consistency across all nine images.
Grid Concepts (One per cell):
1. Iconic product still life with bold composition.
2. Extreme macro detail highlighting material, surface, or texture.
3. Dynamic liquid or particle interaction around the product.
4. Minimalist sculptural arrangement using abstract forms.
5. Floating element composition creating a sense of lightness and innovation.
6. Sensory close-up emphasizing touch and realism.
7. Color-driven concept scene inspired by the product's color scheme.
8. Abstract representation of ingredients or elements (symbolic, not literal).
9. Surreal yet elegant scene blending reality and imagination.
Visual Rules:
The product must be 100% accurate in shape, scale, label, font, color, and branding. No distortion, deformation, or redesign of the product allowed. Clear separation between product and background.
Lighting and Style:
Soft, controlled studio lighting. Subtle highlights, realistic shadows. High dynamic range, ultra-sharp focus. Editorial luxury advertising aesthetic. High-end sensory marketing visuals.
Overall Feel:
Modern, sophisticated, visually unified. High-end commercial marketing campaign. Designed for brand websites, social media, and digital billboards. Surreal, cinematic, exquisite, and engaging.`,
    prompt: "3x3 grid high-end commercial product photography campaign...",
  },

   "dr-63": {
    title: "飘渺神话：流光剪影模板",
    tags: ["Abstract", "Fantasy", "Silhouette", "Light Flow", "Chinese Mythology", "Gemini"],
    promptCn: `【指令】生成一幅宽幅全景数字艺术作品 (21:9 比例)。
核心主体：[插入角色名称，如：隋唐英雄传]。
表现形式：人物不是实体皮肤，而是由流动的光带、半透明的烟雾和虹彩粒子组成的飘渺剪影。
姿态：由角色性格决定的姿势，悬浮在半空中，构图居中，两侧延伸出流动的能量轨迹。
氛围与色彩：
背景：深邃、忧郁的靛蓝色和深海军蓝调 (Deep Indigo/Navy)。
光效：人物散发出柔和、神奇的生物荧光，色调为金色、桃色和荧光青色。
特效：全息散射，丝绸般的能量轨迹，展现强烈的廷德尔效应（体积光）。
风格定义：抽象奇幻，强调流畅的动态和梦幻般的氛围，非照片级真实感，无实体皮肤。
画质：8K分辨率，高度精细的纹理，杰作。`,
    promptEn: `A wide panoramic digital art piece (aspect ratio 21:9) depicting **[Insert Character Name, e.g., Journey to the West characters]** composed entirely of flowing ribbons of light, translucent smoke, and iridescent particles.
The figure is a silhouette suspended in mid-air against a deep, moody indigo and navy blue background.
The subject emits a soft, magical bioluminescent glow in shades of gold, peach, and fluorescent cyan.
Style: Abstract fantasy, ethereal, mysterious. Not photorealistic, no solid skin.
Atmosphere: Volumetric lighting (Tyndall effect), holographic scattering, silky energy trails extending to the sides.
Render: 8k resolution, highly detailed textures, masterpiece. --ar 3:1 --v 6.0 --style raw`,
    prompt: "Abstract fantasy digital art of a character made of flowing light and smoke...",
  },

    "dr-64": {
    title: "雪地素描艺术肖像",
    tags: ["Portrait", "Winter", "Snow Art", "Sketch", "Surreal", "Gemini"],
    promptCn: `【指令】生成一张电影级艺术摄影作品 (9:16)。
场景与氛围：冬季户外，纯白色的雪地背景。自然冬日阳光，柔和漫射，光影柔和无刺眼强光。
整体氛围宁静、平和、诗意、梦幻，带有怀旧的温柔感。色调以白色、柔灰、柔和的浅绿为主。
主体人物：一位年轻女子跪在雪地上，镜头从略微俯视的后方角度拍摄（看不到正脸，侧重背影和氛围）。
外貌特征：面部特征需严格锁定参考图。皮肤白皙光滑，身材苗条。
发型：低低的整洁发髻，几缕发丝自然地垂落在颈部。
服装：身穿浅鼠尾草绿色的露背吊带裙，材质轻薄、柔软、飘逸、略微半透明。精致的垂坠感露出上半背部，展现优雅、柔美与脆弱感。双手轻轻放在身前的雪地上。
核心创意元素（雪地素描）：
在女子面前的雪地上，不是普通的痕迹，而是直接“显现”或“雕刻”出了一幅细腻的铅笔素描风格肖像。
素描内容：画的是她本人的面部（大眼、精致五官），线条细腻，阴影柔和，具有逼真的石墨质感。
文字元素：素描左侧有手写体文字 "2025 Winter"，仿佛用铅笔写在雪上，与雪地纹理自然融合。
装饰元素：素描周围散落着几只简约俏皮的石墨素描风格熊猫，均匀分布，增添微妙的奇幻感。
技术参数：浅景深，焦点在人物和雪地素描上。清晰的雪质感，高细节度的织物纹理。8K超高清，超现实主义风格。`,
    promptEn: `Cinematic art photography, winter theme.
Subject: A young woman kneeling on pristine white snow, viewed from a slightly high-angle from behind.
Appearance: Face matches reference photo. Fair skin, slim body. Low neat bun with loose strands on neck.
Outfit: Pale sage green backless slip dress, light, soft, flowy, slightly translucent fabric. Elegant and fragile vibe.
Art Elements (The Snow Sketch):
Directly on the snow surface in front of her, there is a realistic graphite pencil sketch portrait of herself (large eyes, delicate features).
To the left of the sketch, handwritten text "2025 Winter" in pencil style blended with snow.
Surrounded by playful minimalist pencil sketches of pandas scattered on the snow.
Lighting: Soft diffused winter sunlight, gentle shadows.
Mood: Serene, poetic, dreamy, nostalgic.
Tech: Shallow depth of field, sharp snow texture, high resolution 8k. --ar 9:16`,
    prompt: "Cinematic photography of a woman kneeling in snow with pencil sketches on the ground...",
  },

    "dr-65": {
    title: "品牌包装设计提案：线稿与成品",
    tags: ["Packaging Design", "Industrial Design", "Sketch", "Product Mockup", "Minimalist"],
    promptCn: `【指令】生成一张专业的品牌包装设计提案展示图。
产品类别：[插入类别，如：服装/奶茶/面包]
核心对象：包装袋设计 + 配套吊牌/标签设计。
整体风格：纯黑色（或指定颜色）包装，简约Logo设计，强调极具质感的材质细节。
需融入形象：[插入具体图案/IP形象描述]。
画面布局（左右对比）：
左侧：黑色线稿结构图。线描风格，工业设计草图，展示尺寸标注和结构线。
右侧：完成上色的成品效果图。真实材质质感（如特种纸、塑料、帆布），光影柔和。
下方/角落：配有简洁的设计标注文字（尺寸、材质、工艺说明），排版理性、有秩序。
背景与视角：
背景：干净纯白背景，无干扰。
视角：正视图 + 轻微等轴测视角 (Isometric)，展现立体感。
氛围：专业设计提案，非商业广告海报。理性、高级、清晰。
8K高分辨率，细节锐利。`,
    promptEn: `Professional brand packaging design proposal showcase.
Product Category: [Insert Category, e.g., Clothing/Milk Tea/Bakery].
Subject: Packaging bag design + Hang tag/Label design.
Style: Pure black (or custom color) packaging, minimalist Logo, high-quality textured materials. Integrate image: [Insert Image/IP Description].
Layout (Left vs Right Comparison):
Left Side: Black line art structure diagram. Line drawing style, industrial design sketch, showing dimension lines and structure.
Right Side: Finished colored rendering. Realistic material textures (e.g., specialty paper, plastic, canvas), soft lighting.
Bottom/Corner: Concise design annotations (dimensions, materials, process specs), rational and orderly typography.
Environment:
Background: Clean white background.
Perspective: Front view + slight Isometric view.
Vibe: Professional design proposal, not an advertisement. Rational, high-end, clean.
8k resolution, sharp details.`,
    prompt: "Brand packaging design proposal, sketch vs reality comparison...",
  },

    "dr-66": {
    title: "冬日氛围拼贴：音乐与时刻",
    tags: ["Collage", "Winter", "Photography", "iPhone Aesthetic", "Music Overlay", "Gemini"],
    promptCn: `指令：生成一张编辑冬季海报风格的多面板拼贴画。
核心要求：
面部参考：严格锁定用户上传的照片，零偏差保留面部比例、皮肤纹理和表情。
美学质量：自发的iPhone摄影感（抓拍、温馨、写实），带有柔和的雪花、细腻的模拟颗粒感和轻微的手持拍摄瑕疵。
视觉元素：
人物穿搭：短款人造毛皮外套，黑色紧身裤，经典UGG靴子。风格简约、舒适、极具冬日气息。
关键道具：银色 iPhone 17 Pro Max（由主体持有）。色调包含温暖琥珀色、柔和红色、松树绿和冬日灰。
布局配置：
面板1（左上）：黄昏时分的商店橱窗反光照片。淡淡的圣诞彩灯、花环、磨砂玻璃边缘。主体拿着手机部分遮住脸部，呈现掠过的轮廓和层叠的反射效果。
面板2（右上）：超广角街景人像（雪中人行道/圣诞市场）。近距离向下倾斜视角。主体随意向前倾，双手插兜。清晰可见黑色紧身裤和靴子。带有轻微运动模糊的飘雪。
面板3（右下）：亲密俯视自拍。温暖的街道或咖啡馆照明。手持节日饮品（咖啡/热红酒），佩戴有线耳机。聚焦清晰细腻的毛皮纹理，氛围怀旧。
图形叠加：
在拼贴画中心漂浮一个极简 Apple Music 风格的迷你播放器。显示流行圣诞歌曲（如 'Last Christmas'）。渲染效果平整干净，无阴影。`,
    promptEn: `Editorial winter poster style multi-panel collage.
Aesthetic: Spontaneous iPhone photography (candid, cozy, realistic). Texture: Soft snow, subtle analog grain, slight handheld imperfections.
Subject: Strict face adherence to reference. Outfit: Cropped faux fur jacket, black leggings, classic UGG boots. Device: Silver iPhone 17 Pro Max.
Panel 1 (Top Left): Twilight shop window reflection shot. Faint Christmas lights, wreaths, frosted glass edges. Subject holding phone partially covering face. Glancing silhouette, layered reflections, soft ghosting.
Panel 2 (Top Right): Ultra-wide angle street portrait (snowy sidewalk). Close-up, tilted down. Subject leaning forward casually, hands in pockets. Leggings and boots visible. Motion blur snow.
Panel 3 (Bottom Right): Intimate overhead selfie. Warm street/cafe lighting. Holding festive takeaway drink, wired headphones visible. Focus on fur texture. Nostalgic grainy atmosphere.
Graphic Overlay: Minimalist Apple Music style mini-player floating in center. Song: 'Last Christmas'. Flat clean render, no shadow.`,
    prompt: "Winter aesthetic photo collage with Apple Music player overlay...",
  },

    "dr-67": {
    title: "9种潮流时尚穿搭拼贴",
    tags: ["Fashion", "Portrait", "Collage", "Trend", "Photography"],
    promptCn: `基于[上传人物图片]并严苛保持面部特征不变，生成一张极具时尚感和网络热门度的3x3九宫格拼贴照片。
九个独立画面分别展示：
1. 酷飒街头风：黑色Oversized卫衣配工装裤（涂鸦霓虹后巷背景）。
2. 清纯性感风：白色丝绸吊带睡裙外搭针织衫（柔光慵懒卧室窗边背景）。
3. 运动塑形风：紧身时尚瑜伽套装（高端采光健身房背景）。
4. 复古Y2K辣妹：短T恤配低腰牛仔裙（千禧风彩色充满CD的房间背景）。
5. 华丽晚礼服：黑色高开叉亮片长裙（城市天际线天台酒吧夜景背景）。
6. 赛博机能风：前卫赛博朋克机能风束带装束（未来感雨夜街道蓝紫光背景）。
7. 都市摩登风：廓形西装内搭露脐装（极简高级艺术馆背景）。
8. 热辣度假风：比基尼配透明防晒罩衫（奢华海景泳池日落背景）。
9. 静奢老钱风：粗花呢小香风外套套装（古典欧式庄园庭院背景）。
整体要求：高级杂志大片质感、光影迷人且富有潮流张力。`,
    promptEn: `A 3x3 grid collage featuring the SAME female character in 9 different trending fashion styles.
Consistency: Strict face identity lock based on uploaded photo.
Panels:
1. Streetwear: Black oversized hoodie, cargo pants. Graffiti neon back alley. Cool and edgy.
2. Pure & Sexy: White silk slip dress, knit cardigan. Soft lighting by bedroom window. Lazy and alluring.
3. Gym Chic: Tight fashion yoga set. High-end gym with natural lighting. Fit and energetic.
4. Y2K Baddie: Baby tee, low-rise denim skirt. 2000s style room filled with CDs/posters. Colorful and retro.
5. Glamour Night: Black sequin high-slit evening gown. Rooftop bar with city skyline night view. Luxurious.
6. Cyberpunk Techwear: Avant-garde strappy gear. Futuristic rainy street with blue/purple neon lights.
7. Urban Modern: Oversized blazer, crop top. Minimalist high-end art gallery. Chic and sophisticated.
8. Hot Vacation: Bikini with sheer cover-up. Luxury ocean-view pool at sunset. Vibrant and hot.
9. Old Money: Tweed Chanel-style jacket suit. Classic European manor garden. Quiet luxury.
Style: High-end magazine editorial quality, cinematic lighting, trendy, sharp focus, 8k resolution.`,
    prompt: "3x3 grid fashion collage, same person in 9 trending styles...",
  },

    "dr-68": {
    title: "9位中国影视角色世纪同框",
    tags: ["Group Portrait", "Cinematic", "Chinese Drama", "Realistic", "Magazine Cover"],
    promptCn: `创建一个超写实、极致锐利的全彩大画幅图像，在一个宽阔的电影感画面中，展示了9位知名中国影视剧角色穿着他们的成名影视剧造型站在一起。
这张图像必须看起来像是一张完美拍摄的杂志社论封面，拥有无可挑剔的布光、逼真的皮肤纹理，以及头发、毛孔、反射和织物纤维的微观细节。
总体风格与氛围：
照片级真实感，8K分辨率，浅景深。
光影：柔和的自然补光 + 强烈的金色边缘光（轮廓光）。
色彩：高动态范围（HDR），经过校准的电影色彩分级。
肤色：完美准确，展现亚洲人真实的皮肤质感。
细节：清晰的织物细节，高级定制服装的单根线和材质纹理清晰可见。
构图：平衡的构图，微广角镜头（35mm），中心重点构图。
纯净度：极小的背景杂讯，但有足够的环境构建以营造真实感。
环境设定：
场景：日落时分，一个豪华的露天屋顶露台，俯瞰着现代（例如上海或香港风格的）城市天际线。
氛围元素：温暖的金色日落光线包裹着人物剪影；抛光的大理石地面反射着光芒。
宽高比：16:9`,
    promptEn: `A hyper-realistic, ultra-sharp, full-color large-format cinematic shot featuring 9 famous Chinese TV drama characters standing together in their iconic costumes.
Aesthetic: Flawless magazine editorial cover style. Impeccable lighting.
Details: Realistic skin texture, micro-details of hair, pores, reflections, and fabric fibers (visible single threads of haute couture).
Lighting & Tone: Soft natural fill light + Strong Golden Rim Light (Sunset). HDR, calibrated color grading.
Skin: Perfectly accurate Asian skin tones and textures.
Lens: 35mm slight wide-angle, center-weighted composition.
Environment: Sunset on a luxury open-air rooftop terrace, overlooking a modern city skyline (Shanghai/Hong Kong style). Warm golden light wrapping silhouettes. Polished marble floor reflections.
Quality: Photorealistic, 8k resolution, shallow depth of field. --ar 16:9 --v 6.0 --style raw`,
    prompt: "Cinematic group portrait of 9 Chinese TV characters on a luxury rooftop...",
  },

   "dr-69": {
    title: "极端广角动态重混",
    tags: ["Photography", "Wide Angle", "Fisheye", "Dynamic Pose", "Fashion"],
    promptCn: `指令：基于原图进行极端广角与动态姿势重混编辑。
严格约束：保持人物身份（面部/发型）、服装细节、场景环境与原图完全一致。
相机视角：模拟12-18mm超广角或鱼眼镜头。采用极端机位（正仰视/正俯视/贴地/荷兰角）。制造强烈的透视缩短效果（近大远小）。
主体表现：选择1-3个身体部位（手/脚/膝/脸）极度贴近镜头，展示清晰纹理细节。姿势需复杂、酷炫且充满张力（如伸展、蹲伏、扭转）。
画质风格：超写实时尚大片感，高对比度，电影级光影。拒绝插画风格。`,
  },

    "dr-70": {
    title: "一周七日穿搭挑战",
    tags: ["Fashion", "Lookbook", "7-Day Challenge", "Collage", "Lifestyle"],
    promptCn: `提示词：严格参考图中人物
画面中出现同一个女性的7个形象，对应一周的七天。
明确为同一个人，但允许她们拥有符合主题或者场景的不同的姿态、表情、动作与穿着。
主题 / 场景：
[在此输入特定主题，如：职场通勤 / 海边度假 / 赛博朋克 / 魔法少女 / 居家生活]
请 AI 根据该主题自由设计：
服装搭配
姿态与动作
表情与气质
整体氛围与风格
不需要统一风格，不需要刻意对齐姿势，不需要明确规定情绪或动作。
画面要求：
横向构图（16:9），全身呈现。
多个同一人物并排出现。
整体自然、真实、有变化。
背景中可以加一些符合场景和主题的手账图案。
上方有个符合主题的中文标题。`,
    promptEn: `Prompt: Strictly reference the character in the image.
Content: 7 full-body figures of the SAME female character standing side-by-side horizontally, representing the 7 days of the week.
Consistency: Explicitly the same person, but with different poses, expressions, actions, and outfits matching the theme/scene.
Theme / Scene:
[Insert Theme Here, e.g., Office Commute / Beach Vacation / Cyberpunk / Cozy Home]
AI Design Instructions:
Freely design the following based on the theme:
Outfit coordination
Poses and actions
Expressions and vibes
Overall atmosphere and style
No need for uniform style, no forced alignment of poses, no specific emotion/action requirements. Focus on variety and naturalness.
Visual Requirements:
16:9 horizontal composition, full-body presentation.
Multiple instances of the same character side-by-side.
Natural, realistic, diverse.
Background can include scrapbook-style doodles or stickers matching the theme.
A Chinese title matching the theme at the top center.`,
    prompt: "7-day fashion lookbook, same character, diverse styles based on theme...",
  },

   "dr-71": {
    title: "萌娃Cosplay：角色自适应",
    tags: ["Portrait", "Cosplay", "Kids", "Cinematic", "Creative"],
    promptCn: `核心指令：基于上传照片生成，保持人物面部特征100%不变。
主题：可爱小女孩/小男孩的 [插入角色名称] Cosplay写真。
人物特征：
参考图中的儿童，保留圆润可爱的脸庞和天真表情。
服装造型 (高定重制)：
穿着 [插入角色名称] 的标志性服装，但进行“高定童装化”设计：使用高级面料（丝绒、皮革、蕾丝、金属），增加精致的刺绣或纹理细节，使其看起来像昂贵的电影戏服而非廉价道具。
场景自适应：
背景自动匹配该角色的经典场景（例如：如果是艾莎则为冰雪城堡；如果是哈利波特则为魔法图书馆；如果是钢铁侠则为高科技实验室），但进行梦幻化、柔焦处理。
创意特效：
周围环绕着与角色能力相关的魔法粒子或光效（如冰晶、火焰、星光、科技全息图），增强画面张力。
动作与神态：
做出该角色的招牌动作（如施法、变身、飞行），表情自信、开朗，眼神中有光，充满童趣与信念感。
摄影质感：
电影级布光，主光柔和，辅以色彩鲜艳的轮廓光（颜色匹配角色主题色）。
8K分辨率，超写实摄影，材质质感极致清晰。`,
    promptEn: `Photorealistic cosplay portrait of a little kid as [Insert Character Name], based on the uploaded photo.
Consistency: Strict identity lock on the child's face.
Outfit (Haute Couture): A premium, miniaturized version of [Insert Character Name]'s iconic costume. Use high-quality textures (velvet, leather, lace, metal armor) and intricate details to look like a high-budget movie costume.
Setting (Adaptive): A dreamy, cinematic background relevant to the character's lore (e.g., Ice Castle for Elsa, Magic School for Harry Potter, Sci-fi Lab for Iron Man), with soft bokeh.
Effects: Surrounded by floating particles or magical aura relevant to the character's power (snowflakes, sparks, magic dust, holograms).
Pose: Performing the character's signature move with a cute, confident expression.
Lighting: Cinematic studio lighting. Key light is soft, with rim lighting matching the character's color theme.
Quality: 8k Ultra HD, highly detailed textures, movie poster aesthetic. --ar 3:4`,
    prompt: "Cute kid cosplay portrait, adaptive character and scene...",
  },

 "dr-72": {
    title: "圣诞妆容教程界面",
    tags: ["UI Design", "Beauty", "Christmas", "Tutorial", "Social Media"],
    promptCn: `竖屏社交媒体故事设计 (9:16)，美妆博主圣诞妆容教程界面。背景为柔和的高级感粉色渐变，营造甜美梦幻氛围。
核心视觉：
人物一致性（最高权重）： 画面中央展示一位亚洲女性美妆博主，面部特征、五官及发型必须严格、完美地复刻上传的参考图片人物。
妆容与配饰： 极度精致的“圣诞麋鹿甜酷妆”。眼妆为红棕色晕染，面部有白色小鹿斑点，头戴毛绒驯鹿角发箍。
红笔标记与步骤对应（逻辑核心）： 在右侧完妆人物的面部，使用醒目的红色墨水笔引出5条指示线，分别指向妆容的5个关键部位，并按顺序标注中文：1. 眼影；2. 金色闪片；3. 睫毛；4. 鹿系腮红；5. 饱满红唇。
排版布局：
顶部：中文标题“圣诞妆容教程”，搭配口红图标。副标题“麋鹿少女妆 甜酷风”。
中部（对比区）： 左右分屏设计。左侧为该人物“素颜”，右侧为“完妆”。中间用虚线和剪刀图标连接。
下部（强关联步骤预览区）： 设置横向滑动的圆角卡片栏，展示5个与面部标记严格对应的步骤图：
卡片1：眼部涂抹眼影的特写；
卡片2：用手指点缀金色闪片的特写；
卡片3：夹睫毛或刷睫毛的特写；
卡片4：面颊扫腮红和画鹿斑的特写；
卡片5：涂抹红色口红的嘴唇特写。 每张卡片左上角需清晰标注数字1-5，与面部红笔标记的序号呼应。
底部（互动区）： “上滑看完整教程”箭头，“点击查看同款产品”按钮，点赞与收藏图标。
风格： 高清商业摄影质感结合UI设计，光影通透，色彩鲜艳，肤质细腻真实，时尚杂志排版风格。`,
    promptEn: `Vertical social media story UI design (9:16), beauty influencer Christmas makeup tutorial interface. Soft premium pink gradient background.
Subject: Asian female beauty influencer (Strict identity lock to reference).
Look: "Christmas Reindeer Sweet-Cool Makeup". Red-brown eye shadow, white fawn spots, plush reindeer antler headband.
Annotations: Red ink leader lines pointing to 5 key areas on the finished face (1. Eyeshadow, 2. Gold Glitter, 3. Eyelashes, 4. Blush, 5. Red Lips) with Chinese labels.
Layout:
- Top: Chinese Title "Christmas Makeup Tutorial" with lipstick icon. Subtitle "Reindeer Girl Style".
- Middle: Split screen comparison. Left: Bare face. Right: Finished look. Connected by dotted line and scissors icon.
- Lower Section: Horizontal scrollable cards showing 5 close-up steps corresponding to the labels (applying eyeshadow, glitter, mascara, blush, lipstick). Numbered 1-5.
- Bottom: Interactive UI icons (Swipe up, View Products, Like, Save).
Style: High-end commercial photography blended with app UI, vivid colors, realistic skin texture, fashion editorial vibe. 8k resolution.`,
    prompt: "Christmas makeup tutorial UI with before/after and step-by-step cards...",
  },

  "dr-73": {
    title: "圣诞特辑：蜜桃少女拼图",
    tags: ["Christmas", "Beauty", "Collage", "4-Panel", "Reindeer Makeup", "Portrait"],
    promptCn: `(杰作, 最高画质, 超细节, 8k分辨率). 一张照片般逼真的4格分屏拼图，所有画面为同一女性角色。
[关键：保持精确的面部特征，保留原始脸部结构，整个拼图中角色完全一致]. 角色皮肤白皙，质感自然，眼神明亮。
左上图：特写镜头，角色化着精致的“麋鹿妆”（鼻头画红，脸颊有白色斑点），对着镜头Wink。
右上图：角色双手握拳放在头顶模仿鹿角，吐舌头卖萌，穿着棕色毛绒连帽衫。
左下图：角色侧身看着镜头，展示脸颊上的圣诞贴纸（雪花和铃铛图案），眼神妩媚。
右下图：角色正对着镜头整理刘海，手里拿着一个小圣诞树，脸上是圣诞树的贴纸，表情自然日常。
环境：粉色或蜜桃色的纯色背景。
灯光：环形美妆灯，瞳孔中有漂亮的光圈，皮肤无瑕疵。
风格：美妆博主风格，极度强调妆容细节，清晰对焦，少女感。`,
    promptEn: `(Masterpiece, Best Quality, Ultra-Detailed, 8k Resolution). A photorealistic 4-panel split-screen collage, all featuring the SAME female character.
[Critical: Maintain precise facial features, preserve original facial structure, character consistency throughout the collage]. Fair skin, natural texture, bright eyes.
Top Left: Close-up shot, wearing exquisite "Reindeer Makeup" (red nose tip, white spots on cheeks), winking at the camera.
Top Right: Hands balled up on top of head mimicking antlers, sticking tongue out playfully, wearing a brown fuzzy hoodie.
Bottom Left: Side profile looking at camera, showing off Christmas stickers (snowflake and bell patterns) on cheek, charming gaze.
Bottom Right: Facing camera adjusting bangs, holding a small Christmas tree, Christmas tree sticker on face, natural daily expression.
Environment: Solid pink or peach background.
Lighting: Ring light, beautiful catchlights in pupils, flawless skin.
Style: Beauty influencer style, extreme emphasis on makeup details, sharp focus, girlish vibe.`,
    prompt: "4-panel Christmas beauty collage, reindeer makeup, peach background...",
  },

    "dr-74": {
    title: "圣诞特辑-费尔岛毛衣的圣诞六帧小美好",
    tags: ["Christmas", "Portrait", "Grid", "6-Panel", "Studio", "Photography"],
    promptCn: `（六格网格构图，多种道具，影棚人像）。一组六张照片，展现特定人物与不同圣诞物品互动的场景。
关键一致性：保持面部特征的精准还原，保留人物原有的骨骼结构。
服装：一件舒适的费尔岛图案毛衣。
画面内容：
1. 摇晃雪球。
2. 亲吻木制胡桃夹子士兵。
3. 阅读立体圣诞贺卡。
4. 拥抱毛绒驯鹿玩具。
5. 用圣诞老人造型的热可可杯啜饮。
6. 躲在松枝后面。
背景：柔和的米色或奶油色纸质背景。
灯光：45度角柔光箱照明，营造立体感的同时保持人物的自然美感。`,
    promptEn: `(Six-grid composition, multiple props, studio portrait). A set of six photos showing a specific person interacting with different Christmas items.
Consistency: [Critical: Precise restoration of facial features, retaining original bone structure].
Outfit: A cozy Fair Isle patterned sweater.
Panels:
1. Shaking a snow globe.
2. Kissing a wooden nutcracker soldier.
3. Reading a pop-up Christmas card.
4. Hugging a plush reindeer toy.
5. Sipping from a Santa-shaped hot cocoa mug.
6. Hiding/Peeking behind pine branches.
Background: Soft beige or cream seamless paper background.
Lighting: 45-degree softbox lighting, creating dimensionality while maintaining natural beauty.`,
  },

  "dr-75": {
    title: "儿童英语词汇思维导图",
    tags: ["Education", "Infographic", "Vocabulary", "Illustration", "Mind Map", "Watercolor"],
    promptCn: `【指令】生成一张适合社交媒体分享的“儿童英语词汇图解卡片 / 思维导图海报”。
主题：[插入主题，例如：风 / 水 / 森林 / 交通工具]
画面布局：
画幅：竖版 3:4 (高分辨率印刷质感)。
背景：干净白底，留白舒适。
中心核心：绘制一个柔和的主题插画（如[插入主题]的具象化图标），下方标注主词大字（英文+音标+中文）。
发散结构：从中心向四周发散多条柔和的彩色弧形连线，连接到 4-6 个逻辑分类模块。
内容逻辑 (AI自动推演)：
请将与 [插入主题] 相关的英语词汇按逻辑分类（例如：种类、动作、现象、工具、形容词等）。
每个模块包含 4-6 个单词，每个单词排版如下：
1.英文单词 (黑色加粗圆润无衬线体)
2.IPA音标 (细体斜体)
3.中文释义 (小字号)
4.配套小插画 (每个词对应一个直观的小图标)
艺术风格：
童书科普手绘水彩风 + 彩铅线稿质感。
配色柔和低饱和（莫兰迪色系），线条清晰。
整体观感：信息密度高但不拥挤，知识点清晰，适合儿童阅读。`,
    promptEn: `Create an educational English vocabulary mind map poster suitable for social media sharing.
Theme: [Insert Theme, e.g., Wind / Water / Forest / Vehicles].
Layout:
- Ratio: Vertical 3:4 (High-res print quality).
- Background: Clean white, generous whitespace.
- Center: A soft, detailed illustration representing the theme. Main Word (Bold English) + IPA + Chinese meaning underneath.
- Structure: Curved colored lines radiating from the center to 4-6 logical category clusters.
Content Logic (Auto-generated):
Categorize vocabulary related to [Theme] into logical groups (e.g., Types, Actions, Phenomena, Tools, Adjectives).
Each category module includes 4-6 words, formatted as:
1. English Word (Bold rounded sans-serif).
2. IPA Phonetic Symbol (Italic).
3. Chinese Definition (Small text).
4. Tiny Illustration (A visual representation next to each word).
Art Style:
Children's science book aesthetic. Watercolor wash + Colored pencil sketch lines.
Soft low-saturation color palette (Morandi tones).
Visuals: High information density but organized, clean, and easy for children to read.`,
    prompt: "Educational English vocabulary mind map poster, watercolor style...",
  },

    "dr-76": {
    title: "圣诞特辑：冷艳甜酷时尚大片",
    tags: ["Christmas", "Fashion", "Portrait", "Full Body", "High-End"],
    promptCn: `主题：冷艳圣诞甜酷皆在方寸间（全身构图）。
核心要求：保持精确的面部特征，保留原始脸部结构，角色完全一致。
妆容设计：
高级时尚感金属质感妆面。眼影香槟金渐变至玫瑰金，精致金色眼线，下眼睑点缀碎钻如冰晶。芭比娃娃般分明睫毛，野生眉。镜面光泽樱桃红唇，高光立体腮红。
发型与头饰：
时髦低盘发，点缀金色装饰球和圣诞铃铛，侧边垂落卷发。头顶斜戴设计感金属质感圣诞帽，镶嵌北极星。
服装造型 (全身)：
改良版现代圣诞服，不对称设计，露肩。红色天鹅绒混搭金色亮片，腰间夸张金色蝴蝶结，不规则下摆露出修长双腿。搭配毛绒围巾和镶钻针织手套。脚踩一双设计感十足的**红色绑带高跟鞋**或**金色长靴**，质感高级。
姿态与神情：
全身时尚大片姿势。站姿，一腿前伸展示鞋履细节，一手叉腰，另一手优雅托着奢华礼物盒。表情高冷又不失节日欢愉。
场景与灯光：
纯白摄影棚圣诞场景。巨大白色圣诞树（金饰）作为背景。地面铺满仿真雪花，摆放着精致的雪人雕塑、圣诞麋鹿装置。周围散落着高级糖果礼盒。
多灯位布光（主光、轮廓光、发光分离），从头到脚照亮细节，营造杂志封面的高级质感。`,
    promptEn: `High-end fashion editorial Christmas portrait, Full Body Shot.
Consistency: Strict identity lock on facial features based on reference.
Makeup: Metallic fashion makeup. Champagne to rose gold gradient eyeshadow, gold eyeliner, diamond under-eye accents. Defined lashes, wild brows. Glossy cherry red lips, highlighted cheekbones.
Hair: Chic low bun with gold baubles and bells, loose curls. Metallic stylized Christmas hat with North Star accent.
Outfit (Full Body): Asymmetrical modern Christmas dress. One shoulder off, red velvet mixed with gold sequins, exaggerated gold waist bow, irregular hem showing long legs. Plush scarf, diamond-encrusted knit gloves. Wearing stylish **red strappy high heels** or **gold boots**.
Pose: Full body standing pose. One leg extended forward, hand on hip, holding a luxury gift box. Elegant and powerful stance.
Setting: Pure white studio. Giant white Christmas tree with gold decor. Faux snow floor, snowman/elk art installations. Modern fireplace with blue flame. Scattered luxury sweets. Metal holly sculptures. Ice crystal chandelier.
Lighting: Multi-light setup, rim lighting, high contrast, glossy magazine quality. 8k resolution. --ar 9:16`,
    prompt: "High-fashion Christmas portrait, metallic makeup, red velvet dress, full body...",
  },

    "dr-77": {
    title: "第一人称仰拍群像：围观视角",
    tags: ["POV", "Low Angle", "Group Portrait", "Wide Angle", "Cinematic"],
    promptCn: `这是一张从地面仰拍的超广角第一人称视角照片（POV）。
核心主体：
来自 [在此处插入电影/剧集名称或角色名称列表] 的各种角色紧密地围成一个完整的圆圈。
构图与视角：
他们俯视着镜头，脸离得很近，目光专注地盯着镜头。
他们的头和肩膀构成了一个密密麻麻的圆环，几乎占据了整个画面，只有正上方中心的一小片明亮的蓝天和柔和的云朵隐约可见。
画面边缘模糊的草叶、泥土或碎石，突显了地面的层次感（贴地视角）。
动作与神态：
他们对下面的“发现”既充满好奇，又感到好笑，脸上带着玩世不恭的笑容。
一些角色正指着镜头，另一些则俯身靠近，想要看得更清楚。
光影与质感：
自然光从他们的后方和上方照射下来（逆光/顶光），凸显了皮肤、头发、皮毛、鳞片和衣物的纹理。
8K分辨率，超写实电影质感。`,
    promptEn: `Ultra-wide angle first-person view (POV) shot from the ground looking up.
Subjects: Characters from [Insert Movie/Series Name or Character List] form a tight circle, looking down at the camera lens.
Composition: Faces are very close, focused gazes. Their heads and shoulders form a dense ring occupying most of the frame, with only a small patch of bright blue sky and soft clouds visible in the dead center.
Foreground Details: Blurred grass blades, dirt, or gravel at the edges, emphasizing the ground-level perspective.
Expressions & Actions: Curious and amused expressions, playful smiles. Some characters pointing at the lens, others leaning in closer to get a better look.
Lighting: Natural light coming from behind and above them, highlighting textures of skin, hair, fur, scales, and clothing.
Quality: 8k resolution, photorealistic, cinematic lighting, sharp details. --ar 16:9`,
    prompt: "Low angle POV shot of characters looking down at camera in a circle...",
  },

   "dr-78": {
    title: "复古胶片四宫格拼贴",
    tags: ["Portrait", "Polaroid", "Film Style", "Collage", "Lifestyle"],
    promptCn: `整体要求：
同一张画面包含4张独立的宝丽来风格肖像照，呈四宫格排列（2x2）。
画面统一性：白色宝丽来相框，干净拼贴效果。
核心要求：必须使用上传照片的真实面部特征与服饰特征，保持准确还原。
风格：真实复古胶片感（褪色色调、柔和色彩、乳白质感、胶片颗粒、灰尘、划痕、梦幻晨光）。
人物气质：自然率真，轻松生活化。
分格详情：
1. 左上（沙发场景，温柔复古）：室内沙发上。身体微微前倾，双手抱着抱枕，羞涩笑容。氛围静谧温暖，柔和晨光。
2. 右上（黑墙背景，电影氛围）：靠在黑色墙边。单手拨弄头发，另一只手插袋，眼神轻松。复古电影感，略带神秘。
3. 左下（沙发延续，活泼嬉戏）：盘腿坐在沙发上。双手半遮脸，忍不住笑出声。轻松活泼，生活化，明显的胶片颗粒与划痕。
4. 右下（卧室床上，慵懒随性）：侧卧在床上。用手臂遮住脸庞，带着调皮的笑意。慵懒清晨，自然随性。`,
    promptEn: `A 2x2 grid collage of 4 authentic Polaroid-style portraits featuring the SAME person.
Consistency: Strict identity lock on facial features and outfit based on the uploaded photo.
Style: Vintage film aesthetic, faded tones, milky texture, film grain, dust, scratches, dreamy morning light. Candid and natural vibe.
Layout: White Polaroid frames, clean alignment.
Panel 1 (Top Left): Indoor sofa. Leaning forward hugging a pillow, shy smile. Soft morning light, quiet warmth.
Panel 2 (Top Right): Black wall background. Leaning against wall, hand running through hair, hand in pocket, relaxed gaze. Cinematic retro vibe.
Panel 3 (Bottom Left): Sofa scene continued. Sitting cross-legged, hands half-covering face, laughing uncontrollably. Playful lifestyle feel.
Panel 4 (Bottom Right): Bedroom bed. Lying sideways, arm covering face, mischievous smile. Lazy morning, natural and casual.`,
    prompt: "4-panel vintage Polaroid portrait collage, film grain style...",
  },

  "dr-79": {
    title: "3D潮玩日历卡片：角色自适应",
    tags: ["3D Render", "Art Toy", "Calendar", "UI Design", "Mockup"],
    promptCn: `一种横向日历卡片设计，采用分屏构图 (16:9)。
左侧 (视觉主体)：
[插入角色名称，如：LABUBU / Molly / 原创角色] 的详细3D渲染图。
质感：3D艺术玩具 (Art Toy) 质感，材质细腻（如哑光及光泽塑料、植绒、搪胶）。
场景与服装：[插入场景描述，如：积雪覆盖的松树林 / 温暖的咖啡馆 / 赛博朋克街道]。角色穿着与场景相符的厚实/时尚服装（如：羽绒服/毛衣/机能风外套）。
动作：角色[插入动作，如：坐在木头上喝热可可 / 抱着宠物 / 滑板]，露出[插入表情，如：顽皮的笑容]。
光影：柔和的电影式灯光，营造舒适氛围。
右侧 (功能区域)：
一个简洁、极简的白色背景区域。
顶部：大号、醒目的主题色文字“[插入年份/日期，如：2026年1月1日]”。
下方：整洁、现代的日历网格布局，字体清晰利落。
整体风格：
UI设计美学，高质量渲染，卡片模型展示效果，8K高清输出。`,
    promptEn: `Horizontal calendar card design, split-screen composition.
Left Side (Visual): Detailed 3D render of [Insert Character Name]. Art Toy texture (Pop Mart style, vinyl/flock). Placed in [Insert Scene, e.g., Snowy Pine Forest], wearing [Insert Outfit]. Action: [Insert Action, e.g., sitting on log holding hot cocoa], with a [Insert Expression] smile. Lighting: Soft cinematic, cozy atmosphere.
Right Side (Functional): Clean, minimalist white area. Top: Large bold text "[Insert Date]" in matching accent color. Bottom: Neat, modern calendar grid layout.
Style: UI design aesthetic, high-quality 3D rendering, card mockup look. 8k resolution. --ar 16:9`,
    prompt: "3D art toy calendar card design, split screen, adaptive character...",
  },

    "dr-80": {
    title: "诗书画卷：通用诗词生成",
    tags: ["Chinese Painting", "Poetry", "Calligraphy", "Ink Wash", "Masterpiece"],
    promptCn: `【指令】请根据用户输入的古诗词名称，创作一幅“诗书画印”完美融合的中国画。
1. 智能检索：
联网搜索诗词《[插入诗词名]》的全文内容、作者及创作背景。
2. 画面构思 (画)：
根据诗词的核心意象（如“大漠孤烟”、“小桥流水”、“明月松间”）构建水墨画场景。
讲究“气韵生动”，构图留白（Liu Bai），虚实相生。
3. 书法题跋 (书)：
在画面的自然留白处（通常为天空或水面），以竖排书法（行书或楷书）题写诗词全文或千古名句。
字体需飘逸灵动，与画面气息相通，非简单的电脑字体叠加。
4. 印章落款 (印)：
在书法末尾或画面对角处，盖上红色的篆刻闲章或名章，起到画龙点睛的作用。
5. 材质与风格：
宣纸或绢本的古朴纹理，水墨晕染效果，展现东方美学。`,
    promptEn: `A masterpiece traditional Chinese ink wash painting visualizing the poem "[Insert Poem Title]".
Visual Imagery: Based on the poem's content (e.g., misty mountains, moonlight on river, solitary boat), create a scene with "Spirit Resonance" (Qi Yun).
Composition: Asymmetrical balance with intentional negative space (Liu Bai).
Calligraphy: Elegant vertical columns of traditional Chinese calligraphy (the poem text) naturally integrated into the composition's void spaces, interacting with the painted elements.
Details: Vermilion red seal stamps (chops) for signature. Visible rice paper or silk texture.
Style: Literati painting, expressive brushstrokes, varying ink tones (thick/thin, wet/dry). 8k resolution, artstation style. --ar 3:4 --style raw`,
    prompt: "Traditional Chinese ink wash painting with calligraphy based on a poem...",
  },

    "dr-81": {
    title: "清新甜美六格漫画",
    tags: ["Comic", "6-Panel", "Character", "Story", "Fresh"],
    promptCn: `核心指令：以参考图人物为主角，创作一张9:16比例的6格漫画。
人物一致性：严格参考图中人物面部特征。长直发，眉眼温柔，双眼明亮有神，鼻梁挺直，嘴唇微微上扬，面带微笑，整体给人清新甜美的感觉。
画面布局：
6个分镜格，排列工整。
每格展示人物不同的自然表情和生动动作。
包含中文气泡对话文案，内容与画面情境匹配，字体清晰可读，排版合理。
背景与风格：
背景简洁大方，或根据生活场景变化。
整体画风统一，色彩清新明亮，高清画质。`,
    promptEn: `A high-definition 6-panel comic strip (9:16 aspect ratio) featuring the same female protagonist throughout.
Character Consistency: Strictly adhere to the reference face. Long straight hair, gentle eyes, bright gaze, straight nose, slight smile, radiating a fresh and sweet vibe.
Layout: Six distinct panels arranged in a grid.
Content: Each panel captures the character in natural, lively poses and expressions.
Text: Includes speech bubbles with clear, legible Chinese text matching the context of each scene.
Style: Consistent illustrative style, simple or contextual backgrounds, clean composition, high quality. --ar 9:16`,
    prompt: "6-panel comic strip of a fresh and sweet girl with Chinese speech bubbles...",
  },

    "dr-82": {
    title: "J人保姆级旅游攻略",
    tags: ["Travel Guide", "Itinerary", "Infographic", "Planner", "Lifestyle"],
    promptCn: `【指令】生成一张图文并茂的“J人保姆级”旅游攻略长图。
目的地：[插入城市/地区，如：山西]
时间安排：[插入时长，如：3天2夜 / 5天4晚]
核心逻辑：合理规划，不绕路，高效游玩。
画面内容板块：
1. 🗺️ 路线概览图：
用时间轴或手绘地图线条串联起 [插入时长] 的行程，清晰标注每日动线。
2. 📅 每日详细安排 (Day by Day)：
Day 1: [自动规划合理路线，如：地标A -> 地标B -> 特色街区]
Day 2: [自动规划路线]
... (根据时长自动扩展)
3. 📍 热门景点卡片：
列出该目的地的TOP景点（如：[自动检索该地著名景点]），每个景点配一张精美小图和一句亮点介绍（如：“世界最大黄色瀑布”、“千年古寺”）。
4. 🏠 住宿指南：
推荐2-3个便利商圈或特色区域（如：“市中心购物便利”、“古城内体验风情”），并标注优缺点。
5. 🥘 美食地图：
列出必吃特色菜及推荐餐厅，配上诱人的食物插图。
6. 💡 贴心Tips：
天气穿衣建议、交通避雷、必备物品（如“带雨衣”、“防晒”）。
视觉风格：
J人狂喜的清晰信息图表或精美手账风格。
配色清新活泼（提取目的地代表色），图标可爱实用，字体清晰易读，布局紧凑但有呼吸感。`,
    promptEn: `A comprehensive "J-type personality" (highly organized) travel itinerary infographic for [Insert Destination].
Duration: [Insert Duration, e.g., 3 Days 2 Nights].
Theme: "No Detours", Efficient, Ultimate Guide.
Layout & Content:
1. Route Map: A visual timeline or stylized map connecting the daily route clearly.
2. Daily Schedule: Detailed breakdown (Day 1, Day 2...) with optimized routing.
3. Top Attractions: Cards featuring must-visit spots (Auto-retrieve famous spots) with mini-photos and key highlights.
4. Accommodation Guide: Best areas to stay (e.g., City Center vs. Old Town) with pros/cons.
5. Food Guide: Must-eat local delicacies and restaurant recommendations with illustrations.
6. Tips: Weather, clothing, transport, and avoidance advice.
Visual Style:
Clean infographic or aesthetic sketchbook style.
Fresh color palette matching the destination vibe. Cute icons, clear typography, organized layout. High information density but visually pleasing.`,
    prompt: "Comprehensive travel itinerary infographic, organized planner style...",
  },

  "dr-83": {
    title: "奢华浴室化妆镜自拍",
    tags: ["Portrait", "Luxury", "Mirror Selfie", "Makeup", "Photography"],
    promptCn: `【指令】生成一张超写实电影级人像摄影作品 (3:4 竖版)。
画面主题：魅力、美感、妆前准备。
核心构图：
中景侧面构图。一位美丽的亚洲年轻女子位于画面右侧，正看向左侧一面带有明亮冷白色LED光环的大型圆形镜子。
镜中完整清晰地映出她的倒影，焦点同时聚焦在女子及其倒影上。
主体细节：
人物：亚洲女性，妆容精致无瑕，拥有黑色长卷发。
穿搭：身着带有金色太阳纹装饰的白色无肩带礼服或上衣，佩戴金色项链与手链。
动作：手中拿着红色口红管，正对镜涂抹，神态专注优雅。
环境与氛围：
场景：奢华现代风格的浴室。深色光面瓷砖墙，黑色台面，线条流畅的白色椭圆形台上盆搭配现代镀铬水龙头。
道具：插有一支白色马蹄莲的白色陶瓷花瓶，以及黑色托盘上的小型化妆品瓶。
光影：主光源来自LED镜环发出的柔和冷光，形成光晕效果并突出主体，辅以室内环境光。氛围精致、宁静而私密。
色彩：鲜明白色、深邃黑色、鲜艳红色（口红）与金属金色。
画质：照片级真实，8K分辨率，细节锐利，倒影清晰。`,
    promptEn: `Photorealistic cinematic portrait photography, 3:4 aspect ratio.
Subject: Beautiful young Asian woman with long black wavy hair, applying red lipstick.
Composition: Medium shot, side profile. She is positioned on the right, looking into a large round mirror on the left with a bright cool white LED ring light. The mirror shows a perfect, sharp reflection of her face.
Outfit: White strapless dress or top with gold sun pattern decoration, gold necklace and bracelet.
Setting: Luxury modern bathroom. Dark glossy tile walls, black countertop, white oval vessel sink, chrome faucet. Props: White ceramic vase with a single calla lily, small cosmetic bottles on a black tray.
Lighting: Soft cool light from the LED mirror ring creating a halo effect, highlighting the subject. Intimate and quiet atmosphere.
Colors: High contrast white, deep black, vivid red lipstick, metallic gold.
Tech Specs: 8k resolution, ultra-detailed, sharp focus on reflection, professional color grading. --ar 3:4`,
    prompt: "Luxury bathroom mirror selfie, applying lipstick, high-end photography...",
  },

      "dr-84": {
    title: "3D皮克斯拆解艺术",
    tags: ["3D Render", "Pixar Style", "Knolling", "Deconstruction", "Character Design"],
    promptCn: `核心指令 (Core Instruction)：
任务：基于用户提供的参考图片，创作一张超高品质、电影级的3D皮克斯/迪士尼(Pixar/Disney)风格角色拆解艺术海报。将照片中的人物转换为风格化写实的3D动画角色，并将其个人物品以严谨的"Knolling"（整齐排列）艺术风格进行布局展示。
画面比例：16:9 横版 (可根据需求调整为 3:2, 4:5, 1:1)。
艺术风格核心：皮克斯"风格化写实主义" (Stylized Realism) — 融合夸张的卡通比例与照片级真实材质光影。
质量标杆：对标《寻梦环游记(Coco)》、《青春变形记(Turning Red)》、《夏日友晴天(Luca)》的官方角色宣传海报。
物品布局 (Item Layout) - Knolling放射式构图：
总物品数：30-36件，围绕角色呈90度直角或放射状有序排列。
分类1：时尚穿搭 (Fashion Atelier) - 香槟金标签。主服装拆解：衣袖、衣领、布料裁片、内衬等全部分离悬浮。鞋履拆解：鞋底、鞋面、鞋带、鞋跟等分离。随身配饰：腰带、包袋、帽子、围巾等。示例：一件风衣可拆解为翻领、肩章、腰带、袖口束带、主衣身等部分。
分类2：美妆个护 (Beauty Collection) - 玫瑰金标签。彩妆：口红（带膏体切面和色号标签）、眼影盘（每格颜色清晰）、粉饼、香水瓶（液体折射清晰可见）。护肤：精华液瓶、面霜罐、美容仪器。示例：一瓶香水需展现玻璃瓶身的通透感、液体内部的光线折射以及瓶盖的金属质感。
分类3：数码生活 (Modern Essentials) - 钢蓝色标签。电子设备：带手机壳的智能手机（屏幕需有内容）、无线耳机、智能手表、笔记本/平板电脑、相机。材质要求：金属、玻璃（带折射）、塑料等材质需有正确的粗糙度和反射效果。示例：一部相机可拆解为镜头、机身、闪光灯、存储卡、肩带等。
分类4：个人爱好 (Luxury & Hobbies) - 24K金标签。奢华配饰：珠宝首饰（项链、耳环、戒指等，宝石需有色散效果）、品牌包袋（展示内部分隔和五金件）。兴趣爱好：画笔、调色盘、书籍、乐器、运动装备、咖啡用具等。示例：一个手办可拆解为头部、身体、四肢、武器、地台等组件。
每件物品要求：渲染质量：与角色同等级别的3D渲染精度。编号标签：带有01-36的圆形编号徽章。材质与阴影：应用PBR材质，投射逼真的软阴影。
爆炸视图技术 (Exploded View Technique)：
连接线：使用优雅的虚线/实线将悬浮的服装部件连接到角色身上。
引导箭头：使用装饰性箭头将物品指向其文字标签。
技术注释：材质样本：展示织物、皮革等材质的微距特写方块。材质标签：如"100%真丝"、"意大利小牛皮"。测量标尺：带有厘米(cm)/英寸(in)标记的标尺。
排版设计：主标题：角色拆解艺术 · THE ART OF DECONSTRUCTION。字体：中文用典雅的衬线体（如方正宋刻本秀楷），英文用Playfair Display，带金箔效果。副标题：角色本质·艺术拆解 / Character Essence Unveiled，中英文混排，字体优雅。分类标题：带图标的圆角矩形标签，" 美妆个护" (玫瑰金)，" 数码生活" (钢蓝色)。
设计元素 (Design Elements)：
几何框架：使用装饰艺术(Art Deco)风格的六边形/圆形细线框（0.5-1pt粗细）来组织物品群组。
测量标尺：沿画面左右边缘放置，营造技术美学感。
十字准星：在画面四角和关键焦点处添加。
材质样本：在底部展示一排面料/皮革/金属的微距特写方块。
信息卡片：带优雅边框的卡片，用于展示物品的详细信息。
雷达图：用装饰框包裹的角色属性雷达图，如：优雅★★★★★, 风格★★★★★, 智慧★★★★★。
连接线条：使用金色/银色的优雅虚线和装饰性箭头。
背景与氛围 (Background & Atmosphere)：
背景渐变：从白色到奶油色/香槟色的暖色调渐变，或从浅灰到白色的冷色调渐变。
图案叠加：叠加一层低透明度（5-10%）的装饰艺术几何网格或蓝图线条。
暗角效果 (Vignette)：轻柔的边缘变暗效果，将焦点引向中心。
氛围粒子：柔和的金色散景(Bokeh)光斑和微妙的胶片颗粒(Film Grain)，营造电影感。
色彩方案 (Color Palette)：
女性/时尚主题：香槟金(#D4AF37), 玫瑰金, 奶油色, 樱花粉。
男性/科技主题：钢蓝色(#4A90E2#4A4A4A#C0C0C0), 电光蓝(#00D9FF)。
正式/奢华主题：纯黑(#000000), 24K金(#FFD700), 深红色(#8B0000), 象牙白(#FFFFF0)。
情侣主题：男性一侧使用冷色调，女性一侧使用暖色调，形成对比。
技术规格 (Technical Specifications)：
渲染参数：引擎：路径追踪(Path Tracing)，等同于Cycles/Arnold/RenderMan级别。采样数：最低4096 SPP (Samples Per Pixel)，确保画面纯净无噪点。光线弹射：12次，以获得准确的全局光照。焦散(Caustics)：开启，用于钻石和玻璃的真实光线折射效果。模型面数：角色多边形数200万以上，确保曲面平滑。毛发：每个角色超过10万根发丝，并经过物理模拟。
PBR材质流程：皮肤：三层SSS，双层高光。毛发：各向异性着色器，主副双高光。织物：微观编织法线贴图，准确的粗糙度变化。金属：金属度(Metalness) 1.0，粗糙度(Roughness) 0.1-0.4。玻璃：折射率(IOR) 1.5，钻石IOR 2.42并带色散(Dispersion)。皮革：粗糙度0.6-0.7，带颗粒感的凹凸贴图。
分辨率与输出：分辨率：4K (3840×2160) 横版。宽高比：16:9。色深：32-bit浮点，为后期处理提供最大空间。抗锯齿：16x MSAA，边缘锐利清晰。
后期处理：色彩分级 (Color Grading)：使用电影感LUT，提高暗部，避免纯黑（最低RGB 15,15,15）。温和的S型曲线增强对比度。根据主题调整色温（暖色+200K，冷色-200K）。整体饱和度-5%，重点色彩（如金色）饱和度+10%。特效：辉光(Bloom)：为高光区域添加柔和光晕。胶片颗粒(Film Grain)：模拟柯达Portra 400胶片的有机质感。色差(Chromatic Aberration)：在边缘添加极细微的色散。暗角(Vignette)：中等强度的暗角。锐化(Sharpening)：输出时进行适度锐化。
特殊指令 (Special Instructions)：
单人角色：总计约30件物品，聚焦于个人生活方式。
情侣角色：总计约36件物品（每人18件），用爱心符号连接，并使用性别区分的色调。
孕妇角色：包含孕期用品（如托腹油、维生素、B超照片），在腹部附近添加婴儿图标。
核心要点：必须根据参考照片匹配角色的年龄、职业和风格。
质量基准 (Quality Benchmark)：最终成品必须在视觉上无法与皮克斯/迪士尼官方的角色营销海报区分开来，达到博物馆级的照片级3D渲染水准。`,
    promptEn: `Core Instruction:
Based on the reference image, create an ultra-high-quality, cinematic 3D Pixar/Disney style character deconstruction art poster. Transform the subject into a stylized realistic 3D animated character, displayed with a rigorous Knolling (organized arrangement) layout of their belongings.
Aspect Ratio: 16:9. Art Style: Pixar "Stylized Realism" - blending exaggerated cartoon proportions with photorealistic PBR materials and lighting. Benchmark: Coco, Turning Red, Luca official posters.
Item Layout (Knolling Radial): 30-36 items total.
1. Fashion Atelier (Champagne Gold): Floating deconstructed garment parts (sleeves, collars, lining), exploded shoes (soles, laces).
2. Beauty Collection (Rose Gold): Lipsticks with cut sections, eyeshadows, perfume bottles with clear liquid refraction.
3. Modern Essentials (Steel Blue): Smartphones with screen content, headphones, watches, disassembled cameras (lens/body).
4. Luxury & Hobbies (24K Gold): Jewelry with dispersion, branded bags with hardware, hobby items (brushes, instruments).
Items must have high render quality, numbered badges (01-36), and PBR materials with soft shadows.
Exploded View Technique: Elegant dashed lines connecting parts to the character. Decorative arrows pointing to labels. Material sample swatches (macro fabric/leather) and measurement rulers.
Typography: "THE ART OF DECONSTRUCTION" in elegant serif with gold foil. Subtitle "Character Essence Unveiled".
Design Elements: Art Deco geometric frames. Crosshairs. Info cards. Character attribute radar chart.
Background: Warm champagne or cool white gradient. Low opacity blueprint overlay. Soft vignette. Golden bokeh and film grain.
Technical Specs: Path Tracing engine, 4096 SPP, 12 light bounces, Caustics enabled. High poly mesh (>2M), 100k+ hair strands.
PBR Materials: SSS skin, anisotropic hair, micro-woven fabric normals, correct IOR for glass/diamond.
Post-Processing: Cinematic LUT, S-curve contrast, Bloom, Kodak Portra 400 grain, Chromatic Aberration, Sharpening.`,
    prompt: "3D Pixar style character deconstruction art poster, knolling layout...",
  },

    "dr-85": {
    title: "3D写实人物拆解艺术",
    tags: ["3D Render", "Photorealistic", "Knolling", "Deconstruction", "Portrait"],
    promptCn: `核心指令 (Core Instruction)：
任务：基于参考图片，创作一张超高品质、电影级的3D写实角色拆解艺术海报。
风格核心：照片级人文主义 (Photorealistic Humanism)。完全摒弃卡通风格，强调真实解剖结构、皮肤纹理（可见毛孔、汗光）、真实光影与情感共鸣。
关键要求：海报中的所有标签、标题和说明文字必须采用中英双语 (Chinese & English) 排版，汉字设计需具有现代宋体或黑体的优雅感。
物品布局 (Item Layout) - Knolling放射式构图：
总物品数30-36件，围绕角色呈90度直角或放射状有序排列。
分类1：时尚工坊 (Fashion Atelier) - 香槟金标签。主服装拆解：衣袖、衣领、布料裁片、内衬、纽扣、拉链等全部分离悬浮，具有真实布料物理效果。鞋履拆解：鞋底、鞋面、鞋带、鞋跟、鞋垫分离。随身配饰：腰带、手提包、帽子、围巾、手套。示例：一件风衣可拆解为翻领、肩章、腰带、袖口束带和主衣身面板。
分类2：美妆个护 (Beauty Collection) - 玫瑰金标签。彩妆：口红（带有颜料芯切面和色号标签）、眼影盘（每格颜色区分清晰）、粉饼、香水瓶（玻璃透明度、内部焦散和液体弯月面清晰可见）。护肤：精华液瓶、保湿霜罐、面部滚轮、刮痧板。示例：香水必须展示玻璃的通透感和瓶盖的金属反射。
分类3：私密生活 (Private Sphere) - 柔粉色标签。内衣组件（罩杯、带子、扣环、肩带）、内衣布料样本。睡衣与家居服：丝绸睡衣套装、长袍系带、拖鞋、舒适袜子。个人卫生用品：带有残留牙膏的牙刷、带有头发的发刷、用过的化妆棉、纸巾上的护肤残留物、折叠的毛巾。环境元素：香薰蜡烛（带有熔化的蜡池）、精油滴管、扩散器芦苇、带有手写笔记的日记本。所有物品必须显得真实使用过——细微的磨损、自然的褶皱和生活痕迹。
分类4：情绪表情画廊 (Human Faces) - 赤陶色标签。一系列6-8个悬浮的微距肖像特写，捕捉不同的情绪状态：宁静的微笑、深思熟虑的凝视、眼角带笑的大笑、含泪的脆弱感、阿黑颜 (Ahei Yan)（俏皮的假装生气，眯眼、鼓腮、微皱眉）、极度狂喜（脸红、张嘴、瞳孔放大、额头微汗）、咬唇表情（下唇轻咬在齿间，下颌微紧，颈部泛红）。每个面部都以极度特写呈现，可见毛孔、细微汗毛、唇部湿润感、动态皮肤微动和精准的眼神光。
分类5：身体姿态与运动 (Physicality Zone) - 暖肤色标签 (#E0AC69)。1:10比例的超写实微缩真人模型，呈现真实的健康肤色与自然体态，绝非素模或黏土。展示关键姿势：跪姿（单膝跪地，手放在大腿上）、俯卧姿势（平趴，下巴托在手掌上）、向上伸展、盘腿打坐、动态行走步伐。每个姿势强调真实的皮肤光泽、肌肉定义、关节清晰度、重量分布、受重力影响的布料垂坠感和自然的身体不对称性。
每件物品要求：
渲染质量：与角色的照片级保真度匹配——零风格化。
编号标签：带有01-36的圆形徽章，带有微妙的投影。
材质与阴影：完整的PBR工作流，具有物理准确的粗糙度、高光和法线贴图；投射在在自然表面上的柔和环境光遮蔽阴影。
爆炸视图技术 (Exploded View Technique)
连接线：优雅的细虚线或实线将悬浮的服装部件连接回角色的身体。
引导箭头：极简装饰性箭头将每个对象链接到其描述标签。
技术注释：材质样本：展示织物（丝绸、棉、羊毛）、皮革纹理、金属饰面的微距特写方块。材质标签：例如 100%桑蚕丝 / Silk、全粒面意大利皮革 / Leather (必须双语)。测量标尺：沿边缘集成的双单位（厘米/英寸）标尺。
排版设计 (Typography)：
主标题：人形解构 · HUMAN REALITY UNVEILED。字体：中文使用优雅的衬线体（如方正宋刻本秀楷），英文使用Playfair Display——均带有哑光纸质纹理（无金属箔）。
副标题：（主标题下方，流畅手写体） Essence of Being · Anatomical Truth / 存在之核·形神解构 ，双语排版，优雅而不突兀。
分类标题：带图标的圆角矩形标签，必须双语：私密生活 · Intimate (柔粉色 #F8C8DC)，情绪表情 · Emotions (赤陶色 #E2725B)，身体姿态 · Posture (暖肤色 #E0AC69)。
设计元素 (Design Elements)：
几何框架：极简细线六边形或圆形（0.5–1pt 描边），采用柔和的灰色来组合物品群组——受装饰艺术影响但去饱和。
测量标尺：沿左右边缘放置，增强技术真实感。
十字准星：四角和焦点处的微弱瞄准标线。
材质样本：底部条带显示织物/皮革/金属微观纹理瓷砖。
信息卡片：带有物品详细信息（品牌、材质、产地）的优雅边框卡片，中英双语。
属性雷达图：封装在精致框架中，显示特征如：亲密感 ★★★★★, 真实感 ★★★★★, 脆弱感 ★★★★☆。
连接线条：哑光银色或暖青铜色虚线，带有锥形箭头。
背景与氛围 (Background & Atmosphere)：
背景渐变：暖色变体——象牙白 (#FFFFF0) 到柔和燕麦奶色 (#F5E9D7)；或冷色变体——浅混凝土色 (#EAEAEA) 到摄影棚白 (#FFFFFF)。
覆盖图案：5–10% 不透明度的蓝图网格或微弱的建筑绘图线条。
暗角效果：轻柔的边缘变暗以集中注意力。
氛围粒子：微妙的金色散景光球和细腻的胶片颗粒（柯达 Portra 400 模拟），营造电影深度——绝不喧宾夺主。
技术规格 (Technical Specifications)：
渲染引擎：路径追踪 (Path Tracing) 等同于 Cycles/Arnold/RenderMan 级别。
采样数：最低 4096 SPP 以获得无噪点输出。
光线弹射：12 次以获得准确的全局光照。
焦散：开启，用于玻璃和液体的真实感。
几何体：角色网格 >200 万多边形；姿势手办 >50 万每个。毛发：每个角色 >10 万根发丝，经过物理模拟并与风互动。
PBR 材质工作流：皮肤：三层 SSS，双高光叶，毛孔级置换，黑色素变化。毛发：各向异性着色器，主/副高光，发根到发梢的颜色变化。织物：编织法线贴图，基于纤维方向的定向粗糙度，微皱褶。金属：金属度 1.0，粗糙度 0.1–0.4（拉丝或抛光视情况而定）。玻璃：折射率 1.5；水折射率 1.33，带弯月面细节。皮革：粗糙度 0.65，带有自然纹理变化的凹凸贴图。
分辨率与输出：4K (3840×2160)，16:9。32 位浮点色深。16x MSAA 抗锯齿。
后期处理：色彩分级：应用电影感 LUT；无纯黑（最低 RGB 15,15,15）。温和的 S 曲线用于对比度。根据主题调整色温 ±200K。全局饱和度降低 5%；关键颜色（如腮红、金色）提高 10%。特效：辉光：高光部分的柔和光晕。胶片颗粒：有机柯达 Portra 400 纹理。色差：几乎不可察觉的边缘条纹。暗角：中等强度。锐化：输出级自适应锐化。
特殊指令 (Special Instructions)：
单人角色：约 30 件物品，专注于真实的日常生活、情绪范围和身体存在感。
情侣角色：约 36 件物品（每人 18 件），通过微妙的心形负空间连接，带有性别编码的调色板和共享的亲密物品（例如，一个枕头，共享日记）。
孕妇角色：包含产前用品（托腹油、维生素、B超打印件）；在腹部附近添加半透明胎儿图标。
关键要求：忠实匹配参考照片的年龄、种族、职业、体型、伤疤、纹身和个人风格——包括皮肤瑕疵、雀斑和独特的面部结构。`,
    promptEn: `Core Instruction:
Create an ultra-high-quality, cinematic 3D realistic deconstruction art poster based on the reference image. Style: Photorealistic Humanism. Authentic anatomy, skin texture (visible pores, sweat sheen), natural lighting. Zero stylization.
Text Strategy: Bilingual Typography (Chinese & English) is essential. All titles, headers, and labels must feature elegant Chinese characters paired with English.
Layout (Knolling Radial): 30-36 items arranged at 90-degree angles or radial symmetry.
1. Fashion Atelier (Tag: "时尚 · Fashion" - Champagne Gold): Fully deconstructed outfit (floating sleeves, panels, lining), disassembled footwear.
2. Beauty Collection (Tag: "美妆 · Beauty" - Rose Gold): Makeup with cutaways (lipstick core), eyeshadow palettes, perfume bottles with internal caustics and metallic caps.
3. Intimate Private Life (Tag: "私物 · Intimate" - Soft Blush): Undergarments (cups, straps), silk sleepwear, used toothbrush, melted candle, handwritten journal. Items show authentic wear and lived-in imperfections.
4. Emotional Expression Gallery (Tag: "微表情 · Emotions" - Terracotta): 6-8 floating macro portrait close-ups capturing micro-expressions: Serene smile, Laughter, Tearful vulnerability, 'Ahei Yan' (playful mock anger), Peak Ecstasy (flushed, sweat), Bitten-Lip. Extreme close-up details showing pores and vellus hair.
5. Body Posture & Movement (Tag: "体态 · Posture" - Warm Skin Tone #E0AC69): 1:10 scale **hyper-realistic living human figures** (real skin tone, veins, muscle texture, NOT clay). Depicting poses: Kneeling, Prone, Stretching, Meditation, Walking. Highlighting realistic skin sheen, joint articulation and gravity.
Tech Details: Elegant dashed connection lines, material swatches, measurement rulers.
Typography: Main Title "**人形解构 · HUMAN REALITY UNVEILED**". Subtitle "Essence of Being · 灵肉之实". Item Labels: Small floating text indicating material or name in Chinese/English.
Atmosphere: Warm ivory or cool concrete gradient background. Blueprint grid overlay. Subtle bokeh and Kodak Portra 400 film grain.
Render: Path Tracing, 4096 SPP, 12 bounces. Full PBR workflow (Triple-layer SSS skin). 8k resolution. --ar 16:9 --style raw`,
    prompt: "3D photorealistic character deconstruction poster, bilingual Chinese/English typography...",
  },

    "dr-86": {
    title: "九宫格潮流明星肖像",
    tags: ["Portrait", "Fashion", "Grid", "Black and White", "Trendy"],
    promptCn: `项目类型：九宫格潮流明星肖像拼贴。
核心要求：所有9个画面中的人物面部特征必须与上传参考图完全一致。
视觉风格：
色调：黑白高调摄影，明亮灰阶，纯净白色，无黑色死角。
背景：影棚无缝白纸背景，或浅灰混凝土墙，极简明亮空间。
灯光：柔和正面光，蝴蝶光，美人碟布光，无背光，面部无强烈阴影。
氛围：潮流、酷帅、自信、明星范儿、时尚杂志大片感、充满活力、前卫。
人物造型：
发型多样性：酷感凌乱底切(Undercut)、飞机头(Quiff)、纹理短发、现代背头。保留设计师款胡茬或精心修剪的络腮胡。
穿搭风格：前卫街头风，皮夹克领口，设计师卫衣，极简叠穿，个性配饰（如单耳耳环）。
表情与姿态：
自信歪嘴笑、酷酷地看向画外、手抓头发、轻微咬肌紧绷、直视镜头的自信眼神、动态姿势。
构图：
3x3 网格拼贴，动态布局（非完全统一），特写与中景混合。
技术规格：
中画幅时尚相机质感，柯达 T-Max 400 胶片（细腻颗粒，锐利），8K分辨率，大师级画质，对焦锐利。`,
    promptEn: `Nine-grid trendy star portrait collage, 3x3 layout.
Subject: Same male model in all 9 panels, strict face consistency based on input reference.
Visual Style: Black and white, Monochrome, High key, Bright grayscale. Background: Seamless white paper or light gray concrete wall, minimalist bright studio.
Lighting: Soft frontal butterfly lighting, beauty dish, no harsh shadows.
Mood: Trendy, Cool, Confident, Star quality, Edgy fashion editorial.
Styling: Varied hairstyles (cool messy undercut, styled quiff, textured crop, slicked back), designer stubble. Streetwear vibe (leather jacket, hoodie, minimalist layers, single earring).
Poses: Confident smirk, looking off-camera, hand in hair, jaw clench, dynamic poses. Mix of close-ups and medium shots.
Tech: Medium format fashion camera, Kodak T-Max 400 film stock (fine grain), 8k resolution, sharp focus. --ar 3:4`,
    prompt: "9-grid black and white trendy fashion portrait collage...",
  },

    "dr-87": {
    title: "专业品牌IP形象设计开发看板",
    tags: ["IP Design", "Brand Identity", "Character Design", "Layout", "Professional"],
    promptCn: `生成一张影棚级质量的完整专业IP角色设计开发文档看板 (16:9)。
[步骤1：LOGO分析]
智能分析并提取品牌色彩、设计风格、视觉元素、字体特征和品牌性格特质。
如果未提供logo，首先为[品牌名称/行业]设计一个专业现代的logo。
[步骤2：设计参数]
基础Logo：[上传图片分析结果 / 新设计的logo]
形象灵感来源：[填入灵感]
色彩系统：从logo自动提取
品牌行业：自动检测
[完整设计看板布局 - 超高信息密度]：
1. 顶部行 - 品牌基础 (Brand Foundation)：
左：品牌DNA分析（logo、色板HEX/RGB、品牌性格关键词、用户画像）。
中：概念构思（灵感情绪板、参考图、设计方向箭头）。
右：形态研究（logo解剖、拟人化探索、演变草图）。
2. 第二行 - 草图开发 (Sketch Development)：
左：概念探索（10-12个多样化草图、不同性格/风格测试）。
中：精细线稿（3个最佳方案的三视图、构造网格、尺寸标注）。
右：细节精修（解剖分解、模块化元素、特征特写）。
3. 第三行 - 角色系统 (Character System)：
左：表情设定表（8-12种面部表情展示情感范围）。
中：姿势库（6-10个动态姿势展现性格）。
右：转身视图（360度旋转图，保持模型一致）。
4. 第四行 - 色彩与材质 (Color & Material)：
左：色彩开发（主色/辅色/强调色板，变体方案）。
中：材质规格（纹理细节、布料图案、制造工艺说明）。
右：色彩应用（深/浅色模式，对比度检查）。
5. 第五行 - 技术规格 (Technical Specs)：
左：构造指南（尺寸图、比例、网格系统）。
中：设计规范（最小尺寸、安全空间、正误用法）。
右：资产变体（不同尺寸图标、线稿版）。
6. 底部行 - 应用与成品 (Applications)：
左：数字应用（App图标、头像、吉祥物UI、动图概念）。
中：实物应用（毛绒玩具渲染、包装、周边样机）。
右：最终主视觉渲染（超精致全彩插画，影棚光效，融入logo）。
整体视觉风格：
专业商业设计文档美学，超清晰网格布局，模块化区块，色彩编码分隔。
简约无衬线字体，扁平化图标，充足留白，信息层次分明。
8K超高分辨率，印刷就绪质量，Behance/Dribbble作品集标准。`,
  },

    "dr-88": {
    title: "涂鸦速写艺术",
    tags: ["Illustration", "Sketch", "Graffiti", "Dry Brush", "Minimalist"],
    promptCn: `【指令】生成一张充满张力的涂鸦速写艺术插画。
主题：[插入主题/主体]
视觉风格 (核心)：
线条：随手、快速、夸张的黑色墨线或炭笔线条。线条不求精准，但求生动和力度，带有涂鸦感 (Graffiti Sketch)。
上色：使用粗糙的干刷 (Dry Brush) 笔触进行块面填色。颜色饱和度适中，保留笔触的飞白和纹理。拒绝完美平涂。
构图与背景：大面积留白 (Negative Space)，背景保持干净的白色，突显主体。
禁忌：不要使用透明水彩晕染、纸张纹理叠加或细腻的厚涂风格。保持干脆利落的速写感。
画面内容：以 [插入主题/主体] 为核心，通过夸张的比例和动态的线条表现其特征。`,
  },

   "dr-89": {
    title: "独立女装品牌型录：参考图定制",
    tags: ["Fashion", "Lookbook", "Minimalist", "Photography", "Layout", "Commercial"],
    promptCn: `一张高端独立女装品牌的时装型录海报，整体为纯白背景，干净留白，极简排版，呈现品牌官网线上Lookbook的视觉风格。
核心指令：基于上传的人物参考图生成。
人物一致性（最高优先级）：所有画面中的模特必须是同一个人（基于上传照片），保持面部特征、发型和气质的连贯性。
画面左侧（主视觉）：
模特的半身或全身特写（占比最大）。自然站立姿态，身体微微侧倾。表情克制放松，眼神平静。气质介于少女与成熟之间，干净不做作。头发自然垂落略带风感，妆容清透自然。
模特穿着[学院风格穿搭]（可替换为其他风格）。服装面料质感清晰可见（针织、羊毛、马海毛等），画面真实细腻，具有商业服装摄影质感。
画面右侧：
排列两到三位比例较小的全身模特（同一人），纵向整齐排布，分别展示同一系列中的不同搭配或姿态。单套穿搭风格有区分，但整体色系与气质统一，呈现标准时装型录陈列逻辑，人物之间留白均匀比例协调。
右下区域：
出现少量服装单品的小图陈列（如半身裙、下装），平铺或简洁立放，呈现为产品目录式展示，不抢主视觉。
文字排版：
画面顶部左侧小号文字“[品牌名] online”。顶部中间文字“[季节年份]”。顶部右侧文字“for spring & summer”。底部区域有一小段品牌理念英文说明文字，字体为现代无衬线字体，字重轻，字距舒展，像印刷在画面中，克制不像广告不夸张。
整体风格：
独立设计师女装气质，偏日韩小众品牌审美，年轻克制略带复古感，商业型录摄影风格。光线均匀柔和，无强烈阴影，画面高级干净真实。无戏剧化光效无夸张姿势。拒绝广告海报风格、霓虹色或高饱和色彩。`,
    promptEn: `High-end independent women's fashion lookbook poster. Pure white background, clean negative space, minimalist layout, official brand website/online lookbook visual style.
Core Instruction: Generate based on the uploaded reference photo.
Character Consistency (Top Priority): The model in all sections MUST be the same person as in the reference photo.
Left Side (Hero Visual):
A medium to full shot of the model occupying the main proportion. Natural standing pose, slight lean, restrained and relaxed expression, calm eyes. Vibe between girlish and mature, clean and unpretentious. Hair naturally falling with a slight breeze, clear natural makeup. Wearing [Academy/Preppy Style] outfit. Fabric textures clearly visible (knit, wool, mohair). Realistic, delicate, commercial fashion photography quality.
Right Side:
2-3 smaller full-body figures of the SAME model arranged vertically, displaying different outfits from the same collection. Distinct styles but unified color palette and vibe. Standard lookbook display logic, balanced spacing.
Bottom Right:
Small display of clothing items (skirts, bottoms), flat lay or simple standing, catalog style, not stealing focus.
Typography:
Top-left small text "[Brand Name] online", Top-center "[Season Year]", Top-right "for spring & summer". Bottom area with a small paragraph of brand philosophy in English. Modern sans-serif font, light weight, spacious tracking, print-like quality, restrained, non-advertising feel.
Overall Style:
Independent designer vibe, niche Japanese/Korean aesthetic, young, restrained, slightly retro. Commercial catalog photography style. Even soft lighting, no harsh shadows. High-end, clean, real. No dramatic lighting, no exaggerated poses. --ar 3:4 --style raw --v 6.0`,
    prompt: "High-end independent fashion lookbook layout, based on uploaded reference...",
  },

    "dr-90": {
    title: "高定露背花束人像",
    tags: ["Fashion", "Portrait", "Haute Couture", "Floral", "Cinematic"],
    promptCn: `创作一张高级时装杂志封面级别的肖像照 (时尚摄影师风格)。
核心指令：使用上传的参考人物作为唯一主体。面部特征和自然肤质需100%匹配。
发型：短发，发丝被风吹拂，飘散在脸上，以时尚的方式部分遮挡面部特征。
背景：纯深红色工作室背景 (#a83b4f 色调)，干净无瑕。
服装：极简主义高级定制礼服，颜色为黑色。深V露背设计，优雅的垂坠感沿着脊柱延伸到微露臀。面料为真丝。雕塑般的精致廓形。无过多蕾丝、亮片或婚纱头纱。
姿势/构图：四分之三背部视角。露背部分完全展现；头部略微转动，露出侧脸。9:16 竖幅构图，包含腰部和上臀部，以优雅时尚的方式展现出自信、线条优美的背部与手臂轮廓 (无任何暴露)。
道具：手捧一束大型时尚奢华花束，紧贴身体。花束硕大、繁密、色彩鲜艳——包含多种珍稀高档花卉，颜色丰富 (牡丹、兰花、玫瑰、红掌、毛莨、郁金香)，造型精致，非新娘捧花风格。
相机：长焦人像镜头效果 (135mm)，浅景深，背景虚化效果强，面部细节清晰。
灯光 (单光源，顶光)：光源来自顶部上方主光，通过控制高光勾勒出颧骨、肩膀和背部的线条。整体曝光保持低调，营造氛围感；阴影部分保留细节；无刺眼眩光。
后期：杂志风格调色，精致的胶片质感，毛孔和皮肤细节清晰可见，高端时尚写实风格。`,
    promptEn: `High-fashion magazine cover portrait (Fashion Photographer style).
Subject: Strict identity lock on uploaded reference face and skin texture.
Hair: Short hair, windblown strands partially obscuring face in a stylish way.
Background: Solid deep red studio background (#a83b4f tone), clean and flawless.
Outfit: Minimalist Haute Couture gown in Black. Deep V-backless design, elegant drape along the spine to lower back. Silk fabric. Sculptural silhouette. No lace/sequins/veil.
Pose/Composition: 3/4 Back View. Back fully exposed. Head slightly turned to reveal profile. 9:16 vertical composition including waist and upper hips, showcasing elegant body lines confidently (non-explicit).
Props: Holding a massive, luxurious fashion bouquet close to the body. Dense, vibrant, exotic flowers (Peony, Orchid, Rose, Anthurium, Ranunculus, Tulip). Exquisite styling, NOT a bridal bouquet.
Camera: Telephoto portrait lens (135mm), shallow depth of field, strong bokeh, sharp facial details.
Lighting: Single overhead source (Top Light). Highlights contouring cheekbones, shoulders, and spine. Low-key exposure, atmospheric shadows, no glare.
Post-processing: Magazine color grading, refined film grain, visible pores and skin texture, hyper-realistic high fashion style. --ar 9:16`,
    prompt: "High-fashion backless portrait with massive flower bouquet...",
  },

    "dr-91": {
    title: "透明亚克力手绘信息牌",
    tags: ["Signage", "Acrylic", "Chalk Sketch", "Product Display", "Information Design"],
    promptCn: `【指令】生成一张超写实的透明亚克力信息牌专业摄影图。
悬挂方式：由两条细金属缆绳从上方悬挂，置于 [环境类型] 中。
主体材质：晶莹剔透的透明亚克力/玻璃，具有逼真的反射、边缘发光和折射效果。
内容风格：手绘粉笔素描美学，线条略显粗糙不完美（非完美矢量）。
内容布局：
1.顶部：巨大的手写标题“[品牌名称]”，粗体粉笔字，带有 [颜色] 渐变和 [强调色] 边缘光晕。下方是优雅的小号双语标语。
2.中心（30%区域）：手绘卡通风格的 [主体对象]，[视角描述]，比例可爱简化。线条干净但有轻微瑕疵。填充 [主色色值]，白色粉笔轮廓。底部有微妙的手绘阴影。
3.环绕信息展示：
左侧：[主题1] 图标 + 标题 + 关键信息 + 视觉元素。
顶部：[主题2] 图标 + 标题 + 技术插图 + 指向主体的箭头。
右侧：[主题3] 图标 + 标题 + 细节手绘 + 测量线。
底部：[主题4] 图标 + 标题 + 徽章元素。
4.连接元素：手绘箭头和虚线将所有部分连接到中心主体。散落的小装饰元素。
5.底部品牌条：[背景色色值] 横条，包含金属光泽Logo、品牌标准字和产品规格。
色彩方案：奶油白粉笔基线，主色填充，强调色高光，浅灰图标。
环境与摄影：背景极度虚化（f/1.4大光圈），只可见柔和的 [色调1] 和 [色调2] 光斑（Bokeh），无所谓形状。专业聚光灯创造强烈的表面反射，边缘有戏剧性的AR发光效果。8K分辨率。`,
    promptEn: `Ultra-realistic professional photography of a premium transparent acrylic signage panel suspended by two thin metal cables.
Main Subject: Crystal-clear transparent acrylic/glass with realistic reflections, edge lighting glow, and refraction. Content is Hand-drawn chalk sketch aesthetic (imperfect lines).
Layout:
- Top: Huge hand-written title "[Brand Name]" in bold chalk-style with gradient and edge glow. Subtitle "[Slogan]" in elegant chalk text.
- Center Illustration (30% space): Hand-drawn cartoon-style [Subject] in [Angle]. Clean line art, simplified cute proportions. Filled with [Main Color], white chalk outline. Subtle floating shadow.
- Surrounding Info:
  - Left: [Topic 1] Icon, Title, Hand-drawn details.
  - Top: [Topic 2] Icon, Tech diagram, Connecting arrows to subject.
  - Right: [Topic 3] Icon, Detail sketches, Measurement lines.
  - Bottom: [Topic 4] Icon, Badge.
- Connections: Hand-drawn arrows/dotted lines connecting all sections to the center.
- Bottom Brand Strip: Horizontal bar with metallic Logo and specs.
Color: Creamy white lines (#F5F5DC), [Main Color] illustration, [Accent Color] highlights.
Environment: [Environment Type] background with EXTREMELY HEAVY BLUR (abstract bokeh balls). f/1.4 aperture. Professional spotlight, dramatic glowing edges. 8k resolution, photorealistic.`,
    prompt: "Transparent acrylic signage with hand-drawn chalk sketch info...",
  },

    "dr-92": {
    title: "包豪斯几何双重曝光插画",
    tags: ["Bauhaus", "Geometric", "Illustration", "Double Exposure", "Vector Art"],
    promptCn: `人物名称：[在此处插入著名人物名字]
一幅包豪斯风格的几何双重曝光插画，呈现该人物的侧面剪影。
背景：浅米色纯色背景。
自适应色彩方案（AI自动生成）：
根据人物的气质与成就生成包豪斯配色（例如：创新者=冷感科技蓝灰；艺术家=温暖鲜明原色）。此配色仅用于几何图案与字体。
面部处理（关键）：
面部特征（眼、鼻、嘴、下巴、脸颊）必须以接近人物自然肤色的纯色、平面矢量方式呈现。保持干净，无几何纹理，确保人物清晰可辨且庄重。与周围几何图案形成利落对比。
几何叙事层次（集中在头发、后脑、颈部）：
1. 底部区域（根源）：几何抽象元素，象征出身与早期奋斗。
2. 中部区域（成就）：清晰可辨的包豪斯风格几何化抽象符号，代表其最具代表性的工具或产品（如特斯拉的线圈/电机），需具象可读。
3. 顶部区域（愿景）：抽象的几何圆形、线条与飘逸形态，表现思想与未来。
字体设计：
下方展示人物全名，定制包豪斯风格字体。几何无衬线体，由基本形状构建。将代表性成就的抽象几何元素巧妙融合进字母结构中。
整体风格：
干净的矢量艺术风格，无缝整合。`,
    promptEn: `Bauhaus style geometric double exposure illustration, profile silhouette of [Insert Famous Person Name]. Light beige solid background.
Adaptive Color Scheme: AI generates a harmonious Bauhaus palette based on the person's vibe (e.g., cool tech blues/grays for innovators; warm primaries for artists). Applies to geometry and text only.
Face (Critical): Facial features (eye, nose, mouth, chin, cheek) must be rendered in clean, flat vector skin tone matching the person. NO geometric texture on the face. High contrast between clean face and geometric surroundings.
Geometric Narrative Layers (Hair/Back of head/Neck):
1. Bottom (Roots): Abstract geometry symbolizing origins/foundation.
2. Middle (Achievements): Distinct, readable Bauhaus-stylized symbols of their iconic tools/inventions/works, integrated into the silhouette texture.
3. Top (Vision): Abstract circles/lines/flowing shapes representing mind/future vision.
Typography: Custom Bauhaus-style geometric sans-serif font below the silhouette, spelling "[Insert Famous Person Name]". Letters built from basic shapes. Geometric elements from achievements integrated into letters. Same color palette.
Style: Clean vector art, flat design, seamless integration. --ar 3:4`,
    prompt: "Bauhaus geometric double exposure illustration of a famous person...",
  },

    "dr-93": {
    title: "城市庆典烟花秀",
    tags: ["Fireworks", "Cityscape", "Celebration", "Night Photography", "Realistic"],
    promptCn: `一场位于 [插入城市名称] 的超写实、专业的夜间烟花表演。
核心视觉：天空中央清晰地展示了“[插入主体]”形状，完全由烟花组成。该形状无缝地从浓密的火花轨迹、发光的余烬和耀眼的光辉爆发中浮现，轮廓平滑、精准，清晰明快。它自然融入周围的烟花表演，成为整体视觉盛宴的重要组成部分，视觉鲜艳且写实。
背景氛围：在中央主体的后方及周围，一场宽广的庆祝烟花表演以层叠的放射状爆炸、瀑布火花和多级爆炸填满夜空，营造出令人印象深刻的深度与层次感。背景烟花亮度略低，以突出中央的主体形状。
环境与光影：夜空纯净而深邃，从海军蓝到黑色，晴朗无云，薄雾和烟雾极少。烟花色彩包括金、银、白、红、蓝等精致的调色板，展现了物理精确的光晕效果、细腻的光晕效果、逼真的粒子动态以及自然的强度和时机变化。烟花轻柔地照亮周围的天空，带来柔和、电影级的光影衰减，营造出真实且沉浸式的庆祝氛围。
底部细节：画面底部能看到 [插入城市名称] 的标志性建筑的剪影。
画质：图像分辨率极高，细节清晰，具有摄影写实感，没有额外的文字或视觉元素，仅通过烟花清晰显示形状。`,
    promptEn: `A hyper-realistic, professional night fireworks show in [Insert City Name].
Core Visual:
Clearly displaying the shape of "[Insert Subject]" formed entirely by fireworks in the center of the sky. The shape emerges seamlessly from dense spark trails, glowing embers, and dazzling bursts, with smooth, precise, and crisp contours. It naturally integrates into the surrounding fireworks display.
Background Atmosphere:
Behind and around the central subject, a broad celebratory fireworks display fills the night sky with layered radial explosions, waterfall sparks, and multi-stage bursts, creating impressive depth. Background fireworks are slightly dimmer to highlight the central subject.
Environment & Lighting:
The night sky is pure and deep, ranging from navy blue to black, clear and cloudless with minimal smoke. Firework colors include an exquisite palette of gold, silver, white, red, and blue, featuring physically accurate bloom effects and realistic particle dynamics. The fireworks gently illuminate the surrounding sky with soft, cinematic light falloff.
Bottom Details:
Silhouettes of [Insert City Name]'s iconic landmarks are visible at the bottom.
Quality:
Extremely high resolution, sharp details, photorealistic, no extra text, only the shape formed by fireworks.`,
    prompt: "Hyper-realistic city fireworks show forming a specific shape...",
  },

    "dr-94": {
    title: "美食解构：悬浮层叠海报",
    tags: ["Food Photography", "Deconstruction", "Poster", "Commercial", "3D Render"],
    promptCn: `一张高端中式美食海报，展示 [插入菜品名称] 的解构悬浮层叠效果。
背景：纯黑背景 (#000000)，充满“镬气”和“灵魂美食”的氛围。浓厚的蒸汽和白烟从底部升起，穿过层叠的食材缝隙。
顶部标题：画面顶部中央悬浮着巨大的奢华标题标签“[插入菜品名称] [English Name]”，采用富有表现力的手写毛笔字体。字体具有厚重的3D雕刻黄金金属质感，拉丝表面，暖金光泽，像是在空中锻造的金色笔触。
五层结构（从上到下）：
1. 顶层（配料层）：[插入顶部配料，如香菜/葱花/辣椒]，色彩鲜艳，散布在热气中。
2. 第二层（肉类/主菜层）：[插入核心肉类或主菜]，切片或块状，展示纹理和汁水。
3. 第三层（主食层）：[插入主食，如面条/米饭/饺子]，展示形态和热气腾腾的质感。
4. 第四层（辅料层）：[插入辅助配菜]，透光或反光。
5. 第五区（过渡区）：留出较大的空隙，充满旋转的香气蒸汽、烟雾和下落的水滴，强调热度和视觉呼吸感。
6. 底层（成品层）：一碗完整的 [插入菜品名称] 放置在质朴的深色陶瓷碗中，位于底部。汤汁清澈/浓郁，覆盖着 [插入特色酱汁/红油]，看起来刚出锅，油光发亮，烟雾缭绕。
右下角：第二个手写金色金属元素，风格与顶部标题一致，作为签名Logo：“[插入品牌名称]”。
标签系统：中英双语标签带有优雅的箭头指向各组件。
光影：45度角戏剧性影棚布光，暖色轮廓光强调纹理、闪亮的食材和金色文字。无底座，悬浮于虚空。暗调情绪美学，奢华商业美食摄影风格，超写实，9:16竖幅。`,
    promptEn: `Premium Chinese restaurant food poster featuring deconstructed solid ingredient layers of [Insert Dish Name] floating in a vertical stack on a pure black background. Infused with intense 'Wok Hei' and soul food atmosphere. Thick swirling steam and wisps of white smoke rising dynamically.
Typography: Top center floating title '[Insert Dish Name] [English Name]' in expressive handwritten Chinese brush calligraphy. Heavy 3D sculpted gold metal texture, brushed finish, warm golden sheen.
Layers:
1. Top layer: [Insert Top Garnish], vibrant colors, scattered in heat haze.
2. Second layer: [Insert Key Protein/Meat], showing texture and grain, drifting in steam.
3. Third layer: [Insert Main Carbs/Noodles], showing thickness and moisture sheen.
4. Fourth layer: [Insert Side Ingredients], catching light.
5. Transition Zone: Large empty space filled densely with swirling aromatic steam and moisture droplets.
6. Bottom layer: A complete finished dish in a rustic dark ceramic bowl. Broth/Sauce visible, topped with [Insert Toppings], glistening with oil, heavy steam billowing.
Bottom Right: Stylized signature logo '[Insert Brand Name]' in sculpted gold brushstroke calligraphy.
Labels: Bilingual labels with elegant arrows pointing to components.
Lighting: Dramatic studio lighting from 45-degree angle, warm rim lighting, star sparkle effects. Dark moody aesthetic, luxurious commercial food photography, 8k resolution. --ar 9:16`,
    prompt: "Deconstructed food poster, floating layers, gold calligraphy...",
  },

    "dr-95": {
    title: "3x3 角色百变贴纸包",
    tags: ["Sticker Art", "Character Design", "Grid", "Fashion", "Cute"],
    promptCn: `核心指令：基于上传照片生成一个3x3网格贴纸包。
人物一致性：所有9个贴纸必须是同一个人物（严格锁定面部特征、相似度和比例）。
视觉风格：
活泼的现代贴纸设计。
边缘干净裁剪，带有明显的粗线条轮廓（白边 Die-cut）。
姿势富有表现力，生动有趣，仿佛在互动。
质感：带有柔和阴影和光泽贴纸纸张质感 (Glossy Sticker Paper)。
内容规划（9种风格）：
包含多种服装风格，例如：教师装、传统服饰、护士制服、街头潮牌、奇幻风格等。
文字标注：
每个贴纸旁边配有时尚的中英文双语标注（如 "教师 Teacher"）。
画质：
高分辨率成品，适合社交分享。`,
    promptEn: `A 3x3 sticker pack sheet featuring 9 different full-body stickers of the SAME character based on the uploaded photo.
Consistency: Strict identity lock on facial features and proportions across all stickers.
Style: Modern lively sticker art, die-cut aesthetic with thick white outlines and clean edges. Expressive and dynamic poses. High-resolution finish with soft drop shadows and glossy paper texture.
Outfits: Varied fashion styles including Teacher uniform, Traditional attire, Nurse uniform, Streetwear, Fantasy/Cosplay, etc.
Typography: Bilingual (Chinese & English) cute labels next to each sticker.
Background: Clean solid color or subtle pattern to make stickers pop. --ar 1:1 --v 6.0`,
    prompt: "3x3 character sticker pack, die-cut style, various outfits...",
  },

    "dr-96": {
    title: "电影感三联画：多元随机风格",
    tags: ["Triptych", "Cinematic", "Random Style", "Storytelling", "Romance", "Action"],
    promptCn: `核心指令：基于真人实拍风格的竖向三联拼贴画 (Vertical Triptych)，描绘同一位女性的三个连续叙事瞬间。
风格设定：**随机电影风格** (请AI从以下类型中随机选择一种并保持统一：纯爱爱情片、深沉剧情片、悬疑惊悚片、赛博朋克、复古港风、史诗奇幻、现代动作等)。
人物造型：基于上传的参考图，自动适配所选电影风格的服装、妆容与发型。
构图布局（自适应叙事流）：
请根据所选风格自动设计三格画面的起承转合：
顶格 (Top Panel - 铺垫)：交代环境氛围或人物情绪（如：爱情片的对视/雨中等待，动作片的备战）。
中格 (Middle Panel - 高潮/破框)：视觉重心。**破框效果**：人物主体、肢体动作或关键道具（如雨伞、花束、武器、光效）冲破边框，形成强烈立体感。
底格 (Bottom Panel - 余韵)：情绪的延伸或结局（如：背影、特写反应、空镜留白）。
整体质感：
超写实电影剧照质感，光影、色调、胶片颗粒感均需完美契合所选电影类型。8K分辨率。`,
    promptEn: `A vertical triptych collage composition depicting a real-life woman in three consecutive narrative moments.
Style: **Random Cinematic Style** (AI selects one: Romance/Drama, Thriller/Noir, Cyberpunk, Fantasy, Retro, Action, etc.). High-budget movie aesthetic.
Subject: Consistent identity based on reference. Outfit and makeup adapted to the chosen theme.
Layout (Adaptive Storytelling):
1. Top Panel (Setup): Establishing shot or emotional buildup appropriate to the genre.
2. Middle Panel (Climax/Pop-out): The visual focal point. **Pop-out Effect:** The subject or a key prop intentionally breaks through the frame borders, creating a 3D layered effect.
3. Bottom Panel (Resolution): Aftermath, reaction, or fading emotion.
Tech: 2:3 aspect ratio, photorealistic, cinematic lighting, deep depth of field, 8k resolution.`,
    prompt: "Cinematic triptych collage with random genre and pop-out effects...",
  },

    "dr-97": {
    title: "建筑设计汇报展板",
    tags: ["Architecture", "Presentation Board", "Blueprint", "3D Render", "Layout"],
    promptCn: `专家级建筑插画师的汇报展板，展示一个 [插入风格] 住宅，具有 [插入关键建筑元素]。
画面布局（从左到右流动）：
左侧：黑白 2D 图纸（总平面图、平面图），精细的线稿风格。
中间：立面图和剖面图，展示结构细节。
右侧：[插入时间/光照] 下的超写实 3D 渲染图，展现真实材质与光影。
统一美学：画面从左至右自然过渡，融合 [线条风格] 与 [材质/纹理]。色调从 [技术图纸色调] 渐变到 [渲染调色板]。
标题栏：清晰显示“[插入项目名称]”。
整体风格：专业、现代、高信息密度，兼具技术精确性与艺术感染力。8K分辨率。`,
    promptEn: `An expert architectural illustrator's presentation board for a [Insert Style] residence featuring [Insert Key Elements].
Layout Flow (Left to Right):
- Left: Black and white 2D drawings (Site Plan, Floor Plans).
- Center: Elevations and Cross-Section details.
- Right: A photorealistic 3D render at [Insert Time/Lighting].
Aesthetic:
Unified aesthetic blending [Linework Style] with [Texture/Material].
Visual transition from [Technical Drawing Tones] to [Render Color Palette].
Title block reads '[Insert Project Name]'.
High resolution, professional architectural visualization. --ar 16:9 --v 6.0`,
    prompt: "Architectural presentation board, 2D plans to 3D render transition...",
  },

    "dr-98": {
    title: "城市剪纸书签：旅行打卡",
    tags: ["Paper Art", "Bookmark", "Travel", "Cityscape", "Photography", "Creative"],
    promptCn: `【指令】生成一张唯美的旅行打卡摄影图。
核心主体：
一只手（写实、细节丰富）拿着一枚精致的长条形**镂空剪纸书签**。
书签设计：
风格：错综复杂的分层剪纸插画，具有3D景深感和奇幻艺术风格。
内容：书签内部精细地刻画了 **[插入城市名称]** 的标志性地标和符号，部分元素巧妙地“破框而出”（模切效果）。
细节：细腻的纸张纹理，鲜艳的色彩，微缩建筑细节。
背景环境：
场景：真实的 **[插入城市名称]** 天际线和风景的电影感广角镜头。
景深：背景柔和虚化（Bokeh），以突出前景清晰聚焦的书签。
时间与光影：[插入时间段，如：日出/日落/璀璨夜景]，光线充满氛围感（如黄金时刻的辉光或城市灯火）。
构图与氛围：
垂直居中构图，特写手部和书签。
整体氛围怀旧、唯美、充满旅行灵感和诗意。
书签的艺术色彩与现实背景的色调和谐呼应。
画质：8K超高清，照片级真实的手部细节，书签对焦锐利。`,
    promptEn: `A person's hand holding a long, narrow vertical die-cut bookmark against a blurred background.
Bookmark Design: Intricate layered paper-cut illustration with 3D depth and whimsical artistic style. Inside the bookmark frame, iconic landmarks and symbols of **[Insert City Name]** are depicted, with some elements slightly popping out of the edges (die-cut). Delicate textures, vibrant colors, miniature architectural details.
Background: A romantic, cinematic wide shot of the actual **[Insert City Name]** skyline and scenery. Soft bokeh, blurred to emphasize the bookmark.
Lighting & Time: Atmospheric lighting matching **[Insert Time of Day]** (e.g. Golden hour glows, Night with city lights, Bright daylight).
Composition: Close-up on the hand and bookmark, centered vertically. Harmonized colors between the bookmark's art and the real-world background.
Vibe: Nostalgic, aesthetic, travel-inspired, poetic.
Tech Specs: 8k resolution, highly detailed, photorealistic hand, sharp focus on bookmark. --ar 3:4`,
    prompt: "Paper-cut city bookmark held in hand against real background...",
  },

    "dr-99": {
    title: "分屏时尚：标本与真人的对话",
    tags: ["Fashion", "Split Screen", "3D Effect", "Creative Photography", "Surreal", "Reference Based"],
    promptCn: `核心指令：基于上传的人物参考图生成。
垂直分屏创意产品摄影，背景为干净白墙。高分辨率，超写实，商业广告级画质。
上半部分（标本盒）：
一个精致的浅橡木影盒框架悬挂在墙上。里面像艺术博物馆的标本一样，整齐平铺展示着一套特定的服装（需与下方模特穿着一致）。衣物被整齐地固定。周围环绕着小型主题装饰道具：[插入道具，如：干玫瑰、复古香水瓶、丝带]。哑光纸背景上有优雅的书法文字：**[基于画面内容自适应的诗意标题，如“午夜优雅”或“丝绸与秘密”]**。柔和的影棚灯光突出了织物的丰富质感和垂坠感。
下半部分（裸眼3D现实）：
营造出超写实的“裸眼3D”错觉。一个矩形画框边框直接位于顶部盒子的正下方。
**人物锁定：** 画面中的模特必须严格基于**上传的参考图**（面部特征、发型100%还原）。
她穿着与上方标本盒中完全相同的服装。她随意地斜靠在画框的底部边缘——一条腿弯曲，脚放在画框内，另一条腿优雅地伸出到观众的空间中（破框效果）。她的躯干微微后倾，手肘靠在抬起的膝盖上，手指轻轻抚摸锁骨附近的布料。身体形成柔和、性感的S形曲线。她带着平静、会意的微笑直视镜头。
核心对比：
这种充满活力的逼真姿态与上方静止的档案展示形成强烈的对比，在现实与展示之间制造视觉张力。
技术规格：
柔和自然阴影，环境光遮蔽，明亮通透但具有电影感的灯光，8K分辨率，Octane渲染，生动而精致的色调，超精细的织物纹理，浅景深，《Vogue》编辑风格，胶片颗粒感，专业时尚摄影。`,
    promptEn: `Core Instruction: Generate based on the uploaded reference photo.
A vertical split-screen creative product photography composition on a clean white wall background.
Top Section (The Specimen Box):
An exquisite light oak wooden shadow box frame mounted on the wall. Inside, a specific outfit (matching the model below) is displayed as an artistic flat-lay museum specimen. The garments are neatly pinned in place. Surrounding them are small thematic decorative props: [Insert Props]. Elegant calligraphy on the matte paper backdrop reads: **[Adaptive poetic title based on visual content, e.g., "Midnight Elegance"]**. Soft studio lighting accentuates the rich texture and drape of the fabric.
Bottom Section (Naked-Eye 3D Reality):
Creates a hyperrealistic "naked-eye 3D" illusion. A rectangular picture-frame border sits directly beneath the top box.
**Subject Consistency:** The model MUST be the same person as in the uploaded reference photo (strict face identity lock).
She wears the exact same outfit as displayed above. She lounges casually on the bottom edge of the frame—one leg bent inside, the other leg elegantly dangling out into the viewer's space (pop-out). Her torso leans back, creating a sensual S-curve. She looks directly at the camera with a knowing smile.
Contrast: Dynamic lifelike pose vs static archival display.
Tech Specs: Soft natural shadows, cinematic lighting, 8K resolution, Octane Render, ultra-detailed fabric textures, shallow depth of field, Vogue editorial style.`,
    prompt: "Split-screen fashion photography, specimen box vs 3D real model based on reference...",
  },

    "dr-100": {
    title: "圣诞奢华系列产品摄影",
    tags: ["Product Photography", "Christmas", "Luxury", "Commercial", "Festive"],
    promptCn: `【指令】生成一张高端圣诞主题的产品摄影图。
核心主体：
将上传的产品图片作为画面主角，直立于中央。
**严格约束**：产品必须保持形状、尺寸、材质、颜色、标签设计、字体、Logo和所有可见文字**完全不变**。禁止修改、重绘、翻译或风格化产品上的任何文字。
场景与背景：
节日氛围的 [环境类型 - 如：温馨窗边 / 影棚背景 / 雪地景观]。
背景细节包含 [季节元素 - 如：飘落的雪花 / 虚化的圣诞树灯光 / 冬日村庄光斑]。
前景自然点缀 [节日道具 - 如：冬青、丝带、装饰球、串灯]，但绝不遮挡产品主体。
造型细节：
可选：在产品上搭配节日配饰（如：迷你圣诞帽 / 围巾 / 蝴蝶结），需完美贴合且不改变产品结构或遮挡标签。
光影与摄影：
暖金色的圣诞光线与冷色调冬日氛围形成对比。柔和漫射光，温柔的轮廓光增加深度，避免在产品文字上产生眩光或强烈反光。
浅景深，背景柔和虚化。单反相机拍摄，85mm镜头感，专业产品摄影。
画质与氛围：
超高分辨率，照片级真实纹理，高级节日广告美学，构图干净优雅，温馨、奢华、充满节日气息。`,
    promptEn: `A luxury Christmas-themed product photoshoot set in a [COZY / STUDIO / OUTDOOR] environment. Place the uploaded product image as the hero object, standing upright at the center of the frame.
CRITICAL CONSTRAINT: The product must remain EXACTLY unchanged in shape, size, material, colors, label design, typography, logos, and all visible text. Do not modify, recreate, translate, enhance, or stylize any product text.
Scene & Background: A festive [BACKGROUND TYPE] with [SEASONAL DETAILS — e.g. softly falling snow, blurred Christmas tree lights]. Foreground includes subtle holiday accents such as [FESTIVE PROPS — e.g. holly, ribbons, ornaments, fairy lights], placed naturally and never covering the product.
Styling: Optional festive accessory on the product such as [HAT / SCARF / RIBBON], perfectly fitted without altering the product’s structure or covering the label.
Lighting & Camera: Warm golden Christmas lighting contrasted with cool winter tones. Soft diffused light, gentle rim lighting for depth, no glare or harsh reflections on the product text. Shallow depth of field with a softly blurred background. Shot on DSLR, 85mm lens, professional product photography.
Quality & Mood: Ultra-high resolution, photorealistic textures, premium holiday advertising aesthetic, clean editorial composition, cozy, elegant, and festive.`,
    prompt: "Luxury Christmas product photography, strictly unchanged product label...",
  },

    "dr-101": {
    title: "元旦特辑：复古旗袍名媛风",
    tags: ["New Year", "Portrait", "Cheongsam", "Vintage", "Cinema Style"],
    promptCn: `核心指令：基于上传参考图生成，保持精确的面部特征和原始脸部结构，角色完全一致。
主题：元旦特辑-复古旗袍名媛风。
人物造型：
精致工作室立姿肖像。人物肌肤如凝脂般细腻白皙，淡雅妆容，通透感底妆，裸粉唇妆。
服饰：身着传统红色凤凰刺绣旗袍，高开叉设计展现修长美腿，袖口和领口绣满金线祥云纹样。外搭金色薄纱长披风，从肩部垂落至地面。
发型与头饰：典雅的侧边低盘发。装饰金色凤凰步摇、红色珠花和长长的金色流苏，发饰随动作轻微摇曳。一侧留出波浪卷发修饰脸型。
姿态：站在红色地毯上呈经典旗袍站姿，一条腿从开叉处露出。一只手叉腰展现自信，另一只手拿着金色烟斗式长杆烟嘴优雅置于唇边。头部微侧展现精致侧颜，眼神冷艳高贵。
环境背景：
深红色天鹅绒幕布背景。中央悬挂金色“元旦快乐”书法大字和“2026”立体装置。两侧对称布置红色立柱、金色花瓶插梅花、复古留声机。
光影与质感：
伦勃朗光营造经典好莱坞氛围，强调明暗对比和戏剧张力。Phase One拍摄系统，色彩浓烈复古，顶级工作室vintage大片质感。`,
    promptEn: `New Year Special - Vintage Cheongsam Socialite Portrait.
Core: Strict face identity lock based on uploaded reference.
Subject: Elegant standing portrait. Porcelain white skin, translucent natural makeup, nude pink lips.
Outfit: Traditional Red Cheongsam with gold Phoenix embroidery. High slit revealing long legs. Gold cloud patterns on collar/cuffs. Wearing a floor-length sheer Gold Cape.
Hair: Elegant low side bun with retro waves. Adorned with gold phoenix hairpin (Buyao), red bead flowers, and long swaying gold tassels.
Pose: Classic cheongsam stance on a red carpet. One hand on hip, the other holding a long golden cigarette holder to lips. Head tilted, cool and noble expression.
Background: Deep red velvet curtains. Center: Golden calligraphy "Happy New Year" and 3D "2026" text. Sides: Red columns, gold vase with plum blossoms, vintage gramophone.
Lighting & Style: Rembrandt lighting, Classic Hollywood atmosphere, dramatic chiaroscuro. Phase One camera system, rich retro colors, premium vintage studio aesthetic. 8k resolution.`,
    prompt: "Vintage Cheongsam portrait, New Year theme, Hollywood lighting...",
  },

    "dr-102": {
    title: "都市一瞥：笔触下的微缩城市",
    tags: ["Cityscape", "Art Style", "Miniature", "Poster Design", "Creative"],
    promptCn: `【指令】生成一张融合特定画风与微缩城市景观的艺术海报。
城市：[插入城市名称，如：京都/巴塞罗那]
画风：[插入画风，如：浮世绘/毕加索立体主义]
核心构图：
一种合适的艺术工具（例如：画笔、调色刀、触控笔，取决于画风），仿佛正处于创作之中，从左下角向右上角勾勒出一条精致、优雅的曲线。
笔触内部：
笔触之中包含著名的 [插入城市名称] 地标的微缩景观。精选一组标志性地点，融合当地特有的历史与现代建筑、自然元素以及城市生活气息。
整体风格：
结合 [插入画风] 与学院派海报设计。多样化的笔触与痕迹营造出三维空间感，呈现出立体的微缩景观与浅浮雕质感。以该城市的主色调为主，点缀传统美学元素。
视角与背景：
极简的俯视视角。背景为具有纹理的纸张（高质量纤维质感），色调明亮、干净、清新（如纯白、天蓝、浅黄），与画面主体形成清晰对比，大面积留白。
文字排版 (大师级)：
主标题：[城市英文名]（与绘画风格匹配的艺术字体，高对比度）。
副标题：关于城市特质的描述。
装饰文案：河流/地标名称，分段排列，形成节奏感。
底部签名：[基于城市气质生成一句简短的艺术标语或感悟，如 "Eternal City", "Dream in Blue" 等，作为手写风格签名]。
细节控制：
绘画工具的笔尖应在笔触末端（右上角）停住。微缩景观仅存在于笔触内部，细节密集但不显杂乱。8K分辨率，超写实效果。`,
    promptEn: `A creative artistic poster featuring a suitable art tool (e.g., paintbrush, palette knife, stylus) drawing an elegant curve from bottom-left to top-right.
Subject: The brushstroke itself transforms into a 3D miniature landscape of [Insert City Name].
Content: Iconic landmarks, historical and modern architecture, and natural elements of the city, rendered in [Insert Art Style] (e.g., Ukiyo-e, Cubism, Impressionism). The texture looks like a relief or 3D miniature embedded in the paint.
Composition: Minimalist top-down view. The art tool tip rests at the end of the stroke (top-right). Generous negative space around the stroke.
Background: High-quality textured paper (fiber texture), bright and clean color (White/Light Blue/Yellow) creating contrast.
Typography: Master-level layout.
- Main Title: "[City Name]" in an artistic font matching the style.
- Subtitle: A phrase describing the city's atmosphere.
- Decorative Text: Names of districts or landmarks, arranged rhythmically.
- Signature/Slogan at bottom: [Auto-generated short poetic phrase capturing the city's soul, handwritten style].
Style: Fusion of [Insert Art Style] and Academic Poster Design. High detail, photorealistic tool, 8k resolution, HDR. --ar 4:3`,
    prompt: "Artistic poster, paintbrush drawing a 3D miniature city landscape...",
  },
  
};
