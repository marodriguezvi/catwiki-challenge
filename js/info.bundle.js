!function(){var n,e={3618:function(n,e,l){"use strict";var a=l.p+"assets/icon.png",t=l(9669),r=l.n(t);function i(n){n.forEach((n=>{n.style.height=`${n.offsetWidth}px`}))}r().defaults.baseURL="https://api.thecatapi.com",r().defaults.headers.common["x-api-key"]="f3ee5598-d5ac-46a2-aaed-84a65d72921b";var o=l(324),c=l.n(o),s=l(2974),u=l.n(s);document.addEventListener("DOMContentLoaded",(async()=>{const n=document.getElementById("info-template-content"),e=new URLSearchParams(window.location.search);if(!e.has("id"))return;let l=JSON.parse(localStorage.getItem(e.get("id")));var t;n.innerHTML=c()({breedInfo:l}),t=a,document.querySelector('link[rel="icon"]').href=t;let o=document.querySelectorAll(".image");i(o);const s=document.getElementById("galery-template-content");let d=await async function(n){let e={has_breeds:1,format:"json",mime_type:"jpg",limit:arguments.length>1&&void 0!==arguments[1]?arguments[1]:1};try{return(await Promise.all(n.map((n=>(e.breed_ids=n,r().get("/v1/images/search",{params:e})))))).map((n=>n.data))}catch(n){console.log(n)}}([e.get("id")],8);const m=d[0].map((n=>n.url));s.innerHTML=u()({images:m}),o=document.querySelectorAll(".image"),i(o),window.addEventListener("resize",(()=>{i(o)}))}))},4666:function(n){n.exports=function(n,e,l){let a=`<div class="bar"><span class="bar__name bold">${n}:</span><div class="bar__progress-line">`;for(let n=0;n<l;n++)a+=n<e?'<div class="bar__item bar__item--active"></div>':'<div class="bar__item"></div>';return`${a}</div></div>`}},324:function(n,e,l){var a=l(202);function t(n){return n&&(n.__esModule?n.default:n)}n.exports=(a.default||a).template({1:function(n,e,a,r,i){var o,c=n.lambda,s=n.escapeExpression,u=null!=e?e:n.nullContext||{},d=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'  <div class="breed__image">\n    <img src='+s(c(null!=(o=null!=e?d(e,"image"):e)?d(o,"url"):o,e))+' class="image" alt="cat image">\n  </div>\n  <div class="breed__information">\n    <h1 class="breed__title title">'+s(c(null!=e?d(e,"name"):e,e))+"</h1>\n    <p>"+s(c(null!=e?d(e,"description"):e,e))+'</p>\n    <p><span class="bold">Temperament:</span> '+s(c(null!=e?d(e,"temperament"):e,e))+'</p>\n    <p><span class="bold">Origin:</span> '+s(c(null!=e?d(e,"origin"):e,e))+'</p>\n    <p><span class="bold">Life span:</span> '+s(c(null!=e?d(e,"life_span"):e,e))+" years</p>\n    "+(null!=(o=t(l(4666)).call(u,"Adaptabilty",null!=e?d(e,"adaptability"):e,5,{name:"bar",hash:{},data:i,loc:{start:{line:12,column:4},end:{line:12,column:43}}}))?o:"")+"\n    "+(null!=(o=t(l(4666)).call(u,"Affectation level",null!=e?d(e,"affection_level"):e,5,{name:"bar",hash:{},data:i,loc:{start:{line:13,column:4},end:{line:13,column:52}}}))?o:"")+"\n    "+(null!=(o=t(l(4666)).call(u,"Child friendly",null!=e?d(e,"child_friendly"):e,5,{name:"bar",hash:{},data:i,loc:{start:{line:14,column:4},end:{line:14,column:48}}}))?o:"")+"\n    "+(null!=(o=t(l(4666)).call(u,"Grooming",null!=e?d(e,"grooming"):e,5,{name:"bar",hash:{},data:i,loc:{start:{line:15,column:4},end:{line:15,column:36}}}))?o:"")+"\n    "+(null!=(o=t(l(4666)).call(u,"Intelligence",null!=e?d(e,"intelligence"):e,5,{name:"bar",hash:{},data:i,loc:{start:{line:16,column:4},end:{line:16,column:44}}}))?o:"")+"\n    "+(null!=(o=t(l(4666)).call(u,"Health issues",null!=e?d(e,"health_issues"):e,5,{name:"bar",hash:{},data:i,loc:{start:{line:17,column:4},end:{line:17,column:46}}}))?o:"")+"\n    "+(null!=(o=t(l(4666)).call(u,"Social needs",null!=e?d(e,"social_needs"):e,5,{name:"bar",hash:{},data:i,loc:{start:{line:18,column:4},end:{line:18,column:44}}}))?o:"")+"\n    "+(null!=(o=t(l(4666)).call(u,"Stranger friendly",null!=e?d(e,"stranger_friendly"):e,5,{name:"bar",hash:{},data:i,loc:{start:{line:19,column:4},end:{line:19,column:54}}}))?o:"")+"\n  </div>\n"},compiler:[8,">= 4.3.0"],main:function(n,e,l,a,t){var r,i=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<section class="breed">\n'+(null!=(r=i(l,"with").call(null!=e?e:n.nullContext||{},null!=e?i(e,"breedInfo"):e,{name:"with",hash:{},fn:n.program(1,t,0),inverse:n.noop,data:t,loc:{start:{line:2,column:2},end:{line:21,column:11}}}))?r:"")+'</section>\n<section class="images">\n  <h2 class="title">Other photos</h2>\n  <div id="galery-template-content"></div>\n</section>'},useData:!0})},2974:function(n,e,l){var a=l(202);n.exports=(a.default||a).template({1:function(n,e,l,a,t){return'    <div class="galery__item">\n      <img src='+n.escapeExpression(n.lambda(e,e))+' alt="cat image" class="image">\n    </div>\n'},compiler:[8,">= 4.3.0"],main:function(n,e,l,a,t){var r,i=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<div class="galery">\n'+(null!=(r=i(l,"each").call(null!=e?e:n.nullContext||{},null!=e?i(e,"images"):e,{name:"each",hash:{},fn:n.program(1,t,0),inverse:n.noop,data:t,loc:{start:{line:2,column:2},end:{line:6,column:11}}}))?r:"")+"</div>\n"},useData:!0})}},l={};function a(n){var t=l[n];if(void 0!==t)return t.exports;var r=l[n]={exports:{}};return e[n](r,r.exports,a),r.exports}a.m=e,n=[],a.O=function(e,l,t,r){if(!l){var i=1/0;for(u=0;u<n.length;u++){l=n[u][0],t=n[u][1],r=n[u][2];for(var o=!0,c=0;c<l.length;c++)(!1&r||i>=r)&&Object.keys(a.O).every((function(n){return a.O[n](l[c])}))?l.splice(c--,1):(o=!1,r<i&&(i=r));if(o){n.splice(u--,1);var s=t();void 0!==s&&(e=s)}}return e}r=r||0;for(var u=n.length;u>0&&n[u-1][2]>r;u--)n[u]=n[u-1];n[u]=[l,t,r]},a.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(e,{a:e}),e},a.d=function(n,e){for(var l in e)a.o(e,l)&&!a.o(n,l)&&Object.defineProperty(n,l,{enumerable:!0,get:e[l]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},a.p="/catwiki-challenge/",function(){var n={996:0};a.O.j=function(e){return 0===n[e]};var e=function(e,l){var t,r,i=l[0],o=l[1],c=l[2],s=0;if(i.some((function(e){return 0!==n[e]}))){for(t in o)a.o(o,t)&&(a.m[t]=o[t]);if(c)var u=c(a)}for(e&&e(l);s<i.length;s++)r=i[s],a.o(n,r)&&n[r]&&n[r][0](),n[r]=0;return a.O(u)},l=self.webpackChunkhandlebars_example=self.webpackChunkhandlebars_example||[];l.forEach(e.bind(null,0)),l.push=e.bind(null,l.push.bind(l))}();var t=a.O(void 0,[202,669],(function(){return a(3618)}));t=a.O(t)}();