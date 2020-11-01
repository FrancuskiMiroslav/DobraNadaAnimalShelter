/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/adoptContentSwitcher.js":
/*!****************************************!*\
  !*** ./src/js/adoptContentSwitcher.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
	history.replaceState(null, null, ' ');
	const tabSwitchers = document.querySelectorAll('[data-switcher]');

	tabSwitchers.forEach((tabSwitch) => {
		const tabSwitcher = tabSwitch;
		const pageId = tabSwitcher.dataset.tab;

		tabSwitcher.addEventListener('click', (e) => {
			document
				.querySelector('.adopt__list-item.active')
				.classList.remove('active');

			tabSwitcher.parentElement.parentElement.classList.add('active');

			switchPage(pageId);
		});
	});

	function switchPage(pageId) {
		const currentPage = document.querySelector('.page.active');
		const currentPageHeader = document.querySelector('.page-header.active');

		currentPage.classList.remove('active');
		currentPageHeader.classList.remove('active');

		const nextPage = document.querySelector(`.page[data-page="${pageId}"]`);
		const nextPageHeader = document.querySelector(
			`.page-header[data-header="${pageId}"]`
		);
		nextPage.classList.add('active');
		nextPageHeader.classList.add('active');
	}
});


/***/ }),

/***/ "./src/js/fetchAnimalsData.js":
/*!************************************!*\
  !*** ./src/js/fetchAnimalsData.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
	const animalsUrl = '../js/animals.json';
	const animalsPages = document.getElementById('animals-pages');
	const dogsBox = document.getElementById('dogs-box');

	function getAnimalsData() {
		return new Promise((resolve, reject) => {
			fetch(animalsUrl)
				.then((resp) => resp.json())
				.then((data) => resolve(data))
				.catch((err) => reject(err));
		});
	}

	async function displayAnimals() {
		const dataList = await getAnimalsData();
		const animalsArray = dataList.animals;

		animalsArray.forEach((animal) => {
			dogsArray = animal.dogs;
			catsArray = animal.cats;

			dogsArray.forEach((dog) => {
				dogBox = document.createElement('div');
				dogBox.classList.add('page__box');

				const dogYears = dog.birth;

				const milisecsBetweenDOBand1970 = Date.parse(dogYears);
				const milisecsBetweenNOWand1970 = Date.now();
				const ageInMilisecs =
					milisecsBetweenNOWand1970 - milisecsBetweenDOBand1970;

				const milisecs = ageInMilisecs;
				const secs = 1000;
				const mins = secs * 60;
				const hour = mins * 60;
				const day = hour * 24;
				const year = day * 365;

				let years = Math.round(milisecs / year);

				dogBox.innerHTML = `
                        <div class="page__box-top">
                            <img src=".${dog.image}" alt="${dog.name} ${
					dog.species
				}"}/>
                        </div>
                        <div class="page__box-bottom">
                            <h3 class="page__box-title">${dog.name}</h3>
                            <div class="page__box-content">
                                <div class="expandMoreContent" id="showMore-${
																	dog.species
																}${dog.number}">
                                    <p class="page__box-text">
                                        ${dog.desc}
                                    </p>
                                </div>
    
                                <div class="expandMoreHolder">
                                    <button
                                        expand-more
                                        data-hidetext="...Read less"
                                        data-showtext="...Read more"
                                        data-target="showMore-${dog.species}${
					dog.number
				}"
                                        class="button showMore"
                                    >
                                        ...Read more
                                    </button>
                                </div>
                            </div>
    
                            <ul class="page__box-icons">
                                <li class="page__box-icon">
                                    <i class="fas fa-weight"></i
                                    ><span class="page__box-icon--text">${
																			dog.weight
																		} kg</span>
                                </li>
                                <li class="page__box-icon">
                                    <i class="fas fa-arrows-alt-v"></i
                                    ><span class="page__box-icon--text">${
																			dog.height
																		}cm</span>
                                </li>
                                <li class="page__box-icon">
                                    <i class="fas fa-calendar-check"></i
                                    ><span class="page__box-icon--text">${years} yr.</span>
                                </li>
                                <li class="page__box-icon">
									<i class="fas fa-palette"></i
									><span class="page__box-icon--text">${dog.color[0] ? dog.color[0] : '-'}</span>
                                </li>
                                <li class="page__box-icon">
									<i class="fas fa-palette"></i
									><span class="page__box-icon--text">${dog.color[1] ? dog.color[1] : '-'}</span>
                                </li>
                                <li class="page__box-icon">
									<i class="fas fa-palette"></i
									><span class="page__box-icon--text">${dog.color[2] ? dog.color[2] : '-'}</span>
								</li>
                                <li class="page__box-icon">
                                    <i class="fas fa-paw"></i
                                    ><span class="page__box-icon--text">${
																			dog.coat
																		}</span>
                                </li>
                                <li class="page__box-icon">
                                    <i class="fas fa-venus-mars"></i
                                    ><span class="page__box-icon--text">${
																			dog.gender
																		}</span>
                                </li>
                            </ul>
                        </div>
                `;

				dogsBox.appendChild(dogBox);
			});
		});

		const expandsMore = document.querySelectorAll('[expand-more]');

		function expand() {
			const showContent = document.getElementById(this.dataset.target);
			if (showContent.classList.contains('active')) {
				this.innerHTML = this.dataset.showtext;
			} else {
				this.innerHTML = this.dataset.hidetext;
			}

			showContent.classList.toggle('active');
			if (showContent.classList.contains('active')) {
				showContent.style.maxHeight = showContent.scrollHeight + 'px';
			} else {
				showContent.style.maxHeight = 20 + 'px';
			}
		}

		expandsMore.forEach((btn) => {
			btn.addEventListener('click', expand);
		});
	}

	if (animalsPages) {
		(function () {
			displayAnimals();
		})();
	}
});


/***/ }),

/***/ "./src/js/formValidaiton.js":
/*!**********************************!*\
  !*** ./src/js/formValidaiton.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
	// form validation
	const form = document.getElementById('contact-form');
	const name = document.getElementById('name');
	const email = document.getElementById('email');
	const message = document.getElementById('message');
	const formBtn = document.getElementById('form-btn');

	if (form) {
		[
			'click',
			'ontouchstart',
			'mouseover',
			'keydown',
			'keypress',
			'touchstart',
			'touchmove',
		].forEach(
			(event) =>
				document.addEventListener(event, () => {
					if (checkInputs() === false) {
						formBtn.disabled = true;
					} else {
						formBtn.disabled = false;
					}
				}),
			false
		);

		function checkInputs() {
			const nameValue = name.value.trim();
			const emailValue = email.value.trim();
			const messageValue = message.value.trim();

			if (nameValue === '') {
				setErrorFor(name, 'Please enter your full name');
			} else {
				setSuccessFor(name);
			}

			if (emailValue === '') {
				setErrorFor(email, 'Please enter your email address');
			} else if (!emailIsValid(emailValue)) {
				setErrorFor(email, 'Email is not valid');
			} else {
				setSuccessFor(email);
			}

			if (messageValue === '') {
				setErrorFor(message, 'Please enter your message');
			} else {
				setSuccessFor(message);
			}

			if (
				nameValue === '' ||
				emailValue === '' ||
				messageValue === '' ||
				!emailIsValid(emailValue)
			) {
				return false;
			} else {
				return true;
			}
		}

		function setErrorFor(input, message) {
			const form = input.parentElement;
			const small = form.querySelector('small');

			small.innerText = message;
			form.className = 'form__group error';
		}

		function setSuccessFor(input) {
			const form = input.parentElement;
			form.className = 'form__group success';
		}

		function emailIsValid(email) {
			const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
				email
			);

			return re;
		}
	}
});


/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
	window.addEventListener('load', (e) => {
		const preload = document.querySelector('.preload');

		preload.classList.add('preload-finished');
	});

	const btnScrollToTop = document.getElementById('btnScrollToTop');
	btnScrollToTop.addEventListener('click', (e) => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	});
});


/***/ }),

/***/ "./src/js/nav.js":
/*!***********************!*\
  !*** ./src/js/nav.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
	const navContainer = document.getElementById('nav-container');
	const menuBtn = document.getElementById('menu-btn');
	const navList = document.getElementById('nav-list');

	window.addEventListener('scroll', (e) => {
		if (document.documentElement.scrollTop > 0) {
			navContainer.classList.add('sticky');
			btnScrollToTop.style.opacity = 1;
		} else {
			navContainer.classList.remove('sticky');
			btnScrollToTop.style.opacity = 0;
		}
	});

	menuBtn.addEventListener('click', (e) => {
		menuBtn.classList.toggle('clicked');
		navContainer.classList.toggle('overlay');
		navList.classList.toggle('show');
	});
});


/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
	// carousel
	const carousel = document.getElementById('carousel');
	const prevBtn = document.getElementById('prev');
	const nextBtn = document.getElementById('next');
	const carouselUrl = './js/carousel.json';

	let firstSlide;
	let lastSlide;

	function getSlidesData() {
		return new Promise((resolve, reject) => {
			fetch(carouselUrl)
				.then((resp) => resp.json())
				.then((data) => resolve(data))
				.catch((err) => reject(err));
		});
	}

	async function displayCarousel() {
		const dataList = await getSlidesData();
		const slidesArray = dataList.slides;

		slidesArray.forEach((slide, slideNumber) => {
			newSlide = document.createElement('div');
			newSlide.classList.add('carousel__slide');

			newSlide.innerHTML = `
						<div class="carousel__image-container">
							<img src="${slide.image}" alt="slide-img" />
						</div>
						<div class="carousel__content">
							<h1 class="carousel__title">${slide.title}</h1>
							<p class="carousel__desc">${slide.content}</p>
							<button class="header__nav-donate-btn button">
								Dugme za nešto
							</button>
						</div>
			`;

			carousel.appendChild(newSlide);

			if (slideNumber === 0) {
				firstSlide = newSlide;
				newSlide.classList.add('active');
			} else if (slideNumber + 1 === dataList.slides.length) {
				lastSlide = newSlide;
			}
		});

		nextSlide();
		previousSlide();
	}

	function nextSlide() {
		const nextBtn = document.getElementById('next');

		nextBtn.addEventListener('click', (e) => {
			const activeSlide = document.querySelector('.carousel__slide.active');

			let nextSibling = activeSlide.nextElementSibling;

			if (nextSibling == null) {
				nextSibling = activeSlide;
			}

			if (nextSibling.classList.contains('carousel__slide')) {
				activeSlide.classList.remove('active');
				nextSibling.classList.add('active');
			}
		});
	}

	function previousSlide() {
		const prevBtn = document.getElementById('prev');

		prevBtn.addEventListener('click', (e) => {
			const activeSlide = document.querySelector('.carousel__slide.active');

			let nextSibling = activeSlide.previousElementSibling;

			if (nextSibling == null) {
				nextSibling = activeSlide;
			}

			if (nextSibling.classList.contains('carousel__slide')) {
				activeSlide.classList.remove('active');
				nextSibling.classList.add('active');
			}
		});
	}

	if (carousel !== null) {
		(function () {
			displayCarousel();
		})();
	}
});


/***/ }),

/***/ "./src/js/tabccordion.js":
/*!*******************************!*\
  !*** ./src/js/tabccordion.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.addEventListener('DOMContentLoaded', function () {
	// tabs
	const tabListBtn = document.querySelectorAll('.tabccordion__list-btn');
	const tabs = document.querySelectorAll('.tabccordion__container');
	const tabccordionList = document.getElementById('tabccordion-list');
	const tabsContent = document.querySelectorAll('.tabccordion__tab-inner');
	const tabccordion = document.getElementById('tabccordion');

	function activateTabs() {
		tabListBtn.forEach((tab) => {
			tab.addEventListener('click', (e) => {
				const tabNav = tab.parentElement;
				const tabsContainer = tabNav.parentElement.parentElement;
				const tabNumber = tab.dataset.forTab;
				const tabToActivate = tabsContainer.querySelector(
					`.tabccordion__tab[data-tab="${tabNumber}"]`
				);

				tabNav.querySelectorAll('.tabccordion__list-btn').forEach((btn) => {
					btn.classList.remove('current');
				});

				tabsContainer.querySelectorAll('.tabccordion__tab').forEach((tab) => {
					tab.classList.remove('current');
				});

				tab.classList.add('current');
				tabToActivate.classList.add('current');

				if (window.innerWidth >= 600) {
					tabsContent.forEach((tabs) => {
						tabs.style.maxHeight = tabs.scrollHeight + 'px';
					});
				}
			});
		});

		if (tabccordionList) {
			tabs.forEach((tab) => {
				tab.querySelector('.tabccordion__list .tabccordion__btn').click();
			});
		}

		window.addEventListener('resize', (e) => {
			if (window.innerWidth >= 600) {
				activateTabs();
			}
		});
	}

	///// accordion
	const accordionBtn = document.querySelectorAll('.accordion__list-btn');

	function activateAccordion() {
		accordionBtn.forEach((btn) => {
			btn.addEventListener('click', () => {
				// check for open accordion
				const accordionBtnOpen = document.querySelector(
					'.accordion__list-btn.open'
				);

				if (accordionBtnOpen && accordionBtnOpen !== btn) {
					// if there is open then remove open class and set maxheight to 0
					accordionBtnOpen.classList.toggle('open');
					accordionBtnOpen.nextElementSibling.style.maxHeight = 0;
				}

				// set open class to every clicked accordion btn
				btn.classList.toggle('open');
				const accordionBody = btn.nextElementSibling;

				if (btn.classList.contains('open')) {
					accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
				} else {
					accordionBody.style.maxHeight = 0;
				}
			});
		});

		window.addEventListener('resize', (e) => {
			if (window.innerWidth < 600) {
				tabsContent.forEach((tabs) => {
					tabs.style.maxHeight = 0;
					if (tabs.previousElementSibling.classList.contains('open')) {
						tabs.previousElementSibling.classList.remove('open');
					}
				});
			}
		});
	}

	if (tabccordion) {
		activateTabs();
		activateAccordion();
	}
});


/***/ }),

/***/ 0:
/*!**********************************************************************************************************************************************************************************!*\
  !*** multi ./src/js/adoptContentSwitcher.js ./src/js/fetchAnimalsData.js ./src/js/formValidaiton.js ./src/js/main.js ./src/js/nav.js ./src/js/slider.js ./src/js/tabccordion.js ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\Front-end projects\DobraNadaAzil\src\js\adoptContentSwitcher.js */"./src/js/adoptContentSwitcher.js");
