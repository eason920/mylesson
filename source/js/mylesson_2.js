const fnSliderHeight = ()=>{
	const height = $('#slider').width() * 0.675;
	$('#slider').css('height', height);
}

$(()=>{
	fnSliderHeight();

	$(window).resize(()=>{
		fnSliderHeight();
	});
})
