$(()=>{
	console.log('m3 got');
	new PerfectScrollbar('#content .wrapper');
	new PerfectScrollbar('#sidebar-scroller');

	$('.nav-group-link, .tgnav-group-dropdown').hover(function(){
		$('.tgnav-group-dropdown').show();
	}, function(){
		$('.tgnav-group-dropdown').hide();
	});

	$('.tgnav-group-link, #sidebar-icon').click(function(){
		$('#sidebar').toggleClass('is-open');
	});

	// $('.tgnav-group-link').click();
});