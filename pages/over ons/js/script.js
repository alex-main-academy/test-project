let imgArr = document.querySelectorAll('.info__image-item')

if (window.innerWidth < 570) {
    imgArr.forEach((elem) => {
        if (elem.getAttribute('src') == './img/info-image.png') {
            elem.setAttribute('src', './img/info-image2.png')
        }
        if (elem.getAttribute('src') == './img/over-image.png'){
            elem.setAttribute('src', './img/over-image2.png')
        }
    })
}



$(document).ready(function() {
    //slider info
    $('.info__image').slick({
        autoplay: true,
        arrows: false,
        autoplaySpeed: 5000,
        dots: true,
    });



    //slider slick swipe
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        centerMode: true,
        centerPadding: '30vw',
    });
});

if (window.innerWidth < 570) {
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        centerMode: true,
        centerPadding: '30vw',
        arrows: false,
    });
}