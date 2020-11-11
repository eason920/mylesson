let startDate;

const playInit = function(){
	const dayLine = completeObj.play.day_line
	if( dayLine ){ 
		$('#runway-finish b').text(dayLine);
		$('#runway-start').hide();
	}
	// console.log('got play');
	const $turtle = $('#runway-time .guest');
	const $rabbit = $('#runway-client .guest');
	let turtle = completeObj.play.turtle;
	let rabbit = completeObj.play.rabbit;
	
	const subtract = (turtle - rabbit) >= 20;
	// 「START」顯示邏輯 v
	if( turtle == 0 && rabbit == 0 && ! dayLine ){ $('#runway-start').show() };

	// 「延長時間「顯示邏輯 v
	if( subtract && turtle >= 50 && !completeObj.play.extend ){
		$rabbit.find('.status').css('display', 'flex').text('延長時間?').addClass('is-extend');
	}

	// 「落後程度」的視覺邏輯 v
	switch(true){
		case subtract:
			$rabbit.addClass('lose-2');
			break;
		case turtle > rabbit:
			$rabbit.addClass('lose-1');
			break;
		default:
	};

	// 「成功/失敗」視覺邏輯 v
	const cssAniTime = 600;
	switch(true){
		case rabbit >= 100 && turtle <= 100:
			setTimeout(function(){
				$rabbit.find('.status').css('display', 'flex').html('成功!<br><b>重開新局?</b>').addClass('is-success');
			}, cssAniTime);
			break;
			case rabbit <= 100 && turtle >= 100 && !completeObj.play.extend:
				setTimeout(function(){
					$rabbit.find('.status').css('display', 'flex').html('失敗!<br><b>延長時間?</b>').addClass('is-extend');
				}, cssAniTime);
				break;
				case rabbit <= 100 && turtle >= 100 && completeObj.play.extend:
					setTimeout(function(){
						$rabbit.find('.status').css('display', 'flex').html('失敗...<br><b>重新開始?</b>').addClass('is-restart');
					}, cssAniTime);
				break;
			default:
		};
	//
	turtle >= 100 ? turtle = 'calc(100% + 140px)' : turtle += '%';
	rabbit >= 100 ? rabbit = 'calc(100% + 115px)' : rabbit += '%';

	// 給值 v
	$turtle.css('left', turtle);
	$rabbit.css('left', rabbit);
}

const fnUpdatePlay = function(date){
	completeObj.play.day_line = date;
	completeObj.play.extend = false;
	console.log(completeObj.play);
	console.log('%cUpdated!', 'color:greenyellow;font-size:20px;');
};

const fnAfterUpdatePlay = function(){
	$.ajax({
		type: "POST",
		url: "./2020/API/running.asp",
		success: function(res){
			completeObj = JSON.parse(res);
			playInit();
		}
	});
};

$(()=>{
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
	// 開始鈕的顯示 v
	$('#runway-start').click(function(){
		$('#runway-lb, #runway-masker').fadeIn();
	});

	$('#runway-client .guest').on('click', '.is-restart', function(){
		$('#runway-lb, #runway-masker').fadeIn();
	});

	$('#runway-client .guest').on('click', '.is-success', function(){
		$('#runway-lb, #runway-masker').fadeIn();
	})

	// OTHER v
	$('#runway-send').click(function(){
		const year = Number( $('#runway-date .ui-datepicker-year').text() );
		const month = Number( $('#runway-date .ui-datepicker-month').text().replace(' 月', '') );
		const date = Number( $('#runway-date .ui-state-active').text() );
		startDate = year + '/' + month +'/' + date;

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
				$('#runway-client .guest .status').hide();
				$('#runway-client .guest').removeClass('lose-1');
				$('#runway-client .guest').removeClass('lose-2');
				$.ajax({
					type: "POST",
					// url: "./2020/api/runningUpdate.asp?day_line=2020/11/5&Rstart=R",
					url: "./2020/api/runningUpdate.asp?day_line="+startDate+"&Rstart=R",
					success: function(res){
						console.log(res);
						$('#runway-finish b').text(startDate);
						$('#runway-start').fadeOut();
						$('#runway-lb, #runway-masker').fadeOut();

						// init v
						fnAfterUpdatePlay();
					}
				});
			}
		}
	});

	$('#runway-masker, #runway-cancel, #runway-close').click(function(){
		$('#runway-lb, #runway-masker').fadeOut();
	});

	$('#runway-client').on('click', '.is-extend', function(){
		const ary = $('#runway-finish b').text().split('-');
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
		const date = year + '/' + month + '/' + ary[2];
		
		// 
		const check = confirm('確定要展廷目標逹成時間至'+date+'?');
		console.log('api', "./2020/api/runningUpdate.asp?day_line="+date);
		if (check) {
			$.ajax({
				type: "POST",
				// url: "./2020/api/runningUpdate.asp?day_line=2020/11/5&Rstart=R",
				url: "./2020/api/runningUpdate.asp?day_line="+date,
				success: function(res){
					console.log(res);
					const $rabbit = $('#runway-client .guest');
					// vision v
					$('#runway-finish b').text(date);
					// fnUpdatePlay(date);
					$('#runway-client .is-extend').fadeOut();
					$rabbit.removeClass('lose-1');
					$rabbit.removeClass('lose-2');

					// init v
					fnAfterUpdatePlay();
				}
			});
		};
	});
	// $('#runway-start').click();
});
