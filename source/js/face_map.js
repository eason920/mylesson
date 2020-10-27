let faceData = {};
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

const fnRecordFaceData = function(){
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

		faceData[faceId] = {};
		faceData[faceId].week_list = [];

		let weekId;
		let weekLength = -1;
		
		$('#datepicker .ui-datepicker-group-first tbody tr').each(function (i) {
			weekLength ++
			const week = $(this).find('.ui-datepicker-week-col').text();
			faceData[faceId].week_list.push({ week });
			//
			faceData[faceId].week_list[i].date = [];
			faceData[faceId].week_list[i].daily_done = [];
			//
			if (String(week).length < 2) {
				weekId = viewYear + '0' + String(week);
			} else {
				weekId = viewYear + String(week);
			};
			if (weekData[weekId]) {
				for (a in weekData[weekId].date_list ){
					faceData[faceId].week_list[i].date.push( weekData[weekId].date_list[a].date );
					faceData[faceId].week_list[i].daily_done.push( weekData[weekId].date_list[a].daily_done );
				};
			};

			faceData[faceId].week_length = weekLength;
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
		delete faceData[monthCutId];

		// CHECK v
		fnfaceDataCheck();

		// WEEK MAP v
		fnPrintWeekMap(currentWeekId);
		viewWeekIndex = 0;
		viewMonth = currentWeekMonth;
		viewYear = currentWeekYear;
		viewWeek = currentWeek;
		viewWeekId = currentWeekId;
		viewWeekAry = currentWeekAry;
		// viewWeekMin = -11;// 11+1 = 12 = 三個月
		
		// DATE-PICKER & FACE MAP v
		fnDatepickerJump(currentWeekYear, currentWeekMonth);
		fnPrintFaceMap( currentFaceId );
		
		// VISION v
		$('#prev-week').fadeIn();
		$('#edit-week').removeClass('is-muted');
		$('#week-clone').removeClass('is-muted');
		$('#load-cal').fadeOut();
		$('#calbox, #achive, #facemap-open').fadeIn();

		// CIRCLE ANIMATE v
		// week
		fnCircle(7, weekData[currentWeekId].weekly_rate/100);
		$('#completebox-7 .completebox-text').text( weekData[currentWeekId].weekly_rate + '%' ).removeClass('is-un');
		// month
		fnCircle(30, completeObj.monthy[currentFaceId]/100 );
		$('#completebox-30 .completebox-text').text( completeObj.monthy[currentFaceId] + '%' ).removeClass('is-un');
		// season
		fnCircle(90, completeObj.seasons[1].rate/100 );
		$('#completebox-90 .completebox-text').text( completeObj.seasons[1].rate + '%' ).removeClass('is-un');

		console.log(faceData);
	}
};

// [28,29,30,1,2,3,4], 2020, 10, 40, 202040
// ary = [28,29,30,1,2,3,4]
// year = 2020
// month = 10
// week = 40
// id = 202040
const fnfaceDataCheck = function(){
	// currentDate = 28
	// currentWeekEq = 0
	const fnLess7 = function(){
		for( date in faceData[id].week_list[i].date ){
			if( faceData[id].week_list[i].date[date] > 7 ){
				faceData[id].week_list[i].daily_done[date] = 0;
			} // if
		} // date
	}
	for( id in faceData ){
		// 過去月份 v
		if ( id < currentFaceId ) {
			for (i in faceData[id].week_list) {
				// 1. 補空視覺白 (0 改作 3) v
				for(done in faceData[id].week_list[i].daily_done){
					if( faceData[id].week_list[i].daily_done[done] == 0 ){
						faceData[id].week_list[i].daily_done[done] = 3
					} // if
				} // done

				// 2. 第一週的上月 date 改作 0 v
				if( i == 0 ){
					// console.log('is first', faceData[id].week_list[i]);
					fnLess7();
				}
	
				// 3. 最後週的下月 date 改作 0 v
				if( i == faceData[id].week_length ){
					// console.log('is last', faceData[id].week_list[i]);
					for( date in faceData[id].week_list[i].date ){
						if( faceData[id].week_list[i].date[date] < 7 ){
							faceData[id].week_list[i].daily_done[date] = 0;
						} // if
					} // date
				}
			} // i

		}// if

		// 本月 v
		if ( id == currentFaceId ) {
			for (i in faceData[id].week_list) {
				if( currentWeekEq != 0 && i == 0 ){
					// 1.第一週的上月 date 改作 0 v
					console.log('本週「不」是「第一」週');
					fnLess7();
				};// if
			}; // i
		}// if
	}// id
}

const fnPrintFaceMap = function(id){
	$('#facemap').html('');
	const wl = faceData[id].week_list;
	// console.log( wl );
	let str = '';
	for(w in wl){
		const complete = wl[w]
		// str += '<div class="facemap-link" data-week-conplete="' + complete + '">'
		str += '<div class="facemap-link">'
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

const fnCreateSeasonObj = function(index, year, season){
	completeObj.seasons[index] = {};
	completeObj.seasons[index].year = year;
	completeObj.seasons[index].season = season;
	completeObj.seasons[index].rate = 0;
}

$(()=>{
	// ==========================================
	// == 開頁運作邏輯 v
	// ==========================================
	// file:week_map.js-fn:fnRecordweekData v
	// file:face_map.js-fn:fnRecordFaceData v
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
	for( a in bus.season_area ){
		let cur = bus.season_area[a].findIndex( item=> item == currentWeekMonth );
		let pre1 = bus.season_area[a].findIndex( item=> item == preMonth1);
		let pre2 = bus.season_area[a].findIndex( item=> item == preMonth2);
		//
		if( cur >= 0){ currentSeason = a };
		if( pre1 >= 0){ preMonthSeason1 = a };
		if( pre2 >= 0){ preMonthSeason2 = a };
	};

	// ==========================================
	// == 確認無季 DATA 就收集 v
	// ==========================================
	if( !completeObj.seasons[0] ){
		// 第一季 v
		fnCreateSeasonObj(0, currentWeekYear, currentSeason);

		// 可能有的前一季 v
		switch(true){
			// 前一月可能就換季 v
			case preMonthSeason1 != currentSeason:
				fnCreateSeasonObj(1, preMonthYear1, preMonthSeason1);
				break;
			// 前二月可能才換季 v
			case preMonthSeason2 != currentSeason:
				fnCreateSeasonObj(1, preMonthYear2, preMonthSeason2);
				break;
			// 本、前一、前二都在同一季就不用建立了 v
			default:
		}
	};
	console.log( 'seasonData ', completeObj.seasons );

	// ==========================================
	// == EVENTS v
	// ==========================================
	$('#month-prev').click(function () {
		$('#datepicker .ui-icon-circle-triangle-w').click();
	});

	$('#month-next').click(function () {
		$('#datepicker .ui-icon-circle-triangle-e').click();
	});
	
	$('#month-prev, #month-next').click(function () {
		let id = fnGetThisYear() + fnGetThisMonth();
		// --------------------------------
		// -- 處理「月」v 
		// --------------------------------
		if( !faceData[id] ){
			// HTML v
			$('#facemap').html('');

			// CIRCLE ANIMATE v
			let text;
			id > currentFaceId? text='尚無紀錄' : text='紀錄過期'
			fnCircle(30, 0 );
			$('#completebox-30 .completebox-text').text( text ).addClass('is-un');
		}else{
			// HTML v
			fnPrintFaceMap( fnGetThisYear() + fnGetThisMonth() );

			// CIRCLE ANIMATE v
			fnCircle(30, completeObj.monthy[id]/100 );
			$('#completebox-30 .completebox-text').text( completeObj.monthy[id] + '%' ).removeClass('is-un');
		};

		// --------------------------------
		// -- 處理「季」v
		// --------------------------------
		const month = fnGetThisMonth();
		const fnOnTime = function(a){
			if( completeObj.seasons[a].rate !=  $('#completebox-90 .completebox-text').text().replace('%', '') ){
				fnCircle(90, completeObj.seasons[a].rate/100 );
				$('#completebox-90 .completebox-text').text( completeObj.seasons[a].rate + '%' ).removeClass('is-un');
			}
		};

		switch(true){
			case month == currentWeekMonth:
				for( a in completeObj.seasons ){
					if( completeObj.seasons[a].year ==  currentWeekYear && completeObj.seasons[a].season == currentSeason ){
						fnOnTime(a);
					};
				};
				break;
			case month == preMonth1:
				for( a in completeObj.seasons ){
					if( completeObj.seasons[a].year ==  preMonthYear1 && completeObj.seasons[a].season == preMonthSeason1 ){
						fnOnTime(a);
					};
				};
				break;
			case month == preMonth2:
				for( a in completeObj.seasons ){
					if( completeObj.seasons[a].year ==  preMonthYear2 && completeObj.seasons[a].season == preMonthSeason2 ){
						fnOnTime(a);
					};
				};
				break;
			case id > currentFaceId:
				fnCircle(90, 0 );
				$('#completebox-90 .completebox-text').text( '尚無紀錄' ).addClass('is-un');
				break;
			case id < currentFaceId:
				fnCircle(90, 0 );
				$('#completebox-90 .completebox-text').text( '紀錄過期' ).addClass('is-un');
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