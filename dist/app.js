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

		/* 	window.addEventListener('resize', (e) => {
			if (window.innerWidth >= 600) {
				activateTabs();
			}
		}); */
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Fkb3B0Q29udGVudFN3aXRjaGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9mZXRjaEFuaW1hbHNEYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9mb3JtVmFsaWRhaXRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbmF2LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RhYmNjb3JkaW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRztBQUNILEVBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOERBQThELE9BQU87QUFDckU7QUFDQSxnQ0FBZ0MsT0FBTztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ2pDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx5Q0FBeUMsVUFBVSxTQUFTLFNBQVM7QUFDckU7QUFDQSxLQUFLLEVBQUU7QUFDUDtBQUNBO0FBQ0EsMERBQTBELFNBQVM7QUFDbkU7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLEVBQUUsV0FBVztBQUM5QjtBQUNBLDBDQUEwQztBQUMxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0UsWUFBWTtBQUM1RTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRSxNQUFNO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxrQ0FBa0M7QUFDakY7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGtDQUFrQztBQUNqRjtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0Msa0NBQWtDO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHlDQUF5QyxVQUFVLFNBQVMsU0FBUztBQUNyRTtBQUNBLEtBQUssRUFBRTtBQUNQO0FBQ0E7QUFDQSwwREFBMEQsU0FBUztBQUNuRTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsRUFBRSxXQUFXO0FBQzlCO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxZQUFZO0FBQzVFO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFLFNBQVM7QUFDbkY7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGtDQUFrQztBQUNqRjtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0Msa0NBQWtDO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxrQ0FBa0M7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBOztBQUVBOztBQUVBLGtCQUFrQixtQkFBbUI7QUFDckM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQy9sQkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUMseUJBQXlCLDZCQUE2QixJQUFJLFFBQVEsSUFBSSxRQUFRLElBQUksUUFBUSxJQUFJLGdDQUFnQyxHQUFHO0FBQ2xLO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDdkZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRixDQUFDOzs7Ozs7Ozs7Ozs7QUNmRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7Ozs7Ozs7Ozs7OztBQ3BCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBLHFDQUFxQyxZQUFZO0FBQ2pELG1DQUFtQyxjQUFjO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDakdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLFVBQVU7QUFDOUM7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxJQUFJO0FBQ0osR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEVBQUU7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG5cdGhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIG51bGwsICcgJyk7XHJcblx0Y29uc3QgdGFiU3dpdGNoZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc3dpdGNoZXJdJyk7XHJcblxyXG5cdHRhYlN3aXRjaGVycy5mb3JFYWNoKCh0YWJTd2l0Y2gpID0+IHtcclxuXHRcdGNvbnN0IHRhYlN3aXRjaGVyID0gdGFiU3dpdGNoO1xyXG5cdFx0Y29uc3QgcGFnZUlkID0gdGFiU3dpdGNoZXIuZGF0YXNldC50YWI7XHJcblxyXG5cdFx0dGFiU3dpdGNoZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0XHRkb2N1bWVudFxyXG5cdFx0XHRcdC5xdWVyeVNlbGVjdG9yKCcuYWRvcHRfX2xpc3QtaXRlbS5hY3RpdmUnKVxyXG5cdFx0XHRcdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHJcblx0XHRcdHRhYlN3aXRjaGVyLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHJcblx0XHRcdHN3aXRjaFBhZ2UocGFnZUlkKTtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cclxuXHRmdW5jdGlvbiBzd2l0Y2hQYWdlKHBhZ2VJZCkge1xyXG5cdFx0Y29uc3QgY3VycmVudFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS5hY3RpdmUnKTtcclxuXHRcdGNvbnN0IGN1cnJlbnRQYWdlSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UtaGVhZGVyLmFjdGl2ZScpO1xyXG5cclxuXHRcdGN1cnJlbnRQYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0Y3VycmVudFBhZ2VIZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblxyXG5cdFx0Y29uc3QgbmV4dFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucGFnZVtkYXRhLXBhZ2U9XCIke3BhZ2VJZH1cIl1gKTtcclxuXHRcdGNvbnN0IG5leHRQYWdlSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuXHRcdFx0YC5wYWdlLWhlYWRlcltkYXRhLWhlYWRlcj1cIiR7cGFnZUlkfVwiXWBcclxuXHRcdCk7XHJcblx0XHRuZXh0UGFnZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdG5leHRQYWdlSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdH1cclxufSk7XHJcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3QgYW5pbWFsc1VybCA9ICcuLi9qcy9hbmltYWxzLmpzb24nO1xyXG5cdGNvbnN0IGFuaW1hbHNQYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbmltYWxzLXBhZ2VzJyk7XHJcblx0Y29uc3QgZG9nc0JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb2dzLWJveCcpO1xyXG5cdGNvbnN0IGNhdHNCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0cy1ib3gnKTtcclxuXHJcblx0ZnVuY3Rpb24gZ2V0QW5pbWFsc0RhdGEoKSB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRmZXRjaChhbmltYWxzVXJsKVxyXG5cdFx0XHRcdC50aGVuKChyZXNwKSA9PiByZXNwLmpzb24oKSlcclxuXHRcdFx0XHQudGhlbigoZGF0YSkgPT4gcmVzb2x2ZShkYXRhKSlcclxuXHRcdFx0XHQuY2F0Y2goKGVycikgPT4gcmVqZWN0KGVycikpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBkb2dOdW1iZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG9nTnVtYmVyJyk7XHJcblx0Y29uc3QgY2F0TnVtYmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdE51bWJlcicpO1xyXG5cclxuXHRhc3luYyBmdW5jdGlvbiBkaXNwbGF5QW5pbWFsTnVtYmVycygpIHtcclxuXHRcdGNvbnN0IGRhdGFMaXN0ID0gYXdhaXQgZ2V0QW5pbWFsc0RhdGEoKTtcclxuXHRcdGNvbnN0IGFuaW1hbHNBcnJheSA9IGRhdGFMaXN0LmFuaW1hbHM7XHJcblxyXG5cdFx0bGV0IGRvZ3NBcnJheU51bWJlciA9IGFuaW1hbHNBcnJheVswXS5kb2dzLmxlbmd0aDtcclxuXHRcdGxldCBjYXRzQXJyYXlOdW1iZXIgPSBhbmltYWxzQXJyYXlbMF0uY2F0cy5sZW5ndGg7XHJcblxyXG5cdFx0ZG9nTnVtYmVyLmlubmVyVGV4dCA9IGRvZ3NBcnJheU51bWJlcjtcclxuXHRcdGNhdE51bWJlci5pbm5lclRleHQgPSBjYXRzQXJyYXlOdW1iZXI7XHJcblx0fVxyXG5cclxuXHRpZiAoKGRvZ051bWJlciwgY2F0TnVtYmVyKSkge1xyXG5cdFx0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0ZGlzcGxheUFuaW1hbE51bWJlcnMoKTtcclxuXHRcdH0pKCk7XHJcblx0fVxyXG5cclxuXHRhc3luYyBmdW5jdGlvbiBkaXNwbGF5QW5pbWFscygpIHtcclxuXHRcdGNvbnN0IGRhdGFMaXN0ID0gYXdhaXQgZ2V0QW5pbWFsc0RhdGEoKTtcclxuXHRcdGNvbnN0IGFuaW1hbHNBcnJheSA9IGRhdGFMaXN0LmFuaW1hbHM7XHJcblxyXG5cdFx0YW5pbWFsc0FycmF5LmZvckVhY2goKGFuaW1hbCkgPT4ge1xyXG5cdFx0XHRkb2dzQXJyYXkgPSBhbmltYWwuZG9ncztcclxuXHRcdFx0Y2F0c0FycmF5ID0gYW5pbWFsLmNhdHM7XHJcblxyXG5cdFx0XHRkb2dzQXJyYXkuZm9yRWFjaCgoZG9nKSA9PiB7XHJcblx0XHRcdFx0ZG9nQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRcdFx0ZG9nQm94LmNsYXNzTGlzdC5hZGQoJ3BhZ2VfX2JveCcpO1xyXG5cclxuXHRcdFx0XHRjb25zdCBkb2dZZWFycyA9IGRvZy5iaXJ0aDtcclxuXHJcblx0XHRcdFx0Y29uc3QgbWlsaXNlY3NCZXR3ZWVuRE9CYW5kMTk3MCA9IERhdGUucGFyc2UoZG9nWWVhcnMpO1xyXG5cdFx0XHRcdGNvbnN0IG1pbGlzZWNzQmV0d2Vlbk5PV2FuZDE5NzAgPSBEYXRlLm5vdygpO1xyXG5cdFx0XHRcdGNvbnN0IGFnZUluTWlsaXNlY3MgPVxyXG5cdFx0XHRcdFx0bWlsaXNlY3NCZXR3ZWVuTk9XYW5kMTk3MCAtIG1pbGlzZWNzQmV0d2VlbkRPQmFuZDE5NzA7XHJcblxyXG5cdFx0XHRcdGNvbnN0IG1pbGlzZWNzID0gYWdlSW5NaWxpc2VjcztcclxuXHRcdFx0XHRjb25zdCBzZWNzID0gMTAwMDtcclxuXHRcdFx0XHRjb25zdCBtaW5zID0gc2VjcyAqIDYwO1xyXG5cdFx0XHRcdGNvbnN0IGhvdXIgPSBtaW5zICogNjA7XHJcblx0XHRcdFx0Y29uc3QgZGF5ID0gaG91ciAqIDI0O1xyXG5cdFx0XHRcdGNvbnN0IHllYXIgPSBkYXkgKiAzNjU7XHJcblxyXG5cdFx0XHRcdGxldCB5ZWFycyA9IE1hdGgucm91bmQobWlsaXNlY3MgLyB5ZWFyKTtcclxuXHJcblx0XHRcdFx0ZG9nQm94LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2VfX2JveC10b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLiR7ZG9nLmltYWdlfVwiIGFsdD1cIiR7ZG9nLm5hbWV9ICR7XHJcblx0XHRcdFx0XHRkb2cuc3BlY2llc1xyXG5cdFx0XHRcdH1cIn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2VfX2JveC1ib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInBhZ2VfX2JveC10aXRsZVwiPiR7ZG9nLm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlX19ib3gtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleHBhbmRNb3JlQ29udGVudFwiIGlkPVwic2hvd01vcmUtJHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRvZy5zcGVjaWVzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSR7ZG9nLm51bWJlcn1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwYWdlX19ib3gtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtkb2cuZGVzY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV4cGFuZE1vcmVIb2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kLW1vcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaGlkZXRleHQ9XCIuLi5SZWFkIGxlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zaG93dGV4dD1cIi4uLlJlYWQgbW9yZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cInNob3dNb3JlLSR7ZG9nLnNwZWNpZXN9JHtcclxuXHRcdFx0XHRcdGRvZy5udW1iZXJcclxuXHRcdFx0XHR9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnV0dG9uIHNob3dNb3JlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uUmVhZCBtb3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInBhZ2VfX2JveC1pY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VfX2JveC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXdlaWdodFwiPjwvaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PHNwYW4gY2xhc3M9XCJwYWdlX19ib3gtaWNvbi0tdGV4dFwiPiR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZG9nLndlaWdodFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IGtnPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZV9fYm94LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtYXJyb3dzLWFsdC12XCI+PC9pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48c3BhbiBjbGFzcz1cInBhZ2VfX2JveC1pY29uLS10ZXh0XCI+JHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkb2cuaGVpZ2h0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1jbTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VfX2JveC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNhbGVuZGFyLWNoZWNrXCI+PC9pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48c3BhbiBjbGFzcz1cInBhZ2VfX2JveC1pY29uLS10ZXh0XCI+JHt5ZWFyc30geXIuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZV9fYm94LWljb25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJmYXMgZmEtcGFsZXR0ZVwiPjwvaVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+PHNwYW4gY2xhc3M9XCJwYWdlX19ib3gtaWNvbi0tdGV4dFwiPiR7ZG9nLmNvbG9yWzBdID8gZG9nLmNvbG9yWzBdIDogJy0nfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VfX2JveC1pY29uXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVwiZmFzIGZhLXBhbGV0dGVcIj48L2lcclxuXHRcdFx0XHRcdFx0XHRcdFx0PjxzcGFuIGNsYXNzPVwicGFnZV9fYm94LWljb24tLXRleHRcIj4ke2RvZy5jb2xvclsxXSA/IGRvZy5jb2xvclsxXSA6ICctJ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cImZhcyBmYS1wYWxldHRlXCI+PC9pXHJcblx0XHRcdFx0XHRcdFx0XHRcdD48c3BhbiBjbGFzcz1cInBhZ2VfX2JveC1pY29uLS10ZXh0XCI+JHtkb2cuY29sb3JbMl0gPyBkb2cuY29sb3JbMl0gOiAnLSd9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1wYXdcIj48L2lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxzcGFuIGNsYXNzPVwicGFnZV9fYm94LWljb24tLXRleHRcIj4ke1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRvZy5jb2F0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS12ZW51cy1tYXJzXCI+PC9pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48c3BhbiBjbGFzcz1cInBhZ2VfX2JveC1pY29uLS10ZXh0XCI+JHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkb2cuZ2VuZGVyXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgYDtcclxuXHJcblx0XHRcdFx0ZG9nc0JveC5hcHBlbmRDaGlsZChkb2dCb3gpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGNhdHNBcnJheS5mb3JFYWNoKChjYXQpID0+IHtcclxuXHRcdFx0XHRjYXRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdFx0XHRjYXRCb3guY2xhc3NMaXN0LmFkZCgncGFnZV9fYm94Jyk7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGNhdFllYXJzID0gY2F0LmJpcnRoO1xyXG5cclxuXHRcdFx0XHRjb25zdCBtaWxpc2Vjc0JldHdlZW5ET0JhbmQxOTcwY2F0ID0gRGF0ZS5wYXJzZShjYXRZZWFycyk7XHJcblx0XHRcdFx0Y29uc3QgbWlsaXNlY3NCZXR3ZWVuTk9XYW5kMTk3MCA9IERhdGUubm93KCk7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGFnZUluTWlsaXNlY3NDYXQgPVxyXG5cdFx0XHRcdFx0bWlsaXNlY3NCZXR3ZWVuTk9XYW5kMTk3MCAtIG1pbGlzZWNzQmV0d2VlbkRPQmFuZDE5NzBjYXQ7XHJcblxyXG5cdFx0XHRcdGNvbnN0IG1pbGlzZWNzQ2F0ID0gYWdlSW5NaWxpc2Vjc0NhdDtcclxuXHRcdFx0XHRjb25zdCBzZWNzID0gMTAwMDtcclxuXHRcdFx0XHRjb25zdCBtaW5zID0gc2VjcyAqIDYwO1xyXG5cdFx0XHRcdGNvbnN0IGhvdXIgPSBtaW5zICogNjA7XHJcblx0XHRcdFx0Y29uc3QgZGF5ID0gaG91ciAqIDI0O1xyXG5cdFx0XHRcdGNvbnN0IHllYXIgPSBkYXkgKiAzNjU7XHJcblxyXG5cdFx0XHRcdGxldCB5ZWFyc0NhdCA9IE1hdGgucm91bmQobWlsaXNlY3NDYXQgLyB5ZWFyKTtcclxuXHJcblx0XHRcdFx0Y2F0Qm94LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2VfX2JveC10b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLiR7Y2F0LmltYWdlfVwiIGFsdD1cIiR7Y2F0Lm5hbWV9ICR7XHJcblx0XHRcdFx0XHRjYXQuc3BlY2llc1xyXG5cdFx0XHRcdH1cIn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2VfX2JveC1ib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInBhZ2VfX2JveC10aXRsZVwiPiR7Y2F0Lm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlX19ib3gtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleHBhbmRNb3JlQ29udGVudFwiIGlkPVwic2hvd01vcmUtJHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNhdC5zcGVjaWVzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSR7Y2F0Lm51bWJlcn1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwYWdlX19ib3gtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtjYXQuZGVzY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV4cGFuZE1vcmVIb2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kLW1vcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaGlkZXRleHQ9XCIuLi5SZWFkIGxlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zaG93dGV4dD1cIi4uLlJlYWQgbW9yZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cInNob3dNb3JlLSR7Y2F0LnNwZWNpZXN9JHtcclxuXHRcdFx0XHRcdGNhdC5udW1iZXJcclxuXHRcdFx0XHR9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnV0dG9uIHNob3dNb3JlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uUmVhZCBtb3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInBhZ2VfX2JveC1pY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VfX2JveC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXdlaWdodFwiPjwvaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PHNwYW4gY2xhc3M9XCJwYWdlX19ib3gtaWNvbi0tdGV4dFwiPiR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2F0LndlaWdodFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IGtnPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZV9fYm94LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtYXJyb3dzLWFsdC12XCI+PC9pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48c3BhbiBjbGFzcz1cInBhZ2VfX2JveC1pY29uLS10ZXh0XCI+JHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjYXQuaGVpZ2h0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1jbTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VfX2JveC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNhbGVuZGFyLWNoZWNrXCI+PC9pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48c3BhbiBjbGFzcz1cInBhZ2VfX2JveC1pY29uLS10ZXh0XCI+JHt5ZWFyc0NhdH0geXIuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZV9fYm94LWljb25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJmYXMgZmEtcGFsZXR0ZVwiPjwvaVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+PHNwYW4gY2xhc3M9XCJwYWdlX19ib3gtaWNvbi0tdGV4dFwiPiR7Y2F0LmNvbG9yWzBdID8gY2F0LmNvbG9yWzBdIDogJy0nfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VfX2JveC1pY29uXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVwiZmFzIGZhLXBhbGV0dGVcIj48L2lcclxuXHRcdFx0XHRcdFx0XHRcdFx0PjxzcGFuIGNsYXNzPVwicGFnZV9fYm94LWljb24tLXRleHRcIj4ke2NhdC5jb2xvclsxXSA/IGNhdC5jb2xvclsxXSA6ICctJ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cImZhcyBmYS1wYWxldHRlXCI+PC9pXHJcblx0XHRcdFx0XHRcdFx0XHRcdD48c3BhbiBjbGFzcz1cInBhZ2VfX2JveC1pY29uLS10ZXh0XCI+JHtjYXQuY29sb3JbMl0gPyBjYXQuY29sb3JbMl0gOiAnLSd9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1wYXdcIj48L2lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxzcGFuIGNsYXNzPVwicGFnZV9fYm94LWljb24tLXRleHRcIj4ke1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNhdC5jb2F0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS12ZW51cy1tYXJzXCI+PC9pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48c3BhbiBjbGFzcz1cInBhZ2VfX2JveC1pY29uLS10ZXh0XCI+JHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjYXQuZ2VuZGVyXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgYDtcclxuXHJcblx0XHRcdFx0Y2F0c0JveC5hcHBlbmRDaGlsZChjYXRCb3gpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGxldCBkb2dCb3hBcnJheSA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjZG9ncy1ib3ggLnBhZ2VfX2JveCcpXTtcclxuXHRcdGxldCBjYXRCb3hBcnJheSA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY2F0cy1ib3ggLnBhZ2VfX2JveCcpXTtcclxuXHRcdGxldCBjdXJyZW50UGFnZSA9IDE7XHJcblx0XHRsZXQgZWxlbWVudHNPblBhZ2UgPSA0O1xyXG5cclxuXHRcdGNvbnN0IHBhZ2luYXRpb25FbERvZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG9ncy1wYWdpbmF0aW9uJyk7XHJcblx0XHRjb25zdCBwYWdpbmF0aW9uRWxDYXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdHMtcGFnaW5hdGlvbicpO1xyXG5cclxuXHRcdGZ1bmN0aW9uIGRpc3BsYXlQYWdpbmF0ZWRJdGVtcyhpdGVtcywgd3JhcHBlciwgaXRlbXNQZXJQYWdlLCBwYWdlKSB7XHJcblx0XHRcdHdyYXBwZXIuaW5uZXJIVE1MID0gJyc7XHJcblx0XHRcdHBhZ2UtLTtcclxuXHJcblx0XHRcdGxldCBzdGFydCA9IGl0ZW1zUGVyUGFnZSAqIHBhZ2U7XHJcblx0XHRcdGxldCBlbmQgPSBzdGFydCArIGl0ZW1zUGVyUGFnZTtcclxuXHRcdFx0bGV0IHBhZ2luYXRlZEl0ZW1zID0gaXRlbXMuc2xpY2Uoc3RhcnQsIGVuZCk7XHJcblxyXG5cdFx0XHRwYWdpbmF0ZWRJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcblx0XHRcdFx0bGV0IGl0ZW1FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0XHRcdGl0ZW1FbC5jbGFzc0xpc3QuYWRkKCdwYWdlX19ib3gnKTtcclxuXHJcblx0XHRcdFx0aXRlbUVsID0gaXRlbTtcclxuXHJcblx0XHRcdFx0d3JhcHBlci5hcHBlbmRDaGlsZChpdGVtRWwpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBkaXNwbGF5UGFnaW5hdGlvbihpdGVtcywgd3JhcHBlciwgaXRlbXNQZXJQYWdlKSB7XHJcblx0XHRcdHdyYXBwZXIuaW5uZXJIVE1MID0gJyc7XHJcblxyXG5cdFx0XHRsZXQgcGFnZUNvdW50ID0gTWF0aC5jZWlsKGl0ZW1zLmxlbmd0aCAvIGl0ZW1zUGVyUGFnZSk7XHJcblxyXG5cdFx0XHRmb3IgKGxldCBpID0gMTsgaSA8IHBhZ2VDb3VudCArIDE7IGkrKykge1xyXG5cdFx0XHRcdGxldCBidG4gPSBwYWdpbmF0aW9uQnV0dG9uKGksIHBhZ2VDb3VudCk7XHJcblxyXG5cdFx0XHRcdGJ0bi5zdHlsZS53aWR0aCA9ICcwJztcclxuXHRcdFx0XHRidG4uc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuXHRcdFx0XHRidG4uc3R5bGUubWFyZ2luID0gJzAnO1xyXG5cclxuXHRcdFx0XHR3cmFwcGVyLmFwcGVuZENoaWxkKGJ0bik7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGxldCBuZXh0QnRuID0gbmV4dFBhZ2UocGFnZUNvdW50KTtcclxuXHRcdFx0d3JhcHBlci5hcHBlbmRDaGlsZChuZXh0QnRuKTtcclxuXHJcblx0XHRcdGxldCBwcmV2QnRuID0gcHJldlBhZ2UocGFnZUNvdW50KTtcclxuXHRcdFx0d3JhcHBlci5wcmVwZW5kKHByZXZCdG4pO1xyXG5cclxuXHRcdFx0bGV0IGN1cnJlbnRCdG5Eb2dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuXHRcdFx0XHQnI2RvZ3MgLnBhZ2luYXRpb24tYnRuLmFjdGl2ZSdcclxuXHRcdFx0KTtcclxuXHRcdFx0bGV0IGN1cnJlbnRCdG5DYXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuXHRcdFx0XHQnI2NhdHMgLnBhZ2luYXRpb24tYnRuLmFjdGl2ZSdcclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdGlmIChjdXJyZW50QnRuRG9ncyAmJiBjdXJyZW50QnRuQ2F0cykge1xyXG5cdFx0XHRcdGN1cnJlbnRCdG5Eb2dzLmNsYXNzTGlzdC5hZGQoJ2dyb3VwJyk7XHJcblx0XHRcdFx0Y3VycmVudEJ0bkRvZ3MubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2dyb3VwJyk7XHJcblx0XHRcdFx0Y3VycmVudEJ0bkRvZ3MubmV4dEVsZW1lbnRTaWJsaW5nLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKFxyXG5cdFx0XHRcdFx0J2dyb3VwJ1xyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0Y3VycmVudEJ0bkRvZ3MucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdncm91cCcpO1xyXG5cclxuXHRcdFx0XHRjdXJyZW50QnRuQ2F0cy5jbGFzc0xpc3QuYWRkKCdncm91cCcpO1xyXG5cdFx0XHRcdGN1cnJlbnRCdG5DYXRzLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdncm91cCcpO1xyXG5cdFx0XHRcdGN1cnJlbnRCdG5DYXRzLm5leHRFbGVtZW50U2libGluZy5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZChcclxuXHRcdFx0XHRcdCdncm91cCdcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdGN1cnJlbnRCdG5DYXRzLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnZ3JvdXAnKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIG5leHRQYWdlKHBhZ2VDb3VudCkge1xyXG5cdFx0XHRsZXQgbmV4dEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cdFx0XHRuZXh0QnRuLmNsYXNzTGlzdC5hZGQoJ25leHQnKTtcclxuXHRcdFx0bmV4dEJ0bi5pbm5lclRleHQgPSAnPic7XHJcblx0XHRcdG5leHRCdG4uY2xhc3NMaXN0LmFkZCgncGFnaW5hdGlvbi1idG4nKTtcclxuXHJcblx0XHRcdG5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0XHRcdGlmIChuZXh0QnRuLnBhcmVudEVsZW1lbnQgPT0gcGFnaW5hdGlvbkVsRG9ncykge1xyXG5cdFx0XHRcdFx0ZGlzcGxheVBhZ2luYXRlZEl0ZW1zKFxyXG5cdFx0XHRcdFx0XHRkb2dCb3hBcnJheSxcclxuXHRcdFx0XHRcdFx0ZG9nc0JveCxcclxuXHRcdFx0XHRcdFx0ZWxlbWVudHNPblBhZ2UsXHJcblx0XHRcdFx0XHRcdGN1cnJlbnRQYWdlXHJcblx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdGxldCBhY3RpdmVCdG5Eb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHRcdFx0XHQnI2RvZ3MgLnBhZ2luYXRpb24tYnRuLmFjdGl2ZSdcclxuXHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0YWN0aXZlQnRuRG9nLm5leHRFbGVtZW50U2libGluZy5jbGljaygpO1xyXG5cclxuXHRcdFx0XHRcdGlmIChjdXJyZW50UGFnZSA9PT0gcGFnZUNvdW50KSB7XHJcblx0XHRcdFx0XHRcdG5leHRCdG4uc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xyXG5cdFx0XHRcdFx0XHRuZXh0QnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0bGV0IHByZXZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZG9ncyAucHJldicpO1xyXG5cclxuXHRcdFx0XHRcdGlmIChjdXJyZW50UGFnZSAhPT0gMSkge1xyXG5cdFx0XHRcdFx0XHRwcmV2QnRuLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcblx0XHRcdFx0XHRcdHByZXZCdG4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhbGwnO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmIChhY3RpdmVCdG5Eb2cpIHtcclxuXHRcdFx0XHRcdFx0YWN0aXZlQnRuRG9nLmNsYXNzTGlzdC5hZGQoJ2dyb3VwJyk7XHJcblx0XHRcdFx0XHRcdGFjdGl2ZUJ0bkRvZy5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnZ3JvdXAnKTtcclxuXHRcdFx0XHRcdFx0YWN0aXZlQnRuRG9nLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnZ3JvdXAnKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChuZXh0QnRuLnBhcmVudEVsZW1lbnQgPT0gcGFnaW5hdGlvbkVsQ2F0cykge1xyXG5cdFx0XHRcdFx0ZGlzcGxheVBhZ2luYXRlZEl0ZW1zKFxyXG5cdFx0XHRcdFx0XHRjYXRCb3hBcnJheSxcclxuXHRcdFx0XHRcdFx0Y2F0c0JveCxcclxuXHRcdFx0XHRcdFx0ZWxlbWVudHNPblBhZ2UsXHJcblx0XHRcdFx0XHRcdGN1cnJlbnRQYWdlXHJcblx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdGxldCBhY3RpdmVCdG5DYXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHRcdFx0XHQnI2NhdHMgLnBhZ2luYXRpb24tYnRuLmFjdGl2ZSdcclxuXHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0YWN0aXZlQnRuQ2F0Lm5leHRFbGVtZW50U2libGluZy5jbGljaygpO1xyXG5cclxuXHRcdFx0XHRcdGlmIChjdXJyZW50UGFnZSA9PT0gcGFnZUNvdW50KSB7XHJcblx0XHRcdFx0XHRcdG5leHRCdG4uc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xyXG5cdFx0XHRcdFx0XHRuZXh0QnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0bGV0IHByZXZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2F0cyAucHJldicpO1xyXG5cclxuXHRcdFx0XHRcdGlmIChjdXJyZW50UGFnZSAhPT0gMSkge1xyXG5cdFx0XHRcdFx0XHRwcmV2QnRuLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcblx0XHRcdFx0XHRcdHByZXZCdG4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhbGwnO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmIChhY3RpdmVCdG5DYXQpIHtcclxuXHRcdFx0XHRcdFx0YWN0aXZlQnRuQ2F0LmNsYXNzTGlzdC5hZGQoJ2dyb3VwJyk7XHJcblx0XHRcdFx0XHRcdGFjdGl2ZUJ0bkNhdC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnZ3JvdXAnKTtcclxuXHRcdFx0XHRcdFx0YWN0aXZlQnRuQ2F0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnZ3JvdXAnKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0cmV0dXJuIG5leHRCdG47XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gcHJldlBhZ2UocGFnZUNvdW50KSB7XHJcblx0XHRcdGxldCBwcmV2QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblx0XHRcdHByZXZCdG4uY2xhc3NMaXN0LmFkZCgncHJldicpO1xyXG5cdFx0XHRwcmV2QnRuLmlubmVyVGV4dCA9ICc8JztcclxuXHRcdFx0cHJldkJ0bi5jbGFzc0xpc3QuYWRkKCdwYWdpbmF0aW9uLWJ0bicpO1xyXG5cclxuXHRcdFx0cHJldkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0XHRcdFx0aWYgKHByZXZCdG4ucGFyZW50RWxlbWVudCA9PSBwYWdpbmF0aW9uRWxEb2dzKSB7XHJcblx0XHRcdFx0XHRkaXNwbGF5UGFnaW5hdGVkSXRlbXMoXHJcblx0XHRcdFx0XHRcdGRvZ0JveEFycmF5LFxyXG5cdFx0XHRcdFx0XHRkb2dzQm94LFxyXG5cdFx0XHRcdFx0XHRlbGVtZW50c09uUGFnZSxcclxuXHRcdFx0XHRcdFx0Y3VycmVudFBhZ2VcclxuXHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0bGV0IGFjdGl2ZUJ0bkRvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdFx0XHRcdCcjZG9ncyAucGFnaW5hdGlvbi1idG4uYWN0aXZlJ1xyXG5cdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHRhY3RpdmVCdG5Eb2cucHJldmlvdXNFbGVtZW50U2libGluZy5jbGljaygpO1xyXG5cclxuXHRcdFx0XHRcdGxldCBuZXh0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RvZ3MgLm5leHQnKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoY3VycmVudFBhZ2UgIT09IHBhZ2VDb3VudCkge1xyXG5cdFx0XHRcdFx0XHRuZXh0QnRuLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcblx0XHRcdFx0XHRcdG5leHRCdG4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhbGwnO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmIChjdXJyZW50UGFnZSA9PT0gMSkge1xyXG5cdFx0XHRcdFx0XHRwcmV2QnRuLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcclxuXHRcdFx0XHRcdFx0cHJldkJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmIChhY3RpdmVCdG5Eb2cpIHtcclxuXHRcdFx0XHRcdFx0YWN0aXZlQnRuRG9nLmNsYXNzTGlzdC5hZGQoJ2dyb3VwJyk7XHJcblx0XHRcdFx0XHRcdGFjdGl2ZUJ0bkRvZy5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnZ3JvdXAnKTtcclxuXHRcdFx0XHRcdFx0YWN0aXZlQnRuRG9nLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnZ3JvdXAnKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChwcmV2QnRuLnBhcmVudEVsZW1lbnQgPT0gcGFnaW5hdGlvbkVsQ2F0cykge1xyXG5cdFx0XHRcdFx0ZGlzcGxheVBhZ2luYXRlZEl0ZW1zKFxyXG5cdFx0XHRcdFx0XHRjYXRCb3hBcnJheSxcclxuXHRcdFx0XHRcdFx0Y2F0c0JveCxcclxuXHRcdFx0XHRcdFx0ZWxlbWVudHNPblBhZ2UsXHJcblx0XHRcdFx0XHRcdGN1cnJlbnRQYWdlXHJcblx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdGxldCBhY3RpdmVCdG5DYXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHRcdFx0XHQnI2NhdHMgLnBhZ2luYXRpb24tYnRuLmFjdGl2ZSdcclxuXHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0YWN0aXZlQnRuQ2F0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xpY2soKTtcclxuXHJcblx0XHRcdFx0XHRsZXQgbmV4dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXRzIC5uZXh0Jyk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGN1cnJlbnRQYWdlICE9PSBwYWdlQ291bnQpIHtcclxuXHRcdFx0XHRcdFx0bmV4dEJ0bi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG5cdFx0XHRcdFx0XHRuZXh0QnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYWxsJztcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRpZiAoY3VycmVudFBhZ2UgPT09IDEpIHtcclxuXHRcdFx0XHRcdFx0cHJldkJ0bi5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XHJcblx0XHRcdFx0XHRcdHByZXZCdG4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRpZiAoYWN0aXZlQnRuQ2F0KSB7XHJcblx0XHRcdFx0XHRcdGFjdGl2ZUJ0bkNhdC5jbGFzc0xpc3QuYWRkKCdncm91cCcpO1xyXG5cdFx0XHRcdFx0XHRhY3RpdmVCdG5DYXQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2dyb3VwJyk7XHJcblx0XHRcdFx0XHRcdGFjdGl2ZUJ0bkNhdC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2dyb3VwJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGlmIChjdXJyZW50UGFnZSA9PT0gMSkge1xyXG5cdFx0XHRcdHByZXZCdG4uc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xyXG5cdFx0XHRcdHByZXZCdG4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHByZXZCdG47XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gcGFnaW5hdGlvbkJ1dHRvbihwYWdlLCBwYWdlQ291bnQpIHtcclxuXHRcdFx0bGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cdFx0XHRidXR0b24uY2xhc3NMaXN0LmFkZCgncGFnaW5hdGlvbi1idG4nKTtcclxuXHRcdFx0YnV0dG9uLmlubmVyVGV4dCA9IHBhZ2U7XHJcblxyXG5cdFx0XHRpZiAoY3VycmVudFBhZ2UgPT0gcGFnZSkge1xyXG5cdFx0XHRcdGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHRcdFx0XHRjdXJyZW50UGFnZSA9IHBhZ2U7XHJcblxyXG5cdFx0XHRcdGlmIChidXR0b24ucGFyZW50RWxlbWVudCA9PSBwYWdpbmF0aW9uRWxEb2dzKSB7XHJcblx0XHRcdFx0XHRkaXNwbGF5UGFnaW5hdGVkSXRlbXMoXHJcblx0XHRcdFx0XHRcdGRvZ0JveEFycmF5LFxyXG5cdFx0XHRcdFx0XHRkb2dzQm94LFxyXG5cdFx0XHRcdFx0XHRlbGVtZW50c09uUGFnZSxcclxuXHRcdFx0XHRcdFx0Y3VycmVudFBhZ2VcclxuXHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0bGV0IGFjdGl2ZUJ0bkRvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdFx0XHRcdCcjZG9ncyAucGFnaW5hdGlvbi1idG4uYWN0aXZlJ1xyXG5cdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHRhY3RpdmVCdG5Eb2cuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRcdFx0YnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cclxuXHRcdFx0XHRcdGxldCBuZXh0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RvZ3MgLm5leHQnKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoY3VycmVudFBhZ2UgPT09IHBhZ2VDb3VudCkge1xyXG5cdFx0XHRcdFx0XHRuZXh0QnRuLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcclxuXHRcdFx0XHRcdFx0bmV4dEJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0bmV4dEJ0bi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG5cdFx0XHRcdFx0XHRuZXh0QnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYWxsJztcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRsZXQgcHJldkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkb2dzIC5wcmV2Jyk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGN1cnJlbnRQYWdlID09PSAxKSB7XHJcblx0XHRcdFx0XHRcdHByZXZCdG4uc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xyXG5cdFx0XHRcdFx0XHRwcmV2QnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRwcmV2QnRuLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcblx0XHRcdFx0XHRcdHByZXZCdG4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhbGwnO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKGJ1dHRvbi5wYXJlbnRFbGVtZW50ID09IHBhZ2luYXRpb25FbENhdHMpIHtcclxuXHRcdFx0XHRcdGRpc3BsYXlQYWdpbmF0ZWRJdGVtcyhcclxuXHRcdFx0XHRcdFx0Y2F0Qm94QXJyYXksXHJcblx0XHRcdFx0XHRcdGNhdHNCb3gsXHJcblx0XHRcdFx0XHRcdGVsZW1lbnRzT25QYWdlLFxyXG5cdFx0XHRcdFx0XHRjdXJyZW50UGFnZVxyXG5cdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHRsZXQgYWN0aXZlQnRuQ2F0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuXHRcdFx0XHRcdFx0JyNjYXRzIC5wYWdpbmF0aW9uLWJ0bi5hY3RpdmUnXHJcblx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdGFjdGl2ZUJ0bkNhdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHJcblx0XHRcdFx0XHRidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRcdFx0bGV0IG5leHRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2F0cyAubmV4dCcpO1xyXG5cclxuXHRcdFx0XHRcdGlmIChjdXJyZW50UGFnZSA9PT0gcGFnZUNvdW50KSB7XHJcblx0XHRcdFx0XHRcdG5leHRCdG4uc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xyXG5cdFx0XHRcdFx0XHRuZXh0QnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRuZXh0QnRuLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcblx0XHRcdFx0XHRcdG5leHRCdG4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhbGwnO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGxldCBwcmV2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhdHMgLnByZXYnKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoY3VycmVudFBhZ2UgPT09IDEpIHtcclxuXHRcdFx0XHRcdFx0cHJldkJ0bi5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XHJcblx0XHRcdFx0XHRcdHByZXZCdG4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHByZXZCdG4uc3R5bGUub3BhY2l0eSA9ICcxJztcclxuXHRcdFx0XHRcdFx0cHJldkJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2FsbCc7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiBidXR0b247XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgZXhwYW5kc01vcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZXhwYW5kLW1vcmVdJyk7XHJcblxyXG5cdFx0ZnVuY3Rpb24gZXhwYW5kKCkge1xyXG5cdFx0XHRjb25zdCBzaG93Q29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZGF0YXNldC50YXJnZXQpO1xyXG5cdFx0XHRpZiAoc2hvd0NvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG5cdFx0XHRcdHRoaXMuaW5uZXJIVE1MID0gdGhpcy5kYXRhc2V0LnNob3d0ZXh0O1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuaW5uZXJIVE1MID0gdGhpcy5kYXRhc2V0LmhpZGV0ZXh0O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRzaG93Q29udGVudC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuXHRcdFx0aWYgKHNob3dDb250ZW50LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuXHRcdFx0XHRzaG93Q29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBzaG93Q29udGVudC5zY3JvbGxIZWlnaHQgKyAncHgnO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNob3dDb250ZW50LnN0eWxlLm1heEhlaWdodCA9IDIwICsgJ3B4JztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChkb2dzQm94KSB7XHJcblx0XHRcdGRpc3BsYXlQYWdpbmF0ZWRJdGVtcyhkb2dCb3hBcnJheSwgZG9nc0JveCwgZWxlbWVudHNPblBhZ2UsIGN1cnJlbnRQYWdlKTtcclxuXHRcdFx0ZGlzcGxheVBhZ2luYXRpb24oZG9nQm94QXJyYXksIHBhZ2luYXRpb25FbERvZ3MsIGVsZW1lbnRzT25QYWdlKTtcclxuXHJcblx0XHRcdGV4cGFuZHNNb3JlLmZvckVhY2goKGJ0bikgPT4ge1xyXG5cdFx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV4cGFuZCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChjYXRzQm94KSB7XHJcblx0XHRcdGRpc3BsYXlQYWdpbmF0ZWRJdGVtcyhjYXRCb3hBcnJheSwgY2F0c0JveCwgZWxlbWVudHNPblBhZ2UsIGN1cnJlbnRQYWdlKTtcclxuXHRcdFx0ZGlzcGxheVBhZ2luYXRpb24oY2F0Qm94QXJyYXksIHBhZ2luYXRpb25FbENhdHMsIGVsZW1lbnRzT25QYWdlKTtcclxuXHJcblx0XHRcdGV4cGFuZHNNb3JlLmZvckVhY2goKGJ0bikgPT4ge1xyXG5cdFx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV4cGFuZCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aWYgKGFuaW1hbHNQYWdlcykge1xyXG5cdFx0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0ZGlzcGxheUFuaW1hbHMoKTtcclxuXHRcdH0pKCk7XHJcblx0fVxyXG59KTtcclxuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuXHQvLyBmb3JtIHZhbGlkYXRpb25cclxuXHRjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QtZm9ybScpO1xyXG5cdGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpO1xyXG5cdGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsJyk7XHJcblx0Y29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlJyk7XHJcblx0Y29uc3QgZm9ybUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWJ0bicpO1xyXG5cclxuXHRpZiAoZm9ybSkge1xyXG5cdFx0W1xyXG5cdFx0XHQnY2xpY2snLFxyXG5cdFx0XHQnb250b3VjaHN0YXJ0JyxcclxuXHRcdFx0J21vdXNlb3ZlcicsXHJcblx0XHRcdCdrZXlkb3duJyxcclxuXHRcdFx0J2tleXByZXNzJyxcclxuXHRcdFx0J3RvdWNoc3RhcnQnLFxyXG5cdFx0XHQndG91Y2htb3ZlJyxcclxuXHRcdF0uZm9yRWFjaChcclxuXHRcdFx0KGV2ZW50KSA9PlxyXG5cdFx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsICgpID0+IHtcclxuXHRcdFx0XHRcdGlmIChjaGVja0lucHV0cygpID09PSBmYWxzZSkge1xyXG5cdFx0XHRcdFx0XHRmb3JtQnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGZvcm1CdG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblxyXG5cdFx0ZnVuY3Rpb24gY2hlY2tJbnB1dHMoKSB7XHJcblx0XHRcdGNvbnN0IG5hbWVWYWx1ZSA9IG5hbWUudmFsdWUudHJpbSgpO1xyXG5cdFx0XHRjb25zdCBlbWFpbFZhbHVlID0gZW1haWwudmFsdWUudHJpbSgpO1xyXG5cdFx0XHRjb25zdCBtZXNzYWdlVmFsdWUgPSBtZXNzYWdlLnZhbHVlLnRyaW0oKTtcclxuXHJcblx0XHRcdGlmIChuYW1lVmFsdWUgPT09ICcnKSB7XHJcblx0XHRcdFx0c2V0RXJyb3JGb3IobmFtZSwgJ1BsZWFzZSBlbnRlciB5b3VyIGZ1bGwgbmFtZScpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldFN1Y2Nlc3NGb3IobmFtZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChlbWFpbFZhbHVlID09PSAnJykge1xyXG5cdFx0XHRcdHNldEVycm9yRm9yKGVtYWlsLCAnUGxlYXNlIGVudGVyIHlvdXIgZW1haWwgYWRkcmVzcycpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKCFlbWFpbElzVmFsaWQoZW1haWxWYWx1ZSkpIHtcclxuXHRcdFx0XHRzZXRFcnJvckZvcihlbWFpbCwgJ0VtYWlsIGlzIG5vdCB2YWxpZCcpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldFN1Y2Nlc3NGb3IoZW1haWwpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAobWVzc2FnZVZhbHVlID09PSAnJykge1xyXG5cdFx0XHRcdHNldEVycm9yRm9yKG1lc3NhZ2UsICdQbGVhc2UgZW50ZXIgeW91ciBtZXNzYWdlJyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0U3VjY2Vzc0ZvcihtZXNzYWdlKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKFxyXG5cdFx0XHRcdG5hbWVWYWx1ZSA9PT0gJycgfHxcclxuXHRcdFx0XHRlbWFpbFZhbHVlID09PSAnJyB8fFxyXG5cdFx0XHRcdG1lc3NhZ2VWYWx1ZSA9PT0gJycgfHxcclxuXHRcdFx0XHQhZW1haWxJc1ZhbGlkKGVtYWlsVmFsdWUpXHJcblx0XHRcdCkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHNldEVycm9yRm9yKGlucHV0LCBtZXNzYWdlKSB7XHJcblx0XHRcdGNvbnN0IGZvcm0gPSBpbnB1dC5wYXJlbnRFbGVtZW50O1xyXG5cdFx0XHRjb25zdCBzbWFsbCA9IGZvcm0ucXVlcnlTZWxlY3Rvcignc21hbGwnKTtcclxuXHJcblx0XHRcdHNtYWxsLmlubmVyVGV4dCA9IG1lc3NhZ2U7XHJcblx0XHRcdGZvcm0uY2xhc3NOYW1lID0gJ2Zvcm1fX2dyb3VwIGVycm9yJztcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBzZXRTdWNjZXNzRm9yKGlucHV0KSB7XHJcblx0XHRcdGNvbnN0IGZvcm0gPSBpbnB1dC5wYXJlbnRFbGVtZW50O1xyXG5cdFx0XHRmb3JtLmNsYXNzTmFtZSA9ICdmb3JtX19ncm91cCBzdWNjZXNzJztcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBlbWFpbElzVmFsaWQoZW1haWwpIHtcclxuXHRcdFx0Y29uc3QgcmUgPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLy50ZXN0KFxyXG5cdFx0XHRcdGVtYWlsXHJcblx0XHRcdCk7XHJcblxyXG5cdFx0XHRyZXR1cm4gcmU7XHJcblx0XHR9XHJcblx0fVxyXG59KTtcclxuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoZSkgPT4ge1xuXHRcdGNvbnN0IHByZWxvYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlbG9hZCcpO1xuXG5cdFx0cHJlbG9hZC5jbGFzc0xpc3QuYWRkKCdwcmVsb2FkLWZpbmlzaGVkJyk7XG5cdH0pO1xuXG5cdGNvbnN0IGJ0blNjcm9sbFRvVG9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0blNjcm9sbFRvVG9wJyk7XG5cdGJ0blNjcm9sbFRvVG9wLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHR3aW5kb3cuc2Nyb2xsVG8oe1xuXHRcdFx0dG9wOiAwLFxuXHRcdFx0bGVmdDogMCxcblx0XHRcdGJlaGF2aW9yOiAnc21vb3RoJyxcblx0XHR9KTtcblx0fSk7XG59KTtcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3QgbmF2Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdi1jb250YWluZXInKTtcclxuXHRjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtYnRuJyk7XHJcblx0Y29uc3QgbmF2TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYtbGlzdCcpO1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKGUpID0+IHtcclxuXHRcdGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID4gMCkge1xyXG5cdFx0XHRuYXZDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc3RpY2t5Jyk7XHJcblx0XHRcdGJ0blNjcm9sbFRvVG9wLnN0eWxlLm9wYWNpdHkgPSAxO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bmF2Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3N0aWNreScpO1xyXG5cdFx0XHRidG5TY3JvbGxUb1RvcC5zdHlsZS5vcGFjaXR5ID0gMDtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0bWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0XHRtZW51QnRuLmNsYXNzTGlzdC50b2dnbGUoJ2NsaWNrZWQnKTtcclxuXHRcdG5hdkNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdvdmVybGF5Jyk7XHJcblx0XHRuYXZMaXN0LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcclxuXHR9KTtcclxufSk7XHJcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcblx0Ly8gY2Fyb3VzZWxcclxuXHRjb25zdCBjYXJvdXNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJvdXNlbCcpO1xyXG5cdGNvbnN0IHByZXZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldicpO1xyXG5cdGNvbnN0IG5leHRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dCcpO1xyXG5cdGNvbnN0IGNhcm91c2VsVXJsID0gJy4vanMvY2Fyb3VzZWwuanNvbic7XHJcblxyXG5cdGxldCBmaXJzdFNsaWRlO1xyXG5cdGxldCBsYXN0U2xpZGU7XHJcblxyXG5cdGZ1bmN0aW9uIGdldFNsaWRlc0RhdGEoKSB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRmZXRjaChjYXJvdXNlbFVybClcclxuXHRcdFx0XHQudGhlbigocmVzcCkgPT4gcmVzcC5qc29uKCkpXHJcblx0XHRcdFx0LnRoZW4oKGRhdGEpID0+IHJlc29sdmUoZGF0YSkpXHJcblx0XHRcdFx0LmNhdGNoKChlcnIpID0+IHJlamVjdChlcnIpKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgZnVuY3Rpb24gZGlzcGxheUNhcm91c2VsKCkge1xyXG5cdFx0Y29uc3QgZGF0YUxpc3QgPSBhd2FpdCBnZXRTbGlkZXNEYXRhKCk7XHJcblx0XHRjb25zdCBzbGlkZXNBcnJheSA9IGRhdGFMaXN0LnNsaWRlcztcclxuXHJcblx0XHRzbGlkZXNBcnJheS5mb3JFYWNoKChzbGlkZSwgc2xpZGVOdW1iZXIpID0+IHtcclxuXHRcdFx0bmV3U2xpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdFx0bmV3U2xpZGUuY2xhc3NMaXN0LmFkZCgnY2Fyb3VzZWxfX3NsaWRlJyk7XHJcblxyXG5cdFx0XHRuZXdTbGlkZS5pbm5lckhUTUwgPSBgXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjYXJvdXNlbF9faW1hZ2UtY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCIke3NsaWRlLmltYWdlfVwiIGFsdD1cInNsaWRlLWltZ1wiIC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2Fyb3VzZWxfX2NvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aDEgY2xhc3M9XCJjYXJvdXNlbF9fdGl0bGVcIj4ke3NsaWRlLnRpdGxlfTwvaDE+XHJcblx0XHRcdFx0XHRcdFx0PHAgY2xhc3M9XCJjYXJvdXNlbF9fZGVzY1wiPiR7c2xpZGUuY29udGVudH08L3A+XHJcblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImhlYWRlcl9fbmF2LWRvbmF0ZS1idG4gYnV0dG9uXCI+XHJcblx0XHRcdFx0XHRcdFx0XHREdWdtZSB6YSBuZcWhdG9cclxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdGA7XHJcblxyXG5cdFx0XHRjYXJvdXNlbC5hcHBlbmRDaGlsZChuZXdTbGlkZSk7XHJcblxyXG5cdFx0XHRpZiAoc2xpZGVOdW1iZXIgPT09IDApIHtcclxuXHRcdFx0XHRmaXJzdFNsaWRlID0gbmV3U2xpZGU7XHJcblx0XHRcdFx0bmV3U2xpZGUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblx0XHRcdH0gZWxzZSBpZiAoc2xpZGVOdW1iZXIgKyAxID09PSBkYXRhTGlzdC5zbGlkZXMubGVuZ3RoKSB7XHJcblx0XHRcdFx0bGFzdFNsaWRlID0gbmV3U2xpZGU7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdG5leHRTbGlkZSgpO1xyXG5cdFx0cHJldmlvdXNTbGlkZSgpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gbmV4dFNsaWRlKCkge1xyXG5cdFx0Y29uc3QgbmV4dEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0Jyk7XHJcblxyXG5cdFx0bmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0XHRcdGNvbnN0IGFjdGl2ZVNsaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19zbGlkZS5hY3RpdmUnKTtcclxuXHJcblx0XHRcdGxldCBuZXh0U2libGluZyA9IGFjdGl2ZVNsaWRlLm5leHRFbGVtZW50U2libGluZztcclxuXHJcblx0XHRcdGlmIChuZXh0U2libGluZyA9PSBudWxsKSB7XHJcblx0XHRcdFx0bmV4dFNpYmxpbmcgPSBhY3RpdmVTbGlkZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKG5leHRTaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucygnY2Fyb3VzZWxfX3NsaWRlJykpIHtcclxuXHRcdFx0XHRhY3RpdmVTbGlkZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdFx0XHRuZXh0U2libGluZy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBwcmV2aW91c1NsaWRlKCkge1xyXG5cdFx0Y29uc3QgcHJldkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2Jyk7XHJcblxyXG5cdFx0cHJldkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0XHRcdGNvbnN0IGFjdGl2ZVNsaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19zbGlkZS5hY3RpdmUnKTtcclxuXHJcblx0XHRcdGxldCBuZXh0U2libGluZyA9IGFjdGl2ZVNsaWRlLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XHJcblxyXG5cdFx0XHRpZiAobmV4dFNpYmxpbmcgPT0gbnVsbCkge1xyXG5cdFx0XHRcdG5leHRTaWJsaW5nID0gYWN0aXZlU2xpZGU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChuZXh0U2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ2Nhcm91c2VsX19zbGlkZScpKSB7XHJcblx0XHRcdFx0YWN0aXZlU2xpZGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0XHRcdFx0bmV4dFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0aWYgKGNhcm91c2VsICE9PSBudWxsKSB7XHJcblx0XHQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRkaXNwbGF5Q2Fyb3VzZWwoKTtcclxuXHRcdH0pKCk7XHJcblx0fVxyXG59KTtcclxuIiwid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcblx0Ly8gdGFic1xyXG5cdGNvbnN0IHRhYkxpc3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiY2NvcmRpb25fX2xpc3QtYnRuJyk7XHJcblx0Y29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJjY29yZGlvbl9fY29udGFpbmVyJyk7XHJcblx0Y29uc3QgdGFiY2NvcmRpb25MaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYmNjb3JkaW9uLWxpc3QnKTtcclxuXHRjb25zdCB0YWJzQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJjY29yZGlvbl9fdGFiLWlubmVyJyk7XHJcblx0Y29uc3QgdGFiY2NvcmRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiY2NvcmRpb24nKTtcclxuXHJcblx0ZnVuY3Rpb24gYWN0aXZhdGVUYWJzKCkge1xyXG5cdFx0dGFiTGlzdEJ0bi5mb3JFYWNoKCh0YWIpID0+IHtcclxuXHRcdFx0dGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHRcdFx0XHRjb25zdCB0YWJOYXYgPSB0YWIucGFyZW50RWxlbWVudDtcclxuXHRcdFx0XHRjb25zdCB0YWJzQ29udGFpbmVyID0gdGFiTmF2LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuXHRcdFx0XHRjb25zdCB0YWJOdW1iZXIgPSB0YWIuZGF0YXNldC5mb3JUYWI7XHJcblx0XHRcdFx0Y29uc3QgdGFiVG9BY3RpdmF0ZSA9IHRhYnNDb250YWluZXIucXVlcnlTZWxlY3RvcihcclxuXHRcdFx0XHRcdGAudGFiY2NvcmRpb25fX3RhYltkYXRhLXRhYj1cIiR7dGFiTnVtYmVyfVwiXWBcclxuXHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHR0YWJOYXYucXVlcnlTZWxlY3RvckFsbCgnLnRhYmNjb3JkaW9uX19saXN0LWJ0bicpLmZvckVhY2goKGJ0bikgPT4ge1xyXG5cdFx0XHRcdFx0YnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0dGFic0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcudGFiY2NvcmRpb25fX3RhYicpLmZvckVhY2goKHRhYikgPT4ge1xyXG5cdFx0XHRcdFx0dGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0dGFiLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcclxuXHRcdFx0XHR0YWJUb0FjdGl2YXRlLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcclxuXHJcblx0XHRcdFx0aWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDYwMCkge1xyXG5cdFx0XHRcdFx0dGFic0NvbnRlbnQuZm9yRWFjaCgodGFicykgPT4ge1xyXG5cdFx0XHRcdFx0XHR0YWJzLnN0eWxlLm1heEhlaWdodCA9IHRhYnMuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRpZiAodGFiY2NvcmRpb25MaXN0KSB7XHJcblx0XHRcdHRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XHJcblx0XHRcdFx0dGFiLnF1ZXJ5U2VsZWN0b3IoJy50YWJjY29yZGlvbl9fbGlzdCAudGFiY2NvcmRpb25fX2J0bicpLmNsaWNrKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qIFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIChlKSA9PiB7XHJcblx0XHRcdGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSA2MDApIHtcclxuXHRcdFx0XHRhY3RpdmF0ZVRhYnMoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7ICovXHJcblx0fVxyXG5cclxuXHQvLy8vLyBhY2NvcmRpb25cclxuXHRjb25zdCBhY2NvcmRpb25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uX19saXN0LWJ0bicpO1xyXG5cclxuXHRmdW5jdGlvbiBhY3RpdmF0ZUFjY29yZGlvbigpIHtcclxuXHRcdGFjY29yZGlvbkJ0bi5mb3JFYWNoKChidG4pID0+IHtcclxuXHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRcdC8vIGNoZWNrIGZvciBvcGVuIGFjY29yZGlvblxyXG5cdFx0XHRcdGNvbnN0IGFjY29yZGlvbkJ0bk9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHRcdFx0Jy5hY2NvcmRpb25fX2xpc3QtYnRuLm9wZW4nXHJcblx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0aWYgKGFjY29yZGlvbkJ0bk9wZW4gJiYgYWNjb3JkaW9uQnRuT3BlbiAhPT0gYnRuKSB7XHJcblx0XHRcdFx0XHQvLyBpZiB0aGVyZSBpcyBvcGVuIHRoZW4gcmVtb3ZlIG9wZW4gY2xhc3MgYW5kIHNldCBtYXhoZWlnaHQgdG8gMFxyXG5cdFx0XHRcdFx0YWNjb3JkaW9uQnRuT3Blbi5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XHJcblx0XHRcdFx0XHRhY2NvcmRpb25CdG5PcGVuLm5leHRFbGVtZW50U2libGluZy5zdHlsZS5tYXhIZWlnaHQgPSAwO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gc2V0IG9wZW4gY2xhc3MgdG8gZXZlcnkgY2xpY2tlZCBhY2NvcmRpb24gYnRuXHJcblx0XHRcdFx0YnRuLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcclxuXHRcdFx0XHRjb25zdCBhY2NvcmRpb25Cb2R5ID0gYnRuLm5leHRFbGVtZW50U2libGluZztcclxuXHJcblx0XHRcdFx0aWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKSkge1xyXG5cdFx0XHRcdFx0YWNjb3JkaW9uQm9keS5zdHlsZS5tYXhIZWlnaHQgPSBhY2NvcmRpb25Cb2R5LnNjcm9sbEhlaWdodCArICdweCc7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGFjY29yZGlvbkJvZHkuc3R5bGUubWF4SGVpZ2h0ID0gMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIChlKSA9PiB7XHJcblx0XHRcdGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDYwMCkge1xyXG5cdFx0XHRcdHRhYnNDb250ZW50LmZvckVhY2goKHRhYnMpID0+IHtcclxuXHRcdFx0XHRcdHRhYnMuc3R5bGUubWF4SGVpZ2h0ID0gMDtcclxuXHRcdFx0XHRcdGlmICh0YWJzLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuJykpIHtcclxuXHRcdFx0XHRcdFx0dGFicy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRpZiAodGFiY2NvcmRpb24pIHtcclxuXHRcdGFjdGl2YXRlVGFicygpO1xyXG5cdFx0YWN0aXZhdGVBY2NvcmRpb24oKTtcclxuXHR9XHJcbn0pO1xyXG4iXSwicHJlRXhpc3RpbmdDb21tZW50IjoiLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk4dmQyVmljR0ZqYXk5aWIyOTBjM1J5WVhBaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwycHpMMkZrYjNCMFEyOXVkR1Z1ZEZOM2FYUmphR1Z5TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDNOeVl5OXFjeTltWlhSamFFRnVhVzFoYkhORVlYUmhMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5cWN5OW1iM0p0Vm1Gc2FXUmhhWFJ2Ymk1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5emNtTXZhbk12YldGcGJpNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXpjbU12YW5NdmJtRjJMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5cWN5OXpiR2xrWlhJdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmMzSmpMMnB6TDNSaFltTmpiM0prYVc5dUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdVVUZCUVR0UlFVTkJPenRSUVVWQk8xRkJRMEU3TzFGQlJVRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdPMUZCUlVFN1VVRkRRVHM3VVVGRlFUdFJRVU5CT3p0UlFVVkJPMUZCUTBFN1VVRkRRVHM3TzFGQlIwRTdVVUZEUVRzN1VVRkZRVHRSUVVOQk96dFJRVVZCTzFGQlEwRTdVVUZEUVR0UlFVTkJMREJEUVVFd1F5eG5RMEZCWjBNN1VVRkRNVVU3VVVGRFFUczdVVUZGUVR0UlFVTkJPMUZCUTBFN1VVRkRRU3gzUkVGQmQwUXNhMEpCUVd0Q08xRkJRekZGTzFGQlEwRXNhVVJCUVdsRUxHTkJRV003VVVGREwwUTdPMUZCUlVFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQkxIbERRVUY1UXl4cFEwRkJhVU03VVVGRE1VVXNaMGhCUVdkSUxHMUNRVUZ0UWl4RlFVRkZPMUZCUTNKSk8xRkJRMEU3TzFGQlJVRTdVVUZEUVR0UlFVTkJPMUZCUTBFc01rSkJRVEpDTERCQ1FVRXdRaXhGUVVGRk8xRkJRM1pFTEdsRFFVRnBReXhsUVVGbE8xRkJRMmhFTzFGQlEwRTdVVUZEUVRzN1VVRkZRVHRSUVVOQkxITkVRVUZ6UkN3clJFRkJLMFE3TzFGQlJYSklPMUZCUTBFN096dFJRVWRCTzFGQlEwRTdPenM3T3pzN096czdPenRCUTJ4R1FUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRXNSMEZCUnp0QlFVTklMRVZCUVVVN08wRkJSVVk3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUVzT0VSQlFUaEVMRTlCUVU4N1FVRkRja1U3UVVGRFFTeG5RMEZCWjBNc1QwRkJUenRCUVVOMlF6dEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRU5CUVVNN096czdPenM3T3pzN096dEJRMnBEUkR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4NVEwRkJlVU1zVlVGQlZTeFRRVUZUTEZOQlFWTTdRVUZEY2tVN1FVRkRRU3hMUVVGTExFVkJRVVU3UVVGRFVEdEJRVU5CTzBGQlEwRXNNRVJCUVRCRUxGTkJRVk03UVVGRGJrVTdRVUZEUVR0QlFVTkJPMEZCUTBFc2FVSkJRV2xDTEVWQlFVVXNWMEZCVnp0QlFVTTVRanRCUVVOQkxEQkRRVUV3UXp0QlFVTXhRenRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3huUlVGQlowVXNXVUZCV1R0QlFVTTFSVHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRzFDUVVGdFFqdEJRVU51UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYlVKQlFXMUNPMEZCUTI1Q08wRkJRMEU3UVVGRFFUdEJRVU5CTERCRlFVRXdSU3hOUVVGTk8wRkJRMmhHTzBGQlEwRTdRVUZEUVR0QlFVTkJMQ3REUVVFclF5eHJRMEZCYTBNN1FVRkRha1k3UVVGRFFUdEJRVU5CTzBGQlEwRXNLME5CUVN0RExHdERRVUZyUXp0QlFVTnFSanRCUVVOQk8wRkJRMEU3UVVGRFFTd3JRMEZCSzBNc2EwTkJRV3RETzBGQlEycEdPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHRRa0ZCYlVJN1FVRkRia0k3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRzFDUVVGdFFqdEJRVU51UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTEVsQlFVazdPMEZCUlVvN1FVRkRRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxIbERRVUY1UXl4VlFVRlZMRk5CUVZNc1UwRkJVenRCUVVOeVJUdEJRVU5CTEV0QlFVc3NSVUZCUlR0QlFVTlFPMEZCUTBFN1FVRkRRU3d3UkVGQk1FUXNVMEZCVXp0QlFVTnVSVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHBRa0ZCYVVJc1JVRkJSU3hYUVVGWE8wRkJRemxDTzBGQlEwRXNNRU5CUVRCRE8wRkJRekZETzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdkRlFVRm5SU3haUVVGWk8wRkJRelZGTzBGQlEwRXNTMEZCU3p0QlFVTk1PMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYlVKQlFXMUNPMEZCUTI1Q08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4dFFrRkJiVUk3UVVGRGJrSTdRVUZEUVR0QlFVTkJPMEZCUTBFc01FVkJRVEJGTEZOQlFWTTdRVUZEYmtZN1FVRkRRVHRCUVVOQk8wRkJRMEVzSzBOQlFTdERMR3REUVVGclF6dEJRVU5xUmp0QlFVTkJPMEZCUTBFN1FVRkRRU3dyUTBGQkswTXNhME5CUVd0RE8wRkJRMnBHTzBGQlEwRTdRVUZEUVR0QlFVTkJMQ3REUVVFclF5eHJRMEZCYTBNN1FVRkRha1k3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRzFDUVVGdFFqdEJRVU51UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYlVKQlFXMUNPMEZCUTI1Q08wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFc1NVRkJTVHRCUVVOS0xFZEJRVWM3TzBGQlJVZzdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJMRWxCUVVrN1FVRkRTanM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQkxHdENRVUZyUWl4dFFrRkJiVUk3UVVGRGNrTTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEpRVUZKT3p0QlFVVktPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWxCUVVrN08wRkJSVW83UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1RVRkJUVHRCUVVOT08wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeE5RVUZOTzBGQlEwNDdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFMUJRVTA3UVVGRFRqdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNUVUZCVFR0QlFVTk9PMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzU1VGQlNUczdRVUZGU2p0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1NVRkJTVHRCUVVOS08wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1NVRkJTVHRCUVVOS08wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEVsQlFVazdRVUZEU2pzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRWxCUVVrN1FVRkRTanRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHRCUVVOQkxFTkJRVU03T3pzN096czdPenM3T3p0QlF5OXNRa1E3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRTFCUVUwN1FVRkRUanRCUVVOQk8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRWxCUVVrN1FVRkRTanRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4SlFVRkpPMEZCUTBvN1FVRkRRU3hKUVVGSk8wRkJRMG83UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc1NVRkJTVHRCUVVOS08wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEpRVUZKTzBGQlEwbzdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3hwUTBGQmFVTXNlVUpCUVhsQ0xEWkNRVUUyUWl4SlFVRkpMRkZCUVZFc1NVRkJTU3hSUVVGUkxFbEJRVWtzVVVGQlVTeEpRVUZKTEdkRFFVRm5ReXhIUVVGSE8wRkJRMnhMTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUTBGQlF6czdPenM3T3pzN096czdPMEZEZGtaRU8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMRVZCUVVVN08wRkJSVVk3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSUxFVkJRVVU3UVVGRFJpeERRVUZET3pzN096czdPenM3T3pzN1FVTm1SRHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEdEJRVU5CTzBGQlEwRTdRVUZEUVN4RlFVRkZPenRCUVVWR08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSVUZCUlR0QlFVTkdMRU5CUVVNN096czdPenM3T3pzN096dEJRM0JDUkR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNiVUpCUVcxQ0xGbEJRVms3UVVGREwwSTdRVUZEUVR0QlFVTkJMSEZEUVVGeFF5eFpRVUZaTzBGQlEycEVMRzFEUVVGdFF5eGpRVUZqTzBGQlEycEVPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzU1VGQlNUdEJRVU5LTzBGQlEwRTdRVUZEUVN4SFFVRkhPenRCUVVWSU8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFc1EwRkJRenM3T3pzN096czdPenM3TzBGRGFrZEVPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNiME5CUVc5RExGVkJRVlU3UVVGRE9VTTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxFdEJRVXM3TzBGQlJVdzdRVUZEUVR0QlFVTkJMRXRCUVVzN08wRkJSVXc3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hOUVVGTk8wRkJRMDQ3UVVGRFFTeEpRVUZKTzBGQlEwb3NSMEZCUnpzN1FVRkZTRHRCUVVOQk8wRkJRMEU3UVVGRFFTeEpRVUZKTzBGQlEwbzdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITEVWQlFVVTdRVUZEVERzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHc3UVVGRFFUdEJRVU5CTEVsQlFVazdRVUZEU2l4SFFVRkhPenRCUVVWSU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1MwRkJTenRCUVVOTU8wRkJRMEVzUjBGQlJ6dEJRVU5JT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUTBGQlF5SXNJbVpwYkdVaU9pSTBZMlUzWkRSa1lXRmhNbVZtTVdVd016SXpOeTVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpQmNkQzh2SUZSb1pTQnRiMlIxYkdVZ1kyRmphR1ZjYmlCY2RIWmhjaUJwYm5OMFlXeHNaV1JOYjJSMWJHVnpJRDBnZTMwN1hHNWNiaUJjZEM4dklGUm9aU0J5WlhGMWFYSmxJR1oxYm1OMGFXOXVYRzRnWEhSbWRXNWpkR2x2YmlCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktHMXZaSFZzWlVsa0tTQjdYRzVjYmlCY2RGeDBMeThnUTJobFkyc2dhV1lnYlc5a2RXeGxJR2x6SUdsdUlHTmhZMmhsWEc0Z1hIUmNkR2xtS0dsdWMzUmhiR3hsWkUxdlpIVnNaWE5iYlc5a2RXeGxTV1JkS1NCN1hHNGdYSFJjZEZ4MGNtVjBkWEp1SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE5iYlc5a2RXeGxTV1JkTG1WNGNHOXlkSE03WEc0Z1hIUmNkSDFjYmlCY2RGeDBMeThnUTNKbFlYUmxJR0VnYm1WM0lHMXZaSFZzWlNBb1lXNWtJSEIxZENCcGRDQnBiblJ2SUhSb1pTQmpZV05vWlNsY2JpQmNkRngwZG1GeUlHMXZaSFZzWlNBOUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsU1dSZElEMGdlMXh1SUZ4MFhIUmNkR2s2SUcxdlpIVnNaVWxrTEZ4dUlGeDBYSFJjZEd3NklHWmhiSE5sTEZ4dUlGeDBYSFJjZEdWNGNHOXlkSE02SUh0OVhHNGdYSFJjZEgwN1hHNWNiaUJjZEZ4MEx5OGdSWGhsWTNWMFpTQjBhR1VnYlc5a2RXeGxJR1oxYm1OMGFXOXVYRzRnWEhSY2RHMXZaSFZzWlhOYmJXOWtkV3hsU1dSZExtTmhiR3dvYlc5a2RXeGxMbVY0Y0c5eWRITXNJRzF2WkhWc1pTd2diVzlrZFd4bExtVjRjRzl5ZEhNc0lGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHBPMXh1WEc0Z1hIUmNkQzh2SUVac1lXY2dkR2hsSUcxdlpIVnNaU0JoY3lCc2IyRmtaV1JjYmlCY2RGeDBiVzlrZFd4bExtd2dQU0IwY25WbE8xeHVYRzRnWEhSY2RDOHZJRkpsZEhWeWJpQjBhR1VnWlhod2IzSjBjeUJ2WmlCMGFHVWdiVzlrZFd4bFhHNGdYSFJjZEhKbGRIVnliaUJ0YjJSMWJHVXVaWGh3YjNKMGN6dGNiaUJjZEgxY2JseHVYRzRnWEhRdkx5QmxlSEJ2YzJVZ2RHaGxJRzF2WkhWc1pYTWdiMkpxWldOMElDaGZYM2RsWW5CaFkydGZiVzlrZFd4bGMxOWZLVnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXRJRDBnYlc5a2RXeGxjenRjYmx4dUlGeDBMeThnWlhod2IzTmxJSFJvWlNCdGIyUjFiR1VnWTJGamFHVmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVl5QTlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTTdYRzVjYmlCY2RDOHZJR1JsWm1sdVpTQm5aWFIwWlhJZ1puVnVZM1JwYjI0Z1ptOXlJR2hoY20xdmJua2daWGh3YjNKMGMxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1a0lEMGdablZ1WTNScGIyNG9aWGh3YjNKMGN5d2dibUZ0WlN3Z1oyVjBkR1Z5S1NCN1hHNGdYSFJjZEdsbUtDRmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbThvWlhod2IzSjBjeXdnYm1GdFpTa3BJSHRjYmlCY2RGeDBYSFJQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb1pYaHdiM0owY3l3Z2JtRnRaU3dnZXlCbGJuVnRaWEpoWW14bE9pQjBjblZsTENCblpYUTZJR2RsZEhSbGNpQjlLVHRjYmlCY2RGeDBmVnh1SUZ4MGZUdGNibHh1SUZ4MEx5OGdaR1ZtYVc1bElGOWZaWE5OYjJSMWJHVWdiMjRnWlhod2IzSjBjMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXlJRDBnWm5WdVkzUnBiMjRvWlhod2IzSjBjeWtnZTF4dUlGeDBYSFJwWmloMGVYQmxiMllnVTNsdFltOXNJQ0U5UFNBbmRXNWtaV1pwYm1Wa0p5QW1KaUJUZVcxaWIyd3VkRzlUZEhKcGJtZFVZV2NwSUh0Y2JpQmNkRngwWEhSUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29aWGh3YjNKMGN5d2dVM2x0WW05c0xuUnZVM1J5YVc1blZHRm5MQ0I3SUhaaGJIVmxPaUFuVFc5a2RXeGxKeUI5S1R0Y2JpQmNkRngwZlZ4dUlGeDBYSFJQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb1pYaHdiM0owY3l3Z0oxOWZaWE5OYjJSMWJHVW5MQ0I3SUhaaGJIVmxPaUIwY25WbElIMHBPMXh1SUZ4MGZUdGNibHh1SUZ4MEx5OGdZM0psWVhSbElHRWdabUZyWlNCdVlXMWxjM0JoWTJVZ2IySnFaV04wWEc0Z1hIUXZMeUJ0YjJSbElDWWdNVG9nZG1Gc2RXVWdhWE1nWVNCdGIyUjFiR1VnYVdRc0lISmxjWFZwY21VZ2FYUmNiaUJjZEM4dklHMXZaR1VnSmlBeU9pQnRaWEpuWlNCaGJHd2djSEp2Y0dWeWRHbGxjeUJ2WmlCMllXeDFaU0JwYm5SdklIUm9aU0J1YzF4dUlGeDBMeThnYlc5a1pTQW1JRFE2SUhKbGRIVnliaUIyWVd4MVpTQjNhR1Z1SUdGc2NtVmhaSGtnYm5NZ2IySnFaV04wWEc0Z1hIUXZMeUJ0YjJSbElDWWdPSHd4T2lCaVpXaGhkbVVnYkdsclpTQnlaWEYxYVhKbFhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5RZ1BTQm1kVzVqZEdsdmJpaDJZV3gxWlN3Z2JXOWtaU2tnZTF4dUlGeDBYSFJwWmlodGIyUmxJQ1lnTVNrZ2RtRnNkV1VnUFNCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktIWmhiSFZsS1R0Y2JpQmNkRngwYVdZb2JXOWtaU0FtSURncElISmxkSFZ5YmlCMllXeDFaVHRjYmlCY2RGeDBhV1lvS0cxdlpHVWdKaUEwS1NBbUppQjBlWEJsYjJZZ2RtRnNkV1VnUFQwOUlDZHZZbXBsWTNRbklDWW1JSFpoYkhWbElDWW1JSFpoYkhWbExsOWZaWE5OYjJSMWJHVXBJSEpsZEhWeWJpQjJZV3gxWlR0Y2JpQmNkRngwZG1GeUlHNXpJRDBnVDJKcVpXTjBMbU55WldGMFpTaHVkV3hzS1R0Y2JpQmNkRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1eUtHNXpLVHRjYmlCY2RGeDBUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0c1ekxDQW5aR1ZtWVhWc2RDY3NJSHNnWlc1MWJXVnlZV0pzWlRvZ2RISjFaU3dnZG1Gc2RXVTZJSFpoYkhWbElIMHBPMXh1SUZ4MFhIUnBaaWh0YjJSbElDWWdNaUFtSmlCMGVYQmxiMllnZG1Gc2RXVWdJVDBnSjNOMGNtbHVaeWNwSUdadmNpaDJZWElnYTJWNUlHbHVJSFpoYkhWbEtTQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbVFvYm5Nc0lHdGxlU3dnWm5WdVkzUnBiMjRvYTJWNUtTQjdJSEpsZEhWeWJpQjJZV3gxWlZ0clpYbGRPeUI5TG1KcGJtUW9iblZzYkN3Z2EyVjVLU2s3WEc0Z1hIUmNkSEpsZEhWeWJpQnVjenRjYmlCY2RIMDdYRzVjYmlCY2RDOHZJR2RsZEVSbFptRjFiSFJGZUhCdmNuUWdablZ1WTNScGIyNGdabTl5SUdOdmJYQmhkR2xpYVd4cGRIa2dkMmwwYUNCdWIyNHRhR0Z5Ylc5dWVTQnRiMlIxYkdWelhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG00Z1BTQm1kVzVqZEdsdmJpaHRiMlIxYkdVcElIdGNiaUJjZEZ4MGRtRnlJR2RsZEhSbGNpQTlJRzF2WkhWc1pTQW1KaUJ0YjJSMWJHVXVYMTlsYzAxdlpIVnNaU0EvWEc0Z1hIUmNkRngwWm5WdVkzUnBiMjRnWjJWMFJHVm1ZWFZzZENncElIc2djbVYwZFhKdUlHMXZaSFZzWlZzblpHVm1ZWFZzZENkZE95QjlJRHBjYmlCY2RGeDBYSFJtZFc1amRHbHZiaUJuWlhSTmIyUjFiR1ZGZUhCdmNuUnpLQ2tnZXlCeVpYUjFjbTRnYlc5a2RXeGxPeUI5TzF4dUlGeDBYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1Rb1oyVjBkR1Z5TENBbllTY3NJR2RsZEhSbGNpazdYRzRnWEhSY2RISmxkSFZ5YmlCblpYUjBaWEk3WEc0Z1hIUjlPMXh1WEc0Z1hIUXZMeUJQWW1wbFkzUXVjSEp2ZEc5MGVYQmxMbWhoYzA5M2JsQnliM0JsY25SNUxtTmhiR3hjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVieUE5SUdaMWJtTjBhVzl1S0c5aWFtVmpkQ3dnY0hKdmNHVnlkSGtwSUhzZ2NtVjBkWEp1SUU5aWFtVmpkQzV3Y205MGIzUjVjR1V1YUdGelQzZHVVSEp2Y0dWeWRIa3VZMkZzYkNodlltcGxZM1FzSUhCeWIzQmxjblI1S1RzZ2ZUdGNibHh1SUZ4MEx5OGdYMTkzWldKd1lXTnJYM0IxWW14cFkxOXdZWFJvWDE5Y2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y0NBOUlGd2lYQ0k3WEc1Y2JseHVJRngwTHk4Z1RHOWhaQ0JsYm5SeWVTQnRiMlIxYkdVZ1lXNWtJSEpsZEhWeWJpQmxlSEJ2Y25SelhHNGdYSFJ5WlhSMWNtNGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWhmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5NZ1BTQXdLVHRjYmlJc0ltUnZZM1Z0Wlc1MExtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0owUlBUVU52Ym5SbGJuUk1iMkZrWldRbkxDQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseDBhR2x6ZEc5eWVTNXlaWEJzWVdObFUzUmhkR1VvYm5Wc2JDd2diblZzYkN3Z0p5QW5LVHRjY2x4dVhIUmpiMjV6ZENCMFlXSlRkMmwwWTJobGNuTWdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eVFXeHNLQ2RiWkdGMFlTMXpkMmwwWTJobGNsMG5LVHRjY2x4dVhISmNibHgwZEdGaVUzZHBkR05vWlhKekxtWnZja1ZoWTJnb0tIUmhZbE4zYVhSamFDa2dQVDRnZTF4eVhHNWNkRngwWTI5dWMzUWdkR0ZpVTNkcGRHTm9aWElnUFNCMFlXSlRkMmwwWTJnN1hISmNibHgwWEhSamIyNXpkQ0J3WVdkbFNXUWdQU0IwWVdKVGQybDBZMmhsY2k1a1lYUmhjMlYwTG5SaFlqdGNjbHh1WEhKY2JseDBYSFIwWVdKVGQybDBZMmhsY2k1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkamJHbGpheWNzSUNobEtTQTlQaUI3WEhKY2JseDBYSFJjZEdSdlkzVnRaVzUwWEhKY2JseDBYSFJjZEZ4MExuRjFaWEo1VTJWc1pXTjBiM0lvSnk1aFpHOXdkRjlmYkdsemRDMXBkR1Z0TG1GamRHbDJaU2NwWEhKY2JseDBYSFJjZEZ4MExtTnNZWE56VEdsemRDNXlaVzF2ZG1Vb0oyRmpkR2wyWlNjcE8xeHlYRzVjY2x4dVhIUmNkRngwZEdGaVUzZHBkR05vWlhJdWNHRnlaVzUwUld4bGJXVnVkQzV3WVhKbGJuUkZiR1Z0Wlc1MExtTnNZWE56VEdsemRDNWhaR1FvSjJGamRHbDJaU2NwTzF4eVhHNWNjbHh1WEhSY2RGeDBjM2RwZEdOb1VHRm5aU2h3WVdkbFNXUXBPMXh5WEc1Y2RGeDBmU2s3WEhKY2JseDBmU2s3WEhKY2JseHlYRzVjZEdaMWJtTjBhVzl1SUhOM2FYUmphRkJoWjJVb2NHRm5aVWxrS1NCN1hISmNibHgwWEhSamIyNXpkQ0JqZFhKeVpXNTBVR0ZuWlNBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvSnk1d1lXZGxMbUZqZEdsMlpTY3BPMXh5WEc1Y2RGeDBZMjl1YzNRZ1kzVnljbVZ1ZEZCaFoyVklaV0ZrWlhJZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0NjdWNHRm5aUzFvWldGa1pYSXVZV04wYVhabEp5azdYSEpjYmx4eVhHNWNkRngwWTNWeWNtVnVkRkJoWjJVdVkyeGhjM05NYVhOMExuSmxiVzkyWlNnbllXTjBhWFpsSnlrN1hISmNibHgwWEhSamRYSnlaVzUwVUdGblpVaGxZV1JsY2k1amJHRnpjMHhwYzNRdWNtVnRiM1psS0NkaFkzUnBkbVVuS1R0Y2NseHVYSEpjYmx4MFhIUmpiMjV6ZENCdVpYaDBVR0ZuWlNBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvWUM1d1lXZGxXMlJoZEdFdGNHRm5aVDFjSWlSN2NHRm5aVWxrZlZ3aVhXQXBPMXh5WEc1Y2RGeDBZMjl1YzNRZ2JtVjRkRkJoWjJWSVpXRmtaWElnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLRnh5WEc1Y2RGeDBYSFJnTG5CaFoyVXRhR1ZoWkdWeVcyUmhkR0V0YUdWaFpHVnlQVndpSkh0d1lXZGxTV1I5WENKZFlGeHlYRzVjZEZ4MEtUdGNjbHh1WEhSY2RHNWxlSFJRWVdkbExtTnNZWE56VEdsemRDNWhaR1FvSjJGamRHbDJaU2NwTzF4eVhHNWNkRngwYm1WNGRGQmhaMlZJWldGa1pYSXVZMnhoYzNOTWFYTjBMbUZrWkNnbllXTjBhWFpsSnlrN1hISmNibHgwZlZ4eVhHNTlLVHRjY2x4dUlpd2laRzlqZFcxbGJuUXVZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25SRTlOUTI5dWRHVnVkRXh2WVdSbFpDY3NJR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVYSFJqYjI1emRDQmhibWx0WVd4elZYSnNJRDBnSnk0dUwycHpMMkZ1YVcxaGJITXVhbk52YmljN1hISmNibHgwWTI5dWMzUWdZVzVwYldGc2MxQmhaMlZ6SUQwZ1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvSjJGdWFXMWhiSE10Y0dGblpYTW5LVHRjY2x4dVhIUmpiMjV6ZENCa2IyZHpRbTk0SUQwZ1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvSjJSdlozTXRZbTk0SnlrN1hISmNibHgwWTI5dWMzUWdZMkYwYzBKdmVDQTlJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJDZVVsa0tDZGpZWFJ6TFdKdmVDY3BPMXh5WEc1Y2NseHVYSFJtZFc1amRHbHZiaUJuWlhSQmJtbHRZV3h6UkdGMFlTZ3BJSHRjY2x4dVhIUmNkSEpsZEhWeWJpQnVaWGNnVUhKdmJXbHpaU2dvY21WemIyeDJaU3dnY21WcVpXTjBLU0E5UGlCN1hISmNibHgwWEhSY2RHWmxkR05vS0dGdWFXMWhiSE5WY213cFhISmNibHgwWEhSY2RGeDBMblJvWlc0b0tISmxjM0FwSUQwK0lISmxjM0F1YW5OdmJpZ3BLVnh5WEc1Y2RGeDBYSFJjZEM1MGFHVnVLQ2hrWVhSaEtTQTlQaUJ5WlhOdmJIWmxLR1JoZEdFcEtWeHlYRzVjZEZ4MFhIUmNkQzVqWVhSamFDZ29aWEp5S1NBOVBpQnlaV3BsWTNRb1pYSnlLU2s3WEhKY2JseDBYSFI5S1R0Y2NseHVYSFI5WEhKY2JseHlYRzVjZEdOdmJuTjBJR1J2WjA1MWJXSmxjaUE5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2RrYjJkT2RXMWlaWEluS1R0Y2NseHVYSFJqYjI1emRDQmpZWFJPZFcxaVpYSWdQU0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDZ25ZMkYwVG5WdFltVnlKeWs3WEhKY2JseHlYRzVjZEdGemVXNWpJR1oxYm1OMGFXOXVJR1JwYzNCc1lYbEJibWx0WVd4T2RXMWlaWEp6S0NrZ2UxeHlYRzVjZEZ4MFkyOXVjM1FnWkdGMFlVeHBjM1FnUFNCaGQyRnBkQ0JuWlhSQmJtbHRZV3h6UkdGMFlTZ3BPMXh5WEc1Y2RGeDBZMjl1YzNRZ1lXNXBiV0ZzYzBGeWNtRjVJRDBnWkdGMFlVeHBjM1F1WVc1cGJXRnNjenRjY2x4dVhISmNibHgwWEhSc1pYUWdaRzluYzBGeWNtRjVUblZ0WW1WeUlEMGdZVzVwYldGc2MwRnljbUY1V3pCZExtUnZaM011YkdWdVozUm9PMXh5WEc1Y2RGeDBiR1YwSUdOaGRITkJjbkpoZVU1MWJXSmxjaUE5SUdGdWFXMWhiSE5CY25KaGVWc3dYUzVqWVhSekxteGxibWQwYUR0Y2NseHVYSEpjYmx4MFhIUmtiMmRPZFcxaVpYSXVhVzV1WlhKVVpYaDBJRDBnWkc5bmMwRnljbUY1VG5WdFltVnlPMXh5WEc1Y2RGeDBZMkYwVG5WdFltVnlMbWx1Ym1WeVZHVjRkQ0E5SUdOaGRITkJjbkpoZVU1MWJXSmxjanRjY2x4dVhIUjlYSEpjYmx4eVhHNWNkR2xtSUNnb1pHOW5UblZ0WW1WeUxDQmpZWFJPZFcxaVpYSXBLU0I3WEhKY2JseDBYSFFvWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjZEZ4MFhIUmthWE53YkdGNVFXNXBiV0ZzVG5WdFltVnljeWdwTzF4eVhHNWNkRngwZlNrb0tUdGNjbHh1WEhSOVhISmNibHh5WEc1Y2RHRnplVzVqSUdaMWJtTjBhVzl1SUdScGMzQnNZWGxCYm1sdFlXeHpLQ2tnZTF4eVhHNWNkRngwWTI5dWMzUWdaR0YwWVV4cGMzUWdQU0JoZDJGcGRDQm5aWFJCYm1sdFlXeHpSR0YwWVNncE8xeHlYRzVjZEZ4MFkyOXVjM1FnWVc1cGJXRnNjMEZ5Y21GNUlEMGdaR0YwWVV4cGMzUXVZVzVwYldGc2N6dGNjbHh1WEhKY2JseDBYSFJoYm1sdFlXeHpRWEp5WVhrdVptOXlSV0ZqYUNnb1lXNXBiV0ZzS1NBOVBpQjdYSEpjYmx4MFhIUmNkR1J2WjNOQmNuSmhlU0E5SUdGdWFXMWhiQzVrYjJkek8xeHlYRzVjZEZ4MFhIUmpZWFJ6UVhKeVlYa2dQU0JoYm1sdFlXd3VZMkYwY3p0Y2NseHVYSEpjYmx4MFhIUmNkR1J2WjNOQmNuSmhlUzVtYjNKRllXTm9LQ2hrYjJjcElEMCtJSHRjY2x4dVhIUmNkRngwWEhSa2IyZENiM2dnUFNCa2IyTjFiV1Z1ZEM1amNtVmhkR1ZGYkdWdFpXNTBLQ2RrYVhZbktUdGNjbHh1WEhSY2RGeDBYSFJrYjJkQ2IzZ3VZMnhoYzNOTWFYTjBMbUZrWkNnbmNHRm5aVjlmWW05NEp5azdYSEpjYmx4eVhHNWNkRngwWEhSY2RHTnZibk4wSUdSdloxbGxZWEp6SUQwZ1pHOW5MbUpwY25Sb08xeHlYRzVjY2x4dVhIUmNkRngwWEhSamIyNXpkQ0J0YVd4cGMyVmpjMEpsZEhkbFpXNUVUMEpoYm1ReE9UY3dJRDBnUkdGMFpTNXdZWEp6WlNoa2IyZFpaV0Z5Y3lrN1hISmNibHgwWEhSY2RGeDBZMjl1YzNRZ2JXbHNhWE5sWTNOQ1pYUjNaV1Z1VGs5WFlXNWtNVGszTUNBOUlFUmhkR1V1Ym05M0tDazdYSEpjYmx4MFhIUmNkRngwWTI5dWMzUWdZV2RsU1c1TmFXeHBjMlZqY3lBOVhISmNibHgwWEhSY2RGeDBYSFJ0YVd4cGMyVmpjMEpsZEhkbFpXNU9UMWRoYm1ReE9UY3dJQzBnYldsc2FYTmxZM05DWlhSM1pXVnVSRTlDWVc1a01UazNNRHRjY2x4dVhISmNibHgwWEhSY2RGeDBZMjl1YzNRZ2JXbHNhWE5sWTNNZ1BTQmhaMlZKYmsxcGJHbHpaV056TzF4eVhHNWNkRngwWEhSY2RHTnZibk4wSUhObFkzTWdQU0F4TURBd08xeHlYRzVjZEZ4MFhIUmNkR052Ym5OMElHMXBibk1nUFNCelpXTnpJQ29nTmpBN1hISmNibHgwWEhSY2RGeDBZMjl1YzNRZ2FHOTFjaUE5SUcxcGJuTWdLaUEyTUR0Y2NseHVYSFJjZEZ4MFhIUmpiMjV6ZENCa1lYa2dQU0JvYjNWeUlDb2dNalE3WEhKY2JseDBYSFJjZEZ4MFkyOXVjM1FnZVdWaGNpQTlJR1JoZVNBcUlETTJOVHRjY2x4dVhISmNibHgwWEhSY2RGeDBiR1YwSUhsbFlYSnpJRDBnVFdGMGFDNXliM1Z1WkNodGFXeHBjMlZqY3lBdklIbGxZWElwTzF4eVhHNWNjbHh1WEhSY2RGeDBYSFJrYjJkQ2IzZ3VhVzV1WlhKSVZFMU1JRDBnWUZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOFpHbDJJR05zWVhOelBWd2ljR0ZuWlY5ZlltOTRMWFJ2Y0Z3aVBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdsdFp5QnpjbU05WENJdUpIdGtiMmN1YVcxaFoyVjlYQ0lnWVd4MFBWd2lKSHRrYjJjdWJtRnRaWDBnSkh0Y2NseHVYSFJjZEZ4MFhIUmNkR1J2Wnk1emNHVmphV1Z6WEhKY2JseDBYSFJjZEZ4MGZWd2lmUzgrWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dlpHbDJQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4WkdsMklHTnNZWE56UFZ3aWNHRm5aVjlmWW05NExXSnZkSFJ2YlZ3aVBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdneklHTnNZWE56UFZ3aWNHRm5aVjlmWW05NExYUnBkR3hsWENJK0pIdGtiMmN1Ym1GdFpYMDhMMmd6UGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR1JwZGlCamJHRnpjejFjSW5CaFoyVmZYMkp2ZUMxamIyNTBaVzUwWENJK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHUnBkaUJqYkdGemN6MWNJbVY0Y0dGdVpFMXZjbVZEYjI1MFpXNTBYQ0lnYVdROVhDSnphRzkzVFc5eVpTMGtlMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWkc5bkxuTndaV05wWlhOY2NseHVYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSOUpIdGtiMmN1Ym5WdFltVnlmVndpUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThjQ0JqYkdGemN6MWNJbkJoWjJWZlgySnZlQzEwWlhoMFhDSStYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWtlMlJ2Wnk1a1pYTmpmVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOEwzQStYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzlrYVhZK1hISmNiaUFnSUNCY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOFpHbDJJR05zWVhOelBWd2laWGh3WVc1a1RXOXlaVWh2YkdSbGNsd2lQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOFluVjBkRzl1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JsZUhCaGJtUXRiVzl5WlZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWkdGMFlTMW9hV1JsZEdWNGREMWNJaTR1TGxKbFlXUWdiR1Z6YzF3aVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCa1lYUmhMWE5vYjNkMFpYaDBQVndpTGk0dVVtVmhaQ0J0YjNKbFhDSmNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHUmhkR0V0ZEdGeVoyVjBQVndpYzJodmQwMXZjbVV0Skh0a2IyY3VjM0JsWTJsbGMzMGtlMXh5WEc1Y2RGeDBYSFJjZEZ4MFpHOW5MbTUxYldKbGNseHlYRzVjZEZ4MFhIUmNkSDFjSWx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTJ4aGMzTTlYQ0ppZFhSMGIyNGdjMmh2ZDAxdmNtVmNJbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdUxpNVNaV0ZrSUcxdmNtVmNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5aWRYUjBiMjQrWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5a2FYWStYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOEwyUnBkajVjY2x4dUlDQWdJRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BIVnNJR05zWVhOelBWd2ljR0ZuWlY5ZlltOTRMV2xqYjI1elhDSStYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR3hwSUdOc1lYTnpQVndpY0dGblpWOWZZbTk0TFdsamIyNWNJajVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHa2dZMnhoYzNNOVhDSm1ZWE1nWm1FdGQyVnBaMmgwWENJK1BDOXBYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUQ0OGMzQmhiaUJqYkdGemN6MWNJbkJoWjJWZlgySnZlQzFwWTI5dUxTMTBaWGgwWENJK0pIdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSa2IyY3VkMlZwWjJoMFhISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkSDBnYTJjOEwzTndZVzQrWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5c2FUNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThiR2tnWTJ4aGMzTTlYQ0p3WVdkbFgxOWliM2d0YVdOdmJsd2lQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGFTQmpiR0Z6Y3oxY0ltWmhjeUJtWVMxaGNuSnZkM010WVd4MExYWmNJajQ4TDJsY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQanh6Y0dGdUlHTnNZWE56UFZ3aWNHRm5aVjlmWW05NExXbGpiMjR0TFhSbGVIUmNJajRrZTF4eVhHNWNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkR1J2Wnk1b1pXbG5hSFJjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MGZXTnRQQzl6Y0dGdVBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEd3ZiR2srWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEd4cElHTnNZWE56UFZ3aWNHRm5aVjlmWW05NExXbGpiMjVjSWo1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR2tnWTJ4aGMzTTlYQ0ptWVhNZ1ptRXRZMkZzWlc1a1lYSXRZMmhsWTJ0Y0lqNDhMMmxjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BqeHpjR0Z1SUdOc1lYTnpQVndpY0dGblpWOWZZbTk0TFdsamIyNHRMWFJsZUhSY0lqNGtlM2xsWVhKemZTQjVjaTQ4TDNOd1lXNCtYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzlzYVQ1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGJHa2dZMnhoYzNNOVhDSndZV2RsWDE5aWIzZ3RhV052Ymx3aVBseHlYRzVjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFE4YVNCamJHRnpjejFjSW1aaGN5Qm1ZUzF3WVd4bGRIUmxYQ0krUEM5cFhISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRDQ4YzNCaGJpQmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMXBZMjl1TFMxMFpYaDBYQ0krSkh0a2IyY3VZMjlzYjNKYk1GMGdQeUJrYjJjdVkyOXNiM0piTUYwZ09pQW5MU2Q5UEM5emNHRnVQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2YkdrK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHeHBJR05zWVhOelBWd2ljR0ZuWlY5ZlltOTRMV2xqYjI1Y0lqNWNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwUEdrZ1kyeGhjM005WENKbVlYTWdabUV0Y0dGc1pYUjBaVndpUGp3dmFWeHlYRzVjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFErUEhOd1lXNGdZMnhoYzNNOVhDSndZV2RsWDE5aWIzZ3RhV052YmkwdGRHVjRkRndpUGlSN1pHOW5MbU52Ykc5eVd6RmRJRDhnWkc5bkxtTnZiRzl5V3pGZElEb2dKeTBuZlR3dmMzQmhiajVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4TDJ4cFBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHNhU0JqYkdGemN6MWNJbkJoWjJWZlgySnZlQzFwWTI5dVhDSStYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBYSFJjZER4cElHTnNZWE56UFZ3aVptRnpJR1poTFhCaGJHVjBkR1ZjSWo0OEwybGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwUGp4emNHRnVJR05zWVhOelBWd2ljR0ZuWlY5ZlltOTRMV2xqYjI0dExYUmxlSFJjSWo0a2UyUnZaeTVqYjJ4dmNsc3lYU0EvSUdSdlp5NWpiMnh2Y2xzeVhTQTZJQ2N0SjMwOEwzTndZVzQrWEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwWEhROEwyeHBQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhzYVNCamJHRnpjejFjSW5CaFoyVmZYMkp2ZUMxcFkyOXVYQ0krWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHBJR05zWVhOelBWd2labUZ6SUdaaExYQmhkMXdpUGp3dmFWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0ErUEhOd1lXNGdZMnhoYzNNOVhDSndZV2RsWDE5aWIzZ3RhV052YmkwdGRHVjRkRndpUGlSN1hISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWkc5bkxtTnZZWFJjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MGZUd3ZjM0JoYmo1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOEwyeHBQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhzYVNCamJHRnpjejFjSW5CaFoyVmZYMkp2ZUMxcFkyOXVYQ0krWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHBJR05zWVhOelBWd2labUZ6SUdaaExYWmxiblZ6TFcxaGNuTmNJajQ4TDJsY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQanh6Y0dGdUlHTnNZWE56UFZ3aWNHRm5aVjlmWW05NExXbGpiMjR0TFhSbGVIUmNJajRrZTF4eVhHNWNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkR1J2Wnk1blpXNWtaWEpjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MGZUd3ZjM0JoYmo1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOEwyeHBQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOTFiRDVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5a2FYWStYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JnTzF4eVhHNWNjbHh1WEhSY2RGeDBYSFJrYjJkelFtOTRMbUZ3Y0dWdVpFTm9hV3hrS0dSdlowSnZlQ2s3WEhKY2JseDBYSFJjZEgwcE8xeHlYRzVjY2x4dVhIUmNkRngwWTJGMGMwRnljbUY1TG1admNrVmhZMmdvS0dOaGRDa2dQVDRnZTF4eVhHNWNkRngwWEhSY2RHTmhkRUp2ZUNBOUlHUnZZM1Z0Wlc1MExtTnlaV0YwWlVWc1pXMWxiblFvSjJScGRpY3BPMXh5WEc1Y2RGeDBYSFJjZEdOaGRFSnZlQzVqYkdGemMweHBjM1F1WVdSa0tDZHdZV2RsWDE5aWIzZ25LVHRjY2x4dVhISmNibHgwWEhSY2RGeDBZMjl1YzNRZ1kyRjBXV1ZoY25NZ1BTQmpZWFF1WW1seWRHZzdYSEpjYmx4eVhHNWNkRngwWEhSY2RHTnZibk4wSUcxcGJHbHpaV056UW1WMGQyVmxia1JQUW1GdVpERTVOekJqWVhRZ1BTQkVZWFJsTG5CaGNuTmxLR05oZEZsbFlYSnpLVHRjY2x4dVhIUmNkRngwWEhSamIyNXpkQ0J0YVd4cGMyVmpjMEpsZEhkbFpXNU9UMWRoYm1ReE9UY3dJRDBnUkdGMFpTNXViM2NvS1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwWTI5dWMzUWdZV2RsU1c1TmFXeHBjMlZqYzBOaGRDQTlYSEpjYmx4MFhIUmNkRngwWEhSdGFXeHBjMlZqYzBKbGRIZGxaVzVPVDFkaGJtUXhPVGN3SUMwZ2JXbHNhWE5sWTNOQ1pYUjNaV1Z1UkU5Q1lXNWtNVGszTUdOaGREdGNjbHh1WEhKY2JseDBYSFJjZEZ4MFkyOXVjM1FnYldsc2FYTmxZM05EWVhRZ1BTQmhaMlZKYmsxcGJHbHpaV056UTJGME8xeHlYRzVjZEZ4MFhIUmNkR052Ym5OMElITmxZM01nUFNBeE1EQXdPMXh5WEc1Y2RGeDBYSFJjZEdOdmJuTjBJRzFwYm5NZ1BTQnpaV056SUNvZ05qQTdYSEpjYmx4MFhIUmNkRngwWTI5dWMzUWdhRzkxY2lBOUlHMXBibk1nS2lBMk1EdGNjbHh1WEhSY2RGeDBYSFJqYjI1emRDQmtZWGtnUFNCb2IzVnlJQ29nTWpRN1hISmNibHgwWEhSY2RGeDBZMjl1YzNRZ2VXVmhjaUE5SUdSaGVTQXFJRE0yTlR0Y2NseHVYSEpjYmx4MFhIUmNkRngwYkdWMElIbGxZWEp6UTJGMElEMGdUV0YwYUM1eWIzVnVaQ2h0YVd4cGMyVmpjME5oZENBdklIbGxZWElwTzF4eVhHNWNjbHh1WEhSY2RGeDBYSFJqWVhSQ2IzZ3VhVzV1WlhKSVZFMU1JRDBnWUZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOFpHbDJJR05zWVhOelBWd2ljR0ZuWlY5ZlltOTRMWFJ2Y0Z3aVBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdsdFp5QnpjbU05WENJdUpIdGpZWFF1YVcxaFoyVjlYQ0lnWVd4MFBWd2lKSHRqWVhRdWJtRnRaWDBnSkh0Y2NseHVYSFJjZEZ4MFhIUmNkR05oZEM1emNHVmphV1Z6WEhKY2JseDBYSFJjZEZ4MGZWd2lmUzgrWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dlpHbDJQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4WkdsMklHTnNZWE56UFZ3aWNHRm5aVjlmWW05NExXSnZkSFJ2YlZ3aVBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdneklHTnNZWE56UFZ3aWNHRm5aVjlmWW05NExYUnBkR3hsWENJK0pIdGpZWFF1Ym1GdFpYMDhMMmd6UGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR1JwZGlCamJHRnpjejFjSW5CaFoyVmZYMkp2ZUMxamIyNTBaVzUwWENJK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHUnBkaUJqYkdGemN6MWNJbVY0Y0dGdVpFMXZjbVZEYjI1MFpXNTBYQ0lnYVdROVhDSnphRzkzVFc5eVpTMGtlMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWTJGMExuTndaV05wWlhOY2NseHVYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSOUpIdGpZWFF1Ym5WdFltVnlmVndpUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThjQ0JqYkdGemN6MWNJbkJoWjJWZlgySnZlQzEwWlhoMFhDSStYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWtlMk5oZEM1a1pYTmpmVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOEwzQStYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzlrYVhZK1hISmNiaUFnSUNCY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOFpHbDJJR05zWVhOelBWd2laWGh3WVc1a1RXOXlaVWh2YkdSbGNsd2lQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOFluVjBkRzl1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JsZUhCaGJtUXRiVzl5WlZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWkdGMFlTMW9hV1JsZEdWNGREMWNJaTR1TGxKbFlXUWdiR1Z6YzF3aVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCa1lYUmhMWE5vYjNkMFpYaDBQVndpTGk0dVVtVmhaQ0J0YjNKbFhDSmNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHUmhkR0V0ZEdGeVoyVjBQVndpYzJodmQwMXZjbVV0Skh0allYUXVjM0JsWTJsbGMzMGtlMXh5WEc1Y2RGeDBYSFJjZEZ4MFkyRjBMbTUxYldKbGNseHlYRzVjZEZ4MFhIUmNkSDFjSWx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTJ4aGMzTTlYQ0ppZFhSMGIyNGdjMmh2ZDAxdmNtVmNJbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdUxpNVNaV0ZrSUcxdmNtVmNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5aWRYUjBiMjQrWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5a2FYWStYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOEwyUnBkajVjY2x4dUlDQWdJRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BIVnNJR05zWVhOelBWd2ljR0ZuWlY5ZlltOTRMV2xqYjI1elhDSStYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR3hwSUdOc1lYTnpQVndpY0dGblpWOWZZbTk0TFdsamIyNWNJajVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHa2dZMnhoYzNNOVhDSm1ZWE1nWm1FdGQyVnBaMmgwWENJK1BDOXBYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUQ0OGMzQmhiaUJqYkdGemN6MWNJbkJoWjJWZlgySnZlQzFwWTI5dUxTMTBaWGgwWENJK0pIdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSallYUXVkMlZwWjJoMFhISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkSDBnYTJjOEwzTndZVzQrWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5c2FUNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThiR2tnWTJ4aGMzTTlYQ0p3WVdkbFgxOWliM2d0YVdOdmJsd2lQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGFTQmpiR0Z6Y3oxY0ltWmhjeUJtWVMxaGNuSnZkM010WVd4MExYWmNJajQ4TDJsY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQanh6Y0dGdUlHTnNZWE56UFZ3aWNHRm5aVjlmWW05NExXbGpiMjR0TFhSbGVIUmNJajRrZTF4eVhHNWNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkR05oZEM1b1pXbG5hSFJjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MGZXTnRQQzl6Y0dGdVBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEd3ZiR2srWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEd4cElHTnNZWE56UFZ3aWNHRm5aVjlmWW05NExXbGpiMjVjSWo1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR2tnWTJ4aGMzTTlYQ0ptWVhNZ1ptRXRZMkZzWlc1a1lYSXRZMmhsWTJ0Y0lqNDhMMmxjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BqeHpjR0Z1SUdOc1lYTnpQVndpY0dGblpWOWZZbTk0TFdsamIyNHRMWFJsZUhSY0lqNGtlM2xsWVhKelEyRjBmU0I1Y2k0OEwzTndZVzQrWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5c2FUNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThiR2tnWTJ4aGMzTTlYQ0p3WVdkbFgxOWliM2d0YVdOdmJsd2lQbHh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhROGFTQmpiR0Z6Y3oxY0ltWmhjeUJtWVMxd1lXeGxkSFJsWENJK1BDOXBYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEQ0OGMzQmhiaUJqYkdGemN6MWNJbkJoWjJWZlgySnZlQzFwWTI5dUxTMTBaWGgwWENJK0pIdGpZWFF1WTI5c2IzSmJNRjBnUHlCallYUXVZMjlzYjNKYk1GMGdPaUFuTFNkOVBDOXpjR0Z1UGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dmJHaytYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR3hwSUdOc1lYTnpQVndpY0dGblpWOWZZbTk0TFdsamIyNWNJajVjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFBHa2dZMnhoYzNNOVhDSm1ZWE1nWm1FdGNHRnNaWFIwWlZ3aVBqd3ZhVnh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhRK1BITndZVzRnWTJ4aGMzTTlYQ0p3WVdkbFgxOWliM2d0YVdOdmJpMHRkR1Y0ZEZ3aVBpUjdZMkYwTG1OdmJHOXlXekZkSUQ4Z1kyRjBMbU52Ykc5eVd6RmRJRG9nSnkwbmZUd3ZjM0JoYmo1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOEwyeHBQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhzYVNCamJHRnpjejFjSW5CaFoyVmZYMkp2ZUMxcFkyOXVYQ0krWEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwWEhSY2REeHBJR05zWVhOelBWd2labUZ6SUdaaExYQmhiR1YwZEdWY0lqNDhMMmxjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFBqeHpjR0Z1SUdOc1lYTnpQVndpY0dGblpWOWZZbTk0TFdsamIyNHRMWFJsZUhSY0lqNGtlMk5oZEM1amIyeHZjbHN5WFNBL0lHTmhkQzVqYjJ4dmNsc3lYU0E2SUNjdEozMDhMM053WVc0K1hISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUThMMnhwUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4c2FTQmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMXBZMjl1WENJK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhwSUdOc1lYTnpQVndpWm1GeklHWmhMWEJoZDF3aVBqd3ZhVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBK1BITndZVzRnWTJ4aGMzTTlYQ0p3WVdkbFgxOWliM2d0YVdOdmJpMHRkR1Y0ZEZ3aVBpUjdYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFkyRjBMbU52WVhSY2NseHVYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBmVHd2YzNCaGJqNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThMMnhwUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4c2FTQmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMXBZMjl1WENJK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhwSUdOc1lYTnpQVndpWm1GeklHWmhMWFpsYm5WekxXMWhjbk5jSWo0OEwybGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUGp4emNHRnVJR05zWVhOelBWd2ljR0ZuWlY5ZlltOTRMV2xqYjI0dExYUmxlSFJjSWo0a2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEdOaGRDNW5aVzVrWlhKY2NseHVYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBmVHd2YzNCaGJqNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThMMnhwUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzkxYkQ1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOWthWFkrWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCZ08xeHlYRzVjY2x4dVhIUmNkRngwWEhSallYUnpRbTk0TG1Gd2NHVnVaRU5vYVd4a0tHTmhkRUp2ZUNrN1hISmNibHgwWEhSY2RIMHBPMXh5WEc1Y2RGeDBmU2s3WEhKY2JseHlYRzVjZEZ4MGJHVjBJR1J2WjBKdmVFRnljbUY1SUQwZ1d5NHVMbVJ2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNKQmJHd29KeU5rYjJkekxXSnZlQ0F1Y0dGblpWOWZZbTk0SnlsZE8xeHlYRzVjZEZ4MGJHVjBJR05oZEVKdmVFRnljbUY1SUQwZ1d5NHVMbVJ2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNKQmJHd29KeU5qWVhSekxXSnZlQ0F1Y0dGblpWOWZZbTk0SnlsZE8xeHlYRzVjZEZ4MGJHVjBJR04xY25KbGJuUlFZV2RsSUQwZ01UdGNjbHh1WEhSY2RHeGxkQ0JsYkdWdFpXNTBjMDl1VUdGblpTQTlJRFE3WEhKY2JseHlYRzVjZEZ4MFkyOXVjM1FnY0dGbmFXNWhkR2x2YmtWc1JHOW5jeUE5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2RrYjJkekxYQmhaMmx1WVhScGIyNG5LVHRjY2x4dVhIUmNkR052Ym5OMElIQmhaMmx1WVhScGIyNUZiRU5oZEhNZ1BTQmtiMk4xYldWdWRDNW5aWFJGYkdWdFpXNTBRbmxKWkNnblkyRjBjeTF3WVdkcGJtRjBhVzl1SnlrN1hISmNibHh5WEc1Y2RGeDBablZ1WTNScGIyNGdaR2x6Y0d4aGVWQmhaMmx1WVhSbFpFbDBaVzF6S0dsMFpXMXpMQ0IzY21Gd2NHVnlMQ0JwZEdWdGMxQmxjbEJoWjJVc0lIQmhaMlVwSUh0Y2NseHVYSFJjZEZ4MGQzSmhjSEJsY2k1cGJtNWxja2hVVFV3Z1BTQW5KenRjY2x4dVhIUmNkRngwY0dGblpTMHRPMXh5WEc1Y2NseHVYSFJjZEZ4MGJHVjBJSE4wWVhKMElEMGdhWFJsYlhOUVpYSlFZV2RsSUNvZ2NHRm5aVHRjY2x4dVhIUmNkRngwYkdWMElHVnVaQ0E5SUhOMFlYSjBJQ3NnYVhSbGJYTlFaWEpRWVdkbE8xeHlYRzVjZEZ4MFhIUnNaWFFnY0dGbmFXNWhkR1ZrU1hSbGJYTWdQU0JwZEdWdGN5NXpiR2xqWlNoemRHRnlkQ3dnWlc1a0tUdGNjbHh1WEhKY2JseDBYSFJjZEhCaFoybHVZWFJsWkVsMFpXMXpMbVp2Y2tWaFkyZ29LR2wwWlcwcElEMCtJSHRjY2x4dVhIUmNkRngwWEhSc1pYUWdhWFJsYlVWc0lEMGdaRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENnblpHbDJKeWs3WEhKY2JseDBYSFJjZEZ4MGFYUmxiVVZzTG1Oc1lYTnpUR2x6ZEM1aFpHUW9KM0JoWjJWZlgySnZlQ2NwTzF4eVhHNWNjbHh1WEhSY2RGeDBYSFJwZEdWdFJXd2dQU0JwZEdWdE8xeHlYRzVjY2x4dVhIUmNkRngwWEhSM2NtRndjR1Z5TG1Gd2NHVnVaRU5vYVd4a0tHbDBaVzFGYkNrN1hISmNibHgwWEhSY2RIMHBPMXh5WEc1Y2RGeDBmVnh5WEc1Y2NseHVYSFJjZEdaMWJtTjBhVzl1SUdScGMzQnNZWGxRWVdkcGJtRjBhVzl1S0dsMFpXMXpMQ0IzY21Gd2NHVnlMQ0JwZEdWdGMxQmxjbEJoWjJVcElIdGNjbHh1WEhSY2RGeDBkM0poY0hCbGNpNXBibTVsY2toVVRVd2dQU0FuSnp0Y2NseHVYSEpjYmx4MFhIUmNkR3hsZENCd1lXZGxRMjkxYm5RZ1BTQk5ZWFJvTG1ObGFXd29hWFJsYlhNdWJHVnVaM1JvSUM4Z2FYUmxiWE5RWlhKUVlXZGxLVHRjY2x4dVhISmNibHgwWEhSY2RHWnZjaUFvYkdWMElHa2dQU0F4T3lCcElEd2djR0ZuWlVOdmRXNTBJQ3NnTVRzZ2FTc3JLU0I3WEhKY2JseDBYSFJjZEZ4MGJHVjBJR0owYmlBOUlIQmhaMmx1WVhScGIyNUNkWFIwYjI0b2FTd2djR0ZuWlVOdmRXNTBLVHRjY2x4dVhISmNibHgwWEhSY2RGeDBZblJ1TG5OMGVXeGxMbmRwWkhSb0lEMGdKekFuTzF4eVhHNWNkRngwWEhSY2RHSjBiaTV6ZEhsc1pTNXZkbVZ5Wm14dmR5QTlJQ2RvYVdSa1pXNG5PMXh5WEc1Y2RGeDBYSFJjZEdKMGJpNXpkSGxzWlM1dFlYSm5hVzRnUFNBbk1DYzdYSEpjYmx4eVhHNWNkRngwWEhSY2RIZHlZWEJ3WlhJdVlYQndaVzVrUTJocGJHUW9ZblJ1S1R0Y2NseHVYSFJjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkRngwYkdWMElHNWxlSFJDZEc0Z1BTQnVaWGgwVUdGblpTaHdZV2RsUTI5MWJuUXBPMXh5WEc1Y2RGeDBYSFIzY21Gd2NHVnlMbUZ3Y0dWdVpFTm9hV3hrS0c1bGVIUkNkRzRwTzF4eVhHNWNjbHh1WEhSY2RGeDBiR1YwSUhCeVpYWkNkRzRnUFNCd2NtVjJVR0ZuWlNod1lXZGxRMjkxYm5RcE8xeHlYRzVjZEZ4MFhIUjNjbUZ3Y0dWeUxuQnlaWEJsYm1Rb2NISmxka0owYmlrN1hISmNibHh5WEc1Y2RGeDBYSFJzWlhRZ1kzVnljbVZ1ZEVKMGJrUnZaM01nUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLRnh5WEc1Y2RGeDBYSFJjZENjalpHOW5jeUF1Y0dGbmFXNWhkR2x2YmkxaWRHNHVZV04wYVhabEoxeHlYRzVjZEZ4MFhIUXBPMXh5WEc1Y2RGeDBYSFJzWlhRZ1kzVnljbVZ1ZEVKMGJrTmhkSE1nUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLRnh5WEc1Y2RGeDBYSFJjZENjalkyRjBjeUF1Y0dGbmFXNWhkR2x2YmkxaWRHNHVZV04wYVhabEoxeHlYRzVjZEZ4MFhIUXBPMXh5WEc1Y2NseHVYSFJjZEZ4MGFXWWdLR04xY25KbGJuUkNkRzVFYjJkeklDWW1JR04xY25KbGJuUkNkRzVEWVhSektTQjdYSEpjYmx4MFhIUmNkRngwWTNWeWNtVnVkRUowYmtSdlozTXVZMnhoYzNOTWFYTjBMbUZrWkNnblozSnZkWEFuS1R0Y2NseHVYSFJjZEZ4MFhIUmpkWEp5Wlc1MFFuUnVSRzluY3k1dVpYaDBSV3hsYldWdWRGTnBZbXhwYm1jdVkyeGhjM05NYVhOMExtRmtaQ2duWjNKdmRYQW5LVHRjY2x4dVhIUmNkRngwWEhSamRYSnlaVzUwUW5SdVJHOW5jeTV1WlhoMFJXeGxiV1Z1ZEZOcFlteHBibWN1Ym1WNGRFVnNaVzFsYm5SVGFXSnNhVzVuTG1Oc1lYTnpUR2x6ZEM1aFpHUW9YSEpjYmx4MFhIUmNkRngwWEhRblozSnZkWEFuWEhKY2JseDBYSFJjZEZ4MEtUdGNjbHh1WEhSY2RGeDBYSFJqZFhKeVpXNTBRblJ1Ukc5bmN5NXdjbVYyYVc5MWMwVnNaVzFsYm5SVGFXSnNhVzVuTG1Oc1lYTnpUR2x6ZEM1aFpHUW9KMmR5YjNWd0p5azdYSEpjYmx4eVhHNWNkRngwWEhSY2RHTjFjbkpsYm5SQ2RHNURZWFJ6TG1Oc1lYTnpUR2x6ZEM1aFpHUW9KMmR5YjNWd0p5azdYSEpjYmx4MFhIUmNkRngwWTNWeWNtVnVkRUowYmtOaGRITXVibVY0ZEVWc1pXMWxiblJUYVdKc2FXNW5MbU5zWVhOelRHbHpkQzVoWkdRb0oyZHliM1Z3SnlrN1hISmNibHgwWEhSY2RGeDBZM1Z5Y21WdWRFSjBia05oZEhNdWJtVjRkRVZzWlcxbGJuUlRhV0pzYVc1bkxtNWxlSFJGYkdWdFpXNTBVMmxpYkdsdVp5NWpiR0Z6YzB4cGMzUXVZV1JrS0Z4eVhHNWNkRngwWEhSY2RGeDBKMmR5YjNWd0oxeHlYRzVjZEZ4MFhIUmNkQ2s3WEhKY2JseDBYSFJjZEZ4MFkzVnljbVZ1ZEVKMGJrTmhkSE11Y0hKbGRtbHZkWE5GYkdWdFpXNTBVMmxpYkdsdVp5NWpiR0Z6YzB4cGMzUXVZV1JrS0NkbmNtOTFjQ2NwTzF4eVhHNWNkRngwWEhSOVhISmNibHgwWEhSOVhISmNibHh5WEc1Y2RGeDBablZ1WTNScGIyNGdibVY0ZEZCaFoyVW9jR0ZuWlVOdmRXNTBLU0I3WEhKY2JseDBYSFJjZEd4bGRDQnVaWGgwUW5SdUlEMGdaRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENnblluVjBkRzl1SnlrN1hISmNibHgwWEhSY2RHNWxlSFJDZEc0dVkyeGhjM05NYVhOMExtRmtaQ2duYm1WNGRDY3BPMXh5WEc1Y2RGeDBYSFJ1WlhoMFFuUnVMbWx1Ym1WeVZHVjRkQ0E5SUNjK0p6dGNjbHh1WEhSY2RGeDBibVY0ZEVKMGJpNWpiR0Z6YzB4cGMzUXVZV1JrS0Nkd1lXZHBibUYwYVc5dUxXSjBiaWNwTzF4eVhHNWNjbHh1WEhSY2RGeDBibVY0ZEVKMGJpNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZGpiR2xqYXljc0lDaGxLU0E5UGlCN1hISmNibHgwWEhSY2RGeDBhV1lnS0c1bGVIUkNkRzR1Y0dGeVpXNTBSV3hsYldWdWRDQTlQU0J3WVdkcGJtRjBhVzl1Uld4RWIyZHpLU0I3WEhKY2JseDBYSFJjZEZ4MFhIUmthWE53YkdGNVVHRm5hVzVoZEdWa1NYUmxiWE1vWEhKY2JseDBYSFJjZEZ4MFhIUmNkR1J2WjBKdmVFRnljbUY1TEZ4eVhHNWNkRngwWEhSY2RGeDBYSFJrYjJkelFtOTRMRnh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmxiR1Z0Wlc1MGMwOXVVR0ZuWlN4Y2NseHVYSFJjZEZ4MFhIUmNkRngwWTNWeWNtVnVkRkJoWjJWY2NseHVYSFJjZEZ4MFhIUmNkQ2s3WEhKY2JseHlYRzVjZEZ4MFhIUmNkRngwYkdWMElHRmpkR2wyWlVKMGJrUnZaeUE5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9YSEpjYmx4MFhIUmNkRngwWEhSY2RDY2paRzluY3lBdWNHRm5hVzVoZEdsdmJpMWlkRzR1WVdOMGFYWmxKMXh5WEc1Y2RGeDBYSFJjZEZ4MEtUdGNjbHh1WEhKY2JseDBYSFJjZEZ4MFhIUmhZM1JwZG1WQ2RHNUViMmN1Ym1WNGRFVnNaVzFsYm5SVGFXSnNhVzVuTG1Oc2FXTnJLQ2s3WEhKY2JseHlYRzVjZEZ4MFhIUmNkRngwYVdZZ0tHTjFjbkpsYm5SUVlXZGxJRDA5UFNCd1lXZGxRMjkxYm5RcElIdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MGJtVjRkRUowYmk1emRIbHNaUzV2Y0dGamFYUjVJRDBnSnpBdU5TYzdYSEpjYmx4MFhIUmNkRngwWEhSY2RHNWxlSFJDZEc0dWMzUjViR1V1Y0c5cGJuUmxja1YyWlc1MGN5QTlJQ2R1YjI1bEp6dGNjbHh1WEhSY2RGeDBYSFJjZEgxY2NseHVYSEpjYmx4MFhIUmNkRngwWEhSc1pYUWdjSEpsZGtKMGJpQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5TmtiMmR6SUM1d2NtVjJKeWs3WEhKY2JseHlYRzVjZEZ4MFhIUmNkRngwYVdZZ0tHTjFjbkpsYm5SUVlXZGxJQ0U5UFNBeEtTQjdYSEpjYmx4MFhIUmNkRngwWEhSY2RIQnlaWFpDZEc0dWMzUjViR1V1YjNCaFkybDBlU0E5SUNjeEp6dGNjbHh1WEhSY2RGeDBYSFJjZEZ4MGNISmxka0owYmk1emRIbHNaUzV3YjJsdWRHVnlSWFpsYm5SeklEMGdKMkZzYkNjN1hISmNibHgwWEhSY2RGeDBYSFI5WEhKY2JseHlYRzVjZEZ4MFhIUmNkRngwYVdZZ0tHRmpkR2wyWlVKMGJrUnZaeWtnZTF4eVhHNWNkRngwWEhSY2RGeDBYSFJoWTNScGRtVkNkRzVFYjJjdVkyeGhjM05NYVhOMExtRmtaQ2duWjNKdmRYQW5LVHRjY2x4dVhIUmNkRngwWEhSY2RGeDBZV04wYVhabFFuUnVSRzluTG01bGVIUkZiR1Z0Wlc1MFUybGliR2x1Wnk1amJHRnpjMHhwYzNRdVlXUmtLQ2RuY205MWNDY3BPMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmhZM1JwZG1WQ2RHNUViMmN1Y0hKbGRtbHZkWE5GYkdWdFpXNTBVMmxpYkdsdVp5NWpiR0Z6YzB4cGMzUXVZV1JrS0NkbmNtOTFjQ2NwTzF4eVhHNWNkRngwWEhSY2RGeDBmVnh5WEc1Y2RGeDBYSFJjZEgxY2NseHVYSEpjYmx4MFhIUmNkRngwYVdZZ0tHNWxlSFJDZEc0dWNHRnlaVzUwUld4bGJXVnVkQ0E5UFNCd1lXZHBibUYwYVc5dVJXeERZWFJ6S1NCN1hISmNibHgwWEhSY2RGeDBYSFJrYVhOd2JHRjVVR0ZuYVc1aGRHVmtTWFJsYlhNb1hISmNibHgwWEhSY2RGeDBYSFJjZEdOaGRFSnZlRUZ5Y21GNUxGeHlYRzVjZEZ4MFhIUmNkRngwWEhSallYUnpRbTk0TEZ4eVhHNWNkRngwWEhSY2RGeDBYSFJsYkdWdFpXNTBjMDl1VUdGblpTeGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFkzVnljbVZ1ZEZCaFoyVmNjbHh1WEhSY2RGeDBYSFJjZENrN1hISmNibHh5WEc1Y2RGeDBYSFJjZEZ4MGJHVjBJR0ZqZEdsMlpVSjBia05oZENBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvWEhKY2JseDBYSFJjZEZ4MFhIUmNkQ2NqWTJGMGN5QXVjR0ZuYVc1aGRHbHZiaTFpZEc0dVlXTjBhWFpsSjF4eVhHNWNkRngwWEhSY2RGeDBLVHRjY2x4dVhISmNibHgwWEhSY2RGeDBYSFJoWTNScGRtVkNkRzVEWVhRdWJtVjRkRVZzWlcxbGJuUlRhV0pzYVc1bkxtTnNhV05yS0NrN1hISmNibHh5WEc1Y2RGeDBYSFJjZEZ4MGFXWWdLR04xY25KbGJuUlFZV2RsSUQwOVBTQndZV2RsUTI5MWJuUXBJSHRjY2x4dVhIUmNkRngwWEhSY2RGeDBibVY0ZEVKMGJpNXpkSGxzWlM1dmNHRmphWFI1SUQwZ0p6QXVOU2M3WEhKY2JseDBYSFJjZEZ4MFhIUmNkRzVsZUhSQ2RHNHVjM1I1YkdVdWNHOXBiblJsY2tWMlpXNTBjeUE5SUNkdWIyNWxKenRjY2x4dVhIUmNkRngwWEhSY2RIMWNjbHh1WEhKY2JseDBYSFJjZEZ4MFhIUnNaWFFnY0hKbGRrSjBiaUE5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9KeU5qWVhSeklDNXdjbVYySnlrN1hISmNibHh5WEc1Y2RGeDBYSFJjZEZ4MGFXWWdLR04xY25KbGJuUlFZV2RsSUNFOVBTQXhLU0I3WEhKY2JseDBYSFJjZEZ4MFhIUmNkSEJ5WlhaQ2RHNHVjM1I1YkdVdWIzQmhZMmwwZVNBOUlDY3hKenRjY2x4dVhIUmNkRngwWEhSY2RGeDBjSEpsZGtKMGJpNXpkSGxzWlM1d2IybHVkR1Z5UlhabGJuUnpJRDBnSjJGc2JDYzdYSEpjYmx4MFhIUmNkRngwWEhSOVhISmNibHh5WEc1Y2RGeDBYSFJjZEZ4MGFXWWdLR0ZqZEdsMlpVSjBia05oZENrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhSaFkzUnBkbVZDZEc1RFlYUXVZMnhoYzNOTWFYTjBMbUZrWkNnblozSnZkWEFuS1R0Y2NseHVYSFJjZEZ4MFhIUmNkRngwWVdOMGFYWmxRblJ1UTJGMExtNWxlSFJGYkdWdFpXNTBVMmxpYkdsdVp5NWpiR0Z6YzB4cGMzUXVZV1JrS0NkbmNtOTFjQ2NwTzF4eVhHNWNkRngwWEhSY2RGeDBYSFJoWTNScGRtVkNkRzVEWVhRdWNISmxkbWx2ZFhORmJHVnRaVzUwVTJsaWJHbHVaeTVqYkdGemMweHBjM1F1WVdSa0tDZG5jbTkxY0NjcE8xeHlYRzVjZEZ4MFhIUmNkRngwZlZ4eVhHNWNkRngwWEhSY2RIMWNjbHh1WEhSY2RGeDBmU2s3WEhKY2JseHlYRzVjZEZ4MFhIUnlaWFIxY200Z2JtVjRkRUowYmp0Y2NseHVYSFJjZEgxY2NseHVYSEpjYmx4MFhIUm1kVzVqZEdsdmJpQndjbVYyVUdGblpTaHdZV2RsUTI5MWJuUXBJSHRjY2x4dVhIUmNkRngwYkdWMElIQnlaWFpDZEc0Z1BTQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0NkaWRYUjBiMjRuS1R0Y2NseHVYSFJjZEZ4MGNISmxka0owYmk1amJHRnpjMHhwYzNRdVlXUmtLQ2R3Y21WMkp5azdYSEpjYmx4MFhIUmNkSEJ5WlhaQ2RHNHVhVzV1WlhKVVpYaDBJRDBnSnp3bk8xeHlYRzVjZEZ4MFhIUndjbVYyUW5SdUxtTnNZWE56VEdsemRDNWhaR1FvSjNCaFoybHVZWFJwYjI0dFluUnVKeWs3WEhKY2JseHlYRzVjZEZ4MFhIUndjbVYyUW5SdUxtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0oyTnNhV05ySnl3Z0tHVXBJRDArSUh0Y2NseHVYSFJjZEZ4MFhIUnBaaUFvY0hKbGRrSjBiaTV3WVhKbGJuUkZiR1Z0Wlc1MElEMDlJSEJoWjJsdVlYUnBiMjVGYkVSdlozTXBJSHRjY2x4dVhIUmNkRngwWEhSY2RHUnBjM0JzWVhsUVlXZHBibUYwWldSSmRHVnRjeWhjY2x4dVhIUmNkRngwWEhSY2RGeDBaRzluUW05NFFYSnlZWGtzWEhKY2JseDBYSFJjZEZ4MFhIUmNkR1J2WjNOQ2IzZ3NYSEpjYmx4MFhIUmNkRngwWEhSY2RHVnNaVzFsYm5SelQyNVFZV2RsTEZ4eVhHNWNkRngwWEhSY2RGeDBYSFJqZFhKeVpXNTBVR0ZuWlZ4eVhHNWNkRngwWEhSY2RGeDBLVHRjY2x4dVhISmNibHgwWEhSY2RGeDBYSFJzWlhRZ1lXTjBhWFpsUW5SdVJHOW5JRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpaGNjbHh1WEhSY2RGeDBYSFJjZEZ4MEp5TmtiMmR6SUM1d1lXZHBibUYwYVc5dUxXSjBiaTVoWTNScGRtVW5YSEpjYmx4MFhIUmNkRngwWEhRcE8xeHlYRzVjY2x4dVhIUmNkRngwWEhSY2RHRmpkR2wyWlVKMGJrUnZaeTV3Y21WMmFXOTFjMFZzWlcxbGJuUlRhV0pzYVc1bkxtTnNhV05yS0NrN1hISmNibHh5WEc1Y2RGeDBYSFJjZEZ4MGJHVjBJRzVsZUhSQ2RHNGdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtDY2paRzluY3lBdWJtVjRkQ2NwTzF4eVhHNWNjbHh1WEhSY2RGeDBYSFJjZEdsbUlDaGpkWEp5Wlc1MFVHRm5aU0FoUFQwZ2NHRm5aVU52ZFc1MEtTQjdYSEpjYmx4MFhIUmNkRngwWEhSY2RHNWxlSFJDZEc0dWMzUjViR1V1YjNCaFkybDBlU0E5SUNjeEp6dGNjbHh1WEhSY2RGeDBYSFJjZEZ4MGJtVjRkRUowYmk1emRIbHNaUzV3YjJsdWRHVnlSWFpsYm5SeklEMGdKMkZzYkNjN1hISmNibHgwWEhSY2RGeDBYSFI5WEhKY2JseHlYRzVjZEZ4MFhIUmNkRngwYVdZZ0tHTjFjbkpsYm5SUVlXZGxJRDA5UFNBeEtTQjdYSEpjYmx4MFhIUmNkRngwWEhSY2RIQnlaWFpDZEc0dWMzUjViR1V1YjNCaFkybDBlU0E5SUNjd0xqVW5PMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUndjbVYyUW5SdUxuTjBlV3hsTG5CdmFXNTBaWEpGZG1WdWRITWdQU0FuYm05dVpTYzdYSEpjYmx4MFhIUmNkRngwWEhSOVhISmNibHh5WEc1Y2RGeDBYSFJjZEZ4MGFXWWdLR0ZqZEdsMlpVSjBia1J2WnlrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhSaFkzUnBkbVZDZEc1RWIyY3VZMnhoYzNOTWFYTjBMbUZrWkNnblozSnZkWEFuS1R0Y2NseHVYSFJjZEZ4MFhIUmNkRngwWVdOMGFYWmxRblJ1Ukc5bkxtNWxlSFJGYkdWdFpXNTBVMmxpYkdsdVp5NWpiR0Z6YzB4cGMzUXVZV1JrS0NkbmNtOTFjQ2NwTzF4eVhHNWNkRngwWEhSY2RGeDBYSFJoWTNScGRtVkNkRzVFYjJjdWNISmxkbWx2ZFhORmJHVnRaVzUwVTJsaWJHbHVaeTVqYkdGemMweHBjM1F1WVdSa0tDZG5jbTkxY0NjcE8xeHlYRzVjZEZ4MFhIUmNkRngwZlZ4eVhHNWNkRngwWEhSY2RIMWNjbHh1WEhKY2JseDBYSFJjZEZ4MGFXWWdLSEJ5WlhaQ2RHNHVjR0Z5Wlc1MFJXeGxiV1Z1ZENBOVBTQndZV2RwYm1GMGFXOXVSV3hEWVhSektTQjdYSEpjYmx4MFhIUmNkRngwWEhSa2FYTndiR0Y1VUdGbmFXNWhkR1ZrU1hSbGJYTW9YSEpjYmx4MFhIUmNkRngwWEhSY2RHTmhkRUp2ZUVGeWNtRjVMRnh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmpZWFJ6UW05NExGeHlYRzVjZEZ4MFhIUmNkRngwWEhSbGJHVnRaVzUwYzA5dVVHRm5aU3hjY2x4dVhIUmNkRngwWEhSY2RGeDBZM1Z5Y21WdWRGQmhaMlZjY2x4dVhIUmNkRngwWEhSY2RDazdYSEpjYmx4eVhHNWNkRngwWEhSY2RGeDBiR1YwSUdGamRHbDJaVUowYmtOaGRDQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb1hISmNibHgwWEhSY2RGeDBYSFJjZENjalkyRjBjeUF1Y0dGbmFXNWhkR2x2YmkxaWRHNHVZV04wYVhabEoxeHlYRzVjZEZ4MFhIUmNkRngwS1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwWEhSaFkzUnBkbVZDZEc1RFlYUXVjSEpsZG1sdmRYTkZiR1Z0Wlc1MFUybGliR2x1Wnk1amJHbGpheWdwTzF4eVhHNWNjbHh1WEhSY2RGeDBYSFJjZEd4bGRDQnVaWGgwUW5SdUlEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkkyTmhkSE1nTG01bGVIUW5LVHRjY2x4dVhISmNibHgwWEhSY2RGeDBYSFJwWmlBb1kzVnljbVZ1ZEZCaFoyVWdJVDA5SUhCaFoyVkRiM1Z1ZENrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhSdVpYaDBRblJ1TG5OMGVXeGxMbTl3WVdOcGRIa2dQU0FuTVNjN1hISmNibHgwWEhSY2RGeDBYSFJjZEc1bGVIUkNkRzR1YzNSNWJHVXVjRzlwYm5SbGNrVjJaVzUwY3lBOUlDZGhiR3duTzF4eVhHNWNkRngwWEhSY2RGeDBmVnh5WEc1Y2NseHVYSFJjZEZ4MFhIUmNkR2xtSUNoamRYSnlaVzUwVUdGblpTQTlQVDBnTVNrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhSd2NtVjJRblJ1TG5OMGVXeGxMbTl3WVdOcGRIa2dQU0FuTUM0MUp6dGNjbHh1WEhSY2RGeDBYSFJjZEZ4MGNISmxka0owYmk1emRIbHNaUzV3YjJsdWRHVnlSWFpsYm5SeklEMGdKMjV2Ym1Vbk8xeHlYRzVjZEZ4MFhIUmNkRngwZlZ4eVhHNWNjbHh1WEhSY2RGeDBYSFJjZEdsbUlDaGhZM1JwZG1WQ2RHNURZWFFwSUh0Y2NseHVYSFJjZEZ4MFhIUmNkRngwWVdOMGFYWmxRblJ1UTJGMExtTnNZWE56VEdsemRDNWhaR1FvSjJkeWIzVndKeWs3WEhKY2JseDBYSFJjZEZ4MFhIUmNkR0ZqZEdsMlpVSjBia05oZEM1dVpYaDBSV3hsYldWdWRGTnBZbXhwYm1jdVkyeGhjM05NYVhOMExtRmtaQ2duWjNKdmRYQW5LVHRjY2x4dVhIUmNkRngwWEhSY2RGeDBZV04wYVhabFFuUnVRMkYwTG5CeVpYWnBiM1Z6Uld4bGJXVnVkRk5wWW14cGJtY3VZMnhoYzNOTWFYTjBMbUZrWkNnblozSnZkWEFuS1R0Y2NseHVYSFJjZEZ4MFhIUmNkSDFjY2x4dVhIUmNkRngwWEhSOVhISmNibHgwWEhSY2RIMHBPMXh5WEc1Y2NseHVYSFJjZEZ4MGFXWWdLR04xY25KbGJuUlFZV2RsSUQwOVBTQXhLU0I3WEhKY2JseDBYSFJjZEZ4MGNISmxka0owYmk1emRIbHNaUzV2Y0dGamFYUjVJRDBnSnpBdU5TYzdYSEpjYmx4MFhIUmNkRngwY0hKbGRrSjBiaTV6ZEhsc1pTNXdiMmx1ZEdWeVJYWmxiblJ6SUQwZ0oyNXZibVVuTzF4eVhHNWNkRngwWEhSOVhISmNibHh5WEc1Y2RGeDBYSFJ5WlhSMWNtNGdjSEpsZGtKMGJqdGNjbHh1WEhSY2RIMWNjbHh1WEhKY2JseDBYSFJtZFc1amRHbHZiaUJ3WVdkcGJtRjBhVzl1UW5WMGRHOXVLSEJoWjJVc0lIQmhaMlZEYjNWdWRDa2dlMXh5WEc1Y2RGeDBYSFJzWlhRZ1luVjBkRzl1SUQwZ1pHOWpkVzFsYm5RdVkzSmxZWFJsUld4bGJXVnVkQ2duWW5WMGRHOXVKeWs3WEhKY2JseDBYSFJjZEdKMWRIUnZiaTVqYkdGemMweHBjM1F1WVdSa0tDZHdZV2RwYm1GMGFXOXVMV0owYmljcE8xeHlYRzVjZEZ4MFhIUmlkWFIwYjI0dWFXNXVaWEpVWlhoMElEMGdjR0ZuWlR0Y2NseHVYSEpjYmx4MFhIUmNkR2xtSUNoamRYSnlaVzUwVUdGblpTQTlQU0J3WVdkbEtTQjdYSEpjYmx4MFhIUmNkRngwWW5WMGRHOXVMbU5zWVhOelRHbHpkQzVoWkdRb0oyRmpkR2wyWlNjcE8xeHlYRzVjZEZ4MFhIUjlYSEpjYmx4eVhHNWNkRngwWEhSaWRYUjBiMjR1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduWTJ4cFkyc25MQ0FvWlNrZ1BUNGdlMXh5WEc1Y2RGeDBYSFJjZEdOMWNuSmxiblJRWVdkbElEMGdjR0ZuWlR0Y2NseHVYSEpjYmx4MFhIUmNkRngwYVdZZ0tHSjFkSFJ2Ymk1d1lYSmxiblJGYkdWdFpXNTBJRDA5SUhCaFoybHVZWFJwYjI1RmJFUnZaM01wSUh0Y2NseHVYSFJjZEZ4MFhIUmNkR1JwYzNCc1lYbFFZV2RwYm1GMFpXUkpkR1Z0Y3loY2NseHVYSFJjZEZ4MFhIUmNkRngwWkc5blFtOTRRWEp5WVhrc1hISmNibHgwWEhSY2RGeDBYSFJjZEdSdlozTkNiM2dzWEhKY2JseDBYSFJjZEZ4MFhIUmNkR1ZzWlcxbGJuUnpUMjVRWVdkbExGeHlYRzVjZEZ4MFhIUmNkRngwWEhSamRYSnlaVzUwVUdGblpWeHlYRzVjZEZ4MFhIUmNkRngwS1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwWEhSc1pYUWdZV04wYVhabFFuUnVSRzluSUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWhjY2x4dVhIUmNkRngwWEhSY2RGeDBKeU5rYjJkeklDNXdZV2RwYm1GMGFXOXVMV0owYmk1aFkzUnBkbVVuWEhKY2JseDBYSFJjZEZ4MFhIUXBPMXh5WEc1Y2NseHVYSFJjZEZ4MFhIUmNkR0ZqZEdsMlpVSjBia1J2Wnk1amJHRnpjMHhwYzNRdWNtVnRiM1psS0NkaFkzUnBkbVVuS1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwWEhSaWRYUjBiMjR1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25ZV04wYVhabEp5azdYSEpjYmx4eVhHNWNkRngwWEhSY2RGeDBiR1YwSUc1bGVIUkNkRzRnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2NqWkc5bmN5QXVibVY0ZENjcE8xeHlYRzVjY2x4dVhIUmNkRngwWEhSY2RHbG1JQ2hqZFhKeVpXNTBVR0ZuWlNBOVBUMGdjR0ZuWlVOdmRXNTBLU0I3WEhKY2JseDBYSFJjZEZ4MFhIUmNkRzVsZUhSQ2RHNHVjM1I1YkdVdWIzQmhZMmwwZVNBOUlDY3dMalVuTzF4eVhHNWNkRngwWEhSY2RGeDBYSFJ1WlhoMFFuUnVMbk4wZVd4bExuQnZhVzUwWlhKRmRtVnVkSE1nUFNBbmJtOXVaU2M3WEhKY2JseDBYSFJjZEZ4MFhIUjlJR1ZzYzJVZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhSdVpYaDBRblJ1TG5OMGVXeGxMbTl3WVdOcGRIa2dQU0FuTVNjN1hISmNibHgwWEhSY2RGeDBYSFJjZEc1bGVIUkNkRzR1YzNSNWJHVXVjRzlwYm5SbGNrVjJaVzUwY3lBOUlDZGhiR3duTzF4eVhHNWNkRngwWEhSY2RGeDBmVnh5WEc1Y2NseHVYSFJjZEZ4MFhIUmNkR3hsZENCd2NtVjJRblJ1SUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduSTJSdlozTWdMbkJ5WlhZbktUdGNjbHh1WEhKY2JseDBYSFJjZEZ4MFhIUnBaaUFvWTNWeWNtVnVkRkJoWjJVZ1BUMDlJREVwSUh0Y2NseHVYSFJjZEZ4MFhIUmNkRngwY0hKbGRrSjBiaTV6ZEhsc1pTNXZjR0ZqYVhSNUlEMGdKekF1TlNjN1hISmNibHgwWEhSY2RGeDBYSFJjZEhCeVpYWkNkRzR1YzNSNWJHVXVjRzlwYm5SbGNrVjJaVzUwY3lBOUlDZHViMjVsSnp0Y2NseHVYSFJjZEZ4MFhIUmNkSDBnWld4elpTQjdYSEpjYmx4MFhIUmNkRngwWEhSY2RIQnlaWFpDZEc0dWMzUjViR1V1YjNCaFkybDBlU0E5SUNjeEp6dGNjbHh1WEhSY2RGeDBYSFJjZEZ4MGNISmxka0owYmk1emRIbHNaUzV3YjJsdWRHVnlSWFpsYm5SeklEMGdKMkZzYkNjN1hISmNibHgwWEhSY2RGeDBYSFI5WEhKY2JseDBYSFJjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkRngwWEhScFppQW9ZblYwZEc5dUxuQmhjbVZ1ZEVWc1pXMWxiblFnUFQwZ2NHRm5hVzVoZEdsdmJrVnNRMkYwY3lrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWkdsemNHeGhlVkJoWjJsdVlYUmxaRWwwWlcxektGeHlYRzVjZEZ4MFhIUmNkRngwWEhSallYUkNiM2hCY25KaGVTeGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFkyRjBjMEp2ZUN4Y2NseHVYSFJjZEZ4MFhIUmNkRngwWld4bGJXVnVkSE5QYmxCaFoyVXNYSEpjYmx4MFhIUmNkRngwWEhSY2RHTjFjbkpsYm5SUVlXZGxYSEpjYmx4MFhIUmNkRngwWEhRcE8xeHlYRzVjY2x4dVhIUmNkRngwWEhSY2RHeGxkQ0JoWTNScGRtVkNkRzVEWVhRZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0Z4eVhHNWNkRngwWEhSY2RGeDBYSFFuSTJOaGRITWdMbkJoWjJsdVlYUnBiMjR0WW5SdUxtRmpkR2wyWlNkY2NseHVYSFJjZEZ4MFhIUmNkQ2s3WEhKY2JseHlYRzVjZEZ4MFhIUmNkRngwWVdOMGFYWmxRblJ1UTJGMExtTnNZWE56VEdsemRDNXlaVzF2ZG1Vb0oyRmpkR2wyWlNjcE8xeHlYRzVjY2x4dVhIUmNkRngwWEhSY2RHSjFkSFJ2Ymk1amJHRnpjMHhwYzNRdVlXUmtLQ2RoWTNScGRtVW5LVHRjY2x4dVhISmNibHgwWEhSY2RGeDBYSFJzWlhRZ2JtVjRkRUowYmlBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvSnlOallYUnpJQzV1WlhoMEp5azdYSEpjYmx4eVhHNWNkRngwWEhSY2RGeDBhV1lnS0dOMWNuSmxiblJRWVdkbElEMDlQU0J3WVdkbFEyOTFiblFwSUh0Y2NseHVYSFJjZEZ4MFhIUmNkRngwYm1WNGRFSjBiaTV6ZEhsc1pTNXZjR0ZqYVhSNUlEMGdKekF1TlNjN1hISmNibHgwWEhSY2RGeDBYSFJjZEc1bGVIUkNkRzR1YzNSNWJHVXVjRzlwYm5SbGNrVjJaVzUwY3lBOUlDZHViMjVsSnp0Y2NseHVYSFJjZEZ4MFhIUmNkSDBnWld4elpTQjdYSEpjYmx4MFhIUmNkRngwWEhSY2RHNWxlSFJDZEc0dWMzUjViR1V1YjNCaFkybDBlU0E5SUNjeEp6dGNjbHh1WEhSY2RGeDBYSFJjZEZ4MGJtVjRkRUowYmk1emRIbHNaUzV3YjJsdWRHVnlSWFpsYm5SeklEMGdKMkZzYkNjN1hISmNibHgwWEhSY2RGeDBYSFI5WEhKY2JseHlYRzVjZEZ4MFhIUmNkRngwYkdWMElIQnlaWFpDZEc0Z1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0NjalkyRjBjeUF1Y0hKbGRpY3BPMXh5WEc1Y2NseHVYSFJjZEZ4MFhIUmNkR2xtSUNoamRYSnlaVzUwVUdGblpTQTlQVDBnTVNrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhSd2NtVjJRblJ1TG5OMGVXeGxMbTl3WVdOcGRIa2dQU0FuTUM0MUp6dGNjbHh1WEhSY2RGeDBYSFJjZEZ4MGNISmxka0owYmk1emRIbHNaUzV3YjJsdWRHVnlSWFpsYm5SeklEMGdKMjV2Ym1Vbk8xeHlYRzVjZEZ4MFhIUmNkRngwZlNCbGJITmxJSHRjY2x4dVhIUmNkRngwWEhSY2RGeDBjSEpsZGtKMGJpNXpkSGxzWlM1dmNHRmphWFI1SUQwZ0p6RW5PMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUndjbVYyUW5SdUxuTjBlV3hsTG5CdmFXNTBaWEpGZG1WdWRITWdQU0FuWVd4c0p6dGNjbHh1WEhSY2RGeDBYSFJjZEgxY2NseHVYSFJjZEZ4MFhIUjlYSEpjYmx4MFhIUmNkSDBwTzF4eVhHNWNjbHh1WEhSY2RGeDBjbVYwZFhKdUlHSjFkSFJ2Ymp0Y2NseHVYSFJjZEgxY2NseHVYSEpjYmx4MFhIUmpiMjV6ZENCbGVIQmhibVJ6VFc5eVpTQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNKQmJHd29KMXRsZUhCaGJtUXRiVzl5WlYwbktUdGNjbHh1WEhKY2JseDBYSFJtZFc1amRHbHZiaUJsZUhCaGJtUW9LU0I3WEhKY2JseDBYSFJjZEdOdmJuTjBJSE5vYjNkRGIyNTBaVzUwSUQwZ1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvZEdocGN5NWtZWFJoYzJWMExuUmhjbWRsZENrN1hISmNibHgwWEhSY2RHbG1JQ2h6YUc5M1EyOXVkR1Z1ZEM1amJHRnpjMHhwYzNRdVkyOXVkR0ZwYm5Nb0oyRmpkR2wyWlNjcEtTQjdYSEpjYmx4MFhIUmNkRngwZEdocGN5NXBibTVsY2toVVRVd2dQU0IwYUdsekxtUmhkR0Z6WlhRdWMyaHZkM1JsZUhRN1hISmNibHgwWEhSY2RIMGdaV3h6WlNCN1hISmNibHgwWEhSY2RGeDBkR2hwY3k1cGJtNWxja2hVVFV3Z1BTQjBhR2x6TG1SaGRHRnpaWFF1YUdsa1pYUmxlSFE3WEhKY2JseDBYSFJjZEgxY2NseHVYSEpjYmx4MFhIUmNkSE5vYjNkRGIyNTBaVzUwTG1Oc1lYTnpUR2x6ZEM1MGIyZG5iR1VvSjJGamRHbDJaU2NwTzF4eVhHNWNkRngwWEhScFppQW9jMmh2ZDBOdmJuUmxiblF1WTJ4aGMzTk1hWE4wTG1OdmJuUmhhVzV6S0NkaFkzUnBkbVVuS1NrZ2UxeHlYRzVjZEZ4MFhIUmNkSE5vYjNkRGIyNTBaVzUwTG5OMGVXeGxMbTFoZUVobGFXZG9kQ0E5SUhOb2IzZERiMjUwWlc1MExuTmpjbTlzYkVobGFXZG9kQ0FySUNkd2VDYzdYSEpjYmx4MFhIUmNkSDBnWld4elpTQjdYSEpjYmx4MFhIUmNkRngwYzJodmQwTnZiblJsYm5RdWMzUjViR1V1YldGNFNHVnBaMmgwSUQwZ01qQWdLeUFuY0hnbk8xeHlYRzVjZEZ4MFhIUjlYSEpjYmx4MFhIUjlYSEpjYmx4eVhHNWNkRngwYVdZZ0tHUnZaM05DYjNncElIdGNjbHh1WEhSY2RGeDBaR2x6Y0d4aGVWQmhaMmx1WVhSbFpFbDBaVzF6S0dSdlowSnZlRUZ5Y21GNUxDQmtiMmR6UW05NExDQmxiR1Z0Wlc1MGMwOXVVR0ZuWlN3Z1kzVnljbVZ1ZEZCaFoyVXBPMXh5WEc1Y2RGeDBYSFJrYVhOd2JHRjVVR0ZuYVc1aGRHbHZiaWhrYjJkQ2IzaEJjbkpoZVN3Z2NHRm5hVzVoZEdsdmJrVnNSRzluY3l3Z1pXeGxiV1Z1ZEhOUGJsQmhaMlVwTzF4eVhHNWNjbHh1WEhSY2RGeDBaWGh3WVc1a2MwMXZjbVV1Wm05eVJXRmphQ2dvWW5SdUtTQTlQaUI3WEhKY2JseDBYSFJjZEZ4MFluUnVMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMk5zYVdOckp5d2daWGh3WVc1a0tUdGNjbHh1WEhSY2RGeDBmU2s3WEhKY2JseDBYSFI5WEhKY2JseHlYRzVjZEZ4MGFXWWdLR05oZEhOQ2IzZ3BJSHRjY2x4dVhIUmNkRngwWkdsemNHeGhlVkJoWjJsdVlYUmxaRWwwWlcxektHTmhkRUp2ZUVGeWNtRjVMQ0JqWVhSelFtOTRMQ0JsYkdWdFpXNTBjMDl1VUdGblpTd2dZM1Z5Y21WdWRGQmhaMlVwTzF4eVhHNWNkRngwWEhSa2FYTndiR0Y1VUdGbmFXNWhkR2x2YmloallYUkNiM2hCY25KaGVTd2djR0ZuYVc1aGRHbHZia1ZzUTJGMGN5d2daV3hsYldWdWRITlBibEJoWjJVcE8xeHlYRzVjY2x4dVhIUmNkRngwWlhod1lXNWtjMDF2Y21VdVptOXlSV0ZqYUNnb1luUnVLU0E5UGlCN1hISmNibHgwWEhSY2RGeDBZblJ1TG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjJOc2FXTnJKeXdnWlhod1lXNWtLVHRjY2x4dVhIUmNkRngwZlNrN1hISmNibHgwWEhSOVhISmNibHgwZlZ4eVhHNWNjbHh1WEhScFppQW9ZVzVwYldGc2MxQmhaMlZ6S1NCN1hISmNibHgwWEhRb1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc1Y2RGeDBYSFJrYVhOd2JHRjVRVzVwYldGc2N5Z3BPMXh5WEc1Y2RGeDBmU2tvS1R0Y2NseHVYSFI5WEhKY2JuMHBPMXh5WEc0aUxDSmtiMk4xYldWdWRDNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZEVUMDFEYjI1MFpXNTBURzloWkdWa0p5d2dablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNkQzh2SUdadmNtMGdkbUZzYVdSaGRHbHZibHh5WEc1Y2RHTnZibk4wSUdadmNtMGdQU0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDZ25ZMjl1ZEdGamRDMW1iM0p0SnlrN1hISmNibHgwWTI5dWMzUWdibUZ0WlNBOUlHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0NkdVlXMWxKeWs3WEhKY2JseDBZMjl1YzNRZ1pXMWhhV3dnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2duWlcxaGFXd25LVHRjY2x4dVhIUmpiMjV6ZENCdFpYTnpZV2RsSUQwZ1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvSjIxbGMzTmhaMlVuS1R0Y2NseHVYSFJqYjI1emRDQm1iM0p0UW5SdUlEMGdaRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkRUo1U1dRb0oyWnZjbTB0WW5SdUp5azdYSEpjYmx4eVhHNWNkR2xtSUNobWIzSnRLU0I3WEhKY2JseDBYSFJiWEhKY2JseDBYSFJjZENkamJHbGpheWNzWEhKY2JseDBYSFJjZENkdmJuUnZkV05vYzNSaGNuUW5MRnh5WEc1Y2RGeDBYSFFuYlc5MWMyVnZkbVZ5Snl4Y2NseHVYSFJjZEZ4MEoydGxlV1J2ZDI0bkxGeHlYRzVjZEZ4MFhIUW5hMlY1Y0hKbGMzTW5MRnh5WEc1Y2RGeDBYSFFuZEc5MVkyaHpkR0Z5ZENjc1hISmNibHgwWEhSY2RDZDBiM1ZqYUcxdmRtVW5MRnh5WEc1Y2RGeDBYUzVtYjNKRllXTm9LRnh5WEc1Y2RGeDBYSFFvWlhabGJuUXBJRDArWEhKY2JseDBYSFJjZEZ4MFpHOWpkVzFsYm5RdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lobGRtVnVkQ3dnS0NrZ1BUNGdlMXh5WEc1Y2RGeDBYSFJjZEZ4MGFXWWdLR05vWldOclNXNXdkWFJ6S0NrZ1BUMDlJR1poYkhObEtTQjdYSEpjYmx4MFhIUmNkRngwWEhSY2RHWnZjbTFDZEc0dVpHbHpZV0pzWldRZ1BTQjBjblZsTzF4eVhHNWNkRngwWEhSY2RGeDBmU0JsYkhObElIdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFptOXliVUowYmk1a2FYTmhZbXhsWkNBOUlHWmhiSE5sTzF4eVhHNWNkRngwWEhSY2RGeDBmVnh5WEc1Y2RGeDBYSFJjZEgwcExGeHlYRzVjZEZ4MFhIUm1ZV3h6WlZ4eVhHNWNkRngwS1R0Y2NseHVYSEpjYmx4MFhIUm1kVzVqZEdsdmJpQmphR1ZqYTBsdWNIVjBjeWdwSUh0Y2NseHVYSFJjZEZ4MFkyOXVjM1FnYm1GdFpWWmhiSFZsSUQwZ2JtRnRaUzUyWVd4MVpTNTBjbWx0S0NrN1hISmNibHgwWEhSY2RHTnZibk4wSUdWdFlXbHNWbUZzZFdVZ1BTQmxiV0ZwYkM1MllXeDFaUzUwY21sdEtDazdYSEpjYmx4MFhIUmNkR052Ym5OMElHMWxjM05oWjJWV1lXeDFaU0E5SUcxbGMzTmhaMlV1ZG1Gc2RXVXVkSEpwYlNncE8xeHlYRzVjY2x4dVhIUmNkRngwYVdZZ0tHNWhiV1ZXWVd4MVpTQTlQVDBnSnljcElIdGNjbHh1WEhSY2RGeDBYSFJ6WlhSRmNuSnZja1p2Y2lodVlXMWxMQ0FuVUd4bFlYTmxJR1Z1ZEdWeUlIbHZkWElnWm5Wc2JDQnVZVzFsSnlrN1hISmNibHgwWEhSY2RIMGdaV3h6WlNCN1hISmNibHgwWEhSY2RGeDBjMlYwVTNWalkyVnpjMFp2Y2lodVlXMWxLVHRjY2x4dVhIUmNkRngwZlZ4eVhHNWNjbHh1WEhSY2RGeDBhV1lnS0dWdFlXbHNWbUZzZFdVZ1BUMDlJQ2NuS1NCN1hISmNibHgwWEhSY2RGeDBjMlYwUlhKeWIzSkdiM0lvWlcxaGFXd3NJQ2RRYkdWaGMyVWdaVzUwWlhJZ2VXOTFjaUJsYldGcGJDQmhaR1J5WlhOekp5azdYSEpjYmx4MFhIUmNkSDBnWld4elpTQnBaaUFvSVdWdFlXbHNTWE5XWVd4cFpDaGxiV0ZwYkZaaGJIVmxLU2tnZTF4eVhHNWNkRngwWEhSY2RITmxkRVZ5Y205eVJtOXlLR1Z0WVdsc0xDQW5SVzFoYVd3Z2FYTWdibTkwSUhaaGJHbGtKeWs3WEhKY2JseDBYSFJjZEgwZ1pXeHpaU0I3WEhKY2JseDBYSFJjZEZ4MGMyVjBVM1ZqWTJWemMwWnZjaWhsYldGcGJDazdYSEpjYmx4MFhIUmNkSDFjY2x4dVhISmNibHgwWEhSY2RHbG1JQ2h0WlhOellXZGxWbUZzZFdVZ1BUMDlJQ2NuS1NCN1hISmNibHgwWEhSY2RGeDBjMlYwUlhKeWIzSkdiM0lvYldWemMyRm5aU3dnSjFCc1pXRnpaU0JsYm5SbGNpQjViM1Z5SUcxbGMzTmhaMlVuS1R0Y2NseHVYSFJjZEZ4MGZTQmxiSE5sSUh0Y2NseHVYSFJjZEZ4MFhIUnpaWFJUZFdOalpYTnpSbTl5S0cxbGMzTmhaMlVwTzF4eVhHNWNkRngwWEhSOVhISmNibHh5WEc1Y2RGeDBYSFJwWmlBb1hISmNibHgwWEhSY2RGeDBibUZ0WlZaaGJIVmxJRDA5UFNBbkp5QjhmRnh5WEc1Y2RGeDBYSFJjZEdWdFlXbHNWbUZzZFdVZ1BUMDlJQ2NuSUh4OFhISmNibHgwWEhSY2RGeDBiV1Z6YzJGblpWWmhiSFZsSUQwOVBTQW5KeUI4ZkZ4eVhHNWNkRngwWEhSY2RDRmxiV0ZwYkVselZtRnNhV1FvWlcxaGFXeFdZV3gxWlNsY2NseHVYSFJjZEZ4MEtTQjdYSEpjYmx4MFhIUmNkRngwY21WMGRYSnVJR1poYkhObE8xeHlYRzVjZEZ4MFhIUjlJR1ZzYzJVZ2UxeHlYRzVjZEZ4MFhIUmNkSEpsZEhWeWJpQjBjblZsTzF4eVhHNWNkRngwWEhSOVhISmNibHgwWEhSOVhISmNibHh5WEc1Y2RGeDBablZ1WTNScGIyNGdjMlYwUlhKeWIzSkdiM0lvYVc1d2RYUXNJRzFsYzNOaFoyVXBJSHRjY2x4dVhIUmNkRngwWTI5dWMzUWdabTl5YlNBOUlHbHVjSFYwTG5CaGNtVnVkRVZzWlcxbGJuUTdYSEpjYmx4MFhIUmNkR052Ym5OMElITnRZV3hzSUQwZ1ptOXliUzV4ZFdWeWVWTmxiR1ZqZEc5eUtDZHpiV0ZzYkNjcE8xeHlYRzVjY2x4dVhIUmNkRngwYzIxaGJHd3VhVzV1WlhKVVpYaDBJRDBnYldWemMyRm5aVHRjY2x4dVhIUmNkRngwWm05eWJTNWpiR0Z6YzA1aGJXVWdQU0FuWm05eWJWOWZaM0p2ZFhBZ1pYSnliM0luTzF4eVhHNWNkRngwZlZ4eVhHNWNjbHh1WEhSY2RHWjFibU4wYVc5dUlITmxkRk4xWTJObGMzTkdiM0lvYVc1d2RYUXBJSHRjY2x4dVhIUmNkRngwWTI5dWMzUWdabTl5YlNBOUlHbHVjSFYwTG5CaGNtVnVkRVZzWlcxbGJuUTdYSEpjYmx4MFhIUmNkR1p2Y20wdVkyeGhjM05PWVcxbElEMGdKMlp2Y20xZlgyZHliM1Z3SUhOMVkyTmxjM01uTzF4eVhHNWNkRngwZlZ4eVhHNWNjbHh1WEhSY2RHWjFibU4wYVc5dUlHVnRZV2xzU1hOV1lXeHBaQ2hsYldGcGJDa2dlMXh5WEc1Y2RGeDBYSFJqYjI1emRDQnlaU0E5SUM5ZUtDaGJYancrS0NsY1hGdGNYRjFjWEZ4Y0xpdzdPbHhjYzBCY0lsMHJLRnhjTGx0ZVBENG9LVnhjVzF4Y1hWeGNYRnd1TERzNlhGeHpRRndpWFNzcEtpbDhLRndpTGl0Y0lpa3BRQ2dvWEZ4Yld6QXRPVjE3TVN3emZWeGNMbHN3TFRsZGV6RXNNMzFjWEM1Yk1DMDVYWHN4TEROOVhGd3VXekF0T1YxN01Td3pmVjBwZkNnb1cyRXRla0V0V2x4Y0xUQXRPVjByWEZ3dUtTdGJZUzE2UVMxYVhYc3lMSDBwS1NRdkxuUmxjM1FvWEhKY2JseDBYSFJjZEZ4MFpXMWhhV3hjY2x4dVhIUmNkRngwS1R0Y2NseHVYSEpjYmx4MFhIUmNkSEpsZEhWeWJpQnlaVHRjY2x4dVhIUmNkSDFjY2x4dVhIUjlYSEpjYm4wcE8xeHlYRzRpTENKa2IyTjFiV1Z1ZEM1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkRVQwMURiMjUwWlc1MFRHOWhaR1ZrSnl3Z1puVnVZM1JwYjI0Z0tDa2dlMXh1WEhSM2FXNWtiM2N1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduYkc5aFpDY3NJQ2hsS1NBOVBpQjdYRzVjZEZ4MFkyOXVjM1FnY0hKbGJHOWhaQ0E5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9KeTV3Y21Wc2IyRmtKeWs3WEc1Y2JseDBYSFJ3Y21Wc2IyRmtMbU5zWVhOelRHbHpkQzVoWkdRb0ozQnlaV3h2WVdRdFptbHVhWE5vWldRbktUdGNibHgwZlNrN1hHNWNibHgwWTI5dWMzUWdZblJ1VTJOeWIyeHNWRzlVYjNBZ1BTQmtiMk4xYldWdWRDNW5aWFJGYkdWdFpXNTBRbmxKWkNnblluUnVVMk55YjJ4c1ZHOVViM0FuS1R0Y2JseDBZblJ1VTJOeWIyeHNWRzlVYjNBdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblkyeHBZMnNuTENBb1pTa2dQVDRnZTF4dVhIUmNkSGRwYm1SdmR5NXpZM0p2Ykd4VWJ5aDdYRzVjZEZ4MFhIUjBiM0E2SURBc1hHNWNkRngwWEhSc1pXWjBPaUF3TEZ4dVhIUmNkRngwWW1Wb1lYWnBiM0k2SUNkemJXOXZkR2duTEZ4dVhIUmNkSDBwTzF4dVhIUjlLVHRjYm4wcE8xeHVJaXdpWkc5amRXMWxiblF1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduUkU5TlEyOXVkR1Z1ZEV4dllXUmxaQ2NzSUdaMWJtTjBhVzl1SUNncElIdGNjbHh1WEhSamIyNXpkQ0J1WVhaRGIyNTBZV2x1WlhJZ1BTQmtiMk4xYldWdWRDNW5aWFJGYkdWdFpXNTBRbmxKWkNnbmJtRjJMV052Ym5SaGFXNWxjaWNwTzF4eVhHNWNkR052Ym5OMElHMWxiblZDZEc0Z1BTQmtiMk4xYldWdWRDNW5aWFJGYkdWdFpXNTBRbmxKWkNnbmJXVnVkUzFpZEc0bktUdGNjbHh1WEhSamIyNXpkQ0J1WVhaTWFYTjBJRDBnWkc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEVKNVNXUW9KMjVoZGkxc2FYTjBKeWs3WEhKY2JseHlYRzVjZEhkcGJtUnZkeTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2R6WTNKdmJHd25MQ0FvWlNrZ1BUNGdlMXh5WEc1Y2RGeDBhV1lnS0dSdlkzVnRaVzUwTG1SdlkzVnRaVzUwUld4bGJXVnVkQzV6WTNKdmJHeFViM0FnUGlBd0tTQjdYSEpjYmx4MFhIUmNkRzVoZGtOdmJuUmhhVzVsY2k1amJHRnpjMHhwYzNRdVlXUmtLQ2R6ZEdsamEza25LVHRjY2x4dVhIUmNkRngwWW5SdVUyTnliMnhzVkc5VWIzQXVjM1I1YkdVdWIzQmhZMmwwZVNBOUlERTdYSEpjYmx4MFhIUjlJR1ZzYzJVZ2UxeHlYRzVjZEZ4MFhIUnVZWFpEYjI1MFlXbHVaWEl1WTJ4aGMzTk1hWE4wTG5KbGJXOTJaU2duYzNScFkydDVKeWs3WEhKY2JseDBYSFJjZEdKMGJsTmpjbTlzYkZSdlZHOXdMbk4wZVd4bExtOXdZV05wZEhrZ1BTQXdPMXh5WEc1Y2RGeDBmVnh5WEc1Y2RIMHBPMXh5WEc1Y2NseHVYSFJ0Wlc1MVFuUnVMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMk5zYVdOckp5d2dLR1VwSUQwK0lIdGNjbHh1WEhSY2RHMWxiblZDZEc0dVkyeGhjM05NYVhOMExuUnZaMmRzWlNnblkyeHBZMnRsWkNjcE8xeHlYRzVjZEZ4MGJtRjJRMjl1ZEdGcGJtVnlMbU5zWVhOelRHbHpkQzUwYjJkbmJHVW9KMjkyWlhKc1lYa25LVHRjY2x4dVhIUmNkRzVoZGt4cGMzUXVZMnhoYzNOTWFYTjBMblJ2WjJkc1pTZ25jMmh2ZHljcE8xeHlYRzVjZEgwcE8xeHlYRzU5S1R0Y2NseHVJaXdpWkc5amRXMWxiblF1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduUkU5TlEyOXVkR1Z1ZEV4dllXUmxaQ2NzSUdaMWJtTjBhVzl1SUNncElIdGNjbHh1WEhRdkx5QmpZWEp2ZFhObGJGeHlYRzVjZEdOdmJuTjBJR05oY205MWMyVnNJRDBnWkc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEVKNVNXUW9KMk5oY205MWMyVnNKeWs3WEhKY2JseDBZMjl1YzNRZ2NISmxka0owYmlBOUlHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0Nkd2NtVjJKeWs3WEhKY2JseDBZMjl1YzNRZ2JtVjRkRUowYmlBOUlHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0NkdVpYaDBKeWs3WEhKY2JseDBZMjl1YzNRZ1kyRnliM1Z6Wld4VmNtd2dQU0FuTGk5cWN5OWpZWEp2ZFhObGJDNXFjMjl1Snp0Y2NseHVYSEpjYmx4MGJHVjBJR1pwY25OMFUyeHBaR1U3WEhKY2JseDBiR1YwSUd4aGMzUlRiR2xrWlR0Y2NseHVYSEpjYmx4MFpuVnVZM1JwYjI0Z1oyVjBVMnhwWkdWelJHRjBZU2dwSUh0Y2NseHVYSFJjZEhKbGRIVnliaUJ1WlhjZ1VISnZiV2x6WlNnb2NtVnpiMngyWlN3Z2NtVnFaV04wS1NBOVBpQjdYSEpjYmx4MFhIUmNkR1psZEdOb0tHTmhjbTkxYzJWc1ZYSnNLVnh5WEc1Y2RGeDBYSFJjZEM1MGFHVnVLQ2h5WlhOd0tTQTlQaUJ5WlhOd0xtcHpiMjRvS1NsY2NseHVYSFJjZEZ4MFhIUXVkR2hsYmlnb1pHRjBZU2tnUFQ0Z2NtVnpiMngyWlNoa1lYUmhLU2xjY2x4dVhIUmNkRngwWEhRdVkyRjBZMmdvS0dWeWNpa2dQVDRnY21WcVpXTjBLR1Z5Y2lrcE8xeHlYRzVjZEZ4MGZTazdYSEpjYmx4MGZWeHlYRzVjY2x4dVhIUmhjM2x1WXlCbWRXNWpkR2x2YmlCa2FYTndiR0Y1UTJGeWIzVnpaV3dvS1NCN1hISmNibHgwWEhSamIyNXpkQ0JrWVhSaFRHbHpkQ0E5SUdGM1lXbDBJR2RsZEZOc2FXUmxjMFJoZEdFb0tUdGNjbHh1WEhSY2RHTnZibk4wSUhOc2FXUmxjMEZ5Y21GNUlEMGdaR0YwWVV4cGMzUXVjMnhwWkdWek8xeHlYRzVjY2x4dVhIUmNkSE5zYVdSbGMwRnljbUY1TG1admNrVmhZMmdvS0hOc2FXUmxMQ0J6Ykdsa1pVNTFiV0psY2lrZ1BUNGdlMXh5WEc1Y2RGeDBYSFJ1WlhkVGJHbGtaU0E5SUdSdlkzVnRaVzUwTG1OeVpXRjBaVVZzWlcxbGJuUW9KMlJwZGljcE8xeHlYRzVjZEZ4MFhIUnVaWGRUYkdsa1pTNWpiR0Z6YzB4cGMzUXVZV1JrS0NkallYSnZkWE5sYkY5ZmMyeHBaR1VuS1R0Y2NseHVYSEpjYmx4MFhIUmNkRzVsZDFOc2FXUmxMbWx1Ym1WeVNGUk5UQ0E5SUdCY2NseHVYSFJjZEZ4MFhIUmNkRngwUEdScGRpQmpiR0Z6Y3oxY0ltTmhjbTkxYzJWc1gxOXBiV0ZuWlMxamIyNTBZV2x1WlhKY0lqNWNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUThhVzFuSUhOeVl6MWNJaVI3YzJ4cFpHVXVhVzFoWjJWOVhDSWdZV3gwUFZ3aWMyeHBaR1V0YVcxblhDSWdMejVjY2x4dVhIUmNkRngwWEhSY2RGeDBQQzlrYVhZK1hISmNibHgwWEhSY2RGeDBYSFJjZER4a2FYWWdZMnhoYzNNOVhDSmpZWEp2ZFhObGJGOWZZMjl1ZEdWdWRGd2lQbHh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRHhvTVNCamJHRnpjejFjSW1OaGNtOTFjMlZzWDE5MGFYUnNaVndpUGlSN2MyeHBaR1V1ZEdsMGJHVjlQQzlvTVQ1Y2NseHVYSFJjZEZ4MFhIUmNkRngwWEhROGNDQmpiR0Z6Y3oxY0ltTmhjbTkxYzJWc1gxOWtaWE5qWENJK0pIdHpiR2xrWlM1amIyNTBaVzUwZlR3dmNENWNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUThZblYwZEc5dUlHTnNZWE56UFZ3aWFHVmhaR1Z5WDE5dVlYWXRaRzl1WVhSbExXSjBiaUJpZFhSMGIyNWNJajVjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFJjZEVSMVoyMWxJSHBoSUc1bHhhRjBiMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRHd2WW5WMGRHOXVQbHh5WEc1Y2RGeDBYSFJjZEZ4MFhIUThMMlJwZGo1Y2NseHVYSFJjZEZ4MFlEdGNjbHh1WEhKY2JseDBYSFJjZEdOaGNtOTFjMlZzTG1Gd2NHVnVaRU5vYVd4a0tHNWxkMU5zYVdSbEtUdGNjbHh1WEhKY2JseDBYSFJjZEdsbUlDaHpiR2xrWlU1MWJXSmxjaUE5UFQwZ01Da2dlMXh5WEc1Y2RGeDBYSFJjZEdacGNuTjBVMnhwWkdVZ1BTQnVaWGRUYkdsa1pUdGNjbHh1WEhSY2RGeDBYSFJ1WlhkVGJHbGtaUzVqYkdGemMweHBjM1F1WVdSa0tDZGhZM1JwZG1VbktUdGNjbHh1WEhSY2RGeDBmU0JsYkhObElHbG1JQ2h6Ykdsa1pVNTFiV0psY2lBcklERWdQVDA5SUdSaGRHRk1hWE4wTG5Oc2FXUmxjeTVzWlc1bmRHZ3BJSHRjY2x4dVhIUmNkRngwWEhSc1lYTjBVMnhwWkdVZ1BTQnVaWGRUYkdsa1pUdGNjbHh1WEhSY2RGeDBmVnh5WEc1Y2RGeDBmU2s3WEhKY2JseHlYRzVjZEZ4MGJtVjRkRk5zYVdSbEtDazdYSEpjYmx4MFhIUndjbVYyYVc5MWMxTnNhV1JsS0NrN1hISmNibHgwZlZ4eVhHNWNjbHh1WEhSbWRXNWpkR2x2YmlCdVpYaDBVMnhwWkdVb0tTQjdYSEpjYmx4MFhIUmpiMjV6ZENCdVpYaDBRblJ1SUQwZ1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvSjI1bGVIUW5LVHRjY2x4dVhISmNibHgwWEhSdVpYaDBRblJ1TG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjJOc2FXTnJKeXdnS0dVcElEMCtJSHRjY2x4dVhIUmNkRngwWTI5dWMzUWdZV04wYVhabFUyeHBaR1VnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2N1WTJGeWIzVnpaV3hmWDNOc2FXUmxMbUZqZEdsMlpTY3BPMXh5WEc1Y2NseHVYSFJjZEZ4MGJHVjBJRzVsZUhSVGFXSnNhVzVuSUQwZ1lXTjBhWFpsVTJ4cFpHVXVibVY0ZEVWc1pXMWxiblJUYVdKc2FXNW5PMXh5WEc1Y2NseHVYSFJjZEZ4MGFXWWdLRzVsZUhSVGFXSnNhVzVuSUQwOUlHNTFiR3dwSUh0Y2NseHVYSFJjZEZ4MFhIUnVaWGgwVTJsaWJHbHVaeUE5SUdGamRHbDJaVk5zYVdSbE8xeHlYRzVjZEZ4MFhIUjlYSEpjYmx4eVhHNWNkRngwWEhScFppQW9ibVY0ZEZOcFlteHBibWN1WTJ4aGMzTk1hWE4wTG1OdmJuUmhhVzV6S0NkallYSnZkWE5sYkY5ZmMyeHBaR1VuS1NrZ2UxeHlYRzVjZEZ4MFhIUmNkR0ZqZEdsMlpWTnNhV1JsTG1Oc1lYTnpUR2x6ZEM1eVpXMXZkbVVvSjJGamRHbDJaU2NwTzF4eVhHNWNkRngwWEhSY2RHNWxlSFJUYVdKc2FXNW5MbU5zWVhOelRHbHpkQzVoWkdRb0oyRmpkR2wyWlNjcE8xeHlYRzVjZEZ4MFhIUjlYSEpjYmx4MFhIUjlLVHRjY2x4dVhIUjlYSEpjYmx4eVhHNWNkR1oxYm1OMGFXOXVJSEJ5WlhacGIzVnpVMnhwWkdVb0tTQjdYSEpjYmx4MFhIUmpiMjV6ZENCd2NtVjJRblJ1SUQwZ1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvSjNCeVpYWW5LVHRjY2x4dVhISmNibHgwWEhSd2NtVjJRblJ1TG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjJOc2FXTnJKeXdnS0dVcElEMCtJSHRjY2x4dVhIUmNkRngwWTI5dWMzUWdZV04wYVhabFUyeHBaR1VnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2N1WTJGeWIzVnpaV3hmWDNOc2FXUmxMbUZqZEdsMlpTY3BPMXh5WEc1Y2NseHVYSFJjZEZ4MGJHVjBJRzVsZUhSVGFXSnNhVzVuSUQwZ1lXTjBhWFpsVTJ4cFpHVXVjSEpsZG1sdmRYTkZiR1Z0Wlc1MFUybGliR2x1Wnp0Y2NseHVYSEpjYmx4MFhIUmNkR2xtSUNodVpYaDBVMmxpYkdsdVp5QTlQU0J1ZFd4c0tTQjdYSEpjYmx4MFhIUmNkRngwYm1WNGRGTnBZbXhwYm1jZ1BTQmhZM1JwZG1WVGJHbGtaVHRjY2x4dVhIUmNkRngwZlZ4eVhHNWNjbHh1WEhSY2RGeDBhV1lnS0c1bGVIUlRhV0pzYVc1bkxtTnNZWE56VEdsemRDNWpiMjUwWVdsdWN5Z25ZMkZ5YjNWelpXeGZYM05zYVdSbEp5a3BJSHRjY2x4dVhIUmNkRngwWEhSaFkzUnBkbVZUYkdsa1pTNWpiR0Z6YzB4cGMzUXVjbVZ0YjNabEtDZGhZM1JwZG1VbktUdGNjbHh1WEhSY2RGeDBYSFJ1WlhoMFUybGliR2x1Wnk1amJHRnpjMHhwYzNRdVlXUmtLQ2RoWTNScGRtVW5LVHRjY2x4dVhIUmNkRngwZlZ4eVhHNWNkRngwZlNrN1hISmNibHgwZlZ4eVhHNWNjbHh1WEhScFppQW9ZMkZ5YjNWelpXd2dJVDA5SUc1MWJHd3BJSHRjY2x4dVhIUmNkQ2htZFc1amRHbHZiaUFvS1NCN1hISmNibHgwWEhSY2RHUnBjM0JzWVhsRFlYSnZkWE5sYkNncE8xeHlYRzVjZEZ4MGZTa29LVHRjY2x4dVhIUjlYSEpjYm4wcE8xeHlYRzRpTENKM2FXNWtiM2N1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduUkU5TlEyOXVkR1Z1ZEV4dllXUmxaQ2NzSUdaMWJtTjBhVzl1SUNncElIdGNjbHh1WEhRdkx5QjBZV0p6WEhKY2JseDBZMjl1YzNRZ2RHRmlUR2x6ZEVKMGJpQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNKQmJHd29KeTUwWVdKalkyOXlaR2x2Ymw5ZmJHbHpkQzFpZEc0bktUdGNjbHh1WEhSamIyNXpkQ0IwWVdKeklEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2tGc2JDZ25MblJoWW1OamIzSmthVzl1WDE5amIyNTBZV2x1WlhJbktUdGNjbHh1WEhSamIyNXpkQ0IwWVdKalkyOXlaR2x2Ymt4cGMzUWdQU0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDZ25kR0ZpWTJOdmNtUnBiMjR0YkdsemRDY3BPMXh5WEc1Y2RHTnZibk4wSUhSaFluTkRiMjUwWlc1MElEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2tGc2JDZ25MblJoWW1OamIzSmthVzl1WDE5MFlXSXRhVzV1WlhJbktUdGNjbHh1WEhSamIyNXpkQ0IwWVdKalkyOXlaR2x2YmlBOUlHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0NkMFlXSmpZMjl5WkdsdmJpY3BPMXh5WEc1Y2NseHVYSFJtZFc1amRHbHZiaUJoWTNScGRtRjBaVlJoWW5Nb0tTQjdYSEpjYmx4MFhIUjBZV0pNYVhOMFFuUnVMbVp2Y2tWaFkyZ29LSFJoWWlrZ1BUNGdlMXh5WEc1Y2RGeDBYSFIwWVdJdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblkyeHBZMnNuTENBb1pTa2dQVDRnZTF4eVhHNWNkRngwWEhSY2RHTnZibk4wSUhSaFlrNWhkaUE5SUhSaFlpNXdZWEpsYm5SRmJHVnRaVzUwTzF4eVhHNWNkRngwWEhSY2RHTnZibk4wSUhSaFluTkRiMjUwWVdsdVpYSWdQU0IwWVdKT1lYWXVjR0Z5Wlc1MFJXeGxiV1Z1ZEM1d1lYSmxiblJGYkdWdFpXNTBPMXh5WEc1Y2RGeDBYSFJjZEdOdmJuTjBJSFJoWWs1MWJXSmxjaUE5SUhSaFlpNWtZWFJoYzJWMExtWnZjbFJoWWp0Y2NseHVYSFJjZEZ4MFhIUmpiMjV6ZENCMFlXSlViMEZqZEdsMllYUmxJRDBnZEdGaWMwTnZiblJoYVc1bGNpNXhkV1Z5ZVZObGJHVmpkRzl5S0Z4eVhHNWNkRngwWEhSY2RGeDBZQzUwWVdKalkyOXlaR2x2Ymw5ZmRHRmlXMlJoZEdFdGRHRmlQVndpSkh0MFlXSk9kVzFpWlhKOVhDSmRZRnh5WEc1Y2RGeDBYSFJjZENrN1hISmNibHh5WEc1Y2RGeDBYSFJjZEhSaFlrNWhkaTV4ZFdWeWVWTmxiR1ZqZEc5eVFXeHNLQ2N1ZEdGaVkyTnZjbVJwYjI1ZlgyeHBjM1F0WW5SdUp5a3VabTl5UldGamFDZ29ZblJ1S1NBOVBpQjdYSEpjYmx4MFhIUmNkRngwWEhSaWRHNHVZMnhoYzNOTWFYTjBMbkpsYlc5MlpTZ25ZM1Z5Y21WdWRDY3BPMXh5WEc1Y2RGeDBYSFJjZEgwcE8xeHlYRzVjY2x4dVhIUmNkRngwWEhSMFlXSnpRMjl1ZEdGcGJtVnlMbkYxWlhKNVUyVnNaV04wYjNKQmJHd29KeTUwWVdKalkyOXlaR2x2Ymw5ZmRHRmlKeWt1Wm05eVJXRmphQ2dvZEdGaUtTQTlQaUI3WEhKY2JseDBYSFJjZEZ4MFhIUjBZV0l1WTJ4aGMzTk1hWE4wTG5KbGJXOTJaU2duWTNWeWNtVnVkQ2NwTzF4eVhHNWNkRngwWEhSY2RIMHBPMXh5WEc1Y2NseHVYSFJjZEZ4MFhIUjBZV0l1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25ZM1Z5Y21WdWRDY3BPMXh5WEc1Y2RGeDBYSFJjZEhSaFlsUnZRV04wYVhaaGRHVXVZMnhoYzNOTWFYTjBMbUZrWkNnblkzVnljbVZ1ZENjcE8xeHlYRzVjY2x4dVhIUmNkRngwWEhScFppQW9kMmx1Wkc5M0xtbHVibVZ5VjJsa2RHZ2dQajBnTmpBd0tTQjdYSEpjYmx4MFhIUmNkRngwWEhSMFlXSnpRMjl1ZEdWdWRDNW1iM0pGWVdOb0tDaDBZV0p6S1NBOVBpQjdYSEpjYmx4MFhIUmNkRngwWEhSY2RIUmhZbk11YzNSNWJHVXViV0Y0U0dWcFoyaDBJRDBnZEdGaWN5NXpZM0p2Ykd4SVpXbG5hSFFnS3lBbmNIZ25PMXh5WEc1Y2RGeDBYSFJjZEZ4MGZTazdYSEpjYmx4MFhIUmNkRngwZlZ4eVhHNWNkRngwWEhSOUtUdGNjbHh1WEhSY2RIMHBPMXh5WEc1Y2NseHVYSFJjZEdsbUlDaDBZV0pqWTI5eVpHbHZia3hwYzNRcElIdGNjbHh1WEhSY2RGeDBkR0ZpY3k1bWIzSkZZV05vS0NoMFlXSXBJRDArSUh0Y2NseHVYSFJjZEZ4MFhIUjBZV0l1Y1hWbGNubFRaV3hsWTNSdmNpZ25MblJoWW1OamIzSmthVzl1WDE5c2FYTjBJQzUwWVdKalkyOXlaR2x2Ymw5ZlluUnVKeWt1WTJ4cFkyc29LVHRjY2x4dVhIUmNkRngwZlNrN1hISmNibHgwWEhSOVhISmNibHh5WEc1Y2RGeDBMeW9nWEhSM2FXNWtiM2N1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduY21WemFYcGxKeXdnS0dVcElEMCtJSHRjY2x4dVhIUmNkRngwYVdZZ0tIZHBibVJ2ZHk1cGJtNWxjbGRwWkhSb0lENDlJRFl3TUNrZ2UxeHlYRzVjZEZ4MFhIUmNkR0ZqZEdsMllYUmxWR0ZpY3lncE8xeHlYRzVjZEZ4MFhIUjlYSEpjYmx4MFhIUjlLVHNnS2k5Y2NseHVYSFI5WEhKY2JseHlYRzVjZEM4dkx5OHZJR0ZqWTI5eVpHbHZibHh5WEc1Y2RHTnZibk4wSUdGalkyOXlaR2x2YmtKMGJpQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNKQmJHd29KeTVoWTJOdmNtUnBiMjVmWDJ4cGMzUXRZblJ1SnlrN1hISmNibHh5WEc1Y2RHWjFibU4wYVc5dUlHRmpkR2wyWVhSbFFXTmpiM0prYVc5dUtDa2dlMXh5WEc1Y2RGeDBZV05qYjNKa2FXOXVRblJ1TG1admNrVmhZMmdvS0dKMGJpa2dQVDRnZTF4eVhHNWNkRngwWEhSaWRHNHVZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25ZMnhwWTJzbkxDQW9LU0E5UGlCN1hISmNibHgwWEhSY2RGeDBMeThnWTJobFkyc2dabTl5SUc5d1pXNGdZV05qYjNKa2FXOXVYSEpjYmx4MFhIUmNkRngwWTI5dWMzUWdZV05qYjNKa2FXOXVRblJ1VDNCbGJpQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb1hISmNibHgwWEhSY2RGeDBYSFFuTG1GalkyOXlaR2x2Ymw5ZmJHbHpkQzFpZEc0dWIzQmxiaWRjY2x4dVhIUmNkRngwWEhRcE8xeHlYRzVjY2x4dVhIUmNkRngwWEhScFppQW9ZV05qYjNKa2FXOXVRblJ1VDNCbGJpQW1KaUJoWTJOdmNtUnBiMjVDZEc1UGNHVnVJQ0U5UFNCaWRHNHBJSHRjY2x4dVhIUmNkRngwWEhSY2RDOHZJR2xtSUhSb1pYSmxJR2x6SUc5d1pXNGdkR2hsYmlCeVpXMXZkbVVnYjNCbGJpQmpiR0Z6Y3lCaGJtUWdjMlYwSUcxaGVHaGxhV2RvZENCMGJ5QXdYSEpjYmx4MFhIUmNkRngwWEhSaFkyTnZjbVJwYjI1Q2RHNVBjR1Z1TG1Oc1lYTnpUR2x6ZEM1MGIyZG5iR1VvSjI5d1pXNG5LVHRjY2x4dVhIUmNkRngwWEhSY2RHRmpZMjl5WkdsdmJrSjBiazl3Wlc0dWJtVjRkRVZzWlcxbGJuUlRhV0pzYVc1bkxuTjBlV3hsTG0xaGVFaGxhV2RvZENBOUlEQTdYSEpjYmx4MFhIUmNkRngwZlZ4eVhHNWNjbHh1WEhSY2RGeDBYSFF2THlCelpYUWdiM0JsYmlCamJHRnpjeUIwYnlCbGRtVnllU0JqYkdsamEyVmtJR0ZqWTI5eVpHbHZiaUJpZEc1Y2NseHVYSFJjZEZ4MFhIUmlkRzR1WTJ4aGMzTk1hWE4wTG5SdloyZHNaU2duYjNCbGJpY3BPMXh5WEc1Y2RGeDBYSFJjZEdOdmJuTjBJR0ZqWTI5eVpHbHZia0p2WkhrZ1BTQmlkRzR1Ym1WNGRFVnNaVzFsYm5SVGFXSnNhVzVuTzF4eVhHNWNjbHh1WEhSY2RGeDBYSFJwWmlBb1luUnVMbU5zWVhOelRHbHpkQzVqYjI1MFlXbHVjeWduYjNCbGJpY3BLU0I3WEhKY2JseDBYSFJjZEZ4MFhIUmhZMk52Y21ScGIyNUNiMlI1TG5OMGVXeGxMbTFoZUVobGFXZG9kQ0E5SUdGalkyOXlaR2x2YmtKdlpIa3VjMk55YjJ4c1NHVnBaMmgwSUNzZ0ozQjRKenRjY2x4dVhIUmNkRngwWEhSOUlHVnNjMlVnZTF4eVhHNWNkRngwWEhSY2RGeDBZV05qYjNKa2FXOXVRbTlrZVM1emRIbHNaUzV0WVhoSVpXbG5hSFFnUFNBd08xeHlYRzVjZEZ4MFhIUmNkSDFjY2x4dVhIUmNkRngwZlNrN1hISmNibHgwWEhSOUtUdGNjbHh1WEhKY2JseDBYSFIzYVc1a2IzY3VZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25jbVZ6YVhwbEp5d2dLR1VwSUQwK0lIdGNjbHh1WEhSY2RGeDBhV1lnS0hkcGJtUnZkeTVwYm01bGNsZHBaSFJvSUR3Z05qQXdLU0I3WEhKY2JseDBYSFJjZEZ4MGRHRmljME52Ym5SbGJuUXVabTl5UldGamFDZ29kR0ZpY3lrZ1BUNGdlMXh5WEc1Y2RGeDBYSFJjZEZ4MGRHRmljeTV6ZEhsc1pTNXRZWGhJWldsbmFIUWdQU0F3TzF4eVhHNWNkRngwWEhSY2RGeDBhV1lnS0hSaFluTXVjSEpsZG1sdmRYTkZiR1Z0Wlc1MFUybGliR2x1Wnk1amJHRnpjMHhwYzNRdVkyOXVkR0ZwYm5Nb0oyOXdaVzRuS1NrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhSMFlXSnpMbkJ5WlhacGIzVnpSV3hsYldWdWRGTnBZbXhwYm1jdVkyeGhjM05NYVhOMExuSmxiVzkyWlNnbmIzQmxiaWNwTzF4eVhHNWNkRngwWEhSY2RGeDBmVnh5WEc1Y2RGeDBYSFJjZEgwcE8xeHlYRzVjZEZ4MFhIUjlYSEpjYmx4MFhIUjlLVHRjY2x4dVhIUjlYSEpjYmx4eVhHNWNkR2xtSUNoMFlXSmpZMjl5WkdsdmJpa2dlMXh5WEc1Y2RGeDBZV04wYVhaaGRHVlVZV0p6S0NrN1hISmNibHgwWEhSaFkzUnBkbUYwWlVGalkyOXlaR2x2YmlncE8xeHlYRzVjZEgxY2NseHVmU2s3WEhKY2JpSmRMQ0p6YjNWeVkyVlNiMjkwSWpvaUluMD0ifQ==
