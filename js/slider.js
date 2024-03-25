document.addEventListener('DOMContentLoaded', function() {

    var splide1 = new Splide( '#splide1', {
        type   : 'loop',
        arrows: false,
        pagination: false,
        perPage: 3,
        focus  : 0,
        omitEnd: true,
        gap: '28px',
        breakpoints: {
          992: {
            perPage: 2,
          },
        },
      } );
      
      splide1.mount();

      var splide2 = new Splide( '#splide2', {
        type   : 'loop',
        arrows: false,
        pagination: false,
        perPage: 3,
        focus  : 0,
        omitEnd: true,
        gap: '28px',
        breakpoints: {
          992: {
            perPage: 2,
          },
        },
      } );
      
      splide2.mount();

    btnNext.addEventListener('click', e => {
        splide1.go('+1')
        splide2.go('+1')
      })
    
    btnPrev.addEventListener('click', e => {
        splide1.go('-1')
        splide2.go('-1')
      })
    
    });
