(function ($) {
  "use strict"; // Start of use strict
  var isMobile = false; //initiate as false

  var windowWidth = $(window).width();
  sizeAbout(windowWidth);
  // device detection
  if (windowWidth < 975) {
    isMobile = true;
  }

  //Size img on about page
  function sizeAbout(windowWidth) {
    if (windowWidth < 1026) {
      $("#image-col").addClass("col-sm-12");
      $("#image-col").removeClass("col-sm-6");

      $("#about-col").addClass("col-sm-12");
      $("#about-col").removeClass("col-sm-6");

      $("#profile-img").removeClass("half-profile-img");
      $("#profile-img").addClass("full-profile-img");
    }
    else {
      $("#image-col").removeClass("col-sm-12");
      $("#image-col").addClass("col-sm-6");

      $("#about-col").removeClass("col-sm-12");
      $("#about-col").addClass("col-sm-6");

      $("#profile-img").addClass("half-profile-img");
      $("#profile-img").removeClass("full-profile-img");
    }
  }

  $( window ).resize(function() {
    windowWidth = $(window).width();
    if(windowWidth < 975){
      isMobile = true;
    }
    else{
      isMobile = false;
    }
    sizeAbout(windowWidth);
  });

    // Landing page button
    $(function() {
      if(windowWidth < 1025){
        $( "#image-col" ).addClass("col-sm-12");
        $( "#image-col" ).removeClass("col-sm-6");
      }
      else{
        $( "#image-col" ).removeClass("col-sm-12");
        $( "#image-col" ).addClass("col-sm-6");
      }
    });

  
  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (!isMobile){
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
    }
    else{
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 250)
          }, 1000);
          return false;
        }
      }
    }
  });

  $('a.js-scroll-trigger-top[href*="#"]:not([href="#"])').click(function() {
    if (!isMobile){
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
    }
    else{
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 1)
          }, 1000);
          return false;
        }
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
  
  // Landing page button
  $(function() {
  $( "#landing-button" ).hover(function() {
    $( "#landing-arrow" ).addClass("rotate");
    $( "#landing-button" ).addClass("white-fade");
    $( "#landing-arrow" ).removeClass("unrotate");
    $( "#landing-button" ).removeClass("white-unfade");
  }, function() {
    $( "#landing-arrow" ).addClass("unrotate");
    $( "#landing-button" ).addClass("white-unfade");
  }
  
  );

});

})(jQuery); // End of use strict
