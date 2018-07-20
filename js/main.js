$(document).ready(function(){
  
  $('.contact__form__heard').find('li').on('click', function(){
    $('.contact__form__heard li').removeClass('active');
    $(this).addClass('active');
    $('#hidden_heard').val($(this).data('heard'));
  });

});