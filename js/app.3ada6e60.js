(function(e){function t(t){for(var r,a,i=t[0],s=t[1],u=t[2],l=0,b=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&b.push(c[a][0]),c[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(b.length)b.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==c[s]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={app:0},o=[];function a(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"e34ee262"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=c[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=c[e]=[t,r]}));t.push(n[2]=r);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=a(e);var u=new Error;o=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",u.name="ChunkLoadError",u.type=r,u.request=o,n[1](u)}c[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/static/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0061":function(e,t,n){},"0c60":function(e,t,n){"use strict";n("44d3")},2561:function(e,t,n){},"44d3":function(e,t,n){},"45a8":function(e,t,n){"use strict";n("0061")},"45d1":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),c={class:"container col-6 mt-5 pt-5 bg-light",style:{"border-radius":"8px","min-width":"400px"}},o=Object(r["i"])("h5",{class:"text-center"},"Please login",-1),a={class:"container col-8 text-left mt-5"},i={class:"mb-3"},s=Object(r["i"])("label",{for:"loginInput",class:"form-label"},"Login",-1),u={class:"mb-3"},l=Object(r["i"])("label",{for:"passwordInput",class:"form-label"},"Password",-1),d={class:"mb-3"};function b(e,t,n,b,f,p){return Object(r["t"])(),Object(r["h"])("div",c,[o,Object(r["i"])("div",a,[Object(r["i"])("div",i,[s,Object(r["J"])(Object(r["i"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return f.username=e}),type:"email",class:"form-control",id:"loginInput"},null,512),[[r["G"],f.username]])]),Object(r["i"])("div",u,[l,Object(r["J"])(Object(r["i"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return f.password=e}),class:"form-control",type:"password",id:"passwordInput",rows:"3"},null,512),[[r["G"],f.password]])]),Object(r["i"])("div",d,[Object(r["i"])("button",{onClick:t[2]||(t[2]=function(){return p.login&&p.login.apply(p,arguments)}),class:"btn btn-success loginBtn mb-5"}," Send ")])])])}var f=n("5530"),p=n("5502"),m={name:"login",methods:Object(f["a"])(Object(f["a"])(Object(f["a"])({},Object(p["b"])(["FETCH_LOGIN"])),Object(p["d"])(["UPDATE_USERS","UPDATE_IS_FETCHING"])),{},{login:function(){var e=this.username,t=this.password;this.username&&this.password?this.FETCH_LOGIN({username:e,password:t}):console.log("Input username && pasword")}}),data:function(){return{username:"",password:""}}},O=n("d959"),j=n.n(O);const h=j()(m,[["render",b]]);t["default"]=h},4611:function(e,t,n){"use strict";n("7cdd")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={key:0,class:"content container"},o={key:1,class:"content"};function a(e,t,n,a,i,s){var u=Object(r["B"])("v-b-header"),l=Object(r["B"])("router-view"),d=Object(r["B"])("v-loader"),b=Object(r["B"])("notifications");return Object(r["t"])(),Object(r["h"])("main",null,[Object(r["k"])(u),e.GET_IS_FETCHING?(Object(r["t"])(),Object(r["h"])("div",o,[Object(r["k"])(d)])):(Object(r["t"])(),Object(r["h"])("div",c,[Object(r["k"])(l,null,{default:Object(r["I"])((function(e){var t=e.Component,n=e.route;return[Object(r["k"])(r["b"],{name:"route-fade",mode:"out-in",appear:""},{default:Object(r["I"])((function(){return[(Object(r["t"])(),Object(r["f"])(Object(r["C"])(t),{key:n.path}))]})),_:2},1024)]})),_:1})])),Object(r["k"])(b,{position:"bottom left"})])}var i=n("1da1"),s=n("5530"),u=(n("96cf"),n("5502")),l=function(e){return Object(r["w"])("data-v-8add0f8a"),e=e(),Object(r["u"])(),e},d={class:"navbar navbar-expand-lg navbar-light bg-light"},b={class:"container col-9 px-0"},f=Object(r["j"])("Home"),p=l((function(){return Object(r["i"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(r["i"])("span",{class:"navbar-toggler-icon"})],-1)})),m={class:"collapse navbar-collapse",id:"navbarSupportedContent"},O={key:0,class:"navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-end"},j=Object(r["j"])("Login"),h=Object(r["j"])("Registration"),v={key:1,class:"navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-end"},g=Object(r["j"])("Logout");function E(e,t,n,c,o,a){var i=Object(r["B"])("router-link");return Object(r["t"])(),Object(r["h"])("nav",d,[Object(r["i"])("div",b,[Object(r["k"])(i,{class:"navbar-brand ms-auto",to:"/"},{default:Object(r["I"])((function(){return[f]})),_:1}),p,Object(r["i"])("div",m,[e.GET_IS_LOGGED_IN[0]||e.GET_IS_LOGGED_IN[1]?(Object(r["t"])(),Object(r["h"])("ul",v,[Object(r["i"])("li",{onClick:t[2]||(t[2]=function(){return a.logout&&a.logout.apply(a,arguments)}),class:"nav-item"},[Object(r["k"])(i,{class:"nav-link fs-6","aria-current":"page",to:"/login"},{default:Object(r["I"])((function(){return[g]})),_:1})])])):(Object(r["t"])(),Object(r["h"])("ul",O,[Object(r["i"])("li",{onClick:t[0]||(t[0]=function(){return e.closeMobMenu&&e.closeMobMenu.apply(e,arguments)}),class:"nav-item"},[Object(r["k"])(i,{class:"nav-link fs-6","aria-current":"page",to:"/login"},{default:Object(r["I"])((function(){return[j]})),_:1})]),Object(r["i"])("li",{onClick:t[1]||(t[1]=function(){return e.closeMobMenu&&e.closeMobMenu.apply(e,arguments)}),class:"nav-item"},[Object(r["k"])(i,{class:"nav-link fs-6 pe-0","aria-current":"page",to:"/registration"},{default:Object(r["I"])((function(){return[h]})),_:1})])]))])])])}n("7b17");var _={name:"v-b-header",computed:Object(u["c"])(["GET_IS_LOGGED_IN"]),methods:Object(s["a"])(Object(s["a"])(Object(s["a"])({},Object(u["b"])(["FETCH_CART","FETCH_USERS"])),Object(u["d"])(["LOGOUT"])),{},{logout:function(){this.LOGOUT()}}),mounted:function(){console.log(this.GET_IS_LOGGED_IN)}},S=(n("f429"),n("d959")),T=n.n(S);const y=T()(_,[["render",E],["__scopeId","data-v-8add0f8a"]]);var I=y,w=function(e){return Object(r["w"])("data-v-1f6daf1a"),e=e(),Object(r["u"])(),e},C=w((function(){return Object(r["i"])("div",{class:"overlay"},[Object(r["i"])("div",{class:"body"},[Object(r["i"])("button",{class:"btn",type:"button",disabled:""},[Object(r["i"])("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),Object(r["j"])(" Loading... ")])])],-1)}));function R(e,t,n,c,o,a){return Object(r["t"])(),Object(r["f"])(r["b"],null,{default:Object(r["I"])((function(){return[C]})),_:1})}var G=function(){var e=document.querySelector("body");e.style.overflowY="hidden"},k=function(){var e=document.querySelector("body");e.style.overflowY="auto"},U={name:"v-loader",mounted:function(){G()},beforeUnmount:function(){k()}};n("0c60");const x=T()(U,[["render",R],["__scopeId","data-v-1f6daf1a"]]);var A=x,D={slot:"body","slot-scope":"props"},L={class:"custom-template"},H=Object(r["i"])("div",{class:"custom-template-icon"},[Object(r["i"])("i",{class:"icon ion-android-checkmark-circle"})],-1),N={class:"custom-template-content"},P={class:"custom-template-title"},F=["innerHTML"],V=Object(r["i"])("i",{class:"icon ion-android-close"},null,-1),M=[V];function B(e,t,n,c,o,a){var i=Object(r["B"])("notifications");return Object(r["t"])(),Object(r["f"])(i,{group:"custom-template",duration:15e3,width:500,"animation-name":"v-fade-left",position:"top left"},{default:Object(r["I"])((function(){return[Object(r["i"])("template",D,[Object(r["i"])("div",L,[H,Object(r["i"])("div",N,[Object(r["i"])("div",P,[Object(r["j"])(Object(r["E"])(e.props.item.title)+" Random number: "+Object(r["E"])(e.props.item.randomNumber)+" ",1),Object(r["i"])("div",null," Random number: "+Object(r["E"])(e.props.item.randomNumber),1)]),Object(r["i"])("div",{class:"custom-template-text",innerHTML:e.props.item.text},null,8,F)]),Object(r["i"])("div",{class:"custom-template-close",onClick:t[0]||(t[0]=function(){var t;return e.props.close&&(t=e.props).close.apply(t,arguments)})},M)])])]})),_:1})}n("99af");var J={name:"v-notification",data:function(){return{}},methods:{show:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"custom",n=(this.callit,'\n        Heelo! Start notificate brothers about errors!\n        <br>\n        <button class="fuck_btn" onclick=""> click me!</button>\n        Date: '.concat(new Date,"\n      "));this.$notify({group:e,clean:!1,type:t,title:"Test ".concat(t," notification #").concat(this.id++),text:n,randomNumber:"100010010",data:{randomNumber:100010010}})},clean:function(e){this.$notify({group:e,clean:!0})}}};const K=T()(J,[["render",B]]);var W=K,Y={name:"App",components:{VNotification:W,VLoader:A,VBHeader:I},computed:Object(u["c"])(["GET_IS_FETCHING","GET_USERS"]),methods:Object(s["a"])(Object(s["a"])({},Object(u["b"])(["FETCH_USERS"])),Object(u["d"])(["UPDATE_USERS","UPDATE_IS_FETCHING"])),data:function(){},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.UPDATE_IS_FETCHING(!0),t.next=3,e.FETCH_USERS();case 3:e.UPDATE_IS_FETCHING(!1);case 4:case"end":return t.stop()}}),t)})))()}};n("5ca9");const q=T()(Y,[["render",a]]);var z=q,Q=(n("ddb8"),n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),Z={class:"container col-10"},$={key:0,class:"row"},X={class:"col col-4 mt-5"},ee={class:"col col-8 mt-5"},te={key:1,class:"row"};function ne(e,t,n,c,o,a){var i=Object(r["B"])("v-search-box"),s=Object(r["B"])("v-users"),u=Object(r["B"])("v-general-page"),l=Object(r["B"])("login");return Object(r["t"])(),Object(r["h"])("div",Z,[e.GET_IS_LOGGED_IN[0]||e.GET_IS_LOGGED_IN[1]?(Object(r["t"])(),Object(r["h"])("div",$,[Object(r["i"])("div",X,[Object(r["k"])(i),Object(r["k"])(s)]),Object(r["i"])("div",ee,[Object(r["k"])(u)])])):(Object(r["t"])(),Object(r["h"])("div",te,[Object(r["k"])(l)]))])}n("ac1f"),n("841c");var re={class:"input-group"},ce={class:"form-outline w-100"};function oe(e,t,n,c,o,a){return Object(r["t"])(),Object(r["h"])("div",re,[Object(r["i"])("div",ce,[Object(r["J"])(Object(r["i"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return o.inputValue=e}),onInput:t[1]||(t[1]=function(){return a.search&&a.search.apply(a,arguments)}),placeholder:"Search",type:"search",id:"form1",class:"form-control"},null,544),[[r["G"],o.inputValue]])])])}var ae={methods:Object(s["a"])(Object(s["a"])({},Object(u["d"])(["UPDATE_SEARCHED_USERS"])),{},{search:function(e){this.UPDATE_SEARCHED_USERS(this.inputValue)}}),data:function(){return{inputValue:""}}};n("4611");const ie=T()(ae,[["render",oe],["__scopeId","data-v-0c7ae633"]]);var se=ie,ue={class:"mt-3 col users_box"},le={class:"box"},de=["onClick"],be={class:"user_name"};function fe(e,t,n,c,o,a){return Object(r["t"])(),Object(r["h"])("div",ue,[Object(r["i"])("div",le,[(Object(r["t"])(!0),Object(r["h"])(r["a"],null,Object(r["z"])(e.GET_SEARCHED_USERS,(function(e){return Object(r["t"])(),Object(r["h"])("div",{onClick:function(t){return a.pickUser(e,t)},class:"user",key:e.id},[Object(r["i"])("span",be,Object(r["E"])(e.username),1)],8,de)})),128))])])}n("159b"),n("4fad");var pe={name:"VUsers",computed:Object(u["c"])(["GET_IS_FETCHING","GET_SEARCHED_USERS"]),methods:Object(s["a"])(Object(s["a"])(Object(s["a"])({},Object(u["b"])(["FETCH_USERS"])),Object(u["d"])(["UPDATE_USERS","UPDATE_IS_FETCHING","SET_RECEIVER_ID"])),{},{pickUser:function(e,t){if(t.target.classList.contains("active")||t.target.parentNode.classList.contains("active"))return t.target.classList.remove("active"),void t.target.parentNode.classList.remove("active");var n=document.querySelector(".box");Object.entries(n.children).forEach((function(e){return e[1].classList.remove("active")})),t.target.classList.contains("user")?t.target.classList.add("active"):t.target.parentNode.classList.add("active"),this.SET_RECEIVER_ID(e._id)}})};n("fda0");const me=T()(pe,[["render",fe]]);var Oe=me,je=function(e){return Object(r["w"])("data-v-5526db2c"),e=e(),Object(r["u"])(),e},he={class:"row"},ve={class:"col"},ge={class:"container mt-5"},Ee=je((function(){return Object(r["i"])("p",{class:"h5"},"Send push-notifications:",-1)})),_e={class:"mb-3"},Se=je((function(){return Object(r["i"])("label",{for:"msg_title",class:"form-label"},"Title:",-1)})),Te={class:"mb-3"},ye=je((function(){return Object(r["i"])("label",{for:"msg_body",class:"form-label"},"Message body:",-1)})),Ie={class:""};function we(e,t,n,c,o,a){return Object(r["t"])(),Object(r["h"])("div",he,[Object(r["i"])("div",ve,[Object(r["i"])("button",{onClick:t[0]||(t[0]=function(){return a.subscribeFunc&&a.subscribeFunc.apply(a,arguments)}),class:"btn btn-primary sbscb"}," Subscribe! ")]),Object(r["i"])("div",ge,[Ee,Object(r["i"])("div",_e,[Se,Object(r["J"])(Object(r["i"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return o.title=e}),type:"text",class:"form-control bg-light",id:"msg_title"},null,512),[[r["G"],o.title]])]),Object(r["i"])("div",Te,[ye,Object(r["J"])(Object(r["i"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return o.body=e}),class:"form-control bg-light",type:"text",id:"msg_body"},null,512),[[r["G"],o.body]])]),Object(r["i"])("button",{class:"btn btn-success btn-large mt-3 sendbtn",id:"send",onClick:t[3]||(t[3]=function(){return a.sendMessage&&a.sendMessage.apply(a,arguments)})}," Send! ")]),Object(r["i"])("div",Ie,[Object(r["i"])("button",{onClick:t[4]||(t[4]=function(){return a.getWorker&&a.getWorker.apply(a,arguments)}),class:"btn btn-primary"},"GET_WORKER")])])}var Ce={computed:Object(u["c"])(["GET_VAPID_KEY","GET_WORKER"]),methods:Object(s["a"])(Object(s["a"])(Object(s["a"])({},Object(u["b"])(["SEND_MESSAGE","FETCH_SUBSCRIBE"])),Object(u["d"])(["UPDATE_USERS","UPDATE_IS_FETCHING","SET_RECEIVER_ID"])),{},{sendMessage:function(){var e=this,t=function(){e.title="",e.body=""},n=this.title,r=this.body;this.SEND_MESSAGE({title:n,body:r,callback:t})},getWorker:function(){console.log(this.GET_WORKER)},subscribeFunc:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.FETCH_SUBSCRIBE();case 1:case"end":return t.stop()}}),t)})))()}}),data:function(){return{title:"",body:""}}};n("45a8");const Re=T()(Ce,[["render",we],["__scopeId","data-v-5526db2c"]]);var Ge=Re,ke=n("45d1"),Ue={name:"Home",components:{VSearchBox:se,VUsers:Oe,VGeneralPage:Ge,Login:ke["default"]},computed:Object(u["c"])(["GET_IS_LOGGED_IN","GET_WORKER"]),methods:Object(s["a"])(Object(s["a"])({},Object(u["b"])(["FETCH_CART","FETCH_USERS"])),Object(u["d"])(["UPDATE_IS_FETCHING","IS_PAGE_ACTIVE"])),data:function(){return{hidden:null,visibilityChange:null}},mounted:function(){function e(){console.log("inside handleVisibilityChange",this.hidden,this.visibilityChange),document[this.hidden]?console.log("TAb is hidden"):console.log("TAb is visible")}"undefined"!==typeof document.hidden&&(this.hidden="hidden",this.visibilityChange="visibilitychange",document.addEventListener(this.visibilityChange,e,!1)),console.log("Finish mounting")},updated:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.UPDATE_IS_FETCHING(!0),t.next=3,e.FETCH_USERS();case 3:e.UPDATE_IS_FETCHING(!1),console.log(e.GET_IS_LOGGED_IN);case 5:case"end":return t.stop()}}),t)})))()},unmounted:function(){document.removeEventListener(this.visibilityChange)}};n("baa0");const xe=T()(Ue,[["render",ne],["__scopeId","data-v-2d1832e7"]]);var Ae=xe,De=[{path:"/",name:"main",component:Ae},{path:"/login",name:"login",component:function(){return n.e("about").then(n.bind(null,"45d1"))}},{path:"/registration",name:"registration",component:function(){return n.e("about").then(n.bind(null,"1cd4"))}}],Le=Object(Q["a"])({history:Object(Q["b"])("/static/"),routes:De}),He=Le,Ne=n("6005"),Pe=(n("e9c4"),n("38cf"),n("5319"),n("5cc6"),n("907a"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("caad"),n("2532"),n("bfbe")),Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1e10,c="\n        ".concat(t,"\n      ");Object(Pe["b"])({type:"".concat(n),title:"".concat(e),text:c,duration:r,data:{}})},Ve=window.localStorage,Me=Object(u["a"])({state:{isFetching:!1,users:[],searchChars:"",searchedUsers:[],currentUser:{},isUserLoggedin:!1,receiverId:null,vapidKey:"BJ47mTyLGqEnQZR0kymxJmReHKjE9jJgFEPnwbHzYR8RKi3dUguQZvmFu4a49oWkn7JvYRQYSvcQhpidpVlbWVI",worker:null},mutations:{UPDATE_IS_FETCHING:function(e,t){e.isFetching=t},UPDATE_USERS:function(e,t){e.users=t},UPDATE_SEARCHED_USERS:function(e,t){e.searchChars=t},SET_USER:function(e,t){Ve.setItem("token",t.token),Ve.setItem("username",t.username),Ve.setItem("id",t.id),Ve.setItem("isLoggedIn",!0),e.isUserLoggedin=!0,He.push({name:"main"}),location.reload()},SET_RECEIVER_ID:function(e,t){Ve.receiverId=t},LOGOUT:function(e){Ve.removeItem("token"),Ve.removeItem("username"),Ve.removeItem("id"),Ve.removeItem("isLoggedIn"),e.isUserLoggedin=!1,location.reload()},IS_PAGE_ACTIVE:function(e){document[e]?alert("hidden"):alert("visible")}},actions:{FETCH_USERS:function(e){return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://web-notifications.ru/users",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(window.localStorage.token)},credentials:"include",mode:"cors"});case 3:if(n=t.sent,console.log(n.status),200!=n.status){t.next=11;break}return t.next=8,n.json();case 8:return r=t.sent,e.commit("UPDATE_USERS",r.users),t.abrupt("return");case 11:console.log("An error occured during authorisation"),t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](0),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})))()},FETCH_LOGIN:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function n(){var r,c,o,a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,r=t.username,c=t.password,o="https://web-notifications.ru/login",n.next=6,fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",mode:"cors",body:JSON.stringify({username:r,password:c})});case 6:return a=n.sent,n.next=9,a.json();case 9:i=n.sent,200==i.status?e.commit("SET_USER",i.user):console.log("something wrong"),n.next=16;break;case 13:n.prev=13,n.t0=n["catch"](0),console.log(n.t0);case 16:case"end":return n.stop()}}),n,null,[[0,13]])})))()},FETCH_REGISTRATION:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,r,c,o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.username,r=t.password,c="https://web-notifications.ru/registration",e.next=5,fetch(c,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",mode:"cors",body:JSON.stringify({username:n,password:r})});case 5:return o=e.sent,e.next=8,o.json();case 8:a=e.sent,201==a.status?window.location.href="/login":console.log(a);case 10:case"end":return e.stop()}}),e)})))()},FETCH_SUBSCRIBE:function(e){return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r,c,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=function(e){for(var t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=window.atob(n),c=new Uint8Array(r.length),o=0;o<r.length;++o)c[o]=r.charCodeAt(o);return c},t.next=3,navigator.serviceWorker.register("service-worker.js",{scope:"/static/service-worker.js"});case 3:return r=t.sent,r.postMessage("Message from main script"),console.log("registration   --\x3e ",r),t.next=8,r.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:n(e.state.vapidKey)});case 8:return c=t.sent,o={userId:Ve.id,subscription:c},console.log("subscription   --\x3e ",c),t.next=13,fetch("https://web-notifications.ru/subscribe/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(Ve.token)},credentials:"include",mode:"cors",body:JSON.stringify(o)});case 13:case"end":return t.stop()}}),t)})))()},SEND_MESSAGE:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,r,c,o,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.title,r=t.body,c=Ve.receiverId,o={id:c,title:n,body:r},e.prev=4,e.next=7,fetch("https://web-notifications.ru/sent-notifications",{method:"POST",credentials:"include",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(window.localStorage.token)},body:JSON.stringify(o)});case 7:return a=e.sent,e.next=10,a.json();case 10:i=e.sent,console.log(i),200===a.status&&(t.callback(),Fe.apply(void 0,["Message successfully sent"].concat(Object(Ne["a"])([,,]),[3e3]))),e.next=19;break;case 15:e.prev=15,e.t0=e["catch"](4),console.log(e.t0),alert("Ooops, there is an error. Might be the user can not get notifications at the moment.");case 19:case"end":return e.stop()}}),e,null,[[4,15]])})))()}},getters:{GET_IS_FETCHING:function(e){return e.isFetching},GET_USERS:function(e){return e.users},GET_SEARCHED_USERS:function(e){if(!e.searchChars.length)return e.users;e.searchedUsers=[];for(var t=0;t<Object.entries(e.users).length;t++){var n=Object.entries(e.users)[t][1];n.username.toLowerCase().includes(e.searchChars.toLowerCase())&&e.searchedUsers.push(n)}return e.searchedUsers},GET_IS_LOGGED_IN:function(e){return[e.isUserLoggedin,Ve.isLoggedIn]},GET_RECEIVER_ID:function(e){return Ve.receiverId},GET_VAPID_KEY:function(e){return e.vapidKey},GET_WORKER:function(e){return e.worker}}});n("ab8b"),n("cd74");Object(r["e"])(z).use(Me).use(He).use(Pe["a"]).mount("#app")},"5ca9":function(e,t,n){"use strict";n("bec5")},"7cdd":function(e,t,n){},9633:function(e,t,n){},a27e:function(e,t,n){},baa0:function(e,t,n){"use strict";n("9633")},bec5:function(e,t,n){},ddb8:function(e,t){self.addEventListener("push",(function(e){var t=e.data.json();console.log("SW data is ",t),console.log("actions is: ",t.actions),self.registration.showNotification(t.title,{body:t.body,icon:"favicon.ico",image:t.image})}))},f429:function(e,t,n){"use strict";n("a27e")},fda0:function(e,t,n){"use strict";n("2561")}});
//# sourceMappingURL=app.3ada6e60.js.map