(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".product-list").masonry();

        $(".homepage-slides").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            dots: false,
            nav: true,
            navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]
        })

        $(".product-promotions").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            dots: true,
            nav: false,
        })

        $(".menu-trigger").on("click", function()  {
            $(".off-canvar-menu, .off-canvar-overlay").addClass("active");
            return false;
        });

        $(".manu-close, .off-canvar-overlay").on("click", function()  {
            $(".off-canvar-menu, .off-canvar-overlay").removeClass("active");
        });


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	