(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{409:function(t,s,a){"use strict";a.r(s);var _=a(6),r=Object(_.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"一致性哈希"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一致性哈希"}},[t._v("#")]),t._v(" 一致性哈希")]),t._v(" "),s("h3",{attrs:{id:"传统哈希"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#传统哈希"}},[t._v("#")]),t._v(" 传统哈希")]),t._v(" "),s("p",[t._v("当数据太大而无法存储在一个节点或机器上时，我们就需要把数据放在多台服务器上，这个时候我们就可以简单使用取模运算来实现简单的负载均衡")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img.xiaoyou66.com/2021/04/11/fac7d744e0008.png",alt:"image.png"}})]),t._v(" "),s("p",[t._v("但是这样有一个问题，当我们节点增加或者减少时怎么办？这样就会导致映射关系发生变化，导致我们需要重新计算，会造成缓存雪崩的后果，基于此，我们提出了一致性哈希算法")]),t._v(" "),s("h3",{attrs:{id:"一致性哈希算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一致性哈希算法"}},[t._v("#")]),t._v(" 一致性哈希算法")]),t._v(" "),s("p",[t._v("一致性哈希算法在 1997 年由麻省理工学院提出，是一种特殊的哈希算法，在移除或者添加一个服务器时，能够尽可能小地改变已存在的服务请求与处理请求服务器之间的映射关系。一致性哈希解决了简单哈希算法在分布式"),s("a",{attrs:{href:"https://baike.baidu.com/item/%E5%93%88%E5%B8%8C%E8%A1%A8/5981869",target:"_blank",rel:"noopener noreferrer"}},[t._v("哈希表"),s("OutboundLink")],1),t._v("（Distributed Hash Table，DHT）中存在的动态伸缩等问题 。")]),t._v(" "),s("p",[s("strong",[t._v("一致性哈希算法有下面几个优点")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("可扩展性。一致性哈希算法保证了增加或减少服务器时，数据存储的改变最少，相比传统哈希算法大大节省了数据移动的开销 。")])]),t._v(" "),s("li",[s("p",[t._v("更好地适应数据的快速增长。采用一致性哈希算法分布数据，当数据不断增长时，部分虚拟节点中可能包含很多数据、造成数据在虚拟节点上分布不均衡，此时可以将包含数据多的虚拟节点分裂，这种分裂仅仅是将原有的虚拟节点一分为二、不需要对全部的数据进行重新哈希和划分。")]),t._v(" "),s("p",[t._v("虚拟节点分裂后，如果物理服务器的负载仍然不均衡，只需在服务器之间调整部分虚拟节点的存储分布。这样可以随数据的增长而动态的扩展物理服务器的数量，且代价远比传统哈希算法重新分布所有数据要小很多。")])])]),t._v(" "),s("p",[s("strong",[t._v("一致性哈希算法与哈希算法的关系")])]),t._v(" "),s("p",[t._v("一致性哈希算法是在哈希算法基础上提出的，在动态变化的分布式环境中，哈希算法应该满足的几个条件：平衡性、单调性和分散性。")]),t._v(" "),s("ul",[s("li",[t._v("平衡性：是指 hash 的结果应该平均分配到各个节点，这样从算法上解决了负载均衡问题。")]),t._v(" "),s("li",[t._v("单调性：是指在新增或者删减节点时，不影响系统正常运行。")]),t._v(" "),s("li",[t._v("分散性：是指数据应该分散地存放在分布式集群中的各个节点（节点自己可以有备份），不必每个节点都存储所有的数据。")])]),t._v(" "),s("h3",{attrs:{id:"算法原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#算法原理"}},[t._v("#")]),t._v(" 算法原理")]),t._v(" "),s("p",[t._v("首先我们有一个叫一致性哈希环的数据结构，这个环的起点是 0，终点是 2^32 - 1，并且起点与终点连接，故这个环的整数分布范围是 [0, 2^32-1]")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img.xiaoyou66.com/2021/04/11/87cff29755e60.png",alt:"image.png"}})]),t._v(" "),s("p",[t._v("当我们有数据的时候，会经过哈希运算，结果会在这分布范围内。然后我们还需要放服务器，我们可以对服务器IP或者主机名进行哈希运算，确定在哈希环上的位置，比如我们这样排布：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img.xiaoyou66.com/2021/04/11/27892c88c8999.png",alt:"image.png"}})]),t._v(" "),s("p",[s("strong",[t._v("将对象和服务器都放置到同一个哈希环后，在哈希环上顺时针查找距离这个对象的 hash 值最近的机器，即是这个对象所属的机器。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img.xiaoyou66.com/2021/04/11/66f41c12646cf.png",alt:"image.png"}})]),t._v(" "),s("p",[t._v("当我们增加服务器时，比如下面这样")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img.xiaoyou66.com/2021/04/11/96f6f51694419.png",alt:"image.png"}})]),t._v(" "),s("p",[t._v("对于上述的情况，只有 t1 和 t2 服务器之间的对象需要重新分配。在以上示例中只有 o3 对象需要重新分配，即它被重新到 cs4 服务器。在前面我们已经分析过，如果使用简单的取模方法，当新添加服务器时可能会导致大部分缓存失效，而使用一致性哈希算法后，这种情况得到了较大的改善，因为只有少部分对象需要重新分配。")]),t._v(" "),s("p",[t._v("当我们减少服务器时，比如下面这样")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img.xiaoyou66.com/2021/04/11/6679502904974.png",alt:"image.png"}})]),t._v(" "),s("h3",{attrs:{id:"虚拟节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#虚拟节点"}},[t._v("#")]),t._v(" 虚拟节点")]),t._v(" "),s("p",[t._v("到这里一致性哈希的基本原理已经介绍完了，但对于新增服务器的情况还存在一些问题。新增的服务器 cs4 只分担了 cs1 服务器的负载，服务器 cs2 和 cs3 并没有因为 cs4 服务器的加入而减少负载压力。如果 cs4 服务器的性能与原有服务器的性能一致甚至可能更高，那么这种结果并不是我们所期望的。")]),t._v(" "),s("p",[s("strong",[t._v("针对这个问题，我们可以通过引入虚拟节点来解决负载不均衡的问题。即将每台物理服务器虚拟为一组虚拟服务器，将虚拟服务器放置到哈希环上，如果要确定对象的服务器，需先确定对象的虚拟服务器，再由虚拟服务器确定物理服务器。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img.xiaoyou66.com/2021/04/12/1a7a6128638bd.png",alt:"image.png"}})]),t._v(" "),s("p",[t._v("图中 o1 和 o2 表示对象，v1 ~ v6 表示虚拟服务器，s1 ~ s3 表示物理服务器。")]),t._v(" "),s("p",[t._v("参考：")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://segmentfault.com/a/1190000021199728",target:"_blank",rel:"noopener noreferrer"}},[t._v("图解一致性哈希算法 - SegmentFault 思否"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"其他"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),s("h3",{attrs:{id:"多台web服务器上共享session"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多台web服务器上共享session"}},[t._v("#")]),t._v(" 多台Web服务器上共享Session")]),t._v(" "),s("ul",[s("li",[t._v("通过数据库mysql共享session")]),t._v(" "),s("li",[t._v("通过cookie共享session")]),t._v(" "),s("li",[t._v("通过服务器之间的数据同步session")]),t._v(" "),s("li",[t._v("通过NFS共享Session")]),t._v(" "),s("li",[t._v("通过memcache同步session")]),t._v(" "),s("li",[t._v("通过redis共享session")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.jianshu.com/p/6098018f406f",target:"_blank",rel:"noopener noreferrer"}},[t._v("多台服务器共享session问题 - 简书 (jianshu.com)"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);