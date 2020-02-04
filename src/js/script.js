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
$(document).ready(function () {
	// Code for catalog tabs START
	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
		$(this)
			.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
			.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	});


	// script for change links classes
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
	// Code for catalog tabs END

	// Modal windows script
	$('[data-modal=consultation').on('click', function () {
		$('.overlay, #consultation').fadeIn('100'); // opens windows
	});

	// script to close modal windows
	$('.modal__close').on('click', function () {
		$('.overlay, #consultation, #order, #thanks').fadeOut('slow'); // closes windows
		document.location.reload(); // reloads page
	});

	// получаем и вставляем текст в элемент с классом '.className'
	$('.button_buy').each(function (i) {
		$(this).on('click', function () {
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn('100');
		});
	});

	// validation form code
	function validatorForms(form) {
		$(form).validate({
			rules: {
				name: {
					required: true,
					minlength: 3,
				},
				phone: "required",
				email: {
					required: true,
					email: true,
				}
			},
			messages: {
				name: {
					required: "Пожалуйста введите ваше имя.",
					minlength: jQuery.validator.format("Минимальное кол-во символов: {0}"),
				},
				phone: "Пожалуйста введите номер телефона",
				email: {
					required: "Введите ваш email address",
					email: "Ваш адрес должен быть в формате: name@domain.com",
				}
			}
		});
	}

	validatorForms('#consultation-form');
	validatorForms('#consultation .feed-form');
	validatorForms('#order .feed-form');

	// Input masked plugin code
	$("input[name=phone]").mask("+ 380 (99) 999-9999");
	
});