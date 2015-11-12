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