import Common from "./common/common";

import Lang from "./macros/lang";
import Hamburger from "./macros/hamburger";
import HeaderFixed from "./macros/header-fixed";


// EVENT LISTENER - LOAD
// ========================================
window.addEventListener('load', (ev) => {

  // COMMON
  Common.initLoad();

  // MACROS
  Lang.init();
  Hamburger.init();
  HeaderFixed.init();

}, false);


// EVENT LISTENER - SCROLL
// ========================================
window.addEventListener('scroll', (ev) => {}, false);
