(()=>{"use strict";var n={28:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),c=t(667),u=t.n(c),s=new URL(t(760),t.b),d=a()(o()),p=u()(s);d.push([n.id,`* {\n    margin: 0px;\n}\n:root {\n    --font_pacifico: 'Pacifico', cursive;\n    --font_ubuntu: 'Ubuntu', sans-serif;\n}\n#header {\n    position: absolute;\n    top: 30px;\n    margin-top: 50px;\n    display: flex;\n    justify-content: center;\n    background-color: rgba(0,0,0,0.8);\n    \n    margin: 0px;\n    height: 50px;\n    width: 100vw;\n}\n\n.menu-button {\n    margin: 0px 2px 0px 2px;\n    width: 100px;\n    font-family: var(--font_ubuntu);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    outline: 0;\n    cursor: pointer;\n    text-align: center;\n    font-size: 500px;\n    color: #fff;\n    background-color: #ff4742;\n    box-shadow: rgba(0, 0, 0, 0.07) 0px 2px 4px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1.5px 0px;\n    font-size: 16px;\n    font-weight: 900;\n    height: 100%;\n}\n.menu-button:hover{\n    border-bottom: 3px solid darkorange;\n    height: 93%;\n    background-color: #fa6761;\n    color: #ffffff;\n}\n/*--------------- HOME -----------------*/\n#home-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    width: 100vw;\n    background-image: url(${p});\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n#home-container > #about-container{\n    display: flex;\n    flex-direction: column;\n    width: 50vw;\n    height: 700px;\n    background-color: #ff4742;\n}\n#about-container > #logo {\n    font-family: var(--font_pacifico);\n    color: #fa6761;\n    font-weight: 800;\n    font-size: 100px;\n    width: 100%;\n    \n    text-align: center;\n    background-color: #fff;\n}\n\n\n`,""]);const l=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(a[u]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var u=n[c],s=r.base?u[0]+r.base:u[0],d=i[s]||0,p="".concat(s," ").concat(d);i[s]=d+1;var l=t(p),f={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==l)e[l].references++,e[l].updater(f);else{var h=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var u=r(n,o),s=0;s<i.length;s++){var d=t(i[s]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=u}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},760:(n,e,t)=>{n.exports=t.p+"f6e620d10d3df4fc7382.jpg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(569),a=t.n(i),c=t(565),u=t.n(c),s=t(216),d=t.n(s),p=t(589),l=t.n(p),f=t(28),h={};function m(){const n=document.querySelector("#content"),e=document.createElement("div");e.setAttribute("id","home-container");const t=document.createElement("div");t.setAttribute("id","about-container");const r=document.createElement("div");r.setAttribute("id","logo"),r.innerHTML="Dante Redd";const o=document.createElement("div");o.setAttribute("id","description"),n.appendChild(e),e.appendChild(t),t.appendChild(r),t.appendChild(o)}h.styleTagTransform=l(),h.setAttributes=u(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const v=document.querySelector("#home-button"),g=document.querySelector("#food-button"),b=document.querySelector("#contact-button");v.addEventListener("click",m),g.addEventListener("click",(function(){})),b.addEventListener("click",(function(){})),m()})()})();