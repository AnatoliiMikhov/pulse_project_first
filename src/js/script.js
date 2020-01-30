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
//(function ($) {
$(document).ready(function () {
	$(function () {

		$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
			$(this)
				.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
				.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
		});



		function toggleSlide(item) {
			$(item).each(function (i) {
				$(this).on('click', function (e) {
					e.preventDefault();
					$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
					$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
				});
			});
		}

		toggleSlide('.catalog-item__link');
		toggleSlide('.catalog-item__back');
	});
});