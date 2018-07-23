$(document).ready(function(){
  
  $('.contact__form__heard').find('li').on('click', function(){
    $('.contact__form__heard li').removeClass('active');
    $(this).addClass('active');
    $('#hidden_heard').val($(this).data('heard'));
  });

  var roofSlope, roofSlopeCurr;

  roofSlope = $( ".calculator__section_roof-slope__slider-box .slider" ).slider({
    value: 0,
    min: 0,
    max: 90,
    step: 5,
    slide: function( event, ui ) {
      $(".calculator__section_roof-slope__result-num span").html(ui.value);
      $(".calculator__section_roof-slope__bg-box").attr('data-pos', ui.value);
    }
  });

  // $('.calculator__section_roof-slope__slider-box .num-plus').on('click', function(){
  //   roofSlopeCurr = $( ".calculator__section_roof-slope__slider-box .slider" ).slider("value");
  //   roofSlope.slider("value", roofSlopeCurr + 5);
  //   console.log(roofSlopeCurr + 1);
  // });
  // $('.calculator__section_roof-slope__slider-box .num-minus').on('click', function(){
  //   roofSlopeCurr = $( ".calculator__section_roof-slope__slider-box .slider" ).slider("value");
  //   roofSlope.slider("value", roofSlopeCurr - 5);
  //   console.log(roofSlopeCurr - 1);
  // });

});