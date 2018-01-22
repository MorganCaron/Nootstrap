/*
 * Nootstrap - Not Bootstrap
 * Front-End Framework web
 * Morgan Caron
 */

var prefix = 'noot';

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
	$('html').toggleClass('noot-debug');
}

function newNotification(content) {
	if ($('body > .' + prefix + '-notifications').length == 0)
		$('body').append('<div class="' + prefix + '-notifications"></div>');
	$('body > .' + prefix + '-notifications').append('<div class="' + prefix + '-notification"></div>');
	$('body > .' + prefix + '-notifications > .' + prefix + '-notification:last-child').html(content).delay(5000).queue(function() {
		$(this).remove();
		if ($('body > .' + prefix + '-notifications > .' + prefix + '-notification').length == 0)
			$('body > .' + prefix + '-notifications').remove();
	});
}

$(document).ready(function() {
	updateParallax();
	updateChangeOnTop();

	$('.' + prefix + 'Delete').click(function() {
		var targets = $('.' + $(this).attr(prefix + '-target'));
		targets.remove();
	});

	$('.' + prefix + 'Add').click(function() {
		var targets = $('.' + $(this).attr(prefix + '-target'));
		var attribute = $(this).attr(prefix + '-class');
		if (attribute == undefined)
			attribute = 'active';
		var duration = $(this).attr(prefix + '-duration');
		targets.addClass(attribute);
		if (duration != undefined)
			targets.delay(parseInt(duration)).removeClass(attribute);
	});
	$('.' + prefix + 'Remove').click(function() {
		var targets = $('.' + $(this).attr(prefix + '-target'));
		var attribute = $(this).attr(prefix + '-class');
		if (attribute == undefined)
			attribute = 'active';
		targets.removeClass(attribute);
	});
	$('.' + prefix + 'Toggle').click(function() {
		var targets = $('.' + $(this).attr(prefix + '-target'));
		var attribute = $(this).attr(prefix + '-class');
		if (attribute == undefined)
			attribute = 'active';
		targets.toggleClass(attribute);
	});
	$('.' + prefix + 'Next').click(function() {
		var targets = $('.' + $(this).attr(prefix + '-target'));
		var attribute = $(this).attr(prefix + '-class');
		if (attribute == undefined)
			attribute = 'active';
		targets.each(function() {
			var target = $(this);
			var current = target.find('> .' + attribute);
			var next = current.next();
			if (next.length > 0) {
				current.removeClass(attribute);
				next.addClass(attribute);
			}
		});
	});
	$('.' + prefix + 'Prev').click(function() {
		var targets = $('.' + $(this).attr(prefix + '-target'));
		var attribute = $(this).attr(prefix + '-class');
		if (attribute == undefined)
			attribute = 'active';
		targets.each(function() {
			var target = $(this);
			var current = target.find('> .' + attribute);
			var prev = current.prev();
			if (prev.length > 0) {
				current.removeClass(attribute);
				prev.addClass(attribute);
			}
		});
	});
	$('.' + prefix + 'Goto').click(function() {
		var targets = $('.' + $(this).attr(prefix + '-target'));
		var attribute = $(this).attr(prefix + '-class');
		if (attribute == undefined)
			attribute = 'active';
		var goto = parseInt($(this).attr(prefix + '-goto'));
		targets.each(function() {
			var target = $(this);
			target.find('> .' + attribute).removeClass(attribute);
			target.find('> *').eq(goto).addClass(attribute);
		});
	});
});

$(window).scroll(function() {
	updateParallax();
	updateChangeOnTop();
});
