const fnGiveHeight = function(){
	const rate1 = 0.56;
	const rate2 = 0.67;
	const rate3 = 1.33;
	const rate4 = 1.49;
	const rate5 = 0.562;
	const rate6 = 0.645;
	const rate7 = 1.2;

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
	const hb1g4wt = $('#block1 .grid4-wt').width() * 1;
	$('#block1 .grid4-wt').css('height', hb1g4wt);

	// BOX1 GRID4-1 LIST v
	const hb1g4t1 = $('#block1 .grid4 .grid-title.is-1').outerHeight(true);
	const hb1g4t2 = $('#block1 .grid4 .grid-title.is-2').outerHeight(true);
	const hb1g42 = $('#block1 .grid42-box').outerHeight(true)
	const hb1g4subtract = hb1g4wt * 2 + hb1g4t1 + hb1g4t2 + hb1g42;
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

	new PerfectScrollbar('#content .wrapper');
	new PerfectScrollbar('#sidebar-scroller');

	$('.circle-item[data-type="noti"]').click(function(){
		$('.tgnav-group-dropdown').toggleClass('is-open');
	});

	$('.circle-item[data-type="side"]').click(function(){
		if( $('#sidebar').hasClass('is-open') ){
			$('#sidebar').removeClass('is-open');
			$('#content .wrapper').removeAttr('style')
		}else{
			$('#sidebar').addClass('is-open');
			const aa = ( $(window).width() - $('#content .wrapper').width() ) /2;
			const bb = $('#sidebar').width() - aa;
			const cc = aa - bb + 15
			console.log(aa, bb, cc, "translateX("+ aa +"px)");
			$('#content .wrapper').css('transform', 'translateX(-'+ cc +'px)');
		}
	});

	// =============================
	// == FADE SHOW v
	// =============================
	const $item = $('.fade-main-item');
	const $dot = $('.fade-dot-item');
	const max = $item.length - 1;
	const fadeTimeDelay = 2000;
	const fadeTimeChange = 1500;
	const fadeTimeDotChange = 300;

	let i = 0;
	const fadeAni = function () {
		i < max ? i++ : i = 0
		$item.fadeOut(fadeTimeChange).eq(i).fadeIn(fadeTimeChange);
		$dot.removeClass('active').eq(i).addClass('active');
	};

	let sid = setInterval(fadeAni, fadeTimeDelay);
	$('.fade-main-item, .fade-dot-item').hover(function () {
		clearInterval(sid);
	}, function () {
		sid = setInterval(fadeAni, fadeTimeDelay);
	});

	$dot.mouseover(function () {
		const idx = $(this).index();
		$item.fadeOut(fadeTimeDotChange).eq(idx).fadeIn(fadeTimeDotChange);
		$dot.removeClass('active').eq(idx).addClass('active');
	});
})
