(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["50db33bc"],{"4d2f":function(e,t,i){},"8e5e":function(e,t,i){"use strict";var s=i("4d2f"),n=i.n(s);n.a},c5ce:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",[i("q-toolbar",{staticClass:"justify-between q-py-none",attrs:{color:"dark"}},[i("div",{staticStyle:{"max-width":"55%"}},[i("q-item",{staticClass:"no-padding q-mr-sm",staticStyle:{display:"inline-flex","max-width":"calc(50% - 8px)"},style:{cursor:e.isNeedSelect?"":"default!important"}},[e.$q.platform.is.desktop?i("q-item-side",{staticStyle:{"min-width":"25px"}},[i("q-item-tile",[i("q-icon",{attrs:{color:"white",name:"mdi-calculator-variant",size:"25px"}})],1)],1):e._e(),i("q-item-main",[e.active?i("q-item-tile",{staticClass:"ellipsis overflow-hidden",style:{maxWidth:"140px"},attrs:{label:""}},[e._v(e._s(e.selectedItem.name||"<noname>"))]):i("q-item-tile",{staticClass:"ellipsis overflow-hidden",style:{maxWidth:"140px"},attrs:{label:""}},[e._v("Select calc")])],1),i("q-item-side",{staticClass:"text-right"},[e.selectedItem.id?i("q-item-tile",{staticClass:"text-center",staticStyle:{display:"inline-block"},attrs:{stamp:"",color:"white"}},[e.selectedItem.deleted?i("div",{staticClass:"cheap-modifier"},[i("small",[e._v("DELETED")])]):e._e(),e._v("#"+e._s(e.selectedItem.id.toString()))]):e._e(),e.isNeedSelect?i("q-item-tile",{staticStyle:{display:"inline-block"},attrs:{stamp:"",color:"white",size:"2rem",icon:"mdi-menu-down"}}):e._e()],1),e.isNeedSelect?i("q-popover",{ref:"popoverActive",attrs:{fit:""}},[i("q-input",{staticClass:"q-ma-xs q-pa-xs items__filter",attrs:{color:"dark",clearable:"",placeholder:"Filter","hide-underline":""},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}}),i("q-list",{staticClass:"scroll",attrs:{link:"",separator:""}},[e.filteredItems.length?i("VirtualList",{attrs:{size:76,remain:e.filteredItems.length>6?6:e.filteredItems.length}},[i("q-item",{staticClass:"cursor-pointer",attrs:{highlight:""},nativeOn:{click:function(t){e.active=null,e.$refs.popoverActive.hide(),e.$emit("view-data-hide")}}},[i("q-item-main",[i("q-item-tile",{staticClass:"ellipsis overflow-hidden",attrs:{label:""}},[e._v("Any")])],1)],1),e._l(e.filteredItems,function(t,s){return i("q-item",{key:s,staticClass:"cursor-pointer",class:{"text-grey-8":t.deleted},attrs:{highlight:""},nativeOn:{click:function(i){e.active=t.id,e.$refs.popoverActive.hide(),e.$emit("view-data-hide")}}},[i("q-item-main",[i("q-item-tile",{staticClass:"ellipsis overflow-hidden",attrs:{label:""}},[e._v(e._s(t.name||"<noname>"))])],1),i("q-item-side",{staticClass:"text-center"},[t.deleted?i("q-item-tile",{staticClass:"cheap-modifier"},[i("small",[e._v("DELETED")])]):e._e(),t.id?i("q-item-tile",[i("small",[e._v("#"+e._s(t.id.toString()))])]):e._e()],1)],1)})],2):i("div",{staticClass:"text-center q-ma-md"},[e._v("\n              No calcs\n            ")])],1)],1):e._e()],1),i("q-item",{staticClass:"no-padding",staticStyle:{display:"inline-flex","max-width":"50%"},style:{cursor:e.isNeedSelect?"":"default!important"}},[e.$q.platform.is.desktop?i("q-item-side",{staticStyle:{"min-width":"25px"}},[i("q-item-tile",[i("q-icon",{attrs:{color:"white",name:"mdi-developer-board",size:"25px"}})],1)],1):e._e(),i("q-item-main",[e.activeDeviceId?[i("q-item-tile",{staticClass:"ellipsis overflow-hidden",style:{maxWidth:"140px"},attrs:{label:""}},[e._v(e._s(e.selectedDevice.name||"#"+e.selectedDevice.id))]),e.selectedDevice.ident?i("q-item-tile",{staticStyle:{"font-size":"0.8rem"},attrs:{sublabel:""}},[e._v(e._s(e.selectedDevice.ident))]):e._e()]:i("q-item-tile",{staticClass:"ellipsis overflow-hidden",style:{maxWidth:"140px"},attrs:{label:""}},[e._v("Select device")])],2),i("q-item-side",{staticClass:"text-right"},[i("q-item-tile",{staticClass:"text-center",staticStyle:{display:"inline-block"},attrs:{stamp:"",color:"white"}},[e.selectedDevice.deleted?i("div",{staticClass:"cheap-modifier"},[i("small",[e._v("DELETED")])]):e._e(),e._v("#"+e._s(e.selectedDevice.id))]),e.isNeedSelect?i("q-item-tile",{staticStyle:{display:"inline-block"},attrs:{stamp:"",color:"white",size:"2rem",icon:"mdi-menu-down"}}):e._e()],1),e.isNeedSelect?i("q-popover",{ref:"popoverActive",attrs:{fit:""}},[i("q-input",{staticClass:"q-ma-xs q-pa-xs items__filter",attrs:{color:"dark",clearable:"",placeholder:"Filter","hide-underline":""},model:{value:e.deviceFilter,callback:function(t){e.deviceFilter=t},expression:"deviceFilter"}}),i("q-list",{staticClass:"scroll",attrs:{link:"",separator:""}},[e.filteredDevices.length?i("VirtualList",{attrs:{size:56,remain:e.filteredDevices.length>6?6:e.filteredDevices.length}},[i("q-item",{staticClass:"cursor-pointer",attrs:{highlight:""},nativeOn:{click:function(t){e.activeDeviceId=null,e.$refs.popoverActive.hide(),e.$emit("view-data-hide")}}},[i("q-item-main",[i("q-item-tile",{staticClass:"ellipsis overflow-hidden",style:{maxWidth:e.$q.platform.is.mobile?"":"140px"},attrs:{label:""}},[e._v("Any")])],1)],1),e._l(e.filteredDevices,function(t,s){return i("q-item",{key:s,staticClass:"cursor-pointer",class:{"text-grey-8":t.deleted},attrs:{highlight:""},nativeOn:{click:function(i){e.activeDeviceId=t.id,e.$refs.popoverActive.hide(),e.$emit("view-data-hide")}}},[i("q-item-main",[i("q-item-tile",{staticClass:"ellipsis overflow-hidden",style:{maxWidth:e.$q.platform.is.mobile?"":"140px"},attrs:{label:""}},[e._v(e._s(t.name||"#"+t.id))]),i("q-item-tile",{attrs:{sublabel:""}},[i("small",[e._v(e._s(t.ident||"<no ident>"))])])],1),i("q-item-side",{staticClass:"text-center"},[t.deleted?i("q-item-tile",{staticClass:"cheap-modifier"},[i("small",[e._v("DELETED")])]):e._e(),i("q-item-tile",[i("small",[e._v("#"+e._s(t.id))])])],1)],1)})],2):i("div",{staticClass:"text-center q-ma-md"},[e._v("\n              No devices\n            ")])],1),e.needShowGetDeletedAction&&1===e.tokenType?i("q-btn",{staticClass:"deleted-action",attrs:{icon:"mdi-download"},on:{click:e.getDeletedHandler}},[e._v("see deleted")]):e._e()],1):e._e()],1)],1),i("div",[e.selectedItem.deleted?e._e():i("q-btn",{staticClass:"on-left",attrs:{title:"Mode (Real-time/History)",size:"sm",flat:"",color:"white",icon:e.modeModel?"playlist_play":"history",rounded:e.$q.platform.is.mobile},on:{click:function(t){e.modeModel=!e.modeModel}}},[e._v("\n        "+e._s(e.$q.platform.is.mobile?"":e.modeModel?"Real-time":"History")+"\n        "),e.newMessagesCount?i("q-chip",{staticClass:"cursor-pointer q-ml-sm",attrs:{small:"",square:"",color:"red"}},[e._v(e._s(e.newMessagesCount))]):e._e()],1),e.selectedItem.deleted?e._e():i("q-btn-toggle",{staticClass:"q-ml-sm gt-xs",attrs:{dense:"",color:"grey-8","toggle-color":"white","toggle-text-color":"dark",size:"sm",options:[{label:"logs",value:100},{label:"both",value:50},{label:"intervals",value:0}]},model:{value:e.ratio,callback:function(t){e.ratio=t},expression:"ratio"}}),i("q-btn",{staticClass:"lt-sm",attrs:{dense:"",size:"sm"}},[e._v("\n        "+e._s(50===e.ratio?"both":0===e.ratio?"messages":"logs")+"\n        "),i("q-popover",{staticStyle:{"background-color":"transparent"}},[e.selectedItem.deleted?e._e():i("q-btn-toggle",{directives:[{name:"close-overlay",rawName:"v-close-overlay"}],attrs:{dense:"",color:"grey-8","toggle-color":"white","toggle-text-color":"dark",size:"sm",options:[{label:"logs",value:100},{label:"both",value:50},{label:"intervals",value:0}]},model:{value:e.ratio,callback:function(t){e.ratio=t},expression:"ratio"}})],1)],1)],1),i("div",[e.modeModel&&!e.isEmptyMessages?i("q-icon",{staticClass:"on-left cursor-pointer pull-right",attrs:{title:"Clear all panes",size:"1.5rem",color:"white",name:"mdi-playlist-remove"},nativeOn:{click:function(t){return e.clearHandler(t)}}}):e._e()],1)]),+e.size[0]&&e.active?i("logs",{ref:"logs",style:{minHeight:"calc("+e.size[0]+"vh - "+(+e.size[1]?e.isVisibleToolbar?"50px":"25px":e.isVisibleToolbar?"100px":"50px")+")",position:"relative"},attrs:{mode:e.mode,item:e.selectedItem,limit:e.limit,isEnabled:!!+e.size[0],originPattern:"gw/calcs/:id",config:e.config.logs},on:{"view-log-message":e.viewLogMessagesHandler}}):+e.size[0]&&!e.active?i("div",{staticClass:"text-grey text-center q-mt-lg",staticStyle:{"font-size":"2.5rem"},style:{minHeight:"calc("+e.size[0]+"vh - "+(+e.size[1]?e.isVisibleToolbar?"50px":"25px":e.isVisibleToolbar?"100px":"50px")+")",position:"relative"}},[e._v("\n    Select at least calc\n  ")]):e._e(),+e.size[1]?i("messages",{ref:"messages",style:{minHeight:"calc("+e.size[1]+"vh - "+(+e.size[0]?e.isVisibleToolbar?"50px":"25px":e.isVisibleToolbar?"100px":"50px")+")",position:"relative"},attrs:{mode:e.mode,activeId:e.active,isEnabled:!!+e.size[1],limit:e.limit,config:e.config.messages},on:{"view-data":e.viewDataHandler}}):e._e()],1)},n=[],a=(i("55dd"),i("7f7f"),i("c5f6"),i("6762"),i("2fdb"),i("3156")),o=i.n(a),r=i("2ce0"),l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("virtual-scroll-list",{ref:"scrollList",attrs:{cols:e.cols,actions:e.actions,items:e.messages,dateRange:[e.begin,e.end],viewConfig:e.viewConfig,colsConfigurator:"toolbar",i18n:e.i18n,filter:e.filter,theme:e.theme,title:"Intervals"},on:{"change:filter":e.filterChangeHandler,"change:date-range":e.dateRangeChangeHandler,"update:cols":e.updateColsHandler},scopedSlots:e._u([{key:"items",fn:function(t){var s=t.item,n=t.index,a=t.actions,o=t.cols,r=t.etcVisible,l=t.actionsVisible,c=t.itemHeight,m=t.rowWidth;return i("messages-list-item",{key:""+JSON.stringify(s)+n,attrs:{item:s,index:n,actions:a,cols:o,itemHeight:c,rowWidth:m,etcVisible:r,actionsVisible:l,selected:e.selected.includes(n)},on:{action:e.actionHandler,"item-click":e.viewMessagesHandler}})}}])})],1)},c=[],m=(i("96cf"),i("c973")),d=i.n(m),u=i("de45"),f=(i("ac6a"),function(e){var t=e.Vue,i=(e.LocalStorage,e.errorHandler);function s(e){var t={};return e.limit&&(t.count=e.limit),e.filter&&e.sysFilter?1===e.mode?t.filter="".concat(e.sysFilter):t.filter="".concat(e.sysFilter,",").concat(e.filter):e.sysFilter&&!e.filter?t.filter="".concat(e.sysFilter):!e.sysFilter&&e.filter&&0===e.mode&&(t.filter="".concat(e.filter)),!e.begin||e.reverse&&1!==e.mode||e.reverse||(t.begin=Math.floor(e.begin/1e3)),e.end&&(1===e.mode&&(e.end=Date.now()),t.end=Math.floor(e.end/1e3)),e.reverse&&(t.reverse=e.reverse),t}function n(e){e.errors&&e.errors.forEach(function(e){var t=new Error(e.reason);i&&i(t)})}function a(e){var t=e||Date.now(),i=new Date(t).setHours(0,0,0,0),s=i+864e5;return{begin:i,end:s}}function o(e){return r.apply(this,arguments)}function r(){return r=d()(regeneratorRuntime.mark(function e(s){var o,r,l,c,m,d,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(o=s.state,r=s.commit,l=s.rootState,!l.token||!o.active){e.next=21;break}return e.prev=2,t.set(o,"isLoading",!0),c={reverse:!0,count:1,fields:"timestamp"},e.next=7,t.connector.gw.getCalcsDevicesIntervals(o.active,o.activeDevice,"all",{data:JSON.stringify(c)});case 7:m=e.sent,d=m.data,n(d),u=Date.now(),d.result.length&&(u=Math.round(1e3*d.result[0].timestamp)),r("setDate",a(u).begin),t.set(o,"isLoading",!1),e.next=21;break;case 16:e.prev=16,e.t0=e["catch"](2),i&&i(e.t0),t.set(o,"isLoading",!1);case 21:case"end":return e.stop()}},e,null,[[2,16]])})),r.apply(this,arguments)}function l(e){return c.apply(this,arguments)}function c(){return c=d()(regeneratorRuntime.mark(function e(a){var o,r,l,c,m,d;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(o=a.state,r=a.commit,l=a.rootState,r("reqStart"),!l.token||!o.active){e.next=22;break}return e.prev=3,t.set(o,"isLoading",!0),c=JSON.parse(JSON.stringify(o.mode)),e.next=8,t.connector.gw.getCalcsDevicesIntervals(o.active,o.activeDevice,"all",{data:JSON.stringify(s(o))});case 8:if(m=e.sent,c===o.mode){e.next=11;break}return e.abrupt("return",!1);case 11:d=m.data,n(d),r("setMessages",d.result),t.set(o,"isLoading",!1),e.next=22;break;case 17:e.prev=17,e.t0=e["catch"](3),i&&i(e.t0),t.set(o,"isLoading",!1);case 22:case"end":return e.stop()}},e,null,[[3,17]])})),c.apply(this,arguments)}function m(e){return u.apply(this,arguments)}function u(){return u=d()(regeneratorRuntime.mark(function e(i){var s,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return s=i.state,n=i.commit,i.rootState,console.log(t.connector),e.next=4,t.connector.subscribeIntervals(s.active,function(e){1===s.mode?n("setMessages",[JSON.parse(e)]):n("setNewMessagesCount",s.newMessagesCount+1)},{rh:2});case 4:case"end":return e.stop()}},e)})),u.apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return h=d()(regeneratorRuntime.mark(function e(i){var s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return s=i.state,e.next=3,t.connector.unsubscribeIntervals(s.active);case 3:case"end":return e.stop()}},e)})),h.apply(this,arguments)}return{get:l,pollingGet:m,initTime:o,unsubscribePooling:f}}),h=i("448a"),v=i.n(h),g=function(e){var t=e.Vue,i=e.LocalStorage,s=e.filterHandler,n=e.newMessagesInterseptor;function a(e){var t=e||Date.now(),i=new Date(t).setHours(0,0,0,0),s=i+864e5;return{begin:i,end:s}}function o(e,i){if(i&&i.length){e.reverse&&(i.reverse(),1===e.mode&&(i[i.length-1].delimiter=!0)),1===e.mode&&(t.set(e,"begin",Math.floor(1e3*(i[i.length-1].timestamp+1))),e.filter&&s&&(i=s(e.filter,i)));var a=e.messages;if(e.sortBy&&1===e.mode)if(i.length>1)a=a.concat(i);else{var o=i[0],r=e.sortBy,l=e.messages.length-1,c=null,m=!0;if(l>0)for(var d=l;0!==d||m;d--)a[d][r]>o[r]?(c=d,0===d&&(m=!1)):m=!1;c?a.splice(c,0,o):a.push(o)}else a=a.concat(i);if(n&&n(i),e.limit&&1===e.mode&&a.length>=e.limit+.1*e.limit){var u=a.length-1-(e.limit-1);a=a.slice(u),t.set(e,"selected",e.selected.map(function(e){return e-u}))}t.set(e,"messages",a)}else 1===e.mode&&t.set(e,"begin",e.end+1e3),t.set(e,"messages",[])}function r(e){t.set(e,"messages",[]),n&&n([]),O(e)}function l(e,i){t.set(e,"limit",i)}function c(e,i){e.filter!==i&&(1===e.mode&&(e.filter&&e.messages.push({"x-flespi-filter-prev":e.filter}),i&&e.messages.push({"x-flespi-filter-next":i})),t.set(e,"filter",i))}function m(e,i){switch(i){case 0:var s=e.begin?a(e.begin):a();e.begin=s.begin,e.end=s.end,r(e);break;case 1:var n=Date.now()-4e3;e.begin=n-1e3,e.end=n,e.newMessagesCount=0;break}t.set(e,"mode",i)}function u(e,i){t.set(e,"begin",i)}function f(e,i){t.set(e,"end",i)}function h(){0}function g(e,i){e.newMessagesCount=0,t.set(e,"active",i)}function p(e,i){t.set(e,"reverse",i)}function b(e,t){var i=a(t);e.begin=i.begin,e.end=i.end}function x(e){var t=a(e.begin+864e5);e.begin=t.begin,e.end=t.end}function y(e){var t=a(e.begin-864e5);e.begin=t.begin,e.end=t.end}function w(e,t){e.reverse=!0,e.sysFilter+="timestamp>=".concat(a(e.begin).begin/1e3),t&&(e.begin=a(t).begin,e.end=t-1e3)}function _(e,t){e.sysFilter+="timestamp<=".concat(e.end/1e3),t&&(e.end=a(t).end,e.begin=t+1e3)}function $(e){var t=a(e.begin);u(e,e.begin||t.begin),f(e,t.end),e.reverse&&p(e,!1),e.sysFilter=""}function C(e){return N.apply(this,arguments)}function N(){return N=d()(regeneratorRuntime.mark(function e(i){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r(i),i.filter="",i.mode=null,i.begin=0,i.end=0,i.limit=1e3,i.reverse=!1,e.next=9,t.connector.unsubscribeIntervals(i.active);case 9:case"end":return e.stop()}},e)})),N.apply(this,arguments)}function q(e,s){var n=i.get.item(e.name);n||(n={}),n[e.settings.id]=s,i.set(e.name,n),t.set(e,"cols",s)}function k(e,i){t.set(e,"settings",i)}var M=q;function S(e,i){t.set(e,"newMessagesCount",i)}function D(e,t){t&&o(e,[{__connectionStatus:"offline",timestamp:Date.now()/1e3}]),e.offline=!0}function H(e,t){t&&o(e,[{__connectionStatus:"reconnected",timestamp:Date.now()/1e3}]),e.offline=!1}function I(e,t){var i,s=t.data,n=t.index;s.forEach(function(e){e.__status="missed"}),(i=e.messages).splice.apply(i,[n+1,0].concat(v()(s)))}function L(e,i){t.set(e,"selected",i)}function O(e){t.set(e,"selected",[])}function E(e,i){t.set(e,"sortBy",i)}function z(e){t.set(e,"sortBy",null)}return{setOffline:D,setReconnected:H,setMissingMessages:I,setMessages:o,clearMessages:r,setLimit:l,setFilter:c,setMode:m,setBegin:u,setEnd:f,reqStart:h,setReverse:p,dateNext:x,datePrev:y,paginationPrev:w,paginationNext:_,setDate:b,postaction:$,clear:C,setActive:g,setCols:q,updateCols:M,setNewMessagesCount:S,setSelected:L,clearSelected:O,setSortBy:E,clearSortBy:z,setSettings:k}},p=function(e){var t=e.Vue,i=e.LocalStorage,s=e.name,n=e.errorHandler,a=e.filterHandler,o=e.newMessagesInterseptor,r=f({Vue:t,LocalStorage:i,errorHandler:n}),l=g({Vue:t,LocalStorage:i,filterHandler:a,newMessagesInterseptor:o}),c={name:s,isLoading:!1,active:0,activeDevice:0,messages:[],filter:"",sysFilter:"",settings:{},mode:null,begin:0,end:0,limit:1e3,reverse:!1,cols:[],newMessagesCount:0,offline:!1,selected:[],sortBy:null};return{namespaced:!0,state:c,actions:r,mutations:l}},b=i("2b0e"),x=i("f490"),y=i("ef95"),w=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{style:{height:e.itemHeight+"px",width:e.rowWidth+"px"}},[e.item["__connectionStatus"]||e.item["x-flespi-filter-prev"]||e.item["x-flespi-filter-next"]?e.item["x-flespi-filter-prev"]||e.item["x-flespi-filter-next"]?i("div",{style:{height:e.itemHeight+"px",width:e.rowWidth+"px",color:"#000",fontWeight:"bold",backgroundColor:e.item["x-flespi-filter-prev"]?"#819002":"#ccb300",overflow:"hidden"}},[i("span",{staticClass:"uppercase text-white",staticStyle:{padding:"0 5px"}},[e._v(e._s(e.item["x-flespi-filter-next"]?'Next results will be filtered by: "'+e.item["x-flespi-filter-next"]+'"':'Filter removed: "'+e.item["x-flespi-filter-prev"]+'"'))])]):i("div",{style:{height:e.itemHeight+"px",width:e.rowWidth+"px",border:"solid 1px #000",color:"#000",fontWeight:"bold",backgroundColor:"offline"===e.item.__connectionStatus?"#ff0":"#0f0",backgroundImage:"url(./statics/police.png)",overflow:"hidden",opacity:".7"},attrs:{title:e.date.formatDate(1e3*e.item.timestamp,"DD/MM/YYYY HH:mm:ss")}},e._l(Array(10),function(t){return i("span",{key:t,staticClass:"uppercase",staticStyle:{padding:"0 5px","margin-left":"150px"},style:{backgroundColor:"offline"===e.item.__connectionStatus?"#ff0":"#0f0"}},[e._v("\n    "+e._s(e.item["__connectionStatus"])+"\n  ")])})):i("div",{staticClass:"cursor-pointer",class:[e.item.__status?"missed-items":""],style:{height:e.itemHeight+"px",width:e.rowWidth+"px",backgroundColor:e.selected?"rgba(255,255,255,0.7)":"",color:e.selected?"#333":"",borderBottom:e.item.delimiter?"solid 1px #f40":""},on:{click:function(t){e.itemClickHandler(e.index,e.clearItem)}}},[e.actionsVisible?i("span",{staticClass:"list__item item_actions"},e._l(e.actions,function(t,s){return i("q-icon",{key:s,staticClass:"cursor-pointer on-left",class:t.classes,attrs:{name:t.icon},nativeOn:{click:function(i){i.stopPropagation(),e.clickHandler(e.index,t.type,e.item)}}},[i("q-tooltip",[e._v(e._s(t.label))])],1)})):e._e(),e._l(e.cols,function(t,s){var n;return i("span",{key:t.name+s,staticClass:"list__item",class:(n={},n["item_"+s]=!0,n),style:{color:e.item["x-flespi-filter-fields"]&&e.item["x-flespi-filter-fields"].includes(t.name)?"#4caf50":""},attrs:{title:e.values[t.name].value}},[e._v("\n    "+e._s(e.values[t.name].value)+"\n  ")])}),e.etcVisible?i("span",{staticClass:"list__item item_etc"},[e._v("\n    "+e._s(e.values.etc.value||"*Empty*")+"\n  ")]):e._e()],2)])},_=[],$=(i("4917"),i("9523")),C=i.n($),N=i("7037"),q=i.n(N),k=(i("28a5"),i("cadf"),i("456d"),{props:["item","index","actions","cols","itemHeight","etcVisible","rowWidth","actionsVisible","selected"],data:function(){return{date:x["d"]}},computed:{values:function(){var e=this,t={};return t=this.cols.length?this.cols.reduce(function(e,t,i,s){return e[t.name]={value:null},i===s.length-1&&(e.etc={value:""}),e},{}):{etc:{value:""}},Object.keys(this.item).forEach(function(i){if(-1!==i.indexOf("#")){var s=i.split("#"),n=s[0],a=s[1];if(t[n]){if(t[n].value){if("object"!==q()(t[n].value)){var o=t[n].value;t[n].value=C()({},a-1,o)}}else t[n].value={};t[n].value[a]=JSON.stringify(e.item[i])}else t.etc.value+="".concat(i,": ").concat(JSON.stringify(e.item[i]),"; ")}else if(t[i]){var r=e.item[i];i.match(/timestamp$/)&&(r=x["d"].formatDate(1e3*r,"DD/MM/YYYY HH:mm:ss")),-1!==i.indexOf("image.bin.")&&(r="<binary image>"),t[i].value="string"===typeof r?r:JSON.stringify(r)}else{if("delimiter"===i||"__status"===i||"x-flespi-filter-fields"===i||"x-flespi-filter-next"===i||"x-flespi-filter-prev"===i)return!1;-1!==i.indexOf("image.bin.")?t.etc.value+="".concat(i,": <binary image>"):t.etc.value+="".concat(i,": ").concat(JSON.stringify(e.item[i]),"; ")}}),Object.keys(t).forEach(function(e){if("object"===q()(t[e].value)&&t[e].value)if(t[e].value instanceof Array){var i=t[e].value.reduce(function(e,t,i,s){return e+=t,i!==s.length-1&&(e+=", "),e},"");t[e].value=i}else if(t[e].value instanceof Object){var s=Object.keys(t[e].value).reduce(function(i,s,n,a){return i+="".concat(s,": ").concat(t[e].value[s]),n!==a.length-1&&(i+=", "),i},"");t[e].value=s}}),t},clearItem:function(){var e=this;return Object.keys(this.item).reduce(function(t,i){return"delimiter"===i||"__status"===i||"x-flespi-filter-fields"===i||"x-flespi-filter-next"===i||"x-flespi-filter-prev"===i?t:(t[i]=e.item[i],t)},{})}},methods:{clickHandler:function(e,t,i){this.$emit("action",{index:e,type:t,content:i})},itemClickHandler:function(e,t){this.$emit("item-click",{index:e,content:t})}}}),M=k,S=(i("e439"),i("2877")),D=Object(S["a"])(M,w,_,!1,null,null,null);D.options.__file="MessagesListItem.vue";var H=D.exports,I={props:["item","activeId","limit","config"],data:function(){return{theme:this.config.theme,i18n:{},viewConfig:this.config.viewConfig,actions:this.config.actions,moduleName:this.config.vuexModuleName}},computed:{messages:{get:function(){var e=this.$store.state[this.moduleName].messages;return this.setTranslate(e),e},set:function(e){this.$store.commit("".concat(this.moduleName,"/setMessages"),e)}},active:{get:function(){return this.$store.state[this.moduleName].active},set:function(){var e=d()(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("".concat(this.moduleName,"/unsubscribePooling"));case 2:return this.$store.commit("".concat(this.moduleName,"/setActive"),t),this.$store.commit("".concat(this.moduleName,"/clearMessages")),e.next=6,this.$store.dispatch("".concat(this.moduleName,"/getCols"));case 6:if(0!==this.$store.state[this.moduleName].mode){e.next=11;break}return e.next=9,this.$store.dispatch("".concat(this.moduleName,"/initTime"));case 9:return e.next=11,this.$store.dispatch("".concat(this.moduleName,"/get"));case 11:this.$store.dispatch("".concat(this.moduleName,"/pollingGet"));case 12:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},cols:{get:function(){return this.$store.state[this.moduleName].cols},set:function(e){this.$store.commit("".concat(this.moduleName,"/updateCols"),e)}},filter:{get:function(){return this.$store.state[this.moduleName].filter},set:function(e){e?this.$store.commit("".concat(this.moduleName,"/setFilter"),e):this.$store.commit("".concat(this.moduleName,"/setFilter"),"")}},begin:{get:function(){return this.$store.state[this.moduleName].begin},set:function(e){e?this.$store.commit("".concat(this.moduleName,"/setBegin"),e):this.$store.commit("".concat(this.moduleName,"/setBegin"),0)}},end:{get:function(){return this.$store.state[this.moduleName].end},set:function(e){e?this.$store.commit("".concat(this.moduleName,"/setEnd"),e):this.$store.commit("".concat(this.moduleName,"/setEnd"),0)}},reverse:{get:function(){return this.$store.state[this.moduleName].reverse||!1},set:function(e){this.$store.commit("".concat(this.moduleName,"/setReverse"),e)}},currentLimit:{get:function(){return this.$store.state[this.moduleName].limit},set:function(e){e?this.$store.commit("".concat(this.moduleName,"/setLimit"),e):this.$store.commit("".concat(this.moduleName,"/setLimit"),1e3)}},selected:{get:function(){return this.$store.state[this.moduleName].selected},set:function(e){this.$store.commit("".concat(this.moduleName,"/setSelected"),e)}}},methods:{resetParams:function(){this.$refs.scrollList.resetParams()},filterChangeHandler:function(e){this.filter!==e&&(this.filter=e,0===this.mode&&(this.$store.commit("".concat(this.moduleName,"/clearMessages")),this.$store.dispatch("".concat(this.moduleName,"/get"))))},setTranslate:function(e){this.i18n.from=e.length?"Previous batch until ".concat(x["d"].formatDate(1e3*e[0].timestamp,"HH:mm:ss")):"Prev",this.i18n.to=e.length?"Next batch from ".concat(x["d"].formatDate(1e3*e[e.length-1].timestamp,"HH:mm:ss")):"Next"},updateColsHandler:function(e){this.cols=e},dateRangeChangeHandler:function(e){var t=e[0],i=e[1];this.begin=t,this.end=i,this.$store.dispatch("".concat(this.moduleName,"/get"))},actionHandler:function(e){var t=e.index,i=e.type,s=e.content;switch(i){case"view":this.viewMessagesHandler({index:t,content:s});break;case"copy":this.copyMessageHandler({index:t,content:s});break}},viewMessagesHandler:function(e){var t=e.index,i=e.content;this.selected=[t],this.$emit("view-data",i)},copyMessageHandler:function(e){var t=this,i=(e.index,e.content);this.$copyText(JSON.stringify(i)).then(function(e){t.$q.notify({type:"positive",icon:"content_copy",message:"Message copied",timeout:1e3})},function(e){t.$q.notify({type:"negative",icon:"content_copy",message:"Error coping messages",timeout:1e3})})},unselect:function(){this.selected.length&&(this.selected=[])}},watch:{activeId:function(e){this.active=e},limit:function(e){this.currentLimit=e}},created:function(){var e=this;this.$store.state[this.moduleName]?this.$store.commit("".concat(this.moduleName,"/clear")):this.$store.registerModule(this.moduleName,p({Vue:b["default"],LocalStorage:this.$q.localStorage,name:this.moduleName,errorHandler:function(t){e.$store.commit("reqFailed",t)},filterHandler:this.filterMessages})),this.currentLimit=this.limit,this.activeId&&(this.$store.commit("".concat(this.moduleName,"/setActive"),this.activeId),this.$store.dispatch("".concat(this.moduleName,"/getCols"))),this.$store.dispatch("".concat(this.moduleName,"/pollingGet")),b["default"].connector.socket.on("offline",function(){e.$store.commit("".concat(e.moduleName,"/setOffline"),1===e.mode),e.$store.commit("setSocketOffline",!0)}),b["default"].connector.socket.on("connect",function(){e.$store.state[e.moduleName].offline&&(e.$store.commit("".concat(e.moduleName,"/setReconnected"),1===e.mode),e.$store.commit("setSocketOffline",!1))})},beforeDestroy:function(){b["default"].connector.socket.off("offline"),b["default"].connector.socket.off("connect"),this.$store.commit("".concat(this.moduleName,"/clear"))},mixins:[y["a"]],components:{VirtualScrollList:u["a"],MessagesListItem:H}},L=I,O=Object(S["a"])(L,l,c,!1,null,null,null);O.options.__file="Index.vue";var E=O.exports,z=i("2f62"),V=i("95ff"),F=i.n(V),R={props:["limit","isLoading","isVisibleToolbar","isNeedSelect","config"],data:function(){return{filter:"",deviceFilter:"",mode:1,active:null,activeDeviceId:null,ratio:50,isInit:!1}},computed:o()({},Object(z["d"])({newMessagesCount:function(e){var t=this.config.messages&&e[this.config.messages.vuexModuleName]?e[this.config.messages.vuexModuleName].newMessagesCount:0,i=this.config.logs&&e[this.config.logs.vuexModuleName]?e[this.config.logs.vuexModuleName].newMessagesCount:0;return t+i},isEmptyMessages:function(e){var t=this.config.messages&&e[this.config.messages.vuexModuleName]&&!e[this.config.messages.vuexModuleName].messages.length&&100!==this.ratio,i=this.config.logs&&e[this.config.logs.vuexModuleName]&&e[this.config.logs.vuexModuleName].messages&&!e[this.config.logs.vuexModuleName].messages.length&&0!==this.ratio;return t&&i},tokenType:function(e){return e.tokenInfo.access?e.tokenInfo.access.type:-1},items:function(e){var t=e.items,i=t.map(function(e){return e.id});return this.isInit&&this.acitve&&!i.includes(this.acitve)&&this.clearActive(),t},devices:function(e){var t=e["addition.devices"]||[],i=t.map(function(e){return e.id});return this.isInit&&this.activeDeviceId&&!i.includes(this.activeDeviceId)&&this.clearActiveDevice(),t}}),{filteredItems:function(){return this.filterItems(this.items,this.filter.toLowerCase())},filteredDevices:function(){return this.filterItems(this.devices,this.deviceFilter.toLowerCase())},size:function(){return[this.ratio,100-this.ratio]},selectedItem:function(){var e=this,t=this.items.filter(function(t){return t.id===e.active})[0]||{};return t},selectedDevice:function(){var e=this;return this.devices.filter(function(t){return t.id===e.activeDeviceId})[0]||{}},modeModel:{get:function(){return!!this.mode},set:function(e){var t=Date.now();this.date=e?0:t-t%864e5,this.mode=Number(e),this.$emit("view-data-hide")}}}),methods:{filterItems:function(e,t){var i=this.filter?e.filter(function(e){return e&&"undefined"!==typeof e.name&&null!==e.name&&e.name.toLowerCase().indexOf(t)>=0||e&&"undefined"!==typeof e.id&&null!==e.id&&(e.id+"").indexOf(t)>=0}):e;return i.sort(function(e,t){if(!e.name)return-1;if(!t.name)return 1;var i=e.name.toLowerCase(),s=t.name.toLowerCase();return i<s?-1:1}),i},viewDataHandler:function(e){this.$emit("view-data",e[e.length-1])},viewLogMessagesHandler:function(e){this.$emit("view-log-message",e)},unselect:function(){this.$refs.messages.unselect()},clearHandler:function(){var e=this;this.$q.dialog({title:"Confirm",message:"Do you really want to clear all data from the panes?",ok:!0,cancel:!0}).then(function(){e.$store.commit("".concat(e.config.messages.vuexModuleName,"/clearMessages")),e.$store.commit("".concat(e.config.logs.vuexModuleName,"/clearMessages"))}).catch(function(){})},clearActive:function(){this.active=null},clearActiveDevice:function(){this.activeDeviceId=null},init:function(){var e="calcs",t=this.$q.localStorage.get.item(e),i=this.$route.params&&this.$route.params.id?this.$route.params.id:null;this.isInit=!0,i?this.items.filter(function(e){return e.id===Number(i)}).length?this.active=Number(i):this.active=null:t&&this.items.filter(function(e){return e.id===t}).length&&(this.active=t)}},watch:{ratio:function(e){var t=this;this.$nextTick(function(){+t.size[0]&&t.active&&(t.$refs.logs.resetParams(),t.$emit("view-data-hide")),+t.size[1]&&t.active&&t.$refs.messages.resetParams()})},$route:function(e){e.params&&e.params.id?this.items.filter(function(t){return t.id===Number(e.params.id)}).length?this.active=Number(e.params.id):this.isInit&&(this.active=null):e.params&&!e.params.id&&(this.active=null)},active:function(e){e?(this.$q.localStorage.set("calcs",e),this.$router.push("/calcs/".concat(e))):this.$router.push("/calcs"),this.ratio=50}},components:{logs:r["a"],messages:E,VirtualList:F.a}},T=R,A=(i("8e5e"),Object(S["a"])(T,s,n,!1,null,null,null));A.options.__file="Calcs.vue";t["default"]=A.exports},e439:function(e,t,i){"use strict";var s=i("f7e4"),n=i.n(s);n.a},f7e4:function(e,t,i){}}]);