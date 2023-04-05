<<<<<<< HEAD
(()=>{"use strict";var e={426:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(81),o=r.n(n),i=r(645),a=r.n(i)()(o());a.push([e.id,"* {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  background-color: #f1f2f5;\r\n}\r\n\r\n.main-list {\r\n  width: 40%;\r\n  background-color: #fff;\r\n  margin: 2rem auto;\r\n  border-radius: 3px;\r\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n.today,\r\n.add-new,\r\n.todo-item {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  border-bottom: 2px solid #f1f2f5;\r\n  align-items: center;\r\n}\r\n\r\n.todo-item,\r\n.add-new {\r\n  min-height: 66px !important;\r\n}\r\n\r\n.todo-item:last-of-type {\r\n  border-bottom: 2px solid #fff;\r\n}\r\n\r\n.today-content {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 66px;\r\n  border-bottom: 2px solid #f1f2f5;\r\n}\r\n\r\n.white-height {\r\n  display: flex;\r\n  min-height: 4rem;\r\n}\r\n\r\n.clear {\r\n  height: 68px;\r\n  line-height: 68px;\r\n  background-color: #e8e8e9;\r\n  text-align: center;\r\n}\r\n\r\n#clear-text {\r\n  text-decoration: none;\r\n  color: rgb(24, 24, 24);\r\n  padding: 0.5rem;\r\n}\r\n\r\n#clear-text:hover {\r\n  color: #36b0e9;\r\n  transform: scale(1.4);\r\n  transition: 0.4s;\r\n}\r\n\r\n#new-item {\r\n  font-size: 1rem;\r\n  line-height: 3rem;\r\n  border: none;\r\n  width: 90%;\r\n}\r\n\r\n.no-outline {\r\n  padding: 0 1rem;\r\n}\r\n\r\n.no-outline:focus {\r\n  outline: none;\r\n}\r\n\r\n.check-description {\r\n  display: flex;\r\n  align-content: center;\r\n  column-gap: 0.5rem;\r\n  width: 90%;\r\n}\r\n\r\ntextarea {\r\n  outline: none;\r\n  border: none;\r\n  resize: none;\r\n  overflow: hidden;\r\n  width: 100%;\r\n  line-height: 1.5rem;\r\n  word-wrap: break-word;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-style: italic;\r\n  font-size: 1rem;\r\n}\r\n\r\n.view {\r\n  width: 100%;\r\n  margin: 0 0.5rem;\r\n  padding-top: 0.5rem;\r\n}\r\n\r\n.fa-square,\r\n.fa-check {\r\n  cursor: pointer;\r\n  padding: 0.5rem 1rem 1rem 1rem;\r\n}\r\n\r\n.fa-level-down-alt {\r\n  transform: rotate(90deg);\r\n  position: absolute;\r\n  right: calc(30%);\r\n  padding: 1rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.fa-sync,\r\n.fa-ellipsis-v,\r\n.fa-trash-alt {\r\n  padding: 1rem;\r\n}\r\n\r\n.fa-sync:hover {\r\n  color: rgb(105, 223, 105);\r\n  transition: 0.4s;\r\n  transform: rotate(360deg);\r\n  cursor: pointer;\r\n}\r\n\r\n.fa-trash-alt:hover {\r\n  color: rgb(212, 58, 58);\r\n  transform: scale(1.25);\r\n  transition: all 0.2s;\r\n  cursor: pointer;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.heading {\r\n  padding-left: 1rem;\r\n  font-weight: 600;\r\n  font-size: 1.4rem;\r\n}",""]);const l=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(n)for(var l=0;l<this.length;l++){var c=this[l][0];null!=c&&(a[c]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);n&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var i={},a=[],l=0;l<e.length;l++){var c=e[l],s=n.base?c[0]+n.base:c[0],d=i[s]||0,u="".concat(s," ").concat(d);i[s]=d+1;var f=r(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)t[f].references++,t[f].updater(m);else{var p=o(m,n);n.byIndex=l,t.splice(l,0,{identifier:u,updater:p,references:1})}a.push(u)}return a}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var i=n(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var l=r(i[a]);t[l].references--}for(var c=n(e,o),s=0;s<i.length;s++){var d=r(i[s]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=c}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={id:n,exports:{}};return e[n](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0,(()=>{var e=r(379),t=r.n(e),n=r(795),o=r.n(n),i=r(569),a=r.n(i),l=r(565),c=r.n(l),s=r(216),d=r.n(s),u=r(589),f=r.n(u),m=r(426),p={};p.styleTagTransform=f(),p.setAttributes=c(),p.insert=a().bind(null,"head"),p.domAPI=o(),p.insertStyleElement=d(),t()(m.Z,p),m.Z&&m.Z.locals&&m.Z.locals;const h=[];let y,g,v=document.querySelectorAll(".fa-square"),b=document.querySelectorAll(".fa-check"),S=document.querySelectorAll(".todo");function x(){if(0===localStorage.length)localStorage.clear();else{const e=JSON.parse(localStorage.getItem("toDoList"));h.length=0,h.push(...e)}return h}function A(){const e=x();v=document.querySelectorAll(".fa-square"),b=document.querySelectorAll(".fa-check"),S=document.querySelectorAll(".todo");for(let t=0;t<v.length;t+=1)e[t].completed?(b[t].style.display="block",b[t].style.color="#36B0E9",v[t].style.display="none",S[t].style.textDecoration="line-through",S[t].style.color="lightgrey"):(b[t].style.display="none",v[t].style.display="block",S[t].style.textDecoration="none",S[t].style.color="black")}function q(){const e=v[v.length-1];e.addEventListener("click",(()=>{g=e.getAttribute("data-id"),h[+g].completed=!0,localStorage.setItem("toDoList",JSON.stringify(h)),A()}));const t=b[b.length-1];t.addEventListener("click",(()=>{y=t.getAttribute("data-id"),h[+y].completed=!1,localStorage.setItem("toDoList",JSON.stringify(h)),A()}))}let w,k=document.querySelectorAll(".todo"),L=document.querySelectorAll(".fa-ellipsis-v"),E=document.querySelectorAll(".fa-trash-alt"),I=document.querySelectorAll(".todo-item"),N=document.querySelectorAll(".label"),C=document.querySelectorAll(".fa-square"),O=document.querySelectorAll(".fa-check");function T(){k=document.querySelectorAll(".todo"),L=document.querySelectorAll(".fa-ellipsis-v"),E=document.querySelectorAll(".fa-trash-alt"),I=document.querySelectorAll(".todo-item"),N=document.querySelectorAll(".label"),C=document.querySelectorAll(".fa-square"),O=document.querySelectorAll(".fa-check")}function D(e){T();const t=x();for(let r=e;r<t.length;r+=1)t[r].index=r,I[r].setAttribute("data-id",r),C[r].setAttribute("data-id",r),O[r].setAttribute("data-id",r),L[r].setAttribute("data-id",r),E[r].setAttribute("data-id",r),N[r].setAttribute("for",r),k[r].setAttribute("id",r);localStorage.setItem("toDoList",JSON.stringify(t)),x()}function J(e){k=document.querySelectorAll(".todo"),void 0===e&&(e=k),e.forEach((e=>{e.addEventListener("click",(()=>{w=+e.getAttribute("id");const t=e.parentNode.parentNode.parentNode,r=t.querySelector(".fa-ellipsis-v"),n=t.querySelector(".fa-trash-alt");t.style.backgroundColor="lightyellow",e.style.backgroundColor="lightyellow",r.classList.add("hide"),n.classList.remove("hide"),n.addEventListener("mousedown",(()=>{const e=x();t.remove(),e.splice(w,1),localStorage.setItem("toDoList",JSON.stringify(e)),D(w),A(),w=void 0})),e.addEventListener("keyup",(()=>{const e=x(),r=t.querySelector(".todo").value;e[w].description=r,localStorage.setItem("toDoList",JSON.stringify(e))})),e.addEventListener("focusout",(()=>{t.style.backgroundColor="white",e.style.backgroundColor="white",r.classList.remove("hide"),n.classList.add("hide")}))}))}))}function M(e,t=!1,r=0){this.description=e,this.completed=t,this.index=r}const $=document.querySelector(".fa-level-down-alt");let j=document.querySelectorAll(".todo-item");const H=document.querySelector(".full-list"),Z=document.getElementById("new-item");let z=document.querySelectorAll(".todo"),P=0,B="";function F(){j=document.querySelectorAll(".todo-item"),P=j.length;const e=document.createElement("div");e.classList.add("todo-item","white-height"),e.setAttribute("data-id",`${P}`),e.innerHTML=`\n  <div class='check-description'>\n    <i class='far fa-square' data-id='${P}'></i>\n    <i class='fas fa-check' data-id='${P}'></i>\n    <div class='view'>\n      <label class='label' for='${P}'></label>\n      <textarea class='todo' title='description' maxlength='128' id='${P}'></textarea>\n    </div>\n  </div>\n  <i class='fas fa-ellipsis-v' data-id='${P}'></i>\n  <i class="far fa-trash-alt hide" data-id='${P}'></i>\n  `,H.appendChild(e)}x(),function(){for(let e=0;e<h.length;e+=1)F(),z=document.querySelectorAll(".todo"),z[e].innerText=h[e].description,A(),q();(function(){const e=()=>{if(B=Z.value,""!==B){Z.value="",$.addEventListener("click",(()=>{Z.value=""})),F(),z=document.querySelectorAll(".todo");const e=z[P];e.innerText=B,h.push(new M(B,!1,P)),localStorage.setItem("toDoList",JSON.stringify(h)),j=document.querySelectorAll(".todo-item"),P=j.length,A(),q(),J([e])}};Z.addEventListener("keyup",(({key:t})=>{"Enter"===t&&e()})),Z.addEventListener("focusout",e)})(),P=h.length}(),J(),document.getElementById("clear-text").addEventListener("click",(()=>{const e=x();for(let t=0;t<e.length;t+=1)!0===e[t].completed&&(T(),I[t].remove(),e.splice(t,1),localStorage.setItem("toDoList",JSON.stringify(e)),x(),D(t),A(),t-=1)}))})()})();
=======
"use strict";
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  background-color: #f1f2f5;\n}\n\n.main-list {\n  width: 40%;\n  background-color: #fff;\n  margin: 2rem auto;\n  border-radius: 3px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n\n.today,\n.add-new,\n.todo-item {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 2px solid #f1f2f5;\n  align-items: center;\n}\n\n.todo-item,\n.add-new {\n  min-height: 66px;\n}\n\n.todo-item:last-of-type {\n  border-bottom: 2px solid #fff;\n}\n\n.today-content {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 66px;\n  border-bottom: 2px solid #f1f2f5;\n}\n\n.white-height {\n  display: flex;\n  min-height: 4rem;\n}\n\n.clear {\n  height: 68px;\n  line-height: 68px;\n  background-color: #e8e8e9;\n  text-align: center;\n}\n\n#clear-text {\n  text-decoration: none;\n  color: rgb(24, 24, 24);\n  padding: 0.5rem;\n}\n\n#clear-text:hover {\n  color: #36b0e9;\n  transform: scale(1.4);\n  transition: 0.4s;\n}\n\n#new-item {\n  font-size: 1rem;\n  line-height: 3rem;\n  border: none;\n  width: 90%;\n}\n\n.no-outline {\n  padding: 0 1rem;\n}\n\n.no-outline:focus {\n  outline: none;\n}\n\n.check-description {\n  display: flex;\n  align-content: center;\n  column-gap: 0.5rem;\n  width: 90%;\n}\n\ntextarea {\n  outline: none;\n  border: none;\n  resize: none;\n  overflow: hidden;\n  width: 100%;\n  line-height: 1.5rem;\n  word-wrap: break-word;\n  font-family: Arial, Helvetica, sans-serif;\n  font-style: italic;\n  font-size: 1rem;\n}\n\n.view {\n  width: 100%;\n  margin: 0 0.5rem;\n  padding-top: 0.5rem;\n}\n\n.fa-square,\n.fa-check {\n  cursor: pointer;\n  padding: 0.5rem 1rem 1rem 1rem;\n}\n\n.fa-level-down-alt {\n  transform: rotate(90deg);\n  position: absolute;\n  right: calc(30%);\n  padding: 1rem;\n  cursor: pointer;\n}\n\n.fa-sync,\n.fa-ellipsis-v,\n.fa-trash-alt {\n  padding: 1rem;\n}\n\n.fa-sync:hover {\n  color: rgb(105, 223, 105);\n  transition: 0.4s;\n  transform: rotate(360deg);\n  cursor: pointer;\n}\n\n.fa-trash-alt:hover {\n  color: rgb(212, 58, 58);\n  transform: scale(1.25);\n  transition: all 0.2s;\n  cursor: pointer;\n}\n\n.hide {\n  display: none;\n}\n\n.heading {\n  padding-left: 1rem;\n  font-weight: 600;\n  font-size: 1.4rem;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;AACX;;AAEA;EACE,yCAAyC;EACzC,yBAAyB;AAC3B;;AAEA;EACE,UAAU;EACV,sBAAsB;EACtB,iBAAiB;EACjB,kBAAkB;EAClB,yCAAyC;AAC3C;;AAEA;;;EAGE,WAAW;EACX,aAAa;EACb,8BAA8B;EAC9B,gCAAgC;EAChC,mBAAmB;AACrB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,YAAY;EACZ,gCAAgC;AAClC;;AAEA;EACE,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,YAAY;EACZ,gBAAgB;EAChB,WAAW;EACX,mBAAmB;EACnB,qBAAqB;EACrB,yCAAyC;EACzC,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;;EAEE,eAAe;EACf,8BAA8B;AAChC;;AAEA;EACE,wBAAwB;EACxB,kBAAkB;EAClB,gBAAgB;EAChB,aAAa;EACb,eAAe;AACjB;;AAEA;;;EAGE,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,gBAAgB;EAChB,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,uBAAuB;EACvB,sBAAsB;EACtB,oBAAoB;EACpB,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;AACnB","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  background-color: #f1f2f5;\n}\n\n.main-list {\n  width: 40%;\n  background-color: #fff;\n  margin: 2rem auto;\n  border-radius: 3px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n\n.today,\n.add-new,\n.todo-item {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 2px solid #f1f2f5;\n  align-items: center;\n}\n\n.todo-item,\n.add-new {\n  min-height: 66px;\n}\n\n.todo-item:last-of-type {\n  border-bottom: 2px solid #fff;\n}\n\n.today-content {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 66px;\n  border-bottom: 2px solid #f1f2f5;\n}\n\n.white-height {\n  display: flex;\n  min-height: 4rem;\n}\n\n.clear {\n  height: 68px;\n  line-height: 68px;\n  background-color: #e8e8e9;\n  text-align: center;\n}\n\n#clear-text {\n  text-decoration: none;\n  color: rgb(24, 24, 24);\n  padding: 0.5rem;\n}\n\n#clear-text:hover {\n  color: #36b0e9;\n  transform: scale(1.4);\n  transition: 0.4s;\n}\n\n#new-item {\n  font-size: 1rem;\n  line-height: 3rem;\n  border: none;\n  width: 90%;\n}\n\n.no-outline {\n  padding: 0 1rem;\n}\n\n.no-outline:focus {\n  outline: none;\n}\n\n.check-description {\n  display: flex;\n  align-content: center;\n  column-gap: 0.5rem;\n  width: 90%;\n}\n\ntextarea {\n  outline: none;\n  border: none;\n  resize: none;\n  overflow: hidden;\n  width: 100%;\n  line-height: 1.5rem;\n  word-wrap: break-word;\n  font-family: Arial, Helvetica, sans-serif;\n  font-style: italic;\n  font-size: 1rem;\n}\n\n.view {\n  width: 100%;\n  margin: 0 0.5rem;\n  padding-top: 0.5rem;\n}\n\n.fa-square,\n.fa-check {\n  cursor: pointer;\n  padding: 0.5rem 1rem 1rem 1rem;\n}\n\n.fa-level-down-alt {\n  transform: rotate(90deg);\n  position: absolute;\n  right: calc(30%);\n  padding: 1rem;\n  cursor: pointer;\n}\n\n.fa-sync,\n.fa-ellipsis-v,\n.fa-trash-alt {\n  padding: 1rem;\n}\n\n.fa-sync:hover {\n  color: rgb(105, 223, 105);\n  transition: 0.4s;\n  transform: rotate(360deg);\n  cursor: pointer;\n}\n\n.fa-trash-alt:hover {\n  color: rgb(212, 58, 58);\n  transform: scale(1.25);\n  transition: all 0.2s;\n  cursor: pointer;\n}\n\n.hide {\n  display: none;\n}\n\n.heading {\n  padding-left: 1rem;\n  font-weight: 600;\n  font-size: 1.4rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/addNew.js":
/*!***********************!*\
  !*** ./src/addNew.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNewItem": () => (/* binding */ addNewItem),
/* harmony export */   "context": () => (/* binding */ context),
/* harmony export */   "displayStored": () => (/* binding */ displayStored)
/* harmony export */ });
/* harmony import */ var _status_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./status.js */ "./src/status.js");
/* harmony import */ var _removeItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removeItem.js */ "./src/removeItem.js");



