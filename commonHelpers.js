import{S as u,N as d,K as f,M as p,a as s}from"./assets/vendor-51e50755.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();new u(".swiper",{modules:[d,f,p],speed:800,grabCursor:!0,allowTouchMove:!0,direction:"horizontal",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{sensitivity:1,eventsTarget:".swiper-wrapper"}});const m=document.querySelectorAll('a[href^="#"]');for(let r of m)r.addEventListener("click",function(n){n.preventDefault();const o=r.getAttribute("href");document.querySelector(o).scrollIntoView({behavior:"smooth",block:"start"})});s.defaults.baseURL="https://portfolio-js.b.goit.study/api";s.defaults.headers.common.Accept="application/json";s.defaults.headers.common["Content-Type"]="application/json";const l=document.querySelectorAll(".animations"),h=document.querySelector(".content");function a(){const r=h.getBoundingClientRect();r.top>=0&&r.bottom<=(window.innerHeight||document.documentElement.clientHeight)?window.innerWidth<1440&&l.forEach(o=>{o.classList.add("animations-mobile-tablet")}):l.forEach(o=>{o.classList.remove("animations-mobile-tablet")})}window.addEventListener("scroll",a);window.addEventListener("resize",a);
//# sourceMappingURL=commonHelpers.js.map
