(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var r=n.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"edb5c9ed29bcf79b6f68.png",n=()=>{let e=document.createElement("div"),n=document.createElement("h1"),r=document.createElement("img"),d=document.createElement("p");return n.innerText="Bagels!",r.src=t,d.innerText="Bagels! serve the freshest and flavorful bagels! Come try them today.",e.appendChild(n),e.appendChild(r),e.appendChild(d),e},r=document.getElementById("content");let d=document.createElement("div"),c=document.createElement("button"),l=document.createElement("button"),i=document.createElement("button");c.addEventListener("click",(()=>{r.removeChild(r.lastChild),r.appendChild(n())})),l.addEventListener("click",(()=>{r.removeChild(r.lastChild),r.appendChild((()=>{let e=document.createElement("div"),t=document.createElement("h2");return t.innerText="Menu",e.appendChild(t),e})())})),i.addEventListener("click",(()=>{r.removeChild(r.lastChild),r.appendChild((()=>{let e=document.createElement("div"),t=document.createElement("h2");return t.innerText="Contact Us",e.appendChild(t),e})())})),c.textContent="Home",l.textContent="Menu",i.textContent="Contact",d.appendChild(c),d.appendChild(l),d.appendChild(i),r.appendChild(d),r.appendChild(n())})();