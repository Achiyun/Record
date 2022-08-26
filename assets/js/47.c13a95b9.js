(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{355:function(n,t,a){"use strict";a.r(t);var r=a(6),o=Object(r.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("p",[n._v("常考的主要分为"),t("strong",[n._v("InnoDB")]),n._v("，"),t("strong",[n._v("MyISAM")])]),n._v(" "),t("h2",{attrs:{id:"主要区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主要区别"}},[n._v("#")]),n._v(" 主要区别")]),n._v(" "),t("p",[t("img",{attrs:{src:"https://img.xiaoyou66.com/images/2020/11/23/V4mhE.png",alt:"img"}})]),n._v(" "),t("p",[t("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/21/3369a788da806.png",alt:"image-20210308092228291"}})]),n._v(" "),t("h2",{attrs:{id:"innodb引擎的4大特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#innodb引擎的4大特性"}},[n._v("#")]),n._v(" InnoDB引擎的4大特性")]),n._v(" "),t("ul",[t("li",[n._v("插入缓冲（insert buffer)")]),n._v(" "),t("li",[n._v("二次写(double write)")]),n._v(" "),t("li",[n._v("自适应哈希索引(ahi)")]),n._v(" "),t("li",[n._v("预读(read ahead)")])]),n._v(" "),t("p",[n._v("深入参考："),t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/109528131",target:"_blank",rel:"noopener noreferrer"}},[n._v("InnoDB四大特性 - 知乎 (zhihu.com)"),t("OutboundLink")],1)]),n._v(" "),t("h2",{attrs:{id:"innodb行级锁是基于什么样的机制实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#innodb行级锁是基于什么样的机制实现"}},[n._v("#")]),n._v(" InnoDB行级锁是基于什么样的机制实现")]),n._v(" "),t("p",[n._v("InnoDB行锁是通过给索引上的索引项加锁来实现的，InnoDB这种行锁实现特点意味着：只有通过索引条件检索数据，InnoDB才使用行级锁，否则，InnoDB将使用表锁！")]),n._v(" "),t("p",[t("strong",[n._v("特点")])]),n._v(" "),t("ol",[t("li",[n._v("在不通过索引查询时，会使用表锁，而不是行锁")]),n._v(" "),t("li",[n._v("因为针对索引加的锁，不是针对记录加的锁，所以即使是访问不同行的记录，"),t("strong",[n._v("如果使用了相同的索引键，也是会出现锁冲突的")]),n._v("。")]),n._v(" "),t("li",[n._v("当有多个索引时，不同的事务可以使用不同的索引锁定不同的行。另外，不论是使用主键索引、唯一索引或普通索引，InnoDB都会使用行锁来对数据加锁。")]),n._v(" "),t("li",[n._v("即便在条件中使用了索引字段，但具体是否使用索引来检索数据是由MySQL通过判断不同执行计划的代价来决定的，如果MySQL认为全表扫描效率更高，比如对一些很小的表，它就不会使用索引，这种情况下InnoDB将使用表锁，而不是行锁。")])]),n._v(" "),t("h3",{attrs:{id:"innodb行级锁的类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#innodb行级锁的类型"}},[n._v("#")]),n._v(" InnoDB行级锁的类型")]),n._v(" "),t("p",[n._v("InnoDB的行级锁定同样分为两种类型：共享锁和排他锁，而在锁定机制的实现过程中为了让行级锁定和表级锁定共存，InnoDB也同样使用了 "),t("strong",[n._v("意向锁（表级锁定）")]),n._v(" 的概念，也就有了意向共享锁和意向排他锁这两种。")]),n._v(" "),t("p",[n._v("深入参考："),t("a",{attrs:{href:"https://segmentfault.com/a/1190000020727170",target:"_blank",rel:"noopener noreferrer"}},[n._v("了解Mysql的行级锁——《深究Mysql锁》 - SegmentFault 思否"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=o.exports}}]);