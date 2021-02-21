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

			tabSwitcher.parentElement.classList.add('active');

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

module.exports = JSON.parse("{\"animals\":[{\"dogs\":[{\"number\":1,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"brown\",\"white\"],\"weight\":14,\"height\":\"\",\"coat\":\"\",\"birth\":\"January 1, 2013\",\"name\":\"Alisa\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/alisa.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":2,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"brown\",\"ginger\"],\"weight\":11,\"height\":\"\",\"coat\":\"\",\"birth\":2017,\"name\":\"Riči\",\"gender\":\"male\",\"image\":\"./assets/images/dogs/notavailable.gif\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":3,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"brown\",\"black\"],\"weight\":25,\"height\":\"\",\"coat\":\"\",\"birth\":2010,\"name\":\"Lina\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/lina.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":4,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"gray\",\"white\"],\"weight\":15,\"height\":\"\",\"coat\":\"\",\"birth\":2011,\"name\":\"Flekica\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/flekica.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\",\"adopted\":\"yes\"},{\"number\":5,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"brown\"],\"weight\":12,\"height\":\"\",\"coat\":\"\",\"birth\":2012,\"name\":\"Danica\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/danica.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":6,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"black\",\"white\"],\"weight\":21,\"height\":\"\",\"coat\":\"\",\"birth\":2013,\"name\":\"Lena\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/notavailable.gif\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":7,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"black\"],\"weight\":14,\"height\":\"\",\"coat\":\"\",\"birth\":2014,\"name\":\"Cuca\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/notavailable.gif\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":8,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"brown\"],\"weight\":9,\"height\":\"\",\"coat\":\"\",\"birth\":2015,\"name\":\"Ribica\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/ribica.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":9,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"brown\"],\"weight\":18,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Kika\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/notavailable.gif\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":10,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"black\",\"white\"],\"weight\":20,\"height\":\"\",\"coat\":\"\",\"birth\":2017,\"name\":\"Abba\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/abba.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":11,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"orange\",\"brown\",\"black\"],\"weight\":\"30+\",\"height\":\"\",\"coat\":\"\",\"birth\":2018,\"name\":\"Pluton\",\"gender\":\"male\",\"image\":\"./assets/images/dogs/pluton.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":12,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"chocolate\"],\"weight\":13,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Didra\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/didra.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":13,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"black\",\"brown\"],\"weight\":14,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Raja\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/notavailable.gif\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":14,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"black\"],\"weight\":12,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Ljubica\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/ljubica.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":15,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"black\"],\"weight\":23,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Lada\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/Lada.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":16,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"brown\"],\"weight\":23,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Dejsi\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/dejsi.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":17,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"black\",\"cream\"],\"weight\":18,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Bogar\",\"gender\":\"male\",\"image\":\"./assets/images/dogs/bogar.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":18,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"black\"],\"weight\":13,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Perse\",\"gender\":\"male\",\"image\":\"./assets/images/dogs/notavailable.gif\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":19,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"yellow\",\"brown\"],\"weight\":11,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Barni\",\"gender\":\"male\",\"image\":\"./assets/images/dogs/barni.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":20,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"black\"],\"weight\":8,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Semi Džo\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/semidzo.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":21,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"black\",\"white\"],\"weight\":11,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Bongo\",\"gender\":\"male\",\"image\":\"./assets/images/dogs/bongo.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":22,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"black\",\"brown\"],\"weight\":15,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Luna\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/luna.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":23,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"black\",\"brown\"],\"weight\":7,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Djina\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/djina.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":24,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"gray\",\"brown\"],\"weight\":9,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Foksi\",\"gender\":\"male\",\"image\":\"./assets/images/dogs/notavailable.gif\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":25,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"gray\",\"black\"],\"weight\":18,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Kvana\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/kvana.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\",\"adopted\":\"yes\"},{\"number\":26,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"brown\",\"white\"],\"weight\":18,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Mila\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/mila.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":27,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"black\"],\"weight\":14,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Kasja\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/notavailable.gif\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":28,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"yellow\",\"white\"],\"weight\":18,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Lili\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/lili.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":29,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"brown\"],\"weight\":19,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Bak\",\"gender\":\"male\",\"image\":\"./assets/images/dogs/bak.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":30,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"black\"],\"weight\":18,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Ali\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/ali.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":31,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"white\",\"brown\"],\"weight\":19,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Viktor\",\"gender\":\"male\",\"image\":\"./assets/images/dogs/notavailable.gif\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":32,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"yellow\",\"white\"],\"weight\":12,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Oskar\",\"gender\":\"male\",\"image\":\"./assets/images/dogs/oskar.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":33,\"species\":\"dog\",\"breed\":\"Labrador\",\"color\":[\"yellow\"],\"weight\":\"30+\",\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Sara\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/sara.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":34,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"black\"],\"weight\":\"30+\",\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Mr. Spock\",\"gender\":\"male\",\"image\":\"./assets/images/dogs/mrspock.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":35,\"species\":\"dog\",\"breed\":\"Staffordshire Bull Terrier\",\"color\":[\"yellow\"],\"weight\":20,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Niki\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/notavailable.gif\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":36,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"black\",\"brown\"],\"weight\":\"30+\",\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Bukši\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/buksi.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":37,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"black\",\"brown\"],\"weight\":9,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Frenki\",\"gender\":\"male\",\"image\":\"./assets/images/dogs/frenki.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":38,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"gold\",\"white\"],\"weight\":12,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Lolo\",\"gender\":\"male\",\"image\":\"./assets/images/dogs/lolo.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":39,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"black\"],\"weight\":14,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Ogi\",\"gender\":\"male\",\"image\":\"./assets/images/dogs/ogi.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":40,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"chocolate\"],\"weight\":12,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Magi\",\"gender\":\"male\",\"image\":\"./assets/images/dogs/magi.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":41,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"yellow\",\"brown\"],\"weight\":15,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Dunja\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/dunja.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":42,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"brown\",\"yellow\"],\"weight\":21,\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Vučka\",\"gender\":\"female\",\"image\":\"./assets/images/dogs/vucka.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":43,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"yellow\"],\"weight\":\"30+\",\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Bruno\",\"gender\":\"male\",\"image\":\"./assets/images/dogs/notavailable.gif\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"},{\"number\":44,\"species\":\"dog\",\"breed\":\"\",\"color\":[\"yellow\"],\"weight\":\"30+\",\"height\":\"\",\"coat\":\"\",\"birth\":2016,\"name\":\"Pako\",\"gender\":\"male\",\"image\":\"./assets/images/dogs/pako.jpg\",\"desc\":\"He was in a shelter that lacked the resources to continue to care for him, so Beasley came to our shelter to find a new home. He is playful and cheerful dog, who enjoys playing with toys and often\"}],\"cats\":[{\"number\":1,\"species\":\"cat\",\"breed\":\"\",\"color\":[\"grey\"],\"weight\":\"\",\"height\":\"\",\"coat\":\"\",\"birth\":\"\",\"name\":\"Medena\",\"gender\":\"\",\"image\":\"./assets/images/cats/medena.jpg\",\"desc\":\"This beautiful cat had health issues her family couldn’t take care of, so she came to us, and we quickly found her a place in our shelter. She is a very lovable 4 yr old female domestic shorthair cat and she weighs 10 pounds. Lavender is all about affection and looking for that special person to spend the rest of her life with. She is wonderful indoors and she enjoys dry cat food.\"},{\"number\":2,\"species\":\"cat\",\"breed\":\"\",\"color\":[],\"weight\":\"\",\"height\":\"\",\"coat\":\"\",\"birth\":\"\",\"name\":\"Makica\",\"gender\":\"\",\"image\":\"./assets/images/cats/makica.jpg\",\"desc\":\"This beautiful cat had health issues her family couldn’t take care of, so she came to us, and we quickly found her a place in our shelter. She is a very lovable 4 yr old female domestic shorthair cat and she weighs 10 pounds. Lavender is all about affection and looking for that special person to spend the rest of her life with. She is wonderful indoors and she enjoys dry cat food.\"},{\"number\":3,\"species\":\"cat\",\"breed\":\"\",\"color\":[\"black\",\"white\"],\"weight\":\"\",\"height\":\"\",\"coat\":\"\",\"birth\":\"\",\"name\":\"Vesela\",\"gender\":\"\",\"image\":\"./assets/images/cats/vesela.jpg\",\"desc\":\"This beautiful cat had health issues her family couldn’t take care of, so she came to us, and we quickly found her a place in our shelter. She is a very lovable 4 yr old female domestic shorthair cat and she weighs 10 pounds. Lavender is all about affection and looking for that special person to spend the rest of her life with. She is wonderful indoors and she enjoys dry cat food.\"},{\"number\":4,\"species\":\"cat\",\"breed\":\"\",\"color\":[\"black\",\"white\"],\"weight\":\"\",\"height\":\"\",\"coat\":\"\",\"birth\":\"\",\"name\":\"Rajna\",\"gender\":\"\",\"image\":\"./assets/images/cats/rajna.jpg\",\"desc\":\"This beautiful cat had health issues her family couldn’t take care of, so she came to us, and we quickly found her a place in our shelter. She is a very lovable 4 yr old female domestic shorthair cat and she weighs 10 pounds. Lavender is all about affection and looking for that special person to spend the rest of her life with. She is wonderful indoors and she enjoys dry cat food.\"},{\"number\":5,\"species\":\"cat\",\"breed\":\"\",\"color\":[\"black\",\"white\"],\"weight\":\"\",\"height\":\"\",\"coat\":\"\",\"birth\":\"\",\"name\":\"Vesela\",\"gender\":\"\",\"image\":\"./assets/images/cats/vesela.jpg\",\"desc\":\"This beautiful cat had health issues her family couldn’t take care of, so she came to us, and we quickly found her a place in our shelter. She is a very lovable 4 yr old female domestic shorthair cat and she weighs 10 pounds. Lavender is all about affection and looking for that special person to spend the rest of her life with. She is wonderful indoors and she enjoys dry cat food.\"}]}]}");

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
                                        data-hidetext="...Read less"
                                        data-showtext="...Read more"
                                        data-target-animal="showMore-${species}${number}"
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
                                        data-hidetext="...Read less"
                                        data-showtext="...Read more"
                                        data-target-animal="showMore-${
																					cat.species
																				}${cat.number}"
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

		const expandsMoreAnimalInfo = document.querySelectorAll(
			'[data-target-animal]'
		);

		function expandAnimalInfo() {
			const showContent = document.getElementById(this.dataset.targetAnimal);

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

			expandsMoreAnimalInfo.forEach((btn) => {
				btn.addEventListener('click', expandAnimalInfo);
			});
		}

		if (catsBox) {
			displayPaginatedItems(catBoxArray, catsBox, elementsOnPage, currentPage);
			displayPagination(catBoxArray, paginationElCats, elementsOnPage);

			expandsMoreAnimalInfo.forEach((btn) => {
				btn.addEventListener('click', expandAnimalInfo);
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

	const expandsMore = document.querySelectorAll('[data-target]');

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Fkb3B0Q29udGVudFN3aXRjaGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9mZXRjaEFuaW1hbHNEYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9mb3JtVmFsaWRhaXRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL25hdi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy90YWJjY29yZGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7QUFDSCxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhEQUE4RCxPQUFPO0FBQ3JFO0FBQ0EsZ0NBQWdDLE9BQU87QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCLG1CQUFPLENBQUMsNkNBQWdCOztBQUVsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkM7O0FBRTdDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLDZDQUE2QztBQUM3Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx5Q0FBeUMsTUFBTSxTQUFTLEtBQUssR0FBRyxRQUFRLEVBQUU7QUFDMUU7QUFDQTtBQUNBLDBEQUEwRCxLQUFLO0FBQy9EO0FBQ0EsS0FBSztBQUNMO0FBQ0EsOEVBQThFLFFBQVEsRUFBRSxPQUFPO0FBQy9GO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBdUUsUUFBUSxFQUFFLE9BQU87QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRSxPQUFPO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRSxPQUFPO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRSxNQUFNO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBLCtDQUErQywwQkFBMEI7QUFDekU7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLDBCQUEwQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsMEJBQTBCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRSxLQUFLO0FBQy9FO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRSxPQUFPO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EseUNBQXlDLFVBQVUsU0FBUyxTQUFTO0FBQ3JFO0FBQ0EsS0FBSyxFQUFFO0FBQ1A7QUFDQTtBQUNBLDBEQUEwRCxTQUFTO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixFQUFFLFdBQVc7QUFDOUI7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsRUFBRSxXQUFXO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFLFNBQVM7QUFDbkY7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGtDQUFrQztBQUNqRjtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0Msa0NBQWtDO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxrQ0FBa0M7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBOztBQUVBOztBQUVBLGtCQUFrQixtQkFBbUI7QUFDckM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ3ZtQkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUMseUJBQXlCLDZCQUE2QixJQUFJLFFBQVEsSUFBSSxRQUFRLElBQUksUUFBUSxJQUFJLGdDQUFnQyxHQUFHO0FBQ2xLO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDdkZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7O0FBRUY7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOzs7Ozs7Ozs7Ozs7QUNqREQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ25CRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7Ozs7Ozs7Ozs7OztBQ3BCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixtQkFBTyxDQUFDLCtDQUFpQjs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7O0FBRUY7QUFDQSw0Q0FBNEM7QUFDNUM7O0FBRUE7QUFDQSxVQUFVLGtEQUFrRDs7QUFFNUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsU0FBUztBQUM1RCxxRUFBcUUsTUFBTTtBQUMzRTtBQUNBO0FBQ0EsUUFBUSx3QkFBd0IsTUFBTTtBQUN0Qzs7QUFFQTtBQUNBO0FBQ0EscUNBQXFDLE1BQU07QUFDM0MsbUNBQW1DLFFBQVE7QUFDM0M7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNuR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsVUFBVTtBQUM5Qzs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLElBQUk7QUFDSixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcblx0aGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgbnVsbCwgJyAnKTtcclxuXHRjb25zdCB0YWJTd2l0Y2hlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1zd2l0Y2hlcl0nKTtcclxuXHJcblx0dGFiU3dpdGNoZXJzLmZvckVhY2goKHRhYlN3aXRjaCkgPT4ge1xyXG5cdFx0Y29uc3QgdGFiU3dpdGNoZXIgPSB0YWJTd2l0Y2g7XHJcblx0XHRjb25zdCBwYWdlSWQgPSB0YWJTd2l0Y2hlci5kYXRhc2V0LnRhYjtcclxuXHJcblx0XHR0YWJTd2l0Y2hlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0XHRcdGRvY3VtZW50XHJcblx0XHRcdFx0LnF1ZXJ5U2VsZWN0b3IoJy5hZG9wdF9fbGlzdC1pdGVtLmFjdGl2ZScpXHJcblx0XHRcdFx0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cclxuXHRcdFx0dGFiU3dpdGNoZXIucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHJcblx0XHRcdHN3aXRjaFBhZ2UocGFnZUlkKTtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cclxuXHRmdW5jdGlvbiBzd2l0Y2hQYWdlKHBhZ2VJZCkge1xyXG5cdFx0Y29uc3QgY3VycmVudFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS5hY3RpdmUnKTtcclxuXHRcdGNvbnN0IGN1cnJlbnRQYWdlSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UtaGVhZGVyLmFjdGl2ZScpO1xyXG5cclxuXHRcdGN1cnJlbnRQYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0Y3VycmVudFBhZ2VIZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblxyXG5cdFx0Y29uc3QgbmV4dFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucGFnZVtkYXRhLXBhZ2U9XCIke3BhZ2VJZH1cIl1gKTtcclxuXHRcdGNvbnN0IG5leHRQYWdlSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuXHRcdFx0YC5wYWdlLWhlYWRlcltkYXRhLWhlYWRlcj1cIiR7cGFnZUlkfVwiXWBcclxuXHRcdCk7XHJcblx0XHRuZXh0UGFnZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdG5leHRQYWdlSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdH1cclxufSk7XHJcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3QgYW5pbWFsc1VybCA9ICcuLi9qcy9hbmltYWxzLmpzb24nO1xyXG5cdGNvbnN0IGFuaW1hbHNQYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbmltYWxzLXBhZ2VzJyk7XHJcblx0Y29uc3QgZG9nc0JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb2dzLWJveCcpO1xyXG5cdGNvbnN0IGNhdHNCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0cy1ib3gnKTtcclxuXHJcblx0Y29uc3QgbG9jYWxBbmltYWxzSlNPTiA9IHJlcXVpcmUoJy4vYW5pbWFscy5qc29uJyk7XHJcblxyXG5cdC8qIGNvbnN0IGdldEFuaW1hbHNEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhbmltYWxzVXJsKTtcclxuXHRcdGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG5cdFx0cmV0dXJuIGRhdGE7XHJcblx0fTsgKi9cclxuXHJcblx0Y29uc3QgZG9nTnVtYmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RvZ051bWJlcicpO1xyXG5cdGNvbnN0IGNhdE51bWJlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXROdW1iZXInKTtcclxuXHJcblx0YXN5bmMgZnVuY3Rpb24gZGlzcGxheUFuaW1hbE51bWJlcnMoKSB7XHJcblx0XHQvKiBjb25zdCBkYXRhTGlzdCA9IGF3YWl0IGdldEFuaW1hbHNEYXRhKCk7ICovXHJcblxyXG5cdFx0Y29uc3QgYW5pbWFsc0FycmF5ID0gbG9jYWxBbmltYWxzSlNPTi5hbmltYWxzO1xyXG5cclxuXHRcdGxldCBkb2dzQXJyYXlOdW1iZXIgPSBhbmltYWxzQXJyYXlbMF0uZG9ncy5sZW5ndGg7XHJcblx0XHRsZXQgY2F0c0FycmF5TnVtYmVyID0gYW5pbWFsc0FycmF5WzBdLmNhdHMubGVuZ3RoO1xyXG5cclxuXHRcdGRvZ051bWJlci5pbm5lclRleHQgPSBkb2dzQXJyYXlOdW1iZXI7XHJcblx0XHRjYXROdW1iZXIuaW5uZXJUZXh0ID0gY2F0c0FycmF5TnVtYmVyO1xyXG5cdH1cclxuXHJcblx0aWYgKChkb2dOdW1iZXIsIGNhdE51bWJlcikpIHtcclxuXHRcdChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGRpc3BsYXlBbmltYWxOdW1iZXJzKCk7XHJcblx0XHR9KSgpO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgZnVuY3Rpb24gZGlzcGxheUFuaW1hbHMoKSB7XHJcblx0XHQvKiBjb25zdCBkYXRhTGlzdCA9IGF3YWl0IGdldEFuaW1hbHNEYXRhKCk7ICovXHJcblx0XHRjb25zdCBhbmltYWxzQXJyYXkgPSBsb2NhbEFuaW1hbHNKU09OLmFuaW1hbHM7XHJcblxyXG5cdFx0YW5pbWFsc0FycmF5LmZvckVhY2goKGFuaW1hbCkgPT4ge1xyXG5cdFx0XHRkb2dzQXJyYXkgPSBhbmltYWwuZG9ncztcclxuXHRcdFx0Y2F0c0FycmF5ID0gYW5pbWFsLmNhdHM7XHJcblxyXG5cdFx0XHRkb2dzQXJyYXkuZm9yRWFjaCgoZG9nKSA9PiB7XHJcblx0XHRcdFx0Y29uc3Qge1xyXG5cdFx0XHRcdFx0bnVtYmVyLFxyXG5cdFx0XHRcdFx0c3BlY2llcyxcclxuXHRcdFx0XHRcdGJyZWVkLFxyXG5cdFx0XHRcdFx0Y29sb3IsXHJcblx0XHRcdFx0XHR3ZWlnaHQsXHJcblx0XHRcdFx0XHRoZWlnaHQsXHJcblx0XHRcdFx0XHRjb2F0LFxyXG5cdFx0XHRcdFx0YmlydGgsXHJcblx0XHRcdFx0XHRuYW1lLFxyXG5cdFx0XHRcdFx0Z2VuZGVyLFxyXG5cdFx0XHRcdFx0aW1hZ2UsXHJcblx0XHRcdFx0XHRkZXNjLFxyXG5cdFx0XHRcdFx0YWRvcHRlZCxcclxuXHRcdFx0XHR9ID0gZG9nO1xyXG5cclxuXHRcdFx0XHRkb2dCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdFx0XHRkb2dCb3guY2xhc3NMaXN0LmFkZCgncGFnZV9fYm94Jyk7XHJcblx0XHRcdFx0YWRvcHRlZCA9PT0gJ3llcycgPyBkb2dCb3guY2xhc3NMaXN0LmFkZCgnYWRvcHRlZCcpIDogJyc7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGRvZ1llYXJzID0gYmlydGg7XHJcblxyXG5cdFx0XHRcdGNvbnN0IG1pbGlzZWNzQmV0d2VlbkRPQmFuZDE5NzAgPSBEYXRlLnBhcnNlKGRvZ1llYXJzKTtcclxuXHRcdFx0XHRjb25zdCBtaWxpc2Vjc0JldHdlZW5OT1dhbmQxOTcwID0gRGF0ZS5ub3coKTtcclxuXHRcdFx0XHRjb25zdCBhZ2VJbk1pbGlzZWNzID1cclxuXHRcdFx0XHRcdG1pbGlzZWNzQmV0d2Vlbk5PV2FuZDE5NzAgLSBtaWxpc2Vjc0JldHdlZW5ET0JhbmQxOTcwO1xyXG5cclxuXHRcdFx0XHRjb25zdCBtaWxpc2VjcyA9IGFnZUluTWlsaXNlY3M7XHJcblx0XHRcdFx0Y29uc3Qgc2VjcyA9IDEwMDA7XHJcblx0XHRcdFx0Y29uc3QgbWlucyA9IHNlY3MgKiA2MDtcclxuXHRcdFx0XHRjb25zdCBob3VyID0gbWlucyAqIDYwO1xyXG5cdFx0XHRcdGNvbnN0IGRheSA9IGhvdXIgKiAyNDtcclxuXHRcdFx0XHRjb25zdCB5ZWFyID0gZGF5ICogMzY1O1xyXG5cclxuXHRcdFx0XHRsZXQgeWVhcnMgPSBNYXRoLnJvdW5kKG1pbGlzZWNzIC8geWVhcik7XHJcblxyXG5cdFx0XHRcdGRvZ0JveC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlX19ib3gtdG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4ke2ltYWdlfVwiIGFsdD1cIiR7bmFtZX0gJHtzcGVjaWVzfVwifS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZV9fYm94LWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwicGFnZV9fYm94LXRpdGxlXCI+JHtuYW1lfSR7XHJcblx0XHRcdFx0XHRhZG9wdGVkID09PSAneWVzJyA/IGAgLSA8c3Bhbj5hZG9wdGVkPC9zcGFuPmAgOiAnJ1xyXG5cdFx0XHRcdH08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2VfX2JveC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV4cGFuZE1vcmVDb250ZW50XCIgaWQ9XCJzaG93TW9yZS0ke3NwZWNpZXN9JHtudW1iZXJ9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicGFnZV9fYm94LXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7ZGVzY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV4cGFuZE1vcmVIb2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1oaWRldGV4dD1cIi4uLlJlYWQgbGVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXNob3d0ZXh0PVwiLi4uUmVhZCBtb3JlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0LWFuaW1hbD1cInNob3dNb3JlLSR7c3BlY2llc30ke251bWJlcn1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidXR0b24gc2hvd01vcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5SZWFkIG1vcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwicGFnZV9fYm94LWljb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZV9fYm94LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtd2VpZ2h0XCI+PC9pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48c3BhbiBjbGFzcz1cInBhZ2VfX2JveC1pY29uLS10ZXh0XCI+JHt3ZWlnaHR9IGtnPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZV9fYm94LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtYXJyb3dzLWFsdC12XCI+PC9pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48c3BhbiBjbGFzcz1cInBhZ2VfX2JveC1pY29uLS10ZXh0XCI+JHtoZWlnaHR9IGNtPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZV9fYm94LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2FsZW5kYXItY2hlY2tcIj48L2lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxzcGFuIGNsYXNzPVwicGFnZV9fYm94LWljb24tLXRleHRcIj4ke3llYXJzfSB5ci48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cImZhcyBmYS1wYWxldHRlXCI+PC9pXHJcblx0XHRcdFx0XHRcdFx0XHRcdD48c3BhbiBjbGFzcz1cInBhZ2VfX2JveC1pY29uLS10ZXh0XCI+JHtjb2xvclswXSA/IGNvbG9yWzBdIDogJy0nfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VfX2JveC1pY29uXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVwiZmFzIGZhLXBhbGV0dGVcIj48L2lcclxuXHRcdFx0XHRcdFx0XHRcdFx0PjxzcGFuIGNsYXNzPVwicGFnZV9fYm94LWljb24tLXRleHRcIj4ke2NvbG9yWzFdID8gY29sb3JbMV0gOiAnLSd9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZV9fYm94LWljb25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJmYXMgZmEtcGFsZXR0ZVwiPjwvaVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+PHNwYW4gY2xhc3M9XCJwYWdlX19ib3gtaWNvbi0tdGV4dFwiPiR7Y29sb3JbMl0gPyBjb2xvclsyXSA6ICctJ308L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VfX2JveC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXBhd1wiPjwvaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PHNwYW4gY2xhc3M9XCJwYWdlX19ib3gtaWNvbi0tdGV4dFwiPiR7Y29hdH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS12ZW51cy1tYXJzXCI+PC9pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48c3BhbiBjbGFzcz1cInBhZ2VfX2JveC1pY29uLS10ZXh0XCI+JHtnZW5kZXJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIGA7XHJcblxyXG5cdFx0XHRcdGRvZ3NCb3guYXBwZW5kQ2hpbGQoZG9nQm94KTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRjYXRzQXJyYXkuZm9yRWFjaCgoY2F0KSA9PiB7XHJcblx0XHRcdFx0Y2F0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRcdFx0Y2F0Qm94LmNsYXNzTGlzdC5hZGQoJ3BhZ2VfX2JveCcpO1xyXG5cclxuXHRcdFx0XHRjb25zdCBjYXRZZWFycyA9IGNhdC5iaXJ0aDtcclxuXHJcblx0XHRcdFx0Y29uc3QgbWlsaXNlY3NCZXR3ZWVuRE9CYW5kMTk3MGNhdCA9IERhdGUucGFyc2UoY2F0WWVhcnMpO1xyXG5cdFx0XHRcdGNvbnN0IG1pbGlzZWNzQmV0d2Vlbk5PV2FuZDE5NzAgPSBEYXRlLm5vdygpO1xyXG5cclxuXHRcdFx0XHRjb25zdCBhZ2VJbk1pbGlzZWNzQ2F0ID1cclxuXHRcdFx0XHRcdG1pbGlzZWNzQmV0d2Vlbk5PV2FuZDE5NzAgLSBtaWxpc2Vjc0JldHdlZW5ET0JhbmQxOTcwY2F0O1xyXG5cclxuXHRcdFx0XHRjb25zdCBtaWxpc2Vjc0NhdCA9IGFnZUluTWlsaXNlY3NDYXQ7XHJcblx0XHRcdFx0Y29uc3Qgc2VjcyA9IDEwMDA7XHJcblx0XHRcdFx0Y29uc3QgbWlucyA9IHNlY3MgKiA2MDtcclxuXHRcdFx0XHRjb25zdCBob3VyID0gbWlucyAqIDYwO1xyXG5cdFx0XHRcdGNvbnN0IGRheSA9IGhvdXIgKiAyNDtcclxuXHRcdFx0XHRjb25zdCB5ZWFyID0gZGF5ICogMzY1O1xyXG5cclxuXHRcdFx0XHRsZXQgeWVhcnNDYXQgPSBNYXRoLnJvdW5kKG1pbGlzZWNzQ2F0IC8geWVhcik7XHJcblxyXG5cdFx0XHRcdGNhdEJveC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlX19ib3gtdG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4ke2NhdC5pbWFnZX1cIiBhbHQ9XCIke2NhdC5uYW1lfSAke1xyXG5cdFx0XHRcdFx0Y2F0LnNwZWNpZXNcclxuXHRcdFx0XHR9XCJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlX19ib3gtYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJwYWdlX19ib3gtdGl0bGVcIj4ke2NhdC5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZV9fYm94LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXhwYW5kTW9yZUNvbnRlbnRcIiBpZD1cInNob3dNb3JlLSR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjYXQuc3BlY2llc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0ke2NhdC5udW1iZXJ9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicGFnZV9fYm94LXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7Y2F0LmRlc2N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleHBhbmRNb3JlSG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaGlkZXRleHQ9XCIuLi5SZWFkIGxlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zaG93dGV4dD1cIi4uLlJlYWQgbW9yZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldC1hbmltYWw9XCJzaG93TW9yZS0ke1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjYXQuc3BlY2llc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSR7Y2F0Lm51bWJlcn1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidXR0b24gc2hvd01vcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5SZWFkIG1vcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwicGFnZV9fYm94LWljb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZV9fYm94LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtd2VpZ2h0XCI+PC9pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48c3BhbiBjbGFzcz1cInBhZ2VfX2JveC1pY29uLS10ZXh0XCI+JHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjYXQud2VpZ2h0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0ga2c8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1hcnJvd3MtYWx0LXZcIj48L2lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxzcGFuIGNsYXNzPVwicGFnZV9fYm94LWljb24tLXRleHRcIj4ke1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNhdC5oZWlnaHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fWNtPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZV9fYm94LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2FsZW5kYXItY2hlY2tcIj48L2lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxzcGFuIGNsYXNzPVwicGFnZV9fYm94LWljb24tLXRleHRcIj4ke3llYXJzQ2F0fSB5ci48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlX19ib3gtaWNvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cImZhcyBmYS1wYWxldHRlXCI+PC9pXHJcblx0XHRcdFx0XHRcdFx0XHRcdD48c3BhbiBjbGFzcz1cInBhZ2VfX2JveC1pY29uLS10ZXh0XCI+JHtjYXQuY29sb3JbMF0gPyBjYXQuY29sb3JbMF0gOiAnLSd9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZV9fYm94LWljb25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJmYXMgZmEtcGFsZXR0ZVwiPjwvaVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+PHNwYW4gY2xhc3M9XCJwYWdlX19ib3gtaWNvbi0tdGV4dFwiPiR7Y2F0LmNvbG9yWzFdID8gY2F0LmNvbG9yWzFdIDogJy0nfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VfX2JveC1pY29uXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVwiZmFzIGZhLXBhbGV0dGVcIj48L2lcclxuXHRcdFx0XHRcdFx0XHRcdFx0PjxzcGFuIGNsYXNzPVwicGFnZV9fYm94LWljb24tLXRleHRcIj4ke2NhdC5jb2xvclsyXSA/IGNhdC5jb2xvclsyXSA6ICctJ308L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VfX2JveC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXBhd1wiPjwvaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PHNwYW4gY2xhc3M9XCJwYWdlX19ib3gtaWNvbi0tdGV4dFwiPiR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2F0LmNvYXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VfX2JveC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXZlbnVzLW1hcnNcIj48L2lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxzcGFuIGNsYXNzPVwicGFnZV9fYm94LWljb24tLXRleHRcIj4ke1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNhdC5nZW5kZXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBgO1xyXG5cclxuXHRcdFx0XHRjYXRzQm94LmFwcGVuZENoaWxkKGNhdEJveCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0bGV0IGRvZ0JveEFycmF5ID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNkb2dzLWJveCAucGFnZV9fYm94JyldO1xyXG5cdFx0bGV0IGNhdEJveEFycmF5ID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjYXRzLWJveCAucGFnZV9fYm94JyldO1xyXG5cdFx0bGV0IGN1cnJlbnRQYWdlID0gMTtcclxuXHRcdGxldCBlbGVtZW50c09uUGFnZSA9IDQ7XHJcblxyXG5cdFx0Y29uc3QgcGFnaW5hdGlvbkVsRG9ncyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb2dzLXBhZ2luYXRpb24nKTtcclxuXHRcdGNvbnN0IHBhZ2luYXRpb25FbENhdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0cy1wYWdpbmF0aW9uJyk7XHJcblxyXG5cdFx0ZnVuY3Rpb24gZGlzcGxheVBhZ2luYXRlZEl0ZW1zKGl0ZW1zLCB3cmFwcGVyLCBpdGVtc1BlclBhZ2UsIHBhZ2UpIHtcclxuXHRcdFx0d3JhcHBlci5pbm5lckhUTUwgPSAnJztcclxuXHRcdFx0cGFnZS0tO1xyXG5cclxuXHRcdFx0bGV0IHN0YXJ0ID0gaXRlbXNQZXJQYWdlICogcGFnZTtcclxuXHRcdFx0bGV0IGVuZCA9IHN0YXJ0ICsgaXRlbXNQZXJQYWdlO1xyXG5cdFx0XHRsZXQgcGFnaW5hdGVkSXRlbXMgPSBpdGVtcy5zbGljZShzdGFydCwgZW5kKTtcclxuXHJcblx0XHRcdHBhZ2luYXRlZEl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuXHRcdFx0XHRsZXQgaXRlbUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRcdFx0aXRlbUVsLmNsYXNzTGlzdC5hZGQoJ3BhZ2VfX2JveCcpO1xyXG5cclxuXHRcdFx0XHRpdGVtRWwgPSBpdGVtO1xyXG5cclxuXHRcdFx0XHR3cmFwcGVyLmFwcGVuZENoaWxkKGl0ZW1FbCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGRpc3BsYXlQYWdpbmF0aW9uKGl0ZW1zLCB3cmFwcGVyLCBpdGVtc1BlclBhZ2UpIHtcclxuXHRcdFx0d3JhcHBlci5pbm5lckhUTUwgPSAnJztcclxuXHJcblx0XHRcdGxldCBwYWdlQ291bnQgPSBNYXRoLmNlaWwoaXRlbXMubGVuZ3RoIC8gaXRlbXNQZXJQYWdlKTtcclxuXHJcblx0XHRcdGZvciAobGV0IGkgPSAxOyBpIDwgcGFnZUNvdW50ICsgMTsgaSsrKSB7XHJcblx0XHRcdFx0bGV0IGJ0biA9IHBhZ2luYXRpb25CdXR0b24oaSwgcGFnZUNvdW50KTtcclxuXHJcblx0XHRcdFx0YnRuLnN0eWxlLndpZHRoID0gJzAnO1xyXG5cdFx0XHRcdGJ0bi5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG5cdFx0XHRcdGJ0bi5zdHlsZS5tYXJnaW4gPSAnMCc7XHJcblxyXG5cdFx0XHRcdHdyYXBwZXIuYXBwZW5kQ2hpbGQoYnRuKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bGV0IG5leHRCdG4gPSBuZXh0UGFnZShwYWdlQ291bnQpO1xyXG5cdFx0XHR3cmFwcGVyLmFwcGVuZENoaWxkKG5leHRCdG4pO1xyXG5cclxuXHRcdFx0bGV0IHByZXZCdG4gPSBwcmV2UGFnZShwYWdlQ291bnQpO1xyXG5cdFx0XHR3cmFwcGVyLnByZXBlbmQocHJldkJ0bik7XHJcblxyXG5cdFx0XHRsZXQgY3VycmVudEJ0bkRvZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHRcdCcjZG9ncyAucGFnaW5hdGlvbi1idG4uYWN0aXZlJ1xyXG5cdFx0XHQpO1xyXG5cdFx0XHRsZXQgY3VycmVudEJ0bkNhdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHRcdCcjY2F0cyAucGFnaW5hdGlvbi1idG4uYWN0aXZlJ1xyXG5cdFx0XHQpO1xyXG5cclxuXHRcdFx0aWYgKGN1cnJlbnRCdG5Eb2dzICYmIGN1cnJlbnRCdG5DYXRzKSB7XHJcblx0XHRcdFx0Y3VycmVudEJ0bkRvZ3MuY2xhc3NMaXN0LmFkZCgnZ3JvdXAnKTtcclxuXHRcdFx0XHRjdXJyZW50QnRuRG9ncy5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnZ3JvdXAnKTtcclxuXHRcdFx0XHRjdXJyZW50QnRuRG9ncy5uZXh0RWxlbWVudFNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoXHJcblx0XHRcdFx0XHQnZ3JvdXAnXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHRjdXJyZW50QnRuRG9ncy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2dyb3VwJyk7XHJcblxyXG5cdFx0XHRcdGN1cnJlbnRCdG5DYXRzLmNsYXNzTGlzdC5hZGQoJ2dyb3VwJyk7XHJcblx0XHRcdFx0Y3VycmVudEJ0bkNhdHMubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2dyb3VwJyk7XHJcblx0XHRcdFx0Y3VycmVudEJ0bkNhdHMubmV4dEVsZW1lbnRTaWJsaW5nLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKFxyXG5cdFx0XHRcdFx0J2dyb3VwJ1xyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0Y3VycmVudEJ0bkNhdHMucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdncm91cCcpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gbmV4dFBhZ2UocGFnZUNvdW50KSB7XHJcblx0XHRcdGxldCBuZXh0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblx0XHRcdG5leHRCdG4uY2xhc3NMaXN0LmFkZCgnbmV4dCcpO1xyXG5cdFx0XHRuZXh0QnRuLmlubmVyVGV4dCA9ICc+JztcclxuXHRcdFx0bmV4dEJ0bi5jbGFzc0xpc3QuYWRkKCdwYWdpbmF0aW9uLWJ0bicpO1xyXG5cclxuXHRcdFx0bmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0XHRcdFx0aWYgKG5leHRCdG4ucGFyZW50RWxlbWVudCA9PSBwYWdpbmF0aW9uRWxEb2dzKSB7XHJcblx0XHRcdFx0XHRkaXNwbGF5UGFnaW5hdGVkSXRlbXMoXHJcblx0XHRcdFx0XHRcdGRvZ0JveEFycmF5LFxyXG5cdFx0XHRcdFx0XHRkb2dzQm94LFxyXG5cdFx0XHRcdFx0XHRlbGVtZW50c09uUGFnZSxcclxuXHRcdFx0XHRcdFx0Y3VycmVudFBhZ2VcclxuXHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0bGV0IGFjdGl2ZUJ0bkRvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdFx0XHRcdCcjZG9ncyAucGFnaW5hdGlvbi1idG4uYWN0aXZlJ1xyXG5cdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHRhY3RpdmVCdG5Eb2cubmV4dEVsZW1lbnRTaWJsaW5nLmNsaWNrKCk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGN1cnJlbnRQYWdlID09PSBwYWdlQ291bnQpIHtcclxuXHRcdFx0XHRcdFx0bmV4dEJ0bi5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XHJcblx0XHRcdFx0XHRcdG5leHRCdG4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRsZXQgcHJldkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkb2dzIC5wcmV2Jyk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGN1cnJlbnRQYWdlICE9PSAxKSB7XHJcblx0XHRcdFx0XHRcdHByZXZCdG4uc3R5bGUub3BhY2l0eSA9ICcxJztcclxuXHRcdFx0XHRcdFx0cHJldkJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2FsbCc7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYgKGFjdGl2ZUJ0bkRvZykge1xyXG5cdFx0XHRcdFx0XHRhY3RpdmVCdG5Eb2cuY2xhc3NMaXN0LmFkZCgnZ3JvdXAnKTtcclxuXHRcdFx0XHRcdFx0YWN0aXZlQnRuRG9nLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdncm91cCcpO1xyXG5cdFx0XHRcdFx0XHRhY3RpdmVCdG5Eb2cucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdncm91cCcpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKG5leHRCdG4ucGFyZW50RWxlbWVudCA9PSBwYWdpbmF0aW9uRWxDYXRzKSB7XHJcblx0XHRcdFx0XHRkaXNwbGF5UGFnaW5hdGVkSXRlbXMoXHJcblx0XHRcdFx0XHRcdGNhdEJveEFycmF5LFxyXG5cdFx0XHRcdFx0XHRjYXRzQm94LFxyXG5cdFx0XHRcdFx0XHRlbGVtZW50c09uUGFnZSxcclxuXHRcdFx0XHRcdFx0Y3VycmVudFBhZ2VcclxuXHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0bGV0IGFjdGl2ZUJ0bkNhdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdFx0XHRcdCcjY2F0cyAucGFnaW5hdGlvbi1idG4uYWN0aXZlJ1xyXG5cdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHRhY3RpdmVCdG5DYXQubmV4dEVsZW1lbnRTaWJsaW5nLmNsaWNrKCk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGN1cnJlbnRQYWdlID09PSBwYWdlQ291bnQpIHtcclxuXHRcdFx0XHRcdFx0bmV4dEJ0bi5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XHJcblx0XHRcdFx0XHRcdG5leHRCdG4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRsZXQgcHJldkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXRzIC5wcmV2Jyk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGN1cnJlbnRQYWdlICE9PSAxKSB7XHJcblx0XHRcdFx0XHRcdHByZXZCdG4uc3R5bGUub3BhY2l0eSA9ICcxJztcclxuXHRcdFx0XHRcdFx0cHJldkJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2FsbCc7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYgKGFjdGl2ZUJ0bkNhdCkge1xyXG5cdFx0XHRcdFx0XHRhY3RpdmVCdG5DYXQuY2xhc3NMaXN0LmFkZCgnZ3JvdXAnKTtcclxuXHRcdFx0XHRcdFx0YWN0aXZlQnRuQ2F0Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdncm91cCcpO1xyXG5cdFx0XHRcdFx0XHRhY3RpdmVCdG5DYXQucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdncm91cCcpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRyZXR1cm4gbmV4dEJ0bjtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBwcmV2UGFnZShwYWdlQ291bnQpIHtcclxuXHRcdFx0bGV0IHByZXZCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHRcdFx0cHJldkJ0bi5jbGFzc0xpc3QuYWRkKCdwcmV2Jyk7XHJcblx0XHRcdHByZXZCdG4uaW5uZXJUZXh0ID0gJzwnO1xyXG5cdFx0XHRwcmV2QnRuLmNsYXNzTGlzdC5hZGQoJ3BhZ2luYXRpb24tYnRuJyk7XHJcblxyXG5cdFx0XHRwcmV2QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHRcdFx0XHRpZiAocHJldkJ0bi5wYXJlbnRFbGVtZW50ID09IHBhZ2luYXRpb25FbERvZ3MpIHtcclxuXHRcdFx0XHRcdGRpc3BsYXlQYWdpbmF0ZWRJdGVtcyhcclxuXHRcdFx0XHRcdFx0ZG9nQm94QXJyYXksXHJcblx0XHRcdFx0XHRcdGRvZ3NCb3gsXHJcblx0XHRcdFx0XHRcdGVsZW1lbnRzT25QYWdlLFxyXG5cdFx0XHRcdFx0XHRjdXJyZW50UGFnZVxyXG5cdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHRsZXQgYWN0aXZlQnRuRG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuXHRcdFx0XHRcdFx0JyNkb2dzIC5wYWdpbmF0aW9uLWJ0bi5hY3RpdmUnXHJcblx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdGFjdGl2ZUJ0bkRvZy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsaWNrKCk7XHJcblxyXG5cdFx0XHRcdFx0bGV0IG5leHRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZG9ncyAubmV4dCcpO1xyXG5cclxuXHRcdFx0XHRcdGlmIChjdXJyZW50UGFnZSAhPT0gcGFnZUNvdW50KSB7XHJcblx0XHRcdFx0XHRcdG5leHRCdG4uc3R5bGUub3BhY2l0eSA9ICcxJztcclxuXHRcdFx0XHRcdFx0bmV4dEJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2FsbCc7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYgKGN1cnJlbnRQYWdlID09PSAxKSB7XHJcblx0XHRcdFx0XHRcdHByZXZCdG4uc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xyXG5cdFx0XHRcdFx0XHRwcmV2QnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYgKGFjdGl2ZUJ0bkRvZykge1xyXG5cdFx0XHRcdFx0XHRhY3RpdmVCdG5Eb2cuY2xhc3NMaXN0LmFkZCgnZ3JvdXAnKTtcclxuXHRcdFx0XHRcdFx0YWN0aXZlQnRuRG9nLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdncm91cCcpO1xyXG5cdFx0XHRcdFx0XHRhY3RpdmVCdG5Eb2cucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdncm91cCcpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKHByZXZCdG4ucGFyZW50RWxlbWVudCA9PSBwYWdpbmF0aW9uRWxDYXRzKSB7XHJcblx0XHRcdFx0XHRkaXNwbGF5UGFnaW5hdGVkSXRlbXMoXHJcblx0XHRcdFx0XHRcdGNhdEJveEFycmF5LFxyXG5cdFx0XHRcdFx0XHRjYXRzQm94LFxyXG5cdFx0XHRcdFx0XHRlbGVtZW50c09uUGFnZSxcclxuXHRcdFx0XHRcdFx0Y3VycmVudFBhZ2VcclxuXHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0bGV0IGFjdGl2ZUJ0bkNhdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdFx0XHRcdCcjY2F0cyAucGFnaW5hdGlvbi1idG4uYWN0aXZlJ1xyXG5cdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHRhY3RpdmVCdG5DYXQucHJldmlvdXNFbGVtZW50U2libGluZy5jbGljaygpO1xyXG5cclxuXHRcdFx0XHRcdGxldCBuZXh0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhdHMgLm5leHQnKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoY3VycmVudFBhZ2UgIT09IHBhZ2VDb3VudCkge1xyXG5cdFx0XHRcdFx0XHRuZXh0QnRuLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcblx0XHRcdFx0XHRcdG5leHRCdG4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhbGwnO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmIChjdXJyZW50UGFnZSA9PT0gMSkge1xyXG5cdFx0XHRcdFx0XHRwcmV2QnRuLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcclxuXHRcdFx0XHRcdFx0cHJldkJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmIChhY3RpdmVCdG5DYXQpIHtcclxuXHRcdFx0XHRcdFx0YWN0aXZlQnRuQ2F0LmNsYXNzTGlzdC5hZGQoJ2dyb3VwJyk7XHJcblx0XHRcdFx0XHRcdGFjdGl2ZUJ0bkNhdC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnZ3JvdXAnKTtcclxuXHRcdFx0XHRcdFx0YWN0aXZlQnRuQ2F0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnZ3JvdXAnKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0aWYgKGN1cnJlbnRQYWdlID09PSAxKSB7XHJcblx0XHRcdFx0cHJldkJ0bi5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XHJcblx0XHRcdFx0cHJldkJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gcHJldkJ0bjtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBwYWdpbmF0aW9uQnV0dG9uKHBhZ2UsIHBhZ2VDb3VudCkge1xyXG5cdFx0XHRsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblx0XHRcdGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwYWdpbmF0aW9uLWJ0bicpO1xyXG5cdFx0XHRidXR0b24uaW5uZXJUZXh0ID0gcGFnZTtcclxuXHJcblx0XHRcdGlmIChjdXJyZW50UGFnZSA9PSBwYWdlKSB7XHJcblx0XHRcdFx0YnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0XHRcdGN1cnJlbnRQYWdlID0gcGFnZTtcclxuXHJcblx0XHRcdFx0aWYgKGJ1dHRvbi5wYXJlbnRFbGVtZW50ID09IHBhZ2luYXRpb25FbERvZ3MpIHtcclxuXHRcdFx0XHRcdGRpc3BsYXlQYWdpbmF0ZWRJdGVtcyhcclxuXHRcdFx0XHRcdFx0ZG9nQm94QXJyYXksXHJcblx0XHRcdFx0XHRcdGRvZ3NCb3gsXHJcblx0XHRcdFx0XHRcdGVsZW1lbnRzT25QYWdlLFxyXG5cdFx0XHRcdFx0XHRjdXJyZW50UGFnZVxyXG5cdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHRsZXQgYWN0aXZlQnRuRG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuXHRcdFx0XHRcdFx0JyNkb2dzIC5wYWdpbmF0aW9uLWJ0bi5hY3RpdmUnXHJcblx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdGFjdGl2ZUJ0bkRvZy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHJcblx0XHRcdFx0XHRidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRcdFx0bGV0IG5leHRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZG9ncyAubmV4dCcpO1xyXG5cclxuXHRcdFx0XHRcdGlmIChjdXJyZW50UGFnZSA9PT0gcGFnZUNvdW50KSB7XHJcblx0XHRcdFx0XHRcdG5leHRCdG4uc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xyXG5cdFx0XHRcdFx0XHRuZXh0QnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRuZXh0QnRuLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcblx0XHRcdFx0XHRcdG5leHRCdG4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhbGwnO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGxldCBwcmV2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RvZ3MgLnByZXYnKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoY3VycmVudFBhZ2UgPT09IDEpIHtcclxuXHRcdFx0XHRcdFx0cHJldkJ0bi5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XHJcblx0XHRcdFx0XHRcdHByZXZCdG4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHByZXZCdG4uc3R5bGUub3BhY2l0eSA9ICcxJztcclxuXHRcdFx0XHRcdFx0cHJldkJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2FsbCc7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoYnV0dG9uLnBhcmVudEVsZW1lbnQgPT0gcGFnaW5hdGlvbkVsQ2F0cykge1xyXG5cdFx0XHRcdFx0ZGlzcGxheVBhZ2luYXRlZEl0ZW1zKFxyXG5cdFx0XHRcdFx0XHRjYXRCb3hBcnJheSxcclxuXHRcdFx0XHRcdFx0Y2F0c0JveCxcclxuXHRcdFx0XHRcdFx0ZWxlbWVudHNPblBhZ2UsXHJcblx0XHRcdFx0XHRcdGN1cnJlbnRQYWdlXHJcblx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdGxldCBhY3RpdmVCdG5DYXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHRcdFx0XHQnI2NhdHMgLnBhZ2luYXRpb24tYnRuLmFjdGl2ZSdcclxuXHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0YWN0aXZlQnRuQ2F0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cclxuXHRcdFx0XHRcdGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHJcblx0XHRcdFx0XHRsZXQgbmV4dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXRzIC5uZXh0Jyk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGN1cnJlbnRQYWdlID09PSBwYWdlQ291bnQpIHtcclxuXHRcdFx0XHRcdFx0bmV4dEJ0bi5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XHJcblx0XHRcdFx0XHRcdG5leHRCdG4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdG5leHRCdG4uc3R5bGUub3BhY2l0eSA9ICcxJztcclxuXHRcdFx0XHRcdFx0bmV4dEJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2FsbCc7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0bGV0IHByZXZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2F0cyAucHJldicpO1xyXG5cclxuXHRcdFx0XHRcdGlmIChjdXJyZW50UGFnZSA9PT0gMSkge1xyXG5cdFx0XHRcdFx0XHRwcmV2QnRuLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcclxuXHRcdFx0XHRcdFx0cHJldkJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0cHJldkJ0bi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG5cdFx0XHRcdFx0XHRwcmV2QnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYWxsJztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0cmV0dXJuIGJ1dHRvbjtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBleHBhbmRzTW9yZUFuaW1hbEluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG5cdFx0XHQnW2RhdGEtdGFyZ2V0LWFuaW1hbF0nXHJcblx0XHQpO1xyXG5cclxuXHRcdGZ1bmN0aW9uIGV4cGFuZEFuaW1hbEluZm8oKSB7XHJcblx0XHRcdGNvbnN0IHNob3dDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5kYXRhc2V0LnRhcmdldEFuaW1hbCk7XHJcblxyXG5cdFx0XHRpZiAoc2hvd0NvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG5cdFx0XHRcdHRoaXMuaW5uZXJIVE1MID0gdGhpcy5kYXRhc2V0LnNob3d0ZXh0O1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuaW5uZXJIVE1MID0gdGhpcy5kYXRhc2V0LmhpZGV0ZXh0O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRzaG93Q29udGVudC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuXHJcblx0XHRcdGlmIChzaG93Q29udGVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcblx0XHRcdFx0c2hvd0NvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gc2hvd0NvbnRlbnQuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzaG93Q29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSAyMCArICdweCc7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoZG9nc0JveCkge1xyXG5cdFx0XHRkaXNwbGF5UGFnaW5hdGVkSXRlbXMoZG9nQm94QXJyYXksIGRvZ3NCb3gsIGVsZW1lbnRzT25QYWdlLCBjdXJyZW50UGFnZSk7XHJcblx0XHRcdGRpc3BsYXlQYWdpbmF0aW9uKGRvZ0JveEFycmF5LCBwYWdpbmF0aW9uRWxEb2dzLCBlbGVtZW50c09uUGFnZSk7XHJcblxyXG5cdFx0XHRleHBhbmRzTW9yZUFuaW1hbEluZm8uZm9yRWFjaCgoYnRuKSA9PiB7XHJcblx0XHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXhwYW5kQW5pbWFsSW5mbyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChjYXRzQm94KSB7XHJcblx0XHRcdGRpc3BsYXlQYWdpbmF0ZWRJdGVtcyhjYXRCb3hBcnJheSwgY2F0c0JveCwgZWxlbWVudHNPblBhZ2UsIGN1cnJlbnRQYWdlKTtcclxuXHRcdFx0ZGlzcGxheVBhZ2luYXRpb24oY2F0Qm94QXJyYXksIHBhZ2luYXRpb25FbENhdHMsIGVsZW1lbnRzT25QYWdlKTtcclxuXHJcblx0XHRcdGV4cGFuZHNNb3JlQW5pbWFsSW5mby5mb3JFYWNoKChidG4pID0+IHtcclxuXHRcdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBleHBhbmRBbmltYWxJbmZvKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRpZiAoYW5pbWFsc1BhZ2VzKSB7XHJcblx0XHQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRkaXNwbGF5QW5pbWFscygpO1xyXG5cdFx0fSkoKTtcclxuXHR9XHJcbn0pO1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG5cdC8vIGZvcm0gdmFsaWRhdGlvblxyXG5cdGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdC1mb3JtJyk7XHJcblx0Y29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJyk7XHJcblx0Y29uc3QgZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWwnKTtcclxuXHRjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lc3NhZ2UnKTtcclxuXHRjb25zdCBmb3JtQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tYnRuJyk7XHJcblxyXG5cdGlmIChmb3JtKSB7XHJcblx0XHRbXHJcblx0XHRcdCdjbGljaycsXHJcblx0XHRcdCdvbnRvdWNoc3RhcnQnLFxyXG5cdFx0XHQnbW91c2VvdmVyJyxcclxuXHRcdFx0J2tleWRvd24nLFxyXG5cdFx0XHQna2V5cHJlc3MnLFxyXG5cdFx0XHQndG91Y2hzdGFydCcsXHJcblx0XHRcdCd0b3VjaG1vdmUnLFxyXG5cdFx0XS5mb3JFYWNoKFxyXG5cdFx0XHQoZXZlbnQpID0+XHJcblx0XHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgKCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGNoZWNrSW5wdXRzKCkgPT09IGZhbHNlKSB7XHJcblx0XHRcdFx0XHRcdGZvcm1CdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Zm9ybUJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHJcblx0XHRmdW5jdGlvbiBjaGVja0lucHV0cygpIHtcclxuXHRcdFx0Y29uc3QgbmFtZVZhbHVlID0gbmFtZS52YWx1ZS50cmltKCk7XHJcblx0XHRcdGNvbnN0IGVtYWlsVmFsdWUgPSBlbWFpbC52YWx1ZS50cmltKCk7XHJcblx0XHRcdGNvbnN0IG1lc3NhZ2VWYWx1ZSA9IG1lc3NhZ2UudmFsdWUudHJpbSgpO1xyXG5cclxuXHRcdFx0aWYgKG5hbWVWYWx1ZSA9PT0gJycpIHtcclxuXHRcdFx0XHRzZXRFcnJvckZvcihuYW1lLCAnUGxlYXNlIGVudGVyIHlvdXIgZnVsbCBuYW1lJyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0U3VjY2Vzc0ZvcihuYW1lKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGVtYWlsVmFsdWUgPT09ICcnKSB7XHJcblx0XHRcdFx0c2V0RXJyb3JGb3IoZW1haWwsICdQbGVhc2UgZW50ZXIgeW91ciBlbWFpbCBhZGRyZXNzJyk7XHJcblx0XHRcdH0gZWxzZSBpZiAoIWVtYWlsSXNWYWxpZChlbWFpbFZhbHVlKSkge1xyXG5cdFx0XHRcdHNldEVycm9yRm9yKGVtYWlsLCAnRW1haWwgaXMgbm90IHZhbGlkJyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0U3VjY2Vzc0ZvcihlbWFpbCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChtZXNzYWdlVmFsdWUgPT09ICcnKSB7XHJcblx0XHRcdFx0c2V0RXJyb3JGb3IobWVzc2FnZSwgJ1BsZWFzZSBlbnRlciB5b3VyIG1lc3NhZ2UnKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRTdWNjZXNzRm9yKG1lc3NhZ2UpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoXHJcblx0XHRcdFx0bmFtZVZhbHVlID09PSAnJyB8fFxyXG5cdFx0XHRcdGVtYWlsVmFsdWUgPT09ICcnIHx8XHJcblx0XHRcdFx0bWVzc2FnZVZhbHVlID09PSAnJyB8fFxyXG5cdFx0XHRcdCFlbWFpbElzVmFsaWQoZW1haWxWYWx1ZSlcclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gc2V0RXJyb3JGb3IoaW5wdXQsIG1lc3NhZ2UpIHtcclxuXHRcdFx0Y29uc3QgZm9ybSA9IGlucHV0LnBhcmVudEVsZW1lbnQ7XHJcblx0XHRcdGNvbnN0IHNtYWxsID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdzbWFsbCcpO1xyXG5cclxuXHRcdFx0c21hbGwuaW5uZXJUZXh0ID0gbWVzc2FnZTtcclxuXHRcdFx0Zm9ybS5jbGFzc05hbWUgPSAnZm9ybV9fZ3JvdXAgZXJyb3InO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHNldFN1Y2Nlc3NGb3IoaW5wdXQpIHtcclxuXHRcdFx0Y29uc3QgZm9ybSA9IGlucHV0LnBhcmVudEVsZW1lbnQ7XHJcblx0XHRcdGZvcm0uY2xhc3NOYW1lID0gJ2Zvcm1fX2dyb3VwIHN1Y2Nlc3MnO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGVtYWlsSXNWYWxpZChlbWFpbCkge1xyXG5cdFx0XHRjb25zdCByZSA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvLnRlc3QoXHJcblx0XHRcdFx0ZW1haWxcclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdHJldHVybiByZTtcclxuXHRcdH1cclxuXHR9XHJcbn0pO1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIChlKSA9PiB7XG5cdFx0Y29uc3QgcHJlbG9hZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVsb2FkJyk7XG5cblx0XHRwcmVsb2FkLmNsYXNzTGlzdC5hZGQoJ3ByZWxvYWQtZmluaXNoZWQnKTtcblx0fSk7XG5cblx0Y29uc3QgYnRuU2Nyb2xsVG9Ub3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuU2Nyb2xsVG9Ub3AnKTtcblx0YnRuU2Nyb2xsVG9Ub3AuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdHdpbmRvdy5zY3JvbGxUbyh7XG5cdFx0XHR0b3A6IDAsXG5cdFx0XHRsZWZ0OiAwLFxuXHRcdFx0YmVoYXZpb3I6ICdzbW9vdGgnLFxuXHRcdH0pO1xuXHR9KTtcblxuXHRjb25zdCBleHBhbmRzTW9yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRhcmdldF0nKTtcblxuXHRmdW5jdGlvbiBleHBhbmQoKSB7XG5cdFx0Y29uc3Qgc2hvd0NvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRhdGFzZXQudGFyZ2V0KTtcblxuXHRcdGlmIChzaG93Q29udGVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG5cdFx0XHR0aGlzLmlubmVySFRNTCA9IHRoaXMuZGF0YXNldC5zaG93dGV4dDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5pbm5lckhUTUwgPSB0aGlzLmRhdGFzZXQuaGlkZXRleHQ7XG5cdFx0fVxuXG5cdFx0c2hvd0NvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG5cblx0XHRpZiAoc2hvd0NvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuXHRcdFx0c2hvd0NvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gc2hvd0NvbnRlbnQuc2Nyb2xsSGVpZ2h0ICsgJ3B4Jztcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2hvd0NvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gYDIycHhgO1xuXHRcdH1cblx0fVxuXG5cdGV4cGFuZHNNb3JlLmZvckVhY2goKGJ0bikgPT4ge1xuXHRcdGNvbnN0IGNvbnRhaW5lckhlaWdodCA9XG5cdFx0XHRidG4ucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLm9mZnNldEhlaWdodDtcblxuXHRcdGNvbnN0IGV4cGFuZEVsZW1lbnRIZWlnaHQgPVxuXHRcdFx0YnRuLnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5maXJzdEVsZW1lbnRDaGlsZC5vZmZzZXRIZWlnaHQ7XG5cblx0XHRpZiAoY29udGFpbmVySGVpZ2h0ID49IGV4cGFuZEVsZW1lbnRIZWlnaHQpIHtcblx0XHRcdGJ0bi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG5cdFx0XHRidG4uc3R5bGUuaGVpZ2h0ID0gMDtcblx0XHR9XG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXhwYW5kKTtcblx0fSk7XG59KTtcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3QgbW9kYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwtYnRuJyk7XHJcblx0Y29uc3QgbW9kYWxFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpO1xyXG5cdGNvbnN0IG1vZGFsQnRuQ2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2UnKTtcclxuXHJcblx0Ly8gU2hvdyBtb2RhbFxyXG5cdG1vZGFsQnRuLmZvckVhY2goKG1vZGFsKSA9PiB7XHJcblx0XHRtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1vZGFsRWwuY2xhc3NMaXN0LmFkZCgnc2hvdy1tb2RhbCcpKTtcclxuXHR9KTtcclxuXHJcblx0Ly8gSGlkZSBtb2RhbFxyXG5cdG1vZGFsQnRuQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxyXG5cdFx0bW9kYWxFbC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93LW1vZGFsJylcclxuXHQpO1xyXG5cclxuXHQvLyBIaWRlIG1vZGFsIG9uIG91dHNpZGUgY2xpY2tcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT5cclxuXHRcdGUudGFyZ2V0ID09IG1vZGFsID8gbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdy1tb2RhbCcpIDogZmFsc2VcclxuXHQpO1xyXG59KTtcclxuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuXHRjb25zdCBuYXZDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2LWNvbnRhaW5lcicpO1xyXG5cdGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1idG4nKTtcclxuXHRjb25zdCBuYXZMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdi1saXN0Jyk7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoZSkgPT4ge1xyXG5cdFx0aWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPiAwKSB7XHJcblx0XHRcdG5hdkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzdGlja3knKTtcclxuXHRcdFx0YnRuU2Nyb2xsVG9Ub3Auc3R5bGUub3BhY2l0eSA9IDE7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRuYXZDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnc3RpY2t5Jyk7XHJcblx0XHRcdGJ0blNjcm9sbFRvVG9wLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHRtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHRcdG1lbnVCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnY2xpY2tlZCcpO1xyXG5cdFx0bmF2Q29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ292ZXJsYXknKTtcclxuXHRcdG5hdkxpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xyXG5cdH0pO1xyXG59KTtcclxuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuXHQvLyBjYXJvdXNlbFxyXG5cdGNvbnN0IGNhcm91c2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nhcm91c2VsJyk7XHJcblx0Y29uc3QgY2Fyb3VzZWxVcmwgPSAnLi9qcy9jYXJvdXNlbC5qc29uJztcclxuXHRjb25zdCBsb2NhbENhcm91c2VsSlNPTiA9IHJlcXVpcmUoJy4vY2Fyb3VzZWwuanNvbicpO1xyXG5cclxuXHQvKiBmdW5jdGlvbiBnZXRTbGlkZXNEYXRhKCkge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0ZmV0Y2goY2Fyb3VzZWxVcmwpXHJcblx0XHRcdFx0LnRoZW4oKHJlc3ApID0+IHJlc3AuanNvbigpKVxyXG5cdFx0XHRcdC50aGVuKChkYXRhKSA9PiByZXNvbHZlKGRhdGEpKVxyXG5cdFx0XHRcdC5jYXRjaCgoZXJyKSA9PiByZWplY3QoZXJyKSk7XHJcblx0XHR9KTtcclxuXHR9ICovXHJcblxyXG5cdGFzeW5jIGZ1bmN0aW9uIGRpc3BsYXlDYXJvdXNlbCgpIHtcclxuXHRcdC8qIGNvbnN0IGRhdGFMaXN0ID0gYXdhaXQgZ2V0U2xpZGVzRGF0YSgpOyAqL1xyXG5cdFx0Y29uc3Qgc2xpZGVzQXJyYXkgPSBsb2NhbENhcm91c2VsSlNPTi5zbGlkZXM7XHJcblxyXG5cdFx0c2xpZGVzQXJyYXkuZm9yRWFjaCgoc2xpZGUsIHNsaWRlTnVtYmVyKSA9PiB7XHJcblx0XHRcdGNvbnN0IHsgdGl0bGUsIHR5cGUsIGNvbnRlbnQsIGltYWdlLCBpbWFnZVRhYiwgaW1hZ2VNb2IgfSA9IHNsaWRlO1xyXG5cclxuXHRcdFx0bmV3U2xpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdFx0bmV3U2xpZGUuY2xhc3NMaXN0LmFkZCgnY2Fyb3VzZWxfX3NsaWRlJyk7XHJcblxyXG5cdFx0XHRuZXdTbGlkZS5pbm5lckhUTUwgPSBgXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjYXJvdXNlbF9faW1hZ2UtY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHRcdDxwaWN0dXJlIGNsYXNzPVwiY2Fyb3VzZWxfX2ltYWdlLXBpY3R1cmVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8c291cmNlIG1lZGlhPVwiKG1heC13aWR0aDo1OTlweClcIiBzcmNzZXQ9XCIke2ltYWdlTW9ifVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcdDxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOjYwMHB4KVwiIHNyY3NldD1cIiR7aW1hZ2V9XCI+XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIiR7XHJcblx0XHRcdFx0XHRcdFx0XHR3aW5kb3cuaW5uZXJXaWR0aCA+PSA2MDAgPyBpbWFnZSA6IGltYWdlTW9iXHJcblx0XHRcdFx0XHRcdFx0fVwiIGxvYWRpbmc9XCJsYXp5XCIgYWx0PVwiJHt0aXRsZX1cIi8+XHJcblx0XHRcdFx0XHRcdDwvcGljdHVyZT5cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjYXJvdXNlbF9fY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxoMSBjbGFzcz1cImNhcm91c2VsX190aXRsZVwiPiR7dGl0bGV9PC9oMT5cclxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzcz1cImNhcm91c2VsX19kZXNjXCI+JHtjb250ZW50fTwvcD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdGA7XHJcblxyXG5cdFx0XHRjYXJvdXNlbC5hcHBlbmRDaGlsZChuZXdTbGlkZSk7XHJcblxyXG5cdFx0XHRpZiAoc2xpZGVOdW1iZXIgPT09IDApIHtcclxuXHRcdFx0XHRmaXJzdFNsaWRlID0gbmV3U2xpZGU7XHJcblx0XHRcdFx0bmV3U2xpZGUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblx0XHRcdH0gZWxzZSBpZiAoc2xpZGVOdW1iZXIgKyAxID09PSBsb2NhbENhcm91c2VsSlNPTi5zbGlkZXMubGVuZ3RoKSB7XHJcblx0XHRcdFx0bGFzdFNsaWRlID0gbmV3U2xpZGU7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdG5leHRTbGlkZSgpO1xyXG5cdFx0cHJldmlvdXNTbGlkZSgpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gbmV4dFNsaWRlKCkge1xyXG5cdFx0Y29uc3QgbmV4dEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0Jyk7XHJcblxyXG5cdFx0bmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0XHRcdGNvbnN0IGFjdGl2ZVNsaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19zbGlkZS5hY3RpdmUnKTtcclxuXHJcblx0XHRcdGxldCBuZXh0U2libGluZyA9IGFjdGl2ZVNsaWRlLm5leHRFbGVtZW50U2libGluZztcclxuXHJcblx0XHRcdGlmIChuZXh0U2libGluZyA9PSBudWxsKSB7XHJcblx0XHRcdFx0bmV4dFNpYmxpbmcgPSBhY3RpdmVTbGlkZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKG5leHRTaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucygnY2Fyb3VzZWxfX3NsaWRlJykpIHtcclxuXHRcdFx0XHRhY3RpdmVTbGlkZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdFx0XHRuZXh0U2libGluZy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBwcmV2aW91c1NsaWRlKCkge1xyXG5cdFx0Y29uc3QgcHJldkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2Jyk7XHJcblxyXG5cdFx0cHJldkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0XHRcdGNvbnN0IGFjdGl2ZVNsaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19zbGlkZS5hY3RpdmUnKTtcclxuXHJcblx0XHRcdGxldCBuZXh0U2libGluZyA9IGFjdGl2ZVNsaWRlLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XHJcblxyXG5cdFx0XHRpZiAobmV4dFNpYmxpbmcgPT0gbnVsbCkge1xyXG5cdFx0XHRcdG5leHRTaWJsaW5nID0gYWN0aXZlU2xpZGU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChuZXh0U2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ2Nhcm91c2VsX19zbGlkZScpKSB7XHJcblx0XHRcdFx0YWN0aXZlU2xpZGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0XHRcdFx0bmV4dFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0aWYgKGNhcm91c2VsICE9PSBudWxsKSB7XHJcblx0XHQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRkaXNwbGF5Q2Fyb3VzZWwoKTtcclxuXHRcdH0pKCk7XHJcblx0fVxyXG59KTtcclxuIiwid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcblx0Ly8gdGFic1xyXG5cdGNvbnN0IHRhYkxpc3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiY2NvcmRpb25fX2xpc3QtYnRuJyk7XHJcblx0Y29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJjY29yZGlvbl9fY29udGFpbmVyJyk7XHJcblx0Y29uc3QgdGFiY2NvcmRpb25MaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYmNjb3JkaW9uLWxpc3QnKTtcclxuXHRjb25zdCB0YWJzQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJjY29yZGlvbl9fdGFiLWlubmVyJyk7XHJcblx0Y29uc3QgdGFiY2NvcmRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiY2NvcmRpb24nKTtcclxuXHJcblx0ZnVuY3Rpb24gYWN0aXZhdGVUYWJzKCkge1xyXG5cdFx0dGFiTGlzdEJ0bi5mb3JFYWNoKCh0YWIpID0+IHtcclxuXHRcdFx0dGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHRcdFx0XHRjb25zdCB0YWJOYXYgPSB0YWIucGFyZW50RWxlbWVudDtcclxuXHRcdFx0XHRjb25zdCB0YWJzQ29udGFpbmVyID0gdGFiTmF2LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuXHRcdFx0XHRjb25zdCB0YWJOdW1iZXIgPSB0YWIuZGF0YXNldC5mb3JUYWI7XHJcblx0XHRcdFx0Y29uc3QgdGFiVG9BY3RpdmF0ZSA9IHRhYnNDb250YWluZXIucXVlcnlTZWxlY3RvcihcclxuXHRcdFx0XHRcdGAudGFiY2NvcmRpb25fX3RhYltkYXRhLXRhYj1cIiR7dGFiTnVtYmVyfVwiXWBcclxuXHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHR0YWJOYXYucXVlcnlTZWxlY3RvckFsbCgnLnRhYmNjb3JkaW9uX19saXN0LWJ0bicpLmZvckVhY2goKGJ0bikgPT4ge1xyXG5cdFx0XHRcdFx0YnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0dGFic0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcudGFiY2NvcmRpb25fX3RhYicpLmZvckVhY2goKHRhYikgPT4ge1xyXG5cdFx0XHRcdFx0dGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0dGFiLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcclxuXHRcdFx0XHR0YWJUb0FjdGl2YXRlLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcclxuXHJcblx0XHRcdFx0aWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDYwMCkge1xyXG5cdFx0XHRcdFx0dGFic0NvbnRlbnQuZm9yRWFjaCgodGFicykgPT4ge1xyXG5cdFx0XHRcdFx0XHR0YWJzLnN0eWxlLm1heEhlaWdodCA9IHRhYnMuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRpZiAodGFiY2NvcmRpb25MaXN0KSB7XHJcblx0XHRcdHRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XHJcblx0XHRcdFx0dGFiLnF1ZXJ5U2VsZWN0b3IoJy50YWJjY29yZGlvbl9fbGlzdCAudGFiY2NvcmRpb25fX2J0bicpLmNsaWNrKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8vLy8gYWNjb3JkaW9uXHJcblx0Y29uc3QgYWNjb3JkaW9uQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbl9fbGlzdC1idG4nKTtcclxuXHJcblx0ZnVuY3Rpb24gYWN0aXZhdGVBY2NvcmRpb24oKSB7XHJcblx0XHRhY2NvcmRpb25CdG4uZm9yRWFjaCgoYnRuKSA9PiB7XHJcblx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdFx0XHQvLyBjaGVjayBmb3Igb3BlbiBhY2NvcmRpb25cclxuXHRcdFx0XHRjb25zdCBhY2NvcmRpb25CdG5PcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuXHRcdFx0XHRcdCcuYWNjb3JkaW9uX19saXN0LWJ0bi5vcGVuJ1xyXG5cdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdGlmIChhY2NvcmRpb25CdG5PcGVuICYmIGFjY29yZGlvbkJ0bk9wZW4gIT09IGJ0bikge1xyXG5cdFx0XHRcdFx0Ly8gaWYgdGhlcmUgaXMgb3BlbiB0aGVuIHJlbW92ZSBvcGVuIGNsYXNzIGFuZCBzZXQgbWF4aGVpZ2h0IHRvIDBcclxuXHRcdFx0XHRcdGFjY29yZGlvbkJ0bk9wZW4uY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xyXG5cdFx0XHRcdFx0YWNjb3JkaW9uQnRuT3Blbi5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUubWF4SGVpZ2h0ID0gMDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIHNldCBvcGVuIGNsYXNzIHRvIGV2ZXJ5IGNsaWNrZWQgYWNjb3JkaW9uIGJ0blxyXG5cdFx0XHRcdGJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XHJcblx0XHRcdFx0Y29uc3QgYWNjb3JkaW9uQm9keSA9IGJ0bi5uZXh0RWxlbWVudFNpYmxpbmc7XHJcblxyXG5cdFx0XHRcdGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuJykpIHtcclxuXHRcdFx0XHRcdGFjY29yZGlvbkJvZHkuc3R5bGUubWF4SGVpZ2h0ID0gYWNjb3JkaW9uQm9keS5zY3JvbGxIZWlnaHQgKyAncHgnO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRhY2NvcmRpb25Cb2R5LnN0eWxlLm1heEhlaWdodCA9IDA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoZSkgPT4ge1xyXG5cdFx0XHRpZiAod2luZG93LmlubmVyV2lkdGggPCA2MDApIHtcclxuXHRcdFx0XHR0YWJzQ29udGVudC5mb3JFYWNoKCh0YWJzKSA9PiB7XHJcblx0XHRcdFx0XHR0YWJzLnN0eWxlLm1heEhlaWdodCA9IDA7XHJcblx0XHRcdFx0XHRpZiAodGFicy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpKSB7XHJcblx0XHRcdFx0XHRcdHRhYnMucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0aWYgKHRhYmNjb3JkaW9uKSB7XHJcblx0XHRhY3RpdmF0ZVRhYnMoKTtcclxuXHRcdGFjdGl2YXRlQWNjb3JkaW9uKCk7XHJcblx0fVxyXG59KTtcclxuIl0sInByZUV4aXN0aW5nQ29tbWVudCI6Ii8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OHZkMlZpY0dGamF5OWliMjkwYzNSeVlYQWlMQ0ozWldKd1lXTnJPaTh2THk0dmMzSmpMMnB6TDJGa2IzQjBRMjl1ZEdWdWRGTjNhWFJqYUdWeUxtcHpJaXdpZDJWaWNHRmphem92THk4dUwzTnlZeTlxY3k5bVpYUmphRUZ1YVcxaGJITkVZWFJoTG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDNOeVl5OXFjeTltYjNKdFZtRnNhV1JoYVhSdmJpNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXpjbU12YW5NdmJXRnBiaTVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl6Y21NdmFuTXZiVzlrWVd3dWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmMzSmpMMnB6TDI1aGRpNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXpjbU12YW5NdmMyeHBaR1Z5TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDNOeVl5OXFjeTkwWVdKalkyOXlaR2x2Ymk1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8xRkJRVUU3VVVGRFFUczdVVUZGUVR0UlFVTkJPenRSUVVWQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk96dFJRVVZCTzFGQlEwRTdPMUZCUlVFN1VVRkRRVHM3VVVGRlFUdFJRVU5CTzFGQlEwRTdPenRSUVVkQk8xRkJRMEU3TzFGQlJVRTdVVUZEUVRzN1VVRkZRVHRSUVVOQk8xRkJRMEU3VVVGRFFTd3dRMEZCTUVNc1owTkJRV2RETzFGQlF6RkZPMUZCUTBFN08xRkJSVUU3VVVGRFFUdFJRVU5CTzFGQlEwRXNkMFJCUVhkRUxHdENRVUZyUWp0UlFVTXhSVHRSUVVOQkxHbEVRVUZwUkN4alFVRmpPMUZCUXk5RU96dFJRVVZCTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVN4NVEwRkJlVU1zYVVOQlFXbERPMUZCUXpGRkxHZElRVUZuU0N4dFFrRkJiVUlzUlVGQlJUdFJRVU55U1R0UlFVTkJPenRSUVVWQk8xRkJRMEU3VVVGRFFUdFJRVU5CTERKQ1FVRXlRaXd3UWtGQk1FSXNSVUZCUlR0UlFVTjJSQ3hwUTBGQmFVTXNaVUZCWlR0UlFVTm9SRHRSUVVOQk8xRkJRMEU3TzFGQlJVRTdVVUZEUVN4elJFRkJjMFFzSzBSQlFTdEVPenRSUVVWeVNEdFJRVU5CT3pzN1VVRkhRVHRSUVVOQk96czdPenM3T3pzN096czdRVU5zUmtFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQkxFZEJRVWM3UVVGRFNDeEZRVUZGT3p0QlFVVkdPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJMRGhFUVVFNFJDeFBRVUZQTzBGQlEzSkZPMEZCUTBFc1owTkJRV2RETEU5QlFVODdRVUZEZGtNN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeERRVUZET3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMEZEYWtORU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFc01FSkJRVEJDTEcxQ1FVRlBMRU5CUVVNc05rTkJRV2RDT3p0QlFVVnNSRHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVN4SFFVRkhPenRCUVVWSU8wRkJRMEU3TzBGQlJVRTdRVUZEUVN3MlEwRkJOa003TzBGQlJUZERPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0RzN1FVRkZRVHRCUVVOQkxEWkRRVUUyUXp0QlFVTTNRenM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNTMEZCU3pzN1FVRkZURHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3g1UTBGQmVVTXNUVUZCVFN4VFFVRlRMRXRCUVVzc1IwRkJSeXhSUVVGUkxFVkJRVVU3UVVGRE1VVTdRVUZEUVR0QlFVTkJMREJFUVVFd1JDeExRVUZMTzBGQlF5OUVPMEZCUTBFc1MwRkJTenRCUVVOTU8wRkJRMEVzT0VWQlFUaEZMRkZCUVZFc1JVRkJSU3hQUVVGUE8wRkJReTlHTzBGQlEwRXNNRU5CUVRCRE8wRkJRekZETzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeDFSVUZCZFVVc1VVRkJVU3hGUVVGRkxFOUJRVTg3UVVGRGVFWTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMREJGUVVFd1JTeFBRVUZQTzBGQlEycEdPMEZCUTBFN1FVRkRRVHRCUVVOQkxEQkZRVUV3UlN4UFFVRlBPMEZCUTJwR08wRkJRMEU3UVVGRFFUdEJRVU5CTERCRlFVRXdSU3hOUVVGTk8wRkJRMmhHTzBGQlEwRTdRVUZEUVR0QlFVTkJMQ3REUVVFclF5d3dRa0ZCTUVJN1FVRkRla1U3UVVGRFFUdEJRVU5CTzBGQlEwRXNLME5CUVN0RExEQkNRVUV3UWp0QlFVTjZSVHRCUVVOQk8wRkJRMEU3UVVGRFFTd3JRMEZCSzBNc01FSkJRVEJDTzBGQlEzcEZPMEZCUTBFN1FVRkRRVHRCUVVOQkxEQkZRVUV3UlN4TFFVRkxPMEZCUXk5Rk8wRkJRMEU3UVVGRFFUdEJRVU5CTERCRlFVRXdSU3hQUVVGUE8wRkJRMnBHTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzU1VGQlNUczdRVUZGU2p0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc2VVTkJRWGxETEZWQlFWVXNVMEZCVXl4VFFVRlRPMEZCUTNKRk8wRkJRMEVzUzBGQlN5eEZRVUZGTzBGQlExQTdRVUZEUVR0QlFVTkJMREJFUVVFd1JDeFRRVUZUTzBGQlEyNUZPMEZCUTBFN1FVRkRRVHRCUVVOQkxHbENRVUZwUWl4RlFVRkZMRmRCUVZjN1FVRkRPVUk3UVVGRFFTd3dRMEZCTUVNN1FVRkRNVU03UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHhRa0ZCY1VJc1JVRkJSU3hYUVVGWE8wRkJRMnhETzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2JVSkJRVzFDTzBGQlEyNUNPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHRRa0ZCYlVJN1FVRkRia0k3UVVGRFFUdEJRVU5CTzBGQlEwRXNNRVZCUVRCRkxGTkJRVk03UVVGRGJrWTdRVUZEUVR0QlFVTkJPMEZCUTBFc0swTkJRU3RETEd0RFFVRnJRenRCUVVOcVJqdEJRVU5CTzBGQlEwRTdRVUZEUVN3clEwRkJLME1zYTBOQlFXdERPMEZCUTJwR08wRkJRMEU3UVVGRFFUdEJRVU5CTEN0RFFVRXJReXhyUTBGQmEwTTdRVUZEYWtZN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEcxQ1FVRnRRanRCUVVOdVFqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2JVSkJRVzFDTzBGQlEyNUNPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRXNTVUZCU1R0QlFVTktMRWRCUVVjN08wRkJSVWc3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTEVsQlFVazdRVUZEU2pzN1FVRkZRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJMR3RDUVVGclFpeHRRa0ZCYlVJN1FVRkRja003TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hKUVVGSk96dEJRVVZLTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVsQlFVazdPMEZCUlVvN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNUVUZCVFR0QlFVTk9PMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hOUVVGTk8wRkJRMDQ3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRTFCUVUwN1FVRkRUanRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVFVGQlRUdEJRVU5PTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1NVRkJTVHM3UVVGRlNqdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hKUVVGSk8wRkJRMG83UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzU1VGQlNUdEJRVU5LTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRWxCUVVrN1FVRkRTanM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxFbEJRVWs3UVVGRFNqdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEdEJRVU5CTEVOQlFVTTdPenM3T3pzN096czdPenRCUTNadFFrUTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFMUJRVTA3UVVGRFRqdEJRVU5CTzBGQlEwRXNTMEZCU3p0QlFVTk1PMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxFbEJRVWs3UVVGRFNqdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hKUVVGSk8wRkJRMG83UVVGRFFTeEpRVUZKTzBGQlEwbzdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzU1VGQlNUdEJRVU5LTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SlFVRkpPMEZCUTBvN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFTeHBRMEZCYVVNc2VVSkJRWGxDTERaQ1FVRTJRaXhKUVVGSkxGRkJRVkVzU1VGQlNTeFJRVUZSTEVsQlFVa3NVVUZCVVN4SlFVRkpMR2REUVVGblF5eEhRVUZITzBGQlEyeExPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNRMEZCUXpzN096czdPenM3T3pzN08wRkRka1pFTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQkxFVkJRVVU3TzBGQlJVWTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JTEVWQlFVVTdPMEZCUlVZN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVWQlFVVTdRVUZEUml4RFFVRkRPenM3T3pzN096czdPenM3UVVOcVJFUTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSVUZCUlRzN1FVRkZSanRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFTkJRVU03T3pzN096czdPenM3T3p0QlEyNUNSRHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEdEJRVU5CTzBGQlEwRTdRVUZEUVN4RlFVRkZPenRCUVVWR08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSVUZCUlR0QlFVTkdMRU5CUVVNN096czdPenM3T3pzN096dEJRM0JDUkR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxESkNRVUV5UWl4dFFrRkJUeXhEUVVGRExDdERRVUZwUWpzN1FVRkZjRVE3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSUxFVkJRVVU3TzBGQlJVWTdRVUZEUVN3MFEwRkJORU03UVVGRE5VTTdPMEZCUlVFN1FVRkRRU3hWUVVGVkxHdEVRVUZyUkRzN1FVRkZOVVE3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3h0UkVGQmJVUXNVMEZCVXp0QlFVTTFSQ3h4UlVGQmNVVXNUVUZCVFR0QlFVTXpSVHRCUVVOQk8wRkJRMEVzVVVGQlVTeDNRa0ZCZDBJc1RVRkJUVHRCUVVOMFF6czdRVUZGUVR0QlFVTkJPMEZCUTBFc2NVTkJRWEZETEUxQlFVMDdRVUZETTBNc2JVTkJRVzFETEZGQlFWRTdRVUZETTBNN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hKUVVGSk8wRkJRMG83UVVGRFFUdEJRVU5CTEVkQlFVYzdPMEZCUlVnN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0RzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVN4RFFVRkRPenM3T3pzN096czdPenM3UVVOdVIwUTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHZRMEZCYjBNc1ZVRkJWVHRCUVVNNVF6czdRVUZGUVR0QlFVTkJPMEZCUTBFc1MwRkJTenM3UVVGRlREdEJRVU5CTzBGQlEwRXNTMEZCU3pzN1FVRkZURHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRTFCUVUwN1FVRkRUanRCUVVOQkxFbEJRVWs3UVVGRFNpeEhRVUZIT3p0QlFVVklPMEZCUTBFN1FVRkRRVHRCUVVOQkxFbEJRVWs3UVVGRFNqdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRXRCUVVzN1FVRkRURHRCUVVOQk8wRkJRMEVzU1VGQlNUdEJRVU5LTEVkQlFVYzdPMEZCUlVnN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRU3hIUVVGSE8wRkJRMGc3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hEUVVGRElpd2labWxzWlNJNkltWTFNMkpsWkRRNU5tTXlNbUZqTXpjMk5UTXhMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUlGeDBMeThnVkdobElHMXZaSFZzWlNCallXTm9aVnh1SUZ4MGRtRnlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTWdQU0I3ZlR0Y2JseHVJRngwTHk4Z1ZHaGxJSEpsY1hWcGNtVWdablZ1WTNScGIyNWNiaUJjZEdaMWJtTjBhVzl1SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b2JXOWtkV3hsU1dRcElIdGNibHh1SUZ4MFhIUXZMeUJEYUdWamF5QnBaaUJ0YjJSMWJHVWdhWE1nYVc0Z1kyRmphR1ZjYmlCY2RGeDBhV1lvYVc1emRHRnNiR1ZrVFc5a2RXeGxjMXR0YjJSMWJHVkpaRjBwSUh0Y2JpQmNkRngwWEhSeVpYUjFjbTRnYVc1emRHRnNiR1ZrVFc5a2RXeGxjMXR0YjJSMWJHVkpaRjB1Wlhod2IzSjBjenRjYmlCY2RGeDBmVnh1SUZ4MFhIUXZMeUJEY21WaGRHVWdZU0J1WlhjZ2JXOWtkV3hsSUNoaGJtUWdjSFYwSUdsMElHbHVkRzhnZEdobElHTmhZMmhsS1Z4dUlGeDBYSFIyWVhJZ2JXOWtkV3hsSUQwZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwZ1BTQjdYRzRnWEhSY2RGeDBhVG9nYlc5a2RXeGxTV1FzWEc0Z1hIUmNkRngwYkRvZ1ptRnNjMlVzWEc0Z1hIUmNkRngwWlhod2IzSjBjem9nZTMxY2JpQmNkRngwZlR0Y2JseHVJRngwWEhRdkx5QkZlR1ZqZFhSbElIUm9aU0J0YjJSMWJHVWdablZ1WTNScGIyNWNiaUJjZEZ4MGJXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwdVkyRnNiQ2h0YjJSMWJHVXVaWGh3YjNKMGN5d2diVzlrZFd4bExDQnRiMlIxYkdVdVpYaHdiM0owY3l3Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5azdYRzVjYmlCY2RGeDBMeThnUm14aFp5QjBhR1VnYlc5a2RXeGxJR0Z6SUd4dllXUmxaRnh1SUZ4MFhIUnRiMlIxYkdVdWJDQTlJSFJ5ZFdVN1hHNWNiaUJjZEZ4MEx5OGdVbVYwZFhKdUlIUm9aU0JsZUhCdmNuUnpJRzltSUhSb1pTQnRiMlIxYkdWY2JpQmNkRngwY21WMGRYSnVJRzF2WkhWc1pTNWxlSEJ2Y25Sek8xeHVJRngwZlZ4dVhHNWNiaUJjZEM4dklHVjRjRzl6WlNCMGFHVWdiVzlrZFd4bGN5QnZZbXBsWTNRZ0tGOWZkMlZpY0dGamExOXRiMlIxYkdWelgxOHBYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtMGdQU0J0YjJSMWJHVnpPMXh1WEc0Z1hIUXZMeUJsZUhCdmMyVWdkR2hsSUcxdlpIVnNaU0JqWVdOb1pWeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1aklEMGdhVzV6ZEdGc2JHVmtUVzlrZFd4bGN6dGNibHh1SUZ4MEx5OGdaR1ZtYVc1bElHZGxkSFJsY2lCbWRXNWpkR2x2YmlCbWIzSWdhR0Z5Ylc5dWVTQmxlSEJ2Y25SelhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1RZ1BTQm1kVzVqZEdsdmJpaGxlSEJ2Y25SekxDQnVZVzFsTENCblpYUjBaWElwSUh0Y2JpQmNkRngwYVdZb0lWOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVieWhsZUhCdmNuUnpMQ0J1WVcxbEtTa2dlMXh1SUZ4MFhIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGVIQnZjblJ6TENCdVlXMWxMQ0I3SUdWdWRXMWxjbUZpYkdVNklIUnlkV1VzSUdkbGREb2daMlYwZEdWeUlIMHBPMXh1SUZ4MFhIUjlYRzRnWEhSOU8xeHVYRzRnWEhRdkx5QmtaV1pwYm1VZ1gxOWxjMDF2WkhWc1pTQnZiaUJsZUhCdmNuUnpYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuSWdQU0JtZFc1amRHbHZiaWhsZUhCdmNuUnpLU0I3WEc0Z1hIUmNkR2xtS0hSNWNHVnZaaUJUZVcxaWIyd2dJVDA5SUNkMWJtUmxabWx1WldRbklDWW1JRk41YldKdmJDNTBiMU4wY21sdVoxUmhaeWtnZTF4dUlGeDBYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQlRlVzFpYjJ3dWRHOVRkSEpwYm1kVVlXY3NJSHNnZG1Gc2RXVTZJQ2ROYjJSMWJHVW5JSDBwTzF4dUlGeDBYSFI5WEc0Z1hIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGVIQnZjblJ6TENBblgxOWxjMDF2WkhWc1pTY3NJSHNnZG1Gc2RXVTZJSFJ5ZFdVZ2ZTazdYRzRnWEhSOU8xeHVYRzRnWEhRdkx5QmpjbVZoZEdVZ1lTQm1ZV3RsSUc1aGJXVnpjR0ZqWlNCdlltcGxZM1JjYmlCY2RDOHZJRzF2WkdVZ0ppQXhPaUIyWVd4MVpTQnBjeUJoSUcxdlpIVnNaU0JwWkN3Z2NtVnhkV2x5WlNCcGRGeHVJRngwTHk4Z2JXOWtaU0FtSURJNklHMWxjbWRsSUdGc2JDQndjbTl3WlhKMGFXVnpJRzltSUhaaGJIVmxJR2x1ZEc4Z2RHaGxJRzV6WEc0Z1hIUXZMeUJ0YjJSbElDWWdORG9nY21WMGRYSnVJSFpoYkhWbElIZG9aVzRnWVd4eVpXRmtlU0J1Y3lCdlltcGxZM1JjYmlCY2RDOHZJRzF2WkdVZ0ppQTRmREU2SUdKbGFHRjJaU0JzYVd0bElISmxjWFZwY21WY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1ZENBOUlHWjFibU4wYVc5dUtIWmhiSFZsTENCdGIyUmxLU0I3WEc0Z1hIUmNkR2xtS0cxdlpHVWdKaUF4S1NCMllXeDFaU0E5SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b2RtRnNkV1VwTzF4dUlGeDBYSFJwWmlodGIyUmxJQ1lnT0NrZ2NtVjBkWEp1SUhaaGJIVmxPMXh1SUZ4MFhIUnBaaWdvYlc5a1pTQW1JRFFwSUNZbUlIUjVjR1Z2WmlCMllXeDFaU0E5UFQwZ0oyOWlhbVZqZENjZ0ppWWdkbUZzZFdVZ0ppWWdkbUZzZFdVdVgxOWxjMDF2WkhWc1pTa2djbVYwZFhKdUlIWmhiSFZsTzF4dUlGeDBYSFIyWVhJZ2JuTWdQU0JQWW1wbFkzUXVZM0psWVhSbEtHNTFiR3dwTzF4dUlGeDBYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5Jb2JuTXBPMXh1SUZ4MFhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvYm5Nc0lDZGtaV1poZFd4MEp5d2dleUJsYm5WdFpYSmhZbXhsT2lCMGNuVmxMQ0IyWVd4MVpUb2dkbUZzZFdVZ2ZTazdYRzRnWEhSY2RHbG1LRzF2WkdVZ0ppQXlJQ1ltSUhSNWNHVnZaaUIyWVd4MVpTQWhQU0FuYzNSeWFXNW5KeWtnWm05eUtIWmhjaUJyWlhrZ2FXNGdkbUZzZFdVcElGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ2h1Y3l3Z2EyVjVMQ0JtZFc1amRHbHZiaWhyWlhrcElIc2djbVYwZFhKdUlIWmhiSFZsVzJ0bGVWMDdJSDB1WW1sdVpDaHVkV3hzTENCclpYa3BLVHRjYmlCY2RGeDBjbVYwZFhKdUlHNXpPMXh1SUZ4MGZUdGNibHh1SUZ4MEx5OGdaMlYwUkdWbVlYVnNkRVY0Y0c5eWRDQm1kVzVqZEdsdmJpQm1iM0lnWTI5dGNHRjBhV0pwYkdsMGVTQjNhWFJvSUc1dmJpMW9ZWEp0YjI1NUlHMXZaSFZzWlhOY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YmlBOUlHWjFibU4wYVc5dUtHMXZaSFZzWlNrZ2UxeHVJRngwWEhSMllYSWdaMlYwZEdWeUlEMGdiVzlrZFd4bElDWW1JRzF2WkhWc1pTNWZYMlZ6VFc5a2RXeGxJRDljYmlCY2RGeDBYSFJtZFc1amRHbHZiaUJuWlhSRVpXWmhkV3gwS0NrZ2V5QnlaWFIxY200Z2JXOWtkV3hsV3lka1pXWmhkV3gwSjEwN0lIMGdPbHh1SUZ4MFhIUmNkR1oxYm1OMGFXOXVJR2RsZEUxdlpIVnNaVVY0Y0c5eWRITW9LU0I3SUhKbGRIVnliaUJ0YjJSMWJHVTdJSDA3WEc0Z1hIUmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WkNoblpYUjBaWElzSUNkaEp5d2daMlYwZEdWeUtUdGNiaUJjZEZ4MGNtVjBkWEp1SUdkbGRIUmxjanRjYmlCY2RIMDdYRzVjYmlCY2RDOHZJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrdVkyRnNiRnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXZJRDBnWm5WdVkzUnBiMjRvYjJKcVpXTjBMQ0J3Y205d1pYSjBlU2tnZXlCeVpYUjFjbTRnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzS0c5aWFtVmpkQ3dnY0hKdmNHVnlkSGtwT3lCOU8xeHVYRzRnWEhRdkx5QmZYM2RsWW5CaFkydGZjSFZpYkdsalgzQmhkR2hmWDF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV3SUQwZ1hDSmNJanRjYmx4dVhHNGdYSFF2THlCTWIyRmtJR1Z1ZEhKNUlHMXZaSFZzWlNCaGJtUWdjbVYwZFhKdUlHVjRjRzl5ZEhOY2JpQmNkSEpsZEhWeWJpQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y3lBOUlEQXBPMXh1SWl3aVpHOWpkVzFsYm5RdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblJFOU5RMjl1ZEdWdWRFeHZZV1JsWkNjc0lHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhIUm9hWE4wYjNKNUxuSmxjR3hoWTJWVGRHRjBaU2h1ZFd4c0xDQnVkV3hzTENBbklDY3BPMXh5WEc1Y2RHTnZibk4wSUhSaFlsTjNhWFJqYUdWeWN5QTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNKQmJHd29KMXRrWVhSaExYTjNhWFJqYUdWeVhTY3BPMXh5WEc1Y2NseHVYSFIwWVdKVGQybDBZMmhsY25NdVptOXlSV0ZqYUNnb2RHRmlVM2RwZEdOb0tTQTlQaUI3WEhKY2JseDBYSFJqYjI1emRDQjBZV0pUZDJsMFkyaGxjaUE5SUhSaFlsTjNhWFJqYUR0Y2NseHVYSFJjZEdOdmJuTjBJSEJoWjJWSlpDQTlJSFJoWWxOM2FYUmphR1Z5TG1SaGRHRnpaWFF1ZEdGaU8xeHlYRzVjY2x4dVhIUmNkSFJoWWxOM2FYUmphR1Z5TG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjJOc2FXTnJKeXdnS0dVcElEMCtJSHRjY2x4dVhIUmNkRngwWkc5amRXMWxiblJjY2x4dVhIUmNkRngwWEhRdWNYVmxjbmxUWld4bFkzUnZjaWduTG1Ga2IzQjBYMTlzYVhOMExXbDBaVzB1WVdOMGFYWmxKeWxjY2x4dVhIUmNkRngwWEhRdVkyeGhjM05NYVhOMExuSmxiVzkyWlNnbllXTjBhWFpsSnlrN1hISmNibHh5WEc1Y2RGeDBYSFIwWVdKVGQybDBZMmhsY2k1d1lYSmxiblJGYkdWdFpXNTBMbU5zWVhOelRHbHpkQzVoWkdRb0oyRmpkR2wyWlNjcE8xeHlYRzVjY2x4dVhIUmNkRngwYzNkcGRHTm9VR0ZuWlNod1lXZGxTV1FwTzF4eVhHNWNkRngwZlNrN1hISmNibHgwZlNrN1hISmNibHh5WEc1Y2RHWjFibU4wYVc5dUlITjNhWFJqYUZCaFoyVW9jR0ZuWlVsa0tTQjdYSEpjYmx4MFhIUmpiMjV6ZENCamRYSnlaVzUwVUdGblpTQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5NXdZV2RsTG1GamRHbDJaU2NwTzF4eVhHNWNkRngwWTI5dWMzUWdZM1Z5Y21WdWRGQmhaMlZJWldGa1pYSWdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtDY3VjR0ZuWlMxb1pXRmtaWEl1WVdOMGFYWmxKeWs3WEhKY2JseHlYRzVjZEZ4MFkzVnljbVZ1ZEZCaFoyVXVZMnhoYzNOTWFYTjBMbkpsYlc5MlpTZ25ZV04wYVhabEp5azdYSEpjYmx4MFhIUmpkWEp5Wlc1MFVHRm5aVWhsWVdSbGNpNWpiR0Z6YzB4cGMzUXVjbVZ0YjNabEtDZGhZM1JwZG1VbktUdGNjbHh1WEhKY2JseDBYSFJqYjI1emRDQnVaWGgwVUdGblpTQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb1lDNXdZV2RsVzJSaGRHRXRjR0ZuWlQxY0lpUjdjR0ZuWlVsa2ZWd2lYV0FwTzF4eVhHNWNkRngwWTI5dWMzUWdibVY0ZEZCaFoyVklaV0ZrWlhJZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0Z4eVhHNWNkRngwWEhSZ0xuQmhaMlV0YUdWaFpHVnlXMlJoZEdFdGFHVmhaR1Z5UFZ3aUpIdHdZV2RsU1dSOVhDSmRZRnh5WEc1Y2RGeDBLVHRjY2x4dVhIUmNkRzVsZUhSUVlXZGxMbU5zWVhOelRHbHpkQzVoWkdRb0oyRmpkR2wyWlNjcE8xeHlYRzVjZEZ4MGJtVjRkRkJoWjJWSVpXRmtaWEl1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25ZV04wYVhabEp5azdYSEpjYmx4MGZWeHlYRzU5S1R0Y2NseHVJaXdpWkc5amRXMWxiblF1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduUkU5TlEyOXVkR1Z1ZEV4dllXUmxaQ2NzSUdaMWJtTjBhVzl1SUNncElIdGNjbHh1WEhSamIyNXpkQ0JoYm1sdFlXeHpWWEpzSUQwZ0p5NHVMMnB6TDJGdWFXMWhiSE11YW5OdmJpYzdYSEpjYmx4MFkyOXVjM1FnWVc1cGJXRnNjMUJoWjJWeklEMGdaRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkRUo1U1dRb0oyRnVhVzFoYkhNdGNHRm5aWE1uS1R0Y2NseHVYSFJqYjI1emRDQmtiMmR6UW05NElEMGdaRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkRUo1U1dRb0oyUnZaM010WW05NEp5azdYSEpjYmx4MFkyOXVjM1FnWTJGMGMwSnZlQ0E5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2RqWVhSekxXSnZlQ2NwTzF4eVhHNWNjbHh1WEhSamIyNXpkQ0JzYjJOaGJFRnVhVzFoYkhOS1UwOU9JRDBnY21WeGRXbHlaU2duTGk5aGJtbHRZV3h6TG1wemIyNG5LVHRjY2x4dVhISmNibHgwTHlvZ1kyOXVjM1FnWjJWMFFXNXBiV0ZzYzBSaGRHRWdQU0JoYzNsdVl5QW9LU0E5UGlCN1hISmNibHgwWEhSamIyNXpkQ0J5WlhOd2IyNXpaU0E5SUdGM1lXbDBJR1psZEdOb0tHRnVhVzFoYkhOVmNtd3BPMXh5WEc1Y2RGeDBZMjl1YzNRZ1pHRjBZU0E5SUdGM1lXbDBJSEpsYzNCdmJuTmxMbXB6YjI0b0tUdGNjbHh1WEhKY2JseDBYSFJ5WlhSMWNtNGdaR0YwWVR0Y2NseHVYSFI5T3lBcUwxeHlYRzVjY2x4dVhIUmpiMjV6ZENCa2IyZE9kVzFpWlhJZ1BTQmtiMk4xYldWdWRDNW5aWFJGYkdWdFpXNTBRbmxKWkNnblpHOW5UblZ0WW1WeUp5azdYSEpjYmx4MFkyOXVjM1FnWTJGMFRuVnRZbVZ5SUQwZ1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvSjJOaGRFNTFiV0psY2ljcE8xeHlYRzVjY2x4dVhIUmhjM2x1WXlCbWRXNWpkR2x2YmlCa2FYTndiR0Y1UVc1cGJXRnNUblZ0WW1WeWN5Z3BJSHRjY2x4dVhIUmNkQzhxSUdOdmJuTjBJR1JoZEdGTWFYTjBJRDBnWVhkaGFYUWdaMlYwUVc1cGJXRnNjMFJoZEdFb0tUc2dLaTljY2x4dVhISmNibHgwWEhSamIyNXpkQ0JoYm1sdFlXeHpRWEp5WVhrZ1BTQnNiMk5oYkVGdWFXMWhiSE5LVTA5T0xtRnVhVzFoYkhNN1hISmNibHh5WEc1Y2RGeDBiR1YwSUdSdlozTkJjbkpoZVU1MWJXSmxjaUE5SUdGdWFXMWhiSE5CY25KaGVWc3dYUzVrYjJkekxteGxibWQwYUR0Y2NseHVYSFJjZEd4bGRDQmpZWFJ6UVhKeVlYbE9kVzFpWlhJZ1BTQmhibWx0WVd4elFYSnlZWGxiTUYwdVkyRjBjeTVzWlc1bmRHZzdYSEpjYmx4eVhHNWNkRngwWkc5blRuVnRZbVZ5TG1sdWJtVnlWR1Y0ZENBOUlHUnZaM05CY25KaGVVNTFiV0psY2p0Y2NseHVYSFJjZEdOaGRFNTFiV0psY2k1cGJtNWxjbFJsZUhRZ1BTQmpZWFJ6UVhKeVlYbE9kVzFpWlhJN1hISmNibHgwZlZ4eVhHNWNjbHh1WEhScFppQW9LR1J2WjA1MWJXSmxjaXdnWTJGMFRuVnRZbVZ5S1NrZ2UxeHlYRzVjZEZ4MEtHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhIUmNkRngwWkdsemNHeGhlVUZ1YVcxaGJFNTFiV0psY25Nb0tUdGNjbHh1WEhSY2RIMHBLQ2s3WEhKY2JseDBmVnh5WEc1Y2NseHVYSFJoYzNsdVl5Qm1kVzVqZEdsdmJpQmthWE53YkdGNVFXNXBiV0ZzY3lncElIdGNjbHh1WEhSY2RDOHFJR052Ym5OMElHUmhkR0ZNYVhOMElEMGdZWGRoYVhRZ1oyVjBRVzVwYldGc2MwUmhkR0VvS1RzZ0tpOWNjbHh1WEhSY2RHTnZibk4wSUdGdWFXMWhiSE5CY25KaGVTQTlJR3h2WTJGc1FXNXBiV0ZzYzBwVFQwNHVZVzVwYldGc2N6dGNjbHh1WEhKY2JseDBYSFJoYm1sdFlXeHpRWEp5WVhrdVptOXlSV0ZqYUNnb1lXNXBiV0ZzS1NBOVBpQjdYSEpjYmx4MFhIUmNkR1J2WjNOQmNuSmhlU0E5SUdGdWFXMWhiQzVrYjJkek8xeHlYRzVjZEZ4MFhIUmpZWFJ6UVhKeVlYa2dQU0JoYm1sdFlXd3VZMkYwY3p0Y2NseHVYSEpjYmx4MFhIUmNkR1J2WjNOQmNuSmhlUzVtYjNKRllXTm9LQ2hrYjJjcElEMCtJSHRjY2x4dVhIUmNkRngwWEhSamIyNXpkQ0I3WEhKY2JseDBYSFJjZEZ4MFhIUnVkVzFpWlhJc1hISmNibHgwWEhSY2RGeDBYSFJ6Y0dWamFXVnpMRnh5WEc1Y2RGeDBYSFJjZEZ4MFluSmxaV1FzWEhKY2JseDBYSFJjZEZ4MFhIUmpiMnh2Y2l4Y2NseHVYSFJjZEZ4MFhIUmNkSGRsYVdkb2RDeGNjbHh1WEhSY2RGeDBYSFJjZEdobGFXZG9kQ3hjY2x4dVhIUmNkRngwWEhSY2RHTnZZWFFzWEhKY2JseDBYSFJjZEZ4MFhIUmlhWEowYUN4Y2NseHVYSFJjZEZ4MFhIUmNkRzVoYldVc1hISmNibHgwWEhSY2RGeDBYSFJuWlc1a1pYSXNYSEpjYmx4MFhIUmNkRngwWEhScGJXRm5aU3hjY2x4dVhIUmNkRngwWEhSY2RHUmxjMk1zWEhKY2JseDBYSFJjZEZ4MFhIUmhaRzl3ZEdWa0xGeHlYRzVjZEZ4MFhIUmNkSDBnUFNCa2IyYzdYSEpjYmx4eVhHNWNkRngwWEhSY2RHUnZaMEp2ZUNBOUlHUnZZM1Z0Wlc1MExtTnlaV0YwWlVWc1pXMWxiblFvSjJScGRpY3BPMXh5WEc1Y2RGeDBYSFJjZEdSdlowSnZlQzVqYkdGemMweHBjM1F1WVdSa0tDZHdZV2RsWDE5aWIzZ25LVHRjY2x4dVhIUmNkRngwWEhSaFpHOXdkR1ZrSUQwOVBTQW5lV1Z6SnlBL0lHUnZaMEp2ZUM1amJHRnpjMHhwYzNRdVlXUmtLQ2RoWkc5d2RHVmtKeWtnT2lBbkp6dGNjbHh1WEhKY2JseDBYSFJjZEZ4MFkyOXVjM1FnWkc5bldXVmhjbk1nUFNCaWFYSjBhRHRjY2x4dVhISmNibHgwWEhSY2RGeDBZMjl1YzNRZ2JXbHNhWE5sWTNOQ1pYUjNaV1Z1UkU5Q1lXNWtNVGszTUNBOUlFUmhkR1V1Y0dGeWMyVW9aRzluV1dWaGNuTXBPMXh5WEc1Y2RGeDBYSFJjZEdOdmJuTjBJRzFwYkdselpXTnpRbVYwZDJWbGJrNVBWMkZ1WkRFNU56QWdQU0JFWVhSbExtNXZkeWdwTzF4eVhHNWNkRngwWEhSY2RHTnZibk4wSUdGblpVbHVUV2xzYVhObFkzTWdQVnh5WEc1Y2RGeDBYSFJjZEZ4MGJXbHNhWE5sWTNOQ1pYUjNaV1Z1VGs5WFlXNWtNVGszTUNBdElHMXBiR2x6WldOelFtVjBkMlZsYmtSUFFtRnVaREU1TnpBN1hISmNibHh5WEc1Y2RGeDBYSFJjZEdOdmJuTjBJRzFwYkdselpXTnpJRDBnWVdkbFNXNU5hV3hwYzJWamN6dGNjbHh1WEhSY2RGeDBYSFJqYjI1emRDQnpaV056SUQwZ01UQXdNRHRjY2x4dVhIUmNkRngwWEhSamIyNXpkQ0J0YVc1eklEMGdjMlZqY3lBcUlEWXdPMXh5WEc1Y2RGeDBYSFJjZEdOdmJuTjBJR2h2ZFhJZ1BTQnRhVzV6SUNvZ05qQTdYSEpjYmx4MFhIUmNkRngwWTI5dWMzUWdaR0Y1SUQwZ2FHOTFjaUFxSURJME8xeHlYRzVjZEZ4MFhIUmNkR052Ym5OMElIbGxZWElnUFNCa1lYa2dLaUF6TmpVN1hISmNibHh5WEc1Y2RGeDBYSFJjZEd4bGRDQjVaV0Z5Y3lBOUlFMWhkR2d1Y205MWJtUW9iV2xzYVhObFkzTWdMeUI1WldGeUtUdGNjbHh1WEhKY2JseDBYSFJjZEZ4MFpHOW5RbTk0TG1sdWJtVnlTRlJOVENBOUlHQmNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR1JwZGlCamJHRnpjejFjSW5CaFoyVmZYMkp2ZUMxMGIzQmNJajVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHBiV2NnYzNKalBWd2lMaVI3YVcxaFoyVjlYQ0lnWVd4MFBWd2lKSHR1WVcxbGZTQWtlM053WldOcFpYTjlYQ0o5THo1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOWthWFkrWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4a2FYWWdZMnhoYzNNOVhDSndZV2RsWDE5aWIzZ3RZbTkwZEc5dFhDSStYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGFETWdZMnhoYzNNOVhDSndZV2RsWDE5aWIzZ3RkR2wwYkdWY0lqNGtlMjVoYldWOUpIdGNjbHh1WEhSY2RGeDBYSFJjZEdGa2IzQjBaV1FnUFQwOUlDZDVaWE1uSUQ4Z1lDQXRJRHh6Y0dGdVBtRmtiM0IwWldROEwzTndZVzQrWUNBNklDY25YSEpjYmx4MFhIUmNkRngwZlR3dmFETStYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOFpHbDJJR05zWVhOelBWd2ljR0ZuWlY5ZlltOTRMV052Ym5SbGJuUmNJajVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4WkdsMklHTnNZWE56UFZ3aVpYaHdZVzVrVFc5eVpVTnZiblJsYm5SY0lpQnBaRDFjSW5Ob2IzZE5iM0psTFNSN2MzQmxZMmxsYzMwa2UyNTFiV0psY24xY0lqNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhBZ1kyeGhjM005WENKd1lXZGxYMTlpYjNndGRHVjRkRndpUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSkh0a1pYTmpmVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOEwzQStYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzlrYVhZK1hISmNiaUFnSUNCY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOFpHbDJJR05zWVhOelBWd2laWGh3WVc1a1RXOXlaVWh2YkdSbGNsd2lQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOFluVjBkRzl1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JrWVhSaExXaHBaR1YwWlhoMFBWd2lMaTR1VW1WaFpDQnNaWE56WENKY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdSaGRHRXRjMmh2ZDNSbGVIUTlYQ0l1TGk1U1pXRmtJRzF2Y21WY0lseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pHRjBZUzEwWVhKblpYUXRZVzVwYldGc1BWd2ljMmh2ZDAxdmNtVXRKSHR6Y0dWamFXVnpmU1I3Ym5WdFltVnlmVndpWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYkdGemN6MWNJbUoxZEhSdmJpQnphRzkzVFc5eVpWd2lYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUQ1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM0dUxsSmxZV1FnYlc5eVpWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4TDJKMWRIUnZiajVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4TDJScGRqNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dlpHbDJQbHh5WEc0Z0lDQWdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGRXd2dZMnhoYzNNOVhDSndZV2RsWDE5aWIzZ3RhV052Ym5OY0lqNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThiR2tnWTJ4aGMzTTlYQ0p3WVdkbFgxOWliM2d0YVdOdmJsd2lQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGFTQmpiR0Z6Y3oxY0ltWmhjeUJtWVMxM1pXbG5hSFJjSWo0OEwybGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUGp4emNHRnVJR05zWVhOelBWd2ljR0ZuWlY5ZlltOTRMV2xqYjI0dExYUmxlSFJjSWo0a2UzZGxhV2RvZEgwZ2EyYzhMM053WVc0K1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOXNhVDVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YkdrZ1kyeGhjM005WENKd1lXZGxYMTlpYjNndGFXTnZibHdpUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThhU0JqYkdGemN6MWNJbVpoY3lCbVlTMWhjbkp2ZDNNdFlXeDBMWFpjSWo0OEwybGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUGp4emNHRnVJR05zWVhOelBWd2ljR0ZuWlY5ZlltOTRMV2xqYjI0dExYUmxlSFJjSWo0a2UyaGxhV2RvZEgwZ1kyMDhMM053WVc0K1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOXNhVDVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YkdrZ1kyeGhjM005WENKd1lXZGxYMTlpYjNndGFXTnZibHdpUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThhU0JqYkdGemN6MWNJbVpoY3lCbVlTMWpZV3hsYm1SaGNpMWphR1ZqYTF3aVBqd3ZhVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBK1BITndZVzRnWTJ4aGMzTTlYQ0p3WVdkbFgxOWliM2d0YVdOdmJpMHRkR1Y0ZEZ3aVBpUjdlV1ZoY25OOUlIbHlMand2YzNCaGJqNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThMMnhwUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4c2FTQmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMXBZMjl1WENJK1hISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRHhwSUdOc1lYTnpQVndpWm1GeklHWmhMWEJoYkdWMGRHVmNJajQ4TDJsY2NseHVYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBQanh6Y0dGdUlHTnNZWE56UFZ3aWNHRm5aVjlmWW05NExXbGpiMjR0TFhSbGVIUmNJajRrZTJOdmJHOXlXekJkSUQ4Z1kyOXNiM0piTUYwZ09pQW5MU2Q5UEM5emNHRnVQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2YkdrK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHeHBJR05zWVhOelBWd2ljR0ZuWlY5ZlltOTRMV2xqYjI1Y0lqNWNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwUEdrZ1kyeGhjM005WENKbVlYTWdabUV0Y0dGc1pYUjBaVndpUGp3dmFWeHlYRzVjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFErUEhOd1lXNGdZMnhoYzNNOVhDSndZV2RsWDE5aWIzZ3RhV052YmkwdGRHVjRkRndpUGlSN1kyOXNiM0piTVYwZ1B5QmpiMnh2Y2xzeFhTQTZJQ2N0SjMwOEwzTndZVzQrWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5c2FUNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThiR2tnWTJ4aGMzTTlYQ0p3WVdkbFgxOWliM2d0YVdOdmJsd2lQbHh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhROGFTQmpiR0Z6Y3oxY0ltWmhjeUJtWVMxd1lXeGxkSFJsWENJK1BDOXBYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEQ0OGMzQmhiaUJqYkdGemN6MWNJbkJoWjJWZlgySnZlQzFwWTI5dUxTMTBaWGgwWENJK0pIdGpiMnh2Y2xzeVhTQS9JR052Ykc5eVd6SmRJRG9nSnkwbmZUd3ZjM0JoYmo1Y2NseHVYSFJjZEZ4MFhIUmNkRngwWEhSY2REd3ZiR2srWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEd4cElHTnNZWE56UFZ3aWNHRm5aVjlmWW05NExXbGpiMjVjSWo1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR2tnWTJ4aGMzTTlYQ0ptWVhNZ1ptRXRjR0YzWENJK1BDOXBYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUQ0OGMzQmhiaUJqYkdGemN6MWNJbkJoWjJWZlgySnZlQzFwWTI5dUxTMTBaWGgwWENJK0pIdGpiMkYwZlR3dmMzQmhiajVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4TDJ4cFBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHNhU0JqYkdGemN6MWNJbkJoWjJWZlgySnZlQzFwWTI5dVhDSStYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4cElHTnNZWE56UFZ3aVptRnpJR1poTFhabGJuVnpMVzFoY25OY0lqNDhMMmxjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BqeHpjR0Z1SUdOc1lYTnpQVndpY0dGblpWOWZZbTk0TFdsamIyNHRMWFJsZUhSY0lqNGtlMmRsYm1SbGNuMDhMM053WVc0K1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOXNhVDVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEd3ZkV3crWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dlpHbDJQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWUR0Y2NseHVYSEpjYmx4MFhIUmNkRngwWkc5bmMwSnZlQzVoY0hCbGJtUkRhR2xzWkNoa2IyZENiM2dwTzF4eVhHNWNkRngwWEhSOUtUdGNjbHh1WEhKY2JseDBYSFJjZEdOaGRITkJjbkpoZVM1bWIzSkZZV05vS0NoallYUXBJRDArSUh0Y2NseHVYSFJjZEZ4MFhIUmpZWFJDYjNnZ1BTQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0Nka2FYWW5LVHRjY2x4dVhIUmNkRngwWEhSallYUkNiM2d1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25jR0ZuWlY5ZlltOTRKeWs3WEhKY2JseHlYRzVjZEZ4MFhIUmNkR052Ym5OMElHTmhkRmxsWVhKeklEMGdZMkYwTG1KcGNuUm9PMXh5WEc1Y2NseHVYSFJjZEZ4MFhIUmpiMjV6ZENCdGFXeHBjMlZqYzBKbGRIZGxaVzVFVDBKaGJtUXhPVGN3WTJGMElEMGdSR0YwWlM1d1lYSnpaU2hqWVhSWlpXRnljeWs3WEhKY2JseDBYSFJjZEZ4MFkyOXVjM1FnYldsc2FYTmxZM05DWlhSM1pXVnVUazlYWVc1a01UazNNQ0E5SUVSaGRHVXVibTkzS0NrN1hISmNibHh5WEc1Y2RGeDBYSFJjZEdOdmJuTjBJR0ZuWlVsdVRXbHNhWE5sWTNORFlYUWdQVnh5WEc1Y2RGeDBYSFJjZEZ4MGJXbHNhWE5sWTNOQ1pYUjNaV1Z1VGs5WFlXNWtNVGszTUNBdElHMXBiR2x6WldOelFtVjBkMlZsYmtSUFFtRnVaREU1TnpCallYUTdYSEpjYmx4eVhHNWNkRngwWEhSY2RHTnZibk4wSUcxcGJHbHpaV056UTJGMElEMGdZV2RsU1c1TmFXeHBjMlZqYzBOaGREdGNjbHh1WEhSY2RGeDBYSFJqYjI1emRDQnpaV056SUQwZ01UQXdNRHRjY2x4dVhIUmNkRngwWEhSamIyNXpkQ0J0YVc1eklEMGdjMlZqY3lBcUlEWXdPMXh5WEc1Y2RGeDBYSFJjZEdOdmJuTjBJR2h2ZFhJZ1BTQnRhVzV6SUNvZ05qQTdYSEpjYmx4MFhIUmNkRngwWTI5dWMzUWdaR0Y1SUQwZ2FHOTFjaUFxSURJME8xeHlYRzVjZEZ4MFhIUmNkR052Ym5OMElIbGxZWElnUFNCa1lYa2dLaUF6TmpVN1hISmNibHh5WEc1Y2RGeDBYSFJjZEd4bGRDQjVaV0Z5YzBOaGRDQTlJRTFoZEdndWNtOTFibVFvYldsc2FYTmxZM05EWVhRZ0x5QjVaV0Z5S1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwWTJGMFFtOTRMbWx1Ym1WeVNGUk5UQ0E5SUdCY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHUnBkaUJqYkdGemN6MWNJbkJoWjJWZlgySnZlQzEwYjNCY0lqNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4cGJXY2djM0pqUFZ3aUxpUjdZMkYwTG1sdFlXZGxmVndpSUdGc2REMWNJaVI3WTJGMExtNWhiV1Y5SUNSN1hISmNibHgwWEhSY2RGeDBYSFJqWVhRdWMzQmxZMmxsYzF4eVhHNWNkRngwWEhSY2RIMWNJbjB2UGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOEwyUnBkajVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdScGRpQmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMWliM1IwYjIxY0lqNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4b015QmpiR0Z6Y3oxY0luQmhaMlZmWDJKdmVDMTBhWFJzWlZ3aVBpUjdZMkYwTG01aGJXVjlQQzlvTXo1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhrYVhZZ1kyeGhjM005WENKd1lXZGxYMTlpYjNndFkyOXVkR1Z1ZEZ3aVBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeGthWFlnWTJ4aGMzTTlYQ0psZUhCaGJtUk5iM0psUTI5dWRHVnVkRndpSUdsa1BWd2ljMmh2ZDAxdmNtVXRKSHRjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEdOaGRDNXpjR1ZqYVdWelhISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MGZTUjdZMkYwTG01MWJXSmxjbjFjSWo1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQSEFnWTJ4aGMzTTlYQ0p3WVdkbFgxOWliM2d0ZEdWNGRGd2lQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdKSHRqWVhRdVpHVnpZMzFjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOXdQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2WkdsMlBseHlYRzRnSUNBZ1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHUnBkaUJqYkdGemN6MWNJbVY0Y0dGdVpFMXZjbVZJYjJ4a1pYSmNJajVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHSjFkSFJ2Ymx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWkdGMFlTMW9hV1JsZEdWNGREMWNJaTR1TGxKbFlXUWdiR1Z6YzF3aVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCa1lYUmhMWE5vYjNkMFpYaDBQVndpTGk0dVVtVmhaQ0J0YjNKbFhDSmNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHUmhkR0V0ZEdGeVoyVjBMV0Z1YVcxaGJEMWNJbk5vYjNkTmIzSmxMU1I3WEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEdOaGRDNXpjR1ZqYVdWelhISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSOUpIdGpZWFF1Ym5WdFltVnlmVndpWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYkdGemN6MWNJbUoxZEhSdmJpQnphRzkzVFc5eVpWd2lYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUQ1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM0dUxsSmxZV1FnYlc5eVpWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4TDJKMWRIUnZiajVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4TDJScGRqNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dlpHbDJQbHh5WEc0Z0lDQWdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGRXd2dZMnhoYzNNOVhDSndZV2RsWDE5aWIzZ3RhV052Ym5OY0lqNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThiR2tnWTJ4aGMzTTlYQ0p3WVdkbFgxOWliM2d0YVdOdmJsd2lQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGFTQmpiR0Z6Y3oxY0ltWmhjeUJtWVMxM1pXbG5hSFJjSWo0OEwybGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUGp4emNHRnVJR05zWVhOelBWd2ljR0ZuWlY5ZlltOTRMV2xqYjI0dExYUmxlSFJjSWo0a2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEdOaGRDNTNaV2xuYUhSY2NseHVYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBmU0JyWnp3dmMzQmhiajVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4TDJ4cFBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHNhU0JqYkdGemN6MWNJbkJoWjJWZlgySnZlQzFwWTI5dVhDSStYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4cElHTnNZWE56UFZ3aVptRnpJR1poTFdGeWNtOTNjeTFoYkhRdGRsd2lQand2YVZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQStQSE53WVc0Z1kyeGhjM005WENKd1lXZGxYMTlpYjNndGFXTnZiaTB0ZEdWNGRGd2lQaVI3WEhKY2JseDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBZMkYwTG1obGFXZG9kRnh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSOVkyMDhMM053WVc0K1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOXNhVDVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YkdrZ1kyeGhjM005WENKd1lXZGxYMTlpYjNndGFXTnZibHdpUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThhU0JqYkdGemN6MWNJbVpoY3lCbVlTMWpZV3hsYm1SaGNpMWphR1ZqYTF3aVBqd3ZhVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBK1BITndZVzRnWTJ4aGMzTTlYQ0p3WVdkbFgxOWliM2d0YVdOdmJpMHRkR1Y0ZEZ3aVBpUjdlV1ZoY25ORFlYUjlJSGx5TGp3dmMzQmhiajVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4TDJ4cFBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHNhU0JqYkdGemN6MWNJbkJoWjJWZlgySnZlQzFwWTI5dVhDSStYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBYSFJjZER4cElHTnNZWE56UFZ3aVptRnpJR1poTFhCaGJHVjBkR1ZjSWo0OEwybGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwUGp4emNHRnVJR05zWVhOelBWd2ljR0ZuWlY5ZlltOTRMV2xqYjI0dExYUmxlSFJjSWo0a2UyTmhkQzVqYjJ4dmNsc3dYU0EvSUdOaGRDNWpiMnh2Y2xzd1hTQTZJQ2N0SjMwOEwzTndZVzQrWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5c2FUNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThiR2tnWTJ4aGMzTTlYQ0p3WVdkbFgxOWliM2d0YVdOdmJsd2lQbHh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhROGFTQmpiR0Z6Y3oxY0ltWmhjeUJtWVMxd1lXeGxkSFJsWENJK1BDOXBYSEpjYmx4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEQ0OGMzQmhiaUJqYkdGemN6MWNJbkJoWjJWZlgySnZlQzFwWTI5dUxTMTBaWGgwWENJK0pIdGpZWFF1WTI5c2IzSmJNVjBnUHlCallYUXVZMjlzYjNKYk1WMGdPaUFuTFNkOVBDOXpjR0Z1UGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dmJHaytYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR3hwSUdOc1lYTnpQVndpY0dGblpWOWZZbTk0TFdsamIyNWNJajVjY2x4dVhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFBHa2dZMnhoYzNNOVhDSm1ZWE1nWm1FdGNHRnNaWFIwWlZ3aVBqd3ZhVnh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhRK1BITndZVzRnWTJ4aGMzTTlYQ0p3WVdkbFgxOWliM2d0YVdOdmJpMHRkR1Y0ZEZ3aVBpUjdZMkYwTG1OdmJHOXlXekpkSUQ4Z1kyRjBMbU52Ykc5eVd6SmRJRG9nSnkwbmZUd3ZjM0JoYmo1Y2NseHVYSFJjZEZ4MFhIUmNkRngwWEhSY2REd3ZiR2srWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEd4cElHTnNZWE56UFZ3aWNHRm5aVjlmWW05NExXbGpiMjVjSWo1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR2tnWTJ4aGMzTTlYQ0ptWVhNZ1ptRXRjR0YzWENJK1BDOXBYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUQ0OGMzQmhiaUJqYkdGemN6MWNJbkJoWjJWZlgySnZlQzFwWTI5dUxTMTBaWGgwWENJK0pIdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSallYUXVZMjloZEZ4eVhHNWNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUjlQQzl6Y0dGdVBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEd3ZiR2srWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEd4cElHTnNZWE56UFZ3aWNHRm5aVjlmWW05NExXbGpiMjVjSWo1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR2tnWTJ4aGMzTTlYQ0ptWVhNZ1ptRXRkbVZ1ZFhNdGJXRnljMXdpUGp3dmFWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0ErUEhOd1lXNGdZMnhoYzNNOVhDSndZV2RsWDE5aWIzZ3RhV052YmkwdGRHVjRkRndpUGlSN1hISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWTJGMExtZGxibVJsY2x4eVhHNWNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUjlQQzl6Y0dGdVBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEd3ZiR2srWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThMM1ZzUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOEwyUnBkajVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdBN1hISmNibHh5WEc1Y2RGeDBYSFJjZEdOaGRITkNiM2d1WVhCd1pXNWtRMmhwYkdRb1kyRjBRbTk0S1R0Y2NseHVYSFJjZEZ4MGZTazdYSEpjYmx4MFhIUjlLVHRjY2x4dVhISmNibHgwWEhSc1pYUWdaRzluUW05NFFYSnlZWGtnUFNCYkxpNHVaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2tGc2JDZ25JMlJ2WjNNdFltOTRJQzV3WVdkbFgxOWliM2duS1YwN1hISmNibHgwWEhSc1pYUWdZMkYwUW05NFFYSnlZWGtnUFNCYkxpNHVaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2tGc2JDZ25JMk5oZEhNdFltOTRJQzV3WVdkbFgxOWliM2duS1YwN1hISmNibHgwWEhSc1pYUWdZM1Z5Y21WdWRGQmhaMlVnUFNBeE8xeHlYRzVjZEZ4MGJHVjBJR1ZzWlcxbGJuUnpUMjVRWVdkbElEMGdORHRjY2x4dVhISmNibHgwWEhSamIyNXpkQ0J3WVdkcGJtRjBhVzl1Uld4RWIyZHpJRDBnWkc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEVKNVNXUW9KMlJ2WjNNdGNHRm5hVzVoZEdsdmJpY3BPMXh5WEc1Y2RGeDBZMjl1YzNRZ2NHRm5hVzVoZEdsdmJrVnNRMkYwY3lBOUlHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0NkallYUnpMWEJoWjJsdVlYUnBiMjRuS1R0Y2NseHVYSEpjYmx4MFhIUm1kVzVqZEdsdmJpQmthWE53YkdGNVVHRm5hVzVoZEdWa1NYUmxiWE1vYVhSbGJYTXNJSGR5WVhCd1pYSXNJR2wwWlcxelVHVnlVR0ZuWlN3Z2NHRm5aU2tnZTF4eVhHNWNkRngwWEhSM2NtRndjR1Z5TG1sdWJtVnlTRlJOVENBOUlDY25PMXh5WEc1Y2RGeDBYSFJ3WVdkbExTMDdYSEpjYmx4eVhHNWNkRngwWEhSc1pYUWdjM1JoY25RZ1BTQnBkR1Z0YzFCbGNsQmhaMlVnS2lCd1lXZGxPMXh5WEc1Y2RGeDBYSFJzWlhRZ1pXNWtJRDBnYzNSaGNuUWdLeUJwZEdWdGMxQmxjbEJoWjJVN1hISmNibHgwWEhSY2RHeGxkQ0J3WVdkcGJtRjBaV1JKZEdWdGN5QTlJR2wwWlcxekxuTnNhV05sS0hOMFlYSjBMQ0JsYm1RcE8xeHlYRzVjY2x4dVhIUmNkRngwY0dGbmFXNWhkR1ZrU1hSbGJYTXVabTl5UldGamFDZ29hWFJsYlNrZ1BUNGdlMXh5WEc1Y2RGeDBYSFJjZEd4bGRDQnBkR1Z0Uld3Z1BTQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0Nka2FYWW5LVHRjY2x4dVhIUmNkRngwWEhScGRHVnRSV3d1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25jR0ZuWlY5ZlltOTRKeWs3WEhKY2JseHlYRzVjZEZ4MFhIUmNkR2wwWlcxRmJDQTlJR2wwWlcwN1hISmNibHh5WEc1Y2RGeDBYSFJjZEhkeVlYQndaWEl1WVhCd1pXNWtRMmhwYkdRb2FYUmxiVVZzS1R0Y2NseHVYSFJjZEZ4MGZTazdYSEpjYmx4MFhIUjlYSEpjYmx4eVhHNWNkRngwWm5WdVkzUnBiMjRnWkdsemNHeGhlVkJoWjJsdVlYUnBiMjRvYVhSbGJYTXNJSGR5WVhCd1pYSXNJR2wwWlcxelVHVnlVR0ZuWlNrZ2UxeHlYRzVjZEZ4MFhIUjNjbUZ3Y0dWeUxtbHVibVZ5U0ZSTlRDQTlJQ2NuTzF4eVhHNWNjbHh1WEhSY2RGeDBiR1YwSUhCaFoyVkRiM1Z1ZENBOUlFMWhkR2d1WTJWcGJDaHBkR1Z0Y3k1c1pXNW5kR2dnTHlCcGRHVnRjMUJsY2xCaFoyVXBPMXh5WEc1Y2NseHVYSFJjZEZ4MFptOXlJQ2hzWlhRZ2FTQTlJREU3SUdrZ1BDQndZV2RsUTI5MWJuUWdLeUF4T3lCcEt5c3BJSHRjY2x4dVhIUmNkRngwWEhSc1pYUWdZblJ1SUQwZ2NHRm5hVzVoZEdsdmJrSjFkSFJ2YmlocExDQndZV2RsUTI5MWJuUXBPMXh5WEc1Y2NseHVYSFJjZEZ4MFhIUmlkRzR1YzNSNWJHVXVkMmxrZEdnZ1BTQW5NQ2M3WEhKY2JseDBYSFJjZEZ4MFluUnVMbk4wZVd4bExtOTJaWEptYkc5M0lEMGdKMmhwWkdSbGJpYzdYSEpjYmx4MFhIUmNkRngwWW5SdUxuTjBlV3hsTG0xaGNtZHBiaUE5SUNjd0p6dGNjbHh1WEhKY2JseDBYSFJjZEZ4MGQzSmhjSEJsY2k1aGNIQmxibVJEYUdsc1pDaGlkRzRwTzF4eVhHNWNkRngwWEhSOVhISmNibHh5WEc1Y2RGeDBYSFJzWlhRZ2JtVjRkRUowYmlBOUlHNWxlSFJRWVdkbEtIQmhaMlZEYjNWdWRDazdYSEpjYmx4MFhIUmNkSGR5WVhCd1pYSXVZWEJ3Wlc1a1EyaHBiR1FvYm1WNGRFSjBiaWs3WEhKY2JseHlYRzVjZEZ4MFhIUnNaWFFnY0hKbGRrSjBiaUE5SUhCeVpYWlFZV2RsS0hCaFoyVkRiM1Z1ZENrN1hISmNibHgwWEhSY2RIZHlZWEJ3WlhJdWNISmxjR1Z1WkNod2NtVjJRblJ1S1R0Y2NseHVYSEpjYmx4MFhIUmNkR3hsZENCamRYSnlaVzUwUW5SdVJHOW5jeUE5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9YSEpjYmx4MFhIUmNkRngwSnlOa2IyZHpJQzV3WVdkcGJtRjBhVzl1TFdKMGJpNWhZM1JwZG1VblhISmNibHgwWEhSY2RDazdYSEpjYmx4MFhIUmNkR3hsZENCamRYSnlaVzUwUW5SdVEyRjBjeUE5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9YSEpjYmx4MFhIUmNkRngwSnlOallYUnpJQzV3WVdkcGJtRjBhVzl1TFdKMGJpNWhZM1JwZG1VblhISmNibHgwWEhSY2RDazdYSEpjYmx4eVhHNWNkRngwWEhScFppQW9ZM1Z5Y21WdWRFSjBia1J2WjNNZ0ppWWdZM1Z5Y21WdWRFSjBia05oZEhNcElIdGNjbHh1WEhSY2RGeDBYSFJqZFhKeVpXNTBRblJ1Ukc5bmN5NWpiR0Z6YzB4cGMzUXVZV1JrS0NkbmNtOTFjQ2NwTzF4eVhHNWNkRngwWEhSY2RHTjFjbkpsYm5SQ2RHNUViMmR6TG01bGVIUkZiR1Z0Wlc1MFUybGliR2x1Wnk1amJHRnpjMHhwYzNRdVlXUmtLQ2RuY205MWNDY3BPMXh5WEc1Y2RGeDBYSFJjZEdOMWNuSmxiblJDZEc1RWIyZHpMbTVsZUhSRmJHVnRaVzUwVTJsaWJHbHVaeTV1WlhoMFJXeGxiV1Z1ZEZOcFlteHBibWN1WTJ4aGMzTk1hWE4wTG1Ga1pDaGNjbHh1WEhSY2RGeDBYSFJjZENkbmNtOTFjQ2RjY2x4dVhIUmNkRngwWEhRcE8xeHlYRzVjZEZ4MFhIUmNkR04xY25KbGJuUkNkRzVFYjJkekxuQnlaWFpwYjNWelJXeGxiV1Z1ZEZOcFlteHBibWN1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25aM0p2ZFhBbktUdGNjbHh1WEhKY2JseDBYSFJjZEZ4MFkzVnljbVZ1ZEVKMGJrTmhkSE11WTJ4aGMzTk1hWE4wTG1Ga1pDZ25aM0p2ZFhBbktUdGNjbHh1WEhSY2RGeDBYSFJqZFhKeVpXNTBRblJ1UTJGMGN5NXVaWGgwUld4bGJXVnVkRk5wWW14cGJtY3VZMnhoYzNOTWFYTjBMbUZrWkNnblozSnZkWEFuS1R0Y2NseHVYSFJjZEZ4MFhIUmpkWEp5Wlc1MFFuUnVRMkYwY3k1dVpYaDBSV3hsYldWdWRGTnBZbXhwYm1jdWJtVjRkRVZzWlcxbGJuUlRhV0pzYVc1bkxtTnNZWE56VEdsemRDNWhaR1FvWEhKY2JseDBYSFJjZEZ4MFhIUW5aM0p2ZFhBblhISmNibHgwWEhSY2RGeDBLVHRjY2x4dVhIUmNkRngwWEhSamRYSnlaVzUwUW5SdVEyRjBjeTV3Y21WMmFXOTFjMFZzWlcxbGJuUlRhV0pzYVc1bkxtTnNZWE56VEdsemRDNWhaR1FvSjJkeWIzVndKeWs3WEhKY2JseDBYSFJjZEgxY2NseHVYSFJjZEgxY2NseHVYSEpjYmx4MFhIUm1kVzVqZEdsdmJpQnVaWGgwVUdGblpTaHdZV2RsUTI5MWJuUXBJSHRjY2x4dVhIUmNkRngwYkdWMElHNWxlSFJDZEc0Z1BTQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0NkaWRYUjBiMjRuS1R0Y2NseHVYSFJjZEZ4MGJtVjRkRUowYmk1amJHRnpjMHhwYzNRdVlXUmtLQ2R1WlhoMEp5azdYSEpjYmx4MFhIUmNkRzVsZUhSQ2RHNHVhVzV1WlhKVVpYaDBJRDBnSno0bk8xeHlYRzVjZEZ4MFhIUnVaWGgwUW5SdUxtTnNZWE56VEdsemRDNWhaR1FvSjNCaFoybHVZWFJwYjI0dFluUnVKeWs3WEhKY2JseHlYRzVjZEZ4MFhIUnVaWGgwUW5SdUxtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0oyTnNhV05ySnl3Z0tHVXBJRDArSUh0Y2NseHVYSFJjZEZ4MFhIUnBaaUFvYm1WNGRFSjBiaTV3WVhKbGJuUkZiR1Z0Wlc1MElEMDlJSEJoWjJsdVlYUnBiMjVGYkVSdlozTXBJSHRjY2x4dVhIUmNkRngwWEhSY2RHUnBjM0JzWVhsUVlXZHBibUYwWldSSmRHVnRjeWhjY2x4dVhIUmNkRngwWEhSY2RGeDBaRzluUW05NFFYSnlZWGtzWEhKY2JseDBYSFJjZEZ4MFhIUmNkR1J2WjNOQ2IzZ3NYSEpjYmx4MFhIUmNkRngwWEhSY2RHVnNaVzFsYm5SelQyNVFZV2RsTEZ4eVhHNWNkRngwWEhSY2RGeDBYSFJqZFhKeVpXNTBVR0ZuWlZ4eVhHNWNkRngwWEhSY2RGeDBLVHRjY2x4dVhISmNibHgwWEhSY2RGeDBYSFJzWlhRZ1lXTjBhWFpsUW5SdVJHOW5JRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpaGNjbHh1WEhSY2RGeDBYSFJjZEZ4MEp5TmtiMmR6SUM1d1lXZHBibUYwYVc5dUxXSjBiaTVoWTNScGRtVW5YSEpjYmx4MFhIUmNkRngwWEhRcE8xeHlYRzVjY2x4dVhIUmNkRngwWEhSY2RHRmpkR2wyWlVKMGJrUnZaeTV1WlhoMFJXeGxiV1Z1ZEZOcFlteHBibWN1WTJ4cFkyc29LVHRjY2x4dVhISmNibHgwWEhSY2RGeDBYSFJwWmlBb1kzVnljbVZ1ZEZCaFoyVWdQVDA5SUhCaFoyVkRiM1Z1ZENrZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhSdVpYaDBRblJ1TG5OMGVXeGxMbTl3WVdOcGRIa2dQU0FuTUM0MUp6dGNjbHh1WEhSY2RGeDBYSFJjZEZ4MGJtVjRkRUowYmk1emRIbHNaUzV3YjJsdWRHVnlSWFpsYm5SeklEMGdKMjV2Ym1Vbk8xeHlYRzVjZEZ4MFhIUmNkRngwZlZ4eVhHNWNjbHh1WEhSY2RGeDBYSFJjZEd4bGRDQndjbVYyUW5SdUlEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkkyUnZaM01nTG5CeVpYWW5LVHRjY2x4dVhISmNibHgwWEhSY2RGeDBYSFJwWmlBb1kzVnljbVZ1ZEZCaFoyVWdJVDA5SURFcElIdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MGNISmxka0owYmk1emRIbHNaUzV2Y0dGamFYUjVJRDBnSnpFbk8xeHlYRzVjZEZ4MFhIUmNkRngwWEhSd2NtVjJRblJ1TG5OMGVXeGxMbkJ2YVc1MFpYSkZkbVZ1ZEhNZ1BTQW5ZV3hzSnp0Y2NseHVYSFJjZEZ4MFhIUmNkSDFjY2x4dVhISmNibHgwWEhSY2RGeDBYSFJwWmlBb1lXTjBhWFpsUW5SdVJHOW5LU0I3WEhKY2JseDBYSFJjZEZ4MFhIUmNkR0ZqZEdsMlpVSjBia1J2Wnk1amJHRnpjMHhwYzNRdVlXUmtLQ2RuY205MWNDY3BPMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmhZM1JwZG1WQ2RHNUViMmN1Ym1WNGRFVnNaVzFsYm5SVGFXSnNhVzVuTG1Oc1lYTnpUR2x6ZEM1aFpHUW9KMmR5YjNWd0p5azdYSEpjYmx4MFhIUmNkRngwWEhSY2RHRmpkR2wyWlVKMGJrUnZaeTV3Y21WMmFXOTFjMFZzWlcxbGJuUlRhV0pzYVc1bkxtTnNZWE56VEdsemRDNWhaR1FvSjJkeWIzVndKeWs3WEhKY2JseDBYSFJjZEZ4MFhIUjlYSEpjYmx4MFhIUmNkRngwZlZ4eVhHNWNjbHh1WEhSY2RGeDBYSFJwWmlBb2JtVjRkRUowYmk1d1lYSmxiblJGYkdWdFpXNTBJRDA5SUhCaFoybHVZWFJwYjI1RmJFTmhkSE1wSUh0Y2NseHVYSFJjZEZ4MFhIUmNkR1JwYzNCc1lYbFFZV2RwYm1GMFpXUkpkR1Z0Y3loY2NseHVYSFJjZEZ4MFhIUmNkRngwWTJGMFFtOTRRWEp5WVhrc1hISmNibHgwWEhSY2RGeDBYSFJjZEdOaGRITkNiM2dzWEhKY2JseDBYSFJjZEZ4MFhIUmNkR1ZzWlcxbGJuUnpUMjVRWVdkbExGeHlYRzVjZEZ4MFhIUmNkRngwWEhSamRYSnlaVzUwVUdGblpWeHlYRzVjZEZ4MFhIUmNkRngwS1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwWEhSc1pYUWdZV04wYVhabFFuUnVRMkYwSUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWhjY2x4dVhIUmNkRngwWEhSY2RGeDBKeU5qWVhSeklDNXdZV2RwYm1GMGFXOXVMV0owYmk1aFkzUnBkbVVuWEhKY2JseDBYSFJjZEZ4MFhIUXBPMXh5WEc1Y2NseHVYSFJjZEZ4MFhIUmNkR0ZqZEdsMlpVSjBia05oZEM1dVpYaDBSV3hsYldWdWRGTnBZbXhwYm1jdVkyeHBZMnNvS1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwWEhScFppQW9ZM1Z5Y21WdWRGQmhaMlVnUFQwOUlIQmhaMlZEYjNWdWRDa2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUnVaWGgwUW5SdUxuTjBlV3hsTG05d1lXTnBkSGtnUFNBbk1DNDFKenRjY2x4dVhIUmNkRngwWEhSY2RGeDBibVY0ZEVKMGJpNXpkSGxzWlM1d2IybHVkR1Z5UlhabGJuUnpJRDBnSjI1dmJtVW5PMXh5WEc1Y2RGeDBYSFJjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkRngwWEhSY2RHeGxkQ0J3Y21WMlFuUnVJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25JMk5oZEhNZ0xuQnlaWFluS1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwWEhScFppQW9ZM1Z5Y21WdWRGQmhaMlVnSVQwOUlERXBJSHRjY2x4dVhIUmNkRngwWEhSY2RGeDBjSEpsZGtKMGJpNXpkSGxzWlM1dmNHRmphWFI1SUQwZ0p6RW5PMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUndjbVYyUW5SdUxuTjBlV3hsTG5CdmFXNTBaWEpGZG1WdWRITWdQU0FuWVd4c0p6dGNjbHh1WEhSY2RGeDBYSFJjZEgxY2NseHVYSEpjYmx4MFhIUmNkRngwWEhScFppQW9ZV04wYVhabFFuUnVRMkYwS1NCN1hISmNibHgwWEhSY2RGeDBYSFJjZEdGamRHbDJaVUowYmtOaGRDNWpiR0Z6YzB4cGMzUXVZV1JrS0NkbmNtOTFjQ2NwTzF4eVhHNWNkRngwWEhSY2RGeDBYSFJoWTNScGRtVkNkRzVEWVhRdWJtVjRkRVZzWlcxbGJuUlRhV0pzYVc1bkxtTnNZWE56VEdsemRDNWhaR1FvSjJkeWIzVndKeWs3WEhKY2JseDBYSFJjZEZ4MFhIUmNkR0ZqZEdsMlpVSjBia05oZEM1d2NtVjJhVzkxYzBWc1pXMWxiblJUYVdKc2FXNW5MbU5zWVhOelRHbHpkQzVoWkdRb0oyZHliM1Z3SnlrN1hISmNibHgwWEhSY2RGeDBYSFI5WEhKY2JseDBYSFJjZEZ4MGZWeHlYRzVjZEZ4MFhIUjlLVHRjY2x4dVhISmNibHgwWEhSY2RISmxkSFZ5YmlCdVpYaDBRblJ1TzF4eVhHNWNkRngwZlZ4eVhHNWNjbHh1WEhSY2RHWjFibU4wYVc5dUlIQnlaWFpRWVdkbEtIQmhaMlZEYjNWdWRDa2dlMXh5WEc1Y2RGeDBYSFJzWlhRZ2NISmxka0owYmlBOUlHUnZZM1Z0Wlc1MExtTnlaV0YwWlVWc1pXMWxiblFvSjJKMWRIUnZiaWNwTzF4eVhHNWNkRngwWEhSd2NtVjJRblJ1TG1Oc1lYTnpUR2x6ZEM1aFpHUW9KM0J5WlhZbktUdGNjbHh1WEhSY2RGeDBjSEpsZGtKMGJpNXBibTVsY2xSbGVIUWdQU0FuUENjN1hISmNibHgwWEhSY2RIQnlaWFpDZEc0dVkyeGhjM05NYVhOMExtRmtaQ2duY0dGbmFXNWhkR2x2YmkxaWRHNG5LVHRjY2x4dVhISmNibHgwWEhSY2RIQnlaWFpDZEc0dVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblkyeHBZMnNuTENBb1pTa2dQVDRnZTF4eVhHNWNkRngwWEhSY2RHbG1JQ2h3Y21WMlFuUnVMbkJoY21WdWRFVnNaVzFsYm5RZ1BUMGdjR0ZuYVc1aGRHbHZia1ZzUkc5bmN5a2dlMXh5WEc1Y2RGeDBYSFJjZEZ4MFpHbHpjR3hoZVZCaFoybHVZWFJsWkVsMFpXMXpLRnh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmtiMmRDYjNoQmNuSmhlU3hjY2x4dVhIUmNkRngwWEhSY2RGeDBaRzluYzBKdmVDeGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFpXeGxiV1Z1ZEhOUGJsQmhaMlVzWEhKY2JseDBYSFJjZEZ4MFhIUmNkR04xY25KbGJuUlFZV2RsWEhKY2JseDBYSFJjZEZ4MFhIUXBPMXh5WEc1Y2NseHVYSFJjZEZ4MFhIUmNkR3hsZENCaFkzUnBkbVZDZEc1RWIyY2dQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtGeHlYRzVjZEZ4MFhIUmNkRngwWEhRbkkyUnZaM01nTG5CaFoybHVZWFJwYjI0dFluUnVMbUZqZEdsMlpTZGNjbHh1WEhSY2RGeDBYSFJjZENrN1hISmNibHh5WEc1Y2RGeDBYSFJjZEZ4MFlXTjBhWFpsUW5SdVJHOW5MbkJ5WlhacGIzVnpSV3hsYldWdWRGTnBZbXhwYm1jdVkyeHBZMnNvS1R0Y2NseHVYSEpjYmx4MFhIUmNkRngwWEhSc1pYUWdibVY0ZEVKMGJpQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5TmtiMmR6SUM1dVpYaDBKeWs3WEhKY2JseHlYRzVjZEZ4MFhIUmNkRngwYVdZZ0tHTjFjbkpsYm5SUVlXZGxJQ0U5UFNCd1lXZGxRMjkxYm5RcElIdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MGJtVjRkRUowYmk1emRIbHNaUzV2Y0dGamFYUjVJRDBnSnpFbk8xeHlYRzVjZEZ4MFhIUmNkRngwWEhSdVpYaDBRblJ1TG5OMGVXeGxMbkJ2YVc1MFpYSkZkbVZ1ZEhNZ1BTQW5ZV3hzSnp0Y2NseHVYSFJjZEZ4MFhIUmNkSDFjY2x4dVhISmNibHgwWEhSY2RGeDBYSFJwWmlBb1kzVnljbVZ1ZEZCaFoyVWdQVDA5SURFcElIdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MGNISmxka0owYmk1emRIbHNaUzV2Y0dGamFYUjVJRDBnSnpBdU5TYzdYSEpjYmx4MFhIUmNkRngwWEhSY2RIQnlaWFpDZEc0dWMzUjViR1V1Y0c5cGJuUmxja1YyWlc1MGN5QTlJQ2R1YjI1bEp6dGNjbHh1WEhSY2RGeDBYSFJjZEgxY2NseHVYSEpjYmx4MFhIUmNkRngwWEhScFppQW9ZV04wYVhabFFuUnVSRzluS1NCN1hISmNibHgwWEhSY2RGeDBYSFJjZEdGamRHbDJaVUowYmtSdlp5NWpiR0Z6YzB4cGMzUXVZV1JrS0NkbmNtOTFjQ2NwTzF4eVhHNWNkRngwWEhSY2RGeDBYSFJoWTNScGRtVkNkRzVFYjJjdWJtVjRkRVZzWlcxbGJuUlRhV0pzYVc1bkxtTnNZWE56VEdsemRDNWhaR1FvSjJkeWIzVndKeWs3WEhKY2JseDBYSFJjZEZ4MFhIUmNkR0ZqZEdsMlpVSjBia1J2Wnk1d2NtVjJhVzkxYzBWc1pXMWxiblJUYVdKc2FXNW5MbU5zWVhOelRHbHpkQzVoWkdRb0oyZHliM1Z3SnlrN1hISmNibHgwWEhSY2RGeDBYSFI5WEhKY2JseDBYSFJjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkRngwWEhScFppQW9jSEpsZGtKMGJpNXdZWEpsYm5SRmJHVnRaVzUwSUQwOUlIQmhaMmx1WVhScGIyNUZiRU5oZEhNcElIdGNjbHh1WEhSY2RGeDBYSFJjZEdScGMzQnNZWGxRWVdkcGJtRjBaV1JKZEdWdGN5aGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFkyRjBRbTk0UVhKeVlYa3NYSEpjYmx4MFhIUmNkRngwWEhSY2RHTmhkSE5DYjNnc1hISmNibHgwWEhSY2RGeDBYSFJjZEdWc1pXMWxiblJ6VDI1UVlXZGxMRnh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmpkWEp5Wlc1MFVHRm5aVnh5WEc1Y2RGeDBYSFJjZEZ4MEtUdGNjbHh1WEhKY2JseDBYSFJjZEZ4MFhIUnNaWFFnWVdOMGFYWmxRblJ1UTJGMElEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2loY2NseHVYSFJjZEZ4MFhIUmNkRngwSnlOallYUnpJQzV3WVdkcGJtRjBhVzl1TFdKMGJpNWhZM1JwZG1VblhISmNibHgwWEhSY2RGeDBYSFFwTzF4eVhHNWNjbHh1WEhSY2RGeDBYSFJjZEdGamRHbDJaVUowYmtOaGRDNXdjbVYyYVc5MWMwVnNaVzFsYm5SVGFXSnNhVzVuTG1Oc2FXTnJLQ2s3WEhKY2JseHlYRzVjZEZ4MFhIUmNkRngwYkdWMElHNWxlSFJDZEc0Z1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0NjalkyRjBjeUF1Ym1WNGRDY3BPMXh5WEc1Y2NseHVYSFJjZEZ4MFhIUmNkR2xtSUNoamRYSnlaVzUwVUdGblpTQWhQVDBnY0dGblpVTnZkVzUwS1NCN1hISmNibHgwWEhSY2RGeDBYSFJjZEc1bGVIUkNkRzR1YzNSNWJHVXViM0JoWTJsMGVTQTlJQ2N4Snp0Y2NseHVYSFJjZEZ4MFhIUmNkRngwYm1WNGRFSjBiaTV6ZEhsc1pTNXdiMmx1ZEdWeVJYWmxiblJ6SUQwZ0oyRnNiQ2M3WEhKY2JseDBYSFJjZEZ4MFhIUjlYSEpjYmx4eVhHNWNkRngwWEhSY2RGeDBhV1lnS0dOMWNuSmxiblJRWVdkbElEMDlQU0F4S1NCN1hISmNibHgwWEhSY2RGeDBYSFJjZEhCeVpYWkNkRzR1YzNSNWJHVXViM0JoWTJsMGVTQTlJQ2N3TGpVbk8xeHlYRzVjZEZ4MFhIUmNkRngwWEhSd2NtVjJRblJ1TG5OMGVXeGxMbkJ2YVc1MFpYSkZkbVZ1ZEhNZ1BTQW5ibTl1WlNjN1hISmNibHgwWEhSY2RGeDBYSFI5WEhKY2JseHlYRzVjZEZ4MFhIUmNkRngwYVdZZ0tHRmpkR2wyWlVKMGJrTmhkQ2tnZTF4eVhHNWNkRngwWEhSY2RGeDBYSFJoWTNScGRtVkNkRzVEWVhRdVkyeGhjM05NYVhOMExtRmtaQ2duWjNKdmRYQW5LVHRjY2x4dVhIUmNkRngwWEhSY2RGeDBZV04wYVhabFFuUnVRMkYwTG01bGVIUkZiR1Z0Wlc1MFUybGliR2x1Wnk1amJHRnpjMHhwYzNRdVlXUmtLQ2RuY205MWNDY3BPMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmhZM1JwZG1WQ2RHNURZWFF1Y0hKbGRtbHZkWE5GYkdWdFpXNTBVMmxpYkdsdVp5NWpiR0Z6YzB4cGMzUXVZV1JrS0NkbmNtOTFjQ2NwTzF4eVhHNWNkRngwWEhSY2RGeDBmVnh5WEc1Y2RGeDBYSFJjZEgxY2NseHVYSFJjZEZ4MGZTazdYSEpjYmx4eVhHNWNkRngwWEhScFppQW9ZM1Z5Y21WdWRGQmhaMlVnUFQwOUlERXBJSHRjY2x4dVhIUmNkRngwWEhSd2NtVjJRblJ1TG5OMGVXeGxMbTl3WVdOcGRIa2dQU0FuTUM0MUp6dGNjbHh1WEhSY2RGeDBYSFJ3Y21WMlFuUnVMbk4wZVd4bExuQnZhVzUwWlhKRmRtVnVkSE1nUFNBbmJtOXVaU2M3WEhKY2JseDBYSFJjZEgxY2NseHVYSEpjYmx4MFhIUmNkSEpsZEhWeWJpQndjbVYyUW5SdU8xeHlYRzVjZEZ4MGZWeHlYRzVjY2x4dVhIUmNkR1oxYm1OMGFXOXVJSEJoWjJsdVlYUnBiMjVDZFhSMGIyNG9jR0ZuWlN3Z2NHRm5aVU52ZFc1MEtTQjdYSEpjYmx4MFhIUmNkR3hsZENCaWRYUjBiMjRnUFNCa2IyTjFiV1Z1ZEM1amNtVmhkR1ZGYkdWdFpXNTBLQ2RpZFhSMGIyNG5LVHRjY2x4dVhIUmNkRngwWW5WMGRHOXVMbU5zWVhOelRHbHpkQzVoWkdRb0ozQmhaMmx1WVhScGIyNHRZblJ1SnlrN1hISmNibHgwWEhSY2RHSjFkSFJ2Ymk1cGJtNWxjbFJsZUhRZ1BTQndZV2RsTzF4eVhHNWNjbHh1WEhSY2RGeDBhV1lnS0dOMWNuSmxiblJRWVdkbElEMDlJSEJoWjJVcElIdGNjbHh1WEhSY2RGeDBYSFJpZFhSMGIyNHVZMnhoYzNOTWFYTjBMbUZrWkNnbllXTjBhWFpsSnlrN1hISmNibHgwWEhSY2RIMWNjbHh1WEhKY2JseDBYSFJjZEdKMWRIUnZiaTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RqYkdsamF5Y3NJQ2hsS1NBOVBpQjdYSEpjYmx4MFhIUmNkRngwWTNWeWNtVnVkRkJoWjJVZ1BTQndZV2RsTzF4eVhHNWNjbHh1WEhSY2RGeDBYSFJwWmlBb1luVjBkRzl1TG5CaGNtVnVkRVZzWlcxbGJuUWdQVDBnY0dGbmFXNWhkR2x2YmtWc1JHOW5jeWtnZTF4eVhHNWNkRngwWEhSY2RGeDBaR2x6Y0d4aGVWQmhaMmx1WVhSbFpFbDBaVzF6S0Z4eVhHNWNkRngwWEhSY2RGeDBYSFJrYjJkQ2IzaEJjbkpoZVN4Y2NseHVYSFJjZEZ4MFhIUmNkRngwWkc5bmMwSnZlQ3hjY2x4dVhIUmNkRngwWEhSY2RGeDBaV3hsYldWdWRITlBibEJoWjJVc1hISmNibHgwWEhSY2RGeDBYSFJjZEdOMWNuSmxiblJRWVdkbFhISmNibHgwWEhSY2RGeDBYSFFwTzF4eVhHNWNjbHh1WEhSY2RGeDBYSFJjZEd4bGRDQmhZM1JwZG1WQ2RHNUViMmNnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLRnh5WEc1Y2RGeDBYSFJjZEZ4MFhIUW5JMlJ2WjNNZ0xuQmhaMmx1WVhScGIyNHRZblJ1TG1GamRHbDJaU2RjY2x4dVhIUmNkRngwWEhSY2RDazdYSEpjYmx4eVhHNWNkRngwWEhSY2RGeDBZV04wYVhabFFuUnVSRzluTG1Oc1lYTnpUR2x6ZEM1eVpXMXZkbVVvSjJGamRHbDJaU2NwTzF4eVhHNWNjbHh1WEhSY2RGeDBYSFJjZEdKMWRIUnZiaTVqYkdGemMweHBjM1F1WVdSa0tDZGhZM1JwZG1VbktUdGNjbHh1WEhKY2JseDBYSFJjZEZ4MFhIUnNaWFFnYm1WNGRFSjBiaUE5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9KeU5rYjJkeklDNXVaWGgwSnlrN1hISmNibHh5WEc1Y2RGeDBYSFJjZEZ4MGFXWWdLR04xY25KbGJuUlFZV2RsSUQwOVBTQndZV2RsUTI5MWJuUXBJSHRjY2x4dVhIUmNkRngwWEhSY2RGeDBibVY0ZEVKMGJpNXpkSGxzWlM1dmNHRmphWFI1SUQwZ0p6QXVOU2M3WEhKY2JseDBYSFJjZEZ4MFhIUmNkRzVsZUhSQ2RHNHVjM1I1YkdVdWNHOXBiblJsY2tWMlpXNTBjeUE5SUNkdWIyNWxKenRjY2x4dVhIUmNkRngwWEhSY2RIMGdaV3h6WlNCN1hISmNibHgwWEhSY2RGeDBYSFJjZEc1bGVIUkNkRzR1YzNSNWJHVXViM0JoWTJsMGVTQTlJQ2N4Snp0Y2NseHVYSFJjZEZ4MFhIUmNkRngwYm1WNGRFSjBiaTV6ZEhsc1pTNXdiMmx1ZEdWeVJYWmxiblJ6SUQwZ0oyRnNiQ2M3WEhKY2JseDBYSFJjZEZ4MFhIUjlYSEpjYmx4eVhHNWNkRngwWEhSY2RGeDBiR1YwSUhCeVpYWkNkRzRnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2NqWkc5bmN5QXVjSEpsZGljcE8xeHlYRzVjY2x4dVhIUmNkRngwWEhSY2RHbG1JQ2hqZFhKeVpXNTBVR0ZuWlNBOVBUMGdNU2tnZTF4eVhHNWNkRngwWEhSY2RGeDBYSFJ3Y21WMlFuUnVMbk4wZVd4bExtOXdZV05wZEhrZ1BTQW5NQzQxSnp0Y2NseHVYSFJjZEZ4MFhIUmNkRngwY0hKbGRrSjBiaTV6ZEhsc1pTNXdiMmx1ZEdWeVJYWmxiblJ6SUQwZ0oyNXZibVVuTzF4eVhHNWNkRngwWEhSY2RGeDBmU0JsYkhObElIdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MGNISmxka0owYmk1emRIbHNaUzV2Y0dGamFYUjVJRDBnSnpFbk8xeHlYRzVjZEZ4MFhIUmNkRngwWEhSd2NtVjJRblJ1TG5OMGVXeGxMbkJ2YVc1MFpYSkZkbVZ1ZEhNZ1BTQW5ZV3hzSnp0Y2NseHVYSFJjZEZ4MFhIUmNkSDFjY2x4dVhIUmNkRngwWEhSOVhISmNibHh5WEc1Y2RGeDBYSFJjZEdsbUlDaGlkWFIwYjI0dWNHRnlaVzUwUld4bGJXVnVkQ0E5UFNCd1lXZHBibUYwYVc5dVJXeERZWFJ6S1NCN1hISmNibHgwWEhSY2RGeDBYSFJrYVhOd2JHRjVVR0ZuYVc1aGRHVmtTWFJsYlhNb1hISmNibHgwWEhSY2RGeDBYSFJjZEdOaGRFSnZlRUZ5Y21GNUxGeHlYRzVjZEZ4MFhIUmNkRngwWEhSallYUnpRbTk0TEZ4eVhHNWNkRngwWEhSY2RGeDBYSFJsYkdWdFpXNTBjMDl1VUdGblpTeGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFkzVnljbVZ1ZEZCaFoyVmNjbHh1WEhSY2RGeDBYSFJjZENrN1hISmNibHh5WEc1Y2RGeDBYSFJjZEZ4MGJHVjBJR0ZqZEdsMlpVSjBia05oZENBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvWEhKY2JseDBYSFJjZEZ4MFhIUmNkQ2NqWTJGMGN5QXVjR0ZuYVc1aGRHbHZiaTFpZEc0dVlXTjBhWFpsSjF4eVhHNWNkRngwWEhSY2RGeDBLVHRjY2x4dVhISmNibHgwWEhSY2RGeDBYSFJoWTNScGRtVkNkRzVEWVhRdVkyeGhjM05NYVhOMExuSmxiVzkyWlNnbllXTjBhWFpsSnlrN1hISmNibHh5WEc1Y2RGeDBYSFJjZEZ4MFluVjBkRzl1TG1Oc1lYTnpUR2x6ZEM1aFpHUW9KMkZqZEdsMlpTY3BPMXh5WEc1Y2NseHVYSFJjZEZ4MFhIUmNkR3hsZENCdVpYaDBRblJ1SUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduSTJOaGRITWdMbTVsZUhRbktUdGNjbHh1WEhKY2JseDBYSFJjZEZ4MFhIUnBaaUFvWTNWeWNtVnVkRkJoWjJVZ1BUMDlJSEJoWjJWRGIzVnVkQ2tnZTF4eVhHNWNkRngwWEhSY2RGeDBYSFJ1WlhoMFFuUnVMbk4wZVd4bExtOXdZV05wZEhrZ1BTQW5NQzQxSnp0Y2NseHVYSFJjZEZ4MFhIUmNkRngwYm1WNGRFSjBiaTV6ZEhsc1pTNXdiMmx1ZEdWeVJYWmxiblJ6SUQwZ0oyNXZibVVuTzF4eVhHNWNkRngwWEhSY2RGeDBmU0JsYkhObElIdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MGJtVjRkRUowYmk1emRIbHNaUzV2Y0dGamFYUjVJRDBnSnpFbk8xeHlYRzVjZEZ4MFhIUmNkRngwWEhSdVpYaDBRblJ1TG5OMGVXeGxMbkJ2YVc1MFpYSkZkbVZ1ZEhNZ1BTQW5ZV3hzSnp0Y2NseHVYSFJjZEZ4MFhIUmNkSDFjY2x4dVhISmNibHgwWEhSY2RGeDBYSFJzWlhRZ2NISmxka0owYmlBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvSnlOallYUnpJQzV3Y21WMkp5azdYSEpjYmx4eVhHNWNkRngwWEhSY2RGeDBhV1lnS0dOMWNuSmxiblJRWVdkbElEMDlQU0F4S1NCN1hISmNibHgwWEhSY2RGeDBYSFJjZEhCeVpYWkNkRzR1YzNSNWJHVXViM0JoWTJsMGVTQTlJQ2N3TGpVbk8xeHlYRzVjZEZ4MFhIUmNkRngwWEhSd2NtVjJRblJ1TG5OMGVXeGxMbkJ2YVc1MFpYSkZkbVZ1ZEhNZ1BTQW5ibTl1WlNjN1hISmNibHgwWEhSY2RGeDBYSFI5SUdWc2MyVWdlMXh5WEc1Y2RGeDBYSFJjZEZ4MFhIUndjbVYyUW5SdUxuTjBlV3hsTG05d1lXTnBkSGtnUFNBbk1TYzdYSEpjYmx4MFhIUmNkRngwWEhSY2RIQnlaWFpDZEc0dWMzUjViR1V1Y0c5cGJuUmxja1YyWlc1MGN5QTlJQ2RoYkd3bk8xeHlYRzVjZEZ4MFhIUmNkRngwZlZ4eVhHNWNkRngwWEhSY2RIMWNjbHh1WEhSY2RGeDBmU2s3WEhKY2JseHlYRzVjZEZ4MFhIUnlaWFIxY200Z1luVjBkRzl1TzF4eVhHNWNkRngwZlZ4eVhHNWNjbHh1WEhSY2RHTnZibk4wSUdWNGNHRnVaSE5OYjNKbFFXNXBiV0ZzU1c1bWJ5QTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNKQmJHd29YSEpjYmx4MFhIUmNkQ2RiWkdGMFlTMTBZWEpuWlhRdFlXNXBiV0ZzWFNkY2NseHVYSFJjZENrN1hISmNibHh5WEc1Y2RGeDBablZ1WTNScGIyNGdaWGh3WVc1a1FXNXBiV0ZzU1c1bWJ5Z3BJSHRjY2x4dVhIUmNkRngwWTI5dWMzUWdjMmh2ZDBOdmJuUmxiblFnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2gwYUdsekxtUmhkR0Z6WlhRdWRHRnlaMlYwUVc1cGJXRnNLVHRjY2x4dVhISmNibHgwWEhSY2RHbG1JQ2h6YUc5M1EyOXVkR1Z1ZEM1amJHRnpjMHhwYzNRdVkyOXVkR0ZwYm5Nb0oyRmpkR2wyWlNjcEtTQjdYSEpjYmx4MFhIUmNkRngwZEdocGN5NXBibTVsY2toVVRVd2dQU0IwYUdsekxtUmhkR0Z6WlhRdWMyaHZkM1JsZUhRN1hISmNibHgwWEhSY2RIMGdaV3h6WlNCN1hISmNibHgwWEhSY2RGeDBkR2hwY3k1cGJtNWxja2hVVFV3Z1BTQjBhR2x6TG1SaGRHRnpaWFF1YUdsa1pYUmxlSFE3WEhKY2JseDBYSFJjZEgxY2NseHVYSEpjYmx4MFhIUmNkSE5vYjNkRGIyNTBaVzUwTG1Oc1lYTnpUR2x6ZEM1MGIyZG5iR1VvSjJGamRHbDJaU2NwTzF4eVhHNWNjbHh1WEhSY2RGeDBhV1lnS0hOb2IzZERiMjUwWlc1MExtTnNZWE56VEdsemRDNWpiMjUwWVdsdWN5Z25ZV04wYVhabEp5a3BJSHRjY2x4dVhIUmNkRngwWEhSemFHOTNRMjl1ZEdWdWRDNXpkSGxzWlM1dFlYaElaV2xuYUhRZ1BTQnphRzkzUTI5dWRHVnVkQzV6WTNKdmJHeElaV2xuYUhRZ0t5QW5jSGduTzF4eVhHNWNkRngwWEhSOUlHVnNjMlVnZTF4eVhHNWNkRngwWEhSY2RITm9iM2REYjI1MFpXNTBMbk4wZVd4bExtMWhlRWhsYVdkb2RDQTlJREl3SUNzZ0ozQjRKenRjY2x4dVhIUmNkRngwZlZ4eVhHNWNkRngwZlZ4eVhHNWNjbHh1WEhSY2RHbG1JQ2hrYjJkelFtOTRLU0I3WEhKY2JseDBYSFJjZEdScGMzQnNZWGxRWVdkcGJtRjBaV1JKZEdWdGN5aGtiMmRDYjNoQmNuSmhlU3dnWkc5bmMwSnZlQ3dnWld4bGJXVnVkSE5QYmxCaFoyVXNJR04xY25KbGJuUlFZV2RsS1R0Y2NseHVYSFJjZEZ4MFpHbHpjR3hoZVZCaFoybHVZWFJwYjI0b1pHOW5RbTk0UVhKeVlYa3NJSEJoWjJsdVlYUnBiMjVGYkVSdlozTXNJR1ZzWlcxbGJuUnpUMjVRWVdkbEtUdGNjbHh1WEhKY2JseDBYSFJjZEdWNGNHRnVaSE5OYjNKbFFXNXBiV0ZzU1c1bWJ5NW1iM0pGWVdOb0tDaGlkRzRwSUQwK0lIdGNjbHh1WEhSY2RGeDBYSFJpZEc0dVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblkyeHBZMnNuTENCbGVIQmhibVJCYm1sdFlXeEpibVp2S1R0Y2NseHVYSFJjZEZ4MGZTazdYSEpjYmx4MFhIUjlYSEpjYmx4eVhHNWNkRngwYVdZZ0tHTmhkSE5DYjNncElIdGNjbHh1WEhSY2RGeDBaR2x6Y0d4aGVWQmhaMmx1WVhSbFpFbDBaVzF6S0dOaGRFSnZlRUZ5Y21GNUxDQmpZWFJ6UW05NExDQmxiR1Z0Wlc1MGMwOXVVR0ZuWlN3Z1kzVnljbVZ1ZEZCaFoyVXBPMXh5WEc1Y2RGeDBYSFJrYVhOd2JHRjVVR0ZuYVc1aGRHbHZiaWhqWVhSQ2IzaEJjbkpoZVN3Z2NHRm5hVzVoZEdsdmJrVnNRMkYwY3l3Z1pXeGxiV1Z1ZEhOUGJsQmhaMlVwTzF4eVhHNWNjbHh1WEhSY2RGeDBaWGh3WVc1a2MwMXZjbVZCYm1sdFlXeEpibVp2TG1admNrVmhZMmdvS0dKMGJpa2dQVDRnZTF4eVhHNWNkRngwWEhSY2RHSjBiaTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RqYkdsamF5Y3NJR1Y0Y0dGdVpFRnVhVzFoYkVsdVptOHBPMXh5WEc1Y2RGeDBYSFI5S1R0Y2NseHVYSFJjZEgxY2NseHVYSFI5WEhKY2JseHlYRzVjZEdsbUlDaGhibWx0WVd4elVHRm5aWE1wSUh0Y2NseHVYSFJjZENobWRXNWpkR2x2YmlBb0tTQjdYSEpjYmx4MFhIUmNkR1JwYzNCc1lYbEJibWx0WVd4ektDazdYSEpjYmx4MFhIUjlLU2dwTzF4eVhHNWNkSDFjY2x4dWZTazdYSEpjYmlJc0ltUnZZM1Z0Wlc1MExtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0owUlBUVU52Ym5SbGJuUk1iMkZrWldRbkxDQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseDBMeThnWm05eWJTQjJZV3hwWkdGMGFXOXVYSEpjYmx4MFkyOXVjM1FnWm05eWJTQTlJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJDZVVsa0tDZGpiMjUwWVdOMExXWnZjbTBuS1R0Y2NseHVYSFJqYjI1emRDQnVZVzFsSUQwZ1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvSjI1aGJXVW5LVHRjY2x4dVhIUmpiMjV6ZENCbGJXRnBiQ0E5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2RsYldGcGJDY3BPMXh5WEc1Y2RHTnZibk4wSUcxbGMzTmhaMlVnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2duYldWemMyRm5aU2NwTzF4eVhHNWNkR052Ym5OMElHWnZjbTFDZEc0Z1BTQmtiMk4xYldWdWRDNW5aWFJGYkdWdFpXNTBRbmxKWkNnblptOXliUzFpZEc0bktUdGNjbHh1WEhKY2JseDBhV1lnS0dadmNtMHBJSHRjY2x4dVhIUmNkRnRjY2x4dVhIUmNkRngwSjJOc2FXTnJKeXhjY2x4dVhIUmNkRngwSjI5dWRHOTFZMmh6ZEdGeWRDY3NYSEpjYmx4MFhIUmNkQ2R0YjNWelpXOTJaWEluTEZ4eVhHNWNkRngwWEhRbmEyVjVaRzkzYmljc1hISmNibHgwWEhSY2RDZHJaWGx3Y21WemN5Y3NYSEpjYmx4MFhIUmNkQ2QwYjNWamFITjBZWEowSnl4Y2NseHVYSFJjZEZ4MEozUnZkV05vYlc5MlpTY3NYSEpjYmx4MFhIUmRMbVp2Y2tWaFkyZ29YSEpjYmx4MFhIUmNkQ2hsZG1WdWRDa2dQVDVjY2x4dVhIUmNkRngwWEhSa2IyTjFiV1Z1ZEM1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0dWMlpXNTBMQ0FvS1NBOVBpQjdYSEpjYmx4MFhIUmNkRngwWEhScFppQW9ZMmhsWTJ0SmJuQjFkSE1vS1NBOVBUMGdabUZzYzJVcElIdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MFptOXliVUowYmk1a2FYTmhZbXhsWkNBOUlIUnlkV1U3WEhKY2JseDBYSFJjZEZ4MFhIUjlJR1ZzYzJVZ2UxeHlYRzVjZEZ4MFhIUmNkRngwWEhSbWIzSnRRblJ1TG1ScGMyRmliR1ZrSUQwZ1ptRnNjMlU3WEhKY2JseDBYSFJjZEZ4MFhIUjlYSEpjYmx4MFhIUmNkRngwZlNrc1hISmNibHgwWEhSY2RHWmhiSE5sWEhKY2JseDBYSFFwTzF4eVhHNWNjbHh1WEhSY2RHWjFibU4wYVc5dUlHTm9aV05yU1c1d2RYUnpLQ2tnZTF4eVhHNWNkRngwWEhSamIyNXpkQ0J1WVcxbFZtRnNkV1VnUFNCdVlXMWxMblpoYkhWbExuUnlhVzBvS1R0Y2NseHVYSFJjZEZ4MFkyOXVjM1FnWlcxaGFXeFdZV3gxWlNBOUlHVnRZV2xzTG5aaGJIVmxMblJ5YVcwb0tUdGNjbHh1WEhSY2RGeDBZMjl1YzNRZ2JXVnpjMkZuWlZaaGJIVmxJRDBnYldWemMyRm5aUzUyWVd4MVpTNTBjbWx0S0NrN1hISmNibHh5WEc1Y2RGeDBYSFJwWmlBb2JtRnRaVlpoYkhWbElEMDlQU0FuSnlrZ2UxeHlYRzVjZEZ4MFhIUmNkSE5sZEVWeWNtOXlSbTl5S0c1aGJXVXNJQ2RRYkdWaGMyVWdaVzUwWlhJZ2VXOTFjaUJtZFd4c0lHNWhiV1VuS1R0Y2NseHVYSFJjZEZ4MGZTQmxiSE5sSUh0Y2NseHVYSFJjZEZ4MFhIUnpaWFJUZFdOalpYTnpSbTl5S0c1aGJXVXBPMXh5WEc1Y2RGeDBYSFI5WEhKY2JseHlYRzVjZEZ4MFhIUnBaaUFvWlcxaGFXeFdZV3gxWlNBOVBUMGdKeWNwSUh0Y2NseHVYSFJjZEZ4MFhIUnpaWFJGY25KdmNrWnZjaWhsYldGcGJDd2dKMUJzWldGelpTQmxiblJsY2lCNWIzVnlJR1Z0WVdsc0lHRmtaSEpsYzNNbktUdGNjbHh1WEhSY2RGeDBmU0JsYkhObElHbG1JQ2doWlcxaGFXeEpjMVpoYkdsa0tHVnRZV2xzVm1Gc2RXVXBLU0I3WEhKY2JseDBYSFJjZEZ4MGMyVjBSWEp5YjNKR2IzSW9aVzFoYVd3c0lDZEZiV0ZwYkNCcGN5QnViM1FnZG1Gc2FXUW5LVHRjY2x4dVhIUmNkRngwZlNCbGJITmxJSHRjY2x4dVhIUmNkRngwWEhSelpYUlRkV05qWlhOelJtOXlLR1Z0WVdsc0tUdGNjbHh1WEhSY2RGeDBmVnh5WEc1Y2NseHVYSFJjZEZ4MGFXWWdLRzFsYzNOaFoyVldZV3gxWlNBOVBUMGdKeWNwSUh0Y2NseHVYSFJjZEZ4MFhIUnpaWFJGY25KdmNrWnZjaWh0WlhOellXZGxMQ0FuVUd4bFlYTmxJR1Z1ZEdWeUlIbHZkWElnYldWemMyRm5aU2NwTzF4eVhHNWNkRngwWEhSOUlHVnNjMlVnZTF4eVhHNWNkRngwWEhSY2RITmxkRk4xWTJObGMzTkdiM0lvYldWemMyRm5aU2s3WEhKY2JseDBYSFJjZEgxY2NseHVYSEpjYmx4MFhIUmNkR2xtSUNoY2NseHVYSFJjZEZ4MFhIUnVZVzFsVm1Gc2RXVWdQVDA5SUNjbklIeDhYSEpjYmx4MFhIUmNkRngwWlcxaGFXeFdZV3gxWlNBOVBUMGdKeWNnZkh4Y2NseHVYSFJjZEZ4MFhIUnRaWE56WVdkbFZtRnNkV1VnUFQwOUlDY25JSHg4WEhKY2JseDBYSFJjZEZ4MElXVnRZV2xzU1hOV1lXeHBaQ2hsYldGcGJGWmhiSFZsS1Z4eVhHNWNkRngwWEhRcElIdGNjbHh1WEhSY2RGeDBYSFJ5WlhSMWNtNGdabUZzYzJVN1hISmNibHgwWEhSY2RIMGdaV3h6WlNCN1hISmNibHgwWEhSY2RGeDBjbVYwZFhKdUlIUnlkV1U3WEhKY2JseDBYSFJjZEgxY2NseHVYSFJjZEgxY2NseHVYSEpjYmx4MFhIUm1kVzVqZEdsdmJpQnpaWFJGY25KdmNrWnZjaWhwYm5CMWRDd2diV1Z6YzJGblpTa2dlMXh5WEc1Y2RGeDBYSFJqYjI1emRDQm1iM0p0SUQwZ2FXNXdkWFF1Y0dGeVpXNTBSV3hsYldWdWREdGNjbHh1WEhSY2RGeDBZMjl1YzNRZ2MyMWhiR3dnUFNCbWIzSnRMbkYxWlhKNVUyVnNaV04wYjNJb0ozTnRZV3hzSnlrN1hISmNibHh5WEc1Y2RGeDBYSFJ6YldGc2JDNXBibTVsY2xSbGVIUWdQU0J0WlhOellXZGxPMXh5WEc1Y2RGeDBYSFJtYjNKdExtTnNZWE56VG1GdFpTQTlJQ2RtYjNKdFgxOW5jbTkxY0NCbGNuSnZjaWM3WEhKY2JseDBYSFI5WEhKY2JseHlYRzVjZEZ4MFpuVnVZM1JwYjI0Z2MyVjBVM1ZqWTJWemMwWnZjaWhwYm5CMWRDa2dlMXh5WEc1Y2RGeDBYSFJqYjI1emRDQm1iM0p0SUQwZ2FXNXdkWFF1Y0dGeVpXNTBSV3hsYldWdWREdGNjbHh1WEhSY2RGeDBabTl5YlM1amJHRnpjMDVoYldVZ1BTQW5abTl5YlY5ZlozSnZkWEFnYzNWalkyVnpjeWM3WEhKY2JseDBYSFI5WEhKY2JseHlYRzVjZEZ4MFpuVnVZM1JwYjI0Z1pXMWhhV3hKYzFaaGJHbGtLR1Z0WVdsc0tTQjdYSEpjYmx4MFhIUmNkR052Ym5OMElISmxJRDBnTDE0b0tGdGVQRDRvS1Z4Y1cxeGNYVnhjWEZ3dUxEczZYRnh6UUZ3aVhTc29YRnd1VzE0OFBpZ3BYRnhiWEZ4ZFhGeGNYQzRzT3pwY1hITkFYQ0pkS3lrcUtYd29YQ0l1SzF3aUtTbEFLQ2hjWEZ0Yk1DMDVYWHN4TEROOVhGd3VXekF0T1YxN01Td3pmVnhjTGxzd0xUbGRlekVzTTMxY1hDNWJNQzA1WFhzeExETjlYU2w4S0NoYllTMTZRUzFhWEZ3dE1DMDVYU3RjWEM0cEsxdGhMWHBCTFZwZGV6SXNmU2twSkM4dWRHVnpkQ2hjY2x4dVhIUmNkRngwWEhSbGJXRnBiRnh5WEc1Y2RGeDBYSFFwTzF4eVhHNWNjbHh1WEhSY2RGeDBjbVYwZFhKdUlISmxPMXh5WEc1Y2RGeDBmVnh5WEc1Y2RIMWNjbHh1ZlNrN1hISmNiaUlzSW1SdlkzVnRaVzUwTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjBSUFRVTnZiblJsYm5STWIyRmtaV1FuTENCbWRXNWpkR2x2YmlBb0tTQjdYRzVjZEhkcGJtUnZkeTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RzYjJGa0p5d2dLR1VwSUQwK0lIdGNibHgwWEhSamIyNXpkQ0J3Y21Wc2IyRmtJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25MbkJ5Wld4dllXUW5LVHRjYmx4dVhIUmNkSEJ5Wld4dllXUXVZMnhoYzNOTWFYTjBMbUZrWkNnbmNISmxiRzloWkMxbWFXNXBjMmhsWkNjcE8xeHVYSFI5S1R0Y2JseHVYSFJqYjI1emRDQmlkRzVUWTNKdmJHeFViMVJ2Y0NBOUlHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0NkaWRHNVRZM0p2Ykd4VWIxUnZjQ2NwTzF4dVhIUmlkRzVUWTNKdmJHeFViMVJ2Y0M1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkamJHbGpheWNzSUNobEtTQTlQaUI3WEc1Y2RGeDBkMmx1Wkc5M0xuTmpjbTlzYkZSdktIdGNibHgwWEhSY2RIUnZjRG9nTUN4Y2JseDBYSFJjZEd4bFpuUTZJREFzWEc1Y2RGeDBYSFJpWldoaGRtbHZjam9nSjNOdGIyOTBhQ2NzWEc1Y2RGeDBmU2s3WEc1Y2RIMHBPMXh1WEc1Y2RHTnZibk4wSUdWNGNHRnVaSE5OYjNKbElEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2tGc2JDZ25XMlJoZEdFdGRHRnlaMlYwWFNjcE8xeHVYRzVjZEdaMWJtTjBhVzl1SUdWNGNHRnVaQ2dwSUh0Y2JseDBYSFJqYjI1emRDQnphRzkzUTI5dWRHVnVkQ0E5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLSFJvYVhNdVpHRjBZWE5sZEM1MFlYSm5aWFFwTzF4dVhHNWNkRngwYVdZZ0tITm9iM2REYjI1MFpXNTBMbU5zWVhOelRHbHpkQzVqYjI1MFlXbHVjeWduWVdOMGFYWmxKeWtwSUh0Y2JseDBYSFJjZEhSb2FYTXVhVzV1WlhKSVZFMU1JRDBnZEdocGN5NWtZWFJoYzJWMExuTm9iM2QwWlhoME8xeHVYSFJjZEgwZ1pXeHpaU0I3WEc1Y2RGeDBYSFIwYUdsekxtbHVibVZ5U0ZSTlRDQTlJSFJvYVhNdVpHRjBZWE5sZEM1b2FXUmxkR1Y0ZER0Y2JseDBYSFI5WEc1Y2JseDBYSFJ6YUc5M1EyOXVkR1Z1ZEM1amJHRnpjMHhwYzNRdWRHOW5aMnhsS0NkaFkzUnBkbVVuS1R0Y2JseHVYSFJjZEdsbUlDaHphRzkzUTI5dWRHVnVkQzVqYkdGemMweHBjM1F1WTI5dWRHRnBibk1vSjJGamRHbDJaU2NwS1NCN1hHNWNkRngwWEhSemFHOTNRMjl1ZEdWdWRDNXpkSGxzWlM1dFlYaElaV2xuYUhRZ1BTQnphRzkzUTI5dWRHVnVkQzV6WTNKdmJHeElaV2xuYUhRZ0t5QW5jSGduTzF4dVhIUmNkSDBnWld4elpTQjdYRzVjZEZ4MFhIUnphRzkzUTI5dWRHVnVkQzV6ZEhsc1pTNXRZWGhJWldsbmFIUWdQU0JnTWpKd2VHQTdYRzVjZEZ4MGZWeHVYSFI5WEc1Y2JseDBaWGh3WVc1a2MwMXZjbVV1Wm05eVJXRmphQ2dvWW5SdUtTQTlQaUI3WEc1Y2RGeDBZMjl1YzNRZ1kyOXVkR0ZwYm1WeVNHVnBaMmgwSUQxY2JseDBYSFJjZEdKMGJpNXdZWEpsYm5SRmJHVnRaVzUwTG5CeVpYWnBiM1Z6Uld4bGJXVnVkRk5wWW14cGJtY3ViMlptYzJWMFNHVnBaMmgwTzF4dVhHNWNkRngwWTI5dWMzUWdaWGh3WVc1a1JXeGxiV1Z1ZEVobGFXZG9kQ0E5WEc1Y2RGeDBYSFJpZEc0dWNHRnlaVzUwUld4bGJXVnVkQzV3Y21WMmFXOTFjMFZzWlcxbGJuUlRhV0pzYVc1bkxtWnBjbk4wUld4bGJXVnVkRU5vYVd4a0xtOW1abk5sZEVobGFXZG9kRHRjYmx4dVhIUmNkR2xtSUNoamIyNTBZV2x1WlhKSVpXbG5hSFFnUGowZ1pYaHdZVzVrUld4bGJXVnVkRWhsYVdkb2RDa2dlMXh1WEhSY2RGeDBZblJ1TG5OMGVXeGxMblpwYzJsaWFXeHBkSGtnUFNBbmFHbGtaR1Z1Snp0Y2JseDBYSFJjZEdKMGJpNXpkSGxzWlM1b1pXbG5hSFFnUFNBd08xeHVYSFJjZEgxY2JseDBYSFJpZEc0dVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblkyeHBZMnNuTENCbGVIQmhibVFwTzF4dVhIUjlLVHRjYm4wcE8xeHVJaXdpWkc5amRXMWxiblF1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduUkU5TlEyOXVkR1Z1ZEV4dllXUmxaQ2NzSUdaMWJtTjBhVzl1SUNncElIdGNjbHh1WEhSamIyNXpkQ0J0YjJSaGJFSjBiaUE5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSkJiR3dvSnk1dGIyUmhiQzFpZEc0bktUdGNjbHh1WEhSamIyNXpkQ0J0YjJSaGJFVnNJRDBnWkc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEVKNVNXUW9KMjF2WkdGc0p5azdYSEpjYmx4MFkyOXVjM1FnYlc5a1lXeENkRzVEYkc5elpTQTlJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJDZVVsa0tDZGpiRzl6WlNjcE8xeHlYRzVjY2x4dVhIUXZMeUJUYUc5M0lHMXZaR0ZzWEhKY2JseDBiVzlrWVd4Q2RHNHVabTl5UldGamFDZ29iVzlrWVd3cElEMCtJSHRjY2x4dVhIUmNkRzF2WkdGc0xtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0oyTnNhV05ySnl3Z0tDa2dQVDRnYlc5a1lXeEZiQzVqYkdGemMweHBjM1F1WVdSa0tDZHphRzkzTFcxdlpHRnNKeWtwTzF4eVhHNWNkSDBwTzF4eVhHNWNjbHh1WEhRdkx5QklhV1JsSUcxdlpHRnNYSEpjYmx4MGJXOWtZV3hDZEc1RGJHOXpaUzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RqYkdsamF5Y3NJQ2dwSUQwK1hISmNibHgwWEhSdGIyUmhiRVZzTG1Oc1lYTnpUR2x6ZEM1eVpXMXZkbVVvSjNOb2IzY3RiVzlrWVd3bktWeHlYRzVjZENrN1hISmNibHh5WEc1Y2RDOHZJRWhwWkdVZ2JXOWtZV3dnYjI0Z2IzVjBjMmxrWlNCamJHbGphMXh5WEc1Y2RIZHBibVJ2ZHk1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkamJHbGpheWNzSUNobEtTQTlQbHh5WEc1Y2RGeDBaUzUwWVhKblpYUWdQVDBnYlc5a1lXd2dQeUJ0YjJSaGJDNWpiR0Z6YzB4cGMzUXVjbVZ0YjNabEtDZHphRzkzTFcxdlpHRnNKeWtnT2lCbVlXeHpaVnh5WEc1Y2RDazdYSEpjYm4wcE8xeHlYRzRpTENKa2IyTjFiV1Z1ZEM1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkRVQwMURiMjUwWlc1MFRHOWhaR1ZrSnl3Z1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc1Y2RHTnZibk4wSUc1aGRrTnZiblJoYVc1bGNpQTlJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJDZVVsa0tDZHVZWFl0WTI5dWRHRnBibVZ5SnlrN1hISmNibHgwWTI5dWMzUWdiV1Z1ZFVKMGJpQTlJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJDZVVsa0tDZHRaVzUxTFdKMGJpY3BPMXh5WEc1Y2RHTnZibk4wSUc1aGRreHBjM1FnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2duYm1GMkxXeHBjM1FuS1R0Y2NseHVYSEpjYmx4MGQybHVaRzkzTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjNOamNtOXNiQ2NzSUNobEtTQTlQaUI3WEhKY2JseDBYSFJwWmlBb1pHOWpkVzFsYm5RdVpHOWpkVzFsYm5SRmJHVnRaVzUwTG5OamNtOXNiRlJ2Y0NBK0lEQXBJSHRjY2x4dVhIUmNkRngwYm1GMlEyOXVkR0ZwYm1WeUxtTnNZWE56VEdsemRDNWhaR1FvSjNOMGFXTnJlU2NwTzF4eVhHNWNkRngwWEhSaWRHNVRZM0p2Ykd4VWIxUnZjQzV6ZEhsc1pTNXZjR0ZqYVhSNUlEMGdNVHRjY2x4dVhIUmNkSDBnWld4elpTQjdYSEpjYmx4MFhIUmNkRzVoZGtOdmJuUmhhVzVsY2k1amJHRnpjMHhwYzNRdWNtVnRiM1psS0NkemRHbGphM2tuS1R0Y2NseHVYSFJjZEZ4MFluUnVVMk55YjJ4c1ZHOVViM0F1YzNSNWJHVXViM0JoWTJsMGVTQTlJREE3WEhKY2JseDBYSFI5WEhKY2JseDBmU2s3WEhKY2JseHlYRzVjZEcxbGJuVkNkRzR1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduWTJ4cFkyc25MQ0FvWlNrZ1BUNGdlMXh5WEc1Y2RGeDBiV1Z1ZFVKMGJpNWpiR0Z6YzB4cGMzUXVkRzluWjJ4bEtDZGpiR2xqYTJWa0p5azdYSEpjYmx4MFhIUnVZWFpEYjI1MFlXbHVaWEl1WTJ4aGMzTk1hWE4wTG5SdloyZHNaU2duYjNabGNteGhlU2NwTzF4eVhHNWNkRngwYm1GMlRHbHpkQzVqYkdGemMweHBjM1F1ZEc5bloyeGxLQ2R6YUc5M0p5azdYSEpjYmx4MGZTazdYSEpjYm4wcE8xeHlYRzRpTENKa2IyTjFiV1Z1ZEM1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkRVQwMURiMjUwWlc1MFRHOWhaR1ZrSnl3Z1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc1Y2RDOHZJR05oY205MWMyVnNYSEpjYmx4MFkyOXVjM1FnWTJGeWIzVnpaV3dnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2duWTJGeWIzVnpaV3duS1R0Y2NseHVYSFJqYjI1emRDQmpZWEp2ZFhObGJGVnliQ0E5SUNjdUwycHpMMk5oY205MWMyVnNMbXB6YjI0bk8xeHlYRzVjZEdOdmJuTjBJR3h2WTJGc1EyRnliM1Z6Wld4S1UwOU9JRDBnY21WeGRXbHlaU2duTGk5allYSnZkWE5sYkM1cWMyOXVKeWs3WEhKY2JseHlYRzVjZEM4cUlHWjFibU4wYVc5dUlHZGxkRk5zYVdSbGMwUmhkR0VvS1NCN1hISmNibHgwWEhSeVpYUjFjbTRnYm1WM0lGQnliMjFwYzJVb0tISmxjMjlzZG1Vc0lISmxhbVZqZENrZ1BUNGdlMXh5WEc1Y2RGeDBYSFJtWlhSamFDaGpZWEp2ZFhObGJGVnliQ2xjY2x4dVhIUmNkRngwWEhRdWRHaGxiaWdvY21WemNDa2dQVDRnY21WemNDNXFjMjl1S0NrcFhISmNibHgwWEhSY2RGeDBMblJvWlc0b0tHUmhkR0VwSUQwK0lISmxjMjlzZG1Vb1pHRjBZU2twWEhKY2JseDBYSFJjZEZ4MExtTmhkR05vS0NobGNuSXBJRDArSUhKbGFtVmpkQ2hsY25JcEtUdGNjbHh1WEhSY2RIMHBPMXh5WEc1Y2RIMGdLaTljY2x4dVhISmNibHgwWVhONWJtTWdablZ1WTNScGIyNGdaR2x6Y0d4aGVVTmhjbTkxYzJWc0tDa2dlMXh5WEc1Y2RGeDBMeW9nWTI5dWMzUWdaR0YwWVV4cGMzUWdQU0JoZDJGcGRDQm5aWFJUYkdsa1pYTkVZWFJoS0NrN0lDb3ZYSEpjYmx4MFhIUmpiMjV6ZENCemJHbGtaWE5CY25KaGVTQTlJR3h2WTJGc1EyRnliM1Z6Wld4S1UwOU9Mbk5zYVdSbGN6dGNjbHh1WEhKY2JseDBYSFJ6Ykdsa1pYTkJjbkpoZVM1bWIzSkZZV05vS0NoemJHbGtaU3dnYzJ4cFpHVk9kVzFpWlhJcElEMCtJSHRjY2x4dVhIUmNkRngwWTI5dWMzUWdleUIwYVhSc1pTd2dkSGx3WlN3Z1kyOXVkR1Z1ZEN3Z2FXMWhaMlVzSUdsdFlXZGxWR0ZpTENCcGJXRm5aVTF2WWlCOUlEMGdjMnhwWkdVN1hISmNibHh5WEc1Y2RGeDBYSFJ1WlhkVGJHbGtaU0E5SUdSdlkzVnRaVzUwTG1OeVpXRjBaVVZzWlcxbGJuUW9KMlJwZGljcE8xeHlYRzVjZEZ4MFhIUnVaWGRUYkdsa1pTNWpiR0Z6YzB4cGMzUXVZV1JrS0NkallYSnZkWE5sYkY5ZmMyeHBaR1VuS1R0Y2NseHVYSEpjYmx4MFhIUmNkRzVsZDFOc2FXUmxMbWx1Ym1WeVNGUk5UQ0E5SUdCY2NseHVYSFJjZEZ4MFhIUmNkRngwUEdScGRpQmpiR0Z6Y3oxY0ltTmhjbTkxYzJWc1gxOXBiV0ZuWlMxamIyNTBZV2x1WlhKY0lqNWNjbHh1WEhSY2RGeDBYSFJjZEZ4MFBIQnBZM1IxY21VZ1kyeGhjM005WENKallYSnZkWE5sYkY5ZmFXMWhaMlV0Y0dsamRIVnlaVndpUGx4eVhHNWNkRngwWEhSY2RGeDBYSFJjZER4emIzVnlZMlVnYldWa2FXRTlYQ0lvYldGNExYZHBaSFJvT2pVNU9YQjRLVndpSUhOeVkzTmxkRDFjSWlSN2FXMWhaMlZOYjJKOVhDSStYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRngwUEhOdmRYSmpaU0J0WldScFlUMWNJaWh0YVc0dGQybGtkR2c2TmpBd2NIZ3BYQ0lnYzNKamMyVjBQVndpSkh0cGJXRm5aWDFjSWo1Y2RGeDBYSFJjZEZ4MFhIUmNkRnh5WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRHhwYldjZ2MzSmpQVndpSkh0Y2NseHVYSFJjZEZ4MFhIUmNkRngwWEhSY2RIZHBibVJ2ZHk1cGJtNWxjbGRwWkhSb0lENDlJRFl3TUNBL0lHbHRZV2RsSURvZ2FXMWhaMlZOYjJKY2NseHVYSFJjZEZ4MFhIUmNkRngwWEhSOVhDSWdiRzloWkdsdVp6MWNJbXhoZW5sY0lpQmhiSFE5WENJa2UzUnBkR3hsZlZ3aUx6NWNjbHh1WEhSY2RGeDBYSFJjZEZ4MFBDOXdhV04wZFhKbFBseHlYRzVjZEZ4MFhIUmNkRngwWEhSY2RGeHlYRzVjZEZ4MFhIUmNkRngwWEhROEwyUnBkajVjY2x4dVhIUmNkRngwWEhSY2RGeDBQR1JwZGlCamJHRnpjejFjSW1OaGNtOTFjMlZzWDE5amIyNTBaVzUwWENJK1hISmNibHgwWEhSY2RGeDBYSFJjZEZ4MFBHZ3hJR05zWVhOelBWd2lZMkZ5YjNWelpXeGZYM1JwZEd4bFhDSStKSHQwYVhSc1pYMDhMMmd4UGx4eVhHNWNkRngwWEhSY2RGeDBYSFJjZER4d0lHTnNZWE56UFZ3aVkyRnliM1Z6Wld4ZlgyUmxjMk5jSWo0a2UyTnZiblJsYm5SOVBDOXdQbHh5WEc1Y2RGeDBYSFJjZEZ4MFhIUThMMlJwZGo1Y2NseHVYSFJjZEZ4MFlEdGNjbHh1WEhKY2JseDBYSFJjZEdOaGNtOTFjMlZzTG1Gd2NHVnVaRU5vYVd4a0tHNWxkMU5zYVdSbEtUdGNjbHh1WEhKY2JseDBYSFJjZEdsbUlDaHpiR2xrWlU1MWJXSmxjaUE5UFQwZ01Da2dlMXh5WEc1Y2RGeDBYSFJjZEdacGNuTjBVMnhwWkdVZ1BTQnVaWGRUYkdsa1pUdGNjbHh1WEhSY2RGeDBYSFJ1WlhkVGJHbGtaUzVqYkdGemMweHBjM1F1WVdSa0tDZGhZM1JwZG1VbktUdGNjbHh1WEhSY2RGeDBmU0JsYkhObElHbG1JQ2h6Ykdsa1pVNTFiV0psY2lBcklERWdQVDA5SUd4dlkyRnNRMkZ5YjNWelpXeEtVMDlPTG5Oc2FXUmxjeTVzWlc1bmRHZ3BJSHRjY2x4dVhIUmNkRngwWEhSc1lYTjBVMnhwWkdVZ1BTQnVaWGRUYkdsa1pUdGNjbHh1WEhSY2RGeDBmVnh5WEc1Y2RGeDBmU2s3WEhKY2JseHlYRzVjZEZ4MGJtVjRkRk5zYVdSbEtDazdYSEpjYmx4MFhIUndjbVYyYVc5MWMxTnNhV1JsS0NrN1hISmNibHgwZlZ4eVhHNWNjbHh1WEhSbWRXNWpkR2x2YmlCdVpYaDBVMnhwWkdVb0tTQjdYSEpjYmx4MFhIUmpiMjV6ZENCdVpYaDBRblJ1SUQwZ1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvSjI1bGVIUW5LVHRjY2x4dVhISmNibHgwWEhSdVpYaDBRblJ1TG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjJOc2FXTnJKeXdnS0dVcElEMCtJSHRjY2x4dVhIUmNkRngwWTI5dWMzUWdZV04wYVhabFUyeHBaR1VnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2N1WTJGeWIzVnpaV3hmWDNOc2FXUmxMbUZqZEdsMlpTY3BPMXh5WEc1Y2NseHVYSFJjZEZ4MGJHVjBJRzVsZUhSVGFXSnNhVzVuSUQwZ1lXTjBhWFpsVTJ4cFpHVXVibVY0ZEVWc1pXMWxiblJUYVdKc2FXNW5PMXh5WEc1Y2NseHVYSFJjZEZ4MGFXWWdLRzVsZUhSVGFXSnNhVzVuSUQwOUlHNTFiR3dwSUh0Y2NseHVYSFJjZEZ4MFhIUnVaWGgwVTJsaWJHbHVaeUE5SUdGamRHbDJaVk5zYVdSbE8xeHlYRzVjZEZ4MFhIUjlYSEpjYmx4eVhHNWNkRngwWEhScFppQW9ibVY0ZEZOcFlteHBibWN1WTJ4aGMzTk1hWE4wTG1OdmJuUmhhVzV6S0NkallYSnZkWE5sYkY5ZmMyeHBaR1VuS1NrZ2UxeHlYRzVjZEZ4MFhIUmNkR0ZqZEdsMlpWTnNhV1JsTG1Oc1lYTnpUR2x6ZEM1eVpXMXZkbVVvSjJGamRHbDJaU2NwTzF4eVhHNWNkRngwWEhSY2RHNWxlSFJUYVdKc2FXNW5MbU5zWVhOelRHbHpkQzVoWkdRb0oyRmpkR2wyWlNjcE8xeHlYRzVjZEZ4MFhIUjlYSEpjYmx4MFhIUjlLVHRjY2x4dVhIUjlYSEpjYmx4eVhHNWNkR1oxYm1OMGFXOXVJSEJ5WlhacGIzVnpVMnhwWkdVb0tTQjdYSEpjYmx4MFhIUmpiMjV6ZENCd2NtVjJRblJ1SUQwZ1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvSjNCeVpYWW5LVHRjY2x4dVhISmNibHgwWEhSd2NtVjJRblJ1TG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjJOc2FXTnJKeXdnS0dVcElEMCtJSHRjY2x4dVhIUmNkRngwWTI5dWMzUWdZV04wYVhabFUyeHBaR1VnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2N1WTJGeWIzVnpaV3hmWDNOc2FXUmxMbUZqZEdsMlpTY3BPMXh5WEc1Y2NseHVYSFJjZEZ4MGJHVjBJRzVsZUhSVGFXSnNhVzVuSUQwZ1lXTjBhWFpsVTJ4cFpHVXVjSEpsZG1sdmRYTkZiR1Z0Wlc1MFUybGliR2x1Wnp0Y2NseHVYSEpjYmx4MFhIUmNkR2xtSUNodVpYaDBVMmxpYkdsdVp5QTlQU0J1ZFd4c0tTQjdYSEpjYmx4MFhIUmNkRngwYm1WNGRGTnBZbXhwYm1jZ1BTQmhZM1JwZG1WVGJHbGtaVHRjY2x4dVhIUmNkRngwZlZ4eVhHNWNjbHh1WEhSY2RGeDBhV1lnS0c1bGVIUlRhV0pzYVc1bkxtTnNZWE56VEdsemRDNWpiMjUwWVdsdWN5Z25ZMkZ5YjNWelpXeGZYM05zYVdSbEp5a3BJSHRjY2x4dVhIUmNkRngwWEhSaFkzUnBkbVZUYkdsa1pTNWpiR0Z6YzB4cGMzUXVjbVZ0YjNabEtDZGhZM1JwZG1VbktUdGNjbHh1WEhSY2RGeDBYSFJ1WlhoMFUybGliR2x1Wnk1amJHRnpjMHhwYzNRdVlXUmtLQ2RoWTNScGRtVW5LVHRjY2x4dVhIUmNkRngwZlZ4eVhHNWNkRngwZlNrN1hISmNibHgwZlZ4eVhHNWNjbHh1WEhScFppQW9ZMkZ5YjNWelpXd2dJVDA5SUc1MWJHd3BJSHRjY2x4dVhIUmNkQ2htZFc1amRHbHZiaUFvS1NCN1hISmNibHgwWEhSY2RHUnBjM0JzWVhsRFlYSnZkWE5sYkNncE8xeHlYRzVjZEZ4MGZTa29LVHRjY2x4dVhIUjlYSEpjYm4wcE8xeHlYRzRpTENKM2FXNWtiM2N1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduUkU5TlEyOXVkR1Z1ZEV4dllXUmxaQ2NzSUdaMWJtTjBhVzl1SUNncElIdGNjbHh1WEhRdkx5QjBZV0p6WEhKY2JseDBZMjl1YzNRZ2RHRmlUR2x6ZEVKMGJpQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNKQmJHd29KeTUwWVdKalkyOXlaR2x2Ymw5ZmJHbHpkQzFpZEc0bktUdGNjbHh1WEhSamIyNXpkQ0IwWVdKeklEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2tGc2JDZ25MblJoWW1OamIzSmthVzl1WDE5amIyNTBZV2x1WlhJbktUdGNjbHh1WEhSamIyNXpkQ0IwWVdKalkyOXlaR2x2Ymt4cGMzUWdQU0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDZ25kR0ZpWTJOdmNtUnBiMjR0YkdsemRDY3BPMXh5WEc1Y2RHTnZibk4wSUhSaFluTkRiMjUwWlc1MElEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2tGc2JDZ25MblJoWW1OamIzSmthVzl1WDE5MFlXSXRhVzV1WlhJbktUdGNjbHh1WEhSamIyNXpkQ0IwWVdKalkyOXlaR2x2YmlBOUlHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0NkMFlXSmpZMjl5WkdsdmJpY3BPMXh5WEc1Y2NseHVYSFJtZFc1amRHbHZiaUJoWTNScGRtRjBaVlJoWW5Nb0tTQjdYSEpjYmx4MFhIUjBZV0pNYVhOMFFuUnVMbVp2Y2tWaFkyZ29LSFJoWWlrZ1BUNGdlMXh5WEc1Y2RGeDBYSFIwWVdJdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblkyeHBZMnNuTENBb1pTa2dQVDRnZTF4eVhHNWNkRngwWEhSY2RHTnZibk4wSUhSaFlrNWhkaUE5SUhSaFlpNXdZWEpsYm5SRmJHVnRaVzUwTzF4eVhHNWNkRngwWEhSY2RHTnZibk4wSUhSaFluTkRiMjUwWVdsdVpYSWdQU0IwWVdKT1lYWXVjR0Z5Wlc1MFJXeGxiV1Z1ZEM1d1lYSmxiblJGYkdWdFpXNTBPMXh5WEc1Y2RGeDBYSFJjZEdOdmJuTjBJSFJoWWs1MWJXSmxjaUE5SUhSaFlpNWtZWFJoYzJWMExtWnZjbFJoWWp0Y2NseHVYSFJjZEZ4MFhIUmpiMjV6ZENCMFlXSlViMEZqZEdsMllYUmxJRDBnZEdGaWMwTnZiblJoYVc1bGNpNXhkV1Z5ZVZObGJHVmpkRzl5S0Z4eVhHNWNkRngwWEhSY2RGeDBZQzUwWVdKalkyOXlaR2x2Ymw5ZmRHRmlXMlJoZEdFdGRHRmlQVndpSkh0MFlXSk9kVzFpWlhKOVhDSmRZRnh5WEc1Y2RGeDBYSFJjZENrN1hISmNibHh5WEc1Y2RGeDBYSFJjZEhSaFlrNWhkaTV4ZFdWeWVWTmxiR1ZqZEc5eVFXeHNLQ2N1ZEdGaVkyTnZjbVJwYjI1ZlgyeHBjM1F0WW5SdUp5a3VabTl5UldGamFDZ29ZblJ1S1NBOVBpQjdYSEpjYmx4MFhIUmNkRngwWEhSaWRHNHVZMnhoYzNOTWFYTjBMbkpsYlc5MlpTZ25ZM1Z5Y21WdWRDY3BPMXh5WEc1Y2RGeDBYSFJjZEgwcE8xeHlYRzVjY2x4dVhIUmNkRngwWEhSMFlXSnpRMjl1ZEdGcGJtVnlMbkYxWlhKNVUyVnNaV04wYjNKQmJHd29KeTUwWVdKalkyOXlaR2x2Ymw5ZmRHRmlKeWt1Wm05eVJXRmphQ2dvZEdGaUtTQTlQaUI3WEhKY2JseDBYSFJjZEZ4MFhIUjBZV0l1WTJ4aGMzTk1hWE4wTG5KbGJXOTJaU2duWTNWeWNtVnVkQ2NwTzF4eVhHNWNkRngwWEhSY2RIMHBPMXh5WEc1Y2NseHVYSFJjZEZ4MFhIUjBZV0l1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25ZM1Z5Y21WdWRDY3BPMXh5WEc1Y2RGeDBYSFJjZEhSaFlsUnZRV04wYVhaaGRHVXVZMnhoYzNOTWFYTjBMbUZrWkNnblkzVnljbVZ1ZENjcE8xeHlYRzVjY2x4dVhIUmNkRngwWEhScFppQW9kMmx1Wkc5M0xtbHVibVZ5VjJsa2RHZ2dQajBnTmpBd0tTQjdYSEpjYmx4MFhIUmNkRngwWEhSMFlXSnpRMjl1ZEdWdWRDNW1iM0pGWVdOb0tDaDBZV0p6S1NBOVBpQjdYSEpjYmx4MFhIUmNkRngwWEhSY2RIUmhZbk11YzNSNWJHVXViV0Y0U0dWcFoyaDBJRDBnZEdGaWN5NXpZM0p2Ykd4SVpXbG5hSFFnS3lBbmNIZ25PMXh5WEc1Y2RGeDBYSFJjZEZ4MGZTazdYSEpjYmx4MFhIUmNkRngwZlZ4eVhHNWNkRngwWEhSOUtUdGNjbHh1WEhSY2RIMHBPMXh5WEc1Y2NseHVYSFJjZEdsbUlDaDBZV0pqWTI5eVpHbHZia3hwYzNRcElIdGNjbHh1WEhSY2RGeDBkR0ZpY3k1bWIzSkZZV05vS0NoMFlXSXBJRDArSUh0Y2NseHVYSFJjZEZ4MFhIUjBZV0l1Y1hWbGNubFRaV3hsWTNSdmNpZ25MblJoWW1OamIzSmthVzl1WDE5c2FYTjBJQzUwWVdKalkyOXlaR2x2Ymw5ZlluUnVKeWt1WTJ4cFkyc29LVHRjY2x4dVhIUmNkRngwZlNrN1hISmNibHgwWEhSOVhISmNibHgwZlZ4eVhHNWNjbHh1WEhRdkx5OHZMeUJoWTJOdmNtUnBiMjVjY2x4dVhIUmpiMjV6ZENCaFkyTnZjbVJwYjI1Q2RHNGdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eVFXeHNLQ2N1WVdOamIzSmthVzl1WDE5c2FYTjBMV0owYmljcE8xeHlYRzVjY2x4dVhIUm1kVzVqZEdsdmJpQmhZM1JwZG1GMFpVRmpZMjl5WkdsdmJpZ3BJSHRjY2x4dVhIUmNkR0ZqWTI5eVpHbHZia0owYmk1bWIzSkZZV05vS0NoaWRHNHBJRDArSUh0Y2NseHVYSFJjZEZ4MFluUnVMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMk5zYVdOckp5d2dLQ2tnUFQ0Z2UxeHlYRzVjZEZ4MFhIUmNkQzh2SUdOb1pXTnJJR1p2Y2lCdmNHVnVJR0ZqWTI5eVpHbHZibHh5WEc1Y2RGeDBYSFJjZEdOdmJuTjBJR0ZqWTI5eVpHbHZia0owYms5d1pXNGdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtGeHlYRzVjZEZ4MFhIUmNkRngwSnk1aFkyTnZjbVJwYjI1ZlgyeHBjM1F0WW5SdUxtOXdaVzRuWEhKY2JseDBYSFJjZEZ4MEtUdGNjbHh1WEhKY2JseDBYSFJjZEZ4MGFXWWdLR0ZqWTI5eVpHbHZia0owYms5d1pXNGdKaVlnWVdOamIzSmthVzl1UW5SdVQzQmxiaUFoUFQwZ1luUnVLU0I3WEhKY2JseDBYSFJjZEZ4MFhIUXZMeUJwWmlCMGFHVnlaU0JwY3lCdmNHVnVJSFJvWlc0Z2NtVnRiM1psSUc5d1pXNGdZMnhoYzNNZ1lXNWtJSE5sZENCdFlYaG9aV2xuYUhRZ2RHOGdNRnh5WEc1Y2RGeDBYSFJjZEZ4MFlXTmpiM0prYVc5dVFuUnVUM0JsYmk1amJHRnpjMHhwYzNRdWRHOW5aMnhsS0NkdmNHVnVKeWs3WEhKY2JseDBYSFJjZEZ4MFhIUmhZMk52Y21ScGIyNUNkRzVQY0dWdUxtNWxlSFJGYkdWdFpXNTBVMmxpYkdsdVp5NXpkSGxzWlM1dFlYaElaV2xuYUhRZ1BTQXdPMXh5WEc1Y2RGeDBYSFJjZEgxY2NseHVYSEpjYmx4MFhIUmNkRngwTHk4Z2MyVjBJRzl3Wlc0Z1kyeGhjM01nZEc4Z1pYWmxjbmtnWTJ4cFkydGxaQ0JoWTJOdmNtUnBiMjRnWW5SdVhISmNibHgwWEhSY2RGeDBZblJ1TG1Oc1lYTnpUR2x6ZEM1MGIyZG5iR1VvSjI5d1pXNG5LVHRjY2x4dVhIUmNkRngwWEhSamIyNXpkQ0JoWTJOdmNtUnBiMjVDYjJSNUlEMGdZblJ1TG01bGVIUkZiR1Z0Wlc1MFUybGliR2x1Wnp0Y2NseHVYSEpjYmx4MFhIUmNkRngwYVdZZ0tHSjBiaTVqYkdGemMweHBjM1F1WTI5dWRHRnBibk1vSjI5d1pXNG5LU2tnZTF4eVhHNWNkRngwWEhSY2RGeDBZV05qYjNKa2FXOXVRbTlrZVM1emRIbHNaUzV0WVhoSVpXbG5hSFFnUFNCaFkyTnZjbVJwYjI1Q2IyUjVMbk5qY205c2JFaGxhV2RvZENBcklDZHdlQ2M3WEhKY2JseDBYSFJjZEZ4MGZTQmxiSE5sSUh0Y2NseHVYSFJjZEZ4MFhIUmNkR0ZqWTI5eVpHbHZia0p2WkhrdWMzUjViR1V1YldGNFNHVnBaMmgwSUQwZ01EdGNjbHh1WEhSY2RGeDBYSFI5WEhKY2JseDBYSFJjZEgwcE8xeHlYRzVjZEZ4MGZTazdYSEpjYmx4eVhHNWNkRngwZDJsdVpHOTNMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KM0psYzJsNlpTY3NJQ2hsS1NBOVBpQjdYSEpjYmx4MFhIUmNkR2xtSUNoM2FXNWtiM2N1YVc1dVpYSlhhV1IwYUNBOElEWXdNQ2tnZTF4eVhHNWNkRngwWEhSY2RIUmhZbk5EYjI1MFpXNTBMbVp2Y2tWaFkyZ29LSFJoWW5NcElEMCtJSHRjY2x4dVhIUmNkRngwWEhSY2RIUmhZbk11YzNSNWJHVXViV0Y0U0dWcFoyaDBJRDBnTUR0Y2NseHVYSFJjZEZ4MFhIUmNkR2xtSUNoMFlXSnpMbkJ5WlhacGIzVnpSV3hsYldWdWRGTnBZbXhwYm1jdVkyeGhjM05NYVhOMExtTnZiblJoYVc1ektDZHZjR1Z1SnlrcElIdGNjbHh1WEhSY2RGeDBYSFJjZEZ4MGRHRmljeTV3Y21WMmFXOTFjMFZzWlcxbGJuUlRhV0pzYVc1bkxtTnNZWE56VEdsemRDNXlaVzF2ZG1Vb0oyOXdaVzRuS1R0Y2NseHVYSFJjZEZ4MFhIUmNkSDFjY2x4dVhIUmNkRngwWEhSOUtUdGNjbHh1WEhSY2RGeDBmVnh5WEc1Y2RGeDBmU2s3WEhKY2JseDBmVnh5WEc1Y2NseHVYSFJwWmlBb2RHRmlZMk52Y21ScGIyNHBJSHRjY2x4dVhIUmNkR0ZqZEdsMllYUmxWR0ZpY3lncE8xeHlYRzVjZEZ4MFlXTjBhWFpoZEdWQlkyTnZjbVJwYjI0b0tUdGNjbHh1WEhSOVhISmNibjBwTzF4eVhHNGlYU3dpYzI5MWNtTmxVbTl2ZENJNklpSjkifQ==
