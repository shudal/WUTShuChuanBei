# 读书小程序后端V1.0

### 获取特定分类下文章列表
> GET http://localhost:8085/post/cat?cat=reco&page=1&size=10
* 参数说明
    * page从1开始计数
* 返回示例
```$xslt
{"code":0,"msg":"OK","data":[{"id":1,"cat":"reco","title":"以梦为马","content":"我要做远方的忠诚的儿子|和物质的短暂情人|和所有以梦为马的诗人一样|我不得不和烈士和小丑走在同一道路上|万人都要将火熄灭 我一人独将此火高高举起|此火为大 开花落英于神圣的祖国|和所有以梦为马的诗人一样|我藉此火得度一生的茫茫黑夜|此火为大 祖国的语言和乱石投筑的梁山城寨|以梦为上的敦煌--那七月也会寒冷的骨骼|如雪白的柴和坚硬的条条白雪 横放在众神之山|和所有以梦为马的诗人一样|我投入此火 这三者是囚禁我的灯盏 吐出光辉|万人都要从我刀口走过 去建筑祖国的语言|我甘愿一切从头开始|和所有以梦为马的诗人一样|我也愿将牢底坐穿|众神创造物中只有我最易朽 带着不可抗拒的 死亡的速度|只有粮食是我珍爱|我将她紧紧抱住 抱住她 在故乡生儿育女|和所有以梦为马的诗人一样|我也愿将自己埋葬在四周高高的山上 守望平静的家园|面对大河我无限惭愧|我年华虚度 空有一身疲倦|和所有以梦为马的诗人一样|岁月易逝 一滴不剩 水滴中有一匹马儿 一命归天|千年后如若我再生于祖国的河岸|千年后我再次拥有中国的稻田 和周天子的雪山|天马踢踏|和所有以梦为马的诗人一样|我选择永恒的事业|我的事业 就是要成为太阳的一生|他从古至今--\"日\"--他无比辉煌无比光明|和所有以梦为马的诗人一样|最后我被黄昏的众神抬入不朽的太阳|太阳是我的名字|太阳是我的一生|太阳的山顶埋葬 诗歌的尸体--千年王国和我|骑着五千年凤凰和名字叫\"马\"的龙--我必将失败|但诗歌本身以太阳必将胜利","cretime":"1569647306686","status":1}]}
```