const Hamburger = (function() {
  const init = function() {

    document.querySelector('[hamburger-js]').addEventListener('click', (ev) => {

      const el = ev.currentTarget,
        documentMainTags = document.querySelectorAll('html, body');

      documentMainTags.forEach((val, idx) => val.classList.toggle('is-hideScroll'));
      el.classList.toggle('is-active');

    }, false);

  };
  return {
    init: init
  };

})();

export default Hamburger;
