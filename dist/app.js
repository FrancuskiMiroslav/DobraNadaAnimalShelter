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
			const { title, type, content, image, imageTab, imageMob } = slide;

			newSlide = document.createElement('div');
			newSlide.classList.add('carousel__slide');

			newSlide.innerHTML = `
						<div class="carousel__image-container">
						<picture class="carousel__image-picture">
							<source media="(max-width:599px)" srcset="${imageMob}">
                        	<source media="(min-width:600px)" srcset="${image}">							
							<img src="${
								window.innerWidth >= 600 ? image : imageMob
							}" loading="lazy" alt="${title}"/>
						</picture>
							
						</div>
						<div class="carousel__content">
							<h1 class="carousel__title">${title}</h1>
							<p class="carousel__desc">${content}</p>
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Fkb3B0Q29udGVudFN3aXRjaGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9mZXRjaEFuaW1hbHNEYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9mb3JtVmFsaWRhaXRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL25hdi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy90YWJjY29yZGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7QUFDSCxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhEQUE4RCxPQUFPO0FBQ3JFO0FBQ0EsZ0NBQWdDLE9BQU87QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCLG1CQUFPLENBQUMsNkNBQWdCOztBQUVsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkM7O0FBRTdDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLDZDQUE2QztBQUM3Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx5Q0FBeUMsTUFBTSxTQUFTLEtBQUssR0FBRyxRQUFRLEVBQUU7QUFDMUU7QUFDQTtBQUNBLDBEQUEwRCxLQUFLO0FBQy9EO0FBQ0EsS0FBSztBQUNMO0FBQ0EsOEVBQThFLFFBQVEsRUFBRSxPQUFPO0FBQy9GO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxRQUFRLEVBQUUsT0FBTztBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFLE9BQU87QUFDakY7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFLE9BQU87QUFDakY7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFLE1BQU07QUFDaEY7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLDBCQUEwQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsMEJBQTBCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBLCtDQUErQywwQkFBMEI7QUFDekU7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFLEtBQUs7QUFDL0U7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFLE9BQU87QUFDakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx5Q0FBeUMsVUFBVSxTQUFTLFNBQVM7QUFDckU7QUFDQSxLQUFLLEVBQUU7QUFDUDtBQUNBO0FBQ0EsMERBQTBELFNBQVM7QUFDbkU7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLEVBQUUsV0FBVztBQUM5QjtBQUNBLDBDQUEwQztBQUMxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0UsWUFBWTtBQUM1RTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRSxTQUFTO0FBQ25GO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxrQ0FBa0M7QUFDakY7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGtDQUFrQztBQUNqRjtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0Msa0NBQWtDO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxrQkFBa0IsbUJBQW1CO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNybUJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDLHlCQUF5Qiw2QkFBNkIsSUFBSSxRQUFRLElBQUksUUFBUSxJQUFJLFFBQVEsSUFBSSxnQ0FBZ0MsR0FBRztBQUNsSztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ3ZGRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFOztBQUVGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOzs7Ozs7Ozs7Ozs7QUNoREQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ25CRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7Ozs7Ozs7Ozs7OztBQ3BCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixtQkFBTyxDQUFDLCtDQUFpQjs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7O0FBRUY7QUFDQSw0Q0FBNEM7QUFDNUM7O0FBRUE7QUFDQSxVQUFVLGtEQUFrRDs7QUFFNUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsU0FBUztBQUM1RCxxRUFBcUUsTUFBTTtBQUMzRTtBQUNBO0FBQ0EsUUFBUSx3QkFBd0IsTUFBTTtBQUN0Qzs7QUFFQTtBQUNBO0FBQ0EscUNBQXFDLE1BQU07QUFDM0MsbUNBQW1DLFFBQVE7QUFDM0M7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNuR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsVUFBVTtBQUM5Qzs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLElBQUk7QUFDSixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcblx0aGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgbnVsbCwgJyAnKTtcclxuXHRjb25zdCB0YWJTd2l0Y2hlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1zd2l0Y2hlcl0nKTtcclxuXHJcblx0dGFiU3dpdGNoZXJzLmZvckVhY2goKHRhYlN3aXRjaCkgPT4ge1xyXG5cdFx0Y29uc3QgdGFiU3dpdGNoZXIgPSB0YWJTd2l0Y2g7XHJcblx0XHRjb25zdCBwYWdlSWQgPSB0YWJTd2l0Y2hlci5kYXRhc2V0LnRhYjtcclxuXHJcblx0XHR0YWJTd2l0Y2hlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0XHRcdGRvY3VtZW50XHJcblx0XHRcdFx0LnF1ZXJ5U2VsZWN0b3IoJy5hZG9wdF9fbGlzdC1pdGVtLmFjdGl2ZScpXHJcblx0XHRcdFx0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cclxuXHRcdFx0dGFiU3dpdGNoZXIucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cclxuXHRcdFx0c3dpdGNoUGFnZShwYWdlSWQpO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcblxyXG5cdGZ1bmN0aW9uIHN3aXRjaFBhZ2UocGFnZUlkKSB7XHJcblx0XHRjb25zdCBjdXJyZW50UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLmFjdGl2ZScpO1xyXG5cdFx0Y29uc3QgY3VycmVudFBhZ2VIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS1oZWFkZXIuYWN0aXZlJyk7XHJcblxyXG5cdFx0Y3VycmVudFBhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0XHRjdXJyZW50UGFnZUhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHJcblx0XHRjb25zdCBuZXh0UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wYWdlW2RhdGEtcGFnZT1cIiR7cGFnZUlkfVwiXWApO1xyXG5cdFx0Y29uc3QgbmV4dFBhZ2VIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHRgLnBhZ2UtaGVhZGVyW2RhdGEtaGVhZGVyPVwiJHtwYWdlSWR9XCJdYFxyXG5cdFx0KTtcclxuXHRcdG5leHRQYWdlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdFx0bmV4dFBhZ2VIZWFkZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblx0fVxyXG59KTtcclxuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuXHRjb25zdCBhbmltYWxzVXJsID0gJy4uL2pzL2FuaW1hbHMuanNvbic7XHJcblx0Y29uc3QgYW5pbWFsc1BhZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FuaW1hbHMtcGFnZXMnKTtcclxuXHRjb25zdCBkb2dzQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RvZ3MtYm94Jyk7XHJcblx0Y29uc3QgY2F0c0JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRzLWJveCcpO1xyXG5cclxuXHRjb25zdCBsb2NhbEFuaW1hbHNKU09OID0gcmVxdWlyZSgnLi9hbmltYWxzLmpzb24nKTtcclxuXHJcblx0LyogY29uc3QgZ2V0QW5pbWFsc0RhdGEgPSBhc3luYyAoKSA9PiB7XHJcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFuaW1hbHNVcmwpO1xyXG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcblx0XHRyZXR1cm4gZGF0YTtcclxuXHR9OyAqL1xyXG5cclxuXHRjb25zdCBkb2dOdW1iZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG9nTnVtYmVyJyk7XHJcblx0Y29uc3QgY2F0TnVtYmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdE51bWJlcicpO1xyXG5cclxuXHRhc3luYyBmdW5jdGlvbiBkaXNwbGF5QW5pbWFsTnVtYmVycygpIHtcclxuXHRcdC8qIGNvbnN0IGRhdGFMaXN0ID0gYXdhaXQgZ2V0QW5pbWFsc0RhdGEoKTsgKi9cclxuXHJcblx0XHRjb25zdCBhbmltYWxzQXJyYXkgPSBsb2NhbEFuaW1hbHNKU09OLmFuaW1hbHM7XHJcblxyXG5cdFx0bGV0IGRvZ3NBcnJheU51bWJlciA9IGFuaW1hbHNBcnJheVswXS5kb2dzLmxlbmd0aDtcclxuXHRcdGxldCBjYXRzQXJyYXlOdW1iZXIgPSBhbmltYWxzQXJyYXlbMF0uY2F0cy5sZW5ndGg7XHJcblxyXG5cdFx0ZG9nTnVtYmVyLmlubmVyVGV4dCA9IGRvZ3NBcnJheU51bWJlcjtcclxuXHRcdGNhdE51bWJlci5pbm5lclRleHQgPSBjYXRzQXJyYXlOdW1iZXI7XHJcblx0fVxyXG5cclxuXHRpZiAoKGRvZ051bWJlciwgY2F0TnVtYmVyKSkge1xyXG5cdFx0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0ZGlzcGxheUFuaW1hbE51bWJlcnMoKTtcclxuXHRcdH0pKCk7XHJcblx0fVxyXG5cclxuXHRhc3luYyBmdW5jdGlvbiBkaXNwbGF5QW5pbWFscygpIHtcclxuXHRcdC8qIGNvbnN0IGRhdGFMaXN0ID0gYXdhaXQgZ2V0QW5pbWFsc0RhdGEoKTsgKi9cclxuXHRcdGNvbnN0IGFuaW1hbHNBcnJheSA9IGxvY2FsQW5pbWFsc0pTT04uYW5pbWFscztcclxuXHJcblx0XHRhbmltYWxzQXJyYXkuZm9yRWFjaCgoYW5pbWFsKSA9PiB7XHJcblx0XHRcdGRvZ3NBcnJheSA9IGFuaW1hbC5kb2dzO1xyXG5cdFx0XHRjYXRzQXJyYXkgPSBhbmltYWwuY2F0cztcclxuXHJcblx0XHRcdGRvZ3NBcnJheS5mb3JFYWNoKChkb2cpID0+IHtcclxuXHRcdFx0XHRjb25zdCB7XHJcblx0XHRcdFx0XHRudW1iZXIsXHJcblx0XHRcdFx0XHRzcGVjaWVzLFxyXG5cdFx0XHRcdFx0YnJlZWQsXHJcblx0XHRcdFx0XHRjb2xvcixcclxuXHRcdFx0XHRcdHdlaWdodCxcclxuXHRcdFx0XHRcdGhlaWdodCxcclxuXHRcdFx0XHRcdGNvYXQsXHJcblx0XHRcdFx0XHRiaXJ0aCxcclxuXHRcdFx0XHRcdG5hbWUsXHJcblx0XHRcdFx0XHRnZW5kZXIsXHJcblx0XHRcdFx0XHRpbWFnZSxcclxuXHRcdFx0XHRcdGRlc2MsXHJcblx0XHRcdFx0XHRhZG9wdGVkLFxyXG5cdFx0XHRcdH0gPSBkb2c7XHJcblxyXG5cdFx0XHRcdGRvZ0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0XHRcdGRvZ0JveC5jbGFzc0xpc3QuYWRkKCdwYWdlX19ib3gnKTtcclxuXHRcdFx0XHRhZG9wdGVkID09PSAneWVzJyA/IGRvZ0JveC5jbGFzc0xpc3QuYWRkKCdhZG9wdGVkJykgOiAnJztcclxuXHJcblx0XHRcdFx0Y29uc3QgZG9nWWVhcnMgPSBiaXJ0aDtcclxuXHJcblx0XHRcdFx0Y29uc3QgbWlsaXNlY3NCZXR3ZWVuRE9CYW5kMTk3MCA9IERhdGUucGFyc2UoZG9nWWVhcnMpO1xyXG5cdFx0XHRcdGNvbnN0IG1pbGlzZWNzQmV0d2Vlbk5PV2FuZDE5NzAgPSBEYXRlLm5vdygpO1xyXG5cdFx0XHRcdGNvbnN0IGFnZUluTWlsaXNlY3MgPVxyXG5cdFx0XHRcdFx0bWlsaXNlY3NCZXR3ZWVuTk9XYW5kMTk3MCAtIG1pbGlzZWNzQmV0d2VlbkRPQmFuZDE5NzA7XHJcblxyXG5cdFx0XHRcdGNvbnN0IG1pbGlzZWNzID0gYWdlSW5NaWxpc2VjcztcclxuXHRcdFx0XHRjb25zdCBzZWNzID0gMTAwMDtcclxuXHRcdFx0XHRjb25zdCBtaW5zID0gc2VjcyAqIDYwO1xyXG5cdFx0XHRcdGNvbnN0IGhvdXIgPSBtaW5zICogNjA7XHJcblx0XHRcdFx0Y29uc3QgZGF5ID0gaG91ciAqIDI0O1xyXG5cdFx0XHRcdGNvbnN0IHllYXIgPSBkYXkgKiAzNjU7XHJcblxyXG5cdFx0XHRcdGxldCB5ZWFycyA9IE1hdGgucm91bmQobWlsaXNlY3MgLyB5ZWFyKTtcclxuXHJcblx0XHRcdFx0ZG9nQm94LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2VfX2JveC10b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLiR7aW1hZ2V9XCIgYWx0PVwiJHtuYW1lfSAke3NwZWNpZXN9XCJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlX19ib3gtYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJwYWdlX19ib3gtdGl0bGVcIj4ke25hbWV9JHtcclxuXHRcdFx0XHRcdGFkb3B0ZWQgPT09ICd5ZXMnID8gYCAtIDxzcGFuPmFkb3B0ZWQ8L3NwYW4+YCA6ICcnXHJcblx0XHRcdFx0fTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZV9fYm94LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXhwYW5kTW9yZUNvbnRlbnRcIiBpZD1cInNob3dNb3JlLSR7c3BlY2llc30ke251bWJlcn1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwYWdlX19ib3gtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtkZXNjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXhwYW5kTW9yZUhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmQtbW9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1oaWRldGV4dD1cIi4uLlJlYWQgbGVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXNob3d0ZXh0PVwiLi4uUmVhZCBtb3JlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwic2hvd01vcmUtJHtzcGVjaWVzfSR7bnVtYmVyfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ1dHRvbiBzaG93TW9yZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLlJlYWQgbW9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJwYWdlX19ib3gtaWNvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS13ZWlnaHRcIj48L2lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxzcGFuIGNsYXNzPVwicGFnZV9fYm94LWljb24tLXRleHRcIj4ke3dlaWdodH0ga2c8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1hcnJvd3MtYWx0LXZcIj48L2lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxzcGFuIGNsYXNzPVwicGFnZV9fYm94LWljb24tLXRleHRcIj4ke2hlaWdodH0gY208L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jYWxlbmRhci1jaGVja1wiPjwvaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PHNwYW4gY2xhc3M9XCJwYWdlX19ib3gtaWNvbi0tdGV4dFwiPiR7eWVhcnN9IHlyLjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VfX2JveC1pY29uXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVwiZmFzIGZhLXBhbGV0dGVcIj48L2lcclxuXHRcdFx0XHRcdFx0XHRcdFx0PjxzcGFuIGNsYXNzPVwicGFnZV9fYm94LWljb24tLXRleHRcIj4ke2NvbG9yWzBdID8gY29sb3JbMF0gOiAnLSd9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZV9fYm94LWljb25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJmYXMgZmEtcGFsZXR0ZVwiPjwvaVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+PHNwYW4gY2xhc3M9XCJwYWdlX19ib3gtaWNvbi0tdGV4dFwiPiR7Y29sb3JbMV0gPyBjb2xvclsxXSA6ICctJ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cImZhcyBmYS1wYWxldHRlXCI+PC9pXHJcblx0XHRcdFx0XHRcdFx0XHRcdD48c3BhbiBjbGFzcz1cInBhZ2VfX2JveC1pY29uLS10ZXh0XCI+JHtjb2xvclsyXSA/IGNvbG9yWzJdIDogJy0nfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZV9fYm94LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtcGF3XCI+PC9pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48c3BhbiBjbGFzcz1cInBhZ2VfX2JveC1pY29uLS10ZXh0XCI+JHtjb2F0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VfX2JveC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXZlbnVzLW1hcnNcIj48L2lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxzcGFuIGNsYXNzPVwicGFnZV9fYm94LWljb24tLXRleHRcIj4ke2dlbmRlcn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgYDtcclxuXHJcblx0XHRcdFx0ZG9nc0JveC5hcHBlbmRDaGlsZChkb2dCb3gpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGNhdHNBcnJheS5mb3JFYWNoKChjYXQpID0+IHtcclxuXHRcdFx0XHRjYXRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdFx0XHRjYXRCb3guY2xhc3NMaXN0LmFkZCgncGFnZV9fYm94Jyk7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGNhdFllYXJzID0gY2F0LmJpcnRoO1xyXG5cclxuXHRcdFx0XHRjb25zdCBtaWxpc2Vjc0JldHdlZW5ET0JhbmQxOTcwY2F0ID0gRGF0ZS5wYXJzZShjYXRZZWFycyk7XHJcblx0XHRcdFx0Y29uc3QgbWlsaXNlY3NCZXR3ZWVuTk9XYW5kMTk3MCA9IERhdGUubm93KCk7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGFnZUluTWlsaXNlY3NDYXQgPVxyXG5cdFx0XHRcdFx0bWlsaXNlY3NCZXR3ZWVuTk9XYW5kMTk3MCAtIG1pbGlzZWNzQmV0d2VlbkRPQmFuZDE5NzBjYXQ7XHJcblxyXG5cdFx0XHRcdGNvbnN0IG1pbGlzZWNzQ2F0ID0gYWdlSW5NaWxpc2Vjc0NhdDtcclxuXHRcdFx0XHRjb25zdCBzZWNzID0gMTAwMDtcclxuXHRcdFx0XHRjb25zdCBtaW5zID0gc2VjcyAqIDYwO1xyXG5cdFx0XHRcdGNvbnN0IGhvdXIgPSBtaW5zICogNjA7XHJcblx0XHRcdFx0Y29uc3QgZGF5ID0gaG91ciAqIDI0O1xyXG5cdFx0XHRcdGNvbnN0IHllYXIgPSBkYXkgKiAzNjU7XHJcblxyXG5cdFx0XHRcdGxldCB5ZWFyc0NhdCA9IE1hdGgucm91bmQobWlsaXNlY3NDYXQgLyB5ZWFyKTtcclxuXHJcblx0XHRcdFx0Y2F0Qm94LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2VfX2JveC10b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLiR7Y2F0LmltYWdlfVwiIGFsdD1cIiR7Y2F0Lm5hbWV9ICR7XHJcblx0XHRcdFx0XHRjYXQuc3BlY2llc1xyXG5cdFx0XHRcdH1cIn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2VfX2JveC1ib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInBhZ2VfX2JveC10aXRsZVwiPiR7Y2F0Lm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlX19ib3gtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleHBhbmRNb3JlQ29udGVudFwiIGlkPVwic2hvd01vcmUtJHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNhdC5zcGVjaWVzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSR7Y2F0Lm51bWJlcn1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwYWdlX19ib3gtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtjYXQuZGVzY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV4cGFuZE1vcmVIb2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kLW1vcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaGlkZXRleHQ9XCIuLi5SZWFkIGxlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zaG93dGV4dD1cIi4uLlJlYWQgbW9yZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cInNob3dNb3JlLSR7Y2F0LnNwZWNpZXN9JHtcclxuXHRcdFx0XHRcdGNhdC5udW1iZXJcclxuXHRcdFx0XHR9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnV0dG9uIHNob3dNb3JlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uUmVhZCBtb3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInBhZ2VfX2JveC1pY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VfX2JveC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXdlaWdodFwiPjwvaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PHNwYW4gY2xhc3M9XCJwYWdlX19ib3gtaWNvbi0tdGV4dFwiPiR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2F0LndlaWdodFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IGtnPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZV9fYm94LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtYXJyb3dzLWFsdC12XCI+PC9pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48c3BhbiBjbGFzcz1cInBhZ2VfX2JveC1pY29uLS10ZXh0XCI+JHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjYXQuaGVpZ2h0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1jbTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VfX2JveC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNhbGVuZGFyLWNoZWNrXCI+PC9pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48c3BhbiBjbGFzcz1cInBhZ2VfX2JveC1pY29uLS10ZXh0XCI+JHt5ZWFyc0NhdH0geXIuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZV9fYm94LWljb25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJmYXMgZmEtcGFsZXR0ZVwiPjwvaVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+PHNwYW4gY2xhc3M9XCJwYWdlX19ib3gtaWNvbi0tdGV4dFwiPiR7Y2F0LmNvbG9yWzBdID8gY2F0LmNvbG9yWzBdIDogJy0nfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VfX2JveC1pY29uXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVwiZmFzIGZhLXBhbGV0dGVcIj48L2lcclxuXHRcdFx0XHRcdFx0XHRcdFx0PjxzcGFuIGNsYXNzPVwicGFnZV9fYm94LWljb24tLXRleHRcIj4ke2NhdC5jb2xvclsxXSA/IGNhdC5jb2xvclsxXSA6ICctJ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cImZhcyBmYS1wYWxldHRlXCI+PC9pXHJcblx0XHRcdFx0XHRcdFx0XHRcdD48c3BhbiBjbGFzcz1cInBhZ2VfX2JveC1pY29uLS10ZXh0XCI+JHtjYXQuY29sb3JbMl0gPyBjYXQuY29sb3JbMl0gOiAnLSd9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1wYXdcIj48L2lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxzcGFuIGNsYXNzPVwicGFnZV9fYm94LWljb24tLXRleHRcIj4ke1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNhdC5jb2F0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS12ZW51cy1tYXJzXCI+PC9pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48c3BhbiBjbGFzcz1cInBhZ2VfX2JveC1pY29uLS10ZXh0XCI+JHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjYXQuZ2VuZGVyXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgYDtcclxuXHJcblx0XHRcdFx0Y2F0c0JveC5hcHBlbmRDaGlsZChjYXRCb3gpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGxldCBkb2dCb3hBcnJheSA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjZG9ncy1ib3ggLnBhZ2VfX2JveCcpXTtcclxuXHRcdGxldCBjYXRCb3hBcnJheSA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY2F0cy1ib3ggLnBhZ2VfX2JveCcpXTtcclxuXHRcdGxldCBjdXJyZW50UGFnZSA9IDE7XHJcblx0XHRsZXQgZWxlbWVudHNPblBhZ2UgPSA0O1xyXG5cclxuXHRcdGNvbnN0IHBhZ2luYXRpb25FbERvZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG9ncy1wYWdpbmF0aW9uJyk7XHJcblx0XHRjb25zdCBwYWdpbmF0aW9uRWxDYXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdHMtcGFnaW5hdGlvbicpO1xyXG5cclxuXHRcdGZ1bmN0aW9uIGRpc3BsYXlQYWdpbmF0ZWRJdGVtcyhpdGVtcywgd3JhcHBlciwgaXRlbXNQZXJQYWdlLCBwYWdlKSB7XHJcblx0XHRcdHdyYXBwZXIuaW5uZXJIVE1MID0gJyc7XHJcblx0XHRcdHBhZ2UtLTtcclxuXHJcblx0XHRcdGxldCBzdGFydCA9IGl0ZW1zUGVyUGFnZSAqIHBhZ2U7XHJcblx0XHRcdGxldCBlbmQgPSBzdGFydCArIGl0ZW1zUGVyUGFnZTtcclxuXHRcdFx0bGV0IHBhZ2luYXRlZEl0ZW1zID0gaXRlbXMuc2xpY2Uoc3RhcnQsIGVuZCk7XHJcblxyXG5cdFx0XHRwYWdpbmF0ZWRJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcblx0XHRcdFx0bGV0IGl0ZW1FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0XHRcdGl0ZW1FbC5jbGFzc0xpc3QuYWRkKCdwYWdlX19ib3gnKTtcclxuXHJcblx0XHRcdFx0aXRlbUVsID0gaXRlbTtcclxuXHJcblx0XHRcdFx0d3JhcHBlci5hcHBlbmRDaGlsZChpdGVtRWwpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBkaXNwbGF5UGFnaW5hdGlvbihpdGVtcywgd3JhcHBlciwgaXRlbXNQZXJQYWdlKSB7XHJcblx0XHRcdHdyYXBwZXIuaW5uZXJIVE1MID0gJyc7XHJcblxyXG5cdFx0XHRsZXQgcGFnZUNvdW50ID0gTWF0aC5jZWlsKGl0ZW1zLmxlbmd0aCAvIGl0ZW1zUGVyUGFnZSk7XHJcblxyXG5cdFx0XHRmb3IgKGxldCBpID0gMTsgaSA8IHBhZ2VDb3VudCArIDE7IGkrKykge1xyXG5cdFx0XHRcdGxldCBidG4gPSBwYWdpbmF0aW9uQnV0dG9uKGksIHBhZ2VDb3VudCk7XHJcblxyXG5cdFx0XHRcdGJ0bi5zdHlsZS53aWR0aCA9ICcwJztcclxuXHRcdFx0XHRidG4uc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuXHRcdFx0XHRidG4uc3R5bGUubWFyZ2luID0gJzAnO1xyXG5cclxuXHRcdFx0XHR3cmFwcGVyLmFwcGVuZENoaWxkKGJ0bik7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGxldCBuZXh0QnRuID0gbmV4dFBhZ2UocGFnZUNvdW50KTtcclxuXHRcdFx0d3JhcHBlci5hcHBlbmRDaGlsZChuZXh0QnRuKTtcclxuXHJcblx0XHRcdGxldCBwcmV2QnRuID0gcHJldlBhZ2UocGFnZUNvdW50KTtcclxuXHRcdFx0d3JhcHBlci5wcmVwZW5kKHByZXZCdG4pO1xyXG5cclxuXHRcdFx0bGV0IGN1cnJlbnRCdG5Eb2dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuXHRcdFx0XHQnI2RvZ3MgLnBhZ2luYXRpb24tYnRuLmFjdGl2ZSdcclxuXHRcdFx0KTtcclxuXHRcdFx0bGV0IGN1cnJlbnRCdG5DYXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuXHRcdFx0XHQnI2NhdHMgLnBhZ2luYXRpb24tYnRuLmFjdGl2ZSdcclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdGlmIChjdXJyZW50QnRuRG9ncyAmJiBjdXJyZW50QnRuQ2F0cykge1xyXG5cdFx0XHRcdGN1cnJlbnRCdG5Eb2dzLmNsYXNzTGlzdC5hZGQoJ2dyb3VwJyk7XHJcblx0XHRcdFx0Y3VycmVudEJ0bkRvZ3MubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2dyb3VwJyk7XHJcblx0XHRcdFx0Y3VycmVudEJ0bkRvZ3MubmV4dEVsZW1lbnRTaWJsaW5nLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKFxyXG5cdFx0XHRcdFx0J2dyb3VwJ1xyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0Y3VycmVudEJ0bkRvZ3MucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdncm91cCcpO1xyXG5cclxuXHRcdFx0XHRjdXJyZW50QnRuQ2F0cy5jbGFzc0xpc3QuYWRkKCdncm91cCcpO1xyXG5cdFx0XHRcdGN1cnJlbnRCdG5DYXRzLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdncm91cCcpO1xyXG5cdFx0XHRcdGN1cnJlbnRCdG5DYXRzLm5leHRFbGVtZW50U2libGluZy5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZChcclxuXHRcdFx0XHRcdCdncm91cCdcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdGN1cnJlbnRCdG5DYXRzLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnZ3JvdXAnKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIG5leHRQYWdlKHBhZ2VDb3VudCkge1xyXG5cdFx0XHRsZXQgbmV4dEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cdFx0XHRuZXh0QnRuLmNsYXNzTGlzdC5hZGQoJ25leHQnKTtcclxuXHRcdFx0bmV4dEJ0bi5pbm5lclRleHQgPSAnPic7XHJcblx0XHRcdG5leHRCdG4uY2xhc3NMaXN0LmFkZCgncGFnaW5hdGlvbi1idG4nKTtcclxuXHJcblx0XHRcdG5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0XHRcdGlmIChuZXh0QnRuLnBhcmVudEVsZW1lbnQgPT0gcGFnaW5hdGlvbkVsRG9ncykge1xyXG5cdFx0XHRcdFx0ZGlzcGxheVBhZ2luYXRlZEl0ZW1zKFxyXG5cdFx0XHRcdFx0XHRkb2dCb3hBcnJheSxcclxuXHRcdFx0XHRcdFx0ZG9nc0JveCxcclxuXHRcdFx0XHRcdFx0ZWxlbWVudHNPblBhZ2UsXHJcblx0XHRcdFx0XHRcdGN1cnJlbnRQYWdlXHJcblx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdGxldCBhY3RpdmVCdG5Eb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHRcdFx0XHQnI2RvZ3MgLnBhZ2luYXRpb24tYnRuLmFjdGl2ZSdcclxuXHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0YWN0aXZlQnRuRG9nLm5leHRFbGVtZW50U2libGluZy5jbGljaygpO1xyXG5cclxuXHRcdFx0XHRcdGlmIChjdXJyZW50UGFnZSA9PT0gcGFnZUNvdW50KSB7XHJcblx0XHRcdFx0XHRcdG5leHRCdG4uc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xyXG5cdFx0XHRcdFx0XHRuZXh0QnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0bGV0IHByZXZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZG9ncyAucHJldicpO1xyXG5cclxuXHRcdFx0XHRcdGlmIChjdXJyZW50UGFnZSAhPT0gMSkge1xyXG5cdFx0XHRcdFx0XHRwcmV2QnRuLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcblx0XHRcdFx0XHRcdHByZXZCdG4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhbGwnO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmIChhY3RpdmVCdG5Eb2cpIHtcclxuXHRcdFx0XHRcdFx0YWN0aXZlQnRuRG9nLmNsYXNzTGlzdC5hZGQoJ2dyb3VwJyk7XHJcblx0XHRcdFx0XHRcdGFjdGl2ZUJ0bkRvZy5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnZ3JvdXAnKTtcclxuXHRcdFx0XHRcdFx0YWN0aXZlQnRuRG9nLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnZ3JvdXAnKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChuZXh0QnRuLnBhcmVudEVsZW1lbnQgPT0gcGFnaW5hdGlvbkVsQ2F0cykge1xyXG5cdFx0XHRcdFx0ZGlzcGxheVBhZ2luYXRlZEl0ZW1zKFxyXG5cdFx0XHRcdFx0XHRjYXRCb3hBcnJheSxcclxuXHRcdFx0XHRcdFx0Y2F0c0JveCxcclxuXHRcdFx0XHRcdFx0ZWxlbWVudHNPblBhZ2UsXHJcblx0XHRcdFx0XHRcdGN1cnJlbnRQYWdlXHJcblx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdGxldCBhY3RpdmVCdG5DYXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHRcdFx0XHQnI2NhdHMgLnBhZ2luYXRpb24tYnRuLmFjdGl2ZSdcclxuXHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0YWN0aXZlQnRuQ2F0Lm5leHRFbGVtZW50U2libGluZy5jbGljaygpO1xyXG5cclxuXHRcdFx0XHRcdGlmIChjdXJyZW50UGFnZSA9PT0gcGFnZUNvdW50KSB7XHJcblx0XHRcdFx0XHRcdG5leHRCdG4uc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xyXG5cdFx0XHRcdFx0XHRuZXh0QnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0bGV0IHByZXZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2F0cyAucHJldicpO1xyXG5cclxuXHRcdFx0XHRcdGlmIChjdXJyZW50UGFnZSAhPT0gMSkge1xyXG5cdFx0XHRcdFx0XHRwcmV2QnRuLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcblx0XHRcdFx0XHRcdHByZXZCdG4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhbGwnO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmIChhY3RpdmVCdG5DYXQpIHtcclxuXHRcdFx0XHRcdFx0YWN0aXZlQnRuQ2F0LmNsYXNzTGlzdC5hZGQoJ2dyb3VwJyk7XHJcblx0XHRcdFx0XHRcdGFjdGl2ZUJ0bkNhdC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnZ3JvdXAnKTtcclxuXHRcdFx0XHRcdFx0YWN0aXZlQnRuQ2F0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnZ3JvdXAnKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0cmV0dXJuIG5leHRCdG47XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gcHJldlBhZ2UocGFnZUNvdW50KSB7XHJcblx0XHRcdGxldCBwcmV2QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblx0XHRcdHByZXZCdG4uY2xhc3NMaXN0LmFkZCgncHJldicpO1xyXG5cdFx0XHRwcmV2QnRuLmlubmVyVGV4dCA9ICc8JztcclxuXHRcdFx0cHJldkJ0bi5jbGFzc0xpc3QuYWRkKCdwYWdpbmF0aW9uLWJ0bicpO1xyXG5cclxuXHRcdFx0cHJldkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0XHRcdFx0aWYgKHByZXZCdG4ucGFyZW50RWxlbWVudCA9PSBwYWdpbmF0aW9uRWxEb2dzKSB7XHJcblx0XHRcdFx0XHRkaXNwbGF5UGFnaW5hdGVkSXRlbXMoXHJcblx0XHRcdFx0XHRcdGRvZ0JveEFycmF5LFxyXG5cdFx0XHRcdFx0XHRkb2dzQm94LFxyXG5cdFx0XHRcdFx0XHRlbGVtZW50c09uUGFnZSxcclxuXHRcdFx0XHRcdFx0Y3VycmVudFBhZ2VcclxuXHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0bGV0IGFjdGl2ZUJ0bkRvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdFx0XHRcdCcjZG9ncyAucGFnaW5hdGlvbi1idG4uYWN0aXZlJ1xyXG5cdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHRhY3RpdmVCdG5Eb2cucHJldmlvdXNFbGVtZW50U2libGluZy5jbGljaygpO1xyXG5cclxuXHRcdFx0XHRcdGxldCBuZXh0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RvZ3MgLm5leHQnKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoY3VycmVudFBhZ2UgIT09IHBhZ2VDb3VudCkge1xyXG5cdFx0XHRcdFx0XHRuZXh0QnRuLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcblx0XHRcdFx0XHRcdG5leHRCdG4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhbGwnO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmIChjdXJyZW50UGFnZSA9PT0gMSkge1xyXG5cdFx0XHRcdFx0XHRwcmV2QnRuLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcclxuXHRcdFx0XHRcdFx0cHJldkJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmIChhY3RpdmVCdG5Eb2cpIHtcclxuXHRcdFx0XHRcdFx0YWN0aXZlQnRuRG9nLmNsYXNzTGlzdC5hZGQoJ2dyb3VwJyk7XHJcblx0XHRcdFx0XHRcdGFjdGl2ZUJ0bkRvZy5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnZ3JvdXAnKTtcclxuXHRcdFx0XHRcdFx0YWN0aXZlQnRuRG9nLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnZ3JvdXAnKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChwcmV2QnRuLnBhcmVudEVsZW1lbnQgPT0gcGFnaW5hdGlvbkVsQ2F0cykge1xyXG5cdFx0XHRcdFx0ZGlzcGxheVBhZ2luYXRlZEl0ZW1zKFxyXG5cdFx0XHRcdFx0XHRjYXRCb3hBcnJheSxcclxuXHRcdFx0XHRcdFx0Y2F0c0JveCxcclxuXHRcdFx0XHRcdFx0ZWxlbWVudHNPblBhZ2UsXHJcblx0XHRcdFx0XHRcdGN1cnJlbnRQYWdlXHJcblx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdGxldCBhY3RpdmVCdG5DYXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHRcdFx0XHQnI2NhdHMgLnBhZ2luYXRpb24tYnRuLmFjdGl2ZSdcclxuXHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0YWN0aXZlQnRuQ2F0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xpY2soKTtcclxuXHJcblx0XHRcdFx0XHRsZXQgbmV4dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXRzIC5uZXh0Jyk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGN1cnJlbnRQYWdlICE9PSBwYWdlQ291bnQpIHtcclxuXHRcdFx0XHRcdFx0bmV4dEJ0bi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG5cdFx0XHRcdFx0XHRuZXh0QnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYWxsJztcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRpZiAoY3VycmVudFBhZ2UgPT09IDEpIHtcclxuXHRcdFx0XHRcdFx0cHJldkJ0bi5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XHJcblx0XHRcdFx0XHRcdHByZXZCdG4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRpZiAoYWN0aXZlQnRuQ2F0KSB7XHJcblx0XHRcdFx0XHRcdGFjdGl2ZUJ0bkNhdC5jbGFzc0xpc3QuYWRkKCdncm91cCcpO1xyXG5cdFx0XHRcdFx0XHRhY3RpdmVCdG5DYXQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2dyb3VwJyk7XHJcblx0XHRcdFx0XHRcdGFjdGl2ZUJ0bkNhdC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2dyb3VwJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGlmIChjdXJyZW50UGFnZSA9PT0gMSkge1xyXG5cdFx0XHRcdHByZXZCdG4uc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xyXG5cdFx0XHRcdHByZXZCdG4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHByZXZCdG47XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gcGFnaW5hdGlvbkJ1dHRvbihwYWdlLCBwYWdlQ291bnQpIHtcclxuXHRcdFx0bGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cdFx0XHRidXR0b24uY2xhc3NMaXN0LmFkZCgncGFnaW5hdGlvbi1idG4nKTtcclxuXHRcdFx0YnV0dG9uLmlubmVyVGV4dCA9IHBhZ2U7XHJcblxyXG5cdFx0XHRpZiAoY3VycmVudFBhZ2UgPT0gcGFnZSkge1xyXG5cdFx0XHRcdGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHRcdFx0XHRjdXJyZW50UGFnZSA9IHBhZ2U7XHJcblxyXG5cdFx0XHRcdGlmIChidXR0b24ucGFyZW50RWxlbWVudCA9PSBwYWdpbmF0aW9uRWxEb2dzKSB7XHJcblx0XHRcdFx0XHRkaXNwbGF5UGFnaW5hdGVkSXRlbXMoXHJcblx0XHRcdFx0XHRcdGRvZ0JveEFycmF5LFxyXG5cdFx0XHRcdFx0XHRkb2dzQm94LFxyXG5cdFx0XHRcdFx0XHRlbGVtZW50c09uUGFnZSxcclxuXHRcdFx0XHRcdFx0Y3VycmVudFBhZ2VcclxuXHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0bGV0IGFjdGl2ZUJ0bkRvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdFx0XHRcdCcjZG9ncyAucGFnaW5hdGlvbi1idG4uYWN0aXZlJ1xyXG5cdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHRhY3RpdmVCdG5Eb2cuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRcdFx0YnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cclxuXHRcdFx0XHRcdGxldCBuZXh0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RvZ3MgLm5leHQnKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoY3VycmVudFBhZ2UgPT09IHBhZ2VDb3VudCkge1xyXG5cdFx0XHRcdFx0XHRuZXh0QnRuLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcclxuXHRcdFx0XHRcdFx0bmV4dEJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0bmV4dEJ0bi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG5cdFx0XHRcdFx0XHRuZXh0QnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYWxsJztcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRsZXQgcHJldkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkb2dzIC5wcmV2Jyk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGN1cnJlbnRQYWdlID09PSAxKSB7XHJcblx0XHRcdFx0XHRcdHByZXZCdG4uc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xyXG5cdFx0XHRcdFx0XHRwcmV2QnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRwcmV2QnRuLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcblx0XHRcdFx0XHRcdHByZXZCdG4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhbGwnO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKGJ1dHRvbi5wYXJlbnRFbGVtZW50ID09IHBhZ2luYXRpb25FbENhdHMpIHtcclxuXHRcdFx0XHRcdGRpc3BsYXlQYWdpbmF0ZWRJdGVtcyhcclxuXHRcdFx0XHRcdFx0Y2F0Qm94QXJyYXksXHJcblx0XHRcdFx0XHRcdGNhdHNCb3gsXHJcblx0XHRcdFx0XHRcdGVsZW1lbnRzT25QYWdlLFxyXG5cdFx0XHRcdFx0XHRjdXJyZW50UGFnZVxyXG5cdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHRsZXQgYWN0aXZlQnRuQ2F0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuXHRcdFx0XHRcdFx0JyNjYXRzIC5wYWdpbmF0aW9uLWJ0bi5hY3RpdmUnXHJcblx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdGFjdGl2ZUJ0bkNhdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHJcblx0XHRcdFx0XHRidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRcdFx0bGV0IG5leHRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2F0cyAubmV4dCcpO1xyXG5cclxuXHRcdFx0XHRcdGlmIChjdXJyZW50UGFnZSA9PT0gcGFnZUNvdW50KSB7XHJcblx0XHRcdFx0XHRcdG5leHRCdG4uc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xyXG5cdFx0XHRcdFx0XHRuZXh0QnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRuZXh0QnRuLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcblx0XHRcdFx0XHRcdG5leHRCdG4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhbGwnO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGxldCBwcmV2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhdHMgLnByZXYnKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoY3VycmVudFBhZ2UgPT09IDEpIHtcclxuXHRcdFx0XHRcdFx0cHJldkJ0bi5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XHJcblx0XHRcdFx0XHRcdHByZXZCdG4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHByZXZCdG4uc3R5bGUub3BhY2l0eSA9ICcxJztcclxuXHRcdFx0XHRcdFx0cHJldkJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2FsbCc7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiBidXR0b247XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgZXhwYW5kc01vcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZXhwYW5kLW1vcmVdJyk7XHJcblxyXG5cdFx0ZnVuY3Rpb24gZXhwYW5kKCkge1xyXG5cdFx0XHRjb25zdCBzaG93Q29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZGF0YXNldC50YXJnZXQpO1xyXG5cdFx0XHRpZiAoc2hvd0NvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG5cdFx0XHRcdHRoaXMuaW5uZXJIVE1MID0gdGhpcy5kYXRhc2V0LnNob3d0ZXh0O1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuaW5uZXJIVE1MID0gdGhpcy5kYXRhc2V0LmhpZGV0ZXh0O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRzaG93Q29udGVudC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuXHRcdFx0aWYgKHNob3dDb250ZW50LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuXHRcdFx0XHRzaG93Q29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBzaG93Q29udGVudC5zY3JvbGxIZWlnaHQgKyAncHgnO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNob3dDb250ZW50LnN0eWxlLm1heEhlaWdodCA9IDIwICsgJ3B4JztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChkb2dzQm94KSB7XHJcblx0XHRcdGRpc3BsYXlQYWdpbmF0ZWRJdGVtcyhkb2dCb3hBcnJheSwgZG9nc0JveCwgZWxlbWVudHNPblBhZ2UsIGN1cnJlbnRQYWdlKTtcclxuXHRcdFx0ZGlzcGxheVBhZ2luYXRpb24oZG9nQm94QXJyYXksIHBhZ2luYXRpb25FbERvZ3MsIGVsZW1lbnRzT25QYWdlKTtcclxuXHJcblx0XHRcdGV4cGFuZHNNb3JlLmZvckVhY2goKGJ0bikgPT4ge1xyXG5cdFx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV4cGFuZCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChjYXRzQm94KSB7XHJcblx0XHRcdGRpc3BsYXlQYWdpbmF0ZWRJdGVtcyhjYXRCb3hBcnJheSwgY2F0c0JveCwgZWxlbWVudHNPblBhZ2UsIGN1cnJlbnRQYWdlKTtcclxuXHRcdFx0ZGlzcGxheVBhZ2luYXRpb24oY2F0Qm94QXJyYXksIHBhZ2luYXRpb25FbENhdHMsIGVsZW1lbnRzT25QYWdlKTtcclxuXHJcblx0XHRcdGV4cGFuZHNNb3JlLmZvckVhY2goKGJ0bikgPT4ge1xyXG5cdFx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV4cGFuZCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aWYgKGFuaW1hbHNQYWdlcykge1xyXG5cdFx0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0ZGlzcGxheUFuaW1hbHMoKTtcclxuXHRcdH0pKCk7XHJcblx0fVxyXG59KTtcclxuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuXHQvLyBmb3JtIHZhbGlkYXRpb25cclxuXHRjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QtZm9ybScpO1xyXG5cdGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpO1xyXG5cdGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsJyk7XHJcblx0Y29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlJyk7XHJcblx0Y29uc3QgZm9ybUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWJ0bicpO1xyXG5cclxuXHRpZiAoZm9ybSkge1xyXG5cdFx0W1xyXG5cdFx0XHQnY2xpY2snLFxyXG5cdFx0XHQnb250b3VjaHN0YXJ0JyxcclxuXHRcdFx0J21vdXNlb3ZlcicsXHJcblx0XHRcdCdrZXlkb3duJyxcclxuXHRcdFx0J2tleXByZXNzJyxcclxuXHRcdFx0J3RvdWNoc3RhcnQnLFxyXG5cdFx0XHQndG91Y2htb3ZlJyxcclxuXHRcdF0uZm9yRWFjaChcclxuXHRcdFx0KGV2ZW50KSA9PlxyXG5cdFx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsICgpID0+IHtcclxuXHRcdFx0XHRcdGlmIChjaGVja0lucHV0cygpID09PSBmYWxzZSkge1xyXG5cdFx0XHRcdFx0XHRmb3JtQnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGZvcm1CdG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblxyXG5cdFx0ZnVuY3Rpb24gY2hlY2tJbnB1dHMoKSB7XHJcblx0XHRcdGNvbnN0IG5hbWVWYWx1ZSA9IG5hbWUudmFsdWUudHJpbSgpO1xyXG5cdFx0XHRjb25zdCBlbWFpbFZhbHVlID0gZW1haWwudmFsdWUudHJpbSgpO1xyXG5cdFx0XHRjb25zdCBtZXNzYWdlVmFsdWUgPSBtZXNzYWdlLnZhbHVlLnRyaW0oKTtcclxuXHJcblx0XHRcdGlmIChuYW1lVmFsdWUgPT09ICcnKSB7XHJcblx0XHRcdFx0c2V0RXJyb3JGb3IobmFtZSwgJ1BsZWFzZSBlbnRlciB5b3VyIGZ1bGwgbmFtZScpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldFN1Y2Nlc3NGb3IobmFtZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChlbWFpbFZhbHVlID09PSAnJykge1xyXG5cdFx0XHRcdHNldEVycm9yRm9yKGVtYWlsLCAnUGxlYXNlIGVudGVyIHlvdXIgZW1haWwgYWRkcmVzcycpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKCFlbWFpbElzVmFsaWQoZW1haWxWYWx1ZSkpIHtcclxuXHRcdFx0XHRzZXRFcnJvckZvcihlbWFpbCwgJ0VtYWlsIGlzIG5vdCB2YWxpZCcpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldFN1Y2Nlc3NGb3IoZW1haWwpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAobWVzc2FnZVZhbHVlID09PSAnJykge1xyXG5cdFx0XHRcdHNldEVycm9yRm9yKG1lc3NhZ2UsICdQbGVhc2UgZW50ZXIgeW91ciBtZXNzYWdlJyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0U3VjY2Vzc0ZvcihtZXNzYWdlKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKFxyXG5cdFx0XHRcdG5hbWVWYWx1ZSA9PT0gJycgfHxcclxuXHRcdFx0XHRlbWFpbFZhbHVlID09PSAnJyB8fFxyXG5cdFx0XHRcdG1lc3NhZ2VWYWx1ZSA9PT0gJycgfHxcclxuXHRcdFx0XHQhZW1haWxJc1ZhbGlkKGVtYWlsVmFsdWUpXHJcblx0XHRcdCkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHNldEVycm9yRm9yKGlucHV0LCBtZXNzYWdlKSB7XHJcblx0XHRcdGNvbnN0IGZvcm0gPSBpbnB1dC5wYXJlbnRFbGVtZW50O1xyXG5cdFx0XHRjb25zdCBzbWFsbCA9IGZvcm0ucXVlcnlTZWxlY3Rvcignc21hbGwnKTtcclxuXHJcblx0XHRcdHNtYWxsLmlubmVyVGV4dCA9IG1lc3NhZ2U7XHJcblx0XHRcdGZvcm0uY2xhc3NOYW1lID0gJ2Zvcm1fX2dyb3VwIGVycm9yJztcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBzZXRTdWNjZXNzRm9yKGlucHV0KSB7XHJcblx0XHRcdGNvbnN0IGZvcm0gPSBpbnB1dC5wYXJlbnRFbGVtZW50O1xyXG5cdFx0XHRmb3JtLmNsYXNzTmFtZSA9ICdmb3JtX19ncm91cCBzdWNjZXNzJztcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBlbWFpbElzVmFsaWQoZW1haWwpIHtcclxuXHRcdFx0Y29uc3QgcmUgPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLy50ZXN0KFxyXG5cdFx0XHRcdGVtYWlsXHJcblx0XHRcdCk7XHJcblxyXG5cdFx0XHRyZXR1cm4gcmU7XHJcblx0XHR9XHJcblx0fVxyXG59KTtcclxuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoZSkgPT4ge1xuXHRcdGNvbnN0IHByZWxvYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlbG9hZCcpO1xuXG5cdFx0cHJlbG9hZC5jbGFzc0xpc3QuYWRkKCdwcmVsb2FkLWZpbmlzaGVkJyk7XG5cdH0pO1xuXG5cdGNvbnN0IGJ0blNjcm9sbFRvVG9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0blNjcm9sbFRvVG9wJyk7XG5cdGJ0blNjcm9sbFRvVG9wLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHR3aW5kb3cuc2Nyb2xsVG8oe1xuXHRcdFx0dG9wOiAwLFxuXHRcdFx0bGVmdDogMCxcblx0XHRcdGJlaGF2aW9yOiAnc21vb3RoJyxcblx0XHR9KTtcblx0fSk7XG5cblx0Y29uc3QgZXhwYW5kc01vcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZXhwYW5kLW1vcmVdJyk7XG5cblx0ZnVuY3Rpb24gZXhwYW5kKCkge1xuXHRcdGNvbnN0IHNob3dDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5kYXRhc2V0LnRhcmdldCk7XG5cblx0XHRpZiAoc2hvd0NvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuXHRcdFx0dGhpcy5pbm5lckhUTUwgPSB0aGlzLmRhdGFzZXQuc2hvd3RleHQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuaW5uZXJIVE1MID0gdGhpcy5kYXRhc2V0LmhpZGV0ZXh0O1xuXHRcdH1cblxuXHRcdHNob3dDb250ZW50LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuXHRcdGlmIChzaG93Q29udGVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG5cdFx0XHRzaG93Q29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBzaG93Q29udGVudC5zY3JvbGxIZWlnaHQgKyAncHgnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzaG93Q29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBgMjJweGA7XG5cdFx0fVxuXHR9XG5cblx0ZXhwYW5kc01vcmUuZm9yRWFjaCgoYnRuKSA9PiB7XG5cdFx0Y29uc3QgY29udGFpbmVySGVpZ2h0ID1cblx0XHRcdGJ0bi5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcub2Zmc2V0SGVpZ2h0O1xuXG5cdFx0Y29uc3QgZXhwYW5kRWxlbWVudEhlaWdodCA9XG5cdFx0XHRidG4ucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmZpcnN0RWxlbWVudENoaWxkLm9mZnNldEhlaWdodDtcblxuXHRcdGlmIChjb250YWluZXJIZWlnaHQgPj0gZXhwYW5kRWxlbWVudEhlaWdodCkge1xuXHRcdFx0YnRuLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcblx0XHRcdGJ0bi5zdHlsZS5oZWlnaHQgPSAwO1xuXHRcdH1cblx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBleHBhbmQpO1xuXHR9KTtcbn0pO1xuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuXHRjb25zdCBtb2RhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC1idG4nKTtcclxuXHRjb25zdCBtb2RhbEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJyk7XHJcblx0Y29uc3QgbW9kYWxCdG5DbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZScpO1xyXG5cclxuXHQvLyBTaG93IG1vZGFsXHJcblx0bW9kYWxCdG4uZm9yRWFjaCgobW9kYWwpID0+IHtcclxuXHRcdG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbW9kYWxFbC5jbGFzc0xpc3QuYWRkKCdzaG93LW1vZGFsJykpO1xyXG5cdH0pO1xyXG5cclxuXHQvLyBIaWRlIG1vZGFsXHJcblx0bW9kYWxCdG5DbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XHJcblx0XHRtb2RhbEVsLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3ctbW9kYWwnKVxyXG5cdCk7XHJcblxyXG5cdC8vIEhpZGUgbW9kYWwgb24gb3V0c2lkZSBjbGlja1xyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PlxyXG5cdFx0ZS50YXJnZXQgPT0gbW9kYWwgPyBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93LW1vZGFsJykgOiBmYWxzZVxyXG5cdCk7XHJcbn0pO1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IG5hdkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYtY29udGFpbmVyJyk7XHJcblx0Y29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LWJ0bicpO1xyXG5cdGNvbnN0IG5hdkxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2LWxpc3QnKTtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIChlKSA9PiB7XHJcblx0XHRpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA+IDApIHtcclxuXHRcdFx0bmF2Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N0aWNreScpO1xyXG5cdFx0XHRidG5TY3JvbGxUb1RvcC5zdHlsZS5vcGFjaXR5ID0gMTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG5hdkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdzdGlja3knKTtcclxuXHRcdFx0YnRuU2Nyb2xsVG9Ub3Auc3R5bGUub3BhY2l0eSA9IDA7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0bWVudUJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdjbGlja2VkJyk7XHJcblx0XHRuYXZDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnb3ZlcmxheScpO1xyXG5cdFx0bmF2TGlzdC5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XHJcblx0fSk7XHJcbn0pO1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG5cdC8vIGNhcm91c2VsXHJcblx0Y29uc3QgY2Fyb3VzZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2Fyb3VzZWwnKTtcclxuXHRjb25zdCBjYXJvdXNlbFVybCA9ICcuL2pzL2Nhcm91c2VsLmpzb24nO1xyXG5cdGNvbnN0IGxvY2FsQ2Fyb3VzZWxKU09OID0gcmVxdWlyZSgnLi9jYXJvdXNlbC5qc29uJyk7XHJcblxyXG5cdC8qIGZ1bmN0aW9uIGdldFNsaWRlc0RhdGEoKSB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRmZXRjaChjYXJvdXNlbFVybClcclxuXHRcdFx0XHQudGhlbigocmVzcCkgPT4gcmVzcC5qc29uKCkpXHJcblx0XHRcdFx0LnRoZW4oKGRhdGEpID0+IHJlc29sdmUoZGF0YSkpXHJcblx0XHRcdFx0LmNhdGNoKChlcnIpID0+IHJlamVjdChlcnIpKTtcclxuXHRcdH0pO1xyXG5cdH0gKi9cclxuXHJcblx0YXN5bmMgZnVuY3Rpb24gZGlzcGxheUNhcm91c2VsKCkge1xyXG5cdFx0LyogY29uc3QgZGF0YUxpc3QgPSBhd2FpdCBnZXRTbGlkZXNEYXRhKCk7ICovXHJcblx0XHRjb25zdCBzbGlkZXNBcnJheSA9IGxvY2FsQ2Fyb3VzZWxKU09OLnNsaWRlcztcclxuXHJcblx0XHRzbGlkZXNBcnJheS5mb3JFYWNoKChzbGlkZSwgc2xpZGVOdW1iZXIpID0+IHtcclxuXHRcdFx0Y29uc3QgeyB0aXRsZSwgdHlwZSwgY29udGVudCwgaW1hZ2UsIGltYWdlVGFiLCBpbWFnZU1vYiB9ID0gc2xpZGU7XHJcblxyXG5cdFx0XHRuZXdTbGlkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0XHRuZXdTbGlkZS5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9fc2xpZGUnKTtcclxuXHJcblx0XHRcdG5ld1NsaWRlLmlubmVySFRNTCA9IGBcclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcm91c2VsX19pbWFnZS1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0PHBpY3R1cmUgY2xhc3M9XCJjYXJvdXNlbF9faW1hZ2UtcGljdHVyZVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxzb3VyY2UgbWVkaWE9XCIobWF4LXdpZHRoOjU5OXB4KVwiIHNyY3NldD1cIiR7aW1hZ2VNb2J9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFx0PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6NjAwcHgpXCIgc3Jjc2V0PVwiJHtpbWFnZX1cIj5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiJHtcclxuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5pbm5lcldpZHRoID49IDYwMCA/IGltYWdlIDogaW1hZ2VNb2JcclxuXHRcdFx0XHRcdFx0XHR9XCIgbG9hZGluZz1cImxhenlcIiBhbHQ9XCIke3RpdGxlfVwiLz5cclxuXHRcdFx0XHRcdFx0PC9waWN0dXJlPlxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcm91c2VsX19jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0PGgxIGNsYXNzPVwiY2Fyb3VzZWxfX3RpdGxlXCI+JHt0aXRsZX08L2gxPlxyXG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzPVwiY2Fyb3VzZWxfX2Rlc2NcIj4ke2NvbnRlbnR9PC9wPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0YDtcclxuXHJcblx0XHRcdGNhcm91c2VsLmFwcGVuZENoaWxkKG5ld1NsaWRlKTtcclxuXHJcblx0XHRcdGlmIChzbGlkZU51bWJlciA9PT0gMCkge1xyXG5cdFx0XHRcdGZpcnN0U2xpZGUgPSBuZXdTbGlkZTtcclxuXHRcdFx0XHRuZXdTbGlkZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdFx0fSBlbHNlIGlmIChzbGlkZU51bWJlciArIDEgPT09IGxvY2FsQ2Fyb3VzZWxKU09OLnNsaWRlcy5sZW5ndGgpIHtcclxuXHRcdFx0XHRsYXN0U2xpZGUgPSBuZXdTbGlkZTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0bmV4dFNsaWRlKCk7XHJcblx0XHRwcmV2aW91c1NsaWRlKCk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBuZXh0U2xpZGUoKSB7XHJcblx0XHRjb25zdCBuZXh0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHQnKTtcclxuXHJcblx0XHRuZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHRcdFx0Y29uc3QgYWN0aXZlU2xpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX3NsaWRlLmFjdGl2ZScpO1xyXG5cclxuXHRcdFx0bGV0IG5leHRTaWJsaW5nID0gYWN0aXZlU2xpZGUubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG5cclxuXHRcdFx0aWYgKG5leHRTaWJsaW5nID09IG51bGwpIHtcclxuXHRcdFx0XHRuZXh0U2libGluZyA9IGFjdGl2ZVNsaWRlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAobmV4dFNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJvdXNlbF9fc2xpZGUnKSkge1xyXG5cdFx0XHRcdGFjdGl2ZVNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdG5leHRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHByZXZpb3VzU2xpZGUoKSB7XHJcblx0XHRjb25zdCBwcmV2QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXYnKTtcclxuXHJcblx0XHRwcmV2QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHRcdFx0Y29uc3QgYWN0aXZlU2xpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX3NsaWRlLmFjdGl2ZScpO1xyXG5cclxuXHRcdFx0bGV0IG5leHRTaWJsaW5nID0gYWN0aXZlU2xpZGUucHJldmlvdXNFbGVtZW50U2libGluZztcclxuXHJcblx0XHRcdGlmIChuZXh0U2libGluZyA9PSBudWxsKSB7XHJcblx0XHRcdFx0bmV4dFNpYmxpbmcgPSBhY3RpdmVTbGlkZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKG5leHRTaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucygnY2Fyb3VzZWxfX3NsaWRlJykpIHtcclxuXHRcdFx0XHRhY3RpdmVTbGlkZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdFx0XHRuZXh0U2libGluZy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRpZiAoY2Fyb3VzZWwgIT09IG51bGwpIHtcclxuXHRcdChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGRpc3BsYXlDYXJvdXNlbCgpO1xyXG5cdFx0fSkoKTtcclxuXHR9XHJcbn0pO1xyXG4iLCJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuXHQvLyB0YWJzXHJcblx0Y29uc3QgdGFiTGlzdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJjY29yZGlvbl9fbGlzdC1idG4nKTtcclxuXHRjb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYmNjb3JkaW9uX19jb250YWluZXInKTtcclxuXHRjb25zdCB0YWJjY29yZGlvbkxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiY2NvcmRpb24tbGlzdCcpO1xyXG5cdGNvbnN0IHRhYnNDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYmNjb3JkaW9uX190YWItaW5uZXInKTtcclxuXHRjb25zdCB0YWJjY29yZGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWJjY29yZGlvbicpO1xyXG5cclxuXHRmdW5jdGlvbiBhY3RpdmF0ZVRhYnMoKSB7XHJcblx0XHR0YWJMaXN0QnRuLmZvckVhY2goKHRhYikgPT4ge1xyXG5cdFx0XHR0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHRhYk5hdiA9IHRhYi5wYXJlbnRFbGVtZW50O1xyXG5cdFx0XHRcdGNvbnN0IHRhYnNDb250YWluZXIgPSB0YWJOYXYucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG5cdFx0XHRcdGNvbnN0IHRhYk51bWJlciA9IHRhYi5kYXRhc2V0LmZvclRhYjtcclxuXHRcdFx0XHRjb25zdCB0YWJUb0FjdGl2YXRlID0gdGFic0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHRcdFx0YC50YWJjY29yZGlvbl9fdGFiW2RhdGEtdGFiPVwiJHt0YWJOdW1iZXJ9XCJdYFxyXG5cdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdHRhYk5hdi5xdWVyeVNlbGVjdG9yQWxsKCcudGFiY2NvcmRpb25fX2xpc3QtYnRuJykuZm9yRWFjaCgoYnRuKSA9PiB7XHJcblx0XHRcdFx0XHRidG4uY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR0YWJzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJjY29yZGlvbl9fdGFiJykuZm9yRWFjaCgodGFiKSA9PiB7XHJcblx0XHRcdFx0XHR0YWIuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR0YWIuY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xyXG5cdFx0XHRcdHRhYlRvQWN0aXZhdGUuY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xyXG5cclxuXHRcdFx0XHRpZiAod2luZG93LmlubmVyV2lkdGggPj0gNjAwKSB7XHJcblx0XHRcdFx0XHR0YWJzQ29udGVudC5mb3JFYWNoKCh0YWJzKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRhYnMuc3R5bGUubWF4SGVpZ2h0ID0gdGFicy5zY3JvbGxIZWlnaHQgKyAncHgnO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGlmICh0YWJjY29yZGlvbkxpc3QpIHtcclxuXHRcdFx0dGFicy5mb3JFYWNoKCh0YWIpID0+IHtcclxuXHRcdFx0XHR0YWIucXVlcnlTZWxlY3RvcignLnRhYmNjb3JkaW9uX19saXN0IC50YWJjY29yZGlvbl9fYnRuJykuY2xpY2soKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLy8vLyBhY2NvcmRpb25cclxuXHRjb25zdCBhY2NvcmRpb25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uX19saXN0LWJ0bicpO1xyXG5cclxuXHRmdW5jdGlvbiBhY3RpdmF0ZUFjY29yZGlvbigpIHtcclxuXHRcdGFjY29yZGlvbkJ0bi5mb3JFYWNoKChidG4pID0+IHtcclxuXHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRcdC8vIGNoZWNrIGZvciBvcGVuIGFjY29yZGlvblxyXG5cdFx0XHRcdGNvbnN0IGFjY29yZGlvbkJ0bk9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHRcdFx0Jy5hY2NvcmRpb25fX2xpc3QtYnRuLm9wZW4nXHJcblx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0aWYgKGFjY29yZGlvbkJ0bk9wZW4gJiYgYWNjb3JkaW9uQnRuT3BlbiAhPT0gYnRuKSB7XHJcblx0XHRcdFx0XHQvLyBpZiB0aGVyZSBpcyBvcGVuIHRoZW4gcmVtb3ZlIG9wZW4gY2xhc3MgYW5kIHNldCBtYXhoZWlnaHQgdG8gMFxyXG5cdFx0XHRcdFx0YWNjb3JkaW9uQnRuT3Blbi5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XHJcblx0XHRcdFx0XHRhY2NvcmRpb25CdG5PcGVuLm5leHRFbGVtZW50U2libGluZy5zdHlsZS5tYXhIZWlnaHQgPSAwO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gc2V0IG9wZW4gY2xhc3MgdG8gZXZlcnkgY2xpY2tlZCBhY2NvcmRpb24gYnRuXHJcblx0XHRcdFx0YnRuLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcclxuXHRcdFx0XHRjb25zdCBhY2NvcmRpb25Cb2R5ID0gYnRuLm5leHRFbGVtZW50U2libGluZztcclxuXHJcblx0XHRcdFx0aWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKSkge1xyXG5cdFx0XHRcdFx0YWNjb3JkaW9uQm9keS5zdHlsZS5tYXhIZWlnaHQgPSBhY2NvcmRpb25Cb2R5LnNjcm9sbEhlaWdodCArICdweCc7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGFjY29yZGlvbkJvZHkuc3R5bGUubWF4SGVpZ2h0ID0gMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIChlKSA9PiB7XHJcblx0XHRcdGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDYwMCkge1xyXG5cdFx0XHRcdHRhYnNDb250ZW50LmZvckVhY2goKHRhYnMpID0+IHtcclxuXHRcdFx0XHRcdHRhYnMuc3R5bGUubWF4SGVpZ2h0ID0gMDtcclxuXHRcdFx0XHRcdGlmICh0YWJzLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuJykpIHtcclxuXHRcdFx0XHRcdFx0dGFicy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRpZiAodGFiY2NvcmRpb24pIHtcclxuXHRcdGFjdGl2YXRlVGFicygpO1xyXG5cdFx0YWN0aXZhdGVBY2NvcmRpb24oKTtcclxuXHR9XHJcbn0pO1xyXG4iXSwicHJlRXhpc3RpbmdDb21tZW50IjoiLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk4dmQyVmljR0ZqYXk5aWIyOTBjM1J5WVhBaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwycHpMMkZrYjNCMFEyOXVkR1Z1ZEZOM2FYUmphR1Z5TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDNOeVl5OXFjeTltWlhSamFFRnVhVzFoYkhORVlYUmhMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5cWN5OW1iM0p0Vm1Gc2FXUmhhWFJ2Ymk1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5emNtTXZhbk12YldGcGJpNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXpjbU12YW5NdmJXOWtZV3d1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwycHpMMjVoZGk1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5emNtTXZhbk12YzJ4cFpHVnlMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5cWN5OTBZV0pqWTI5eVpHbHZiaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzFGQlFVRTdVVUZEUVRzN1VVRkZRVHRSUVVOQk96dFJRVVZCTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CT3p0UlFVVkJPMUZCUTBFN08xRkJSVUU3VVVGRFFUczdVVUZGUVR0UlFVTkJPMUZCUTBFN096dFJRVWRCTzFGQlEwRTdPMUZCUlVFN1VVRkRRVHM3VVVGRlFUdFJRVU5CTzFGQlEwRTdVVUZEUVN3d1EwRkJNRU1zWjBOQlFXZERPMUZCUXpGRk8xRkJRMEU3TzFGQlJVRTdVVUZEUVR0UlFVTkJPMUZCUTBFc2QwUkJRWGRFTEd0Q1FVRnJRanRSUVVNeFJUdFJRVU5CTEdsRVFVRnBSQ3hqUVVGak8xRkJReTlFT3p0UlFVVkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRU3g1UTBGQmVVTXNhVU5CUVdsRE8xRkJRekZGTEdkSVFVRm5TQ3h0UWtGQmJVSXNSVUZCUlR0UlFVTnlTVHRSUVVOQk96dFJRVVZCTzFGQlEwRTdVVUZEUVR0UlFVTkJMREpDUVVFeVFpd3dRa0ZCTUVJc1JVRkJSVHRSUVVOMlJDeHBRMEZCYVVNc1pVRkJaVHRSUVVOb1JEdFJRVU5CTzFGQlEwRTdPMUZCUlVFN1VVRkRRU3h6UkVGQmMwUXNLMFJCUVN0RU96dFJRVVZ5U0R0UlFVTkJPenM3VVVGSFFUdFJRVU5CT3pzN096czdPenM3T3pzN1FVTnNSa0U3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTEVkQlFVYzdRVUZEU0N4RlFVRkZPenRCUVVWR08wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQkxEaEVRVUU0UkN4UFFVRlBPMEZCUTNKRk8wRkJRMEVzWjBOQlFXZERMRTlCUVU4N1FVRkRka003UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4RFFVRkRPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkRha05FTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUVzTUVKQlFUQkNMRzFDUVVGUExFTkJRVU1zTmtOQlFXZENPenRCUVVWc1JEdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3hIUVVGSE96dEJRVVZJTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3cyUTBGQk5rTTdPMEZCUlRkRE96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHM3UVVGRlFUdEJRVU5CTERaRFFVRTJRenRCUVVNM1F6czdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1MwRkJTenM3UVVGRlREdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeDVRMEZCZVVNc1RVRkJUU3hUUVVGVExFdEJRVXNzUjBGQlJ5eFJRVUZSTEVWQlFVVTdRVUZETVVVN1FVRkRRVHRCUVVOQkxEQkVRVUV3UkN4TFFVRkxPMEZCUXk5RU8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRXNPRVZCUVRoRkxGRkJRVkVzUlVGQlJTeFBRVUZQTzBGQlF5OUdPMEZCUTBFc01FTkJRVEJETzBGQlF6RkRPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMR2RGUVVGblJTeFJRVUZSTEVWQlFVVXNUMEZCVHp0QlFVTnFSanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzTUVWQlFUQkZMRTlCUVU4N1FVRkRha1k3UVVGRFFUdEJRVU5CTzBGQlEwRXNNRVZCUVRCRkxFOUJRVTg3UVVGRGFrWTdRVUZEUVR0QlFVTkJPMEZCUTBFc01FVkJRVEJGTEUxQlFVMDdRVUZEYUVZN1FVRkRRVHRCUVVOQk8wRkJRMEVzSzBOQlFTdERMREJDUVVFd1FqdEJRVU42UlR0QlFVTkJPMEZCUTBFN1FVRkRRU3dyUTBGQkswTXNNRUpCUVRCQ08wRkJRM3BGTzBGQlEwRTdRVUZEUVR0QlFVTkJMQ3REUVVFclF5d3dRa0ZCTUVJN1FVRkRla1U3UVVGRFFUdEJRVU5CTzBGQlEwRXNNRVZCUVRCRkxFdEJRVXM3UVVGREwwVTdRVUZEUVR0QlFVTkJPMEZCUTBFc01FVkJRVEJGTEU5QlFVODdRVUZEYWtZN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVN4SlFVRkpPenRCUVVWS08wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeDVRMEZCZVVNc1ZVRkJWU3hUUVVGVExGTkJRVk03UVVGRGNrVTdRVUZEUVN4TFFVRkxMRVZCUVVVN1FVRkRVRHRCUVVOQk8wRkJRMEVzTUVSQlFUQkVMRk5CUVZNN1FVRkRia1U3UVVGRFFUdEJRVU5CTzBGQlEwRXNhVUpCUVdsQ0xFVkJRVVVzVjBGQlZ6dEJRVU01UWp0QlFVTkJMREJEUVVFd1F6dEJRVU14UXp0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4blJVRkJaMFVzV1VGQldUdEJRVU0xUlR0QlFVTkJMRXRCUVVzN1FVRkRURHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEcxQ1FVRnRRanRCUVVOdVFqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2JVSkJRVzFDTzBGQlEyNUNPMEZCUTBFN1FVRkRRVHRCUVVOQkxEQkZRVUV3UlN4VFFVRlRPMEZCUTI1R08wRkJRMEU3UVVGRFFUdEJRVU5CTEN0RFFVRXJReXhyUTBGQmEwTTdRVUZEYWtZN1FVRkRRVHRCUVVOQk8wRkJRMEVzSzBOQlFTdERMR3REUVVGclF6dEJRVU5xUmp0QlFVTkJPMEZCUTBFN1FVRkRRU3dyUTBGQkswTXNhME5CUVd0RE8wRkJRMnBHTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3h0UWtGQmJVSTdRVUZEYmtJN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEcxQ1FVRnRRanRCUVVOdVFqdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQkxFbEJRVWs3UVVGRFNpeEhRVUZIT3p0QlFVVklPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRU3hKUVVGSk8wRkJRMG83TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFTeHJRa0ZCYTBJc2JVSkJRVzFDTzBGQlEzSkRPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNTVUZCU1RzN1FVRkZTanRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hKUVVGSk96dEJRVVZLTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFMUJRVTA3UVVGRFRqdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNUVUZCVFR0QlFVTk9PMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeE5RVUZOTzBGQlEwNDdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRTFCUVUwN1FVRkRUanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVsQlFVazdPMEZCUlVvN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFbEJRVWs3UVVGRFNqdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFbEJRVWs3UVVGRFNqdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4SlFVRkpPMEZCUTBvN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hKUVVGSk8wRkJRMG83UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFTeERRVUZET3pzN096czdPenM3T3pzN1FVTnliVUpFTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hOUVVGTk8wRkJRMDQ3UVVGRFFUdEJRVU5CTEV0QlFVczdRVUZEVER0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hKUVVGSk8wRkJRMG83UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc1NVRkJTVHRCUVVOS08wRkJRMEVzU1VGQlNUdEJRVU5LTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxFbEJRVWs3UVVGRFNqdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNTVUZCU1R0QlFVTktPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzYVVOQlFXbERMSGxDUVVGNVFpdzJRa0ZCTmtJc1NVRkJTU3hSUVVGUkxFbEJRVWtzVVVGQlVTeEpRVUZKTEZGQlFWRXNTVUZCU1N4blEwRkJaME1zUjBGQlJ6dEJRVU5zU3p0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVOQlFVTTdPenM3T3pzN096czdPenRCUTNaR1JEdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3hGUVVGRk96dEJRVVZHTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNDeEZRVUZGT3p0QlFVVkdPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFVkJRVVU3UVVGRFJpeERRVUZET3pzN096czdPenM3T3pzN1FVTm9SRVE3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUlVGQlJUczdRVUZGUmp0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRU5CUVVNN096czdPenM3T3pzN096dEJRMjVDUkR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHRCUVVOQk8wRkJRMEU3UVVGRFFTeEZRVUZGT3p0QlFVVkdPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUlVGQlJUdEJRVU5HTEVOQlFVTTdPenM3T3pzN096czdPenRCUTNCQ1JEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMREpDUVVFeVFpeHRRa0ZCVHl4RFFVRkRMQ3REUVVGcFFqczdRVUZGY0VRN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklMRVZCUVVVN08wRkJSVVk3UVVGRFFTdzBRMEZCTkVNN1FVRkROVU03TzBGQlJVRTdRVUZEUVN4VlFVRlZMR3RFUVVGclJEczdRVUZGTlVRN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4dFJFRkJiVVFzVTBGQlV6dEJRVU0xUkN4eFJVRkJjVVVzVFVGQlRUdEJRVU16UlR0QlFVTkJPMEZCUTBFc1VVRkJVU3gzUWtGQmQwSXNUVUZCVFR0QlFVTjBRenM3UVVGRlFUdEJRVU5CTzBGQlEwRXNjVU5CUVhGRExFMUJRVTA3UVVGRE0wTXNiVU5CUVcxRExGRkJRVkU3UVVGRE0wTTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SlFVRkpPMEZCUTBvN1FVRkRRVHRCUVVOQkxFZEJRVWM3TzBGQlJVZzdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFTeERRVUZET3pzN096czdPenM3T3pzN1FVTnVSMFE3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3h2UTBGQmIwTXNWVUZCVlR0QlFVTTVRenM3UVVGRlFUdEJRVU5CTzBGQlEwRXNTMEZCU3pzN1FVRkZURHRCUVVOQk8wRkJRMEVzUzBGQlN6czdRVUZGVER0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEUxQlFVMDdRVUZEVGp0QlFVTkJMRWxCUVVrN1FVRkRTaXhIUVVGSE96dEJRVVZJTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWxCUVVrN1FVRkRTanRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEV0QlFVczdRVUZEVER0QlFVTkJPMEZCUTBFc1NVRkJTVHRCUVVOS0xFZEJRVWM3TzBGQlJVZzdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeExRVUZMTzBGQlEwdzdRVUZEUVN4SFFVRkhPMEZCUTBnN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4RFFVRkRJaXdpWm1sc1pTSTZJamhoTURNNFpEaGtZVGsxWW1WaE9UVmxaR0UyTG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lJRngwTHk4Z1ZHaGxJRzF2WkhWc1pTQmpZV05vWlZ4dUlGeDBkbUZ5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE1nUFNCN2ZUdGNibHh1SUZ4MEx5OGdWR2hsSUhKbGNYVnBjbVVnWm5WdVkzUnBiMjVjYmlCY2RHWjFibU4wYVc5dUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOG9iVzlrZFd4bFNXUXBJSHRjYmx4dUlGeDBYSFF2THlCRGFHVmpheUJwWmlCdGIyUjFiR1VnYVhNZ2FXNGdZMkZqYUdWY2JpQmNkRngwYVdZb2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwcElIdGNiaUJjZEZ4MFhIUnlaWFIxY200Z2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwdVpYaHdiM0owY3p0Y2JpQmNkRngwZlZ4dUlGeDBYSFF2THlCRGNtVmhkR1VnWVNCdVpYY2diVzlrZFd4bElDaGhibVFnY0hWMElHbDBJR2x1ZEc4Z2RHaGxJR05oWTJobEtWeHVJRngwWEhSMllYSWdiVzlrZFd4bElEMGdhVzV6ZEdGc2JHVmtUVzlrZFd4bGMxdHRiMlIxYkdWSlpGMGdQU0I3WEc0Z1hIUmNkRngwYVRvZ2JXOWtkV3hsU1dRc1hHNGdYSFJjZEZ4MGJEb2dabUZzYzJVc1hHNGdYSFJjZEZ4MFpYaHdiM0owY3pvZ2UzMWNiaUJjZEZ4MGZUdGNibHh1SUZ4MFhIUXZMeUJGZUdWamRYUmxJSFJvWlNCdGIyUjFiR1VnWm5WdVkzUnBiMjVjYmlCY2RGeDBiVzlrZFd4bGMxdHRiMlIxYkdWSlpGMHVZMkZzYkNodGIyUjFiR1V1Wlhod2IzSjBjeXdnYlc5a2RXeGxMQ0J0YjJSMWJHVXVaWGh3YjNKMGN5d2dYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWs3WEc1Y2JpQmNkRngwTHk4Z1JteGhaeUIwYUdVZ2JXOWtkV3hsSUdGeklHeHZZV1JsWkZ4dUlGeDBYSFJ0YjJSMWJHVXViQ0E5SUhSeWRXVTdYRzVjYmlCY2RGeDBMeThnVW1WMGRYSnVJSFJvWlNCbGVIQnZjblJ6SUc5bUlIUm9aU0J0YjJSMWJHVmNiaUJjZEZ4MGNtVjBkWEp1SUcxdlpIVnNaUzVsZUhCdmNuUnpPMXh1SUZ4MGZWeHVYRzVjYmlCY2RDOHZJR1Y0Y0c5elpTQjBhR1VnYlc5a2RXeGxjeUJ2WW1wbFkzUWdLRjlmZDJWaWNHRmphMTl0YjJSMWJHVnpYMThwWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbTBnUFNCdGIyUjFiR1Z6TzF4dVhHNGdYSFF2THlCbGVIQnZjMlVnZEdobElHMXZaSFZzWlNCallXTm9aVnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWpJRDBnYVc1emRHRnNiR1ZrVFc5a2RXeGxjenRjYmx4dUlGeDBMeThnWkdWbWFXNWxJR2RsZEhSbGNpQm1kVzVqZEdsdmJpQm1iM0lnYUdGeWJXOXVlU0JsZUhCdmNuUnpYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtUWdQU0JtZFc1amRHbHZiaWhsZUhCdmNuUnpMQ0J1WVcxbExDQm5aWFIwWlhJcElIdGNiaUJjZEZ4MGFXWW9JVjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YnlobGVIQnZjblJ6TENCdVlXMWxLU2tnZTF4dUlGeDBYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQnVZVzFsTENCN0lHVnVkVzFsY21GaWJHVTZJSFJ5ZFdVc0lHZGxkRG9nWjJWMGRHVnlJSDBwTzF4dUlGeDBYSFI5WEc0Z1hIUjlPMXh1WEc0Z1hIUXZMeUJrWldacGJtVWdYMTlsYzAxdlpIVnNaU0J2YmlCbGVIQnZjblJ6WEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbklnUFNCbWRXNWpkR2x2YmlobGVIQnZjblJ6S1NCN1hHNGdYSFJjZEdsbUtIUjVjR1Z2WmlCVGVXMWliMndnSVQwOUlDZDFibVJsWm1sdVpXUW5JQ1ltSUZONWJXSnZiQzUwYjFOMGNtbHVaMVJoWnlrZ2UxeHVJRngwWEhSY2RFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hsZUhCdmNuUnpMQ0JUZVcxaWIyd3VkRzlUZEhKcGJtZFVZV2NzSUhzZ2RtRnNkV1U2SUNkTmIyUjFiR1VuSUgwcE8xeHVJRngwWEhSOVhHNGdYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQW5YMTlsYzAxdlpIVnNaU2NzSUhzZ2RtRnNkV1U2SUhSeWRXVWdmU2s3WEc0Z1hIUjlPMXh1WEc0Z1hIUXZMeUJqY21WaGRHVWdZU0JtWVd0bElHNWhiV1Z6Y0dGalpTQnZZbXBsWTNSY2JpQmNkQzh2SUcxdlpHVWdKaUF4T2lCMllXeDFaU0JwY3lCaElHMXZaSFZzWlNCcFpDd2djbVZ4ZFdseVpTQnBkRnh1SUZ4MEx5OGdiVzlrWlNBbUlESTZJRzFsY21kbElHRnNiQ0J3Y205d1pYSjBhV1Z6SUc5bUlIWmhiSFZsSUdsdWRHOGdkR2hsSUc1elhHNGdYSFF2THlCdGIyUmxJQ1lnTkRvZ2NtVjBkWEp1SUhaaGJIVmxJSGRvWlc0Z1lXeHlaV0ZrZVNCdWN5QnZZbXBsWTNSY2JpQmNkQzh2SUcxdlpHVWdKaUE0ZkRFNklHSmxhR0YyWlNCc2FXdGxJSEpsY1hWcGNtVmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWRDQTlJR1oxYm1OMGFXOXVLSFpoYkhWbExDQnRiMlJsS1NCN1hHNGdYSFJjZEdsbUtHMXZaR1VnSmlBeEtTQjJZV3gxWlNBOUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOG9kbUZzZFdVcE8xeHVJRngwWEhScFppaHRiMlJsSUNZZ09Da2djbVYwZFhKdUlIWmhiSFZsTzF4dUlGeDBYSFJwWmlnb2JXOWtaU0FtSURRcElDWW1JSFI1Y0dWdlppQjJZV3gxWlNBOVBUMGdKMjlpYW1WamRDY2dKaVlnZG1Gc2RXVWdKaVlnZG1Gc2RXVXVYMTlsYzAxdlpIVnNaU2tnY21WMGRYSnVJSFpoYkhWbE8xeHVJRngwWEhSMllYSWdibk1nUFNCUFltcGxZM1F1WTNKbFlYUmxLRzUxYkd3cE8xeHVJRngwWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuSW9ibk1wTzF4dUlGeDBYSFJQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb2JuTXNJQ2RrWldaaGRXeDBKeXdnZXlCbGJuVnRaWEpoWW14bE9pQjBjblZsTENCMllXeDFaVG9nZG1Gc2RXVWdmU2s3WEc0Z1hIUmNkR2xtS0cxdlpHVWdKaUF5SUNZbUlIUjVjR1Z2WmlCMllXeDFaU0FoUFNBbmMzUnlhVzVuSnlrZ1ptOXlLSFpoY2lCclpYa2dhVzRnZG1Gc2RXVXBJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WkNodWN5d2dhMlY1TENCbWRXNWpkR2x2YmloclpYa3BJSHNnY21WMGRYSnVJSFpoYkhWbFcydGxlVjA3SUgwdVltbHVaQ2h1ZFd4c0xDQnJaWGtwS1R0Y2JpQmNkRngwY21WMGRYSnVJRzV6TzF4dUlGeDBmVHRjYmx4dUlGeDBMeThnWjJWMFJHVm1ZWFZzZEVWNGNHOXlkQ0JtZFc1amRHbHZiaUJtYjNJZ1kyOXRjR0YwYVdKcGJHbDBlU0IzYVhSb0lHNXZiaTFvWVhKdGIyNTVJRzF2WkhWc1pYTmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJpQTlJR1oxYm1OMGFXOXVLRzF2WkhWc1pTa2dlMXh1SUZ4MFhIUjJZWElnWjJWMGRHVnlJRDBnYlc5a2RXeGxJQ1ltSUcxdlpIVnNaUzVmWDJWelRXOWtkV3hsSUQ5Y2JpQmNkRngwWEhSbWRXNWpkR2x2YmlCblpYUkVaV1poZFd4MEtDa2dleUJ5WlhSMWNtNGdiVzlrZFd4bFd5ZGtaV1poZFd4MEoxMDdJSDBnT2x4dUlGeDBYSFJjZEdaMWJtTjBhVzl1SUdkbGRFMXZaSFZzWlVWNGNHOXlkSE1vS1NCN0lISmxkSFZ5YmlCdGIyUjFiR1U3SUgwN1hHNGdYSFJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpDaG5aWFIwWlhJc0lDZGhKeXdnWjJWMGRHVnlLVHRjYmlCY2RGeDBjbVYwZFhKdUlHZGxkSFJsY2p0Y2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUU5aWFtVmpkQzV3Y205MGIzUjVjR1V1YUdGelQzZHVVSEp2Y0dWeWRIa3VZMkZzYkZ4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV2SUQwZ1puVnVZM1JwYjI0b2IySnFaV04wTENCd2NtOXdaWEowZVNrZ2V5QnlaWFIxY200Z1QySnFaV04wTG5CeWIzUnZkSGx3WlM1b1lYTlBkMjVRY205d1pYSjBlUzVqWVd4c0tHOWlhbVZqZEN3Z2NISnZjR1Z5ZEhrcE95QjlPMXh1WEc0Z1hIUXZMeUJmWDNkbFluQmhZMnRmY0hWaWJHbGpYM0JoZEdoZlgxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1d0lEMGdYQ0pjSWp0Y2JseHVYRzRnWEhRdkx5Qk1iMkZrSUdWdWRISjVJRzF2WkhWc1pTQmhibVFnY21WMGRYSnVJR1Y0Y0c5eWRITmNiaUJjZEhKbGRIVnliaUJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS0Y5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWN5QTlJREFwTzF4dUlpd2laRzlqZFcxbGJuUXVZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25SRTlOUTI5dWRHVnVkRXh2WVdSbFpDY3NJR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVYSFJvYVhOMGIzSjVMbkpsY0d4aFkyVlRkR0YwWlNodWRXeHNMQ0J1ZFd4c0xDQW5JQ2NwTzF4eVhHNWNkR052Ym5OMElIUmhZbE4zYVhSamFHVnljeUE5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSkJiR3dvSjF0a1lYUmhMWE4zYVhSamFHVnlYU2NwTzF4eVhHNWNjbHh1WEhSMFlXSlRkMmwwWTJobGNuTXVabTl5UldGamFDZ29kR0ZpVTNkcGRHTm9LU0E5UGlCN1hISmNibHgwWEhSamIyNXpkQ0IwWVdKVGQybDBZMmhsY2lBOUlIUmhZbE4zYVhSamFEdGNjbHh1WEhSY2RHTnZibk4wSUhCaFoyVkpaQ0E5SUhSaFlsTjNhWFJqYUdWeUxtUmhkR0Z6WlhRdWRHRmlPMXh5WEc1Y2NseHVYSFJjZEhSaFlsTjNhWFJqYUdWeUxtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0oyTnNhV05ySnl3Z0tHVXBJRDArSUh0Y2NseHVYSFJjZEZ4MFpHOWpkVzFsYm5SY2NseHVYSFJjZEZ4MFhIUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkxtRmtiM0IwWDE5c2FYTjBMV2wwWlcwdVlXTjBhWFpsSnlsY2NseHVYSFJjZEZ4MFhIUXVZMnhoYzNOTWFYTjBMbkpsYlc5MlpTZ25ZV04wYVhabEp5azdYSEpjYmx4eVhHNWNkRngwWEhSMFlXSlRkMmwwWTJobGNpNXdZWEpsYm5SRmJHVnRaVzUwTG5CaGNtVnVkRVZzWlcxbGJuUXVZMnhoYzNOTWFYTjBMbUZrWkNnbllXTjBhWFpsSnlrN1hISmNibHh5WEc1Y2RGeDBYSFJ6ZDJsMFkyaFFZV2RsS0hCaFoyVkpaQ2s3WEhKY2JseDBYSFI5S1R0Y2NseHVYSFI5S1R0Y2NseHVYSEpjYmx4MFpuVnVZM1JwYjI0Z2MzZHBkR05vVUdGblpTaHdZV2RsU1dRcElIdGNjbHh1WEhSY2RHTnZibk4wSUdOMWNuSmxiblJRWVdkbElEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkxuQmhaMlV1WVdOMGFYWmxKeWs3WEhKY2JseDBYSFJqYjI1emRDQmpkWEp5Wlc1MFVHRm5aVWhsWVdSbGNpQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5NXdZV2RsTFdobFlXUmxjaTVoWTNScGRtVW5LVHRjY2x4dVhISmNibHgwWEhSamRYSnlaVzUwVUdGblpTNWpiR0Z6YzB4cGMzUXVjbVZ0YjNabEtDZGhZM1JwZG1VbktUdGNjbHh1WEhSY2RHTjFjbkpsYm5SUVlXZGxTR1ZoWkdWeUxtTnNZWE56VEdsemRDNXlaVzF2ZG1Vb0oyRmpkR2wyWlNjcE8xeHlYRzVjY2x4dVhIUmNkR052Ym5OMElHNWxlSFJRWVdkbElEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2loZ0xuQmhaMlZiWkdGMFlTMXdZV2RsUFZ3aUpIdHdZV2RsU1dSOVhDSmRZQ2s3WEhKY2JseDBYSFJqYjI1emRDQnVaWGgwVUdGblpVaGxZV1JsY2lBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvWEhKY2JseDBYSFJjZEdBdWNHRm5aUzFvWldGa1pYSmJaR0YwWVMxb1pXRmtaWEk5WENJa2UzQmhaMlZKWkgxY0lsMWdYSEpjYmx4MFhIUXBPMXh5WEc1Y2RGeDBibVY0ZEZCaFoyVXVZMnhoYzNOTWFYTjBMbUZrWkNnbllXTjBhWFpsSnlrN1hISmNibHgwWEhSdVpYaDBVR0ZuWlVobFlXUmxjaTVqYkdGemMweHBjM1F1WVdSa0tDZGhZM1JwZG1VbktUdGNjbHh1WEhSOVhISmNibjBwTzF4eVhHNGlMQ0prYjJOMWJXVnVkQzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RFVDAxRGIyNTBaVzUwVEc5aFpHVmtKeXdnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjZEdOdmJuTjBJR0Z1YVcxaGJITlZjbXdnUFNBbkxpNHZhbk12WVc1cGJXRnNjeTVxYzI5dUp6dGNjbHh1WEhSamIyNXpkQ0JoYm1sdFlXeHpVR0ZuWlhNZ1BTQmtiMk4xYldWdWRDNW5aWFJGYkdWdFpXNTBRbmxKWkNnbllXNXBiV0ZzY3kxd1lXZGxjeWNwTzF4eVhHNWNkR052Ym5OMElHUnZaM05DYjNnZ1BTQmtiMk4xYldWdWRDNW5aWFJGYkdWdFpXNTBRbmxKWkNnblpHOW5jeTFpYjNnbktUdGNjbHh1WEhSamIyNXpkQ0JqWVhSelFtOTRJRDBnWkc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEVKNVNXUW9KMk5oZEhNdFltOTRKeWs3WEhKY2JseHlYRzVjZEdOdmJuTjBJR3h2WTJGc1FXNXBiV0ZzYzBwVFQwNGdQU0J5WlhGMWFYSmxLQ2N1TDJGdWFXMWhiSE11YW5OdmJpY3BPMXh5WEc1Y2NseHVYSFF2S2lCamIyNXpkQ0JuWlhSQmJtbHRZV3h6UkdGMFlTQTlJR0Z6ZVc1aklDZ3BJRDArSUh0Y2NseHVYSFJjZEdOdmJuTjBJSEpsYzNCdmJuTmxJRDBnWVhkaGFYUWdabVYwWTJnb1lXNXBiV0ZzYzFWeWJDazdYSEpjYmx4MFhIUmpiMjV6ZENCa1lYUmhJRDBnWVhkaGFYUWdjbVZ6Y0c5dWMyVXVhbk52YmlncE8xeHlYRzVjY2x4dVhIUmNkSEpsZEhWeWJpQmtZWFJoTzF4eVhHNWNkSDA3SUNvdlhISmNibHh5WEc1Y2RHTnZibk4wSUdSdlowNTFiV0psY2lBOUlHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0Nka2IyZE9kVzFpWlhJbktUdGNjbHh1WEhSamIyNXpkQ0JqWVhST2RXMWlaWElnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2duWTJGMFRuVnRZbVZ5SnlrN1hISmNibHh5WEc1Y2RHRnplVzVqSUdaMWJtTjBhVzl1SUdScGMzQnNZWGxCYm1sdFlXeE9kVzFpWlhKektDa2dlMXh5WEc1Y2RGeDBMeW9nWTI5dWMzUWdaR0YwWVV4cGMzUWdQU0JoZDJGcGRDQm5aWFJCYm1sdFlXeHpSR0YwWVNncE95QXFMMXh5WEc1Y2NseHVYSFJjZEdOdmJuTjBJR0Z1YVcxaGJITkJjbkpoZVNBOUlHeHZZMkZzUVc1cGJXRnNjMHBUVDA0dVlXNXBiV0ZzY3p0Y2NseHVYSEpjYmx4MFhIUnNaWFFnWkc5bmMwRnljbUY1VG5WdFltVnlJRDBnWVc1cGJXRnNjMEZ5Y21GNVd6QmRMbVJ2WjNNdWJHVnVaM1JvTzF4eVhHNWNkRngwYkdWMElHTmhkSE5CY25KaGVVNTFiV0psY2lBOUlHRnVhVzFoYkhOQmNuSmhlVnN3WFM1allYUnpMbXhsYm1kMGFEdGNjbHh1WEhKY2JseDBYSFJrYjJkT2RXMWlaWEl1YVc1dVpYSlVaWGgwSUQwZ1pHOW5jMEZ5Y21GNVRuVnRZbVZ5TzF4eVhHNWNkRngwWTJGMFRuVnRZbVZ5TG1sdWJtVnlWR1Y0ZENBOUlHTmhkSE5CY25KaGVVNTFiV0psY2p0Y2NseHVYSFI5WEhKY2JseHlYRzVjZEdsbUlDZ29aRzluVG5WdFltVnlMQ0JqWVhST2RXMWlaWElwS1NCN1hISmNibHgwWEhRb1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc1Y2RGeDBYSFJrYVhOd2JHRjVRVzVwYldGc1RuVnRZbVZ5Y3lncE8xeHlYRzVjZEZ4MGZTa29LVHRjY2x4dVhIUjlYSEpjYmx4eVhHNWNkR0Z6ZVc1aklHWjFibU4wYVc5dUlHUnBjM0JzWVhsQmJtbHRZV3h6S0NrZ2UxeHlYRzVjZEZ4MEx5b2dZMjl1YzNRZ1pHRjBZVXhwYzNRZ1BTQmhkMkZwZENCblpYUkJibWx0WVd4elJHRjBZU2dwT3lBcUwxeHlYRzVjZEZ4MFkyOXVjM1FnWVc1cGJXRnNjMEZ5Y21GNUlEMGdiRzlqWVd4QmJtbHRZV3h6U2xOUFRpNWhibWx0WVd4ek8xeHlYRzVjY2x4dVhIUmNkR0Z1YVcxaGJITkJjbkpoZVM1bWIzSkZZV05vS0NoaGJtbHRZV3dwSUQwK0lIdGNjbHh1WEhSY2RGeDBaRzluYzBGeWNtRjVJRDBnWVc1cGJXRnNMbVJ2WjNNN1hISmNibHgwWEhSY2RHTmhkSE5CY25KaGVTQTlJR0Z1YVcxaGJDNWpZWFJ6TzF4eVhHNWNjbHh1WEhSY2RGeDBaRzluYzBGeWNtRjVMbVp2Y2tWaFkyZ29LR1J2WnlrZ1BUNGdlMXh5WEc1Y2RGeDBYSFJjZEdOdmJuTjBJSHRjY2x4dVhIUmNkRngwWEhSY2RHNTFiV0psY2l4Y2NseHVYSFJjZEZ4MFhIUmNkSE53WldOcFpYTXNYSEpjYmx4MFhIUmNkRngwWEhSaWNtVmxaQ3hjY2x4dVhIUmNkRngwWEhSY2RHTnZiRzl5TEZ4eVhHNWNkRngwWEhSY2RGeDBkMlZwWjJoMExGeHlYRzVjZEZ4MFhIUmNkRngwYUdWcFoyaDBMRnh5WEc1Y2RGeDBYSFJjZEZ4MFkyOWhkQ3hjY2x4dVhIUmNkRngwWEhSY2RHSnBjblJvTEZ4eVhHNWNkRngwWEhSY2RGeDBibUZ0WlN4Y2NseHVYSFJjZEZ4MFhIUmNkR2RsYm1SbGNpeGNjbHh1WEhSY2RGeDBYSFJjZEdsdFlXZGxMRnh5WEc1Y2RGeDBYSFJjZEZ4MFpHVnpZeXhjY2x4dVhIUmNkRngwWEhSY2RHRmtiM0IwWldRc1hISmNibHgwWEhSY2RGeDBmU0E5SUdSdlp6dGNjbHh1WEhKY2JseDBYSFJjZEZ4MFpHOW5RbTk0SUQwZ1pHOWpkVzFsYm5RdVkzSmxZWFJsUld4bGJXVnVkQ2duWkdsMkp5azdYSEpjYmx4MFhIUmNkRngwWkc5blFtOTRMbU5zWVhOelRHbHpkQzVoWkdRb0ozQmhaMlZmWDJKdmVDY3BPMXh5WEc1Y2RGeDBYSFJjZEdGa2IzQjBaV1FnUFQwOUlDZDVaWE1uSUQ4Z1pHOW5RbTk0TG1Oc1lYTnpUR2x6ZEM1aFpHUW9KMkZrYjNCMFpXUW5LU0E2SUNjbk8xeHlYRzVjY2x4dVhIUmNkRngwWEhSamIyNXpkQ0JrYjJkWlpXRnljeUE5SUdKcGNuUm9PMXh5WEc1Y2NseHVYSFJjZEZ4MFhIUmpiMjV6ZENCdGFXeHBjMlZqYzBKbGRIZGxaVzVFVDBKaGJtUXhPVGN3SUQwZ1JHRjBaUzV3WVhKelpTaGtiMmRaWldGeWN5azdYSEpjYmx4MFhIUmNkRngwWTI5dWMzUWdiV2xzYVhObFkzTkNaWFIzWldWdVRrOVhZVzVrTVRrM01DQTlJRVJoZEdVdWJtOTNLQ2s3WEhKY2JseDBYSFJjZEZ4MFkyOXVjM1FnWVdkbFNXNU5hV3hwYzJWamN5QTlYSEpjYmx4MFhIUmNkRngwWEhSdGFXeHBjMlZqYzBKbGRIZGxaVzVPVDFkaGJtUXhPVGN3SUMwZ2JXbHNhWE5sWTNOQ1pYUjNaV1Z1UkU5Q1lXNWtNVGszTUR0Y2NseHVYSEpjYmx4MFhIUmNkRngwWTI5dWMzUWdiV2xzYVhObFkzTWdQU0JoWjJWSmJrMXBiR2x6WldOek8xeHlYRzVjZEZ4MFhIUmNkR052Ym5OMElITmxZM01nUFNBeE1EQXdPMXh5WEc1Y2RGeDBYSFJjZEdOdmJuTjBJRzFwYm5NZ1BTQnpaV056SUNvZ05qQTdYSEpjYmx4MFhIUmNkRngwWTI5dWMzUWdhRzkxY2lBOUlHMXBibk1nS2lBMk1EdGNjbHh1WEhSY2RGeDBYSFJqYjI1emRDQmtZWGtnUFNCb2IzVnlJQ29nTWpRN1hISmNibHgwWEhSY2RGeDBZMjl1YzNRZ2VXVmhjaUE5SUdSaGVTQXFJRE0yTlR0Y2NseHVYSEpjYmx4MFhIUmNkRngwYkdWMElIbGxZWEp6SUQwZ1RXRjBhQzV5YjNWdVpDaHRhV3hwYzJWamN5QXZJSGxsWVhJcE8xeHlYRzVjY2x4dVhIUmNkRngwWEhSa2IyZENiM2d1YVc1dVpYSklWRTFNSUQwZ1lGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThaR2wySUdOc1lYTnpQVndpY0dGblpWOWZZbTk0TFhSdmNGd2lQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHbHRaeUJ6Y21NOVhDSXVKSHRwYldGblpYMWNJaUJoYkhROVhDSWtlMjVoYldWOUlDUjdjM0JsWTJsbGMzMWNJbjB2UGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOEwyUnBkajVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdScGRpQmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMWliM1IwYjIxY0lqNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4b015QmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMTBhWFJzWlZ3aVBpUjdibUZ0Wlgwa2UxeHlYRzVjZEZ4MFhIUmNkRngwWVdSdmNIUmxaQ0E5UFQwZ0ozbGxjeWNnUHlCZ0lDMGdQSE53WVc0K1lXUnZjSFJsWkR3dmMzQmhiajVnSURvZ0p5ZGNjbHh1WEhSY2RGeDBYSFI5UEM5b016NWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4a2FYWWdZMnhoYzNNOVhDSndZV2RsWDE5aWIzZ3RZMjl1ZEdWdWRGd2lQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhrYVhZZ1kyeGhjM005WENKbGVIQmhibVJOYjNKbFEyOXVkR1Z1ZEZ3aUlHbGtQVndpYzJodmQwMXZjbVV0Skh0emNHVmphV1Z6ZlNSN2JuVnRZbVZ5ZlZ3aVBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4Y0NCamJHRnpjejFjSW5CaFoyVmZYMkp2ZUMxMFpYaDBYQ0krWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FrZTJSbGMyTjlYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dmNENWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThMMlJwZGo1Y2NseHVJQ0FnSUZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4a2FYWWdZMnhoYzNNOVhDSmxlSEJoYm1STmIzSmxTRzlzWkdWeVhDSStYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4aWRYUjBiMjVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1Y0Y0dGdVpDMXRiM0psWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JrWVhSaExXaHBaR1YwWlhoMFBWd2lMaTR1VW1WaFpDQnNaWE56WENKY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdSaGRHRXRjMmh2ZDNSbGVIUTlYQ0l1TGk1U1pXRmtJRzF2Y21WY0lseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pHRjBZUzEwWVhKblpYUTlYQ0p6YUc5M1RXOXlaUzBrZTNOd1pXTnBaWE45Skh0dWRXMWlaWEo5WENKY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOc1lYTnpQVndpWW5WMGRHOXVJSE5vYjNkTmIzSmxYQ0pjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0xpNHVVbVZoWkNCdGIzSmxYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dlluVjBkRzl1UGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dlpHbDJQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOWthWFkrWEhKY2JpQWdJQ0JjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeDFiQ0JqYkdGemN6MWNJbkJoWjJWZlgySnZlQzFwWTI5dWMxd2lQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhzYVNCamJHRnpjejFjSW5CaFoyVmZYMkp2ZUMxcFkyOXVYQ0krWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHBJR05zWVhOelBWd2labUZ6SUdaaExYZGxhV2RvZEZ3aVBqd3ZhVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBK1BITndZVzRnWTJ4aGMzTTlYQ0p3WVdkbFgxOWliM2d0YVdOdmJpMHRkR1Y0ZEZ3aVBpUjdkMlZwWjJoMGZTQnJaend2YzNCaGJqNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThMMnhwUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4c2FTQmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMXBZMjl1WENJK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhwSUdOc1lYTnpQVndpWm1GeklHWmhMV0Z5Y205M2N5MWhiSFF0ZGx3aVBqd3ZhVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBK1BITndZVzRnWTJ4aGMzTTlYQ0p3WVdkbFgxOWliM2d0YVdOdmJpMHRkR1Y0ZEZ3aVBpUjdhR1ZwWjJoMGZTQmpiVHd2YzNCaGJqNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThMMnhwUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4c2FTQmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMXBZMjl1WENJK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhwSUdOc1lYTnpQVndpWm1GeklHWmhMV05oYkdWdVpHRnlMV05vWldOclhDSStQQzlwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lENDhjM0JoYmlCamJHRnpjejFjSW5CaFoyVmZYMkp2ZUMxcFkyOXVMUzEwWlhoMFhDSStKSHQ1WldGeWMzMGdlWEl1UEM5emNHRnVQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2YkdrK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHeHBJR05zWVhOelBWd2ljR0ZuWlY5ZlltOTRMV2xqYjI1Y0lqNWNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwUEdrZ1kyeGhjM005WENKbVlYTWdabUV0Y0dGc1pYUjBaVndpUGp3dmFWeHlYRzVjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFErUEhOd1lXNGdZMnhoYzNNOVhDSndZV2RsWDE5aWIzZ3RhV052YmkwdGRHVjRkRndpUGlSN1kyOXNiM0piTUYwZ1B5QmpiMnh2Y2xzd1hTQTZJQ2N0SjMwOEwzTndZVzQrWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5c2FUNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThiR2tnWTJ4aGMzTTlYQ0p3WVdkbFgxOWliM2d0YVdOdmJsd2lQbHh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhROGFTQmpiR0Z6Y3oxY0ltWmhjeUJtWVMxd1lXeGxkSFJsWENJK1BDOXBYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEQ0OGMzQmhiaUJqYkdGemN6MWNJbkJoWjJWZlgySnZlQzFwWTI5dUxTMTBaWGgwWENJK0pIdGpiMnh2Y2xzeFhTQS9JR052Ykc5eVd6RmRJRG9nSnkwbmZUd3ZjM0JoYmo1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOEwyeHBQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhzYVNCamJHRnpjejFjSW5CaFoyVmZYMkp2ZUMxcFkyOXVYQ0krWEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwWEhSY2REeHBJR05zWVhOelBWd2labUZ6SUdaaExYQmhiR1YwZEdWY0lqNDhMMmxjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFBqeHpjR0Z1SUdOc1lYTnpQVndpY0dGblpWOWZZbTk0TFdsamIyNHRMWFJsZUhSY0lqNGtlMk52Ykc5eVd6SmRJRDhnWTI5c2IzSmJNbDBnT2lBbkxTZDlQQzl6Y0dGdVBseHlYRzVjZEZ4MFhIUmNkRngwWEhSY2RGeDBQQzlzYVQ1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGJHa2dZMnhoYzNNOVhDSndZV2RsWDE5aWIzZ3RhV052Ymx3aVBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YVNCamJHRnpjejFjSW1aaGN5Qm1ZUzF3WVhkY0lqNDhMMmxjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BqeHpjR0Z1SUdOc1lYTnpQVndpY0dGblpWOWZZbTk0TFdsamIyNHRMWFJsZUhSY0lqNGtlMk52WVhSOVBDOXpjR0Z1UGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dmJHaytYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR3hwSUdOc1lYTnpQVndpY0dGblpWOWZZbTk0TFdsamIyNWNJajVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHa2dZMnhoYzNNOVhDSm1ZWE1nWm1FdGRtVnVkWE10YldGeWMxd2lQand2YVZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQStQSE53WVc0Z1kyeGhjM005WENKd1lXZGxYMTlpYjNndGFXTnZiaTB0ZEdWNGRGd2lQaVI3WjJWdVpHVnlmVHd2YzNCaGJqNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThMMnhwUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzkxYkQ1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOWthWFkrWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCZ08xeHlYRzVjY2x4dVhIUmNkRngwWEhSa2IyZHpRbTk0TG1Gd2NHVnVaRU5vYVd4a0tHUnZaMEp2ZUNrN1hISmNibHgwWEhSY2RIMHBPMXh5WEc1Y2NseHVYSFJjZEZ4MFkyRjBjMEZ5Y21GNUxtWnZja1ZoWTJnb0tHTmhkQ2tnUFQ0Z2UxeHlYRzVjZEZ4MFhIUmNkR05oZEVKdmVDQTlJR1J2WTNWdFpXNTBMbU55WldGMFpVVnNaVzFsYm5Rb0oyUnBkaWNwTzF4eVhHNWNkRngwWEhSY2RHTmhkRUp2ZUM1amJHRnpjMHhwYzNRdVlXUmtLQ2R3WVdkbFgxOWliM2duS1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwWTI5dWMzUWdZMkYwV1dWaGNuTWdQU0JqWVhRdVltbHlkR2c3WEhKY2JseHlYRzVjZEZ4MFhIUmNkR052Ym5OMElHMXBiR2x6WldOelFtVjBkMlZsYmtSUFFtRnVaREU1TnpCallYUWdQU0JFWVhSbExuQmhjbk5sS0dOaGRGbGxZWEp6S1R0Y2NseHVYSFJjZEZ4MFhIUmpiMjV6ZENCdGFXeHBjMlZqYzBKbGRIZGxaVzVPVDFkaGJtUXhPVGN3SUQwZ1JHRjBaUzV1YjNjb0tUdGNjbHh1WEhKY2JseDBYSFJjZEZ4MFkyOXVjM1FnWVdkbFNXNU5hV3hwYzJWamMwTmhkQ0E5WEhKY2JseDBYSFJjZEZ4MFhIUnRhV3hwYzJWamMwSmxkSGRsWlc1T1QxZGhibVF4T1Rjd0lDMGdiV2xzYVhObFkzTkNaWFIzWldWdVJFOUNZVzVrTVRrM01HTmhkRHRjY2x4dVhISmNibHgwWEhSY2RGeDBZMjl1YzNRZ2JXbHNhWE5sWTNORFlYUWdQU0JoWjJWSmJrMXBiR2x6WldOelEyRjBPMXh5WEc1Y2RGeDBYSFJjZEdOdmJuTjBJSE5sWTNNZ1BTQXhNREF3TzF4eVhHNWNkRngwWEhSY2RHTnZibk4wSUcxcGJuTWdQU0J6WldOeklDb2dOakE3WEhKY2JseDBYSFJjZEZ4MFkyOXVjM1FnYUc5MWNpQTlJRzFwYm5NZ0tpQTJNRHRjY2x4dVhIUmNkRngwWEhSamIyNXpkQ0JrWVhrZ1BTQm9iM1Z5SUNvZ01qUTdYSEpjYmx4MFhIUmNkRngwWTI5dWMzUWdlV1ZoY2lBOUlHUmhlU0FxSURNMk5UdGNjbHh1WEhKY2JseDBYSFJjZEZ4MGJHVjBJSGxsWVhKelEyRjBJRDBnVFdGMGFDNXliM1Z1WkNodGFXeHBjMlZqYzBOaGRDQXZJSGxsWVhJcE8xeHlYRzVjY2x4dVhIUmNkRngwWEhSallYUkNiM2d1YVc1dVpYSklWRTFNSUQwZ1lGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThaR2wySUdOc1lYTnpQVndpY0dGblpWOWZZbTk0TFhSdmNGd2lQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHbHRaeUJ6Y21NOVhDSXVKSHRqWVhRdWFXMWhaMlY5WENJZ1lXeDBQVndpSkh0allYUXVibUZ0WlgwZ0pIdGNjbHh1WEhSY2RGeDBYSFJjZEdOaGRDNXpjR1ZqYVdWelhISmNibHgwWEhSY2RGeDBmVndpZlM4K1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEd3ZaR2wyUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOFpHbDJJR05zWVhOelBWd2ljR0ZuWlY5ZlltOTRMV0p2ZEhSdmJWd2lQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHZ3pJR05zWVhOelBWd2ljR0ZuWlY5ZlltOTRMWFJwZEd4bFhDSStKSHRqWVhRdWJtRnRaWDA4TDJnelBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdScGRpQmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMWpiMjUwWlc1MFhDSStYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR1JwZGlCamJHRnpjejFjSW1WNGNHRnVaRTF2Y21WRGIyNTBaVzUwWENJZ2FXUTlYQ0p6YUc5M1RXOXlaUzBrZTF4eVhHNWNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFkyRjBMbk53WldOcFpYTmNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUjlKSHRqWVhRdWJuVnRZbVZ5ZlZ3aVBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4Y0NCamJHRnpjejFjSW5CaFoyVmZYMkp2ZUMxMFpYaDBYQ0krWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FrZTJOaGRDNWtaWE5qZlZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThMM0ErWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5a2FYWStYSEpjYmlBZ0lDQmNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThaR2wySUdOc1lYTnpQVndpWlhod1lXNWtUVzl5WlVodmJHUmxjbHdpUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThZblYwZEc5dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbGVIQmhibVF0Ylc5eVpWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pHRjBZUzFvYVdSbGRHVjRkRDFjSWk0dUxsSmxZV1FnYkdWemMxd2lYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmtZWFJoTFhOb2IzZDBaWGgwUFZ3aUxpNHVVbVZoWkNCdGIzSmxYQ0pjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1JoZEdFdGRHRnlaMlYwUFZ3aWMyaHZkMDF2Y21VdEpIdGpZWFF1YzNCbFkybGxjMzBrZTF4eVhHNWNkRngwWEhSY2RGeDBZMkYwTG01MWJXSmxjbHh5WEc1Y2RGeDBYSFJjZEgxY0lseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyeGhjM005WENKaWRYUjBiMjRnYzJodmQwMXZjbVZjSWx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQStYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXVMaTVTWldGa0lHMXZjbVZjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOWlkWFIwYjI0K1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOWthWFkrWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThMMlJwZGo1Y2NseHVJQ0FnSUZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQSFZzSUdOc1lYTnpQVndpY0dGblpWOWZZbTk0TFdsamIyNXpYQ0krWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEd4cElHTnNZWE56UFZ3aWNHRm5aVjlmWW05NExXbGpiMjVjSWo1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR2tnWTJ4aGMzTTlYQ0ptWVhNZ1ptRXRkMlZwWjJoMFhDSStQQzlwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lENDhjM0JoYmlCamJHRnpjejFjSW5CaFoyVmZYMkp2ZUMxcFkyOXVMUzEwWlhoMFhDSStKSHRjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmpZWFF1ZDJWcFoyaDBYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEgwZ2EyYzhMM053WVc0K1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOXNhVDVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YkdrZ1kyeGhjM005WENKd1lXZGxYMTlpYjNndGFXTnZibHdpUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThhU0JqYkdGemN6MWNJbVpoY3lCbVlTMWhjbkp2ZDNNdFlXeDBMWFpjSWo0OEwybGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUGp4emNHRnVJR05zWVhOelBWd2ljR0ZuWlY5ZlltOTRMV2xqYjI0dExYUmxlSFJjSWo0a2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEdOaGRDNW9aV2xuYUhSY2NseHVYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBmV050UEM5emNHRnVQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2YkdrK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHeHBJR05zWVhOelBWd2ljR0ZuWlY5ZlltOTRMV2xqYjI1Y0lqNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdrZ1kyeGhjM005WENKbVlYTWdabUV0WTJGc1pXNWtZWEl0WTJobFkydGNJajQ4TDJsY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQanh6Y0dGdUlHTnNZWE56UFZ3aWNHRm5aVjlmWW05NExXbGpiMjR0TFhSbGVIUmNJajRrZTNsbFlYSnpRMkYwZlNCNWNpNDhMM053WVc0K1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOXNhVDVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YkdrZ1kyeGhjM005WENKd1lXZGxYMTlpYjNndGFXTnZibHdpUGx4eVhHNWNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUThhU0JqYkdGemN6MWNJbVpoY3lCbVlTMXdZV3hsZEhSbFhDSStQQzlwWEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RENDhjM0JoYmlCamJHRnpjejFjSW5CaFoyVmZYMkp2ZUMxcFkyOXVMUzEwWlhoMFhDSStKSHRqWVhRdVkyOXNiM0piTUYwZ1B5QmpZWFF1WTI5c2IzSmJNRjBnT2lBbkxTZDlQQzl6Y0dGdVBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEd3ZiR2srWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEd4cElHTnNZWE56UFZ3aWNHRm5aVjlmWW05NExXbGpiMjVjSWo1Y2NseHVYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBQR2tnWTJ4aGMzTTlYQ0ptWVhNZ1ptRXRjR0ZzWlhSMFpWd2lQand2YVZ4eVhHNWNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUStQSE53WVc0Z1kyeGhjM005WENKd1lXZGxYMTlpYjNndGFXTnZiaTB0ZEdWNGRGd2lQaVI3WTJGMExtTnZiRzl5V3pGZElEOGdZMkYwTG1OdmJHOXlXekZkSURvZ0p5MG5mVHd2YzNCaGJqNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThMMnhwUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4c2FTQmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMXBZMjl1WENJK1hISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRHhwSUdOc1lYTnpQVndpWm1GeklHWmhMWEJoYkdWMGRHVmNJajQ4TDJsY2NseHVYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBQanh6Y0dGdUlHTnNZWE56UFZ3aWNHRm5aVjlmWW05NExXbGpiMjR0TFhSbGVIUmNJajRrZTJOaGRDNWpiMnh2Y2xzeVhTQS9JR05oZEM1amIyeHZjbHN5WFNBNklDY3RKMzA4TDNOd1lXNCtYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBYSFE4TDJ4cFBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHNhU0JqYkdGemN6MWNJbkJoWjJWZlgySnZlQzFwWTI5dVhDSStYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4cElHTnNZWE56UFZ3aVptRnpJR1poTFhCaGQxd2lQand2YVZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQStQSE53WVc0Z1kyeGhjM005WENKd1lXZGxYMTlpYjNndGFXTnZiaTB0ZEdWNGRGd2lQaVI3WEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBZMkYwTG1OdllYUmNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwZlR3dmMzQmhiajVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4TDJ4cFBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHNhU0JqYkdGemN6MWNJbkJoWjJWZlgySnZlQzFwWTI5dVhDSStYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4cElHTnNZWE56UFZ3aVptRnpJR1poTFhabGJuVnpMVzFoY25OY0lqNDhMMmxjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BqeHpjR0Z1SUdOc1lYTnpQVndpY0dGblpWOWZZbTk0TFdsamIyNHRMWFJsZUhSY0lqNGtlMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RHTmhkQzVuWlc1a1pYSmNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwZlR3dmMzQmhiajVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4TDJ4cFBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5MWJENWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzlrYVhZK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmdPMXh5WEc1Y2NseHVYSFJjZEZ4MFhIUmpZWFJ6UW05NExtRndjR1Z1WkVOb2FXeGtLR05oZEVKdmVDazdYSEpjYmx4MFhIUmNkSDBwTzF4eVhHNWNkRngwZlNrN1hISmNibHh5WEc1Y2RGeDBiR1YwSUdSdlowSnZlRUZ5Y21GNUlEMGdXeTR1TG1SdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSkJiR3dvSnlOa2IyZHpMV0p2ZUNBdWNHRm5aVjlmWW05NEp5bGRPMXh5WEc1Y2RGeDBiR1YwSUdOaGRFSnZlRUZ5Y21GNUlEMGdXeTR1TG1SdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSkJiR3dvSnlOallYUnpMV0p2ZUNBdWNHRm5aVjlmWW05NEp5bGRPMXh5WEc1Y2RGeDBiR1YwSUdOMWNuSmxiblJRWVdkbElEMGdNVHRjY2x4dVhIUmNkR3hsZENCbGJHVnRaVzUwYzA5dVVHRm5aU0E5SURRN1hISmNibHh5WEc1Y2RGeDBZMjl1YzNRZ2NHRm5hVzVoZEdsdmJrVnNSRzluY3lBOUlHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0Nka2IyZHpMWEJoWjJsdVlYUnBiMjRuS1R0Y2NseHVYSFJjZEdOdmJuTjBJSEJoWjJsdVlYUnBiMjVGYkVOaGRITWdQU0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDZ25ZMkYwY3kxd1lXZHBibUYwYVc5dUp5azdYSEpjYmx4eVhHNWNkRngwWm5WdVkzUnBiMjRnWkdsemNHeGhlVkJoWjJsdVlYUmxaRWwwWlcxektHbDBaVzF6TENCM2NtRndjR1Z5TENCcGRHVnRjMUJsY2xCaFoyVXNJSEJoWjJVcElIdGNjbHh1WEhSY2RGeDBkM0poY0hCbGNpNXBibTVsY2toVVRVd2dQU0FuSnp0Y2NseHVYSFJjZEZ4MGNHRm5aUzB0TzF4eVhHNWNjbHh1WEhSY2RGeDBiR1YwSUhOMFlYSjBJRDBnYVhSbGJYTlFaWEpRWVdkbElDb2djR0ZuWlR0Y2NseHVYSFJjZEZ4MGJHVjBJR1Z1WkNBOUlITjBZWEowSUNzZ2FYUmxiWE5RWlhKUVlXZGxPMXh5WEc1Y2RGeDBYSFJzWlhRZ2NHRm5hVzVoZEdWa1NYUmxiWE1nUFNCcGRHVnRjeTV6YkdsalpTaHpkR0Z5ZEN3Z1pXNWtLVHRjY2x4dVhISmNibHgwWEhSY2RIQmhaMmx1WVhSbFpFbDBaVzF6TG1admNrVmhZMmdvS0dsMFpXMHBJRDArSUh0Y2NseHVYSFJjZEZ4MFhIUnNaWFFnYVhSbGJVVnNJRDBnWkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDZ25aR2wySnlrN1hISmNibHgwWEhSY2RGeDBhWFJsYlVWc0xtTnNZWE56VEdsemRDNWhaR1FvSjNCaFoyVmZYMkp2ZUNjcE8xeHlYRzVjY2x4dVhIUmNkRngwWEhScGRHVnRSV3dnUFNCcGRHVnRPMXh5WEc1Y2NseHVYSFJjZEZ4MFhIUjNjbUZ3Y0dWeUxtRndjR1Z1WkVOb2FXeGtLR2wwWlcxRmJDazdYSEpjYmx4MFhIUmNkSDBwTzF4eVhHNWNkRngwZlZ4eVhHNWNjbHh1WEhSY2RHWjFibU4wYVc5dUlHUnBjM0JzWVhsUVlXZHBibUYwYVc5dUtHbDBaVzF6TENCM2NtRndjR1Z5TENCcGRHVnRjMUJsY2xCaFoyVXBJSHRjY2x4dVhIUmNkRngwZDNKaGNIQmxjaTVwYm01bGNraFVUVXdnUFNBbkp6dGNjbHh1WEhKY2JseDBYSFJjZEd4bGRDQndZV2RsUTI5MWJuUWdQU0JOWVhSb0xtTmxhV3dvYVhSbGJYTXViR1Z1WjNSb0lDOGdhWFJsYlhOUVpYSlFZV2RsS1R0Y2NseHVYSEpjYmx4MFhIUmNkR1p2Y2lBb2JHVjBJR2tnUFNBeE95QnBJRHdnY0dGblpVTnZkVzUwSUNzZ01Uc2dhU3NyS1NCN1hISmNibHgwWEhSY2RGeDBiR1YwSUdKMGJpQTlJSEJoWjJsdVlYUnBiMjVDZFhSMGIyNG9hU3dnY0dGblpVTnZkVzUwS1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwWW5SdUxuTjBlV3hsTG5kcFpIUm9JRDBnSnpBbk8xeHlYRzVjZEZ4MFhIUmNkR0owYmk1emRIbHNaUzV2ZG1WeVpteHZkeUE5SUNkb2FXUmtaVzRuTzF4eVhHNWNkRngwWEhSY2RHSjBiaTV6ZEhsc1pTNXRZWEpuYVc0Z1BTQW5NQ2M3WEhKY2JseHlYRzVjZEZ4MFhIUmNkSGR5WVhCd1pYSXVZWEJ3Wlc1a1EyaHBiR1FvWW5SdUtUdGNjbHh1WEhSY2RGeDBmVnh5WEc1Y2NseHVYSFJjZEZ4MGJHVjBJRzVsZUhSQ2RHNGdQU0J1WlhoMFVHRm5aU2h3WVdkbFEyOTFiblFwTzF4eVhHNWNkRngwWEhSM2NtRndjR1Z5TG1Gd2NHVnVaRU5vYVd4a0tHNWxlSFJDZEc0cE8xeHlYRzVjY2x4dVhIUmNkRngwYkdWMElIQnlaWFpDZEc0Z1BTQndjbVYyVUdGblpTaHdZV2RsUTI5MWJuUXBPMXh5WEc1Y2RGeDBYSFIzY21Gd2NHVnlMbkJ5WlhCbGJtUW9jSEpsZGtKMGJpazdYSEpjYmx4eVhHNWNkRngwWEhSc1pYUWdZM1Z5Y21WdWRFSjBia1J2WjNNZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0Z4eVhHNWNkRngwWEhSY2RDY2paRzluY3lBdWNHRm5hVzVoZEdsdmJpMWlkRzR1WVdOMGFYWmxKMXh5WEc1Y2RGeDBYSFFwTzF4eVhHNWNkRngwWEhSc1pYUWdZM1Z5Y21WdWRFSjBia05oZEhNZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0Z4eVhHNWNkRngwWEhSY2RDY2pZMkYwY3lBdWNHRm5hVzVoZEdsdmJpMWlkRzR1WVdOMGFYWmxKMXh5WEc1Y2RGeDBYSFFwTzF4eVhHNWNjbHh1WEhSY2RGeDBhV1lnS0dOMWNuSmxiblJDZEc1RWIyZHpJQ1ltSUdOMWNuSmxiblJDZEc1RFlYUnpLU0I3WEhKY2JseDBYSFJjZEZ4MFkzVnljbVZ1ZEVKMGJrUnZaM011WTJ4aGMzTk1hWE4wTG1Ga1pDZ25aM0p2ZFhBbktUdGNjbHh1WEhSY2RGeDBYSFJqZFhKeVpXNTBRblJ1Ukc5bmN5NXVaWGgwUld4bGJXVnVkRk5wWW14cGJtY3VZMnhoYzNOTWFYTjBMbUZrWkNnblozSnZkWEFuS1R0Y2NseHVYSFJjZEZ4MFhIUmpkWEp5Wlc1MFFuUnVSRzluY3k1dVpYaDBSV3hsYldWdWRGTnBZbXhwYm1jdWJtVjRkRVZzWlcxbGJuUlRhV0pzYVc1bkxtTnNZWE56VEdsemRDNWhaR1FvWEhKY2JseDBYSFJjZEZ4MFhIUW5aM0p2ZFhBblhISmNibHgwWEhSY2RGeDBLVHRjY2x4dVhIUmNkRngwWEhSamRYSnlaVzUwUW5SdVJHOW5jeTV3Y21WMmFXOTFjMFZzWlcxbGJuUlRhV0pzYVc1bkxtTnNZWE56VEdsemRDNWhaR1FvSjJkeWIzVndKeWs3WEhKY2JseHlYRzVjZEZ4MFhIUmNkR04xY25KbGJuUkNkRzVEWVhSekxtTnNZWE56VEdsemRDNWhaR1FvSjJkeWIzVndKeWs3WEhKY2JseDBYSFJjZEZ4MFkzVnljbVZ1ZEVKMGJrTmhkSE11Ym1WNGRFVnNaVzFsYm5SVGFXSnNhVzVuTG1Oc1lYTnpUR2x6ZEM1aFpHUW9KMmR5YjNWd0p5azdYSEpjYmx4MFhIUmNkRngwWTNWeWNtVnVkRUowYmtOaGRITXVibVY0ZEVWc1pXMWxiblJUYVdKc2FXNW5MbTVsZUhSRmJHVnRaVzUwVTJsaWJHbHVaeTVqYkdGemMweHBjM1F1WVdSa0tGeHlYRzVjZEZ4MFhIUmNkRngwSjJkeWIzVndKMXh5WEc1Y2RGeDBYSFJjZENrN1hISmNibHgwWEhSY2RGeDBZM1Z5Y21WdWRFSjBia05oZEhNdWNISmxkbWx2ZFhORmJHVnRaVzUwVTJsaWJHbHVaeTVqYkdGemMweHBjM1F1WVdSa0tDZG5jbTkxY0NjcE8xeHlYRzVjZEZ4MFhIUjlYSEpjYmx4MFhIUjlYSEpjYmx4eVhHNWNkRngwWm5WdVkzUnBiMjRnYm1WNGRGQmhaMlVvY0dGblpVTnZkVzUwS1NCN1hISmNibHgwWEhSY2RHeGxkQ0J1WlhoMFFuUnVJRDBnWkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDZ25ZblYwZEc5dUp5azdYSEpjYmx4MFhIUmNkRzVsZUhSQ2RHNHVZMnhoYzNOTWFYTjBMbUZrWkNnbmJtVjRkQ2NwTzF4eVhHNWNkRngwWEhSdVpYaDBRblJ1TG1sdWJtVnlWR1Y0ZENBOUlDYytKenRjY2x4dVhIUmNkRngwYm1WNGRFSjBiaTVqYkdGemMweHBjM1F1WVdSa0tDZHdZV2RwYm1GMGFXOXVMV0owYmljcE8xeHlYRzVjY2x4dVhIUmNkRngwYm1WNGRFSjBiaTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RqYkdsamF5Y3NJQ2hsS1NBOVBpQjdYSEpjYmx4MFhIUmNkRngwYVdZZ0tHNWxlSFJDZEc0dWNHRnlaVzUwUld4bGJXVnVkQ0E5UFNCd1lXZHBibUYwYVc5dVJXeEViMmR6S1NCN1hISmNibHgwWEhSY2RGeDBYSFJrYVhOd2JHRjVVR0ZuYVc1aGRHVmtTWFJsYlhNb1hISmNibHgwWEhSY2RGeDBYSFJjZEdSdlowSnZlRUZ5Y21GNUxGeHlYRzVjZEZ4MFhIUmNkRngwWEhSa2IyZHpRbTk0TEZ4eVhHNWNkRngwWEhSY2RGeDBYSFJsYkdWdFpXNTBjMDl1VUdGblpTeGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFkzVnljbVZ1ZEZCaFoyVmNjbHh1WEhSY2RGeDBYSFJjZENrN1hISmNibHh5WEc1Y2RGeDBYSFJjZEZ4MGJHVjBJR0ZqZEdsMlpVSjBia1J2WnlBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvWEhKY2JseDBYSFJjZEZ4MFhIUmNkQ2NqWkc5bmN5QXVjR0ZuYVc1aGRHbHZiaTFpZEc0dVlXTjBhWFpsSjF4eVhHNWNkRngwWEhSY2RGeDBLVHRjY2x4dVhISmNibHgwWEhSY2RGeDBYSFJoWTNScGRtVkNkRzVFYjJjdWJtVjRkRVZzWlcxbGJuUlRhV0pzYVc1bkxtTnNhV05yS0NrN1hISmNibHh5WEc1Y2RGeDBYSFJjZEZ4MGFXWWdLR04xY25KbGJuUlFZV2RsSUQwOVBTQndZV2RsUTI5MWJuUXBJSHRjY2x4dVhIUmNkRngwWEhSY2RGeDBibVY0ZEVKMGJpNXpkSGxzWlM1dmNHRmphWFI1SUQwZ0p6QXVOU2M3WEhKY2JseDBYSFJjZEZ4MFhIUmNkRzVsZUhSQ2RHNHVjM1I1YkdVdWNHOXBiblJsY2tWMlpXNTBjeUE5SUNkdWIyNWxKenRjY2x4dVhIUmNkRngwWEhSY2RIMWNjbHh1WEhKY2JseDBYSFJjZEZ4MFhIUnNaWFFnY0hKbGRrSjBiaUE5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9KeU5rYjJkeklDNXdjbVYySnlrN1hISmNibHh5WEc1Y2RGeDBYSFJjZEZ4MGFXWWdLR04xY25KbGJuUlFZV2RsSUNFOVBTQXhLU0I3WEhKY2JseDBYSFJjZEZ4MFhIUmNkSEJ5WlhaQ2RHNHVjM1I1YkdVdWIzQmhZMmwwZVNBOUlDY3hKenRjY2x4dVhIUmNkRngwWEhSY2RGeDBjSEpsZGtKMGJpNXpkSGxzWlM1d2IybHVkR1Z5UlhabGJuUnpJRDBnSjJGc2JDYzdYSEpjYmx4MFhIUmNkRngwWEhSOVhISmNibHh5WEc1Y2RGeDBYSFJjZEZ4MGFXWWdLR0ZqZEdsMlpVSjBia1J2WnlrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhSaFkzUnBkbVZDZEc1RWIyY3VZMnhoYzNOTWFYTjBMbUZrWkNnblozSnZkWEFuS1R0Y2NseHVYSFJjZEZ4MFhIUmNkRngwWVdOMGFYWmxRblJ1Ukc5bkxtNWxlSFJGYkdWdFpXNTBVMmxpYkdsdVp5NWpiR0Z6YzB4cGMzUXVZV1JrS0NkbmNtOTFjQ2NwTzF4eVhHNWNkRngwWEhSY2RGeDBYSFJoWTNScGRtVkNkRzVFYjJjdWNISmxkbWx2ZFhORmJHVnRaVzUwVTJsaWJHbHVaeTVqYkdGemMweHBjM1F1WVdSa0tDZG5jbTkxY0NjcE8xeHlYRzVjZEZ4MFhIUmNkRngwZlZ4eVhHNWNkRngwWEhSY2RIMWNjbHh1WEhKY2JseDBYSFJjZEZ4MGFXWWdLRzVsZUhSQ2RHNHVjR0Z5Wlc1MFJXeGxiV1Z1ZENBOVBTQndZV2RwYm1GMGFXOXVSV3hEWVhSektTQjdYSEpjYmx4MFhIUmNkRngwWEhSa2FYTndiR0Y1VUdGbmFXNWhkR1ZrU1hSbGJYTW9YSEpjYmx4MFhIUmNkRngwWEhSY2RHTmhkRUp2ZUVGeWNtRjVMRnh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmpZWFJ6UW05NExGeHlYRzVjZEZ4MFhIUmNkRngwWEhSbGJHVnRaVzUwYzA5dVVHRm5aU3hjY2x4dVhIUmNkRngwWEhSY2RGeDBZM1Z5Y21WdWRGQmhaMlZjY2x4dVhIUmNkRngwWEhSY2RDazdYSEpjYmx4eVhHNWNkRngwWEhSY2RGeDBiR1YwSUdGamRHbDJaVUowYmtOaGRDQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb1hISmNibHgwWEhSY2RGeDBYSFJjZENjalkyRjBjeUF1Y0dGbmFXNWhkR2x2YmkxaWRHNHVZV04wYVhabEoxeHlYRzVjZEZ4MFhIUmNkRngwS1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwWEhSaFkzUnBkbVZDZEc1RFlYUXVibVY0ZEVWc1pXMWxiblJUYVdKc2FXNW5MbU5zYVdOcktDazdYSEpjYmx4eVhHNWNkRngwWEhSY2RGeDBhV1lnS0dOMWNuSmxiblJRWVdkbElEMDlQU0J3WVdkbFEyOTFiblFwSUh0Y2NseHVYSFJjZEZ4MFhIUmNkRngwYm1WNGRFSjBiaTV6ZEhsc1pTNXZjR0ZqYVhSNUlEMGdKekF1TlNjN1hISmNibHgwWEhSY2RGeDBYSFJjZEc1bGVIUkNkRzR1YzNSNWJHVXVjRzlwYm5SbGNrVjJaVzUwY3lBOUlDZHViMjVsSnp0Y2NseHVYSFJjZEZ4MFhIUmNkSDFjY2x4dVhISmNibHgwWEhSY2RGeDBYSFJzWlhRZ2NISmxka0owYmlBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvSnlOallYUnpJQzV3Y21WMkp5azdYSEpjYmx4eVhHNWNkRngwWEhSY2RGeDBhV1lnS0dOMWNuSmxiblJRWVdkbElDRTlQU0F4S1NCN1hISmNibHgwWEhSY2RGeDBYSFJjZEhCeVpYWkNkRzR1YzNSNWJHVXViM0JoWTJsMGVTQTlJQ2N4Snp0Y2NseHVYSFJjZEZ4MFhIUmNkRngwY0hKbGRrSjBiaTV6ZEhsc1pTNXdiMmx1ZEdWeVJYWmxiblJ6SUQwZ0oyRnNiQ2M3WEhKY2JseDBYSFJjZEZ4MFhIUjlYSEpjYmx4eVhHNWNkRngwWEhSY2RGeDBhV1lnS0dGamRHbDJaVUowYmtOaGRDa2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmhZM1JwZG1WQ2RHNURZWFF1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25aM0p2ZFhBbktUdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFlXTjBhWFpsUW5SdVEyRjBMbTVsZUhSRmJHVnRaVzUwVTJsaWJHbHVaeTVqYkdGemMweHBjM1F1WVdSa0tDZG5jbTkxY0NjcE8xeHlYRzVjZEZ4MFhIUmNkRngwWEhSaFkzUnBkbVZDZEc1RFlYUXVjSEpsZG1sdmRYTkZiR1Z0Wlc1MFUybGliR2x1Wnk1amJHRnpjMHhwYzNRdVlXUmtLQ2RuY205MWNDY3BPMXh5WEc1Y2RGeDBYSFJjZEZ4MGZWeHlYRzVjZEZ4MFhIUmNkSDFjY2x4dVhIUmNkRngwZlNrN1hISmNibHh5WEc1Y2RGeDBYSFJ5WlhSMWNtNGdibVY0ZEVKMGJqdGNjbHh1WEhSY2RIMWNjbHh1WEhKY2JseDBYSFJtZFc1amRHbHZiaUJ3Y21WMlVHRm5aU2h3WVdkbFEyOTFiblFwSUh0Y2NseHVYSFJjZEZ4MGJHVjBJSEJ5WlhaQ2RHNGdQU0JrYjJOMWJXVnVkQzVqY21WaGRHVkZiR1Z0Wlc1MEtDZGlkWFIwYjI0bktUdGNjbHh1WEhSY2RGeDBjSEpsZGtKMGJpNWpiR0Z6YzB4cGMzUXVZV1JrS0Nkd2NtVjJKeWs3WEhKY2JseDBYSFJjZEhCeVpYWkNkRzR1YVc1dVpYSlVaWGgwSUQwZ0p6d25PMXh5WEc1Y2RGeDBYSFJ3Y21WMlFuUnVMbU5zWVhOelRHbHpkQzVoWkdRb0ozQmhaMmx1WVhScGIyNHRZblJ1SnlrN1hISmNibHh5WEc1Y2RGeDBYSFJ3Y21WMlFuUnVMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMk5zYVdOckp5d2dLR1VwSUQwK0lIdGNjbHh1WEhSY2RGeDBYSFJwWmlBb2NISmxka0owYmk1d1lYSmxiblJGYkdWdFpXNTBJRDA5SUhCaFoybHVZWFJwYjI1RmJFUnZaM01wSUh0Y2NseHVYSFJjZEZ4MFhIUmNkR1JwYzNCc1lYbFFZV2RwYm1GMFpXUkpkR1Z0Y3loY2NseHVYSFJjZEZ4MFhIUmNkRngwWkc5blFtOTRRWEp5WVhrc1hISmNibHgwWEhSY2RGeDBYSFJjZEdSdlozTkNiM2dzWEhKY2JseDBYSFJjZEZ4MFhIUmNkR1ZzWlcxbGJuUnpUMjVRWVdkbExGeHlYRzVjZEZ4MFhIUmNkRngwWEhSamRYSnlaVzUwVUdGblpWeHlYRzVjZEZ4MFhIUmNkRngwS1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwWEhSc1pYUWdZV04wYVhabFFuUnVSRzluSUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWhjY2x4dVhIUmNkRngwWEhSY2RGeDBKeU5rYjJkeklDNXdZV2RwYm1GMGFXOXVMV0owYmk1aFkzUnBkbVVuWEhKY2JseDBYSFJjZEZ4MFhIUXBPMXh5WEc1Y2NseHVYSFJjZEZ4MFhIUmNkR0ZqZEdsMlpVSjBia1J2Wnk1d2NtVjJhVzkxYzBWc1pXMWxiblJUYVdKc2FXNW5MbU5zYVdOcktDazdYSEpjYmx4eVhHNWNkRngwWEhSY2RGeDBiR1YwSUc1bGVIUkNkRzRnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2NqWkc5bmN5QXVibVY0ZENjcE8xeHlYRzVjY2x4dVhIUmNkRngwWEhSY2RHbG1JQ2hqZFhKeVpXNTBVR0ZuWlNBaFBUMGdjR0ZuWlVOdmRXNTBLU0I3WEhKY2JseDBYSFJjZEZ4MFhIUmNkRzVsZUhSQ2RHNHVjM1I1YkdVdWIzQmhZMmwwZVNBOUlDY3hKenRjY2x4dVhIUmNkRngwWEhSY2RGeDBibVY0ZEVKMGJpNXpkSGxzWlM1d2IybHVkR1Z5UlhabGJuUnpJRDBnSjJGc2JDYzdYSEpjYmx4MFhIUmNkRngwWEhSOVhISmNibHh5WEc1Y2RGeDBYSFJjZEZ4MGFXWWdLR04xY25KbGJuUlFZV2RsSUQwOVBTQXhLU0I3WEhKY2JseDBYSFJjZEZ4MFhIUmNkSEJ5WlhaQ2RHNHVjM1I1YkdVdWIzQmhZMmwwZVNBOUlDY3dMalVuTzF4eVhHNWNkRngwWEhSY2RGeDBYSFJ3Y21WMlFuUnVMbk4wZVd4bExuQnZhVzUwWlhKRmRtVnVkSE1nUFNBbmJtOXVaU2M3WEhKY2JseDBYSFJjZEZ4MFhIUjlYSEpjYmx4eVhHNWNkRngwWEhSY2RGeDBhV1lnS0dGamRHbDJaVUowYmtSdlp5a2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmhZM1JwZG1WQ2RHNUViMmN1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25aM0p2ZFhBbktUdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFlXTjBhWFpsUW5SdVJHOW5MbTVsZUhSRmJHVnRaVzUwVTJsaWJHbHVaeTVqYkdGemMweHBjM1F1WVdSa0tDZG5jbTkxY0NjcE8xeHlYRzVjZEZ4MFhIUmNkRngwWEhSaFkzUnBkbVZDZEc1RWIyY3VjSEpsZG1sdmRYTkZiR1Z0Wlc1MFUybGliR2x1Wnk1amJHRnpjMHhwYzNRdVlXUmtLQ2RuY205MWNDY3BPMXh5WEc1Y2RGeDBYSFJjZEZ4MGZWeHlYRzVjZEZ4MFhIUmNkSDFjY2x4dVhISmNibHgwWEhSY2RGeDBhV1lnS0hCeVpYWkNkRzR1Y0dGeVpXNTBSV3hsYldWdWRDQTlQU0J3WVdkcGJtRjBhVzl1Uld4RFlYUnpLU0I3WEhKY2JseDBYSFJjZEZ4MFhIUmthWE53YkdGNVVHRm5hVzVoZEdWa1NYUmxiWE1vWEhKY2JseDBYSFJjZEZ4MFhIUmNkR05oZEVKdmVFRnljbUY1TEZ4eVhHNWNkRngwWEhSY2RGeDBYSFJqWVhSelFtOTRMRnh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmxiR1Z0Wlc1MGMwOXVVR0ZuWlN4Y2NseHVYSFJjZEZ4MFhIUmNkRngwWTNWeWNtVnVkRkJoWjJWY2NseHVYSFJjZEZ4MFhIUmNkQ2s3WEhKY2JseHlYRzVjZEZ4MFhIUmNkRngwYkdWMElHRmpkR2wyWlVKMGJrTmhkQ0E5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9YSEpjYmx4MFhIUmNkRngwWEhSY2RDY2pZMkYwY3lBdWNHRm5hVzVoZEdsdmJpMWlkRzR1WVdOMGFYWmxKMXh5WEc1Y2RGeDBYSFJjZEZ4MEtUdGNjbHh1WEhKY2JseDBYSFJjZEZ4MFhIUmhZM1JwZG1WQ2RHNURZWFF1Y0hKbGRtbHZkWE5GYkdWdFpXNTBVMmxpYkdsdVp5NWpiR2xqYXlncE8xeHlYRzVjY2x4dVhIUmNkRngwWEhSY2RHeGxkQ0J1WlhoMFFuUnVJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25JMk5oZEhNZ0xtNWxlSFFuS1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwWEhScFppQW9ZM1Z5Y21WdWRGQmhaMlVnSVQwOUlIQmhaMlZEYjNWdWRDa2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUnVaWGgwUW5SdUxuTjBlV3hsTG05d1lXTnBkSGtnUFNBbk1TYzdYSEpjYmx4MFhIUmNkRngwWEhSY2RHNWxlSFJDZEc0dWMzUjViR1V1Y0c5cGJuUmxja1YyWlc1MGN5QTlJQ2RoYkd3bk8xeHlYRzVjZEZ4MFhIUmNkRngwZlZ4eVhHNWNjbHh1WEhSY2RGeDBYSFJjZEdsbUlDaGpkWEp5Wlc1MFVHRm5aU0E5UFQwZ01Ta2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUndjbVYyUW5SdUxuTjBlV3hsTG05d1lXTnBkSGtnUFNBbk1DNDFKenRjY2x4dVhIUmNkRngwWEhSY2RGeDBjSEpsZGtKMGJpNXpkSGxzWlM1d2IybHVkR1Z5UlhabGJuUnpJRDBnSjI1dmJtVW5PMXh5WEc1Y2RGeDBYSFJjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkRngwWEhSY2RHbG1JQ2hoWTNScGRtVkNkRzVEWVhRcElIdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFlXTjBhWFpsUW5SdVEyRjBMbU5zWVhOelRHbHpkQzVoWkdRb0oyZHliM1Z3SnlrN1hISmNibHgwWEhSY2RGeDBYSFJjZEdGamRHbDJaVUowYmtOaGRDNXVaWGgwUld4bGJXVnVkRk5wWW14cGJtY3VZMnhoYzNOTWFYTjBMbUZrWkNnblozSnZkWEFuS1R0Y2NseHVYSFJjZEZ4MFhIUmNkRngwWVdOMGFYWmxRblJ1UTJGMExuQnlaWFpwYjNWelJXeGxiV1Z1ZEZOcFlteHBibWN1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25aM0p2ZFhBbktUdGNjbHh1WEhSY2RGeDBYSFJjZEgxY2NseHVYSFJjZEZ4MFhIUjlYSEpjYmx4MFhIUmNkSDBwTzF4eVhHNWNjbHh1WEhSY2RGeDBhV1lnS0dOMWNuSmxiblJRWVdkbElEMDlQU0F4S1NCN1hISmNibHgwWEhSY2RGeDBjSEpsZGtKMGJpNXpkSGxzWlM1dmNHRmphWFI1SUQwZ0p6QXVOU2M3WEhKY2JseDBYSFJjZEZ4MGNISmxka0owYmk1emRIbHNaUzV3YjJsdWRHVnlSWFpsYm5SeklEMGdKMjV2Ym1Vbk8xeHlYRzVjZEZ4MFhIUjlYSEpjYmx4eVhHNWNkRngwWEhSeVpYUjFjbTRnY0hKbGRrSjBianRjY2x4dVhIUmNkSDFjY2x4dVhISmNibHgwWEhSbWRXNWpkR2x2YmlCd1lXZHBibUYwYVc5dVFuVjBkRzl1S0hCaFoyVXNJSEJoWjJWRGIzVnVkQ2tnZTF4eVhHNWNkRngwWEhSc1pYUWdZblYwZEc5dUlEMGdaRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENnblluVjBkRzl1SnlrN1hISmNibHgwWEhSY2RHSjFkSFJ2Ymk1amJHRnpjMHhwYzNRdVlXUmtLQ2R3WVdkcGJtRjBhVzl1TFdKMGJpY3BPMXh5WEc1Y2RGeDBYSFJpZFhSMGIyNHVhVzV1WlhKVVpYaDBJRDBnY0dGblpUdGNjbHh1WEhKY2JseDBYSFJjZEdsbUlDaGpkWEp5Wlc1MFVHRm5aU0E5UFNCd1lXZGxLU0I3WEhKY2JseDBYSFJjZEZ4MFluVjBkRzl1TG1Oc1lYTnpUR2x6ZEM1aFpHUW9KMkZqZEdsMlpTY3BPMXh5WEc1Y2RGeDBYSFI5WEhKY2JseHlYRzVjZEZ4MFhIUmlkWFIwYjI0dVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblkyeHBZMnNuTENBb1pTa2dQVDRnZTF4eVhHNWNkRngwWEhSY2RHTjFjbkpsYm5SUVlXZGxJRDBnY0dGblpUdGNjbHh1WEhKY2JseDBYSFJjZEZ4MGFXWWdLR0oxZEhSdmJpNXdZWEpsYm5SRmJHVnRaVzUwSUQwOUlIQmhaMmx1WVhScGIyNUZiRVJ2WjNNcElIdGNjbHh1WEhSY2RGeDBYSFJjZEdScGMzQnNZWGxRWVdkcGJtRjBaV1JKZEdWdGN5aGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFpHOW5RbTk0UVhKeVlYa3NYSEpjYmx4MFhIUmNkRngwWEhSY2RHUnZaM05DYjNnc1hISmNibHgwWEhSY2RGeDBYSFJjZEdWc1pXMWxiblJ6VDI1UVlXZGxMRnh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmpkWEp5Wlc1MFVHRm5aVnh5WEc1Y2RGeDBYSFJjZEZ4MEtUdGNjbHh1WEhKY2JseDBYSFJjZEZ4MFhIUnNaWFFnWVdOMGFYWmxRblJ1Ukc5bklEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2loY2NseHVYSFJjZEZ4MFhIUmNkRngwSnlOa2IyZHpJQzV3WVdkcGJtRjBhVzl1TFdKMGJpNWhZM1JwZG1VblhISmNibHgwWEhSY2RGeDBYSFFwTzF4eVhHNWNjbHh1WEhSY2RGeDBYSFJjZEdGamRHbDJaVUowYmtSdlp5NWpiR0Z6YzB4cGMzUXVjbVZ0YjNabEtDZGhZM1JwZG1VbktUdGNjbHh1WEhKY2JseDBYSFJjZEZ4MFhIUmlkWFIwYjI0dVkyeGhjM05NYVhOMExtRmtaQ2duWVdOMGFYWmxKeWs3WEhKY2JseHlYRzVjZEZ4MFhIUmNkRngwYkdWMElHNWxlSFJDZEc0Z1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0NjalpHOW5jeUF1Ym1WNGRDY3BPMXh5WEc1Y2NseHVYSFJjZEZ4MFhIUmNkR2xtSUNoamRYSnlaVzUwVUdGblpTQTlQVDBnY0dGblpVTnZkVzUwS1NCN1hISmNibHgwWEhSY2RGeDBYSFJjZEc1bGVIUkNkRzR1YzNSNWJHVXViM0JoWTJsMGVTQTlJQ2N3TGpVbk8xeHlYRzVjZEZ4MFhIUmNkRngwWEhSdVpYaDBRblJ1TG5OMGVXeGxMbkJ2YVc1MFpYSkZkbVZ1ZEhNZ1BTQW5ibTl1WlNjN1hISmNibHgwWEhSY2RGeDBYSFI5SUdWc2MyVWdlMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUnVaWGgwUW5SdUxuTjBlV3hsTG05d1lXTnBkSGtnUFNBbk1TYzdYSEpjYmx4MFhIUmNkRngwWEhSY2RHNWxlSFJDZEc0dWMzUjViR1V1Y0c5cGJuUmxja1YyWlc1MGN5QTlJQ2RoYkd3bk8xeHlYRzVjZEZ4MFhIUmNkRngwZlZ4eVhHNWNjbHh1WEhSY2RGeDBYSFJjZEd4bGRDQndjbVYyUW5SdUlEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkkyUnZaM01nTG5CeVpYWW5LVHRjY2x4dVhISmNibHgwWEhSY2RGeDBYSFJwWmlBb1kzVnljbVZ1ZEZCaFoyVWdQVDA5SURFcElIdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MGNISmxka0owYmk1emRIbHNaUzV2Y0dGamFYUjVJRDBnSnpBdU5TYzdYSEpjYmx4MFhIUmNkRngwWEhSY2RIQnlaWFpDZEc0dWMzUjViR1V1Y0c5cGJuUmxja1YyWlc1MGN5QTlJQ2R1YjI1bEp6dGNjbHh1WEhSY2RGeDBYSFJjZEgwZ1pXeHpaU0I3WEhKY2JseDBYSFJjZEZ4MFhIUmNkSEJ5WlhaQ2RHNHVjM1I1YkdVdWIzQmhZMmwwZVNBOUlDY3hKenRjY2x4dVhIUmNkRngwWEhSY2RGeDBjSEpsZGtKMGJpNXpkSGxzWlM1d2IybHVkR1Z5UlhabGJuUnpJRDBnSjJGc2JDYzdYSEpjYmx4MFhIUmNkRngwWEhSOVhISmNibHgwWEhSY2RGeDBmVnh5WEc1Y2NseHVYSFJjZEZ4MFhIUnBaaUFvWW5WMGRHOXVMbkJoY21WdWRFVnNaVzFsYm5RZ1BUMGdjR0ZuYVc1aGRHbHZia1ZzUTJGMGN5a2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MFpHbHpjR3hoZVZCaFoybHVZWFJsWkVsMFpXMXpLRnh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmpZWFJDYjNoQmNuSmhlU3hjY2x4dVhIUmNkRngwWEhSY2RGeDBZMkYwYzBKdmVDeGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFpXeGxiV1Z1ZEhOUGJsQmhaMlVzWEhKY2JseDBYSFJjZEZ4MFhIUmNkR04xY25KbGJuUlFZV2RsWEhKY2JseDBYSFJjZEZ4MFhIUXBPMXh5WEc1Y2NseHVYSFJjZEZ4MFhIUmNkR3hsZENCaFkzUnBkbVZDZEc1RFlYUWdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtGeHlYRzVjZEZ4MFhIUmNkRngwWEhRbkkyTmhkSE1nTG5CaFoybHVZWFJwYjI0dFluUnVMbUZqZEdsMlpTZGNjbHh1WEhSY2RGeDBYSFJjZENrN1hISmNibHh5WEc1Y2RGeDBYSFJjZEZ4MFlXTjBhWFpsUW5SdVEyRjBMbU5zWVhOelRHbHpkQzV5WlcxdmRtVW9KMkZqZEdsMlpTY3BPMXh5WEc1Y2NseHVYSFJjZEZ4MFhIUmNkR0oxZEhSdmJpNWpiR0Z6YzB4cGMzUXVZV1JrS0NkaFkzUnBkbVVuS1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwWEhSc1pYUWdibVY0ZEVKMGJpQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5TmpZWFJ6SUM1dVpYaDBKeWs3WEhKY2JseHlYRzVjZEZ4MFhIUmNkRngwYVdZZ0tHTjFjbkpsYm5SUVlXZGxJRDA5UFNCd1lXZGxRMjkxYm5RcElIdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MGJtVjRkRUowYmk1emRIbHNaUzV2Y0dGamFYUjVJRDBnSnpBdU5TYzdYSEpjYmx4MFhIUmNkRngwWEhSY2RHNWxlSFJDZEc0dWMzUjViR1V1Y0c5cGJuUmxja1YyWlc1MGN5QTlJQ2R1YjI1bEp6dGNjbHh1WEhSY2RGeDBYSFJjZEgwZ1pXeHpaU0I3WEhKY2JseDBYSFJjZEZ4MFhIUmNkRzVsZUhSQ2RHNHVjM1I1YkdVdWIzQmhZMmwwZVNBOUlDY3hKenRjY2x4dVhIUmNkRngwWEhSY2RGeDBibVY0ZEVKMGJpNXpkSGxzWlM1d2IybHVkR1Z5UlhabGJuUnpJRDBnSjJGc2JDYzdYSEpjYmx4MFhIUmNkRngwWEhSOVhISmNibHh5WEc1Y2RGeDBYSFJjZEZ4MGJHVjBJSEJ5WlhaQ2RHNGdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtDY2pZMkYwY3lBdWNISmxkaWNwTzF4eVhHNWNjbHh1WEhSY2RGeDBYSFJjZEdsbUlDaGpkWEp5Wlc1MFVHRm5aU0E5UFQwZ01Ta2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUndjbVYyUW5SdUxuTjBlV3hsTG05d1lXTnBkSGtnUFNBbk1DNDFKenRjY2x4dVhIUmNkRngwWEhSY2RGeDBjSEpsZGtKMGJpNXpkSGxzWlM1d2IybHVkR1Z5UlhabGJuUnpJRDBnSjI1dmJtVW5PMXh5WEc1Y2RGeDBYSFJjZEZ4MGZTQmxiSE5sSUh0Y2NseHVYSFJjZEZ4MFhIUmNkRngwY0hKbGRrSjBiaTV6ZEhsc1pTNXZjR0ZqYVhSNUlEMGdKekVuTzF4eVhHNWNkRngwWEhSY2RGeDBYSFJ3Y21WMlFuUnVMbk4wZVd4bExuQnZhVzUwWlhKRmRtVnVkSE1nUFNBbllXeHNKenRjY2x4dVhIUmNkRngwWEhSY2RIMWNjbHh1WEhSY2RGeDBYSFI5WEhKY2JseDBYSFJjZEgwcE8xeHlYRzVjY2x4dVhIUmNkRngwY21WMGRYSnVJR0oxZEhSdmJqdGNjbHh1WEhSY2RIMWNjbHh1WEhKY2JseDBYSFJqYjI1emRDQmxlSEJoYm1SelRXOXlaU0E5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSkJiR3dvSjF0bGVIQmhibVF0Ylc5eVpWMG5LVHRjY2x4dVhISmNibHgwWEhSbWRXNWpkR2x2YmlCbGVIQmhibVFvS1NCN1hISmNibHgwWEhSY2RHTnZibk4wSUhOb2IzZERiMjUwWlc1MElEMGdaRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkRUo1U1dRb2RHaHBjeTVrWVhSaGMyVjBMblJoY21kbGRDazdYSEpjYmx4MFhIUmNkR2xtSUNoemFHOTNRMjl1ZEdWdWRDNWpiR0Z6YzB4cGMzUXVZMjl1ZEdGcGJuTW9KMkZqZEdsMlpTY3BLU0I3WEhKY2JseDBYSFJjZEZ4MGRHaHBjeTVwYm01bGNraFVUVXdnUFNCMGFHbHpMbVJoZEdGelpYUXVjMmh2ZDNSbGVIUTdYSEpjYmx4MFhIUmNkSDBnWld4elpTQjdYSEpjYmx4MFhIUmNkRngwZEdocGN5NXBibTVsY2toVVRVd2dQU0IwYUdsekxtUmhkR0Z6WlhRdWFHbGtaWFJsZUhRN1hISmNibHgwWEhSY2RIMWNjbHh1WEhKY2JseDBYSFJjZEhOb2IzZERiMjUwWlc1MExtTnNZWE56VEdsemRDNTBiMmRuYkdVb0oyRmpkR2wyWlNjcE8xeHlYRzVjZEZ4MFhIUnBaaUFvYzJodmQwTnZiblJsYm5RdVkyeGhjM05NYVhOMExtTnZiblJoYVc1ektDZGhZM1JwZG1VbktTa2dlMXh5WEc1Y2RGeDBYSFJjZEhOb2IzZERiMjUwWlc1MExuTjBlV3hsTG0xaGVFaGxhV2RvZENBOUlITm9iM2REYjI1MFpXNTBMbk5qY205c2JFaGxhV2RvZENBcklDZHdlQ2M3WEhKY2JseDBYSFJjZEgwZ1pXeHpaU0I3WEhKY2JseDBYSFJjZEZ4MGMyaHZkME52Ym5SbGJuUXVjM1I1YkdVdWJXRjRTR1ZwWjJoMElEMGdNakFnS3lBbmNIZ25PMXh5WEc1Y2RGeDBYSFI5WEhKY2JseDBYSFI5WEhKY2JseHlYRzVjZEZ4MGFXWWdLR1J2WjNOQ2IzZ3BJSHRjY2x4dVhIUmNkRngwWkdsemNHeGhlVkJoWjJsdVlYUmxaRWwwWlcxektHUnZaMEp2ZUVGeWNtRjVMQ0JrYjJkelFtOTRMQ0JsYkdWdFpXNTBjMDl1VUdGblpTd2dZM1Z5Y21WdWRGQmhaMlVwTzF4eVhHNWNkRngwWEhSa2FYTndiR0Y1VUdGbmFXNWhkR2x2Ymloa2IyZENiM2hCY25KaGVTd2djR0ZuYVc1aGRHbHZia1ZzUkc5bmN5d2daV3hsYldWdWRITlBibEJoWjJVcE8xeHlYRzVjY2x4dVhIUmNkRngwWlhod1lXNWtjMDF2Y21VdVptOXlSV0ZqYUNnb1luUnVLU0E5UGlCN1hISmNibHgwWEhSY2RGeDBZblJ1TG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjJOc2FXTnJKeXdnWlhod1lXNWtLVHRjY2x4dVhIUmNkRngwZlNrN1hISmNibHgwWEhSOVhISmNibHh5WEc1Y2RGeDBhV1lnS0dOaGRITkNiM2dwSUh0Y2NseHVYSFJjZEZ4MFpHbHpjR3hoZVZCaFoybHVZWFJsWkVsMFpXMXpLR05oZEVKdmVFRnljbUY1TENCallYUnpRbTk0TENCbGJHVnRaVzUwYzA5dVVHRm5aU3dnWTNWeWNtVnVkRkJoWjJVcE8xeHlYRzVjZEZ4MFhIUmthWE53YkdGNVVHRm5hVzVoZEdsdmJpaGpZWFJDYjNoQmNuSmhlU3dnY0dGbmFXNWhkR2x2YmtWc1EyRjBjeXdnWld4bGJXVnVkSE5QYmxCaFoyVXBPMXh5WEc1Y2NseHVYSFJjZEZ4MFpYaHdZVzVrYzAxdmNtVXVabTl5UldGamFDZ29ZblJ1S1NBOVBpQjdYSEpjYmx4MFhIUmNkRngwWW5SdUxtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0oyTnNhV05ySnl3Z1pYaHdZVzVrS1R0Y2NseHVYSFJjZEZ4MGZTazdYSEpjYmx4MFhIUjlYSEpjYmx4MGZWeHlYRzVjY2x4dVhIUnBaaUFvWVc1cGJXRnNjMUJoWjJWektTQjdYSEpjYmx4MFhIUW9ablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNkRngwWEhSa2FYTndiR0Y1UVc1cGJXRnNjeWdwTzF4eVhHNWNkRngwZlNrb0tUdGNjbHh1WEhSOVhISmNibjBwTzF4eVhHNGlMQ0prYjJOMWJXVnVkQzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RFVDAxRGIyNTBaVzUwVEc5aFpHVmtKeXdnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjZEM4dklHWnZjbTBnZG1Gc2FXUmhkR2x2Ymx4eVhHNWNkR052Ym5OMElHWnZjbTBnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2duWTI5dWRHRmpkQzFtYjNKdEp5azdYSEpjYmx4MFkyOXVjM1FnYm1GdFpTQTlJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJDZVVsa0tDZHVZVzFsSnlrN1hISmNibHgwWTI5dWMzUWdaVzFoYVd3Z1BTQmtiMk4xYldWdWRDNW5aWFJGYkdWdFpXNTBRbmxKWkNnblpXMWhhV3duS1R0Y2NseHVYSFJqYjI1emRDQnRaWE56WVdkbElEMGdaRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkRUo1U1dRb0oyMWxjM05oWjJVbktUdGNjbHh1WEhSamIyNXpkQ0JtYjNKdFFuUnVJRDBnWkc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEVKNVNXUW9KMlp2Y20wdFluUnVKeWs3WEhKY2JseHlYRzVjZEdsbUlDaG1iM0p0S1NCN1hISmNibHgwWEhSYlhISmNibHgwWEhSY2RDZGpiR2xqYXljc1hISmNibHgwWEhSY2RDZHZiblJ2ZFdOb2MzUmhjblFuTEZ4eVhHNWNkRngwWEhRbmJXOTFjMlZ2ZG1WeUp5eGNjbHh1WEhSY2RGeDBKMnRsZVdSdmQyNG5MRnh5WEc1Y2RGeDBYSFFuYTJWNWNISmxjM01uTEZ4eVhHNWNkRngwWEhRbmRHOTFZMmh6ZEdGeWRDY3NYSEpjYmx4MFhIUmNkQ2QwYjNWamFHMXZkbVVuTEZ4eVhHNWNkRngwWFM1bWIzSkZZV05vS0Z4eVhHNWNkRngwWEhRb1pYWmxiblFwSUQwK1hISmNibHgwWEhSY2RGeDBaRzlqZFcxbGJuUXVZV1JrUlhabGJuUk1hWE4wWlc1bGNpaGxkbVZ1ZEN3Z0tDa2dQVDRnZTF4eVhHNWNkRngwWEhSY2RGeDBhV1lnS0dOb1pXTnJTVzV3ZFhSektDa2dQVDA5SUdaaGJITmxLU0I3WEhKY2JseDBYSFJjZEZ4MFhIUmNkR1p2Y20xQ2RHNHVaR2x6WVdKc1pXUWdQU0IwY25WbE8xeHlYRzVjZEZ4MFhIUmNkRngwZlNCbGJITmxJSHRjY2x4dVhIUmNkRngwWEhSY2RGeDBabTl5YlVKMGJpNWthWE5oWW14bFpDQTlJR1poYkhObE8xeHlYRzVjZEZ4MFhIUmNkRngwZlZ4eVhHNWNkRngwWEhSY2RIMHBMRnh5WEc1Y2RGeDBYSFJtWVd4elpWeHlYRzVjZEZ4MEtUdGNjbHh1WEhKY2JseDBYSFJtZFc1amRHbHZiaUJqYUdWamEwbHVjSFYwY3lncElIdGNjbHh1WEhSY2RGeDBZMjl1YzNRZ2JtRnRaVlpoYkhWbElEMGdibUZ0WlM1MllXeDFaUzUwY21sdEtDazdYSEpjYmx4MFhIUmNkR052Ym5OMElHVnRZV2xzVm1Gc2RXVWdQU0JsYldGcGJDNTJZV3gxWlM1MGNtbHRLQ2s3WEhKY2JseDBYSFJjZEdOdmJuTjBJRzFsYzNOaFoyVldZV3gxWlNBOUlHMWxjM05oWjJVdWRtRnNkV1V1ZEhKcGJTZ3BPMXh5WEc1Y2NseHVYSFJjZEZ4MGFXWWdLRzVoYldWV1lXeDFaU0E5UFQwZ0p5Y3BJSHRjY2x4dVhIUmNkRngwWEhSelpYUkZjbkp2Y2tadmNpaHVZVzFsTENBblVHeGxZWE5sSUdWdWRHVnlJSGx2ZFhJZ1puVnNiQ0J1WVcxbEp5azdYSEpjYmx4MFhIUmNkSDBnWld4elpTQjdYSEpjYmx4MFhIUmNkRngwYzJWMFUzVmpZMlZ6YzBadmNpaHVZVzFsS1R0Y2NseHVYSFJjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkRngwYVdZZ0tHVnRZV2xzVm1Gc2RXVWdQVDA5SUNjbktTQjdYSEpjYmx4MFhIUmNkRngwYzJWMFJYSnliM0pHYjNJb1pXMWhhV3dzSUNkUWJHVmhjMlVnWlc1MFpYSWdlVzkxY2lCbGJXRnBiQ0JoWkdSeVpYTnpKeWs3WEhKY2JseDBYSFJjZEgwZ1pXeHpaU0JwWmlBb0lXVnRZV2xzU1hOV1lXeHBaQ2hsYldGcGJGWmhiSFZsS1NrZ2UxeHlYRzVjZEZ4MFhIUmNkSE5sZEVWeWNtOXlSbTl5S0dWdFlXbHNMQ0FuUlcxaGFXd2dhWE1nYm05MElIWmhiR2xrSnlrN1hISmNibHgwWEhSY2RIMGdaV3h6WlNCN1hISmNibHgwWEhSY2RGeDBjMlYwVTNWalkyVnpjMFp2Y2lobGJXRnBiQ2s3WEhKY2JseDBYSFJjZEgxY2NseHVYSEpjYmx4MFhIUmNkR2xtSUNodFpYTnpZV2RsVm1Gc2RXVWdQVDA5SUNjbktTQjdYSEpjYmx4MFhIUmNkRngwYzJWMFJYSnliM0pHYjNJb2JXVnpjMkZuWlN3Z0oxQnNaV0Z6WlNCbGJuUmxjaUI1YjNWeUlHMWxjM05oWjJVbktUdGNjbHh1WEhSY2RGeDBmU0JsYkhObElIdGNjbHh1WEhSY2RGeDBYSFJ6WlhSVGRXTmpaWE56Um05eUtHMWxjM05oWjJVcE8xeHlYRzVjZEZ4MFhIUjlYSEpjYmx4eVhHNWNkRngwWEhScFppQW9YSEpjYmx4MFhIUmNkRngwYm1GdFpWWmhiSFZsSUQwOVBTQW5KeUI4ZkZ4eVhHNWNkRngwWEhSY2RHVnRZV2xzVm1Gc2RXVWdQVDA5SUNjbklIeDhYSEpjYmx4MFhIUmNkRngwYldWemMyRm5aVlpoYkhWbElEMDlQU0FuSnlCOGZGeHlYRzVjZEZ4MFhIUmNkQ0ZsYldGcGJFbHpWbUZzYVdRb1pXMWhhV3hXWVd4MVpTbGNjbHh1WEhSY2RGeDBLU0I3WEhKY2JseDBYSFJjZEZ4MGNtVjBkWEp1SUdaaGJITmxPMXh5WEc1Y2RGeDBYSFI5SUdWc2MyVWdlMXh5WEc1Y2RGeDBYSFJjZEhKbGRIVnliaUIwY25WbE8xeHlYRzVjZEZ4MFhIUjlYSEpjYmx4MFhIUjlYSEpjYmx4eVhHNWNkRngwWm5WdVkzUnBiMjRnYzJWMFJYSnliM0pHYjNJb2FXNXdkWFFzSUcxbGMzTmhaMlVwSUh0Y2NseHVYSFJjZEZ4MFkyOXVjM1FnWm05eWJTQTlJR2x1Y0hWMExuQmhjbVZ1ZEVWc1pXMWxiblE3WEhKY2JseDBYSFJjZEdOdmJuTjBJSE50WVd4c0lEMGdabTl5YlM1eGRXVnllVk5sYkdWamRHOXlLQ2R6YldGc2JDY3BPMXh5WEc1Y2NseHVYSFJjZEZ4MGMyMWhiR3d1YVc1dVpYSlVaWGgwSUQwZ2JXVnpjMkZuWlR0Y2NseHVYSFJjZEZ4MFptOXliUzVqYkdGemMwNWhiV1VnUFNBblptOXliVjlmWjNKdmRYQWdaWEp5YjNJbk8xeHlYRzVjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkR1oxYm1OMGFXOXVJSE5sZEZOMVkyTmxjM05HYjNJb2FXNXdkWFFwSUh0Y2NseHVYSFJjZEZ4MFkyOXVjM1FnWm05eWJTQTlJR2x1Y0hWMExuQmhjbVZ1ZEVWc1pXMWxiblE3WEhKY2JseDBYSFJjZEdadmNtMHVZMnhoYzNOT1lXMWxJRDBnSjJadmNtMWZYMmR5YjNWd0lITjFZMk5sYzNNbk8xeHlYRzVjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkR1oxYm1OMGFXOXVJR1Z0WVdsc1NYTldZV3hwWkNobGJXRnBiQ2tnZTF4eVhHNWNkRngwWEhSamIyNXpkQ0J5WlNBOUlDOWVLQ2hiWGp3K0tDbGNYRnRjWEYxY1hGeGNMaXc3T2x4Y2MwQmNJbDByS0Z4Y0xsdGVQRDRvS1Z4Y1cxeGNYVnhjWEZ3dUxEczZYRnh6UUZ3aVhTc3BLaWw4S0Z3aUxpdGNJaWtwUUNnb1hGeGJXekF0T1YxN01Td3pmVnhjTGxzd0xUbGRlekVzTTMxY1hDNWJNQzA1WFhzeExETjlYRnd1V3pBdE9WMTdNU3d6ZlYwcGZDZ29XMkV0ZWtFdFdseGNMVEF0T1YwclhGd3VLU3RiWVMxNlFTMWFYWHN5TEgwcEtTUXZMblJsYzNRb1hISmNibHgwWEhSY2RGeDBaVzFoYVd4Y2NseHVYSFJjZEZ4MEtUdGNjbHh1WEhKY2JseDBYSFJjZEhKbGRIVnliaUJ5WlR0Y2NseHVYSFJjZEgxY2NseHVYSFI5WEhKY2JuMHBPMXh5WEc0aUxDSmtiMk4xYldWdWRDNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZEVUMDFEYjI1MFpXNTBURzloWkdWa0p5d2dablZ1WTNScGIyNGdLQ2tnZTF4dVhIUjNhVzVrYjNjdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnbmJHOWhaQ2NzSUNobEtTQTlQaUI3WEc1Y2RGeDBZMjl1YzNRZ2NISmxiRzloWkNBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvSnk1d2NtVnNiMkZrSnlrN1hHNWNibHgwWEhSd2NtVnNiMkZrTG1Oc1lYTnpUR2x6ZEM1aFpHUW9KM0J5Wld4dllXUXRabWx1YVhOb1pXUW5LVHRjYmx4MGZTazdYRzVjYmx4MFkyOXVjM1FnWW5SdVUyTnliMnhzVkc5VWIzQWdQU0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDZ25ZblJ1VTJOeWIyeHNWRzlVYjNBbktUdGNibHgwWW5SdVUyTnliMnhzVkc5VWIzQXVZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25ZMnhwWTJzbkxDQW9aU2tnUFQ0Z2UxeHVYSFJjZEhkcGJtUnZkeTV6WTNKdmJHeFVieWg3WEc1Y2RGeDBYSFIwYjNBNklEQXNYRzVjZEZ4MFhIUnNaV1owT2lBd0xGeHVYSFJjZEZ4MFltVm9ZWFpwYjNJNklDZHpiVzl2ZEdnbkxGeHVYSFJjZEgwcE8xeHVYSFI5S1R0Y2JseHVYSFJqYjI1emRDQmxlSEJoYm1SelRXOXlaU0E5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSkJiR3dvSjF0bGVIQmhibVF0Ylc5eVpWMG5LVHRjYmx4dVhIUm1kVzVqZEdsdmJpQmxlSEJoYm1Rb0tTQjdYRzVjZEZ4MFkyOXVjM1FnYzJodmQwTnZiblJsYm5RZ1BTQmtiMk4xYldWdWRDNW5aWFJGYkdWdFpXNTBRbmxKWkNoMGFHbHpMbVJoZEdGelpYUXVkR0Z5WjJWMEtUdGNibHh1WEhSY2RHbG1JQ2h6YUc5M1EyOXVkR1Z1ZEM1amJHRnpjMHhwYzNRdVkyOXVkR0ZwYm5Nb0oyRmpkR2wyWlNjcEtTQjdYRzVjZEZ4MFhIUjBhR2x6TG1sdWJtVnlTRlJOVENBOUlIUm9hWE11WkdGMFlYTmxkQzV6YUc5M2RHVjRkRHRjYmx4MFhIUjlJR1ZzYzJVZ2UxeHVYSFJjZEZ4MGRHaHBjeTVwYm01bGNraFVUVXdnUFNCMGFHbHpMbVJoZEdGelpYUXVhR2xrWlhSbGVIUTdYRzVjZEZ4MGZWeHVYRzVjZEZ4MGMyaHZkME52Ym5SbGJuUXVZMnhoYzNOTWFYTjBMblJ2WjJkc1pTZ25ZV04wYVhabEp5azdYRzVjZEZ4MGFXWWdLSE5vYjNkRGIyNTBaVzUwTG1Oc1lYTnpUR2x6ZEM1amIyNTBZV2x1Y3lnbllXTjBhWFpsSnlrcElIdGNibHgwWEhSY2RITm9iM2REYjI1MFpXNTBMbk4wZVd4bExtMWhlRWhsYVdkb2RDQTlJSE5vYjNkRGIyNTBaVzUwTG5OamNtOXNiRWhsYVdkb2RDQXJJQ2R3ZUNjN1hHNWNkRngwZlNCbGJITmxJSHRjYmx4MFhIUmNkSE5vYjNkRGIyNTBaVzUwTG5OMGVXeGxMbTFoZUVobGFXZG9kQ0E5SUdBeU1uQjRZRHRjYmx4MFhIUjlYRzVjZEgxY2JseHVYSFJsZUhCaGJtUnpUVzl5WlM1bWIzSkZZV05vS0NoaWRHNHBJRDArSUh0Y2JseDBYSFJqYjI1emRDQmpiMjUwWVdsdVpYSklaV2xuYUhRZ1BWeHVYSFJjZEZ4MFluUnVMbkJoY21WdWRFVnNaVzFsYm5RdWNISmxkbWx2ZFhORmJHVnRaVzUwVTJsaWJHbHVaeTV2Wm1aelpYUklaV2xuYUhRN1hHNWNibHgwWEhSamIyNXpkQ0JsZUhCaGJtUkZiR1Z0Wlc1MFNHVnBaMmgwSUQxY2JseDBYSFJjZEdKMGJpNXdZWEpsYm5SRmJHVnRaVzUwTG5CeVpYWnBiM1Z6Uld4bGJXVnVkRk5wWW14cGJtY3VabWx5YzNSRmJHVnRaVzUwUTJocGJHUXViMlptYzJWMFNHVnBaMmgwTzF4dVhHNWNkRngwYVdZZ0tHTnZiblJoYVc1bGNraGxhV2RvZENBK1BTQmxlSEJoYm1SRmJHVnRaVzUwU0dWcFoyaDBLU0I3WEc1Y2RGeDBYSFJpZEc0dWMzUjViR1V1ZG1semFXSnBiR2wwZVNBOUlDZG9hV1JrWlc0bk8xeHVYSFJjZEZ4MFluUnVMbk4wZVd4bExtaGxhV2RvZENBOUlEQTdYRzVjZEZ4MGZWeHVYSFJjZEdKMGJpNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZGpiR2xqYXljc0lHVjRjR0Z1WkNrN1hHNWNkSDBwTzF4dWZTazdYRzRpTENKa2IyTjFiV1Z1ZEM1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkRVQwMURiMjUwWlc1MFRHOWhaR1ZrSnl3Z1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc1Y2RHTnZibk4wSUcxdlpHRnNRblJ1SUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZja0ZzYkNnbkxtMXZaR0ZzTFdKMGJpY3BPMXh5WEc1Y2RHTnZibk4wSUcxdlpHRnNSV3dnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2duYlc5a1lXd25LVHRjY2x4dVhIUmpiMjV6ZENCdGIyUmhiRUowYmtOc2IzTmxJRDBnWkc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEVKNVNXUW9KMk5zYjNObEp5azdYSEpjYmx4eVhHNWNkQzh2SUZOb2IzY2diVzlrWVd4Y2NseHVYSFJ0YjJSaGJFSjBiaTVtYjNKRllXTm9LQ2h0YjJSaGJDa2dQVDRnZTF4eVhHNWNkRngwYlc5a1lXd3VZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25ZMnhwWTJzbkxDQW9LU0E5UGlCdGIyUmhiRVZzTG1Oc1lYTnpUR2x6ZEM1aFpHUW9KM05vYjNjdGJXOWtZV3duS1NrN1hISmNibHgwZlNrN1hISmNibHh5WEc1Y2RDOHZJRWhwWkdVZ2JXOWtZV3hjY2x4dVhIUnRiMlJoYkVKMGJrTnNiM05sTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjJOc2FXTnJKeXdnS0NrZ1BUNWNjbHh1WEhSY2RHMXZaR0ZzUld3dVkyeGhjM05NYVhOMExuSmxiVzkyWlNnbmMyaHZkeTF0YjJSaGJDY3BYSEpjYmx4MEtUdGNjbHh1WEhKY2JseDBMeThnU0dsa1pTQnRiMlJoYkNCdmJpQnZkWFJ6YVdSbElHTnNhV05yWEhKY2JseDBkMmx1Wkc5M0xtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0oyTnNhV05ySnl3Z0tHVXBJRDArWEhKY2JseDBYSFJsTG5SaGNtZGxkQ0E5UFNCdGIyUmhiQ0EvSUcxdlpHRnNMbU5zWVhOelRHbHpkQzV5WlcxdmRtVW9KM05vYjNjdGJXOWtZV3duS1NBNklHWmhiSE5sWEhKY2JseDBLVHRjY2x4dWZTazdYSEpjYmlJc0ltUnZZM1Z0Wlc1MExtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0owUlBUVU52Ym5SbGJuUk1iMkZrWldRbkxDQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseDBZMjl1YzNRZ2JtRjJRMjl1ZEdGcGJtVnlJRDBnWkc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEVKNVNXUW9KMjVoZGkxamIyNTBZV2x1WlhJbktUdGNjbHh1WEhSamIyNXpkQ0J0Wlc1MVFuUnVJRDBnWkc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEVKNVNXUW9KMjFsYm5VdFluUnVKeWs3WEhKY2JseDBZMjl1YzNRZ2JtRjJUR2x6ZENBOUlHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0NkdVlYWXRiR2x6ZENjcE8xeHlYRzVjY2x4dVhIUjNhVzVrYjNjdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnbmMyTnliMnhzSnl3Z0tHVXBJRDArSUh0Y2NseHVYSFJjZEdsbUlDaGtiMk4xYldWdWRDNWtiMk4xYldWdWRFVnNaVzFsYm5RdWMyTnliMnhzVkc5d0lENGdNQ2tnZTF4eVhHNWNkRngwWEhSdVlYWkRiMjUwWVdsdVpYSXVZMnhoYzNOTWFYTjBMbUZrWkNnbmMzUnBZMnQ1SnlrN1hISmNibHgwWEhSY2RHSjBibE5qY205c2JGUnZWRzl3TG5OMGVXeGxMbTl3WVdOcGRIa2dQU0F4TzF4eVhHNWNkRngwZlNCbGJITmxJSHRjY2x4dVhIUmNkRngwYm1GMlEyOXVkR0ZwYm1WeUxtTnNZWE56VEdsemRDNXlaVzF2ZG1Vb0ozTjBhV05yZVNjcE8xeHlYRzVjZEZ4MFhIUmlkRzVUWTNKdmJHeFViMVJ2Y0M1emRIbHNaUzV2Y0dGamFYUjVJRDBnTUR0Y2NseHVYSFJjZEgxY2NseHVYSFI5S1R0Y2NseHVYSEpjYmx4MGJXVnVkVUowYmk1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkamJHbGpheWNzSUNobEtTQTlQaUI3WEhKY2JseDBYSFJ0Wlc1MVFuUnVMbU5zWVhOelRHbHpkQzUwYjJkbmJHVW9KMk5zYVdOclpXUW5LVHRjY2x4dVhIUmNkRzVoZGtOdmJuUmhhVzVsY2k1amJHRnpjMHhwYzNRdWRHOW5aMnhsS0NkdmRtVnliR0Y1SnlrN1hISmNibHgwWEhSdVlYWk1hWE4wTG1Oc1lYTnpUR2x6ZEM1MGIyZG5iR1VvSjNOb2IzY25LVHRjY2x4dVhIUjlLVHRjY2x4dWZTazdYSEpjYmlJc0ltUnZZM1Z0Wlc1MExtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0owUlBUVU52Ym5SbGJuUk1iMkZrWldRbkxDQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseDBMeThnWTJGeWIzVnpaV3hjY2x4dVhIUmpiMjV6ZENCallYSnZkWE5sYkNBOUlHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0NkallYSnZkWE5sYkNjcE8xeHlYRzVjZEdOdmJuTjBJR05oY205MWMyVnNWWEpzSUQwZ0p5NHZhbk12WTJGeWIzVnpaV3d1YW5OdmJpYzdYSEpjYmx4MFkyOXVjM1FnYkc5allXeERZWEp2ZFhObGJFcFRUMDRnUFNCeVpYRjFhWEpsS0NjdUwyTmhjbTkxYzJWc0xtcHpiMjRuS1R0Y2NseHVYSEpjYmx4MEx5b2dablZ1WTNScGIyNGdaMlYwVTJ4cFpHVnpSR0YwWVNncElIdGNjbHh1WEhSY2RISmxkSFZ5YmlCdVpYY2dVSEp2YldselpTZ29jbVZ6YjJ4MlpTd2djbVZxWldOMEtTQTlQaUI3WEhKY2JseDBYSFJjZEdabGRHTm9LR05oY205MWMyVnNWWEpzS1Z4eVhHNWNkRngwWEhSY2RDNTBhR1Z1S0NoeVpYTndLU0E5UGlCeVpYTndMbXB6YjI0b0tTbGNjbHh1WEhSY2RGeDBYSFF1ZEdobGJpZ29aR0YwWVNrZ1BUNGdjbVZ6YjJ4MlpTaGtZWFJoS1NsY2NseHVYSFJjZEZ4MFhIUXVZMkYwWTJnb0tHVnljaWtnUFQ0Z2NtVnFaV04wS0dWeWNpa3BPMXh5WEc1Y2RGeDBmU2s3WEhKY2JseDBmU0FxTDF4eVhHNWNjbHh1WEhSaGMzbHVZeUJtZFc1amRHbHZiaUJrYVhOd2JHRjVRMkZ5YjNWelpXd29LU0I3WEhKY2JseDBYSFF2S2lCamIyNXpkQ0JrWVhSaFRHbHpkQ0E5SUdGM1lXbDBJR2RsZEZOc2FXUmxjMFJoZEdFb0tUc2dLaTljY2x4dVhIUmNkR052Ym5OMElITnNhV1JsYzBGeWNtRjVJRDBnYkc5allXeERZWEp2ZFhObGJFcFRUMDR1YzJ4cFpHVnpPMXh5WEc1Y2NseHVYSFJjZEhOc2FXUmxjMEZ5Y21GNUxtWnZja1ZoWTJnb0tITnNhV1JsTENCemJHbGtaVTUxYldKbGNpa2dQVDRnZTF4eVhHNWNkRngwWEhSamIyNXpkQ0I3SUhScGRHeGxMQ0IwZVhCbExDQmpiMjUwWlc1MExDQnBiV0ZuWlN3Z2FXMWhaMlZVWVdJc0lHbHRZV2RsVFc5aUlIMGdQU0J6Ykdsa1pUdGNjbHh1WEhKY2JseDBYSFJjZEc1bGQxTnNhV1JsSUQwZ1pHOWpkVzFsYm5RdVkzSmxZWFJsUld4bGJXVnVkQ2duWkdsMkp5azdYSEpjYmx4MFhIUmNkRzVsZDFOc2FXUmxMbU5zWVhOelRHbHpkQzVoWkdRb0oyTmhjbTkxYzJWc1gxOXpiR2xrWlNjcE8xeHlYRzVjY2x4dVhIUmNkRngwYm1WM1UyeHBaR1V1YVc1dVpYSklWRTFNSUQwZ1lGeHlYRzVjZEZ4MFhIUmNkRngwWEhROFpHbDJJR05zWVhOelBWd2lZMkZ5YjNWelpXeGZYMmx0WVdkbExXTnZiblJoYVc1bGNsd2lQbHh5WEc1Y2RGeDBYSFJjZEZ4MFhIUThjR2xqZEhWeVpTQmpiR0Z6Y3oxY0ltTmhjbTkxYzJWc1gxOXBiV0ZuWlMxd2FXTjBkWEpsWENJK1hISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFBITnZkWEpqWlNCdFpXUnBZVDFjSWlodFlYZ3RkMmxrZEdnNk5UazVjSGdwWENJZ2MzSmpjMlYwUFZ3aUpIdHBiV0ZuWlUxdlluMWNJajVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWEhROGMyOTFjbU5sSUcxbFpHbGhQVndpS0cxcGJpMTNhV1IwYURvMk1EQndlQ2xjSWlCemNtTnpaWFE5WENJa2UybHRZV2RsZlZ3aVBseDBYSFJjZEZ4MFhIUmNkRngwWEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwUEdsdFp5QnpjbU05WENJa2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhSY2RGeDBkMmx1Wkc5M0xtbHVibVZ5VjJsa2RHZ2dQajBnTmpBd0lEOGdhVzFoWjJVZ09pQnBiV0ZuWlUxdllseHlYRzVjZEZ4MFhIUmNkRngwWEhSY2RIMWNJaUJzYjJGa2FXNW5QVndpYkdGNmVWd2lJR0ZzZEQxY0lpUjdkR2wwYkdWOVhDSXZQbHh5WEc1Y2RGeDBYSFJjZEZ4MFhIUThMM0JwWTNSMWNtVStYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBYSEpjYmx4MFhIUmNkRngwWEhSY2REd3ZaR2wyUGx4eVhHNWNkRngwWEhSY2RGeDBYSFE4WkdsMklHTnNZWE56UFZ3aVkyRnliM1Z6Wld4ZlgyTnZiblJsYm5SY0lqNWNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUThhREVnWTJ4aGMzTTlYQ0pqWVhKdmRYTmxiRjlmZEdsMGJHVmNJajRrZTNScGRHeGxmVHd2YURFK1hISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFBIQWdZMnhoYzNNOVhDSmpZWEp2ZFhObGJGOWZaR1Z6WTF3aVBpUjdZMjl1ZEdWdWRIMDhMM0ErWEhKY2JseDBYSFJjZEZ4MFhIUmNkRHd2WkdsMlBseHlYRzVjZEZ4MFhIUmdPMXh5WEc1Y2NseHVYSFJjZEZ4MFkyRnliM1Z6Wld3dVlYQndaVzVrUTJocGJHUW9ibVYzVTJ4cFpHVXBPMXh5WEc1Y2NseHVYSFJjZEZ4MGFXWWdLSE5zYVdSbFRuVnRZbVZ5SUQwOVBTQXdLU0I3WEhKY2JseDBYSFJjZEZ4MFptbHljM1JUYkdsa1pTQTlJRzVsZDFOc2FXUmxPMXh5WEc1Y2RGeDBYSFJjZEc1bGQxTnNhV1JsTG1Oc1lYTnpUR2x6ZEM1aFpHUW9KMkZqZEdsMlpTY3BPMXh5WEc1Y2RGeDBYSFI5SUdWc2MyVWdhV1lnS0hOc2FXUmxUblZ0WW1WeUlDc2dNU0E5UFQwZ2JHOWpZV3hEWVhKdmRYTmxiRXBUVDA0dWMyeHBaR1Z6TG14bGJtZDBhQ2tnZTF4eVhHNWNkRngwWEhSY2RHeGhjM1JUYkdsa1pTQTlJRzVsZDFOc2FXUmxPMXh5WEc1Y2RGeDBYSFI5WEhKY2JseDBYSFI5S1R0Y2NseHVYSEpjYmx4MFhIUnVaWGgwVTJ4cFpHVW9LVHRjY2x4dVhIUmNkSEJ5WlhacGIzVnpVMnhwWkdVb0tUdGNjbHh1WEhSOVhISmNibHh5WEc1Y2RHWjFibU4wYVc5dUlHNWxlSFJUYkdsa1pTZ3BJSHRjY2x4dVhIUmNkR052Ym5OMElHNWxlSFJDZEc0Z1BTQmtiMk4xYldWdWRDNW5aWFJGYkdWdFpXNTBRbmxKWkNnbmJtVjRkQ2NwTzF4eVhHNWNjbHh1WEhSY2RHNWxlSFJDZEc0dVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblkyeHBZMnNuTENBb1pTa2dQVDRnZTF4eVhHNWNkRngwWEhSamIyNXpkQ0JoWTNScGRtVlRiR2xrWlNBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvSnk1allYSnZkWE5sYkY5ZmMyeHBaR1V1WVdOMGFYWmxKeWs3WEhKY2JseHlYRzVjZEZ4MFhIUnNaWFFnYm1WNGRGTnBZbXhwYm1jZ1BTQmhZM1JwZG1WVGJHbGtaUzV1WlhoMFJXeGxiV1Z1ZEZOcFlteHBibWM3WEhKY2JseHlYRzVjZEZ4MFhIUnBaaUFvYm1WNGRGTnBZbXhwYm1jZ1BUMGdiblZzYkNrZ2UxeHlYRzVjZEZ4MFhIUmNkRzVsZUhSVGFXSnNhVzVuSUQwZ1lXTjBhWFpsVTJ4cFpHVTdYSEpjYmx4MFhIUmNkSDFjY2x4dVhISmNibHgwWEhSY2RHbG1JQ2h1WlhoMFUybGliR2x1Wnk1amJHRnpjMHhwYzNRdVkyOXVkR0ZwYm5Nb0oyTmhjbTkxYzJWc1gxOXpiR2xrWlNjcEtTQjdYSEpjYmx4MFhIUmNkRngwWVdOMGFYWmxVMnhwWkdVdVkyeGhjM05NYVhOMExuSmxiVzkyWlNnbllXTjBhWFpsSnlrN1hISmNibHgwWEhSY2RGeDBibVY0ZEZOcFlteHBibWN1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25ZV04wYVhabEp5azdYSEpjYmx4MFhIUmNkSDFjY2x4dVhIUmNkSDBwTzF4eVhHNWNkSDFjY2x4dVhISmNibHgwWm5WdVkzUnBiMjRnY0hKbGRtbHZkWE5UYkdsa1pTZ3BJSHRjY2x4dVhIUmNkR052Ym5OMElIQnlaWFpDZEc0Z1BTQmtiMk4xYldWdWRDNW5aWFJGYkdWdFpXNTBRbmxKWkNnbmNISmxkaWNwTzF4eVhHNWNjbHh1WEhSY2RIQnlaWFpDZEc0dVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblkyeHBZMnNuTENBb1pTa2dQVDRnZTF4eVhHNWNkRngwWEhSamIyNXpkQ0JoWTNScGRtVlRiR2xrWlNBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvSnk1allYSnZkWE5sYkY5ZmMyeHBaR1V1WVdOMGFYWmxKeWs3WEhKY2JseHlYRzVjZEZ4MFhIUnNaWFFnYm1WNGRGTnBZbXhwYm1jZ1BTQmhZM1JwZG1WVGJHbGtaUzV3Y21WMmFXOTFjMFZzWlcxbGJuUlRhV0pzYVc1bk8xeHlYRzVjY2x4dVhIUmNkRngwYVdZZ0tHNWxlSFJUYVdKc2FXNW5JRDA5SUc1MWJHd3BJSHRjY2x4dVhIUmNkRngwWEhSdVpYaDBVMmxpYkdsdVp5QTlJR0ZqZEdsMlpWTnNhV1JsTzF4eVhHNWNkRngwWEhSOVhISmNibHh5WEc1Y2RGeDBYSFJwWmlBb2JtVjRkRk5wWW14cGJtY3VZMnhoYzNOTWFYTjBMbU52Ym5SaGFXNXpLQ2RqWVhKdmRYTmxiRjlmYzJ4cFpHVW5LU2tnZTF4eVhHNWNkRngwWEhSY2RHRmpkR2wyWlZOc2FXUmxMbU5zWVhOelRHbHpkQzV5WlcxdmRtVW9KMkZqZEdsMlpTY3BPMXh5WEc1Y2RGeDBYSFJjZEc1bGVIUlRhV0pzYVc1bkxtTnNZWE56VEdsemRDNWhaR1FvSjJGamRHbDJaU2NwTzF4eVhHNWNkRngwWEhSOVhISmNibHgwWEhSOUtUdGNjbHh1WEhSOVhISmNibHh5WEc1Y2RHbG1JQ2hqWVhKdmRYTmxiQ0FoUFQwZ2JuVnNiQ2tnZTF4eVhHNWNkRngwS0daMWJtTjBhVzl1SUNncElIdGNjbHh1WEhSY2RGeDBaR2x6Y0d4aGVVTmhjbTkxYzJWc0tDazdYSEpjYmx4MFhIUjlLU2dwTzF4eVhHNWNkSDFjY2x4dWZTazdYSEpjYmlJc0luZHBibVJ2ZHk1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkRVQwMURiMjUwWlc1MFRHOWhaR1ZrSnl3Z1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc1Y2RDOHZJSFJoWW5OY2NseHVYSFJqYjI1emRDQjBZV0pNYVhOMFFuUnVJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNrRnNiQ2duTG5SaFltTmpiM0prYVc5dVgxOXNhWE4wTFdKMGJpY3BPMXh5WEc1Y2RHTnZibk4wSUhSaFluTWdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eVFXeHNLQ2N1ZEdGaVkyTnZjbVJwYjI1ZlgyTnZiblJoYVc1bGNpY3BPMXh5WEc1Y2RHTnZibk4wSUhSaFltTmpiM0prYVc5dVRHbHpkQ0E5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2QwWVdKalkyOXlaR2x2Ymkxc2FYTjBKeWs3WEhKY2JseDBZMjl1YzNRZ2RHRmljME52Ym5SbGJuUWdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eVFXeHNLQ2N1ZEdGaVkyTnZjbVJwYjI1ZlgzUmhZaTFwYm01bGNpY3BPMXh5WEc1Y2RHTnZibk4wSUhSaFltTmpiM0prYVc5dUlEMGdaRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkRUo1U1dRb0ozUmhZbU5qYjNKa2FXOXVKeWs3WEhKY2JseHlYRzVjZEdaMWJtTjBhVzl1SUdGamRHbDJZWFJsVkdGaWN5Z3BJSHRjY2x4dVhIUmNkSFJoWWt4cGMzUkNkRzR1Wm05eVJXRmphQ2dvZEdGaUtTQTlQaUI3WEhKY2JseDBYSFJjZEhSaFlpNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZGpiR2xqYXljc0lDaGxLU0E5UGlCN1hISmNibHgwWEhSY2RGeDBZMjl1YzNRZ2RHRmlUbUYySUQwZ2RHRmlMbkJoY21WdWRFVnNaVzFsYm5RN1hISmNibHgwWEhSY2RGeDBZMjl1YzNRZ2RHRmljME52Ym5SaGFXNWxjaUE5SUhSaFlrNWhkaTV3WVhKbGJuUkZiR1Z0Wlc1MExuQmhjbVZ1ZEVWc1pXMWxiblE3WEhKY2JseDBYSFJjZEZ4MFkyOXVjM1FnZEdGaVRuVnRZbVZ5SUQwZ2RHRmlMbVJoZEdGelpYUXVabTl5VkdGaU8xeHlYRzVjZEZ4MFhIUmNkR052Ym5OMElIUmhZbFJ2UVdOMGFYWmhkR1VnUFNCMFlXSnpRMjl1ZEdGcGJtVnlMbkYxWlhKNVUyVnNaV04wYjNJb1hISmNibHgwWEhSY2RGeDBYSFJnTG5SaFltTmpiM0prYVc5dVgxOTBZV0piWkdGMFlTMTBZV0k5WENJa2UzUmhZazUxYldKbGNuMWNJbDFnWEhKY2JseDBYSFJjZEZ4MEtUdGNjbHh1WEhKY2JseDBYSFJjZEZ4MGRHRmlUbUYyTG5GMVpYSjVVMlZzWldOMGIzSkJiR3dvSnk1MFlXSmpZMjl5WkdsdmJsOWZiR2x6ZEMxaWRHNG5LUzVtYjNKRllXTm9LQ2hpZEc0cElEMCtJSHRjY2x4dVhIUmNkRngwWEhSY2RHSjBiaTVqYkdGemMweHBjM1F1Y21WdGIzWmxLQ2RqZFhKeVpXNTBKeWs3WEhKY2JseDBYSFJjZEZ4MGZTazdYSEpjYmx4eVhHNWNkRngwWEhSY2RIUmhZbk5EYjI1MFlXbHVaWEl1Y1hWbGNubFRaV3hsWTNSdmNrRnNiQ2duTG5SaFltTmpiM0prYVc5dVgxOTBZV0luS1M1bWIzSkZZV05vS0NoMFlXSXBJRDArSUh0Y2NseHVYSFJjZEZ4MFhIUmNkSFJoWWk1amJHRnpjMHhwYzNRdWNtVnRiM1psS0NkamRYSnlaVzUwSnlrN1hISmNibHgwWEhSY2RGeDBmU2s3WEhKY2JseHlYRzVjZEZ4MFhIUmNkSFJoWWk1amJHRnpjMHhwYzNRdVlXUmtLQ2RqZFhKeVpXNTBKeWs3WEhKY2JseDBYSFJjZEZ4MGRHRmlWRzlCWTNScGRtRjBaUzVqYkdGemMweHBjM1F1WVdSa0tDZGpkWEp5Wlc1MEp5azdYSEpjYmx4eVhHNWNkRngwWEhSY2RHbG1JQ2gzYVc1a2IzY3VhVzV1WlhKWGFXUjBhQ0ErUFNBMk1EQXBJSHRjY2x4dVhIUmNkRngwWEhSY2RIUmhZbk5EYjI1MFpXNTBMbVp2Y2tWaFkyZ29LSFJoWW5NcElEMCtJSHRjY2x4dVhIUmNkRngwWEhSY2RGeDBkR0ZpY3k1emRIbHNaUzV0WVhoSVpXbG5hSFFnUFNCMFlXSnpMbk5qY205c2JFaGxhV2RvZENBcklDZHdlQ2M3WEhKY2JseDBYSFJjZEZ4MFhIUjlLVHRjY2x4dVhIUmNkRngwWEhSOVhISmNibHgwWEhSY2RIMHBPMXh5WEc1Y2RGeDBmU2s3WEhKY2JseHlYRzVjZEZ4MGFXWWdLSFJoWW1OamIzSmthVzl1VEdsemRDa2dlMXh5WEc1Y2RGeDBYSFIwWVdKekxtWnZja1ZoWTJnb0tIUmhZaWtnUFQ0Z2UxeHlYRzVjZEZ4MFhIUmNkSFJoWWk1eGRXVnllVk5sYkdWamRHOXlLQ2N1ZEdGaVkyTnZjbVJwYjI1ZlgyeHBjM1FnTG5SaFltTmpiM0prYVc5dVgxOWlkRzRuS1M1amJHbGpheWdwTzF4eVhHNWNkRngwWEhSOUtUdGNjbHh1WEhSY2RIMWNjbHh1WEhSOVhISmNibHh5WEc1Y2RDOHZMeTh2SUdGalkyOXlaR2x2Ymx4eVhHNWNkR052Ym5OMElHRmpZMjl5WkdsdmJrSjBiaUE5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSkJiR3dvSnk1aFkyTnZjbVJwYjI1ZlgyeHBjM1F0WW5SdUp5azdYSEpjYmx4eVhHNWNkR1oxYm1OMGFXOXVJR0ZqZEdsMllYUmxRV05qYjNKa2FXOXVLQ2tnZTF4eVhHNWNkRngwWVdOamIzSmthVzl1UW5SdUxtWnZja1ZoWTJnb0tHSjBiaWtnUFQ0Z2UxeHlYRzVjZEZ4MFhIUmlkRzR1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduWTJ4cFkyc25MQ0FvS1NBOVBpQjdYSEpjYmx4MFhIUmNkRngwTHk4Z1kyaGxZMnNnWm05eUlHOXdaVzRnWVdOamIzSmthVzl1WEhKY2JseDBYSFJjZEZ4MFkyOXVjM1FnWVdOamIzSmthVzl1UW5SdVQzQmxiaUE5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9YSEpjYmx4MFhIUmNkRngwWEhRbkxtRmpZMjl5WkdsdmJsOWZiR2x6ZEMxaWRHNHViM0JsYmlkY2NseHVYSFJjZEZ4MFhIUXBPMXh5WEc1Y2NseHVYSFJjZEZ4MFhIUnBaaUFvWVdOamIzSmthVzl1UW5SdVQzQmxiaUFtSmlCaFkyTnZjbVJwYjI1Q2RHNVBjR1Z1SUNFOVBTQmlkRzRwSUh0Y2NseHVYSFJjZEZ4MFhIUmNkQzh2SUdsbUlIUm9aWEpsSUdseklHOXdaVzRnZEdobGJpQnlaVzF2ZG1VZ2IzQmxiaUJqYkdGemN5QmhibVFnYzJWMElHMWhlR2hsYVdkb2RDQjBieUF3WEhKY2JseDBYSFJjZEZ4MFhIUmhZMk52Y21ScGIyNUNkRzVQY0dWdUxtTnNZWE56VEdsemRDNTBiMmRuYkdVb0oyOXdaVzRuS1R0Y2NseHVYSFJjZEZ4MFhIUmNkR0ZqWTI5eVpHbHZia0owYms5d1pXNHVibVY0ZEVWc1pXMWxiblJUYVdKc2FXNW5Mbk4wZVd4bExtMWhlRWhsYVdkb2RDQTlJREE3WEhKY2JseDBYSFJjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkRngwWEhRdkx5QnpaWFFnYjNCbGJpQmpiR0Z6Y3lCMGJ5QmxkbVZ5ZVNCamJHbGphMlZrSUdGalkyOXlaR2x2YmlCaWRHNWNjbHh1WEhSY2RGeDBYSFJpZEc0dVkyeGhjM05NYVhOMExuUnZaMmRzWlNnbmIzQmxiaWNwTzF4eVhHNWNkRngwWEhSY2RHTnZibk4wSUdGalkyOXlaR2x2YmtKdlpIa2dQU0JpZEc0dWJtVjRkRVZzWlcxbGJuUlRhV0pzYVc1bk8xeHlYRzVjY2x4dVhIUmNkRngwWEhScFppQW9ZblJ1TG1Oc1lYTnpUR2x6ZEM1amIyNTBZV2x1Y3lnbmIzQmxiaWNwS1NCN1hISmNibHgwWEhSY2RGeDBYSFJoWTJOdmNtUnBiMjVDYjJSNUxuTjBlV3hsTG0xaGVFaGxhV2RvZENBOUlHRmpZMjl5WkdsdmJrSnZaSGt1YzJOeWIyeHNTR1ZwWjJoMElDc2dKM0I0Snp0Y2NseHVYSFJjZEZ4MFhIUjlJR1ZzYzJVZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWVdOamIzSmthVzl1UW05a2VTNXpkSGxzWlM1dFlYaElaV2xuYUhRZ1BTQXdPMXh5WEc1Y2RGeDBYSFJjZEgxY2NseHVYSFJjZEZ4MGZTazdYSEpjYmx4MFhIUjlLVHRjY2x4dVhISmNibHgwWEhSM2FXNWtiM2N1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduY21WemFYcGxKeXdnS0dVcElEMCtJSHRjY2x4dVhIUmNkRngwYVdZZ0tIZHBibVJ2ZHk1cGJtNWxjbGRwWkhSb0lEd2dOakF3S1NCN1hISmNibHgwWEhSY2RGeDBkR0ZpYzBOdmJuUmxiblF1Wm05eVJXRmphQ2dvZEdGaWN5a2dQVDRnZTF4eVhHNWNkRngwWEhSY2RGeDBkR0ZpY3k1emRIbHNaUzV0WVhoSVpXbG5hSFFnUFNBd08xeHlYRzVjZEZ4MFhIUmNkRngwYVdZZ0tIUmhZbk11Y0hKbGRtbHZkWE5GYkdWdFpXNTBVMmxpYkdsdVp5NWpiR0Z6YzB4cGMzUXVZMjl1ZEdGcGJuTW9KMjl3Wlc0bktTa2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUjBZV0p6TG5CeVpYWnBiM1Z6Uld4bGJXVnVkRk5wWW14cGJtY3VZMnhoYzNOTWFYTjBMbkpsYlc5MlpTZ25iM0JsYmljcE8xeHlYRzVjZEZ4MFhIUmNkRngwZlZ4eVhHNWNkRngwWEhSY2RIMHBPMXh5WEc1Y2RGeDBYSFI5WEhKY2JseDBYSFI5S1R0Y2NseHVYSFI5WEhKY2JseHlYRzVjZEdsbUlDaDBZV0pqWTI5eVpHbHZiaWtnZTF4eVhHNWNkRngwWVdOMGFYWmhkR1ZVWVdKektDazdYSEpjYmx4MFhIUmhZM1JwZG1GMFpVRmpZMjl5WkdsdmJpZ3BPMXh5WEc1Y2RIMWNjbHh1ZlNrN1hISmNiaUpkTENKemIzVnlZMlZTYjI5MElqb2lJbjA9In0=
