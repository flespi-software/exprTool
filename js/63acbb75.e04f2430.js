(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["63acbb75"],{c34e:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",[e.isInit?[i("q-toolbar",{staticClass:"justify-between",attrs:{color:"dark"}},[i("div"),i("q-btn",{staticClass:"on-left",attrs:{title:"Mode (Real-time/History)",flat:"",color:"white",icon:e.modeModel?"playlist_play":"history",rounded:e.$q.platform.is.mobile},on:{click:function(t){e.modeModel=!e.modeModel}}},[e._v("\n        "+e._s(e.$q.platform.is.mobile?"":e.modeModel?"Real-time":"History")+"\n        "),e.newMessagesCount?i("q-chip",{staticClass:"cursor-pointer q-ml-sm",attrs:{small:"",square:"",color:"red"}},[e._v(e._s(e.newMessagesCount))]):e._e()],1),i("div",{staticClass:"flex"},[i("transition",{attrs:{appear:"","enter-active-class":"animated bounceInDown","leave-active-class":"animated bounceOutUp"}},[e.modeModel&&!e.isEmptyMessages?i("div",{staticClass:"on-left cursor-pointer pull-right text-center",attrs:{title:"Clear all panes"},on:{click:e.clearHandler}},[i("q-icon",{attrs:{size:"1.5rem",color:"white",name:"mdi-playlist-remove"}}),i("div",{staticStyle:{"font-size":".9rem"}},[e._v("Clear")])],1):e._e()])],1)],1),i("logs",{ref:"logs",style:{minHeight:"calc(100vh - "+(e.isVisibleToolbar?"100px":"50px")+")",position:"relative"},attrs:{mode:e.mode,item:!0,limit:e.limit,originPattern:"*",isEnabled:!0,config:e.config.logs},on:{"view-log-message":e.viewLogMessagesHandler}})]:i("div",{staticClass:"text-center",staticStyle:{display:"flex","justify-content":"center","font-size":"1.5rem"}},[i("div",{staticClass:"text-grey-3",staticStyle:{"margin-top":"50px"}},[e.isLoading?i("div",[e._v("Fetching data..")]):e._e()])])],2)},o=[],a=(i("c5f6"),i("3156")),n=i.n(a),l=i("2ce0"),c=i("2f62"),r=i("286e"),d={props:["limit","isLoading","isVisibleToolbar","isNeedSelect","config"],mixins:[r["a"]],data:function(){return{mode:1,isInit:!1}},computed:n()({},Object(c["d"])({newMessagesCount:function(e){return e[this.config.logs.vuexModuleName]?e[this.config.logs.vuexModuleName].newMessagesCount:0},isEmptyMessages:function(e){return!!e[this.config.logs.vuexModuleName]&&!e[this.config.logs.vuexModuleName].messages.length}}),{modeModel:{get:function(){return!!this.mode},set:function(e){var t=Date.now();this.date=e?0:t-t%864e5,this.mode=Number(e),this.$emit("view-data-hide")}}}),methods:{viewDataHandler:function(e){this.$emit("view-data",e)},viewLogMessagesHandler:function(e){this.$emit("view-log-message",e)},clearHandler:function(){var e=this;this.$q.dialog({title:"Confirm",message:"Do you really want to clear all data from the panes?",ok:!0,cancel:!0}).then(function(){e.$store.commit("".concat(e.config.logs.vuexModuleName,"/clearMessages"))}).catch(function(){})},init:function(){this.isInit=!0}},components:{logs:l["a"]}},m=d,u=(i("d82a"),i("2877")),g=Object(u["a"])(m,s,o,!1,null,null,null);g.options.__file="Platform.vue";t["default"]=g.exports},cdc4:function(e,t,i){},d82a:function(e,t,i){"use strict";var s=i("cdc4"),o=i.n(s);o.a}}]);