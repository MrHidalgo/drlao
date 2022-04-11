const HeaderFixed = (function() {
  const init = function() {
    let elSelector = '#header',
      $element = $(elSelector);

    if (!$element.length) return true;

    let elHeight = 0,
      elTop = 0,
      $document = $(document),
      dHeight = 0,
      $window = $(window),
      wHeight = 0,
      wScrollCurrent = 0,
      wScrollBefore = 0,
      wScrollDiff = 0;

    if($window.scrollTop() > 0) {
      $element.addClass('is-color');
    } else {
      $element.removeClass('is-color')
    }

    $window.on('scroll', function (ev) {

      if($window.scrollTop() > 0) {
        $element.addClass('is-color');
      } else {
        $element.removeClass('is-color')
      }

      for(let i = 0; i < $element.length; i++) {

        if($window.scrollTop() > ($window.height() / 2)) {

          elHeight = $($element[i]).outerHeight();
          dHeight = $document.height();
          wHeight = $window.height();
          wScrollCurrent = $window.scrollTop();
          wScrollDiff = wScrollBefore - wScrollCurrent;
          elTop = parseInt($($element[i]).css('top')) + wScrollDiff;

          if (wScrollCurrent <= 0) {
            $($element[i]).css('top', 0).removeClass('is-hide');
          } else if (wScrollDiff > 0) {
            $($element[i]).css('top', 0).removeClass('is-hide');
          } else if (wScrollDiff < 0) {
            if (wScrollCurrent + wHeight >= dHeight - elHeight) {
              // $($element[i]).css('top', (elTop = wScrollCurrent + wHeight - dHeight) < 0 ? elTop : 0);
            } else {
              $($element[i]).css('top', -($element.outerHeight(true))).addClass('is-hide');
            }
          }

        }

      }

      wScrollBefore = wScrollCurrent;

    });

  };
  return {
    init: init
  };

})();

export default HeaderFixed;
