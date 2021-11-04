document.addEventListener("DOMContentLoaded", function () {

	/**
	 * AOS init
	 */
	AOS.init({
		offset: 175,
		duration: 1250,
		easing: 'ease',
		delay: 100,
		once: false,
		disable: 'mobile',
	})


	/**
	 * Modal for Product list
	 */
	var productModal = $('.productModal')
	var productSlider = $('.product-slider')
	var productThumbSlider = $('.product-thumb-slider')

	productModal.on('shown.bs.modal', function (e) {
		productSlider.slick('refresh')
		productThumbSlider.slick('refresh')
	})


	/**
	 * Modal Product Slick Carousel
	 */
	$('.product-slider').each(function (key, item) {
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

		// Refresh AOS positions
		AOS.refresh()
	})


	/**
	 * Testimonials slider
	 */
	if (window.matchMedia('(min-width: 992px)').matches) {
		$('.testimonials-slider').on('init', function (event, slick) {
			// Read more button
			$('.testimonials-item-body').each(function (index, el) {
				$(this).readmore({
					moreLink: $('#testimonial-readmore-' + index),
					lessLink: false,
					embedCSS: false,
					collapsedHeight: 104,
				})
			})

			// Refresh AOS positions
			AOS.refresh()
		})
	}

	$('.testimonials-slider').slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		infinite: false,
		dots: true,
		responsive: [
			{
				breakpoint: 991.98,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					adaptiveHeight: true,
				}
			},
			{
				breakpoint: 575.98,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					adaptiveHeight: true,
				}
			},
		],
	})


	/**
	 * Anchor smooth scroll link
	 */
	$('a[data-link^="anchor"]').bind('click.smoothscroll', function () {
		var target = $(this).attr('href'),
			bl_top = $(target).offset().top

		$('body, html').animate({ scrollTop: bl_top }, 1000)
		return false
	})


	/**
	 * Hamburger & Mobile menu
	 */
	var headerHamb = $('.header-hamburger-icon')
	var mMenu = $('.mmenu')
	var mMenuLink = $('.mmenu-list > li > a')

	headerHamb.on('click', function () {
		$('body').toggleClass('modal-open')
		$(this).toggleClass('is-toggled')
		mMenu.toggleClass('is-open')
	})
	mMenuLink.on('click', function () {
		$('body').removeClass('modal-open')
		headerHamb.removeClass('is-toggled')
		mMenu.removeClass('is-open')
	})


	/**
	 * Header additional burger menu
	 */
	var burgerMenuIcon = $('.burger-menu-icon')
	var burgerMenuIconBtn = $('.burger-menu-icon .btn-burger')
	var burgerMenuList = $('.burger-menu-list')

	burgerMenuIcon.on('click', function () {
		burgerMenuIconBtn.toggleClass('is-toggled')
		burgerMenuList.toggleClass('is-open')
	})
	burgerMenuList.find('li > a').on('click', function () {
		burgerMenuIconBtn.removeClass('is-toggled')
		burgerMenuList.removeClass('is-open')
	})
	$('.menu-link').on('click', function () {
		burgerMenuIconBtn.removeClass('is-toggled')
		burgerMenuList.removeClass('is-open')
	})


	/**
	 * Read More for About & Materials section
	 */
	if (window.matchMedia('(max-width: 991.98px)').matches) {
		$('.about-text').readmore({
			moreLink: $('#about-more'),
			lessLink: false,
			embedCSS: false,
		})
		$('.materials-inner').readmore({
			moreLink: $('#materials-more'),
			lessLink: false,
			embedCSS: false,
		})
	}


	/**
	 * Go up button
	 */
	var go_up_btn = $('#go-up-button')

	$(window).on('scroll load', function () {
		if ($(window).scrollTop() > 1000) {
			go_up_btn.addClass('_is-shown')
		} else {
			go_up_btn.removeClass('_is-shown')
		}
	})

	go_up_btn.on('click', function (e) {
		e.preventDefault()
		$('html, body').animate({ scrollTop: 0 }, 1000)
	})


	/**
	 * Sticky header
	 */
	var fixed_header = $('.header')

	$(window).on('scroll load', function () {
		if ($(window).scrollTop() > 250) {
			fixed_header.addClass('_is-sticky')
		} else {
			fixed_header.removeClass('_is-sticky')
		}
	})

})