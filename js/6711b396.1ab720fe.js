(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["6711b396"],{"0666":function(t,e,i){},"22d9":function(t,e,i){"use strict";var s=i("c1fe"),n=i.n(s);n.a},7248:function(t,e,i){"use strict";var s=i("b0cb"),n=i.n(s);n.a},ab66:function(t,e,i){"use strict";var s=i("0666"),n=i.n(s);n.a},b0cb:function(t,e,i){},b831:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("q-layout",{ref:"layout",staticClass:"bg-dark",attrs:{view:"hHh LpR lFf"}},[t.isVisibleToolbar?i("q-layout-header",[i("q-toolbar",{staticClass:"header__main-toolbar",attrs:{color:"dark"}},[i("q-btn",{attrs:{flat:"",icon:"mdi-menu"},on:{click:function(e){t.sides.left=!t.sides.left}}}),i("q-toolbar-title",{style:{minWidth:t.$q.platform.is.mobile?"60px":"210px"}},[i("img",{staticClass:"gt-sm",staticStyle:{height:"30px"},attrs:{src:"statics/toolbox50.png",alt:"Toolbox"}}),i("img",{staticClass:"lt-md",staticStyle:{height:"30px"},attrs:{src:"statics/toolbox_mobile.png",alt:"Toolbox"}}),i("sup",{staticStyle:{position:"relative","font-size":".9rem","padding-left":"4px"}},[t._v(t._s(t.version))]),t.configByEntity?i("span",{staticStyle:{position:"relative",top:"-5px","margin-left":"10px"}},[t._v(t._s(t.configByEntity.label))]):t._e()]),t.errors.length?i("q-btn",{attrs:{small:"",flat:"",round:"",icon:"notifications"},on:{click:t.clearNotificationCounter}},[t.newNotificationCounter?i("q-chip",{attrs:{floating:"",color:"red"}},[t._v(t._s(t.newNotificationCounter))]):t._e(),i("q-popover",{ref:"popoverError",attrs:{fit:""}},[i("q-list",{staticClass:"scroll",staticStyle:{"max-height":"200px"},attrs:{"no-border":"",link:"",separator:""}},t._l(t.errors,function(e,s){return i("q-item",{key:s,staticStyle:{cursor:"default"}},[i("q-item-main",[i("q-item-tile",{attrs:{label:""}},[t._v(t._s(e))])],1)],1)}))],1)],1):t._e(),i("q-btn",{attrs:{small:"",flat:"",round:"",icon:"mdi-settings"},on:{click:t.settingsHandler}}),i("q-btn",{staticClass:"within-iframe-hide",attrs:{small:"",flat:"",round:"",icon:"mdi-exit-to-app"},on:{click:t.confirmExitHandler}})],1)],1):t._e(),i("q-layout-drawer",{attrs:{side:"right","no-swipe-open":"","no-swipe-close":"","content-class":{"bg-dark":!0}},model:{value:t.sides.right,callback:function(e){t.$set(t.sides,"right",e)},expression:"sides.right"}},[Object.keys(t.currentMessage).length?i("object-viewer",{attrs:{object:t.currentMessage},on:{close:t.hideRightHandler}}):t._e()],1),i("q-layout-drawer",{attrs:{side:"left","content-class":{"bg-white":!0}},model:{value:t.sides.left,callback:function(e){t.$set(t.sides,"left",e)},expression:"sides.left"}},[i("q-list",{attrs:{separator:""}},[t.renderEntities.includes("platform")?i("q-item",{staticClass:"q-pt-md q-pb-md",attrs:{to:"/platform"}},[i("q-item-side",{attrs:{color:"red",icon:t.config.platform.icon}}),i("q-item-main",[i("q-item-tile",[t._v(t._s(t.config.platform.label))])],1)],1):t._e(),t.renderEntities.includes("channels")||t.renderEntities.includes("devices")||t.renderEntities.includes("streams")||t.renderEntities.includes("modems")?i("q-collapsible",{staticClass:"q-pt-md q-pb-md",attrs:{group:"menu",label:"Telematics Hub",icon:"mdi-sitemap",value:t.hubGroupModel}},[i("div",[i("q-list",{staticClass:"row"},[t.renderEntities.includes("channels")?i("q-item",{staticClass:"col-6",attrs:{to:"/channels"}},[i("q-item-main",{staticClass:"text-center"},[i("div",[i("q-icon",{attrs:{name:t.config.channels.icon,size:"2.6em"}})],1),i("div",[t._v(t._s(t.config.channels.label))])])],1):t._e(),t.renderEntities.includes("devices")?i("q-item",{staticClass:"col-6",attrs:{to:"/devices"}},[i("q-item-main",{staticClass:"text-center"},[i("div",[i("q-icon",{attrs:{name:t.config.devices.icon,size:"2.6em"}})],1),i("div",[t._v(t._s(t.config.devices.label))])])],1):t._e(),t.renderEntities.includes("streams")?i("q-item",{staticClass:"col-6",attrs:{to:"/streams"}},[i("q-item-main",{staticClass:"text-center"},[i("div",[i("q-icon",{attrs:{name:t.config.streams.icon,size:"2.6em"}})],1),i("div",[t._v(t._s(t.config.streams.label))])])],1):t._e(),t.renderEntities.includes("modems")?i("q-item",{staticClass:"col-6",attrs:{to:"/modems"}},[i("q-item-main",{staticClass:"text-center"},[i("div",[i("q-icon",{attrs:{name:t.config.modems.icon,size:"2.6em"}})],1),i("div",[t._v(t._s(t.config.modems.label))])])],1):t._e(),t.renderEntities.includes("channels")||t.renderEntities.includes("devices")||t.renderEntities.includes("streams")||t.renderEntities.includes("modems")?i("q-item-separator",{staticStyle:{width:"100%"}}):t._e(),t.renderEntities.includes("calcs")?i("q-item",{staticClass:"col-6",attrs:{to:"/calcs"}},[i("q-item-main",{staticClass:"text-center"},[i("div",[i("q-icon",{attrs:{name:t.config.calcs.icon,size:"2.6em"}})],1),i("div",[t._v(t._s(t.config.calcs.label))])])],1):t._e(),t.renderEntities.includes("calcs")?i("q-item-separator",{staticStyle:{width:"100%"}}):t._e(),i("q-list-header",{staticClass:"col-12"},[t._v("Tools")]),i("q-item",{staticClass:"col-6",attrs:{to:"/tools/hex"}},[i("q-item-main",{staticClass:"text-center"},[i("div",[i("q-icon",{attrs:{name:t.config.hexViewer.icon,size:"2.6em"}})],1),i("div",[t._v(t._s(t.config.hexViewer.label))])])],1)],1)],1)]):t._e(),t.renderEntities.includes("containers")||t.renderEntities.includes("abques")||t.renderEntities.includes("cdns")?i("q-collapsible",{staticClass:"q-pt-md q-pb-md",attrs:{group:"menu",label:"Storage",icon:"mdi-database",value:t.storageGroupModel}},[i("div",[i("q-list",{staticClass:"row"},[t.renderEntities.includes("containers")?i("q-item",{staticClass:"col-6",attrs:{to:"/containers"}},[i("q-item-main",{staticClass:"text-center"},[i("div",[i("q-icon",{attrs:{name:t.config.containers.icon,size:"2.6em"}})],1),i("div",[t._v(t._s(t.config.containers.label))])])],1):t._e(),t.renderEntities.includes("abques")?i("q-item",{staticClass:"col-6",attrs:{to:"/abques"}},[i("q-item-main",{staticClass:"text-center"},[i("div",[i("q-icon",{attrs:{name:t.config.abques.icon,size:"2.6em"}})],1),i("div",[t._v(t._s(t.config.abques.label))])])],1):t._e(),t.renderEntities.includes("cdns")?i("q-item",{staticClass:"col-6",attrs:{to:"/cdns"}},[i("q-item-main",{staticClass:"text-center"},[i("div",[i("q-icon",{attrs:{name:t.config.cdns.icon,size:"2.6em"}})],1),i("div",[t._v(t._s(t.config.cdns.label))])])],1):t._e()],1)],1)]):t._e(),t.renderEntities.includes("mqtt")||t.renderEntities.includes("mqttClient")?i("q-collapsible",{staticClass:"q-pt-md q-pb-md",attrs:{group:"menu",label:"MQTT",icon:"mdi-access-point-network",value:t.mqttGroupModel}},[i("div",[i("q-list",{staticClass:"row"},[t.renderEntities.includes("mqtt")?i("q-item",{staticClass:"col-6",attrs:{to:"/mqtt"}},[i("q-item-main",{staticClass:"text-center"},[i("div",[i("q-icon",{attrs:{name:t.config.mqtt.icon,size:"2.6em"}})],1),i("div",[t._v(t._s(t.config.mqtt.label))])])],1):t._e(),t.renderEntities.includes("mqtt")?i("q-item-separator",{staticStyle:{width:"100%"}}):t._e(),i("q-list-header",{staticClass:"col-12"},[t._v("Tools")]),i("q-item",{staticClass:"col-6",attrs:{to:"/tools/mqtt"}},[i("q-item-main",{staticClass:"text-center"},[i("div",[i("q-icon",{attrs:{name:t.config.mqttClient.icon,size:"2.6em"}})],1),i("div",[t._v(t._s(t.config.mqttClient.label))])])],1)],1)],1)]):t._e()],1)],1),i("q-page-container",{staticClass:"bg-dark"},[i("raw-viewer",{ref:"rawViewer",attrs:{config:t.rawConfig,inverted:""}}),t.configByEntity&&t.isInit?i("router-view",{ref:"main",attrs:{limit:t.limit,isLoading:t.loadingFlag,isVisibleToolbar:t.isVisibleToolbar,isNeedSelect:t.isNeedSelect,config:t.configByEntity},on:{"view-data":t.viewDataHandler,"view-data-hide":function(e){t.sides.right=!1,t.currentMessage={}},"view-log-message":t.viewLogMessagesHandler}}):t._e()],1)],1),i("q-inner-loading",{staticStyle:{"z-index":"2001"},attrs:{visible:t.loadingFlag,dark:""}},[i("q-spinner-gears",{attrs:{size:"100px",color:"white"}})],1)],1)},n=[],a=(i("28a5"),i("6762"),i("2fdb"),i("ac6a"),i("cadf"),i("456d"),i("7f7f"),i("3156")),r=i.n(a),o=i("2b0e"),c=i("f490"),l=i("2f62"),d=i("9224"),u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("q-item",[i("q-item-side",{attrs:{left:""}},[i("q-icon",{attrs:{color:"white",size:"1.8rem",name:"mdi-view-list"}})],1),i("q-item-main",[i("q-item-tile",{staticClass:"ellipsis text-bold text-white",attrs:{label:""}},[t._v("Object")])],1),i("q-item-side",{attrs:{right:""}},[i("q-icon",{staticClass:"pull-right cursor-pointer",attrs:{color:"white",name:"mdi-close",size:"1.8rem"},nativeOn:{click:function(e){t.$emit("close")}}})],1)],1),i("q-item",[i("q-item-main",[i("q-input",{staticClass:"no-top-bottom-margin",attrs:{type:"text",inverted:"",color:"none","float-label":"Search"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),i("q-list",{attrs:{separator:"","no-border":""}},[Object.keys(t.object).length&&Object.keys(t.filteredObject).length?t._e():i("q-item",[i("q-item-main",[i("q-item-tile",{staticClass:"ellipsis text-bold text-center text-white",attrs:{label:""}},[t._v("Object is empty")]),Object.keys(t.object).length?t._e():i("q-item-tile",{staticClass:"ellipsis text-center text-white",attrs:{sublabel:""}},[t._v("Message has not fields")]),!Object.keys(t.filteredObject).length&&this.search?i("q-item-tile",{staticClass:"ellipsis text-center text-white",attrs:{sublabel:""}},[t._v("Nothing found on your search")]):t._e()],1)],1),Object.keys(t.filteredObject).length?t._l(Object.keys(t.filteredObject),function(e){return i("q-item",{key:e},[i("q-item-main",[i("q-item-tile",{staticClass:"ellipsis text-bold text-white",attrs:{label:""}},[t._v(t._s(e)),i("q-tooltip",[t._v(t._s(e))])],1),-1===e.indexOf("image.bin.")?i("q-item-tile",{staticClass:"ellipsis text-white",attrs:{sublabel:""}},[t._v(t._s(JSON.stringify(t.filteredObject[e]))),i("q-tooltip",[t._v(t._s(JSON.stringify(t.filteredObject[e])))])],1):i("q-item-tile",{attrs:{sublabel:""}},[i("img",{staticClass:"image-bin",attrs:{src:"data:image/"+e.split(".")[2]+";base64, "+t.filteredObject[e],alt:e}})])],1)],1)}):t._e()],2)],1)},m=[],h=(i("386d"),{props:["object"],data:function(){return{search:""}},computed:{filteredObject:function(){var t=this;return Object.keys(this.object).reduce(function(e,i){return-1!==i.indexOf(t.search)&&(e[i]=t.object[i]),e},{})}}}),f=h,p=(i("c5c8"),i("2877")),g=Object(p["a"])(f,u,m,!1,null,null,null);g.options.__file="ObjectViewer.vue";var b=g.exports,v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-modal",{ref:"modal",attrs:{"content-css":{maxWidth:"100vw",maxHeight:"100vh",width:"700px",height:"700px"},"content-classes":{"bg-dark":void 0!==t.inverted,"modal-tabs":!0}},on:{show:t.openHandler,hide:function(e){t.tabModel=""}}},[i("q-modal-layout",[i("q-toolbar",{staticStyle:{"justify-content":"flex-end"},attrs:{slot:"footer",color:"dark"},slot:"footer"},[i("q-btn",{attrs:{flat:""},on:{click:function(e){t.$refs.modal.hide()}}},[t._v("Close")])],1),t.hasData?t._e():i("div",{staticClass:"text-center",class:{"text-white":void 0!==t.inverted},staticStyle:{"font-size":"2rem","margin-top":"50px"}},[t._v("No additional data available")]),t.hasData?i("q-tabs",{attrs:{color:"dark","no-pane-border":""},model:{value:t.tabModel,callback:function(e){t.tabModel=e},expression:"tabModel"}},[t._l(t.config,function(e,s){return[e.data?[i("q-tab",{key:"tab-"+s,attrs:{slot:"title",name:s,label:e.title},slot:"title"}),i("q-tab-pane",{key:"tab-pane-"+s,attrs:{name:s}},[e.description?i("div",{staticClass:"text-center q-mb-sm",class:[e.data._color],staticStyle:{"font-size":"1.1rem"}},[t._v(t._s(e.description))]):t._e(),e.wrapper&&"object"===typeof e.wrapper?i(e.wrapper,{tag:"component",attrs:{data:t.getData(e.data),inverted:t.inverted}}):e.wrapper&&"string"===typeof e.wrapper?i(e.wrapper,{tag:"component",class:{"text-white":void 0!==t.inverted}},[t._v(t._s(t.getData(e.data)))]):i("div",{class:{"text-white":void 0!==t.inverted}},[t._v(t._s(t.getData(e.data)))])],1)]:t._e()]})],2):t._e()],1)],1)},y=[],q={props:["config","inverted"],data:function(){return{tabModel:""}},computed:{hasData:function(){var t=this;return Object.keys(this.config).reduce(function(e,i){return t.config[i].data&&(e=!0),e},!1)}},methods:{open:function(){this.$refs.modal.show()},openHandler:function(){var t=this,e=0,i=Object.keys(this.config).some(function(i,s){return e=s,!!t.config[i].data});this.tabModel=i?Object.keys(this.config)[e]:Object.keys(this.config)[0]?Object.keys(this.config)[e]:""},getData:function(t){return Object.keys(t).reduce(function(e,i){return"_description"===i||"_color"===i?e:(e[i]=t[i],e)},{})}}},_=q,w=(i("7248"),Object(p["a"])(_,v,y,!1,null,null,null));w.options.__file="RawViewer.vue";var x=w.exports,C=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("span",{class:{"text-white":void 0!==t.inverted}},[t._v(t._s(Array.isArray(t.data)?"[":"{"))]),t._l(t.data,function(e,s,n){var a;return i("div",{key:s+"-"+n,staticClass:"margin-left"},[e&&"object"===typeof e?i("div",[i("div",{staticClass:"cursor-pointer",on:{click:function(e){t.toggle(Array.isArray(t.data)?s:n)}}},[t.showObj[Array.isArray(t.data)?s:n]?i("q-icon",{staticStyle:{"vertical-align":"baseline"},attrs:{color:void 0!==t.inverted?"white":"dark",name:"mdi-menu-down"}}):i("q-icon",{staticStyle:{"vertical-align":"baseline"},attrs:{color:void 0!==t.inverted?"white":"dark",name:"mdi-menu-right"}}),i("span",{class:[t.theme.label]},[t._v(t._s(s))]),i("span",{class:{"text-white":void 0!==t.inverted}},[t._v(" : "+t._s(Array.isArray(e)?"Array ["+e.length+"]":"Object"))])],1),t.showObj[Array.isArray(t.data)?s:n]?i("json-tree",{staticClass:"margin-left",attrs:{data:e,inverted:t.inverted}}):t._e()],1):i("div",[i("span",{class:[t.theme.label]},[t._v(t._s(s))]),i("span",{class:{"text-white":void 0!==t.inverted}},[t._v(" : ")]),i("span",{class:(a={},a[t.theme.typeNumberOrBool]="number"===typeof e||"boolean"===typeof e,a[t.theme.typeString]="string"===typeof e,a[t.theme.typeEmpty]="undefined"===typeof e||null===e,a)},[t._v(t._s(JSON.stringify(e)))])])])}),i("span",{class:{"text-white":void 0!==t.inverted}},[t._v(t._s(Array.isArray(t.data)?"]":"}"))])],2)},k=[],E={name:"json-tree",props:{data:[Object,Array],inverted:!0},data:function(){for(var t=[],e=Object.keys(this.data).length,i=0,s=e;i<s;i++)t.push(!0);return{showObj:t}},computed:{theme:function(){return void 0!==this.inverted?{label:"text-pink-4",typeString:"text-red-3",typeNumberOrBool:"text-blue-3",typeEmpty:"text-grey-5"}:{label:"text-pink-8",typeString:"text-red-6",typeNumberOrBool:"text-blue-6",typeEmpty:"text-grey-6"}}},methods:{toggle:function(t){o["default"].set(this.showObj,t,!this.showObj[t])}}},j=E,O=(i("ab66"),Object(p["a"])(j,C,k,!1,null,null,null));O.options.__file="JsonTree.vue";var $=O.exports,N={data:function(){return{version:d.version,currentMessage:{},currentData:{},sides:{left:!this.$q.platform.within.iframe,right:!1},currentLimit:1e3,rawConfig:{},entity:"",isVisibleToolbar:!0,connectFlag:!1,isTabsVisible:!0,entityByGroup:["platform","channels","calcs","devices","streams","modems","containers","abques","cdns","mqtt","mqttClient","hexViewer"],isNeedSelect:!0,isInit:o["default"].connector.socket.connected()}},computed:r()({},Object(l["d"])({token:function(t){return t.token},isLoading:function(t){return t.isLoading||!!(this.configByEntity&&this.configByEntity.messages&&t[this.configByEntity.messages.vuexModuleName]&&t[this.configByEntity.messages.vuexModuleName].isLoading)||!!(this.configByEntity&&this.configByEntity.logs&&t[this.configByEntity.logs.vuexModuleName]&&t[this.configByEntity.logs.vuexModuleName].isLoading)},config:function(t){return t.config},errors:function(t){return t.errors},newNotificationCounter:function(t){return t.newNotificationCounter}}),{loadingFlag:function(){return this.connectFlag||this.isLoading},hubGroupModel:function(){var t=this.entity;return"channels"===t||"calcs"===t||"devices"===t||"streams"===t||"modems"===t||"hexViewer"===t||"intervals"===t},storageGroupModel:function(){var t=this.entity;return"containers"===t||"abques"===t||"cdns"===t},mqttGroupModel:function(){var t=this.entity;return"mqtt"===t||"mqttClient"===t},configByEntity:function(){return"intervals"===this.entity?this.config["devices"]:this.config[this.entity]},renderEntities:function(){var t=this;return this.entityByGroup.filter(function(e){return t.config[e].isDrawable})},limit:{get:function(){return this.currentLimit},set:function(t){var e=this;t<100?(this.$q.notify({type:"negative",message:"Please set the count to more than 100.",timeout:1500}),this.currentLimit=100):t>2e3&&this.currentLimit<=2e3?this.$q.notify({color:"amber-9",icon:"warning",timeout:1e4,message:"You are setting the row count to more than 2000. This can affect your browser performance. Do you want to continue?",position:"top-right",actions:[{label:"Agree",handler:function(){e.currentLimit=t}},{label:"Abort",handler:this.settingsClickHandler}]}):this.currentLimit=t}},logMessageConfig:function(){var t={"log object":{title:"log object",description:this.currentData._description,wrapper:$,data:this.currentData},item_data:{title:"item data",wrapper:$,data:this.currentData.item_data},http_data:{title:"http data",wrapper:$,data:this.currentData.http_data},properties:{title:"properties",wrapper:$,data:this.currentData.properties},pending:{title:"pending",wrapper:$,data:this.currentData.pending},current:{title:"".concat(this.currentData.name," [").concat(c["d"].formatDate(1e3*this.currentData.timestamp,"HH:mm:ss"),"]"),wrapper:$,data:this.currentData.current}},e=Object.keys(t).reduce(function(e,i){return e||!!t[i].data},!1);return e?t:e}}),methods:r()({},Object(l["c"])(["setToken","clearToken","reqFailed","addError","clearNotificationCounter"]),{viewDataHandler:function(t){var e=this;t=Object.keys(t).reduce(function(t,e){return 0===e.indexOf("x-flespi")&&delete t[e],t},t),this.currentMessage=JSON.parse(JSON.stringify(t)),setTimeout(function(){e.sides.right=!0},20)},hideRight:function(){this.sides.right=!1,this.currentMessage={}},hideRightHandler:function(){this.hideRight(),this.$refs.main.unselect()},confirmExitHandler:function(){var t=this;this.$q.dialog({title:"Confirm",message:"Do you really want to exit?",cancel:!0,ok:!0}).then(function(){t.reset()}).catch(function(){})},settingsHandler:function(){var t=this;this.$q.dialog({title:"Settings",message:"Page row count",prompt:{model:this.limit,type:"number"},ok:!0,cancel:!0}).then(function(e){t.limit=e}).catch(function(){})},viewLogMessagesHandler:function(t){this.currentData=JSON.parse(JSON.stringify(t)),this.logMessageConfig?(this.rawConfig=this.logMessageConfig,this.$refs.rawViewer.open()):this.$q.notify({message:"No additional data available",timeout:1500})},getGroups:function(t){return t.reduce(function(t,e){if(["hub","storage","mqtt","platform"].includes(e))switch(e){case"hub":t.push("channels"),t.push("calcs"),t.push("devices"),t.push("streams"),t.push("modems"),t.push("hexViewer");break;case"storage":t.push("containers"),t.push("abques"),t.push("cdns");break;case"mqtt":t.push("mqtt"),t.push("mqttClient");break;case"platform":t.push("platform");break}return t},[])},reset:function(t){this.clearToken(),this.$router.push("/login"),t&&this.addError(t)},setDefaultEntity:function(){this.renderEntities.length?(this.$router.push("/".concat(this.config[this.renderEntities[0]].path||this.renderEntities[0])),this.entity=this.renderEntities[0]):this.reset("Nothing to show by current token")},routeProcess:function(t){if(t.params.group){var e=this.$route.params.group.split(","),i=this.getGroups(e);i.length&&(this.entityByGroup=i)}t.params.token?this.routeParamsProcess(t):this.token?this.routeMainProcess(t):this.$router.push({name:"simpleLogin",params:{goto:t.path}})},routeParamsProcess:function(t){this.isNeedSelect=!this.$route.params.noselect,this.isVisibleToolbar=!t.params.fullscreen,this.setToken(t.params.token),t.params.id&&t.params.type?this.renderEntities.includes(t.params.type)?(this.entity=this.$route.params.type,this.$router.push("/".concat(t.params.type,"/").concat(t.params.id))):this.reset("Nothing to show by current token"):this.setDefaultEntity()},routeMainProcess:function(t){if("/"===t.path)this.setDefaultEntity();else if(this.$route.meta.moduleName){if(this.entity=this.$route.meta.moduleName,this.$route.meta.moduleName===this.entity)return!1;this.$router.push(this.$route.path)}else this.$router.push(this.$route.path)}}),watch:{token:function(t){t||this.$router.push("/login")},$route:function(t){this.routeProcess(t),this.$refs.layout&&this.hideRight()}},created:function(){var t=this;this.routeProcess(this.$route),this.isInit||(this.connectFlag=!0,o["default"].connector.socket.on("connect",function(){t.isInit=!0,t.connectFlag=!1}))},beforeDestroy:function(){o["default"].connector.socket.off("connect")},components:{ObjectViewer:b,RawViewer:x}},S=N,M=(i("22d9"),Object(p["a"])(S,s,n,!1,null,null,null));M.options.__file="Index.vue";e["default"]=M.exports},c1fe:function(t,e,i){},c5c8:function(t,e,i){"use strict";var s=i("d4ef"),n=i.n(s);n.a},d4ef:function(t,e,i){}}]);