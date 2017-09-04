$(document).ready(function() {
  $('.js--scroll-to-about').click(function () {
     $('html, body').animate({scrollTop: $('.js--section-about').offset().top}, 1000);
  });

  $('.js--scroll-to-contact').click(function () {
     $('html, body').animate({scrollTop: $('.js--section-contact').offset().top}, 1000);
  });
});
