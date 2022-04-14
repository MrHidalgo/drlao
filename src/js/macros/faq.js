const FaqToggle = (function() {
  const init = function() {

    $('.faq__collapse-head').on('click', (ev) => {
      const el = $(ev.currentTarget);

      el.toggleClass('is-open');
      el.siblings('.faq__collapse-body').slideToggle(200);

    });

  };
  return {
    init: init
  };

})();

export default FaqToggle;
