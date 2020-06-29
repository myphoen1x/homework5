$(function () {
	$(window).scroll(function() {
		$('.title').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
				$(this).addClass("fadeInDown");
			}
		});
	});
	$(window).scroll(function() {
		$('.next__column').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
				$(this).addClass("fadeInLeft");
			}
		});
	});
	$(window).scroll(function() {
		$('.next__column_travel').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
				$(this).addClass("fadeInUp");
			}
		});
	});
	$(window).scroll(function() {
		$('.next__column_create').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
				$(this).addClass("fadeInRight");
			}
		});
	});
	$(window).scroll(function() {
		$('.feature__form').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
				$(this).addClass("fadeInRight");
			}
		});
	});

	$(window).scroll(function() {
		$('.footer__text').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
				$(this).addClass("fadeInLeft");
			}
		});
	});
})


