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
				const {
					number,
					species,
					breed,
					color,
					weight,
					height,
					coat,
					birth,
					name,
					gender,
					image,
					desc,
					adopted,
				} = dog;

				dogBox = document.createElement('div');
				dogBox.classList.add('page__box');
				adopted === 'yes' ? dogBox.classList.add('adopted') : '';

				const dogYears = birth;

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
                            <img src=".${image}" alt="${name} ${species}"}/>
                        </div>
                        <div class="page__box-bottom">
                            <h3 class="page__box-title">${name}${
					adopted === 'yes' ? ` - <span>adopted</span>` : ''
				}</h3>
                            <div class="page__box-content">
                                <div class="expandMoreContent" id="showMore-${species}${number}">
                                    <p class="page__box-text">
                                        ${desc}
                                    </p>
                                </div>
    
                                <div class="expandMoreHolder">
                                    <button
                                        expand-more
                                        data-hidetext="...Read less"
                                        data-showtext="...Read more"
                                        data-target="showMore-${species}${number}"
                                        class="button showMore"
                                    >
                                        ...Read more
                                    </button>
                                </div>
                            </div>
    
                            <ul class="page__box-icons">
                                <li class="page__box-icon">
                                    <i class="fas fa-weight"></i
                                    ><span class="page__box-icon--text">${weight} kg</span>
                                </li>
                                <li class="page__box-icon">
                                    <i class="fas fa-arrows-alt-v"></i
                                    ><span class="page__box-icon--text">${height} cm</span>
                                </li>
                                <li class="page__box-icon">
                                    <i class="fas fa-calendar-check"></i
                                    ><span class="page__box-icon--text">${years} yr.</span>
                                </li>
                                <li class="page__box-icon">
									<i class="fas fa-palette"></i
									><span class="page__box-icon--text">${color[0] ? color[0] : '-'}</span>
                                </li>
                                <li class="page__box-icon">
									<i class="fas fa-palette"></i
									><span class="page__box-icon--text">${color[1] ? color[1] : '-'}</span>
                                </li>
                                <li class="page__box-icon">
									<i class="fas fa-palette"></i
									><span class="page__box-icon--text">${color[2] ? color[2] : '-'}</span>
								</li>
                                <li class="page__box-icon">
                                    <i class="fas fa-paw"></i
                                    ><span class="page__box-icon--text">${coat}</span>
                                </li>
                                <li class="page__box-icon">
                                    <i class="fas fa-venus-mars"></i
                                    ><span class="page__box-icon--text">${gender}</span>
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
			showContent.style.maxHeight = `22px`;
		}
	}

	expandsMore.forEach((btn) => {
		const containerHeight =
			btn.parentElement.previousElementSibling.offsetHeight;

		const expandElementHeight =
			btn.parentElement.previousElementSibling.firstElementChild.offsetHeight;

		if (containerHeight >= expandElementHeight) {
			btn.style.visibility = 'hidden';
			btn.style.height = 0;
		}
		btn.addEventListener('click', expand);
	});
});


/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
	const modalBtn = document.querySelectorAll('.modal-btn');
	const modalEl = document.getElementById('modal');
	const modalBtnClose = document.getElementById('close');

	// Show modal
	modalBtn.forEach((modal) => {
		modal.addEventListener('click', () => modalEl.classList.add('show-modal'));
	});

	// Hide modal
	modalBtnClose.addEventListener('click', () =>
		modalEl.classList.remove('show-modal')
	);

	// Hide modal on outside click
	window.addEventListener('click', (e) =>
		e.target == modal ? modal.classList.remove('show-modal') : false
	);
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
/*!****************************************************************************************************************************************************************************************************!*\
  !*** multi ./src/js/adoptContentSwitcher.js ./src/js/fetchAnimalsData.js ./src/js/formValidaiton.js ./src/js/main.js ./src/js/modal.js ./src/js/nav.js ./src/js/slider.js ./src/js/tabccordion.js ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\Front-end projects\DobraNadaAzil\src\js\adoptContentSwitcher.js */"./src/js/adoptContentSwitcher.js");
