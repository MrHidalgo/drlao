const Medical = (function() {
  const init = function() {

    if(!$('.medical__carousel .swiper')[0]) return;

    new Swiper($('.medical__carousel .swiper')[0], {
      loop: true,
      speed: 1200,
      slidesPerView: 'auto',
      spaceBetween: 15,
      slidesOffsetBefore: '400',
      breakpoints: {
        320: {
          slidesOffsetBefore: '0',
        },
        1024: {
          slidesOffsetBefore: '400',
        },
      },
      navigation: {
        nextEl: '.medical__carousel-btn--next',
        prevEl: '.medical__carousel-btn--prev',
      },
      pagination: {
        el: '.medical__carousel .swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      on: {
        init: function(swiper) {
          swiper.$el[0].style.opacity = '1';
        }
      }
    });

  };
  return {
    init: init
  };

})();

export default Medical;
