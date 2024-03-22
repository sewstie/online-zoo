document.addEventListener('DOMContentLoaded', function() {
    var splide = new Splide( '.splide', {
        type    : 'loop',
        arrows: false,
        grid: {
            rows: 2,
            cols: 3,
            gap : {
                row: '30px',
                col: '30px',
            },
      },
    });
    splide.mount(window.splide.Extensions);

    btnNext.addEventListener('click', e => {
        splide.go('+1')
      })
    
      btnPrev.addEventListener('click', e => {
        splide.go('-1')
      })
    
    });
