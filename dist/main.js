(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),o=n.n(r),a=n(645),c=n.n(a)()(o());c.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&display=swap);"]),c.push([e.id,"body {\n    font-family: 'Open Sans', sans-serif;\n}\n\nbutton {\n    background: none;\n    border: 0px;\n    width: 100px;\n    height: 30px;\n    font-size: 1.2em;\n}\n\n.tabGroup {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n}\n\n.active {\n    border-bottom: 2px solid darkcyan;\n    font-weight: bold;\n}\n\n#content>div:last-of-type {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}",""]);const i=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&c[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],l=r.base?s[0]+r.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=n(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,r);r.byIndex=i,t.splice(i,0,{identifier:u,updater:m,references:1})}c.push(u)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var s=r(e,o),l=0;l<a.length;l++){var d=n(a[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{const e=n.p+"edb5c9ed29bcf79b6f68.png",t=()=>{let t=document.createElement("div"),n=document.createElement("h1"),r=document.createElement("img"),o=document.createElement("p");return n.innerText="Bagels!",r.src=e,o.innerText="Bagels! serve the freshest and flavorful bagels! Come try them today.",t.appendChild(n),t.appendChild(r),t.appendChild(o),t};var r=n(379),o=n.n(r),a=n(795),c=n.n(a),i=n(569),s=n.n(i),l=n(565),d=n.n(l),u=n(216),p=n.n(u),f=n(589),m=n.n(f),h=n(426),v={};v.styleTagTransform=m(),v.setAttributes=d(),v.insert=s().bind(null,"head"),v.domAPI=c(),v.insertStyleElement=p(),o()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals;const b=document.getElementById("content");let y=document.createElement("div"),g=document.createElement("button"),C=document.createElement("button"),x=document.createElement("button");g.addEventListener("click",(()=>{b.removeChild(b.lastChild),b.appendChild(t()),E("home")})),C.addEventListener("click",(()=>{b.removeChild(b.lastChild),b.appendChild((()=>{let e=document.createElement("div"),t=document.createElement("h2");return t.innerText="Menu",e.appendChild(t),e})()),E("menu")})),x.addEventListener("click",(()=>{b.removeChild(b.lastChild),b.appendChild((()=>{let e=document.createElement("div"),t=document.createElement("h2");return t.innerText="Contact Us",e.appendChild(t),e})()),E("contact")}));const E=e=>{switch(g.classList="",C.classList="",x.classList="",e){case"home":g.classList="active";break;case"menu":C.classList="active";break;case"contact":x.classList="active";break;default:console.error("Should not be able to come here.",1)}};g.textContent="Home",C.textContent="Menu",x.textContent="Contact",y.appendChild(g),y.appendChild(C),y.appendChild(x),y.classList="tabGroup",b.appendChild(y),b.appendChild(t()),E("home")})()})();