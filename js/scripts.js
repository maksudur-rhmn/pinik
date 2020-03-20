$(function () {
    "use strict";

    $(window).on('scroll', function () {
        var scroll = $(this).scrollTop();

        if (scroll > 130) {
            $(".menu").addClass('nav-bg');
        } else {
            $(".menu").removeClass('nav-bg');
        }
    });
    //Preloader
    $(window).on('load', function () { // makes sure the whole site is loaded 
        $('#status').fadeOut(); // will first fade out the loading animation 
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    })

    //    Preloader Ends


    //Active menu
    $(document).on('click', '.navbar ul li', function () {
        $('.navbar ul li').removeClass('active');
        $(this).addClass('active')
    });
    //    Active menu Ends


    // Type JS

    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        loop: true,
        typeSpeed: 70,
        backSpeed: 50,

    });


    // Type JS Ends

    //Wow Js
    new WOW().init();
    //Wow Js Ends

    //mixitup Starts

    var mixer = mixitup('.filter');

    //mixitup Ends


    //Venobox Starts

    $('.venobox').venobox({
        framewidth: '800px',
        frameheight: '500px',
        border: '6px',
        bordercolor: '#ba7c36',
        numeratio: true
    });

    //Venobox Ends


    //Slick Starts

    $('.feedbackSlider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: '<i class="fas fa-long-arrow-alt-right next"></i>',
        prevArrow: '<i class="fas fa-long-arrow-alt-left prev"></i>',
    });

    //Slick Ends


    //Responsive Menu


    $(".fa-bars").on('click', function () {
        $(".fa-bars").css("display", "none");
        $(".fa-times").css("display", "block");
    });
    $(".fa-times").on('click', function () {
        $(".fa-times").css("display", "none");
        $(".fa-bars").css("display", "block");
    });
    //    Responsive Ends

});
