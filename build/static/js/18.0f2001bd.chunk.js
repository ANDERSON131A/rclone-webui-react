(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{382:function(e,t,a){"use strict";a.d(t,"c",function(){return l}),a.d(t,"b",function(){return s});var n=a(389),r=a.n(n),o=a(390),c=a(400),i=a.n(c).a.create({baseURL:localStorage.getItem("ipAddress"),headers:{"Content-Type":"application/json"},responseType:"json"});function l(e,t,a,n,r,o){return u(e,t,a,n,r,o,"move")}function s(e,t,a,n,r,o){return u(e,t,a,n,r,o,"copy")}function u(e,t,a,n,r,o,c){return m.apply(this,arguments)}function m(){return(m=Object(o.a)(r.a.mark(function e(t,a,n,o,c,l,s){var u,m,d,f;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(u="",u="move"===s?l?"/sync/move":"/operations/movefile":l?"/sync/copy":"/operations/copyfile",!l){e.next=10;break}return m=a.split("/"),d={srcFs:t+a,dstFs:n+o+"/"+m[m.length-1]},e.next=7,i.post(u,d);case 7:return e.abrupt("return",e.sent);case 10:return""===o?o=c:o+="/"+c,f={srcFs:t,srcRemote:a,dstFs:n,dstRemote:o},e.next=14,i.post(u,f);case 14:return e.abrupt("return",e.sent);case 15:case"end":return e.stop()}},e)}))).apply(this,arguments)}i.interceptors.request.use(function(e){return e.headers.Authorization="Basic "+btoa(localStorage.getItem("username")+":"+localStorage.getItem("password")),e},function(e){return Promise.reject(e)}),t.a=i},385:function(e,t,a){"use strict";function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(e<1)return"0 B";var a=t<0?0:t,n=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,n)).toFixed(a))+" "+["B","KB","MB","GB","TB","PB","EB","ZB","YB"][n]}function r(e){function t(e){return e>1?"s":""}var a=Math.floor(e/31536e3);if(a)return a+" year"+t(a);var n=Math.floor((e%=31536e3)/86400);if(n)return n+" day"+t(n);var r=Math.floor((e%=86400)/3600);if(r)return r+" hour"+t(r);var o=Math.floor((e%=3600)/60);return o?o+" minute"+t(o):(e%=60)?e.toFixed(2)+" second"+t(e):"less than a second"}function o(e,t){return e.test(t)}function c(e){return o(/^off|([0-9]+([KMGTP]))$/g,e)}function i(e){return o(/^([0-9]+)$/,e)}function l(e){return o(/^(\d+[h])?(\d+[m])?(\d+[s])?(\d+ms)??$/i,e)}function s(e,t){return e.find(function(e,a,n){return t===e.Prefix})}function u(e){return-1===e.indexOf(":")&&":"!==e[e.length-1]&&(e+=":"),e}a.d(t,"e",function(){return n}),a.d(t,"f",function(){return r}),a.d(t,"i",function(){return c}),a.d(t,"h",function(){return i}),a.d(t,"g",function(){return l}),a.d(t,"d",function(){return s}),a.d(t,"a",function(){return u}),a.d(t,"b",function(){return d}),t.c=function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0};var m={Images:"image/jpeg",Pdf:"application/pdf"};function d(e,t){var a=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:m)[t];return a?e.filter(function(e){return e.IsDir||e.MimeType===a}):e}},503:function(e,t,a){"use strict";a.r(t);var n=a(42),r=a(43),o=a(128),c=a(127),i=a(132),l=a(129),s=a(0),u=a.n(s),m=a(395),d=a(391),f=a(396),p=a(421),h=a(397),g=a(393),b=a(432),E=a.n(b),v=function(e,t){var a=t.trim().toLowerCase(),n=a.length;return 0===n?e:0===n?[]:e.filter(function(e){return e.toLowerCase().slice(0,n)===a})},N=function(e){return e},y=function(e){return u.a.createElement("div",null,e)},k=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).onSuggestionsFetchRequested=function(e){var t=e.value;a.setState({suggestions:v(a.props.suggestions,t)})},a.onSuggestionsClearRequested=function(){a.setState({suggestions:[]})},a.state={suggestions:[]},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t={placeholder:"Type the name of remote you want to open",value:e.value,onChange:e.onChange};return u.a.createElement(E.a,{suggestions:this.state.suggestions,onSuggestionsFetchRequested:this.onSuggestionsFetchRequested,onSuggestionsClearRequested:this.onSuggestionsClearRequested,getSuggestionValue:N,renderSuggestion:y,alwaysRenderSuggestions:!0,highlightFirstSuggestion:!0,inputProps:t})}}]),t}(u.a.Component),O=a(131),j=a(35),w=a(382),F=a(7),I=a(385),P=function(e){return function(t){w.a.post("operations/fsinfo",{fs:Object(I.a)(e)}).then(function(a){t({type:F.i,status:F.q,payload:Object(j.a)({},e,a.data)})},function(e){return t({type:F.i,status:F.p,payload:e})})}},D=function(e,t){return function(a){if(""!==e){var n={fs:0!==e.indexOf("/")?Object(I.a)(e):e,remote:t},r="".concat(e,"-").concat(t);w.a.post("operations/list",n).then(function(e){return a({type:F.j,status:F.q,payload:{path:r,filesList:e.data.list}})},function(e){return a({type:F.j,status:F.p,payload:{path:r,error:e}})})}}},x=function(e,t,a){return function(n){n({type:F.b,remoteName:t,id:e,remotePath:a}),n(S(e))}},C=function(e,t){return function(a){a({type:F.c,remoteName:t,id:e,remotePath:""}),a(S(e))}},S=function(e){return function(t,a){var n=a().explorer.currentPaths[e],r=n.remoteName,o=n.remotePath;r&&""!==r&&t(D(r,o))}},M=function(e){return function(t){t({type:F.f,id:e})}},R=function(e){return function(t){t({type:F.m,id:e}),t(S(e))}},H=function(e){return function(t){t({type:F.n,id:e}),t(S(e))}},B=function(e){return function(t){t({type:F.m,id:e}),t(S(e))}},T=a(407),L=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).shouldUpdateRemoteName=function(e,t){var n=t.newValue;0===n.indexOf("/")?a.setState({remoteName:n,openButtonText:"Open local path"}):a.setState({remoteName:n,openButtonText:"Open"})},a.openRemote=function(){var e=a.props,t=e.changeRemoteName,n=e.containerID,r=a.state.remoteName;t(n,r),a.props.getFsInfo(r)},a.state={isEmpty:!1,remoteName:e.remoteName,openEnabled:!1,openButtonText:"Open"},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.getRemoteNames()}},{key:"render",value:function(){var e=this,t=this.state,a=t.isEmpty,n=t.remoteName,r=this.props.remotes;return this.props.hasError?u.a.createElement("div",null,"Error loading remotes. Please try again."):a?u.a.createElement("div",null,"Add some remotes to see them here ",u.a.createElement("span",{role:"img","aria-label":"sheep"},"\ud83d\udc11"),"."):u.a.createElement(T.a,{onSubmit:function(){return e.openRemote()}},u.a.createElement(d.a,null,u.a.createElement(m.a,{xs:12,sm:10,lg:8},u.a.createElement(k,{value:n,onChange:this.shouldUpdateRemoteName,suggestions:r})),u.a.createElement(m.a,{xs:12,sm:2,lg:2},u.a.createElement(g.a,{className:"btn-lg",color:"success",type:"submit"},this.state.openButtonText))))}}]),t}(u.a.Component);L.defaultProps={};var q=Object(O.b)(function(e,t){return{remotes:e.remote.remotes,hasError:e.remote.hasError,error:e.remote.error,currentPath:e.explorer.currentPaths[t.containerID]}},{getRemoteNames:function(){return function(e,t){var a=t();(!a.remote.remotes||a.remote.remotes.length<1)&&w.a.post("config/listremotes").then(function(t){return e({type:F.l,status:F.q,payload:t.data.remotes})},function(t){return e({type:F.l,status:F.p,payload:t})})}},getFsInfo:P,changeRemoteName:C})(L),U=a(389),V=a.n(U),G=a(390),A=a(403),z=a(483),J=a(502),$=a(414),K=a(438),Y="FileComponent",Z=a(134),Q=a(47),W={beginDrag:function(e){console.log("props",e,e.remoteName);var t=e.item;return{Name:t.Name,Path:t.Path,IsDir:t.IsDir,remoteName:e.remoteName}},endDrag:function(){var e=Object(G.a)(V.a.mark(function e(t,a,n){var r,o,c,i,l,s,u,m,d,f;return V.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!a.getDropResult()){e.next=22;break}if(r=a.getDropResult(),o=r.srcRemoteName,c=r.srcRemotePath,i=r.destRemoteName,l=r.destRemotePath,s=r.Name,u=r.IsDir,m=r.dropEffect,d=r.updateHandler,"move"!==m){e.next=14;break}if(!n.fsInfo.Features.Copy){e.next=11;break}return e.next=7,Object(w.b)(o,c,i,l,s,u);case 7:d(),u?Z.b.info("Directory copied: ".concat(s)):Z.b.info("File copied: ".concat(s)),e.next=12;break;case 11:Z.b.error("This remote does not support copying");case 12:e.next=22;break;case 14:if(!n.fsInfo.Features.Move){e.next=21;break}return e.next=17,Object(w.c)(o,c,i,l,s,u);case 17:d(),u?Z.b.info("Directory moved: ".concat(s)):Z.b.info("File moved: ".concat(s)),e.next=22;break;case 21:Z.b.error("This remote does not support moving");case 22:e.next=29;break;case 24:e.prev=24,e.t0=e.catch(0),f=e.t0.response?e.t0.response:e.t0,console.log(JSON.stringify(f)),Z.b.error("Error copying file(s). ".concat(f.data.error),{autoClose:!1});case 29:case"end":return e.stop()}},e,null,[[0,24]])}));return function(t,a,n){return e.apply(this,arguments)}}()};function X(e){var t=e.IsDir,a=e.MimeType,n="fa-file";return t?n="fa-folder":"application/pdf"===a?n="fa-file-pdf-o":"image/jpeg"===a?n="fa-file-image-o":"application/rar"===a||"application/x-rar-compressed"===a||" application/zip"===a?n="fa-file-archive-o":"text/plain"===a?n="fa-file-text-o":"text/x-vcard"===a&&(n="fa-address-card-o"),u.a.createElement("i",{className:n+" fa fa-lg"})}function _(e,t){window.confirm("Are you sure you want to delete ".concat(t.Name))&&e(t)}function ee(e){var t=e.downloadHandle,a=e.deleteHandle,n=e.item;return n.IsDir?u.a.createElement(g.a,{color:"link",className:"text-danger",onClick:function(){return _(a,n)}},u.a.createElement("i",{className:"fa fa-remove fa-lg d-inline"})):u.a.createElement(u.a.Fragment,null,u.a.createElement(g.a,{color:"link",onClick:function(){return t(n)}},u.a.createElement("i",{className:"fa fa-cloud-download fa-lg d-inline"})),u.a.createElement(g.a,{color:"link",className:"text-danger",onClick:function(){return _(a,n)}},u.a.createElement("i",{className:"fa fa-remove fa-lg d-inline"})))}var te=Object(Q.d)(Object(O.b)(function(e,t){var a=e.explorer.currentPaths[t.containerID],n={};return a&&e.remote.configs&&e.remote.configs[a.remoteName]&&(n=e.remote.configs[a.remoteName]),{fsInfo:n}},{}),Object($.c)(Y,W,function(e,t){return{connectDragSource:e.dragSource(),connectDragPreview:e.dragPreview(),isDragging:t.isDragging()}}))(function(e){var t=e.item,a=e.clickHandler,n=e.downloadHandle,r=e.deleteHandle,o=e.connectDragSource,c=e.gridMode,i=t.IsDir,l=t.MimeType,s=t.ModTime,m=t.Name,d=t.Size,p=new Date(Date.parse(s));return o("card"===c?u.a.createElement("div",{className:"col-lg-3"},u.a.createElement(f.a,null,u.a.createElement(h.a,null,u.a.createElement(X,{IsDir:i,MimeType:l})," ",m),u.a.createElement(K.a,null,u.a.createElement(ee,{downloadHandle:n,deleteHandle:r,item:t})))):u.a.createElement("tr",{className:"pointer-cursor"},u.a.createElement("td",null,u.a.createElement("input",{type:"checkbox"})),u.a.createElement("td",{onClick:function(e){return a(e,t)}},u.a.createElement(X,{IsDir:i,MimeType:l})," ",m),u.a.createElement("td",null,-1===d?"-":Object(I.e)(d,2)),u.a.createElement("td",null,p.toLocaleDateString()),u.a.createElement("td",null,u.a.createElement(ee,{downloadHandle:n,deleteHandle:r,item:t}))))}),ae={drop:function(e,t,a){if(!t.didDrop()){console.log("drop",e,t,t.getItem(),a);var n=t.getItem(),r=n.Name,o=n.Path,c=n.IsDir,i=n.remoteName;return{srcRemoteName:Object(I.a)(i),srcRemotePath:o,destRemoteName:Object(I.a)(e.currentPath.remoteName),destRemotePath:e.currentPath.remotePath,Name:r,IsDir:c,updateHandler:a.updateHandler}}}};function ne(e){var t=e.upButtonHandle;return"card"===e.gridMode?u.a.createElement(m.a,{lg:12},u.a.createElement(g.a,{onClick:function(){return t()}},"Go Up")):u.a.createElement("tr",{onClick:function(){return t()},className:"pointer-cursor"},u.a.createElement("td",null),u.a.createElement("td",null,u.a.createElement("i",{className:"fa fa-file-o"})," Go Up..."),u.a.createElement("td",null),u.a.createElement("td",null),u.a.createElement("td",null))}var re=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).updateHandler=function(){var e=a.props.currentPath,t=e.remoteName,n=e.remotePath;a.getFilesList(t,n)},a.dismissAlert=function(e){a.setState({isDownloadProgress:!1})},a.getFileComponents=function(e,t,n,r,o){return e.map(function(e,c){var i=e.ID,l=e.Name;return void 0===i&&(i=l),e.IsDir===n?u.a.createElement(u.a.Fragment,{key:i},u.a.createElement(te,{item:e,clickHandler:a.handleFileClick,downloadHandle:a.downloadHandle,deleteHandle:a.deleteHandle,remoteName:t,gridMode:r,containerID:o})):null})},a.state={isLoading:!1,isDownloadProgress:!1,downloadingItems:0,shouldUpdate:!0},a.handleFileClick=a.handleFileClick.bind(Object(i.a)(a)),a.downloadHandle=a.downloadHandle.bind(Object(i.a)(a)),a.deleteHandle=a.deleteHandle.bind(Object(i.a)(a)),a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"handleFileClick",value:function(e,t){var a=t.Path,n=t.IsDir,r=t.IsBucket;n||r?this.updateRemotePath(a,n,r):this.downloadHandle(t)}},{key:"updateRemotePath",value:function(e,t,a){var n=this.props.currentPath.remoteName,r="",o="";a?(r=Object(I.a)(n)+e,o=""):t&&(r=n,o=e),this.props.changePath(this.props.containerID,r,o)}},{key:"getFilesList",value:function(){!(arguments.length>0&&void 0!==arguments[0])||arguments[0];var e=this.props.currentPath,t=e.remoteName,a=e.remotePath;this.props.getFiles(t,a)}},{key:"downloadHandle",value:function(){var e=Object(G.a)(V.a.mark(function e(t){var a,n,r,o,c,i,l,s,u=this;return V.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.currentPath,n=a.remoteName,r=a.remotePath,o=this.props.fsInfo,c="",c=o.Features.BucketBased?"/[".concat(n,"]/").concat(r,"/").concat(t.Name):"/[".concat(n,":").concat(r,"]/").concat(t.Name),this.setState(function(e){return{downloadingItems:e.downloadingItems+1,isDownloadProgress:!0}}),e.next=7,Object(w.a)({url:c,method:"GET",responseType:"blob"});case 7:i=e.sent,l=window.URL.createObjectURL(new Blob([i.data])),(s=document.createElement("a")).href=l,s.setAttribute("download",t.Name),document.body.appendChild(s),s.click(),this.setState(function(e){return{downloadingItems:e.downloadingItems-1}},function(){0===u.state.downloadingItems&&u.setState({isDownloadProgress:!1})});case 15:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"deleteHandle",value:function(){var e=Object(G.a)(V.a.mark(function e(t){var a,n;return V.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this.props.currentPath.remoteName,n={fs:Object(I.a)(a),remote:t.Path},e.prev=2,!t.IsDir){e.next=10;break}return e.next=6,w.a.post("/operations/purge",n);case 6:this.updateHandler(),Z.b.info("".concat(t.Name," deleted.")),e.next=14;break;case 10:return e.next=12,w.a.post("/operations/deletefile",n);case 12:this.updateHandler(),Z.b.info("".concat(t.Name," deleted."),{autoClose:!1});case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(2),console.log("Error in deleting file"),Z.b.error("Error deleting file. ".concat(e.t0),{autoClose:!1});case 20:case"end":return e.stop()}},e,this,[[2,16]])}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.isDownloadProgress,n=e.downloadingItems,r=this.props,o=r.connectDropTarget,c=r.isOver,i=r.files,l=r.navigateUp,s=r.containerID,m=r.gridMode,f=this.props.currentPath.remoteName;if(t||!i)return u.a.createElement("div",null,u.a.createElement("i",{className:"fa fa-circle-o-notch fa-lg"})," Loading");if(""===f)return u.a.createElement("div",null,"No remote is selected. Select a remote from above to show files.");var p=this.getFileComponents(i,f,!0,m),h=this.getFileComponents(i,f,!1,m),g="";return g="card"===m?u.a.createElement(A.a,{fluid:!0},u.a.createElement(d.a,null,u.a.createElement(ne,{upButtonHandle:function(){return l(s)},gridMode:m})),u.a.createElement(d.a,null,u.a.createElement("h3",null,"Directories")),u.a.createElement(d.a,null,p),u.a.createElement(d.a,null,u.a.createElement("h3",null,"Files")),u.a.createElement(d.a,null,h)):u.a.createElement(A.a,{fluid:!0,className:"pd-0"},u.a.createElement(z.a,null,u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null),u.a.createElement("th",null,"Name"),u.a.createElement("th",null,"Size"),u.a.createElement("th",null,"Modified"),u.a.createElement("th",null,"Actions"))),u.a.createElement("tbody",null,u.a.createElement(ne,{upButtonHandle:function(){return l(s)},gridMode:m}),i.length>0?u.a.createElement(u.a.Fragment,null,u.a.createElement("tr",null,u.a.createElement("td",null),u.a.createElement("th",null,"Directories"),u.a.createElement("td",null),u.a.createElement("td",null),u.a.createElement("td",null)),p,u.a.createElement("tr",null,u.a.createElement("td",null),u.a.createElement("th",null,"Files"),u.a.createElement("td",null),u.a.createElement("td",null),u.a.createElement("td",null)),h):u.a.createElement("tr",null,u.a.createElement("td",null),u.a.createElement("td",null,"No files"),u.a.createElement("td",null),u.a.createElement("td",null),u.a.createElement("td",null))))),o(u.a.createElement("div",{className:"row"},c&&u.a.createElement("div",{style:{position:"absolute",top:0,left:0,height:"100%",width:"100%",zIndex:1,opacity:.5,backgroundColor:"gray"}}),u.a.createElement(J.a,{color:"info",isOpen:a,toggle:this.dismissAlert,sm:12,lg:12},"Downloading ",n," file(s). Please wait."),g))}}]),t}(u.a.PureComponent);re.defaultProps={remotePath:""};var oe=Object(Q.d)(Object(O.b)(function(e,t){var a=e.explorer.currentPaths[t.containerID],n=e.explorer.visibilityFilters[t.containerID],r=e.explorer.gridMode[t.containerID],o={},c=a.remoteName,i=a.remotePath;a&&e.remote.configs&&e.remote.configs[a.remoteName]&&(o=e.remote.configs[a.remoteName]);var l=e.remote.files["".concat(c,"-").concat(i)];return l&&(l=l.files,n&&(l=Object(I.b)(l,n))),{files:l,currentPath:a,fsInfo:o,gridMode:r}},{getFiles:D,navigateUp:R,changePath:x}),Object($.d)(Y,ae,function(e,t){return{connectDropTarget:e.dropTarget(),isOver:t.isOver()}}))(re);var ce=function(e){var t=e.height,a=e.children;return u.a.createElement("div",{style:{overflow:"auto",height:t}},a)},ie=a(398),le=a(507),se=a(496),ue=a(497),me=a(499),de=a(500),fe=a(498),pe=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).disableForm=function(e){a.setState({disableForm:e})},a.changeName=function(e){var t=e.target.value;a.setState({name:t})},a.state={name:"",disableForm:!1},a.createNewFolder=a.createNewFolder.bind(Object(i.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(i.a)(a)),a.toggle=a.toggle.bind(Object(i.a)(a)),a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"createNewFolder",value:function(){var e=Object(G.a)(V.a.mark(function e(){var t,a,n,r,o,c;return V.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.name,a=this.props.currentPath,n=a.remoteName,r=a.remotePath,o=this.props.fsInfo,n=Object(I.a)(n),e.prev=4,console.log("fsInfo",o),o.Features.BucketBased&&""===r?n+=t:""===r?r=t:r+="/"+t,c={fs:n,remote:r},this.disableForm(!0),e.next=11,w.a.post("operations/mkdir",c);case 11:this.disableForm(!1),this.toggle(),Z.b.info("Folder created: ".concat(r)),this.props.getFilesForContainerID(this.props.containerID),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(4),this.disableForm(!1),e.t0.response?Z.b.error("Error creating folder: ".concat(e.t0.response.data.error)):Z.b.error("Error creating folder: ".concat(e.t0));case 21:case"end":return e.stop()}},e,this,[[4,17]])}));return function(){return e.apply(this,arguments)}}()},{key:"handleSubmit",value:function(e){e.preventDefault(),this.createNewFolder()}},{key:"toggle",value:function(){this.props.closeModal()}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.disableForm,n=this.props.isVisible;return u.a.createElement(le.a,{isOpen:n,toggle:this.toggle,"data-test":"parent"},u.a.createElement(T.a,{onSubmit:this.handleSubmit},u.a.createElement(se.a,{toggle:this.toggle},"Enter the name for the folder"),u.a.createElement(ue.a,null,u.a.createElement(me.a,{row:!0},u.a.createElement(de.a,{for:"folderName",sm:3},"Enter the name"),u.a.createElement(m.a,{sm:9},u.a.createElement(ie.a,{type:"text",name:"folderName",id:"folderName",value:t,onChange:this.changeName,required:!0,autoFocus:!0}))),u.a.createElement("div",{className:"clearfix"},u.a.createElement(g.a,{type:"submit",color:"success",className:"float-right",disabled:a},u.a.createElement("i",{className:"fa fa-check fa-lg"}),"Create folder"))),u.a.createElement(fe.a,null)))}}]),t}(u.a.Component),he=Object(O.b)(function(e,t){var a=e.explorer.currentPaths[t.containerID],n={};return a&&e.remote.configs&&e.remote.configs[a.remoteName]&&(n=e.remote.configs[a.remoteName]),{currentPath:a,fsInfo:n}},{getFilesForContainerID:S})(pe),ge=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).openNewFolderModal=function(){a.setState({newFolderModalIsVisible:!0})},a.closeNewFolderModal=function(){a.setState({newFolderModalIsVisible:!1})},a.handleChangeFilter=function(e){var t=e.target.value;a.props.changeVisibilityFilter(a.props.containerID,t)},a.handleChangeGridMode=function(e){var t=e.target.value;a.props.changeGridMode(a.props.containerID,t)},a.state={newFolderModalIsVisible:!1},a.filterOptions=["Images","Pdf","Videos"],a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props.containerID;return u.a.createElement("div",null,u.a.createElement(g.a,{color:"light",className:"mr-1 btn-outline-dark",onClick:function(){return e.props.navigateBack(t)}},u.a.createElement("i",{className:"fa fa-lg fa-angle-left"})),u.a.createElement(g.a,{color:"light",className:"mr-1 btn-outline-dark",onClick:function(){return e.props.navigateFwd(t)}},u.a.createElement("i",{className:"fa fa-lg fa-angle-right"})),u.a.createElement("div",{className:"float-right mb-3 mt-1 form-inline"},u.a.createElement(g.a,{className:"mr-1 btn-outline-dark",onClick:this.openNewFolderModal},u.a.createElement("i",{className:"fa fa-lg fa-plus"})," "),u.a.createElement(g.a,{className:"mr-1 btn-outline-dark",onClick:function(){return e.props.getFilesForContainerID(t)}},u.a.createElement("i",{className:"fa fa-lg fa-repeat"})),u.a.createElement(he,{containerID:this.props.containerID,isVisible:this.state.newFolderModalIsVisible,closeModal:this.closeNewFolderModal}),u.a.createElement(ie.a,{type:"select",onChange:this.handleChangeFilter,value:this.props.visibilityFilter,className:"ml-1 mr-1"},u.a.createElement("option",{key:0},"None"),this.filterOptions.map(function(e,t){return u.a.createElement("option",{key:e,value:e},e)})),u.a.createElement(ie.a,{type:"select",onChange:this.handleChangeGridMode,value:this.props.gridMode},u.a.createElement("option",{value:"grid"},"Grid"),u.a.createElement("option",{value:"card"},"Card"))))}}]),t}(u.a.Component),be=Object(O.b)(function(e,t){return{visibilityFilter:e.explorer.visibilityFilters[t.containerID],gridMode:e.explorer.gridMode[t.containerID]}},{changeVisibilityFilter:function(e,t){return function(a){a({type:F.e,id:e,filter:t})}},changeGridMode:function(e,t){return function(a){a({type:F.a,id:e,mode:t})}},navigateBack:B,navigateFwd:H,getFilesForContainerID:S})(ge),Ee=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).state={remoteNameTemp:""},a.updateRemoteName=a.updateRemoteName.bind(Object(i.a)(a)),a.updateRemotePath=a.updateRemotePath.bind(Object(i.a)(a)),a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"getFsInfo",value:function(){var e=this.props.currentPath.remoteName;this.props.configs[e]||this.props.getFsInfo(e)}},{key:"updateRemoteName",value:function(e){this.setState({remoteNameTemp:e})}},{key:"updateRemotePath",value:function(e,t,a){var n=this.props.currentPath.remoteName,r="",o="";a?(r=Object(I.a)(n)+e,o=""):t&&(r=n,o=e),this.props.changePath(this.props.containerID,r,o)}},{key:"render",value:function(){var e=this.props.currentPath,t=e.remoteName,a=e.remotePath,n=this.props.containerID,r=a.split("/");return console.log(r),r.map(function(e,t){return u.a.createElement("li",{key:t,className:["breadcrumb-item ",t===r.length?"active":""]}," / ",e)}),u.a.createElement(u.a.Fragment,null,u.a.createElement(f.a,null,u.a.createElement(p.a,null,"Remotes"),u.a.createElement(h.a,null,u.a.createElement(q,{remoteName:t,containerID:n}))),u.a.createElement(f.a,null,u.a.createElement(p.a,null,u.a.createElement("nav",{"aria-label":"breadcrumb"},u.a.createElement("ol",{className:"breadcrumb"},u.a.createElement("li",{className:"breadcrumb-item active"},t,":/"),r,u.a.createElement("li",{className:"breadcrumb-menu"},u.a.createElement("div",{className:"btn-group",role:"group","aria-label":"Button group with nested dropdown"},u.a.createElement("span",{className:"btn"},u.a.createElement("i",{className:"cui-settings"})," Settings")))),u.a.createElement(be,{containerID:n}))),u.a.createElement(h.a,null,u.a.createElement(ce,{height:"700px"},u.a.createElement(oe,{containerID:n})))))}}]),t}(u.a.Component);Ee.defaultProps={};var ve=Object(O.b)(function(e,t){var a=e.explorer.currentPaths[t.containerID],n={};return a&&e.remote.configs&&e.remote.configs[a.remoteName]&&(n=e.remote.configs[a.remoteName]),{configs:e.remote.configs,hasError:e.remote.hasError,error:e.remote.error,currentPath:e.explorer.currentPaths[t.containerID],fsInfo:n}},{getFsInfo:P,createPath:M,changePath:x,changeRemoteName:C,changeRemotePath:function(e,t){return function(a){a({type:F.d,id:e,remotePath:t}),a(S(e))}},navigateUp:R,navigateBack:B,navigateFwd:H})(Ee),Ne=a(485);function ye(e){for(var t=e.cols,a=(e.backStacks,[]),n=12/t,r=0;r<t;r++)a.push(u.a.createElement(m.a,{xs:12,sm:12,lg:n,key:r},u.a.createElement(ve,{containerID:r.toString()})));return a}var ke=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).state={cols:1},a.props.createPath("0"),a.changeLayout=a.changeLayout.bind(Object(i.a)(a)),a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"changeLayout",value:function(e,t){if("side"===t){for(var a=0;a<e;a++)this.props.backStacks[a.toString()]||this.props.createPath(a.toString());this.setState({cols:e})}}},{key:"render",value:function(){var e=this,t=this.state.cols;return u.a.createElement("div",null,u.a.createElement(d.a,null,u.a.createElement(m.a,{sm:12,lg:12},u.a.createElement(f.a,null,u.a.createElement(p.a,null,"Choose Layout"),u.a.createElement(h.a,null,u.a.createElement(g.a,{color:"primary",className:"ml-2",onClick:function(){return e.changeLayout(1,"side")}},"1 - side by side"),u.a.createElement(g.a,{color:"primary",className:"ml-2",onClick:function(){return e.changeLayout(2,"side")}},"2 - side by side"),u.a.createElement(g.a,{color:"primary",className:"ml-2",onClick:function(){return e.changeLayout(3,"side")}},"3 - side by side"),u.a.createElement(g.a,{color:"primary",className:"ml-2",onClick:function(){return e.changeLayout(4,"side")}},"4 - side by side"))))),u.a.createElement(d.a,null,u.a.createElement(ye,{cols:t,backStacks:this.props.backStacks})))}}]),t}(u.a.Component);t.default=Object(Q.d)(Object($.b)(Ne.a),Object(O.b)(function(e){return{backStacks:e.explorer.backStacks}},{createPath:M}))(ke)}}]);
//# sourceMappingURL=18.0f2001bd.chunk.js.map