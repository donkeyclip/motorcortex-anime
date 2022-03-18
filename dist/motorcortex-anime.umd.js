!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("@donkeyclip/motorcortex")):"function"==typeof define&&define.amd?define(["@donkeyclip/motorcortex"],r):(t="undefined"!=typeof globalThis?globalThis:t||self)["@donkeyclip/motorcortex-anime"]=r(t.MotorCortex)}(this,(function(t){"use strict";function r(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var e=r(t);function n(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function o(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?n(Object(e),!0).forEach((function(r){c(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):n(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function i(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function u(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function a(t,r,e){return r&&u(t.prototype,r),e&&u(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function c(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function f(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&l(t,r)}function s(t){return s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},s(t)}function l(t,r){return l=Object.setPrototypeOf||function(t,r){return t.__proto__=r,t},l(t,r)}function p(t,r){if(r&&("object"==typeof r||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function h(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,n=s(t);if(r){var o=s(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return p(this,e)}}var d="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},v={},y={duration:1e3,round:0},g=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective"],b={CSS:{}};function m(t,r,e){return Math.min(Math.max(t,r),e)}function w(t,r){return t.indexOf(r)>-1}var O={arr:function(t){return Array.isArray(t)},obj:function(t){return w(Object.prototype.toString.call(t),"Object")},pth:function(t){return O.obj(t)&&t.hasOwnProperty("totalLength")},svg:function(t){return t instanceof SVGElement},inp:function(t){return t instanceof HTMLInputElement},dom:function(t){return t.nodeType||O.svg(t)},str:function(t){return"string"==typeof t},fnc:function(t){return"function"==typeof t},und:function(t){return void 0===t},hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},rgb:function(t){return/^rgb/.test(t)},hsl:function(t){return/^hsl/.test(t)},col:function(t){return O.hex(t)||O.rgb(t)||O.hsl(t)},key:function(t){return!v.hasOwnProperty(t)&&!y.hasOwnProperty(t)&&"targets"!==t&&"keyframes"!==t}},j={linear:function(){return function(t){return t}}};function x(t,r){for(var e=t.length,n=arguments.length>=2?arguments[1]:void 0,o=[],i=0;i<e;i++)if(i in t){var u=t[i];r.call(n,u,i,t)&&o.push(u)}return o}function P(t){return t.reduce((function(t,r){return t.concat(O.arr(r)?P(r):r)}),[])}function S(t){return O.arr(t)?t:(O.str(t)&&(t=function(t){try{return document.querySelectorAll(t)}catch(t){return}}(t)||t),t instanceof NodeList||t instanceof HTMLCollection?[].slice.call(t):[t])}function E(t,r){return t.some((function(t){return t===r}))}function T(t){var r={};for(var e in t)r[e]=t[e];return r}function k(t,r){var e=T(t);for(var n in t)e[n]=r.hasOwnProperty(n)?r[n]:t[n];return e}function A(t,r){var e=T(t);for(var n in r)e[n]=O.und(t[n])?r[n]:t[n];return e}function C(t){return O.rgb(t)?(e=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(r=t))?"rgba("+e[1]+",1)":r:O.hex(t)?function(t){var r=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(t,r,e,n){return r+r+e+e+n+n})),e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);return"rgba("+parseInt(e[1],16)+","+parseInt(e[2],16)+","+parseInt(e[3],16)+",1)"}(t):O.hsl(t)?function(t){var r,e,n,o=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t),i=parseInt(o[1],10)/360,u=parseInt(o[2],10)/100,a=parseInt(o[3],10)/100,c=o[4]||1;function f(t,r,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?t+6*(r-t)*e:e<.5?r:e<2/3?t+(r-t)*(2/3-e)*6:t}if(0==u)r=e=n=a;else{var s=a<.5?a*(1+u):a+u-a*u,l=2*a-s;r=f(l,s,i+1/3),e=f(l,s,i),n=f(l,s,i-1/3)}return"rgba("+255*r+","+255*e+","+255*n+","+c+")"}(t):void 0;var r,e}function M(t){var r=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t);if(r)return r[1]}function I(t,r){return O.fnc(t)?t(r.target,r.id,r.total):t}function L(t,r){return t.getAttribute(r)}function F(t,r,e){if(E([e,"deg","rad","turn"],M(r)))return r;var n=b.CSS[r+e];if(!O.und(n))return n;var o=document.createElement(t.tagName),i=t.parentNode&&t.parentNode!==document?t.parentNode:document.body;i.appendChild(o),o.style.position="absolute",o.style.width=100+e;var u=100/o.offsetWidth;i.removeChild(o);var a=u*parseFloat(r);return b.CSS[r+e]=a,a}function N(t,r,e){if(r in t.style){var n=r.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),o=t.style[r]||getComputedStyle(t).getPropertyValue(n)||"0";return e?F(t,o,e):o}}function _(t,r){return O.dom(t)&&!O.inp(t)&&(L(t,r)||O.svg(t)&&t[r])?"attribute":O.dom(t)&&E(g,r)?"transform":O.dom(t)&&"transform"!==r&&N(t,r)?"css":null!=t[r]?"object":void 0}function R(t){if(O.dom(t)){for(var r,e=t.style.transform||"",n=/(\w+)\(([^)]*)\)/g,o=new Map;r=n.exec(e);)o.set(r[1],r[2]);return o}}function V(t,r,e,n){var o=w(r,"scale")?1:0+function(t){return w(t,"translate")||"perspective"===t?"px":w(t,"rotate")||w(t,"skew")?"deg":void 0}(r),i=R(t).get(r)||o;return e&&(e.transforms.list.set(r,i),e.transforms.last=r),n?F(t,i,n):i}function G(t,r,e,n){switch(_(t,r)){case"transform":return V(t,r,n,e);case"css":return N(t,r,e);case"attribute":return L(t,r);default:return t[r]||0}}function D(t,r){var e=/^(\*=|\+=|-=)/.exec(t);if(!e)return t;var n=M(t)||0,o=parseFloat(r),i=parseFloat(t.replace(e[0],""));switch(e[0][0]){case"+":return o+i+n;case"-":return o-i+n;case"*":return o*i+n}}function z(t,r){if(O.col(t))return C(t);if(/\s/g.test(t))return t;var e=M(t),n=e?t.substr(0,t.length-e.length):t;return r?n+r:n}function B(t,r){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,n=z(O.pth(t)?t.totalLength:t,r)+"";return{original:n,numbers:n.match(e)?n.match(e).map(Number):[0],strings:O.str(t)||r?n.split(e):[]}}function $(t){var r=function(t){return x(t?P(O.arr(t)?t.map(S):S(t)):[],(function(t,r,e){return e.indexOf(t)===r}))}(t);return r.map((function(t,e){return{target:t,id:e,total:r.length,transforms:{list:R(t)}}}))}function X(t,r){var e=T(r);if(O.arr(t)){var n=t.length;2===n&&!O.obj(t[0])?t={value:t}:O.fnc(r.duration)||(e.duration=r.duration/n)}return(O.arr(t)?t:[t]).map((function(t,r){return O.obj(t)&&!O.pth(t)?t:{value:t}})).map((function(t){return A(t,e)}))}function Y(t,r){var e;return t.tweens.map((function(n){var o=function(t,r){var e={};for(var n in t){var o=I(t[n],r);O.arr(o)&&1===(o=o.map((function(t){return I(t,r)}))).length&&(o=o[0]),e[n]=o}return e.duration=parseFloat(e.duration),e}(n,r),i=o.value,u=O.arr(i)?i[1]:i,a=M(u),c=G(r.target,t.name,a,r),f=e?e.to.original:c,s=O.arr(i)?i[0]:f,l=M(s)||M(c),p=a||l;return O.und(u)&&(u=f),o.from=B(s,p),o.to=B(D(u,s),p),o.start=e?e.end:0,o.end=o.start+o.duration,o.isPath=!1,o.isColor=O.col(o.from.original),o.isColor&&(o.round=1),e=o,o}))}var q={css:function(t,r,e){return t.style[r]=e},attribute:function(t,r,e){return t.setAttribute(r,e)},object:function(t,r,e){return t[r]=e},transform:function(t,r,e,n,o){if(n.list.set(r,e),r===n.last||o){var i="";n.list.forEach((function(t,r){i+=r+"("+t+") "})),t.style.transform=i}}};function K(t,r){$(t).forEach((function(t){for(var e in r){var n=I(r[e],t),o=t.target,i=M(n),u=G(o,e,i,t),a=D(z(n,i||M(u)),u),c=_(o,e);q[c](o,e,a,t.transforms,!0)}}))}function W(t,r){return x(P(t.map((function(t){return r.map((function(r){return function(t,r){var e=_(t.target,r.name);if(e){var n=Y(r,t),o=n[n.length-1];return{type:e,property:r.name,animatable:t,tweens:n,duration:o.end}}}(t,r)}))}))),(function(t){return!O.und(t)}))}var Z=0;function H(t){var r=k(v,t),e=k(y,t),n=function(t,r){var e=[];for(var n in r)O.key(n)&&e.push({name:n,tweens:X(r[n],t)});return e}(e,t),o=$(t.targets),i=W(o,n),u=function(t,r){var e=t.length,n={};return n.duration=e?Math.max.apply(Math,t.map((function(t){return t.duration}))):r.duration,n}(i,e),a=Z;return Z++,A(r,{id:a,children:[],animatables:o,animations:i,duration:u.duration})}function U(t){void 0===t&&(t={});var r,e=0,n=null;function o(t){var r=window.Promise&&new Promise((function(t){return n=t}));return t.finished=r,r}var i=H(t);function u(t,r){r&&r.seek(t)}function a(t){var a=i.duration,c=t;i.progress=m(c/a*100,0,100),i.reversePlayback=c<i.currentTime,r&&function(t){if(i.reversePlayback)for(var n=e;n--;)u(t,r[n]);else for(var o=0;o<e;o++)u(t,r[o])}(c),!i.began&&i.currentTime>0&&(i.began=!0),function(t){for(var r=0,e=i.animations,n=e.length;r<n;){var o=e[r],u=o.animatable,a=o.tweens,c=a.length-1,f=a[c];c&&(f=x(a,(function(r){return t<r.end}))[0]||f);for(var s=m(t-f.start,0,f.duration)/f.duration,l=f.to.strings,p=f.round,h=[],d=f.to.numbers.length,v=void 0,y=0;y<d;y++){var g=void 0,b=f.to.numbers[y],w=f.from.numbers[y]||0;g=w+s*(b-w),p&&(f.isColor&&y>2||(g=Math.round(g*p)/p)),h.push(g)}var O=l.length;if(O){v=l[0];for(var j=0;j<O;j++){l[j];var P=l[j+1],S=h[j];isNaN(S)||(v+=P?S+P:S+" ")}}else v=h[0];q[o.type](u.target,o.property,v,u.transforms),o.currentValue=v,r++}}(c),i.currentTime=m(c,0,a),t>=a&&(i.paused=!0,i.completed||(i.completed=!0,!i.passThrough&&"Promise"in window&&(n(),o(i))))}return o(i),i.reset=function(){i.passThrough=!1,i.currentTime=0,i.progress=0,i.paused=!0,i.began=!1,i.completed=!1,i.reversePlayback=!1,r=i.children;for(var t=e=r.length;t--;)i.children[t].reset()},i.set=function(t,r){return K(t,r),i},i.seek=function(t){a(t)},i.reset(),i}function J(t,r){return Math.sqrt(Math.pow(r.x-t.x,2)+Math.pow(r.y-t.y,2))}function Q(t){for(var r,e=t.points,n=0,o=0;o<e.numberOfItems;o++){var i=e.getItem(o);o>0&&(n+=J(r,i)),r=i}return n}function tt(t){if(t.getTotalLength)return t.getTotalLength();switch(t.tagName.toLowerCase()){case"circle":return function(t){return 2*Math.PI*L(t,"r")}(t);case"rect":return function(t){return 2*L(t,"width")+2*L(t,"height")}(t);case"line":return function(t){return J({x:L(t,"x1"),y:L(t,"y1")},{x:L(t,"x2"),y:L(t,"y2")})}(t);case"polyline":return Q(t);case"polygon":return function(t){var r=t.points;return Q(t)+J(r.getItem(r.numberOfItems-1),r.getItem(0))}(t)}}function rt(t,r){var e=r||{},n=e.el||function(t){for(var r=t.parentNode;O.svg(r)&&O.svg(r.parentNode);)r=r.parentNode;return r}(t),o=n.getBoundingClientRect(),i=L(n,"viewBox"),u=o.width,a=o.height,c=e.viewBox||(i?i.split(" "):[0,0,u,a]);return{el:n,viewBox:c,x:c[0]/1,y:c[1]/1,w:u,h:a,vW:c[2],vH:c[3]}}U.version="3.1.0",U.get=G,U.set=K,U.convertPx=F,U.penner=j,U.path=function(t){return{el:t,svg:rt(t),totalLength:tt(t),deltaCorrections:{x:4,y:5}}},U.getPathProgress=function(t,r,e){function n(e){void 0===e&&(e=0);var n=r*t.totalLength,o=n+e>=1?n+e:0;return t.el.getPointAtLength(o)}var o=rt(t.el,t.svg),i=n(),u=n(-1),a=n(1);return{x:1*(i.x-o.x),y:1*(i.y-o.y),angle:180*Math.atan2(a.y-u.y,a.x-u.x)/Math.PI}};var et=U,nt=function(t){f(e,t);var r=h(e);function e(){return i(this,e),r.apply(this,arguments)}return a(e,[{key:"onGetContext",value:function(){var t={};if(Object.prototype.hasOwnProperty.call(this.compoAttributes,this.attributeKey))for(var r=this.compoAttributes[this.attributeKey],e=0;e<r.length;e++)Object.prototype.hasOwnProperty.call(this.targetValue,r[e])&&(t[r[e]]=[this.initialValue[r[e]],this.targetValue[r[e]]]);else t[this.attributeKey]=[this.initialValue,this.targetValue];this.target=et(o(o({autoplay:!1,duration:this.props.duration,easing:"linear",targets:this.element},(this.attrs||{}).attrs||{}),t))}},{key:"onProgress",value:function(t){return this.target.seek(this.target.duration*this.getFraction(t))}}]),e}(e.default.ExtendableCSSEffect),ot=function(t){return t&&t.Math==Math&&t},it=ot("object"==typeof globalThis&&globalThis)||ot("object"==typeof window&&window)||ot("object"==typeof self&&self)||ot("object"==typeof d&&d)||function(){return this}()||Function("return this")(),ut={},at=function(t){try{return!!t()}catch(t){return!0}},ct=!at((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),ft=!at((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),st=ft,lt=Function.prototype.call,pt=st?lt.bind(lt):function(){return lt.apply(lt,arguments)},ht={},dt={}.propertyIsEnumerable,vt=Object.getOwnPropertyDescriptor,yt=vt&&!dt.call({1:2},1);ht.f=yt?function(t){var r=vt(this,t);return!!r&&r.enumerable}:dt;var gt,bt,mt=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}},wt=ft,Ot=Function.prototype,jt=Ot.bind,xt=Ot.call,Pt=wt&&jt.bind(xt,xt),St=wt?function(t){return t&&Pt(t)}:function(t){return t&&function(){return xt.apply(t,arguments)}},Et=St,Tt=Et({}.toString),kt=Et("".slice),At=function(t){return kt(Tt(t),8,-1)},Ct=St,Mt=at,It=At,Lt=it.Object,Ft=Ct("".split),Nt=Mt((function(){return!Lt("z").propertyIsEnumerable(0)}))?function(t){return"String"==It(t)?Ft(t,""):Lt(t)}:Lt,_t=it.TypeError,Rt=function(t){if(null==t)throw _t("Can't call method on "+t);return t},Vt=Nt,Gt=Rt,Dt=function(t){return Vt(Gt(t))},zt=function(t){return"function"==typeof t},Bt=zt,$t=function(t){return"object"==typeof t?null!==t:Bt(t)},Xt=it,Yt=zt,qt=function(t){return Yt(t)?t:void 0},Kt=function(t,r){return arguments.length<2?qt(Xt[t]):Xt[t]&&Xt[t][r]},Wt=St({}.isPrototypeOf),Zt=it,Ht=Kt("navigator","userAgent")||"",Ut=Zt.process,Jt=Zt.Deno,Qt=Ut&&Ut.versions||Jt&&Jt.version,tr=Qt&&Qt.v8;tr&&(bt=(gt=tr.split("."))[0]>0&&gt[0]<4?1:+(gt[0]+gt[1])),!bt&&Ht&&(!(gt=Ht.match(/Edge\/(\d+)/))||gt[1]>=74)&&(gt=Ht.match(/Chrome\/(\d+)/))&&(bt=+gt[1]);var rr=bt,er=rr,nr=at,or=!!Object.getOwnPropertySymbols&&!nr((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&er&&er<41})),ir=or&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,ur=Kt,ar=zt,cr=Wt,fr=ir,sr=it.Object,lr=fr?function(t){return"symbol"==typeof t}:function(t){var r=ur("Symbol");return ar(r)&&cr(r.prototype,sr(t))},pr=it.String,hr=zt,dr=function(t){try{return pr(t)}catch(t){return"Object"}},vr=it.TypeError,yr=function(t){if(hr(t))return t;throw vr(dr(t)+" is not a function")},gr=pt,br=zt,mr=$t,wr=it.TypeError,Or={exports:{}},jr=it,xr=Object.defineProperty,Pr=function(t,r){try{xr(jr,t,{value:r,configurable:!0,writable:!0})}catch(e){jr[t]=r}return r},Sr=Pr,Er="__core-js_shared__",Tr=it[Er]||Sr(Er,{}),kr=Tr;(Or.exports=function(t,r){return kr[t]||(kr[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.21.1",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"});var Ar=Rt,Cr=it.Object,Mr=function(t){return Cr(Ar(t))},Ir=Mr,Lr=St({}.hasOwnProperty),Fr=Object.hasOwn||function(t,r){return Lr(Ir(t),r)},Nr=St,_r=0,Rr=Math.random(),Vr=Nr(1..toString),Gr=function(t){return"Symbol("+(void 0===t?"":t)+")_"+Vr(++_r+Rr,36)},Dr=it,zr=Or.exports,Br=Fr,$r=Gr,Xr=or,Yr=ir,qr=zr("wks"),Kr=Dr.Symbol,Wr=Kr&&Kr.for,Zr=Yr?Kr:Kr&&Kr.withoutSetter||$r,Hr=function(t){if(!Br(qr,t)||!Xr&&"string"!=typeof qr[t]){var r="Symbol."+t;Xr&&Br(Kr,t)?qr[t]=Kr[t]:qr[t]=Yr&&Wr?Wr(r):Zr(r)}return qr[t]},Ur=pt,Jr=$t,Qr=lr,te=function(t,r){var e=t[r];return null==e?void 0:yr(e)},re=function(t,r){var e,n;if("string"===r&&br(e=t.toString)&&!mr(n=gr(e,t)))return n;if(br(e=t.valueOf)&&!mr(n=gr(e,t)))return n;if("string"!==r&&br(e=t.toString)&&!mr(n=gr(e,t)))return n;throw wr("Can't convert object to primitive value")},ee=Hr,ne=it.TypeError,oe=ee("toPrimitive"),ie=function(t,r){if(!Jr(t)||Qr(t))return t;var e,n=te(t,oe);if(n){if(void 0===r&&(r="default"),e=Ur(n,t,r),!Jr(e)||Qr(e))return e;throw ne("Can't convert object to primitive value")}return void 0===r&&(r="number"),re(t,r)},ue=lr,ae=function(t){var r=ie(t,"string");return ue(r)?r:r+""},ce=$t,fe=it.document,se=ce(fe)&&ce(fe.createElement),le=function(t){return se?fe.createElement(t):{}},pe=!ct&&!at((function(){return 7!=Object.defineProperty(le("div"),"a",{get:function(){return 7}}).a})),he=ct,de=pt,ve=ht,ye=mt,ge=Dt,be=ae,me=Fr,we=pe,Oe=Object.getOwnPropertyDescriptor;ut.f=he?Oe:function(t,r){if(t=ge(t),r=be(r),we)try{return Oe(t,r)}catch(t){}if(me(t,r))return ye(!de(ve.f,t,r),t[r])};var je={},xe=ct&&at((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),Pe=it,Se=$t,Ee=Pe.String,Te=Pe.TypeError,ke=function(t){if(Se(t))return t;throw Te(Ee(t)+" is not an object")},Ae=ct,Ce=pe,Me=xe,Ie=ke,Le=ae,Fe=it.TypeError,Ne=Object.defineProperty,_e=Object.getOwnPropertyDescriptor,Re="enumerable",Ve="configurable",Ge="writable";je.f=Ae?Me?function(t,r,e){if(Ie(t),r=Le(r),Ie(e),"function"==typeof t&&"prototype"===r&&"value"in e&&Ge in e&&!e.writable){var n=_e(t,r);n&&n.writable&&(t[r]=e.value,e={configurable:Ve in e?e.configurable:n.configurable,enumerable:Re in e?e.enumerable:n.enumerable,writable:!1})}return Ne(t,r,e)}:Ne:function(t,r,e){if(Ie(t),r=Le(r),Ie(e),Ce)try{return Ne(t,r,e)}catch(t){}if("get"in e||"set"in e)throw Fe("Accessors not supported");return"value"in e&&(t[r]=e.value),t};var De=je,ze=mt,Be=ct?function(t,r,e){return De.f(t,r,ze(1,e))}:function(t,r,e){return t[r]=e,t},$e={exports:{}},Xe=zt,Ye=Tr,qe=St(Function.toString);Xe(Ye.inspectSource)||(Ye.inspectSource=function(t){return qe(t)});var Ke,We,Ze,He=Ye.inspectSource,Ue=zt,Je=He,Qe=it.WeakMap,tn=Ue(Qe)&&/native code/.test(Je(Qe)),rn=Or.exports,en=Gr,nn=rn("keys"),on={},un=tn,an=it,cn=St,fn=$t,sn=Be,ln=Fr,pn=Tr,hn=function(t){return nn[t]||(nn[t]=en(t))},dn=on,vn="Object already initialized",yn=an.TypeError,gn=an.WeakMap;if(un||pn.state){var bn=pn.state||(pn.state=new gn),mn=cn(bn.get),wn=cn(bn.has),On=cn(bn.set);Ke=function(t,r){if(wn(bn,t))throw new yn(vn);return r.facade=t,On(bn,t,r),r},We=function(t){return mn(bn,t)||{}},Ze=function(t){return wn(bn,t)}}else{var jn=hn("state");dn[jn]=!0,Ke=function(t,r){if(ln(t,jn))throw new yn(vn);return r.facade=t,sn(t,jn,r),r},We=function(t){return ln(t,jn)?t[jn]:{}},Ze=function(t){return ln(t,jn)}}var xn={set:Ke,get:We,has:Ze,enforce:function(t){return Ze(t)?We(t):Ke(t,{})},getterFor:function(t){return function(r){var e;if(!fn(r)||(e=We(r)).type!==t)throw yn("Incompatible receiver, "+t+" required");return e}}},Pn=ct,Sn=Fr,En=Function.prototype,Tn=Pn&&Object.getOwnPropertyDescriptor,kn=Sn(En,"name"),An=kn&&"something"===function(){}.name,Cn=kn&&(!Pn||Pn&&Tn(En,"name").configurable),Mn=it,In=zt,Ln=Fr,Fn=Be,Nn=Pr,_n=He,Rn={EXISTS:kn,PROPER:An,CONFIGURABLE:Cn}.CONFIGURABLE,Vn=xn.get,Gn=xn.enforce,Dn=String(String).split("String");($e.exports=function(t,r,e,n){var o,i=!!n&&!!n.unsafe,u=!!n&&!!n.enumerable,a=!!n&&!!n.noTargetGet,c=n&&void 0!==n.name?n.name:r;In(e)&&("Symbol("===String(c).slice(0,7)&&(c="["+String(c).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!Ln(e,"name")||Rn&&e.name!==c)&&Fn(e,"name",c),(o=Gn(e)).source||(o.source=Dn.join("string"==typeof c?c:""))),t!==Mn?(i?!a&&t[r]&&(u=!0):delete t[r],u?t[r]=e:Fn(t,r,e)):u?t[r]=e:Nn(r,e)})(Function.prototype,"toString",(function(){return In(this)&&Vn(this).source||_n(this)}));var zn={},Bn=Math.ceil,$n=Math.floor,Xn=function(t){var r=+t;return r!=r||0===r?0:(r>0?$n:Bn)(r)},Yn=Xn,qn=Math.max,Kn=Math.min,Wn=Xn,Zn=Math.min,Hn=function(t){return t>0?Zn(Wn(t),9007199254740991):0},Un=function(t){return Hn(t.length)},Jn=Dt,Qn=function(t,r){var e=Yn(t);return e<0?qn(e+r,0):Kn(e,r)},to=Un,ro=function(t){return function(r,e,n){var o,i=Jn(r),u=to(i),a=Qn(n,u);if(t&&e!=e){for(;u>a;)if((o=i[a++])!=o)return!0}else for(;u>a;a++)if((t||a in i)&&i[a]===e)return t||a||0;return!t&&-1}},eo={includes:ro(!0),indexOf:ro(!1)},no=Fr,oo=Dt,io=eo.indexOf,uo=on,ao=St([].push),co=function(t,r){var e,n=oo(t),o=0,i=[];for(e in n)!no(uo,e)&&no(n,e)&&ao(i,e);for(;r.length>o;)no(n,e=r[o++])&&(~io(i,e)||ao(i,e));return i},fo=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");zn.f=Object.getOwnPropertyNames||function(t){return co(t,fo)};var so={};so.f=Object.getOwnPropertySymbols;var lo=Kt,po=zn,ho=so,vo=ke,yo=St([].concat),go=lo("Reflect","ownKeys")||function(t){var r=po.f(vo(t)),e=ho.f;return e?yo(r,e(t)):r},bo=Fr,mo=go,wo=ut,Oo=je,jo=at,xo=zt,Po=/#|\.prototype\./,So=function(t,r){var e=To[Eo(t)];return e==Ao||e!=ko&&(xo(r)?jo(r):!!r)},Eo=So.normalize=function(t){return String(t).replace(Po,".").toLowerCase()},To=So.data={},ko=So.NATIVE="N",Ao=So.POLYFILL="P",Co=So,Mo=it,Io=ut.f,Lo=Be,Fo=$e.exports,No=Pr,_o=function(t,r,e){for(var n=mo(r),o=Oo.f,i=wo.f,u=0;u<n.length;u++){var a=n[u];bo(t,a)||e&&bo(e,a)||o(t,a,i(r,a))}},Ro=Co,Vo=At,Go=Array.isArray||function(t){return"Array"==Vo(t)},Do=ae,zo=je,Bo=mt,$o={};$o[Hr("toStringTag")]="z";var Xo=it,Yo="[object z]"===String($o),qo=zt,Ko=At,Wo=Hr("toStringTag"),Zo=Xo.Object,Ho="Arguments"==Ko(function(){return arguments}()),Uo=St,Jo=at,Qo=zt,ti=Yo?Ko:function(t){var r,e,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,r){try{return t[r]}catch(t){}}(r=Zo(t),Wo))?e:Ho?Ko(r):"Object"==(n=Ko(r))&&qo(r.callee)?"Arguments":n},ri=He,ei=function(){},ni=[],oi=Kt("Reflect","construct"),ii=/^\s*(?:class|function)\b/,ui=Uo(ii.exec),ai=!ii.exec(ei),ci=function(t){if(!Qo(t))return!1;try{return oi(ei,ni,t),!0}catch(t){return!1}},fi=function(t){if(!Qo(t))return!1;switch(ti(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return ai||!!ui(ii,ri(t))}catch(t){return!0}};fi.sham=!0;var si=!oi||Jo((function(){var t;return ci(ci.call)||!ci(Object)||!ci((function(){t=!0}))||t}))?fi:ci,li=it,pi=Go,hi=si,di=$t,vi=Hr("species"),yi=li.Array,gi=function(t){var r;return pi(t)&&(r=t.constructor,(hi(r)&&(r===yi||pi(r.prototype))||di(r)&&null===(r=r[vi]))&&(r=void 0)),void 0===r?yi:r},bi=at,mi=rr,wi=Hr("species"),Oi=function(t,r){var e,n,o,i,u,a=t.target,c=t.global,f=t.stat;if(e=c?Mo:f?Mo[a]||No(a,{}):(Mo[a]||{}).prototype)for(n in r){if(i=r[n],o=t.noTargetGet?(u=Io(e,n))&&u.value:e[n],!Ro(c?n:a+(f?".":"#")+n,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;_o(i,o)}(t.sham||o&&o.sham)&&Lo(i,"sham",!0),Fo(e,n,i,t)}},ji=it,xi=at,Pi=Go,Si=$t,Ei=Mr,Ti=Un,ki=function(t,r,e){var n=Do(r);n in t?zo.f(t,n,Bo(0,e)):t[n]=e},Ai=function(t,r){return new(gi(t))(0===r?0:r)},Ci=function(t){return mi>=51||!bi((function(){var r=[];return(r.constructor={})[wi]=function(){return{foo:1}},1!==r[t](Boolean).foo}))},Mi=rr,Ii=Hr("isConcatSpreadable"),Li=9007199254740991,Fi="Maximum allowed index exceeded",Ni=ji.TypeError,_i=Mi>=51||!xi((function(){var t=[];return t[Ii]=!1,t.concat()[0]!==t})),Ri=Ci("concat"),Vi=function(t){if(!Si(t))return!1;var r=t[Ii];return void 0!==r?!!r:Pi(t)};Oi({target:"Array",proto:!0,forced:!_i||!Ri},{concat:function(t){var r,e,n,o,i,u=Ei(this),a=Ai(u,0),c=0;for(r=-1,n=arguments.length;r<n;r++)if(Vi(i=-1===r?u:arguments[r])){if(c+(o=Ti(i))>Li)throw Ni(Fi);for(e=0;e<o;e++,c++)e in i&&ki(a,c,i[e])}else{if(c>=Li)throw Ni(Fi);ki(a,c++,i)}return a.length=c,a}});var Gi=function(t){f(e,t);var r=h(e);function e(){return i(this,e),r.apply(this,arguments)}return a(e,[{key:"onGetContext",value:function(){this.pixelsAccuracy=this.attrs.pixelsAccuracy||4,this.calculatedPoints=[];var t=this.context.getElements(this.targetValue.pathElement)[0];this.path=et.path(t),this.isPathTargetInsideSVG=this.element instanceof SVGElement}},{key:"onProgress",value:function(t){var r,e=Math.round(this.path.totalLength/this.pixelsAccuracy*this.getFraction(t))*this.pixelsAccuracy;if(null!=this.calculatedPoints[e])r=this.calculatedPoints[e];else{var n=et.getPathProgress(this.path,e/this.path.totalLength,this.isPathTargetInsideSVG);r="\n            translateX(".concat(n.x,"px)\n            translateY(").concat(n.y,"px)\n            rotate(").concat(n.angle,"deg)\n        "),this.calculatedPoints[e]=r}this.element.style.transform=r}}]),e}(t.Effect);return{npm_name:"@donkeyclip/motorcortex-anime",version:"3.0.0",CSSEffect:nt,incidents:[{exportable:Gi,name:"MotionPath",attributesValidationRules:{animatedAttrs:{type:"object",props:{positionOn:{type:"object",props:{pathElement:{type:"string"}}}}}}}]}}));
