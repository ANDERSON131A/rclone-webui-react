(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{383:function(e,t,n){"use strict";function r(e){if(Array.isArray(e))return 0===e.length;for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}function a(e){return 0===e?0:e/1024}function o(e){return 0===e?0:e/1024/1024/1024}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(e<1)return"0 B";var n=t<0?0:t,r=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,r)).toFixed(n))+" "+["B","KB","MB","GB","TB","PB","EB","ZB","YB"][r]}function s(e){function t(e){return e>1?"s":""}var n=Math.floor(e/31536e3);if(n)return n+" year"+t(n);var r=Math.floor((e%=31536e3)/86400);if(r)return r+" day"+t(r);var a=Math.floor((e%=86400)/3600);if(a)return a+" hour"+t(a);var o=Math.floor((e%=3600)/60);return o?o+" minute"+t(o):(e%=60)?e.toFixed(2)+" second"+t(e):"Just now"}function c(e,t){return e.test(t)}function u(e){return c(/^(off|(([0-9]+[.][0-9]+|[0-9]+)([KMGTP])))$/i,e)}function l(e){return c(/^([0-9]+)$/,e)}function f(e){return c(/^(\d+[h])?(\d+[m])?(\d+[s])?(\d+ms)??$/i,e)}function d(e,t){return e.find(function(e,n,r){return t===e.Prefix})}function p(e){return-1===e.indexOf(":")&&":"!==e[e.length-1]&&(e+=":"),e}n.d(t,"h",function(){return r}),n.d(t,"c",function(){return a}),n.d(t,"b",function(){return o}),n.d(t,"g",function(){return i}),n.d(t,"j",function(){return s}),n.d(t,"m",function(){return u}),n.d(t,"l",function(){return l}),n.d(t,"k",function(){return f}),n.d(t,"f",function(){return d}),n.d(t,"a",function(){return p}),n.d(t,"d",function(){return m}),n.d(t,"e",function(){return h}),n.d(t,"i",function(){return v});var b={Images:"image/jpeg",Pdf:"application/pdf"};function m(e,t){var n=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:b)[t];return n?e.filter(function(e){return e.IsDir||e.MimeType===n}):e}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return(t=t.toLowerCase())?e.filter(function(e){return e.Name.toLowerCase().startsWith(t)}):e}function v(e){return e&&""!==e&&"/"===e[0]}},384:function(e,t,n){"use strict";n.d(t,"c",function(){return l}),n.d(t,"b",function(){return f});var r=n(388),a=n.n(r),o=n(389),i=n(400),s=n.n(i),c=n(383),u=s.a.create({baseURL:localStorage.getItem("ipAddress"),headers:{"Content-Type":"application/json"},responseType:"json"});function l(e,t,n,r,a,o){return d(e,t,n,r,a,o,"move")}function f(e,t,n,r,a,o){return d(e,t,n,r,a,o,"copy")}function d(e,t,n,r,a,o,i){return p.apply(this,arguments)}function p(){return(p=Object(o.a)(a.a.mark(function e(t,n,r,o,i,s,l){var f,d,p,b;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(f="",f="move"===l?s?"/sync/move":"/operations/movefile":s?"/sync/copy":"/operations/copyfile",Object(c.i)(t)&&(t=""),Object(c.i)(r)&&(r=""),!s){e.next=13;break}return d=n.split("/"),p={srcFs:t+n,dstFs:r+o+"/"+d[d.length-1],_async:!0},console.log("DirOp:",p),e.next=10,u.post(f,p);case 10:return e.abrupt("return",e.sent);case 13:return""===o?o=i:o+="/"+i,b={srcFs:t,srcRemote:n,dstFs:r,dstRemote:o,_async:!0},e.next=17,u.post(f,b);case 17:return e.abrupt("return",e.sent);case 18:case"end":return e.stop()}},e)}))).apply(this,arguments)}u.interceptors.request.use(function(e){return e.headers.Authorization="Basic "+btoa(localStorage.getItem("username")+":"+localStorage.getItem("password")),e},function(e){return Promise.reject(e)}),t.a=u},385:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){a=!0,o=c}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",function(){return r})},392:function(e,t,n){"use strict";var r=n(7),a=n(35),o=n(20),i=n(381),s=n(0),c=n.n(s),u=n(1),l=n.n(u),f=n(63),d=n.n(f),p=n(380),b={active:l.a.bool,"aria-label":l.a.string,block:l.a.bool,color:l.a.string,disabled:l.a.bool,outline:l.a.bool,tag:p.n,innerRef:l.a.oneOfType([l.a.object,l.a.func,l.a.string]),onClick:l.a.func,size:l.a.string,children:l.a.node,className:l.a.string,cssModule:l.a.object,close:l.a.bool},m=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(Object(i.a)(Object(i.a)(n))),n}Object(o.a)(t,e);var n=t.prototype;return n.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},n.render=function(){var e=this.props,t=e.active,n=e["aria-label"],o=e.block,i=e.className,s=e.close,u=e.cssModule,l=e.color,f=e.outline,b=e.size,m=e.tag,h=e.innerRef,v=Object(a.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);s&&"undefined"===typeof v.children&&(v.children=c.a.createElement("span",{"aria-hidden":!0},"\xd7"));var g="btn"+(f?"-outline":"")+"-"+l,y=Object(p.j)(d()(i,{close:s},s||"btn",s||g,!!b&&"btn-"+b,!!o&&"btn-block",{active:t,disabled:this.props.disabled}),u);v.href&&"button"===m&&(m="a");var j=s?"Close":null;return c.a.createElement(m,Object(r.a)({type:"button"===m&&v.onClick?"button":void 0},v,{className:y,ref:h,onClick:this.onClick,"aria-label":n||j}))},t}(c.a.Component);m.propTypes=b,m.defaultProps={color:"secondary",tag:"button"},t.a=m},396:function(e,t,n){"use strict";var r=n(7),a=n(35),o=n(0),i=n.n(o),s=n(1),c=n.n(s),u=n(63),l=n.n(u),f=n(380),d={tag:f.n,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool},p=function(e){var t=e.className,n=e.cssModule,o=e.noGutters,s=e.tag,c=e.form,u=Object(a.a)(e,["className","cssModule","noGutters","tag","form"]),d=Object(f.j)(l()(t,o?"no-gutters":null,c?"form-row":"row"),n);return i.a.createElement(s,Object(r.a)({},u,{className:d}))};p.propTypes=d,p.defaultProps={tag:"div"},t.a=p},436:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return i});var r=n(384),a=n(4),o=function(){return function(e){r.a.post("/config/providers").then(function(t){return e({type:a.n,payload:t.data.providers})})}},i=function(){return function(e){r.a.post("/config/dump").then(function(t){return e({type:a.k,status:a.u,payload:t.data})},function(t){return e({type:a.k,status:a.t,payload:t})})}}},612:function(e,t,n){"use strict";var r=n(7),a=n(35),o=n(0),i=n.n(o),s=n(1),c=n.n(s),u=n(63),l=n.n(u),f=n(380),d={className:c.a.string,cssModule:c.a.object,size:c.a.string,bordered:c.a.bool,borderless:c.a.bool,striped:c.a.bool,inverse:Object(f.f)(c.a.bool,'Please use the prop "dark"'),dark:c.a.bool,hover:c.a.bool,responsive:c.a.oneOfType([c.a.bool,c.a.string]),tag:f.n,responsiveTag:f.n,innerRef:c.a.oneOfType([c.a.func,c.a.string,c.a.object])},p=function(e){var t=e.className,n=e.cssModule,o=e.size,s=e.bordered,c=e.borderless,u=e.striped,d=e.inverse,p=e.dark,b=e.hover,m=e.responsive,h=e.tag,v=e.responsiveTag,g=e.innerRef,y=Object(a.a)(e,["className","cssModule","size","bordered","borderless","striped","inverse","dark","hover","responsive","tag","responsiveTag","innerRef"]),j=Object(f.j)(l()(t,"table",!!o&&"table-"+o,!!s&&"table-bordered",!!c&&"table-borderless",!!u&&"table-striped",!(!p&&!d)&&"table-dark",!!b&&"table-hover"),n),k=i.a.createElement(h,Object(r.a)({},y,{ref:g,className:j}));if(m){var O=!0===m?"table-responsive":"table-responsive-"+m;return i.a.createElement(v,{className:O},k)}return k};p.propTypes=d,p.defaultProps={tag:"table",responsiveTag:"div"},t.a=p},642:function(e,t,n){"use strict";n.r(t);var r=n(42),a=n(43),o=n(128),i=n(127),s=n(129),c=n(385),u=n(0),l=n.n(u),f=n(396),d=n(401),p=n(392),b=n(612),m=n(131),h=n(384),v=n(132),g=function(e){function t(e,n){var a;Object(r.a)(this,t);var s=(a=Object(o.a)(this,Object(i.a)(t).call(this,e,n))).props,c=s.remote,u=s.remoteName;return c.name=u,a.state={remote:c},a.onDeleteClicked=a.onDeleteClicked.bind(Object(m.a)(a)),a.onUpdateClicked=a.onUpdateClicked.bind(Object(m.a)(a)),a}return Object(s.a)(t,e),Object(a.a)(t,[{key:"onUpdateClicked",value:function(){console.log("Update Clicked")}},{key:"onDeleteClicked",value:function(){var e=this.state.remote.name,t=this.props.refreshHandle;window.confirm("Are you sure you wish to delete ".concat(e,"? You cannot restore it once it is deleted."))&&h.a.post("/config/delete",{name:e}).then(function(e){t(),v.b.info("Config deleted")},function(e){v.b.error("Error deleting config")})}},{key:"render",value:function(){var e=this.state.remote,t=e.name,n=e.type,r=this.props.sequenceNumber;return l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},r),l.a.createElement("td",null,t),l.a.createElement("td",null,n),l.a.createElement("td",null,l.a.createElement(p.a,{className:"bg-info",onClick:this.onUpdateClicked},"Update")),l.a.createElement("td",null,l.a.createElement(p.a,{className:"bg-danger",onClick:this.onDeleteClicked},"Delete")))}}]),t}(l.a.Component),y=n(130),j=n(436);function k(e){for(var t=e.remotes,n=e.refreshHandle,r=[],a=1,o=0,i=Object.entries(t);o<i.length;o++){var s=i[o],u=Object(c.a)(s,2),f=u[0],d=u[1];r.push(l.a.createElement(g,{sequenceNumber:a,key:f,remoteName:f,remote:d,refreshHandle:n})),a++}return r}var O=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(a.a)(t,[{key:"componentDidMount",value:function(){this.props.getConfigDump()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{"data-test":"showConfigComponent"},l.a.createElement(f.a,null,l.a.createElement(d.a,{lg:8}),l.a.createElement(d.a,{lg:4,className:"mb-3"},l.a.createElement(p.a,{color:"primary",className:"float-right",onClick:function(){return e.props.history.push("/newdrive")}},"New Config"))),l.a.createElement(b.a,{responsive:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"No."),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Update"),l.a.createElement("th",null,"Delete"))),l.a.createElement("tbody",null,l.a.createElement(k,{remotes:this.props.remotes,refreshHandle:this.props.getConfigDump}))))}}]),t}(l.a.PureComponent);t.default=Object(y.b)(function(e){return{remotes:e.config.configDump,hasError:e.config.hasError,error:e.config.error}},{getConfigDump:j.a})(O)}}]);
//# sourceMappingURL=17.1acaa06a.chunk.js.map