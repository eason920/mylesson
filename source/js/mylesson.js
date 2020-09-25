$(()=>{
	console.log('got');
	$('#contact, #lbmasker').click(function(){
		$('#lbmasker, #lb').toggleClass('open');
	});
});