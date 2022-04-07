/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/common/common.js":
/*!*********************************!*\
  !*** ./src/js/common/common.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var Common = function () {
  var pressESC = function pressESC() {
    document.addEventListener('keyup', function (ev) {
      if (ev.keyCode === 27) {}
    });
  };

  var clickBody = function clickBody() {
    document.body.addEventListener('click', function (ev) {
      var className = "body";

      if (!ev.target.closest(className).length) {}
    });
  };

  var preventBehavior = function preventBehavior() {
    var link = document.querySelectorAll("a");
    link.forEach(function (val, idx) {
      val.addEventListener("click", function (ev) {
        if (val.getAttribute("href") === "#") {
          ev.preventDefault();
        }
      });
    });
  };

  var initLoad = function initLoad() {
    pressESC();
    clickBody();
    preventBehavior();
  };

  return {
    initLoad: initLoad
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Common);

/***/ }),

/***/ "./src/js/macros/hamburger.js":
/*!************************************!*\
  !*** ./src/js/macros/hamburger.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var Hamburger = function () {
  var init = function init() {
    document.querySelector('[hamburger-js]').addEventListener('click', function (ev) {
      var el = ev.currentTarget,
          documentMainTags = document.querySelectorAll('html, body');
      documentMainTags.forEach(function (val, idx) {
        return val.classList.toggle('is-hideScroll');
      });
      el.classList.toggle('is-active');
    }, false);
  };

  return {
    init: init
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Hamburger);

/***/ }),

/***/ "./src/js/macros/header-fixed.js":
/*!***************************************!*\
  !*** ./src/js/macros/header-fixed.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var HeaderFixed = function () {
  var init = function init() {
    var elSelector = '#header',
        $element = $(elSelector);
    if (!$element.length) return true;
    var elHeight = 0,
        elTop = 0,
        $document = $(document),
        dHeight = 0,
        $window = $(window),
        wHeight = 0,
        wScrollCurrent = 0,
        wScrollBefore = 0,
        wScrollDiff = 0;

    if ($window.scrollTop() > 0) {
      $element.addClass('is-color');
    } else {
      $element.removeClass('is-color');
    }

    $window.on('scroll', function (ev) {
      if ($window.scrollTop() > 0) {
        $element.addClass('is-color');
      } else {
        $element.removeClass('is-color');
      }

      for (var i = 0; i < $element.length; i++) {
        if ($window.scrollTop() > $window.height() / 2.5) {
          elHeight = $($element[i]).outerHeight();
          dHeight = $document.height();
          wHeight = $window.height();
          wScrollCurrent = $window.scrollTop();
          wScrollDiff = wScrollBefore - wScrollCurrent;
          elTop = parseInt($($element[i]).css('top')) + wScrollDiff;

          if (wScrollCurrent <= 0) {
            console.log("if");
            $($element[i]).css('top', 0).removeClass('is-hide');
          } else if (wScrollDiff > 0) {
            console.log("else if 1");
            $($element[i]).css('top', 0).removeClass('is-hide');
          } else if (wScrollDiff < 0) {
            console.log("else if 2");

            if (wScrollCurrent + wHeight >= dHeight - elHeight) {// $($element[i]).css('top', (elTop = wScrollCurrent + wHeight - dHeight) < 0 ? elTop : 0);
            } else {
              $($element[i]).css('top', -$element.outerHeight(true)).addClass('is-hide');
            }
          }
        }
      }

      wScrollBefore = wScrollCurrent;
    });
  };

  return {
    init: init
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (HeaderFixed);

/***/ }),

/***/ "./src/js/macros/lang.js":
/*!*******************************!*\
  !*** ./src/js/macros/lang.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var Lang = function () {
  var init = function init() {
    document.querySelectorAll('.header__lang a').forEach(function (val, idx) {
      val.addEventListener('click', function (ev) {
        document.querySelector('.header__lang a.is-active').classList.remove('is-active');
        ev.currentTarget.classList.add('is-active');
      }, false);
    });
  };

  return {
    init: init
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Lang);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/common */ "./src/js/common/common.js");
/* harmony import */ var _macros_lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./macros/lang */ "./src/js/macros/lang.js");
/* harmony import */ var _macros_hamburger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./macros/hamburger */ "./src/js/macros/hamburger.js");
/* harmony import */ var _macros_header_fixed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./macros/header-fixed */ "./src/js/macros/header-fixed.js");



 // EVENT LISTENER - LOAD
// ========================================

window.addEventListener('load', function (ev) {
  // COMMON
  _common_common__WEBPACK_IMPORTED_MODULE_0__["default"].initLoad(); // MACROS

  _macros_lang__WEBPACK_IMPORTED_MODULE_1__["default"].init();
  _macros_hamburger__WEBPACK_IMPORTED_MODULE_2__["default"].init();
  _macros_header_fixed__WEBPACK_IMPORTED_MODULE_3__["default"].init();
}, false); // EVENT LISTENER - SCROLL
// ========================================

window.addEventListener('scroll', function (ev) {}, false);
}();
/******/ })()
;