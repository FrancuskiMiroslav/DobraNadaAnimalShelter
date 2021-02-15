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

/***/ "./src/js/animals.json":
/*!*****************************!*\
  !*** ./src/js/animals.json ***!
  \*****************************/
/*! exports provided: animals, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"animals\":[{\"dogs\":[{\"number\":1,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"brown\",\"white\"],\"weight\":14,\"height\":\"\",\"coat\":\"\",\"birth\":\"January 1, 2013\",\"name\":\"Alisa\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/alisa.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":2,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"brown\",\"ginger\"],\"weight\":11,\"height\":\"\",\"coat\":\"\",\"birth\":2017,\"name\":\"Riči\",\"gender\":\"male\",\"image\":\"./assets/images/dogs/notavailable.gif\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":3,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"brown\",\"black\"],\"weight\":25,\"height\":\"\",\"coat\":\"\",\"birth\":2010,\"name\":\"Lina\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/lina.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":4,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"gray\",\"white\"],\"weight\":15,\"height\":\"\",\"coat\":\"\",\"birth\":2011,\"name\":\"Flekica\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/flekica.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\",\"adopted\":\"yes\"},{\"number\":5,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"brown\"],\"weight\":12,\"height\":\"\",\"coat\":\"\",\"birth\":2012,\"name\":\"Danica\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/danica.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":6,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"black\",\"white\"],\"weight\":21,\"height\":\"\",\"coat\":\"\",\"birth\":2013,\"name\":\"Lena\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/notavailable.gif\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":7,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"black\"],\"weight\":14,\"height\":\"\",\"coat\":\"\",\"birth\":2014,\"name\":\"Cuca\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/notavailable.gif\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":8,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"brown\"],\"weight\":9,\"height\":\"\",\"coat\":\"\",\"birth\":2015,\"name\":\"Ribica\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/ribica.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":9,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"brown\"],\"weight\":18,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Kika\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/notavailable.gif\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":10,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"black\",\"white\"],\"weight\":20,\"height\":\"\",\"coat\":\"\",\"birth\":2017,\"name\":\"Abba\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/abba.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":11,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"orange\",\"brown\",\"black\"],\"weight\":\"30+\",\"height\":\"\",\"coat\":\"\",\"birth\":2018,\"name\":\"Pluton\",\"gender\":\"male\",\"image\":\"./assets/images/dogs/pluton.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":12,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"chocolate\"],\"weight\":13,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Didra\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/didra.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":13,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"black\",\"brown\"],\"weight\":14,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Raja\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/notavailable.gif\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":14,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"black\"],\"weight\":12,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Ljubica\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/ljubica.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":15,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"black\"],\"weight\":23,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Lada\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/Lada.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":16,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"brown\"],\"weight\":23,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Dejsi\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/dejsi.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":17,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"black\",\"cream\"],\"weight\":18,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Bogar\",\"gender\":\"male\",\"image\":\"./assets/images/dogs/bogar.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":18,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"black\"],\"weight\":13,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Perse\",\"gender\":\"male\",\"image\":\"./assets/images/dogs/notavailable.gif\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":19,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"yellow\",\"brown\"],\"weight\":11,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Barni\",\"gender\":\"male\",\"image\":\"./assets/images/dogs/barni.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":20,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"black\"],\"weight\":8,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Semi Džo\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/semidzo.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":21,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"black\",\"white\"],\"weight\":11,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Bongo\",\"gender\":\"male\",\"image\":\"./assets/images/dogs/bongo.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":22,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"black\",\"brown\"],\"weight\":15,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Luna\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/luna.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":23,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"black\",\"brown\"],\"weight\":7,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Djina\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/djina.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":24,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"gray\",\"brown\"],\"weight\":9,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Foksi\",\"gender\":\"male\",\"image\":\"./assets/images/dogs/notavailable.gif\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":25,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"gray\",\"black\"],\"weight\":18,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Kvana\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/kvana.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":26,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"brown\",\"white\"],\"weight\":18,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Mila\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/mila.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":27,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"black\"],\"weight\":14,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Kasja\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/notavailable.gif\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":28,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"yellow\",\"white\"],\"weight\":18,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Lili\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/lili.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":29,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"brown\"],\"weight\":19,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Bak\",\"gender\":\"male\",\"image\":\"./assets/images/dogs/bak.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":30,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"black\"],\"weight\":18,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Ali\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/ali.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":31,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"white\",\"brown\"],\"weight\":19,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Viktor\",\"gender\":\"male\",\"image\":\"./assets/images/dogs/notavailable.gif\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":32,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"yellow\",\"white\"],\"weight\":12,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Oskar\",\"gender\":\"male\",\"image\":\"./assets/images/dogs/oskar.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":33,\"species\":\"dog\",\"breed\":\"Labrador\",\"color\":[\"yellow\"],\"weight\":\"30+\",\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Sara\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/sara.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":34,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"black\"],\"weight\":\"30+\",\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Mr. Spock\",\"gender\":\"male\",\"image\":\"./assets/images/dogs/mrspock.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":35,\"species\":\"dog\",\"breed\":\"Staffordshire Bull Terrier\",\"color\":[\"yellow\"],\"weight\":20,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Niki\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/notavailable.gif\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":36,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"black\",\"brown\"],\"weight\":\"30+\",\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Bukši\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/buksi.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":37,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"black\",\"brown\"],\"weight\":9,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Frenki\",\"gender\":\"male\",\"image\":\"./assets/images/dogs/frenki.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":38,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"gold\",\"white\"],\"weight\":12,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Lolo\",\"gender\":\"male\",\"image\":\"./assets/images/dogs/lolo.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":39,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"black\"],\"weight\":14,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Ogi\",\"gender\":\"male\",\"image\":\"./assets/images/dogs/ogi.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":40,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"chocolate\"],\"weight\":12,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Magi\",\"gender\":\"male\",\"image\":\"./assets/images/dogs/magi.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":41,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"yellow\",\"brown\"],\"weight\":15,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Dunja\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/dunja.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":42,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"brown\",\"yellow\"],\"weight\":21,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Vučka\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/vucka.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":43,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"yellow\"],\"weight\":\"30+\",\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Bruno\",\"gender\":\"male\",\"image\":\"./assets/images/dogs/notavailable.gif\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":44,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"yellow\"],\"weight\":\"30+\",\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Pako\",\"gender\":\"male\",\"image\":\"./assets/images/dogs/pako.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"}],\"cats\":[{\"number\":1,\"species\":\"cat\",\"breed\":\"\",\"color\":[\"grey\"],\"weight\":\"\",\"height\":\"\",\"coat\":\"\",\"birth\":\"\",\"name\":\"Medena\",\"gender\":\"\",\"image\":\"./assets/images/cats/medena.jpg\",\"desc\":\"This beautiful cat had health issues her family couldn’t take care of, so she came to us, and we quickly found her a place in our shelter. She is a very lovable 4 yr old female domestic shorthair cat and she weighs 10 pounds. Lavender is all about affection and looking for that special person to spend the rest of her life with. She is wonderful indoors and she enjoys dry cat food.\"},{\"number\":2,\"species\":\"cat\",\"breed\":\"\",\"color\":[],\"weight\":\"\",\"height\":\"\",\"coat\":\"\",\"birth\":\"\",\"name\":\"Makica\",\"gender\":\"\",\"image\":\"./assets/images/cats/makica.jpg\",\"desc\":\"This beautiful cat had health issues her family couldn’t take care of, so she came to us, and we quickly found her a place in our shelter. She is a very lovable 4 yr old female domestic shorthair cat and she weighs 10 pounds. Lavender is all about affection and looking for that special person to spend the rest of her life with. She is wonderful indoors and she enjoys dry cat food.\"},{\"number\":3,\"species\":\"cat\",\"breed\":\"\",\"color\":[\"black\",\"white\"],\"weight\":\"\",\"height\":\"\",\"coat\":\"\",\"birth\":\"\",\"name\":\"Vesela\",\"gender\":\"\",\"image\":\"./assets/images/cats/vesela.jpg\",\"desc\":\"This beautiful cat had health issues her family couldn’t take care of, so she came to us, and we quickly found her a place in our shelter. She is a very lovable 4 yr old female domestic shorthair cat and she weighs 10 pounds. Lavender is all about affection and looking for that special person to spend the rest of her life with. She is wonderful indoors and she enjoys dry cat food.\"},{\"number\":4,\"species\":\"cat\",\"breed\":\"\",\"color\":[\"black\",\"white\"],\"weight\":\"\",\"height\":\"\",\"coat\":\"\",\"birth\":\"\",\"name\":\"Rajna\",\"gender\":\"\",\"image\":\"./assets/images/cats/rajna.jpg\",\"desc\":\"This beautiful cat had health issues her family couldn’t take care of, so she came to us, and we quickly found her a place in our shelter. She is a very lovable 4 yr old female domestic shorthair cat and she weighs 10 pounds. Lavender is all about affection and looking for that special person to spend the rest of her life with. She is wonderful indoors and she enjoys dry cat food.\"},{\"number\":5,\"species\":\"cat\",\"breed\":\"\",\"color\":[\"black\",\"white\"],\"weight\":\"\",\"height\":\"\",\"coat\":\"\",\"birth\":\"\",\"name\":\"Vesela\",\"gender\":\"\",\"image\":\"./assets/images/cats/vesela.jpg\",\"desc\":\"This beautiful cat had health issues her family couldn’t take care of, so she came to us, and we quickly found her a place in our shelter. She is a very lovable 4 yr old female domestic shorthair cat and she weighs 10 pounds. Lavender is all about affection and looking for that special person to spend the rest of her life with. She is wonderful indoors and she enjoys dry cat food.\"}]}]}");

/***/ }),

/***/ "./src/js/carousel.json":
/*!******************************!*\
  !*** ./src/js/carousel.json ***!
  \******************************/
/*! exports provided: slides, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"slides\":[{\"title\":\"Slide1 naslov\",\"type\":\"\",\"content\":\"Slide1 tekst\",\"image\":\"./assets/images/carousel/slide1.jpg\",\"imageTab\":\"./assets/images/carousel/slide1-tab.jpg\",\"imageMob\":\"./assets/images/carousel/slide1-mob.jpg\"},{\"title\":\"Slide2 naslov\",\"type\":\"\",\"content\":\"Slide2 tekst\",\"image\":\"./assets/images/carousel/slide2.jpg\",\"imageTab\":\"./assets/images/carousel/slide2-tab.jpg\",\"imageMob\":\"./assets/images/carousel/slide2-mob.jpg\"},{\"title\":\"Slide3 naslov\",\"type\":\"\",\"content\":\"Slide3 tekst\",\"image\":\"./assets/images/carousel/slide3.jpg\",\"imageTab\":\"./assets/images/carousel/slide3-tab.jpg\",\"imageMob\":\"./assets/images/carousel/slide3-mob.jpg\"},{\"title\":\"Slide4 naslov\",\"type\":\"\",\"content\":\"Slide4 tekst\",\"image\":\"./assets/images/carousel/slide4.jpg\",\"imageTab\":\"./assets/images/carousel/slide4-tab.jpg\",\"imageMob\":\"./assets/images/carousel/slide4-mob.jpg\"}]}");

/***/ }),

