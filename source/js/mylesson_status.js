

$(()=>{
	$('.label-item').click(function(){
		const status = $(this).attr('data-status');
		$('.label-item').removeClass('active');
		$(this).addClass('active');
		if( status == '0'){
			$('#status').fadeOut();
		}else{
			$('#status').fadeIn();
		};

		// --------------------------------
		const time = '?' + new Date().getTime();
		$.getJSON(url.pie + time, function(data) {
			renderPie(data); // 此函式定義在「./js/crm_ac_chart.js」中
		});

		$.getJSON(url.radar + time, function(data){
			renderFn(data);
		});
	});

	const label = document.querySelector('#label');
	// label.lastChild.click();
	$('.label-item[data-status="1"]').click();
});