(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{418:function(t,a,v){"use strict";v.r(a);var s=v(6),_=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[t._v("#")]),t._v(" 基本概念")]),t._v(" "),a("p",[t._v("图包括有向图和无向图，有向图就是从一个点到另一个点是有方向的，无向图就是点和点之间没有方向。<v,w> 是有序的（有向图），(x,y)是无序的（无向图）")]),t._v(" "),a("h2",{attrs:{id:"基本术语"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本术语"}},[t._v("#")]),t._v(" 基本术语")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("子图")]),t._v(" 就是图的子集当 有G(V,E)和g(v,e)两个图，当v属于V 且e属于E，那么g就是G的子图")]),t._v(" "),a("li",[a("strong",[t._v("无向完全图")]),t._v(" 对于无向图，若具有 n(n-1)/2 条边，就称为无向为完全图，")]),t._v(" "),a("li",[a("strong",[t._v("有向完全图")]),t._v(" 如果具有n(n-1)条弧，就称为有向完全图")]),t._v(" "),a("li",[a("strong",[t._v("稀疏图和稠密图")]),t._v(" 如果很少边或弧(e<nlog2n)的图称为稀疏图")]),t._v(" "),a("li",[a("strong",[t._v("权和网")]),t._v(" 边上的数字叫权")]),t._v(" "),a("li",[a("strong",[t._v("邻接点")])]),t._v(" "),a("li",[a("strong",[t._v("度、入度和出度")]),t._v(" 就是和某一个点相连的边数，入度就是以这个点为顶点的弧，出度就是以这个点为出发点的弧")])]),t._v(" "),a("h2",{attrs:{id:"表示方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表示方法"}},[t._v("#")]),t._v(" 表示方法")]),t._v(" "),a("h3",{attrs:{id:"邻接矩阵"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#邻接矩阵"}},[t._v("#")]),t._v(" 邻接矩阵")]),t._v(" "),a("p",[t._v("就是使用一个矩阵来表示每个图的链接情况")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/23/fd86e9f2ea33a.png",alt:"image-20210303144915113"}})]),t._v(" "),a("h3",{attrs:{id:"邻接表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#邻接表"}},[t._v("#")]),t._v(" 邻接表")]),t._v(" "),a("p",[t._v("使用链表来表示图")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/25/b98f8a6992e34.png",alt:"image-20210325091039324"}})]),t._v(" "),a("h3",{attrs:{id:"逆邻接表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#逆邻接表"}},[t._v("#")]),t._v(" 逆邻接表")]),t._v(" "),a("p",[t._v("邻接表反映的是出度的情况，而逆邻接表反映的是入度情况")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/25/9f27b5967d850.png",alt:"image-20210325091415880"}})]),t._v(" "),a("h3",{attrs:{id:"十字链表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#十字链表"}},[t._v("#")]),t._v(" 十字链表")]),t._v(" "),a("p",[t._v("邻接表与逆邻接表结合起来，表的结构入下")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/25/021bfb5b1704c.png",alt:"image-20210325091614675"}})]),t._v(" "),a("p",[t._v("实际效果")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/25/97e02826c8fae.png",alt:"image-20210325091635448"}})]),t._v(" "),a("h3",{attrs:{id:"邻接多重表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#邻接多重表"}},[t._v("#")]),t._v(" 邻接多重表")]),t._v(" "),a("p",[t._v("十字链表主要针对有向图，而临接多重表则适用于无向图")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/23/e7299a03b5923.png",alt:"image-20210303151818727"}})]),t._v(" "),a("ul",[a("li",[t._v("data：存储此顶点的数据")]),t._v(" "),a("li",[t._v("firstedge：指针域，用于指向同该顶点有直接关联的存储其他顶点的节点")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/23/34c43002d9057.png",alt:"image-20210303151854282"}})]),t._v(" "),a("ul",[a("li",[t._v("mark：标志域，用于标记此节点是否被操作过，例如在对图中顶点做遍历操作时，为了防止多次操作同一节点，mark 域为 0 表示还未被遍历；mark 为 1 表示该节点已被遍历")]),t._v(" "),a("li",[t._v("ivex 和 jvex：数据域，分别存储图中各边两端的顶点所在数组中的位置下标")]),t._v(" "),a("li",[t._v("ilink：指针域，指向下一个存储与 ivex 有直接关联顶点的节点")]),t._v(" "),a("li",[t._v("jlink：指针域，指向下一个存储与 jvex 有直接关联顶点的节点")]),t._v(" "),a("li",[t._v("info：指针域，用于存储与该顶点有关的其他信息，比如无向网中各边的权")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/23/9699b948425ba.png",alt:"image-20210303153856159"}})]),t._v(" "),a("h2",{attrs:{id:"图的遍历"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图的遍历"}},[t._v("#")]),t._v(" 图的遍历")]),t._v(" "),a("h3",{attrs:{id:"深度优先搜索-dfs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#深度优先搜索-dfs"}},[t._v("#")]),t._v(" 深度优先搜索 DFS")]),t._v(" "),a("p",[t._v("图的深度优先搜索(Depth First Search)，和树的先序遍历比较类似。")]),t._v(" "),a("p",[t._v("它的思想：假设初始状态是图中所有顶点均未被访问，则从某个顶点v出发，首先访问该顶点，然后依次从它的各个未被访问的邻接点出发深度优先搜索遍历图，直至图中所有和v有路径相通的顶点都被访问到。 若此时尚有其他顶点未被访问到，则另选一个未被访问的顶点作起始点，重复上述过程，直至图中所有顶点都被访问到为止。")]),t._v(" "),a("h4",{attrs:{id:"无向图的深度优先搜索"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#无向图的深度优先搜索"}},[t._v("#")]),t._v(" 无向图的深度优先搜索")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/23/cc61bec261c38.png",alt:"image-20210303213734685"}})]),t._v(" "),a("h4",{attrs:{id:"有向图的深度优先搜索"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#有向图的深度优先搜索"}},[t._v("#")]),t._v(" 有向图的深度优先搜索")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/23/ed3ab253785c4.png",alt:"image-20210303213910023"}})]),t._v(" "),a("h3",{attrs:{id:"广度优先搜索-bfs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#广度优先搜索-bfs"}},[t._v("#")]),t._v(" 广度优先搜索 BFS")]),t._v(" "),a("p",[t._v('广度优先搜索算法(Breadth First Search)，又称为"宽度优先搜索"或"横向优先搜索"，简称BFS。')]),t._v(" "),a("p",[t._v("它的思想是：从图中某顶点v出发，在访问了v之后依次访问v的各个未曾访问过的邻接点，然后分别从这些邻接点出发依次访问它们的邻接点，并使得“先被访问的顶点的邻接点先于后被访问的顶点的邻接点被访问，直至图中所有已被访问的顶点的邻接点都被访问到。如果此时图中尚有顶点未被访问，则需要另选一个未曾被访问过的顶点作为新的起始点，重复上述过程，直至图中所有顶点都被访问到为止。")]),t._v(" "),a("p",[t._v("换句话说，广度优先搜索遍历图的过程是以v为起点，由近至远，依次访问和v有路径相通且路径长度为1,2...的顶点。")]),t._v(" "),a("h4",{attrs:{id:"无向图的广度优先搜索"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#无向图的广度优先搜索"}},[t._v("#")]),t._v(" 无向图的广度优先搜索")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/23/2b5bb924e72fa.png",alt:"image-20210303214223437"}})]),t._v(" "),a("h4",{attrs:{id:"有向图的广度优先搜索"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#有向图的广度优先搜索"}},[t._v("#")]),t._v(" 有向图的广度优先搜索")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/23/e8dadede0ea5b.png",alt:"image-20210303214503399"}})]),t._v(" "),a("h2",{attrs:{id:"最小生成树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最小生成树"}},[t._v("#")]),t._v(" 最小生成树")]),t._v(" "),a("p",[t._v("设要在n个城市之间建立通信联络网，则连通n个城市只需要n-1条线路。这时，自然会考虑这样一个问题，如何在最节省经费的前提下建立这个通信网，下面就引出了最小生成树的问题")]),t._v(" "),a("h3",{attrs:{id:"普里姆算法-加点法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#普里姆算法-加点法"}},[t._v("#")]),t._v(" 普里姆算法（加点法）")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/23/210dfcfa585d4.png",alt:"image-20210304115538126"}})]),t._v(" "),a("h3",{attrs:{id:"克鲁斯卡尔算法-加边法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#克鲁斯卡尔算法-加边法"}},[t._v("#")]),t._v(" 克鲁斯卡尔算法（加边法）")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/23/a71e42fe687e1.png",alt:"image-20210304120223412"}})]),t._v(" "),a("h2",{attrs:{id:"最短路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最短路径"}},[t._v("#")]),t._v(" 最短路径")]),t._v(" "),a("h3",{attrs:{id:"迪杰斯拉特算法-从某源点到其余各顶点的最短路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#迪杰斯拉特算法-从某源点到其余各顶点的最短路径"}},[t._v("#")]),t._v(" 迪杰斯拉特算法（从某源点到其余各顶点的最短路径）")]),t._v(" "),a("p",[t._v("迪科斯彻算法使用了广度优先搜索解决赋权有向图或者无向图的单源最短路径问题，算法最终得到一个最短路径树。该算法常用于路由算法或者作为其他图算法的一个子模块。")]),t._v(" "),a("p",[t._v("比如我们来求下面这个图")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/23/aec09fd1e3d17.png",alt:"image-20210304143004722"}})]),t._v(" "),a("p",[t._v("首先初始化dis数组，其中v1和v3，v5，v6是之间相连的，所以可以先写出距离")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/23/e99f18b2d35c0.png",alt:"image-20210304143042250"}})]),t._v(" "),a("p",[t._v("我们的顶点集T的初始化为：T={v1}")]),t._v(" "),a("p",[t._v("既然是求 v1顶点到其余各个顶点的最短路程，那就"),a("strong",[t._v("先找一个离 1 号顶点最近的顶点")]),t._v("。通过数组 dis 可知当前离v1顶点最近是 v3顶点。当选择了 2 号顶点后，dis[2]（下标从0开始）的值就已经从“估计值”变为了“确定值”，"),a("strong",[t._v("即 v1顶点到 v3顶点的最短路程就是当前 dis[2]值。将V3加入到T中。")])]),t._v(" "),a("p",[t._v("既然确定了一个顶点的最短路径，下面我们就要根据这个新入的顶点V3会有出度，发现以v3 为弧尾的有： < v3,v4 >,那么我们看看路径："),a("strong",[t._v("v1–v3–v4的长度是否比v1–v4短，其实这个已经是很明显的了，因为dis[3]代表的就是v1–v4的长度为无穷大，而v1–v3–v4的长度为：10+50=60")]),t._v("，所以更新dis[3]的值,得到如下结果：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/23/cf0a3006cf08e.png",alt:"image-20210304143638614"}})]),t._v(" "),a("blockquote",[a("p",[t._v("因此 dis[3]要更新为 60。这个过程有个专业术语叫做“松弛”。即 v1顶点到 v4顶点的路程即 dis[3]，通过 < v3,v4> 这条边松弛成功。这便是 Dijkstra 算法的主要思想：通过“边”来松弛v1顶点到其余各个顶点的路程。")])]),t._v(" "),a("p",[t._v("然后，我们又从"),a("strong",[t._v("除dis[2]和dis[0]外的其他值中寻找最小值，发现dis[4]的值最小")]),t._v("，通过之前是解释的原理，可以知道"),a("strong",[t._v("v1到v5的最短距离就是dis[4]的值")]),t._v("，然后，我们"),a("strong",[t._v("把v5加入到集合T中")]),t._v("，然后，考虑v5的出度是否会影响我们的数组dis的值，"),a("strong",[t._v("v5有两条出度：< v5,v4>和 < v5,v6>,然后我们发现：v1–v5–v4的长度为：50，而dis[3]的值为60")]),t._v("，所以我们要更新dis[3]的值.另外，**v1-v5-v6的长度为：90，而dis[5]为100，所以我们需要更新dis[5]的值。**更新后的dis数组如下图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/23/ec510658f67aa.png",alt:"image-20210304143844229"}})]),t._v(" "),a("p",[t._v("然后，继续从"),a("strong",[t._v("dis中选择未确定的顶点的值中选择一个最小的值，发现dis[3]的值是最小的")]),t._v("，所以把v4加入到集合T中，此时"),a("strong",[t._v("集合T={v1,v3,v5,v4}")]),t._v(",然后，考虑v4的出度是否会影响我们的数组dis的值，v4有一条出度："),a("strong",[t._v("< v4,v6>,然后我们发现：v1–v5–v4–v6的长度为：60，而dis[5]的值为90")]),t._v("，所以我们要更新dis[5]的值，更新后的dis数组如下图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/23/26e6fe1ecdf7e.png",alt:"image-20210304144311990"}})]),t._v(" "),a("p",[t._v("然后，我们使用同样原理，分别确定了v6和v2的最短路径，最后dis的数组的值如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/23/2d27ce45b8adf.png",alt:"image-20210304144327345"}})]),t._v(" "),a("h3",{attrs:{id:"弗洛伊德算法-每一对顶点之间的最短路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#弗洛伊德算法-每一对顶点之间的最短路径"}},[t._v("#")]),t._v(" 弗洛伊德算法（每一对顶点之间的最短路径）")]),t._v(" "),a("p",[t._v("弗洛伊德算法是解决任意两点间的最短路径的一种算法，可以正确处理有向图或有向图或负权（但不可存在负权回路)的最短路径问题，同时也被用于计算有向图的传递闭包。")]),t._v(" "),a("p",[t._v("待补充")]),t._v(" "),a("h3",{attrs:{id:"算法的时间复杂度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#算法的时间复杂度"}},[t._v("#")]),t._v(" 算法的时间复杂度")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/04/20/bfa976b76e8ce.png",alt:"image-20210420092511391"}})]),t._v(" "),a("p",[t._v("Floyd-Warshall算法的时间复杂度为O(N^3)，空间复杂度为O(N^2)。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://houbb.github.io/2020/01/23/data-struct-learn-03-graph-floyd#",target:"_blank",rel:"noopener noreferrer"}},[t._v("图最短路径算法之弗洛伊德算法（Floyd） | Echo Blog (houbb.github.io)"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"拓扑排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拓扑排序"}},[t._v("#")]),t._v(" 拓扑排序")]),t._v(" "),a("h3",{attrs:{id:"aov网"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aov网"}},[t._v("#")]),t._v(" AOV网")]),t._v(" "),a("p",[t._v("说白了就是后面的活动依赖前面的活动，比如，在《程序设计基础》和《离散数学》学完之前就不能开始学习《数据结构》")]),t._v(" "),a("h3",{attrs:{id:"拓扑排序-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拓扑排序-2"}},[t._v("#")]),t._v(" 拓扑排序")]),t._v(" "),a("p",[t._v("就是把AOV网中所有的顶点排成一个线性的序列")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/23/a9ad784eb2037.png",alt:"image-20210304152406124"}})]),t._v(" "),a("h2",{attrs:{id:"关键路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关键路径"}},[t._v("#")]),t._v(" 关键路径")]),t._v(" "),a("h3",{attrs:{id:"aoe网"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aoe网"}},[t._v("#")]),t._v(" AOE网")]),t._v(" "),a("p",[t._v("与AOV-网相对应的是AOE-网(Activity On Edge) ， 即以边表示活动的网。AOE-网是一个带权的有向无环图， 其中， 顶点表示事件， 弧表示活动， 权表示活动持续的时间。通常， AOE-网用于估算工程的完成时间")]),t._v(" "),a("p",[t._v("一个典型的AOE网如下")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/25/428f65c32bbb7.png",alt:"image-20210325155417749"}})]),t._v(" "),a("p",[t._v("AOE网通常需要解决下面两个问题")]),t._v(" "),a("ol",[a("li",[t._v("估算完成整项工程需要多少时间")]),t._v(" "),a("li",[t._v("判断那些活动是影响工程进度的关键")])]),t._v(" "),a("h4",{attrs:{id:"四个描述量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四个描述量"}},[t._v("#")]),t._v(" 四个描述量")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/23/7e11f9d1dd4c9.png",alt:"image-20210304153448610"}})]),t._v(" "),a("h4",{attrs:{id:"计算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#计算"}},[t._v("#")]),t._v(" 计算")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/23/7dee531c929dc.png",alt:"image-20210304154119102"}})]),t._v(" "),a("p",[a("strong",[t._v("首先我们求出各个状态的最早时间")])]),t._v(" "),a("p",[t._v("这个过程是要从源点开始向汇点顺推：")]),t._v(" "),a("ol",[a("li",[t._v("V1是源点，其最早开始时间是0。")]),t._v(" "),a("li",[t._v("V2、V3、V4最早时间分别是是6、4、5。")]),t._v(" "),a("li",[t._v("对于V5而言，V2到V5所花费时间是6+1=7，而V3到V5所花费时间是4+1=5。我们要按"),a("strong",[t._v("最大计")]),t._v("，也就是V5最早时间是max{7,5}=7，按"),a("strong",[t._v("最大计")]),t._v("是因为只有活动a4和a5同时完成了，才能到达V5状态。V3到V5需要5分钟，但是此时a4活动尚未完成（7分钟），所以都不能算到达V5，故而要按最大计。")]),t._v(" "),a("li",[t._v("V6只有从V4到达，所以V6的最早完成时间是（5+2=）7。")]),t._v(" "),a("li",[t._v("同理，V7最早完成时间是16。")]),t._v(" "),a("li",[t._v("对于V8而言，和V5处理方法一致。V8=max{V5+7,V6+4}={7+7,7+4}=14。")]),t._v(" "),a("li",[t._v("V9可算出是18。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/23/4187807633e3a.png",alt:"image-20210304154200856"}})]),t._v(" "),a("p",[a("strong",[t._v("然后我们求各个状态最晚时间")])]),t._v(" "),a("p",[t._v("这个过程是要从汇点开始向源点逆推：")]),t._v(" "),a("p",[t._v("V9完成时间为18，最V7"),a("strong",[t._v("最迟开始")]),t._v("时间是（18-2=）16")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/23/c0baad58d1a9b.png",alt:"image-20210304154343038"}})]),t._v(" "),a("p",[t._v("因为活动a10所需时间2。如果V7开始时间比16晚，则V9完成时间就会比18晚，这显然不对。")]),t._v(" "),a("p",[t._v("同理，V8"),a("strong",[t._v("最迟开始")]),t._v("时间为14。")]),t._v(" "),a("p",[t._v("对于V5而言，可以从V7、V8两个点开始向前推算，此时要按"),a("strong",[t._v("最小计")]),t._v("，即V5(最晚)=min{V7-9,V8-7}=min{16-9,14-7}=7。\n"),a("strong",[t._v("请注意！！")]),t._v("，min{V7-9,V8-7}中，V7、V8取的都是前面算出的最迟开始时间（而不是最早开始时间）。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/23/d61226e42009c.png",alt:"image-20210304154412009"}})]),t._v(" "),a("ol",[a("li",[t._v("按"),a("strong",[t._v("最小计")]),t._v("，是因为如果按最大计去计算V5的最晚开始时间，那么加上a7和a8的活动时间后，V7、V8至少有一个会比之前逆推算得出的最晚时间还要晚，这就发生了错误。")]),t._v(" "),a("li",[t._v("同理，可计算出剩下的点")])]),t._v(" "),a("p",[t._v("这样，我们可以得到各个状态的最晚时间的表")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/23/3973cefccb19c.png",alt:"image-20210304154457951"}})]),t._v(" "),a("p",[t._v("事实上，源点和汇点的最晚时间和最早时间必定是相同的。")]),t._v(" "),a("p",[a("strong",[t._v("3.求出关键路径")])]),t._v(" "),a("hr"),t._v(" "),a("p",[a("strong",[t._v("求出关键活动，则关键活动所在路径即为关键路径")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/23/47b8e33cfea3b.png",alt:"image-20210304154555164"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/23/f848dfc8f08c9.png",alt:"image-20210304154603926"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/23/620b03157fb8e.png",alt:"image-20210304154615651"}})]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("值得注意的是")]),t._v("，顶点的最早开始时间等于最晚开始时间 是 该顶点处于关键路径 的 不充分不必要条件。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/23/0746f7c943895.png",alt:"image-20210304154647378"}})]),t._v(" "),a("blockquote",[a("p",[t._v("参考：")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/wkfvawl/p/9985083.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("数据结构——关于图的存储中十字链表和邻接多重表的理解和思考 - 王陸 - 博客园 (cnblogs.com)"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/skywang12345/p/3711483.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("图的遍历之 深度优先搜索和广度优先搜索 - 如果天空不死 - 博客园 (cnblogs.com)"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/qq_35644234/article/details/60870719",target:"_blank",rel:"noopener noreferrer"}},[t._v("最短路径问题---Dijkstra算法详解_William-CSDN博客_dijkstra"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/qq_35644234/article/details/60875818",target:"_blank",rel:"noopener noreferrer"}},[t._v("最短路径问题---Floyd算法详解_William-CSDN博客_floyd算法"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/1857ed4d8128",target:"_blank",rel:"noopener noreferrer"}},[t._v("关键路径算法演示（AOE网） - 简书 (jianshu.com)"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=_.exports}}]);