
  (function ($) {
  
  "use strict";

    // NAVBAR
    $('.navbar-nav .nav-link').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();

        if (scroll >= 500) {
            $(".navbar").addClass("sticky-nav");
        } else {
            $(".navbar").removeClass("sticky-nav");
        }
    });

    // // BACKSTRETCH SLIDESHOW
    // $('#about').backstretch([
    //   "images/slide/1.jpg", 
    //   "images/slide/2.jpg",
    //   "images/slide/3.jpg",
    //   "images/slide/4.jpg",
      
    // ],  {duration: 2000});

    // // BACKSTRETCH SLIDESHOW
    // $('#about-gokarna').backstretch([
    //   "images/slide/4.jpg", 
    //   "images/slide/1.jpg",
    //   "images/slide/2.jpg",
    //   "images/slide/3.jpg",
      
    // ],  {duration: 2000});


  })(window.jQuery);


