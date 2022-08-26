(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{384:function(v,t,a){"use strict";a.r(t);var P=a(6),_=Object(P.a)({},(function(){var v=this,t=v._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"arp协议和arp攻击"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#arp协议和arp攻击"}},[v._v("#")]),v._v(" ARP协议和ARP攻击")]),v._v(" "),t("p",[t("strong",[v._v("ARP协议完成了IP地址与物理地址的映射")]),v._v("。每一个主机都设有一个 ARP 高速缓存，里面有"),t("strong",[v._v("所在的局域网")]),v._v("上的各主机和路由器的 IP 地址到硬件地址的映射表。当源主机要发送数据包到目的主机时，会先检查自己的ARP高速缓存中有没有目的主机的MAC地址，如果有，就直接将数据包发到这个MAC地址，如果没有，就向"),t("strong",[v._v("所在的局域网")]),v._v("发起一个ARP请求的广播包（在发送自己的 ARP 请求时，同时会带上自己的 IP 地址到硬件地址的映射），收到请求的主机检查自己的IP地址和目的主机的IP地址是否一致，如果一致，则先保存源主机的映射到自己的ARP缓存，然后给源主机发送一个ARP响应数据包。源主机收到响应数据包之后，先添加目的主机的IP地址与MAC地址的映射，再进行数据传送。如果源主机一直没有收到响应，表示ARP查询失败。")]),v._v(" "),t("p",[v._v("如果所要找的主机和源主机不在同一个局域网上，那么就要通过 ARP 找到一个位于本局域网上的某个路由器的硬件地址，然后把分组发送给这个路由器，让这个路由器把分组转发给下一个网络。剩下的工作就由下一个网络来做。")]),v._v(" "),t("p",[v._v("ARP攻击的就是伪造ARP应答的IP地址和MAC地址")]),v._v(" "),t("h2",{attrs:{id:"icmp协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#icmp协议"}},[v._v("#")]),v._v(" ICMP协议")]),v._v(" "),t("p",[v._v("ICMP协议简介ICMP是“Internet Control Message Protocol”（Internet控制消息协议）的缩写。它是TCP/IP协议族的一个子协议，用于在IP主机、路由器之间传递控制消息。控制消息是指网络通不通、主机是否可达、路由是否可用等网络本身的消息。这些控制消息虽然并不传输用户数据，但是对于用户数据的传递起着重要的作用。")]),v._v(" "),t("p",[v._v("我们常用的 ping 程序，使用的就是查询类型的 ICMP 报文，它是一种主动请求，并且获得主动应答的 ICMP 协议。")]),v._v(" "),t("h2",{attrs:{id:"路由器和交换机的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#路由器和交换机的区别"}},[v._v("#")]),v._v(" 路由器和交换机的区别")]),v._v(" "),t("ol",[t("li",[v._v("工作层次不同：交换机比路由器更简单，路由器比交换器能获取更多信息")]),v._v(" "),t("li",[v._v("交换机工作在数据链路层，而路由器工作在网络层")]),v._v(" "),t("li",[v._v("数据转发所依据的对象不同（交换机根据mac地址，路由器根据ip地址进行转发）")]),v._v(" "),t("li",[v._v("传统的交换机只能分割冲突域，不能分割广播域;而路由器可以分割广播域")])]),v._v(" "),t("h2",{attrs:{id:"ip地址分类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ip地址分类"}},[v._v("#")]),v._v(" IP地址分类")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://img.xiaoyou66.com/images/2020/11/23/V4MS3.png",alt:"img"}})]),v._v(" "),t("h2",{attrs:{id:"什么是nat-网络地址转换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是nat-网络地址转换"}},[v._v("#")]),v._v(" 什么是NAT（网络地址转换）")]),v._v(" "),t("p",[v._v("用于解决内网中的主机要和因特网上的主机通信。由NAT路由器将主机的本地IP地址转换为全球IP地址，分为静态转换（转换得到的全球IP地址固定不变）和动态NAT转换。")]),v._v(" "),t("h2",{attrs:{id:"网络层提供的两种服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络层提供的两种服务"}},[v._v("#")]),v._v(" 网络层提供的两种服务")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/21/b9e09e3f8593b.png",alt:"image-20210202175328716"}})]),v._v(" "),t("h2",{attrs:{id:"dhcp协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dhcp协议"}},[v._v("#")]),v._v(" DHCP协议")]),v._v(" "),t("p",[v._v("DHCP租约过程就是DHCP客户机动态获取IP地址的过程。")]),v._v(" "),t("p",[v._v("DHCP租约过程分为4步：")]),v._v(" "),t("ol",[t("li",[v._v("客户机请求IP（客户机发DHCPDISCOVER广播包）；")]),v._v(" "),t("li",[v._v("服务器响应（服务器发DHCPOFFER广播包）；")]),v._v(" "),t("li",[v._v("客户机选择IP（客户机发DHCPREQUEST广播包）；")]),v._v(" "),t("li",[v._v("服务器确定租约（服务器发DHCPACK/DHCPNAK广播包）")])]),v._v(" "),t("h2",{attrs:{id:"ipv4和ipv6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ipv4和ipv6"}},[v._v("#")]),v._v(" IPV4和IPV6")]),v._v(" "),t("ul",[t("li",[v._v("IPv4可提供4,294,967,296个地址，IPv6将原来的32位地址空间增大到128位，数目是2的128次方。能够对地球上每平方米提供6×1023个网络地址，在可预见的将来是不会耗尽的。")]),v._v(" "),t("li",[v._v("IPv4 使用地址解析通讯协议 (ARP) ，IPv6使用用多点传播 Neighbor Solicitation 消息取代地址解析通讯协议 (ARP) 。")]),v._v(" "),t("li",[v._v("IPv4 中路由器不能识别用于服务质量的QoS 处理的 payload。IPv6中路由器使用 Flow Label 字段可以识别用于服务质量的 QoS 处理的 payload。")]),v._v(" "),t("li",[v._v("IPv4的回路地址为: 127.0.0.1，IPv6的回路地址为 : 000:0000:0000:0000:0000:0000:0000:0001 可以简写为 ::1。")]),v._v(" "),t("li",[v._v("在IPv4中，动态主机配置协议（ Dynamic Host ConfigurationProtocol，DHCP）实现了主机IP地址及其相关配置的自动设置。一个DHCP服务器拥有一个IP地址池，主机从DHCP服务器租借IP地址并获得有关的配置信息（如缺省网关、DNS服务器等），由此达到自动设置主机IP地址的目的。IP v6继承了IPv4的这种自动配置服务，并将其称为全状态自动配置（stateful autoconfiguration）。 m.pcwenku.com 供稿")]),v._v(" "),t("li",[v._v("IPv4使用 Internet 群组管理通讯协议 (IGMP) 管理本机子网络群组成员身份，IPv6使用 Multicast Listener Discovery (MLD) 消息取代 IGMP。")]),v._v(" "),t("li",[v._v("内置的安全性。IPSec由IETF开发是确保秘密、完整、真实的信息穿越公共IP网的一种工业标准。IPsec不再是IP协议的补充部分，在IPv6中IPsec是IPv6自身所具有的功能。IPv4选择性支持IPSec，IPv6自动支持IPSec。")]),v._v(" "),t("li",[v._v("更好的QoS支持。QoS是网络的一种安全机制，通常情况下不需要QoS，但是对关键应用和多媒体应用就十分必要。当网络过载或拥塞时，QoS 能确保重要业务量不受延迟或丢弃，同时保证网络的高效运行。在IPv6 的包头中定义了如何处理与识别传输， IPv6 包头中使用 Flow Label 来识别传输，可使路由器标识和特殊处理属于一个流量的封包。流量是指来源和目的之间的一系列封包，因为是在 IPv6 包头中识别传输，所以即使透过 IPSec 加密的封包 payload，仍可实现对 QoS 的支持。")])])])}),[],!1,null,null,null);t.default=_.exports}}]);