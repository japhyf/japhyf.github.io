(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 71)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 80
  });

  $(function() {

    var isMobile;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
     isMobile = true;
  
     // Mobile height fix
     $('.height-fix').each(function(){
      var h = $(this).height();
      $(this).height(h)
     })
    }
  
    // RESIZE RESETS
    $(window).resize(function(){
      posFilterBar($('.filter').first());
    });
  
    // Sticky Nav on Mobile
    if (isMobile) {
      $('nav').addClass('fixed');
    } else {
      $('nav').addClass('desk');
    }
  
  
    // NAV POSITION
    var navPos = $('nav').position().top;
    var lastPos = 0;
    var lockTimer
  });

  // Floating label headings for the contact form
  $(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
      $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
      $(this).removeClass("floating-label-form-group-with-focus");
    });
  });
  $(function() {
  $( "#landing-button" ).hover(function() {
    $( "#landing-arrow" ).addClass("rotate");
    $( "#landing-button" ).addClass("white-fade");
    $( "#landing-button" ).addClass("white-text");
    $( "#landing-arrow" ).removeClass("unrotate");
    $( "#landing-button" ).removeClass("white-unfade");
  }, function() {
    $( "#landing-arrow" ).addClass("unrotate");
    $( "#landing-button" ).addClass("white-unfade");
  }
  
  );
});

})(jQuery); // End of use strict
