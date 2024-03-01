window.onload = function () {
    const menu_btn = document.querySelector('.header__menu-burger')
    const mobile_logo = document.querySelector('.header__top-logo')
    const mobile_menu = document.querySelector('.header__menu-list-mobile')

    menu_btn.addEventListener('click', function(){
        menu_btn.classList.toggle('active');
        mobile_logo.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });

    var splide = new Splide( '.splide', {
        perPage    : 3,
        perMove    : 1,
        focus      : 'center',
        trimSpace  : false,
        breakpoints: {
          600: {
            perPage: 2,
            height : '6rem',
          },
        },
      } );
      
      splide.mount();
}