function ToDoItem(description, completed = false, index = 0) {
  this.description = description;
  this.completed = completed;
  this.index = index;
}

const enter = document.querySelector('.fa-level-down-alt');
let toDoDivsAll = document.querySelectorAll('.todo-item');
const fullList = document.querySelector('.full-list');
const newItem = document.getElementById('new-item');
let toDoText = document.querySelectorAll('.todo');
let numberIndex = 0;
let itemText = '';

function hitEnter() {
  enter.addEventListener('click', () => {
    newItem.value = '';
  });
}

function context() {
  toDoDivsAll = document.querySelectorAll('.todo-item');
  numberIndex = toDoDivsAll.length;
  const toDoDiv = document.createElement('div');
  toDoDiv.classList.add('todo-item', 'white-height');
  toDoDiv.setAttribute('data-id', `${numberIndex}`);
  toDoDiv.innerHTML = `
  <div class='check-description'>
    <i class='far fa-square' data-id='${numberIndex}'></i>
    <i class='fas fa-check' data-id='${numberIndex}'></i>
    <div class='view'>
      <label class='label' for='${numberIndex}'></label>
      <textarea class='todo' title='description' maxlength='128' id='${numberIndex}'></textarea>
    </div>
  </div>
  <i class='fas fa-ellipsis-v' data-id='${numberIndex}'></i>
  <i class="far fa-trash-alt hide" data-id='${numberIndex}'></i>
  `;
  fullList.appendChild(toDoDiv);
}

