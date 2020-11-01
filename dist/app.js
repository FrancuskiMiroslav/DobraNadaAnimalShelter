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

/***/ "./src/js/fetchData.js":
/*!*****************************!*\
  !*** ./src/js/fetchData.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {});


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

	function getJsonData() {
		return new Promise((resolve, reject) => {
			fetch(carouselUrl)
				.then((resp) => resp.json())
				.then((data) => resolve(data))
				.catch((err) => reject(err));
		});
	}

	async function displayCarousel() {
		const dataList = await getJsonData();
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
/*!***************************************************************************************************************************************************************************!*\
  !*** multi ./src/js/adoptContentSwitcher.js ./src/js/fetchData.js ./src/js/formValidaiton.js ./src/js/main.js ./src/js/nav.js ./src/js/slider.js ./src/js/tabccordion.js ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\Front-end projects\DobraNadaAzil\src\js\adoptContentSwitcher.js */"./src/js/adoptContentSwitcher.js");
__webpack_require__(/*! D:\Front-end projects\DobraNadaAzil\src\js\fetchData.js */"./src/js/fetchData.js");
__webpack_require__(/*! D:\Front-end projects\DobraNadaAzil\src\js\formValidaiton.js */"./src/js/formValidaiton.js");
__webpack_require__(/*! D:\Front-end projects\DobraNadaAzil\src\js\main.js */"./src/js/main.js");
__webpack_require__(/*! D:\Front-end projects\DobraNadaAzil\src\js\nav.js */"./src/js/nav.js");
__webpack_require__(/*! D:\Front-end projects\DobraNadaAzil\src\js\slider.js */"./src/js/slider.js");
module.exports = __webpack_require__(/*! D:\Front-end projects\DobraNadaAzil\src\js\tabccordion.js */"./src/js/tabccordion.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Fkb3B0Q29udGVudFN3aXRjaGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9mZXRjaERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Zvcm1WYWxpZGFpdG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9uYXYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdGFiY2NvcmRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFHO0FBQ0gsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4REFBOEQsT0FBTztBQUNyRTtBQUNBLGdDQUFnQyxPQUFPO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDakNELDREQUE0RDs7Ozs7Ozs7Ozs7O0FDQTVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDLHlCQUF5Qiw2QkFBNkIsSUFBSSxRQUFRLElBQUksUUFBUSxJQUFJLFFBQVEsSUFBSSxnQ0FBZ0MsR0FBRztBQUNsSztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ3ZGRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFOztBQUVGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7Ozs7Ozs7Ozs7OztBQ3JDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7Ozs7Ozs7Ozs7OztBQ3BCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBLHFDQUFxQyxZQUFZO0FBQ2pELG1DQUFtQyxjQUFjO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDakdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLFVBQVU7QUFDOUM7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxJQUFJO0FBQ0osR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuXHRoaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBudWxsLCAnICcpO1xyXG5cdGNvbnN0IHRhYlN3aXRjaGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXN3aXRjaGVyXScpO1xyXG5cclxuXHR0YWJTd2l0Y2hlcnMuZm9yRWFjaCgodGFiU3dpdGNoKSA9PiB7XHJcblx0XHRjb25zdCB0YWJTd2l0Y2hlciA9IHRhYlN3aXRjaDtcclxuXHRcdGNvbnN0IHBhZ2VJZCA9IHRhYlN3aXRjaGVyLmRhdGFzZXQudGFiO1xyXG5cclxuXHRcdHRhYlN3aXRjaGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHRcdFx0ZG9jdW1lbnRcclxuXHRcdFx0XHQucXVlcnlTZWxlY3RvcignLmFkb3B0X19saXN0LWl0ZW0uYWN0aXZlJylcclxuXHRcdFx0XHQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblxyXG5cdFx0XHR0YWJTd2l0Y2hlci5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRzd2l0Y2hQYWdlKHBhZ2VJZCk7XHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHJcblx0ZnVuY3Rpb24gc3dpdGNoUGFnZShwYWdlSWQpIHtcclxuXHRcdGNvbnN0IGN1cnJlbnRQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UuYWN0aXZlJyk7XHJcblx0XHRjb25zdCBjdXJyZW50UGFnZUhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLWhlYWRlci5hY3RpdmUnKTtcclxuXHJcblx0XHRjdXJyZW50UGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdGN1cnJlbnRQYWdlSGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cclxuXHRcdGNvbnN0IG5leHRQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBhZ2VbZGF0YS1wYWdlPVwiJHtwYWdlSWR9XCJdYCk7XHJcblx0XHRjb25zdCBuZXh0UGFnZUhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdGAucGFnZS1oZWFkZXJbZGF0YS1oZWFkZXI9XCIke3BhZ2VJZH1cIl1gXHJcblx0XHQpO1xyXG5cdFx0bmV4dFBhZ2UuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblx0XHRuZXh0UGFnZUhlYWRlci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHR9XHJcbn0pO1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge30pO1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG5cdC8vIGZvcm0gdmFsaWRhdGlvblxyXG5cdGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdC1mb3JtJyk7XHJcblx0Y29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJyk7XHJcblx0Y29uc3QgZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWwnKTtcclxuXHRjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lc3NhZ2UnKTtcclxuXHRjb25zdCBmb3JtQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tYnRuJyk7XHJcblxyXG5cdGlmIChmb3JtKSB7XHJcblx0XHRbXHJcblx0XHRcdCdjbGljaycsXHJcblx0XHRcdCdvbnRvdWNoc3RhcnQnLFxyXG5cdFx0XHQnbW91c2VvdmVyJyxcclxuXHRcdFx0J2tleWRvd24nLFxyXG5cdFx0XHQna2V5cHJlc3MnLFxyXG5cdFx0XHQndG91Y2hzdGFydCcsXHJcblx0XHRcdCd0b3VjaG1vdmUnLFxyXG5cdFx0XS5mb3JFYWNoKFxyXG5cdFx0XHQoZXZlbnQpID0+XHJcblx0XHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgKCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGNoZWNrSW5wdXRzKCkgPT09IGZhbHNlKSB7XHJcblx0XHRcdFx0XHRcdGZvcm1CdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Zm9ybUJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHJcblx0XHRmdW5jdGlvbiBjaGVja0lucHV0cygpIHtcclxuXHRcdFx0Y29uc3QgbmFtZVZhbHVlID0gbmFtZS52YWx1ZS50cmltKCk7XHJcblx0XHRcdGNvbnN0IGVtYWlsVmFsdWUgPSBlbWFpbC52YWx1ZS50cmltKCk7XHJcblx0XHRcdGNvbnN0IG1lc3NhZ2VWYWx1ZSA9IG1lc3NhZ2UudmFsdWUudHJpbSgpO1xyXG5cclxuXHRcdFx0aWYgKG5hbWVWYWx1ZSA9PT0gJycpIHtcclxuXHRcdFx0XHRzZXRFcnJvckZvcihuYW1lLCAnUGxlYXNlIGVudGVyIHlvdXIgZnVsbCBuYW1lJyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0U3VjY2Vzc0ZvcihuYW1lKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGVtYWlsVmFsdWUgPT09ICcnKSB7XHJcblx0XHRcdFx0c2V0RXJyb3JGb3IoZW1haWwsICdQbGVhc2UgZW50ZXIgeW91ciBlbWFpbCBhZGRyZXNzJyk7XHJcblx0XHRcdH0gZWxzZSBpZiAoIWVtYWlsSXNWYWxpZChlbWFpbFZhbHVlKSkge1xyXG5cdFx0XHRcdHNldEVycm9yRm9yKGVtYWlsLCAnRW1haWwgaXMgbm90IHZhbGlkJyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0U3VjY2Vzc0ZvcihlbWFpbCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChtZXNzYWdlVmFsdWUgPT09ICcnKSB7XHJcblx0XHRcdFx0c2V0RXJyb3JGb3IobWVzc2FnZSwgJ1BsZWFzZSBlbnRlciB5b3VyIG1lc3NhZ2UnKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRTdWNjZXNzRm9yKG1lc3NhZ2UpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoXHJcblx0XHRcdFx0bmFtZVZhbHVlID09PSAnJyB8fFxyXG5cdFx0XHRcdGVtYWlsVmFsdWUgPT09ICcnIHx8XHJcblx0XHRcdFx0bWVzc2FnZVZhbHVlID09PSAnJyB8fFxyXG5cdFx0XHRcdCFlbWFpbElzVmFsaWQoZW1haWxWYWx1ZSlcclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gc2V0RXJyb3JGb3IoaW5wdXQsIG1lc3NhZ2UpIHtcclxuXHRcdFx0Y29uc3QgZm9ybSA9IGlucHV0LnBhcmVudEVsZW1lbnQ7XHJcblx0XHRcdGNvbnN0IHNtYWxsID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdzbWFsbCcpO1xyXG5cclxuXHRcdFx0c21hbGwuaW5uZXJUZXh0ID0gbWVzc2FnZTtcclxuXHRcdFx0Zm9ybS5jbGFzc05hbWUgPSAnZm9ybV9fZ3JvdXAgZXJyb3InO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHNldFN1Y2Nlc3NGb3IoaW5wdXQpIHtcclxuXHRcdFx0Y29uc3QgZm9ybSA9IGlucHV0LnBhcmVudEVsZW1lbnQ7XHJcblx0XHRcdGZvcm0uY2xhc3NOYW1lID0gJ2Zvcm1fX2dyb3VwIHN1Y2Nlc3MnO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGVtYWlsSXNWYWxpZChlbWFpbCkge1xyXG5cdFx0XHRjb25zdCByZSA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvLnRlc3QoXHJcblx0XHRcdFx0ZW1haWxcclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdHJldHVybiByZTtcclxuXHRcdH1cclxuXHR9XHJcbn0pO1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIChlKSA9PiB7XG5cdFx0Y29uc3QgcHJlbG9hZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVsb2FkJyk7XG5cblx0XHRwcmVsb2FkLmNsYXNzTGlzdC5hZGQoJ3ByZWxvYWQtZmluaXNoZWQnKTtcblx0fSk7XG5cblx0Y29uc3QgYnRuU2Nyb2xsVG9Ub3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuU2Nyb2xsVG9Ub3AnKTtcblx0YnRuU2Nyb2xsVG9Ub3AuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdHdpbmRvdy5zY3JvbGxUbyh7XG5cdFx0XHR0b3A6IDAsXG5cdFx0XHRsZWZ0OiAwLFxuXHRcdFx0YmVoYXZpb3I6ICdzbW9vdGgnLFxuXHRcdH0pO1xuXHR9KTtcblxuXHRjb25zdCBleHBhbmRzTW9yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tleHBhbmQtbW9yZV0nKTtcblxuXHRmdW5jdGlvbiBleHBhbmQoKSB7XG5cdFx0Y29uc3Qgc2hvd0NvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRhdGFzZXQudGFyZ2V0KTtcblx0XHRpZiAoc2hvd0NvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuXHRcdFx0dGhpcy5pbm5lckhUTUwgPSB0aGlzLmRhdGFzZXQuc2hvd3RleHQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuaW5uZXJIVE1MID0gdGhpcy5kYXRhc2V0LmhpZGV0ZXh0O1xuXHRcdH1cblxuXHRcdHNob3dDb250ZW50LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuXHRcdGlmIChzaG93Q29udGVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG5cdFx0XHRzaG93Q29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBzaG93Q29udGVudC5zY3JvbGxIZWlnaHQgKyAncHgnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzaG93Q29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSAyMCArICdweCc7XG5cdFx0fVxuXHR9XG5cblx0ZXhwYW5kc01vcmUuZm9yRWFjaCgoYnRuKSA9PiB7XG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXhwYW5kKTtcblx0fSk7XG59KTtcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3QgbmF2Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdi1jb250YWluZXInKTtcclxuXHRjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtYnRuJyk7XHJcblx0Y29uc3QgbmF2TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYtbGlzdCcpO1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKGUpID0+IHtcclxuXHRcdGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID4gMCkge1xyXG5cdFx0XHRuYXZDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc3RpY2t5Jyk7XHJcblx0XHRcdGJ0blNjcm9sbFRvVG9wLnN0eWxlLm9wYWNpdHkgPSAxO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bmF2Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3N0aWNreScpO1xyXG5cdFx0XHRidG5TY3JvbGxUb1RvcC5zdHlsZS5vcGFjaXR5ID0gMDtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0bWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0XHRtZW51QnRuLmNsYXNzTGlzdC50b2dnbGUoJ2NsaWNrZWQnKTtcclxuXHRcdG5hdkNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdvdmVybGF5Jyk7XHJcblx0XHRuYXZMaXN0LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcclxuXHR9KTtcclxufSk7XHJcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcblx0Ly8gY2Fyb3VzZWxcclxuXHRjb25zdCBjYXJvdXNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJvdXNlbCcpO1xyXG5cdGNvbnN0IHByZXZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldicpO1xyXG5cdGNvbnN0IG5leHRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dCcpO1xyXG5cdGNvbnN0IGNhcm91c2VsVXJsID0gJy4vanMvY2Fyb3VzZWwuanNvbic7XHJcblxyXG5cdGxldCBmaXJzdFNsaWRlO1xyXG5cdGxldCBsYXN0U2xpZGU7XHJcblxyXG5cdGZ1bmN0aW9uIGdldEpzb25EYXRhKCkge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0ZmV0Y2goY2Fyb3VzZWxVcmwpXHJcblx0XHRcdFx0LnRoZW4oKHJlc3ApID0+IHJlc3AuanNvbigpKVxyXG5cdFx0XHRcdC50aGVuKChkYXRhKSA9PiByZXNvbHZlKGRhdGEpKVxyXG5cdFx0XHRcdC5jYXRjaCgoZXJyKSA9PiByZWplY3QoZXJyKSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGZ1bmN0aW9uIGRpc3BsYXlDYXJvdXNlbCgpIHtcclxuXHRcdGNvbnN0IGRhdGFMaXN0ID0gYXdhaXQgZ2V0SnNvbkRhdGEoKTtcclxuXHRcdGNvbnN0IHNsaWRlc0FycmF5ID0gZGF0YUxpc3Quc2xpZGVzO1xyXG5cclxuXHRcdHNsaWRlc0FycmF5LmZvckVhY2goKHNsaWRlLCBzbGlkZU51bWJlcikgPT4ge1xyXG5cdFx0XHRuZXdTbGlkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0XHRuZXdTbGlkZS5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9fc2xpZGUnKTtcclxuXHJcblx0XHRcdG5ld1NsaWRlLmlubmVySFRNTCA9IGBcclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcm91c2VsX19pbWFnZS1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIiR7c2xpZGUuaW1hZ2V9XCIgYWx0PVwic2xpZGUtaW1nXCIgLz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjYXJvdXNlbF9fY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxoMSBjbGFzcz1cImNhcm91c2VsX190aXRsZVwiPiR7c2xpZGUudGl0bGV9PC9oMT5cclxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzcz1cImNhcm91c2VsX19kZXNjXCI+JHtzbGlkZS5jb250ZW50fTwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiaGVhZGVyX19uYXYtZG9uYXRlLWJ0biBidXR0b25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdER1Z21lIHphIG5lxaF0b1xyXG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0YDtcclxuXHJcblx0XHRcdGNhcm91c2VsLmFwcGVuZENoaWxkKG5ld1NsaWRlKTtcclxuXHJcblx0XHRcdGlmIChzbGlkZU51bWJlciA9PT0gMCkge1xyXG5cdFx0XHRcdGZpcnN0U2xpZGUgPSBuZXdTbGlkZTtcclxuXHRcdFx0XHRuZXdTbGlkZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdFx0fSBlbHNlIGlmIChzbGlkZU51bWJlciArIDEgPT09IGRhdGFMaXN0LnNsaWRlcy5sZW5ndGgpIHtcclxuXHRcdFx0XHRsYXN0U2xpZGUgPSBuZXdTbGlkZTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0bmV4dFNsaWRlKCk7XHJcblx0XHRwcmV2aW91c1NsaWRlKCk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBuZXh0U2xpZGUoKSB7XHJcblx0XHRjb25zdCBuZXh0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHQnKTtcclxuXHJcblx0XHRuZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHRcdFx0Y29uc3QgYWN0aXZlU2xpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX3NsaWRlLmFjdGl2ZScpO1xyXG5cclxuXHRcdFx0bGV0IG5leHRTaWJsaW5nID0gYWN0aXZlU2xpZGUubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG5cclxuXHRcdFx0aWYgKG5leHRTaWJsaW5nID09IG51bGwpIHtcclxuXHRcdFx0XHRuZXh0U2libGluZyA9IGFjdGl2ZVNsaWRlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAobmV4dFNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJvdXNlbF9fc2xpZGUnKSkge1xyXG5cdFx0XHRcdGFjdGl2ZVNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdG5leHRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHByZXZpb3VzU2xpZGUoKSB7XHJcblx0XHRjb25zdCBwcmV2QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXYnKTtcclxuXHJcblx0XHRwcmV2QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHRcdFx0Y29uc3QgYWN0aXZlU2xpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX3NsaWRlLmFjdGl2ZScpO1xyXG5cclxuXHRcdFx0bGV0IG5leHRTaWJsaW5nID0gYWN0aXZlU2xpZGUucHJldmlvdXNFbGVtZW50U2libGluZztcclxuXHJcblx0XHRcdGlmIChuZXh0U2libGluZyA9PSBudWxsKSB7XHJcblx0XHRcdFx0bmV4dFNpYmxpbmcgPSBhY3RpdmVTbGlkZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKG5leHRTaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucygnY2Fyb3VzZWxfX3NsaWRlJykpIHtcclxuXHRcdFx0XHRhY3RpdmVTbGlkZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdFx0XHRuZXh0U2libGluZy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRpZiAoY2Fyb3VzZWwgIT09IG51bGwpIHtcclxuXHRcdChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGRpc3BsYXlDYXJvdXNlbCgpO1xyXG5cdFx0fSkoKTtcclxuXHR9XHJcbn0pO1xyXG4iLCJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuXHQvLyB0YWJzXHJcblx0Y29uc3QgdGFiTGlzdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJjY29yZGlvbl9fbGlzdC1idG4nKTtcclxuXHRjb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYmNjb3JkaW9uX19jb250YWluZXInKTtcclxuXHRjb25zdCB0YWJjY29yZGlvbkxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiY2NvcmRpb24tbGlzdCcpO1xyXG5cdGNvbnN0IHRhYnNDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYmNjb3JkaW9uX190YWItaW5uZXInKTtcclxuXHRjb25zdCB0YWJjY29yZGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWJjY29yZGlvbicpO1xyXG5cclxuXHRmdW5jdGlvbiBhY3RpdmF0ZVRhYnMoKSB7XHJcblx0XHR0YWJMaXN0QnRuLmZvckVhY2goKHRhYikgPT4ge1xyXG5cdFx0XHR0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHRhYk5hdiA9IHRhYi5wYXJlbnRFbGVtZW50O1xyXG5cdFx0XHRcdGNvbnN0IHRhYnNDb250YWluZXIgPSB0YWJOYXYucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG5cdFx0XHRcdGNvbnN0IHRhYk51bWJlciA9IHRhYi5kYXRhc2V0LmZvclRhYjtcclxuXHRcdFx0XHRjb25zdCB0YWJUb0FjdGl2YXRlID0gdGFic0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHRcdFx0YC50YWJjY29yZGlvbl9fdGFiW2RhdGEtdGFiPVwiJHt0YWJOdW1iZXJ9XCJdYFxyXG5cdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdHRhYk5hdi5xdWVyeVNlbGVjdG9yQWxsKCcudGFiY2NvcmRpb25fX2xpc3QtYnRuJykuZm9yRWFjaCgoYnRuKSA9PiB7XHJcblx0XHRcdFx0XHRidG4uY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR0YWJzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJjY29yZGlvbl9fdGFiJykuZm9yRWFjaCgodGFiKSA9PiB7XHJcblx0XHRcdFx0XHR0YWIuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR0YWIuY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xyXG5cdFx0XHRcdHRhYlRvQWN0aXZhdGUuY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xyXG5cclxuXHRcdFx0XHRpZiAod2luZG93LmlubmVyV2lkdGggPj0gNjAwKSB7XHJcblx0XHRcdFx0XHR0YWJzQ29udGVudC5mb3JFYWNoKCh0YWJzKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRhYnMuc3R5bGUubWF4SGVpZ2h0ID0gdGFicy5zY3JvbGxIZWlnaHQgKyAncHgnO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGlmICh0YWJjY29yZGlvbkxpc3QpIHtcclxuXHRcdFx0dGFicy5mb3JFYWNoKCh0YWIpID0+IHtcclxuXHRcdFx0XHR0YWIucXVlcnlTZWxlY3RvcignLnRhYmNjb3JkaW9uX19saXN0IC50YWJjY29yZGlvbl9fYnRuJykuY2xpY2soKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIChlKSA9PiB7XHJcblx0XHRcdGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSA2MDApIHtcclxuXHRcdFx0XHRhY3RpdmF0ZVRhYnMoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvLy8vLyBhY2NvcmRpb25cclxuXHRjb25zdCBhY2NvcmRpb25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uX19saXN0LWJ0bicpO1xyXG5cclxuXHRmdW5jdGlvbiBhY3RpdmF0ZUFjY29yZGlvbigpIHtcclxuXHRcdGFjY29yZGlvbkJ0bi5mb3JFYWNoKChidG4pID0+IHtcclxuXHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRcdC8vIGNoZWNrIGZvciBvcGVuIGFjY29yZGlvblxyXG5cdFx0XHRcdGNvbnN0IGFjY29yZGlvbkJ0bk9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHRcdFx0Jy5hY2NvcmRpb25fX2xpc3QtYnRuLm9wZW4nXHJcblx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0aWYgKGFjY29yZGlvbkJ0bk9wZW4gJiYgYWNjb3JkaW9uQnRuT3BlbiAhPT0gYnRuKSB7XHJcblx0XHRcdFx0XHQvLyBpZiB0aGVyZSBpcyBvcGVuIHRoZW4gcmVtb3ZlIG9wZW4gY2xhc3MgYW5kIHNldCBtYXhoZWlnaHQgdG8gMFxyXG5cdFx0XHRcdFx0YWNjb3JkaW9uQnRuT3Blbi5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XHJcblx0XHRcdFx0XHRhY2NvcmRpb25CdG5PcGVuLm5leHRFbGVtZW50U2libGluZy5zdHlsZS5tYXhIZWlnaHQgPSAwO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gc2V0IG9wZW4gY2xhc3MgdG8gZXZlcnkgY2xpY2tlZCBhY2NvcmRpb24gYnRuXHJcblx0XHRcdFx0YnRuLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcclxuXHRcdFx0XHRjb25zdCBhY2NvcmRpb25Cb2R5ID0gYnRuLm5leHRFbGVtZW50U2libGluZztcclxuXHJcblx0XHRcdFx0aWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKSkge1xyXG5cdFx0XHRcdFx0YWNjb3JkaW9uQm9keS5zdHlsZS5tYXhIZWlnaHQgPSBhY2NvcmRpb25Cb2R5LnNjcm9sbEhlaWdodCArICdweCc7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGFjY29yZGlvbkJvZHkuc3R5bGUubWF4SGVpZ2h0ID0gMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIChlKSA9PiB7XHJcblx0XHRcdGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDYwMCkge1xyXG5cdFx0XHRcdHRhYnNDb250ZW50LmZvckVhY2goKHRhYnMpID0+IHtcclxuXHRcdFx0XHRcdHRhYnMuc3R5bGUubWF4SGVpZ2h0ID0gMDtcclxuXHRcdFx0XHRcdGlmICh0YWJzLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuJykpIHtcclxuXHRcdFx0XHRcdFx0dGFicy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRpZiAodGFiY2NvcmRpb24pIHtcclxuXHRcdGFjdGl2YXRlVGFicygpO1xyXG5cdFx0YWN0aXZhdGVBY2NvcmRpb24oKTtcclxuXHR9XHJcbn0pO1xyXG4iXSwicHJlRXhpc3RpbmdDb21tZW50IjoiLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk4dmQyVmljR0ZqYXk5aWIyOTBjM1J5WVhBaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwycHpMMkZrYjNCMFEyOXVkR1Z1ZEZOM2FYUmphR1Z5TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDNOeVl5OXFjeTltWlhSamFFUmhkR0V1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwycHpMMlp2Y20xV1lXeHBaR0ZwZEc5dUxtcHpJaXdpZDJWaWNHRmphem92THk4dUwzTnlZeTlxY3k5dFlXbHVMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5cWN5OXVZWFl1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwycHpMM05zYVdSbGNpNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXpjbU12YW5NdmRHRmlZMk52Y21ScGIyNHVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRSUVVGQk8xRkJRMEU3TzFGQlJVRTdVVUZEUVRzN1VVRkZRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHM3VVVGRlFUdFJRVU5CT3p0UlFVVkJPMUZCUTBFN08xRkJSVUU3VVVGRFFUdFJRVU5CT3pzN1VVRkhRVHRSUVVOQk96dFJRVVZCTzFGQlEwRTdPMUZCUlVFN1VVRkRRVHRSUVVOQk8xRkJRMEVzTUVOQlFUQkRMR2REUVVGblF6dFJRVU14UlR0UlFVTkJPenRSUVVWQk8xRkJRMEU3VVVGRFFUdFJRVU5CTEhkRVFVRjNSQ3hyUWtGQmEwSTdVVUZETVVVN1VVRkRRU3hwUkVGQmFVUXNZMEZCWXp0UlFVTXZSRHM3VVVGRlFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRXNlVU5CUVhsRExHbERRVUZwUXp0UlFVTXhSU3huU0VGQlowZ3NiVUpCUVcxQ0xFVkJRVVU3VVVGRGNrazdVVUZEUVRzN1VVRkZRVHRSUVVOQk8xRkJRMEU3VVVGRFFTd3lRa0ZCTWtJc01FSkJRVEJDTEVWQlFVVTdVVUZEZGtRc2FVTkJRV2xETEdWQlFXVTdVVUZEYUVRN1VVRkRRVHRSUVVOQk96dFJRVVZCTzFGQlEwRXNjMFJCUVhORUxDdEVRVUVyUkRzN1VVRkZja2c3VVVGRFFUczdPMUZCUjBFN1VVRkRRVHM3T3pzN096czdPenM3TzBGRGJFWkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRU3hIUVVGSE8wRkJRMGdzUlVGQlJUczdRVUZGUmp0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVN3NFJFRkJPRVFzVDBGQlR6dEJRVU55UlR0QlFVTkJMR2REUVVGblF5eFBRVUZQTzBGQlEzWkRPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUTBGQlF6czdPenM3T3pzN096czdPMEZEYWtORUxEUkVRVUUwUkRzN096czdPenM3T3pzN08wRkRRVFZFTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hOUVVGTk8wRkJRMDQ3UVVGRFFUdEJRVU5CTEV0QlFVczdRVUZEVER0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hKUVVGSk8wRkJRMG83UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc1NVRkJTVHRCUVVOS08wRkJRMEVzU1VGQlNUdEJRVU5LTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxFbEJRVWs3UVVGRFNqdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNTVUZCU1R0QlFVTktPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzYVVOQlFXbERMSGxDUVVGNVFpdzJRa0ZCTmtJc1NVRkJTU3hSUVVGUkxFbEJRVWtzVVVGQlVTeEpRVUZKTEZGQlFWRXNTVUZCU1N4blEwRkJaME1zUjBGQlJ6dEJRVU5zU3p0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVOQlFVTTdPenM3T3pzN096czdPenRCUTNaR1JEdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3hGUVVGRk96dEJRVVZHTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNDeEZRVUZGT3p0QlFVVkdPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNSVUZCUlR0QlFVTkdMRU5CUVVNN096czdPenM3T3pzN096dEJRM0pEUkR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHRCUVVOQk8wRkJRMEU3UVVGRFFTeEZRVUZGT3p0QlFVVkdPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUlVGQlJUdEJRVU5HTEVOQlFVTTdPenM3T3pzN096czdPenRCUTNCQ1JEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzYlVKQlFXMUNMRmxCUVZrN1FVRkRMMEk3UVVGRFFUdEJRVU5CTEhGRFFVRnhReXhaUVVGWk8wRkJRMnBFTEcxRFFVRnRReXhqUVVGak8wRkJRMnBFTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1NVRkJTVHRCUVVOS08wRkJRMEU3UVVGRFFTeEhRVUZIT3p0QlFVVklPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JTzBGQlEwRXNRMEZCUXpzN096czdPenM3T3pzN08wRkRha2RFTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYjBOQlFXOURMRlZCUVZVN1FVRkRPVU03TzBGQlJVRTdRVUZEUVR0QlFVTkJMRXRCUVVzN08wRkJSVXc3UVVGRFFUdEJRVU5CTEV0QlFVczdPMEZCUlV3N1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TlFVRk5PMEZCUTA0N1FVRkRRU3hKUVVGSk8wRkJRMG9zUjBGQlJ6czdRVUZGU0R0QlFVTkJPMEZCUTBFN1FVRkRRU3hKUVVGSk8wRkJRMG83TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNTMEZCU3p0QlFVTk1PMEZCUTBFN1FVRkRRU3hKUVVGSk8wRkJRMG9zUjBGQlJ6czdRVUZGU0R0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEV0QlFVczdRVUZEVER0QlFVTkJMRWRCUVVjN1FVRkRTRHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRU5CUVVNaUxDSm1hV3hsSWpvaVltUTRNR1U0TURZeE0yUTBNR1JqTUdRNU1UWXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJZ1hIUXZMeUJVYUdVZ2JXOWtkV3hsSUdOaFkyaGxYRzRnWEhSMllYSWdhVzV6ZEdGc2JHVmtUVzlrZFd4bGN5QTlJSHQ5TzF4dVhHNGdYSFF2THlCVWFHVWdjbVZ4ZFdseVpTQm1kVzVqZEdsdmJseHVJRngwWm5WdVkzUnBiMjRnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlodGIyUjFiR1ZKWkNrZ2UxeHVYRzRnWEhSY2RDOHZJRU5vWldOcklHbG1JRzF2WkhWc1pTQnBjeUJwYmlCallXTm9aVnh1SUZ4MFhIUnBaaWhwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYU2tnZTF4dUlGeDBYSFJjZEhKbGRIVnliaUJwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYUzVsZUhCdmNuUnpPMXh1SUZ4MFhIUjlYRzRnWEhSY2RDOHZJRU55WldGMFpTQmhJRzVsZHlCdGIyUjFiR1VnS0dGdVpDQndkWFFnYVhRZ2FXNTBieUIwYUdVZ1kyRmphR1VwWEc0Z1hIUmNkSFpoY2lCdGIyUjFiR1VnUFNCcGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFNBOUlIdGNiaUJjZEZ4MFhIUnBPaUJ0YjJSMWJHVkpaQ3hjYmlCY2RGeDBYSFJzT2lCbVlXeHpaU3hjYmlCY2RGeDBYSFJsZUhCdmNuUnpPaUI3ZlZ4dUlGeDBYSFI5TzF4dVhHNGdYSFJjZEM4dklFVjRaV04xZEdVZ2RHaGxJRzF2WkhWc1pTQm1kVzVqZEdsdmJseHVJRngwWEhSdGIyUjFiR1Z6VzIxdlpIVnNaVWxrWFM1allXeHNLRzF2WkhWc1pTNWxlSEJ2Y25SekxDQnRiMlIxYkdVc0lHMXZaSFZzWlM1bGVIQnZjblJ6TENCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktUdGNibHh1SUZ4MFhIUXZMeUJHYkdGbklIUm9aU0J0YjJSMWJHVWdZWE1nYkc5aFpHVmtYRzRnWEhSY2RHMXZaSFZzWlM1c0lEMGdkSEoxWlR0Y2JseHVJRngwWEhRdkx5QlNaWFIxY200Z2RHaGxJR1Y0Y0c5eWRITWdiMllnZEdobElHMXZaSFZzWlZ4dUlGeDBYSFJ5WlhSMWNtNGdiVzlrZFd4bExtVjRjRzl5ZEhNN1hHNGdYSFI5WEc1Y2JseHVJRngwTHk4Z1pYaHdiM05sSUhSb1pTQnRiMlIxYkdWeklHOWlhbVZqZENBb1gxOTNaV0p3WVdOclgyMXZaSFZzWlhOZlh5bGNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJTQTlJRzF2WkhWc1pYTTdYRzVjYmlCY2RDOHZJR1Y0Y0c5elpTQjBhR1VnYlc5a2RXeGxJR05oWTJobFhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1NZ1BTQnBibk4wWVd4c1pXUk5iMlIxYkdWek8xeHVYRzRnWEhRdkx5QmtaV1pwYm1VZ1oyVjBkR1Z5SUdaMWJtTjBhVzl1SUdadmNpQm9ZWEp0YjI1NUlHVjRjRzl5ZEhOY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WkNBOUlHWjFibU4wYVc5dUtHVjRjRzl5ZEhNc0lHNWhiV1VzSUdkbGRIUmxjaWtnZTF4dUlGeDBYSFJwWmlnaFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXZLR1Y0Y0c5eWRITXNJRzVoYldVcEtTQjdYRzRnWEhSY2RGeDBUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dWNGNHOXlkSE1zSUc1aGJXVXNJSHNnWlc1MWJXVnlZV0pzWlRvZ2RISjFaU3dnWjJWME9pQm5aWFIwWlhJZ2ZTazdYRzRnWEhSY2RIMWNiaUJjZEgwN1hHNWNiaUJjZEM4dklHUmxabWx1WlNCZlgyVnpUVzlrZFd4bElHOXVJR1Y0Y0c5eWRITmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWNpQTlJR1oxYm1OMGFXOXVLR1Y0Y0c5eWRITXBJSHRjYmlCY2RGeDBhV1lvZEhsd1pXOW1JRk41YldKdmJDQWhQVDBnSjNWdVpHVm1hVzVsWkNjZ0ppWWdVM2x0WW05c0xuUnZVM1J5YVc1blZHRm5LU0I3WEc0Z1hIUmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lGTjViV0p2YkM1MGIxTjBjbWx1WjFSaFp5d2dleUIyWVd4MVpUb2dKMDF2WkhWc1pTY2dmU2s3WEc0Z1hIUmNkSDFjYmlCY2RGeDBUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dWNGNHOXlkSE1zSUNkZlgyVnpUVzlrZFd4bEp5d2dleUIyWVd4MVpUb2dkSEoxWlNCOUtUdGNiaUJjZEgwN1hHNWNiaUJjZEM4dklHTnlaV0YwWlNCaElHWmhhMlVnYm1GdFpYTndZV05sSUc5aWFtVmpkRnh1SUZ4MEx5OGdiVzlrWlNBbUlERTZJSFpoYkhWbElHbHpJR0VnYlc5a2RXeGxJR2xrTENCeVpYRjFhWEpsSUdsMFhHNGdYSFF2THlCdGIyUmxJQ1lnTWpvZ2JXVnlaMlVnWVd4c0lIQnliM0JsY25ScFpYTWdiMllnZG1Gc2RXVWdhVzUwYnlCMGFHVWdibk5jYmlCY2RDOHZJRzF2WkdVZ0ppQTBPaUJ5WlhSMWNtNGdkbUZzZFdVZ2QyaGxiaUJoYkhKbFlXUjVJRzV6SUc5aWFtVmpkRnh1SUZ4MEx5OGdiVzlrWlNBbUlEaDhNVG9nWW1Wb1lYWmxJR3hwYTJVZ2NtVnhkV2x5WlZ4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTUwSUQwZ1puVnVZM1JwYjI0b2RtRnNkV1VzSUcxdlpHVXBJSHRjYmlCY2RGeDBhV1lvYlc5a1pTQW1JREVwSUhaaGJIVmxJRDBnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHloMllXeDFaU2s3WEc0Z1hIUmNkR2xtS0cxdlpHVWdKaUE0S1NCeVpYUjFjbTRnZG1Gc2RXVTdYRzRnWEhSY2RHbG1LQ2h0YjJSbElDWWdOQ2tnSmlZZ2RIbHdaVzltSUhaaGJIVmxJRDA5UFNBbmIySnFaV04wSnlBbUppQjJZV3gxWlNBbUppQjJZV3gxWlM1ZlgyVnpUVzlrZFd4bEtTQnlaWFIxY200Z2RtRnNkV1U3WEc0Z1hIUmNkSFpoY2lCdWN5QTlJRTlpYW1WamRDNWpjbVZoZEdVb2JuVnNiQ2s3WEc0Z1hIUmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y2lodWN5azdYRzRnWEhSY2RFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2h1Y3l3Z0oyUmxabUYxYkhRbkxDQjdJR1Z1ZFcxbGNtRmliR1U2SUhSeWRXVXNJSFpoYkhWbE9pQjJZV3gxWlNCOUtUdGNiaUJjZEZ4MGFXWW9iVzlrWlNBbUlESWdKaVlnZEhsd1pXOW1JSFpoYkhWbElDRTlJQ2R6ZEhKcGJtY25LU0JtYjNJb2RtRnlJR3RsZVNCcGJpQjJZV3gxWlNrZ1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWtLRzV6TENCclpYa3NJR1oxYm1OMGFXOXVLR3RsZVNrZ2V5QnlaWFIxY200Z2RtRnNkV1ZiYTJWNVhUc2dmUzVpYVc1a0tHNTFiR3dzSUd0bGVTa3BPMXh1SUZ4MFhIUnlaWFIxY200Z2JuTTdYRzRnWEhSOU8xeHVYRzRnWEhRdkx5Qm5aWFJFWldaaGRXeDBSWGh3YjNKMElHWjFibU4wYVc5dUlHWnZjaUJqYjIxd1lYUnBZbWxzYVhSNUlIZHBkR2dnYm05dUxXaGhjbTF2Ym5rZ2JXOWtkV3hsYzF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV1SUQwZ1puVnVZM1JwYjI0b2JXOWtkV3hsS1NCN1hHNGdYSFJjZEhaaGNpQm5aWFIwWlhJZ1BTQnRiMlIxYkdVZ0ppWWdiVzlrZFd4bExsOWZaWE5OYjJSMWJHVWdQMXh1SUZ4MFhIUmNkR1oxYm1OMGFXOXVJR2RsZEVSbFptRjFiSFFvS1NCN0lISmxkSFZ5YmlCdGIyUjFiR1ZiSjJSbFptRjFiSFFuWFRzZ2ZTQTZYRzRnWEhSY2RGeDBablZ1WTNScGIyNGdaMlYwVFc5a2RXeGxSWGh3YjNKMGN5Z3BJSHNnY21WMGRYSnVJRzF2WkhWc1pUc2dmVHRjYmlCY2RGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVrS0dkbGRIUmxjaXdnSjJFbkxDQm5aWFIwWlhJcE8xeHVJRngwWEhSeVpYUjFjbTRnWjJWMGRHVnlPMXh1SUZ4MGZUdGNibHh1SUZ4MEx5OGdUMkpxWldOMExuQnliM1J2ZEhsd1pTNW9ZWE5QZDI1UWNtOXdaWEowZVM1allXeHNYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtOGdQU0JtZFc1amRHbHZiaWh2WW1wbFkzUXNJSEJ5YjNCbGNuUjVLU0I3SUhKbGRIVnliaUJQWW1wbFkzUXVjSEp2ZEc5MGVYQmxMbWhoYzA5M2JsQnliM0JsY25SNUxtTmhiR3dvYjJKcVpXTjBMQ0J3Y205d1pYSjBlU2s3SUgwN1hHNWNiaUJjZEM4dklGOWZkMlZpY0dGamExOXdkV0pzYVdOZmNHRjBhRjlmWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbkFnUFNCY0lsd2lPMXh1WEc1Y2JpQmNkQzh2SUV4dllXUWdaVzUwY25rZ2JXOWtkV3hsSUdGdVpDQnlaWFIxY200Z1pYaHdiM0owYzF4dUlGeDBjbVYwZFhKdUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOG9YMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV6SUQwZ01DazdYRzRpTENKa2IyTjFiV1Z1ZEM1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkRVQwMURiMjUwWlc1MFRHOWhaR1ZrSnl3Z1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc1Y2RHaHBjM1J2Y25rdWNtVndiR0ZqWlZOMFlYUmxLRzUxYkd3c0lHNTFiR3dzSUNjZ0p5azdYSEpjYmx4MFkyOXVjM1FnZEdGaVUzZHBkR05vWlhKeklEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2tGc2JDZ25XMlJoZEdFdGMzZHBkR05vWlhKZEp5azdYSEpjYmx4eVhHNWNkSFJoWWxOM2FYUmphR1Z5Y3k1bWIzSkZZV05vS0NoMFlXSlRkMmwwWTJncElEMCtJSHRjY2x4dVhIUmNkR052Ym5OMElIUmhZbE4zYVhSamFHVnlJRDBnZEdGaVUzZHBkR05vTzF4eVhHNWNkRngwWTI5dWMzUWdjR0ZuWlVsa0lEMGdkR0ZpVTNkcGRHTm9aWEl1WkdGMFlYTmxkQzUwWVdJN1hISmNibHh5WEc1Y2RGeDBkR0ZpVTNkcGRHTm9aWEl1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduWTJ4cFkyc25MQ0FvWlNrZ1BUNGdlMXh5WEc1Y2RGeDBYSFJrYjJOMWJXVnVkRnh5WEc1Y2RGeDBYSFJjZEM1eGRXVnllVk5sYkdWamRHOXlLQ2N1WVdSdmNIUmZYMnhwYzNRdGFYUmxiUzVoWTNScGRtVW5LVnh5WEc1Y2RGeDBYSFJjZEM1amJHRnpjMHhwYzNRdWNtVnRiM1psS0NkaFkzUnBkbVVuS1R0Y2NseHVYSEpjYmx4MFhIUmNkSFJoWWxOM2FYUmphR1Z5TG5CaGNtVnVkRVZzWlcxbGJuUXVjR0Z5Wlc1MFJXeGxiV1Z1ZEM1amJHRnpjMHhwYzNRdVlXUmtLQ2RoWTNScGRtVW5LVHRjY2x4dVhISmNibHgwWEhSY2RITjNhWFJqYUZCaFoyVW9jR0ZuWlVsa0tUdGNjbHh1WEhSY2RIMHBPMXh5WEc1Y2RIMHBPMXh5WEc1Y2NseHVYSFJtZFc1amRHbHZiaUJ6ZDJsMFkyaFFZV2RsS0hCaFoyVkpaQ2tnZTF4eVhHNWNkRngwWTI5dWMzUWdZM1Z5Y21WdWRGQmhaMlVnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2N1Y0dGblpTNWhZM1JwZG1VbktUdGNjbHh1WEhSY2RHTnZibk4wSUdOMWNuSmxiblJRWVdkbFNHVmhaR1Z5SUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduTG5CaFoyVXRhR1ZoWkdWeUxtRmpkR2wyWlNjcE8xeHlYRzVjY2x4dVhIUmNkR04xY25KbGJuUlFZV2RsTG1Oc1lYTnpUR2x6ZEM1eVpXMXZkbVVvSjJGamRHbDJaU2NwTzF4eVhHNWNkRngwWTNWeWNtVnVkRkJoWjJWSVpXRmtaWEl1WTJ4aGMzTk1hWE4wTG5KbGJXOTJaU2duWVdOMGFYWmxKeWs3WEhKY2JseHlYRzVjZEZ4MFkyOXVjM1FnYm1WNGRGQmhaMlVnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLR0F1Y0dGblpWdGtZWFJoTFhCaFoyVTlYQ0lrZTNCaFoyVkpaSDFjSWwxZ0tUdGNjbHh1WEhSY2RHTnZibk4wSUc1bGVIUlFZV2RsU0dWaFpHVnlJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpaGNjbHh1WEhSY2RGeDBZQzV3WVdkbExXaGxZV1JsY2x0a1lYUmhMV2hsWVdSbGNqMWNJaVI3Y0dGblpVbGtmVndpWFdCY2NseHVYSFJjZENrN1hISmNibHgwWEhSdVpYaDBVR0ZuWlM1amJHRnpjMHhwYzNRdVlXUmtLQ2RoWTNScGRtVW5LVHRjY2x4dVhIUmNkRzVsZUhSUVlXZGxTR1ZoWkdWeUxtTnNZWE56VEdsemRDNWhaR1FvSjJGamRHbDJaU2NwTzF4eVhHNWNkSDFjY2x4dWZTazdYSEpjYmlJc0ltUnZZM1Z0Wlc1MExtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0owUlBUVU52Ym5SbGJuUk1iMkZrWldRbkxDQm1kVzVqZEdsdmJpQW9LU0I3ZlNrN1hISmNiaUlzSW1SdlkzVnRaVzUwTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjBSUFRVTnZiblJsYm5STWIyRmtaV1FuTENCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmx4MEx5OGdabTl5YlNCMllXeHBaR0YwYVc5dVhISmNibHgwWTI5dWMzUWdabTl5YlNBOUlHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0NkamIyNTBZV04wTFdadmNtMG5LVHRjY2x4dVhIUmpiMjV6ZENCdVlXMWxJRDBnWkc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEVKNVNXUW9KMjVoYldVbktUdGNjbHh1WEhSamIyNXpkQ0JsYldGcGJDQTlJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJDZVVsa0tDZGxiV0ZwYkNjcE8xeHlYRzVjZEdOdmJuTjBJRzFsYzNOaFoyVWdQU0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDZ25iV1Z6YzJGblpTY3BPMXh5WEc1Y2RHTnZibk4wSUdadmNtMUNkRzRnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2duWm05eWJTMWlkRzRuS1R0Y2NseHVYSEpjYmx4MGFXWWdLR1p2Y20wcElIdGNjbHh1WEhSY2RGdGNjbHh1WEhSY2RGeDBKMk5zYVdOckp5eGNjbHh1WEhSY2RGeDBKMjl1ZEc5MVkyaHpkR0Z5ZENjc1hISmNibHgwWEhSY2RDZHRiM1Z6Wlc5MlpYSW5MRnh5WEc1Y2RGeDBYSFFuYTJWNVpHOTNiaWNzWEhKY2JseDBYSFJjZENkclpYbHdjbVZ6Y3ljc1hISmNibHgwWEhSY2RDZDBiM1ZqYUhOMFlYSjBKeXhjY2x4dVhIUmNkRngwSjNSdmRXTm9iVzkyWlNjc1hISmNibHgwWEhSZExtWnZja1ZoWTJnb1hISmNibHgwWEhSY2RDaGxkbVZ1ZENrZ1BUNWNjbHh1WEhSY2RGeDBYSFJrYjJOMWJXVnVkQzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLR1YyWlc1MExDQW9LU0E5UGlCN1hISmNibHgwWEhSY2RGeDBYSFJwWmlBb1kyaGxZMnRKYm5CMWRITW9LU0E5UFQwZ1ptRnNjMlVwSUh0Y2NseHVYSFJjZEZ4MFhIUmNkRngwWm05eWJVSjBiaTVrYVhOaFlteGxaQ0E5SUhSeWRXVTdYSEpjYmx4MFhIUmNkRngwWEhSOUlHVnNjMlVnZTF4eVhHNWNkRngwWEhSY2RGeDBYSFJtYjNKdFFuUnVMbVJwYzJGaWJHVmtJRDBnWm1Gc2MyVTdYSEpjYmx4MFhIUmNkRngwWEhSOVhISmNibHgwWEhSY2RGeDBmU2tzWEhKY2JseDBYSFJjZEdaaGJITmxYSEpjYmx4MFhIUXBPMXh5WEc1Y2NseHVYSFJjZEdaMWJtTjBhVzl1SUdOb1pXTnJTVzV3ZFhSektDa2dlMXh5WEc1Y2RGeDBYSFJqYjI1emRDQnVZVzFsVm1Gc2RXVWdQU0J1WVcxbExuWmhiSFZsTG5SeWFXMG9LVHRjY2x4dVhIUmNkRngwWTI5dWMzUWdaVzFoYVd4V1lXeDFaU0E5SUdWdFlXbHNMblpoYkhWbExuUnlhVzBvS1R0Y2NseHVYSFJjZEZ4MFkyOXVjM1FnYldWemMyRm5aVlpoYkhWbElEMGdiV1Z6YzJGblpTNTJZV3gxWlM1MGNtbHRLQ2s3WEhKY2JseHlYRzVjZEZ4MFhIUnBaaUFvYm1GdFpWWmhiSFZsSUQwOVBTQW5KeWtnZTF4eVhHNWNkRngwWEhSY2RITmxkRVZ5Y205eVJtOXlLRzVoYldVc0lDZFFiR1ZoYzJVZ1pXNTBaWElnZVc5MWNpQm1kV3hzSUc1aGJXVW5LVHRjY2x4dVhIUmNkRngwZlNCbGJITmxJSHRjY2x4dVhIUmNkRngwWEhSelpYUlRkV05qWlhOelJtOXlLRzVoYldVcE8xeHlYRzVjZEZ4MFhIUjlYSEpjYmx4eVhHNWNkRngwWEhScFppQW9aVzFoYVd4V1lXeDFaU0E5UFQwZ0p5Y3BJSHRjY2x4dVhIUmNkRngwWEhSelpYUkZjbkp2Y2tadmNpaGxiV0ZwYkN3Z0oxQnNaV0Z6WlNCbGJuUmxjaUI1YjNWeUlHVnRZV2xzSUdGa1pISmxjM01uS1R0Y2NseHVYSFJjZEZ4MGZTQmxiSE5sSUdsbUlDZ2haVzFoYVd4SmMxWmhiR2xrS0dWdFlXbHNWbUZzZFdVcEtTQjdYSEpjYmx4MFhIUmNkRngwYzJWMFJYSnliM0pHYjNJb1pXMWhhV3dzSUNkRmJXRnBiQ0JwY3lCdWIzUWdkbUZzYVdRbktUdGNjbHh1WEhSY2RGeDBmU0JsYkhObElIdGNjbHh1WEhSY2RGeDBYSFJ6WlhSVGRXTmpaWE56Um05eUtHVnRZV2xzS1R0Y2NseHVYSFJjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkRngwYVdZZ0tHMWxjM05oWjJWV1lXeDFaU0E5UFQwZ0p5Y3BJSHRjY2x4dVhIUmNkRngwWEhSelpYUkZjbkp2Y2tadmNpaHRaWE56WVdkbExDQW5VR3hsWVhObElHVnVkR1Z5SUhsdmRYSWdiV1Z6YzJGblpTY3BPMXh5WEc1Y2RGeDBYSFI5SUdWc2MyVWdlMXh5WEc1Y2RGeDBYSFJjZEhObGRGTjFZMk5sYzNOR2IzSW9iV1Z6YzJGblpTazdYSEpjYmx4MFhIUmNkSDFjY2x4dVhISmNibHgwWEhSY2RHbG1JQ2hjY2x4dVhIUmNkRngwWEhSdVlXMWxWbUZzZFdVZ1BUMDlJQ2NuSUh4OFhISmNibHgwWEhSY2RGeDBaVzFoYVd4V1lXeDFaU0E5UFQwZ0p5Y2dmSHhjY2x4dVhIUmNkRngwWEhSdFpYTnpZV2RsVm1Gc2RXVWdQVDA5SUNjbklIeDhYSEpjYmx4MFhIUmNkRngwSVdWdFlXbHNTWE5XWVd4cFpDaGxiV0ZwYkZaaGJIVmxLVnh5WEc1Y2RGeDBYSFFwSUh0Y2NseHVYSFJjZEZ4MFhIUnlaWFIxY200Z1ptRnNjMlU3WEhKY2JseDBYSFJjZEgwZ1pXeHpaU0I3WEhKY2JseDBYSFJjZEZ4MGNtVjBkWEp1SUhSeWRXVTdYSEpjYmx4MFhIUmNkSDFjY2x4dVhIUmNkSDFjY2x4dVhISmNibHgwWEhSbWRXNWpkR2x2YmlCelpYUkZjbkp2Y2tadmNpaHBibkIxZEN3Z2JXVnpjMkZuWlNrZ2UxeHlYRzVjZEZ4MFhIUmpiMjV6ZENCbWIzSnRJRDBnYVc1d2RYUXVjR0Z5Wlc1MFJXeGxiV1Z1ZER0Y2NseHVYSFJjZEZ4MFkyOXVjM1FnYzIxaGJHd2dQU0JtYjNKdExuRjFaWEo1VTJWc1pXTjBiM0lvSjNOdFlXeHNKeWs3WEhKY2JseHlYRzVjZEZ4MFhIUnpiV0ZzYkM1cGJtNWxjbFJsZUhRZ1BTQnRaWE56WVdkbE8xeHlYRzVjZEZ4MFhIUm1iM0p0TG1Oc1lYTnpUbUZ0WlNBOUlDZG1iM0p0WDE5bmNtOTFjQ0JsY25KdmNpYzdYSEpjYmx4MFhIUjlYSEpjYmx4eVhHNWNkRngwWm5WdVkzUnBiMjRnYzJWMFUzVmpZMlZ6YzBadmNpaHBibkIxZENrZ2UxeHlYRzVjZEZ4MFhIUmpiMjV6ZENCbWIzSnRJRDBnYVc1d2RYUXVjR0Z5Wlc1MFJXeGxiV1Z1ZER0Y2NseHVYSFJjZEZ4MFptOXliUzVqYkdGemMwNWhiV1VnUFNBblptOXliVjlmWjNKdmRYQWdjM1ZqWTJWemN5YzdYSEpjYmx4MFhIUjlYSEpjYmx4eVhHNWNkRngwWm5WdVkzUnBiMjRnWlcxaGFXeEpjMVpoYkdsa0tHVnRZV2xzS1NCN1hISmNibHgwWEhSY2RHTnZibk4wSUhKbElEMGdMMTRvS0Z0ZVBENG9LVnhjVzF4Y1hWeGNYRnd1TERzNlhGeHpRRndpWFNzb1hGd3VXMTQ4UGlncFhGeGJYRnhkWEZ4Y1hDNHNPenBjWEhOQVhDSmRLeWtxS1h3b1hDSXVLMXdpS1NsQUtDaGNYRnRiTUMwNVhYc3hMRE45WEZ3dVd6QXRPVjE3TVN3emZWeGNMbHN3TFRsZGV6RXNNMzFjWEM1Yk1DMDVYWHN4TEROOVhTbDhLQ2hiWVMxNlFTMWFYRnd0TUMwNVhTdGNYQzRwSzF0aExYcEJMVnBkZXpJc2ZTa3BKQzh1ZEdWemRDaGNjbHh1WEhSY2RGeDBYSFJsYldGcGJGeHlYRzVjZEZ4MFhIUXBPMXh5WEc1Y2NseHVYSFJjZEZ4MGNtVjBkWEp1SUhKbE8xeHlYRzVjZEZ4MGZWeHlYRzVjZEgxY2NseHVmU2s3WEhKY2JpSXNJbVJ2WTNWdFpXNTBMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMFJQVFVOdmJuUmxiblJNYjJGa1pXUW5MQ0JtZFc1amRHbHZiaUFvS1NCN1hHNWNkSGRwYm1SdmR5NWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZHNiMkZrSnl3Z0tHVXBJRDArSUh0Y2JseDBYSFJqYjI1emRDQndjbVZzYjJGa0lEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkxuQnlaV3h2WVdRbktUdGNibHh1WEhSY2RIQnlaV3h2WVdRdVkyeGhjM05NYVhOMExtRmtaQ2duY0hKbGJHOWhaQzFtYVc1cGMyaGxaQ2NwTzF4dVhIUjlLVHRjYmx4dVhIUmpiMjV6ZENCaWRHNVRZM0p2Ykd4VWIxUnZjQ0E5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2RpZEc1VFkzSnZiR3hVYjFSdmNDY3BPMXh1WEhSaWRHNVRZM0p2Ykd4VWIxUnZjQzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RqYkdsamF5Y3NJQ2hsS1NBOVBpQjdYRzVjZEZ4MGQybHVaRzkzTG5OamNtOXNiRlJ2S0h0Y2JseDBYSFJjZEhSdmNEb2dNQ3hjYmx4MFhIUmNkR3hsWm5RNklEQXNYRzVjZEZ4MFhIUmlaV2hoZG1sdmNqb2dKM050YjI5MGFDY3NYRzVjZEZ4MGZTazdYRzVjZEgwcE8xeHVYRzVjZEdOdmJuTjBJR1Y0Y0dGdVpITk5iM0psSUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZja0ZzYkNnblcyVjRjR0Z1WkMxdGIzSmxYU2NwTzF4dVhHNWNkR1oxYm1OMGFXOXVJR1Y0Y0dGdVpDZ3BJSHRjYmx4MFhIUmpiMjV6ZENCemFHOTNRMjl1ZEdWdWRDQTlJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJDZVVsa0tIUm9hWE11WkdGMFlYTmxkQzUwWVhKblpYUXBPMXh1WEhSY2RHbG1JQ2h6YUc5M1EyOXVkR1Z1ZEM1amJHRnpjMHhwYzNRdVkyOXVkR0ZwYm5Nb0oyRmpkR2wyWlNjcEtTQjdYRzVjZEZ4MFhIUjBhR2x6TG1sdWJtVnlTRlJOVENBOUlIUm9hWE11WkdGMFlYTmxkQzV6YUc5M2RHVjRkRHRjYmx4MFhIUjlJR1ZzYzJVZ2UxeHVYSFJjZEZ4MGRHaHBjeTVwYm01bGNraFVUVXdnUFNCMGFHbHpMbVJoZEdGelpYUXVhR2xrWlhSbGVIUTdYRzVjZEZ4MGZWeHVYRzVjZEZ4MGMyaHZkME52Ym5SbGJuUXVZMnhoYzNOTWFYTjBMblJ2WjJkc1pTZ25ZV04wYVhabEp5azdYRzVjZEZ4MGFXWWdLSE5vYjNkRGIyNTBaVzUwTG1Oc1lYTnpUR2x6ZEM1amIyNTBZV2x1Y3lnbllXTjBhWFpsSnlrcElIdGNibHgwWEhSY2RITm9iM2REYjI1MFpXNTBMbk4wZVd4bExtMWhlRWhsYVdkb2RDQTlJSE5vYjNkRGIyNTBaVzUwTG5OamNtOXNiRWhsYVdkb2RDQXJJQ2R3ZUNjN1hHNWNkRngwZlNCbGJITmxJSHRjYmx4MFhIUmNkSE5vYjNkRGIyNTBaVzUwTG5OMGVXeGxMbTFoZUVobGFXZG9kQ0E5SURJd0lDc2dKM0I0Snp0Y2JseDBYSFI5WEc1Y2RIMWNibHh1WEhSbGVIQmhibVJ6VFc5eVpTNW1iM0pGWVdOb0tDaGlkRzRwSUQwK0lIdGNibHgwWEhSaWRHNHVZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25ZMnhwWTJzbkxDQmxlSEJoYm1RcE8xeHVYSFI5S1R0Y2JuMHBPMXh1SWl3aVpHOWpkVzFsYm5RdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblJFOU5RMjl1ZEdWdWRFeHZZV1JsWkNjc0lHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhIUmpiMjV6ZENCdVlYWkRiMjUwWVdsdVpYSWdQU0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDZ25ibUYyTFdOdmJuUmhhVzVsY2ljcE8xeHlYRzVjZEdOdmJuTjBJRzFsYm5WQ2RHNGdQU0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDZ25iV1Z1ZFMxaWRHNG5LVHRjY2x4dVhIUmpiMjV6ZENCdVlYWk1hWE4wSUQwZ1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvSjI1aGRpMXNhWE4wSnlrN1hISmNibHh5WEc1Y2RIZHBibVJ2ZHk1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkelkzSnZiR3duTENBb1pTa2dQVDRnZTF4eVhHNWNkRngwYVdZZ0tHUnZZM1Z0Wlc1MExtUnZZM1Z0Wlc1MFJXeGxiV1Z1ZEM1elkzSnZiR3hVYjNBZ1BpQXdLU0I3WEhKY2JseDBYSFJjZEc1aGRrTnZiblJoYVc1bGNpNWpiR0Z6YzB4cGMzUXVZV1JrS0NkemRHbGphM2tuS1R0Y2NseHVYSFJjZEZ4MFluUnVVMk55YjJ4c1ZHOVViM0F1YzNSNWJHVXViM0JoWTJsMGVTQTlJREU3WEhKY2JseDBYSFI5SUdWc2MyVWdlMXh5WEc1Y2RGeDBYSFJ1WVhaRGIyNTBZV2x1WlhJdVkyeGhjM05NYVhOMExuSmxiVzkyWlNnbmMzUnBZMnQ1SnlrN1hISmNibHgwWEhSY2RHSjBibE5qY205c2JGUnZWRzl3TG5OMGVXeGxMbTl3WVdOcGRIa2dQU0F3TzF4eVhHNWNkRngwZlZ4eVhHNWNkSDBwTzF4eVhHNWNjbHh1WEhSdFpXNTFRblJ1TG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjJOc2FXTnJKeXdnS0dVcElEMCtJSHRjY2x4dVhIUmNkRzFsYm5WQ2RHNHVZMnhoYzNOTWFYTjBMblJ2WjJkc1pTZ25ZMnhwWTJ0bFpDY3BPMXh5WEc1Y2RGeDBibUYyUTI5dWRHRnBibVZ5TG1Oc1lYTnpUR2x6ZEM1MGIyZG5iR1VvSjI5MlpYSnNZWGtuS1R0Y2NseHVYSFJjZEc1aGRreHBjM1F1WTJ4aGMzTk1hWE4wTG5SdloyZHNaU2duYzJodmR5Y3BPMXh5WEc1Y2RIMHBPMXh5WEc1OUtUdGNjbHh1SWl3aVpHOWpkVzFsYm5RdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblJFOU5RMjl1ZEdWdWRFeHZZV1JsWkNjc0lHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhIUXZMeUJqWVhKdmRYTmxiRnh5WEc1Y2RHTnZibk4wSUdOaGNtOTFjMlZzSUQwZ1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvSjJOaGNtOTFjMlZzSnlrN1hISmNibHgwWTI5dWMzUWdjSEpsZGtKMGJpQTlJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJDZVVsa0tDZHdjbVYySnlrN1hISmNibHgwWTI5dWMzUWdibVY0ZEVKMGJpQTlJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJDZVVsa0tDZHVaWGgwSnlrN1hISmNibHgwWTI5dWMzUWdZMkZ5YjNWelpXeFZjbXdnUFNBbkxpOXFjeTlqWVhKdmRYTmxiQzVxYzI5dUp6dGNjbHh1WEhKY2JseDBiR1YwSUdacGNuTjBVMnhwWkdVN1hISmNibHgwYkdWMElHeGhjM1JUYkdsa1pUdGNjbHh1WEhKY2JseDBablZ1WTNScGIyNGdaMlYwU25OdmJrUmhkR0VvS1NCN1hISmNibHgwWEhSeVpYUjFjbTRnYm1WM0lGQnliMjFwYzJVb0tISmxjMjlzZG1Vc0lISmxhbVZqZENrZ1BUNGdlMXh5WEc1Y2RGeDBYSFJtWlhSamFDaGpZWEp2ZFhObGJGVnliQ2xjY2x4dVhIUmNkRngwWEhRdWRHaGxiaWdvY21WemNDa2dQVDRnY21WemNDNXFjMjl1S0NrcFhISmNibHgwWEhSY2RGeDBMblJvWlc0b0tHUmhkR0VwSUQwK0lISmxjMjlzZG1Vb1pHRjBZU2twWEhKY2JseDBYSFJjZEZ4MExtTmhkR05vS0NobGNuSXBJRDArSUhKbGFtVmpkQ2hsY25JcEtUdGNjbHh1WEhSY2RIMHBPMXh5WEc1Y2RIMWNjbHh1WEhKY2JseDBZWE41Ym1NZ1puVnVZM1JwYjI0Z1pHbHpjR3hoZVVOaGNtOTFjMlZzS0NrZ2UxeHlYRzVjZEZ4MFkyOXVjM1FnWkdGMFlVeHBjM1FnUFNCaGQyRnBkQ0JuWlhSS2MyOXVSR0YwWVNncE8xeHlYRzVjZEZ4MFkyOXVjM1FnYzJ4cFpHVnpRWEp5WVhrZ1BTQmtZWFJoVEdsemRDNXpiR2xrWlhNN1hISmNibHh5WEc1Y2RGeDBjMnhwWkdWelFYSnlZWGt1Wm05eVJXRmphQ2dvYzJ4cFpHVXNJSE5zYVdSbFRuVnRZbVZ5S1NBOVBpQjdYSEpjYmx4MFhIUmNkRzVsZDFOc2FXUmxJRDBnWkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDZ25aR2wySnlrN1hISmNibHgwWEhSY2RHNWxkMU5zYVdSbExtTnNZWE56VEdsemRDNWhaR1FvSjJOaGNtOTFjMlZzWDE5emJHbGtaU2NwTzF4eVhHNWNjbHh1WEhSY2RGeDBibVYzVTJ4cFpHVXVhVzV1WlhKSVZFMU1JRDBnWUZ4eVhHNWNkRngwWEhSY2RGeDBYSFE4WkdsMklHTnNZWE56UFZ3aVkyRnliM1Z6Wld4ZlgybHRZV2RsTFdOdmJuUmhhVzVsY2x3aVBseHlYRzVjZEZ4MFhIUmNkRngwWEhSY2REeHBiV2NnYzNKalBWd2lKSHR6Ykdsa1pTNXBiV0ZuWlgxY0lpQmhiSFE5WENKemJHbGtaUzFwYldkY0lpQXZQbHh5WEc1Y2RGeDBYSFJjZEZ4MFhIUThMMlJwZGo1Y2NseHVYSFJjZEZ4MFhIUmNkRngwUEdScGRpQmpiR0Z6Y3oxY0ltTmhjbTkxYzJWc1gxOWpiMjUwWlc1MFhDSStYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBQR2d4SUdOc1lYTnpQVndpWTJGeWIzVnpaV3hmWDNScGRHeGxYQ0krSkh0emJHbGtaUzUwYVhSc1pYMDhMMmd4UGx4eVhHNWNkRngwWEhSY2RGeDBYSFJjZER4d0lHTnNZWE56UFZ3aVkyRnliM1Z6Wld4ZlgyUmxjMk5jSWo0a2UzTnNhV1JsTG1OdmJuUmxiblI5UEM5d1BseHlYRzVjZEZ4MFhIUmNkRngwWEhSY2REeGlkWFIwYjI0Z1kyeGhjM005WENKb1pXRmtaWEpmWDI1aGRpMWtiMjVoZEdVdFluUnVJR0oxZEhSdmJsd2lQbHh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRngwUkhWbmJXVWdlbUVnYm1YRm9YUnZYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBQQzlpZFhSMGIyNCtYSEpjYmx4MFhIUmNkRngwWEhSY2REd3ZaR2wyUGx4eVhHNWNkRngwWEhSZ08xeHlYRzVjY2x4dVhIUmNkRngwWTJGeWIzVnpaV3d1WVhCd1pXNWtRMmhwYkdRb2JtVjNVMnhwWkdVcE8xeHlYRzVjY2x4dVhIUmNkRngwYVdZZ0tITnNhV1JsVG5WdFltVnlJRDA5UFNBd0tTQjdYSEpjYmx4MFhIUmNkRngwWm1seWMzUlRiR2xrWlNBOUlHNWxkMU5zYVdSbE8xeHlYRzVjZEZ4MFhIUmNkRzVsZDFOc2FXUmxMbU5zWVhOelRHbHpkQzVoWkdRb0oyRmpkR2wyWlNjcE8xeHlYRzVjZEZ4MFhIUjlJR1ZzYzJVZ2FXWWdLSE5zYVdSbFRuVnRZbVZ5SUNzZ01TQTlQVDBnWkdGMFlVeHBjM1F1YzJ4cFpHVnpMbXhsYm1kMGFDa2dlMXh5WEc1Y2RGeDBYSFJjZEd4aGMzUlRiR2xrWlNBOUlHNWxkMU5zYVdSbE8xeHlYRzVjZEZ4MFhIUjlYSEpjYmx4MFhIUjlLVHRjY2x4dVhISmNibHgwWEhSdVpYaDBVMnhwWkdVb0tUdGNjbHh1WEhSY2RIQnlaWFpwYjNWelUyeHBaR1VvS1R0Y2NseHVYSFI5WEhKY2JseHlYRzVjZEdaMWJtTjBhVzl1SUc1bGVIUlRiR2xrWlNncElIdGNjbHh1WEhSY2RHTnZibk4wSUc1bGVIUkNkRzRnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2duYm1WNGRDY3BPMXh5WEc1Y2NseHVYSFJjZEc1bGVIUkNkRzR1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduWTJ4cFkyc25MQ0FvWlNrZ1BUNGdlMXh5WEc1Y2RGeDBYSFJqYjI1emRDQmhZM1JwZG1WVGJHbGtaU0E5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9KeTVqWVhKdmRYTmxiRjlmYzJ4cFpHVXVZV04wYVhabEp5azdYSEpjYmx4eVhHNWNkRngwWEhSc1pYUWdibVY0ZEZOcFlteHBibWNnUFNCaFkzUnBkbVZUYkdsa1pTNXVaWGgwUld4bGJXVnVkRk5wWW14cGJtYzdYSEpjYmx4eVhHNWNkRngwWEhScFppQW9ibVY0ZEZOcFlteHBibWNnUFQwZ2JuVnNiQ2tnZTF4eVhHNWNkRngwWEhSY2RHNWxlSFJUYVdKc2FXNW5JRDBnWVdOMGFYWmxVMnhwWkdVN1hISmNibHgwWEhSY2RIMWNjbHh1WEhKY2JseDBYSFJjZEdsbUlDaHVaWGgwVTJsaWJHbHVaeTVqYkdGemMweHBjM1F1WTI5dWRHRnBibk1vSjJOaGNtOTFjMlZzWDE5emJHbGtaU2NwS1NCN1hISmNibHgwWEhSY2RGeDBZV04wYVhabFUyeHBaR1V1WTJ4aGMzTk1hWE4wTG5KbGJXOTJaU2duWVdOMGFYWmxKeWs3WEhKY2JseDBYSFJjZEZ4MGJtVjRkRk5wWW14cGJtY3VZMnhoYzNOTWFYTjBMbUZrWkNnbllXTjBhWFpsSnlrN1hISmNibHgwWEhSY2RIMWNjbHh1WEhSY2RIMHBPMXh5WEc1Y2RIMWNjbHh1WEhKY2JseDBablZ1WTNScGIyNGdjSEpsZG1sdmRYTlRiR2xrWlNncElIdGNjbHh1WEhSY2RHTnZibk4wSUhCeVpYWkNkRzRnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2duY0hKbGRpY3BPMXh5WEc1Y2NseHVYSFJjZEhCeVpYWkNkRzR1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduWTJ4cFkyc25MQ0FvWlNrZ1BUNGdlMXh5WEc1Y2RGeDBYSFJqYjI1emRDQmhZM1JwZG1WVGJHbGtaU0E5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9KeTVqWVhKdmRYTmxiRjlmYzJ4cFpHVXVZV04wYVhabEp5azdYSEpjYmx4eVhHNWNkRngwWEhSc1pYUWdibVY0ZEZOcFlteHBibWNnUFNCaFkzUnBkbVZUYkdsa1pTNXdjbVYyYVc5MWMwVnNaVzFsYm5SVGFXSnNhVzVuTzF4eVhHNWNjbHh1WEhSY2RGeDBhV1lnS0c1bGVIUlRhV0pzYVc1bklEMDlJRzUxYkd3cElIdGNjbHh1WEhSY2RGeDBYSFJ1WlhoMFUybGliR2x1WnlBOUlHRmpkR2wyWlZOc2FXUmxPMXh5WEc1Y2RGeDBYSFI5WEhKY2JseHlYRzVjZEZ4MFhIUnBaaUFvYm1WNGRGTnBZbXhwYm1jdVkyeGhjM05NYVhOMExtTnZiblJoYVc1ektDZGpZWEp2ZFhObGJGOWZjMnhwWkdVbktTa2dlMXh5WEc1Y2RGeDBYSFJjZEdGamRHbDJaVk5zYVdSbExtTnNZWE56VEdsemRDNXlaVzF2ZG1Vb0oyRmpkR2wyWlNjcE8xeHlYRzVjZEZ4MFhIUmNkRzVsZUhSVGFXSnNhVzVuTG1Oc1lYTnpUR2x6ZEM1aFpHUW9KMkZqZEdsMlpTY3BPMXh5WEc1Y2RGeDBYSFI5WEhKY2JseDBYSFI5S1R0Y2NseHVYSFI5WEhKY2JseHlYRzVjZEdsbUlDaGpZWEp2ZFhObGJDQWhQVDBnYm5Wc2JDa2dlMXh5WEc1Y2RGeDBLR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVYSFJjZEZ4MFpHbHpjR3hoZVVOaGNtOTFjMlZzS0NrN1hISmNibHgwWEhSOUtTZ3BPMXh5WEc1Y2RIMWNjbHh1ZlNrN1hISmNiaUlzSW5kcGJtUnZkeTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RFVDAxRGIyNTBaVzUwVEc5aFpHVmtKeXdnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjZEM4dklIUmhZbk5jY2x4dVhIUmpiMjV6ZENCMFlXSk1hWE4wUW5SdUlEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2tGc2JDZ25MblJoWW1OamIzSmthVzl1WDE5c2FYTjBMV0owYmljcE8xeHlYRzVjZEdOdmJuTjBJSFJoWW5NZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5UVd4c0tDY3VkR0ZpWTJOdmNtUnBiMjVmWDJOdmJuUmhhVzVsY2ljcE8xeHlYRzVjZEdOdmJuTjBJSFJoWW1OamIzSmthVzl1VEdsemRDQTlJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJDZVVsa0tDZDBZV0pqWTI5eVpHbHZiaTFzYVhOMEp5azdYSEpjYmx4MFkyOXVjM1FnZEdGaWMwTnZiblJsYm5RZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5UVd4c0tDY3VkR0ZpWTJOdmNtUnBiMjVmWDNSaFlpMXBibTVsY2ljcE8xeHlYRzVjZEdOdmJuTjBJSFJoWW1OamIzSmthVzl1SUQwZ1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvSjNSaFltTmpiM0prYVc5dUp5azdYSEpjYmx4eVhHNWNkR1oxYm1OMGFXOXVJR0ZqZEdsMllYUmxWR0ZpY3lncElIdGNjbHh1WEhSY2RIUmhZa3hwYzNSQ2RHNHVabTl5UldGamFDZ29kR0ZpS1NBOVBpQjdYSEpjYmx4MFhIUmNkSFJoWWk1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkamJHbGpheWNzSUNobEtTQTlQaUI3WEhKY2JseDBYSFJjZEZ4MFkyOXVjM1FnZEdGaVRtRjJJRDBnZEdGaUxuQmhjbVZ1ZEVWc1pXMWxiblE3WEhKY2JseDBYSFJjZEZ4MFkyOXVjM1FnZEdGaWMwTnZiblJoYVc1bGNpQTlJSFJoWWs1aGRpNXdZWEpsYm5SRmJHVnRaVzUwTG5CaGNtVnVkRVZzWlcxbGJuUTdYSEpjYmx4MFhIUmNkRngwWTI5dWMzUWdkR0ZpVG5WdFltVnlJRDBnZEdGaUxtUmhkR0Z6WlhRdVptOXlWR0ZpTzF4eVhHNWNkRngwWEhSY2RHTnZibk4wSUhSaFlsUnZRV04wYVhaaGRHVWdQU0IwWVdKelEyOXVkR0ZwYm1WeUxuRjFaWEo1VTJWc1pXTjBiM0lvWEhKY2JseDBYSFJjZEZ4MFhIUmdMblJoWW1OamIzSmthVzl1WDE5MFlXSmJaR0YwWVMxMFlXSTlYQ0lrZTNSaFlrNTFiV0psY24xY0lsMWdYSEpjYmx4MFhIUmNkRngwS1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwZEdGaVRtRjJMbkYxWlhKNVUyVnNaV04wYjNKQmJHd29KeTUwWVdKalkyOXlaR2x2Ymw5ZmJHbHpkQzFpZEc0bktTNW1iM0pGWVdOb0tDaGlkRzRwSUQwK0lIdGNjbHh1WEhSY2RGeDBYSFJjZEdKMGJpNWpiR0Z6YzB4cGMzUXVjbVZ0YjNabEtDZGpkWEp5Wlc1MEp5azdYSEpjYmx4MFhIUmNkRngwZlNrN1hISmNibHh5WEc1Y2RGeDBYSFJjZEhSaFluTkRiMjUwWVdsdVpYSXVjWFZsY25sVFpXeGxZM1J2Y2tGc2JDZ25MblJoWW1OamIzSmthVzl1WDE5MFlXSW5LUzVtYjNKRllXTm9LQ2gwWVdJcElEMCtJSHRjY2x4dVhIUmNkRngwWEhSY2RIUmhZaTVqYkdGemMweHBjM1F1Y21WdGIzWmxLQ2RqZFhKeVpXNTBKeWs3WEhKY2JseDBYSFJjZEZ4MGZTazdYSEpjYmx4eVhHNWNkRngwWEhSY2RIUmhZaTVqYkdGemMweHBjM1F1WVdSa0tDZGpkWEp5Wlc1MEp5azdYSEpjYmx4MFhIUmNkRngwZEdGaVZHOUJZM1JwZG1GMFpTNWpiR0Z6YzB4cGMzUXVZV1JrS0NkamRYSnlaVzUwSnlrN1hISmNibHh5WEc1Y2RGeDBYSFJjZEdsbUlDaDNhVzVrYjNjdWFXNXVaWEpYYVdSMGFDQStQU0EyTURBcElIdGNjbHh1WEhSY2RGeDBYSFJjZEhSaFluTkRiMjUwWlc1MExtWnZja1ZoWTJnb0tIUmhZbk1wSUQwK0lIdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MGRHRmljeTV6ZEhsc1pTNXRZWGhJWldsbmFIUWdQU0IwWVdKekxuTmpjbTlzYkVobGFXZG9kQ0FySUNkd2VDYzdYSEpjYmx4MFhIUmNkRngwWEhSOUtUdGNjbHh1WEhSY2RGeDBYSFI5WEhKY2JseDBYSFJjZEgwcE8xeHlYRzVjZEZ4MGZTazdYSEpjYmx4eVhHNWNkRngwYVdZZ0tIUmhZbU5qYjNKa2FXOXVUR2x6ZENrZ2UxeHlYRzVjZEZ4MFhIUjBZV0p6TG1admNrVmhZMmdvS0hSaFlpa2dQVDRnZTF4eVhHNWNkRngwWEhSY2RIUmhZaTV4ZFdWeWVWTmxiR1ZqZEc5eUtDY3VkR0ZpWTJOdmNtUnBiMjVmWDJ4cGMzUWdMblJoWW1OamIzSmthVzl1WDE5aWRHNG5LUzVqYkdsamF5Z3BPMXh5WEc1Y2RGeDBYSFI5S1R0Y2NseHVYSFJjZEgxY2NseHVYSEpjYmx4MFhIUjNhVzVrYjNjdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnbmNtVnphWHBsSnl3Z0tHVXBJRDArSUh0Y2NseHVYSFJjZEZ4MGFXWWdLSGRwYm1SdmR5NXBibTVsY2xkcFpIUm9JRDQ5SURZd01Da2dlMXh5WEc1Y2RGeDBYSFJjZEdGamRHbDJZWFJsVkdGaWN5Z3BPMXh5WEc1Y2RGeDBYSFI5WEhKY2JseDBYSFI5S1R0Y2NseHVYSFI5WEhKY2JseHlYRzVjZEM4dkx5OHZJR0ZqWTI5eVpHbHZibHh5WEc1Y2RHTnZibk4wSUdGalkyOXlaR2x2YmtKMGJpQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNKQmJHd29KeTVoWTJOdmNtUnBiMjVmWDJ4cGMzUXRZblJ1SnlrN1hISmNibHh5WEc1Y2RHWjFibU4wYVc5dUlHRmpkR2wyWVhSbFFXTmpiM0prYVc5dUtDa2dlMXh5WEc1Y2RGeDBZV05qYjNKa2FXOXVRblJ1TG1admNrVmhZMmdvS0dKMGJpa2dQVDRnZTF4eVhHNWNkRngwWEhSaWRHNHVZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25ZMnhwWTJzbkxDQW9LU0E5UGlCN1hISmNibHgwWEhSY2RGeDBMeThnWTJobFkyc2dabTl5SUc5d1pXNGdZV05qYjNKa2FXOXVYSEpjYmx4MFhIUmNkRngwWTI5dWMzUWdZV05qYjNKa2FXOXVRblJ1VDNCbGJpQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb1hISmNibHgwWEhSY2RGeDBYSFFuTG1GalkyOXlaR2x2Ymw5ZmJHbHpkQzFpZEc0dWIzQmxiaWRjY2x4dVhIUmNkRngwWEhRcE8xeHlYRzVjY2x4dVhIUmNkRngwWEhScFppQW9ZV05qYjNKa2FXOXVRblJ1VDNCbGJpQW1KaUJoWTJOdmNtUnBiMjVDZEc1UGNHVnVJQ0U5UFNCaWRHNHBJSHRjY2x4dVhIUmNkRngwWEhSY2RDOHZJR2xtSUhSb1pYSmxJR2x6SUc5d1pXNGdkR2hsYmlCeVpXMXZkbVVnYjNCbGJpQmpiR0Z6Y3lCaGJtUWdjMlYwSUcxaGVHaGxhV2RvZENCMGJ5QXdYSEpjYmx4MFhIUmNkRngwWEhSaFkyTnZjbVJwYjI1Q2RHNVBjR1Z1TG1Oc1lYTnpUR2x6ZEM1MGIyZG5iR1VvSjI5d1pXNG5LVHRjY2x4dVhIUmNkRngwWEhSY2RHRmpZMjl5WkdsdmJrSjBiazl3Wlc0dWJtVjRkRVZzWlcxbGJuUlRhV0pzYVc1bkxuTjBlV3hsTG0xaGVFaGxhV2RvZENBOUlEQTdYSEpjYmx4MFhIUmNkRngwZlZ4eVhHNWNjbHh1WEhSY2RGeDBYSFF2THlCelpYUWdiM0JsYmlCamJHRnpjeUIwYnlCbGRtVnllU0JqYkdsamEyVmtJR0ZqWTI5eVpHbHZiaUJpZEc1Y2NseHVYSFJjZEZ4MFhIUmlkRzR1WTJ4aGMzTk1hWE4wTG5SdloyZHNaU2duYjNCbGJpY3BPMXh5WEc1Y2RGeDBYSFJjZEdOdmJuTjBJR0ZqWTI5eVpHbHZia0p2WkhrZ1BTQmlkRzR1Ym1WNGRFVnNaVzFsYm5SVGFXSnNhVzVuTzF4eVhHNWNjbHh1WEhSY2RGeDBYSFJwWmlBb1luUnVMbU5zWVhOelRHbHpkQzVqYjI1MFlXbHVjeWduYjNCbGJpY3BLU0I3WEhKY2JseDBYSFJjZEZ4MFhIUmhZMk52Y21ScGIyNUNiMlI1TG5OMGVXeGxMbTFoZUVobGFXZG9kQ0E5SUdGalkyOXlaR2x2YmtKdlpIa3VjMk55YjJ4c1NHVnBaMmgwSUNzZ0ozQjRKenRjY2x4dVhIUmNkRngwWEhSOUlHVnNjMlVnZTF4eVhHNWNkRngwWEhSY2RGeDBZV05qYjNKa2FXOXVRbTlrZVM1emRIbHNaUzV0WVhoSVpXbG5hSFFnUFNBd08xeHlYRzVjZEZ4MFhIUmNkSDFjY2x4dVhIUmNkRngwZlNrN1hISmNibHgwWEhSOUtUdGNjbHh1WEhKY2JseDBYSFIzYVc1a2IzY3VZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25jbVZ6YVhwbEp5d2dLR1VwSUQwK0lIdGNjbHh1WEhSY2RGeDBhV1lnS0hkcGJtUnZkeTVwYm01bGNsZHBaSFJvSUR3Z05qQXdLU0I3WEhKY2JseDBYSFJjZEZ4MGRHRmljME52Ym5SbGJuUXVabTl5UldGamFDZ29kR0ZpY3lrZ1BUNGdlMXh5WEc1Y2RGeDBYSFJjZEZ4MGRHRmljeTV6ZEhsc1pTNXRZWGhJWldsbmFIUWdQU0F3TzF4eVhHNWNkRngwWEhSY2RGeDBhV1lnS0hSaFluTXVjSEpsZG1sdmRYTkZiR1Z0Wlc1MFUybGliR2x1Wnk1amJHRnpjMHhwYzNRdVkyOXVkR0ZwYm5Nb0oyOXdaVzRuS1NrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhSMFlXSnpMbkJ5WlhacGIzVnpSV3hsYldWdWRGTnBZbXhwYm1jdVkyeGhjM05NYVhOMExuSmxiVzkyWlNnbmIzQmxiaWNwTzF4eVhHNWNkRngwWEhSY2RGeDBmVnh5WEc1Y2RGeDBYSFJjZEgwcE8xeHlYRzVjZEZ4MFhIUjlYSEpjYmx4MFhIUjlLVHRjY2x4dVhIUjlYSEpjYmx4eVhHNWNkR2xtSUNoMFlXSmpZMjl5WkdsdmJpa2dlMXh5WEc1Y2RGeDBZV04wYVhaaGRHVlVZV0p6S0NrN1hISmNibHgwWEhSaFkzUnBkbUYwWlVGalkyOXlaR2x2YmlncE8xeHlYRzVjZEgxY2NseHVmU2s3WEhKY2JpSmRMQ0p6YjNWeVkyVlNiMjkwSWpvaUluMD0ifQ==
