//menu burger 
let menu = document.querySelector('.menu__link-mobile');
let menuBurger = document.querySelector('.menu__burger');
let menuIcon = document.querySelector('.menu__burger-icon')
let bool = false;

menu.addEventListener('click', () => {
    bool = !bool;

    if (bool) {
        menuBurger.style = `
        opacity: 1;
        `

        menuIcon.setAttribute('src', './img/close-icon.png');
        menuIcon.style = `
            width: 10px;
            height: 10px;
        `
    }else{
        menuBurger.style = `
        opacity: 0;
        `

        menuIcon.setAttribute('src', './img/menu-burger.png');
        menuIcon.style = ``
    }
})