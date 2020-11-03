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
	const catsBox = document.getElementById('cats-box');

	function getAnimalsData() {
		return new Promise((resolve, reject) => {
			fetch(animalsUrl)
				.then((resp) => resp.json())
				.then((data) => resolve(data))
				.catch((err) => reject(err));
		});
	}

	const dogNumber = document.getElementById('dogNumber');
	const catNumber = document.getElementById('catNumber');

	async function displayAnimalNumbers() {
		const dataList = await getAnimalsData();
		const animalsArray = dataList.animals;

		let dogsArrayNumber = animalsArray[0].dogs.length;
		let catsArrayNumber = animalsArray[0].cats.length;

		dogNumber.innerText = dogsArrayNumber;
		catNumber.innerText = catsArrayNumber;
	}

	if ((dogNumber, catNumber)) {
		(function () {
			displayAnimalNumbers();
		})();
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

			catsArray.forEach((cat) => {
				catBox = document.createElement('div');
				catBox.classList.add('page__box');

				const catYears = cat.birth;

				const milisecsBetweenDOBand1970cat = Date.parse(catYears);
				const milisecsBetweenNOWand1970 = Date.now();

				const ageInMilisecsCat =
					milisecsBetweenNOWand1970 - milisecsBetweenDOBand1970cat;

				const milisecsCat = ageInMilisecsCat;
				const secs = 1000;
				const mins = secs * 60;
				const hour = mins * 60;
				const day = hour * 24;
				const year = day * 365;

				let yearsCat = Math.round(milisecsCat / year);

				catBox.innerHTML = `
                        <div class="page__box-top">
                            <img src=".${cat.image}" alt="${cat.name} ${
					cat.species
				}"}/>
                        </div>
                        <div class="page__box-bottom">
                            <h3 class="page__box-title">${cat.name}</h3>
                            <div class="page__box-content">
                                <div class="expandMoreContent" id="showMore-${
																	cat.species
																}${cat.number}">
                                    <p class="page__box-text">
                                        ${cat.desc}
                                    </p>
                                </div>
    
                                <div class="expandMoreHolder">
                                    <button
                                        expand-more
                                        data-hidetext="...Read less"
                                        data-showtext="...Read more"
                                        data-target="showMore-${cat.species}${
					cat.number
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
																			cat.weight
																		} kg</span>
                                </li>
                                <li class="page__box-icon">
                                    <i class="fas fa-arrows-alt-v"></i
                                    ><span class="page__box-icon--text">${
																			cat.height
																		}cm</span>
                                </li>
                                <li class="page__box-icon">
                                    <i class="fas fa-calendar-check"></i
                                    ><span class="page__box-icon--text">${yearsCat} yr.</span>
                                </li>
                                <li class="page__box-icon">
									<i class="fas fa-palette"></i
									><span class="page__box-icon--text">${cat.color[0] ? cat.color[0] : '-'}</span>
                                </li>
                                <li class="page__box-icon">
									<i class="fas fa-palette"></i
									><span class="page__box-icon--text">${cat.color[1] ? cat.color[1] : '-'}</span>
                                </li>
                                <li class="page__box-icon">
									<i class="fas fa-palette"></i
									><span class="page__box-icon--text">${cat.color[2] ? cat.color[2] : '-'}</span>
								</li>
                                <li class="page__box-icon">
                                    <i class="fas fa-paw"></i
                                    ><span class="page__box-icon--text">${
																			cat.coat
																		}</span>
                                </li>
                                <li class="page__box-icon">
                                    <i class="fas fa-venus-mars"></i
                                    ><span class="page__box-icon--text">${
																			cat.gender
																		}</span>
                                </li>
                            </ul>
                        </div>
                `;

				catsBox.appendChild(catBox);
			});
		});

		let dogBoxArray = [...document.querySelectorAll('#dogs-box .page__box')];
		let catBoxArray = [...document.querySelectorAll('#cats-box .page__box')];
		let currentPage = 1;
		let elementsOnPage = 4;

		const paginationElDogs = document.getElementById('dogs-pagination');
		const paginationElCats = document.getElementById('cats-pagination');

		function displayPaginatedItems(items, wrapper, itemsPerPage, page) {
			wrapper.innerHTML = '';
			page--;

			let start = itemsPerPage * page;
			let end = start + itemsPerPage;
			let paginatedItems = items.slice(start, end);

			paginatedItems.forEach((item) => {
				let itemEl = document.createElement('div');
				itemEl.classList.add('page__box');

				itemEl = item;

				wrapper.appendChild(itemEl);
			});
		}

		function displayPagination(items, wrapper, itemsPerPage) {
			wrapper.innerHTML = '';

			let pageCount = Math.ceil(items.length / itemsPerPage);

			for (let i = 1; i < pageCount + 1; i++) {
				let btn = paginationButton(i);

				wrapper.appendChild(btn);
			}
		}

		function paginationButton(page) {
			let button = document.createElement('button');
			button.classList.add('pagination-btn');
			button.innerText = page;

			if (currentPage == page) {
				button.classList.add('active');
			}

			button.addEventListener('click', (e) => {
				currentPage = page;

				displayPaginatedItems(
					dogBoxArray,
					dogsBox,
					elementsOnPage,
					currentPage
				);

				displayPaginatedItems(
					catBoxArray,
					catsBox,
					elementsOnPage,
					currentPage
				);

				let activeBtnDog = document.querySelector(
					'#dogs .pagination-btn.active'
				);
				let activeBtnCat = document.querySelector(
					'#cats .pagination-btn.active'
				);

				console.log(activeBtnDog);
				if (activeBtnDog) {
					activeBtnDog.classList.remove('active');
				}

				if (activeBtnCat) {
					activeBtnCat.classList.remove('active');
				}

				button.classList.add('active');
			});

			return button;
		}

		if (dogsBox) {
			displayPaginatedItems(dogBoxArray, dogsBox, elementsOnPage, currentPage);
			displayPagination(dogBoxArray, paginationElDogs, elementsOnPage);
		}

		if (catsBox) {
			displayPaginatedItems(catBoxArray, catsBox, elementsOnPage, currentPage);
			displayPagination(catBoxArray, paginationElCats, elementsOnPage);
		}

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Fkb3B0Q29udGVudFN3aXRjaGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9mZXRjaEFuaW1hbHNEYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9mb3JtVmFsaWRhaXRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbmF2LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RhYmNjb3JkaW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRztBQUNILEVBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOERBQThELE9BQU87QUFDckU7QUFDQSxnQ0FBZ0MsT0FBTztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ2pDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx5Q0FBeUMsVUFBVSxTQUFTLFNBQVM7QUFDckU7QUFDQSxLQUFLLEVBQUU7QUFDUDtBQUNBO0FBQ0EsMERBQTBELFNBQVM7QUFDbkU7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLEVBQUUsV0FBVztBQUM5QjtBQUNBLDBDQUEwQztBQUMxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0UsWUFBWTtBQUM1RTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRSxNQUFNO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxrQ0FBa0M7QUFDakY7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGtDQUFrQztBQUNqRjtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0Msa0NBQWtDO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHlDQUF5QyxVQUFVLFNBQVMsU0FBUztBQUNyRTtBQUNBLEtBQUssRUFBRTtBQUNQO0FBQ0E7QUFDQSwwREFBMEQsU0FBUztBQUNuRTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsRUFBRSxXQUFXO0FBQzlCO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxZQUFZO0FBQzVFO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFLFNBQVM7QUFDbkY7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGtDQUFrQztBQUNqRjtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0Msa0NBQWtDO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxrQ0FBa0M7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBOztBQUVBOztBQUVBLGtCQUFrQixtQkFBbUI7QUFDckM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNqWEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUMseUJBQXlCLDZCQUE2QixJQUFJLFFBQVEsSUFBSSxRQUFRLElBQUksUUFBUSxJQUFJLGdDQUFnQyxHQUFHO0FBQ2xLO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDdkZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRixDQUFDOzs7Ozs7Ozs7Ozs7QUNmRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7Ozs7Ozs7Ozs7OztBQ3BCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBLHFDQUFxQyxZQUFZO0FBQ2pELG1DQUFtQyxjQUFjO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDakdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLFVBQVU7QUFDOUM7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxJQUFJO0FBQ0osR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuXHRoaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBudWxsLCAnICcpO1xyXG5cdGNvbnN0IHRhYlN3aXRjaGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXN3aXRjaGVyXScpO1xyXG5cclxuXHR0YWJTd2l0Y2hlcnMuZm9yRWFjaCgodGFiU3dpdGNoKSA9PiB7XHJcblx0XHRjb25zdCB0YWJTd2l0Y2hlciA9IHRhYlN3aXRjaDtcclxuXHRcdGNvbnN0IHBhZ2VJZCA9IHRhYlN3aXRjaGVyLmRhdGFzZXQudGFiO1xyXG5cclxuXHRcdHRhYlN3aXRjaGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHRcdFx0ZG9jdW1lbnRcclxuXHRcdFx0XHQucXVlcnlTZWxlY3RvcignLmFkb3B0X19saXN0LWl0ZW0uYWN0aXZlJylcclxuXHRcdFx0XHQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblxyXG5cdFx0XHR0YWJTd2l0Y2hlci5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRzd2l0Y2hQYWdlKHBhZ2VJZCk7XHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHJcblx0ZnVuY3Rpb24gc3dpdGNoUGFnZShwYWdlSWQpIHtcclxuXHRcdGNvbnN0IGN1cnJlbnRQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UuYWN0aXZlJyk7XHJcblx0XHRjb25zdCBjdXJyZW50UGFnZUhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLWhlYWRlci5hY3RpdmUnKTtcclxuXHJcblx0XHRjdXJyZW50UGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdGN1cnJlbnRQYWdlSGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cclxuXHRcdGNvbnN0IG5leHRQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBhZ2VbZGF0YS1wYWdlPVwiJHtwYWdlSWR9XCJdYCk7XHJcblx0XHRjb25zdCBuZXh0UGFnZUhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdGAucGFnZS1oZWFkZXJbZGF0YS1oZWFkZXI9XCIke3BhZ2VJZH1cIl1gXHJcblx0XHQpO1xyXG5cdFx0bmV4dFBhZ2UuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblx0XHRuZXh0UGFnZUhlYWRlci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHR9XHJcbn0pO1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IGFuaW1hbHNVcmwgPSAnLi4vanMvYW5pbWFscy5qc29uJztcclxuXHRjb25zdCBhbmltYWxzUGFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5pbWFscy1wYWdlcycpO1xyXG5cdGNvbnN0IGRvZ3NCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG9ncy1ib3gnKTtcclxuXHRjb25zdCBjYXRzQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdHMtYm94Jyk7XHJcblxyXG5cdGZ1bmN0aW9uIGdldEFuaW1hbHNEYXRhKCkge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0ZmV0Y2goYW5pbWFsc1VybClcclxuXHRcdFx0XHQudGhlbigocmVzcCkgPT4gcmVzcC5qc29uKCkpXHJcblx0XHRcdFx0LnRoZW4oKGRhdGEpID0+IHJlc29sdmUoZGF0YSkpXHJcblx0XHRcdFx0LmNhdGNoKChlcnIpID0+IHJlamVjdChlcnIpKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgZG9nTnVtYmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RvZ051bWJlcicpO1xyXG5cdGNvbnN0IGNhdE51bWJlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXROdW1iZXInKTtcclxuXHJcblx0YXN5bmMgZnVuY3Rpb24gZGlzcGxheUFuaW1hbE51bWJlcnMoKSB7XHJcblx0XHRjb25zdCBkYXRhTGlzdCA9IGF3YWl0IGdldEFuaW1hbHNEYXRhKCk7XHJcblx0XHRjb25zdCBhbmltYWxzQXJyYXkgPSBkYXRhTGlzdC5hbmltYWxzO1xyXG5cclxuXHRcdGxldCBkb2dzQXJyYXlOdW1iZXIgPSBhbmltYWxzQXJyYXlbMF0uZG9ncy5sZW5ndGg7XHJcblx0XHRsZXQgY2F0c0FycmF5TnVtYmVyID0gYW5pbWFsc0FycmF5WzBdLmNhdHMubGVuZ3RoO1xyXG5cclxuXHRcdGRvZ051bWJlci5pbm5lclRleHQgPSBkb2dzQXJyYXlOdW1iZXI7XHJcblx0XHRjYXROdW1iZXIuaW5uZXJUZXh0ID0gY2F0c0FycmF5TnVtYmVyO1xyXG5cdH1cclxuXHJcblx0aWYgKChkb2dOdW1iZXIsIGNhdE51bWJlcikpIHtcclxuXHRcdChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGRpc3BsYXlBbmltYWxOdW1iZXJzKCk7XHJcblx0XHR9KSgpO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgZnVuY3Rpb24gZGlzcGxheUFuaW1hbHMoKSB7XHJcblx0XHRjb25zdCBkYXRhTGlzdCA9IGF3YWl0IGdldEFuaW1hbHNEYXRhKCk7XHJcblx0XHRjb25zdCBhbmltYWxzQXJyYXkgPSBkYXRhTGlzdC5hbmltYWxzO1xyXG5cclxuXHRcdGFuaW1hbHNBcnJheS5mb3JFYWNoKChhbmltYWwpID0+IHtcclxuXHRcdFx0ZG9nc0FycmF5ID0gYW5pbWFsLmRvZ3M7XHJcblx0XHRcdGNhdHNBcnJheSA9IGFuaW1hbC5jYXRzO1xyXG5cclxuXHRcdFx0ZG9nc0FycmF5LmZvckVhY2goKGRvZykgPT4ge1xyXG5cdFx0XHRcdGRvZ0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0XHRcdGRvZ0JveC5jbGFzc0xpc3QuYWRkKCdwYWdlX19ib3gnKTtcclxuXHJcblx0XHRcdFx0Y29uc3QgZG9nWWVhcnMgPSBkb2cuYmlydGg7XHJcblxyXG5cdFx0XHRcdGNvbnN0IG1pbGlzZWNzQmV0d2VlbkRPQmFuZDE5NzAgPSBEYXRlLnBhcnNlKGRvZ1llYXJzKTtcclxuXHRcdFx0XHRjb25zdCBtaWxpc2Vjc0JldHdlZW5OT1dhbmQxOTcwID0gRGF0ZS5ub3coKTtcclxuXHRcdFx0XHRjb25zdCBhZ2VJbk1pbGlzZWNzID1cclxuXHRcdFx0XHRcdG1pbGlzZWNzQmV0d2Vlbk5PV2FuZDE5NzAgLSBtaWxpc2Vjc0JldHdlZW5ET0JhbmQxOTcwO1xyXG5cclxuXHRcdFx0XHRjb25zdCBtaWxpc2VjcyA9IGFnZUluTWlsaXNlY3M7XHJcblx0XHRcdFx0Y29uc3Qgc2VjcyA9IDEwMDA7XHJcblx0XHRcdFx0Y29uc3QgbWlucyA9IHNlY3MgKiA2MDtcclxuXHRcdFx0XHRjb25zdCBob3VyID0gbWlucyAqIDYwO1xyXG5cdFx0XHRcdGNvbnN0IGRheSA9IGhvdXIgKiAyNDtcclxuXHRcdFx0XHRjb25zdCB5ZWFyID0gZGF5ICogMzY1O1xyXG5cclxuXHRcdFx0XHRsZXQgeWVhcnMgPSBNYXRoLnJvdW5kKG1pbGlzZWNzIC8geWVhcik7XHJcblxyXG5cdFx0XHRcdGRvZ0JveC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlX19ib3gtdG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4ke2RvZy5pbWFnZX1cIiBhbHQ9XCIke2RvZy5uYW1lfSAke1xyXG5cdFx0XHRcdFx0ZG9nLnNwZWNpZXNcclxuXHRcdFx0XHR9XCJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlX19ib3gtYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJwYWdlX19ib3gtdGl0bGVcIj4ke2RvZy5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZV9fYm94LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXhwYW5kTW9yZUNvbnRlbnRcIiBpZD1cInNob3dNb3JlLSR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkb2cuc3BlY2llc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0ke2RvZy5udW1iZXJ9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicGFnZV9fYm94LXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7ZG9nLmRlc2N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleHBhbmRNb3JlSG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZC1tb3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWhpZGV0ZXh0PVwiLi4uUmVhZCBsZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtc2hvd3RleHQ9XCIuLi5SZWFkIG1vcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCJzaG93TW9yZS0ke2RvZy5zcGVjaWVzfSR7XHJcblx0XHRcdFx0XHRkb2cubnVtYmVyXHJcblx0XHRcdFx0fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ1dHRvbiBzaG93TW9yZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLlJlYWQgbW9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJwYWdlX19ib3gtaWNvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS13ZWlnaHRcIj48L2lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxzcGFuIGNsYXNzPVwicGFnZV9fYm94LWljb24tLXRleHRcIj4ke1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRvZy53ZWlnaHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSBrZzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VfX2JveC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWFycm93cy1hbHQtdlwiPjwvaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PHNwYW4gY2xhc3M9XCJwYWdlX19ib3gtaWNvbi0tdGV4dFwiPiR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZG9nLmhlaWdodFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9Y208L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jYWxlbmRhci1jaGVja1wiPjwvaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PHNwYW4gY2xhc3M9XCJwYWdlX19ib3gtaWNvbi0tdGV4dFwiPiR7eWVhcnN9IHlyLjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VfX2JveC1pY29uXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVwiZmFzIGZhLXBhbGV0dGVcIj48L2lcclxuXHRcdFx0XHRcdFx0XHRcdFx0PjxzcGFuIGNsYXNzPVwicGFnZV9fYm94LWljb24tLXRleHRcIj4ke2RvZy5jb2xvclswXSA/IGRvZy5jb2xvclswXSA6ICctJ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cImZhcyBmYS1wYWxldHRlXCI+PC9pXHJcblx0XHRcdFx0XHRcdFx0XHRcdD48c3BhbiBjbGFzcz1cInBhZ2VfX2JveC1pY29uLS10ZXh0XCI+JHtkb2cuY29sb3JbMV0gPyBkb2cuY29sb3JbMV0gOiAnLSd9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZV9fYm94LWljb25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJmYXMgZmEtcGFsZXR0ZVwiPjwvaVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+PHNwYW4gY2xhc3M9XCJwYWdlX19ib3gtaWNvbi0tdGV4dFwiPiR7ZG9nLmNvbG9yWzJdID8gZG9nLmNvbG9yWzJdIDogJy0nfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZV9fYm94LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtcGF3XCI+PC9pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48c3BhbiBjbGFzcz1cInBhZ2VfX2JveC1pY29uLS10ZXh0XCI+JHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkb2cuY29hdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZV9fYm94LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdmVudXMtbWFyc1wiPjwvaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PHNwYW4gY2xhc3M9XCJwYWdlX19ib3gtaWNvbi0tdGV4dFwiPiR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZG9nLmdlbmRlclxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIGA7XHJcblxyXG5cdFx0XHRcdGRvZ3NCb3guYXBwZW5kQ2hpbGQoZG9nQm94KTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRjYXRzQXJyYXkuZm9yRWFjaCgoY2F0KSA9PiB7XHJcblx0XHRcdFx0Y2F0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRcdFx0Y2F0Qm94LmNsYXNzTGlzdC5hZGQoJ3BhZ2VfX2JveCcpO1xyXG5cclxuXHRcdFx0XHRjb25zdCBjYXRZZWFycyA9IGNhdC5iaXJ0aDtcclxuXHJcblx0XHRcdFx0Y29uc3QgbWlsaXNlY3NCZXR3ZWVuRE9CYW5kMTk3MGNhdCA9IERhdGUucGFyc2UoY2F0WWVhcnMpO1xyXG5cdFx0XHRcdGNvbnN0IG1pbGlzZWNzQmV0d2Vlbk5PV2FuZDE5NzAgPSBEYXRlLm5vdygpO1xyXG5cclxuXHRcdFx0XHRjb25zdCBhZ2VJbk1pbGlzZWNzQ2F0ID1cclxuXHRcdFx0XHRcdG1pbGlzZWNzQmV0d2Vlbk5PV2FuZDE5NzAgLSBtaWxpc2Vjc0JldHdlZW5ET0JhbmQxOTcwY2F0O1xyXG5cclxuXHRcdFx0XHRjb25zdCBtaWxpc2Vjc0NhdCA9IGFnZUluTWlsaXNlY3NDYXQ7XHJcblx0XHRcdFx0Y29uc3Qgc2VjcyA9IDEwMDA7XHJcblx0XHRcdFx0Y29uc3QgbWlucyA9IHNlY3MgKiA2MDtcclxuXHRcdFx0XHRjb25zdCBob3VyID0gbWlucyAqIDYwO1xyXG5cdFx0XHRcdGNvbnN0IGRheSA9IGhvdXIgKiAyNDtcclxuXHRcdFx0XHRjb25zdCB5ZWFyID0gZGF5ICogMzY1O1xyXG5cclxuXHRcdFx0XHRsZXQgeWVhcnNDYXQgPSBNYXRoLnJvdW5kKG1pbGlzZWNzQ2F0IC8geWVhcik7XHJcblxyXG5cdFx0XHRcdGNhdEJveC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlX19ib3gtdG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4ke2NhdC5pbWFnZX1cIiBhbHQ9XCIke2NhdC5uYW1lfSAke1xyXG5cdFx0XHRcdFx0Y2F0LnNwZWNpZXNcclxuXHRcdFx0XHR9XCJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlX19ib3gtYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJwYWdlX19ib3gtdGl0bGVcIj4ke2NhdC5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZV9fYm94LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXhwYW5kTW9yZUNvbnRlbnRcIiBpZD1cInNob3dNb3JlLSR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjYXQuc3BlY2llc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0ke2NhdC5udW1iZXJ9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicGFnZV9fYm94LXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7Y2F0LmRlc2N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleHBhbmRNb3JlSG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZC1tb3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWhpZGV0ZXh0PVwiLi4uUmVhZCBsZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtc2hvd3RleHQ9XCIuLi5SZWFkIG1vcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCJzaG93TW9yZS0ke2NhdC5zcGVjaWVzfSR7XHJcblx0XHRcdFx0XHRjYXQubnVtYmVyXHJcblx0XHRcdFx0fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ1dHRvbiBzaG93TW9yZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLlJlYWQgbW9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJwYWdlX19ib3gtaWNvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS13ZWlnaHRcIj48L2lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxzcGFuIGNsYXNzPVwicGFnZV9fYm94LWljb24tLXRleHRcIj4ke1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNhdC53ZWlnaHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSBrZzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VfX2JveC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWFycm93cy1hbHQtdlwiPjwvaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PHNwYW4gY2xhc3M9XCJwYWdlX19ib3gtaWNvbi0tdGV4dFwiPiR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2F0LmhlaWdodFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9Y208L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jYWxlbmRhci1jaGVja1wiPjwvaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PHNwYW4gY2xhc3M9XCJwYWdlX19ib3gtaWNvbi0tdGV4dFwiPiR7eWVhcnNDYXR9IHlyLjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VfX2JveC1pY29uXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVwiZmFzIGZhLXBhbGV0dGVcIj48L2lcclxuXHRcdFx0XHRcdFx0XHRcdFx0PjxzcGFuIGNsYXNzPVwicGFnZV9fYm94LWljb24tLXRleHRcIj4ke2NhdC5jb2xvclswXSA/IGNhdC5jb2xvclswXSA6ICctJ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cImZhcyBmYS1wYWxldHRlXCI+PC9pXHJcblx0XHRcdFx0XHRcdFx0XHRcdD48c3BhbiBjbGFzcz1cInBhZ2VfX2JveC1pY29uLS10ZXh0XCI+JHtjYXQuY29sb3JbMV0gPyBjYXQuY29sb3JbMV0gOiAnLSd9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZV9fYm94LWljb25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJmYXMgZmEtcGFsZXR0ZVwiPjwvaVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+PHNwYW4gY2xhc3M9XCJwYWdlX19ib3gtaWNvbi0tdGV4dFwiPiR7Y2F0LmNvbG9yWzJdID8gY2F0LmNvbG9yWzJdIDogJy0nfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZV9fYm94LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtcGF3XCI+PC9pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48c3BhbiBjbGFzcz1cInBhZ2VfX2JveC1pY29uLS10ZXh0XCI+JHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjYXQuY29hdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZV9fYm94LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdmVudXMtbWFyc1wiPjwvaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PHNwYW4gY2xhc3M9XCJwYWdlX19ib3gtaWNvbi0tdGV4dFwiPiR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2F0LmdlbmRlclxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIGA7XHJcblxyXG5cdFx0XHRcdGNhdHNCb3guYXBwZW5kQ2hpbGQoY2F0Qm94KTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRsZXQgZG9nQm94QXJyYXkgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2RvZ3MtYm94IC5wYWdlX19ib3gnKV07XHJcblx0XHRsZXQgY2F0Qm94QXJyYXkgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NhdHMtYm94IC5wYWdlX19ib3gnKV07XHJcblx0XHRsZXQgY3VycmVudFBhZ2UgPSAxO1xyXG5cdFx0bGV0IGVsZW1lbnRzT25QYWdlID0gNDtcclxuXHJcblx0XHRjb25zdCBwYWdpbmF0aW9uRWxEb2dzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RvZ3MtcGFnaW5hdGlvbicpO1xyXG5cdFx0Y29uc3QgcGFnaW5hdGlvbkVsQ2F0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRzLXBhZ2luYXRpb24nKTtcclxuXHJcblx0XHRmdW5jdGlvbiBkaXNwbGF5UGFnaW5hdGVkSXRlbXMoaXRlbXMsIHdyYXBwZXIsIGl0ZW1zUGVyUGFnZSwgcGFnZSkge1xyXG5cdFx0XHR3cmFwcGVyLmlubmVySFRNTCA9ICcnO1xyXG5cdFx0XHRwYWdlLS07XHJcblxyXG5cdFx0XHRsZXQgc3RhcnQgPSBpdGVtc1BlclBhZ2UgKiBwYWdlO1xyXG5cdFx0XHRsZXQgZW5kID0gc3RhcnQgKyBpdGVtc1BlclBhZ2U7XHJcblx0XHRcdGxldCBwYWdpbmF0ZWRJdGVtcyA9IGl0ZW1zLnNsaWNlKHN0YXJ0LCBlbmQpO1xyXG5cclxuXHRcdFx0cGFnaW5hdGVkSXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG5cdFx0XHRcdGxldCBpdGVtRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdFx0XHRpdGVtRWwuY2xhc3NMaXN0LmFkZCgncGFnZV9fYm94Jyk7XHJcblxyXG5cdFx0XHRcdGl0ZW1FbCA9IGl0ZW07XHJcblxyXG5cdFx0XHRcdHdyYXBwZXIuYXBwZW5kQ2hpbGQoaXRlbUVsKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gZGlzcGxheVBhZ2luYXRpb24oaXRlbXMsIHdyYXBwZXIsIGl0ZW1zUGVyUGFnZSkge1xyXG5cdFx0XHR3cmFwcGVyLmlubmVySFRNTCA9ICcnO1xyXG5cclxuXHRcdFx0bGV0IHBhZ2VDb3VudCA9IE1hdGguY2VpbChpdGVtcy5sZW5ndGggLyBpdGVtc1BlclBhZ2UpO1xyXG5cclxuXHRcdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCBwYWdlQ291bnQgKyAxOyBpKyspIHtcclxuXHRcdFx0XHRsZXQgYnRuID0gcGFnaW5hdGlvbkJ1dHRvbihpKTtcclxuXHJcblx0XHRcdFx0d3JhcHBlci5hcHBlbmRDaGlsZChidG4pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gcGFnaW5hdGlvbkJ1dHRvbihwYWdlKSB7XHJcblx0XHRcdGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHRcdFx0YnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3BhZ2luYXRpb24tYnRuJyk7XHJcblx0XHRcdGJ1dHRvbi5pbm5lclRleHQgPSBwYWdlO1xyXG5cclxuXHRcdFx0aWYgKGN1cnJlbnRQYWdlID09IHBhZ2UpIHtcclxuXHRcdFx0XHRidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0XHRcdFx0Y3VycmVudFBhZ2UgPSBwYWdlO1xyXG5cclxuXHRcdFx0XHRkaXNwbGF5UGFnaW5hdGVkSXRlbXMoXHJcblx0XHRcdFx0XHRkb2dCb3hBcnJheSxcclxuXHRcdFx0XHRcdGRvZ3NCb3gsXHJcblx0XHRcdFx0XHRlbGVtZW50c09uUGFnZSxcclxuXHRcdFx0XHRcdGN1cnJlbnRQYWdlXHJcblx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0ZGlzcGxheVBhZ2luYXRlZEl0ZW1zKFxyXG5cdFx0XHRcdFx0Y2F0Qm94QXJyYXksXHJcblx0XHRcdFx0XHRjYXRzQm94LFxyXG5cdFx0XHRcdFx0ZWxlbWVudHNPblBhZ2UsXHJcblx0XHRcdFx0XHRjdXJyZW50UGFnZVxyXG5cdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdGxldCBhY3RpdmVCdG5Eb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHRcdFx0JyNkb2dzIC5wYWdpbmF0aW9uLWJ0bi5hY3RpdmUnXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHRsZXQgYWN0aXZlQnRuQ2F0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuXHRcdFx0XHRcdCcjY2F0cyAucGFnaW5hdGlvbi1idG4uYWN0aXZlJ1xyXG5cdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGFjdGl2ZUJ0bkRvZyk7XHJcblx0XHRcdFx0aWYgKGFjdGl2ZUJ0bkRvZykge1xyXG5cdFx0XHRcdFx0YWN0aXZlQnRuRG9nLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKGFjdGl2ZUJ0bkNhdCkge1xyXG5cdFx0XHRcdFx0YWN0aXZlQnRuQ2F0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0YnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiBidXR0b247XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGRvZ3NCb3gpIHtcclxuXHRcdFx0ZGlzcGxheVBhZ2luYXRlZEl0ZW1zKGRvZ0JveEFycmF5LCBkb2dzQm94LCBlbGVtZW50c09uUGFnZSwgY3VycmVudFBhZ2UpO1xyXG5cdFx0XHRkaXNwbGF5UGFnaW5hdGlvbihkb2dCb3hBcnJheSwgcGFnaW5hdGlvbkVsRG9ncywgZWxlbWVudHNPblBhZ2UpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChjYXRzQm94KSB7XHJcblx0XHRcdGRpc3BsYXlQYWdpbmF0ZWRJdGVtcyhjYXRCb3hBcnJheSwgY2F0c0JveCwgZWxlbWVudHNPblBhZ2UsIGN1cnJlbnRQYWdlKTtcclxuXHRcdFx0ZGlzcGxheVBhZ2luYXRpb24oY2F0Qm94QXJyYXksIHBhZ2luYXRpb25FbENhdHMsIGVsZW1lbnRzT25QYWdlKTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBleHBhbmRzTW9yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tleHBhbmQtbW9yZV0nKTtcclxuXHJcblx0XHRmdW5jdGlvbiBleHBhbmQoKSB7XHJcblx0XHRcdGNvbnN0IHNob3dDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5kYXRhc2V0LnRhcmdldCk7XHJcblx0XHRcdGlmIChzaG93Q29udGVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcblx0XHRcdFx0dGhpcy5pbm5lckhUTUwgPSB0aGlzLmRhdGFzZXQuc2hvd3RleHQ7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5pbm5lckhUTUwgPSB0aGlzLmRhdGFzZXQuaGlkZXRleHQ7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHNob3dDb250ZW50LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG5cdFx0XHRpZiAoc2hvd0NvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG5cdFx0XHRcdHNob3dDb250ZW50LnN0eWxlLm1heEhlaWdodCA9IHNob3dDb250ZW50LnNjcm9sbEhlaWdodCArICdweCc7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2hvd0NvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gMjAgKyAncHgnO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0ZXhwYW5kc01vcmUuZm9yRWFjaCgoYnRuKSA9PiB7XHJcblx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV4cGFuZCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGlmIChhbmltYWxzUGFnZXMpIHtcclxuXHRcdChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGRpc3BsYXlBbmltYWxzKCk7XHJcblx0XHR9KSgpO1xyXG5cdH1cclxufSk7XHJcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcblx0Ly8gZm9ybSB2YWxpZGF0aW9uXHJcblx0Y29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0LWZvcm0nKTtcclxuXHRjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKTtcclxuXHRjb25zdCBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbCcpO1xyXG5cdGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzc2FnZScpO1xyXG5cdGNvbnN0IGZvcm1CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1idG4nKTtcclxuXHJcblx0aWYgKGZvcm0pIHtcclxuXHRcdFtcclxuXHRcdFx0J2NsaWNrJyxcclxuXHRcdFx0J29udG91Y2hzdGFydCcsXHJcblx0XHRcdCdtb3VzZW92ZXInLFxyXG5cdFx0XHQna2V5ZG93bicsXHJcblx0XHRcdCdrZXlwcmVzcycsXHJcblx0XHRcdCd0b3VjaHN0YXJ0JyxcclxuXHRcdFx0J3RvdWNobW92ZScsXHJcblx0XHRdLmZvckVhY2goXHJcblx0XHRcdChldmVudCkgPT5cclxuXHRcdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCAoKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoY2hlY2tJbnB1dHMoKSA9PT0gZmFsc2UpIHtcclxuXHRcdFx0XHRcdFx0Zm9ybUJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRmb3JtQnRuLmRpc2FibGVkID0gZmFsc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cclxuXHRcdGZ1bmN0aW9uIGNoZWNrSW5wdXRzKCkge1xyXG5cdFx0XHRjb25zdCBuYW1lVmFsdWUgPSBuYW1lLnZhbHVlLnRyaW0oKTtcclxuXHRcdFx0Y29uc3QgZW1haWxWYWx1ZSA9IGVtYWlsLnZhbHVlLnRyaW0oKTtcclxuXHRcdFx0Y29uc3QgbWVzc2FnZVZhbHVlID0gbWVzc2FnZS52YWx1ZS50cmltKCk7XHJcblxyXG5cdFx0XHRpZiAobmFtZVZhbHVlID09PSAnJykge1xyXG5cdFx0XHRcdHNldEVycm9yRm9yKG5hbWUsICdQbGVhc2UgZW50ZXIgeW91ciBmdWxsIG5hbWUnKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRTdWNjZXNzRm9yKG5hbWUpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoZW1haWxWYWx1ZSA9PT0gJycpIHtcclxuXHRcdFx0XHRzZXRFcnJvckZvcihlbWFpbCwgJ1BsZWFzZSBlbnRlciB5b3VyIGVtYWlsIGFkZHJlc3MnKTtcclxuXHRcdFx0fSBlbHNlIGlmICghZW1haWxJc1ZhbGlkKGVtYWlsVmFsdWUpKSB7XHJcblx0XHRcdFx0c2V0RXJyb3JGb3IoZW1haWwsICdFbWFpbCBpcyBub3QgdmFsaWQnKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRTdWNjZXNzRm9yKGVtYWlsKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKG1lc3NhZ2VWYWx1ZSA9PT0gJycpIHtcclxuXHRcdFx0XHRzZXRFcnJvckZvcihtZXNzYWdlLCAnUGxlYXNlIGVudGVyIHlvdXIgbWVzc2FnZScpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldFN1Y2Nlc3NGb3IobWVzc2FnZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChcclxuXHRcdFx0XHRuYW1lVmFsdWUgPT09ICcnIHx8XHJcblx0XHRcdFx0ZW1haWxWYWx1ZSA9PT0gJycgfHxcclxuXHRcdFx0XHRtZXNzYWdlVmFsdWUgPT09ICcnIHx8XHJcblx0XHRcdFx0IWVtYWlsSXNWYWxpZChlbWFpbFZhbHVlKVxyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBzZXRFcnJvckZvcihpbnB1dCwgbWVzc2FnZSkge1xyXG5cdFx0XHRjb25zdCBmb3JtID0gaW5wdXQucGFyZW50RWxlbWVudDtcclxuXHRcdFx0Y29uc3Qgc21hbGwgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ3NtYWxsJyk7XHJcblxyXG5cdFx0XHRzbWFsbC5pbm5lclRleHQgPSBtZXNzYWdlO1xyXG5cdFx0XHRmb3JtLmNsYXNzTmFtZSA9ICdmb3JtX19ncm91cCBlcnJvcic7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gc2V0U3VjY2Vzc0ZvcihpbnB1dCkge1xyXG5cdFx0XHRjb25zdCBmb3JtID0gaW5wdXQucGFyZW50RWxlbWVudDtcclxuXHRcdFx0Zm9ybS5jbGFzc05hbWUgPSAnZm9ybV9fZ3JvdXAgc3VjY2Vzcyc7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gZW1haWxJc1ZhbGlkKGVtYWlsKSB7XHJcblx0XHRcdGNvbnN0IHJlID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC8udGVzdChcclxuXHRcdFx0XHRlbWFpbFxyXG5cdFx0XHQpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHJlO1xyXG5cdFx0fVxyXG5cdH1cclxufSk7XHJcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKGUpID0+IHtcblx0XHRjb25zdCBwcmVsb2FkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWxvYWQnKTtcblxuXHRcdHByZWxvYWQuY2xhc3NMaXN0LmFkZCgncHJlbG9hZC1maW5pc2hlZCcpO1xuXHR9KTtcblxuXHRjb25zdCBidG5TY3JvbGxUb1RvcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5TY3JvbGxUb1RvcCcpO1xuXHRidG5TY3JvbGxUb1RvcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0d2luZG93LnNjcm9sbFRvKHtcblx0XHRcdHRvcDogMCxcblx0XHRcdGxlZnQ6IDAsXG5cdFx0XHRiZWhhdmlvcjogJ3Ntb290aCcsXG5cdFx0fSk7XG5cdH0pO1xufSk7XG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IG5hdkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYtY29udGFpbmVyJyk7XHJcblx0Y29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LWJ0bicpO1xyXG5cdGNvbnN0IG5hdkxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2LWxpc3QnKTtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIChlKSA9PiB7XHJcblx0XHRpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA+IDApIHtcclxuXHRcdFx0bmF2Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N0aWNreScpO1xyXG5cdFx0XHRidG5TY3JvbGxUb1RvcC5zdHlsZS5vcGFjaXR5ID0gMTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG5hdkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdzdGlja3knKTtcclxuXHRcdFx0YnRuU2Nyb2xsVG9Ub3Auc3R5bGUub3BhY2l0eSA9IDA7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0bWVudUJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdjbGlja2VkJyk7XHJcblx0XHRuYXZDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnb3ZlcmxheScpO1xyXG5cdFx0bmF2TGlzdC5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XHJcblx0fSk7XHJcbn0pO1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG5cdC8vIGNhcm91c2VsXHJcblx0Y29uc3QgY2Fyb3VzZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2Fyb3VzZWwnKTtcclxuXHRjb25zdCBwcmV2QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXYnKTtcclxuXHRjb25zdCBuZXh0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHQnKTtcclxuXHRjb25zdCBjYXJvdXNlbFVybCA9ICcuL2pzL2Nhcm91c2VsLmpzb24nO1xyXG5cclxuXHRsZXQgZmlyc3RTbGlkZTtcclxuXHRsZXQgbGFzdFNsaWRlO1xyXG5cclxuXHRmdW5jdGlvbiBnZXRTbGlkZXNEYXRhKCkge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0ZmV0Y2goY2Fyb3VzZWxVcmwpXHJcblx0XHRcdFx0LnRoZW4oKHJlc3ApID0+IHJlc3AuanNvbigpKVxyXG5cdFx0XHRcdC50aGVuKChkYXRhKSA9PiByZXNvbHZlKGRhdGEpKVxyXG5cdFx0XHRcdC5jYXRjaCgoZXJyKSA9PiByZWplY3QoZXJyKSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGZ1bmN0aW9uIGRpc3BsYXlDYXJvdXNlbCgpIHtcclxuXHRcdGNvbnN0IGRhdGFMaXN0ID0gYXdhaXQgZ2V0U2xpZGVzRGF0YSgpO1xyXG5cdFx0Y29uc3Qgc2xpZGVzQXJyYXkgPSBkYXRhTGlzdC5zbGlkZXM7XHJcblxyXG5cdFx0c2xpZGVzQXJyYXkuZm9yRWFjaCgoc2xpZGUsIHNsaWRlTnVtYmVyKSA9PiB7XHJcblx0XHRcdG5ld1NsaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRcdG5ld1NsaWRlLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsX19zbGlkZScpO1xyXG5cclxuXHRcdFx0bmV3U2xpZGUuaW5uZXJIVE1MID0gYFxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2Fyb3VzZWxfX2ltYWdlLWNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiJHtzbGlkZS5pbWFnZX1cIiBhbHQ9XCJzbGlkZS1pbWdcIiAvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcm91c2VsX19jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0PGgxIGNsYXNzPVwiY2Fyb3VzZWxfX3RpdGxlXCI+JHtzbGlkZS50aXRsZX08L2gxPlxyXG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzPVwiY2Fyb3VzZWxfX2Rlc2NcIj4ke3NsaWRlLmNvbnRlbnR9PC9wPlxyXG5cdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJoZWFkZXJfX25hdi1kb25hdGUtYnRuIGJ1dHRvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0RHVnbWUgemEgbmXFoXRvXHJcblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRgO1xyXG5cclxuXHRcdFx0Y2Fyb3VzZWwuYXBwZW5kQ2hpbGQobmV3U2xpZGUpO1xyXG5cclxuXHRcdFx0aWYgKHNsaWRlTnVtYmVyID09PSAwKSB7XHJcblx0XHRcdFx0Zmlyc3RTbGlkZSA9IG5ld1NsaWRlO1xyXG5cdFx0XHRcdG5ld1NsaWRlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHNsaWRlTnVtYmVyICsgMSA9PT0gZGF0YUxpc3Quc2xpZGVzLmxlbmd0aCkge1xyXG5cdFx0XHRcdGxhc3RTbGlkZSA9IG5ld1NsaWRlO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHRuZXh0U2xpZGUoKTtcclxuXHRcdHByZXZpb3VzU2xpZGUoKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG5leHRTbGlkZSgpIHtcclxuXHRcdGNvbnN0IG5leHRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dCcpO1xyXG5cclxuXHRcdG5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0XHRjb25zdCBhY3RpdmVTbGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fc2xpZGUuYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRsZXQgbmV4dFNpYmxpbmcgPSBhY3RpdmVTbGlkZS5uZXh0RWxlbWVudFNpYmxpbmc7XHJcblxyXG5cdFx0XHRpZiAobmV4dFNpYmxpbmcgPT0gbnVsbCkge1xyXG5cdFx0XHRcdG5leHRTaWJsaW5nID0gYWN0aXZlU2xpZGU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChuZXh0U2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ2Nhcm91c2VsX19zbGlkZScpKSB7XHJcblx0XHRcdFx0YWN0aXZlU2xpZGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0XHRcdFx0bmV4dFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gcHJldmlvdXNTbGlkZSgpIHtcclxuXHRcdGNvbnN0IHByZXZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldicpO1xyXG5cclxuXHRcdHByZXZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0XHRjb25zdCBhY3RpdmVTbGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fc2xpZGUuYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRsZXQgbmV4dFNpYmxpbmcgPSBhY3RpdmVTbGlkZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG5cclxuXHRcdFx0aWYgKG5leHRTaWJsaW5nID09IG51bGwpIHtcclxuXHRcdFx0XHRuZXh0U2libGluZyA9IGFjdGl2ZVNsaWRlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAobmV4dFNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJvdXNlbF9fc2xpZGUnKSkge1xyXG5cdFx0XHRcdGFjdGl2ZVNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdG5leHRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGlmIChjYXJvdXNlbCAhPT0gbnVsbCkge1xyXG5cdFx0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0ZGlzcGxheUNhcm91c2VsKCk7XHJcblx0XHR9KSgpO1xyXG5cdH1cclxufSk7XHJcbiIsIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG5cdC8vIHRhYnNcclxuXHRjb25zdCB0YWJMaXN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYmNjb3JkaW9uX19saXN0LWJ0bicpO1xyXG5cdGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiY2NvcmRpb25fX2NvbnRhaW5lcicpO1xyXG5cdGNvbnN0IHRhYmNjb3JkaW9uTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWJjY29yZGlvbi1saXN0Jyk7XHJcblx0Y29uc3QgdGFic0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiY2NvcmRpb25fX3RhYi1pbm5lcicpO1xyXG5cdGNvbnN0IHRhYmNjb3JkaW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYmNjb3JkaW9uJyk7XHJcblxyXG5cdGZ1bmN0aW9uIGFjdGl2YXRlVGFicygpIHtcclxuXHRcdHRhYkxpc3RCdG4uZm9yRWFjaCgodGFiKSA9PiB7XHJcblx0XHRcdHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgdGFiTmF2ID0gdGFiLnBhcmVudEVsZW1lbnQ7XHJcblx0XHRcdFx0Y29uc3QgdGFic0NvbnRhaW5lciA9IHRhYk5hdi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcblx0XHRcdFx0Y29uc3QgdGFiTnVtYmVyID0gdGFiLmRhdGFzZXQuZm9yVGFiO1xyXG5cdFx0XHRcdGNvbnN0IHRhYlRvQWN0aXZhdGUgPSB0YWJzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdFx0XHRgLnRhYmNjb3JkaW9uX190YWJbZGF0YS10YWI9XCIke3RhYk51bWJlcn1cIl1gXHJcblx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0dGFiTmF2LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJjY29yZGlvbl9fbGlzdC1idG4nKS5mb3JFYWNoKChidG4pID0+IHtcclxuXHRcdFx0XHRcdGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdHRhYnNDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLnRhYmNjb3JkaW9uX190YWInKS5mb3JFYWNoKCh0YWIpID0+IHtcclxuXHRcdFx0XHRcdHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdHRhYi5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XHJcblx0XHRcdFx0dGFiVG9BY3RpdmF0ZS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XHJcblxyXG5cdFx0XHRcdGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSA2MDApIHtcclxuXHRcdFx0XHRcdHRhYnNDb250ZW50LmZvckVhY2goKHRhYnMpID0+IHtcclxuXHRcdFx0XHRcdFx0dGFicy5zdHlsZS5tYXhIZWlnaHQgPSB0YWJzLnNjcm9sbEhlaWdodCArICdweCc7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0aWYgKHRhYmNjb3JkaW9uTGlzdCkge1xyXG5cdFx0XHR0YWJzLmZvckVhY2goKHRhYikgPT4ge1xyXG5cdFx0XHRcdHRhYi5xdWVyeVNlbGVjdG9yKCcudGFiY2NvcmRpb25fX2xpc3QgLnRhYmNjb3JkaW9uX19idG4nKS5jbGljaygpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKGUpID0+IHtcclxuXHRcdFx0aWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDYwMCkge1xyXG5cdFx0XHRcdGFjdGl2YXRlVGFicygpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdC8vLy8vIGFjY29yZGlvblxyXG5cdGNvbnN0IGFjY29yZGlvbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvcmRpb25fX2xpc3QtYnRuJyk7XHJcblxyXG5cdGZ1bmN0aW9uIGFjdGl2YXRlQWNjb3JkaW9uKCkge1xyXG5cdFx0YWNjb3JkaW9uQnRuLmZvckVhY2goKGJ0bikgPT4ge1xyXG5cdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdFx0Ly8gY2hlY2sgZm9yIG9wZW4gYWNjb3JkaW9uXHJcblx0XHRcdFx0Y29uc3QgYWNjb3JkaW9uQnRuT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdFx0XHQnLmFjY29yZGlvbl9fbGlzdC1idG4ub3BlbidcclxuXHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRpZiAoYWNjb3JkaW9uQnRuT3BlbiAmJiBhY2NvcmRpb25CdG5PcGVuICE9PSBidG4pIHtcclxuXHRcdFx0XHRcdC8vIGlmIHRoZXJlIGlzIG9wZW4gdGhlbiByZW1vdmUgb3BlbiBjbGFzcyBhbmQgc2V0IG1heGhlaWdodCB0byAwXHJcblx0XHRcdFx0XHRhY2NvcmRpb25CdG5PcGVuLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcclxuXHRcdFx0XHRcdGFjY29yZGlvbkJ0bk9wZW4ubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLm1heEhlaWdodCA9IDA7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBzZXQgb3BlbiBjbGFzcyB0byBldmVyeSBjbGlja2VkIGFjY29yZGlvbiBidG5cclxuXHRcdFx0XHRidG4uY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xyXG5cdFx0XHRcdGNvbnN0IGFjY29yZGlvbkJvZHkgPSBidG4ubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG5cclxuXHRcdFx0XHRpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpKSB7XHJcblx0XHRcdFx0XHRhY2NvcmRpb25Cb2R5LnN0eWxlLm1heEhlaWdodCA9IGFjY29yZGlvbkJvZHkuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0YWNjb3JkaW9uQm9keS5zdHlsZS5tYXhIZWlnaHQgPSAwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKGUpID0+IHtcclxuXHRcdFx0aWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNjAwKSB7XHJcblx0XHRcdFx0dGFic0NvbnRlbnQuZm9yRWFjaCgodGFicykgPT4ge1xyXG5cdFx0XHRcdFx0dGFicy5zdHlsZS5tYXhIZWlnaHQgPSAwO1xyXG5cdFx0XHRcdFx0aWYgKHRhYnMucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKSkge1xyXG5cdFx0XHRcdFx0XHR0YWJzLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGlmICh0YWJjY29yZGlvbikge1xyXG5cdFx0YWN0aXZhdGVUYWJzKCk7XHJcblx0XHRhY3RpdmF0ZUFjY29yZGlvbigpO1xyXG5cdH1cclxufSk7XHJcbiJdLCJwcmVFeGlzdGluZ0NvbW1lbnQiOiIvLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTh2ZDJWaWNHRmpheTlpYjI5MGMzUnlZWEFpTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDJwekwyRmtiM0IwUTI5dWRHVnVkRk4zYVhSamFHVnlMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5cWN5OW1aWFJqYUVGdWFXMWhiSE5FWVhSaExtcHpJaXdpZDJWaWNHRmphem92THk4dUwzTnlZeTlxY3k5bWIzSnRWbUZzYVdSaGFYUnZiaTVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl6Y21NdmFuTXZiV0ZwYmk1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5emNtTXZhbk12Ym1GMkxtcHpJaXdpZDJWaWNHRmphem92THk4dUwzTnlZeTlxY3k5emJHbGtaWEl1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwycHpMM1JoWW1OamIzSmthVzl1TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1VVRkJRVHRSUVVOQk96dFJRVVZCTzFGQlEwRTdPMUZCUlVFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN08xRkJSVUU3VVVGRFFUczdVVUZGUVR0UlFVTkJPenRSUVVWQk8xRkJRMEU3VVVGRFFUczdPMUZCUjBFN1VVRkRRVHM3VVVGRlFUdFJRVU5CT3p0UlFVVkJPMUZCUTBFN1VVRkRRVHRSUVVOQkxEQkRRVUV3UXl4blEwRkJaME03VVVGRE1VVTdVVUZEUVRzN1VVRkZRVHRSUVVOQk8xRkJRMEU3VVVGRFFTeDNSRUZCZDBRc2EwSkJRV3RDTzFGQlF6RkZPMUZCUTBFc2FVUkJRV2xFTEdOQlFXTTdVVUZETDBRN08xRkJSVUU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTEhsRFFVRjVReXhwUTBGQmFVTTdVVUZETVVVc1owaEJRV2RJTEcxQ1FVRnRRaXhGUVVGRk8xRkJRM0pKTzFGQlEwRTdPMUZCUlVFN1VVRkRRVHRSUVVOQk8xRkJRMEVzTWtKQlFUSkNMREJDUVVFd1FpeEZRVUZGTzFGQlEzWkVMR2xEUVVGcFF5eGxRVUZsTzFGQlEyaEVPMUZCUTBFN1VVRkRRVHM3VVVGRlFUdFJRVU5CTEhORVFVRnpSQ3dyUkVGQkswUTdPMUZCUlhKSU8xRkJRMEU3T3p0UlFVZEJPMUZCUTBFN096czdPenM3T3pzN096dEJRMnhHUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFc1IwRkJSenRCUVVOSUxFVkJRVVU3TzBGQlJVWTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRXNPRVJCUVRoRUxFOUJRVTg3UVVGRGNrVTdRVUZEUVN4blEwRkJaME1zVDBGQlR6dEJRVU4yUXp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFTkJRVU03T3pzN096czdPenM3T3p0QlEycERSRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0RzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3g1UTBGQmVVTXNWVUZCVlN4VFFVRlRMRk5CUVZNN1FVRkRja1U3UVVGRFFTeExRVUZMTEVWQlFVVTdRVUZEVUR0QlFVTkJPMEZCUTBFc01FUkJRVEJFTEZOQlFWTTdRVUZEYmtVN1FVRkRRVHRCUVVOQk8wRkJRMEVzYVVKQlFXbENMRVZCUVVVc1YwRkJWenRCUVVNNVFqdEJRVU5CTERCRFFVRXdRenRCUVVNeFF6dEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeG5SVUZCWjBVc1dVRkJXVHRCUVVNMVJUdEJRVU5CTEV0QlFVczdRVUZEVER0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHMUNRVUZ0UWp0QlFVTnVRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNiVUpCUVcxQ08wRkJRMjVDTzBGQlEwRTdRVUZEUVR0QlFVTkJMREJGUVVFd1JTeE5RVUZOTzBGQlEyaEdPMEZCUTBFN1FVRkRRVHRCUVVOQkxDdERRVUVyUXl4clEwRkJhME03UVVGRGFrWTdRVUZEUVR0QlFVTkJPMEZCUTBFc0swTkJRU3RETEd0RFFVRnJRenRCUVVOcVJqdEJRVU5CTzBGQlEwRTdRVUZEUVN3clEwRkJLME1zYTBOQlFXdERPMEZCUTJwR08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4dFFrRkJiVUk3UVVGRGJrSTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHMUNRVUZ0UWp0QlFVTnVRanRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMRWxCUVVrN08wRkJSVW83UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEhsRFFVRjVReXhWUVVGVkxGTkJRVk1zVTBGQlV6dEJRVU55UlR0QlFVTkJMRXRCUVVzc1JVRkJSVHRCUVVOUU8wRkJRMEU3UVVGRFFTd3dSRUZCTUVRc1UwRkJVenRCUVVOdVJUdEJRVU5CTzBGQlEwRTdRVUZEUVN4cFFrRkJhVUlzUlVGQlJTeFhRVUZYTzBGQlF6bENPMEZCUTBFc01FTkJRVEJETzBGQlF6RkRPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMR2RGUVVGblJTeFpRVUZaTzBGQlF6VkZPMEZCUTBFc1MwRkJTenRCUVVOTU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNiVUpCUVcxQ08wRkJRMjVDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3h0UWtGQmJVSTdRVUZEYmtJN1FVRkRRVHRCUVVOQk8wRkJRMEVzTUVWQlFUQkZMRk5CUVZNN1FVRkRia1k3UVVGRFFUdEJRVU5CTzBGQlEwRXNLME5CUVN0RExHdERRVUZyUXp0QlFVTnFSanRCUVVOQk8wRkJRMEU3UVVGRFFTd3JRMEZCSzBNc2EwTkJRV3RETzBGQlEycEdPMEZCUTBFN1FVRkRRVHRCUVVOQkxDdERRVUVyUXl4clEwRkJhME03UVVGRGFrWTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHMUNRVUZ0UWp0QlFVTnVRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNiVUpCUVcxQ08wRkJRMjVDTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzU1VGQlNUdEJRVU5LTEVkQlFVYzdPMEZCUlVnN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQkxFbEJRVWs3UVVGRFNqczdRVUZGUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTEd0Q1FVRnJRaXh0UWtGQmJVSTdRVUZEY2tNN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTEVsQlFVazdPMEZCUlVvN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVsQlFVazdRVUZEU2p0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVsQlFVazdRVUZEU2p0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0RzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVN4RFFVRkRPenM3T3pzN096czdPenM3UVVOcVdFUTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFMUJRVTA3UVVGRFRqdEJRVU5CTzBGQlEwRXNTMEZCU3p0QlFVTk1PMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxFbEJRVWs3UVVGRFNqdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hKUVVGSk8wRkJRMG83UVVGRFFTeEpRVUZKTzBGQlEwbzdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzU1VGQlNUdEJRVU5LTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SlFVRkpPMEZCUTBvN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFTeHBRMEZCYVVNc2VVSkJRWGxDTERaQ1FVRTJRaXhKUVVGSkxGRkJRVkVzU1VGQlNTeFJRVUZSTEVsQlFVa3NVVUZCVVN4SlFVRkpMR2REUVVGblF5eEhRVUZITzBGQlEyeExPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNRMEZCUXpzN096czdPenM3T3pzN08wRkRka1pFTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQkxFVkJRVVU3TzBGQlJVWTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JTEVWQlFVVTdRVUZEUml4RFFVRkRPenM3T3pzN096czdPenM3UVVObVJEdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0R0QlFVTkJPMEZCUTBFN1FVRkRRU3hGUVVGRk96dEJRVVZHTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1JVRkJSVHRCUVVOR0xFTkJRVU03T3pzN096czdPenM3T3p0QlEzQkNSRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc2JVSkJRVzFDTEZsQlFWazdRVUZETDBJN1FVRkRRVHRCUVVOQkxIRkRRVUZ4UXl4WlFVRlpPMEZCUTJwRUxHMURRVUZ0UXl4alFVRmpPMEZCUTJwRU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNTVUZCU1R0QlFVTktPMEZCUTBFN1FVRkRRU3hIUVVGSE96dEJRVVZJTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU8wRkJRMEVzUTBGQlF6czdPenM3T3pzN096czdPMEZEYWtkRU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2IwTkJRVzlETEZWQlFWVTdRVUZET1VNN08wRkJSVUU3UVVGRFFUdEJRVU5CTEV0QlFVczdPMEZCUlV3N1FVRkRRVHRCUVVOQkxFdEJRVXM3TzBGQlJVdzdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeE5RVUZOTzBGQlEwNDdRVUZEUVN4SlFVRkpPMEZCUTBvc1IwRkJSenM3UVVGRlNEdEJRVU5CTzBGQlEwRTdRVUZEUVN4SlFVRkpPMEZCUTBvN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRTdRVUZEUVN4SlFVRkpPMEZCUTBvc1IwRkJSenM3UVVGRlNEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CTEVkQlFVYzdRVUZEU0RzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVOQlFVTWlMQ0ptYVd4bElqb2lPRFE0TnpjeVpqWTNZakJoT0RZMU1qQXlNMk11YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SWdYSFF2THlCVWFHVWdiVzlrZFd4bElHTmhZMmhsWEc0Z1hIUjJZWElnYVc1emRHRnNiR1ZrVFc5a2RXeGxjeUE5SUh0OU8xeHVYRzRnWEhRdkx5QlVhR1VnY21WeGRXbHlaU0JtZFc1amRHbHZibHh1SUZ4MFpuVnVZM1JwYjI0Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aHRiMlIxYkdWSlpDa2dlMXh1WEc0Z1hIUmNkQzh2SUVOb1pXTnJJR2xtSUcxdlpIVnNaU0JwY3lCcGJpQmpZV05vWlZ4dUlGeDBYSFJwWmlocGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFNrZ2UxeHVJRngwWEhSY2RISmxkSFZ5YmlCcGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFM1bGVIQnZjblJ6TzF4dUlGeDBYSFI5WEc0Z1hIUmNkQzh2SUVOeVpXRjBaU0JoSUc1bGR5QnRiMlIxYkdVZ0tHRnVaQ0J3ZFhRZ2FYUWdhVzUwYnlCMGFHVWdZMkZqYUdVcFhHNGdYSFJjZEhaaGNpQnRiMlIxYkdVZ1BTQnBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTQTlJSHRjYmlCY2RGeDBYSFJwT2lCdGIyUjFiR1ZKWkN4Y2JpQmNkRngwWEhSc09pQm1ZV3h6WlN4Y2JpQmNkRngwWEhSbGVIQnZjblJ6T2lCN2ZWeHVJRngwWEhSOU8xeHVYRzRnWEhSY2RDOHZJRVY0WldOMWRHVWdkR2hsSUcxdlpIVnNaU0JtZFc1amRHbHZibHh1SUZ4MFhIUnRiMlIxYkdWelcyMXZaSFZzWlVsa1hTNWpZV3hzS0cxdlpIVnNaUzVsZUhCdmNuUnpMQ0J0YjJSMWJHVXNJRzF2WkhWc1pTNWxlSEJ2Y25SekxDQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLVHRjYmx4dUlGeDBYSFF2THlCR2JHRm5JSFJvWlNCdGIyUjFiR1VnWVhNZ2JHOWhaR1ZrWEc0Z1hIUmNkRzF2WkhWc1pTNXNJRDBnZEhKMVpUdGNibHh1SUZ4MFhIUXZMeUJTWlhSMWNtNGdkR2hsSUdWNGNHOXlkSE1nYjJZZ2RHaGxJRzF2WkhWc1pWeHVJRngwWEhSeVpYUjFjbTRnYlc5a2RXeGxMbVY0Y0c5eWRITTdYRzRnWEhSOVhHNWNibHh1SUZ4MEx5OGdaWGh3YjNObElIUm9aU0J0YjJSMWJHVnpJRzlpYW1WamRDQW9YMTkzWldKd1lXTnJYMjF2WkhWc1pYTmZYeWxjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHViU0E5SUcxdlpIVnNaWE03WEc1Y2JpQmNkQzh2SUdWNGNHOXpaU0IwYUdVZ2JXOWtkV3hsSUdOaFkyaGxYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtTWdQU0JwYm5OMFlXeHNaV1JOYjJSMWJHVnpPMXh1WEc0Z1hIUXZMeUJrWldacGJtVWdaMlYwZEdWeUlHWjFibU4wYVc5dUlHWnZjaUJvWVhKdGIyNTVJR1Y0Y0c5eWRITmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpDQTlJR1oxYm1OMGFXOXVLR1Y0Y0c5eWRITXNJRzVoYldVc0lHZGxkSFJsY2lrZ2UxeHVJRngwWEhScFppZ2hYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV2S0dWNGNHOXlkSE1zSUc1aGJXVXBLU0I3WEc0Z1hIUmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lHNWhiV1VzSUhzZ1pXNTFiV1Z5WVdKc1pUb2dkSEoxWlN3Z1oyVjBPaUJuWlhSMFpYSWdmU2s3WEc0Z1hIUmNkSDFjYmlCY2RIMDdYRzVjYmlCY2RDOHZJR1JsWm1sdVpTQmZYMlZ6VFc5a2RXeGxJRzl1SUdWNGNHOXlkSE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjaUE5SUdaMWJtTjBhVzl1S0dWNGNHOXlkSE1wSUh0Y2JpQmNkRngwYVdZb2RIbHdaVzltSUZONWJXSnZiQ0FoUFQwZ0ozVnVaR1ZtYVc1bFpDY2dKaVlnVTNsdFltOXNMblJ2VTNSeWFXNW5WR0ZuS1NCN1hHNGdYSFJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRk41YldKdmJDNTBiMU4wY21sdVoxUmhaeXdnZXlCMllXeDFaVG9nSjAxdlpIVnNaU2NnZlNrN1hHNGdYSFJjZEgxY2JpQmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lDZGZYMlZ6VFc5a2RXeGxKeXdnZXlCMllXeDFaVG9nZEhKMVpTQjlLVHRjYmlCY2RIMDdYRzVjYmlCY2RDOHZJR055WldGMFpTQmhJR1poYTJVZ2JtRnRaWE53WVdObElHOWlhbVZqZEZ4dUlGeDBMeThnYlc5a1pTQW1JREU2SUhaaGJIVmxJR2x6SUdFZ2JXOWtkV3hsSUdsa0xDQnlaWEYxYVhKbElHbDBYRzRnWEhRdkx5QnRiMlJsSUNZZ01qb2diV1Z5WjJVZ1lXeHNJSEJ5YjNCbGNuUnBaWE1nYjJZZ2RtRnNkV1VnYVc1MGJ5QjBhR1VnYm5OY2JpQmNkQzh2SUcxdlpHVWdKaUEwT2lCeVpYUjFjbTRnZG1Gc2RXVWdkMmhsYmlCaGJISmxZV1I1SUc1eklHOWlhbVZqZEZ4dUlGeDBMeThnYlc5a1pTQW1JRGg4TVRvZ1ltVm9ZWFpsSUd4cGEyVWdjbVZ4ZFdseVpWeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1MElEMGdablZ1WTNScGIyNG9kbUZzZFdVc0lHMXZaR1VwSUh0Y2JpQmNkRngwYVdZb2JXOWtaU0FtSURFcElIWmhiSFZsSUQwZ1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aDJZV3gxWlNrN1hHNGdYSFJjZEdsbUtHMXZaR1VnSmlBNEtTQnlaWFIxY200Z2RtRnNkV1U3WEc0Z1hIUmNkR2xtS0NodGIyUmxJQ1lnTkNrZ0ppWWdkSGx3Wlc5bUlIWmhiSFZsSUQwOVBTQW5iMkpxWldOMEp5QW1KaUIyWVd4MVpTQW1KaUIyWVd4MVpTNWZYMlZ6VFc5a2RXeGxLU0J5WlhSMWNtNGdkbUZzZFdVN1hHNGdYSFJjZEhaaGNpQnVjeUE5SUU5aWFtVmpkQzVqY21WaGRHVW9iblZzYkNrN1hHNGdYSFJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWNpaHVjeWs3WEc0Z1hIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNodWN5d2dKMlJsWm1GMWJIUW5MQ0I3SUdWdWRXMWxjbUZpYkdVNklIUnlkV1VzSUhaaGJIVmxPaUIyWVd4MVpTQjlLVHRjYmlCY2RGeDBhV1lvYlc5a1pTQW1JRElnSmlZZ2RIbHdaVzltSUhaaGJIVmxJQ0U5SUNkemRISnBibWNuS1NCbWIzSW9kbUZ5SUd0bGVTQnBiaUIyWVd4MVpTa2dYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVrS0c1ekxDQnJaWGtzSUdaMWJtTjBhVzl1S0d0bGVTa2dleUJ5WlhSMWNtNGdkbUZzZFdWYmEyVjVYVHNnZlM1aWFXNWtLRzUxYkd3c0lHdGxlU2twTzF4dUlGeDBYSFJ5WlhSMWNtNGdibk03WEc0Z1hIUjlPMXh1WEc0Z1hIUXZMeUJuWlhSRVpXWmhkV3gwUlhod2IzSjBJR1oxYm1OMGFXOXVJR1p2Y2lCamIyMXdZWFJwWW1sc2FYUjVJSGRwZEdnZ2JtOXVMV2hoY20xdmJua2diVzlrZFd4bGMxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dUlEMGdablZ1WTNScGIyNG9iVzlrZFd4bEtTQjdYRzRnWEhSY2RIWmhjaUJuWlhSMFpYSWdQU0J0YjJSMWJHVWdKaVlnYlc5a2RXeGxMbDlmWlhOTmIyUjFiR1VnUDF4dUlGeDBYSFJjZEdaMWJtTjBhVzl1SUdkbGRFUmxabUYxYkhRb0tTQjdJSEpsZEhWeWJpQnRiMlIxYkdWYkoyUmxabUYxYkhRblhUc2dmU0E2WEc0Z1hIUmNkRngwWm5WdVkzUnBiMjRnWjJWMFRXOWtkV3hsUlhod2IzSjBjeWdwSUhzZ2NtVjBkWEp1SUcxdlpIVnNaVHNnZlR0Y2JpQmNkRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1a0tHZGxkSFJsY2l3Z0oyRW5MQ0JuWlhSMFpYSXBPMXh1SUZ4MFhIUnlaWFIxY200Z1oyVjBkR1Z5TzF4dUlGeDBmVHRjYmx4dUlGeDBMeThnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbThnUFNCbWRXNWpkR2x2YmlodlltcGxZM1FzSUhCeWIzQmxjblI1S1NCN0lISmxkSFZ5YmlCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVMbU5oYkd3b2IySnFaV04wTENCd2NtOXdaWEowZVNrN0lIMDdYRzVjYmlCY2RDOHZJRjlmZDJWaWNHRmphMTl3ZFdKc2FXTmZjR0YwYUY5ZlhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5BZ1BTQmNJbHdpTzF4dVhHNWNiaUJjZEM4dklFeHZZV1FnWlc1MGNua2diVzlrZFd4bElHRnVaQ0J5WlhSMWNtNGdaWGh3YjNKMGMxeHVJRngwY21WMGRYSnVJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1eklEMGdNQ2s3WEc0aUxDSmtiMk4xYldWdWRDNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZEVUMDFEYjI1MFpXNTBURzloWkdWa0p5d2dablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNkR2hwYzNSdmNua3VjbVZ3YkdGalpWTjBZWFJsS0c1MWJHd3NJRzUxYkd3c0lDY2dKeWs3WEhKY2JseDBZMjl1YzNRZ2RHRmlVM2RwZEdOb1pYSnpJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNrRnNiQ2duVzJSaGRHRXRjM2RwZEdOb1pYSmRKeWs3WEhKY2JseHlYRzVjZEhSaFlsTjNhWFJqYUdWeWN5NW1iM0pGWVdOb0tDaDBZV0pUZDJsMFkyZ3BJRDArSUh0Y2NseHVYSFJjZEdOdmJuTjBJSFJoWWxOM2FYUmphR1Z5SUQwZ2RHRmlVM2RwZEdOb08xeHlYRzVjZEZ4MFkyOXVjM1FnY0dGblpVbGtJRDBnZEdGaVUzZHBkR05vWlhJdVpHRjBZWE5sZEM1MFlXSTdYSEpjYmx4eVhHNWNkRngwZEdGaVUzZHBkR05vWlhJdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblkyeHBZMnNuTENBb1pTa2dQVDRnZTF4eVhHNWNkRngwWEhSa2IyTjFiV1Z1ZEZ4eVhHNWNkRngwWEhSY2RDNXhkV1Z5ZVZObGJHVmpkRzl5S0NjdVlXUnZjSFJmWDJ4cGMzUXRhWFJsYlM1aFkzUnBkbVVuS1Z4eVhHNWNkRngwWEhSY2RDNWpiR0Z6YzB4cGMzUXVjbVZ0YjNabEtDZGhZM1JwZG1VbktUdGNjbHh1WEhKY2JseDBYSFJjZEhSaFlsTjNhWFJqYUdWeUxuQmhjbVZ1ZEVWc1pXMWxiblF1Y0dGeVpXNTBSV3hsYldWdWRDNWpiR0Z6YzB4cGMzUXVZV1JrS0NkaFkzUnBkbVVuS1R0Y2NseHVYSEpjYmx4MFhIUmNkSE4zYVhSamFGQmhaMlVvY0dGblpVbGtLVHRjY2x4dVhIUmNkSDBwTzF4eVhHNWNkSDBwTzF4eVhHNWNjbHh1WEhSbWRXNWpkR2x2YmlCemQybDBZMmhRWVdkbEtIQmhaMlZKWkNrZ2UxeHlYRzVjZEZ4MFkyOXVjM1FnWTNWeWNtVnVkRkJoWjJVZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0NjdWNHRm5aUzVoWTNScGRtVW5LVHRjY2x4dVhIUmNkR052Ym5OMElHTjFjbkpsYm5SUVlXZGxTR1ZoWkdWeUlEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkxuQmhaMlV0YUdWaFpHVnlMbUZqZEdsMlpTY3BPMXh5WEc1Y2NseHVYSFJjZEdOMWNuSmxiblJRWVdkbExtTnNZWE56VEdsemRDNXlaVzF2ZG1Vb0oyRmpkR2wyWlNjcE8xeHlYRzVjZEZ4MFkzVnljbVZ1ZEZCaFoyVklaV0ZrWlhJdVkyeGhjM05NYVhOMExuSmxiVzkyWlNnbllXTjBhWFpsSnlrN1hISmNibHh5WEc1Y2RGeDBZMjl1YzNRZ2JtVjRkRkJoWjJVZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0dBdWNHRm5aVnRrWVhSaExYQmhaMlU5WENJa2UzQmhaMlZKWkgxY0lsMWdLVHRjY2x4dVhIUmNkR052Ym5OMElHNWxlSFJRWVdkbFNHVmhaR1Z5SUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWhjY2x4dVhIUmNkRngwWUM1d1lXZGxMV2hsWVdSbGNsdGtZWFJoTFdobFlXUmxjajFjSWlSN2NHRm5aVWxrZlZ3aVhXQmNjbHh1WEhSY2RDazdYSEpjYmx4MFhIUnVaWGgwVUdGblpTNWpiR0Z6YzB4cGMzUXVZV1JrS0NkaFkzUnBkbVVuS1R0Y2NseHVYSFJjZEc1bGVIUlFZV2RsU0dWaFpHVnlMbU5zWVhOelRHbHpkQzVoWkdRb0oyRmpkR2wyWlNjcE8xeHlYRzVjZEgxY2NseHVmU2s3WEhKY2JpSXNJbVJ2WTNWdFpXNTBMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMFJQVFVOdmJuUmxiblJNYjJGa1pXUW5MQ0JtZFc1amRHbHZiaUFvS1NCN1hISmNibHgwWTI5dWMzUWdZVzVwYldGc2MxVnliQ0E5SUNjdUxpOXFjeTloYm1sdFlXeHpMbXB6YjI0bk8xeHlYRzVjZEdOdmJuTjBJR0Z1YVcxaGJITlFZV2RsY3lBOUlHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0NkaGJtbHRZV3h6TFhCaFoyVnpKeWs3WEhKY2JseDBZMjl1YzNRZ1pHOW5jMEp2ZUNBOUlHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0Nka2IyZHpMV0p2ZUNjcE8xeHlYRzVjZEdOdmJuTjBJR05oZEhOQ2IzZ2dQU0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDZ25ZMkYwY3kxaWIzZ25LVHRjY2x4dVhISmNibHgwWm5WdVkzUnBiMjRnWjJWMFFXNXBiV0ZzYzBSaGRHRW9LU0I3WEhKY2JseDBYSFJ5WlhSMWNtNGdibVYzSUZCeWIyMXBjMlVvS0hKbGMyOXNkbVVzSUhKbGFtVmpkQ2tnUFQ0Z2UxeHlYRzVjZEZ4MFhIUm1aWFJqYUNoaGJtbHRZV3h6VlhKc0tWeHlYRzVjZEZ4MFhIUmNkQzUwYUdWdUtDaHlaWE53S1NBOVBpQnlaWE53TG1wemIyNG9LU2xjY2x4dVhIUmNkRngwWEhRdWRHaGxiaWdvWkdGMFlTa2dQVDRnY21WemIyeDJaU2hrWVhSaEtTbGNjbHh1WEhSY2RGeDBYSFF1WTJGMFkyZ29LR1Z5Y2lrZ1BUNGdjbVZxWldOMEtHVnljaWtwTzF4eVhHNWNkRngwZlNrN1hISmNibHgwZlZ4eVhHNWNjbHh1WEhSamIyNXpkQ0JrYjJkT2RXMWlaWElnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2duWkc5blRuVnRZbVZ5SnlrN1hISmNibHgwWTI5dWMzUWdZMkYwVG5WdFltVnlJRDBnWkc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEVKNVNXUW9KMk5oZEU1MWJXSmxjaWNwTzF4eVhHNWNjbHh1WEhSaGMzbHVZeUJtZFc1amRHbHZiaUJrYVhOd2JHRjVRVzVwYldGc1RuVnRZbVZ5Y3lncElIdGNjbHh1WEhSY2RHTnZibk4wSUdSaGRHRk1hWE4wSUQwZ1lYZGhhWFFnWjJWMFFXNXBiV0ZzYzBSaGRHRW9LVHRjY2x4dVhIUmNkR052Ym5OMElHRnVhVzFoYkhOQmNuSmhlU0E5SUdSaGRHRk1hWE4wTG1GdWFXMWhiSE03WEhKY2JseHlYRzVjZEZ4MGJHVjBJR1J2WjNOQmNuSmhlVTUxYldKbGNpQTlJR0Z1YVcxaGJITkJjbkpoZVZzd1hTNWtiMmR6TG14bGJtZDBhRHRjY2x4dVhIUmNkR3hsZENCallYUnpRWEp5WVhsT2RXMWlaWElnUFNCaGJtbHRZV3h6UVhKeVlYbGJNRjB1WTJGMGN5NXNaVzVuZEdnN1hISmNibHh5WEc1Y2RGeDBaRzluVG5WdFltVnlMbWx1Ym1WeVZHVjRkQ0E5SUdSdlozTkJjbkpoZVU1MWJXSmxjanRjY2x4dVhIUmNkR05oZEU1MWJXSmxjaTVwYm01bGNsUmxlSFFnUFNCallYUnpRWEp5WVhsT2RXMWlaWEk3WEhKY2JseDBmVnh5WEc1Y2NseHVYSFJwWmlBb0tHUnZaMDUxYldKbGNpd2dZMkYwVG5WdFltVnlLU2tnZTF4eVhHNWNkRngwS0daMWJtTjBhVzl1SUNncElIdGNjbHh1WEhSY2RGeDBaR2x6Y0d4aGVVRnVhVzFoYkU1MWJXSmxjbk1vS1R0Y2NseHVYSFJjZEgwcEtDazdYSEpjYmx4MGZWeHlYRzVjY2x4dVhIUmhjM2x1WXlCbWRXNWpkR2x2YmlCa2FYTndiR0Y1UVc1cGJXRnNjeWdwSUh0Y2NseHVYSFJjZEdOdmJuTjBJR1JoZEdGTWFYTjBJRDBnWVhkaGFYUWdaMlYwUVc1cGJXRnNjMFJoZEdFb0tUdGNjbHh1WEhSY2RHTnZibk4wSUdGdWFXMWhiSE5CY25KaGVTQTlJR1JoZEdGTWFYTjBMbUZ1YVcxaGJITTdYSEpjYmx4eVhHNWNkRngwWVc1cGJXRnNjMEZ5Y21GNUxtWnZja1ZoWTJnb0tHRnVhVzFoYkNrZ1BUNGdlMXh5WEc1Y2RGeDBYSFJrYjJkelFYSnlZWGtnUFNCaGJtbHRZV3d1Wkc5bmN6dGNjbHh1WEhSY2RGeDBZMkYwYzBGeWNtRjVJRDBnWVc1cGJXRnNMbU5oZEhNN1hISmNibHh5WEc1Y2RGeDBYSFJrYjJkelFYSnlZWGt1Wm05eVJXRmphQ2dvWkc5bktTQTlQaUI3WEhKY2JseDBYSFJjZEZ4MFpHOW5RbTk0SUQwZ1pHOWpkVzFsYm5RdVkzSmxZWFJsUld4bGJXVnVkQ2duWkdsMkp5azdYSEpjYmx4MFhIUmNkRngwWkc5blFtOTRMbU5zWVhOelRHbHpkQzVoWkdRb0ozQmhaMlZmWDJKdmVDY3BPMXh5WEc1Y2NseHVYSFJjZEZ4MFhIUmpiMjV6ZENCa2IyZFpaV0Z5Y3lBOUlHUnZaeTVpYVhKMGFEdGNjbHh1WEhKY2JseDBYSFJjZEZ4MFkyOXVjM1FnYldsc2FYTmxZM05DWlhSM1pXVnVSRTlDWVc1a01UazNNQ0E5SUVSaGRHVXVjR0Z5YzJVb1pHOW5XV1ZoY25NcE8xeHlYRzVjZEZ4MFhIUmNkR052Ym5OMElHMXBiR2x6WldOelFtVjBkMlZsYms1UFYyRnVaREU1TnpBZ1BTQkVZWFJsTG01dmR5Z3BPMXh5WEc1Y2RGeDBYSFJjZEdOdmJuTjBJR0ZuWlVsdVRXbHNhWE5sWTNNZ1BWeHlYRzVjZEZ4MFhIUmNkRngwYldsc2FYTmxZM05DWlhSM1pXVnVUazlYWVc1a01UazNNQ0F0SUcxcGJHbHpaV056UW1WMGQyVmxia1JQUW1GdVpERTVOekE3WEhKY2JseHlYRzVjZEZ4MFhIUmNkR052Ym5OMElHMXBiR2x6WldOeklEMGdZV2RsU1c1TmFXeHBjMlZqY3p0Y2NseHVYSFJjZEZ4MFhIUmpiMjV6ZENCelpXTnpJRDBnTVRBd01EdGNjbHh1WEhSY2RGeDBYSFJqYjI1emRDQnRhVzV6SUQwZ2MyVmpjeUFxSURZd08xeHlYRzVjZEZ4MFhIUmNkR052Ym5OMElHaHZkWElnUFNCdGFXNXpJQ29nTmpBN1hISmNibHgwWEhSY2RGeDBZMjl1YzNRZ1pHRjVJRDBnYUc5MWNpQXFJREkwTzF4eVhHNWNkRngwWEhSY2RHTnZibk4wSUhsbFlYSWdQU0JrWVhrZ0tpQXpOalU3WEhKY2JseHlYRzVjZEZ4MFhIUmNkR3hsZENCNVpXRnljeUE5SUUxaGRHZ3VjbTkxYm1Rb2JXbHNhWE5sWTNNZ0x5QjVaV0Z5S1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwWkc5blFtOTRMbWx1Ym1WeVNGUk5UQ0E5SUdCY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHUnBkaUJqYkdGemN6MWNJbkJoWjJWZlgySnZlQzEwYjNCY0lqNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4cGJXY2djM0pqUFZ3aUxpUjdaRzluTG1sdFlXZGxmVndpSUdGc2REMWNJaVI3Wkc5bkxtNWhiV1Y5SUNSN1hISmNibHgwWEhSY2RGeDBYSFJrYjJjdWMzQmxZMmxsYzF4eVhHNWNkRngwWEhSY2RIMWNJbjB2UGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOEwyUnBkajVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdScGRpQmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMWliM1IwYjIxY0lqNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4b015QmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMTBhWFJzWlZ3aVBpUjdaRzluTG01aGJXVjlQQzlvTXo1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhrYVhZZ1kyeGhjM005WENKd1lXZGxYMTlpYjNndFkyOXVkR1Z1ZEZ3aVBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeGthWFlnWTJ4aGMzTTlYQ0psZUhCaGJtUk5iM0psUTI5dWRHVnVkRndpSUdsa1BWd2ljMmh2ZDAxdmNtVXRKSHRjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEdSdlp5NXpjR1ZqYVdWelhISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MGZTUjdaRzluTG01MWJXSmxjbjFjSWo1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQSEFnWTJ4aGMzTTlYQ0p3WVdkbFgxOWliM2d0ZEdWNGRGd2lQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdKSHRrYjJjdVpHVnpZMzFjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOXdQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2WkdsMlBseHlYRzRnSUNBZ1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHUnBkaUJqYkdGemN6MWNJbVY0Y0dGdVpFMXZjbVZJYjJ4a1pYSmNJajVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHSjFkSFJ2Ymx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWlhod1lXNWtMVzF2Y21WY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdSaGRHRXRhR2xrWlhSbGVIUTlYQ0l1TGk1U1pXRmtJR3hsYzNOY0lseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pHRjBZUzF6YUc5M2RHVjRkRDFjSWk0dUxsSmxZV1FnYlc5eVpWd2lYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmtZWFJoTFhSaGNtZGxkRDFjSW5Ob2IzZE5iM0psTFNSN1pHOW5Mbk53WldOcFpYTjlKSHRjY2x4dVhIUmNkRngwWEhSY2RHUnZaeTV1ZFcxaVpYSmNjbHh1WEhSY2RGeDBYSFI5WENKY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOc1lYTnpQVndpWW5WMGRHOXVJSE5vYjNkTmIzSmxYQ0pjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0xpNHVVbVZoWkNCdGIzSmxYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dlluVjBkRzl1UGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dlpHbDJQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOWthWFkrWEhKY2JpQWdJQ0JjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeDFiQ0JqYkdGemN6MWNJbkJoWjJWZlgySnZlQzFwWTI5dWMxd2lQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhzYVNCamJHRnpjejFjSW5CaFoyVmZYMkp2ZUMxcFkyOXVYQ0krWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHBJR05zWVhOelBWd2labUZ6SUdaaExYZGxhV2RvZEZ3aVBqd3ZhVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBK1BITndZVzRnWTJ4aGMzTTlYQ0p3WVdkbFgxOWliM2d0YVdOdmJpMHRkR1Y0ZEZ3aVBpUjdYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFpHOW5MbmRsYVdkb2RGeHlYRzVjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFI5SUd0blBDOXpjR0Z1UGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dmJHaytYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR3hwSUdOc1lYTnpQVndpY0dGblpWOWZZbTk0TFdsamIyNWNJajVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHa2dZMnhoYzNNOVhDSm1ZWE1nWm1FdFlYSnliM2R6TFdGc2RDMTJYQ0krUEM5cFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRDQ4YzNCaGJpQmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMXBZMjl1TFMxMFpYaDBYQ0krSkh0Y2NseHVYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJrYjJjdWFHVnBaMmgwWEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RIMWpiVHd2YzNCaGJqNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThMMnhwUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4c2FTQmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMXBZMjl1WENJK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhwSUdOc1lYTnpQVndpWm1GeklHWmhMV05oYkdWdVpHRnlMV05vWldOclhDSStQQzlwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lENDhjM0JoYmlCamJHRnpjejFjSW5CaFoyVmZYMkp2ZUMxcFkyOXVMUzEwWlhoMFhDSStKSHQ1WldGeWMzMGdlWEl1UEM5emNHRnVQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2YkdrK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHeHBJR05zWVhOelBWd2ljR0ZuWlY5ZlltOTRMV2xqYjI1Y0lqNWNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwUEdrZ1kyeGhjM005WENKbVlYTWdabUV0Y0dGc1pYUjBaVndpUGp3dmFWeHlYRzVjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFErUEhOd1lXNGdZMnhoYzNNOVhDSndZV2RsWDE5aWIzZ3RhV052YmkwdGRHVjRkRndpUGlSN1pHOW5MbU52Ykc5eVd6QmRJRDhnWkc5bkxtTnZiRzl5V3pCZElEb2dKeTBuZlR3dmMzQmhiajVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4TDJ4cFBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHNhU0JqYkdGemN6MWNJbkJoWjJWZlgySnZlQzFwWTI5dVhDSStYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBYSFJjZER4cElHTnNZWE56UFZ3aVptRnpJR1poTFhCaGJHVjBkR1ZjSWo0OEwybGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwUGp4emNHRnVJR05zWVhOelBWd2ljR0ZuWlY5ZlltOTRMV2xqYjI0dExYUmxlSFJjSWo0a2UyUnZaeTVqYjJ4dmNsc3hYU0EvSUdSdlp5NWpiMnh2Y2xzeFhTQTZJQ2N0SjMwOEwzTndZVzQrWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5c2FUNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThiR2tnWTJ4aGMzTTlYQ0p3WVdkbFgxOWliM2d0YVdOdmJsd2lQbHh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhROGFTQmpiR0Z6Y3oxY0ltWmhjeUJtWVMxd1lXeGxkSFJsWENJK1BDOXBYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEQ0OGMzQmhiaUJqYkdGemN6MWNJbkJoWjJWZlgySnZlQzFwWTI5dUxTMTBaWGgwWENJK0pIdGtiMmN1WTI5c2IzSmJNbDBnUHlCa2IyY3VZMjlzYjNKYk1sMGdPaUFuTFNkOVBDOXpjR0Z1UGx4eVhHNWNkRngwWEhSY2RGeDBYSFJjZEZ4MFBDOXNhVDVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YkdrZ1kyeGhjM005WENKd1lXZGxYMTlpYjNndGFXTnZibHdpUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThhU0JqYkdGemN6MWNJbVpoY3lCbVlTMXdZWGRjSWo0OEwybGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUGp4emNHRnVJR05zWVhOelBWd2ljR0ZuWlY5ZlltOTRMV2xqYjI0dExYUmxlSFJjSWo0a2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEdSdlp5NWpiMkYwWEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RIMDhMM053WVc0K1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOXNhVDVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YkdrZ1kyeGhjM005WENKd1lXZGxYMTlpYjNndGFXTnZibHdpUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThhU0JqYkdGemN6MWNJbVpoY3lCbVlTMTJaVzUxY3kxdFlYSnpYQ0krUEM5cFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRDQ4YzNCaGJpQmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMXBZMjl1TFMxMFpYaDBYQ0krSkh0Y2NseHVYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJrYjJjdVoyVnVaR1Z5WEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RIMDhMM053WVc0K1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOXNhVDVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEd3ZkV3crWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dlpHbDJQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWUR0Y2NseHVYSEpjYmx4MFhIUmNkRngwWkc5bmMwSnZlQzVoY0hCbGJtUkRhR2xzWkNoa2IyZENiM2dwTzF4eVhHNWNkRngwWEhSOUtUdGNjbHh1WEhKY2JseDBYSFJjZEdOaGRITkJjbkpoZVM1bWIzSkZZV05vS0NoallYUXBJRDArSUh0Y2NseHVYSFJjZEZ4MFhIUmpZWFJDYjNnZ1BTQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0Nka2FYWW5LVHRjY2x4dVhIUmNkRngwWEhSallYUkNiM2d1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25jR0ZuWlY5ZlltOTRKeWs3WEhKY2JseHlYRzVjZEZ4MFhIUmNkR052Ym5OMElHTmhkRmxsWVhKeklEMGdZMkYwTG1KcGNuUm9PMXh5WEc1Y2NseHVYSFJjZEZ4MFhIUmpiMjV6ZENCdGFXeHBjMlZqYzBKbGRIZGxaVzVFVDBKaGJtUXhPVGN3WTJGMElEMGdSR0YwWlM1d1lYSnpaU2hqWVhSWlpXRnljeWs3WEhKY2JseDBYSFJjZEZ4MFkyOXVjM1FnYldsc2FYTmxZM05DWlhSM1pXVnVUazlYWVc1a01UazNNQ0E5SUVSaGRHVXVibTkzS0NrN1hISmNibHh5WEc1Y2RGeDBYSFJjZEdOdmJuTjBJR0ZuWlVsdVRXbHNhWE5sWTNORFlYUWdQVnh5WEc1Y2RGeDBYSFJjZEZ4MGJXbHNhWE5sWTNOQ1pYUjNaV1Z1VGs5WFlXNWtNVGszTUNBdElHMXBiR2x6WldOelFtVjBkMlZsYmtSUFFtRnVaREU1TnpCallYUTdYSEpjYmx4eVhHNWNkRngwWEhSY2RHTnZibk4wSUcxcGJHbHpaV056UTJGMElEMGdZV2RsU1c1TmFXeHBjMlZqYzBOaGREdGNjbHh1WEhSY2RGeDBYSFJqYjI1emRDQnpaV056SUQwZ01UQXdNRHRjY2x4dVhIUmNkRngwWEhSamIyNXpkQ0J0YVc1eklEMGdjMlZqY3lBcUlEWXdPMXh5WEc1Y2RGeDBYSFJjZEdOdmJuTjBJR2h2ZFhJZ1BTQnRhVzV6SUNvZ05qQTdYSEpjYmx4MFhIUmNkRngwWTI5dWMzUWdaR0Y1SUQwZ2FHOTFjaUFxSURJME8xeHlYRzVjZEZ4MFhIUmNkR052Ym5OMElIbGxZWElnUFNCa1lYa2dLaUF6TmpVN1hISmNibHh5WEc1Y2RGeDBYSFJjZEd4bGRDQjVaV0Z5YzBOaGRDQTlJRTFoZEdndWNtOTFibVFvYldsc2FYTmxZM05EWVhRZ0x5QjVaV0Z5S1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwWTJGMFFtOTRMbWx1Ym1WeVNGUk5UQ0E5SUdCY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHUnBkaUJqYkdGemN6MWNJbkJoWjJWZlgySnZlQzEwYjNCY0lqNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4cGJXY2djM0pqUFZ3aUxpUjdZMkYwTG1sdFlXZGxmVndpSUdGc2REMWNJaVI3WTJGMExtNWhiV1Y5SUNSN1hISmNibHgwWEhSY2RGeDBYSFJqWVhRdWMzQmxZMmxsYzF4eVhHNWNkRngwWEhSY2RIMWNJbjB2UGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOEwyUnBkajVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdScGRpQmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMWliM1IwYjIxY0lqNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4b015QmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMTBhWFJzWlZ3aVBpUjdZMkYwTG01aGJXVjlQQzlvTXo1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhrYVhZZ1kyeGhjM005WENKd1lXZGxYMTlpYjNndFkyOXVkR1Z1ZEZ3aVBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeGthWFlnWTJ4aGMzTTlYQ0psZUhCaGJtUk5iM0psUTI5dWRHVnVkRndpSUdsa1BWd2ljMmh2ZDAxdmNtVXRKSHRjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEdOaGRDNXpjR1ZqYVdWelhISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MGZTUjdZMkYwTG01MWJXSmxjbjFjSWo1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQSEFnWTJ4aGMzTTlYQ0p3WVdkbFgxOWliM2d0ZEdWNGRGd2lQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdKSHRqWVhRdVpHVnpZMzFjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOXdQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2WkdsMlBseHlYRzRnSUNBZ1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHUnBkaUJqYkdGemN6MWNJbVY0Y0dGdVpFMXZjbVZJYjJ4a1pYSmNJajVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHSjFkSFJ2Ymx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWlhod1lXNWtMVzF2Y21WY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdSaGRHRXRhR2xrWlhSbGVIUTlYQ0l1TGk1U1pXRmtJR3hsYzNOY0lseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pHRjBZUzF6YUc5M2RHVjRkRDFjSWk0dUxsSmxZV1FnYlc5eVpWd2lYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmtZWFJoTFhSaGNtZGxkRDFjSW5Ob2IzZE5iM0psTFNSN1kyRjBMbk53WldOcFpYTjlKSHRjY2x4dVhIUmNkRngwWEhSY2RHTmhkQzV1ZFcxaVpYSmNjbHh1WEhSY2RGeDBYSFI5WENKY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOc1lYTnpQVndpWW5WMGRHOXVJSE5vYjNkTmIzSmxYQ0pjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0xpNHVVbVZoWkNCdGIzSmxYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dlluVjBkRzl1UGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dlpHbDJQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOWthWFkrWEhKY2JpQWdJQ0JjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeDFiQ0JqYkdGemN6MWNJbkJoWjJWZlgySnZlQzFwWTI5dWMxd2lQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhzYVNCamJHRnpjejFjSW5CaFoyVmZYMkp2ZUMxcFkyOXVYQ0krWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHBJR05zWVhOelBWd2labUZ6SUdaaExYZGxhV2RvZEZ3aVBqd3ZhVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBK1BITndZVzRnWTJ4aGMzTTlYQ0p3WVdkbFgxOWliM2d0YVdOdmJpMHRkR1Y0ZEZ3aVBpUjdYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFkyRjBMbmRsYVdkb2RGeHlYRzVjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFI5SUd0blBDOXpjR0Z1UGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dmJHaytYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR3hwSUdOc1lYTnpQVndpY0dGblpWOWZZbTk0TFdsamIyNWNJajVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHa2dZMnhoYzNNOVhDSm1ZWE1nWm1FdFlYSnliM2R6TFdGc2RDMTJYQ0krUEM5cFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRDQ4YzNCaGJpQmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMXBZMjl1TFMxMFpYaDBYQ0krSkh0Y2NseHVYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJqWVhRdWFHVnBaMmgwWEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RIMWpiVHd2YzNCaGJqNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThMMnhwUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4c2FTQmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMXBZMjl1WENJK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhwSUdOc1lYTnpQVndpWm1GeklHWmhMV05oYkdWdVpHRnlMV05vWldOclhDSStQQzlwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lENDhjM0JoYmlCamJHRnpjejFjSW5CaFoyVmZYMkp2ZUMxcFkyOXVMUzEwWlhoMFhDSStKSHQ1WldGeWMwTmhkSDBnZVhJdVBDOXpjR0Z1UGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dmJHaytYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR3hwSUdOc1lYTnpQVndpY0dGblpWOWZZbTk0TFdsamIyNWNJajVjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFBHa2dZMnhoYzNNOVhDSm1ZWE1nWm1FdGNHRnNaWFIwWlZ3aVBqd3ZhVnh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhRK1BITndZVzRnWTJ4aGMzTTlYQ0p3WVdkbFgxOWliM2d0YVdOdmJpMHRkR1Y0ZEZ3aVBpUjdZMkYwTG1OdmJHOXlXekJkSUQ4Z1kyRjBMbU52Ykc5eVd6QmRJRG9nSnkwbmZUd3ZjM0JoYmo1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOEwyeHBQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhzYVNCamJHRnpjejFjSW5CaFoyVmZYMkp2ZUMxcFkyOXVYQ0krWEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwWEhSY2REeHBJR05zWVhOelBWd2labUZ6SUdaaExYQmhiR1YwZEdWY0lqNDhMMmxjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFBqeHpjR0Z1SUdOc1lYTnpQVndpY0dGblpWOWZZbTk0TFdsamIyNHRMWFJsZUhSY0lqNGtlMk5oZEM1amIyeHZjbHN4WFNBL0lHTmhkQzVqYjJ4dmNsc3hYU0E2SUNjdEozMDhMM053WVc0K1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOXNhVDVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YkdrZ1kyeGhjM005WENKd1lXZGxYMTlpYjNndGFXTnZibHdpUGx4eVhHNWNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUThhU0JqYkdGemN6MWNJbVpoY3lCbVlTMXdZV3hsZEhSbFhDSStQQzlwWEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RENDhjM0JoYmlCamJHRnpjejFjSW5CaFoyVmZYMkp2ZUMxcFkyOXVMUzEwWlhoMFhDSStKSHRqWVhRdVkyOXNiM0piTWwwZ1B5QmpZWFF1WTI5c2IzSmJNbDBnT2lBbkxTZDlQQzl6Y0dGdVBseHlYRzVjZEZ4MFhIUmNkRngwWEhSY2RGeDBQQzlzYVQ1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGJHa2dZMnhoYzNNOVhDSndZV2RsWDE5aWIzZ3RhV052Ymx3aVBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YVNCamJHRnpjejFjSW1aaGN5Qm1ZUzF3WVhkY0lqNDhMMmxjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BqeHpjR0Z1SUdOc1lYTnpQVndpY0dGblpWOWZZbTk0TFdsamIyNHRMWFJsZUhSY0lqNGtlMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RHTmhkQzVqYjJGMFhISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkSDA4TDNOd1lXNCtYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzlzYVQ1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGJHa2dZMnhoYzNNOVhDSndZV2RsWDE5aWIzZ3RhV052Ymx3aVBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YVNCamJHRnpjejFjSW1aaGN5Qm1ZUzEyWlc1MWN5MXRZWEp6WENJK1BDOXBYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUQ0OGMzQmhiaUJqYkdGemN6MWNJbkJoWjJWZlgySnZlQzFwWTI5dUxTMTBaWGgwWENJK0pIdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSallYUXVaMlZ1WkdWeVhISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkSDA4TDNOd1lXNCtYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzlzYVQ1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2ZFd3K1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEd3ZaR2wyUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1lEdGNjbHh1WEhKY2JseDBYSFJjZEZ4MFkyRjBjMEp2ZUM1aGNIQmxibVJEYUdsc1pDaGpZWFJDYjNncE8xeHlYRzVjZEZ4MFhIUjlLVHRjY2x4dVhIUmNkSDBwTzF4eVhHNWNjbHh1WEhSY2RHeGxkQ0JrYjJkQ2IzaEJjbkpoZVNBOUlGc3VMaTVrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eVFXeHNLQ2NqWkc5bmN5MWliM2dnTG5CaFoyVmZYMkp2ZUNjcFhUdGNjbHh1WEhSY2RHeGxkQ0JqWVhSQ2IzaEJjbkpoZVNBOUlGc3VMaTVrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eVFXeHNLQ2NqWTJGMGN5MWliM2dnTG5CaFoyVmZYMkp2ZUNjcFhUdGNjbHh1WEhSY2RHeGxkQ0JqZFhKeVpXNTBVR0ZuWlNBOUlERTdYSEpjYmx4MFhIUnNaWFFnWld4bGJXVnVkSE5QYmxCaFoyVWdQU0EwTzF4eVhHNWNjbHh1WEhSY2RHTnZibk4wSUhCaFoybHVZWFJwYjI1RmJFUnZaM01nUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2duWkc5bmN5MXdZV2RwYm1GMGFXOXVKeWs3WEhKY2JseDBYSFJqYjI1emRDQndZV2RwYm1GMGFXOXVSV3hEWVhSeklEMGdaRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkRUo1U1dRb0oyTmhkSE10Y0dGbmFXNWhkR2x2YmljcE8xeHlYRzVjY2x4dVhIUmNkR1oxYm1OMGFXOXVJR1JwYzNCc1lYbFFZV2RwYm1GMFpXUkpkR1Z0Y3locGRHVnRjeXdnZDNKaGNIQmxjaXdnYVhSbGJYTlFaWEpRWVdkbExDQndZV2RsS1NCN1hISmNibHgwWEhSY2RIZHlZWEJ3WlhJdWFXNXVaWEpJVkUxTUlEMGdKeWM3WEhKY2JseDBYSFJjZEhCaFoyVXRMVHRjY2x4dVhISmNibHgwWEhSY2RHeGxkQ0J6ZEdGeWRDQTlJR2wwWlcxelVHVnlVR0ZuWlNBcUlIQmhaMlU3WEhKY2JseDBYSFJjZEd4bGRDQmxibVFnUFNCemRHRnlkQ0FySUdsMFpXMXpVR1Z5VUdGblpUdGNjbHh1WEhSY2RGeDBiR1YwSUhCaFoybHVZWFJsWkVsMFpXMXpJRDBnYVhSbGJYTXVjMnhwWTJVb2MzUmhjblFzSUdWdVpDazdYSEpjYmx4eVhHNWNkRngwWEhSd1lXZHBibUYwWldSSmRHVnRjeTVtYjNKRllXTm9LQ2hwZEdWdEtTQTlQaUI3WEhKY2JseDBYSFJjZEZ4MGJHVjBJR2wwWlcxRmJDQTlJR1J2WTNWdFpXNTBMbU55WldGMFpVVnNaVzFsYm5Rb0oyUnBkaWNwTzF4eVhHNWNkRngwWEhSY2RHbDBaVzFGYkM1amJHRnpjMHhwYzNRdVlXUmtLQ2R3WVdkbFgxOWliM2duS1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwYVhSbGJVVnNJRDBnYVhSbGJUdGNjbHh1WEhKY2JseDBYSFJjZEZ4MGQzSmhjSEJsY2k1aGNIQmxibVJEYUdsc1pDaHBkR1Z0Uld3cE8xeHlYRzVjZEZ4MFhIUjlLVHRjY2x4dVhIUmNkSDFjY2x4dVhISmNibHgwWEhSbWRXNWpkR2x2YmlCa2FYTndiR0Y1VUdGbmFXNWhkR2x2YmlocGRHVnRjeXdnZDNKaGNIQmxjaXdnYVhSbGJYTlFaWEpRWVdkbEtTQjdYSEpjYmx4MFhIUmNkSGR5WVhCd1pYSXVhVzV1WlhKSVZFMU1JRDBnSnljN1hISmNibHh5WEc1Y2RGeDBYSFJzWlhRZ2NHRm5aVU52ZFc1MElEMGdUV0YwYUM1alpXbHNLR2wwWlcxekxteGxibWQwYUNBdklHbDBaVzF6VUdWeVVHRm5aU2s3WEhKY2JseHlYRzVjZEZ4MFhIUm1iM0lnS0d4bGRDQnBJRDBnTVRzZ2FTQThJSEJoWjJWRGIzVnVkQ0FySURFN0lHa3JLeWtnZTF4eVhHNWNkRngwWEhSY2RHeGxkQ0JpZEc0Z1BTQndZV2RwYm1GMGFXOXVRblYwZEc5dUtHa3BPMXh5WEc1Y2NseHVYSFJjZEZ4MFhIUjNjbUZ3Y0dWeUxtRndjR1Z1WkVOb2FXeGtLR0owYmlrN1hISmNibHgwWEhSY2RIMWNjbHh1WEhSY2RIMWNjbHh1WEhKY2JseDBYSFJtZFc1amRHbHZiaUJ3WVdkcGJtRjBhVzl1UW5WMGRHOXVLSEJoWjJVcElIdGNjbHh1WEhSY2RGeDBiR1YwSUdKMWRIUnZiaUE5SUdSdlkzVnRaVzUwTG1OeVpXRjBaVVZzWlcxbGJuUW9KMkoxZEhSdmJpY3BPMXh5WEc1Y2RGeDBYSFJpZFhSMGIyNHVZMnhoYzNOTWFYTjBMbUZrWkNnbmNHRm5hVzVoZEdsdmJpMWlkRzRuS1R0Y2NseHVYSFJjZEZ4MFluVjBkRzl1TG1sdWJtVnlWR1Y0ZENBOUlIQmhaMlU3WEhKY2JseHlYRzVjZEZ4MFhIUnBaaUFvWTNWeWNtVnVkRkJoWjJVZ1BUMGdjR0ZuWlNrZ2UxeHlYRzVjZEZ4MFhIUmNkR0oxZEhSdmJpNWpiR0Z6YzB4cGMzUXVZV1JrS0NkaFkzUnBkbVVuS1R0Y2NseHVYSFJjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkRngwWW5WMGRHOXVMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMk5zYVdOckp5d2dLR1VwSUQwK0lIdGNjbHh1WEhSY2RGeDBYSFJqZFhKeVpXNTBVR0ZuWlNBOUlIQmhaMlU3WEhKY2JseHlYRzVjZEZ4MFhIUmNkR1JwYzNCc1lYbFFZV2RwYm1GMFpXUkpkR1Z0Y3loY2NseHVYSFJjZEZ4MFhIUmNkR1J2WjBKdmVFRnljbUY1TEZ4eVhHNWNkRngwWEhSY2RGeDBaRzluYzBKdmVDeGNjbHh1WEhSY2RGeDBYSFJjZEdWc1pXMWxiblJ6VDI1UVlXZGxMRnh5WEc1Y2RGeDBYSFJjZEZ4MFkzVnljbVZ1ZEZCaFoyVmNjbHh1WEhSY2RGeDBYSFFwTzF4eVhHNWNjbHh1WEhSY2RGeDBYSFJrYVhOd2JHRjVVR0ZuYVc1aGRHVmtTWFJsYlhNb1hISmNibHgwWEhSY2RGeDBYSFJqWVhSQ2IzaEJjbkpoZVN4Y2NseHVYSFJjZEZ4MFhIUmNkR05oZEhOQ2IzZ3NYSEpjYmx4MFhIUmNkRngwWEhSbGJHVnRaVzUwYzA5dVVHRm5aU3hjY2x4dVhIUmNkRngwWEhSY2RHTjFjbkpsYm5SUVlXZGxYSEpjYmx4MFhIUmNkRngwS1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwYkdWMElHRmpkR2wyWlVKMGJrUnZaeUE5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9YSEpjYmx4MFhIUmNkRngwWEhRbkkyUnZaM01nTG5CaFoybHVZWFJwYjI0dFluUnVMbUZqZEdsMlpTZGNjbHh1WEhSY2RGeDBYSFFwTzF4eVhHNWNkRngwWEhSY2RHeGxkQ0JoWTNScGRtVkNkRzVEWVhRZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0Z4eVhHNWNkRngwWEhSY2RGeDBKeU5qWVhSeklDNXdZV2RwYm1GMGFXOXVMV0owYmk1aFkzUnBkbVVuWEhKY2JseDBYSFJjZEZ4MEtUdGNjbHh1WEhKY2JseDBYSFJjZEZ4MFkyOXVjMjlzWlM1c2IyY29ZV04wYVhabFFuUnVSRzluS1R0Y2NseHVYSFJjZEZ4MFhIUnBaaUFvWVdOMGFYWmxRblJ1Ukc5bktTQjdYSEpjYmx4MFhIUmNkRngwWEhSaFkzUnBkbVZDZEc1RWIyY3VZMnhoYzNOTWFYTjBMbkpsYlc5MlpTZ25ZV04wYVhabEp5azdYSEpjYmx4MFhIUmNkRngwZlZ4eVhHNWNjbHh1WEhSY2RGeDBYSFJwWmlBb1lXTjBhWFpsUW5SdVEyRjBLU0I3WEhKY2JseDBYSFJjZEZ4MFhIUmhZM1JwZG1WQ2RHNURZWFF1WTJ4aGMzTk1hWE4wTG5KbGJXOTJaU2duWVdOMGFYWmxKeWs3WEhKY2JseDBYSFJjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkRngwWEhSaWRYUjBiMjR1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25ZV04wYVhabEp5azdYSEpjYmx4MFhIUmNkSDBwTzF4eVhHNWNjbHh1WEhSY2RGeDBjbVYwZFhKdUlHSjFkSFJ2Ymp0Y2NseHVYSFJjZEgxY2NseHVYSEpjYmx4MFhIUnBaaUFvWkc5bmMwSnZlQ2tnZTF4eVhHNWNkRngwWEhSa2FYTndiR0Y1VUdGbmFXNWhkR1ZrU1hSbGJYTW9aRzluUW05NFFYSnlZWGtzSUdSdlozTkNiM2dzSUdWc1pXMWxiblJ6VDI1UVlXZGxMQ0JqZFhKeVpXNTBVR0ZuWlNrN1hISmNibHgwWEhSY2RHUnBjM0JzWVhsUVlXZHBibUYwYVc5dUtHUnZaMEp2ZUVGeWNtRjVMQ0J3WVdkcGJtRjBhVzl1Uld4RWIyZHpMQ0JsYkdWdFpXNTBjMDl1VUdGblpTazdYSEpjYmx4MFhIUjlYSEpjYmx4eVhHNWNkRngwYVdZZ0tHTmhkSE5DYjNncElIdGNjbHh1WEhSY2RGeDBaR2x6Y0d4aGVWQmhaMmx1WVhSbFpFbDBaVzF6S0dOaGRFSnZlRUZ5Y21GNUxDQmpZWFJ6UW05NExDQmxiR1Z0Wlc1MGMwOXVVR0ZuWlN3Z1kzVnljbVZ1ZEZCaFoyVXBPMXh5WEc1Y2RGeDBYSFJrYVhOd2JHRjVVR0ZuYVc1aGRHbHZiaWhqWVhSQ2IzaEJjbkpoZVN3Z2NHRm5hVzVoZEdsdmJrVnNRMkYwY3l3Z1pXeGxiV1Z1ZEhOUGJsQmhaMlVwTzF4eVhHNWNkRngwZlZ4eVhHNWNjbHh1WEhSY2RHTnZibk4wSUdWNGNHRnVaSE5OYjNKbElEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2tGc2JDZ25XMlY0Y0dGdVpDMXRiM0psWFNjcE8xeHlYRzVjY2x4dVhIUmNkR1oxYm1OMGFXOXVJR1Y0Y0dGdVpDZ3BJSHRjY2x4dVhIUmNkRngwWTI5dWMzUWdjMmh2ZDBOdmJuUmxiblFnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2gwYUdsekxtUmhkR0Z6WlhRdWRHRnlaMlYwS1R0Y2NseHVYSFJjZEZ4MGFXWWdLSE5vYjNkRGIyNTBaVzUwTG1Oc1lYTnpUR2x6ZEM1amIyNTBZV2x1Y3lnbllXTjBhWFpsSnlrcElIdGNjbHh1WEhSY2RGeDBYSFIwYUdsekxtbHVibVZ5U0ZSTlRDQTlJSFJvYVhNdVpHRjBZWE5sZEM1emFHOTNkR1Y0ZER0Y2NseHVYSFJjZEZ4MGZTQmxiSE5sSUh0Y2NseHVYSFJjZEZ4MFhIUjBhR2x6TG1sdWJtVnlTRlJOVENBOUlIUm9hWE11WkdGMFlYTmxkQzVvYVdSbGRHVjRkRHRjY2x4dVhIUmNkRngwZlZ4eVhHNWNjbHh1WEhSY2RGeDBjMmh2ZDBOdmJuUmxiblF1WTJ4aGMzTk1hWE4wTG5SdloyZHNaU2duWVdOMGFYWmxKeWs3WEhKY2JseDBYSFJjZEdsbUlDaHphRzkzUTI5dWRHVnVkQzVqYkdGemMweHBjM1F1WTI5dWRHRnBibk1vSjJGamRHbDJaU2NwS1NCN1hISmNibHgwWEhSY2RGeDBjMmh2ZDBOdmJuUmxiblF1YzNSNWJHVXViV0Y0U0dWcFoyaDBJRDBnYzJodmQwTnZiblJsYm5RdWMyTnliMnhzU0dWcFoyaDBJQ3NnSjNCNEp6dGNjbHh1WEhSY2RGeDBmU0JsYkhObElIdGNjbHh1WEhSY2RGeDBYSFJ6YUc5M1EyOXVkR1Z1ZEM1emRIbHNaUzV0WVhoSVpXbG5hSFFnUFNBeU1DQXJJQ2R3ZUNjN1hISmNibHgwWEhSY2RIMWNjbHh1WEhSY2RIMWNjbHh1WEhKY2JseDBYSFJsZUhCaGJtUnpUVzl5WlM1bWIzSkZZV05vS0NoaWRHNHBJRDArSUh0Y2NseHVYSFJjZEZ4MFluUnVMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMk5zYVdOckp5d2daWGh3WVc1a0tUdGNjbHh1WEhSY2RIMHBPMXh5WEc1Y2RIMWNjbHh1WEhKY2JseDBhV1lnS0dGdWFXMWhiSE5RWVdkbGN5a2dlMXh5WEc1Y2RGeDBLR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVYSFJjZEZ4MFpHbHpjR3hoZVVGdWFXMWhiSE1vS1R0Y2NseHVYSFJjZEgwcEtDazdYSEpjYmx4MGZWeHlYRzU5S1R0Y2NseHVJaXdpWkc5amRXMWxiblF1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduUkU5TlEyOXVkR1Z1ZEV4dllXUmxaQ2NzSUdaMWJtTjBhVzl1SUNncElIdGNjbHh1WEhRdkx5Qm1iM0p0SUhaaGJHbGtZWFJwYjI1Y2NseHVYSFJqYjI1emRDQm1iM0p0SUQwZ1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvSjJOdmJuUmhZM1F0Wm05eWJTY3BPMXh5WEc1Y2RHTnZibk4wSUc1aGJXVWdQU0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDZ25ibUZ0WlNjcE8xeHlYRzVjZEdOdmJuTjBJR1Z0WVdsc0lEMGdaRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkRUo1U1dRb0oyVnRZV2xzSnlrN1hISmNibHgwWTI5dWMzUWdiV1Z6YzJGblpTQTlJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJDZVVsa0tDZHRaWE56WVdkbEp5azdYSEpjYmx4MFkyOXVjM1FnWm05eWJVSjBiaUE5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2RtYjNKdExXSjBiaWNwTzF4eVhHNWNjbHh1WEhScFppQW9abTl5YlNrZ2UxeHlYRzVjZEZ4MFcxeHlYRzVjZEZ4MFhIUW5ZMnhwWTJzbkxGeHlYRzVjZEZ4MFhIUW5iMjUwYjNWamFITjBZWEowSnl4Y2NseHVYSFJjZEZ4MEoyMXZkWE5sYjNabGNpY3NYSEpjYmx4MFhIUmNkQ2RyWlhsa2IzZHVKeXhjY2x4dVhIUmNkRngwSjJ0bGVYQnlaWE56Snl4Y2NseHVYSFJjZEZ4MEozUnZkV05vYzNSaGNuUW5MRnh5WEc1Y2RGeDBYSFFuZEc5MVkyaHRiM1psSnl4Y2NseHVYSFJjZEYwdVptOXlSV0ZqYUNoY2NseHVYSFJjZEZ4MEtHVjJaVzUwS1NBOVBseHlYRzVjZEZ4MFhIUmNkR1J2WTNWdFpXNTBMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9aWFpsYm5Rc0lDZ3BJRDArSUh0Y2NseHVYSFJjZEZ4MFhIUmNkR2xtSUNoamFHVmphMGx1Y0hWMGN5Z3BJRDA5UFNCbVlXeHpaU2tnZTF4eVhHNWNkRngwWEhSY2RGeDBYSFJtYjNKdFFuUnVMbVJwYzJGaWJHVmtJRDBnZEhKMVpUdGNjbHh1WEhSY2RGeDBYSFJjZEgwZ1pXeHpaU0I3WEhKY2JseDBYSFJjZEZ4MFhIUmNkR1p2Y20xQ2RHNHVaR2x6WVdKc1pXUWdQU0JtWVd4elpUdGNjbHh1WEhSY2RGeDBYSFJjZEgxY2NseHVYSFJjZEZ4MFhIUjlLU3hjY2x4dVhIUmNkRngwWm1Gc2MyVmNjbHh1WEhSY2RDazdYSEpjYmx4eVhHNWNkRngwWm5WdVkzUnBiMjRnWTJobFkydEpibkIxZEhNb0tTQjdYSEpjYmx4MFhIUmNkR052Ym5OMElHNWhiV1ZXWVd4MVpTQTlJRzVoYldVdWRtRnNkV1V1ZEhKcGJTZ3BPMXh5WEc1Y2RGeDBYSFJqYjI1emRDQmxiV0ZwYkZaaGJIVmxJRDBnWlcxaGFXd3VkbUZzZFdVdWRISnBiU2dwTzF4eVhHNWNkRngwWEhSamIyNXpkQ0J0WlhOellXZGxWbUZzZFdVZ1BTQnRaWE56WVdkbExuWmhiSFZsTG5SeWFXMG9LVHRjY2x4dVhISmNibHgwWEhSY2RHbG1JQ2h1WVcxbFZtRnNkV1VnUFQwOUlDY25LU0I3WEhKY2JseDBYSFJjZEZ4MGMyVjBSWEp5YjNKR2IzSW9ibUZ0WlN3Z0oxQnNaV0Z6WlNCbGJuUmxjaUI1YjNWeUlHWjFiR3dnYm1GdFpTY3BPMXh5WEc1Y2RGeDBYSFI5SUdWc2MyVWdlMXh5WEc1Y2RGeDBYSFJjZEhObGRGTjFZMk5sYzNOR2IzSW9ibUZ0WlNrN1hISmNibHgwWEhSY2RIMWNjbHh1WEhKY2JseDBYSFJjZEdsbUlDaGxiV0ZwYkZaaGJIVmxJRDA5UFNBbkp5a2dlMXh5WEc1Y2RGeDBYSFJjZEhObGRFVnljbTl5Um05eUtHVnRZV2xzTENBblVHeGxZWE5sSUdWdWRHVnlJSGx2ZFhJZ1pXMWhhV3dnWVdSa2NtVnpjeWNwTzF4eVhHNWNkRngwWEhSOUlHVnNjMlVnYVdZZ0tDRmxiV0ZwYkVselZtRnNhV1FvWlcxaGFXeFdZV3gxWlNrcElIdGNjbHh1WEhSY2RGeDBYSFJ6WlhSRmNuSnZja1p2Y2lobGJXRnBiQ3dnSjBWdFlXbHNJR2x6SUc1dmRDQjJZV3hwWkNjcE8xeHlYRzVjZEZ4MFhIUjlJR1ZzYzJVZ2UxeHlYRzVjZEZ4MFhIUmNkSE5sZEZOMVkyTmxjM05HYjNJb1pXMWhhV3dwTzF4eVhHNWNkRngwWEhSOVhISmNibHh5WEc1Y2RGeDBYSFJwWmlBb2JXVnpjMkZuWlZaaGJIVmxJRDA5UFNBbkp5a2dlMXh5WEc1Y2RGeDBYSFJjZEhObGRFVnljbTl5Um05eUtHMWxjM05oWjJVc0lDZFFiR1ZoYzJVZ1pXNTBaWElnZVc5MWNpQnRaWE56WVdkbEp5azdYSEpjYmx4MFhIUmNkSDBnWld4elpTQjdYSEpjYmx4MFhIUmNkRngwYzJWMFUzVmpZMlZ6YzBadmNpaHRaWE56WVdkbEtUdGNjbHh1WEhSY2RGeDBmVnh5WEc1Y2NseHVYSFJjZEZ4MGFXWWdLRnh5WEc1Y2RGeDBYSFJjZEc1aGJXVldZV3gxWlNBOVBUMGdKeWNnZkh4Y2NseHVYSFJjZEZ4MFhIUmxiV0ZwYkZaaGJIVmxJRDA5UFNBbkp5QjhmRnh5WEc1Y2RGeDBYSFJjZEcxbGMzTmhaMlZXWVd4MVpTQTlQVDBnSnljZ2ZIeGNjbHh1WEhSY2RGeDBYSFFoWlcxaGFXeEpjMVpoYkdsa0tHVnRZV2xzVm1Gc2RXVXBYSEpjYmx4MFhIUmNkQ2tnZTF4eVhHNWNkRngwWEhSY2RISmxkSFZ5YmlCbVlXeHpaVHRjY2x4dVhIUmNkRngwZlNCbGJITmxJSHRjY2x4dVhIUmNkRngwWEhSeVpYUjFjbTRnZEhKMVpUdGNjbHh1WEhSY2RGeDBmVnh5WEc1Y2RGeDBmVnh5WEc1Y2NseHVYSFJjZEdaMWJtTjBhVzl1SUhObGRFVnljbTl5Um05eUtHbHVjSFYwTENCdFpYTnpZV2RsS1NCN1hISmNibHgwWEhSY2RHTnZibk4wSUdadmNtMGdQU0JwYm5CMWRDNXdZWEpsYm5SRmJHVnRaVzUwTzF4eVhHNWNkRngwWEhSamIyNXpkQ0J6YldGc2JDQTlJR1p2Y20wdWNYVmxjbmxUWld4bFkzUnZjaWduYzIxaGJHd25LVHRjY2x4dVhISmNibHgwWEhSY2RITnRZV3hzTG1sdWJtVnlWR1Y0ZENBOUlHMWxjM05oWjJVN1hISmNibHgwWEhSY2RHWnZjbTB1WTJ4aGMzTk9ZVzFsSUQwZ0oyWnZjbTFmWDJkeWIzVndJR1Z5Y205eUp6dGNjbHh1WEhSY2RIMWNjbHh1WEhKY2JseDBYSFJtZFc1amRHbHZiaUJ6WlhSVGRXTmpaWE56Um05eUtHbHVjSFYwS1NCN1hISmNibHgwWEhSY2RHTnZibk4wSUdadmNtMGdQU0JwYm5CMWRDNXdZWEpsYm5SRmJHVnRaVzUwTzF4eVhHNWNkRngwWEhSbWIzSnRMbU5zWVhOelRtRnRaU0E5SUNkbWIzSnRYMTluY205MWNDQnpkV05qWlhOekp6dGNjbHh1WEhSY2RIMWNjbHh1WEhKY2JseDBYSFJtZFc1amRHbHZiaUJsYldGcGJFbHpWbUZzYVdRb1pXMWhhV3dwSUh0Y2NseHVYSFJjZEZ4MFkyOXVjM1FnY21VZ1BTQXZYaWdvVzE0OFBpZ3BYRnhiWEZ4ZFhGeGNYQzRzT3pwY1hITkFYQ0pkS3loY1hDNWJYancrS0NsY1hGdGNYRjFjWEZ4Y0xpdzdPbHhjYzBCY0lsMHJLU29wZkNoY0lpNHJYQ0lwS1VBb0tGeGNXMXN3TFRsZGV6RXNNMzFjWEM1Yk1DMDVYWHN4TEROOVhGd3VXekF0T1YxN01Td3pmVnhjTGxzd0xUbGRlekVzTTMxZEtYd29LRnRoTFhwQkxWcGNYQzB3TFRsZEsxeGNMaWtyVzJFdGVrRXRXbDE3TWl4OUtTa2tMeTUwWlhOMEtGeHlYRzVjZEZ4MFhIUmNkR1Z0WVdsc1hISmNibHgwWEhSY2RDazdYSEpjYmx4eVhHNWNkRngwWEhSeVpYUjFjbTRnY21VN1hISmNibHgwWEhSOVhISmNibHgwZlZ4eVhHNTlLVHRjY2x4dUlpd2laRzlqZFcxbGJuUXVZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25SRTlOUTI5dWRHVnVkRXh2WVdSbFpDY3NJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JseDBkMmx1Wkc5M0xtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0oyeHZZV1FuTENBb1pTa2dQVDRnZTF4dVhIUmNkR052Ym5OMElIQnlaV3h2WVdRZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0NjdWNISmxiRzloWkNjcE8xeHVYRzVjZEZ4MGNISmxiRzloWkM1amJHRnpjMHhwYzNRdVlXUmtLQ2R3Y21Wc2IyRmtMV1pwYm1semFHVmtKeWs3WEc1Y2RIMHBPMXh1WEc1Y2RHTnZibk4wSUdKMGJsTmpjbTlzYkZSdlZHOXdJRDBnWkc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEVKNVNXUW9KMkowYmxOamNtOXNiRlJ2Vkc5d0p5azdYRzVjZEdKMGJsTmpjbTlzYkZSdlZHOXdMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMk5zYVdOckp5d2dLR1VwSUQwK0lIdGNibHgwWEhSM2FXNWtiM2N1YzJOeWIyeHNWRzhvZTF4dVhIUmNkRngwZEc5d09pQXdMRnh1WEhSY2RGeDBiR1ZtZERvZ01DeGNibHgwWEhSY2RHSmxhR0YyYVc5eU9pQW5jMjF2YjNSb0p5eGNibHgwWEhSOUtUdGNibHgwZlNrN1hHNTlLVHRjYmlJc0ltUnZZM1Z0Wlc1MExtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0owUlBUVU52Ym5SbGJuUk1iMkZrWldRbkxDQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseDBZMjl1YzNRZ2JtRjJRMjl1ZEdGcGJtVnlJRDBnWkc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEVKNVNXUW9KMjVoZGkxamIyNTBZV2x1WlhJbktUdGNjbHh1WEhSamIyNXpkQ0J0Wlc1MVFuUnVJRDBnWkc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEVKNVNXUW9KMjFsYm5VdFluUnVKeWs3WEhKY2JseDBZMjl1YzNRZ2JtRjJUR2x6ZENBOUlHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0NkdVlYWXRiR2x6ZENjcE8xeHlYRzVjY2x4dVhIUjNhVzVrYjNjdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnbmMyTnliMnhzSnl3Z0tHVXBJRDArSUh0Y2NseHVYSFJjZEdsbUlDaGtiMk4xYldWdWRDNWtiMk4xYldWdWRFVnNaVzFsYm5RdWMyTnliMnhzVkc5d0lENGdNQ2tnZTF4eVhHNWNkRngwWEhSdVlYWkRiMjUwWVdsdVpYSXVZMnhoYzNOTWFYTjBMbUZrWkNnbmMzUnBZMnQ1SnlrN1hISmNibHgwWEhSY2RHSjBibE5qY205c2JGUnZWRzl3TG5OMGVXeGxMbTl3WVdOcGRIa2dQU0F4TzF4eVhHNWNkRngwZlNCbGJITmxJSHRjY2x4dVhIUmNkRngwYm1GMlEyOXVkR0ZwYm1WeUxtTnNZWE56VEdsemRDNXlaVzF2ZG1Vb0ozTjBhV05yZVNjcE8xeHlYRzVjZEZ4MFhIUmlkRzVUWTNKdmJHeFViMVJ2Y0M1emRIbHNaUzV2Y0dGamFYUjVJRDBnTUR0Y2NseHVYSFJjZEgxY2NseHVYSFI5S1R0Y2NseHVYSEpjYmx4MGJXVnVkVUowYmk1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkamJHbGpheWNzSUNobEtTQTlQaUI3WEhKY2JseDBYSFJ0Wlc1MVFuUnVMbU5zWVhOelRHbHpkQzUwYjJkbmJHVW9KMk5zYVdOclpXUW5LVHRjY2x4dVhIUmNkRzVoZGtOdmJuUmhhVzVsY2k1amJHRnpjMHhwYzNRdWRHOW5aMnhsS0NkdmRtVnliR0Y1SnlrN1hISmNibHgwWEhSdVlYWk1hWE4wTG1Oc1lYTnpUR2x6ZEM1MGIyZG5iR1VvSjNOb2IzY25LVHRjY2x4dVhIUjlLVHRjY2x4dWZTazdYSEpjYmlJc0ltUnZZM1Z0Wlc1MExtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0owUlBUVU52Ym5SbGJuUk1iMkZrWldRbkxDQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseDBMeThnWTJGeWIzVnpaV3hjY2x4dVhIUmpiMjV6ZENCallYSnZkWE5sYkNBOUlHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0NkallYSnZkWE5sYkNjcE8xeHlYRzVjZEdOdmJuTjBJSEJ5WlhaQ2RHNGdQU0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDZ25jSEpsZGljcE8xeHlYRzVjZEdOdmJuTjBJRzVsZUhSQ2RHNGdQU0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDZ25ibVY0ZENjcE8xeHlYRzVjZEdOdmJuTjBJR05oY205MWMyVnNWWEpzSUQwZ0p5NHZhbk12WTJGeWIzVnpaV3d1YW5OdmJpYzdYSEpjYmx4eVhHNWNkR3hsZENCbWFYSnpkRk5zYVdSbE8xeHlYRzVjZEd4bGRDQnNZWE4wVTJ4cFpHVTdYSEpjYmx4eVhHNWNkR1oxYm1OMGFXOXVJR2RsZEZOc2FXUmxjMFJoZEdFb0tTQjdYSEpjYmx4MFhIUnlaWFIxY200Z2JtVjNJRkJ5YjIxcGMyVW9LSEpsYzI5c2RtVXNJSEpsYW1WamRDa2dQVDRnZTF4eVhHNWNkRngwWEhSbVpYUmphQ2hqWVhKdmRYTmxiRlZ5YkNsY2NseHVYSFJjZEZ4MFhIUXVkR2hsYmlnb2NtVnpjQ2tnUFQ0Z2NtVnpjQzVxYzI5dUtDa3BYSEpjYmx4MFhIUmNkRngwTG5Sb1pXNG9LR1JoZEdFcElEMCtJSEpsYzI5c2RtVW9aR0YwWVNrcFhISmNibHgwWEhSY2RGeDBMbU5oZEdOb0tDaGxjbklwSUQwK0lISmxhbVZqZENobGNuSXBLVHRjY2x4dVhIUmNkSDBwTzF4eVhHNWNkSDFjY2x4dVhISmNibHgwWVhONWJtTWdablZ1WTNScGIyNGdaR2x6Y0d4aGVVTmhjbTkxYzJWc0tDa2dlMXh5WEc1Y2RGeDBZMjl1YzNRZ1pHRjBZVXhwYzNRZ1BTQmhkMkZwZENCblpYUlRiR2xrWlhORVlYUmhLQ2s3WEhKY2JseDBYSFJqYjI1emRDQnpiR2xrWlhOQmNuSmhlU0E5SUdSaGRHRk1hWE4wTG5Oc2FXUmxjenRjY2x4dVhISmNibHgwWEhSemJHbGtaWE5CY25KaGVTNW1iM0pGWVdOb0tDaHpiR2xrWlN3Z2MyeHBaR1ZPZFcxaVpYSXBJRDArSUh0Y2NseHVYSFJjZEZ4MGJtVjNVMnhwWkdVZ1BTQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0Nka2FYWW5LVHRjY2x4dVhIUmNkRngwYm1WM1UyeHBaR1V1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25ZMkZ5YjNWelpXeGZYM05zYVdSbEp5azdYSEpjYmx4eVhHNWNkRngwWEhSdVpYZFRiR2xrWlM1cGJtNWxja2hVVFV3Z1BTQmdYSEpjYmx4MFhIUmNkRngwWEhSY2REeGthWFlnWTJ4aGMzTTlYQ0pqWVhKdmRYTmxiRjlmYVcxaFoyVXRZMjl1ZEdGcGJtVnlYQ0krWEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwUEdsdFp5QnpjbU05WENJa2UzTnNhV1JsTG1sdFlXZGxmVndpSUdGc2REMWNJbk5zYVdSbExXbHRaMXdpSUM4K1hISmNibHgwWEhSY2RGeDBYSFJjZER3dlpHbDJQbHh5WEc1Y2RGeDBYSFJjZEZ4MFhIUThaR2wySUdOc1lYTnpQVndpWTJGeWIzVnpaV3hmWDJOdmJuUmxiblJjSWo1Y2NseHVYSFJjZEZ4MFhIUmNkRngwWEhROGFERWdZMnhoYzNNOVhDSmpZWEp2ZFhObGJGOWZkR2wwYkdWY0lqNGtlM05zYVdSbExuUnBkR3hsZlR3dmFERStYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBQSEFnWTJ4aGMzTTlYQ0pqWVhKdmRYTmxiRjlmWkdWelkxd2lQaVI3YzJ4cFpHVXVZMjl1ZEdWdWRIMDhMM0ErWEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwUEdKMWRIUnZiaUJqYkdGemN6MWNJbWhsWVdSbGNsOWZibUYyTFdSdmJtRjBaUzFpZEc0Z1luVjBkRzl1WENJK1hISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUkVkV2R0WlNCNllTQnVaY1doZEc5Y2NseHVYSFJjZEZ4MFhIUmNkRngwWEhROEwySjFkSFJ2Ymo1Y2NseHVYSFJjZEZ4MFhIUmNkRngwUEM5a2FYWStYSEpjYmx4MFhIUmNkR0E3WEhKY2JseHlYRzVjZEZ4MFhIUmpZWEp2ZFhObGJDNWhjSEJsYm1SRGFHbHNaQ2h1WlhkVGJHbGtaU2s3WEhKY2JseHlYRzVjZEZ4MFhIUnBaaUFvYzJ4cFpHVk9kVzFpWlhJZ1BUMDlJREFwSUh0Y2NseHVYSFJjZEZ4MFhIUm1hWEp6ZEZOc2FXUmxJRDBnYm1WM1UyeHBaR1U3WEhKY2JseDBYSFJjZEZ4MGJtVjNVMnhwWkdVdVkyeGhjM05NYVhOMExtRmtaQ2duWVdOMGFYWmxKeWs3WEhKY2JseDBYSFJjZEgwZ1pXeHpaU0JwWmlBb2MyeHBaR1ZPZFcxaVpYSWdLeUF4SUQwOVBTQmtZWFJoVEdsemRDNXpiR2xrWlhNdWJHVnVaM1JvS1NCN1hISmNibHgwWEhSY2RGeDBiR0Z6ZEZOc2FXUmxJRDBnYm1WM1UyeHBaR1U3WEhKY2JseDBYSFJjZEgxY2NseHVYSFJjZEgwcE8xeHlYRzVjY2x4dVhIUmNkRzVsZUhSVGJHbGtaU2dwTzF4eVhHNWNkRngwY0hKbGRtbHZkWE5UYkdsa1pTZ3BPMXh5WEc1Y2RIMWNjbHh1WEhKY2JseDBablZ1WTNScGIyNGdibVY0ZEZOc2FXUmxLQ2tnZTF4eVhHNWNkRngwWTI5dWMzUWdibVY0ZEVKMGJpQTlJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJDZVVsa0tDZHVaWGgwSnlrN1hISmNibHh5WEc1Y2RGeDBibVY0ZEVKMGJpNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZGpiR2xqYXljc0lDaGxLU0E5UGlCN1hISmNibHgwWEhSY2RHTnZibk4wSUdGamRHbDJaVk5zYVdSbElEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkxtTmhjbTkxYzJWc1gxOXpiR2xrWlM1aFkzUnBkbVVuS1R0Y2NseHVYSEpjYmx4MFhIUmNkR3hsZENCdVpYaDBVMmxpYkdsdVp5QTlJR0ZqZEdsMlpWTnNhV1JsTG01bGVIUkZiR1Z0Wlc1MFUybGliR2x1Wnp0Y2NseHVYSEpjYmx4MFhIUmNkR2xtSUNodVpYaDBVMmxpYkdsdVp5QTlQU0J1ZFd4c0tTQjdYSEpjYmx4MFhIUmNkRngwYm1WNGRGTnBZbXhwYm1jZ1BTQmhZM1JwZG1WVGJHbGtaVHRjY2x4dVhIUmNkRngwZlZ4eVhHNWNjbHh1WEhSY2RGeDBhV1lnS0c1bGVIUlRhV0pzYVc1bkxtTnNZWE56VEdsemRDNWpiMjUwWVdsdWN5Z25ZMkZ5YjNWelpXeGZYM05zYVdSbEp5a3BJSHRjY2x4dVhIUmNkRngwWEhSaFkzUnBkbVZUYkdsa1pTNWpiR0Z6YzB4cGMzUXVjbVZ0YjNabEtDZGhZM1JwZG1VbktUdGNjbHh1WEhSY2RGeDBYSFJ1WlhoMFUybGliR2x1Wnk1amJHRnpjMHhwYzNRdVlXUmtLQ2RoWTNScGRtVW5LVHRjY2x4dVhIUmNkRngwZlZ4eVhHNWNkRngwZlNrN1hISmNibHgwZlZ4eVhHNWNjbHh1WEhSbWRXNWpkR2x2YmlCd2NtVjJhVzkxYzFOc2FXUmxLQ2tnZTF4eVhHNWNkRngwWTI5dWMzUWdjSEpsZGtKMGJpQTlJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJDZVVsa0tDZHdjbVYySnlrN1hISmNibHh5WEc1Y2RGeDBjSEpsZGtKMGJpNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZGpiR2xqYXljc0lDaGxLU0E5UGlCN1hISmNibHgwWEhSY2RHTnZibk4wSUdGamRHbDJaVk5zYVdSbElEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkxtTmhjbTkxYzJWc1gxOXpiR2xrWlM1aFkzUnBkbVVuS1R0Y2NseHVYSEpjYmx4MFhIUmNkR3hsZENCdVpYaDBVMmxpYkdsdVp5QTlJR0ZqZEdsMlpWTnNhV1JsTG5CeVpYWnBiM1Z6Uld4bGJXVnVkRk5wWW14cGJtYzdYSEpjYmx4eVhHNWNkRngwWEhScFppQW9ibVY0ZEZOcFlteHBibWNnUFQwZ2JuVnNiQ2tnZTF4eVhHNWNkRngwWEhSY2RHNWxlSFJUYVdKc2FXNW5JRDBnWVdOMGFYWmxVMnhwWkdVN1hISmNibHgwWEhSY2RIMWNjbHh1WEhKY2JseDBYSFJjZEdsbUlDaHVaWGgwVTJsaWJHbHVaeTVqYkdGemMweHBjM1F1WTI5dWRHRnBibk1vSjJOaGNtOTFjMlZzWDE5emJHbGtaU2NwS1NCN1hISmNibHgwWEhSY2RGeDBZV04wYVhabFUyeHBaR1V1WTJ4aGMzTk1hWE4wTG5KbGJXOTJaU2duWVdOMGFYWmxKeWs3WEhKY2JseDBYSFJjZEZ4MGJtVjRkRk5wWW14cGJtY3VZMnhoYzNOTWFYTjBMbUZrWkNnbllXTjBhWFpsSnlrN1hISmNibHgwWEhSY2RIMWNjbHh1WEhSY2RIMHBPMXh5WEc1Y2RIMWNjbHh1WEhKY2JseDBhV1lnS0dOaGNtOTFjMlZzSUNFOVBTQnVkV3hzS1NCN1hISmNibHgwWEhRb1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc1Y2RGeDBYSFJrYVhOd2JHRjVRMkZ5YjNWelpXd29LVHRjY2x4dVhIUmNkSDBwS0NrN1hISmNibHgwZlZ4eVhHNTlLVHRjY2x4dUlpd2lkMmx1Wkc5M0xtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0owUlBUVU52Ym5SbGJuUk1iMkZrWldRbkxDQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseDBMeThnZEdGaWMxeHlYRzVjZEdOdmJuTjBJSFJoWWt4cGMzUkNkRzRnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlRV3hzS0NjdWRHRmlZMk52Y21ScGIyNWZYMnhwYzNRdFluUnVKeWs3WEhKY2JseDBZMjl1YzNRZ2RHRmljeUE5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSkJiR3dvSnk1MFlXSmpZMjl5WkdsdmJsOWZZMjl1ZEdGcGJtVnlKeWs3WEhKY2JseDBZMjl1YzNRZ2RHRmlZMk52Y21ScGIyNU1hWE4wSUQwZ1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvSjNSaFltTmpiM0prYVc5dUxXeHBjM1FuS1R0Y2NseHVYSFJqYjI1emRDQjBZV0p6UTI5dWRHVnVkQ0E5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSkJiR3dvSnk1MFlXSmpZMjl5WkdsdmJsOWZkR0ZpTFdsdWJtVnlKeWs3WEhKY2JseDBZMjl1YzNRZ2RHRmlZMk52Y21ScGIyNGdQU0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDZ25kR0ZpWTJOdmNtUnBiMjRuS1R0Y2NseHVYSEpjYmx4MFpuVnVZM1JwYjI0Z1lXTjBhWFpoZEdWVVlXSnpLQ2tnZTF4eVhHNWNkRngwZEdGaVRHbHpkRUowYmk1bWIzSkZZV05vS0NoMFlXSXBJRDArSUh0Y2NseHVYSFJjZEZ4MGRHRmlMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMk5zYVdOckp5d2dLR1VwSUQwK0lIdGNjbHh1WEhSY2RGeDBYSFJqYjI1emRDQjBZV0pPWVhZZ1BTQjBZV0l1Y0dGeVpXNTBSV3hsYldWdWREdGNjbHh1WEhSY2RGeDBYSFJqYjI1emRDQjBZV0p6UTI5dWRHRnBibVZ5SUQwZ2RHRmlUbUYyTG5CaGNtVnVkRVZzWlcxbGJuUXVjR0Z5Wlc1MFJXeGxiV1Z1ZER0Y2NseHVYSFJjZEZ4MFhIUmpiMjV6ZENCMFlXSk9kVzFpWlhJZ1BTQjBZV0l1WkdGMFlYTmxkQzVtYjNKVVlXSTdYSEpjYmx4MFhIUmNkRngwWTI5dWMzUWdkR0ZpVkc5QlkzUnBkbUYwWlNBOUlIUmhZbk5EYjI1MFlXbHVaWEl1Y1hWbGNubFRaV3hsWTNSdmNpaGNjbHh1WEhSY2RGeDBYSFJjZEdBdWRHRmlZMk52Y21ScGIyNWZYM1JoWWx0a1lYUmhMWFJoWWoxY0lpUjdkR0ZpVG5WdFltVnlmVndpWFdCY2NseHVYSFJjZEZ4MFhIUXBPMXh5WEc1Y2NseHVYSFJjZEZ4MFhIUjBZV0pPWVhZdWNYVmxjbmxUWld4bFkzUnZja0ZzYkNnbkxuUmhZbU5qYjNKa2FXOXVYMTlzYVhOMExXSjBiaWNwTG1admNrVmhZMmdvS0dKMGJpa2dQVDRnZTF4eVhHNWNkRngwWEhSY2RGeDBZblJ1TG1Oc1lYTnpUR2x6ZEM1eVpXMXZkbVVvSjJOMWNuSmxiblFuS1R0Y2NseHVYSFJjZEZ4MFhIUjlLVHRjY2x4dVhISmNibHgwWEhSY2RGeDBkR0ZpYzBOdmJuUmhhVzVsY2k1eGRXVnllVk5sYkdWamRHOXlRV3hzS0NjdWRHRmlZMk52Y21ScGIyNWZYM1JoWWljcExtWnZja1ZoWTJnb0tIUmhZaWtnUFQ0Z2UxeHlYRzVjZEZ4MFhIUmNkRngwZEdGaUxtTnNZWE56VEdsemRDNXlaVzF2ZG1Vb0oyTjFjbkpsYm5RbktUdGNjbHh1WEhSY2RGeDBYSFI5S1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwZEdGaUxtTnNZWE56VEdsemRDNWhaR1FvSjJOMWNuSmxiblFuS1R0Y2NseHVYSFJjZEZ4MFhIUjBZV0pVYjBGamRHbDJZWFJsTG1Oc1lYTnpUR2x6ZEM1aFpHUW9KMk4xY25KbGJuUW5LVHRjY2x4dVhISmNibHgwWEhSY2RGeDBhV1lnS0hkcGJtUnZkeTVwYm01bGNsZHBaSFJvSUQ0OUlEWXdNQ2tnZTF4eVhHNWNkRngwWEhSY2RGeDBkR0ZpYzBOdmJuUmxiblF1Wm05eVJXRmphQ2dvZEdGaWN5a2dQVDRnZTF4eVhHNWNkRngwWEhSY2RGeDBYSFIwWVdKekxuTjBlV3hsTG0xaGVFaGxhV2RvZENBOUlIUmhZbk11YzJOeWIyeHNTR1ZwWjJoMElDc2dKM0I0Snp0Y2NseHVYSFJjZEZ4MFhIUmNkSDBwTzF4eVhHNWNkRngwWEhSY2RIMWNjbHh1WEhSY2RGeDBmU2s3WEhKY2JseDBYSFI5S1R0Y2NseHVYSEpjYmx4MFhIUnBaaUFvZEdGaVkyTnZjbVJwYjI1TWFYTjBLU0I3WEhKY2JseDBYSFJjZEhSaFluTXVabTl5UldGamFDZ29kR0ZpS1NBOVBpQjdYSEpjYmx4MFhIUmNkRngwZEdGaUxuRjFaWEo1VTJWc1pXTjBiM0lvSnk1MFlXSmpZMjl5WkdsdmJsOWZiR2x6ZENBdWRHRmlZMk52Y21ScGIyNWZYMkowYmljcExtTnNhV05yS0NrN1hISmNibHgwWEhSY2RIMHBPMXh5WEc1Y2RGeDBmVnh5WEc1Y2NseHVYSFJjZEhkcGJtUnZkeTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2R5WlhOcGVtVW5MQ0FvWlNrZ1BUNGdlMXh5WEc1Y2RGeDBYSFJwWmlBb2QybHVaRzkzTG1sdWJtVnlWMmxrZEdnZ1BqMGdOakF3S1NCN1hISmNibHgwWEhSY2RGeDBZV04wYVhaaGRHVlVZV0p6S0NrN1hISmNibHgwWEhSY2RIMWNjbHh1WEhSY2RIMHBPMXh5WEc1Y2RIMWNjbHh1WEhKY2JseDBMeTh2THk4Z1lXTmpiM0prYVc5dVhISmNibHgwWTI5dWMzUWdZV05qYjNKa2FXOXVRblJ1SUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZja0ZzYkNnbkxtRmpZMjl5WkdsdmJsOWZiR2x6ZEMxaWRHNG5LVHRjY2x4dVhISmNibHgwWm5WdVkzUnBiMjRnWVdOMGFYWmhkR1ZCWTJOdmNtUnBiMjRvS1NCN1hISmNibHgwWEhSaFkyTnZjbVJwYjI1Q2RHNHVabTl5UldGamFDZ29ZblJ1S1NBOVBpQjdYSEpjYmx4MFhIUmNkR0owYmk1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkamJHbGpheWNzSUNncElEMCtJSHRjY2x4dVhIUmNkRngwWEhRdkx5QmphR1ZqYXlCbWIzSWdiM0JsYmlCaFkyTnZjbVJwYjI1Y2NseHVYSFJjZEZ4MFhIUmpiMjV6ZENCaFkyTnZjbVJwYjI1Q2RHNVBjR1Z1SUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWhjY2x4dVhIUmNkRngwWEhSY2RDY3VZV05qYjNKa2FXOXVYMTlzYVhOMExXSjBiaTV2Y0dWdUoxeHlYRzVjZEZ4MFhIUmNkQ2s3WEhKY2JseHlYRzVjZEZ4MFhIUmNkR2xtSUNoaFkyTnZjbVJwYjI1Q2RHNVBjR1Z1SUNZbUlHRmpZMjl5WkdsdmJrSjBiazl3Wlc0Z0lUMDlJR0owYmlrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwTHk4Z2FXWWdkR2hsY21VZ2FYTWdiM0JsYmlCMGFHVnVJSEpsYlc5MlpTQnZjR1Z1SUdOc1lYTnpJR0Z1WkNCelpYUWdiV0Y0YUdWcFoyaDBJSFJ2SURCY2NseHVYSFJjZEZ4MFhIUmNkR0ZqWTI5eVpHbHZia0owYms5d1pXNHVZMnhoYzNOTWFYTjBMblJ2WjJkc1pTZ25iM0JsYmljcE8xeHlYRzVjZEZ4MFhIUmNkRngwWVdOamIzSmthVzl1UW5SdVQzQmxiaTV1WlhoMFJXeGxiV1Z1ZEZOcFlteHBibWN1YzNSNWJHVXViV0Y0U0dWcFoyaDBJRDBnTUR0Y2NseHVYSFJjZEZ4MFhIUjlYSEpjYmx4eVhHNWNkRngwWEhSY2RDOHZJSE5sZENCdmNHVnVJR05zWVhOeklIUnZJR1YyWlhKNUlHTnNhV05yWldRZ1lXTmpiM0prYVc5dUlHSjBibHh5WEc1Y2RGeDBYSFJjZEdKMGJpNWpiR0Z6YzB4cGMzUXVkRzluWjJ4bEtDZHZjR1Z1SnlrN1hISmNibHgwWEhSY2RGeDBZMjl1YzNRZ1lXTmpiM0prYVc5dVFtOWtlU0E5SUdKMGJpNXVaWGgwUld4bGJXVnVkRk5wWW14cGJtYzdYSEpjYmx4eVhHNWNkRngwWEhSY2RHbG1JQ2hpZEc0dVkyeGhjM05NYVhOMExtTnZiblJoYVc1ektDZHZjR1Z1SnlrcElIdGNjbHh1WEhSY2RGeDBYSFJjZEdGalkyOXlaR2x2YmtKdlpIa3VjM1I1YkdVdWJXRjRTR1ZwWjJoMElEMGdZV05qYjNKa2FXOXVRbTlrZVM1elkzSnZiR3hJWldsbmFIUWdLeUFuY0hnbk8xeHlYRzVjZEZ4MFhIUmNkSDBnWld4elpTQjdYSEpjYmx4MFhIUmNkRngwWEhSaFkyTnZjbVJwYjI1Q2IyUjVMbk4wZVd4bExtMWhlRWhsYVdkb2RDQTlJREE3WEhKY2JseDBYSFJjZEZ4MGZWeHlYRzVjZEZ4MFhIUjlLVHRjY2x4dVhIUmNkSDBwTzF4eVhHNWNjbHh1WEhSY2RIZHBibVJ2ZHk1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkeVpYTnBlbVVuTENBb1pTa2dQVDRnZTF4eVhHNWNkRngwWEhScFppQW9kMmx1Wkc5M0xtbHVibVZ5VjJsa2RHZ2dQQ0EyTURBcElIdGNjbHh1WEhSY2RGeDBYSFIwWVdKelEyOXVkR1Z1ZEM1bWIzSkZZV05vS0NoMFlXSnpLU0E5UGlCN1hISmNibHgwWEhSY2RGeDBYSFIwWVdKekxuTjBlV3hsTG0xaGVFaGxhV2RvZENBOUlEQTdYSEpjYmx4MFhIUmNkRngwWEhScFppQW9kR0ZpY3k1d2NtVjJhVzkxYzBWc1pXMWxiblJUYVdKc2FXNW5MbU5zWVhOelRHbHpkQzVqYjI1MFlXbHVjeWduYjNCbGJpY3BLU0I3WEhKY2JseDBYSFJjZEZ4MFhIUmNkSFJoWW5NdWNISmxkbWx2ZFhORmJHVnRaVzUwVTJsaWJHbHVaeTVqYkdGemMweHBjM1F1Y21WdGIzWmxLQ2R2Y0dWdUp5azdYSEpjYmx4MFhIUmNkRngwWEhSOVhISmNibHgwWEhSY2RGeDBmU2s3WEhKY2JseDBYSFJjZEgxY2NseHVYSFJjZEgwcE8xeHlYRzVjZEgxY2NseHVYSEpjYmx4MGFXWWdLSFJoWW1OamIzSmthVzl1S1NCN1hISmNibHgwWEhSaFkzUnBkbUYwWlZSaFluTW9LVHRjY2x4dVhIUmNkR0ZqZEdsMllYUmxRV05qYjNKa2FXOXVLQ2s3WEhKY2JseDBmVnh5WEc1OUtUdGNjbHh1SWwwc0luTnZkWEpqWlZKdmIzUWlPaUlpZlE9PSJ9
