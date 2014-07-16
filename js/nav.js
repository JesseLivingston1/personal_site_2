$('.main').click(function() {
  $(this).toggleClass('mobile');
  $('.side-nav').toggleClass('menu-in');
  return $('.side').toggleClass('shift');
});