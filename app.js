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
				.then((resp) => {
					if (!resp.ok) {
						throw Error(`${resp.statusText} - ${resp.url}`);
					}
					return resp.json();
				})
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Fkb3B0Q29udGVudFN3aXRjaGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9mZXRjaEFuaW1hbHNEYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9mb3JtVmFsaWRhaXRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbmF2LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RhYmNjb3JkaW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRztBQUNILEVBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOERBQThELE9BQU87QUFDckU7QUFDQSxnQ0FBZ0MsT0FBTztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ2pDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsZ0JBQWdCLEtBQUssU0FBUztBQUNuRDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EseUNBQXlDLFVBQVUsU0FBUyxTQUFTO0FBQ3JFO0FBQ0EsS0FBSyxFQUFFO0FBQ1A7QUFDQTtBQUNBLDBEQUEwRCxTQUFTO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixFQUFFLFdBQVc7QUFDOUI7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFLFlBQVk7QUFDNUU7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQSwwRUFBMEUsTUFBTTtBQUNoRjtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0Msa0NBQWtDO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxrQ0FBa0M7QUFDakY7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGtDQUFrQztBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx5Q0FBeUMsVUFBVSxTQUFTLFNBQVM7QUFDckU7QUFDQSxLQUFLLEVBQUU7QUFDUDtBQUNBO0FBQ0EsMERBQTBELFNBQVM7QUFDbkU7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLEVBQUUsV0FBVztBQUM5QjtBQUNBLDBDQUEwQztBQUMxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0UsWUFBWTtBQUM1RTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRSxTQUFTO0FBQ25GO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxrQ0FBa0M7QUFDakY7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGtDQUFrQztBQUNqRjtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0Msa0NBQWtDO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxrQkFBa0IsbUJBQW1CO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNwbUJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDLHlCQUF5Qiw2QkFBNkIsSUFBSSxRQUFRLElBQUksUUFBUSxJQUFJLFFBQVEsSUFBSSxnQ0FBZ0MsR0FBRztBQUNsSztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ3ZGRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFO0FBQ0YsQ0FBQzs7Ozs7Ozs7Ozs7O0FDZkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOzs7Ozs7Ozs7Ozs7QUNwQkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQSxxQ0FBcUMsWUFBWTtBQUNqRCxtQ0FBbUMsY0FBYztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ2pHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxVQUFVO0FBQzlDOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsSUFBSTtBQUNKLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuXHRoaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBudWxsLCAnICcpO1xyXG5cdGNvbnN0IHRhYlN3aXRjaGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXN3aXRjaGVyXScpO1xyXG5cclxuXHR0YWJTd2l0Y2hlcnMuZm9yRWFjaCgodGFiU3dpdGNoKSA9PiB7XHJcblx0XHRjb25zdCB0YWJTd2l0Y2hlciA9IHRhYlN3aXRjaDtcclxuXHRcdGNvbnN0IHBhZ2VJZCA9IHRhYlN3aXRjaGVyLmRhdGFzZXQudGFiO1xyXG5cclxuXHRcdHRhYlN3aXRjaGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHRcdFx0ZG9jdW1lbnRcclxuXHRcdFx0XHQucXVlcnlTZWxlY3RvcignLmFkb3B0X19saXN0LWl0ZW0uYWN0aXZlJylcclxuXHRcdFx0XHQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblxyXG5cdFx0XHR0YWJTd2l0Y2hlci5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRzd2l0Y2hQYWdlKHBhZ2VJZCk7XHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHJcblx0ZnVuY3Rpb24gc3dpdGNoUGFnZShwYWdlSWQpIHtcclxuXHRcdGNvbnN0IGN1cnJlbnRQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UuYWN0aXZlJyk7XHJcblx0XHRjb25zdCBjdXJyZW50UGFnZUhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLWhlYWRlci5hY3RpdmUnKTtcclxuXHJcblx0XHRjdXJyZW50UGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdGN1cnJlbnRQYWdlSGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cclxuXHRcdGNvbnN0IG5leHRQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBhZ2VbZGF0YS1wYWdlPVwiJHtwYWdlSWR9XCJdYCk7XHJcblx0XHRjb25zdCBuZXh0UGFnZUhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdGAucGFnZS1oZWFkZXJbZGF0YS1oZWFkZXI9XCIke3BhZ2VJZH1cIl1gXHJcblx0XHQpO1xyXG5cdFx0bmV4dFBhZ2UuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblx0XHRuZXh0UGFnZUhlYWRlci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHR9XHJcbn0pO1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IGFuaW1hbHNVcmwgPSAnLi4vanMvYW5pbWFscy5qc29uJztcclxuXHRjb25zdCBhbmltYWxzUGFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5pbWFscy1wYWdlcycpO1xyXG5cdGNvbnN0IGRvZ3NCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG9ncy1ib3gnKTtcclxuXHRjb25zdCBjYXRzQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdHMtYm94Jyk7XHJcblxyXG5cdGZ1bmN0aW9uIGdldEFuaW1hbHNEYXRhKCkge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0ZmV0Y2goYW5pbWFsc1VybClcclxuXHRcdFx0XHQudGhlbigocmVzcCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKCFyZXNwLm9rKSB7XHJcblx0XHRcdFx0XHRcdHRocm93IEVycm9yKGAke3Jlc3Auc3RhdHVzVGV4dH0gLSAke3Jlc3AudXJsfWApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cmV0dXJuIHJlc3AuanNvbigpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LnRoZW4oKGRhdGEpID0+IHJlc29sdmUoZGF0YSkpXHJcblx0XHRcdFx0LmNhdGNoKChlcnIpID0+IHJlamVjdChlcnIpKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgZG9nTnVtYmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RvZ051bWJlcicpO1xyXG5cdGNvbnN0IGNhdE51bWJlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXROdW1iZXInKTtcclxuXHJcblx0YXN5bmMgZnVuY3Rpb24gZGlzcGxheUFuaW1hbE51bWJlcnMoKSB7XHJcblx0XHRjb25zdCBkYXRhTGlzdCA9IGF3YWl0IGdldEFuaW1hbHNEYXRhKCk7XHJcblx0XHRjb25zdCBhbmltYWxzQXJyYXkgPSBkYXRhTGlzdC5hbmltYWxzO1xyXG5cclxuXHRcdGxldCBkb2dzQXJyYXlOdW1iZXIgPSBhbmltYWxzQXJyYXlbMF0uZG9ncy5sZW5ndGg7XHJcblx0XHRsZXQgY2F0c0FycmF5TnVtYmVyID0gYW5pbWFsc0FycmF5WzBdLmNhdHMubGVuZ3RoO1xyXG5cclxuXHRcdGRvZ051bWJlci5pbm5lclRleHQgPSBkb2dzQXJyYXlOdW1iZXI7XHJcblx0XHRjYXROdW1iZXIuaW5uZXJUZXh0ID0gY2F0c0FycmF5TnVtYmVyO1xyXG5cdH1cclxuXHJcblx0aWYgKChkb2dOdW1iZXIsIGNhdE51bWJlcikpIHtcclxuXHRcdChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGRpc3BsYXlBbmltYWxOdW1iZXJzKCk7XHJcblx0XHR9KSgpO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgZnVuY3Rpb24gZGlzcGxheUFuaW1hbHMoKSB7XHJcblx0XHRjb25zdCBkYXRhTGlzdCA9IGF3YWl0IGdldEFuaW1hbHNEYXRhKCk7XHJcblx0XHRjb25zdCBhbmltYWxzQXJyYXkgPSBkYXRhTGlzdC5hbmltYWxzO1xyXG5cclxuXHRcdGFuaW1hbHNBcnJheS5mb3JFYWNoKChhbmltYWwpID0+IHtcclxuXHRcdFx0ZG9nc0FycmF5ID0gYW5pbWFsLmRvZ3M7XHJcblx0XHRcdGNhdHNBcnJheSA9IGFuaW1hbC5jYXRzO1xyXG5cclxuXHRcdFx0ZG9nc0FycmF5LmZvckVhY2goKGRvZykgPT4ge1xyXG5cdFx0XHRcdGRvZ0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0XHRcdGRvZ0JveC5jbGFzc0xpc3QuYWRkKCdwYWdlX19ib3gnKTtcclxuXHJcblx0XHRcdFx0Y29uc3QgZG9nWWVhcnMgPSBkb2cuYmlydGg7XHJcblxyXG5cdFx0XHRcdGNvbnN0IG1pbGlzZWNzQmV0d2VlbkRPQmFuZDE5NzAgPSBEYXRlLnBhcnNlKGRvZ1llYXJzKTtcclxuXHRcdFx0XHRjb25zdCBtaWxpc2Vjc0JldHdlZW5OT1dhbmQxOTcwID0gRGF0ZS5ub3coKTtcclxuXHRcdFx0XHRjb25zdCBhZ2VJbk1pbGlzZWNzID1cclxuXHRcdFx0XHRcdG1pbGlzZWNzQmV0d2Vlbk5PV2FuZDE5NzAgLSBtaWxpc2Vjc0JldHdlZW5ET0JhbmQxOTcwO1xyXG5cclxuXHRcdFx0XHRjb25zdCBtaWxpc2VjcyA9IGFnZUluTWlsaXNlY3M7XHJcblx0XHRcdFx0Y29uc3Qgc2VjcyA9IDEwMDA7XHJcblx0XHRcdFx0Y29uc3QgbWlucyA9IHNlY3MgKiA2MDtcclxuXHRcdFx0XHRjb25zdCBob3VyID0gbWlucyAqIDYwO1xyXG5cdFx0XHRcdGNvbnN0IGRheSA9IGhvdXIgKiAyNDtcclxuXHRcdFx0XHRjb25zdCB5ZWFyID0gZGF5ICogMzY1O1xyXG5cclxuXHRcdFx0XHRsZXQgeWVhcnMgPSBNYXRoLnJvdW5kKG1pbGlzZWNzIC8geWVhcik7XHJcblxyXG5cdFx0XHRcdGRvZ0JveC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlX19ib3gtdG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4ke2RvZy5pbWFnZX1cIiBhbHQ9XCIke2RvZy5uYW1lfSAke1xyXG5cdFx0XHRcdFx0ZG9nLnNwZWNpZXNcclxuXHRcdFx0XHR9XCJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlX19ib3gtYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJwYWdlX19ib3gtdGl0bGVcIj4ke2RvZy5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZV9fYm94LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXhwYW5kTW9yZUNvbnRlbnRcIiBpZD1cInNob3dNb3JlLSR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkb2cuc3BlY2llc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0ke2RvZy5udW1iZXJ9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicGFnZV9fYm94LXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7ZG9nLmRlc2N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleHBhbmRNb3JlSG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZC1tb3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWhpZGV0ZXh0PVwiLi4uUmVhZCBsZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtc2hvd3RleHQ9XCIuLi5SZWFkIG1vcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCJzaG93TW9yZS0ke2RvZy5zcGVjaWVzfSR7XHJcblx0XHRcdFx0XHRkb2cubnVtYmVyXHJcblx0XHRcdFx0fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ1dHRvbiBzaG93TW9yZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLlJlYWQgbW9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJwYWdlX19ib3gtaWNvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS13ZWlnaHRcIj48L2lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxzcGFuIGNsYXNzPVwicGFnZV9fYm94LWljb24tLXRleHRcIj4ke1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRvZy53ZWlnaHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSBrZzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VfX2JveC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWFycm93cy1hbHQtdlwiPjwvaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PHNwYW4gY2xhc3M9XCJwYWdlX19ib3gtaWNvbi0tdGV4dFwiPiR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZG9nLmhlaWdodFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9Y208L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jYWxlbmRhci1jaGVja1wiPjwvaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PHNwYW4gY2xhc3M9XCJwYWdlX19ib3gtaWNvbi0tdGV4dFwiPiR7eWVhcnN9IHlyLjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VfX2JveC1pY29uXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVwiZmFzIGZhLXBhbGV0dGVcIj48L2lcclxuXHRcdFx0XHRcdFx0XHRcdFx0PjxzcGFuIGNsYXNzPVwicGFnZV9fYm94LWljb24tLXRleHRcIj4ke2RvZy5jb2xvclswXSA/IGRvZy5jb2xvclswXSA6ICctJ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cImZhcyBmYS1wYWxldHRlXCI+PC9pXHJcblx0XHRcdFx0XHRcdFx0XHRcdD48c3BhbiBjbGFzcz1cInBhZ2VfX2JveC1pY29uLS10ZXh0XCI+JHtkb2cuY29sb3JbMV0gPyBkb2cuY29sb3JbMV0gOiAnLSd9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZV9fYm94LWljb25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJmYXMgZmEtcGFsZXR0ZVwiPjwvaVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+PHNwYW4gY2xhc3M9XCJwYWdlX19ib3gtaWNvbi0tdGV4dFwiPiR7ZG9nLmNvbG9yWzJdID8gZG9nLmNvbG9yWzJdIDogJy0nfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZV9fYm94LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtcGF3XCI+PC9pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48c3BhbiBjbGFzcz1cInBhZ2VfX2JveC1pY29uLS10ZXh0XCI+JHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkb2cuY29hdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZV9fYm94LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdmVudXMtbWFyc1wiPjwvaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PHNwYW4gY2xhc3M9XCJwYWdlX19ib3gtaWNvbi0tdGV4dFwiPiR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZG9nLmdlbmRlclxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIGA7XHJcblxyXG5cdFx0XHRcdGRvZ3NCb3guYXBwZW5kQ2hpbGQoZG9nQm94KTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRjYXRzQXJyYXkuZm9yRWFjaCgoY2F0KSA9PiB7XHJcblx0XHRcdFx0Y2F0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRcdFx0Y2F0Qm94LmNsYXNzTGlzdC5hZGQoJ3BhZ2VfX2JveCcpO1xyXG5cclxuXHRcdFx0XHRjb25zdCBjYXRZZWFycyA9IGNhdC5iaXJ0aDtcclxuXHJcblx0XHRcdFx0Y29uc3QgbWlsaXNlY3NCZXR3ZWVuRE9CYW5kMTk3MGNhdCA9IERhdGUucGFyc2UoY2F0WWVhcnMpO1xyXG5cdFx0XHRcdGNvbnN0IG1pbGlzZWNzQmV0d2Vlbk5PV2FuZDE5NzAgPSBEYXRlLm5vdygpO1xyXG5cclxuXHRcdFx0XHRjb25zdCBhZ2VJbk1pbGlzZWNzQ2F0ID1cclxuXHRcdFx0XHRcdG1pbGlzZWNzQmV0d2Vlbk5PV2FuZDE5NzAgLSBtaWxpc2Vjc0JldHdlZW5ET0JhbmQxOTcwY2F0O1xyXG5cclxuXHRcdFx0XHRjb25zdCBtaWxpc2Vjc0NhdCA9IGFnZUluTWlsaXNlY3NDYXQ7XHJcblx0XHRcdFx0Y29uc3Qgc2VjcyA9IDEwMDA7XHJcblx0XHRcdFx0Y29uc3QgbWlucyA9IHNlY3MgKiA2MDtcclxuXHRcdFx0XHRjb25zdCBob3VyID0gbWlucyAqIDYwO1xyXG5cdFx0XHRcdGNvbnN0IGRheSA9IGhvdXIgKiAyNDtcclxuXHRcdFx0XHRjb25zdCB5ZWFyID0gZGF5ICogMzY1O1xyXG5cclxuXHRcdFx0XHRsZXQgeWVhcnNDYXQgPSBNYXRoLnJvdW5kKG1pbGlzZWNzQ2F0IC8geWVhcik7XHJcblxyXG5cdFx0XHRcdGNhdEJveC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlX19ib3gtdG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4ke2NhdC5pbWFnZX1cIiBhbHQ9XCIke2NhdC5uYW1lfSAke1xyXG5cdFx0XHRcdFx0Y2F0LnNwZWNpZXNcclxuXHRcdFx0XHR9XCJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlX19ib3gtYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJwYWdlX19ib3gtdGl0bGVcIj4ke2NhdC5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZV9fYm94LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXhwYW5kTW9yZUNvbnRlbnRcIiBpZD1cInNob3dNb3JlLSR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjYXQuc3BlY2llc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0ke2NhdC5udW1iZXJ9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicGFnZV9fYm94LXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7Y2F0LmRlc2N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleHBhbmRNb3JlSG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZC1tb3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWhpZGV0ZXh0PVwiLi4uUmVhZCBsZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtc2hvd3RleHQ9XCIuLi5SZWFkIG1vcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCJzaG93TW9yZS0ke2NhdC5zcGVjaWVzfSR7XHJcblx0XHRcdFx0XHRjYXQubnVtYmVyXHJcblx0XHRcdFx0fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ1dHRvbiBzaG93TW9yZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLlJlYWQgbW9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJwYWdlX19ib3gtaWNvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS13ZWlnaHRcIj48L2lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxzcGFuIGNsYXNzPVwicGFnZV9fYm94LWljb24tLXRleHRcIj4ke1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNhdC53ZWlnaHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSBrZzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VfX2JveC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWFycm93cy1hbHQtdlwiPjwvaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PHNwYW4gY2xhc3M9XCJwYWdlX19ib3gtaWNvbi0tdGV4dFwiPiR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2F0LmhlaWdodFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9Y208L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jYWxlbmRhci1jaGVja1wiPjwvaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PHNwYW4gY2xhc3M9XCJwYWdlX19ib3gtaWNvbi0tdGV4dFwiPiR7eWVhcnNDYXR9IHlyLjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VfX2JveC1pY29uXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVwiZmFzIGZhLXBhbGV0dGVcIj48L2lcclxuXHRcdFx0XHRcdFx0XHRcdFx0PjxzcGFuIGNsYXNzPVwicGFnZV9fYm94LWljb24tLXRleHRcIj4ke2NhdC5jb2xvclswXSA/IGNhdC5jb2xvclswXSA6ICctJ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cImZhcyBmYS1wYWxldHRlXCI+PC9pXHJcblx0XHRcdFx0XHRcdFx0XHRcdD48c3BhbiBjbGFzcz1cInBhZ2VfX2JveC1pY29uLS10ZXh0XCI+JHtjYXQuY29sb3JbMV0gPyBjYXQuY29sb3JbMV0gOiAnLSd9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZV9fYm94LWljb25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJmYXMgZmEtcGFsZXR0ZVwiPjwvaVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+PHNwYW4gY2xhc3M9XCJwYWdlX19ib3gtaWNvbi0tdGV4dFwiPiR7Y2F0LmNvbG9yWzJdID8gY2F0LmNvbG9yWzJdIDogJy0nfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZV9fYm94LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtcGF3XCI+PC9pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48c3BhbiBjbGFzcz1cInBhZ2VfX2JveC1pY29uLS10ZXh0XCI+JHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjYXQuY29hdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZV9fYm94LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdmVudXMtbWFyc1wiPjwvaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PHNwYW4gY2xhc3M9XCJwYWdlX19ib3gtaWNvbi0tdGV4dFwiPiR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2F0LmdlbmRlclxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIGA7XHJcblxyXG5cdFx0XHRcdGNhdHNCb3guYXBwZW5kQ2hpbGQoY2F0Qm94KTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRsZXQgZG9nQm94QXJyYXkgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2RvZ3MtYm94IC5wYWdlX19ib3gnKV07XHJcblx0XHRsZXQgY2F0Qm94QXJyYXkgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NhdHMtYm94IC5wYWdlX19ib3gnKV07XHJcblx0XHRsZXQgY3VycmVudFBhZ2UgPSAxO1xyXG5cdFx0bGV0IGVsZW1lbnRzT25QYWdlID0gNDtcclxuXHJcblx0XHRjb25zdCBwYWdpbmF0aW9uRWxEb2dzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RvZ3MtcGFnaW5hdGlvbicpO1xyXG5cdFx0Y29uc3QgcGFnaW5hdGlvbkVsQ2F0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRzLXBhZ2luYXRpb24nKTtcclxuXHJcblx0XHRmdW5jdGlvbiBkaXNwbGF5UGFnaW5hdGVkSXRlbXMoaXRlbXMsIHdyYXBwZXIsIGl0ZW1zUGVyUGFnZSwgcGFnZSkge1xyXG5cdFx0XHR3cmFwcGVyLmlubmVySFRNTCA9ICcnO1xyXG5cdFx0XHRwYWdlLS07XHJcblxyXG5cdFx0XHRsZXQgc3RhcnQgPSBpdGVtc1BlclBhZ2UgKiBwYWdlO1xyXG5cdFx0XHRsZXQgZW5kID0gc3RhcnQgKyBpdGVtc1BlclBhZ2U7XHJcblx0XHRcdGxldCBwYWdpbmF0ZWRJdGVtcyA9IGl0ZW1zLnNsaWNlKHN0YXJ0LCBlbmQpO1xyXG5cclxuXHRcdFx0cGFnaW5hdGVkSXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG5cdFx0XHRcdGxldCBpdGVtRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdFx0XHRpdGVtRWwuY2xhc3NMaXN0LmFkZCgncGFnZV9fYm94Jyk7XHJcblxyXG5cdFx0XHRcdGl0ZW1FbCA9IGl0ZW07XHJcblxyXG5cdFx0XHRcdHdyYXBwZXIuYXBwZW5kQ2hpbGQoaXRlbUVsKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gZGlzcGxheVBhZ2luYXRpb24oaXRlbXMsIHdyYXBwZXIsIGl0ZW1zUGVyUGFnZSkge1xyXG5cdFx0XHR3cmFwcGVyLmlubmVySFRNTCA9ICcnO1xyXG5cclxuXHRcdFx0bGV0IHBhZ2VDb3VudCA9IE1hdGguY2VpbChpdGVtcy5sZW5ndGggLyBpdGVtc1BlclBhZ2UpO1xyXG5cclxuXHRcdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCBwYWdlQ291bnQgKyAxOyBpKyspIHtcclxuXHRcdFx0XHRsZXQgYnRuID0gcGFnaW5hdGlvbkJ1dHRvbihpLCBwYWdlQ291bnQpO1xyXG5cclxuXHRcdFx0XHRidG4uc3R5bGUud2lkdGggPSAnMCc7XHJcblx0XHRcdFx0YnRuLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcblx0XHRcdFx0YnRuLnN0eWxlLm1hcmdpbiA9ICcwJztcclxuXHJcblx0XHRcdFx0d3JhcHBlci5hcHBlbmRDaGlsZChidG4pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRsZXQgbmV4dEJ0biA9IG5leHRQYWdlKHBhZ2VDb3VudCk7XHJcblx0XHRcdHdyYXBwZXIuYXBwZW5kQ2hpbGQobmV4dEJ0bik7XHJcblxyXG5cdFx0XHRsZXQgcHJldkJ0biA9IHByZXZQYWdlKHBhZ2VDb3VudCk7XHJcblx0XHRcdHdyYXBwZXIucHJlcGVuZChwcmV2QnRuKTtcclxuXHJcblx0XHRcdGxldCBjdXJyZW50QnRuRG9ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdFx0JyNkb2dzIC5wYWdpbmF0aW9uLWJ0bi5hY3RpdmUnXHJcblx0XHRcdCk7XHJcblx0XHRcdGxldCBjdXJyZW50QnRuQ2F0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdFx0JyNjYXRzIC5wYWdpbmF0aW9uLWJ0bi5hY3RpdmUnXHJcblx0XHRcdCk7XHJcblxyXG5cdFx0XHRpZiAoY3VycmVudEJ0bkRvZ3MgJiYgY3VycmVudEJ0bkNhdHMpIHtcclxuXHRcdFx0XHRjdXJyZW50QnRuRG9ncy5jbGFzc0xpc3QuYWRkKCdncm91cCcpO1xyXG5cdFx0XHRcdGN1cnJlbnRCdG5Eb2dzLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdncm91cCcpO1xyXG5cdFx0XHRcdGN1cnJlbnRCdG5Eb2dzLm5leHRFbGVtZW50U2libGluZy5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZChcclxuXHRcdFx0XHRcdCdncm91cCdcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdGN1cnJlbnRCdG5Eb2dzLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnZ3JvdXAnKTtcclxuXHJcblx0XHRcdFx0Y3VycmVudEJ0bkNhdHMuY2xhc3NMaXN0LmFkZCgnZ3JvdXAnKTtcclxuXHRcdFx0XHRjdXJyZW50QnRuQ2F0cy5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnZ3JvdXAnKTtcclxuXHRcdFx0XHRjdXJyZW50QnRuQ2F0cy5uZXh0RWxlbWVudFNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoXHJcblx0XHRcdFx0XHQnZ3JvdXAnXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHRjdXJyZW50QnRuQ2F0cy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2dyb3VwJyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBuZXh0UGFnZShwYWdlQ291bnQpIHtcclxuXHRcdFx0bGV0IG5leHRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHRcdFx0bmV4dEJ0bi5jbGFzc0xpc3QuYWRkKCduZXh0Jyk7XHJcblx0XHRcdG5leHRCdG4uaW5uZXJUZXh0ID0gJz4nO1xyXG5cdFx0XHRuZXh0QnRuLmNsYXNzTGlzdC5hZGQoJ3BhZ2luYXRpb24tYnRuJyk7XHJcblxyXG5cdFx0XHRuZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHRcdFx0XHRpZiAobmV4dEJ0bi5wYXJlbnRFbGVtZW50ID09IHBhZ2luYXRpb25FbERvZ3MpIHtcclxuXHRcdFx0XHRcdGRpc3BsYXlQYWdpbmF0ZWRJdGVtcyhcclxuXHRcdFx0XHRcdFx0ZG9nQm94QXJyYXksXHJcblx0XHRcdFx0XHRcdGRvZ3NCb3gsXHJcblx0XHRcdFx0XHRcdGVsZW1lbnRzT25QYWdlLFxyXG5cdFx0XHRcdFx0XHRjdXJyZW50UGFnZVxyXG5cdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHRsZXQgYWN0aXZlQnRuRG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuXHRcdFx0XHRcdFx0JyNkb2dzIC5wYWdpbmF0aW9uLWJ0bi5hY3RpdmUnXHJcblx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdGFjdGl2ZUJ0bkRvZy5uZXh0RWxlbWVudFNpYmxpbmcuY2xpY2soKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoY3VycmVudFBhZ2UgPT09IHBhZ2VDb3VudCkge1xyXG5cdFx0XHRcdFx0XHRuZXh0QnRuLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcclxuXHRcdFx0XHRcdFx0bmV4dEJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGxldCBwcmV2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RvZ3MgLnByZXYnKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoY3VycmVudFBhZ2UgIT09IDEpIHtcclxuXHRcdFx0XHRcdFx0cHJldkJ0bi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG5cdFx0XHRcdFx0XHRwcmV2QnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYWxsJztcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRpZiAoYWN0aXZlQnRuRG9nKSB7XHJcblx0XHRcdFx0XHRcdGFjdGl2ZUJ0bkRvZy5jbGFzc0xpc3QuYWRkKCdncm91cCcpO1xyXG5cdFx0XHRcdFx0XHRhY3RpdmVCdG5Eb2cubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2dyb3VwJyk7XHJcblx0XHRcdFx0XHRcdGFjdGl2ZUJ0bkRvZy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2dyb3VwJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAobmV4dEJ0bi5wYXJlbnRFbGVtZW50ID09IHBhZ2luYXRpb25FbENhdHMpIHtcclxuXHRcdFx0XHRcdGRpc3BsYXlQYWdpbmF0ZWRJdGVtcyhcclxuXHRcdFx0XHRcdFx0Y2F0Qm94QXJyYXksXHJcblx0XHRcdFx0XHRcdGNhdHNCb3gsXHJcblx0XHRcdFx0XHRcdGVsZW1lbnRzT25QYWdlLFxyXG5cdFx0XHRcdFx0XHRjdXJyZW50UGFnZVxyXG5cdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHRsZXQgYWN0aXZlQnRuQ2F0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuXHRcdFx0XHRcdFx0JyNjYXRzIC5wYWdpbmF0aW9uLWJ0bi5hY3RpdmUnXHJcblx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdGFjdGl2ZUJ0bkNhdC5uZXh0RWxlbWVudFNpYmxpbmcuY2xpY2soKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoY3VycmVudFBhZ2UgPT09IHBhZ2VDb3VudCkge1xyXG5cdFx0XHRcdFx0XHRuZXh0QnRuLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcclxuXHRcdFx0XHRcdFx0bmV4dEJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGxldCBwcmV2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhdHMgLnByZXYnKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoY3VycmVudFBhZ2UgIT09IDEpIHtcclxuXHRcdFx0XHRcdFx0cHJldkJ0bi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG5cdFx0XHRcdFx0XHRwcmV2QnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYWxsJztcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRpZiAoYWN0aXZlQnRuQ2F0KSB7XHJcblx0XHRcdFx0XHRcdGFjdGl2ZUJ0bkNhdC5jbGFzc0xpc3QuYWRkKCdncm91cCcpO1xyXG5cdFx0XHRcdFx0XHRhY3RpdmVCdG5DYXQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2dyb3VwJyk7XHJcblx0XHRcdFx0XHRcdGFjdGl2ZUJ0bkNhdC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2dyb3VwJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiBuZXh0QnRuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHByZXZQYWdlKHBhZ2VDb3VudCkge1xyXG5cdFx0XHRsZXQgcHJldkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cdFx0XHRwcmV2QnRuLmNsYXNzTGlzdC5hZGQoJ3ByZXYnKTtcclxuXHRcdFx0cHJldkJ0bi5pbm5lclRleHQgPSAnPCc7XHJcblx0XHRcdHByZXZCdG4uY2xhc3NMaXN0LmFkZCgncGFnaW5hdGlvbi1idG4nKTtcclxuXHJcblx0XHRcdHByZXZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0XHRcdGlmIChwcmV2QnRuLnBhcmVudEVsZW1lbnQgPT0gcGFnaW5hdGlvbkVsRG9ncykge1xyXG5cdFx0XHRcdFx0ZGlzcGxheVBhZ2luYXRlZEl0ZW1zKFxyXG5cdFx0XHRcdFx0XHRkb2dCb3hBcnJheSxcclxuXHRcdFx0XHRcdFx0ZG9nc0JveCxcclxuXHRcdFx0XHRcdFx0ZWxlbWVudHNPblBhZ2UsXHJcblx0XHRcdFx0XHRcdGN1cnJlbnRQYWdlXHJcblx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdGxldCBhY3RpdmVCdG5Eb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHRcdFx0XHQnI2RvZ3MgLnBhZ2luYXRpb24tYnRuLmFjdGl2ZSdcclxuXHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0YWN0aXZlQnRuRG9nLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xpY2soKTtcclxuXHJcblx0XHRcdFx0XHRsZXQgbmV4dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkb2dzIC5uZXh0Jyk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGN1cnJlbnRQYWdlICE9PSBwYWdlQ291bnQpIHtcclxuXHRcdFx0XHRcdFx0bmV4dEJ0bi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG5cdFx0XHRcdFx0XHRuZXh0QnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYWxsJztcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRpZiAoY3VycmVudFBhZ2UgPT09IDEpIHtcclxuXHRcdFx0XHRcdFx0cHJldkJ0bi5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XHJcblx0XHRcdFx0XHRcdHByZXZCdG4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRpZiAoYWN0aXZlQnRuRG9nKSB7XHJcblx0XHRcdFx0XHRcdGFjdGl2ZUJ0bkRvZy5jbGFzc0xpc3QuYWRkKCdncm91cCcpO1xyXG5cdFx0XHRcdFx0XHRhY3RpdmVCdG5Eb2cubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2dyb3VwJyk7XHJcblx0XHRcdFx0XHRcdGFjdGl2ZUJ0bkRvZy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2dyb3VwJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAocHJldkJ0bi5wYXJlbnRFbGVtZW50ID09IHBhZ2luYXRpb25FbENhdHMpIHtcclxuXHRcdFx0XHRcdGRpc3BsYXlQYWdpbmF0ZWRJdGVtcyhcclxuXHRcdFx0XHRcdFx0Y2F0Qm94QXJyYXksXHJcblx0XHRcdFx0XHRcdGNhdHNCb3gsXHJcblx0XHRcdFx0XHRcdGVsZW1lbnRzT25QYWdlLFxyXG5cdFx0XHRcdFx0XHRjdXJyZW50UGFnZVxyXG5cdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHRsZXQgYWN0aXZlQnRuQ2F0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuXHRcdFx0XHRcdFx0JyNjYXRzIC5wYWdpbmF0aW9uLWJ0bi5hY3RpdmUnXHJcblx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdGFjdGl2ZUJ0bkNhdC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsaWNrKCk7XHJcblxyXG5cdFx0XHRcdFx0bGV0IG5leHRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2F0cyAubmV4dCcpO1xyXG5cclxuXHRcdFx0XHRcdGlmIChjdXJyZW50UGFnZSAhPT0gcGFnZUNvdW50KSB7XHJcblx0XHRcdFx0XHRcdG5leHRCdG4uc3R5bGUub3BhY2l0eSA9ICcxJztcclxuXHRcdFx0XHRcdFx0bmV4dEJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2FsbCc7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYgKGN1cnJlbnRQYWdlID09PSAxKSB7XHJcblx0XHRcdFx0XHRcdHByZXZCdG4uc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xyXG5cdFx0XHRcdFx0XHRwcmV2QnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYgKGFjdGl2ZUJ0bkNhdCkge1xyXG5cdFx0XHRcdFx0XHRhY3RpdmVCdG5DYXQuY2xhc3NMaXN0LmFkZCgnZ3JvdXAnKTtcclxuXHRcdFx0XHRcdFx0YWN0aXZlQnRuQ2F0Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdncm91cCcpO1xyXG5cdFx0XHRcdFx0XHRhY3RpdmVCdG5DYXQucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdncm91cCcpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRpZiAoY3VycmVudFBhZ2UgPT09IDEpIHtcclxuXHRcdFx0XHRwcmV2QnRuLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcclxuXHRcdFx0XHRwcmV2QnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBwcmV2QnRuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHBhZ2luYXRpb25CdXR0b24ocGFnZSwgcGFnZUNvdW50KSB7XHJcblx0XHRcdGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHRcdFx0YnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3BhZ2luYXRpb24tYnRuJyk7XHJcblx0XHRcdGJ1dHRvbi5pbm5lclRleHQgPSBwYWdlO1xyXG5cclxuXHRcdFx0aWYgKGN1cnJlbnRQYWdlID09IHBhZ2UpIHtcclxuXHRcdFx0XHRidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0XHRcdFx0Y3VycmVudFBhZ2UgPSBwYWdlO1xyXG5cclxuXHRcdFx0XHRpZiAoYnV0dG9uLnBhcmVudEVsZW1lbnQgPT0gcGFnaW5hdGlvbkVsRG9ncykge1xyXG5cdFx0XHRcdFx0ZGlzcGxheVBhZ2luYXRlZEl0ZW1zKFxyXG5cdFx0XHRcdFx0XHRkb2dCb3hBcnJheSxcclxuXHRcdFx0XHRcdFx0ZG9nc0JveCxcclxuXHRcdFx0XHRcdFx0ZWxlbWVudHNPblBhZ2UsXHJcblx0XHRcdFx0XHRcdGN1cnJlbnRQYWdlXHJcblx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdGxldCBhY3RpdmVCdG5Eb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHRcdFx0XHQnI2RvZ3MgLnBhZ2luYXRpb24tYnRuLmFjdGl2ZSdcclxuXHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0YWN0aXZlQnRuRG9nLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cclxuXHRcdFx0XHRcdGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHJcblx0XHRcdFx0XHRsZXQgbmV4dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkb2dzIC5uZXh0Jyk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGN1cnJlbnRQYWdlID09PSBwYWdlQ291bnQpIHtcclxuXHRcdFx0XHRcdFx0bmV4dEJ0bi5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XHJcblx0XHRcdFx0XHRcdG5leHRCdG4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdG5leHRCdG4uc3R5bGUub3BhY2l0eSA9ICcxJztcclxuXHRcdFx0XHRcdFx0bmV4dEJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2FsbCc7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0bGV0IHByZXZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZG9ncyAucHJldicpO1xyXG5cclxuXHRcdFx0XHRcdGlmIChjdXJyZW50UGFnZSA9PT0gMSkge1xyXG5cdFx0XHRcdFx0XHRwcmV2QnRuLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcclxuXHRcdFx0XHRcdFx0cHJldkJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0cHJldkJ0bi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG5cdFx0XHRcdFx0XHRwcmV2QnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYWxsJztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChidXR0b24ucGFyZW50RWxlbWVudCA9PSBwYWdpbmF0aW9uRWxDYXRzKSB7XHJcblx0XHRcdFx0XHRkaXNwbGF5UGFnaW5hdGVkSXRlbXMoXHJcblx0XHRcdFx0XHRcdGNhdEJveEFycmF5LFxyXG5cdFx0XHRcdFx0XHRjYXRzQm94LFxyXG5cdFx0XHRcdFx0XHRlbGVtZW50c09uUGFnZSxcclxuXHRcdFx0XHRcdFx0Y3VycmVudFBhZ2VcclxuXHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0bGV0IGFjdGl2ZUJ0bkNhdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdFx0XHRcdCcjY2F0cyAucGFnaW5hdGlvbi1idG4uYWN0aXZlJ1xyXG5cdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHRhY3RpdmVCdG5DYXQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRcdFx0YnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cclxuXHRcdFx0XHRcdGxldCBuZXh0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhdHMgLm5leHQnKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoY3VycmVudFBhZ2UgPT09IHBhZ2VDb3VudCkge1xyXG5cdFx0XHRcdFx0XHRuZXh0QnRuLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcclxuXHRcdFx0XHRcdFx0bmV4dEJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0bmV4dEJ0bi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG5cdFx0XHRcdFx0XHRuZXh0QnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYWxsJztcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRsZXQgcHJldkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXRzIC5wcmV2Jyk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGN1cnJlbnRQYWdlID09PSAxKSB7XHJcblx0XHRcdFx0XHRcdHByZXZCdG4uc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xyXG5cdFx0XHRcdFx0XHRwcmV2QnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRwcmV2QnRuLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcblx0XHRcdFx0XHRcdHByZXZCdG4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhbGwnO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRyZXR1cm4gYnV0dG9uO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGV4cGFuZHNNb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2V4cGFuZC1tb3JlXScpO1xyXG5cclxuXHRcdGZ1bmN0aW9uIGV4cGFuZCgpIHtcclxuXHRcdFx0Y29uc3Qgc2hvd0NvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRhdGFzZXQudGFyZ2V0KTtcclxuXHRcdFx0aWYgKHNob3dDb250ZW50LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuXHRcdFx0XHR0aGlzLmlubmVySFRNTCA9IHRoaXMuZGF0YXNldC5zaG93dGV4dDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLmlubmVySFRNTCA9IHRoaXMuZGF0YXNldC5oaWRldGV4dDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c2hvd0NvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcblx0XHRcdGlmIChzaG93Q29udGVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcblx0XHRcdFx0c2hvd0NvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gc2hvd0NvbnRlbnQuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzaG93Q29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSAyMCArICdweCc7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoZG9nc0JveCkge1xyXG5cdFx0XHRkaXNwbGF5UGFnaW5hdGVkSXRlbXMoZG9nQm94QXJyYXksIGRvZ3NCb3gsIGVsZW1lbnRzT25QYWdlLCBjdXJyZW50UGFnZSk7XHJcblx0XHRcdGRpc3BsYXlQYWdpbmF0aW9uKGRvZ0JveEFycmF5LCBwYWdpbmF0aW9uRWxEb2dzLCBlbGVtZW50c09uUGFnZSk7XHJcblxyXG5cdFx0XHRleHBhbmRzTW9yZS5mb3JFYWNoKChidG4pID0+IHtcclxuXHRcdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBleHBhbmQpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoY2F0c0JveCkge1xyXG5cdFx0XHRkaXNwbGF5UGFnaW5hdGVkSXRlbXMoY2F0Qm94QXJyYXksIGNhdHNCb3gsIGVsZW1lbnRzT25QYWdlLCBjdXJyZW50UGFnZSk7XHJcblx0XHRcdGRpc3BsYXlQYWdpbmF0aW9uKGNhdEJveEFycmF5LCBwYWdpbmF0aW9uRWxDYXRzLCBlbGVtZW50c09uUGFnZSk7XHJcblxyXG5cdFx0XHRleHBhbmRzTW9yZS5mb3JFYWNoKChidG4pID0+IHtcclxuXHRcdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBleHBhbmQpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGlmIChhbmltYWxzUGFnZXMpIHtcclxuXHRcdChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGRpc3BsYXlBbmltYWxzKCk7XHJcblx0XHR9KSgpO1xyXG5cdH1cclxufSk7XHJcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcblx0Ly8gZm9ybSB2YWxpZGF0aW9uXHJcblx0Y29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0LWZvcm0nKTtcclxuXHRjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKTtcclxuXHRjb25zdCBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbCcpO1xyXG5cdGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzc2FnZScpO1xyXG5cdGNvbnN0IGZvcm1CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1idG4nKTtcclxuXHJcblx0aWYgKGZvcm0pIHtcclxuXHRcdFtcclxuXHRcdFx0J2NsaWNrJyxcclxuXHRcdFx0J29udG91Y2hzdGFydCcsXHJcblx0XHRcdCdtb3VzZW92ZXInLFxyXG5cdFx0XHQna2V5ZG93bicsXHJcblx0XHRcdCdrZXlwcmVzcycsXHJcblx0XHRcdCd0b3VjaHN0YXJ0JyxcclxuXHRcdFx0J3RvdWNobW92ZScsXHJcblx0XHRdLmZvckVhY2goXHJcblx0XHRcdChldmVudCkgPT5cclxuXHRcdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCAoKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoY2hlY2tJbnB1dHMoKSA9PT0gZmFsc2UpIHtcclxuXHRcdFx0XHRcdFx0Zm9ybUJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRmb3JtQnRuLmRpc2FibGVkID0gZmFsc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cclxuXHRcdGZ1bmN0aW9uIGNoZWNrSW5wdXRzKCkge1xyXG5cdFx0XHRjb25zdCBuYW1lVmFsdWUgPSBuYW1lLnZhbHVlLnRyaW0oKTtcclxuXHRcdFx0Y29uc3QgZW1haWxWYWx1ZSA9IGVtYWlsLnZhbHVlLnRyaW0oKTtcclxuXHRcdFx0Y29uc3QgbWVzc2FnZVZhbHVlID0gbWVzc2FnZS52YWx1ZS50cmltKCk7XHJcblxyXG5cdFx0XHRpZiAobmFtZVZhbHVlID09PSAnJykge1xyXG5cdFx0XHRcdHNldEVycm9yRm9yKG5hbWUsICdQbGVhc2UgZW50ZXIgeW91ciBmdWxsIG5hbWUnKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRTdWNjZXNzRm9yKG5hbWUpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoZW1haWxWYWx1ZSA9PT0gJycpIHtcclxuXHRcdFx0XHRzZXRFcnJvckZvcihlbWFpbCwgJ1BsZWFzZSBlbnRlciB5b3VyIGVtYWlsIGFkZHJlc3MnKTtcclxuXHRcdFx0fSBlbHNlIGlmICghZW1haWxJc1ZhbGlkKGVtYWlsVmFsdWUpKSB7XHJcblx0XHRcdFx0c2V0RXJyb3JGb3IoZW1haWwsICdFbWFpbCBpcyBub3QgdmFsaWQnKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRTdWNjZXNzRm9yKGVtYWlsKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKG1lc3NhZ2VWYWx1ZSA9PT0gJycpIHtcclxuXHRcdFx0XHRzZXRFcnJvckZvcihtZXNzYWdlLCAnUGxlYXNlIGVudGVyIHlvdXIgbWVzc2FnZScpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldFN1Y2Nlc3NGb3IobWVzc2FnZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChcclxuXHRcdFx0XHRuYW1lVmFsdWUgPT09ICcnIHx8XHJcblx0XHRcdFx0ZW1haWxWYWx1ZSA9PT0gJycgfHxcclxuXHRcdFx0XHRtZXNzYWdlVmFsdWUgPT09ICcnIHx8XHJcblx0XHRcdFx0IWVtYWlsSXNWYWxpZChlbWFpbFZhbHVlKVxyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBzZXRFcnJvckZvcihpbnB1dCwgbWVzc2FnZSkge1xyXG5cdFx0XHRjb25zdCBmb3JtID0gaW5wdXQucGFyZW50RWxlbWVudDtcclxuXHRcdFx0Y29uc3Qgc21hbGwgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ3NtYWxsJyk7XHJcblxyXG5cdFx0XHRzbWFsbC5pbm5lclRleHQgPSBtZXNzYWdlO1xyXG5cdFx0XHRmb3JtLmNsYXNzTmFtZSA9ICdmb3JtX19ncm91cCBlcnJvcic7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gc2V0U3VjY2Vzc0ZvcihpbnB1dCkge1xyXG5cdFx0XHRjb25zdCBmb3JtID0gaW5wdXQucGFyZW50RWxlbWVudDtcclxuXHRcdFx0Zm9ybS5jbGFzc05hbWUgPSAnZm9ybV9fZ3JvdXAgc3VjY2Vzcyc7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gZW1haWxJc1ZhbGlkKGVtYWlsKSB7XHJcblx0XHRcdGNvbnN0IHJlID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC8udGVzdChcclxuXHRcdFx0XHRlbWFpbFxyXG5cdFx0XHQpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHJlO1xyXG5cdFx0fVxyXG5cdH1cclxufSk7XHJcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKGUpID0+IHtcblx0XHRjb25zdCBwcmVsb2FkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWxvYWQnKTtcblxuXHRcdHByZWxvYWQuY2xhc3NMaXN0LmFkZCgncHJlbG9hZC1maW5pc2hlZCcpO1xuXHR9KTtcblxuXHRjb25zdCBidG5TY3JvbGxUb1RvcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5TY3JvbGxUb1RvcCcpO1xuXHRidG5TY3JvbGxUb1RvcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0d2luZG93LnNjcm9sbFRvKHtcblx0XHRcdHRvcDogMCxcblx0XHRcdGxlZnQ6IDAsXG5cdFx0XHRiZWhhdmlvcjogJ3Ntb290aCcsXG5cdFx0fSk7XG5cdH0pO1xufSk7XG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IG5hdkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYtY29udGFpbmVyJyk7XHJcblx0Y29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LWJ0bicpO1xyXG5cdGNvbnN0IG5hdkxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2LWxpc3QnKTtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIChlKSA9PiB7XHJcblx0XHRpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA+IDApIHtcclxuXHRcdFx0bmF2Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N0aWNreScpO1xyXG5cdFx0XHRidG5TY3JvbGxUb1RvcC5zdHlsZS5vcGFjaXR5ID0gMTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG5hdkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdzdGlja3knKTtcclxuXHRcdFx0YnRuU2Nyb2xsVG9Ub3Auc3R5bGUub3BhY2l0eSA9IDA7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0bWVudUJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdjbGlja2VkJyk7XHJcblx0XHRuYXZDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnb3ZlcmxheScpO1xyXG5cdFx0bmF2TGlzdC5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XHJcblx0fSk7XHJcbn0pO1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG5cdC8vIGNhcm91c2VsXHJcblx0Y29uc3QgY2Fyb3VzZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2Fyb3VzZWwnKTtcclxuXHRjb25zdCBwcmV2QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXYnKTtcclxuXHRjb25zdCBuZXh0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHQnKTtcclxuXHRjb25zdCBjYXJvdXNlbFVybCA9ICcuL2pzL2Nhcm91c2VsLmpzb24nO1xyXG5cclxuXHRsZXQgZmlyc3RTbGlkZTtcclxuXHRsZXQgbGFzdFNsaWRlO1xyXG5cclxuXHRmdW5jdGlvbiBnZXRTbGlkZXNEYXRhKCkge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0ZmV0Y2goY2Fyb3VzZWxVcmwpXHJcblx0XHRcdFx0LnRoZW4oKHJlc3ApID0+IHJlc3AuanNvbigpKVxyXG5cdFx0XHRcdC50aGVuKChkYXRhKSA9PiByZXNvbHZlKGRhdGEpKVxyXG5cdFx0XHRcdC5jYXRjaCgoZXJyKSA9PiByZWplY3QoZXJyKSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGZ1bmN0aW9uIGRpc3BsYXlDYXJvdXNlbCgpIHtcclxuXHRcdGNvbnN0IGRhdGFMaXN0ID0gYXdhaXQgZ2V0U2xpZGVzRGF0YSgpO1xyXG5cdFx0Y29uc3Qgc2xpZGVzQXJyYXkgPSBkYXRhTGlzdC5zbGlkZXM7XHJcblxyXG5cdFx0c2xpZGVzQXJyYXkuZm9yRWFjaCgoc2xpZGUsIHNsaWRlTnVtYmVyKSA9PiB7XHJcblx0XHRcdG5ld1NsaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRcdG5ld1NsaWRlLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsX19zbGlkZScpO1xyXG5cclxuXHRcdFx0bmV3U2xpZGUuaW5uZXJIVE1MID0gYFxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2Fyb3VzZWxfX2ltYWdlLWNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiJHtzbGlkZS5pbWFnZX1cIiBhbHQ9XCJzbGlkZS1pbWdcIiAvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcm91c2VsX19jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0PGgxIGNsYXNzPVwiY2Fyb3VzZWxfX3RpdGxlXCI+JHtzbGlkZS50aXRsZX08L2gxPlxyXG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzPVwiY2Fyb3VzZWxfX2Rlc2NcIj4ke3NsaWRlLmNvbnRlbnR9PC9wPlxyXG5cdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJoZWFkZXJfX25hdi1kb25hdGUtYnRuIGJ1dHRvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0RHVnbWUgemEgbmXFoXRvXHJcblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRgO1xyXG5cclxuXHRcdFx0Y2Fyb3VzZWwuYXBwZW5kQ2hpbGQobmV3U2xpZGUpO1xyXG5cclxuXHRcdFx0aWYgKHNsaWRlTnVtYmVyID09PSAwKSB7XHJcblx0XHRcdFx0Zmlyc3RTbGlkZSA9IG5ld1NsaWRlO1xyXG5cdFx0XHRcdG5ld1NsaWRlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHNsaWRlTnVtYmVyICsgMSA9PT0gZGF0YUxpc3Quc2xpZGVzLmxlbmd0aCkge1xyXG5cdFx0XHRcdGxhc3RTbGlkZSA9IG5ld1NsaWRlO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHRuZXh0U2xpZGUoKTtcclxuXHRcdHByZXZpb3VzU2xpZGUoKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG5leHRTbGlkZSgpIHtcclxuXHRcdGNvbnN0IG5leHRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dCcpO1xyXG5cclxuXHRcdG5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0XHRjb25zdCBhY3RpdmVTbGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fc2xpZGUuYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRsZXQgbmV4dFNpYmxpbmcgPSBhY3RpdmVTbGlkZS5uZXh0RWxlbWVudFNpYmxpbmc7XHJcblxyXG5cdFx0XHRpZiAobmV4dFNpYmxpbmcgPT0gbnVsbCkge1xyXG5cdFx0XHRcdG5leHRTaWJsaW5nID0gYWN0aXZlU2xpZGU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChuZXh0U2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ2Nhcm91c2VsX19zbGlkZScpKSB7XHJcblx0XHRcdFx0YWN0aXZlU2xpZGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0XHRcdFx0bmV4dFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gcHJldmlvdXNTbGlkZSgpIHtcclxuXHRcdGNvbnN0IHByZXZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldicpO1xyXG5cclxuXHRcdHByZXZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0XHRjb25zdCBhY3RpdmVTbGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fc2xpZGUuYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRsZXQgbmV4dFNpYmxpbmcgPSBhY3RpdmVTbGlkZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG5cclxuXHRcdFx0aWYgKG5leHRTaWJsaW5nID09IG51bGwpIHtcclxuXHRcdFx0XHRuZXh0U2libGluZyA9IGFjdGl2ZVNsaWRlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAobmV4dFNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJvdXNlbF9fc2xpZGUnKSkge1xyXG5cdFx0XHRcdGFjdGl2ZVNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdG5leHRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGlmIChjYXJvdXNlbCAhPT0gbnVsbCkge1xyXG5cdFx0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0ZGlzcGxheUNhcm91c2VsKCk7XHJcblx0XHR9KSgpO1xyXG5cdH1cclxufSk7XHJcbiIsIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG5cdC8vIHRhYnNcclxuXHRjb25zdCB0YWJMaXN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYmNjb3JkaW9uX19saXN0LWJ0bicpO1xyXG5cdGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiY2NvcmRpb25fX2NvbnRhaW5lcicpO1xyXG5cdGNvbnN0IHRhYmNjb3JkaW9uTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWJjY29yZGlvbi1saXN0Jyk7XHJcblx0Y29uc3QgdGFic0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiY2NvcmRpb25fX3RhYi1pbm5lcicpO1xyXG5cdGNvbnN0IHRhYmNjb3JkaW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYmNjb3JkaW9uJyk7XHJcblxyXG5cdGZ1bmN0aW9uIGFjdGl2YXRlVGFicygpIHtcclxuXHRcdHRhYkxpc3RCdG4uZm9yRWFjaCgodGFiKSA9PiB7XHJcblx0XHRcdHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgdGFiTmF2ID0gdGFiLnBhcmVudEVsZW1lbnQ7XHJcblx0XHRcdFx0Y29uc3QgdGFic0NvbnRhaW5lciA9IHRhYk5hdi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcblx0XHRcdFx0Y29uc3QgdGFiTnVtYmVyID0gdGFiLmRhdGFzZXQuZm9yVGFiO1xyXG5cdFx0XHRcdGNvbnN0IHRhYlRvQWN0aXZhdGUgPSB0YWJzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdFx0XHRgLnRhYmNjb3JkaW9uX190YWJbZGF0YS10YWI9XCIke3RhYk51bWJlcn1cIl1gXHJcblx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0dGFiTmF2LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJjY29yZGlvbl9fbGlzdC1idG4nKS5mb3JFYWNoKChidG4pID0+IHtcclxuXHRcdFx0XHRcdGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdHRhYnNDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLnRhYmNjb3JkaW9uX190YWInKS5mb3JFYWNoKCh0YWIpID0+IHtcclxuXHRcdFx0XHRcdHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdHRhYi5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XHJcblx0XHRcdFx0dGFiVG9BY3RpdmF0ZS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XHJcblxyXG5cdFx0XHRcdGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSA2MDApIHtcclxuXHRcdFx0XHRcdHRhYnNDb250ZW50LmZvckVhY2goKHRhYnMpID0+IHtcclxuXHRcdFx0XHRcdFx0dGFicy5zdHlsZS5tYXhIZWlnaHQgPSB0YWJzLnNjcm9sbEhlaWdodCArICdweCc7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0aWYgKHRhYmNjb3JkaW9uTGlzdCkge1xyXG5cdFx0XHR0YWJzLmZvckVhY2goKHRhYikgPT4ge1xyXG5cdFx0XHRcdHRhYi5xdWVyeVNlbGVjdG9yKCcudGFiY2NvcmRpb25fX2xpc3QgLnRhYmNjb3JkaW9uX19idG4nKS5jbGljaygpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vLy8vIGFjY29yZGlvblxyXG5cdGNvbnN0IGFjY29yZGlvbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvcmRpb25fX2xpc3QtYnRuJyk7XHJcblxyXG5cdGZ1bmN0aW9uIGFjdGl2YXRlQWNjb3JkaW9uKCkge1xyXG5cdFx0YWNjb3JkaW9uQnRuLmZvckVhY2goKGJ0bikgPT4ge1xyXG5cdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdFx0Ly8gY2hlY2sgZm9yIG9wZW4gYWNjb3JkaW9uXHJcblx0XHRcdFx0Y29uc3QgYWNjb3JkaW9uQnRuT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdFx0XHQnLmFjY29yZGlvbl9fbGlzdC1idG4ub3BlbidcclxuXHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRpZiAoYWNjb3JkaW9uQnRuT3BlbiAmJiBhY2NvcmRpb25CdG5PcGVuICE9PSBidG4pIHtcclxuXHRcdFx0XHRcdC8vIGlmIHRoZXJlIGlzIG9wZW4gdGhlbiByZW1vdmUgb3BlbiBjbGFzcyBhbmQgc2V0IG1heGhlaWdodCB0byAwXHJcblx0XHRcdFx0XHRhY2NvcmRpb25CdG5PcGVuLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcclxuXHRcdFx0XHRcdGFjY29yZGlvbkJ0bk9wZW4ubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLm1heEhlaWdodCA9IDA7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBzZXQgb3BlbiBjbGFzcyB0byBldmVyeSBjbGlja2VkIGFjY29yZGlvbiBidG5cclxuXHRcdFx0XHRidG4uY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xyXG5cdFx0XHRcdGNvbnN0IGFjY29yZGlvbkJvZHkgPSBidG4ubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG5cclxuXHRcdFx0XHRpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpKSB7XHJcblx0XHRcdFx0XHRhY2NvcmRpb25Cb2R5LnN0eWxlLm1heEhlaWdodCA9IGFjY29yZGlvbkJvZHkuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0YWNjb3JkaW9uQm9keS5zdHlsZS5tYXhIZWlnaHQgPSAwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKGUpID0+IHtcclxuXHRcdFx0aWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNjAwKSB7XHJcblx0XHRcdFx0dGFic0NvbnRlbnQuZm9yRWFjaCgodGFicykgPT4ge1xyXG5cdFx0XHRcdFx0dGFicy5zdHlsZS5tYXhIZWlnaHQgPSAwO1xyXG5cdFx0XHRcdFx0aWYgKHRhYnMucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKSkge1xyXG5cdFx0XHRcdFx0XHR0YWJzLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGlmICh0YWJjY29yZGlvbikge1xyXG5cdFx0YWN0aXZhdGVUYWJzKCk7XHJcblx0XHRhY3RpdmF0ZUFjY29yZGlvbigpO1xyXG5cdH1cclxufSk7XHJcbiJdLCJwcmVFeGlzdGluZ0NvbW1lbnQiOiIvLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTh2ZDJWaWNHRmpheTlpYjI5MGMzUnlZWEFpTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDJwekwyRmtiM0IwUTI5dWRHVnVkRk4zYVhSamFHVnlMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5cWN5OW1aWFJqYUVGdWFXMWhiSE5FWVhSaExtcHpJaXdpZDJWaWNHRmphem92THk4dUwzTnlZeTlxY3k5bWIzSnRWbUZzYVdSaGFYUnZiaTVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl6Y21NdmFuTXZiV0ZwYmk1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5emNtTXZhbk12Ym1GMkxtcHpJaXdpZDJWaWNHRmphem92THk4dUwzTnlZeTlxY3k5emJHbGtaWEl1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwycHpMM1JoWW1OamIzSmthVzl1TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1VVRkJRVHRSUVVOQk96dFJRVVZCTzFGQlEwRTdPMUZCUlVFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN08xRkJSVUU3VVVGRFFUczdVVUZGUVR0UlFVTkJPenRSUVVWQk8xRkJRMEU3VVVGRFFUczdPMUZCUjBFN1VVRkRRVHM3VVVGRlFUdFJRVU5CT3p0UlFVVkJPMUZCUTBFN1VVRkRRVHRSUVVOQkxEQkRRVUV3UXl4blEwRkJaME03VVVGRE1VVTdVVUZEUVRzN1VVRkZRVHRSUVVOQk8xRkJRMEU3VVVGRFFTeDNSRUZCZDBRc2EwSkJRV3RDTzFGQlF6RkZPMUZCUTBFc2FVUkJRV2xFTEdOQlFXTTdVVUZETDBRN08xRkJSVUU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTEhsRFFVRjVReXhwUTBGQmFVTTdVVUZETVVVc1owaEJRV2RJTEcxQ1FVRnRRaXhGUVVGRk8xRkJRM0pKTzFGQlEwRTdPMUZCUlVFN1VVRkRRVHRSUVVOQk8xRkJRMEVzTWtKQlFUSkNMREJDUVVFd1FpeEZRVUZGTzFGQlEzWkVMR2xEUVVGcFF5eGxRVUZsTzFGQlEyaEVPMUZCUTBFN1VVRkRRVHM3VVVGRlFUdFJRVU5CTEhORVFVRnpSQ3dyUkVGQkswUTdPMUZCUlhKSU8xRkJRMEU3T3p0UlFVZEJPMUZCUTBFN096czdPenM3T3pzN096dEJRMnhHUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFc1IwRkJSenRCUVVOSUxFVkJRVVU3TzBGQlJVWTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRXNPRVJCUVRoRUxFOUJRVTg3UVVGRGNrVTdRVUZEUVN4blEwRkJaME1zVDBGQlR6dEJRVU4yUXp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFTkJRVU03T3pzN096czdPenM3T3p0QlEycERSRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHhRa0ZCY1VJc1owSkJRV2RDTEV0QlFVc3NVMEZCVXp0QlFVTnVSRHRCUVVOQk8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzZVVOQlFYbERMRlZCUVZVc1UwRkJVeXhUUVVGVE8wRkJRM0pGTzBGQlEwRXNTMEZCU3l4RlFVRkZPMEZCUTFBN1FVRkRRVHRCUVVOQkxEQkVRVUV3UkN4VFFVRlRPMEZCUTI1Rk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdsQ1FVRnBRaXhGUVVGRkxGZEJRVmM3UVVGRE9VSTdRVUZEUVN3d1EwRkJNRU03UVVGRE1VTTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNaMFZCUVdkRkxGbEJRVms3UVVGRE5VVTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHRRa0ZCYlVJN1FVRkRia0k3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRzFDUVVGdFFqdEJRVU51UWp0QlFVTkJPMEZCUTBFN1FVRkRRU3d3UlVGQk1FVXNUVUZCVFR0QlFVTm9SanRCUVVOQk8wRkJRMEU3UVVGRFFTd3JRMEZCSzBNc2EwTkJRV3RETzBGQlEycEdPMEZCUTBFN1FVRkRRVHRCUVVOQkxDdERRVUVyUXl4clEwRkJhME03UVVGRGFrWTdRVUZEUVR0QlFVTkJPMEZCUTBFc0swTkJRU3RETEd0RFFVRnJRenRCUVVOcVJqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2JVSkJRVzFDTzBGQlEyNUNPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHRRa0ZCYlVJN1FVRkRia0k3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3hKUVVGSk96dEJRVVZLTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4NVEwRkJlVU1zVlVGQlZTeFRRVUZUTEZOQlFWTTdRVUZEY2tVN1FVRkRRU3hMUVVGTExFVkJRVVU3UVVGRFVEdEJRVU5CTzBGQlEwRXNNRVJCUVRCRUxGTkJRVk03UVVGRGJrVTdRVUZEUVR0QlFVTkJPMEZCUTBFc2FVSkJRV2xDTEVWQlFVVXNWMEZCVnp0QlFVTTVRanRCUVVOQkxEQkRRVUV3UXp0QlFVTXhRenRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3huUlVGQlowVXNXVUZCV1R0QlFVTTFSVHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRzFDUVVGdFFqdEJRVU51UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYlVKQlFXMUNPMEZCUTI1Q08wRkJRMEU3UVVGRFFUdEJRVU5CTERCRlFVRXdSU3hUUVVGVE8wRkJRMjVHTzBGQlEwRTdRVUZEUVR0QlFVTkJMQ3REUVVFclF5eHJRMEZCYTBNN1FVRkRha1k3UVVGRFFUdEJRVU5CTzBGQlEwRXNLME5CUVN0RExHdERRVUZyUXp0QlFVTnFSanRCUVVOQk8wRkJRMEU3UVVGRFFTd3JRMEZCSzBNc2EwTkJRV3RETzBGQlEycEdPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHRRa0ZCYlVJN1FVRkRia0k3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRzFDUVVGdFFqdEJRVU51UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTEVsQlFVazdRVUZEU2l4SFFVRkhPenRCUVVWSU8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFTeEpRVUZKTzBGQlEwbzdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVN4clFrRkJhMElzYlVKQlFXMUNPMEZCUTNKRE96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1NVRkJTVHM3UVVGRlNqdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEpRVUZKT3p0QlFVVktPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEUxQlFVMDdRVUZEVGp0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1RVRkJUVHRCUVVOT08wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TlFVRk5PMEZCUTA0N1FVRkRRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFMUJRVTA3UVVGRFRqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWxCUVVrN08wRkJSVW83UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVsQlFVazdRVUZEU2p0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVsQlFVazdRVUZEU2p0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hKUVVGSk8wRkJRMG83TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeEpRVUZKTzBGQlEwbzdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVN4RFFVRkRPenM3T3pzN096czdPenM3UVVOd2JVSkVPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeE5RVUZOTzBGQlEwNDdRVUZEUVR0QlFVTkJMRXRCUVVzN1FVRkRURHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeEpRVUZKTzBGQlEwbzdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzU1VGQlNUdEJRVU5LTzBGQlEwRXNTVUZCU1R0QlFVTktPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEVsQlFVazdRVUZEU2p0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1NVRkJTVHRCUVVOS08wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRXNhVU5CUVdsRExIbENRVUY1UWl3MlFrRkJOa0lzU1VGQlNTeFJRVUZSTEVsQlFVa3NVVUZCVVN4SlFVRkpMRkZCUVZFc1NVRkJTU3huUTBGQlowTXNSMEZCUnp0QlFVTnNTenRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRU5CUVVNN096czdPenM3T3pzN096dEJRM1pHUkR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFTeEZRVUZGT3p0QlFVVkdPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0N4RlFVRkZPMEZCUTBZc1EwRkJRenM3T3pzN096czdPenM3TzBGRFprUTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRVHRCUVVOQk8wRkJRMEVzUlVGQlJUczdRVUZGUmp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFVkJRVVU3UVVGRFJpeERRVUZET3pzN096czdPenM3T3pzN1FVTndRa1E3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxHMUNRVUZ0UWl4WlFVRlpPMEZCUXk5Q08wRkJRMEU3UVVGRFFTeHhRMEZCY1VNc1dVRkJXVHRCUVVOcVJDeHRRMEZCYlVNc1kwRkJZenRCUVVOcVJEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWxCUVVrN1FVRkRTanRCUVVOQk8wRkJRMEVzUjBGQlJ6czdRVUZGU0R0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0RzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEdEJRVU5CTEVOQlFVTTdPenM3T3pzN096czdPenRCUTJwSFJEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHOURRVUZ2UXl4VlFVRlZPMEZCUXpsRE96dEJRVVZCTzBGQlEwRTdRVUZEUVN4TFFVRkxPenRCUVVWTU8wRkJRMEU3UVVGRFFTeExRVUZMT3p0QlFVVk1PMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNUVUZCVFR0QlFVTk9PMEZCUTBFc1NVRkJTVHRCUVVOS0xFZEJRVWM3TzBGQlJVZzdRVUZEUVR0QlFVTkJPMEZCUTBFc1NVRkJTVHRCUVVOS08wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNTMEZCU3p0QlFVTk1PMEZCUTBFN1FVRkRRU3hKUVVGSk8wRkJRMG9zUjBGQlJ6czdRVUZGU0R0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEV0QlFVczdRVUZEVER0QlFVTkJMRWRCUVVjN1FVRkRTRHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRU5CUVVNaUxDSm1hV3hsSWpvaU1qZ3dZbUUxTURBelltTmxOelJrTldGbE1UWXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJZ1hIUXZMeUJVYUdVZ2JXOWtkV3hsSUdOaFkyaGxYRzRnWEhSMllYSWdhVzV6ZEdGc2JHVmtUVzlrZFd4bGN5QTlJSHQ5TzF4dVhHNGdYSFF2THlCVWFHVWdjbVZ4ZFdseVpTQm1kVzVqZEdsdmJseHVJRngwWm5WdVkzUnBiMjRnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlodGIyUjFiR1ZKWkNrZ2UxeHVYRzRnWEhSY2RDOHZJRU5vWldOcklHbG1JRzF2WkhWc1pTQnBjeUJwYmlCallXTm9aVnh1SUZ4MFhIUnBaaWhwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYU2tnZTF4dUlGeDBYSFJjZEhKbGRIVnliaUJwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYUzVsZUhCdmNuUnpPMXh1SUZ4MFhIUjlYRzRnWEhSY2RDOHZJRU55WldGMFpTQmhJRzVsZHlCdGIyUjFiR1VnS0dGdVpDQndkWFFnYVhRZ2FXNTBieUIwYUdVZ1kyRmphR1VwWEc0Z1hIUmNkSFpoY2lCdGIyUjFiR1VnUFNCcGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFNBOUlIdGNiaUJjZEZ4MFhIUnBPaUJ0YjJSMWJHVkpaQ3hjYmlCY2RGeDBYSFJzT2lCbVlXeHpaU3hjYmlCY2RGeDBYSFJsZUhCdmNuUnpPaUI3ZlZ4dUlGeDBYSFI5TzF4dVhHNGdYSFJjZEM4dklFVjRaV04xZEdVZ2RHaGxJRzF2WkhWc1pTQm1kVzVqZEdsdmJseHVJRngwWEhSdGIyUjFiR1Z6VzIxdlpIVnNaVWxrWFM1allXeHNLRzF2WkhWc1pTNWxlSEJ2Y25SekxDQnRiMlIxYkdVc0lHMXZaSFZzWlM1bGVIQnZjblJ6TENCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktUdGNibHh1SUZ4MFhIUXZMeUJHYkdGbklIUm9aU0J0YjJSMWJHVWdZWE1nYkc5aFpHVmtYRzRnWEhSY2RHMXZaSFZzWlM1c0lEMGdkSEoxWlR0Y2JseHVJRngwWEhRdkx5QlNaWFIxY200Z2RHaGxJR1Y0Y0c5eWRITWdiMllnZEdobElHMXZaSFZzWlZ4dUlGeDBYSFJ5WlhSMWNtNGdiVzlrZFd4bExtVjRjRzl5ZEhNN1hHNGdYSFI5WEc1Y2JseHVJRngwTHk4Z1pYaHdiM05sSUhSb1pTQnRiMlIxYkdWeklHOWlhbVZqZENBb1gxOTNaV0p3WVdOclgyMXZaSFZzWlhOZlh5bGNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJTQTlJRzF2WkhWc1pYTTdYRzVjYmlCY2RDOHZJR1Y0Y0c5elpTQjBhR1VnYlc5a2RXeGxJR05oWTJobFhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1NZ1BTQnBibk4wWVd4c1pXUk5iMlIxYkdWek8xeHVYRzRnWEhRdkx5QmtaV1pwYm1VZ1oyVjBkR1Z5SUdaMWJtTjBhVzl1SUdadmNpQm9ZWEp0YjI1NUlHVjRjRzl5ZEhOY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WkNBOUlHWjFibU4wYVc5dUtHVjRjRzl5ZEhNc0lHNWhiV1VzSUdkbGRIUmxjaWtnZTF4dUlGeDBYSFJwWmlnaFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXZLR1Y0Y0c5eWRITXNJRzVoYldVcEtTQjdYRzRnWEhSY2RGeDBUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dWNGNHOXlkSE1zSUc1aGJXVXNJSHNnWlc1MWJXVnlZV0pzWlRvZ2RISjFaU3dnWjJWME9pQm5aWFIwWlhJZ2ZTazdYRzRnWEhSY2RIMWNiaUJjZEgwN1hHNWNiaUJjZEM4dklHUmxabWx1WlNCZlgyVnpUVzlrZFd4bElHOXVJR1Y0Y0c5eWRITmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWNpQTlJR1oxYm1OMGFXOXVLR1Y0Y0c5eWRITXBJSHRjYmlCY2RGeDBhV1lvZEhsd1pXOW1JRk41YldKdmJDQWhQVDBnSjNWdVpHVm1hVzVsWkNjZ0ppWWdVM2x0WW05c0xuUnZVM1J5YVc1blZHRm5LU0I3WEc0Z1hIUmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lGTjViV0p2YkM1MGIxTjBjbWx1WjFSaFp5d2dleUIyWVd4MVpUb2dKMDF2WkhWc1pTY2dmU2s3WEc0Z1hIUmNkSDFjYmlCY2RGeDBUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dWNGNHOXlkSE1zSUNkZlgyVnpUVzlrZFd4bEp5d2dleUIyWVd4MVpUb2dkSEoxWlNCOUtUdGNiaUJjZEgwN1hHNWNiaUJjZEM4dklHTnlaV0YwWlNCaElHWmhhMlVnYm1GdFpYTndZV05sSUc5aWFtVmpkRnh1SUZ4MEx5OGdiVzlrWlNBbUlERTZJSFpoYkhWbElHbHpJR0VnYlc5a2RXeGxJR2xrTENCeVpYRjFhWEpsSUdsMFhHNGdYSFF2THlCdGIyUmxJQ1lnTWpvZ2JXVnlaMlVnWVd4c0lIQnliM0JsY25ScFpYTWdiMllnZG1Gc2RXVWdhVzUwYnlCMGFHVWdibk5jYmlCY2RDOHZJRzF2WkdVZ0ppQTBPaUJ5WlhSMWNtNGdkbUZzZFdVZ2QyaGxiaUJoYkhKbFlXUjVJRzV6SUc5aWFtVmpkRnh1SUZ4MEx5OGdiVzlrWlNBbUlEaDhNVG9nWW1Wb1lYWmxJR3hwYTJVZ2NtVnhkV2x5WlZ4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTUwSUQwZ1puVnVZM1JwYjI0b2RtRnNkV1VzSUcxdlpHVXBJSHRjYmlCY2RGeDBhV1lvYlc5a1pTQW1JREVwSUhaaGJIVmxJRDBnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHloMllXeDFaU2s3WEc0Z1hIUmNkR2xtS0cxdlpHVWdKaUE0S1NCeVpYUjFjbTRnZG1Gc2RXVTdYRzRnWEhSY2RHbG1LQ2h0YjJSbElDWWdOQ2tnSmlZZ2RIbHdaVzltSUhaaGJIVmxJRDA5UFNBbmIySnFaV04wSnlBbUppQjJZV3gxWlNBbUppQjJZV3gxWlM1ZlgyVnpUVzlrZFd4bEtTQnlaWFIxY200Z2RtRnNkV1U3WEc0Z1hIUmNkSFpoY2lCdWN5QTlJRTlpYW1WamRDNWpjbVZoZEdVb2JuVnNiQ2s3WEc0Z1hIUmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y2lodWN5azdYRzRnWEhSY2RFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2h1Y3l3Z0oyUmxabUYxYkhRbkxDQjdJR1Z1ZFcxbGNtRmliR1U2SUhSeWRXVXNJSFpoYkhWbE9pQjJZV3gxWlNCOUtUdGNiaUJjZEZ4MGFXWW9iVzlrWlNBbUlESWdKaVlnZEhsd1pXOW1JSFpoYkhWbElDRTlJQ2R6ZEhKcGJtY25LU0JtYjNJb2RtRnlJR3RsZVNCcGJpQjJZV3gxWlNrZ1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWtLRzV6TENCclpYa3NJR1oxYm1OMGFXOXVLR3RsZVNrZ2V5QnlaWFIxY200Z2RtRnNkV1ZiYTJWNVhUc2dmUzVpYVc1a0tHNTFiR3dzSUd0bGVTa3BPMXh1SUZ4MFhIUnlaWFIxY200Z2JuTTdYRzRnWEhSOU8xeHVYRzRnWEhRdkx5Qm5aWFJFWldaaGRXeDBSWGh3YjNKMElHWjFibU4wYVc5dUlHWnZjaUJqYjIxd1lYUnBZbWxzYVhSNUlIZHBkR2dnYm05dUxXaGhjbTF2Ym5rZ2JXOWtkV3hsYzF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV1SUQwZ1puVnVZM1JwYjI0b2JXOWtkV3hsS1NCN1hHNGdYSFJjZEhaaGNpQm5aWFIwWlhJZ1BTQnRiMlIxYkdVZ0ppWWdiVzlrZFd4bExsOWZaWE5OYjJSMWJHVWdQMXh1SUZ4MFhIUmNkR1oxYm1OMGFXOXVJR2RsZEVSbFptRjFiSFFvS1NCN0lISmxkSFZ5YmlCdGIyUjFiR1ZiSjJSbFptRjFiSFFuWFRzZ2ZTQTZYRzRnWEhSY2RGeDBablZ1WTNScGIyNGdaMlYwVFc5a2RXeGxSWGh3YjNKMGN5Z3BJSHNnY21WMGRYSnVJRzF2WkhWc1pUc2dmVHRjYmlCY2RGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVrS0dkbGRIUmxjaXdnSjJFbkxDQm5aWFIwWlhJcE8xeHVJRngwWEhSeVpYUjFjbTRnWjJWMGRHVnlPMXh1SUZ4MGZUdGNibHh1SUZ4MEx5OGdUMkpxWldOMExuQnliM1J2ZEhsd1pTNW9ZWE5QZDI1UWNtOXdaWEowZVM1allXeHNYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtOGdQU0JtZFc1amRHbHZiaWh2WW1wbFkzUXNJSEJ5YjNCbGNuUjVLU0I3SUhKbGRIVnliaUJQWW1wbFkzUXVjSEp2ZEc5MGVYQmxMbWhoYzA5M2JsQnliM0JsY25SNUxtTmhiR3dvYjJKcVpXTjBMQ0J3Y205d1pYSjBlU2s3SUgwN1hHNWNiaUJjZEM4dklGOWZkMlZpY0dGamExOXdkV0pzYVdOZmNHRjBhRjlmWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbkFnUFNCY0lsd2lPMXh1WEc1Y2JpQmNkQzh2SUV4dllXUWdaVzUwY25rZ2JXOWtkV3hsSUdGdVpDQnlaWFIxY200Z1pYaHdiM0owYzF4dUlGeDBjbVYwZFhKdUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOG9YMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV6SUQwZ01DazdYRzRpTENKa2IyTjFiV1Z1ZEM1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkRVQwMURiMjUwWlc1MFRHOWhaR1ZrSnl3Z1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc1Y2RHaHBjM1J2Y25rdWNtVndiR0ZqWlZOMFlYUmxLRzUxYkd3c0lHNTFiR3dzSUNjZ0p5azdYSEpjYmx4MFkyOXVjM1FnZEdGaVUzZHBkR05vWlhKeklEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2tGc2JDZ25XMlJoZEdFdGMzZHBkR05vWlhKZEp5azdYSEpjYmx4eVhHNWNkSFJoWWxOM2FYUmphR1Z5Y3k1bWIzSkZZV05vS0NoMFlXSlRkMmwwWTJncElEMCtJSHRjY2x4dVhIUmNkR052Ym5OMElIUmhZbE4zYVhSamFHVnlJRDBnZEdGaVUzZHBkR05vTzF4eVhHNWNkRngwWTI5dWMzUWdjR0ZuWlVsa0lEMGdkR0ZpVTNkcGRHTm9aWEl1WkdGMFlYTmxkQzUwWVdJN1hISmNibHh5WEc1Y2RGeDBkR0ZpVTNkcGRHTm9aWEl1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduWTJ4cFkyc25MQ0FvWlNrZ1BUNGdlMXh5WEc1Y2RGeDBYSFJrYjJOMWJXVnVkRnh5WEc1Y2RGeDBYSFJjZEM1eGRXVnllVk5sYkdWamRHOXlLQ2N1WVdSdmNIUmZYMnhwYzNRdGFYUmxiUzVoWTNScGRtVW5LVnh5WEc1Y2RGeDBYSFJjZEM1amJHRnpjMHhwYzNRdWNtVnRiM1psS0NkaFkzUnBkbVVuS1R0Y2NseHVYSEpjYmx4MFhIUmNkSFJoWWxOM2FYUmphR1Z5TG5CaGNtVnVkRVZzWlcxbGJuUXVjR0Z5Wlc1MFJXeGxiV1Z1ZEM1amJHRnpjMHhwYzNRdVlXUmtLQ2RoWTNScGRtVW5LVHRjY2x4dVhISmNibHgwWEhSY2RITjNhWFJqYUZCaFoyVW9jR0ZuWlVsa0tUdGNjbHh1WEhSY2RIMHBPMXh5WEc1Y2RIMHBPMXh5WEc1Y2NseHVYSFJtZFc1amRHbHZiaUJ6ZDJsMFkyaFFZV2RsS0hCaFoyVkpaQ2tnZTF4eVhHNWNkRngwWTI5dWMzUWdZM1Z5Y21WdWRGQmhaMlVnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2N1Y0dGblpTNWhZM1JwZG1VbktUdGNjbHh1WEhSY2RHTnZibk4wSUdOMWNuSmxiblJRWVdkbFNHVmhaR1Z5SUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduTG5CaFoyVXRhR1ZoWkdWeUxtRmpkR2wyWlNjcE8xeHlYRzVjY2x4dVhIUmNkR04xY25KbGJuUlFZV2RsTG1Oc1lYTnpUR2x6ZEM1eVpXMXZkbVVvSjJGamRHbDJaU2NwTzF4eVhHNWNkRngwWTNWeWNtVnVkRkJoWjJWSVpXRmtaWEl1WTJ4aGMzTk1hWE4wTG5KbGJXOTJaU2duWVdOMGFYWmxKeWs3WEhKY2JseHlYRzVjZEZ4MFkyOXVjM1FnYm1WNGRGQmhaMlVnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLR0F1Y0dGblpWdGtZWFJoTFhCaFoyVTlYQ0lrZTNCaFoyVkpaSDFjSWwxZ0tUdGNjbHh1WEhSY2RHTnZibk4wSUc1bGVIUlFZV2RsU0dWaFpHVnlJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpaGNjbHh1WEhSY2RGeDBZQzV3WVdkbExXaGxZV1JsY2x0a1lYUmhMV2hsWVdSbGNqMWNJaVI3Y0dGblpVbGtmVndpWFdCY2NseHVYSFJjZENrN1hISmNibHgwWEhSdVpYaDBVR0ZuWlM1amJHRnpjMHhwYzNRdVlXUmtLQ2RoWTNScGRtVW5LVHRjY2x4dVhIUmNkRzVsZUhSUVlXZGxTR1ZoWkdWeUxtTnNZWE56VEdsemRDNWhaR1FvSjJGamRHbDJaU2NwTzF4eVhHNWNkSDFjY2x4dWZTazdYSEpjYmlJc0ltUnZZM1Z0Wlc1MExtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0owUlBUVU52Ym5SbGJuUk1iMkZrWldRbkxDQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseDBZMjl1YzNRZ1lXNXBiV0ZzYzFWeWJDQTlJQ2N1TGk5cWN5OWhibWx0WVd4ekxtcHpiMjRuTzF4eVhHNWNkR052Ym5OMElHRnVhVzFoYkhOUVlXZGxjeUE5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2RoYm1sdFlXeHpMWEJoWjJWekp5azdYSEpjYmx4MFkyOXVjM1FnWkc5bmMwSnZlQ0E5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2RrYjJkekxXSnZlQ2NwTzF4eVhHNWNkR052Ym5OMElHTmhkSE5DYjNnZ1BTQmtiMk4xYldWdWRDNW5aWFJGYkdWdFpXNTBRbmxKWkNnblkyRjBjeTFpYjNnbktUdGNjbHh1WEhKY2JseDBablZ1WTNScGIyNGdaMlYwUVc1cGJXRnNjMFJoZEdFb0tTQjdYSEpjYmx4MFhIUnlaWFIxY200Z2JtVjNJRkJ5YjIxcGMyVW9LSEpsYzI5c2RtVXNJSEpsYW1WamRDa2dQVDRnZTF4eVhHNWNkRngwWEhSbVpYUmphQ2hoYm1sdFlXeHpWWEpzS1Z4eVhHNWNkRngwWEhSY2RDNTBhR1Z1S0NoeVpYTndLU0E5UGlCN1hISmNibHgwWEhSY2RGeDBYSFJwWmlBb0lYSmxjM0F1YjJzcElIdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MGRHaHliM2NnUlhKeWIzSW9ZQ1I3Y21WemNDNXpkR0YwZFhOVVpYaDBmU0F0SUNSN2NtVnpjQzUxY214OVlDazdYSEpjYmx4MFhIUmNkRngwWEhSOVhISmNibHgwWEhSY2RGeDBYSFJ5WlhSMWNtNGdjbVZ6Y0M1cWMyOXVLQ2s3WEhKY2JseDBYSFJjZEZ4MGZTbGNjbHh1WEhSY2RGeDBYSFF1ZEdobGJpZ29aR0YwWVNrZ1BUNGdjbVZ6YjJ4MlpTaGtZWFJoS1NsY2NseHVYSFJjZEZ4MFhIUXVZMkYwWTJnb0tHVnljaWtnUFQ0Z2NtVnFaV04wS0dWeWNpa3BPMXh5WEc1Y2RGeDBmU2s3WEhKY2JseDBmVnh5WEc1Y2NseHVYSFJqYjI1emRDQmtiMmRPZFcxaVpYSWdQU0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDZ25aRzluVG5WdFltVnlKeWs3WEhKY2JseDBZMjl1YzNRZ1kyRjBUblZ0WW1WeUlEMGdaRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkRUo1U1dRb0oyTmhkRTUxYldKbGNpY3BPMXh5WEc1Y2NseHVYSFJoYzNsdVl5Qm1kVzVqZEdsdmJpQmthWE53YkdGNVFXNXBiV0ZzVG5WdFltVnljeWdwSUh0Y2NseHVYSFJjZEdOdmJuTjBJR1JoZEdGTWFYTjBJRDBnWVhkaGFYUWdaMlYwUVc1cGJXRnNjMFJoZEdFb0tUdGNjbHh1WEhSY2RHTnZibk4wSUdGdWFXMWhiSE5CY25KaGVTQTlJR1JoZEdGTWFYTjBMbUZ1YVcxaGJITTdYSEpjYmx4eVhHNWNkRngwYkdWMElHUnZaM05CY25KaGVVNTFiV0psY2lBOUlHRnVhVzFoYkhOQmNuSmhlVnN3WFM1a2IyZHpMbXhsYm1kMGFEdGNjbHh1WEhSY2RHeGxkQ0JqWVhSelFYSnlZWGxPZFcxaVpYSWdQU0JoYm1sdFlXeHpRWEp5WVhsYk1GMHVZMkYwY3k1c1pXNW5kR2c3WEhKY2JseHlYRzVjZEZ4MFpHOW5UblZ0WW1WeUxtbHVibVZ5VkdWNGRDQTlJR1J2WjNOQmNuSmhlVTUxYldKbGNqdGNjbHh1WEhSY2RHTmhkRTUxYldKbGNpNXBibTVsY2xSbGVIUWdQU0JqWVhSelFYSnlZWGxPZFcxaVpYSTdYSEpjYmx4MGZWeHlYRzVjY2x4dVhIUnBaaUFvS0dSdlowNTFiV0psY2l3Z1kyRjBUblZ0WW1WeUtTa2dlMXh5WEc1Y2RGeDBLR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVYSFJjZEZ4MFpHbHpjR3hoZVVGdWFXMWhiRTUxYldKbGNuTW9LVHRjY2x4dVhIUmNkSDBwS0NrN1hISmNibHgwZlZ4eVhHNWNjbHh1WEhSaGMzbHVZeUJtZFc1amRHbHZiaUJrYVhOd2JHRjVRVzVwYldGc2N5Z3BJSHRjY2x4dVhIUmNkR052Ym5OMElHUmhkR0ZNYVhOMElEMGdZWGRoYVhRZ1oyVjBRVzVwYldGc2MwUmhkR0VvS1R0Y2NseHVYSFJjZEdOdmJuTjBJR0Z1YVcxaGJITkJjbkpoZVNBOUlHUmhkR0ZNYVhOMExtRnVhVzFoYkhNN1hISmNibHh5WEc1Y2RGeDBZVzVwYldGc2MwRnljbUY1TG1admNrVmhZMmdvS0dGdWFXMWhiQ2tnUFQ0Z2UxeHlYRzVjZEZ4MFhIUmtiMmR6UVhKeVlYa2dQU0JoYm1sdFlXd3VaRzluY3p0Y2NseHVYSFJjZEZ4MFkyRjBjMEZ5Y21GNUlEMGdZVzVwYldGc0xtTmhkSE03WEhKY2JseHlYRzVjZEZ4MFhIUmtiMmR6UVhKeVlYa3VabTl5UldGamFDZ29aRzluS1NBOVBpQjdYSEpjYmx4MFhIUmNkRngwWkc5blFtOTRJRDBnWkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDZ25aR2wySnlrN1hISmNibHgwWEhSY2RGeDBaRzluUW05NExtTnNZWE56VEdsemRDNWhaR1FvSjNCaFoyVmZYMkp2ZUNjcE8xeHlYRzVjY2x4dVhIUmNkRngwWEhSamIyNXpkQ0JrYjJkWlpXRnljeUE5SUdSdlp5NWlhWEowYUR0Y2NseHVYSEpjYmx4MFhIUmNkRngwWTI5dWMzUWdiV2xzYVhObFkzTkNaWFIzWldWdVJFOUNZVzVrTVRrM01DQTlJRVJoZEdVdWNHRnljMlVvWkc5bldXVmhjbk1wTzF4eVhHNWNkRngwWEhSY2RHTnZibk4wSUcxcGJHbHpaV056UW1WMGQyVmxiazVQVjJGdVpERTVOekFnUFNCRVlYUmxMbTV2ZHlncE8xeHlYRzVjZEZ4MFhIUmNkR052Ym5OMElHRm5aVWx1VFdsc2FYTmxZM01nUFZ4eVhHNWNkRngwWEhSY2RGeDBiV2xzYVhObFkzTkNaWFIzWldWdVRrOVhZVzVrTVRrM01DQXRJRzFwYkdselpXTnpRbVYwZDJWbGJrUlBRbUZ1WkRFNU56QTdYSEpjYmx4eVhHNWNkRngwWEhSY2RHTnZibk4wSUcxcGJHbHpaV056SUQwZ1lXZGxTVzVOYVd4cGMyVmpjenRjY2x4dVhIUmNkRngwWEhSamIyNXpkQ0J6WldOeklEMGdNVEF3TUR0Y2NseHVYSFJjZEZ4MFhIUmpiMjV6ZENCdGFXNXpJRDBnYzJWamN5QXFJRFl3TzF4eVhHNWNkRngwWEhSY2RHTnZibk4wSUdodmRYSWdQU0J0YVc1eklDb2dOakE3WEhKY2JseDBYSFJjZEZ4MFkyOXVjM1FnWkdGNUlEMGdhRzkxY2lBcUlESTBPMXh5WEc1Y2RGeDBYSFJjZEdOdmJuTjBJSGxsWVhJZ1BTQmtZWGtnS2lBek5qVTdYSEpjYmx4eVhHNWNkRngwWEhSY2RHeGxkQ0I1WldGeWN5QTlJRTFoZEdndWNtOTFibVFvYldsc2FYTmxZM01nTHlCNVpXRnlLVHRjY2x4dVhISmNibHgwWEhSY2RGeDBaRzluUW05NExtbHVibVZ5U0ZSTlRDQTlJR0JjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdScGRpQmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMTBiM0JjSWo1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhwYldjZ2MzSmpQVndpTGlSN1pHOW5MbWx0WVdkbGZWd2lJR0ZzZEQxY0lpUjdaRzluTG01aGJXVjlJQ1I3WEhKY2JseDBYSFJjZEZ4MFhIUmtiMmN1YzNCbFkybGxjMXh5WEc1Y2RGeDBYSFJjZEgxY0luMHZQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4TDJScGRqNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR1JwZGlCamJHRnpjejFjSW5CaFoyVmZYMkp2ZUMxaWIzUjBiMjFjSWo1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhvTXlCamJHRnpjejFjSW5CaFoyVmZYMkp2ZUMxMGFYUnNaVndpUGlSN1pHOW5MbTVoYldWOVBDOW9NejVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeGthWFlnWTJ4aGMzTTlYQ0p3WVdkbFgxOWliM2d0WTI5dWRHVnVkRndpUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4a2FYWWdZMnhoYzNNOVhDSmxlSEJoYm1STmIzSmxRMjl1ZEdWdWRGd2lJR2xrUFZ3aWMyaHZkMDF2Y21VdEpIdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkR1J2Wnk1emNHVmphV1Z6WEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwZlNSN1pHOW5MbTUxYldKbGNuMWNJajVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BIQWdZMnhoYzNNOVhDSndZV2RsWDE5aWIzZ3RkR1Y0ZEZ3aVBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0pIdGtiMmN1WkdWelkzMWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5d1BseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEd3ZaR2wyUGx4eVhHNGdJQ0FnWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdScGRpQmpiR0Z6Y3oxY0ltVjRjR0Z1WkUxdmNtVkliMnhrWlhKY0lqNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdKMWRIUnZibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdaWGh3WVc1a0xXMXZjbVZjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1JoZEdFdGFHbGtaWFJsZUhROVhDSXVMaTVTWldGa0lHeGxjM05jSWx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWkdGMFlTMXphRzkzZEdWNGREMWNJaTR1TGxKbFlXUWdiVzl5WlZ3aVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCa1lYUmhMWFJoY21kbGREMWNJbk5vYjNkTmIzSmxMU1I3Wkc5bkxuTndaV05wWlhOOUpIdGNjbHh1WEhSY2RGeDBYSFJjZEdSdlp5NXVkVzFpWlhKY2NseHVYSFJjZEZ4MFhIUjlYQ0pjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR05zWVhOelBWd2lZblYwZEc5dUlITm9iM2ROYjNKbFhDSmNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTGk0dVVtVmhaQ0J0YjNKbFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2WW5WMGRHOXVQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2WkdsMlBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5a2FYWStYSEpjYmlBZ0lDQmNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4MWJDQmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMXBZMjl1YzF3aVBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHNhU0JqYkdGemN6MWNJbkJoWjJWZlgySnZlQzFwWTI5dVhDSStYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4cElHTnNZWE56UFZ3aVptRnpJR1poTFhkbGFXZG9kRndpUGp3dmFWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0ErUEhOd1lXNGdZMnhoYzNNOVhDSndZV2RsWDE5aWIzZ3RhV052YmkwdGRHVjRkRndpUGlSN1hISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWkc5bkxuZGxhV2RvZEZ4eVhHNWNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUjlJR3RuUEM5emNHRnVQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2YkdrK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHeHBJR05zWVhOelBWd2ljR0ZuWlY5ZlltOTRMV2xqYjI1Y0lqNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdrZ1kyeGhjM005WENKbVlYTWdabUV0WVhKeWIzZHpMV0ZzZEMxMlhDSStQQzlwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lENDhjM0JoYmlCamJHRnpjejFjSW5CaFoyVmZYMkp2ZUMxcFkyOXVMUzEwWlhoMFhDSStKSHRjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmtiMmN1YUdWcFoyaDBYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEgxamJUd3ZjM0JoYmo1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOEwyeHBQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhzYVNCamJHRnpjejFjSW5CaFoyVmZYMkp2ZUMxcFkyOXVYQ0krWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHBJR05zWVhOelBWd2labUZ6SUdaaExXTmhiR1Z1WkdGeUxXTm9aV05yWENJK1BDOXBYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUQ0OGMzQmhiaUJqYkdGemN6MWNJbkJoWjJWZlgySnZlQzFwWTI5dUxTMTBaWGgwWENJK0pIdDVaV0Z5YzMwZ2VYSXVQQzl6Y0dGdVBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEd3ZiR2srWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEd4cElHTnNZWE56UFZ3aWNHRm5aVjlmWW05NExXbGpiMjVjSWo1Y2NseHVYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBQR2tnWTJ4aGMzTTlYQ0ptWVhNZ1ptRXRjR0ZzWlhSMFpWd2lQand2YVZ4eVhHNWNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUStQSE53WVc0Z1kyeGhjM005WENKd1lXZGxYMTlpYjNndGFXTnZiaTB0ZEdWNGRGd2lQaVI3Wkc5bkxtTnZiRzl5V3pCZElEOGdaRzluTG1OdmJHOXlXekJkSURvZ0p5MG5mVHd2YzNCaGJqNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThMMnhwUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4c2FTQmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMXBZMjl1WENJK1hISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRHhwSUdOc1lYTnpQVndpWm1GeklHWmhMWEJoYkdWMGRHVmNJajQ4TDJsY2NseHVYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBQanh6Y0dGdUlHTnNZWE56UFZ3aWNHRm5aVjlmWW05NExXbGpiMjR0TFhSbGVIUmNJajRrZTJSdlp5NWpiMnh2Y2xzeFhTQS9JR1J2Wnk1amIyeHZjbHN4WFNBNklDY3RKMzA4TDNOd1lXNCtYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzlzYVQ1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGJHa2dZMnhoYzNNOVhDSndZV2RsWDE5aWIzZ3RhV052Ymx3aVBseHlYRzVjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFE4YVNCamJHRnpjejFjSW1aaGN5Qm1ZUzF3WVd4bGRIUmxYQ0krUEM5cFhISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRDQ4YzNCaGJpQmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMXBZMjl1TFMxMFpYaDBYQ0krSkh0a2IyY3VZMjlzYjNKYk1sMGdQeUJrYjJjdVkyOXNiM0piTWwwZ09pQW5MU2Q5UEM5emNHRnVQbHh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRngwUEM5c2FUNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThiR2tnWTJ4aGMzTTlYQ0p3WVdkbFgxOWliM2d0YVdOdmJsd2lQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGFTQmpiR0Z6Y3oxY0ltWmhjeUJtWVMxd1lYZGNJajQ4TDJsY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQanh6Y0dGdUlHTnNZWE56UFZ3aWNHRm5aVjlmWW05NExXbGpiMjR0TFhSbGVIUmNJajRrZTF4eVhHNWNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkR1J2Wnk1amIyRjBYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEgwOEwzTndZVzQrWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5c2FUNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThiR2tnWTJ4aGMzTTlYQ0p3WVdkbFgxOWliM2d0YVdOdmJsd2lQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGFTQmpiR0Z6Y3oxY0ltWmhjeUJtWVMxMlpXNTFjeTF0WVhKelhDSStQQzlwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lENDhjM0JoYmlCamJHRnpjejFjSW5CaFoyVmZYMkp2ZUMxcFkyOXVMUzEwWlhoMFhDSStKSHRjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmtiMmN1WjJWdVpHVnlYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEgwOEwzTndZVzQrWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5c2FUNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dmRXdytYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2WkdsMlBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZRHRjY2x4dVhISmNibHgwWEhSY2RGeDBaRzluYzBKdmVDNWhjSEJsYm1SRGFHbHNaQ2hrYjJkQ2IzZ3BPMXh5WEc1Y2RGeDBYSFI5S1R0Y2NseHVYSEpjYmx4MFhIUmNkR05oZEhOQmNuSmhlUzVtYjNKRllXTm9LQ2hqWVhRcElEMCtJSHRjY2x4dVhIUmNkRngwWEhSallYUkNiM2dnUFNCa2IyTjFiV1Z1ZEM1amNtVmhkR1ZGYkdWdFpXNTBLQ2RrYVhZbktUdGNjbHh1WEhSY2RGeDBYSFJqWVhSQ2IzZ3VZMnhoYzNOTWFYTjBMbUZrWkNnbmNHRm5aVjlmWW05NEp5azdYSEpjYmx4eVhHNWNkRngwWEhSY2RHTnZibk4wSUdOaGRGbGxZWEp6SUQwZ1kyRjBMbUpwY25Sb08xeHlYRzVjY2x4dVhIUmNkRngwWEhSamIyNXpkQ0J0YVd4cGMyVmpjMEpsZEhkbFpXNUVUMEpoYm1ReE9UY3dZMkYwSUQwZ1JHRjBaUzV3WVhKelpTaGpZWFJaWldGeWN5azdYSEpjYmx4MFhIUmNkRngwWTI5dWMzUWdiV2xzYVhObFkzTkNaWFIzWldWdVRrOVhZVzVrTVRrM01DQTlJRVJoZEdVdWJtOTNLQ2s3WEhKY2JseHlYRzVjZEZ4MFhIUmNkR052Ym5OMElHRm5aVWx1VFdsc2FYTmxZM05EWVhRZ1BWeHlYRzVjZEZ4MFhIUmNkRngwYldsc2FYTmxZM05DWlhSM1pXVnVUazlYWVc1a01UazNNQ0F0SUcxcGJHbHpaV056UW1WMGQyVmxia1JQUW1GdVpERTVOekJqWVhRN1hISmNibHh5WEc1Y2RGeDBYSFJjZEdOdmJuTjBJRzFwYkdselpXTnpRMkYwSUQwZ1lXZGxTVzVOYVd4cGMyVmpjME5oZER0Y2NseHVYSFJjZEZ4MFhIUmpiMjV6ZENCelpXTnpJRDBnTVRBd01EdGNjbHh1WEhSY2RGeDBYSFJqYjI1emRDQnRhVzV6SUQwZ2MyVmpjeUFxSURZd08xeHlYRzVjZEZ4MFhIUmNkR052Ym5OMElHaHZkWElnUFNCdGFXNXpJQ29nTmpBN1hISmNibHgwWEhSY2RGeDBZMjl1YzNRZ1pHRjVJRDBnYUc5MWNpQXFJREkwTzF4eVhHNWNkRngwWEhSY2RHTnZibk4wSUhsbFlYSWdQU0JrWVhrZ0tpQXpOalU3WEhKY2JseHlYRzVjZEZ4MFhIUmNkR3hsZENCNVpXRnljME5oZENBOUlFMWhkR2d1Y205MWJtUW9iV2xzYVhObFkzTkRZWFFnTHlCNVpXRnlLVHRjY2x4dVhISmNibHgwWEhSY2RGeDBZMkYwUW05NExtbHVibVZ5U0ZSTlRDQTlJR0JjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdScGRpQmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMTBiM0JjSWo1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhwYldjZ2MzSmpQVndpTGlSN1kyRjBMbWx0WVdkbGZWd2lJR0ZzZEQxY0lpUjdZMkYwTG01aGJXVjlJQ1I3WEhKY2JseDBYSFJjZEZ4MFhIUmpZWFF1YzNCbFkybGxjMXh5WEc1Y2RGeDBYSFJjZEgxY0luMHZQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4TDJScGRqNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR1JwZGlCamJHRnpjejFjSW5CaFoyVmZYMkp2ZUMxaWIzUjBiMjFjSWo1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhvTXlCamJHRnpjejFjSW5CaFoyVmZYMkp2ZUMxMGFYUnNaVndpUGlSN1kyRjBMbTVoYldWOVBDOW9NejVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeGthWFlnWTJ4aGMzTTlYQ0p3WVdkbFgxOWliM2d0WTI5dWRHVnVkRndpUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4a2FYWWdZMnhoYzNNOVhDSmxlSEJoYm1STmIzSmxRMjl1ZEdWdWRGd2lJR2xrUFZ3aWMyaHZkMDF2Y21VdEpIdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkR05oZEM1emNHVmphV1Z6WEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwZlNSN1kyRjBMbTUxYldKbGNuMWNJajVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BIQWdZMnhoYzNNOVhDSndZV2RsWDE5aWIzZ3RkR1Y0ZEZ3aVBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0pIdGpZWFF1WkdWelkzMWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5d1BseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEd3ZaR2wyUGx4eVhHNGdJQ0FnWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdScGRpQmpiR0Z6Y3oxY0ltVjRjR0Z1WkUxdmNtVkliMnhrWlhKY0lqNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdKMWRIUnZibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdaWGh3WVc1a0xXMXZjbVZjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1JoZEdFdGFHbGtaWFJsZUhROVhDSXVMaTVTWldGa0lHeGxjM05jSWx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWkdGMFlTMXphRzkzZEdWNGREMWNJaTR1TGxKbFlXUWdiVzl5WlZ3aVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCa1lYUmhMWFJoY21kbGREMWNJbk5vYjNkTmIzSmxMU1I3WTJGMExuTndaV05wWlhOOUpIdGNjbHh1WEhSY2RGeDBYSFJjZEdOaGRDNXVkVzFpWlhKY2NseHVYSFJjZEZ4MFhIUjlYQ0pjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR05zWVhOelBWd2lZblYwZEc5dUlITm9iM2ROYjNKbFhDSmNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTGk0dVVtVmhaQ0J0YjNKbFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2WW5WMGRHOXVQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2WkdsMlBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5a2FYWStYSEpjYmlBZ0lDQmNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4MWJDQmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMXBZMjl1YzF3aVBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHNhU0JqYkdGemN6MWNJbkJoWjJWZlgySnZlQzFwWTI5dVhDSStYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4cElHTnNZWE56UFZ3aVptRnpJR1poTFhkbGFXZG9kRndpUGp3dmFWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0ErUEhOd1lXNGdZMnhoYzNNOVhDSndZV2RsWDE5aWIzZ3RhV052YmkwdGRHVjRkRndpUGlSN1hISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWTJGMExuZGxhV2RvZEZ4eVhHNWNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUjlJR3RuUEM5emNHRnVQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2YkdrK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHeHBJR05zWVhOelBWd2ljR0ZuWlY5ZlltOTRMV2xqYjI1Y0lqNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdrZ1kyeGhjM005WENKbVlYTWdabUV0WVhKeWIzZHpMV0ZzZEMxMlhDSStQQzlwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lENDhjM0JoYmlCamJHRnpjejFjSW5CaFoyVmZYMkp2ZUMxcFkyOXVMUzEwWlhoMFhDSStKSHRjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmpZWFF1YUdWcFoyaDBYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEgxamJUd3ZjM0JoYmo1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOEwyeHBQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhzYVNCamJHRnpjejFjSW5CaFoyVmZYMkp2ZUMxcFkyOXVYQ0krWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHBJR05zWVhOelBWd2labUZ6SUdaaExXTmhiR1Z1WkdGeUxXTm9aV05yWENJK1BDOXBYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUQ0OGMzQmhiaUJqYkdGemN6MWNJbkJoWjJWZlgySnZlQzFwWTI5dUxTMTBaWGgwWENJK0pIdDVaV0Z5YzBOaGRIMGdlWEl1UEM5emNHRnVQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2YkdrK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHeHBJR05zWVhOelBWd2ljR0ZuWlY5ZlltOTRMV2xqYjI1Y0lqNWNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwUEdrZ1kyeGhjM005WENKbVlYTWdabUV0Y0dGc1pYUjBaVndpUGp3dmFWeHlYRzVjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFErUEhOd1lXNGdZMnhoYzNNOVhDSndZV2RsWDE5aWIzZ3RhV052YmkwdGRHVjRkRndpUGlSN1kyRjBMbU52Ykc5eVd6QmRJRDhnWTJGMExtTnZiRzl5V3pCZElEb2dKeTBuZlR3dmMzQmhiajVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4TDJ4cFBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHNhU0JqYkdGemN6MWNJbkJoWjJWZlgySnZlQzFwWTI5dVhDSStYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBYSFJjZER4cElHTnNZWE56UFZ3aVptRnpJR1poTFhCaGJHVjBkR1ZjSWo0OEwybGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwUGp4emNHRnVJR05zWVhOelBWd2ljR0ZuWlY5ZlltOTRMV2xqYjI0dExYUmxlSFJjSWo0a2UyTmhkQzVqYjJ4dmNsc3hYU0EvSUdOaGRDNWpiMnh2Y2xzeFhTQTZJQ2N0SjMwOEwzTndZVzQrWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5c2FUNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThiR2tnWTJ4aGMzTTlYQ0p3WVdkbFgxOWliM2d0YVdOdmJsd2lQbHh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhROGFTQmpiR0Z6Y3oxY0ltWmhjeUJtWVMxd1lXeGxkSFJsWENJK1BDOXBYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEQ0OGMzQmhiaUJqYkdGemN6MWNJbkJoWjJWZlgySnZlQzFwWTI5dUxTMTBaWGgwWENJK0pIdGpZWFF1WTI5c2IzSmJNbDBnUHlCallYUXVZMjlzYjNKYk1sMGdPaUFuTFNkOVBDOXpjR0Z1UGx4eVhHNWNkRngwWEhSY2RGeDBYSFJjZEZ4MFBDOXNhVDVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YkdrZ1kyeGhjM005WENKd1lXZGxYMTlpYjNndGFXTnZibHdpUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThhU0JqYkdGemN6MWNJbVpoY3lCbVlTMXdZWGRjSWo0OEwybGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUGp4emNHRnVJR05zWVhOelBWd2ljR0ZuWlY5ZlltOTRMV2xqYjI0dExYUmxlSFJjSWo0a2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEdOaGRDNWpiMkYwWEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RIMDhMM053WVc0K1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOXNhVDVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YkdrZ1kyeGhjM005WENKd1lXZGxYMTlpYjNndGFXTnZibHdpUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThhU0JqYkdGemN6MWNJbVpoY3lCbVlTMTJaVzUxY3kxdFlYSnpYQ0krUEM5cFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRDQ4YzNCaGJpQmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMXBZMjl1TFMxMFpYaDBYQ0krSkh0Y2NseHVYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJqWVhRdVoyVnVaR1Z5WEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RIMDhMM053WVc0K1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOXNhVDVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEd3ZkV3crWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dlpHbDJQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWUR0Y2NseHVYSEpjYmx4MFhIUmNkRngwWTJGMGMwSnZlQzVoY0hCbGJtUkRhR2xzWkNoallYUkNiM2dwTzF4eVhHNWNkRngwWEhSOUtUdGNjbHh1WEhSY2RIMHBPMXh5WEc1Y2NseHVYSFJjZEd4bGRDQmtiMmRDYjNoQmNuSmhlU0E5SUZzdUxpNWtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5UVd4c0tDY2paRzluY3kxaWIzZ2dMbkJoWjJWZlgySnZlQ2NwWFR0Y2NseHVYSFJjZEd4bGRDQmpZWFJDYjNoQmNuSmhlU0E5SUZzdUxpNWtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5UVd4c0tDY2pZMkYwY3kxaWIzZ2dMbkJoWjJWZlgySnZlQ2NwWFR0Y2NseHVYSFJjZEd4bGRDQmpkWEp5Wlc1MFVHRm5aU0E5SURFN1hISmNibHgwWEhSc1pYUWdaV3hsYldWdWRITlBibEJoWjJVZ1BTQTBPMXh5WEc1Y2NseHVYSFJjZEdOdmJuTjBJSEJoWjJsdVlYUnBiMjVGYkVSdlozTWdQU0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDZ25aRzluY3kxd1lXZHBibUYwYVc5dUp5azdYSEpjYmx4MFhIUmpiMjV6ZENCd1lXZHBibUYwYVc5dVJXeERZWFJ6SUQwZ1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvSjJOaGRITXRjR0ZuYVc1aGRHbHZiaWNwTzF4eVhHNWNjbHh1WEhSY2RHWjFibU4wYVc5dUlHUnBjM0JzWVhsUVlXZHBibUYwWldSSmRHVnRjeWhwZEdWdGN5d2dkM0poY0hCbGNpd2dhWFJsYlhOUVpYSlFZV2RsTENCd1lXZGxLU0I3WEhKY2JseDBYSFJjZEhkeVlYQndaWEl1YVc1dVpYSklWRTFNSUQwZ0p5YzdYSEpjYmx4MFhIUmNkSEJoWjJVdExUdGNjbHh1WEhKY2JseDBYSFJjZEd4bGRDQnpkR0Z5ZENBOUlHbDBaVzF6VUdWeVVHRm5aU0FxSUhCaFoyVTdYSEpjYmx4MFhIUmNkR3hsZENCbGJtUWdQU0J6ZEdGeWRDQXJJR2wwWlcxelVHVnlVR0ZuWlR0Y2NseHVYSFJjZEZ4MGJHVjBJSEJoWjJsdVlYUmxaRWwwWlcxeklEMGdhWFJsYlhNdWMyeHBZMlVvYzNSaGNuUXNJR1Z1WkNrN1hISmNibHh5WEc1Y2RGeDBYSFJ3WVdkcGJtRjBaV1JKZEdWdGN5NW1iM0pGWVdOb0tDaHBkR1Z0S1NBOVBpQjdYSEpjYmx4MFhIUmNkRngwYkdWMElHbDBaVzFGYkNBOUlHUnZZM1Z0Wlc1MExtTnlaV0YwWlVWc1pXMWxiblFvSjJScGRpY3BPMXh5WEc1Y2RGeDBYSFJjZEdsMFpXMUZiQzVqYkdGemMweHBjM1F1WVdSa0tDZHdZV2RsWDE5aWIzZ25LVHRjY2x4dVhISmNibHgwWEhSY2RGeDBhWFJsYlVWc0lEMGdhWFJsYlR0Y2NseHVYSEpjYmx4MFhIUmNkRngwZDNKaGNIQmxjaTVoY0hCbGJtUkRhR2xzWkNocGRHVnRSV3dwTzF4eVhHNWNkRngwWEhSOUtUdGNjbHh1WEhSY2RIMWNjbHh1WEhKY2JseDBYSFJtZFc1amRHbHZiaUJrYVhOd2JHRjVVR0ZuYVc1aGRHbHZiaWhwZEdWdGN5d2dkM0poY0hCbGNpd2dhWFJsYlhOUVpYSlFZV2RsS1NCN1hISmNibHgwWEhSY2RIZHlZWEJ3WlhJdWFXNXVaWEpJVkUxTUlEMGdKeWM3WEhKY2JseHlYRzVjZEZ4MFhIUnNaWFFnY0dGblpVTnZkVzUwSUQwZ1RXRjBhQzVqWldsc0tHbDBaVzF6TG14bGJtZDBhQ0F2SUdsMFpXMXpVR1Z5VUdGblpTazdYSEpjYmx4eVhHNWNkRngwWEhSbWIzSWdLR3hsZENCcElEMGdNVHNnYVNBOElIQmhaMlZEYjNWdWRDQXJJREU3SUdrckt5a2dlMXh5WEc1Y2RGeDBYSFJjZEd4bGRDQmlkRzRnUFNCd1lXZHBibUYwYVc5dVFuVjBkRzl1S0drc0lIQmhaMlZEYjNWdWRDazdYSEpjYmx4eVhHNWNkRngwWEhSY2RHSjBiaTV6ZEhsc1pTNTNhV1IwYUNBOUlDY3dKenRjY2x4dVhIUmNkRngwWEhSaWRHNHVjM1I1YkdVdWIzWmxjbVpzYjNjZ1BTQW5hR2xrWkdWdUp6dGNjbHh1WEhSY2RGeDBYSFJpZEc0dWMzUjViR1V1YldGeVoybHVJRDBnSnpBbk8xeHlYRzVjY2x4dVhIUmNkRngwWEhSM2NtRndjR1Z5TG1Gd2NHVnVaRU5vYVd4a0tHSjBiaWs3WEhKY2JseDBYSFJjZEgxY2NseHVYSEpjYmx4MFhIUmNkR3hsZENCdVpYaDBRblJ1SUQwZ2JtVjRkRkJoWjJVb2NHRm5aVU52ZFc1MEtUdGNjbHh1WEhSY2RGeDBkM0poY0hCbGNpNWhjSEJsYm1SRGFHbHNaQ2h1WlhoMFFuUnVLVHRjY2x4dVhISmNibHgwWEhSY2RHeGxkQ0J3Y21WMlFuUnVJRDBnY0hKbGRsQmhaMlVvY0dGblpVTnZkVzUwS1R0Y2NseHVYSFJjZEZ4MGQzSmhjSEJsY2k1d2NtVndaVzVrS0hCeVpYWkNkRzRwTzF4eVhHNWNjbHh1WEhSY2RGeDBiR1YwSUdOMWNuSmxiblJDZEc1RWIyZHpJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpaGNjbHh1WEhSY2RGeDBYSFFuSTJSdlozTWdMbkJoWjJsdVlYUnBiMjR0WW5SdUxtRmpkR2wyWlNkY2NseHVYSFJjZEZ4MEtUdGNjbHh1WEhSY2RGeDBiR1YwSUdOMWNuSmxiblJDZEc1RFlYUnpJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpaGNjbHh1WEhSY2RGeDBYSFFuSTJOaGRITWdMbkJoWjJsdVlYUnBiMjR0WW5SdUxtRmpkR2wyWlNkY2NseHVYSFJjZEZ4MEtUdGNjbHh1WEhKY2JseDBYSFJjZEdsbUlDaGpkWEp5Wlc1MFFuUnVSRzluY3lBbUppQmpkWEp5Wlc1MFFuUnVRMkYwY3lrZ2UxeHlYRzVjZEZ4MFhIUmNkR04xY25KbGJuUkNkRzVFYjJkekxtTnNZWE56VEdsemRDNWhaR1FvSjJkeWIzVndKeWs3WEhKY2JseDBYSFJjZEZ4MFkzVnljbVZ1ZEVKMGJrUnZaM011Ym1WNGRFVnNaVzFsYm5SVGFXSnNhVzVuTG1Oc1lYTnpUR2x6ZEM1aFpHUW9KMmR5YjNWd0p5azdYSEpjYmx4MFhIUmNkRngwWTNWeWNtVnVkRUowYmtSdlozTXVibVY0ZEVWc1pXMWxiblJUYVdKc2FXNW5MbTVsZUhSRmJHVnRaVzUwVTJsaWJHbHVaeTVqYkdGemMweHBjM1F1WVdSa0tGeHlYRzVjZEZ4MFhIUmNkRngwSjJkeWIzVndKMXh5WEc1Y2RGeDBYSFJjZENrN1hISmNibHgwWEhSY2RGeDBZM1Z5Y21WdWRFSjBia1J2WjNNdWNISmxkbWx2ZFhORmJHVnRaVzUwVTJsaWJHbHVaeTVqYkdGemMweHBjM1F1WVdSa0tDZG5jbTkxY0NjcE8xeHlYRzVjY2x4dVhIUmNkRngwWEhSamRYSnlaVzUwUW5SdVEyRjBjeTVqYkdGemMweHBjM1F1WVdSa0tDZG5jbTkxY0NjcE8xeHlYRzVjZEZ4MFhIUmNkR04xY25KbGJuUkNkRzVEWVhSekxtNWxlSFJGYkdWdFpXNTBVMmxpYkdsdVp5NWpiR0Z6YzB4cGMzUXVZV1JrS0NkbmNtOTFjQ2NwTzF4eVhHNWNkRngwWEhSY2RHTjFjbkpsYm5SQ2RHNURZWFJ6TG01bGVIUkZiR1Z0Wlc1MFUybGliR2x1Wnk1dVpYaDBSV3hsYldWdWRGTnBZbXhwYm1jdVkyeGhjM05NYVhOMExtRmtaQ2hjY2x4dVhIUmNkRngwWEhSY2RDZG5jbTkxY0NkY2NseHVYSFJjZEZ4MFhIUXBPMXh5WEc1Y2RGeDBYSFJjZEdOMWNuSmxiblJDZEc1RFlYUnpMbkJ5WlhacGIzVnpSV3hsYldWdWRGTnBZbXhwYm1jdVkyeGhjM05NYVhOMExtRmtaQ2duWjNKdmRYQW5LVHRjY2x4dVhIUmNkRngwZlZ4eVhHNWNkRngwZlZ4eVhHNWNjbHh1WEhSY2RHWjFibU4wYVc5dUlHNWxlSFJRWVdkbEtIQmhaMlZEYjNWdWRDa2dlMXh5WEc1Y2RGeDBYSFJzWlhRZ2JtVjRkRUowYmlBOUlHUnZZM1Z0Wlc1MExtTnlaV0YwWlVWc1pXMWxiblFvSjJKMWRIUnZiaWNwTzF4eVhHNWNkRngwWEhSdVpYaDBRblJ1TG1Oc1lYTnpUR2x6ZEM1aFpHUW9KMjVsZUhRbktUdGNjbHh1WEhSY2RGeDBibVY0ZEVKMGJpNXBibTVsY2xSbGVIUWdQU0FuUGljN1hISmNibHgwWEhSY2RHNWxlSFJDZEc0dVkyeGhjM05NYVhOMExtRmtaQ2duY0dGbmFXNWhkR2x2YmkxaWRHNG5LVHRjY2x4dVhISmNibHgwWEhSY2RHNWxlSFJDZEc0dVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblkyeHBZMnNuTENBb1pTa2dQVDRnZTF4eVhHNWNkRngwWEhSY2RHbG1JQ2h1WlhoMFFuUnVMbkJoY21WdWRFVnNaVzFsYm5RZ1BUMGdjR0ZuYVc1aGRHbHZia1ZzUkc5bmN5a2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MFpHbHpjR3hoZVZCaFoybHVZWFJsWkVsMFpXMXpLRnh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmtiMmRDYjNoQmNuSmhlU3hjY2x4dVhIUmNkRngwWEhSY2RGeDBaRzluYzBKdmVDeGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFpXeGxiV1Z1ZEhOUGJsQmhaMlVzWEhKY2JseDBYSFJjZEZ4MFhIUmNkR04xY25KbGJuUlFZV2RsWEhKY2JseDBYSFJjZEZ4MFhIUXBPMXh5WEc1Y2NseHVYSFJjZEZ4MFhIUmNkR3hsZENCaFkzUnBkbVZDZEc1RWIyY2dQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtGeHlYRzVjZEZ4MFhIUmNkRngwWEhRbkkyUnZaM01nTG5CaFoybHVZWFJwYjI0dFluUnVMbUZqZEdsMlpTZGNjbHh1WEhSY2RGeDBYSFJjZENrN1hISmNibHh5WEc1Y2RGeDBYSFJjZEZ4MFlXTjBhWFpsUW5SdVJHOW5MbTVsZUhSRmJHVnRaVzUwVTJsaWJHbHVaeTVqYkdsamF5Z3BPMXh5WEc1Y2NseHVYSFJjZEZ4MFhIUmNkR2xtSUNoamRYSnlaVzUwVUdGblpTQTlQVDBnY0dGblpVTnZkVzUwS1NCN1hISmNibHgwWEhSY2RGeDBYSFJjZEc1bGVIUkNkRzR1YzNSNWJHVXViM0JoWTJsMGVTQTlJQ2N3TGpVbk8xeHlYRzVjZEZ4MFhIUmNkRngwWEhSdVpYaDBRblJ1TG5OMGVXeGxMbkJ2YVc1MFpYSkZkbVZ1ZEhNZ1BTQW5ibTl1WlNjN1hISmNibHgwWEhSY2RGeDBYSFI5WEhKY2JseHlYRzVjZEZ4MFhIUmNkRngwYkdWMElIQnlaWFpDZEc0Z1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0NjalpHOW5jeUF1Y0hKbGRpY3BPMXh5WEc1Y2NseHVYSFJjZEZ4MFhIUmNkR2xtSUNoamRYSnlaVzUwVUdGblpTQWhQVDBnTVNrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhSd2NtVjJRblJ1TG5OMGVXeGxMbTl3WVdOcGRIa2dQU0FuTVNjN1hISmNibHgwWEhSY2RGeDBYSFJjZEhCeVpYWkNkRzR1YzNSNWJHVXVjRzlwYm5SbGNrVjJaVzUwY3lBOUlDZGhiR3duTzF4eVhHNWNkRngwWEhSY2RGeDBmVnh5WEc1Y2NseHVYSFJjZEZ4MFhIUmNkR2xtSUNoaFkzUnBkbVZDZEc1RWIyY3BJSHRjY2x4dVhIUmNkRngwWEhSY2RGeDBZV04wYVhabFFuUnVSRzluTG1Oc1lYTnpUR2x6ZEM1aFpHUW9KMmR5YjNWd0p5azdYSEpjYmx4MFhIUmNkRngwWEhSY2RHRmpkR2wyWlVKMGJrUnZaeTV1WlhoMFJXeGxiV1Z1ZEZOcFlteHBibWN1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25aM0p2ZFhBbktUdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFlXTjBhWFpsUW5SdVJHOW5MbkJ5WlhacGIzVnpSV3hsYldWdWRGTnBZbXhwYm1jdVkyeGhjM05NYVhOMExtRmtaQ2duWjNKdmRYQW5LVHRjY2x4dVhIUmNkRngwWEhSY2RIMWNjbHh1WEhSY2RGeDBYSFI5WEhKY2JseHlYRzVjZEZ4MFhIUmNkR2xtSUNodVpYaDBRblJ1TG5CaGNtVnVkRVZzWlcxbGJuUWdQVDBnY0dGbmFXNWhkR2x2YmtWc1EyRjBjeWtnZTF4eVhHNWNkRngwWEhSY2RGeDBaR2x6Y0d4aGVWQmhaMmx1WVhSbFpFbDBaVzF6S0Z4eVhHNWNkRngwWEhSY2RGeDBYSFJqWVhSQ2IzaEJjbkpoZVN4Y2NseHVYSFJjZEZ4MFhIUmNkRngwWTJGMGMwSnZlQ3hjY2x4dVhIUmNkRngwWEhSY2RGeDBaV3hsYldWdWRITlBibEJoWjJVc1hISmNibHgwWEhSY2RGeDBYSFJjZEdOMWNuSmxiblJRWVdkbFhISmNibHgwWEhSY2RGeDBYSFFwTzF4eVhHNWNjbHh1WEhSY2RGeDBYSFJjZEd4bGRDQmhZM1JwZG1WQ2RHNURZWFFnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLRnh5WEc1Y2RGeDBYSFJjZEZ4MFhIUW5JMk5oZEhNZ0xuQmhaMmx1WVhScGIyNHRZblJ1TG1GamRHbDJaU2RjY2x4dVhIUmNkRngwWEhSY2RDazdYSEpjYmx4eVhHNWNkRngwWEhSY2RGeDBZV04wYVhabFFuUnVRMkYwTG01bGVIUkZiR1Z0Wlc1MFUybGliR2x1Wnk1amJHbGpheWdwTzF4eVhHNWNjbHh1WEhSY2RGeDBYSFJjZEdsbUlDaGpkWEp5Wlc1MFVHRm5aU0E5UFQwZ2NHRm5aVU52ZFc1MEtTQjdYSEpjYmx4MFhIUmNkRngwWEhSY2RHNWxlSFJDZEc0dWMzUjViR1V1YjNCaFkybDBlU0E5SUNjd0xqVW5PMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUnVaWGgwUW5SdUxuTjBlV3hsTG5CdmFXNTBaWEpGZG1WdWRITWdQU0FuYm05dVpTYzdYSEpjYmx4MFhIUmNkRngwWEhSOVhISmNibHh5WEc1Y2RGeDBYSFJjZEZ4MGJHVjBJSEJ5WlhaQ2RHNGdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtDY2pZMkYwY3lBdWNISmxkaWNwTzF4eVhHNWNjbHh1WEhSY2RGeDBYSFJjZEdsbUlDaGpkWEp5Wlc1MFVHRm5aU0FoUFQwZ01Ta2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUndjbVYyUW5SdUxuTjBlV3hsTG05d1lXTnBkSGtnUFNBbk1TYzdYSEpjYmx4MFhIUmNkRngwWEhSY2RIQnlaWFpDZEc0dWMzUjViR1V1Y0c5cGJuUmxja1YyWlc1MGN5QTlJQ2RoYkd3bk8xeHlYRzVjZEZ4MFhIUmNkRngwZlZ4eVhHNWNjbHh1WEhSY2RGeDBYSFJjZEdsbUlDaGhZM1JwZG1WQ2RHNURZWFFwSUh0Y2NseHVYSFJjZEZ4MFhIUmNkRngwWVdOMGFYWmxRblJ1UTJGMExtTnNZWE56VEdsemRDNWhaR1FvSjJkeWIzVndKeWs3WEhKY2JseDBYSFJjZEZ4MFhIUmNkR0ZqZEdsMlpVSjBia05oZEM1dVpYaDBSV3hsYldWdWRGTnBZbXhwYm1jdVkyeGhjM05NYVhOMExtRmtaQ2duWjNKdmRYQW5LVHRjY2x4dVhIUmNkRngwWEhSY2RGeDBZV04wYVhabFFuUnVRMkYwTG5CeVpYWnBiM1Z6Uld4bGJXVnVkRk5wWW14cGJtY3VZMnhoYzNOTWFYTjBMbUZrWkNnblozSnZkWEFuS1R0Y2NseHVYSFJjZEZ4MFhIUmNkSDFjY2x4dVhIUmNkRngwWEhSOVhISmNibHgwWEhSY2RIMHBPMXh5WEc1Y2NseHVYSFJjZEZ4MGNtVjBkWEp1SUc1bGVIUkNkRzQ3WEhKY2JseDBYSFI5WEhKY2JseHlYRzVjZEZ4MFpuVnVZM1JwYjI0Z2NISmxkbEJoWjJVb2NHRm5aVU52ZFc1MEtTQjdYSEpjYmx4MFhIUmNkR3hsZENCd2NtVjJRblJ1SUQwZ1pHOWpkVzFsYm5RdVkzSmxZWFJsUld4bGJXVnVkQ2duWW5WMGRHOXVKeWs3WEhKY2JseDBYSFJjZEhCeVpYWkNkRzR1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25jSEpsZGljcE8xeHlYRzVjZEZ4MFhIUndjbVYyUW5SdUxtbHVibVZ5VkdWNGRDQTlJQ2M4Snp0Y2NseHVYSFJjZEZ4MGNISmxka0owYmk1amJHRnpjMHhwYzNRdVlXUmtLQ2R3WVdkcGJtRjBhVzl1TFdKMGJpY3BPMXh5WEc1Y2NseHVYSFJjZEZ4MGNISmxka0owYmk1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkamJHbGpheWNzSUNobEtTQTlQaUI3WEhKY2JseDBYSFJjZEZ4MGFXWWdLSEJ5WlhaQ2RHNHVjR0Z5Wlc1MFJXeGxiV1Z1ZENBOVBTQndZV2RwYm1GMGFXOXVSV3hFYjJkektTQjdYSEpjYmx4MFhIUmNkRngwWEhSa2FYTndiR0Y1VUdGbmFXNWhkR1ZrU1hSbGJYTW9YSEpjYmx4MFhIUmNkRngwWEhSY2RHUnZaMEp2ZUVGeWNtRjVMRnh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmtiMmR6UW05NExGeHlYRzVjZEZ4MFhIUmNkRngwWEhSbGJHVnRaVzUwYzA5dVVHRm5aU3hjY2x4dVhIUmNkRngwWEhSY2RGeDBZM1Z5Y21WdWRGQmhaMlZjY2x4dVhIUmNkRngwWEhSY2RDazdYSEpjYmx4eVhHNWNkRngwWEhSY2RGeDBiR1YwSUdGamRHbDJaVUowYmtSdlp5QTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb1hISmNibHgwWEhSY2RGeDBYSFJjZENjalpHOW5jeUF1Y0dGbmFXNWhkR2x2YmkxaWRHNHVZV04wYVhabEoxeHlYRzVjZEZ4MFhIUmNkRngwS1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwWEhSaFkzUnBkbVZDZEc1RWIyY3VjSEpsZG1sdmRYTkZiR1Z0Wlc1MFUybGliR2x1Wnk1amJHbGpheWdwTzF4eVhHNWNjbHh1WEhSY2RGeDBYSFJjZEd4bGRDQnVaWGgwUW5SdUlEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkkyUnZaM01nTG01bGVIUW5LVHRjY2x4dVhISmNibHgwWEhSY2RGeDBYSFJwWmlBb1kzVnljbVZ1ZEZCaFoyVWdJVDA5SUhCaFoyVkRiM1Z1ZENrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhSdVpYaDBRblJ1TG5OMGVXeGxMbTl3WVdOcGRIa2dQU0FuTVNjN1hISmNibHgwWEhSY2RGeDBYSFJjZEc1bGVIUkNkRzR1YzNSNWJHVXVjRzlwYm5SbGNrVjJaVzUwY3lBOUlDZGhiR3duTzF4eVhHNWNkRngwWEhSY2RGeDBmVnh5WEc1Y2NseHVYSFJjZEZ4MFhIUmNkR2xtSUNoamRYSnlaVzUwVUdGblpTQTlQVDBnTVNrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhSd2NtVjJRblJ1TG5OMGVXeGxMbTl3WVdOcGRIa2dQU0FuTUM0MUp6dGNjbHh1WEhSY2RGeDBYSFJjZEZ4MGNISmxka0owYmk1emRIbHNaUzV3YjJsdWRHVnlSWFpsYm5SeklEMGdKMjV2Ym1Vbk8xeHlYRzVjZEZ4MFhIUmNkRngwZlZ4eVhHNWNjbHh1WEhSY2RGeDBYSFJjZEdsbUlDaGhZM1JwZG1WQ2RHNUViMmNwSUh0Y2NseHVYSFJjZEZ4MFhIUmNkRngwWVdOMGFYWmxRblJ1Ukc5bkxtTnNZWE56VEdsemRDNWhaR1FvSjJkeWIzVndKeWs3WEhKY2JseDBYSFJjZEZ4MFhIUmNkR0ZqZEdsMlpVSjBia1J2Wnk1dVpYaDBSV3hsYldWdWRGTnBZbXhwYm1jdVkyeGhjM05NYVhOMExtRmtaQ2duWjNKdmRYQW5LVHRjY2x4dVhIUmNkRngwWEhSY2RGeDBZV04wYVhabFFuUnVSRzluTG5CeVpYWnBiM1Z6Uld4bGJXVnVkRk5wWW14cGJtY3VZMnhoYzNOTWFYTjBMbUZrWkNnblozSnZkWEFuS1R0Y2NseHVYSFJjZEZ4MFhIUmNkSDFjY2x4dVhIUmNkRngwWEhSOVhISmNibHh5WEc1Y2RGeDBYSFJjZEdsbUlDaHdjbVYyUW5SdUxuQmhjbVZ1ZEVWc1pXMWxiblFnUFQwZ2NHRm5hVzVoZEdsdmJrVnNRMkYwY3lrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWkdsemNHeGhlVkJoWjJsdVlYUmxaRWwwWlcxektGeHlYRzVjZEZ4MFhIUmNkRngwWEhSallYUkNiM2hCY25KaGVTeGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFkyRjBjMEp2ZUN4Y2NseHVYSFJjZEZ4MFhIUmNkRngwWld4bGJXVnVkSE5QYmxCaFoyVXNYSEpjYmx4MFhIUmNkRngwWEhSY2RHTjFjbkpsYm5SUVlXZGxYSEpjYmx4MFhIUmNkRngwWEhRcE8xeHlYRzVjY2x4dVhIUmNkRngwWEhSY2RHeGxkQ0JoWTNScGRtVkNkRzVEWVhRZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0Z4eVhHNWNkRngwWEhSY2RGeDBYSFFuSTJOaGRITWdMbkJoWjJsdVlYUnBiMjR0WW5SdUxtRmpkR2wyWlNkY2NseHVYSFJjZEZ4MFhIUmNkQ2s3WEhKY2JseHlYRzVjZEZ4MFhIUmNkRngwWVdOMGFYWmxRblJ1UTJGMExuQnlaWFpwYjNWelJXeGxiV1Z1ZEZOcFlteHBibWN1WTJ4cFkyc29LVHRjY2x4dVhISmNibHgwWEhSY2RGeDBYSFJzWlhRZ2JtVjRkRUowYmlBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvSnlOallYUnpJQzV1WlhoMEp5azdYSEpjYmx4eVhHNWNkRngwWEhSY2RGeDBhV1lnS0dOMWNuSmxiblJRWVdkbElDRTlQU0J3WVdkbFEyOTFiblFwSUh0Y2NseHVYSFJjZEZ4MFhIUmNkRngwYm1WNGRFSjBiaTV6ZEhsc1pTNXZjR0ZqYVhSNUlEMGdKekVuTzF4eVhHNWNkRngwWEhSY2RGeDBYSFJ1WlhoMFFuUnVMbk4wZVd4bExuQnZhVzUwWlhKRmRtVnVkSE1nUFNBbllXeHNKenRjY2x4dVhIUmNkRngwWEhSY2RIMWNjbHh1WEhKY2JseDBYSFJjZEZ4MFhIUnBaaUFvWTNWeWNtVnVkRkJoWjJVZ1BUMDlJREVwSUh0Y2NseHVYSFJjZEZ4MFhIUmNkRngwY0hKbGRrSjBiaTV6ZEhsc1pTNXZjR0ZqYVhSNUlEMGdKekF1TlNjN1hISmNibHgwWEhSY2RGeDBYSFJjZEhCeVpYWkNkRzR1YzNSNWJHVXVjRzlwYm5SbGNrVjJaVzUwY3lBOUlDZHViMjVsSnp0Y2NseHVYSFJjZEZ4MFhIUmNkSDFjY2x4dVhISmNibHgwWEhSY2RGeDBYSFJwWmlBb1lXTjBhWFpsUW5SdVEyRjBLU0I3WEhKY2JseDBYSFJjZEZ4MFhIUmNkR0ZqZEdsMlpVSjBia05oZEM1amJHRnpjMHhwYzNRdVlXUmtLQ2RuY205MWNDY3BPMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmhZM1JwZG1WQ2RHNURZWFF1Ym1WNGRFVnNaVzFsYm5SVGFXSnNhVzVuTG1Oc1lYTnpUR2x6ZEM1aFpHUW9KMmR5YjNWd0p5azdYSEpjYmx4MFhIUmNkRngwWEhSY2RHRmpkR2wyWlVKMGJrTmhkQzV3Y21WMmFXOTFjMFZzWlcxbGJuUlRhV0pzYVc1bkxtTnNZWE56VEdsemRDNWhaR1FvSjJkeWIzVndKeWs3WEhKY2JseDBYSFJjZEZ4MFhIUjlYSEpjYmx4MFhIUmNkRngwZlZ4eVhHNWNkRngwWEhSOUtUdGNjbHh1WEhKY2JseDBYSFJjZEdsbUlDaGpkWEp5Wlc1MFVHRm5aU0E5UFQwZ01Ta2dlMXh5WEc1Y2RGeDBYSFJjZEhCeVpYWkNkRzR1YzNSNWJHVXViM0JoWTJsMGVTQTlJQ2N3TGpVbk8xeHlYRzVjZEZ4MFhIUmNkSEJ5WlhaQ2RHNHVjM1I1YkdVdWNHOXBiblJsY2tWMlpXNTBjeUE5SUNkdWIyNWxKenRjY2x4dVhIUmNkRngwZlZ4eVhHNWNjbHh1WEhSY2RGeDBjbVYwZFhKdUlIQnlaWFpDZEc0N1hISmNibHgwWEhSOVhISmNibHh5WEc1Y2RGeDBablZ1WTNScGIyNGdjR0ZuYVc1aGRHbHZia0oxZEhSdmJpaHdZV2RsTENCd1lXZGxRMjkxYm5RcElIdGNjbHh1WEhSY2RGeDBiR1YwSUdKMWRIUnZiaUE5SUdSdlkzVnRaVzUwTG1OeVpXRjBaVVZzWlcxbGJuUW9KMkoxZEhSdmJpY3BPMXh5WEc1Y2RGeDBYSFJpZFhSMGIyNHVZMnhoYzNOTWFYTjBMbUZrWkNnbmNHRm5hVzVoZEdsdmJpMWlkRzRuS1R0Y2NseHVYSFJjZEZ4MFluVjBkRzl1TG1sdWJtVnlWR1Y0ZENBOUlIQmhaMlU3WEhKY2JseHlYRzVjZEZ4MFhIUnBaaUFvWTNWeWNtVnVkRkJoWjJVZ1BUMGdjR0ZuWlNrZ2UxeHlYRzVjZEZ4MFhIUmNkR0oxZEhSdmJpNWpiR0Z6YzB4cGMzUXVZV1JrS0NkaFkzUnBkbVVuS1R0Y2NseHVYSFJjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkRngwWW5WMGRHOXVMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMk5zYVdOckp5d2dLR1VwSUQwK0lIdGNjbHh1WEhSY2RGeDBYSFJqZFhKeVpXNTBVR0ZuWlNBOUlIQmhaMlU3WEhKY2JseHlYRzVjZEZ4MFhIUmNkR2xtSUNoaWRYUjBiMjR1Y0dGeVpXNTBSV3hsYldWdWRDQTlQU0J3WVdkcGJtRjBhVzl1Uld4RWIyZHpLU0I3WEhKY2JseDBYSFJjZEZ4MFhIUmthWE53YkdGNVVHRm5hVzVoZEdWa1NYUmxiWE1vWEhKY2JseDBYSFJjZEZ4MFhIUmNkR1J2WjBKdmVFRnljbUY1TEZ4eVhHNWNkRngwWEhSY2RGeDBYSFJrYjJkelFtOTRMRnh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmxiR1Z0Wlc1MGMwOXVVR0ZuWlN4Y2NseHVYSFJjZEZ4MFhIUmNkRngwWTNWeWNtVnVkRkJoWjJWY2NseHVYSFJjZEZ4MFhIUmNkQ2s3WEhKY2JseHlYRzVjZEZ4MFhIUmNkRngwYkdWMElHRmpkR2wyWlVKMGJrUnZaeUE5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9YSEpjYmx4MFhIUmNkRngwWEhSY2RDY2paRzluY3lBdWNHRm5hVzVoZEdsdmJpMWlkRzR1WVdOMGFYWmxKMXh5WEc1Y2RGeDBYSFJjZEZ4MEtUdGNjbHh1WEhKY2JseDBYSFJjZEZ4MFhIUmhZM1JwZG1WQ2RHNUViMmN1WTJ4aGMzTk1hWE4wTG5KbGJXOTJaU2duWVdOMGFYWmxKeWs3WEhKY2JseHlYRzVjZEZ4MFhIUmNkRngwWW5WMGRHOXVMbU5zWVhOelRHbHpkQzVoWkdRb0oyRmpkR2wyWlNjcE8xeHlYRzVjY2x4dVhIUmNkRngwWEhSY2RHeGxkQ0J1WlhoMFFuUnVJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25JMlJ2WjNNZ0xtNWxlSFFuS1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwWEhScFppQW9ZM1Z5Y21WdWRGQmhaMlVnUFQwOUlIQmhaMlZEYjNWdWRDa2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUnVaWGgwUW5SdUxuTjBlV3hsTG05d1lXTnBkSGtnUFNBbk1DNDFKenRjY2x4dVhIUmNkRngwWEhSY2RGeDBibVY0ZEVKMGJpNXpkSGxzWlM1d2IybHVkR1Z5UlhabGJuUnpJRDBnSjI1dmJtVW5PMXh5WEc1Y2RGeDBYSFJjZEZ4MGZTQmxiSE5sSUh0Y2NseHVYSFJjZEZ4MFhIUmNkRngwYm1WNGRFSjBiaTV6ZEhsc1pTNXZjR0ZqYVhSNUlEMGdKekVuTzF4eVhHNWNkRngwWEhSY2RGeDBYSFJ1WlhoMFFuUnVMbk4wZVd4bExuQnZhVzUwWlhKRmRtVnVkSE1nUFNBbllXeHNKenRjY2x4dVhIUmNkRngwWEhSY2RIMWNjbHh1WEhKY2JseDBYSFJjZEZ4MFhIUnNaWFFnY0hKbGRrSjBiaUE5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9KeU5rYjJkeklDNXdjbVYySnlrN1hISmNibHh5WEc1Y2RGeDBYSFJjZEZ4MGFXWWdLR04xY25KbGJuUlFZV2RsSUQwOVBTQXhLU0I3WEhKY2JseDBYSFJjZEZ4MFhIUmNkSEJ5WlhaQ2RHNHVjM1I1YkdVdWIzQmhZMmwwZVNBOUlDY3dMalVuTzF4eVhHNWNkRngwWEhSY2RGeDBYSFJ3Y21WMlFuUnVMbk4wZVd4bExuQnZhVzUwWlhKRmRtVnVkSE1nUFNBbmJtOXVaU2M3WEhKY2JseDBYSFJjZEZ4MFhIUjlJR1ZzYzJVZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhSd2NtVjJRblJ1TG5OMGVXeGxMbTl3WVdOcGRIa2dQU0FuTVNjN1hISmNibHgwWEhSY2RGeDBYSFJjZEhCeVpYWkNkRzR1YzNSNWJHVXVjRzlwYm5SbGNrVjJaVzUwY3lBOUlDZGhiR3duTzF4eVhHNWNkRngwWEhSY2RGeDBmVnh5WEc1Y2RGeDBYSFJjZEgxY2NseHVYSEpjYmx4MFhIUmNkRngwYVdZZ0tHSjFkSFJ2Ymk1d1lYSmxiblJGYkdWdFpXNTBJRDA5SUhCaFoybHVZWFJwYjI1RmJFTmhkSE1wSUh0Y2NseHVYSFJjZEZ4MFhIUmNkR1JwYzNCc1lYbFFZV2RwYm1GMFpXUkpkR1Z0Y3loY2NseHVYSFJjZEZ4MFhIUmNkRngwWTJGMFFtOTRRWEp5WVhrc1hISmNibHgwWEhSY2RGeDBYSFJjZEdOaGRITkNiM2dzWEhKY2JseDBYSFJjZEZ4MFhIUmNkR1ZzWlcxbGJuUnpUMjVRWVdkbExGeHlYRzVjZEZ4MFhIUmNkRngwWEhSamRYSnlaVzUwVUdGblpWeHlYRzVjZEZ4MFhIUmNkRngwS1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwWEhSc1pYUWdZV04wYVhabFFuUnVRMkYwSUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWhjY2x4dVhIUmNkRngwWEhSY2RGeDBKeU5qWVhSeklDNXdZV2RwYm1GMGFXOXVMV0owYmk1aFkzUnBkbVVuWEhKY2JseDBYSFJjZEZ4MFhIUXBPMXh5WEc1Y2NseHVYSFJjZEZ4MFhIUmNkR0ZqZEdsMlpVSjBia05oZEM1amJHRnpjMHhwYzNRdWNtVnRiM1psS0NkaFkzUnBkbVVuS1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwWEhSaWRYUjBiMjR1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25ZV04wYVhabEp5azdYSEpjYmx4eVhHNWNkRngwWEhSY2RGeDBiR1YwSUc1bGVIUkNkRzRnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2NqWTJGMGN5QXVibVY0ZENjcE8xeHlYRzVjY2x4dVhIUmNkRngwWEhSY2RHbG1JQ2hqZFhKeVpXNTBVR0ZuWlNBOVBUMGdjR0ZuWlVOdmRXNTBLU0I3WEhKY2JseDBYSFJjZEZ4MFhIUmNkRzVsZUhSQ2RHNHVjM1I1YkdVdWIzQmhZMmwwZVNBOUlDY3dMalVuTzF4eVhHNWNkRngwWEhSY2RGeDBYSFJ1WlhoMFFuUnVMbk4wZVd4bExuQnZhVzUwWlhKRmRtVnVkSE1nUFNBbmJtOXVaU2M3WEhKY2JseDBYSFJjZEZ4MFhIUjlJR1ZzYzJVZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhSdVpYaDBRblJ1TG5OMGVXeGxMbTl3WVdOcGRIa2dQU0FuTVNjN1hISmNibHgwWEhSY2RGeDBYSFJjZEc1bGVIUkNkRzR1YzNSNWJHVXVjRzlwYm5SbGNrVjJaVzUwY3lBOUlDZGhiR3duTzF4eVhHNWNkRngwWEhSY2RGeDBmVnh5WEc1Y2NseHVYSFJjZEZ4MFhIUmNkR3hsZENCd2NtVjJRblJ1SUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduSTJOaGRITWdMbkJ5WlhZbktUdGNjbHh1WEhKY2JseDBYSFJjZEZ4MFhIUnBaaUFvWTNWeWNtVnVkRkJoWjJVZ1BUMDlJREVwSUh0Y2NseHVYSFJjZEZ4MFhIUmNkRngwY0hKbGRrSjBiaTV6ZEhsc1pTNXZjR0ZqYVhSNUlEMGdKekF1TlNjN1hISmNibHgwWEhSY2RGeDBYSFJjZEhCeVpYWkNkRzR1YzNSNWJHVXVjRzlwYm5SbGNrVjJaVzUwY3lBOUlDZHViMjVsSnp0Y2NseHVYSFJjZEZ4MFhIUmNkSDBnWld4elpTQjdYSEpjYmx4MFhIUmNkRngwWEhSY2RIQnlaWFpDZEc0dWMzUjViR1V1YjNCaFkybDBlU0E5SUNjeEp6dGNjbHh1WEhSY2RGeDBYSFJjZEZ4MGNISmxka0owYmk1emRIbHNaUzV3YjJsdWRHVnlSWFpsYm5SeklEMGdKMkZzYkNjN1hISmNibHgwWEhSY2RGeDBYSFI5WEhKY2JseDBYSFJjZEZ4MGZWeHlYRzVjZEZ4MFhIUjlLVHRjY2x4dVhISmNibHgwWEhSY2RISmxkSFZ5YmlCaWRYUjBiMjQ3WEhKY2JseDBYSFI5WEhKY2JseHlYRzVjZEZ4MFkyOXVjM1FnWlhod1lXNWtjMDF2Y21VZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5UVd4c0tDZGJaWGh3WVc1a0xXMXZjbVZkSnlrN1hISmNibHh5WEc1Y2RGeDBablZ1WTNScGIyNGdaWGh3WVc1a0tDa2dlMXh5WEc1Y2RGeDBYSFJqYjI1emRDQnphRzkzUTI5dWRHVnVkQ0E5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLSFJvYVhNdVpHRjBZWE5sZEM1MFlYSm5aWFFwTzF4eVhHNWNkRngwWEhScFppQW9jMmh2ZDBOdmJuUmxiblF1WTJ4aGMzTk1hWE4wTG1OdmJuUmhhVzV6S0NkaFkzUnBkbVVuS1NrZ2UxeHlYRzVjZEZ4MFhIUmNkSFJvYVhNdWFXNXVaWEpJVkUxTUlEMGdkR2hwY3k1a1lYUmhjMlYwTG5Ob2IzZDBaWGgwTzF4eVhHNWNkRngwWEhSOUlHVnNjMlVnZTF4eVhHNWNkRngwWEhSY2RIUm9hWE11YVc1dVpYSklWRTFNSUQwZ2RHaHBjeTVrWVhSaGMyVjBMbWhwWkdWMFpYaDBPMXh5WEc1Y2RGeDBYSFI5WEhKY2JseHlYRzVjZEZ4MFhIUnphRzkzUTI5dWRHVnVkQzVqYkdGemMweHBjM1F1ZEc5bloyeGxLQ2RoWTNScGRtVW5LVHRjY2x4dVhIUmNkRngwYVdZZ0tITm9iM2REYjI1MFpXNTBMbU5zWVhOelRHbHpkQzVqYjI1MFlXbHVjeWduWVdOMGFYWmxKeWtwSUh0Y2NseHVYSFJjZEZ4MFhIUnphRzkzUTI5dWRHVnVkQzV6ZEhsc1pTNXRZWGhJWldsbmFIUWdQU0J6YUc5M1EyOXVkR1Z1ZEM1elkzSnZiR3hJWldsbmFIUWdLeUFuY0hnbk8xeHlYRzVjZEZ4MFhIUjlJR1ZzYzJVZ2UxeHlYRzVjZEZ4MFhIUmNkSE5vYjNkRGIyNTBaVzUwTG5OMGVXeGxMbTFoZUVobGFXZG9kQ0E5SURJd0lDc2dKM0I0Snp0Y2NseHVYSFJjZEZ4MGZWeHlYRzVjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkR2xtSUNoa2IyZHpRbTk0S1NCN1hISmNibHgwWEhSY2RHUnBjM0JzWVhsUVlXZHBibUYwWldSSmRHVnRjeWhrYjJkQ2IzaEJjbkpoZVN3Z1pHOW5jMEp2ZUN3Z1pXeGxiV1Z1ZEhOUGJsQmhaMlVzSUdOMWNuSmxiblJRWVdkbEtUdGNjbHh1WEhSY2RGeDBaR2x6Y0d4aGVWQmhaMmx1WVhScGIyNG9aRzluUW05NFFYSnlZWGtzSUhCaFoybHVZWFJwYjI1RmJFUnZaM01zSUdWc1pXMWxiblJ6VDI1UVlXZGxLVHRjY2x4dVhISmNibHgwWEhSY2RHVjRjR0Z1WkhOTmIzSmxMbVp2Y2tWaFkyZ29LR0owYmlrZ1BUNGdlMXh5WEc1Y2RGeDBYSFJjZEdKMGJpNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZGpiR2xqYXljc0lHVjRjR0Z1WkNrN1hISmNibHgwWEhSY2RIMHBPMXh5WEc1Y2RGeDBmVnh5WEc1Y2NseHVYSFJjZEdsbUlDaGpZWFJ6UW05NEtTQjdYSEpjYmx4MFhIUmNkR1JwYzNCc1lYbFFZV2RwYm1GMFpXUkpkR1Z0Y3loallYUkNiM2hCY25KaGVTd2dZMkYwYzBKdmVDd2daV3hsYldWdWRITlBibEJoWjJVc0lHTjFjbkpsYm5SUVlXZGxLVHRjY2x4dVhIUmNkRngwWkdsemNHeGhlVkJoWjJsdVlYUnBiMjRvWTJGMFFtOTRRWEp5WVhrc0lIQmhaMmx1WVhScGIyNUZiRU5oZEhNc0lHVnNaVzFsYm5SelQyNVFZV2RsS1R0Y2NseHVYSEpjYmx4MFhIUmNkR1Y0Y0dGdVpITk5iM0psTG1admNrVmhZMmdvS0dKMGJpa2dQVDRnZTF4eVhHNWNkRngwWEhSY2RHSjBiaTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RqYkdsamF5Y3NJR1Y0Y0dGdVpDazdYSEpjYmx4MFhIUmNkSDBwTzF4eVhHNWNkRngwZlZ4eVhHNWNkSDFjY2x4dVhISmNibHgwYVdZZ0tHRnVhVzFoYkhOUVlXZGxjeWtnZTF4eVhHNWNkRngwS0daMWJtTjBhVzl1SUNncElIdGNjbHh1WEhSY2RGeDBaR2x6Y0d4aGVVRnVhVzFoYkhNb0tUdGNjbHh1WEhSY2RIMHBLQ2s3WEhKY2JseDBmVnh5WEc1OUtUdGNjbHh1SWl3aVpHOWpkVzFsYm5RdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblJFOU5RMjl1ZEdWdWRFeHZZV1JsWkNjc0lHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhIUXZMeUJtYjNKdElIWmhiR2xrWVhScGIyNWNjbHh1WEhSamIyNXpkQ0JtYjNKdElEMGdaRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkRUo1U1dRb0oyTnZiblJoWTNRdFptOXliU2NwTzF4eVhHNWNkR052Ym5OMElHNWhiV1VnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2duYm1GdFpTY3BPMXh5WEc1Y2RHTnZibk4wSUdWdFlXbHNJRDBnWkc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEVKNVNXUW9KMlZ0WVdsc0p5azdYSEpjYmx4MFkyOXVjM1FnYldWemMyRm5aU0E5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2R0WlhOellXZGxKeWs3WEhKY2JseDBZMjl1YzNRZ1ptOXliVUowYmlBOUlHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0NkbWIzSnRMV0owYmljcE8xeHlYRzVjY2x4dVhIUnBaaUFvWm05eWJTa2dlMXh5WEc1Y2RGeDBXMXh5WEc1Y2RGeDBYSFFuWTJ4cFkyc25MRnh5WEc1Y2RGeDBYSFFuYjI1MGIzVmphSE4wWVhKMEp5eGNjbHh1WEhSY2RGeDBKMjF2ZFhObGIzWmxjaWNzWEhKY2JseDBYSFJjZENkclpYbGtiM2R1Snl4Y2NseHVYSFJjZEZ4MEoydGxlWEJ5WlhOekp5eGNjbHh1WEhSY2RGeDBKM1J2ZFdOb2MzUmhjblFuTEZ4eVhHNWNkRngwWEhRbmRHOTFZMmh0YjNabEp5eGNjbHh1WEhSY2RGMHVabTl5UldGamFDaGNjbHh1WEhSY2RGeDBLR1YyWlc1MEtTQTlQbHh5WEc1Y2RGeDBYSFJjZEdSdlkzVnRaVzUwTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvWlhabGJuUXNJQ2dwSUQwK0lIdGNjbHh1WEhSY2RGeDBYSFJjZEdsbUlDaGphR1ZqYTBsdWNIVjBjeWdwSUQwOVBTQm1ZV3h6WlNrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhSbWIzSnRRblJ1TG1ScGMyRmliR1ZrSUQwZ2RISjFaVHRjY2x4dVhIUmNkRngwWEhSY2RIMGdaV3h6WlNCN1hISmNibHgwWEhSY2RGeDBYSFJjZEdadmNtMUNkRzR1WkdsellXSnNaV1FnUFNCbVlXeHpaVHRjY2x4dVhIUmNkRngwWEhSY2RIMWNjbHh1WEhSY2RGeDBYSFI5S1N4Y2NseHVYSFJjZEZ4MFptRnNjMlZjY2x4dVhIUmNkQ2s3WEhKY2JseHlYRzVjZEZ4MFpuVnVZM1JwYjI0Z1kyaGxZMnRKYm5CMWRITW9LU0I3WEhKY2JseDBYSFJjZEdOdmJuTjBJRzVoYldWV1lXeDFaU0E5SUc1aGJXVXVkbUZzZFdVdWRISnBiU2dwTzF4eVhHNWNkRngwWEhSamIyNXpkQ0JsYldGcGJGWmhiSFZsSUQwZ1pXMWhhV3d1ZG1Gc2RXVXVkSEpwYlNncE8xeHlYRzVjZEZ4MFhIUmpiMjV6ZENCdFpYTnpZV2RsVm1Gc2RXVWdQU0J0WlhOellXZGxMblpoYkhWbExuUnlhVzBvS1R0Y2NseHVYSEpjYmx4MFhIUmNkR2xtSUNodVlXMWxWbUZzZFdVZ1BUMDlJQ2NuS1NCN1hISmNibHgwWEhSY2RGeDBjMlYwUlhKeWIzSkdiM0lvYm1GdFpTd2dKMUJzWldGelpTQmxiblJsY2lCNWIzVnlJR1oxYkd3Z2JtRnRaU2NwTzF4eVhHNWNkRngwWEhSOUlHVnNjMlVnZTF4eVhHNWNkRngwWEhSY2RITmxkRk4xWTJObGMzTkdiM0lvYm1GdFpTazdYSEpjYmx4MFhIUmNkSDFjY2x4dVhISmNibHgwWEhSY2RHbG1JQ2hsYldGcGJGWmhiSFZsSUQwOVBTQW5KeWtnZTF4eVhHNWNkRngwWEhSY2RITmxkRVZ5Y205eVJtOXlLR1Z0WVdsc0xDQW5VR3hsWVhObElHVnVkR1Z5SUhsdmRYSWdaVzFoYVd3Z1lXUmtjbVZ6Y3ljcE8xeHlYRzVjZEZ4MFhIUjlJR1ZzYzJVZ2FXWWdLQ0ZsYldGcGJFbHpWbUZzYVdRb1pXMWhhV3hXWVd4MVpTa3BJSHRjY2x4dVhIUmNkRngwWEhSelpYUkZjbkp2Y2tadmNpaGxiV0ZwYkN3Z0owVnRZV2xzSUdseklHNXZkQ0IyWVd4cFpDY3BPMXh5WEc1Y2RGeDBYSFI5SUdWc2MyVWdlMXh5WEc1Y2RGeDBYSFJjZEhObGRGTjFZMk5sYzNOR2IzSW9aVzFoYVd3cE8xeHlYRzVjZEZ4MFhIUjlYSEpjYmx4eVhHNWNkRngwWEhScFppQW9iV1Z6YzJGblpWWmhiSFZsSUQwOVBTQW5KeWtnZTF4eVhHNWNkRngwWEhSY2RITmxkRVZ5Y205eVJtOXlLRzFsYzNOaFoyVXNJQ2RRYkdWaGMyVWdaVzUwWlhJZ2VXOTFjaUJ0WlhOellXZGxKeWs3WEhKY2JseDBYSFJjZEgwZ1pXeHpaU0I3WEhKY2JseDBYSFJjZEZ4MGMyVjBVM1ZqWTJWemMwWnZjaWh0WlhOellXZGxLVHRjY2x4dVhIUmNkRngwZlZ4eVhHNWNjbHh1WEhSY2RGeDBhV1lnS0Z4eVhHNWNkRngwWEhSY2RHNWhiV1ZXWVd4MVpTQTlQVDBnSnljZ2ZIeGNjbHh1WEhSY2RGeDBYSFJsYldGcGJGWmhiSFZsSUQwOVBTQW5KeUI4ZkZ4eVhHNWNkRngwWEhSY2RHMWxjM05oWjJWV1lXeDFaU0E5UFQwZ0p5Y2dmSHhjY2x4dVhIUmNkRngwWEhRaFpXMWhhV3hKYzFaaGJHbGtLR1Z0WVdsc1ZtRnNkV1VwWEhKY2JseDBYSFJjZENrZ2UxeHlYRzVjZEZ4MFhIUmNkSEpsZEhWeWJpQm1ZV3h6WlR0Y2NseHVYSFJjZEZ4MGZTQmxiSE5sSUh0Y2NseHVYSFJjZEZ4MFhIUnlaWFIxY200Z2RISjFaVHRjY2x4dVhIUmNkRngwZlZ4eVhHNWNkRngwZlZ4eVhHNWNjbHh1WEhSY2RHWjFibU4wYVc5dUlITmxkRVZ5Y205eVJtOXlLR2x1Y0hWMExDQnRaWE56WVdkbEtTQjdYSEpjYmx4MFhIUmNkR052Ym5OMElHWnZjbTBnUFNCcGJuQjFkQzV3WVhKbGJuUkZiR1Z0Wlc1ME8xeHlYRzVjZEZ4MFhIUmpiMjV6ZENCemJXRnNiQ0E5SUdadmNtMHVjWFZsY25sVFpXeGxZM1J2Y2lnbmMyMWhiR3duS1R0Y2NseHVYSEpjYmx4MFhIUmNkSE50WVd4c0xtbHVibVZ5VkdWNGRDQTlJRzFsYzNOaFoyVTdYSEpjYmx4MFhIUmNkR1p2Y20wdVkyeGhjM05PWVcxbElEMGdKMlp2Y20xZlgyZHliM1Z3SUdWeWNtOXlKenRjY2x4dVhIUmNkSDFjY2x4dVhISmNibHgwWEhSbWRXNWpkR2x2YmlCelpYUlRkV05qWlhOelJtOXlLR2x1Y0hWMEtTQjdYSEpjYmx4MFhIUmNkR052Ym5OMElHWnZjbTBnUFNCcGJuQjFkQzV3WVhKbGJuUkZiR1Z0Wlc1ME8xeHlYRzVjZEZ4MFhIUm1iM0p0TG1Oc1lYTnpUbUZ0WlNBOUlDZG1iM0p0WDE5bmNtOTFjQ0J6ZFdOalpYTnpKenRjY2x4dVhIUmNkSDFjY2x4dVhISmNibHgwWEhSbWRXNWpkR2x2YmlCbGJXRnBiRWx6Vm1Gc2FXUW9aVzFoYVd3cElIdGNjbHh1WEhSY2RGeDBZMjl1YzNRZ2NtVWdQU0F2WGlnb1cxNDhQaWdwWEZ4YlhGeGRYRnhjWEM0c096cGNYSE5BWENKZEt5aGNYQzViWGp3K0tDbGNYRnRjWEYxY1hGeGNMaXc3T2x4Y2MwQmNJbDByS1NvcGZDaGNJaTRyWENJcEtVQW9LRnhjVzFzd0xUbGRlekVzTTMxY1hDNWJNQzA1WFhzeExETjlYRnd1V3pBdE9WMTdNU3d6ZlZ4Y0xsc3dMVGxkZXpFc00zMWRLWHdvS0Z0aExYcEJMVnBjWEMwd0xUbGRLMXhjTGlrclcyRXRla0V0V2wxN01peDlLU2trTHk1MFpYTjBLRnh5WEc1Y2RGeDBYSFJjZEdWdFlXbHNYSEpjYmx4MFhIUmNkQ2s3WEhKY2JseHlYRzVjZEZ4MFhIUnlaWFIxY200Z2NtVTdYSEpjYmx4MFhIUjlYSEpjYmx4MGZWeHlYRzU5S1R0Y2NseHVJaXdpWkc5amRXMWxiblF1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduUkU5TlEyOXVkR1Z1ZEV4dllXUmxaQ2NzSUdaMWJtTjBhVzl1SUNncElIdGNibHgwZDJsdVpHOTNMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMnh2WVdRbkxDQW9aU2tnUFQ0Z2UxeHVYSFJjZEdOdmJuTjBJSEJ5Wld4dllXUWdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtDY3VjSEpsYkc5aFpDY3BPMXh1WEc1Y2RGeDBjSEpsYkc5aFpDNWpiR0Z6YzB4cGMzUXVZV1JrS0Nkd2NtVnNiMkZrTFdacGJtbHphR1ZrSnlrN1hHNWNkSDBwTzF4dVhHNWNkR052Ym5OMElHSjBibE5qY205c2JGUnZWRzl3SUQwZ1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvSjJKMGJsTmpjbTlzYkZSdlZHOXdKeWs3WEc1Y2RHSjBibE5qY205c2JGUnZWRzl3TG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjJOc2FXTnJKeXdnS0dVcElEMCtJSHRjYmx4MFhIUjNhVzVrYjNjdWMyTnliMnhzVkc4b2UxeHVYSFJjZEZ4MGRHOXdPaUF3TEZ4dVhIUmNkRngwYkdWbWREb2dNQ3hjYmx4MFhIUmNkR0psYUdGMmFXOXlPaUFuYzIxdmIzUm9KeXhjYmx4MFhIUjlLVHRjYmx4MGZTazdYRzU5S1R0Y2JpSXNJbVJ2WTNWdFpXNTBMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMFJQVFVOdmJuUmxiblJNYjJGa1pXUW5MQ0JtZFc1amRHbHZiaUFvS1NCN1hISmNibHgwWTI5dWMzUWdibUYyUTI5dWRHRnBibVZ5SUQwZ1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvSjI1aGRpMWpiMjUwWVdsdVpYSW5LVHRjY2x4dVhIUmpiMjV6ZENCdFpXNTFRblJ1SUQwZ1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvSjIxbGJuVXRZblJ1SnlrN1hISmNibHgwWTI5dWMzUWdibUYyVEdsemRDQTlJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJDZVVsa0tDZHVZWFl0YkdsemRDY3BPMXh5WEc1Y2NseHVYSFIzYVc1a2IzY3VZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25jMk55YjJ4c0p5d2dLR1VwSUQwK0lIdGNjbHh1WEhSY2RHbG1JQ2hrYjJOMWJXVnVkQzVrYjJOMWJXVnVkRVZzWlcxbGJuUXVjMk55YjJ4c1ZHOXdJRDRnTUNrZ2UxeHlYRzVjZEZ4MFhIUnVZWFpEYjI1MFlXbHVaWEl1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25jM1JwWTJ0NUp5azdYSEpjYmx4MFhIUmNkR0owYmxOamNtOXNiRlJ2Vkc5d0xuTjBlV3hsTG05d1lXTnBkSGtnUFNBeE8xeHlYRzVjZEZ4MGZTQmxiSE5sSUh0Y2NseHVYSFJjZEZ4MGJtRjJRMjl1ZEdGcGJtVnlMbU5zWVhOelRHbHpkQzV5WlcxdmRtVW9KM04wYVdOcmVTY3BPMXh5WEc1Y2RGeDBYSFJpZEc1VFkzSnZiR3hVYjFSdmNDNXpkSGxzWlM1dmNHRmphWFI1SUQwZ01EdGNjbHh1WEhSY2RIMWNjbHh1WEhSOUtUdGNjbHh1WEhKY2JseDBiV1Z1ZFVKMGJpNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZGpiR2xqYXljc0lDaGxLU0E5UGlCN1hISmNibHgwWEhSdFpXNTFRblJ1TG1Oc1lYTnpUR2x6ZEM1MGIyZG5iR1VvSjJOc2FXTnJaV1FuS1R0Y2NseHVYSFJjZEc1aGRrTnZiblJoYVc1bGNpNWpiR0Z6YzB4cGMzUXVkRzluWjJ4bEtDZHZkbVZ5YkdGNUp5azdYSEpjYmx4MFhIUnVZWFpNYVhOMExtTnNZWE56VEdsemRDNTBiMmRuYkdVb0ozTm9iM2NuS1R0Y2NseHVYSFI5S1R0Y2NseHVmU2s3WEhKY2JpSXNJbVJ2WTNWdFpXNTBMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMFJQVFVOdmJuUmxiblJNYjJGa1pXUW5MQ0JtZFc1amRHbHZiaUFvS1NCN1hISmNibHgwTHk4Z1kyRnliM1Z6Wld4Y2NseHVYSFJqYjI1emRDQmpZWEp2ZFhObGJDQTlJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJDZVVsa0tDZGpZWEp2ZFhObGJDY3BPMXh5WEc1Y2RHTnZibk4wSUhCeVpYWkNkRzRnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2duY0hKbGRpY3BPMXh5WEc1Y2RHTnZibk4wSUc1bGVIUkNkRzRnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2duYm1WNGRDY3BPMXh5WEc1Y2RHTnZibk4wSUdOaGNtOTFjMlZzVlhKc0lEMGdKeTR2YW5NdlkyRnliM1Z6Wld3dWFuTnZiaWM3WEhKY2JseHlYRzVjZEd4bGRDQm1hWEp6ZEZOc2FXUmxPMXh5WEc1Y2RHeGxkQ0JzWVhOMFUyeHBaR1U3WEhKY2JseHlYRzVjZEdaMWJtTjBhVzl1SUdkbGRGTnNhV1JsYzBSaGRHRW9LU0I3WEhKY2JseDBYSFJ5WlhSMWNtNGdibVYzSUZCeWIyMXBjMlVvS0hKbGMyOXNkbVVzSUhKbGFtVmpkQ2tnUFQ0Z2UxeHlYRzVjZEZ4MFhIUm1aWFJqYUNoallYSnZkWE5sYkZWeWJDbGNjbHh1WEhSY2RGeDBYSFF1ZEdobGJpZ29jbVZ6Y0NrZ1BUNGdjbVZ6Y0M1cWMyOXVLQ2twWEhKY2JseDBYSFJjZEZ4MExuUm9aVzRvS0dSaGRHRXBJRDArSUhKbGMyOXNkbVVvWkdGMFlTa3BYSEpjYmx4MFhIUmNkRngwTG1OaGRHTm9LQ2hsY25JcElEMCtJSEpsYW1WamRDaGxjbklwS1R0Y2NseHVYSFJjZEgwcE8xeHlYRzVjZEgxY2NseHVYSEpjYmx4MFlYTjVibU1nWm5WdVkzUnBiMjRnWkdsemNHeGhlVU5oY205MWMyVnNLQ2tnZTF4eVhHNWNkRngwWTI5dWMzUWdaR0YwWVV4cGMzUWdQU0JoZDJGcGRDQm5aWFJUYkdsa1pYTkVZWFJoS0NrN1hISmNibHgwWEhSamIyNXpkQ0J6Ykdsa1pYTkJjbkpoZVNBOUlHUmhkR0ZNYVhOMExuTnNhV1JsY3p0Y2NseHVYSEpjYmx4MFhIUnpiR2xrWlhOQmNuSmhlUzVtYjNKRllXTm9LQ2h6Ykdsa1pTd2djMnhwWkdWT2RXMWlaWElwSUQwK0lIdGNjbHh1WEhSY2RGeDBibVYzVTJ4cFpHVWdQU0JrYjJOMWJXVnVkQzVqY21WaGRHVkZiR1Z0Wlc1MEtDZGthWFluS1R0Y2NseHVYSFJjZEZ4MGJtVjNVMnhwWkdVdVkyeGhjM05NYVhOMExtRmtaQ2duWTJGeWIzVnpaV3hmWDNOc2FXUmxKeWs3WEhKY2JseHlYRzVjZEZ4MFhIUnVaWGRUYkdsa1pTNXBibTVsY2toVVRVd2dQU0JnWEhKY2JseDBYSFJjZEZ4MFhIUmNkRHhrYVhZZ1kyeGhjM005WENKallYSnZkWE5sYkY5ZmFXMWhaMlV0WTI5dWRHRnBibVZ5WENJK1hISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFBHbHRaeUJ6Y21NOVhDSWtlM05zYVdSbExtbHRZV2RsZlZ3aUlHRnNkRDFjSW5Oc2FXUmxMV2x0WjF3aUlDOCtYSEpjYmx4MFhIUmNkRngwWEhSY2REd3ZaR2wyUGx4eVhHNWNkRngwWEhSY2RGeDBYSFE4WkdsMklHTnNZWE56UFZ3aVkyRnliM1Z6Wld4ZlgyTnZiblJsYm5SY0lqNWNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUThhREVnWTJ4aGMzTTlYQ0pqWVhKdmRYTmxiRjlmZEdsMGJHVmNJajRrZTNOc2FXUmxMblJwZEd4bGZUd3ZhREUrWEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwUEhBZ1kyeGhjM005WENKallYSnZkWE5sYkY5ZlpHVnpZMXdpUGlSN2MyeHBaR1V1WTI5dWRHVnVkSDA4TDNBK1hISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFBHSjFkSFJ2YmlCamJHRnpjejFjSW1obFlXUmxjbDlmYm1GMkxXUnZibUYwWlMxaWRHNGdZblYwZEc5dVhDSStYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBYSFJFZFdkdFpTQjZZU0J1WmNXaGRHOWNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUThMMkoxZEhSdmJqNWNjbHh1WEhSY2RGeDBYSFJjZEZ4MFBDOWthWFkrWEhKY2JseDBYSFJjZEdBN1hISmNibHh5WEc1Y2RGeDBYSFJqWVhKdmRYTmxiQzVoY0hCbGJtUkRhR2xzWkNodVpYZFRiR2xrWlNrN1hISmNibHh5WEc1Y2RGeDBYSFJwWmlBb2MyeHBaR1ZPZFcxaVpYSWdQVDA5SURBcElIdGNjbHh1WEhSY2RGeDBYSFJtYVhKemRGTnNhV1JsSUQwZ2JtVjNVMnhwWkdVN1hISmNibHgwWEhSY2RGeDBibVYzVTJ4cFpHVXVZMnhoYzNOTWFYTjBMbUZrWkNnbllXTjBhWFpsSnlrN1hISmNibHgwWEhSY2RIMGdaV3h6WlNCcFppQW9jMnhwWkdWT2RXMWlaWElnS3lBeElEMDlQU0JrWVhSaFRHbHpkQzV6Ykdsa1pYTXViR1Z1WjNSb0tTQjdYSEpjYmx4MFhIUmNkRngwYkdGemRGTnNhV1JsSUQwZ2JtVjNVMnhwWkdVN1hISmNibHgwWEhSY2RIMWNjbHh1WEhSY2RIMHBPMXh5WEc1Y2NseHVYSFJjZEc1bGVIUlRiR2xrWlNncE8xeHlYRzVjZEZ4MGNISmxkbWx2ZFhOVGJHbGtaU2dwTzF4eVhHNWNkSDFjY2x4dVhISmNibHgwWm5WdVkzUnBiMjRnYm1WNGRGTnNhV1JsS0NrZ2UxeHlYRzVjZEZ4MFkyOXVjM1FnYm1WNGRFSjBiaUE5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2R1WlhoMEp5azdYSEpjYmx4eVhHNWNkRngwYm1WNGRFSjBiaTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RqYkdsamF5Y3NJQ2hsS1NBOVBpQjdYSEpjYmx4MFhIUmNkR052Ym5OMElHRmpkR2wyWlZOc2FXUmxJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25MbU5oY205MWMyVnNYMTl6Ykdsa1pTNWhZM1JwZG1VbktUdGNjbHh1WEhKY2JseDBYSFJjZEd4bGRDQnVaWGgwVTJsaWJHbHVaeUE5SUdGamRHbDJaVk5zYVdSbExtNWxlSFJGYkdWdFpXNTBVMmxpYkdsdVp6dGNjbHh1WEhKY2JseDBYSFJjZEdsbUlDaHVaWGgwVTJsaWJHbHVaeUE5UFNCdWRXeHNLU0I3WEhKY2JseDBYSFJjZEZ4MGJtVjRkRk5wWW14cGJtY2dQU0JoWTNScGRtVlRiR2xrWlR0Y2NseHVYSFJjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkRngwYVdZZ0tHNWxlSFJUYVdKc2FXNW5MbU5zWVhOelRHbHpkQzVqYjI1MFlXbHVjeWduWTJGeWIzVnpaV3hmWDNOc2FXUmxKeWtwSUh0Y2NseHVYSFJjZEZ4MFhIUmhZM1JwZG1WVGJHbGtaUzVqYkdGemMweHBjM1F1Y21WdGIzWmxLQ2RoWTNScGRtVW5LVHRjY2x4dVhIUmNkRngwWEhSdVpYaDBVMmxpYkdsdVp5NWpiR0Z6YzB4cGMzUXVZV1JrS0NkaFkzUnBkbVVuS1R0Y2NseHVYSFJjZEZ4MGZWeHlYRzVjZEZ4MGZTazdYSEpjYmx4MGZWeHlYRzVjY2x4dVhIUm1kVzVqZEdsdmJpQndjbVYyYVc5MWMxTnNhV1JsS0NrZ2UxeHlYRzVjZEZ4MFkyOXVjM1FnY0hKbGRrSjBiaUE5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2R3Y21WMkp5azdYSEpjYmx4eVhHNWNkRngwY0hKbGRrSjBiaTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RqYkdsamF5Y3NJQ2hsS1NBOVBpQjdYSEpjYmx4MFhIUmNkR052Ym5OMElHRmpkR2wyWlZOc2FXUmxJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25MbU5oY205MWMyVnNYMTl6Ykdsa1pTNWhZM1JwZG1VbktUdGNjbHh1WEhKY2JseDBYSFJjZEd4bGRDQnVaWGgwVTJsaWJHbHVaeUE5SUdGamRHbDJaVk5zYVdSbExuQnlaWFpwYjNWelJXeGxiV1Z1ZEZOcFlteHBibWM3WEhKY2JseHlYRzVjZEZ4MFhIUnBaaUFvYm1WNGRGTnBZbXhwYm1jZ1BUMGdiblZzYkNrZ2UxeHlYRzVjZEZ4MFhIUmNkRzVsZUhSVGFXSnNhVzVuSUQwZ1lXTjBhWFpsVTJ4cFpHVTdYSEpjYmx4MFhIUmNkSDFjY2x4dVhISmNibHgwWEhSY2RHbG1JQ2h1WlhoMFUybGliR2x1Wnk1amJHRnpjMHhwYzNRdVkyOXVkR0ZwYm5Nb0oyTmhjbTkxYzJWc1gxOXpiR2xrWlNjcEtTQjdYSEpjYmx4MFhIUmNkRngwWVdOMGFYWmxVMnhwWkdVdVkyeGhjM05NYVhOMExuSmxiVzkyWlNnbllXTjBhWFpsSnlrN1hISmNibHgwWEhSY2RGeDBibVY0ZEZOcFlteHBibWN1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25ZV04wYVhabEp5azdYSEpjYmx4MFhIUmNkSDFjY2x4dVhIUmNkSDBwTzF4eVhHNWNkSDFjY2x4dVhISmNibHgwYVdZZ0tHTmhjbTkxYzJWc0lDRTlQU0J1ZFd4c0tTQjdYSEpjYmx4MFhIUW9ablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNkRngwWEhSa2FYTndiR0Y1UTJGeWIzVnpaV3dvS1R0Y2NseHVYSFJjZEgwcEtDazdYSEpjYmx4MGZWeHlYRzU5S1R0Y2NseHVJaXdpZDJsdVpHOTNMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMFJQVFVOdmJuUmxiblJNYjJGa1pXUW5MQ0JtZFc1amRHbHZiaUFvS1NCN1hISmNibHgwTHk4Z2RHRmljMXh5WEc1Y2RHTnZibk4wSUhSaFlreHBjM1JDZEc0Z1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5UVd4c0tDY3VkR0ZpWTJOdmNtUnBiMjVmWDJ4cGMzUXRZblJ1SnlrN1hISmNibHgwWTI5dWMzUWdkR0ZpY3lBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0pCYkd3b0p5NTBZV0pqWTI5eVpHbHZibDlmWTI5dWRHRnBibVZ5SnlrN1hISmNibHgwWTI5dWMzUWdkR0ZpWTJOdmNtUnBiMjVNYVhOMElEMGdaRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkRUo1U1dRb0ozUmhZbU5qYjNKa2FXOXVMV3hwYzNRbktUdGNjbHh1WEhSamIyNXpkQ0IwWVdKelEyOXVkR1Z1ZENBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0pCYkd3b0p5NTBZV0pqWTI5eVpHbHZibDlmZEdGaUxXbHVibVZ5SnlrN1hISmNibHgwWTI5dWMzUWdkR0ZpWTJOdmNtUnBiMjRnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2duZEdGaVkyTnZjbVJwYjI0bktUdGNjbHh1WEhKY2JseDBablZ1WTNScGIyNGdZV04wYVhaaGRHVlVZV0p6S0NrZ2UxeHlYRzVjZEZ4MGRHRmlUR2x6ZEVKMGJpNW1iM0pGWVdOb0tDaDBZV0lwSUQwK0lIdGNjbHh1WEhSY2RGeDBkR0ZpTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjJOc2FXTnJKeXdnS0dVcElEMCtJSHRjY2x4dVhIUmNkRngwWEhSamIyNXpkQ0IwWVdKT1lYWWdQU0IwWVdJdWNHRnlaVzUwUld4bGJXVnVkRHRjY2x4dVhIUmNkRngwWEhSamIyNXpkQ0IwWVdKelEyOXVkR0ZwYm1WeUlEMGdkR0ZpVG1GMkxuQmhjbVZ1ZEVWc1pXMWxiblF1Y0dGeVpXNTBSV3hsYldWdWREdGNjbHh1WEhSY2RGeDBYSFJqYjI1emRDQjBZV0pPZFcxaVpYSWdQU0IwWVdJdVpHRjBZWE5sZEM1bWIzSlVZV0k3WEhKY2JseDBYSFJjZEZ4MFkyOXVjM1FnZEdGaVZHOUJZM1JwZG1GMFpTQTlJSFJoWW5ORGIyNTBZV2x1WlhJdWNYVmxjbmxUWld4bFkzUnZjaWhjY2x4dVhIUmNkRngwWEhSY2RHQXVkR0ZpWTJOdmNtUnBiMjVmWDNSaFlsdGtZWFJoTFhSaFlqMWNJaVI3ZEdGaVRuVnRZbVZ5ZlZ3aVhXQmNjbHh1WEhSY2RGeDBYSFFwTzF4eVhHNWNjbHh1WEhSY2RGeDBYSFIwWVdKT1lYWXVjWFZsY25sVFpXeGxZM1J2Y2tGc2JDZ25MblJoWW1OamIzSmthVzl1WDE5c2FYTjBMV0owYmljcExtWnZja1ZoWTJnb0tHSjBiaWtnUFQ0Z2UxeHlYRzVjZEZ4MFhIUmNkRngwWW5SdUxtTnNZWE56VEdsemRDNXlaVzF2ZG1Vb0oyTjFjbkpsYm5RbktUdGNjbHh1WEhSY2RGeDBYSFI5S1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwZEdGaWMwTnZiblJoYVc1bGNpNXhkV1Z5ZVZObGJHVmpkRzl5UVd4c0tDY3VkR0ZpWTJOdmNtUnBiMjVmWDNSaFlpY3BMbVp2Y2tWaFkyZ29LSFJoWWlrZ1BUNGdlMXh5WEc1Y2RGeDBYSFJjZEZ4MGRHRmlMbU5zWVhOelRHbHpkQzV5WlcxdmRtVW9KMk4xY25KbGJuUW5LVHRjY2x4dVhIUmNkRngwWEhSOUtUdGNjbHh1WEhKY2JseDBYSFJjZEZ4MGRHRmlMbU5zWVhOelRHbHpkQzVoWkdRb0oyTjFjbkpsYm5RbktUdGNjbHh1WEhSY2RGeDBYSFIwWVdKVWIwRmpkR2wyWVhSbExtTnNZWE56VEdsemRDNWhaR1FvSjJOMWNuSmxiblFuS1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwYVdZZ0tIZHBibVJ2ZHk1cGJtNWxjbGRwWkhSb0lENDlJRFl3TUNrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwZEdGaWMwTnZiblJsYm5RdVptOXlSV0ZqYUNnb2RHRmljeWtnUFQ0Z2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhSMFlXSnpMbk4wZVd4bExtMWhlRWhsYVdkb2RDQTlJSFJoWW5NdWMyTnliMnhzU0dWcFoyaDBJQ3NnSjNCNEp6dGNjbHh1WEhSY2RGeDBYSFJjZEgwcE8xeHlYRzVjZEZ4MFhIUmNkSDFjY2x4dVhIUmNkRngwZlNrN1hISmNibHgwWEhSOUtUdGNjbHh1WEhKY2JseDBYSFJwWmlBb2RHRmlZMk52Y21ScGIyNU1hWE4wS1NCN1hISmNibHgwWEhSY2RIUmhZbk11Wm05eVJXRmphQ2dvZEdGaUtTQTlQaUI3WEhKY2JseDBYSFJjZEZ4MGRHRmlMbkYxWlhKNVUyVnNaV04wYjNJb0p5NTBZV0pqWTI5eVpHbHZibDlmYkdsemRDQXVkR0ZpWTJOdmNtUnBiMjVmWDJKMGJpY3BMbU5zYVdOcktDazdYSEpjYmx4MFhIUmNkSDBwTzF4eVhHNWNkRngwZlZ4eVhHNWNkSDFjY2x4dVhISmNibHgwTHk4dkx5OGdZV05qYjNKa2FXOXVYSEpjYmx4MFkyOXVjM1FnWVdOamIzSmthVzl1UW5SdUlEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2tGc2JDZ25MbUZqWTI5eVpHbHZibDlmYkdsemRDMWlkRzRuS1R0Y2NseHVYSEpjYmx4MFpuVnVZM1JwYjI0Z1lXTjBhWFpoZEdWQlkyTnZjbVJwYjI0b0tTQjdYSEpjYmx4MFhIUmhZMk52Y21ScGIyNUNkRzR1Wm05eVJXRmphQ2dvWW5SdUtTQTlQaUI3WEhKY2JseDBYSFJjZEdKMGJpNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZGpiR2xqYXljc0lDZ3BJRDArSUh0Y2NseHVYSFJjZEZ4MFhIUXZMeUJqYUdWamF5Qm1iM0lnYjNCbGJpQmhZMk52Y21ScGIyNWNjbHh1WEhSY2RGeDBYSFJqYjI1emRDQmhZMk52Y21ScGIyNUNkRzVQY0dWdUlEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2loY2NseHVYSFJjZEZ4MFhIUmNkQ2N1WVdOamIzSmthVzl1WDE5c2FYTjBMV0owYmk1dmNHVnVKMXh5WEc1Y2RGeDBYSFJjZENrN1hISmNibHh5WEc1Y2RGeDBYSFJjZEdsbUlDaGhZMk52Y21ScGIyNUNkRzVQY0dWdUlDWW1JR0ZqWTI5eVpHbHZia0owYms5d1pXNGdJVDA5SUdKMGJpa2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MEx5OGdhV1lnZEdobGNtVWdhWE1nYjNCbGJpQjBhR1Z1SUhKbGJXOTJaU0J2Y0dWdUlHTnNZWE56SUdGdVpDQnpaWFFnYldGNGFHVnBaMmgwSUhSdklEQmNjbHh1WEhSY2RGeDBYSFJjZEdGalkyOXlaR2x2YmtKMGJrOXdaVzR1WTJ4aGMzTk1hWE4wTG5SdloyZHNaU2duYjNCbGJpY3BPMXh5WEc1Y2RGeDBYSFJjZEZ4MFlXTmpiM0prYVc5dVFuUnVUM0JsYmk1dVpYaDBSV3hsYldWdWRGTnBZbXhwYm1jdWMzUjViR1V1YldGNFNHVnBaMmgwSUQwZ01EdGNjbHh1WEhSY2RGeDBYSFI5WEhKY2JseHlYRzVjZEZ4MFhIUmNkQzh2SUhObGRDQnZjR1Z1SUdOc1lYTnpJSFJ2SUdWMlpYSjVJR05zYVdOclpXUWdZV05qYjNKa2FXOXVJR0owYmx4eVhHNWNkRngwWEhSY2RHSjBiaTVqYkdGemMweHBjM1F1ZEc5bloyeGxLQ2R2Y0dWdUp5azdYSEpjYmx4MFhIUmNkRngwWTI5dWMzUWdZV05qYjNKa2FXOXVRbTlrZVNBOUlHSjBiaTV1WlhoMFJXeGxiV1Z1ZEZOcFlteHBibWM3WEhKY2JseHlYRzVjZEZ4MFhIUmNkR2xtSUNoaWRHNHVZMnhoYzNOTWFYTjBMbU52Ym5SaGFXNXpLQ2R2Y0dWdUp5a3BJSHRjY2x4dVhIUmNkRngwWEhSY2RHRmpZMjl5WkdsdmJrSnZaSGt1YzNSNWJHVXViV0Y0U0dWcFoyaDBJRDBnWVdOamIzSmthVzl1UW05a2VTNXpZM0p2Ykd4SVpXbG5hSFFnS3lBbmNIZ25PMXh5WEc1Y2RGeDBYSFJjZEgwZ1pXeHpaU0I3WEhKY2JseDBYSFJjZEZ4MFhIUmhZMk52Y21ScGIyNUNiMlI1TG5OMGVXeGxMbTFoZUVobGFXZG9kQ0E5SURBN1hISmNibHgwWEhSY2RGeDBmVnh5WEc1Y2RGeDBYSFI5S1R0Y2NseHVYSFJjZEgwcE8xeHlYRzVjY2x4dVhIUmNkSGRwYm1SdmR5NWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZHlaWE5wZW1VbkxDQW9aU2tnUFQ0Z2UxeHlYRzVjZEZ4MFhIUnBaaUFvZDJsdVpHOTNMbWx1Ym1WeVYybGtkR2dnUENBMk1EQXBJSHRjY2x4dVhIUmNkRngwWEhSMFlXSnpRMjl1ZEdWdWRDNW1iM0pGWVdOb0tDaDBZV0p6S1NBOVBpQjdYSEpjYmx4MFhIUmNkRngwWEhSMFlXSnpMbk4wZVd4bExtMWhlRWhsYVdkb2RDQTlJREE3WEhKY2JseDBYSFJjZEZ4MFhIUnBaaUFvZEdGaWN5NXdjbVYyYVc5MWMwVnNaVzFsYm5SVGFXSnNhVzVuTG1Oc1lYTnpUR2x6ZEM1amIyNTBZV2x1Y3lnbmIzQmxiaWNwS1NCN1hISmNibHgwWEhSY2RGeDBYSFJjZEhSaFluTXVjSEpsZG1sdmRYTkZiR1Z0Wlc1MFUybGliR2x1Wnk1amJHRnpjMHhwYzNRdWNtVnRiM1psS0NkdmNHVnVKeWs3WEhKY2JseDBYSFJjZEZ4MFhIUjlYSEpjYmx4MFhIUmNkRngwZlNrN1hISmNibHgwWEhSY2RIMWNjbHh1WEhSY2RIMHBPMXh5WEc1Y2RIMWNjbHh1WEhKY2JseDBhV1lnS0hSaFltTmpiM0prYVc5dUtTQjdYSEpjYmx4MFhIUmhZM1JwZG1GMFpWUmhZbk1vS1R0Y2NseHVYSFJjZEdGamRHbDJZWFJsUVdOamIzSmthVzl1S0NrN1hISmNibHgwZlZ4eVhHNTlLVHRjY2x4dUlsMHNJbk52ZFhKalpWSnZiM1FpT2lJaWZRPT0ifQ==
