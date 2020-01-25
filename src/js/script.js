$(document).ready(function () {
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
					arrows: false,
				}
			},
			{
				breakpoint: 375,
				settings: {
					dots: false,
				}
			}
		]
	});
});