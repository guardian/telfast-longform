import 'slick-carousel'
import $ from 'jquery'

export default {
	init() {
		// eslint-disable-next-line no-console
		console.info('App Ready')

		let slider = $('[data-carousel]')
		let carousel = $('.carousel__slides', slider)
		let carouelControl = $('[data-carousel-control]')

		this.initSlides(carousel)
		this.initSlideNavigation(carousel, carouelControl)
	},

	initSlides(carousel) {
		// defaults
		let slideOptions = {
			arrows: false,
			swipeToSlide: false,
			draggable: false,
			// fade: true,
			speed: 650,
			infinite: true,
			cssEase: 'ease-in-out',
		}

		// init slick slider with options
		carousel.slick(slideOptions)
	},

	initSlideNavigation(carousel, controls) {
		controls.on('click touchend', function() {
			var self = $(this)

			var slideIndex = self.index()
			carousel.slick('slickGoTo', parseInt(slideIndex) )
			self.addClass('active')
			self.siblings().removeClass('active')
		});
	}

}
