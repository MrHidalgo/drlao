import Common from "./common/common";

import Lang from "./macros/lang";
import Hamburger from "./macros/hamburger";
import HeaderFixed from "./macros/header-fixed";
import Reviews from "./macros/reviews";
import anchorScroll from "./macros/smoothAnchorScroll";


// EVENT LISTENER - LOAD
// ========================================
window.addEventListener('load', (ev) => {

  // COMMON
  Common.initLoad();

  // MACROS
  Lang.init();
  Hamburger.init();
  HeaderFixed.init();
  Reviews.init();
  anchorScroll.init();

}, false);


// EVENT LISTENER - SCROLL
// ========================================
window.addEventListener('scroll', (ev) => {}, false);
