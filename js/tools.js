

"use strict"

$(document).ready(function(){
    // SLIDER
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
    let mon1 = document.querySelector('.mouse-parallax-bg-mon-1');
    let mon4 = document.querySelector('.mouse-parallax-bg-mon-4');
    let mon5 = document.querySelector('.mouse-parallax-bg-mon-5');
    let mon6 = document.querySelector('.mouse-parallax-bg-mon-6');
    window.addEventListener('mousemove', function(e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        mon1.style.transform = 'translate(-' + x * 10 + 'px, -' + y * 50 + 'px)';
        mon4.style.transform = 'translate(-' + x * 10 + 'px, -' + y * 25 + 'px)';
        mon5.style.transform = 'translate(+' + x * 15 + 'px, -' + y * 86 + 'px)';
        mon6.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 25 + 'px)';
    });

});