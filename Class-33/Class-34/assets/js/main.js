(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

		
		
        $(".video-play-btn").magnificPopup({
            type: 'video',
        });
		
		$('.staff-list').owlCarousel({
            items: 5,
            loop: true,
            autoplay: true,
            margin: 30,
            loop: true,
            nav: true,
            navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
        });
		
		$(".carousel-main").owlCarousel({
            items: 5,
            margin: 30,
            nav: false,
            dots: false,
            loop: true,
            responsiveClass:true,
            responsive:{
                1170:{
                    items:5,
                },
                992:{
                    items:4,
                },
                768:{
                    items:3,
                },
                540:{
                    items:2,
                },
            }

        });

        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	