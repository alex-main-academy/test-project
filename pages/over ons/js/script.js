let img = document.querySelector('.info__image-item')

if (window.innerWidth <= 570) {
    img.setAttribute('src', './img/info-image2.png');
}

if(window.innerWidth >= 570) {
    img.setAttribute('src', './img/info-image.png');
}


//slider
$(document).ready(function() {
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        centerMode: true,
        centerPadding: '30vw',
    });
});