/***/ "./src/js/fetchAnimalsData.js":
/*!************************************!*\
  !*** ./src/js/fetchAnimalsData.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

document.addEventListener('DOMContentLoaded', function () {
	const animalsUrl = '../js/animals.json';
	const animalsPages = document.getElementById('animals-pages');
	const dogsBox = document.getElementById('dogs-box');
	const catsBox = document.getElementById('cats-box');

	const localAnimalsJSON = __webpack_require__(/*! ./animals.json */ "./src/js/animals.json");

	/* const getAnimalsData = async () => {
		const response = await fetch(animalsUrl);
		const data = await response.json();

		return data;
	}; */

	const dogNumber = document.getElementById('dogNumber');
	const catNumber = document.getElementById('catNumber');

	async function displayAnimalNumbers() {
		/* const dataList = await getAnimalsData(); */

		const animalsArray = localAnimalsJSON.animals;

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
		/* const dataList = await getAnimalsData(); */
		const animalsArray = localAnimalsJSON.animals;

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
/***/ (function(module, exports, __webpack_require__) {

document.addEventListener('DOMContentLoaded', function () {
	// carousel
	const carousel = document.getElementById('carousel');
	const carouselUrl = './js/carousel.json';
	const localCarouselJSON = __webpack_require__(/*! ./carousel.json */ "./src/js/carousel.json");

	/* function getSlidesData() {
		return new Promise((resolve, reject) => {
			fetch(carouselUrl)
				.then((resp) => resp.json())
				.then((data) => resolve(data))
				.catch((err) => reject(err));
		});
	} */

	async function displayCarousel() {
		/* const dataList = await getSlidesData(); */
		const slidesArray = localCarouselJSON.slides;

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
			} else if (slideNumber + 1 === localCarouselJSON.slides.length) {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Fkb3B0Q29udGVudFN3aXRjaGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9mZXRjaEFuaW1hbHNEYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9mb3JtVmFsaWRhaXRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL25hdi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy90YWJjY29yZGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7QUFDSCxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhEQUE4RCxPQUFPO0FBQ3JFO0FBQ0EsZ0NBQWdDLE9BQU87QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCLG1CQUFPLENBQUMsNkNBQWdCOztBQUVsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkM7O0FBRTdDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLDZDQUE2QztBQUM3Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx5Q0FBeUMsTUFBTSxTQUFTLEtBQUssR0FBRyxRQUFRLEVBQUU7QUFDMUU7QUFDQTtBQUNBLDBEQUEwRCxLQUFLO0FBQy9EO0FBQ0EsS0FBSztBQUNMO0FBQ0EsOEVBQThFLFFBQVEsRUFBRSxPQUFPO0FBQy9GO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxRQUFRLEVBQUUsT0FBTztBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFLE9BQU87QUFDakY7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFLE9BQU87QUFDakY7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFLE1BQU07QUFDaEY7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLDBCQUEwQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsMEJBQTBCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBLCtDQUErQywwQkFBMEI7QUFDekU7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFLEtBQUs7QUFDL0U7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFLE9BQU87QUFDakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx5Q0FBeUMsVUFBVSxTQUFTLFNBQVM7QUFDckU7QUFDQSxLQUFLLEVBQUU7QUFDUDtBQUNBO0FBQ0EsMERBQTBELFNBQVM7QUFDbkU7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLEVBQUUsV0FBVztBQUM5QjtBQUNBLDBDQUEwQztBQUMxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0UsWUFBWTtBQUM1RTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRSxTQUFTO0FBQ25GO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxrQ0FBa0M7QUFDakY7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGtDQUFrQztBQUNqRjtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0Msa0NBQWtDO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxrQkFBa0IsbUJBQW1CO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNybUJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDLHlCQUF5Qiw2QkFBNkIsSUFBSSxRQUFRLElBQUksUUFBUSxJQUFJLFFBQVEsSUFBSSxnQ0FBZ0MsR0FBRztBQUNsSztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ3ZGRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFOztBQUVGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOzs7Ozs7Ozs7Ozs7QUNoREQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ25CRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7Ozs7Ozs7Ozs7OztBQ3BCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixtQkFBTyxDQUFDLCtDQUFpQjs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7O0FBRUY7QUFDQSw0Q0FBNEM7QUFDNUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0EscUNBQXFDLFlBQVk7QUFDakQsbUNBQW1DLGNBQWM7QUFDakQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUMxRkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsVUFBVTtBQUM5Qzs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLElBQUk7QUFDSixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcblx0aGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgbnVsbCwgJyAnKTtcclxuXHRjb25zdCB0YWJTd2l0Y2hlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1zd2l0Y2hlcl0nKTtcclxuXHJcblx0dGFiU3dpdGNoZXJzLmZvckVhY2goKHRhYlN3aXRjaCkgPT4ge1xyXG5cdFx0Y29uc3QgdGFiU3dpdGNoZXIgPSB0YWJTd2l0Y2g7XHJcblx0XHRjb25zdCBwYWdlSWQgPSB0YWJTd2l0Y2hlci5kYXRhc2V0LnRhYjtcclxuXHJcblx0XHR0YWJTd2l0Y2hlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0XHRcdGRvY3VtZW50XHJcblx0XHRcdFx0LnF1ZXJ5U2VsZWN0b3IoJy5hZG9wdF9fbGlzdC1pdGVtLmFjdGl2ZScpXHJcblx0XHRcdFx0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cclxuXHRcdFx0dGFiU3dpdGNoZXIucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cclxuXHRcdFx0c3dpdGNoUGFnZShwYWdlSWQpO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcblxyXG5cdGZ1bmN0aW9uIHN3aXRjaFBhZ2UocGFnZUlkKSB7XHJcblx0XHRjb25zdCBjdXJyZW50UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLmFjdGl2ZScpO1xyXG5cdFx0Y29uc3QgY3VycmVudFBhZ2VIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS1oZWFkZXIuYWN0aXZlJyk7XHJcblxyXG5cdFx0Y3VycmVudFBhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0XHRjdXJyZW50UGFnZUhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHJcblx0XHRjb25zdCBuZXh0UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wYWdlW2RhdGEtcGFnZT1cIiR7cGFnZUlkfVwiXWApO1xyXG5cdFx0Y29uc3QgbmV4dFBhZ2VIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHRgLnBhZ2UtaGVhZGVyW2RhdGEtaGVhZGVyPVwiJHtwYWdlSWR9XCJdYFxyXG5cdFx0KTtcclxuXHRcdG5leHRQYWdlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdFx0bmV4dFBhZ2VIZWFkZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblx0fVxyXG59KTtcclxuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuXHRjb25zdCBhbmltYWxzVXJsID0gJy4uL2pzL2FuaW1hbHMuanNvbic7XHJcblx0Y29uc3QgYW5pbWFsc1BhZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FuaW1hbHMtcGFnZXMnKTtcclxuXHRjb25zdCBkb2dzQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RvZ3MtYm94Jyk7XHJcblx0Y29uc3QgY2F0c0JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRzLWJveCcpO1xyXG5cclxuXHRjb25zdCBsb2NhbEFuaW1hbHNKU09OID0gcmVxdWlyZSgnLi9hbmltYWxzLmpzb24nKTtcclxuXHJcblx0LyogY29uc3QgZ2V0QW5pbWFsc0RhdGEgPSBhc3luYyAoKSA9PiB7XHJcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFuaW1hbHNVcmwpO1xyXG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcblx0XHRyZXR1cm4gZGF0YTtcclxuXHR9OyAqL1xyXG5cclxuXHRjb25zdCBkb2dOdW1iZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG9nTnVtYmVyJyk7XHJcblx0Y29uc3QgY2F0TnVtYmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdE51bWJlcicpO1xyXG5cclxuXHRhc3luYyBmdW5jdGlvbiBkaXNwbGF5QW5pbWFsTnVtYmVycygpIHtcclxuXHRcdC8qIGNvbnN0IGRhdGFMaXN0ID0gYXdhaXQgZ2V0QW5pbWFsc0RhdGEoKTsgKi9cclxuXHJcblx0XHRjb25zdCBhbmltYWxzQXJyYXkgPSBsb2NhbEFuaW1hbHNKU09OLmFuaW1hbHM7XHJcblxyXG5cdFx0bGV0IGRvZ3NBcnJheU51bWJlciA9IGFuaW1hbHNBcnJheVswXS5kb2dzLmxlbmd0aDtcclxuXHRcdGxldCBjYXRzQXJyYXlOdW1iZXIgPSBhbmltYWxzQXJyYXlbMF0uY2F0cy5sZW5ndGg7XHJcblxyXG5cdFx0ZG9nTnVtYmVyLmlubmVyVGV4dCA9IGRvZ3NBcnJheU51bWJlcjtcclxuXHRcdGNhdE51bWJlci5pbm5lclRleHQgPSBjYXRzQXJyYXlOdW1iZXI7XHJcblx0fVxyXG5cclxuXHRpZiAoKGRvZ051bWJlciwgY2F0TnVtYmVyKSkge1xyXG5cdFx0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0ZGlzcGxheUFuaW1hbE51bWJlcnMoKTtcclxuXHRcdH0pKCk7XHJcblx0fVxyXG5cclxuXHRhc3luYyBmdW5jdGlvbiBkaXNwbGF5QW5pbWFscygpIHtcclxuXHRcdC8qIGNvbnN0IGRhdGFMaXN0ID0gYXdhaXQgZ2V0QW5pbWFsc0RhdGEoKTsgKi9cclxuXHRcdGNvbnN0IGFuaW1hbHNBcnJheSA9IGxvY2FsQW5pbWFsc0pTT04uYW5pbWFscztcclxuXHJcblx0XHRhbmltYWxzQXJyYXkuZm9yRWFjaCgoYW5pbWFsKSA9PiB7XHJcblx0XHRcdGRvZ3NBcnJheSA9IGFuaW1hbC5kb2dzO1xyXG5cdFx0XHRjYXRzQXJyYXkgPSBhbmltYWwuY2F0cztcclxuXHJcblx0XHRcdGRvZ3NBcnJheS5mb3JFYWNoKChkb2cpID0+IHtcclxuXHRcdFx0XHRjb25zdCB7XHJcblx0XHRcdFx0XHRudW1iZXIsXHJcblx0XHRcdFx0XHRzcGVjaWVzLFxyXG5cdFx0XHRcdFx0YnJlZWQsXHJcblx0XHRcdFx0XHRjb2xvcixcclxuXHRcdFx0XHRcdHdlaWdodCxcclxuXHRcdFx0XHRcdGhlaWdodCxcclxuXHRcdFx0XHRcdGNvYXQsXHJcblx0XHRcdFx0XHRiaXJ0aCxcclxuXHRcdFx0XHRcdG5hbWUsXHJcblx0XHRcdFx0XHRnZW5kZXIsXHJcblx0XHRcdFx0XHRpbWFnZSxcclxuXHRcdFx0XHRcdGRlc2MsXHJcblx0XHRcdFx0XHRhZG9wdGVkLFxyXG5cdFx0XHRcdH0gPSBkb2c7XHJcblxyXG5cdFx0XHRcdGRvZ0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0XHRcdGRvZ0JveC5jbGFzc0xpc3QuYWRkKCdwYWdlX19ib3gnKTtcclxuXHRcdFx0XHRhZG9wdGVkID09PSAneWVzJyA/IGRvZ0JveC5jbGFzc0xpc3QuYWRkKCdhZG9wdGVkJykgOiAnJztcclxuXHJcblx0XHRcdFx0Y29uc3QgZG9nWWVhcnMgPSBiaXJ0aDtcclxuXHJcblx0XHRcdFx0Y29uc3QgbWlsaXNlY3NCZXR3ZWVuRE9CYW5kMTk3MCA9IERhdGUucGFyc2UoZG9nWWVhcnMpO1xyXG5cdFx0XHRcdGNvbnN0IG1pbGlzZWNzQmV0d2Vlbk5PV2FuZDE5NzAgPSBEYXRlLm5vdygpO1xyXG5cdFx0XHRcdGNvbnN0IGFnZUluTWlsaXNlY3MgPVxyXG5cdFx0XHRcdFx0bWlsaXNlY3NCZXR3ZWVuTk9XYW5kMTk3MCAtIG1pbGlzZWNzQmV0d2VlbkRPQmFuZDE5NzA7XHJcblxyXG5cdFx0XHRcdGNvbnN0IG1pbGlzZWNzID0gYWdlSW5NaWxpc2VjcztcclxuXHRcdFx0XHRjb25zdCBzZWNzID0gMTAwMDtcclxuXHRcdFx0XHRjb25zdCBtaW5zID0gc2VjcyAqIDYwO1xyXG5cdFx0XHRcdGNvbnN0IGhvdXIgPSBtaW5zICogNjA7XHJcblx0XHRcdFx0Y29uc3QgZGF5ID0gaG91ciAqIDI0O1xyXG5cdFx0XHRcdGNvbnN0IHllYXIgPSBkYXkgKiAzNjU7XHJcblxyXG5cdFx0XHRcdGxldCB5ZWFycyA9IE1hdGgucm91bmQobWlsaXNlY3MgLyB5ZWFyKTtcclxuXHJcblx0XHRcdFx0ZG9nQm94LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2VfX2JveC10b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLiR7aW1hZ2V9XCIgYWx0PVwiJHtuYW1lfSAke3NwZWNpZXN9XCJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlX19ib3gtYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJwYWdlX19ib3gtdGl0bGVcIj4ke25hbWV9JHtcclxuXHRcdFx0XHRcdGFkb3B0ZWQgPT09ICd5ZXMnID8gYCAtIDxzcGFuPmFkb3B0ZWQ8L3NwYW4+YCA6ICcnXHJcblx0XHRcdFx0fTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZV9fYm94LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXhwYW5kTW9yZUNvbnRlbnRcIiBpZD1cInNob3dNb3JlLSR7c3BlY2llc30ke251bWJlcn1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwYWdlX19ib3gtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtkZXNjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXhwYW5kTW9yZUhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmQtbW9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1oaWRldGV4dD1cIi4uLlJlYWQgbGVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXNob3d0ZXh0PVwiLi4uUmVhZCBtb3JlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwic2hvd01vcmUtJHtzcGVjaWVzfSR7bnVtYmVyfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ1dHRvbiBzaG93TW9yZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLlJlYWQgbW9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJwYWdlX19ib3gtaWNvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS13ZWlnaHRcIj48L2lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxzcGFuIGNsYXNzPVwicGFnZV9fYm94LWljb24tLXRleHRcIj4ke3dlaWdodH0ga2c8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1hcnJvd3MtYWx0LXZcIj48L2lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxzcGFuIGNsYXNzPVwicGFnZV9fYm94LWljb24tLXRleHRcIj4ke2hlaWdodH0gY208L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jYWxlbmRhci1jaGVja1wiPjwvaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PHNwYW4gY2xhc3M9XCJwYWdlX19ib3gtaWNvbi0tdGV4dFwiPiR7eWVhcnN9IHlyLjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VfX2JveC1pY29uXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVwiZmFzIGZhLXBhbGV0dGVcIj48L2lcclxuXHRcdFx0XHRcdFx0XHRcdFx0PjxzcGFuIGNsYXNzPVwicGFnZV9fYm94LWljb24tLXRleHRcIj4ke2NvbG9yWzBdID8gY29sb3JbMF0gOiAnLSd9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZV9fYm94LWljb25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJmYXMgZmEtcGFsZXR0ZVwiPjwvaVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+PHNwYW4gY2xhc3M9XCJwYWdlX19ib3gtaWNvbi0tdGV4dFwiPiR7Y29sb3JbMV0gPyBjb2xvclsxXSA6ICctJ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cImZhcyBmYS1wYWxldHRlXCI+PC9pXHJcblx0XHRcdFx0XHRcdFx0XHRcdD48c3BhbiBjbGFzcz1cInBhZ2VfX2JveC1pY29uLS10ZXh0XCI+JHtjb2xvclsyXSA/IGNvbG9yWzJdIDogJy0nfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZV9fYm94LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtcGF3XCI+PC9pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48c3BhbiBjbGFzcz1cInBhZ2VfX2JveC1pY29uLS10ZXh0XCI+JHtjb2F0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VfX2JveC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXZlbnVzLW1hcnNcIj48L2lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxzcGFuIGNsYXNzPVwicGFnZV9fYm94LWljb24tLXRleHRcIj4ke2dlbmRlcn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgYDtcclxuXHJcblx0XHRcdFx0ZG9nc0JveC5hcHBlbmRDaGlsZChkb2dCb3gpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGNhdHNBcnJheS5mb3JFYWNoKChjYXQpID0+IHtcclxuXHRcdFx0XHRjYXRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdFx0XHRjYXRCb3guY2xhc3NMaXN0LmFkZCgncGFnZV9fYm94Jyk7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGNhdFllYXJzID0gY2F0LmJpcnRoO1xyXG5cclxuXHRcdFx0XHRjb25zdCBtaWxpc2Vjc0JldHdlZW5ET0JhbmQxOTcwY2F0ID0gRGF0ZS5wYXJzZShjYXRZZWFycyk7XHJcblx0XHRcdFx0Y29uc3QgbWlsaXNlY3NCZXR3ZWVuTk9XYW5kMTk3MCA9IERhdGUubm93KCk7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGFnZUluTWlsaXNlY3NDYXQgPVxyXG5cdFx0XHRcdFx0bWlsaXNlY3NCZXR3ZWVuTk9XYW5kMTk3MCAtIG1pbGlzZWNzQmV0d2VlbkRPQmFuZDE5NzBjYXQ7XHJcblxyXG5cdFx0XHRcdGNvbnN0IG1pbGlzZWNzQ2F0ID0gYWdlSW5NaWxpc2Vjc0NhdDtcclxuXHRcdFx0XHRjb25zdCBzZWNzID0gMTAwMDtcclxuXHRcdFx0XHRjb25zdCBtaW5zID0gc2VjcyAqIDYwO1xyXG5cdFx0XHRcdGNvbnN0IGhvdXIgPSBtaW5zICogNjA7XHJcblx0XHRcdFx0Y29uc3QgZGF5ID0gaG91ciAqIDI0O1xyXG5cdFx0XHRcdGNvbnN0IHllYXIgPSBkYXkgKiAzNjU7XHJcblxyXG5cdFx0XHRcdGxldCB5ZWFyc0NhdCA9IE1hdGgucm91bmQobWlsaXNlY3NDYXQgLyB5ZWFyKTtcclxuXHJcblx0XHRcdFx0Y2F0Qm94LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2VfX2JveC10b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLiR7Y2F0LmltYWdlfVwiIGFsdD1cIiR7Y2F0Lm5hbWV9ICR7XHJcblx0XHRcdFx0XHRjYXQuc3BlY2llc1xyXG5cdFx0XHRcdH1cIn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2VfX2JveC1ib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInBhZ2VfX2JveC10aXRsZVwiPiR7Y2F0Lm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlX19ib3gtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleHBhbmRNb3JlQ29udGVudFwiIGlkPVwic2hvd01vcmUtJHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNhdC5zcGVjaWVzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSR7Y2F0Lm51bWJlcn1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwYWdlX19ib3gtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtjYXQuZGVzY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV4cGFuZE1vcmVIb2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kLW1vcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaGlkZXRleHQ9XCIuLi5SZWFkIGxlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zaG93dGV4dD1cIi4uLlJlYWQgbW9yZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cInNob3dNb3JlLSR7Y2F0LnNwZWNpZXN9JHtcclxuXHRcdFx0XHRcdGNhdC5udW1iZXJcclxuXHRcdFx0XHR9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnV0dG9uIHNob3dNb3JlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uUmVhZCBtb3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInBhZ2VfX2JveC1pY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VfX2JveC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXdlaWdodFwiPjwvaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PHNwYW4gY2xhc3M9XCJwYWdlX19ib3gtaWNvbi0tdGV4dFwiPiR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2F0LndlaWdodFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IGtnPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZV9fYm94LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtYXJyb3dzLWFsdC12XCI+PC9pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48c3BhbiBjbGFzcz1cInBhZ2VfX2JveC1pY29uLS10ZXh0XCI+JHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjYXQuaGVpZ2h0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1jbTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VfX2JveC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNhbGVuZGFyLWNoZWNrXCI+PC9pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48c3BhbiBjbGFzcz1cInBhZ2VfX2JveC1pY29uLS10ZXh0XCI+JHt5ZWFyc0NhdH0geXIuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZV9fYm94LWljb25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJmYXMgZmEtcGFsZXR0ZVwiPjwvaVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+PHNwYW4gY2xhc3M9XCJwYWdlX19ib3gtaWNvbi0tdGV4dFwiPiR7Y2F0LmNvbG9yWzBdID8gY2F0LmNvbG9yWzBdIDogJy0nfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VfX2JveC1pY29uXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVwiZmFzIGZhLXBhbGV0dGVcIj48L2lcclxuXHRcdFx0XHRcdFx0XHRcdFx0PjxzcGFuIGNsYXNzPVwicGFnZV9fYm94LWljb24tLXRleHRcIj4ke2NhdC5jb2xvclsxXSA/IGNhdC5jb2xvclsxXSA6ICctJ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cImZhcyBmYS1wYWxldHRlXCI+PC9pXHJcblx0XHRcdFx0XHRcdFx0XHRcdD48c3BhbiBjbGFzcz1cInBhZ2VfX2JveC1pY29uLS10ZXh0XCI+JHtjYXQuY29sb3JbMl0gPyBjYXQuY29sb3JbMl0gOiAnLSd9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1wYXdcIj48L2lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxzcGFuIGNsYXNzPVwicGFnZV9fYm94LWljb24tLXRleHRcIj4ke1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNhdC5jb2F0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS12ZW51cy1tYXJzXCI+PC9pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48c3BhbiBjbGFzcz1cInBhZ2VfX2JveC1pY29uLS10ZXh0XCI+JHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjYXQuZ2VuZGVyXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgYDtcclxuXHJcblx0XHRcdFx0Y2F0c0JveC5hcHBlbmRDaGlsZChjYXRCb3gpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGxldCBkb2dCb3hBcnJheSA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjZG9ncy1ib3ggLnBhZ2VfX2JveCcpXTtcclxuXHRcdGxldCBjYXRCb3hBcnJheSA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY2F0cy1ib3ggLnBhZ2VfX2JveCcpXTtcclxuXHRcdGxldCBjdXJyZW50UGFnZSA9IDE7XHJcblx0XHRsZXQgZWxlbWVudHNPblBhZ2UgPSA0O1xyXG5cclxuXHRcdGNvbnN0IHBhZ2luYXRpb25FbERvZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG9ncy1wYWdpbmF0aW9uJyk7XHJcblx0XHRjb25zdCBwYWdpbmF0aW9uRWxDYXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdHMtcGFnaW5hdGlvbicpO1xyXG5cclxuXHRcdGZ1bmN0aW9uIGRpc3BsYXlQYWdpbmF0ZWRJdGVtcyhpdGVtcywgd3JhcHBlciwgaXRlbXNQZXJQYWdlLCBwYWdlKSB7XHJcblx0XHRcdHdyYXBwZXIuaW5uZXJIVE1MID0gJyc7XHJcblx0XHRcdHBhZ2UtLTtcclxuXHJcblx0XHRcdGxldCBzdGFydCA9IGl0ZW1zUGVyUGFnZSAqIHBhZ2U7XHJcblx0XHRcdGxldCBlbmQgPSBzdGFydCArIGl0ZW1zUGVyUGFnZTtcclxuXHRcdFx0bGV0IHBhZ2luYXRlZEl0ZW1zID0gaXRlbXMuc2xpY2Uoc3RhcnQsIGVuZCk7XHJcblxyXG5cdFx0XHRwYWdpbmF0ZWRJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcblx0XHRcdFx0bGV0IGl0ZW1FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0XHRcdGl0ZW1FbC5jbGFzc0xpc3QuYWRkKCdwYWdlX19ib3gnKTtcclxuXHJcblx0XHRcdFx0aXRlbUVsID0gaXRlbTtcclxuXHJcblx0XHRcdFx0d3JhcHBlci5hcHBlbmRDaGlsZChpdGVtRWwpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBkaXNwbGF5UGFnaW5hdGlvbihpdGVtcywgd3JhcHBlciwgaXRlbXNQZXJQYWdlKSB7XHJcblx0XHRcdHdyYXBwZXIuaW5uZXJIVE1MID0gJyc7XHJcblxyXG5cdFx0XHRsZXQgcGFnZUNvdW50ID0gTWF0aC5jZWlsKGl0ZW1zLmxlbmd0aCAvIGl0ZW1zUGVyUGFnZSk7XHJcblxyXG5cdFx0XHRmb3IgKGxldCBpID0gMTsgaSA8IHBhZ2VDb3VudCArIDE7IGkrKykge1xyXG5cdFx0XHRcdGxldCBidG4gPSBwYWdpbmF0aW9uQnV0dG9uKGksIHBhZ2VDb3VudCk7XHJcblxyXG5cdFx0XHRcdGJ0bi5zdHlsZS53aWR0aCA9ICcwJztcclxuXHRcdFx0XHRidG4uc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuXHRcdFx0XHRidG4uc3R5bGUubWFyZ2luID0gJzAnO1xyXG5cclxuXHRcdFx0XHR3cmFwcGVyLmFwcGVuZENoaWxkKGJ0bik7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGxldCBuZXh0QnRuID0gbmV4dFBhZ2UocGFnZUNvdW50KTtcclxuXHRcdFx0d3JhcHBlci5hcHBlbmRDaGlsZChuZXh0QnRuKTtcclxuXHJcblx0XHRcdGxldCBwcmV2QnRuID0gcHJldlBhZ2UocGFnZUNvdW50KTtcclxuXHRcdFx0d3JhcHBlci5wcmVwZW5kKHByZXZCdG4pO1xyXG5cclxuXHRcdFx0bGV0IGN1cnJlbnRCdG5Eb2dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuXHRcdFx0XHQnI2RvZ3MgLnBhZ2luYXRpb24tYnRuLmFjdGl2ZSdcclxuXHRcdFx0KTtcclxuXHRcdFx0bGV0IGN1cnJlbnRCdG5DYXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuXHRcdFx0XHQnI2NhdHMgLnBhZ2luYXRpb24tYnRuLmFjdGl2ZSdcclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdGlmIChjdXJyZW50QnRuRG9ncyAmJiBjdXJyZW50QnRuQ2F0cykge1xyXG5cdFx0XHRcdGN1cnJlbnRCdG5Eb2dzLmNsYXNzTGlzdC5hZGQoJ2dyb3VwJyk7XHJcblx0XHRcdFx0Y3VycmVudEJ0bkRvZ3MubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2dyb3VwJyk7XHJcblx0XHRcdFx0Y3VycmVudEJ0bkRvZ3MubmV4dEVsZW1lbnRTaWJsaW5nLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKFxyXG5cdFx0XHRcdFx0J2dyb3VwJ1xyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0Y3VycmVudEJ0bkRvZ3MucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdncm91cCcpO1xyXG5cclxuXHRcdFx0XHRjdXJyZW50QnRuQ2F0cy5jbGFzc0xpc3QuYWRkKCdncm91cCcpO1xyXG5cdFx0XHRcdGN1cnJlbnRCdG5DYXRzLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdncm91cCcpO1xyXG5cdFx0XHRcdGN1cnJlbnRCdG5DYXRzLm5leHRFbGVtZW50U2libGluZy5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZChcclxuXHRcdFx0XHRcdCdncm91cCdcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdGN1cnJlbnRCdG5DYXRzLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnZ3JvdXAnKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIG5leHRQYWdlKHBhZ2VDb3VudCkge1xyXG5cdFx0XHRsZXQgbmV4dEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cdFx0XHRuZXh0QnRuLmNsYXNzTGlzdC5hZGQoJ25leHQnKTtcclxuXHRcdFx0bmV4dEJ0bi5pbm5lclRleHQgPSAnPic7XHJcblx0XHRcdG5leHRCdG4uY2xhc3NMaXN0LmFkZCgncGFnaW5hdGlvbi1idG4nKTtcclxuXHJcblx0XHRcdG5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0XHRcdGlmIChuZXh0QnRuLnBhcmVudEVsZW1lbnQgPT0gcGFnaW5hdGlvbkVsRG9ncykge1xyXG5cdFx0XHRcdFx0ZGlzcGxheVBhZ2luYXRlZEl0ZW1zKFxyXG5cdFx0XHRcdFx0XHRkb2dCb3hBcnJheSxcclxuXHRcdFx0XHRcdFx0ZG9nc0JveCxcclxuXHRcdFx0XHRcdFx0ZWxlbWVudHNPblBhZ2UsXHJcblx0XHRcdFx0XHRcdGN1cnJlbnRQYWdlXHJcblx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdGxldCBhY3RpdmVCdG5Eb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHRcdFx0XHQnI2RvZ3MgLnBhZ2luYXRpb24tYnRuLmFjdGl2ZSdcclxuXHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0YWN0aXZlQnRuRG9nLm5leHRFbGVtZW50U2libGluZy5jbGljaygpO1xyXG5cclxuXHRcdFx0XHRcdGlmIChjdXJyZW50UGFnZSA9PT0gcGFnZUNvdW50KSB7XHJcblx0XHRcdFx0XHRcdG5leHRCdG4uc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xyXG5cdFx0XHRcdFx0XHRuZXh0QnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0bGV0IHByZXZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZG9ncyAucHJldicpO1xyXG5cclxuXHRcdFx0XHRcdGlmIChjdXJyZW50UGFnZSAhPT0gMSkge1xyXG5cdFx0XHRcdFx0XHRwcmV2QnRuLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcblx0XHRcdFx0XHRcdHByZXZCdG4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhbGwnO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmIChhY3RpdmVCdG5Eb2cpIHtcclxuXHRcdFx0XHRcdFx0YWN0aXZlQnRuRG9nLmNsYXNzTGlzdC5hZGQoJ2dyb3VwJyk7XHJcblx0XHRcdFx0XHRcdGFjdGl2ZUJ0bkRvZy5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnZ3JvdXAnKTtcclxuXHRcdFx0XHRcdFx0YWN0aXZlQnRuRG9nLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnZ3JvdXAnKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChuZXh0QnRuLnBhcmVudEVsZW1lbnQgPT0gcGFnaW5hdGlvbkVsQ2F0cykge1xyXG5cdFx0XHRcdFx0ZGlzcGxheVBhZ2luYXRlZEl0ZW1zKFxyXG5cdFx0XHRcdFx0XHRjYXRCb3hBcnJheSxcclxuXHRcdFx0XHRcdFx0Y2F0c0JveCxcclxuXHRcdFx0XHRcdFx0ZWxlbWVudHNPblBhZ2UsXHJcblx0XHRcdFx0XHRcdGN1cnJlbnRQYWdlXHJcblx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdGxldCBhY3RpdmVCdG5DYXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHRcdFx0XHQnI2NhdHMgLnBhZ2luYXRpb24tYnRuLmFjdGl2ZSdcclxuXHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0YWN0aXZlQnRuQ2F0Lm5leHRFbGVtZW50U2libGluZy5jbGljaygpO1xyXG5cclxuXHRcdFx0XHRcdGlmIChjdXJyZW50UGFnZSA9PT0gcGFnZUNvdW50KSB7XHJcblx0XHRcdFx0XHRcdG5leHRCdG4uc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xyXG5cdFx0XHRcdFx0XHRuZXh0QnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0bGV0IHByZXZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2F0cyAucHJldicpO1xyXG5cclxuXHRcdFx0XHRcdGlmIChjdXJyZW50UGFnZSAhPT0gMSkge1xyXG5cdFx0XHRcdFx0XHRwcmV2QnRuLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcblx0XHRcdFx0XHRcdHByZXZCdG4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhbGwnO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmIChhY3RpdmVCdG5DYXQpIHtcclxuXHRcdFx0XHRcdFx0YWN0aXZlQnRuQ2F0LmNsYXNzTGlzdC5hZGQoJ2dyb3VwJyk7XHJcblx0XHRcdFx0XHRcdGFjdGl2ZUJ0bkNhdC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnZ3JvdXAnKTtcclxuXHRcdFx0XHRcdFx0YWN0aXZlQnRuQ2F0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnZ3JvdXAnKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0cmV0dXJuIG5leHRCdG47XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gcHJldlBhZ2UocGFnZUNvdW50KSB7XHJcblx0XHRcdGxldCBwcmV2QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblx0XHRcdHByZXZCdG4uY2xhc3NMaXN0LmFkZCgncHJldicpO1xyXG5cdFx0XHRwcmV2QnRuLmlubmVyVGV4dCA9ICc8JztcclxuXHRcdFx0cHJldkJ0bi5jbGFzc0xpc3QuYWRkKCdwYWdpbmF0aW9uLWJ0bicpO1xyXG5cclxuXHRcdFx0cHJldkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0XHRcdFx0aWYgKHByZXZCdG4ucGFyZW50RWxlbWVudCA9PSBwYWdpbmF0aW9uRWxEb2dzKSB7XHJcblx0XHRcdFx0XHRkaXNwbGF5UGFnaW5hdGVkSXRlbXMoXHJcblx0XHRcdFx0XHRcdGRvZ0JveEFycmF5LFxyXG5cdFx0XHRcdFx0XHRkb2dzQm94LFxyXG5cdFx0XHRcdFx0XHRlbGVtZW50c09uUGFnZSxcclxuXHRcdFx0XHRcdFx0Y3VycmVudFBhZ2VcclxuXHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0bGV0IGFjdGl2ZUJ0bkRvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdFx0XHRcdCcjZG9ncyAucGFnaW5hdGlvbi1idG4uYWN0aXZlJ1xyXG5cdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHRhY3RpdmVCdG5Eb2cucHJldmlvdXNFbGVtZW50U2libGluZy5jbGljaygpO1xyXG5cclxuXHRcdFx0XHRcdGxldCBuZXh0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RvZ3MgLm5leHQnKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoY3VycmVudFBhZ2UgIT09IHBhZ2VDb3VudCkge1xyXG5cdFx0XHRcdFx0XHRuZXh0QnRuLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcblx0XHRcdFx0XHRcdG5leHRCdG4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhbGwnO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmIChjdXJyZW50UGFnZSA9PT0gMSkge1xyXG5cdFx0XHRcdFx0XHRwcmV2QnRuLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcclxuXHRcdFx0XHRcdFx0cHJldkJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmIChhY3RpdmVCdG5Eb2cpIHtcclxuXHRcdFx0XHRcdFx0YWN0aXZlQnRuRG9nLmNsYXNzTGlzdC5hZGQoJ2dyb3VwJyk7XHJcblx0XHRcdFx0XHRcdGFjdGl2ZUJ0bkRvZy5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnZ3JvdXAnKTtcclxuXHRcdFx0XHRcdFx0YWN0aXZlQnRuRG9nLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnZ3JvdXAnKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChwcmV2QnRuLnBhcmVudEVsZW1lbnQgPT0gcGFnaW5hdGlvbkVsQ2F0cykge1xyXG5cdFx0XHRcdFx0ZGlzcGxheVBhZ2luYXRlZEl0ZW1zKFxyXG5cdFx0XHRcdFx0XHRjYXRCb3hBcnJheSxcclxuXHRcdFx0XHRcdFx0Y2F0c0JveCxcclxuXHRcdFx0XHRcdFx0ZWxlbWVudHNPblBhZ2UsXHJcblx0XHRcdFx0XHRcdGN1cnJlbnRQYWdlXHJcblx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdGxldCBhY3RpdmVCdG5DYXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHRcdFx0XHQnI2NhdHMgLnBhZ2luYXRpb24tYnRuLmFjdGl2ZSdcclxuXHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0YWN0aXZlQnRuQ2F0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xpY2soKTtcclxuXHJcblx0XHRcdFx0XHRsZXQgbmV4dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXRzIC5uZXh0Jyk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGN1cnJlbnRQYWdlICE9PSBwYWdlQ291bnQpIHtcclxuXHRcdFx0XHRcdFx0bmV4dEJ0bi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG5cdFx0XHRcdFx0XHRuZXh0QnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYWxsJztcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRpZiAoY3VycmVudFBhZ2UgPT09IDEpIHtcclxuXHRcdFx0XHRcdFx0cHJldkJ0bi5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XHJcblx0XHRcdFx0XHRcdHByZXZCdG4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRpZiAoYWN0aXZlQnRuQ2F0KSB7XHJcblx0XHRcdFx0XHRcdGFjdGl2ZUJ0bkNhdC5jbGFzc0xpc3QuYWRkKCdncm91cCcpO1xyXG5cdFx0XHRcdFx0XHRhY3RpdmVCdG5DYXQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2dyb3VwJyk7XHJcblx0XHRcdFx0XHRcdGFjdGl2ZUJ0bkNhdC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2dyb3VwJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGlmIChjdXJyZW50UGFnZSA9PT0gMSkge1xyXG5cdFx0XHRcdHByZXZCdG4uc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xyXG5cdFx0XHRcdHByZXZCdG4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHByZXZCdG47XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gcGFnaW5hdGlvbkJ1dHRvbihwYWdlLCBwYWdlQ291bnQpIHtcclxuXHRcdFx0bGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cdFx0XHRidXR0b24uY2xhc3NMaXN0LmFkZCgncGFnaW5hdGlvbi1idG4nKTtcclxuXHRcdFx0YnV0dG9uLmlubmVyVGV4dCA9IHBhZ2U7XHJcblxyXG5cdFx0XHRpZiAoY3VycmVudFBhZ2UgPT0gcGFnZSkge1xyXG5cdFx0XHRcdGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHRcdFx0XHRjdXJyZW50UGFnZSA9IHBhZ2U7XHJcblxyXG5cdFx0XHRcdGlmIChidXR0b24ucGFyZW50RWxlbWVudCA9PSBwYWdpbmF0aW9uRWxEb2dzKSB7XHJcblx0XHRcdFx0XHRkaXNwbGF5UGFnaW5hdGVkSXRlbXMoXHJcblx0XHRcdFx0XHRcdGRvZ0JveEFycmF5LFxyXG5cdFx0XHRcdFx0XHRkb2dzQm94LFxyXG5cdFx0XHRcdFx0XHRlbGVtZW50c09uUGFnZSxcclxuXHRcdFx0XHRcdFx0Y3VycmVudFBhZ2VcclxuXHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0bGV0IGFjdGl2ZUJ0bkRvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdFx0XHRcdCcjZG9ncyAucGFnaW5hdGlvbi1idG4uYWN0aXZlJ1xyXG5cdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHRhY3RpdmVCdG5Eb2cuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRcdFx0YnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cclxuXHRcdFx0XHRcdGxldCBuZXh0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RvZ3MgLm5leHQnKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoY3VycmVudFBhZ2UgPT09IHBhZ2VDb3VudCkge1xyXG5cdFx0XHRcdFx0XHRuZXh0QnRuLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcclxuXHRcdFx0XHRcdFx0bmV4dEJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0bmV4dEJ0bi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG5cdFx0XHRcdFx0XHRuZXh0QnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYWxsJztcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRsZXQgcHJldkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkb2dzIC5wcmV2Jyk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGN1cnJlbnRQYWdlID09PSAxKSB7XHJcblx0XHRcdFx0XHRcdHByZXZCdG4uc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xyXG5cdFx0XHRcdFx0XHRwcmV2QnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRwcmV2QnRuLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcblx0XHRcdFx0XHRcdHByZXZCdG4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhbGwnO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKGJ1dHRvbi5wYXJlbnRFbGVtZW50ID09IHBhZ2luYXRpb25FbENhdHMpIHtcclxuXHRcdFx0XHRcdGRpc3BsYXlQYWdpbmF0ZWRJdGVtcyhcclxuXHRcdFx0XHRcdFx0Y2F0Qm94QXJyYXksXHJcblx0XHRcdFx0XHRcdGNhdHNCb3gsXHJcblx0XHRcdFx0XHRcdGVsZW1lbnRzT25QYWdlLFxyXG5cdFx0XHRcdFx0XHRjdXJyZW50UGFnZVxyXG5cdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHRsZXQgYWN0aXZlQnRuQ2F0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuXHRcdFx0XHRcdFx0JyNjYXRzIC5wYWdpbmF0aW9uLWJ0bi5hY3RpdmUnXHJcblx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdGFjdGl2ZUJ0bkNhdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHJcblx0XHRcdFx0XHRidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRcdFx0bGV0IG5leHRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2F0cyAubmV4dCcpO1xyXG5cclxuXHRcdFx0XHRcdGlmIChjdXJyZW50UGFnZSA9PT0gcGFnZUNvdW50KSB7XHJcblx0XHRcdFx0XHRcdG5leHRCdG4uc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xyXG5cdFx0XHRcdFx0XHRuZXh0QnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRuZXh0QnRuLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcblx0XHRcdFx0XHRcdG5leHRCdG4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhbGwnO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGxldCBwcmV2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhdHMgLnByZXYnKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoY3VycmVudFBhZ2UgPT09IDEpIHtcclxuXHRcdFx0XHRcdFx0cHJldkJ0bi5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XHJcblx0XHRcdFx0XHRcdHByZXZCdG4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHByZXZCdG4uc3R5bGUub3BhY2l0eSA9ICcxJztcclxuXHRcdFx0XHRcdFx0cHJldkJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2FsbCc7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiBidXR0b247XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgZXhwYW5kc01vcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZXhwYW5kLW1vcmVdJyk7XHJcblxyXG5cdFx0ZnVuY3Rpb24gZXhwYW5kKCkge1xyXG5cdFx0XHRjb25zdCBzaG93Q29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZGF0YXNldC50YXJnZXQpO1xyXG5cdFx0XHRpZiAoc2hvd0NvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG5cdFx0XHRcdHRoaXMuaW5uZXJIVE1MID0gdGhpcy5kYXRhc2V0LnNob3d0ZXh0O1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuaW5uZXJIVE1MID0gdGhpcy5kYXRhc2V0LmhpZGV0ZXh0O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRzaG93Q29udGVudC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuXHRcdFx0aWYgKHNob3dDb250ZW50LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuXHRcdFx0XHRzaG93Q29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBzaG93Q29udGVudC5zY3JvbGxIZWlnaHQgKyAncHgnO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNob3dDb250ZW50LnN0eWxlLm1heEhlaWdodCA9IDIwICsgJ3B4JztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChkb2dzQm94KSB7XHJcblx0XHRcdGRpc3BsYXlQYWdpbmF0ZWRJdGVtcyhkb2dCb3hBcnJheSwgZG9nc0JveCwgZWxlbWVudHNPblBhZ2UsIGN1cnJlbnRQYWdlKTtcclxuXHRcdFx0ZGlzcGxheVBhZ2luYXRpb24oZG9nQm94QXJyYXksIHBhZ2luYXRpb25FbERvZ3MsIGVsZW1lbnRzT25QYWdlKTtcclxuXHJcblx0XHRcdGV4cGFuZHNNb3JlLmZvckVhY2goKGJ0bikgPT4ge1xyXG5cdFx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV4cGFuZCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChjYXRzQm94KSB7XHJcblx0XHRcdGRpc3BsYXlQYWdpbmF0ZWRJdGVtcyhjYXRCb3hBcnJheSwgY2F0c0JveCwgZWxlbWVudHNPblBhZ2UsIGN1cnJlbnRQYWdlKTtcclxuXHRcdFx0ZGlzcGxheVBhZ2luYXRpb24oY2F0Qm94QXJyYXksIHBhZ2luYXRpb25FbENhdHMsIGVsZW1lbnRzT25QYWdlKTtcclxuXHJcblx0XHRcdGV4cGFuZHNNb3JlLmZvckVhY2goKGJ0bikgPT4ge1xyXG5cdFx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV4cGFuZCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aWYgKGFuaW1hbHNQYWdlcykge1xyXG5cdFx0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0ZGlzcGxheUFuaW1hbHMoKTtcclxuXHRcdH0pKCk7XHJcblx0fVxyXG59KTtcclxuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuXHQvLyBmb3JtIHZhbGlkYXRpb25cclxuXHRjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QtZm9ybScpO1xyXG5cdGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpO1xyXG5cdGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsJyk7XHJcblx0Y29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlJyk7XHJcblx0Y29uc3QgZm9ybUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWJ0bicpO1xyXG5cclxuXHRpZiAoZm9ybSkge1xyXG5cdFx0W1xyXG5cdFx0XHQnY2xpY2snLFxyXG5cdFx0XHQnb250b3VjaHN0YXJ0JyxcclxuXHRcdFx0J21vdXNlb3ZlcicsXHJcblx0XHRcdCdrZXlkb3duJyxcclxuXHRcdFx0J2tleXByZXNzJyxcclxuXHRcdFx0J3RvdWNoc3RhcnQnLFxyXG5cdFx0XHQndG91Y2htb3ZlJyxcclxuXHRcdF0uZm9yRWFjaChcclxuXHRcdFx0KGV2ZW50KSA9PlxyXG5cdFx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsICgpID0+IHtcclxuXHRcdFx0XHRcdGlmIChjaGVja0lucHV0cygpID09PSBmYWxzZSkge1xyXG5cdFx0XHRcdFx0XHRmb3JtQnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGZvcm1CdG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblxyXG5cdFx0ZnVuY3Rpb24gY2hlY2tJbnB1dHMoKSB7XHJcblx0XHRcdGNvbnN0IG5hbWVWYWx1ZSA9IG5hbWUudmFsdWUudHJpbSgpO1xyXG5cdFx0XHRjb25zdCBlbWFpbFZhbHVlID0gZW1haWwudmFsdWUudHJpbSgpO1xyXG5cdFx0XHRjb25zdCBtZXNzYWdlVmFsdWUgPSBtZXNzYWdlLnZhbHVlLnRyaW0oKTtcclxuXHJcblx0XHRcdGlmIChuYW1lVmFsdWUgPT09ICcnKSB7XHJcblx0XHRcdFx0c2V0RXJyb3JGb3IobmFtZSwgJ1BsZWFzZSBlbnRlciB5b3VyIGZ1bGwgbmFtZScpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldFN1Y2Nlc3NGb3IobmFtZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChlbWFpbFZhbHVlID09PSAnJykge1xyXG5cdFx0XHRcdHNldEVycm9yRm9yKGVtYWlsLCAnUGxlYXNlIGVudGVyIHlvdXIgZW1haWwgYWRkcmVzcycpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKCFlbWFpbElzVmFsaWQoZW1haWxWYWx1ZSkpIHtcclxuXHRcdFx0XHRzZXRFcnJvckZvcihlbWFpbCwgJ0VtYWlsIGlzIG5vdCB2YWxpZCcpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldFN1Y2Nlc3NGb3IoZW1haWwpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAobWVzc2FnZVZhbHVlID09PSAnJykge1xyXG5cdFx0XHRcdHNldEVycm9yRm9yKG1lc3NhZ2UsICdQbGVhc2UgZW50ZXIgeW91ciBtZXNzYWdlJyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0U3VjY2Vzc0ZvcihtZXNzYWdlKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKFxyXG5cdFx0XHRcdG5hbWVWYWx1ZSA9PT0gJycgfHxcclxuXHRcdFx0XHRlbWFpbFZhbHVlID09PSAnJyB8fFxyXG5cdFx0XHRcdG1lc3NhZ2VWYWx1ZSA9PT0gJycgfHxcclxuXHRcdFx0XHQhZW1haWxJc1ZhbGlkKGVtYWlsVmFsdWUpXHJcblx0XHRcdCkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHNldEVycm9yRm9yKGlucHV0LCBtZXNzYWdlKSB7XHJcblx0XHRcdGNvbnN0IGZvcm0gPSBpbnB1dC5wYXJlbnRFbGVtZW50O1xyXG5cdFx0XHRjb25zdCBzbWFsbCA9IGZvcm0ucXVlcnlTZWxlY3Rvcignc21hbGwnKTtcclxuXHJcblx0XHRcdHNtYWxsLmlubmVyVGV4dCA9IG1lc3NhZ2U7XHJcblx0XHRcdGZvcm0uY2xhc3NOYW1lID0gJ2Zvcm1fX2dyb3VwIGVycm9yJztcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBzZXRTdWNjZXNzRm9yKGlucHV0KSB7XHJcblx0XHRcdGNvbnN0IGZvcm0gPSBpbnB1dC5wYXJlbnRFbGVtZW50O1xyXG5cdFx0XHRmb3JtLmNsYXNzTmFtZSA9ICdmb3JtX19ncm91cCBzdWNjZXNzJztcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBlbWFpbElzVmFsaWQoZW1haWwpIHtcclxuXHRcdFx0Y29uc3QgcmUgPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLy50ZXN0KFxyXG5cdFx0XHRcdGVtYWlsXHJcblx0XHRcdCk7XHJcblxyXG5cdFx0XHRyZXR1cm4gcmU7XHJcblx0XHR9XHJcblx0fVxyXG59KTtcclxuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoZSkgPT4ge1xuXHRcdGNvbnN0IHByZWxvYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlbG9hZCcpO1xuXG5cdFx0cHJlbG9hZC5jbGFzc0xpc3QuYWRkKCdwcmVsb2FkLWZpbmlzaGVkJyk7XG5cdH0pO1xuXG5cdGNvbnN0IGJ0blNjcm9sbFRvVG9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0blNjcm9sbFRvVG9wJyk7XG5cdGJ0blNjcm9sbFRvVG9wLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHR3aW5kb3cuc2Nyb2xsVG8oe1xuXHRcdFx0dG9wOiAwLFxuXHRcdFx0bGVmdDogMCxcblx0XHRcdGJlaGF2aW9yOiAnc21vb3RoJyxcblx0XHR9KTtcblx0fSk7XG5cblx0Y29uc3QgZXhwYW5kc01vcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZXhwYW5kLW1vcmVdJyk7XG5cblx0ZnVuY3Rpb24gZXhwYW5kKCkge1xuXHRcdGNvbnN0IHNob3dDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5kYXRhc2V0LnRhcmdldCk7XG5cblx0XHRpZiAoc2hvd0NvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuXHRcdFx0dGhpcy5pbm5lckhUTUwgPSB0aGlzLmRhdGFzZXQuc2hvd3RleHQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuaW5uZXJIVE1MID0gdGhpcy5kYXRhc2V0LmhpZGV0ZXh0O1xuXHRcdH1cblxuXHRcdHNob3dDb250ZW50LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuXHRcdGlmIChzaG93Q29udGVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG5cdFx0XHRzaG93Q29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBzaG93Q29udGVudC5zY3JvbGxIZWlnaHQgKyAncHgnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzaG93Q29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBgMjJweGA7XG5cdFx0fVxuXHR9XG5cblx0ZXhwYW5kc01vcmUuZm9yRWFjaCgoYnRuKSA9PiB7XG5cdFx0Y29uc3QgY29udGFpbmVySGVpZ2h0ID1cblx0XHRcdGJ0bi5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcub2Zmc2V0SGVpZ2h0O1xuXG5cdFx0Y29uc3QgZXhwYW5kRWxlbWVudEhlaWdodCA9XG5cdFx0XHRidG4ucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmZpcnN0RWxlbWVudENoaWxkLm9mZnNldEhlaWdodDtcblxuXHRcdGlmIChjb250YWluZXJIZWlnaHQgPj0gZXhwYW5kRWxlbWVudEhlaWdodCkge1xuXHRcdFx0YnRuLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcblx0XHRcdGJ0bi5zdHlsZS5oZWlnaHQgPSAwO1xuXHRcdH1cblx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBleHBhbmQpO1xuXHR9KTtcbn0pO1xuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuXHRjb25zdCBtb2RhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC1idG4nKTtcclxuXHRjb25zdCBtb2RhbEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJyk7XHJcblx0Y29uc3QgbW9kYWxCdG5DbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZScpO1xyXG5cclxuXHQvLyBTaG93IG1vZGFsXHJcblx0bW9kYWxCdG4uZm9yRWFjaCgobW9kYWwpID0+IHtcclxuXHRcdG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbW9kYWxFbC5jbGFzc0xpc3QuYWRkKCdzaG93LW1vZGFsJykpO1xyXG5cdH0pO1xyXG5cclxuXHQvLyBIaWRlIG1vZGFsXHJcblx0bW9kYWxCdG5DbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XHJcblx0XHRtb2RhbEVsLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3ctbW9kYWwnKVxyXG5cdCk7XHJcblxyXG5cdC8vIEhpZGUgbW9kYWwgb24gb3V0c2lkZSBjbGlja1xyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PlxyXG5cdFx0ZS50YXJnZXQgPT0gbW9kYWwgPyBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93LW1vZGFsJykgOiBmYWxzZVxyXG5cdCk7XHJcbn0pO1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IG5hdkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYtY29udGFpbmVyJyk7XHJcblx0Y29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LWJ0bicpO1xyXG5cdGNvbnN0IG5hdkxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2LWxpc3QnKTtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIChlKSA9PiB7XHJcblx0XHRpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA+IDApIHtcclxuXHRcdFx0bmF2Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N0aWNreScpO1xyXG5cdFx0XHRidG5TY3JvbGxUb1RvcC5zdHlsZS5vcGFjaXR5ID0gMTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG5hdkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdzdGlja3knKTtcclxuXHRcdFx0YnRuU2Nyb2xsVG9Ub3Auc3R5bGUub3BhY2l0eSA9IDA7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0bWVudUJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdjbGlja2VkJyk7XHJcblx0XHRuYXZDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnb3ZlcmxheScpO1xyXG5cdFx0bmF2TGlzdC5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XHJcblx0fSk7XHJcbn0pO1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG5cdC8vIGNhcm91c2VsXHJcblx0Y29uc3QgY2Fyb3VzZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2Fyb3VzZWwnKTtcclxuXHRjb25zdCBjYXJvdXNlbFVybCA9ICcuL2pzL2Nhcm91c2VsLmpzb24nO1xyXG5cdGNvbnN0IGxvY2FsQ2Fyb3VzZWxKU09OID0gcmVxdWlyZSgnLi9jYXJvdXNlbC5qc29uJyk7XHJcblxyXG5cdC8qIGZ1bmN0aW9uIGdldFNsaWRlc0RhdGEoKSB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRmZXRjaChjYXJvdXNlbFVybClcclxuXHRcdFx0XHQudGhlbigocmVzcCkgPT4gcmVzcC5qc29uKCkpXHJcblx0XHRcdFx0LnRoZW4oKGRhdGEpID0+IHJlc29sdmUoZGF0YSkpXHJcblx0XHRcdFx0LmNhdGNoKChlcnIpID0+IHJlamVjdChlcnIpKTtcclxuXHRcdH0pO1xyXG5cdH0gKi9cclxuXHJcblx0YXN5bmMgZnVuY3Rpb24gZGlzcGxheUNhcm91c2VsKCkge1xyXG5cdFx0LyogY29uc3QgZGF0YUxpc3QgPSBhd2FpdCBnZXRTbGlkZXNEYXRhKCk7ICovXHJcblx0XHRjb25zdCBzbGlkZXNBcnJheSA9IGxvY2FsQ2Fyb3VzZWxKU09OLnNsaWRlcztcclxuXHJcblx0XHRzbGlkZXNBcnJheS5mb3JFYWNoKChzbGlkZSwgc2xpZGVOdW1iZXIpID0+IHtcclxuXHRcdFx0bmV3U2xpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdFx0bmV3U2xpZGUuY2xhc3NMaXN0LmFkZCgnY2Fyb3VzZWxfX3NsaWRlJyk7XHJcblxyXG5cdFx0XHRuZXdTbGlkZS5pbm5lckhUTUwgPSBgXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjYXJvdXNlbF9faW1hZ2UtY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCIke3NsaWRlLmltYWdlfVwiIGFsdD1cInNsaWRlLWltZ1wiIC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2Fyb3VzZWxfX2NvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aDEgY2xhc3M9XCJjYXJvdXNlbF9fdGl0bGVcIj4ke3NsaWRlLnRpdGxlfTwvaDE+XHJcblx0XHRcdFx0XHRcdFx0PHAgY2xhc3M9XCJjYXJvdXNlbF9fZGVzY1wiPiR7c2xpZGUuY29udGVudH08L3A+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRgO1xyXG5cclxuXHRcdFx0Y2Fyb3VzZWwuYXBwZW5kQ2hpbGQobmV3U2xpZGUpO1xyXG5cclxuXHRcdFx0aWYgKHNsaWRlTnVtYmVyID09PSAwKSB7XHJcblx0XHRcdFx0Zmlyc3RTbGlkZSA9IG5ld1NsaWRlO1xyXG5cdFx0XHRcdG5ld1NsaWRlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHNsaWRlTnVtYmVyICsgMSA9PT0gbG9jYWxDYXJvdXNlbEpTT04uc2xpZGVzLmxlbmd0aCkge1xyXG5cdFx0XHRcdGxhc3RTbGlkZSA9IG5ld1NsaWRlO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHRuZXh0U2xpZGUoKTtcclxuXHRcdHByZXZpb3VzU2xpZGUoKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG5leHRTbGlkZSgpIHtcclxuXHRcdGNvbnN0IG5leHRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dCcpO1xyXG5cclxuXHRcdG5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0XHRjb25zdCBhY3RpdmVTbGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fc2xpZGUuYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRsZXQgbmV4dFNpYmxpbmcgPSBhY3RpdmVTbGlkZS5uZXh0RWxlbWVudFNpYmxpbmc7XHJcblxyXG5cdFx0XHRpZiAobmV4dFNpYmxpbmcgPT0gbnVsbCkge1xyXG5cdFx0XHRcdG5leHRTaWJsaW5nID0gYWN0aXZlU2xpZGU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChuZXh0U2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ2Nhcm91c2VsX19zbGlkZScpKSB7XHJcblx0XHRcdFx0YWN0aXZlU2xpZGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0XHRcdFx0bmV4dFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gcHJldmlvdXNTbGlkZSgpIHtcclxuXHRcdGNvbnN0IHByZXZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldicpO1xyXG5cclxuXHRcdHByZXZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0XHRjb25zdCBhY3RpdmVTbGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fc2xpZGUuYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRsZXQgbmV4dFNpYmxpbmcgPSBhY3RpdmVTbGlkZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG5cclxuXHRcdFx0aWYgKG5leHRTaWJsaW5nID09IG51bGwpIHtcclxuXHRcdFx0XHRuZXh0U2libGluZyA9IGFjdGl2ZVNsaWRlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAobmV4dFNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJvdXNlbF9fc2xpZGUnKSkge1xyXG5cdFx0XHRcdGFjdGl2ZVNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdG5leHRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGlmIChjYXJvdXNlbCAhPT0gbnVsbCkge1xyXG5cdFx0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0ZGlzcGxheUNhcm91c2VsKCk7XHJcblx0XHR9KSgpO1xyXG5cdH1cclxufSk7XHJcbiIsIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG5cdC8vIHRhYnNcclxuXHRjb25zdCB0YWJMaXN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYmNjb3JkaW9uX19saXN0LWJ0bicpO1xyXG5cdGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiY2NvcmRpb25fX2NvbnRhaW5lcicpO1xyXG5cdGNvbnN0IHRhYmNjb3JkaW9uTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWJjY29yZGlvbi1saXN0Jyk7XHJcblx0Y29uc3QgdGFic0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiY2NvcmRpb25fX3RhYi1pbm5lcicpO1xyXG5cdGNvbnN0IHRhYmNjb3JkaW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYmNjb3JkaW9uJyk7XHJcblxyXG5cdGZ1bmN0aW9uIGFjdGl2YXRlVGFicygpIHtcclxuXHRcdHRhYkxpc3RCdG4uZm9yRWFjaCgodGFiKSA9PiB7XHJcblx0XHRcdHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgdGFiTmF2ID0gdGFiLnBhcmVudEVsZW1lbnQ7XHJcblx0XHRcdFx0Y29uc3QgdGFic0NvbnRhaW5lciA9IHRhYk5hdi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcblx0XHRcdFx0Y29uc3QgdGFiTnVtYmVyID0gdGFiLmRhdGFzZXQuZm9yVGFiO1xyXG5cdFx0XHRcdGNvbnN0IHRhYlRvQWN0aXZhdGUgPSB0YWJzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdFx0XHRgLnRhYmNjb3JkaW9uX190YWJbZGF0YS10YWI9XCIke3RhYk51bWJlcn1cIl1gXHJcblx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0dGFiTmF2LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJjY29yZGlvbl9fbGlzdC1idG4nKS5mb3JFYWNoKChidG4pID0+IHtcclxuXHRcdFx0XHRcdGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdHRhYnNDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLnRhYmNjb3JkaW9uX190YWInKS5mb3JFYWNoKCh0YWIpID0+IHtcclxuXHRcdFx0XHRcdHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdHRhYi5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XHJcblx0XHRcdFx0dGFiVG9BY3RpdmF0ZS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XHJcblxyXG5cdFx0XHRcdGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSA2MDApIHtcclxuXHRcdFx0XHRcdHRhYnNDb250ZW50LmZvckVhY2goKHRhYnMpID0+IHtcclxuXHRcdFx0XHRcdFx0dGFicy5zdHlsZS5tYXhIZWlnaHQgPSB0YWJzLnNjcm9sbEhlaWdodCArICdweCc7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0aWYgKHRhYmNjb3JkaW9uTGlzdCkge1xyXG5cdFx0XHR0YWJzLmZvckVhY2goKHRhYikgPT4ge1xyXG5cdFx0XHRcdHRhYi5xdWVyeVNlbGVjdG9yKCcudGFiY2NvcmRpb25fX2xpc3QgLnRhYmNjb3JkaW9uX19idG4nKS5jbGljaygpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vLy8vIGFjY29yZGlvblxyXG5cdGNvbnN0IGFjY29yZGlvbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvcmRpb25fX2xpc3QtYnRuJyk7XHJcblxyXG5cdGZ1bmN0aW9uIGFjdGl2YXRlQWNjb3JkaW9uKCkge1xyXG5cdFx0YWNjb3JkaW9uQnRuLmZvckVhY2goKGJ0bikgPT4ge1xyXG5cdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdFx0Ly8gY2hlY2sgZm9yIG9wZW4gYWNjb3JkaW9uXHJcblx0XHRcdFx0Y29uc3QgYWNjb3JkaW9uQnRuT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdFx0XHQnLmFjY29yZGlvbl9fbGlzdC1idG4ub3BlbidcclxuXHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRpZiAoYWNjb3JkaW9uQnRuT3BlbiAmJiBhY2NvcmRpb25CdG5PcGVuICE9PSBidG4pIHtcclxuXHRcdFx0XHRcdC8vIGlmIHRoZXJlIGlzIG9wZW4gdGhlbiByZW1vdmUgb3BlbiBjbGFzcyBhbmQgc2V0IG1heGhlaWdodCB0byAwXHJcblx0XHRcdFx0XHRhY2NvcmRpb25CdG5PcGVuLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcclxuXHRcdFx0XHRcdGFjY29yZGlvbkJ0bk9wZW4ubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLm1heEhlaWdodCA9IDA7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBzZXQgb3BlbiBjbGFzcyB0byBldmVyeSBjbGlja2VkIGFjY29yZGlvbiBidG5cclxuXHRcdFx0XHRidG4uY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xyXG5cdFx0XHRcdGNvbnN0IGFjY29yZGlvbkJvZHkgPSBidG4ubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG5cclxuXHRcdFx0XHRpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpKSB7XHJcblx0XHRcdFx0XHRhY2NvcmRpb25Cb2R5LnN0eWxlLm1heEhlaWdodCA9IGFjY29yZGlvbkJvZHkuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0YWNjb3JkaW9uQm9keS5zdHlsZS5tYXhIZWlnaHQgPSAwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKGUpID0+IHtcclxuXHRcdFx0aWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNjAwKSB7XHJcblx0XHRcdFx0dGFic0NvbnRlbnQuZm9yRWFjaCgodGFicykgPT4ge1xyXG5cdFx0XHRcdFx0dGFicy5zdHlsZS5tYXhIZWlnaHQgPSAwO1xyXG5cdFx0XHRcdFx0aWYgKHRhYnMucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKSkge1xyXG5cdFx0XHRcdFx0XHR0YWJzLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGlmICh0YWJjY29yZGlvbikge1xyXG5cdFx0YWN0aXZhdGVUYWJzKCk7XHJcblx0XHRhY3RpdmF0ZUFjY29yZGlvbigpO1xyXG5cdH1cclxufSk7XHJcbiJdLCJwcmVFeGlzdGluZ0NvbW1lbnQiOiIvLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTh2ZDJWaWNHRmpheTlpYjI5MGMzUnlZWEFpTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDJwekwyRmtiM0IwUTI5dWRHVnVkRk4zYVhSamFHVnlMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5cWN5OW1aWFJqYUVGdWFXMWhiSE5FWVhSaExtcHpJaXdpZDJWaWNHRmphem92THk4dUwzTnlZeTlxY3k5bWIzSnRWbUZzYVdSaGFYUnZiaTVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl6Y21NdmFuTXZiV0ZwYmk1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5emNtTXZhbk12Ylc5a1lXd3Vhbk1pTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDJwekwyNWhkaTVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl6Y21NdmFuTXZjMnhwWkdWeUxtcHpJaXdpZDJWaWNHRmphem92THk4dUwzTnlZeTlxY3k5MFlXSmpZMjl5WkdsdmJpNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMUZCUVVFN1VVRkRRVHM3VVVGRlFUdFJRVU5CT3p0UlFVVkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPenRSUVVWQk8xRkJRMEU3TzFGQlJVRTdVVUZEUVRzN1VVRkZRVHRSUVVOQk8xRkJRMEU3T3p0UlFVZEJPMUZCUTBFN08xRkJSVUU3VVVGRFFUczdVVUZGUVR0UlFVTkJPMUZCUTBFN1VVRkRRU3d3UTBGQk1FTXNaME5CUVdkRE8xRkJRekZGTzFGQlEwRTdPMUZCUlVFN1VVRkRRVHRSUVVOQk8xRkJRMEVzZDBSQlFYZEVMR3RDUVVGclFqdFJRVU14UlR0UlFVTkJMR2xFUVVGcFJDeGpRVUZqTzFGQlF5OUVPenRSUVVWQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFTeDVRMEZCZVVNc2FVTkJRV2xETzFGQlF6RkZMR2RJUVVGblNDeHRRa0ZCYlVJc1JVRkJSVHRSUVVOeVNUdFJRVU5CT3p0UlFVVkJPMUZCUTBFN1VVRkRRVHRSUVVOQkxESkNRVUV5UWl3d1FrRkJNRUlzUlVGQlJUdFJRVU4yUkN4cFEwRkJhVU1zWlVGQlpUdFJRVU5vUkR0UlFVTkJPMUZCUTBFN08xRkJSVUU3VVVGRFFTeHpSRUZCYzBRc0swUkJRU3RFT3p0UlFVVnlTRHRSUVVOQk96czdVVUZIUVR0UlFVTkJPenM3T3pzN096czdPenM3UVVOc1JrRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJMRWRCUVVjN1FVRkRTQ3hGUVVGRk96dEJRVVZHTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTERoRVFVRTRSQ3hQUVVGUE8wRkJRM0pGTzBGQlEwRXNaME5CUVdkRExFOUJRVTg3UVVGRGRrTTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hEUVVGRE96czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGRGFrTkVPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRXNNRUpCUVRCQ0xHMUNRVUZQTEVOQlFVTXNOa05CUVdkQ096dEJRVVZzUkR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFTeEhRVUZIT3p0QlFVVklPMEZCUTBFN08wRkJSVUU3UVVGRFFTdzJRMEZCTmtNN08wRkJSVGRET3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEczdRVUZGUVR0QlFVTkJMRFpEUVVFMlF6dEJRVU0zUXpzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUzBGQlN6czdRVUZGVER0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4NVEwRkJlVU1zVFVGQlRTeFRRVUZUTEV0QlFVc3NSMEZCUnl4UlFVRlJMRVZCUVVVN1FVRkRNVVU3UVVGRFFUdEJRVU5CTERCRVFVRXdSQ3hMUVVGTE8wRkJReTlFTzBGQlEwRXNTMEZCU3p0QlFVTk1PMEZCUTBFc09FVkJRVGhGTEZGQlFWRXNSVUZCUlN4UFFVRlBPMEZCUXk5R08wRkJRMEVzTUVOQlFUQkRPMEZCUXpGRE8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHZEZRVUZuUlN4UlFVRlJMRVZCUVVVc1QwRkJUenRCUVVOcVJqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNNRVZCUVRCRkxFOUJRVTg3UVVGRGFrWTdRVUZEUVR0QlFVTkJPMEZCUTBFc01FVkJRVEJGTEU5QlFVODdRVUZEYWtZN1FVRkRRVHRCUVVOQk8wRkJRMEVzTUVWQlFUQkZMRTFCUVUwN1FVRkRhRVk3UVVGRFFUdEJRVU5CTzBGQlEwRXNLME5CUVN0RExEQkNRVUV3UWp0QlFVTjZSVHRCUVVOQk8wRkJRMEU3UVVGRFFTd3JRMEZCSzBNc01FSkJRVEJDTzBGQlEzcEZPMEZCUTBFN1FVRkRRVHRCUVVOQkxDdERRVUVyUXl3d1FrRkJNRUk3UVVGRGVrVTdRVUZEUVR0QlFVTkJPMEZCUTBFc01FVkJRVEJGTEV0QlFVczdRVUZETDBVN1FVRkRRVHRCUVVOQk8wRkJRMEVzTUVWQlFUQkZMRTlCUVU4N1FVRkRha1k3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3hKUVVGSk96dEJRVVZLTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4NVEwRkJlVU1zVlVGQlZTeFRRVUZUTEZOQlFWTTdRVUZEY2tVN1FVRkRRU3hMUVVGTExFVkJRVVU3UVVGRFVEdEJRVU5CTzBGQlEwRXNNRVJCUVRCRUxGTkJRVk03UVVGRGJrVTdRVUZEUVR0QlFVTkJPMEZCUTBFc2FVSkJRV2xDTEVWQlFVVXNWMEZCVnp0QlFVTTVRanRCUVVOQkxEQkRRVUV3UXp0QlFVTXhRenRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3huUlVGQlowVXNXVUZCV1R0QlFVTTFSVHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRzFDUVVGdFFqdEJRVU51UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYlVKQlFXMUNPMEZCUTI1Q08wRkJRMEU3UVVGRFFUdEJRVU5CTERCRlFVRXdSU3hUUVVGVE8wRkJRMjVHTzBGQlEwRTdRVUZEUVR0QlFVTkJMQ3REUVVFclF5eHJRMEZCYTBNN1FVRkRha1k3UVVGRFFUdEJRVU5CTzBGQlEwRXNLME5CUVN0RExHdERRVUZyUXp0QlFVTnFSanRCUVVOQk8wRkJRMEU3UVVGRFFTd3JRMEZCSzBNc2EwTkJRV3RETzBGQlEycEdPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHRRa0ZCYlVJN1FVRkRia0k3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRzFDUVVGdFFqdEJRVU51UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTEVsQlFVazdRVUZEU2l4SFFVRkhPenRCUVVWSU8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFTeEpRVUZKTzBGQlEwbzdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVN4clFrRkJhMElzYlVKQlFXMUNPMEZCUTNKRE96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1NVRkJTVHM3UVVGRlNqdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEpRVUZKT3p0QlFVVktPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEUxQlFVMDdRVUZEVGp0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1RVRkJUVHRCUVVOT08wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TlFVRk5PMEZCUTA0N1FVRkRRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFMUJRVTA3UVVGRFRqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWxCUVVrN08wRkJSVW83UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVsQlFVazdRVUZEU2p0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVsQlFVazdRVUZEU2p0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hKUVVGSk8wRkJRMG83TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeEpRVUZKTzBGQlEwbzdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVN4RFFVRkRPenM3T3pzN096czdPenM3UVVOeWJVSkVPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeE5RVUZOTzBGQlEwNDdRVUZEUVR0QlFVTkJMRXRCUVVzN1FVRkRURHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeEpRVUZKTzBGQlEwbzdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzU1VGQlNUdEJRVU5LTzBGQlEwRXNTVUZCU1R0QlFVTktPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEVsQlFVazdRVUZEU2p0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1NVRkJTVHRCUVVOS08wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRXNhVU5CUVdsRExIbENRVUY1UWl3MlFrRkJOa0lzU1VGQlNTeFJRVUZSTEVsQlFVa3NVVUZCVVN4SlFVRkpMRkZCUVZFc1NVRkJTU3huUTBGQlowTXNSMEZCUnp0QlFVTnNTenRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRU5CUVVNN096czdPenM3T3pzN096dEJRM1pHUkR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFTeEZRVUZGT3p0QlFVVkdPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0N4RlFVRkZPenRCUVVWR096dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVWQlFVVTdRVUZEUml4RFFVRkRPenM3T3pzN096czdPenM3UVVOb1JFUTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSVUZCUlRzN1FVRkZSanRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFTkJRVU03T3pzN096czdPenM3T3p0QlEyNUNSRHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEdEJRVU5CTzBGQlEwRTdRVUZEUVN4RlFVRkZPenRCUVVWR08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSVUZCUlR0QlFVTkdMRU5CUVVNN096czdPenM3T3pzN096dEJRM0JDUkR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxESkNRVUV5UWl4dFFrRkJUeXhEUVVGRExDdERRVUZwUWpzN1FVRkZjRVE3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSUxFVkJRVVU3TzBGQlJVWTdRVUZEUVN3MFEwRkJORU03UVVGRE5VTTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4dFFrRkJiVUlzV1VGQldUdEJRVU12UWp0QlFVTkJPMEZCUTBFc2NVTkJRWEZETEZsQlFWazdRVUZEYWtRc2JVTkJRVzFETEdOQlFXTTdRVUZEYWtRN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hKUVVGSk8wRkJRMG83UVVGRFFUdEJRVU5CTEVkQlFVYzdPMEZCUlVnN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0RzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVN4RFFVRkRPenM3T3pzN096czdPenM3UVVNeFJrUTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHZRMEZCYjBNc1ZVRkJWVHRCUVVNNVF6czdRVUZGUVR0QlFVTkJPMEZCUTBFc1MwRkJTenM3UVVGRlREdEJRVU5CTzBGQlEwRXNTMEZCU3pzN1FVRkZURHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRTFCUVUwN1FVRkRUanRCUVVOQkxFbEJRVWs3UVVGRFNpeEhRVUZIT3p0QlFVVklPMEZCUTBFN1FVRkRRVHRCUVVOQkxFbEJRVWs3UVVGRFNqdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRXRCUVVzN1FVRkRURHRCUVVOQk8wRkJRMEVzU1VGQlNUdEJRVU5LTEVkQlFVYzdPMEZCUlVnN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRU3hIUVVGSE8wRkJRMGc3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hEUVVGRElpd2labWxzWlNJNkltSmpaR1JqWm1FeE1EazFORFpqTnpjM01tRmpMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUlGeDBMeThnVkdobElHMXZaSFZzWlNCallXTm9aVnh1SUZ4MGRtRnlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTWdQU0I3ZlR0Y2JseHVJRngwTHk4Z1ZHaGxJSEpsY1hWcGNtVWdablZ1WTNScGIyNWNiaUJjZEdaMWJtTjBhVzl1SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b2JXOWtkV3hsU1dRcElIdGNibHh1SUZ4MFhIUXZMeUJEYUdWamF5QnBaaUJ0YjJSMWJHVWdhWE1nYVc0Z1kyRmphR1ZjYmlCY2RGeDBhV1lvYVc1emRHRnNiR1ZrVFc5a2RXeGxjMXR0YjJSMWJHVkpaRjBwSUh0Y2JpQmNkRngwWEhSeVpYUjFjbTRnYVc1emRHRnNiR1ZrVFc5a2RXeGxjMXR0YjJSMWJHVkpaRjB1Wlhod2IzSjBjenRjYmlCY2RGeDBmVnh1SUZ4MFhIUXZMeUJEY21WaGRHVWdZU0J1WlhjZ2JXOWtkV3hsSUNoaGJtUWdjSFYwSUdsMElHbHVkRzhnZEdobElHTmhZMmhsS1Z4dUlGeDBYSFIyWVhJZ2JXOWtkV3hsSUQwZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwZ1BTQjdYRzRnWEhSY2RGeDBhVG9nYlc5a2RXeGxTV1FzWEc0Z1hIUmNkRngwYkRvZ1ptRnNjMlVzWEc0Z1hIUmNkRngwWlhod2IzSjBjem9nZTMxY2JpQmNkRngwZlR0Y2JseHVJRngwWEhRdkx5QkZlR1ZqZFhSbElIUm9aU0J0YjJSMWJHVWdablZ1WTNScGIyNWNiaUJjZEZ4MGJXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwdVkyRnNiQ2h0YjJSMWJHVXVaWGh3YjNKMGN5d2diVzlrZFd4bExDQnRiMlIxYkdVdVpYaHdiM0owY3l3Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5azdYRzVjYmlCY2RGeDBMeThnUm14aFp5QjBhR1VnYlc5a2RXeGxJR0Z6SUd4dllXUmxaRnh1SUZ4MFhIUnRiMlIxYkdVdWJDQTlJSFJ5ZFdVN1hHNWNiaUJjZEZ4MEx5OGdVbVYwZFhKdUlIUm9aU0JsZUhCdmNuUnpJRzltSUhSb1pTQnRiMlIxYkdWY2JpQmNkRngwY21WMGRYSnVJRzF2WkhWc1pTNWxlSEJ2Y25Sek8xeHVJRngwZlZ4dVhHNWNiaUJjZEM4dklHVjRjRzl6WlNCMGFHVWdiVzlrZFd4bGN5QnZZbXBsWTNRZ0tGOWZkMlZpY0dGamExOXRiMlIxYkdWelgxOHBYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtMGdQU0J0YjJSMWJHVnpPMXh1WEc0Z1hIUXZMeUJsZUhCdmMyVWdkR2hsSUcxdlpIVnNaU0JqWVdOb1pWeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1aklEMGdhVzV6ZEdGc2JHVmtUVzlrZFd4bGN6dGNibHh1SUZ4MEx5OGdaR1ZtYVc1bElHZGxkSFJsY2lCbWRXNWpkR2x2YmlCbWIzSWdhR0Z5Ylc5dWVTQmxlSEJ2Y25SelhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1RZ1BTQm1kVzVqZEdsdmJpaGxlSEJ2Y25SekxDQnVZVzFsTENCblpYUjBaWElwSUh0Y2JpQmNkRngwYVdZb0lWOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVieWhsZUhCdmNuUnpMQ0J1WVcxbEtTa2dlMXh1SUZ4MFhIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGVIQnZjblJ6TENCdVlXMWxMQ0I3SUdWdWRXMWxjbUZpYkdVNklIUnlkV1VzSUdkbGREb2daMlYwZEdWeUlIMHBPMXh1SUZ4MFhIUjlYRzRnWEhSOU8xeHVYRzRnWEhRdkx5QmtaV1pwYm1VZ1gxOWxjMDF2WkhWc1pTQnZiaUJsZUhCdmNuUnpYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuSWdQU0JtZFc1amRHbHZiaWhsZUhCdmNuUnpLU0I3WEc0Z1hIUmNkR2xtS0hSNWNHVnZaaUJUZVcxaWIyd2dJVDA5SUNkMWJtUmxabWx1WldRbklDWW1JRk41YldKdmJDNTBiMU4wY21sdVoxUmhaeWtnZTF4dUlGeDBYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQlRlVzFpYjJ3dWRHOVRkSEpwYm1kVVlXY3NJSHNnZG1Gc2RXVTZJQ2ROYjJSMWJHVW5JSDBwTzF4dUlGeDBYSFI5WEc0Z1hIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGVIQnZjblJ6TENBblgxOWxjMDF2WkhWc1pTY3NJSHNnZG1Gc2RXVTZJSFJ5ZFdVZ2ZTazdYRzRnWEhSOU8xeHVYRzRnWEhRdkx5QmpjbVZoZEdVZ1lTQm1ZV3RsSUc1aGJXVnpjR0ZqWlNCdlltcGxZM1JjYmlCY2RDOHZJRzF2WkdVZ0ppQXhPaUIyWVd4MVpTQnBjeUJoSUcxdlpIVnNaU0JwWkN3Z2NtVnhkV2x5WlNCcGRGeHVJRngwTHk4Z2JXOWtaU0FtSURJNklHMWxjbWRsSUdGc2JDQndjbTl3WlhKMGFXVnpJRzltSUhaaGJIVmxJR2x1ZEc4Z2RHaGxJRzV6WEc0Z1hIUXZMeUJ0YjJSbElDWWdORG9nY21WMGRYSnVJSFpoYkhWbElIZG9aVzRnWVd4eVpXRmtlU0J1Y3lCdlltcGxZM1JjYmlCY2RDOHZJRzF2WkdVZ0ppQTRmREU2SUdKbGFHRjJaU0JzYVd0bElISmxjWFZwY21WY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1ZENBOUlHWjFibU4wYVc5dUtIWmhiSFZsTENCdGIyUmxLU0I3WEc0Z1hIUmNkR2xtS0cxdlpHVWdKaUF4S1NCMllXeDFaU0E5SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b2RtRnNkV1VwTzF4dUlGeDBYSFJwWmlodGIyUmxJQ1lnT0NrZ2NtVjBkWEp1SUhaaGJIVmxPMXh1SUZ4MFhIUnBaaWdvYlc5a1pTQW1JRFFwSUNZbUlIUjVjR1Z2WmlCMllXeDFaU0E5UFQwZ0oyOWlhbVZqZENjZ0ppWWdkbUZzZFdVZ0ppWWdkbUZzZFdVdVgxOWxjMDF2WkhWc1pTa2djbVYwZFhKdUlIWmhiSFZsTzF4dUlGeDBYSFIyWVhJZ2JuTWdQU0JQWW1wbFkzUXVZM0psWVhSbEtHNTFiR3dwTzF4dUlGeDBYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5Jb2JuTXBPMXh1SUZ4MFhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvYm5Nc0lDZGtaV1poZFd4MEp5d2dleUJsYm5WdFpYSmhZbXhsT2lCMGNuVmxMQ0IyWVd4MVpUb2dkbUZzZFdVZ2ZTazdYRzRnWEhSY2RHbG1LRzF2WkdVZ0ppQXlJQ1ltSUhSNWNHVnZaaUIyWVd4MVpTQWhQU0FuYzNSeWFXNW5KeWtnWm05eUtIWmhjaUJyWlhrZ2FXNGdkbUZzZFdVcElGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ2h1Y3l3Z2EyVjVMQ0JtZFc1amRHbHZiaWhyWlhrcElIc2djbVYwZFhKdUlIWmhiSFZsVzJ0bGVWMDdJSDB1WW1sdVpDaHVkV3hzTENCclpYa3BLVHRjYmlCY2RGeDBjbVYwZFhKdUlHNXpPMXh1SUZ4MGZUdGNibHh1SUZ4MEx5OGdaMlYwUkdWbVlYVnNkRVY0Y0c5eWRDQm1kVzVqZEdsdmJpQm1iM0lnWTI5dGNHRjBhV0pwYkdsMGVTQjNhWFJvSUc1dmJpMW9ZWEp0YjI1NUlHMXZaSFZzWlhOY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YmlBOUlHWjFibU4wYVc5dUtHMXZaSFZzWlNrZ2UxeHVJRngwWEhSMllYSWdaMlYwZEdWeUlEMGdiVzlrZFd4bElDWW1JRzF2WkhWc1pTNWZYMlZ6VFc5a2RXeGxJRDljYmlCY2RGeDBYSFJtZFc1amRHbHZiaUJuWlhSRVpXWmhkV3gwS0NrZ2V5QnlaWFIxY200Z2JXOWtkV3hsV3lka1pXWmhkV3gwSjEwN0lIMGdPbHh1SUZ4MFhIUmNkR1oxYm1OMGFXOXVJR2RsZEUxdlpIVnNaVVY0Y0c5eWRITW9LU0I3SUhKbGRIVnliaUJ0YjJSMWJHVTdJSDA3WEc0Z1hIUmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WkNoblpYUjBaWElzSUNkaEp5d2daMlYwZEdWeUtUdGNiaUJjZEZ4MGNtVjBkWEp1SUdkbGRIUmxjanRjYmlCY2RIMDdYRzVjYmlCY2RDOHZJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrdVkyRnNiRnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXZJRDBnWm5WdVkzUnBiMjRvYjJKcVpXTjBMQ0J3Y205d1pYSjBlU2tnZXlCeVpYUjFjbTRnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzS0c5aWFtVmpkQ3dnY0hKdmNHVnlkSGtwT3lCOU8xeHVYRzRnWEhRdkx5QmZYM2RsWW5CaFkydGZjSFZpYkdsalgzQmhkR2hmWDF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV3SUQwZ1hDSmNJanRjYmx4dVhHNGdYSFF2THlCTWIyRmtJR1Z1ZEhKNUlHMXZaSFZzWlNCaGJtUWdjbVYwZFhKdUlHVjRjRzl5ZEhOY2JpQmNkSEpsZEhWeWJpQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y3lBOUlEQXBPMXh1SWl3aVpHOWpkVzFsYm5RdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblJFOU5RMjl1ZEdWdWRFeHZZV1JsWkNjc0lHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhIUm9hWE4wYjNKNUxuSmxjR3hoWTJWVGRHRjBaU2h1ZFd4c0xDQnVkV3hzTENBbklDY3BPMXh5WEc1Y2RHTnZibk4wSUhSaFlsTjNhWFJqYUdWeWN5QTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNKQmJHd29KMXRrWVhSaExYTjNhWFJqYUdWeVhTY3BPMXh5WEc1Y2NseHVYSFIwWVdKVGQybDBZMmhsY25NdVptOXlSV0ZqYUNnb2RHRmlVM2RwZEdOb0tTQTlQaUI3WEhKY2JseDBYSFJqYjI1emRDQjBZV0pUZDJsMFkyaGxjaUE5SUhSaFlsTjNhWFJqYUR0Y2NseHVYSFJjZEdOdmJuTjBJSEJoWjJWSlpDQTlJSFJoWWxOM2FYUmphR1Z5TG1SaGRHRnpaWFF1ZEdGaU8xeHlYRzVjY2x4dVhIUmNkSFJoWWxOM2FYUmphR1Z5TG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjJOc2FXTnJKeXdnS0dVcElEMCtJSHRjY2x4dVhIUmNkRngwWkc5amRXMWxiblJjY2x4dVhIUmNkRngwWEhRdWNYVmxjbmxUWld4bFkzUnZjaWduTG1Ga2IzQjBYMTlzYVhOMExXbDBaVzB1WVdOMGFYWmxKeWxjY2x4dVhIUmNkRngwWEhRdVkyeGhjM05NYVhOMExuSmxiVzkyWlNnbllXTjBhWFpsSnlrN1hISmNibHh5WEc1Y2RGeDBYSFIwWVdKVGQybDBZMmhsY2k1d1lYSmxiblJGYkdWdFpXNTBMbkJoY21WdWRFVnNaVzFsYm5RdVkyeGhjM05NYVhOMExtRmtaQ2duWVdOMGFYWmxKeWs3WEhKY2JseHlYRzVjZEZ4MFhIUnpkMmwwWTJoUVlXZGxLSEJoWjJWSlpDazdYSEpjYmx4MFhIUjlLVHRjY2x4dVhIUjlLVHRjY2x4dVhISmNibHgwWm5WdVkzUnBiMjRnYzNkcGRHTm9VR0ZuWlNod1lXZGxTV1FwSUh0Y2NseHVYSFJjZEdOdmJuTjBJR04xY25KbGJuUlFZV2RsSUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduTG5CaFoyVXVZV04wYVhabEp5azdYSEpjYmx4MFhIUmpiMjV6ZENCamRYSnlaVzUwVUdGblpVaGxZV1JsY2lBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvSnk1d1lXZGxMV2hsWVdSbGNpNWhZM1JwZG1VbktUdGNjbHh1WEhKY2JseDBYSFJqZFhKeVpXNTBVR0ZuWlM1amJHRnpjMHhwYzNRdWNtVnRiM1psS0NkaFkzUnBkbVVuS1R0Y2NseHVYSFJjZEdOMWNuSmxiblJRWVdkbFNHVmhaR1Z5TG1Oc1lYTnpUR2x6ZEM1eVpXMXZkbVVvSjJGamRHbDJaU2NwTzF4eVhHNWNjbHh1WEhSY2RHTnZibk4wSUc1bGVIUlFZV2RsSUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWhnTG5CaFoyVmJaR0YwWVMxd1lXZGxQVndpSkh0d1lXZGxTV1I5WENKZFlDazdYSEpjYmx4MFhIUmpiMjV6ZENCdVpYaDBVR0ZuWlVobFlXUmxjaUE5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9YSEpjYmx4MFhIUmNkR0F1Y0dGblpTMW9aV0ZrWlhKYlpHRjBZUzFvWldGa1pYSTlYQ0lrZTNCaFoyVkpaSDFjSWwxZ1hISmNibHgwWEhRcE8xeHlYRzVjZEZ4MGJtVjRkRkJoWjJVdVkyeGhjM05NYVhOMExtRmtaQ2duWVdOMGFYWmxKeWs3WEhKY2JseDBYSFJ1WlhoMFVHRm5aVWhsWVdSbGNpNWpiR0Z6YzB4cGMzUXVZV1JrS0NkaFkzUnBkbVVuS1R0Y2NseHVYSFI5WEhKY2JuMHBPMXh5WEc0aUxDSmtiMk4xYldWdWRDNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZEVUMDFEYjI1MFpXNTBURzloWkdWa0p5d2dablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNkR052Ym5OMElHRnVhVzFoYkhOVmNtd2dQU0FuTGk0dmFuTXZZVzVwYldGc2N5NXFjMjl1Snp0Y2NseHVYSFJqYjI1emRDQmhibWx0WVd4elVHRm5aWE1nUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2duWVc1cGJXRnNjeTF3WVdkbGN5Y3BPMXh5WEc1Y2RHTnZibk4wSUdSdlozTkNiM2dnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2duWkc5bmN5MWliM2duS1R0Y2NseHVYSFJqYjI1emRDQmpZWFJ6UW05NElEMGdaRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkRUo1U1dRb0oyTmhkSE10WW05NEp5azdYSEpjYmx4eVhHNWNkR052Ym5OMElHeHZZMkZzUVc1cGJXRnNjMHBUVDA0Z1BTQnlaWEYxYVhKbEtDY3VMMkZ1YVcxaGJITXVhbk52YmljcE8xeHlYRzVjY2x4dVhIUXZLaUJqYjI1emRDQm5aWFJCYm1sdFlXeHpSR0YwWVNBOUlHRnplVzVqSUNncElEMCtJSHRjY2x4dVhIUmNkR052Ym5OMElISmxjM0J2Ym5ObElEMGdZWGRoYVhRZ1ptVjBZMmdvWVc1cGJXRnNjMVZ5YkNrN1hISmNibHgwWEhSamIyNXpkQ0JrWVhSaElEMGdZWGRoYVhRZ2NtVnpjRzl1YzJVdWFuTnZiaWdwTzF4eVhHNWNjbHh1WEhSY2RISmxkSFZ5YmlCa1lYUmhPMXh5WEc1Y2RIMDdJQ292WEhKY2JseHlYRzVjZEdOdmJuTjBJR1J2WjA1MWJXSmxjaUE5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2RrYjJkT2RXMWlaWEluS1R0Y2NseHVYSFJqYjI1emRDQmpZWFJPZFcxaVpYSWdQU0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDZ25ZMkYwVG5WdFltVnlKeWs3WEhKY2JseHlYRzVjZEdGemVXNWpJR1oxYm1OMGFXOXVJR1JwYzNCc1lYbEJibWx0WVd4T2RXMWlaWEp6S0NrZ2UxeHlYRzVjZEZ4MEx5b2dZMjl1YzNRZ1pHRjBZVXhwYzNRZ1BTQmhkMkZwZENCblpYUkJibWx0WVd4elJHRjBZU2dwT3lBcUwxeHlYRzVjY2x4dVhIUmNkR052Ym5OMElHRnVhVzFoYkhOQmNuSmhlU0E5SUd4dlkyRnNRVzVwYldGc2MwcFRUMDR1WVc1cGJXRnNjenRjY2x4dVhISmNibHgwWEhSc1pYUWdaRzluYzBGeWNtRjVUblZ0WW1WeUlEMGdZVzVwYldGc2MwRnljbUY1V3pCZExtUnZaM011YkdWdVozUm9PMXh5WEc1Y2RGeDBiR1YwSUdOaGRITkJjbkpoZVU1MWJXSmxjaUE5SUdGdWFXMWhiSE5CY25KaGVWc3dYUzVqWVhSekxteGxibWQwYUR0Y2NseHVYSEpjYmx4MFhIUmtiMmRPZFcxaVpYSXVhVzV1WlhKVVpYaDBJRDBnWkc5bmMwRnljbUY1VG5WdFltVnlPMXh5WEc1Y2RGeDBZMkYwVG5WdFltVnlMbWx1Ym1WeVZHVjRkQ0E5SUdOaGRITkJjbkpoZVU1MWJXSmxjanRjY2x4dVhIUjlYSEpjYmx4eVhHNWNkR2xtSUNnb1pHOW5UblZ0WW1WeUxDQmpZWFJPZFcxaVpYSXBLU0I3WEhKY2JseDBYSFFvWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjZEZ4MFhIUmthWE53YkdGNVFXNXBiV0ZzVG5WdFltVnljeWdwTzF4eVhHNWNkRngwZlNrb0tUdGNjbHh1WEhSOVhISmNibHh5WEc1Y2RHRnplVzVqSUdaMWJtTjBhVzl1SUdScGMzQnNZWGxCYm1sdFlXeHpLQ2tnZTF4eVhHNWNkRngwTHlvZ1kyOXVjM1FnWkdGMFlVeHBjM1FnUFNCaGQyRnBkQ0JuWlhSQmJtbHRZV3h6UkdGMFlTZ3BPeUFxTDF4eVhHNWNkRngwWTI5dWMzUWdZVzVwYldGc2MwRnljbUY1SUQwZ2JHOWpZV3hCYm1sdFlXeHpTbE5QVGk1aGJtbHRZV3h6TzF4eVhHNWNjbHh1WEhSY2RHRnVhVzFoYkhOQmNuSmhlUzVtYjNKRllXTm9LQ2hoYm1sdFlXd3BJRDArSUh0Y2NseHVYSFJjZEZ4MFpHOW5jMEZ5Y21GNUlEMGdZVzVwYldGc0xtUnZaM003WEhKY2JseDBYSFJjZEdOaGRITkJjbkpoZVNBOUlHRnVhVzFoYkM1allYUnpPMXh5WEc1Y2NseHVYSFJjZEZ4MFpHOW5jMEZ5Y21GNUxtWnZja1ZoWTJnb0tHUnZaeWtnUFQ0Z2UxeHlYRzVjZEZ4MFhIUmNkR052Ym5OMElIdGNjbHh1WEhSY2RGeDBYSFJjZEc1MWJXSmxjaXhjY2x4dVhIUmNkRngwWEhSY2RITndaV05wWlhNc1hISmNibHgwWEhSY2RGeDBYSFJpY21WbFpDeGNjbHh1WEhSY2RGeDBYSFJjZEdOdmJHOXlMRnh5WEc1Y2RGeDBYSFJjZEZ4MGQyVnBaMmgwTEZ4eVhHNWNkRngwWEhSY2RGeDBhR1ZwWjJoMExGeHlYRzVjZEZ4MFhIUmNkRngwWTI5aGRDeGNjbHh1WEhSY2RGeDBYSFJjZEdKcGNuUm9MRnh5WEc1Y2RGeDBYSFJjZEZ4MGJtRnRaU3hjY2x4dVhIUmNkRngwWEhSY2RHZGxibVJsY2l4Y2NseHVYSFJjZEZ4MFhIUmNkR2x0WVdkbExGeHlYRzVjZEZ4MFhIUmNkRngwWkdWell5eGNjbHh1WEhSY2RGeDBYSFJjZEdGa2IzQjBaV1FzWEhKY2JseDBYSFJjZEZ4MGZTQTlJR1J2Wnp0Y2NseHVYSEpjYmx4MFhIUmNkRngwWkc5blFtOTRJRDBnWkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDZ25aR2wySnlrN1hISmNibHgwWEhSY2RGeDBaRzluUW05NExtTnNZWE56VEdsemRDNWhaR1FvSjNCaFoyVmZYMkp2ZUNjcE8xeHlYRzVjZEZ4MFhIUmNkR0ZrYjNCMFpXUWdQVDA5SUNkNVpYTW5JRDhnWkc5blFtOTRMbU5zWVhOelRHbHpkQzVoWkdRb0oyRmtiM0IwWldRbktTQTZJQ2NuTzF4eVhHNWNjbHh1WEhSY2RGeDBYSFJqYjI1emRDQmtiMmRaWldGeWN5QTlJR0pwY25Sb08xeHlYRzVjY2x4dVhIUmNkRngwWEhSamIyNXpkQ0J0YVd4cGMyVmpjMEpsZEhkbFpXNUVUMEpoYm1ReE9UY3dJRDBnUkdGMFpTNXdZWEp6WlNoa2IyZFpaV0Z5Y3lrN1hISmNibHgwWEhSY2RGeDBZMjl1YzNRZ2JXbHNhWE5sWTNOQ1pYUjNaV1Z1VGs5WFlXNWtNVGszTUNBOUlFUmhkR1V1Ym05M0tDazdYSEpjYmx4MFhIUmNkRngwWTI5dWMzUWdZV2RsU1c1TmFXeHBjMlZqY3lBOVhISmNibHgwWEhSY2RGeDBYSFJ0YVd4cGMyVmpjMEpsZEhkbFpXNU9UMWRoYm1ReE9UY3dJQzBnYldsc2FYTmxZM05DWlhSM1pXVnVSRTlDWVc1a01UazNNRHRjY2x4dVhISmNibHgwWEhSY2RGeDBZMjl1YzNRZ2JXbHNhWE5sWTNNZ1BTQmhaMlZKYmsxcGJHbHpaV056TzF4eVhHNWNkRngwWEhSY2RHTnZibk4wSUhObFkzTWdQU0F4TURBd08xeHlYRzVjZEZ4MFhIUmNkR052Ym5OMElHMXBibk1nUFNCelpXTnpJQ29nTmpBN1hISmNibHgwWEhSY2RGeDBZMjl1YzNRZ2FHOTFjaUE5SUcxcGJuTWdLaUEyTUR0Y2NseHVYSFJjZEZ4MFhIUmpiMjV6ZENCa1lYa2dQU0JvYjNWeUlDb2dNalE3WEhKY2JseDBYSFJjZEZ4MFkyOXVjM1FnZVdWaGNpQTlJR1JoZVNBcUlETTJOVHRjY2x4dVhISmNibHgwWEhSY2RGeDBiR1YwSUhsbFlYSnpJRDBnVFdGMGFDNXliM1Z1WkNodGFXeHBjMlZqY3lBdklIbGxZWElwTzF4eVhHNWNjbHh1WEhSY2RGeDBYSFJrYjJkQ2IzZ3VhVzV1WlhKSVZFMU1JRDBnWUZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOFpHbDJJR05zWVhOelBWd2ljR0ZuWlY5ZlltOTRMWFJ2Y0Z3aVBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdsdFp5QnpjbU05WENJdUpIdHBiV0ZuWlgxY0lpQmhiSFE5WENJa2UyNWhiV1Y5SUNSN2MzQmxZMmxsYzMxY0luMHZQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4TDJScGRqNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR1JwZGlCamJHRnpjejFjSW5CaFoyVmZYMkp2ZUMxaWIzUjBiMjFjSWo1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhvTXlCamJHRnpjejFjSW5CaFoyVmZYMkp2ZUMxMGFYUnNaVndpUGlSN2JtRnRaWDBrZTF4eVhHNWNkRngwWEhSY2RGeDBZV1J2Y0hSbFpDQTlQVDBnSjNsbGN5Y2dQeUJnSUMwZ1BITndZVzQrWVdSdmNIUmxaRHd2YzNCaGJqNWdJRG9nSnlkY2NseHVYSFJjZEZ4MFhIUjlQQzlvTXo1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhrYVhZZ1kyeGhjM005WENKd1lXZGxYMTlpYjNndFkyOXVkR1Z1ZEZ3aVBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeGthWFlnWTJ4aGMzTTlYQ0psZUhCaGJtUk5iM0psUTI5dWRHVnVkRndpSUdsa1BWd2ljMmh2ZDAxdmNtVXRKSHR6Y0dWamFXVnpmU1I3Ym5WdFltVnlmVndpUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThjQ0JqYkdGemN6MWNJbkJoWjJWZlgySnZlQzEwWlhoMFhDSStYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWtlMlJsYzJOOVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2Y0Q1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOEwyUnBkajVjY2x4dUlDQWdJRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhrYVhZZ1kyeGhjM005WENKbGVIQmhibVJOYjNKbFNHOXNaR1Z5WENJK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhpZFhSMGIyNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHVjRjR0Z1WkMxdGIzSmxYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmtZWFJoTFdocFpHVjBaWGgwUFZ3aUxpNHVVbVZoWkNCc1pYTnpYQ0pjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1JoZEdFdGMyaHZkM1JsZUhROVhDSXVMaTVTWldGa0lHMXZjbVZjSWx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWkdGMFlTMTBZWEpuWlhROVhDSnphRzkzVFc5eVpTMGtlM053WldOcFpYTjlKSHR1ZFcxaVpYSjlYQ0pjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR05zWVhOelBWd2lZblYwZEc5dUlITm9iM2ROYjNKbFhDSmNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTGk0dVVtVmhaQ0J0YjNKbFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2WW5WMGRHOXVQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2WkdsMlBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5a2FYWStYSEpjYmlBZ0lDQmNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4MWJDQmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMXBZMjl1YzF3aVBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHNhU0JqYkdGemN6MWNJbkJoWjJWZlgySnZlQzFwWTI5dVhDSStYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4cElHTnNZWE56UFZ3aVptRnpJR1poTFhkbGFXZG9kRndpUGp3dmFWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0ErUEhOd1lXNGdZMnhoYzNNOVhDSndZV2RsWDE5aWIzZ3RhV052YmkwdGRHVjRkRndpUGlSN2QyVnBaMmgwZlNCclp6d3ZjM0JoYmo1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOEwyeHBQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhzYVNCamJHRnpjejFjSW5CaFoyVmZYMkp2ZUMxcFkyOXVYQ0krWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHBJR05zWVhOelBWd2labUZ6SUdaaExXRnljbTkzY3kxaGJIUXRkbHdpUGp3dmFWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0ErUEhOd1lXNGdZMnhoYzNNOVhDSndZV2RsWDE5aWIzZ3RhV052YmkwdGRHVjRkRndpUGlSN2FHVnBaMmgwZlNCamJUd3ZjM0JoYmo1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOEwyeHBQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhzYVNCamJHRnpjejFjSW5CaFoyVmZYMkp2ZUMxcFkyOXVYQ0krWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHBJR05zWVhOelBWd2labUZ6SUdaaExXTmhiR1Z1WkdGeUxXTm9aV05yWENJK1BDOXBYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUQ0OGMzQmhiaUJqYkdGemN6MWNJbkJoWjJWZlgySnZlQzFwWTI5dUxTMTBaWGgwWENJK0pIdDVaV0Z5YzMwZ2VYSXVQQzl6Y0dGdVBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEd3ZiR2srWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEd4cElHTnNZWE56UFZ3aWNHRm5aVjlmWW05NExXbGpiMjVjSWo1Y2NseHVYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBQR2tnWTJ4aGMzTTlYQ0ptWVhNZ1ptRXRjR0ZzWlhSMFpWd2lQand2YVZ4eVhHNWNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUStQSE53WVc0Z1kyeGhjM005WENKd1lXZGxYMTlpYjNndGFXTnZiaTB0ZEdWNGRGd2lQaVI3WTI5c2IzSmJNRjBnUHlCamIyeHZjbHN3WFNBNklDY3RKMzA4TDNOd1lXNCtYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzlzYVQ1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGJHa2dZMnhoYzNNOVhDSndZV2RsWDE5aWIzZ3RhV052Ymx3aVBseHlYRzVjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFE4YVNCamJHRnpjejFjSW1aaGN5Qm1ZUzF3WVd4bGRIUmxYQ0krUEM5cFhISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRDQ4YzNCaGJpQmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMXBZMjl1TFMxMFpYaDBYQ0krSkh0amIyeHZjbHN4WFNBL0lHTnZiRzl5V3pGZElEb2dKeTBuZlR3dmMzQmhiajVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4TDJ4cFBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHNhU0JqYkdGemN6MWNJbkJoWjJWZlgySnZlQzFwWTI5dVhDSStYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBYSFJjZER4cElHTnNZWE56UFZ3aVptRnpJR1poTFhCaGJHVjBkR1ZjSWo0OEwybGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwUGp4emNHRnVJR05zWVhOelBWd2ljR0ZuWlY5ZlltOTRMV2xqYjI0dExYUmxlSFJjSWo0a2UyTnZiRzl5V3pKZElEOGdZMjlzYjNKYk1sMGdPaUFuTFNkOVBDOXpjR0Z1UGx4eVhHNWNkRngwWEhSY2RGeDBYSFJjZEZ4MFBDOXNhVDVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YkdrZ1kyeGhjM005WENKd1lXZGxYMTlpYjNndGFXTnZibHdpUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThhU0JqYkdGemN6MWNJbVpoY3lCbVlTMXdZWGRjSWo0OEwybGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUGp4emNHRnVJR05zWVhOelBWd2ljR0ZuWlY5ZlltOTRMV2xqYjI0dExYUmxlSFJjSWo0a2UyTnZZWFI5UEM5emNHRnVQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2YkdrK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHeHBJR05zWVhOelBWd2ljR0ZuWlY5ZlltOTRMV2xqYjI1Y0lqNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdrZ1kyeGhjM005WENKbVlYTWdabUV0ZG1WdWRYTXRiV0Z5YzF3aVBqd3ZhVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBK1BITndZVzRnWTJ4aGMzTTlYQ0p3WVdkbFgxOWliM2d0YVdOdmJpMHRkR1Y0ZEZ3aVBpUjdaMlZ1WkdWeWZUd3ZjM0JoYmo1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOEwyeHBQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOTFiRDVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5a2FYWStYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JnTzF4eVhHNWNjbHh1WEhSY2RGeDBYSFJrYjJkelFtOTRMbUZ3Y0dWdVpFTm9hV3hrS0dSdlowSnZlQ2s3WEhKY2JseDBYSFJjZEgwcE8xeHlYRzVjY2x4dVhIUmNkRngwWTJGMGMwRnljbUY1TG1admNrVmhZMmdvS0dOaGRDa2dQVDRnZTF4eVhHNWNkRngwWEhSY2RHTmhkRUp2ZUNBOUlHUnZZM1Z0Wlc1MExtTnlaV0YwWlVWc1pXMWxiblFvSjJScGRpY3BPMXh5WEc1Y2RGeDBYSFJjZEdOaGRFSnZlQzVqYkdGemMweHBjM1F1WVdSa0tDZHdZV2RsWDE5aWIzZ25LVHRjY2x4dVhISmNibHgwWEhSY2RGeDBZMjl1YzNRZ1kyRjBXV1ZoY25NZ1BTQmpZWFF1WW1seWRHZzdYSEpjYmx4eVhHNWNkRngwWEhSY2RHTnZibk4wSUcxcGJHbHpaV056UW1WMGQyVmxia1JQUW1GdVpERTVOekJqWVhRZ1BTQkVZWFJsTG5CaGNuTmxLR05oZEZsbFlYSnpLVHRjY2x4dVhIUmNkRngwWEhSamIyNXpkQ0J0YVd4cGMyVmpjMEpsZEhkbFpXNU9UMWRoYm1ReE9UY3dJRDBnUkdGMFpTNXViM2NvS1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwWTI5dWMzUWdZV2RsU1c1TmFXeHBjMlZqYzBOaGRDQTlYSEpjYmx4MFhIUmNkRngwWEhSdGFXeHBjMlZqYzBKbGRIZGxaVzVPVDFkaGJtUXhPVGN3SUMwZ2JXbHNhWE5sWTNOQ1pYUjNaV1Z1UkU5Q1lXNWtNVGszTUdOaGREdGNjbHh1WEhKY2JseDBYSFJjZEZ4MFkyOXVjM1FnYldsc2FYTmxZM05EWVhRZ1BTQmhaMlZKYmsxcGJHbHpaV056UTJGME8xeHlYRzVjZEZ4MFhIUmNkR052Ym5OMElITmxZM01nUFNBeE1EQXdPMXh5WEc1Y2RGeDBYSFJjZEdOdmJuTjBJRzFwYm5NZ1BTQnpaV056SUNvZ05qQTdYSEpjYmx4MFhIUmNkRngwWTI5dWMzUWdhRzkxY2lBOUlHMXBibk1nS2lBMk1EdGNjbHh1WEhSY2RGeDBYSFJqYjI1emRDQmtZWGtnUFNCb2IzVnlJQ29nTWpRN1hISmNibHgwWEhSY2RGeDBZMjl1YzNRZ2VXVmhjaUE5SUdSaGVTQXFJRE0yTlR0Y2NseHVYSEpjYmx4MFhIUmNkRngwYkdWMElIbGxZWEp6UTJGMElEMGdUV0YwYUM1eWIzVnVaQ2h0YVd4cGMyVmpjME5oZENBdklIbGxZWElwTzF4eVhHNWNjbHh1WEhSY2RGeDBYSFJqWVhSQ2IzZ3VhVzV1WlhKSVZFMU1JRDBnWUZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOFpHbDJJR05zWVhOelBWd2ljR0ZuWlY5ZlltOTRMWFJ2Y0Z3aVBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdsdFp5QnpjbU05WENJdUpIdGpZWFF1YVcxaFoyVjlYQ0lnWVd4MFBWd2lKSHRqWVhRdWJtRnRaWDBnSkh0Y2NseHVYSFJjZEZ4MFhIUmNkR05oZEM1emNHVmphV1Z6WEhKY2JseDBYSFJjZEZ4MGZWd2lmUzgrWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dlpHbDJQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4WkdsMklHTnNZWE56UFZ3aWNHRm5aVjlmWW05NExXSnZkSFJ2YlZ3aVBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdneklHTnNZWE56UFZ3aWNHRm5aVjlmWW05NExYUnBkR3hsWENJK0pIdGpZWFF1Ym1GdFpYMDhMMmd6UGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR1JwZGlCamJHRnpjejFjSW5CaFoyVmZYMkp2ZUMxamIyNTBaVzUwWENJK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHUnBkaUJqYkdGemN6MWNJbVY0Y0dGdVpFMXZjbVZEYjI1MFpXNTBYQ0lnYVdROVhDSnphRzkzVFc5eVpTMGtlMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWTJGMExuTndaV05wWlhOY2NseHVYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSOUpIdGpZWFF1Ym5WdFltVnlmVndpUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThjQ0JqYkdGemN6MWNJbkJoWjJWZlgySnZlQzEwWlhoMFhDSStYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWtlMk5oZEM1a1pYTmpmVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOEwzQStYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzlrYVhZK1hISmNiaUFnSUNCY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOFpHbDJJR05zWVhOelBWd2laWGh3WVc1a1RXOXlaVWh2YkdSbGNsd2lQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOFluVjBkRzl1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JsZUhCaGJtUXRiVzl5WlZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWkdGMFlTMW9hV1JsZEdWNGREMWNJaTR1TGxKbFlXUWdiR1Z6YzF3aVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCa1lYUmhMWE5vYjNkMFpYaDBQVndpTGk0dVVtVmhaQ0J0YjNKbFhDSmNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHUmhkR0V0ZEdGeVoyVjBQVndpYzJodmQwMXZjbVV0Skh0allYUXVjM0JsWTJsbGMzMGtlMXh5WEc1Y2RGeDBYSFJjZEZ4MFkyRjBMbTUxYldKbGNseHlYRzVjZEZ4MFhIUmNkSDFjSWx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTJ4aGMzTTlYQ0ppZFhSMGIyNGdjMmh2ZDAxdmNtVmNJbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdUxpNVNaV0ZrSUcxdmNtVmNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5aWRYUjBiMjQrWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5a2FYWStYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOEwyUnBkajVjY2x4dUlDQWdJRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BIVnNJR05zWVhOelBWd2ljR0ZuWlY5ZlltOTRMV2xqYjI1elhDSStYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR3hwSUdOc1lYTnpQVndpY0dGblpWOWZZbTk0TFdsamIyNWNJajVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHa2dZMnhoYzNNOVhDSm1ZWE1nWm1FdGQyVnBaMmgwWENJK1BDOXBYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUQ0OGMzQmhiaUJqYkdGemN6MWNJbkJoWjJWZlgySnZlQzFwWTI5dUxTMTBaWGgwWENJK0pIdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSallYUXVkMlZwWjJoMFhISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkSDBnYTJjOEwzTndZVzQrWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5c2FUNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThiR2tnWTJ4aGMzTTlYQ0p3WVdkbFgxOWliM2d0YVdOdmJsd2lQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGFTQmpiR0Z6Y3oxY0ltWmhjeUJtWVMxaGNuSnZkM010WVd4MExYWmNJajQ4TDJsY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQanh6Y0dGdUlHTnNZWE56UFZ3aWNHRm5aVjlmWW05NExXbGpiMjR0TFhSbGVIUmNJajRrZTF4eVhHNWNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkR05oZEM1b1pXbG5hSFJjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MGZXTnRQQzl6Y0dGdVBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEd3ZiR2srWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEd4cElHTnNZWE56UFZ3aWNHRm5aVjlmWW05NExXbGpiMjVjSWo1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR2tnWTJ4aGMzTTlYQ0ptWVhNZ1ptRXRZMkZzWlc1a1lYSXRZMmhsWTJ0Y0lqNDhMMmxjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BqeHpjR0Z1SUdOc1lYTnpQVndpY0dGblpWOWZZbTk0TFdsamIyNHRMWFJsZUhSY0lqNGtlM2xsWVhKelEyRjBmU0I1Y2k0OEwzTndZVzQrWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5c2FUNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThiR2tnWTJ4aGMzTTlYQ0p3WVdkbFgxOWliM2d0YVdOdmJsd2lQbHh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhROGFTQmpiR0Z6Y3oxY0ltWmhjeUJtWVMxd1lXeGxkSFJsWENJK1BDOXBYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEQ0OGMzQmhiaUJqYkdGemN6MWNJbkJoWjJWZlgySnZlQzFwWTI5dUxTMTBaWGgwWENJK0pIdGpZWFF1WTI5c2IzSmJNRjBnUHlCallYUXVZMjlzYjNKYk1GMGdPaUFuTFNkOVBDOXpjR0Z1UGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dmJHaytYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR3hwSUdOc1lYTnpQVndpY0dGblpWOWZZbTk0TFdsamIyNWNJajVjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFBHa2dZMnhoYzNNOVhDSm1ZWE1nWm1FdGNHRnNaWFIwWlZ3aVBqd3ZhVnh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhRK1BITndZVzRnWTJ4aGMzTTlYQ0p3WVdkbFgxOWliM2d0YVdOdmJpMHRkR1Y0ZEZ3aVBpUjdZMkYwTG1OdmJHOXlXekZkSUQ4Z1kyRjBMbU52Ykc5eVd6RmRJRG9nSnkwbmZUd3ZjM0JoYmo1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOEwyeHBQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhzYVNCamJHRnpjejFjSW5CaFoyVmZYMkp2ZUMxcFkyOXVYQ0krWEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwWEhSY2REeHBJR05zWVhOelBWd2labUZ6SUdaaExYQmhiR1YwZEdWY0lqNDhMMmxjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFBqeHpjR0Z1SUdOc1lYTnpQVndpY0dGblpWOWZZbTk0TFdsamIyNHRMWFJsZUhSY0lqNGtlMk5oZEM1amIyeHZjbHN5WFNBL0lHTmhkQzVqYjJ4dmNsc3lYU0E2SUNjdEozMDhMM053WVc0K1hISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUThMMnhwUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4c2FTQmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMXBZMjl1WENJK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhwSUdOc1lYTnpQVndpWm1GeklHWmhMWEJoZDF3aVBqd3ZhVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBK1BITndZVzRnWTJ4aGMzTTlYQ0p3WVdkbFgxOWliM2d0YVdOdmJpMHRkR1Y0ZEZ3aVBpUjdYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFkyRjBMbU52WVhSY2NseHVYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBmVHd2YzNCaGJqNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThMMnhwUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4c2FTQmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMXBZMjl1WENJK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhwSUdOc1lYTnpQVndpWm1GeklHWmhMWFpsYm5WekxXMWhjbk5jSWo0OEwybGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUGp4emNHRnVJR05zWVhOelBWd2ljR0ZuWlY5ZlltOTRMV2xqYjI0dExYUmxlSFJjSWo0a2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEdOaGRDNW5aVzVrWlhKY2NseHVYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBmVHd2YzNCaGJqNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThMMnhwUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzkxYkQ1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOWthWFkrWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCZ08xeHlYRzVjY2x4dVhIUmNkRngwWEhSallYUnpRbTk0TG1Gd2NHVnVaRU5vYVd4a0tHTmhkRUp2ZUNrN1hISmNibHgwWEhSY2RIMHBPMXh5WEc1Y2RGeDBmU2s3WEhKY2JseHlYRzVjZEZ4MGJHVjBJR1J2WjBKdmVFRnljbUY1SUQwZ1d5NHVMbVJ2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNKQmJHd29KeU5rYjJkekxXSnZlQ0F1Y0dGblpWOWZZbTk0SnlsZE8xeHlYRzVjZEZ4MGJHVjBJR05oZEVKdmVFRnljbUY1SUQwZ1d5NHVMbVJ2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNKQmJHd29KeU5qWVhSekxXSnZlQ0F1Y0dGblpWOWZZbTk0SnlsZE8xeHlYRzVjZEZ4MGJHVjBJR04xY25KbGJuUlFZV2RsSUQwZ01UdGNjbHh1WEhSY2RHeGxkQ0JsYkdWdFpXNTBjMDl1VUdGblpTQTlJRFE3WEhKY2JseHlYRzVjZEZ4MFkyOXVjM1FnY0dGbmFXNWhkR2x2YmtWc1JHOW5jeUE5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2RrYjJkekxYQmhaMmx1WVhScGIyNG5LVHRjY2x4dVhIUmNkR052Ym5OMElIQmhaMmx1WVhScGIyNUZiRU5oZEhNZ1BTQmtiMk4xYldWdWRDNW5aWFJGYkdWdFpXNTBRbmxKWkNnblkyRjBjeTF3WVdkcGJtRjBhVzl1SnlrN1hISmNibHh5WEc1Y2RGeDBablZ1WTNScGIyNGdaR2x6Y0d4aGVWQmhaMmx1WVhSbFpFbDBaVzF6S0dsMFpXMXpMQ0IzY21Gd2NHVnlMQ0JwZEdWdGMxQmxjbEJoWjJVc0lIQmhaMlVwSUh0Y2NseHVYSFJjZEZ4MGQzSmhjSEJsY2k1cGJtNWxja2hVVFV3Z1BTQW5KenRjY2x4dVhIUmNkRngwY0dGblpTMHRPMXh5WEc1Y2NseHVYSFJjZEZ4MGJHVjBJSE4wWVhKMElEMGdhWFJsYlhOUVpYSlFZV2RsSUNvZ2NHRm5aVHRjY2x4dVhIUmNkRngwYkdWMElHVnVaQ0E5SUhOMFlYSjBJQ3NnYVhSbGJYTlFaWEpRWVdkbE8xeHlYRzVjZEZ4MFhIUnNaWFFnY0dGbmFXNWhkR1ZrU1hSbGJYTWdQU0JwZEdWdGN5NXpiR2xqWlNoemRHRnlkQ3dnWlc1a0tUdGNjbHh1WEhKY2JseDBYSFJjZEhCaFoybHVZWFJsWkVsMFpXMXpMbVp2Y2tWaFkyZ29LR2wwWlcwcElEMCtJSHRjY2x4dVhIUmNkRngwWEhSc1pYUWdhWFJsYlVWc0lEMGdaRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENnblpHbDJKeWs3WEhKY2JseDBYSFJjZEZ4MGFYUmxiVVZzTG1Oc1lYTnpUR2x6ZEM1aFpHUW9KM0JoWjJWZlgySnZlQ2NwTzF4eVhHNWNjbHh1WEhSY2RGeDBYSFJwZEdWdFJXd2dQU0JwZEdWdE8xeHlYRzVjY2x4dVhIUmNkRngwWEhSM2NtRndjR1Z5TG1Gd2NHVnVaRU5vYVd4a0tHbDBaVzFGYkNrN1hISmNibHgwWEhSY2RIMHBPMXh5WEc1Y2RGeDBmVnh5WEc1Y2NseHVYSFJjZEdaMWJtTjBhVzl1SUdScGMzQnNZWGxRWVdkcGJtRjBhVzl1S0dsMFpXMXpMQ0IzY21Gd2NHVnlMQ0JwZEdWdGMxQmxjbEJoWjJVcElIdGNjbHh1WEhSY2RGeDBkM0poY0hCbGNpNXBibTVsY2toVVRVd2dQU0FuSnp0Y2NseHVYSEpjYmx4MFhIUmNkR3hsZENCd1lXZGxRMjkxYm5RZ1BTQk5ZWFJvTG1ObGFXd29hWFJsYlhNdWJHVnVaM1JvSUM4Z2FYUmxiWE5RWlhKUVlXZGxLVHRjY2x4dVhISmNibHgwWEhSY2RHWnZjaUFvYkdWMElHa2dQU0F4T3lCcElEd2djR0ZuWlVOdmRXNTBJQ3NnTVRzZ2FTc3JLU0I3WEhKY2JseDBYSFJjZEZ4MGJHVjBJR0owYmlBOUlIQmhaMmx1WVhScGIyNUNkWFIwYjI0b2FTd2djR0ZuWlVOdmRXNTBLVHRjY2x4dVhISmNibHgwWEhSY2RGeDBZblJ1TG5OMGVXeGxMbmRwWkhSb0lEMGdKekFuTzF4eVhHNWNkRngwWEhSY2RHSjBiaTV6ZEhsc1pTNXZkbVZ5Wm14dmR5QTlJQ2RvYVdSa1pXNG5PMXh5WEc1Y2RGeDBYSFJjZEdKMGJpNXpkSGxzWlM1dFlYSm5hVzRnUFNBbk1DYzdYSEpjYmx4eVhHNWNkRngwWEhSY2RIZHlZWEJ3WlhJdVlYQndaVzVrUTJocGJHUW9ZblJ1S1R0Y2NseHVYSFJjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkRngwYkdWMElHNWxlSFJDZEc0Z1BTQnVaWGgwVUdGblpTaHdZV2RsUTI5MWJuUXBPMXh5WEc1Y2RGeDBYSFIzY21Gd2NHVnlMbUZ3Y0dWdVpFTm9hV3hrS0c1bGVIUkNkRzRwTzF4eVhHNWNjbHh1WEhSY2RGeDBiR1YwSUhCeVpYWkNkRzRnUFNCd2NtVjJVR0ZuWlNod1lXZGxRMjkxYm5RcE8xeHlYRzVjZEZ4MFhIUjNjbUZ3Y0dWeUxuQnlaWEJsYm1Rb2NISmxka0owYmlrN1hISmNibHh5WEc1Y2RGeDBYSFJzWlhRZ1kzVnljbVZ1ZEVKMGJrUnZaM01nUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLRnh5WEc1Y2RGeDBYSFJjZENjalpHOW5jeUF1Y0dGbmFXNWhkR2x2YmkxaWRHNHVZV04wYVhabEoxeHlYRzVjZEZ4MFhIUXBPMXh5WEc1Y2RGeDBYSFJzWlhRZ1kzVnljbVZ1ZEVKMGJrTmhkSE1nUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLRnh5WEc1Y2RGeDBYSFJjZENjalkyRjBjeUF1Y0dGbmFXNWhkR2x2YmkxaWRHNHVZV04wYVhabEoxeHlYRzVjZEZ4MFhIUXBPMXh5WEc1Y2NseHVYSFJjZEZ4MGFXWWdLR04xY25KbGJuUkNkRzVFYjJkeklDWW1JR04xY25KbGJuUkNkRzVEWVhSektTQjdYSEpjYmx4MFhIUmNkRngwWTNWeWNtVnVkRUowYmtSdlozTXVZMnhoYzNOTWFYTjBMbUZrWkNnblozSnZkWEFuS1R0Y2NseHVYSFJjZEZ4MFhIUmpkWEp5Wlc1MFFuUnVSRzluY3k1dVpYaDBSV3hsYldWdWRGTnBZbXhwYm1jdVkyeGhjM05NYVhOMExtRmtaQ2duWjNKdmRYQW5LVHRjY2x4dVhIUmNkRngwWEhSamRYSnlaVzUwUW5SdVJHOW5jeTV1WlhoMFJXeGxiV1Z1ZEZOcFlteHBibWN1Ym1WNGRFVnNaVzFsYm5SVGFXSnNhVzVuTG1Oc1lYTnpUR2x6ZEM1aFpHUW9YSEpjYmx4MFhIUmNkRngwWEhRblozSnZkWEFuWEhKY2JseDBYSFJjZEZ4MEtUdGNjbHh1WEhSY2RGeDBYSFJqZFhKeVpXNTBRblJ1Ukc5bmN5NXdjbVYyYVc5MWMwVnNaVzFsYm5SVGFXSnNhVzVuTG1Oc1lYTnpUR2x6ZEM1aFpHUW9KMmR5YjNWd0p5azdYSEpjYmx4eVhHNWNkRngwWEhSY2RHTjFjbkpsYm5SQ2RHNURZWFJ6TG1Oc1lYTnpUR2x6ZEM1aFpHUW9KMmR5YjNWd0p5azdYSEpjYmx4MFhIUmNkRngwWTNWeWNtVnVkRUowYmtOaGRITXVibVY0ZEVWc1pXMWxiblJUYVdKc2FXNW5MbU5zWVhOelRHbHpkQzVoWkdRb0oyZHliM1Z3SnlrN1hISmNibHgwWEhSY2RGeDBZM1Z5Y21WdWRFSjBia05oZEhNdWJtVjRkRVZzWlcxbGJuUlRhV0pzYVc1bkxtNWxlSFJGYkdWdFpXNTBVMmxpYkdsdVp5NWpiR0Z6YzB4cGMzUXVZV1JrS0Z4eVhHNWNkRngwWEhSY2RGeDBKMmR5YjNWd0oxeHlYRzVjZEZ4MFhIUmNkQ2s3WEhKY2JseDBYSFJjZEZ4MFkzVnljbVZ1ZEVKMGJrTmhkSE11Y0hKbGRtbHZkWE5GYkdWdFpXNTBVMmxpYkdsdVp5NWpiR0Z6YzB4cGMzUXVZV1JrS0NkbmNtOTFjQ2NwTzF4eVhHNWNkRngwWEhSOVhISmNibHgwWEhSOVhISmNibHh5WEc1Y2RGeDBablZ1WTNScGIyNGdibVY0ZEZCaFoyVW9jR0ZuWlVOdmRXNTBLU0I3WEhKY2JseDBYSFJjZEd4bGRDQnVaWGgwUW5SdUlEMGdaRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENnblluVjBkRzl1SnlrN1hISmNibHgwWEhSY2RHNWxlSFJDZEc0dVkyeGhjM05NYVhOMExtRmtaQ2duYm1WNGRDY3BPMXh5WEc1Y2RGeDBYSFJ1WlhoMFFuUnVMbWx1Ym1WeVZHVjRkQ0E5SUNjK0p6dGNjbHh1WEhSY2RGeDBibVY0ZEVKMGJpNWpiR0Z6YzB4cGMzUXVZV1JrS0Nkd1lXZHBibUYwYVc5dUxXSjBiaWNwTzF4eVhHNWNjbHh1WEhSY2RGeDBibVY0ZEVKMGJpNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZGpiR2xqYXljc0lDaGxLU0E5UGlCN1hISmNibHgwWEhSY2RGeDBhV1lnS0c1bGVIUkNkRzR1Y0dGeVpXNTBSV3hsYldWdWRDQTlQU0J3WVdkcGJtRjBhVzl1Uld4RWIyZHpLU0I3WEhKY2JseDBYSFJjZEZ4MFhIUmthWE53YkdGNVVHRm5hVzVoZEdWa1NYUmxiWE1vWEhKY2JseDBYSFJjZEZ4MFhIUmNkR1J2WjBKdmVFRnljbUY1TEZ4eVhHNWNkRngwWEhSY2RGeDBYSFJrYjJkelFtOTRMRnh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmxiR1Z0Wlc1MGMwOXVVR0ZuWlN4Y2NseHVYSFJjZEZ4MFhIUmNkRngwWTNWeWNtVnVkRkJoWjJWY2NseHVYSFJjZEZ4MFhIUmNkQ2s3WEhKY2JseHlYRzVjZEZ4MFhIUmNkRngwYkdWMElHRmpkR2wyWlVKMGJrUnZaeUE5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9YSEpjYmx4MFhIUmNkRngwWEhSY2RDY2paRzluY3lBdWNHRm5hVzVoZEdsdmJpMWlkRzR1WVdOMGFYWmxKMXh5WEc1Y2RGeDBYSFJjZEZ4MEtUdGNjbHh1WEhKY2JseDBYSFJjZEZ4MFhIUmhZM1JwZG1WQ2RHNUViMmN1Ym1WNGRFVnNaVzFsYm5SVGFXSnNhVzVuTG1Oc2FXTnJLQ2s3WEhKY2JseHlYRzVjZEZ4MFhIUmNkRngwYVdZZ0tHTjFjbkpsYm5SUVlXZGxJRDA5UFNCd1lXZGxRMjkxYm5RcElIdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MGJtVjRkRUowYmk1emRIbHNaUzV2Y0dGamFYUjVJRDBnSnpBdU5TYzdYSEpjYmx4MFhIUmNkRngwWEhSY2RHNWxlSFJDZEc0dWMzUjViR1V1Y0c5cGJuUmxja1YyWlc1MGN5QTlJQ2R1YjI1bEp6dGNjbHh1WEhSY2RGeDBYSFJjZEgxY2NseHVYSEpjYmx4MFhIUmNkRngwWEhSc1pYUWdjSEpsZGtKMGJpQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5TmtiMmR6SUM1d2NtVjJKeWs3WEhKY2JseHlYRzVjZEZ4MFhIUmNkRngwYVdZZ0tHTjFjbkpsYm5SUVlXZGxJQ0U5UFNBeEtTQjdYSEpjYmx4MFhIUmNkRngwWEhSY2RIQnlaWFpDZEc0dWMzUjViR1V1YjNCaFkybDBlU0E5SUNjeEp6dGNjbHh1WEhSY2RGeDBYSFJjZEZ4MGNISmxka0owYmk1emRIbHNaUzV3YjJsdWRHVnlSWFpsYm5SeklEMGdKMkZzYkNjN1hISmNibHgwWEhSY2RGeDBYSFI5WEhKY2JseHlYRzVjZEZ4MFhIUmNkRngwYVdZZ0tHRmpkR2wyWlVKMGJrUnZaeWtnZTF4eVhHNWNkRngwWEhSY2RGeDBYSFJoWTNScGRtVkNkRzVFYjJjdVkyeGhjM05NYVhOMExtRmtaQ2duWjNKdmRYQW5LVHRjY2x4dVhIUmNkRngwWEhSY2RGeDBZV04wYVhabFFuUnVSRzluTG01bGVIUkZiR1Z0Wlc1MFUybGliR2x1Wnk1amJHRnpjMHhwYzNRdVlXUmtLQ2RuY205MWNDY3BPMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmhZM1JwZG1WQ2RHNUViMmN1Y0hKbGRtbHZkWE5GYkdWdFpXNTBVMmxpYkdsdVp5NWpiR0Z6YzB4cGMzUXVZV1JrS0NkbmNtOTFjQ2NwTzF4eVhHNWNkRngwWEhSY2RGeDBmVnh5WEc1Y2RGeDBYSFJjZEgxY2NseHVYSEpjYmx4MFhIUmNkRngwYVdZZ0tHNWxlSFJDZEc0dWNHRnlaVzUwUld4bGJXVnVkQ0E5UFNCd1lXZHBibUYwYVc5dVJXeERZWFJ6S1NCN1hISmNibHgwWEhSY2RGeDBYSFJrYVhOd2JHRjVVR0ZuYVc1aGRHVmtTWFJsYlhNb1hISmNibHgwWEhSY2RGeDBYSFJjZEdOaGRFSnZlRUZ5Y21GNUxGeHlYRzVjZEZ4MFhIUmNkRngwWEhSallYUnpRbTk0TEZ4eVhHNWNkRngwWEhSY2RGeDBYSFJsYkdWdFpXNTBjMDl1VUdGblpTeGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFkzVnljbVZ1ZEZCaFoyVmNjbHh1WEhSY2RGeDBYSFJjZENrN1hISmNibHh5WEc1Y2RGeDBYSFJjZEZ4MGJHVjBJR0ZqZEdsMlpVSjBia05oZENBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvWEhKY2JseDBYSFJjZEZ4MFhIUmNkQ2NqWTJGMGN5QXVjR0ZuYVc1aGRHbHZiaTFpZEc0dVlXTjBhWFpsSjF4eVhHNWNkRngwWEhSY2RGeDBLVHRjY2x4dVhISmNibHgwWEhSY2RGeDBYSFJoWTNScGRtVkNkRzVEWVhRdWJtVjRkRVZzWlcxbGJuUlRhV0pzYVc1bkxtTnNhV05yS0NrN1hISmNibHh5WEc1Y2RGeDBYSFJjZEZ4MGFXWWdLR04xY25KbGJuUlFZV2RsSUQwOVBTQndZV2RsUTI5MWJuUXBJSHRjY2x4dVhIUmNkRngwWEhSY2RGeDBibVY0ZEVKMGJpNXpkSGxzWlM1dmNHRmphWFI1SUQwZ0p6QXVOU2M3WEhKY2JseDBYSFJjZEZ4MFhIUmNkRzVsZUhSQ2RHNHVjM1I1YkdVdWNHOXBiblJsY2tWMlpXNTBjeUE5SUNkdWIyNWxKenRjY2x4dVhIUmNkRngwWEhSY2RIMWNjbHh1WEhKY2JseDBYSFJjZEZ4MFhIUnNaWFFnY0hKbGRrSjBiaUE5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9KeU5qWVhSeklDNXdjbVYySnlrN1hISmNibHh5WEc1Y2RGeDBYSFJjZEZ4MGFXWWdLR04xY25KbGJuUlFZV2RsSUNFOVBTQXhLU0I3WEhKY2JseDBYSFJjZEZ4MFhIUmNkSEJ5WlhaQ2RHNHVjM1I1YkdVdWIzQmhZMmwwZVNBOUlDY3hKenRjY2x4dVhIUmNkRngwWEhSY2RGeDBjSEpsZGtKMGJpNXpkSGxzWlM1d2IybHVkR1Z5UlhabGJuUnpJRDBnSjJGc2JDYzdYSEpjYmx4MFhIUmNkRngwWEhSOVhISmNibHh5WEc1Y2RGeDBYSFJjZEZ4MGFXWWdLR0ZqZEdsMlpVSjBia05oZENrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhSaFkzUnBkbVZDZEc1RFlYUXVZMnhoYzNOTWFYTjBMbUZrWkNnblozSnZkWEFuS1R0Y2NseHVYSFJjZEZ4MFhIUmNkRngwWVdOMGFYWmxRblJ1UTJGMExtNWxlSFJGYkdWdFpXNTBVMmxpYkdsdVp5NWpiR0Z6YzB4cGMzUXVZV1JrS0NkbmNtOTFjQ2NwTzF4eVhHNWNkRngwWEhSY2RGeDBYSFJoWTNScGRtVkNkRzVEWVhRdWNISmxkbWx2ZFhORmJHVnRaVzUwVTJsaWJHbHVaeTVqYkdGemMweHBjM1F1WVdSa0tDZG5jbTkxY0NjcE8xeHlYRzVjZEZ4MFhIUmNkRngwZlZ4eVhHNWNkRngwWEhSY2RIMWNjbHh1WEhSY2RGeDBmU2s3WEhKY2JseHlYRzVjZEZ4MFhIUnlaWFIxY200Z2JtVjRkRUowYmp0Y2NseHVYSFJjZEgxY2NseHVYSEpjYmx4MFhIUm1kVzVqZEdsdmJpQndjbVYyVUdGblpTaHdZV2RsUTI5MWJuUXBJSHRjY2x4dVhIUmNkRngwYkdWMElIQnlaWFpDZEc0Z1BTQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0NkaWRYUjBiMjRuS1R0Y2NseHVYSFJjZEZ4MGNISmxka0owYmk1amJHRnpjMHhwYzNRdVlXUmtLQ2R3Y21WMkp5azdYSEpjYmx4MFhIUmNkSEJ5WlhaQ2RHNHVhVzV1WlhKVVpYaDBJRDBnSnp3bk8xeHlYRzVjZEZ4MFhIUndjbVYyUW5SdUxtTnNZWE56VEdsemRDNWhaR1FvSjNCaFoybHVZWFJwYjI0dFluUnVKeWs3WEhKY2JseHlYRzVjZEZ4MFhIUndjbVYyUW5SdUxtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0oyTnNhV05ySnl3Z0tHVXBJRDArSUh0Y2NseHVYSFJjZEZ4MFhIUnBaaUFvY0hKbGRrSjBiaTV3WVhKbGJuUkZiR1Z0Wlc1MElEMDlJSEJoWjJsdVlYUnBiMjVGYkVSdlozTXBJSHRjY2x4dVhIUmNkRngwWEhSY2RHUnBjM0JzWVhsUVlXZHBibUYwWldSSmRHVnRjeWhjY2x4dVhIUmNkRngwWEhSY2RGeDBaRzluUW05NFFYSnlZWGtzWEhKY2JseDBYSFJjZEZ4MFhIUmNkR1J2WjNOQ2IzZ3NYSEpjYmx4MFhIUmNkRngwWEhSY2RHVnNaVzFsYm5SelQyNVFZV2RsTEZ4eVhHNWNkRngwWEhSY2RGeDBYSFJqZFhKeVpXNTBVR0ZuWlZ4eVhHNWNkRngwWEhSY2RGeDBLVHRjY2x4dVhISmNibHgwWEhSY2RGeDBYSFJzWlhRZ1lXTjBhWFpsUW5SdVJHOW5JRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpaGNjbHh1WEhSY2RGeDBYSFJjZEZ4MEp5TmtiMmR6SUM1d1lXZHBibUYwYVc5dUxXSjBiaTVoWTNScGRtVW5YSEpjYmx4MFhIUmNkRngwWEhRcE8xeHlYRzVjY2x4dVhIUmNkRngwWEhSY2RHRmpkR2wyWlVKMGJrUnZaeTV3Y21WMmFXOTFjMFZzWlcxbGJuUlRhV0pzYVc1bkxtTnNhV05yS0NrN1hISmNibHh5WEc1Y2RGeDBYSFJjZEZ4MGJHVjBJRzVsZUhSQ2RHNGdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtDY2paRzluY3lBdWJtVjRkQ2NwTzF4eVhHNWNjbHh1WEhSY2RGeDBYSFJjZEdsbUlDaGpkWEp5Wlc1MFVHRm5aU0FoUFQwZ2NHRm5aVU52ZFc1MEtTQjdYSEpjYmx4MFhIUmNkRngwWEhSY2RHNWxlSFJDZEc0dWMzUjViR1V1YjNCaFkybDBlU0E5SUNjeEp6dGNjbHh1WEhSY2RGeDBYSFJjZEZ4MGJtVjRkRUowYmk1emRIbHNaUzV3YjJsdWRHVnlSWFpsYm5SeklEMGdKMkZzYkNjN1hISmNibHgwWEhSY2RGeDBYSFI5WEhKY2JseHlYRzVjZEZ4MFhIUmNkRngwYVdZZ0tHTjFjbkpsYm5SUVlXZGxJRDA5UFNBeEtTQjdYSEpjYmx4MFhIUmNkRngwWEhSY2RIQnlaWFpDZEc0dWMzUjViR1V1YjNCaFkybDBlU0E5SUNjd0xqVW5PMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUndjbVYyUW5SdUxuTjBlV3hsTG5CdmFXNTBaWEpGZG1WdWRITWdQU0FuYm05dVpTYzdYSEpjYmx4MFhIUmNkRngwWEhSOVhISmNibHh5WEc1Y2RGeDBYSFJjZEZ4MGFXWWdLR0ZqZEdsMlpVSjBia1J2WnlrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhSaFkzUnBkbVZDZEc1RWIyY3VZMnhoYzNOTWFYTjBMbUZrWkNnblozSnZkWEFuS1R0Y2NseHVYSFJjZEZ4MFhIUmNkRngwWVdOMGFYWmxRblJ1Ukc5bkxtNWxlSFJGYkdWdFpXNTBVMmxpYkdsdVp5NWpiR0Z6YzB4cGMzUXVZV1JrS0NkbmNtOTFjQ2NwTzF4eVhHNWNkRngwWEhSY2RGeDBYSFJoWTNScGRtVkNkRzVFYjJjdWNISmxkbWx2ZFhORmJHVnRaVzUwVTJsaWJHbHVaeTVqYkdGemMweHBjM1F1WVdSa0tDZG5jbTkxY0NjcE8xeHlYRzVjZEZ4MFhIUmNkRngwZlZ4eVhHNWNkRngwWEhSY2RIMWNjbHh1WEhKY2JseDBYSFJjZEZ4MGFXWWdLSEJ5WlhaQ2RHNHVjR0Z5Wlc1MFJXeGxiV1Z1ZENBOVBTQndZV2RwYm1GMGFXOXVSV3hEWVhSektTQjdYSEpjYmx4MFhIUmNkRngwWEhSa2FYTndiR0Y1VUdGbmFXNWhkR1ZrU1hSbGJYTW9YSEpjYmx4MFhIUmNkRngwWEhSY2RHTmhkRUp2ZUVGeWNtRjVMRnh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmpZWFJ6UW05NExGeHlYRzVjZEZ4MFhIUmNkRngwWEhSbGJHVnRaVzUwYzA5dVVHRm5aU3hjY2x4dVhIUmNkRngwWEhSY2RGeDBZM1Z5Y21WdWRGQmhaMlZjY2x4dVhIUmNkRngwWEhSY2RDazdYSEpjYmx4eVhHNWNkRngwWEhSY2RGeDBiR1YwSUdGamRHbDJaVUowYmtOaGRDQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb1hISmNibHgwWEhSY2RGeDBYSFJjZENjalkyRjBjeUF1Y0dGbmFXNWhkR2x2YmkxaWRHNHVZV04wYVhabEoxeHlYRzVjZEZ4MFhIUmNkRngwS1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwWEhSaFkzUnBkbVZDZEc1RFlYUXVjSEpsZG1sdmRYTkZiR1Z0Wlc1MFUybGliR2x1Wnk1amJHbGpheWdwTzF4eVhHNWNjbHh1WEhSY2RGeDBYSFJjZEd4bGRDQnVaWGgwUW5SdUlEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkkyTmhkSE1nTG01bGVIUW5LVHRjY2x4dVhISmNibHgwWEhSY2RGeDBYSFJwWmlBb1kzVnljbVZ1ZEZCaFoyVWdJVDA5SUhCaFoyVkRiM1Z1ZENrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhSdVpYaDBRblJ1TG5OMGVXeGxMbTl3WVdOcGRIa2dQU0FuTVNjN1hISmNibHgwWEhSY2RGeDBYSFJjZEc1bGVIUkNkRzR1YzNSNWJHVXVjRzlwYm5SbGNrVjJaVzUwY3lBOUlDZGhiR3duTzF4eVhHNWNkRngwWEhSY2RGeDBmVnh5WEc1Y2NseHVYSFJjZEZ4MFhIUmNkR2xtSUNoamRYSnlaVzUwVUdGblpTQTlQVDBnTVNrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhSd2NtVjJRblJ1TG5OMGVXeGxMbTl3WVdOcGRIa2dQU0FuTUM0MUp6dGNjbHh1WEhSY2RGeDBYSFJjZEZ4MGNISmxka0owYmk1emRIbHNaUzV3YjJsdWRHVnlSWFpsYm5SeklEMGdKMjV2Ym1Vbk8xeHlYRzVjZEZ4MFhIUmNkRngwZlZ4eVhHNWNjbHh1WEhSY2RGeDBYSFJjZEdsbUlDaGhZM1JwZG1WQ2RHNURZWFFwSUh0Y2NseHVYSFJjZEZ4MFhIUmNkRngwWVdOMGFYWmxRblJ1UTJGMExtTnNZWE56VEdsemRDNWhaR1FvSjJkeWIzVndKeWs3WEhKY2JseDBYSFJjZEZ4MFhIUmNkR0ZqZEdsMlpVSjBia05oZEM1dVpYaDBSV3hsYldWdWRGTnBZbXhwYm1jdVkyeGhjM05NYVhOMExtRmtaQ2duWjNKdmRYQW5LVHRjY2x4dVhIUmNkRngwWEhSY2RGeDBZV04wYVhabFFuUnVRMkYwTG5CeVpYWnBiM1Z6Uld4bGJXVnVkRk5wWW14cGJtY3VZMnhoYzNOTWFYTjBMbUZrWkNnblozSnZkWEFuS1R0Y2NseHVYSFJjZEZ4MFhIUmNkSDFjY2x4dVhIUmNkRngwWEhSOVhISmNibHgwWEhSY2RIMHBPMXh5WEc1Y2NseHVYSFJjZEZ4MGFXWWdLR04xY25KbGJuUlFZV2RsSUQwOVBTQXhLU0I3WEhKY2JseDBYSFJjZEZ4MGNISmxka0owYmk1emRIbHNaUzV2Y0dGamFYUjVJRDBnSnpBdU5TYzdYSEpjYmx4MFhIUmNkRngwY0hKbGRrSjBiaTV6ZEhsc1pTNXdiMmx1ZEdWeVJYWmxiblJ6SUQwZ0oyNXZibVVuTzF4eVhHNWNkRngwWEhSOVhISmNibHh5WEc1Y2RGeDBYSFJ5WlhSMWNtNGdjSEpsZGtKMGJqdGNjbHh1WEhSY2RIMWNjbHh1WEhKY2JseDBYSFJtZFc1amRHbHZiaUJ3WVdkcGJtRjBhVzl1UW5WMGRHOXVLSEJoWjJVc0lIQmhaMlZEYjNWdWRDa2dlMXh5WEc1Y2RGeDBYSFJzWlhRZ1luVjBkRzl1SUQwZ1pHOWpkVzFsYm5RdVkzSmxZWFJsUld4bGJXVnVkQ2duWW5WMGRHOXVKeWs3WEhKY2JseDBYSFJjZEdKMWRIUnZiaTVqYkdGemMweHBjM1F1WVdSa0tDZHdZV2RwYm1GMGFXOXVMV0owYmljcE8xeHlYRzVjZEZ4MFhIUmlkWFIwYjI0dWFXNXVaWEpVWlhoMElEMGdjR0ZuWlR0Y2NseHVYSEpjYmx4MFhIUmNkR2xtSUNoamRYSnlaVzUwVUdGblpTQTlQU0J3WVdkbEtTQjdYSEpjYmx4MFhIUmNkRngwWW5WMGRHOXVMbU5zWVhOelRHbHpkQzVoWkdRb0oyRmpkR2wyWlNjcE8xeHlYRzVjZEZ4MFhIUjlYSEpjYmx4eVhHNWNkRngwWEhSaWRYUjBiMjR1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduWTJ4cFkyc25MQ0FvWlNrZ1BUNGdlMXh5WEc1Y2RGeDBYSFJjZEdOMWNuSmxiblJRWVdkbElEMGdjR0ZuWlR0Y2NseHVYSEpjYmx4MFhIUmNkRngwYVdZZ0tHSjFkSFJ2Ymk1d1lYSmxiblJGYkdWdFpXNTBJRDA5SUhCaFoybHVZWFJwYjI1RmJFUnZaM01wSUh0Y2NseHVYSFJjZEZ4MFhIUmNkR1JwYzNCc1lYbFFZV2RwYm1GMFpXUkpkR1Z0Y3loY2NseHVYSFJjZEZ4MFhIUmNkRngwWkc5blFtOTRRWEp5WVhrc1hISmNibHgwWEhSY2RGeDBYSFJjZEdSdlozTkNiM2dzWEhKY2JseDBYSFJjZEZ4MFhIUmNkR1ZzWlcxbGJuUnpUMjVRWVdkbExGeHlYRzVjZEZ4MFhIUmNkRngwWEhSamRYSnlaVzUwVUdGblpWeHlYRzVjZEZ4MFhIUmNkRngwS1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwWEhSc1pYUWdZV04wYVhabFFuUnVSRzluSUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWhjY2x4dVhIUmNkRngwWEhSY2RGeDBKeU5rYjJkeklDNXdZV2RwYm1GMGFXOXVMV0owYmk1aFkzUnBkbVVuWEhKY2JseDBYSFJjZEZ4MFhIUXBPMXh5WEc1Y2NseHVYSFJjZEZ4MFhIUmNkR0ZqZEdsMlpVSjBia1J2Wnk1amJHRnpjMHhwYzNRdWNtVnRiM1psS0NkaFkzUnBkbVVuS1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwWEhSaWRYUjBiMjR1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25ZV04wYVhabEp5azdYSEpjYmx4eVhHNWNkRngwWEhSY2RGeDBiR1YwSUc1bGVIUkNkRzRnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2NqWkc5bmN5QXVibVY0ZENjcE8xeHlYRzVjY2x4dVhIUmNkRngwWEhSY2RHbG1JQ2hqZFhKeVpXNTBVR0ZuWlNBOVBUMGdjR0ZuWlVOdmRXNTBLU0I3WEhKY2JseDBYSFJjZEZ4MFhIUmNkRzVsZUhSQ2RHNHVjM1I1YkdVdWIzQmhZMmwwZVNBOUlDY3dMalVuTzF4eVhHNWNkRngwWEhSY2RGeDBYSFJ1WlhoMFFuUnVMbk4wZVd4bExuQnZhVzUwWlhKRmRtVnVkSE1nUFNBbmJtOXVaU2M3WEhKY2JseDBYSFJjZEZ4MFhIUjlJR1ZzYzJVZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhSdVpYaDBRblJ1TG5OMGVXeGxMbTl3WVdOcGRIa2dQU0FuTVNjN1hISmNibHgwWEhSY2RGeDBYSFJjZEc1bGVIUkNkRzR1YzNSNWJHVXVjRzlwYm5SbGNrVjJaVzUwY3lBOUlDZGhiR3duTzF4eVhHNWNkRngwWEhSY2RGeDBmVnh5WEc1Y2NseHVYSFJjZEZ4MFhIUmNkR3hsZENCd2NtVjJRblJ1SUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduSTJSdlozTWdMbkJ5WlhZbktUdGNjbHh1WEhKY2JseDBYSFJjZEZ4MFhIUnBaaUFvWTNWeWNtVnVkRkJoWjJVZ1BUMDlJREVwSUh0Y2NseHVYSFJjZEZ4MFhIUmNkRngwY0hKbGRrSjBiaTV6ZEhsc1pTNXZjR0ZqYVhSNUlEMGdKekF1TlNjN1hISmNibHgwWEhSY2RGeDBYSFJjZEhCeVpYWkNkRzR1YzNSNWJHVXVjRzlwYm5SbGNrVjJaVzUwY3lBOUlDZHViMjVsSnp0Y2NseHVYSFJjZEZ4MFhIUmNkSDBnWld4elpTQjdYSEpjYmx4MFhIUmNkRngwWEhSY2RIQnlaWFpDZEc0dWMzUjViR1V1YjNCaFkybDBlU0E5SUNjeEp6dGNjbHh1WEhSY2RGeDBYSFJjZEZ4MGNISmxka0owYmk1emRIbHNaUzV3YjJsdWRHVnlSWFpsYm5SeklEMGdKMkZzYkNjN1hISmNibHgwWEhSY2RGeDBYSFI5WEhKY2JseDBYSFJjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkRngwWEhScFppQW9ZblYwZEc5dUxuQmhjbVZ1ZEVWc1pXMWxiblFnUFQwZ2NHRm5hVzVoZEdsdmJrVnNRMkYwY3lrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWkdsemNHeGhlVkJoWjJsdVlYUmxaRWwwWlcxektGeHlYRzVjZEZ4MFhIUmNkRngwWEhSallYUkNiM2hCY25KaGVTeGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFkyRjBjMEp2ZUN4Y2NseHVYSFJjZEZ4MFhIUmNkRngwWld4bGJXVnVkSE5QYmxCaFoyVXNYSEpjYmx4MFhIUmNkRngwWEhSY2RHTjFjbkpsYm5SUVlXZGxYSEpjYmx4MFhIUmNkRngwWEhRcE8xeHlYRzVjY2x4dVhIUmNkRngwWEhSY2RHeGxkQ0JoWTNScGRtVkNkRzVEWVhRZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0Z4eVhHNWNkRngwWEhSY2RGeDBYSFFuSTJOaGRITWdMbkJoWjJsdVlYUnBiMjR0WW5SdUxtRmpkR2wyWlNkY2NseHVYSFJjZEZ4MFhIUmNkQ2s3WEhKY2JseHlYRzVjZEZ4MFhIUmNkRngwWVdOMGFYWmxRblJ1UTJGMExtTnNZWE56VEdsemRDNXlaVzF2ZG1Vb0oyRmpkR2wyWlNjcE8xeHlYRzVjY2x4dVhIUmNkRngwWEhSY2RHSjFkSFJ2Ymk1amJHRnpjMHhwYzNRdVlXUmtLQ2RoWTNScGRtVW5LVHRjY2x4dVhISmNibHgwWEhSY2RGeDBYSFJzWlhRZ2JtVjRkRUowYmlBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvSnlOallYUnpJQzV1WlhoMEp5azdYSEpjYmx4eVhHNWNkRngwWEhSY2RGeDBhV1lnS0dOMWNuSmxiblJRWVdkbElEMDlQU0J3WVdkbFEyOTFiblFwSUh0Y2NseHVYSFJjZEZ4MFhIUmNkRngwYm1WNGRFSjBiaTV6ZEhsc1pTNXZjR0ZqYVhSNUlEMGdKekF1TlNjN1hISmNibHgwWEhSY2RGeDBYSFJjZEc1bGVIUkNkRzR1YzNSNWJHVXVjRzlwYm5SbGNrVjJaVzUwY3lBOUlDZHViMjVsSnp0Y2NseHVYSFJjZEZ4MFhIUmNkSDBnWld4elpTQjdYSEpjYmx4MFhIUmNkRngwWEhSY2RHNWxlSFJDZEc0dWMzUjViR1V1YjNCaFkybDBlU0E5SUNjeEp6dGNjbHh1WEhSY2RGeDBYSFJjZEZ4MGJtVjRkRUowYmk1emRIbHNaUzV3YjJsdWRHVnlSWFpsYm5SeklEMGdKMkZzYkNjN1hISmNibHgwWEhSY2RGeDBYSFI5WEhKY2JseHlYRzVjZEZ4MFhIUmNkRngwYkdWMElIQnlaWFpDZEc0Z1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0NjalkyRjBjeUF1Y0hKbGRpY3BPMXh5WEc1Y2NseHVYSFJjZEZ4MFhIUmNkR2xtSUNoamRYSnlaVzUwVUdGblpTQTlQVDBnTVNrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhSd2NtVjJRblJ1TG5OMGVXeGxMbTl3WVdOcGRIa2dQU0FuTUM0MUp6dGNjbHh1WEhSY2RGeDBYSFJjZEZ4MGNISmxka0owYmk1emRIbHNaUzV3YjJsdWRHVnlSWFpsYm5SeklEMGdKMjV2Ym1Vbk8xeHlYRzVjZEZ4MFhIUmNkRngwZlNCbGJITmxJSHRjY2x4dVhIUmNkRngwWEhSY2RGeDBjSEpsZGtKMGJpNXpkSGxzWlM1dmNHRmphWFI1SUQwZ0p6RW5PMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUndjbVYyUW5SdUxuTjBlV3hsTG5CdmFXNTBaWEpGZG1WdWRITWdQU0FuWVd4c0p6dGNjbHh1WEhSY2RGeDBYSFJjZEgxY2NseHVYSFJjZEZ4MFhIUjlYSEpjYmx4MFhIUmNkSDBwTzF4eVhHNWNjbHh1WEhSY2RGeDBjbVYwZFhKdUlHSjFkSFJ2Ymp0Y2NseHVYSFJjZEgxY2NseHVYSEpjYmx4MFhIUmpiMjV6ZENCbGVIQmhibVJ6VFc5eVpTQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNKQmJHd29KMXRsZUhCaGJtUXRiVzl5WlYwbktUdGNjbHh1WEhKY2JseDBYSFJtZFc1amRHbHZiaUJsZUhCaGJtUW9LU0I3WEhKY2JseDBYSFJjZEdOdmJuTjBJSE5vYjNkRGIyNTBaVzUwSUQwZ1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvZEdocGN5NWtZWFJoYzJWMExuUmhjbWRsZENrN1hISmNibHgwWEhSY2RHbG1JQ2h6YUc5M1EyOXVkR1Z1ZEM1amJHRnpjMHhwYzNRdVkyOXVkR0ZwYm5Nb0oyRmpkR2wyWlNjcEtTQjdYSEpjYmx4MFhIUmNkRngwZEdocGN5NXBibTVsY2toVVRVd2dQU0IwYUdsekxtUmhkR0Z6WlhRdWMyaHZkM1JsZUhRN1hISmNibHgwWEhSY2RIMGdaV3h6WlNCN1hISmNibHgwWEhSY2RGeDBkR2hwY3k1cGJtNWxja2hVVFV3Z1BTQjBhR2x6TG1SaGRHRnpaWFF1YUdsa1pYUmxlSFE3WEhKY2JseDBYSFJjZEgxY2NseHVYSEpjYmx4MFhIUmNkSE5vYjNkRGIyNTBaVzUwTG1Oc1lYTnpUR2x6ZEM1MGIyZG5iR1VvSjJGamRHbDJaU2NwTzF4eVhHNWNkRngwWEhScFppQW9jMmh2ZDBOdmJuUmxiblF1WTJ4aGMzTk1hWE4wTG1OdmJuUmhhVzV6S0NkaFkzUnBkbVVuS1NrZ2UxeHlYRzVjZEZ4MFhIUmNkSE5vYjNkRGIyNTBaVzUwTG5OMGVXeGxMbTFoZUVobGFXZG9kQ0E5SUhOb2IzZERiMjUwWlc1MExuTmpjbTlzYkVobGFXZG9kQ0FySUNkd2VDYzdYSEpjYmx4MFhIUmNkSDBnWld4elpTQjdYSEpjYmx4MFhIUmNkRngwYzJodmQwTnZiblJsYm5RdWMzUjViR1V1YldGNFNHVnBaMmgwSUQwZ01qQWdLeUFuY0hnbk8xeHlYRzVjZEZ4MFhIUjlYSEpjYmx4MFhIUjlYSEpjYmx4eVhHNWNkRngwYVdZZ0tHUnZaM05DYjNncElIdGNjbHh1WEhSY2RGeDBaR2x6Y0d4aGVWQmhaMmx1WVhSbFpFbDBaVzF6S0dSdlowSnZlRUZ5Y21GNUxDQmtiMmR6UW05NExDQmxiR1Z0Wlc1MGMwOXVVR0ZuWlN3Z1kzVnljbVZ1ZEZCaFoyVXBPMXh5WEc1Y2RGeDBYSFJrYVhOd2JHRjVVR0ZuYVc1aGRHbHZiaWhrYjJkQ2IzaEJjbkpoZVN3Z2NHRm5hVzVoZEdsdmJrVnNSRzluY3l3Z1pXeGxiV1Z1ZEhOUGJsQmhaMlVwTzF4eVhHNWNjbHh1WEhSY2RGeDBaWGh3WVc1a2MwMXZjbVV1Wm05eVJXRmphQ2dvWW5SdUtTQTlQaUI3WEhKY2JseDBYSFJjZEZ4MFluUnVMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMk5zYVdOckp5d2daWGh3WVc1a0tUdGNjbHh1WEhSY2RGeDBmU2s3WEhKY2JseDBYSFI5WEhKY2JseHlYRzVjZEZ4MGFXWWdLR05oZEhOQ2IzZ3BJSHRjY2x4dVhIUmNkRngwWkdsemNHeGhlVkJoWjJsdVlYUmxaRWwwWlcxektHTmhkRUp2ZUVGeWNtRjVMQ0JqWVhSelFtOTRMQ0JsYkdWdFpXNTBjMDl1VUdGblpTd2dZM1Z5Y21WdWRGQmhaMlVwTzF4eVhHNWNkRngwWEhSa2FYTndiR0Y1VUdGbmFXNWhkR2x2YmloallYUkNiM2hCY25KaGVTd2djR0ZuYVc1aGRHbHZia1ZzUTJGMGN5d2daV3hsYldWdWRITlBibEJoWjJVcE8xeHlYRzVjY2x4dVhIUmNkRngwWlhod1lXNWtjMDF2Y21VdVptOXlSV0ZqYUNnb1luUnVLU0E5UGlCN1hISmNibHgwWEhSY2RGeDBZblJ1TG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjJOc2FXTnJKeXdnWlhod1lXNWtLVHRjY2x4dVhIUmNkRngwZlNrN1hISmNibHgwWEhSOVhISmNibHgwZlZ4eVhHNWNjbHh1WEhScFppQW9ZVzVwYldGc2MxQmhaMlZ6S1NCN1hISmNibHgwWEhRb1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc1Y2RGeDBYSFJrYVhOd2JHRjVRVzVwYldGc2N5Z3BPMXh5WEc1Y2RGeDBmU2tvS1R0Y2NseHVYSFI5WEhKY2JuMHBPMXh5WEc0aUxDSmtiMk4xYldWdWRDNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZEVUMDFEYjI1MFpXNTBURzloWkdWa0p5d2dablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNkQzh2SUdadmNtMGdkbUZzYVdSaGRHbHZibHh5WEc1Y2RHTnZibk4wSUdadmNtMGdQU0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDZ25ZMjl1ZEdGamRDMW1iM0p0SnlrN1hISmNibHgwWTI5dWMzUWdibUZ0WlNBOUlHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0NkdVlXMWxKeWs3WEhKY2JseDBZMjl1YzNRZ1pXMWhhV3dnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2duWlcxaGFXd25LVHRjY2x4dVhIUmpiMjV6ZENCdFpYTnpZV2RsSUQwZ1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvSjIxbGMzTmhaMlVuS1R0Y2NseHVYSFJqYjI1emRDQm1iM0p0UW5SdUlEMGdaRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkRUo1U1dRb0oyWnZjbTB0WW5SdUp5azdYSEpjYmx4eVhHNWNkR2xtSUNobWIzSnRLU0I3WEhKY2JseDBYSFJiWEhKY2JseDBYSFJjZENkamJHbGpheWNzWEhKY2JseDBYSFJjZENkdmJuUnZkV05vYzNSaGNuUW5MRnh5WEc1Y2RGeDBYSFFuYlc5MWMyVnZkbVZ5Snl4Y2NseHVYSFJjZEZ4MEoydGxlV1J2ZDI0bkxGeHlYRzVjZEZ4MFhIUW5hMlY1Y0hKbGMzTW5MRnh5WEc1Y2RGeDBYSFFuZEc5MVkyaHpkR0Z5ZENjc1hISmNibHgwWEhSY2RDZDBiM1ZqYUcxdmRtVW5MRnh5WEc1Y2RGeDBYUzVtYjNKRllXTm9LRnh5WEc1Y2RGeDBYSFFvWlhabGJuUXBJRDArWEhKY2JseDBYSFJjZEZ4MFpHOWpkVzFsYm5RdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lobGRtVnVkQ3dnS0NrZ1BUNGdlMXh5WEc1Y2RGeDBYSFJjZEZ4MGFXWWdLR05vWldOclNXNXdkWFJ6S0NrZ1BUMDlJR1poYkhObEtTQjdYSEpjYmx4MFhIUmNkRngwWEhSY2RHWnZjbTFDZEc0dVpHbHpZV0pzWldRZ1BTQjBjblZsTzF4eVhHNWNkRngwWEhSY2RGeDBmU0JsYkhObElIdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFptOXliVUowYmk1a2FYTmhZbXhsWkNBOUlHWmhiSE5sTzF4eVhHNWNkRngwWEhSY2RGeDBmVnh5WEc1Y2RGeDBYSFJjZEgwcExGeHlYRzVjZEZ4MFhIUm1ZV3h6WlZ4eVhHNWNkRngwS1R0Y2NseHVYSEpjYmx4MFhIUm1kVzVqZEdsdmJpQmphR1ZqYTBsdWNIVjBjeWdwSUh0Y2NseHVYSFJjZEZ4MFkyOXVjM1FnYm1GdFpWWmhiSFZsSUQwZ2JtRnRaUzUyWVd4MVpTNTBjbWx0S0NrN1hISmNibHgwWEhSY2RHTnZibk4wSUdWdFlXbHNWbUZzZFdVZ1BTQmxiV0ZwYkM1MllXeDFaUzUwY21sdEtDazdYSEpjYmx4MFhIUmNkR052Ym5OMElHMWxjM05oWjJWV1lXeDFaU0E5SUcxbGMzTmhaMlV1ZG1Gc2RXVXVkSEpwYlNncE8xeHlYRzVjY2x4dVhIUmNkRngwYVdZZ0tHNWhiV1ZXWVd4MVpTQTlQVDBnSnljcElIdGNjbHh1WEhSY2RGeDBYSFJ6WlhSRmNuSnZja1p2Y2lodVlXMWxMQ0FuVUd4bFlYTmxJR1Z1ZEdWeUlIbHZkWElnWm5Wc2JDQnVZVzFsSnlrN1hISmNibHgwWEhSY2RIMGdaV3h6WlNCN1hISmNibHgwWEhSY2RGeDBjMlYwVTNWalkyVnpjMFp2Y2lodVlXMWxLVHRjY2x4dVhIUmNkRngwZlZ4eVhHNWNjbHh1WEhSY2RGeDBhV1lnS0dWdFlXbHNWbUZzZFdVZ1BUMDlJQ2NuS1NCN1hISmNibHgwWEhSY2RGeDBjMlYwUlhKeWIzSkdiM0lvWlcxaGFXd3NJQ2RRYkdWaGMyVWdaVzUwWlhJZ2VXOTFjaUJsYldGcGJDQmhaR1J5WlhOekp5azdYSEpjYmx4MFhIUmNkSDBnWld4elpTQnBaaUFvSVdWdFlXbHNTWE5XWVd4cFpDaGxiV0ZwYkZaaGJIVmxLU2tnZTF4eVhHNWNkRngwWEhSY2RITmxkRVZ5Y205eVJtOXlLR1Z0WVdsc0xDQW5SVzFoYVd3Z2FYTWdibTkwSUhaaGJHbGtKeWs3WEhKY2JseDBYSFJjZEgwZ1pXeHpaU0I3WEhKY2JseDBYSFJjZEZ4MGMyVjBVM1ZqWTJWemMwWnZjaWhsYldGcGJDazdYSEpjYmx4MFhIUmNkSDFjY2x4dVhISmNibHgwWEhSY2RHbG1JQ2h0WlhOellXZGxWbUZzZFdVZ1BUMDlJQ2NuS1NCN1hISmNibHgwWEhSY2RGeDBjMlYwUlhKeWIzSkdiM0lvYldWemMyRm5aU3dnSjFCc1pXRnpaU0JsYm5SbGNpQjViM1Z5SUcxbGMzTmhaMlVuS1R0Y2NseHVYSFJjZEZ4MGZTQmxiSE5sSUh0Y2NseHVYSFJjZEZ4MFhIUnpaWFJUZFdOalpYTnpSbTl5S0cxbGMzTmhaMlVwTzF4eVhHNWNkRngwWEhSOVhISmNibHh5WEc1Y2RGeDBYSFJwWmlBb1hISmNibHgwWEhSY2RGeDBibUZ0WlZaaGJIVmxJRDA5UFNBbkp5QjhmRnh5WEc1Y2RGeDBYSFJjZEdWdFlXbHNWbUZzZFdVZ1BUMDlJQ2NuSUh4OFhISmNibHgwWEhSY2RGeDBiV1Z6YzJGblpWWmhiSFZsSUQwOVBTQW5KeUI4ZkZ4eVhHNWNkRngwWEhSY2RDRmxiV0ZwYkVselZtRnNhV1FvWlcxaGFXeFdZV3gxWlNsY2NseHVYSFJjZEZ4MEtTQjdYSEpjYmx4MFhIUmNkRngwY21WMGRYSnVJR1poYkhObE8xeHlYRzVjZEZ4MFhIUjlJR1ZzYzJVZ2UxeHlYRzVjZEZ4MFhIUmNkSEpsZEhWeWJpQjBjblZsTzF4eVhHNWNkRngwWEhSOVhISmNibHgwWEhSOVhISmNibHh5WEc1Y2RGeDBablZ1WTNScGIyNGdjMlYwUlhKeWIzSkdiM0lvYVc1d2RYUXNJRzFsYzNOaFoyVXBJSHRjY2x4dVhIUmNkRngwWTI5dWMzUWdabTl5YlNBOUlHbHVjSFYwTG5CaGNtVnVkRVZzWlcxbGJuUTdYSEpjYmx4MFhIUmNkR052Ym5OMElITnRZV3hzSUQwZ1ptOXliUzV4ZFdWeWVWTmxiR1ZqZEc5eUtDZHpiV0ZzYkNjcE8xeHlYRzVjY2x4dVhIUmNkRngwYzIxaGJHd3VhVzV1WlhKVVpYaDBJRDBnYldWemMyRm5aVHRjY2x4dVhIUmNkRngwWm05eWJTNWpiR0Z6YzA1aGJXVWdQU0FuWm05eWJWOWZaM0p2ZFhBZ1pYSnliM0luTzF4eVhHNWNkRngwZlZ4eVhHNWNjbHh1WEhSY2RHWjFibU4wYVc5dUlITmxkRk4xWTJObGMzTkdiM0lvYVc1d2RYUXBJSHRjY2x4dVhIUmNkRngwWTI5dWMzUWdabTl5YlNBOUlHbHVjSFYwTG5CaGNtVnVkRVZzWlcxbGJuUTdYSEpjYmx4MFhIUmNkR1p2Y20wdVkyeGhjM05PWVcxbElEMGdKMlp2Y20xZlgyZHliM1Z3SUhOMVkyTmxjM01uTzF4eVhHNWNkRngwZlZ4eVhHNWNjbHh1WEhSY2RHWjFibU4wYVc5dUlHVnRZV2xzU1hOV1lXeHBaQ2hsYldGcGJDa2dlMXh5WEc1Y2RGeDBYSFJqYjI1emRDQnlaU0E5SUM5ZUtDaGJYancrS0NsY1hGdGNYRjFjWEZ4Y0xpdzdPbHhjYzBCY0lsMHJLRnhjTGx0ZVBENG9LVnhjVzF4Y1hWeGNYRnd1TERzNlhGeHpRRndpWFNzcEtpbDhLRndpTGl0Y0lpa3BRQ2dvWEZ4Yld6QXRPVjE3TVN3emZWeGNMbHN3TFRsZGV6RXNNMzFjWEM1Yk1DMDVYWHN4TEROOVhGd3VXekF0T1YxN01Td3pmVjBwZkNnb1cyRXRla0V0V2x4Y0xUQXRPVjByWEZ3dUtTdGJZUzE2UVMxYVhYc3lMSDBwS1NRdkxuUmxjM1FvWEhKY2JseDBYSFJjZEZ4MFpXMWhhV3hjY2x4dVhIUmNkRngwS1R0Y2NseHVYSEpjYmx4MFhIUmNkSEpsZEhWeWJpQnlaVHRjY2x4dVhIUmNkSDFjY2x4dVhIUjlYSEpjYm4wcE8xeHlYRzRpTENKa2IyTjFiV1Z1ZEM1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkRVQwMURiMjUwWlc1MFRHOWhaR1ZrSnl3Z1puVnVZM1JwYjI0Z0tDa2dlMXh1WEhSM2FXNWtiM2N1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduYkc5aFpDY3NJQ2hsS1NBOVBpQjdYRzVjZEZ4MFkyOXVjM1FnY0hKbGJHOWhaQ0E5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9KeTV3Y21Wc2IyRmtKeWs3WEc1Y2JseDBYSFJ3Y21Wc2IyRmtMbU5zWVhOelRHbHpkQzVoWkdRb0ozQnlaV3h2WVdRdFptbHVhWE5vWldRbktUdGNibHgwZlNrN1hHNWNibHgwWTI5dWMzUWdZblJ1VTJOeWIyeHNWRzlVYjNBZ1BTQmtiMk4xYldWdWRDNW5aWFJGYkdWdFpXNTBRbmxKWkNnblluUnVVMk55YjJ4c1ZHOVViM0FuS1R0Y2JseDBZblJ1VTJOeWIyeHNWRzlVYjNBdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblkyeHBZMnNuTENBb1pTa2dQVDRnZTF4dVhIUmNkSGRwYm1SdmR5NXpZM0p2Ykd4VWJ5aDdYRzVjZEZ4MFhIUjBiM0E2SURBc1hHNWNkRngwWEhSc1pXWjBPaUF3TEZ4dVhIUmNkRngwWW1Wb1lYWnBiM0k2SUNkemJXOXZkR2duTEZ4dVhIUmNkSDBwTzF4dVhIUjlLVHRjYmx4dVhIUmpiMjV6ZENCbGVIQmhibVJ6VFc5eVpTQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNKQmJHd29KMXRsZUhCaGJtUXRiVzl5WlYwbktUdGNibHh1WEhSbWRXNWpkR2x2YmlCbGVIQmhibVFvS1NCN1hHNWNkRngwWTI5dWMzUWdjMmh2ZDBOdmJuUmxiblFnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2gwYUdsekxtUmhkR0Z6WlhRdWRHRnlaMlYwS1R0Y2JseHVYSFJjZEdsbUlDaHphRzkzUTI5dWRHVnVkQzVqYkdGemMweHBjM1F1WTI5dWRHRnBibk1vSjJGamRHbDJaU2NwS1NCN1hHNWNkRngwWEhSMGFHbHpMbWx1Ym1WeVNGUk5UQ0E5SUhSb2FYTXVaR0YwWVhObGRDNXphRzkzZEdWNGREdGNibHgwWEhSOUlHVnNjMlVnZTF4dVhIUmNkRngwZEdocGN5NXBibTVsY2toVVRVd2dQU0IwYUdsekxtUmhkR0Z6WlhRdWFHbGtaWFJsZUhRN1hHNWNkRngwZlZ4dVhHNWNkRngwYzJodmQwTnZiblJsYm5RdVkyeGhjM05NYVhOMExuUnZaMmRzWlNnbllXTjBhWFpsSnlrN1hHNWNkRngwYVdZZ0tITm9iM2REYjI1MFpXNTBMbU5zWVhOelRHbHpkQzVqYjI1MFlXbHVjeWduWVdOMGFYWmxKeWtwSUh0Y2JseDBYSFJjZEhOb2IzZERiMjUwWlc1MExuTjBlV3hsTG0xaGVFaGxhV2RvZENBOUlITm9iM2REYjI1MFpXNTBMbk5qY205c2JFaGxhV2RvZENBcklDZHdlQ2M3WEc1Y2RGeDBmU0JsYkhObElIdGNibHgwWEhSY2RITm9iM2REYjI1MFpXNTBMbk4wZVd4bExtMWhlRWhsYVdkb2RDQTlJR0F5TW5CNFlEdGNibHgwWEhSOVhHNWNkSDFjYmx4dVhIUmxlSEJoYm1SelRXOXlaUzVtYjNKRllXTm9LQ2hpZEc0cElEMCtJSHRjYmx4MFhIUmpiMjV6ZENCamIyNTBZV2x1WlhKSVpXbG5hSFFnUFZ4dVhIUmNkRngwWW5SdUxuQmhjbVZ1ZEVWc1pXMWxiblF1Y0hKbGRtbHZkWE5GYkdWdFpXNTBVMmxpYkdsdVp5NXZabVp6WlhSSVpXbG5hSFE3WEc1Y2JseDBYSFJqYjI1emRDQmxlSEJoYm1SRmJHVnRaVzUwU0dWcFoyaDBJRDFjYmx4MFhIUmNkR0owYmk1d1lYSmxiblJGYkdWdFpXNTBMbkJ5WlhacGIzVnpSV3hsYldWdWRGTnBZbXhwYm1jdVptbHljM1JGYkdWdFpXNTBRMmhwYkdRdWIyWm1jMlYwU0dWcFoyaDBPMXh1WEc1Y2RGeDBhV1lnS0dOdmJuUmhhVzVsY2tobGFXZG9kQ0ErUFNCbGVIQmhibVJGYkdWdFpXNTBTR1ZwWjJoMEtTQjdYRzVjZEZ4MFhIUmlkRzR1YzNSNWJHVXVkbWx6YVdKcGJHbDBlU0E5SUNkb2FXUmtaVzRuTzF4dVhIUmNkRngwWW5SdUxuTjBlV3hsTG1obGFXZG9kQ0E5SURBN1hHNWNkRngwZlZ4dVhIUmNkR0owYmk1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkamJHbGpheWNzSUdWNGNHRnVaQ2s3WEc1Y2RIMHBPMXh1ZlNrN1hHNGlMQ0prYjJOMWJXVnVkQzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RFVDAxRGIyNTBaVzUwVEc5aFpHVmtKeXdnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjZEdOdmJuTjBJRzF2WkdGc1FuUnVJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNrRnNiQ2duTG0xdlpHRnNMV0owYmljcE8xeHlYRzVjZEdOdmJuTjBJRzF2WkdGc1JXd2dQU0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDZ25iVzlrWVd3bktUdGNjbHh1WEhSamIyNXpkQ0J0YjJSaGJFSjBia05zYjNObElEMGdaRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkRUo1U1dRb0oyTnNiM05sSnlrN1hISmNibHh5WEc1Y2RDOHZJRk5vYjNjZ2JXOWtZV3hjY2x4dVhIUnRiMlJoYkVKMGJpNW1iM0pGWVdOb0tDaHRiMlJoYkNrZ1BUNGdlMXh5WEc1Y2RGeDBiVzlrWVd3dVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblkyeHBZMnNuTENBb0tTQTlQaUJ0YjJSaGJFVnNMbU5zWVhOelRHbHpkQzVoWkdRb0ozTm9iM2N0Ylc5a1lXd25LU2s3WEhKY2JseDBmU2s3WEhKY2JseHlYRzVjZEM4dklFaHBaR1VnYlc5a1lXeGNjbHh1WEhSdGIyUmhiRUowYmtOc2IzTmxMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMk5zYVdOckp5d2dLQ2tnUFQ1Y2NseHVYSFJjZEcxdlpHRnNSV3d1WTJ4aGMzTk1hWE4wTG5KbGJXOTJaU2duYzJodmR5MXRiMlJoYkNjcFhISmNibHgwS1R0Y2NseHVYSEpjYmx4MEx5OGdTR2xrWlNCdGIyUmhiQ0J2YmlCdmRYUnphV1JsSUdOc2FXTnJYSEpjYmx4MGQybHVaRzkzTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjJOc2FXTnJKeXdnS0dVcElEMCtYSEpjYmx4MFhIUmxMblJoY21kbGRDQTlQU0J0YjJSaGJDQS9JRzF2WkdGc0xtTnNZWE56VEdsemRDNXlaVzF2ZG1Vb0ozTm9iM2N0Ylc5a1lXd25LU0E2SUdaaGJITmxYSEpjYmx4MEtUdGNjbHh1ZlNrN1hISmNiaUlzSW1SdlkzVnRaVzUwTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjBSUFRVTnZiblJsYm5STWIyRmtaV1FuTENCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmx4MFkyOXVjM1FnYm1GMlEyOXVkR0ZwYm1WeUlEMGdaRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkRUo1U1dRb0oyNWhkaTFqYjI1MFlXbHVaWEluS1R0Y2NseHVYSFJqYjI1emRDQnRaVzUxUW5SdUlEMGdaRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkRUo1U1dRb0oyMWxiblV0WW5SdUp5azdYSEpjYmx4MFkyOXVjM1FnYm1GMlRHbHpkQ0E5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2R1WVhZdGJHbHpkQ2NwTzF4eVhHNWNjbHh1WEhSM2FXNWtiM2N1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduYzJOeWIyeHNKeXdnS0dVcElEMCtJSHRjY2x4dVhIUmNkR2xtSUNoa2IyTjFiV1Z1ZEM1a2IyTjFiV1Z1ZEVWc1pXMWxiblF1YzJOeWIyeHNWRzl3SUQ0Z01Da2dlMXh5WEc1Y2RGeDBYSFJ1WVhaRGIyNTBZV2x1WlhJdVkyeGhjM05NYVhOMExtRmtaQ2duYzNScFkydDVKeWs3WEhKY2JseDBYSFJjZEdKMGJsTmpjbTlzYkZSdlZHOXdMbk4wZVd4bExtOXdZV05wZEhrZ1BTQXhPMXh5WEc1Y2RGeDBmU0JsYkhObElIdGNjbHh1WEhSY2RGeDBibUYyUTI5dWRHRnBibVZ5TG1Oc1lYTnpUR2x6ZEM1eVpXMXZkbVVvSjNOMGFXTnJlU2NwTzF4eVhHNWNkRngwWEhSaWRHNVRZM0p2Ykd4VWIxUnZjQzV6ZEhsc1pTNXZjR0ZqYVhSNUlEMGdNRHRjY2x4dVhIUmNkSDFjY2x4dVhIUjlLVHRjY2x4dVhISmNibHgwYldWdWRVSjBiaTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RqYkdsamF5Y3NJQ2hsS1NBOVBpQjdYSEpjYmx4MFhIUnRaVzUxUW5SdUxtTnNZWE56VEdsemRDNTBiMmRuYkdVb0oyTnNhV05yWldRbktUdGNjbHh1WEhSY2RHNWhka052Ym5SaGFXNWxjaTVqYkdGemMweHBjM1F1ZEc5bloyeGxLQ2R2ZG1WeWJHRjVKeWs3WEhKY2JseDBYSFJ1WVhaTWFYTjBMbU5zWVhOelRHbHpkQzUwYjJkbmJHVW9KM05vYjNjbktUdGNjbHh1WEhSOUtUdGNjbHh1ZlNrN1hISmNiaUlzSW1SdlkzVnRaVzUwTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjBSUFRVTnZiblJsYm5STWIyRmtaV1FuTENCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmx4MEx5OGdZMkZ5YjNWelpXeGNjbHh1WEhSamIyNXpkQ0JqWVhKdmRYTmxiQ0E5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2RqWVhKdmRYTmxiQ2NwTzF4eVhHNWNkR052Ym5OMElHTmhjbTkxYzJWc1ZYSnNJRDBnSnk0dmFuTXZZMkZ5YjNWelpXd3Vhbk52YmljN1hISmNibHgwWTI5dWMzUWdiRzlqWVd4RFlYSnZkWE5sYkVwVFQwNGdQU0J5WlhGMWFYSmxLQ2N1TDJOaGNtOTFjMlZzTG1wemIyNG5LVHRjY2x4dVhISmNibHgwTHlvZ1puVnVZM1JwYjI0Z1oyVjBVMnhwWkdWelJHRjBZU2dwSUh0Y2NseHVYSFJjZEhKbGRIVnliaUJ1WlhjZ1VISnZiV2x6WlNnb2NtVnpiMngyWlN3Z2NtVnFaV04wS1NBOVBpQjdYSEpjYmx4MFhIUmNkR1psZEdOb0tHTmhjbTkxYzJWc1ZYSnNLVnh5WEc1Y2RGeDBYSFJjZEM1MGFHVnVLQ2h5WlhOd0tTQTlQaUJ5WlhOd0xtcHpiMjRvS1NsY2NseHVYSFJjZEZ4MFhIUXVkR2hsYmlnb1pHRjBZU2tnUFQ0Z2NtVnpiMngyWlNoa1lYUmhLU2xjY2x4dVhIUmNkRngwWEhRdVkyRjBZMmdvS0dWeWNpa2dQVDRnY21WcVpXTjBLR1Z5Y2lrcE8xeHlYRzVjZEZ4MGZTazdYSEpjYmx4MGZTQXFMMXh5WEc1Y2NseHVYSFJoYzNsdVl5Qm1kVzVqZEdsdmJpQmthWE53YkdGNVEyRnliM1Z6Wld3b0tTQjdYSEpjYmx4MFhIUXZLaUJqYjI1emRDQmtZWFJoVEdsemRDQTlJR0YzWVdsMElHZGxkRk5zYVdSbGMwUmhkR0VvS1RzZ0tpOWNjbHh1WEhSY2RHTnZibk4wSUhOc2FXUmxjMEZ5Y21GNUlEMGdiRzlqWVd4RFlYSnZkWE5sYkVwVFQwNHVjMnhwWkdWek8xeHlYRzVjY2x4dVhIUmNkSE5zYVdSbGMwRnljbUY1TG1admNrVmhZMmdvS0hOc2FXUmxMQ0J6Ykdsa1pVNTFiV0psY2lrZ1BUNGdlMXh5WEc1Y2RGeDBYSFJ1WlhkVGJHbGtaU0E5SUdSdlkzVnRaVzUwTG1OeVpXRjBaVVZzWlcxbGJuUW9KMlJwZGljcE8xeHlYRzVjZEZ4MFhIUnVaWGRUYkdsa1pTNWpiR0Z6YzB4cGMzUXVZV1JrS0NkallYSnZkWE5sYkY5ZmMyeHBaR1VuS1R0Y2NseHVYSEpjYmx4MFhIUmNkRzVsZDFOc2FXUmxMbWx1Ym1WeVNGUk5UQ0E5SUdCY2NseHVYSFJjZEZ4MFhIUmNkRngwUEdScGRpQmpiR0Z6Y3oxY0ltTmhjbTkxYzJWc1gxOXBiV0ZuWlMxamIyNTBZV2x1WlhKY0lqNWNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUThhVzFuSUhOeVl6MWNJaVI3YzJ4cFpHVXVhVzFoWjJWOVhDSWdZV3gwUFZ3aWMyeHBaR1V0YVcxblhDSWdMejVjY2x4dVhIUmNkRngwWEhSY2RGeDBQQzlrYVhZK1hISmNibHgwWEhSY2RGeDBYSFJjZER4a2FYWWdZMnhoYzNNOVhDSmpZWEp2ZFhObGJGOWZZMjl1ZEdWdWRGd2lQbHh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRHhvTVNCamJHRnpjejFjSW1OaGNtOTFjMlZzWDE5MGFYUnNaVndpUGlSN2MyeHBaR1V1ZEdsMGJHVjlQQzlvTVQ1Y2NseHVYSFJjZEZ4MFhIUmNkRngwWEhROGNDQmpiR0Z6Y3oxY0ltTmhjbTkxYzJWc1gxOWtaWE5qWENJK0pIdHpiR2xrWlM1amIyNTBaVzUwZlR3dmNENWNjbHh1WEhSY2RGeDBYSFJjZEZ4MFBDOWthWFkrWEhKY2JseDBYSFJjZEdBN1hISmNibHh5WEc1Y2RGeDBYSFJqWVhKdmRYTmxiQzVoY0hCbGJtUkRhR2xzWkNodVpYZFRiR2xrWlNrN1hISmNibHh5WEc1Y2RGeDBYSFJwWmlBb2MyeHBaR1ZPZFcxaVpYSWdQVDA5SURBcElIdGNjbHh1WEhSY2RGeDBYSFJtYVhKemRGTnNhV1JsSUQwZ2JtVjNVMnhwWkdVN1hISmNibHgwWEhSY2RGeDBibVYzVTJ4cFpHVXVZMnhoYzNOTWFYTjBMbUZrWkNnbllXTjBhWFpsSnlrN1hISmNibHgwWEhSY2RIMGdaV3h6WlNCcFppQW9jMnhwWkdWT2RXMWlaWElnS3lBeElEMDlQU0JzYjJOaGJFTmhjbTkxYzJWc1NsTlBUaTV6Ykdsa1pYTXViR1Z1WjNSb0tTQjdYSEpjYmx4MFhIUmNkRngwYkdGemRGTnNhV1JsSUQwZ2JtVjNVMnhwWkdVN1hISmNibHgwWEhSY2RIMWNjbHh1WEhSY2RIMHBPMXh5WEc1Y2NseHVYSFJjZEc1bGVIUlRiR2xrWlNncE8xeHlYRzVjZEZ4MGNISmxkbWx2ZFhOVGJHbGtaU2dwTzF4eVhHNWNkSDFjY2x4dVhISmNibHgwWm5WdVkzUnBiMjRnYm1WNGRGTnNhV1JsS0NrZ2UxeHlYRzVjZEZ4MFkyOXVjM1FnYm1WNGRFSjBiaUE5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2R1WlhoMEp5azdYSEpjYmx4eVhHNWNkRngwYm1WNGRFSjBiaTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RqYkdsamF5Y3NJQ2hsS1NBOVBpQjdYSEpjYmx4MFhIUmNkR052Ym5OMElHRmpkR2wyWlZOc2FXUmxJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25MbU5oY205MWMyVnNYMTl6Ykdsa1pTNWhZM1JwZG1VbktUdGNjbHh1WEhKY2JseDBYSFJjZEd4bGRDQnVaWGgwVTJsaWJHbHVaeUE5SUdGamRHbDJaVk5zYVdSbExtNWxlSFJGYkdWdFpXNTBVMmxpYkdsdVp6dGNjbHh1WEhKY2JseDBYSFJjZEdsbUlDaHVaWGgwVTJsaWJHbHVaeUE5UFNCdWRXeHNLU0I3WEhKY2JseDBYSFJjZEZ4MGJtVjRkRk5wWW14cGJtY2dQU0JoWTNScGRtVlRiR2xrWlR0Y2NseHVYSFJjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkRngwYVdZZ0tHNWxlSFJUYVdKc2FXNW5MbU5zWVhOelRHbHpkQzVqYjI1MFlXbHVjeWduWTJGeWIzVnpaV3hmWDNOc2FXUmxKeWtwSUh0Y2NseHVYSFJjZEZ4MFhIUmhZM1JwZG1WVGJHbGtaUzVqYkdGemMweHBjM1F1Y21WdGIzWmxLQ2RoWTNScGRtVW5LVHRjY2x4dVhIUmNkRngwWEhSdVpYaDBVMmxpYkdsdVp5NWpiR0Z6YzB4cGMzUXVZV1JrS0NkaFkzUnBkbVVuS1R0Y2NseHVYSFJjZEZ4MGZWeHlYRzVjZEZ4MGZTazdYSEpjYmx4MGZWeHlYRzVjY2x4dVhIUm1kVzVqZEdsdmJpQndjbVYyYVc5MWMxTnNhV1JsS0NrZ2UxeHlYRzVjZEZ4MFkyOXVjM1FnY0hKbGRrSjBiaUE5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2R3Y21WMkp5azdYSEpjYmx4eVhHNWNkRngwY0hKbGRrSjBiaTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RqYkdsamF5Y3NJQ2hsS1NBOVBpQjdYSEpjYmx4MFhIUmNkR052Ym5OMElHRmpkR2wyWlZOc2FXUmxJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25MbU5oY205MWMyVnNYMTl6Ykdsa1pTNWhZM1JwZG1VbktUdGNjbHh1WEhKY2JseDBYSFJjZEd4bGRDQnVaWGgwVTJsaWJHbHVaeUE5SUdGamRHbDJaVk5zYVdSbExuQnlaWFpwYjNWelJXeGxiV1Z1ZEZOcFlteHBibWM3WEhKY2JseHlYRzVjZEZ4MFhIUnBaaUFvYm1WNGRGTnBZbXhwYm1jZ1BUMGdiblZzYkNrZ2UxeHlYRzVjZEZ4MFhIUmNkRzVsZUhSVGFXSnNhVzVuSUQwZ1lXTjBhWFpsVTJ4cFpHVTdYSEpjYmx4MFhIUmNkSDFjY2x4dVhISmNibHgwWEhSY2RHbG1JQ2h1WlhoMFUybGliR2x1Wnk1amJHRnpjMHhwYzNRdVkyOXVkR0ZwYm5Nb0oyTmhjbTkxYzJWc1gxOXpiR2xrWlNjcEtTQjdYSEpjYmx4MFhIUmNkRngwWVdOMGFYWmxVMnhwWkdVdVkyeGhjM05NYVhOMExuSmxiVzkyWlNnbllXTjBhWFpsSnlrN1hISmNibHgwWEhSY2RGeDBibVY0ZEZOcFlteHBibWN1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25ZV04wYVhabEp5azdYSEpjYmx4MFhIUmNkSDFjY2x4dVhIUmNkSDBwTzF4eVhHNWNkSDFjY2x4dVhISmNibHgwYVdZZ0tHTmhjbTkxYzJWc0lDRTlQU0J1ZFd4c0tTQjdYSEpjYmx4MFhIUW9ablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNkRngwWEhSa2FYTndiR0Y1UTJGeWIzVnpaV3dvS1R0Y2NseHVYSFJjZEgwcEtDazdYSEpjYmx4MGZWeHlYRzU5S1R0Y2NseHVJaXdpZDJsdVpHOTNMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMFJQVFVOdmJuUmxiblJNYjJGa1pXUW5MQ0JtZFc1amRHbHZiaUFvS1NCN1hISmNibHgwTHk4Z2RHRmljMXh5WEc1Y2RHTnZibk4wSUhSaFlreHBjM1JDZEc0Z1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5UVd4c0tDY3VkR0ZpWTJOdmNtUnBiMjVmWDJ4cGMzUXRZblJ1SnlrN1hISmNibHgwWTI5dWMzUWdkR0ZpY3lBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0pCYkd3b0p5NTBZV0pqWTI5eVpHbHZibDlmWTI5dWRHRnBibVZ5SnlrN1hISmNibHgwWTI5dWMzUWdkR0ZpWTJOdmNtUnBiMjVNYVhOMElEMGdaRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkRUo1U1dRb0ozUmhZbU5qYjNKa2FXOXVMV3hwYzNRbktUdGNjbHh1WEhSamIyNXpkQ0IwWVdKelEyOXVkR1Z1ZENBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0pCYkd3b0p5NTBZV0pqWTI5eVpHbHZibDlmZEdGaUxXbHVibVZ5SnlrN1hISmNibHgwWTI5dWMzUWdkR0ZpWTJOdmNtUnBiMjRnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2duZEdGaVkyTnZjbVJwYjI0bktUdGNjbHh1WEhKY2JseDBablZ1WTNScGIyNGdZV04wYVhaaGRHVlVZV0p6S0NrZ2UxeHlYRzVjZEZ4MGRHRmlUR2x6ZEVKMGJpNW1iM0pGWVdOb0tDaDBZV0lwSUQwK0lIdGNjbHh1WEhSY2RGeDBkR0ZpTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjJOc2FXTnJKeXdnS0dVcElEMCtJSHRjY2x4dVhIUmNkRngwWEhSamIyNXpkQ0IwWVdKT1lYWWdQU0IwWVdJdWNHRnlaVzUwUld4bGJXVnVkRHRjY2x4dVhIUmNkRngwWEhSamIyNXpkQ0IwWVdKelEyOXVkR0ZwYm1WeUlEMGdkR0ZpVG1GMkxuQmhjbVZ1ZEVWc1pXMWxiblF1Y0dGeVpXNTBSV3hsYldWdWREdGNjbHh1WEhSY2RGeDBYSFJqYjI1emRDQjBZV0pPZFcxaVpYSWdQU0IwWVdJdVpHRjBZWE5sZEM1bWIzSlVZV0k3WEhKY2JseDBYSFJjZEZ4MFkyOXVjM1FnZEdGaVZHOUJZM1JwZG1GMFpTQTlJSFJoWW5ORGIyNTBZV2x1WlhJdWNYVmxjbmxUWld4bFkzUnZjaWhjY2x4dVhIUmNkRngwWEhSY2RHQXVkR0ZpWTJOdmNtUnBiMjVmWDNSaFlsdGtZWFJoTFhSaFlqMWNJaVI3ZEdGaVRuVnRZbVZ5ZlZ3aVhXQmNjbHh1WEhSY2RGeDBYSFFwTzF4eVhHNWNjbHh1WEhSY2RGeDBYSFIwWVdKT1lYWXVjWFZsY25sVFpXeGxZM1J2Y2tGc2JDZ25MblJoWW1OamIzSmthVzl1WDE5c2FYTjBMV0owYmljcExtWnZja1ZoWTJnb0tHSjBiaWtnUFQ0Z2UxeHlYRzVjZEZ4MFhIUmNkRngwWW5SdUxtTnNZWE56VEdsemRDNXlaVzF2ZG1Vb0oyTjFjbkpsYm5RbktUdGNjbHh1WEhSY2RGeDBYSFI5S1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwZEdGaWMwTnZiblJoYVc1bGNpNXhkV1Z5ZVZObGJHVmpkRzl5UVd4c0tDY3VkR0ZpWTJOdmNtUnBiMjVmWDNSaFlpY3BMbVp2Y2tWaFkyZ29LSFJoWWlrZ1BUNGdlMXh5WEc1Y2RGeDBYSFJjZEZ4MGRHRmlMbU5zWVhOelRHbHpkQzV5WlcxdmRtVW9KMk4xY25KbGJuUW5LVHRjY2x4dVhIUmNkRngwWEhSOUtUdGNjbHh1WEhKY2JseDBYSFJjZEZ4MGRHRmlMbU5zWVhOelRHbHpkQzVoWkdRb0oyTjFjbkpsYm5RbktUdGNjbHh1WEhSY2RGeDBYSFIwWVdKVWIwRmpkR2wyWVhSbExtTnNZWE56VEdsemRDNWhaR1FvSjJOMWNuSmxiblFuS1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwYVdZZ0tIZHBibVJ2ZHk1cGJtNWxjbGRwWkhSb0lENDlJRFl3TUNrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwZEdGaWMwTnZiblJsYm5RdVptOXlSV0ZqYUNnb2RHRmljeWtnUFQ0Z2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhSMFlXSnpMbk4wZVd4bExtMWhlRWhsYVdkb2RDQTlJSFJoWW5NdWMyTnliMnhzU0dWcFoyaDBJQ3NnSjNCNEp6dGNjbHh1WEhSY2RGeDBYSFJjZEgwcE8xeHlYRzVjZEZ4MFhIUmNkSDFjY2x4dVhIUmNkRngwZlNrN1hISmNibHgwWEhSOUtUdGNjbHh1WEhKY2JseDBYSFJwWmlBb2RHRmlZMk52Y21ScGIyNU1hWE4wS1NCN1hISmNibHgwWEhSY2RIUmhZbk11Wm05eVJXRmphQ2dvZEdGaUtTQTlQaUI3WEhKY2JseDBYSFJjZEZ4MGRHRmlMbkYxWlhKNVUyVnNaV04wYjNJb0p5NTBZV0pqWTI5eVpHbHZibDlmYkdsemRDQXVkR0ZpWTJOdmNtUnBiMjVmWDJKMGJpY3BMbU5zYVdOcktDazdYSEpjYmx4MFhIUmNkSDBwTzF4eVhHNWNkRngwZlZ4eVhHNWNkSDFjY2x4dVhISmNibHgwTHk4dkx5OGdZV05qYjNKa2FXOXVYSEpjYmx4MFkyOXVjM1FnWVdOamIzSmthVzl1UW5SdUlEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2tGc2JDZ25MbUZqWTI5eVpHbHZibDlmYkdsemRDMWlkRzRuS1R0Y2NseHVYSEpjYmx4MFpuVnVZM1JwYjI0Z1lXTjBhWFpoZEdWQlkyTnZjbVJwYjI0b0tTQjdYSEpjYmx4MFhIUmhZMk52Y21ScGIyNUNkRzR1Wm05eVJXRmphQ2dvWW5SdUtTQTlQaUI3WEhKY2JseDBYSFJjZEdKMGJpNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZGpiR2xqYXljc0lDZ3BJRDArSUh0Y2NseHVYSFJjZEZ4MFhIUXZMeUJqYUdWamF5Qm1iM0lnYjNCbGJpQmhZMk52Y21ScGIyNWNjbHh1WEhSY2RGeDBYSFJqYjI1emRDQmhZMk52Y21ScGIyNUNkRzVQY0dWdUlEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2loY2NseHVYSFJjZEZ4MFhIUmNkQ2N1WVdOamIzSmthVzl1WDE5c2FYTjBMV0owYmk1dmNHVnVKMXh5WEc1Y2RGeDBYSFJjZENrN1hISmNibHh5WEc1Y2RGeDBYSFJjZEdsbUlDaGhZMk52Y21ScGIyNUNkRzVQY0dWdUlDWW1JR0ZqWTI5eVpHbHZia0owYms5d1pXNGdJVDA5SUdKMGJpa2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MEx5OGdhV1lnZEdobGNtVWdhWE1nYjNCbGJpQjBhR1Z1SUhKbGJXOTJaU0J2Y0dWdUlHTnNZWE56SUdGdVpDQnpaWFFnYldGNGFHVnBaMmgwSUhSdklEQmNjbHh1WEhSY2RGeDBYSFJjZEdGalkyOXlaR2x2YmtKMGJrOXdaVzR1WTJ4aGMzTk1hWE4wTG5SdloyZHNaU2duYjNCbGJpY3BPMXh5WEc1Y2RGeDBYSFJjZEZ4MFlXTmpiM0prYVc5dVFuUnVUM0JsYmk1dVpYaDBSV3hsYldWdWRGTnBZbXhwYm1jdWMzUjViR1V1YldGNFNHVnBaMmgwSUQwZ01EdGNjbHh1WEhSY2RGeDBYSFI5WEhKY2JseHlYRzVjZEZ4MFhIUmNkQzh2SUhObGRDQnZjR1Z1SUdOc1lYTnpJSFJ2SUdWMlpYSjVJR05zYVdOclpXUWdZV05qYjNKa2FXOXVJR0owYmx4eVhHNWNkRngwWEhSY2RHSjBiaTVqYkdGemMweHBjM1F1ZEc5bloyeGxLQ2R2Y0dWdUp5azdYSEpjYmx4MFhIUmNkRngwWTI5dWMzUWdZV05qYjNKa2FXOXVRbTlrZVNBOUlHSjBiaTV1WlhoMFJXeGxiV1Z1ZEZOcFlteHBibWM3WEhKY2JseHlYRzVjZEZ4MFhIUmNkR2xtSUNoaWRHNHVZMnhoYzNOTWFYTjBMbU52Ym5SaGFXNXpLQ2R2Y0dWdUp5a3BJSHRjY2x4dVhIUmNkRngwWEhSY2RHRmpZMjl5WkdsdmJrSnZaSGt1YzNSNWJHVXViV0Y0U0dWcFoyaDBJRDBnWVdOamIzSmthVzl1UW05a2VTNXpZM0p2Ykd4SVpXbG5hSFFnS3lBbmNIZ25PMXh5WEc1Y2RGeDBYSFJjZEgwZ1pXeHpaU0I3WEhKY2JseDBYSFJjZEZ4MFhIUmhZMk52Y21ScGIyNUNiMlI1TG5OMGVXeGxMbTFoZUVobGFXZG9kQ0E5SURBN1hISmNibHgwWEhSY2RGeDBmVnh5WEc1Y2RGeDBYSFI5S1R0Y2NseHVYSFJjZEgwcE8xeHlYRzVjY2x4dVhIUmNkSGRwYm1SdmR5NWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZHlaWE5wZW1VbkxDQW9aU2tnUFQ0Z2UxeHlYRzVjZEZ4MFhIUnBaaUFvZDJsdVpHOTNMbWx1Ym1WeVYybGtkR2dnUENBMk1EQXBJSHRjY2x4dVhIUmNkRngwWEhSMFlXSnpRMjl1ZEdWdWRDNW1iM0pGWVdOb0tDaDBZV0p6S1NBOVBpQjdYSEpjYmx4MFhIUmNkRngwWEhSMFlXSnpMbk4wZVd4bExtMWhlRWhsYVdkb2RDQTlJREE3WEhKY2JseDBYSFJjZEZ4MFhIUnBaaUFvZEdGaWN5NXdjbVYyYVc5MWMwVnNaVzFsYm5SVGFXSnNhVzVuTG1Oc1lYTnpUR2x6ZEM1amIyNTBZV2x1Y3lnbmIzQmxiaWNwS1NCN1hISmNibHgwWEhSY2RGeDBYSFJjZEhSaFluTXVjSEpsZG1sdmRYTkZiR1Z0Wlc1MFUybGliR2x1Wnk1amJHRnpjMHhwYzNRdWNtVnRiM1psS0NkdmNHVnVKeWs3WEhKY2JseDBYSFJjZEZ4MFhIUjlYSEpjYmx4MFhIUmNkRngwZlNrN1hISmNibHgwWEhSY2RIMWNjbHh1WEhSY2RIMHBPMXh5WEc1Y2RIMWNjbHh1WEhKY2JseDBhV1lnS0hSaFltTmpiM0prYVc5dUtTQjdYSEpjYmx4MFhIUmhZM1JwZG1GMFpWUmhZbk1vS1R0Y2NseHVYSFJjZEdGamRHbDJZWFJsUVdOamIzSmthVzl1S0NrN1hISmNibHgwZlZ4eVhHNTlLVHRjY2x4dUlsMHNJbk52ZFhKalpWSnZiM1FpT2lJaWZRPT0ifQ==
