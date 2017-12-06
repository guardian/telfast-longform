import $ from 'jquery'
import 'assets/less/style.less'

// require modules
import interactive from './src/interactive/interactive'
import share from './src/share/share'

$(document).ready(function() {
	// init modules
	interactive.init()
	share.init()
})
