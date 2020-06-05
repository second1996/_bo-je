document.addEventListener("DOMContentLoaded", function() {

	AOS.init({
		offset: 175,
		duration: 1250,
		easing: 'ease',
		delay: 100,
		once: false,
		disable: 'mobile',
	})

})

$(document).ready(function() {

	/**
	 * Modal for Product list
	 */
	const productModal = $('.productModal')
	const productSlider = $('.product-slider')
	const productThumbSlider = $('.product-thumb-slider')
	
	productModal.on('shown.bs.modal', function (e) {
		productSlider.slick('refresh')
		productThumbSlider.slick('refresh')
	})

	/**
	 * Modal Product Slick Carousel
	 */
	$('.product-slider').each(function(key, item) {

		var sliderIdName = 'slider' + key
		var sliderNavIdName = 'sliderNav' + key
	
		this.id = sliderIdName
		$('.product-thumb-slider')[key].id = sliderNavIdName
	
		var sliderId = '#' + sliderIdName
		var sliderNavId = '#' + sliderNavIdName

		$(sliderId).slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: false,
			asNavFor: sliderNavId,
		})
		$(sliderNavId).slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: false,
			asNavFor: sliderId,
			centerMode: true,
			arrows: false,
			draggable: false,
			focusOnSelect: true,
		})

	})

	/**
	 * Anchor smooth scroll link
	 */
	$('a[data-link^="anchor"]').bind('click.smoothscroll', function(){
		var target = $(this).attr('href'),
				bl_top = $(target).offset().top;

		$('body, html').animate({scrollTop: bl_top}, 1000);
		return false;
	})

	/**
	 * Hamburger & Mobile menu
	 */
	const headerHamb = $('.header-hamburger-icon')
	const headerMenu = $('.header-menu')
	const menuLink = $('.menu-link')

	headerHamb.on('click', function() {
		$('body').toggleClass('modal-open')
		$(this).toggleClass('is-toggled')
		headerMenu.toggleClass('is-open')
	})
	if( $(window).width() < 992 ) {
		menuLink.on('click', function() {
			$('body').toggleClass('modal-open')
			headerHamb.toggleClass('is-toggled')
			headerMenu.toggleClass('is-open')
		})
	}

	/**
	 * Read More for About & Materials section
	 */
	if( $(window).width() < 992 ) {
		$('.about-text').readmore({
			moreLink: $('#about-more'),
			lessLink: false,
			embedCSS: false,
		})
		$('.materials-text').readmore({
			moreLink: $('#materials-more'),
			lessLink: false,
			embedCSS: false,
		})
	}

})