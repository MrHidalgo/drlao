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

/***/ "./src/js/macros/achievementToggle.js":
/*!********************************************!*\
  !*** ./src/js/macros/achievementToggle.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var AchievementToggle = function () {
  var init = function init() {
    $('.achievement__nav a').on('click', function (ev) {
      var el = $(ev.currentTarget),
          elID = el.attr('data-id');
      $('.achievement__nav a').removeClass('is-active');
      el.addClass('is-active');
      $('.achievement__block').removeClass('is-active');
      $('.achievement__block[data-block-id="' + el.attr('data-id') + '"]').addClass('is-active');
    });
  };

  return {
    init: init
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (AchievementToggle);

/***/ }),

/***/ "./src/js/macros/faq.js":
/*!******************************!*\
  !*** ./src/js/macros/faq.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var FaqToggle = function () {
  var init = function init() {
    $('.faq__collapse-head').on('click', function (ev) {
      var el = $(ev.currentTarget);
      el.toggleClass('is-open');
      el.siblings('.faq__collapse-body').slideToggle(200);
    });
  };

  return {
    init: init
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (FaqToggle);

/***/ }),

/***/ "./src/js/macros/gallery.js":
/*!**********************************!*\
  !*** ./src/js/macros/gallery.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var GalerryCB = function () {
  var init = function init() {
    if (!$('#gallery').length) return;
    $('#gallery .gallery__wrapper-2')[0].style.width = 'calc(100% - ' + (document.querySelector('#gallery .c-grid').getBoundingClientRect().left + 20) + 'px)';

    for (var i = 0; i < $('.gallery__wrapper-2 .swiper').length; i++) {
      new Swiper($('.gallery__wrapper-2 .swiper')[i], {
        speed: 1200,
        slidesPerView: 'auto',
        spaceBetween: 15,
        on: {
          init: function init(swiper) {
            swiper.$el[0].style.opacity = '1';
          }
        }
      });
    }

    window.addEventListener('resize', function (ev) {
      $('#gallery .gallery__wrapper-2')[0].style.width = 'calc(100% - ' + (document.querySelector('#gallery .c-grid').getBoundingClientRect().left + 20) + 'px)';
    });
  };

  return {
    init: init
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (GalerryCB);

/***/ }),

/***/ "./src/js/macros/hamburger.js":
/*!************************************!*\
  !*** ./src/js/macros/hamburger.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var Hamburger = function () {
  var init = function init() {
    if (!document.querySelector('[hamburger-js]')) return;
    document.querySelector('[hamburger-js]').addEventListener('click', function (ev) {
      var el = ev.currentTarget,
          documentMainTags = document.querySelectorAll('html, body'),
          mobileContainer = document.querySelector("[mobile-block-js]");
      el.classList.toggle('is-active');

      if (mobileContainer.classList.contains("is-open")) {
        mobileContainer.classList.remove("is-open");
        mobileContainer.classList.add("is-animated");
        setTimeout(function () {
          return mobileContainer.classList.remove("is-animated");
        }, 300);
      } else {
        mobileContainer.classList.add("is-open");
      }

      documentMainTags.forEach(function (val, idx) {
        return val.classList.toggle('is-hideScroll');
      });
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
        if ($window.scrollTop() > $window.height() / 2) {
          elHeight = $($element[i]).outerHeight();
          dHeight = $document.height();
          wHeight = $window.height();
          wScrollCurrent = $window.scrollTop();
          wScrollDiff = wScrollBefore - wScrollCurrent;
          elTop = parseInt($($element[i]).css('top')) + wScrollDiff;

          if (wScrollCurrent <= 0) {
            $($element[i]).css('top', 0).removeClass('is-hide');
          } else if (wScrollDiff > 0) {
            $($element[i]).css('top', 0).removeClass('is-hide');
          } else if (wScrollDiff < 0) {
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

/***/ }),

