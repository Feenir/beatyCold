/* ==============================================
	** Слайдер
	============================================== */
var swiper = new Swiper(".js-gallery", {
	loop: true,
	autoplay: true,
	speed: 800,
	delay: 1000,
});
/* ==============================================
	** Всплыващка Hero
	============================================== */

jQuery(document).ready(function($){
	$('.js-popup').on('click',function(event) {
		event.preventDefault();
		$('.popup').addClass('popup--open')
	});
});

$(document).mouseup(function(e) {
	const popup = $('.popup__body');
	if (e.target != popup[0] && popup.has(e.target).length === 0) {
		$('.popup').removeClass('popup--open');
	}
});

$('.js-close-popup').click(function(e) {
	e.preventDefault();
	$('.popup').removeClass('popup--open');
});

/* ==============================================
	** Меню бургер закрыть
	============================================== */


jQuery(document).ready(function($){
	$('.js-burger').on('click',function(event) {
		event.preventDefault();
		$('.menu-mobile').addClass('menu-mobile--mobile-open')
	});
});

$('.js-close-burger').click(function(e) {
	e.preventDefault();
	$('.menu-mobile').removeClass('menu-mobile--mobile-open');
});


/* ==============================================
	** Липкий хэдер
	============================================== */
$(document).ready(function () {
	const headerHeight = $('.header').outerHeight(true)
	$(window).scroll(function(){
		if($(this).scrollTop()>0){
			$('.header').addClass('header--scroll');
			$('body').css({
				'paddingTop': headerHeight // делаем отступ у body, равный высоте шапки
			});

		}
		else if ($(this).scrollTop()<headerHeight){
			$('.header').removeClass('header--scroll');
			$('body').css( {
				paddingTop: 0
			})
		}

	});

});

$('.js-notify-close').click(function(e) {
	e.preventDefault();
	$('.notify').removeClass('notify--open');
});

$(".phone-mask").mask("+7(999) 999-9999")
