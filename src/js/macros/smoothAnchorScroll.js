const AnchorScroll = (function() {
  const init = function() {

    if(!$('[anchor-js]').length) return;

    $('[anchor-js]').on("click", (e) => {

      let linkHref = $(e.currentTarget).attr('href'),
        headerHeight = $(".header").outerHeight() || 0,
        topHeightOffset = $(linkHref).offset().top;

      $('body, html').animate({
        scrollTop: topHeightOffset
      }, 1000);

    });

  };
  return {
    init: init
  };

})();

export default AnchorScroll;
