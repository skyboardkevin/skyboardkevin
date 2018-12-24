(function($) {
"use strict";

/*------------------------------------------------------------------
[Table of contents]

1. CUSTOM PRE DEFINE FUNCTION

2. ST TESTIMONIAL SLIDER JS
3. ST V2 TESTIMONIAL SLIDER JS
4. ST V3 TESTIMONIAL SLIDER JS
5.ST V4 TESTIMONIAL SLIDER JS
6.ST CLIENT SLIDER JS
7.ST SCREENSHOT SLIDER JS
8.ST SCREENSHOT V2 SLIDER JS
9.ST SCREENSHOT V3 SLIDER JS
10.ST SCREENSHOT FRAME SLIDER JS
11. ST SHOP SYNC SLIDER JS
12. ST BANNER SLIDER
-------------------------------------------------------------------*/




/*--------------------------------------------------------------
1. CUSTOM PRE DEFINE FUNCTION
------------------------------------------------------------*/
/* is_exist() - to check element existing */
jQuery.fn.is_exist = function(){
    return this.length;
}


$(function(){


/*--------------------------------------------------------------
2. ST TESTIMOINAL SLIDER
--------------------------------------------------------------*/
var st_testimonial_slider = $('.st_testimonial_slider');
    if (st_testimonial_slider.is_exist()) {
        st_testimonial_slider.owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items:1,
        navText: ["<i class=\"fas fa-arrow-left\"></i>",
        "<i class=\"fas fa-arrow-right\"</i>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            768:{
                items:1 
            },
            1000:{
                items:1
            }
        }
    });
}


/*--------------------------------------------------------------
3. ST V2 TESTIMONIAL SLIDER JS
--------------------------------------------------------------*/
var st_v2_testimonial_slider = $('.st_v2_testimonial_slider');
    if (st_v2_testimonial_slider.is_exist()){
    st_v2_testimonial_slider.owlCarousel({
        loop:true,
        margin:5,
        dots:true,
        items:2,
        navigation: false,
        pagination: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            768:{
                items:1 
            },
            1000:{
                items:2
            }
        }
    });

}

/*--------------------------------------------------------------
4. ST V3 TESTIMONIAL SLIDER JS
--------------------------------------------------------------*/
var st_testimonial_slider_v3 = $('.st_testimonial_slider_v3');
    if (st_testimonial_slider_v3.is_exist()) {
        st_testimonial_slider_v3.owlCarousel({
        loop:true,
        margin:30,
        dots:true,
        items:1,
        autoHeight: true,
        autoplay:true,
        autoplayTimeout:5000,
        navigation: false,
        pagination: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            768:{
                items:1 
            },
            1000:{
                items:1
            }
        }
    });

}

/*--------------------------------------------------------------
5. ST V4 TESTIMONIAL SLIDER JS
--------------------------------------------------------------*/
var st_v4_testimonial_slider = $('.st_v4_testimonial_slider');
    if (st_v4_testimonial_slider.is_exist()) {
        st_v4_testimonial_slider.owlCarousel({
        // center: true,
        loop:true,
        margin:10,
        nav:true,
        autoHeight: true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        dots:false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items:1,
        navText: ["<img src=\"assets/images/v9/prev.png\"/>",
        "<img src=\"assets/images/v9/next.png\" />"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            768:{
                items:1 
            },
            1000:{
                items:1
            }
        }
    });

}

/*--------------------------------------------------------------
6. ST CLIENT SLIDER JS
--------------------------------------------------------------*/
var st_client_slider = $('.st_client_slider');
    if (st_client_slider.is_exist()) {
        st_client_slider.owlCarousel({
        // center: true,
        loop:true,
        margin:30,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:5000,
        items:4,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:2
            },
            768:{
                items:3 
            },
            1000:{
                items:4
            }
        }
    });

}

