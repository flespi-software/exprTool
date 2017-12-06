webpackJsonp([10],{118:function(e,t,s){"use strict";function n(e){s(173)}Object.defineProperty(t,"__esModule",{value:!0});var i=s(175),o=s(176),a=s(40),c=n,r=a(i.a,o.a,!1,c,null,null);t.default=r.exports},133:function(e,t,s){e.exports={default:s(138),__esModule:!0}},138:function(e,t,s){var n=s(2),i=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return i.stringify.apply(i,arguments)}},173:function(e,t,s){var n=s(174);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);s(117)("50e9fbe3",n,!0)},174:function(e,t,s){t=e.exports=s(116)(void 0),t.push([e.i,".list__item{display:inline-block;white-space:nowrap;margin:0 10px 0 5px;text-overflow:ellipsis;overflow:hidden}",""])},175:function(e,t,s){"use strict";var n=s(133),i=s.n(n),o=s(41),a=s.n(o),c=s(23);t.a={props:["item","index","actions","cols","etcVisible","actionsVisible","itemHeight","rowWidth"],computed:{etc:function(){var e=this;return a()(this.item).filter(function(t){return!e.hasInCols(t)}).reduce(function(t,s){return"event_origin"===s||"event_text"===s||"item_data"===s||"error_text"===s||"close_code"===s||"http_data"===s||"current"===s||"updated"===s||"error_code"===s?t:t+=s+": "+i()(e.item[s])+"; "},"")||"*Empty*"},color:function(){switch(this.item.event_code){case 1:case 100:case 101:case 110:case 200:case 201:case 202:case 300:case 401:case 410:return"text-green";case 2:case 3:case 21:case 111:case 112:case 311:case 314:case 411:case 412:return"text-yellow";case 113:case 301:case 310:case 313:case 404:return"text-grey-6";case 20:case 114:case 203:case 204:case 312:case 402:case 403:return"text-red";case 102:switch(this.item.close_code){case 3:return"text-green";case 2:return"text-grey-6";case 4:case 5:case 6:return"text-red";case 7:case 8:case 9:case 10:case 11:return"text-yellow";default:return""}default:return""}},eventLinkMore:function(){switch(this.item.event_code){case 1:case 2:case 3:return"https://flespi.io/docs/#/platform";case 20:case 21:return"https://flespi.io/docs/#/platform/!/counters";case 100:case 101:case 102:return"https://flespi.io/docs/#/gw/!/connections";case 110:case 111:case 112:case 113:return"https://flespi.io/docs/#/gw/!/commands";case 114:return"https://flespi.io/docs/#/gw/!/channels";case 200:case 201:case 202:case 203:case 204:return"https://flespi.io/docs/#/gw/!/modems";case 300:case 301:case 310:case 311:case 312:case 313:case 314:return"https://flespi.io/docs/#/registry/!/devices";case 401:case 402:case 403:case 404:case 410:case 411:case 412:return"https://flespi.io/docs/#/registry/!/streams";default:return""}},description:function(){var e={1:"item was created, usually by customer via REST API",2:"item was updated, usually by customer via REST API",3:"item was deleted, usually by customer via REST API",20:"item was blocked",21:"item was deleted",100:"channel has accepted connection",101:"channel connection was identified",102:"channel connection was closed",110:"new channel's command was created",111:"channel's command was updated",112:"channel's command was deleted",113:"channel's command executed or discarded",114:"channel configuration is invalid",200:"SMS was received via modem",201:"SMS was sent via modem",202:"modem has successfully connected to SMPP server",203:"modem has lost connection to SMPP server",204:"failed to connect to SMPP server",300:"device connected",301:"device disconnected",310:"REST API (POST) request to read setting value from device",311:"REST API (PUT) request to modify setting value on device",312:"REST API (DELETE) request to delete current device setting value",313:"Platform originated request to synchronize setting value from device",314:"Device setting value was modified",401:"stream connected successfully",402:"stream has lost connection",403:"stream failed to connect",404:"stream has sent messages",410:"new subscription was created for stream",411:"stream subscription was updated",412:"stream subscription was deleted"},t={2:"connection closed by tracking device",3:"connection successfully processed and closed",4:"received data violates channel's protocol",5:"internal error",6:"data parsing error",7:"gateway server updated",8:"channel protocol was modified on the server",9:"channel's parameters changed",10:"connection closed upon user's request",11:"terminal mode ended"},s={"-99":"certificate error","-2":"failed to establish TCP connection","-1":"connection closed by flespi platform due to internal error",1:"unacceptable protocol version",2:"identifier rejected",3:"server unavailable",4:"bad username or password",5:"connection not authorized",100:"Continue",101:"Switching Protocols",102:"Processing",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",208:"Already Reported",226:"IM Used",300:"Multiple Choices",301:"Moved Permanently",302:"Moved Temporarily",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",308:"Permanent Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Payload Too Large",414:"URI Too Long",415:"Unsupported Media Type",416:"Range Not Satisfiable",417:"Expectation Failed",418:"I’m a teapot",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",449:"Retry With",451:"Unavailable For Legal Reasons",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",508:"Loop Detected",509:"Bandwidth Limit Exceeded",510:"Not Extended",511:"Network Authentication Required",520:"Unknown Error",521:"Web Server Is Down",522:"Connection Timed Out",523:"Origin Is Unreachable",524:"A Timeout Occurred",525:"SSL Handshake Failed",526:"Invalid SSL Certificate"},n=e[this.item.event_code]?this.item.event_code+": "+e[this.item.event_code]:this.item.event_code;return n+=this.item.close_code?" ("+t[this.item.close_code]+")":t[this.item.close_code]?"("+this.item.close_code+")":"",n+=this.item.error_code?" ("+this.item.error_code+": "+s[this.item.error_code]+")":s[this.item.error_code]?"("+this.item.error_code+")":""}},methods:{hasInCols:function(e){return!!this.cols.filter(function(t){return e===t.name}).length},clickHandler:function(e,t,s){this.$emit("action",{index:e,type:t,content:s})},getValueOfProp:function(e){var t=e.custom?i()(this.item[e.name]):this.item[e.name];return"event_code"===e.name&&(t=this.description),"timestamp"===e.name&&(t=c.I.formatDate(1e3*this.item[e.name],"HH:mm:ss")),t}},components:{QTooltip:c.F,QIcon:c.i}}},176:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:[e.color],style:{height:e.itemHeight+"px",width:e.rowWidth+"px"}},[e.actionsVisible?s("span",{staticClass:"list__item item_actions text-white"},e._l(e.actions,function(t,n){return s("q-icon",{key:n,staticClass:"cursor-pointer on-left",class:t.classes,attrs:{name:t.icon},on:{click:function(s){e.clickHandler(e.index,t.type,e.item)}}},[s("q-tooltip",[e._v(e._s(t.label))])],1)})):e._e(),e._v(" "),e._l(e.cols,function(t,n){return s("span",{key:n,staticClass:"list__item",class:(i={},i["item_"+n]=!0,i)},["event_code"===t.name&&e.item.error_text?s("q-tooltip",[e._v(e._s(e.item.error_text))]):e._e(),e._v(" "),"event_code"===t.name?s("a",{class:[e.color],attrs:{target:"_blank",href:e.eventLinkMore}},[s("q-icon",{attrs:{name:"mdi-information-outline"}})],1):e._e(),e._v("\n    "+e._s(e.getValueOfProp(t))+"\n  ")],1);var i}),e._v(" "),e.etcVisible?s("span",{staticClass:"list__item item_etc"},[e._v(e._s(e.etc))]):e._e()],2)},i=[],o={render:n,staticRenderFns:i};t.a=o}});