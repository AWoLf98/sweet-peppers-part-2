import{a as p,A as q,S as g,N as k,K as C}from"./assets/vendor-fca32f99.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))m(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const v of r.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&m(v)}).observe(document,{childList:!0,subtree:!0});function s(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function m(i){if(i.ep)return;i.ep=!0;const r=s(i);fetch(i.href,r)}})();p.defaults.baseURL="https://portfolio-js.b.goit.study/api";p.defaults.headers.common.Accept="application/json";p.defaults.headers.common["Content-Type"]="application/json";function P(){return p.get("/reviews")}function B(e){return p.post("/requests",e)}const u={openCloseMenuBtn:document.querySelector("[data-menu-open-close]"),openMenuBtnModal:document.querySelector("[data-menu-open-modal]"),closeMenuBtnModal:document.querySelector("[data-menu-close-modal]"),closeMenuInList:document.querySelector("[data-menu-close-list]"),closeMenuInOrder:document.querySelector("[data-menu-close-order]"),menu:document.querySelector("[data-menu]"),menuModal:document.querySelector("[data-menu-modal]")};u.openCloseMenuBtn.addEventListener("click",A);u.openMenuBtnModal.addEventListener("click",b);u.closeMenuBtnModal.addEventListener("click",b);u.closeMenuInOrder.addEventListener("click",b);u.closeMenuInList.addEventListener("click",e=>{e.currentTarget!=e.target&&u.menuModal.classList.toggle("visually-hidden")});function A(){u.menu.classList.toggle("visually-hidden")}function b(){u.menuModal.classList.toggle("visually-hidden")}const f=document.querySelector(".button-hero-anime"),d=document.querySelector(".hero-section"),h=document.querySelectorAll(".hero-button");document.querySelector(".hero-section-decktop");const c=["#ed3b44","#2B4441","#0041e8"],T=Number(localStorage.getItem("index_color"));let o=T;f.addEventListener("click",()=>{o<=1?o+=1:o=0,h.forEach(e=>{h[o]===e?(e.style.color=c[o],c[o]==="#2B4441"&&(e.style.color="#09b109")):e.style.color=""}),document.documentElement.style.setProperty("--main-red",c[o]),c[o]==="#2B4441"?f.style.borderColor="#09b109":f.style.borderColor=c[o],o===1?(console.log("green"),d.classList.add("hero-sectio-one")):o===2?(console.log("blue"),d.classList.remove("hero-sectio-one"),d.classList.add("hero-sectio-two")):d.classList.remove("hero-sectio-two"),localStorage.setItem("index_color",o)});document.addEventListener("DOMContentLoaded",()=>{window.innerWidth<1440?document.documentElement.style.setProperty("--main-red","#ed3b44"):document.documentElement.style.setProperty("--main-red",c[o]),o===1?d.classList.add("hero-sectio-one"):o===2?(d.classList.remove("hero-sectio-one"),d.classList.add("hero-sectio-two")):d.classList.remove("hero-sectio-two"),c[o]==="#2B4441"?f.style.borderColor="#09b109":f.style.borderColor=c[o],h.forEach(e=>{h[o]===e?(e.style.color=c[o],c[o]==="#2B4441"&&(e.style.color="#09b109")):e.style.color=""})});function O(){window.innerWidth<1440?document.documentElement.style.setProperty("--main-red","#ed3b44"):document.documentElement.style.setProperty("--main-red",c[o])}window.addEventListener("resize",O);document.querySelectorAll(".two-about-button-icon");new q(".about-accordion-container",{duration:700,showMultiple:!0,collapse:!0,openOnInit:[0]});const a=new g(".about-me-slider",{loop:!0,speed:800,grabCursor:!0,allowTouchMove:!0,breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}}});document.querySelector(".about-me-swiper-container").addEventListener("mouseover",function(){document.addEventListener("keydown",w)});document.querySelector(".about-me-swiper-container").addEventListener("focusin",function(){document.addEventListener("keydown",w)});document.querySelector(".about-me-swiper-container").addEventListener("mouseout",function(){document.removeEventListener("keydown",w)});document.querySelector(".about-me-swiper-container").addEventListener("focusout",function(){document.removeEventListener("keydown",w)});function w(e){e.key==="ArrowLeft"?a.slidePrev():e.key==="ArrowRight"&&a.slideNext()}const R=document.querySelector(".next-about-me-btn");R.addEventListener("click",function(){a.slideNext()});a.on("slideNextTransitionStart",function(){const e=a.slides[a.activeIndex],t=document.querySelectorAll(".about-me-slider-item");e!==void 0&&e.classList.contains("about-me-slider-item")&&(e.style.backgroundColor="var(--main-red)"),t.forEach(s=>{s!==e&&(s.style.backgroundColor="")})});a.on("slidePrevTransitionStart",function(){const e=a.slides[a.activeIndex],t=document.querySelectorAll(".about-me-slider-item");e!==void 0&&e.classList.contains("about-me-slider-item")&&(e.style.backgroundColor="var(--main-red)"),t.forEach(s=>{s!==e&&(s.style.backgroundColor="")})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".about-me-slider-item:first-child");e.style.backgroundColor="var(--main-red)"});new g(".projects-swiper",{modules:[k,C],speed:800,grabCursor:!0,allowTouchMove:!0,direction:"horizontal",spaceBetween:16,navigation:{nextEl:".next-project-btn",prevEl:".prev-project-btn"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{sensitivity:1,eventsTarget:".projects-list"}});const j=new q(".faq-list",{duration:700,showMultiple:!0});document.addEventListener("scroll",V);const N=document.querySelector(".faq");function V(){const e=N.getBoundingClientRect();(e.bottom<=0||e.bottom>=e.height*2)&&j.closeAll()}const H=document.querySelectorAll(".animations");document.querySelector(".content");function M(){const e=window.innerHeight;H.forEach(t=>{const s=t.getBoundingClientRect().top,m=t.getBoundingClientRect().bottom;s>=0&&s<=e||m>=0&&m<=e?(console.log("зона видимості"),window.innerWidth<1440&&t.classList.add("animations-mobile-tablet")):t.classList.remove("animations-mobile-tablet")})}window.addEventListener("scroll",M);window.addEventListener("resize",M);const E=document.querySelector(".reviews-list");P().then(e=>{if(!e.statusText==="OK")throw new Error("Empty response data");S(e.data,E,!0)}).catch(()=>{$("Server error. Please try again!"),S([],E,!1)});function S(e,t,s){if(s){const m=e.map(({_id:i,author:r,avatar_url:v,review:I})=>`<li class="reviews-list-item swiper-slide" id="review-${i}">
          <picture>
            <source srcset="${v}" 
              type="image/jpeg">
              <img 
                class="review-photo" 
                src="${v}" 
                alt="${r} photo" 
                width="48" 
                height="48" 
                loading="lazy"
              />
          </picture>
          <h3 class="review-author">${r}</h3>
          <p class="review-text">${I}</p>
      </li>`).join("");t.insertAdjacentHTML("beforeend",m),z()}else t.insertAdjacentHTML("beforeend","<h3>Not found :(</h3>")}function z(){let e=document.querySelectorAll(".reviews-list-item"),t=Math.max(...Array.from(e,s=>s.clientHeight));e.forEach(s=>{s.style.height=t+"px"})}function $(e){const t=document.createElement("div");t.className="popup-server-error",t.textContent=e,document.body.appendChild(t),setTimeout(()=>{t.classList.add("activate-popup-animation")},50),setTimeout(()=>{t.classList.remove("activate-popup-animation")},4e3),setTimeout(t.remove.bind(t),5e3)}new g(".reviews-swiper",{modules:[k,C],speed:800,grabCursor:!0,allowTouchMove:!0,direction:"horizontal",watchOverflow:!0,spaceBetween:16,navigation:{nextEl:".next-review-btn",prevEl:".prev-review-btn"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{320:{slidesPerGroup:1,slidesPerView:1},768:{slidesPerGroup:2,slidesPerView:2},1440:{slidesPerGroup:4,slidesPerView:4}}});const n=document.querySelector(".work-form"),y=document.querySelector(".succes-text"),L=document.querySelector(".invalid-text"),l=document.querySelector(".backdrop"),x=/([A-z0-9_\.\-]{1,})@([A-z0-9_\.\-]{1,})\.([A-z]{2,8})/;n.elements.email.value=localStorage.getItem("email");n.elements.email.value=localStorage.getItem("comment");n.elements.email.addEventListener("blur",e=>{localStorage.setItem("email",n.elements.email.value.trim()),x.test(n.elements.email.value.trim())?(n.elements.email.classList.remove("invalid"),L.classList.add("visually-hidden"),n.elements.email.classList.add("succes"),y.classList.remove("visually-hidden")):(n.elements.email.classList.remove("succes"),y.classList.add("visually-hidden"),n.elements.email.classList.add("invalid"),L.classList.remove("visually-hidden")),n.elements.email.value.trim()||(n.elements.email.classList.remove("invalid"),n.elements.email.classList.remove("succes"),L.classList.add("visually-hidden"),y.classList.add("visually-hidden"))});n.elements.comment.addEventListener("input",()=>{localStorage.setItem("comment",n.elements.comment.value.trim())});n.addEventListener("submit",D);async function D(e){e.preventDefault(),x.test(n.elements.email.value.trim())&&await B({email:n.elements.email.value.trim(),comment:n.elements.comment.value.trim()}).then(t=>{n.elements.email.value="",n.elements.comment.value="",localStorage.removeItem("email"),localStorage.removeItem("comment"),n.elements.email.classList.remove("succes"),y.classList.add("visually-hidden"),document.querySelector(".modal-text").textContent="The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.",document.querySelector(".modal-title").textContent="Thank you for your interest in cooperation!",l.classList.remove("visually-hidden");const s=document.querySelector(".modal-close-btn");l.addEventListener("click",K),s.addEventListener("click",G),document.addEventListener("keydown",U)}).catch(t=>{console.log(t),document.querySelector(".modal-text").textContent=t.response.data.message,document.querySelector(".modal-title").textContent="ERROR!!!",l.classList.remove("visually-hidden");const s=document.querySelector(".modal-close-btn");l.addEventListener("click",W),s.addEventListener("click",_),document.addEventListener("keydown",F)})}function K(e){e.target===l&&l.classList.add("visually-hidden")}function G(e){l.classList.add("visually-hidden")}function U(e){e.code=="Escape"&&l.classList.add("visually-hidden")}function W(e){e.target===l&&l.classList.add("visually-hidden")}function _(e){l.classList.add("visually-hidden")}function F(e){e.code=="Escape"&&l.classList.add("visually-hidden")}
//# sourceMappingURL=commonHelpers.js.map
