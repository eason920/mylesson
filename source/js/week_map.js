let nextWeekYear;
let nextWeekMonth;
let nextWeek;
//
let thisWeekAry = [];
let nextWeekAry = [];
let currentWeekAry = [];
//
const weeklyAry = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
const monthAry = ["January","February","March","April","May","June","July","August","September","October", "November", "December"];
//
let currentWeekYear;
let currentWeekMonth;
let currentWeek;
let currentWeekId;
let currentWeekMax;
//
let preWeekYear;
let preWeek;
let preWeekId;
//
let newObj = {};
//
const weekMax53 = [2020, 2026, 2032, 2037, 2043, 2048];
// let thisYearMaxWeek = 0;
// let preYearMaxWeek = 0;
// let nexYearMaxWeek = 0;
//
let canIAdd = true;
//

const fnWeekMax = function(year){
	const y = weekMax53.findIndex(item => item === year);
	let max = 52;
	if( y >= 0 ){ max = 53 };
	return max;
}

const fnGetWeekAry = function(week){
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
	currentWeekAry = ary;
};

const fnCreateNewObj = function(ary, year, month, week, preWeekYear, preWeek){	
	newObj = {}
	//
	if( String(week).length < 2 ){ week = '0' + week };
	newObj.id = year + String(week);
	//
	newObj.year = Number(year);
	newObj.week_id = Number(week);
	newObj.month = month;

	if(preWeek){
		// 有資料下的新增 v
		if( String(preWeek).length < 2 ){
			newObj.prev = preWeekYear + '0' + String(preWeek);
		}else{
			newObj.prev = preWeekYear + String(preWeek);
		}
	}else{
		// 第一次使用本功能的新增 v
		newObj.prev = false;
	}
	newObj.next = false;
	newObj.week = [];
	for (i=0; i<7;i ++) {
		const obj = {}
		obj.date = ary[i];
		obj.daily_done= false;
		obj.hours = {m: [], a: [], e: []};
		newObj.week.push(obj);
	}
	apiWeek[currentWeekYear + String(week)] = newObj;
}

