const weeklyAry = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
const monthAry = ["January","February","March","April","May","June","July","August","September","October", "November", "December"];
//
let newObj = {};
//
const weekMax53 = [2015, 2020, 2026, 2032, 2037, 2043, 2048];
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

const fnWeekObjUpdate = function(){
	console.log('%cUpdated!', 'color:greenyellow;font-size:20px;');
}

const fnGetViewWeekAry = function(week){
	const ary= [];
	$('#datepicker tbody tr').each(function(){
		const text = $(this).find('.ui-datepicker-week-col').text();
		if( Number(text) === Number(week) ){
			$(this).find('td > *').each(function(){
				ary.push( $(this).text() );
			});
		};
	});
	ary.splice(7);
	return ary;
};

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
	$('.weekmap-title').text( monthAry[Number(data.dt_month)-1] + ', ' + data.dt_year );
	
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
		dayStr += weeklyAry[thisWeekIndex];
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
				dateStr += 'data-skin="' + todoList[ j.sort ].skin + '" ';
				dateStr += 'data-sort="' + j.sort + '" ';
				dateStr += 'data-done="' + j.done + '">';
				dateStr += '<div class="weekmap-status"></div>';
				dateStr += '<div class="weekmap-text">' + todoList[ j.sort ].title +'</div>'
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
	// -- WEEK BODY LOSE  不會有漏「日」情形 v
	// --------------------------------
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
	}
	//
	wId = setInterval( fnRecordApiWeek, 0);

	// ==========================================
	// == CHECK FACE DONE LIST v
	// == FACE ARY v
	// ==========================================

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
			const preIsMax53 = weekMax53.findIndex( item => item == viewPreYear );
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
			if( !check ){ $('#month-pre').click() };
	
			viewMonth = $('.ui-datepicker-month:eq(0)').text().replace(' 月', '');
			
			// GET VIEW ARY v
			viewWeekAry = fnGetViewWeekAry(viewWeek);
	
			fnPrintWeekMap( viewWeekId );
			
			viewWeekIndex --;
			if( viewWeekIndex == viewWeekMin ){ $('#prev-week').fadeOut() };
			// console.log(viewWeekId, viewYear, viewWeek, viewMonth, preIsMax53, check, viewWeekAry);
			// console.log(viewWeekIndex);
			if( viewWeekIndex < 0 ){
				$('#edit-week').addClass('is-unedit');
			}else{
				$('#edit-week').removeClass('is-unedit');
			}
		}
	});

	$('#next-week').click(function(){
		// fnDatepickerJump(fnGetThisYear(), fnGetThisMonth());
		fnDatepickerJump(viewYear, viewMonth);
		$('#prev-week').fadeIn();
		if( viewWeekIndex < veiwWeekMax ){
			// WEEK  & YEAR v
			viewWeek = Number(viewWeek) + 1;
			const nextIsMax53 = weekMax53.findIndex( item => item == viewYear );
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
			if( !check ){ $('#month-nex').click() };

			viewMonth = $('.ui-datepicker-month:eq(0)').text().replace(' 月', '');
			
			// GET VIEW ARY v
			viewWeekAry = fnGetViewWeekAry(viewWeek);

			fnPrintWeekMap( viewWeekId );

			viewWeekIndex ++;
			// console.log(viewWeekId, viewYear, viewWeek, viewMonth, nextIsMax53, check, viewWeekAry);
			// console.log(viewWeekIndex);
			if( viewWeekIndex == veiwWeekMax ){ $('#next-week').fadeOut(); }
			if( viewWeekIndex < 0 ){
				$('#edit-week').addClass('is-unedit');
			}else{
				$('#edit-week').removeClass('is-unedit');
			}
		}
	});
	// if( viewWeekIndex <= veiwWeekMax && viewWeekIndex > -1 )
	$('#clone-week').click(function(){
		$('#add-week').click();
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