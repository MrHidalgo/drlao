const Lang = (function() {

  const init = function() {
    document.querySelectorAll('.header__lang a').forEach((val, idx) => {
      val.addEventListener('click', (ev) => {

        document.querySelector('.header__lang a.is-active').classList.remove('is-active');
        ev.currentTarget.classList.add('is-active');

        }, false);
    });
  };
  return {
    init: init
  };

})();

export default Lang;