/***/ "./src/js/macros/medical.js":
/*!**********************************!*\
  !*** ./src/js/macros/medical.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var Medical = function () {
  var init = function init() {
    if (!$('.medical__carousel .swiper')[0]) return;
    new Swiper($('.medical__carousel .swiper')[0], {
      loop: true,
      speed: 1200,
      slidesPerView: 'auto',
      spaceBetween: 15,
      slidesOffsetBefore: '400',
      breakpoints: {
        320: {
          slidesOffsetBefore: '0'
        },
        1024: {
          slidesOffsetBefore: '400'
        }
      },
      navigation: {
        nextEl: '.medical__carousel-btn--next',
        prevEl: '.medical__carousel-btn--prev'
      },
      pagination: {
        el: '.medical__carousel .swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      on: {
        init: function init(swiper) {
          swiper.$el[0].style.opacity = '1';
        }
      }
    });
  };

  return {
    init: init
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Medical);

/***/ }),

/***/ "./src/js/macros/reviews.js":
/*!**********************************!*\
  !*** ./src/js/macros/reviews.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var Reviews = function () {
  var init = function init() {
    if (!$('.reviews__carousel .swiper').length) return;
    new Swiper('.reviews__carousel .swiper', {
      loop: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      speed: 1200,
      navigation: {
        nextEl: '.reviews__carousel-btn--next',
        prevEl: '.reviews__carousel-btn--prev'
      },
      pagination: {
        el: '.reviews__carousel .swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    });
  };

  return {
    init: init
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Reviews);

/***/ }),

/***/ "./src/js/macros/smoothAnchorScroll.js":
/*!*********************************************!*\
  !*** ./src/js/macros/smoothAnchorScroll.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var AnchorScroll = function () {
  var init = function init() {
    if (!$('[anchor-js]').length) return;
    $('[anchor-js]').on("click", function (e) {
      var linkHref = $(e.currentTarget).attr('href'),
          headerHeight = $(".header").outerHeight() || 0,
          topHeightOffset = $(linkHref).offset().top;
      $('body, html').animate({
        scrollTop: topHeightOffset
      }, 1000);
    });
  };

  return {
    init: init
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (AnchorScroll);

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
/* harmony import */ var _macros_reviews__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./macros/reviews */ "./src/js/macros/reviews.js");
/* harmony import */ var _macros_smoothAnchorScroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./macros/smoothAnchorScroll */ "./src/js/macros/smoothAnchorScroll.js");
/* harmony import */ var _macros_gallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./macros/gallery */ "./src/js/macros/gallery.js");
/* harmony import */ var _macros_medical__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./macros/medical */ "./src/js/macros/medical.js");
/* harmony import */ var _macros_achievementToggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./macros/achievementToggle */ "./src/js/macros/achievementToggle.js");
/* harmony import */ var _macros_faq__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./macros/faq */ "./src/js/macros/faq.js");









 // EVENT LISTENER - LOAD
// ========================================

window.addEventListener('load', function (ev) {
  // COMMON
  _common_common__WEBPACK_IMPORTED_MODULE_0__["default"].initLoad(); // MACROS

  _macros_lang__WEBPACK_IMPORTED_MODULE_1__["default"].init();
  _macros_hamburger__WEBPACK_IMPORTED_MODULE_2__["default"].init();
  _macros_header_fixed__WEBPACK_IMPORTED_MODULE_3__["default"].init();
  _macros_reviews__WEBPACK_IMPORTED_MODULE_4__["default"].init();
  _macros_smoothAnchorScroll__WEBPACK_IMPORTED_MODULE_5__["default"].init();
  _macros_medical__WEBPACK_IMPORTED_MODULE_7__["default"].init();
  _macros_gallery__WEBPACK_IMPORTED_MODULE_6__["default"].init();
  _macros_achievementToggle__WEBPACK_IMPORTED_MODULE_8__["default"].init();
  _macros_faq__WEBPACK_IMPORTED_MODULE_9__["default"].init();
  /* PARALLAX EFFECT FOR SVG TEXT */

  gsap.to("[svg-js] svg", {
    scrollTrigger: {
      scrub: true
    },
    y: function y(i, target) {
      return -ScrollTrigger.maxScroll(window) * -0.025;
    },
    ease: "none"
  });
  /* SCROLL WOW ANIMATION */

  AOS.init({
    duration: 1000,
    once: true
  });
}, false); // EVENT LISTENER - SCROLL
// ========================================

window.addEventListener('scroll', function (ev) {}, false);
}();
/******/ })()
;