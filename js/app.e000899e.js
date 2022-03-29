(function(e){function t(t){for(var c,a,i=t[0],s=t[1],u=t[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);b&&b(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,a=1;a<n.length;a++){var s=n[a];0!==r[s]&&(c=!1)}c&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var c={},r={app:0},o=[];function a(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"66fdfdef"}[e]+".js"}function i(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,c){n=r[e]=[t,c]}));t.push(n[2]=c);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=a(e);var u=new Error;o=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+c+": "+o+")",u.name="ChunkLoadError",u.type=c,u.request=o,n[1](u)}r[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=c,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(n,c,function(t){return e[t]}.bind(null,c));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/static/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var b=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0c60":function(e,t,n){"use strict";n("44d3")},2561:function(e,t,n){},"44d3":function(e,t,n){},"45d1":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),r={class:"container col-6 mt-5 pt-5 bg-light",style:{"border-radius":"8px","min-width":"400px"}},o=Object(c["i"])("h5",{class:"text-center"},"Please login",-1),a={class:"container col-8 text-left mt-5"},i={class:"mb-3"},s=Object(c["i"])("label",{for:"loginInput",class:"form-label"},"Login",-1),u={class:"mb-3"},l=Object(c["i"])("label",{for:"passwordInput",class:"form-label"},"Password",-1),b={class:"mb-3"};function d(e,t,n,d,f,p){return Object(c["t"])(),Object(c["h"])("div",r,[o,Object(c["i"])("div",a,[Object(c["i"])("div",i,[s,Object(c["J"])(Object(c["i"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return f.username=e}),type:"email",class:"form-control",id:"loginInput"},null,512),[[c["G"],f.username]])]),Object(c["i"])("div",u,[l,Object(c["J"])(Object(c["i"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return f.password=e}),class:"form-control",type:"password",id:"passwordInput",rows:"3"},null,512),[[c["G"],f.password]])]),Object(c["i"])("div",b,[Object(c["i"])("button",{onClick:t[2]||(t[2]=function(){return p.login&&p.login.apply(p,arguments)}),class:"btn btn-success loginBtn mb-5"}," Send ")])])])}var f=n("5530"),p=n("5502"),O={name:"login",methods:Object(f["a"])(Object(f["a"])(Object(f["a"])({},Object(p["b"])(["FETCH_LOGIN"])),Object(p["d"])(["UPDATE_USERS","UPDATE_IS_FETCHING"])),{},{login:function(){var e=this.username,t=this.password;this.username&&this.password?this.FETCH_LOGIN({username:e,password:t}):console.log("Input username && pasword")}}),data:function(){return{username:"",password:""}}},j=n("d959"),m=n.n(j);const v=m()(O,[["render",d]]);t["default"]=v},4611:function(e,t,n){"use strict";n("7cdd")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),r={key:0,class:"content container"},o={key:1,class:"content"};function a(e,t,n,a,i,s){var u=Object(c["B"])("v-b-header"),l=Object(c["B"])("router-view"),b=Object(c["B"])("v-loader"),d=Object(c["B"])("notifications");return Object(c["t"])(),Object(c["h"])("main",null,[Object(c["k"])(u),e.GET_IS_FETCHING?(Object(c["t"])(),Object(c["h"])("div",o,[Object(c["k"])(b)])):(Object(c["t"])(),Object(c["h"])("div",r,[Object(c["k"])(l,null,{default:Object(c["I"])((function(e){var t=e.Component,n=e.route;return[Object(c["k"])(c["b"],{name:"route-fade",mode:"out-in",appear:""},{default:Object(c["I"])((function(){return[(Object(c["t"])(),Object(c["f"])(Object(c["C"])(t),{key:n.path}))]})),_:2},1024)]})),_:1})])),Object(c["k"])(d,{position:"bottom left"})])}var i=n("1da1"),s=n("5530"),u=(n("96cf"),n("5502")),l=function(e){return Object(c["w"])("data-v-8add0f8a"),e=e(),Object(c["u"])(),e},b={class:"navbar navbar-expand-lg navbar-light bg-light"},d={class:"container col-9 px-0"},f=Object(c["j"])("Home"),p=l((function(){return Object(c["i"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(c["i"])("span",{class:"navbar-toggler-icon"})],-1)})),O={class:"collapse navbar-collapse",id:"navbarSupportedContent"},j={key:0,class:"navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-end"},m=Object(c["j"])("Login"),v=Object(c["j"])("Registration"),h={key:1,class:"navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-end"},g=Object(c["j"])("Logout");function E(e,t,n,r,o,a){var i=Object(c["B"])("router-link");return Object(c["t"])(),Object(c["h"])("nav",b,[Object(c["i"])("div",d,[Object(c["k"])(i,{class:"navbar-brand ms-auto",to:"/"},{default:Object(c["I"])((function(){return[f]})),_:1}),p,Object(c["i"])("div",O,[e.GET_IS_LOGGED_IN[0]||e.GET_IS_LOGGED_IN[1]?(Object(c["t"])(),Object(c["h"])("ul",h,[Object(c["i"])("li",{onClick:t[2]||(t[2]=function(){return a.logout&&a.logout.apply(a,arguments)}),class:"nav-item"},[Object(c["k"])(i,{class:"nav-link fs-6","aria-current":"page",to:"/login"},{default:Object(c["I"])((function(){return[g]})),_:1})])])):(Object(c["t"])(),Object(c["h"])("ul",j,[Object(c["i"])("li",{onClick:t[0]||(t[0]=function(){return e.closeMobMenu&&e.closeMobMenu.apply(e,arguments)}),class:"nav-item"},[Object(c["k"])(i,{class:"nav-link fs-6","aria-current":"page",to:"/login"},{default:Object(c["I"])((function(){return[m]})),_:1})]),Object(c["i"])("li",{onClick:t[1]||(t[1]=function(){return e.closeMobMenu&&e.closeMobMenu.apply(e,arguments)}),class:"nav-item"},[Object(c["k"])(i,{class:"nav-link fs-6 pe-0","aria-current":"page",to:"/registration"},{default:Object(c["I"])((function(){return[v]})),_:1})])]))])])])}n("7b17");var _={name:"v-b-header",computed:Object(u["c"])(["GET_IS_LOGGED_IN"]),methods:Object(s["a"])(Object(s["a"])(Object(s["a"])({},Object(u["b"])(["FETCH_CART","FETCH_USERS"])),Object(u["d"])(["LOGOUT"])),{},{logout:function(){this.LOGOUT()}}),mounted:function(){console.log(this.GET_IS_LOGGED_IN)}},S=(n("f429"),n("d959")),I=n.n(S);const T=I()(_,[["render",E],["__scopeId","data-v-8add0f8a"]]);var y=T,w=function(e){return Object(c["w"])("data-v-1f6daf1a"),e=e(),Object(c["u"])(),e},k=w((function(){return Object(c["i"])("div",{class:"overlay"},[Object(c["i"])("div",{class:"body"},[Object(c["i"])("button",{class:"btn",type:"button",disabled:""},[Object(c["i"])("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),Object(c["j"])(" Loading... ")])])],-1)}));function C(e,t,n,r,o,a){return Object(c["t"])(),Object(c["f"])(c["b"],null,{default:Object(c["I"])((function(){return[k]})),_:1})}var G=function(){var e=document.querySelector("body");e.style.overflowY="hidden"},U=function(){var e=document.querySelector("body");e.style.overflowY="auto"},R={name:"v-loader",mounted:function(){G()},beforeUnmount:function(){U()}};n("0c60");const D=I()(R,[["render",C],["__scopeId","data-v-1f6daf1a"]]);var x=D,L={slot:"body","slot-scope":"props"},N={class:"custom-template"},H=Object(c["i"])("div",{class:"custom-template-icon"},[Object(c["i"])("i",{class:"icon ion-android-checkmark-circle"})],-1),A={class:"custom-template-content"},P={class:"custom-template-title"},F=["innerHTML"],M=Object(c["i"])("i",{class:"icon ion-android-close"},null,-1),V=[M];function B(e,t,n,r,o,a){var i=Object(c["B"])("notifications");return Object(c["t"])(),Object(c["f"])(i,{group:"custom-template",duration:15e3,width:500,"animation-name":"v-fade-left",position:"top left"},{default:Object(c["I"])((function(){return[Object(c["i"])("template",L,[Object(c["i"])("div",N,[H,Object(c["i"])("div",A,[Object(c["i"])("div",P,[Object(c["j"])(Object(c["E"])(e.props.item.title)+" Random number: "+Object(c["E"])(e.props.item.randomNumber)+" ",1),Object(c["i"])("div",null," Random number: "+Object(c["E"])(e.props.item.randomNumber),1)]),Object(c["i"])("div",{class:"custom-template-text",innerHTML:e.props.item.text},null,8,F)]),Object(c["i"])("div",{class:"custom-template-close",onClick:t[0]||(t[0]=function(){var t;return e.props.close&&(t=e.props).close.apply(t,arguments)})},V)])])]})),_:1})}n("99af");var J={name:"v-notification",data:function(){return{}},methods:{show:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"custom",n=(this.callit,'\n        Heelo! Start notificate brothers about errors!\n        <br>\n        <button class="fuck_btn" onclick=""> click me!</button>\n        Date: '.concat(new Date,"\n      "));this.$notify({group:e,clean:!1,type:t,title:"Test ".concat(t," notification #").concat(this.id++),text:n,randomNumber:"100010010",data:{randomNumber:100010010}})},clean:function(e){this.$notify({group:e,clean:!0})}}};const q=I()(J,[["render",B]]);var z=q,Y={name:"App",components:{VNotification:z,VLoader:x,VBHeader:y},computed:Object(u["c"])(["GET_IS_FETCHING","GET_USERS"]),methods:Object(s["a"])(Object(s["a"])({},Object(u["b"])(["FETCH_USERS"])),Object(u["d"])(["UPDATE_USERS","UPDATE_IS_FETCHING"])),data:function(){},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.UPDATE_IS_FETCHING(!0),t.next=3,e.FETCH_USERS();case 3:e.UPDATE_IS_FETCHING(!1);case 4:case"end":return t.stop()}}),t)})))()}};n("5ca9");const $=I()(Y,[["render",a]]);var K=$,Q=n("9483");Object(Q["a"])("".concat("/static/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0");var W=n("6c02"),X={class:"container col-10"},Z={key:0,class:"row"},ee={class:"col col-4 mt-5"},te={class:"col col-8 mt-5"},ne={key:1,class:"row"};function ce(e,t,n,r,o,a){var i=Object(c["B"])("v-search-box"),s=Object(c["B"])("v-users"),u=Object(c["B"])("v-general-page"),l=Object(c["B"])("login");return Object(c["t"])(),Object(c["h"])("div",X,[e.GET_IS_LOGGED_IN[0]||e.GET_IS_LOGGED_IN[1]?(Object(c["t"])(),Object(c["h"])("div",Z,[Object(c["i"])("div",ee,[Object(c["k"])(i),Object(c["k"])(s)]),Object(c["i"])("div",te,[Object(c["k"])(u)])])):(Object(c["t"])(),Object(c["h"])("div",ne,[Object(c["k"])(l)]))])}n("ac1f"),n("841c");var re={class:"input-group"},oe={class:"form-outline w-100"};function ae(e,t,n,r,o,a){return Object(c["t"])(),Object(c["h"])("div",re,[Object(c["i"])("div",oe,[Object(c["J"])(Object(c["i"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return o.inputValue=e}),onInput:t[1]||(t[1]=function(){return a.search&&a.search.apply(a,arguments)}),placeholder:"Search",type:"search",id:"form1",class:"form-control"},null,544),[[c["G"],o.inputValue]])])])}var ie={methods:Object(s["a"])(Object(s["a"])({},Object(u["d"])(["UPDATE_SEARCHED_USERS"])),{},{search:function(e){this.UPDATE_SEARCHED_USERS(this.inputValue)}}),data:function(){return{inputValue:""}}};n("4611");const se=I()(ie,[["render",ae],["__scopeId","data-v-0c7ae633"]]);var ue=se,le={class:"mt-3 col users_box"},be={class:"box"},de=["onClick"],fe={class:"user_name"};function pe(e,t,n,r,o,a){return Object(c["t"])(),Object(c["h"])("div",le,[Object(c["i"])("div",be,[(Object(c["t"])(!0),Object(c["h"])(c["a"],null,Object(c["z"])(e.GET_SEARCHED_USERS,(function(e){return Object(c["t"])(),Object(c["h"])("div",{onClick:function(t){return a.pickUser(e,t)},class:"user",key:e.id},[Object(c["i"])("span",fe,Object(c["E"])(e.username),1)],8,de)})),128))])])}n("159b"),n("4fad");var Oe={name:"VUsers",computed:Object(u["c"])(["GET_IS_FETCHING","GET_SEARCHED_USERS"]),methods:Object(s["a"])(Object(s["a"])(Object(s["a"])({},Object(u["b"])(["FETCH_USERS"])),Object(u["d"])(["UPDATE_USERS","UPDATE_IS_FETCHING","SET_RECEIVER_ID"])),{},{pickUser:function(e,t){if(t.target.classList.contains("active")||t.target.parentNode.classList.contains("active"))return t.target.classList.remove("active"),void t.target.parentNode.classList.remove("active");var n=document.querySelector(".box");Object.entries(n.children).forEach((function(e){return e[1].classList.remove("active")})),t.target.classList.contains("user")?t.target.classList.add("active"):t.target.parentNode.classList.add("active"),this.SET_RECEIVER_ID(e._id)}})};n("fda0");const je=I()(Oe,[["render",pe]]);var me=je,ve=function(e){return Object(c["w"])("data-v-4d7cf808"),e=e(),Object(c["u"])(),e},he={class:"row"},ge=ve((function(){return Object(c["i"])("div",{class:"col"},[Object(c["i"])("button",{class:"btn btn-primary sbscb"},"Subscribe!")],-1)})),Ee={class:"container mt-5"},_e=ve((function(){return Object(c["i"])("p",{class:"h5"},"Send push-notifications:",-1)})),Se={class:"mb-3"},Ie=ve((function(){return Object(c["i"])("label",{for:"msg_title",class:"form-label"},"Title:",-1)})),Te={class:"mb-3"},ye=ve((function(){return Object(c["i"])("label",{for:"msg_body",class:"form-label"},"Message body:",-1)}));function we(e,t,n,r,o,a){return Object(c["t"])(),Object(c["h"])("div",he,[ge,Object(c["i"])("div",Ee,[_e,Object(c["i"])("div",Se,[Ie,Object(c["J"])(Object(c["i"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return o.title=e}),type:"text",class:"form-control bg-light",id:"msg_title"},null,512),[[c["G"],o.title]])]),Object(c["i"])("div",Te,[ye,Object(c["J"])(Object(c["i"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return o.body=e}),class:"form-control bg-light",type:"text",id:"msg_body"},null,512),[[c["G"],o.body]])]),Object(c["i"])("button",{class:"btn btn-success btn-large mt-3 sendbtn",id:"send",onClick:t[2]||(t[2]=function(){return a.sendMessage&&a.sendMessage.apply(a,arguments)})}," Send! ")])])}var ke={methods:Object(s["a"])(Object(s["a"])(Object(s["a"])({},Object(u["b"])(["SEND_MESSAGE"])),Object(u["d"])(["UPDATE_USERS","UPDATE_IS_FETCHING","SET_RECEIVER_ID"])),{},{sendMessage:function(){var e=this,t=function(){e.title="",e.body=""},n=this.title,c=this.body;this.SEND_MESSAGE({title:n,body:c,callback:t})}}),data:function(){return{title:"",body:""}}};n("bdec");const Ce=I()(ke,[["render",we],["__scopeId","data-v-4d7cf808"]]);var Ge=Ce,Ue=n("45d1"),Re={name:"Home",components:{VSearchBox:ue,VUsers:me,VGeneralPage:Ge,Login:Ue["default"]},computed:Object(u["c"])(["GET_IS_LOGGED_IN"]),methods:Object(s["a"])(Object(s["a"])({},Object(u["b"])(["FETCH_CART","FETCH_USERS"])),Object(u["d"])(["UPDATE_IS_FETCHING"])),updated:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.UPDATE_IS_FETCHING(!0),t.next=3,e.FETCH_USERS();case 3:e.UPDATE_IS_FETCHING(!1);case 4:case"end":return t.stop()}}),t)})))()}};n("c2c2");const De=I()(Re,[["render",ce],["__scopeId","data-v-e9aea8ca"]]);var xe=De,Le=[{path:"/",name:"main",component:xe},{path:"/login",name:"login",component:function(){return n.e("about").then(n.bind(null,"45d1"))}},{path:"/registration",name:"registration",component:function(){return n.e("about").then(n.bind(null,"1cd4"))}}],Ne=Object(W["a"])({history:Object(W["b"])("/static/"),routes:Le}),He=Ne,Ae=n("6005"),Pe=(n("e9c4"),n("caad"),n("2532"),n("bfbe")),Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1e10,r="\n        ".concat(t,"\n      ");Object(Pe["b"])({type:"".concat(n),title:"".concat(e),text:r,duration:c,data:{}})},Me=window.localStorage,Ve=Object(u["a"])({state:{isFetching:!1,users:[],searchChars:"",searchedUsers:[],currentUser:{},isUserLoggedin:!1,receiverId:null},mutations:{UPDATE_IS_FETCHING:function(e,t){e.isFetching=t},UPDATE_USERS:function(e,t){e.users=t},UPDATE_SEARCHED_USERS:function(e,t){e.searchChars=t},SET_USER:function(e,t){Me.setItem("token",t.token),Me.setItem("username",t.username),Me.setItem("id",t.id),Me.setItem("isLoggedIn",!0),e.isUserLoggedin=!0,He.push({name:"main"}),location.reload()},SET_RECEIVER_ID:function(e,t){Me.receiverId=t},LOGOUT:function(e){Me.removeItem("token"),Me.removeItem("username"),Me.removeItem("id"),Me.removeItem("isLoggedIn"),e.isUserLoggedin=!1,location.reload()}},actions:{FETCH_USERS:function(e){return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://web-notifications.ru/users",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(window.localStorage.token)},credentials:"include",mode:"cors"});case 3:return n=t.sent,t.next=6,n.json();case 6:c=t.sent,e.commit("UPDATE_USERS",c.users),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},FETCH_LOGIN:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function n(){var c,r,o,a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,c=t.username,r=t.password,o="https://web-notifications.ru/login",n.next=6,fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",mode:"cors",body:JSON.stringify({username:c,password:r})});case 6:return a=n.sent,n.next=9,a.json();case 9:i=n.sent,200==i.status?e.commit("SET_USER",i.user):console.log("something wrong"),n.next=16;break;case 13:n.prev=13,n.t0=n["catch"](0),console.log(n.t0);case 16:case"end":return n.stop()}}),n,null,[[0,13]])})))()},SEND_MESSAGE:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,c,r,o,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.title,c=t.body,r=Me.receiverId,o={id:r,title:n,body:c},e.prev=4,e.next=7,fetch("https://web-notifications.ru/sent-notifications",{method:"POST",credentials:"include",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(window.localStorage.token)},body:JSON.stringify(o)});case 7:return a=e.sent,e.next=10,a.json();case 10:i=e.sent,console.log(i),200===a.status&&(t.callback(),Fe.apply(void 0,["Message successfully sent"].concat(Object(Ae["a"])([,,]),[3e3]))),e.next=19;break;case 15:e.prev=15,e.t0=e["catch"](4),console.log(e.t0),alert("Ooops, there is an error. Might be the user can not get notifications at the moment.");case 19:case"end":return e.stop()}}),e,null,[[4,15]])})))()}},getters:{GET_IS_FETCHING:function(e){return e.isFetching},GET_USERS:function(e){return e.users},GET_SEARCHED_USERS:function(e){if(!e.searchChars.length)return e.users;e.searchedUsers=[];for(var t=0;t<Object.entries(e.users).length;t++){var n=Object.entries(e.users)[t][1];n.username.toLowerCase().includes(e.searchChars.toLowerCase())&&e.searchedUsers.push(n)}return e.searchedUsers},GET_IS_LOGGED_IN:function(e){return[e.isUserLoggedin,Me.isLoggedIn]},GET_RECEIVER_ID:function(e){return Me.receiverId}}});n("ab8b"),n("cd74");Object(c["e"])(K).use(Ve).use(He).use(Pe["a"]).mount("#app")},"5ca9":function(e,t,n){"use strict";n("bec5")},"746d":function(e,t,n){},"7cdd":function(e,t,n){},a27e:function(e,t,n){},b83a:function(e,t,n){},bdec:function(e,t,n){"use strict";n("746d")},bec5:function(e,t,n){},c2c2:function(e,t,n){"use strict";n("b83a")},f429:function(e,t,n){"use strict";n("a27e")},fda0:function(e,t,n){"use strict";n("2561")}});
//# sourceMappingURL=app.e000899e.js.map