/*--------------------------------------------------------------
7. ST SCREENSHOT SLIDER JS
------------------------------------------------------------*/
var st_screenshot = $('#st_screenshot');
    if(st_screenshot.is_exist()) {
    var st_screenshot = new Swiper('#st_screenshot', {
        effect: 'coverflow',
        loop: true,
        slidesPerView: 1.2,
        spaceBetween: 0,
        centeredSlides: true,
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        autoplay: {
        delay: 3000,
        },
        coverflowEffect: {
        rotate: 0, // Slide rotate in degrees
        stretch: 0, // Stretch space between slides (in px)
        depth: 0, // Depth offset in px (slides translate in Z axis)
        modifier: 1, // Effect multipler
        slideShadows : true, // Enables slides shadows
        },
        breakpoints: {
        991: {
            slidesPerView: 1,
        },
            767: {
            slidesPerView: 1,
        }
        }
    });

}

/*--------------------------------------------------------------
8. ST SCREENSHOT V2 SLIDER JS
------------------------------------------------------------*/
var st_screenshot_v2 = $('#st_screenshot_v2');
    if(st_screenshot_v2.is_exist()) {
    var st_screenshot_v2 = new Swiper('#st_screenshot_v2', {
        effect: 'coverflow',
        loop: true,
        slidesPerView: 1.03,
        spaceBetween: 0,
        centeredSlides: true,
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        autoplay: {
        delay: 3000,
        },
        coverflowEffect: {
        rotate: 0, // Slide rotate in degrees
        stretch: 0, // Stretch space between slides (in px)
        depth: 0, // Depth offset in px (slides translate in Z axis)
        modifier: 1, // Effect multipler
        slideShadows : true, // Enables slides shadows
        },
        breakpoints: {
        991: {
            slidesPerView: 1,
        },
            767: {
            slidesPerView: 1,
        }
        }
    });

}

/*--------------------------------------------------------------
9. ST SCREENSHOT V3 SLIDER JS
------------------------------------------------------------*/
var st_banner_screenshot = $('#st_banner_screenshot');
    if(st_banner_screenshot.is_exist()) {
    var st_banner_screenshot = new Swiper('#st_banner_screenshot', {
        effect: 'coverflow',
        loop: true,
        slidesPerView: 1.03,
        spaceBetween: 0,
        centeredSlides: true,
            pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
        delay: 3000,
        },
        coverflowEffect: {
        rotate: 0, // Slide rotate in degrees
        stretch: 0, // Stretch space between slides (in px)
        depth: 0, // Depth offset in px (slides translate in Z axis)
        modifier: 1, // Effect multipler
        slideShadows : true, // Enables slides shadows
        },
        breakpoints: {
        991: {
            slidesPerView: 1,
        },
            767: {
            slidesPerView: 1,
        }
        }
    });

}


/*--------------------------------------------------------------
10. ST SCREENSHOT IFRAME SLIDER JS
------------------------------------------------------------*/
var st_screenshot_center_frame = $('#st_screenshot_center_frame');
    if(st_screenshot_center_frame.is_exist()) {
    var st_screenshot_frame_slider = new Swiper('#st_screenshot_center_frame', {
    effect: 'coverflow',
    loop: true,
    centeredSlides: true,
    slidesPerView: 4,
    slideVisibleClass: 'swiper-slide-visible',
    // initialSlide: 4,
    keyboardControl: true,
    mousewheelControl: true,
    lazyLoading: true,
    preventClicks: false,
    preventClicksPropagation: false,
    lazyLoadingInPrevNext: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
    },
    coverflowEffect: {
        rotate: 0,
        stretch: 80,
        depth: 0,
        modifier: 1,
        slideShadows : true,
    },
    on: {
        slideChange: function () {
            var activeIndex = this.activeIndex;
            var realIndex = this.slides.eq(activeIndex).attr('data-swiper-slide-index');
            $('.swiper-slide').removeClass('swiper-slide-nth-prev-2 swiper-slide-nth-next-2 swiper-slide-nth-next-3 swiper-slide-nth-prev-3');
            $('.swiper-slide[data-swiper-slide-index="'+realIndex+'"]').prev().prev().addClass('swiper-slide-nth-prev-2');
            $('.swiper-slide[data-swiper-slide-index="'+realIndex+'"]').prev().prev().prev().addClass('swiper-slide-nth-prev-3');
            $('.swiper-slide[data-swiper-slide-index="'+realIndex+'"]').next().next().addClass('swiper-slide-nth-next-2');
            $('.swiper-slide[data-swiper-slide-index="'+realIndex+'"]').next().next().next().addClass('swiper-slide-nth-next-3');
        },
    },
    breakpoints: {
        1024: {
        slidesPerView: 3,
        },
        768: {
        slidesPerView: 2,
        },
        640: {
        slidesPerView: 1,
        },
        320: {
        slidesPerView: 1,
        }
    }
    });
}


