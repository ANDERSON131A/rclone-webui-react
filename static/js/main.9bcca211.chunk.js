(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{198:function(e,t,n){e.exports=n(379)},370:function(e,t,n){},371:function(e,t,n){},379:function(e,t,n){"use strict";n.r(t);n(199),n(162),n(290),n(295),n(296),n(298),n(299),n(301),n(302),n(303),n(304),n(305),n(306),n(308),n(310),n(311),n(183),n(314),n(315),n(317),n(318),n(319),n(320),n(321),n(322),n(323),n(324),n(325),n(326),n(327),n(328),n(329),n(330),n(333),n(334),n(336),n(337),n(338),n(339),n(340),n(341),n(342),n(343),n(344),n(345),n(346),n(347),n(349),n(350),n(351),n(352),n(353),n(354),n(355),n(356),n(357),n(358),n(360),n(361),n(362),n(364);!function(){if("function"===typeof window.CustomEvent)return!1;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e}();var a=n(0),r=n.n(a),i=n(49),c=n.n(i),o=(n(370),n(42)),u=n(43),s=n(128),l=n(127),f=n(129),h=n(133),d=n(48),b=(n(371),n(134)),m=(n(372),r.a.lazy(function(){return Promise.all([n.e(5),n.e(19)]).then(n.bind(null,494))})),p=r.a.lazy(function(){return n.e(7).then(n.bind(null,474))}),k=r.a.lazy(function(){return Promise.all([n.e(8),n.e(20)]).then(n.bind(null,479))}),v=r.a.lazy(function(){return n.e(10).then(n.bind(null,480))}),E=r.a.lazy(function(){return n.e(11).then(n.bind(null,481))}),y=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,null),r.a.createElement(h.a,null,r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("div",{className:"animated fadeIn pt-3 text-center"},"Loading...")},r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/login",name:"Login Page",render:function(e){return r.a.createElement(p,e)}}),r.a.createElement(d.b,{exact:!0,path:"/register",name:"Register Page",render:function(e){return r.a.createElement(k,e)}}),r.a.createElement(d.b,{exact:!0,path:"/404",name:"Page 404",render:function(e){return r.a.createElement(v,e)}}),r.a.createElement(d.b,{exact:!0,path:"/500",name:"Page 500",render:function(e){return r.a.createElement(E,e)}}),r.a.createElement(d.b,{path:"/",name:"Home",render:function(e){return r.a.createElement(m,e)}})))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=n(131),g=n(47),S=n(194),j=n(9),w=n(7),_={isConnected:!1,jobs:{}},P={providers:[],configDump:{}},T=n(35),N={configs:{},remotes:[],files:{},hasError:!1},I=function(){function e(){Object(o.a)(this,e),this.items=[{remoteName:"",remotePath:""}],this.count=1}return Object(u.a)(e,[{key:"getLength",value:function(){return this.count}},{key:"push",value:function(e){this.items.push(e),this.count=this.count+1}},{key:"pop",value:function(){return this.count>0&&(this.count=this.count-1),this.items.pop()}},{key:"peek",value:function(){return this.items.slice(-1)[0]}},{key:"empty",value:function(){this.items=[],this.count=0}},{key:"moveBack",value:function(){if(this.getLength()>1)return this.pop()}}]),e}(),C=function(){function e(){Object(o.a)(this,e),this.backStack=new I,this.forwardStack=new I}return Object(u.a)(e,[{key:"getLength",value:function(){return this.backStack.getLength()}},{key:"push",value:function(e){this.backStack.push(e),this.forwardStack.empty()}},{key:"pop",value:function(){return this.backStack.pop()}},{key:"peek",value:function(){return this.backStack.peek()}},{key:"empty",value:function(){this.backStack.empty(),this.forwardStack.empty()}},{key:"moveBack",value:function(){var e=this.backStack.moveBack();return e&&this.forwardStack.push(e),e}},{key:"moveForward",value:function(){var e=this.forwardStack.pop();return e&&this.backStack.push(e),e}}]),e}(),A={backStacks:{},currentPaths:{},visibilityFilters:{},gridMode:{}},G=Object(g.c)({status:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w.g:if(t.status===w.q)return Object(j.a)({},e,{jobs:t.payload,isConnected:!0});if(t.status===w.p)return Object(j.a)({},e,{error:t.payload,isConnected:!1});break;default:return e}},config:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w.k:return Object(j.a)({},e,{providers:t.payload});case w.h:if(t.status===w.q)return Object(j.a)({},e,{configDump:t.payload});if(t.status===w.p)return Object(j.a)({},e,{hasError:!0,error:t.payload});break;default:return e}},remote:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w.i:if(t.status===w.q)return Object(j.a)({},e,{configs:Object(j.a)({},e.configs,t.payload),hasError:!1});if(t.status===w.p)return Object(j.a)({},e,{error:t.payload,hasError:!0});break;case w.l:if(t.status===w.q)return Object(j.a)({},e,{remotes:t.payload,hasError:!1});if(t.status===w.p)return Object(j.a)({},e,{error:t.payload,hasError:!0});break;case w.j:if(t.status===w.q)return Object(j.a)({},e,{files:Object(j.a)({},e.files,Object(T.a)({},t.payload.path,{time:new Date,files:t.payload.filesList})),hasError:!1});if(t.status===w.p)return Object(j.a)({},e,{files:Object(j.a)({},e.files,Object(T.a)({},t.payload.path,{time:new Date,files:[],hasError:!0,error:t.payload.error}))});break;default:return e}},explorer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0,n=t.id;if(n){var a=e.backStacks[n];a||(a=new C);var r=t.remoteName,i=t.remotePath;r||(r=""),i||(i="");var c={remoteName:r,remotePath:i},o=e.visibilityFilters[n],u=e.gridMode[n];switch(t.type){case w.b:a.push(c);break;case w.c:0===r.indexOf("/")?(i=r,r="/"):i="",a.empty(),a.push({remoteName:r,remotePath:i});break;case w.d:a.push({remoteName:a.peek().remoteName,remotePath:i});break;case w.f:a=new C;break;case w.o:var s=a.pop();if(s.remotePath&&""!==s.remotePath){var l=s.remotePath.split("/");if(s.remotePath="",l.length>1)for(var f=0;f<l.length-1;f++)s.remotePath=s.remotePath+"/"+l[f]}a.push(s);break;case w.n:a.moveForward();break;case w.m:a.moveBack();break;case w.e:t.filter&&(o=t.filter);break;case w.a:t.mode&&(u=t.mode)}return Object(j.a)({},e,{backStacks:Object(j.a)({},e.backStacks,Object(T.a)({},n,a)),currentPaths:Object(j.a)({},e.currentPaths,Object(T.a)({},n,Object(j.a)({},a.peek()))),visibilityFilters:Object(j.a)({},e.visibilityFilters,Object(T.a)({},n,o)),gridMode:Object(j.a)({},e.gridMode,Object(T.a)({},n,u))})}return e}}),F=function(e,t){return t.type===w.r&&(localStorage.clear(),e=void 0,console.log("Logout Reducer")),G(e,t)},L=function(){function e(){Object(o.a)(this,e)}return Object(u.a)(e,[{key:"loadState",value:function(){try{var e=localStorage.getItem("curState");return null===e?this.initializeState():JSON.parse(e)}catch(t){return this.initializeState()}}},{key:"saveState",value:function(e){try{var t=JSON.stringify(e);localStorage.setItem("curState",t)}catch(n){}}},{key:"initializeState",value:function(){return{}}}]),e}(),R=[S.a],M=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||g.d,D=new L,H=Object(g.e)(F,{},M(g.a.apply(void 0,R)));H.subscribe(function(){D.saveState(H.getState())});var x=H;c.a.render(r.a.createElement(O.a,{store:x},r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,n){"use strict";n.d(t,"g",function(){return a}),n.d(t,"k",function(){return r}),n.d(t,"i",function(){return i}),n.d(t,"l",function(){return c}),n.d(t,"h",function(){return o}),n.d(t,"j",function(){return u}),n.d(t,"b",function(){return s}),n.d(t,"f",function(){return l}),n.d(t,"c",function(){return f}),n.d(t,"d",function(){return h}),n.d(t,"o",function(){return d}),n.d(t,"n",function(){return b}),n.d(t,"m",function(){return m}),n.d(t,"e",function(){return p}),n.d(t,"a",function(){return k}),n.d(t,"r",function(){return v}),n.d(t,"p",function(){return E}),n.d(t,"q",function(){return y});var a="FETCH_STATUS",r="GET_PROVIDERS",i="GET_CONFIG_FOR_REMOTE",c="GET_REMOTE_LIST",o="GET_CONFIG_DUMP",u="GET_FILES_LIST",s="CHANGE_PATH",l="CREATE_PATH",f="CHANGE_REMOTE_NAME",h="CHANGE_REMOTE_PATH",d="NAVIGATE_UP",b="NAVIGATE_FWD",m="NAVIGATE_BACK",p="CHANGE_VISIBILITY_FILTER",k="CHANGE_GRID_MODE",v="SIGNOUT_REQUEST",E="error",y="success"}},[[198,3,4]]]);
//# sourceMappingURL=main.9bcca211.chunk.js.map