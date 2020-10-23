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
let viewWeekMin = -15; 
// ^ 往前三個月(12週)內 ( 12 = this x 1 + pre x 11 ) 
// ^ 為取得 apiFace 近三月完整 data, 需超出以逹目的，而在「face_map.js-fnRecolrApiFace」函式完成後回歸 -11** 
// const recordIndex = viewWeekMin * -1;
const recordMax = viewWeekMin * -1;
let recordIndex = 0;
let wId;
//

const fnCreateViewObj = function(ary, year, month, week, id){	
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
	newObj.weekly_rate = 0;
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
	apiWeek[id] = newObj;
}

const fnPrintWeekMap = function(id){
	let data;
	if( !apiWeek[id] ){
		fnCreateViewObj(viewWeekAry, viewYear, viewMonth, viewWeek, viewWeekId );
	}
	data = apiWeek[id];
	let week = -1;
	const ary = data.date_list;
	//
	$('.weekmap-title').text( bus.monthAry[Number(data.dt_month)-1] + ', ' + data.dt_year );
	
	// --------------------------------
	// -- WEEK TITLE HTML v
	// --------------------------------
	let thisWeekIndex = 0;
	const isSameYearMonth = data.dt_year == currentWeekYear && data.dt_month == currentWeekMonth;
	//
	$('.weekmap-week').html('');
	let dayStr = '';
	ary.forEach(function(item){
		const date = item.date;
		dayStr += '<div class="weekmap-td';
		if( isSameYearMonth ){
			if( date === currentDate ){
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
					case h === 'm' && hours >= 12:
						editStatus = false;
						break;
					case h === 'a' && hours >= 18:
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
	$('#achive-level span').text( bus.levelAry[apiWeek[id].weekly_level] );
	//
	let ml1 = apiWeek[id].weekly_bar1;
	let ml2 = apiWeek[id].weekly_bar2;
	if( ml1 == 0 ){ ml1 = 1 };
	if( ml2 == 0 ){ ml2 = 1 };
	$('.achive-bar.is-bar1 .achive-percent').css({left: apiWeek[id].weekly_bar1+'%', marginLeft: 'calc( -8% / '+ ml1 +')'});
	$('.achive-bar.is-bar2 .achive-percent').css({left: apiWeek[id].weekly_bar2+'%', marginLeft: 'calc( -8% / '+ ml2 +')'});
	//
	$('#achive-msg, #sticky-msg').text( apiWeek[id].weekly_msg );
};

const fnRecordApiWeek = function () {
	$('#prev-week').click(); // < ** 連動「viewWeekId 退位」程式**
	recordIndex++;
	if (recordIndex >= recordMax) {
		clearInterval(wId);

		// DATE-PICKER v
		fnDatepickerJump(currentWeekYear, currentWeekMonth);

		// WEEK MAP v
		viewWeekIndex = 0;
		viewMonth = currentWeekMonth;
		viewYear = currentWeekYear;
		viewWeek = currentWeek;
		viewWeekId = currentWeekId;
		viewWeekAry = fnGetViewWeekAry(viewWeek);

		// NEXT FUNCTION v
		console.log(apiWeek);
		recordIndex = 0;
		fId = setInterval(fnRecolrApiFace, 0);// in face_map
	}
}

$(()=>{
	// ==========================================
	// == INIT VAR v
	// ==========================================
	viewMonth = currentWeekMonth;
	viewYear = currentWeekYear;
	viewWeek = currentWeek;
	viewWeekId = currentWeekId;
	viewWeekAry = fnGetViewWeekAry(viewWeek);
	//
	if (!apiWeek[currentWeekId]) {
		fnCreateViewObj(viewWeekAry, viewYear, viewMonth, viewWeek, viewWeekId);
	};
	//
	wId = setInterval( fnRecordApiWeek, 0);

	// ==========================================
	// == ACTION EVENT v
	// ==========================================	
	$('#prev-week').click(function(){
		// fnDatepickerJump(fnGetThisYear(), fnGetThisMonth());
		fnDatepickerJump(viewYear, viewMonth);
		$('#next-week').fadeIn();
		if( viewWeekIndex > viewWeekMin ){
			// WEEK  & YEAR v
			viewWeek = Number(viewWeek) - 1;
			const viewPreYear = viewYear - 1;
			const preIsMax53 = bus.weekMax53.findIndex( item => item == viewPreYear );
			if( viewWeek == 0 ){
				viewYear --;
				if( preIsMax53 >= 0 ){ 
					viewWeek = 53;
				}else{
					viewWeek = 52;
				}
			}
	
			// ID OF MONTH MUST BE LENGTH = 2 v
			if( String(viewWeek).length < 2 ){
				viewWeekId = String(viewYear) + '0' + viewWeek;
			}else{
				viewWeekId = String(viewYear) + viewWeek;
			}
			
			// CHECK DATE-PICKER HAVE DATA ? v
			let check = false;
			$('.ui-datepicker-week-col').each(function(){
				// console.log( $(this).text() , viewWeek, $(this).text() == viewWeek );
				if( $(this).text() == viewWeek ){ check = true }
			});
			if( !check ){ $('#month-prev').click() };
	
			viewMonth = $('.ui-datepicker-month:eq(0)').text().replace(' 月', '');
			
			// GET VIEW ARY v
			viewWeekAry = fnGetViewWeekAry(viewWeek);
	
			fnPrintWeekMap( viewWeekId );
			
			viewWeekIndex --;
			if( viewWeekIndex == viewWeekMin ){ $('#prev-week').fadeOut() };
			// console.log(viewWeekId, viewYear, viewWeek, viewMonth, preIsMax53, check, viewWeekAry);
			// console.log(viewWeekIndex);
		}
	});

	$('#next-week').click(function(){
		// fnDatepickerJump(fnGetThisYear(), fnGetThisMonth());
		fnDatepickerJump(viewYear, viewMonth);
		$('#prev-week').fadeIn();
		if( viewWeekIndex < veiwWeekMax ){
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
			
			// CHECK DATE-PICKER HAVE DATA ? v
			let check = false;
			$('.ui-datepicker-calendar:eq(0) .ui-datepicker-week-col').each(function(){
				// console.log( $(this).text() , viewWeek, $(this).text() == viewWeek );
				if( $(this).text() == viewWeek ){ check = true }
			});
			if( !check ){ $('#month-next').click() };

			viewMonth = $('.ui-datepicker-month:eq(0)').text().replace(' 月', '');
			
			// GET VIEW ARY v
			viewWeekAry = fnGetViewWeekAry(viewWeek);

			fnPrintWeekMap( viewWeekId );

			viewWeekIndex ++;
			// console.log(viewWeekId, viewYear, viewWeek, viewMonth, nextIsMax53, check, viewWeekAry);
			// console.log(viewWeekIndex);
			if( viewWeekIndex == veiwWeekMax ){ $('#next-week').fadeOut(); }
		}
	});
	// if( viewWeekIndex <= veiwWeekMax && viewWeekIndex > -1 )

	$('#prev-week, #next-week').click(function(){
		fnCircle(7, apiWeek[viewWeekId].weekly_rate/100);
		$('#completebox-7 .completebox-text').text( apiWeek[viewWeekId].weekly_rate + '%' ).removeClass('is-un');
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
	});

	$('#week-clone').click(function(){
		const delay = 600;
		const check = confirm('確定要將此週的學習排程\n複製到未來一週嗎?\n*己安排的排程將會被覆蓋');
		if( check ){
			$('#load-cal').fadeIn(delay);
			$('#calbox, #achive, #facemap-open').fadeOut(delay);
			const obj = fnWeekObjMemo('clone');
			
			//--------------------------
			setTimeout(()=>{
				// 1. WEEK MAP INIT v
				fnPrintWeekMap(currentWeekId);
				viewWeekIndex = 0;
				viewMonth = currentWeekMonth;
				viewYear = currentWeekYear;
				viewWeek = currentWeek;
				viewWeekId = currentWeekId;
				viewWeekAry = currentWeekAry;

				// 2. DATE-PICKER & FACE MAP INIT v
				fnDatepickerJump(currentWeekYear, currentWeekMonth);
				fnPrintFaceMap(currentFaceId);

				// 3. GET NEXT WEEK & FIX OBJ v
				$('#next-week').click();
				apiWeek[viewWeekId] = obj;
				apiWeek[viewWeekId].date_list.forEach(function(item, i){
					console.log(i, item.date, viewWeekAry[i]);
					item.date = viewWeekAry[i];
				});
				apiWeek[viewWeekId].dt_year = viewYear;
				apiWeek[viewWeekId].dt_month = viewMonth;
				apiWeek[viewWeekId].dt_week = viewWeek
				apiWeek[viewWeekId].dt_id = viewWeekId;
				apiWeek[viewWeekId].weekly_bar1 = 0;
				apiWeek[viewWeekId].weekly_bar2 = 0;
				apiWeek[viewWeekId].weekly_level = 0;
				apiWeek[viewWeekId].weekly_msg = '尚待咨詢師分析';
				apiWeek[viewWeekId].weekly_rate = 0;

				// 4. PRINT & FINISH v
				fnPrintWeekMap(viewWeekId);
				$('#load-cal').fadeOut();
				$('#calbox, #achive, #facemap-open').fadeIn();

				console.log(obj);
			}, delay);
		};
	});

	// ==========================================
	// == TEST WEEK v
	// ==========================================
	// MAX WEEK 53 v
	// let ccMax = 0
	// const cc = function(){
	// 	// $('#add-week').click();
	// 	// $('#prev-week').click();
	// 	$('#next-week').click();
	// 	ccMax ++;
	// 	if(ccMax > 330){
	// 		console.log('STOP');
	// 		clearInterval(cId);
	// 		console.log(apiWeek);
			
	// 	}
	// }
	// let cId = setInterval( cc, 0);

	
	// WEEK v
	// const thisDay = new Date().getDay() - 1;
	// const dayList = ['一', '二', '三', '四', '五', '六', '日'];
	// console.log(thisDay, dayList[thisDay]);

	// $('#try-week').click(function(){
	// 	const target = $('#datepicker tbody tr:eq(0) .ui-datepicker-week-col').text();
	// 	console.log('clicked try week', target);
	// });
	
});