if (Modernizr.opacity) {
	console.log('opdacity is supported');
}

if (Modernizr.touch) {
	console.log('touch is supported');
} else {
	console.log('touch is not supported');
}

// Test if it's night or not
Modernizr.addTest('night', function() {
	var current = new Date();
	current = current.getHours();
	console.log(!!(current >= 19));
});

// Extension to use different image formats according to the use
var path = $('#star-svg').attr('data-path');
var	svgObj;

if (Modernizr.svg) {
	svgObj = '<object type="img/svg+xml" style="float:right" data="' 
			 + path + '.png"></obect>'
} else {
	svgObj = '<img src="' + path + '.png" />';
}

$('star-svg').html(svgObj);