!function(){var C,e={150:function(C,e,n){"use strict";var t=n.p+"assets/icon.png",a=n.p+"assets/image_1.png",i=n.p+"assets/image_2.png",o=n.p+"assets/image_3.png",l=n(9669),r=n.n(l);r().defaults.baseURL="https://api.thecatapi.com",r().defaults.headers.common["x-api-key"]="f3ee5598-d5ac-46a2-aaed-84a65d72921b";const s=[{id:"mcoo",name:"Maine Coon"},{id:"beng",name:"Bengal"},{id:"pers",name:"Persian"},{id:"hima",name:"Himalayan"},{id:"sfol",name:"Scottish Fold"},{id:"bsho",name:"British Shorthair"},{id:"sphy",name:"Sphynx"},{id:"ragd",name:"Ragdoll"},{id:"siam",name:"Siamese"},{id:"rblu",name:"Russian Blue"}];var c=n(2423),d=n.n(c),u=n(1927),p=n.n(u);function m(){let C=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"small";const n=`search?has_breeds=1&breed_ids=${C}&format=src&mime_types=jpg&size=${e}`;return`https://api.thecatapi.com/v1/images/${n}`}function h(C){C.forEach((C=>{C.style.height=`${C.offsetWidth}px`}))}let f=[],v=[];function g(C){C.addEventListener("click",(C=>{const e=C.target.dataset;e.id&&y(v,e)}))}function y(C,e){localStorage.setItem(e.id,JSON.stringify(C[parseInt(e.index)])),window.location.assign(`${window.location.href}info.html?id=${e.id}`)}document.addEventListener("DOMContentLoaded",(async()=>{var C;document.getElementById("home-template-content").innerHTML=d()({icon:t,searchImages:s.slice(0,4).map((C=>({src:m(C.id),name:C.name}))),knowledgeImages:[a,i,o]}),C=t,document.querySelector('link[rel="icon"]').href=C;const e=document.getElementById("search-input"),n=document.getElementById("list-template-content"),l=document.querySelectorAll(".favorite .galery .image");h(l),f=v=await async function(){try{const{data:C}=await r().get("/v1/breeds");return C}catch(C){console.log(C)}}(),n.innerHTML=p()({breeds:f}),n.style.width=`${e.offsetWidth}px`,g(n),e.addEventListener("input",(C=>{const e=C.target.value;v=f.filter((C=>C.name.toLowerCase().match(e.toLowerCase()))),n.innerHTML=p()({breeds:v}),g(n)})),e.addEventListener("keypress",(C=>{const e=document.querySelector(".list .list__item").dataset;"Enter"===C.key&&v&&e.id&&y(v,e)})),window.addEventListener("resize",(()=>{n.style.width=`${e.offsetWidth}px`,h(l)})),e.addEventListener("focus",(()=>{n.classList.remove("hidden")})),e.addEventListener("blur",(C=>{C.preventDefault(),setTimeout((()=>{n.classList.add("hidden")}),200)}));const c=s.map((C=>C.id));f.forEach((C=>{c.includes(C.id)&&localStorage.setItem(C.id,JSON.stringify(C))}))}))},2423:function(C,e,n){var t=n(202);C.exports=(t.default||t).template({1:function(C,e,n,t,a){var i=C.lambda,o=C.escapeExpression,l=C.lookupProperty||function(C,e){if(Object.prototype.hasOwnProperty.call(C,e))return C[e]};return'          <div class="galery__item">\n            <img class="image" src='+o(i(null!=e?l(e,"src"):e,e))+' alt="cat image">\n            <p class="galery__subtitle">'+o(i(null!=e?l(e,"name"):e,e))+"</p>\n          </div>\n"},3:function(C,e,n,t,a){return'        <img class="image" src='+C.escapeExpression(C.lambda(e,e))+' alt="cat image">\n'},compiler:[8,">= 4.3.0"],main:function(C,e,t,a,i){var o,l=null!=e?e:C.nullContext||{},r=C.lookupProperty||function(C,e){if(Object.prototype.hasOwnProperty.call(C,e))return C[e]};return'<section class="search">\n  <div class="search__header search__header--image">\n    <div class="form">\n      <div class="form__title">\n'+(null!=(o=C.invokePartial(n(4065),e,{name:"logo",data:i,indent:"        ",helpers:t,partials:a,decorators:C.decorators}))?o:"")+'      </div>\n      <div class="form__text">\n        <p>Get to know more about your cat breed</p>\n      </div>\n      <div class="search-input">\n        <input id="search-input" class="search-input__body" type="text" autocomplete="off"\n          placeholder="Enter your breed">\n        <div class="search-input__image">\n'+(null!=(o=C.invokePartial(n(7067),e,{name:"loupe_icon",data:i,indent:"          ",helpers:t,partials:a,decorators:C.decorators}))?o:"")+'        </div>\n        <div id="list-template-content" class="search-input__result hidden"></div>\n      </div>\n    </div>\n  </div>\n  <div class="search__body">\n    <div class="favorite">\n      <p class="favorite__subtitle">Most Searched Breeds</p>\n      <div class="favorite__header">\n        <h1 class="favorite__title">66+ Breeds For you to discover</h1>\n        <div class="favorite__link">\n        <a href="top.html" class="link">SEE MORE ➙</a>\n        </div>\n      </div>\n      <div class="galery">\n'+(null!=(o=r(t,"each").call(l,null!=e?r(e,"searchImages"):e,{name:"each",hash:{},fn:C.program(1,i,0),inverse:C.noop,data:i,loc:{start:{line:30,column:8},end:{line:35,column:17}}}))?o:"")+'      </div>\n    </div>\n  </div>\n</section>\n<section class="knowledge">\n  <div class="knowledge__container">\n    <div class="knowledge__text">\n      <h1 class="title title--line">Why should you have a cat?</h1>\n      <p class="knowledge__paragraph">Having a cat around you can actually trigger the release of calming chemicals in\n        your body which lower your stress and anxiety levels</p>\n      <a href="https://www.purina.es/encuentra-mascota/nuevo-gato-en-casa/adoptar-un-gato/beneficios-de-tener-un-gato"\n        target="_blank" class="knowledge__link link">READ MORE ➙</a>\n    </div>\n    <div class="knowledge__pictures">\n'+(null!=(o=r(t,"each").call(l,null!=e?r(e,"knowledgeImages"):e,{name:"each",hash:{},fn:C.program(3,i,0),inverse:C.noop,data:i,loc:{start:{line:50,column:6},end:{line:52,column:15}}}))?o:"")+"    </div>\n  </div>\n</section>\n"},usePartial:!0,useData:!0})},1927:function(C,e,n){var t=n(202);C.exports=(t.default||t).template({1:function(C,e,n,t,a){var i,o=null!=e?e:C.nullContext||{},l=C.hooks.helperMissing,r="function",s=C.escapeExpression,c=C.lookupProperty||function(C,e){if(Object.prototype.hasOwnProperty.call(C,e))return C[e]};return'    <li class="list__item" data-id='+s(typeof(i=null!=(i=c(n,"id")||(null!=e?c(e,"id"):e))?i:l)===r?i.call(o,{name:"id",hash:{},data:a,loc:{start:{line:3,column:35},end:{line:3,column:41}}}):i)+" data-index="+s(typeof(i=null!=(i=c(n,"index")||a&&c(a,"index"))?i:l)===r?i.call(o,{name:"index",hash:{},data:a,loc:{start:{line:3,column:53},end:{line:3,column:63}}}):i)+">"+s(typeof(i=null!=(i=c(n,"name")||(null!=e?c(e,"name"):e))?i:l)===r?i.call(o,{name:"name",hash:{},data:a,loc:{start:{line:3,column:64},end:{line:3,column:72}}}):i)+"</li>\n"},compiler:[8,">= 4.3.0"],main:function(C,e,n,t,a){var i,o=C.lookupProperty||function(C,e){if(Object.prototype.hasOwnProperty.call(C,e))return C[e]};return'<ul class="list custom-scroll">\n'+(null!=(i=o(n,"each").call(null!=e?e:C.nullContext||{},null!=e?o(e,"breeds"):e,{name:"each",hash:{},fn:C.program(1,a,0),inverse:C.noop,data:a,loc:{start:{line:2,column:2},end:{line:4,column:11}}}))?i:"")+"</ul>\n\n"},useData:!0})},4065:function(C,e,n){var t=n(202);C.exports=(t.default||t).template({compiler:[8,">= 4.3.0"],main:function(C,e,n,t,a){return'<svg width="128" height="43" viewBox="0 0 128 43" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path\n    d="M6.9375 34.6875C6.0625 34.6562 5.21094 34.4141 4.38281 33.9609C3.57031 33.5234 2.85156 32.8906 2.22656 32.0625C1.61719 31.2188 1.14062 30.1875 0.796875 28.9688C0.453125 27.75 0.3125 26.3438 0.375 24.75C0.4375 23.1562 0.71875 21.7422 1.21875 20.5078C1.73438 19.2734 2.36719 18.25 3.11719 17.4375C3.86719 16.6094 4.6875 16 5.57812 15.6094C6.48438 15.2188 7.375 15.0703 8.25 15.1641C8.78125 15.2266 9.25 15.375 9.65625 15.6094C10.0625 15.8438 10.4141 16.1328 10.7109 16.4766C11.0078 16.8047 11.2578 17.1641 11.4609 17.5547C11.6641 17.9297 11.8281 18.2969 11.9531 18.6562C12.0469 18.75 12.1484 18.7969 12.2578 18.7969C12.5547 18.8125 12.8203 18.5938 13.0547 18.1406C13.3047 17.6719 13.5156 16.9062 13.6875 15.8438L14.3438 15.9141C14.2031 16.4453 14.0469 17.0625 13.875 17.7656C13.7188 18.4531 13.5703 19.1641 13.4297 19.8984C13.3047 20.6328 13.1953 21.3594 13.1016 22.0781C13.0234 22.7969 13 23.4453 13.0312 24.0234C12.7969 23.9297 12.5781 23.8672 12.375 23.8359C12.1719 23.7891 11.9844 23.7578 11.8125 23.7422C11.625 23.7266 11.4531 23.7266 11.2969 23.7422C11.3281 22.7734 11.2969 21.8438 11.2031 20.9531C11.125 20.0625 10.9688 19.2812 10.7344 18.6094C10.5 17.9219 10.1875 17.3672 9.79688 16.9453C9.42188 16.5234 8.95312 16.2891 8.39062 16.2422C7.89062 16.1953 7.35156 16.3047 6.77344 16.5703C6.19531 16.8203 5.64844 17.2812 5.13281 17.9531C4.61719 18.6094 4.17188 19.4922 3.79688 20.6016C3.42188 21.7109 3.1875 23.0938 3.09375 24.75C3.04688 25.625 3.07812 26.5469 3.1875 27.5156C3.29688 28.4844 3.51562 29.3828 3.84375 30.2109C4.17188 31.0234 4.61719 31.7031 5.17969 32.25C5.74219 32.7812 6.45312 33.0391 7.3125 33.0234C7.96875 32.9766 8.57812 32.8047 9.14062 32.5078C9.625 32.2422 10.1016 31.8438 10.5703 31.3125C11.0391 30.7812 11.375 30.0156 11.5781 29.0156L12.3516 29.4844C12.2266 29.8906 12.0391 30.3984 11.7891 31.0078C11.5391 31.6016 11.1953 32.1797 10.7578 32.7422C10.3359 33.3047 9.80469 33.7734 9.16406 34.1484C8.53906 34.5391 7.79688 34.7188 6.9375 34.6875ZM25.9922 32.1328C25.9453 32.3359 25.8672 32.5625 25.7578 32.8125C25.6484 33.0469 25.4922 33.2578 25.2891 33.4453C25.0859 33.6484 24.8359 33.7969 24.5391 33.8906C24.2578 34 23.9219 34.0078 23.5312 33.9141C23.1406 33.8203 22.8281 33.6016 22.5938 33.2578C22.375 32.9141 22.2188 32.4766 22.125 31.9453C21.9844 32.1641 21.8047 32.3984 21.5859 32.6484C21.3828 32.8828 21.1328 33.0938 20.8359 33.2812C20.5547 33.4844 20.2266 33.6406 19.8516 33.75C19.4922 33.875 19.0938 33.9219 18.6562 33.8906C18.0625 33.8438 17.5312 33.6797 17.0625 33.3984C16.6094 33.1328 16.2266 32.7891 15.9141 32.3672C15.6016 31.9297 15.3672 31.4375 15.2109 30.8906C15.0703 30.3438 15.0312 29.7734 15.0938 29.1797C15.1562 28.5859 15.3125 28.0781 15.5625 27.6562C15.8281 27.2344 16.1562 26.8984 16.5469 26.6484C16.9375 26.3828 17.3828 26.2031 17.8828 26.1094C18.3828 26.0156 18.8984 25.9922 19.4297 26.0391C20.1328 26.1172 20.7188 26.3281 21.1875 26.6719C21.6562 27 22.0156 27.3672 22.2656 27.7734C22.3438 27.0547 22.3672 26.2891 22.3359 25.4766C22.3047 24.6484 22.1797 23.8984 21.9609 23.2266C21.7422 22.5391 21.4062 21.9766 20.9531 21.5391C20.5 21.0859 19.8828 20.8672 19.1016 20.8828C18.5547 20.8828 18.1016 20.9844 17.7422 21.1875C17.3984 21.375 17.1172 21.6016 16.8984 21.8672C16.6953 22.1328 16.5547 22.4062 16.4766 22.6875C16.3984 22.9531 16.3594 23.1641 16.3594 23.3203C16.3594 23.4766 16.4062 23.6562 16.5 23.8594C16.5938 24.0469 16.7266 24.2266 16.8984 24.3984C17.0703 24.5547 17.2734 24.6797 17.5078 24.7734C17.7422 24.8672 18.0078 24.8906 18.3047 24.8438C18.5078 24.8125 18.6875 24.7422 18.8438 24.6328C19 24.5234 19.125 24.3984 19.2188 24.2578C19.3125 24.1172 19.375 23.9688 19.4062 23.8125C19.4531 23.6562 19.4766 23.5078 19.4766 23.3672C19.4766 23.2109 19.4297 23.0781 19.3359 22.9688C19.2422 22.8438 19.1328 22.75 19.0078 22.6875C18.8828 22.625 18.7422 22.6094 18.5859 22.6406C18.4297 22.6562 18.2891 22.7266 18.1641 22.8516C18.3047 22.8359 18.4453 22.8672 18.5859 22.9453C18.7266 23.0078 18.7969 23.1484 18.7969 23.3672C18.7969 23.5391 18.7266 23.6719 18.5859 23.7656C18.4453 23.8438 18.2891 23.875 18.1172 23.8594C17.9453 23.8438 17.7891 23.7734 17.6484 23.6484C17.5078 23.5078 17.4375 23.2969 17.4375 23.0156C17.4375 22.75 17.5469 22.5234 17.7656 22.3359C18 22.1484 18.2656 22.0547 18.5625 22.0547C18.9219 22.0547 19.25 22.1953 19.5469 22.4766C19.8594 22.7578 20.0156 23.1484 20.0156 23.6484C20.0156 23.8203 19.9688 24.0078 19.875 24.2109C19.7969 24.3984 19.6719 24.5781 19.5 24.75C19.3281 24.9219 19.1016 25.0703 18.8203 25.1953C18.5391 25.3047 18.2109 25.3594 17.8359 25.3594C17.4609 25.3594 17.125 25.2891 16.8281 25.1484C16.5312 24.9922 16.2812 24.8047 16.0781 24.5859C15.875 24.3516 15.7188 24.1016 15.6094 23.8359C15.5156 23.5547 15.4688 23.2891 15.4688 23.0391C15.4688 22.7891 15.5469 22.4766 15.7031 22.1016C15.8594 21.7109 16.1016 21.3438 16.4297 21C16.7734 20.6562 17.1953 20.3594 17.6953 20.1094C18.2109 19.8594 18.8203 19.7344 19.5234 19.7344C21.4141 19.7344 22.7188 20.3984 23.4375 21.7266C24.1562 23.0391 24.2734 25 23.7891 27.6094C23.6016 28.6562 23.5 29.5078 23.4844 30.1641C23.4688 30.8203 23.5078 31.3438 23.6016 31.7344C23.6953 32.125 23.8281 32.3984 24 32.5547C24.1875 32.7109 24.3828 32.8047 24.5859 32.8359C24.7578 32.8672 24.9219 32.8516 25.0781 32.7891C25.2031 32.7578 25.3203 32.6875 25.4297 32.5781C25.5547 32.4531 25.6406 32.2656 25.6875 32.0156L25.9922 32.1328ZM22.0312 30.9375C22.0156 30.375 22.0391 29.7812 22.1016 29.1562C21.9766 28.6719 21.7188 28.2266 21.3281 27.8203C20.9531 27.3984 20.5234 27.1484 20.0391 27.0703C19.6797 27.0078 19.3047 27.0156 18.9141 27.0938C18.5391 27.1562 18.2031 27.2969 17.9062 27.5156C17.6094 27.7188 17.375 28.0078 17.2031 28.3828C17.0312 28.7578 16.9688 29.2188 17.0156 29.7656C17.0938 30.6094 17.3281 31.25 17.7188 31.6875C18.125 32.125 18.7188 32.3203 19.5 32.2734C20.0938 32.2422 20.5938 32.0938 21 31.8281C21.4219 31.5469 21.7656 31.25 22.0312 30.9375ZM31.5703 32.2266C31.9297 32.2266 32.2656 32.1016 32.5781 31.8516C32.8906 31.6016 33.1094 31.1797 33.2344 30.5859L33.7266 30.7734C33.6797 31.1484 33.5312 31.5312 33.2812 31.9219C33.0312 32.2969 32.7109 32.6172 32.3203 32.8828C31.9297 33.1484 31.4844 33.3203 30.9844 33.3984C30.5 33.4766 30 33.3984 29.4844 33.1641C28.9219 32.8984 28.5156 32.5547 28.2656 32.1328C28.0156 31.7109 27.8594 31.2266 27.7969 30.6797C27.7344 30.1172 27.7266 29.5156 27.7734 28.875C27.8203 28.2188 27.8438 27.5391 27.8438 26.8359C27.8438 26.4297 27.8359 25.9531 27.8203 25.4062C27.8203 24.8438 27.8047 24.25 27.7734 23.625C27.7578 23 27.7266 22.3594 27.6797 21.7031C27.6328 21.0312 27.5859 20.375 27.5391 19.7344C27.0078 19.7969 26.5 19.875 26.0156 19.9688C25.5469 20.0469 25.1484 20.1484 24.8203 20.2734C24.8047 20.1328 24.8047 20.0234 24.8203 19.9453C24.8203 19.8672 24.8281 19.7969 24.8438 19.7344C24.8438 19.6562 24.8438 19.5781 24.8438 19.5C24.8438 19.4062 24.8281 19.2812 24.7969 19.125C25.1719 19.0938 25.5859 19.0625 26.0391 19.0312C26.5078 19 26.9844 18.9688 27.4688 18.9375C27.4531 18.7188 27.4375 18.5078 27.4219 18.3047C27.4062 18.0859 27.3828 17.875 27.3516 17.6719C27.2734 16.9375 27.125 16.3516 26.9062 15.9141C26.7031 15.4766 26.4766 15.1406 26.2266 14.9062C25.9766 14.6719 25.7422 14.5156 25.5234 14.4375C25.3047 14.3438 25.1406 14.2812 25.0312 14.25L25.1016 13.8047C25.3984 13.9297 25.7656 14.0156 26.2031 14.0625C26.6406 14.0938 27.0938 14.0938 27.5625 14.0625C28.0469 14.0156 28.5156 13.9375 28.9688 13.8281C29.4375 13.7188 29.8438 13.5781 30.1875 13.4062C30.0312 13.8438 29.8906 14.5391 29.7656 15.4922C29.6562 16.4453 29.5625 17.5547 29.4844 18.8203C30.2969 18.7734 30.8828 18.7109 31.2422 18.6328C31.1641 18.7266 31.125 18.8828 31.125 19.1016C31.125 19.3047 31.1484 19.4922 31.1953 19.6641C30.9297 19.6328 30.6484 19.6172 30.3516 19.6172C30.0547 19.6016 29.75 19.5938 29.4375 19.5938C29.3906 20.5 29.3594 21.4453 29.3438 22.4297C29.3281 23.4141 29.3359 24.3906 29.3672 25.3594C29.4141 26.3125 29.4766 27.25 29.5547 28.1719C29.6484 29.0781 29.7656 29.9141 29.9062 30.6797C30.0312 31.2266 30.25 31.6172 30.5625 31.8516C30.875 32.0859 31.2109 32.2109 31.5703 32.2266ZM53.8359 17.8125C53.5078 18.0312 53.1875 18.2734 52.875 18.5391C52.5625 18.8047 52.2891 19.1484 52.0547 19.5703C51.8203 19.9922 51.6406 20.5234 51.5156 21.1641C51.3906 21.7891 51.3594 22.5859 51.4219 23.5547C51.4531 24.1953 51.4844 24.8906 51.5156 25.6406C51.5625 26.375 51.5703 27.1172 51.5391 27.8672C51.5078 28.6172 51.4219 29.3438 51.2812 30.0469C51.1406 30.7344 50.9062 31.3516 50.5781 31.8984C50.25 32.4453 49.8125 32.8906 49.2656 33.2344C48.7188 33.5781 48.0312 33.7656 47.2031 33.7969C46.5938 33.8281 46.0547 33.7422 45.5859 33.5391C45.1328 33.3359 44.7344 33.0625 44.3906 32.7188C44.0625 32.3594 43.7891 31.9531 43.5703 31.5C43.3516 31.0312 43.1719 30.5469 43.0312 30.0469C42.7969 30.6875 42.5156 31.2812 42.1875 31.8281C41.875 32.375 41.4609 32.8125 40.9453 33.1406C40.4453 33.4844 39.8359 33.6797 39.1172 33.7266C38.4141 33.7891 37.5625 33.6484 36.5625 33.3047C35.8281 33.0547 35.25 32.6953 34.8281 32.2266C34.4062 31.7422 34.0938 31.2031 33.8906 30.6094C33.6875 30 33.5703 29.3672 33.5391 28.7109C33.5078 28.0391 33.5156 27.3984 33.5625 26.7891C33.6094 26.1641 33.6797 25.5938 33.7734 25.0781C33.8672 24.5625 33.9375 24.1484 33.9844 23.8359C34.1406 22.8359 34.2656 21.8906 34.3594 21C34.4688 20.0938 34.4844 19.2891 34.4062 18.5859C34.3281 17.8672 34.125 17.2734 33.7969 16.8047C33.4844 16.3203 32.9844 16 32.2969 15.8438L32.4141 15.375C32.7109 15.4219 33.0625 15.4766 33.4688 15.5391C33.875 15.6016 34.2969 15.6562 34.7344 15.7031C35.1719 15.7344 35.6016 15.75 36.0234 15.75C36.4609 15.7344 36.8516 15.6875 37.1953 15.6094C37.1172 16.2188 37.0078 16.9766 36.8672 17.8828C36.7422 18.7734 36.6172 19.7266 36.4922 20.7422C36.3672 21.7578 36.25 22.7969 36.1406 23.8594C36.0469 24.9062 35.9922 25.8906 35.9766 26.8125C35.9297 28.6719 36.1406 30.0312 36.6094 30.8906C37.0938 31.75 37.9375 32.1719 39.1406 32.1562C39.75 32.1406 40.2422 31.875 40.6172 31.3594C40.9922 30.8438 41.2812 30.2031 41.4844 29.4375C41.7031 28.6719 41.8516 27.8594 41.9297 27C42.0078 26.125 42.0625 25.3281 42.0938 24.6094C42.1094 23.8906 42.1094 23.1953 42.0938 22.5234C42.0781 21.8359 42.0312 21.2031 41.9531 20.625C41.875 20.0469 41.7656 19.5312 41.625 19.0781C41.5 18.6094 41.3438 18.2344 41.1562 17.9531C41.5938 17.9375 41.9688 17.9453 42.2812 17.9766C42.5938 18.0078 42.8828 18.0469 43.1484 18.0938C43.4297 18.125 43.7188 18.1484 44.0156 18.1641C44.3125 18.1797 44.6641 18.1484 45.0703 18.0703C44.8984 18.5547 44.7422 19.0547 44.6016 19.5703C44.4609 20.0859 44.3359 20.6484 44.2266 21.2578C44.1328 21.8672 44.0547 22.5469 43.9922 23.2969C43.9453 24.0312 43.9219 24.8672 43.9219 25.8047C43.9375 26.7422 43.9844 27.5938 44.0625 28.3594C44.1562 29.125 44.3125 29.7734 44.5312 30.3047C44.7656 30.8203 45.0781 31.2031 45.4688 31.4531C45.875 31.6875 46.3984 31.7422 47.0391 31.6172C47.6797 31.4766 48.1797 31.1562 48.5391 30.6562C48.8984 30.1562 49.1562 29.5391 49.3125 28.8047C49.4844 28.0703 49.5781 27.25 49.5938 26.3438C49.625 25.4219 49.625 24.4844 49.5938 23.5312C49.5625 22.5625 49.5078 21.7422 49.4297 21.0703C49.3516 20.3828 49.2266 19.8203 49.0547 19.3828C48.8984 18.9453 48.6953 18.6172 48.4453 18.3984C48.1953 18.1641 47.8906 18.0156 47.5312 17.9531L47.6016 17.4375C48.5547 17.5938 49.5391 17.6484 50.5547 17.6016C51.5703 17.5391 52.6328 17.3594 53.7422 17.0625L53.8359 17.8125ZM53.8359 32.8828C54.1953 32.7578 54.4922 32.5938 54.7266 32.3906C54.9609 32.1875 55.1406 31.9844 55.2656 31.7812C55.4219 31.5469 55.5234 31.3047 55.5703 31.0547C55.9141 29.4609 56.0859 27.9453 56.0859 26.5078C56.0859 25.0547 55.9766 23.8125 55.7578 22.7812C55.6953 22.4531 55.5781 22.1484 55.4062 21.8672C55.2656 21.6328 55.0703 21.4141 54.8203 21.2109C54.5703 20.9922 54.25 20.8516 53.8594 20.7891L53.8359 20.4141C54.1484 20.4453 54.4375 20.4688 54.7031 20.4844C54.9844 20.4844 55.2266 20.4844 55.4297 20.4844H56.0859C56.2734 20.5 56.4609 20.5078 56.6484 20.5078C56.8203 20.5234 56.9922 20.5312 57.1641 20.5312C57.3516 20.5312 57.5312 20.5469 57.7031 20.5781C57.6562 21.1406 57.6172 21.7188 57.5859 22.3125C57.5547 22.8906 57.5312 23.4141 57.5156 23.8828C57.4844 24.4297 57.4688 24.9609 57.4688 25.4766C57.4375 26.0547 57.4141 26.6875 57.3984 27.375C57.3828 28.0469 57.3906 28.6875 57.4219 29.2969C57.4531 29.9062 57.5078 30.4453 57.5859 30.9141C57.6641 31.3672 57.7891 31.6641 57.9609 31.8047C58.0547 31.8672 58.1797 31.9297 58.3359 31.9922C58.4609 32.0547 58.625 32.1172 58.8281 32.1797C59.0469 32.2422 59.3125 32.3047 59.625 32.3672L59.6484 32.7656C59.3359 32.75 59.0312 32.75 58.7344 32.7656C58.4531 32.7656 58.2031 32.7656 57.9844 32.7656C57.7188 32.7812 57.4688 32.7891 57.2344 32.7891C56.9062 32.8047 56.5547 32.8359 56.1797 32.8828C55.8672 32.9141 55.5156 32.9531 55.125 33C54.7344 33.0469 54.3594 33.1016 54 33.1641L53.8359 32.8828ZM56.25 18.8438C55.7656 18.875 55.3906 18.7656 55.125 18.5156C54.8594 18.25 54.7109 17.9531 54.6797 17.625C54.6484 17.2969 54.7344 16.9922 54.9375 16.7109C55.1562 16.4141 55.5 16.2344 55.9688 16.1719C56.4531 16.1094 56.8359 16.2109 57.1172 16.4766C57.4141 16.7422 57.5859 17.0469 57.6328 17.3906C57.6797 17.7188 57.5938 18.0391 57.375 18.3516C57.1562 18.6484 56.7812 18.8125 56.25 18.8438ZM71.3438 38.9297C70.7969 38.9297 70.2578 38.8438 69.7266 38.6719C69.1953 38.5 68.7344 38.2109 68.3438 37.8047C67.9531 37.4141 67.6641 36.8828 67.4766 36.2109C67.2891 35.5547 67.2656 34.7344 67.4062 33.75C67.5156 33 67.6016 32.2656 67.6641 31.5469C67.7422 30.8125 67.7656 30.1406 67.7344 29.5312C67.7031 28.9062 67.5938 28.3594 67.4062 27.8906C67.2188 27.4062 66.9141 27.0312 66.4922 26.7656C66.1016 26.5 65.5938 26.3438 64.9688 26.2969C64.3438 26.25 63.5859 26.3594 62.6953 26.625C62.7266 27.2969 62.7656 27.9297 62.8125 28.5234C62.875 29.1172 62.9453 29.6484 63.0234 30.1172C63.0703 30.5859 63.1562 30.9922 63.2812 31.3359C63.375 31.6328 63.5078 31.8984 63.6797 32.1328C63.8516 32.3672 64.0703 32.4531 64.3359 32.3906L64.1719 32.9766C63.8594 32.8672 63.5 32.7891 63.0938 32.7422C62.7031 32.6953 62.2812 32.6875 61.8281 32.7188C61.375 32.75 60.9062 32.8203 60.4219 32.9297C59.9531 33.0391 59.5 33.2031 59.0625 33.4219L58.9453 33.0234C59.1797 32.8516 59.3906 32.6953 59.5781 32.5547C59.7656 32.4141 59.9297 32.2344 60.0703 32.0156C60.2266 31.7969 60.3594 31.5156 60.4688 31.1719C60.5781 30.8281 60.6719 30.3672 60.75 29.7891C60.8281 29.2109 60.9219 28.4609 61.0312 27.5391C61.1562 26.6016 61.2656 25.5938 61.3594 24.5156C61.4531 23.4375 61.5156 22.3281 61.5469 21.1875C61.5781 20.0469 61.5469 18.9844 61.4531 18C61.3594 17.2656 61.2188 16.6016 61.0312 16.0078C60.9531 15.7578 60.8516 15.5156 60.7266 15.2812C60.6172 15.0312 60.4844 14.8125 60.3281 14.625C60.1719 14.4219 59.9922 14.2578 59.7891 14.1328C59.6016 14.0078 59.3906 13.9375 59.1562 13.9219V13.5703C59.4531 13.6172 59.7891 13.6719 60.1641 13.7344C60.5547 13.7812 60.9922 13.8125 61.4766 13.8281C61.9766 13.8438 62.5312 13.8203 63.1406 13.7578C63.7656 13.6797 64.4609 13.5312 65.2266 13.3125V13.7812C64.9453 13.9375 64.6875 14.1016 64.4531 14.2734C64.2188 14.4297 64 14.6562 63.7969 14.9531C63.6094 15.25 63.4453 15.6406 63.3047 16.125C63.1641 16.6094 63.0625 17.25 63 18.0469C62.9219 18.7969 62.8359 19.6641 62.7422 20.6484C62.6641 21.6328 62.625 22.6484 62.625 23.6953C62.625 24.0703 62.625 24.4531 62.625 24.8438C62.625 25.2188 62.6406 25.5938 62.6719 25.9688C63.4219 25.7031 64.0938 25.3594 64.6875 24.9375C65.2812 24.5 65.7812 24.0547 66.1875 23.6016C66.5938 23.1328 66.9062 22.6797 67.125 22.2422C67.3438 21.8047 67.4531 21.4297 67.4531 21.1172C67.4219 20.8828 67.3672 20.6719 67.2891 20.4844C67.2109 20.3281 67.0938 20.1875 66.9375 20.0625C66.7812 19.9219 66.5703 19.8438 66.3047 19.8281L66.375 19.2422C67.3438 19.3672 68.2734 19.4219 69.1641 19.4062C70.0547 19.375 70.9453 19.1641 71.8359 18.7734L71.9297 19.2422C71.6953 19.3516 71.4844 19.4609 71.2969 19.5703C71.1094 19.6641 70.9297 19.7812 70.7578 19.9219C70.6016 20.0625 70.4453 20.25 70.2891 20.4844C70.1328 20.7031 69.9609 20.9922 69.7734 21.3516C69.6328 21.6484 69.4453 21.9922 69.2109 22.3828C68.9766 22.7734 68.6953 23.1641 68.3672 23.5547C68.0547 23.9297 67.6875 24.2891 67.2656 24.6328C66.8594 24.9609 66.4141 25.2266 65.9297 25.4297C67.1797 25.3984 68.1562 25.7266 68.8594 26.4141C69.5625 27.0859 69.9609 28.2031 70.0547 29.7656C70.0859 30.5625 70.0156 31.3672 69.8438 32.1797C69.6719 32.9766 69.5234 33.7266 69.3984 34.4297C69.2734 35.1484 69.2266 35.7891 69.2578 36.3516C69.2891 36.9297 69.5234 37.3828 69.9609 37.7109C70.3828 38.0391 70.7969 38.2344 71.2031 38.2969C71.625 38.375 72.0156 38.3438 72.375 38.2031C72.7344 38.0781 73.0469 37.8594 73.3125 37.5469C73.5938 37.2344 73.8125 36.8672 73.9688 36.4453C74.1094 36.0234 74.1719 35.6562 74.1562 35.3438C74.1406 35.0469 74.0703 34.7969 73.9453 34.5938C73.8203 34.4062 73.6562 34.2656 73.4531 34.1719C73.2656 34.0781 73.0625 34.0312 72.8438 34.0312C72.4062 34.0312 72.0156 34.1953 71.6719 34.5234C71.3281 34.8516 71.1406 35.2812 71.1094 35.8125C71.0938 36 71.1172 36.1562 71.1797 36.2812C71.2422 36.4062 71.3203 36.5 71.4141 36.5625C71.5234 36.6406 71.6328 36.6953 71.7422 36.7266C71.8672 36.7578 71.9844 36.7578 72.0938 36.7266C72.2969 36.6953 72.5 36.5781 72.7031 36.375C72.9219 36.1719 73.0234 35.9297 73.0078 35.6484C72.9141 35.7109 72.7969 35.7656 72.6562 35.8125C72.5156 35.875 72.3828 35.9062 72.2578 35.9062C72.1484 35.9062 72.0469 35.8672 71.9531 35.7891C71.875 35.7266 71.8359 35.6016 71.8359 35.4141C71.8359 35.1953 71.9141 35.0234 72.0703 34.8984C72.2422 34.7891 72.4297 34.7344 72.6328 34.7344C72.8359 34.7344 73.0234 34.7969 73.1953 34.9219C73.3672 35.0625 73.4531 35.2656 73.4531 35.5312C73.4688 36.0469 73.2969 36.4766 72.9375 36.8203C72.5938 37.1797 72.1875 37.3594 71.7188 37.3594C71.375 37.3594 71.1016 37.2578 70.8984 37.0547C70.7109 36.8672 70.5781 36.625 70.5 36.3281C70.4375 36.0469 70.4375 35.7344 70.5 35.3906C70.5781 35.0469 70.7188 34.7266 70.9219 34.4297C71.125 34.1484 71.3906 33.9062 71.7188 33.7031C72.0625 33.5156 72.4688 33.4219 72.9375 33.4219C73.2656 33.4219 73.5391 33.4844 73.7578 33.6094C73.9766 33.7344 74.1484 33.8906 74.2734 34.0781C74.4141 34.2812 74.5156 34.5 74.5781 34.7344C74.6406 34.9688 74.6719 35.2031 74.6719 35.4375C74.6875 35.8906 74.625 36.3203 74.4844 36.7266C74.3438 37.1484 74.1328 37.5234 73.8516 37.8516C73.5703 38.1797 73.2188 38.4375 72.7969 38.625C72.375 38.8281 71.8906 38.9297 71.3438 38.9297ZM71.6953 32.8828C72.0547 32.7578 72.3516 32.5938 72.5859 32.3906C72.8203 32.1875 73 31.9844 73.125 31.7812C73.2812 31.5469 73.3828 31.3047 73.4297 31.0547C73.7734 29.4609 73.9453 27.9453 73.9453 26.5078C73.9453 25.0547 73.8359 23.8125 73.6172 22.7812C73.5547 22.4531 73.4375 22.1484 73.2656 21.8672C73.125 21.6328 72.9297 21.4141 72.6797 21.2109C72.4297 20.9922 72.1094 20.8516 71.7188 20.7891L71.6953 20.4141C72.0078 20.4453 72.2969 20.4688 72.5625 20.4844C72.8438 20.4844 73.0859 20.4844 73.2891 20.4844H73.9453C74.1328 20.5 74.3203 20.5078 74.5078 20.5078C74.6797 20.5234 74.8516 20.5312 75.0234 20.5312C75.2109 20.5312 75.3906 20.5469 75.5625 20.5781C75.5156 21.1406 75.4766 21.7188 75.4453 22.3125C75.4141 22.8906 75.3906 23.4141 75.375 23.8828C75.3438 24.4297 75.3281 24.9609 75.3281 25.4766C75.2969 26.0547 75.2734 26.6875 75.2578 27.375C75.2422 28.0469 75.25 28.6875 75.2812 29.2969C75.3125 29.9062 75.3672 30.4453 75.4453 30.9141C75.5234 31.3672 75.6484 31.6641 75.8203 31.8047C75.9141 31.8672 76.0391 31.9297 76.1953 31.9922C76.3203 32.0547 76.4844 32.1172 76.6875 32.1797C76.9062 32.2422 77.1719 32.3047 77.4844 32.3672L77.5078 32.7656C77.1953 32.75 76.8906 32.75 76.5938 32.7656C76.3125 32.7656 76.0625 32.7656 75.8438 32.7656C75.5781 32.7812 75.3281 32.7891 75.0938 32.7891C74.7656 32.8047 74.4141 32.8359 74.0391 32.8828C73.7266 32.9141 73.375 32.9531 72.9844 33C72.5938 33.0469 72.2188 33.1016 71.8594 33.1641L71.6953 32.8828ZM74.1094 18.8438C73.625 18.875 73.25 18.7656 72.9844 18.5156C72.7188 18.25 72.5703 17.9531 72.5391 17.625C72.5078 17.2969 72.5938 16.9922 72.7969 16.7109C73.0156 16.4141 73.3594 16.2344 73.8281 16.1719C74.3125 16.1094 74.6953 16.2109 74.9766 16.4766C75.2734 16.7422 75.4453 17.0469 75.4922 17.3906C75.5391 17.7188 75.4531 18.0391 75.2344 18.3516C75.0156 18.6484 74.6406 18.8125 74.1094 18.8438Z"\n    fill="#291507"\n  />\n  <path\n    d="M120.65 25.886L119.61 29.0067L118.57 32.9596C118.57 32.9596 115.865 34.416 115.657 33.3757C115.449 32.3355 116.697 32.1274 116.697 32.1274L117.113 30.047L113.993 24.4297L120.65 25.886Z"\n    fill="#291507"\n  />\n  <path\n    d="M120.65 25.886L119.61 29.0067L118.57 32.9596C118.57 32.9596 115.865 34.416 115.657 33.3757C115.449 32.3355 116.697 32.1274 116.697 32.1274L117.113 30.047L113.993 24.4297L120.65 25.886Z"\n    fill="#291507"\n  />\n  <path\n    d="M102.966 24.6379L101.094 33.1679C101.094 33.1679 99.6373 34.0001 98.5971 33.584C97.5568 33.1679 99.2212 32.1276 99.2212 32.1276C99.2212 32.1276 98.5971 26.9265 95.4764 26.3023C92.3557 25.6782 102.966 24.6379 102.966 24.6379Z"\n    fill="#291507"\n  />\n  <path\n    d="M102.966 24.6379L101.094 33.1679C101.094 33.1679 99.6373 34.0001 98.5971 33.584C97.5568 33.1679 99.2212 32.1276 99.2212 32.1276C99.2212 32.1276 98.5971 26.9265 95.4764 26.3023C92.3557 25.6782 102.966 24.6379 102.966 24.6379Z"\n    fill="#291507"\n  />\n  <path\n    d="M90.6913 14.6517C90.6913 14.6517 94.8522 16.108 98.5971 15.2758C98.5971 15.2758 105.879 14.2356 106.503 14.0275C107.127 13.8195 114.201 13.4034 117.945 14.0275C117.945 14.0275 128.348 5.91369 122.523 2.37689C122.523 2.37689 120.026 3.62517 119.402 2.79298C119.168 2.48091 119.285 2.08107 119.522 1.70317C119.791 1.29255 120.155 0.953492 120.584 0.715303C121.013 0.477114 121.494 0.346958 121.984 0.336097C124.158 0.254703 128.054 1.03591 126.286 8.14394C125.782 10.1045 124.853 11.9304 123.566 13.4926C122.618 14.6606 121.638 16.277 122.106 17.5643C122.939 19.8529 123.147 23.3897 123.147 23.3897L126.059 27.7586C126.059 27.7586 127.724 33.1679 127.724 33.3759C127.724 33.584 125.46 34.0253 125.019 33.584C124.603 33.1679 125.643 32.3357 125.643 32.3357C125.643 32.3357 124.811 30.6713 123.355 30.2552C121.898 29.8391 117.945 28.3828 117.321 27.7586C116.697 27.1345 103.382 23.3897 99.6373 26.9265C97.5358 28.9341 95.3124 30.8101 92.9798 32.5437C92.9798 32.5437 91.9396 34.0001 90.6913 34.0001C89.443 34.0001 89.235 32.1276 90.6913 31.9196C92.1476 31.7115 94.2281 26.7184 94.2281 26.7184C94.2281 26.7184 94.8522 22.9736 91.7315 22.3494C90.0112 22.0054 88.9863 21.9774 88.4129 22.0216C88.1839 22.0407 87.9534 22.0134 87.7352 21.9414C87.517 21.8695 87.3154 21.7543 87.1426 21.6029C86.7714 21.2459 86.4388 20.8507 86.1505 20.4239C86.0744 20.3155 86.0254 20.1905 86.0076 20.0593C85.9897 19.9281 86.0035 19.7945 86.0479 19.6697C86.325 18.9134 86.5556 18.1408 86.7384 17.3563C86.9464 16.3161 88.6108 15.4839 88.6108 15.4839C88.6108 15.4839 89.0269 12.5712 89.6511 13.4034C89.9709 13.8412 90.3183 14.2581 90.6913 14.6517Z"\n    fill="#291507"\n  />\n  <path\n    d="M90.6913 14.6517C90.6913 14.6517 94.8522 16.108 98.5971 15.2758C98.5971 15.2758 105.879 14.2356 106.503 14.0275C107.127 13.8195 114.201 13.4034 117.945 14.0275C117.945 14.0275 128.348 5.91369 122.523 2.37689C122.523 2.37689 120.026 3.62517 119.402 2.79298C119.168 2.48091 119.285 2.08107 119.522 1.70317C119.791 1.29255 120.155 0.953492 120.584 0.715303C121.013 0.477114 121.494 0.346958 121.984 0.336097C124.158 0.254703 128.054 1.03591 126.286 8.14394C125.782 10.1045 124.853 11.9304 123.566 13.4926C122.618 14.6606 121.638 16.277 122.106 17.5643C122.939 19.8529 123.147 23.3897 123.147 23.3897L126.059 27.7586C126.059 27.7586 127.724 33.1679 127.724 33.3759C127.724 33.584 125.46 34.0253 125.019 33.584C124.603 33.1679 125.643 32.3357 125.643 32.3357C125.643 32.3357 124.811 30.6713 123.355 30.2552C121.898 29.8391 117.945 28.3828 117.321 27.7586C116.697 27.1345 103.382 23.3897 99.6373 26.9265C97.5358 28.9341 95.3124 30.8101 92.9798 32.5437C92.9798 32.5437 91.9396 34.0001 90.6913 34.0001C89.443 34.0001 89.235 32.1276 90.6913 31.9196C92.1476 31.7115 94.2281 26.7184 94.2281 26.7184C94.2281 26.7184 94.8522 22.9736 91.7315 22.3494C90.0112 22.0054 88.9863 21.9774 88.4129 22.0216C88.1839 22.0407 87.9534 22.0134 87.7352 21.9414C87.517 21.8695 87.3154 21.7543 87.1426 21.6029C86.7714 21.2459 86.4388 20.8507 86.1505 20.4239C86.0744 20.3155 86.0254 20.1905 86.0076 20.0593C85.9897 19.9281 86.0035 19.7945 86.0479 19.6697C86.325 18.9134 86.5556 18.1408 86.7384 17.3563C86.9464 16.3161 88.6108 15.4839 88.6108 15.4839C88.6108 15.4839 89.0269 12.5712 89.6511 13.4034C89.9709 13.8412 90.3183 14.2581 90.6913 14.6517Z"\n    fill="#291507"\n  />\n</svg>\n'},useData:!0})},7067:function(C,e,n){var t=n(202);C.exports=(t.default||t).template({compiler:[8,">= 4.3.0"],main:function(C,e,n,t,a){return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\n  \x3c!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e\n  <path\n    d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"\n  ></path>\n</svg>\n'},useData:!0})}},n={};function t(C){var a=n[C];if(void 0!==a)return a.exports;var i=n[C]={exports:{}};return e[C](i,i.exports,t),i.exports}t.m=e,C=[],t.O=function(e,n,a,i){if(!n){var o=1/0;for(c=0;c<C.length;c++){n=C[c][0],a=C[c][1],i=C[c][2];for(var l=!0,r=0;r<n.length;r++)(!1&i||o>=i)&&Object.keys(t.O).every((function(C){return t.O[C](n[r])}))?n.splice(r--,1):(l=!1,i<o&&(o=i));if(l){C.splice(c--,1);var s=a();void 0!==s&&(e=s)}}return e}i=i||0;for(var c=C.length;c>0&&C[c-1][2]>i;c--)C[c]=C[c-1];C[c]=[n,a,i]},t.n=function(C){var e=C&&C.__esModule?function(){return C.default}:function(){return C};return t.d(e,{a:e}),e},t.d=function(C,e){for(var n in e)t.o(e,n)&&!t.o(C,n)&&Object.defineProperty(C,n,{enumerable:!0,get:e[n]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(C){if("object"==typeof window)return window}}(),t.o=function(C,e){return Object.prototype.hasOwnProperty.call(C,e)},t.p="/catwiki-challenge/",function(){var C={826:0};t.O.j=function(e){return 0===C[e]};var e=function(e,n){var a,i,o=n[0],l=n[1],r=n[2],s=0;if(o.some((function(e){return 0!==C[e]}))){for(a in l)t.o(l,a)&&(t.m[a]=l[a]);if(r)var c=r(t)}for(e&&e(n);s<o.length;s++)i=o[s],t.o(C,i)&&C[i]&&C[i][0](),C[i]=0;return t.O(c)},n=self.webpackChunkhandlebars_example=self.webpackChunkhandlebars_example||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var a=t.O(void 0,[202,669],(function(){return t(150)}));a=t.O(a)}();