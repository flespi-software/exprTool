(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{7792:function(e,t,i){},"787d":function(e,t,i){"use strict";var s=i("7792"),n=i.n(s);n.a},"7d52":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",[i("q-resize-observer",{on:{resize:e.onResizePage}}),i("entities-toolbar",{attrs:{item:e.selectedItem,actions:e.actions}},[i("div",{class:{"middle-modificator":!e.active},staticStyle:{"max-width":"50%"},attrs:{slot:"selects"},slot:"selects"},[i("q-select",{ref:"itemSelect",staticClass:"items__select",class:{"items__select--no-selected":!e.active},attrs:{value:e.active,options:e.filteredItems,filled:"",loading:e.isItemsInitStart&&!e.isItemsInit,"hide-dropdown-icon":!e.isNeedSelect,label:e.active?"Account":"SELECT ACCOUNT","hide-bottom-space":"",dense:"",color:"white",dark:"",disable:!e.isNeedSelect,"popup-content-class":"items__popup","popup-content-style":{height:48*(e.filteredItems.length>6?6:e.filteredItems.length)+48+(e.filteredItems.length?0:33)+"px"}},on:{filter:function(t,i){return e.filterItems("subaccounts",t,i)}},scopedSlots:e._u([{key:"no-option",fn:function(){return[i("div",{staticStyle:{"min-height":"77px"}},[i("q-input",{staticClass:"q-ma-xs",attrs:{outlined:"","hide-bottom-space":"",rounded:"",dense:"",color:"white",dark:"",placeholder:"Filter",autofocus:""},on:{input:function(t){return e.$refs.itemSelect.filter(t)}},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}},[i("q-icon",{attrs:{slot:"prepend",name:"mdi-magnify",color:"white"},slot:"prepend"})],1),i("div",{staticClass:"text-center"},[e._v("No results")])],1)]},proxy:!0},{key:"selected-item",fn:function(t){return[e.selectedItem?i("q-item",e._g(e._b({staticClass:"q-pa-none",staticStyle:{"min-height":"20px","margin-top":"2px","max-width":"100%"}},"q-item",t.itemProps,!1),t.itemEvents),[i("q-item-section",[i("q-item-label",{staticClass:"ellipsis overflow-hidden q-pa-none text-white",attrs:{header:""}},[e._v(e._s(e.selectedItem.name||"<noname>"))])],1),i("q-item-section",{staticClass:"text-white",attrs:{side:""}},[e.selectedItem.deleted?i("q-item-label",{staticClass:"cheap-modifier q-pa-none"},[i("small",[e._v("DELETED")])]):e._e(),i("q-item-label",{staticClass:"q-pa-none q-mt-none text-right"},[i("small",[e._v("#"+e._s(e.selectedItem.id))])])],1)],1):e._e()]}},{key:"option",fn:function(t){return[i("q-item",e._g(e._b({staticClass:"q-pa-xs",class:{"text-grey-8":t.opt.deleted},attrs:{clickable:""},on:{click:function(i){e.active=t.opt.id}}},"q-item",t.itemProps,!1),t.itemEvents),[i("q-item-section",[i("q-item-label",{staticClass:"ellipsis overflow-hidden q-pa-xs",attrs:{header:""}},[e._v(e._s(t.opt.name||"<noname>"))])],1),i("q-item-section",{attrs:{side:""}},[t.opt.deleted?i("q-item-label",{staticClass:"q-pa-xs text-right"},[i("small",{staticClass:"cheap-modifier cheap-modifier--item",class:{"cheap-modifier--mobile":e.$q.platform.is.mobile}},[e._v("DELETED")])]):e._e(),i("q-item-label",{staticClass:"q-pa-none q-mt-none text-right",class:{"q-pr-xs":e.$q.platform.is.mobile}},[i("small",[e._v("#"+e._s(t.opt.id))])])],1)],1)]}}])},[i("div",{staticClass:"q-pa-xs select__filter bg-dark",attrs:{slot:"before-options"},slot:"before-options"},[i("q-input",{attrs:{outlined:"","hide-bottom-space":"",rounded:"",dense:"",dark:"",color:"white",placeholder:"Filter",autofocus:""},on:{input:function(t){return e.$refs.itemSelect.filter(t)}},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}},[i("q-icon",{attrs:{slot:"prepend",name:"mdi-magnify",color:"white"},slot:"prepend"})],1)],1)])],1)]),e.isInit&&e.selectedItem?i("logs",{ref:"logs",style:Object.assign({},{height:"calc(100vh - "+(e.isVisibleToolbar?"100px":"50px")+")",position:"relative"},e.panelsWidgetsStyle),attrs:{item:e.selectedItem,cid:e.selectedItem.id,limit:e.limit,originPattern:"mqtt/*",isEnabled:!0,config:e.config.logs},on:{"view-log-message":e.viewWidgetsLogHandler,"action-select":function(t){return e.widgetsViewedLog=t.content}}}):e._e(),!e.items.length&&e.isItemsInit?i("div",{staticClass:"text-center text-grey-3 q-mt-lg"},[i("div",{staticStyle:{"font-size":"2rem"}},[e._v(e._s(e.isLoading?"Fetching data..":"Subacounts not found"))])]):e._e(),i("widgets",{ref:"logsView",attrs:{active:"logsView"===e.activeWidgetWindow,config:e.logsWidgetsViewConfig,actions:e.widgetsHandleActions,controls:e.widgetWindowControls,"view-model":e.widgetsViewModel.logs},on:{"change-view-model":function(t){return e.widgetsChangeViewModelHandler(e.entityName,"logs",t)},active:function(t){return e.activateWidgetWindow("logsView")},close:e.closeLogsWidgetsHandler,next:e.nextWidgetLog,prev:e.prevWidgetLog},model:{value:e.isWidgetsLogsActive,callback:function(t){e.isWidgetsLogsActive=t},expression:"isWidgetsLogsActive"}})],1)},n=[],o=(i("8e6e"),i("8a81"),i("456d"),i("c5f6"),i("7f7f"),i("ac6a"),i("cadf"),i("06db"),i("8615"),i("c47a")),a=i.n(o),l=i("2ce0"),c=i("df1d"),r=i("4596"),d=i("5c16"),m=i("2f62"),u=i("286e"),f=i("a99a"),g=i("9b02"),p=i.n(g);function h(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}function v(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?h(Object(i),!0).forEach((function(t){a()(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):h(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var b={props:["limit","isLoading","isVisibleToolbar","isNeedSelect","config","settings"],mixins:[u["a"],c["a"],r["a"]],data:function(){return{entityName:"mqtt",active:null,isInit:!1,isItemsInit:!1,isItemsInitStart:!1,filter:""}},computed:v(v({},Object(m["d"])({isEmptyMessages:function(e){return!!e[this.config.logs.vuexModuleName]&&!e[this.config.logs.vuexModuleName].messages.length},myAccount:function(e){return{id:e.tokenInfo?e.tokenInfo.cid:0,name:"*Current*"}},tokenType:function(e){return e.tokenInfo&&e.tokenInfo.access?e.tokenInfo.access.type:-1},itemsCollection:function(e){var t=this.myAccount,i=v(a()({},t.id,t),e.subaccounts);return i}})),{},{items:function(){return Object.values(this.itemsCollection||{})},filteredItems:function(){var e=this.filter.toLowerCase(),t=this.filter?this.items.filter((function(t){return t&&"undefined"!==typeof t.name&&null!==t.name&&t.name.toLowerCase().indexOf(e)>=0||t&&"undefined"!==typeof t.id&&null!==t.id&&(t.id+"").indexOf(e)>=0})):this.items;return t.sort((function(e,t){if(!e.name)return-1;if(!t.name)return 1;var i=e.name.toLowerCase(),s=t.name.toLowerCase();return i<s?-1:1})),t},selectedItem:function(){var e=this.itemsCollection[this.active]||null;return e},actions:function(){return[{label:"Clear",icon:"mdi-playlist-remove",handler:this.clearHandler,condition:!this.isEmptyMessages}]},panelsWidgetsStyle:function(){var e={},t=this.widgetStyle.left&&(this.isWidgetsMessageActive||this.isWidgetsLogsActive||this.isWidgetsTrackActive),i=this.widgetStyle.right&&(this.isWidgetsMessageActive||this.isWidgetsLogsActive||this.isWidgetsTrackActive);return(t||i)&&(e.maxWidth="calc(100% - 300px)",i&&(e.left="300px")),e}}),methods:{clearHandler:function(){var e=this;this.$q.dialog({title:"Confirm",message:"Do you really want to clear all data from the panes?",ok:!0,cancel:!0}).onOk((function(){e.$store.commit("".concat(e.config.logs.vuexModuleName,"/clearMessages"))})).onCancel((function(){}))},clearActive:function(){this.active=null},init:function(){var e="mqtt",t=p()(this.settings,"entities[".concat(e,"]"),void 0),i=this.$route.params&&this.$route.params.id?Number(this.$route.params.id):null;this.isInit=!0,i?this.itemsCollection[i]?this.active=i:this.active=null:t&&this.itemsCollection[t]?this.active=t:this.active=this.myAccount.id,this.$emit("inited")},clearWidgetsState:function(){this.isWidgetsLogsActive=!1,this.activeWidgetWindow=void 0,this.widgetsViewedLog=null},onResizePage:function(e){this.$refs.logsView.resize(e)},beforeEnableWidgetByPane:function(e){var t=this;this.widgetStyle.left||this.isWidgetsLogsActive||this.widgetsViewModel.logs||this.$nextTick((function(){return t.widgetsChangeViewModelHandler(t.entityName,"logs",{type:"minimized",to:"left"})}))}},watch:{$route:function(e){if(e.params&&e.params.id){var t=Number(e.params.id);this.itemsCollection[t]?this.active=t:this.isInit&&(this.active=this.myAccount.id)}else e.params&&!e.params.id&&(this.active=null)},active:function(e){var t=this.itemsCollection[e]||{};e?(this.$emit("update:settings",{type:"ENTITY_CHANGE",opt:{entity:"mqtt"},value:t.id}),this.$router.push("/mqtt/".concat(e)).catch((function(e){return e}))):this.$router.push("/mqtt").catch((function(e){return e}))}},components:{logs:l["a"],EntitiesToolbar:f["a"],Widgets:d["a"]}},w=b,y=(i("787d"),i("2877")),q=Object(y["a"])(w,s,n,!1,null,null,null);t["default"]=q.exports}}]);