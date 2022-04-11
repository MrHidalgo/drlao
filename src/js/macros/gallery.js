const GalerryCB = (function() {
  const init = function() {

    if(!$('#gallery').length) return;

    $('#gallery .gallery__wrapper-2')[0].style.width = 'calc(100% - ' + (document.querySelector('#gallery .c-grid').getBoundingClientRect().left + 20) + 'px)';

    for(let i = 0; i < $('.gallery__wrapper-2 .swiper').length; i++) {
      new Swiper($('.gallery__wrapper-2 .swiper')[i], {
        speed: 1200,
        slidesPerView: 'auto',
        spaceBetween: 15,
        on: {
          init: function(swiper) {
            swiper.$el[0].style.opacity = '1';
          }
        }
      });
    }

    window.addEventListener('resize', (ev) => {
      $('#gallery .gallery__wrapper-2')[0].style.width = 'calc(100% - ' + (document.querySelector('#gallery .c-grid').getBoundingClientRect().left + 20) + 'px)';
    });

  };
  return {
    init: init
  };

})();

export default GalerryCB;
