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

//if (window.innerWidth < 766) {
//  $('.menu__link').click(function() {
//    $('.menu__list').slideToggle();
//    $('.menu').removeClass('menu--opened');
//  })
//}

