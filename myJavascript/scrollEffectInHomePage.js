$(document).ready(function () {
    $(window).on('scroll',() => {
		const leftFadeIn = $('.scroll-left')
		const rightFadeIn = $('.scroll-right')
		const window_height = $(window).height()// chiều cao mà hình
		const window_top_position = $(window).scrollTop()// vị trí scroll top
		const plusHeight = window_height - 60// giảm chiều cao màn hình
		const window_bottom_position = (window_top_position + plusHeight)
		
		
		//order-form
		var order_form_top_position = $('.order-form').offset().top
		if (order_form_top_position <= window_bottom_position) {
			$('.order-form').addClass('leftFadeIn')
		} else {
			$('.order-form').removeClass('leftFadeIn')
		}
		//article
		var article_top_position = $('.home-news').offset().top
		$.each(leftFadeIn, function() {
			var element = $(this)
			if (article_top_position <= window_bottom_position) {
				element.addClass('leftFadeIn')
			} else {
				element.removeClass('leftFadeIn')
			}
		})
		$.each(rightFadeIn, function() {
			var element = $(this)
			if (article_top_position <= window_bottom_position) {
				element.addClass('rightFadeIn')
			} else {
				element.removeClass('rightFadeIn')
			}
		})
			
	})
});