(()=>{"use strict";(e=>{console.log(e);const t=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),l=document.getElementById("timer-seconds"),n=e=>e>=0&&e<10?`0${e}`:e,c=()=>{const s=(()=>{const t=(new Date(e).getTime()-(new Date).getTime())/1e3,o=Math.floor(t/60/60%60),l=Math.floor(t/60%60),n=Math.floor(t%60);return t>0?{timeRemaining:t,hours:o,minutes:l,seconds:n}:{timeRemaining:0,hours:0,minutes:0,seconds:0}})();t.textContent=n(s.hours),o.textContent=n(s.minutes),l.textContent=n(s.seconds);const a=setInterval(c,1e3);s.timeRemaining<=0&&clearInterval(a)};c()})("22 june 2023"),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),o=document.querySelector(".close-btn");document.addEventListener("click",(l=>{l.preventDefault(),l.target!==e&&l.target!==o&&l.target.parentNode.parentNode!==t||t.classList.toggle("active-menu")}))})(),(()=>{const e=document.querySelector(".popup");document.querySelectorAll(".popup-btn").forEach((t=>{t.addEventListener("click",(()=>{window.innerWidth<768?e.style.display="block":(()=>{let t=0;const o=setInterval((()=>{t+=.05,e.style.opacity=t,e.style.display="block",console.log(t),t>=1&&clearInterval(o)}),15);e.addEventListener("click",(e=>{console.log("f")}))})()}))})),e.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.classList.contains("popup-close")||(window.innerWidth<768?e.style.display="none":(()=>{let t=1;const o=setInterval((()=>{t-=.05,e.style.opacity=t,t<=0&&(clearInterval(o),e.style.display="none")}),10)})())}))})(),(()=>{const e=document.querySelector(".calc-block"),t=e.querySelector(".calc-count"),o=e.querySelector(".calc-day"),l=e.querySelector(".calc-square");function n(e){const t=e.value.trim().replace(/[^\d]/g,"");e.value=t}t.addEventListener("input",(()=>{n(t)})),o.addEventListener("input",(()=>{n(o)})),l.addEventListener("input",(()=>{n(l)}));const c=e.querySelector(".calc-type");c.addEventListener("change",(()=>{const e=c.options[c.selectedIndex];console.log(e.textContent)})),console.log("calc")})(),(()=>{const e=document.getElementById("form1"),t=document.getElementById("form2"),o=document.getElementById("form3"),l=document.getElementById("form1-name"),n=document.getElementById("form1-email"),c=document.getElementById("form1-phone"),s=document.getElementById("form2-name"),a=document.getElementById("form2-message"),r=document.getElementById("form2-email"),d=document.getElementById("form2-phone"),u=document.getElementById("form3-name"),m=document.getElementById("form3-email"),i=document.getElementById("form3-phone");let g=!1;e.addEventListener("submit",(e=>{e.preventDefault(),g=!1,/^[А-Яа-яЁё\s-]+$/gi.test(l.value)&&""!==l.value?console.log(g):(g=!0,alert("вводите только кириллицу"),console.log(g),console.log("тпру")),/^[a-zA-Z0-9-_.!~*']+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/gi.test(n.value)&&""!==l.value||(g=!0,alert("проверьте правильность ввода")),console.log(g),/^[\d()+-]+$/g.test(c.value)&&""!==c.value||(g=!0,alert("вводите только цифры, дефис и круглые скобки")),console.log(g),g||alert("данные отправлены")})),o.addEventListener("submit",(e=>{e.preventDefault(),g=!1,/^[А-Яа-яЁё\s-]+$/gi.test(u.value)&&""!==u.value?console.log(g):(g=!0,alert("вводите только кириллицу"),console.log(g),console.log("тпру")),/^[a-zA-Z0-9-_.!~*']+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/gi.test(m.value)&&""!==u.value||(g=!0,alert("проверьте правильность ввода")),console.log(g),/^[\d()+-]+$/g.test(i.value)&&""!==i.value||(g=!0,alert("вводите только цифры, дефис и круглые скобки")),console.log(g),g||alert("данные отправлены")})),t.addEventListener("submit",(e=>{e.preventDefault(),g=!1,/^[А-Яа-яЁё\s-]+$/gi.test(a.value)&&""!==a.value?console.log(g):(g=!0,alert("вводите только кириллицу"),console.log(g),console.log("тпру")),/^[А-Яа-яЁё\s-]+$/gi.test(s.value)&&""!==s.value?console.log(g):(g=!0,alert("вводите только кириллицу"),console.log(g),console.log("тпру")),/^[a-zA-Z0-9-_.!~*']+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/gi.test(r.value)&&""!==s.value||(g=!0,alert("проверьте правильность ввода")),console.log(g),/^[\d()+-]+$/g.test(d.value)&&""!==d.value||(g=!0,alert("вводите только цифры, дефис и круглые скобки")),console.log(g),g||alert("данные отправлены")})),console.log("forms")})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const l=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===l?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}})),console.log(t),console.log(e),console.log(o)})()})();