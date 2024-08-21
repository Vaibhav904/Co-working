$(function() {
    // Owl Carousel
    var owl = $(".owl-car1");
    owl.owlCarousel({
      items: 3,
      margin: 10,
      loop: true,
      nav: false,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav: false
          },
          517:{
              items:1,
              nav:false
          },
          1000:{
              items:3,
              nav: false,
              loop:true
          }
      }
    });
  });
   