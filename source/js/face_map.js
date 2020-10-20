let apiFace = {};
let faceAry = {};
let fId;
let doAdd = true;
let faceId;
//
let monthMax = 2;
let monthLength = 0;
let monthCutId;

const fnRecolrApiFace = function(){
	// --------------------------------
	// -- CURR WEEK v
	// --------------------------------
	const currMonth = viewMonth;
	if (doAdd) {
		if (String(viewMonth).length < 2) {
			faceId = viewYear + '0' + viewMonth;
		} else {
			faceId = viewYear + String(viewMonth);
		};

		apiFace[faceId] = {};
		apiFace[faceId].week_list = [];

		let weekId;
		let weekLength = -1;
		
		$('.ui-datepicker-group-first tbody tr').each(function (i) {
			weekLength ++
			const week = $(this).find('.ui-datepicker-week-col').text();
			apiFace[faceId].week_list.push({ week });
			//
			apiFace[faceId].week_list[i].date = [];
			apiFace[faceId].week_list[i].daily_done = [];
			//
			if (String(week).length < 2) {
				weekId = viewYear + '0' + String(week);
			} else {
				weekId = viewYear + String(week);
			};
			if (apiWeek[weekId]) {
				// apiFace[faceId].week_list[i].weekly_todos = apiWeek[weekId].weekly_todos;
				// apiFace[faceId].week_list[i].weekly_truth = apiWeek[weekId].weekly_truth;

				for (a in apiWeek[weekId].date_list ){
					apiFace[faceId].week_list[i].date.push( apiWeek[weekId].date_list[a].date );
					apiFace[faceId].week_list[i].daily_done.push( apiWeek[weekId].date_list[a].daily_done );
				};

				
				// console.log(i, i==0, apiWeek[weekId]);
				// console.log(i, i == 6, apiWeek[weekId]);
			};

			// console.log(weekLength);
			apiFace[faceId].week_length = weekLength;
		});
		
		console.log('-----');

		// apiFace[faceId].monthly_todos = mTodos;
		// apiFace[faceId].monthly_truth = mTruth;
		// console.log( apiFace[faceId]. );

		doAdd = false;
	}

	// --------------------------------
	// -- PREV WEEK v 
	// --------------------------------
	recordIndex++;
	$('#prev-week').click();// < ** 連動「viewWeekId 退位」程式**

	
	const prevMonth = viewMonth;
	if (currMonth != prevMonth) { 
		doAdd = true;

		// 紀錄滿溢的 faceId
		monthLength ++;
		if( monthLength > monthMax ){
			if (String(viewMonth).length < 2) {
				monthCutId = viewYear + '0' + viewMonth;
			} else {
				monthCutId = viewYear + String(viewMonth);
			};
		};

		// sum total v
		mTodos = 0;
		mTruth = 0;
	};

	// --------------------------------
	// -- DONE & INIT v
	// --------------------------------
	if (recordIndex > recordMax) {
		clearInterval(fId);
		delete apiFace[monthCutId];

		// WEEK MAP v
		fnPrintWeekMap(currentWeekId);
		viewWeekIndex = 0;
		viewMonth = currentWeekMonth;
		viewYear = currentWeekYear;
		viewWeek = currentWeek;
		viewWeekId = currentWeekId;
		viewWeekAry = currentWeekAry;
		viewWeekMin = -11;// 11+1 = 12 = 三個月
		
		// DATE-PICKER & FACE MAP v
		fnDatepickerJump(currentWeekYear, currentWeekMonth);
		fnPringFaceMap( currentFaceId );

		// VISION v
		$('#prev-week').fadeIn();
		$('#edit-week').removeClass('is-unedit');
		$('#load-cal').fadeOut();
		$('#calbox, #achive').fadeIn();

		fnCircle('#completebox-week .completebox-vision', .5, color_7, 800);
		fnCircle('#completebox-month .completebox-vision', .77, color_30, 1400);

		// CHECK v
		fnApiFaceCheck();
		console.log(apiFace);
	}
};

