let weekAry = {};
weekAry = demoWeekAry;
let weekId = 0;
//
let thisWeek = 0;
let nextWeek = 0;
//
let nextWeekYear = 0;
//
let thisWeekAry = [];
let nextWeekAry = [];
//
const weeklyAry = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
const monthAry = ["January","February","March","April","May","June","July","August","September","October", "November", "December"];
console.log(monthAry[Number('01')-1]);
//
let thisWeekIndex = 0;
let weekCount = true;
let weekAryLength = 0;
let currentWeekIndex = 0;
//
let currentWeekId = '';
let preWeekId = '';
let nexWeekId = '';
//
const emptyObj = {};
const emptyNextObj = {};
const emptyApi = {}
//

const fnGetWeekAry = function(week){
	nextWeekYear = thisWeekYear;
	nextWeekMonth = thisWeekMonth;
	
	
	const ary1= [];
	const ary2= [];

	// next week v
	nextWeek = Number(week) + 1;
	let check = false;
	$('.ui-datepicker-week-col').each(function(){
		const week = $(this).text();
		// console.log(week, week == nextWeek);
		if (week === String(nextWeek)) {check=true};
	});
	// 遇跨年度時，重取 ary2 (新年度第一週必為1)
	if( !check ){ 
		nextWeek = 1;
		nextWeekMonth = 1;
		nextWeekYear ++;
		// console.log('ny', nextWeekYear);
	};
	console.log('thisWeekMonth', thisWeekMonth);
	console.log('nextWeekMonth ', nextWeekMonth);
	// console.log(check, nextWeek);
	// console.log(thisWeekYear, nextWeekYear);
	// console.log(week, nextWeek);
	$('#datepicker tbody tr').each(function(){
		const text = $(this).find('.ui-datepicker-week-col').text();
		// console.log(text, text === String(week), text === String(nextWeek));
		// ary 1 v
		if( text === String(week) ){
			$(this).find('td > *').each(function(){
				ary1.push( $(this).text() );
			});
		};

		// ary 2 v
		if( text === String(nextWeek) ){
			$(this).find('td > *').each(function(){
				ary2.push( $(this).text() );
			});
		};
	});

	ary1.splice(7);
	ary2.splice(7);
	thisWeekAry = ary1;
	nextWeekAry = ary2;
	console.log('thisWeekAry', thisWeekAry); 
	console.log('nextWeekAry', nextWeekAry);
	console.log('this', thisWeek, thisWeekYear);
	console.log('next', nextWeek, nextWeekYear);
};

