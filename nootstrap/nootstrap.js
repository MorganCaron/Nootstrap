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
		$('.changeOnTop').addClass('onTop');
	else
		$('.changeOnTop').removeClass('onTop');
}

function debugToggle() {
	$('body').toggleClass('nootstrap-debug');
}

function newNotification(content) {
	if ($('body > .nootstrap-notifications').length == 0)
		$('body').append('<div class="nootstrap-notifications"></div>');
	$('body > .nootstrap-notifications').append('<div class="nootstrap-notification"></div>');
	$('body > .nootstrap-notifications > .nootstrap-notification:last-child').html(content).css({
		opacity: 0,
		marginTop: '+=100%'
	}).animate({
		opacity: 1,
		marginTop: 0
	});
	setTimeout(function() {
		$('body > .nootstrap-notifications > .nootstrap-notification:first-child').animate({
			opacity: 0,
			marginTop: '-=100%'
		}, 300, function() {
			$(this).remove();
		});
		if ($('body > .nootstrap-notifications > .nootstrap-notification').length == 0)
			$('body > .nootstrap-notifications').remove();
	}, 5000);
}

$(document).ready(function() {
	updateParallax();
	updateChangeOnTop();
});

$(window).scroll(function() {
	updateParallax();
	updateChangeOnTop();
});
