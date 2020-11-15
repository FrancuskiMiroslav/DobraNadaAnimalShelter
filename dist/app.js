!function(t){var e={};function n(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}({"./src/js/adoptContentSwitcher.js":function(t,e){document.addEventListener("DOMContentLoaded",(function(){history.replaceState(null,null," ");document.querySelectorAll("[data-switcher]").forEach((t=>{const e=t,n=e.dataset.tab;e.addEventListener("click",(t=>{document.querySelector(".adopt__list-item.active").classList.remove("active"),e.parentElement.parentElement.classList.add("active"),function(t){const e=document.querySelector(".page.active"),n=document.querySelector(".page-header.active");e.classList.remove("active"),n.classList.remove("active");const s=document.querySelector(`.page[data-page="${t}"]`),a=document.querySelector(`.page-header[data-header="${t}"]`);s.classList.add("active"),a.classList.add("active")}(n)}))}))}))},"./src/js/fetchAnimalsData.js":function(t,e){document.addEventListener("DOMContentLoaded",(function(){const t=document.getElementById("animals-pages"),e=document.getElementById("dogs-box"),n=document.getElementById("cats-box");function s(){return new Promise(((t,e)=>{fetch("../js/animals.json").then((t=>{if(!t.ok)throw Error(`${t.statusText} - ${t.url}`);return t.json()})).then((e=>t(e))).catch((t=>e(t)))}))}const a=document.getElementById("dogNumber"),o=document.getElementById("catNumber");async function i(){(await s()).animals.forEach((t=>{dogsArray=t.dogs,catsArray=t.cats,dogsArray.forEach((t=>{dogBox=document.createElement("div"),dogBox.classList.add("page__box");const n=t.birth,s=Date.parse(n),a=Date.now()-s;let o=Math.round(a/31536e6);dogBox.innerHTML=`\n                        <div class="page__box-top">\n                            <img src=".${t.image}" alt="${t.name} ${t.species}"}/>\n                        </div>\n                        <div class="page__box-bottom">\n                            <h3 class="page__box-title">${t.name}</h3>\n                            <div class="page__box-content">\n                                <div class="expandMoreContent" id="showMore-${t.species}${t.number}">\n                                    <p class="page__box-text">\n                                        ${t.desc}\n                                    </p>\n                                </div>\n    \n                                <div class="expandMoreHolder">\n                                    <button\n                                        expand-more\n                                        data-hidetext="...Read less"\n                                        data-showtext="...Read more"\n                                        data-target="showMore-${t.species}${t.number}"\n                                        class="button showMore"\n                                    >\n                                        ...Read more\n                                    </button>\n                                </div>\n                            </div>\n    \n                            <ul class="page__box-icons">\n                                <li class="page__box-icon">\n                                    <i class="fas fa-weight"></i\n                                    ><span class="page__box-icon--text">${t.weight} kg</span>\n                                </li>\n                                <li class="page__box-icon">\n                                    <i class="fas fa-arrows-alt-v"></i\n                                    ><span class="page__box-icon--text">${t.height}cm</span>\n                                </li>\n                                <li class="page__box-icon">\n                                    <i class="fas fa-calendar-check"></i\n                                    ><span class="page__box-icon--text">${o} yr.</span>\n                                </li>\n                                <li class="page__box-icon">\n\t\t\t\t\t\t\t\t\t<i class="fas fa-palette"></i\n\t\t\t\t\t\t\t\t\t><span class="page__box-icon--text">${t.color[0]?t.color[0]:"-"}</span>\n                                </li>\n                                <li class="page__box-icon">\n\t\t\t\t\t\t\t\t\t<i class="fas fa-palette"></i\n\t\t\t\t\t\t\t\t\t><span class="page__box-icon--text">${t.color[1]?t.color[1]:"-"}</span>\n                                </li>\n                                <li class="page__box-icon">\n\t\t\t\t\t\t\t\t\t<i class="fas fa-palette"></i\n\t\t\t\t\t\t\t\t\t><span class="page__box-icon--text">${t.color[2]?t.color[2]:"-"}</span>\n\t\t\t\t\t\t\t\t</li>\n                                <li class="page__box-icon">\n                                    <i class="fas fa-paw"></i\n                                    ><span class="page__box-icon--text">${t.coat}</span>\n                                </li>\n                                <li class="page__box-icon">\n                                    <i class="fas fa-venus-mars"></i\n                                    ><span class="page__box-icon--text">${t.gender}</span>\n                                </li>\n                            </ul>\n                        </div>\n                `,e.appendChild(dogBox)})),catsArray.forEach((t=>{catBox=document.createElement("div"),catBox.classList.add("page__box");const e=t.birth,s=Date.parse(e),a=Date.now()-s;let o=Math.round(a/31536e6);catBox.innerHTML=`\n                        <div class="page__box-top">\n                            <img src=".${t.image}" alt="${t.name} ${t.species}"}/>\n                        </div>\n                        <div class="page__box-bottom">\n                            <h3 class="page__box-title">${t.name}</h3>\n                            <div class="page__box-content">\n                                <div class="expandMoreContent" id="showMore-${t.species}${t.number}">\n                                    <p class="page__box-text">\n                                        ${t.desc}\n                                    </p>\n                                </div>\n    \n                                <div class="expandMoreHolder">\n                                    <button\n                                        expand-more\n                                        data-hidetext="...Read less"\n                                        data-showtext="...Read more"\n                                        data-target="showMore-${t.species}${t.number}"\n                                        class="button showMore"\n                                    >\n                                        ...Read more\n                                    </button>\n                                </div>\n                            </div>\n    \n                            <ul class="page__box-icons">\n                                <li class="page__box-icon">\n                                    <i class="fas fa-weight"></i\n                                    ><span class="page__box-icon--text">${t.weight} kg</span>\n                                </li>\n                                <li class="page__box-icon">\n                                    <i class="fas fa-arrows-alt-v"></i\n                                    ><span class="page__box-icon--text">${t.height}cm</span>\n                                </li>\n                                <li class="page__box-icon">\n                                    <i class="fas fa-calendar-check"></i\n                                    ><span class="page__box-icon--text">${o} yr.</span>\n                                </li>\n                                <li class="page__box-icon">\n\t\t\t\t\t\t\t\t\t<i class="fas fa-palette"></i\n\t\t\t\t\t\t\t\t\t><span class="page__box-icon--text">${t.color[0]?t.color[0]:"-"}</span>\n                                </li>\n                                <li class="page__box-icon">\n\t\t\t\t\t\t\t\t\t<i class="fas fa-palette"></i\n\t\t\t\t\t\t\t\t\t><span class="page__box-icon--text">${t.color[1]?t.color[1]:"-"}</span>\n                                </li>\n                                <li class="page__box-icon">\n\t\t\t\t\t\t\t\t\t<i class="fas fa-palette"></i\n\t\t\t\t\t\t\t\t\t><span class="page__box-icon--text">${t.color[2]?t.color[2]:"-"}</span>\n\t\t\t\t\t\t\t\t</li>\n                                <li class="page__box-icon">\n                                    <i class="fas fa-paw"></i\n                                    ><span class="page__box-icon--text">${t.coat}</span>\n                                </li>\n                                <li class="page__box-icon">\n                                    <i class="fas fa-venus-mars"></i\n                                    ><span class="page__box-icon--text">${t.gender}</span>\n                                </li>\n                            </ul>\n                        </div>\n                `,n.appendChild(catBox)}))}));let t=[...document.querySelectorAll("#dogs-box .page__box")],a=[...document.querySelectorAll("#cats-box .page__box")],o=1;const i=document.getElementById("dogs-pagination"),c=document.getElementById("cats-pagination");function l(t,e,n,s){e.innerHTML="";let a=n*--s,o=a+n;t.slice(a,o).forEach((t=>{let n=document.createElement("div");n.classList.add("page__box"),n=t,e.appendChild(n)}))}function r(s,r,u){r.innerHTML="";let p=Math.ceil(s.length/u);for(let t=1;t<p+1;t++){let e=d(t,p);e.style.width="0",e.style.overflow="hidden",e.style.margin="0",r.appendChild(e)}let m=function(s){let r=document.createElement("button");return r.classList.add("next"),r.innerText=">",r.classList.add("pagination-btn"),r.addEventListener("click",(d=>{if(r.parentElement==i){l(t,e,4,o);let n=document.querySelector("#dogs .pagination-btn.active");n.nextElementSibling.click(),o===s&&(r.style.opacity="0.5",r.style.pointerEvents="none");let a=document.querySelector("#dogs .prev");1!==o&&(a.style.opacity="1",a.style.pointerEvents="all"),n&&(n.classList.add("group"),n.nextElementSibling.classList.add("group"),n.previousElementSibling.classList.add("group"))}if(r.parentElement==c){l(a,n,4,o);let t=document.querySelector("#cats .pagination-btn.active");t.nextElementSibling.click(),o===s&&(r.style.opacity="0.5",r.style.pointerEvents="none");let e=document.querySelector("#cats .prev");1!==o&&(e.style.opacity="1",e.style.pointerEvents="all"),t&&(t.classList.add("group"),t.nextElementSibling.classList.add("group"),t.previousElementSibling.classList.add("group"))}})),r}(p);r.appendChild(m);let g=function(s){let r=document.createElement("button");r.classList.add("prev"),r.innerText="<",r.classList.add("pagination-btn"),r.addEventListener("click",(d=>{if(r.parentElement==i){l(t,e,4,o);let n=document.querySelector("#dogs .pagination-btn.active");n.previousElementSibling.click();let a=document.querySelector("#dogs .next");o!==s&&(a.style.opacity="1",a.style.pointerEvents="all"),1===o&&(r.style.opacity="0.5",r.style.pointerEvents="none"),n&&(n.classList.add("group"),n.nextElementSibling.classList.add("group"),n.previousElementSibling.classList.add("group"))}if(r.parentElement==c){l(a,n,4,o);let t=document.querySelector("#cats .pagination-btn.active");t.previousElementSibling.click();let e=document.querySelector("#cats .next");o!==s&&(e.style.opacity="1",e.style.pointerEvents="all"),1===o&&(r.style.opacity="0.5",r.style.pointerEvents="none"),t&&(t.classList.add("group"),t.nextElementSibling.classList.add("group"),t.previousElementSibling.classList.add("group"))}})),1===o&&(r.style.opacity="0.5",r.style.pointerEvents="none");return r}(p);r.prepend(g);let v=document.querySelector("#dogs .pagination-btn.active"),y=document.querySelector("#cats .pagination-btn.active");v&&y&&(v.classList.add("group"),v.nextElementSibling.classList.add("group"),v.nextElementSibling.nextElementSibling.classList.add("group"),v.previousElementSibling.classList.add("group"),y.classList.add("group"),y.nextElementSibling.classList.add("group"),y.nextElementSibling.nextElementSibling.classList.add("group"),y.previousElementSibling.classList.add("group"))}function d(s,r){let d=document.createElement("button");return d.classList.add("pagination-btn"),d.innerText=s,o==s&&d.classList.add("active"),d.addEventListener("click",(u=>{if(o=s,d.parentElement==i){l(t,e,4,o),document.querySelector("#dogs .pagination-btn.active").classList.remove("active"),d.classList.add("active");let n=document.querySelector("#dogs .next");o===r?(n.style.opacity="0.5",n.style.pointerEvents="none"):(n.style.opacity="1",n.style.pointerEvents="all");let s=document.querySelector("#dogs .prev");1===o?(s.style.opacity="0.5",s.style.pointerEvents="none"):(s.style.opacity="1",s.style.pointerEvents="all")}if(d.parentElement==c){l(a,n,4,o),document.querySelector("#cats .pagination-btn.active").classList.remove("active"),d.classList.add("active");let t=document.querySelector("#cats .next");o===r?(t.style.opacity="0.5",t.style.pointerEvents="none"):(t.style.opacity="1",t.style.pointerEvents="all");let e=document.querySelector("#cats .prev");1===o?(e.style.opacity="0.5",e.style.pointerEvents="none"):(e.style.opacity="1",e.style.pointerEvents="all")}})),d}const u=document.querySelectorAll("[expand-more]");function p(){const t=document.getElementById(this.dataset.target);t.classList.contains("active")?this.innerHTML=this.dataset.showtext:this.innerHTML=this.dataset.hidetext,t.classList.toggle("active"),t.classList.contains("active")?t.style.maxHeight=t.scrollHeight+"px":t.style.maxHeight="20px"}e&&(l(t,e,4,o),r(t,i,4),u.forEach((t=>{t.addEventListener("click",p)}))),n&&(l(a,n,4,o),r(a,c,4),u.forEach((t=>{t.addEventListener("click",p)})))}o&&async function(){const t=(await s()).animals;let e=t[0].dogs.length,n=t[0].cats.length;a.innerText=e,o.innerText=n}(),t&&i()}))},"./src/js/formValidaiton.js":function(t,e){document.addEventListener("DOMContentLoaded",(function(){const t=document.getElementById("contact-form"),e=document.getElementById("name"),n=document.getElementById("email"),s=document.getElementById("message"),a=document.getElementById("form-btn");if(t){function o(t,e){const n=t.parentElement;n.querySelector("small").innerText=e,n.className="form__group error"}function i(t){t.parentElement.className="form__group success"}function c(t){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)}["click","ontouchstart","mouseover","keydown","keypress","touchstart","touchmove"].forEach((t=>document.addEventListener(t,(()=>{!1===function(){const t=e.value.trim(),a=n.value.trim(),l=s.value.trim();""===t?o(e,"Please enter your full name"):i(e);""===a?o(n,"Please enter your email address"):c(a)?i(n):o(n,"Email is not valid");""===l?o(s,"Please enter your message"):i(s);return!(""===t||""===a||""===l||!c(a))}()?a.disabled=!0:a.disabled=!1}))),!1)}}))},"./src/js/main.js":function(t,e){document.addEventListener("DOMContentLoaded",(function(){window.addEventListener("load",(t=>{document.querySelector(".preload").classList.add("preload-finished")}));document.getElementById("btnScrollToTop").addEventListener("click",(t=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}));function t(){const t=document.getElementById(this.dataset.target);t.classList.contains("active")?this.innerHTML=this.dataset.showtext:this.innerHTML=this.dataset.hidetext,t.classList.toggle("active"),t.classList.contains("active")?t.style.maxHeight=t.scrollHeight+"px":t.style.maxHeight="22px"}document.querySelectorAll("[expand-more]").forEach((e=>{e.parentElement.previousElementSibling.offsetHeight>=e.parentElement.previousElementSibling.firstElementChild.offsetHeight&&(e.style.visibility="hidden",e.style.height=0),e.addEventListener("click",t)}))}))},"./src/js/modal.js":function(t,e){document.addEventListener("DOMContentLoaded",(function(){const t=document.querySelectorAll(".modal-btn"),e=document.getElementById("modal"),n=document.getElementById("close");t.forEach((t=>{t.addEventListener("click",(()=>e.classList.add("show-modal")))})),n.addEventListener("click",(()=>e.classList.remove("show-modal"))),window.addEventListener("click",(t=>t.target==modal&&modal.classList.remove("show-modal")))}))},"./src/js/nav.js":function(t,e){document.addEventListener("DOMContentLoaded",(function(){const t=document.getElementById("nav-container"),e=document.getElementById("menu-btn"),n=document.getElementById("nav-list");window.addEventListener("scroll",(e=>{document.documentElement.scrollTop>0?(t.classList.add("sticky"),btnScrollToTop.style.opacity=1):(t.classList.remove("sticky"),btnScrollToTop.style.opacity=0)})),e.addEventListener("click",(s=>{e.classList.toggle("clicked"),t.classList.toggle("overlay"),n.classList.toggle("show")}))}))},"./src/js/slider.js":function(t,e){document.addEventListener("DOMContentLoaded",(function(){const t=document.getElementById("carousel");document.getElementById("prev"),document.getElementById("next");let e,n;async function s(){const s=await new Promise(((t,e)=>{fetch("./js/carousel.json").then((t=>t.json())).then((e=>t(e))).catch((t=>e(t)))}));s.slides.forEach(((a,o)=>{newSlide=document.createElement("div"),newSlide.classList.add("carousel__slide"),newSlide.innerHTML=`\n\t\t\t\t\t\t<div class="carousel__image-container">\n\t\t\t\t\t\t\t<img src="${a.image}" alt="slide-img" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="carousel__content">\n\t\t\t\t\t\t\t<h1 class="carousel__title">${a.title}</h1>\n\t\t\t\t\t\t\t<p class="carousel__desc">${a.content}</p>\n\t\t\t\t\t\t</div>\n\t\t\t`,t.appendChild(newSlide),0===o?(e=newSlide,newSlide.classList.add("active")):o+1===s.slides.length&&(n=newSlide)})),document.getElementById("next").addEventListener("click",(t=>{const e=document.querySelector(".carousel__slide.active");let n=e.nextElementSibling;null==n&&(n=e),n.classList.contains("carousel__slide")&&(e.classList.remove("active"),n.classList.add("active"))})),document.getElementById("prev").addEventListener("click",(t=>{const e=document.querySelector(".carousel__slide.active");let n=e.previousElementSibling;null==n&&(n=e),n.classList.contains("carousel__slide")&&(e.classList.remove("active"),n.classList.add("active"))}))}null!==t&&s()}))},"./src/js/tabccordion.js":function(t,e){window.addEventListener("DOMContentLoaded",(function(){const t=document.querySelectorAll(".tabccordion__list-btn"),e=document.querySelectorAll(".tabccordion__container"),n=document.getElementById("tabccordion-list"),s=document.querySelectorAll(".tabccordion__tab-inner"),a=document.getElementById("tabccordion");const o=document.querySelectorAll(".accordion__list-btn");a&&(t.forEach((t=>{t.addEventListener("click",(e=>{const n=t.parentElement,a=n.parentElement.parentElement,o=t.dataset.forTab,i=a.querySelector(`.tabccordion__tab[data-tab="${o}"]`);n.querySelectorAll(".tabccordion__list-btn").forEach((t=>{t.classList.remove("current")})),a.querySelectorAll(".tabccordion__tab").forEach((t=>{t.classList.remove("current")})),t.classList.add("current"),i.classList.add("current"),window.innerWidth>=600&&s.forEach((t=>{t.style.maxHeight=t.scrollHeight+"px"}))}))})),n&&e.forEach((t=>{t.querySelector(".tabccordion__list .tabccordion__btn").click()})),o.forEach((t=>{t.addEventListener("click",(()=>{const e=document.querySelector(".accordion__list-btn.open");e&&e!==t&&(e.classList.toggle("open"),e.nextElementSibling.style.maxHeight=0),t.classList.toggle("open");const n=t.nextElementSibling;t.classList.contains("open")?n.style.maxHeight=n.scrollHeight+"px":n.style.maxHeight=0}))})),window.addEventListener("resize",(t=>{window.innerWidth<600&&s.forEach((t=>{t.style.maxHeight=0,t.previousElementSibling.classList.contains("open")&&t.previousElementSibling.classList.remove("open")}))})))}))},0:function(t,e,n){n("./src/js/adoptContentSwitcher.js"),n("./src/js/fetchAnimalsData.js"),n("./src/js/formValidaiton.js"),n("./src/js/main.js"),n("./src/js/modal.js"),n("./src/js/nav.js"),n("./src/js/slider.js"),t.exports=n("./src/js/tabccordion.js")}});