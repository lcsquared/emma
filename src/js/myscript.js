(function($) {

  "use strict";

  // var topoffset = $('nav#mainNav').outerHeight(true);
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

  // Automatically generate carousel indicators
  for (var i=0; i < slideqty; i++) {
    var insertText = '<li data-target="#featured" data-slide-to="' + i + '"></li>';
    $('#featured ol').append(insertText);
  }

  $('.carousel').carousel({
    interval: 2000
  });

  // Change testimonial background when tap is clicked
  $(document).on('click', '#testimonial #tab #tab1 img', function() {
    $("#testimonial #show-testimonial").removeClass("tab2-bg").removeClass("tab3-bg").addClass("tab1-bg");
  });

  $(document).on('click', '#testimonial #tab #tab2 img', function() {
    $("#testimonial #show-testimonial").removeClass("tab1-bg").removeClass("tab3-bg").addClass("tab2-bg");
  });

  $(document).on('click', '#testimonial #tab #tab3 img', function() {
    $("#testimonial #show-testimonial").removeClass("tab1-bg").removeClass("tab2-bg").addClass("tab3-bg");
  });

  $(".alert").alert();
})(jQuery);
