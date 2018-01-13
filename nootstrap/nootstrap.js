/*
 * Nootstrap - Not Bootstrap
 * Front-End Framework web
 * Morgan Caron
 */

function updateParallax() {
	$('.parallax').each(function() {
		var scrolled = ($(document).scrollTop() - $(this).offset().top);
		$(this).find('.parallax-background').css('transform', 'translateY(' + scrolled/2 + 'px)');
	});
}

function updateChangeOnTop() {
	if ($(document).scrollTop() < $(window).height())
		$('.changeOnTop').addClass("onTop");
	else
		$('.changeOnTop').removeClass("onTop");
}

$(document).ready(function() {
	updateParallax();
	updateChangeOnTop();
});

$(window).scroll(function() {
	updateParallax();
	updateChangeOnTop();
});
