let newObj = {};
//
let canIAdd = true;
//
let viewMonth;
let viewYear;
let viewWeek;
let viewWeekId;
let viewWeekAry = [];
//
let viewWeekIndex = 0;
const veiwWeekMax = 1;// 僅可見未來一週
let viewWeekMin = -16;// +1 -16 = -15 
// ^ 往前三個月(12週)內 ( 12 = this x 1 + pre x 11 ) 
// ^ 為取得 faceData 近三月完整 data, 需超出以逹目的，而在「face_map.js-fnRecordFaceData」函式完成後回歸 -11** 
//
let weekDataCollected = false;// < weekData 收集完，還 $('#prev-week') 的 printWeekMap 功能 v
//

const viewInit = function(){
	viewMonth = currentWeekMonth;
	viewYear = currentWeekYear;
	viewWeek = currentWeek;
	viewWeekId = currentWeekId;
	viewWeekAry = fnGetViewWeekAry(viewWeek);
}

const fnCreateViewObj = function(ary, year, month, week){	
	newObj = {}
	// ID v
	if( String(week).length < 2 ){ week = '0' + week };
	newObj.dt_id = year + String(week);

	// MUTIPLE v
	newObj.dt_year = Number(year);
	newObj.dt_week = Number(week);
	newObj.dt_month = Number(month);
	newObj.weekly_todos= 0;
	newObj.weekly_truth= 0;
	newObj.weekly_bar1 = 0;
	newObj.weekly_bar2 = 0;
	newObj.weekly_level = 0;
	newObj.weekly_rate = 0;
	newObj.weekly_msg = '本週尚未安排學習課程';
	newObj.date_list = [];

	for (i=0; i<7;i ++) {
		const obj = {}
		obj.date = ary[i];
		obj.daily_done= 0;
		obj.daily_todos = 0;
		obj.daily_truth = 0;
		obj.hours = {m: [], a: [], e: []};
		newObj.date_list.push(obj);
	}

	return newObj;
}


