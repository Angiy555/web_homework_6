const menuBurger = document.querySelector('.header__nav__burgermenu');
const buttonMenuBurger = document.querySelector('.btn__burger__menu');

function toggleMenuBurger() {
    menuBurger.classList.toggle('hidden__burgermenu');
}

buttonMenuBurger.addEventListener('click', toggleMenuBurger);