(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{2985:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",[i("q-resize-observer",{on:{resize:e.onResize}}),i("entities-toolbar",{attrs:{item:e.selectedItem,ratio:e.ratio,actions:e.actions},on:{"change:ratio":function(t){return e.ratio=t}}},[i("div",{staticClass:"flex",class:{"middle-modificator":!e.active},attrs:{slot:"selects"},slot:"selects"},[i("q-select",{ref:"itemSelect",staticClass:"items__select",class:{"items__select--no-selected":!e.active},attrs:{value:e.active,options:e.filteredItems,"hide-dropdown-icon":!e.isNeedSelect,filled:"",label:e.active?"Channel":"SELECT CHANNEL",dark:"","hide-bottom-space":"",dense:"",color:"white",disable:!e.isNeedSelect,"virtual-scroll-item-size":60,"virtual-scroll-slice-size":6,"virtual-scroll-sticky-size-start":48,"virtual-scroll-sticky-size-end":e.needShowGetDeletedAction&&1===e.tokenType?29:0,"popup-content-class":"items__popup","popup-content-style":{height:60*(e.filteredItems.length>6?6:e.filteredItems.length)+(e.needShowGetDeletedAction&&1===e.tokenType?77:48)+"px"}},on:{filter:e.filterItems},scopedSlots:e._u([{key:"no-option",fn:function(){return[i("div",[i("q-input",{staticClass:"q-ma-xs",attrs:{outlined:"","hide-bottom-space":"",rounded:"",dense:"",color:"white",dark:"",placeholder:"Filter",autofocus:""},on:{input:function(t){return e.$refs.itemSelect.filter(t)}},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}},[i("q-icon",{attrs:{slot:"prepend",name:"mdi-magnify",color:"white"},slot:"prepend"})],1),i("div",{staticClass:"text-center"},[e._v("No results")])],1)]},proxy:!0},{key:"selected-item",fn:function(t){return[e.selectedItem?i("q-item",e._g(e._b({staticClass:"q-pa-none",staticStyle:{"min-height":"20px","margin-top":"2px","max-width":"100%"}},"q-item",t.itemProps,!1),t.itemEvents),[i("q-item-section",[i("q-item-label",{staticClass:"ellipsis overflow-hidden q-pa-none text-white",staticStyle:{"max-width":"170px"},attrs:{header:""}},[e._v(e._s(e.selectedItem.name||"<noname>"))]),i("q-item-label",{staticClass:"q-pa-none q-mt-none text-white ellipsis",staticStyle:{"line-height":"0.75rem!important","margin-top":"1px"},attrs:{caption:""}},[i("small",[e._v(e._s(e.selectedItem.uri||"<no uri>"))])])],1),i("q-item-section",{staticClass:"text-white",attrs:{side:""}},[e.selectedItem.deleted?i("q-item-label",{staticClass:"q-pa-none text-right"},[i("small",{staticClass:"cheap-modifier"},[e._v("DELETED")])]):e._e(),i("q-item-label",{staticClass:"q-pa-none q-mt-none text-right"},[i("small",[e._v("#"+e._s(e.selectedItem.id))])])],1)],1):e._e()]}},e.filteredItems.length?{key:"option",fn:function(t){return[i("q-item",e._g(e._b({staticClass:"q-pa-xs",class:{"text-grey-8":t.opt.deleted},attrs:{clickable:""},on:{click:function(i){e.active=t.opt.id,e.$emit("view-data-hide")}}},"q-item",t.itemProps,!1),t.itemEvents),[i("q-item-section",[i("q-item-label",{staticClass:"ellipsis overflow-hidden q-pa-xs",attrs:{header:""}},[e._v(e._s(t.opt.name||"<noname>"))]),i("q-item-label",{staticClass:"q-pa-none q-mt-none",staticStyle:{"line-height":"0.75rem!important","margin-top":"1px"},attrs:{caption:""}},[i("small",[e._v(e._s(e.protocols&&e.protocols[t.opt.protocol_id]&&e.protocols[t.opt.protocol_id].name||"<no protocol>"))])]),i("q-item-label",{staticClass:"q-pa-none q-mt-none",staticStyle:{"line-height":"0.75rem!important","margin-top":"1px"},attrs:{caption:""}},[i("small",[e._v(e._s(t.opt.uri||"<no uri>"))])])],1),i("q-item-section",{attrs:{side:""}},[t.opt.deleted?i("q-item-label",{staticClass:"q-pa-xs text-right"},[i("small",{staticClass:"cheap-modifier cheap-modifier--item",class:{"cheap-modifier--mobile":e.$q.platform.is.mobile}},[e._v("DELETED")])]):e._e(),i("q-item-label",{staticClass:"q-pa-none q-mt-none text-right",class:{"q-pr-xs":e.$q.platform.is.mobile}},[i("small",[e._v("#"+e._s(t.opt.id))])])],1)],1)]}}:null],null,!0)},[i("div",{staticClass:"bg-dark q-pa-xs select__filter",attrs:{slot:"before-options"},slot:"before-options"},[i("q-input",{attrs:{outlined:"","hide-bottom-space":"",rounded:"",dense:"",color:"white",dark:"",placeholder:"Filter",autofocus:""},on:{input:function(t){return e.$refs.itemSelect.filter(t)}},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}},[i("q-icon",{attrs:{slot:"prepend",name:"mdi-magnify",color:"white"},slot:"prepend"})],1)],1),e.needShowGetDeletedAction&&1===e.tokenType?i("div",{staticClass:"select__get-deleted",attrs:{slot:"after-options"},slot:"after-options"},[i("q-btn",{staticClass:"deleted-action",attrs:{icon:"mdi-download"},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.getDeletedHandler(t)}}},[e._v("see deleted")])],1):e._e()]),e.$q.platform.is.desktop&&e.selectedItem&&!e.selectedItem.deleted?i("transition",{attrs:{appear:"","enter-active-class":"animated bounceInDown","leave-active-class":"animated bounceOutUp"}},[e.selectedItem.protocol_id===e.proxyProtocolId?i("q-btn",{staticClass:"on-right pull-right text-center rounded-borders q-px-xs q-py-none text-white",staticStyle:{width:"50px"},attrs:{title:"View hex payload",flat:"",dense:""},on:{click:e.hexViewHandler}},[i("q-icon",{attrs:{size:"1.5rem",color:"white",name:"mdi-matrix"}}),i("div",{staticStyle:{"font-size":".7rem","line-height":".7rem"}},[e._v("HEX")])],1):e.isTrafficViewerSupported?i("q-btn",{staticClass:"on-right pull-right text-center rounded-borders q-px-xs q-py-none text-white",staticStyle:{width:"50px"},attrs:{title:"Traffic hex payload",flat:"",dense:""},on:{click:e.trafficViewHandler}},[i("q-icon",{attrs:{size:"1.5rem",color:"white",name:"mdi-download-network-outline"}}),i("div",{staticStyle:{"font-size":".7rem","line-height":".7rem"}},[e._v("Traffic")])],1):e._e()],1):e._e()],1)]),e.isInit&&e.active?i("div",[+e.size[0]?i("logs",{ref:"logs",style:{height:"calc("+e.size[0]+"vh - "+(+e.size[1]?e.isVisibleToolbar?"50px":"25px":e.isVisibleToolbar?"100px":"50px")+")",position:"relative",maxWidth:e.mapMinimizedOptions.value&&e.mapMinimizedOptions.type&&"top"===e.mapMinimizedOptions.type?"66%":""},attrs:{item:e.selectedItem,limit:e.limit,isEnabled:!!+e.size[0],originPattern:"gw/channels/:id",config:e.logsConfig},on:{"view-log-message":e.viewLogMessagesHandler,"to-traffic":e.toTrafficHandler}}):e._e(),+e.size[1]?i("messages",{ref:"messages",style:{height:"calc("+e.size[1]+"vh - "+(+e.size[0]?e.isVisibleToolbar?"50px":"25px":e.isVisibleToolbar?"100px":"50px")+")",position:"relative"},attrs:{item:e.selectedItem,activeId:e.active,isEnabled:!!+e.size[1],limit:e.limit,config:e.config.messages},on:{"view-data":e.viewDataHandler,"on-map":e.onMapHandler}}):e._e()],1):e._e(),!e.items.length&&e.isItemsInit?i("div",{staticClass:"text-center text-grey-3 q-mt-lg"},[i("div",{staticStyle:{"font-size":"2rem"}},[e._v(e._s(e.isLoading?"Fetching data..":"Channels not found"))]),!e.isLoading&&e.needShowGetDeletedAction&&1===e.tokenType?i("q-btn",{staticClass:"q-mt-sm",attrs:{icon:"mdi-download",label:"see deleted"},on:{click:e.getDeletedHandler}}):e._e()],1):e._e(),e.$q.platform.is.desktop&&e.isVisibleMap?i("map-frame",{ref:"map",attrs:{device:e.mapDevice,siblingHeight:e.siblingHeight},on:{"map:close":e.mapCloseHandler,"map:minimize":e.mapMinimizeHandler}}):e._e()],1)},n=[],o=(i("8e6e"),i("8a81"),i("c5f6"),i("967e")),a=i.n(o),c=(i("96cf"),i("fa84")),r=i.n(c),l=(i("8615"),i("7f7f"),i("ac6a"),i("cadf"),i("06db"),i("456d"),i("c47a")),m=i.n(l),d=i("2ce0"),h=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("virtual-scroll-list",{ref:"scrollList",attrs:{cols:e.cols,actions:e.actions,items:e.messages,dateRange:e.dateRange,viewConfig:e.viewConfig,colsConfigurator:"toolbar",filter:e.filter,theme:e.theme,title:"Messages",loading:e.loadingFlag,autoscroll:e.realtimeEnabled,scrollOffset:"10%",item:e.listItem,itemprops:e.getItemsProps,"has-new-messages":e.hasNewMessages},on:{"change:filter":e.filterChangeHandler,"scroll:top":e.paginationPrevChangeHandler,"scroll:bottom":e.paginationNextChangeHandler,"change:date-range":e.dateRangeChangeHandler,"update:cols":e.updateColsHandler,"edit:cols":e.colsEditHandler,"action:to-bottom":e.actionToBottomHandler,"action:to-new-messages":e.actionToNewMessages,"action:to-new-messages-hide":e.actionToNewMessagesHide}},[i("empty-pane",{attrs:{slot:"empty",config:e.config.emptyState},slot:"empty"})],1)],1)},u=[],f=i("4db1"),p=i.n(f),g=(i("6762"),i("2fdb"),i("de45")),v=i("2b0e"),b=i("cdde"),x=i("ef95"),w=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{style:{height:e.itemHeight+"px",width:e.rowWidth+"px"}},[e.item["__connectionStatus"]?i("div",{style:{height:e.itemHeight+"px",width:e.rowWidth+"px",border:"solid 1px #000",color:"#000",fontWeight:"bold",backgroundColor:"offline"===e.item.__connectionStatus?"#ff0":"#0f0",backgroundImage:"url(./statics/police.png)",overflow:"hidden",opacity:".7"},attrs:{title:e.date.formatDate(1e3*e.item.timestamp,"DD/MM/YYYY HH:mm:ss")}},e._l(Array(10),(function(t){return i("span",{key:t,staticClass:"text-uppercase",staticStyle:{padding:"0 5px","margin-left":"150px"},style:{backgroundColor:"offline"===e.item.__connectionStatus?"#ff0":"#0f0"}},[e._v("\n    "+e._s(e.item["__connectionStatus"])+"\n  ")])})),0):i("div",{staticClass:"cursor-pointer",class:[e.item["x-flespi-status"]?"missed-items":"",e.selected?"bg-white-opasity":e.highlightLevel?"text-"+e.highlightType+"-"+e.highlightLevel:""],style:{height:e.itemHeight+"px",width:e.rowWidth+"px",color:e.selected?"#333":""},on:{click:function(t){return e.itemClickHandler(e.index,e.clearItem,t)}}},[e._l(e.cols,(function(t,s){var n,o,a;return["action"===t.__dest?i("span",{key:t.name+s,staticClass:"list__item item_actions",class:(n={},n["item_"+s]=!0,n)},e._l(e.renderedActions,(function(t,s){return i("q-icon",{key:s,staticClass:"cursor-pointer on-left",class:t.classes,attrs:{name:t.icon},nativeOn:{click:function(i){return i.stopPropagation(),e.clickHandler(e.index,t.type,e.clearItem)}}},[i("q-tooltip",[e._v(e._s(t.label))])],1)})),1):"etc"===t.__dest?i("span",{key:t.name+s,staticClass:"list__item item_etc",class:(o={},o["item_"+s]=!0,o)},[e._v(e._s(e.values.etc.value||"*Empty*"))]):i("span",{key:t.name+s,staticClass:"list__item",class:(a={},a["item_"+s]=!0,a),attrs:{title:e.values[t.name].value}},[e._v("\n        "+e._s(e.values[t.name].value)+"\n      ")])]})),e.etcVisible?i("span",{staticClass:"list__item item_etc"},[e._v("\n    "+e._s(e.values.etc.value||"*Empty*")+"\n  ")]):e._e()],2)])},y=[],$=(i("4917"),i("8993")),_=i.n($),N=(i("28a5"),i("bd4c")),H={props:["item","index","actions","cols","itemHeight","etcVisible","rowWidth","actionsVisible","selected"],data:function(){var e=0,t="";this.item.timestamp<this.item["server.timestamp"]-1800?(t="orange",e=10):this.item.timestamp<this.item["server.timestamp"]-600?(t="orange",e=7):this.item.timestamp<this.item["server.timestamp"]-120?(t="orange",e=4):this.item.timestamp-1>this.item["server.timestamp"]?(t="grey",e=6):this.item.timestamp-60>this.item["server.timestamp"]?(t="grey",e=8):this.item.timestamp-1800>this.item["server.timestamp"]&&(t="grey",e=10);var i=p()(this.actions);return this.item["position.latitude"]&&this.item["position.longitude"]&&i.push({icon:"mdi-map",label:"show on map",classes:"",type:"map"}),{highlightType:t,highlightLevel:e,date:N["a"],renderedActions:i}},computed:{values:function(){var e=this,t={};return t=this.cols.length?this.cols.reduce((function(e,t,i,s){return e[t.name]={value:null},i===s.length-1&&(e.etc={value:""}),e}),{}):{etc:{value:""}},Object.keys(this.item).forEach((function(i){if(-1!==i.indexOf("#")){var s=i.split("#"),n=s[0],o=s[1];if(t[n]){if(t[n].value){if("object"!==_()(t[n].value)){var a=t[n].value;t[n].value=m()({},o-1,a)}}else t[n].value={};t[n].value[o]=JSON.stringify(e.item[i])}else t.etc.value+="".concat(i,": ").concat(JSON.stringify(e.item[i]),"; ")}else if(t[i]){var c=e.item[i];-1!==i.indexOf("image.bin.")?c="<binary image>":-1!==i.indexOf("proxy.event")?c=0===c?"data received":1===c?"connected":"disconnect":-1!==i.indexOf("proxy.source")?c=0===c?"channel incoming connection":"target ".concat(c):i.match(/timestamp$/)&&(c=N["a"].formatDate(1e3*c,"DD/MM/YYYY HH:mm:ss")),t[i].value="string"===typeof c?c:JSON.stringify(c)}else{if(-1!==i.indexOf("x-flespi"))return!1;-1!==i.indexOf("image.bin.")?t.etc.value+="".concat(i,": <binary image>"):t.etc.value+="".concat(i,": ").concat(JSON.stringify(e.item[i]),"; ")}})),Object.keys(t).forEach((function(e){if("object"===_()(t[e].value)&&t[e].value)if(t[e].value instanceof Array){var i=t[e].value.reduce((function(e,t,i,s){return e+=t,i!==s.length-1&&(e+=", "),e}),"");t[e].value=i}else if(t[e].value instanceof Object){var s=Object.keys(t[e].value).reduce((function(i,s,n,o){return i+="".concat(s,": ").concat(t[e].value[s]),n!==o.length-1&&(i+=", "),i}),"");t[e].value=s}})),t},clearItem:function(){var e=this;return Object.keys(this.item).reduce((function(t,i){return-1!==i.indexOf("x-flespi")||(t[i]=e.item[i]),t}),{})}},methods:{clickHandler:function(e,t,i){this.$emit("action",{index:e,type:t,content:i})},itemClickHandler:function(e,t,i){this.$emit("item-click",{index:e,content:t,event:i})}}},k=H,C=(i("d9129"),i("2877")),M=Object(C["a"])(k,w,y,!1,null,null,null),q=M.exports,I=i("121a"),O=i("5a3a"),S=i.n(O),T={props:["item","activeId","limit","config"],data:function(){return{listItem:q,theme:this.config.theme,viewConfig:this.config.viewConfig,actions:this.config.actions,moduleName:this.config.vuexModuleName}},computed:{messages:{get:function(){return this.$store.state[this.moduleName].messages},set:function(e){this.$store.commit("".concat(this.moduleName,"/setMessages"),e)}},active:{get:function(){return this.$store.state[this.moduleName].active},set:function(e){var t=this;return r()(a.a.mark((function i(){var s;return a.a.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,t.$store.dispatch("".concat(t.moduleName,"/unsubscribePooling"));case 2:return t.$store.commit("".concat(t.moduleName,"/setActive"),e),s=t.$store.state.channels[e]||{},t.$set(t.config.viewConfig,"needShowEtc",s.protocol_name&&("http"===s.protocol_name||"mqtt"===s.protocol_name)),t.$store.commit("".concat(t.moduleName,"/clearMessages")),i.next=8,t.$store.dispatch("".concat(t.moduleName,"/getCols"),{actions:!0,etc:!1});case 8:return i.next=10,t.$store.dispatch("".concat(t.moduleName,"/initTime"));case 10:return i.next=12,t.getMessages();case 12:case"end":return i.stop()}}),i)})))()}},cols:{get:function(){return this.$store.state[this.moduleName].cols},set:function(e){this.$store.commit("".concat(this.moduleName,"/updateCols"),e)}},filter:{get:function(){return this.$store.state[this.moduleName].filter},set:function(e){e?this.$store.commit("".concat(this.moduleName,"/setFilter"),e):this.$store.commit("".concat(this.moduleName,"/setFilter"),"")}},from:{get:function(){return this.$store.state[this.moduleName].from},set:function(e){e?this.$store.commit("".concat(this.moduleName,"/setFrom"),e):this.$store.commit("".concat(this.moduleName,"/setFrom"),0)}},to:{get:function(){return this.$store.state[this.moduleName].to},set:function(e){e?this.$store.commit("".concat(this.moduleName,"/setTo"),e):this.$store.commit("".concat(this.moduleName,"/setTo"),0)}},dateRange:function(){return[this.$store.state[this.moduleName].from,this.$store.state[this.moduleName].to]},reverse:{get:function(){return this.$store.state[this.moduleName].reverse||!1},set:function(e){this.$store.commit("".concat(this.moduleName,"/setReverse"),e)}},realtimeEnabled:function(){return this.$store.state[this.moduleName].realtimeEnabled},hasNewMessages:{get:function(){return this.$store.state[this.moduleName].hasNewMessages},set:function(e){this.$store.state[this.moduleName].hasNewMessages=e}},currentLimit:{get:function(){return this.$store.state[this.moduleName].limit},set:function(e){e?this.$store.commit("".concat(this.moduleName,"/setLimit"),e):this.$store.commit("".concat(this.moduleName,"/setLimit"),1e3)}},selected:{get:function(){return this.$store.state[this.moduleName].selected},set:function(e){this.$store.commit("".concat(this.moduleName,"/setSelected"),e)}},loadingFlag:function(){var e=this.$store.state;return!(!e[this.config.vuexModuleName]||!e[this.config.vuexModuleName].isLoading)}},methods:{getItemsProps:function(e,t){var i=this.messages[e];t.key=i["x-flespi-message-key"],t.props.etcVisible=this.etcVisible,t.props.actionsVisible=this.actionsVisible,t.props.selected=this.selected.includes(e),t.on||(t.on={}),t.on.action=this.actionHandler,t.on["item-click"]=this.itemClickHandler},getMessages:function(){var e=this;return r()(a.a.mark((function t(){return a.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.to<=Date.now())){t.next=5;break}return t.next=3,e.$store.dispatch("".concat(e.moduleName,"/get"));case 3:t.next=8;break;case 5:return t.next=7,e.$store.dispatch("".concat(e.moduleName,"/getHistory"),1e3);case 7:e.scrollTo(e.messages.length-1);case 8:case"end":return t.stop()}}),t)})))()},scrollTo:function(e){var t=this;this.$nextTick((function(){return t.$refs.scrollList&&t.$refs.scrollList.scrollTo(e)}))},scrollToWithSavePadding:function(e){var t=this;this.$nextTick((function(){return t.$refs.scrollList&&t.$refs.scrollList.scrollToWithSavePadding(e)}))},resetParams:function(){this.$refs.scrollList.resetParams()},filterChangeHandler:function(e){this.filter!==e&&(this.filter=e,this.$store.commit("".concat(this.moduleName,"/clearMessages")),this.getMessages())},updateColsHandler:function(e){this.cols=e},dateRangeChangeHandler:function(e){var t=this,i=e[0],s=e[1];if(this.from===i&&this.to===s)return!1;this.from=i,this.to=s,this.$store.commit("".concat(this.moduleName,"/clearMessages")),this.$store.dispatch("".concat(this.moduleName,"/get")).then((function(){return t.scrollTo(0)}))},paginationPrevChangeHandler:function(){var e=this;this.$store.dispatch("".concat(this.moduleName,"/getPrevPage")).then((function(t){t&&"number"===typeof t&&e.scrollToWithSavePadding(t)}))},paginationNextChangeHandler:function(){var e=this;this.$store.dispatch("".concat(this.moduleName,"/getNextPage")).then((function(t){t&&"number"===typeof t&&e.scrollTo(e.messages.length-t)}))},actionHandler:function(e){var t=e.index,i=e.type,s=e.content;switch(i){case"view":this.viewMessagesHandler({index:t,content:s});break;case"copy":this.copyMessageHandler({index:t,content:s});break;case"map":this.onMapHandler({index:t,content:s});break}},actionToBottomHandler:function(){var e=this;this.realtimeEnabled?this.scrollTo(this.messages.length-1):this.$store.dispatch("".concat(this.moduleName,"/getHistory"),1e3).then((function(){e.scrollTo(e.messages.length-1)}))},actionToNewMessages:function(){var e=this;return r()(a.a.mark((function t(){var i,s,n;return a.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.hasNewMessages=null,i=Date.now(),s=new Date(i).setHours(0,0,0,0),n=s+86399999,e.from=s,e.to=n,e.$store.commit("".concat(e.moduleName,"/clearMessages")),e.getMessages();case 6:case"end":return t.stop()}}),t)})))()},actionToNewMessagesHide:function(){this.hasNewMessages=null},viewMessagesHandler:function(e){var t=e.index,i=e.content;this.selected=[t],this.$emit("view-data",i)},itemClickHandler:function(e){var t=this,i=e.index,s=(e.content,e.event);if(s.shiftKey)this.selected[0]?this.selected[0]>i?this.selected=S()(i,this.selected[0]+1):this.selected=S()(this.selected[0],i+1):this.selected=[i];else if(s.ctrlKey)if(this.selected.includes(i)){var n=this.selected;n.splice(this.selected.indexOf(i),1),this.selected=n}else this.selected=[].concat(p()(this.selected),[i]);else this.selected=[i];var o=this.messages.reduce((function(e,i,s){var n=t.selected.includes(s);if(n){var o=Object.keys(i).reduce((function(e,t){return-1!==t.indexOf("x-flespi")||(e[t]=i[t]),e}),{});e.push(o)}return e}),[]);this.$emit("view-data",o)},copyMessageHandler:function(e){var t=this,i=(e.index,e.content);Object(b["a"])(JSON.stringify(i)).then((function(e){t.$q.notify({type:"positive",icon:"content_copy",message:"Message copied",timeout:1e3})}),(function(e){t.$q.notify({type:"negative",icon:"content_copy",message:"Error coping messages",timeout:1e3})}))},onMapHandler:function(e){var t=e.index,i=e.content;this.$emit("on-map",{index:t,content:i})},unselect:function(){this.selected.length&&(this.selected=[])},colsEditHandler:function(){this.$eventBus.$emit("cols:edit","messages")}},watch:{activeId:function(e){this.active=e},limit:function(e){this.currentLimit=e}},created:function(){var e=this;this.$store.state[this.moduleName]?this.$store.commit("".concat(this.moduleName,"/clear")):this.$store.registerModule(this.moduleName,Object(g["d"])({Vue:v["default"],LocalStorage:this.$q.localStorage,name:{name:this.moduleName,lsNamespace:"flespi-toolbox-settings.cols"},errorHandler:function(t){e.$store.commit("reqFailed",t)},filterHandler:this.filterMessages})),this.currentLimit=this.limit,this.activeId&&(this.active=this.activeId),this.offlineHandler=v["default"].connector.socket.on("offline",(function(){e.$store.commit("".concat(e.moduleName,"/setOffline"),e.realtimeEnabled)})),this.connectHandler=v["default"].connector.socket.on("connect",(function(){e.$store.state[e.moduleName].offline&&(e.$store.commit("".concat(e.moduleName,"/setReconnected"),e.realtimeEnabled),e.realtimeEnabled&&e.$store.dispatch("".concat(e.moduleName,"/getMissedMessages")))}))},beforeDestroy:function(){this.$store.dispatch("".concat(this.moduleName,"/unsubscribePooling")),void 0!==this.offlineHandler&&v["default"].connector.socket.off("offline",this.offlineHandler),void 0!==this.connectHandler&&v["default"].connector.socket.off("connect",this.connectHandler),this.$store.commit("".concat(this.moduleName,"/clear"))},mixins:[x["a"]],components:{VirtualScrollList:g["c"],EmptyPane:I["a"]}},E=T,D=Object(C["a"])(E,h,u,!1,null,null,null),z=D.exports,P=i("2f62"),V=i("a99a"),L=i("9b02"),j=i.n(L),A=i("286e"),R=i("0860");function F(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}function W(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?F(Object(i),!0).forEach((function(t){m()(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):F(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var Y={props:["limit","isLoading","isVisibleToolbar","isNeedSelect","config","settings"],mixins:[A["a"]],data:function(){return{filter:"",active:null,ratio:50,siblingHeight:0,isVisibleMap:!1,mapDevice:null,mapMinimizedOptions:{},isInit:!1,isItemsInit:!1,needShowGetDeletedAction:!0}},computed:W(W({},Object(P["d"])({isEmptyMessages:function(e){var t=this.config.messages&&e[this.config.messages.vuexModuleName]&&!e[this.config.messages.vuexModuleName].messages.length&&100!==this.ratio,i=this.config.logs&&e[this.config.logs.vuexModuleName]&&e[this.config.logs.vuexModuleName].messages&&!e[this.config.logs.vuexModuleName].messages.length&&0!==this.ratio;return t&&i},tokenType:function(e){return e.tokenInfo&&e.tokenInfo.access?e.tokenInfo.access.type:-1},protocols:function(e){return e.protocols},itemsCollection:function(e){return e.channels||{}},proxyProtocolId:function(e){var t=e.protocols;return Object.keys(t).reduce((function(e,i){return"proxy"===t[i].name&&(e=parseInt(i)),e}),0)},isTrafficViewerSupported:function(){var e=this.protocols;if(!this.selectedItem)return!1;var t=this.selectedItem.protocol_id,i=e[t];return i.features.raw_packets}})),{},{logsConfig:function(){var e=this.config.logs;return this.isTrafficViewerSupported?e.itemSettings.needTrafficRoute=!0:e.itemSettings.needTrafficRoute=!1,e},items:function(){return Object.values(this.itemsCollection)},filteredItems:function(){var e=this.filter.toLowerCase(),t=this.filter?this.items.filter((function(t){return t&&"undefined"!==typeof t.name&&null!==t.name&&t.name.toLowerCase().indexOf(e)>=0||t&&"undefined"!==typeof t.id&&null!==t.id&&(t.id+"").indexOf(e)>=0})):this.items;return t.sort((function(e,t){if(!e.name)return-1;if(!t.name)return 1;var i=e.name.toLowerCase(),s=t.name.toLowerCase();return i<s?-1:1})),t},size:function(){return[this.ratio,100-this.ratio]},selectedItem:function(){var e=this.itemsCollection[this.active]||null;return e&&e.deleted&&this.deletedHandler(),e},actions:function(){return[{label:"Hex",icon:"mdi-matrix",handler:this.hexViewHandler,condition:this.selectedItem&&this.selectedItem.protocol_id===this.proxyProtocolId&&this.$q.platform.is.mobile},{label:"Traffic",icon:"mdi-download-network-outline",handler:this.trafficViewHandler,condition:this.isTrafficViewerSupported&&this.$q.platform.is.mobile},{label:"Clear",icon:"mdi-playlist-remove",handler:this.clearHandler,condition:!this.isEmptyMessages}]}}),methods:W(W({},Object(P["b"])(["getDeleted"])),{},{filterItems:function(e,t){var i=this;if(this.isItemsInit)t();else{var s="channels";this.itemsLoad(s,t,this.active,(function(){i.isItemsInit=!0}))}},viewDataHandler:function(e){var t=e[e.length-1];this.$emit("view-data",t),this.$refs.map&&this.isVisibleMap&&t["position.latitude"]&&t["position.longitude"]&&this.onMapHandler({content:t})},viewLogMessagesHandler:function(e){this.$emit("view-log-message",e)},hexViewHandler:function(){this.$router.push("/tools/hex/".concat(this.active)).catch((function(e){return e}))},trafficViewHandler:function(){this.$router.push("/tools/traffic/".concat(this.active)).catch((function(e){return e}))},toTrafficHandler:function(e){var t=e.content,i=t.ident,s=Math.floor(1e3*t.timestamp),n=s-1e4;i&&this.$router.push({path:"/tools/traffic/".concat(this.active,"/ident/").concat(i),query:{from:n,to:s}}).catch((function(e){return e}))},unselect:function(){this.$refs.messages.unselect()},clearHandler:function(){var e=this;this.$q.dialog({title:"Confirm",message:"Do you really want to clear all data from the panes?",ok:!0,cancel:!0}).onOk((function(){e.$store.commit("".concat(e.config.messages.vuexModuleName,"/clearMessages")),e.$store.commit("".concat(e.config.logs.vuexModuleName,"/clearMessages"))})).onCancel((function(){}))},selectReset:function(){this.$refs.itemSelect&&this.$refs.itemSelect.reset()},getDeletedHandler:function(){var e=this;return r()(a.a.mark((function t(){return a.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getDeleted("channels");case 2:e.needShowGetDeletedAction=!1,e.selectReset();case 4:case"end":return t.stop()}}),t)})))()},clearActive:function(){this.active=null},deletedHandler:function(){this.ratio=100},onMapHandler:function(e){var t=this,i=(e.index,e.content);this.mapDevice={ident:i.ident||"*Empty*"};var s=[i["position.latitude"],i["position.longitude"]];if(!this.isVisibleMap)return this.openMapHandler(),this.$nextTick((function(){t.$refs.map.clear().addMarkers([s]).send()})),!1;this.$refs.map&&this.isVisibleMap&&this.$refs.map.clear().addMarkers([s]).send()},init:function(){var e="channels",t=j()(this.settings,"entities[".concat(e,"]"),void 0),i=this.$route.params&&this.$route.params.id?Number(this.$route.params.id):null;this.isInit=!0,i?this.itemsCollection[i]?this.active=i:this.active=null:t&&this.itemsCollection[t]&&(this.active=t),this.selectedItem&&this.selectedItem.deleted&&this.deletedHandler(),this.$emit("inited")},mapMinimizeHandler:function(e){this.mapMinimizedOptions=e,"bottom"===e.type?this.siblingHeight=this.size[1]:"top"===e.type?this.siblingHeight=this.size[0]:this.siblingHeight=0},mapCloseHandler:function(){this.isVisibleMap=!1,this.mapDevice=null},openMapHandler:function(){this.isVisibleMap=!this.isVisibleMap},onResize:function(){this.$refs.map&&this.$refs.map.onWindowResize({width:window.innerWidth,height:window.innerHeight})}}),watch:{ratio:function(e){var t=this;this.$nextTick((function(){+t.size[0]&&t.active&&(t.$refs.logs.resetParams(),t.$emit("view-data-hide")),+t.size[1]&&t.active&&t.$refs.messages.resetParams()}))},$route:function(e){if(e.params&&e.params.id){var t=Number(e.params.id);this.itemsCollection[t]?this.active=Number(e.params.id):this.isInit&&(this.active=null)}else e.params&&!e.params.id&&(this.active=null)},active:function(e){var t=this.itemsCollection[e]||{};e?(this.$emit("update:settings",{type:"ENTITY_CHANGE",opt:{entity:"channels"},value:t.id}),this.$router.push("/channels/".concat(e)).catch((function(e){return e}))):this.$router.push("/channels").catch((function(e){return e})),t.deleted?this.deletedHandler():this.ratio=t.deleted?100:50}},components:{logs:d["a"],messages:z,EntitiesToolbar:V["a"],MapFrame:R["a"]}},G=Y,J=(i("ac4a"),Object(C["a"])(G,s,n,!1,null,null,null));t["default"]=J.exports},ac4a:function(e,t,i){"use strict";var s=i("c065"),n=i.n(s);n.a},c065:function(e,t,i){},d9129:function(e,t,i){"use strict";var s=i("e1de"),n=i.n(s);n.a},e1de:function(e,t,i){}}]);