"use strict";(globalThis["webpackChunkexpr_tool"]=globalThis["webpackChunkexpr_tool"]||[]).push([[8],{5008:(e,t,n)=>{n.r(t),n.d(t,{default:()=>q});var o=n(3673);const i={class:"login-page window-height window-width bg-light column items-center no-wrap"},s={class:"login-back flex items-center justify-center"},c={class:"login-code flex justify-center"},l={key:0},r={key:0,class:"login-card shadow-4 bg-white column items-center justify-center no-wrap"},d=(0,o._)("div",{class:"row full-width"},[(0,o._)("div",{class:"col-12 text-center text-red text-bold"},[(0,o._)("span",null,"Token has been expired or revoked")])],-1),a=[d],w={key:1,class:"login-card shadow-4 bg-white column items-center justify-center no-wrap"},g=(0,o._)("img",{src:"tools.png",alt:"Tools"},null,-1),u=(0,o._)("p",{class:"text-center text-grey-9 text-bold"},"exprTool",-1),h={class:"row full-width"},p={class:"col-12 text-center"},m={key:1},v={class:"login-card shadow-4 bg-white column items-center justify-center no-wrap"};function f(e,t,n,d,f,b){const y=(0,o.up)("q-btn"),k=(0,o.up)("q-circular-progress");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o._)("div",s,[(0,o._)("div",c,[e.$route.params.token?((0,o.wg)(),(0,o.iD)("div",m,[(0,o._)("div",v,[(0,o.Wm)(k,{indeterminate:"",color:"green-6",style:{width:"100%",height:"45px"}})])])):((0,o.wg)(),(0,o.iD)("div",l,[!e.canLogin||e.$q.platform.within.iframe?((0,o.wg)(),(0,o.iD)("div",r,a)):((0,o.wg)(),(0,o.iD)("div",w,[g,u,(0,o._)("div",h,[(0,o._)("div",p,[(0,o.Wm)(y,{onClick:t[0]||(t[0]=t=>e.openWindow(`${e.authHost}/login/#/providers`)),icon:"mdi-account-circle",color:"red-7",rounded:"",label:"login / register",size:e.$q.platform.is.mobile?"md":"lg"},null,8,["size"])])])]))]))])])])}var b=n(1959),y=n(8339),k=n(2498),x=n(287);function _(e,t="auth"){const n=500,o=600,i=window.screenLeft,s=window.screenTop,c=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width,l=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height,r=c/2-n/2+i,d=l/2-o/2+s,a=window.open(e,t,`toolbar=no,location=no,status=yes,resizable=yes,scrollbars=yes, width=${n}, height=${o}, top=${d}, left=${r}`);a&&a.focus()}function L(e){const t=n=>{if("string"===typeof n.data&&~n.data.indexOf("FlespiLogin|token:")){window.removeEventListener("message",t);let o=n.data;o=o.replace("FlespiLogin|token:","");const i=JSON.parse(o);e(i)}};window.addEventListener("message",t)}const W=(0,o.aZ)({setup(){const e=(0,b.iH)(!0),t=(0,k.o)(),n=(0,y.yj)(),o=(0,y.tv)();return L((e=>{t.dispatch("system/login",e).then((()=>{o.push(n.params.goto||"/").catch((e=>console.log(e)))})).catch((e=>console.log("Login failed",e)))})),{canLogin:e,openWindow:_,authHost:(null===x.v||void 0===x.v?void 0:x.v.server)||"https://flespi.io"}}});var $=n(4260),H=n(8240),j=n(6122),E=n(7518),T=n.n(E);const D=(0,$.Z)(W,[["render",f]]),q=D;T()(W,"components",{QBtn:H.Z,QCircularProgress:j.Z})}}]);