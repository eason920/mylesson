

$(()=>{
	$('.label-item').click(function(){
		const status = $(this).attr('data-status');
		$('.label-item').removeClass('active');
		$(this).addClass('active');
		if( status == '0'){
			$('#status').fadeOut();
		}else{
			$('#status').fadeIn();
		}
	});

	const label = document.querySelector('#label');
	// label.lastChild.click();
	$('.label-item[data-status="1"]').click();
});