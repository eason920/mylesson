let weekAry = {};
weekAry = demoWeekAry;
//
let thisWeek = 0;
let nextWeek = 0;
//
let thisWeekYear = 0;
let nextWeekYear = 0;
//
let thisWeekAry = [];
let nextWeekAry = [];
//
const weeklyAry = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
//
let thisWeekIndex = 0;
let weekCount = true;
let weekAryLength = 0;
let currentWeekIndex = 0;

const fnGetWeekAry = function(week){
	nextWeekYear = thisWeekYear;
	
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
		nextWeekYear ++;
		// console.log('ny', nextWeekYear);
	};
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

const fnPrintWeekMap = function(id){
	const obj = weekAry[id]
	console.log(obj);
	let week = -1;

	// --------------------------------
	// -- WEEK TITLE HTML v
	// --------------------------------
	let thisWeekIndex = 0;
	//
	$('.weekmap-week').html('');
	let dayStr = '';
	for(a in obj){
		const day = String(obj[a].date);
		// console.log(day);
		dayStr += '<div class="weekmap-td';
		if( day === thisDate ){
			dayStr += " is-today";
			week = thisWeekIndex;
		}
		dayStr += '">'
		dayStr += weeklyAry[thisWeekIndex];
		dayStr += '<span class="weekmap-day">'
		if( day.length < 2 ){ dayStr += '0'};
		dayStr += day
		dayStr += '</span>'
		dayStr += '</div>' // -td
		//
		thisWeekIndex ++;
	}

	$('.weekmap-week').html(dayStr);

	// --------------------------------
	// -- WEEK BODY HTML v
	// --------------------------------
	$('.weekmap-date').html('');
	let dateStr = '';
	for( date in obj ){
		dateStr += '<div class="weekmap-td">';
		// console.log(date);
		// console.log('m', obj[a].m.list);
		for( h in obj[date].hours ){
			// console.log( obj[date].hours[h] );
			dateStr += '<div class="weekmap-hours" data-edit="true">';
			dateStr += '<div class="weekmap-in">';
			for( item in obj[date].hours[h].list){
				// console.log( obj[date].hours[h].list[item] );
				dateStr += '<div class="weekmap-item" ';
				dateStr += 'data-skin="' + todoList[obj[date].hours[h].list[item].sort].skin + '" ';
				dateStr += 'data-done="' + obj[date].hours[h].list[item].done + '">';
				dateStr += '<div class="weekmap-status"></div>';
				dateStr += '<div class="weekmap-text">' + todoList[obj[date].hours[h].list[item].sort].title +'</div>'
				dateStr += '</div>'// -item
			}
			dateStr += '</div>'// -in
			dateStr += '</div>'// -hours
		}
		// console.log(obj[date].a.list);
		// console.log(obj[date].e.list);
		dateStr += '</div>'// -td
	}

	$('.weekmap-date').html(dateStr);
	$('.weekmap-date .weekmap-td:eq(' + week + ')').addClass('is-today');

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
	for( a in weekAry){
		// console.log(a);
		weekAry[a] = demoWeekAry[a];
	}
	console.log(weekAry);

	const weekId = String(thisWeekYear) + thisWeek;
	console.log(weekId);

	fnPrintWeekMap(weekId);

	// ==========================================
	// == WEEK ARY LENGTH / WEEK INDEX OF ARY v
	// ==========================================
	for(a in weekAry){
		// console.log( a === weekId );
		if( a !== weekId && weekCount){
			thisWeekIndex ++;
		}else{
			weekCount = false;
		}
		weekAryLength ++;
	};
	console.log('thisWeekIndex', thisWeekIndex, ' / weekAryLength', weekAryLength);



	// ==========================================
	// == ACTION EVENT v
	// ==========================================
	$('#pre-week').click(function(){
		console.log('pre-week');
		console.log(thisYear - 1, thisWeek - 1);
	});

	$('#nex-week').click(function(){
		console.log('nex-week');
		console.log(Number(thisYear) + 1, Number(thisWeek) + 1);
	});

	// ==========================================
	// == TEST WEEK v
	// ==========================================
	const thisDay = new Date().getDay() - 1;
	const dayList = ['一', '二', '三', '四', '五', '六', '日'];
	console.log(thisDay, dayList[thisDay]);
	
});