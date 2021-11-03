(this["webpackJsonpapp-container"]=this["webpackJsonpapp-container"]||[]).push([[0],{19:function(e,n,t){e.exports=t(33)},24:function(e,n,t){},33:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(12),c=t.n(o),i=(t(24),t(7)),l=t(1),s=t(13),p=t(14),m=t(18),d=t(17),u=function(e){Object(m.a)(t,e);var n=Object(d.a)(t);function t(){var e;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).renderMicroFrontend=function(){var n=e.props,t=n.name,a=n.window,r=n.history;a["render".concat(t)]&&a["render".concat(t)]("".concat(t,"-container"),r)},e}return Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this,n=this.props,t=n.name,a=n.host,r=n.document,o="micro-frontend-script-".concat(t);r.getElementById(o)?this.renderMicroFrontend():fetch("".concat(a,"/asset-manifest.json")).then((function(e){return e.json()})).then((function(n){var t=r.createElement("script");t.id=o,t.crossOrigin="",t.src="".concat(a).concat(n.files["main.js"]),t.onload=e.renderMicroFrontend,r.head.appendChild(t)}))}},{key:"componentWillUnmount",value:function(){var e=this.props,n=e.name,t=e.window;t["unmount".concat(n)]&&t["unmount".concat(n)]("".concat(n,"-container"))}},{key:"render",value:function(){return r.a.createElement("main",{id:"".concat(this.props.name,"-container")})}}]),t}(r.a.Component);u.defaultProps={document:document,window:window};var h=u,f=function(e){var n=e.history;return r.a.createElement(h,{history:n,host:"https://developebyarif.github.io/mfe-micro-app-1/",name:"createreactapp"})},E=function(e){var n=e.history;return r.a.createElement(h,{history:n,host:"http://localhost:4002",name:"createreactapp2"})},v=function(e){var n=e.history;return r.a.createElement(h,{history:n,host:"http://localhost:4003",name:"createreactapp3"})},w=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"What is a micro front-ends approach? The term micro front-ends first came up in the ThoughtWorks Technology Radar in November 2016. It extends the concepts of microservices to front-end development."),r.a.createElement("p",null,"The approach is to split the browser-based code into micro front-ends by breaking down application features. By making smaller and feature-centered codebases, we achieve the software development goal of decoupling."),r.a.createElement("p",null,"Although the codebases are decoupled, the user experiences are coherent. In addition, each codebase can be implemented, upgraded, updated, and deployed independently."),r.a.createElement("p",null,"Here is the paradise of micro front-ends. JavaScript applications, regardless of frameworks and versions, are launched by a container. These applications, legacy and new, work together seamlessly, and act like one application."))},b=function(e){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"This is an example of micro frontend."),r.a.createElement("p",null,"In the links below, Home is a component bundled with the App Container, and Micro Frontend is a micro frontend app loaded from an outside route."),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/createreactapp"},"Micro Frontend: Create React App")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/micro-frontend-2"},"Micro Frontend 2: Create React App")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/micro-frontend-3"},"Micro Frontend 3: Create React App"))),r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/home",component:w}),r.a.createElement(l.a,{path:"/createreactapp",render:function(){return r.a.createElement(f,null)}}),r.a.createElement(l.a,{path:"/micro-frontend-2",render:function(){return r.a.createElement(E,null)}}),r.a.createElement(l.a,{path:"/micro-frontend-3",render:function(){return r.a.createElement(v,null)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.35b22d0d.chunk.js.map