window.onload = function () {
    const menu_btn = document.querySelector('.header__menu-burger')
    const mobile_logo = document.querySelector('.header__top-logo')

    menu_btn.addEventListener('click', function(){
        menu_btn.classList.toggle('active');
        mobile_logo.classList.toggle('active');
    });
}