$(document).ready(function() {
    $('.slider__main').slick({
        autoplay: true,
        arrows: false,
        autoplaySpeed: 5000,
        dots: true,
    })

    //slider slick swipe
    $('.slider__scroll').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        centerPadding: '30vw',
        centerMode: true,
    });
})

if (window.innerWidth < 570) {
    $('.slider__scroll').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        centerMode: true,
        centerPadding: '30vw',
        arrows: false,
    });
}