function addNewItem() {
  const onFocusOut = () => {
    itemText = newItem.value;
    if (itemText !== '') {
      newItem.value = '';
      hitEnter();
      context();
      toDoText = document.querySelectorAll('.todo');
      const textArea = toDoText[numberIndex];
      textArea.innerText = itemText;
      _status_js__WEBPACK_IMPORTED_MODULE_0__.toDoItems.push(new ToDoItem(itemText, false, numberIndex));
      localStorage.setItem('toDoList', JSON.stringify(_status_js__WEBPACK_IMPORTED_MODULE_0__.toDoItems));
      toDoDivsAll = document.querySelectorAll('.todo-item');
      numberIndex = toDoDivsAll.length;
      (0,_status_js__WEBPACK_IMPORTED_MODULE_0__.showItems)();
      (0,_status_js__WEBPACK_IMPORTED_MODULE_0__.checkButton)();
      (0,_removeItem_js__WEBPACK_IMPORTED_MODULE_1__.editToDo)([textArea]);
    }
  };
  newItem.addEventListener('keyup', ({ key }) => {
    if (key === 'Enter') {
      onFocusOut();
    }
  });
  newItem.addEventListener('focusout', onFocusOut);
}

function displayStored() {
  for (let i = 0; i < _status_js__WEBPACK_IMPORTED_MODULE_0__.toDoItems.length; i += 1) {
    context();
    toDoText = document.querySelectorAll('.todo');
    toDoText[i].innerText = _status_js__WEBPACK_IMPORTED_MODULE_0__.toDoItems[i].description;
    (0,_status_js__WEBPACK_IMPORTED_MODULE_0__.showItems)();
    (0,_status_js__WEBPACK_IMPORTED_MODULE_0__.checkButton)();
  }
  addNewItem();
  numberIndex = _status_js__WEBPACK_IMPORTED_MODULE_0__.toDoItems.length;
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _status_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./status.js */ "./src/status.js");
/* harmony import */ var _addNew_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addNew.js */ "./src/addNew.js");
/* harmony import */ var _removeItem_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./removeItem.js */ "./src/removeItem.js");





function main() {
  (0,_status_js__WEBPACK_IMPORTED_MODULE_1__.getStatus)();
  (0,_addNew_js__WEBPACK_IMPORTED_MODULE_2__.displayStored)();
  (0,_removeItem_js__WEBPACK_IMPORTED_MODULE_3__.editToDo)();
  (0,_removeItem_js__WEBPACK_IMPORTED_MODULE_3__.clearCompleted)();
}

main();

/***/ }),

/***/ "./src/removeItem.js":
/*!***************************!*\
  !*** ./src/removeItem.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearCompleted": () => (/* binding */ clearCompleted),
/* harmony export */   "editToDo": () => (/* binding */ editToDo)
/* harmony export */ });
/* harmony import */ var _status_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./status.js */ "./src/status.js");