const fnPrintWeekMap = function(id){
	const data = weekData[id];
	let week = -1;
	const ary = data.date_list;
	//
	$('.weekmap-title').text( bus.monthAry[Number(data.dt_month)-1] + ', ' + data.dt_year );
	
	// --------------------------------
	// -- WEEK TITLE HTML v
	// --------------------------------
	let thisWeekIndex = 0;
	const isSameYearMonth = data.dt_year == currentWeekYear && data.dt_month == currentWeekMonth && viewWeekIndex == 1 || viewWeekIndex == -1 || viewWeekIndex == 0;
	//
	$('.weekmap-week').html('');
	let dayStr = '';
	ary.forEach(function(item){
		const date = item.date;
		dayStr += '<div class="weekmap-td';
		if( isSameYearMonth ){
			if( date === currentDate){
				dayStr += " is-today";
				week = thisWeekIndex;
			}
		}
		
		dayStr += '">'
		dayStr += bus.weeklyAry[thisWeekIndex];
		dayStr += '<span class="weekmap-day">'
		if( date.length < 2 ){ dayStr += '0'};
		dayStr += date
		dayStr += '</span>'
		dayStr += '</div>' // -td
		//
		thisWeekIndex ++;
	})

	$('.weekmap-week').html(dayStr);

	// --------------------------------
	// -- WEEK BODY HTML v
	// --------------------------------
	let editStatus = false;
	let passToday = false;
	const subtract = Number(data.dt_week) - Number(currentWeek);
	// 「週」為單位的 editStatus v
	switch(true){
		case data.dt_week >= currentWeek:
			// 同一年 v
			editStatus = true; break;
		case data.dt_week < currentWeek && subtract <= -1:
			// 同一年 v
			editStatus = false; break;
		case data.dt_week < currentWeek && subtract >= 1:
			// 跨年 v
			editStatus = true; break;
		default:
	}
	//
	const hours = new Date().getHours();
	$('.weekmap-date').html('');
	let dateStr = '';
	ary.forEach(function(item, i){
		// 「日」為單位的 editStatus v
		const date = Number(item.date);
		if( data.dt_week == currentWeek ){
			switch(true){
				case date < currentDate:
					editStatus = false;
					break;
				case date > currentDate && (date - currentDate) > 1:
					editStatus = false;
					break;
				default:
					editStatus = true;
					passToday = true;// for 次月的起始日
			}
			if( passToday ){ editStatus = true };
		};
		// --------------------------------
		// --------------------------------
		dateStr += '<div class="weekmap-td" ';
		dateStr += 'data-daily_done="' + ary[i].daily_done + '">';
		for( h in item.hours ){
			// 「時區」為單位的 editStatus v
			if( item.date === currentDate && data.dt_week == currentWeek ){
				switch(true){
					case h === 'm' && hours >= 4:
						editStatus = false;
						break;
					case h === 'a' && hours >= 12:
						editStatus = false;
						break;
					case h === 'e' && hours >= 18:
						editStatus = false;
						break;
					default:
						editStatus = true;
				};
			}
			dateStr += '<div class="weekmap-hours" data-plan="' + editStatus + '">';
			dateStr += '<div class="weekmap-in">';
			item.hours[h].forEach(function(j){
				dateStr += '<div class="weekmap-item" ';
				dateStr += 'data-skin="' + bus.todoList[ j.sort ].skin + '" ';
				dateStr += 'data-sort="' + j.sort + '" ';
				dateStr += 'data-done="' + j.done + '">';
				dateStr += '<div class="weekmap-status"></div>';
				dateStr += '<div class="weekmap-text">' + bus.todoList[ j.sort ].title +'</div>'
				dateStr += '</div>'// -item
			});
			dateStr += '</div>'// -in
			dateStr += '</div>'// -hours
		}
		dateStr += '</div>'// -td
	});

	$('.weekmap-date').html(dateStr);
	$('.weekmap-date .weekmap-td:eq(' + week + ')').addClass('is-today');

	// --------------------------------
	// -- LEVEL v
	// --------------------------------
	$('#achive-level span').text( bus.levelAry[weekData[id].weekly_level] );
	//
	let ml1 = weekData[id].weekly_bar1;
	let ml2 = weekData[id].weekly_bar2;
	if( ml1 == 0 ){ ml1 = 1 };
	if( ml2 == 0 ){ ml2 = 1 };
	$('.achive-bar.is-bar1 .achive-percent').css({left: weekData[id].weekly_bar1+'%', marginLeft: 'calc( -8% / '+ ml1 +')'});
	$('.achive-bar.is-bar2 .achive-percent').css({left: weekData[id].weekly_bar2+'%', marginLeft: 'calc( -8% / '+ ml2 +')'});
	//
	$('#achive-msg, #sticky-msg').text( weekData[id].weekly_msg );
};

const fnGetPrevViewWeekId = function(){
	viewWeek = Number(viewWeek) - 1;
	const viewPreYear = viewYear - 1;
	const preIsMax53 = bus.weekMax53.findIndex( item => item == viewPreYear );
	if( viewWeek == 0 ){
		viewYear --;
		preIsMax53 >= 0 ? viewWeek = 53 : viewWeek = 52;
	}

	// 取得前一個 viewWeekId v
	if( String(viewWeek).length < 2 ){
		viewWeekId = String(viewYear) + '0' + viewWeek;
	}else{
		viewWeekId = String(viewYear) + viewWeek;
	}
};

const fnGeViewWeekMonthAry_prev_next = function(){
	// 確認 DATE-PICKER 是否需退一月 v
	let check = false;
	$('#datepicker .ui-datepicker-week-col').each(function(){
		if( $(this).text() == viewWeek ){ check = true }
	});
	if( !check ){ $('#month-prev').click() };

	// 取值 v
	viewMonth = $('#datepicker .ui-datepicker-month:eq(0)').text().replace(' 月', '');
	viewWeekAry = fnGetViewWeekAry(viewWeek);
}

