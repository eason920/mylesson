let nextWeekYear = 0;
let nextWeekMonth = 0;
let nextWeek = 0;
//
let thisWeekAry = [];
let nextWeekAry = [];
let currentWeekAry = [];
let currentWeek = 0;
//
const weeklyAry = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
const monthAry = ["January","February","March","April","May","June","July","August","September","October", "November", "December"];
//
let currentWeekId = '';
let preWeekId = '';
let nexWeekId = '';
let currentWeekYear = '';
//
let emptyObj = {};
const emptyNextObj = {};
const emptyApi = {}
//
const weekMax53 = [2020, 2026, 2032, 2037, 2043, 2048];
let thisYearMaxWeek = 0;
let preYearMaxWeek = 0;
let nexYearMaxWeek = 0;
//
const apiWeek = {
	202038: demoWeekObj_202038,
	202039: demoWeekObj_202039,
	202040: demoWeekObj_202040,
	202041: demoWeekObj_202041,
	202042: demoWeekObj_202042
}
// 第一次進入 v^ 非第一次進入
// const apiWeek = {};
//

const fnWeekMax = function(year){
	const y = weekMax53.findIndex(item => item === year);
	let max = 52;
	if( y >= 0 ){ max = 53 };
	return max;
}

const fnGetWeekAry = function(week){
	// console.log(week);
	// if( week.length < 2 ){ week = '0' + week};
	const ary= [];
	$('#datepicker tbody tr').each(function(){
		const text = $(this).find('.ui-datepicker-week-col').text();
		// console.log(text ,String(week) );
		if( Number(text) === Number(week) ){
			$(this).find('td > *').each(function(){
				ary.push( $(this).text() );
			});
		};
	});
	ary.splice(7);
	currentWeekAry = ary;
	// console.log('currentWeekAry', currentWeekAry);
};

const fnCreateEmptyObj = function(ary, year, month, week, preYear, preWeek){	
	// console.log(ary, year, month, week, preYear, preWeek);
	emptyObj = {}
	//
	if( String(week).length < 2 ){ week = '0' + week };
	emptyObj.id = year + String(week);
	//
	emptyObj.year = Number(year);
	emptyObj.week_id = Number(week);
	emptyObj.month = month;
	if( String(preWeek).length < 2 ){
		emptyObj.pre = preYear + '0' + String(preWeek);
	}else{
		emptyObj.pre = preYear + String(preWeek);
	}
	emptyObj.nex = false;
	emptyObj.week = [];
	for (i=0; i<7;i ++) {
		const obj = {}
		obj.date = ary[i];
		obj.daily_done= false;
		obj.hours = {m: [], a: [], e: []};
		emptyObj.week.push(obj);
	}
	apiWeek[currentWeekYear + String(week)] = emptyObj;
	// console.log(emptyObj);
	// console.log(apiWeek);
}

