window.onload = function () {
    const menu_btn = document.querySelector('.header__menu-burger')
    const mobile_menu = document.querySelector('.header__menu-list-mobile')

    menu_btn.addEventListener('click', function(){
        menu_btn.classList.toggle('active');
    });
}