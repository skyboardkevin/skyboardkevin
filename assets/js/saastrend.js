(function($) {
    'use strict';


    /**
     * SaasTrend.
     * @constructor
     * @property {string}  version      - Build Version.
     * @property {string}  author       - Author.
     * @property {object}  $body        - Cache Body.
     * @property {string}  gmapApiKey   - Google Map API Key.
     */
    var SaasTrend = function() {
        this.version = "1.5";
        this.author = "pixiefy";
        this.$body = $('body');
        this.defaults = {
            gmapApiKey: null,
            appearAnimation: true,
            singlePageScroll: true,
            mailchimpUrl: '',
        }
    }

    /** 
     * SaasTrend.
     * @function config
     * @description Initialize Pages Loader
     */
    SaasTrend.prototype.config = function(options) {

        // Save configs
        $.extend(true, this.defaults, options);

        this.initGoogleMap();
    }


    /** 
     * SaasTrend.
     * @function initLoader
     * @description Initialize Pages Loader
     */
    SaasTrend.prototype.initLoader = function() {
        
        $(window).on('load', function() {
            
            // add class to body
            $.SaasTrend.bodyClassInit();

            // group of functions
            $.SaasTrend.funcInit();

            // destroy sticky_in_parent
            $.SaasTrend.destroyStick();
            
        });
    }
    
    /** 
     * SaasTrend.
     * @function destroyStick
     * @description Initialize Pages Loader
     */
    SaasTrend.prototype.destroyStick = function() {
        
        if( $(window).width() < 992 ) {
            $("[data-sticky_column]").trigger("sticky_kit:detach");
        }
    }


    /** 
     * SaasTrend.
     * @function initResize
     * @description Initialize Pages Loader
     */
    SaasTrend.prototype.initResize = function() {
        $(window).on('resize', function() {
            
            // group of functions
            $.SaasTrend.funcInit();

            // destroy sticky_in_parent
            $.SaasTrend.destroyStick();
            
        });
    }


    /** 
     * SaasTrend.
     * @function initResize
     * @description Initialize Pages Loader
     */
    SaasTrend.prototype.initReady = function() {
        $(document).ready(function() {
            
            // group of functions
            $.SaasTrend.initWow();
            $.SaasTrend.initMenuScroll();
            $.SaasTrend.initDocs();

            // destroy sticky_in_parent
            $.SaasTrend.destroyStick();

            // hover parallax
            $.SaasTrend.initMouseHoverParallax();

            // Dynamic Contact Form init
            $.SaasTrend.initCForm();

            // Dynamic Ajax Mailchimp subscription form
            $.SaasTrend.initAjaxChimp();

            
        });
    }

    /** 
     * SaasTrend.
     * @function funcInit
     * @description function used window load, window resize and document ready
     */
    SaasTrend.prototype.funcInit = function() {
        
        this.stEqualHeight('.st_accordion_item', '.st_contact_waraper');
        this.setBannerMargin();
        this.setBannerThumbnail();
    }

    /** 
     * SaasTrend.
     * @function bodyClassInit
     * @description Add Body Class
     */
    SaasTrend.prototype.bodyClassInit = function() {
        
        var url = window.location.href,
            url = url.replace(/\#.*/,''),
            url = url.replace(/\?.*/,'');

        this.$body.addClass('st_loaded');
        if(url.length && url.match("\.html$")) {
            var filename = url.match(/([^\/]+)(?=\.\w+$)/)[0];
            this.$body.addClass('st-'+filename+'-template');
        }
    }

    /** 
     * SaasTrend.
     * @function setBannerThumbnail
     * @description Set banner position v12
     */
    SaasTrend.prototype.setBannerThumbnail = function() {
        
        if ( $('.st-banner-single-img-02').length && !$('.st-banner-single-img-02').is('.st-banner-base') )
            return false;

        var $get_height = $('.st-banner-single-img-02').outerHeight();
        $('.st_banner_single_img_01').css('bottom', -($get_height / 2));
    }

    /** 
     * SaasTrend.
     * @function setBannerMargin
     * @description Set dynamic banner margin top
     */
    SaasTrend.prototype.setBannerMargin = function() {
        
        if ( $('.st_banner_area').length && !$('.st_banner_area').hasClass('margin-header') )
            return false;

        var $get_height = $('#st-header-section').outerHeight();
        $('.st_banner_area.margin-header').css('margin-top', $get_height);
    }


    /** 
     * SaasTrend.
     * @function stEqualHeight
     * @description Set dynamically equal height
     */
    SaasTrend.prototype.stEqualHeight = function($item, $target) {
        
        if ( $($item).length === 0 || $($target).length === 0 ) 
            return false;

        var $storeHeight = $($item).outerHeight();
        $($target).css('height', $storeHeight);
    }

    /** 
     * SaasTrend.
     * @function initWow
     * @description init wow.js
     */
    SaasTrend.prototype.initWow = function() {

        if ( $('.wow').length === 0 || typeof WOW === "undefined" || !this.defaults.appearAnimation ) 
            return false;
        
        var wow = new WOW(
            {
                boxClass:     'wow',      // default
                animateClass: 'animated', // default
                offset:       0,          // default
                mobile:       false,      // default
                live:         true,        // default
                complete: function(target) {
                    if (target.target.getAttribute('data-speed') !== null) {
                        target.target.classList.add('st-move-init');
                    }
                }
            }
        )
        wow.init();
    }

    /** 
     * SaasTrend.
     * @function initCountDown
     * @description Set count down timer
     */
    SaasTrend.prototype.initCountDown = function() {

        if ( $('.st_countdown').length === 0 ) 
            return false;

        var wrapper = $('.st_countdown'),
            deadlineDate = new Date('December 31, 2018 23:59:59').getTime(),
            countdownDays = wrapper.find('.countdown-days').find('.number'),
            countdownHours = wrapper.find('.countdown-hours').find('.number'),
            countdownMinutes = wrapper.find('.countdown-minutes').find('.number'),
            countdownSeconds = wrapper.find('.countdown-seconds').find('.number');
      
        // Update the count down every 1 second (1000 milliseconds)
        setInterval(() => {    
          // Get current date and time
          var currentDate = new Date().getTime();
      
          // Calculate the distance between current date and time and the deadline date and time
          var distance = deadlineDate - currentDate;
      
          // Calculations the data for remaining days, hours, minutes and seconds
          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
          // Insert the result data into individual countdown boxes
          countdownDays.text(days);
          countdownHours.text(hours);
          countdownMinutes.text(minutes);
          countdownSeconds.text(seconds);

        }, 1000);

    }


    /** 
     * SaasTrend.
     * @function initMap
     * @description Set dynamic banner margin top
     */
    SaasTrend.prototype.initMap = function() {

        if ( $('#st_google_map').length === 0 || window.google === "undefined" ) 
            return false;
        
        var mapElement = document.getElementById('st_google_map');

        var mapOptions = {
            zoom: 13,
            scrollwheel: false,
            navigationControl: false,
            mapTypeControl: true,
            scaleControl: false,
            draggable: true,
            disableDefaultUI: true,
        
            center: new google.maps.LatLng(mapElement.getAttribute('data-latitude'), mapElement.getAttribute('data-longitude')),
            styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
            };
        
        var map = new google.maps.Map(mapElement, mapOptions);

        var CustomMarker = function (latlng, map, args) {
            this.latlng = latlng;	
            this.args = args;	
            this.setMap(map);	
        }

        CustomMarker.prototype = new google.maps.OverlayView();

        CustomMarker.prototype.draw = function() {
            
            var self = this;
            
            var div = this.div;
            
            if (!div) {
            
                div = this.div = document.createElement('div');
                
                div.className = 'st_marker';
                
                div.style.position = 'absolute';
                div.style.cursor = 'pointer';
                div.style.width = '25px';
                div.style.height = '25px';
                
                if (typeof(self.args.marker_id) !== 'undefined') {
                    div.dataset.marker_id = self.args.marker_id;
                }
                
                var panes = this.getPanes();
                panes.overlayImage.appendChild(div);
            }
            
            var point = this.getProjection().fromLatLngToDivPixel(this.latlng);
            
            if (point) {
                div.style.left = (point.x - 10) + 'px';
                div.style.top = (point.y - 20) + 'px';
            }
        };

        CustomMarker.prototype.remove = function() {
            if (this.div) {
                this.div.parentNode.removeChild(this.div);
                this.div = null;
            }	
        };

        CustomMarker.prototype.getPosition = function() {
            return this.latlng;	
        };

        var overlay = new CustomMarker(
            mapOptions.center, 
            map,
            {
                marker_id: 'st_map'
            }
        );
        
    }

    /** 
     * SaasTrend.
     * @function initGoogleMap
     * @description add google map script dynamically
     */
    SaasTrend.prototype.initGoogleMap = function() {

        if ( $('#st_google_map').length && !window.google ) {
            $.getScript("https://maps.googleapis.com/maps/api/js?key="+ this.defaults.gmapApiKey +"&callback=SaasTrend.initMap");
        }
        
    }

    /** 
     * SaasTrend.
     * @function initResponsiveMenu
     * @description init meanmenu for responsive menu
     */
    SaasTrend.prototype.initResponsiveMenu = function(context) {

        $.fn.meanmenu && $(".st_menu", context).meanmenu({
            meanMenuContainer: '.st_nav_wrapper',
            meanScreenWidth: "991"
        });
        
    }

    /** 
     * SaasTrend.
     * @function initMenuScroll
     * @description init click smoothscroll on menu item
     */
    SaasTrend.prototype.initMenuScroll = function() {

        if( !this.defaults.singlePageScroll )
            return false;
            
        var $header_menu_link = $('.st_menu ul li a, .mean-nav li a');
        $header_menu_link.on('click', function(e){
            var url = $(this).attr("href");
            var href = url.substring(url.indexOf('#')+1),
                href = '#'+href;
            if (/#/.test(this.href)) {
                if ( $(href).length ) {
                var offsetTop = href === "#" ? 0 : $(href).offset().top;
                $('body , html').stop().animate({
                    scrollTop: offsetTop - 64,
                }, 500);
                e.preventDefault();
                return false;
                }
            }
        });
    }

    /** 
     * SaasTrend.
     * @function initMaginificVideo
     * @description init magnific popup video
     */
    SaasTrend.prototype.initMaginificVideo = function(context) {

        $.fn.magnificPopup && $(".st_popup_youtube", context).magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade'
        });
    }


    /** 
     * SaasTrend.
     * @function initMouseHoverParallax
     * @description init magnific popup video
     */
    SaasTrend.prototype.initMouseHoverParallax = function() {
        
        var parallax_init = $('.st-hover-parallax-init');
        if( parallax_init.length === 0 || typeof TweenMax === "undefined" )
            return false;

        parallax_init.mousemove(function(e){
		
            var wx = parallax_init.width();
            var wy = parallax_init.height();
            
            var x = e.pageX - this.offsetLeft;
            var y = e.pageY - this.offsetTop;
            
            var newx = x - wx/2;
            var newy = y - wy/2;
            
            parallax_init.find('.st-move-init').each(function(){
                var speed = $(this).attr('data-speed');
                if($(this).attr('data-revert')) speed *= -1;
                TweenMax.to($(this), 1, {x: (1 - newx*speed), y: (1 - newy*speed)});
            });
            
        });
    }

    /** 
     * SaasTrend.
     * @function initAjaxChimp
     * @description Initialize Ajax mailchimp plugin
     */
    SaasTrend.prototype.initAjaxChimp = function() {

        if( $("#st-subscription-form").length === 0 || this.defaults.mailchimpUrl.length === 0 )
            return;

        var amform = $("#st-subscription-form");
        amform.ajaxChimp({
            url: this.defaults.mailchimpUrl
        });
        
    }

    SaasTrend.prototype.validateEmail = function(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    SaasTrend.prototype.formError = function(element) {
        element.find('.st-form-loader').slideUp( "medium", function() {
            $(this).remove();
        });
        element.append('<div class="st-form-info-error"><i class="fas fa-exclamation-circle"></i> Sorry, error occured found, try again.</div>').slideDown("medium");
    }

    /** 
     * SaasTrend.
     * @function initCForm
     * @description Init Contact Form
     */
    SaasTrend.prototype.initCForm = function() {
        
        if( $('.st-contact-form-init').length === 0 )
            return false;
            
        $( ".st-contact-form-init" ).on( "submit", function( e ) {

            //Stop form submission & check the validation
            e.preventDefault();
            
            // Variable declaration
            var error       = false,
                $self       = $(this),
                $info       = $self.next('.st-form-info'),
                email       = $self.find('input[name="email"]');
            
            // Form field validation
            if(email.val().length <= 6 || $.SaasTrend.validateEmail( email.val() ) == false || email.val().indexOf('@') == '-1'){
                var error = true;
                if( email.closest('.st_user_login_wrap').length !== 0 ) {
                    email.closest('.st_input_item').addClass('filed_error');
                } else {
                    email.addClass('filed_error');
                }
            }else{
                if( email.closest('.st_user_login_wrap').length !== 0 ) {
                    email.closest('.st_input_item').removeClass('filed_error');
                } else {
                    email.removeClass('filed_error');
                }
            }
            $info.html('');

            // If there is no validation error, next to process the mail function
            if(error == false){

                $info.append('<div class="st-form-loader"></div>').slideDown();

                $.ajax({
                url: $(this).attr('action'),
                data: $(this).serialize(),
                type: 'POST',
                beforeSend: function(){
                    if( !$info.is(":visible") ) {
                        $info.append('<div class="st-form-loader"></div>').slideDown();
                    }
                },
                success: function( response ) {
                    if ( response ) {
                        var data = JSON.parse(response);
                        if( data.email_success !== 'undefined' ) {
                            $self.find('input:not([type="submit"]), textarea').val('');
                            $self.find('.filed_error').removeClass('filed_error');
                            $self.find('.filed_ok').removeClass('filed_ok');
                            $info.find('.st-form-loader').slideUp( "medium", function() {
                                $(this).remove();
                                $info.append('<div class="st-form-info-success"><i class="fas fa-check-circle"></i> Your message has been sent successfully.</div>').slideDown("medium");
                            });
                        } else {
                            $.SaasTrend.formError( $info );
                            console.log( "Error" );
                        }
                    } else {
                        $.SaasTrend.formError( $info );
                        console.log( "Error" );
                    }
                },
                error: function() {
                    $.SaasTrend.formError( $info );
                }
                });
            
            }
        });
    }

    /** 
     * SaasTrend.
     * @function initCounter
     * @description init counter on scroll
     */
    SaasTrend.prototype.initCounter = function() {

        var st_counter = $('#st_counter');
        if(st_counter.length){
            var a = 0;
            $(window).scroll(function() {

                var oTop = $(st_counter).offset().top - window.innerHeight;
                if (a == 0 && $(window).scrollTop() > oTop) {
                $('.counter-result').each(function() {
                    var $this = $(this),
                        countTo = $this.attr('data-percentage');
                    $({
                    countNum: $this.text()
                    }).animate({
                        countNum: countTo
                    },
                    {
                        duration: 4000,
                        easing: 'swing',
                        step: function() {
                        $this.text(Math.floor(this.countNum));
                        },
                        complete: function() {
                        $this.text(this.countNum);
                        }
                    });
                });
                a = 1;
                }

            });
        }
    }

    /** 
     * SaasTrend.
     * @function initGeneral
     * @description general event and functionality js initial
     */
    SaasTrend.prototype.initGeneral = function(context) {

        $('#st_accordion_waraper').on('show.bs.collapse', function(e) {
            var closest = e.target.closest('.card');
            $(closest).addClass('card__active').siblings().removeClass('card__active');
        });

        $(document).on('change', '.st-pricing-switcher input[type="radio"]', function(e){
            e.preventDefault();
            
            var $self = $(this),
                $val  = $self.val(),
                $container = $('.st-pricing-wrapper');
            
            if ( !$val.length ) { return false; }
            
            $container.find('li[data-type="'+$val+'"]').addClass('is-selected');
            $container.addClass('is-switched').eq(0).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
                $container.find('li[data-type]').each(function(){
                    var $current = $(this),
                        $type = $current.attr('data-type');
                    if ( $type == $val ) {
                        $current.addClass('is-visible').removeClass('is-hidden is-selected');
                    } else {
                        $current.removeClass('is-visible is-selected').addClass('is-hidden');
                    }
                });
                $container.removeClass('is-switched');
                if($self.find('.st-pricing-list').hasClass('st-bounce-invert')) $container.toggleClass('reverse-animation');
            });
        });

        $(".incr-btn").on("click", function (e) {
            var $button = $(this);
            var oldValue = $button.parent().find('.quantity').val();
            $button.parent().find('.incr-btn[data-action="decrease"]').removeClass('inactive');
            if ($button.data('action') == "increase") {
                var newVal = parseFloat(oldValue) + 1;
            } else {
                // Don't allow decrementing below 1
                if (oldValue > 1) {
                    var newVal = parseFloat(oldValue) - 1;
                } else {
                    newVal = 1;
                    $button.addClass('inactive');
                }
            }
            $button.parent().find('.quantity').val(newVal);
            e.preventDefault();
        });
    }

    /** 
     * SaasTrend.
     * @function initStickyMenu
     * @description general event and functionality js initial
     */
    SaasTrend.prototype.initStickyMenu = function() {

        var stickyHeader = $('#stick-menu');
        if( stickyHeader.length === 0  )
            return;

        $(window).scroll(function(){
        var $nav = $('.st_header_area');
        if ( $nav.length && stickyHeader.length ) {
            var stickyHeaderTop = stickyHeader.offset().top;
            if( $(window).scrollTop() > stickyHeaderTop ) {
                $('.st_header_area').addClass('sticky-menu');
            } else {
                $('.st_header_area').removeClass('sticky-menu');
            }
        }
        });
    }

    /** 
     * SaasTrend.
     * @function initDocs
     * @description init docs page functionality
     */
    SaasTrend.prototype.initDocs = function(context) {

        if( $('.st_doc_menu').length === 0 )
            return false;

        $("[data-sticky_column]").stick_in_parent({
            parent: "[data-sticky_parent]",
            offset_top: 80
        });

        $('.st_docs_thumbs').magnificPopup({
            type: 'image'
        });

        $(document).on('click', '.st_doc_menu a', function(e){
            e.preventDefault();

            var $this = $(this);

            if ( $this.find('~ ul') ) {
                if( $this.find('~ ul').is(':visible') ) {
                    $this.find('~ ul').slideUp();
                } else {
                    $this.find('~ ul').slideDown();
                }
            }

            var url = $this.attr("href");
            var href = url.substring(url.indexOf('#')+1),
                href = '#'+href;
            if (/#/.test(this.href)) {
                if ( $(href).length ) {
                var offsetTop = href === "#" ? 0 : $(href).offset().top;
                $('body , html').stop().animate({
                    scrollTop: offsetTop - 64,
                }, 500);
                e.preventDefault();
                return false;
                }
            }
            
        })
        
    }

    

    /** 
     * SaasTrend.
     * @function init
     * @description initial
     */
    SaasTrend.prototype.init = function() {

        this.funcInit();
        this.initLoader();
        this.initResize();        
        this.initResponsiveMenu();
        this.initMaginificVideo();
        this.initCounter();
        this.initGeneral();
        this.initStickyMenu();
        this.initCountDown();
        this.initReady();

    }

    $.SaasTrend = new SaasTrend();
    $.SaasTrend.Constructor = SaasTrend;
    window.SaasTrend = $.SaasTrend;


})(window.jQuery);



(function($) {
    'use strict';
    $.SaasTrend.init();
})(window.jQuery);





