!function(){var n,e={6715:function(n,e,t){"use strict";var l=t.p+"assets/icon.png",o=t(2862),r=t.n(o);function a(n){n.forEach((n=>{n.style.height=`${n.offsetWidth}px`}))}document.addEventListener("DOMContentLoaded",(async()=>{const n=document.getElementById("top-template-content");let e=JSON.parse(localStorage.getItem("topBreeds"));var t;n.innerHTML=r()({breeds:e}),t=l,document.querySelector('link[rel="icon"]').href=t;const o=document.querySelectorAll(".top-list__image .image");a(o),window.addEventListener("resize",(()=>{a(o)}))}))},2862:function(n,e,t){var l=t(202);n.exports=(l.default||l).template({1:function(n,e,t,l,o){var r,a=null!=e?e:n.nullContext||{},i=n.hooks.helperMissing,c="function",u=n.escapeExpression,s=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'    <div class="top-list__item">\n      <div class="top-list__image">\n        <img src='+u(typeof(r=null!=(r=s(t,"imageUrl")||(null!=e?s(e,"imageUrl"):e))?r:i)===c?r.call(a,{name:"imageUrl",hash:{},data:o,loc:{start:{line:6,column:17},end:{line:6,column:29}}}):r)+' class="image" alt="cat image">\n      </div>\n      <div class="top-list__paragraph">\n        <h2 class="top-list__title title">'+u(typeof(r=null!=(r=s(t,"index")||(null!=e?s(e,"index"):e))?r:i)===c?r.call(a,{name:"index",hash:{},data:o,loc:{start:{line:9,column:42},end:{line:9,column:51}}}):r)+". "+u(typeof(r=null!=(r=s(t,"name")||(null!=e?s(e,"name"):e))?r:i)===c?r.call(a,{name:"name",hash:{},data:o,loc:{start:{line:9,column:53},end:{line:9,column:61}}}):r)+"</h2>\n        <p>"+u(typeof(r=null!=(r=s(t,"description")||(null!=e?s(e,"description"):e))?r:i)===c?r.call(a,{name:"description",hash:{},data:o,loc:{start:{line:10,column:11},end:{line:10,column:26}}}):r)+"</p>\n      </div>\n    </div>\n"},compiler:[8,">= 4.3.0"],main:function(n,e,t,l,o){var r,a=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<section class="top-list">\n  <h1 class="title">Top 10 most searched breeds</h1>\n'+(null!=(r=a(t,"each").call(null!=e?e:n.nullContext||{},null!=e?a(e,"breeds"):e,{name:"each",hash:{},fn:n.program(1,o,0),inverse:n.noop,data:o,loc:{start:{line:3,column:2},end:{line:13,column:11}}}))?r:"")+"</section>"},useData:!0})}},t={};function l(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,l),r.exports}l.m=e,n=[],l.O=function(e,t,o,r){if(!t){var a=1/0;for(s=0;s<n.length;s++){t=n[s][0],o=n[s][1],r=n[s][2];for(var i=!0,c=0;c<t.length;c++)(!1&r||a>=r)&&Object.keys(l.O).every((function(n){return l.O[n](t[c])}))?t.splice(c--,1):(i=!1,r<a&&(a=r));if(i){n.splice(s--,1);var u=o();void 0!==u&&(e=u)}}return e}r=r||0;for(var s=n.length;s>0&&n[s-1][2]>r;s--)n[s]=n[s-1];n[s]=[t,o,r]},l.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return l.d(e,{a:e}),e},l.d=function(n,e){for(var t in e)l.o(e,t)&&!l.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),l.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},l.p="/catwiki-challenge/",function(){var n={550:0};l.O.j=function(e){return 0===n[e]};var e=function(e,t){var o,r,a=t[0],i=t[1],c=t[2],u=0;if(a.some((function(e){return 0!==n[e]}))){for(o in i)l.o(i,o)&&(l.m[o]=i[o]);if(c)var s=c(l)}for(e&&e(t);u<a.length;u++)r=a[u],l.o(n,r)&&n[r]&&n[r][0](),n[r]=0;return l.O(s)},t=self.webpackChunkhandlebars_example=self.webpackChunkhandlebars_example||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var o=l.O(void 0,[202],(function(){return l(6715)}));o=l.O(o)}();