!function(n,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["choice-color"]=e():n["choice-color"]=e()}(this,function(){return function(n){function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var t={};return e.m=n,e.c=t,e.i=function(n){return n},e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:r})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="/vue-circle-choice/",e(e.s=10)}([function(n,e,t){t(7);var r=t(5)(t(2),t(6),"data-v-4a468d22",null);n.exports=r.exports},function(n,e){n.exports=function(n){if(!n.webpackPolyfill){var e=Object.create(n);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=["#1ba6cc","#189ba7","#98c6ae","#45a270"];e.default={name:"choiceColor",data:function(){return{color:r[0]}},props:{colors:{default:r},radius:{default:"10em"}},computed:{colorBg:function(){return{backgroundColor:this.color}},containerSize:function(){return{width:"calc(2 * "+this.radius+")",height:"calc(2 * "+this.radius+")"}}},methods:{setColor:function(n){var e=this.colors.indexOf(n);this.color=n,this.$emit("updateColor",{index:e,color:n})},setItem:function(n){var e=360*n/this.colors.length+"deg",t=90-360/this.colors.length+"deg";return{backgroundColor:this.colors[n],transform:"rotate("+e+") skew("+t+")"}}}}},function(n,e,t){e=n.exports=t(4)(),e.push([n.i,"\n*[data-v-4a468d22] {\n  box-sizing: border-box;\n}\nul[data-v-4a468d22] {\n  width: 100%;\n  height: 100%;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.theme-container[data-v-4a468d22] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 20em;\n  height: 20em;\n}\n.colors-container[data-v-4a468d22] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  border-radius: 50%;\n  overflow: hidden;\n}\n.colors-container .color-block[data-v-4a468d22] {\n    width: 50%;\n    height: 50%;\n    position: absolute;\n    transform-origin: 100% 100%;\n    left: 50%;\n    top: 50%;\n    margin-left: -50%;\n    margin-top: -50%;\n    -webkit-tap-highlight-color: transparent;\n}\n.faux-border[data-v-4a468d22] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 50%;\n  height: 50%;\n  border-radius: 50%;\n  padding: 5%;\n  background: #fff;\n}\n.chosen-color[data-v-4a468d22] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n","",{version:3,sources:["/./src/components/choice-color.vue"],names:[],mappings:";AACA;EACE,uBAAuB;CACxB;AACD;EACE,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,WAAW;EACX,UAAU;CACX;AACD;EACE,mBAAmB;EACnB,UAAU;EACV,SAAS;EACT,iCAAiC;EACjC,YAAY;EACZ,aAAa;CACd;AACD;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,iBAAiB;CAClB;AACD;IACI,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,4BAA4B;IAC5B,UAAU;IACV,SAAS;IACT,kBAAkB;IAClB,iBAAiB;IACjB,yCAAyC;CAC5C;AACD;EACE,mBAAmB;EACnB,UAAU;EACV,SAAS;EACT,iCAAiC;EACjC,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,iBAAiB;CAClB;AACD;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;CACpB",file:"choice-color.vue",sourcesContent:["\n*[data-v-4a468d22] {\n  box-sizing: border-box;\n}\nul[data-v-4a468d22] {\n  width: 100%;\n  height: 100%;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.theme-container[data-v-4a468d22] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 20em;\n  height: 20em;\n}\n.colors-container[data-v-4a468d22] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  border-radius: 50%;\n  overflow: hidden;\n}\n.colors-container .color-block[data-v-4a468d22] {\n    width: 50%;\n    height: 50%;\n    position: absolute;\n    transform-origin: 100% 100%;\n    left: 50%;\n    top: 50%;\n    margin-left: -50%;\n    margin-top: -50%;\n    -webkit-tap-highlight-color: transparent;\n}\n.faux-border[data-v-4a468d22] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 50%;\n  height: 50%;\n  border-radius: 50%;\n  padding: 5%;\n  background: #fff;\n}\n.chosen-color[data-v-4a468d22] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n"],sourceRoot:"webpack://"}])},function(n,e){n.exports=function(){var n=[];return n.toString=function(){for(var n=[],e=0;e<this.length;e++){var t=this[e];t[2]?n.push("@media "+t[2]+"{"+t[1]+"}"):n.push(t[1])}return n.join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),n.push(a))}},n}},function(n,e){n.exports=function(n,e,t,r){var o,i=n=n||{},a=typeof n.default;"object"!==a&&"function"!==a||(o=n,i=n.default);var s="function"==typeof i?i.options:i;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),t&&(s._scopeId=t),r){var c=s.computed||(s.computed={});Object.keys(r).forEach(function(n){var e=r[n];c[n]=function(){return e}})}return{esModule:o,exports:i,options:s}}},function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"theme-container",style:n.containerSize},[t("ul",{staticClass:"colors-container"},n._l(n.colors,function(e,r){return t("li",{staticClass:"color-block",style:n.setItem(r),on:{click:function(t){n.setColor(e)}}})})),t("div",{staticClass:"faux-border"},[t("div",{staticClass:"chosen-color",style:n.colorBg})])])},staticRenderFns:[]}},function(n,e,t){var r=t(3);"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);t(8)("dba03df0",r,!0)},function(n,e,t){function r(n){for(var e=0;e<n.length;e++){var t=n[e],r=l[t.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](t.parts[o]);for(;o<t.parts.length;o++)r.parts.push(a(t.parts[o]));r.parts.length>t.parts.length&&(r.parts.length=t.parts.length)}else{for(var i=[],o=0;o<t.parts.length;o++)i.push(a(t.parts[o]));l[t.id]={id:t.id,refs:1,parts:i}}}}function o(n,e){for(var t=[],r={},o=0;o<e.length;o++){var i=e[o],a=i[0],s=i[1],c=i[2],d=i[3],l={css:s,media:c,sourceMap:d};r[a]?(l.id=n+":"+r[a].parts.length,r[a].parts.push(l)):(l.id=n+":0",t.push(r[a]={id:a,parts:[l]}))}return t}function i(){var n=document.createElement("style");return n.type="text/css",u.appendChild(n),n}function a(n){var e,t,r=document.querySelector('style[data-vue-ssr-id~="'+n.id+'"]'),o=null!=r;if(o&&p)return h;if(C){var a=A++;r=f||(f=i()),e=s.bind(null,r,a,!1),t=s.bind(null,r,a,!0)}else r=r||i(),e=c.bind(null,r),t=function(){r.parentNode.removeChild(r)};return o||e(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;e(n=r)}else t()}}function s(n,e,t,r){var o=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=m(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function c(n,e){var t=e.css,r=e.media,o=e.sourceMap;if(r&&n.setAttribute("media",r),o&&(t+="\n/*# sourceURL="+o.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var d="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!d)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o=t(9),l={},u=d&&(document.head||document.getElementsByTagName("head")[0]),f=null,A=0,p=!1,h=function(){},C="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());n.exports=function(n,e,t){p=t;var i=o(n,e);return r(i),function(e){for(var t=[],a=0;a<i.length;a++){var s=i[a],c=l[s.id];c.refs--,t.push(c)}e?(i=o(n,e),r(i)):i=[];for(var a=0;a<t.length;a++){var c=t[a];if(0===c.refs){for(var d=0;d<c.parts.length;d++)c.parts[d]();delete l[c.id]}}}};var m=function(){var n=[];return function(e,t){return n[e]=t,n.filter(Boolean).join("\n")}}()},function(n,e){n.exports=function(n,e){for(var t=[],r={},o=0;o<e.length;o++){var i=e[o],a=i[0],s=i[1],c=i[2],d=i[3],l={id:n+":"+o,css:s,media:c,sourceMap:d};r[a]?r[a].parts.push(l):t.push(r[a]={id:a,parts:[l]})}return t}},function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0});var r=t(0),o=t.n(r);n.exports=o.a}).call(e,t(1)(n))}])});