/*--------------------------------------------------------------
11. ST SHOP SYNC SLIDER JS
------------------------------------------------------------*/
var st_shop_sync = $('#st_shop_slider_1, #st_shop_slider_2');
    if(st_shop_sync.is_exist()){
    var sync1 = $("#st_shop_slider_1");
    var sync2 = $("#st_shop_slider_2");
    var slidesPerPage = 3;
    var syncedSecondary = true;

    sync1.owlCarousel({
    items : 1,
    slideSpeed : 2000,
    nav: false,
    dots: false,
    loop: true,
    responsiveRefreshRate : 200,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    }).on('changed.owl.carousel', syncPosition);

    sync2
    .on('initialized.owl.carousel', function () {
        sync2.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
    items : slidesPerPage,
    dots: false,
    nav: false,
    autoWidth:true,
    margin: 25,
    // center:true,
    loop:false,
    smartSpeed: 200,
    slideSpeed : 500,
    slideBy: slidesPerPage,
    responsiveRefreshRate : 100
    }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
    var count = el.item.count-1;
    var current = Math.round(el.item.index - (el.item.count/2) - .5);
    
    if(current < 0) {
        current = count;
    }
    if(current > count) {
        current = 0;
    }
    
    //end block
    sync2
    .find(".owl-item")
    .removeClass("current")
    .eq(current)
    .addClass("current");

    var onscreen = sync2.find('.owl-item.active').length - 1;
    var start = sync2.find('.owl-item.active').first().index();
    var end = sync2.find('.owl-item.active').last().index();
    
    if (current > end) {
        sync2.data('owl.carousel').to(current, 100, true);
    }
    if (current < start) {
        sync2.data('owl.carousel').to(current - onscreen, 100, true);
    }
    }
    
    function syncPosition2(el) {
    if(syncedSecondary) {
        var number = el.item.index;
        sync1.data('owl.carousel').to(number, 100, true);
    }
    }
    
    sync2.on("click", ".owl-item", function(e){
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });

}


/*--------------------------------------------------------------
12. ST BANNER SLIDER
------------------------------------------------------------*/
var owl = $('.st--hero-slider');

if ( owl.is_exist() ) {
  
    // Carousel initialization
    owl.owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay: false,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        items:1
    });


    // add animate.css class(es) to the elements to be animated
    function setAnimation ( _elem, _InOut ) {
    // Store all animationend event name in a string.
    // cf animate.css documentation
    var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    _elem.each ( function () {
        var $elem = $(this);
        var $animationType = 'animated ' + $elem.data( 'animation-' + _InOut );

        $elem.addClass($animationType).one(animationEndEvent, function () {
        $elem.removeClass($animationType); // remove animate.css Class at the end of the animations
        });
    });
    }

    // Fired before current slide change
    owl.on('change.owl.carousel', function(event) {
        var $currentItem = $('.owl-item', owl).eq(event.item.index);
        var $elemsToanim = $currentItem.find("[data-animation-out]");
        setAnimation ($elemsToanim, 'out');
    });

    // Fired after current slide has been changed
    var round = 0;
    owl.on('changed.owl.carousel', function(event) {

        var $currentItem = $('.owl-item', owl).eq(event.item.index);
        var $elemsToanim = $currentItem.find("[data-animation-in]");
    
        setAnimation ($elemsToanim, 'in');
    })

    owl.on('translated.owl.carousel', function(event) {
    
        if (event.item.index == (event.page.count - 1))  {
        if (round < 1) {
            round++
        } else {
            owl.trigger('stop.owl.autoplay');
                var owlData = owl.data('owl.carousel');
                owlData.settings.autoplay = false; //don't know if both are necessary
                owlData.options.autoplay = false;
                owl.trigger('refresh.owl.carousel');
            }
        }
    });

}


}); /*End document ready*/


})(jQuery);






