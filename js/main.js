$(document).ready(function () {

  $('.contact__form__heard').find('li').on('click', function () {
    $('.contact__form__heard li').removeClass('active');
    $(this).addClass('active');
    $('#hidden_heard').val($(this).data('heard'));
  });

  var roofSlope, roofSlopeCurr, roofSlopeFunc, shading, shadingCurr, shadingFunc, roofDirection, roofDirectionCurr, roofDirectionFunc;

  // roof slope
  roofSlope = $(".calculator__section_roof-slope__slider-box .slider").slider({
    value: 0,
    min: 0,
    max: 90,
    step: 5,
    create: function (event, ui) {
      $(".calculator__section_roof-slope__slider-box .slider").prepend('<div class="bg-green"></div>');
    },
    slide: function (event, ui) {
      roofSlopeFunc(event, ui);
    },
    change: function (event, ui) {
      roofSlopeFunc(event, ui);
    }
  });

  $('.calculator__section_roof-slope__slider-box .num-plus').on('click', function(){
    roofSlopeCurr = roofSlope.slider( "option", "value" );
    roofSlopeCurr < 90 && roofSlope.slider( "option", "value", roofSlopeCurr + 5 );
  });
  $('.calculator__section_roof-slope__slider-box .num-minus').on('click', function(){
    roofSlopeCurr = roofSlope.slider( "option", "value" );
    roofSlopeCurr > 0 && roofSlope.slider( "option", "value", roofSlopeCurr - 5 );
  });

  function roofSlopeFunc(event, ui) {
    $(".calculator__section_roof-slope__result-num span").html(ui.value);
    $(".calculator__section_roof-slope__bg-box").attr('data-pos', ui.value);
    $(".calculator__section_roof-slope__slider-box .slider .bg-green").css({
      'width': ui.value / 0.9 + '%'
    });
    roofSlopeCurr = roofSlope.slider( "option", "value" );
  }

  // shading
  shading = $(".calculator__section_shading__slider-box .slider").slider({
    value: 20,
    min: 0,
    max: 100,
    step: 20,
    create: function (event, ui) {
      $(".calculator__section_shading__slider-box .slider").prepend('<div class="bg-green"></div>');
    },
    slide: function (event, ui) {
      if (ui.value < 20 || ui.value > 80) {
        return false;
      } else {
        shadingFunc(event, ui);
      }
    },
    change: function (event, ui) {
      shadingFunc(event, ui);
    }
  });

  $('.calculator__section_shading__slider-box .num-plus').on('click', function(){
    shadingCurr = shading.slider( "option", "value" );
    shadingCurr < 80 && shading.slider( "option", "value", shadingCurr + 20 );
  });
  $('.calculator__section_shading__slider-box .num-minus').on('click', function(){
    shadingCurr = shading.slider( "option", "value" );
    shadingCurr > 20 && shading.slider( "option", "value", shadingCurr - 20 );
  });

  function shadingFunc(event, ui) {
    $(".calculator__section_shading__bg-box").attr('data-pos', ui.value);
    $(".calculator__section_shading__text").removeClass('visible');
    $(".calculator__section_shading__text[data-pos='"+ui.value+"']").addClass('visible');
    $(".calculator__section_shading__slider-box .slider .bg-green").css({
      'width': ui.value + '%'
    });
    shadingCurr = shading.slider( "option", "value" );
  }

  // roof direction
  roofDirection = $(".calculator__section_roof-direction__slider-box .slider").slider({
    value: 0,
    min: 0,
    max: 359,
    step: 1,
    create: function (event, ui) {
      $(".calculator__section_roof-direction__slider-box .slider").prepend('<div class="bg-green"></div>');
    },
    slide: function (event, ui) {
      roofDirectionFunc(event, ui);
    },
    change: function (event, ui) {
      roofDirectionFunc(event, ui);
    }
  });

  $('.calculator__section_roof-direction__slider-box .num-plus').on('click', function(){
    roofDirectionCurr = roofDirection.slider( "option", "value" );
    roofDirectionCurr < 359 && roofDirection.slider( "option", "value", roofDirectionCurr + 1 );
  });
  $('.calculator__section_roof-direction__slider-box .num-minus').on('click', function(){
    roofDirectionCurr = roofDirection.slider( "option", "value" );
    roofDirectionCurr > 0 && roofDirection.slider( "option", "value", roofDirectionCurr - 1 );
  });

  function roofDirectionFunc(event, ui) {
    $(".compass__arrow").css('transform', 'translate(-50%, -50%) rotate(' + ui.value + 'deg)');
    $(".calculator__section_roof-direction__slider-box .slider .bg-green").css({
      'width': ui.value / 359 * 100 + '%'
    });
    roofDirectionCurr = roofDirection.slider( "option", "value" );
  }

  // need help
  // $('.calculator__need-help span')
  //   .on('click', function(){
  //     $(this)
  //       .closest('.calculator__section__box')
  //       .find('.calculator__need-help_hidden-text')
  //       .fancybox();
  // });

});