const fnPrintWeekMap = function(data){
	// thisDate = 26;
	// console.log('%cthis week turn to '+thisDate,'font-size: 20px;color: yellow');
	let week = -1;
	const ary = data.week;
	preWeekId = data.prev;
	nexWeekId = data.next;
	if( !preWeekId ){ $('#prev-week').fadeOut(); }
	if( !nexWeekId ){ $('#next-week').fadeOut(); }
	//
	$('.weekmap-title').text( monthAry[Number(data.month)-1] + ', ' + data.year );
	
	// --------------------------------
	// -- WEEK TITLE HTML v
	// --------------------------------
	let thisWeekIndex = 0;
	const isSameYearMonth = data.year == thisWeekYear && data.month == thisWeekMonth;
	//
	$('.weekmap-week').html('');
	let dayStr = '';
	ary.forEach(function(item){
		const date = item.date;
		dayStr += '<div class="weekmap-td';
		if( isSameYearMonth ){
			if( date === thisDate ){
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
	const subtract = Number(data.week_id) - Number(thisWeek);
	// 「週」為單位的 editStatus v
	switch(true){
		case data.week_id >= thisWeek:
			// 同一年 v
			editStatus = true; break;
		case data.week_id < thisWeek && subtract <= -1:
			// 同一年 v
			editStatus = false; break;
		case data.week_id < thisWeek && subtract >= 1:
			// 跨年 v
			editStatus = true; break;
		default:
	}
	//
	const hours = new Date().getHours();
	$('.weekmap-date').html('');
	let dateStr = '';
	ary.forEach(function(item){
		// 「日」為單位的 editStatus v
		const date = Number(item.date);
		if( data.week_id == thisWeek ){
			switch(true){
				case date < thisDate:
					editStatus = false;
					break;
				case date > thisDate && (date - thisDate) > 1:
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
		dateStr += '<div class="weekmap-td">';
		for( h in item.hours ){
			// 「時區」為單位的 editStatus v
			if( item.date === thisDate ){
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
			dateStr += '<div class="weekmap-hours" data-edit="' + editStatus + '">';
			dateStr += '<div class="weekmap-in">';
			item.hours[h].forEach(function(j){
				dateStr += '<div class="weekmap-item" ';
				dateStr += 'data-skin="' + todoList[ j.sort ].skin + '" ';
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

const fnDatepickerJump = function(year, month){
	$("#datepicker").datepicker("setDate",$.datepicker.parseDate("yy/mm/dd", year + "/" + month +"/01"));
}

const fnCanIAdd = function(year, week){
	// 估算出下一個 weekId , 沒值就使 canIAdd = false, 即不可以再新增
	// 此判斷依據「本週」來推算
	let max = 52;
	const isMax53 = fnWeekMax(year);
	if( isMax53 >= 0 ){ max = 53 };
	//
	week = Number(week) + 1;
	if( week > max ){
		week = 1;
		year = Number(year) + 1;
	};
	if( String(week).length < 2 ){
		week = '0' + week;
	}
	//
	const id = year + String(week);
	if( apiWeek[id] ){
		canIAdd = false
		$('#add-week').remove();
	}
};

$(()=>{
	// ==========================================
	// == INIT VAR v
	// ==========================================
	// preYearMaxWeek =  fnWeekMax( Number(thisWeekYear) - 1 );
	// thisYearMaxWeek = fnWeekMax( Number(thisWeekYear));
	// nexYearMaxWeek =  fnWeekMax( Number(thisWeekYear) + 1 );
	// console.log('pre y-w max ', preYearMaxWeek, ' / this y-w max ', thisYearMaxWeek, ' / nex y-w max ', nexYearMaxWeek);
	
	currentWeekYear = thisWeekYear;
	currentWeekMonth = thisWeekMonth;
	currentWeek = thisWeek;
	currentWeek = Number(thisWeek);
	currentWeekId = thisWeekId;
	currentWeekMax = fnWeekMax(Number(thisWeekYear));
	fnGetWeekAry(currentWeek);
	//
	fnCanIAdd(thisWeekYear, thisWeek);

	// ==========================================
	// == START v
	// ==========================================
	// console.log(lastUpdateId, !lastUpdateId);
	if( !lastUpdateId ){
		console.log('第一次進入 weeek ary');
		$('#prev-week').hide();
		$('#add-week').css('display', 'flex');
		//
		fnCreateNewObj(currentWeekAry, thisWeekYear, thisWeekMonth, thisWeek);
	}else{
		console.log('非第一次進入 week ary');
		console.log( lastUpdateId == thisWeekId );
		if( canIAdd ){
			console.log('非第一次進入、無下週');
			$('#add-week').css('display', 'flex');
		}else{
			console.log('非第一次進入、但己有下週');
			$('#next-week').show();
		}
	}

	fnPrintWeekMap( apiWeek[currentWeekId]);

	// ==========================================
	// == CHECK FACE DONE LIST v
	// == FACE ARY v
	// ==========================================

	// ==========================================
	// == ACTION EVENT v
	// ==========================================
	$('#prev-week').click(function(){
		$('#add-week').hide();
		$('#next-week').fadeIn();
		// console.log('before', preWeekId);
		if( preWeekId ){
			fnDatepickerJump(apiWeek[preWeekId].year, apiWeek[preWeekId].month);
			fnPrintWeekMap(apiWeek[preWeekId]);
			// console.log('%cafter '+ preWeekId);
			if( !apiWeek[preWeekId] ){ $('#prev-week').hide() };
		};
	});

	$('#next-week').click(function(){
		$('#prev-week').fadeIn();
		// console.log('before', nexWeekId);
		if( nexWeekId ){
			fnDatepickerJump(apiWeek[nexWeekId].year, apiWeek[nexWeekId].month);
			fnPrintWeekMap(apiWeek[nexWeekId]);
			// ** fnPrintWeekMap 會改變變數 nextWeekId , 再次判斷以確認是否為最後一週 **
			// console.log('after', nexWeekId);
			if( !nexWeekId ){
				// 是最後一週
				$('#next-week').hide();
				if( canIAdd ){ 
					setTimeout(()=>{
						$('#add-week').fadeIn();
					}, 800);
				};
			}else{
				// 不是最後一週
				$('#next-week').fadeIn();
			}
		}else{
		}
	});

	$('#add-week').click(function(){
		fnDatepickerJump(currentWeekYear, currentWeekMonth);
		$('#prev-week').show();
		let idBeforeAdd = currentWeekId;
		preWeekYear = currentWeekYear;
		preWeek = currentWeek;
		// 新週前 ^ ------------------
		// 新週後 v ------------------
		currentWeek ++;

		// 是否換月，應補 click 以取得次月 date v
		let check = 0;
		$('tbody:eq(0) .ui-datepicker-week-col').each(function(i){
			if( $(this).text() == currentWeek ){ check = i};
		});
		if( check <= 0 ){
			$('#month-nex').click();
			currentWeekMonth ++;
		}
		
		//
		currentWeekMax = fnWeekMax(Number(currentWeekYear));
		if (currentWeek > currentWeekMax ){
			currentWeek = 1;
			currentWeekMonth = 1;
			currentWeekYear++;
		};

		if( String(currentWeek).length < 2 ){
			currentWeekId = currentWeekYear + '0' +String(currentWeek);
		}else{
			currentWeekId = currentWeekYear + String(currentWeek);
		}
		
		apiWeek[idBeforeAdd].next = currentWeekId
		idBeforeAdd = currentWeekId;
		
		fnGetWeekAry(currentWeek);
		fnCreateNewObj(currentWeekAry, currentWeekYear, currentWeekMonth, currentWeek, preWeekYear, preWeek);
		fnPrintWeekMap(apiWeek[currentWeekId]);
		//
		$(this).remove();
		canIAdd = false;
	});

	$('#clone-week').click(function(){
		$('#add-week').click();
	});



	// ==========================================
	// == TEST WEEK v
	// ==========================================
	// MAX WEEK 53 v
	// let ccMax = 0
	// const cc = function(){
	// 	$('#add-week').click();
	// 	fnCanIAdd(currentWeekYear, currentWeek);
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
	// 	fnGetWeekAry(target);
	// });
	
});