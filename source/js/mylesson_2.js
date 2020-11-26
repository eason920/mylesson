const fnGiveHeight = function(){
	const rate1 = 0.56;
	const rate2 = 0.67;
	const rate3 = 1.33;
	const rate4 = 1.49;
	const rate5 = 0.562;
	const rate6 = 0.645;

	// --------------------------------
	// BLOCK1 GRID2 v
	const hFade = $('#fade').width() * rate6;
	$('#fade').css('height', hFade);

	const hFadeOuter = $('#fade').outerHeight(true);
	$('#block1 .grid22-box').css('height', 'calc(100% - ' + hFadeOuter +'px)');

	// --------------------------------
	// BOX1 GRID3 MAGAZINE v
	const hb1mgz = $('#block1 .grid3-mgz').width() * rate3;
	$('#block1 .grid3-mgz').css('height', hb1mgz);

	// BOX1 GRID3 LIST v
	const hb1g3v = $('#block1 .grid3-video').outerHeight(true);
	const hb1g3t1 = $('#block1 .grid-title.is-1').outerHeight(true);
	const hb1g3t2 = $('#block1 .grid-title.is-2').outerHeight(true);
	const hb1g3subtract = hb1g3v + hb1g3t1 + hb1g3t2 + hb1mgz;
	$('#block1 .grid3-box').css('height', 'calc( 100% - ' + hb1g3subtract + 'px )');

	// --------------------------------
	// BOX1 GRID4-2 LIST v
	const hb1g42img = $('#block1 .grid42-img').width() * rate1;
	$('#block1 .grid42-img').css('height', hb1g42img);

	// BLOCK 1 WEEK TEST v
	const hb1g4wt = $('#block1 .grid4-wt').width() * rate4;
	$('#block1 .grid4-wt').css('height', hb1g4wt);

	// BOX1 GRID4-1 LIST v
	const hb1g4t1 = $('#block1 .grid4 .grid-title.is-1').outerHeight(true);
	const hb1g4t2 = $('#block1 .grid4 .grid-title.is-2').outerHeight(true);
	const hb1g42 = $('#block1 .grid42-box').outerHeight(true)
	const hb1g4subtract = hb1g4wt + hb1g4t1 + hb1g4t2 + hb1g42;
	console.log(hb1g4t1, hb1g4wt, hb1g4t2,hb1g42, hb1g4subtract);
	$('#block1 .grid4-box').css('height', 'calc( 100% - ' + hb1g4subtract + 'px)');

	// ================================
	// ================================
	// BLOCK2 GRID3 v
	const hb2g3 = $('#block2 .grid3-img').width() * rate1;
	$('#block2 .grid3-img').css('height', hb2g3);

	// BLOCK2 GRID2&3 v
	const hb2g2v = $('#block2 .grid2-video').width() * rate5;
	$('#block2 .grid2, #block2 .grid3, #block2 .grid4').css('height', hb2g2v);

	// BLOCK2 GRID5 MUSIC v
	const hb2g5img = $('#block2 .grid5-img').width() * rate1;
	$('#block2 .grid5-img').css('height', hb2g5img);

	// BLOCK2
	const hb2gutter = 13;
	const hb2g5 = $('#block2 .grid5-title').outerHeight() + hb2g5img + $('#block2 .grid5-under').outerHeight(true);
	const h2 = hb2g2v + hb2g5 + hb2gutter;

	console.log(hb2g2v, hb2g5, h2);
	$('#block2 .grid1').css('height', h2)
};

$(()=>{
	fnGiveHeight();

	$(window).resize(()=>{ fnGiveHeight() });

	$("#slider").slick({
		dots: true, // 動畫控制點點 : 有
		infinite: true, // 無止境動畫
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true, // 自動幻影格 : 是
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

	new PerfectScrollbar('#sidebar-scroller');
	
})
