import{S as b,N as h,K as g,M as L,A as k,a as C,i as E}from"./assets/vendor-DGPxZxZE.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=e(t);fetch(t.href,n)}})();const I=document.querySelector(".menu-button"),p=document.querySelector(".mobile-menu-wrapper"),M=document.querySelector(".mobile-menu-close-btn"),P=document.querySelectorAll(".mobile-menu-link"),O=document.querySelector(".mobile-order-button"),v=document.querySelector(".tablet-and-desktop-menu-navigation-wrapper"),B=document.querySelector(".menu-link");I.addEventListener("click",()=>{p.classList.add("is-open"),document.body.style.overflow="hidden"});M.addEventListener("click",()=>{p.classList.remove("is-open"),document.body.style.overflow="auto"});P.forEach(s=>{s.addEventListener("click",()=>{p.classList.remove("is-open"),document.body.style.overflow="auto"})});O.addEventListener("click",()=>{p.classList.remove("is-open"),document.body.style.overflow="auto"});B.addEventListener("click",s=>{s.preventDefault(),getComputedStyle(v).display==="none"?v.style.display="block":v.style.display="none"});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".about-me-list-item").forEach((e,i)=>{const t=e.querySelector(".about-me-button"),n=e.querySelector(".about-me-description, .item-description"),l=t.querySelector(".about-me-icon");n.style.overflow="hidden",n.style.transition="max-height 0.3s ease-out",n.style.maxHeight=i===0?"1000px":"0",t.addEventListener("click",function(){n.style.maxHeight!=="0px"?(n.style.maxHeight="0",l.querySelector("use").setAttribute("href","./img/icons.svg#icon-arrow-bot")):(n.style.maxHeight="1000px",l.querySelector("use").setAttribute("href","./img/icons.svg#icon-arrow-top"))})});function o(){const e=new b("#swiperLibrary",{modules:[h,g,L],keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{enabled:!0,invert:!1},navigation:{nextEl:".button-swipe",disabledClass:"disabled-button"},loop:!0,slidesPerView:"auto",speed:500,spaceBetween:0,slideToClickedSlide:!0,allowTouchMove:!0,centeredSlides:!1,breakpoints:{768:{slidesPerView:3,width:600},1440:{slidesPerView:6,width:1200}}}),i=document.querySelector(".button-swipe");if(i&&i.addEventListener("click",()=>{e.slideNext()}),e!=null&&e.el){let f=function(){e.setTranslate(a)},u=function(){const r=a-d,c=e.width/4;r<-c?e.slideNext():r>c?e.slidePrev():e.slideTo(e.activeIndex)};e.el.addEventListener("touchstart",r=>{r.preventDefault(),e.slideNext()},{passive:!1});let t;e.el.addEventListener("wheel",r=>{r.preventDefault(),clearTimeout(t),t=setTimeout(()=>{r.deltaY>0?e.slideNext():e.slidePrev()},50)},{passive:!1});let n=!1,l,a,d;e.el.addEventListener("mousedown",r=>{n=!0,l=r.pageX-e.el.offsetLeft,d=e.translate,e.el.classList.add("grabbing"),e.allowClick=!1}),e.el.addEventListener("mouseup",()=>{n=!1,e.el.classList.remove("grabbing"),e.allowClick=!0,u()}),e.el.addEventListener("mousemove",r=>{if(n){const c=r.pageX-e.el.offsetLeft;a=d+(c-l),f()}})}}o()});function T(){new b(".swiper",{modules:[h,g,L],keyboard:{enabled:!0},mousewheel:{enabled:!0},loop:!1,slidesPerView:1,speed:1e3,navigation:{prevEl:".swiper-prev",nextEl:".swiper-next",disabledClass:"disabled-button"}})}document.addEventListener("DOMContentLoaded",T);new k(".faq-list",{duration:400,showOne:!0,showMultiple:!0,onToggle:function(s){const o=s.closest(".faq-item");if(o){o.classList.toggle("is-active");const e=o.querySelector(".ac-panel");e&&(o.classList.contains("is-active")?e.style.maxHeight=e.scrollHeight+"px":e.style.maxHeight=null)}}});const D=document.querySelector(".covers-section"),N={root:null,rootMargin:"500px",threshold:.5},A=s=>{s.forEach(o=>{o.isIntersecting?H():V()})};function V(){document.querySelectorAll(".covers-slide").forEach(o=>o.classList.remove("animation"))}function H(){document.querySelectorAll(".covers-slide").forEach(o=>o.classList.add("animation"))}const F=new IntersectionObserver(A,N);F.observe(D);const j="https://portfolio-js.b.goit.study";function $(){const o=`${j}/api/reviews`;return C.get(o).then(e=>e.data).catch(R)}function R(s){throw E.error({title:"Error!",message:"Sorry, something went wrong. Please try again.",position:"topRight"}),s}const _=document.querySelector(".error-message"),K=document.querySelector(".reviews-list"),X=document.querySelector(".swiper-container");function z(s){E.error({title:"Error",message:s,position:"topRight"})}function W(s){if(s.length===0)w();else{const o=s.map(e=>`<li class="reviews-item swiper-slide">
          <img src="${e.avatar_url}" alt="" width="48" height="48"  class="reviews-avatar"/>
          <div class="reviews-info">
            <h3 class="reviews-name">${e.author}</h3>
            <p class="reviews-text">${e.review}</p>
           </div>
         </li>`).join("");K.innerHTML=o,J()}}function w(){X.style.display="none",_.style.display="block",z("Problem with the server connection, reviews can not be rendered")}function G(){$().then(s=>{s&&s.length>0?W(s):w()}).catch(s=>{console.error(s),w()})}function J(){document.querySelector(".prev-reviews-btn"),document.querySelector(".next-reviews-btn"),new b(".swiper-container",{modules:[h,g,L],slidesPerView:1,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{enabled:!0},speed:800,spaceBetween:16,allowTouchMove:!0,loop:!1,watchOverflow:!0,slideToClickedSlide:!0,navigation:{nextEl:".next-reviews-btn",prevEl:".prev-reviews-btn"}})}document.addEventListener("DOMContentLoaded",G);document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("contactForm"),o=document.getElementById("email"),e=document.getElementById("emailSuccessMessage"),i=o.closest(".input-form"),t=document.getElementById("comments"),n=document.querySelector(".window-btn"),l=document.querySelector(".backdrop"),a="is-open",d=document.querySelector("body");o.addEventListener("input",()=>{o.value!==""?(o.style.color="#fafafa",o.style.borderBottomColor="#fafafa"):(o.style.color="",o.style.borderBottomColor="")}),t.addEventListener("input",()=>{t.value.length>50&&(t.value=t.value.substring(0,50)+"..."),t.value!==""?(t.style.color="#fafafa",t.style.borderBottomColor="#fafafa"):(t.style.color="",t.style.borderBottomColor="")}),s.addEventListener("submit",async r=>{r.preventDefault();const c=new FormData(s),x=c.get("email");let m=c.get("comments");m.length>50&&(m=m.substring(0,50)+"...");const q={email:x,comment:m};try{const y=await fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(q)});if(!y.ok){const S=await y.json();throw console.error("Server error:",S),new Error(S||"Invalid email, try again")}e.textContent="Success!",e.className="message",e.style.display="block",i.classList.add("success"),i.classList.remove("error"),f(),s.reset()}catch{e.textContent="Invalid email, try again",e.className="message error",e.style.display="block",i.classList.add("error"),i.classList.remove("success")}});function f(){l.classList.add(a),d.style.overflow="hidden"}n.addEventListener("click",()=>{u()}),l.addEventListener("click",r=>{r.target===l&&u()}),document.addEventListener("keydown",r=>{r.key==="Escape"&&u()});function u(){l.classList.remove(a),document.body.style.overflow="auto",e.textContent="",i.classList.remove("success"),i.classList.remove("error"),o.style.color="",o.style.borderBottomColor=""}});
//# sourceMappingURL=index.js.map