const fnPrintWeekMap = function(data){
	let week = -1;
	const ary = data.week;
	preWeekId = data.pre;
	nexWeekId = data.nex;
	currentWeekId = data.id;
	console.log(preWeekId, currentWeekId,nexWeekId);
	if( !preWeekId ){ $('#pre-week').fadeOut(); }
	if( !nexWeekId ){ $('#nex-week').fadeOut(); }
	//
	$('.weekmap-title').text( monthAry[Number(data.month)-1] + ', ' + data.year );
	
	// --------------------------------
	// -- WEEK TITLE HTML v
	// --------------------------------
	let thisWeekIndex = 0;
	//
	$('.weekmap-week').html('');
	let dayStr = '';
	ary.forEach(function(item){
		const date = item.date;
		dayStr += '<div class="weekmap-td';
		if( date === thisDate ){
			dayStr += " is-today";
			week = thisWeekIndex;
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
	$('.weekmap-date').html('');
	let dateStr = '';
	ary.forEach(function(item){
		dateStr += '<div class="weekmap-td">';
		for( h in item.hours ){
			dateStr += '<div class="weekmap-hours" data-edit="true">';
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
	// -- WEEK BODY LOSE  不會有 LOSE 情形 v
	// --------------------------------
	// console.log();
	// if ($('#calbox .weekmap-date .weekmap-td').length){

	// }

}

const fnCreateEmptyObj = function(obj, ary, year, month, week, otherYear, otherWeek){
	obj.id = year + String(week);
	obj.year = year;
	obj.week_id = week;
	obj.month = month;
	if( weekId === year + String(week) ){
		// for this week
		obj.pre = false;
		obj.nex = otherYear + String(otherWeek);
	}else{
		// for next week
		obj.pre = otherYear + String(otherWeek);
		obj.nex = false;
	}
	obj.week = [];
	for (i=0; i<7;i ++) {
		const newObj = {}
		newObj.date = ary[i];
		newObj.daily_done= false;
		newObj.hours = {m: [], a: [], e: []};
		obj.week.push(newObj);
	}
	console.log(obj);
}

$(()=>{
	thisWeek = $('.ui-datepicker-today').siblings().eq(0).text();
	thisWeekYear = Number($('.ui-datepicker-year:eq(0)').text());

	fnGetWeekAry(thisWeek);

	$('#try-week').click(function(){
		const target = $('#datepicker tbody tr:eq(0) .ui-datepicker-week-col').text();
		console.log('clicked try week', target);
		fnGetWeekAry(target);
	});

	// ==========================================
	// == INIT v
	// ==========================================
	const apiWeek = {
		202038: demoWeekObj_202038,
		202039: demoWeekObj_202039,
		202040: demoWeekObj_202040,
		202041: demoWeekObj_202041,
		// 202042: demoWeekObj_202042
	}
	// 第一次進入 v^ 非第一次進入
	// const apiWeek = {};

	

	// 為了準確，刻意從 datapicker 中重組出 v
	weekId = String(thisWeekYear) + thisWeek;

	console.log(apiWeek[weekId]);
	if( !apiWeek[weekId] ){
		console.log('第一次進入 weeek ary');
		$('#pre-week').hide();
		//
		fnCreateEmptyObj(emptyObj, thisWeekAry, thisWeekYear, thisWeekMonth, thisWeek, nextWeekYear, nextWeek);
		fnCreateEmptyObj(emptyNextObj, nextWeekAry, nextWeekYear, nextWeekMonth, nextWeek, thisWeekYear, thisWeek);
		apiWeek[thisWeekYear + String(thisWeek)] = emptyObj;
		apiWeek[nextWeekYear + String(nextWeek)] = emptyNextObj;
		console.log(apiWeek);
	}else{
		console.log('非第一次進入 week ary');
		const nexId = apiWeek[weekId].nex;
		console.log(nexId);
		if( !nexId ){
			console.log('非第一次進入、無下週');
			fnCreateEmptyObj(emptyNextObj, nextWeekAry, nextWeekYear, nextWeekMonth, nextWeek, thisWeekYear, thisWeek);
			apiWeek[nextWeekYear + String(nextWeek)] = emptyNextObj;
			apiWeek[weekId].nex = nextWeekYear + String(nextWeek);
			console.log(apiWeek[weekId], apiWeek[ nextWeekYear + String(nextWeek) ]);
		}else{
			console.log('非第一次進入、但己有下週');
		}
	}
	fnPrintWeekMap( apiWeek[weekId] );

	// ==========================================
	// == ACTION EVENT v
	// ==========================================
	$('#pre-week').click(function(){
		$('#nex-week').fadeIn();
		if( preWeekId ){
			fnPrintWeekMap(apiWeek[preWeekId]);
		};
	});

	$('#nex-week').click(function(){
		$('#pre-week').fadeIn();
		if( nexWeekId ){
			fnPrintWeekMap(apiWeek[nexWeekId]);
		};
	});

	// ==========================================
	// == TEST WEEK v
	// ==========================================
	// const thisDay = new Date().getDay() - 1;
	// const dayList = ['一', '二', '三', '四', '五', '六', '日'];
	// console.log(thisDay, dayList[thisDay]);
	
});