__webpack_require__(/*! D:\Front-end projects\DobraNadaAzil\src\js\fetchAnimalsData.js */"./src/js/fetchAnimalsData.js");
__webpack_require__(/*! D:\Front-end projects\DobraNadaAzil\src\js\formValidaiton.js */"./src/js/formValidaiton.js");
__webpack_require__(/*! D:\Front-end projects\DobraNadaAzil\src\js\main.js */"./src/js/main.js");
__webpack_require__(/*! D:\Front-end projects\DobraNadaAzil\src\js\nav.js */"./src/js/nav.js");
__webpack_require__(/*! D:\Front-end projects\DobraNadaAzil\src\js\slider.js */"./src/js/slider.js");
module.exports = __webpack_require__(/*! D:\Front-end projects\DobraNadaAzil\src\js\tabccordion.js */"./src/js/tabccordion.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Fkb3B0Q29udGVudFN3aXRjaGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9mZXRjaEFuaW1hbHNEYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9mb3JtVmFsaWRhaXRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbmF2LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RhYmNjb3JkaW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRztBQUNILEVBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOERBQThELE9BQU87QUFDckU7QUFDQSxnQ0FBZ0MsT0FBTztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ2pDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx5Q0FBeUMsVUFBVSxTQUFTLFNBQVM7QUFDckU7QUFDQSxLQUFLLEVBQUU7QUFDUDtBQUNBO0FBQ0EsMERBQTBELFNBQVM7QUFDbkU7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLEVBQUUsV0FBVztBQUM5QjtBQUNBLDBDQUEwQztBQUMxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0UsWUFBWTtBQUM1RTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRSxNQUFNO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxrQ0FBa0M7QUFDakY7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGtDQUFrQztBQUNqRjtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0Msa0NBQWtDO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSixHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ3ZKRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlDQUFpQyx5QkFBeUIsNkJBQTZCLElBQUksUUFBUSxJQUFJLFFBQVEsSUFBSSxRQUFRLElBQUksZ0NBQWdDLEdBQUc7QUFDbEs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUN2RkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTtBQUNGLENBQUM7Ozs7Ozs7Ozs7OztBQ2ZEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7Ozs7Ozs7Ozs7O0FDcEJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0EscUNBQXFDLFlBQVk7QUFDakQsbUNBQW1DLGNBQWM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNqR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsVUFBVTtBQUM5Qzs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLElBQUk7QUFDSixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG5cdGhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIG51bGwsICcgJyk7XHJcblx0Y29uc3QgdGFiU3dpdGNoZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc3dpdGNoZXJdJyk7XHJcblxyXG5cdHRhYlN3aXRjaGVycy5mb3JFYWNoKCh0YWJTd2l0Y2gpID0+IHtcclxuXHRcdGNvbnN0IHRhYlN3aXRjaGVyID0gdGFiU3dpdGNoO1xyXG5cdFx0Y29uc3QgcGFnZUlkID0gdGFiU3dpdGNoZXIuZGF0YXNldC50YWI7XHJcblxyXG5cdFx0dGFiU3dpdGNoZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0XHRkb2N1bWVudFxyXG5cdFx0XHRcdC5xdWVyeVNlbGVjdG9yKCcuYWRvcHRfX2xpc3QtaXRlbS5hY3RpdmUnKVxyXG5cdFx0XHRcdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHJcblx0XHRcdHRhYlN3aXRjaGVyLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHJcblx0XHRcdHN3aXRjaFBhZ2UocGFnZUlkKTtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cclxuXHRmdW5jdGlvbiBzd2l0Y2hQYWdlKHBhZ2VJZCkge1xyXG5cdFx0Y29uc3QgY3VycmVudFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS5hY3RpdmUnKTtcclxuXHRcdGNvbnN0IGN1cnJlbnRQYWdlSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UtaGVhZGVyLmFjdGl2ZScpO1xyXG5cclxuXHRcdGN1cnJlbnRQYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0Y3VycmVudFBhZ2VIZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblxyXG5cdFx0Y29uc3QgbmV4dFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucGFnZVtkYXRhLXBhZ2U9XCIke3BhZ2VJZH1cIl1gKTtcclxuXHRcdGNvbnN0IG5leHRQYWdlSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuXHRcdFx0YC5wYWdlLWhlYWRlcltkYXRhLWhlYWRlcj1cIiR7cGFnZUlkfVwiXWBcclxuXHRcdCk7XHJcblx0XHRuZXh0UGFnZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdG5leHRQYWdlSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdH1cclxufSk7XHJcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3QgYW5pbWFsc1VybCA9ICcuLi9qcy9hbmltYWxzLmpzb24nO1xyXG5cdGNvbnN0IGFuaW1hbHNQYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbmltYWxzLXBhZ2VzJyk7XHJcblx0Y29uc3QgZG9nc0JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb2dzLWJveCcpO1xyXG5cclxuXHRmdW5jdGlvbiBnZXRBbmltYWxzRGF0YSgpIHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdGZldGNoKGFuaW1hbHNVcmwpXHJcblx0XHRcdFx0LnRoZW4oKHJlc3ApID0+IHJlc3AuanNvbigpKVxyXG5cdFx0XHRcdC50aGVuKChkYXRhKSA9PiByZXNvbHZlKGRhdGEpKVxyXG5cdFx0XHRcdC5jYXRjaCgoZXJyKSA9PiByZWplY3QoZXJyKSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGZ1bmN0aW9uIGRpc3BsYXlBbmltYWxzKCkge1xyXG5cdFx0Y29uc3QgZGF0YUxpc3QgPSBhd2FpdCBnZXRBbmltYWxzRGF0YSgpO1xyXG5cdFx0Y29uc3QgYW5pbWFsc0FycmF5ID0gZGF0YUxpc3QuYW5pbWFscztcclxuXHJcblx0XHRhbmltYWxzQXJyYXkuZm9yRWFjaCgoYW5pbWFsKSA9PiB7XHJcblx0XHRcdGRvZ3NBcnJheSA9IGFuaW1hbC5kb2dzO1xyXG5cdFx0XHRjYXRzQXJyYXkgPSBhbmltYWwuY2F0cztcclxuXHJcblx0XHRcdGRvZ3NBcnJheS5mb3JFYWNoKChkb2cpID0+IHtcclxuXHRcdFx0XHRkb2dCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdFx0XHRkb2dCb3guY2xhc3NMaXN0LmFkZCgncGFnZV9fYm94Jyk7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGRvZ1llYXJzID0gZG9nLmJpcnRoO1xyXG5cclxuXHRcdFx0XHRjb25zdCBtaWxpc2Vjc0JldHdlZW5ET0JhbmQxOTcwID0gRGF0ZS5wYXJzZShkb2dZZWFycyk7XHJcblx0XHRcdFx0Y29uc3QgbWlsaXNlY3NCZXR3ZWVuTk9XYW5kMTk3MCA9IERhdGUubm93KCk7XHJcblx0XHRcdFx0Y29uc3QgYWdlSW5NaWxpc2VjcyA9XHJcblx0XHRcdFx0XHRtaWxpc2Vjc0JldHdlZW5OT1dhbmQxOTcwIC0gbWlsaXNlY3NCZXR3ZWVuRE9CYW5kMTk3MDtcclxuXHJcblx0XHRcdFx0Y29uc3QgbWlsaXNlY3MgPSBhZ2VJbk1pbGlzZWNzO1xyXG5cdFx0XHRcdGNvbnN0IHNlY3MgPSAxMDAwO1xyXG5cdFx0XHRcdGNvbnN0IG1pbnMgPSBzZWNzICogNjA7XHJcblx0XHRcdFx0Y29uc3QgaG91ciA9IG1pbnMgKiA2MDtcclxuXHRcdFx0XHRjb25zdCBkYXkgPSBob3VyICogMjQ7XHJcblx0XHRcdFx0Y29uc3QgeWVhciA9IGRheSAqIDM2NTtcclxuXHJcblx0XHRcdFx0bGV0IHllYXJzID0gTWF0aC5yb3VuZChtaWxpc2VjcyAvIHllYXIpO1xyXG5cclxuXHRcdFx0XHRkb2dCb3guaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZV9fYm94LXRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuJHtkb2cuaW1hZ2V9XCIgYWx0PVwiJHtkb2cubmFtZX0gJHtcclxuXHRcdFx0XHRcdGRvZy5zcGVjaWVzXHJcblx0XHRcdFx0fVwifS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZV9fYm94LWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwicGFnZV9fYm94LXRpdGxlXCI+JHtkb2cubmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2VfX2JveC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV4cGFuZE1vcmVDb250ZW50XCIgaWQ9XCJzaG93TW9yZS0ke1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZG9nLnNwZWNpZXNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9JHtkb2cubnVtYmVyfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInBhZ2VfX2JveC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2RvZy5kZXNjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXhwYW5kTW9yZUhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmQtbW9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1oaWRldGV4dD1cIi4uLlJlYWQgbGVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXNob3d0ZXh0PVwiLi4uUmVhZCBtb3JlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwic2hvd01vcmUtJHtkb2cuc3BlY2llc30ke1xyXG5cdFx0XHRcdFx0ZG9nLm51bWJlclxyXG5cdFx0XHRcdH1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidXR0b24gc2hvd01vcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5SZWFkIG1vcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwicGFnZV9fYm94LWljb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZV9fYm94LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtd2VpZ2h0XCI+PC9pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48c3BhbiBjbGFzcz1cInBhZ2VfX2JveC1pY29uLS10ZXh0XCI+JHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkb2cud2VpZ2h0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0ga2c8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1hcnJvd3MtYWx0LXZcIj48L2lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxzcGFuIGNsYXNzPVwicGFnZV9fYm94LWljb24tLXRleHRcIj4ke1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRvZy5oZWlnaHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fWNtPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZV9fYm94LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2FsZW5kYXItY2hlY2tcIj48L2lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxzcGFuIGNsYXNzPVwicGFnZV9fYm94LWljb24tLXRleHRcIj4ke3llYXJzfSB5ci48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cImZhcyBmYS1wYWxldHRlXCI+PC9pXHJcblx0XHRcdFx0XHRcdFx0XHRcdD48c3BhbiBjbGFzcz1cInBhZ2VfX2JveC1pY29uLS10ZXh0XCI+JHtkb2cuY29sb3JbMF0gPyBkb2cuY29sb3JbMF0gOiAnLSd9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZV9fYm94LWljb25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJmYXMgZmEtcGFsZXR0ZVwiPjwvaVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+PHNwYW4gY2xhc3M9XCJwYWdlX19ib3gtaWNvbi0tdGV4dFwiPiR7ZG9nLmNvbG9yWzFdID8gZG9nLmNvbG9yWzFdIDogJy0nfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VfX2JveC1pY29uXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVwiZmFzIGZhLXBhbGV0dGVcIj48L2lcclxuXHRcdFx0XHRcdFx0XHRcdFx0PjxzcGFuIGNsYXNzPVwicGFnZV9fYm94LWljb24tLXRleHRcIj4ke2RvZy5jb2xvclsyXSA/IGRvZy5jb2xvclsyXSA6ICctJ308L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VfX2JveC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXBhd1wiPjwvaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PHNwYW4gY2xhc3M9XCJwYWdlX19ib3gtaWNvbi0tdGV4dFwiPiR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZG9nLmNvYXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VfX2JveC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXZlbnVzLW1hcnNcIj48L2lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxzcGFuIGNsYXNzPVwicGFnZV9fYm94LWljb24tLXRleHRcIj4ke1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRvZy5nZW5kZXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBgO1xyXG5cclxuXHRcdFx0XHRkb2dzQm94LmFwcGVuZENoaWxkKGRvZ0JveCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y29uc3QgZXhwYW5kc01vcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZXhwYW5kLW1vcmVdJyk7XHJcblxyXG5cdFx0ZnVuY3Rpb24gZXhwYW5kKCkge1xyXG5cdFx0XHRjb25zdCBzaG93Q29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZGF0YXNldC50YXJnZXQpO1xyXG5cdFx0XHRpZiAoc2hvd0NvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG5cdFx0XHRcdHRoaXMuaW5uZXJIVE1MID0gdGhpcy5kYXRhc2V0LnNob3d0ZXh0O1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuaW5uZXJIVE1MID0gdGhpcy5kYXRhc2V0LmhpZGV0ZXh0O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRzaG93Q29udGVudC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuXHRcdFx0aWYgKHNob3dDb250ZW50LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuXHRcdFx0XHRzaG93Q29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBzaG93Q29udGVudC5zY3JvbGxIZWlnaHQgKyAncHgnO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNob3dDb250ZW50LnN0eWxlLm1heEhlaWdodCA9IDIwICsgJ3B4JztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGV4cGFuZHNNb3JlLmZvckVhY2goKGJ0bikgPT4ge1xyXG5cdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBleHBhbmQpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRpZiAoYW5pbWFsc1BhZ2VzKSB7XHJcblx0XHQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRkaXNwbGF5QW5pbWFscygpO1xyXG5cdFx0fSkoKTtcclxuXHR9XHJcbn0pO1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG5cdC8vIGZvcm0gdmFsaWRhdGlvblxyXG5cdGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdC1mb3JtJyk7XHJcblx0Y29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJyk7XHJcblx0Y29uc3QgZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWwnKTtcclxuXHRjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lc3NhZ2UnKTtcclxuXHRjb25zdCBmb3JtQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tYnRuJyk7XHJcblxyXG5cdGlmIChmb3JtKSB7XHJcblx0XHRbXHJcblx0XHRcdCdjbGljaycsXHJcblx0XHRcdCdvbnRvdWNoc3RhcnQnLFxyXG5cdFx0XHQnbW91c2VvdmVyJyxcclxuXHRcdFx0J2tleWRvd24nLFxyXG5cdFx0XHQna2V5cHJlc3MnLFxyXG5cdFx0XHQndG91Y2hzdGFydCcsXHJcblx0XHRcdCd0b3VjaG1vdmUnLFxyXG5cdFx0XS5mb3JFYWNoKFxyXG5cdFx0XHQoZXZlbnQpID0+XHJcblx0XHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgKCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGNoZWNrSW5wdXRzKCkgPT09IGZhbHNlKSB7XHJcblx0XHRcdFx0XHRcdGZvcm1CdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Zm9ybUJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHJcblx0XHRmdW5jdGlvbiBjaGVja0lucHV0cygpIHtcclxuXHRcdFx0Y29uc3QgbmFtZVZhbHVlID0gbmFtZS52YWx1ZS50cmltKCk7XHJcblx0XHRcdGNvbnN0IGVtYWlsVmFsdWUgPSBlbWFpbC52YWx1ZS50cmltKCk7XHJcblx0XHRcdGNvbnN0IG1lc3NhZ2VWYWx1ZSA9IG1lc3NhZ2UudmFsdWUudHJpbSgpO1xyXG5cclxuXHRcdFx0aWYgKG5hbWVWYWx1ZSA9PT0gJycpIHtcclxuXHRcdFx0XHRzZXRFcnJvckZvcihuYW1lLCAnUGxlYXNlIGVudGVyIHlvdXIgZnVsbCBuYW1lJyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0U3VjY2Vzc0ZvcihuYW1lKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGVtYWlsVmFsdWUgPT09ICcnKSB7XHJcblx0XHRcdFx0c2V0RXJyb3JGb3IoZW1haWwsICdQbGVhc2UgZW50ZXIgeW91ciBlbWFpbCBhZGRyZXNzJyk7XHJcblx0XHRcdH0gZWxzZSBpZiAoIWVtYWlsSXNWYWxpZChlbWFpbFZhbHVlKSkge1xyXG5cdFx0XHRcdHNldEVycm9yRm9yKGVtYWlsLCAnRW1haWwgaXMgbm90IHZhbGlkJyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0U3VjY2Vzc0ZvcihlbWFpbCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChtZXNzYWdlVmFsdWUgPT09ICcnKSB7XHJcblx0XHRcdFx0c2V0RXJyb3JGb3IobWVzc2FnZSwgJ1BsZWFzZSBlbnRlciB5b3VyIG1lc3NhZ2UnKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRTdWNjZXNzRm9yKG1lc3NhZ2UpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoXHJcblx0XHRcdFx0bmFtZVZhbHVlID09PSAnJyB8fFxyXG5cdFx0XHRcdGVtYWlsVmFsdWUgPT09ICcnIHx8XHJcblx0XHRcdFx0bWVzc2FnZVZhbHVlID09PSAnJyB8fFxyXG5cdFx0XHRcdCFlbWFpbElzVmFsaWQoZW1haWxWYWx1ZSlcclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gc2V0RXJyb3JGb3IoaW5wdXQsIG1lc3NhZ2UpIHtcclxuXHRcdFx0Y29uc3QgZm9ybSA9IGlucHV0LnBhcmVudEVsZW1lbnQ7XHJcblx0XHRcdGNvbnN0IHNtYWxsID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdzbWFsbCcpO1xyXG5cclxuXHRcdFx0c21hbGwuaW5uZXJUZXh0ID0gbWVzc2FnZTtcclxuXHRcdFx0Zm9ybS5jbGFzc05hbWUgPSAnZm9ybV9fZ3JvdXAgZXJyb3InO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHNldFN1Y2Nlc3NGb3IoaW5wdXQpIHtcclxuXHRcdFx0Y29uc3QgZm9ybSA9IGlucHV0LnBhcmVudEVsZW1lbnQ7XHJcblx0XHRcdGZvcm0uY2xhc3NOYW1lID0gJ2Zvcm1fX2dyb3VwIHN1Y2Nlc3MnO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGVtYWlsSXNWYWxpZChlbWFpbCkge1xyXG5cdFx0XHRjb25zdCByZSA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvLnRlc3QoXHJcblx0XHRcdFx0ZW1haWxcclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdHJldHVybiByZTtcclxuXHRcdH1cclxuXHR9XHJcbn0pO1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIChlKSA9PiB7XG5cdFx0Y29uc3QgcHJlbG9hZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVsb2FkJyk7XG5cblx0XHRwcmVsb2FkLmNsYXNzTGlzdC5hZGQoJ3ByZWxvYWQtZmluaXNoZWQnKTtcblx0fSk7XG5cblx0Y29uc3QgYnRuU2Nyb2xsVG9Ub3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuU2Nyb2xsVG9Ub3AnKTtcblx0YnRuU2Nyb2xsVG9Ub3AuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdHdpbmRvdy5zY3JvbGxUbyh7XG5cdFx0XHR0b3A6IDAsXG5cdFx0XHRsZWZ0OiAwLFxuXHRcdFx0YmVoYXZpb3I6ICdzbW9vdGgnLFxuXHRcdH0pO1xuXHR9KTtcbn0pO1xuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuXHRjb25zdCBuYXZDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2LWNvbnRhaW5lcicpO1xyXG5cdGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1idG4nKTtcclxuXHRjb25zdCBuYXZMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdi1saXN0Jyk7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoZSkgPT4ge1xyXG5cdFx0aWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPiAwKSB7XHJcblx0XHRcdG5hdkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzdGlja3knKTtcclxuXHRcdFx0YnRuU2Nyb2xsVG9Ub3Auc3R5bGUub3BhY2l0eSA9IDE7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRuYXZDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnc3RpY2t5Jyk7XHJcblx0XHRcdGJ0blNjcm9sbFRvVG9wLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHRtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHRcdG1lbnVCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnY2xpY2tlZCcpO1xyXG5cdFx0bmF2Q29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ292ZXJsYXknKTtcclxuXHRcdG5hdkxpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xyXG5cdH0pO1xyXG59KTtcclxuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuXHQvLyBjYXJvdXNlbFxyXG5cdGNvbnN0IGNhcm91c2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nhcm91c2VsJyk7XHJcblx0Y29uc3QgcHJldkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2Jyk7XHJcblx0Y29uc3QgbmV4dEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0Jyk7XHJcblx0Y29uc3QgY2Fyb3VzZWxVcmwgPSAnLi9qcy9jYXJvdXNlbC5qc29uJztcclxuXHJcblx0bGV0IGZpcnN0U2xpZGU7XHJcblx0bGV0IGxhc3RTbGlkZTtcclxuXHJcblx0ZnVuY3Rpb24gZ2V0U2xpZGVzRGF0YSgpIHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdGZldGNoKGNhcm91c2VsVXJsKVxyXG5cdFx0XHRcdC50aGVuKChyZXNwKSA9PiByZXNwLmpzb24oKSlcclxuXHRcdFx0XHQudGhlbigoZGF0YSkgPT4gcmVzb2x2ZShkYXRhKSlcclxuXHRcdFx0XHQuY2F0Y2goKGVycikgPT4gcmVqZWN0KGVycikpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRhc3luYyBmdW5jdGlvbiBkaXNwbGF5Q2Fyb3VzZWwoKSB7XHJcblx0XHRjb25zdCBkYXRhTGlzdCA9IGF3YWl0IGdldFNsaWRlc0RhdGEoKTtcclxuXHRcdGNvbnN0IHNsaWRlc0FycmF5ID0gZGF0YUxpc3Quc2xpZGVzO1xyXG5cclxuXHRcdHNsaWRlc0FycmF5LmZvckVhY2goKHNsaWRlLCBzbGlkZU51bWJlcikgPT4ge1xyXG5cdFx0XHRuZXdTbGlkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0XHRuZXdTbGlkZS5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9fc2xpZGUnKTtcclxuXHJcblx0XHRcdG5ld1NsaWRlLmlubmVySFRNTCA9IGBcclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcm91c2VsX19pbWFnZS1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIiR7c2xpZGUuaW1hZ2V9XCIgYWx0PVwic2xpZGUtaW1nXCIgLz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjYXJvdXNlbF9fY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxoMSBjbGFzcz1cImNhcm91c2VsX190aXRsZVwiPiR7c2xpZGUudGl0bGV9PC9oMT5cclxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzcz1cImNhcm91c2VsX19kZXNjXCI+JHtzbGlkZS5jb250ZW50fTwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiaGVhZGVyX19uYXYtZG9uYXRlLWJ0biBidXR0b25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdER1Z21lIHphIG5lxaF0b1xyXG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0YDtcclxuXHJcblx0XHRcdGNhcm91c2VsLmFwcGVuZENoaWxkKG5ld1NsaWRlKTtcclxuXHJcblx0XHRcdGlmIChzbGlkZU51bWJlciA9PT0gMCkge1xyXG5cdFx0XHRcdGZpcnN0U2xpZGUgPSBuZXdTbGlkZTtcclxuXHRcdFx0XHRuZXdTbGlkZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdFx0fSBlbHNlIGlmIChzbGlkZU51bWJlciArIDEgPT09IGRhdGFMaXN0LnNsaWRlcy5sZW5ndGgpIHtcclxuXHRcdFx0XHRsYXN0U2xpZGUgPSBuZXdTbGlkZTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0bmV4dFNsaWRlKCk7XHJcblx0XHRwcmV2aW91c1NsaWRlKCk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBuZXh0U2xpZGUoKSB7XHJcblx0XHRjb25zdCBuZXh0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHQnKTtcclxuXHJcblx0XHRuZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHRcdFx0Y29uc3QgYWN0aXZlU2xpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX3NsaWRlLmFjdGl2ZScpO1xyXG5cclxuXHRcdFx0bGV0IG5leHRTaWJsaW5nID0gYWN0aXZlU2xpZGUubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG5cclxuXHRcdFx0aWYgKG5leHRTaWJsaW5nID09IG51bGwpIHtcclxuXHRcdFx0XHRuZXh0U2libGluZyA9IGFjdGl2ZVNsaWRlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAobmV4dFNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJvdXNlbF9fc2xpZGUnKSkge1xyXG5cdFx0XHRcdGFjdGl2ZVNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdG5leHRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHByZXZpb3VzU2xpZGUoKSB7XHJcblx0XHRjb25zdCBwcmV2QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXYnKTtcclxuXHJcblx0XHRwcmV2QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHRcdFx0Y29uc3QgYWN0aXZlU2xpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX3NsaWRlLmFjdGl2ZScpO1xyXG5cclxuXHRcdFx0bGV0IG5leHRTaWJsaW5nID0gYWN0aXZlU2xpZGUucHJldmlvdXNFbGVtZW50U2libGluZztcclxuXHJcblx0XHRcdGlmIChuZXh0U2libGluZyA9PSBudWxsKSB7XHJcblx0XHRcdFx0bmV4dFNpYmxpbmcgPSBhY3RpdmVTbGlkZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKG5leHRTaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucygnY2Fyb3VzZWxfX3NsaWRlJykpIHtcclxuXHRcdFx0XHRhY3RpdmVTbGlkZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdFx0XHRuZXh0U2libGluZy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRpZiAoY2Fyb3VzZWwgIT09IG51bGwpIHtcclxuXHRcdChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGRpc3BsYXlDYXJvdXNlbCgpO1xyXG5cdFx0fSkoKTtcclxuXHR9XHJcbn0pO1xyXG4iLCJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuXHQvLyB0YWJzXHJcblx0Y29uc3QgdGFiTGlzdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJjY29yZGlvbl9fbGlzdC1idG4nKTtcclxuXHRjb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYmNjb3JkaW9uX19jb250YWluZXInKTtcclxuXHRjb25zdCB0YWJjY29yZGlvbkxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiY2NvcmRpb24tbGlzdCcpO1xyXG5cdGNvbnN0IHRhYnNDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYmNjb3JkaW9uX190YWItaW5uZXInKTtcclxuXHRjb25zdCB0YWJjY29yZGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWJjY29yZGlvbicpO1xyXG5cclxuXHRmdW5jdGlvbiBhY3RpdmF0ZVRhYnMoKSB7XHJcblx0XHR0YWJMaXN0QnRuLmZvckVhY2goKHRhYikgPT4ge1xyXG5cdFx0XHR0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHRhYk5hdiA9IHRhYi5wYXJlbnRFbGVtZW50O1xyXG5cdFx0XHRcdGNvbnN0IHRhYnNDb250YWluZXIgPSB0YWJOYXYucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG5cdFx0XHRcdGNvbnN0IHRhYk51bWJlciA9IHRhYi5kYXRhc2V0LmZvclRhYjtcclxuXHRcdFx0XHRjb25zdCB0YWJUb0FjdGl2YXRlID0gdGFic0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHRcdFx0YC50YWJjY29yZGlvbl9fdGFiW2RhdGEtdGFiPVwiJHt0YWJOdW1iZXJ9XCJdYFxyXG5cdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdHRhYk5hdi5xdWVyeVNlbGVjdG9yQWxsKCcudGFiY2NvcmRpb25fX2xpc3QtYnRuJykuZm9yRWFjaCgoYnRuKSA9PiB7XHJcblx0XHRcdFx0XHRidG4uY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR0YWJzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJjY29yZGlvbl9fdGFiJykuZm9yRWFjaCgodGFiKSA9PiB7XHJcblx0XHRcdFx0XHR0YWIuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR0YWIuY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xyXG5cdFx0XHRcdHRhYlRvQWN0aXZhdGUuY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xyXG5cclxuXHRcdFx0XHRpZiAod2luZG93LmlubmVyV2lkdGggPj0gNjAwKSB7XHJcblx0XHRcdFx0XHR0YWJzQ29udGVudC5mb3JFYWNoKCh0YWJzKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRhYnMuc3R5bGUubWF4SGVpZ2h0ID0gdGFicy5zY3JvbGxIZWlnaHQgKyAncHgnO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGlmICh0YWJjY29yZGlvbkxpc3QpIHtcclxuXHRcdFx0dGFicy5mb3JFYWNoKCh0YWIpID0+IHtcclxuXHRcdFx0XHR0YWIucXVlcnlTZWxlY3RvcignLnRhYmNjb3JkaW9uX19saXN0IC50YWJjY29yZGlvbl9fYnRuJykuY2xpY2soKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIChlKSA9PiB7XHJcblx0XHRcdGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSA2MDApIHtcclxuXHRcdFx0XHRhY3RpdmF0ZVRhYnMoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvLy8vLyBhY2NvcmRpb25cclxuXHRjb25zdCBhY2NvcmRpb25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uX19saXN0LWJ0bicpO1xyXG5cclxuXHRmdW5jdGlvbiBhY3RpdmF0ZUFjY29yZGlvbigpIHtcclxuXHRcdGFjY29yZGlvbkJ0bi5mb3JFYWNoKChidG4pID0+IHtcclxuXHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRcdC8vIGNoZWNrIGZvciBvcGVuIGFjY29yZGlvblxyXG5cdFx0XHRcdGNvbnN0IGFjY29yZGlvbkJ0bk9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHRcdFx0Jy5hY2NvcmRpb25fX2xpc3QtYnRuLm9wZW4nXHJcblx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0aWYgKGFjY29yZGlvbkJ0bk9wZW4gJiYgYWNjb3JkaW9uQnRuT3BlbiAhPT0gYnRuKSB7XHJcblx0XHRcdFx0XHQvLyBpZiB0aGVyZSBpcyBvcGVuIHRoZW4gcmVtb3ZlIG9wZW4gY2xhc3MgYW5kIHNldCBtYXhoZWlnaHQgdG8gMFxyXG5cdFx0XHRcdFx0YWNjb3JkaW9uQnRuT3Blbi5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XHJcblx0XHRcdFx0XHRhY2NvcmRpb25CdG5PcGVuLm5leHRFbGVtZW50U2libGluZy5zdHlsZS5tYXhIZWlnaHQgPSAwO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gc2V0IG9wZW4gY2xhc3MgdG8gZXZlcnkgY2xpY2tlZCBhY2NvcmRpb24gYnRuXHJcblx0XHRcdFx0YnRuLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcclxuXHRcdFx0XHRjb25zdCBhY2NvcmRpb25Cb2R5ID0gYnRuLm5leHRFbGVtZW50U2libGluZztcclxuXHJcblx0XHRcdFx0aWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKSkge1xyXG5cdFx0XHRcdFx0YWNjb3JkaW9uQm9keS5zdHlsZS5tYXhIZWlnaHQgPSBhY2NvcmRpb25Cb2R5LnNjcm9sbEhlaWdodCArICdweCc7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGFjY29yZGlvbkJvZHkuc3R5bGUubWF4SGVpZ2h0ID0gMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIChlKSA9PiB7XHJcblx0XHRcdGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDYwMCkge1xyXG5cdFx0XHRcdHRhYnNDb250ZW50LmZvckVhY2goKHRhYnMpID0+IHtcclxuXHRcdFx0XHRcdHRhYnMuc3R5bGUubWF4SGVpZ2h0ID0gMDtcclxuXHRcdFx0XHRcdGlmICh0YWJzLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuJykpIHtcclxuXHRcdFx0XHRcdFx0dGFicy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRpZiAodGFiY2NvcmRpb24pIHtcclxuXHRcdGFjdGl2YXRlVGFicygpO1xyXG5cdFx0YWN0aXZhdGVBY2NvcmRpb24oKTtcclxuXHR9XHJcbn0pO1xyXG4iXSwicHJlRXhpc3RpbmdDb21tZW50IjoiLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk4dmQyVmljR0ZqYXk5aWIyOTBjM1J5WVhBaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwycHpMMkZrYjNCMFEyOXVkR1Z1ZEZOM2FYUmphR1Z5TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDNOeVl5OXFjeTltWlhSamFFRnVhVzFoYkhORVlYUmhMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5cWN5OW1iM0p0Vm1Gc2FXUmhhWFJ2Ymk1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5emNtTXZhbk12YldGcGJpNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXpjbU12YW5NdmJtRjJMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5cWN5OXpiR2xrWlhJdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmMzSmpMMnB6TDNSaFltTmpiM0prYVc5dUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdVVUZCUVR0UlFVTkJPenRSUVVWQk8xRkJRMEU3TzFGQlJVRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdPMUZCUlVFN1VVRkRRVHM3VVVGRlFUdFJRVU5CT3p0UlFVVkJPMUZCUTBFN1VVRkRRVHM3TzFGQlIwRTdVVUZEUVRzN1VVRkZRVHRSUVVOQk96dFJRVVZCTzFGQlEwRTdVVUZEUVR0UlFVTkJMREJEUVVFd1F5eG5RMEZCWjBNN1VVRkRNVVU3VVVGRFFUczdVVUZGUVR0UlFVTkJPMUZCUTBFN1VVRkRRU3gzUkVGQmQwUXNhMEpCUVd0Q08xRkJRekZGTzFGQlEwRXNhVVJCUVdsRUxHTkJRV003VVVGREwwUTdPMUZCUlVFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQkxIbERRVUY1UXl4cFEwRkJhVU03VVVGRE1VVXNaMGhCUVdkSUxHMUNRVUZ0UWl4RlFVRkZPMUZCUTNKSk8xRkJRMEU3TzFGQlJVRTdVVUZEUVR0UlFVTkJPMUZCUTBFc01rSkJRVEpDTERCQ1FVRXdRaXhGUVVGRk8xRkJRM1pFTEdsRFFVRnBReXhsUVVGbE8xRkJRMmhFTzFGQlEwRTdVVUZEUVRzN1VVRkZRVHRSUVVOQkxITkVRVUZ6UkN3clJFRkJLMFE3TzFGQlJYSklPMUZCUTBFN096dFJRVWRCTzFGQlEwRTdPenM3T3pzN096czdPenRCUTJ4R1FUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRXNSMEZCUnp0QlFVTklMRVZCUVVVN08wRkJSVVk3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUVzT0VSQlFUaEVMRTlCUVU4N1FVRkRja1U3UVVGRFFTeG5RMEZCWjBNc1QwRkJUenRCUVVOMlF6dEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRU5CUVVNN096czdPenM3T3pzN096dEJRMnBEUkR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4NVEwRkJlVU1zVlVGQlZTeFRRVUZUTEZOQlFWTTdRVUZEY2tVN1FVRkRRU3hMUVVGTExFVkJRVVU3UVVGRFVEdEJRVU5CTzBGQlEwRXNNRVJCUVRCRUxGTkJRVk03UVVGRGJrVTdRVUZEUVR0QlFVTkJPMEZCUTBFc2FVSkJRV2xDTEVWQlFVVXNWMEZCVnp0QlFVTTVRanRCUVVOQkxEQkRRVUV3UXp0QlFVTXhRenRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3huUlVGQlowVXNXVUZCV1R0QlFVTTFSVHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRzFDUVVGdFFqdEJRVU51UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYlVKQlFXMUNPMEZCUTI1Q08wRkJRMEU3UVVGRFFUdEJRVU5CTERCRlFVRXdSU3hOUVVGTk8wRkJRMmhHTzBGQlEwRTdRVUZEUVR0QlFVTkJMQ3REUVVFclF5eHJRMEZCYTBNN1FVRkRha1k3UVVGRFFUdEJRVU5CTzBGQlEwRXNLME5CUVN0RExHdERRVUZyUXp0QlFVTnFSanRCUVVOQk8wRkJRMEU3UVVGRFFTd3JRMEZCSzBNc2EwTkJRV3RETzBGQlEycEdPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHRRa0ZCYlVJN1FVRkRia0k3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRzFDUVVGdFFqdEJRVU51UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTEVsQlFVazdRVUZEU2l4SFFVRkhPenRCUVVWSU96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1NVRkJTVHRCUVVOS08wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1NVRkJTVHRCUVVOS08wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHRCUVVOQkxFTkJRVU03T3pzN096czdPenM3T3p0QlEzWktSRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNUVUZCVFR0QlFVTk9PMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHc3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNTVUZCU1R0QlFVTktPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEVsQlFVazdRVUZEU2p0QlFVTkJMRWxCUVVrN1FVRkRTanRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4SlFVRkpPMEZCUTBvN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFbEJRVWs3UVVGRFNqdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMR2xEUVVGcFF5eDVRa0ZCZVVJc05rSkJRVFpDTEVsQlFVa3NVVUZCVVN4SlFVRkpMRkZCUVZFc1NVRkJTU3hSUVVGUkxFbEJRVWtzWjBOQlFXZERMRWRCUVVjN1FVRkRiRXM3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hEUVVGRE96czdPenM3T3pzN096czdRVU4yUmtRN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRXNSVUZCUlRzN1FVRkZSanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnc1JVRkJSVHRCUVVOR0xFTkJRVU03T3pzN096czdPenM3T3p0QlEyWkVPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU8wRkJRMEU3UVVGRFFUdEJRVU5CTEVWQlFVVTdPMEZCUlVZN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEZRVUZGTzBGQlEwWXNRMEZCUXpzN096czdPenM3T3pzN08wRkRjRUpFTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0RzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeHRRa0ZCYlVJc1dVRkJXVHRCUVVNdlFqdEJRVU5CTzBGQlEwRXNjVU5CUVhGRExGbEJRVms3UVVGRGFrUXNiVU5CUVcxRExHTkJRV003UVVGRGFrUTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hKUVVGSk8wRkJRMG83UVVGRFFUdEJRVU5CTEVkQlFVYzdPMEZCUlVnN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0RzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVN4RFFVRkRPenM3T3pzN096czdPenM3UVVOcVIwUTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHZRMEZCYjBNc1ZVRkJWVHRCUVVNNVF6czdRVUZGUVR0QlFVTkJPMEZCUTBFc1MwRkJTenM3UVVGRlREdEJRVU5CTzBGQlEwRXNTMEZCU3pzN1FVRkZURHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRTFCUVUwN1FVRkRUanRCUVVOQkxFbEJRVWs3UVVGRFNpeEhRVUZIT3p0QlFVVklPMEZCUTBFN1FVRkRRVHRCUVVOQkxFbEJRVWs3UVVGRFNqczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQkxFbEJRVWs3UVVGRFNpeEhRVUZIT3p0QlFVVklPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNTMEZCU3p0QlFVTk1PMEZCUTBFc1IwRkJSenRCUVVOSU96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1EwRkJReUlzSW1acGJHVWlPaUl5TnpabVpXWmpZVEEwTTJWa1lUYzRabVprT0M1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaUJjZEM4dklGUm9aU0J0YjJSMWJHVWdZMkZqYUdWY2JpQmNkSFpoY2lCcGJuTjBZV3hzWldSTmIyUjFiR1Z6SUQwZ2UzMDdYRzVjYmlCY2RDOHZJRlJvWlNCeVpYRjFhWEpsSUdaMWJtTjBhVzl1WEc0Z1hIUm1kVzVqZEdsdmJpQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLRzF2WkhWc1pVbGtLU0I3WEc1Y2JpQmNkRngwTHk4Z1EyaGxZMnNnYVdZZ2JXOWtkV3hsSUdseklHbHVJR05oWTJobFhHNGdYSFJjZEdsbUtHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsU1dSZEtTQjdYRzRnWEhSY2RGeDBjbVYwZFhKdUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsU1dSZExtVjRjRzl5ZEhNN1hHNGdYSFJjZEgxY2JpQmNkRngwTHk4Z1EzSmxZWFJsSUdFZ2JtVjNJRzF2WkhWc1pTQW9ZVzVrSUhCMWRDQnBkQ0JwYm5SdklIUm9aU0JqWVdOb1pTbGNiaUJjZEZ4MGRtRnlJRzF2WkhWc1pTQTlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRJRDBnZTF4dUlGeDBYSFJjZEdrNklHMXZaSFZzWlVsa0xGeHVJRngwWEhSY2RHdzZJR1poYkhObExGeHVJRngwWEhSY2RHVjRjRzl5ZEhNNklIdDlYRzRnWEhSY2RIMDdYRzVjYmlCY2RGeDBMeThnUlhobFkzVjBaU0IwYUdVZ2JXOWtkV3hsSUdaMWJtTjBhVzl1WEc0Z1hIUmNkRzF2WkhWc1pYTmJiVzlrZFd4bFNXUmRMbU5oYkd3b2JXOWtkV3hsTG1WNGNHOXlkSE1zSUcxdlpIVnNaU3dnYlc5a2RXeGxMbVY0Y0c5eWRITXNJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThwTzF4dVhHNGdYSFJjZEM4dklFWnNZV2NnZEdobElHMXZaSFZzWlNCaGN5QnNiMkZrWldSY2JpQmNkRngwYlc5a2RXeGxMbXdnUFNCMGNuVmxPMXh1WEc0Z1hIUmNkQzh2SUZKbGRIVnliaUIwYUdVZ1pYaHdiM0owY3lCdlppQjBhR1VnYlc5a2RXeGxYRzRnWEhSY2RISmxkSFZ5YmlCdGIyUjFiR1V1Wlhod2IzSjBjenRjYmlCY2RIMWNibHh1WEc0Z1hIUXZMeUJsZUhCdmMyVWdkR2hsSUcxdlpIVnNaWE1nYjJKcVpXTjBJQ2hmWDNkbFluQmhZMnRmYlc5a2RXeGxjMTlmS1Z4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV0SUQwZ2JXOWtkV3hsY3p0Y2JseHVJRngwTHk4Z1pYaHdiM05sSUhSb1pTQnRiMlIxYkdVZ1kyRmphR1ZjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVZeUE5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE03WEc1Y2JpQmNkQzh2SUdSbFptbHVaU0JuWlhSMFpYSWdablZ1WTNScGIyNGdabTl5SUdoaGNtMXZibmtnWlhod2IzSjBjMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWtJRDBnWm5WdVkzUnBiMjRvWlhod2IzSjBjeXdnYm1GdFpTd2daMlYwZEdWeUtTQjdYRzRnWEhSY2RHbG1LQ0ZmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG04b1pYaHdiM0owY3l3Z2JtRnRaU2twSUh0Y2JpQmNkRngwWEhSUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29aWGh3YjNKMGN5d2dibUZ0WlN3Z2V5QmxiblZ0WlhKaFlteGxPaUIwY25WbExDQm5aWFE2SUdkbGRIUmxjaUI5S1R0Y2JpQmNkRngwZlZ4dUlGeDBmVHRjYmx4dUlGeDBMeThnWkdWbWFXNWxJRjlmWlhOTmIyUjFiR1VnYjI0Z1pYaHdiM0owYzF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV5SUQwZ1puVnVZM1JwYjI0b1pYaHdiM0owY3lrZ2UxeHVJRngwWEhScFppaDBlWEJsYjJZZ1UzbHRZbTlzSUNFOVBTQW5kVzVrWldacGJtVmtKeUFtSmlCVGVXMWliMnd1ZEc5VGRISnBibWRVWVdjcElIdGNiaUJjZEZ4MFhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvWlhod2IzSjBjeXdnVTNsdFltOXNMblJ2VTNSeWFXNW5WR0ZuTENCN0lIWmhiSFZsT2lBblRXOWtkV3hsSnlCOUtUdGNiaUJjZEZ4MGZWeHVJRngwWEhSUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29aWGh3YjNKMGN5d2dKMTlmWlhOTmIyUjFiR1VuTENCN0lIWmhiSFZsT2lCMGNuVmxJSDBwTzF4dUlGeDBmVHRjYmx4dUlGeDBMeThnWTNKbFlYUmxJR0VnWm1GclpTQnVZVzFsYzNCaFkyVWdiMkpxWldOMFhHNGdYSFF2THlCdGIyUmxJQ1lnTVRvZ2RtRnNkV1VnYVhNZ1lTQnRiMlIxYkdVZ2FXUXNJSEpsY1hWcGNtVWdhWFJjYmlCY2RDOHZJRzF2WkdVZ0ppQXlPaUJ0WlhKblpTQmhiR3dnY0hKdmNHVnlkR2xsY3lCdlppQjJZV3gxWlNCcGJuUnZJSFJvWlNCdWMxeHVJRngwTHk4Z2JXOWtaU0FtSURRNklISmxkSFZ5YmlCMllXeDFaU0IzYUdWdUlHRnNjbVZoWkhrZ2JuTWdiMkpxWldOMFhHNGdYSFF2THlCdGIyUmxJQ1lnT0h3eE9pQmlaV2hoZG1VZ2JHbHJaU0J5WlhGMWFYSmxYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuUWdQU0JtZFc1amRHbHZiaWgyWVd4MVpTd2diVzlrWlNrZ2UxeHVJRngwWEhScFppaHRiMlJsSUNZZ01Ta2dkbUZzZFdVZ1BTQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLSFpoYkhWbEtUdGNiaUJjZEZ4MGFXWW9iVzlrWlNBbUlEZ3BJSEpsZEhWeWJpQjJZV3gxWlR0Y2JpQmNkRngwYVdZb0tHMXZaR1VnSmlBMEtTQW1KaUIwZVhCbGIyWWdkbUZzZFdVZ1BUMDlJQ2R2WW1wbFkzUW5JQ1ltSUhaaGJIVmxJQ1ltSUhaaGJIVmxMbDlmWlhOTmIyUjFiR1VwSUhKbGRIVnliaUIyWVd4MVpUdGNiaUJjZEZ4MGRtRnlJRzV6SUQwZ1QySnFaV04wTG1OeVpXRjBaU2h1ZFd4c0tUdGNiaUJjZEZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXlLRzV6S1R0Y2JpQmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHNXpMQ0FuWkdWbVlYVnNkQ2NzSUhzZ1pXNTFiV1Z5WVdKc1pUb2dkSEoxWlN3Z2RtRnNkV1U2SUhaaGJIVmxJSDBwTzF4dUlGeDBYSFJwWmlodGIyUmxJQ1lnTWlBbUppQjBlWEJsYjJZZ2RtRnNkV1VnSVQwZ0ozTjBjbWx1WnljcElHWnZjaWgyWVhJZ2EyVjVJR2x1SUhaaGJIVmxLU0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1Rb2JuTXNJR3RsZVN3Z1puVnVZM1JwYjI0b2EyVjVLU0I3SUhKbGRIVnliaUIyWVd4MVpWdHJaWGxkT3lCOUxtSnBibVFvYm5Wc2JDd2dhMlY1S1NrN1hHNGdYSFJjZEhKbGRIVnliaUJ1Y3p0Y2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUdkbGRFUmxabUYxYkhSRmVIQnZjblFnWm5WdVkzUnBiMjRnWm05eUlHTnZiWEJoZEdsaWFXeHBkSGtnZDJsMGFDQnViMjR0YUdGeWJXOXVlU0J0YjJSMWJHVnpYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtNGdQU0JtZFc1amRHbHZiaWh0YjJSMWJHVXBJSHRjYmlCY2RGeDBkbUZ5SUdkbGRIUmxjaUE5SUcxdlpIVnNaU0FtSmlCdGIyUjFiR1V1WDE5bGMwMXZaSFZzWlNBL1hHNGdYSFJjZEZ4MFpuVnVZM1JwYjI0Z1oyVjBSR1ZtWVhWc2RDZ3BJSHNnY21WMGRYSnVJRzF2WkhWc1pWc25aR1ZtWVhWc2RDZGRPeUI5SURwY2JpQmNkRngwWEhSbWRXNWpkR2x2YmlCblpYUk5iMlIxYkdWRmVIQnZjblJ6S0NrZ2V5QnlaWFIxY200Z2JXOWtkV3hsT3lCOU8xeHVJRngwWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtUW9aMlYwZEdWeUxDQW5ZU2NzSUdkbGRIUmxjaWs3WEc0Z1hIUmNkSEpsZEhWeWJpQm5aWFIwWlhJN1hHNGdYSFI5TzF4dVhHNGdYSFF2THlCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVMbU5oYkd4Y2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YnlBOUlHWjFibU4wYVc5dUtHOWlhbVZqZEN3Z2NISnZjR1Z5ZEhrcElIc2djbVYwZFhKdUlFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWFHRnpUM2R1VUhKdmNHVnlkSGt1WTJGc2JDaHZZbXBsWTNRc0lIQnliM0JsY25SNUtUc2dmVHRjYmx4dUlGeDBMeThnWDE5M1pXSndZV05yWDNCMVlteHBZMTl3WVhSb1gxOWNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWNDQTlJRndpWENJN1hHNWNibHh1SUZ4MEx5OGdURzloWkNCbGJuUnllU0J0YjJSMWJHVWdZVzVrSUhKbGRIVnliaUJsZUhCdmNuUnpYRzRnWEhSeVpYUjFjbTRnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHloZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuTWdQU0F3S1R0Y2JpSXNJbVJ2WTNWdFpXNTBMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMFJQVFVOdmJuUmxiblJNYjJGa1pXUW5MQ0JtZFc1amRHbHZiaUFvS1NCN1hISmNibHgwYUdsemRHOXllUzV5WlhCc1lXTmxVM1JoZEdVb2JuVnNiQ3dnYm5Wc2JDd2dKeUFuS1R0Y2NseHVYSFJqYjI1emRDQjBZV0pUZDJsMFkyaGxjbk1nUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlRV3hzS0NkYlpHRjBZUzF6ZDJsMFkyaGxjbDBuS1R0Y2NseHVYSEpjYmx4MGRHRmlVM2RwZEdOb1pYSnpMbVp2Y2tWaFkyZ29LSFJoWWxOM2FYUmphQ2tnUFQ0Z2UxeHlYRzVjZEZ4MFkyOXVjM1FnZEdGaVUzZHBkR05vWlhJZ1BTQjBZV0pUZDJsMFkyZzdYSEpjYmx4MFhIUmpiMjV6ZENCd1lXZGxTV1FnUFNCMFlXSlRkMmwwWTJobGNpNWtZWFJoYzJWMExuUmhZanRjY2x4dVhISmNibHgwWEhSMFlXSlRkMmwwWTJobGNpNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZGpiR2xqYXljc0lDaGxLU0E5UGlCN1hISmNibHgwWEhSY2RHUnZZM1Z0Wlc1MFhISmNibHgwWEhSY2RGeDBMbkYxWlhKNVUyVnNaV04wYjNJb0p5NWhaRzl3ZEY5ZmJHbHpkQzFwZEdWdExtRmpkR2wyWlNjcFhISmNibHgwWEhSY2RGeDBMbU5zWVhOelRHbHpkQzV5WlcxdmRtVW9KMkZqZEdsMlpTY3BPMXh5WEc1Y2NseHVYSFJjZEZ4MGRHRmlVM2RwZEdOb1pYSXVjR0Z5Wlc1MFJXeGxiV1Z1ZEM1d1lYSmxiblJGYkdWdFpXNTBMbU5zWVhOelRHbHpkQzVoWkdRb0oyRmpkR2wyWlNjcE8xeHlYRzVjY2x4dVhIUmNkRngwYzNkcGRHTm9VR0ZuWlNod1lXZGxTV1FwTzF4eVhHNWNkRngwZlNrN1hISmNibHgwZlNrN1hISmNibHh5WEc1Y2RHWjFibU4wYVc5dUlITjNhWFJqYUZCaFoyVW9jR0ZuWlVsa0tTQjdYSEpjYmx4MFhIUmpiMjV6ZENCamRYSnlaVzUwVUdGblpTQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5NXdZV2RsTG1GamRHbDJaU2NwTzF4eVhHNWNkRngwWTI5dWMzUWdZM1Z5Y21WdWRGQmhaMlZJWldGa1pYSWdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtDY3VjR0ZuWlMxb1pXRmtaWEl1WVdOMGFYWmxKeWs3WEhKY2JseHlYRzVjZEZ4MFkzVnljbVZ1ZEZCaFoyVXVZMnhoYzNOTWFYTjBMbkpsYlc5MlpTZ25ZV04wYVhabEp5azdYSEpjYmx4MFhIUmpkWEp5Wlc1MFVHRm5aVWhsWVdSbGNpNWpiR0Z6YzB4cGMzUXVjbVZ0YjNabEtDZGhZM1JwZG1VbktUdGNjbHh1WEhKY2JseDBYSFJqYjI1emRDQnVaWGgwVUdGblpTQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb1lDNXdZV2RsVzJSaGRHRXRjR0ZuWlQxY0lpUjdjR0ZuWlVsa2ZWd2lYV0FwTzF4eVhHNWNkRngwWTI5dWMzUWdibVY0ZEZCaFoyVklaV0ZrWlhJZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0Z4eVhHNWNkRngwWEhSZ0xuQmhaMlV0YUdWaFpHVnlXMlJoZEdFdGFHVmhaR1Z5UFZ3aUpIdHdZV2RsU1dSOVhDSmRZRnh5WEc1Y2RGeDBLVHRjY2x4dVhIUmNkRzVsZUhSUVlXZGxMbU5zWVhOelRHbHpkQzVoWkdRb0oyRmpkR2wyWlNjcE8xeHlYRzVjZEZ4MGJtVjRkRkJoWjJWSVpXRmtaWEl1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25ZV04wYVhabEp5azdYSEpjYmx4MGZWeHlYRzU5S1R0Y2NseHVJaXdpWkc5amRXMWxiblF1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduUkU5TlEyOXVkR1Z1ZEV4dllXUmxaQ2NzSUdaMWJtTjBhVzl1SUNncElIdGNjbHh1WEhSamIyNXpkQ0JoYm1sdFlXeHpWWEpzSUQwZ0p5NHVMMnB6TDJGdWFXMWhiSE11YW5OdmJpYzdYSEpjYmx4MFkyOXVjM1FnWVc1cGJXRnNjMUJoWjJWeklEMGdaRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkRUo1U1dRb0oyRnVhVzFoYkhNdGNHRm5aWE1uS1R0Y2NseHVYSFJqYjI1emRDQmtiMmR6UW05NElEMGdaRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkRUo1U1dRb0oyUnZaM010WW05NEp5azdYSEpjYmx4eVhHNWNkR1oxYm1OMGFXOXVJR2RsZEVGdWFXMWhiSE5FWVhSaEtDa2dlMXh5WEc1Y2RGeDBjbVYwZFhKdUlHNWxkeUJRY205dGFYTmxLQ2h5WlhOdmJIWmxMQ0J5WldwbFkzUXBJRDArSUh0Y2NseHVYSFJjZEZ4MFptVjBZMmdvWVc1cGJXRnNjMVZ5YkNsY2NseHVYSFJjZEZ4MFhIUXVkR2hsYmlnb2NtVnpjQ2tnUFQ0Z2NtVnpjQzVxYzI5dUtDa3BYSEpjYmx4MFhIUmNkRngwTG5Sb1pXNG9LR1JoZEdFcElEMCtJSEpsYzI5c2RtVW9aR0YwWVNrcFhISmNibHgwWEhSY2RGeDBMbU5oZEdOb0tDaGxjbklwSUQwK0lISmxhbVZqZENobGNuSXBLVHRjY2x4dVhIUmNkSDBwTzF4eVhHNWNkSDFjY2x4dVhISmNibHgwWVhONWJtTWdablZ1WTNScGIyNGdaR2x6Y0d4aGVVRnVhVzFoYkhNb0tTQjdYSEpjYmx4MFhIUmpiMjV6ZENCa1lYUmhUR2x6ZENBOUlHRjNZV2wwSUdkbGRFRnVhVzFoYkhORVlYUmhLQ2s3WEhKY2JseDBYSFJqYjI1emRDQmhibWx0WVd4elFYSnlZWGtnUFNCa1lYUmhUR2x6ZEM1aGJtbHRZV3h6TzF4eVhHNWNjbHh1WEhSY2RHRnVhVzFoYkhOQmNuSmhlUzVtYjNKRllXTm9LQ2hoYm1sdFlXd3BJRDArSUh0Y2NseHVYSFJjZEZ4MFpHOW5jMEZ5Y21GNUlEMGdZVzVwYldGc0xtUnZaM003WEhKY2JseDBYSFJjZEdOaGRITkJjbkpoZVNBOUlHRnVhVzFoYkM1allYUnpPMXh5WEc1Y2NseHVYSFJjZEZ4MFpHOW5jMEZ5Y21GNUxtWnZja1ZoWTJnb0tHUnZaeWtnUFQ0Z2UxeHlYRzVjZEZ4MFhIUmNkR1J2WjBKdmVDQTlJR1J2WTNWdFpXNTBMbU55WldGMFpVVnNaVzFsYm5Rb0oyUnBkaWNwTzF4eVhHNWNkRngwWEhSY2RHUnZaMEp2ZUM1amJHRnpjMHhwYzNRdVlXUmtLQ2R3WVdkbFgxOWliM2duS1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwWTI5dWMzUWdaRzluV1dWaGNuTWdQU0JrYjJjdVltbHlkR2c3WEhKY2JseHlYRzVjZEZ4MFhIUmNkR052Ym5OMElHMXBiR2x6WldOelFtVjBkMlZsYmtSUFFtRnVaREU1TnpBZ1BTQkVZWFJsTG5CaGNuTmxLR1J2WjFsbFlYSnpLVHRjY2x4dVhIUmNkRngwWEhSamIyNXpkQ0J0YVd4cGMyVmpjMEpsZEhkbFpXNU9UMWRoYm1ReE9UY3dJRDBnUkdGMFpTNXViM2NvS1R0Y2NseHVYSFJjZEZ4MFhIUmpiMjV6ZENCaFoyVkpiazFwYkdselpXTnpJRDFjY2x4dVhIUmNkRngwWEhSY2RHMXBiR2x6WldOelFtVjBkMlZsYms1UFYyRnVaREU1TnpBZ0xTQnRhV3hwYzJWamMwSmxkSGRsWlc1RVQwSmhibVF4T1Rjd08xeHlYRzVjY2x4dVhIUmNkRngwWEhSamIyNXpkQ0J0YVd4cGMyVmpjeUE5SUdGblpVbHVUV2xzYVhObFkzTTdYSEpjYmx4MFhIUmNkRngwWTI5dWMzUWdjMlZqY3lBOUlERXdNREE3WEhKY2JseDBYSFJjZEZ4MFkyOXVjM1FnYldsdWN5QTlJSE5sWTNNZ0tpQTJNRHRjY2x4dVhIUmNkRngwWEhSamIyNXpkQ0JvYjNWeUlEMGdiV2x1Y3lBcUlEWXdPMXh5WEc1Y2RGeDBYSFJjZEdOdmJuTjBJR1JoZVNBOUlHaHZkWElnS2lBeU5EdGNjbHh1WEhSY2RGeDBYSFJqYjI1emRDQjVaV0Z5SUQwZ1pHRjVJQ29nTXpZMU8xeHlYRzVjY2x4dVhIUmNkRngwWEhSc1pYUWdlV1ZoY25NZ1BTQk5ZWFJvTG5KdmRXNWtLRzFwYkdselpXTnpJQzhnZVdWaGNpazdYSEpjYmx4eVhHNWNkRngwWEhSY2RHUnZaMEp2ZUM1cGJtNWxja2hVVFV3Z1BTQmdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhrYVhZZ1kyeGhjM005WENKd1lXZGxYMTlpYjNndGRHOXdYQ0krWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThhVzFuSUhOeVl6MWNJaTRrZTJSdlp5NXBiV0ZuWlgxY0lpQmhiSFE5WENJa2UyUnZaeTV1WVcxbGZTQWtlMXh5WEc1Y2RGeDBYSFJjZEZ4MFpHOW5Mbk53WldOcFpYTmNjbHh1WEhSY2RGeDBYSFI5WENKOUx6NWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzlrYVhZK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeGthWFlnWTJ4aGMzTTlYQ0p3WVdkbFgxOWliM2d0WW05MGRHOXRYQ0krWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThhRE1nWTJ4aGMzTTlYQ0p3WVdkbFgxOWliM2d0ZEdsMGJHVmNJajRrZTJSdlp5NXVZVzFsZlR3dmFETStYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOFpHbDJJR05zWVhOelBWd2ljR0ZuWlY5ZlltOTRMV052Ym5SbGJuUmNJajVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4WkdsMklHTnNZWE56UFZ3aVpYaHdZVzVrVFc5eVpVTnZiblJsYm5SY0lpQnBaRDFjSW5Ob2IzZE5iM0psTFNSN1hISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmtiMmN1YzNCbFkybGxjMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkSDBrZTJSdlp5NXVkVzFpWlhKOVhDSStYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4d0lHTnNZWE56UFZ3aWNHRm5aVjlmWW05NExYUmxlSFJjSWo1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNSN1pHOW5MbVJsYzJOOVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2Y0Q1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOEwyUnBkajVjY2x4dUlDQWdJRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhrYVhZZ1kyeGhjM005WENKbGVIQmhibVJOYjNKbFNHOXNaR1Z5WENJK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhpZFhSMGIyNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHVjRjR0Z1WkMxdGIzSmxYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmtZWFJoTFdocFpHVjBaWGgwUFZ3aUxpNHVVbVZoWkNCc1pYTnpYQ0pjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1JoZEdFdGMyaHZkM1JsZUhROVhDSXVMaTVTWldGa0lHMXZjbVZjSWx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWkdGMFlTMTBZWEpuWlhROVhDSnphRzkzVFc5eVpTMGtlMlJ2Wnk1emNHVmphV1Z6ZlNSN1hISmNibHgwWEhSY2RGeDBYSFJrYjJjdWJuVnRZbVZ5WEhKY2JseDBYSFJjZEZ4MGZWd2lYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiR0Z6Y3oxY0ltSjFkSFJ2YmlCemFHOTNUVzl5WlZ3aVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRDVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzR1TGxKbFlXUWdiVzl5WlZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThMMkoxZEhSdmJqNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThMMlJwZGo1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2WkdsMlBseHlYRzRnSUNBZ1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4ZFd3Z1kyeGhjM005WENKd1lXZGxYMTlpYjNndGFXTnZibk5jSWo1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGJHa2dZMnhoYzNNOVhDSndZV2RsWDE5aWIzZ3RhV052Ymx3aVBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YVNCamJHRnpjejFjSW1aaGN5Qm1ZUzEzWldsbmFIUmNJajQ4TDJsY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQanh6Y0dGdUlHTnNZWE56UFZ3aWNHRm5aVjlmWW05NExXbGpiMjR0TFhSbGVIUmNJajRrZTF4eVhHNWNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkR1J2Wnk1M1pXbG5hSFJjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MGZTQnJaend2YzNCaGJqNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThMMnhwUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4c2FTQmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMXBZMjl1WENJK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhwSUdOc1lYTnpQVndpWm1GeklHWmhMV0Z5Y205M2N5MWhiSFF0ZGx3aVBqd3ZhVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBK1BITndZVzRnWTJ4aGMzTTlYQ0p3WVdkbFgxOWliM2d0YVdOdmJpMHRkR1Y0ZEZ3aVBpUjdYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFpHOW5MbWhsYVdkb2RGeHlYRzVjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFI5WTIwOEwzTndZVzQrWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5c2FUNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThiR2tnWTJ4aGMzTTlYQ0p3WVdkbFgxOWliM2d0YVdOdmJsd2lQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGFTQmpiR0Z6Y3oxY0ltWmhjeUJtWVMxallXeGxibVJoY2kxamFHVmphMXdpUGp3dmFWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0ErUEhOd1lXNGdZMnhoYzNNOVhDSndZV2RsWDE5aWIzZ3RhV052YmkwdGRHVjRkRndpUGlSN2VXVmhjbk45SUhseUxqd3ZjM0JoYmo1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOEwyeHBQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhzYVNCamJHRnpjejFjSW5CaFoyVmZYMkp2ZUMxcFkyOXVYQ0krWEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwWEhSY2REeHBJR05zWVhOelBWd2labUZ6SUdaaExYQmhiR1YwZEdWY0lqNDhMMmxjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFBqeHpjR0Z1SUdOc1lYTnpQVndpY0dGblpWOWZZbTk0TFdsamIyNHRMWFJsZUhSY0lqNGtlMlJ2Wnk1amIyeHZjbHN3WFNBL0lHUnZaeTVqYjJ4dmNsc3dYU0E2SUNjdEozMDhMM053WVc0K1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOXNhVDVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YkdrZ1kyeGhjM005WENKd1lXZGxYMTlpYjNndGFXTnZibHdpUGx4eVhHNWNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUThhU0JqYkdGemN6MWNJbVpoY3lCbVlTMXdZV3hsZEhSbFhDSStQQzlwWEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RENDhjM0JoYmlCamJHRnpjejFjSW5CaFoyVmZYMkp2ZUMxcFkyOXVMUzEwWlhoMFhDSStKSHRrYjJjdVkyOXNiM0piTVYwZ1B5QmtiMmN1WTI5c2IzSmJNVjBnT2lBbkxTZDlQQzl6Y0dGdVBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEd3ZiR2srWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEd4cElHTnNZWE56UFZ3aWNHRm5aVjlmWW05NExXbGpiMjVjSWo1Y2NseHVYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBQR2tnWTJ4aGMzTTlYQ0ptWVhNZ1ptRXRjR0ZzWlhSMFpWd2lQand2YVZ4eVhHNWNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUStQSE53WVc0Z1kyeGhjM005WENKd1lXZGxYMTlpYjNndGFXTnZiaTB0ZEdWNGRGd2lQaVI3Wkc5bkxtTnZiRzl5V3pKZElEOGdaRzluTG1OdmJHOXlXekpkSURvZ0p5MG5mVHd2YzNCaGJqNWNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUmNkRHd2YkdrK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHeHBJR05zWVhOelBWd2ljR0ZuWlY5ZlltOTRMV2xqYjI1Y0lqNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdrZ1kyeGhjM005WENKbVlYTWdabUV0Y0dGM1hDSStQQzlwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lENDhjM0JoYmlCamJHRnpjejFjSW5CaFoyVmZYMkp2ZUMxcFkyOXVMUzEwWlhoMFhDSStKSHRjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmtiMmN1WTI5aGRGeHlYRzVjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFI5UEM5emNHRnVQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2YkdrK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHeHBJR05zWVhOelBWd2ljR0ZuWlY5ZlltOTRMV2xqYjI1Y0lqNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdrZ1kyeGhjM005WENKbVlYTWdabUV0ZG1WdWRYTXRiV0Z5YzF3aVBqd3ZhVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBK1BITndZVzRnWTJ4aGMzTTlYQ0p3WVdkbFgxOWliM2d0YVdOdmJpMHRkR1Y0ZEZ3aVBpUjdYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFpHOW5MbWRsYm1SbGNseHlYRzVjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFI5UEM5emNHRnVQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2YkdrK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4TDNWc1BseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThMMlJwZGo1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHQTdYSEpjYmx4eVhHNWNkRngwWEhSY2RHUnZaM05DYjNndVlYQndaVzVrUTJocGJHUW9aRzluUW05NEtUdGNjbHh1WEhSY2RGeDBmU2s3WEhKY2JseDBYSFI5S1R0Y2NseHVYSEpjYmx4MFhIUmpiMjV6ZENCbGVIQmhibVJ6VFc5eVpTQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNKQmJHd29KMXRsZUhCaGJtUXRiVzl5WlYwbktUdGNjbHh1WEhKY2JseDBYSFJtZFc1amRHbHZiaUJsZUhCaGJtUW9LU0I3WEhKY2JseDBYSFJjZEdOdmJuTjBJSE5vYjNkRGIyNTBaVzUwSUQwZ1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvZEdocGN5NWtZWFJoYzJWMExuUmhjbWRsZENrN1hISmNibHgwWEhSY2RHbG1JQ2h6YUc5M1EyOXVkR1Z1ZEM1amJHRnpjMHhwYzNRdVkyOXVkR0ZwYm5Nb0oyRmpkR2wyWlNjcEtTQjdYSEpjYmx4MFhIUmNkRngwZEdocGN5NXBibTVsY2toVVRVd2dQU0IwYUdsekxtUmhkR0Z6WlhRdWMyaHZkM1JsZUhRN1hISmNibHgwWEhSY2RIMGdaV3h6WlNCN1hISmNibHgwWEhSY2RGeDBkR2hwY3k1cGJtNWxja2hVVFV3Z1BTQjBhR2x6TG1SaGRHRnpaWFF1YUdsa1pYUmxlSFE3WEhKY2JseDBYSFJjZEgxY2NseHVYSEpjYmx4MFhIUmNkSE5vYjNkRGIyNTBaVzUwTG1Oc1lYTnpUR2x6ZEM1MGIyZG5iR1VvSjJGamRHbDJaU2NwTzF4eVhHNWNkRngwWEhScFppQW9jMmh2ZDBOdmJuUmxiblF1WTJ4aGMzTk1hWE4wTG1OdmJuUmhhVzV6S0NkaFkzUnBkbVVuS1NrZ2UxeHlYRzVjZEZ4MFhIUmNkSE5vYjNkRGIyNTBaVzUwTG5OMGVXeGxMbTFoZUVobGFXZG9kQ0E5SUhOb2IzZERiMjUwWlc1MExuTmpjbTlzYkVobGFXZG9kQ0FySUNkd2VDYzdYSEpjYmx4MFhIUmNkSDBnWld4elpTQjdYSEpjYmx4MFhIUmNkRngwYzJodmQwTnZiblJsYm5RdWMzUjViR1V1YldGNFNHVnBaMmgwSUQwZ01qQWdLeUFuY0hnbk8xeHlYRzVjZEZ4MFhIUjlYSEpjYmx4MFhIUjlYSEpjYmx4eVhHNWNkRngwWlhod1lXNWtjMDF2Y21VdVptOXlSV0ZqYUNnb1luUnVLU0E5UGlCN1hISmNibHgwWEhSY2RHSjBiaTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RqYkdsamF5Y3NJR1Y0Y0dGdVpDazdYSEpjYmx4MFhIUjlLVHRjY2x4dVhIUjlYSEpjYmx4eVhHNWNkR2xtSUNoaGJtbHRZV3h6VUdGblpYTXBJSHRjY2x4dVhIUmNkQ2htZFc1amRHbHZiaUFvS1NCN1hISmNibHgwWEhSY2RHUnBjM0JzWVhsQmJtbHRZV3h6S0NrN1hISmNibHgwWEhSOUtTZ3BPMXh5WEc1Y2RIMWNjbHh1ZlNrN1hISmNiaUlzSW1SdlkzVnRaVzUwTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjBSUFRVTnZiblJsYm5STWIyRmtaV1FuTENCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmx4MEx5OGdabTl5YlNCMllXeHBaR0YwYVc5dVhISmNibHgwWTI5dWMzUWdabTl5YlNBOUlHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0NkamIyNTBZV04wTFdadmNtMG5LVHRjY2x4dVhIUmpiMjV6ZENCdVlXMWxJRDBnWkc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEVKNVNXUW9KMjVoYldVbktUdGNjbHh1WEhSamIyNXpkQ0JsYldGcGJDQTlJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJDZVVsa0tDZGxiV0ZwYkNjcE8xeHlYRzVjZEdOdmJuTjBJRzFsYzNOaFoyVWdQU0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDZ25iV1Z6YzJGblpTY3BPMXh5WEc1Y2RHTnZibk4wSUdadmNtMUNkRzRnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2duWm05eWJTMWlkRzRuS1R0Y2NseHVYSEpjYmx4MGFXWWdLR1p2Y20wcElIdGNjbHh1WEhSY2RGdGNjbHh1WEhSY2RGeDBKMk5zYVdOckp5eGNjbHh1WEhSY2RGeDBKMjl1ZEc5MVkyaHpkR0Z5ZENjc1hISmNibHgwWEhSY2RDZHRiM1Z6Wlc5MlpYSW5MRnh5WEc1Y2RGeDBYSFFuYTJWNVpHOTNiaWNzWEhKY2JseDBYSFJjZENkclpYbHdjbVZ6Y3ljc1hISmNibHgwWEhSY2RDZDBiM1ZqYUhOMFlYSjBKeXhjY2x4dVhIUmNkRngwSjNSdmRXTm9iVzkyWlNjc1hISmNibHgwWEhSZExtWnZja1ZoWTJnb1hISmNibHgwWEhSY2RDaGxkbVZ1ZENrZ1BUNWNjbHh1WEhSY2RGeDBYSFJrYjJOMWJXVnVkQzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLR1YyWlc1MExDQW9LU0E5UGlCN1hISmNibHgwWEhSY2RGeDBYSFJwWmlBb1kyaGxZMnRKYm5CMWRITW9LU0E5UFQwZ1ptRnNjMlVwSUh0Y2NseHVYSFJjZEZ4MFhIUmNkRngwWm05eWJVSjBiaTVrYVhOaFlteGxaQ0E5SUhSeWRXVTdYSEpjYmx4MFhIUmNkRngwWEhSOUlHVnNjMlVnZTF4eVhHNWNkRngwWEhSY2RGeDBYSFJtYjNKdFFuUnVMbVJwYzJGaWJHVmtJRDBnWm1Gc2MyVTdYSEpjYmx4MFhIUmNkRngwWEhSOVhISmNibHgwWEhSY2RGeDBmU2tzWEhKY2JseDBYSFJjZEdaaGJITmxYSEpjYmx4MFhIUXBPMXh5WEc1Y2NseHVYSFJjZEdaMWJtTjBhVzl1SUdOb1pXTnJTVzV3ZFhSektDa2dlMXh5WEc1Y2RGeDBYSFJqYjI1emRDQnVZVzFsVm1Gc2RXVWdQU0J1WVcxbExuWmhiSFZsTG5SeWFXMG9LVHRjY2x4dVhIUmNkRngwWTI5dWMzUWdaVzFoYVd4V1lXeDFaU0E5SUdWdFlXbHNMblpoYkhWbExuUnlhVzBvS1R0Y2NseHVYSFJjZEZ4MFkyOXVjM1FnYldWemMyRm5aVlpoYkhWbElEMGdiV1Z6YzJGblpTNTJZV3gxWlM1MGNtbHRLQ2s3WEhKY2JseHlYRzVjZEZ4MFhIUnBaaUFvYm1GdFpWWmhiSFZsSUQwOVBTQW5KeWtnZTF4eVhHNWNkRngwWEhSY2RITmxkRVZ5Y205eVJtOXlLRzVoYldVc0lDZFFiR1ZoYzJVZ1pXNTBaWElnZVc5MWNpQm1kV3hzSUc1aGJXVW5LVHRjY2x4dVhIUmNkRngwZlNCbGJITmxJSHRjY2x4dVhIUmNkRngwWEhSelpYUlRkV05qWlhOelJtOXlLRzVoYldVcE8xeHlYRzVjZEZ4MFhIUjlYSEpjYmx4eVhHNWNkRngwWEhScFppQW9aVzFoYVd4V1lXeDFaU0E5UFQwZ0p5Y3BJSHRjY2x4dVhIUmNkRngwWEhSelpYUkZjbkp2Y2tadmNpaGxiV0ZwYkN3Z0oxQnNaV0Z6WlNCbGJuUmxjaUI1YjNWeUlHVnRZV2xzSUdGa1pISmxjM01uS1R0Y2NseHVYSFJjZEZ4MGZTQmxiSE5sSUdsbUlDZ2haVzFoYVd4SmMxWmhiR2xrS0dWdFlXbHNWbUZzZFdVcEtTQjdYSEpjYmx4MFhIUmNkRngwYzJWMFJYSnliM0pHYjNJb1pXMWhhV3dzSUNkRmJXRnBiQ0JwY3lCdWIzUWdkbUZzYVdRbktUdGNjbHh1WEhSY2RGeDBmU0JsYkhObElIdGNjbHh1WEhSY2RGeDBYSFJ6WlhSVGRXTmpaWE56Um05eUtHVnRZV2xzS1R0Y2NseHVYSFJjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkRngwYVdZZ0tHMWxjM05oWjJWV1lXeDFaU0E5UFQwZ0p5Y3BJSHRjY2x4dVhIUmNkRngwWEhSelpYUkZjbkp2Y2tadmNpaHRaWE56WVdkbExDQW5VR3hsWVhObElHVnVkR1Z5SUhsdmRYSWdiV1Z6YzJGblpTY3BPMXh5WEc1Y2RGeDBYSFI5SUdWc2MyVWdlMXh5WEc1Y2RGeDBYSFJjZEhObGRGTjFZMk5sYzNOR2IzSW9iV1Z6YzJGblpTazdYSEpjYmx4MFhIUmNkSDFjY2x4dVhISmNibHgwWEhSY2RHbG1JQ2hjY2x4dVhIUmNkRngwWEhSdVlXMWxWbUZzZFdVZ1BUMDlJQ2NuSUh4OFhISmNibHgwWEhSY2RGeDBaVzFoYVd4V1lXeDFaU0E5UFQwZ0p5Y2dmSHhjY2x4dVhIUmNkRngwWEhSdFpYTnpZV2RsVm1Gc2RXVWdQVDA5SUNjbklIeDhYSEpjYmx4MFhIUmNkRngwSVdWdFlXbHNTWE5XWVd4cFpDaGxiV0ZwYkZaaGJIVmxLVnh5WEc1Y2RGeDBYSFFwSUh0Y2NseHVYSFJjZEZ4MFhIUnlaWFIxY200Z1ptRnNjMlU3WEhKY2JseDBYSFJjZEgwZ1pXeHpaU0I3WEhKY2JseDBYSFJjZEZ4MGNtVjBkWEp1SUhSeWRXVTdYSEpjYmx4MFhIUmNkSDFjY2x4dVhIUmNkSDFjY2x4dVhISmNibHgwWEhSbWRXNWpkR2x2YmlCelpYUkZjbkp2Y2tadmNpaHBibkIxZEN3Z2JXVnpjMkZuWlNrZ2UxeHlYRzVjZEZ4MFhIUmpiMjV6ZENCbWIzSnRJRDBnYVc1d2RYUXVjR0Z5Wlc1MFJXeGxiV1Z1ZER0Y2NseHVYSFJjZEZ4MFkyOXVjM1FnYzIxaGJHd2dQU0JtYjNKdExuRjFaWEo1VTJWc1pXTjBiM0lvSjNOdFlXeHNKeWs3WEhKY2JseHlYRzVjZEZ4MFhIUnpiV0ZzYkM1cGJtNWxjbFJsZUhRZ1BTQnRaWE56WVdkbE8xeHlYRzVjZEZ4MFhIUm1iM0p0TG1Oc1lYTnpUbUZ0WlNBOUlDZG1iM0p0WDE5bmNtOTFjQ0JsY25KdmNpYzdYSEpjYmx4MFhIUjlYSEpjYmx4eVhHNWNkRngwWm5WdVkzUnBiMjRnYzJWMFUzVmpZMlZ6YzBadmNpaHBibkIxZENrZ2UxeHlYRzVjZEZ4MFhIUmpiMjV6ZENCbWIzSnRJRDBnYVc1d2RYUXVjR0Z5Wlc1MFJXeGxiV1Z1ZER0Y2NseHVYSFJjZEZ4MFptOXliUzVqYkdGemMwNWhiV1VnUFNBblptOXliVjlmWjNKdmRYQWdjM1ZqWTJWemN5YzdYSEpjYmx4MFhIUjlYSEpjYmx4eVhHNWNkRngwWm5WdVkzUnBiMjRnWlcxaGFXeEpjMVpoYkdsa0tHVnRZV2xzS1NCN1hISmNibHgwWEhSY2RHTnZibk4wSUhKbElEMGdMMTRvS0Z0ZVBENG9LVnhjVzF4Y1hWeGNYRnd1TERzNlhGeHpRRndpWFNzb1hGd3VXMTQ4UGlncFhGeGJYRnhkWEZ4Y1hDNHNPenBjWEhOQVhDSmRLeWtxS1h3b1hDSXVLMXdpS1NsQUtDaGNYRnRiTUMwNVhYc3hMRE45WEZ3dVd6QXRPVjE3TVN3emZWeGNMbHN3TFRsZGV6RXNNMzFjWEM1Yk1DMDVYWHN4TEROOVhTbDhLQ2hiWVMxNlFTMWFYRnd0TUMwNVhTdGNYQzRwSzF0aExYcEJMVnBkZXpJc2ZTa3BKQzh1ZEdWemRDaGNjbHh1WEhSY2RGeDBYSFJsYldGcGJGeHlYRzVjZEZ4MFhIUXBPMXh5WEc1Y2NseHVYSFJjZEZ4MGNtVjBkWEp1SUhKbE8xeHlYRzVjZEZ4MGZWeHlYRzVjZEgxY2NseHVmU2s3WEhKY2JpSXNJbVJ2WTNWdFpXNTBMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMFJQVFVOdmJuUmxiblJNYjJGa1pXUW5MQ0JtZFc1amRHbHZiaUFvS1NCN1hHNWNkSGRwYm1SdmR5NWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZHNiMkZrSnl3Z0tHVXBJRDArSUh0Y2JseDBYSFJqYjI1emRDQndjbVZzYjJGa0lEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkxuQnlaV3h2WVdRbktUdGNibHh1WEhSY2RIQnlaV3h2WVdRdVkyeGhjM05NYVhOMExtRmtaQ2duY0hKbGJHOWhaQzFtYVc1cGMyaGxaQ2NwTzF4dVhIUjlLVHRjYmx4dVhIUmpiMjV6ZENCaWRHNVRZM0p2Ykd4VWIxUnZjQ0E5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2RpZEc1VFkzSnZiR3hVYjFSdmNDY3BPMXh1WEhSaWRHNVRZM0p2Ykd4VWIxUnZjQzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RqYkdsamF5Y3NJQ2hsS1NBOVBpQjdYRzVjZEZ4MGQybHVaRzkzTG5OamNtOXNiRlJ2S0h0Y2JseDBYSFJjZEhSdmNEb2dNQ3hjYmx4MFhIUmNkR3hsWm5RNklEQXNYRzVjZEZ4MFhIUmlaV2hoZG1sdmNqb2dKM050YjI5MGFDY3NYRzVjZEZ4MGZTazdYRzVjZEgwcE8xeHVmU2s3WEc0aUxDSmtiMk4xYldWdWRDNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZEVUMDFEYjI1MFpXNTBURzloWkdWa0p5d2dablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNkR052Ym5OMElHNWhka052Ym5SaGFXNWxjaUE5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2R1WVhZdFkyOXVkR0ZwYm1WeUp5azdYSEpjYmx4MFkyOXVjM1FnYldWdWRVSjBiaUE5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2R0Wlc1MUxXSjBiaWNwTzF4eVhHNWNkR052Ym5OMElHNWhka3hwYzNRZ1BTQmtiMk4xYldWdWRDNW5aWFJGYkdWdFpXNTBRbmxKWkNnbmJtRjJMV3hwYzNRbktUdGNjbHh1WEhKY2JseDBkMmx1Wkc5M0xtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0ozTmpjbTlzYkNjc0lDaGxLU0E5UGlCN1hISmNibHgwWEhScFppQW9aRzlqZFcxbGJuUXVaRzlqZFcxbGJuUkZiR1Z0Wlc1MExuTmpjbTlzYkZSdmNDQStJREFwSUh0Y2NseHVYSFJjZEZ4MGJtRjJRMjl1ZEdGcGJtVnlMbU5zWVhOelRHbHpkQzVoWkdRb0ozTjBhV05yZVNjcE8xeHlYRzVjZEZ4MFhIUmlkRzVUWTNKdmJHeFViMVJ2Y0M1emRIbHNaUzV2Y0dGamFYUjVJRDBnTVR0Y2NseHVYSFJjZEgwZ1pXeHpaU0I3WEhKY2JseDBYSFJjZEc1aGRrTnZiblJoYVc1bGNpNWpiR0Z6YzB4cGMzUXVjbVZ0YjNabEtDZHpkR2xqYTNrbktUdGNjbHh1WEhSY2RGeDBZblJ1VTJOeWIyeHNWRzlVYjNBdWMzUjViR1V1YjNCaFkybDBlU0E5SURBN1hISmNibHgwWEhSOVhISmNibHgwZlNrN1hISmNibHh5WEc1Y2RHMWxiblZDZEc0dVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblkyeHBZMnNuTENBb1pTa2dQVDRnZTF4eVhHNWNkRngwYldWdWRVSjBiaTVqYkdGemMweHBjM1F1ZEc5bloyeGxLQ2RqYkdsamEyVmtKeWs3WEhKY2JseDBYSFJ1WVhaRGIyNTBZV2x1WlhJdVkyeGhjM05NYVhOMExuUnZaMmRzWlNnbmIzWmxjbXhoZVNjcE8xeHlYRzVjZEZ4MGJtRjJUR2x6ZEM1amJHRnpjMHhwYzNRdWRHOW5aMnhsS0NkemFHOTNKeWs3WEhKY2JseDBmU2s3WEhKY2JuMHBPMXh5WEc0aUxDSmtiMk4xYldWdWRDNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZEVUMDFEYjI1MFpXNTBURzloWkdWa0p5d2dablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNkQzh2SUdOaGNtOTFjMlZzWEhKY2JseDBZMjl1YzNRZ1kyRnliM1Z6Wld3Z1BTQmtiMk4xYldWdWRDNW5aWFJGYkdWdFpXNTBRbmxKWkNnblkyRnliM1Z6Wld3bktUdGNjbHh1WEhSamIyNXpkQ0J3Y21WMlFuUnVJRDBnWkc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEVKNVNXUW9KM0J5WlhZbktUdGNjbHh1WEhSamIyNXpkQ0J1WlhoMFFuUnVJRDBnWkc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEVKNVNXUW9KMjVsZUhRbktUdGNjbHh1WEhSamIyNXpkQ0JqWVhKdmRYTmxiRlZ5YkNBOUlDY3VMMnB6TDJOaGNtOTFjMlZzTG1wemIyNG5PMXh5WEc1Y2NseHVYSFJzWlhRZ1ptbHljM1JUYkdsa1pUdGNjbHh1WEhSc1pYUWdiR0Z6ZEZOc2FXUmxPMXh5WEc1Y2NseHVYSFJtZFc1amRHbHZiaUJuWlhSVGJHbGtaWE5FWVhSaEtDa2dlMXh5WEc1Y2RGeDBjbVYwZFhKdUlHNWxkeUJRY205dGFYTmxLQ2h5WlhOdmJIWmxMQ0J5WldwbFkzUXBJRDArSUh0Y2NseHVYSFJjZEZ4MFptVjBZMmdvWTJGeWIzVnpaV3hWY213cFhISmNibHgwWEhSY2RGeDBMblJvWlc0b0tISmxjM0FwSUQwK0lISmxjM0F1YW5OdmJpZ3BLVnh5WEc1Y2RGeDBYSFJjZEM1MGFHVnVLQ2hrWVhSaEtTQTlQaUJ5WlhOdmJIWmxLR1JoZEdFcEtWeHlYRzVjZEZ4MFhIUmNkQzVqWVhSamFDZ29aWEp5S1NBOVBpQnlaV3BsWTNRb1pYSnlLU2s3WEhKY2JseDBYSFI5S1R0Y2NseHVYSFI5WEhKY2JseHlYRzVjZEdGemVXNWpJR1oxYm1OMGFXOXVJR1JwYzNCc1lYbERZWEp2ZFhObGJDZ3BJSHRjY2x4dVhIUmNkR052Ym5OMElHUmhkR0ZNYVhOMElEMGdZWGRoYVhRZ1oyVjBVMnhwWkdWelJHRjBZU2dwTzF4eVhHNWNkRngwWTI5dWMzUWdjMnhwWkdWelFYSnlZWGtnUFNCa1lYUmhUR2x6ZEM1emJHbGtaWE03WEhKY2JseHlYRzVjZEZ4MGMyeHBaR1Z6UVhKeVlYa3VabTl5UldGamFDZ29jMnhwWkdVc0lITnNhV1JsVG5WdFltVnlLU0E5UGlCN1hISmNibHgwWEhSY2RHNWxkMU5zYVdSbElEMGdaRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENnblpHbDJKeWs3WEhKY2JseDBYSFJjZEc1bGQxTnNhV1JsTG1Oc1lYTnpUR2x6ZEM1aFpHUW9KMk5oY205MWMyVnNYMTl6Ykdsa1pTY3BPMXh5WEc1Y2NseHVYSFJjZEZ4MGJtVjNVMnhwWkdVdWFXNXVaWEpJVkUxTUlEMGdZRnh5WEc1Y2RGeDBYSFJjZEZ4MFhIUThaR2wySUdOc1lYTnpQVndpWTJGeWIzVnpaV3hmWDJsdFlXZGxMV052Ym5SaGFXNWxjbHdpUGx4eVhHNWNkRngwWEhSY2RGeDBYSFJjZER4cGJXY2djM0pqUFZ3aUpIdHpiR2xrWlM1cGJXRm5aWDFjSWlCaGJIUTlYQ0p6Ykdsa1pTMXBiV2RjSWlBdlBseHlYRzVjZEZ4MFhIUmNkRngwWEhROEwyUnBkajVjY2x4dVhIUmNkRngwWEhSY2RGeDBQR1JwZGlCamJHRnpjejFjSW1OaGNtOTFjMlZzWDE5amIyNTBaVzUwWENJK1hISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFBHZ3hJR05zWVhOelBWd2lZMkZ5YjNWelpXeGZYM1JwZEd4bFhDSStKSHR6Ykdsa1pTNTBhWFJzWlgwOEwyZ3hQbHh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRHh3SUdOc1lYTnpQVndpWTJGeWIzVnpaV3hmWDJSbGMyTmNJajRrZTNOc2FXUmxMbU52Ym5SbGJuUjlQQzl3UGx4eVhHNWNkRngwWEhSY2RGeDBYSFJjZER4aWRYUjBiMjRnWTJ4aGMzTTlYQ0pvWldGa1pYSmZYMjVoZGkxa2IyNWhkR1V0WW5SdUlHSjFkSFJ2Ymx3aVBseHlYRzVjZEZ4MFhIUmNkRngwWEhSY2RGeDBSSFZuYldVZ2VtRWdibVhGb1hSdlhISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFBDOWlkWFIwYjI0K1hISmNibHgwWEhSY2RGeDBYSFJjZER3dlpHbDJQbHh5WEc1Y2RGeDBYSFJnTzF4eVhHNWNjbHh1WEhSY2RGeDBZMkZ5YjNWelpXd3VZWEJ3Wlc1a1EyaHBiR1FvYm1WM1UyeHBaR1VwTzF4eVhHNWNjbHh1WEhSY2RGeDBhV1lnS0hOc2FXUmxUblZ0WW1WeUlEMDlQU0F3S1NCN1hISmNibHgwWEhSY2RGeDBabWx5YzNSVGJHbGtaU0E5SUc1bGQxTnNhV1JsTzF4eVhHNWNkRngwWEhSY2RHNWxkMU5zYVdSbExtTnNZWE56VEdsemRDNWhaR1FvSjJGamRHbDJaU2NwTzF4eVhHNWNkRngwWEhSOUlHVnNjMlVnYVdZZ0tITnNhV1JsVG5WdFltVnlJQ3NnTVNBOVBUMGdaR0YwWVV4cGMzUXVjMnhwWkdWekxteGxibWQwYUNrZ2UxeHlYRzVjZEZ4MFhIUmNkR3hoYzNSVGJHbGtaU0E5SUc1bGQxTnNhV1JsTzF4eVhHNWNkRngwWEhSOVhISmNibHgwWEhSOUtUdGNjbHh1WEhKY2JseDBYSFJ1WlhoMFUyeHBaR1VvS1R0Y2NseHVYSFJjZEhCeVpYWnBiM1Z6VTJ4cFpHVW9LVHRjY2x4dVhIUjlYSEpjYmx4eVhHNWNkR1oxYm1OMGFXOXVJRzVsZUhSVGJHbGtaU2dwSUh0Y2NseHVYSFJjZEdOdmJuTjBJRzVsZUhSQ2RHNGdQU0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDZ25ibVY0ZENjcE8xeHlYRzVjY2x4dVhIUmNkRzVsZUhSQ2RHNHVZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25ZMnhwWTJzbkxDQW9aU2tnUFQ0Z2UxeHlYRzVjZEZ4MFhIUmpiMjV6ZENCaFkzUnBkbVZUYkdsa1pTQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5NWpZWEp2ZFhObGJGOWZjMnhwWkdVdVlXTjBhWFpsSnlrN1hISmNibHh5WEc1Y2RGeDBYSFJzWlhRZ2JtVjRkRk5wWW14cGJtY2dQU0JoWTNScGRtVlRiR2xrWlM1dVpYaDBSV3hsYldWdWRGTnBZbXhwYm1jN1hISmNibHh5WEc1Y2RGeDBYSFJwWmlBb2JtVjRkRk5wWW14cGJtY2dQVDBnYm5Wc2JDa2dlMXh5WEc1Y2RGeDBYSFJjZEc1bGVIUlRhV0pzYVc1bklEMGdZV04wYVhabFUyeHBaR1U3WEhKY2JseDBYSFJjZEgxY2NseHVYSEpjYmx4MFhIUmNkR2xtSUNodVpYaDBVMmxpYkdsdVp5NWpiR0Z6YzB4cGMzUXVZMjl1ZEdGcGJuTW9KMk5oY205MWMyVnNYMTl6Ykdsa1pTY3BLU0I3WEhKY2JseDBYSFJjZEZ4MFlXTjBhWFpsVTJ4cFpHVXVZMnhoYzNOTWFYTjBMbkpsYlc5MlpTZ25ZV04wYVhabEp5azdYSEpjYmx4MFhIUmNkRngwYm1WNGRGTnBZbXhwYm1jdVkyeGhjM05NYVhOMExtRmtaQ2duWVdOMGFYWmxKeWs3WEhKY2JseDBYSFJjZEgxY2NseHVYSFJjZEgwcE8xeHlYRzVjZEgxY2NseHVYSEpjYmx4MFpuVnVZM1JwYjI0Z2NISmxkbWx2ZFhOVGJHbGtaU2dwSUh0Y2NseHVYSFJjZEdOdmJuTjBJSEJ5WlhaQ2RHNGdQU0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDZ25jSEpsZGljcE8xeHlYRzVjY2x4dVhIUmNkSEJ5WlhaQ2RHNHVZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25ZMnhwWTJzbkxDQW9aU2tnUFQ0Z2UxeHlYRzVjZEZ4MFhIUmpiMjV6ZENCaFkzUnBkbVZUYkdsa1pTQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5NWpZWEp2ZFhObGJGOWZjMnhwWkdVdVlXTjBhWFpsSnlrN1hISmNibHh5WEc1Y2RGeDBYSFJzWlhRZ2JtVjRkRk5wWW14cGJtY2dQU0JoWTNScGRtVlRiR2xrWlM1d2NtVjJhVzkxYzBWc1pXMWxiblJUYVdKc2FXNW5PMXh5WEc1Y2NseHVYSFJjZEZ4MGFXWWdLRzVsZUhSVGFXSnNhVzVuSUQwOUlHNTFiR3dwSUh0Y2NseHVYSFJjZEZ4MFhIUnVaWGgwVTJsaWJHbHVaeUE5SUdGamRHbDJaVk5zYVdSbE8xeHlYRzVjZEZ4MFhIUjlYSEpjYmx4eVhHNWNkRngwWEhScFppQW9ibVY0ZEZOcFlteHBibWN1WTJ4aGMzTk1hWE4wTG1OdmJuUmhhVzV6S0NkallYSnZkWE5sYkY5ZmMyeHBaR1VuS1NrZ2UxeHlYRzVjZEZ4MFhIUmNkR0ZqZEdsMlpWTnNhV1JsTG1Oc1lYTnpUR2x6ZEM1eVpXMXZkbVVvSjJGamRHbDJaU2NwTzF4eVhHNWNkRngwWEhSY2RHNWxlSFJUYVdKc2FXNW5MbU5zWVhOelRHbHpkQzVoWkdRb0oyRmpkR2wyWlNjcE8xeHlYRzVjZEZ4MFhIUjlYSEpjYmx4MFhIUjlLVHRjY2x4dVhIUjlYSEpjYmx4eVhHNWNkR2xtSUNoallYSnZkWE5sYkNBaFBUMGdiblZzYkNrZ2UxeHlYRzVjZEZ4MEtHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhIUmNkRngwWkdsemNHeGhlVU5oY205MWMyVnNLQ2s3WEhKY2JseDBYSFI5S1NncE8xeHlYRzVjZEgxY2NseHVmU2s3WEhKY2JpSXNJbmRwYm1SdmR5NWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZEVUMDFEYjI1MFpXNTBURzloWkdWa0p5d2dablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNkQzh2SUhSaFluTmNjbHh1WEhSamIyNXpkQ0IwWVdKTWFYTjBRblJ1SUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZja0ZzYkNnbkxuUmhZbU5qYjNKa2FXOXVYMTlzYVhOMExXSjBiaWNwTzF4eVhHNWNkR052Ym5OMElIUmhZbk1nUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlRV3hzS0NjdWRHRmlZMk52Y21ScGIyNWZYMk52Ym5SaGFXNWxjaWNwTzF4eVhHNWNkR052Ym5OMElIUmhZbU5qYjNKa2FXOXVUR2x6ZENBOUlHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0NkMFlXSmpZMjl5WkdsdmJpMXNhWE4wSnlrN1hISmNibHgwWTI5dWMzUWdkR0ZpYzBOdmJuUmxiblFnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlRV3hzS0NjdWRHRmlZMk52Y21ScGIyNWZYM1JoWWkxcGJtNWxjaWNwTzF4eVhHNWNkR052Ym5OMElIUmhZbU5qYjNKa2FXOXVJRDBnWkc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEVKNVNXUW9KM1JoWW1OamIzSmthVzl1SnlrN1hISmNibHh5WEc1Y2RHWjFibU4wYVc5dUlHRmpkR2wyWVhSbFZHRmljeWdwSUh0Y2NseHVYSFJjZEhSaFlreHBjM1JDZEc0dVptOXlSV0ZqYUNnb2RHRmlLU0E5UGlCN1hISmNibHgwWEhSY2RIUmhZaTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RqYkdsamF5Y3NJQ2hsS1NBOVBpQjdYSEpjYmx4MFhIUmNkRngwWTI5dWMzUWdkR0ZpVG1GMklEMGdkR0ZpTG5CaGNtVnVkRVZzWlcxbGJuUTdYSEpjYmx4MFhIUmNkRngwWTI5dWMzUWdkR0ZpYzBOdmJuUmhhVzVsY2lBOUlIUmhZazVoZGk1d1lYSmxiblJGYkdWdFpXNTBMbkJoY21WdWRFVnNaVzFsYm5RN1hISmNibHgwWEhSY2RGeDBZMjl1YzNRZ2RHRmlUblZ0WW1WeUlEMGdkR0ZpTG1SaGRHRnpaWFF1Wm05eVZHRmlPMXh5WEc1Y2RGeDBYSFJjZEdOdmJuTjBJSFJoWWxSdlFXTjBhWFpoZEdVZ1BTQjBZV0p6UTI5dWRHRnBibVZ5TG5GMVpYSjVVMlZzWldOMGIzSW9YSEpjYmx4MFhIUmNkRngwWEhSZ0xuUmhZbU5qYjNKa2FXOXVYMTkwWVdKYlpHRjBZUzEwWVdJOVhDSWtlM1JoWWs1MWJXSmxjbjFjSWwxZ1hISmNibHgwWEhSY2RGeDBLVHRjY2x4dVhISmNibHgwWEhSY2RGeDBkR0ZpVG1GMkxuRjFaWEo1VTJWc1pXTjBiM0pCYkd3b0p5NTBZV0pqWTI5eVpHbHZibDlmYkdsemRDMWlkRzRuS1M1bWIzSkZZV05vS0NoaWRHNHBJRDArSUh0Y2NseHVYSFJjZEZ4MFhIUmNkR0owYmk1amJHRnpjMHhwYzNRdWNtVnRiM1psS0NkamRYSnlaVzUwSnlrN1hISmNibHgwWEhSY2RGeDBmU2s3WEhKY2JseHlYRzVjZEZ4MFhIUmNkSFJoWW5ORGIyNTBZV2x1WlhJdWNYVmxjbmxUWld4bFkzUnZja0ZzYkNnbkxuUmhZbU5qYjNKa2FXOXVYMTkwWVdJbktTNW1iM0pGWVdOb0tDaDBZV0lwSUQwK0lIdGNjbHh1WEhSY2RGeDBYSFJjZEhSaFlpNWpiR0Z6YzB4cGMzUXVjbVZ0YjNabEtDZGpkWEp5Wlc1MEp5azdYSEpjYmx4MFhIUmNkRngwZlNrN1hISmNibHh5WEc1Y2RGeDBYSFJjZEhSaFlpNWpiR0Z6YzB4cGMzUXVZV1JrS0NkamRYSnlaVzUwSnlrN1hISmNibHgwWEhSY2RGeDBkR0ZpVkc5QlkzUnBkbUYwWlM1amJHRnpjMHhwYzNRdVlXUmtLQ2RqZFhKeVpXNTBKeWs3WEhKY2JseHlYRzVjZEZ4MFhIUmNkR2xtSUNoM2FXNWtiM2N1YVc1dVpYSlhhV1IwYUNBK1BTQTJNREFwSUh0Y2NseHVYSFJjZEZ4MFhIUmNkSFJoWW5ORGIyNTBaVzUwTG1admNrVmhZMmdvS0hSaFluTXBJRDArSUh0Y2NseHVYSFJjZEZ4MFhIUmNkRngwZEdGaWN5NXpkSGxzWlM1dFlYaElaV2xuYUhRZ1BTQjBZV0p6TG5OamNtOXNiRWhsYVdkb2RDQXJJQ2R3ZUNjN1hISmNibHgwWEhSY2RGeDBYSFI5S1R0Y2NseHVYSFJjZEZ4MFhIUjlYSEpjYmx4MFhIUmNkSDBwTzF4eVhHNWNkRngwZlNrN1hISmNibHh5WEc1Y2RGeDBhV1lnS0hSaFltTmpiM0prYVc5dVRHbHpkQ2tnZTF4eVhHNWNkRngwWEhSMFlXSnpMbVp2Y2tWaFkyZ29LSFJoWWlrZ1BUNGdlMXh5WEc1Y2RGeDBYSFJjZEhSaFlpNXhkV1Z5ZVZObGJHVmpkRzl5S0NjdWRHRmlZMk52Y21ScGIyNWZYMnhwYzNRZ0xuUmhZbU5qYjNKa2FXOXVYMTlpZEc0bktTNWpiR2xqYXlncE8xeHlYRzVjZEZ4MFhIUjlLVHRjY2x4dVhIUmNkSDFjY2x4dVhISmNibHgwWEhSM2FXNWtiM2N1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduY21WemFYcGxKeXdnS0dVcElEMCtJSHRjY2x4dVhIUmNkRngwYVdZZ0tIZHBibVJ2ZHk1cGJtNWxjbGRwWkhSb0lENDlJRFl3TUNrZ2UxeHlYRzVjZEZ4MFhIUmNkR0ZqZEdsMllYUmxWR0ZpY3lncE8xeHlYRzVjZEZ4MFhIUjlYSEpjYmx4MFhIUjlLVHRjY2x4dVhIUjlYSEpjYmx4eVhHNWNkQzh2THk4dklHRmpZMjl5WkdsdmJseHlYRzVjZEdOdmJuTjBJR0ZqWTI5eVpHbHZia0owYmlBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0pCYkd3b0p5NWhZMk52Y21ScGIyNWZYMnhwYzNRdFluUnVKeWs3WEhKY2JseHlYRzVjZEdaMWJtTjBhVzl1SUdGamRHbDJZWFJsUVdOamIzSmthVzl1S0NrZ2UxeHlYRzVjZEZ4MFlXTmpiM0prYVc5dVFuUnVMbVp2Y2tWaFkyZ29LR0owYmlrZ1BUNGdlMXh5WEc1Y2RGeDBYSFJpZEc0dVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblkyeHBZMnNuTENBb0tTQTlQaUI3WEhKY2JseDBYSFJjZEZ4MEx5OGdZMmhsWTJzZ1ptOXlJRzl3Wlc0Z1lXTmpiM0prYVc5dVhISmNibHgwWEhSY2RGeDBZMjl1YzNRZ1lXTmpiM0prYVc5dVFuUnVUM0JsYmlBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvWEhKY2JseDBYSFJjZEZ4MFhIUW5MbUZqWTI5eVpHbHZibDlmYkdsemRDMWlkRzR1YjNCbGJpZGNjbHh1WEhSY2RGeDBYSFFwTzF4eVhHNWNjbHh1WEhSY2RGeDBYSFJwWmlBb1lXTmpiM0prYVc5dVFuUnVUM0JsYmlBbUppQmhZMk52Y21ScGIyNUNkRzVQY0dWdUlDRTlQU0JpZEc0cElIdGNjbHh1WEhSY2RGeDBYSFJjZEM4dklHbG1JSFJvWlhKbElHbHpJRzl3Wlc0Z2RHaGxiaUJ5WlcxdmRtVWdiM0JsYmlCamJHRnpjeUJoYm1RZ2MyVjBJRzFoZUdobGFXZG9kQ0IwYnlBd1hISmNibHgwWEhSY2RGeDBYSFJoWTJOdmNtUnBiMjVDZEc1UGNHVnVMbU5zWVhOelRHbHpkQzUwYjJkbmJHVW9KMjl3Wlc0bktUdGNjbHh1WEhSY2RGeDBYSFJjZEdGalkyOXlaR2x2YmtKMGJrOXdaVzR1Ym1WNGRFVnNaVzFsYm5SVGFXSnNhVzVuTG5OMGVXeGxMbTFoZUVobGFXZG9kQ0E5SURBN1hISmNibHgwWEhSY2RGeDBmVnh5WEc1Y2NseHVYSFJjZEZ4MFhIUXZMeUJ6WlhRZ2IzQmxiaUJqYkdGemN5QjBieUJsZG1WeWVTQmpiR2xqYTJWa0lHRmpZMjl5WkdsdmJpQmlkRzVjY2x4dVhIUmNkRngwWEhSaWRHNHVZMnhoYzNOTWFYTjBMblJ2WjJkc1pTZ25iM0JsYmljcE8xeHlYRzVjZEZ4MFhIUmNkR052Ym5OMElHRmpZMjl5WkdsdmJrSnZaSGtnUFNCaWRHNHVibVY0ZEVWc1pXMWxiblJUYVdKc2FXNW5PMXh5WEc1Y2NseHVYSFJjZEZ4MFhIUnBaaUFvWW5SdUxtTnNZWE56VEdsemRDNWpiMjUwWVdsdWN5Z25iM0JsYmljcEtTQjdYSEpjYmx4MFhIUmNkRngwWEhSaFkyTnZjbVJwYjI1Q2IyUjVMbk4wZVd4bExtMWhlRWhsYVdkb2RDQTlJR0ZqWTI5eVpHbHZia0p2WkhrdWMyTnliMnhzU0dWcFoyaDBJQ3NnSjNCNEp6dGNjbHh1WEhSY2RGeDBYSFI5SUdWc2MyVWdlMXh5WEc1Y2RGeDBYSFJjZEZ4MFlXTmpiM0prYVc5dVFtOWtlUzV6ZEhsc1pTNXRZWGhJWldsbmFIUWdQU0F3TzF4eVhHNWNkRngwWEhSY2RIMWNjbHh1WEhSY2RGeDBmU2s3WEhKY2JseDBYSFI5S1R0Y2NseHVYSEpjYmx4MFhIUjNhVzVrYjNjdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnbmNtVnphWHBsSnl3Z0tHVXBJRDArSUh0Y2NseHVYSFJjZEZ4MGFXWWdLSGRwYm1SdmR5NXBibTVsY2xkcFpIUm9JRHdnTmpBd0tTQjdYSEpjYmx4MFhIUmNkRngwZEdGaWMwTnZiblJsYm5RdVptOXlSV0ZqYUNnb2RHRmljeWtnUFQ0Z2UxeHlYRzVjZEZ4MFhIUmNkRngwZEdGaWN5NXpkSGxzWlM1dFlYaElaV2xuYUhRZ1BTQXdPMXh5WEc1Y2RGeDBYSFJjZEZ4MGFXWWdLSFJoWW5NdWNISmxkbWx2ZFhORmJHVnRaVzUwVTJsaWJHbHVaeTVqYkdGemMweHBjM1F1WTI5dWRHRnBibk1vSjI5d1pXNG5LU2tnZTF4eVhHNWNkRngwWEhSY2RGeDBYSFIwWVdKekxuQnlaWFpwYjNWelJXeGxiV1Z1ZEZOcFlteHBibWN1WTJ4aGMzTk1hWE4wTG5KbGJXOTJaU2duYjNCbGJpY3BPMXh5WEc1Y2RGeDBYSFJjZEZ4MGZWeHlYRzVjZEZ4MFhIUmNkSDBwTzF4eVhHNWNkRngwWEhSOVhISmNibHgwWEhSOUtUdGNjbHh1WEhSOVhISmNibHh5WEc1Y2RHbG1JQ2gwWVdKalkyOXlaR2x2YmlrZ2UxeHlYRzVjZEZ4MFlXTjBhWFpoZEdWVVlXSnpLQ2s3WEhKY2JseDBYSFJoWTNScGRtRjBaVUZqWTI5eVpHbHZiaWdwTzF4eVhHNWNkSDFjY2x4dWZTazdYSEpjYmlKZExDSnpiM1Z5WTJWU2IyOTBJam9pSW4wPSJ9
