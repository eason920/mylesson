let apiFace = {};
let faceAry = {};
let fId;
let doAdd = true;
let faceId;
//
let monthMax = 2;
let monthLength = 0;
let monthCutId;
//
let preMonth1
let preMonth2
//
let currentSeason;
let preMonthSeason1;
let preMonthSeason2;
//
let preMonthYear1;
let preMonthYear2;

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
				for (a in apiWeek[weekId].date_list ){
					apiFace[faceId].week_list[i].date.push( apiWeek[weekId].date_list[a].date );
					apiFace[faceId].week_list[i].daily_done.push( apiWeek[weekId].date_list[a].daily_done );
				};
			};

			apiFace[faceId].week_length = weekLength;
		});
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
		fnPrintFaceMap( currentFaceId );
		
		// VISION v
		$('#prev-week').fadeIn();
		$('#edit-week').removeClass('is-unedit');
		$('#load-cal').fadeOut();
		$('#calbox, #achive').fadeIn();

		// CIRCLE ANIMATE v
		// week
		fnCircle(7, apiWeek[currentWeekId].weekly_rate/100);
		$('#completebox-7 .completebox-text').text( apiWeek[currentWeekId].weekly_rate + '%' );
		// month
		fnCircle(30, completeObj.monthy[currentFaceId]/100 );
		$('#completebox-30 .completebox-text').text( completeObj.monthy[currentFaceId] + '%' );
		// season
		fnCircle(90, completeObj.seasons[1].rate/100 );
		$('#completebox-90 .completebox-text').text( completeObj.seasons[1].rate + '%' );

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
	// console.log( currentFaceId );
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

const fnPrintFaceMap = function(id){
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
	
	$('#facemap').append(str);
};

let viewSeason;
$(()=>{
	// ==========================================
	// == 開頁運作邏輯 v
	// ==========================================
	// file:week_map.js-fn:fnRecordApiWeek v
	// file:face_map.js-fn:fnRecolrApiFace v
	// 同檔-fn:fnPrintFaceMap

	// ==========================================
	// == INIT v
	// ==========================================
	// 取前二月各自的月數 & 年數 v
	// currentWeekMonth = 1
	switch(true){
		case currentWeekMonth == 2:
			preMonth1 = 1;
			preMonthYear1 = currentWeekYear;
			//
			preMonth2 = 12;
			preMonthYear2 = Number(currentWeekYear) - 1
			break;
		case currentWeekMonth == 1:
			preMonth1 = 12;
			preMonthYear1 = Number(currentWeekYear) - 1
			//
			preMonth2 = 11;
			preMonthYear2 = Number(currentWeekYear) - 1
			break;
		default:
			preMonth1 = currentWeekMonth - 1;
			preMonthYear1 = currentWeekYear;
			//
			preMonth2 = currentWeekMonth - 2;
			preMonthYear2 = currentWeekYear;
	};
	// console.log(currentWeekMonth, preMonth1, preMonth2);
	// console.log( currentWeekYear, preMonthYear1, preMonthYear2);

	// 取前二月各自的季數 v
	for( a in completeObj.season_area ){
		let cur = completeObj.season_area[a].findIndex( item=> item == currentWeekMonth );
		let pre1 = completeObj.season_area[a].findIndex( item=> item == preMonth1);
		let pre2 = completeObj.season_area[a].findIndex( item=> item == preMonth2);
		//
		if( cur >= 0){ currentSeason = a };
		if( pre1 >= 0){ preMonthSeason1 = a };
		if( pre2 >= 0){ preMonthSeason2 = a };
	};
	// console.log(currentSeason, preMonthSeason1, preMonthSeason2);

	// ==========================================
	// == EVENTS v
	// ==========================================
	$('#month-pre').click(function () {
		$('.ui-icon-circle-triangle-w').click();
	});

	$('#month-nex').click(function () {
		$('.ui-icon-circle-triangle-e').click();
	});
	
	$('#month-pre, #month-nex').click(function () {
		let id = fnGetThisYear() + fnGetThisMonth();
		// --------------------------------
		// -- 處理「月」v 
		// --------------------------------
		if( !apiFace[id] ){
			// HTML v
			$('#facemap').html('');

			// CIRCLE ANIMATE v
			let text;
			id > currentFaceId? text='尚無紀錄' : text='紀錄過期'
			fnCircle(30, 0 );
			$('#completebox-30 .completebox-text').text( text );
		}else{
			// HTML v
			fnPrintFaceMap( fnGetThisYear() + fnGetThisMonth() );

			// CIRCLE ANIMATE v
			fnCircle(30, completeObj.monthy[id]/100 );
			$('#completebox-30 .completebox-text').text( completeObj.monthy[id] + '%' );
		};

		// --------------------------------
		// -- 處理「季」v
		// --------------------------------
		const month = fnGetThisMonth();
		const fnOnTime = function(){
			if( completeObj.seasons[a].rate !=  $('#completebox-90 .completebox-text').text().replace('%', '') ){
				fnCircle(90, completeObj.seasons[a].rate/100 );
				$('#completebox-90 .completebox-text').text( completeObj.seasons[a].rate + '%' );
			}
		};

		switch(true){
			case month == currentWeekMonth:
				for( a in completeObj.seasons ){
					if( completeObj.seasons[a].year ==  currentWeekYear && completeObj.seasons[a].season == currentSeason ){
						fnOnTime();
					};
				};
				break;
			case month == preMonth1:
				for( a in completeObj.seasons ){
					if( completeObj.seasons[a].year ==  preMonthYear1 && completeObj.seasons[a].season == preMonthSeason1 ){
						fnOnTime();
					};
				};
				break;
			case month == preMonth2:
				for( a in completeObj.seasons ){
					if( completeObj.seasons[a].year ==  preMonthYear2 && completeObj.seasons[a].season == preMonthSeason2 ){
						fnOnTime();
					};
				};
				break;
			case id > currentFaceId:
				fnCircle(90, 0 );
				$('#completebox-90 .completebox-text').text( '尚無紀錄' );
				break;
			case id < currentFaceId:
				fnCircle(90, 0 );
				$('#completebox-90 .completebox-text').text( '紀錄過期' );
				break;
			default:
		};
	});

	$('#facemap-open').click(function(){
		$('#facemap-lb').toggle();
		// $('#facemap-lb').toggleClass('is-show');
	});
	// $('#facemap-open').click();
})