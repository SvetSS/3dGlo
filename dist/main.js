(()=>{"use strict";(e=>{console.log(e);const t=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),l=document.getElementById("timer-seconds"),n=e=>e>=0&&e<10?`0${e}`:e,c=()=>{const a=(()=>{const t=(new Date(e).getTime()-(new Date).getTime())/1e3,o=Math.floor(t/60/60%60),l=Math.floor(t/60%60),n=Math.floor(t%60);return t>0?{timeRemaining:t,hours:o,minutes:l,seconds:n}:{timeRemaining:0,hours:0,minutes:0,seconds:0}})();t.textContent=n(a.hours),o.textContent=n(a.minutes),l.textContent=n(a.seconds);const s=setInterval(c,1e3);a.timeRemaining<=0&&clearInterval(s)};c()})("22 june 2023"),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),o=document.querySelector(".close-btn");document.addEventListener("click",(l=>{l.preventDefault(),l.target!==e&&l.target!==o&&l.target.parentNode.parentNode!==t||t.classList.toggle("active-menu")}))})(),(()=>{const e=document.querySelector(".popup");document.querySelectorAll(".popup-btn").forEach((t=>{t.addEventListener("click",(()=>{window.innerWidth<768?e.style.display="block":(()=>{let t=0;const o=setInterval((()=>{t+=.05,e.style.opacity=t,e.style.display="block",console.log(t),t>=1&&clearInterval(o)}),15)})()}))})),e.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.classList.contains("popup-close")||(window.innerWidth<768?e.style.display="none":(()=>{let t=1;const o=setInterval((()=>{t-=.05,e.style.opacity=t,t<=0&&(clearInterval(o),e.style.display="none")}),10)})())}))})(),(()=>{const e=document.querySelector(".calc-block"),t=document.querySelector(".calc-count"),o=document.querySelector(".calc-day"),l=document.querySelector(".calc-square");function n(e){const t=e.value.trim().replace(/[^\d]/g,"");e.value=t}t.addEventListener("input",(()=>{n(t)})),o.addEventListener("input",(()=>{n(o)})),l.addEventListener("input",(()=>{n(l)}));const c=e.querySelector(".calc-type");c.addEventListener("change",(()=>{const e=c.options[c.selectedIndex];console.log(e.textContent)})),console.log("calc")})(),(()=>{const e=document.getElementById("form1"),t=document.getElementById("form2"),o=document.getElementById("form3"),l=document.getElementById("form1-name"),n=document.getElementById("form1-email"),c=document.getElementById("form1-phone"),a=document.getElementById("form2-name"),s=document.getElementById("form2-message"),r=document.getElementById("form2-email"),d=document.getElementById("form2-phone"),i=document.getElementById("form3-name"),m=document.getElementById("form3-email"),u=document.getElementById("form3-phone");let g=!1;e.addEventListener("submit",(e=>{e.preventDefault(),g=!1,/^[А-Яа-яЁё\s-]+$/gi.test(l.value)&&""!==l.value?console.log(g):(g=!0,alert("вводите только кириллицу"),console.log(g),console.log("тпру")),/^[a-zA-Z0-9-_.!~*']+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/gi.test(n.value)&&""!==l.value||(g=!0,alert("проверьте правильность ввода")),console.log(g),/^[\d()+-]+$/g.test(c.value)&&""!==c.value||(g=!0,alert("вводите только цифры, дефис и круглые скобки")),console.log(g),g||alert("данные отправлены")})),o.addEventListener("submit",(e=>{e.preventDefault(),g=!1,/^[А-Яа-яЁё\s-]+$/gi.test(i.value)&&""!==i.value?console.log(g):(g=!0,alert("вводите только кириллицу"),console.log(g),console.log("тпру")),/^[a-zA-Z0-9-_.!~*']+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/gi.test(m.value)&&""!==i.value||(g=!0,alert("проверьте правильность ввода")),console.log(g),/^[\d()+-]+$/g.test(u.value)&&""!==u.value||(g=!0,alert("вводите только цифры, дефис и круглые скобки")),console.log(g),g||alert("данные отправлены")})),t.addEventListener("submit",(e=>{e.preventDefault(),g=!1,/^[А-Яа-яЁё\s-]+$/gi.test(s.value)&&""!==s.value?console.log(g):(g=!0,alert("вводите только кириллицу"),console.log(g),console.log("тпру")),/^[А-Яа-яЁё\s-]+$/gi.test(a.value)&&""!==a.value?console.log(g):(g=!0,alert("вводите только кириллицу"),console.log(g),console.log("тпру")),/^[a-zA-Z0-9-_.!~*']+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/gi.test(r.value)&&""!==a.value||(g=!0,alert("проверьте правильность ввода")),console.log(g),/^[\d()+-]+$/g.test(d.value)&&""!==d.value||(g=!0,alert("вводите только цифры, дефис и круглые скобки")),console.log(g),g||alert("данные отправлены")})),console.log("forms")})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const l=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===l?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}})),console.log(t),console.log(e),console.log(o)})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),o=document.querySelector(".portfolio-dots");let l,n=0;const c=(e,t,o)=>{e[t].classList.add(o)},a=(e,t,o)=>{e[t].classList.remove(o)};t.forEach(((e,t)=>{let l=document.createElement("li");l.classList.add("dot"),0===t&&l.classList.add("dot-active"),o.append(l)}));let s=o.querySelectorAll(".dot");const r=()=>{a(t,n,"portfolio-item-active"),a(s,n,"dot-active"),n++,n>=t.length&&(n=0),c(t,n,"portfolio-item-active"),c(s,n,"dot-active")},d=(e=1500)=>{l=setInterval(r,e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(a(t,n,"portfolio-item-active"),a(s,n,"dot-active"),e.target.matches("#arrow-left")?(n--,n<0&&(n=t.length-1)):e.target.matches("#arrow-right")?(n++,n>=t.length&&(n=0)):e.target.classList.contains("dot")&&s.forEach(((t,o)=>{e.target===t&&(n=o)})),c(t,n,"portfolio-item-active"),c(s,n,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(l)})),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&d(2e3)})),d(2e3),console.log("slider")})()})();