import Common from "./common/common";

import Lang from "./macros/lang";
import Hamburger from "./macros/hamburger";
import HeaderFixed from "./macros/header-fixed";
import Reviews from "./macros/reviews";
import AnchorScroll from "./macros/smoothAnchorScroll";
import GalerryCB from "./macros/gallery";


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
  AnchorScroll.init();

  GalerryCB.init()

}, false);


// EVENT LISTENER - SCROLL
// ========================================
window.addEventListener('scroll', (ev) => {}, false);
