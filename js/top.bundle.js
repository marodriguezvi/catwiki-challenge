/*! For license information please see top.bundle.js.LICENSE.txt */
(()=>{var t,e={6715:(t,e,r)=>{"use strict";const n=r.p+"assets/icon.png";var o=r(2862),i=r.n(o);function a(t){t.forEach((function(t){t.style.height="".concat(t.offsetWidth,"px")}))}function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function l(){l=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),a=new E(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return k()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=f(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var h={};function p(){}function d(){}function v(){}var y={};u(y,o,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(j([])));g&&g!==e&&r.call(g,o)&&(y=g);var w=v.prototype=p.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function n(o,i,a,l){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==c(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,a,l)}),(function(t){n("throw",t,a,l)})):e.resolve(h).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,l)}))}l(u.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function L(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function j(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:k}}function k(){return{value:void 0,done:!0}}return d.prototype=v,u(w,"constructor",v),u(v,"constructor",d),d.displayName=u(v,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,a,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(x.prototype),u(x.prototype,i,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),u(w,a,"Generator"),u(w,o,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}function u(t,e,r,n,o,i,a){try{var c=t[i](a),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,o)}function s(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){u(i,n,o,a,c,"next",t)}function c(t){u(i,n,o,a,c,"throw",t)}a(void 0)}))}}document.addEventListener("DOMContentLoaded",s(l().mark((function t(){var e,r,o;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=document.getElementById("top-template-content"),r=JSON.parse(localStorage.getItem("topBreeds")),e.innerHTML=i()({breeds:r}),c=n,document.querySelector('link[rel="icon"]').href=c,a(o=document.querySelectorAll(".top-list__image .image")),window.addEventListener("resize",(function(){a(o)}));case 7:case"end":return t.stop()}var c}),t)}))))},2862:(t,e,r)=>{var n=r(202);t.exports=(n.default||n).template({1:function(t,e,r,n,o){var i,a=null!=e?e:t.nullContext||{},c=t.hooks.helperMissing,l="function",u=t.escapeExpression,s=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return'    <div class="top-list__item">\n      <div class="top-list__image">\n        <img src='+u(typeof(i=null!=(i=s(r,"imageUrl")||(null!=e?s(e,"imageUrl"):e))?i:c)===l?i.call(a,{name:"imageUrl",hash:{},data:o,loc:{start:{line:6,column:17},end:{line:6,column:29}}}):i)+' class="image" alt="cat image">\n      </div>\n      <div class="top-list__paragraph">\n        <h2 class="top-list__title title">'+u(typeof(i=null!=(i=s(r,"index")||(null!=e?s(e,"index"):e))?i:c)===l?i.call(a,{name:"index",hash:{},data:o,loc:{start:{line:9,column:42},end:{line:9,column:51}}}):i)+". "+u(typeof(i=null!=(i=s(r,"name")||(null!=e?s(e,"name"):e))?i:c)===l?i.call(a,{name:"name",hash:{},data:o,loc:{start:{line:9,column:53},end:{line:9,column:61}}}):i)+"</h2>\n        <p>"+u(typeof(i=null!=(i=s(r,"description")||(null!=e?s(e,"description"):e))?i:c)===l?i.call(a,{name:"description",hash:{},data:o,loc:{start:{line:10,column:11},end:{line:10,column:26}}}):i)+"</p>\n      </div>\n    </div>\n"},compiler:[8,">= 4.3.0"],main:function(t,e,r,n,o){var i,a=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return'<section class="top-list">\n  <h1 class="title">Top 10 most searched breeds</h1>\n'+(null!=(i=a(r,"each").call(null!=e?e:t.nullContext||{},null!=e?a(e,"breeds"):e,{name:"each",hash:{},fn:t.program(1,o,0),inverse:t.noop,data:o,loc:{start:{line:3,column:2},end:{line:13,column:11}}}))?i:"")+"</section>"},useData:!0})}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={exports:{}};return e[t](i,i.exports,n),i.exports}n.m=e,t=[],n.O=(e,r,o,i)=>{if(!r){var a=1/0;for(s=0;s<t.length;s++){for(var[r,o,i]=t[s],c=!0,l=0;l<r.length;l++)(!1&i||a>=i)&&Object.keys(n.O).every((t=>n.O[t](r[l])))?r.splice(l--,1):(c=!1,i<a&&(a=i));if(c){t.splice(s--,1);var u=o();void 0!==u&&(e=u)}}return e}i=i||0;for(var s=t.length;s>0&&t[s-1][2]>i;s--)t[s]=t[s-1];t[s]=[r,o,i]},n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.p="/catwiki-challenge/",(()=>{var t={550:0};n.O.j=e=>0===t[e];var e=(e,r)=>{var o,i,[a,c,l]=r,u=0;if(a.some((e=>0!==t[e]))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(l)var s=l(n)}for(e&&e(r);u<a.length;u++)i=a[u],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(s)},r=self.webpackChunkhandlebars_example=self.webpackChunkhandlebars_example||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})();var o=n.O(void 0,[202],(()=>n(6715)));o=n.O(o)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxFQUFxQkMsS0FBcUMsK0JBQUlBLEtBQXFDLGdDQUFLLEdBQzVHRCxFQUFtQnBHLFFBQVE4RixFQUFxQlEsS0FBSyxLQUFNLElBQzNERixFQUFtQkcsS0FBT1QsRUFBcUJRLEtBQUssS0FBTUYsRUFBbUJHLEtBQUtELEtBQUtGLFFDN0N2RixJQUFJSSxFQUFzQm5ELEVBQW9CTSxPQUFFSCxFQUFXLENBQUMsTUFBTSxJQUFPSCxFQUFvQixRQUM3Rm1ELEVBQXNCbkQsRUFBb0JNLEVBQUU2QyIsInNvdXJjZXMiOlsid2VicGFjazovL2hhbmRsZWJhcnMtZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2hhbmRsZWJhcnMtZXhhbXBsZS8uL3NyYy9zY3JpcHRzL3V0aWxzLmpzIiwid2VicGFjazovL2hhbmRsZWJhcnMtZXhhbXBsZS8uL3NyYy9zY3JpcHRzL3RvcC5qcyIsIndlYnBhY2s6Ly9oYW5kbGViYXJzLWV4YW1wbGUvLi9zcmMvdGVtcGxhdGVzL3RvcC5oYnMiLCJ3ZWJwYWNrOi8vaGFuZGxlYmFycy1leGFtcGxlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2hhbmRsZWJhcnMtZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9oYW5kbGViYXJzLWV4YW1wbGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2hhbmRsZWJhcnMtZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2hhbmRsZWJhcnMtZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2hhbmRsZWJhcnMtZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9oYW5kbGViYXJzLWV4YW1wbGUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vaGFuZGxlYmFycy1leGFtcGxlL3dlYnBhY2svc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvKipcbiAqIEJ1aWxkIHNyYyBpbWFnZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBicmVlZElkIC0gQnJlZWQgaWQuXG4gKiBAcGFyYW0ge1N0cmluZ30gc2l6ZSAtIEltYWdlIHNpemUuXG4gKiBAcmV0dXJuIHtVUkx9IFVSTCBmb3IgdGhlIGltYWdlIHNyYy5cbiAqL1xuZnVuY3Rpb24gZ2V0U3JjSW1hZ2UoYnJlZWRJZCA9ICcnLCBzaXplID0gJ3NtYWxsJykge1xuICBjb25zdCBxdWVyeSA9IGBzZWFyY2g/aGFzX2JyZWVkcz0xJmJyZWVkX2lkcz0ke2JyZWVkSWR9JmZvcm1hdD1zcmMmbWltZV90eXBlcz1qcGcmc2l6ZT0ke3NpemV9YDtcbiAgcmV0dXJuIGAke3Byb2Nlc3MuZW52LkFQSV9VUkx9L3YxL2ltYWdlcy8ke3F1ZXJ5fWA7XG59XG5cbi8qKlxuICogQWRkIGZhdmljb24gdG8gY3VycmVudCBkb2N1bWVudC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoIC0gSWNvbiBwYXRoLlxuICovXG5mdW5jdGlvbiBhZGRGYXZpY29uKHBhdGgpIHtcbiAgY29uc3QgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpbmtbcmVsPVwiaWNvblwiXScpO1xuICBpY29uLmhyZWYgPSBwYXRoO1xufVxuXG4vKipcbiAqIEdldCBhbGwgZmlsZXMgZnJvbSB3ZWJwYWNrIGNvbnRleHQuXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0RWxlbWVudHMgLSBIVE1MRWxlbWVudHMuXG4gKi9cbmZ1bmN0aW9uIHJlc2l6ZUVsZW1lbnRzKGxpc3RFbGVtZW50cykge1xuICBsaXN0RWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBlbC5zdHlsZS5oZWlnaHQgPSBgJHtlbC5vZmZzZXRXaWR0aH1weGA7XG4gIH0pO1xufVxuXG4vKipcbiAqIEdldCBhbGwgZmlsZXMgZnJvbSB3ZWJwYWNrIGNvbnRleHQuXG4gKiBAcGFyYW0ge0FycmF5fSBicmVlZExpc3QgLSBCcmVlZCBsaXN0LlxuICogQHJldHVybiB7QXJyYXl9IC0gRmlsdGVyZWQgYnJlZWQgaW5mb3JtYXRpb24uXG4gKi9cbmZ1bmN0aW9uIGdldEJyZWVkSW5mbyhicmVlZExpc3QpIHtcbiAgcmV0dXJuIGJyZWVkTGlzdC5tYXAoKGVsLCBpbmRleCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBpbmRleDogaW5kZXggKyAxLFxuICAgICAgbmFtZTogZWxbMF0uYnJlZWRzWzBdLm5hbWUsXG4gICAgICBkZXNjcmlwdGlvbjogZWxbMF0uYnJlZWRzWzBdLmRlc2NyaXB0aW9uLFxuICAgICAgaW1hZ2VVcmw6IGVsWzBdLnVybCxcbiAgICB9O1xuICB9KTtcbn1cblxuZXhwb3J0IHsgZ2V0U3JjSW1hZ2UsIGFkZEZhdmljb24sIHJlc2l6ZUVsZW1lbnRzLCBnZXRCcmVlZEluZm8gfTtcbiIsImltcG9ydCAnLi4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0IGljb24gZnJvbSAnLi4vYXNzZXRzL2ljb24ucG5nJztcbmltcG9ydCB0b3BUZW1wbGF0ZSBmcm9tICcuLi90ZW1wbGF0ZXMvdG9wLmhicyc7XG5pbXBvcnQgeyByZXNpemVFbGVtZW50cywgYWRkRmF2aWNvbiB9IGZyb20gJy4vdXRpbHMnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgYXN5bmMgKCkgPT4ge1xuICBjb25zdCB0b3BDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvcC10ZW1wbGF0ZS1jb250ZW50Jyk7XG4gIGxldCBicmVlZHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b3BCcmVlZHMnKSk7XG5cbiAgdG9wQ29udGVudC5pbm5lckhUTUwgPSB0b3BUZW1wbGF0ZSh7IGJyZWVkcyB9KTtcbiAgYWRkRmF2aWNvbihpY29uKTtcbiAgY29uc3QgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvcC1saXN0X19pbWFnZSAuaW1hZ2UnKTtcbiAgcmVzaXplRWxlbWVudHMoaW1hZ2VzKTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgIHJlc2l6ZUVsZW1lbnRzKGltYWdlcyk7XG4gIH0pO1xufSk7XG4iLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgaGVscGVyLCBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwgYWxpYXMyPWNvbnRhaW5lci5ob29rcy5oZWxwZXJNaXNzaW5nLCBhbGlhczM9XCJmdW5jdGlvblwiLCBhbGlhczQ9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIiAgICA8ZGl2IGNsYXNzPVxcXCJ0b3AtbGlzdF9faXRlbVxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwidG9wLWxpc3RfX2ltYWdlXFxcIj5cXG4gICAgICAgIDxpbWcgc3JjPVwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImltYWdlVXJsXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImltYWdlVXJsXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJpbWFnZVVybFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjo2LFwiY29sdW1uXCI6MTd9LFwiZW5kXCI6e1wibGluZVwiOjYsXCJjb2x1bW5cIjoyOX19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiIGNsYXNzPVxcXCJpbWFnZVxcXCIgYWx0PVxcXCJjYXQgaW1hZ2VcXFwiPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInRvcC1saXN0X19wYXJhZ3JhcGhcXFwiPlxcbiAgICAgICAgPGgyIGNsYXNzPVxcXCJ0b3AtbGlzdF9fdGl0bGUgdGl0bGVcXFwiPlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImluZGV4XCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImluZGV4XCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJpbmRleFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjo5LFwiY29sdW1uXCI6NDJ9LFwiZW5kXCI6e1wibGluZVwiOjksXCJjb2x1bW5cIjo1MX19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiLiBcIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJuYW1lXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcIm5hbWVcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcIm5hbWVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6OSxcImNvbHVtblwiOjUzfSxcImVuZFwiOntcImxpbmVcIjo5LFwiY29sdW1uXCI6NjF9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIjwvaDI+XFxuICAgICAgICA8cD5cIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJkZXNjcmlwdGlvblwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJkZXNjcmlwdGlvblwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwiZGVzY3JpcHRpb25cIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTAsXCJjb2x1bW5cIjoxMX0sXCJlbmRcIjp7XCJsaW5lXCI6MTAsXCJjb2x1bW5cIjoyNn19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiPC9wPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG5cIjtcbn0sXCJjb21waWxlclwiOls4LFwiPj0gNC4zLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCI8c2VjdGlvbiBjbGFzcz1cXFwidG9wLWxpc3RcXFwiPlxcbiAgPGgxIGNsYXNzPVxcXCJ0aXRsZVxcXCI+VG9wIDEwIG1vc3Qgc2VhcmNoZWQgYnJlZWRzPC9oMT5cXG5cIlxuICAgICsgKChzdGFjazEgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiZWFjaFwiKS5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiYnJlZWRzXCIpIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjozLFwiY29sdW1uXCI6Mn0sXCJlbmRcIjp7XCJsaW5lXCI6MTMsXCJjb2x1bW5cIjoxMX19fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCI8L3NlY3Rpb24+XCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvY2F0d2lraS1jaGFsbGVuZ2UvXCI7IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdDU1MDogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5raGFuZGxlYmFyc19leGFtcGxlXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2hhbmRsZWJhcnNfZXhhbXBsZVwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgWzIwMl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKDY3MTUpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iXSwibmFtZXMiOlsiZGVmZXJyZWQiLCJyZXNpemVFbGVtZW50cyIsImxpc3RFbGVtZW50cyIsImZvckVhY2giLCJlbCIsInN0eWxlIiwiaGVpZ2h0Iiwib2Zmc2V0V2lkdGgiLCJpIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwidG9wQ29udGVudCIsImdldEVsZW1lbnRCeUlkIiwiYnJlZWRzIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImlubmVySFRNTCIsInRvcFRlbXBsYXRlIiwicGF0aCIsImljb24iLCJxdWVyeVNlbGVjdG9yIiwiaHJlZiIsImltYWdlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ3aW5kb3ciLCJIYW5kbGViYXJzIiwibW9kdWxlIiwiZXhwb3J0cyIsInRlbXBsYXRlIiwiY29udGFpbmVyIiwiZGVwdGgwIiwiaGVscGVycyIsInBhcnRpYWxzIiwiZGF0YSIsImhlbHBlciIsImFsaWFzMSIsIm51bGxDb250ZXh0IiwiYWxpYXMyIiwiaG9va3MiLCJoZWxwZXJNaXNzaW5nIiwiYWxpYXMzIiwiYWxpYXM0IiwiZXNjYXBlRXhwcmVzc2lvbiIsImxvb2t1cFByb3BlcnR5IiwicGFyZW50IiwicHJvcGVydHlOYW1lIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwic3RhY2sxIiwicHJvZ3JhbSIsIm5vb3AiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJ1bmRlZmluZWQiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwibSIsIk8iLCJyZXN1bHQiLCJjaHVua0lkcyIsImZuIiwicHJpb3JpdHkiLCJub3RGdWxmaWxsZWQiLCJJbmZpbml0eSIsImxlbmd0aCIsImZ1bGZpbGxlZCIsImoiLCJrZXlzIiwiZXZlcnkiLCJrZXkiLCJzcGxpY2UiLCJyIiwibiIsImdldHRlciIsIl9fZXNNb2R1bGUiLCJkIiwiYSIsImRlZmluaXRpb24iLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiZyIsImdsb2JhbFRoaXMiLCJ0aGlzIiwiRnVuY3Rpb24iLCJlIiwib2JqIiwicHJvcCIsInAiLCJpbnN0YWxsZWRDaHVua3MiLCJjaHVua0lkIiwid2VicGFja0pzb25wQ2FsbGJhY2siLCJwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiIsIm1vcmVNb2R1bGVzIiwicnVudGltZSIsInNvbWUiLCJpZCIsImNodW5rTG9hZGluZ0dsb2JhbCIsInNlbGYiLCJiaW5kIiwicHVzaCIsIl9fd2VicGFja19leHBvcnRzX18iXSwic291cmNlUm9vdCI6IiJ9