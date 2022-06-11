const MenuToggle = (function() {
  const init = function() {

    $('.menu__btn').hover(
      (ev) => {
        const el = $(ev.currentTarget),
          elID = el.attr('data-id');

        if($(window).width() >= 768) {
          $('.menu__btn').removeClass('is-hover');
          el.addClass('is-hover');

          $('.menu__content').hide();
          $('.menu__content[data-content-id="' + elID + '"]').fadeIn(500);
        }
      },
      (ev) => {},
    );

    $('.menu__link-wrapper').hover(
      (ev) => {},
      (ev) => {
        if($(window).width() >= 768) {
          $('.menu__btn').removeClass('is-hover');
          $('.menu__content').hide();
        }
      }
    );

  };
  return {
    init: init
  };

})();

export default MenuToggle;
