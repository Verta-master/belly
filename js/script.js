//Mobile menu
$('.menu__btn').click(function() {
  $(this).toggleClass('menu__btn--close');
  $('.menu').toggleClass('menu--opened');
})

//if (window.innerWidth < 766) {
//  $('.menu__link').click(function() {
//    $('.menu__list').slideToggle();
//    $('.menu').removeClass('menu--opened');
//  })
//}

