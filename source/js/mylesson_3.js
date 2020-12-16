$(()=>{
	console.log('m3 got');
	new PerfectScrollbar('#content .wrapper');
	new PerfectScrollbar('#sidebar-scroller');

	$('.nav-group-link').click(function(){
		$('.tgnav-group-dropdown').toggle();
	});

	$('.tgnav-group-link, #sidebar-icon').click(function(){
		$('#sidebar').toggleClass('is-open');
	});

	// $('.tgnav-group-link').click();
});