(function($) {

  "use strict";

  // var topoffset = $('nav#mainNav').outerHeight(true);
  var slideqty = $('#featured .item').length;
  var wheight = $(window).height(); // get the height of the window

  var wheight;

  $(document).ready(function() {
    wheight = $(window).height();
    $('.fullheight').css('height', wheight);

    $('#featured .item img').each(function() {
      var imgSrc = $(this).attr('src');
      $(this).parent().css({'background-image': 'url('+imgSrc+')'});
      $(this).remove();
    });

    // Add an inbody class to nav when scrollspy event fires
    $('.navbar-fixed-top').on('activate.bs.scrollspy', function() {
      var hash = $(this).find('li.active a').attr('href');
      if(hash !== '#featured') {
        $('header nav').addClass('inbody');
      } else {
        $('header nav').removeClass('inbody');
      }
    });

    // Use smooth scrolling when clicking on navigation
    $('.navbar a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') ===
        this.pathname.replace(/^\//,'') &&
        location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top-topoffset+2
          }, 500);
          return false;
        } // target.length
      } // click function
    }); // smooth scrollin


    for (var i=0; i < slideqty; i++) {
      var insertText = '<li data-target="#featured" data-slide-to="' + i + '"></li>';
      $('#featured ol').append(insertText);
    }

    $('.carousel').carousel({
      interval: 2000
    });

    
  });


  $('.fullheight').css('height', wheight); // set to window tallness
  // $('#testimonial #show-testimonial .toggler').css('margin-left', tabWidth);


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

  // $(document).on('click', '#testimonial #show-testimonial #quote', function() {
  //   tabWidth = $('#testimonial #show-testimonial #quote').outerWidth(true);
  //   $('#testimonial #show-testimonial .toggler').css('margin-left', tabWidth-1);
  // });

  var tabWidth;

  $(document).scroll(function() {
    tabWidth = $('#testimonial #show-testimonial #quote').outerWidth(true);
    $('#testimonial #show-testimonial .toggler').css('margin-left', tabWidth-1);
  });

  $(window).resize(function() {
    tabWidth = $('#testimonial #show-testimonial #quote').outerWidth(true);
    $('#testimonial #show-testimonial .toggler').css('margin-left', tabWidth-1);
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
