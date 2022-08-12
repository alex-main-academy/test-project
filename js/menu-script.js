let menu = document.querySelector('.menu__link-mobile');
let menu_Burger = document.querySelector('.menu__burger');

let toggle = false;

menu.addEventListener('click', () => {
    toggle = !toggle;

    if (toggle) {
        menu_Burger.style.display = 'block';
    }else{
        menu_Burger.style.display = 'none';
    }
})