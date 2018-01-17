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

function toggleDebug() {
	$('html').toggleClass('nootstrap-debug');
}

function newNotification(content) {
	if ($('body > .nootstrap-notifications').length == 0)
		$('body').append('<div class="nootstrap-notifications"></div>');
	$('body > .nootstrap-notifications').append('<div class="nootstrap-notification"></div>');
	$('body > .nootstrap-notifications > .nootstrap-notification:last-child').html(content).delay(5000).queue(function() {
		$(this).remove();
		if ($('body > .nootstrap-notifications > .nootstrap-notification').length == 0)
			$('body > .nootstrap-notifications').remove();
	});
}

$(document).ready(function() {
	updateParallax();
	updateChangeOnTop();

	$('.nootAdd').click(function() {
		$('#' + $(this).attr('noot-target')).addClass('active');
	});
	$('.nootRemove').click(function() {
		$('#' + $(this).attr('noot-target')).removeClass('active');
	});
	$('.nootToggle').click(function() {
		$('#' + $(this).attr('noot-target')).toggleClass('active');
	});
	$('.nootNext').click(function() {
		var target = $('#' + $(this).attr('noot-target'));
		var attribute = $(this).attr('noot-class');
		if (attribute == undefined)
			attribute = 'active';
		var current = target.find('> .' + attribute);
		var next = current.next();
		if (next.length > 0) {
			current.removeClass(attribute);
			next.addClass(attribute);
		}
	});
	$('.nootPrev').click(function() {
		var target = $('#' + $(this).attr('noot-target'));
		var attribute = $(this).attr('noot-class');
		if (attribute == undefined)
			attribute = 'active';
		var current = target.find('> .' + attribute);
		var prev = current.prev();
		if (prev.length > 0) {
			current.removeClass(attribute);
			prev.addClass(attribute);
		}
	});
	$('.nootGoto').click(function() {
		var target = $('#' + $(this).attr('noot-target'));
		var attribute = $(this).attr('noot-class');
		if (attribute == undefined)
			attribute = 'active';
		var goto = parseInt($(this).attr('noot-goto'));
		target.find('> .' + attribute).removeClass(attribute);
		target.find('> *').eq(goto).addClass(attribute);
	});
});

$(window).scroll(function() {
	updateParallax();
	updateChangeOnTop();
});
