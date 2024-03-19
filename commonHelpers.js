import{a as d,A as g,S as f,N as b,K as S}from"./assets/vendor-fca32f99.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))u(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&u(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function u(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}})();const M=document.querySelectorAll('a[href^="#"]');for(let e of M)e.addEventListener("click",function(t){t.preventDefault();const o=e.getAttribute("href");document.querySelector(o).scrollIntoView({behavior:"smooth",block:"start"})});d.defaults.baseURL="https://portfolio-js.b.goit.study/api";d.defaults.headers.common.Accept="application/json";d.defaults.headers.common["Content-Type"]="application/json";function x(){return d.get("/reviews")}function C(e){return d.post("/requests",e)}const c={openCloseMenuBtn:document.querySelector("[data-menu-open-close]"),openMenuBtnModal:document.querySelector("[data-menu-open-modal]"),closeMenuBtnModal:document.querySelector("[data-menu-close-modal]"),closeMenuInList:document.querySelector("[data-menu-close-list]"),closeMenuInOrder:document.querySelector("[data-menu-close-order]"),menu:document.querySelector("[data-menu]"),menuModal:document.querySelector("[data-menu-modal]")};c.openCloseMenuBtn.addEventListener("click",I);c.openMenuBtnModal.addEventListener("click",y);c.closeMenuBtnModal.addEventListener("click",y);c.closeMenuInOrder.addEventListener("click",y);c.closeMenuInList.addEventListener("click",e=>{e.currentTarget!=e.target&&c.menuModal.classList.toggle("visually-hidden")});function I(){c.menu.classList.toggle("visually-hidden")}function y(){c.menuModal.classList.toggle("visually-hidden")}document.querySelectorAll(".two-about-button-icon");new g(".about-accordion-container",{duration:700,showMultiple:!0,collapse:!0,openOnInit:[0]});const l=new f(".about-me-slider",{loop:!0,breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}}});document.querySelector(".about-me-swiper-container").addEventListener("mouseover",function(){document.addEventListener("keydown",v)});document.querySelector(".about-me-swiper-container").addEventListener("focusin",function(){document.addEventListener("keydown",v)});document.querySelector(".about-me-swiper-container").addEventListener("mouseout",function(){document.removeEventListener("keydown",v)});document.querySelector(".about-me-swiper-container").addEventListener("focusout",function(){document.removeEventListener("keydown",v)});function v(e){e.key==="ArrowLeft"?l.slidePrev():e.key==="ArrowRight"&&l.slideNext()}const A=document.querySelector(".next-about-me-btn");A.addEventListener("click",function(){l.slideNext()});l.on("slideNextTransitionStart",function(){const e=l.slides[l.activeIndex],t=document.querySelectorAll(".about-me-slider-item");e!==void 0&&e.classList.contains("about-me-slider-item")&&(e.style.backgroundColor="var(--main-red)"),t.forEach(o=>{o!==e&&(o.style.backgroundColor="")})});l.on("slidePrevTransitionStart",function(){const e=l.slides[l.activeIndex],t=document.querySelectorAll(".about-me-slider-item");e!==void 0&&e.classList.contains("about-me-slider-item")&&(e.style.backgroundColor="var(--main-red)"),t.forEach(o=>{o!==e&&(o.style.backgroundColor="")})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".about-me-slider-item:first-child");e.style.backgroundColor="var(--main-red)"});new f(".projects-swiper",{modules:[b,S],speed:800,grabCursor:!0,allowTouchMove:!0,direction:"horizontal",navigation:{nextEl:".next-project-btn",prevEl:".prev-project-btn"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{sensitivity:1,eventsTarget:".projects-list"}});const P=new g(".faq-list",{duration:700,showMultiple:!0});document.addEventListener("scroll",O);const T=document.querySelector(".faq");function O(){const e=T.getBoundingClientRect();(e.bottom<=0||e.bottom>=e.height*2)&&P.closeAll()}const h=document.querySelectorAll(".animations"),B=document.querySelector(".content");function E(){const e=B.getBoundingClientRect();e.top>=0&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)?window.innerWidth<1440&&h.forEach(o=>{o.classList.add("animations-mobile-tablet")}):h.forEach(o=>{o.classList.remove("animations-mobile-tablet")})}window.addEventListener("scroll",E);window.addEventListener("resize",E);const w=document.querySelector(".reviews-list");x().then(e=>{if(!e.statusText==="OK")throw new Error("Empty response data");L(e.data,w,!0)}).catch(()=>{j("Server error. Please try again!"),L([],w,!1)});function L(e,t,o){if(o){const u=e.map(({_id:s,author:i,avatar_url:a,review:k})=>`<li class="reviews-list-item swiper-slide" id="review-${s}">
          <picture>
            <source srcset="${a}" 
              type="image/jpeg">
              <img 
                class="review-photo" 
                src="${a}" 
                alt="${i} photo" 
                width="48" 
                height="48" 
                loading="lazy"
              />
          </picture>
          <h3 class="review-author">${i}</h3>
          <p class="review-text">${k}</p>
      </li>`).join("");t.insertAdjacentHTML("beforeend",u),V()}else t.insertAdjacentHTML("beforeend","<h3>Not found :(</h3>")}function V(){let e=document.querySelectorAll(".reviews-list-item"),t=Math.max(...Array.from(e,o=>o.clientHeight));e.forEach(o=>{o.style.height=t+"px"})}function j(e){const t=document.createElement("div");t.className="popup-server-error",t.textContent=e,document.body.appendChild(t),setTimeout(()=>{t.classList.add("activate-popup-animation")},50),setTimeout(()=>{t.classList.remove("activate-popup-animation")},4e3),setTimeout(t.remove.bind(t),5e3)}new f(".reviews-swiper",{modules:[b,S],speed:800,grabCursor:!0,allowTouchMove:!0,direction:"horizontal",watchOverflow:!0,spaceBetween:16,navigation:{nextEl:".next-review-btn",prevEl:".prev-review-btn"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{320:{slidesPerGroup:1,slidesPerView:1},768:{slidesPerGroup:2,slidesPerView:2},1440:{slidesPerGroup:4,slidesPerView:4}}});const n=document.querySelector(".work-form"),m=document.querySelector(".succes-text"),p=document.querySelector(".invalid-text"),r=document.querySelector(".backdrop"),q=/([A-z0-9_\.\-]{1,})@([A-z0-9_\.\-]{1,})\.([A-z]{2,8})/;n.elements.email.value=localStorage.getItem("email");n.elements.email.value=localStorage.getItem("comment");n.elements.email.addEventListener("blur",e=>{localStorage.setItem("email",n.elements.email.value.trim()),q.test(n.elements.email.value.trim())?(n.elements.email.classList.remove("invalid"),p.classList.add("visually-hidden"),n.elements.email.classList.add("succes"),m.classList.remove("visually-hidden")):(n.elements.email.classList.remove("succes"),m.classList.add("visually-hidden"),n.elements.email.classList.add("invalid"),p.classList.remove("visually-hidden")),n.elements.email.value.trim()||(n.elements.email.classList.remove("invalid"),n.elements.email.classList.remove("succes"),p.classList.add("visually-hidden"),m.classList.add("visually-hidden"))});n.elements.comment.addEventListener("input",()=>{localStorage.setItem("comment",n.elements.comment.value.trim())});n.addEventListener("submit",R);async function R(e){e.preventDefault(),q.test(n.elements.email.value.trim())&&await C({email:n.elements.email.value.trim(),comment:n.elements.comment.value.trim()}).then(t=>{n.elements.email.value="",n.elements.comment.value="",localStorage.removeItem("email"),localStorage.removeItem("comment"),n.elements.email.classList.remove("succes"),m.classList.add("visually-hidden"),document.querySelector(".modal-text").textContent="The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.",document.querySelector(".modal-title").textContent="Thank you for your interest in cooperation!",r.classList.remove("visually-hidden");const o=document.querySelector(".modal-close-btn");r.addEventListener("click",N),o.addEventListener("click",H),document.addEventListener("keydown",z)}).catch(t=>{console.log(t),document.querySelector(".modal-text").textContent=t.response.data.message,document.querySelector(".modal-title").textContent="ERROR!!!",r.classList.remove("visually-hidden");const o=document.querySelector(".modal-close-btn");r.addEventListener("click",$),o.addEventListener("click",D),document.addEventListener("keydown",K)})}function N(e){e.target===r&&r.classList.add("visually-hidden")}function H(e){r.classList.add("visually-hidden")}function z(e){e.code=="Escape"&&r.classList.add("visually-hidden")}function $(e){e.target===r&&r.classList.add("visually-hidden")}function D(e){r.classList.add("visually-hidden")}function K(e){e.code=="Escape"&&r.classList.add("visually-hidden")}
//# sourceMappingURL=commonHelpers.js.map