let textFields = document.querySelectorAll('.todo');
let dotsIcon = document.querySelectorAll('.fa-ellipsis-v');
let trashIcon = document.querySelectorAll('.fa-trash-alt');
let allDivs = document.querySelectorAll('.todo-item');
let label = document.querySelectorAll('.label');
let checkBtn = document.querySelectorAll('.fa-square');
let checkMark = document.querySelectorAll('.fa-check');
let fieldId;

function getCurrent() {
  textFields = document.querySelectorAll('.todo');
  dotsIcon = document.querySelectorAll('.fa-ellipsis-v');
  trashIcon = document.querySelectorAll('.fa-trash-alt');
  allDivs = document.querySelectorAll('.todo-item');
  label = document.querySelectorAll('.label');
  checkBtn = document.querySelectorAll('.fa-square');
  checkMark = document.querySelectorAll('.fa-check');
}

function sortToDo(fieldId) {
  getCurrent();
  const unsortedItems = (0,_status_js__WEBPACK_IMPORTED_MODULE_0__.getStatus)();
  for (let i = fieldId; i < unsortedItems.length; i += 1) {
    unsortedItems[i].index = i;
    allDivs[i].setAttribute('data-id', i);
    checkBtn[i].setAttribute('data-id', i);
    checkMark[i].setAttribute('data-id', i);
    dotsIcon[i].setAttribute('data-id', i);
    trashIcon[i].setAttribute('data-id', i);
    label[i].setAttribute('for', i);
    textFields[i].setAttribute('id', i);
  }
  localStorage.setItem('toDoList', JSON.stringify(unsortedItems));
  (0,_status_js__WEBPACK_IMPORTED_MODULE_0__.getStatus)();
}

function editToDo(textFieldsLocal) {
  textFields = document.querySelectorAll('.todo');
  if (textFieldsLocal === undefined) {
    textFieldsLocal = textFields;
  }
  // Select a todo item field
  textFieldsLocal.forEach((field) => {
    field.addEventListener('click', () => {
      fieldId = +field.getAttribute('id');
      const listItem = field.parentNode.parentNode.parentNode;
      const dotsIcon = listItem.querySelector('.fa-ellipsis-v');
      const trashIcon = listItem.querySelector('.fa-trash-alt');
      listItem.style.backgroundColor = 'lightyellow';
      field.style.backgroundColor = 'lightyellow';
      dotsIcon.classList.add('hide');
      trashIcon.classList.remove('hide');
      // Delete function
      trashIcon.addEventListener('mousedown', () => {
        const storedItems = (0,_status_js__WEBPACK_IMPORTED_MODULE_0__.getStatus)();
        listItem.remove();
        storedItems.splice(fieldId, 1);
        localStorage.setItem('toDoList', JSON.stringify(storedItems));
        sortToDo(fieldId);
        (0,_status_js__WEBPACK_IMPORTED_MODULE_0__.showItems)();
        fieldId = undefined;
      });
      // Edit todo item
      field.addEventListener('keyup', () => {
        const storedItems = (0,_status_js__WEBPACK_IMPORTED_MODULE_0__.getStatus)();
        const editedString = listItem.querySelector('.todo').value;
        storedItems[fieldId].description = editedString;
        localStorage.setItem('toDoList', JSON.stringify(storedItems));
      });
      // Toggle the background and icons on focus
      field.addEventListener('focusout', () => {
        listItem.style.backgroundColor = 'white';
        field.style.backgroundColor = 'white';
        dotsIcon.classList.remove('hide');
        trashIcon.classList.add('hide');
      });
    });
  });
}

function clearCompleted() {
  const btnClear = document.getElementById('clear-text');
  btnClear.addEventListener('click', () => {
    const markedItems = (0,_status_js__WEBPACK_IMPORTED_MODULE_0__.getStatus)();
    for (let i = 0; i < markedItems.length; i += 1) {
      if (markedItems[i].completed === true) {
        getCurrent();
        allDivs[i].remove();
        markedItems.splice(i, 1);
        localStorage.setItem('toDoList', JSON.stringify(markedItems));
        (0,_status_js__WEBPACK_IMPORTED_MODULE_0__.getStatus)();
        sortToDo(i);
        (0,_status_js__WEBPACK_IMPORTED_MODULE_0__.showItems)();
        i -= 1;
      }
    }
  });
}



/***/ }),

/***/ "./src/status.js":
/*!***********************!*\
  !*** ./src/status.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkButton": () => (/* binding */ checkButton),
/* harmony export */   "getStatus": () => (/* binding */ getStatus),
/* harmony export */   "showItems": () => (/* binding */ showItems),
/* harmony export */   "toDoItems": () => (/* binding */ toDoItems)
/* harmony export */ });
const toDoItems = [];

let checkBtn = document.querySelectorAll('.fa-square');
let checkMark = document.querySelectorAll('.fa-check');
let toDoText = document.querySelectorAll('.todo');
let markId;
let btnId;
function getStatus() {
  if (localStorage.length === 0 || localStorage.getItem('toDoList') === null) {
    localStorage.clear();
  } else {
    const storedToDoList = JSON.parse(localStorage.getItem('toDoList'));
    toDoItems.length = 0;
    toDoItems.push(...storedToDoList);
  }
  return toDoItems;
}

function showItems() {
  const currentItems = getStatus();
  checkBtn = document.querySelectorAll('.fa-square');
  checkMark = document.querySelectorAll('.fa-check');
  toDoText = document.querySelectorAll('.todo');
  for (let i = 0; i < checkBtn.length; i += 1) {
    if (currentItems[i].completed) {
      checkMark[i].style.display = 'block';
      checkMark[i].style.color = '#36B0E9';
      checkBtn[i].style.display = 'none';
      toDoText[i].style.textDecoration = 'line-through';
      toDoText[i].style.color = 'lightgrey';
    } else {
      checkMark[i].style.display = 'none';
      checkBtn[i].style.display = 'block';
      toDoText[i].style.textDecoration = 'none';
      toDoText[i].style.color = 'black';
    }
  }
}

