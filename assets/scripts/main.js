/*
 * Demo-Code
 *
 * @url http://www.emanuel-kluge.de/tutorial/bilder-mit-jquery-einblenden-wenn-sie-fertig-geladen-sind/
**/
(function (win, $, spinner) {

var $elems;

/*
 * Appending spinner to '.image-frame'-elements
 * and binding load-event to the window-object.
**/
function init() {
	$elems = $('.image-frame').append(spinner);
	$(win).load(showImages);
}

/*
 * Iterating over '.image-frame'-elements, removing
 * the '.spinner'-image and '.loading'-class of the
 * actual images.
 *
 * The fade-effect of the image is done with CSS-transitions.
**/
function showImages() {
	$elems.each(function () {

		var $this = $(this);

		$this.find('.spinner').remove();
		$this.find('.image').removeClass('loading');

	});
}

/*
 * Calling 'init' after DOMReady.
**/
$(init);

})(window, jQuery, '<img src="assets/images/load.gif" class="spinner" alt="L&auml;dt&hellip;" />');