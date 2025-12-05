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
              你是一位顶尖的游戏与动漫概念美术设计大师 (Concept Artist),擅长制作详尽的角色设定图(Character Sheet)。
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
              丁字裤/T裤(突出独特的剪裁和极简覆盖)
              丝袜/吊带袜（强调透明度、透肉感与袜口设计）、塑身衣或安全裤等
              所有内衣都应着重于大胆和颠覆性的美学设计。
              • 表情集 (Expression Sheet):
              在角落绘制 3-4 个不同的头部特写,展示不同的情绪(如:诱惑、闷骚、嫌弃、冷漠、害羞、惊讶、失神、或涂口红时的专注神态,选4个即可)。
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
              高度精细的私密用品展示2-3种(例如：瑞典声波吸吮或德国空气脉冲、法式宫廷风加热震动或双马达混合动力、不锈钢纯爱权杖、真丝眼罩、环形口枷、麋鹿皮散鞭等相关用品)。
              重点描绘物品本身的美学、工艺，以及材质（如：硅胶、皮革、金属）和设计特点。
              3. 风格与注释 (Style & Annotations):
              • 画风: 保持高质量的 2D 插画风格或概念设计草图风格，线条干净利落。
              • 背景: 使用米黄色、羊皮纸或浅灰色纹理背景，营造设计手稿的氛围。
              • 文字说明: 在每个拆解元素旁模拟手写注释，简要说明材质（如“柔软蕾丝”、“磨砂皮革”）或品牌/型号暗示（如“常用色号#520”、“定制款”)。
              Workflow (执行逻辑)
              当用户提供一张图片或描述时：
              1. 分析主体的核心特征、穿着风格及潜在性格。
              2. 提取可拆解的一级元素（外套、鞋子、大表情）。
              3. 脑补并设计二级深度元素（她内衣穿什么风格？她包里会装什么口红？她独处时会用什么物品？）。
              4. 生成一张包含所有这些元素的组合图，确保透视准确，光影统一，注释清晰。
              5. 使用中文：英文标记,高清4K HD 输出`,
    promptEn: `A panoramic character concept breakdown sheet, concept art style.
              Center: Full body standing pose of a stylish female character.
              Surrounding details: Deconstructed clothing layers, 4 facial expressions (shy, focused, cold, seductive), close-up of fabric textures and hands.
              Items: Open handbag with scattered cosmetics (lipstick, powder), personal diary, daily accessories.
              Connectors: Hand-drawn arrows connecting items to the character.
              Style: High quality 2D illustration, 2.5D thick painting, clean lines.
              Background: Beige parchment paper texture.
              Text: Handwritten notes in Chinese and English.
              ar 16:9 v 6.0 stylize 250`,
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
              Background: Aged yellow parchment paper. ar 16:9 v 6.0`,
  },
  
  "dr-3_eghzd5": {
    title: "泡泡玛特风格宇航员",
    tags: ["3D Render", "IP Design", "Blind Box", "Cute", "C4D"],
    promptCn: `角色描述:一个可爱的Q版宇航员,大大的头，圆润的身体。
              穿着带有光泽感的白色宇航服，头盔是透明的玻璃材质，里面有一张萌萌的脸。
              材质:PVC 塑料质感，类似泡泡玛特 (Pop Mart) 玩具，表面光滑。
              灯光：柔和的影棚光，边缘光 (Rim light) 勾勒轮廓。
              背景:纯色背景或简单的星球装饰，保持画面干净。`,
    promptEn: `A cute chibi astronaut character, Pop Mart blind box style.
              Big head, round body, wearing glossy white space suit.
              Transparent glass helmet revealing a cute face.
              Material & Lighting:PVC plastic texture, smooth surface, clay render style.
              Soft studio lighting, rim light, high quality 3D render.C4D, Octane render.
              Background:Clean pastel color background, simple planet props.
              ar 3:4  niji 6  style cute`,
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
              Style:Flat vector art,Minimalist, clean lines,Dribbble style.
              Colors:Deep blue background, cyan and white gradients.
              no realistic, 3d, text, shadow  ar 1:1  v 6.0`,
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
              Camera:Macro lens, 100mm,Shallow depth of field, strong bokeh,Tilt-shift effect.
              Lighting:Bioluminescent glow from inside the jar, illuminating a dark wooden table.
              ar 4:5 stylize 250  v 6.0`,
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
              Environment:Golden hour, warm sunlight hitting the white curves, reflection on the water.
              Tech:Ultra wide angle shot,Unreal Engine 5 architectural visualization,
              8k, hyper-realistic,ar 16:9  v 6.0`,
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
              Style:Guochao art style (Modern Chinese Trend),Vector lines, vibrant colors (Red, Gold, Cyan),Dunhuang mural color palette
              Background:Surrounded by auspicious clouds, huge holographic moon in the background.
              ar 3:4  niji 6`,
  },

  "dr-8_s50wbm": {
    title: "朱迪和松果的联名杂志",
    tags: ["branding", "fashion", "photography", "portrait", "typography"],
    promptCn: `一张宽高比为9:16的垂直肖像照片,展示了一张干净、独立的高级光面时尚杂志封面。
              杂志顶部是巨大的黑色粗衬线字体标题“SONGGUO”,散发着奢华品牌的氛围。
              主视觉是《疯狂动物城》朱迪·霍普斯(Judy Hopps)的超写实高级时尚大片。
              她摆出自信、充满张力的超模姿势，手中精致地拿着一颗天然松果。
              朱迪穿着一套极其显眼、夺目且昂贵的高级定制时装（例如带有金色刺绣结构的鲜艳祖母绿丝绸外套），
              服装设计华丽奢华,与松果的视觉元素完全无关。主标题下方是非常简短的副标题:“JUDY x SONGGUO”。
              封面底部角落包含期号“ISSUE 2025”、今天的日期、一个逼真的条形码和价格“$25.00”。
              背景是干净、中性的高级摄影棚渐变背景。电影级影棚布光,极高清晰度,8k分辨率,质感丰富。`,
  },

  "dr-9_xaidyz": {
    title: "城市冰箱贴",
    tags: ["character", "photography"],
    promptEn: `A clear, directly top-down photograph of shanghai landmarks as realistic miniature 3D magnets, 
              arranged neatly in parallel lines and right angles, knolling on a neutral surface. 
              At the top-center, place a souvenir magnet displaying the city name written in Chinese characters, 
              and a handwritten post-it note also written in Chinese characters showing the current temperature and weather conditions.
              Incorporate realistic miniature items necessary for today's weather into the knolling arrangement. 
              No repeats of any object. Aspect ratio 1:1.`,
  },
  
  "dr-10_lxxmv8": {
    title: "一张黑白影棚肖像照",
    tags: ["portrait", "photography"],
    promptCn: `上传的图片是一张黑白影棚肖像照，照片中的年轻女子面无表情地直视镜头。她身穿一件纯黑色圆领毛衣。
              背景为深黑色，左侧采用硬朗的影棚灯光，面部阴影清晰，颧骨高光锐利，皮肤纹理极其细腻，呈现出逼真的照片效果。
              照片使用85mm镜头拍摄,宽高比为3:4。`,
    promptEn: `Black and white studio portrait of the young woman in the uploaded image, 
              looking directly into the camera with a calm, neutral expression. 
              She is wearing a plain black crew-neck sweater. Deep black background with hard-edged studio lighting from the left, 
              crisp facial shadows, sharp highlights on cheekbones, ultra-detailed skin texture, photorealistic, captured with an 85mm lens. 
              3:4 aspect ratio.`,
  },

  "dr-11_skqln5": {
    title: "Q版星巴克迷你概念店",
    tags: ["branding", "character", "fashion", "landscape", "product", "toy"],
    promptCn: `这款3D Q版星巴克迷你概念店设计别具匠心,其外观灵感源自品牌最具代表性的产品和包装（例如，巨型{品牌核心产品，例如，炸鸡桶/汉堡/甜甜圈/烤鸭}）。
              店铺共两层，宽敞的落地玻璃窗将温馨精致的内部装潢尽收眼底：{品牌主色调}主题的装饰、温暖的灯光,以及身着品牌专属服装的忙碌员工。
              可爱的小人偶在街道上漫步、休憩,周围环绕着长椅、路灯和盆栽植物,营造出迷人的都市景象。
              该店铺采用Cinema 4D软件渲染,呈现出微缩城市景观风格，兼具盲盒玩具的精致美感，细节丰富，栩栩如生，柔和的灯光更增添了午后轻松惬意的氛围。
              请参阅随附的角色设定图，了解店内出现的迷你角色。--ar 2:3`,
  },

  "dr-12_peh99r": {
    title: "制作一张由各省美食组成的中国地图照",
    tags: ["food", "map"],
    promptCn: `一张极其详细的、俯拍的中国地图照片，明确包括台湾岛。整个地图完全由各省的标志性美食雕刻和堆砌而成，精确构成地理形状，放在一张质朴的木桌上，光线令人垂涎。
              东北三省（黑龙江、吉林、辽宁）： 堆积的锅包肉、地三鲜和东北大拉皮，点缀着酸菜白肉锅和冻梨，形成一片丰盛的北国美食。
              内蒙古自治区： 广阔的烤全羊和手把肉，点缀着奶豆腐和马奶酒，展现出草原的豪迈。河北省、天津市： 驴肉火烧和煎饼果子，搭配着天津包子和耳朵眼炸糕，体现出北方民俗风味。
              山西省： 各种刀削面、剔尖和猫耳朵，淋上老陈醋和臊子，散发着面食的香气。山东省： 煎饼卷大葱、德州扒鸡和九转大肠，搭配着海鲜大餐，展现出齐鲁大地的丰饶。
              河南省： 胡辣汤、烩面和开封灌汤包，点缀着道口烧鸡，体现出中原的淳朴。湖北省、湖南省： 热干面、三鲜豆皮和臭豆腐，搭配着剁椒鱼头和口味虾，展现出荆楚大地的香辣。
              江西省： 瓦罐汤、拌粉和粉蒸肉，点缀着鄱阳湖大闸蟹，体现出赣鄱大地的特色。安徽省： 臭鳜鱼、毛豆腐和黄山烧饼，搭配着淮南牛肉汤，展现出徽州文化的韵味。
              江苏省、浙江省： 狮子头、盐水鸭和东坡肉，搭配着西湖醋鱼和龙井虾仁，体现出江南水乡的精致。福建省： 佛跳墙、沙茶面和海蛎煎，点缀着土笋冻和烧肉粽，展现出闽南风味的独特。
              广西壮族自治区： 桂林米粉、螺蛳粉和老友粉，搭配着百色芒果和荔浦芋头，体现出岭南风情的浓郁。海南省： 文昌鸡、东山羊和和乐蟹，点缀着椰子饭和清补凉，展现出热带岛屿的特色。
              重庆市： 火锅、小面和酸辣粉，搭配着毛血旺和辣子鸡，体现出巴渝大地的麻辣。贵州省、云南省： 酸汤鱼、肠旺面和过桥米线，搭配着汽锅鸡和鲜花饼，展现出西南少数民族风情的丰富。
              西藏自治区： 酥油茶、糌粑和牦牛肉，点缀着青稞酒，体现出高原的淳朴。陕西省、甘肃省、宁夏回族自治区、青海省： 肉夹馍、凉皮、兰州拉面、手抓羊肉和酿皮，搭配着甜醅子和酸奶，展现出西北大漠的粗犷。
              四川省： 沸腾的、红色的麻辣火锅海洋，里面有辣椒和花椒。广东省： 蒸笼里的点心（虾饺、烧卖）和蜜汁叉烧拼凑而成。北京市：片好的烤鸭和荷叶饼层叠而成。
              新疆维吾尔自治区： 巨大的烤馕饼和羊肉串组成。上海市： 一堆精致的小笼包。台湾岛： 一堆油光发亮的卤肉饭。  ar 16:9`,
  },

  "dr-13_sluruu": {
    title: "3X3网格图片，9种服装风格和背景",
    tags: ["fashion", "portrait", "photography"],
    promptCn: `基于[上传人物图片]并保持其面部特征绝对不变，生成一张高质量的3x3九宫格拼贴照片，九个独立画面分别展示该人物身着：
              飘逸粉蓝唐代汉服（古典园林背景）、干练深蓝空姐制服配丝巾（现代机场航站楼背景）、墨绿刺绣丝绸旗袍（复古上海风情室内背景）、
              威武黑金锦衣卫飞鱼服配绣春刀（黄昏故宫背景）、洁白现代护士服（明亮温馨医院背景）、典雅酒红织锦唐装（传统茶楼庭院背景）、
              青春海军蓝JK制服百褶裙（樱花盛开校园背景）、帅气皮革飞行员夹克制服戴墨镜（机库飞机旁背景）以及时尚米色风衣休闲装（现代都市街景背景），
              整体画面要求电影感光影、细节精致且色彩和谐统一。宽高比9:16`,
  },


  "dr-14_seialm": {
    title: "城市动态天气卡片",
    tags: ["fashion", "portrait", "photography"],
    promptCn: `以清晰的45°俯视视角，呈现城市地标的 3D Q版微缩场景，画面竖版（9:16）居中构图，建筑置于画面中央，突出微缩模型精准细致的立体美感。 画面材质细腻温润，体现真实的PBR质感与柔和逼真的光影效果。 
              整体构图简洁干净、视觉统一，巧妙在城市建筑中融入天气元素，动态天气效果与城市景观融合互动，营造身临其境的天气视觉氛围。 
              文字语言和输入的城市名称语言保持一致 背景选用纯色、柔和的色调，突出主体内容，整体风格清新舒适。 
              图片正上方显示醒目的代表天气的图标，图标下方是日期（超小字）、温度范围（中号），图标上方是城市名（大号） 天气信息无背景，可以和城市建筑重叠融合 
              请联网获取输入的城市的当前天气信息后生成   城市名称：【云南】`,
    promptEn: ` Present a clear, 45° top-down view of a vertical (9:16) isometric miniature 3D cartoon scene, highlighting iconic landmarks centered in the composition to showcase precise and delicate modeling.
              The scene features soft, refined textures with realistic PBR materials and gentle, lifelike lighting and shadow effects. Weather elements are creatively integrated into the urban architecture, establishing a dynamic interaction between the city's landscape and atmospheric conditions, creating an immersive weather ambiance.
              Use a clean, unified composition with minimalistic aesthetics and a soft, solid-colored background that highlights the main content. The overall visual style is fresh and soothing.
              Display a prominent weather icon at the top-center, with the date (x-small text) and temperature range (medium text) beneath it. The city name (large text) is positioned directly above the weather icon. The weather information has no background and can subtly overlap with the buildings.
              The text should match the input city's native language.
              Please retrieve current weather conditions for the specified city before rendering.
              City name:【云南】`,
  },
  
  "dr-15_diu1jk": {
    title: "多彩剪贴簿海报风格",
    tags: ["fashion", "landscape", "photography", "nature", "photography", "portrait", "poster", "retro"],
    promptCn: `facelock_identity："true",
    “准确率”： “100%”，
    场景：“色彩缤纷的Y2K剪贴簿海报美学，鲜艳的贴纸，多个人物穿着相同的服装和发型，摆出不同的姿势，并配以剪纸，色彩斑斓的笔触和线条，无框拼贴风格。包含：手指比出心形的特写镜头，全身蹲姿托腮手持白色拍立得相机，中景吹着粉色泡泡糖抚摸脸颊，中景抱着猫优雅微笑，优雅地坐着眨着一只眼睛比出和平手势，以及手持雏菊的中景。全息纹理、柔和的渐变色、闪光点缀、趣味涂鸦、杂志剪贴图案，布局看似混乱却又平衡，极具艺术性和视觉吸引力。”
    主主题：{
    “描述”：“一位年轻的千禧年风格女性，是剪贴簿拼贴画的中心焦点。”
    "style_pose": "俏皮自信的Y2K姿势——微微侧身扭胯，一只手拿着镜头光晕钥匙扣，脸朝向镜头，表情可爱又酷，微微嘟嘴，散发出2000年代初期的抓拍氛围。"
    全套服装”： {
    上衣：浅色短款宽松毛衣，带有刺绣贴片。
    “下装”：“粉色裙子配白色腰带”，
    “袜子”：“白色短袜，带有彩色粉彩条纹”，
    “鞋子”：“白色运动鞋”，
    “配件”： [
    “彩色塑料手镯”
    “厚重的彩色戒指”，
    “闪亮的肚链”
    “发型”：
    "type": "Y2K 半上半下",
    “细节”：“粉彩花朵发夹，前额的细碎发丝，深棕色波浪卷发，发梢带有泡泡糖粉色，2000 年代初期的标志性造型。”
    additional_visuals：
    “心形、星星和蝴蝶贴纸”
    “复古闪光”，
    “宝丽来相框”，
    “霓虹轮廓”，
    “涂鸦边框”
    “杂志剪报上的文字：‘太可爱了！’、‘199X！’、‘少女心’”
    “柔和的灯光”，
    “光泽梦幻的复古光芒”，
    “超美剪贴簿布局”
    摄影渲染：{
    "color_grading": "电影霓虹 Y2K"
    “lighting”: “柔和闪光灯照明”,“skin_texture”: “光滑光泽表面”,
    “渲染”：“高细节超写实Y2K剪贴簿色调”，
    “质量”: “8K”
    “构图”：“完美平衡且富有艺术性”
    negative_prompt": "不追求打破 Y2K 美学的写实效果，不穿 2020 年代的现代服装，不做凌乱的构图，不模糊的脸，不扭曲的手，不添加额外的肢体，不扭曲脸部，不降低分辨率，不添加颗粒感，不降低色彩饱和度，不添加水印，不添加 AI 伪影"`,
    promptEn: `facelock_identity": "true",
    "accuracy": "100%",
    scene"Colorful Y2K scrapbook poster aesthetic, vibrant stickers, multiple subjects wearing the same outfit and hairstyle with different poses and cutouts, colorful strokes and lines, frameless collage style. Includes: close-up shot with heart-shape fingers, full-body squatting pose supporting chin while holding a white polaroid camera, mid-shot touching cheek while blowing pink bubblegum, mid-shot smiling elegantly while holding a cat ,seated elegantly with one eye winking and peace sign, and mid-shot holding daisy flowers. Holographic textures, pastel gradients, glitter accents, playful doodles, magazine cut-out graphics, chaotic yet balanced layout, extremely artistic and visually engaging",
    main_subject": {
    "description": "A young Y2K-styled woman as the main focus in the center of the scrapbook collage.",
    "style_pose": "Playful and confident Y2K pose — slight side hip pop, one hand holding a lens-flare keychain, face toward the camera with a cute-cool expression, slight pout, candid early-2000s photo vibe."
    outfit": {
    "top": "Cropped oversized sweater in pastel color with embroidered patches",
    "bottom": "pastel skirt with a white belt",
    "socks": "White ankle socks with colorful pastel stripes",
    "shoes": "white sneakers",
    "accessories": [
    "Colorful plastic bracelets",
    "Chunky colorful rings",
    "Sparkling belly chain",
    "hairstyle":
    "type": "Y2K half-up half-down",
    "details": "Pastel flowers clips,thin front tendrils, wavy dark brown hair with bubblegum-pink tint on the lower strands, iconic early-2000s look."
    additional_visuals":
    "Heart, star, and butterfly stickers",
    "Retro sparkles",
    "Polaroid frames",
    "Neon outlines",
    "Doodle borders",
    "Magazine cutout texts: 'SO CUTE!', '199X!', 'GIRL VIBES'",
    "Pastel lighting",
    "Glossy dreamy retro glow",
    "Ultra-aesthetic scrapbook layout"
    photography_rendering": {
    "color_grading": "Cinematic neon Y2K",
    "lighting": "Soft flash lighting","skin_texture": "Smooth glossy finish",
    "rendering": "High-detail hyperrealistic Y2K scrapbook tone",
    "quality": "8K",
    "composition": "Perfectly balanced and artistic"
    negative_prompt": "no realism that breaks Y2K aesthetic, no modern 2020s clothing, no messy composition, no blurry face, no distorted hands, no extra limbs, no face warping, no low resolution, no grain, no muted colors, no watermark, no AI artifacts"`,
  },

};
