(function($){
"use strict";

    var WidgetHtSliderHandler = function ($scope, $) {

        var slider_elem = $scope.find('.htslider-slider').eq(0);
        if ( slider_elem.length > 0) {

            var settings = slider_elem.data('settings');
            var arrows = settings['arrows'];
            var dots = settings['dots'];
            var autoplay = settings['autoplay'];
            var autoplay_speed = parseInt(settings['autoplay_speed']) || 3000;
            var animation_speed = parseInt(settings['animation_speed']) || 300;
            var fade = settings['fade'];
            var pause_on_hover = settings['pause_on_hover'];
            var pause_on_dragging = settings['pause_on_dragging'];
            var display_columns = parseInt(settings['product_items']) || 1;
            var scroll_columns = parseInt(settings['scroll_columns']) || 4;
            var tablet_width = parseInt(settings['tablet_width']) || 800;
            var tablet_display_columns = parseInt(settings['tablet_display_columns']) || 1;
            var tablet_scroll_columns = parseInt(settings['tablet_scroll_columns']) || 1;
            var mobile_width = parseInt(settings['mobile_width']) || 480;
            var mobile_display_columns = parseInt(settings['mobile_display_columns']) || 1;
            var mobile_scroll_columns = parseInt(settings['mobile_scroll_columns']) || 1;
            var rtl = $('html').attr('dir') === 'rtl' ? true : false;

            slider_elem.slick({
                arrows: arrows,
                prevArrow: $('<div />').append($scope.find('.slick-prev').clone().show()).html(),
                nextArrow: $('<div />').append($scope.find('.slick-next').clone().show()).html(),
                dots: dots,
                infinite: true,
                autoplay: autoplay,
                autoplaySpeed: autoplay_speed,
                speed: animation_speed,
                fade: false,
                pauseOnHover: pause_on_hover,
                draggable: pause_on_dragging,
                slidesToShow: display_columns,
                slidesToScroll: scroll_columns,
                rtl: rtl,
                responsive: [
                    {
                        breakpoint: tablet_width,
                        settings: {
                            slidesToShow: tablet_display_columns,
                            slidesToScroll: tablet_scroll_columns
                        }
                    },
                    {
                        breakpoint: mobile_width,
                        settings: {
                            slidesToShow: mobile_display_columns,
                            slidesToScroll: mobile_scroll_columns
                        }
                    }
                ]
            });
            // Slider Area Element Animation
            var $sliderArea = slider_elem;
            if ($sliderArea.length) {
                $sliderArea.each(function () {
                    var $this = $(this),
                        $singleSlideElem = $this.find('.slick-slide .elementor-widget-wrap .elementor-element, .slick-slide .e-con-inner .elementor-element, .slick-slide .e-con .elementor-element');
                    function $slideElemAnimation() {
                        $singleSlideElem.each(function () {
                            var $this = $(this),
                                $thisSetting = $this.data('settings') ? $this.data('settings') : '',
                                $animationName = $thisSetting._animation,
                                $animationDelay = $thisSetting._animation_delay;
                            $this.removeClass('animated ' + $animationName).css('display', 'none').addClass('animated')
                            if($this.closest('.slick-slide').hasClass('slick-current') || $this.closest('.slick-slide').hasClass('slick-active')) {
                                $this.removeClass('animated fadeOut').addClass('animated ' + $animationName).css({
                                    'animation-delay': $animationDelay+'s','display':''
                                });
                            }
                        });
                    }
                    //$slideElemAnimation();
                    $this.on('afterChange', function(slick, currentSlide){
                        $slideElemAnimation();
                    });
                    $this.on('beforeChange', function(slick, currentSlide){
                        $slideElemAnimation();
                    });
                    $this.on('init', function(slick){
                        $slideElemAnimation();
                    });
                });
            }


        };
        $('.htslider-slider-area.loading').removeClass('loading');
    };
    
    // Run this code under Elementor.
    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction( 'frontend/element_ready/htslider-slider-addons.default', WidgetHtSliderHandler);
    });
})(jQuery);