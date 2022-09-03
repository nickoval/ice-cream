$(document).ready(function() {
	$('.slider').slick({
		arrows:false,
		dots:true,
		// adaptiveHeight:false, 2
		slidesToShow:1,
		slidesToScroll:1,
		speed:1000,
		// easing:'cubic-bezier(0,0,1,0)',
		// infinite:true,
		// initialSlide:3,
		// autoplay:true,
		// autoplaySpeed:3000,
		// pauseOnFocus:true, 3
		// pauseOnHover:true, 3
		// pauseOnDotsHover:true, 3
		draggable:true, // swipe pc
		swipe:true, // swipe touchscreen
		touchThreshold:5, // how (частка) translate to swipe
		touchMove:true, //плавний свайп
		waitForAnimate:true,
		centerMode:false, // вкл головни слайд завжди по центру
		variableWidth:false,
		// rows:1,
		// slidesPerRow:1,
		// vertical:true, 4
		// verticalSwiping:true, 4
	});
});