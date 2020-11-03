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
		let elementsOnPage = 6;

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

			let nextBtn = nextPage();
			wrapper.appendChild(nextBtn);

			let prevBtn = prevPage();
			wrapper.prepend(prevBtn);
		}

		function nextPage(page) {
			let nextBtn = document.createElement('button');
			nextBtn.id = 'next';
			nextBtn.innerText = '>';
			nextBtn.classList.add('pagination-btn');

			nextBtn.addEventListener('click', (e) => {
				if (nextBtn.parentElement == paginationElDogs) {
					displayPaginatedItems(
						dogBoxArray,
						dogsBox,
						elementsOnPage,
						currentPage
					);

					let activeBtnDog = document.querySelector(
						'#dogs .pagination-btn.active'
					);

					activeBtnDog.nextElementSibling.click();
				}

				if (nextBtn.parentElement == paginationElCats) {
					displayPaginatedItems(
						catBoxArray,
						catsBox,
						elementsOnPage,
						currentPage
					);

					let activeBtnCat = document.querySelector(
						'#cats .pagination-btn.active'
					);

					activeBtnCat.nextElementSibling.click();
				}
			});

			return nextBtn;
		}

		function prevPage(page) {
			let prevBtn = document.createElement('button');
			prevBtn.id = 'prev';
			prevBtn.innerText = '<';
			prevBtn.classList.add('pagination-btn');

			prevBtn.addEventListener('click', (e) => {
				if (prevBtn.parentElement == paginationElDogs) {
					displayPaginatedItems(
						dogBoxArray,
						dogsBox,
						elementsOnPage,
						currentPage
					);

					let activeBtnDog = document.querySelector(
						'#dogs .pagination-btn.active'
					);

					activeBtnDog.previousElementSibling.click();
				}

				if (prevBtn.parentElement == paginationElCats) {
					displayPaginatedItems(
						catBoxArray,
						catsBox,
						elementsOnPage,
						currentPage
					);

					let activeBtnCat = document.querySelector(
						'#cats .pagination-btn.active'
					);

					activeBtnCat.previousElementSibling.click();
				}
			});

			return prevBtn;
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

				if (button.parentElement == paginationElDogs) {
					displayPaginatedItems(
						dogBoxArray,
						dogsBox,
						elementsOnPage,
						currentPage
					);

					let activeBtnDog = document.querySelector(
						'#dogs .pagination-btn.active'
					);

					activeBtnDog.classList.remove('active');

					button.classList.add('active');
				}

				if (button.parentElement == paginationElCats) {
					displayPaginatedItems(
						catBoxArray,
						catsBox,
						elementsOnPage,
						currentPage
					);

					let activeBtnCat = document.querySelector(
						'#cats .pagination-btn.active'
					);

					activeBtnCat.classList.remove('active');

					button.classList.add('active');
				}
			});

			return button;
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

		if (dogsBox) {
			displayPaginatedItems(dogBoxArray, dogsBox, elementsOnPage, currentPage);
			displayPagination(dogBoxArray, paginationElDogs, elementsOnPage);

			expandsMore.forEach((btn) => {
				btn.addEventListener('click', expand);
			});
		}

		if (catsBox) {
			displayPaginatedItems(catBoxArray, catsBox, elementsOnPage, currentPage);
			displayPagination(catBoxArray, paginationElCats, elementsOnPage);

			expandsMore.forEach((btn) => {
				btn.addEventListener('click', expand);
			});
		}
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Fkb3B0Q29udGVudFN3aXRjaGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9mZXRjaEFuaW1hbHNEYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9mb3JtVmFsaWRhaXRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbmF2LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RhYmNjb3JkaW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRztBQUNILEVBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOERBQThELE9BQU87QUFDckU7QUFDQSxnQ0FBZ0MsT0FBTztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ2pDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx5Q0FBeUMsVUFBVSxTQUFTLFNBQVM7QUFDckU7QUFDQSxLQUFLLEVBQUU7QUFDUDtBQUNBO0FBQ0EsMERBQTBELFNBQVM7QUFDbkU7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLEVBQUUsV0FBVztBQUM5QjtBQUNBLDBDQUEwQztBQUMxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0UsWUFBWTtBQUM1RTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRSxNQUFNO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxrQ0FBa0M7QUFDakY7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGtDQUFrQztBQUNqRjtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0Msa0NBQWtDO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHlDQUF5QyxVQUFVLFNBQVMsU0FBUztBQUNyRTtBQUNBLEtBQUssRUFBRTtBQUNQO0FBQ0E7QUFDQSwwREFBMEQsU0FBUztBQUNuRTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsRUFBRSxXQUFXO0FBQzlCO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxZQUFZO0FBQzVFO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFLFNBQVM7QUFDbkY7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGtDQUFrQztBQUNqRjtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0Msa0NBQWtDO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxrQ0FBa0M7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBOztBQUVBOztBQUVBLGtCQUFrQixtQkFBbUI7QUFDckM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQy9jRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlDQUFpQyx5QkFBeUIsNkJBQTZCLElBQUksUUFBUSxJQUFJLFFBQVEsSUFBSSxRQUFRLElBQUksZ0NBQWdDLEdBQUc7QUFDbEs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUN2RkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTtBQUNGLENBQUM7Ozs7Ozs7Ozs7OztBQ2ZEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7Ozs7Ozs7Ozs7O0FDcEJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0EscUNBQXFDLFlBQVk7QUFDakQsbUNBQW1DLGNBQWM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNqR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsVUFBVTtBQUM5Qzs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLElBQUk7QUFDSixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG5cdGhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIG51bGwsICcgJyk7XHJcblx0Y29uc3QgdGFiU3dpdGNoZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc3dpdGNoZXJdJyk7XHJcblxyXG5cdHRhYlN3aXRjaGVycy5mb3JFYWNoKCh0YWJTd2l0Y2gpID0+IHtcclxuXHRcdGNvbnN0IHRhYlN3aXRjaGVyID0gdGFiU3dpdGNoO1xyXG5cdFx0Y29uc3QgcGFnZUlkID0gdGFiU3dpdGNoZXIuZGF0YXNldC50YWI7XHJcblxyXG5cdFx0dGFiU3dpdGNoZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0XHRkb2N1bWVudFxyXG5cdFx0XHRcdC5xdWVyeVNlbGVjdG9yKCcuYWRvcHRfX2xpc3QtaXRlbS5hY3RpdmUnKVxyXG5cdFx0XHRcdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHJcblx0XHRcdHRhYlN3aXRjaGVyLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHJcblx0XHRcdHN3aXRjaFBhZ2UocGFnZUlkKTtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cclxuXHRmdW5jdGlvbiBzd2l0Y2hQYWdlKHBhZ2VJZCkge1xyXG5cdFx0Y29uc3QgY3VycmVudFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS5hY3RpdmUnKTtcclxuXHRcdGNvbnN0IGN1cnJlbnRQYWdlSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UtaGVhZGVyLmFjdGl2ZScpO1xyXG5cclxuXHRcdGN1cnJlbnRQYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0Y3VycmVudFBhZ2VIZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblxyXG5cdFx0Y29uc3QgbmV4dFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucGFnZVtkYXRhLXBhZ2U9XCIke3BhZ2VJZH1cIl1gKTtcclxuXHRcdGNvbnN0IG5leHRQYWdlSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuXHRcdFx0YC5wYWdlLWhlYWRlcltkYXRhLWhlYWRlcj1cIiR7cGFnZUlkfVwiXWBcclxuXHRcdCk7XHJcblx0XHRuZXh0UGFnZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdG5leHRQYWdlSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdH1cclxufSk7XHJcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3QgYW5pbWFsc1VybCA9ICcuLi9qcy9hbmltYWxzLmpzb24nO1xyXG5cdGNvbnN0IGFuaW1hbHNQYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbmltYWxzLXBhZ2VzJyk7XHJcblx0Y29uc3QgZG9nc0JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb2dzLWJveCcpO1xyXG5cdGNvbnN0IGNhdHNCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0cy1ib3gnKTtcclxuXHJcblx0ZnVuY3Rpb24gZ2V0QW5pbWFsc0RhdGEoKSB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRmZXRjaChhbmltYWxzVXJsKVxyXG5cdFx0XHRcdC50aGVuKChyZXNwKSA9PiByZXNwLmpzb24oKSlcclxuXHRcdFx0XHQudGhlbigoZGF0YSkgPT4gcmVzb2x2ZShkYXRhKSlcclxuXHRcdFx0XHQuY2F0Y2goKGVycikgPT4gcmVqZWN0KGVycikpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBkb2dOdW1iZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG9nTnVtYmVyJyk7XHJcblx0Y29uc3QgY2F0TnVtYmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdE51bWJlcicpO1xyXG5cclxuXHRhc3luYyBmdW5jdGlvbiBkaXNwbGF5QW5pbWFsTnVtYmVycygpIHtcclxuXHRcdGNvbnN0IGRhdGFMaXN0ID0gYXdhaXQgZ2V0QW5pbWFsc0RhdGEoKTtcclxuXHRcdGNvbnN0IGFuaW1hbHNBcnJheSA9IGRhdGFMaXN0LmFuaW1hbHM7XHJcblxyXG5cdFx0bGV0IGRvZ3NBcnJheU51bWJlciA9IGFuaW1hbHNBcnJheVswXS5kb2dzLmxlbmd0aDtcclxuXHRcdGxldCBjYXRzQXJyYXlOdW1iZXIgPSBhbmltYWxzQXJyYXlbMF0uY2F0cy5sZW5ndGg7XHJcblxyXG5cdFx0ZG9nTnVtYmVyLmlubmVyVGV4dCA9IGRvZ3NBcnJheU51bWJlcjtcclxuXHRcdGNhdE51bWJlci5pbm5lclRleHQgPSBjYXRzQXJyYXlOdW1iZXI7XHJcblx0fVxyXG5cclxuXHRpZiAoKGRvZ051bWJlciwgY2F0TnVtYmVyKSkge1xyXG5cdFx0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0ZGlzcGxheUFuaW1hbE51bWJlcnMoKTtcclxuXHRcdH0pKCk7XHJcblx0fVxyXG5cclxuXHRhc3luYyBmdW5jdGlvbiBkaXNwbGF5QW5pbWFscygpIHtcclxuXHRcdGNvbnN0IGRhdGFMaXN0ID0gYXdhaXQgZ2V0QW5pbWFsc0RhdGEoKTtcclxuXHRcdGNvbnN0IGFuaW1hbHNBcnJheSA9IGRhdGFMaXN0LmFuaW1hbHM7XHJcblxyXG5cdFx0YW5pbWFsc0FycmF5LmZvckVhY2goKGFuaW1hbCkgPT4ge1xyXG5cdFx0XHRkb2dzQXJyYXkgPSBhbmltYWwuZG9ncztcclxuXHRcdFx0Y2F0c0FycmF5ID0gYW5pbWFsLmNhdHM7XHJcblxyXG5cdFx0XHRkb2dzQXJyYXkuZm9yRWFjaCgoZG9nKSA9PiB7XHJcblx0XHRcdFx0ZG9nQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRcdFx0ZG9nQm94LmNsYXNzTGlzdC5hZGQoJ3BhZ2VfX2JveCcpO1xyXG5cclxuXHRcdFx0XHRjb25zdCBkb2dZZWFycyA9IGRvZy5iaXJ0aDtcclxuXHJcblx0XHRcdFx0Y29uc3QgbWlsaXNlY3NCZXR3ZWVuRE9CYW5kMTk3MCA9IERhdGUucGFyc2UoZG9nWWVhcnMpO1xyXG5cdFx0XHRcdGNvbnN0IG1pbGlzZWNzQmV0d2Vlbk5PV2FuZDE5NzAgPSBEYXRlLm5vdygpO1xyXG5cdFx0XHRcdGNvbnN0IGFnZUluTWlsaXNlY3MgPVxyXG5cdFx0XHRcdFx0bWlsaXNlY3NCZXR3ZWVuTk9XYW5kMTk3MCAtIG1pbGlzZWNzQmV0d2VlbkRPQmFuZDE5NzA7XHJcblxyXG5cdFx0XHRcdGNvbnN0IG1pbGlzZWNzID0gYWdlSW5NaWxpc2VjcztcclxuXHRcdFx0XHRjb25zdCBzZWNzID0gMTAwMDtcclxuXHRcdFx0XHRjb25zdCBtaW5zID0gc2VjcyAqIDYwO1xyXG5cdFx0XHRcdGNvbnN0IGhvdXIgPSBtaW5zICogNjA7XHJcblx0XHRcdFx0Y29uc3QgZGF5ID0gaG91ciAqIDI0O1xyXG5cdFx0XHRcdGNvbnN0IHllYXIgPSBkYXkgKiAzNjU7XHJcblxyXG5cdFx0XHRcdGxldCB5ZWFycyA9IE1hdGgucm91bmQobWlsaXNlY3MgLyB5ZWFyKTtcclxuXHJcblx0XHRcdFx0ZG9nQm94LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2VfX2JveC10b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLiR7ZG9nLmltYWdlfVwiIGFsdD1cIiR7ZG9nLm5hbWV9ICR7XHJcblx0XHRcdFx0XHRkb2cuc3BlY2llc1xyXG5cdFx0XHRcdH1cIn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2VfX2JveC1ib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInBhZ2VfX2JveC10aXRsZVwiPiR7ZG9nLm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlX19ib3gtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleHBhbmRNb3JlQ29udGVudFwiIGlkPVwic2hvd01vcmUtJHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRvZy5zcGVjaWVzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSR7ZG9nLm51bWJlcn1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwYWdlX19ib3gtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtkb2cuZGVzY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV4cGFuZE1vcmVIb2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kLW1vcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaGlkZXRleHQ9XCIuLi5SZWFkIGxlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zaG93dGV4dD1cIi4uLlJlYWQgbW9yZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cInNob3dNb3JlLSR7ZG9nLnNwZWNpZXN9JHtcclxuXHRcdFx0XHRcdGRvZy5udW1iZXJcclxuXHRcdFx0XHR9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnV0dG9uIHNob3dNb3JlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uUmVhZCBtb3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInBhZ2VfX2JveC1pY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VfX2JveC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXdlaWdodFwiPjwvaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PHNwYW4gY2xhc3M9XCJwYWdlX19ib3gtaWNvbi0tdGV4dFwiPiR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZG9nLndlaWdodFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IGtnPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZV9fYm94LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtYXJyb3dzLWFsdC12XCI+PC9pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48c3BhbiBjbGFzcz1cInBhZ2VfX2JveC1pY29uLS10ZXh0XCI+JHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkb2cuaGVpZ2h0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1jbTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VfX2JveC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNhbGVuZGFyLWNoZWNrXCI+PC9pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48c3BhbiBjbGFzcz1cInBhZ2VfX2JveC1pY29uLS10ZXh0XCI+JHt5ZWFyc30geXIuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZV9fYm94LWljb25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJmYXMgZmEtcGFsZXR0ZVwiPjwvaVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+PHNwYW4gY2xhc3M9XCJwYWdlX19ib3gtaWNvbi0tdGV4dFwiPiR7ZG9nLmNvbG9yWzBdID8gZG9nLmNvbG9yWzBdIDogJy0nfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VfX2JveC1pY29uXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVwiZmFzIGZhLXBhbGV0dGVcIj48L2lcclxuXHRcdFx0XHRcdFx0XHRcdFx0PjxzcGFuIGNsYXNzPVwicGFnZV9fYm94LWljb24tLXRleHRcIj4ke2RvZy5jb2xvclsxXSA/IGRvZy5jb2xvclsxXSA6ICctJ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cImZhcyBmYS1wYWxldHRlXCI+PC9pXHJcblx0XHRcdFx0XHRcdFx0XHRcdD48c3BhbiBjbGFzcz1cInBhZ2VfX2JveC1pY29uLS10ZXh0XCI+JHtkb2cuY29sb3JbMl0gPyBkb2cuY29sb3JbMl0gOiAnLSd9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1wYXdcIj48L2lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxzcGFuIGNsYXNzPVwicGFnZV9fYm94LWljb24tLXRleHRcIj4ke1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRvZy5jb2F0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS12ZW51cy1tYXJzXCI+PC9pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48c3BhbiBjbGFzcz1cInBhZ2VfX2JveC1pY29uLS10ZXh0XCI+JHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkb2cuZ2VuZGVyXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgYDtcclxuXHJcblx0XHRcdFx0ZG9nc0JveC5hcHBlbmRDaGlsZChkb2dCb3gpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGNhdHNBcnJheS5mb3JFYWNoKChjYXQpID0+IHtcclxuXHRcdFx0XHRjYXRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdFx0XHRjYXRCb3guY2xhc3NMaXN0LmFkZCgncGFnZV9fYm94Jyk7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGNhdFllYXJzID0gY2F0LmJpcnRoO1xyXG5cclxuXHRcdFx0XHRjb25zdCBtaWxpc2Vjc0JldHdlZW5ET0JhbmQxOTcwY2F0ID0gRGF0ZS5wYXJzZShjYXRZZWFycyk7XHJcblx0XHRcdFx0Y29uc3QgbWlsaXNlY3NCZXR3ZWVuTk9XYW5kMTk3MCA9IERhdGUubm93KCk7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGFnZUluTWlsaXNlY3NDYXQgPVxyXG5cdFx0XHRcdFx0bWlsaXNlY3NCZXR3ZWVuTk9XYW5kMTk3MCAtIG1pbGlzZWNzQmV0d2VlbkRPQmFuZDE5NzBjYXQ7XHJcblxyXG5cdFx0XHRcdGNvbnN0IG1pbGlzZWNzQ2F0ID0gYWdlSW5NaWxpc2Vjc0NhdDtcclxuXHRcdFx0XHRjb25zdCBzZWNzID0gMTAwMDtcclxuXHRcdFx0XHRjb25zdCBtaW5zID0gc2VjcyAqIDYwO1xyXG5cdFx0XHRcdGNvbnN0IGhvdXIgPSBtaW5zICogNjA7XHJcblx0XHRcdFx0Y29uc3QgZGF5ID0gaG91ciAqIDI0O1xyXG5cdFx0XHRcdGNvbnN0IHllYXIgPSBkYXkgKiAzNjU7XHJcblxyXG5cdFx0XHRcdGxldCB5ZWFyc0NhdCA9IE1hdGgucm91bmQobWlsaXNlY3NDYXQgLyB5ZWFyKTtcclxuXHJcblx0XHRcdFx0Y2F0Qm94LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2VfX2JveC10b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLiR7Y2F0LmltYWdlfVwiIGFsdD1cIiR7Y2F0Lm5hbWV9ICR7XHJcblx0XHRcdFx0XHRjYXQuc3BlY2llc1xyXG5cdFx0XHRcdH1cIn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2VfX2JveC1ib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInBhZ2VfX2JveC10aXRsZVwiPiR7Y2F0Lm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlX19ib3gtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleHBhbmRNb3JlQ29udGVudFwiIGlkPVwic2hvd01vcmUtJHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNhdC5zcGVjaWVzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSR7Y2F0Lm51bWJlcn1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwYWdlX19ib3gtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtjYXQuZGVzY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV4cGFuZE1vcmVIb2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kLW1vcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaGlkZXRleHQ9XCIuLi5SZWFkIGxlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zaG93dGV4dD1cIi4uLlJlYWQgbW9yZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cInNob3dNb3JlLSR7Y2F0LnNwZWNpZXN9JHtcclxuXHRcdFx0XHRcdGNhdC5udW1iZXJcclxuXHRcdFx0XHR9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnV0dG9uIHNob3dNb3JlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uUmVhZCBtb3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInBhZ2VfX2JveC1pY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VfX2JveC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXdlaWdodFwiPjwvaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PHNwYW4gY2xhc3M9XCJwYWdlX19ib3gtaWNvbi0tdGV4dFwiPiR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2F0LndlaWdodFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IGtnPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZV9fYm94LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtYXJyb3dzLWFsdC12XCI+PC9pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48c3BhbiBjbGFzcz1cInBhZ2VfX2JveC1pY29uLS10ZXh0XCI+JHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjYXQuaGVpZ2h0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1jbTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VfX2JveC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNhbGVuZGFyLWNoZWNrXCI+PC9pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48c3BhbiBjbGFzcz1cInBhZ2VfX2JveC1pY29uLS10ZXh0XCI+JHt5ZWFyc0NhdH0geXIuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZV9fYm94LWljb25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJmYXMgZmEtcGFsZXR0ZVwiPjwvaVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+PHNwYW4gY2xhc3M9XCJwYWdlX19ib3gtaWNvbi0tdGV4dFwiPiR7Y2F0LmNvbG9yWzBdID8gY2F0LmNvbG9yWzBdIDogJy0nfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VfX2JveC1pY29uXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVwiZmFzIGZhLXBhbGV0dGVcIj48L2lcclxuXHRcdFx0XHRcdFx0XHRcdFx0PjxzcGFuIGNsYXNzPVwicGFnZV9fYm94LWljb24tLXRleHRcIj4ke2NhdC5jb2xvclsxXSA/IGNhdC5jb2xvclsxXSA6ICctJ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cImZhcyBmYS1wYWxldHRlXCI+PC9pXHJcblx0XHRcdFx0XHRcdFx0XHRcdD48c3BhbiBjbGFzcz1cInBhZ2VfX2JveC1pY29uLS10ZXh0XCI+JHtjYXQuY29sb3JbMl0gPyBjYXQuY29sb3JbMl0gOiAnLSd9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1wYXdcIj48L2lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxzcGFuIGNsYXNzPVwicGFnZV9fYm94LWljb24tLXRleHRcIj4ke1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNhdC5jb2F0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS12ZW51cy1tYXJzXCI+PC9pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48c3BhbiBjbGFzcz1cInBhZ2VfX2JveC1pY29uLS10ZXh0XCI+JHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjYXQuZ2VuZGVyXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgYDtcclxuXHJcblx0XHRcdFx0Y2F0c0JveC5hcHBlbmRDaGlsZChjYXRCb3gpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGxldCBkb2dCb3hBcnJheSA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjZG9ncy1ib3ggLnBhZ2VfX2JveCcpXTtcclxuXHRcdGxldCBjYXRCb3hBcnJheSA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY2F0cy1ib3ggLnBhZ2VfX2JveCcpXTtcclxuXHRcdGxldCBjdXJyZW50UGFnZSA9IDE7XHJcblx0XHRsZXQgZWxlbWVudHNPblBhZ2UgPSA2O1xyXG5cclxuXHRcdGNvbnN0IHBhZ2luYXRpb25FbERvZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG9ncy1wYWdpbmF0aW9uJyk7XHJcblx0XHRjb25zdCBwYWdpbmF0aW9uRWxDYXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdHMtcGFnaW5hdGlvbicpO1xyXG5cclxuXHRcdGZ1bmN0aW9uIGRpc3BsYXlQYWdpbmF0ZWRJdGVtcyhpdGVtcywgd3JhcHBlciwgaXRlbXNQZXJQYWdlLCBwYWdlKSB7XHJcblx0XHRcdHdyYXBwZXIuaW5uZXJIVE1MID0gJyc7XHJcblx0XHRcdHBhZ2UtLTtcclxuXHJcblx0XHRcdGxldCBzdGFydCA9IGl0ZW1zUGVyUGFnZSAqIHBhZ2U7XHJcblx0XHRcdGxldCBlbmQgPSBzdGFydCArIGl0ZW1zUGVyUGFnZTtcclxuXHRcdFx0bGV0IHBhZ2luYXRlZEl0ZW1zID0gaXRlbXMuc2xpY2Uoc3RhcnQsIGVuZCk7XHJcblxyXG5cdFx0XHRwYWdpbmF0ZWRJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcblx0XHRcdFx0bGV0IGl0ZW1FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0XHRcdGl0ZW1FbC5jbGFzc0xpc3QuYWRkKCdwYWdlX19ib3gnKTtcclxuXHJcblx0XHRcdFx0aXRlbUVsID0gaXRlbTtcclxuXHJcblx0XHRcdFx0d3JhcHBlci5hcHBlbmRDaGlsZChpdGVtRWwpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBkaXNwbGF5UGFnaW5hdGlvbihpdGVtcywgd3JhcHBlciwgaXRlbXNQZXJQYWdlKSB7XHJcblx0XHRcdHdyYXBwZXIuaW5uZXJIVE1MID0gJyc7XHJcblxyXG5cdFx0XHRsZXQgcGFnZUNvdW50ID0gTWF0aC5jZWlsKGl0ZW1zLmxlbmd0aCAvIGl0ZW1zUGVyUGFnZSk7XHJcblxyXG5cdFx0XHRmb3IgKGxldCBpID0gMTsgaSA8IHBhZ2VDb3VudCArIDE7IGkrKykge1xyXG5cdFx0XHRcdGxldCBidG4gPSBwYWdpbmF0aW9uQnV0dG9uKGkpO1xyXG5cclxuXHRcdFx0XHR3cmFwcGVyLmFwcGVuZENoaWxkKGJ0bik7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGxldCBuZXh0QnRuID0gbmV4dFBhZ2UoKTtcclxuXHRcdFx0d3JhcHBlci5hcHBlbmRDaGlsZChuZXh0QnRuKTtcclxuXHJcblx0XHRcdGxldCBwcmV2QnRuID0gcHJldlBhZ2UoKTtcclxuXHRcdFx0d3JhcHBlci5wcmVwZW5kKHByZXZCdG4pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIG5leHRQYWdlKHBhZ2UpIHtcclxuXHRcdFx0bGV0IG5leHRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHRcdFx0bmV4dEJ0bi5pZCA9ICduZXh0JztcclxuXHRcdFx0bmV4dEJ0bi5pbm5lclRleHQgPSAnPic7XHJcblx0XHRcdG5leHRCdG4uY2xhc3NMaXN0LmFkZCgncGFnaW5hdGlvbi1idG4nKTtcclxuXHJcblx0XHRcdG5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0XHRcdGlmIChuZXh0QnRuLnBhcmVudEVsZW1lbnQgPT0gcGFnaW5hdGlvbkVsRG9ncykge1xyXG5cdFx0XHRcdFx0ZGlzcGxheVBhZ2luYXRlZEl0ZW1zKFxyXG5cdFx0XHRcdFx0XHRkb2dCb3hBcnJheSxcclxuXHRcdFx0XHRcdFx0ZG9nc0JveCxcclxuXHRcdFx0XHRcdFx0ZWxlbWVudHNPblBhZ2UsXHJcblx0XHRcdFx0XHRcdGN1cnJlbnRQYWdlXHJcblx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdGxldCBhY3RpdmVCdG5Eb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHRcdFx0XHQnI2RvZ3MgLnBhZ2luYXRpb24tYnRuLmFjdGl2ZSdcclxuXHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0YWN0aXZlQnRuRG9nLm5leHRFbGVtZW50U2libGluZy5jbGljaygpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKG5leHRCdG4ucGFyZW50RWxlbWVudCA9PSBwYWdpbmF0aW9uRWxDYXRzKSB7XHJcblx0XHRcdFx0XHRkaXNwbGF5UGFnaW5hdGVkSXRlbXMoXHJcblx0XHRcdFx0XHRcdGNhdEJveEFycmF5LFxyXG5cdFx0XHRcdFx0XHRjYXRzQm94LFxyXG5cdFx0XHRcdFx0XHRlbGVtZW50c09uUGFnZSxcclxuXHRcdFx0XHRcdFx0Y3VycmVudFBhZ2VcclxuXHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0bGV0IGFjdGl2ZUJ0bkNhdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdFx0XHRcdCcjY2F0cyAucGFnaW5hdGlvbi1idG4uYWN0aXZlJ1xyXG5cdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHRhY3RpdmVCdG5DYXQubmV4dEVsZW1lbnRTaWJsaW5nLmNsaWNrKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiBuZXh0QnRuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHByZXZQYWdlKHBhZ2UpIHtcclxuXHRcdFx0bGV0IHByZXZCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHRcdFx0cHJldkJ0bi5pZCA9ICdwcmV2JztcclxuXHRcdFx0cHJldkJ0bi5pbm5lclRleHQgPSAnPCc7XHJcblx0XHRcdHByZXZCdG4uY2xhc3NMaXN0LmFkZCgncGFnaW5hdGlvbi1idG4nKTtcclxuXHJcblx0XHRcdHByZXZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0XHRcdGlmIChwcmV2QnRuLnBhcmVudEVsZW1lbnQgPT0gcGFnaW5hdGlvbkVsRG9ncykge1xyXG5cdFx0XHRcdFx0ZGlzcGxheVBhZ2luYXRlZEl0ZW1zKFxyXG5cdFx0XHRcdFx0XHRkb2dCb3hBcnJheSxcclxuXHRcdFx0XHRcdFx0ZG9nc0JveCxcclxuXHRcdFx0XHRcdFx0ZWxlbWVudHNPblBhZ2UsXHJcblx0XHRcdFx0XHRcdGN1cnJlbnRQYWdlXHJcblx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdGxldCBhY3RpdmVCdG5Eb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHRcdFx0XHQnI2RvZ3MgLnBhZ2luYXRpb24tYnRuLmFjdGl2ZSdcclxuXHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0YWN0aXZlQnRuRG9nLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xpY2soKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChwcmV2QnRuLnBhcmVudEVsZW1lbnQgPT0gcGFnaW5hdGlvbkVsQ2F0cykge1xyXG5cdFx0XHRcdFx0ZGlzcGxheVBhZ2luYXRlZEl0ZW1zKFxyXG5cdFx0XHRcdFx0XHRjYXRCb3hBcnJheSxcclxuXHRcdFx0XHRcdFx0Y2F0c0JveCxcclxuXHRcdFx0XHRcdFx0ZWxlbWVudHNPblBhZ2UsXHJcblx0XHRcdFx0XHRcdGN1cnJlbnRQYWdlXHJcblx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdGxldCBhY3RpdmVCdG5DYXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHRcdFx0XHQnI2NhdHMgLnBhZ2luYXRpb24tYnRuLmFjdGl2ZSdcclxuXHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0YWN0aXZlQnRuQ2F0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xpY2soKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0cmV0dXJuIHByZXZCdG47XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gcGFnaW5hdGlvbkJ1dHRvbihwYWdlKSB7XHJcblx0XHRcdGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHRcdFx0YnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3BhZ2luYXRpb24tYnRuJyk7XHJcblx0XHRcdGJ1dHRvbi5pbm5lclRleHQgPSBwYWdlO1xyXG5cclxuXHRcdFx0aWYgKGN1cnJlbnRQYWdlID09IHBhZ2UpIHtcclxuXHRcdFx0XHRidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0XHRcdFx0Y3VycmVudFBhZ2UgPSBwYWdlO1xyXG5cclxuXHRcdFx0XHRpZiAoYnV0dG9uLnBhcmVudEVsZW1lbnQgPT0gcGFnaW5hdGlvbkVsRG9ncykge1xyXG5cdFx0XHRcdFx0ZGlzcGxheVBhZ2luYXRlZEl0ZW1zKFxyXG5cdFx0XHRcdFx0XHRkb2dCb3hBcnJheSxcclxuXHRcdFx0XHRcdFx0ZG9nc0JveCxcclxuXHRcdFx0XHRcdFx0ZWxlbWVudHNPblBhZ2UsXHJcblx0XHRcdFx0XHRcdGN1cnJlbnRQYWdlXHJcblx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdGxldCBhY3RpdmVCdG5Eb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHRcdFx0XHQnI2RvZ3MgLnBhZ2luYXRpb24tYnRuLmFjdGl2ZSdcclxuXHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0YWN0aXZlQnRuRG9nLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cclxuXHRcdFx0XHRcdGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChidXR0b24ucGFyZW50RWxlbWVudCA9PSBwYWdpbmF0aW9uRWxDYXRzKSB7XHJcblx0XHRcdFx0XHRkaXNwbGF5UGFnaW5hdGVkSXRlbXMoXHJcblx0XHRcdFx0XHRcdGNhdEJveEFycmF5LFxyXG5cdFx0XHRcdFx0XHRjYXRzQm94LFxyXG5cdFx0XHRcdFx0XHRlbGVtZW50c09uUGFnZSxcclxuXHRcdFx0XHRcdFx0Y3VycmVudFBhZ2VcclxuXHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0bGV0IGFjdGl2ZUJ0bkNhdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdFx0XHRcdCcjY2F0cyAucGFnaW5hdGlvbi1idG4uYWN0aXZlJ1xyXG5cdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHRhY3RpdmVCdG5DYXQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRcdFx0YnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRyZXR1cm4gYnV0dG9uO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGV4cGFuZHNNb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2V4cGFuZC1tb3JlXScpO1xyXG5cclxuXHRcdGZ1bmN0aW9uIGV4cGFuZCgpIHtcclxuXHRcdFx0Y29uc3Qgc2hvd0NvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRhdGFzZXQudGFyZ2V0KTtcclxuXHRcdFx0aWYgKHNob3dDb250ZW50LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuXHRcdFx0XHR0aGlzLmlubmVySFRNTCA9IHRoaXMuZGF0YXNldC5zaG93dGV4dDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLmlubmVySFRNTCA9IHRoaXMuZGF0YXNldC5oaWRldGV4dDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c2hvd0NvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcblx0XHRcdGlmIChzaG93Q29udGVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcblx0XHRcdFx0c2hvd0NvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gc2hvd0NvbnRlbnQuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzaG93Q29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSAyMCArICdweCc7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoZG9nc0JveCkge1xyXG5cdFx0XHRkaXNwbGF5UGFnaW5hdGVkSXRlbXMoZG9nQm94QXJyYXksIGRvZ3NCb3gsIGVsZW1lbnRzT25QYWdlLCBjdXJyZW50UGFnZSk7XHJcblx0XHRcdGRpc3BsYXlQYWdpbmF0aW9uKGRvZ0JveEFycmF5LCBwYWdpbmF0aW9uRWxEb2dzLCBlbGVtZW50c09uUGFnZSk7XHJcblxyXG5cdFx0XHRleHBhbmRzTW9yZS5mb3JFYWNoKChidG4pID0+IHtcclxuXHRcdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBleHBhbmQpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoY2F0c0JveCkge1xyXG5cdFx0XHRkaXNwbGF5UGFnaW5hdGVkSXRlbXMoY2F0Qm94QXJyYXksIGNhdHNCb3gsIGVsZW1lbnRzT25QYWdlLCBjdXJyZW50UGFnZSk7XHJcblx0XHRcdGRpc3BsYXlQYWdpbmF0aW9uKGNhdEJveEFycmF5LCBwYWdpbmF0aW9uRWxDYXRzLCBlbGVtZW50c09uUGFnZSk7XHJcblxyXG5cdFx0XHRleHBhbmRzTW9yZS5mb3JFYWNoKChidG4pID0+IHtcclxuXHRcdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBleHBhbmQpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGlmIChhbmltYWxzUGFnZXMpIHtcclxuXHRcdChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGRpc3BsYXlBbmltYWxzKCk7XHJcblx0XHR9KSgpO1xyXG5cdH1cclxufSk7XHJcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcblx0Ly8gZm9ybSB2YWxpZGF0aW9uXHJcblx0Y29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0LWZvcm0nKTtcclxuXHRjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKTtcclxuXHRjb25zdCBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbCcpO1xyXG5cdGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzc2FnZScpO1xyXG5cdGNvbnN0IGZvcm1CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1idG4nKTtcclxuXHJcblx0aWYgKGZvcm0pIHtcclxuXHRcdFtcclxuXHRcdFx0J2NsaWNrJyxcclxuXHRcdFx0J29udG91Y2hzdGFydCcsXHJcblx0XHRcdCdtb3VzZW92ZXInLFxyXG5cdFx0XHQna2V5ZG93bicsXHJcblx0XHRcdCdrZXlwcmVzcycsXHJcblx0XHRcdCd0b3VjaHN0YXJ0JyxcclxuXHRcdFx0J3RvdWNobW92ZScsXHJcblx0XHRdLmZvckVhY2goXHJcblx0XHRcdChldmVudCkgPT5cclxuXHRcdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCAoKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoY2hlY2tJbnB1dHMoKSA9PT0gZmFsc2UpIHtcclxuXHRcdFx0XHRcdFx0Zm9ybUJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRmb3JtQnRuLmRpc2FibGVkID0gZmFsc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cclxuXHRcdGZ1bmN0aW9uIGNoZWNrSW5wdXRzKCkge1xyXG5cdFx0XHRjb25zdCBuYW1lVmFsdWUgPSBuYW1lLnZhbHVlLnRyaW0oKTtcclxuXHRcdFx0Y29uc3QgZW1haWxWYWx1ZSA9IGVtYWlsLnZhbHVlLnRyaW0oKTtcclxuXHRcdFx0Y29uc3QgbWVzc2FnZVZhbHVlID0gbWVzc2FnZS52YWx1ZS50cmltKCk7XHJcblxyXG5cdFx0XHRpZiAobmFtZVZhbHVlID09PSAnJykge1xyXG5cdFx0XHRcdHNldEVycm9yRm9yKG5hbWUsICdQbGVhc2UgZW50ZXIgeW91ciBmdWxsIG5hbWUnKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRTdWNjZXNzRm9yKG5hbWUpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoZW1haWxWYWx1ZSA9PT0gJycpIHtcclxuXHRcdFx0XHRzZXRFcnJvckZvcihlbWFpbCwgJ1BsZWFzZSBlbnRlciB5b3VyIGVtYWlsIGFkZHJlc3MnKTtcclxuXHRcdFx0fSBlbHNlIGlmICghZW1haWxJc1ZhbGlkKGVtYWlsVmFsdWUpKSB7XHJcblx0XHRcdFx0c2V0RXJyb3JGb3IoZW1haWwsICdFbWFpbCBpcyBub3QgdmFsaWQnKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRTdWNjZXNzRm9yKGVtYWlsKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKG1lc3NhZ2VWYWx1ZSA9PT0gJycpIHtcclxuXHRcdFx0XHRzZXRFcnJvckZvcihtZXNzYWdlLCAnUGxlYXNlIGVudGVyIHlvdXIgbWVzc2FnZScpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldFN1Y2Nlc3NGb3IobWVzc2FnZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChcclxuXHRcdFx0XHRuYW1lVmFsdWUgPT09ICcnIHx8XHJcblx0XHRcdFx0ZW1haWxWYWx1ZSA9PT0gJycgfHxcclxuXHRcdFx0XHRtZXNzYWdlVmFsdWUgPT09ICcnIHx8XHJcblx0XHRcdFx0IWVtYWlsSXNWYWxpZChlbWFpbFZhbHVlKVxyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBzZXRFcnJvckZvcihpbnB1dCwgbWVzc2FnZSkge1xyXG5cdFx0XHRjb25zdCBmb3JtID0gaW5wdXQucGFyZW50RWxlbWVudDtcclxuXHRcdFx0Y29uc3Qgc21hbGwgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ3NtYWxsJyk7XHJcblxyXG5cdFx0XHRzbWFsbC5pbm5lclRleHQgPSBtZXNzYWdlO1xyXG5cdFx0XHRmb3JtLmNsYXNzTmFtZSA9ICdmb3JtX19ncm91cCBlcnJvcic7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gc2V0U3VjY2Vzc0ZvcihpbnB1dCkge1xyXG5cdFx0XHRjb25zdCBmb3JtID0gaW5wdXQucGFyZW50RWxlbWVudDtcclxuXHRcdFx0Zm9ybS5jbGFzc05hbWUgPSAnZm9ybV9fZ3JvdXAgc3VjY2Vzcyc7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gZW1haWxJc1ZhbGlkKGVtYWlsKSB7XHJcblx0XHRcdGNvbnN0IHJlID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC8udGVzdChcclxuXHRcdFx0XHRlbWFpbFxyXG5cdFx0XHQpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHJlO1xyXG5cdFx0fVxyXG5cdH1cclxufSk7XHJcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKGUpID0+IHtcblx0XHRjb25zdCBwcmVsb2FkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWxvYWQnKTtcblxuXHRcdHByZWxvYWQuY2xhc3NMaXN0LmFkZCgncHJlbG9hZC1maW5pc2hlZCcpO1xuXHR9KTtcblxuXHRjb25zdCBidG5TY3JvbGxUb1RvcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5TY3JvbGxUb1RvcCcpO1xuXHRidG5TY3JvbGxUb1RvcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0d2luZG93LnNjcm9sbFRvKHtcblx0XHRcdHRvcDogMCxcblx0XHRcdGxlZnQ6IDAsXG5cdFx0XHRiZWhhdmlvcjogJ3Ntb290aCcsXG5cdFx0fSk7XG5cdH0pO1xufSk7XG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IG5hdkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYtY29udGFpbmVyJyk7XHJcblx0Y29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LWJ0bicpO1xyXG5cdGNvbnN0IG5hdkxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2LWxpc3QnKTtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIChlKSA9PiB7XHJcblx0XHRpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA+IDApIHtcclxuXHRcdFx0bmF2Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N0aWNreScpO1xyXG5cdFx0XHRidG5TY3JvbGxUb1RvcC5zdHlsZS5vcGFjaXR5ID0gMTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG5hdkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdzdGlja3knKTtcclxuXHRcdFx0YnRuU2Nyb2xsVG9Ub3Auc3R5bGUub3BhY2l0eSA9IDA7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0bWVudUJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdjbGlja2VkJyk7XHJcblx0XHRuYXZDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnb3ZlcmxheScpO1xyXG5cdFx0bmF2TGlzdC5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XHJcblx0fSk7XHJcbn0pO1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG5cdC8vIGNhcm91c2VsXHJcblx0Y29uc3QgY2Fyb3VzZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2Fyb3VzZWwnKTtcclxuXHRjb25zdCBwcmV2QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXYnKTtcclxuXHRjb25zdCBuZXh0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHQnKTtcclxuXHRjb25zdCBjYXJvdXNlbFVybCA9ICcuL2pzL2Nhcm91c2VsLmpzb24nO1xyXG5cclxuXHRsZXQgZmlyc3RTbGlkZTtcclxuXHRsZXQgbGFzdFNsaWRlO1xyXG5cclxuXHRmdW5jdGlvbiBnZXRTbGlkZXNEYXRhKCkge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0ZmV0Y2goY2Fyb3VzZWxVcmwpXHJcblx0XHRcdFx0LnRoZW4oKHJlc3ApID0+IHJlc3AuanNvbigpKVxyXG5cdFx0XHRcdC50aGVuKChkYXRhKSA9PiByZXNvbHZlKGRhdGEpKVxyXG5cdFx0XHRcdC5jYXRjaCgoZXJyKSA9PiByZWplY3QoZXJyKSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGZ1bmN0aW9uIGRpc3BsYXlDYXJvdXNlbCgpIHtcclxuXHRcdGNvbnN0IGRhdGFMaXN0ID0gYXdhaXQgZ2V0U2xpZGVzRGF0YSgpO1xyXG5cdFx0Y29uc3Qgc2xpZGVzQXJyYXkgPSBkYXRhTGlzdC5zbGlkZXM7XHJcblxyXG5cdFx0c2xpZGVzQXJyYXkuZm9yRWFjaCgoc2xpZGUsIHNsaWRlTnVtYmVyKSA9PiB7XHJcblx0XHRcdG5ld1NsaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRcdG5ld1NsaWRlLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsX19zbGlkZScpO1xyXG5cclxuXHRcdFx0bmV3U2xpZGUuaW5uZXJIVE1MID0gYFxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2Fyb3VzZWxfX2ltYWdlLWNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiJHtzbGlkZS5pbWFnZX1cIiBhbHQ9XCJzbGlkZS1pbWdcIiAvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcm91c2VsX19jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0PGgxIGNsYXNzPVwiY2Fyb3VzZWxfX3RpdGxlXCI+JHtzbGlkZS50aXRsZX08L2gxPlxyXG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzPVwiY2Fyb3VzZWxfX2Rlc2NcIj4ke3NsaWRlLmNvbnRlbnR9PC9wPlxyXG5cdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJoZWFkZXJfX25hdi1kb25hdGUtYnRuIGJ1dHRvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0RHVnbWUgemEgbmXFoXRvXHJcblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRgO1xyXG5cclxuXHRcdFx0Y2Fyb3VzZWwuYXBwZW5kQ2hpbGQobmV3U2xpZGUpO1xyXG5cclxuXHRcdFx0aWYgKHNsaWRlTnVtYmVyID09PSAwKSB7XHJcblx0XHRcdFx0Zmlyc3RTbGlkZSA9IG5ld1NsaWRlO1xyXG5cdFx0XHRcdG5ld1NsaWRlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHNsaWRlTnVtYmVyICsgMSA9PT0gZGF0YUxpc3Quc2xpZGVzLmxlbmd0aCkge1xyXG5cdFx0XHRcdGxhc3RTbGlkZSA9IG5ld1NsaWRlO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHRuZXh0U2xpZGUoKTtcclxuXHRcdHByZXZpb3VzU2xpZGUoKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG5leHRTbGlkZSgpIHtcclxuXHRcdGNvbnN0IG5leHRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dCcpO1xyXG5cclxuXHRcdG5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0XHRjb25zdCBhY3RpdmVTbGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fc2xpZGUuYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRsZXQgbmV4dFNpYmxpbmcgPSBhY3RpdmVTbGlkZS5uZXh0RWxlbWVudFNpYmxpbmc7XHJcblxyXG5cdFx0XHRpZiAobmV4dFNpYmxpbmcgPT0gbnVsbCkge1xyXG5cdFx0XHRcdG5leHRTaWJsaW5nID0gYWN0aXZlU2xpZGU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChuZXh0U2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ2Nhcm91c2VsX19zbGlkZScpKSB7XHJcblx0XHRcdFx0YWN0aXZlU2xpZGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0XHRcdFx0bmV4dFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gcHJldmlvdXNTbGlkZSgpIHtcclxuXHRcdGNvbnN0IHByZXZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldicpO1xyXG5cclxuXHRcdHByZXZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0XHRjb25zdCBhY3RpdmVTbGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fc2xpZGUuYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRsZXQgbmV4dFNpYmxpbmcgPSBhY3RpdmVTbGlkZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG5cclxuXHRcdFx0aWYgKG5leHRTaWJsaW5nID09IG51bGwpIHtcclxuXHRcdFx0XHRuZXh0U2libGluZyA9IGFjdGl2ZVNsaWRlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAobmV4dFNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJvdXNlbF9fc2xpZGUnKSkge1xyXG5cdFx0XHRcdGFjdGl2ZVNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdG5leHRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGlmIChjYXJvdXNlbCAhPT0gbnVsbCkge1xyXG5cdFx0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0ZGlzcGxheUNhcm91c2VsKCk7XHJcblx0XHR9KSgpO1xyXG5cdH1cclxufSk7XHJcbiIsIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG5cdC8vIHRhYnNcclxuXHRjb25zdCB0YWJMaXN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYmNjb3JkaW9uX19saXN0LWJ0bicpO1xyXG5cdGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiY2NvcmRpb25fX2NvbnRhaW5lcicpO1xyXG5cdGNvbnN0IHRhYmNjb3JkaW9uTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWJjY29yZGlvbi1saXN0Jyk7XHJcblx0Y29uc3QgdGFic0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiY2NvcmRpb25fX3RhYi1pbm5lcicpO1xyXG5cdGNvbnN0IHRhYmNjb3JkaW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYmNjb3JkaW9uJyk7XHJcblxyXG5cdGZ1bmN0aW9uIGFjdGl2YXRlVGFicygpIHtcclxuXHRcdHRhYkxpc3RCdG4uZm9yRWFjaCgodGFiKSA9PiB7XHJcblx0XHRcdHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgdGFiTmF2ID0gdGFiLnBhcmVudEVsZW1lbnQ7XHJcblx0XHRcdFx0Y29uc3QgdGFic0NvbnRhaW5lciA9IHRhYk5hdi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcblx0XHRcdFx0Y29uc3QgdGFiTnVtYmVyID0gdGFiLmRhdGFzZXQuZm9yVGFiO1xyXG5cdFx0XHRcdGNvbnN0IHRhYlRvQWN0aXZhdGUgPSB0YWJzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdFx0XHRgLnRhYmNjb3JkaW9uX190YWJbZGF0YS10YWI9XCIke3RhYk51bWJlcn1cIl1gXHJcblx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0dGFiTmF2LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJjY29yZGlvbl9fbGlzdC1idG4nKS5mb3JFYWNoKChidG4pID0+IHtcclxuXHRcdFx0XHRcdGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdHRhYnNDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLnRhYmNjb3JkaW9uX190YWInKS5mb3JFYWNoKCh0YWIpID0+IHtcclxuXHRcdFx0XHRcdHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdHRhYi5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XHJcblx0XHRcdFx0dGFiVG9BY3RpdmF0ZS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XHJcblxyXG5cdFx0XHRcdGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSA2MDApIHtcclxuXHRcdFx0XHRcdHRhYnNDb250ZW50LmZvckVhY2goKHRhYnMpID0+IHtcclxuXHRcdFx0XHRcdFx0dGFicy5zdHlsZS5tYXhIZWlnaHQgPSB0YWJzLnNjcm9sbEhlaWdodCArICdweCc7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0aWYgKHRhYmNjb3JkaW9uTGlzdCkge1xyXG5cdFx0XHR0YWJzLmZvckVhY2goKHRhYikgPT4ge1xyXG5cdFx0XHRcdHRhYi5xdWVyeVNlbGVjdG9yKCcudGFiY2NvcmRpb25fX2xpc3QgLnRhYmNjb3JkaW9uX19idG4nKS5jbGljaygpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKGUpID0+IHtcclxuXHRcdFx0aWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDYwMCkge1xyXG5cdFx0XHRcdGFjdGl2YXRlVGFicygpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdC8vLy8vIGFjY29yZGlvblxyXG5cdGNvbnN0IGFjY29yZGlvbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvcmRpb25fX2xpc3QtYnRuJyk7XHJcblxyXG5cdGZ1bmN0aW9uIGFjdGl2YXRlQWNjb3JkaW9uKCkge1xyXG5cdFx0YWNjb3JkaW9uQnRuLmZvckVhY2goKGJ0bikgPT4ge1xyXG5cdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdFx0Ly8gY2hlY2sgZm9yIG9wZW4gYWNjb3JkaW9uXHJcblx0XHRcdFx0Y29uc3QgYWNjb3JkaW9uQnRuT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdFx0XHQnLmFjY29yZGlvbl9fbGlzdC1idG4ub3BlbidcclxuXHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRpZiAoYWNjb3JkaW9uQnRuT3BlbiAmJiBhY2NvcmRpb25CdG5PcGVuICE9PSBidG4pIHtcclxuXHRcdFx0XHRcdC8vIGlmIHRoZXJlIGlzIG9wZW4gdGhlbiByZW1vdmUgb3BlbiBjbGFzcyBhbmQgc2V0IG1heGhlaWdodCB0byAwXHJcblx0XHRcdFx0XHRhY2NvcmRpb25CdG5PcGVuLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcclxuXHRcdFx0XHRcdGFjY29yZGlvbkJ0bk9wZW4ubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLm1heEhlaWdodCA9IDA7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBzZXQgb3BlbiBjbGFzcyB0byBldmVyeSBjbGlja2VkIGFjY29yZGlvbiBidG5cclxuXHRcdFx0XHRidG4uY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xyXG5cdFx0XHRcdGNvbnN0IGFjY29yZGlvbkJvZHkgPSBidG4ubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG5cclxuXHRcdFx0XHRpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpKSB7XHJcblx0XHRcdFx0XHRhY2NvcmRpb25Cb2R5LnN0eWxlLm1heEhlaWdodCA9IGFjY29yZGlvbkJvZHkuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0YWNjb3JkaW9uQm9keS5zdHlsZS5tYXhIZWlnaHQgPSAwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKGUpID0+IHtcclxuXHRcdFx0aWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNjAwKSB7XHJcblx0XHRcdFx0dGFic0NvbnRlbnQuZm9yRWFjaCgodGFicykgPT4ge1xyXG5cdFx0XHRcdFx0dGFicy5zdHlsZS5tYXhIZWlnaHQgPSAwO1xyXG5cdFx0XHRcdFx0aWYgKHRhYnMucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKSkge1xyXG5cdFx0XHRcdFx0XHR0YWJzLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGlmICh0YWJjY29yZGlvbikge1xyXG5cdFx0YWN0aXZhdGVUYWJzKCk7XHJcblx0XHRhY3RpdmF0ZUFjY29yZGlvbigpO1xyXG5cdH1cclxufSk7XHJcbiJdLCJwcmVFeGlzdGluZ0NvbW1lbnQiOiIvLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTh2ZDJWaWNHRmpheTlpYjI5MGMzUnlZWEFpTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDJwekwyRmtiM0IwUTI5dWRHVnVkRk4zYVhSamFHVnlMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5cWN5OW1aWFJqYUVGdWFXMWhiSE5FWVhSaExtcHpJaXdpZDJWaWNHRmphem92THk4dUwzTnlZeTlxY3k5bWIzSnRWbUZzYVdSaGFYUnZiaTVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl6Y21NdmFuTXZiV0ZwYmk1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5emNtTXZhbk12Ym1GMkxtcHpJaXdpZDJWaWNHRmphem92THk4dUwzTnlZeTlxY3k5emJHbGtaWEl1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwycHpMM1JoWW1OamIzSmthVzl1TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1VVRkJRVHRSUVVOQk96dFJRVVZCTzFGQlEwRTdPMUZCUlVFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN08xRkJSVUU3VVVGRFFUczdVVUZGUVR0UlFVTkJPenRSUVVWQk8xRkJRMEU3VVVGRFFUczdPMUZCUjBFN1VVRkRRVHM3VVVGRlFUdFJRVU5CT3p0UlFVVkJPMUZCUTBFN1VVRkRRVHRSUVVOQkxEQkRRVUV3UXl4blEwRkJaME03VVVGRE1VVTdVVUZEUVRzN1VVRkZRVHRSUVVOQk8xRkJRMEU3VVVGRFFTeDNSRUZCZDBRc2EwSkJRV3RDTzFGQlF6RkZPMUZCUTBFc2FVUkJRV2xFTEdOQlFXTTdVVUZETDBRN08xRkJSVUU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTEhsRFFVRjVReXhwUTBGQmFVTTdVVUZETVVVc1owaEJRV2RJTEcxQ1FVRnRRaXhGUVVGRk8xRkJRM0pKTzFGQlEwRTdPMUZCUlVFN1VVRkRRVHRSUVVOQk8xRkJRMEVzTWtKQlFUSkNMREJDUVVFd1FpeEZRVUZGTzFGQlEzWkVMR2xEUVVGcFF5eGxRVUZsTzFGQlEyaEVPMUZCUTBFN1VVRkRRVHM3VVVGRlFUdFJRVU5CTEhORVFVRnpSQ3dyUkVGQkswUTdPMUZCUlhKSU8xRkJRMEU3T3p0UlFVZEJPMUZCUTBFN096czdPenM3T3pzN096dEJRMnhHUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFc1IwRkJSenRCUVVOSUxFVkJRVVU3TzBGQlJVWTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRXNPRVJCUVRoRUxFOUJRVTg3UVVGRGNrVTdRVUZEUVN4blEwRkJaME1zVDBGQlR6dEJRVU4yUXp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFTkJRVU03T3pzN096czdPenM3T3p0QlEycERSRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0RzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3g1UTBGQmVVTXNWVUZCVlN4VFFVRlRMRk5CUVZNN1FVRkRja1U3UVVGRFFTeExRVUZMTEVWQlFVVTdRVUZEVUR0QlFVTkJPMEZCUTBFc01FUkJRVEJFTEZOQlFWTTdRVUZEYmtVN1FVRkRRVHRCUVVOQk8wRkJRMEVzYVVKQlFXbENMRVZCUVVVc1YwRkJWenRCUVVNNVFqdEJRVU5CTERCRFFVRXdRenRCUVVNeFF6dEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeG5SVUZCWjBVc1dVRkJXVHRCUVVNMVJUdEJRVU5CTEV0QlFVczdRVUZEVER0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHMUNRVUZ0UWp0QlFVTnVRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNiVUpCUVcxQ08wRkJRMjVDTzBGQlEwRTdRVUZEUVR0QlFVTkJMREJGUVVFd1JTeE5RVUZOTzBGQlEyaEdPMEZCUTBFN1FVRkRRVHRCUVVOQkxDdERRVUVyUXl4clEwRkJhME03UVVGRGFrWTdRVUZEUVR0QlFVTkJPMEZCUTBFc0swTkJRU3RETEd0RFFVRnJRenRCUVVOcVJqdEJRVU5CTzBGQlEwRTdRVUZEUVN3clEwRkJLME1zYTBOQlFXdERPMEZCUTJwR08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4dFFrRkJiVUk3UVVGRGJrSTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHMUNRVUZ0UWp0QlFVTnVRanRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMRWxCUVVrN08wRkJSVW83UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEhsRFFVRjVReXhWUVVGVkxGTkJRVk1zVTBGQlV6dEJRVU55UlR0QlFVTkJMRXRCUVVzc1JVRkJSVHRCUVVOUU8wRkJRMEU3UVVGRFFTd3dSRUZCTUVRc1UwRkJVenRCUVVOdVJUdEJRVU5CTzBGQlEwRTdRVUZEUVN4cFFrRkJhVUlzUlVGQlJTeFhRVUZYTzBGQlF6bENPMEZCUTBFc01FTkJRVEJETzBGQlF6RkRPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMR2RGUVVGblJTeFpRVUZaTzBGQlF6VkZPMEZCUTBFc1MwRkJTenRCUVVOTU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNiVUpCUVcxQ08wRkJRMjVDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3h0UWtGQmJVSTdRVUZEYmtJN1FVRkRRVHRCUVVOQk8wRkJRMEVzTUVWQlFUQkZMRk5CUVZNN1FVRkRia1k3UVVGRFFUdEJRVU5CTzBGQlEwRXNLME5CUVN0RExHdERRVUZyUXp0QlFVTnFSanRCUVVOQk8wRkJRMEU3UVVGRFFTd3JRMEZCSzBNc2EwTkJRV3RETzBGQlEycEdPMEZCUTBFN1FVRkRRVHRCUVVOQkxDdERRVUVyUXl4clEwRkJhME03UVVGRGFrWTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHMUNRVUZ0UWp0QlFVTnVRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNiVUpCUVcxQ08wRkJRMjVDTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzU1VGQlNUdEJRVU5LTEVkQlFVYzdPMEZCUlVnN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQkxFbEJRVWs3UVVGRFNqczdRVUZGUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTEd0Q1FVRnJRaXh0UWtGQmJVSTdRVUZEY2tNN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeEpRVUZKT3p0QlFVVktPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc1NVRkJTVHM3UVVGRlNqdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc1NVRkJTVHM3UVVGRlNqdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNTVUZCU1R0QlFVTktPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNTVUZCU1R0QlFVTktPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxFbEJRVWs3UVVGRFNqczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEVsQlFVazdRVUZEU2p0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0R0QlFVTkJMRU5CUVVNN096czdPenM3T3pzN096dEJReTlqUkR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVFVGQlRUdEJRVU5PTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzU1VGQlNUdEJRVU5LTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxFbEJRVWs3UVVGRFNqdEJRVU5CTEVsQlFVazdRVUZEU2p0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeEpRVUZKTzBGQlEwbzdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWxCUVVrN1FVRkRTanRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTEdsRFFVRnBReXg1UWtGQmVVSXNOa0pCUVRaQ0xFbEJRVWtzVVVGQlVTeEpRVUZKTEZGQlFWRXNTVUZCU1N4UlFVRlJMRWxCUVVrc1owTkJRV2RETEVkQlFVYzdRVUZEYkVzN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4RFFVRkRPenM3T3pzN096czdPenM3UVVOMlJrUTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzUlVGQlJUczdRVUZGUmp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZ3NSVUZCUlR0QlFVTkdMRU5CUVVNN096czdPenM3T3pzN096dEJRMlpFTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFN1FVRkRRVHRCUVVOQkxFVkJRVVU3TzBGQlJVWTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hGUVVGRk8wRkJRMFlzUTBGQlF6czdPenM3T3pzN096czdPMEZEY0VKRU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3h0UWtGQmJVSXNXVUZCV1R0QlFVTXZRanRCUVVOQk8wRkJRMEVzY1VOQlFYRkRMRmxCUVZrN1FVRkRha1FzYlVOQlFXMURMR05CUVdNN1FVRkRha1E3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SlFVRkpPMEZCUTBvN1FVRkRRVHRCUVVOQkxFZEJRVWM3TzBGQlJVZzdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFTeERRVUZET3pzN096czdPenM3T3pzN1FVTnFSMFE3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3h2UTBGQmIwTXNWVUZCVlR0QlFVTTVRenM3UVVGRlFUdEJRVU5CTzBGQlEwRXNTMEZCU3pzN1FVRkZURHRCUVVOQk8wRkJRMEVzUzBGQlN6czdRVUZGVER0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEUxQlFVMDdRVUZEVGp0QlFVTkJMRWxCUVVrN1FVRkRTaXhIUVVGSE96dEJRVVZJTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWxCUVVrN1FVRkRTanM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeExRVUZMTzBGQlEwdzdRVUZEUVR0QlFVTkJMRWxCUVVrN1FVRkRTaXhIUVVGSE96dEJRVVZJTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRXNSMEZCUnp0QlFVTklPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNRMEZCUXlJc0ltWnBiR1VpT2lKbE5HRm1PR0UzWmpWbFpUVXlOR0UwTW1VMU5TNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWlCY2RDOHZJRlJvWlNCdGIyUjFiR1VnWTJGamFHVmNiaUJjZEhaaGNpQnBibk4wWVd4c1pXUk5iMlIxYkdWeklEMGdlMzA3WEc1Y2JpQmNkQzh2SUZSb1pTQnlaWEYxYVhKbElHWjFibU4wYVc5dVhHNGdYSFJtZFc1amRHbHZiaUJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS0cxdlpIVnNaVWxrS1NCN1hHNWNiaUJjZEZ4MEx5OGdRMmhsWTJzZ2FXWWdiVzlrZFd4bElHbHpJR2x1SUdOaFkyaGxYRzRnWEhSY2RHbG1LR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRLU0I3WEc0Z1hIUmNkRngwY21WMGRYSnVJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRMbVY0Y0c5eWRITTdYRzRnWEhSY2RIMWNiaUJjZEZ4MEx5OGdRM0psWVhSbElHRWdibVYzSUcxdlpIVnNaU0FvWVc1a0lIQjFkQ0JwZENCcGJuUnZJSFJvWlNCallXTm9aU2xjYmlCY2RGeDBkbUZ5SUcxdlpIVnNaU0E5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE5iYlc5a2RXeGxTV1JkSUQwZ2UxeHVJRngwWEhSY2RHazZJRzF2WkhWc1pVbGtMRnh1SUZ4MFhIUmNkR3c2SUdaaGJITmxMRnh1SUZ4MFhIUmNkR1Y0Y0c5eWRITTZJSHQ5WEc0Z1hIUmNkSDA3WEc1Y2JpQmNkRngwTHk4Z1JYaGxZM1YwWlNCMGFHVWdiVzlrZFd4bElHWjFibU4wYVc5dVhHNGdYSFJjZEcxdlpIVnNaWE5iYlc5a2RXeGxTV1JkTG1OaGJHd29iVzlrZFd4bExtVjRjRzl5ZEhNc0lHMXZaSFZzWlN3Z2JXOWtkV3hsTG1WNGNHOXlkSE1zSUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4cE8xeHVYRzRnWEhSY2RDOHZJRVpzWVdjZ2RHaGxJRzF2WkhWc1pTQmhjeUJzYjJGa1pXUmNiaUJjZEZ4MGJXOWtkV3hsTG13Z1BTQjBjblZsTzF4dVhHNGdYSFJjZEM4dklGSmxkSFZ5YmlCMGFHVWdaWGh3YjNKMGN5QnZaaUIwYUdVZ2JXOWtkV3hsWEc0Z1hIUmNkSEpsZEhWeWJpQnRiMlIxYkdVdVpYaHdiM0owY3p0Y2JpQmNkSDFjYmx4dVhHNGdYSFF2THlCbGVIQnZjMlVnZEdobElHMXZaSFZzWlhNZ2IySnFaV04wSUNoZlgzZGxZbkJoWTJ0ZmJXOWtkV3hsYzE5ZktWeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dElEMGdiVzlrZFd4bGN6dGNibHh1SUZ4MEx5OGdaWGh3YjNObElIUm9aU0J0YjJSMWJHVWdZMkZqYUdWY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WXlBOUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhNN1hHNWNiaUJjZEM4dklHUmxabWx1WlNCblpYUjBaWElnWm5WdVkzUnBiMjRnWm05eUlHaGhjbTF2Ym5rZ1pYaHdiM0owYzF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVrSUQwZ1puVnVZM1JwYjI0b1pYaHdiM0owY3l3Z2JtRnRaU3dnWjJWMGRHVnlLU0I3WEc0Z1hIUmNkR2xtS0NGZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtOG9aWGh3YjNKMGN5d2dibUZ0WlNrcElIdGNiaUJjZEZ4MFhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvWlhod2IzSjBjeXdnYm1GdFpTd2dleUJsYm5WdFpYSmhZbXhsT2lCMGNuVmxMQ0JuWlhRNklHZGxkSFJsY2lCOUtUdGNiaUJjZEZ4MGZWeHVJRngwZlR0Y2JseHVJRngwTHk4Z1pHVm1hVzVsSUY5ZlpYTk5iMlIxYkdVZ2IyNGdaWGh3YjNKMGMxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1eUlEMGdablZ1WTNScGIyNG9aWGh3YjNKMGN5a2dlMXh1SUZ4MFhIUnBaaWgwZVhCbGIyWWdVM2x0WW05c0lDRTlQU0FuZFc1a1pXWnBibVZrSnlBbUppQlRlVzFpYjJ3dWRHOVRkSEpwYm1kVVlXY3BJSHRjYmlCY2RGeDBYSFJQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb1pYaHdiM0owY3l3Z1UzbHRZbTlzTG5SdlUzUnlhVzVuVkdGbkxDQjdJSFpoYkhWbE9pQW5UVzlrZFd4bEp5QjlLVHRjYmlCY2RGeDBmVnh1SUZ4MFhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvWlhod2IzSjBjeXdnSjE5ZlpYTk5iMlIxYkdVbkxDQjdJSFpoYkhWbE9pQjBjblZsSUgwcE8xeHVJRngwZlR0Y2JseHVJRngwTHk4Z1kzSmxZWFJsSUdFZ1ptRnJaU0J1WVcxbGMzQmhZMlVnYjJKcVpXTjBYRzRnWEhRdkx5QnRiMlJsSUNZZ01Ub2dkbUZzZFdVZ2FYTWdZU0J0YjJSMWJHVWdhV1FzSUhKbGNYVnBjbVVnYVhSY2JpQmNkQzh2SUcxdlpHVWdKaUF5T2lCdFpYSm5aU0JoYkd3Z2NISnZjR1Z5ZEdsbGN5QnZaaUIyWVd4MVpTQnBiblJ2SUhSb1pTQnVjMXh1SUZ4MEx5OGdiVzlrWlNBbUlEUTZJSEpsZEhWeWJpQjJZV3gxWlNCM2FHVnVJR0ZzY21WaFpIa2dibk1nYjJKcVpXTjBYRzRnWEhRdkx5QnRiMlJsSUNZZ09Id3hPaUJpWldoaGRtVWdiR2xyWlNCeVpYRjFhWEpsWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMblFnUFNCbWRXNWpkR2x2YmloMllXeDFaU3dnYlc5a1pTa2dlMXh1SUZ4MFhIUnBaaWh0YjJSbElDWWdNU2tnZG1Gc2RXVWdQU0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS0haaGJIVmxLVHRjYmlCY2RGeDBhV1lvYlc5a1pTQW1JRGdwSUhKbGRIVnliaUIyWVd4MVpUdGNiaUJjZEZ4MGFXWW9LRzF2WkdVZ0ppQTBLU0FtSmlCMGVYQmxiMllnZG1Gc2RXVWdQVDA5SUNkdlltcGxZM1FuSUNZbUlIWmhiSFZsSUNZbUlIWmhiSFZsTGw5ZlpYTk5iMlIxYkdVcElISmxkSFZ5YmlCMllXeDFaVHRjYmlCY2RGeDBkbUZ5SUc1eklEMGdUMkpxWldOMExtTnlaV0YwWlNodWRXeHNLVHRjYmlCY2RGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV5S0c1ektUdGNiaUJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLRzV6TENBblpHVm1ZWFZzZENjc0lIc2daVzUxYldWeVlXSnNaVG9nZEhKMVpTd2dkbUZzZFdVNklIWmhiSFZsSUgwcE8xeHVJRngwWEhScFppaHRiMlJsSUNZZ01pQW1KaUIwZVhCbGIyWWdkbUZzZFdVZ0lUMGdKM04wY21sdVp5Y3BJR1p2Y2loMllYSWdhMlY1SUdsdUlIWmhiSFZsS1NCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtUW9ibk1zSUd0bGVTd2dablZ1WTNScGIyNG9hMlY1S1NCN0lISmxkSFZ5YmlCMllXeDFaVnRyWlhsZE95QjlMbUpwYm1Rb2JuVnNiQ3dnYTJWNUtTazdYRzRnWEhSY2RISmxkSFZ5YmlCdWN6dGNiaUJjZEgwN1hHNWNiaUJjZEM4dklHZGxkRVJsWm1GMWJIUkZlSEJ2Y25RZ1puVnVZM1JwYjI0Z1ptOXlJR052YlhCaGRHbGlhV3hwZEhrZ2QybDBhQ0J1YjI0dGFHRnliVzl1ZVNCdGIyUjFiR1Z6WEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbTRnUFNCbWRXNWpkR2x2YmlodGIyUjFiR1VwSUh0Y2JpQmNkRngwZG1GeUlHZGxkSFJsY2lBOUlHMXZaSFZzWlNBbUppQnRiMlIxYkdVdVgxOWxjMDF2WkhWc1pTQS9YRzRnWEhSY2RGeDBablZ1WTNScGIyNGdaMlYwUkdWbVlYVnNkQ2dwSUhzZ2NtVjBkWEp1SUcxdlpIVnNaVnNuWkdWbVlYVnNkQ2RkT3lCOUlEcGNiaUJjZEZ4MFhIUm1kVzVqZEdsdmJpQm5aWFJOYjJSMWJHVkZlSEJ2Y25SektDa2dleUJ5WlhSMWNtNGdiVzlrZFd4bE95QjlPMXh1SUZ4MFhIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbVFvWjJWMGRHVnlMQ0FuWVNjc0lHZGxkSFJsY2lrN1hHNGdYSFJjZEhKbGRIVnliaUJuWlhSMFpYSTdYRzRnWEhSOU8xeHVYRzRnWEhRdkx5QlBZbXBsWTNRdWNISnZkRzkwZVhCbExtaGhjMDkzYmxCeWIzQmxjblI1TG1OaGJHeGNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJ5QTlJR1oxYm1OMGFXOXVLRzlpYW1WamRDd2djSEp2Y0dWeWRIa3BJSHNnY21WMGRYSnVJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrdVkyRnNiQ2h2WW1wbFkzUXNJSEJ5YjNCbGNuUjVLVHNnZlR0Y2JseHVJRngwTHk4Z1gxOTNaV0p3WVdOclgzQjFZbXhwWTE5d1lYUm9YMTljYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjQ0E5SUZ3aVhDSTdYRzVjYmx4dUlGeDBMeThnVEc5aFpDQmxiblJ5ZVNCdGIyUjFiR1VnWVc1a0lISmxkSFZ5YmlCbGVIQnZjblJ6WEc0Z1hIUnlaWFIxY200Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aGZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbk1nUFNBd0tUdGNiaUlzSW1SdlkzVnRaVzUwTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjBSUFRVTnZiblJsYm5STWIyRmtaV1FuTENCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmx4MGFHbHpkRzl5ZVM1eVpYQnNZV05sVTNSaGRHVW9iblZzYkN3Z2JuVnNiQ3dnSnlBbktUdGNjbHh1WEhSamIyNXpkQ0IwWVdKVGQybDBZMmhsY25NZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5UVd4c0tDZGJaR0YwWVMxemQybDBZMmhsY2wwbktUdGNjbHh1WEhKY2JseDBkR0ZpVTNkcGRHTm9aWEp6TG1admNrVmhZMmdvS0hSaFlsTjNhWFJqYUNrZ1BUNGdlMXh5WEc1Y2RGeDBZMjl1YzNRZ2RHRmlVM2RwZEdOb1pYSWdQU0IwWVdKVGQybDBZMmc3WEhKY2JseDBYSFJqYjI1emRDQndZV2RsU1dRZ1BTQjBZV0pUZDJsMFkyaGxjaTVrWVhSaGMyVjBMblJoWWp0Y2NseHVYSEpjYmx4MFhIUjBZV0pUZDJsMFkyaGxjaTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RqYkdsamF5Y3NJQ2hsS1NBOVBpQjdYSEpjYmx4MFhIUmNkR1J2WTNWdFpXNTBYSEpjYmx4MFhIUmNkRngwTG5GMVpYSjVVMlZzWldOMGIzSW9KeTVoWkc5d2RGOWZiR2x6ZEMxcGRHVnRMbUZqZEdsMlpTY3BYSEpjYmx4MFhIUmNkRngwTG1Oc1lYTnpUR2x6ZEM1eVpXMXZkbVVvSjJGamRHbDJaU2NwTzF4eVhHNWNjbHh1WEhSY2RGeDBkR0ZpVTNkcGRHTm9aWEl1Y0dGeVpXNTBSV3hsYldWdWRDNXdZWEpsYm5SRmJHVnRaVzUwTG1Oc1lYTnpUR2x6ZEM1aFpHUW9KMkZqZEdsMlpTY3BPMXh5WEc1Y2NseHVYSFJjZEZ4MGMzZHBkR05vVUdGblpTaHdZV2RsU1dRcE8xeHlYRzVjZEZ4MGZTazdYSEpjYmx4MGZTazdYSEpjYmx4eVhHNWNkR1oxYm1OMGFXOXVJSE4zYVhSamFGQmhaMlVvY0dGblpVbGtLU0I3WEhKY2JseDBYSFJqYjI1emRDQmpkWEp5Wlc1MFVHRm5aU0E5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9KeTV3WVdkbExtRmpkR2wyWlNjcE8xeHlYRzVjZEZ4MFkyOXVjM1FnWTNWeWNtVnVkRkJoWjJWSVpXRmtaWElnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2N1Y0dGblpTMW9aV0ZrWlhJdVlXTjBhWFpsSnlrN1hISmNibHh5WEc1Y2RGeDBZM1Z5Y21WdWRGQmhaMlV1WTJ4aGMzTk1hWE4wTG5KbGJXOTJaU2duWVdOMGFYWmxKeWs3WEhKY2JseDBYSFJqZFhKeVpXNTBVR0ZuWlVobFlXUmxjaTVqYkdGemMweHBjM1F1Y21WdGIzWmxLQ2RoWTNScGRtVW5LVHRjY2x4dVhISmNibHgwWEhSamIyNXpkQ0J1WlhoMFVHRm5aU0E5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9ZQzV3WVdkbFcyUmhkR0V0Y0dGblpUMWNJaVI3Y0dGblpVbGtmVndpWFdBcE8xeHlYRzVjZEZ4MFkyOXVjM1FnYm1WNGRGQmhaMlZJWldGa1pYSWdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtGeHlYRzVjZEZ4MFhIUmdMbkJoWjJVdGFHVmhaR1Z5VzJSaGRHRXRhR1ZoWkdWeVBWd2lKSHR3WVdkbFNXUjlYQ0pkWUZ4eVhHNWNkRngwS1R0Y2NseHVYSFJjZEc1bGVIUlFZV2RsTG1Oc1lYTnpUR2x6ZEM1aFpHUW9KMkZqZEdsMlpTY3BPMXh5WEc1Y2RGeDBibVY0ZEZCaFoyVklaV0ZrWlhJdVkyeGhjM05NYVhOMExtRmtaQ2duWVdOMGFYWmxKeWs3WEhKY2JseDBmVnh5WEc1OUtUdGNjbHh1SWl3aVpHOWpkVzFsYm5RdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblJFOU5RMjl1ZEdWdWRFeHZZV1JsWkNjc0lHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhIUmpiMjV6ZENCaGJtbHRZV3h6VlhKc0lEMGdKeTR1TDJwekwyRnVhVzFoYkhNdWFuTnZiaWM3WEhKY2JseDBZMjl1YzNRZ1lXNXBiV0ZzYzFCaFoyVnpJRDBnWkc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEVKNVNXUW9KMkZ1YVcxaGJITXRjR0ZuWlhNbktUdGNjbHh1WEhSamIyNXpkQ0JrYjJkelFtOTRJRDBnWkc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEVKNVNXUW9KMlJ2WjNNdFltOTRKeWs3WEhKY2JseDBZMjl1YzNRZ1kyRjBjMEp2ZUNBOUlHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0NkallYUnpMV0p2ZUNjcE8xeHlYRzVjY2x4dVhIUm1kVzVqZEdsdmJpQm5aWFJCYm1sdFlXeHpSR0YwWVNncElIdGNjbHh1WEhSY2RISmxkSFZ5YmlCdVpYY2dVSEp2YldselpTZ29jbVZ6YjJ4MlpTd2djbVZxWldOMEtTQTlQaUI3WEhKY2JseDBYSFJjZEdabGRHTm9LR0Z1YVcxaGJITlZjbXdwWEhKY2JseDBYSFJjZEZ4MExuUm9aVzRvS0hKbGMzQXBJRDArSUhKbGMzQXVhbk52YmlncEtWeHlYRzVjZEZ4MFhIUmNkQzUwYUdWdUtDaGtZWFJoS1NBOVBpQnlaWE52YkhabEtHUmhkR0VwS1Z4eVhHNWNkRngwWEhSY2RDNWpZWFJqYUNnb1pYSnlLU0E5UGlCeVpXcGxZM1FvWlhKeUtTazdYSEpjYmx4MFhIUjlLVHRjY2x4dVhIUjlYSEpjYmx4eVhHNWNkR052Ym5OMElHUnZaMDUxYldKbGNpQTlJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJDZVVsa0tDZGtiMmRPZFcxaVpYSW5LVHRjY2x4dVhIUmpiMjV6ZENCallYUk9kVzFpWlhJZ1BTQmtiMk4xYldWdWRDNW5aWFJGYkdWdFpXNTBRbmxKWkNnblkyRjBUblZ0WW1WeUp5azdYSEpjYmx4eVhHNWNkR0Z6ZVc1aklHWjFibU4wYVc5dUlHUnBjM0JzWVhsQmJtbHRZV3hPZFcxaVpYSnpLQ2tnZTF4eVhHNWNkRngwWTI5dWMzUWdaR0YwWVV4cGMzUWdQU0JoZDJGcGRDQm5aWFJCYm1sdFlXeHpSR0YwWVNncE8xeHlYRzVjZEZ4MFkyOXVjM1FnWVc1cGJXRnNjMEZ5Y21GNUlEMGdaR0YwWVV4cGMzUXVZVzVwYldGc2N6dGNjbHh1WEhKY2JseDBYSFJzWlhRZ1pHOW5jMEZ5Y21GNVRuVnRZbVZ5SUQwZ1lXNXBiV0ZzYzBGeWNtRjVXekJkTG1SdlozTXViR1Z1WjNSb08xeHlYRzVjZEZ4MGJHVjBJR05oZEhOQmNuSmhlVTUxYldKbGNpQTlJR0Z1YVcxaGJITkJjbkpoZVZzd1hTNWpZWFJ6TG14bGJtZDBhRHRjY2x4dVhISmNibHgwWEhSa2IyZE9kVzFpWlhJdWFXNXVaWEpVWlhoMElEMGdaRzluYzBGeWNtRjVUblZ0WW1WeU8xeHlYRzVjZEZ4MFkyRjBUblZ0WW1WeUxtbHVibVZ5VkdWNGRDQTlJR05oZEhOQmNuSmhlVTUxYldKbGNqdGNjbHh1WEhSOVhISmNibHh5WEc1Y2RHbG1JQ2dvWkc5blRuVnRZbVZ5TENCallYUk9kVzFpWlhJcEtTQjdYSEpjYmx4MFhIUW9ablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNkRngwWEhSa2FYTndiR0Y1UVc1cGJXRnNUblZ0WW1WeWN5Z3BPMXh5WEc1Y2RGeDBmU2tvS1R0Y2NseHVYSFI5WEhKY2JseHlYRzVjZEdGemVXNWpJR1oxYm1OMGFXOXVJR1JwYzNCc1lYbEJibWx0WVd4ektDa2dlMXh5WEc1Y2RGeDBZMjl1YzNRZ1pHRjBZVXhwYzNRZ1BTQmhkMkZwZENCblpYUkJibWx0WVd4elJHRjBZU2dwTzF4eVhHNWNkRngwWTI5dWMzUWdZVzVwYldGc2MwRnljbUY1SUQwZ1pHRjBZVXhwYzNRdVlXNXBiV0ZzY3p0Y2NseHVYSEpjYmx4MFhIUmhibWx0WVd4elFYSnlZWGt1Wm05eVJXRmphQ2dvWVc1cGJXRnNLU0E5UGlCN1hISmNibHgwWEhSY2RHUnZaM05CY25KaGVTQTlJR0Z1YVcxaGJDNWtiMmR6TzF4eVhHNWNkRngwWEhSallYUnpRWEp5WVhrZ1BTQmhibWx0WVd3dVkyRjBjenRjY2x4dVhISmNibHgwWEhSY2RHUnZaM05CY25KaGVTNW1iM0pGWVdOb0tDaGtiMmNwSUQwK0lIdGNjbHh1WEhSY2RGeDBYSFJrYjJkQ2IzZ2dQU0JrYjJOMWJXVnVkQzVqY21WaGRHVkZiR1Z0Wlc1MEtDZGthWFluS1R0Y2NseHVYSFJjZEZ4MFhIUmtiMmRDYjNndVkyeGhjM05NYVhOMExtRmtaQ2duY0dGblpWOWZZbTk0SnlrN1hISmNibHh5WEc1Y2RGeDBYSFJjZEdOdmJuTjBJR1J2WjFsbFlYSnpJRDBnWkc5bkxtSnBjblJvTzF4eVhHNWNjbHh1WEhSY2RGeDBYSFJqYjI1emRDQnRhV3hwYzJWamMwSmxkSGRsWlc1RVQwSmhibVF4T1Rjd0lEMGdSR0YwWlM1d1lYSnpaU2hrYjJkWlpXRnljeWs3WEhKY2JseDBYSFJjZEZ4MFkyOXVjM1FnYldsc2FYTmxZM05DWlhSM1pXVnVUazlYWVc1a01UazNNQ0E5SUVSaGRHVXVibTkzS0NrN1hISmNibHgwWEhSY2RGeDBZMjl1YzNRZ1lXZGxTVzVOYVd4cGMyVmpjeUE5WEhKY2JseDBYSFJjZEZ4MFhIUnRhV3hwYzJWamMwSmxkSGRsWlc1T1QxZGhibVF4T1Rjd0lDMGdiV2xzYVhObFkzTkNaWFIzWldWdVJFOUNZVzVrTVRrM01EdGNjbHh1WEhKY2JseDBYSFJjZEZ4MFkyOXVjM1FnYldsc2FYTmxZM01nUFNCaFoyVkpiazFwYkdselpXTnpPMXh5WEc1Y2RGeDBYSFJjZEdOdmJuTjBJSE5sWTNNZ1BTQXhNREF3TzF4eVhHNWNkRngwWEhSY2RHTnZibk4wSUcxcGJuTWdQU0J6WldOeklDb2dOakE3WEhKY2JseDBYSFJjZEZ4MFkyOXVjM1FnYUc5MWNpQTlJRzFwYm5NZ0tpQTJNRHRjY2x4dVhIUmNkRngwWEhSamIyNXpkQ0JrWVhrZ1BTQm9iM1Z5SUNvZ01qUTdYSEpjYmx4MFhIUmNkRngwWTI5dWMzUWdlV1ZoY2lBOUlHUmhlU0FxSURNMk5UdGNjbHh1WEhKY2JseDBYSFJjZEZ4MGJHVjBJSGxsWVhKeklEMGdUV0YwYUM1eWIzVnVaQ2h0YVd4cGMyVmpjeUF2SUhsbFlYSXBPMXh5WEc1Y2NseHVYSFJjZEZ4MFhIUmtiMmRDYjNndWFXNXVaWEpJVkUxTUlEMGdZRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4WkdsMklHTnNZWE56UFZ3aWNHRm5aVjlmWW05NExYUnZjRndpUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR2x0WnlCemNtTTlYQ0l1Skh0a2IyY3VhVzFoWjJWOVhDSWdZV3gwUFZ3aUpIdGtiMmN1Ym1GdFpYMGdKSHRjY2x4dVhIUmNkRngwWEhSY2RHUnZaeTV6Y0dWamFXVnpYSEpjYmx4MFhIUmNkRngwZlZ3aWZTOCtYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2WkdsMlBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThaR2wySUdOc1lYTnpQVndpY0dGblpWOWZZbTk0TFdKdmRIUnZiVndpUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR2d6SUdOc1lYTnpQVndpY0dGblpWOWZZbTk0TFhScGRHeGxYQ0krSkh0a2IyY3VibUZ0WlgwOEwyZ3pQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHUnBkaUJqYkdGemN6MWNJbkJoWjJWZlgySnZlQzFqYjI1MFpXNTBYQ0krWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdScGRpQmpiR0Z6Y3oxY0ltVjRjR0Z1WkUxdmNtVkRiMjUwWlc1MFhDSWdhV1E5WENKemFHOTNUVzl5WlMwa2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBaRzluTG5Od1pXTnBaWE5jY2x4dVhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFI5Skh0a2IyY3ViblZ0WW1WeWZWd2lQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGNDQmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMTBaWGgwWENJK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBa2UyUnZaeTVrWlhOamZWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4TDNBK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOWthWFkrWEhKY2JpQWdJQ0JjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4WkdsMklHTnNZWE56UFZ3aVpYaHdZVzVrVFc5eVpVaHZiR1JsY2x3aVBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4WW5WMGRHOXVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmxlSEJoYm1RdGJXOXlaVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdaR0YwWVMxb2FXUmxkR1Y0ZEQxY0lpNHVMbEpsWVdRZ2JHVnpjMXdpWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JrWVhSaExYTm9iM2QwWlhoMFBWd2lMaTR1VW1WaFpDQnRiM0psWENKY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdSaGRHRXRkR0Z5WjJWMFBWd2ljMmh2ZDAxdmNtVXRKSHRrYjJjdWMzQmxZMmxsYzMwa2UxeHlYRzVjZEZ4MFhIUmNkRngwWkc5bkxtNTFiV0psY2x4eVhHNWNkRngwWEhSY2RIMWNJbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMnhoYzNNOVhDSmlkWFIwYjI0Z2MyaHZkMDF2Y21WY0lseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0ErWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F1TGk1U1pXRmtJRzF2Y21WY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzlpZFhSMGIyNCtYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzlrYVhZK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4TDJScGRqNWNjbHh1SUNBZ0lGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhWc0lHTnNZWE56UFZ3aWNHRm5aVjlmWW05NExXbGpiMjV6WENJK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHeHBJR05zWVhOelBWd2ljR0ZuWlY5ZlltOTRMV2xqYjI1Y0lqNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdrZ1kyeGhjM005WENKbVlYTWdabUV0ZDJWcFoyaDBYQ0krUEM5cFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRDQ4YzNCaGJpQmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMXBZMjl1TFMxMFpYaDBYQ0krSkh0Y2NseHVYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJrYjJjdWQyVnBaMmgwWEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RIMGdhMmM4TDNOd1lXNCtYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzlzYVQ1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGJHa2dZMnhoYzNNOVhDSndZV2RsWDE5aWIzZ3RhV052Ymx3aVBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YVNCamJHRnpjejFjSW1aaGN5Qm1ZUzFoY25KdmQzTXRZV3gwTFhaY0lqNDhMMmxjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BqeHpjR0Z1SUdOc1lYTnpQVndpY0dGblpWOWZZbTk0TFdsamIyNHRMWFJsZUhSY0lqNGtlMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RHUnZaeTVvWldsbmFIUmNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwZldOdFBDOXpjR0Z1UGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dmJHaytYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR3hwSUdOc1lYTnpQVndpY0dGblpWOWZZbTk0TFdsamIyNWNJajVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHa2dZMnhoYzNNOVhDSm1ZWE1nWm1FdFkyRnNaVzVrWVhJdFkyaGxZMnRjSWo0OEwybGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUGp4emNHRnVJR05zWVhOelBWd2ljR0ZuWlY5ZlltOTRMV2xqYjI0dExYUmxlSFJjSWo0a2UzbGxZWEp6ZlNCNWNpNDhMM053WVc0K1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOXNhVDVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YkdrZ1kyeGhjM005WENKd1lXZGxYMTlpYjNndGFXTnZibHdpUGx4eVhHNWNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUThhU0JqYkdGemN6MWNJbVpoY3lCbVlTMXdZV3hsZEhSbFhDSStQQzlwWEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RENDhjM0JoYmlCamJHRnpjejFjSW5CaFoyVmZYMkp2ZUMxcFkyOXVMUzEwWlhoMFhDSStKSHRrYjJjdVkyOXNiM0piTUYwZ1B5QmtiMmN1WTI5c2IzSmJNRjBnT2lBbkxTZDlQQzl6Y0dGdVBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEd3ZiR2srWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEd4cElHTnNZWE56UFZ3aWNHRm5aVjlmWW05NExXbGpiMjVjSWo1Y2NseHVYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBQR2tnWTJ4aGMzTTlYQ0ptWVhNZ1ptRXRjR0ZzWlhSMFpWd2lQand2YVZ4eVhHNWNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUStQSE53WVc0Z1kyeGhjM005WENKd1lXZGxYMTlpYjNndGFXTnZiaTB0ZEdWNGRGd2lQaVI3Wkc5bkxtTnZiRzl5V3pGZElEOGdaRzluTG1OdmJHOXlXekZkSURvZ0p5MG5mVHd2YzNCaGJqNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThMMnhwUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4c2FTQmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMXBZMjl1WENJK1hISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRHhwSUdOc1lYTnpQVndpWm1GeklHWmhMWEJoYkdWMGRHVmNJajQ4TDJsY2NseHVYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBQanh6Y0dGdUlHTnNZWE56UFZ3aWNHRm5aVjlmWW05NExXbGpiMjR0TFhSbGVIUmNJajRrZTJSdlp5NWpiMnh2Y2xzeVhTQS9JR1J2Wnk1amIyeHZjbHN5WFNBNklDY3RKMzA4TDNOd1lXNCtYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBYSFE4TDJ4cFBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHNhU0JqYkdGemN6MWNJbkJoWjJWZlgySnZlQzFwWTI5dVhDSStYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4cElHTnNZWE56UFZ3aVptRnpJR1poTFhCaGQxd2lQand2YVZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQStQSE53WVc0Z1kyeGhjM005WENKd1lXZGxYMTlpYjNndGFXTnZiaTB0ZEdWNGRGd2lQaVI3WEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBaRzluTG1OdllYUmNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwZlR3dmMzQmhiajVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4TDJ4cFBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHNhU0JqYkdGemN6MWNJbkJoWjJWZlgySnZlQzFwWTI5dVhDSStYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4cElHTnNZWE56UFZ3aVptRnpJR1poTFhabGJuVnpMVzFoY25OY0lqNDhMMmxjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BqeHpjR0Z1SUdOc1lYTnpQVndpY0dGblpWOWZZbTk0TFdsamIyNHRMWFJsZUhSY0lqNGtlMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RHUnZaeTVuWlc1a1pYSmNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwZlR3dmMzQmhiajVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4TDJ4cFBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5MWJENWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzlrYVhZK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmdPMXh5WEc1Y2NseHVYSFJjZEZ4MFhIUmtiMmR6UW05NExtRndjR1Z1WkVOb2FXeGtLR1J2WjBKdmVDazdYSEpjYmx4MFhIUmNkSDBwTzF4eVhHNWNjbHh1WEhSY2RGeDBZMkYwYzBGeWNtRjVMbVp2Y2tWaFkyZ29LR05oZENrZ1BUNGdlMXh5WEc1Y2RGeDBYSFJjZEdOaGRFSnZlQ0E5SUdSdlkzVnRaVzUwTG1OeVpXRjBaVVZzWlcxbGJuUW9KMlJwZGljcE8xeHlYRzVjZEZ4MFhIUmNkR05oZEVKdmVDNWpiR0Z6YzB4cGMzUXVZV1JrS0Nkd1lXZGxYMTlpYjNnbktUdGNjbHh1WEhKY2JseDBYSFJjZEZ4MFkyOXVjM1FnWTJGMFdXVmhjbk1nUFNCallYUXVZbWx5ZEdnN1hISmNibHh5WEc1Y2RGeDBYSFJjZEdOdmJuTjBJRzFwYkdselpXTnpRbVYwZDJWbGJrUlBRbUZ1WkRFNU56QmpZWFFnUFNCRVlYUmxMbkJoY25ObEtHTmhkRmxsWVhKektUdGNjbHh1WEhSY2RGeDBYSFJqYjI1emRDQnRhV3hwYzJWamMwSmxkSGRsWlc1T1QxZGhibVF4T1Rjd0lEMGdSR0YwWlM1dWIzY29LVHRjY2x4dVhISmNibHgwWEhSY2RGeDBZMjl1YzNRZ1lXZGxTVzVOYVd4cGMyVmpjME5oZENBOVhISmNibHgwWEhSY2RGeDBYSFJ0YVd4cGMyVmpjMEpsZEhkbFpXNU9UMWRoYm1ReE9UY3dJQzBnYldsc2FYTmxZM05DWlhSM1pXVnVSRTlDWVc1a01UazNNR05oZER0Y2NseHVYSEpjYmx4MFhIUmNkRngwWTI5dWMzUWdiV2xzYVhObFkzTkRZWFFnUFNCaFoyVkpiazFwYkdselpXTnpRMkYwTzF4eVhHNWNkRngwWEhSY2RHTnZibk4wSUhObFkzTWdQU0F4TURBd08xeHlYRzVjZEZ4MFhIUmNkR052Ym5OMElHMXBibk1nUFNCelpXTnpJQ29nTmpBN1hISmNibHgwWEhSY2RGeDBZMjl1YzNRZ2FHOTFjaUE5SUcxcGJuTWdLaUEyTUR0Y2NseHVYSFJjZEZ4MFhIUmpiMjV6ZENCa1lYa2dQU0JvYjNWeUlDb2dNalE3WEhKY2JseDBYSFJjZEZ4MFkyOXVjM1FnZVdWaGNpQTlJR1JoZVNBcUlETTJOVHRjY2x4dVhISmNibHgwWEhSY2RGeDBiR1YwSUhsbFlYSnpRMkYwSUQwZ1RXRjBhQzV5YjNWdVpDaHRhV3hwYzJWamMwTmhkQ0F2SUhsbFlYSXBPMXh5WEc1Y2NseHVYSFJjZEZ4MFhIUmpZWFJDYjNndWFXNXVaWEpJVkUxTUlEMGdZRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4WkdsMklHTnNZWE56UFZ3aWNHRm5aVjlmWW05NExYUnZjRndpUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR2x0WnlCemNtTTlYQ0l1Skh0allYUXVhVzFoWjJWOVhDSWdZV3gwUFZ3aUpIdGpZWFF1Ym1GdFpYMGdKSHRjY2x4dVhIUmNkRngwWEhSY2RHTmhkQzV6Y0dWamFXVnpYSEpjYmx4MFhIUmNkRngwZlZ3aWZTOCtYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2WkdsMlBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThaR2wySUdOc1lYTnpQVndpY0dGblpWOWZZbTk0TFdKdmRIUnZiVndpUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR2d6SUdOc1lYTnpQVndpY0dGblpWOWZZbTk0TFhScGRHeGxYQ0krSkh0allYUXVibUZ0WlgwOEwyZ3pQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHUnBkaUJqYkdGemN6MWNJbkJoWjJWZlgySnZlQzFqYjI1MFpXNTBYQ0krWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdScGRpQmpiR0Z6Y3oxY0ltVjRjR0Z1WkUxdmNtVkRiMjUwWlc1MFhDSWdhV1E5WENKemFHOTNUVzl5WlMwa2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBZMkYwTG5Od1pXTnBaWE5jY2x4dVhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFI5Skh0allYUXViblZ0WW1WeWZWd2lQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGNDQmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMTBaWGgwWENJK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBa2UyTmhkQzVrWlhOamZWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4TDNBK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOWthWFkrWEhKY2JpQWdJQ0JjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4WkdsMklHTnNZWE56UFZ3aVpYaHdZVzVrVFc5eVpVaHZiR1JsY2x3aVBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4WW5WMGRHOXVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmxlSEJoYm1RdGJXOXlaVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdaR0YwWVMxb2FXUmxkR1Y0ZEQxY0lpNHVMbEpsWVdRZ2JHVnpjMXdpWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JrWVhSaExYTm9iM2QwWlhoMFBWd2lMaTR1VW1WaFpDQnRiM0psWENKY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdSaGRHRXRkR0Z5WjJWMFBWd2ljMmh2ZDAxdmNtVXRKSHRqWVhRdWMzQmxZMmxsYzMwa2UxeHlYRzVjZEZ4MFhIUmNkRngwWTJGMExtNTFiV0psY2x4eVhHNWNkRngwWEhSY2RIMWNJbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMnhoYzNNOVhDSmlkWFIwYjI0Z2MyaHZkMDF2Y21WY0lseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0ErWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F1TGk1U1pXRmtJRzF2Y21WY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzlpZFhSMGIyNCtYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzlrYVhZK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4TDJScGRqNWNjbHh1SUNBZ0lGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhWc0lHTnNZWE56UFZ3aWNHRm5aVjlmWW05NExXbGpiMjV6WENJK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHeHBJR05zWVhOelBWd2ljR0ZuWlY5ZlltOTRMV2xqYjI1Y0lqNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdrZ1kyeGhjM005WENKbVlYTWdabUV0ZDJWcFoyaDBYQ0krUEM5cFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRDQ4YzNCaGJpQmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMXBZMjl1TFMxMFpYaDBYQ0krSkh0Y2NseHVYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJqWVhRdWQyVnBaMmgwWEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RIMGdhMmM4TDNOd1lXNCtYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzlzYVQ1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGJHa2dZMnhoYzNNOVhDSndZV2RsWDE5aWIzZ3RhV052Ymx3aVBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YVNCamJHRnpjejFjSW1aaGN5Qm1ZUzFoY25KdmQzTXRZV3gwTFhaY0lqNDhMMmxjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BqeHpjR0Z1SUdOc1lYTnpQVndpY0dGblpWOWZZbTk0TFdsamIyNHRMWFJsZUhSY0lqNGtlMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RHTmhkQzVvWldsbmFIUmNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwZldOdFBDOXpjR0Z1UGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dmJHaytYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR3hwSUdOc1lYTnpQVndpY0dGblpWOWZZbTk0TFdsamIyNWNJajVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHa2dZMnhoYzNNOVhDSm1ZWE1nWm1FdFkyRnNaVzVrWVhJdFkyaGxZMnRjSWo0OEwybGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUGp4emNHRnVJR05zWVhOelBWd2ljR0ZuWlY5ZlltOTRMV2xqYjI0dExYUmxlSFJjSWo0a2UzbGxZWEp6UTJGMGZTQjVjaTQ4TDNOd1lXNCtYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzlzYVQ1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGJHa2dZMnhoYzNNOVhDSndZV2RsWDE5aWIzZ3RhV052Ymx3aVBseHlYRzVjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFE4YVNCamJHRnpjejFjSW1aaGN5Qm1ZUzF3WVd4bGRIUmxYQ0krUEM5cFhISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRDQ4YzNCaGJpQmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMXBZMjl1TFMxMFpYaDBYQ0krSkh0allYUXVZMjlzYjNKYk1GMGdQeUJqWVhRdVkyOXNiM0piTUYwZ09pQW5MU2Q5UEM5emNHRnVQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2YkdrK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHeHBJR05zWVhOelBWd2ljR0ZuWlY5ZlltOTRMV2xqYjI1Y0lqNWNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwUEdrZ1kyeGhjM005WENKbVlYTWdabUV0Y0dGc1pYUjBaVndpUGp3dmFWeHlYRzVjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFErUEhOd1lXNGdZMnhoYzNNOVhDSndZV2RsWDE5aWIzZ3RhV052YmkwdGRHVjRkRndpUGlSN1kyRjBMbU52Ykc5eVd6RmRJRDhnWTJGMExtTnZiRzl5V3pGZElEb2dKeTBuZlR3dmMzQmhiajVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4TDJ4cFBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHNhU0JqYkdGemN6MWNJbkJoWjJWZlgySnZlQzFwWTI5dVhDSStYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBYSFJjZER4cElHTnNZWE56UFZ3aVptRnpJR1poTFhCaGJHVjBkR1ZjSWo0OEwybGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwUGp4emNHRnVJR05zWVhOelBWd2ljR0ZuWlY5ZlltOTRMV2xqYjI0dExYUmxlSFJjSWo0a2UyTmhkQzVqYjJ4dmNsc3lYU0EvSUdOaGRDNWpiMnh2Y2xzeVhTQTZJQ2N0SjMwOEwzTndZVzQrWEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwWEhROEwyeHBQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhzYVNCamJHRnpjejFjSW5CaFoyVmZYMkp2ZUMxcFkyOXVYQ0krWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHBJR05zWVhOelBWd2labUZ6SUdaaExYQmhkMXdpUGp3dmFWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0ErUEhOd1lXNGdZMnhoYzNNOVhDSndZV2RsWDE5aWIzZ3RhV052YmkwdGRHVjRkRndpUGlSN1hISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWTJGMExtTnZZWFJjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MGZUd3ZjM0JoYmo1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOEwyeHBQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhzYVNCamJHRnpjejFjSW5CaFoyVmZYMkp2ZUMxcFkyOXVYQ0krWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHBJR05zWVhOelBWd2labUZ6SUdaaExYWmxiblZ6TFcxaGNuTmNJajQ4TDJsY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQanh6Y0dGdUlHTnNZWE56UFZ3aWNHRm5aVjlmWW05NExXbGpiMjR0TFhSbGVIUmNJajRrZTF4eVhHNWNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkR05oZEM1blpXNWtaWEpjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MGZUd3ZjM0JoYmo1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOEwyeHBQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOTFiRDVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5a2FYWStYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JnTzF4eVhHNWNjbHh1WEhSY2RGeDBYSFJqWVhSelFtOTRMbUZ3Y0dWdVpFTm9hV3hrS0dOaGRFSnZlQ2s3WEhKY2JseDBYSFJjZEgwcE8xeHlYRzVjZEZ4MGZTazdYSEpjYmx4eVhHNWNkRngwYkdWMElHUnZaMEp2ZUVGeWNtRjVJRDBnV3k0dUxtUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0pCYkd3b0p5TmtiMmR6TFdKdmVDQXVjR0ZuWlY5ZlltOTRKeWxkTzF4eVhHNWNkRngwYkdWMElHTmhkRUp2ZUVGeWNtRjVJRDBnV3k0dUxtUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0pCYkd3b0p5TmpZWFJ6TFdKdmVDQXVjR0ZuWlY5ZlltOTRKeWxkTzF4eVhHNWNkRngwYkdWMElHTjFjbkpsYm5SUVlXZGxJRDBnTVR0Y2NseHVYSFJjZEd4bGRDQmxiR1Z0Wlc1MGMwOXVVR0ZuWlNBOUlEWTdYSEpjYmx4eVhHNWNkRngwWTI5dWMzUWdjR0ZuYVc1aGRHbHZia1ZzUkc5bmN5QTlJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJDZVVsa0tDZGtiMmR6TFhCaFoybHVZWFJwYjI0bktUdGNjbHh1WEhSY2RHTnZibk4wSUhCaFoybHVZWFJwYjI1RmJFTmhkSE1nUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2duWTJGMGN5MXdZV2RwYm1GMGFXOXVKeWs3WEhKY2JseHlYRzVjZEZ4MFpuVnVZM1JwYjI0Z1pHbHpjR3hoZVZCaFoybHVZWFJsWkVsMFpXMXpLR2wwWlcxekxDQjNjbUZ3Y0dWeUxDQnBkR1Z0YzFCbGNsQmhaMlVzSUhCaFoyVXBJSHRjY2x4dVhIUmNkRngwZDNKaGNIQmxjaTVwYm01bGNraFVUVXdnUFNBbkp6dGNjbHh1WEhSY2RGeDBjR0ZuWlMwdE8xeHlYRzVjY2x4dVhIUmNkRngwYkdWMElITjBZWEowSUQwZ2FYUmxiWE5RWlhKUVlXZGxJQ29nY0dGblpUdGNjbHh1WEhSY2RGeDBiR1YwSUdWdVpDQTlJSE4wWVhKMElDc2dhWFJsYlhOUVpYSlFZV2RsTzF4eVhHNWNkRngwWEhSc1pYUWdjR0ZuYVc1aGRHVmtTWFJsYlhNZ1BTQnBkR1Z0Y3k1emJHbGpaU2h6ZEdGeWRDd2daVzVrS1R0Y2NseHVYSEpjYmx4MFhIUmNkSEJoWjJsdVlYUmxaRWwwWlcxekxtWnZja1ZoWTJnb0tHbDBaVzBwSUQwK0lIdGNjbHh1WEhSY2RGeDBYSFJzWlhRZ2FYUmxiVVZzSUQwZ1pHOWpkVzFsYm5RdVkzSmxZWFJsUld4bGJXVnVkQ2duWkdsMkp5azdYSEpjYmx4MFhIUmNkRngwYVhSbGJVVnNMbU5zWVhOelRHbHpkQzVoWkdRb0ozQmhaMlZmWDJKdmVDY3BPMXh5WEc1Y2NseHVYSFJjZEZ4MFhIUnBkR1Z0Uld3Z1BTQnBkR1Z0TzF4eVhHNWNjbHh1WEhSY2RGeDBYSFIzY21Gd2NHVnlMbUZ3Y0dWdVpFTm9hV3hrS0dsMFpXMUZiQ2s3WEhKY2JseDBYSFJjZEgwcE8xeHlYRzVjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkR1oxYm1OMGFXOXVJR1JwYzNCc1lYbFFZV2RwYm1GMGFXOXVLR2wwWlcxekxDQjNjbUZ3Y0dWeUxDQnBkR1Z0YzFCbGNsQmhaMlVwSUh0Y2NseHVYSFJjZEZ4MGQzSmhjSEJsY2k1cGJtNWxja2hVVFV3Z1BTQW5KenRjY2x4dVhISmNibHgwWEhSY2RHeGxkQ0J3WVdkbFEyOTFiblFnUFNCTllYUm9MbU5sYVd3b2FYUmxiWE11YkdWdVozUm9JQzhnYVhSbGJYTlFaWEpRWVdkbEtUdGNjbHh1WEhKY2JseDBYSFJjZEdadmNpQW9iR1YwSUdrZ1BTQXhPeUJwSUR3Z2NHRm5aVU52ZFc1MElDc2dNVHNnYVNzcktTQjdYSEpjYmx4MFhIUmNkRngwYkdWMElHSjBiaUE5SUhCaFoybHVZWFJwYjI1Q2RYUjBiMjRvYVNrN1hISmNibHh5WEc1Y2RGeDBYSFJjZEhkeVlYQndaWEl1WVhCd1pXNWtRMmhwYkdRb1luUnVLVHRjY2x4dVhIUmNkRngwZlZ4eVhHNWNjbHh1WEhSY2RGeDBiR1YwSUc1bGVIUkNkRzRnUFNCdVpYaDBVR0ZuWlNncE8xeHlYRzVjZEZ4MFhIUjNjbUZ3Y0dWeUxtRndjR1Z1WkVOb2FXeGtLRzVsZUhSQ2RHNHBPMXh5WEc1Y2NseHVYSFJjZEZ4MGJHVjBJSEJ5WlhaQ2RHNGdQU0J3Y21WMlVHRm5aU2dwTzF4eVhHNWNkRngwWEhSM2NtRndjR1Z5TG5CeVpYQmxibVFvY0hKbGRrSjBiaWs3WEhKY2JseDBYSFI5WEhKY2JseHlYRzVjZEZ4MFpuVnVZM1JwYjI0Z2JtVjRkRkJoWjJVb2NHRm5aU2tnZTF4eVhHNWNkRngwWEhSc1pYUWdibVY0ZEVKMGJpQTlJR1J2WTNWdFpXNTBMbU55WldGMFpVVnNaVzFsYm5Rb0oySjFkSFJ2YmljcE8xeHlYRzVjZEZ4MFhIUnVaWGgwUW5SdUxtbGtJRDBnSjI1bGVIUW5PMXh5WEc1Y2RGeDBYSFJ1WlhoMFFuUnVMbWx1Ym1WeVZHVjRkQ0E5SUNjK0p6dGNjbHh1WEhSY2RGeDBibVY0ZEVKMGJpNWpiR0Z6YzB4cGMzUXVZV1JrS0Nkd1lXZHBibUYwYVc5dUxXSjBiaWNwTzF4eVhHNWNjbHh1WEhSY2RGeDBibVY0ZEVKMGJpNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZGpiR2xqYXljc0lDaGxLU0E5UGlCN1hISmNibHgwWEhSY2RGeDBhV1lnS0c1bGVIUkNkRzR1Y0dGeVpXNTBSV3hsYldWdWRDQTlQU0J3WVdkcGJtRjBhVzl1Uld4RWIyZHpLU0I3WEhKY2JseDBYSFJjZEZ4MFhIUmthWE53YkdGNVVHRm5hVzVoZEdWa1NYUmxiWE1vWEhKY2JseDBYSFJjZEZ4MFhIUmNkR1J2WjBKdmVFRnljbUY1TEZ4eVhHNWNkRngwWEhSY2RGeDBYSFJrYjJkelFtOTRMRnh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmxiR1Z0Wlc1MGMwOXVVR0ZuWlN4Y2NseHVYSFJjZEZ4MFhIUmNkRngwWTNWeWNtVnVkRkJoWjJWY2NseHVYSFJjZEZ4MFhIUmNkQ2s3WEhKY2JseHlYRzVjZEZ4MFhIUmNkRngwYkdWMElHRmpkR2wyWlVKMGJrUnZaeUE5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9YSEpjYmx4MFhIUmNkRngwWEhSY2RDY2paRzluY3lBdWNHRm5hVzVoZEdsdmJpMWlkRzR1WVdOMGFYWmxKMXh5WEc1Y2RGeDBYSFJjZEZ4MEtUdGNjbHh1WEhKY2JseDBYSFJjZEZ4MFhIUmhZM1JwZG1WQ2RHNUViMmN1Ym1WNGRFVnNaVzFsYm5SVGFXSnNhVzVuTG1Oc2FXTnJLQ2s3WEhKY2JseDBYSFJjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkRngwWEhScFppQW9ibVY0ZEVKMGJpNXdZWEpsYm5SRmJHVnRaVzUwSUQwOUlIQmhaMmx1WVhScGIyNUZiRU5oZEhNcElIdGNjbHh1WEhSY2RGeDBYSFJjZEdScGMzQnNZWGxRWVdkcGJtRjBaV1JKZEdWdGN5aGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFkyRjBRbTk0UVhKeVlYa3NYSEpjYmx4MFhIUmNkRngwWEhSY2RHTmhkSE5DYjNnc1hISmNibHgwWEhSY2RGeDBYSFJjZEdWc1pXMWxiblJ6VDI1UVlXZGxMRnh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmpkWEp5Wlc1MFVHRm5aVnh5WEc1Y2RGeDBYSFJjZEZ4MEtUdGNjbHh1WEhKY2JseDBYSFJjZEZ4MFhIUnNaWFFnWVdOMGFYWmxRblJ1UTJGMElEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2loY2NseHVYSFJjZEZ4MFhIUmNkRngwSnlOallYUnpJQzV3WVdkcGJtRjBhVzl1TFdKMGJpNWhZM1JwZG1VblhISmNibHgwWEhSY2RGeDBYSFFwTzF4eVhHNWNjbHh1WEhSY2RGeDBYSFJjZEdGamRHbDJaVUowYmtOaGRDNXVaWGgwUld4bGJXVnVkRk5wWW14cGJtY3VZMnhwWTJzb0tUdGNjbHh1WEhSY2RGeDBYSFI5WEhKY2JseDBYSFJjZEgwcE8xeHlYRzVjY2x4dVhIUmNkRngwY21WMGRYSnVJRzVsZUhSQ2RHNDdYSEpjYmx4MFhIUjlYSEpjYmx4eVhHNWNkRngwWm5WdVkzUnBiMjRnY0hKbGRsQmhaMlVvY0dGblpTa2dlMXh5WEc1Y2RGeDBYSFJzWlhRZ2NISmxka0owYmlBOUlHUnZZM1Z0Wlc1MExtTnlaV0YwWlVWc1pXMWxiblFvSjJKMWRIUnZiaWNwTzF4eVhHNWNkRngwWEhSd2NtVjJRblJ1TG1sa0lEMGdKM0J5WlhZbk8xeHlYRzVjZEZ4MFhIUndjbVYyUW5SdUxtbHVibVZ5VkdWNGRDQTlJQ2M4Snp0Y2NseHVYSFJjZEZ4MGNISmxka0owYmk1amJHRnpjMHhwYzNRdVlXUmtLQ2R3WVdkcGJtRjBhVzl1TFdKMGJpY3BPMXh5WEc1Y2NseHVYSFJjZEZ4MGNISmxka0owYmk1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkamJHbGpheWNzSUNobEtTQTlQaUI3WEhKY2JseDBYSFJjZEZ4MGFXWWdLSEJ5WlhaQ2RHNHVjR0Z5Wlc1MFJXeGxiV1Z1ZENBOVBTQndZV2RwYm1GMGFXOXVSV3hFYjJkektTQjdYSEpjYmx4MFhIUmNkRngwWEhSa2FYTndiR0Y1VUdGbmFXNWhkR1ZrU1hSbGJYTW9YSEpjYmx4MFhIUmNkRngwWEhSY2RHUnZaMEp2ZUVGeWNtRjVMRnh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmtiMmR6UW05NExGeHlYRzVjZEZ4MFhIUmNkRngwWEhSbGJHVnRaVzUwYzA5dVVHRm5aU3hjY2x4dVhIUmNkRngwWEhSY2RGeDBZM1Z5Y21WdWRGQmhaMlZjY2x4dVhIUmNkRngwWEhSY2RDazdYSEpjYmx4eVhHNWNkRngwWEhSY2RGeDBiR1YwSUdGamRHbDJaVUowYmtSdlp5QTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb1hISmNibHgwWEhSY2RGeDBYSFJjZENjalpHOW5jeUF1Y0dGbmFXNWhkR2x2YmkxaWRHNHVZV04wYVhabEoxeHlYRzVjZEZ4MFhIUmNkRngwS1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwWEhSaFkzUnBkbVZDZEc1RWIyY3VjSEpsZG1sdmRYTkZiR1Z0Wlc1MFUybGliR2x1Wnk1amJHbGpheWdwTzF4eVhHNWNkRngwWEhSY2RIMWNjbHh1WEhKY2JseDBYSFJjZEZ4MGFXWWdLSEJ5WlhaQ2RHNHVjR0Z5Wlc1MFJXeGxiV1Z1ZENBOVBTQndZV2RwYm1GMGFXOXVSV3hEWVhSektTQjdYSEpjYmx4MFhIUmNkRngwWEhSa2FYTndiR0Y1VUdGbmFXNWhkR1ZrU1hSbGJYTW9YSEpjYmx4MFhIUmNkRngwWEhSY2RHTmhkRUp2ZUVGeWNtRjVMRnh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmpZWFJ6UW05NExGeHlYRzVjZEZ4MFhIUmNkRngwWEhSbGJHVnRaVzUwYzA5dVVHRm5aU3hjY2x4dVhIUmNkRngwWEhSY2RGeDBZM1Z5Y21WdWRGQmhaMlZjY2x4dVhIUmNkRngwWEhSY2RDazdYSEpjYmx4eVhHNWNkRngwWEhSY2RGeDBiR1YwSUdGamRHbDJaVUowYmtOaGRDQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb1hISmNibHgwWEhSY2RGeDBYSFJjZENjalkyRjBjeUF1Y0dGbmFXNWhkR2x2YmkxaWRHNHVZV04wYVhabEoxeHlYRzVjZEZ4MFhIUmNkRngwS1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwWEhSaFkzUnBkbVZDZEc1RFlYUXVjSEpsZG1sdmRYTkZiR1Z0Wlc1MFUybGliR2x1Wnk1amJHbGpheWdwTzF4eVhHNWNkRngwWEhSY2RIMWNjbHh1WEhSY2RGeDBmU2s3WEhKY2JseHlYRzVjZEZ4MFhIUnlaWFIxY200Z2NISmxka0owYmp0Y2NseHVYSFJjZEgxY2NseHVYSEpjYmx4MFhIUm1kVzVqZEdsdmJpQndZV2RwYm1GMGFXOXVRblYwZEc5dUtIQmhaMlVwSUh0Y2NseHVYSFJjZEZ4MGJHVjBJR0oxZEhSdmJpQTlJR1J2WTNWdFpXNTBMbU55WldGMFpVVnNaVzFsYm5Rb0oySjFkSFJ2YmljcE8xeHlYRzVjZEZ4MFhIUmlkWFIwYjI0dVkyeGhjM05NYVhOMExtRmtaQ2duY0dGbmFXNWhkR2x2YmkxaWRHNG5LVHRjY2x4dVhIUmNkRngwWW5WMGRHOXVMbWx1Ym1WeVZHVjRkQ0E5SUhCaFoyVTdYSEpjYmx4eVhHNWNkRngwWEhScFppQW9ZM1Z5Y21WdWRGQmhaMlVnUFQwZ2NHRm5aU2tnZTF4eVhHNWNkRngwWEhSY2RHSjFkSFJ2Ymk1amJHRnpjMHhwYzNRdVlXUmtLQ2RoWTNScGRtVW5LVHRjY2x4dVhIUmNkRngwZlZ4eVhHNWNjbHh1WEhSY2RGeDBZblYwZEc5dUxtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0oyTnNhV05ySnl3Z0tHVXBJRDArSUh0Y2NseHVYSFJjZEZ4MFhIUmpkWEp5Wlc1MFVHRm5aU0E5SUhCaFoyVTdYSEpjYmx4eVhHNWNkRngwWEhSY2RHbG1JQ2hpZFhSMGIyNHVjR0Z5Wlc1MFJXeGxiV1Z1ZENBOVBTQndZV2RwYm1GMGFXOXVSV3hFYjJkektTQjdYSEpjYmx4MFhIUmNkRngwWEhSa2FYTndiR0Y1VUdGbmFXNWhkR1ZrU1hSbGJYTW9YSEpjYmx4MFhIUmNkRngwWEhSY2RHUnZaMEp2ZUVGeWNtRjVMRnh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmtiMmR6UW05NExGeHlYRzVjZEZ4MFhIUmNkRngwWEhSbGJHVnRaVzUwYzA5dVVHRm5aU3hjY2x4dVhIUmNkRngwWEhSY2RGeDBZM1Z5Y21WdWRGQmhaMlZjY2x4dVhIUmNkRngwWEhSY2RDazdYSEpjYmx4eVhHNWNkRngwWEhSY2RGeDBiR1YwSUdGamRHbDJaVUowYmtSdlp5QTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb1hISmNibHgwWEhSY2RGeDBYSFJjZENjalpHOW5jeUF1Y0dGbmFXNWhkR2x2YmkxaWRHNHVZV04wYVhabEoxeHlYRzVjZEZ4MFhIUmNkRngwS1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwWEhSaFkzUnBkbVZDZEc1RWIyY3VZMnhoYzNOTWFYTjBMbkpsYlc5MlpTZ25ZV04wYVhabEp5azdYSEpjYmx4eVhHNWNkRngwWEhSY2RGeDBZblYwZEc5dUxtTnNZWE56VEdsemRDNWhaR1FvSjJGamRHbDJaU2NwTzF4eVhHNWNkRngwWEhSY2RIMWNjbHh1WEhKY2JseDBYSFJjZEZ4MGFXWWdLR0oxZEhSdmJpNXdZWEpsYm5SRmJHVnRaVzUwSUQwOUlIQmhaMmx1WVhScGIyNUZiRU5oZEhNcElIdGNjbHh1WEhSY2RGeDBYSFJjZEdScGMzQnNZWGxRWVdkcGJtRjBaV1JKZEdWdGN5aGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFkyRjBRbTk0UVhKeVlYa3NYSEpjYmx4MFhIUmNkRngwWEhSY2RHTmhkSE5DYjNnc1hISmNibHgwWEhSY2RGeDBYSFJjZEdWc1pXMWxiblJ6VDI1UVlXZGxMRnh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmpkWEp5Wlc1MFVHRm5aVnh5WEc1Y2RGeDBYSFJjZEZ4MEtUdGNjbHh1WEhKY2JseDBYSFJjZEZ4MFhIUnNaWFFnWVdOMGFYWmxRblJ1UTJGMElEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2loY2NseHVYSFJjZEZ4MFhIUmNkRngwSnlOallYUnpJQzV3WVdkcGJtRjBhVzl1TFdKMGJpNWhZM1JwZG1VblhISmNibHgwWEhSY2RGeDBYSFFwTzF4eVhHNWNjbHh1WEhSY2RGeDBYSFJjZEdGamRHbDJaVUowYmtOaGRDNWpiR0Z6YzB4cGMzUXVjbVZ0YjNabEtDZGhZM1JwZG1VbktUdGNjbHh1WEhKY2JseDBYSFJjZEZ4MFhIUmlkWFIwYjI0dVkyeGhjM05NYVhOMExtRmtaQ2duWVdOMGFYWmxKeWs3WEhKY2JseDBYSFJjZEZ4MGZWeHlYRzVjZEZ4MFhIUjlLVHRjY2x4dVhISmNibHgwWEhSY2RISmxkSFZ5YmlCaWRYUjBiMjQ3WEhKY2JseDBYSFI5WEhKY2JseHlYRzVjZEZ4MFkyOXVjM1FnWlhod1lXNWtjMDF2Y21VZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5UVd4c0tDZGJaWGh3WVc1a0xXMXZjbVZkSnlrN1hISmNibHh5WEc1Y2RGeDBablZ1WTNScGIyNGdaWGh3WVc1a0tDa2dlMXh5WEc1Y2RGeDBYSFJqYjI1emRDQnphRzkzUTI5dWRHVnVkQ0E5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLSFJvYVhNdVpHRjBZWE5sZEM1MFlYSm5aWFFwTzF4eVhHNWNkRngwWEhScFppQW9jMmh2ZDBOdmJuUmxiblF1WTJ4aGMzTk1hWE4wTG1OdmJuUmhhVzV6S0NkaFkzUnBkbVVuS1NrZ2UxeHlYRzVjZEZ4MFhIUmNkSFJvYVhNdWFXNXVaWEpJVkUxTUlEMGdkR2hwY3k1a1lYUmhjMlYwTG5Ob2IzZDBaWGgwTzF4eVhHNWNkRngwWEhSOUlHVnNjMlVnZTF4eVhHNWNkRngwWEhSY2RIUm9hWE11YVc1dVpYSklWRTFNSUQwZ2RHaHBjeTVrWVhSaGMyVjBMbWhwWkdWMFpYaDBPMXh5WEc1Y2RGeDBYSFI5WEhKY2JseHlYRzVjZEZ4MFhIUnphRzkzUTI5dWRHVnVkQzVqYkdGemMweHBjM1F1ZEc5bloyeGxLQ2RoWTNScGRtVW5LVHRjY2x4dVhIUmNkRngwYVdZZ0tITm9iM2REYjI1MFpXNTBMbU5zWVhOelRHbHpkQzVqYjI1MFlXbHVjeWduWVdOMGFYWmxKeWtwSUh0Y2NseHVYSFJjZEZ4MFhIUnphRzkzUTI5dWRHVnVkQzV6ZEhsc1pTNXRZWGhJWldsbmFIUWdQU0J6YUc5M1EyOXVkR1Z1ZEM1elkzSnZiR3hJWldsbmFIUWdLeUFuY0hnbk8xeHlYRzVjZEZ4MFhIUjlJR1ZzYzJVZ2UxeHlYRzVjZEZ4MFhIUmNkSE5vYjNkRGIyNTBaVzUwTG5OMGVXeGxMbTFoZUVobGFXZG9kQ0E5SURJd0lDc2dKM0I0Snp0Y2NseHVYSFJjZEZ4MGZWeHlYRzVjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkR2xtSUNoa2IyZHpRbTk0S1NCN1hISmNibHgwWEhSY2RHUnBjM0JzWVhsUVlXZHBibUYwWldSSmRHVnRjeWhrYjJkQ2IzaEJjbkpoZVN3Z1pHOW5jMEp2ZUN3Z1pXeGxiV1Z1ZEhOUGJsQmhaMlVzSUdOMWNuSmxiblJRWVdkbEtUdGNjbHh1WEhSY2RGeDBaR2x6Y0d4aGVWQmhaMmx1WVhScGIyNG9aRzluUW05NFFYSnlZWGtzSUhCaFoybHVZWFJwYjI1RmJFUnZaM01zSUdWc1pXMWxiblJ6VDI1UVlXZGxLVHRjY2x4dVhISmNibHgwWEhSY2RHVjRjR0Z1WkhOTmIzSmxMbVp2Y2tWaFkyZ29LR0owYmlrZ1BUNGdlMXh5WEc1Y2RGeDBYSFJjZEdKMGJpNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZGpiR2xqYXljc0lHVjRjR0Z1WkNrN1hISmNibHgwWEhSY2RIMHBPMXh5WEc1Y2RGeDBmVnh5WEc1Y2NseHVYSFJjZEdsbUlDaGpZWFJ6UW05NEtTQjdYSEpjYmx4MFhIUmNkR1JwYzNCc1lYbFFZV2RwYm1GMFpXUkpkR1Z0Y3loallYUkNiM2hCY25KaGVTd2dZMkYwYzBKdmVDd2daV3hsYldWdWRITlBibEJoWjJVc0lHTjFjbkpsYm5SUVlXZGxLVHRjY2x4dVhIUmNkRngwWkdsemNHeGhlVkJoWjJsdVlYUnBiMjRvWTJGMFFtOTRRWEp5WVhrc0lIQmhaMmx1WVhScGIyNUZiRU5oZEhNc0lHVnNaVzFsYm5SelQyNVFZV2RsS1R0Y2NseHVYSEpjYmx4MFhIUmNkR1Y0Y0dGdVpITk5iM0psTG1admNrVmhZMmdvS0dKMGJpa2dQVDRnZTF4eVhHNWNkRngwWEhSY2RHSjBiaTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RqYkdsamF5Y3NJR1Y0Y0dGdVpDazdYSEpjYmx4MFhIUmNkSDBwTzF4eVhHNWNkRngwZlZ4eVhHNWNkSDFjY2x4dVhISmNibHgwYVdZZ0tHRnVhVzFoYkhOUVlXZGxjeWtnZTF4eVhHNWNkRngwS0daMWJtTjBhVzl1SUNncElIdGNjbHh1WEhSY2RGeDBaR2x6Y0d4aGVVRnVhVzFoYkhNb0tUdGNjbHh1WEhSY2RIMHBLQ2s3WEhKY2JseDBmVnh5WEc1OUtUdGNjbHh1SWl3aVpHOWpkVzFsYm5RdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblJFOU5RMjl1ZEdWdWRFeHZZV1JsWkNjc0lHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhIUXZMeUJtYjNKdElIWmhiR2xrWVhScGIyNWNjbHh1WEhSamIyNXpkQ0JtYjNKdElEMGdaRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkRUo1U1dRb0oyTnZiblJoWTNRdFptOXliU2NwTzF4eVhHNWNkR052Ym5OMElHNWhiV1VnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2duYm1GdFpTY3BPMXh5WEc1Y2RHTnZibk4wSUdWdFlXbHNJRDBnWkc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEVKNVNXUW9KMlZ0WVdsc0p5azdYSEpjYmx4MFkyOXVjM1FnYldWemMyRm5aU0E5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2R0WlhOellXZGxKeWs3WEhKY2JseDBZMjl1YzNRZ1ptOXliVUowYmlBOUlHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0NkbWIzSnRMV0owYmljcE8xeHlYRzVjY2x4dVhIUnBaaUFvWm05eWJTa2dlMXh5WEc1Y2RGeDBXMXh5WEc1Y2RGeDBYSFFuWTJ4cFkyc25MRnh5WEc1Y2RGeDBYSFFuYjI1MGIzVmphSE4wWVhKMEp5eGNjbHh1WEhSY2RGeDBKMjF2ZFhObGIzWmxjaWNzWEhKY2JseDBYSFJjZENkclpYbGtiM2R1Snl4Y2NseHVYSFJjZEZ4MEoydGxlWEJ5WlhOekp5eGNjbHh1WEhSY2RGeDBKM1J2ZFdOb2MzUmhjblFuTEZ4eVhHNWNkRngwWEhRbmRHOTFZMmh0YjNabEp5eGNjbHh1WEhSY2RGMHVabTl5UldGamFDaGNjbHh1WEhSY2RGeDBLR1YyWlc1MEtTQTlQbHh5WEc1Y2RGeDBYSFJjZEdSdlkzVnRaVzUwTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvWlhabGJuUXNJQ2dwSUQwK0lIdGNjbHh1WEhSY2RGeDBYSFJjZEdsbUlDaGphR1ZqYTBsdWNIVjBjeWdwSUQwOVBTQm1ZV3h6WlNrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhSbWIzSnRRblJ1TG1ScGMyRmliR1ZrSUQwZ2RISjFaVHRjY2x4dVhIUmNkRngwWEhSY2RIMGdaV3h6WlNCN1hISmNibHgwWEhSY2RGeDBYSFJjZEdadmNtMUNkRzR1WkdsellXSnNaV1FnUFNCbVlXeHpaVHRjY2x4dVhIUmNkRngwWEhSY2RIMWNjbHh1WEhSY2RGeDBYSFI5S1N4Y2NseHVYSFJjZEZ4MFptRnNjMlZjY2x4dVhIUmNkQ2s3WEhKY2JseHlYRzVjZEZ4MFpuVnVZM1JwYjI0Z1kyaGxZMnRKYm5CMWRITW9LU0I3WEhKY2JseDBYSFJjZEdOdmJuTjBJRzVoYldWV1lXeDFaU0E5SUc1aGJXVXVkbUZzZFdVdWRISnBiU2dwTzF4eVhHNWNkRngwWEhSamIyNXpkQ0JsYldGcGJGWmhiSFZsSUQwZ1pXMWhhV3d1ZG1Gc2RXVXVkSEpwYlNncE8xeHlYRzVjZEZ4MFhIUmpiMjV6ZENCdFpYTnpZV2RsVm1Gc2RXVWdQU0J0WlhOellXZGxMblpoYkhWbExuUnlhVzBvS1R0Y2NseHVYSEpjYmx4MFhIUmNkR2xtSUNodVlXMWxWbUZzZFdVZ1BUMDlJQ2NuS1NCN1hISmNibHgwWEhSY2RGeDBjMlYwUlhKeWIzSkdiM0lvYm1GdFpTd2dKMUJzWldGelpTQmxiblJsY2lCNWIzVnlJR1oxYkd3Z2JtRnRaU2NwTzF4eVhHNWNkRngwWEhSOUlHVnNjMlVnZTF4eVhHNWNkRngwWEhSY2RITmxkRk4xWTJObGMzTkdiM0lvYm1GdFpTazdYSEpjYmx4MFhIUmNkSDFjY2x4dVhISmNibHgwWEhSY2RHbG1JQ2hsYldGcGJGWmhiSFZsSUQwOVBTQW5KeWtnZTF4eVhHNWNkRngwWEhSY2RITmxkRVZ5Y205eVJtOXlLR1Z0WVdsc0xDQW5VR3hsWVhObElHVnVkR1Z5SUhsdmRYSWdaVzFoYVd3Z1lXUmtjbVZ6Y3ljcE8xeHlYRzVjZEZ4MFhIUjlJR1ZzYzJVZ2FXWWdLQ0ZsYldGcGJFbHpWbUZzYVdRb1pXMWhhV3hXWVd4MVpTa3BJSHRjY2x4dVhIUmNkRngwWEhSelpYUkZjbkp2Y2tadmNpaGxiV0ZwYkN3Z0owVnRZV2xzSUdseklHNXZkQ0IyWVd4cFpDY3BPMXh5WEc1Y2RGeDBYSFI5SUdWc2MyVWdlMXh5WEc1Y2RGeDBYSFJjZEhObGRGTjFZMk5sYzNOR2IzSW9aVzFoYVd3cE8xeHlYRzVjZEZ4MFhIUjlYSEpjYmx4eVhHNWNkRngwWEhScFppQW9iV1Z6YzJGblpWWmhiSFZsSUQwOVBTQW5KeWtnZTF4eVhHNWNkRngwWEhSY2RITmxkRVZ5Y205eVJtOXlLRzFsYzNOaFoyVXNJQ2RRYkdWaGMyVWdaVzUwWlhJZ2VXOTFjaUJ0WlhOellXZGxKeWs3WEhKY2JseDBYSFJjZEgwZ1pXeHpaU0I3WEhKY2JseDBYSFJjZEZ4MGMyVjBVM1ZqWTJWemMwWnZjaWh0WlhOellXZGxLVHRjY2x4dVhIUmNkRngwZlZ4eVhHNWNjbHh1WEhSY2RGeDBhV1lnS0Z4eVhHNWNkRngwWEhSY2RHNWhiV1ZXWVd4MVpTQTlQVDBnSnljZ2ZIeGNjbHh1WEhSY2RGeDBYSFJsYldGcGJGWmhiSFZsSUQwOVBTQW5KeUI4ZkZ4eVhHNWNkRngwWEhSY2RHMWxjM05oWjJWV1lXeDFaU0E5UFQwZ0p5Y2dmSHhjY2x4dVhIUmNkRngwWEhRaFpXMWhhV3hKYzFaaGJHbGtLR1Z0WVdsc1ZtRnNkV1VwWEhKY2JseDBYSFJjZENrZ2UxeHlYRzVjZEZ4MFhIUmNkSEpsZEhWeWJpQm1ZV3h6WlR0Y2NseHVYSFJjZEZ4MGZTQmxiSE5sSUh0Y2NseHVYSFJjZEZ4MFhIUnlaWFIxY200Z2RISjFaVHRjY2x4dVhIUmNkRngwZlZ4eVhHNWNkRngwZlZ4eVhHNWNjbHh1WEhSY2RHWjFibU4wYVc5dUlITmxkRVZ5Y205eVJtOXlLR2x1Y0hWMExDQnRaWE56WVdkbEtTQjdYSEpjYmx4MFhIUmNkR052Ym5OMElHWnZjbTBnUFNCcGJuQjFkQzV3WVhKbGJuUkZiR1Z0Wlc1ME8xeHlYRzVjZEZ4MFhIUmpiMjV6ZENCemJXRnNiQ0E5SUdadmNtMHVjWFZsY25sVFpXeGxZM1J2Y2lnbmMyMWhiR3duS1R0Y2NseHVYSEpjYmx4MFhIUmNkSE50WVd4c0xtbHVibVZ5VkdWNGRDQTlJRzFsYzNOaFoyVTdYSEpjYmx4MFhIUmNkR1p2Y20wdVkyeGhjM05PWVcxbElEMGdKMlp2Y20xZlgyZHliM1Z3SUdWeWNtOXlKenRjY2x4dVhIUmNkSDFjY2x4dVhISmNibHgwWEhSbWRXNWpkR2x2YmlCelpYUlRkV05qWlhOelJtOXlLR2x1Y0hWMEtTQjdYSEpjYmx4MFhIUmNkR052Ym5OMElHWnZjbTBnUFNCcGJuQjFkQzV3WVhKbGJuUkZiR1Z0Wlc1ME8xeHlYRzVjZEZ4MFhIUm1iM0p0TG1Oc1lYTnpUbUZ0WlNBOUlDZG1iM0p0WDE5bmNtOTFjQ0J6ZFdOalpYTnpKenRjY2x4dVhIUmNkSDFjY2x4dVhISmNibHgwWEhSbWRXNWpkR2x2YmlCbGJXRnBiRWx6Vm1Gc2FXUW9aVzFoYVd3cElIdGNjbHh1WEhSY2RGeDBZMjl1YzNRZ2NtVWdQU0F2WGlnb1cxNDhQaWdwWEZ4YlhGeGRYRnhjWEM0c096cGNYSE5BWENKZEt5aGNYQzViWGp3K0tDbGNYRnRjWEYxY1hGeGNMaXc3T2x4Y2MwQmNJbDByS1NvcGZDaGNJaTRyWENJcEtVQW9LRnhjVzFzd0xUbGRlekVzTTMxY1hDNWJNQzA1WFhzeExETjlYRnd1V3pBdE9WMTdNU3d6ZlZ4Y0xsc3dMVGxkZXpFc00zMWRLWHdvS0Z0aExYcEJMVnBjWEMwd0xUbGRLMXhjTGlrclcyRXRla0V0V2wxN01peDlLU2trTHk1MFpYTjBLRnh5WEc1Y2RGeDBYSFJjZEdWdFlXbHNYSEpjYmx4MFhIUmNkQ2s3WEhKY2JseHlYRzVjZEZ4MFhIUnlaWFIxY200Z2NtVTdYSEpjYmx4MFhIUjlYSEpjYmx4MGZWeHlYRzU5S1R0Y2NseHVJaXdpWkc5amRXMWxiblF1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduUkU5TlEyOXVkR1Z1ZEV4dllXUmxaQ2NzSUdaMWJtTjBhVzl1SUNncElIdGNibHgwZDJsdVpHOTNMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMnh2WVdRbkxDQW9aU2tnUFQ0Z2UxeHVYSFJjZEdOdmJuTjBJSEJ5Wld4dllXUWdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtDY3VjSEpsYkc5aFpDY3BPMXh1WEc1Y2RGeDBjSEpsYkc5aFpDNWpiR0Z6YzB4cGMzUXVZV1JrS0Nkd2NtVnNiMkZrTFdacGJtbHphR1ZrSnlrN1hHNWNkSDBwTzF4dVhHNWNkR052Ym5OMElHSjBibE5qY205c2JGUnZWRzl3SUQwZ1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvSjJKMGJsTmpjbTlzYkZSdlZHOXdKeWs3WEc1Y2RHSjBibE5qY205c2JGUnZWRzl3TG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjJOc2FXTnJKeXdnS0dVcElEMCtJSHRjYmx4MFhIUjNhVzVrYjNjdWMyTnliMnhzVkc4b2UxeHVYSFJjZEZ4MGRHOXdPaUF3TEZ4dVhIUmNkRngwYkdWbWREb2dNQ3hjYmx4MFhIUmNkR0psYUdGMmFXOXlPaUFuYzIxdmIzUm9KeXhjYmx4MFhIUjlLVHRjYmx4MGZTazdYRzU5S1R0Y2JpSXNJbVJ2WTNWdFpXNTBMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMFJQVFVOdmJuUmxiblJNYjJGa1pXUW5MQ0JtZFc1amRHbHZiaUFvS1NCN1hISmNibHgwWTI5dWMzUWdibUYyUTI5dWRHRnBibVZ5SUQwZ1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvSjI1aGRpMWpiMjUwWVdsdVpYSW5LVHRjY2x4dVhIUmpiMjV6ZENCdFpXNTFRblJ1SUQwZ1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvSjIxbGJuVXRZblJ1SnlrN1hISmNibHgwWTI5dWMzUWdibUYyVEdsemRDQTlJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJDZVVsa0tDZHVZWFl0YkdsemRDY3BPMXh5WEc1Y2NseHVYSFIzYVc1a2IzY3VZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25jMk55YjJ4c0p5d2dLR1VwSUQwK0lIdGNjbHh1WEhSY2RHbG1JQ2hrYjJOMWJXVnVkQzVrYjJOMWJXVnVkRVZzWlcxbGJuUXVjMk55YjJ4c1ZHOXdJRDRnTUNrZ2UxeHlYRzVjZEZ4MFhIUnVZWFpEYjI1MFlXbHVaWEl1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25jM1JwWTJ0NUp5azdYSEpjYmx4MFhIUmNkR0owYmxOamNtOXNiRlJ2Vkc5d0xuTjBlV3hsTG05d1lXTnBkSGtnUFNBeE8xeHlYRzVjZEZ4MGZTQmxiSE5sSUh0Y2NseHVYSFJjZEZ4MGJtRjJRMjl1ZEdGcGJtVnlMbU5zWVhOelRHbHpkQzV5WlcxdmRtVW9KM04wYVdOcmVTY3BPMXh5WEc1Y2RGeDBYSFJpZEc1VFkzSnZiR3hVYjFSdmNDNXpkSGxzWlM1dmNHRmphWFI1SUQwZ01EdGNjbHh1WEhSY2RIMWNjbHh1WEhSOUtUdGNjbHh1WEhKY2JseDBiV1Z1ZFVKMGJpNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZGpiR2xqYXljc0lDaGxLU0E5UGlCN1hISmNibHgwWEhSdFpXNTFRblJ1TG1Oc1lYTnpUR2x6ZEM1MGIyZG5iR1VvSjJOc2FXTnJaV1FuS1R0Y2NseHVYSFJjZEc1aGRrTnZiblJoYVc1bGNpNWpiR0Z6YzB4cGMzUXVkRzluWjJ4bEtDZHZkbVZ5YkdGNUp5azdYSEpjYmx4MFhIUnVZWFpNYVhOMExtTnNZWE56VEdsemRDNTBiMmRuYkdVb0ozTm9iM2NuS1R0Y2NseHVYSFI5S1R0Y2NseHVmU2s3WEhKY2JpSXNJbVJ2WTNWdFpXNTBMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMFJQVFVOdmJuUmxiblJNYjJGa1pXUW5MQ0JtZFc1amRHbHZiaUFvS1NCN1hISmNibHgwTHk4Z1kyRnliM1Z6Wld4Y2NseHVYSFJqYjI1emRDQmpZWEp2ZFhObGJDQTlJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJDZVVsa0tDZGpZWEp2ZFhObGJDY3BPMXh5WEc1Y2RHTnZibk4wSUhCeVpYWkNkRzRnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2duY0hKbGRpY3BPMXh5WEc1Y2RHTnZibk4wSUc1bGVIUkNkRzRnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2duYm1WNGRDY3BPMXh5WEc1Y2RHTnZibk4wSUdOaGNtOTFjMlZzVlhKc0lEMGdKeTR2YW5NdlkyRnliM1Z6Wld3dWFuTnZiaWM3WEhKY2JseHlYRzVjZEd4bGRDQm1hWEp6ZEZOc2FXUmxPMXh5WEc1Y2RHeGxkQ0JzWVhOMFUyeHBaR1U3WEhKY2JseHlYRzVjZEdaMWJtTjBhVzl1SUdkbGRGTnNhV1JsYzBSaGRHRW9LU0I3WEhKY2JseDBYSFJ5WlhSMWNtNGdibVYzSUZCeWIyMXBjMlVvS0hKbGMyOXNkbVVzSUhKbGFtVmpkQ2tnUFQ0Z2UxeHlYRzVjZEZ4MFhIUm1aWFJqYUNoallYSnZkWE5sYkZWeWJDbGNjbHh1WEhSY2RGeDBYSFF1ZEdobGJpZ29jbVZ6Y0NrZ1BUNGdjbVZ6Y0M1cWMyOXVLQ2twWEhKY2JseDBYSFJjZEZ4MExuUm9aVzRvS0dSaGRHRXBJRDArSUhKbGMyOXNkbVVvWkdGMFlTa3BYSEpjYmx4MFhIUmNkRngwTG1OaGRHTm9LQ2hsY25JcElEMCtJSEpsYW1WamRDaGxjbklwS1R0Y2NseHVYSFJjZEgwcE8xeHlYRzVjZEgxY2NseHVYSEpjYmx4MFlYTjVibU1nWm5WdVkzUnBiMjRnWkdsemNHeGhlVU5oY205MWMyVnNLQ2tnZTF4eVhHNWNkRngwWTI5dWMzUWdaR0YwWVV4cGMzUWdQU0JoZDJGcGRDQm5aWFJUYkdsa1pYTkVZWFJoS0NrN1hISmNibHgwWEhSamIyNXpkQ0J6Ykdsa1pYTkJjbkpoZVNBOUlHUmhkR0ZNYVhOMExuTnNhV1JsY3p0Y2NseHVYSEpjYmx4MFhIUnpiR2xrWlhOQmNuSmhlUzVtYjNKRllXTm9LQ2h6Ykdsa1pTd2djMnhwWkdWT2RXMWlaWElwSUQwK0lIdGNjbHh1WEhSY2RGeDBibVYzVTJ4cFpHVWdQU0JrYjJOMWJXVnVkQzVqY21WaGRHVkZiR1Z0Wlc1MEtDZGthWFluS1R0Y2NseHVYSFJjZEZ4MGJtVjNVMnhwWkdVdVkyeGhjM05NYVhOMExtRmtaQ2duWTJGeWIzVnpaV3hmWDNOc2FXUmxKeWs3WEhKY2JseHlYRzVjZEZ4MFhIUnVaWGRUYkdsa1pTNXBibTVsY2toVVRVd2dQU0JnWEhKY2JseDBYSFJjZEZ4MFhIUmNkRHhrYVhZZ1kyeGhjM005WENKallYSnZkWE5sYkY5ZmFXMWhaMlV0WTI5dWRHRnBibVZ5WENJK1hISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFBHbHRaeUJ6Y21NOVhDSWtlM05zYVdSbExtbHRZV2RsZlZ3aUlHRnNkRDFjSW5Oc2FXUmxMV2x0WjF3aUlDOCtYSEpjYmx4MFhIUmNkRngwWEhSY2REd3ZaR2wyUGx4eVhHNWNkRngwWEhSY2RGeDBYSFE4WkdsMklHTnNZWE56UFZ3aVkyRnliM1Z6Wld4ZlgyTnZiblJsYm5SY0lqNWNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUThhREVnWTJ4aGMzTTlYQ0pqWVhKdmRYTmxiRjlmZEdsMGJHVmNJajRrZTNOc2FXUmxMblJwZEd4bGZUd3ZhREUrWEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwUEhBZ1kyeGhjM005WENKallYSnZkWE5sYkY5ZlpHVnpZMXdpUGlSN2MyeHBaR1V1WTI5dWRHVnVkSDA4TDNBK1hISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFBHSjFkSFJ2YmlCamJHRnpjejFjSW1obFlXUmxjbDlmYm1GMkxXUnZibUYwWlMxaWRHNGdZblYwZEc5dVhDSStYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBYSFJFZFdkdFpTQjZZU0J1WmNXaGRHOWNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUThMMkoxZEhSdmJqNWNjbHh1WEhSY2RGeDBYSFJjZEZ4MFBDOWthWFkrWEhKY2JseDBYSFJjZEdBN1hISmNibHh5WEc1Y2RGeDBYSFJqWVhKdmRYTmxiQzVoY0hCbGJtUkRhR2xzWkNodVpYZFRiR2xrWlNrN1hISmNibHh5WEc1Y2RGeDBYSFJwWmlBb2MyeHBaR1ZPZFcxaVpYSWdQVDA5SURBcElIdGNjbHh1WEhSY2RGeDBYSFJtYVhKemRGTnNhV1JsSUQwZ2JtVjNVMnhwWkdVN1hISmNibHgwWEhSY2RGeDBibVYzVTJ4cFpHVXVZMnhoYzNOTWFYTjBMbUZrWkNnbllXTjBhWFpsSnlrN1hISmNibHgwWEhSY2RIMGdaV3h6WlNCcFppQW9jMnhwWkdWT2RXMWlaWElnS3lBeElEMDlQU0JrWVhSaFRHbHpkQzV6Ykdsa1pYTXViR1Z1WjNSb0tTQjdYSEpjYmx4MFhIUmNkRngwYkdGemRGTnNhV1JsSUQwZ2JtVjNVMnhwWkdVN1hISmNibHgwWEhSY2RIMWNjbHh1WEhSY2RIMHBPMXh5WEc1Y2NseHVYSFJjZEc1bGVIUlRiR2xrWlNncE8xeHlYRzVjZEZ4MGNISmxkbWx2ZFhOVGJHbGtaU2dwTzF4eVhHNWNkSDFjY2x4dVhISmNibHgwWm5WdVkzUnBiMjRnYm1WNGRGTnNhV1JsS0NrZ2UxeHlYRzVjZEZ4MFkyOXVjM1FnYm1WNGRFSjBiaUE5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2R1WlhoMEp5azdYSEpjYmx4eVhHNWNkRngwYm1WNGRFSjBiaTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RqYkdsamF5Y3NJQ2hsS1NBOVBpQjdYSEpjYmx4MFhIUmNkR052Ym5OMElHRmpkR2wyWlZOc2FXUmxJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25MbU5oY205MWMyVnNYMTl6Ykdsa1pTNWhZM1JwZG1VbktUdGNjbHh1WEhKY2JseDBYSFJjZEd4bGRDQnVaWGgwVTJsaWJHbHVaeUE5SUdGamRHbDJaVk5zYVdSbExtNWxlSFJGYkdWdFpXNTBVMmxpYkdsdVp6dGNjbHh1WEhKY2JseDBYSFJjZEdsbUlDaHVaWGgwVTJsaWJHbHVaeUE5UFNCdWRXeHNLU0I3WEhKY2JseDBYSFJjZEZ4MGJtVjRkRk5wWW14cGJtY2dQU0JoWTNScGRtVlRiR2xrWlR0Y2NseHVYSFJjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkRngwYVdZZ0tHNWxlSFJUYVdKc2FXNW5MbU5zWVhOelRHbHpkQzVqYjI1MFlXbHVjeWduWTJGeWIzVnpaV3hmWDNOc2FXUmxKeWtwSUh0Y2NseHVYSFJjZEZ4MFhIUmhZM1JwZG1WVGJHbGtaUzVqYkdGemMweHBjM1F1Y21WdGIzWmxLQ2RoWTNScGRtVW5LVHRjY2x4dVhIUmNkRngwWEhSdVpYaDBVMmxpYkdsdVp5NWpiR0Z6YzB4cGMzUXVZV1JrS0NkaFkzUnBkbVVuS1R0Y2NseHVYSFJjZEZ4MGZWeHlYRzVjZEZ4MGZTazdYSEpjYmx4MGZWeHlYRzVjY2x4dVhIUm1kVzVqZEdsdmJpQndjbVYyYVc5MWMxTnNhV1JsS0NrZ2UxeHlYRzVjZEZ4MFkyOXVjM1FnY0hKbGRrSjBiaUE5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2R3Y21WMkp5azdYSEpjYmx4eVhHNWNkRngwY0hKbGRrSjBiaTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RqYkdsamF5Y3NJQ2hsS1NBOVBpQjdYSEpjYmx4MFhIUmNkR052Ym5OMElHRmpkR2wyWlZOc2FXUmxJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25MbU5oY205MWMyVnNYMTl6Ykdsa1pTNWhZM1JwZG1VbktUdGNjbHh1WEhKY2JseDBYSFJjZEd4bGRDQnVaWGgwVTJsaWJHbHVaeUE5SUdGamRHbDJaVk5zYVdSbExuQnlaWFpwYjNWelJXeGxiV1Z1ZEZOcFlteHBibWM3WEhKY2JseHlYRzVjZEZ4MFhIUnBaaUFvYm1WNGRGTnBZbXhwYm1jZ1BUMGdiblZzYkNrZ2UxeHlYRzVjZEZ4MFhIUmNkRzVsZUhSVGFXSnNhVzVuSUQwZ1lXTjBhWFpsVTJ4cFpHVTdYSEpjYmx4MFhIUmNkSDFjY2x4dVhISmNibHgwWEhSY2RHbG1JQ2h1WlhoMFUybGliR2x1Wnk1amJHRnpjMHhwYzNRdVkyOXVkR0ZwYm5Nb0oyTmhjbTkxYzJWc1gxOXpiR2xrWlNjcEtTQjdYSEpjYmx4MFhIUmNkRngwWVdOMGFYWmxVMnhwWkdVdVkyeGhjM05NYVhOMExuSmxiVzkyWlNnbllXTjBhWFpsSnlrN1hISmNibHgwWEhSY2RGeDBibVY0ZEZOcFlteHBibWN1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25ZV04wYVhabEp5azdYSEpjYmx4MFhIUmNkSDFjY2x4dVhIUmNkSDBwTzF4eVhHNWNkSDFjY2x4dVhISmNibHgwYVdZZ0tHTmhjbTkxYzJWc0lDRTlQU0J1ZFd4c0tTQjdYSEpjYmx4MFhIUW9ablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNkRngwWEhSa2FYTndiR0Y1UTJGeWIzVnpaV3dvS1R0Y2NseHVYSFJjZEgwcEtDazdYSEpjYmx4MGZWeHlYRzU5S1R0Y2NseHVJaXdpZDJsdVpHOTNMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMFJQVFVOdmJuUmxiblJNYjJGa1pXUW5MQ0JtZFc1amRHbHZiaUFvS1NCN1hISmNibHgwTHk4Z2RHRmljMXh5WEc1Y2RHTnZibk4wSUhSaFlreHBjM1JDZEc0Z1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5UVd4c0tDY3VkR0ZpWTJOdmNtUnBiMjVmWDJ4cGMzUXRZblJ1SnlrN1hISmNibHgwWTI5dWMzUWdkR0ZpY3lBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0pCYkd3b0p5NTBZV0pqWTI5eVpHbHZibDlmWTI5dWRHRnBibVZ5SnlrN1hISmNibHgwWTI5dWMzUWdkR0ZpWTJOdmNtUnBiMjVNYVhOMElEMGdaRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkRUo1U1dRb0ozUmhZbU5qYjNKa2FXOXVMV3hwYzNRbktUdGNjbHh1WEhSamIyNXpkQ0IwWVdKelEyOXVkR1Z1ZENBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0pCYkd3b0p5NTBZV0pqWTI5eVpHbHZibDlmZEdGaUxXbHVibVZ5SnlrN1hISmNibHgwWTI5dWMzUWdkR0ZpWTJOdmNtUnBiMjRnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2duZEdGaVkyTnZjbVJwYjI0bktUdGNjbHh1WEhKY2JseDBablZ1WTNScGIyNGdZV04wYVhaaGRHVlVZV0p6S0NrZ2UxeHlYRzVjZEZ4MGRHRmlUR2x6ZEVKMGJpNW1iM0pGWVdOb0tDaDBZV0lwSUQwK0lIdGNjbHh1WEhSY2RGeDBkR0ZpTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjJOc2FXTnJKeXdnS0dVcElEMCtJSHRjY2x4dVhIUmNkRngwWEhSamIyNXpkQ0IwWVdKT1lYWWdQU0IwWVdJdWNHRnlaVzUwUld4bGJXVnVkRHRjY2x4dVhIUmNkRngwWEhSamIyNXpkQ0IwWVdKelEyOXVkR0ZwYm1WeUlEMGdkR0ZpVG1GMkxuQmhjbVZ1ZEVWc1pXMWxiblF1Y0dGeVpXNTBSV3hsYldWdWREdGNjbHh1WEhSY2RGeDBYSFJqYjI1emRDQjBZV0pPZFcxaVpYSWdQU0IwWVdJdVpHRjBZWE5sZEM1bWIzSlVZV0k3WEhKY2JseDBYSFJjZEZ4MFkyOXVjM1FnZEdGaVZHOUJZM1JwZG1GMFpTQTlJSFJoWW5ORGIyNTBZV2x1WlhJdWNYVmxjbmxUWld4bFkzUnZjaWhjY2x4dVhIUmNkRngwWEhSY2RHQXVkR0ZpWTJOdmNtUnBiMjVmWDNSaFlsdGtZWFJoTFhSaFlqMWNJaVI3ZEdGaVRuVnRZbVZ5ZlZ3aVhXQmNjbHh1WEhSY2RGeDBYSFFwTzF4eVhHNWNjbHh1WEhSY2RGeDBYSFIwWVdKT1lYWXVjWFZsY25sVFpXeGxZM1J2Y2tGc2JDZ25MblJoWW1OamIzSmthVzl1WDE5c2FYTjBMV0owYmljcExtWnZja1ZoWTJnb0tHSjBiaWtnUFQ0Z2UxeHlYRzVjZEZ4MFhIUmNkRngwWW5SdUxtTnNZWE56VEdsemRDNXlaVzF2ZG1Vb0oyTjFjbkpsYm5RbktUdGNjbHh1WEhSY2RGeDBYSFI5S1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwZEdGaWMwTnZiblJoYVc1bGNpNXhkV1Z5ZVZObGJHVmpkRzl5UVd4c0tDY3VkR0ZpWTJOdmNtUnBiMjVmWDNSaFlpY3BMbVp2Y2tWaFkyZ29LSFJoWWlrZ1BUNGdlMXh5WEc1Y2RGeDBYSFJjZEZ4MGRHRmlMbU5zWVhOelRHbHpkQzV5WlcxdmRtVW9KMk4xY25KbGJuUW5LVHRjY2x4dVhIUmNkRngwWEhSOUtUdGNjbHh1WEhKY2JseDBYSFJjZEZ4MGRHRmlMbU5zWVhOelRHbHpkQzVoWkdRb0oyTjFjbkpsYm5RbktUdGNjbHh1WEhSY2RGeDBYSFIwWVdKVWIwRmpkR2wyWVhSbExtTnNZWE56VEdsemRDNWhaR1FvSjJOMWNuSmxiblFuS1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwYVdZZ0tIZHBibVJ2ZHk1cGJtNWxjbGRwWkhSb0lENDlJRFl3TUNrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwZEdGaWMwTnZiblJsYm5RdVptOXlSV0ZqYUNnb2RHRmljeWtnUFQ0Z2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhSMFlXSnpMbk4wZVd4bExtMWhlRWhsYVdkb2RDQTlJSFJoWW5NdWMyTnliMnhzU0dWcFoyaDBJQ3NnSjNCNEp6dGNjbHh1WEhSY2RGeDBYSFJjZEgwcE8xeHlYRzVjZEZ4MFhIUmNkSDFjY2x4dVhIUmNkRngwZlNrN1hISmNibHgwWEhSOUtUdGNjbHh1WEhKY2JseDBYSFJwWmlBb2RHRmlZMk52Y21ScGIyNU1hWE4wS1NCN1hISmNibHgwWEhSY2RIUmhZbk11Wm05eVJXRmphQ2dvZEdGaUtTQTlQaUI3WEhKY2JseDBYSFJjZEZ4MGRHRmlMbkYxWlhKNVUyVnNaV04wYjNJb0p5NTBZV0pqWTI5eVpHbHZibDlmYkdsemRDQXVkR0ZpWTJOdmNtUnBiMjVmWDJKMGJpY3BMbU5zYVdOcktDazdYSEpjYmx4MFhIUmNkSDBwTzF4eVhHNWNkRngwZlZ4eVhHNWNjbHh1WEhSY2RIZHBibVJ2ZHk1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkeVpYTnBlbVVuTENBb1pTa2dQVDRnZTF4eVhHNWNkRngwWEhScFppQW9kMmx1Wkc5M0xtbHVibVZ5VjJsa2RHZ2dQajBnTmpBd0tTQjdYSEpjYmx4MFhIUmNkRngwWVdOMGFYWmhkR1ZVWVdKektDazdYSEpjYmx4MFhIUmNkSDFjY2x4dVhIUmNkSDBwTzF4eVhHNWNkSDFjY2x4dVhISmNibHgwTHk4dkx5OGdZV05qYjNKa2FXOXVYSEpjYmx4MFkyOXVjM1FnWVdOamIzSmthVzl1UW5SdUlEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2tGc2JDZ25MbUZqWTI5eVpHbHZibDlmYkdsemRDMWlkRzRuS1R0Y2NseHVYSEpjYmx4MFpuVnVZM1JwYjI0Z1lXTjBhWFpoZEdWQlkyTnZjbVJwYjI0b0tTQjdYSEpjYmx4MFhIUmhZMk52Y21ScGIyNUNkRzR1Wm05eVJXRmphQ2dvWW5SdUtTQTlQaUI3WEhKY2JseDBYSFJjZEdKMGJpNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZGpiR2xqYXljc0lDZ3BJRDArSUh0Y2NseHVYSFJjZEZ4MFhIUXZMeUJqYUdWamF5Qm1iM0lnYjNCbGJpQmhZMk52Y21ScGIyNWNjbHh1WEhSY2RGeDBYSFJqYjI1emRDQmhZMk52Y21ScGIyNUNkRzVQY0dWdUlEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2loY2NseHVYSFJjZEZ4MFhIUmNkQ2N1WVdOamIzSmthVzl1WDE5c2FYTjBMV0owYmk1dmNHVnVKMXh5WEc1Y2RGeDBYSFJjZENrN1hISmNibHh5WEc1Y2RGeDBYSFJjZEdsbUlDaGhZMk52Y21ScGIyNUNkRzVQY0dWdUlDWW1JR0ZqWTI5eVpHbHZia0owYms5d1pXNGdJVDA5SUdKMGJpa2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MEx5OGdhV1lnZEdobGNtVWdhWE1nYjNCbGJpQjBhR1Z1SUhKbGJXOTJaU0J2Y0dWdUlHTnNZWE56SUdGdVpDQnpaWFFnYldGNGFHVnBaMmgwSUhSdklEQmNjbHh1WEhSY2RGeDBYSFJjZEdGalkyOXlaR2x2YmtKMGJrOXdaVzR1WTJ4aGMzTk1hWE4wTG5SdloyZHNaU2duYjNCbGJpY3BPMXh5WEc1Y2RGeDBYSFJjZEZ4MFlXTmpiM0prYVc5dVFuUnVUM0JsYmk1dVpYaDBSV3hsYldWdWRGTnBZbXhwYm1jdWMzUjViR1V1YldGNFNHVnBaMmgwSUQwZ01EdGNjbHh1WEhSY2RGeDBYSFI5WEhKY2JseHlYRzVjZEZ4MFhIUmNkQzh2SUhObGRDQnZjR1Z1SUdOc1lYTnpJSFJ2SUdWMlpYSjVJR05zYVdOclpXUWdZV05qYjNKa2FXOXVJR0owYmx4eVhHNWNkRngwWEhSY2RHSjBiaTVqYkdGemMweHBjM1F1ZEc5bloyeGxLQ2R2Y0dWdUp5azdYSEpjYmx4MFhIUmNkRngwWTI5dWMzUWdZV05qYjNKa2FXOXVRbTlrZVNBOUlHSjBiaTV1WlhoMFJXeGxiV1Z1ZEZOcFlteHBibWM3WEhKY2JseHlYRzVjZEZ4MFhIUmNkR2xtSUNoaWRHNHVZMnhoYzNOTWFYTjBMbU52Ym5SaGFXNXpLQ2R2Y0dWdUp5a3BJSHRjY2x4dVhIUmNkRngwWEhSY2RHRmpZMjl5WkdsdmJrSnZaSGt1YzNSNWJHVXViV0Y0U0dWcFoyaDBJRDBnWVdOamIzSmthVzl1UW05a2VTNXpZM0p2Ykd4SVpXbG5hSFFnS3lBbmNIZ25PMXh5WEc1Y2RGeDBYSFJjZEgwZ1pXeHpaU0I3WEhKY2JseDBYSFJjZEZ4MFhIUmhZMk52Y21ScGIyNUNiMlI1TG5OMGVXeGxMbTFoZUVobGFXZG9kQ0E5SURBN1hISmNibHgwWEhSY2RGeDBmVnh5WEc1Y2RGeDBYSFI5S1R0Y2NseHVYSFJjZEgwcE8xeHlYRzVjY2x4dVhIUmNkSGRwYm1SdmR5NWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZHlaWE5wZW1VbkxDQW9aU2tnUFQ0Z2UxeHlYRzVjZEZ4MFhIUnBaaUFvZDJsdVpHOTNMbWx1Ym1WeVYybGtkR2dnUENBMk1EQXBJSHRjY2x4dVhIUmNkRngwWEhSMFlXSnpRMjl1ZEdWdWRDNW1iM0pGWVdOb0tDaDBZV0p6S1NBOVBpQjdYSEpjYmx4MFhIUmNkRngwWEhSMFlXSnpMbk4wZVd4bExtMWhlRWhsYVdkb2RDQTlJREE3WEhKY2JseDBYSFJjZEZ4MFhIUnBaaUFvZEdGaWN5NXdjbVYyYVc5MWMwVnNaVzFsYm5SVGFXSnNhVzVuTG1Oc1lYTnpUR2x6ZEM1amIyNTBZV2x1Y3lnbmIzQmxiaWNwS1NCN1hISmNibHgwWEhSY2RGeDBYSFJjZEhSaFluTXVjSEpsZG1sdmRYTkZiR1Z0Wlc1MFUybGliR2x1Wnk1amJHRnpjMHhwYzNRdWNtVnRiM1psS0NkdmNHVnVKeWs3WEhKY2JseDBYSFJjZEZ4MFhIUjlYSEpjYmx4MFhIUmNkRngwZlNrN1hISmNibHgwWEhSY2RIMWNjbHh1WEhSY2RIMHBPMXh5WEc1Y2RIMWNjbHh1WEhKY2JseDBhV1lnS0hSaFltTmpiM0prYVc5dUtTQjdYSEpjYmx4MFhIUmhZM1JwZG1GMFpWUmhZbk1vS1R0Y2NseHVYSFJjZEdGamRHbDJZWFJsUVdOamIzSmthVzl1S0NrN1hISmNibHgwZlZ4eVhHNTlLVHRjY2x4dUlsMHNJbk52ZFhKalpWSnZiM1FpT2lJaWZRPT0ifQ==
