//Mobile menu
$('.menu__btn').click(function() {
  $('.menu').addClass('menu--opened');
  $('.header__menu').addClass('header__menu--show');
  $('.header .social').addClass('social--menu');
});

$('.header__menu').click(function() {
  $(this).removeClass('header__menu--show');
  $('.menu').removeClass('menu--opened');
  $('.header .social').removeClass('social--menu');
})

//Header scroll
$(window).scroll(function(){
  if ((window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop) >= 100) {
    $('.header').addClass('header--scroll');
  } else {
    $('.header').removeClass('header--scroll');
  };
});