// [28,29,30,1,2,3,4], 2020, 10, 40, 202040
// ary = [28,29,30,1,2,3,4]
// year = 2020
// month = 10
// week = 40
// id = 202040
const fnApiFaceCheck = function(){
	// console.log( currentWeekId , id, id < currentWeekId);
	console.log( currentFaceId );
	for( id in apiFace ){
		// console.log(id, id < currentFaceId);
		// 過去月份 v
		if ( id < currentFaceId ) {
			for (i in apiFace[id].week_list) {
				// 1. 補空視覺白 (0 改作 3) v
				for(done in apiFace[id].week_list[i].daily_done){
					if( apiFace[id].week_list[i].daily_done[done] == 0 ){
						apiFace[id].week_list[i].daily_done[done] = 3
					} // if
				} // done

				// 2. 第一週的上月 date 改作 0 v
				if( i == 0 ){
					// console.log('is first', apiFace[id].week_list[i]);
					for( date in apiFace[id].week_list[i].date ){
						if( apiFace[id].week_list[i].date[date] > 7 ){
							apiFace[id].week_list[i].daily_done[date] = 0;
						} // if
					} // date
				}
	
				// 3. 最後週的下月 date 改作 0 v
				if( i == apiFace[id].week_length ){
					// console.log('is last', apiFace[id].week_list[i]);
					for( date in apiFace[id].week_list[i].date ){
						if( apiFace[id].week_list[i].date[date] < 7 ){
							apiFace[id].week_list[i].daily_done[date] = 0;
						} // if
					} // date
				}
			} // i

		}// if

		// 本月 v
		if ( id = currentFaceId ) {
			console.log(id);
		}// if
	}// id

	// // DAILY DONE : WEEK v
	// let dd;
	// let dd_check = false;
	// switch(true){
	// 	// 過去的週 v
	// 	case id < currentWeekId: 
	// 		dd = 3;
	// 		break;
	// 	case id == currentWeekId:
			
	// 		break;
	// 	// 未來的週 v
	// 	case id > currentWeekId:
	// 		dd = 0;
	// 		break;
	// 	// 本週 v
	// 	default:
	// 		console.log('the same week');
	// 		dd_check = true;
	// };

	// // DAILY DONE : DATE v
	// console.log(ary[i]);
	// if( dd_check ){
	// 	console.log(ary[i], ary[i] > currentDate );
	// 	switch(true){
	// 		// 下月的頭日(小) v
	// 		case (ary[i] - currentDate) < -20:
	// 			dd = 0;
	// 			break;
	// 		// 上月的尾日(大) v
	// 		case (ary[i] - currentDate) > 20 :
	// 			dd = 3;
	// 			break;
	// 		// 同月的過去日 v
	// 		case ary[i] < currentDate:
	// 			dd = 3;
	// 			break;
	// 		// 同月的未來日 v
	// 		case ary[i] > currentDate:
	// 			dd = 0;
	// 			break;
	// 		// 同一天
	// 		default:
	// 			dd = 'today';
	// 	}
	// }
}

const fnPringFaceMap = function(id){
	$('#facemap').html('');
	const wl = apiFace[id].week_list;
	// console.log( wl );
	let str = '';
	for(w in wl){
		const complete = wl[w]
		str += '<div class="facemap-link" data-week-conplete="' + complete + '">'
		for ( d in wl[w].date ){
			str += '<div class="facemap-item" data-date="' + wl[w].date[d]
			str += '" data-face="' + wl[w].daily_done[d] + '">'
			str += '<div></div>'
			str += '</div>' // -item
		}
		str += '</div>' // -link
	}
	// console.log(id, str);
	$('#facemap').append(str);
};

const fnCircle = function(selector, value, color, duration){
	$selector = $(selector)
	$selector.circleProgress({
		startAngle: 4.7,
		value,
		fill: {color},
		emptyFill: '#E8E9ED',
		animation: {
			duration,
			// easing: 'linear'
		},
		animationStartValue: 0.0,
		size: 65,
		thickness: '5'
	});

	// $('#completebox-week .completebox-text').text( apiWeek[id].weekly_rate + '%' );
	if( selector == '#completebox-week .completebox-vision'  ){

		$selector.find('.completebox-text').text( apiWeek[currentWeekId].weekly_rate + '%' )
	}
};

$(()=>{
	// file:week_map.js-fn:fnRecordApiWeek -> file:face_map.js-fn:fnRecolrApiFace ->fn:fnPringFaceMap
	$('#month-pre').click(function () {
		$('.ui-icon-circle-triangle-w').click();
		fnCircle('#completebox-month .completebox-vision', .15, color_30, 800);
	});

	$('#month-nex').click(function () {
		$('.ui-icon-circle-triangle-e').click();

		fnCircle('#completebox-month .completebox-vision', .90, color_30, 800);
	});

	$('#month-pre, #month-nex').click(function () {
		let id = fnGetThisYear() + fnGetThisMonth();
		console.log( id );
		if( !apiFace[id] ){
			$('#facemap').html('');
		}else{
			fnPringFaceMap( fnGetThisYear() + fnGetThisMonth() );
		};

		
	});
})