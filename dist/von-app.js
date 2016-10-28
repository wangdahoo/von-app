var VonApp=function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="/dist/",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(15),i=r(o),a=n(16),u=r(a);n(30);var s=n(11),c=r(s),f=n(34),l=r(f),d=n(33),p=r(d),v=n(10),h=r(v);c["default"].use(l["default"]),c["default"].directive("nav",function(t){h["default"].$emit("PageTransitionEvent",t)});var b=c["default"].extend({components:{Navbar:p["default"]},created:function(){},methods:{}}),m=function(){function t(e,n){(0,i["default"])(this,t),this.routers=e,this.defaultRouterUrl=n}return(0,u["default"])(t,[{key:"start",value:function(){var t=new l["default"]({history:!1});t.map(this.routers),t.redirect({"*":this.defaultRouterUrl}),t.start(b,"[von-app]"),t.nextDirection=function(t){document.querySelector("[von-app]").setAttribute("transition-direction",t)},t._go=t.go,t.forward=t.go=function(e){t.nextDirection("forward"),setTimeout(function(){t._go(e)})},t.back=function(e){t.nextDirection("back"),setTimeout(function(){t._go(e)})},window.$router=t}}]),t}();e["default"]={install:function(t,e){t.transition("view",{enterClass:"view-enter",leaveClass:"view-leave"});var n=e.routers,r=e.defaultRouterUrl,o=new m(n,r);o.start()}}},function(t,e,n){t.exports=!n(4)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(19),o=n(24),i=n(26),a=Object.defineProperty;e.f=n(1)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return a(t,e,n)}catch(u){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},,function(t,e,n){function r(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=p[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(c(r.parts[i],e))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(c(r.parts[i],e));p[r.id]={id:r.id,refs:1,parts:a}}}}function o(t){for(var e=[],n={},r=0;r<t.length;r++){var o=t[r],i=o[0],a=o[1],u=o[2],s=o[3],c={css:a,media:u,sourceMap:s};n[i]?n[i].parts.push(c):e.push(n[i]={id:i,parts:[c]})}return e}function i(t,e){var n=b(),r=g[g.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),g.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function a(t){t.parentNode.removeChild(t);var e=g.indexOf(t);e>=0&&g.splice(e,1)}function u(t){var e=document.createElement("style");return e.type="text/css",i(t,e),e}function s(t){var e=document.createElement("link");return e.rel="stylesheet",i(t,e),e}function c(t,e){var n,r,o;if(e.singleton){var i=x++;n=m||(m=u(e)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=s(e),r=d.bind(null,n),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=u(e),r=l.bind(null,n),o=function(){a(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}function f(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=w(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function l(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function d(t,e){var n=e.css,r=e.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),i=t.href;t.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var p={},v=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},h=v(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),b=v(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,x=0,g=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=h()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var n=o(t);return r(n,e),function(t){for(var i=[],a=0;a<n.length;a++){var u=n[a],s=p[u.id];s.refs--,i.push(s)}if(t){var c=o(t);r(c,e)}for(var a=0;a<i.length;a++){var s=i[a];if(0===s.refs){for(var f=0;f<s.parts.length;f++)s.parts[f]();delete p[s.id]}}}};var w=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){var r,o,i={};r=n(13),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var a="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;o&&(a.template=o),a.computed||(a.computed={}),Object.keys(i).forEach(function(t){var e=i[t];a.computed[t]=function(){return e}})},function(t,e){t.exports=Vue},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t){return(document.body.offsetWidth-t.offsetWidth)/2-10}function i(t,e,n){var r=Math.random().toString(36).substring(3,8),i=document.createElement("div");i.id=r,i.className="center";var a=document.createElement("span");a.className="title",a.innerHTML=e;var u="back"==n;return a.style.opacity=0,a.style.transform="translate3d("+(u?"-":"")+o(a)+"px,0,0)",a.style.webkitTransform="translate3d("+(u?"-":"")+o(a)+"px,0,0)",t.querySelector(".center")||(a.style.opacity=1,a.style.transform="translate3d(0,0,0)",a.style.webkitTransform="translate3d(0,0,0)"),i.appendChild(a),t.appendChild(i),document.getElementById(r)}function a(t){t.style.opacity=1,t.style.transform="translate3d(0,0,0)",t.style.webkitTransform="translate3d(0,0,0)"}function u(t,e){var n="back"==e;t.style.opacity=0,t.style.transform="translate3d("+(n?"":"-")+o(t)+"px,0,0)",t.style.webkitTransform="translate3d("+(n?"":"-")+o(t)+"px,0,0)"}Object.defineProperty(e,"__esModule",{value:!0});var s=n(10),c=r(s);e["default"]={data:function(){return{title:"",showBackButton:!0,onBackButtonClick:void 0,showMenuButton:!1,onMenuButtonClick:void 0,backButtonText:'<i class="icon icon-back"></i>',menuButtonText:'<i class="icon icon-bars"></i>'}},created:function(){var t=this,e=void 0;c["default"].$on("PageTransitionEvent",function(n){var r=document.querySelector("[von-app]").getAttribute("transition-direction");t.title=n.title;var o=i(t.$el,t.title,r);setTimeout(function(){a(o.querySelector(".title")),e&&u(e.querySelector(".title"),r),setTimeout(function(){e&&t.$el.removeChild(e),e=o},500)}),t.showBackButton=n.showBackButton,t.onBackButtonClick=n.onBackButtonClick,n.backButtonText&&(t.backButtonText=n.backButtonText),t.showMenuButton=n.showMenuButton,t.onMenuButtonClick=n.onMenuButtonClick,n.menuButtonText&&(t.menuButtonText=n.menuButtonText)})},ready:function(){},methods:{backButtonClicked:function(){return this.onBackButtonClick?void this.onBackButtonClick():($router.nextDirection("back"),void history.go(-1))},menuButtonClicked:function(){this.onMenuButtonClick&&this.onMenuButtonClick()}}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(11),i=r(o),a=new i["default"];e["default"]=a},function(t,e,n){t.exports={"default":n(17),__esModule:!0}},function(t,e){"use strict";e.__esModule=!0,e["default"]=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var o=n(14),i=r(o);e["default"]=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i["default"])(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){n(27);var r=n(3).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(2);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(18);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(2),o=n(5).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){var r=n(5),o=n(3),i=n(20),a=n(23),u="prototype",s=function(t,e,n){var c,f,l,d=t&s.F,p=t&s.G,v=t&s.S,h=t&s.P,b=t&s.B,m=t&s.W,x=p?o:o[e]||(o[e]={}),g=x[u],w=p?r:v?r[e]:(r[e]||{})[u];p&&(n=e);for(c in n)f=!d&&w&&void 0!==w[c],f&&c in x||(l=f?w[c]:n[c],x[c]=p&&"function"!=typeof w[c]?n[c]:b&&f?i(l,r):m&&w[c]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[u]=t[u],e}(l):h&&"function"==typeof l?i(Function.call,l):l,h&&((x.virtual||(x.virtual={}))[c]=l,t&s.R&&g&&!g[c]&&a(g,c,l)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e,n){var r=n(6),o=n(25);t.exports=n(1)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){t.exports=!n(1)&&!n(4)(function(){return 7!=Object.defineProperty(n(21)("div"),"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(2);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(22);r(r.S+r.F*!n(1),"Object",{defineProperty:n(6).f})},function(t,e,n){e=t.exports=n(7)(),e.push([t.id,".view{-webkit-transition-duration:.5s;transition-duration:.5s;transition-timing-function:cubic-bezier(.36,.66,.04,1);-webkit-transition-timing-function:cubic-bezier(.36,.66,.04,1);-webkit-transition-property:opacity,-webkit-transform,box-shadow;transition-property:opacity,transform,box-shadow;z-index:1;opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}.view.view-enter{z-index:2;opacity:1;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.view.view-leave{z-index:1;opacity:.8;-webkit-transform:translate3d(-33%,0,0);transform:translate3d(-33%,0,0)}[transition-direction=forward] .view.view-enter{z-index:2;opacity:1;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}[transition-direction=back] .view.view-enter,[transition-direction=forward] .view.view-leave{z-index:1;opacity:.8;-webkit-transform:translate3d(-33%,0,0);transform:translate3d(-33%,0,0)}[transition-direction=back] .view.view-leave{z-index:2;opacity:1;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.page{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;background-color:#f5f5f5}.page .page-content{width:100%;overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch}.page.has-navbar .page-content{padding-top:44px}",""])},function(t,e,n){e=t.exports=n(7)(),e.push([t.id,".navbar{box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);top:0;height:44px;z-index:10;background-color:#fff}.navbar,.navbar:after{position:absolute;left:0;width:100%}.navbar:after{content:'';bottom:0;right:auto;top:auto;height:1px;background-color:#ddd;display:block;z-index:15;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}html.pixel-ratio-2 .navbar:after{-webkit-transform:scaleY(.5);transform:scaleY(.5)}html.pixel-ratio-3 .navbar:after{-webkit-transform:scaleY(.33);transform:scaleY(.33)}.navbar .back-button,.navbar .menu-button{position:absolute;top:0;width:80px;height:44px;line-height:44px;z-index:12}.navbar .back-button span,.navbar .menu-button span{font-size:16px;line-height:20px}.navbar .back-button i.icon,.navbar .menu-button i.icon{line-height:20px}.navbar .back-button{left:0;padding:0 0 0 10px;text-align:left}.navbar .menu-button{right:0;padding:0 10px 0 0;text-align:right}.navbar .center{position:absolute;top:0;left:0;width:100%;height:44px;padding:0;text-align:center;z-index:11}.navbar .center .title{display:inline-block;font-size:18px;line-height:44px;transition:all .4s ease;-webkit-transition:all .4s ease}.navbar i.icon{display:inline-block;vertical-align:middle;background-size:100% auto;background-position:50%;background-repeat:no-repeat;font-style:normal;position:relative}.navbar i.icon.icon-back{width:12px;height:20px;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 20'%3E%3Cpath d='M10 0l2 2-8 8 8 8-2 2L0 10 10 0z' fill='%23007aff'/%3E%3C/svg%3E\")}.navbar i.icon.icon-bars{width:21px;height:14px;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21 14'%3E%3Cpath fill='%23007aff' d='M0 0h2v2H0V0zm4 0h17v1H4V0zM0 6h2v2H0V6zm4 0h17v1H4V6zm-4 6h2v2H0v-2zm4 0h17v1H4v-1z'/%3E%3C/svg%3E\")}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:2ddpx){.navbar i.icon.icon-bars{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 42 26'%3E%3Cpath fill='%23007aff' d='M0 0h4v4H0V0zm8 1h34v2H8V1zM0 11h4v4H0v-4zm8 1h34v2H8v-2zM0 22h4v4H0v-4zm8 1h34v2H8v-2z'/%3E%3C/svg%3E\");height:13px}}",""])},function(t,e,n){var r=n(28);"string"==typeof r&&(r=[[t.id,r,""]]);n(9)(r,{});r.locals&&(t.exports=r.locals)},function(t,e,n){var r=n(29);"string"==typeof r&&(r=[[t.id,r,""]]);n(9)(r,{});r.locals&&(t.exports=r.locals)},function(t,e){t.exports=" <div class=navbar> <div v-if=showBackButton class=back-button @click=backButtonClicked()> {{{ backButtonText }}} </div> <div v-if=showMenuButton class=menu-button @click=menuButtonClicked()> {{{ menuButtonText }}} </div> </div> "},function(t,e,n){var r,o,i={};n(31),r=n(12),o=n(32),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var a="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;o&&(a.template=o),a.computed||(a.computed={}),Object.keys(i).forEach(function(t){var e=i[t];a.computed[t]=function(){return e}})},function(t,e){t.exports=VueRouter}]);
//# sourceMappingURL=von-app.js.map