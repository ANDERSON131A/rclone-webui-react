(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{727:function(e,n,t){"use strict";t.r(n);var a=t(44),l=t(45),o=t(133),r=t(132),c=t(134),i=t(0),m=t.n(i),u=t(50),s=t(439),p=t(480),d={items:[{name:"Dashboard",url:"/dashboard",icon:"icon-speedometer"},{name:"Configs",url:"/showconfig",icon:"icon-note"},{name:"Explorer",url:"/remoteExplorer",icon:"icon-screen-desktop"},{name:"Backend",url:"/rcloneBackend",icon:"icon-star"},{name:"Log Out",url:"/login",icon:"icon-logout"}]},h=m.a.lazy(function(){return Promise.all([t.e(0),t.e(2),t.e(20)]).then(t.bind(null,726))}),f=m.a.lazy(function(){return Promise.all([t.e(1),t.e(9),t.e(19)]).then(t.bind(null,728))}),E=m.a.lazy(function(){return t.e(16).then(t.bind(null,731))}),b=m.a.lazy(function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(7)]).then(t.bind(null,724))}),g=[{path:"/",exact:!0,name:"Home"},{path:"/newdrive/edit/:drivePrefix",name:"New Drive",component:h},{path:"/newdrive",exact:!0,name:"New Drive",component:h},{path:"/login",exact:!0,name:"New Drive",component:m.a.lazy(function(){return Promise.all([t.e(0),t.e(18)]).then(t.bind(null,712))})},{path:"/dashboard",name:"Dashboard",component:f},{path:"/showconfig",name:"Configs",component:E},{path:"/remoteExplorer/:remoteName/:remotePath",exact:!0,name:"Explorer",component:b},{path:"/remoteExplorer",name:"Explorer",component:b},{path:"/rcloneBackend",name:"Rclone Backend",component:m.a.lazy(function(){return t.e(13).then(t.bind(null,723))})}],y=t(136),x=t(36),v=m.a.lazy(function(){return t.e(17).then(t.bind(null,725))}),k=m.a.lazy(function(){return t.e(21).then(t.bind(null,716))}),w=m.a.lazy(function(){return Promise.all([t.e(1),t.e(3),t.e(8)]).then(t.bind(null,729))}),z=function(e){function n(){var e,t;Object(a.a)(this,n);for(var l=arguments.length,c=new Array(l),i=0;i<l;i++)c[i]=arguments[i];return(t=Object(o.a)(this,(e=Object(r.a)(n)).call.apply(e,[this].concat(c)))).loading=function(){return m.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},t}return Object(c.a)(n,e),Object(l.a)(n,[{key:"componentWillMount",value:function(){localStorage.getItem(x.g)&&localStorage.getItem(x.e)||this.props.history.push("/login")}},{key:"render",value:function(){var e=this;return m.a.createElement("div",{className:"app","data-test":"defaultLayout"},m.a.createElement(p.e,{fixed:!0},m.a.createElement(i.Suspense,{fallback:this.loading()},m.a.createElement(w,{onLogout:function(n){return e.signOut(n)}}))),m.a.createElement("div",{className:"app-body"},m.a.createElement(p.h,{fixed:!0,display:"lg"},m.a.createElement(p.k,null),m.a.createElement(p.j,null),m.a.createElement(i.Suspense,null,m.a.createElement(p.m,Object.assign({navConfig:d},this.props))),m.a.createElement(p.i,null),m.a.createElement(p.l,null)),m.a.createElement("main",{className:"main"},m.a.createElement(p.c,{appRoutes:g}),m.a.createElement(s.a,{fluid:!0},m.a.createElement(i.Suspense,{fallback:this.loading()},m.a.createElement(u.d,null,g.map(function(e,n){return e.component?m.a.createElement(u.b,{key:n,path:e.path,exact:e.exact,name:e.name,render:function(n){return m.a.createElement(e.component,n)}}):null}),m.a.createElement(u.a,{from:"/",to:"/login"}))))),m.a.createElement(p.a,{fixed:!0},m.a.createElement(i.Suspense,{fallback:this.loading()},m.a.createElement(v,null)))),m.a.createElement(p.d,null,m.a.createElement(i.Suspense,{fallback:this.loading()},m.a.createElement(k,null))))}}]),n}(i.Component);n.default=Object(y.b)(function(e){return{isConnected:e.status.isConnected}},{})(z)}}]);
//# sourceMappingURL=22.50df0190.chunk.js.map