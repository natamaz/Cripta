

"use strict"

$(document).ready(function(){
    // SLIDER
    $('.sliderCard').slick({
        variableWidth: true,
        arrows:false,
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    centerMode:false,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {

                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {

                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {

                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 320,
                settings: {

                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });
    $('.sliderProviders').slick({
        infinite:true,
        dots: true,
        arrows:false,
        responsive: [
            {
                breakpoint: 100000,
                settings: "unslick"

            },
            {
                breakpoint: 1280,
                settings: {
                    centerMode:false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {

                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {

                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {

                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 320,
                settings: {

                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });


// PARALAX
    const parallax = document.querySelector('.mouse-parallax');
    let mon1 = document.querySelector('.mouse-parallax-bg-mon-1');
    let mon2 = document.querySelector('.mouse-parallax-bg-mon-2');
    let mon3 = document.querySelector('.mouse-parallax-bg-mon-3');
    let mon4 = document.querySelector('.mouse-parallax-bg-mon-4');
    let mon5 = document.querySelector('.mouse-parallax-bg-mon-5');
    let mon6 = document.querySelector('.mouse-parallax-bg-mon-6');
    window.addEventListener('mousemove', function(e) {
        let x = e.clientX /  window.innerWidth;
        let y = e.clientY /  window.innerHeight;
        mon1.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 100 + 'px)';
        mon2.style.transform = 'translate(+' + x * 30 + 'px, -' + y * 15 + 'px)';
        mon3.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 15 + 'px)';
        mon4.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 25 + 'px)';
        mon5.style.transform = 'translate(+' + x * 30 + 'px, -' + y * 86 + 'px)';
        mon6.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 75 + 'px)';
    });
});
