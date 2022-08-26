(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{393:function(e,v,r){"use strict";r.r(v);var _=r(6),o=Object(_.a)({},(function(){var e=this,v=e._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h3",{attrs:{id:"说说自己对于-spring-mvc-了解"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#说说自己对于-spring-mvc-了解"}},[e._v("#")]),e._v(" 说说自己对于 spring-mvc 了解")]),e._v(" "),v("p",[e._v("谈到这个问题，我们不得不提提之前 Model1 和 Model2 这两个没有 Spring MVC 的时代。")]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("Model1 时代")]),e._v(" : 很多学 Java 后端比较晚的朋友可能并没有接触过 Model1 模式下的 JavaWeb 应用开发。在 Model1 模式下，整个 Web 应用几乎全部用 JSP 页面组成，只用少量的 JavaBean 来处理数据库连接、访问等操作。这个模式下 JSP 既是控制层又是表现层。显而易见，这种模式存在很多问题。比如①将控制逻辑和表现逻辑混杂在一起，导致代码重用率极低；②前端和后端相互依赖，难以进行测试并且开发效率极低；")]),e._v(" "),v("li",[v("strong",[e._v("Model2 时代")]),e._v(" ：学过 Servlet 并做过相关 Demo 的朋友应该了解“Java Bean(Model)+ JSP（View,）+Servlet（Controller） ”这种开发模式,这就是早期的 JavaWeb MVC 开发模式。Model:系统涉及的数据，也就是 dao 和 bean。View：展示模型中的数据，只是用来展示。Controller：处理用户请求都发送给 ，返回数据给 JSP 并展示给用户。")])]),e._v(" "),v("p",[e._v("Model2 模式下还存在很多问题，Model2的抽象和封装程度还远远不够，使用Model2进行开发时不可避免地会重复造轮子，这就大大降低了程序的可维护性和复用性。于是很多JavaWeb开发相关的 MVC 框架应运而生比如Struts2，但是 Struts2 比较笨重。随着 Spring 轻量级开发框架的流行，Spring 生态圈出现了 Spring MVC 框架， Spring MVC 是当前最优秀的 MVC 框架。相比于 Struts2 ， Spring MVC 使用更加简单和方便，开发效率更高，并且 Spring MVC 运行速度更快。")]),e._v(" "),v("p",[e._v("MVC 是一种设计模式,Spring MVC 是一款很优秀的 MVC 框架。Spring MVC 可以帮助我们进行更简洁的Web层的开发，并且它天生与 Spring 框架集成。Spring MVC 下我们一般把后端项目分为 Service层（处理业务）、Dao层（数据库操作）、Entity层（实体类）、Controller层(控制层，返回数据给前台页面)。")]),e._v(" "),v("p",[e._v("简单原理图如下")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://img.xiaoyou66.com/2021/04/09/3df4f645c34e7.jpg",alt:"img"}})]),e._v(" "),v("h3",{attrs:{id:"spring-mvc的流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#spring-mvc的流程"}},[e._v("#")]),e._v(" spring mvc的流程")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/23/b616f8a157c03.png",alt:"image.png"}})]),e._v(" "),v("ol",[v("li",[e._v("客户端（浏览器）发送请求，直接请求到 "),v("code",[e._v("DispatcherServlet")]),e._v("。")]),e._v(" "),v("li",[v("code",[e._v("DispatcherServlet")]),e._v(" 根据请求信息调用 "),v("code",[e._v("HandlerMapping")]),e._v("，解析请求对应的 "),v("code",[e._v("Handler")]),e._v("。")]),e._v(" "),v("li",[e._v("解析到对应的 "),v("code",[e._v("Handler")]),e._v("（也就是我们平常说的 "),v("code",[e._v("Controller")]),e._v(" 控制器）后，开始由 "),v("code",[e._v("HandlerAdapter")]),e._v(" 适配器处理。")]),e._v(" "),v("li",[v("code",[e._v("HandlerAdapter")]),e._v(" 会根据 "),v("code",[e._v("Handler")]),e._v("来调用真正的处理器来处理请求，并处理相应的业务逻辑。")]),e._v(" "),v("li",[e._v("处理器处理完业务后，会返回一个 "),v("code",[e._v("ModelAndView")]),e._v(" 对象，"),v("code",[e._v("Model")]),e._v(" 是返回的数据对象，"),v("code",[e._v("View")]),e._v(" 是个逻辑上的 "),v("code",[e._v("View")]),e._v("。")]),e._v(" "),v("li",[v("code",[e._v("ViewResolver")]),e._v(" 会根据逻辑 "),v("code",[e._v("View")]),e._v(" 查找实际的 "),v("code",[e._v("View")]),e._v("。")]),e._v(" "),v("li",[v("code",[e._v("DispaterServlet")]),e._v(" 把返回的 "),v("code",[e._v("Model")]),e._v(" 传给 "),v("code",[e._v("View")]),e._v("（视图渲染）。")]),e._v(" "),v("li",[e._v("把 "),v("code",[e._v("View")]),e._v(" 返回给请求者（浏览器）")])]),e._v(" "),v("p",[e._v("参考")]),e._v(" "),v("ol",[v("li",[v("a",{attrs:{href:"https://www.jianshu.com/p/8a20c547e245",target:"_blank",rel:"noopener noreferrer"}},[e._v("SpringMVC执行流程及工作原理 - 简书 (jianshu.com)"),v("OutboundLink")],1)])])])}),[],!1,null,null,null);v.default=o.exports}}]);