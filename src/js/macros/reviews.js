const Reviews = (function() {
  const init = function() {

    if(!$('.reviews__carousel .swiper').length) return;

    new Swiper('.reviews__carousel .swiper', {
      loop: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      speed: 1200,
      navigation: {
        nextEl: '.reviews__carousel-btn--next',
        prevEl: '.reviews__carousel-btn--prev',
      },
      pagination: {
        el: '.reviews__carousel .swiper-pagination',
        type: 'bullets',
        clickable: true
      },
    });

  };
  return {
    init: init
  };

})();

export default Reviews;