const fnRecordWeekData = function () {
	if( viewWeekIndex > viewWeekMin ){
		// --------------------------------
		// -- 取得 ID v
		// --------------------------------
		// 取得前一週的 viewWeekYear、viewWeek、viewWeekId v
		fnGetPrevViewWeekId();
		
		// --------------------------------
		// -- API OR 設立虛擬 v
		// --------------------------------
		$.ajax({
			type:"POST",
			url:"./2020/api/Wschedule.asp",
			data:{
				dt_id: viewWeekId
			},
			dataType:"json",
			// API v
			success: function(data){	
				weekData[viewWeekId] = data;
				//
				viewWeekIndex --;
				viewWeekIndex > viewWeekMin ? fnRecordWeekData() : fnRecordWeekData_finish();
			},
			// 設立虛擬 v
			error: function(){
				// 取得前一週的 viewWeekMonth、viewWeekAry v
				fnGeViewWeekMonthAry_prev_next();
				weekData[viewWeekId] = fnCreateViewObj(viewWeekAry, viewYear, viewMonth, viewWeek);
				//
				viewWeekIndex --;
				viewWeekIndex > viewWeekMin ? fnRecordWeekData() : fnRecordWeekData_finish();
			}
		});		
	}
}

const fnRecordWeekData_finish = function(){
	console.log('finish record', weekData);

	// DATE-PICKER v
	fnDatepickerJump(currentWeekYear, currentWeekMonth);

	// weekData 收集完，還 $('#prev-week') printWeekMap 功能 v
	weekDataCollected = true;

	// WEEK MAP v
	viewWeekIndex = 0;
	viewInit();

	// SORT v
	for( id in weekData ){
		for( date in weekData[id].date_list ){
			for( hours in weekData[id].date_list[date].hours ){
				weekData[id].date_list[date].hours[hours].sort(function(n, p){
					if( n.done > p.done ){ return -1 }else{ return 1 };
				})
			}// hours
			for( hours in weekData[id].date_list[date].hours ){
				weekData[id].date_list[date].hours[hours].sort(function(n, p){
					if( bus.todoList[n.sort].skin > bus.todoList[p.sort].skin ){ return 1 }else{ return -1 };
				})// fn sort
			}// hours
		}// date
	}// id

	// NEXT FUNCTION v
	//fId = setInterval(fnRecordFaceData, 0);// in face_map
	fnRecordFaceData();
}

const fnGetNextViewWeekId = function(){
	// WEEK  & YEAR v
	viewWeek = Number(viewWeek) + 1;
	const nextIsMax53 = bus.weekMax53.findIndex( item => item == viewYear );
	if( nextIsMax53 >= 0 ){
		if( viewWeek == 54 ){ 
			viewWeek = 1;
			viewYear ++;
		};
	}else{
		if( viewWeek == 53 ){ 
			viewWeek = 1;
			viewYear ++;
		};
	}

	// ID OF MONTH MUST BE LENGTH = 2 v
	if( String(viewWeek).length < 2 ){
		viewWeekId = String(viewYear) + '0' + viewWeek;
	}else{
		viewWeekId = String(viewYear) + viewWeek;
	}
};

const fnPrevNextCheck = function(id){
	fnCircle(7, weekData[id].weekly_rate/100);
	$('#completebox-7 .completebox-text').text( fnMathRound10(weekData[id].weekly_rate) + '%' ).removeClass('is-un');
	//
	if( viewWeekIndex < 0 ){
		$('#edit-week').addClass('is-muted');
	}else{
		$('#edit-week').removeClass('is-muted');
	}
	if (viewWeekIndex < 1) {
		$('#week-clone').removeClass('is-muted');
	}else{
		$('#week-clone').addClass('is-muted');
	}
}

