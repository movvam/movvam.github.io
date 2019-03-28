function offsetAnchor() {
    if (location.hash.length !== 0) {
      window.scrollTo(window.scrollX, window.scrollY - 12);
    }
  }
  
  (function($) {
      "use strict"; //start of use strict
      
      //smooth scrolling using jQuery easing plugin
      $('a[href*="#"]:not([href="#"])').click(function(){
          
          window.setTimeout(function() {
              offsetAnchor();
          }, 0);
  
      });
      
      //active scrollspy to add active calls to navbar items on scroll
      $('body').scrollspy({ target: '#mainNav', offest : -48});
  
      //Closes responsive menu when a link is clicked
      $('.navbar-collapse>ul>li>a').click(function() {
          $('.navbar-collapse').collapse('hide');
      });
  
      //Collapse the navbar when page is scrolled
      $(window).scroll(function() {
          if ($("#mainNav").offset().top > 100) {
              $("#mainNav").addClass("navbar-shrink");
          } else {
              $("#mainNav").removeClass("navbar-shrink");
          }
      });
  
  
  
  })(jQuery);
  
  
  window.setTimeout(offsetAnchor, 0);