const AchievementToggle = (function() {
  const init = function() {

    $('.achievement__nav a').on('click', (ev) => {
      const el = $(ev.currentTarget),
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

})();

export default AchievementToggle;
