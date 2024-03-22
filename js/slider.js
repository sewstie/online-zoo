var splide = new Splide( '.splide', {
    type    : 'loop',
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