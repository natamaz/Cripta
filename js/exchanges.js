$(document).ready(function(){
    // SLIDER
    $('.sliderCard-company').slick({
        variableWidth: true,
        infinite: false,
        arrows:true,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode:false,
        dots: false,
        prevArrow: '<button type="button" id="prev-1" class="btn-arrow prev"><i class="icon-left-open-2" aria-hidden="true"></i></button>',
        nextArrow: '<button type="button" id="next-1"class="btn-arrow next"><i class="icon-right-open-2" aria-hidden="true"></i></button>',
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
});