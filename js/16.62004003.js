(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{"177b":function(e,t,i){"use strict";var s=i("8367"),n=i.n(s);n.a},8116:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",[i("q-resize-observer",{on:{resize:e.onResizePage}}),i("entities-toolbar",{attrs:{item:e.selectedItem,actions:e.actions}},[i("div",{class:{"middle-modificator":!e.active},staticStyle:{"max-width":"50%"},attrs:{slot:"selects"},slot:"selects"},[i("q-select",{ref:"itemSelect",staticClass:"items__select",class:{"items__select--no-selected":!e.active},attrs:{value:e.active,options:e.filteredItems,filled:"",loading:e.isItemsInitStart&&!e.isItemsInit,label:e.active?"Stream":"SELECT STREAM",dark:"","hide-bottom-space":"",dense:"",color:"white",disable:!e.isNeedSelect,"hide-dropdown-icon":!e.isNeedSelect,"popup-content-class":"items__popup","popup-content-style":{height:48*(e.filteredItems.length>6?6:e.filteredItems.length)+(e.needShowGetDeletedAction&&1===e.tokenType?77:48)+(e.filteredItems.length?0:4)+"px"}},on:{filter:function(t,i){return e.filterItems(e.entityName,t,i)}},scopedSlots:e._u([{key:"no-option",fn:function(){return[i("div",{staticStyle:{"min-height":"77px"}},[i("q-input",{staticClass:"q-ma-xs",attrs:{outlined:"","hide-bottom-space":"",rounded:"",dense:"",color:"white",dark:"",placeholder:"Filter",autofocus:""},on:{input:function(t){return e.$refs.itemSelect.filter(t)}},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}},[i("q-icon",{attrs:{slot:"prepend",name:"mdi-magnify",color:"white"},slot:"prepend"})],1),i("div",{staticClass:"text-center"},[e._v("No results")])],1)]},proxy:!0},{key:"selected-item",fn:function(t){return[e.selectedItem?i("q-item",e._g(e._b({staticClass:"q-pa-none",staticStyle:{"min-height":"20px","margin-top":"2px","max-width":"100%"}},"q-item",t.itemProps,!1),t.itemEvents),[i("q-item-section",[i("q-item-label",{staticClass:"ellipsis overflow-hidden q-pa-none text-white",attrs:{header:""}},[e._v(e._s(e.selectedItem.name||"<noname>"))]),i("q-item-label",{staticClass:"q-pa-none q-mt-none text-white ellipsis",staticStyle:{"line-height":"0.75rem!important","margin-top":"1px"},attrs:{caption:""}},[i("small",[e._v(e._s(e.selectedItem.protocol_id?e.protocols[e.selectedItem.protocol_id].name:e.selectedItem.configuration.protocol))])])],1),i("q-item-section",{staticClass:"text-white",attrs:{side:""}},[e.selectedItem.deleted?i("q-item-label",{staticClass:"q-pa-none text-right"},[i("small",{staticClass:"cheap-modifier"},[e._v("DELETED")])]):e._e(),i("q-item-label",{staticClass:"q-pa-none q-mt-none text-right"},[i("small",[e._v("#"+e._s(e.selectedItem.id))])])],1)],1):e._e()]}},{key:"option",fn:function(t){return[i("q-item",e._g(e._b({staticClass:"q-pa-xs",class:{"text-grey-8":t.opt.deleted},attrs:{clickable:""},on:{click:function(i){e.active=t.opt.id}}},"q-item",t.itemProps,!1),t.itemEvents),[i("q-item-section",[i("q-item-label",{staticClass:"ellipsis overflow-hidden q-pa-xs",attrs:{header:""}},[e._v(e._s(t.opt.name||"<noname>"))]),i("q-item-label",{staticClass:"q-pa-none q-mt-none",staticStyle:{"line-height":"0.75rem!important","margin-top":"1px"},attrs:{caption:""}},[i("small",[e._v(e._s(t.opt.protocol_id?e.protocols[t.opt.protocol_id].name:t.opt.configuration.protocol))])])],1),i("q-item-section",{attrs:{side:""}},[t.opt.deleted?i("q-item-label",{staticClass:"q-pa-xs text-right"},[i("small",{staticClass:"cheap-modifier cheap-modifier--item",class:{"cheap-modifier--mobile":e.$q.platform.is.mobile}},[e._v("DELETED")])]):e._e(),i("q-item-label",{staticClass:"q-pa-none q-mt-none text-right",class:{"q-pr-xs":e.$q.platform.is.mobile}},[i("small",[e._v("#"+e._s(t.opt.id))])])],1)],1)]}}])},[i("div",{staticClass:"bg-dark q-pa-xs select__filter",attrs:{slot:"before-options"},slot:"before-options"},[i("q-input",{attrs:{outlined:"","hide-bottom-space":"",rounded:"",dense:"",color:"white",dark:"",placeholder:"Filter",autofocus:""},on:{input:function(t){return e.$refs.itemSelect.filter(t)}},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}},[i("q-icon",{attrs:{slot:"prepend",name:"mdi-magnify",color:"white"},slot:"prepend"})],1)],1),e.needShowGetDeletedAction&&1===e.tokenType?i("div",{staticClass:"select__get-deleted",attrs:{slot:"after-options"},slot:"after-options"},[i("q-btn",{staticClass:"deleted-action",attrs:{icon:"mdi-download"},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.getDeletedHandler(t)}}},[e._v("see deleted")])],1):e._e()])],1)]),e.isInit&&e.active?i("logs",{ref:"logs",style:Object.assign({},{height:"calc(100vh - "+(e.isVisibleToolbar?"100px":"50px")+")",position:"relative"},e.panelsWidgetsStyle),attrs:{item:e.selectedItem,limit:e.limit,originPattern:"gw/streams/:id",isEnabled:!0,config:e.config.logs},on:{"view-log-message":e.viewWidgetsLogHandler,"action-select":function(t){return e.widgetsViewedLog=t.content}}}):e._e(),!e.items.length&&e.isItemsInit?i("div",{staticClass:"text-center text-grey-3 q-mt-lg"},[i("div",{staticStyle:{"font-size":"2rem"}},[e._v(e._s(e.isLoading?"Fetching data..":"Streams not found"))]),!e.isLoading&&e.needShowGetDeletedAction&&1===e.tokenType?i("q-btn",{staticClass:"q-mt-sm",attrs:{icon:"mdi-download",label:"see deleted"},on:{click:e.getDeletedHandler}}):e._e()],1):e._e(),i("widgets",{ref:"logsView",attrs:{active:"logsView"===e.activeWidgetWindow,config:e.logsWidgetsViewConfig,actions:e.widgetsHandleActions,controls:e.widgetWindowControls,"view-model":e.widgetsViewModel.logs},on:{"change-view-model":function(t){return e.widgetsChangeViewModelHandler(e.entityName,"logs",t)},active:function(t){return e.activateWidgetWindow("logsView")},close:e.closeLogsWidgetsHandler,next:e.nextWidgetLog,prev:e.prevWidgetLog},model:{value:e.isWidgetsLogsActive,callback:function(t){e.isWidgetsLogsActive=t},expression:"isWidgetsLogsActive"}})],1)},n=[],o=(i("8e6e"),i("8a81"),i("456d"),i("c5f6"),i("967e")),a=i.n(o),l=(i("96cf"),i("fa84")),r=i.n(l),c=(i("7f7f"),i("ac6a"),i("cadf"),i("06db"),i("8615"),i("c47a")),d=i.n(c),m=i("2ce0"),p=i("df1d"),u=i("4596"),f=i("5c16"),g=i("2f62"),h=i("286e"),v=i("a99a"),w=i("9b02"),b=i.n(w);function y(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}function q(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?y(Object(i),!0).forEach((function(t){d()(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):y(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var _={props:["limit","isLoading","isVisibleToolbar","isNeedSelect","config","settings"],mixins:[h["a"],p["a"],u["a"]],data:function(){return{entityName:"streams",filter:"",active:null,isInit:!1,isItemsInit:!1,isItemsInitStart:!1,needShowGetDeletedAction:!0}},computed:q(q({},Object(g["d"])({isEmptyMessages:function(e){return!!e[this.config.logs.vuexModuleName]&&!e[this.config.logs.vuexModuleName].messages.length},tokenType:function(e){return e.tokenInfo&&e.tokenInfo.access?e.tokenInfo.access.type:-1},itemsCollection:function(e){return e.streams||{}},protocols:function(e){return e.streamsProtocols}})),{},{items:function(){return Object.values(this.itemsCollection)},filteredItems:function(){var e=this.filter.toLowerCase(),t=this.filter?this.items.filter((function(t){return t&&"undefined"!==typeof t.name&&null!==t.name&&t.name.toLowerCase().indexOf(e)>=0||t&&"undefined"!==typeof t.id&&null!==t.id&&(t.id+"").indexOf(e)>=0})):this.items;return t.sort((function(e,t){if(!e.name)return-1;if(!t.name)return 1;var i=e.name.toLowerCase(),s=t.name.toLowerCase();return i<s?-1:1})),t},selectedItem:function(){var e=this.itemsCollection[this.active]||null;return e},actions:function(){return[{label:"Clear",icon:"mdi-playlist-remove",handler:this.clearHandler,condition:!this.isEmptyMessages}]},panelsWidgetsStyle:function(){var e={},t=this.widgetStyle.left&&(this.isWidgetsMessageActive||this.isWidgetsLogsActive||this.isWidgetsTrackActive),i=this.widgetStyle.right&&(this.isWidgetsMessageActive||this.isWidgetsLogsActive||this.isWidgetsTrackActive);return(t||i)&&(e.maxWidth="calc(100% - 300px)",i&&(e.left="300px")),e}}),methods:q(q({},Object(g["b"])(["getDeleted"])),{},{clearHandler:function(){var e=this;this.$q.dialog({title:"Confirm",message:"Do you really want to clear all data from the panes?",ok:!0,cancel:!0}).onOk((function(){e.$store.commit("".concat(e.config.logs.vuexModuleName,"/clearMessages"))})).onCancel((function(){}))},getDeletedHandler:function(){var e=this;return r()(a.a.mark((function t(){return a.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getDeleted(e.entityName);case 2:e.needShowGetDeletedAction=!1,e.$refs.itemSelect.reset();case 4:case"end":return t.stop()}}),t)})))()},clearActive:function(){this.active=null},init:function(){var e=this.entityName,t=b()(this.settings,"entities[".concat(e,"]"),void 0),i=this.$route.params&&this.$route.params.id?Number(this.$route.params.id):null;this.isInit=!0,i?this.itemsCollection[i]?this.active=i:this.active=null:t&&this.itemsCollection[t]&&(this.active=t),this.$emit("inited")},clearWidgetsState:function(){this.isWidgetsLogsActive=!1,this.activeWidgetWindow=void 0,this.widgetsViewedLog=null},onResizePage:function(e){this.$refs.logsView.resize(e)},beforeEnableWidgetByPane:function(e){var t=this;this.widgetStyle.left||this.isWidgetsLogsActive||this.widgetsViewModel.logs||this.$nextTick((function(){return t.widgetsChangeViewModelHandler(t.entityName,"logs",{type:"minimized",to:"left"})}))}}),watch:{$route:function(e){if(e.params&&e.params.id){var t=Number(e.params.id);this.itemsCollection[t]?this.active=Number(e.params.id):this.isInit&&(this.active=null)}else e.params&&!e.params.id&&(this.active=null)},active:function(e){var t=this.itemsCollection[e]||{};e?(this.$emit("update:settings",{type:"ENTITY_CHANGE",opt:{entity:this.entityName},value:t.id}),this.$router.push("/streams/".concat(e)).catch((function(e){return e}))):this.$router.push("/streams").catch((function(e){return e}))}},components:{logs:m["a"],EntitiesToolbar:v["a"],Widgets:f["a"]}},x=_,C=(i("177b"),i("2877")),I=Object(C["a"])(x,s,n,!1,null,null,null);t["default"]=I.exports},8367:function(e,t,i){}}]);