"use strict";(self["webpackChunkexpr_tool"]=self["webpackChunkexpr_tool"]||[]).push([[175],{3175:(e,t,o)=>{o.r(t),o.d(t,{default:()=>y});var n=o(3673);function s(e,t,o,s,a,l){const r=(0,n.up)("router-view"),u=(0,n.up)("q-page-container"),c=(0,n.up)("q-layout");return(0,n.wg)(),(0,n.j4)(c,{view:"lHh Lpr lFf"},{default:(0,n.w5)((()=>[(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[e.logged?((0,n.wg)(),(0,n.j4)(r,{key:0})):(0,n.kq)("",!0)])),_:1})])),_:1})}var a=o(2498),l=o(1959),r=o(9582);function u(e,t,o){const n=(0,l.Fl)((()=>e.state.system.logged)),s=()=>{t.push("/login").catch((e=>{console.log("Redirect to manual login failed",e)}))};if(!n.value){const t=(0,l.Fl)((()=>e.state.system.sessionSettings)),n=t.value.token,a=t.value.region;o.query.token?e.dispatch("system/login",{token:o.query.token}).then((e=>{e||s()})).catch((e=>{console.log("Login by router failed",e)})):n?e.dispatch("system/login",{token:n,region:a}).then((e=>{e||s()})).catch((e=>{console.log("Session restore failed",e)})):s()}return{logged:n}}const c=(0,n.aZ)({name:"MainLayout",setup(){const e=(0,a.useStore)(),t=(0,r.tv)(),o=(0,r.yj)(),n=u(e,t,o);return Object.assign({},n)}});var i=o(4260),g=o(4899),p=o(2652),d=o(7518),f=o.n(d);const h=(0,i.Z)(c,[["render",s]]),y=h;f()(c,"components",{QLayout:g.Z,QPageContainer:p.Z})}}]);