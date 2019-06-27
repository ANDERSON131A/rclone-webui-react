(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{383:function(e,t,n){"use strict";function a(e){if(Array.isArray(e))return 0===e.length;for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}function r(e){return 0===e?0:e/1024}function o(e){return 0===e?0:e/1024/1024/1024}function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(e<1)return"0 B";var n=t<0?0:t,a=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,a)).toFixed(n))+" "+["B","KB","MB","GB","TB","PB","EB","ZB","YB"][a]}function l(e){function t(e){return e>1?"s":""}var n=Math.floor(e/31536e3);if(n)return n+" year"+t(n);var a=Math.floor((e%=31536e3)/86400);if(a)return a+" day"+t(a);var r=Math.floor((e%=86400)/3600);if(r)return r+" hour"+t(r);var o=Math.floor((e%=3600)/60);return o?o+" minute"+t(o):(e%=60)?e.toFixed(2)+" second"+t(e):"Just now"}function s(e,t){return e.test(t)}function i(e){return s(/^(off|(([0-9]+[.][0-9]+|[0-9]+)([KMGTP])))$/i,e)}function u(e){return s(/^([0-9]+)$/,e)}function d(e){return s(/^(\d+[h])?(\d+[m])?(\d+[s])?(\d+ms)??$/i,e)}function m(e,t){return e.find(function(e,n,a){return t===e.Prefix})}function p(e){return-1===e.indexOf(":")&&":"!==e[e.length-1]&&(e+=":"),e}n.d(t,"h",function(){return a}),n.d(t,"c",function(){return r}),n.d(t,"b",function(){return o}),n.d(t,"g",function(){return c}),n.d(t,"j",function(){return l}),n.d(t,"m",function(){return i}),n.d(t,"l",function(){return u}),n.d(t,"k",function(){return d}),n.d(t,"f",function(){return m}),n.d(t,"a",function(){return p}),n.d(t,"d",function(){return h}),n.d(t,"e",function(){return g}),n.d(t,"i",function(){return b});var f={Images:"image/jpeg",Pdf:"application/pdf"};function h(e,t){var n=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:f)[t];return n?e.filter(function(e){return e.IsDir||e.MimeType===n}):e}function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return(t=t.toLowerCase())?e.filter(function(e){return e.Name.toLowerCase().startsWith(t)}):e}function b(e){return e&&""!==e&&"/"===e[0]}},384:function(e,t,n){"use strict";n.d(t,"c",function(){return u}),n.d(t,"b",function(){return d});var a=n(388),r=n.n(a),o=n(389),c=n(400),l=n.n(c),s=n(383),i=l.a.create({baseURL:localStorage.getItem("ipAddress"),headers:{"Content-Type":"application/json"},responseType:"json"});function u(e,t,n,a,r,o){return m(e,t,n,a,r,o,"move")}function d(e,t,n,a,r,o){return m(e,t,n,a,r,o,"copy")}function m(e,t,n,a,r,o,c){return p.apply(this,arguments)}function p(){return(p=Object(o.a)(r.a.mark(function e(t,n,a,o,c,l,u){var d,m,p,f;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(d="",d="move"===u?l?"/sync/move":"/operations/movefile":l?"/sync/copy":"/operations/copyfile",Object(s.i)(t)&&(t=""),Object(s.i)(a)&&(a=""),!l){e.next=13;break}return m=n.split("/"),p={srcFs:t+n,dstFs:a+o+"/"+m[m.length-1],_async:!0},console.log("DirOp:",p),e.next=10,i.post(d,p);case 10:return e.abrupt("return",e.sent);case 13:return""===o?o=c:o+="/"+c,f={srcFs:t,srcRemote:n,dstFs:a,dstRemote:o,_async:!0},e.next=17,i.post(d,f);case 17:return e.abrupt("return",e.sent);case 18:case"end":return e.stop()}},e)}))).apply(this,arguments)}i.interceptors.request.use(function(e){return e.headers.Authorization="Basic "+btoa(localStorage.getItem("username")+":"+localStorage.getItem("password")),e},function(e){return Promise.reject(e)}),t.a=i},410:function(e,t,n){"use strict";n.d(t,"c",function(){return a}),n.d(t,"b",function(){return r}),n.d(t,"a",function(){return o});var a=["Images","Pdf","Videos"],r=5e3,o="modal-root"},414:function(e,t,n){"use strict";var a=n(42),r=n(43),o=n(128),c=n(127),l=n(129),s=n(0),i=n.n(s),u=n(402),d=n(458),m=n(403),p=n(441),f=n(396),h=n(401),g=n(392),b=n(383),E=n(130),v=n(423),w=n(433),y={tooltips:{enabled:!1,custom:w.CustomTooltips},maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:!0}}],xAxes:[{ticks:{display:!1}}]}};function j(e){var t=e.job,n=t.name,a=t.eta,r=t.percentage,o=t.speed,c=t.speedAvg,l=t.size,s=t.bytes;return n&&!isNaN(o)?i.a.createElement(u.a,null,i.a.createElement(d.a,null,"Running Jobs"),i.a.createElement(m.a,null,i.a.createElement("p",null,n)," ",i.a.createElement(p.a,{value:r,className:"mb-2"},r," %")," ",i.a.createElement("p",null,i.a.createElement("strong",null,"Speed: "),Object(b.g)(o),"PS")," ",i.a.createElement("p",null,i.a.createElement("strong",null,"Average Speed: "),Object(b.g)(c),"PS")," ",i.a.createElement("p",null,i.a.createElement("strong",null,"Total transferred: "),Object(b.g)(s))," ",i.a.createElement("p",null,i.a.createElement("strong",null,"Size: "),Object(b.g)(l)),i.a.createElement("p",null,i.a.createElement("strong",null,"ETA: "),Object(b.j)(a)," seconds"))):null}function C(e){var t=e.job,n=t.name,a=t.percentage,r=t.speed,o=t.size;return i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,null,o&&r?i.a.createElement(h.a,{lg:12},n,"(",Object(b.g)(o),") - ",Object(b.g)(r),"PS "):i.a.createElement(h.a,{lg:12},"Calculating")),i.a.createElement(f.a,null,i.a.createElement(h.a,{lg:12},i.a.createElement(p.a,{value:a,className:"mb-2"},a," %"))))}function O(e){var t=e.stats,n=t.speed,a=t.bytes,r=t.checks,o=t.elapsedTime,c=t.deletes,l=t.errors,s=t.transfers;return i.a.createElement(u.a,null,i.a.createElement(d.a,null,i.a.createElement("strong",null,"Global Stats")),i.a.createElement(m.a,null,i.a.createElement("p",null,i.a.createElement("strong",null,"Bytes Transferred: "),Object(b.g)(a)),i.a.createElement("p",null,i.a.createElement("strong",null,"Average Speed: "),Object(b.g)(n),"PS"),i.a.createElement("p",null,i.a.createElement("strong",null,"Checks: "),r),i.a.createElement("p",null,i.a.createElement("strong",null,"Deletes: "),c),i.a.createElement("p",null,i.a.createElement("strong",null,"Running since: "),Object(b.j)(o)),i.a.createElement("p",null,i.a.createElement("strong",null,"Errors: "),l),i.a.createElement("p",null,i.a.createElement("strong",null,"Transfers: "),s)))}function k(e){var t=e.transferring;return void 0!==t?t.map(function(e,t){return i.a.createElement(j,{key:t,job:e})}):null}function S(e){var t=e.transferring;return void 0!==t?t.map(function(e,t){return i.a.createElement(C,{key:t,job:e})}):null}var B=function(e){function t(e,n){var r;return Object(a.a)(this,t),(r=Object(o.a)(this,Object(c.a)(t).call(this,e,n))).toggleShowing=function(){r.setState(function(e){return{isShowing:!e.isShowing}})},r.state={isShowing:!0},r}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.jobs,a=t.isConnected,r=t.lineChartData,o=n.transferring,c=this.props.mode;return"full-status"===c?a?i.a.createElement(f.a,null,i.a.createElement(h.a,{sm:12,lg:4},i.a.createElement(O,{stats:n})),i.a.createElement(h.a,{sm:12,lg:4},i.a.createElement(u.a,null,i.a.createElement(d.a,null,"Speed"),i.a.createElement(m.a,null,i.a.createElement("div",{className:"chart-wrapper"},i.a.createElement(v.b,{data:r,options:y}))))),i.a.createElement(h.a,{sm:12,lg:4},i.a.createElement(k,{transferring:o}))):i.a.createElement("div",null,"Not connected to rclone."):"card"===c?a?i.a.createElement(S,{transferring:o}):i.a.createElement("div",null,"Not connected to rclone."):"modal"===c?o&&o.length>0?i.a.createElement(u.a,{className:"progress-modal d-none d-sm-block"},i.a.createElement(d.a,{onClick:function(){return e.toggleShowing()}},"Progress",i.a.createElement("div",{className:"card-header-actions"},i.a.createElement(g.a,{color:"link"},i.a.createElement("i",{className:"fa fa-close fa-lg"})))),i.a.createElement(m.a,{className:!this.state.isShowing&&"d-none"},i.a.createElement(S,{transferring:o}))):null:void 0}}]),t}(i.a.Component);t.a=Object(E.b)(function(e,t){var n=e.status.speed,a={};if(n){var r=[],o=[],c=[],l=n.length;n.slice(l-50,l-1).forEach(function(e,t){r.push(Math.ceil(e.elapsedTime)),o.push(Object(b.c)(e.speed).toFixed(2)),c.push(Object(b.c)(e.speedAvg).toFixed(2))}),a={labels:r,datasets:[{label:"Speed (kbps)",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:o},{label:"Average Speed (kbps)",fill:!0,lineTension:.1,backgroundColor:"rgba(187,69,14,0.4)",borderColor:"rgb(192,76,58)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgb(187,69,14)",pointBackgroundColor:"#ff7459",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:c}]}}return{jobs:e.status.jobs,isConnected:e.status.isConnected,error:e.status.error,lineChartData:a}},{})(B)},421:function(e,t,n){"use strict";n.d(t,"c",function(){return s}),n.d(t,"a",function(){return i}),n.d(t,"b",function(){return u}),n.d(t,"d",function(){return d});var a=n(388),r=n.n(a),o=n(389),c=n(384),l=n(4),s=function(){return function(){var e=Object(o.a)(r.a.mark(function e(t,n){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=n(),a.status.checkStatus&&c.a.post("core/stats").then(function(e){return t({type:l.i,status:l.u,payload:e.data})},function(e){return t({type:l.i,status:l.t,payload:e})});case 2:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()},i=function(e){return function(){var t=Object(o.a)(r.a.mark(function t(n){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n({type:l.h,payload:e});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},u=function(){return function(){var e=Object(o.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:c.a.post("core/bwlimit").then(function(e){return t({type:l.j,status:l.u,payload:e.data})},function(e){return t({type:l.j,status:l.t,payload:e})});case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(o.a)(r.a.mark(function t(n){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:c.a.post("core/bwlimit",{rate:e}).then(function(e){return n({type:l.v,status:l.u,payload:e.data})},function(e){return n({type:l.v,status:l.t,payload:e})});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}},422:function(e,t,n){"use strict";var a=n(42),r=n(43),o=n(128),c=n(127),l=n(129),s=n(0),i=n.n(s),u=n(402),d=n(458),m=n(403),p=n(392),f=n(49),h=n.n(f),g=n(414),b=n(130),E=n(421),v=n(410);function w(){return h.a.createPortal(i.a.createElement(g.a,{mode:"modal"}),document.getElementById(v.a))}var y=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(n=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).toggleCheckStatus=function(){var e=n.props,t=e.checkStatus,a=e.enableCheckStatus;console.log(t,a),a(!t)},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){var e=this;this.props.getStatus(),this.refreshInterval=setInterval(function(){return e.props.getStatus()},v.b)}},{key:"componentWillUnmount",value:function(){clearInterval(this.refreshInterval)}},{key:"render",value:function(){var e=this.props,t=e.isConnected,n=e.mode,a=e.checkStatus,r=localStorage.getItem("ipAddress"),o=localStorage.getItem("username");return"card"===n?i.a.createElement(u.a,{className:"text-center "+(t?"card-accent-info":"card-accent-warning")},i.a.createElement(d.a,null,"rclone status"),i.a.createElement(m.a,null,i.a.createElement(j,{checkStatus:a,connectivityStatus:t,ipAddress:r,userName:o}))):i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{type:"primary",onClick:this.toggleCheckStatus,className:t?"bg-info  d-none d-lg-block":"bg-warning d-none d-lg-block"}," ",a?t?"CONNECTED":"DISCONNECTED":"DISABLED"),i.a.createElement(w,null))}}]),t}(i.a.Component);function j(e){var t=e.connectivityStatus,n=e.checkStatus,a=e.ipAddress,r=e.userName;return n?t?i.a.createElement("p",null,"The rclone backend is connected and working as expected.",i.a.createElement("br",null),"Current IP address is ",a,i.a.createElement("br",null),i.a.createElement("strong",null," Username: "),r):i.a.createElement("p",null,"Cannot connect to rclone backend. There is a problem with connecting to ",a,"."):i.a.createElement("p",null,"Not monitoring connectivity status. Tap the icon in navbar to start.")}y.defaultProps={mode:"card"};t.a=Object(b.b)(function(e){return{isConnected:e.status.isConnected,isDisabled:e.status.isDisabled,checkStatus:e.status.checkStatus}},{getStatus:E.c,enableCheckStatus:E.a})(y)},618:function(e,t,n){"use strict";var a=n(42),r=n(43),o=n(128),c=n(127),l=n(129),s=n(0),i=n.n(s),u=n(399),d=n(402),m=n(403),p=n(441),f=n(63),h=n.n(f),g=n(611),b=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.cssModule,a=e.header,r=e.icon,o=e.color,c=e.value,l=e.children,s=e.invert,f=Object(u.a)(e,["className","cssModule","header","icon","color","value","children","invert"]),b={style:"",color:o,value:c},E={style:"",bgColor:"",icon:r};s&&(b.style="progress-white",b.color="",E.style="text-white",E.bgColor="bg-"+o);var v=Object(g.mapToCssModules)(h()(t,E.style,E.bgColor),n);return b.style=h()("progress-xs mt-3 mb-0",b.style),i.a.createElement(d.a,Object.assign({className:v},f),i.a.createElement(m.a,null,i.a.createElement("div",{className:"h1 text-muted text-right mb-2"},i.a.createElement("i",{className:E.icon})),i.a.createElement("div",{className:"h4 mb-0"},a),i.a.createElement("small",{className:"text-muted text-uppercase font-weight-bold"},l),i.a.createElement(p.a,{className:b.style,color:b.color,value:b.value})))}}]),t}(s.Component);b.defaultProps={header:"87.500",icon:"icon-people",color:"info",value:"25",children:"Visitors",invert:!1};var E=b,v=n(383),w=n(132),y=n(396),j=n(401),C=n(392),O=n(458),k=n(404),S=n(470),B=n(471),N=n(397),x=n(610),T=n(130),A=n(421),M=function(e){function t(e,n){var r;return Object(a.a)(this,t),(r=Object(o.a)(this,Object(c.a)(t).call(this,e,n))).getBandwidth=function(){(0,r.props.getBandwidth)()},r.setBandwidth=function(){var e=r.state,t=e.bandwidthText,n=e.hasError;t&&!n?(0,r.props.setBandwidth)(t):w.b.error("Error in form")},r.changeBandwidthInput=function(e){var t=e.target.value,n=Object(v.m)(t);console.log(n),r.setState({bandwidthText:t,hasError:!n})},r.toggleShowChangeBandwidth=function(){r.setState(function(e){return{showChangeBandwidth:!e.showChangeBandwidth}})},r.state={bandwidthText:"",hasError:!1,showChangeBandwidth:!1},r}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.getBandwidth()}},{key:"render",value:function(){var e=this.state,t=e.bandwidthText,n=e.hasError,a=e.showChangeBandwidth,r=this.props.bandwidth;return i.a.createElement(y.a,null,i.a.createElement(j.a,{lg:a?6:12,sm:12},i.a.createElement(E,{icon:"icon-speedometer",color:"danger",header:r.rate,lg:6,sm:12},"Current bandwidth ",i.a.createElement(C.a,{color:"link",onClick:this.toggleShowChangeBandwidth},i.a.createElement("i",{className:"fa fa-lg fa-angle-right"})))),i.a.createElement(j.a,{lg:6,sm:12,className:a?"":"d-none"},i.a.createElement(d.a,null,i.a.createElement(O.a,null,"Change bandwidth"),i.a.createElement(m.a,null,i.a.createElement(k.a,{onSubmit:this.setBandwidth},i.a.createElement(S.a,{row:!0},i.a.createElement(B.a,{for:"bandwidthValue",sm:5},"New Bandwidth"),i.a.createElement(j.a,{sm:7},i.a.createElement(N.a,{type:"text",value:t,valid:!n,invalid:n,id:"bandwidthValue",onChange:this.changeBandwidthInput}),i.a.createElement(x.a,{valid:!0},"Keep empty to reset."),i.a.createElement(x.a,null,"The bandwidth should be of the form 1M|2M|1G|1K|1.1K etc"))),i.a.createElement(C.a,{className:"float-right",color:"success",type:"submit"},"Set"))))))}}]),t}(i.a.Component);t.a=Object(T.b)(function(e){return{isConnected:e.status.isConnected,bandwidth:e.status.bandwidth}},{getBandwidth:A.b,setBandwidth:A.d})(M)},631:function(e,t,n){"use strict";n.r(t),function(e){var a=n(42),r=n(43),o=n(128),c=n(127),l=n(129),s=n(0),i=n.n(s),u=n(396),d=n(401),m=n(422),p=n(414),f=n(618),h=n(130),g=function(t){function n(){return Object(a.a)(this,n),Object(o.a)(this,Object(c.a)(n).apply(this,arguments))}return Object(l.a)(n,t),Object(r.a)(n,[{key:"render",value:function(){var t=this.props.checkStatus;return i.a.createElement("div",{"data-test":"homeComponent"},i.a.createElement("h2",null,"Welcome to Rclone dashboard. "),i.a.createElement("p",null,"Begin by creating a new remote config from the left sidebar."),i.a.createElement(u.a,null,i.a.createElement(d.a,{lg:4,sm:12},i.a.createElement(m.a,{ipAddress:e.ipAddress,mode:"card"})),i.a.createElement(d.a,{lg:4,sm:12},i.a.createElement(f.a,null))),i.a.createElement("h2",null,"Jobs"),t?i.a.createElement(p.a,{mode:"full-status"}):i.a.createElement("p",null,"Not Monitoring"))}}]),n}(i.a.Component);t.default=Object(h.b)(function(e){return{checkStatus:e.status.checkStatus}},{})(g)}.call(this,n(53))}}]);
//# sourceMappingURL=18.11ed1717.chunk.js.map