function checkButton() {
  const btn = checkBtn[checkBtn.length - 1];
  btn.addEventListener('click', () => {
    btnId = btn.getAttribute('data-id');
    toDoItems[+btnId].completed = true;
    localStorage.setItem('toDoList', JSON.stringify(toDoItems));
    showItems();
  });
  const mark = checkMark[checkMark.length - 1];
  mark.addEventListener('click', () => {
    markId = mark.getAttribute('data-id');
    toDoItems[+markId].completed = false;
    localStorage.setItem('toDoList', JSON.stringify(toDoItems));
    showItems();
  });
}




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSw2Q0FBNkMsZUFBZSxjQUFjLEdBQUcsVUFBVSw4Q0FBOEMsOEJBQThCLEdBQUcsZ0JBQWdCLGVBQWUsMkJBQTJCLHNCQUFzQix1QkFBdUIsOENBQThDLEdBQUcsb0NBQW9DLGdCQUFnQixrQkFBa0IsbUNBQW1DLHFDQUFxQyx3QkFBd0IsR0FBRywyQkFBMkIscUJBQXFCLEdBQUcsNkJBQTZCLGtDQUFrQyxHQUFHLG9CQUFvQixrQkFBa0IsbUNBQW1DLHdCQUF3QixpQkFBaUIscUNBQXFDLEdBQUcsbUJBQW1CLGtCQUFrQixxQkFBcUIsR0FBRyxZQUFZLGlCQUFpQixzQkFBc0IsOEJBQThCLHVCQUF1QixHQUFHLGlCQUFpQiwwQkFBMEIsMkJBQTJCLG9CQUFvQixHQUFHLHVCQUF1QixtQkFBbUIsMEJBQTBCLHFCQUFxQixHQUFHLGVBQWUsb0JBQW9CLHNCQUFzQixpQkFBaUIsZUFBZSxHQUFHLGlCQUFpQixvQkFBb0IsR0FBRyx1QkFBdUIsa0JBQWtCLEdBQUcsd0JBQXdCLGtCQUFrQiwwQkFBMEIsdUJBQXVCLGVBQWUsR0FBRyxjQUFjLGtCQUFrQixpQkFBaUIsaUJBQWlCLHFCQUFxQixnQkFBZ0Isd0JBQXdCLDBCQUEwQiw4Q0FBOEMsdUJBQXVCLG9CQUFvQixHQUFHLFdBQVcsZ0JBQWdCLHFCQUFxQix3QkFBd0IsR0FBRyw0QkFBNEIsb0JBQW9CLG1DQUFtQyxHQUFHLHdCQUF3Qiw2QkFBNkIsdUJBQXVCLHFCQUFxQixrQkFBa0Isb0JBQW9CLEdBQUcsK0NBQStDLGtCQUFrQixHQUFHLG9CQUFvQiw4QkFBOEIscUJBQXFCLDhCQUE4QixvQkFBb0IsR0FBRyx5QkFBeUIsNEJBQTRCLDJCQUEyQix5QkFBeUIsb0JBQW9CLEdBQUcsV0FBVyxrQkFBa0IsR0FBRyxjQUFjLHVCQUF1QixxQkFBcUIsc0JBQXNCLEdBQUcsU0FBUyxnRkFBZ0YsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE9BQU8sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxPQUFPLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLDZCQUE2QixlQUFlLGNBQWMsR0FBRyxVQUFVLDhDQUE4Qyw4QkFBOEIsR0FBRyxnQkFBZ0IsZUFBZSwyQkFBMkIsc0JBQXNCLHVCQUF1Qiw4Q0FBOEMsR0FBRyxvQ0FBb0MsZ0JBQWdCLGtCQUFrQixtQ0FBbUMscUNBQXFDLHdCQUF3QixHQUFHLDJCQUEyQixxQkFBcUIsR0FBRyw2QkFBNkIsa0NBQWtDLEdBQUcsb0JBQW9CLGtCQUFrQixtQ0FBbUMsd0JBQXdCLGlCQUFpQixxQ0FBcUMsR0FBRyxtQkFBbUIsa0JBQWtCLHFCQUFxQixHQUFHLFlBQVksaUJBQWlCLHNCQUFzQiw4QkFBOEIsdUJBQXVCLEdBQUcsaUJBQWlCLDBCQUEwQiwyQkFBMkIsb0JBQW9CLEdBQUcsdUJBQXVCLG1CQUFtQiwwQkFBMEIscUJBQXFCLEdBQUcsZUFBZSxvQkFBb0Isc0JBQXNCLGlCQUFpQixlQUFlLEdBQUcsaUJBQWlCLG9CQUFvQixHQUFHLHVCQUF1QixrQkFBa0IsR0FBRyx3QkFBd0Isa0JBQWtCLDBCQUEwQix1QkFBdUIsZUFBZSxHQUFHLGNBQWMsa0JBQWtCLGlCQUFpQixpQkFBaUIscUJBQXFCLGdCQUFnQix3QkFBd0IsMEJBQTBCLDhDQUE4Qyx1QkFBdUIsb0JBQW9CLEdBQUcsV0FBVyxnQkFBZ0IscUJBQXFCLHdCQUF3QixHQUFHLDRCQUE0QixvQkFBb0IsbUNBQW1DLEdBQUcsd0JBQXdCLDZCQUE2Qix1QkFBdUIscUJBQXFCLGtCQUFrQixvQkFBb0IsR0FBRywrQ0FBK0Msa0JBQWtCLEdBQUcsb0JBQW9CLDhCQUE4QixxQkFBcUIsOEJBQThCLG9CQUFvQixHQUFHLHlCQUF5Qiw0QkFBNEIsMkJBQTJCLHlCQUF5QixvQkFBb0IsR0FBRyxXQUFXLGtCQUFrQixHQUFHLGNBQWMsdUJBQXVCLHFCQUFxQixzQkFBc0IsR0FBRyxxQkFBcUI7QUFDbjNMO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYmdFO0FBQ3JCOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLFlBQVk7QUFDakQ7QUFDQTtBQUNBLHdDQUF3QyxZQUFZO0FBQ3BELHVDQUF1QyxZQUFZO0FBQ25EO0FBQ0Esa0NBQWtDLFlBQVk7QUFDOUMsdUVBQXVFLFlBQVk7QUFDbkY7QUFDQTtBQUNBLDBDQUEwQyxZQUFZO0FBQ3RELDhDQUE4QyxZQUFZO0FBQzFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sc0RBQWM7QUFDcEIsc0RBQXNELGlEQUFTO0FBQy9EO0FBQ0E7QUFDQSxNQUFNLHFEQUFTO0FBQ2YsTUFBTSx1REFBVztBQUNqQixNQUFNLHdEQUFRO0FBQ2Q7QUFDQTtBQUNBLHVDQUF1QyxLQUFLO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLElBQUksd0RBQWdCLEVBQUU7QUFDeEM7QUFDQTtBQUNBLDRCQUE0QixpREFBUztBQUNyQyxJQUFJLHFEQUFTO0FBQ2IsSUFBSSx1REFBVztBQUNmO0FBQ0E7QUFDQSxnQkFBZ0Isd0RBQWdCO0FBQ2hDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pGcUI7QUFDbUI7QUFDSTtBQUNlOztBQUUzRDtBQUNBLEVBQUUscURBQVM7QUFDWCxFQUFFLHlEQUFhO0FBQ2YsRUFBRSx3REFBUTtBQUNWLEVBQUUsOERBQWM7QUFDaEI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNabUQ7O0FBRW5EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IscURBQVM7QUFDakMsd0JBQXdCLDBCQUEwQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscURBQVM7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIscURBQVM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFEQUFTO0FBQ2pCO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSw0QkFBNEIscURBQVM7QUFDckM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixxREFBUztBQUNqQyxvQkFBb0Isd0JBQXdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFEQUFTO0FBQ2pCO0FBQ0EsUUFBUSxxREFBUztBQUNqQjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixxQkFBcUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFJRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2FkZE5ldy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9yZW1vdmVJdGVtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0YXR1cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYyZjU7XFxufVxcblxcbi5tYWluLWxpc3Qge1xcbiAgd2lkdGg6IDQwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBtYXJnaW46IDJyZW0gYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbn1cXG5cXG4udG9kYXksXFxuLmFkZC1uZXcsXFxuLnRvZG8taXRlbSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2YxZjJmNTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvLWl0ZW0sXFxuLmFkZC1uZXcge1xcbiAgbWluLWhlaWdodDogNjZweDtcXG59XFxuXFxuLnRvZG8taXRlbTpsYXN0LW9mLXR5cGUge1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmY7XFxufVxcblxcbi50b2RheS1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA2NnB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmMWYyZjU7XFxufVxcblxcbi53aGl0ZS1oZWlnaHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1pbi1oZWlnaHQ6IDRyZW07XFxufVxcblxcbi5jbGVhciB7XFxuICBoZWlnaHQ6IDY4cHg7XFxuICBsaW5lLWhlaWdodDogNjhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNjbGVhci10ZXh0IHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiByZ2IoMjQsIDI0LCAyNCk7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbiNjbGVhci10ZXh0OmhvdmVyIHtcXG4gIGNvbG9yOiAjMzZiMGU5O1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuXFxuI25ldy1pdGVtIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAzcmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuXFxuLm5vLW91dGxpbmUge1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbn1cXG5cXG4ubm8tb3V0bGluZTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uY2hlY2stZGVzY3JpcHRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbHVtbi1nYXA6IDAuNXJlbTtcXG4gIHdpZHRoOiA5MCU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICByZXNpemU6IG5vbmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi52aWV3IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwIDAuNXJlbTtcXG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XFxufVxcblxcbi5mYS1zcXVhcmUsXFxuLmZhLWNoZWNrIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtIDFyZW0gMXJlbTtcXG59XFxuXFxuLmZhLWxldmVsLWRvd24tYWx0IHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiBjYWxjKDMwJSk7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZmEtc3luYyxcXG4uZmEtZWxsaXBzaXMtdixcXG4uZmEtdHJhc2gtYWx0IHtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5mYS1zeW5jOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2IoMTA1LCAyMjMsIDEwNSk7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZhLXRyYXNoLWFsdDpob3ZlciB7XFxuICBjb2xvcjogcmdiKDIxMiwgNTgsIDU4KTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmhlYWRpbmcge1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHlDQUF5QztFQUN6Qyx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIseUNBQXlDO0FBQzNDOztBQUVBOzs7RUFHRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixnQ0FBZ0M7RUFDaEMsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHlDQUF5QztFQUN6QyxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGVBQWU7RUFDZiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTs7O0VBR0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMmY1O1xcbn1cXG5cXG4ubWFpbi1saXN0IHtcXG4gIHdpZHRoOiA0MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgbWFyZ2luOiAycmVtIGF1dG87XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG59XFxuXFxuLnRvZGF5LFxcbi5hZGQtbmV3LFxcbi50b2RvLWl0ZW0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmMWYyZjU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kby1pdGVtLFxcbi5hZGQtbmV3IHtcXG4gIG1pbi1oZWlnaHQ6IDY2cHg7XFxufVxcblxcbi50b2RvLWl0ZW06bGFzdC1vZi10eXBlIHtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZmO1xcbn1cXG5cXG4udG9kYXktY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNjZweDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZjFmMmY1O1xcbn1cXG5cXG4ud2hpdGUtaGVpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtaW4taGVpZ2h0OiA0cmVtO1xcbn1cXG5cXG4uY2xlYXIge1xcbiAgaGVpZ2h0OiA2OHB4O1xcbiAgbGluZS1oZWlnaHQ6IDY4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU5O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jY2xlYXItdGV4dCB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogcmdiKDI0LCAyNCwgMjQpO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4jY2xlYXItdGV4dDpob3ZlciB7XFxuICBjb2xvcjogIzM2YjBlOTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbiNuZXctaXRlbSB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBsaW5lLWhlaWdodDogM3JlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiA5MCU7XFxufVxcblxcbi5uby1vdXRsaW5lIHtcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG59XFxuXFxuLm5vLW91dGxpbmU6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmNoZWNrLWRlc2NyaXB0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBjb2x1bW4tZ2FwOiAwLjVyZW07XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcmVzaXplOiBub25lO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4udmlldyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMCAwLjVyZW07XFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbn1cXG5cXG4uZmEtc3F1YXJlLFxcbi5mYS1jaGVjayB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbSAxcmVtIDFyZW07XFxufVxcblxcbi5mYS1sZXZlbC1kb3duLWFsdCB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogY2FsYygzMCUpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZhLXN5bmMsXFxuLmZhLWVsbGlwc2lzLXYsXFxuLmZhLXRyYXNoLWFsdCB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uZmEtc3luYzpob3ZlciB7XFxuICBjb2xvcjogcmdiKDEwNSwgMjIzLCAxMDUpO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mYS10cmFzaC1hbHQ6aG92ZXIge1xcbiAgY29sb3I6IHJnYigyMTIsIDU4LCA1OCk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMjUpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5oZWFkaW5nIHtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHRvRG9JdGVtcywgc2hvd0l0ZW1zLCBjaGVja0J1dHRvbiB9IGZyb20gJy4vc3RhdHVzLmpzJztcbmltcG9ydCB7IGVkaXRUb0RvIH0gZnJvbSAnLi9yZW1vdmVJdGVtLmpzJztcblxuZnVuY3Rpb24gVG9Eb0l0ZW0oZGVzY3JpcHRpb24sIGNvbXBsZXRlZCA9IGZhbHNlLCBpbmRleCA9IDApIHtcbiAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgdGhpcy5pbmRleCA9IGluZGV4O1xufVxuXG5jb25zdCBlbnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYS1sZXZlbC1kb3duLWFsdCcpO1xubGV0IHRvRG9EaXZzQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG8taXRlbScpO1xuY29uc3QgZnVsbExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZnVsbC1saXN0Jyk7XG5jb25zdCBuZXdJdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1pdGVtJyk7XG5sZXQgdG9Eb1RleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kbycpO1xubGV0IG51bWJlckluZGV4ID0gMDtcbmxldCBpdGVtVGV4dCA9ICcnO1xuXG5mdW5jdGlvbiBoaXRFbnRlcigpIHtcbiAgZW50ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbmV3SXRlbS52YWx1ZSA9ICcnO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY29udGV4dCgpIHtcbiAgdG9Eb0RpdnNBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kby1pdGVtJyk7XG4gIG51bWJlckluZGV4ID0gdG9Eb0RpdnNBbGwubGVuZ3RoO1xuICBjb25zdCB0b0RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvRG9EaXYuY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtJywgJ3doaXRlLWhlaWdodCcpO1xuICB0b0RvRGl2LnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGAke251bWJlckluZGV4fWApO1xuICB0b0RvRGl2LmlubmVySFRNTCA9IGBcbiAgPGRpdiBjbGFzcz0nY2hlY2stZGVzY3JpcHRpb24nPlxuICAgIDxpIGNsYXNzPSdmYXIgZmEtc3F1YXJlJyBkYXRhLWlkPScke251bWJlckluZGV4fSc+PC9pPlxuICAgIDxpIGNsYXNzPSdmYXMgZmEtY2hlY2snIGRhdGEtaWQ9JyR7bnVtYmVySW5kZXh9Jz48L2k+XG4gICAgPGRpdiBjbGFzcz0ndmlldyc+XG4gICAgICA8bGFiZWwgY2xhc3M9J2xhYmVsJyBmb3I9JyR7bnVtYmVySW5kZXh9Jz48L2xhYmVsPlxuICAgICAgPHRleHRhcmVhIGNsYXNzPSd0b2RvJyB0aXRsZT0nZGVzY3JpcHRpb24nIG1heGxlbmd0aD0nMTI4JyBpZD0nJHtudW1iZXJJbmRleH0nPjwvdGV4dGFyZWE+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8aSBjbGFzcz0nZmFzIGZhLWVsbGlwc2lzLXYnIGRhdGEtaWQ9JyR7bnVtYmVySW5kZXh9Jz48L2k+XG4gIDxpIGNsYXNzPVwiZmFyIGZhLXRyYXNoLWFsdCBoaWRlXCIgZGF0YS1pZD0nJHtudW1iZXJJbmRleH0nPjwvaT5cbiAgYDtcbiAgZnVsbExpc3QuYXBwZW5kQ2hpbGQodG9Eb0Rpdik7XG59XG5cbmZ1bmN0aW9uIGFkZE5ld0l0ZW0oKSB7XG4gIGNvbnN0IG9uRm9jdXNPdXQgPSAoKSA9PiB7XG4gICAgaXRlbVRleHQgPSBuZXdJdGVtLnZhbHVlO1xuICAgIGlmIChpdGVtVGV4dCAhPT0gJycpIHtcbiAgICAgIG5ld0l0ZW0udmFsdWUgPSAnJztcbiAgICAgIGhpdEVudGVyKCk7XG4gICAgICBjb250ZXh0KCk7XG4gICAgICB0b0RvVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvJyk7XG4gICAgICBjb25zdCB0ZXh0QXJlYSA9IHRvRG9UZXh0W251bWJlckluZGV4XTtcbiAgICAgIHRleHRBcmVhLmlubmVyVGV4dCA9IGl0ZW1UZXh0O1xuICAgICAgdG9Eb0l0ZW1zLnB1c2gobmV3IFRvRG9JdGVtKGl0ZW1UZXh0LCBmYWxzZSwgbnVtYmVySW5kZXgpKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KHRvRG9JdGVtcykpO1xuICAgICAgdG9Eb0RpdnNBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kby1pdGVtJyk7XG4gICAgICBudW1iZXJJbmRleCA9IHRvRG9EaXZzQWxsLmxlbmd0aDtcbiAgICAgIHNob3dJdGVtcygpO1xuICAgICAgY2hlY2tCdXR0b24oKTtcbiAgICAgIGVkaXRUb0RvKFt0ZXh0QXJlYV0pO1xuICAgIH1cbiAgfTtcbiAgbmV3SXRlbS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICh7IGtleSB9KSA9PiB7XG4gICAgaWYgKGtleSA9PT0gJ0VudGVyJykge1xuICAgICAgb25Gb2N1c091dCgpO1xuICAgIH1cbiAgfSk7XG4gIG5ld0l0ZW0uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBvbkZvY3VzT3V0KTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVN0b3JlZCgpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b0RvSXRlbXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb250ZXh0KCk7XG4gICAgdG9Eb1RleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kbycpO1xuICAgIHRvRG9UZXh0W2ldLmlubmVyVGV4dCA9IHRvRG9JdGVtc1tpXS5kZXNjcmlwdGlvbjtcbiAgICBzaG93SXRlbXMoKTtcbiAgICBjaGVja0J1dHRvbigpO1xuICB9XG4gIGFkZE5ld0l0ZW0oKTtcbiAgbnVtYmVySW5kZXggPSB0b0RvSXRlbXMubGVuZ3RoO1xufVxuXG5leHBvcnQgeyBhZGROZXdJdGVtLCBjb250ZXh0LCBkaXNwbGF5U3RvcmVkIH07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBnZXRTdGF0dXMgfSBmcm9tICcuL3N0YXR1cy5qcyc7XG5pbXBvcnQgeyBkaXNwbGF5U3RvcmVkIH0gZnJvbSAnLi9hZGROZXcuanMnO1xuaW1wb3J0IHsgZWRpdFRvRG8sIGNsZWFyQ29tcGxldGVkIH0gZnJvbSAnLi9yZW1vdmVJdGVtLmpzJztcblxuZnVuY3Rpb24gbWFpbigpIHtcbiAgZ2V0U3RhdHVzKCk7XG4gIGRpc3BsYXlTdG9yZWQoKTtcbiAgZWRpdFRvRG8oKTtcbiAgY2xlYXJDb21wbGV0ZWQoKTtcbn1cblxubWFpbigpOyIsImltcG9ydCB7IGdldFN0YXR1cywgc2hvd0l0ZW1zIH0gZnJvbSAnLi9zdGF0dXMuanMnO1xuXG5sZXQgdGV4dEZpZWxkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvJyk7XG5sZXQgZG90c0ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmEtZWxsaXBzaXMtdicpO1xubGV0IHRyYXNoSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYS10cmFzaC1hbHQnKTtcbmxldCBhbGxEaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG8taXRlbScpO1xubGV0IGxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxhYmVsJyk7XG5sZXQgY2hlY2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmEtc3F1YXJlJyk7XG5sZXQgY2hlY2tNYXJrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhLWNoZWNrJyk7XG5sZXQgZmllbGRJZDtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudCgpIHtcbiAgdGV4dEZpZWxkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvJyk7XG4gIGRvdHNJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhLWVsbGlwc2lzLXYnKTtcbiAgdHJhc2hJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhLXRyYXNoLWFsdCcpO1xuICBhbGxEaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG8taXRlbScpO1xuICBsYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sYWJlbCcpO1xuICBjaGVja0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYS1zcXVhcmUnKTtcbiAgY2hlY2tNYXJrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhLWNoZWNrJyk7XG59XG5cbmZ1bmN0aW9uIHNvcnRUb0RvKGZpZWxkSWQpIHtcbiAgZ2V0Q3VycmVudCgpO1xuICBjb25zdCB1bnNvcnRlZEl0ZW1zID0gZ2V0U3RhdHVzKCk7XG4gIGZvciAobGV0IGkgPSBmaWVsZElkOyBpIDwgdW5zb3J0ZWRJdGVtcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHVuc29ydGVkSXRlbXNbaV0uaW5kZXggPSBpO1xuICAgIGFsbERpdnNbaV0uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaSk7XG4gICAgY2hlY2tCdG5baV0uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaSk7XG4gICAgY2hlY2tNYXJrW2ldLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGkpO1xuICAgIGRvdHNJY29uW2ldLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGkpO1xuICAgIHRyYXNoSWNvbltpXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpKTtcbiAgICBsYWJlbFtpXS5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGkpO1xuICAgIHRleHRGaWVsZHNbaV0uc2V0QXR0cmlidXRlKCdpZCcsIGkpO1xuICB9XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KHVuc29ydGVkSXRlbXMpKTtcbiAgZ2V0U3RhdHVzKCk7XG59XG5cbmZ1bmN0aW9uIGVkaXRUb0RvKHRleHRGaWVsZHNMb2NhbCkge1xuICB0ZXh0RmllbGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG8nKTtcbiAgaWYgKHRleHRGaWVsZHNMb2NhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGV4dEZpZWxkc0xvY2FsID0gdGV4dEZpZWxkcztcbiAgfVxuICAvLyBTZWxlY3QgYSB0b2RvIGl0ZW0gZmllbGRcbiAgdGV4dEZpZWxkc0xvY2FsLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgZmllbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBmaWVsZElkID0gK2ZpZWxkLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgIGNvbnN0IGxpc3RJdGVtID0gZmllbGQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICBjb25zdCBkb3RzSWNvbiA9IGxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5mYS1lbGxpcHNpcy12Jyk7XG4gICAgICBjb25zdCB0cmFzaEljb24gPSBsaXN0SXRlbS5xdWVyeVNlbGVjdG9yKCcuZmEtdHJhc2gtYWx0Jyk7XG4gICAgICBsaXN0SXRlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnbGlnaHR5ZWxsb3cnO1xuICAgICAgZmllbGQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2xpZ2h0eWVsbG93JztcbiAgICAgIGRvdHNJY29uLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgIHRyYXNoSWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAvLyBEZWxldGUgZnVuY3Rpb25cbiAgICAgIHRyYXNoSWNvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0b3JlZEl0ZW1zID0gZ2V0U3RhdHVzKCk7XG4gICAgICAgIGxpc3RJdGVtLnJlbW92ZSgpO1xuICAgICAgICBzdG9yZWRJdGVtcy5zcGxpY2UoZmllbGRJZCwgMSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KHN0b3JlZEl0ZW1zKSk7XG4gICAgICAgIHNvcnRUb0RvKGZpZWxkSWQpO1xuICAgICAgICBzaG93SXRlbXMoKTtcbiAgICAgICAgZmllbGRJZCA9IHVuZGVmaW5lZDtcbiAgICAgIH0pO1xuICAgICAgLy8gRWRpdCB0b2RvIGl0ZW1cbiAgICAgIGZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBzdG9yZWRJdGVtcyA9IGdldFN0YXR1cygpO1xuICAgICAgICBjb25zdCBlZGl0ZWRTdHJpbmcgPSBsaXN0SXRlbS5xdWVyeVNlbGVjdG9yKCcudG9kbycpLnZhbHVlO1xuICAgICAgICBzdG9yZWRJdGVtc1tmaWVsZElkXS5kZXNjcmlwdGlvbiA9IGVkaXRlZFN0cmluZztcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvRG9MaXN0JywgSlNPTi5zdHJpbmdpZnkoc3RvcmVkSXRlbXMpKTtcbiAgICAgIH0pO1xuICAgICAgLy8gVG9nZ2xlIHRoZSBiYWNrZ3JvdW5kIGFuZCBpY29ucyBvbiBmb2N1c1xuICAgICAgZmllbGQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCAoKSA9PiB7XG4gICAgICAgIGxpc3RJdGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgIGZpZWxkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgIGRvdHNJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgdHJhc2hJY29uLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2xlYXJDb21wbGV0ZWQoKSB7XG4gIGNvbnN0IGJ0bkNsZWFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsZWFyLXRleHQnKTtcbiAgYnRuQ2xlYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgbWFya2VkSXRlbXMgPSBnZXRTdGF0dXMoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hcmtlZEl0ZW1zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAobWFya2VkSXRlbXNbaV0uY29tcGxldGVkID09PSB0cnVlKSB7XG4gICAgICAgIGdldEN1cnJlbnQoKTtcbiAgICAgICAgYWxsRGl2c1tpXS5yZW1vdmUoKTtcbiAgICAgICAgbWFya2VkSXRlbXMuc3BsaWNlKGksIDEpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9Eb0xpc3QnLCBKU09OLnN0cmluZ2lmeShtYXJrZWRJdGVtcykpO1xuICAgICAgICBnZXRTdGF0dXMoKTtcbiAgICAgICAgc29ydFRvRG8oaSk7XG4gICAgICAgIHNob3dJdGVtcygpO1xuICAgICAgICBpIC09IDE7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IHsgZWRpdFRvRG8sIGNsZWFyQ29tcGxldGVkIH07IiwiY29uc3QgdG9Eb0l0ZW1zID0gW107XG5cbmxldCBjaGVja0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYS1zcXVhcmUnKTtcbmxldCBjaGVja01hcmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmEtY2hlY2snKTtcbmxldCB0b0RvVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvJyk7XG5sZXQgbWFya0lkO1xubGV0IGJ0bklkO1xuZnVuY3Rpb24gZ2V0U3RhdHVzKCkge1xuICBpZiAobG9jYWxTdG9yYWdlLmxlbmd0aCA9PT0gMCB8fCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9Eb0xpc3QnKSA9PT0gbnVsbCkge1xuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHN0b3JlZFRvRG9MaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9Eb0xpc3QnKSk7XG4gICAgdG9Eb0l0ZW1zLmxlbmd0aCA9IDA7XG4gICAgdG9Eb0l0ZW1zLnB1c2goLi4uc3RvcmVkVG9Eb0xpc3QpO1xuICB9XG4gIHJldHVybiB0b0RvSXRlbXM7XG59XG5cbmZ1bmN0aW9uIHNob3dJdGVtcygpIHtcbiAgY29uc3QgY3VycmVudEl0ZW1zID0gZ2V0U3RhdHVzKCk7XG4gIGNoZWNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhLXNxdWFyZScpO1xuICBjaGVja01hcmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmEtY2hlY2snKTtcbiAgdG9Eb1RleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kbycpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNoZWNrQnRuLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGN1cnJlbnRJdGVtc1tpXS5jb21wbGV0ZWQpIHtcbiAgICAgIGNoZWNrTWFya1tpXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIGNoZWNrTWFya1tpXS5zdHlsZS5jb2xvciA9ICcjMzZCMEU5JztcbiAgICAgIGNoZWNrQnRuW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB0b0RvVGV4dFtpXS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xuICAgICAgdG9Eb1RleHRbaV0uc3R5bGUuY29sb3IgPSAnbGlnaHRncmV5JztcbiAgICB9IGVsc2Uge1xuICAgICAgY2hlY2tNYXJrW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBjaGVja0J0bltpXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIHRvRG9UZXh0W2ldLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnO1xuICAgICAgdG9Eb1RleHRbaV0uc3R5bGUuY29sb3IgPSAnYmxhY2snO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja0J1dHRvbigpIHtcbiAgY29uc3QgYnRuID0gY2hlY2tCdG5bY2hlY2tCdG4ubGVuZ3RoIC0gMV07XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBidG5JZCA9IGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICB0b0RvSXRlbXNbK2J0bklkXS5jb21wbGV0ZWQgPSB0cnVlO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KHRvRG9JdGVtcykpO1xuICAgIHNob3dJdGVtcygpO1xuICB9KTtcbiAgY29uc3QgbWFyayA9IGNoZWNrTWFya1tjaGVja01hcmsubGVuZ3RoIC0gMV07XG4gIG1hcmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbWFya0lkID0gbWFyay5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICB0b0RvSXRlbXNbK21hcmtJZF0uY29tcGxldGVkID0gZmFsc2U7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvRG9MaXN0JywgSlNPTi5zdHJpbmdpZnkodG9Eb0l0ZW1zKSk7XG4gICAgc2hvd0l0ZW1zKCk7XG4gIH0pO1xufVxuXG5leHBvcnQge1xuICBjaGVja0J1dHRvbiwgc2hvd0l0ZW1zLCB0b0RvSXRlbXMsIGdldFN0YXR1cyxcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
>>>>>>> main
