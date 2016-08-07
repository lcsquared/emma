$(function() {

  "use strict";

  var topoffset = 100; // variable for menu height
  var slideqty = $('#featured .item').length;
  var wheight = $(window).height(); // get the height of the window

  $('.fullheight').css('height', wheight); // set to window tallness

  // replace IMG inside carousels with a background image
  $('#featured .item img').each(function() {
    var imgSrc = $(this).attr('src');
    $(this).parent().css({'background-image': 'url('+imgSrc+')'});
    $(this).remove();
  });

  // adjust height of .fullheight elements on window resize
  $(window).resize(function() {
    wheight = $(window).height(); // get the height of the window
    $('.fullheight').css('height',wheight); // set to window tallness
  });

  // Activate Scrollspy
  $('body').scrollspy({
    target: 'nav#mainNav',
    offset: topoffset
  });

  // Automatically generate carousel indicators
  for (var i=0; i < slideqty; i++) {
    var insertText = '<li data-target="#featured" data-slide-to="' + i + '"></li>';
    $('#featured ol').append(insertText);
  }

  $('.carousel').carousel({
    interval: 2000
  });

});
