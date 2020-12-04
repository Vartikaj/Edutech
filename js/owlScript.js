$(document).ready(function(){
$('.carouselSection').owlCarousel({
            autoplay: true,
            lazyLoad: true,
            loop: true,
            margin: 20,
            dots: true,
               /*
              animateOut: 'fadeOut',
              animateIn: 'fadeIn',
              */
            responsiveClass: true,
            autoHeight: true,
            autoplayTimeout: 7000,
            smartSpeed: 800,
            nav: false,
            touchDrag:true,
                    //pullDrag:false,
                    freeDrag:true,
            
            responsiveClass:true,            
            responsive:{
                0:{
                    items:1,
                    
                },
                600:{
                    items:1,
                },
                1000:{
                    items:1,                    
                    touchDrag:true,
                    //pullDrag:false,
                    freeDrag:true
                }                
            }
        });
});