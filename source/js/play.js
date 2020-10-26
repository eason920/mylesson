let startDate;
$(()=>{
	// console.log('got play');
	const $turtle = $('#runway-time .guest');
	const $robbit = $('#runway-client .guest');
	let turtle = completeObj.play.turtle;
	let robbit = completeObj.play.robbit;
	//
	switch(true){
		case ( turtle - robbit ) >= 20:
			$robbit.addClass('lose-2');
			$('#runway-extend').show();
			break;
		case turtle > robbit:
			$robbit.addClass('lose-1');
			break;
		case turtle == 0 && robbit == 0:
			$('#runway-start').show();
		default:
	};
	//
	turtle > 99 ? turtle = 'calc(100% + 140px)' : turtle += '%';
	robbit > 99 ? robbit = 'calc(100% + 115px)' : robbit += '%';
	$turtle.css('left', turtle);
	$robbit.css('left', robbit);
	// if(  )
	
	// ==========================================
	// == DATE v
	// ==========================================
	$('#runway-date').datepicker({showOtherMonths: true});

	$('#runway-month-prev').click(function () {
		$('#runway-date .ui-icon-circle-triangle-w').click();
	});

	$('#runway-month-next').click(function () {
		$('#runway-date .ui-icon-circle-triangle-e').click();
	});

	$('#runway-start').click(function(){
		$('#runway-lb, #runway-masker').fadeIn();
	})

	$('#runway-send').click(function(){
		const year = Number( $('#runway-date .ui-datepicker-year').text() );
		const month = Number( $('#runway-date .ui-datepicker-month').text().replace(' 月', '') );
		const date = Number( $('#runway-date .ui-state-active').text() );
		startDate = year + '.' + month +'.' + date;
		const sort1 = year == Number(currentWeekYear) && month == Number(currentWeekMonth) && date <= Number(currentDate);
		const sort2 = month == Number(currentWeekMonth) && year < Number(currentWeekYear);
		const sort3 = month < Number(currentWeekMonth) && year == Number(currentWeekYear);
		console.log(sort1, sort2, sort3);
		//
		if( sort1 || sort2 || sort3 ){
			console.log('<= 今天');
			alert('請選擇明日以後的日期');
		}else{
			console.log('> 今天');
			const check = confirm('確定選定「'+startDate+'」作挑戰升下個等級的時間?');
			if( check ){ 
				$('#runway-finish b').text(startDate);
				$('#runway-start').fadeOut();
			}
			$('#runway-lb, #runway-masker').fadeOut();
		}
		// console.log(currentWeekYear, currentWeekMonth, currentDate);
		// // 同年同月同天&小於
		// console.log(date, currentDate);
		// console.log( year == currentWeekYear, month == currentWeekMonth, Number(date) <= Number(currentDate) );
		// console.log( year == currentWeekYear && month == currentWeekMonth && date <= currentDate );
		// // 同月小於今年
		// console.log( month == currentWeekMonth, year < currentWeekYear );
		// console.log( month == currentWeekMonth && year < currentWeekYear);
		// 小於月同年
		// console.log( month < currentWeekMonth, year == currentWeekYear);
		// console.log(month < currentWeekMonth && year == currentWeekYear);
		// 
		
	});

	$('#runway-masker, #runway-cancel, #runway-close').click(function(){
		$('#runway-lb, #runway-masker').fadeOut();
	});

	// $('#runway-start').click();
});