$(()=>{
	// ==========================================
	// == INIT VAR v
	// ==========================================
	viewInit();

	// 往下一週進一格 v
	// 取得後一週的 viewWeekYear、viewWeek、viewWeekId v
	// 取得後一週的 viewWeekMonth、viewWeekAry v
	fnGetNextViewWeekId();
	fnGeViewWeekMonthAry_prev_next();
	
	$.ajax({
		type:"POST",
		url:"./2020/api/Wschedule.asp",
		data:{
			dt_id: viewWeekId
		},
		dataType:"json",
		success:function(data){	
			weekData[viewWeekId] = data;
			fnRecordWeekData();
		},
		error:function(){
			weekData[viewWeekId] = fnCreateViewObj(viewWeekAry, viewYear, viewMonth, viewWeek);
			fnRecordWeekData();
		}
	});

	// ==========================================
	// == ACTION EVENT v
	// ==========================================	
	$('#prev-week').click(function(){
		fnDatepickerJump(viewYear, viewMonth);
		$('#next-week').fadeIn();
		if( viewWeekIndex > viewWeekMin ){
			// 取得前一週的 viewWeekYear、viewWeek、viewWeekId v
			// 取得前一週的 viewWeekMonth、viewWeekAry v
			fnGetPrevViewWeekId();
			fnGeViewWeekMonthAry_prev_next();
			
			// 渲染週曆 v
			if( weekDataCollected ){ fnPrintWeekMap(viewWeekId) };

			// VISION LOGICS v
			viewWeekIndex --;
			fnPrevNextCheck(viewWeekId);
			if( viewWeekIndex == viewWeekMin ){ $('#prev-week').fadeOut() };
		}
	});

	$('#next-week').click(function(){
		fnDatepickerJump(viewYear, viewMonth);
		$('#prev-week').fadeIn();
		if( viewWeekIndex < veiwWeekMax ){
			// 取得後一週的 viewWeekYear、viewWeek、viewWeekId v
			// 取得後一週的 viewWeekMonth、viewWeekAry v
			fnGetNextViewWeekId();
			fnGeViewWeekMonthAry_prev_next();
			
			// 渲染週曆 v
			fnPrintWeekMap( viewWeekId );

			// VISION LOGICS v
			viewWeekIndex ++;
			fnPrevNextCheck(viewWeekId);
			if( viewWeekIndex == veiwWeekMax ){ $('#next-week').fadeOut(); }
		}
	});

	$('#week-clone').click(function(){
		const delay = 600;
		const check = confirm('確定要將此週的學習排程\n複製到未來一週嗎?\n*己安排的排程將會被覆蓋');
		if( check ){
			$('#load-cal').fadeIn(delay);
			$('#calbox, #achive, #facemap-open').fadeOut(delay);
			const obj = fnWeekObjMemo('clone');
			// nextWeekAry
			//--------------------------
			setTimeout(()=>{
				// 1. WEEK MAP INIT v
				fnPrintWeekMap(currentWeekId);
				viewWeekIndex = 0;
				viewInit();

				// 2. DATE-PICKER & FACE MAP INIT v
				fnDatepickerJump(currentWeekYear, currentWeekMonth);
				fnPrintFaceMap(currentFaceId);

				// 3. GET NEXT WEEK & FIX OBJ v
				$('#next-week').click();
				weekData[viewWeekId] = obj;
				weekData[viewWeekId].date_list.forEach(function(item, i){
					item.date = viewWeekAry[i];
				});
				weekData[viewWeekId].dt_year = viewYear;
				weekData[viewWeekId].dt_month = viewMonth;
				weekData[viewWeekId].dt_week = viewWeek
				weekData[viewWeekId].dt_id = viewWeekId;
				weekData[viewWeekId].weekly_bar1 = 0;
				weekData[viewWeekId].weekly_bar2 = 0;
				weekData[viewWeekId].weekly_level = 0;
				weekData[viewWeekId].weekly_msg = '尚待咨詢師分析';
				weekData[viewWeekId].weekly_rate = 0;

				// 4. PRINT & FINISH v
				fnPrintWeekMap(viewWeekId);
				$('#load-cal').fadeOut();
				$('#calbox, #achive, #facemap-open').fadeIn();

				fnWeekObjUpdate(obj);
			}, delay);
		};
	});
});