import Common from "./common/common";

import Lang from "./macros/lang";
import Hamburger from "./macros/hamburger";
import HeaderFixed from "./macros/header-fixed";
import Reviews from "./macros/reviews";
import AnchorScroll from "./macros/smoothAnchorScroll";
import GalerryCB from "./macros/gallery";
import Medical from "./macros/medical";
import AchievementToggle from "./macros/achievementToggle";
import FaqToggle
  from "./macros/faq";
import MenuToggle
  from "./macros/menuToggle";


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

  Medical.init();
  GalerryCB.init();
  AchievementToggle.init();
  FaqToggle.init();
  MenuToggle.init();

  /* PARALLAX EFFECT FOR SVG TEXT */
  gsap.to("[svg-js] svg", {
    scrollTrigger: {
      scrub: true
    },
    y: (i, target) => -ScrollTrigger.maxScroll(window) * (-0.025),
    ease: "none"
  });

  /* SCROLL WOW ANIMATION */
  AOS.init({
    duration: 1000,
    once: true
  });

}, false);


// EVENT LISTENER - SCROLL
// ========================================
window.addEventListener('scroll', (ev) => {}, false);
