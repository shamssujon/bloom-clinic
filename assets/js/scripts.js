"use strict";

// Header carousel
(function () {
	const slider = tns({
		container: ".header-carousel",
		items: 1,
		mode: "gallery",
		autoplay: true,
		controls: false,
		nav: false,
		autoplayButtonOutput: false,
		mouseDrag: true,
	});
})();

// Service carousel
(function () {
	const slider = tns({
		container: ".services-carousel",
		items: 1,
		gutter: 20,
		autoplay: true,
		rewind: true,
		controls: true,
		nav: false,
		autoplayButtonOutput: false,
		mouseDrag: true,
		controlsContainer: ".service-carousel-wrapper .carousel-controls",
	});
})();

// Testimonial carousel
(function () {
	const slider = tns({
		container: ".testimonial-carousel",
		items: 1,
		gutter: 20,
		autoplay: true,
		rewind: false,
		controls: false,
		nav: true,
		navPosition: "bottom",
		autoplayButtonOutput: false,
		mouseDrag: true,
	});
})();
