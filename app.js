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
				let btn = paginationButton(i, pageCount);

				btn.style.width = '0';
				btn.style.overflow = 'hidden';
				btn.style.margin = '0';

				wrapper.appendChild(btn);
			}

			let nextBtn = nextPage(pageCount);
			wrapper.appendChild(nextBtn);

			let prevBtn = prevPage(pageCount);
			wrapper.prepend(prevBtn);

			let currentBtnDogs = document.querySelector(
				'#dogs .pagination-btn.active'
			);
			let currentBtnCats = document.querySelector(
				'#cats .pagination-btn.active'
			);

			if (currentBtnDogs && currentBtnCats) {
				currentBtnDogs.classList.add('group');
				currentBtnDogs.nextElementSibling.classList.add('group');
				currentBtnDogs.nextElementSibling.nextElementSibling.classList.add(
					'group'
				);
				currentBtnDogs.previousElementSibling.classList.add('group');

				currentBtnCats.classList.add('group');
				currentBtnCats.nextElementSibling.classList.add('group');
				currentBtnCats.nextElementSibling.nextElementSibling.classList.add(
					'group'
				);
				currentBtnCats.previousElementSibling.classList.add('group');
			}
		}

		function nextPage(pageCount) {
			let nextBtn = document.createElement('button');
			nextBtn.classList.add('next');
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

					if (currentPage === pageCount) {
						nextBtn.style.opacity = '0.5';
						nextBtn.style.pointerEvents = 'none';
					}

					let prevBtn = document.querySelector('#dogs .prev');

					if (currentPage !== 1) {
						prevBtn.style.opacity = '1';
						prevBtn.style.pointerEvents = 'all';
					}

					if (activeBtnDog) {
						activeBtnDog.classList.add('group');
						activeBtnDog.nextElementSibling.classList.add('group');
						activeBtnDog.previousElementSibling.classList.add('group');
					}
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

					if (currentPage === pageCount) {
						nextBtn.style.opacity = '0.5';
						nextBtn.style.pointerEvents = 'none';
					}

					let prevBtn = document.querySelector('#cats .prev');

					if (currentPage !== 1) {
						prevBtn.style.opacity = '1';
						prevBtn.style.pointerEvents = 'all';
					}

					if (activeBtnCat) {
						activeBtnCat.classList.add('group');
						activeBtnCat.nextElementSibling.classList.add('group');
						activeBtnCat.previousElementSibling.classList.add('group');
					}
				}
			});

			return nextBtn;
		}

		function prevPage(pageCount) {
			let prevBtn = document.createElement('button');
			prevBtn.classList.add('prev');
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

					let nextBtn = document.querySelector('#dogs .next');

					if (currentPage !== pageCount) {
						nextBtn.style.opacity = '1';
						nextBtn.style.pointerEvents = 'all';
					}

					if (currentPage === 1) {
						prevBtn.style.opacity = '0.5';
						prevBtn.style.pointerEvents = 'none';
					}

					if (activeBtnDog) {
						activeBtnDog.classList.add('group');
						activeBtnDog.nextElementSibling.classList.add('group');
						activeBtnDog.previousElementSibling.classList.add('group');
					}
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

					let nextBtn = document.querySelector('#cats .next');

					if (currentPage !== pageCount) {
						nextBtn.style.opacity = '1';
						nextBtn.style.pointerEvents = 'all';
					}

					if (currentPage === 1) {
						prevBtn.style.opacity = '0.5';
						prevBtn.style.pointerEvents = 'none';
					}

					if (activeBtnCat) {
						activeBtnCat.classList.add('group');
						activeBtnCat.nextElementSibling.classList.add('group');
						activeBtnCat.previousElementSibling.classList.add('group');
					}
				}
			});

			if (currentPage === 1) {
				prevBtn.style.opacity = '0.5';
				prevBtn.style.pointerEvents = 'none';
			}

			return prevBtn;
		}

		function paginationButton(page, pageCount) {
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

					let nextBtn = document.querySelector('#dogs .next');

					if (currentPage === pageCount) {
						nextBtn.style.opacity = '0.5';
						nextBtn.style.pointerEvents = 'none';
					} else {
						nextBtn.style.opacity = '1';
						nextBtn.style.pointerEvents = 'all';
					}

					let prevBtn = document.querySelector('#dogs .prev');

					if (currentPage === 1) {
						prevBtn.style.opacity = '0.5';
						prevBtn.style.pointerEvents = 'none';
					} else {
						prevBtn.style.opacity = '1';
						prevBtn.style.pointerEvents = 'all';
					}
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

					let nextBtn = document.querySelector('#cats .next');

					if (currentPage === pageCount) {
						nextBtn.style.opacity = '0.5';
						nextBtn.style.pointerEvents = 'none';
					} else {
						nextBtn.style.opacity = '1';
						nextBtn.style.pointerEvents = 'all';
					}

					let prevBtn = document.querySelector('#cats .prev');

					if (currentPage === 1) {
						prevBtn.style.opacity = '0.5';
						prevBtn.style.pointerEvents = 'none';
					} else {
						prevBtn.style.opacity = '1';
						prevBtn.style.pointerEvents = 'all';
					}
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Fkb3B0Q29udGVudFN3aXRjaGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9mZXRjaEFuaW1hbHNEYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9mb3JtVmFsaWRhaXRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbmF2LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RhYmNjb3JkaW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRztBQUNILEVBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOERBQThELE9BQU87QUFDckU7QUFDQSxnQ0FBZ0MsT0FBTztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ2pDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx5Q0FBeUMsVUFBVSxTQUFTLFNBQVM7QUFDckU7QUFDQSxLQUFLLEVBQUU7QUFDUDtBQUNBO0FBQ0EsMERBQTBELFNBQVM7QUFDbkU7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLEVBQUUsV0FBVztBQUM5QjtBQUNBLDBDQUEwQztBQUMxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0UsWUFBWTtBQUM1RTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRSxNQUFNO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxrQ0FBa0M7QUFDakY7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGtDQUFrQztBQUNqRjtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0Msa0NBQWtDO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHlDQUF5QyxVQUFVLFNBQVMsU0FBUztBQUNyRTtBQUNBLEtBQUssRUFBRTtBQUNQO0FBQ0E7QUFDQSwwREFBMEQsU0FBUztBQUNuRTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsRUFBRSxXQUFXO0FBQzlCO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxZQUFZO0FBQzVFO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFLFNBQVM7QUFDbkY7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGtDQUFrQztBQUNqRjtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0Msa0NBQWtDO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxrQ0FBa0M7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBOztBQUVBOztBQUVBLGtCQUFrQixtQkFBbUI7QUFDckM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQy9sQkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUMseUJBQXlCLDZCQUE2QixJQUFJLFFBQVEsSUFBSSxRQUFRLElBQUksUUFBUSxJQUFJLGdDQUFnQyxHQUFHO0FBQ2xLO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDdkZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRixDQUFDOzs7Ozs7Ozs7Ozs7QUNmRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7Ozs7Ozs7Ozs7OztBQ3BCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBLHFDQUFxQyxZQUFZO0FBQ2pELG1DQUFtQyxjQUFjO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDakdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLFVBQVU7QUFDOUM7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxJQUFJO0FBQ0osR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuXHRoaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBudWxsLCAnICcpO1xyXG5cdGNvbnN0IHRhYlN3aXRjaGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXN3aXRjaGVyXScpO1xyXG5cclxuXHR0YWJTd2l0Y2hlcnMuZm9yRWFjaCgodGFiU3dpdGNoKSA9PiB7XHJcblx0XHRjb25zdCB0YWJTd2l0Y2hlciA9IHRhYlN3aXRjaDtcclxuXHRcdGNvbnN0IHBhZ2VJZCA9IHRhYlN3aXRjaGVyLmRhdGFzZXQudGFiO1xyXG5cclxuXHRcdHRhYlN3aXRjaGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHRcdFx0ZG9jdW1lbnRcclxuXHRcdFx0XHQucXVlcnlTZWxlY3RvcignLmFkb3B0X19saXN0LWl0ZW0uYWN0aXZlJylcclxuXHRcdFx0XHQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblxyXG5cdFx0XHR0YWJTd2l0Y2hlci5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRzd2l0Y2hQYWdlKHBhZ2VJZCk7XHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHJcblx0ZnVuY3Rpb24gc3dpdGNoUGFnZShwYWdlSWQpIHtcclxuXHRcdGNvbnN0IGN1cnJlbnRQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UuYWN0aXZlJyk7XHJcblx0XHRjb25zdCBjdXJyZW50UGFnZUhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLWhlYWRlci5hY3RpdmUnKTtcclxuXHJcblx0XHRjdXJyZW50UGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdGN1cnJlbnRQYWdlSGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cclxuXHRcdGNvbnN0IG5leHRQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBhZ2VbZGF0YS1wYWdlPVwiJHtwYWdlSWR9XCJdYCk7XHJcblx0XHRjb25zdCBuZXh0UGFnZUhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdGAucGFnZS1oZWFkZXJbZGF0YS1oZWFkZXI9XCIke3BhZ2VJZH1cIl1gXHJcblx0XHQpO1xyXG5cdFx0bmV4dFBhZ2UuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblx0XHRuZXh0UGFnZUhlYWRlci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHR9XHJcbn0pO1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IGFuaW1hbHNVcmwgPSAnLi4vanMvYW5pbWFscy5qc29uJztcclxuXHRjb25zdCBhbmltYWxzUGFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5pbWFscy1wYWdlcycpO1xyXG5cdGNvbnN0IGRvZ3NCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG9ncy1ib3gnKTtcclxuXHRjb25zdCBjYXRzQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdHMtYm94Jyk7XHJcblxyXG5cdGZ1bmN0aW9uIGdldEFuaW1hbHNEYXRhKCkge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0ZmV0Y2goYW5pbWFsc1VybClcclxuXHRcdFx0XHQudGhlbigocmVzcCkgPT4gcmVzcC5qc29uKCkpXHJcblx0XHRcdFx0LnRoZW4oKGRhdGEpID0+IHJlc29sdmUoZGF0YSkpXHJcblx0XHRcdFx0LmNhdGNoKChlcnIpID0+IHJlamVjdChlcnIpKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgZG9nTnVtYmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RvZ051bWJlcicpO1xyXG5cdGNvbnN0IGNhdE51bWJlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXROdW1iZXInKTtcclxuXHJcblx0YXN5bmMgZnVuY3Rpb24gZGlzcGxheUFuaW1hbE51bWJlcnMoKSB7XHJcblx0XHRjb25zdCBkYXRhTGlzdCA9IGF3YWl0IGdldEFuaW1hbHNEYXRhKCk7XHJcblx0XHRjb25zdCBhbmltYWxzQXJyYXkgPSBkYXRhTGlzdC5hbmltYWxzO1xyXG5cclxuXHRcdGxldCBkb2dzQXJyYXlOdW1iZXIgPSBhbmltYWxzQXJyYXlbMF0uZG9ncy5sZW5ndGg7XHJcblx0XHRsZXQgY2F0c0FycmF5TnVtYmVyID0gYW5pbWFsc0FycmF5WzBdLmNhdHMubGVuZ3RoO1xyXG5cclxuXHRcdGRvZ051bWJlci5pbm5lclRleHQgPSBkb2dzQXJyYXlOdW1iZXI7XHJcblx0XHRjYXROdW1iZXIuaW5uZXJUZXh0ID0gY2F0c0FycmF5TnVtYmVyO1xyXG5cdH1cclxuXHJcblx0aWYgKChkb2dOdW1iZXIsIGNhdE51bWJlcikpIHtcclxuXHRcdChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGRpc3BsYXlBbmltYWxOdW1iZXJzKCk7XHJcblx0XHR9KSgpO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgZnVuY3Rpb24gZGlzcGxheUFuaW1hbHMoKSB7XHJcblx0XHRjb25zdCBkYXRhTGlzdCA9IGF3YWl0IGdldEFuaW1hbHNEYXRhKCk7XHJcblx0XHRjb25zdCBhbmltYWxzQXJyYXkgPSBkYXRhTGlzdC5hbmltYWxzO1xyXG5cclxuXHRcdGFuaW1hbHNBcnJheS5mb3JFYWNoKChhbmltYWwpID0+IHtcclxuXHRcdFx0ZG9nc0FycmF5ID0gYW5pbWFsLmRvZ3M7XHJcblx0XHRcdGNhdHNBcnJheSA9IGFuaW1hbC5jYXRzO1xyXG5cclxuXHRcdFx0ZG9nc0FycmF5LmZvckVhY2goKGRvZykgPT4ge1xyXG5cdFx0XHRcdGRvZ0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0XHRcdGRvZ0JveC5jbGFzc0xpc3QuYWRkKCdwYWdlX19ib3gnKTtcclxuXHJcblx0XHRcdFx0Y29uc3QgZG9nWWVhcnMgPSBkb2cuYmlydGg7XHJcblxyXG5cdFx0XHRcdGNvbnN0IG1pbGlzZWNzQmV0d2VlbkRPQmFuZDE5NzAgPSBEYXRlLnBhcnNlKGRvZ1llYXJzKTtcclxuXHRcdFx0XHRjb25zdCBtaWxpc2Vjc0JldHdlZW5OT1dhbmQxOTcwID0gRGF0ZS5ub3coKTtcclxuXHRcdFx0XHRjb25zdCBhZ2VJbk1pbGlzZWNzID1cclxuXHRcdFx0XHRcdG1pbGlzZWNzQmV0d2Vlbk5PV2FuZDE5NzAgLSBtaWxpc2Vjc0JldHdlZW5ET0JhbmQxOTcwO1xyXG5cclxuXHRcdFx0XHRjb25zdCBtaWxpc2VjcyA9IGFnZUluTWlsaXNlY3M7XHJcblx0XHRcdFx0Y29uc3Qgc2VjcyA9IDEwMDA7XHJcblx0XHRcdFx0Y29uc3QgbWlucyA9IHNlY3MgKiA2MDtcclxuXHRcdFx0XHRjb25zdCBob3VyID0gbWlucyAqIDYwO1xyXG5cdFx0XHRcdGNvbnN0IGRheSA9IGhvdXIgKiAyNDtcclxuXHRcdFx0XHRjb25zdCB5ZWFyID0gZGF5ICogMzY1O1xyXG5cclxuXHRcdFx0XHRsZXQgeWVhcnMgPSBNYXRoLnJvdW5kKG1pbGlzZWNzIC8geWVhcik7XHJcblxyXG5cdFx0XHRcdGRvZ0JveC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlX19ib3gtdG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4ke2RvZy5pbWFnZX1cIiBhbHQ9XCIke2RvZy5uYW1lfSAke1xyXG5cdFx0XHRcdFx0ZG9nLnNwZWNpZXNcclxuXHRcdFx0XHR9XCJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlX19ib3gtYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJwYWdlX19ib3gtdGl0bGVcIj4ke2RvZy5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZV9fYm94LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXhwYW5kTW9yZUNvbnRlbnRcIiBpZD1cInNob3dNb3JlLSR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkb2cuc3BlY2llc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0ke2RvZy5udW1iZXJ9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicGFnZV9fYm94LXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7ZG9nLmRlc2N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleHBhbmRNb3JlSG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZC1tb3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWhpZGV0ZXh0PVwiLi4uUmVhZCBsZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtc2hvd3RleHQ9XCIuLi5SZWFkIG1vcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCJzaG93TW9yZS0ke2RvZy5zcGVjaWVzfSR7XHJcblx0XHRcdFx0XHRkb2cubnVtYmVyXHJcblx0XHRcdFx0fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ1dHRvbiBzaG93TW9yZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLlJlYWQgbW9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJwYWdlX19ib3gtaWNvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS13ZWlnaHRcIj48L2lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxzcGFuIGNsYXNzPVwicGFnZV9fYm94LWljb24tLXRleHRcIj4ke1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRvZy53ZWlnaHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSBrZzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VfX2JveC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWFycm93cy1hbHQtdlwiPjwvaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PHNwYW4gY2xhc3M9XCJwYWdlX19ib3gtaWNvbi0tdGV4dFwiPiR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZG9nLmhlaWdodFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9Y208L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jYWxlbmRhci1jaGVja1wiPjwvaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PHNwYW4gY2xhc3M9XCJwYWdlX19ib3gtaWNvbi0tdGV4dFwiPiR7eWVhcnN9IHlyLjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VfX2JveC1pY29uXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVwiZmFzIGZhLXBhbGV0dGVcIj48L2lcclxuXHRcdFx0XHRcdFx0XHRcdFx0PjxzcGFuIGNsYXNzPVwicGFnZV9fYm94LWljb24tLXRleHRcIj4ke2RvZy5jb2xvclswXSA/IGRvZy5jb2xvclswXSA6ICctJ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cImZhcyBmYS1wYWxldHRlXCI+PC9pXHJcblx0XHRcdFx0XHRcdFx0XHRcdD48c3BhbiBjbGFzcz1cInBhZ2VfX2JveC1pY29uLS10ZXh0XCI+JHtkb2cuY29sb3JbMV0gPyBkb2cuY29sb3JbMV0gOiAnLSd9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZV9fYm94LWljb25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJmYXMgZmEtcGFsZXR0ZVwiPjwvaVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+PHNwYW4gY2xhc3M9XCJwYWdlX19ib3gtaWNvbi0tdGV4dFwiPiR7ZG9nLmNvbG9yWzJdID8gZG9nLmNvbG9yWzJdIDogJy0nfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZV9fYm94LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtcGF3XCI+PC9pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48c3BhbiBjbGFzcz1cInBhZ2VfX2JveC1pY29uLS10ZXh0XCI+JHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkb2cuY29hdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZV9fYm94LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdmVudXMtbWFyc1wiPjwvaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PHNwYW4gY2xhc3M9XCJwYWdlX19ib3gtaWNvbi0tdGV4dFwiPiR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZG9nLmdlbmRlclxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIGA7XHJcblxyXG5cdFx0XHRcdGRvZ3NCb3guYXBwZW5kQ2hpbGQoZG9nQm94KTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRjYXRzQXJyYXkuZm9yRWFjaCgoY2F0KSA9PiB7XHJcblx0XHRcdFx0Y2F0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRcdFx0Y2F0Qm94LmNsYXNzTGlzdC5hZGQoJ3BhZ2VfX2JveCcpO1xyXG5cclxuXHRcdFx0XHRjb25zdCBjYXRZZWFycyA9IGNhdC5iaXJ0aDtcclxuXHJcblx0XHRcdFx0Y29uc3QgbWlsaXNlY3NCZXR3ZWVuRE9CYW5kMTk3MGNhdCA9IERhdGUucGFyc2UoY2F0WWVhcnMpO1xyXG5cdFx0XHRcdGNvbnN0IG1pbGlzZWNzQmV0d2Vlbk5PV2FuZDE5NzAgPSBEYXRlLm5vdygpO1xyXG5cclxuXHRcdFx0XHRjb25zdCBhZ2VJbk1pbGlzZWNzQ2F0ID1cclxuXHRcdFx0XHRcdG1pbGlzZWNzQmV0d2Vlbk5PV2FuZDE5NzAgLSBtaWxpc2Vjc0JldHdlZW5ET0JhbmQxOTcwY2F0O1xyXG5cclxuXHRcdFx0XHRjb25zdCBtaWxpc2Vjc0NhdCA9IGFnZUluTWlsaXNlY3NDYXQ7XHJcblx0XHRcdFx0Y29uc3Qgc2VjcyA9IDEwMDA7XHJcblx0XHRcdFx0Y29uc3QgbWlucyA9IHNlY3MgKiA2MDtcclxuXHRcdFx0XHRjb25zdCBob3VyID0gbWlucyAqIDYwO1xyXG5cdFx0XHRcdGNvbnN0IGRheSA9IGhvdXIgKiAyNDtcclxuXHRcdFx0XHRjb25zdCB5ZWFyID0gZGF5ICogMzY1O1xyXG5cclxuXHRcdFx0XHRsZXQgeWVhcnNDYXQgPSBNYXRoLnJvdW5kKG1pbGlzZWNzQ2F0IC8geWVhcik7XHJcblxyXG5cdFx0XHRcdGNhdEJveC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlX19ib3gtdG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4ke2NhdC5pbWFnZX1cIiBhbHQ9XCIke2NhdC5uYW1lfSAke1xyXG5cdFx0XHRcdFx0Y2F0LnNwZWNpZXNcclxuXHRcdFx0XHR9XCJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlX19ib3gtYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJwYWdlX19ib3gtdGl0bGVcIj4ke2NhdC5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZV9fYm94LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXhwYW5kTW9yZUNvbnRlbnRcIiBpZD1cInNob3dNb3JlLSR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjYXQuc3BlY2llc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0ke2NhdC5udW1iZXJ9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicGFnZV9fYm94LXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7Y2F0LmRlc2N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleHBhbmRNb3JlSG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZC1tb3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWhpZGV0ZXh0PVwiLi4uUmVhZCBsZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtc2hvd3RleHQ9XCIuLi5SZWFkIG1vcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCJzaG93TW9yZS0ke2NhdC5zcGVjaWVzfSR7XHJcblx0XHRcdFx0XHRjYXQubnVtYmVyXHJcblx0XHRcdFx0fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ1dHRvbiBzaG93TW9yZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLlJlYWQgbW9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJwYWdlX19ib3gtaWNvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS13ZWlnaHRcIj48L2lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxzcGFuIGNsYXNzPVwicGFnZV9fYm94LWljb24tLXRleHRcIj4ke1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNhdC53ZWlnaHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSBrZzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VfX2JveC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWFycm93cy1hbHQtdlwiPjwvaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PHNwYW4gY2xhc3M9XCJwYWdlX19ib3gtaWNvbi0tdGV4dFwiPiR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2F0LmhlaWdodFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9Y208L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jYWxlbmRhci1jaGVja1wiPjwvaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PHNwYW4gY2xhc3M9XCJwYWdlX19ib3gtaWNvbi0tdGV4dFwiPiR7eWVhcnNDYXR9IHlyLjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VfX2JveC1pY29uXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVwiZmFzIGZhLXBhbGV0dGVcIj48L2lcclxuXHRcdFx0XHRcdFx0XHRcdFx0PjxzcGFuIGNsYXNzPVwicGFnZV9fYm94LWljb24tLXRleHRcIj4ke2NhdC5jb2xvclswXSA/IGNhdC5jb2xvclswXSA6ICctJ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cImZhcyBmYS1wYWxldHRlXCI+PC9pXHJcblx0XHRcdFx0XHRcdFx0XHRcdD48c3BhbiBjbGFzcz1cInBhZ2VfX2JveC1pY29uLS10ZXh0XCI+JHtjYXQuY29sb3JbMV0gPyBjYXQuY29sb3JbMV0gOiAnLSd9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZV9fYm94LWljb25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJmYXMgZmEtcGFsZXR0ZVwiPjwvaVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+PHNwYW4gY2xhc3M9XCJwYWdlX19ib3gtaWNvbi0tdGV4dFwiPiR7Y2F0LmNvbG9yWzJdID8gY2F0LmNvbG9yWzJdIDogJy0nfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZV9fYm94LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtcGF3XCI+PC9pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48c3BhbiBjbGFzcz1cInBhZ2VfX2JveC1pY29uLS10ZXh0XCI+JHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjYXQuY29hdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZV9fYm94LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdmVudXMtbWFyc1wiPjwvaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PHNwYW4gY2xhc3M9XCJwYWdlX19ib3gtaWNvbi0tdGV4dFwiPiR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2F0LmdlbmRlclxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIGA7XHJcblxyXG5cdFx0XHRcdGNhdHNCb3guYXBwZW5kQ2hpbGQoY2F0Qm94KTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRsZXQgZG9nQm94QXJyYXkgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2RvZ3MtYm94IC5wYWdlX19ib3gnKV07XHJcblx0XHRsZXQgY2F0Qm94QXJyYXkgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NhdHMtYm94IC5wYWdlX19ib3gnKV07XHJcblx0XHRsZXQgY3VycmVudFBhZ2UgPSAxO1xyXG5cdFx0bGV0IGVsZW1lbnRzT25QYWdlID0gNDtcclxuXHJcblx0XHRjb25zdCBwYWdpbmF0aW9uRWxEb2dzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RvZ3MtcGFnaW5hdGlvbicpO1xyXG5cdFx0Y29uc3QgcGFnaW5hdGlvbkVsQ2F0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRzLXBhZ2luYXRpb24nKTtcclxuXHJcblx0XHRmdW5jdGlvbiBkaXNwbGF5UGFnaW5hdGVkSXRlbXMoaXRlbXMsIHdyYXBwZXIsIGl0ZW1zUGVyUGFnZSwgcGFnZSkge1xyXG5cdFx0XHR3cmFwcGVyLmlubmVySFRNTCA9ICcnO1xyXG5cdFx0XHRwYWdlLS07XHJcblxyXG5cdFx0XHRsZXQgc3RhcnQgPSBpdGVtc1BlclBhZ2UgKiBwYWdlO1xyXG5cdFx0XHRsZXQgZW5kID0gc3RhcnQgKyBpdGVtc1BlclBhZ2U7XHJcblx0XHRcdGxldCBwYWdpbmF0ZWRJdGVtcyA9IGl0ZW1zLnNsaWNlKHN0YXJ0LCBlbmQpO1xyXG5cclxuXHRcdFx0cGFnaW5hdGVkSXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG5cdFx0XHRcdGxldCBpdGVtRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdFx0XHRpdGVtRWwuY2xhc3NMaXN0LmFkZCgncGFnZV9fYm94Jyk7XHJcblxyXG5cdFx0XHRcdGl0ZW1FbCA9IGl0ZW07XHJcblxyXG5cdFx0XHRcdHdyYXBwZXIuYXBwZW5kQ2hpbGQoaXRlbUVsKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gZGlzcGxheVBhZ2luYXRpb24oaXRlbXMsIHdyYXBwZXIsIGl0ZW1zUGVyUGFnZSkge1xyXG5cdFx0XHR3cmFwcGVyLmlubmVySFRNTCA9ICcnO1xyXG5cclxuXHRcdFx0bGV0IHBhZ2VDb3VudCA9IE1hdGguY2VpbChpdGVtcy5sZW5ndGggLyBpdGVtc1BlclBhZ2UpO1xyXG5cclxuXHRcdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCBwYWdlQ291bnQgKyAxOyBpKyspIHtcclxuXHRcdFx0XHRsZXQgYnRuID0gcGFnaW5hdGlvbkJ1dHRvbihpLCBwYWdlQ291bnQpO1xyXG5cclxuXHRcdFx0XHRidG4uc3R5bGUud2lkdGggPSAnMCc7XHJcblx0XHRcdFx0YnRuLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcblx0XHRcdFx0YnRuLnN0eWxlLm1hcmdpbiA9ICcwJztcclxuXHJcblx0XHRcdFx0d3JhcHBlci5hcHBlbmRDaGlsZChidG4pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRsZXQgbmV4dEJ0biA9IG5leHRQYWdlKHBhZ2VDb3VudCk7XHJcblx0XHRcdHdyYXBwZXIuYXBwZW5kQ2hpbGQobmV4dEJ0bik7XHJcblxyXG5cdFx0XHRsZXQgcHJldkJ0biA9IHByZXZQYWdlKHBhZ2VDb3VudCk7XHJcblx0XHRcdHdyYXBwZXIucHJlcGVuZChwcmV2QnRuKTtcclxuXHJcblx0XHRcdGxldCBjdXJyZW50QnRuRG9ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdFx0JyNkb2dzIC5wYWdpbmF0aW9uLWJ0bi5hY3RpdmUnXHJcblx0XHRcdCk7XHJcblx0XHRcdGxldCBjdXJyZW50QnRuQ2F0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdFx0JyNjYXRzIC5wYWdpbmF0aW9uLWJ0bi5hY3RpdmUnXHJcblx0XHRcdCk7XHJcblxyXG5cdFx0XHRpZiAoY3VycmVudEJ0bkRvZ3MgJiYgY3VycmVudEJ0bkNhdHMpIHtcclxuXHRcdFx0XHRjdXJyZW50QnRuRG9ncy5jbGFzc0xpc3QuYWRkKCdncm91cCcpO1xyXG5cdFx0XHRcdGN1cnJlbnRCdG5Eb2dzLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdncm91cCcpO1xyXG5cdFx0XHRcdGN1cnJlbnRCdG5Eb2dzLm5leHRFbGVtZW50U2libGluZy5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZChcclxuXHRcdFx0XHRcdCdncm91cCdcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdGN1cnJlbnRCdG5Eb2dzLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnZ3JvdXAnKTtcclxuXHJcblx0XHRcdFx0Y3VycmVudEJ0bkNhdHMuY2xhc3NMaXN0LmFkZCgnZ3JvdXAnKTtcclxuXHRcdFx0XHRjdXJyZW50QnRuQ2F0cy5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnZ3JvdXAnKTtcclxuXHRcdFx0XHRjdXJyZW50QnRuQ2F0cy5uZXh0RWxlbWVudFNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoXHJcblx0XHRcdFx0XHQnZ3JvdXAnXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHRjdXJyZW50QnRuQ2F0cy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2dyb3VwJyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBuZXh0UGFnZShwYWdlQ291bnQpIHtcclxuXHRcdFx0bGV0IG5leHRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHRcdFx0bmV4dEJ0bi5jbGFzc0xpc3QuYWRkKCduZXh0Jyk7XHJcblx0XHRcdG5leHRCdG4uaW5uZXJUZXh0ID0gJz4nO1xyXG5cdFx0XHRuZXh0QnRuLmNsYXNzTGlzdC5hZGQoJ3BhZ2luYXRpb24tYnRuJyk7XHJcblxyXG5cdFx0XHRuZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHRcdFx0XHRpZiAobmV4dEJ0bi5wYXJlbnRFbGVtZW50ID09IHBhZ2luYXRpb25FbERvZ3MpIHtcclxuXHRcdFx0XHRcdGRpc3BsYXlQYWdpbmF0ZWRJdGVtcyhcclxuXHRcdFx0XHRcdFx0ZG9nQm94QXJyYXksXHJcblx0XHRcdFx0XHRcdGRvZ3NCb3gsXHJcblx0XHRcdFx0XHRcdGVsZW1lbnRzT25QYWdlLFxyXG5cdFx0XHRcdFx0XHRjdXJyZW50UGFnZVxyXG5cdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHRsZXQgYWN0aXZlQnRuRG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuXHRcdFx0XHRcdFx0JyNkb2dzIC5wYWdpbmF0aW9uLWJ0bi5hY3RpdmUnXHJcblx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdGFjdGl2ZUJ0bkRvZy5uZXh0RWxlbWVudFNpYmxpbmcuY2xpY2soKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoY3VycmVudFBhZ2UgPT09IHBhZ2VDb3VudCkge1xyXG5cdFx0XHRcdFx0XHRuZXh0QnRuLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcclxuXHRcdFx0XHRcdFx0bmV4dEJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGxldCBwcmV2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RvZ3MgLnByZXYnKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoY3VycmVudFBhZ2UgIT09IDEpIHtcclxuXHRcdFx0XHRcdFx0cHJldkJ0bi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG5cdFx0XHRcdFx0XHRwcmV2QnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYWxsJztcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRpZiAoYWN0aXZlQnRuRG9nKSB7XHJcblx0XHRcdFx0XHRcdGFjdGl2ZUJ0bkRvZy5jbGFzc0xpc3QuYWRkKCdncm91cCcpO1xyXG5cdFx0XHRcdFx0XHRhY3RpdmVCdG5Eb2cubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2dyb3VwJyk7XHJcblx0XHRcdFx0XHRcdGFjdGl2ZUJ0bkRvZy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2dyb3VwJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAobmV4dEJ0bi5wYXJlbnRFbGVtZW50ID09IHBhZ2luYXRpb25FbENhdHMpIHtcclxuXHRcdFx0XHRcdGRpc3BsYXlQYWdpbmF0ZWRJdGVtcyhcclxuXHRcdFx0XHRcdFx0Y2F0Qm94QXJyYXksXHJcblx0XHRcdFx0XHRcdGNhdHNCb3gsXHJcblx0XHRcdFx0XHRcdGVsZW1lbnRzT25QYWdlLFxyXG5cdFx0XHRcdFx0XHRjdXJyZW50UGFnZVxyXG5cdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHRsZXQgYWN0aXZlQnRuQ2F0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuXHRcdFx0XHRcdFx0JyNjYXRzIC5wYWdpbmF0aW9uLWJ0bi5hY3RpdmUnXHJcblx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdGFjdGl2ZUJ0bkNhdC5uZXh0RWxlbWVudFNpYmxpbmcuY2xpY2soKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoY3VycmVudFBhZ2UgPT09IHBhZ2VDb3VudCkge1xyXG5cdFx0XHRcdFx0XHRuZXh0QnRuLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcclxuXHRcdFx0XHRcdFx0bmV4dEJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGxldCBwcmV2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhdHMgLnByZXYnKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoY3VycmVudFBhZ2UgIT09IDEpIHtcclxuXHRcdFx0XHRcdFx0cHJldkJ0bi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG5cdFx0XHRcdFx0XHRwcmV2QnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYWxsJztcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRpZiAoYWN0aXZlQnRuQ2F0KSB7XHJcblx0XHRcdFx0XHRcdGFjdGl2ZUJ0bkNhdC5jbGFzc0xpc3QuYWRkKCdncm91cCcpO1xyXG5cdFx0XHRcdFx0XHRhY3RpdmVCdG5DYXQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2dyb3VwJyk7XHJcblx0XHRcdFx0XHRcdGFjdGl2ZUJ0bkNhdC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2dyb3VwJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiBuZXh0QnRuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHByZXZQYWdlKHBhZ2VDb3VudCkge1xyXG5cdFx0XHRsZXQgcHJldkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cdFx0XHRwcmV2QnRuLmNsYXNzTGlzdC5hZGQoJ3ByZXYnKTtcclxuXHRcdFx0cHJldkJ0bi5pbm5lclRleHQgPSAnPCc7XHJcblx0XHRcdHByZXZCdG4uY2xhc3NMaXN0LmFkZCgncGFnaW5hdGlvbi1idG4nKTtcclxuXHJcblx0XHRcdHByZXZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0XHRcdGlmIChwcmV2QnRuLnBhcmVudEVsZW1lbnQgPT0gcGFnaW5hdGlvbkVsRG9ncykge1xyXG5cdFx0XHRcdFx0ZGlzcGxheVBhZ2luYXRlZEl0ZW1zKFxyXG5cdFx0XHRcdFx0XHRkb2dCb3hBcnJheSxcclxuXHRcdFx0XHRcdFx0ZG9nc0JveCxcclxuXHRcdFx0XHRcdFx0ZWxlbWVudHNPblBhZ2UsXHJcblx0XHRcdFx0XHRcdGN1cnJlbnRQYWdlXHJcblx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdGxldCBhY3RpdmVCdG5Eb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHRcdFx0XHQnI2RvZ3MgLnBhZ2luYXRpb24tYnRuLmFjdGl2ZSdcclxuXHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0YWN0aXZlQnRuRG9nLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xpY2soKTtcclxuXHJcblx0XHRcdFx0XHRsZXQgbmV4dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkb2dzIC5uZXh0Jyk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGN1cnJlbnRQYWdlICE9PSBwYWdlQ291bnQpIHtcclxuXHRcdFx0XHRcdFx0bmV4dEJ0bi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG5cdFx0XHRcdFx0XHRuZXh0QnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYWxsJztcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRpZiAoY3VycmVudFBhZ2UgPT09IDEpIHtcclxuXHRcdFx0XHRcdFx0cHJldkJ0bi5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XHJcblx0XHRcdFx0XHRcdHByZXZCdG4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRpZiAoYWN0aXZlQnRuRG9nKSB7XHJcblx0XHRcdFx0XHRcdGFjdGl2ZUJ0bkRvZy5jbGFzc0xpc3QuYWRkKCdncm91cCcpO1xyXG5cdFx0XHRcdFx0XHRhY3RpdmVCdG5Eb2cubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2dyb3VwJyk7XHJcblx0XHRcdFx0XHRcdGFjdGl2ZUJ0bkRvZy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2dyb3VwJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAocHJldkJ0bi5wYXJlbnRFbGVtZW50ID09IHBhZ2luYXRpb25FbENhdHMpIHtcclxuXHRcdFx0XHRcdGRpc3BsYXlQYWdpbmF0ZWRJdGVtcyhcclxuXHRcdFx0XHRcdFx0Y2F0Qm94QXJyYXksXHJcblx0XHRcdFx0XHRcdGNhdHNCb3gsXHJcblx0XHRcdFx0XHRcdGVsZW1lbnRzT25QYWdlLFxyXG5cdFx0XHRcdFx0XHRjdXJyZW50UGFnZVxyXG5cdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHRsZXQgYWN0aXZlQnRuQ2F0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuXHRcdFx0XHRcdFx0JyNjYXRzIC5wYWdpbmF0aW9uLWJ0bi5hY3RpdmUnXHJcblx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdGFjdGl2ZUJ0bkNhdC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsaWNrKCk7XHJcblxyXG5cdFx0XHRcdFx0bGV0IG5leHRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2F0cyAubmV4dCcpO1xyXG5cclxuXHRcdFx0XHRcdGlmIChjdXJyZW50UGFnZSAhPT0gcGFnZUNvdW50KSB7XHJcblx0XHRcdFx0XHRcdG5leHRCdG4uc3R5bGUub3BhY2l0eSA9ICcxJztcclxuXHRcdFx0XHRcdFx0bmV4dEJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2FsbCc7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYgKGN1cnJlbnRQYWdlID09PSAxKSB7XHJcblx0XHRcdFx0XHRcdHByZXZCdG4uc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xyXG5cdFx0XHRcdFx0XHRwcmV2QnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYgKGFjdGl2ZUJ0bkNhdCkge1xyXG5cdFx0XHRcdFx0XHRhY3RpdmVCdG5DYXQuY2xhc3NMaXN0LmFkZCgnZ3JvdXAnKTtcclxuXHRcdFx0XHRcdFx0YWN0aXZlQnRuQ2F0Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdncm91cCcpO1xyXG5cdFx0XHRcdFx0XHRhY3RpdmVCdG5DYXQucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdncm91cCcpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRpZiAoY3VycmVudFBhZ2UgPT09IDEpIHtcclxuXHRcdFx0XHRwcmV2QnRuLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcclxuXHRcdFx0XHRwcmV2QnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBwcmV2QnRuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHBhZ2luYXRpb25CdXR0b24ocGFnZSwgcGFnZUNvdW50KSB7XHJcblx0XHRcdGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHRcdFx0YnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3BhZ2luYXRpb24tYnRuJyk7XHJcblx0XHRcdGJ1dHRvbi5pbm5lclRleHQgPSBwYWdlO1xyXG5cclxuXHRcdFx0aWYgKGN1cnJlbnRQYWdlID09IHBhZ2UpIHtcclxuXHRcdFx0XHRidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0XHRcdFx0Y3VycmVudFBhZ2UgPSBwYWdlO1xyXG5cclxuXHRcdFx0XHRpZiAoYnV0dG9uLnBhcmVudEVsZW1lbnQgPT0gcGFnaW5hdGlvbkVsRG9ncykge1xyXG5cdFx0XHRcdFx0ZGlzcGxheVBhZ2luYXRlZEl0ZW1zKFxyXG5cdFx0XHRcdFx0XHRkb2dCb3hBcnJheSxcclxuXHRcdFx0XHRcdFx0ZG9nc0JveCxcclxuXHRcdFx0XHRcdFx0ZWxlbWVudHNPblBhZ2UsXHJcblx0XHRcdFx0XHRcdGN1cnJlbnRQYWdlXHJcblx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdGxldCBhY3RpdmVCdG5Eb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHRcdFx0XHQnI2RvZ3MgLnBhZ2luYXRpb24tYnRuLmFjdGl2ZSdcclxuXHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0YWN0aXZlQnRuRG9nLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cclxuXHRcdFx0XHRcdGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHJcblx0XHRcdFx0XHRsZXQgbmV4dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkb2dzIC5uZXh0Jyk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGN1cnJlbnRQYWdlID09PSBwYWdlQ291bnQpIHtcclxuXHRcdFx0XHRcdFx0bmV4dEJ0bi5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XHJcblx0XHRcdFx0XHRcdG5leHRCdG4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdG5leHRCdG4uc3R5bGUub3BhY2l0eSA9ICcxJztcclxuXHRcdFx0XHRcdFx0bmV4dEJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2FsbCc7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0bGV0IHByZXZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZG9ncyAucHJldicpO1xyXG5cclxuXHRcdFx0XHRcdGlmIChjdXJyZW50UGFnZSA9PT0gMSkge1xyXG5cdFx0XHRcdFx0XHRwcmV2QnRuLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcclxuXHRcdFx0XHRcdFx0cHJldkJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0cHJldkJ0bi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG5cdFx0XHRcdFx0XHRwcmV2QnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYWxsJztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChidXR0b24ucGFyZW50RWxlbWVudCA9PSBwYWdpbmF0aW9uRWxDYXRzKSB7XHJcblx0XHRcdFx0XHRkaXNwbGF5UGFnaW5hdGVkSXRlbXMoXHJcblx0XHRcdFx0XHRcdGNhdEJveEFycmF5LFxyXG5cdFx0XHRcdFx0XHRjYXRzQm94LFxyXG5cdFx0XHRcdFx0XHRlbGVtZW50c09uUGFnZSxcclxuXHRcdFx0XHRcdFx0Y3VycmVudFBhZ2VcclxuXHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0bGV0IGFjdGl2ZUJ0bkNhdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdFx0XHRcdCcjY2F0cyAucGFnaW5hdGlvbi1idG4uYWN0aXZlJ1xyXG5cdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHRhY3RpdmVCdG5DYXQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRcdFx0YnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cclxuXHRcdFx0XHRcdGxldCBuZXh0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhdHMgLm5leHQnKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoY3VycmVudFBhZ2UgPT09IHBhZ2VDb3VudCkge1xyXG5cdFx0XHRcdFx0XHRuZXh0QnRuLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcclxuXHRcdFx0XHRcdFx0bmV4dEJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0bmV4dEJ0bi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG5cdFx0XHRcdFx0XHRuZXh0QnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYWxsJztcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRsZXQgcHJldkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXRzIC5wcmV2Jyk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGN1cnJlbnRQYWdlID09PSAxKSB7XHJcblx0XHRcdFx0XHRcdHByZXZCdG4uc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xyXG5cdFx0XHRcdFx0XHRwcmV2QnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRwcmV2QnRuLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcblx0XHRcdFx0XHRcdHByZXZCdG4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhbGwnO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRyZXR1cm4gYnV0dG9uO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGV4cGFuZHNNb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2V4cGFuZC1tb3JlXScpO1xyXG5cclxuXHRcdGZ1bmN0aW9uIGV4cGFuZCgpIHtcclxuXHRcdFx0Y29uc3Qgc2hvd0NvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRhdGFzZXQudGFyZ2V0KTtcclxuXHRcdFx0aWYgKHNob3dDb250ZW50LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuXHRcdFx0XHR0aGlzLmlubmVySFRNTCA9IHRoaXMuZGF0YXNldC5zaG93dGV4dDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLmlubmVySFRNTCA9IHRoaXMuZGF0YXNldC5oaWRldGV4dDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c2hvd0NvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcblx0XHRcdGlmIChzaG93Q29udGVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcblx0XHRcdFx0c2hvd0NvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gc2hvd0NvbnRlbnQuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzaG93Q29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSAyMCArICdweCc7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoZG9nc0JveCkge1xyXG5cdFx0XHRkaXNwbGF5UGFnaW5hdGVkSXRlbXMoZG9nQm94QXJyYXksIGRvZ3NCb3gsIGVsZW1lbnRzT25QYWdlLCBjdXJyZW50UGFnZSk7XHJcblx0XHRcdGRpc3BsYXlQYWdpbmF0aW9uKGRvZ0JveEFycmF5LCBwYWdpbmF0aW9uRWxEb2dzLCBlbGVtZW50c09uUGFnZSk7XHJcblxyXG5cdFx0XHRleHBhbmRzTW9yZS5mb3JFYWNoKChidG4pID0+IHtcclxuXHRcdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBleHBhbmQpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoY2F0c0JveCkge1xyXG5cdFx0XHRkaXNwbGF5UGFnaW5hdGVkSXRlbXMoY2F0Qm94QXJyYXksIGNhdHNCb3gsIGVsZW1lbnRzT25QYWdlLCBjdXJyZW50UGFnZSk7XHJcblx0XHRcdGRpc3BsYXlQYWdpbmF0aW9uKGNhdEJveEFycmF5LCBwYWdpbmF0aW9uRWxDYXRzLCBlbGVtZW50c09uUGFnZSk7XHJcblxyXG5cdFx0XHRleHBhbmRzTW9yZS5mb3JFYWNoKChidG4pID0+IHtcclxuXHRcdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBleHBhbmQpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGlmIChhbmltYWxzUGFnZXMpIHtcclxuXHRcdChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGRpc3BsYXlBbmltYWxzKCk7XHJcblx0XHR9KSgpO1xyXG5cdH1cclxufSk7XHJcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcblx0Ly8gZm9ybSB2YWxpZGF0aW9uXHJcblx0Y29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0LWZvcm0nKTtcclxuXHRjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKTtcclxuXHRjb25zdCBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbCcpO1xyXG5cdGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzc2FnZScpO1xyXG5cdGNvbnN0IGZvcm1CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1idG4nKTtcclxuXHJcblx0aWYgKGZvcm0pIHtcclxuXHRcdFtcclxuXHRcdFx0J2NsaWNrJyxcclxuXHRcdFx0J29udG91Y2hzdGFydCcsXHJcblx0XHRcdCdtb3VzZW92ZXInLFxyXG5cdFx0XHQna2V5ZG93bicsXHJcblx0XHRcdCdrZXlwcmVzcycsXHJcblx0XHRcdCd0b3VjaHN0YXJ0JyxcclxuXHRcdFx0J3RvdWNobW92ZScsXHJcblx0XHRdLmZvckVhY2goXHJcblx0XHRcdChldmVudCkgPT5cclxuXHRcdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCAoKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoY2hlY2tJbnB1dHMoKSA9PT0gZmFsc2UpIHtcclxuXHRcdFx0XHRcdFx0Zm9ybUJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRmb3JtQnRuLmRpc2FibGVkID0gZmFsc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cclxuXHRcdGZ1bmN0aW9uIGNoZWNrSW5wdXRzKCkge1xyXG5cdFx0XHRjb25zdCBuYW1lVmFsdWUgPSBuYW1lLnZhbHVlLnRyaW0oKTtcclxuXHRcdFx0Y29uc3QgZW1haWxWYWx1ZSA9IGVtYWlsLnZhbHVlLnRyaW0oKTtcclxuXHRcdFx0Y29uc3QgbWVzc2FnZVZhbHVlID0gbWVzc2FnZS52YWx1ZS50cmltKCk7XHJcblxyXG5cdFx0XHRpZiAobmFtZVZhbHVlID09PSAnJykge1xyXG5cdFx0XHRcdHNldEVycm9yRm9yKG5hbWUsICdQbGVhc2UgZW50ZXIgeW91ciBmdWxsIG5hbWUnKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRTdWNjZXNzRm9yKG5hbWUpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoZW1haWxWYWx1ZSA9PT0gJycpIHtcclxuXHRcdFx0XHRzZXRFcnJvckZvcihlbWFpbCwgJ1BsZWFzZSBlbnRlciB5b3VyIGVtYWlsIGFkZHJlc3MnKTtcclxuXHRcdFx0fSBlbHNlIGlmICghZW1haWxJc1ZhbGlkKGVtYWlsVmFsdWUpKSB7XHJcblx0XHRcdFx0c2V0RXJyb3JGb3IoZW1haWwsICdFbWFpbCBpcyBub3QgdmFsaWQnKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRTdWNjZXNzRm9yKGVtYWlsKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKG1lc3NhZ2VWYWx1ZSA9PT0gJycpIHtcclxuXHRcdFx0XHRzZXRFcnJvckZvcihtZXNzYWdlLCAnUGxlYXNlIGVudGVyIHlvdXIgbWVzc2FnZScpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldFN1Y2Nlc3NGb3IobWVzc2FnZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChcclxuXHRcdFx0XHRuYW1lVmFsdWUgPT09ICcnIHx8XHJcblx0XHRcdFx0ZW1haWxWYWx1ZSA9PT0gJycgfHxcclxuXHRcdFx0XHRtZXNzYWdlVmFsdWUgPT09ICcnIHx8XHJcblx0XHRcdFx0IWVtYWlsSXNWYWxpZChlbWFpbFZhbHVlKVxyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBzZXRFcnJvckZvcihpbnB1dCwgbWVzc2FnZSkge1xyXG5cdFx0XHRjb25zdCBmb3JtID0gaW5wdXQucGFyZW50RWxlbWVudDtcclxuXHRcdFx0Y29uc3Qgc21hbGwgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ3NtYWxsJyk7XHJcblxyXG5cdFx0XHRzbWFsbC5pbm5lclRleHQgPSBtZXNzYWdlO1xyXG5cdFx0XHRmb3JtLmNsYXNzTmFtZSA9ICdmb3JtX19ncm91cCBlcnJvcic7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gc2V0U3VjY2Vzc0ZvcihpbnB1dCkge1xyXG5cdFx0XHRjb25zdCBmb3JtID0gaW5wdXQucGFyZW50RWxlbWVudDtcclxuXHRcdFx0Zm9ybS5jbGFzc05hbWUgPSAnZm9ybV9fZ3JvdXAgc3VjY2Vzcyc7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gZW1haWxJc1ZhbGlkKGVtYWlsKSB7XHJcblx0XHRcdGNvbnN0IHJlID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC8udGVzdChcclxuXHRcdFx0XHRlbWFpbFxyXG5cdFx0XHQpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHJlO1xyXG5cdFx0fVxyXG5cdH1cclxufSk7XHJcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKGUpID0+IHtcblx0XHRjb25zdCBwcmVsb2FkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWxvYWQnKTtcblxuXHRcdHByZWxvYWQuY2xhc3NMaXN0LmFkZCgncHJlbG9hZC1maW5pc2hlZCcpO1xuXHR9KTtcblxuXHRjb25zdCBidG5TY3JvbGxUb1RvcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5TY3JvbGxUb1RvcCcpO1xuXHRidG5TY3JvbGxUb1RvcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0d2luZG93LnNjcm9sbFRvKHtcblx0XHRcdHRvcDogMCxcblx0XHRcdGxlZnQ6IDAsXG5cdFx0XHRiZWhhdmlvcjogJ3Ntb290aCcsXG5cdFx0fSk7XG5cdH0pO1xufSk7XG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IG5hdkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYtY29udGFpbmVyJyk7XHJcblx0Y29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LWJ0bicpO1xyXG5cdGNvbnN0IG5hdkxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2LWxpc3QnKTtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIChlKSA9PiB7XHJcblx0XHRpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA+IDApIHtcclxuXHRcdFx0bmF2Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N0aWNreScpO1xyXG5cdFx0XHRidG5TY3JvbGxUb1RvcC5zdHlsZS5vcGFjaXR5ID0gMTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG5hdkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdzdGlja3knKTtcclxuXHRcdFx0YnRuU2Nyb2xsVG9Ub3Auc3R5bGUub3BhY2l0eSA9IDA7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0bWVudUJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdjbGlja2VkJyk7XHJcblx0XHRuYXZDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnb3ZlcmxheScpO1xyXG5cdFx0bmF2TGlzdC5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XHJcblx0fSk7XHJcbn0pO1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG5cdC8vIGNhcm91c2VsXHJcblx0Y29uc3QgY2Fyb3VzZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2Fyb3VzZWwnKTtcclxuXHRjb25zdCBwcmV2QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXYnKTtcclxuXHRjb25zdCBuZXh0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHQnKTtcclxuXHRjb25zdCBjYXJvdXNlbFVybCA9ICcuL2pzL2Nhcm91c2VsLmpzb24nO1xyXG5cclxuXHRsZXQgZmlyc3RTbGlkZTtcclxuXHRsZXQgbGFzdFNsaWRlO1xyXG5cclxuXHRmdW5jdGlvbiBnZXRTbGlkZXNEYXRhKCkge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0ZmV0Y2goY2Fyb3VzZWxVcmwpXHJcblx0XHRcdFx0LnRoZW4oKHJlc3ApID0+IHJlc3AuanNvbigpKVxyXG5cdFx0XHRcdC50aGVuKChkYXRhKSA9PiByZXNvbHZlKGRhdGEpKVxyXG5cdFx0XHRcdC5jYXRjaCgoZXJyKSA9PiByZWplY3QoZXJyKSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGZ1bmN0aW9uIGRpc3BsYXlDYXJvdXNlbCgpIHtcclxuXHRcdGNvbnN0IGRhdGFMaXN0ID0gYXdhaXQgZ2V0U2xpZGVzRGF0YSgpO1xyXG5cdFx0Y29uc3Qgc2xpZGVzQXJyYXkgPSBkYXRhTGlzdC5zbGlkZXM7XHJcblxyXG5cdFx0c2xpZGVzQXJyYXkuZm9yRWFjaCgoc2xpZGUsIHNsaWRlTnVtYmVyKSA9PiB7XHJcblx0XHRcdG5ld1NsaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRcdG5ld1NsaWRlLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsX19zbGlkZScpO1xyXG5cclxuXHRcdFx0bmV3U2xpZGUuaW5uZXJIVE1MID0gYFxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2Fyb3VzZWxfX2ltYWdlLWNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiJHtzbGlkZS5pbWFnZX1cIiBhbHQ9XCJzbGlkZS1pbWdcIiAvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcm91c2VsX19jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0PGgxIGNsYXNzPVwiY2Fyb3VzZWxfX3RpdGxlXCI+JHtzbGlkZS50aXRsZX08L2gxPlxyXG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzPVwiY2Fyb3VzZWxfX2Rlc2NcIj4ke3NsaWRlLmNvbnRlbnR9PC9wPlxyXG5cdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJoZWFkZXJfX25hdi1kb25hdGUtYnRuIGJ1dHRvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0RHVnbWUgemEgbmXFoXRvXHJcblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRgO1xyXG5cclxuXHRcdFx0Y2Fyb3VzZWwuYXBwZW5kQ2hpbGQobmV3U2xpZGUpO1xyXG5cclxuXHRcdFx0aWYgKHNsaWRlTnVtYmVyID09PSAwKSB7XHJcblx0XHRcdFx0Zmlyc3RTbGlkZSA9IG5ld1NsaWRlO1xyXG5cdFx0XHRcdG5ld1NsaWRlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHNsaWRlTnVtYmVyICsgMSA9PT0gZGF0YUxpc3Quc2xpZGVzLmxlbmd0aCkge1xyXG5cdFx0XHRcdGxhc3RTbGlkZSA9IG5ld1NsaWRlO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHRuZXh0U2xpZGUoKTtcclxuXHRcdHByZXZpb3VzU2xpZGUoKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG5leHRTbGlkZSgpIHtcclxuXHRcdGNvbnN0IG5leHRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dCcpO1xyXG5cclxuXHRcdG5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0XHRjb25zdCBhY3RpdmVTbGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fc2xpZGUuYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRsZXQgbmV4dFNpYmxpbmcgPSBhY3RpdmVTbGlkZS5uZXh0RWxlbWVudFNpYmxpbmc7XHJcblxyXG5cdFx0XHRpZiAobmV4dFNpYmxpbmcgPT0gbnVsbCkge1xyXG5cdFx0XHRcdG5leHRTaWJsaW5nID0gYWN0aXZlU2xpZGU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChuZXh0U2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ2Nhcm91c2VsX19zbGlkZScpKSB7XHJcblx0XHRcdFx0YWN0aXZlU2xpZGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0XHRcdFx0bmV4dFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gcHJldmlvdXNTbGlkZSgpIHtcclxuXHRcdGNvbnN0IHByZXZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldicpO1xyXG5cclxuXHRcdHByZXZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0XHRjb25zdCBhY3RpdmVTbGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fc2xpZGUuYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRsZXQgbmV4dFNpYmxpbmcgPSBhY3RpdmVTbGlkZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG5cclxuXHRcdFx0aWYgKG5leHRTaWJsaW5nID09IG51bGwpIHtcclxuXHRcdFx0XHRuZXh0U2libGluZyA9IGFjdGl2ZVNsaWRlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAobmV4dFNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJvdXNlbF9fc2xpZGUnKSkge1xyXG5cdFx0XHRcdGFjdGl2ZVNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdG5leHRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGlmIChjYXJvdXNlbCAhPT0gbnVsbCkge1xyXG5cdFx0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0ZGlzcGxheUNhcm91c2VsKCk7XHJcblx0XHR9KSgpO1xyXG5cdH1cclxufSk7XHJcbiIsIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG5cdC8vIHRhYnNcclxuXHRjb25zdCB0YWJMaXN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYmNjb3JkaW9uX19saXN0LWJ0bicpO1xyXG5cdGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiY2NvcmRpb25fX2NvbnRhaW5lcicpO1xyXG5cdGNvbnN0IHRhYmNjb3JkaW9uTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWJjY29yZGlvbi1saXN0Jyk7XHJcblx0Y29uc3QgdGFic0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiY2NvcmRpb25fX3RhYi1pbm5lcicpO1xyXG5cdGNvbnN0IHRhYmNjb3JkaW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYmNjb3JkaW9uJyk7XHJcblxyXG5cdGZ1bmN0aW9uIGFjdGl2YXRlVGFicygpIHtcclxuXHRcdHRhYkxpc3RCdG4uZm9yRWFjaCgodGFiKSA9PiB7XHJcblx0XHRcdHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgdGFiTmF2ID0gdGFiLnBhcmVudEVsZW1lbnQ7XHJcblx0XHRcdFx0Y29uc3QgdGFic0NvbnRhaW5lciA9IHRhYk5hdi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcblx0XHRcdFx0Y29uc3QgdGFiTnVtYmVyID0gdGFiLmRhdGFzZXQuZm9yVGFiO1xyXG5cdFx0XHRcdGNvbnN0IHRhYlRvQWN0aXZhdGUgPSB0YWJzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdFx0XHRgLnRhYmNjb3JkaW9uX190YWJbZGF0YS10YWI9XCIke3RhYk51bWJlcn1cIl1gXHJcblx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0dGFiTmF2LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJjY29yZGlvbl9fbGlzdC1idG4nKS5mb3JFYWNoKChidG4pID0+IHtcclxuXHRcdFx0XHRcdGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdHRhYnNDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLnRhYmNjb3JkaW9uX190YWInKS5mb3JFYWNoKCh0YWIpID0+IHtcclxuXHRcdFx0XHRcdHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdHRhYi5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XHJcblx0XHRcdFx0dGFiVG9BY3RpdmF0ZS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XHJcblxyXG5cdFx0XHRcdGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSA2MDApIHtcclxuXHRcdFx0XHRcdHRhYnNDb250ZW50LmZvckVhY2goKHRhYnMpID0+IHtcclxuXHRcdFx0XHRcdFx0dGFicy5zdHlsZS5tYXhIZWlnaHQgPSB0YWJzLnNjcm9sbEhlaWdodCArICdweCc7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0aWYgKHRhYmNjb3JkaW9uTGlzdCkge1xyXG5cdFx0XHR0YWJzLmZvckVhY2goKHRhYikgPT4ge1xyXG5cdFx0XHRcdHRhYi5xdWVyeVNlbGVjdG9yKCcudGFiY2NvcmRpb25fX2xpc3QgLnRhYmNjb3JkaW9uX19idG4nKS5jbGljaygpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKGUpID0+IHtcclxuXHRcdFx0aWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDYwMCkge1xyXG5cdFx0XHRcdGFjdGl2YXRlVGFicygpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdC8vLy8vIGFjY29yZGlvblxyXG5cdGNvbnN0IGFjY29yZGlvbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvcmRpb25fX2xpc3QtYnRuJyk7XHJcblxyXG5cdGZ1bmN0aW9uIGFjdGl2YXRlQWNjb3JkaW9uKCkge1xyXG5cdFx0YWNjb3JkaW9uQnRuLmZvckVhY2goKGJ0bikgPT4ge1xyXG5cdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdFx0Ly8gY2hlY2sgZm9yIG9wZW4gYWNjb3JkaW9uXHJcblx0XHRcdFx0Y29uc3QgYWNjb3JkaW9uQnRuT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdFx0XHQnLmFjY29yZGlvbl9fbGlzdC1idG4ub3BlbidcclxuXHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRpZiAoYWNjb3JkaW9uQnRuT3BlbiAmJiBhY2NvcmRpb25CdG5PcGVuICE9PSBidG4pIHtcclxuXHRcdFx0XHRcdC8vIGlmIHRoZXJlIGlzIG9wZW4gdGhlbiByZW1vdmUgb3BlbiBjbGFzcyBhbmQgc2V0IG1heGhlaWdodCB0byAwXHJcblx0XHRcdFx0XHRhY2NvcmRpb25CdG5PcGVuLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcclxuXHRcdFx0XHRcdGFjY29yZGlvbkJ0bk9wZW4ubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLm1heEhlaWdodCA9IDA7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBzZXQgb3BlbiBjbGFzcyB0byBldmVyeSBjbGlja2VkIGFjY29yZGlvbiBidG5cclxuXHRcdFx0XHRidG4uY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xyXG5cdFx0XHRcdGNvbnN0IGFjY29yZGlvbkJvZHkgPSBidG4ubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG5cclxuXHRcdFx0XHRpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpKSB7XHJcblx0XHRcdFx0XHRhY2NvcmRpb25Cb2R5LnN0eWxlLm1heEhlaWdodCA9IGFjY29yZGlvbkJvZHkuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0YWNjb3JkaW9uQm9keS5zdHlsZS5tYXhIZWlnaHQgPSAwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKGUpID0+IHtcclxuXHRcdFx0aWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNjAwKSB7XHJcblx0XHRcdFx0dGFic0NvbnRlbnQuZm9yRWFjaCgodGFicykgPT4ge1xyXG5cdFx0XHRcdFx0dGFicy5zdHlsZS5tYXhIZWlnaHQgPSAwO1xyXG5cdFx0XHRcdFx0aWYgKHRhYnMucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKSkge1xyXG5cdFx0XHRcdFx0XHR0YWJzLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGlmICh0YWJjY29yZGlvbikge1xyXG5cdFx0YWN0aXZhdGVUYWJzKCk7XHJcblx0XHRhY3RpdmF0ZUFjY29yZGlvbigpO1xyXG5cdH1cclxufSk7XHJcbiJdLCJwcmVFeGlzdGluZ0NvbW1lbnQiOiIvLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTh2ZDJWaWNHRmpheTlpYjI5MGMzUnlZWEFpTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDJwekwyRmtiM0IwUTI5dWRHVnVkRk4zYVhSamFHVnlMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5cWN5OW1aWFJqYUVGdWFXMWhiSE5FWVhSaExtcHpJaXdpZDJWaWNHRmphem92THk4dUwzTnlZeTlxY3k5bWIzSnRWbUZzYVdSaGFYUnZiaTVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl6Y21NdmFuTXZiV0ZwYmk1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5emNtTXZhbk12Ym1GMkxtcHpJaXdpZDJWaWNHRmphem92THk4dUwzTnlZeTlxY3k5emJHbGtaWEl1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwycHpMM1JoWW1OamIzSmthVzl1TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1VVRkJRVHRSUVVOQk96dFJRVVZCTzFGQlEwRTdPMUZCUlVFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN08xRkJSVUU3VVVGRFFUczdVVUZGUVR0UlFVTkJPenRSUVVWQk8xRkJRMEU3VVVGRFFUczdPMUZCUjBFN1VVRkRRVHM3VVVGRlFUdFJRVU5CT3p0UlFVVkJPMUZCUTBFN1VVRkRRVHRSUVVOQkxEQkRRVUV3UXl4blEwRkJaME03VVVGRE1VVTdVVUZEUVRzN1VVRkZRVHRSUVVOQk8xRkJRMEU3VVVGRFFTeDNSRUZCZDBRc2EwSkJRV3RDTzFGQlF6RkZPMUZCUTBFc2FVUkJRV2xFTEdOQlFXTTdVVUZETDBRN08xRkJSVUU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTEhsRFFVRjVReXhwUTBGQmFVTTdVVUZETVVVc1owaEJRV2RJTEcxQ1FVRnRRaXhGUVVGRk8xRkJRM0pKTzFGQlEwRTdPMUZCUlVFN1VVRkRRVHRSUVVOQk8xRkJRMEVzTWtKQlFUSkNMREJDUVVFd1FpeEZRVUZGTzFGQlEzWkVMR2xEUVVGcFF5eGxRVUZsTzFGQlEyaEVPMUZCUTBFN1VVRkRRVHM3VVVGRlFUdFJRVU5CTEhORVFVRnpSQ3dyUkVGQkswUTdPMUZCUlhKSU8xRkJRMEU3T3p0UlFVZEJPMUZCUTBFN096czdPenM3T3pzN096dEJRMnhHUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFc1IwRkJSenRCUVVOSUxFVkJRVVU3TzBGQlJVWTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRXNPRVJCUVRoRUxFOUJRVTg3UVVGRGNrVTdRVUZEUVN4blEwRkJaME1zVDBGQlR6dEJRVU4yUXp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFTkJRVU03T3pzN096czdPenM3T3p0QlEycERSRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0RzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3g1UTBGQmVVTXNWVUZCVlN4VFFVRlRMRk5CUVZNN1FVRkRja1U3UVVGRFFTeExRVUZMTEVWQlFVVTdRVUZEVUR0QlFVTkJPMEZCUTBFc01FUkJRVEJFTEZOQlFWTTdRVUZEYmtVN1FVRkRRVHRCUVVOQk8wRkJRMEVzYVVKQlFXbENMRVZCUVVVc1YwRkJWenRCUVVNNVFqdEJRVU5CTERCRFFVRXdRenRCUVVNeFF6dEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeG5SVUZCWjBVc1dVRkJXVHRCUVVNMVJUdEJRVU5CTEV0QlFVczdRVUZEVER0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHMUNRVUZ0UWp0QlFVTnVRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNiVUpCUVcxQ08wRkJRMjVDTzBGQlEwRTdRVUZEUVR0QlFVTkJMREJGUVVFd1JTeE5RVUZOTzBGQlEyaEdPMEZCUTBFN1FVRkRRVHRCUVVOQkxDdERRVUVyUXl4clEwRkJhME03UVVGRGFrWTdRVUZEUVR0QlFVTkJPMEZCUTBFc0swTkJRU3RETEd0RFFVRnJRenRCUVVOcVJqdEJRVU5CTzBGQlEwRTdRVUZEUVN3clEwRkJLME1zYTBOQlFXdERPMEZCUTJwR08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4dFFrRkJiVUk3UVVGRGJrSTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHMUNRVUZ0UWp0QlFVTnVRanRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMRWxCUVVrN08wRkJSVW83UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEhsRFFVRjVReXhWUVVGVkxGTkJRVk1zVTBGQlV6dEJRVU55UlR0QlFVTkJMRXRCUVVzc1JVRkJSVHRCUVVOUU8wRkJRMEU3UVVGRFFTd3dSRUZCTUVRc1UwRkJVenRCUVVOdVJUdEJRVU5CTzBGQlEwRTdRVUZEUVN4cFFrRkJhVUlzUlVGQlJTeFhRVUZYTzBGQlF6bENPMEZCUTBFc01FTkJRVEJETzBGQlF6RkRPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMR2RGUVVGblJTeFpRVUZaTzBGQlF6VkZPMEZCUTBFc1MwRkJTenRCUVVOTU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNiVUpCUVcxQ08wRkJRMjVDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3h0UWtGQmJVSTdRVUZEYmtJN1FVRkRRVHRCUVVOQk8wRkJRMEVzTUVWQlFUQkZMRk5CUVZNN1FVRkRia1k3UVVGRFFUdEJRVU5CTzBGQlEwRXNLME5CUVN0RExHdERRVUZyUXp0QlFVTnFSanRCUVVOQk8wRkJRMEU3UVVGRFFTd3JRMEZCSzBNc2EwTkJRV3RETzBGQlEycEdPMEZCUTBFN1FVRkRRVHRCUVVOQkxDdERRVUVyUXl4clEwRkJhME03UVVGRGFrWTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHMUNRVUZ0UWp0QlFVTnVRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNiVUpCUVcxQ08wRkJRMjVDTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzU1VGQlNUdEJRVU5LTEVkQlFVYzdPMEZCUlVnN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQkxFbEJRVWs3UVVGRFNqczdRVUZGUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTEd0Q1FVRnJRaXh0UWtGQmJVSTdRVUZEY2tNN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SlFVRkpPenRCUVVWS08wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFbEJRVWs3TzBGQlJVbzdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVFVGQlRUdEJRVU5PTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TlFVRk5PMEZCUTA0N1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEUxQlFVMDdRVUZEVGp0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1RVRkJUVHRCUVVOT08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNTVUZCU1RzN1FVRkZTanRCUVVOQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzU1VGQlNUdEJRVU5LTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzU1VGQlNUdEJRVU5LTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRWxCUVVrN1FVRkRTanM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxFbEJRVWs3UVVGRFNqdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEdEJRVU5CTEVOQlFVTTdPenM3T3pzN096czdPenRCUXk5c1FrUTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFMUJRVTA3UVVGRFRqdEJRVU5CTzBGQlEwRXNTMEZCU3p0QlFVTk1PMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxFbEJRVWs3UVVGRFNqdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hKUVVGSk8wRkJRMG83UVVGRFFTeEpRVUZKTzBGQlEwbzdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzU1VGQlNUdEJRVU5LTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SlFVRkpPMEZCUTBvN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFTeHBRMEZCYVVNc2VVSkJRWGxDTERaQ1FVRTJRaXhKUVVGSkxGRkJRVkVzU1VGQlNTeFJRVUZSTEVsQlFVa3NVVUZCVVN4SlFVRkpMR2REUVVGblF5eEhRVUZITzBGQlEyeExPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNRMEZCUXpzN096czdPenM3T3pzN08wRkRka1pFTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQkxFVkJRVVU3TzBGQlJVWTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JTEVWQlFVVTdRVUZEUml4RFFVRkRPenM3T3pzN096czdPenM3UVVObVJEdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0R0QlFVTkJPMEZCUTBFN1FVRkRRU3hGUVVGRk96dEJRVVZHTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1JVRkJSVHRCUVVOR0xFTkJRVU03T3pzN096czdPenM3T3p0QlEzQkNSRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc2JVSkJRVzFDTEZsQlFWazdRVUZETDBJN1FVRkRRVHRCUVVOQkxIRkRRVUZ4UXl4WlFVRlpPMEZCUTJwRUxHMURRVUZ0UXl4alFVRmpPMEZCUTJwRU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNTVUZCU1R0QlFVTktPMEZCUTBFN1FVRkRRU3hIUVVGSE96dEJRVVZJTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU8wRkJRMEVzUTBGQlF6czdPenM3T3pzN096czdPMEZEYWtkRU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2IwTkJRVzlETEZWQlFWVTdRVUZET1VNN08wRkJSVUU3UVVGRFFUdEJRVU5CTEV0QlFVczdPMEZCUlV3N1FVRkRRVHRCUVVOQkxFdEJRVXM3TzBGQlJVdzdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeE5RVUZOTzBGQlEwNDdRVUZEUVN4SlFVRkpPMEZCUTBvc1IwRkJSenM3UVVGRlNEdEJRVU5CTzBGQlEwRTdRVUZEUVN4SlFVRkpPMEZCUTBvN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRTdRVUZEUVN4SlFVRkpPMEZCUTBvc1IwRkJSenM3UVVGRlNEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CTEVkQlFVYzdRVUZEU0RzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVOQlFVTWlMQ0ptYVd4bElqb2lNelF4TkRVMFltWXpaRGxpTTJSbVlURmtNMll1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SWdYSFF2THlCVWFHVWdiVzlrZFd4bElHTmhZMmhsWEc0Z1hIUjJZWElnYVc1emRHRnNiR1ZrVFc5a2RXeGxjeUE5SUh0OU8xeHVYRzRnWEhRdkx5QlVhR1VnY21WeGRXbHlaU0JtZFc1amRHbHZibHh1SUZ4MFpuVnVZM1JwYjI0Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aHRiMlIxYkdWSlpDa2dlMXh1WEc0Z1hIUmNkQzh2SUVOb1pXTnJJR2xtSUcxdlpIVnNaU0JwY3lCcGJpQmpZV05vWlZ4dUlGeDBYSFJwWmlocGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFNrZ2UxeHVJRngwWEhSY2RISmxkSFZ5YmlCcGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFM1bGVIQnZjblJ6TzF4dUlGeDBYSFI5WEc0Z1hIUmNkQzh2SUVOeVpXRjBaU0JoSUc1bGR5QnRiMlIxYkdVZ0tHRnVaQ0J3ZFhRZ2FYUWdhVzUwYnlCMGFHVWdZMkZqYUdVcFhHNGdYSFJjZEhaaGNpQnRiMlIxYkdVZ1BTQnBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTQTlJSHRjYmlCY2RGeDBYSFJwT2lCdGIyUjFiR1ZKWkN4Y2JpQmNkRngwWEhSc09pQm1ZV3h6WlN4Y2JpQmNkRngwWEhSbGVIQnZjblJ6T2lCN2ZWeHVJRngwWEhSOU8xeHVYRzRnWEhSY2RDOHZJRVY0WldOMWRHVWdkR2hsSUcxdlpIVnNaU0JtZFc1amRHbHZibHh1SUZ4MFhIUnRiMlIxYkdWelcyMXZaSFZzWlVsa1hTNWpZV3hzS0cxdlpIVnNaUzVsZUhCdmNuUnpMQ0J0YjJSMWJHVXNJRzF2WkhWc1pTNWxlSEJ2Y25SekxDQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLVHRjYmx4dUlGeDBYSFF2THlCR2JHRm5JSFJvWlNCdGIyUjFiR1VnWVhNZ2JHOWhaR1ZrWEc0Z1hIUmNkRzF2WkhWc1pTNXNJRDBnZEhKMVpUdGNibHh1SUZ4MFhIUXZMeUJTWlhSMWNtNGdkR2hsSUdWNGNHOXlkSE1nYjJZZ2RHaGxJRzF2WkhWc1pWeHVJRngwWEhSeVpYUjFjbTRnYlc5a2RXeGxMbVY0Y0c5eWRITTdYRzRnWEhSOVhHNWNibHh1SUZ4MEx5OGdaWGh3YjNObElIUm9aU0J0YjJSMWJHVnpJRzlpYW1WamRDQW9YMTkzWldKd1lXTnJYMjF2WkhWc1pYTmZYeWxjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHViU0E5SUcxdlpIVnNaWE03WEc1Y2JpQmNkQzh2SUdWNGNHOXpaU0IwYUdVZ2JXOWtkV3hsSUdOaFkyaGxYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtTWdQU0JwYm5OMFlXeHNaV1JOYjJSMWJHVnpPMXh1WEc0Z1hIUXZMeUJrWldacGJtVWdaMlYwZEdWeUlHWjFibU4wYVc5dUlHWnZjaUJvWVhKdGIyNTVJR1Y0Y0c5eWRITmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpDQTlJR1oxYm1OMGFXOXVLR1Y0Y0c5eWRITXNJRzVoYldVc0lHZGxkSFJsY2lrZ2UxeHVJRngwWEhScFppZ2hYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV2S0dWNGNHOXlkSE1zSUc1aGJXVXBLU0I3WEc0Z1hIUmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lHNWhiV1VzSUhzZ1pXNTFiV1Z5WVdKc1pUb2dkSEoxWlN3Z1oyVjBPaUJuWlhSMFpYSWdmU2s3WEc0Z1hIUmNkSDFjYmlCY2RIMDdYRzVjYmlCY2RDOHZJR1JsWm1sdVpTQmZYMlZ6VFc5a2RXeGxJRzl1SUdWNGNHOXlkSE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjaUE5SUdaMWJtTjBhVzl1S0dWNGNHOXlkSE1wSUh0Y2JpQmNkRngwYVdZb2RIbHdaVzltSUZONWJXSnZiQ0FoUFQwZ0ozVnVaR1ZtYVc1bFpDY2dKaVlnVTNsdFltOXNMblJ2VTNSeWFXNW5WR0ZuS1NCN1hHNGdYSFJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRk41YldKdmJDNTBiMU4wY21sdVoxUmhaeXdnZXlCMllXeDFaVG9nSjAxdlpIVnNaU2NnZlNrN1hHNGdYSFJjZEgxY2JpQmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lDZGZYMlZ6VFc5a2RXeGxKeXdnZXlCMllXeDFaVG9nZEhKMVpTQjlLVHRjYmlCY2RIMDdYRzVjYmlCY2RDOHZJR055WldGMFpTQmhJR1poYTJVZ2JtRnRaWE53WVdObElHOWlhbVZqZEZ4dUlGeDBMeThnYlc5a1pTQW1JREU2SUhaaGJIVmxJR2x6SUdFZ2JXOWtkV3hsSUdsa0xDQnlaWEYxYVhKbElHbDBYRzRnWEhRdkx5QnRiMlJsSUNZZ01qb2diV1Z5WjJVZ1lXeHNJSEJ5YjNCbGNuUnBaWE1nYjJZZ2RtRnNkV1VnYVc1MGJ5QjBhR1VnYm5OY2JpQmNkQzh2SUcxdlpHVWdKaUEwT2lCeVpYUjFjbTRnZG1Gc2RXVWdkMmhsYmlCaGJISmxZV1I1SUc1eklHOWlhbVZqZEZ4dUlGeDBMeThnYlc5a1pTQW1JRGg4TVRvZ1ltVm9ZWFpsSUd4cGEyVWdjbVZ4ZFdseVpWeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1MElEMGdablZ1WTNScGIyNG9kbUZzZFdVc0lHMXZaR1VwSUh0Y2JpQmNkRngwYVdZb2JXOWtaU0FtSURFcElIWmhiSFZsSUQwZ1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aDJZV3gxWlNrN1hHNGdYSFJjZEdsbUtHMXZaR1VnSmlBNEtTQnlaWFIxY200Z2RtRnNkV1U3WEc0Z1hIUmNkR2xtS0NodGIyUmxJQ1lnTkNrZ0ppWWdkSGx3Wlc5bUlIWmhiSFZsSUQwOVBTQW5iMkpxWldOMEp5QW1KaUIyWVd4MVpTQW1KaUIyWVd4MVpTNWZYMlZ6VFc5a2RXeGxLU0J5WlhSMWNtNGdkbUZzZFdVN1hHNGdYSFJjZEhaaGNpQnVjeUE5SUU5aWFtVmpkQzVqY21WaGRHVW9iblZzYkNrN1hHNGdYSFJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWNpaHVjeWs3WEc0Z1hIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNodWN5d2dKMlJsWm1GMWJIUW5MQ0I3SUdWdWRXMWxjbUZpYkdVNklIUnlkV1VzSUhaaGJIVmxPaUIyWVd4MVpTQjlLVHRjYmlCY2RGeDBhV1lvYlc5a1pTQW1JRElnSmlZZ2RIbHdaVzltSUhaaGJIVmxJQ0U5SUNkemRISnBibWNuS1NCbWIzSW9kbUZ5SUd0bGVTQnBiaUIyWVd4MVpTa2dYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVrS0c1ekxDQnJaWGtzSUdaMWJtTjBhVzl1S0d0bGVTa2dleUJ5WlhSMWNtNGdkbUZzZFdWYmEyVjVYVHNnZlM1aWFXNWtLRzUxYkd3c0lHdGxlU2twTzF4dUlGeDBYSFJ5WlhSMWNtNGdibk03WEc0Z1hIUjlPMXh1WEc0Z1hIUXZMeUJuWlhSRVpXWmhkV3gwUlhod2IzSjBJR1oxYm1OMGFXOXVJR1p2Y2lCamIyMXdZWFJwWW1sc2FYUjVJSGRwZEdnZ2JtOXVMV2hoY20xdmJua2diVzlrZFd4bGMxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dUlEMGdablZ1WTNScGIyNG9iVzlrZFd4bEtTQjdYRzRnWEhSY2RIWmhjaUJuWlhSMFpYSWdQU0J0YjJSMWJHVWdKaVlnYlc5a2RXeGxMbDlmWlhOTmIyUjFiR1VnUDF4dUlGeDBYSFJjZEdaMWJtTjBhVzl1SUdkbGRFUmxabUYxYkhRb0tTQjdJSEpsZEhWeWJpQnRiMlIxYkdWYkoyUmxabUYxYkhRblhUc2dmU0E2WEc0Z1hIUmNkRngwWm5WdVkzUnBiMjRnWjJWMFRXOWtkV3hsUlhod2IzSjBjeWdwSUhzZ2NtVjBkWEp1SUcxdlpIVnNaVHNnZlR0Y2JpQmNkRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1a0tHZGxkSFJsY2l3Z0oyRW5MQ0JuWlhSMFpYSXBPMXh1SUZ4MFhIUnlaWFIxY200Z1oyVjBkR1Z5TzF4dUlGeDBmVHRjYmx4dUlGeDBMeThnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbThnUFNCbWRXNWpkR2x2YmlodlltcGxZM1FzSUhCeWIzQmxjblI1S1NCN0lISmxkSFZ5YmlCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVMbU5oYkd3b2IySnFaV04wTENCd2NtOXdaWEowZVNrN0lIMDdYRzVjYmlCY2RDOHZJRjlmZDJWaWNHRmphMTl3ZFdKc2FXTmZjR0YwYUY5ZlhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5BZ1BTQmNJbHdpTzF4dVhHNWNiaUJjZEM4dklFeHZZV1FnWlc1MGNua2diVzlrZFd4bElHRnVaQ0J5WlhSMWNtNGdaWGh3YjNKMGMxeHVJRngwY21WMGRYSnVJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1eklEMGdNQ2s3WEc0aUxDSmtiMk4xYldWdWRDNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZEVUMDFEYjI1MFpXNTBURzloWkdWa0p5d2dablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNkR2hwYzNSdmNua3VjbVZ3YkdGalpWTjBZWFJsS0c1MWJHd3NJRzUxYkd3c0lDY2dKeWs3WEhKY2JseDBZMjl1YzNRZ2RHRmlVM2RwZEdOb1pYSnpJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNrRnNiQ2duVzJSaGRHRXRjM2RwZEdOb1pYSmRKeWs3WEhKY2JseHlYRzVjZEhSaFlsTjNhWFJqYUdWeWN5NW1iM0pGWVdOb0tDaDBZV0pUZDJsMFkyZ3BJRDArSUh0Y2NseHVYSFJjZEdOdmJuTjBJSFJoWWxOM2FYUmphR1Z5SUQwZ2RHRmlVM2RwZEdOb08xeHlYRzVjZEZ4MFkyOXVjM1FnY0dGblpVbGtJRDBnZEdGaVUzZHBkR05vWlhJdVpHRjBZWE5sZEM1MFlXSTdYSEpjYmx4eVhHNWNkRngwZEdGaVUzZHBkR05vWlhJdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblkyeHBZMnNuTENBb1pTa2dQVDRnZTF4eVhHNWNkRngwWEhSa2IyTjFiV1Z1ZEZ4eVhHNWNkRngwWEhSY2RDNXhkV1Z5ZVZObGJHVmpkRzl5S0NjdVlXUnZjSFJmWDJ4cGMzUXRhWFJsYlM1aFkzUnBkbVVuS1Z4eVhHNWNkRngwWEhSY2RDNWpiR0Z6YzB4cGMzUXVjbVZ0YjNabEtDZGhZM1JwZG1VbktUdGNjbHh1WEhKY2JseDBYSFJjZEhSaFlsTjNhWFJqYUdWeUxuQmhjbVZ1ZEVWc1pXMWxiblF1Y0dGeVpXNTBSV3hsYldWdWRDNWpiR0Z6YzB4cGMzUXVZV1JrS0NkaFkzUnBkbVVuS1R0Y2NseHVYSEpjYmx4MFhIUmNkSE4zYVhSamFGQmhaMlVvY0dGblpVbGtLVHRjY2x4dVhIUmNkSDBwTzF4eVhHNWNkSDBwTzF4eVhHNWNjbHh1WEhSbWRXNWpkR2x2YmlCemQybDBZMmhRWVdkbEtIQmhaMlZKWkNrZ2UxeHlYRzVjZEZ4MFkyOXVjM1FnWTNWeWNtVnVkRkJoWjJVZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0NjdWNHRm5aUzVoWTNScGRtVW5LVHRjY2x4dVhIUmNkR052Ym5OMElHTjFjbkpsYm5SUVlXZGxTR1ZoWkdWeUlEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkxuQmhaMlV0YUdWaFpHVnlMbUZqZEdsMlpTY3BPMXh5WEc1Y2NseHVYSFJjZEdOMWNuSmxiblJRWVdkbExtTnNZWE56VEdsemRDNXlaVzF2ZG1Vb0oyRmpkR2wyWlNjcE8xeHlYRzVjZEZ4MFkzVnljbVZ1ZEZCaFoyVklaV0ZrWlhJdVkyeGhjM05NYVhOMExuSmxiVzkyWlNnbllXTjBhWFpsSnlrN1hISmNibHh5WEc1Y2RGeDBZMjl1YzNRZ2JtVjRkRkJoWjJVZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0dBdWNHRm5aVnRrWVhSaExYQmhaMlU5WENJa2UzQmhaMlZKWkgxY0lsMWdLVHRjY2x4dVhIUmNkR052Ym5OMElHNWxlSFJRWVdkbFNHVmhaR1Z5SUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWhjY2x4dVhIUmNkRngwWUM1d1lXZGxMV2hsWVdSbGNsdGtZWFJoTFdobFlXUmxjajFjSWlSN2NHRm5aVWxrZlZ3aVhXQmNjbHh1WEhSY2RDazdYSEpjYmx4MFhIUnVaWGgwVUdGblpTNWpiR0Z6YzB4cGMzUXVZV1JrS0NkaFkzUnBkbVVuS1R0Y2NseHVYSFJjZEc1bGVIUlFZV2RsU0dWaFpHVnlMbU5zWVhOelRHbHpkQzVoWkdRb0oyRmpkR2wyWlNjcE8xeHlYRzVjZEgxY2NseHVmU2s3WEhKY2JpSXNJbVJ2WTNWdFpXNTBMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMFJQVFVOdmJuUmxiblJNYjJGa1pXUW5MQ0JtZFc1amRHbHZiaUFvS1NCN1hISmNibHgwWTI5dWMzUWdZVzVwYldGc2MxVnliQ0E5SUNjdUxpOXFjeTloYm1sdFlXeHpMbXB6YjI0bk8xeHlYRzVjZEdOdmJuTjBJR0Z1YVcxaGJITlFZV2RsY3lBOUlHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0NkaGJtbHRZV3h6TFhCaFoyVnpKeWs3WEhKY2JseDBZMjl1YzNRZ1pHOW5jMEp2ZUNBOUlHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0Nka2IyZHpMV0p2ZUNjcE8xeHlYRzVjZEdOdmJuTjBJR05oZEhOQ2IzZ2dQU0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDZ25ZMkYwY3kxaWIzZ25LVHRjY2x4dVhISmNibHgwWm5WdVkzUnBiMjRnWjJWMFFXNXBiV0ZzYzBSaGRHRW9LU0I3WEhKY2JseDBYSFJ5WlhSMWNtNGdibVYzSUZCeWIyMXBjMlVvS0hKbGMyOXNkbVVzSUhKbGFtVmpkQ2tnUFQ0Z2UxeHlYRzVjZEZ4MFhIUm1aWFJqYUNoaGJtbHRZV3h6VlhKc0tWeHlYRzVjZEZ4MFhIUmNkQzUwYUdWdUtDaHlaWE53S1NBOVBpQnlaWE53TG1wemIyNG9LU2xjY2x4dVhIUmNkRngwWEhRdWRHaGxiaWdvWkdGMFlTa2dQVDRnY21WemIyeDJaU2hrWVhSaEtTbGNjbHh1WEhSY2RGeDBYSFF1WTJGMFkyZ29LR1Z5Y2lrZ1BUNGdjbVZxWldOMEtHVnljaWtwTzF4eVhHNWNkRngwZlNrN1hISmNibHgwZlZ4eVhHNWNjbHh1WEhSamIyNXpkQ0JrYjJkT2RXMWlaWElnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2duWkc5blRuVnRZbVZ5SnlrN1hISmNibHgwWTI5dWMzUWdZMkYwVG5WdFltVnlJRDBnWkc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEVKNVNXUW9KMk5oZEU1MWJXSmxjaWNwTzF4eVhHNWNjbHh1WEhSaGMzbHVZeUJtZFc1amRHbHZiaUJrYVhOd2JHRjVRVzVwYldGc1RuVnRZbVZ5Y3lncElIdGNjbHh1WEhSY2RHTnZibk4wSUdSaGRHRk1hWE4wSUQwZ1lYZGhhWFFnWjJWMFFXNXBiV0ZzYzBSaGRHRW9LVHRjY2x4dVhIUmNkR052Ym5OMElHRnVhVzFoYkhOQmNuSmhlU0E5SUdSaGRHRk1hWE4wTG1GdWFXMWhiSE03WEhKY2JseHlYRzVjZEZ4MGJHVjBJR1J2WjNOQmNuSmhlVTUxYldKbGNpQTlJR0Z1YVcxaGJITkJjbkpoZVZzd1hTNWtiMmR6TG14bGJtZDBhRHRjY2x4dVhIUmNkR3hsZENCallYUnpRWEp5WVhsT2RXMWlaWElnUFNCaGJtbHRZV3h6UVhKeVlYbGJNRjB1WTJGMGN5NXNaVzVuZEdnN1hISmNibHh5WEc1Y2RGeDBaRzluVG5WdFltVnlMbWx1Ym1WeVZHVjRkQ0E5SUdSdlozTkJjbkpoZVU1MWJXSmxjanRjY2x4dVhIUmNkR05oZEU1MWJXSmxjaTVwYm01bGNsUmxlSFFnUFNCallYUnpRWEp5WVhsT2RXMWlaWEk3WEhKY2JseDBmVnh5WEc1Y2NseHVYSFJwWmlBb0tHUnZaMDUxYldKbGNpd2dZMkYwVG5WdFltVnlLU2tnZTF4eVhHNWNkRngwS0daMWJtTjBhVzl1SUNncElIdGNjbHh1WEhSY2RGeDBaR2x6Y0d4aGVVRnVhVzFoYkU1MWJXSmxjbk1vS1R0Y2NseHVYSFJjZEgwcEtDazdYSEpjYmx4MGZWeHlYRzVjY2x4dVhIUmhjM2x1WXlCbWRXNWpkR2x2YmlCa2FYTndiR0Y1UVc1cGJXRnNjeWdwSUh0Y2NseHVYSFJjZEdOdmJuTjBJR1JoZEdGTWFYTjBJRDBnWVhkaGFYUWdaMlYwUVc1cGJXRnNjMFJoZEdFb0tUdGNjbHh1WEhSY2RHTnZibk4wSUdGdWFXMWhiSE5CY25KaGVTQTlJR1JoZEdGTWFYTjBMbUZ1YVcxaGJITTdYSEpjYmx4eVhHNWNkRngwWVc1cGJXRnNjMEZ5Y21GNUxtWnZja1ZoWTJnb0tHRnVhVzFoYkNrZ1BUNGdlMXh5WEc1Y2RGeDBYSFJrYjJkelFYSnlZWGtnUFNCaGJtbHRZV3d1Wkc5bmN6dGNjbHh1WEhSY2RGeDBZMkYwYzBGeWNtRjVJRDBnWVc1cGJXRnNMbU5oZEhNN1hISmNibHh5WEc1Y2RGeDBYSFJrYjJkelFYSnlZWGt1Wm05eVJXRmphQ2dvWkc5bktTQTlQaUI3WEhKY2JseDBYSFJjZEZ4MFpHOW5RbTk0SUQwZ1pHOWpkVzFsYm5RdVkzSmxZWFJsUld4bGJXVnVkQ2duWkdsMkp5azdYSEpjYmx4MFhIUmNkRngwWkc5blFtOTRMbU5zWVhOelRHbHpkQzVoWkdRb0ozQmhaMlZmWDJKdmVDY3BPMXh5WEc1Y2NseHVYSFJjZEZ4MFhIUmpiMjV6ZENCa2IyZFpaV0Z5Y3lBOUlHUnZaeTVpYVhKMGFEdGNjbHh1WEhKY2JseDBYSFJjZEZ4MFkyOXVjM1FnYldsc2FYTmxZM05DWlhSM1pXVnVSRTlDWVc1a01UazNNQ0E5SUVSaGRHVXVjR0Z5YzJVb1pHOW5XV1ZoY25NcE8xeHlYRzVjZEZ4MFhIUmNkR052Ym5OMElHMXBiR2x6WldOelFtVjBkMlZsYms1UFYyRnVaREU1TnpBZ1BTQkVZWFJsTG01dmR5Z3BPMXh5WEc1Y2RGeDBYSFJjZEdOdmJuTjBJR0ZuWlVsdVRXbHNhWE5sWTNNZ1BWeHlYRzVjZEZ4MFhIUmNkRngwYldsc2FYTmxZM05DWlhSM1pXVnVUazlYWVc1a01UazNNQ0F0SUcxcGJHbHpaV056UW1WMGQyVmxia1JQUW1GdVpERTVOekE3WEhKY2JseHlYRzVjZEZ4MFhIUmNkR052Ym5OMElHMXBiR2x6WldOeklEMGdZV2RsU1c1TmFXeHBjMlZqY3p0Y2NseHVYSFJjZEZ4MFhIUmpiMjV6ZENCelpXTnpJRDBnTVRBd01EdGNjbHh1WEhSY2RGeDBYSFJqYjI1emRDQnRhVzV6SUQwZ2MyVmpjeUFxSURZd08xeHlYRzVjZEZ4MFhIUmNkR052Ym5OMElHaHZkWElnUFNCdGFXNXpJQ29nTmpBN1hISmNibHgwWEhSY2RGeDBZMjl1YzNRZ1pHRjVJRDBnYUc5MWNpQXFJREkwTzF4eVhHNWNkRngwWEhSY2RHTnZibk4wSUhsbFlYSWdQU0JrWVhrZ0tpQXpOalU3WEhKY2JseHlYRzVjZEZ4MFhIUmNkR3hsZENCNVpXRnljeUE5SUUxaGRHZ3VjbTkxYm1Rb2JXbHNhWE5sWTNNZ0x5QjVaV0Z5S1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwWkc5blFtOTRMbWx1Ym1WeVNGUk5UQ0E5SUdCY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHUnBkaUJqYkdGemN6MWNJbkJoWjJWZlgySnZlQzEwYjNCY0lqNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4cGJXY2djM0pqUFZ3aUxpUjdaRzluTG1sdFlXZGxmVndpSUdGc2REMWNJaVI3Wkc5bkxtNWhiV1Y5SUNSN1hISmNibHgwWEhSY2RGeDBYSFJrYjJjdWMzQmxZMmxsYzF4eVhHNWNkRngwWEhSY2RIMWNJbjB2UGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOEwyUnBkajVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdScGRpQmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMWliM1IwYjIxY0lqNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4b015QmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMTBhWFJzWlZ3aVBpUjdaRzluTG01aGJXVjlQQzlvTXo1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhrYVhZZ1kyeGhjM005WENKd1lXZGxYMTlpYjNndFkyOXVkR1Z1ZEZ3aVBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeGthWFlnWTJ4aGMzTTlYQ0psZUhCaGJtUk5iM0psUTI5dWRHVnVkRndpSUdsa1BWd2ljMmh2ZDAxdmNtVXRKSHRjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEdSdlp5NXpjR1ZqYVdWelhISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MGZTUjdaRzluTG01MWJXSmxjbjFjSWo1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQSEFnWTJ4aGMzTTlYQ0p3WVdkbFgxOWliM2d0ZEdWNGRGd2lQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdKSHRrYjJjdVpHVnpZMzFjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOXdQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2WkdsMlBseHlYRzRnSUNBZ1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHUnBkaUJqYkdGemN6MWNJbVY0Y0dGdVpFMXZjbVZJYjJ4a1pYSmNJajVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHSjFkSFJ2Ymx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWlhod1lXNWtMVzF2Y21WY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdSaGRHRXRhR2xrWlhSbGVIUTlYQ0l1TGk1U1pXRmtJR3hsYzNOY0lseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pHRjBZUzF6YUc5M2RHVjRkRDFjSWk0dUxsSmxZV1FnYlc5eVpWd2lYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmtZWFJoTFhSaGNtZGxkRDFjSW5Ob2IzZE5iM0psTFNSN1pHOW5Mbk53WldOcFpYTjlKSHRjY2x4dVhIUmNkRngwWEhSY2RHUnZaeTV1ZFcxaVpYSmNjbHh1WEhSY2RGeDBYSFI5WENKY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOc1lYTnpQVndpWW5WMGRHOXVJSE5vYjNkTmIzSmxYQ0pjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0xpNHVVbVZoWkNCdGIzSmxYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dlluVjBkRzl1UGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dlpHbDJQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOWthWFkrWEhKY2JpQWdJQ0JjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeDFiQ0JqYkdGemN6MWNJbkJoWjJWZlgySnZlQzFwWTI5dWMxd2lQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhzYVNCamJHRnpjejFjSW5CaFoyVmZYMkp2ZUMxcFkyOXVYQ0krWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHBJR05zWVhOelBWd2labUZ6SUdaaExYZGxhV2RvZEZ3aVBqd3ZhVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBK1BITndZVzRnWTJ4aGMzTTlYQ0p3WVdkbFgxOWliM2d0YVdOdmJpMHRkR1Y0ZEZ3aVBpUjdYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFpHOW5MbmRsYVdkb2RGeHlYRzVjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFI5SUd0blBDOXpjR0Z1UGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dmJHaytYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR3hwSUdOc1lYTnpQVndpY0dGblpWOWZZbTk0TFdsamIyNWNJajVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHa2dZMnhoYzNNOVhDSm1ZWE1nWm1FdFlYSnliM2R6TFdGc2RDMTJYQ0krUEM5cFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRDQ4YzNCaGJpQmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMXBZMjl1TFMxMFpYaDBYQ0krSkh0Y2NseHVYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJrYjJjdWFHVnBaMmgwWEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RIMWpiVHd2YzNCaGJqNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThMMnhwUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4c2FTQmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMXBZMjl1WENJK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhwSUdOc1lYTnpQVndpWm1GeklHWmhMV05oYkdWdVpHRnlMV05vWldOclhDSStQQzlwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lENDhjM0JoYmlCamJHRnpjejFjSW5CaFoyVmZYMkp2ZUMxcFkyOXVMUzEwWlhoMFhDSStKSHQ1WldGeWMzMGdlWEl1UEM5emNHRnVQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2YkdrK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHeHBJR05zWVhOelBWd2ljR0ZuWlY5ZlltOTRMV2xqYjI1Y0lqNWNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwUEdrZ1kyeGhjM005WENKbVlYTWdabUV0Y0dGc1pYUjBaVndpUGp3dmFWeHlYRzVjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFErUEhOd1lXNGdZMnhoYzNNOVhDSndZV2RsWDE5aWIzZ3RhV052YmkwdGRHVjRkRndpUGlSN1pHOW5MbU52Ykc5eVd6QmRJRDhnWkc5bkxtTnZiRzl5V3pCZElEb2dKeTBuZlR3dmMzQmhiajVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4TDJ4cFBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHNhU0JqYkdGemN6MWNJbkJoWjJWZlgySnZlQzFwWTI5dVhDSStYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBYSFJjZER4cElHTnNZWE56UFZ3aVptRnpJR1poTFhCaGJHVjBkR1ZjSWo0OEwybGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwUGp4emNHRnVJR05zWVhOelBWd2ljR0ZuWlY5ZlltOTRMV2xqYjI0dExYUmxlSFJjSWo0a2UyUnZaeTVqYjJ4dmNsc3hYU0EvSUdSdlp5NWpiMnh2Y2xzeFhTQTZJQ2N0SjMwOEwzTndZVzQrWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5c2FUNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThiR2tnWTJ4aGMzTTlYQ0p3WVdkbFgxOWliM2d0YVdOdmJsd2lQbHh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhROGFTQmpiR0Z6Y3oxY0ltWmhjeUJtWVMxd1lXeGxkSFJsWENJK1BDOXBYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEQ0OGMzQmhiaUJqYkdGemN6MWNJbkJoWjJWZlgySnZlQzFwWTI5dUxTMTBaWGgwWENJK0pIdGtiMmN1WTI5c2IzSmJNbDBnUHlCa2IyY3VZMjlzYjNKYk1sMGdPaUFuTFNkOVBDOXpjR0Z1UGx4eVhHNWNkRngwWEhSY2RGeDBYSFJjZEZ4MFBDOXNhVDVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YkdrZ1kyeGhjM005WENKd1lXZGxYMTlpYjNndGFXTnZibHdpUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThhU0JqYkdGemN6MWNJbVpoY3lCbVlTMXdZWGRjSWo0OEwybGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUGp4emNHRnVJR05zWVhOelBWd2ljR0ZuWlY5ZlltOTRMV2xqYjI0dExYUmxlSFJjSWo0a2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEdSdlp5NWpiMkYwWEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RIMDhMM053WVc0K1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOXNhVDVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YkdrZ1kyeGhjM005WENKd1lXZGxYMTlpYjNndGFXTnZibHdpUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThhU0JqYkdGemN6MWNJbVpoY3lCbVlTMTJaVzUxY3kxdFlYSnpYQ0krUEM5cFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRDQ4YzNCaGJpQmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMXBZMjl1TFMxMFpYaDBYQ0krSkh0Y2NseHVYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJrYjJjdVoyVnVaR1Z5WEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RIMDhMM053WVc0K1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOXNhVDVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEd3ZkV3crWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dlpHbDJQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWUR0Y2NseHVYSEpjYmx4MFhIUmNkRngwWkc5bmMwSnZlQzVoY0hCbGJtUkRhR2xzWkNoa2IyZENiM2dwTzF4eVhHNWNkRngwWEhSOUtUdGNjbHh1WEhKY2JseDBYSFJjZEdOaGRITkJjbkpoZVM1bWIzSkZZV05vS0NoallYUXBJRDArSUh0Y2NseHVYSFJjZEZ4MFhIUmpZWFJDYjNnZ1BTQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0Nka2FYWW5LVHRjY2x4dVhIUmNkRngwWEhSallYUkNiM2d1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25jR0ZuWlY5ZlltOTRKeWs3WEhKY2JseHlYRzVjZEZ4MFhIUmNkR052Ym5OMElHTmhkRmxsWVhKeklEMGdZMkYwTG1KcGNuUm9PMXh5WEc1Y2NseHVYSFJjZEZ4MFhIUmpiMjV6ZENCdGFXeHBjMlZqYzBKbGRIZGxaVzVFVDBKaGJtUXhPVGN3WTJGMElEMGdSR0YwWlM1d1lYSnpaU2hqWVhSWlpXRnljeWs3WEhKY2JseDBYSFJjZEZ4MFkyOXVjM1FnYldsc2FYTmxZM05DWlhSM1pXVnVUazlYWVc1a01UazNNQ0E5SUVSaGRHVXVibTkzS0NrN1hISmNibHh5WEc1Y2RGeDBYSFJjZEdOdmJuTjBJR0ZuWlVsdVRXbHNhWE5sWTNORFlYUWdQVnh5WEc1Y2RGeDBYSFJjZEZ4MGJXbHNhWE5sWTNOQ1pYUjNaV1Z1VGs5WFlXNWtNVGszTUNBdElHMXBiR2x6WldOelFtVjBkMlZsYmtSUFFtRnVaREU1TnpCallYUTdYSEpjYmx4eVhHNWNkRngwWEhSY2RHTnZibk4wSUcxcGJHbHpaV056UTJGMElEMGdZV2RsU1c1TmFXeHBjMlZqYzBOaGREdGNjbHh1WEhSY2RGeDBYSFJqYjI1emRDQnpaV056SUQwZ01UQXdNRHRjY2x4dVhIUmNkRngwWEhSamIyNXpkQ0J0YVc1eklEMGdjMlZqY3lBcUlEWXdPMXh5WEc1Y2RGeDBYSFJjZEdOdmJuTjBJR2h2ZFhJZ1BTQnRhVzV6SUNvZ05qQTdYSEpjYmx4MFhIUmNkRngwWTI5dWMzUWdaR0Y1SUQwZ2FHOTFjaUFxSURJME8xeHlYRzVjZEZ4MFhIUmNkR052Ym5OMElIbGxZWElnUFNCa1lYa2dLaUF6TmpVN1hISmNibHh5WEc1Y2RGeDBYSFJjZEd4bGRDQjVaV0Z5YzBOaGRDQTlJRTFoZEdndWNtOTFibVFvYldsc2FYTmxZM05EWVhRZ0x5QjVaV0Z5S1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwWTJGMFFtOTRMbWx1Ym1WeVNGUk5UQ0E5SUdCY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHUnBkaUJqYkdGemN6MWNJbkJoWjJWZlgySnZlQzEwYjNCY0lqNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4cGJXY2djM0pqUFZ3aUxpUjdZMkYwTG1sdFlXZGxmVndpSUdGc2REMWNJaVI3WTJGMExtNWhiV1Y5SUNSN1hISmNibHgwWEhSY2RGeDBYSFJqWVhRdWMzQmxZMmxsYzF4eVhHNWNkRngwWEhSY2RIMWNJbjB2UGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOEwyUnBkajVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdScGRpQmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMWliM1IwYjIxY0lqNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4b015QmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMTBhWFJzWlZ3aVBpUjdZMkYwTG01aGJXVjlQQzlvTXo1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhrYVhZZ1kyeGhjM005WENKd1lXZGxYMTlpYjNndFkyOXVkR1Z1ZEZ3aVBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeGthWFlnWTJ4aGMzTTlYQ0psZUhCaGJtUk5iM0psUTI5dWRHVnVkRndpSUdsa1BWd2ljMmh2ZDAxdmNtVXRKSHRjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEdOaGRDNXpjR1ZqYVdWelhISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MGZTUjdZMkYwTG01MWJXSmxjbjFjSWo1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQSEFnWTJ4aGMzTTlYQ0p3WVdkbFgxOWliM2d0ZEdWNGRGd2lQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdKSHRqWVhRdVpHVnpZMzFjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOXdQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2WkdsMlBseHlYRzRnSUNBZ1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHUnBkaUJqYkdGemN6MWNJbVY0Y0dGdVpFMXZjbVZJYjJ4a1pYSmNJajVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHSjFkSFJ2Ymx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWlhod1lXNWtMVzF2Y21WY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdSaGRHRXRhR2xrWlhSbGVIUTlYQ0l1TGk1U1pXRmtJR3hsYzNOY0lseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pHRjBZUzF6YUc5M2RHVjRkRDFjSWk0dUxsSmxZV1FnYlc5eVpWd2lYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmtZWFJoTFhSaGNtZGxkRDFjSW5Ob2IzZE5iM0psTFNSN1kyRjBMbk53WldOcFpYTjlKSHRjY2x4dVhIUmNkRngwWEhSY2RHTmhkQzV1ZFcxaVpYSmNjbHh1WEhSY2RGeDBYSFI5WENKY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOc1lYTnpQVndpWW5WMGRHOXVJSE5vYjNkTmIzSmxYQ0pjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0xpNHVVbVZoWkNCdGIzSmxYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dlluVjBkRzl1UGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dlpHbDJQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOWthWFkrWEhKY2JpQWdJQ0JjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeDFiQ0JqYkdGemN6MWNJbkJoWjJWZlgySnZlQzFwWTI5dWMxd2lQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhzYVNCamJHRnpjejFjSW5CaFoyVmZYMkp2ZUMxcFkyOXVYQ0krWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHBJR05zWVhOelBWd2labUZ6SUdaaExYZGxhV2RvZEZ3aVBqd3ZhVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBK1BITndZVzRnWTJ4aGMzTTlYQ0p3WVdkbFgxOWliM2d0YVdOdmJpMHRkR1Y0ZEZ3aVBpUjdYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFkyRjBMbmRsYVdkb2RGeHlYRzVjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFI5SUd0blBDOXpjR0Z1UGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dmJHaytYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR3hwSUdOc1lYTnpQVndpY0dGblpWOWZZbTk0TFdsamIyNWNJajVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHa2dZMnhoYzNNOVhDSm1ZWE1nWm1FdFlYSnliM2R6TFdGc2RDMTJYQ0krUEM5cFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRDQ4YzNCaGJpQmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMXBZMjl1TFMxMFpYaDBYQ0krSkh0Y2NseHVYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJqWVhRdWFHVnBaMmgwWEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RIMWpiVHd2YzNCaGJqNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThMMnhwUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4c2FTQmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMXBZMjl1WENJK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhwSUdOc1lYTnpQVndpWm1GeklHWmhMV05oYkdWdVpHRnlMV05vWldOclhDSStQQzlwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lENDhjM0JoYmlCamJHRnpjejFjSW5CaFoyVmZYMkp2ZUMxcFkyOXVMUzEwWlhoMFhDSStKSHQ1WldGeWMwTmhkSDBnZVhJdVBDOXpjR0Z1UGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dmJHaytYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR3hwSUdOc1lYTnpQVndpY0dGblpWOWZZbTk0TFdsamIyNWNJajVjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFBHa2dZMnhoYzNNOVhDSm1ZWE1nWm1FdGNHRnNaWFIwWlZ3aVBqd3ZhVnh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhRK1BITndZVzRnWTJ4aGMzTTlYQ0p3WVdkbFgxOWliM2d0YVdOdmJpMHRkR1Y0ZEZ3aVBpUjdZMkYwTG1OdmJHOXlXekJkSUQ4Z1kyRjBMbU52Ykc5eVd6QmRJRG9nSnkwbmZUd3ZjM0JoYmo1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOEwyeHBQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhzYVNCamJHRnpjejFjSW5CaFoyVmZYMkp2ZUMxcFkyOXVYQ0krWEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwWEhSY2REeHBJR05zWVhOelBWd2labUZ6SUdaaExYQmhiR1YwZEdWY0lqNDhMMmxjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFBqeHpjR0Z1SUdOc1lYTnpQVndpY0dGblpWOWZZbTk0TFdsamIyNHRMWFJsZUhSY0lqNGtlMk5oZEM1amIyeHZjbHN4WFNBL0lHTmhkQzVqYjJ4dmNsc3hYU0E2SUNjdEozMDhMM053WVc0K1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOXNhVDVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YkdrZ1kyeGhjM005WENKd1lXZGxYMTlpYjNndGFXTnZibHdpUGx4eVhHNWNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUThhU0JqYkdGemN6MWNJbVpoY3lCbVlTMXdZV3hsZEhSbFhDSStQQzlwWEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RENDhjM0JoYmlCamJHRnpjejFjSW5CaFoyVmZYMkp2ZUMxcFkyOXVMUzEwWlhoMFhDSStKSHRqWVhRdVkyOXNiM0piTWwwZ1B5QmpZWFF1WTI5c2IzSmJNbDBnT2lBbkxTZDlQQzl6Y0dGdVBseHlYRzVjZEZ4MFhIUmNkRngwWEhSY2RGeDBQQzlzYVQ1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGJHa2dZMnhoYzNNOVhDSndZV2RsWDE5aWIzZ3RhV052Ymx3aVBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YVNCamJHRnpjejFjSW1aaGN5Qm1ZUzF3WVhkY0lqNDhMMmxjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BqeHpjR0Z1SUdOc1lYTnpQVndpY0dGblpWOWZZbTk0TFdsamIyNHRMWFJsZUhSY0lqNGtlMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RHTmhkQzVqYjJGMFhISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkSDA4TDNOd1lXNCtYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzlzYVQ1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGJHa2dZMnhoYzNNOVhDSndZV2RsWDE5aWIzZ3RhV052Ymx3aVBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YVNCamJHRnpjejFjSW1aaGN5Qm1ZUzEyWlc1MWN5MXRZWEp6WENJK1BDOXBYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUQ0OGMzQmhiaUJqYkdGemN6MWNJbkJoWjJWZlgySnZlQzFwWTI5dUxTMTBaWGgwWENJK0pIdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSallYUXVaMlZ1WkdWeVhISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkSDA4TDNOd1lXNCtYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzlzYVQ1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2ZFd3K1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEd3ZaR2wyUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1lEdGNjbHh1WEhKY2JseDBYSFJjZEZ4MFkyRjBjMEp2ZUM1aGNIQmxibVJEYUdsc1pDaGpZWFJDYjNncE8xeHlYRzVjZEZ4MFhIUjlLVHRjY2x4dVhIUmNkSDBwTzF4eVhHNWNjbHh1WEhSY2RHeGxkQ0JrYjJkQ2IzaEJjbkpoZVNBOUlGc3VMaTVrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eVFXeHNLQ2NqWkc5bmN5MWliM2dnTG5CaFoyVmZYMkp2ZUNjcFhUdGNjbHh1WEhSY2RHeGxkQ0JqWVhSQ2IzaEJjbkpoZVNBOUlGc3VMaTVrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eVFXeHNLQ2NqWTJGMGN5MWliM2dnTG5CaFoyVmZYMkp2ZUNjcFhUdGNjbHh1WEhSY2RHeGxkQ0JqZFhKeVpXNTBVR0ZuWlNBOUlERTdYSEpjYmx4MFhIUnNaWFFnWld4bGJXVnVkSE5QYmxCaFoyVWdQU0EwTzF4eVhHNWNjbHh1WEhSY2RHTnZibk4wSUhCaFoybHVZWFJwYjI1RmJFUnZaM01nUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2duWkc5bmN5MXdZV2RwYm1GMGFXOXVKeWs3WEhKY2JseDBYSFJqYjI1emRDQndZV2RwYm1GMGFXOXVSV3hEWVhSeklEMGdaRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkRUo1U1dRb0oyTmhkSE10Y0dGbmFXNWhkR2x2YmljcE8xeHlYRzVjY2x4dVhIUmNkR1oxYm1OMGFXOXVJR1JwYzNCc1lYbFFZV2RwYm1GMFpXUkpkR1Z0Y3locGRHVnRjeXdnZDNKaGNIQmxjaXdnYVhSbGJYTlFaWEpRWVdkbExDQndZV2RsS1NCN1hISmNibHgwWEhSY2RIZHlZWEJ3WlhJdWFXNXVaWEpJVkUxTUlEMGdKeWM3WEhKY2JseDBYSFJjZEhCaFoyVXRMVHRjY2x4dVhISmNibHgwWEhSY2RHeGxkQ0J6ZEdGeWRDQTlJR2wwWlcxelVHVnlVR0ZuWlNBcUlIQmhaMlU3WEhKY2JseDBYSFJjZEd4bGRDQmxibVFnUFNCemRHRnlkQ0FySUdsMFpXMXpVR1Z5VUdGblpUdGNjbHh1WEhSY2RGeDBiR1YwSUhCaFoybHVZWFJsWkVsMFpXMXpJRDBnYVhSbGJYTXVjMnhwWTJVb2MzUmhjblFzSUdWdVpDazdYSEpjYmx4eVhHNWNkRngwWEhSd1lXZHBibUYwWldSSmRHVnRjeTVtYjNKRllXTm9LQ2hwZEdWdEtTQTlQaUI3WEhKY2JseDBYSFJjZEZ4MGJHVjBJR2wwWlcxRmJDQTlJR1J2WTNWdFpXNTBMbU55WldGMFpVVnNaVzFsYm5Rb0oyUnBkaWNwTzF4eVhHNWNkRngwWEhSY2RHbDBaVzFGYkM1amJHRnpjMHhwYzNRdVlXUmtLQ2R3WVdkbFgxOWliM2duS1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwYVhSbGJVVnNJRDBnYVhSbGJUdGNjbHh1WEhKY2JseDBYSFJjZEZ4MGQzSmhjSEJsY2k1aGNIQmxibVJEYUdsc1pDaHBkR1Z0Uld3cE8xeHlYRzVjZEZ4MFhIUjlLVHRjY2x4dVhIUmNkSDFjY2x4dVhISmNibHgwWEhSbWRXNWpkR2x2YmlCa2FYTndiR0Y1VUdGbmFXNWhkR2x2YmlocGRHVnRjeXdnZDNKaGNIQmxjaXdnYVhSbGJYTlFaWEpRWVdkbEtTQjdYSEpjYmx4MFhIUmNkSGR5WVhCd1pYSXVhVzV1WlhKSVZFMU1JRDBnSnljN1hISmNibHh5WEc1Y2RGeDBYSFJzWlhRZ2NHRm5aVU52ZFc1MElEMGdUV0YwYUM1alpXbHNLR2wwWlcxekxteGxibWQwYUNBdklHbDBaVzF6VUdWeVVHRm5aU2s3WEhKY2JseHlYRzVjZEZ4MFhIUm1iM0lnS0d4bGRDQnBJRDBnTVRzZ2FTQThJSEJoWjJWRGIzVnVkQ0FySURFN0lHa3JLeWtnZTF4eVhHNWNkRngwWEhSY2RHeGxkQ0JpZEc0Z1BTQndZV2RwYm1GMGFXOXVRblYwZEc5dUtHa3NJSEJoWjJWRGIzVnVkQ2s3WEhKY2JseHlYRzVjZEZ4MFhIUmNkR0owYmk1emRIbHNaUzUzYVdSMGFDQTlJQ2N3Snp0Y2NseHVYSFJjZEZ4MFhIUmlkRzR1YzNSNWJHVXViM1psY21ac2IzY2dQU0FuYUdsa1pHVnVKenRjY2x4dVhIUmNkRngwWEhSaWRHNHVjM1I1YkdVdWJXRnlaMmx1SUQwZ0p6QW5PMXh5WEc1Y2NseHVYSFJjZEZ4MFhIUjNjbUZ3Y0dWeUxtRndjR1Z1WkVOb2FXeGtLR0owYmlrN1hISmNibHgwWEhSY2RIMWNjbHh1WEhKY2JseDBYSFJjZEd4bGRDQnVaWGgwUW5SdUlEMGdibVY0ZEZCaFoyVW9jR0ZuWlVOdmRXNTBLVHRjY2x4dVhIUmNkRngwZDNKaGNIQmxjaTVoY0hCbGJtUkRhR2xzWkNodVpYaDBRblJ1S1R0Y2NseHVYSEpjYmx4MFhIUmNkR3hsZENCd2NtVjJRblJ1SUQwZ2NISmxkbEJoWjJVb2NHRm5aVU52ZFc1MEtUdGNjbHh1WEhSY2RGeDBkM0poY0hCbGNpNXdjbVZ3Wlc1a0tIQnlaWFpDZEc0cE8xeHlYRzVjY2x4dVhIUmNkRngwYkdWMElHTjFjbkpsYm5SQ2RHNUViMmR6SUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWhjY2x4dVhIUmNkRngwWEhRbkkyUnZaM01nTG5CaFoybHVZWFJwYjI0dFluUnVMbUZqZEdsMlpTZGNjbHh1WEhSY2RGeDBLVHRjY2x4dVhIUmNkRngwYkdWMElHTjFjbkpsYm5SQ2RHNURZWFJ6SUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWhjY2x4dVhIUmNkRngwWEhRbkkyTmhkSE1nTG5CaFoybHVZWFJwYjI0dFluUnVMbUZqZEdsMlpTZGNjbHh1WEhSY2RGeDBLVHRjY2x4dVhISmNibHgwWEhSY2RHbG1JQ2hqZFhKeVpXNTBRblJ1Ukc5bmN5QW1KaUJqZFhKeVpXNTBRblJ1UTJGMGN5a2dlMXh5WEc1Y2RGeDBYSFJjZEdOMWNuSmxiblJDZEc1RWIyZHpMbU5zWVhOelRHbHpkQzVoWkdRb0oyZHliM1Z3SnlrN1hISmNibHgwWEhSY2RGeDBZM1Z5Y21WdWRFSjBia1J2WjNNdWJtVjRkRVZzWlcxbGJuUlRhV0pzYVc1bkxtTnNZWE56VEdsemRDNWhaR1FvSjJkeWIzVndKeWs3WEhKY2JseDBYSFJjZEZ4MFkzVnljbVZ1ZEVKMGJrUnZaM011Ym1WNGRFVnNaVzFsYm5SVGFXSnNhVzVuTG01bGVIUkZiR1Z0Wlc1MFUybGliR2x1Wnk1amJHRnpjMHhwYzNRdVlXUmtLRnh5WEc1Y2RGeDBYSFJjZEZ4MEoyZHliM1Z3SjF4eVhHNWNkRngwWEhSY2RDazdYSEpjYmx4MFhIUmNkRngwWTNWeWNtVnVkRUowYmtSdlozTXVjSEpsZG1sdmRYTkZiR1Z0Wlc1MFUybGliR2x1Wnk1amJHRnpjMHhwYzNRdVlXUmtLQ2RuY205MWNDY3BPMXh5WEc1Y2NseHVYSFJjZEZ4MFhIUmpkWEp5Wlc1MFFuUnVRMkYwY3k1amJHRnpjMHhwYzNRdVlXUmtLQ2RuY205MWNDY3BPMXh5WEc1Y2RGeDBYSFJjZEdOMWNuSmxiblJDZEc1RFlYUnpMbTVsZUhSRmJHVnRaVzUwVTJsaWJHbHVaeTVqYkdGemMweHBjM1F1WVdSa0tDZG5jbTkxY0NjcE8xeHlYRzVjZEZ4MFhIUmNkR04xY25KbGJuUkNkRzVEWVhSekxtNWxlSFJGYkdWdFpXNTBVMmxpYkdsdVp5NXVaWGgwUld4bGJXVnVkRk5wWW14cGJtY3VZMnhoYzNOTWFYTjBMbUZrWkNoY2NseHVYSFJjZEZ4MFhIUmNkQ2RuY205MWNDZGNjbHh1WEhSY2RGeDBYSFFwTzF4eVhHNWNkRngwWEhSY2RHTjFjbkpsYm5SQ2RHNURZWFJ6TG5CeVpYWnBiM1Z6Uld4bGJXVnVkRk5wWW14cGJtY3VZMnhoYzNOTWFYTjBMbUZrWkNnblozSnZkWEFuS1R0Y2NseHVYSFJjZEZ4MGZWeHlYRzVjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkR1oxYm1OMGFXOXVJRzVsZUhSUVlXZGxLSEJoWjJWRGIzVnVkQ2tnZTF4eVhHNWNkRngwWEhSc1pYUWdibVY0ZEVKMGJpQTlJR1J2WTNWdFpXNTBMbU55WldGMFpVVnNaVzFsYm5Rb0oySjFkSFJ2YmljcE8xeHlYRzVjZEZ4MFhIUnVaWGgwUW5SdUxtTnNZWE56VEdsemRDNWhaR1FvSjI1bGVIUW5LVHRjY2x4dVhIUmNkRngwYm1WNGRFSjBiaTVwYm01bGNsUmxlSFFnUFNBblBpYzdYSEpjYmx4MFhIUmNkRzVsZUhSQ2RHNHVZMnhoYzNOTWFYTjBMbUZrWkNnbmNHRm5hVzVoZEdsdmJpMWlkRzRuS1R0Y2NseHVYSEpjYmx4MFhIUmNkRzVsZUhSQ2RHNHVZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25ZMnhwWTJzbkxDQW9aU2tnUFQ0Z2UxeHlYRzVjZEZ4MFhIUmNkR2xtSUNodVpYaDBRblJ1TG5CaGNtVnVkRVZzWlcxbGJuUWdQVDBnY0dGbmFXNWhkR2x2YmtWc1JHOW5jeWtnZTF4eVhHNWNkRngwWEhSY2RGeDBaR2x6Y0d4aGVWQmhaMmx1WVhSbFpFbDBaVzF6S0Z4eVhHNWNkRngwWEhSY2RGeDBYSFJrYjJkQ2IzaEJjbkpoZVN4Y2NseHVYSFJjZEZ4MFhIUmNkRngwWkc5bmMwSnZlQ3hjY2x4dVhIUmNkRngwWEhSY2RGeDBaV3hsYldWdWRITlBibEJoWjJVc1hISmNibHgwWEhSY2RGeDBYSFJjZEdOMWNuSmxiblJRWVdkbFhISmNibHgwWEhSY2RGeDBYSFFwTzF4eVhHNWNjbHh1WEhSY2RGeDBYSFJjZEd4bGRDQmhZM1JwZG1WQ2RHNUViMmNnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLRnh5WEc1Y2RGeDBYSFJjZEZ4MFhIUW5JMlJ2WjNNZ0xuQmhaMmx1WVhScGIyNHRZblJ1TG1GamRHbDJaU2RjY2x4dVhIUmNkRngwWEhSY2RDazdYSEpjYmx4eVhHNWNkRngwWEhSY2RGeDBZV04wYVhabFFuUnVSRzluTG01bGVIUkZiR1Z0Wlc1MFUybGliR2x1Wnk1amJHbGpheWdwTzF4eVhHNWNjbHh1WEhSY2RGeDBYSFJjZEdsbUlDaGpkWEp5Wlc1MFVHRm5aU0E5UFQwZ2NHRm5aVU52ZFc1MEtTQjdYSEpjYmx4MFhIUmNkRngwWEhSY2RHNWxlSFJDZEc0dWMzUjViR1V1YjNCaFkybDBlU0E5SUNjd0xqVW5PMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUnVaWGgwUW5SdUxuTjBlV3hsTG5CdmFXNTBaWEpGZG1WdWRITWdQU0FuYm05dVpTYzdYSEpjYmx4MFhIUmNkRngwWEhSOVhISmNibHh5WEc1Y2RGeDBYSFJjZEZ4MGJHVjBJSEJ5WlhaQ2RHNGdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtDY2paRzluY3lBdWNISmxkaWNwTzF4eVhHNWNjbHh1WEhSY2RGeDBYSFJjZEdsbUlDaGpkWEp5Wlc1MFVHRm5aU0FoUFQwZ01Ta2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUndjbVYyUW5SdUxuTjBlV3hsTG05d1lXTnBkSGtnUFNBbk1TYzdYSEpjYmx4MFhIUmNkRngwWEhSY2RIQnlaWFpDZEc0dWMzUjViR1V1Y0c5cGJuUmxja1YyWlc1MGN5QTlJQ2RoYkd3bk8xeHlYRzVjZEZ4MFhIUmNkRngwZlZ4eVhHNWNjbHh1WEhSY2RGeDBYSFJjZEdsbUlDaGhZM1JwZG1WQ2RHNUViMmNwSUh0Y2NseHVYSFJjZEZ4MFhIUmNkRngwWVdOMGFYWmxRblJ1Ukc5bkxtTnNZWE56VEdsemRDNWhaR1FvSjJkeWIzVndKeWs3WEhKY2JseDBYSFJjZEZ4MFhIUmNkR0ZqZEdsMlpVSjBia1J2Wnk1dVpYaDBSV3hsYldWdWRGTnBZbXhwYm1jdVkyeGhjM05NYVhOMExtRmtaQ2duWjNKdmRYQW5LVHRjY2x4dVhIUmNkRngwWEhSY2RGeDBZV04wYVhabFFuUnVSRzluTG5CeVpYWnBiM1Z6Uld4bGJXVnVkRk5wWW14cGJtY3VZMnhoYzNOTWFYTjBMbUZrWkNnblozSnZkWEFuS1R0Y2NseHVYSFJjZEZ4MFhIUmNkSDFjY2x4dVhIUmNkRngwWEhSOVhISmNibHh5WEc1Y2RGeDBYSFJjZEdsbUlDaHVaWGgwUW5SdUxuQmhjbVZ1ZEVWc1pXMWxiblFnUFQwZ2NHRm5hVzVoZEdsdmJrVnNRMkYwY3lrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWkdsemNHeGhlVkJoWjJsdVlYUmxaRWwwWlcxektGeHlYRzVjZEZ4MFhIUmNkRngwWEhSallYUkNiM2hCY25KaGVTeGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFkyRjBjMEp2ZUN4Y2NseHVYSFJjZEZ4MFhIUmNkRngwWld4bGJXVnVkSE5QYmxCaFoyVXNYSEpjYmx4MFhIUmNkRngwWEhSY2RHTjFjbkpsYm5SUVlXZGxYSEpjYmx4MFhIUmNkRngwWEhRcE8xeHlYRzVjY2x4dVhIUmNkRngwWEhSY2RHeGxkQ0JoWTNScGRtVkNkRzVEWVhRZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0Z4eVhHNWNkRngwWEhSY2RGeDBYSFFuSTJOaGRITWdMbkJoWjJsdVlYUnBiMjR0WW5SdUxtRmpkR2wyWlNkY2NseHVYSFJjZEZ4MFhIUmNkQ2s3WEhKY2JseHlYRzVjZEZ4MFhIUmNkRngwWVdOMGFYWmxRblJ1UTJGMExtNWxlSFJGYkdWdFpXNTBVMmxpYkdsdVp5NWpiR2xqYXlncE8xeHlYRzVjY2x4dVhIUmNkRngwWEhSY2RHbG1JQ2hqZFhKeVpXNTBVR0ZuWlNBOVBUMGdjR0ZuWlVOdmRXNTBLU0I3WEhKY2JseDBYSFJjZEZ4MFhIUmNkRzVsZUhSQ2RHNHVjM1I1YkdVdWIzQmhZMmwwZVNBOUlDY3dMalVuTzF4eVhHNWNkRngwWEhSY2RGeDBYSFJ1WlhoMFFuUnVMbk4wZVd4bExuQnZhVzUwWlhKRmRtVnVkSE1nUFNBbmJtOXVaU2M3WEhKY2JseDBYSFJjZEZ4MFhIUjlYSEpjYmx4eVhHNWNkRngwWEhSY2RGeDBiR1YwSUhCeVpYWkNkRzRnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2NqWTJGMGN5QXVjSEpsZGljcE8xeHlYRzVjY2x4dVhIUmNkRngwWEhSY2RHbG1JQ2hqZFhKeVpXNTBVR0ZuWlNBaFBUMGdNU2tnZTF4eVhHNWNkRngwWEhSY2RGeDBYSFJ3Y21WMlFuUnVMbk4wZVd4bExtOXdZV05wZEhrZ1BTQW5NU2M3WEhKY2JseDBYSFJjZEZ4MFhIUmNkSEJ5WlhaQ2RHNHVjM1I1YkdVdWNHOXBiblJsY2tWMlpXNTBjeUE5SUNkaGJHd25PMXh5WEc1Y2RGeDBYSFJjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkRngwWEhSY2RHbG1JQ2hoWTNScGRtVkNkRzVEWVhRcElIdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFlXTjBhWFpsUW5SdVEyRjBMbU5zWVhOelRHbHpkQzVoWkdRb0oyZHliM1Z3SnlrN1hISmNibHgwWEhSY2RGeDBYSFJjZEdGamRHbDJaVUowYmtOaGRDNXVaWGgwUld4bGJXVnVkRk5wWW14cGJtY3VZMnhoYzNOTWFYTjBMbUZrWkNnblozSnZkWEFuS1R0Y2NseHVYSFJjZEZ4MFhIUmNkRngwWVdOMGFYWmxRblJ1UTJGMExuQnlaWFpwYjNWelJXeGxiV1Z1ZEZOcFlteHBibWN1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25aM0p2ZFhBbktUdGNjbHh1WEhSY2RGeDBYSFJjZEgxY2NseHVYSFJjZEZ4MFhIUjlYSEpjYmx4MFhIUmNkSDBwTzF4eVhHNWNjbHh1WEhSY2RGeDBjbVYwZFhKdUlHNWxlSFJDZEc0N1hISmNibHgwWEhSOVhISmNibHh5WEc1Y2RGeDBablZ1WTNScGIyNGdjSEpsZGxCaFoyVW9jR0ZuWlVOdmRXNTBLU0I3WEhKY2JseDBYSFJjZEd4bGRDQndjbVYyUW5SdUlEMGdaRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENnblluVjBkRzl1SnlrN1hISmNibHgwWEhSY2RIQnlaWFpDZEc0dVkyeGhjM05NYVhOMExtRmtaQ2duY0hKbGRpY3BPMXh5WEc1Y2RGeDBYSFJ3Y21WMlFuUnVMbWx1Ym1WeVZHVjRkQ0E5SUNjOEp6dGNjbHh1WEhSY2RGeDBjSEpsZGtKMGJpNWpiR0Z6YzB4cGMzUXVZV1JrS0Nkd1lXZHBibUYwYVc5dUxXSjBiaWNwTzF4eVhHNWNjbHh1WEhSY2RGeDBjSEpsZGtKMGJpNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZGpiR2xqYXljc0lDaGxLU0E5UGlCN1hISmNibHgwWEhSY2RGeDBhV1lnS0hCeVpYWkNkRzR1Y0dGeVpXNTBSV3hsYldWdWRDQTlQU0J3WVdkcGJtRjBhVzl1Uld4RWIyZHpLU0I3WEhKY2JseDBYSFJjZEZ4MFhIUmthWE53YkdGNVVHRm5hVzVoZEdWa1NYUmxiWE1vWEhKY2JseDBYSFJjZEZ4MFhIUmNkR1J2WjBKdmVFRnljbUY1TEZ4eVhHNWNkRngwWEhSY2RGeDBYSFJrYjJkelFtOTRMRnh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmxiR1Z0Wlc1MGMwOXVVR0ZuWlN4Y2NseHVYSFJjZEZ4MFhIUmNkRngwWTNWeWNtVnVkRkJoWjJWY2NseHVYSFJjZEZ4MFhIUmNkQ2s3WEhKY2JseHlYRzVjZEZ4MFhIUmNkRngwYkdWMElHRmpkR2wyWlVKMGJrUnZaeUE5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9YSEpjYmx4MFhIUmNkRngwWEhSY2RDY2paRzluY3lBdWNHRm5hVzVoZEdsdmJpMWlkRzR1WVdOMGFYWmxKMXh5WEc1Y2RGeDBYSFJjZEZ4MEtUdGNjbHh1WEhKY2JseDBYSFJjZEZ4MFhIUmhZM1JwZG1WQ2RHNUViMmN1Y0hKbGRtbHZkWE5GYkdWdFpXNTBVMmxpYkdsdVp5NWpiR2xqYXlncE8xeHlYRzVjY2x4dVhIUmNkRngwWEhSY2RHeGxkQ0J1WlhoMFFuUnVJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25JMlJ2WjNNZ0xtNWxlSFFuS1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwWEhScFppQW9ZM1Z5Y21WdWRGQmhaMlVnSVQwOUlIQmhaMlZEYjNWdWRDa2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUnVaWGgwUW5SdUxuTjBlV3hsTG05d1lXTnBkSGtnUFNBbk1TYzdYSEpjYmx4MFhIUmNkRngwWEhSY2RHNWxlSFJDZEc0dWMzUjViR1V1Y0c5cGJuUmxja1YyWlc1MGN5QTlJQ2RoYkd3bk8xeHlYRzVjZEZ4MFhIUmNkRngwZlZ4eVhHNWNjbHh1WEhSY2RGeDBYSFJjZEdsbUlDaGpkWEp5Wlc1MFVHRm5aU0E5UFQwZ01Ta2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUndjbVYyUW5SdUxuTjBlV3hsTG05d1lXTnBkSGtnUFNBbk1DNDFKenRjY2x4dVhIUmNkRngwWEhSY2RGeDBjSEpsZGtKMGJpNXpkSGxzWlM1d2IybHVkR1Z5UlhabGJuUnpJRDBnSjI1dmJtVW5PMXh5WEc1Y2RGeDBYSFJjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkRngwWEhSY2RHbG1JQ2hoWTNScGRtVkNkRzVFYjJjcElIdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFlXTjBhWFpsUW5SdVJHOW5MbU5zWVhOelRHbHpkQzVoWkdRb0oyZHliM1Z3SnlrN1hISmNibHgwWEhSY2RGeDBYSFJjZEdGamRHbDJaVUowYmtSdlp5NXVaWGgwUld4bGJXVnVkRk5wWW14cGJtY3VZMnhoYzNOTWFYTjBMbUZrWkNnblozSnZkWEFuS1R0Y2NseHVYSFJjZEZ4MFhIUmNkRngwWVdOMGFYWmxRblJ1Ukc5bkxuQnlaWFpwYjNWelJXeGxiV1Z1ZEZOcFlteHBibWN1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25aM0p2ZFhBbktUdGNjbHh1WEhSY2RGeDBYSFJjZEgxY2NseHVYSFJjZEZ4MFhIUjlYSEpjYmx4eVhHNWNkRngwWEhSY2RHbG1JQ2h3Y21WMlFuUnVMbkJoY21WdWRFVnNaVzFsYm5RZ1BUMGdjR0ZuYVc1aGRHbHZia1ZzUTJGMGN5a2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MFpHbHpjR3hoZVZCaFoybHVZWFJsWkVsMFpXMXpLRnh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmpZWFJDYjNoQmNuSmhlU3hjY2x4dVhIUmNkRngwWEhSY2RGeDBZMkYwYzBKdmVDeGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFpXeGxiV1Z1ZEhOUGJsQmhaMlVzWEhKY2JseDBYSFJjZEZ4MFhIUmNkR04xY25KbGJuUlFZV2RsWEhKY2JseDBYSFJjZEZ4MFhIUXBPMXh5WEc1Y2NseHVYSFJjZEZ4MFhIUmNkR3hsZENCaFkzUnBkbVZDZEc1RFlYUWdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtGeHlYRzVjZEZ4MFhIUmNkRngwWEhRbkkyTmhkSE1nTG5CaFoybHVZWFJwYjI0dFluUnVMbUZqZEdsMlpTZGNjbHh1WEhSY2RGeDBYSFJjZENrN1hISmNibHh5WEc1Y2RGeDBYSFJjZEZ4MFlXTjBhWFpsUW5SdVEyRjBMbkJ5WlhacGIzVnpSV3hsYldWdWRGTnBZbXhwYm1jdVkyeHBZMnNvS1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwWEhSc1pYUWdibVY0ZEVKMGJpQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5TmpZWFJ6SUM1dVpYaDBKeWs3WEhKY2JseHlYRzVjZEZ4MFhIUmNkRngwYVdZZ0tHTjFjbkpsYm5SUVlXZGxJQ0U5UFNCd1lXZGxRMjkxYm5RcElIdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MGJtVjRkRUowYmk1emRIbHNaUzV2Y0dGamFYUjVJRDBnSnpFbk8xeHlYRzVjZEZ4MFhIUmNkRngwWEhSdVpYaDBRblJ1TG5OMGVXeGxMbkJ2YVc1MFpYSkZkbVZ1ZEhNZ1BTQW5ZV3hzSnp0Y2NseHVYSFJjZEZ4MFhIUmNkSDFjY2x4dVhISmNibHgwWEhSY2RGeDBYSFJwWmlBb1kzVnljbVZ1ZEZCaFoyVWdQVDA5SURFcElIdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MGNISmxka0owYmk1emRIbHNaUzV2Y0dGamFYUjVJRDBnSnpBdU5TYzdYSEpjYmx4MFhIUmNkRngwWEhSY2RIQnlaWFpDZEc0dWMzUjViR1V1Y0c5cGJuUmxja1YyWlc1MGN5QTlJQ2R1YjI1bEp6dGNjbHh1WEhSY2RGeDBYSFJjZEgxY2NseHVYSEpjYmx4MFhIUmNkRngwWEhScFppQW9ZV04wYVhabFFuUnVRMkYwS1NCN1hISmNibHgwWEhSY2RGeDBYSFJjZEdGamRHbDJaVUowYmtOaGRDNWpiR0Z6YzB4cGMzUXVZV1JrS0NkbmNtOTFjQ2NwTzF4eVhHNWNkRngwWEhSY2RGeDBYSFJoWTNScGRtVkNkRzVEWVhRdWJtVjRkRVZzWlcxbGJuUlRhV0pzYVc1bkxtTnNZWE56VEdsemRDNWhaR1FvSjJkeWIzVndKeWs3WEhKY2JseDBYSFJjZEZ4MFhIUmNkR0ZqZEdsMlpVSjBia05oZEM1d2NtVjJhVzkxYzBWc1pXMWxiblJUYVdKc2FXNW5MbU5zWVhOelRHbHpkQzVoWkdRb0oyZHliM1Z3SnlrN1hISmNibHgwWEhSY2RGeDBYSFI5WEhKY2JseDBYSFJjZEZ4MGZWeHlYRzVjZEZ4MFhIUjlLVHRjY2x4dVhISmNibHgwWEhSY2RHbG1JQ2hqZFhKeVpXNTBVR0ZuWlNBOVBUMGdNU2tnZTF4eVhHNWNkRngwWEhSY2RIQnlaWFpDZEc0dWMzUjViR1V1YjNCaFkybDBlU0E5SUNjd0xqVW5PMXh5WEc1Y2RGeDBYSFJjZEhCeVpYWkNkRzR1YzNSNWJHVXVjRzlwYm5SbGNrVjJaVzUwY3lBOUlDZHViMjVsSnp0Y2NseHVYSFJjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkRngwY21WMGRYSnVJSEJ5WlhaQ2RHNDdYSEpjYmx4MFhIUjlYSEpjYmx4eVhHNWNkRngwWm5WdVkzUnBiMjRnY0dGbmFXNWhkR2x2YmtKMWRIUnZiaWh3WVdkbExDQndZV2RsUTI5MWJuUXBJSHRjY2x4dVhIUmNkRngwYkdWMElHSjFkSFJ2YmlBOUlHUnZZM1Z0Wlc1MExtTnlaV0YwWlVWc1pXMWxiblFvSjJKMWRIUnZiaWNwTzF4eVhHNWNkRngwWEhSaWRYUjBiMjR1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25jR0ZuYVc1aGRHbHZiaTFpZEc0bktUdGNjbHh1WEhSY2RGeDBZblYwZEc5dUxtbHVibVZ5VkdWNGRDQTlJSEJoWjJVN1hISmNibHh5WEc1Y2RGeDBYSFJwWmlBb1kzVnljbVZ1ZEZCaFoyVWdQVDBnY0dGblpTa2dlMXh5WEc1Y2RGeDBYSFJjZEdKMWRIUnZiaTVqYkdGemMweHBjM1F1WVdSa0tDZGhZM1JwZG1VbktUdGNjbHh1WEhSY2RGeDBmVnh5WEc1Y2NseHVYSFJjZEZ4MFluVjBkRzl1TG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjJOc2FXTnJKeXdnS0dVcElEMCtJSHRjY2x4dVhIUmNkRngwWEhSamRYSnlaVzUwVUdGblpTQTlJSEJoWjJVN1hISmNibHh5WEc1Y2RGeDBYSFJjZEdsbUlDaGlkWFIwYjI0dWNHRnlaVzUwUld4bGJXVnVkQ0E5UFNCd1lXZHBibUYwYVc5dVJXeEViMmR6S1NCN1hISmNibHgwWEhSY2RGeDBYSFJrYVhOd2JHRjVVR0ZuYVc1aGRHVmtTWFJsYlhNb1hISmNibHgwWEhSY2RGeDBYSFJjZEdSdlowSnZlRUZ5Y21GNUxGeHlYRzVjZEZ4MFhIUmNkRngwWEhSa2IyZHpRbTk0TEZ4eVhHNWNkRngwWEhSY2RGeDBYSFJsYkdWdFpXNTBjMDl1VUdGblpTeGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFkzVnljbVZ1ZEZCaFoyVmNjbHh1WEhSY2RGeDBYSFJjZENrN1hISmNibHh5WEc1Y2RGeDBYSFJjZEZ4MGJHVjBJR0ZqZEdsMlpVSjBia1J2WnlBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvWEhKY2JseDBYSFJjZEZ4MFhIUmNkQ2NqWkc5bmN5QXVjR0ZuYVc1aGRHbHZiaTFpZEc0dVlXTjBhWFpsSjF4eVhHNWNkRngwWEhSY2RGeDBLVHRjY2x4dVhISmNibHgwWEhSY2RGeDBYSFJoWTNScGRtVkNkRzVFYjJjdVkyeGhjM05NYVhOMExuSmxiVzkyWlNnbllXTjBhWFpsSnlrN1hISmNibHh5WEc1Y2RGeDBYSFJjZEZ4MFluVjBkRzl1TG1Oc1lYTnpUR2x6ZEM1aFpHUW9KMkZqZEdsMlpTY3BPMXh5WEc1Y2NseHVYSFJjZEZ4MFhIUmNkR3hsZENCdVpYaDBRblJ1SUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduSTJSdlozTWdMbTVsZUhRbktUdGNjbHh1WEhKY2JseDBYSFJjZEZ4MFhIUnBaaUFvWTNWeWNtVnVkRkJoWjJVZ1BUMDlJSEJoWjJWRGIzVnVkQ2tnZTF4eVhHNWNkRngwWEhSY2RGeDBYSFJ1WlhoMFFuUnVMbk4wZVd4bExtOXdZV05wZEhrZ1BTQW5NQzQxSnp0Y2NseHVYSFJjZEZ4MFhIUmNkRngwYm1WNGRFSjBiaTV6ZEhsc1pTNXdiMmx1ZEdWeVJYWmxiblJ6SUQwZ0oyNXZibVVuTzF4eVhHNWNkRngwWEhSY2RGeDBmU0JsYkhObElIdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MGJtVjRkRUowYmk1emRIbHNaUzV2Y0dGamFYUjVJRDBnSnpFbk8xeHlYRzVjZEZ4MFhIUmNkRngwWEhSdVpYaDBRblJ1TG5OMGVXeGxMbkJ2YVc1MFpYSkZkbVZ1ZEhNZ1BTQW5ZV3hzSnp0Y2NseHVYSFJjZEZ4MFhIUmNkSDFjY2x4dVhISmNibHgwWEhSY2RGeDBYSFJzWlhRZ2NISmxka0owYmlBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvSnlOa2IyZHpJQzV3Y21WMkp5azdYSEpjYmx4eVhHNWNkRngwWEhSY2RGeDBhV1lnS0dOMWNuSmxiblJRWVdkbElEMDlQU0F4S1NCN1hISmNibHgwWEhSY2RGeDBYSFJjZEhCeVpYWkNkRzR1YzNSNWJHVXViM0JoWTJsMGVTQTlJQ2N3TGpVbk8xeHlYRzVjZEZ4MFhIUmNkRngwWEhSd2NtVjJRblJ1TG5OMGVXeGxMbkJ2YVc1MFpYSkZkbVZ1ZEhNZ1BTQW5ibTl1WlNjN1hISmNibHgwWEhSY2RGeDBYSFI5SUdWc2MyVWdlMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUndjbVYyUW5SdUxuTjBlV3hsTG05d1lXTnBkSGtnUFNBbk1TYzdYSEpjYmx4MFhIUmNkRngwWEhSY2RIQnlaWFpDZEc0dWMzUjViR1V1Y0c5cGJuUmxja1YyWlc1MGN5QTlJQ2RoYkd3bk8xeHlYRzVjZEZ4MFhIUmNkRngwZlZ4eVhHNWNkRngwWEhSY2RIMWNjbHh1WEhKY2JseDBYSFJjZEZ4MGFXWWdLR0oxZEhSdmJpNXdZWEpsYm5SRmJHVnRaVzUwSUQwOUlIQmhaMmx1WVhScGIyNUZiRU5oZEhNcElIdGNjbHh1WEhSY2RGeDBYSFJjZEdScGMzQnNZWGxRWVdkcGJtRjBaV1JKZEdWdGN5aGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFkyRjBRbTk0UVhKeVlYa3NYSEpjYmx4MFhIUmNkRngwWEhSY2RHTmhkSE5DYjNnc1hISmNibHgwWEhSY2RGeDBYSFJjZEdWc1pXMWxiblJ6VDI1UVlXZGxMRnh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmpkWEp5Wlc1MFVHRm5aVnh5WEc1Y2RGeDBYSFJjZEZ4MEtUdGNjbHh1WEhKY2JseDBYSFJjZEZ4MFhIUnNaWFFnWVdOMGFYWmxRblJ1UTJGMElEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2loY2NseHVYSFJjZEZ4MFhIUmNkRngwSnlOallYUnpJQzV3WVdkcGJtRjBhVzl1TFdKMGJpNWhZM1JwZG1VblhISmNibHgwWEhSY2RGeDBYSFFwTzF4eVhHNWNjbHh1WEhSY2RGeDBYSFJjZEdGamRHbDJaVUowYmtOaGRDNWpiR0Z6YzB4cGMzUXVjbVZ0YjNabEtDZGhZM1JwZG1VbktUdGNjbHh1WEhKY2JseDBYSFJjZEZ4MFhIUmlkWFIwYjI0dVkyeGhjM05NYVhOMExtRmtaQ2duWVdOMGFYWmxKeWs3WEhKY2JseHlYRzVjZEZ4MFhIUmNkRngwYkdWMElHNWxlSFJDZEc0Z1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0NjalkyRjBjeUF1Ym1WNGRDY3BPMXh5WEc1Y2NseHVYSFJjZEZ4MFhIUmNkR2xtSUNoamRYSnlaVzUwVUdGblpTQTlQVDBnY0dGblpVTnZkVzUwS1NCN1hISmNibHgwWEhSY2RGeDBYSFJjZEc1bGVIUkNkRzR1YzNSNWJHVXViM0JoWTJsMGVTQTlJQ2N3TGpVbk8xeHlYRzVjZEZ4MFhIUmNkRngwWEhSdVpYaDBRblJ1TG5OMGVXeGxMbkJ2YVc1MFpYSkZkbVZ1ZEhNZ1BTQW5ibTl1WlNjN1hISmNibHgwWEhSY2RGeDBYSFI5SUdWc2MyVWdlMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUnVaWGgwUW5SdUxuTjBlV3hsTG05d1lXTnBkSGtnUFNBbk1TYzdYSEpjYmx4MFhIUmNkRngwWEhSY2RHNWxlSFJDZEc0dWMzUjViR1V1Y0c5cGJuUmxja1YyWlc1MGN5QTlJQ2RoYkd3bk8xeHlYRzVjZEZ4MFhIUmNkRngwZlZ4eVhHNWNjbHh1WEhSY2RGeDBYSFJjZEd4bGRDQndjbVYyUW5SdUlEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkkyTmhkSE1nTG5CeVpYWW5LVHRjY2x4dVhISmNibHgwWEhSY2RGeDBYSFJwWmlBb1kzVnljbVZ1ZEZCaFoyVWdQVDA5SURFcElIdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MGNISmxka0owYmk1emRIbHNaUzV2Y0dGamFYUjVJRDBnSnpBdU5TYzdYSEpjYmx4MFhIUmNkRngwWEhSY2RIQnlaWFpDZEc0dWMzUjViR1V1Y0c5cGJuUmxja1YyWlc1MGN5QTlJQ2R1YjI1bEp6dGNjbHh1WEhSY2RGeDBYSFJjZEgwZ1pXeHpaU0I3WEhKY2JseDBYSFJjZEZ4MFhIUmNkSEJ5WlhaQ2RHNHVjM1I1YkdVdWIzQmhZMmwwZVNBOUlDY3hKenRjY2x4dVhIUmNkRngwWEhSY2RGeDBjSEpsZGtKMGJpNXpkSGxzWlM1d2IybHVkR1Z5UlhabGJuUnpJRDBnSjJGc2JDYzdYSEpjYmx4MFhIUmNkRngwWEhSOVhISmNibHgwWEhSY2RGeDBmVnh5WEc1Y2RGeDBYSFI5S1R0Y2NseHVYSEpjYmx4MFhIUmNkSEpsZEhWeWJpQmlkWFIwYjI0N1hISmNibHgwWEhSOVhISmNibHh5WEc1Y2RGeDBZMjl1YzNRZ1pYaHdZVzVrYzAxdmNtVWdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eVFXeHNLQ2RiWlhod1lXNWtMVzF2Y21WZEp5azdYSEpjYmx4eVhHNWNkRngwWm5WdVkzUnBiMjRnWlhod1lXNWtLQ2tnZTF4eVhHNWNkRngwWEhSamIyNXpkQ0J6YUc5M1EyOXVkR1Z1ZENBOUlHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0hSb2FYTXVaR0YwWVhObGRDNTBZWEpuWlhRcE8xeHlYRzVjZEZ4MFhIUnBaaUFvYzJodmQwTnZiblJsYm5RdVkyeGhjM05NYVhOMExtTnZiblJoYVc1ektDZGhZM1JwZG1VbktTa2dlMXh5WEc1Y2RGeDBYSFJjZEhSb2FYTXVhVzV1WlhKSVZFMU1JRDBnZEdocGN5NWtZWFJoYzJWMExuTm9iM2QwWlhoME8xeHlYRzVjZEZ4MFhIUjlJR1ZzYzJVZ2UxeHlYRzVjZEZ4MFhIUmNkSFJvYVhNdWFXNXVaWEpJVkUxTUlEMGdkR2hwY3k1a1lYUmhjMlYwTG1ocFpHVjBaWGgwTzF4eVhHNWNkRngwWEhSOVhISmNibHh5WEc1Y2RGeDBYSFJ6YUc5M1EyOXVkR1Z1ZEM1amJHRnpjMHhwYzNRdWRHOW5aMnhsS0NkaFkzUnBkbVVuS1R0Y2NseHVYSFJjZEZ4MGFXWWdLSE5vYjNkRGIyNTBaVzUwTG1Oc1lYTnpUR2x6ZEM1amIyNTBZV2x1Y3lnbllXTjBhWFpsSnlrcElIdGNjbHh1WEhSY2RGeDBYSFJ6YUc5M1EyOXVkR1Z1ZEM1emRIbHNaUzV0WVhoSVpXbG5hSFFnUFNCemFHOTNRMjl1ZEdWdWRDNXpZM0p2Ykd4SVpXbG5hSFFnS3lBbmNIZ25PMXh5WEc1Y2RGeDBYSFI5SUdWc2MyVWdlMXh5WEc1Y2RGeDBYSFJjZEhOb2IzZERiMjUwWlc1MExuTjBlV3hsTG0xaGVFaGxhV2RvZENBOUlESXdJQ3NnSjNCNEp6dGNjbHh1WEhSY2RGeDBmVnh5WEc1Y2RGeDBmVnh5WEc1Y2NseHVYSFJjZEdsbUlDaGtiMmR6UW05NEtTQjdYSEpjYmx4MFhIUmNkR1JwYzNCc1lYbFFZV2RwYm1GMFpXUkpkR1Z0Y3loa2IyZENiM2hCY25KaGVTd2daRzluYzBKdmVDd2daV3hsYldWdWRITlBibEJoWjJVc0lHTjFjbkpsYm5SUVlXZGxLVHRjY2x4dVhIUmNkRngwWkdsemNHeGhlVkJoWjJsdVlYUnBiMjRvWkc5blFtOTRRWEp5WVhrc0lIQmhaMmx1WVhScGIyNUZiRVJ2WjNNc0lHVnNaVzFsYm5SelQyNVFZV2RsS1R0Y2NseHVYSEpjYmx4MFhIUmNkR1Y0Y0dGdVpITk5iM0psTG1admNrVmhZMmdvS0dKMGJpa2dQVDRnZTF4eVhHNWNkRngwWEhSY2RHSjBiaTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RqYkdsamF5Y3NJR1Y0Y0dGdVpDazdYSEpjYmx4MFhIUmNkSDBwTzF4eVhHNWNkRngwZlZ4eVhHNWNjbHh1WEhSY2RHbG1JQ2hqWVhSelFtOTRLU0I3WEhKY2JseDBYSFJjZEdScGMzQnNZWGxRWVdkcGJtRjBaV1JKZEdWdGN5aGpZWFJDYjNoQmNuSmhlU3dnWTJGMGMwSnZlQ3dnWld4bGJXVnVkSE5QYmxCaFoyVXNJR04xY25KbGJuUlFZV2RsS1R0Y2NseHVYSFJjZEZ4MFpHbHpjR3hoZVZCaFoybHVZWFJwYjI0b1kyRjBRbTk0UVhKeVlYa3NJSEJoWjJsdVlYUnBiMjVGYkVOaGRITXNJR1ZzWlcxbGJuUnpUMjVRWVdkbEtUdGNjbHh1WEhKY2JseDBYSFJjZEdWNGNHRnVaSE5OYjNKbExtWnZja1ZoWTJnb0tHSjBiaWtnUFQ0Z2UxeHlYRzVjZEZ4MFhIUmNkR0owYmk1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkamJHbGpheWNzSUdWNGNHRnVaQ2s3WEhKY2JseDBYSFJjZEgwcE8xeHlYRzVjZEZ4MGZWeHlYRzVjZEgxY2NseHVYSEpjYmx4MGFXWWdLR0Z1YVcxaGJITlFZV2RsY3lrZ2UxeHlYRzVjZEZ4MEtHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhIUmNkRngwWkdsemNHeGhlVUZ1YVcxaGJITW9LVHRjY2x4dVhIUmNkSDBwS0NrN1hISmNibHgwZlZ4eVhHNTlLVHRjY2x4dUlpd2laRzlqZFcxbGJuUXVZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25SRTlOUTI5dWRHVnVkRXh2WVdSbFpDY3NJR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVYSFF2THlCbWIzSnRJSFpoYkdsa1lYUnBiMjVjY2x4dVhIUmpiMjV6ZENCbWIzSnRJRDBnWkc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEVKNVNXUW9KMk52Ym5SaFkzUXRabTl5YlNjcE8xeHlYRzVjZEdOdmJuTjBJRzVoYldVZ1BTQmtiMk4xYldWdWRDNW5aWFJGYkdWdFpXNTBRbmxKWkNnbmJtRnRaU2NwTzF4eVhHNWNkR052Ym5OMElHVnRZV2xzSUQwZ1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvSjJWdFlXbHNKeWs3WEhKY2JseDBZMjl1YzNRZ2JXVnpjMkZuWlNBOUlHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0NkdFpYTnpZV2RsSnlrN1hISmNibHgwWTI5dWMzUWdabTl5YlVKMGJpQTlJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJDZVVsa0tDZG1iM0p0TFdKMGJpY3BPMXh5WEc1Y2NseHVYSFJwWmlBb1ptOXliU2tnZTF4eVhHNWNkRngwVzF4eVhHNWNkRngwWEhRblkyeHBZMnNuTEZ4eVhHNWNkRngwWEhRbmIyNTBiM1ZqYUhOMFlYSjBKeXhjY2x4dVhIUmNkRngwSjIxdmRYTmxiM1psY2ljc1hISmNibHgwWEhSY2RDZHJaWGxrYjNkdUp5eGNjbHh1WEhSY2RGeDBKMnRsZVhCeVpYTnpKeXhjY2x4dVhIUmNkRngwSjNSdmRXTm9jM1JoY25RbkxGeHlYRzVjZEZ4MFhIUW5kRzkxWTJodGIzWmxKeXhjY2x4dVhIUmNkRjB1Wm05eVJXRmphQ2hjY2x4dVhIUmNkRngwS0dWMlpXNTBLU0E5UGx4eVhHNWNkRngwWEhSY2RHUnZZM1Z0Wlc1MExtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb1pYWmxiblFzSUNncElEMCtJSHRjY2x4dVhIUmNkRngwWEhSY2RHbG1JQ2hqYUdWamEwbHVjSFYwY3lncElEMDlQU0JtWVd4elpTa2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUm1iM0p0UW5SdUxtUnBjMkZpYkdWa0lEMGdkSEoxWlR0Y2NseHVYSFJjZEZ4MFhIUmNkSDBnWld4elpTQjdYSEpjYmx4MFhIUmNkRngwWEhSY2RHWnZjbTFDZEc0dVpHbHpZV0pzWldRZ1BTQm1ZV3h6WlR0Y2NseHVYSFJjZEZ4MFhIUmNkSDFjY2x4dVhIUmNkRngwWEhSOUtTeGNjbHh1WEhSY2RGeDBabUZzYzJWY2NseHVYSFJjZENrN1hISmNibHh5WEc1Y2RGeDBablZ1WTNScGIyNGdZMmhsWTJ0SmJuQjFkSE1vS1NCN1hISmNibHgwWEhSY2RHTnZibk4wSUc1aGJXVldZV3gxWlNBOUlHNWhiV1V1ZG1Gc2RXVXVkSEpwYlNncE8xeHlYRzVjZEZ4MFhIUmpiMjV6ZENCbGJXRnBiRlpoYkhWbElEMGdaVzFoYVd3dWRtRnNkV1V1ZEhKcGJTZ3BPMXh5WEc1Y2RGeDBYSFJqYjI1emRDQnRaWE56WVdkbFZtRnNkV1VnUFNCdFpYTnpZV2RsTG5aaGJIVmxMblJ5YVcwb0tUdGNjbHh1WEhKY2JseDBYSFJjZEdsbUlDaHVZVzFsVm1Gc2RXVWdQVDA5SUNjbktTQjdYSEpjYmx4MFhIUmNkRngwYzJWMFJYSnliM0pHYjNJb2JtRnRaU3dnSjFCc1pXRnpaU0JsYm5SbGNpQjViM1Z5SUdaMWJHd2dibUZ0WlNjcE8xeHlYRzVjZEZ4MFhIUjlJR1ZzYzJVZ2UxeHlYRzVjZEZ4MFhIUmNkSE5sZEZOMVkyTmxjM05HYjNJb2JtRnRaU2s3WEhKY2JseDBYSFJjZEgxY2NseHVYSEpjYmx4MFhIUmNkR2xtSUNobGJXRnBiRlpoYkhWbElEMDlQU0FuSnlrZ2UxeHlYRzVjZEZ4MFhIUmNkSE5sZEVWeWNtOXlSbTl5S0dWdFlXbHNMQ0FuVUd4bFlYTmxJR1Z1ZEdWeUlIbHZkWElnWlcxaGFXd2dZV1JrY21WemN5Y3BPMXh5WEc1Y2RGeDBYSFI5SUdWc2MyVWdhV1lnS0NGbGJXRnBiRWx6Vm1Gc2FXUW9aVzFoYVd4V1lXeDFaU2twSUh0Y2NseHVYSFJjZEZ4MFhIUnpaWFJGY25KdmNrWnZjaWhsYldGcGJDd2dKMFZ0WVdsc0lHbHpJRzV2ZENCMllXeHBaQ2NwTzF4eVhHNWNkRngwWEhSOUlHVnNjMlVnZTF4eVhHNWNkRngwWEhSY2RITmxkRk4xWTJObGMzTkdiM0lvWlcxaGFXd3BPMXh5WEc1Y2RGeDBYSFI5WEhKY2JseHlYRzVjZEZ4MFhIUnBaaUFvYldWemMyRm5aVlpoYkhWbElEMDlQU0FuSnlrZ2UxeHlYRzVjZEZ4MFhIUmNkSE5sZEVWeWNtOXlSbTl5S0cxbGMzTmhaMlVzSUNkUWJHVmhjMlVnWlc1MFpYSWdlVzkxY2lCdFpYTnpZV2RsSnlrN1hISmNibHgwWEhSY2RIMGdaV3h6WlNCN1hISmNibHgwWEhSY2RGeDBjMlYwVTNWalkyVnpjMFp2Y2lodFpYTnpZV2RsS1R0Y2NseHVYSFJjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkRngwYVdZZ0tGeHlYRzVjZEZ4MFhIUmNkRzVoYldWV1lXeDFaU0E5UFQwZ0p5Y2dmSHhjY2x4dVhIUmNkRngwWEhSbGJXRnBiRlpoYkhWbElEMDlQU0FuSnlCOGZGeHlYRzVjZEZ4MFhIUmNkRzFsYzNOaFoyVldZV3gxWlNBOVBUMGdKeWNnZkh4Y2NseHVYSFJjZEZ4MFhIUWhaVzFoYVd4SmMxWmhiR2xrS0dWdFlXbHNWbUZzZFdVcFhISmNibHgwWEhSY2RDa2dlMXh5WEc1Y2RGeDBYSFJjZEhKbGRIVnliaUJtWVd4elpUdGNjbHh1WEhSY2RGeDBmU0JsYkhObElIdGNjbHh1WEhSY2RGeDBYSFJ5WlhSMWNtNGdkSEoxWlR0Y2NseHVYSFJjZEZ4MGZWeHlYRzVjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkR1oxYm1OMGFXOXVJSE5sZEVWeWNtOXlSbTl5S0dsdWNIVjBMQ0J0WlhOellXZGxLU0I3WEhKY2JseDBYSFJjZEdOdmJuTjBJR1p2Y20wZ1BTQnBibkIxZEM1d1lYSmxiblJGYkdWdFpXNTBPMXh5WEc1Y2RGeDBYSFJqYjI1emRDQnpiV0ZzYkNBOUlHWnZjbTB1Y1hWbGNubFRaV3hsWTNSdmNpZ25jMjFoYkd3bktUdGNjbHh1WEhKY2JseDBYSFJjZEhOdFlXeHNMbWx1Ym1WeVZHVjRkQ0E5SUcxbGMzTmhaMlU3WEhKY2JseDBYSFJjZEdadmNtMHVZMnhoYzNOT1lXMWxJRDBnSjJadmNtMWZYMmR5YjNWd0lHVnljbTl5Snp0Y2NseHVYSFJjZEgxY2NseHVYSEpjYmx4MFhIUm1kVzVqZEdsdmJpQnpaWFJUZFdOalpYTnpSbTl5S0dsdWNIVjBLU0I3WEhKY2JseDBYSFJjZEdOdmJuTjBJR1p2Y20wZ1BTQnBibkIxZEM1d1lYSmxiblJGYkdWdFpXNTBPMXh5WEc1Y2RGeDBYSFJtYjNKdExtTnNZWE56VG1GdFpTQTlJQ2RtYjNKdFgxOW5jbTkxY0NCemRXTmpaWE56Snp0Y2NseHVYSFJjZEgxY2NseHVYSEpjYmx4MFhIUm1kVzVqZEdsdmJpQmxiV0ZwYkVselZtRnNhV1FvWlcxaGFXd3BJSHRjY2x4dVhIUmNkRngwWTI5dWMzUWdjbVVnUFNBdlhpZ29XMTQ4UGlncFhGeGJYRnhkWEZ4Y1hDNHNPenBjWEhOQVhDSmRLeWhjWEM1YlhqdytLQ2xjWEZ0Y1hGMWNYRnhjTGl3N09seGNjMEJjSWwwcktTb3BmQ2hjSWk0clhDSXBLVUFvS0Z4Y1cxc3dMVGxkZXpFc00zMWNYQzViTUMwNVhYc3hMRE45WEZ3dVd6QXRPVjE3TVN3emZWeGNMbHN3TFRsZGV6RXNNMzFkS1h3b0tGdGhMWHBCTFZwY1hDMHdMVGxkSzF4Y0xpa3JXMkV0ZWtFdFdsMTdNaXg5S1Nra0x5NTBaWE4wS0Z4eVhHNWNkRngwWEhSY2RHVnRZV2xzWEhKY2JseDBYSFJjZENrN1hISmNibHh5WEc1Y2RGeDBYSFJ5WlhSMWNtNGdjbVU3WEhKY2JseDBYSFI5WEhKY2JseDBmVnh5WEc1OUtUdGNjbHh1SWl3aVpHOWpkVzFsYm5RdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblJFOU5RMjl1ZEdWdWRFeHZZV1JsWkNjc0lHWjFibU4wYVc5dUlDZ3BJSHRjYmx4MGQybHVaRzkzTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjJ4dllXUW5MQ0FvWlNrZ1BUNGdlMXh1WEhSY2RHTnZibk4wSUhCeVpXeHZZV1FnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2N1Y0hKbGJHOWhaQ2NwTzF4dVhHNWNkRngwY0hKbGJHOWhaQzVqYkdGemMweHBjM1F1WVdSa0tDZHdjbVZzYjJGa0xXWnBibWx6YUdWa0p5azdYRzVjZEgwcE8xeHVYRzVjZEdOdmJuTjBJR0owYmxOamNtOXNiRlJ2Vkc5d0lEMGdaRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkRUo1U1dRb0oySjBibE5qY205c2JGUnZWRzl3SnlrN1hHNWNkR0owYmxOamNtOXNiRlJ2Vkc5d0xtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0oyTnNhV05ySnl3Z0tHVXBJRDArSUh0Y2JseDBYSFIzYVc1a2IzY3VjMk55YjJ4c1ZHOG9lMXh1WEhSY2RGeDBkRzl3T2lBd0xGeHVYSFJjZEZ4MGJHVm1kRG9nTUN4Y2JseDBYSFJjZEdKbGFHRjJhVzl5T2lBbmMyMXZiM1JvSnl4Y2JseDBYSFI5S1R0Y2JseDBmU2s3WEc1OUtUdGNiaUlzSW1SdlkzVnRaVzUwTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjBSUFRVTnZiblJsYm5STWIyRmtaV1FuTENCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmx4MFkyOXVjM1FnYm1GMlEyOXVkR0ZwYm1WeUlEMGdaRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkRUo1U1dRb0oyNWhkaTFqYjI1MFlXbHVaWEluS1R0Y2NseHVYSFJqYjI1emRDQnRaVzUxUW5SdUlEMGdaRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkRUo1U1dRb0oyMWxiblV0WW5SdUp5azdYSEpjYmx4MFkyOXVjM1FnYm1GMlRHbHpkQ0E5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2R1WVhZdGJHbHpkQ2NwTzF4eVhHNWNjbHh1WEhSM2FXNWtiM2N1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduYzJOeWIyeHNKeXdnS0dVcElEMCtJSHRjY2x4dVhIUmNkR2xtSUNoa2IyTjFiV1Z1ZEM1a2IyTjFiV1Z1ZEVWc1pXMWxiblF1YzJOeWIyeHNWRzl3SUQ0Z01Da2dlMXh5WEc1Y2RGeDBYSFJ1WVhaRGIyNTBZV2x1WlhJdVkyeGhjM05NYVhOMExtRmtaQ2duYzNScFkydDVKeWs3WEhKY2JseDBYSFJjZEdKMGJsTmpjbTlzYkZSdlZHOXdMbk4wZVd4bExtOXdZV05wZEhrZ1BTQXhPMXh5WEc1Y2RGeDBmU0JsYkhObElIdGNjbHh1WEhSY2RGeDBibUYyUTI5dWRHRnBibVZ5TG1Oc1lYTnpUR2x6ZEM1eVpXMXZkbVVvSjNOMGFXTnJlU2NwTzF4eVhHNWNkRngwWEhSaWRHNVRZM0p2Ykd4VWIxUnZjQzV6ZEhsc1pTNXZjR0ZqYVhSNUlEMGdNRHRjY2x4dVhIUmNkSDFjY2x4dVhIUjlLVHRjY2x4dVhISmNibHgwYldWdWRVSjBiaTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RqYkdsamF5Y3NJQ2hsS1NBOVBpQjdYSEpjYmx4MFhIUnRaVzUxUW5SdUxtTnNZWE56VEdsemRDNTBiMmRuYkdVb0oyTnNhV05yWldRbktUdGNjbHh1WEhSY2RHNWhka052Ym5SaGFXNWxjaTVqYkdGemMweHBjM1F1ZEc5bloyeGxLQ2R2ZG1WeWJHRjVKeWs3WEhKY2JseDBYSFJ1WVhaTWFYTjBMbU5zWVhOelRHbHpkQzUwYjJkbmJHVW9KM05vYjNjbktUdGNjbHh1WEhSOUtUdGNjbHh1ZlNrN1hISmNiaUlzSW1SdlkzVnRaVzUwTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjBSUFRVTnZiblJsYm5STWIyRmtaV1FuTENCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmx4MEx5OGdZMkZ5YjNWelpXeGNjbHh1WEhSamIyNXpkQ0JqWVhKdmRYTmxiQ0E5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2RqWVhKdmRYTmxiQ2NwTzF4eVhHNWNkR052Ym5OMElIQnlaWFpDZEc0Z1BTQmtiMk4xYldWdWRDNW5aWFJGYkdWdFpXNTBRbmxKWkNnbmNISmxkaWNwTzF4eVhHNWNkR052Ym5OMElHNWxlSFJDZEc0Z1BTQmtiMk4xYldWdWRDNW5aWFJGYkdWdFpXNTBRbmxKWkNnbmJtVjRkQ2NwTzF4eVhHNWNkR052Ym5OMElHTmhjbTkxYzJWc1ZYSnNJRDBnSnk0dmFuTXZZMkZ5YjNWelpXd3Vhbk52YmljN1hISmNibHh5WEc1Y2RHeGxkQ0JtYVhKemRGTnNhV1JsTzF4eVhHNWNkR3hsZENCc1lYTjBVMnhwWkdVN1hISmNibHh5WEc1Y2RHWjFibU4wYVc5dUlHZGxkRk5zYVdSbGMwUmhkR0VvS1NCN1hISmNibHgwWEhSeVpYUjFjbTRnYm1WM0lGQnliMjFwYzJVb0tISmxjMjlzZG1Vc0lISmxhbVZqZENrZ1BUNGdlMXh5WEc1Y2RGeDBYSFJtWlhSamFDaGpZWEp2ZFhObGJGVnliQ2xjY2x4dVhIUmNkRngwWEhRdWRHaGxiaWdvY21WemNDa2dQVDRnY21WemNDNXFjMjl1S0NrcFhISmNibHgwWEhSY2RGeDBMblJvWlc0b0tHUmhkR0VwSUQwK0lISmxjMjlzZG1Vb1pHRjBZU2twWEhKY2JseDBYSFJjZEZ4MExtTmhkR05vS0NobGNuSXBJRDArSUhKbGFtVmpkQ2hsY25JcEtUdGNjbHh1WEhSY2RIMHBPMXh5WEc1Y2RIMWNjbHh1WEhKY2JseDBZWE41Ym1NZ1puVnVZM1JwYjI0Z1pHbHpjR3hoZVVOaGNtOTFjMlZzS0NrZ2UxeHlYRzVjZEZ4MFkyOXVjM1FnWkdGMFlVeHBjM1FnUFNCaGQyRnBkQ0JuWlhSVGJHbGtaWE5FWVhSaEtDazdYSEpjYmx4MFhIUmpiMjV6ZENCemJHbGtaWE5CY25KaGVTQTlJR1JoZEdGTWFYTjBMbk5zYVdSbGN6dGNjbHh1WEhKY2JseDBYSFJ6Ykdsa1pYTkJjbkpoZVM1bWIzSkZZV05vS0NoemJHbGtaU3dnYzJ4cFpHVk9kVzFpWlhJcElEMCtJSHRjY2x4dVhIUmNkRngwYm1WM1UyeHBaR1VnUFNCa2IyTjFiV1Z1ZEM1amNtVmhkR1ZGYkdWdFpXNTBLQ2RrYVhZbktUdGNjbHh1WEhSY2RGeDBibVYzVTJ4cFpHVXVZMnhoYzNOTWFYTjBMbUZrWkNnblkyRnliM1Z6Wld4ZlgzTnNhV1JsSnlrN1hISmNibHh5WEc1Y2RGeDBYSFJ1WlhkVGJHbGtaUzVwYm01bGNraFVUVXdnUFNCZ1hISmNibHgwWEhSY2RGeDBYSFJjZER4a2FYWWdZMnhoYzNNOVhDSmpZWEp2ZFhObGJGOWZhVzFoWjJVdFkyOXVkR0ZwYm1WeVhDSStYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBQR2x0WnlCemNtTTlYQ0lrZTNOc2FXUmxMbWx0WVdkbGZWd2lJR0ZzZEQxY0luTnNhV1JsTFdsdFoxd2lJQzgrWEhKY2JseDBYSFJjZEZ4MFhIUmNkRHd2WkdsMlBseHlYRzVjZEZ4MFhIUmNkRngwWEhROFpHbDJJR05zWVhOelBWd2lZMkZ5YjNWelpXeGZYMk52Ym5SbGJuUmNJajVjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFE4YURFZ1kyeGhjM005WENKallYSnZkWE5sYkY5ZmRHbDBiR1ZjSWo0a2UzTnNhV1JsTG5ScGRHeGxmVHd2YURFK1hISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFBIQWdZMnhoYzNNOVhDSmpZWEp2ZFhObGJGOWZaR1Z6WTF3aVBpUjdjMnhwWkdVdVkyOXVkR1Z1ZEgwOEwzQStYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBQR0oxZEhSdmJpQmpiR0Z6Y3oxY0ltaGxZV1JsY2w5ZmJtRjJMV1J2Ym1GMFpTMWlkRzRnWW5WMGRHOXVYQ0krWEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwWEhSRWRXZHRaU0I2WVNCdVpjV2hkRzljY2x4dVhIUmNkRngwWEhSY2RGeDBYSFE4TDJKMWRIUnZiajVjY2x4dVhIUmNkRngwWEhSY2RGeDBQQzlrYVhZK1hISmNibHgwWEhSY2RHQTdYSEpjYmx4eVhHNWNkRngwWEhSallYSnZkWE5sYkM1aGNIQmxibVJEYUdsc1pDaHVaWGRUYkdsa1pTazdYSEpjYmx4eVhHNWNkRngwWEhScFppQW9jMnhwWkdWT2RXMWlaWElnUFQwOUlEQXBJSHRjY2x4dVhIUmNkRngwWEhSbWFYSnpkRk5zYVdSbElEMGdibVYzVTJ4cFpHVTdYSEpjYmx4MFhIUmNkRngwYm1WM1UyeHBaR1V1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25ZV04wYVhabEp5azdYSEpjYmx4MFhIUmNkSDBnWld4elpTQnBaaUFvYzJ4cFpHVk9kVzFpWlhJZ0t5QXhJRDA5UFNCa1lYUmhUR2x6ZEM1emJHbGtaWE11YkdWdVozUm9LU0I3WEhKY2JseDBYSFJjZEZ4MGJHRnpkRk5zYVdSbElEMGdibVYzVTJ4cFpHVTdYSEpjYmx4MFhIUmNkSDFjY2x4dVhIUmNkSDBwTzF4eVhHNWNjbHh1WEhSY2RHNWxlSFJUYkdsa1pTZ3BPMXh5WEc1Y2RGeDBjSEpsZG1sdmRYTlRiR2xrWlNncE8xeHlYRzVjZEgxY2NseHVYSEpjYmx4MFpuVnVZM1JwYjI0Z2JtVjRkRk5zYVdSbEtDa2dlMXh5WEc1Y2RGeDBZMjl1YzNRZ2JtVjRkRUowYmlBOUlHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0NkdVpYaDBKeWs3WEhKY2JseHlYRzVjZEZ4MGJtVjRkRUowYmk1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkamJHbGpheWNzSUNobEtTQTlQaUI3WEhKY2JseDBYSFJjZEdOdmJuTjBJR0ZqZEdsMlpWTnNhV1JsSUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduTG1OaGNtOTFjMlZzWDE5emJHbGtaUzVoWTNScGRtVW5LVHRjY2x4dVhISmNibHgwWEhSY2RHeGxkQ0J1WlhoMFUybGliR2x1WnlBOUlHRmpkR2wyWlZOc2FXUmxMbTVsZUhSRmJHVnRaVzUwVTJsaWJHbHVaenRjY2x4dVhISmNibHgwWEhSY2RHbG1JQ2h1WlhoMFUybGliR2x1WnlBOVBTQnVkV3hzS1NCN1hISmNibHgwWEhSY2RGeDBibVY0ZEZOcFlteHBibWNnUFNCaFkzUnBkbVZUYkdsa1pUdGNjbHh1WEhSY2RGeDBmVnh5WEc1Y2NseHVYSFJjZEZ4MGFXWWdLRzVsZUhSVGFXSnNhVzVuTG1Oc1lYTnpUR2x6ZEM1amIyNTBZV2x1Y3lnblkyRnliM1Z6Wld4ZlgzTnNhV1JsSnlrcElIdGNjbHh1WEhSY2RGeDBYSFJoWTNScGRtVlRiR2xrWlM1amJHRnpjMHhwYzNRdWNtVnRiM1psS0NkaFkzUnBkbVVuS1R0Y2NseHVYSFJjZEZ4MFhIUnVaWGgwVTJsaWJHbHVaeTVqYkdGemMweHBjM1F1WVdSa0tDZGhZM1JwZG1VbktUdGNjbHh1WEhSY2RGeDBmVnh5WEc1Y2RGeDBmU2s3WEhKY2JseDBmVnh5WEc1Y2NseHVYSFJtZFc1amRHbHZiaUJ3Y21WMmFXOTFjMU5zYVdSbEtDa2dlMXh5WEc1Y2RGeDBZMjl1YzNRZ2NISmxka0owYmlBOUlHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0Nkd2NtVjJKeWs3WEhKY2JseHlYRzVjZEZ4MGNISmxka0owYmk1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkamJHbGpheWNzSUNobEtTQTlQaUI3WEhKY2JseDBYSFJjZEdOdmJuTjBJR0ZqZEdsMlpWTnNhV1JsSUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduTG1OaGNtOTFjMlZzWDE5emJHbGtaUzVoWTNScGRtVW5LVHRjY2x4dVhISmNibHgwWEhSY2RHeGxkQ0J1WlhoMFUybGliR2x1WnlBOUlHRmpkR2wyWlZOc2FXUmxMbkJ5WlhacGIzVnpSV3hsYldWdWRGTnBZbXhwYm1jN1hISmNibHh5WEc1Y2RGeDBYSFJwWmlBb2JtVjRkRk5wWW14cGJtY2dQVDBnYm5Wc2JDa2dlMXh5WEc1Y2RGeDBYSFJjZEc1bGVIUlRhV0pzYVc1bklEMGdZV04wYVhabFUyeHBaR1U3WEhKY2JseDBYSFJjZEgxY2NseHVYSEpjYmx4MFhIUmNkR2xtSUNodVpYaDBVMmxpYkdsdVp5NWpiR0Z6YzB4cGMzUXVZMjl1ZEdGcGJuTW9KMk5oY205MWMyVnNYMTl6Ykdsa1pTY3BLU0I3WEhKY2JseDBYSFJjZEZ4MFlXTjBhWFpsVTJ4cFpHVXVZMnhoYzNOTWFYTjBMbkpsYlc5MlpTZ25ZV04wYVhabEp5azdYSEpjYmx4MFhIUmNkRngwYm1WNGRGTnBZbXhwYm1jdVkyeGhjM05NYVhOMExtRmtaQ2duWVdOMGFYWmxKeWs3WEhKY2JseDBYSFJjZEgxY2NseHVYSFJjZEgwcE8xeHlYRzVjZEgxY2NseHVYSEpjYmx4MGFXWWdLR05oY205MWMyVnNJQ0U5UFNCdWRXeHNLU0I3WEhKY2JseDBYSFFvWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjZEZ4MFhIUmthWE53YkdGNVEyRnliM1Z6Wld3b0tUdGNjbHh1WEhSY2RIMHBLQ2s3WEhKY2JseDBmVnh5WEc1OUtUdGNjbHh1SWl3aWQybHVaRzkzTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjBSUFRVTnZiblJsYm5STWIyRmtaV1FuTENCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmx4MEx5OGdkR0ZpYzF4eVhHNWNkR052Ym5OMElIUmhZa3hwYzNSQ2RHNGdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eVFXeHNLQ2N1ZEdGaVkyTnZjbVJwYjI1ZlgyeHBjM1F0WW5SdUp5azdYSEpjYmx4MFkyOXVjM1FnZEdGaWN5QTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNKQmJHd29KeTUwWVdKalkyOXlaR2x2Ymw5ZlkyOXVkR0ZwYm1WeUp5azdYSEpjYmx4MFkyOXVjM1FnZEdGaVkyTnZjbVJwYjI1TWFYTjBJRDBnWkc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEVKNVNXUW9KM1JoWW1OamIzSmthVzl1TFd4cGMzUW5LVHRjY2x4dVhIUmpiMjV6ZENCMFlXSnpRMjl1ZEdWdWRDQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNKQmJHd29KeTUwWVdKalkyOXlaR2x2Ymw5ZmRHRmlMV2x1Ym1WeUp5azdYSEpjYmx4MFkyOXVjM1FnZEdGaVkyTnZjbVJwYjI0Z1BTQmtiMk4xYldWdWRDNW5aWFJGYkdWdFpXNTBRbmxKWkNnbmRHRmlZMk52Y21ScGIyNG5LVHRjY2x4dVhISmNibHgwWm5WdVkzUnBiMjRnWVdOMGFYWmhkR1ZVWVdKektDa2dlMXh5WEc1Y2RGeDBkR0ZpVEdsemRFSjBiaTVtYjNKRllXTm9LQ2gwWVdJcElEMCtJSHRjY2x4dVhIUmNkRngwZEdGaUxtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0oyTnNhV05ySnl3Z0tHVXBJRDArSUh0Y2NseHVYSFJjZEZ4MFhIUmpiMjV6ZENCMFlXSk9ZWFlnUFNCMFlXSXVjR0Z5Wlc1MFJXeGxiV1Z1ZER0Y2NseHVYSFJjZEZ4MFhIUmpiMjV6ZENCMFlXSnpRMjl1ZEdGcGJtVnlJRDBnZEdGaVRtRjJMbkJoY21WdWRFVnNaVzFsYm5RdWNHRnlaVzUwUld4bGJXVnVkRHRjY2x4dVhIUmNkRngwWEhSamIyNXpkQ0IwWVdKT2RXMWlaWElnUFNCMFlXSXVaR0YwWVhObGRDNW1iM0pVWVdJN1hISmNibHgwWEhSY2RGeDBZMjl1YzNRZ2RHRmlWRzlCWTNScGRtRjBaU0E5SUhSaFluTkRiMjUwWVdsdVpYSXVjWFZsY25sVFpXeGxZM1J2Y2loY2NseHVYSFJjZEZ4MFhIUmNkR0F1ZEdGaVkyTnZjbVJwYjI1ZlgzUmhZbHRrWVhSaExYUmhZajFjSWlSN2RHRmlUblZ0WW1WeWZWd2lYV0JjY2x4dVhIUmNkRngwWEhRcE8xeHlYRzVjY2x4dVhIUmNkRngwWEhSMFlXSk9ZWFl1Y1hWbGNubFRaV3hsWTNSdmNrRnNiQ2duTG5SaFltTmpiM0prYVc5dVgxOXNhWE4wTFdKMGJpY3BMbVp2Y2tWaFkyZ29LR0owYmlrZ1BUNGdlMXh5WEc1Y2RGeDBYSFJjZEZ4MFluUnVMbU5zWVhOelRHbHpkQzV5WlcxdmRtVW9KMk4xY25KbGJuUW5LVHRjY2x4dVhIUmNkRngwWEhSOUtUdGNjbHh1WEhKY2JseDBYSFJjZEZ4MGRHRmljME52Ym5SaGFXNWxjaTV4ZFdWeWVWTmxiR1ZqZEc5eVFXeHNLQ2N1ZEdGaVkyTnZjbVJwYjI1ZlgzUmhZaWNwTG1admNrVmhZMmdvS0hSaFlpa2dQVDRnZTF4eVhHNWNkRngwWEhSY2RGeDBkR0ZpTG1Oc1lYTnpUR2x6ZEM1eVpXMXZkbVVvSjJOMWNuSmxiblFuS1R0Y2NseHVYSFJjZEZ4MFhIUjlLVHRjY2x4dVhISmNibHgwWEhSY2RGeDBkR0ZpTG1Oc1lYTnpUR2x6ZEM1aFpHUW9KMk4xY25KbGJuUW5LVHRjY2x4dVhIUmNkRngwWEhSMFlXSlViMEZqZEdsMllYUmxMbU5zWVhOelRHbHpkQzVoWkdRb0oyTjFjbkpsYm5RbktUdGNjbHh1WEhKY2JseDBYSFJjZEZ4MGFXWWdLSGRwYm1SdmR5NXBibTVsY2xkcFpIUm9JRDQ5SURZd01Da2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MGRHRmljME52Ym5SbGJuUXVabTl5UldGamFDZ29kR0ZpY3lrZ1BUNGdlMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUjBZV0p6TG5OMGVXeGxMbTFoZUVobGFXZG9kQ0E5SUhSaFluTXVjMk55YjJ4c1NHVnBaMmgwSUNzZ0ozQjRKenRjY2x4dVhIUmNkRngwWEhSY2RIMHBPMXh5WEc1Y2RGeDBYSFJjZEgxY2NseHVYSFJjZEZ4MGZTazdYSEpjYmx4MFhIUjlLVHRjY2x4dVhISmNibHgwWEhScFppQW9kR0ZpWTJOdmNtUnBiMjVNYVhOMEtTQjdYSEpjYmx4MFhIUmNkSFJoWW5NdVptOXlSV0ZqYUNnb2RHRmlLU0E5UGlCN1hISmNibHgwWEhSY2RGeDBkR0ZpTG5GMVpYSjVVMlZzWldOMGIzSW9KeTUwWVdKalkyOXlaR2x2Ymw5ZmJHbHpkQ0F1ZEdGaVkyTnZjbVJwYjI1ZlgySjBiaWNwTG1Oc2FXTnJLQ2s3WEhKY2JseDBYSFJjZEgwcE8xeHlYRzVjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkSGRwYm1SdmR5NWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZHlaWE5wZW1VbkxDQW9aU2tnUFQ0Z2UxeHlYRzVjZEZ4MFhIUnBaaUFvZDJsdVpHOTNMbWx1Ym1WeVYybGtkR2dnUGowZ05qQXdLU0I3WEhKY2JseDBYSFJjZEZ4MFlXTjBhWFpoZEdWVVlXSnpLQ2s3WEhKY2JseDBYSFJjZEgxY2NseHVYSFJjZEgwcE8xeHlYRzVjZEgxY2NseHVYSEpjYmx4MEx5OHZMeThnWVdOamIzSmthVzl1WEhKY2JseDBZMjl1YzNRZ1lXTmpiM0prYVc5dVFuUnVJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNrRnNiQ2duTG1GalkyOXlaR2x2Ymw5ZmJHbHpkQzFpZEc0bktUdGNjbHh1WEhKY2JseDBablZ1WTNScGIyNGdZV04wYVhaaGRHVkJZMk52Y21ScGIyNG9LU0I3WEhKY2JseDBYSFJoWTJOdmNtUnBiMjVDZEc0dVptOXlSV0ZqYUNnb1luUnVLU0E5UGlCN1hISmNibHgwWEhSY2RHSjBiaTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RqYkdsamF5Y3NJQ2dwSUQwK0lIdGNjbHh1WEhSY2RGeDBYSFF2THlCamFHVmpheUJtYjNJZ2IzQmxiaUJoWTJOdmNtUnBiMjVjY2x4dVhIUmNkRngwWEhSamIyNXpkQ0JoWTJOdmNtUnBiMjVDZEc1UGNHVnVJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpaGNjbHh1WEhSY2RGeDBYSFJjZENjdVlXTmpiM0prYVc5dVgxOXNhWE4wTFdKMGJpNXZjR1Z1SjF4eVhHNWNkRngwWEhSY2RDazdYSEpjYmx4eVhHNWNkRngwWEhSY2RHbG1JQ2hoWTJOdmNtUnBiMjVDZEc1UGNHVnVJQ1ltSUdGalkyOXlaR2x2YmtKMGJrOXdaVzRnSVQwOUlHSjBiaWtnZTF4eVhHNWNkRngwWEhSY2RGeDBMeThnYVdZZ2RHaGxjbVVnYVhNZ2IzQmxiaUIwYUdWdUlISmxiVzkyWlNCdmNHVnVJR05zWVhOeklHRnVaQ0J6WlhRZ2JXRjRhR1ZwWjJoMElIUnZJREJjY2x4dVhIUmNkRngwWEhSY2RHRmpZMjl5WkdsdmJrSjBiazl3Wlc0dVkyeGhjM05NYVhOMExuUnZaMmRzWlNnbmIzQmxiaWNwTzF4eVhHNWNkRngwWEhSY2RGeDBZV05qYjNKa2FXOXVRblJ1VDNCbGJpNXVaWGgwUld4bGJXVnVkRk5wWW14cGJtY3VjM1I1YkdVdWJXRjRTR1ZwWjJoMElEMGdNRHRjY2x4dVhIUmNkRngwWEhSOVhISmNibHh5WEc1Y2RGeDBYSFJjZEM4dklITmxkQ0J2Y0dWdUlHTnNZWE56SUhSdklHVjJaWEo1SUdOc2FXTnJaV1FnWVdOamIzSmthVzl1SUdKMGJseHlYRzVjZEZ4MFhIUmNkR0owYmk1amJHRnpjMHhwYzNRdWRHOW5aMnhsS0NkdmNHVnVKeWs3WEhKY2JseDBYSFJjZEZ4MFkyOXVjM1FnWVdOamIzSmthVzl1UW05a2VTQTlJR0owYmk1dVpYaDBSV3hsYldWdWRGTnBZbXhwYm1jN1hISmNibHh5WEc1Y2RGeDBYSFJjZEdsbUlDaGlkRzR1WTJ4aGMzTk1hWE4wTG1OdmJuUmhhVzV6S0NkdmNHVnVKeWtwSUh0Y2NseHVYSFJjZEZ4MFhIUmNkR0ZqWTI5eVpHbHZia0p2WkhrdWMzUjViR1V1YldGNFNHVnBaMmgwSUQwZ1lXTmpiM0prYVc5dVFtOWtlUzV6WTNKdmJHeElaV2xuYUhRZ0t5QW5jSGduTzF4eVhHNWNkRngwWEhSY2RIMGdaV3h6WlNCN1hISmNibHgwWEhSY2RGeDBYSFJoWTJOdmNtUnBiMjVDYjJSNUxuTjBlV3hsTG0xaGVFaGxhV2RvZENBOUlEQTdYSEpjYmx4MFhIUmNkRngwZlZ4eVhHNWNkRngwWEhSOUtUdGNjbHh1WEhSY2RIMHBPMXh5WEc1Y2NseHVYSFJjZEhkcGJtUnZkeTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2R5WlhOcGVtVW5MQ0FvWlNrZ1BUNGdlMXh5WEc1Y2RGeDBYSFJwWmlBb2QybHVaRzkzTG1sdWJtVnlWMmxrZEdnZ1BDQTJNREFwSUh0Y2NseHVYSFJjZEZ4MFhIUjBZV0p6UTI5dWRHVnVkQzVtYjNKRllXTm9LQ2gwWVdKektTQTlQaUI3WEhKY2JseDBYSFJjZEZ4MFhIUjBZV0p6TG5OMGVXeGxMbTFoZUVobGFXZG9kQ0E5SURBN1hISmNibHgwWEhSY2RGeDBYSFJwWmlBb2RHRmljeTV3Y21WMmFXOTFjMFZzWlcxbGJuUlRhV0pzYVc1bkxtTnNZWE56VEdsemRDNWpiMjUwWVdsdWN5Z25iM0JsYmljcEtTQjdYSEpjYmx4MFhIUmNkRngwWEhSY2RIUmhZbk11Y0hKbGRtbHZkWE5GYkdWdFpXNTBVMmxpYkdsdVp5NWpiR0Z6YzB4cGMzUXVjbVZ0YjNabEtDZHZjR1Z1SnlrN1hISmNibHgwWEhSY2RGeDBYSFI5WEhKY2JseDBYSFJjZEZ4MGZTazdYSEpjYmx4MFhIUmNkSDFjY2x4dVhIUmNkSDBwTzF4eVhHNWNkSDFjY2x4dVhISmNibHgwYVdZZ0tIUmhZbU5qYjNKa2FXOXVLU0I3WEhKY2JseDBYSFJoWTNScGRtRjBaVlJoWW5Nb0tUdGNjbHh1WEhSY2RHRmpkR2wyWVhSbFFXTmpiM0prYVc5dUtDazdYSEpjYmx4MGZWeHlYRzU5S1R0Y2NseHVJbDBzSW5OdmRYSmpaVkp2YjNRaU9pSWlmUT09In0=
