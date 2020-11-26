$(function(){
	const $item = $('.fade-main-item');
	const $dot = $('.fade-dot-item');
	const max = $item.length - 1;
	const fadeTimeDelay = 2000;
	const fadeTimeChange = 1500;
	const fadeTimeDotChange = 300;
	
	let i=0;
	const fadeAni = function(){
		i < max ? i ++ : i = 0
		$item.fadeOut(fadeTimeChange).eq(i).fadeIn(fadeTimeChange);
		$dot.removeClass('active').eq(i).addClass('active');
	};
	
	let sid = setInterval(fadeAni, fadeTimeDelay);
	$('.fade-main-item, .fade-dot-item').hover(function(){
		clearInterval(sid);
	}, function(){
		sid = setInterval(fadeAni, fadeTimeDelay);
	});

	$dot.mouseover(function(){
		const idx = $(this).index();
		$item.fadeOut(fadeTimeDotChange).eq(idx).fadeIn(fadeTimeDotChange);
		$dot.removeClass('active').eq(idx).addClass('active');
	});
});