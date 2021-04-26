

$(()=>{
	console.log('got status');
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
	// (data-status='0'')
});