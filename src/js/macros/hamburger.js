const Hamburger = (function() {
  const init = function() {

    if(!document.querySelector('[hamburger-js]')) return;

    document.querySelector('[hamburger-js]').addEventListener('click', (ev) => {

      const el = ev.currentTarget,
        documentMainTags = document.querySelectorAll('html, body'),
        mobileContainer = document.querySelector("[mobile-block-js]");

      el.classList.toggle('is-active');

      if(mobileContainer.classList.contains("is-open")) {
        mobileContainer.classList.remove("is-open");
        mobileContainer.classList.add("is-animated");

        setTimeout(() => mobileContainer.classList.remove("is-animated"), 300);
      } else {
        mobileContainer.classList.add("is-open");
      }

      documentMainTags.forEach((val, idx) => val.classList.toggle('is-hideScroll'));

    }, false);

  };
  return {
    init: init
  };

})();

export default Hamburger;
