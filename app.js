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
/*!******************************************************************************************************************************************!*\
  !*** multi ./src/js/fetchData.js ./src/js/formValidaiton.js ./src/js/main.js ./src/js/nav.js ./src/js/slider.js ./src/js/tabccordion.js ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\Front-end projects\DobraNadaAzil\src\js\fetchData.js */"./src/js/fetchData.js");
__webpack_require__(/*! D:\Front-end projects\DobraNadaAzil\src\js\formValidaiton.js */"./src/js/formValidaiton.js");
__webpack_require__(/*! D:\Front-end projects\DobraNadaAzil\src\js\main.js */"./src/js/main.js");
__webpack_require__(/*! D:\Front-end projects\DobraNadaAzil\src\js\nav.js */"./src/js/nav.js");
__webpack_require__(/*! D:\Front-end projects\DobraNadaAzil\src\js\slider.js */"./src/js/slider.js");
module.exports = __webpack_require__(/*! D:\Front-end projects\DobraNadaAzil\src\js\tabccordion.js */"./src/js/tabccordion.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZldGNoRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZm9ybVZhbGlkYWl0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL25hdi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy90YWJjY29yZGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsNERBQTREOzs7Ozs7Ozs7Ozs7QUNBNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUMseUJBQXlCLDZCQUE2QixJQUFJLFFBQVEsSUFBSSxRQUFRLElBQUksUUFBUSxJQUFJLGdDQUFnQyxHQUFHO0FBQ2xLO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDdkZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7O0FBRUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7Ozs7Ozs7Ozs7O0FDckNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7Ozs7Ozs7Ozs7O0FDcEJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0EscUNBQXFDLFlBQVk7QUFDakQsbUNBQW1DLGNBQWM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNqR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsVUFBVTtBQUM5Qzs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLElBQUk7QUFDSixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge30pO1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG5cdC8vIGZvcm0gdmFsaWRhdGlvblxyXG5cdGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdC1mb3JtJyk7XHJcblx0Y29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJyk7XHJcblx0Y29uc3QgZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWwnKTtcclxuXHRjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lc3NhZ2UnKTtcclxuXHRjb25zdCBmb3JtQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tYnRuJyk7XHJcblxyXG5cdGlmIChmb3JtKSB7XHJcblx0XHRbXHJcblx0XHRcdCdjbGljaycsXHJcblx0XHRcdCdvbnRvdWNoc3RhcnQnLFxyXG5cdFx0XHQnbW91c2VvdmVyJyxcclxuXHRcdFx0J2tleWRvd24nLFxyXG5cdFx0XHQna2V5cHJlc3MnLFxyXG5cdFx0XHQndG91Y2hzdGFydCcsXHJcblx0XHRcdCd0b3VjaG1vdmUnLFxyXG5cdFx0XS5mb3JFYWNoKFxyXG5cdFx0XHQoZXZlbnQpID0+XHJcblx0XHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgKCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGNoZWNrSW5wdXRzKCkgPT09IGZhbHNlKSB7XHJcblx0XHRcdFx0XHRcdGZvcm1CdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Zm9ybUJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHJcblx0XHRmdW5jdGlvbiBjaGVja0lucHV0cygpIHtcclxuXHRcdFx0Y29uc3QgbmFtZVZhbHVlID0gbmFtZS52YWx1ZS50cmltKCk7XHJcblx0XHRcdGNvbnN0IGVtYWlsVmFsdWUgPSBlbWFpbC52YWx1ZS50cmltKCk7XHJcblx0XHRcdGNvbnN0IG1lc3NhZ2VWYWx1ZSA9IG1lc3NhZ2UudmFsdWUudHJpbSgpO1xyXG5cclxuXHRcdFx0aWYgKG5hbWVWYWx1ZSA9PT0gJycpIHtcclxuXHRcdFx0XHRzZXRFcnJvckZvcihuYW1lLCAnUGxlYXNlIGVudGVyIHlvdXIgZnVsbCBuYW1lJyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0U3VjY2Vzc0ZvcihuYW1lKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGVtYWlsVmFsdWUgPT09ICcnKSB7XHJcblx0XHRcdFx0c2V0RXJyb3JGb3IoZW1haWwsICdQbGVhc2UgZW50ZXIgeW91ciBlbWFpbCBhZGRyZXNzJyk7XHJcblx0XHRcdH0gZWxzZSBpZiAoIWVtYWlsSXNWYWxpZChlbWFpbFZhbHVlKSkge1xyXG5cdFx0XHRcdHNldEVycm9yRm9yKGVtYWlsLCAnRW1haWwgaXMgbm90IHZhbGlkJyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0U3VjY2Vzc0ZvcihlbWFpbCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChtZXNzYWdlVmFsdWUgPT09ICcnKSB7XHJcblx0XHRcdFx0c2V0RXJyb3JGb3IobWVzc2FnZSwgJ1BsZWFzZSBlbnRlciB5b3VyIG1lc3NhZ2UnKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRTdWNjZXNzRm9yKG1lc3NhZ2UpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoXHJcblx0XHRcdFx0bmFtZVZhbHVlID09PSAnJyB8fFxyXG5cdFx0XHRcdGVtYWlsVmFsdWUgPT09ICcnIHx8XHJcblx0XHRcdFx0bWVzc2FnZVZhbHVlID09PSAnJyB8fFxyXG5cdFx0XHRcdCFlbWFpbElzVmFsaWQoZW1haWxWYWx1ZSlcclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gc2V0RXJyb3JGb3IoaW5wdXQsIG1lc3NhZ2UpIHtcclxuXHRcdFx0Y29uc3QgZm9ybSA9IGlucHV0LnBhcmVudEVsZW1lbnQ7XHJcblx0XHRcdGNvbnN0IHNtYWxsID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdzbWFsbCcpO1xyXG5cclxuXHRcdFx0c21hbGwuaW5uZXJUZXh0ID0gbWVzc2FnZTtcclxuXHRcdFx0Zm9ybS5jbGFzc05hbWUgPSAnZm9ybV9fZ3JvdXAgZXJyb3InO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHNldFN1Y2Nlc3NGb3IoaW5wdXQpIHtcclxuXHRcdFx0Y29uc3QgZm9ybSA9IGlucHV0LnBhcmVudEVsZW1lbnQ7XHJcblx0XHRcdGZvcm0uY2xhc3NOYW1lID0gJ2Zvcm1fX2dyb3VwIHN1Y2Nlc3MnO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGVtYWlsSXNWYWxpZChlbWFpbCkge1xyXG5cdFx0XHRjb25zdCByZSA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvLnRlc3QoXHJcblx0XHRcdFx0ZW1haWxcclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdHJldHVybiByZTtcclxuXHRcdH1cclxuXHR9XHJcbn0pO1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIChlKSA9PiB7XG5cdFx0Y29uc3QgcHJlbG9hZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVsb2FkJyk7XG5cblx0XHRwcmVsb2FkLmNsYXNzTGlzdC5hZGQoJ3ByZWxvYWQtZmluaXNoZWQnKTtcblx0fSk7XG5cblx0Y29uc3QgYnRuU2Nyb2xsVG9Ub3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuU2Nyb2xsVG9Ub3AnKTtcblx0YnRuU2Nyb2xsVG9Ub3AuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdHdpbmRvdy5zY3JvbGxUbyh7XG5cdFx0XHR0b3A6IDAsXG5cdFx0XHRsZWZ0OiAwLFxuXHRcdFx0YmVoYXZpb3I6ICdzbW9vdGgnLFxuXHRcdH0pO1xuXHR9KTtcblxuXHRjb25zdCBleHBhbmRzTW9yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tleHBhbmQtbW9yZV0nKTtcblxuXHRmdW5jdGlvbiBleHBhbmQoKSB7XG5cdFx0Y29uc3Qgc2hvd0NvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRhdGFzZXQudGFyZ2V0KTtcblx0XHRpZiAoc2hvd0NvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuXHRcdFx0dGhpcy5pbm5lckhUTUwgPSB0aGlzLmRhdGFzZXQuc2hvd3RleHQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuaW5uZXJIVE1MID0gdGhpcy5kYXRhc2V0LmhpZGV0ZXh0O1xuXHRcdH1cblxuXHRcdHNob3dDb250ZW50LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuXHRcdGlmIChzaG93Q29udGVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG5cdFx0XHRzaG93Q29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBzaG93Q29udGVudC5zY3JvbGxIZWlnaHQgKyAncHgnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzaG93Q29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSAyMCArICdweCc7XG5cdFx0fVxuXHR9XG5cblx0ZXhwYW5kc01vcmUuZm9yRWFjaCgoYnRuKSA9PiB7XG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXhwYW5kKTtcblx0fSk7XG59KTtcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3QgbmF2Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdi1jb250YWluZXInKTtcclxuXHRjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtYnRuJyk7XHJcblx0Y29uc3QgbmF2TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYtbGlzdCcpO1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKGUpID0+IHtcclxuXHRcdGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID4gMCkge1xyXG5cdFx0XHRuYXZDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc3RpY2t5Jyk7XHJcblx0XHRcdGJ0blNjcm9sbFRvVG9wLnN0eWxlLm9wYWNpdHkgPSAxO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bmF2Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3N0aWNreScpO1xyXG5cdFx0XHRidG5TY3JvbGxUb1RvcC5zdHlsZS5vcGFjaXR5ID0gMDtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0bWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0XHRtZW51QnRuLmNsYXNzTGlzdC50b2dnbGUoJ2NsaWNrZWQnKTtcclxuXHRcdG5hdkNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdvdmVybGF5Jyk7XHJcblx0XHRuYXZMaXN0LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcclxuXHR9KTtcclxufSk7XHJcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcblx0Ly8gY2Fyb3VzZWxcclxuXHRjb25zdCBjYXJvdXNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJvdXNlbCcpO1xyXG5cdGNvbnN0IHByZXZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldicpO1xyXG5cdGNvbnN0IG5leHRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dCcpO1xyXG5cdGNvbnN0IGNhcm91c2VsVXJsID0gJy4vanMvY2Fyb3VzZWwuanNvbic7XHJcblxyXG5cdGxldCBmaXJzdFNsaWRlO1xyXG5cdGxldCBsYXN0U2xpZGU7XHJcblxyXG5cdGZ1bmN0aW9uIGdldEpzb25EYXRhKCkge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0ZmV0Y2goY2Fyb3VzZWxVcmwpXHJcblx0XHRcdFx0LnRoZW4oKHJlc3ApID0+IHJlc3AuanNvbigpKVxyXG5cdFx0XHRcdC50aGVuKChkYXRhKSA9PiByZXNvbHZlKGRhdGEpKVxyXG5cdFx0XHRcdC5jYXRjaCgoZXJyKSA9PiByZWplY3QoZXJyKSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGZ1bmN0aW9uIGRpc3BsYXlDYXJvdXNlbCgpIHtcclxuXHRcdGNvbnN0IGRhdGFMaXN0ID0gYXdhaXQgZ2V0SnNvbkRhdGEoKTtcclxuXHRcdGNvbnN0IHNsaWRlc0FycmF5ID0gZGF0YUxpc3Quc2xpZGVzO1xyXG5cclxuXHRcdHNsaWRlc0FycmF5LmZvckVhY2goKHNsaWRlLCBzbGlkZU51bWJlcikgPT4ge1xyXG5cdFx0XHRuZXdTbGlkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0XHRuZXdTbGlkZS5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9fc2xpZGUnKTtcclxuXHJcblx0XHRcdG5ld1NsaWRlLmlubmVySFRNTCA9IGBcclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcm91c2VsX19pbWFnZS1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIiR7c2xpZGUuaW1hZ2V9XCIgYWx0PVwic2xpZGUtaW1nXCIgLz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjYXJvdXNlbF9fY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxoMSBjbGFzcz1cImNhcm91c2VsX190aXRsZVwiPiR7c2xpZGUudGl0bGV9PC9oMT5cclxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzcz1cImNhcm91c2VsX19kZXNjXCI+JHtzbGlkZS5jb250ZW50fTwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiaGVhZGVyX19uYXYtZG9uYXRlLWJ0biBidXR0b25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdER1Z21lIHphIG5lxaF0b1xyXG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0YDtcclxuXHJcblx0XHRcdGNhcm91c2VsLmFwcGVuZENoaWxkKG5ld1NsaWRlKTtcclxuXHJcblx0XHRcdGlmIChzbGlkZU51bWJlciA9PT0gMCkge1xyXG5cdFx0XHRcdGZpcnN0U2xpZGUgPSBuZXdTbGlkZTtcclxuXHRcdFx0XHRuZXdTbGlkZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdFx0fSBlbHNlIGlmIChzbGlkZU51bWJlciArIDEgPT09IGRhdGFMaXN0LnNsaWRlcy5sZW5ndGgpIHtcclxuXHRcdFx0XHRsYXN0U2xpZGUgPSBuZXdTbGlkZTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0bmV4dFNsaWRlKCk7XHJcblx0XHRwcmV2aW91c1NsaWRlKCk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBuZXh0U2xpZGUoKSB7XHJcblx0XHRjb25zdCBuZXh0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHQnKTtcclxuXHJcblx0XHRuZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHRcdFx0Y29uc3QgYWN0aXZlU2xpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX3NsaWRlLmFjdGl2ZScpO1xyXG5cclxuXHRcdFx0bGV0IG5leHRTaWJsaW5nID0gYWN0aXZlU2xpZGUubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG5cclxuXHRcdFx0aWYgKG5leHRTaWJsaW5nID09IG51bGwpIHtcclxuXHRcdFx0XHRuZXh0U2libGluZyA9IGFjdGl2ZVNsaWRlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAobmV4dFNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJvdXNlbF9fc2xpZGUnKSkge1xyXG5cdFx0XHRcdGFjdGl2ZVNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdG5leHRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHByZXZpb3VzU2xpZGUoKSB7XHJcblx0XHRjb25zdCBwcmV2QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXYnKTtcclxuXHJcblx0XHRwcmV2QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHRcdFx0Y29uc3QgYWN0aXZlU2xpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX3NsaWRlLmFjdGl2ZScpO1xyXG5cclxuXHRcdFx0bGV0IG5leHRTaWJsaW5nID0gYWN0aXZlU2xpZGUucHJldmlvdXNFbGVtZW50U2libGluZztcclxuXHJcblx0XHRcdGlmIChuZXh0U2libGluZyA9PSBudWxsKSB7XHJcblx0XHRcdFx0bmV4dFNpYmxpbmcgPSBhY3RpdmVTbGlkZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKG5leHRTaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucygnY2Fyb3VzZWxfX3NsaWRlJykpIHtcclxuXHRcdFx0XHRhY3RpdmVTbGlkZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdFx0XHRuZXh0U2libGluZy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRpZiAoY2Fyb3VzZWwgIT09IG51bGwpIHtcclxuXHRcdChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGRpc3BsYXlDYXJvdXNlbCgpO1xyXG5cdFx0fSkoKTtcclxuXHR9XHJcbn0pO1xyXG4iLCJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuXHQvLyB0YWJzXHJcblx0Y29uc3QgdGFiTGlzdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJjY29yZGlvbl9fbGlzdC1idG4nKTtcclxuXHRjb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYmNjb3JkaW9uX19jb250YWluZXInKTtcclxuXHRjb25zdCB0YWJjY29yZGlvbkxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiY2NvcmRpb24tbGlzdCcpO1xyXG5cdGNvbnN0IHRhYnNDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYmNjb3JkaW9uX190YWItaW5uZXInKTtcclxuXHRjb25zdCB0YWJjY29yZGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWJjY29yZGlvbicpO1xyXG5cclxuXHRmdW5jdGlvbiBhY3RpdmF0ZVRhYnMoKSB7XHJcblx0XHR0YWJMaXN0QnRuLmZvckVhY2goKHRhYikgPT4ge1xyXG5cdFx0XHR0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHRhYk5hdiA9IHRhYi5wYXJlbnRFbGVtZW50O1xyXG5cdFx0XHRcdGNvbnN0IHRhYnNDb250YWluZXIgPSB0YWJOYXYucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG5cdFx0XHRcdGNvbnN0IHRhYk51bWJlciA9IHRhYi5kYXRhc2V0LmZvclRhYjtcclxuXHRcdFx0XHRjb25zdCB0YWJUb0FjdGl2YXRlID0gdGFic0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHRcdFx0YC50YWJjY29yZGlvbl9fdGFiW2RhdGEtdGFiPVwiJHt0YWJOdW1iZXJ9XCJdYFxyXG5cdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdHRhYk5hdi5xdWVyeVNlbGVjdG9yQWxsKCcudGFiY2NvcmRpb25fX2xpc3QtYnRuJykuZm9yRWFjaCgoYnRuKSA9PiB7XHJcblx0XHRcdFx0XHRidG4uY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR0YWJzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJjY29yZGlvbl9fdGFiJykuZm9yRWFjaCgodGFiKSA9PiB7XHJcblx0XHRcdFx0XHR0YWIuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR0YWIuY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xyXG5cdFx0XHRcdHRhYlRvQWN0aXZhdGUuY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xyXG5cclxuXHRcdFx0XHRpZiAod2luZG93LmlubmVyV2lkdGggPj0gNjAwKSB7XHJcblx0XHRcdFx0XHR0YWJzQ29udGVudC5mb3JFYWNoKCh0YWJzKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRhYnMuc3R5bGUubWF4SGVpZ2h0ID0gdGFicy5zY3JvbGxIZWlnaHQgKyAncHgnO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGlmICh0YWJjY29yZGlvbkxpc3QpIHtcclxuXHRcdFx0dGFicy5mb3JFYWNoKCh0YWIpID0+IHtcclxuXHRcdFx0XHR0YWIucXVlcnlTZWxlY3RvcignLnRhYmNjb3JkaW9uX19saXN0IC50YWJjY29yZGlvbl9fYnRuJykuY2xpY2soKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIChlKSA9PiB7XHJcblx0XHRcdGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSA2MDApIHtcclxuXHRcdFx0XHRhY3RpdmF0ZVRhYnMoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvLy8vLyBhY2NvcmRpb25cclxuXHRjb25zdCBhY2NvcmRpb25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uX19saXN0LWJ0bicpO1xyXG5cclxuXHRmdW5jdGlvbiBhY3RpdmF0ZUFjY29yZGlvbigpIHtcclxuXHRcdGFjY29yZGlvbkJ0bi5mb3JFYWNoKChidG4pID0+IHtcclxuXHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRcdC8vIGNoZWNrIGZvciBvcGVuIGFjY29yZGlvblxyXG5cdFx0XHRcdGNvbnN0IGFjY29yZGlvbkJ0bk9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHRcdFx0Jy5hY2NvcmRpb25fX2xpc3QtYnRuLm9wZW4nXHJcblx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0aWYgKGFjY29yZGlvbkJ0bk9wZW4gJiYgYWNjb3JkaW9uQnRuT3BlbiAhPT0gYnRuKSB7XHJcblx0XHRcdFx0XHQvLyBpZiB0aGVyZSBpcyBvcGVuIHRoZW4gcmVtb3ZlIG9wZW4gY2xhc3MgYW5kIHNldCBtYXhoZWlnaHQgdG8gMFxyXG5cdFx0XHRcdFx0YWNjb3JkaW9uQnRuT3Blbi5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XHJcblx0XHRcdFx0XHRhY2NvcmRpb25CdG5PcGVuLm5leHRFbGVtZW50U2libGluZy5zdHlsZS5tYXhIZWlnaHQgPSAwO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gc2V0IG9wZW4gY2xhc3MgdG8gZXZlcnkgY2xpY2tlZCBhY2NvcmRpb24gYnRuXHJcblx0XHRcdFx0YnRuLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcclxuXHRcdFx0XHRjb25zdCBhY2NvcmRpb25Cb2R5ID0gYnRuLm5leHRFbGVtZW50U2libGluZztcclxuXHJcblx0XHRcdFx0aWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKSkge1xyXG5cdFx0XHRcdFx0YWNjb3JkaW9uQm9keS5zdHlsZS5tYXhIZWlnaHQgPSBhY2NvcmRpb25Cb2R5LnNjcm9sbEhlaWdodCArICdweCc7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGFjY29yZGlvbkJvZHkuc3R5bGUubWF4SGVpZ2h0ID0gMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIChlKSA9PiB7XHJcblx0XHRcdGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDYwMCkge1xyXG5cdFx0XHRcdHRhYnNDb250ZW50LmZvckVhY2goKHRhYnMpID0+IHtcclxuXHRcdFx0XHRcdHRhYnMuc3R5bGUubWF4SGVpZ2h0ID0gMDtcclxuXHRcdFx0XHRcdGlmICh0YWJzLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuJykpIHtcclxuXHRcdFx0XHRcdFx0dGFicy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRpZiAodGFiY2NvcmRpb24pIHtcclxuXHRcdGFjdGl2YXRlVGFicygpO1xyXG5cdFx0YWN0aXZhdGVBY2NvcmRpb24oKTtcclxuXHR9XHJcbn0pO1xyXG4iXSwicHJlRXhpc3RpbmdDb21tZW50IjoiLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk4dmQyVmljR0ZqYXk5aWIyOTBjM1J5WVhBaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwycHpMMlpsZEdOb1JHRjBZUzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl6Y21NdmFuTXZabTl5YlZaaGJHbGtZV2wwYjI0dWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmMzSmpMMnB6TDIxaGFXNHVhbk1pTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDJwekwyNWhkaTVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl6Y21NdmFuTXZjMnhwWkdWeUxtcHpJaXdpZDJWaWNHRmphem92THk4dUwzTnlZeTlxY3k5MFlXSmpZMjl5WkdsdmJpNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMUZCUVVFN1VVRkRRVHM3VVVGRlFUdFJRVU5CT3p0UlFVVkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPenRSUVVWQk8xRkJRMEU3TzFGQlJVRTdVVUZEUVRzN1VVRkZRVHRSUVVOQk8xRkJRMEU3T3p0UlFVZEJPMUZCUTBFN08xRkJSVUU3VVVGRFFUczdVVUZGUVR0UlFVTkJPMUZCUTBFN1VVRkRRU3d3UTBGQk1FTXNaME5CUVdkRE8xRkJRekZGTzFGQlEwRTdPMUZCUlVFN1VVRkRRVHRSUVVOQk8xRkJRMEVzZDBSQlFYZEVMR3RDUVVGclFqdFJRVU14UlR0UlFVTkJMR2xFUVVGcFJDeGpRVUZqTzFGQlF5OUVPenRSUVVWQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFTeDVRMEZCZVVNc2FVTkJRV2xETzFGQlF6RkZMR2RJUVVGblNDeHRRa0ZCYlVJc1JVRkJSVHRSUVVOeVNUdFJRVU5CT3p0UlFVVkJPMUZCUTBFN1VVRkRRVHRSUVVOQkxESkNRVUV5UWl3d1FrRkJNRUlzUlVGQlJUdFJRVU4yUkN4cFEwRkJhVU1zWlVGQlpUdFJRVU5vUkR0UlFVTkJPMUZCUTBFN08xRkJSVUU3VVVGRFFTeHpSRUZCYzBRc0swUkJRU3RFT3p0UlFVVnlTRHRSUVVOQk96czdVVUZIUVR0UlFVTkJPenM3T3pzN096czdPenM3UVVOc1JrRXNORVJCUVRSRU96czdPenM3T3pzN096czdRVU5CTlVRN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEUxQlFVMDdRVUZEVGp0QlFVTkJPMEZCUTBFc1MwRkJTenRCUVVOTU8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEVsQlFVazdRVUZEU2p0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeEpRVUZKTzBGQlEwbzdRVUZEUVN4SlFVRkpPMEZCUTBvN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNTVUZCU1R0QlFVTktPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hKUVVGSk8wRkJRMG83UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVN4cFEwRkJhVU1zZVVKQlFYbENMRFpDUVVFMlFpeEpRVUZKTEZGQlFWRXNTVUZCU1N4UlFVRlJMRWxCUVVrc1VVRkJVU3hKUVVGSkxHZERRVUZuUXl4SFFVRkhPMEZCUTJ4TE8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1EwRkJRenM3T3pzN096czdPenM3TzBGRGRrWkVPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTEVWQlFVVTdPMEZCUlVZN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklMRVZCUVVVN08wRkJSVVk3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hGUVVGRk8wRkJRMFlzUTBGQlF6czdPenM3T3pzN096czdPMEZEY2tORU8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JTzBGQlEwRTdRVUZEUVR0QlFVTkJMRVZCUVVVN08wRkJSVVk3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4RlFVRkZPMEZCUTBZc1EwRkJRenM3T3pzN096czdPenM3TzBGRGNFSkVPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4dFFrRkJiVUlzV1VGQldUdEJRVU12UWp0QlFVTkJPMEZCUTBFc2NVTkJRWEZETEZsQlFWazdRVUZEYWtRc2JVTkJRVzFETEdOQlFXTTdRVUZEYWtRN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEpRVUZKTzBGQlEwbzdRVUZEUVR0QlFVTkJMRWRCUVVjN08wRkJSVWc3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRU3hEUVVGRE96czdPenM3T3pzN096czdRVU5xUjBRN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4dlEwRkJiME1zVlVGQlZUdEJRVU01UXpzN1FVRkZRVHRCUVVOQk8wRkJRMEVzUzBGQlN6czdRVUZGVER0QlFVTkJPMEZCUTBFc1MwRkJTenM3UVVGRlREdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFMUJRVTA3UVVGRFRqdEJRVU5CTEVsQlFVazdRVUZEU2l4SFFVRkhPenRCUVVWSU8wRkJRMEU3UVVGRFFUdEJRVU5CTEVsQlFVazdRVUZEU2pzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0RzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHc3UVVGRFFUdEJRVU5CTEVsQlFVazdRVUZEU2l4SFFVRkhPenRCUVVWSU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1MwRkJTenRCUVVOTU8wRkJRMEVzUjBGQlJ6dEJRVU5JT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUTBGQlF5SXNJbVpwYkdVaU9pSTBZMkV3TWpjMFpUZzRZalJoWldJeU9HRTBaUzVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpQmNkQzh2SUZSb1pTQnRiMlIxYkdVZ1kyRmphR1ZjYmlCY2RIWmhjaUJwYm5OMFlXeHNaV1JOYjJSMWJHVnpJRDBnZTMwN1hHNWNiaUJjZEM4dklGUm9aU0J5WlhGMWFYSmxJR1oxYm1OMGFXOXVYRzRnWEhSbWRXNWpkR2x2YmlCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktHMXZaSFZzWlVsa0tTQjdYRzVjYmlCY2RGeDBMeThnUTJobFkyc2dhV1lnYlc5a2RXeGxJR2x6SUdsdUlHTmhZMmhsWEc0Z1hIUmNkR2xtS0dsdWMzUmhiR3hsWkUxdlpIVnNaWE5iYlc5a2RXeGxTV1JkS1NCN1hHNGdYSFJjZEZ4MGNtVjBkWEp1SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE5iYlc5a2RXeGxTV1JkTG1WNGNHOXlkSE03WEc0Z1hIUmNkSDFjYmlCY2RGeDBMeThnUTNKbFlYUmxJR0VnYm1WM0lHMXZaSFZzWlNBb1lXNWtJSEIxZENCcGRDQnBiblJ2SUhSb1pTQmpZV05vWlNsY2JpQmNkRngwZG1GeUlHMXZaSFZzWlNBOUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsU1dSZElEMGdlMXh1SUZ4MFhIUmNkR2s2SUcxdlpIVnNaVWxrTEZ4dUlGeDBYSFJjZEd3NklHWmhiSE5sTEZ4dUlGeDBYSFJjZEdWNGNHOXlkSE02SUh0OVhHNGdYSFJjZEgwN1hHNWNiaUJjZEZ4MEx5OGdSWGhsWTNWMFpTQjBhR1VnYlc5a2RXeGxJR1oxYm1OMGFXOXVYRzRnWEhSY2RHMXZaSFZzWlhOYmJXOWtkV3hsU1dSZExtTmhiR3dvYlc5a2RXeGxMbVY0Y0c5eWRITXNJRzF2WkhWc1pTd2diVzlrZFd4bExtVjRjRzl5ZEhNc0lGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHBPMXh1WEc0Z1hIUmNkQzh2SUVac1lXY2dkR2hsSUcxdlpIVnNaU0JoY3lCc2IyRmtaV1JjYmlCY2RGeDBiVzlrZFd4bExtd2dQU0IwY25WbE8xeHVYRzRnWEhSY2RDOHZJRkpsZEhWeWJpQjBhR1VnWlhod2IzSjBjeUJ2WmlCMGFHVWdiVzlrZFd4bFhHNGdYSFJjZEhKbGRIVnliaUJ0YjJSMWJHVXVaWGh3YjNKMGN6dGNiaUJjZEgxY2JseHVYRzRnWEhRdkx5QmxlSEJ2YzJVZ2RHaGxJRzF2WkhWc1pYTWdiMkpxWldOMElDaGZYM2RsWW5CaFkydGZiVzlrZFd4bGMxOWZLVnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXRJRDBnYlc5a2RXeGxjenRjYmx4dUlGeDBMeThnWlhod2IzTmxJSFJvWlNCdGIyUjFiR1VnWTJGamFHVmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVl5QTlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTTdYRzVjYmlCY2RDOHZJR1JsWm1sdVpTQm5aWFIwWlhJZ1puVnVZM1JwYjI0Z1ptOXlJR2hoY20xdmJua2daWGh3YjNKMGMxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1a0lEMGdablZ1WTNScGIyNG9aWGh3YjNKMGN5d2dibUZ0WlN3Z1oyVjBkR1Z5S1NCN1hHNGdYSFJjZEdsbUtDRmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbThvWlhod2IzSjBjeXdnYm1GdFpTa3BJSHRjYmlCY2RGeDBYSFJQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb1pYaHdiM0owY3l3Z2JtRnRaU3dnZXlCbGJuVnRaWEpoWW14bE9pQjBjblZsTENCblpYUTZJR2RsZEhSbGNpQjlLVHRjYmlCY2RGeDBmVnh1SUZ4MGZUdGNibHh1SUZ4MEx5OGdaR1ZtYVc1bElGOWZaWE5OYjJSMWJHVWdiMjRnWlhod2IzSjBjMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXlJRDBnWm5WdVkzUnBiMjRvWlhod2IzSjBjeWtnZTF4dUlGeDBYSFJwWmloMGVYQmxiMllnVTNsdFltOXNJQ0U5UFNBbmRXNWtaV1pwYm1Wa0p5QW1KaUJUZVcxaWIyd3VkRzlUZEhKcGJtZFVZV2NwSUh0Y2JpQmNkRngwWEhSUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29aWGh3YjNKMGN5d2dVM2x0WW05c0xuUnZVM1J5YVc1blZHRm5MQ0I3SUhaaGJIVmxPaUFuVFc5a2RXeGxKeUI5S1R0Y2JpQmNkRngwZlZ4dUlGeDBYSFJQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb1pYaHdiM0owY3l3Z0oxOWZaWE5OYjJSMWJHVW5MQ0I3SUhaaGJIVmxPaUIwY25WbElIMHBPMXh1SUZ4MGZUdGNibHh1SUZ4MEx5OGdZM0psWVhSbElHRWdabUZyWlNCdVlXMWxjM0JoWTJVZ2IySnFaV04wWEc0Z1hIUXZMeUJ0YjJSbElDWWdNVG9nZG1Gc2RXVWdhWE1nWVNCdGIyUjFiR1VnYVdRc0lISmxjWFZwY21VZ2FYUmNiaUJjZEM4dklHMXZaR1VnSmlBeU9pQnRaWEpuWlNCaGJHd2djSEp2Y0dWeWRHbGxjeUJ2WmlCMllXeDFaU0JwYm5SdklIUm9aU0J1YzF4dUlGeDBMeThnYlc5a1pTQW1JRFE2SUhKbGRIVnliaUIyWVd4MVpTQjNhR1Z1SUdGc2NtVmhaSGtnYm5NZ2IySnFaV04wWEc0Z1hIUXZMeUJ0YjJSbElDWWdPSHd4T2lCaVpXaGhkbVVnYkdsclpTQnlaWEYxYVhKbFhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5RZ1BTQm1kVzVqZEdsdmJpaDJZV3gxWlN3Z2JXOWtaU2tnZTF4dUlGeDBYSFJwWmlodGIyUmxJQ1lnTVNrZ2RtRnNkV1VnUFNCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktIWmhiSFZsS1R0Y2JpQmNkRngwYVdZb2JXOWtaU0FtSURncElISmxkSFZ5YmlCMllXeDFaVHRjYmlCY2RGeDBhV1lvS0cxdlpHVWdKaUEwS1NBbUppQjBlWEJsYjJZZ2RtRnNkV1VnUFQwOUlDZHZZbXBsWTNRbklDWW1JSFpoYkhWbElDWW1JSFpoYkhWbExsOWZaWE5OYjJSMWJHVXBJSEpsZEhWeWJpQjJZV3gxWlR0Y2JpQmNkRngwZG1GeUlHNXpJRDBnVDJKcVpXTjBMbU55WldGMFpTaHVkV3hzS1R0Y2JpQmNkRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1eUtHNXpLVHRjYmlCY2RGeDBUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0c1ekxDQW5aR1ZtWVhWc2RDY3NJSHNnWlc1MWJXVnlZV0pzWlRvZ2RISjFaU3dnZG1Gc2RXVTZJSFpoYkhWbElIMHBPMXh1SUZ4MFhIUnBaaWh0YjJSbElDWWdNaUFtSmlCMGVYQmxiMllnZG1Gc2RXVWdJVDBnSjNOMGNtbHVaeWNwSUdadmNpaDJZWElnYTJWNUlHbHVJSFpoYkhWbEtTQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbVFvYm5Nc0lHdGxlU3dnWm5WdVkzUnBiMjRvYTJWNUtTQjdJSEpsZEhWeWJpQjJZV3gxWlZ0clpYbGRPeUI5TG1KcGJtUW9iblZzYkN3Z2EyVjVLU2s3WEc0Z1hIUmNkSEpsZEhWeWJpQnVjenRjYmlCY2RIMDdYRzVjYmlCY2RDOHZJR2RsZEVSbFptRjFiSFJGZUhCdmNuUWdablZ1WTNScGIyNGdabTl5SUdOdmJYQmhkR2xpYVd4cGRIa2dkMmwwYUNCdWIyNHRhR0Z5Ylc5dWVTQnRiMlIxYkdWelhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG00Z1BTQm1kVzVqZEdsdmJpaHRiMlIxYkdVcElIdGNiaUJjZEZ4MGRtRnlJR2RsZEhSbGNpQTlJRzF2WkhWc1pTQW1KaUJ0YjJSMWJHVXVYMTlsYzAxdlpIVnNaU0EvWEc0Z1hIUmNkRngwWm5WdVkzUnBiMjRnWjJWMFJHVm1ZWFZzZENncElIc2djbVYwZFhKdUlHMXZaSFZzWlZzblpHVm1ZWFZzZENkZE95QjlJRHBjYmlCY2RGeDBYSFJtZFc1amRHbHZiaUJuWlhSTmIyUjFiR1ZGZUhCdmNuUnpLQ2tnZXlCeVpYUjFjbTRnYlc5a2RXeGxPeUI5TzF4dUlGeDBYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1Rb1oyVjBkR1Z5TENBbllTY3NJR2RsZEhSbGNpazdYRzRnWEhSY2RISmxkSFZ5YmlCblpYUjBaWEk3WEc0Z1hIUjlPMXh1WEc0Z1hIUXZMeUJQWW1wbFkzUXVjSEp2ZEc5MGVYQmxMbWhoYzA5M2JsQnliM0JsY25SNUxtTmhiR3hjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVieUE5SUdaMWJtTjBhVzl1S0c5aWFtVmpkQ3dnY0hKdmNHVnlkSGtwSUhzZ2NtVjBkWEp1SUU5aWFtVmpkQzV3Y205MGIzUjVjR1V1YUdGelQzZHVVSEp2Y0dWeWRIa3VZMkZzYkNodlltcGxZM1FzSUhCeWIzQmxjblI1S1RzZ2ZUdGNibHh1SUZ4MEx5OGdYMTkzWldKd1lXTnJYM0IxWW14cFkxOXdZWFJvWDE5Y2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y0NBOUlGd2lYQ0k3WEc1Y2JseHVJRngwTHk4Z1RHOWhaQ0JsYm5SeWVTQnRiMlIxYkdVZ1lXNWtJSEpsZEhWeWJpQmxlSEJ2Y25SelhHNGdYSFJ5WlhSMWNtNGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWhmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5NZ1BTQXdLVHRjYmlJc0ltUnZZM1Z0Wlc1MExtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0owUlBUVU52Ym5SbGJuUk1iMkZrWldRbkxDQm1kVzVqZEdsdmJpQW9LU0I3ZlNrN1hISmNiaUlzSW1SdlkzVnRaVzUwTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjBSUFRVTnZiblJsYm5STWIyRmtaV1FuTENCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmx4MEx5OGdabTl5YlNCMllXeHBaR0YwYVc5dVhISmNibHgwWTI5dWMzUWdabTl5YlNBOUlHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0NkamIyNTBZV04wTFdadmNtMG5LVHRjY2x4dVhIUmpiMjV6ZENCdVlXMWxJRDBnWkc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEVKNVNXUW9KMjVoYldVbktUdGNjbHh1WEhSamIyNXpkQ0JsYldGcGJDQTlJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJDZVVsa0tDZGxiV0ZwYkNjcE8xeHlYRzVjZEdOdmJuTjBJRzFsYzNOaFoyVWdQU0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDZ25iV1Z6YzJGblpTY3BPMXh5WEc1Y2RHTnZibk4wSUdadmNtMUNkRzRnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2duWm05eWJTMWlkRzRuS1R0Y2NseHVYSEpjYmx4MGFXWWdLR1p2Y20wcElIdGNjbHh1WEhSY2RGdGNjbHh1WEhSY2RGeDBKMk5zYVdOckp5eGNjbHh1WEhSY2RGeDBKMjl1ZEc5MVkyaHpkR0Z5ZENjc1hISmNibHgwWEhSY2RDZHRiM1Z6Wlc5MlpYSW5MRnh5WEc1Y2RGeDBYSFFuYTJWNVpHOTNiaWNzWEhKY2JseDBYSFJjZENkclpYbHdjbVZ6Y3ljc1hISmNibHgwWEhSY2RDZDBiM1ZqYUhOMFlYSjBKeXhjY2x4dVhIUmNkRngwSjNSdmRXTm9iVzkyWlNjc1hISmNibHgwWEhSZExtWnZja1ZoWTJnb1hISmNibHgwWEhSY2RDaGxkbVZ1ZENrZ1BUNWNjbHh1WEhSY2RGeDBYSFJrYjJOMWJXVnVkQzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLR1YyWlc1MExDQW9LU0E5UGlCN1hISmNibHgwWEhSY2RGeDBYSFJwWmlBb1kyaGxZMnRKYm5CMWRITW9LU0E5UFQwZ1ptRnNjMlVwSUh0Y2NseHVYSFJjZEZ4MFhIUmNkRngwWm05eWJVSjBiaTVrYVhOaFlteGxaQ0E5SUhSeWRXVTdYSEpjYmx4MFhIUmNkRngwWEhSOUlHVnNjMlVnZTF4eVhHNWNkRngwWEhSY2RGeDBYSFJtYjNKdFFuUnVMbVJwYzJGaWJHVmtJRDBnWm1Gc2MyVTdYSEpjYmx4MFhIUmNkRngwWEhSOVhISmNibHgwWEhSY2RGeDBmU2tzWEhKY2JseDBYSFJjZEdaaGJITmxYSEpjYmx4MFhIUXBPMXh5WEc1Y2NseHVYSFJjZEdaMWJtTjBhVzl1SUdOb1pXTnJTVzV3ZFhSektDa2dlMXh5WEc1Y2RGeDBYSFJqYjI1emRDQnVZVzFsVm1Gc2RXVWdQU0J1WVcxbExuWmhiSFZsTG5SeWFXMG9LVHRjY2x4dVhIUmNkRngwWTI5dWMzUWdaVzFoYVd4V1lXeDFaU0E5SUdWdFlXbHNMblpoYkhWbExuUnlhVzBvS1R0Y2NseHVYSFJjZEZ4MFkyOXVjM1FnYldWemMyRm5aVlpoYkhWbElEMGdiV1Z6YzJGblpTNTJZV3gxWlM1MGNtbHRLQ2s3WEhKY2JseHlYRzVjZEZ4MFhIUnBaaUFvYm1GdFpWWmhiSFZsSUQwOVBTQW5KeWtnZTF4eVhHNWNkRngwWEhSY2RITmxkRVZ5Y205eVJtOXlLRzVoYldVc0lDZFFiR1ZoYzJVZ1pXNTBaWElnZVc5MWNpQm1kV3hzSUc1aGJXVW5LVHRjY2x4dVhIUmNkRngwZlNCbGJITmxJSHRjY2x4dVhIUmNkRngwWEhSelpYUlRkV05qWlhOelJtOXlLRzVoYldVcE8xeHlYRzVjZEZ4MFhIUjlYSEpjYmx4eVhHNWNkRngwWEhScFppQW9aVzFoYVd4V1lXeDFaU0E5UFQwZ0p5Y3BJSHRjY2x4dVhIUmNkRngwWEhSelpYUkZjbkp2Y2tadmNpaGxiV0ZwYkN3Z0oxQnNaV0Z6WlNCbGJuUmxjaUI1YjNWeUlHVnRZV2xzSUdGa1pISmxjM01uS1R0Y2NseHVYSFJjZEZ4MGZTQmxiSE5sSUdsbUlDZ2haVzFoYVd4SmMxWmhiR2xrS0dWdFlXbHNWbUZzZFdVcEtTQjdYSEpjYmx4MFhIUmNkRngwYzJWMFJYSnliM0pHYjNJb1pXMWhhV3dzSUNkRmJXRnBiQ0JwY3lCdWIzUWdkbUZzYVdRbktUdGNjbHh1WEhSY2RGeDBmU0JsYkhObElIdGNjbHh1WEhSY2RGeDBYSFJ6WlhSVGRXTmpaWE56Um05eUtHVnRZV2xzS1R0Y2NseHVYSFJjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkRngwYVdZZ0tHMWxjM05oWjJWV1lXeDFaU0E5UFQwZ0p5Y3BJSHRjY2x4dVhIUmNkRngwWEhSelpYUkZjbkp2Y2tadmNpaHRaWE56WVdkbExDQW5VR3hsWVhObElHVnVkR1Z5SUhsdmRYSWdiV1Z6YzJGblpTY3BPMXh5WEc1Y2RGeDBYSFI5SUdWc2MyVWdlMXh5WEc1Y2RGeDBYSFJjZEhObGRGTjFZMk5sYzNOR2IzSW9iV1Z6YzJGblpTazdYSEpjYmx4MFhIUmNkSDFjY2x4dVhISmNibHgwWEhSY2RHbG1JQ2hjY2x4dVhIUmNkRngwWEhSdVlXMWxWbUZzZFdVZ1BUMDlJQ2NuSUh4OFhISmNibHgwWEhSY2RGeDBaVzFoYVd4V1lXeDFaU0E5UFQwZ0p5Y2dmSHhjY2x4dVhIUmNkRngwWEhSdFpYTnpZV2RsVm1Gc2RXVWdQVDA5SUNjbklIeDhYSEpjYmx4MFhIUmNkRngwSVdWdFlXbHNTWE5XWVd4cFpDaGxiV0ZwYkZaaGJIVmxLVnh5WEc1Y2RGeDBYSFFwSUh0Y2NseHVYSFJjZEZ4MFhIUnlaWFIxY200Z1ptRnNjMlU3WEhKY2JseDBYSFJjZEgwZ1pXeHpaU0I3WEhKY2JseDBYSFJjZEZ4MGNtVjBkWEp1SUhSeWRXVTdYSEpjYmx4MFhIUmNkSDFjY2x4dVhIUmNkSDFjY2x4dVhISmNibHgwWEhSbWRXNWpkR2x2YmlCelpYUkZjbkp2Y2tadmNpaHBibkIxZEN3Z2JXVnpjMkZuWlNrZ2UxeHlYRzVjZEZ4MFhIUmpiMjV6ZENCbWIzSnRJRDBnYVc1d2RYUXVjR0Z5Wlc1MFJXeGxiV1Z1ZER0Y2NseHVYSFJjZEZ4MFkyOXVjM1FnYzIxaGJHd2dQU0JtYjNKdExuRjFaWEo1VTJWc1pXTjBiM0lvSjNOdFlXeHNKeWs3WEhKY2JseHlYRzVjZEZ4MFhIUnpiV0ZzYkM1cGJtNWxjbFJsZUhRZ1BTQnRaWE56WVdkbE8xeHlYRzVjZEZ4MFhIUm1iM0p0TG1Oc1lYTnpUbUZ0WlNBOUlDZG1iM0p0WDE5bmNtOTFjQ0JsY25KdmNpYzdYSEpjYmx4MFhIUjlYSEpjYmx4eVhHNWNkRngwWm5WdVkzUnBiMjRnYzJWMFUzVmpZMlZ6YzBadmNpaHBibkIxZENrZ2UxeHlYRzVjZEZ4MFhIUmpiMjV6ZENCbWIzSnRJRDBnYVc1d2RYUXVjR0Z5Wlc1MFJXeGxiV1Z1ZER0Y2NseHVYSFJjZEZ4MFptOXliUzVqYkdGemMwNWhiV1VnUFNBblptOXliVjlmWjNKdmRYQWdjM1ZqWTJWemN5YzdYSEpjYmx4MFhIUjlYSEpjYmx4eVhHNWNkRngwWm5WdVkzUnBiMjRnWlcxaGFXeEpjMVpoYkdsa0tHVnRZV2xzS1NCN1hISmNibHgwWEhSY2RHTnZibk4wSUhKbElEMGdMMTRvS0Z0ZVBENG9LVnhjVzF4Y1hWeGNYRnd1TERzNlhGeHpRRndpWFNzb1hGd3VXMTQ4UGlncFhGeGJYRnhkWEZ4Y1hDNHNPenBjWEhOQVhDSmRLeWtxS1h3b1hDSXVLMXdpS1NsQUtDaGNYRnRiTUMwNVhYc3hMRE45WEZ3dVd6QXRPVjE3TVN3emZWeGNMbHN3TFRsZGV6RXNNMzFjWEM1Yk1DMDVYWHN4TEROOVhTbDhLQ2hiWVMxNlFTMWFYRnd0TUMwNVhTdGNYQzRwSzF0aExYcEJMVnBkZXpJc2ZTa3BKQzh1ZEdWemRDaGNjbHh1WEhSY2RGeDBYSFJsYldGcGJGeHlYRzVjZEZ4MFhIUXBPMXh5WEc1Y2NseHVYSFJjZEZ4MGNtVjBkWEp1SUhKbE8xeHlYRzVjZEZ4MGZWeHlYRzVjZEgxY2NseHVmU2s3WEhKY2JpSXNJbVJ2WTNWdFpXNTBMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMFJQVFVOdmJuUmxiblJNYjJGa1pXUW5MQ0JtZFc1amRHbHZiaUFvS1NCN1hHNWNkSGRwYm1SdmR5NWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZHNiMkZrSnl3Z0tHVXBJRDArSUh0Y2JseDBYSFJqYjI1emRDQndjbVZzYjJGa0lEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkxuQnlaV3h2WVdRbktUdGNibHh1WEhSY2RIQnlaV3h2WVdRdVkyeGhjM05NYVhOMExtRmtaQ2duY0hKbGJHOWhaQzFtYVc1cGMyaGxaQ2NwTzF4dVhIUjlLVHRjYmx4dVhIUmpiMjV6ZENCaWRHNVRZM0p2Ykd4VWIxUnZjQ0E5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2RpZEc1VFkzSnZiR3hVYjFSdmNDY3BPMXh1WEhSaWRHNVRZM0p2Ykd4VWIxUnZjQzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RqYkdsamF5Y3NJQ2hsS1NBOVBpQjdYRzVjZEZ4MGQybHVaRzkzTG5OamNtOXNiRlJ2S0h0Y2JseDBYSFJjZEhSdmNEb2dNQ3hjYmx4MFhIUmNkR3hsWm5RNklEQXNYRzVjZEZ4MFhIUmlaV2hoZG1sdmNqb2dKM050YjI5MGFDY3NYRzVjZEZ4MGZTazdYRzVjZEgwcE8xeHVYRzVjZEdOdmJuTjBJR1Y0Y0dGdVpITk5iM0psSUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZja0ZzYkNnblcyVjRjR0Z1WkMxdGIzSmxYU2NwTzF4dVhHNWNkR1oxYm1OMGFXOXVJR1Y0Y0dGdVpDZ3BJSHRjYmx4MFhIUmpiMjV6ZENCemFHOTNRMjl1ZEdWdWRDQTlJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJDZVVsa0tIUm9hWE11WkdGMFlYTmxkQzUwWVhKblpYUXBPMXh1WEhSY2RHbG1JQ2h6YUc5M1EyOXVkR1Z1ZEM1amJHRnpjMHhwYzNRdVkyOXVkR0ZwYm5Nb0oyRmpkR2wyWlNjcEtTQjdYRzVjZEZ4MFhIUjBhR2x6TG1sdWJtVnlTRlJOVENBOUlIUm9hWE11WkdGMFlYTmxkQzV6YUc5M2RHVjRkRHRjYmx4MFhIUjlJR1ZzYzJVZ2UxeHVYSFJjZEZ4MGRHaHBjeTVwYm01bGNraFVUVXdnUFNCMGFHbHpMbVJoZEdGelpYUXVhR2xrWlhSbGVIUTdYRzVjZEZ4MGZWeHVYRzVjZEZ4MGMyaHZkME52Ym5SbGJuUXVZMnhoYzNOTWFYTjBMblJ2WjJkc1pTZ25ZV04wYVhabEp5azdYRzVjZEZ4MGFXWWdLSE5vYjNkRGIyNTBaVzUwTG1Oc1lYTnpUR2x6ZEM1amIyNTBZV2x1Y3lnbllXTjBhWFpsSnlrcElIdGNibHgwWEhSY2RITm9iM2REYjI1MFpXNTBMbk4wZVd4bExtMWhlRWhsYVdkb2RDQTlJSE5vYjNkRGIyNTBaVzUwTG5OamNtOXNiRWhsYVdkb2RDQXJJQ2R3ZUNjN1hHNWNkRngwZlNCbGJITmxJSHRjYmx4MFhIUmNkSE5vYjNkRGIyNTBaVzUwTG5OMGVXeGxMbTFoZUVobGFXZG9kQ0E5SURJd0lDc2dKM0I0Snp0Y2JseDBYSFI5WEc1Y2RIMWNibHh1WEhSbGVIQmhibVJ6VFc5eVpTNW1iM0pGWVdOb0tDaGlkRzRwSUQwK0lIdGNibHgwWEhSaWRHNHVZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25ZMnhwWTJzbkxDQmxlSEJoYm1RcE8xeHVYSFI5S1R0Y2JuMHBPMXh1SWl3aVpHOWpkVzFsYm5RdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblJFOU5RMjl1ZEdWdWRFeHZZV1JsWkNjc0lHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhIUmpiMjV6ZENCdVlYWkRiMjUwWVdsdVpYSWdQU0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDZ25ibUYyTFdOdmJuUmhhVzVsY2ljcE8xeHlYRzVjZEdOdmJuTjBJRzFsYm5WQ2RHNGdQU0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDZ25iV1Z1ZFMxaWRHNG5LVHRjY2x4dVhIUmpiMjV6ZENCdVlYWk1hWE4wSUQwZ1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvSjI1aGRpMXNhWE4wSnlrN1hISmNibHh5WEc1Y2RIZHBibVJ2ZHk1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkelkzSnZiR3duTENBb1pTa2dQVDRnZTF4eVhHNWNkRngwYVdZZ0tHUnZZM1Z0Wlc1MExtUnZZM1Z0Wlc1MFJXeGxiV1Z1ZEM1elkzSnZiR3hVYjNBZ1BpQXdLU0I3WEhKY2JseDBYSFJjZEc1aGRrTnZiblJoYVc1bGNpNWpiR0Z6YzB4cGMzUXVZV1JrS0NkemRHbGphM2tuS1R0Y2NseHVYSFJjZEZ4MFluUnVVMk55YjJ4c1ZHOVViM0F1YzNSNWJHVXViM0JoWTJsMGVTQTlJREU3WEhKY2JseDBYSFI5SUdWc2MyVWdlMXh5WEc1Y2RGeDBYSFJ1WVhaRGIyNTBZV2x1WlhJdVkyeGhjM05NYVhOMExuSmxiVzkyWlNnbmMzUnBZMnQ1SnlrN1hISmNibHgwWEhSY2RHSjBibE5qY205c2JGUnZWRzl3TG5OMGVXeGxMbTl3WVdOcGRIa2dQU0F3TzF4eVhHNWNkRngwZlZ4eVhHNWNkSDBwTzF4eVhHNWNjbHh1WEhSdFpXNTFRblJ1TG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjJOc2FXTnJKeXdnS0dVcElEMCtJSHRjY2x4dVhIUmNkRzFsYm5WQ2RHNHVZMnhoYzNOTWFYTjBMblJ2WjJkc1pTZ25ZMnhwWTJ0bFpDY3BPMXh5WEc1Y2RGeDBibUYyUTI5dWRHRnBibVZ5TG1Oc1lYTnpUR2x6ZEM1MGIyZG5iR1VvSjI5MlpYSnNZWGtuS1R0Y2NseHVYSFJjZEc1aGRreHBjM1F1WTJ4aGMzTk1hWE4wTG5SdloyZHNaU2duYzJodmR5Y3BPMXh5WEc1Y2RIMHBPMXh5WEc1OUtUdGNjbHh1SWl3aVpHOWpkVzFsYm5RdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblJFOU5RMjl1ZEdWdWRFeHZZV1JsWkNjc0lHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhIUXZMeUJqWVhKdmRYTmxiRnh5WEc1Y2RHTnZibk4wSUdOaGNtOTFjMlZzSUQwZ1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvSjJOaGNtOTFjMlZzSnlrN1hISmNibHgwWTI5dWMzUWdjSEpsZGtKMGJpQTlJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJDZVVsa0tDZHdjbVYySnlrN1hISmNibHgwWTI5dWMzUWdibVY0ZEVKMGJpQTlJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJDZVVsa0tDZHVaWGgwSnlrN1hISmNibHgwWTI5dWMzUWdZMkZ5YjNWelpXeFZjbXdnUFNBbkxpOXFjeTlqWVhKdmRYTmxiQzVxYzI5dUp6dGNjbHh1WEhKY2JseDBiR1YwSUdacGNuTjBVMnhwWkdVN1hISmNibHgwYkdWMElHeGhjM1JUYkdsa1pUdGNjbHh1WEhKY2JseDBablZ1WTNScGIyNGdaMlYwU25OdmJrUmhkR0VvS1NCN1hISmNibHgwWEhSeVpYUjFjbTRnYm1WM0lGQnliMjFwYzJVb0tISmxjMjlzZG1Vc0lISmxhbVZqZENrZ1BUNGdlMXh5WEc1Y2RGeDBYSFJtWlhSamFDaGpZWEp2ZFhObGJGVnliQ2xjY2x4dVhIUmNkRngwWEhRdWRHaGxiaWdvY21WemNDa2dQVDRnY21WemNDNXFjMjl1S0NrcFhISmNibHgwWEhSY2RGeDBMblJvWlc0b0tHUmhkR0VwSUQwK0lISmxjMjlzZG1Vb1pHRjBZU2twWEhKY2JseDBYSFJjZEZ4MExtTmhkR05vS0NobGNuSXBJRDArSUhKbGFtVmpkQ2hsY25JcEtUdGNjbHh1WEhSY2RIMHBPMXh5WEc1Y2RIMWNjbHh1WEhKY2JseDBZWE41Ym1NZ1puVnVZM1JwYjI0Z1pHbHpjR3hoZVVOaGNtOTFjMlZzS0NrZ2UxeHlYRzVjZEZ4MFkyOXVjM1FnWkdGMFlVeHBjM1FnUFNCaGQyRnBkQ0JuWlhSS2MyOXVSR0YwWVNncE8xeHlYRzVjZEZ4MFkyOXVjM1FnYzJ4cFpHVnpRWEp5WVhrZ1BTQmtZWFJoVEdsemRDNXpiR2xrWlhNN1hISmNibHh5WEc1Y2RGeDBjMnhwWkdWelFYSnlZWGt1Wm05eVJXRmphQ2dvYzJ4cFpHVXNJSE5zYVdSbFRuVnRZbVZ5S1NBOVBpQjdYSEpjYmx4MFhIUmNkRzVsZDFOc2FXUmxJRDBnWkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDZ25aR2wySnlrN1hISmNibHgwWEhSY2RHNWxkMU5zYVdSbExtTnNZWE56VEdsemRDNWhaR1FvSjJOaGNtOTFjMlZzWDE5emJHbGtaU2NwTzF4eVhHNWNjbHh1WEhSY2RGeDBibVYzVTJ4cFpHVXVhVzV1WlhKSVZFMU1JRDBnWUZ4eVhHNWNkRngwWEhSY2RGeDBYSFE4WkdsMklHTnNZWE56UFZ3aVkyRnliM1Z6Wld4ZlgybHRZV2RsTFdOdmJuUmhhVzVsY2x3aVBseHlYRzVjZEZ4MFhIUmNkRngwWEhSY2REeHBiV2NnYzNKalBWd2lKSHR6Ykdsa1pTNXBiV0ZuWlgxY0lpQmhiSFE5WENKemJHbGtaUzFwYldkY0lpQXZQbHh5WEc1Y2RGeDBYSFJjZEZ4MFhIUThMMlJwZGo1Y2NseHVYSFJjZEZ4MFhIUmNkRngwUEdScGRpQmpiR0Z6Y3oxY0ltTmhjbTkxYzJWc1gxOWpiMjUwWlc1MFhDSStYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBQR2d4SUdOc1lYTnpQVndpWTJGeWIzVnpaV3hmWDNScGRHeGxYQ0krSkh0emJHbGtaUzUwYVhSc1pYMDhMMmd4UGx4eVhHNWNkRngwWEhSY2RGeDBYSFJjZER4d0lHTnNZWE56UFZ3aVkyRnliM1Z6Wld4ZlgyUmxjMk5jSWo0a2UzTnNhV1JsTG1OdmJuUmxiblI5UEM5d1BseHlYRzVjZEZ4MFhIUmNkRngwWEhSY2REeGlkWFIwYjI0Z1kyeGhjM005WENKb1pXRmtaWEpmWDI1aGRpMWtiMjVoZEdVdFluUnVJR0oxZEhSdmJsd2lQbHh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRngwUkhWbmJXVWdlbUVnYm1YRm9YUnZYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBQQzlpZFhSMGIyNCtYSEpjYmx4MFhIUmNkRngwWEhSY2REd3ZaR2wyUGx4eVhHNWNkRngwWEhSZ08xeHlYRzVjY2x4dVhIUmNkRngwWTJGeWIzVnpaV3d1WVhCd1pXNWtRMmhwYkdRb2JtVjNVMnhwWkdVcE8xeHlYRzVjY2x4dVhIUmNkRngwYVdZZ0tITnNhV1JsVG5WdFltVnlJRDA5UFNBd0tTQjdYSEpjYmx4MFhIUmNkRngwWm1seWMzUlRiR2xrWlNBOUlHNWxkMU5zYVdSbE8xeHlYRzVjZEZ4MFhIUmNkRzVsZDFOc2FXUmxMbU5zWVhOelRHbHpkQzVoWkdRb0oyRmpkR2wyWlNjcE8xeHlYRzVjZEZ4MFhIUjlJR1ZzYzJVZ2FXWWdLSE5zYVdSbFRuVnRZbVZ5SUNzZ01TQTlQVDBnWkdGMFlVeHBjM1F1YzJ4cFpHVnpMbXhsYm1kMGFDa2dlMXh5WEc1Y2RGeDBYSFJjZEd4aGMzUlRiR2xrWlNBOUlHNWxkMU5zYVdSbE8xeHlYRzVjZEZ4MFhIUjlYSEpjYmx4MFhIUjlLVHRjY2x4dVhISmNibHgwWEhSdVpYaDBVMnhwWkdVb0tUdGNjbHh1WEhSY2RIQnlaWFpwYjNWelUyeHBaR1VvS1R0Y2NseHVYSFI5WEhKY2JseHlYRzVjZEdaMWJtTjBhVzl1SUc1bGVIUlRiR2xrWlNncElIdGNjbHh1WEhSY2RHTnZibk4wSUc1bGVIUkNkRzRnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2duYm1WNGRDY3BPMXh5WEc1Y2NseHVYSFJjZEc1bGVIUkNkRzR1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduWTJ4cFkyc25MQ0FvWlNrZ1BUNGdlMXh5WEc1Y2RGeDBYSFJqYjI1emRDQmhZM1JwZG1WVGJHbGtaU0E5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9KeTVqWVhKdmRYTmxiRjlmYzJ4cFpHVXVZV04wYVhabEp5azdYSEpjYmx4eVhHNWNkRngwWEhSc1pYUWdibVY0ZEZOcFlteHBibWNnUFNCaFkzUnBkbVZUYkdsa1pTNXVaWGgwUld4bGJXVnVkRk5wWW14cGJtYzdYSEpjYmx4eVhHNWNkRngwWEhScFppQW9ibVY0ZEZOcFlteHBibWNnUFQwZ2JuVnNiQ2tnZTF4eVhHNWNkRngwWEhSY2RHNWxlSFJUYVdKc2FXNW5JRDBnWVdOMGFYWmxVMnhwWkdVN1hISmNibHgwWEhSY2RIMWNjbHh1WEhKY2JseDBYSFJjZEdsbUlDaHVaWGgwVTJsaWJHbHVaeTVqYkdGemMweHBjM1F1WTI5dWRHRnBibk1vSjJOaGNtOTFjMlZzWDE5emJHbGtaU2NwS1NCN1hISmNibHgwWEhSY2RGeDBZV04wYVhabFUyeHBaR1V1WTJ4aGMzTk1hWE4wTG5KbGJXOTJaU2duWVdOMGFYWmxKeWs3WEhKY2JseDBYSFJjZEZ4MGJtVjRkRk5wWW14cGJtY3VZMnhoYzNOTWFYTjBMbUZrWkNnbllXTjBhWFpsSnlrN1hISmNibHgwWEhSY2RIMWNjbHh1WEhSY2RIMHBPMXh5WEc1Y2RIMWNjbHh1WEhKY2JseDBablZ1WTNScGIyNGdjSEpsZG1sdmRYTlRiR2xrWlNncElIdGNjbHh1WEhSY2RHTnZibk4wSUhCeVpYWkNkRzRnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2duY0hKbGRpY3BPMXh5WEc1Y2NseHVYSFJjZEhCeVpYWkNkRzR1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduWTJ4cFkyc25MQ0FvWlNrZ1BUNGdlMXh5WEc1Y2RGeDBYSFJqYjI1emRDQmhZM1JwZG1WVGJHbGtaU0E5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9KeTVqWVhKdmRYTmxiRjlmYzJ4cFpHVXVZV04wYVhabEp5azdYSEpjYmx4eVhHNWNkRngwWEhSc1pYUWdibVY0ZEZOcFlteHBibWNnUFNCaFkzUnBkbVZUYkdsa1pTNXdjbVYyYVc5MWMwVnNaVzFsYm5SVGFXSnNhVzVuTzF4eVhHNWNjbHh1WEhSY2RGeDBhV1lnS0c1bGVIUlRhV0pzYVc1bklEMDlJRzUxYkd3cElIdGNjbHh1WEhSY2RGeDBYSFJ1WlhoMFUybGliR2x1WnlBOUlHRmpkR2wyWlZOc2FXUmxPMXh5WEc1Y2RGeDBYSFI5WEhKY2JseHlYRzVjZEZ4MFhIUnBaaUFvYm1WNGRGTnBZbXhwYm1jdVkyeGhjM05NYVhOMExtTnZiblJoYVc1ektDZGpZWEp2ZFhObGJGOWZjMnhwWkdVbktTa2dlMXh5WEc1Y2RGeDBYSFJjZEdGamRHbDJaVk5zYVdSbExtTnNZWE56VEdsemRDNXlaVzF2ZG1Vb0oyRmpkR2wyWlNjcE8xeHlYRzVjZEZ4MFhIUmNkRzVsZUhSVGFXSnNhVzVuTG1Oc1lYTnpUR2x6ZEM1aFpHUW9KMkZqZEdsMlpTY3BPMXh5WEc1Y2RGeDBYSFI5WEhKY2JseDBYSFI5S1R0Y2NseHVYSFI5WEhKY2JseHlYRzVjZEdsbUlDaGpZWEp2ZFhObGJDQWhQVDBnYm5Wc2JDa2dlMXh5WEc1Y2RGeDBLR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVYSFJjZEZ4MFpHbHpjR3hoZVVOaGNtOTFjMlZzS0NrN1hISmNibHgwWEhSOUtTZ3BPMXh5WEc1Y2RIMWNjbHh1ZlNrN1hISmNiaUlzSW5kcGJtUnZkeTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RFVDAxRGIyNTBaVzUwVEc5aFpHVmtKeXdnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjZEM4dklIUmhZbk5jY2x4dVhIUmpiMjV6ZENCMFlXSk1hWE4wUW5SdUlEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2tGc2JDZ25MblJoWW1OamIzSmthVzl1WDE5c2FYTjBMV0owYmljcE8xeHlYRzVjZEdOdmJuTjBJSFJoWW5NZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5UVd4c0tDY3VkR0ZpWTJOdmNtUnBiMjVmWDJOdmJuUmhhVzVsY2ljcE8xeHlYRzVjZEdOdmJuTjBJSFJoWW1OamIzSmthVzl1VEdsemRDQTlJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJDZVVsa0tDZDBZV0pqWTI5eVpHbHZiaTFzYVhOMEp5azdYSEpjYmx4MFkyOXVjM1FnZEdGaWMwTnZiblJsYm5RZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5UVd4c0tDY3VkR0ZpWTJOdmNtUnBiMjVmWDNSaFlpMXBibTVsY2ljcE8xeHlYRzVjZEdOdmJuTjBJSFJoWW1OamIzSmthVzl1SUQwZ1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvSjNSaFltTmpiM0prYVc5dUp5azdYSEpjYmx4eVhHNWNkR1oxYm1OMGFXOXVJR0ZqZEdsMllYUmxWR0ZpY3lncElIdGNjbHh1WEhSY2RIUmhZa3hwYzNSQ2RHNHVabTl5UldGamFDZ29kR0ZpS1NBOVBpQjdYSEpjYmx4MFhIUmNkSFJoWWk1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkamJHbGpheWNzSUNobEtTQTlQaUI3WEhKY2JseDBYSFJjZEZ4MFkyOXVjM1FnZEdGaVRtRjJJRDBnZEdGaUxuQmhjbVZ1ZEVWc1pXMWxiblE3WEhKY2JseDBYSFJjZEZ4MFkyOXVjM1FnZEdGaWMwTnZiblJoYVc1bGNpQTlJSFJoWWs1aGRpNXdZWEpsYm5SRmJHVnRaVzUwTG5CaGNtVnVkRVZzWlcxbGJuUTdYSEpjYmx4MFhIUmNkRngwWTI5dWMzUWdkR0ZpVG5WdFltVnlJRDBnZEdGaUxtUmhkR0Z6WlhRdVptOXlWR0ZpTzF4eVhHNWNkRngwWEhSY2RHTnZibk4wSUhSaFlsUnZRV04wYVhaaGRHVWdQU0IwWVdKelEyOXVkR0ZwYm1WeUxuRjFaWEo1VTJWc1pXTjBiM0lvWEhKY2JseDBYSFJjZEZ4MFhIUmdMblJoWW1OamIzSmthVzl1WDE5MFlXSmJaR0YwWVMxMFlXSTlYQ0lrZTNSaFlrNTFiV0psY24xY0lsMWdYSEpjYmx4MFhIUmNkRngwS1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwZEdGaVRtRjJMbkYxWlhKNVUyVnNaV04wYjNKQmJHd29KeTUwWVdKalkyOXlaR2x2Ymw5ZmJHbHpkQzFpZEc0bktTNW1iM0pGWVdOb0tDaGlkRzRwSUQwK0lIdGNjbHh1WEhSY2RGeDBYSFJjZEdKMGJpNWpiR0Z6YzB4cGMzUXVjbVZ0YjNabEtDZGpkWEp5Wlc1MEp5azdYSEpjYmx4MFhIUmNkRngwZlNrN1hISmNibHh5WEc1Y2RGeDBYSFJjZEhSaFluTkRiMjUwWVdsdVpYSXVjWFZsY25sVFpXeGxZM1J2Y2tGc2JDZ25MblJoWW1OamIzSmthVzl1WDE5MFlXSW5LUzVtYjNKRllXTm9LQ2gwWVdJcElEMCtJSHRjY2x4dVhIUmNkRngwWEhSY2RIUmhZaTVqYkdGemMweHBjM1F1Y21WdGIzWmxLQ2RqZFhKeVpXNTBKeWs3WEhKY2JseDBYSFJjZEZ4MGZTazdYSEpjYmx4eVhHNWNkRngwWEhSY2RIUmhZaTVqYkdGemMweHBjM1F1WVdSa0tDZGpkWEp5Wlc1MEp5azdYSEpjYmx4MFhIUmNkRngwZEdGaVZHOUJZM1JwZG1GMFpTNWpiR0Z6YzB4cGMzUXVZV1JrS0NkamRYSnlaVzUwSnlrN1hISmNibHh5WEc1Y2RGeDBYSFJjZEdsbUlDaDNhVzVrYjNjdWFXNXVaWEpYYVdSMGFDQStQU0EyTURBcElIdGNjbHh1WEhSY2RGeDBYSFJjZEhSaFluTkRiMjUwWlc1MExtWnZja1ZoWTJnb0tIUmhZbk1wSUQwK0lIdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MGRHRmljeTV6ZEhsc1pTNXRZWGhJWldsbmFIUWdQU0IwWVdKekxuTmpjbTlzYkVobGFXZG9kQ0FySUNkd2VDYzdYSEpjYmx4MFhIUmNkRngwWEhSOUtUdGNjbHh1WEhSY2RGeDBYSFI5WEhKY2JseDBYSFJjZEgwcE8xeHlYRzVjZEZ4MGZTazdYSEpjYmx4eVhHNWNkRngwYVdZZ0tIUmhZbU5qYjNKa2FXOXVUR2x6ZENrZ2UxeHlYRzVjZEZ4MFhIUjBZV0p6TG1admNrVmhZMmdvS0hSaFlpa2dQVDRnZTF4eVhHNWNkRngwWEhSY2RIUmhZaTV4ZFdWeWVWTmxiR1ZqZEc5eUtDY3VkR0ZpWTJOdmNtUnBiMjVmWDJ4cGMzUWdMblJoWW1OamIzSmthVzl1WDE5aWRHNG5LUzVqYkdsamF5Z3BPMXh5WEc1Y2RGeDBYSFI5S1R0Y2NseHVYSFJjZEgxY2NseHVYSEpjYmx4MFhIUjNhVzVrYjNjdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnbmNtVnphWHBsSnl3Z0tHVXBJRDArSUh0Y2NseHVYSFJjZEZ4MGFXWWdLSGRwYm1SdmR5NXBibTVsY2xkcFpIUm9JRDQ5SURZd01Da2dlMXh5WEc1Y2RGeDBYSFJjZEdGamRHbDJZWFJsVkdGaWN5Z3BPMXh5WEc1Y2RGeDBYSFI5WEhKY2JseDBYSFI5S1R0Y2NseHVYSFI5WEhKY2JseHlYRzVjZEM4dkx5OHZJR0ZqWTI5eVpHbHZibHh5WEc1Y2RHTnZibk4wSUdGalkyOXlaR2x2YmtKMGJpQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNKQmJHd29KeTVoWTJOdmNtUnBiMjVmWDJ4cGMzUXRZblJ1SnlrN1hISmNibHh5WEc1Y2RHWjFibU4wYVc5dUlHRmpkR2wyWVhSbFFXTmpiM0prYVc5dUtDa2dlMXh5WEc1Y2RGeDBZV05qYjNKa2FXOXVRblJ1TG1admNrVmhZMmdvS0dKMGJpa2dQVDRnZTF4eVhHNWNkRngwWEhSaWRHNHVZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25ZMnhwWTJzbkxDQW9LU0E5UGlCN1hISmNibHgwWEhSY2RGeDBMeThnWTJobFkyc2dabTl5SUc5d1pXNGdZV05qYjNKa2FXOXVYSEpjYmx4MFhIUmNkRngwWTI5dWMzUWdZV05qYjNKa2FXOXVRblJ1VDNCbGJpQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb1hISmNibHgwWEhSY2RGeDBYSFFuTG1GalkyOXlaR2x2Ymw5ZmJHbHpkQzFpZEc0dWIzQmxiaWRjY2x4dVhIUmNkRngwWEhRcE8xeHlYRzVjY2x4dVhIUmNkRngwWEhScFppQW9ZV05qYjNKa2FXOXVRblJ1VDNCbGJpQW1KaUJoWTJOdmNtUnBiMjVDZEc1UGNHVnVJQ0U5UFNCaWRHNHBJSHRjY2x4dVhIUmNkRngwWEhSY2RDOHZJR2xtSUhSb1pYSmxJR2x6SUc5d1pXNGdkR2hsYmlCeVpXMXZkbVVnYjNCbGJpQmpiR0Z6Y3lCaGJtUWdjMlYwSUcxaGVHaGxhV2RvZENCMGJ5QXdYSEpjYmx4MFhIUmNkRngwWEhSaFkyTnZjbVJwYjI1Q2RHNVBjR1Z1TG1Oc1lYTnpUR2x6ZEM1MGIyZG5iR1VvSjI5d1pXNG5LVHRjY2x4dVhIUmNkRngwWEhSY2RHRmpZMjl5WkdsdmJrSjBiazl3Wlc0dWJtVjRkRVZzWlcxbGJuUlRhV0pzYVc1bkxuTjBlV3hsTG0xaGVFaGxhV2RvZENBOUlEQTdYSEpjYmx4MFhIUmNkRngwZlZ4eVhHNWNjbHh1WEhSY2RGeDBYSFF2THlCelpYUWdiM0JsYmlCamJHRnpjeUIwYnlCbGRtVnllU0JqYkdsamEyVmtJR0ZqWTI5eVpHbHZiaUJpZEc1Y2NseHVYSFJjZEZ4MFhIUmlkRzR1WTJ4aGMzTk1hWE4wTG5SdloyZHNaU2duYjNCbGJpY3BPMXh5WEc1Y2RGeDBYSFJjZEdOdmJuTjBJR0ZqWTI5eVpHbHZia0p2WkhrZ1BTQmlkRzR1Ym1WNGRFVnNaVzFsYm5SVGFXSnNhVzVuTzF4eVhHNWNjbHh1WEhSY2RGeDBYSFJwWmlBb1luUnVMbU5zWVhOelRHbHpkQzVqYjI1MFlXbHVjeWduYjNCbGJpY3BLU0I3WEhKY2JseDBYSFJjZEZ4MFhIUmhZMk52Y21ScGIyNUNiMlI1TG5OMGVXeGxMbTFoZUVobGFXZG9kQ0E5SUdGalkyOXlaR2x2YmtKdlpIa3VjMk55YjJ4c1NHVnBaMmgwSUNzZ0ozQjRKenRjY2x4dVhIUmNkRngwWEhSOUlHVnNjMlVnZTF4eVhHNWNkRngwWEhSY2RGeDBZV05qYjNKa2FXOXVRbTlrZVM1emRIbHNaUzV0WVhoSVpXbG5hSFFnUFNBd08xeHlYRzVjZEZ4MFhIUmNkSDFjY2x4dVhIUmNkRngwZlNrN1hISmNibHgwWEhSOUtUdGNjbHh1WEhKY2JseDBYSFIzYVc1a2IzY3VZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25jbVZ6YVhwbEp5d2dLR1VwSUQwK0lIdGNjbHh1WEhSY2RGeDBhV1lnS0hkcGJtUnZkeTVwYm01bGNsZHBaSFJvSUR3Z05qQXdLU0I3WEhKY2JseDBYSFJjZEZ4MGRHRmljME52Ym5SbGJuUXVabTl5UldGamFDZ29kR0ZpY3lrZ1BUNGdlMXh5WEc1Y2RGeDBYSFJjZEZ4MGRHRmljeTV6ZEhsc1pTNXRZWGhJWldsbmFIUWdQU0F3TzF4eVhHNWNkRngwWEhSY2RGeDBhV1lnS0hSaFluTXVjSEpsZG1sdmRYTkZiR1Z0Wlc1MFUybGliR2x1Wnk1amJHRnpjMHhwYzNRdVkyOXVkR0ZwYm5Nb0oyOXdaVzRuS1NrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhSMFlXSnpMbkJ5WlhacGIzVnpSV3hsYldWdWRGTnBZbXhwYm1jdVkyeGhjM05NYVhOMExuSmxiVzkyWlNnbmIzQmxiaWNwTzF4eVhHNWNkRngwWEhSY2RGeDBmVnh5WEc1Y2RGeDBYSFJjZEgwcE8xeHlYRzVjZEZ4MFhIUjlYSEpjYmx4MFhIUjlLVHRjY2x4dVhIUjlYSEpjYmx4eVhHNWNkR2xtSUNoMFlXSmpZMjl5WkdsdmJpa2dlMXh5WEc1Y2RGeDBZV04wYVhaaGRHVlVZV0p6S0NrN1hISmNibHgwWEhSaFkzUnBkbUYwWlVGalkyOXlaR2x2YmlncE8xeHlYRzVjZEgxY2NseHVmU2s3WEhKY2JpSmRMQ0p6YjNWeVkyVlNiMjkwSWpvaUluMD0ifQ==
