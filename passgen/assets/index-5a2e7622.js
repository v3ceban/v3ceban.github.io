(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const i="/assets/javascript-8dac5379.svg",a="/vite.svg";function l(c){const o=t=>Math.floor(Math.random()*t),s=document.querySelector(".read-the-docs"),r="qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*()-=_+",e=()=>{s.innerHTML="";for(let t=0;t<20;t++)s.innerHTML+=r[o(r.length)]};c.addEventListener("click",()=>e())}document.querySelector("#app").innerHTML=`
  <div>
    <a href="#">
      <img src="${a}" class="logo" alt="Vite logo" />
    </a>
    <a href="#">
      <img src="${i}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Ella!</h1>
    <div class="card">
      <button id="counter" type="button">Click Me</button>
    </div>
    <p class="read-the-docs">
      Click the button to generate a password
    </p>
  </div>
`;l(document.querySelector("#counter"));
