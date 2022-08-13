let imgSrcArr = ['./img/header-img1.png', './img/header-img2.png']

let sliderImg = document.querySelector('.slider__image-item');
let src = sliderImg.getAttribute('src');

let toggle = false;

setInterval(() => {
    toggle = !toggle;

    if (toggle) {
        sliderImg.setAttribute('src', imgSrcArr[1])
    }else{
        sliderImg.setAttribute('src', imgSrcArr[0])
    }
},5000)

//paginaton
let count = 1;
let paginaton = document.querySelectorAll('.slider__pagination-item')
paginaton[0].classList.add('active')

setInterval(() => {
    if (count == 3) {
        count = 0
    }
    count++;

    if (count == 1) {
        paginaton.forEach((elem) => {
            elem.classList.remove('active')
        })
        paginaton[0].classList.add('active')
    }
    if (count == 2) {
        paginaton.forEach((elem) => {
            elem.classList.remove('active')
        })
        paginaton[1].classList.add('active')
    }
    if (count == 3) {
        paginaton.forEach((elem) => {
            elem.classList.remove('active')
        })
        paginaton[2].classList.add('active')
    }
},5000)