const fnPrintWeekMap = function(data){
	// console.log(data);
	// console.log(apiWeek);
	// console.log(data);
	// thisDate = 26;
	// console.log('%cthis week turn to '+thisDate,'font-size: 20px;color: yellow');
	let week = -1;
	const ary = data.week;
	preWeekId = data.pre;
	nexWeekId = data.nex;
	if( !preWeekId ){ $('#pre-week').fadeOut(); }
	if( !nexWeekId ){ $('#nex-week').fadeOut(); }
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
		// console.log(item);
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
	// console.log(hours);
	//
	$('.weekmap-date').html('');
	let dateStr = '';
	ary.forEach(function(item){
		// 「日」為單位的 editStatus v
		const date = Number(item.date);
		if( data.week_id === thisWeek ){
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
			// console.log(item.date, thisDate, item.date === thisDate, h, hours);
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
	// console.log();
	// if ($('#calbox .weekmap-date .weekmap-td').length){
	// }
};

const fnDatepickerJump = function(year, month){
	$("#datepicker").datepicker("setDate",$.datepicker.parseDate("yy/mm/dd", year + "/" + month +"/01"));
}

$(()=>{
	preYearMaxWeek =  fnWeekMax( Number(thisWeekYear) - 1 );
	thisYearMaxWeek = fnWeekMax( Number(thisWeekYear));
	nexYearMaxWeek =  fnWeekMax( Number(thisWeekYear) + 1 );
	console.log('pre y-w max ', preYearMaxWeek, ' / this y-w max ', thisYearMaxWeek, ' / nex y-w max ', nexYearMaxWeek);
	
	currentWeekId = thisWeekId;
	currentWeek = thisWeek;
	fnGetWeekAry(currentWeek);

	$('#try-week').click(function(){
		const target = $('#datepicker tbody tr:eq(0) .ui-datepicker-week-col').text();
		console.log('clicked try week', target);
		fnGetWeekAry(target);
	});


	currentWeek = Number(thisWeek);
	currentWeekYear = thisWeekYear;
	currentWeekMonth = thisWeekMonth;
	let currentWeekMax = fnWeekMax(Number(thisWeekYear));
	let preYear = thisWeekYear;
	let preWeek = thisWeek;
	// ==========================================
	// == INIT v
	// ==========================================


	console.log(apiWeek[currentWeekId]);
	if( !apiWeek[currentWeekId] ){
		console.log('第一次進入 weeek ary');
		$('#pre-week').hide();
		// $('#nex-week').show();
		$('#add-week').css('display', 'flex');
		//
		fnCreateEmptyObj(currentWeekAry, thisWeekYear, thisWeekMonth, thisWeek, nextWeekYear, nextWeek);
		// fnCreateEmptyObj(emptyNextObj, nextWeekAry, nextWeekYear, nextWeekMonth, nextWeek, thisWeekYear, thisWeek);
		
		// apiWeek[nextWeekYear + String(nextWeek)] = emptyNextObj;
		// console.log(apiWeek);
	}else{
		console.log('非第一次進入 week ary');
		const nexId = apiWeek[thisWeekId].nex;
		console.log(nexId);
		if( !nexId ){
			console.log('非第一次進入、無下週');
			$('#add-week').css('display', 'flex');
			// fnCreateEmptyObj(emptyNextObj, nextWeekAry, nextWeekYear, nextWeekMonth, nextWeek, thisWeekYear, thisWeek);
			// apiWeek[nextWeekYear + String(nextWeek)] = emptyNextObj;
			// apiWeek[thisWeekId].nex = nextWeekYear + String(nextWeek);
			// console.log(apiWeek[thisWeekId], apiWeek[ nextWeekYear + String(nextWeek) ]);
		}else{
			console.log('非第一次進入、但己有下週');
			$('#nex-week').show();
		}
	}

	// console.log(currentWeekId);
	fnPrintWeekMap( apiWeek[currentWeekId]);

	// ==========================================
	// == CHECK FACE DONE LIST v
	// ==========================================
	console.log(thisWeek, currentWeekAry);
	// for(i=0; i<currentWeekAry.length)
	
	// ==========================================
	// == FACE ARY v
	// ==========================================
	console.log(apiWeek[thisWeekId].week);
	apiWeek[thisWeekId].week.forEach(function(item){
		console.log(item.daily_done);
	});

	// ==========================================
	// == ACTION EVENT v
	// ==========================================
	$('#pre-week').click(function(){
		$('#nex-week').fadeIn();
		$('#add-week').fadeOut();
		console.log(preWeekId);
		if( preWeekId ){
			fnDatepickerJump(apiWeek[preWeekId].year, apiWeek[preWeekId].month);
			fnPrintWeekMap(apiWeek[preWeekId]);
		};
	});

	$('#nex-week').click(function(){
		$('#pre-week').fadeIn();
		if( nexWeekId ){
			fnDatepickerJump(apiWeek[nexWeekId].year, apiWeek[nexWeekId].month);
			fnPrintWeekMap(apiWeek[nexWeekId]);
			if( nexWeekId ){
				$('#nex-week').fadeIn();
			}else{
				$('#add-week').css('display', 'flex');
			}
		};
	});

	
	// currentWeek 
	let addWeek = 0;
	const addMax = 3;
	$('#add-week').click(function(){
		fnDatepickerJump(currentWeekYear, currentWeekMonth);
		$('#pre-week').show();
		if(addWeek < addMax){
			preId = currentWeekId;
			preYear = currentWeekYear;
			preWeek = currentWeek;
			// console.log(preYear, preWeek);
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
			// console.log(currentWeek , currentWeekMax, currentWeek > currentWeekMax);
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
			
			apiWeek[preId].nex = currentWeekId
			preId = currentWeekId;
			
			fnGetWeekAry(currentWeek);
			fnCreateEmptyObj(currentWeekAry, currentWeekYear, currentWeekMonth, currentWeek, preYear, preWeek);
			fnPrintWeekMap(apiWeek[currentWeekId]);

			// datapicker v
			// console.log(currentWeekYear, currentWeekMonth);
			
			addWeek ++;
		}else{
			console.log('cant add more');
			alert('己逹規劃上限');
		}
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
	
});