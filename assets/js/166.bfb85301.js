(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{475:function(_,v,t){"use strict";t.r(v);var n=t(6),r=Object(n.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h3",{attrs:{id:"_64匹马-8个赛道-找出跑得最快的4匹马"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_64匹马-8个赛道-找出跑得最快的4匹马"}},[_._v("#")]),_._v(" 64匹马，8个赛道，找出跑得最快的4匹马")]),_._v(" "),v("p",[_._v("全部马分为8组，每组8匹，每组各跑一次，然后淘汰掉每组的后四名，如下图（需要比赛8场）")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://img.xiaoyou66.com/2021/04/10/31a4430ceb456.png",alt:"image-20210410171912299"}})]),_._v(" "),v("p",[v("strong",[_._v("第一步")]),_._v(" 因为我们只需要找出最快的四匹马，所以我们在这8组里面每组第一名进行比赛，这样我们就可以淘汰最后四名所在组的所有马（因为如果第一名都比不过的话，其他的也不可能比过，因为我们要找最快的四匹）")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://img.xiaoyou66.com/2021/04/10/cfcc4086d8486.png",alt:"image-20210410183452781"}})]),_._v(" "),v("p",[v("strong",[_._v("第二步")]),_._v(" 当然，如果我们想找第一名的话其实就已经找到了（下图蓝色区域），不过我们要找最快的4匹。所以我们还需要在比，而其他可能跑得最快的三匹马只可能是下图中的黄色区域了（A2,A3,A4,B1,B2,B3,C1,C2,D1，共9匹马）")]),_._v(" "),v("blockquote",[v("p",[_._v("这里简单解释一下为什么是9块，我们就拿D1来说，因为D1是第4名，所以D1所在的队伍肯定只有D1，然后C1也是同理，如果C1是快马的话，那么A1，B1，肯定也是，所以最差也有C1，C2这两个是快马")])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://img.xiaoyou66.com/2021/04/10/28544269a47c9.png",alt:"image-20210410183615496"}})]),_._v(" "),v("p",[v("strong",[_._v("第三步")]),_._v(" 只要从上面的9匹马中找出跑得最快的三匹马就可以了，但是现在只要8个跑道，怎么办？那就随机选出8匹马进行一次比赛吧（需要比赛一场）")]),_._v(" "),v("p",[v("strong",[_._v("第四步")]),_._v(" 上面比赛完，选出了前三名，但是9匹马中还有一匹马没跑呢，它可能是一个潜力股啊，那就和前三名比一比吧，这四匹马比一场，选出前三名。最后加上总冠军，跑得最快的四匹马诞生了！！！（需要一场比赛）")]),_._v(" "),v("p",[_._v("所以一共需要比 "),v("strong",[_._v("8 + 1 + 1 + 1 = 11")]),_._v(" 次")]),_._v(" "),v("blockquote",[v("p",[_._v("最少10场，第三步：除A2外，剩下的8匹比一场，如果A3跑了第一，那么直接确定前四。否则需要多比一场")]),_._v(" "),v("p",[_._v("因为如果A3是第一名，那么A1，A2是第一和第二A3是第三，后面的就是第4了")])]),_._v(" "),v("h3",{attrs:{id:"海盗分金币的问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#海盗分金币的问题"}},[_._v("#")]),_._v(" 海盗分金币的问题")]),_._v(" "),v("p",[_._v("有五个理性的"),v("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E6%B5%B7%E7%9B%97",target:"_blank",rel:"noopener noreferrer"}},[_._v("海盗"),v("OutboundLink")],1),_._v("，A, B, C, D和E，找到了100个金币，需要想办法分配金币。")]),_._v(" "),v("p",[_._v("海盗们有严格的等级制度：A比B职位高，B比C高，C比D高，D比E高。")]),_._v(" "),v("p",[_._v("海盗世界的分配原则是：等级最高的海盗提出一种分配方案。所有的海盗投票决定是否接受分配，包括提议人。并且在票数相同的情况下，提议人有"),v("a",{attrs:{href:"https://zh.wikipedia.org/w/index.php?title=%E5%86%B3%E5%AE%9A%E7%A5%A8&action=edit&redlink=1",target:"_blank",rel:"noopener noreferrer"}},[_._v("决定权"),v("OutboundLink")],1),_._v("。如果提议通过，那么海盗们按照提议分配金币。如果没有通过，那么提议人将被扔出船外，然后由下一个最高职位的海盗提出新的分配方案。")]),_._v(" "),v("p",[v("strong",[_._v("如何分配")])]),_._v(" "),v("p",[_._v("直觉上认为，A海盗会给自己分配很少，以避免被扔出船外。然而这和理论结果相差甚远。")]),_._v(" "),v("p",[_._v("让我们反过来看：如果只剩下D和E，D给自己100个金币，给E 0个。因为D有决定权，所以分配达成。")]),_._v(" "),v("p",[_._v("如果剩下三个人（C，D和E），C知道D下轮会给E 0个金币，所以C这轮给E 1个金币，让E支持自己以使得提议通过。因此如果剩下三个人，结果是C：99，D：0，E：1。")]),_._v(" "),v("p",[_._v("如果B, C, D 和 E 剩下， B 知道上述结果。所以为了避免被扔出去，他只需要给D 1个金币，因为他有决定权，只需要D的支持就足够了。因此他会提议 B：99， C：0， D：1，E：0。有人可能想到提议B：99， C：0， D：0，E：1，因为E知道即使把B扔出去，也不会得到更多了。但由于海盗会优先把别人扔出去，所以E会选择杀死B，然后仍然可以从C的提议中得到相同金币。（若要让E同意他，就至少要给他2个金币才行，这样并不划算，因为这样B自己只能得到98金币，所以不用浪费金币给E）")]),_._v(" "),v("p",[_._v("假设A知道所有的一切，他就能选择让C和E来支持他，提议变成：")]),_._v(" "),v("ul",[v("li",[_._v("A: 98金币")]),_._v(" "),v("li",[_._v("B: 0金币")]),_._v(" "),v("li",[_._v("C: 1金币")]),_._v(" "),v("li",[_._v("D: 0金币")]),_._v(" "),v("li",[_._v("E: 1金币")])]),_._v(" "),v("p",[_._v("同样的 A：98，B：0，C：0，D：1，E：1 或者其他的提议都不是最好的，因为D会选择把A扔出去，然后从B那里得到相同的金币。（若要让D同意他，就至少要给他2个金币才行，这样并不划算，因为这样A自己只能得到97金币，所以不用浪费金币给D）")]),_._v(" "),v("p",[v("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E6%B5%B7%E7%9B%97%E5%8D%9A%E5%BC%88",target:"_blank",rel:"noopener noreferrer"}},[_._v("海盗博弈 - 维基百科，自由的百科全书 (wikipedia.org)"),v("OutboundLink")],1)]),_._v(" "),v("h3",{attrs:{id:"老鼠试毒问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#老鼠试毒问题"}},[_._v("#")]),_._v(" 老鼠试毒问题")]),_._v(" "),v("p",[v("strong",[_._v("问题一")])]),_._v(" "),v("p",[_._v("有16瓶水，其中只有一瓶水有毒，小白鼠喝一滴之后一小时会死。请问最少用（） 只小白鼠，在1小时内一定可以找出至少14瓶无毒的水？")]),_._v(" "),v("p",[v("strong",[_._v("答案为")]),_._v(" 三只")]),_._v(" "),v("p",[v("strong",[_._v("解析")])]),_._v(" "),v("p",[_._v("这个题目可以转换为二进制来进行理解")]),_._v(" "),v("p",[_._v("将16瓶水两瓶为一组，组号标为A1-A8，三只小白鼠分别标号为b1、b2、b3。\nA1,001，只让b1喝\nA2,010，只让b2喝\nA3,011，让b1、b2喝\nA4,100，只让b3喝\nA5,101，b1、b3喝\nA6,110，b2、b3喝\nA7,111，让b1、b2、b3喝\nA8组不喝.")]),_._v(" "),v("p",[_._v("如果只有b1死了，b2、b3都活着，那么有毒的水在A1组里，剩下的14瓶无毒；如果只有b2死了，b1、b3都活着，则A2组有毒；如果b1、b2死，b3活，则A3组有毒；如果只有b3死了，b1、b2都活着，则A4组有毒；如果b1、b3死，b2活，则A5有毒；如果b2、b3死，b1活，则A6有毒；如果三只全死，A7组有毒；如果三只全活，A8有毒。")]),_._v(" "),v("p",[v("strong",[_._v("问题二")])]),_._v(" "),v("p",[_._v("这个题目和上个题目一样，都是转换为二进制来进行计算")]),_._v(" "),v("p",[_._v("有1000瓶水,其中有一瓶有毒,小白鼠只要尝一点带毒的水24小时后就会死亡至少要多少只小白鼠才能在24小时\n至少要多少只小白鼠才能在24小时鉴别出哪瓶水有毒\n答案是10只")]),_._v(" "),v("p",[_._v("给1000个瓶分别标上如下标签（10位长度）：\n0000000001 （第1瓶）\n0000000010 （第2瓶）\n0000000011 （第3瓶）\n.\n1111101000 （第1000瓶）\n从编号最后1位是1的所有的瓶子里面取出1滴混在一起（比如从第一瓶,第三瓶,.里分别取出一滴混在一起）并标上记号为1.给第一个小白鼠喝。\n从编号倒数第2位是1的所有的瓶子里面取出1滴混在一起并标上记号为2.给第2个小白鼠喝。\n从编号倒数第3位是1的所有的瓶子里面取出1滴混在一起并标上记号为3.给第3个小白鼠喝。\n从编号倒数第4位是1的所有的瓶子里面取出1滴混在一起并标上记号为4.给第4个小白鼠喝。\n从编号倒数第5位是1的所有的瓶子里面取出1滴混在一起并标上记号为5.给第5个小白鼠喝。\n从编号倒数第6位是1的所有的瓶子里面取出1滴混在一起并标上记号为6.给第6个小白鼠喝。\n以此类推。。。。\n24小时过去了,过来验尸吧：\n如果只有第一个小白鼠死了。即00000 00001，则第1瓶有毒。\n如果只有第1,4个小白鼠死了。即00000 01001，则第9瓶有毒。")])])}),[],!1,null,null,null);v.default=r.exports}}]);