// var swiper = new Swiper(".js-gallery", {
// 	loop: true,
// 	autoplay: true,
// 	speed: 800,
// 	delay: 1000,
// });

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