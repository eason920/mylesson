const fnGiveHeight = function(){
	console.log('active');

	const rate1 = 0.56;
	const rate2 = 0.67;
	const rate3 = 1.33;

	// SLIDER v
	const hSlider = $('#sliderbox').width() * 0.675;
	$('#sliderbox').css('height', hSlider);

	// BOX1 GRID3 v
	const hb1mgz = $('#block1 .grid3-mgz').width() * rate3;
	$('#block1 .grid3-mgz').css('height', hb1mgz);

	// BOX1 GRID4-2 v
	const hb1g42 = $('#block1 .grid42-img').width() * rate2;
	$('#block1 .grid42-img').css('height', hb1g42);

	// BOX2 GRID3 v
	const hb2g3 = $('#block2 .grid3-img').width() * rate1;
	$('#block2 .grid3-img').css('height', hb2g3);

	// BOX2 GRID5 MUSIC v
	const hb2g5 = $('#block2 .grid5-item').width() * rate1;
	$('#block2 .grid5-img').css('height', hb2g5);
};

$(()=>{
	fnGiveHeight();

	$(window).resize(()=>{
		fnGiveHeight();
	});

	$("#slider").slick({
		dots: true, // 動畫控制點點 : 有
		infinite: true, // 無止境動畫
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false, // 自動幻影格 : 是
		autoplaySpeed: 1000, // 影格的停留展示時間 : 毫秒
		speed: 800, // 切幻影格的速率 : 毫秒
		pauseOnFocus: true, // 聚焦就停止動畫 : 否
		pauseOnHover: true,// 滑鼠over 就停止動畫 : 否
		variableWidth: true,// 是否接受 .slick-slide 非 100% 寬
		prevArrow: true,
		nextArrow: false,
		// 客製化 nex & pre 鈕：https://codepen.io/blanks-site/embed/dZNEwW?height=350&theme-id=dark&slug-hash=dZNEwW&default-tab=js%2Cresult&user=blanks-site&embed-version=2&pen-title=slick-arrows&preview=true 
		responsive: [
			// {
			// 	breakpoint: 1024,
			// 	settings: {
			// 		slidesToShow: 3,
			// 		slidesToScroll: 3,
			// 		infinite: true,
			// 		dots: true
			// 	}
			// },
			// 	{
			// 	breakpoint: 600,
			// 	settings: {
			// 		slidesToShow: 2,
			// 		slidesToScroll: 2
			// 	}
			// },
			// {
			// 	breakpoint: 480,
			// 	settings: {
			// 		slidesToShow: 1,
			// 		slidesToScroll: 1
			// 	}
			// }
			// vvv 值得一試 值得一試 值得一試 vvv
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick" // 
			// instead of a settings object
			// ^^^ 值得一試 值得一試 值得一試 ^^^
		]
	});

	const width = $('#sliderbox').width();
	$('.slick-slide').css({width});


	
})
