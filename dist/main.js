!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);var n=()=>{const e=document.querySelector("menu");document.body.addEventListener("click",()=>{let t=event.target;t&&t.closest(".menu")?e.classList.add("active-menu"):(t&&(t.classList.contains("close-btn")||"A"===t.tagName)||!t.classList.contains("active-menu"))&&e.classList.remove("active-menu")})};var r=()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),o=document.querySelector(".popup-close"),n=document.querySelector(".popup-content");t.forEach(t=>{t.addEventListener("click",()=>{if(screen.width>768){e.style.display="block";var t=Date.now(),o=setInterval(function(){var e=Date.now()-t;e>=1800?clearInterval(o):function(e){n.style.left=e/3+"px"}(e)},20)}else e.style.display="block"})}),o.addEventListener("click",()=>{e.style.display="none"})};var l=()=>{const e=document.querySelector(".service-header"),t=e.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",e=>{let n=e.target;(n=n.closest(".service-header-tab"))&&t.forEach((e,r)=>{e===n&&(e=>{for(let n=0;n<o.length;n++)e===n?(t[n].classList.add("active"),o[n].classList.remove("d-none")):(t[n].classList.remove("active"),o[n].classList.add("d-none"))})(r)})})};var c=()=>{const e=document.querySelectorAll(".portfolio-item"),t=(document.querySelectorAll(".portfolio-btn"),document.querySelector(".portfolio-content")),o=document.querySelector(".portfolio-dots");let n;(()=>{for(let t=0;t<e.length;t++){let e;(e=document.createElement("li")).classList.add("dot"),o.appendChild(e)}n=document.querySelectorAll(".dot")})();let r,l=0;const c=(e,t,o)=>{e[t].classList.remove(o)},a=(e,t,o)=>{e[t].classList.add(o)},u=()=>{c(e,l,"portfolio-item-active"),c(n,l,"dot-active"),++l>=e.length&&(l=0),a(e,l,"portfolio-item-active"),a(n,l,"dot-active")},s=(e=3e3)=>{r=setInterval(u,e)};t.addEventListener("click",t=>{t.preventDefault();let o=t.target;o.matches(".portfolio-btn, .dot")&&(c(e,l,"portfolio-item-active"),c(n,l,"dot-active"),o.matches("#arrow-right")?l++:o.matches("#arrow-left")?l--:o.matches(".dot")&&n.forEach((e,t)=>{e===o&&(l=t)}),l>=e.length&&(l=0),l<0&&(l=e.length-1),a(e,l,"portfolio-item-active"),a(n,l,"dot-active"))}),t.addEventListener("mouseover",e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(r)}),t.addEventListener("mouseout",e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&s()}),s(1500)};var a=()=>{let e=document.querySelectorAll(".command__photo");for(let t of e){let e=t.src;t.addEventListener("mouseenter",e=>{e.target.matches(".command__photo")&&(e.target.src=e.target.dataset.img)}),t.addEventListener("mouseout",t=>{t.target.src=e})}};var u=()=>{let e=document.querySelectorAll(".calc-item");for(let t of e)t.addEventListener("input",()=>{t.value=t.value.replace(/[^\d.]/g,"")})};var s=(e=100)=>{const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),n=document.querySelector(".calc-square"),r=document.querySelector(".calc-day"),l=document.querySelector(".calc-count"),c=document.getElementById("total");t.addEventListener("change",t=>{const a=t.target;(a.matches("input")||a.matches("select"))&&(()=>{let t=0,a=1,u=1;const s=o.options[o.selectedIndex].value,i=+n.value;l.value>1&&(a+=(l.value-1)/10),r.value&&r.value<5?u*=2:r.value&&r<10&&(u*=1.5),s&&i&&(t=Math.ceil(e*s*i*a*u)),c.textContent=t})()})};var i=()=>{const e=document.querySelectorAll('input[name="user_name"]'),t=document.querySelectorAll(".form-email"),o=document.querySelectorAll(".form-phone"),n=document.getElementById("form2-message"),r=document.querySelectorAll("form"),l=document.createElement("div");l.style.cssText="font-size: 2rem;",l.style.cssText="color: white;";for(let a of r)a.addEventListener("submit",r=>{r.preventDefault(),a.appendChild(l),l.textContent="Загрузка...";const u=new FormData(a);let s={};u.forEach((e,t)=>{s[t]=e}),c(s).then(r=>{for(let t of e)t.value="";for(let e of o)e.value="";for(let e of t)e.value="";if(n.value="",200!==r.status)throw new Error("status network not 200");l.textContent="Спасибо! Мы скоро с вами свяжемся"}).catch(e=>l.textContent="Что то пошло не так...")});const c=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),credentials:"include"})};var d=()=>{let e=document.querySelectorAll('input[name="user_name"]'),t=document.querySelectorAll('input[name="user_phone"]'),o=document.querySelector(".mess");const n=()=>{for(let t of e)t.value=t.value.replace(/[^А-Яа-я\s]/g,"")};for(let t of e)t.addEventListener("input",n);const r=()=>{for(let e of t)e.value=e.value.replace(/[^0-9+]/g,"")};for(let e of t)e.addEventListener("input",r);o.addEventListener("input",()=>{o.value=o.value.replace(/[^А-Яа-я\s]/g,"")})};(function(e){let t=document.querySelector("#timer-hours"),o=document.querySelector("#timer-minutes"),n=document.querySelector("#timer-seconds");function r(e){return e>=0&&e<10?"0"+e:e}!function l(){let c=function(){let t=r((new Date(e).getTime()-(new Date).getTime())/1e3),o=r(Math.floor(t%60)),n=r(Math.floor(t/60%60));return{timeRemaining:t,hours:r(Math.floor(t/60/60)),minutes:n,seconds:o}}();t.textContent=c.hours,o.textContent=c.minutes,n.textContent=c.seconds,c.timeRemaining>0?setInterval(l,1e3):(t.textContent="00",o.textContent="00",n.textContent="00")}()})("20 july 2019"),n(),r(),l(),c(),a(),u(),s(100),i(),d()}]);