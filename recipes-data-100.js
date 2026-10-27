// 100+道菜完整数据 - 涵盖全国各地特色菜
// 每道菜都配有B站搜索链接

const RECIPES_DATA = [
  // ========== 基础家常菜（25道）==========
  {
    name: '番茄炒蛋',
    category: '炒菜',
    region: '家常菜',
    ingredients: ['番茄', '鸡蛋', '葱'],
    desc: '经典国民家常菜，番茄酸甜多汁包裹嫩滑鸡蛋，简单快手，配米饭一绝。',
    search_url: 'https://search.bilibili.com/all?keyword=番茄炒蛋 王刚'
  },
  {
    name: '番茄蛋汤',
    category: '汤羹',
    region: '家常菜',
    ingredients: ['番茄', '鸡蛋', '葱'],
    desc: '酸甜开胃的经典清汤，番茄煮出红汤后淋入蛋花，清爽解腻，老少皆宜。',
    search_url: 'https://search.bilibili.com/all?keyword=番茄蛋汤 教程'
  },
  {
    name: '酸辣土豆丝',
    category: '炒菜',
    region: '家常菜',
    ingredients: ['土豆', '青椒', '辣椒', '蒜'],
    desc: '土豆切丝爆炒，酸辣脆爽，是考验刀工和火候的经典下饭菜。',
    search_url: 'https://search.bilibili.com/all?keyword=酸辣土豆丝 王刚'
  },
  {
    name: '地三鲜',
    category: '炒菜',
    region: '家常菜',
    ingredients: ['土豆', '茄子', '青椒'],
    desc: '东北名菜，土豆茄子青椒三样素菜过油后爆炒，鲜香浓郁比肉还好吃。',
    search_url: 'https://search.bilibili.com/all?keyword=地三鲜 教程'
  },
  {
    name: '红烧排骨',
    category: '炖菜',
    region: '家常菜',
    ingredients: ['排骨', '姜', '蒜', '八角'],
    desc: '排骨先焯后炒糖色，加酱油慢炖至骨酥肉烂，色泽红亮，咸甜适口。',
    search_url: 'https://search.bilibili.com/all?keyword=红烧排骨 王刚'
  },
  {
    name: '冬瓜排骨汤',
    category: '汤羹',
    region: '家常菜',
    ingredients: ['冬瓜', '排骨', '姜'],
    desc: '清淡鲜美的滋补汤品，排骨炖出浓郁汤底，冬瓜清甜入口即化，夏季消暑佳品。',
    search_url: 'https://search.bilibili.com/all?keyword=冬瓜排骨汤 教程'
  },
  {
    name: '玉米排骨汤',
    category: '汤羹',
    region: '家常菜',
    ingredients: ['玉米', '排骨', '胡萝卜'],
    desc: '玉米和胡萝卜的清甜融入排骨汤中，汤色金黄，鲜甜浓郁，营养满分。',
    search_url: 'https://search.bilibili.com/all?keyword=玉米排骨汤 教程'
  },
  {
    name: '鱼香肉丝',
    category: '炒菜',
    region: '川菜',
    ingredients: ['猪肉', '胡萝卜', '青椒', '木耳'],
    desc: '川菜经典，虽名鱼香实无鱼，酸甜微辣，肉丝嫩滑配菜脆爽，下饭神器。',
    search_url: 'https://search.bilibili.com/all?keyword=鱼香肉丝 王刚'
  },
  {
    name: '宫保鸡丁',
    category: '炒菜',
    region: '川菜',
    ingredients: ['鸡胸肉', '花生', '辣椒', '葱'],
    desc: '鸡肉丁滑嫩、花生酥脆，荔枝味酸甜中带微辣，是一道闻名中外的川菜。',
    search_url: 'https://search.bilibili.com/all?keyword=宫保鸡丁 王刚'
  },
  {
    name: '麻婆豆腐',
    category: '炒菜',
    region: '川菜',
    ingredients: ['豆腐', '猪肉', '辣椒', '花椒'],
    desc: '麻辣鲜香嫩烫，豆腐嫩而不碎，肉末酥香，花椒麻味悠长，米饭杀手。',
    search_url: 'https://search.bilibili.com/all?keyword=麻婆豆腐 王刚'
  },
  {
    name: '红烧肉',
    category: '炖菜',
    region: '家常菜',
    ingredients: ['五花肉', '八角', '姜', '蒜'],
    desc: '五花肉切块焯水炒糖色，文火慢炖至肥而不腻入口即化，色泽红润诱人。',
    search_url: 'https://search.bilibili.com/all?keyword=红烧肉 王刚'
  },
  {
    name: '清炒西兰花',
    category: '炒菜',
    region: '家常菜',
    ingredients: ['西兰花', '蒜'],
    desc: '西兰花焯水后蒜蓉爆炒，翠绿爽脆，做法简单却营养丰富，餐桌常备素菜。',
    search_url: 'https://search.bilibili.com/all?keyword=蒜蓉西兰花 教程'
  },
  {
    name: '紫菜蛋花汤',
    category: '汤羹',
    region: '家常菜',
    ingredients: ['紫菜', '鸡蛋', '葱'],
    desc: '最快手的汤品之一，紫菜入锅即熟，淋入蛋花点缀葱花，清淡鲜美省时省力。',
    search_url: 'https://search.bilibili.com/all?keyword=紫菜蛋花汤 教程'
  },
  {
    name: '酸辣汤',
    category: '汤羹',
    region: '家常菜',
    ingredients: ['豆腐', '鸡蛋', '木耳', '辣椒'],
    desc: '酸辣开胃的经典中式浓汤，豆腐嫩木耳脆蛋花飘，醋香扑鼻，暖身驱寒。',
    search_url: 'https://search.bilibili.com/all?keyword=酸辣汤 教程'
  },
  {
    name: '菌菇豆腐汤',
    category: '汤羹',
    region: '家常菜',
    ingredients: ['菌菇', '豆腐', '葱'],
    desc: '菌菇的鲜美与豆腐的嫩滑完美结合，清淡却不寡味，营养丰富的素汤之选。',
    search_url: 'https://search.bilibili.com/all?keyword=菌菇豆腐汤 教程'
  },
  {
    name: '白菜炖粉条',
    category: '炖菜',
    region: '东北菜',
    ingredients: ['白菜', '猪肉', '粉条'],
    desc: '东北经典炖菜，白菜清甜粉条Q弹，猪肉增香，一锅炖出满满家的味道。',
    search_url: 'https://search.bilibili.com/all?keyword=白菜炖粉条 教程'
  },
  {
    name: '红烧茄子',
    category: '炒菜',
    region: '家常菜',
    ingredients: ['茄子', '蒜', '葱'],
    desc: '茄子过油后红烧，酱香浓郁软糯入味，蒜香点睛，是素食中的米饭搭档。',
    search_url: 'https://search.bilibili.com/all?keyword=红烧茄子 王刚'
  },
  {
    name: '黄瓜炒蛋',
    category: '炒菜',
    region: '家常菜',
    ingredients: ['黄瓜', '鸡蛋', '蒜'],
    desc: '清脆黄瓜片与嫩滑鸡蛋同炒，清淡爽口，是一道快手又健康的家常小炒。',
    search_url: 'https://search.bilibili.com/all?keyword=黄瓜炒鸡蛋 教程'
  },
  {
    name: '土豆炖牛肉',
    category: '炖菜',
    region: '家常菜',
    ingredients: ['土豆', '牛肉', '胡萝卜', '洋葱'],
    desc: '经典搭配，牛肉软烂土豆绵密，胡萝卜增甜洋葱添香，汤汁浓稠拌饭极佳。',
    search_url: 'https://search.bilibili.com/all?keyword=土豆炖牛肉 教程'
  },
  {
    name: '凉拌黄瓜',
    category: '凉拌',
    region: '家常菜',
    ingredients: ['黄瓜', '蒜', '辣椒'],
    desc: '拍黄瓜是最经典的凉菜，蒜泥醋汁调味，酸辣脆爽，夏日开胃解暑必备。',
    search_url: 'https://search.bilibili.com/all?keyword=凉拌黄瓜 教程'
  },
  {
    name: '清蒸鱼',
    category: '炒菜',
    region: '粤菜',
    ingredients: ['鱼', '姜', '葱'],
    desc: '鲜活鱼清蒸最显本味，姜丝葱丝去腥提鲜，蒸鱼豉油点睛，鱼肉鲜嫩如豆腐。',
    search_url: 'https://search.bilibili.com/all?keyword=清蒸鱼 教程'
  },
  {
    name: '蒜蓉菠菜',
    category: '炒菜',
    region: '家常菜',
    ingredients: ['菠菜', '蒜'],
    desc: '菠菜快速焯水后蒜蓉爆炒，去除草酸保留翠绿，简单调味即是营养素菜。',
    search_url: 'https://search.bilibili.com/all?keyword=蒜蓉菠菜 教程'
  },
  {
    name: '红烧鸡腿',
    category: '炖菜',
    region: '家常菜',
    ingredients: ['鸡腿', '姜', '蒜', '八角'],
    desc: '鸡腿划刀腌制后红烧，酱汁渗透入骨，肉质软烂入味，孩子最爱的大口吃菜。',
    search_url: 'https://search.bilibili.com/all?keyword=红烧鸡腿 王刚'
  },
  {
    name: '回锅肉',
    category: '炒菜',
    region: '川菜',
    ingredients: ['五花肉', '青椒', '蒜'],
    desc: '五花肉先煮后切片回锅爆炒，搭配青椒和豆瓣酱，肥而不腻香辣下饭。',
    search_url: 'https://search.bilibili.com/all?keyword=回锅肉 王刚'
  },
  {
    name: '洋葱炒蛋',
    category: '炒菜',
    region: '家常菜',
    ingredients: ['洋葱', '鸡蛋'],
    desc: '洋葱的天然甜味与鸡蛋完美搭配，做法极简单却美味，几分钟搞定的快手菜。',
    search_url: 'https://search.bilibili.com/all?keyword=洋葱炒鸡蛋 教程'
  },

  // ========== 川菜（15道）==========
  {
    name: '水煮鱼',
    category: '炒菜',
    region: '川菜',
    ingredients: ['鱼', '豆芽', '辣椒', '花椒'],
    desc: '麻辣鲜香，鱼片嫩滑如丝，红油翻滚花椒香，是川菜中的硬菜代表。',
    search_url: 'https://search.bilibili.com/all?keyword=水煮鱼 王刚'
  },
  {
    name: '毛血旺',
    category: '炒菜',
    region: '川菜',
    ingredients: ['鸭血', '毛肚', '豆芽', '辣椒'],
    desc: '重庆名菜，麻辣火锅风味，鸭血嫩滑毛肚脆爽，配料丰富，重口味最爱。',
    search_url: 'https://search.bilibili.com/all?keyword=毛血旺 教程'
  },
  {
    name: '夫妻肺片',
    category: '凉拌',
    region: '川菜',
    ingredients: ['牛肉', '牛肚', '辣椒油', '花椒'],
    desc: '凉菜经典，牛肉牛杂切薄片，红油麻辣鲜香，是川菜冷盘的代表作。',
    search_url: 'https://search.bilibili.com/all?keyword=夫妻肺片 王刚'
  },
  {
    name: '酸菜鱼',
    category: '炒菜',
    region: '川菜',
    ingredients: ['鱼', '酸菜', '辣椒', '姜'],
    desc: '酸辣开胃，鱼肉鲜嫩，酸菜提味解腻，汤汁浓郁下饭，家庭聚餐必点。',
    search_url: 'https://search.bilibili.com/all?keyword=酸菜鱼 王刚'
  },
  {
    name: '口水鸡',
    category: '凉拌',
    region: '川菜',
    ingredients: ['鸡肉', '辣椒油', '花椒', '蒜'],
    desc: '麻辣凉菜，鸡肉紧实有嚼劲，红油香辣让人口水直流，故名口水鸡。',
    search_url: 'https://search.bilibili.com/all?keyword=口水鸡 教程'
  },
  {
    name: '辣子鸡',
    category: '炒菜',
    region: '川菜',
    ingredients: ['鸡肉', '辣椒', '花椒', '蒜'],
    desc: '干香麻辣，鸡块外酥里嫩，干辣椒堆成山，是川菜中的狠角色。',
    search_url: 'https://search.bilibili.com/all?keyword=辣子鸡 王刚'
  },
  {
    name: '蒜泥白肉',
    category: '凉拌',
    region: '川菜',
    ingredients: ['五花肉', '蒜', '辣椒油'],
    desc: '清爽解腻，肥而不腻的白肉片配蒜泥红油，是夏季下酒的绝佳凉菜。',
    search_url: 'https://search.bilibili.com/all?keyword=蒜泥白肉 教程'
  },
  {
    name: '鱼香茄子',
    category: '炒菜',
    region: '川菜',
    ingredients: ['茄子', '猪肉', '辣椒', '蒜'],
    desc: '茄子软糯吸汁，鱼香味浓郁，酸甜微辣，是川菜中的素菜之王。',
    search_url: 'https://search.bilibili.com/all?keyword=鱼香茄子 王刚'
  },
  {
    name: '水煮肉片',
    category: '炒菜',
    region: '川菜',
    ingredients: ['猪肉', '白菜', '辣椒', '花椒'],
    desc: '麻辣鲜嫩，肉片滑嫩，红油翻滚，花椒麻香，下饭神器中的经典。',
    search_url: 'https://search.bilibili.com/all?keyword=水煮肉片 王刚'
  },
  {
    name: '青椒肉丝',
    category: '炒菜',
    region: '家常菜',
    ingredients: ['青椒', '猪肉', '蒜'],
    desc: '家常快手菜，肉丝嫩滑，青椒清香，简单调味即可，清淡下饭。',
    search_url: 'https://search.bilibili.com/all?keyword=青椒肉丝 教程'
  },
  {
    name: '麻辣香锅',
    category: '炒菜',
    region: '川菜',
    ingredients: ['五花肉', '虾', '菌菇', '辣椒'],
    desc: '配料丰富随意搭配，麻辣香浓，锅气十足，年轻人聚餐必点。',
    search_url: 'https://search.bilibili.com/all?keyword=麻辣香锅 教程'
  },
  {
    name: '泡椒凤爪',
    category: '凉拌',
    region: '川菜',
    ingredients: ['鸡爪', '泡椒', '蒜', '姜'],
    desc: '酸辣开胃，凤爪软糯入味，泡椒汁酸爽，是追剧下酒必备小吃。',
    search_url: 'https://search.bilibili.com/all?keyword=泡椒凤爪 教程'
  },
  {
    name: '钵钵鸡',
    category: '凉拌',
    region: '川菜',
    ingredients: ['鸡肉', '藕片', '辣椒油', '花椒'],
    desc: '成都街头小吃，冷串串浸泡在麻辣汤汁中，口感丰富，越吃越上瘾。',
    search_url: 'https://search.bilibili.com/all?keyword=钵钵鸡 教程'
  },
  {
    name: '川味红油抄手',
    category: '主食',
    region: '川菜',
    ingredients: ['猪肉', '馄饨皮', '辣椒油', '蒜'],
    desc: '馄饨皮薄馅嫩，红油麻辣鲜香，是成都早餐的经典选择。',
    search_url: 'https://search.bilibili.com/all?keyword=红油抄手 教程'
  },
  {
    name: '担担面',
    category: '主食',
    region: '川菜',
    ingredients: ['面条', '猪肉末', '芝麻酱', '辣椒油'],
    desc: '麻辣鲜香，芝麻酱浓郁，肉末酥香，是川渝地区的传统面食。',
    search_url: 'https://search.bilibili.com/all?keyword=担担面 教程'
  },

  // ========== 粤菜（12道）==========
  {
    name: '白切鸡',
    category: '凉拌',
    region: '粤菜',
    ingredients: ['鸡肉', '姜', '葱'],
    desc: '原汁原味，皮滑肉嫩，姜葱调味，最能体现食材本味的粤菜代表。',
    search_url: 'https://search.bilibili.com/all?keyword=白切鸡 教程'
  },
  {
    name: '煲仔饭',
    category: '主食',
    region: '粤菜',
    ingredients: ['米', '腊肠', '鸡蛋'],
    desc: '锅巴香脆，腊味浓郁，米饭粒粒分明，是广式快餐的灵魂。',
    search_url: 'https://search.bilibili.com/all?keyword=煲仔饭 教程'
  },
  {
    name: '干炒牛河',
    category: '主食',
    region: '粤菜',
    ingredients: ['河粉', '牛肉', '豆芽', '葱'],
    desc: '河粉顺滑，牛肉嫩滑，火候掌握是关键，粤式炒粉的经典。',
    search_url: 'https://search.bilibili.com/all?keyword=干炒牛河 教程'
  },
  {
    name: '清蒸鲈鱼',
    category: '蒸菜',
    region: '粤菜',
    ingredients: ['鲈鱼', '姜', '葱'],
    desc: '鱼肉鲜嫩，清淡养生，豉油提鲜，粤菜中的清蒸代表作。',
    search_url: 'https://search.bilibili.com/all?keyword=清蒸鲈鱼 教程'
  },
  {
    name: '广式煲汤',
    category: '汤羹',
    region: '粤菜',
    ingredients: ['鸡肉', '药材', '蜜枣'],
    desc: '老火靓汤，养生滋补，汤清味浓，广东人餐桌必备。',
    search_url: 'https://search.bilibili.com/all?keyword=广式煲汤 教程'
  },
  {
    name: '叉烧肉',
    category: '烤箱',
    region: '粤菜',
    ingredients: ['猪肉', '蜂蜜', '酱油'],
    desc: '蜜汁甜香，色泽红亮，肥瘦相间，是烧腊中的经典。',
    search_url: 'https://search.bilibili.com/all?keyword=叉烧肉 教程'
  },
  {
    name: '蚝油生菜',
    category: '炒菜',
    region: '粤菜',
    ingredients: ['生菜', '蚝油', '蒜'],
    desc: '简单清爽，生菜脆嫩，蚝油提鲜，粤式素菜的代表。',
    search_url: 'https://search.bilibili.com/all?keyword=蚝油生菜 教程'
  },
  {
    name: '广式烧鸭',
    category: '烤箱',
    region: '粤菜',
    ingredients: ['鸭肉', '五香粉', '蜂蜜'],
    desc: '皮脆肉嫩，香味扑鼻，肥而不腻，烧腊店的招牌菜。',
    search_url: 'https://search.bilibili.com/all?keyword=广式烧鸭 教程'
  },
  {
    name: '艇仔粥',
    category: '主食',
    region: '粤菜',
    ingredients: ['米', '鱼片', '花生', '姜'],
    desc: '鲜香滑嫩，配料丰富，粥底绵滑，是广式粥品的经典。',
    search_url: 'https://search.bilibili.com/all?keyword=艇仔粥 教程'
  },
  {
    name: '虾饺',
    category: '蒸菜',
    region: '粤菜',
    ingredients: ['虾', '猪肉', '饺子皮'],
    desc: '晶莹剔透，鲜虾饱满，皮薄馅嫩，广式早茶必点。',
    search_url: 'https://search.bilibili.com/all?keyword=虾饺 教程'
  },
  {
    name: '豉汁蒸排骨',
    category: '蒸菜',
    region: '粤菜',
    ingredients: ['排骨', '豆豉', '蒜'],
    desc: '豉香浓郁，排骨软嫩，原汁原味，粤式蒸菜的代表。',
    search_url: 'https://search.bilibili.com/all?keyword=豉汁蒸排骨 教程'
  },
  {
    name: '盐焗鸡',
    category: '烤箱',
    region: '粤菜',
    ingredients: ['鸡肉', '粗盐', '姜'],
    desc: '皮脆肉嫩，咸香可口，客家名菜，独特烹饪方式。',
    search_url: 'https://search.bilibili.com/all?keyword=盐焗鸡 教程'
  },

  // ========== 东北菜（10道）==========
  {
    name: '锅包肉',
    category: '炒菜',
    region: '东北菜',
    ingredients: ['猪肉', '土豆淀粉', '糖', '醋'],
    desc: '外酥里嫩，酸甜适口，金黄酥脆，东北硬菜代表。',
    search_url: 'https://search.bilibili.com/all?keyword=锅包肉 王刚'
  },
  {
    name: '小鸡炖蘑菇',
    category: '炖菜',
    region: '东北菜',
    ingredients: ['鸡肉', '蘑菇', '粉条', '八角'],
    desc: '鸡肉软烂，蘑菇鲜香，汤汁浓郁，东北炖菜之魂。',
    search_url: 'https://search.bilibili.com/all?keyword=小鸡炖蘑菇 教程'
  },
  {
    name: '杀猪菜',
    category: '炖菜',
    region: '东北菜',
    ingredients: ['猪肉', '血肠', '酸菜', '五花肉'],
    desc: '血肠酸菜，东北年味，一锅炖出满满乡愁。',
    search_url: 'https://search.bilibili.com/all?keyword=杀猪菜 教程'
  },
  {
    name: '得莫利炖鱼',
    category: '炖菜',
    region: '东北菜',
    ingredients: ['鲤鱼', '粉条', '豆腐', '五花肉'],
    desc: '鱼肉鲜嫩，粉条滑爽，汤汁浓郁，哈尔滨名菜。',
    search_url: 'https://search.bilibili.com/all?keyword=得莫利炖鱼 教程'
  },
  {
    name: '溜肉段',
    category: '炒菜',
    region: '东北菜',
    ingredients: ['猪肉', '土豆淀粉', '酱油', '蒜'],
    desc: '外焦里嫩，酱香浓郁，肉质软嫩，东北家常硬菜。',
    search_url: 'https://search.bilibili.com/all?keyword=溜肉段 教程'
  },
  {
    name: '酸菜炖粉条',
    category: '炖菜',
    region: '东北菜',
    ingredients: ['酸菜', '五花肉', '粉条', '血肠'],
    desc: '酸菜爽口，血肠软糯，粉条滑嫩，正宗东北味道。',
    search_url: 'https://search.bilibili.com/all?keyword=酸菜炖粉条 教程'
  },
  {
    name: '猪肉炖粉条',
    category: '炖菜',
    region: '东北菜',
    ingredients: ['五花肉', '粉条', '白菜', '八角'],
    desc: '肉香粉糯，汤汁浓郁，一锅炖出东北冬日温暖。',
    search_url: 'https://search.bilibili.com/all?keyword=猪肉炖粉条 教程'
  },
  {
    name: '拔丝地瓜',
    category: '炒菜',
    region: '东北菜',
    ingredients: ['地瓜', '糖'],
    desc: '甜品经典，金丝缠绕，外脆内软，趁热拔丝最美。',
    search_url: 'https://search.bilibili.com/all?keyword=拔丝地瓜 教程'
  },
  {
    name: '东北乱炖',
    category: '炖菜',
    region: '东北菜',
    ingredients: ['五花肉', '土豆', '茄子', '豆角'],
    desc: '大杂烩，什么都往锅里扔，越炖越香，东北人的豪爽。',
    search_url: 'https://search.bilibili.com/all?keyword=东北乱炖 教程'
  },
  {
    name: '铁锅炖大鹅',
    category: '炖菜',
    region: '东北菜',
    ingredients: ['鹅肉', '土豆', '八角', '酱油'],
    desc: '鹅肉软烂，土豆绵密，酱香浓郁，东北特色硬菜。',
    search_url: 'https://search.bilibili.com/all?keyword=铁锅炖大鹅 教程'
  },

  // ========== 西北菜（8道）==========
  {
    name: '大盘鸡',
    category: '炒菜',
    region: '西北菜',
    ingredients: ['鸡肉', '土豆', '青椒', '辣椒'],
    desc: '新疆名菜，麻辣鲜香，鸡肉软烂，土豆入味，配皮带面绝了。',
    search_url: 'https://search.bilibili.com/all?keyword=大盘鸡 教程'
  },
  {
    name: '羊肉泡馍',
    category: '主食',
    region: '西北菜',
    ingredients: ['羊肉', '馍', '粉丝', '香菜'],
    desc: '陕西名吃，汤浓肉烂，馍香汤鲜，掰馍是一种仪式感。',
    search_url: 'https://search.bilibili.com/all?keyword=羊肉泡馍 教程'
  },
  {
    name: '手抓羊肉',
    category: '炖菜',
    region: '西北菜',
    ingredients: ['羊肉', '洋葱', '孜然'],
    desc: '原汁原味，肉质鲜嫩，用手抓着吃最豪爽，西北特色。',
    search_url: 'https://search.bilibili.com/all?keyword=手抓羊肉 教程'
  },
  {
    name: '肉夹馍',
    category: '主食',
    region: '西北菜',
    ingredients: ['猪肉', '馍', '青椒'],
    desc: '陕西特色，肉烂汁浓，馍香酥脆，是西安街头的灵魂美食。',
    search_url: 'https://search.bilibili.com/all?keyword=肉夹馍 教程'
  },
  {
    name: '羊肉串',
    category: '烤箱',
    region: '西北菜',
    ingredients: ['羊肉', '孜然', '辣椒粉'],
    desc: '孜然飘香，外焦里嫩，撸串必点，新疆夜市的灵魂。',
    search_url: 'https://search.bilibili.com/all?keyword=羊肉串 教程'
  },
  {
    name: '臊子面',
    category: '主食',
    region: '西北菜',
    ingredients: ['面条', '猪肉', '豆腐', '木耳'],
    desc: '酸辣鲜香，陕西传统，臊子浇头丰富，面条筋道。',
    search_url: 'https://search.bilibili.com/all?keyword=臊子面 教程'
  },
  {
    name: '凉皮',
    category: '凉拌',
    region: '西北菜',
    ingredients: ['面粉', '黄瓜', '豆芽', '辣椒油'],
    desc: '爽滑劲道，酸辣开胃，陕西特色，夏日必备凉食。',
    search_url: 'https://search.bilibili.com/all?keyword=凉皮 教程'
  },
  {
    name: '烤全羊',
    category: '烤箱',
    region: '西北菜',
    ingredients: ['羊肉', '孜然', '辣椒粉', '洋葱'],
    desc: '外焦里嫩，羊肉鲜香，孜然飘香，西北宴席硬菜。',
    search_url: 'https://search.bilibili.com/all?keyword=烤全羊 教程'
  },

  // ========== 云贵菜（6道）==========
  {
    name: '过桥米线',
    category: '主食',
    region: '云贵菜',
    ingredients: ['米线', '鸡汤', '鸡肉', '蔬菜'],
    desc: '云南名吃，汤鲜料足，米线滑嫩，配料丰富层次感强。',
    search_url: 'https://search.bilibili.com/all?keyword=过桥米线 教程'
  },
  {
    name: '酸汤鱼',
    category: '汤羹',
    region: '云贵菜',
    ingredients: ['鱼', '番茄', '酸菜', '辣椒'],
    desc: '贵州特色，酸辣开胃，鱼肉鲜嫩，汤汁浓郁。',
    search_url: 'https://search.bilibili.com/all?keyword=酸汤鱼 教程'
  },
  {
    name: '汽锅鸡',
    category: '蒸菜',
    region: '云贵菜',
    ingredients: ['鸡肉', '药材', '姜'],
    desc: '云南名菜，原汁原味，汽锅蒸煮，鸡肉软烂汤清。',
    search_url: 'https://search.bilibili.com/all?keyword=汽锅鸡 教程'
  },
  {
    name: '凉拌折耳根',
    category: '凉拌',
    region: '云贵菜',
    ingredients: ['折耳根', '辣椒', '蒜', '醋'],
    desc: '云贵特色，清新爽口，独特香味，爱的人爱死恨的人恨死。',
    search_url: 'https://search.bilibili.com/all?keyword=凉拌折耳根 教程'
  },
  {
    name: '宫保土豆',
    category: '炒菜',
    region: '云贵菜',
    ingredients: ['土豆', '花生', '辣椒', '花椒'],
    desc: '素食川味，土豆软糯，花生酥脆，口感丰富。',
    search_url: 'https://search.bilibili.com/all?keyword=宫保土豆 教程'
  },
  {
    name: '黔味辣子鸡',
    category: '炒菜',
    region: '云贵菜',
    ingredients: ['鸡肉', '辣椒', '姜', '蒜'],
    desc: '贵州风味，麻辣干香，鸡肉外酥里嫩，辣椒堆成山。',
    search_url: 'https://search.bilibili.com/all?keyword=黔味辣子鸡 教程'
  },

  // ========== 烤箱菜（10道）- 大件烘烤为主 ==========
  {
    name: '烤全鸡',
    category: '烤箱',
    region: '现代厨房',
    ingredients: ['鸡', '蜂蜜', '酱油', '香料'],
    desc: '整只烤制，皮脆肉嫩，家庭聚餐硬菜，烤箱版烧鸡。',
    search_url: 'https://search.bilibili.com/all?keyword=烤全鸡 教程'
  },
  {
    name: '烤排骨',
    category: '烤箱',
    region: '现代厨房',
    ingredients: ['排骨', '蜂蜜', '酱油', '孜然'],
    desc: '酱香浓郁，肉质软烂，骨肉分离，烤箱硬菜代表。',
    search_url: 'https://search.bilibili.com/all?keyword=烤排骨 教程'
  },
  {
    name: '烤鱼',
    category: '烤箱',
    region: '现代厨房',
    ingredients: ['鱼', '洋葱', '辣椒', '孜然'],
    desc: '整条烤制，外酥里嫩，香辣美味，不用担心油烟。',
    search_url: 'https://search.bilibili.com/all?keyword=烤鱼 教程'
  },
  {
    name: '烤羊排',
    category: '烤箱',
    region: '现代厨房',
    ingredients: ['羊排', '孜然', '辣椒粉', '蜂蜜'],
    desc: '外焦里嫩，孜然飘香，宴客硬菜，在家也能烤出大餐感。',
    search_url: 'https://search.bilibili.com/all?keyword=烤羊排 教程'
  },
  {
    name: '烤红薯',
    category: '烤箱',
    region: '现代厨房',
    ingredients: ['红薯'],
    desc: '香甜软糯，健康零食，烤箱最简单的快乐。',
    search_url: 'https://search.bilibili.com/all?keyword=烤红薯 教程'
  },
  {
    name: '烤土豆',
    category: '烤箱',
    region: '现代厨房',
    ingredients: ['土豆', '橄榄油', '黑胡椒', '迷迭香'],
    desc: '大块烤制，外脆内软，配料随意，西式烤土豆。',
    search_url: 'https://search.bilibili.com/all?keyword=烤土豆 教程'
  },
  {
    name: '烤蔬菜',
    category: '烤箱',
    region: '现代厨房',
    ingredients: ['西兰花', '胡萝卜', '橄榄油', '黑胡椒'],
    desc: '健康低卡，原汁原味，减脂餐首选，大批量烤制。',
    search_url: 'https://search.bilibili.com/all?keyword=烤蔬菜 教程'
  },
  {
    name: '蒜蓉烤虾',
    category: '烤箱',
    region: '现代厨房',
    ingredients: ['虾', '蒜', '黄油', '柠檬'],
    desc: '大虾整只烤制，虾肉Q弹，蒜香扑鼻，宴客必备。',
    search_url: 'https://search.bilibili.com/all?keyword=蒜蓉烤虾 教程'
  },
  {
    name: '烤茄子',
    category: '烤箱',
    region: '现代厨房',
    ingredients: ['茄子', '蒜', '辣椒', '香菜'],
    desc: '整根烤制，软糯香甜，蒜蓉点睛，比炒的还香。',
    search_url: 'https://search.bilibili.com/all?keyword=烤茄子 教程'
  },
  {
    name: '披萨',
    category: '烤箱',
    region: '现代厨房',
    ingredients: ['面粉', '奶酪', '番茄酱', '配菜'],
    desc: '烤箱专属，芝士拉丝，配料随心，孩子最爱。',
    search_url: 'https://search.bilibili.com/all?keyword=自制披萨 教程'
  },

  // ========== 空气炸锅菜（10道）- 小件油炸替代 ==========
  {
    name: '炸鸡翅中',
    category: '空气炸锅',
    region: '现代厨房',
    ingredients: ['鸡翅中', '面包糠', '鸡蛋', '面粉'],
    desc: '裹粉酥脆，少油健康，外焦里嫩，KFC同款在家做。',
    search_url: 'https://search.bilibili.com/all?keyword=空气炸锅炸鸡翅'
  },
  {
    name: '炸薯条',
    category: '空气炸锅',
    region: '现代厨房',
    ingredients: ['土豆', '橄榄油', '盐'],
    desc: '金黄酥脆，孩子最爱，比麦当劳健康，热量低一半。',
    search_url: 'https://search.bilibili.com/all?keyword=空气炸锅薯条'
  },
  {
    name: '炸鸡米花',
    category: '空气炸锅',
    region: '现代厨房',
    ingredients: ['鸡胸肉', '面包糠', '鸡蛋'],
    desc: '小块裹粉，香酥可口，一口一个，追剧必备零食。',
    search_url: 'https://search.bilibili.com/all?keyword=空气炸锅鸡米花'
  },
  {
    name: '炸春卷',
    category: '空气炸锅',
    region: '现代厨房',
    ingredients: ['春卷皮', '猪肉', '蔬菜'],
    desc: '皮脆馅香，点心美味，不用油锅炸更安全。',
    search_url: 'https://search.bilibili.com/all?keyword=空气炸锅春卷'
  },
  {
    name: '炸豆腐块',
    category: '空气炸锅',
    region: '现代厨房',
    ingredients: ['豆腐', '生抽', '蒜'],
    desc: '外脆内嫩，素食佳品，配麻辣酱汁绝了。',
    search_url: 'https://search.bilibili.com/all?keyword=空气炸锅豆腐'
  },
  {
    name: '炸茄盒',
    category: '空气炸锅',
    region: '现代厨房',
    ingredients: ['茄子', '猪肉', '面粉'],
    desc: '茄子夹肉馅裹粉炸，外酥内软，家常美味不油腻。',
    search_url: 'https://search.bilibili.com/all?keyword=空气炸锅茄盒'
  },
  {
    name: '炸蘑菇',
    category: '空气炸锅',
    region: '现代厨房',
    ingredients: ['蘑菇', '面包糠', '鸡蛋'],
    desc: '裹粉炸制，酥脆鲜香，下酒小菜，素食炸鸡。',
    search_url: 'https://search.bilibili.com/all?keyword=空气炸锅蘑菇'
  },
  {
    name: '炸虾球',
    category: '空气炸锅',
    region: '现代厨房',
    ingredients: ['虾', '面包糠', '鸡蛋'],
    desc: '裹粉炸制，外脆内鲜，宴客佳肴，颜值高。',
    search_url: 'https://search.bilibili.com/all?keyword=空气炸锅虾球'
  },
  {
    name: '炸丸子',
    category: '空气炸锅',
    region: '现代厨房',
    ingredients: ['猪肉', '葱', '姜'],
    desc: '肉丸外焦里嫩，汤菜皆宜，不用油炸也能酥脆。',
    search_url: 'https://search.bilibili.com/all?keyword=空气炸锅丸子'
  },
  {
    name: '炸鸡排',
    category: '空气炸锅',
    region: '现代厨房',
    ingredients: ['鸡胸肉', '面包糠', '鸡蛋'],
    desc: '大块鸡排裹粉炸，外酥内嫩，配奶茶绝了。',
    search_url: 'https://search.bilibili.com/all?keyword=空气炸锅鸡排'
  },


  // ========== 鲁菜（8道）==========
  {
    name: '糖醋鲤鱼',
    category: '炒菜',
    region: '鲁菜',
    ingredients: ['鲤鱼', '糖', '醋', '葱姜'],
    desc: '外酥里嫩，酸甜适口，鱼身立体造型，鲁菜经典代表。',
    search_url: 'https://search.bilibili.com/all?keyword=糖醋鲤鱼 教程'
  },
  {
    name: '九转大肠',
    category: '炒菜',
    region: '鲁菜',
    ingredients: ['猪大肠', '糖', '醋', '料酒'],
    desc: '酸甜咸辣，口感丰富，软烂入味，鲁菜高级宴席菜。',
    search_url: 'https://search.bilibili.com/all?keyword=九转大肠 教程'
  },
  {
    name: '葱烧海参',
    category: '炒菜',
    region: '鲁菜',
    ingredients: ['海参', '大葱', '酱油'],
    desc: '高档宴席，海参软糯，葱香浓郁，鲜香不腻。',
    search_url: 'https://search.bilibili.com/all?keyword=葱烧海参 教程'
  },
  {
    name: '爆炒腰花',
    category: '炒菜',
    region: '鲁菜',
    ingredients: ['猪腰', '木耳', '青椒', '葱姜'],
    desc: '火候精准，口感脆嫩，爆炒技法的典范，考验刀工。',
    search_url: 'https://search.bilibili.com/all?keyword=爆炒腰花 王刚'
  },
  {
    name: '德州扒鸡',
    category: '炖菜',
    region: '鲁菜',
    ingredients: ['鸡', '八角', '酱油', '糖'],
    desc: '肉烂脱骨，五香浓郁，色泽金红，山东名吃。',
    search_url: 'https://search.bilibili.com/all?keyword=德州扒鸡 教程'
  },
  {
    name: '油焖大虾',
    category: '炒菜',
    region: '鲁菜',
    ingredients: ['大虾', '葱姜', '酱油', '糖'],
    desc: '虾肉Q弹，酱香浓郁，色泽红亮，胶东名菜。',
    search_url: 'https://search.bilibili.com/all?keyword=油焖大虾 王刚'
  },
  {
    name: '四喜丸子',
    category: '炖菜',
    region: '鲁菜',
    ingredients: ['猪肉', '葱姜', '鸡蛋', '酱油'],
    desc: '肉质松软，汤汁浓香，寓意吉祥，宴席必备。',
    search_url: 'https://search.bilibili.com/all?keyword=四喜丸子 王刚'
  },
  {
    name: '葱油小饼',
    category: '主食',
    region: '鲁菜',
    ingredients: ['面粉', '葱', '油'],
    desc: '葱香酥脆，层次分明，山东传统面食，早餐佳品。',
    search_url: 'https://search.bilibili.com/all?keyword=葱油饼 教程'
  },

  // ========== 苏菜（8道）==========
  {
    name: '松鼠桂鱼',
    category: '炒菜',
    region: '苏菜',
    ingredients: ['桂鱼', '糖', '醋', '番茄酱'],
    desc: '造型美观，酸甜可口，鱼肉鲜嫩，苏帮名菜。',
    search_url: 'https://search.bilibili.com/all?keyword=松鼠桂鱼 教程'
  },
  {
    name: '红烧狮子头',
    category: '炖菜',
    region: '苏菜',
    ingredients: ['猪肉', '白菜', '葱姜', '酱油'],
    desc: '肉质细嫩，汤汁鲜美，肥而不腻，扬州名菜。',
    search_url: 'https://search.bilibili.com/all?keyword=红烧狮子头 王刚'
  },
  {
    name: '蟹粉豆腐',
    category: '炒菜',
    region: '苏菜',
    ingredients: ['豆腐', '蟹黄', '蟹肉', '高汤'],
    desc: '鲜香细腻，入口即化，奢华食材，苏式精致。',
    search_url: 'https://search.bilibili.com/all?keyword=蟹粉豆腐 教程'
  },
  {
    name: '盐水鸭',
    category: '凉拌',
    region: '苏菜',
    ingredients: ['鸭', '盐', '八角', '花椒'],
    desc: '南京名菜，皮白肉嫩，鲜香微咸，清爽不腻。',
    search_url: 'https://search.bilibili.com/all?keyword=盐水鸭 教程'
  },
  {
    name: '响油鳝糊',
    category: '炒菜',
    region: '苏菜',
    ingredients: ['黄鳝', '蒜', '酱油', '白胡椒'],
    desc: '油香四溢，鳝肉软糯，浓油赤酱，苏锡风味。',
    search_url: 'https://search.bilibili.com/all?keyword=响油鳝糊 教程'
  },
  {
    name: '阳澄湖大闸蟹',
    category: '蒸菜',
    region: '苏菜',
    ingredients: ['大闸蟹', '姜', '醋'],
    desc: '清蒸原味，膏肥黄满，鲜甜无比，秋季时令。',
    search_url: 'https://search.bilibili.com/all?keyword=清蒸大闸蟹 教程'
  },
  {
    name: '无锡小笼包',
    category: '蒸菜',
    region: '苏菜',
    ingredients: ['猪肉', '皮冻', '面粉'],
    desc: '汤汁鲜美，皮薄馅嫩，轻轻一咬汤汁四溢。',
    search_url: 'https://search.bilibili.com/all?keyword=无锡小笼包 教程'
  },
  {
    name: '清炒虾仁',
    category: '炒菜',
    region: '苏菜',
    ingredients: ['虾仁', '豌豆', '葱'],
    desc: '虾仁鲜嫩，清淡爽口，色泽洁白，苏式清炒。',
    search_url: 'https://search.bilibili.com/all?keyword=清炒虾仁 教程'
  },

  // ========== 浙菜（7道）==========
  {
    name: '西湖醋鱼',
    category: '炒菜',
    region: '浙菜',
    ingredients: ['草鱼', '糖', '醋', '姜'],
    desc: '杭州名菜，酸甜鲜嫩，鱼肉滑嫩，汁浓味醇。',
    search_url: 'https://search.bilibili.com/all?keyword=西湖醋鱼 教程'
  },
  {
    name: '龙井虾仁',
    category: '炒菜',
    region: '浙菜',
    ingredients: ['虾仁', '龙井茶', '鸡蛋清'],
    desc: '茶香虾鲜，色泽翠绿，清淡雅致，杭州名菜。',
    search_url: 'https://search.bilibili.com/all?keyword=龙井虾仁 教程'
  },
  {
    name: '东坡肉',
    category: '炖菜',
    region: '浙菜',
    ingredients: ['五花肉', '酱油', '糖', '料酒'],
    desc: '肥而不腻，入口即化，色泽红亮，杭州名菜。',
    search_url: 'https://search.bilibili.com/all?keyword=东坡肉 王刚'
  },
  {
    name: '宋嫂鱼羹',
    category: '汤羹',
    region: '浙菜',
    ingredients: ['鱼', '笋', '香菇', '蛋'],
    desc: '鲜香滑嫩，汤汁浓郁，色泽奶白，杭州传统名羹。',
    search_url: 'https://search.bilibili.com/all?keyword=宋嫂鱼羹 教程'
  },
  {
    name: '干菜焖肉',
    category: '炖菜',
    region: '浙菜',
    ingredients: ['五花肉', '梅干菜', '酱油', '糖'],
    desc: '咸香浓郁，肥而不腻，梅干菜吸油，下饭佳品。',
    search_url: 'https://search.bilibili.com/all?keyword=梅干菜扣肉 教程'
  },
  {
    name: '叫花鸡',
    category: '烤箱',
    region: '浙菜',
    ingredients: ['鸡', '荷叶', '泥', '香料'],
    desc: '外酥里嫩，香气扑鼻，传统泥烤，别具风味。',
    search_url: 'https://search.bilibili.com/all?keyword=叫花鸡 教程'
  },
  {
    name: '片儿川',
    category: '主食',
    region: '浙菜',
    ingredients: ['面条', '笋', '猪肉', '雪菜'],
    desc: '杭州名面，汤鲜面滑，笋脆肉嫩，老杭州味道。',
    search_url: 'https://search.bilibili.com/all?keyword=片儿川 教程'
  },

  // ========== 闽菜（7道）==========
  {
    name: '佛跳墙',
    category: '汤羹',
    region: '闽菜',
    ingredients: ['海参', '鲍鱼', '花胶', '鸡肉'],
    desc: '八闽第一汤，用料奢华，汤汁浓郁，荤香扑鼻。',
    search_url: 'https://search.bilibili.com/all?keyword=佛跳墙 教程'
  },
  {
    name: '荔枝肉',
    category: '炒菜',
    region: '闽菜',
    ingredients: ['猪肉', '糖', '醋', '番茄酱'],
    desc: '酸甜适口，形似荔枝，外酥里嫩，福州名菜。',
    search_url: 'https://search.bilibili.com/all?keyword=荔枝肉 教程'
  },
  {
    name: '海蛎煎',
    category: '炒菜',
    region: '闽菜',
    ingredients: ['海蛎', '鸡蛋', '地瓜粉', '葱'],
    desc: '闽南小吃，外酥内嫩，海蛎鲜美，蛋香四溢。',
    search_url: 'https://search.bilibili.com/all?keyword=海蛎煎 教程'
  },
  {
    name: '沙茶面',
    category: '主食',
    region: '闽菜',
    ingredients: ['面条', '沙茶酱', '虾', '鱿鱼'],
    desc: '汤底浓郁，配料丰富，沙茶香浓，厦门名吃。',
    search_url: 'https://search.bilibili.com/all?keyword=沙茶面 教程'
  },
  {
    name: '红糟鸡',
    category: '炒菜',
    region: '闽菜',
    ingredients: ['鸡肉', '红糟', '姜', '料酒'],
    desc: '酒香浓郁，肉质鲜嫩，色泽红润，福州特色。',
    search_url: 'https://search.bilibili.com/all?keyword=红糟鸡 教程'
  },
  {
    name: '姜母鸭',
    category: '炖菜',
    region: '闽菜',
    ingredients: ['鸭肉', '老姜', '米酒', '药材'],
    desc: '温补养生，姜香四溢，鸭肉软烂，冬季进补佳品。',
    search_url: 'https://search.bilibili.com/all?keyword=姜母鸭 教程'
  },
  {
    name: '鱼丸汤',
    category: '汤羹',
    region: '闽菜',
    ingredients: ['鱼肉', '猪肉', '葱', '高汤'],
    desc: '鱼丸Q弹，汤汁鲜美，福州传统小吃，老少皆宜。',
    search_url: 'https://search.bilibili.com/all?keyword=福州鱼丸 教程'
  },

  // ========== 湘菜（7道）==========
  {
    name: '剁椒鱼头',
    category: '蒸菜',
    region: '湘菜',
    ingredients: ['鱼头', '剁椒', '姜', '蒜'],
    desc: '辣而不燥，鲜香四溢，鱼肉嫩滑，湘菜招牌。',
    search_url: 'https://search.bilibili.com/all?keyword=剁椒鱼头 王刚'
  },
  {
    name: '小炒肉',
    category: '炒菜',
    region: '湘菜',
    ingredients: ['五花肉', '青椒', '蒜', '豆豉'],
    desc: '湘菜代表，辣香下饭，肉嫩椒脆，家常必备。',
    search_url: 'https://search.bilibili.com/all?keyword=湖南小炒肉 王刚'
  },
  {
    name: '农家一碗香',
    category: '蒸菜',
    region: '湘菜',
    ingredients: ['腊肉', '腊肠', '腊鱼', '豆豉'],
    desc: '腊味合蒸，香气扑鼻，肥而不腻，湖南特色。',
    search_url: 'https://search.bilibili.com/all?keyword=农家一碗香 教程'
  },
  {
    name: '毛氏红烧肉',
    category: '炖菜',
    region: '湘菜',
    ingredients: ['五花肉', '酱油', '糖', '八角'],
    desc: '色泽红亮，肥而不腻，甜中带咸，湖南名菜。',
    search_url: 'https://search.bilibili.com/all?keyword=毛氏红烧肉 教程'
  },
  {
    name: '永州血鸭',
    category: '炒菜',
    region: '湘菜',
    ingredients: ['鸭肉', '鸭血', '辣椒', '姜'],
    desc: '鲜香麻辣，鸭肉嫩滑，鸭血软嫩，永州名菜。',
    search_url: 'https://search.bilibili.com/all?keyword=永州血鸭 教程'
  },
  {
    name: '湘西外婆菜',
    category: '凉拌',
    region: '湘菜',
    ingredients: ['萝卜干', '辣椒', '豆豉', '蒜'],
    desc: '酸辣开胃，佐餐佳品，越吃越香，湘西特色。',
    search_url: 'https://search.bilibili.com/all?keyword=湘西外婆菜 教程'
  },
  {
    name: '酸豆角炒肉末',
    category: '炒菜',
    region: '湘菜',
    ingredients: ['酸豆角', '猪肉末', '辣椒', '蒜'],
    desc: '酸辣爽脆，下饭神器，肉末酥香，湖南家常菜。',
    search_url: 'https://search.bilibili.com/all?keyword=酸豆角炒肉末 教程'
  },

  // ========== 徽菜（7道）==========
  {
    name: '臭鳜鱼',
    category: '炒菜',
    region: '徽菜',
    ingredients: ['鳜鱼', '姜', '蒜', '笋'],
    desc: '闻着臭吃着香，鱼肉鲜嫩，徽州名菜，独特风味。',
    search_url: 'https://search.bilibili.com/all?keyword=臭鳜鱼 教程'
  },
  {
    name: '毛豆腐',
    category: '空气炸锅',
    region: '徽菜',
    ingredients: ['豆腐', '辣椒酱'],
    desc: '发酵豆制品，口感独特，外焦里嫩，徽州特色。',
    search_url: 'https://search.bilibili.com/all?keyword=毛豆腐 教程'
  },
  {
    name: '腌笃鲜',
    category: '汤羹',
    region: '徽菜',
    ingredients: ['春笋', '鲜肉', '咸肉', '百叶结'],
    desc: '春笋鲜嫩，汤汁奶白，咸鲜合一，江南春味。',
    search_url: 'https://search.bilibili.com/all?keyword=腌笃鲜 教程'
  },
  {
    name: '黄山双石',
    category: '炖菜',
    region: '徽菜',
    ingredients: ['石鸡', '石耳', '火腿', '香菇'],
    desc: '山珍野味，石鸡鲜嫩，石耳脆滑，徽州山货。',
    search_url: 'https://search.bilibili.com/all?keyword=黄山双石 教程'
  },
  {
    name: '徽州一品锅',
    category: '炖菜',
    region: '徽菜',
    ingredients: ['五花肉', '豆腐', '笋', '白菜'],
    desc: '徽州火锅，层次分明，荤素搭配，一锅烩。',
    search_url: 'https://search.bilibili.com/all?keyword=一品锅 教程'
  },
  {
    name: '虎皮毛豆腐',
    category: '空气炸锅',
    region: '徽菜',
    ingredients: ['毛豆腐', '辣椒酱', '蒜'],
    desc: '外焦里嫩，鲜香可口，发酵风味，徽州传统。',
    search_url: 'https://search.bilibili.com/all?keyword=虎皮毛豆腐 教程'
  },
  {
    name: '刀板香',
    category: '炖菜',
    region: '徽菜',
    ingredients: ['腊肉', '笋干', '辣椒'],
    desc: '腊肉香浓，笋干吸油，咸香下饭，徽州腊味。',
    search_url: 'https://search.bilibili.com/all?keyword=刀板香 教程'
  },

  // ========== 主食类（12道）==========
  {
    name: '扬州炒饭',
    category: '主食',
    region: '苏菜',
    ingredients: ['米饭', '鸡蛋', '虾仁', '火腿'],
    desc: '粒粒分明，配料丰富，色泽金黄，炒饭之王。',
    search_url: 'https://search.bilibili.com/all?keyword=扬州炒饭 王刚'
  },
  {
    name: '煎饺',
    category: '主食',
    region: '家常菜',
    ingredients: ['猪肉', '韭菜', '饺子皮'],
    desc: '底部焦脆，馅料鲜美，一口一个，早餐好选择。',
    search_url: 'https://search.bilibili.com/all?keyword=煎饺 教程'
  },
  {
    name: '肉包子',
    category: '蒸菜',
    region: '家常菜',
    ingredients: ['猪肉', '葱', '面粉'],
    desc: '皮软馅香，汁水丰盈，早餐首选，蒸笼飘香。',
    search_url: 'https://search.bilibili.com/all?keyword=肉包子 教程'
  },
  {
    name: '韭菜盒子',
    category: '主食',
    region: '家常菜',
    ingredients: ['韭菜', '鸡蛋', '面粉'],
    desc: '外皮酥脆，韭香浓郁，鸡蛋增鲜，北方传统。',
    search_url: 'https://search.bilibili.com/all?keyword=韭菜盒子 教程'
  },
  {
    name: '手抓饼',
    category: '主食',
    region: '家常菜',
    ingredients: ['面粉', '油', '葱'],
    desc: '层层酥脆，葱香四溢，街头小吃，在家也能做。',
    search_url: 'https://search.bilibili.com/all?keyword=手抓饼 教程'
  },
  {
    name: '葱油拌面',
    category: '主食',
    region: '家常菜',
    ingredients: ['面条', '葱', '酱油'],
    desc: '简单快手，葱香扑鼻，酱油调味，深夜食堂。',
    search_url: 'https://search.bilibili.com/all?keyword=葱油拌面 教程'
  },
  {
    name: '炸酱面',
    category: '主食',
    region: '家常菜',
    ingredients: ['面条', '猪肉末', '黄酱', '黄瓜'],
    desc: '北方主食，酱香浓郁，配菜丰富，老北京味道。',
    search_url: 'https://search.bilibili.com/all?keyword=炸酱面 王刚'
  },
  {
    name: '阳春面',
    category: '主食',
    region: '苏菜',
    ingredients: ['面条', '猪油', '酱油', '葱'],
    desc: '清汤挂面，清淡养胃，猪油提香，苏式简约。',
    search_url: 'https://search.bilibili.com/all?keyword=阳春面 教程'
  },
  {
    name: '粢饭团',
    category: '主食',
    region: '家常菜',
    ingredients: ['糯米', '油条', '榨菜', '肉松'],
    desc: '上海早餐，口感丰富，软糯酥脆，咸甜适中。',
    search_url: 'https://search.bilibili.com/all?keyword=粢饭团 教程'
  },
  {
    name: '北京烤鸭',
    category: '烤箱',
    region: '京菜',
    ingredients: ['鸭', '面饼', '甜面酱', '葱'],
    desc: '皮脆肉嫩，京城名片，配薄饼卷食，中华名菜。',
    search_url: 'https://search.bilibili.com/all?keyword=北京烤鸭 教程'
  },
  {
    name: '天津狗不理包子',
    category: '蒸菜',
    region: '天津菜',
    ingredients: ['猪肉', '面粉', '酱油', '葱姜'],
    desc: '皮薄馅大，汤汁丰富，18个褶，天津名吃。',
    search_url: 'https://search.bilibili.com/all?keyword=狗不理包子 教程'
  },
  {
    name: '兰州拉面',
    category: '主食',
    region: '西北菜',
    ingredients: ['面粉', '牛肉', '萝卜', '香菜'],
    desc: '一清二白三红，面条筋道，汤汁浓郁，西北名面。',
    search_url: 'https://search.bilibili.com/all?keyword=兰州拉面 教程'
  }
];

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
  module.exports = recipes;
}
