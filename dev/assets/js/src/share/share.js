import $ from 'jquery'
import Clipboard from 'clipboard'

export default {

	init() {
		this.shareLinks()
	},


	shareLinks() {
		var getURL = (window.location != window.parent.location) ? document.referrer : document.location
		const shareMessage = encodeURIComponent('What causes allergies?')
		const shareURL = encodeURIComponent(getURL)
		const copySuccess = $('[data-copy-success]');


		$('[data-share-tw]').on('click touchend', function(event) {
			var url = '//twitter.com/share?' +
				'text='+shareMessage +
				'&url='+shareURL +
				'&hashtags=allergies, telfast'

			window.open(url, 'share', 'width=550,height=300')
			// prevent default
			event.preventDefault()
		})

		$('[data-share-fb]').on('click touchend', function(event) {
			var url = '//www.facebook.com/sharer.php?u='+shareURL

			window.open(url, 'share', 'width=640,height=370')
			// prevent default
			event.preventDefault()
		})

		var copyLink = new Clipboard('[data-share-link]', {
			text: function() {
				return getURL;
			}
		})

		copyLink.on('success', function(event) {
			copySuccess.fadeIn(500);
			setTimeout( function() {
				copySuccess.fadeOut(2000);
			}, 3000)
			event.clearSelection();
		})
	}
}
