/* $(document).ready(function () {
	$(".carousel__inner").slick({
		speed: 300,
		slidesToShow: 1,
		//autoplay: true,
		//autoplaySpeed: 2000,
		// adaptiveHeight: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/left-arrow.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="img/icons/right-arrow.svg"></button>',

		responsive: [
			{
				breakpoint: 768,
				settings: {
					dots: true,
					arrows: false
				}
			}
		]
	});
}); */

// Code for tiny-slider START
const slider = tns({
	container: '.carousel__inner',
	items: 1,
	slideBy: 'page',
	autoplay: false,
	controls: false,
	responsive: {
		1024: {
			nav: false,
		},
	}
});

document.querySelector('.prev').addEventListener('click', function () {
	slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
	slider.goTo('next');
});
// Code for tiny-slider END

// Code for catalog tabs START