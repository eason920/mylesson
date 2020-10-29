let startDate;

const fnUpdatePlay = function(date){
	completeObj.play.day_line = date;
	completeObj.play.extend = false;
	console.log(completeObj.play);
	console.log('%cUpdated!', 'color:greenyellow;font-size:20px;');
};

$(()=>{
	const dayLine = completeObj.play.day_line
	if( dayLine ){ 
		$('#runway-finish b').text(dayLine);
		$('#runway-start').hide();
	}
	// console.log('got play');
	const $turtle = $('#runway-time .guest');
	const $robbit = $('#runway-client .guest');
	let turtle = completeObj.play.turtle;
	let robbit = completeObj.play.robbit;
	//
	switch(true){
		case ( turtle - robbit ) >= 20 && turtle >= 50 && completeObj.play.extend:
			$('#runway-extend').show();
			// break;
		case ( turtle - robbit ) >= 20:
			$robbit.addClass('lose-2');
			break;
		case turtle > robbit:
			$robbit.addClass('lose-1');
			break;
		case turtle == 0 && robbit == 0 && ! dayLine:
			$('#runway-start').show();
		default:
	};
	//
	turtle > 99 ? turtle = 'calc(100% + 140px)' : turtle += '%';
	robbit > 99 ? robbit = 'calc(100% + 115px)' : robbit += '%';
	$turtle.css('left', turtle);
	$robbit.css('left', robbit);
	
	// ==========================================
	// == DATE-PICKER v
	// ==========================================
	$('#runway-date').datepicker({showOtherMonths: true});

	$('#runway-month-prev').click(function () {
		$('#runway-date .ui-icon-circle-triangle-w').click();
	});

	$('#runway-month-next').click(function () {
		$('#runway-date .ui-icon-circle-triangle-e').click();
	});

	// ==========================================
	// == EVENTS v
	// ==========================================
	$('#runway-start').click(function(){
		$('#runway-lb, #runway-masker').fadeIn();
	});

	$('#runway-send').click(function(){
		const year = Number( $('#runway-date .ui-datepicker-year').text() );
		const month = Number( $('#runway-date .ui-datepicker-month').text().replace(' 月', '') );
		const date = Number( $('#runway-date .ui-state-active').text() );
		startDate = year + '.' + month +'.' + date;

		// 同年同月 >= 今天
		const sort1 = year == Number(currentWeekYear) && month == Number(currentWeekMonth) && date <= Number(currentDate);
		// 同月小於今年
		const sort2 = month == Number(currentWeekMonth) && year < Number(currentWeekYear);
		// 小於月同年
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
				$('#runway-lb, #runway-masker').fadeOut();
			}
		}
	});

	$('#runway-masker, #runway-cancel, #runway-close').click(function(){
		$('#runway-lb, #runway-masker').fadeOut();
	});

	$('#runway-extend').click(function(){
		const ary = $('#runway-finish b').text().split('.');
		let month = Number( ary[1] ) + 2;// 2 = 每延一次以二個月計
		let year = Number( ary[0] );
		switch(true){
			case month == 13:
				month = 1;
				year = year +1;
				break;
			case month == 14:
				month = 2;
				year = year +1;
				break;
			default:
		}
		const date = year + '.' + month + '.' + ary[2];
		
		// 
		const check = confirm('確定要展廷目標逹成時間至'+date+'?');
		if (check) {
			$('#runway-finish b').text(date);
			fnUpdatePlay(date);
			$(this).fadeOut();
		};
	});
	// $('#runway-start').click();
});