__webpack_require__(/*! D:\Front-end projects\DobraNadaAzil\src\js\fetchAnimalsData.js */"./src/js/fetchAnimalsData.js");
__webpack_require__(/*! D:\Front-end projects\DobraNadaAzil\src\js\formValidaiton.js */"./src/js/formValidaiton.js");
__webpack_require__(/*! D:\Front-end projects\DobraNadaAzil\src\js\main.js */"./src/js/main.js");
__webpack_require__(/*! D:\Front-end projects\DobraNadaAzil\src\js\modal.js */"./src/js/modal.js");
__webpack_require__(/*! D:\Front-end projects\DobraNadaAzil\src\js\nav.js */"./src/js/nav.js");
__webpack_require__(/*! D:\Front-end projects\DobraNadaAzil\src\js\slider.js */"./src/js/slider.js");
module.exports = __webpack_require__(/*! D:\Front-end projects\DobraNadaAzil\src\js\tabccordion.js */"./src/js/tabccordion.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Fkb3B0Q29udGVudFN3aXRjaGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9mZXRjaEFuaW1hbHNEYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9mb3JtVmFsaWRhaXRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL25hdi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy90YWJjY29yZGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7QUFDSCxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhEQUE4RCxPQUFPO0FBQ3JFO0FBQ0EsZ0NBQWdDLE9BQU87QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNqQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGdCQUFnQixLQUFLLFNBQVM7QUFDbkQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EseUNBQXlDLE1BQU0sU0FBUyxLQUFLLEdBQUcsUUFBUSxFQUFFO0FBQzFFO0FBQ0E7QUFDQSwwREFBMEQsS0FBSztBQUMvRDtBQUNBLEtBQUs7QUFDTDtBQUNBLDhFQUE4RSxRQUFRLEVBQUUsT0FBTztBQUMvRjtBQUNBLDBDQUEwQztBQUMxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0UsUUFBUSxFQUFFLE9BQU87QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRSxPQUFPO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRSxPQUFPO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRSxNQUFNO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBLCtDQUErQywwQkFBMEI7QUFDekU7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLDBCQUEwQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsMEJBQTBCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRSxLQUFLO0FBQy9FO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRSxPQUFPO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EseUNBQXlDLFVBQVUsU0FBUyxTQUFTO0FBQ3JFO0FBQ0EsS0FBSyxFQUFFO0FBQ1A7QUFDQTtBQUNBLDBEQUEwRCxTQUFTO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixFQUFFLFdBQVc7QUFDOUI7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFLFlBQVk7QUFDNUU7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQSwwRUFBMEUsU0FBUztBQUNuRjtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0Msa0NBQWtDO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxrQ0FBa0M7QUFDakY7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGtDQUFrQztBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJO0FBQ0osR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsa0JBQWtCLG1CQUFtQjtBQUNyQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDem1CRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlDQUFpQyx5QkFBeUIsNkJBQTZCLElBQUksUUFBUSxJQUFJLFFBQVEsSUFBSSxRQUFRLElBQUksZ0NBQWdDLEdBQUc7QUFDbEs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUN2RkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTs7QUFFRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7Ozs7Ozs7Ozs7O0FDaEREO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNuQkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOzs7Ozs7Ozs7Ozs7QUNwQkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQSxxQ0FBcUMsWUFBWTtBQUNqRCxtQ0FBbUMsY0FBYztBQUNqRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQzlGRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxVQUFVO0FBQzlDOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsSUFBSTtBQUNKLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuXHRoaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBudWxsLCAnICcpO1xyXG5cdGNvbnN0IHRhYlN3aXRjaGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXN3aXRjaGVyXScpO1xyXG5cclxuXHR0YWJTd2l0Y2hlcnMuZm9yRWFjaCgodGFiU3dpdGNoKSA9PiB7XHJcblx0XHRjb25zdCB0YWJTd2l0Y2hlciA9IHRhYlN3aXRjaDtcclxuXHRcdGNvbnN0IHBhZ2VJZCA9IHRhYlN3aXRjaGVyLmRhdGFzZXQudGFiO1xyXG5cclxuXHRcdHRhYlN3aXRjaGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHRcdFx0ZG9jdW1lbnRcclxuXHRcdFx0XHQucXVlcnlTZWxlY3RvcignLmFkb3B0X19saXN0LWl0ZW0uYWN0aXZlJylcclxuXHRcdFx0XHQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblxyXG5cdFx0XHR0YWJTd2l0Y2hlci5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRzd2l0Y2hQYWdlKHBhZ2VJZCk7XHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHJcblx0ZnVuY3Rpb24gc3dpdGNoUGFnZShwYWdlSWQpIHtcclxuXHRcdGNvbnN0IGN1cnJlbnRQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UuYWN0aXZlJyk7XHJcblx0XHRjb25zdCBjdXJyZW50UGFnZUhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLWhlYWRlci5hY3RpdmUnKTtcclxuXHJcblx0XHRjdXJyZW50UGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdGN1cnJlbnRQYWdlSGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cclxuXHRcdGNvbnN0IG5leHRQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBhZ2VbZGF0YS1wYWdlPVwiJHtwYWdlSWR9XCJdYCk7XHJcblx0XHRjb25zdCBuZXh0UGFnZUhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdGAucGFnZS1oZWFkZXJbZGF0YS1oZWFkZXI9XCIke3BhZ2VJZH1cIl1gXHJcblx0XHQpO1xyXG5cdFx0bmV4dFBhZ2UuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblx0XHRuZXh0UGFnZUhlYWRlci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHR9XHJcbn0pO1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IGFuaW1hbHNVcmwgPSAnLi4vanMvYW5pbWFscy5qc29uJztcclxuXHRjb25zdCBhbmltYWxzUGFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5pbWFscy1wYWdlcycpO1xyXG5cdGNvbnN0IGRvZ3NCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG9ncy1ib3gnKTtcclxuXHRjb25zdCBjYXRzQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdHMtYm94Jyk7XHJcblxyXG5cdGZ1bmN0aW9uIGdldEFuaW1hbHNEYXRhKCkge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0ZmV0Y2goYW5pbWFsc1VybClcclxuXHRcdFx0XHQudGhlbigocmVzcCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKCFyZXNwLm9rKSB7XHJcblx0XHRcdFx0XHRcdHRocm93IEVycm9yKGAke3Jlc3Auc3RhdHVzVGV4dH0gLSAke3Jlc3AudXJsfWApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cmV0dXJuIHJlc3AuanNvbigpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LnRoZW4oKGRhdGEpID0+IHJlc29sdmUoZGF0YSkpXHJcblx0XHRcdFx0LmNhdGNoKChlcnIpID0+IHJlamVjdChlcnIpKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgZG9nTnVtYmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RvZ051bWJlcicpO1xyXG5cdGNvbnN0IGNhdE51bWJlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXROdW1iZXInKTtcclxuXHJcblx0YXN5bmMgZnVuY3Rpb24gZGlzcGxheUFuaW1hbE51bWJlcnMoKSB7XHJcblx0XHRjb25zdCBkYXRhTGlzdCA9IGF3YWl0IGdldEFuaW1hbHNEYXRhKCk7XHJcblx0XHRjb25zdCBhbmltYWxzQXJyYXkgPSBkYXRhTGlzdC5hbmltYWxzO1xyXG5cclxuXHRcdGxldCBkb2dzQXJyYXlOdW1iZXIgPSBhbmltYWxzQXJyYXlbMF0uZG9ncy5sZW5ndGg7XHJcblx0XHRsZXQgY2F0c0FycmF5TnVtYmVyID0gYW5pbWFsc0FycmF5WzBdLmNhdHMubGVuZ3RoO1xyXG5cclxuXHRcdGRvZ051bWJlci5pbm5lclRleHQgPSBkb2dzQXJyYXlOdW1iZXI7XHJcblx0XHRjYXROdW1iZXIuaW5uZXJUZXh0ID0gY2F0c0FycmF5TnVtYmVyO1xyXG5cdH1cclxuXHJcblx0aWYgKChkb2dOdW1iZXIsIGNhdE51bWJlcikpIHtcclxuXHRcdChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGRpc3BsYXlBbmltYWxOdW1iZXJzKCk7XHJcblx0XHR9KSgpO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgZnVuY3Rpb24gZGlzcGxheUFuaW1hbHMoKSB7XHJcblx0XHRjb25zdCBkYXRhTGlzdCA9IGF3YWl0IGdldEFuaW1hbHNEYXRhKCk7XHJcblx0XHRjb25zdCBhbmltYWxzQXJyYXkgPSBkYXRhTGlzdC5hbmltYWxzO1xyXG5cclxuXHRcdGFuaW1hbHNBcnJheS5mb3JFYWNoKChhbmltYWwpID0+IHtcclxuXHRcdFx0ZG9nc0FycmF5ID0gYW5pbWFsLmRvZ3M7XHJcblx0XHRcdGNhdHNBcnJheSA9IGFuaW1hbC5jYXRzO1xyXG5cclxuXHRcdFx0ZG9nc0FycmF5LmZvckVhY2goKGRvZykgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHtcclxuXHRcdFx0XHRcdG51bWJlcixcclxuXHRcdFx0XHRcdHNwZWNpZXMsXHJcblx0XHRcdFx0XHRicmVlZCxcclxuXHRcdFx0XHRcdGNvbG9yLFxyXG5cdFx0XHRcdFx0d2VpZ2h0LFxyXG5cdFx0XHRcdFx0aGVpZ2h0LFxyXG5cdFx0XHRcdFx0Y29hdCxcclxuXHRcdFx0XHRcdGJpcnRoLFxyXG5cdFx0XHRcdFx0bmFtZSxcclxuXHRcdFx0XHRcdGdlbmRlcixcclxuXHRcdFx0XHRcdGltYWdlLFxyXG5cdFx0XHRcdFx0ZGVzYyxcclxuXHRcdFx0XHRcdGFkb3B0ZWQsXHJcblx0XHRcdFx0fSA9IGRvZztcclxuXHJcblx0XHRcdFx0ZG9nQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRcdFx0ZG9nQm94LmNsYXNzTGlzdC5hZGQoJ3BhZ2VfX2JveCcpO1xyXG5cdFx0XHRcdGFkb3B0ZWQgPT09ICd5ZXMnID8gZG9nQm94LmNsYXNzTGlzdC5hZGQoJ2Fkb3B0ZWQnKSA6ICcnO1xyXG5cclxuXHRcdFx0XHRjb25zdCBkb2dZZWFycyA9IGJpcnRoO1xyXG5cclxuXHRcdFx0XHRjb25zdCBtaWxpc2Vjc0JldHdlZW5ET0JhbmQxOTcwID0gRGF0ZS5wYXJzZShkb2dZZWFycyk7XHJcblx0XHRcdFx0Y29uc3QgbWlsaXNlY3NCZXR3ZWVuTk9XYW5kMTk3MCA9IERhdGUubm93KCk7XHJcblx0XHRcdFx0Y29uc3QgYWdlSW5NaWxpc2VjcyA9XHJcblx0XHRcdFx0XHRtaWxpc2Vjc0JldHdlZW5OT1dhbmQxOTcwIC0gbWlsaXNlY3NCZXR3ZWVuRE9CYW5kMTk3MDtcclxuXHJcblx0XHRcdFx0Y29uc3QgbWlsaXNlY3MgPSBhZ2VJbk1pbGlzZWNzO1xyXG5cdFx0XHRcdGNvbnN0IHNlY3MgPSAxMDAwO1xyXG5cdFx0XHRcdGNvbnN0IG1pbnMgPSBzZWNzICogNjA7XHJcblx0XHRcdFx0Y29uc3QgaG91ciA9IG1pbnMgKiA2MDtcclxuXHRcdFx0XHRjb25zdCBkYXkgPSBob3VyICogMjQ7XHJcblx0XHRcdFx0Y29uc3QgeWVhciA9IGRheSAqIDM2NTtcclxuXHJcblx0XHRcdFx0bGV0IHllYXJzID0gTWF0aC5yb3VuZChtaWxpc2VjcyAvIHllYXIpO1xyXG5cclxuXHRcdFx0XHRkb2dCb3guaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZV9fYm94LXRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuJHtpbWFnZX1cIiBhbHQ9XCIke25hbWV9ICR7c3BlY2llc31cIn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2VfX2JveC1ib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInBhZ2VfX2JveC10aXRsZVwiPiR7bmFtZX0ke1xyXG5cdFx0XHRcdFx0YWRvcHRlZCA9PT0gJ3llcycgPyBgIC0gPHNwYW4+YWRvcHRlZDwvc3Bhbj5gIDogJydcclxuXHRcdFx0XHR9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlX19ib3gtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleHBhbmRNb3JlQ29udGVudFwiIGlkPVwic2hvd01vcmUtJHtzcGVjaWVzfSR7bnVtYmVyfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInBhZ2VfX2JveC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2Rlc2N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleHBhbmRNb3JlSG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZC1tb3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWhpZGV0ZXh0PVwiLi4uUmVhZCBsZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtc2hvd3RleHQ9XCIuLi5SZWFkIG1vcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCJzaG93TW9yZS0ke3NwZWNpZXN9JHtudW1iZXJ9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnV0dG9uIHNob3dNb3JlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uUmVhZCBtb3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInBhZ2VfX2JveC1pY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VfX2JveC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXdlaWdodFwiPjwvaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PHNwYW4gY2xhc3M9XCJwYWdlX19ib3gtaWNvbi0tdGV4dFwiPiR7d2VpZ2h0fSBrZzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VfX2JveC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWFycm93cy1hbHQtdlwiPjwvaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PHNwYW4gY2xhc3M9XCJwYWdlX19ib3gtaWNvbi0tdGV4dFwiPiR7aGVpZ2h0fSBjbTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VfX2JveC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNhbGVuZGFyLWNoZWNrXCI+PC9pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48c3BhbiBjbGFzcz1cInBhZ2VfX2JveC1pY29uLS10ZXh0XCI+JHt5ZWFyc30geXIuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZV9fYm94LWljb25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJmYXMgZmEtcGFsZXR0ZVwiPjwvaVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+PHNwYW4gY2xhc3M9XCJwYWdlX19ib3gtaWNvbi0tdGV4dFwiPiR7Y29sb3JbMF0gPyBjb2xvclswXSA6ICctJ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cImZhcyBmYS1wYWxldHRlXCI+PC9pXHJcblx0XHRcdFx0XHRcdFx0XHRcdD48c3BhbiBjbGFzcz1cInBhZ2VfX2JveC1pY29uLS10ZXh0XCI+JHtjb2xvclsxXSA/IGNvbG9yWzFdIDogJy0nfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VfX2JveC1pY29uXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVwiZmFzIGZhLXBhbGV0dGVcIj48L2lcclxuXHRcdFx0XHRcdFx0XHRcdFx0PjxzcGFuIGNsYXNzPVwicGFnZV9fYm94LWljb24tLXRleHRcIj4ke2NvbG9yWzJdID8gY29sb3JbMl0gOiAnLSd9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1wYXdcIj48L2lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxzcGFuIGNsYXNzPVwicGFnZV9fYm94LWljb24tLXRleHRcIj4ke2NvYXR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZV9fYm94LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdmVudXMtbWFyc1wiPjwvaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PHNwYW4gY2xhc3M9XCJwYWdlX19ib3gtaWNvbi0tdGV4dFwiPiR7Z2VuZGVyfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBgO1xyXG5cclxuXHRcdFx0XHRkb2dzQm94LmFwcGVuZENoaWxkKGRvZ0JveCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Y2F0c0FycmF5LmZvckVhY2goKGNhdCkgPT4ge1xyXG5cdFx0XHRcdGNhdEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0XHRcdGNhdEJveC5jbGFzc0xpc3QuYWRkKCdwYWdlX19ib3gnKTtcclxuXHJcblx0XHRcdFx0Y29uc3QgY2F0WWVhcnMgPSBjYXQuYmlydGg7XHJcblxyXG5cdFx0XHRcdGNvbnN0IG1pbGlzZWNzQmV0d2VlbkRPQmFuZDE5NzBjYXQgPSBEYXRlLnBhcnNlKGNhdFllYXJzKTtcclxuXHRcdFx0XHRjb25zdCBtaWxpc2Vjc0JldHdlZW5OT1dhbmQxOTcwID0gRGF0ZS5ub3coKTtcclxuXHJcblx0XHRcdFx0Y29uc3QgYWdlSW5NaWxpc2Vjc0NhdCA9XHJcblx0XHRcdFx0XHRtaWxpc2Vjc0JldHdlZW5OT1dhbmQxOTcwIC0gbWlsaXNlY3NCZXR3ZWVuRE9CYW5kMTk3MGNhdDtcclxuXHJcblx0XHRcdFx0Y29uc3QgbWlsaXNlY3NDYXQgPSBhZ2VJbk1pbGlzZWNzQ2F0O1xyXG5cdFx0XHRcdGNvbnN0IHNlY3MgPSAxMDAwO1xyXG5cdFx0XHRcdGNvbnN0IG1pbnMgPSBzZWNzICogNjA7XHJcblx0XHRcdFx0Y29uc3QgaG91ciA9IG1pbnMgKiA2MDtcclxuXHRcdFx0XHRjb25zdCBkYXkgPSBob3VyICogMjQ7XHJcblx0XHRcdFx0Y29uc3QgeWVhciA9IGRheSAqIDM2NTtcclxuXHJcblx0XHRcdFx0bGV0IHllYXJzQ2F0ID0gTWF0aC5yb3VuZChtaWxpc2Vjc0NhdCAvIHllYXIpO1xyXG5cclxuXHRcdFx0XHRjYXRCb3guaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZV9fYm94LXRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuJHtjYXQuaW1hZ2V9XCIgYWx0PVwiJHtjYXQubmFtZX0gJHtcclxuXHRcdFx0XHRcdGNhdC5zcGVjaWVzXHJcblx0XHRcdFx0fVwifS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZV9fYm94LWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwicGFnZV9fYm94LXRpdGxlXCI+JHtjYXQubmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2VfX2JveC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV4cGFuZE1vcmVDb250ZW50XCIgaWQ9XCJzaG93TW9yZS0ke1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2F0LnNwZWNpZXNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9JHtjYXQubnVtYmVyfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInBhZ2VfX2JveC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2NhdC5kZXNjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXhwYW5kTW9yZUhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmQtbW9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1oaWRldGV4dD1cIi4uLlJlYWQgbGVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXNob3d0ZXh0PVwiLi4uUmVhZCBtb3JlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwic2hvd01vcmUtJHtjYXQuc3BlY2llc30ke1xyXG5cdFx0XHRcdFx0Y2F0Lm51bWJlclxyXG5cdFx0XHRcdH1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidXR0b24gc2hvd01vcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5SZWFkIG1vcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwicGFnZV9fYm94LWljb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZV9fYm94LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtd2VpZ2h0XCI+PC9pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48c3BhbiBjbGFzcz1cInBhZ2VfX2JveC1pY29uLS10ZXh0XCI+JHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjYXQud2VpZ2h0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0ga2c8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1hcnJvd3MtYWx0LXZcIj48L2lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxzcGFuIGNsYXNzPVwicGFnZV9fYm94LWljb24tLXRleHRcIj4ke1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNhdC5oZWlnaHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fWNtPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZV9fYm94LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2FsZW5kYXItY2hlY2tcIj48L2lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxzcGFuIGNsYXNzPVwicGFnZV9fYm94LWljb24tLXRleHRcIj4ke3llYXJzQ2F0fSB5ci48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cImZhcyBmYS1wYWxldHRlXCI+PC9pXHJcblx0XHRcdFx0XHRcdFx0XHRcdD48c3BhbiBjbGFzcz1cInBhZ2VfX2JveC1pY29uLS10ZXh0XCI+JHtjYXQuY29sb3JbMF0gPyBjYXQuY29sb3JbMF0gOiAnLSd9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZV9fYm94LWljb25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJmYXMgZmEtcGFsZXR0ZVwiPjwvaVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+PHNwYW4gY2xhc3M9XCJwYWdlX19ib3gtaWNvbi0tdGV4dFwiPiR7Y2F0LmNvbG9yWzFdID8gY2F0LmNvbG9yWzFdIDogJy0nfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VfX2JveC1pY29uXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVwiZmFzIGZhLXBhbGV0dGVcIj48L2lcclxuXHRcdFx0XHRcdFx0XHRcdFx0PjxzcGFuIGNsYXNzPVwicGFnZV9fYm94LWljb24tLXRleHRcIj4ke2NhdC5jb2xvclsyXSA/IGNhdC5jb2xvclsyXSA6ICctJ308L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VfX2JveC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXBhd1wiPjwvaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PHNwYW4gY2xhc3M9XCJwYWdlX19ib3gtaWNvbi0tdGV4dFwiPiR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2F0LmNvYXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VfX2JveC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXZlbnVzLW1hcnNcIj48L2lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxzcGFuIGNsYXNzPVwicGFnZV9fYm94LWljb24tLXRleHRcIj4ke1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNhdC5nZW5kZXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBgO1xyXG5cclxuXHRcdFx0XHRjYXRzQm94LmFwcGVuZENoaWxkKGNhdEJveCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0bGV0IGRvZ0JveEFycmF5ID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNkb2dzLWJveCAucGFnZV9fYm94JyldO1xyXG5cdFx0bGV0IGNhdEJveEFycmF5ID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjYXRzLWJveCAucGFnZV9fYm94JyldO1xyXG5cdFx0bGV0IGN1cnJlbnRQYWdlID0gMTtcclxuXHRcdGxldCBlbGVtZW50c09uUGFnZSA9IDQ7XHJcblxyXG5cdFx0Y29uc3QgcGFnaW5hdGlvbkVsRG9ncyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb2dzLXBhZ2luYXRpb24nKTtcclxuXHRcdGNvbnN0IHBhZ2luYXRpb25FbENhdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0cy1wYWdpbmF0aW9uJyk7XHJcblxyXG5cdFx0ZnVuY3Rpb24gZGlzcGxheVBhZ2luYXRlZEl0ZW1zKGl0ZW1zLCB3cmFwcGVyLCBpdGVtc1BlclBhZ2UsIHBhZ2UpIHtcclxuXHRcdFx0d3JhcHBlci5pbm5lckhUTUwgPSAnJztcclxuXHRcdFx0cGFnZS0tO1xyXG5cclxuXHRcdFx0bGV0IHN0YXJ0ID0gaXRlbXNQZXJQYWdlICogcGFnZTtcclxuXHRcdFx0bGV0IGVuZCA9IHN0YXJ0ICsgaXRlbXNQZXJQYWdlO1xyXG5cdFx0XHRsZXQgcGFnaW5hdGVkSXRlbXMgPSBpdGVtcy5zbGljZShzdGFydCwgZW5kKTtcclxuXHJcblx0XHRcdHBhZ2luYXRlZEl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuXHRcdFx0XHRsZXQgaXRlbUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRcdFx0aXRlbUVsLmNsYXNzTGlzdC5hZGQoJ3BhZ2VfX2JveCcpO1xyXG5cclxuXHRcdFx0XHRpdGVtRWwgPSBpdGVtO1xyXG5cclxuXHRcdFx0XHR3cmFwcGVyLmFwcGVuZENoaWxkKGl0ZW1FbCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGRpc3BsYXlQYWdpbmF0aW9uKGl0ZW1zLCB3cmFwcGVyLCBpdGVtc1BlclBhZ2UpIHtcclxuXHRcdFx0d3JhcHBlci5pbm5lckhUTUwgPSAnJztcclxuXHJcblx0XHRcdGxldCBwYWdlQ291bnQgPSBNYXRoLmNlaWwoaXRlbXMubGVuZ3RoIC8gaXRlbXNQZXJQYWdlKTtcclxuXHJcblx0XHRcdGZvciAobGV0IGkgPSAxOyBpIDwgcGFnZUNvdW50ICsgMTsgaSsrKSB7XHJcblx0XHRcdFx0bGV0IGJ0biA9IHBhZ2luYXRpb25CdXR0b24oaSwgcGFnZUNvdW50KTtcclxuXHJcblx0XHRcdFx0YnRuLnN0eWxlLndpZHRoID0gJzAnO1xyXG5cdFx0XHRcdGJ0bi5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG5cdFx0XHRcdGJ0bi5zdHlsZS5tYXJnaW4gPSAnMCc7XHJcblxyXG5cdFx0XHRcdHdyYXBwZXIuYXBwZW5kQ2hpbGQoYnRuKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bGV0IG5leHRCdG4gPSBuZXh0UGFnZShwYWdlQ291bnQpO1xyXG5cdFx0XHR3cmFwcGVyLmFwcGVuZENoaWxkKG5leHRCdG4pO1xyXG5cclxuXHRcdFx0bGV0IHByZXZCdG4gPSBwcmV2UGFnZShwYWdlQ291bnQpO1xyXG5cdFx0XHR3cmFwcGVyLnByZXBlbmQocHJldkJ0bik7XHJcblxyXG5cdFx0XHRsZXQgY3VycmVudEJ0bkRvZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHRcdCcjZG9ncyAucGFnaW5hdGlvbi1idG4uYWN0aXZlJ1xyXG5cdFx0XHQpO1xyXG5cdFx0XHRsZXQgY3VycmVudEJ0bkNhdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHRcdCcjY2F0cyAucGFnaW5hdGlvbi1idG4uYWN0aXZlJ1xyXG5cdFx0XHQpO1xyXG5cclxuXHRcdFx0aWYgKGN1cnJlbnRCdG5Eb2dzICYmIGN1cnJlbnRCdG5DYXRzKSB7XHJcblx0XHRcdFx0Y3VycmVudEJ0bkRvZ3MuY2xhc3NMaXN0LmFkZCgnZ3JvdXAnKTtcclxuXHRcdFx0XHRjdXJyZW50QnRuRG9ncy5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnZ3JvdXAnKTtcclxuXHRcdFx0XHRjdXJyZW50QnRuRG9ncy5uZXh0RWxlbWVudFNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoXHJcblx0XHRcdFx0XHQnZ3JvdXAnXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHRjdXJyZW50QnRuRG9ncy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2dyb3VwJyk7XHJcblxyXG5cdFx0XHRcdGN1cnJlbnRCdG5DYXRzLmNsYXNzTGlzdC5hZGQoJ2dyb3VwJyk7XHJcblx0XHRcdFx0Y3VycmVudEJ0bkNhdHMubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2dyb3VwJyk7XHJcblx0XHRcdFx0Y3VycmVudEJ0bkNhdHMubmV4dEVsZW1lbnRTaWJsaW5nLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKFxyXG5cdFx0XHRcdFx0J2dyb3VwJ1xyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0Y3VycmVudEJ0bkNhdHMucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdncm91cCcpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gbmV4dFBhZ2UocGFnZUNvdW50KSB7XHJcblx0XHRcdGxldCBuZXh0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblx0XHRcdG5leHRCdG4uY2xhc3NMaXN0LmFkZCgnbmV4dCcpO1xyXG5cdFx0XHRuZXh0QnRuLmlubmVyVGV4dCA9ICc+JztcclxuXHRcdFx0bmV4dEJ0bi5jbGFzc0xpc3QuYWRkKCdwYWdpbmF0aW9uLWJ0bicpO1xyXG5cclxuXHRcdFx0bmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0XHRcdFx0aWYgKG5leHRCdG4ucGFyZW50RWxlbWVudCA9PSBwYWdpbmF0aW9uRWxEb2dzKSB7XHJcblx0XHRcdFx0XHRkaXNwbGF5UGFnaW5hdGVkSXRlbXMoXHJcblx0XHRcdFx0XHRcdGRvZ0JveEFycmF5LFxyXG5cdFx0XHRcdFx0XHRkb2dzQm94LFxyXG5cdFx0XHRcdFx0XHRlbGVtZW50c09uUGFnZSxcclxuXHRcdFx0XHRcdFx0Y3VycmVudFBhZ2VcclxuXHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0bGV0IGFjdGl2ZUJ0bkRvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdFx0XHRcdCcjZG9ncyAucGFnaW5hdGlvbi1idG4uYWN0aXZlJ1xyXG5cdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHRhY3RpdmVCdG5Eb2cubmV4dEVsZW1lbnRTaWJsaW5nLmNsaWNrKCk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGN1cnJlbnRQYWdlID09PSBwYWdlQ291bnQpIHtcclxuXHRcdFx0XHRcdFx0bmV4dEJ0bi5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XHJcblx0XHRcdFx0XHRcdG5leHRCdG4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRsZXQgcHJldkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkb2dzIC5wcmV2Jyk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGN1cnJlbnRQYWdlICE9PSAxKSB7XHJcblx0XHRcdFx0XHRcdHByZXZCdG4uc3R5bGUub3BhY2l0eSA9ICcxJztcclxuXHRcdFx0XHRcdFx0cHJldkJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2FsbCc7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYgKGFjdGl2ZUJ0bkRvZykge1xyXG5cdFx0XHRcdFx0XHRhY3RpdmVCdG5Eb2cuY2xhc3NMaXN0LmFkZCgnZ3JvdXAnKTtcclxuXHRcdFx0XHRcdFx0YWN0aXZlQnRuRG9nLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdncm91cCcpO1xyXG5cdFx0XHRcdFx0XHRhY3RpdmVCdG5Eb2cucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdncm91cCcpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKG5leHRCdG4ucGFyZW50RWxlbWVudCA9PSBwYWdpbmF0aW9uRWxDYXRzKSB7XHJcblx0XHRcdFx0XHRkaXNwbGF5UGFnaW5hdGVkSXRlbXMoXHJcblx0XHRcdFx0XHRcdGNhdEJveEFycmF5LFxyXG5cdFx0XHRcdFx0XHRjYXRzQm94LFxyXG5cdFx0XHRcdFx0XHRlbGVtZW50c09uUGFnZSxcclxuXHRcdFx0XHRcdFx0Y3VycmVudFBhZ2VcclxuXHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0bGV0IGFjdGl2ZUJ0bkNhdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdFx0XHRcdCcjY2F0cyAucGFnaW5hdGlvbi1idG4uYWN0aXZlJ1xyXG5cdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHRhY3RpdmVCdG5DYXQubmV4dEVsZW1lbnRTaWJsaW5nLmNsaWNrKCk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGN1cnJlbnRQYWdlID09PSBwYWdlQ291bnQpIHtcclxuXHRcdFx0XHRcdFx0bmV4dEJ0bi5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XHJcblx0XHRcdFx0XHRcdG5leHRCdG4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRsZXQgcHJldkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXRzIC5wcmV2Jyk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGN1cnJlbnRQYWdlICE9PSAxKSB7XHJcblx0XHRcdFx0XHRcdHByZXZCdG4uc3R5bGUub3BhY2l0eSA9ICcxJztcclxuXHRcdFx0XHRcdFx0cHJldkJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2FsbCc7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYgKGFjdGl2ZUJ0bkNhdCkge1xyXG5cdFx0XHRcdFx0XHRhY3RpdmVCdG5DYXQuY2xhc3NMaXN0LmFkZCgnZ3JvdXAnKTtcclxuXHRcdFx0XHRcdFx0YWN0aXZlQnRuQ2F0Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdncm91cCcpO1xyXG5cdFx0XHRcdFx0XHRhY3RpdmVCdG5DYXQucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdncm91cCcpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRyZXR1cm4gbmV4dEJ0bjtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBwcmV2UGFnZShwYWdlQ291bnQpIHtcclxuXHRcdFx0bGV0IHByZXZCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHRcdFx0cHJldkJ0bi5jbGFzc0xpc3QuYWRkKCdwcmV2Jyk7XHJcblx0XHRcdHByZXZCdG4uaW5uZXJUZXh0ID0gJzwnO1xyXG5cdFx0XHRwcmV2QnRuLmNsYXNzTGlzdC5hZGQoJ3BhZ2luYXRpb24tYnRuJyk7XHJcblxyXG5cdFx0XHRwcmV2QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHRcdFx0XHRpZiAocHJldkJ0bi5wYXJlbnRFbGVtZW50ID09IHBhZ2luYXRpb25FbERvZ3MpIHtcclxuXHRcdFx0XHRcdGRpc3BsYXlQYWdpbmF0ZWRJdGVtcyhcclxuXHRcdFx0XHRcdFx0ZG9nQm94QXJyYXksXHJcblx0XHRcdFx0XHRcdGRvZ3NCb3gsXHJcblx0XHRcdFx0XHRcdGVsZW1lbnRzT25QYWdlLFxyXG5cdFx0XHRcdFx0XHRjdXJyZW50UGFnZVxyXG5cdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHRsZXQgYWN0aXZlQnRuRG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuXHRcdFx0XHRcdFx0JyNkb2dzIC5wYWdpbmF0aW9uLWJ0bi5hY3RpdmUnXHJcblx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdGFjdGl2ZUJ0bkRvZy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsaWNrKCk7XHJcblxyXG5cdFx0XHRcdFx0bGV0IG5leHRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZG9ncyAubmV4dCcpO1xyXG5cclxuXHRcdFx0XHRcdGlmIChjdXJyZW50UGFnZSAhPT0gcGFnZUNvdW50KSB7XHJcblx0XHRcdFx0XHRcdG5leHRCdG4uc3R5bGUub3BhY2l0eSA9ICcxJztcclxuXHRcdFx0XHRcdFx0bmV4dEJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2FsbCc7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYgKGN1cnJlbnRQYWdlID09PSAxKSB7XHJcblx0XHRcdFx0XHRcdHByZXZCdG4uc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xyXG5cdFx0XHRcdFx0XHRwcmV2QnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYgKGFjdGl2ZUJ0bkRvZykge1xyXG5cdFx0XHRcdFx0XHRhY3RpdmVCdG5Eb2cuY2xhc3NMaXN0LmFkZCgnZ3JvdXAnKTtcclxuXHRcdFx0XHRcdFx0YWN0aXZlQnRuRG9nLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdncm91cCcpO1xyXG5cdFx0XHRcdFx0XHRhY3RpdmVCdG5Eb2cucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdncm91cCcpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKHByZXZCdG4ucGFyZW50RWxlbWVudCA9PSBwYWdpbmF0aW9uRWxDYXRzKSB7XHJcblx0XHRcdFx0XHRkaXNwbGF5UGFnaW5hdGVkSXRlbXMoXHJcblx0XHRcdFx0XHRcdGNhdEJveEFycmF5LFxyXG5cdFx0XHRcdFx0XHRjYXRzQm94LFxyXG5cdFx0XHRcdFx0XHRlbGVtZW50c09uUGFnZSxcclxuXHRcdFx0XHRcdFx0Y3VycmVudFBhZ2VcclxuXHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0bGV0IGFjdGl2ZUJ0bkNhdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdFx0XHRcdCcjY2F0cyAucGFnaW5hdGlvbi1idG4uYWN0aXZlJ1xyXG5cdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHRhY3RpdmVCdG5DYXQucHJldmlvdXNFbGVtZW50U2libGluZy5jbGljaygpO1xyXG5cclxuXHRcdFx0XHRcdGxldCBuZXh0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhdHMgLm5leHQnKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoY3VycmVudFBhZ2UgIT09IHBhZ2VDb3VudCkge1xyXG5cdFx0XHRcdFx0XHRuZXh0QnRuLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcblx0XHRcdFx0XHRcdG5leHRCdG4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhbGwnO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmIChjdXJyZW50UGFnZSA9PT0gMSkge1xyXG5cdFx0XHRcdFx0XHRwcmV2QnRuLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcclxuXHRcdFx0XHRcdFx0cHJldkJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmIChhY3RpdmVCdG5DYXQpIHtcclxuXHRcdFx0XHRcdFx0YWN0aXZlQnRuQ2F0LmNsYXNzTGlzdC5hZGQoJ2dyb3VwJyk7XHJcblx0XHRcdFx0XHRcdGFjdGl2ZUJ0bkNhdC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnZ3JvdXAnKTtcclxuXHRcdFx0XHRcdFx0YWN0aXZlQnRuQ2F0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnZ3JvdXAnKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0aWYgKGN1cnJlbnRQYWdlID09PSAxKSB7XHJcblx0XHRcdFx0cHJldkJ0bi5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XHJcblx0XHRcdFx0cHJldkJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gcHJldkJ0bjtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBwYWdpbmF0aW9uQnV0dG9uKHBhZ2UsIHBhZ2VDb3VudCkge1xyXG5cdFx0XHRsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblx0XHRcdGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwYWdpbmF0aW9uLWJ0bicpO1xyXG5cdFx0XHRidXR0b24uaW5uZXJUZXh0ID0gcGFnZTtcclxuXHJcblx0XHRcdGlmIChjdXJyZW50UGFnZSA9PSBwYWdlKSB7XHJcblx0XHRcdFx0YnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0XHRcdGN1cnJlbnRQYWdlID0gcGFnZTtcclxuXHJcblx0XHRcdFx0aWYgKGJ1dHRvbi5wYXJlbnRFbGVtZW50ID09IHBhZ2luYXRpb25FbERvZ3MpIHtcclxuXHRcdFx0XHRcdGRpc3BsYXlQYWdpbmF0ZWRJdGVtcyhcclxuXHRcdFx0XHRcdFx0ZG9nQm94QXJyYXksXHJcblx0XHRcdFx0XHRcdGRvZ3NCb3gsXHJcblx0XHRcdFx0XHRcdGVsZW1lbnRzT25QYWdlLFxyXG5cdFx0XHRcdFx0XHRjdXJyZW50UGFnZVxyXG5cdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHRsZXQgYWN0aXZlQnRuRG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuXHRcdFx0XHRcdFx0JyNkb2dzIC5wYWdpbmF0aW9uLWJ0bi5hY3RpdmUnXHJcblx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdGFjdGl2ZUJ0bkRvZy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHJcblx0XHRcdFx0XHRidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRcdFx0bGV0IG5leHRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZG9ncyAubmV4dCcpO1xyXG5cclxuXHRcdFx0XHRcdGlmIChjdXJyZW50UGFnZSA9PT0gcGFnZUNvdW50KSB7XHJcblx0XHRcdFx0XHRcdG5leHRCdG4uc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xyXG5cdFx0XHRcdFx0XHRuZXh0QnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRuZXh0QnRuLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcblx0XHRcdFx0XHRcdG5leHRCdG4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhbGwnO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGxldCBwcmV2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RvZ3MgLnByZXYnKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoY3VycmVudFBhZ2UgPT09IDEpIHtcclxuXHRcdFx0XHRcdFx0cHJldkJ0bi5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XHJcblx0XHRcdFx0XHRcdHByZXZCdG4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHByZXZCdG4uc3R5bGUub3BhY2l0eSA9ICcxJztcclxuXHRcdFx0XHRcdFx0cHJldkJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2FsbCc7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoYnV0dG9uLnBhcmVudEVsZW1lbnQgPT0gcGFnaW5hdGlvbkVsQ2F0cykge1xyXG5cdFx0XHRcdFx0ZGlzcGxheVBhZ2luYXRlZEl0ZW1zKFxyXG5cdFx0XHRcdFx0XHRjYXRCb3hBcnJheSxcclxuXHRcdFx0XHRcdFx0Y2F0c0JveCxcclxuXHRcdFx0XHRcdFx0ZWxlbWVudHNPblBhZ2UsXHJcblx0XHRcdFx0XHRcdGN1cnJlbnRQYWdlXHJcblx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdGxldCBhY3RpdmVCdG5DYXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHRcdFx0XHQnI2NhdHMgLnBhZ2luYXRpb24tYnRuLmFjdGl2ZSdcclxuXHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0YWN0aXZlQnRuQ2F0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cclxuXHRcdFx0XHRcdGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHJcblx0XHRcdFx0XHRsZXQgbmV4dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXRzIC5uZXh0Jyk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGN1cnJlbnRQYWdlID09PSBwYWdlQ291bnQpIHtcclxuXHRcdFx0XHRcdFx0bmV4dEJ0bi5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XHJcblx0XHRcdFx0XHRcdG5leHRCdG4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdG5leHRCdG4uc3R5bGUub3BhY2l0eSA9ICcxJztcclxuXHRcdFx0XHRcdFx0bmV4dEJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2FsbCc7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0bGV0IHByZXZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2F0cyAucHJldicpO1xyXG5cclxuXHRcdFx0XHRcdGlmIChjdXJyZW50UGFnZSA9PT0gMSkge1xyXG5cdFx0XHRcdFx0XHRwcmV2QnRuLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcclxuXHRcdFx0XHRcdFx0cHJldkJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0cHJldkJ0bi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG5cdFx0XHRcdFx0XHRwcmV2QnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYWxsJztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0cmV0dXJuIGJ1dHRvbjtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBleHBhbmRzTW9yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tleHBhbmQtbW9yZV0nKTtcclxuXHJcblx0XHRmdW5jdGlvbiBleHBhbmQoKSB7XHJcblx0XHRcdGNvbnN0IHNob3dDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5kYXRhc2V0LnRhcmdldCk7XHJcblx0XHRcdGlmIChzaG93Q29udGVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcblx0XHRcdFx0dGhpcy5pbm5lckhUTUwgPSB0aGlzLmRhdGFzZXQuc2hvd3RleHQ7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5pbm5lckhUTUwgPSB0aGlzLmRhdGFzZXQuaGlkZXRleHQ7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHNob3dDb250ZW50LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG5cdFx0XHRpZiAoc2hvd0NvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG5cdFx0XHRcdHNob3dDb250ZW50LnN0eWxlLm1heEhlaWdodCA9IHNob3dDb250ZW50LnNjcm9sbEhlaWdodCArICdweCc7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2hvd0NvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gMjAgKyAncHgnO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGRvZ3NCb3gpIHtcclxuXHRcdFx0ZGlzcGxheVBhZ2luYXRlZEl0ZW1zKGRvZ0JveEFycmF5LCBkb2dzQm94LCBlbGVtZW50c09uUGFnZSwgY3VycmVudFBhZ2UpO1xyXG5cdFx0XHRkaXNwbGF5UGFnaW5hdGlvbihkb2dCb3hBcnJheSwgcGFnaW5hdGlvbkVsRG9ncywgZWxlbWVudHNPblBhZ2UpO1xyXG5cclxuXHRcdFx0ZXhwYW5kc01vcmUuZm9yRWFjaCgoYnRuKSA9PiB7XHJcblx0XHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXhwYW5kKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGNhdHNCb3gpIHtcclxuXHRcdFx0ZGlzcGxheVBhZ2luYXRlZEl0ZW1zKGNhdEJveEFycmF5LCBjYXRzQm94LCBlbGVtZW50c09uUGFnZSwgY3VycmVudFBhZ2UpO1xyXG5cdFx0XHRkaXNwbGF5UGFnaW5hdGlvbihjYXRCb3hBcnJheSwgcGFnaW5hdGlvbkVsQ2F0cywgZWxlbWVudHNPblBhZ2UpO1xyXG5cclxuXHRcdFx0ZXhwYW5kc01vcmUuZm9yRWFjaCgoYnRuKSA9PiB7XHJcblx0XHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXhwYW5kKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRpZiAoYW5pbWFsc1BhZ2VzKSB7XHJcblx0XHQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRkaXNwbGF5QW5pbWFscygpO1xyXG5cdFx0fSkoKTtcclxuXHR9XHJcbn0pO1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG5cdC8vIGZvcm0gdmFsaWRhdGlvblxyXG5cdGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdC1mb3JtJyk7XHJcblx0Y29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJyk7XHJcblx0Y29uc3QgZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWwnKTtcclxuXHRjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lc3NhZ2UnKTtcclxuXHRjb25zdCBmb3JtQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tYnRuJyk7XHJcblxyXG5cdGlmIChmb3JtKSB7XHJcblx0XHRbXHJcblx0XHRcdCdjbGljaycsXHJcblx0XHRcdCdvbnRvdWNoc3RhcnQnLFxyXG5cdFx0XHQnbW91c2VvdmVyJyxcclxuXHRcdFx0J2tleWRvd24nLFxyXG5cdFx0XHQna2V5cHJlc3MnLFxyXG5cdFx0XHQndG91Y2hzdGFydCcsXHJcblx0XHRcdCd0b3VjaG1vdmUnLFxyXG5cdFx0XS5mb3JFYWNoKFxyXG5cdFx0XHQoZXZlbnQpID0+XHJcblx0XHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgKCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGNoZWNrSW5wdXRzKCkgPT09IGZhbHNlKSB7XHJcblx0XHRcdFx0XHRcdGZvcm1CdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Zm9ybUJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHJcblx0XHRmdW5jdGlvbiBjaGVja0lucHV0cygpIHtcclxuXHRcdFx0Y29uc3QgbmFtZVZhbHVlID0gbmFtZS52YWx1ZS50cmltKCk7XHJcblx0XHRcdGNvbnN0IGVtYWlsVmFsdWUgPSBlbWFpbC52YWx1ZS50cmltKCk7XHJcblx0XHRcdGNvbnN0IG1lc3NhZ2VWYWx1ZSA9IG1lc3NhZ2UudmFsdWUudHJpbSgpO1xyXG5cclxuXHRcdFx0aWYgKG5hbWVWYWx1ZSA9PT0gJycpIHtcclxuXHRcdFx0XHRzZXRFcnJvckZvcihuYW1lLCAnUGxlYXNlIGVudGVyIHlvdXIgZnVsbCBuYW1lJyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0U3VjY2Vzc0ZvcihuYW1lKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGVtYWlsVmFsdWUgPT09ICcnKSB7XHJcblx0XHRcdFx0c2V0RXJyb3JGb3IoZW1haWwsICdQbGVhc2UgZW50ZXIgeW91ciBlbWFpbCBhZGRyZXNzJyk7XHJcblx0XHRcdH0gZWxzZSBpZiAoIWVtYWlsSXNWYWxpZChlbWFpbFZhbHVlKSkge1xyXG5cdFx0XHRcdHNldEVycm9yRm9yKGVtYWlsLCAnRW1haWwgaXMgbm90IHZhbGlkJyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0U3VjY2Vzc0ZvcihlbWFpbCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChtZXNzYWdlVmFsdWUgPT09ICcnKSB7XHJcblx0XHRcdFx0c2V0RXJyb3JGb3IobWVzc2FnZSwgJ1BsZWFzZSBlbnRlciB5b3VyIG1lc3NhZ2UnKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRTdWNjZXNzRm9yKG1lc3NhZ2UpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoXHJcblx0XHRcdFx0bmFtZVZhbHVlID09PSAnJyB8fFxyXG5cdFx0XHRcdGVtYWlsVmFsdWUgPT09ICcnIHx8XHJcblx0XHRcdFx0bWVzc2FnZVZhbHVlID09PSAnJyB8fFxyXG5cdFx0XHRcdCFlbWFpbElzVmFsaWQoZW1haWxWYWx1ZSlcclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gc2V0RXJyb3JGb3IoaW5wdXQsIG1lc3NhZ2UpIHtcclxuXHRcdFx0Y29uc3QgZm9ybSA9IGlucHV0LnBhcmVudEVsZW1lbnQ7XHJcblx0XHRcdGNvbnN0IHNtYWxsID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdzbWFsbCcpO1xyXG5cclxuXHRcdFx0c21hbGwuaW5uZXJUZXh0ID0gbWVzc2FnZTtcclxuXHRcdFx0Zm9ybS5jbGFzc05hbWUgPSAnZm9ybV9fZ3JvdXAgZXJyb3InO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHNldFN1Y2Nlc3NGb3IoaW5wdXQpIHtcclxuXHRcdFx0Y29uc3QgZm9ybSA9IGlucHV0LnBhcmVudEVsZW1lbnQ7XHJcblx0XHRcdGZvcm0uY2xhc3NOYW1lID0gJ2Zvcm1fX2dyb3VwIHN1Y2Nlc3MnO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGVtYWlsSXNWYWxpZChlbWFpbCkge1xyXG5cdFx0XHRjb25zdCByZSA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvLnRlc3QoXHJcblx0XHRcdFx0ZW1haWxcclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdHJldHVybiByZTtcclxuXHRcdH1cclxuXHR9XHJcbn0pO1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIChlKSA9PiB7XG5cdFx0Y29uc3QgcHJlbG9hZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVsb2FkJyk7XG5cblx0XHRwcmVsb2FkLmNsYXNzTGlzdC5hZGQoJ3ByZWxvYWQtZmluaXNoZWQnKTtcblx0fSk7XG5cblx0Y29uc3QgYnRuU2Nyb2xsVG9Ub3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuU2Nyb2xsVG9Ub3AnKTtcblx0YnRuU2Nyb2xsVG9Ub3AuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdHdpbmRvdy5zY3JvbGxUbyh7XG5cdFx0XHR0b3A6IDAsXG5cdFx0XHRsZWZ0OiAwLFxuXHRcdFx0YmVoYXZpb3I6ICdzbW9vdGgnLFxuXHRcdH0pO1xuXHR9KTtcblxuXHRjb25zdCBleHBhbmRzTW9yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tleHBhbmQtbW9yZV0nKTtcblxuXHRmdW5jdGlvbiBleHBhbmQoKSB7XG5cdFx0Y29uc3Qgc2hvd0NvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRhdGFzZXQudGFyZ2V0KTtcblxuXHRcdGlmIChzaG93Q29udGVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG5cdFx0XHR0aGlzLmlubmVySFRNTCA9IHRoaXMuZGF0YXNldC5zaG93dGV4dDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5pbm5lckhUTUwgPSB0aGlzLmRhdGFzZXQuaGlkZXRleHQ7XG5cdFx0fVxuXG5cdFx0c2hvd0NvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG5cdFx0aWYgKHNob3dDb250ZW50LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcblx0XHRcdHNob3dDb250ZW50LnN0eWxlLm1heEhlaWdodCA9IHNob3dDb250ZW50LnNjcm9sbEhlaWdodCArICdweCc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNob3dDb250ZW50LnN0eWxlLm1heEhlaWdodCA9IGAyMnB4YDtcblx0XHR9XG5cdH1cblxuXHRleHBhbmRzTW9yZS5mb3JFYWNoKChidG4pID0+IHtcblx0XHRjb25zdCBjb250YWluZXJIZWlnaHQgPVxuXHRcdFx0YnRuLnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5vZmZzZXRIZWlnaHQ7XG5cblx0XHRjb25zdCBleHBhbmRFbGVtZW50SGVpZ2h0ID1cblx0XHRcdGJ0bi5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZmlyc3RFbGVtZW50Q2hpbGQub2Zmc2V0SGVpZ2h0O1xuXG5cdFx0aWYgKGNvbnRhaW5lckhlaWdodCA+PSBleHBhbmRFbGVtZW50SGVpZ2h0KSB7XG5cdFx0XHRidG4uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuXHRcdFx0YnRuLnN0eWxlLmhlaWdodCA9IDA7XG5cdFx0fVxuXHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV4cGFuZCk7XG5cdH0pO1xufSk7XG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IG1vZGFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsLWJ0bicpO1xyXG5cdGNvbnN0IG1vZGFsRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKTtcclxuXHRjb25zdCBtb2RhbEJ0bkNsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlJyk7XHJcblxyXG5cdC8vIFNob3cgbW9kYWxcclxuXHRtb2RhbEJ0bi5mb3JFYWNoKChtb2RhbCkgPT4ge1xyXG5cdFx0bW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtb2RhbEVsLmNsYXNzTGlzdC5hZGQoJ3Nob3ctbW9kYWwnKSk7XHJcblx0fSk7XHJcblxyXG5cdC8vIEhpZGUgbW9kYWxcclxuXHRtb2RhbEJ0bkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cclxuXHRcdG1vZGFsRWwuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdy1tb2RhbCcpXHJcblx0KTtcclxuXHJcblx0Ly8gSGlkZSBtb2RhbCBvbiBvdXRzaWRlIGNsaWNrXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+XHJcblx0XHRlLnRhcmdldCA9PSBtb2RhbCA/IG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3ctbW9kYWwnKSA6IGZhbHNlXHJcblx0KTtcclxufSk7XHJcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3QgbmF2Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdi1jb250YWluZXInKTtcclxuXHRjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtYnRuJyk7XHJcblx0Y29uc3QgbmF2TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYtbGlzdCcpO1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKGUpID0+IHtcclxuXHRcdGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID4gMCkge1xyXG5cdFx0XHRuYXZDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc3RpY2t5Jyk7XHJcblx0XHRcdGJ0blNjcm9sbFRvVG9wLnN0eWxlLm9wYWNpdHkgPSAxO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bmF2Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3N0aWNreScpO1xyXG5cdFx0XHRidG5TY3JvbGxUb1RvcC5zdHlsZS5vcGFjaXR5ID0gMDtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0bWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0XHRtZW51QnRuLmNsYXNzTGlzdC50b2dnbGUoJ2NsaWNrZWQnKTtcclxuXHRcdG5hdkNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdvdmVybGF5Jyk7XHJcblx0XHRuYXZMaXN0LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcclxuXHR9KTtcclxufSk7XHJcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcblx0Ly8gY2Fyb3VzZWxcclxuXHRjb25zdCBjYXJvdXNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJvdXNlbCcpO1xyXG5cdGNvbnN0IHByZXZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldicpO1xyXG5cdGNvbnN0IG5leHRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dCcpO1xyXG5cdGNvbnN0IGNhcm91c2VsVXJsID0gJy4vanMvY2Fyb3VzZWwuanNvbic7XHJcblxyXG5cdGxldCBmaXJzdFNsaWRlO1xyXG5cdGxldCBsYXN0U2xpZGU7XHJcblxyXG5cdGZ1bmN0aW9uIGdldFNsaWRlc0RhdGEoKSB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRmZXRjaChjYXJvdXNlbFVybClcclxuXHRcdFx0XHQudGhlbigocmVzcCkgPT4gcmVzcC5qc29uKCkpXHJcblx0XHRcdFx0LnRoZW4oKGRhdGEpID0+IHJlc29sdmUoZGF0YSkpXHJcblx0XHRcdFx0LmNhdGNoKChlcnIpID0+IHJlamVjdChlcnIpKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgZnVuY3Rpb24gZGlzcGxheUNhcm91c2VsKCkge1xyXG5cdFx0Y29uc3QgZGF0YUxpc3QgPSBhd2FpdCBnZXRTbGlkZXNEYXRhKCk7XHJcblx0XHRjb25zdCBzbGlkZXNBcnJheSA9IGRhdGFMaXN0LnNsaWRlcztcclxuXHJcblx0XHRzbGlkZXNBcnJheS5mb3JFYWNoKChzbGlkZSwgc2xpZGVOdW1iZXIpID0+IHtcclxuXHRcdFx0bmV3U2xpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdFx0bmV3U2xpZGUuY2xhc3NMaXN0LmFkZCgnY2Fyb3VzZWxfX3NsaWRlJyk7XHJcblxyXG5cdFx0XHRuZXdTbGlkZS5pbm5lckhUTUwgPSBgXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjYXJvdXNlbF9faW1hZ2UtY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCIke3NsaWRlLmltYWdlfVwiIGFsdD1cInNsaWRlLWltZ1wiIC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2Fyb3VzZWxfX2NvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aDEgY2xhc3M9XCJjYXJvdXNlbF9fdGl0bGVcIj4ke3NsaWRlLnRpdGxlfTwvaDE+XHJcblx0XHRcdFx0XHRcdFx0PHAgY2xhc3M9XCJjYXJvdXNlbF9fZGVzY1wiPiR7c2xpZGUuY29udGVudH08L3A+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRgO1xyXG5cclxuXHRcdFx0Y2Fyb3VzZWwuYXBwZW5kQ2hpbGQobmV3U2xpZGUpO1xyXG5cclxuXHRcdFx0aWYgKHNsaWRlTnVtYmVyID09PSAwKSB7XHJcblx0XHRcdFx0Zmlyc3RTbGlkZSA9IG5ld1NsaWRlO1xyXG5cdFx0XHRcdG5ld1NsaWRlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHNsaWRlTnVtYmVyICsgMSA9PT0gZGF0YUxpc3Quc2xpZGVzLmxlbmd0aCkge1xyXG5cdFx0XHRcdGxhc3RTbGlkZSA9IG5ld1NsaWRlO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHRuZXh0U2xpZGUoKTtcclxuXHRcdHByZXZpb3VzU2xpZGUoKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG5leHRTbGlkZSgpIHtcclxuXHRcdGNvbnN0IG5leHRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dCcpO1xyXG5cclxuXHRcdG5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0XHRjb25zdCBhY3RpdmVTbGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fc2xpZGUuYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRsZXQgbmV4dFNpYmxpbmcgPSBhY3RpdmVTbGlkZS5uZXh0RWxlbWVudFNpYmxpbmc7XHJcblxyXG5cdFx0XHRpZiAobmV4dFNpYmxpbmcgPT0gbnVsbCkge1xyXG5cdFx0XHRcdG5leHRTaWJsaW5nID0gYWN0aXZlU2xpZGU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChuZXh0U2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ2Nhcm91c2VsX19zbGlkZScpKSB7XHJcblx0XHRcdFx0YWN0aXZlU2xpZGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0XHRcdFx0bmV4dFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gcHJldmlvdXNTbGlkZSgpIHtcclxuXHRcdGNvbnN0IHByZXZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldicpO1xyXG5cclxuXHRcdHByZXZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0XHRjb25zdCBhY3RpdmVTbGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fc2xpZGUuYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRsZXQgbmV4dFNpYmxpbmcgPSBhY3RpdmVTbGlkZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG5cclxuXHRcdFx0aWYgKG5leHRTaWJsaW5nID09IG51bGwpIHtcclxuXHRcdFx0XHRuZXh0U2libGluZyA9IGFjdGl2ZVNsaWRlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAobmV4dFNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJvdXNlbF9fc2xpZGUnKSkge1xyXG5cdFx0XHRcdGFjdGl2ZVNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdG5leHRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGlmIChjYXJvdXNlbCAhPT0gbnVsbCkge1xyXG5cdFx0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0ZGlzcGxheUNhcm91c2VsKCk7XHJcblx0XHR9KSgpO1xyXG5cdH1cclxufSk7XHJcbiIsIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG5cdC8vIHRhYnNcclxuXHRjb25zdCB0YWJMaXN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYmNjb3JkaW9uX19saXN0LWJ0bicpO1xyXG5cdGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiY2NvcmRpb25fX2NvbnRhaW5lcicpO1xyXG5cdGNvbnN0IHRhYmNjb3JkaW9uTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWJjY29yZGlvbi1saXN0Jyk7XHJcblx0Y29uc3QgdGFic0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiY2NvcmRpb25fX3RhYi1pbm5lcicpO1xyXG5cdGNvbnN0IHRhYmNjb3JkaW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYmNjb3JkaW9uJyk7XHJcblxyXG5cdGZ1bmN0aW9uIGFjdGl2YXRlVGFicygpIHtcclxuXHRcdHRhYkxpc3RCdG4uZm9yRWFjaCgodGFiKSA9PiB7XHJcblx0XHRcdHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgdGFiTmF2ID0gdGFiLnBhcmVudEVsZW1lbnQ7XHJcblx0XHRcdFx0Y29uc3QgdGFic0NvbnRhaW5lciA9IHRhYk5hdi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcblx0XHRcdFx0Y29uc3QgdGFiTnVtYmVyID0gdGFiLmRhdGFzZXQuZm9yVGFiO1xyXG5cdFx0XHRcdGNvbnN0IHRhYlRvQWN0aXZhdGUgPSB0YWJzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdFx0XHRgLnRhYmNjb3JkaW9uX190YWJbZGF0YS10YWI9XCIke3RhYk51bWJlcn1cIl1gXHJcblx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0dGFiTmF2LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJjY29yZGlvbl9fbGlzdC1idG4nKS5mb3JFYWNoKChidG4pID0+IHtcclxuXHRcdFx0XHRcdGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdHRhYnNDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLnRhYmNjb3JkaW9uX190YWInKS5mb3JFYWNoKCh0YWIpID0+IHtcclxuXHRcdFx0XHRcdHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdHRhYi5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XHJcblx0XHRcdFx0dGFiVG9BY3RpdmF0ZS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XHJcblxyXG5cdFx0XHRcdGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSA2MDApIHtcclxuXHRcdFx0XHRcdHRhYnNDb250ZW50LmZvckVhY2goKHRhYnMpID0+IHtcclxuXHRcdFx0XHRcdFx0dGFicy5zdHlsZS5tYXhIZWlnaHQgPSB0YWJzLnNjcm9sbEhlaWdodCArICdweCc7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0aWYgKHRhYmNjb3JkaW9uTGlzdCkge1xyXG5cdFx0XHR0YWJzLmZvckVhY2goKHRhYikgPT4ge1xyXG5cdFx0XHRcdHRhYi5xdWVyeVNlbGVjdG9yKCcudGFiY2NvcmRpb25fX2xpc3QgLnRhYmNjb3JkaW9uX19idG4nKS5jbGljaygpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vLy8vIGFjY29yZGlvblxyXG5cdGNvbnN0IGFjY29yZGlvbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvcmRpb25fX2xpc3QtYnRuJyk7XHJcblxyXG5cdGZ1bmN0aW9uIGFjdGl2YXRlQWNjb3JkaW9uKCkge1xyXG5cdFx0YWNjb3JkaW9uQnRuLmZvckVhY2goKGJ0bikgPT4ge1xyXG5cdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdFx0Ly8gY2hlY2sgZm9yIG9wZW4gYWNjb3JkaW9uXHJcblx0XHRcdFx0Y29uc3QgYWNjb3JkaW9uQnRuT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdFx0XHQnLmFjY29yZGlvbl9fbGlzdC1idG4ub3BlbidcclxuXHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRpZiAoYWNjb3JkaW9uQnRuT3BlbiAmJiBhY2NvcmRpb25CdG5PcGVuICE9PSBidG4pIHtcclxuXHRcdFx0XHRcdC8vIGlmIHRoZXJlIGlzIG9wZW4gdGhlbiByZW1vdmUgb3BlbiBjbGFzcyBhbmQgc2V0IG1heGhlaWdodCB0byAwXHJcblx0XHRcdFx0XHRhY2NvcmRpb25CdG5PcGVuLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcclxuXHRcdFx0XHRcdGFjY29yZGlvbkJ0bk9wZW4ubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLm1heEhlaWdodCA9IDA7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBzZXQgb3BlbiBjbGFzcyB0byBldmVyeSBjbGlja2VkIGFjY29yZGlvbiBidG5cclxuXHRcdFx0XHRidG4uY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xyXG5cdFx0XHRcdGNvbnN0IGFjY29yZGlvbkJvZHkgPSBidG4ubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG5cclxuXHRcdFx0XHRpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpKSB7XHJcblx0XHRcdFx0XHRhY2NvcmRpb25Cb2R5LnN0eWxlLm1heEhlaWdodCA9IGFjY29yZGlvbkJvZHkuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0YWNjb3JkaW9uQm9keS5zdHlsZS5tYXhIZWlnaHQgPSAwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKGUpID0+IHtcclxuXHRcdFx0aWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNjAwKSB7XHJcblx0XHRcdFx0dGFic0NvbnRlbnQuZm9yRWFjaCgodGFicykgPT4ge1xyXG5cdFx0XHRcdFx0dGFicy5zdHlsZS5tYXhIZWlnaHQgPSAwO1xyXG5cdFx0XHRcdFx0aWYgKHRhYnMucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKSkge1xyXG5cdFx0XHRcdFx0XHR0YWJzLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGlmICh0YWJjY29yZGlvbikge1xyXG5cdFx0YWN0aXZhdGVUYWJzKCk7XHJcblx0XHRhY3RpdmF0ZUFjY29yZGlvbigpO1xyXG5cdH1cclxufSk7XHJcbiJdLCJwcmVFeGlzdGluZ0NvbW1lbnQiOiIvLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTh2ZDJWaWNHRmpheTlpYjI5MGMzUnlZWEFpTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDJwekwyRmtiM0IwUTI5dWRHVnVkRk4zYVhSamFHVnlMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5cWN5OW1aWFJqYUVGdWFXMWhiSE5FWVhSaExtcHpJaXdpZDJWaWNHRmphem92THk4dUwzTnlZeTlxY3k5bWIzSnRWbUZzYVdSaGFYUnZiaTVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl6Y21NdmFuTXZiV0ZwYmk1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5emNtTXZhbk12Ylc5a1lXd3Vhbk1pTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDJwekwyNWhkaTVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl6Y21NdmFuTXZjMnhwWkdWeUxtcHpJaXdpZDJWaWNHRmphem92THk4dUwzTnlZeTlxY3k5MFlXSmpZMjl5WkdsdmJpNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMUZCUVVFN1VVRkRRVHM3VVVGRlFUdFJRVU5CT3p0UlFVVkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPenRSUVVWQk8xRkJRMEU3TzFGQlJVRTdVVUZEUVRzN1VVRkZRVHRSUVVOQk8xRkJRMEU3T3p0UlFVZEJPMUZCUTBFN08xRkJSVUU3VVVGRFFUczdVVUZGUVR0UlFVTkJPMUZCUTBFN1VVRkRRU3d3UTBGQk1FTXNaME5CUVdkRE8xRkJRekZGTzFGQlEwRTdPMUZCUlVFN1VVRkRRVHRSUVVOQk8xRkJRMEVzZDBSQlFYZEVMR3RDUVVGclFqdFJRVU14UlR0UlFVTkJMR2xFUVVGcFJDeGpRVUZqTzFGQlF5OUVPenRSUVVWQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFTeDVRMEZCZVVNc2FVTkJRV2xETzFGQlF6RkZMR2RJUVVGblNDeHRRa0ZCYlVJc1JVRkJSVHRSUVVOeVNUdFJRVU5CT3p0UlFVVkJPMUZCUTBFN1VVRkRRVHRSUVVOQkxESkNRVUV5UWl3d1FrRkJNRUlzUlVGQlJUdFJRVU4yUkN4cFEwRkJhVU1zWlVGQlpUdFJRVU5vUkR0UlFVTkJPMUZCUTBFN08xRkJSVUU3VVVGRFFTeHpSRUZCYzBRc0swUkJRU3RFT3p0UlFVVnlTRHRSUVVOQk96czdVVUZIUVR0UlFVTkJPenM3T3pzN096czdPenM3UVVOc1JrRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJMRWRCUVVjN1FVRkRTQ3hGUVVGRk96dEJRVVZHTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTERoRVFVRTRSQ3hQUVVGUE8wRkJRM0pGTzBGQlEwRXNaME5CUVdkRExFOUJRVTg3UVVGRGRrTTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hEUVVGRE96czdPenM3T3pzN096czdRVU5xUTBRN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzY1VKQlFYRkNMR2RDUVVGblFpeExRVUZMTEZOQlFWTTdRVUZEYmtRN1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0RzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRXRCUVVzN08wRkJSVXc3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzZVVOQlFYbERMRTFCUVUwc1UwRkJVeXhMUVVGTExFZEJRVWNzVVVGQlVTeEZRVUZGTzBGQlF6RkZPMEZCUTBFN1FVRkRRU3d3UkVGQk1FUXNTMEZCU3p0QlFVTXZSRHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CTERoRlFVRTRSU3hSUVVGUkxFVkJRVVVzVDBGQlR6dEJRVU12Ump0QlFVTkJMREJEUVVFd1F6dEJRVU14UXp0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4blJVRkJaMFVzVVVGQlVTeEZRVUZGTEU5QlFVODdRVUZEYWtZN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxEQkZRVUV3UlN4UFFVRlBPMEZCUTJwR08wRkJRMEU3UVVGRFFUdEJRVU5CTERCRlFVRXdSU3hQUVVGUE8wRkJRMnBHTzBGQlEwRTdRVUZEUVR0QlFVTkJMREJGUVVFd1JTeE5RVUZOTzBGQlEyaEdPMEZCUTBFN1FVRkRRVHRCUVVOQkxDdERRVUVyUXl3d1FrRkJNRUk3UVVGRGVrVTdRVUZEUVR0QlFVTkJPMEZCUTBFc0swTkJRU3RETERCQ1FVRXdRanRCUVVONlJUdEJRVU5CTzBGQlEwRTdRVUZEUVN3clEwRkJLME1zTUVKQlFUQkNPMEZCUTNwRk8wRkJRMEU3UVVGRFFUdEJRVU5CTERCRlFVRXdSU3hMUVVGTE8wRkJReTlGTzBGQlEwRTdRVUZEUVR0QlFVTkJMREJGUVVFd1JTeFBRVUZQTzBGQlEycEdPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRXNTVUZCU1RzN1FVRkZTanRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzZVVOQlFYbERMRlZCUVZVc1UwRkJVeXhUUVVGVE8wRkJRM0pGTzBGQlEwRXNTMEZCU3l4RlFVRkZPMEZCUTFBN1FVRkRRVHRCUVVOQkxEQkVRVUV3UkN4VFFVRlRPMEZCUTI1Rk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdsQ1FVRnBRaXhGUVVGRkxGZEJRVmM3UVVGRE9VSTdRVUZEUVN3d1EwRkJNRU03UVVGRE1VTTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNaMFZCUVdkRkxGbEJRVms3UVVGRE5VVTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHRRa0ZCYlVJN1FVRkRia0k3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRzFDUVVGdFFqdEJRVU51UWp0QlFVTkJPMEZCUTBFN1FVRkRRU3d3UlVGQk1FVXNVMEZCVXp0QlFVTnVSanRCUVVOQk8wRkJRMEU3UVVGRFFTd3JRMEZCSzBNc2EwTkJRV3RETzBGQlEycEdPMEZCUTBFN1FVRkRRVHRCUVVOQkxDdERRVUVyUXl4clEwRkJhME03UVVGRGFrWTdRVUZEUVR0QlFVTkJPMEZCUTBFc0swTkJRU3RETEd0RFFVRnJRenRCUVVOcVJqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2JVSkJRVzFDTzBGQlEyNUNPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHRRa0ZCYlVJN1FVRkRia0k3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3hKUVVGSk8wRkJRMG9zUjBGQlJ6czdRVUZGU0R0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFc1NVRkJTVHRCUVVOS096dEJRVVZCTzBGQlEwRTdPMEZCUlVFN08wRkJSVUVzYTBKQlFXdENMRzFDUVVGdFFqdEJRVU55UXpzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVsQlFVazdPMEZCUlVvN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1NVRkJTVHM3UVVGRlNqdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hOUVVGTk8wRkJRMDQ3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEUxQlFVMDdRVUZEVGp0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVFVGQlRUdEJRVU5PTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TlFVRk5PMEZCUTA0N1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEpRVUZKT3p0QlFVVktPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hKUVVGSk8wRkJRMG83UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hKUVVGSk8wRkJRMG83UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNTVUZCU1R0QlFVTktPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc1NVRkJTVHRCUVVOS08wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU8wRkJRMEVzUTBGQlF6czdPenM3T3pzN096czdPMEZEZW0xQ1JEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1RVRkJUVHRCUVVOT08wRkJRMEU3UVVGRFFTeExRVUZMTzBGQlEwdzdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc1NVRkJTVHRCUVVOS08wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRWxCUVVrN1FVRkRTanRCUVVOQkxFbEJRVWs3UVVGRFNqdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hKUVVGSk8wRkJRMG83UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVsQlFVazdRVUZEU2p0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQkxHbERRVUZwUXl4NVFrRkJlVUlzTmtKQlFUWkNMRWxCUVVrc1VVRkJVU3hKUVVGSkxGRkJRVkVzU1VGQlNTeFJRVUZSTEVsQlFVa3NaME5CUVdkRExFZEJRVWM3UVVGRGJFczdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeERRVUZET3pzN096czdPenM3T3pzN1FVTjJSa1E3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFc1JVRkJSVHM3UVVGRlJqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGdzUlVGQlJUczdRVUZGUmpzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hGUVVGRk8wRkJRMFlzUTBGQlF6czdPenM3T3pzN096czdPMEZEYUVSRU8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFVkJRVVU3TzBGQlJVWTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4RFFVRkRPenM3T3pzN096czdPenM3UVVOdVFrUTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRVHRCUVVOQk8wRkJRMEVzUlVGQlJUczdRVUZGUmp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFVkJRVVU3UVVGRFJpeERRVUZET3pzN096czdPenM3T3pzN1FVTndRa1E3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxHMUNRVUZ0UWl4WlFVRlpPMEZCUXk5Q08wRkJRMEU3UVVGRFFTeHhRMEZCY1VNc1dVRkJXVHRCUVVOcVJDeHRRMEZCYlVNc1kwRkJZenRCUVVOcVJEdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVsQlFVazdRVUZEU2p0QlFVTkJPMEZCUTBFc1IwRkJSenM3UVVGRlNEdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHRCUVVOQkxFTkJRVU03T3pzN096czdPenM3T3p0QlF6bEdSRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRzlEUVVGdlF5eFZRVUZWTzBGQlF6bERPenRCUVVWQk8wRkJRMEU3UVVGRFFTeExRVUZMT3p0QlFVVk1PMEZCUTBFN1FVRkRRU3hMUVVGTE96dEJRVVZNTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVFVGQlRUdEJRVU5PTzBGQlEwRXNTVUZCU1R0QlFVTktMRWRCUVVjN08wRkJSVWc3UVVGRFFUdEJRVU5CTzBGQlEwRXNTVUZCU1R0QlFVTktPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRTdRVUZEUVN4SlFVRkpPMEZCUTBvc1IwRkJSenM3UVVGRlNEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CTEVkQlFVYzdRVUZEU0RzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVOQlFVTWlMQ0ptYVd4bElqb2lZelV6WTJJMVlqQm1ZbU0wT1dVM05tTXhaV0V1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SWdYSFF2THlCVWFHVWdiVzlrZFd4bElHTmhZMmhsWEc0Z1hIUjJZWElnYVc1emRHRnNiR1ZrVFc5a2RXeGxjeUE5SUh0OU8xeHVYRzRnWEhRdkx5QlVhR1VnY21WeGRXbHlaU0JtZFc1amRHbHZibHh1SUZ4MFpuVnVZM1JwYjI0Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aHRiMlIxYkdWSlpDa2dlMXh1WEc0Z1hIUmNkQzh2SUVOb1pXTnJJR2xtSUcxdlpIVnNaU0JwY3lCcGJpQmpZV05vWlZ4dUlGeDBYSFJwWmlocGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFNrZ2UxeHVJRngwWEhSY2RISmxkSFZ5YmlCcGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFM1bGVIQnZjblJ6TzF4dUlGeDBYSFI5WEc0Z1hIUmNkQzh2SUVOeVpXRjBaU0JoSUc1bGR5QnRiMlIxYkdVZ0tHRnVaQ0J3ZFhRZ2FYUWdhVzUwYnlCMGFHVWdZMkZqYUdVcFhHNGdYSFJjZEhaaGNpQnRiMlIxYkdVZ1BTQnBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTQTlJSHRjYmlCY2RGeDBYSFJwT2lCdGIyUjFiR1ZKWkN4Y2JpQmNkRngwWEhSc09pQm1ZV3h6WlN4Y2JpQmNkRngwWEhSbGVIQnZjblJ6T2lCN2ZWeHVJRngwWEhSOU8xeHVYRzRnWEhSY2RDOHZJRVY0WldOMWRHVWdkR2hsSUcxdlpIVnNaU0JtZFc1amRHbHZibHh1SUZ4MFhIUnRiMlIxYkdWelcyMXZaSFZzWlVsa1hTNWpZV3hzS0cxdlpIVnNaUzVsZUhCdmNuUnpMQ0J0YjJSMWJHVXNJRzF2WkhWc1pTNWxlSEJ2Y25SekxDQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLVHRjYmx4dUlGeDBYSFF2THlCR2JHRm5JSFJvWlNCdGIyUjFiR1VnWVhNZ2JHOWhaR1ZrWEc0Z1hIUmNkRzF2WkhWc1pTNXNJRDBnZEhKMVpUdGNibHh1SUZ4MFhIUXZMeUJTWlhSMWNtNGdkR2hsSUdWNGNHOXlkSE1nYjJZZ2RHaGxJRzF2WkhWc1pWeHVJRngwWEhSeVpYUjFjbTRnYlc5a2RXeGxMbVY0Y0c5eWRITTdYRzRnWEhSOVhHNWNibHh1SUZ4MEx5OGdaWGh3YjNObElIUm9aU0J0YjJSMWJHVnpJRzlpYW1WamRDQW9YMTkzWldKd1lXTnJYMjF2WkhWc1pYTmZYeWxjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHViU0E5SUcxdlpIVnNaWE03WEc1Y2JpQmNkQzh2SUdWNGNHOXpaU0IwYUdVZ2JXOWtkV3hsSUdOaFkyaGxYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtTWdQU0JwYm5OMFlXeHNaV1JOYjJSMWJHVnpPMXh1WEc0Z1hIUXZMeUJrWldacGJtVWdaMlYwZEdWeUlHWjFibU4wYVc5dUlHWnZjaUJvWVhKdGIyNTVJR1Y0Y0c5eWRITmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpDQTlJR1oxYm1OMGFXOXVLR1Y0Y0c5eWRITXNJRzVoYldVc0lHZGxkSFJsY2lrZ2UxeHVJRngwWEhScFppZ2hYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV2S0dWNGNHOXlkSE1zSUc1aGJXVXBLU0I3WEc0Z1hIUmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lHNWhiV1VzSUhzZ1pXNTFiV1Z5WVdKc1pUb2dkSEoxWlN3Z1oyVjBPaUJuWlhSMFpYSWdmU2s3WEc0Z1hIUmNkSDFjYmlCY2RIMDdYRzVjYmlCY2RDOHZJR1JsWm1sdVpTQmZYMlZ6VFc5a2RXeGxJRzl1SUdWNGNHOXlkSE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjaUE5SUdaMWJtTjBhVzl1S0dWNGNHOXlkSE1wSUh0Y2JpQmNkRngwYVdZb2RIbHdaVzltSUZONWJXSnZiQ0FoUFQwZ0ozVnVaR1ZtYVc1bFpDY2dKaVlnVTNsdFltOXNMblJ2VTNSeWFXNW5WR0ZuS1NCN1hHNGdYSFJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRk41YldKdmJDNTBiMU4wY21sdVoxUmhaeXdnZXlCMllXeDFaVG9nSjAxdlpIVnNaU2NnZlNrN1hHNGdYSFJjZEgxY2JpQmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lDZGZYMlZ6VFc5a2RXeGxKeXdnZXlCMllXeDFaVG9nZEhKMVpTQjlLVHRjYmlCY2RIMDdYRzVjYmlCY2RDOHZJR055WldGMFpTQmhJR1poYTJVZ2JtRnRaWE53WVdObElHOWlhbVZqZEZ4dUlGeDBMeThnYlc5a1pTQW1JREU2SUhaaGJIVmxJR2x6SUdFZ2JXOWtkV3hsSUdsa0xDQnlaWEYxYVhKbElHbDBYRzRnWEhRdkx5QnRiMlJsSUNZZ01qb2diV1Z5WjJVZ1lXeHNJSEJ5YjNCbGNuUnBaWE1nYjJZZ2RtRnNkV1VnYVc1MGJ5QjBhR1VnYm5OY2JpQmNkQzh2SUcxdlpHVWdKaUEwT2lCeVpYUjFjbTRnZG1Gc2RXVWdkMmhsYmlCaGJISmxZV1I1SUc1eklHOWlhbVZqZEZ4dUlGeDBMeThnYlc5a1pTQW1JRGg4TVRvZ1ltVm9ZWFpsSUd4cGEyVWdjbVZ4ZFdseVpWeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1MElEMGdablZ1WTNScGIyNG9kbUZzZFdVc0lHMXZaR1VwSUh0Y2JpQmNkRngwYVdZb2JXOWtaU0FtSURFcElIWmhiSFZsSUQwZ1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aDJZV3gxWlNrN1hHNGdYSFJjZEdsbUtHMXZaR1VnSmlBNEtTQnlaWFIxY200Z2RtRnNkV1U3WEc0Z1hIUmNkR2xtS0NodGIyUmxJQ1lnTkNrZ0ppWWdkSGx3Wlc5bUlIWmhiSFZsSUQwOVBTQW5iMkpxWldOMEp5QW1KaUIyWVd4MVpTQW1KaUIyWVd4MVpTNWZYMlZ6VFc5a2RXeGxLU0J5WlhSMWNtNGdkbUZzZFdVN1hHNGdYSFJjZEhaaGNpQnVjeUE5SUU5aWFtVmpkQzVqY21WaGRHVW9iblZzYkNrN1hHNGdYSFJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWNpaHVjeWs3WEc0Z1hIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNodWN5d2dKMlJsWm1GMWJIUW5MQ0I3SUdWdWRXMWxjbUZpYkdVNklIUnlkV1VzSUhaaGJIVmxPaUIyWVd4MVpTQjlLVHRjYmlCY2RGeDBhV1lvYlc5a1pTQW1JRElnSmlZZ2RIbHdaVzltSUhaaGJIVmxJQ0U5SUNkemRISnBibWNuS1NCbWIzSW9kbUZ5SUd0bGVTQnBiaUIyWVd4MVpTa2dYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVrS0c1ekxDQnJaWGtzSUdaMWJtTjBhVzl1S0d0bGVTa2dleUJ5WlhSMWNtNGdkbUZzZFdWYmEyVjVYVHNnZlM1aWFXNWtLRzUxYkd3c0lHdGxlU2twTzF4dUlGeDBYSFJ5WlhSMWNtNGdibk03WEc0Z1hIUjlPMXh1WEc0Z1hIUXZMeUJuWlhSRVpXWmhkV3gwUlhod2IzSjBJR1oxYm1OMGFXOXVJR1p2Y2lCamIyMXdZWFJwWW1sc2FYUjVJSGRwZEdnZ2JtOXVMV2hoY20xdmJua2diVzlrZFd4bGMxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dUlEMGdablZ1WTNScGIyNG9iVzlrZFd4bEtTQjdYRzRnWEhSY2RIWmhjaUJuWlhSMFpYSWdQU0J0YjJSMWJHVWdKaVlnYlc5a2RXeGxMbDlmWlhOTmIyUjFiR1VnUDF4dUlGeDBYSFJjZEdaMWJtTjBhVzl1SUdkbGRFUmxabUYxYkhRb0tTQjdJSEpsZEhWeWJpQnRiMlIxYkdWYkoyUmxabUYxYkhRblhUc2dmU0E2WEc0Z1hIUmNkRngwWm5WdVkzUnBiMjRnWjJWMFRXOWtkV3hsUlhod2IzSjBjeWdwSUhzZ2NtVjBkWEp1SUcxdlpIVnNaVHNnZlR0Y2JpQmNkRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1a0tHZGxkSFJsY2l3Z0oyRW5MQ0JuWlhSMFpYSXBPMXh1SUZ4MFhIUnlaWFIxY200Z1oyVjBkR1Z5TzF4dUlGeDBmVHRjYmx4dUlGeDBMeThnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbThnUFNCbWRXNWpkR2x2YmlodlltcGxZM1FzSUhCeWIzQmxjblI1S1NCN0lISmxkSFZ5YmlCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVMbU5oYkd3b2IySnFaV04wTENCd2NtOXdaWEowZVNrN0lIMDdYRzVjYmlCY2RDOHZJRjlmZDJWaWNHRmphMTl3ZFdKc2FXTmZjR0YwYUY5ZlhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5BZ1BTQmNJbHdpTzF4dVhHNWNiaUJjZEM4dklFeHZZV1FnWlc1MGNua2diVzlrZFd4bElHRnVaQ0J5WlhSMWNtNGdaWGh3YjNKMGMxeHVJRngwY21WMGRYSnVJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1eklEMGdNQ2s3WEc0aUxDSmtiMk4xYldWdWRDNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZEVUMDFEYjI1MFpXNTBURzloWkdWa0p5d2dablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNkR2hwYzNSdmNua3VjbVZ3YkdGalpWTjBZWFJsS0c1MWJHd3NJRzUxYkd3c0lDY2dKeWs3WEhKY2JseDBZMjl1YzNRZ2RHRmlVM2RwZEdOb1pYSnpJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNrRnNiQ2duVzJSaGRHRXRjM2RwZEdOb1pYSmRKeWs3WEhKY2JseHlYRzVjZEhSaFlsTjNhWFJqYUdWeWN5NW1iM0pGWVdOb0tDaDBZV0pUZDJsMFkyZ3BJRDArSUh0Y2NseHVYSFJjZEdOdmJuTjBJSFJoWWxOM2FYUmphR1Z5SUQwZ2RHRmlVM2RwZEdOb08xeHlYRzVjZEZ4MFkyOXVjM1FnY0dGblpVbGtJRDBnZEdGaVUzZHBkR05vWlhJdVpHRjBZWE5sZEM1MFlXSTdYSEpjYmx4eVhHNWNkRngwZEdGaVUzZHBkR05vWlhJdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblkyeHBZMnNuTENBb1pTa2dQVDRnZTF4eVhHNWNkRngwWEhSa2IyTjFiV1Z1ZEZ4eVhHNWNkRngwWEhSY2RDNXhkV1Z5ZVZObGJHVmpkRzl5S0NjdVlXUnZjSFJmWDJ4cGMzUXRhWFJsYlM1aFkzUnBkbVVuS1Z4eVhHNWNkRngwWEhSY2RDNWpiR0Z6YzB4cGMzUXVjbVZ0YjNabEtDZGhZM1JwZG1VbktUdGNjbHh1WEhKY2JseDBYSFJjZEhSaFlsTjNhWFJqYUdWeUxuQmhjbVZ1ZEVWc1pXMWxiblF1Y0dGeVpXNTBSV3hsYldWdWRDNWpiR0Z6YzB4cGMzUXVZV1JrS0NkaFkzUnBkbVVuS1R0Y2NseHVYSEpjYmx4MFhIUmNkSE4zYVhSamFGQmhaMlVvY0dGblpVbGtLVHRjY2x4dVhIUmNkSDBwTzF4eVhHNWNkSDBwTzF4eVhHNWNjbHh1WEhSbWRXNWpkR2x2YmlCemQybDBZMmhRWVdkbEtIQmhaMlZKWkNrZ2UxeHlYRzVjZEZ4MFkyOXVjM1FnWTNWeWNtVnVkRkJoWjJVZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0NjdWNHRm5aUzVoWTNScGRtVW5LVHRjY2x4dVhIUmNkR052Ym5OMElHTjFjbkpsYm5SUVlXZGxTR1ZoWkdWeUlEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkxuQmhaMlV0YUdWaFpHVnlMbUZqZEdsMlpTY3BPMXh5WEc1Y2NseHVYSFJjZEdOMWNuSmxiblJRWVdkbExtTnNZWE56VEdsemRDNXlaVzF2ZG1Vb0oyRmpkR2wyWlNjcE8xeHlYRzVjZEZ4MFkzVnljbVZ1ZEZCaFoyVklaV0ZrWlhJdVkyeGhjM05NYVhOMExuSmxiVzkyWlNnbllXTjBhWFpsSnlrN1hISmNibHh5WEc1Y2RGeDBZMjl1YzNRZ2JtVjRkRkJoWjJVZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0dBdWNHRm5aVnRrWVhSaExYQmhaMlU5WENJa2UzQmhaMlZKWkgxY0lsMWdLVHRjY2x4dVhIUmNkR052Ym5OMElHNWxlSFJRWVdkbFNHVmhaR1Z5SUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWhjY2x4dVhIUmNkRngwWUM1d1lXZGxMV2hsWVdSbGNsdGtZWFJoTFdobFlXUmxjajFjSWlSN2NHRm5aVWxrZlZ3aVhXQmNjbHh1WEhSY2RDazdYSEpjYmx4MFhIUnVaWGgwVUdGblpTNWpiR0Z6YzB4cGMzUXVZV1JrS0NkaFkzUnBkbVVuS1R0Y2NseHVYSFJjZEc1bGVIUlFZV2RsU0dWaFpHVnlMbU5zWVhOelRHbHpkQzVoWkdRb0oyRmpkR2wyWlNjcE8xeHlYRzVjZEgxY2NseHVmU2s3WEhKY2JpSXNJbVJ2WTNWdFpXNTBMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMFJQVFVOdmJuUmxiblJNYjJGa1pXUW5MQ0JtZFc1amRHbHZiaUFvS1NCN1hISmNibHgwWTI5dWMzUWdZVzVwYldGc2MxVnliQ0E5SUNjdUxpOXFjeTloYm1sdFlXeHpMbXB6YjI0bk8xeHlYRzVjZEdOdmJuTjBJR0Z1YVcxaGJITlFZV2RsY3lBOUlHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0NkaGJtbHRZV3h6TFhCaFoyVnpKeWs3WEhKY2JseDBZMjl1YzNRZ1pHOW5jMEp2ZUNBOUlHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0Nka2IyZHpMV0p2ZUNjcE8xeHlYRzVjZEdOdmJuTjBJR05oZEhOQ2IzZ2dQU0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDZ25ZMkYwY3kxaWIzZ25LVHRjY2x4dVhISmNibHgwWm5WdVkzUnBiMjRnWjJWMFFXNXBiV0ZzYzBSaGRHRW9LU0I3WEhKY2JseDBYSFJ5WlhSMWNtNGdibVYzSUZCeWIyMXBjMlVvS0hKbGMyOXNkbVVzSUhKbGFtVmpkQ2tnUFQ0Z2UxeHlYRzVjZEZ4MFhIUm1aWFJqYUNoaGJtbHRZV3h6VlhKc0tWeHlYRzVjZEZ4MFhIUmNkQzUwYUdWdUtDaHlaWE53S1NBOVBpQjdYSEpjYmx4MFhIUmNkRngwWEhScFppQW9JWEpsYzNBdWIyc3BJSHRjY2x4dVhIUmNkRngwWEhSY2RGeDBkR2h5YjNjZ1JYSnliM0lvWUNSN2NtVnpjQzV6ZEdGMGRYTlVaWGgwZlNBdElDUjdjbVZ6Y0M1MWNteDlZQ2s3WEhKY2JseDBYSFJjZEZ4MFhIUjlYSEpjYmx4MFhIUmNkRngwWEhSeVpYUjFjbTRnY21WemNDNXFjMjl1S0NrN1hISmNibHgwWEhSY2RGeDBmU2xjY2x4dVhIUmNkRngwWEhRdWRHaGxiaWdvWkdGMFlTa2dQVDRnY21WemIyeDJaU2hrWVhSaEtTbGNjbHh1WEhSY2RGeDBYSFF1WTJGMFkyZ29LR1Z5Y2lrZ1BUNGdjbVZxWldOMEtHVnljaWtwTzF4eVhHNWNkRngwZlNrN1hISmNibHgwZlZ4eVhHNWNjbHh1WEhSamIyNXpkQ0JrYjJkT2RXMWlaWElnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2duWkc5blRuVnRZbVZ5SnlrN1hISmNibHgwWTI5dWMzUWdZMkYwVG5WdFltVnlJRDBnWkc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEVKNVNXUW9KMk5oZEU1MWJXSmxjaWNwTzF4eVhHNWNjbHh1WEhSaGMzbHVZeUJtZFc1amRHbHZiaUJrYVhOd2JHRjVRVzVwYldGc1RuVnRZbVZ5Y3lncElIdGNjbHh1WEhSY2RHTnZibk4wSUdSaGRHRk1hWE4wSUQwZ1lYZGhhWFFnWjJWMFFXNXBiV0ZzYzBSaGRHRW9LVHRjY2x4dVhIUmNkR052Ym5OMElHRnVhVzFoYkhOQmNuSmhlU0E5SUdSaGRHRk1hWE4wTG1GdWFXMWhiSE03WEhKY2JseHlYRzVjZEZ4MGJHVjBJR1J2WjNOQmNuSmhlVTUxYldKbGNpQTlJR0Z1YVcxaGJITkJjbkpoZVZzd1hTNWtiMmR6TG14bGJtZDBhRHRjY2x4dVhIUmNkR3hsZENCallYUnpRWEp5WVhsT2RXMWlaWElnUFNCaGJtbHRZV3h6UVhKeVlYbGJNRjB1WTJGMGN5NXNaVzVuZEdnN1hISmNibHh5WEc1Y2RGeDBaRzluVG5WdFltVnlMbWx1Ym1WeVZHVjRkQ0E5SUdSdlozTkJjbkpoZVU1MWJXSmxjanRjY2x4dVhIUmNkR05oZEU1MWJXSmxjaTVwYm01bGNsUmxlSFFnUFNCallYUnpRWEp5WVhsT2RXMWlaWEk3WEhKY2JseDBmVnh5WEc1Y2NseHVYSFJwWmlBb0tHUnZaMDUxYldKbGNpd2dZMkYwVG5WdFltVnlLU2tnZTF4eVhHNWNkRngwS0daMWJtTjBhVzl1SUNncElIdGNjbHh1WEhSY2RGeDBaR2x6Y0d4aGVVRnVhVzFoYkU1MWJXSmxjbk1vS1R0Y2NseHVYSFJjZEgwcEtDazdYSEpjYmx4MGZWeHlYRzVjY2x4dVhIUmhjM2x1WXlCbWRXNWpkR2x2YmlCa2FYTndiR0Y1UVc1cGJXRnNjeWdwSUh0Y2NseHVYSFJjZEdOdmJuTjBJR1JoZEdGTWFYTjBJRDBnWVhkaGFYUWdaMlYwUVc1cGJXRnNjMFJoZEdFb0tUdGNjbHh1WEhSY2RHTnZibk4wSUdGdWFXMWhiSE5CY25KaGVTQTlJR1JoZEdGTWFYTjBMbUZ1YVcxaGJITTdYSEpjYmx4eVhHNWNkRngwWVc1cGJXRnNjMEZ5Y21GNUxtWnZja1ZoWTJnb0tHRnVhVzFoYkNrZ1BUNGdlMXh5WEc1Y2RGeDBYSFJrYjJkelFYSnlZWGtnUFNCaGJtbHRZV3d1Wkc5bmN6dGNjbHh1WEhSY2RGeDBZMkYwYzBGeWNtRjVJRDBnWVc1cGJXRnNMbU5oZEhNN1hISmNibHh5WEc1Y2RGeDBYSFJrYjJkelFYSnlZWGt1Wm05eVJXRmphQ2dvWkc5bktTQTlQaUI3WEhKY2JseDBYSFJjZEZ4MFkyOXVjM1FnZTF4eVhHNWNkRngwWEhSY2RGeDBiblZ0WW1WeUxGeHlYRzVjZEZ4MFhIUmNkRngwYzNCbFkybGxjeXhjY2x4dVhIUmNkRngwWEhSY2RHSnlaV1ZrTEZ4eVhHNWNkRngwWEhSY2RGeDBZMjlzYjNJc1hISmNibHgwWEhSY2RGeDBYSFIzWldsbmFIUXNYSEpjYmx4MFhIUmNkRngwWEhSb1pXbG5hSFFzWEhKY2JseDBYSFJjZEZ4MFhIUmpiMkYwTEZ4eVhHNWNkRngwWEhSY2RGeDBZbWx5ZEdnc1hISmNibHgwWEhSY2RGeDBYSFJ1WVcxbExGeHlYRzVjZEZ4MFhIUmNkRngwWjJWdVpHVnlMRnh5WEc1Y2RGeDBYSFJjZEZ4MGFXMWhaMlVzWEhKY2JseDBYSFJjZEZ4MFhIUmtaWE5qTEZ4eVhHNWNkRngwWEhSY2RGeDBZV1J2Y0hSbFpDeGNjbHh1WEhSY2RGeDBYSFI5SUQwZ1pHOW5PMXh5WEc1Y2NseHVYSFJjZEZ4MFhIUmtiMmRDYjNnZ1BTQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0Nka2FYWW5LVHRjY2x4dVhIUmNkRngwWEhSa2IyZENiM2d1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25jR0ZuWlY5ZlltOTRKeWs3WEhKY2JseDBYSFJjZEZ4MFlXUnZjSFJsWkNBOVBUMGdKM2xsY3ljZ1B5QmtiMmRDYjNndVkyeGhjM05NYVhOMExtRmtaQ2duWVdSdmNIUmxaQ2NwSURvZ0p5YzdYSEpjYmx4eVhHNWNkRngwWEhSY2RHTnZibk4wSUdSdloxbGxZWEp6SUQwZ1ltbHlkR2c3WEhKY2JseHlYRzVjZEZ4MFhIUmNkR052Ym5OMElHMXBiR2x6WldOelFtVjBkMlZsYmtSUFFtRnVaREU1TnpBZ1BTQkVZWFJsTG5CaGNuTmxLR1J2WjFsbFlYSnpLVHRjY2x4dVhIUmNkRngwWEhSamIyNXpkQ0J0YVd4cGMyVmpjMEpsZEhkbFpXNU9UMWRoYm1ReE9UY3dJRDBnUkdGMFpTNXViM2NvS1R0Y2NseHVYSFJjZEZ4MFhIUmpiMjV6ZENCaFoyVkpiazFwYkdselpXTnpJRDFjY2x4dVhIUmNkRngwWEhSY2RHMXBiR2x6WldOelFtVjBkMlZsYms1UFYyRnVaREU1TnpBZ0xTQnRhV3hwYzJWamMwSmxkSGRsWlc1RVQwSmhibVF4T1Rjd08xeHlYRzVjY2x4dVhIUmNkRngwWEhSamIyNXpkQ0J0YVd4cGMyVmpjeUE5SUdGblpVbHVUV2xzYVhObFkzTTdYSEpjYmx4MFhIUmNkRngwWTI5dWMzUWdjMlZqY3lBOUlERXdNREE3WEhKY2JseDBYSFJjZEZ4MFkyOXVjM1FnYldsdWN5QTlJSE5sWTNNZ0tpQTJNRHRjY2x4dVhIUmNkRngwWEhSamIyNXpkQ0JvYjNWeUlEMGdiV2x1Y3lBcUlEWXdPMXh5WEc1Y2RGeDBYSFJjZEdOdmJuTjBJR1JoZVNBOUlHaHZkWElnS2lBeU5EdGNjbHh1WEhSY2RGeDBYSFJqYjI1emRDQjVaV0Z5SUQwZ1pHRjVJQ29nTXpZMU8xeHlYRzVjY2x4dVhIUmNkRngwWEhSc1pYUWdlV1ZoY25NZ1BTQk5ZWFJvTG5KdmRXNWtLRzFwYkdselpXTnpJQzhnZVdWaGNpazdYSEpjYmx4eVhHNWNkRngwWEhSY2RHUnZaMEp2ZUM1cGJtNWxja2hVVFV3Z1BTQmdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhrYVhZZ1kyeGhjM005WENKd1lXZGxYMTlpYjNndGRHOXdYQ0krWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThhVzFuSUhOeVl6MWNJaTRrZTJsdFlXZGxmVndpSUdGc2REMWNJaVI3Ym1GdFpYMGdKSHR6Y0dWamFXVnpmVndpZlM4K1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEd3ZaR2wyUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOFpHbDJJR05zWVhOelBWd2ljR0ZuWlY5ZlltOTRMV0p2ZEhSdmJWd2lQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHZ3pJR05zWVhOelBWd2ljR0ZuWlY5ZlltOTRMWFJwZEd4bFhDSStKSHR1WVcxbGZTUjdYSEpjYmx4MFhIUmNkRngwWEhSaFpHOXdkR1ZrSUQwOVBTQW5lV1Z6SnlBL0lHQWdMU0E4YzNCaGJqNWhaRzl3ZEdWa1BDOXpjR0Z1UG1BZ09pQW5KMXh5WEc1Y2RGeDBYSFJjZEgwOEwyZ3pQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHUnBkaUJqYkdGemN6MWNJbkJoWjJWZlgySnZlQzFqYjI1MFpXNTBYQ0krWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdScGRpQmpiR0Z6Y3oxY0ltVjRjR0Z1WkUxdmNtVkRiMjUwWlc1MFhDSWdhV1E5WENKemFHOTNUVzl5WlMwa2UzTndaV05wWlhOOUpIdHVkVzFpWlhKOVhDSStYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4d0lHTnNZWE56UFZ3aWNHRm5aVjlmWW05NExYUmxlSFJjSWo1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNSN1pHVnpZMzFjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOXdQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2WkdsMlBseHlYRzRnSUNBZ1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHUnBkaUJqYkdGemN6MWNJbVY0Y0dGdVpFMXZjbVZJYjJ4a1pYSmNJajVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHSjFkSFJ2Ymx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWlhod1lXNWtMVzF2Y21WY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdSaGRHRXRhR2xrWlhSbGVIUTlYQ0l1TGk1U1pXRmtJR3hsYzNOY0lseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pHRjBZUzF6YUc5M2RHVjRkRDFjSWk0dUxsSmxZV1FnYlc5eVpWd2lYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmtZWFJoTFhSaGNtZGxkRDFjSW5Ob2IzZE5iM0psTFNSN2MzQmxZMmxsYzMwa2UyNTFiV0psY24xY0lseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyeGhjM005WENKaWRYUjBiMjRnYzJodmQwMXZjbVZjSWx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQStYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXVMaTVTWldGa0lHMXZjbVZjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOWlkWFIwYjI0K1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOWthWFkrWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThMMlJwZGo1Y2NseHVJQ0FnSUZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQSFZzSUdOc1lYTnpQVndpY0dGblpWOWZZbTk0TFdsamIyNXpYQ0krWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEd4cElHTnNZWE56UFZ3aWNHRm5aVjlmWW05NExXbGpiMjVjSWo1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR2tnWTJ4aGMzTTlYQ0ptWVhNZ1ptRXRkMlZwWjJoMFhDSStQQzlwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lENDhjM0JoYmlCamJHRnpjejFjSW5CaFoyVmZYMkp2ZUMxcFkyOXVMUzEwWlhoMFhDSStKSHQzWldsbmFIUjlJR3RuUEM5emNHRnVQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2YkdrK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHeHBJR05zWVhOelBWd2ljR0ZuWlY5ZlltOTRMV2xqYjI1Y0lqNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdrZ1kyeGhjM005WENKbVlYTWdabUV0WVhKeWIzZHpMV0ZzZEMxMlhDSStQQzlwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lENDhjM0JoYmlCamJHRnpjejFjSW5CaFoyVmZYMkp2ZUMxcFkyOXVMUzEwWlhoMFhDSStKSHRvWldsbmFIUjlJR050UEM5emNHRnVQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2YkdrK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHeHBJR05zWVhOelBWd2ljR0ZuWlY5ZlltOTRMV2xqYjI1Y0lqNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdrZ1kyeGhjM005WENKbVlYTWdabUV0WTJGc1pXNWtZWEl0WTJobFkydGNJajQ4TDJsY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQanh6Y0dGdUlHTnNZWE56UFZ3aWNHRm5aVjlmWW05NExXbGpiMjR0TFhSbGVIUmNJajRrZTNsbFlYSnpmU0I1Y2k0OEwzTndZVzQrWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5c2FUNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThiR2tnWTJ4aGMzTTlYQ0p3WVdkbFgxOWliM2d0YVdOdmJsd2lQbHh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhROGFTQmpiR0Z6Y3oxY0ltWmhjeUJtWVMxd1lXeGxkSFJsWENJK1BDOXBYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEQ0OGMzQmhiaUJqYkdGemN6MWNJbkJoWjJWZlgySnZlQzFwWTI5dUxTMTBaWGgwWENJK0pIdGpiMnh2Y2xzd1hTQS9JR052Ykc5eVd6QmRJRG9nSnkwbmZUd3ZjM0JoYmo1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOEwyeHBQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhzYVNCamJHRnpjejFjSW5CaFoyVmZYMkp2ZUMxcFkyOXVYQ0krWEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwWEhSY2REeHBJR05zWVhOelBWd2labUZ6SUdaaExYQmhiR1YwZEdWY0lqNDhMMmxjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFBqeHpjR0Z1SUdOc1lYTnpQVndpY0dGblpWOWZZbTk0TFdsamIyNHRMWFJsZUhSY0lqNGtlMk52Ykc5eVd6RmRJRDhnWTI5c2IzSmJNVjBnT2lBbkxTZDlQQzl6Y0dGdVBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEd3ZiR2srWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEd4cElHTnNZWE56UFZ3aWNHRm5aVjlmWW05NExXbGpiMjVjSWo1Y2NseHVYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBQR2tnWTJ4aGMzTTlYQ0ptWVhNZ1ptRXRjR0ZzWlhSMFpWd2lQand2YVZ4eVhHNWNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUStQSE53WVc0Z1kyeGhjM005WENKd1lXZGxYMTlpYjNndGFXTnZiaTB0ZEdWNGRGd2lQaVI3WTI5c2IzSmJNbDBnUHlCamIyeHZjbHN5WFNBNklDY3RKMzA4TDNOd1lXNCtYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBYSFE4TDJ4cFBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHNhU0JqYkdGemN6MWNJbkJoWjJWZlgySnZlQzFwWTI5dVhDSStYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4cElHTnNZWE56UFZ3aVptRnpJR1poTFhCaGQxd2lQand2YVZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQStQSE53WVc0Z1kyeGhjM005WENKd1lXZGxYMTlpYjNndGFXTnZiaTB0ZEdWNGRGd2lQaVI3WTI5aGRIMDhMM053WVc0K1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOXNhVDVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YkdrZ1kyeGhjM005WENKd1lXZGxYMTlpYjNndGFXTnZibHdpUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThhU0JqYkdGemN6MWNJbVpoY3lCbVlTMTJaVzUxY3kxdFlYSnpYQ0krUEM5cFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRDQ4YzNCaGJpQmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMXBZMjl1TFMxMFpYaDBYQ0krSkh0blpXNWtaWEo5UEM5emNHRnVQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2YkdrK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4TDNWc1BseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThMMlJwZGo1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHQTdYSEpjYmx4eVhHNWNkRngwWEhSY2RHUnZaM05DYjNndVlYQndaVzVrUTJocGJHUW9aRzluUW05NEtUdGNjbHh1WEhSY2RGeDBmU2s3WEhKY2JseHlYRzVjZEZ4MFhIUmpZWFJ6UVhKeVlYa3VabTl5UldGamFDZ29ZMkYwS1NBOVBpQjdYSEpjYmx4MFhIUmNkRngwWTJGMFFtOTRJRDBnWkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDZ25aR2wySnlrN1hISmNibHgwWEhSY2RGeDBZMkYwUW05NExtTnNZWE56VEdsemRDNWhaR1FvSjNCaFoyVmZYMkp2ZUNjcE8xeHlYRzVjY2x4dVhIUmNkRngwWEhSamIyNXpkQ0JqWVhSWlpXRnljeUE5SUdOaGRDNWlhWEowYUR0Y2NseHVYSEpjYmx4MFhIUmNkRngwWTI5dWMzUWdiV2xzYVhObFkzTkNaWFIzWldWdVJFOUNZVzVrTVRrM01HTmhkQ0E5SUVSaGRHVXVjR0Z5YzJVb1kyRjBXV1ZoY25NcE8xeHlYRzVjZEZ4MFhIUmNkR052Ym5OMElHMXBiR2x6WldOelFtVjBkMlZsYms1UFYyRnVaREU1TnpBZ1BTQkVZWFJsTG01dmR5Z3BPMXh5WEc1Y2NseHVYSFJjZEZ4MFhIUmpiMjV6ZENCaFoyVkpiazFwYkdselpXTnpRMkYwSUQxY2NseHVYSFJjZEZ4MFhIUmNkRzFwYkdselpXTnpRbVYwZDJWbGJrNVBWMkZ1WkRFNU56QWdMU0J0YVd4cGMyVmpjMEpsZEhkbFpXNUVUMEpoYm1ReE9UY3dZMkYwTzF4eVhHNWNjbHh1WEhSY2RGeDBYSFJqYjI1emRDQnRhV3hwYzJWamMwTmhkQ0E5SUdGblpVbHVUV2xzYVhObFkzTkRZWFE3WEhKY2JseDBYSFJjZEZ4MFkyOXVjM1FnYzJWamN5QTlJREV3TURBN1hISmNibHgwWEhSY2RGeDBZMjl1YzNRZ2JXbHVjeUE5SUhObFkzTWdLaUEyTUR0Y2NseHVYSFJjZEZ4MFhIUmpiMjV6ZENCb2IzVnlJRDBnYldsdWN5QXFJRFl3TzF4eVhHNWNkRngwWEhSY2RHTnZibk4wSUdSaGVTQTlJR2h2ZFhJZ0tpQXlORHRjY2x4dVhIUmNkRngwWEhSamIyNXpkQ0I1WldGeUlEMGdaR0Y1SUNvZ016WTFPMXh5WEc1Y2NseHVYSFJjZEZ4MFhIUnNaWFFnZVdWaGNuTkRZWFFnUFNCTllYUm9Mbkp2ZFc1a0tHMXBiR2x6WldOelEyRjBJQzhnZVdWaGNpazdYSEpjYmx4eVhHNWNkRngwWEhSY2RHTmhkRUp2ZUM1cGJtNWxja2hVVFV3Z1BTQmdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhrYVhZZ1kyeGhjM005WENKd1lXZGxYMTlpYjNndGRHOXdYQ0krWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThhVzFuSUhOeVl6MWNJaTRrZTJOaGRDNXBiV0ZuWlgxY0lpQmhiSFE5WENJa2UyTmhkQzV1WVcxbGZTQWtlMXh5WEc1Y2RGeDBYSFJjZEZ4MFkyRjBMbk53WldOcFpYTmNjbHh1WEhSY2RGeDBYSFI5WENKOUx6NWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzlrYVhZK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeGthWFlnWTJ4aGMzTTlYQ0p3WVdkbFgxOWliM2d0WW05MGRHOXRYQ0krWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThhRE1nWTJ4aGMzTTlYQ0p3WVdkbFgxOWliM2d0ZEdsMGJHVmNJajRrZTJOaGRDNXVZVzFsZlR3dmFETStYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOFpHbDJJR05zWVhOelBWd2ljR0ZuWlY5ZlltOTRMV052Ym5SbGJuUmNJajVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4WkdsMklHTnNZWE56UFZ3aVpYaHdZVzVrVFc5eVpVTnZiblJsYm5SY0lpQnBaRDFjSW5Ob2IzZE5iM0psTFNSN1hISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmpZWFF1YzNCbFkybGxjMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkSDBrZTJOaGRDNXVkVzFpWlhKOVhDSStYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4d0lHTnNZWE56UFZ3aWNHRm5aVjlmWW05NExYUmxlSFJjSWo1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNSN1kyRjBMbVJsYzJOOVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2Y0Q1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOEwyUnBkajVjY2x4dUlDQWdJRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhrYVhZZ1kyeGhjM005WENKbGVIQmhibVJOYjNKbFNHOXNaR1Z5WENJK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhpZFhSMGIyNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHVjRjR0Z1WkMxdGIzSmxYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmtZWFJoTFdocFpHVjBaWGgwUFZ3aUxpNHVVbVZoWkNCc1pYTnpYQ0pjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1JoZEdFdGMyaHZkM1JsZUhROVhDSXVMaTVTWldGa0lHMXZjbVZjSWx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWkdGMFlTMTBZWEpuWlhROVhDSnphRzkzVFc5eVpTMGtlMk5oZEM1emNHVmphV1Z6ZlNSN1hISmNibHgwWEhSY2RGeDBYSFJqWVhRdWJuVnRZbVZ5WEhKY2JseDBYSFJjZEZ4MGZWd2lYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiR0Z6Y3oxY0ltSjFkSFJ2YmlCemFHOTNUVzl5WlZ3aVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRDVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzR1TGxKbFlXUWdiVzl5WlZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThMMkoxZEhSdmJqNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThMMlJwZGo1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2WkdsMlBseHlYRzRnSUNBZ1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4ZFd3Z1kyeGhjM005WENKd1lXZGxYMTlpYjNndGFXTnZibk5jSWo1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGJHa2dZMnhoYzNNOVhDSndZV2RsWDE5aWIzZ3RhV052Ymx3aVBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YVNCamJHRnpjejFjSW1aaGN5Qm1ZUzEzWldsbmFIUmNJajQ4TDJsY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQanh6Y0dGdUlHTnNZWE56UFZ3aWNHRm5aVjlmWW05NExXbGpiMjR0TFhSbGVIUmNJajRrZTF4eVhHNWNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkR05oZEM1M1pXbG5hSFJjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MGZTQnJaend2YzNCaGJqNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThMMnhwUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4c2FTQmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMXBZMjl1WENJK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhwSUdOc1lYTnpQVndpWm1GeklHWmhMV0Z5Y205M2N5MWhiSFF0ZGx3aVBqd3ZhVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBK1BITndZVzRnWTJ4aGMzTTlYQ0p3WVdkbFgxOWliM2d0YVdOdmJpMHRkR1Y0ZEZ3aVBpUjdYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFkyRjBMbWhsYVdkb2RGeHlYRzVjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFI5WTIwOEwzTndZVzQrWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5c2FUNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThiR2tnWTJ4aGMzTTlYQ0p3WVdkbFgxOWliM2d0YVdOdmJsd2lQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGFTQmpiR0Z6Y3oxY0ltWmhjeUJtWVMxallXeGxibVJoY2kxamFHVmphMXdpUGp3dmFWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0ErUEhOd1lXNGdZMnhoYzNNOVhDSndZV2RsWDE5aWIzZ3RhV052YmkwdGRHVjRkRndpUGlSN2VXVmhjbk5EWVhSOUlIbHlMand2YzNCaGJqNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThMMnhwUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4c2FTQmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMXBZMjl1WENJK1hISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRHhwSUdOc1lYTnpQVndpWm1GeklHWmhMWEJoYkdWMGRHVmNJajQ4TDJsY2NseHVYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBQanh6Y0dGdUlHTnNZWE56UFZ3aWNHRm5aVjlmWW05NExXbGpiMjR0TFhSbGVIUmNJajRrZTJOaGRDNWpiMnh2Y2xzd1hTQS9JR05oZEM1amIyeHZjbHN3WFNBNklDY3RKMzA4TDNOd1lXNCtYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzlzYVQ1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGJHa2dZMnhoYzNNOVhDSndZV2RsWDE5aWIzZ3RhV052Ymx3aVBseHlYRzVjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFE4YVNCamJHRnpjejFjSW1aaGN5Qm1ZUzF3WVd4bGRIUmxYQ0krUEM5cFhISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRDQ4YzNCaGJpQmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMXBZMjl1TFMxMFpYaDBYQ0krSkh0allYUXVZMjlzYjNKYk1WMGdQeUJqWVhRdVkyOXNiM0piTVYwZ09pQW5MU2Q5UEM5emNHRnVQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2YkdrK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHeHBJR05zWVhOelBWd2ljR0ZuWlY5ZlltOTRMV2xqYjI1Y0lqNWNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwUEdrZ1kyeGhjM005WENKbVlYTWdabUV0Y0dGc1pYUjBaVndpUGp3dmFWeHlYRzVjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFErUEhOd1lXNGdZMnhoYzNNOVhDSndZV2RsWDE5aWIzZ3RhV052YmkwdGRHVjRkRndpUGlSN1kyRjBMbU52Ykc5eVd6SmRJRDhnWTJGMExtTnZiRzl5V3pKZElEb2dKeTBuZlR3dmMzQmhiajVjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFJjZER3dmJHaytYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR3hwSUdOc1lYTnpQVndpY0dGblpWOWZZbTk0TFdsamIyNWNJajVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHa2dZMnhoYzNNOVhDSm1ZWE1nWm1FdGNHRjNYQ0krUEM5cFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRDQ4YzNCaGJpQmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMXBZMjl1TFMxMFpYaDBYQ0krSkh0Y2NseHVYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJqWVhRdVkyOWhkRnh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSOVBDOXpjR0Z1UGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dmJHaytYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR3hwSUdOc1lYTnpQVndpY0dGblpWOWZZbTk0TFdsamIyNWNJajVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHa2dZMnhoYzNNOVhDSm1ZWE1nWm1FdGRtVnVkWE10YldGeWMxd2lQand2YVZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQStQSE53WVc0Z1kyeGhjM005WENKd1lXZGxYMTlpYjNndGFXTnZiaTB0ZEdWNGRGd2lQaVI3WEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBZMkYwTG1kbGJtUmxjbHh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSOVBDOXpjR0Z1UGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dmJHaytYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOEwzVnNQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4TDJScGRqNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0E3WEhKY2JseHlYRzVjZEZ4MFhIUmNkR05oZEhOQ2IzZ3VZWEJ3Wlc1a1EyaHBiR1FvWTJGMFFtOTRLVHRjY2x4dVhIUmNkRngwZlNrN1hISmNibHgwWEhSOUtUdGNjbHh1WEhKY2JseDBYSFJzWlhRZ1pHOW5RbTk0UVhKeVlYa2dQU0JiTGk0dVpHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZja0ZzYkNnbkkyUnZaM010WW05NElDNXdZV2RsWDE5aWIzZ25LVjA3WEhKY2JseDBYSFJzWlhRZ1kyRjBRbTk0UVhKeVlYa2dQU0JiTGk0dVpHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZja0ZzYkNnbkkyTmhkSE10WW05NElDNXdZV2RsWDE5aWIzZ25LVjA3WEhKY2JseDBYSFJzWlhRZ1kzVnljbVZ1ZEZCaFoyVWdQU0F4TzF4eVhHNWNkRngwYkdWMElHVnNaVzFsYm5SelQyNVFZV2RsSUQwZ05EdGNjbHh1WEhKY2JseDBYSFJqYjI1emRDQndZV2RwYm1GMGFXOXVSV3hFYjJkeklEMGdaRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkRUo1U1dRb0oyUnZaM010Y0dGbmFXNWhkR2x2YmljcE8xeHlYRzVjZEZ4MFkyOXVjM1FnY0dGbmFXNWhkR2x2YmtWc1EyRjBjeUE5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2RqWVhSekxYQmhaMmx1WVhScGIyNG5LVHRjY2x4dVhISmNibHgwWEhSbWRXNWpkR2x2YmlCa2FYTndiR0Y1VUdGbmFXNWhkR1ZrU1hSbGJYTW9hWFJsYlhNc0lIZHlZWEJ3WlhJc0lHbDBaVzF6VUdWeVVHRm5aU3dnY0dGblpTa2dlMXh5WEc1Y2RGeDBYSFIzY21Gd2NHVnlMbWx1Ym1WeVNGUk5UQ0E5SUNjbk8xeHlYRzVjZEZ4MFhIUndZV2RsTFMwN1hISmNibHh5WEc1Y2RGeDBYSFJzWlhRZ2MzUmhjblFnUFNCcGRHVnRjMUJsY2xCaFoyVWdLaUJ3WVdkbE8xeHlYRzVjZEZ4MFhIUnNaWFFnWlc1a0lEMGdjM1JoY25RZ0t5QnBkR1Z0YzFCbGNsQmhaMlU3WEhKY2JseDBYSFJjZEd4bGRDQndZV2RwYm1GMFpXUkpkR1Z0Y3lBOUlHbDBaVzF6TG5Oc2FXTmxLSE4wWVhKMExDQmxibVFwTzF4eVhHNWNjbHh1WEhSY2RGeDBjR0ZuYVc1aGRHVmtTWFJsYlhNdVptOXlSV0ZqYUNnb2FYUmxiU2tnUFQ0Z2UxeHlYRzVjZEZ4MFhIUmNkR3hsZENCcGRHVnRSV3dnUFNCa2IyTjFiV1Z1ZEM1amNtVmhkR1ZGYkdWdFpXNTBLQ2RrYVhZbktUdGNjbHh1WEhSY2RGeDBYSFJwZEdWdFJXd3VZMnhoYzNOTWFYTjBMbUZrWkNnbmNHRm5aVjlmWW05NEp5azdYSEpjYmx4eVhHNWNkRngwWEhSY2RHbDBaVzFGYkNBOUlHbDBaVzA3WEhKY2JseHlYRzVjZEZ4MFhIUmNkSGR5WVhCd1pYSXVZWEJ3Wlc1a1EyaHBiR1FvYVhSbGJVVnNLVHRjY2x4dVhIUmNkRngwZlNrN1hISmNibHgwWEhSOVhISmNibHh5WEc1Y2RGeDBablZ1WTNScGIyNGdaR2x6Y0d4aGVWQmhaMmx1WVhScGIyNG9hWFJsYlhNc0lIZHlZWEJ3WlhJc0lHbDBaVzF6VUdWeVVHRm5aU2tnZTF4eVhHNWNkRngwWEhSM2NtRndjR1Z5TG1sdWJtVnlTRlJOVENBOUlDY25PMXh5WEc1Y2NseHVYSFJjZEZ4MGJHVjBJSEJoWjJWRGIzVnVkQ0E5SUUxaGRHZ3VZMlZwYkNocGRHVnRjeTVzWlc1bmRHZ2dMeUJwZEdWdGMxQmxjbEJoWjJVcE8xeHlYRzVjY2x4dVhIUmNkRngwWm05eUlDaHNaWFFnYVNBOUlERTdJR2tnUENCd1lXZGxRMjkxYm5RZ0t5QXhPeUJwS3lzcElIdGNjbHh1WEhSY2RGeDBYSFJzWlhRZ1luUnVJRDBnY0dGbmFXNWhkR2x2YmtKMWRIUnZiaWhwTENCd1lXZGxRMjkxYm5RcE8xeHlYRzVjY2x4dVhIUmNkRngwWEhSaWRHNHVjM1I1YkdVdWQybGtkR2dnUFNBbk1DYzdYSEpjYmx4MFhIUmNkRngwWW5SdUxuTjBlV3hsTG05MlpYSm1iRzkzSUQwZ0oyaHBaR1JsYmljN1hISmNibHgwWEhSY2RGeDBZblJ1TG5OMGVXeGxMbTFoY21kcGJpQTlJQ2N3Snp0Y2NseHVYSEpjYmx4MFhIUmNkRngwZDNKaGNIQmxjaTVoY0hCbGJtUkRhR2xzWkNoaWRHNHBPMXh5WEc1Y2RGeDBYSFI5WEhKY2JseHlYRzVjZEZ4MFhIUnNaWFFnYm1WNGRFSjBiaUE5SUc1bGVIUlFZV2RsS0hCaFoyVkRiM1Z1ZENrN1hISmNibHgwWEhSY2RIZHlZWEJ3WlhJdVlYQndaVzVrUTJocGJHUW9ibVY0ZEVKMGJpazdYSEpjYmx4eVhHNWNkRngwWEhSc1pYUWdjSEpsZGtKMGJpQTlJSEJ5WlhaUVlXZGxLSEJoWjJWRGIzVnVkQ2s3WEhKY2JseDBYSFJjZEhkeVlYQndaWEl1Y0hKbGNHVnVaQ2h3Y21WMlFuUnVLVHRjY2x4dVhISmNibHgwWEhSY2RHeGxkQ0JqZFhKeVpXNTBRblJ1Ukc5bmN5QTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb1hISmNibHgwWEhSY2RGeDBKeU5rYjJkeklDNXdZV2RwYm1GMGFXOXVMV0owYmk1aFkzUnBkbVVuWEhKY2JseDBYSFJjZENrN1hISmNibHgwWEhSY2RHeGxkQ0JqZFhKeVpXNTBRblJ1UTJGMGN5QTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb1hISmNibHgwWEhSY2RGeDBKeU5qWVhSeklDNXdZV2RwYm1GMGFXOXVMV0owYmk1aFkzUnBkbVVuWEhKY2JseDBYSFJjZENrN1hISmNibHh5WEc1Y2RGeDBYSFJwWmlBb1kzVnljbVZ1ZEVKMGJrUnZaM01nSmlZZ1kzVnljbVZ1ZEVKMGJrTmhkSE1wSUh0Y2NseHVYSFJjZEZ4MFhIUmpkWEp5Wlc1MFFuUnVSRzluY3k1amJHRnpjMHhwYzNRdVlXUmtLQ2RuY205MWNDY3BPMXh5WEc1Y2RGeDBYSFJjZEdOMWNuSmxiblJDZEc1RWIyZHpMbTVsZUhSRmJHVnRaVzUwVTJsaWJHbHVaeTVqYkdGemMweHBjM1F1WVdSa0tDZG5jbTkxY0NjcE8xeHlYRzVjZEZ4MFhIUmNkR04xY25KbGJuUkNkRzVFYjJkekxtNWxlSFJGYkdWdFpXNTBVMmxpYkdsdVp5NXVaWGgwUld4bGJXVnVkRk5wWW14cGJtY3VZMnhoYzNOTWFYTjBMbUZrWkNoY2NseHVYSFJjZEZ4MFhIUmNkQ2RuY205MWNDZGNjbHh1WEhSY2RGeDBYSFFwTzF4eVhHNWNkRngwWEhSY2RHTjFjbkpsYm5SQ2RHNUViMmR6TG5CeVpYWnBiM1Z6Uld4bGJXVnVkRk5wWW14cGJtY3VZMnhoYzNOTWFYTjBMbUZrWkNnblozSnZkWEFuS1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwWTNWeWNtVnVkRUowYmtOaGRITXVZMnhoYzNOTWFYTjBMbUZrWkNnblozSnZkWEFuS1R0Y2NseHVYSFJjZEZ4MFhIUmpkWEp5Wlc1MFFuUnVRMkYwY3k1dVpYaDBSV3hsYldWdWRGTnBZbXhwYm1jdVkyeGhjM05NYVhOMExtRmtaQ2duWjNKdmRYQW5LVHRjY2x4dVhIUmNkRngwWEhSamRYSnlaVzUwUW5SdVEyRjBjeTV1WlhoMFJXeGxiV1Z1ZEZOcFlteHBibWN1Ym1WNGRFVnNaVzFsYm5SVGFXSnNhVzVuTG1Oc1lYTnpUR2x6ZEM1aFpHUW9YSEpjYmx4MFhIUmNkRngwWEhRblozSnZkWEFuWEhKY2JseDBYSFJjZEZ4MEtUdGNjbHh1WEhSY2RGeDBYSFJqZFhKeVpXNTBRblJ1UTJGMGN5NXdjbVYyYVc5MWMwVnNaVzFsYm5SVGFXSnNhVzVuTG1Oc1lYTnpUR2x6ZEM1aFpHUW9KMmR5YjNWd0p5azdYSEpjYmx4MFhIUmNkSDFjY2x4dVhIUmNkSDFjY2x4dVhISmNibHgwWEhSbWRXNWpkR2x2YmlCdVpYaDBVR0ZuWlNod1lXZGxRMjkxYm5RcElIdGNjbHh1WEhSY2RGeDBiR1YwSUc1bGVIUkNkRzRnUFNCa2IyTjFiV1Z1ZEM1amNtVmhkR1ZGYkdWdFpXNTBLQ2RpZFhSMGIyNG5LVHRjY2x4dVhIUmNkRngwYm1WNGRFSjBiaTVqYkdGemMweHBjM1F1WVdSa0tDZHVaWGgwSnlrN1hISmNibHgwWEhSY2RHNWxlSFJDZEc0dWFXNXVaWEpVWlhoMElEMGdKejRuTzF4eVhHNWNkRngwWEhSdVpYaDBRblJ1TG1Oc1lYTnpUR2x6ZEM1aFpHUW9KM0JoWjJsdVlYUnBiMjR0WW5SdUp5azdYSEpjYmx4eVhHNWNkRngwWEhSdVpYaDBRblJ1TG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjJOc2FXTnJKeXdnS0dVcElEMCtJSHRjY2x4dVhIUmNkRngwWEhScFppQW9ibVY0ZEVKMGJpNXdZWEpsYm5SRmJHVnRaVzUwSUQwOUlIQmhaMmx1WVhScGIyNUZiRVJ2WjNNcElIdGNjbHh1WEhSY2RGeDBYSFJjZEdScGMzQnNZWGxRWVdkcGJtRjBaV1JKZEdWdGN5aGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFpHOW5RbTk0UVhKeVlYa3NYSEpjYmx4MFhIUmNkRngwWEhSY2RHUnZaM05DYjNnc1hISmNibHgwWEhSY2RGeDBYSFJjZEdWc1pXMWxiblJ6VDI1UVlXZGxMRnh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmpkWEp5Wlc1MFVHRm5aVnh5WEc1Y2RGeDBYSFJjZEZ4MEtUdGNjbHh1WEhKY2JseDBYSFJjZEZ4MFhIUnNaWFFnWVdOMGFYWmxRblJ1Ukc5bklEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2loY2NseHVYSFJjZEZ4MFhIUmNkRngwSnlOa2IyZHpJQzV3WVdkcGJtRjBhVzl1TFdKMGJpNWhZM1JwZG1VblhISmNibHgwWEhSY2RGeDBYSFFwTzF4eVhHNWNjbHh1WEhSY2RGeDBYSFJjZEdGamRHbDJaVUowYmtSdlp5NXVaWGgwUld4bGJXVnVkRk5wWW14cGJtY3VZMnhwWTJzb0tUdGNjbHh1WEhKY2JseDBYSFJjZEZ4MFhIUnBaaUFvWTNWeWNtVnVkRkJoWjJVZ1BUMDlJSEJoWjJWRGIzVnVkQ2tnZTF4eVhHNWNkRngwWEhSY2RGeDBYSFJ1WlhoMFFuUnVMbk4wZVd4bExtOXdZV05wZEhrZ1BTQW5NQzQxSnp0Y2NseHVYSFJjZEZ4MFhIUmNkRngwYm1WNGRFSjBiaTV6ZEhsc1pTNXdiMmx1ZEdWeVJYWmxiblJ6SUQwZ0oyNXZibVVuTzF4eVhHNWNkRngwWEhSY2RGeDBmVnh5WEc1Y2NseHVYSFJjZEZ4MFhIUmNkR3hsZENCd2NtVjJRblJ1SUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduSTJSdlozTWdMbkJ5WlhZbktUdGNjbHh1WEhKY2JseDBYSFJjZEZ4MFhIUnBaaUFvWTNWeWNtVnVkRkJoWjJVZ0lUMDlJREVwSUh0Y2NseHVYSFJjZEZ4MFhIUmNkRngwY0hKbGRrSjBiaTV6ZEhsc1pTNXZjR0ZqYVhSNUlEMGdKekVuTzF4eVhHNWNkRngwWEhSY2RGeDBYSFJ3Y21WMlFuUnVMbk4wZVd4bExuQnZhVzUwWlhKRmRtVnVkSE1nUFNBbllXeHNKenRjY2x4dVhIUmNkRngwWEhSY2RIMWNjbHh1WEhKY2JseDBYSFJjZEZ4MFhIUnBaaUFvWVdOMGFYWmxRblJ1Ukc5bktTQjdYSEpjYmx4MFhIUmNkRngwWEhSY2RHRmpkR2wyWlVKMGJrUnZaeTVqYkdGemMweHBjM1F1WVdSa0tDZG5jbTkxY0NjcE8xeHlYRzVjZEZ4MFhIUmNkRngwWEhSaFkzUnBkbVZDZEc1RWIyY3VibVY0ZEVWc1pXMWxiblJUYVdKc2FXNW5MbU5zWVhOelRHbHpkQzVoWkdRb0oyZHliM1Z3SnlrN1hISmNibHgwWEhSY2RGeDBYSFJjZEdGamRHbDJaVUowYmtSdlp5NXdjbVYyYVc5MWMwVnNaVzFsYm5SVGFXSnNhVzVuTG1Oc1lYTnpUR2x6ZEM1aFpHUW9KMmR5YjNWd0p5azdYSEpjYmx4MFhIUmNkRngwWEhSOVhISmNibHgwWEhSY2RGeDBmVnh5WEc1Y2NseHVYSFJjZEZ4MFhIUnBaaUFvYm1WNGRFSjBiaTV3WVhKbGJuUkZiR1Z0Wlc1MElEMDlJSEJoWjJsdVlYUnBiMjVGYkVOaGRITXBJSHRjY2x4dVhIUmNkRngwWEhSY2RHUnBjM0JzWVhsUVlXZHBibUYwWldSSmRHVnRjeWhjY2x4dVhIUmNkRngwWEhSY2RGeDBZMkYwUW05NFFYSnlZWGtzWEhKY2JseDBYSFJjZEZ4MFhIUmNkR05oZEhOQ2IzZ3NYSEpjYmx4MFhIUmNkRngwWEhSY2RHVnNaVzFsYm5SelQyNVFZV2RsTEZ4eVhHNWNkRngwWEhSY2RGeDBYSFJqZFhKeVpXNTBVR0ZuWlZ4eVhHNWNkRngwWEhSY2RGeDBLVHRjY2x4dVhISmNibHgwWEhSY2RGeDBYSFJzWlhRZ1lXTjBhWFpsUW5SdVEyRjBJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpaGNjbHh1WEhSY2RGeDBYSFJjZEZ4MEp5TmpZWFJ6SUM1d1lXZHBibUYwYVc5dUxXSjBiaTVoWTNScGRtVW5YSEpjYmx4MFhIUmNkRngwWEhRcE8xeHlYRzVjY2x4dVhIUmNkRngwWEhSY2RHRmpkR2wyWlVKMGJrTmhkQzV1WlhoMFJXeGxiV1Z1ZEZOcFlteHBibWN1WTJ4cFkyc29LVHRjY2x4dVhISmNibHgwWEhSY2RGeDBYSFJwWmlBb1kzVnljbVZ1ZEZCaFoyVWdQVDA5SUhCaFoyVkRiM1Z1ZENrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhSdVpYaDBRblJ1TG5OMGVXeGxMbTl3WVdOcGRIa2dQU0FuTUM0MUp6dGNjbHh1WEhSY2RGeDBYSFJjZEZ4MGJtVjRkRUowYmk1emRIbHNaUzV3YjJsdWRHVnlSWFpsYm5SeklEMGdKMjV2Ym1Vbk8xeHlYRzVjZEZ4MFhIUmNkRngwZlZ4eVhHNWNjbHh1WEhSY2RGeDBYSFJjZEd4bGRDQndjbVYyUW5SdUlEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkkyTmhkSE1nTG5CeVpYWW5LVHRjY2x4dVhISmNibHgwWEhSY2RGeDBYSFJwWmlBb1kzVnljbVZ1ZEZCaFoyVWdJVDA5SURFcElIdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MGNISmxka0owYmk1emRIbHNaUzV2Y0dGamFYUjVJRDBnSnpFbk8xeHlYRzVjZEZ4MFhIUmNkRngwWEhSd2NtVjJRblJ1TG5OMGVXeGxMbkJ2YVc1MFpYSkZkbVZ1ZEhNZ1BTQW5ZV3hzSnp0Y2NseHVYSFJjZEZ4MFhIUmNkSDFjY2x4dVhISmNibHgwWEhSY2RGeDBYSFJwWmlBb1lXTjBhWFpsUW5SdVEyRjBLU0I3WEhKY2JseDBYSFJjZEZ4MFhIUmNkR0ZqZEdsMlpVSjBia05oZEM1amJHRnpjMHhwYzNRdVlXUmtLQ2RuY205MWNDY3BPMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmhZM1JwZG1WQ2RHNURZWFF1Ym1WNGRFVnNaVzFsYm5SVGFXSnNhVzVuTG1Oc1lYTnpUR2x6ZEM1aFpHUW9KMmR5YjNWd0p5azdYSEpjYmx4MFhIUmNkRngwWEhSY2RHRmpkR2wyWlVKMGJrTmhkQzV3Y21WMmFXOTFjMFZzWlcxbGJuUlRhV0pzYVc1bkxtTnNZWE56VEdsemRDNWhaR1FvSjJkeWIzVndKeWs3WEhKY2JseDBYSFJjZEZ4MFhIUjlYSEpjYmx4MFhIUmNkRngwZlZ4eVhHNWNkRngwWEhSOUtUdGNjbHh1WEhKY2JseDBYSFJjZEhKbGRIVnliaUJ1WlhoMFFuUnVPMXh5WEc1Y2RGeDBmVnh5WEc1Y2NseHVYSFJjZEdaMWJtTjBhVzl1SUhCeVpYWlFZV2RsS0hCaFoyVkRiM1Z1ZENrZ2UxeHlYRzVjZEZ4MFhIUnNaWFFnY0hKbGRrSjBiaUE5SUdSdlkzVnRaVzUwTG1OeVpXRjBaVVZzWlcxbGJuUW9KMkoxZEhSdmJpY3BPMXh5WEc1Y2RGeDBYSFJ3Y21WMlFuUnVMbU5zWVhOelRHbHpkQzVoWkdRb0ozQnlaWFluS1R0Y2NseHVYSFJjZEZ4MGNISmxka0owYmk1cGJtNWxjbFJsZUhRZ1BTQW5QQ2M3WEhKY2JseDBYSFJjZEhCeVpYWkNkRzR1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25jR0ZuYVc1aGRHbHZiaTFpZEc0bktUdGNjbHh1WEhKY2JseDBYSFJjZEhCeVpYWkNkRzR1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduWTJ4cFkyc25MQ0FvWlNrZ1BUNGdlMXh5WEc1Y2RGeDBYSFJjZEdsbUlDaHdjbVYyUW5SdUxuQmhjbVZ1ZEVWc1pXMWxiblFnUFQwZ2NHRm5hVzVoZEdsdmJrVnNSRzluY3lrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWkdsemNHeGhlVkJoWjJsdVlYUmxaRWwwWlcxektGeHlYRzVjZEZ4MFhIUmNkRngwWEhSa2IyZENiM2hCY25KaGVTeGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFpHOW5jMEp2ZUN4Y2NseHVYSFJjZEZ4MFhIUmNkRngwWld4bGJXVnVkSE5QYmxCaFoyVXNYSEpjYmx4MFhIUmNkRngwWEhSY2RHTjFjbkpsYm5SUVlXZGxYSEpjYmx4MFhIUmNkRngwWEhRcE8xeHlYRzVjY2x4dVhIUmNkRngwWEhSY2RHeGxkQ0JoWTNScGRtVkNkRzVFYjJjZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0Z4eVhHNWNkRngwWEhSY2RGeDBYSFFuSTJSdlozTWdMbkJoWjJsdVlYUnBiMjR0WW5SdUxtRmpkR2wyWlNkY2NseHVYSFJjZEZ4MFhIUmNkQ2s3WEhKY2JseHlYRzVjZEZ4MFhIUmNkRngwWVdOMGFYWmxRblJ1Ukc5bkxuQnlaWFpwYjNWelJXeGxiV1Z1ZEZOcFlteHBibWN1WTJ4cFkyc29LVHRjY2x4dVhISmNibHgwWEhSY2RGeDBYSFJzWlhRZ2JtVjRkRUowYmlBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvSnlOa2IyZHpJQzV1WlhoMEp5azdYSEpjYmx4eVhHNWNkRngwWEhSY2RGeDBhV1lnS0dOMWNuSmxiblJRWVdkbElDRTlQU0J3WVdkbFEyOTFiblFwSUh0Y2NseHVYSFJjZEZ4MFhIUmNkRngwYm1WNGRFSjBiaTV6ZEhsc1pTNXZjR0ZqYVhSNUlEMGdKekVuTzF4eVhHNWNkRngwWEhSY2RGeDBYSFJ1WlhoMFFuUnVMbk4wZVd4bExuQnZhVzUwWlhKRmRtVnVkSE1nUFNBbllXeHNKenRjY2x4dVhIUmNkRngwWEhSY2RIMWNjbHh1WEhKY2JseDBYSFJjZEZ4MFhIUnBaaUFvWTNWeWNtVnVkRkJoWjJVZ1BUMDlJREVwSUh0Y2NseHVYSFJjZEZ4MFhIUmNkRngwY0hKbGRrSjBiaTV6ZEhsc1pTNXZjR0ZqYVhSNUlEMGdKekF1TlNjN1hISmNibHgwWEhSY2RGeDBYSFJjZEhCeVpYWkNkRzR1YzNSNWJHVXVjRzlwYm5SbGNrVjJaVzUwY3lBOUlDZHViMjVsSnp0Y2NseHVYSFJjZEZ4MFhIUmNkSDFjY2x4dVhISmNibHgwWEhSY2RGeDBYSFJwWmlBb1lXTjBhWFpsUW5SdVJHOW5LU0I3WEhKY2JseDBYSFJjZEZ4MFhIUmNkR0ZqZEdsMlpVSjBia1J2Wnk1amJHRnpjMHhwYzNRdVlXUmtLQ2RuY205MWNDY3BPMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmhZM1JwZG1WQ2RHNUViMmN1Ym1WNGRFVnNaVzFsYm5SVGFXSnNhVzVuTG1Oc1lYTnpUR2x6ZEM1aFpHUW9KMmR5YjNWd0p5azdYSEpjYmx4MFhIUmNkRngwWEhSY2RHRmpkR2wyWlVKMGJrUnZaeTV3Y21WMmFXOTFjMFZzWlcxbGJuUlRhV0pzYVc1bkxtTnNZWE56VEdsemRDNWhaR1FvSjJkeWIzVndKeWs3WEhKY2JseDBYSFJjZEZ4MFhIUjlYSEpjYmx4MFhIUmNkRngwZlZ4eVhHNWNjbHh1WEhSY2RGeDBYSFJwWmlBb2NISmxka0owYmk1d1lYSmxiblJGYkdWdFpXNTBJRDA5SUhCaFoybHVZWFJwYjI1RmJFTmhkSE1wSUh0Y2NseHVYSFJjZEZ4MFhIUmNkR1JwYzNCc1lYbFFZV2RwYm1GMFpXUkpkR1Z0Y3loY2NseHVYSFJjZEZ4MFhIUmNkRngwWTJGMFFtOTRRWEp5WVhrc1hISmNibHgwWEhSY2RGeDBYSFJjZEdOaGRITkNiM2dzWEhKY2JseDBYSFJjZEZ4MFhIUmNkR1ZzWlcxbGJuUnpUMjVRWVdkbExGeHlYRzVjZEZ4MFhIUmNkRngwWEhSamRYSnlaVzUwVUdGblpWeHlYRzVjZEZ4MFhIUmNkRngwS1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwWEhSc1pYUWdZV04wYVhabFFuUnVRMkYwSUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWhjY2x4dVhIUmNkRngwWEhSY2RGeDBKeU5qWVhSeklDNXdZV2RwYm1GMGFXOXVMV0owYmk1aFkzUnBkbVVuWEhKY2JseDBYSFJjZEZ4MFhIUXBPMXh5WEc1Y2NseHVYSFJjZEZ4MFhIUmNkR0ZqZEdsMlpVSjBia05oZEM1d2NtVjJhVzkxYzBWc1pXMWxiblJUYVdKc2FXNW5MbU5zYVdOcktDazdYSEpjYmx4eVhHNWNkRngwWEhSY2RGeDBiR1YwSUc1bGVIUkNkRzRnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2NqWTJGMGN5QXVibVY0ZENjcE8xeHlYRzVjY2x4dVhIUmNkRngwWEhSY2RHbG1JQ2hqZFhKeVpXNTBVR0ZuWlNBaFBUMGdjR0ZuWlVOdmRXNTBLU0I3WEhKY2JseDBYSFJjZEZ4MFhIUmNkRzVsZUhSQ2RHNHVjM1I1YkdVdWIzQmhZMmwwZVNBOUlDY3hKenRjY2x4dVhIUmNkRngwWEhSY2RGeDBibVY0ZEVKMGJpNXpkSGxzWlM1d2IybHVkR1Z5UlhabGJuUnpJRDBnSjJGc2JDYzdYSEpjYmx4MFhIUmNkRngwWEhSOVhISmNibHh5WEc1Y2RGeDBYSFJjZEZ4MGFXWWdLR04xY25KbGJuUlFZV2RsSUQwOVBTQXhLU0I3WEhKY2JseDBYSFJjZEZ4MFhIUmNkSEJ5WlhaQ2RHNHVjM1I1YkdVdWIzQmhZMmwwZVNBOUlDY3dMalVuTzF4eVhHNWNkRngwWEhSY2RGeDBYSFJ3Y21WMlFuUnVMbk4wZVd4bExuQnZhVzUwWlhKRmRtVnVkSE1nUFNBbmJtOXVaU2M3WEhKY2JseDBYSFJjZEZ4MFhIUjlYSEpjYmx4eVhHNWNkRngwWEhSY2RGeDBhV1lnS0dGamRHbDJaVUowYmtOaGRDa2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmhZM1JwZG1WQ2RHNURZWFF1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25aM0p2ZFhBbktUdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFlXTjBhWFpsUW5SdVEyRjBMbTVsZUhSRmJHVnRaVzUwVTJsaWJHbHVaeTVqYkdGemMweHBjM1F1WVdSa0tDZG5jbTkxY0NjcE8xeHlYRzVjZEZ4MFhIUmNkRngwWEhSaFkzUnBkbVZDZEc1RFlYUXVjSEpsZG1sdmRYTkZiR1Z0Wlc1MFUybGliR2x1Wnk1amJHRnpjMHhwYzNRdVlXUmtLQ2RuY205MWNDY3BPMXh5WEc1Y2RGeDBYSFJjZEZ4MGZWeHlYRzVjZEZ4MFhIUmNkSDFjY2x4dVhIUmNkRngwZlNrN1hISmNibHh5WEc1Y2RGeDBYSFJwWmlBb1kzVnljbVZ1ZEZCaFoyVWdQVDA5SURFcElIdGNjbHh1WEhSY2RGeDBYSFJ3Y21WMlFuUnVMbk4wZVd4bExtOXdZV05wZEhrZ1BTQW5NQzQxSnp0Y2NseHVYSFJjZEZ4MFhIUndjbVYyUW5SdUxuTjBlV3hsTG5CdmFXNTBaWEpGZG1WdWRITWdQU0FuYm05dVpTYzdYSEpjYmx4MFhIUmNkSDFjY2x4dVhISmNibHgwWEhSY2RISmxkSFZ5YmlCd2NtVjJRblJ1TzF4eVhHNWNkRngwZlZ4eVhHNWNjbHh1WEhSY2RHWjFibU4wYVc5dUlIQmhaMmx1WVhScGIyNUNkWFIwYjI0b2NHRm5aU3dnY0dGblpVTnZkVzUwS1NCN1hISmNibHgwWEhSY2RHeGxkQ0JpZFhSMGIyNGdQU0JrYjJOMWJXVnVkQzVqY21WaGRHVkZiR1Z0Wlc1MEtDZGlkWFIwYjI0bktUdGNjbHh1WEhSY2RGeDBZblYwZEc5dUxtTnNZWE56VEdsemRDNWhaR1FvSjNCaFoybHVZWFJwYjI0dFluUnVKeWs3WEhKY2JseDBYSFJjZEdKMWRIUnZiaTVwYm01bGNsUmxlSFFnUFNCd1lXZGxPMXh5WEc1Y2NseHVYSFJjZEZ4MGFXWWdLR04xY25KbGJuUlFZV2RsSUQwOUlIQmhaMlVwSUh0Y2NseHVYSFJjZEZ4MFhIUmlkWFIwYjI0dVkyeGhjM05NYVhOMExtRmtaQ2duWVdOMGFYWmxKeWs3WEhKY2JseDBYSFJjZEgxY2NseHVYSEpjYmx4MFhIUmNkR0oxZEhSdmJpNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZGpiR2xqYXljc0lDaGxLU0E5UGlCN1hISmNibHgwWEhSY2RGeDBZM1Z5Y21WdWRGQmhaMlVnUFNCd1lXZGxPMXh5WEc1Y2NseHVYSFJjZEZ4MFhIUnBaaUFvWW5WMGRHOXVMbkJoY21WdWRFVnNaVzFsYm5RZ1BUMGdjR0ZuYVc1aGRHbHZia1ZzUkc5bmN5a2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MFpHbHpjR3hoZVZCaFoybHVZWFJsWkVsMFpXMXpLRnh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmtiMmRDYjNoQmNuSmhlU3hjY2x4dVhIUmNkRngwWEhSY2RGeDBaRzluYzBKdmVDeGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFpXeGxiV1Z1ZEhOUGJsQmhaMlVzWEhKY2JseDBYSFJjZEZ4MFhIUmNkR04xY25KbGJuUlFZV2RsWEhKY2JseDBYSFJjZEZ4MFhIUXBPMXh5WEc1Y2NseHVYSFJjZEZ4MFhIUmNkR3hsZENCaFkzUnBkbVZDZEc1RWIyY2dQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtGeHlYRzVjZEZ4MFhIUmNkRngwWEhRbkkyUnZaM01nTG5CaFoybHVZWFJwYjI0dFluUnVMbUZqZEdsMlpTZGNjbHh1WEhSY2RGeDBYSFJjZENrN1hISmNibHh5WEc1Y2RGeDBYSFJjZEZ4MFlXTjBhWFpsUW5SdVJHOW5MbU5zWVhOelRHbHpkQzV5WlcxdmRtVW9KMkZqZEdsMlpTY3BPMXh5WEc1Y2NseHVYSFJjZEZ4MFhIUmNkR0oxZEhSdmJpNWpiR0Z6YzB4cGMzUXVZV1JrS0NkaFkzUnBkbVVuS1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwWEhSc1pYUWdibVY0ZEVKMGJpQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5TmtiMmR6SUM1dVpYaDBKeWs3WEhKY2JseHlYRzVjZEZ4MFhIUmNkRngwYVdZZ0tHTjFjbkpsYm5SUVlXZGxJRDA5UFNCd1lXZGxRMjkxYm5RcElIdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MGJtVjRkRUowYmk1emRIbHNaUzV2Y0dGamFYUjVJRDBnSnpBdU5TYzdYSEpjYmx4MFhIUmNkRngwWEhSY2RHNWxlSFJDZEc0dWMzUjViR1V1Y0c5cGJuUmxja1YyWlc1MGN5QTlJQ2R1YjI1bEp6dGNjbHh1WEhSY2RGeDBYSFJjZEgwZ1pXeHpaU0I3WEhKY2JseDBYSFJjZEZ4MFhIUmNkRzVsZUhSQ2RHNHVjM1I1YkdVdWIzQmhZMmwwZVNBOUlDY3hKenRjY2x4dVhIUmNkRngwWEhSY2RGeDBibVY0ZEVKMGJpNXpkSGxzWlM1d2IybHVkR1Z5UlhabGJuUnpJRDBnSjJGc2JDYzdYSEpjYmx4MFhIUmNkRngwWEhSOVhISmNibHh5WEc1Y2RGeDBYSFJjZEZ4MGJHVjBJSEJ5WlhaQ2RHNGdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtDY2paRzluY3lBdWNISmxkaWNwTzF4eVhHNWNjbHh1WEhSY2RGeDBYSFJjZEdsbUlDaGpkWEp5Wlc1MFVHRm5aU0E5UFQwZ01Ta2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUndjbVYyUW5SdUxuTjBlV3hsTG05d1lXTnBkSGtnUFNBbk1DNDFKenRjY2x4dVhIUmNkRngwWEhSY2RGeDBjSEpsZGtKMGJpNXpkSGxzWlM1d2IybHVkR1Z5UlhabGJuUnpJRDBnSjI1dmJtVW5PMXh5WEc1Y2RGeDBYSFJjZEZ4MGZTQmxiSE5sSUh0Y2NseHVYSFJjZEZ4MFhIUmNkRngwY0hKbGRrSjBiaTV6ZEhsc1pTNXZjR0ZqYVhSNUlEMGdKekVuTzF4eVhHNWNkRngwWEhSY2RGeDBYSFJ3Y21WMlFuUnVMbk4wZVd4bExuQnZhVzUwWlhKRmRtVnVkSE1nUFNBbllXeHNKenRjY2x4dVhIUmNkRngwWEhSY2RIMWNjbHh1WEhSY2RGeDBYSFI5WEhKY2JseHlYRzVjZEZ4MFhIUmNkR2xtSUNoaWRYUjBiMjR1Y0dGeVpXNTBSV3hsYldWdWRDQTlQU0J3WVdkcGJtRjBhVzl1Uld4RFlYUnpLU0I3WEhKY2JseDBYSFJjZEZ4MFhIUmthWE53YkdGNVVHRm5hVzVoZEdWa1NYUmxiWE1vWEhKY2JseDBYSFJjZEZ4MFhIUmNkR05oZEVKdmVFRnljbUY1TEZ4eVhHNWNkRngwWEhSY2RGeDBYSFJqWVhSelFtOTRMRnh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmxiR1Z0Wlc1MGMwOXVVR0ZuWlN4Y2NseHVYSFJjZEZ4MFhIUmNkRngwWTNWeWNtVnVkRkJoWjJWY2NseHVYSFJjZEZ4MFhIUmNkQ2s3WEhKY2JseHlYRzVjZEZ4MFhIUmNkRngwYkdWMElHRmpkR2wyWlVKMGJrTmhkQ0E5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9YSEpjYmx4MFhIUmNkRngwWEhSY2RDY2pZMkYwY3lBdWNHRm5hVzVoZEdsdmJpMWlkRzR1WVdOMGFYWmxKMXh5WEc1Y2RGeDBYSFJjZEZ4MEtUdGNjbHh1WEhKY2JseDBYSFJjZEZ4MFhIUmhZM1JwZG1WQ2RHNURZWFF1WTJ4aGMzTk1hWE4wTG5KbGJXOTJaU2duWVdOMGFYWmxKeWs3WEhKY2JseHlYRzVjZEZ4MFhIUmNkRngwWW5WMGRHOXVMbU5zWVhOelRHbHpkQzVoWkdRb0oyRmpkR2wyWlNjcE8xeHlYRzVjY2x4dVhIUmNkRngwWEhSY2RHeGxkQ0J1WlhoMFFuUnVJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25JMk5oZEhNZ0xtNWxlSFFuS1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwWEhScFppQW9ZM1Z5Y21WdWRGQmhaMlVnUFQwOUlIQmhaMlZEYjNWdWRDa2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUnVaWGgwUW5SdUxuTjBlV3hsTG05d1lXTnBkSGtnUFNBbk1DNDFKenRjY2x4dVhIUmNkRngwWEhSY2RGeDBibVY0ZEVKMGJpNXpkSGxzWlM1d2IybHVkR1Z5UlhabGJuUnpJRDBnSjI1dmJtVW5PMXh5WEc1Y2RGeDBYSFJjZEZ4MGZTQmxiSE5sSUh0Y2NseHVYSFJjZEZ4MFhIUmNkRngwYm1WNGRFSjBiaTV6ZEhsc1pTNXZjR0ZqYVhSNUlEMGdKekVuTzF4eVhHNWNkRngwWEhSY2RGeDBYSFJ1WlhoMFFuUnVMbk4wZVd4bExuQnZhVzUwWlhKRmRtVnVkSE1nUFNBbllXeHNKenRjY2x4dVhIUmNkRngwWEhSY2RIMWNjbHh1WEhKY2JseDBYSFJjZEZ4MFhIUnNaWFFnY0hKbGRrSjBiaUE5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9KeU5qWVhSeklDNXdjbVYySnlrN1hISmNibHh5WEc1Y2RGeDBYSFJjZEZ4MGFXWWdLR04xY25KbGJuUlFZV2RsSUQwOVBTQXhLU0I3WEhKY2JseDBYSFJjZEZ4MFhIUmNkSEJ5WlhaQ2RHNHVjM1I1YkdVdWIzQmhZMmwwZVNBOUlDY3dMalVuTzF4eVhHNWNkRngwWEhSY2RGeDBYSFJ3Y21WMlFuUnVMbk4wZVd4bExuQnZhVzUwWlhKRmRtVnVkSE1nUFNBbmJtOXVaU2M3WEhKY2JseDBYSFJjZEZ4MFhIUjlJR1ZzYzJVZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhSd2NtVjJRblJ1TG5OMGVXeGxMbTl3WVdOcGRIa2dQU0FuTVNjN1hISmNibHgwWEhSY2RGeDBYSFJjZEhCeVpYWkNkRzR1YzNSNWJHVXVjRzlwYm5SbGNrVjJaVzUwY3lBOUlDZGhiR3duTzF4eVhHNWNkRngwWEhSY2RGeDBmVnh5WEc1Y2RGeDBYSFJjZEgxY2NseHVYSFJjZEZ4MGZTazdYSEpjYmx4eVhHNWNkRngwWEhSeVpYUjFjbTRnWW5WMGRHOXVPMXh5WEc1Y2RGeDBmVnh5WEc1Y2NseHVYSFJjZEdOdmJuTjBJR1Y0Y0dGdVpITk5iM0psSUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZja0ZzYkNnblcyVjRjR0Z1WkMxdGIzSmxYU2NwTzF4eVhHNWNjbHh1WEhSY2RHWjFibU4wYVc5dUlHVjRjR0Z1WkNncElIdGNjbHh1WEhSY2RGeDBZMjl1YzNRZ2MyaHZkME52Ym5SbGJuUWdQU0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDaDBhR2x6TG1SaGRHRnpaWFF1ZEdGeVoyVjBLVHRjY2x4dVhIUmNkRngwYVdZZ0tITm9iM2REYjI1MFpXNTBMbU5zWVhOelRHbHpkQzVqYjI1MFlXbHVjeWduWVdOMGFYWmxKeWtwSUh0Y2NseHVYSFJjZEZ4MFhIUjBhR2x6TG1sdWJtVnlTRlJOVENBOUlIUm9hWE11WkdGMFlYTmxkQzV6YUc5M2RHVjRkRHRjY2x4dVhIUmNkRngwZlNCbGJITmxJSHRjY2x4dVhIUmNkRngwWEhSMGFHbHpMbWx1Ym1WeVNGUk5UQ0E5SUhSb2FYTXVaR0YwWVhObGRDNW9hV1JsZEdWNGREdGNjbHh1WEhSY2RGeDBmVnh5WEc1Y2NseHVYSFJjZEZ4MGMyaHZkME52Ym5SbGJuUXVZMnhoYzNOTWFYTjBMblJ2WjJkc1pTZ25ZV04wYVhabEp5azdYSEpjYmx4MFhIUmNkR2xtSUNoemFHOTNRMjl1ZEdWdWRDNWpiR0Z6YzB4cGMzUXVZMjl1ZEdGcGJuTW9KMkZqZEdsMlpTY3BLU0I3WEhKY2JseDBYSFJjZEZ4MGMyaHZkME52Ym5SbGJuUXVjM1I1YkdVdWJXRjRTR1ZwWjJoMElEMGdjMmh2ZDBOdmJuUmxiblF1YzJOeWIyeHNTR1ZwWjJoMElDc2dKM0I0Snp0Y2NseHVYSFJjZEZ4MGZTQmxiSE5sSUh0Y2NseHVYSFJjZEZ4MFhIUnphRzkzUTI5dWRHVnVkQzV6ZEhsc1pTNXRZWGhJWldsbmFIUWdQU0F5TUNBcklDZHdlQ2M3WEhKY2JseDBYSFJjZEgxY2NseHVYSFJjZEgxY2NseHVYSEpjYmx4MFhIUnBaaUFvWkc5bmMwSnZlQ2tnZTF4eVhHNWNkRngwWEhSa2FYTndiR0Y1VUdGbmFXNWhkR1ZrU1hSbGJYTW9aRzluUW05NFFYSnlZWGtzSUdSdlozTkNiM2dzSUdWc1pXMWxiblJ6VDI1UVlXZGxMQ0JqZFhKeVpXNTBVR0ZuWlNrN1hISmNibHgwWEhSY2RHUnBjM0JzWVhsUVlXZHBibUYwYVc5dUtHUnZaMEp2ZUVGeWNtRjVMQ0J3WVdkcGJtRjBhVzl1Uld4RWIyZHpMQ0JsYkdWdFpXNTBjMDl1VUdGblpTazdYSEpjYmx4eVhHNWNkRngwWEhSbGVIQmhibVJ6VFc5eVpTNW1iM0pGWVdOb0tDaGlkRzRwSUQwK0lIdGNjbHh1WEhSY2RGeDBYSFJpZEc0dVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblkyeHBZMnNuTENCbGVIQmhibVFwTzF4eVhHNWNkRngwWEhSOUtUdGNjbHh1WEhSY2RIMWNjbHh1WEhKY2JseDBYSFJwWmlBb1kyRjBjMEp2ZUNrZ2UxeHlYRzVjZEZ4MFhIUmthWE53YkdGNVVHRm5hVzVoZEdWa1NYUmxiWE1vWTJGMFFtOTRRWEp5WVhrc0lHTmhkSE5DYjNnc0lHVnNaVzFsYm5SelQyNVFZV2RsTENCamRYSnlaVzUwVUdGblpTazdYSEpjYmx4MFhIUmNkR1JwYzNCc1lYbFFZV2RwYm1GMGFXOXVLR05oZEVKdmVFRnljbUY1TENCd1lXZHBibUYwYVc5dVJXeERZWFJ6TENCbGJHVnRaVzUwYzA5dVVHRm5aU2s3WEhKY2JseHlYRzVjZEZ4MFhIUmxlSEJoYm1SelRXOXlaUzVtYjNKRllXTm9LQ2hpZEc0cElEMCtJSHRjY2x4dVhIUmNkRngwWEhSaWRHNHVZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25ZMnhwWTJzbkxDQmxlSEJoYm1RcE8xeHlYRzVjZEZ4MFhIUjlLVHRjY2x4dVhIUmNkSDFjY2x4dVhIUjlYSEpjYmx4eVhHNWNkR2xtSUNoaGJtbHRZV3h6VUdGblpYTXBJSHRjY2x4dVhIUmNkQ2htZFc1amRHbHZiaUFvS1NCN1hISmNibHgwWEhSY2RHUnBjM0JzWVhsQmJtbHRZV3h6S0NrN1hISmNibHgwWEhSOUtTZ3BPMXh5WEc1Y2RIMWNjbHh1ZlNrN1hISmNiaUlzSW1SdlkzVnRaVzUwTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjBSUFRVTnZiblJsYm5STWIyRmtaV1FuTENCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmx4MEx5OGdabTl5YlNCMllXeHBaR0YwYVc5dVhISmNibHgwWTI5dWMzUWdabTl5YlNBOUlHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0NkamIyNTBZV04wTFdadmNtMG5LVHRjY2x4dVhIUmpiMjV6ZENCdVlXMWxJRDBnWkc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEVKNVNXUW9KMjVoYldVbktUdGNjbHh1WEhSamIyNXpkQ0JsYldGcGJDQTlJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJDZVVsa0tDZGxiV0ZwYkNjcE8xeHlYRzVjZEdOdmJuTjBJRzFsYzNOaFoyVWdQU0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDZ25iV1Z6YzJGblpTY3BPMXh5WEc1Y2RHTnZibk4wSUdadmNtMUNkRzRnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2duWm05eWJTMWlkRzRuS1R0Y2NseHVYSEpjYmx4MGFXWWdLR1p2Y20wcElIdGNjbHh1WEhSY2RGdGNjbHh1WEhSY2RGeDBKMk5zYVdOckp5eGNjbHh1WEhSY2RGeDBKMjl1ZEc5MVkyaHpkR0Z5ZENjc1hISmNibHgwWEhSY2RDZHRiM1Z6Wlc5MlpYSW5MRnh5WEc1Y2RGeDBYSFFuYTJWNVpHOTNiaWNzWEhKY2JseDBYSFJjZENkclpYbHdjbVZ6Y3ljc1hISmNibHgwWEhSY2RDZDBiM1ZqYUhOMFlYSjBKeXhjY2x4dVhIUmNkRngwSjNSdmRXTm9iVzkyWlNjc1hISmNibHgwWEhSZExtWnZja1ZoWTJnb1hISmNibHgwWEhSY2RDaGxkbVZ1ZENrZ1BUNWNjbHh1WEhSY2RGeDBYSFJrYjJOMWJXVnVkQzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLR1YyWlc1MExDQW9LU0E5UGlCN1hISmNibHgwWEhSY2RGeDBYSFJwWmlBb1kyaGxZMnRKYm5CMWRITW9LU0E5UFQwZ1ptRnNjMlVwSUh0Y2NseHVYSFJjZEZ4MFhIUmNkRngwWm05eWJVSjBiaTVrYVhOaFlteGxaQ0E5SUhSeWRXVTdYSEpjYmx4MFhIUmNkRngwWEhSOUlHVnNjMlVnZTF4eVhHNWNkRngwWEhSY2RGeDBYSFJtYjNKdFFuUnVMbVJwYzJGaWJHVmtJRDBnWm1Gc2MyVTdYSEpjYmx4MFhIUmNkRngwWEhSOVhISmNibHgwWEhSY2RGeDBmU2tzWEhKY2JseDBYSFJjZEdaaGJITmxYSEpjYmx4MFhIUXBPMXh5WEc1Y2NseHVYSFJjZEdaMWJtTjBhVzl1SUdOb1pXTnJTVzV3ZFhSektDa2dlMXh5WEc1Y2RGeDBYSFJqYjI1emRDQnVZVzFsVm1Gc2RXVWdQU0J1WVcxbExuWmhiSFZsTG5SeWFXMG9LVHRjY2x4dVhIUmNkRngwWTI5dWMzUWdaVzFoYVd4V1lXeDFaU0E5SUdWdFlXbHNMblpoYkhWbExuUnlhVzBvS1R0Y2NseHVYSFJjZEZ4MFkyOXVjM1FnYldWemMyRm5aVlpoYkhWbElEMGdiV1Z6YzJGblpTNTJZV3gxWlM1MGNtbHRLQ2s3WEhKY2JseHlYRzVjZEZ4MFhIUnBaaUFvYm1GdFpWWmhiSFZsSUQwOVBTQW5KeWtnZTF4eVhHNWNkRngwWEhSY2RITmxkRVZ5Y205eVJtOXlLRzVoYldVc0lDZFFiR1ZoYzJVZ1pXNTBaWElnZVc5MWNpQm1kV3hzSUc1aGJXVW5LVHRjY2x4dVhIUmNkRngwZlNCbGJITmxJSHRjY2x4dVhIUmNkRngwWEhSelpYUlRkV05qWlhOelJtOXlLRzVoYldVcE8xeHlYRzVjZEZ4MFhIUjlYSEpjYmx4eVhHNWNkRngwWEhScFppQW9aVzFoYVd4V1lXeDFaU0E5UFQwZ0p5Y3BJSHRjY2x4dVhIUmNkRngwWEhSelpYUkZjbkp2Y2tadmNpaGxiV0ZwYkN3Z0oxQnNaV0Z6WlNCbGJuUmxjaUI1YjNWeUlHVnRZV2xzSUdGa1pISmxjM01uS1R0Y2NseHVYSFJjZEZ4MGZTQmxiSE5sSUdsbUlDZ2haVzFoYVd4SmMxWmhiR2xrS0dWdFlXbHNWbUZzZFdVcEtTQjdYSEpjYmx4MFhIUmNkRngwYzJWMFJYSnliM0pHYjNJb1pXMWhhV3dzSUNkRmJXRnBiQ0JwY3lCdWIzUWdkbUZzYVdRbktUdGNjbHh1WEhSY2RGeDBmU0JsYkhObElIdGNjbHh1WEhSY2RGeDBYSFJ6WlhSVGRXTmpaWE56Um05eUtHVnRZV2xzS1R0Y2NseHVYSFJjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkRngwYVdZZ0tHMWxjM05oWjJWV1lXeDFaU0E5UFQwZ0p5Y3BJSHRjY2x4dVhIUmNkRngwWEhSelpYUkZjbkp2Y2tadmNpaHRaWE56WVdkbExDQW5VR3hsWVhObElHVnVkR1Z5SUhsdmRYSWdiV1Z6YzJGblpTY3BPMXh5WEc1Y2RGeDBYSFI5SUdWc2MyVWdlMXh5WEc1Y2RGeDBYSFJjZEhObGRGTjFZMk5sYzNOR2IzSW9iV1Z6YzJGblpTazdYSEpjYmx4MFhIUmNkSDFjY2x4dVhISmNibHgwWEhSY2RHbG1JQ2hjY2x4dVhIUmNkRngwWEhSdVlXMWxWbUZzZFdVZ1BUMDlJQ2NuSUh4OFhISmNibHgwWEhSY2RGeDBaVzFoYVd4V1lXeDFaU0E5UFQwZ0p5Y2dmSHhjY2x4dVhIUmNkRngwWEhSdFpYTnpZV2RsVm1Gc2RXVWdQVDA5SUNjbklIeDhYSEpjYmx4MFhIUmNkRngwSVdWdFlXbHNTWE5XWVd4cFpDaGxiV0ZwYkZaaGJIVmxLVnh5WEc1Y2RGeDBYSFFwSUh0Y2NseHVYSFJjZEZ4MFhIUnlaWFIxY200Z1ptRnNjMlU3WEhKY2JseDBYSFJjZEgwZ1pXeHpaU0I3WEhKY2JseDBYSFJjZEZ4MGNtVjBkWEp1SUhSeWRXVTdYSEpjYmx4MFhIUmNkSDFjY2x4dVhIUmNkSDFjY2x4dVhISmNibHgwWEhSbWRXNWpkR2x2YmlCelpYUkZjbkp2Y2tadmNpaHBibkIxZEN3Z2JXVnpjMkZuWlNrZ2UxeHlYRzVjZEZ4MFhIUmpiMjV6ZENCbWIzSnRJRDBnYVc1d2RYUXVjR0Z5Wlc1MFJXeGxiV1Z1ZER0Y2NseHVYSFJjZEZ4MFkyOXVjM1FnYzIxaGJHd2dQU0JtYjNKdExuRjFaWEo1VTJWc1pXTjBiM0lvSjNOdFlXeHNKeWs3WEhKY2JseHlYRzVjZEZ4MFhIUnpiV0ZzYkM1cGJtNWxjbFJsZUhRZ1BTQnRaWE56WVdkbE8xeHlYRzVjZEZ4MFhIUm1iM0p0TG1Oc1lYTnpUbUZ0WlNBOUlDZG1iM0p0WDE5bmNtOTFjQ0JsY25KdmNpYzdYSEpjYmx4MFhIUjlYSEpjYmx4eVhHNWNkRngwWm5WdVkzUnBiMjRnYzJWMFUzVmpZMlZ6YzBadmNpaHBibkIxZENrZ2UxeHlYRzVjZEZ4MFhIUmpiMjV6ZENCbWIzSnRJRDBnYVc1d2RYUXVjR0Z5Wlc1MFJXeGxiV1Z1ZER0Y2NseHVYSFJjZEZ4MFptOXliUzVqYkdGemMwNWhiV1VnUFNBblptOXliVjlmWjNKdmRYQWdjM1ZqWTJWemN5YzdYSEpjYmx4MFhIUjlYSEpjYmx4eVhHNWNkRngwWm5WdVkzUnBiMjRnWlcxaGFXeEpjMVpoYkdsa0tHVnRZV2xzS1NCN1hISmNibHgwWEhSY2RHTnZibk4wSUhKbElEMGdMMTRvS0Z0ZVBENG9LVnhjVzF4Y1hWeGNYRnd1TERzNlhGeHpRRndpWFNzb1hGd3VXMTQ4UGlncFhGeGJYRnhkWEZ4Y1hDNHNPenBjWEhOQVhDSmRLeWtxS1h3b1hDSXVLMXdpS1NsQUtDaGNYRnRiTUMwNVhYc3hMRE45WEZ3dVd6QXRPVjE3TVN3emZWeGNMbHN3TFRsZGV6RXNNMzFjWEM1Yk1DMDVYWHN4TEROOVhTbDhLQ2hiWVMxNlFTMWFYRnd0TUMwNVhTdGNYQzRwSzF0aExYcEJMVnBkZXpJc2ZTa3BKQzh1ZEdWemRDaGNjbHh1WEhSY2RGeDBYSFJsYldGcGJGeHlYRzVjZEZ4MFhIUXBPMXh5WEc1Y2NseHVYSFJjZEZ4MGNtVjBkWEp1SUhKbE8xeHlYRzVjZEZ4MGZWeHlYRzVjZEgxY2NseHVmU2s3WEhKY2JpSXNJbVJ2WTNWdFpXNTBMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMFJQVFVOdmJuUmxiblJNYjJGa1pXUW5MQ0JtZFc1amRHbHZiaUFvS1NCN1hHNWNkSGRwYm1SdmR5NWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZHNiMkZrSnl3Z0tHVXBJRDArSUh0Y2JseDBYSFJqYjI1emRDQndjbVZzYjJGa0lEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkxuQnlaV3h2WVdRbktUdGNibHh1WEhSY2RIQnlaV3h2WVdRdVkyeGhjM05NYVhOMExtRmtaQ2duY0hKbGJHOWhaQzFtYVc1cGMyaGxaQ2NwTzF4dVhIUjlLVHRjYmx4dVhIUmpiMjV6ZENCaWRHNVRZM0p2Ykd4VWIxUnZjQ0E5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2RpZEc1VFkzSnZiR3hVYjFSdmNDY3BPMXh1WEhSaWRHNVRZM0p2Ykd4VWIxUnZjQzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RqYkdsamF5Y3NJQ2hsS1NBOVBpQjdYRzVjZEZ4MGQybHVaRzkzTG5OamNtOXNiRlJ2S0h0Y2JseDBYSFJjZEhSdmNEb2dNQ3hjYmx4MFhIUmNkR3hsWm5RNklEQXNYRzVjZEZ4MFhIUmlaV2hoZG1sdmNqb2dKM050YjI5MGFDY3NYRzVjZEZ4MGZTazdYRzVjZEgwcE8xeHVYRzVjZEdOdmJuTjBJR1Y0Y0dGdVpITk5iM0psSUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZja0ZzYkNnblcyVjRjR0Z1WkMxdGIzSmxYU2NwTzF4dVhHNWNkR1oxYm1OMGFXOXVJR1Y0Y0dGdVpDZ3BJSHRjYmx4MFhIUmpiMjV6ZENCemFHOTNRMjl1ZEdWdWRDQTlJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJDZVVsa0tIUm9hWE11WkdGMFlYTmxkQzUwWVhKblpYUXBPMXh1WEc1Y2RGeDBhV1lnS0hOb2IzZERiMjUwWlc1MExtTnNZWE56VEdsemRDNWpiMjUwWVdsdWN5Z25ZV04wYVhabEp5a3BJSHRjYmx4MFhIUmNkSFJvYVhNdWFXNXVaWEpJVkUxTUlEMGdkR2hwY3k1a1lYUmhjMlYwTG5Ob2IzZDBaWGgwTzF4dVhIUmNkSDBnWld4elpTQjdYRzVjZEZ4MFhIUjBhR2x6TG1sdWJtVnlTRlJOVENBOUlIUm9hWE11WkdGMFlYTmxkQzVvYVdSbGRHVjRkRHRjYmx4MFhIUjlYRzVjYmx4MFhIUnphRzkzUTI5dWRHVnVkQzVqYkdGemMweHBjM1F1ZEc5bloyeGxLQ2RoWTNScGRtVW5LVHRjYmx4MFhIUnBaaUFvYzJodmQwTnZiblJsYm5RdVkyeGhjM05NYVhOMExtTnZiblJoYVc1ektDZGhZM1JwZG1VbktTa2dlMXh1WEhSY2RGeDBjMmh2ZDBOdmJuUmxiblF1YzNSNWJHVXViV0Y0U0dWcFoyaDBJRDBnYzJodmQwTnZiblJsYm5RdWMyTnliMnhzU0dWcFoyaDBJQ3NnSjNCNEp6dGNibHgwWEhSOUlHVnNjMlVnZTF4dVhIUmNkRngwYzJodmQwTnZiblJsYm5RdWMzUjViR1V1YldGNFNHVnBaMmgwSUQwZ1lESXljSGhnTzF4dVhIUmNkSDFjYmx4MGZWeHVYRzVjZEdWNGNHRnVaSE5OYjNKbExtWnZja1ZoWTJnb0tHSjBiaWtnUFQ0Z2UxeHVYSFJjZEdOdmJuTjBJR052Ym5SaGFXNWxja2hsYVdkb2RDQTlYRzVjZEZ4MFhIUmlkRzR1Y0dGeVpXNTBSV3hsYldWdWRDNXdjbVYyYVc5MWMwVnNaVzFsYm5SVGFXSnNhVzVuTG05bVpuTmxkRWhsYVdkb2REdGNibHh1WEhSY2RHTnZibk4wSUdWNGNHRnVaRVZzWlcxbGJuUklaV2xuYUhRZ1BWeHVYSFJjZEZ4MFluUnVMbkJoY21WdWRFVnNaVzFsYm5RdWNISmxkbWx2ZFhORmJHVnRaVzUwVTJsaWJHbHVaeTVtYVhKemRFVnNaVzFsYm5SRGFHbHNaQzV2Wm1aelpYUklaV2xuYUhRN1hHNWNibHgwWEhScFppQW9ZMjl1ZEdGcGJtVnlTR1ZwWjJoMElENDlJR1Y0Y0dGdVpFVnNaVzFsYm5SSVpXbG5hSFFwSUh0Y2JseDBYSFJjZEdKMGJpNXpkSGxzWlM1MmFYTnBZbWxzYVhSNUlEMGdKMmhwWkdSbGJpYzdYRzVjZEZ4MFhIUmlkRzR1YzNSNWJHVXVhR1ZwWjJoMElEMGdNRHRjYmx4MFhIUjlYRzVjZEZ4MFluUnVMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMk5zYVdOckp5d2daWGh3WVc1a0tUdGNibHgwZlNrN1hHNTlLVHRjYmlJc0ltUnZZM1Z0Wlc1MExtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0owUlBUVU52Ym5SbGJuUk1iMkZrWldRbkxDQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseDBZMjl1YzNRZ2JXOWtZV3hDZEc0Z1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5UVd4c0tDY3ViVzlrWVd3dFluUnVKeWs3WEhKY2JseDBZMjl1YzNRZ2JXOWtZV3hGYkNBOUlHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0NkdGIyUmhiQ2NwTzF4eVhHNWNkR052Ym5OMElHMXZaR0ZzUW5SdVEyeHZjMlVnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2duWTJ4dmMyVW5LVHRjY2x4dVhISmNibHgwTHk4Z1UyaHZkeUJ0YjJSaGJGeHlYRzVjZEcxdlpHRnNRblJ1TG1admNrVmhZMmdvS0cxdlpHRnNLU0E5UGlCN1hISmNibHgwWEhSdGIyUmhiQzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RqYkdsamF5Y3NJQ2dwSUQwK0lHMXZaR0ZzUld3dVkyeGhjM05NYVhOMExtRmtaQ2duYzJodmR5MXRiMlJoYkNjcEtUdGNjbHh1WEhSOUtUdGNjbHh1WEhKY2JseDBMeThnU0dsa1pTQnRiMlJoYkZ4eVhHNWNkRzF2WkdGc1FuUnVRMnh2YzJVdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblkyeHBZMnNuTENBb0tTQTlQbHh5WEc1Y2RGeDBiVzlrWVd4RmJDNWpiR0Z6YzB4cGMzUXVjbVZ0YjNabEtDZHphRzkzTFcxdlpHRnNKeWxjY2x4dVhIUXBPMXh5WEc1Y2NseHVYSFF2THlCSWFXUmxJRzF2WkdGc0lHOXVJRzkxZEhOcFpHVWdZMnhwWTJ0Y2NseHVYSFIzYVc1a2IzY3VZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25ZMnhwWTJzbkxDQW9aU2tnUFQ1Y2NseHVYSFJjZEdVdWRHRnlaMlYwSUQwOUlHMXZaR0ZzSUQ4Z2JXOWtZV3d1WTJ4aGMzTk1hWE4wTG5KbGJXOTJaU2duYzJodmR5MXRiMlJoYkNjcElEb2dabUZzYzJWY2NseHVYSFFwTzF4eVhHNTlLVHRjY2x4dUlpd2laRzlqZFcxbGJuUXVZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25SRTlOUTI5dWRHVnVkRXh2WVdSbFpDY3NJR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVYSFJqYjI1emRDQnVZWFpEYjI1MFlXbHVaWElnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2duYm1GMkxXTnZiblJoYVc1bGNpY3BPMXh5WEc1Y2RHTnZibk4wSUcxbGJuVkNkRzRnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2duYldWdWRTMWlkRzRuS1R0Y2NseHVYSFJqYjI1emRDQnVZWFpNYVhOMElEMGdaRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkRUo1U1dRb0oyNWhkaTFzYVhOMEp5azdYSEpjYmx4eVhHNWNkSGRwYm1SdmR5NWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZHpZM0p2Ykd3bkxDQW9aU2tnUFQ0Z2UxeHlYRzVjZEZ4MGFXWWdLR1J2WTNWdFpXNTBMbVJ2WTNWdFpXNTBSV3hsYldWdWRDNXpZM0p2Ykd4VWIzQWdQaUF3S1NCN1hISmNibHgwWEhSY2RHNWhka052Ym5SaGFXNWxjaTVqYkdGemMweHBjM1F1WVdSa0tDZHpkR2xqYTNrbktUdGNjbHh1WEhSY2RGeDBZblJ1VTJOeWIyeHNWRzlVYjNBdWMzUjViR1V1YjNCaFkybDBlU0E5SURFN1hISmNibHgwWEhSOUlHVnNjMlVnZTF4eVhHNWNkRngwWEhSdVlYWkRiMjUwWVdsdVpYSXVZMnhoYzNOTWFYTjBMbkpsYlc5MlpTZ25jM1JwWTJ0NUp5azdYSEpjYmx4MFhIUmNkR0owYmxOamNtOXNiRlJ2Vkc5d0xuTjBlV3hsTG05d1lXTnBkSGtnUFNBd08xeHlYRzVjZEZ4MGZWeHlYRzVjZEgwcE8xeHlYRzVjY2x4dVhIUnRaVzUxUW5SdUxtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0oyTnNhV05ySnl3Z0tHVXBJRDArSUh0Y2NseHVYSFJjZEcxbGJuVkNkRzR1WTJ4aGMzTk1hWE4wTG5SdloyZHNaU2duWTJ4cFkydGxaQ2NwTzF4eVhHNWNkRngwYm1GMlEyOXVkR0ZwYm1WeUxtTnNZWE56VEdsemRDNTBiMmRuYkdVb0oyOTJaWEpzWVhrbktUdGNjbHh1WEhSY2RHNWhka3hwYzNRdVkyeGhjM05NYVhOMExuUnZaMmRzWlNnbmMyaHZkeWNwTzF4eVhHNWNkSDBwTzF4eVhHNTlLVHRjY2x4dUlpd2laRzlqZFcxbGJuUXVZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25SRTlOUTI5dWRHVnVkRXh2WVdSbFpDY3NJR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVYSFF2THlCallYSnZkWE5sYkZ4eVhHNWNkR052Ym5OMElHTmhjbTkxYzJWc0lEMGdaRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkRUo1U1dRb0oyTmhjbTkxYzJWc0p5azdYSEpjYmx4MFkyOXVjM1FnY0hKbGRrSjBiaUE5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2R3Y21WMkp5azdYSEpjYmx4MFkyOXVjM1FnYm1WNGRFSjBiaUE5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2R1WlhoMEp5azdYSEpjYmx4MFkyOXVjM1FnWTJGeWIzVnpaV3hWY213Z1BTQW5MaTlxY3k5allYSnZkWE5sYkM1cWMyOXVKenRjY2x4dVhISmNibHgwYkdWMElHWnBjbk4wVTJ4cFpHVTdYSEpjYmx4MGJHVjBJR3hoYzNSVGJHbGtaVHRjY2x4dVhISmNibHgwWm5WdVkzUnBiMjRnWjJWMFUyeHBaR1Z6UkdGMFlTZ3BJSHRjY2x4dVhIUmNkSEpsZEhWeWJpQnVaWGNnVUhKdmJXbHpaU2dvY21WemIyeDJaU3dnY21WcVpXTjBLU0E5UGlCN1hISmNibHgwWEhSY2RHWmxkR05vS0dOaGNtOTFjMlZzVlhKc0tWeHlYRzVjZEZ4MFhIUmNkQzUwYUdWdUtDaHlaWE53S1NBOVBpQnlaWE53TG1wemIyNG9LU2xjY2x4dVhIUmNkRngwWEhRdWRHaGxiaWdvWkdGMFlTa2dQVDRnY21WemIyeDJaU2hrWVhSaEtTbGNjbHh1WEhSY2RGeDBYSFF1WTJGMFkyZ29LR1Z5Y2lrZ1BUNGdjbVZxWldOMEtHVnljaWtwTzF4eVhHNWNkRngwZlNrN1hISmNibHgwZlZ4eVhHNWNjbHh1WEhSaGMzbHVZeUJtZFc1amRHbHZiaUJrYVhOd2JHRjVRMkZ5YjNWelpXd29LU0I3WEhKY2JseDBYSFJqYjI1emRDQmtZWFJoVEdsemRDQTlJR0YzWVdsMElHZGxkRk5zYVdSbGMwUmhkR0VvS1R0Y2NseHVYSFJjZEdOdmJuTjBJSE5zYVdSbGMwRnljbUY1SUQwZ1pHRjBZVXhwYzNRdWMyeHBaR1Z6TzF4eVhHNWNjbHh1WEhSY2RITnNhV1JsYzBGeWNtRjVMbVp2Y2tWaFkyZ29LSE5zYVdSbExDQnpiR2xrWlU1MWJXSmxjaWtnUFQ0Z2UxeHlYRzVjZEZ4MFhIUnVaWGRUYkdsa1pTQTlJR1J2WTNWdFpXNTBMbU55WldGMFpVVnNaVzFsYm5Rb0oyUnBkaWNwTzF4eVhHNWNkRngwWEhSdVpYZFRiR2xrWlM1amJHRnpjMHhwYzNRdVlXUmtLQ2RqWVhKdmRYTmxiRjlmYzJ4cFpHVW5LVHRjY2x4dVhISmNibHgwWEhSY2RHNWxkMU5zYVdSbExtbHVibVZ5U0ZSTlRDQTlJR0JjY2x4dVhIUmNkRngwWEhSY2RGeDBQR1JwZGlCamJHRnpjejFjSW1OaGNtOTFjMlZzWDE5cGJXRm5aUzFqYjI1MFlXbHVaWEpjSWo1Y2NseHVYSFJjZEZ4MFhIUmNkRngwWEhROGFXMW5JSE55WXoxY0lpUjdjMnhwWkdVdWFXMWhaMlY5WENJZ1lXeDBQVndpYzJ4cFpHVXRhVzFuWENJZ0x6NWNjbHh1WEhSY2RGeDBYSFJjZEZ4MFBDOWthWFkrWEhKY2JseDBYSFJjZEZ4MFhIUmNkRHhrYVhZZ1kyeGhjM005WENKallYSnZkWE5sYkY5ZlkyOXVkR1Z1ZEZ3aVBseHlYRzVjZEZ4MFhIUmNkRngwWEhSY2REeG9NU0JqYkdGemN6MWNJbU5oY205MWMyVnNYMTkwYVhSc1pWd2lQaVI3YzJ4cFpHVXVkR2wwYkdWOVBDOW9NVDVjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFE4Y0NCamJHRnpjejFjSW1OaGNtOTFjMlZzWDE5a1pYTmpYQ0krSkh0emJHbGtaUzVqYjI1MFpXNTBmVHd2Y0Q1Y2NseHVYSFJjZEZ4MFhIUmNkRngwUEM5a2FYWStYSEpjYmx4MFhIUmNkR0E3WEhKY2JseHlYRzVjZEZ4MFhIUmpZWEp2ZFhObGJDNWhjSEJsYm1SRGFHbHNaQ2h1WlhkVGJHbGtaU2s3WEhKY2JseHlYRzVjZEZ4MFhIUnBaaUFvYzJ4cFpHVk9kVzFpWlhJZ1BUMDlJREFwSUh0Y2NseHVYSFJjZEZ4MFhIUm1hWEp6ZEZOc2FXUmxJRDBnYm1WM1UyeHBaR1U3WEhKY2JseDBYSFJjZEZ4MGJtVjNVMnhwWkdVdVkyeGhjM05NYVhOMExtRmtaQ2duWVdOMGFYWmxKeWs3WEhKY2JseDBYSFJjZEgwZ1pXeHpaU0JwWmlBb2MyeHBaR1ZPZFcxaVpYSWdLeUF4SUQwOVBTQmtZWFJoVEdsemRDNXpiR2xrWlhNdWJHVnVaM1JvS1NCN1hISmNibHgwWEhSY2RGeDBiR0Z6ZEZOc2FXUmxJRDBnYm1WM1UyeHBaR1U3WEhKY2JseDBYSFJjZEgxY2NseHVYSFJjZEgwcE8xeHlYRzVjY2x4dVhIUmNkRzVsZUhSVGJHbGtaU2dwTzF4eVhHNWNkRngwY0hKbGRtbHZkWE5UYkdsa1pTZ3BPMXh5WEc1Y2RIMWNjbHh1WEhKY2JseDBablZ1WTNScGIyNGdibVY0ZEZOc2FXUmxLQ2tnZTF4eVhHNWNkRngwWTI5dWMzUWdibVY0ZEVKMGJpQTlJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJDZVVsa0tDZHVaWGgwSnlrN1hISmNibHh5WEc1Y2RGeDBibVY0ZEVKMGJpNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZGpiR2xqYXljc0lDaGxLU0E5UGlCN1hISmNibHgwWEhSY2RHTnZibk4wSUdGamRHbDJaVk5zYVdSbElEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkxtTmhjbTkxYzJWc1gxOXpiR2xrWlM1aFkzUnBkbVVuS1R0Y2NseHVYSEpjYmx4MFhIUmNkR3hsZENCdVpYaDBVMmxpYkdsdVp5QTlJR0ZqZEdsMlpWTnNhV1JsTG01bGVIUkZiR1Z0Wlc1MFUybGliR2x1Wnp0Y2NseHVYSEpjYmx4MFhIUmNkR2xtSUNodVpYaDBVMmxpYkdsdVp5QTlQU0J1ZFd4c0tTQjdYSEpjYmx4MFhIUmNkRngwYm1WNGRGTnBZbXhwYm1jZ1BTQmhZM1JwZG1WVGJHbGtaVHRjY2x4dVhIUmNkRngwZlZ4eVhHNWNjbHh1WEhSY2RGeDBhV1lnS0c1bGVIUlRhV0pzYVc1bkxtTnNZWE56VEdsemRDNWpiMjUwWVdsdWN5Z25ZMkZ5YjNWelpXeGZYM05zYVdSbEp5a3BJSHRjY2x4dVhIUmNkRngwWEhSaFkzUnBkbVZUYkdsa1pTNWpiR0Z6YzB4cGMzUXVjbVZ0YjNabEtDZGhZM1JwZG1VbktUdGNjbHh1WEhSY2RGeDBYSFJ1WlhoMFUybGliR2x1Wnk1amJHRnpjMHhwYzNRdVlXUmtLQ2RoWTNScGRtVW5LVHRjY2x4dVhIUmNkRngwZlZ4eVhHNWNkRngwZlNrN1hISmNibHgwZlZ4eVhHNWNjbHh1WEhSbWRXNWpkR2x2YmlCd2NtVjJhVzkxYzFOc2FXUmxLQ2tnZTF4eVhHNWNkRngwWTI5dWMzUWdjSEpsZGtKMGJpQTlJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJDZVVsa0tDZHdjbVYySnlrN1hISmNibHh5WEc1Y2RGeDBjSEpsZGtKMGJpNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZGpiR2xqYXljc0lDaGxLU0E5UGlCN1hISmNibHgwWEhSY2RHTnZibk4wSUdGamRHbDJaVk5zYVdSbElEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkxtTmhjbTkxYzJWc1gxOXpiR2xrWlM1aFkzUnBkbVVuS1R0Y2NseHVYSEpjYmx4MFhIUmNkR3hsZENCdVpYaDBVMmxpYkdsdVp5QTlJR0ZqZEdsMlpWTnNhV1JsTG5CeVpYWnBiM1Z6Uld4bGJXVnVkRk5wWW14cGJtYzdYSEpjYmx4eVhHNWNkRngwWEhScFppQW9ibVY0ZEZOcFlteHBibWNnUFQwZ2JuVnNiQ2tnZTF4eVhHNWNkRngwWEhSY2RHNWxlSFJUYVdKc2FXNW5JRDBnWVdOMGFYWmxVMnhwWkdVN1hISmNibHgwWEhSY2RIMWNjbHh1WEhKY2JseDBYSFJjZEdsbUlDaHVaWGgwVTJsaWJHbHVaeTVqYkdGemMweHBjM1F1WTI5dWRHRnBibk1vSjJOaGNtOTFjMlZzWDE5emJHbGtaU2NwS1NCN1hISmNibHgwWEhSY2RGeDBZV04wYVhabFUyeHBaR1V1WTJ4aGMzTk1hWE4wTG5KbGJXOTJaU2duWVdOMGFYWmxKeWs3WEhKY2JseDBYSFJjZEZ4MGJtVjRkRk5wWW14cGJtY3VZMnhoYzNOTWFYTjBMbUZrWkNnbllXTjBhWFpsSnlrN1hISmNibHgwWEhSY2RIMWNjbHh1WEhSY2RIMHBPMXh5WEc1Y2RIMWNjbHh1WEhKY2JseDBhV1lnS0dOaGNtOTFjMlZzSUNFOVBTQnVkV3hzS1NCN1hISmNibHgwWEhRb1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc1Y2RGeDBYSFJrYVhOd2JHRjVRMkZ5YjNWelpXd29LVHRjY2x4dVhIUmNkSDBwS0NrN1hISmNibHgwZlZ4eVhHNTlLVHRjY2x4dUlpd2lkMmx1Wkc5M0xtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0owUlBUVU52Ym5SbGJuUk1iMkZrWldRbkxDQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseDBMeThnZEdGaWMxeHlYRzVjZEdOdmJuTjBJSFJoWWt4cGMzUkNkRzRnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlRV3hzS0NjdWRHRmlZMk52Y21ScGIyNWZYMnhwYzNRdFluUnVKeWs3WEhKY2JseDBZMjl1YzNRZ2RHRmljeUE5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSkJiR3dvSnk1MFlXSmpZMjl5WkdsdmJsOWZZMjl1ZEdGcGJtVnlKeWs3WEhKY2JseDBZMjl1YzNRZ2RHRmlZMk52Y21ScGIyNU1hWE4wSUQwZ1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvSjNSaFltTmpiM0prYVc5dUxXeHBjM1FuS1R0Y2NseHVYSFJqYjI1emRDQjBZV0p6UTI5dWRHVnVkQ0E5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSkJiR3dvSnk1MFlXSmpZMjl5WkdsdmJsOWZkR0ZpTFdsdWJtVnlKeWs3WEhKY2JseDBZMjl1YzNRZ2RHRmlZMk52Y21ScGIyNGdQU0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDZ25kR0ZpWTJOdmNtUnBiMjRuS1R0Y2NseHVYSEpjYmx4MFpuVnVZM1JwYjI0Z1lXTjBhWFpoZEdWVVlXSnpLQ2tnZTF4eVhHNWNkRngwZEdGaVRHbHpkRUowYmk1bWIzSkZZV05vS0NoMFlXSXBJRDArSUh0Y2NseHVYSFJjZEZ4MGRHRmlMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMk5zYVdOckp5d2dLR1VwSUQwK0lIdGNjbHh1WEhSY2RGeDBYSFJqYjI1emRDQjBZV0pPWVhZZ1BTQjBZV0l1Y0dGeVpXNTBSV3hsYldWdWREdGNjbHh1WEhSY2RGeDBYSFJqYjI1emRDQjBZV0p6UTI5dWRHRnBibVZ5SUQwZ2RHRmlUbUYyTG5CaGNtVnVkRVZzWlcxbGJuUXVjR0Z5Wlc1MFJXeGxiV1Z1ZER0Y2NseHVYSFJjZEZ4MFhIUmpiMjV6ZENCMFlXSk9kVzFpWlhJZ1BTQjBZV0l1WkdGMFlYTmxkQzVtYjNKVVlXSTdYSEpjYmx4MFhIUmNkRngwWTI5dWMzUWdkR0ZpVkc5QlkzUnBkbUYwWlNBOUlIUmhZbk5EYjI1MFlXbHVaWEl1Y1hWbGNubFRaV3hsWTNSdmNpaGNjbHh1WEhSY2RGeDBYSFJjZEdBdWRHRmlZMk52Y21ScGIyNWZYM1JoWWx0a1lYUmhMWFJoWWoxY0lpUjdkR0ZpVG5WdFltVnlmVndpWFdCY2NseHVYSFJjZEZ4MFhIUXBPMXh5WEc1Y2NseHVYSFJjZEZ4MFhIUjBZV0pPWVhZdWNYVmxjbmxUWld4bFkzUnZja0ZzYkNnbkxuUmhZbU5qYjNKa2FXOXVYMTlzYVhOMExXSjBiaWNwTG1admNrVmhZMmdvS0dKMGJpa2dQVDRnZTF4eVhHNWNkRngwWEhSY2RGeDBZblJ1TG1Oc1lYTnpUR2x6ZEM1eVpXMXZkbVVvSjJOMWNuSmxiblFuS1R0Y2NseHVYSFJjZEZ4MFhIUjlLVHRjY2x4dVhISmNibHgwWEhSY2RGeDBkR0ZpYzBOdmJuUmhhVzVsY2k1eGRXVnllVk5sYkdWamRHOXlRV3hzS0NjdWRHRmlZMk52Y21ScGIyNWZYM1JoWWljcExtWnZja1ZoWTJnb0tIUmhZaWtnUFQ0Z2UxeHlYRzVjZEZ4MFhIUmNkRngwZEdGaUxtTnNZWE56VEdsemRDNXlaVzF2ZG1Vb0oyTjFjbkpsYm5RbktUdGNjbHh1WEhSY2RGeDBYSFI5S1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwZEdGaUxtTnNZWE56VEdsemRDNWhaR1FvSjJOMWNuSmxiblFuS1R0Y2NseHVYSFJjZEZ4MFhIUjBZV0pVYjBGamRHbDJZWFJsTG1Oc1lYTnpUR2x6ZEM1aFpHUW9KMk4xY25KbGJuUW5LVHRjY2x4dVhISmNibHgwWEhSY2RGeDBhV1lnS0hkcGJtUnZkeTVwYm01bGNsZHBaSFJvSUQ0OUlEWXdNQ2tnZTF4eVhHNWNkRngwWEhSY2RGeDBkR0ZpYzBOdmJuUmxiblF1Wm05eVJXRmphQ2dvZEdGaWN5a2dQVDRnZTF4eVhHNWNkRngwWEhSY2RGeDBYSFIwWVdKekxuTjBlV3hsTG0xaGVFaGxhV2RvZENBOUlIUmhZbk11YzJOeWIyeHNTR1ZwWjJoMElDc2dKM0I0Snp0Y2NseHVYSFJjZEZ4MFhIUmNkSDBwTzF4eVhHNWNkRngwWEhSY2RIMWNjbHh1WEhSY2RGeDBmU2s3WEhKY2JseDBYSFI5S1R0Y2NseHVYSEpjYmx4MFhIUnBaaUFvZEdGaVkyTnZjbVJwYjI1TWFYTjBLU0I3WEhKY2JseDBYSFJjZEhSaFluTXVabTl5UldGamFDZ29kR0ZpS1NBOVBpQjdYSEpjYmx4MFhIUmNkRngwZEdGaUxuRjFaWEo1VTJWc1pXTjBiM0lvSnk1MFlXSmpZMjl5WkdsdmJsOWZiR2x6ZENBdWRHRmlZMk52Y21ScGIyNWZYMkowYmljcExtTnNhV05yS0NrN1hISmNibHgwWEhSY2RIMHBPMXh5WEc1Y2RGeDBmVnh5WEc1Y2RIMWNjbHh1WEhKY2JseDBMeTh2THk4Z1lXTmpiM0prYVc5dVhISmNibHgwWTI5dWMzUWdZV05qYjNKa2FXOXVRblJ1SUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZja0ZzYkNnbkxtRmpZMjl5WkdsdmJsOWZiR2x6ZEMxaWRHNG5LVHRjY2x4dVhISmNibHgwWm5WdVkzUnBiMjRnWVdOMGFYWmhkR1ZCWTJOdmNtUnBiMjRvS1NCN1hISmNibHgwWEhSaFkyTnZjbVJwYjI1Q2RHNHVabTl5UldGamFDZ29ZblJ1S1NBOVBpQjdYSEpjYmx4MFhIUmNkR0owYmk1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkamJHbGpheWNzSUNncElEMCtJSHRjY2x4dVhIUmNkRngwWEhRdkx5QmphR1ZqYXlCbWIzSWdiM0JsYmlCaFkyTnZjbVJwYjI1Y2NseHVYSFJjZEZ4MFhIUmpiMjV6ZENCaFkyTnZjbVJwYjI1Q2RHNVBjR1Z1SUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWhjY2x4dVhIUmNkRngwWEhSY2RDY3VZV05qYjNKa2FXOXVYMTlzYVhOMExXSjBiaTV2Y0dWdUoxeHlYRzVjZEZ4MFhIUmNkQ2s3WEhKY2JseHlYRzVjZEZ4MFhIUmNkR2xtSUNoaFkyTnZjbVJwYjI1Q2RHNVBjR1Z1SUNZbUlHRmpZMjl5WkdsdmJrSjBiazl3Wlc0Z0lUMDlJR0owYmlrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwTHk4Z2FXWWdkR2hsY21VZ2FYTWdiM0JsYmlCMGFHVnVJSEpsYlc5MlpTQnZjR1Z1SUdOc1lYTnpJR0Z1WkNCelpYUWdiV0Y0YUdWcFoyaDBJSFJ2SURCY2NseHVYSFJjZEZ4MFhIUmNkR0ZqWTI5eVpHbHZia0owYms5d1pXNHVZMnhoYzNOTWFYTjBMblJ2WjJkc1pTZ25iM0JsYmljcE8xeHlYRzVjZEZ4MFhIUmNkRngwWVdOamIzSmthVzl1UW5SdVQzQmxiaTV1WlhoMFJXeGxiV1Z1ZEZOcFlteHBibWN1YzNSNWJHVXViV0Y0U0dWcFoyaDBJRDBnTUR0Y2NseHVYSFJjZEZ4MFhIUjlYSEpjYmx4eVhHNWNkRngwWEhSY2RDOHZJSE5sZENCdmNHVnVJR05zWVhOeklIUnZJR1YyWlhKNUlHTnNhV05yWldRZ1lXTmpiM0prYVc5dUlHSjBibHh5WEc1Y2RGeDBYSFJjZEdKMGJpNWpiR0Z6YzB4cGMzUXVkRzluWjJ4bEtDZHZjR1Z1SnlrN1hISmNibHgwWEhSY2RGeDBZMjl1YzNRZ1lXTmpiM0prYVc5dVFtOWtlU0E5SUdKMGJpNXVaWGgwUld4bGJXVnVkRk5wWW14cGJtYzdYSEpjYmx4eVhHNWNkRngwWEhSY2RHbG1JQ2hpZEc0dVkyeGhjM05NYVhOMExtTnZiblJoYVc1ektDZHZjR1Z1SnlrcElIdGNjbHh1WEhSY2RGeDBYSFJjZEdGalkyOXlaR2x2YmtKdlpIa3VjM1I1YkdVdWJXRjRTR1ZwWjJoMElEMGdZV05qYjNKa2FXOXVRbTlrZVM1elkzSnZiR3hJWldsbmFIUWdLeUFuY0hnbk8xeHlYRzVjZEZ4MFhIUmNkSDBnWld4elpTQjdYSEpjYmx4MFhIUmNkRngwWEhSaFkyTnZjbVJwYjI1Q2IyUjVMbk4wZVd4bExtMWhlRWhsYVdkb2RDQTlJREE3WEhKY2JseDBYSFJjZEZ4MGZWeHlYRzVjZEZ4MFhIUjlLVHRjY2x4dVhIUmNkSDBwTzF4eVhHNWNjbHh1WEhSY2RIZHBibVJ2ZHk1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkeVpYTnBlbVVuTENBb1pTa2dQVDRnZTF4eVhHNWNkRngwWEhScFppQW9kMmx1Wkc5M0xtbHVibVZ5VjJsa2RHZ2dQQ0EyTURBcElIdGNjbHh1WEhSY2RGeDBYSFIwWVdKelEyOXVkR1Z1ZEM1bWIzSkZZV05vS0NoMFlXSnpLU0E5UGlCN1hISmNibHgwWEhSY2RGeDBYSFIwWVdKekxuTjBlV3hsTG0xaGVFaGxhV2RvZENBOUlEQTdYSEpjYmx4MFhIUmNkRngwWEhScFppQW9kR0ZpY3k1d2NtVjJhVzkxYzBWc1pXMWxiblJUYVdKc2FXNW5MbU5zWVhOelRHbHpkQzVqYjI1MFlXbHVjeWduYjNCbGJpY3BLU0I3WEhKY2JseDBYSFJjZEZ4MFhIUmNkSFJoWW5NdWNISmxkbWx2ZFhORmJHVnRaVzUwVTJsaWJHbHVaeTVqYkdGemMweHBjM1F1Y21WdGIzWmxLQ2R2Y0dWdUp5azdYSEpjYmx4MFhIUmNkRngwWEhSOVhISmNibHgwWEhSY2RGeDBmU2s3WEhKY2JseDBYSFJjZEgxY2NseHVYSFJjZEgwcE8xeHlYRzVjZEgxY2NseHVYSEpjYmx4MGFXWWdLSFJoWW1OamIzSmthVzl1S1NCN1hISmNibHgwWEhSaFkzUnBkbUYwWlZSaFluTW9LVHRjY2x4dVhIUmNkR0ZqZEdsMllYUmxRV05qYjNKa2FXOXVLQ2s3WEhKY2JseDBmVnh5WEc1OUtUdGNjbHh1SWwwc0luTnZkWEpqWlZKdmIzUWlPaUlpZlE9PSJ9
