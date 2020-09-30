$(()=>{
	const thisWeek = $('.ui-datepicker-today').siblings().eq(0).text();
	const nextWeek = Number(thisWeek) + 1;

	let aryThisWeek = [];
	let aryNextWeek = [];
	$('#datepicker tbody tr').each(function(){
		const week = $(this).find('.ui-datepicker-week-col').text();
		if( week === String(thisWeek) ){
			$(this).find('td > *').each(function(){
				aryThisWeek.push( $(this).text() );
			});
		};
		if( week === String(nextWeek) ){
			$(this).find('td > *').each(function(){
				aryNextWeek.push( $(this).text() );
			});
		};
	});
	aryThisWeek.splice(7);
	aryNextWeek.splice(7);
	console.log(aryThisWeek, aryNextWeek);

		

	// ==========================================
	// == TEST: get time v
	// ==========================================
	const thisDay = new Date().getDay() - 1;
	const dayList = ['一', '二', '三', '四', '五', '六', '日'];
	console.log(thisDay, dayList[thisDay]);


});