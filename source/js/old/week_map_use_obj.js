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

const fnPrintWeekMap = function(data){
	let week = -1;
	const ary = data.week;
	
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
	const apiWeek = [ demoWeekObj_202040, demoWeekObj_202041];

	const check = function( obj ){
		console.log(obj);
	}
	check( apiWeek[1] )


	fnPrintWeekMap( apiWeek[1] );



	// ==========================================
	// == WEEK ARY LENGTH / WEEK INDEX OF ARY v
	// ==========================================
	weekAryLength = apiWeek.length;
	// thisWeekIndex = weekAry.findIndex( item => item.id === weekId );
	console.log('thisWeekIndex', thisWeekIndex, ' / weekAryLength', weekAryLength);

	let currentWeekIndex = thisWeekIndex;

	// ==========================================
	// == ACTION EVENT v
	// ==========================================
	$('#pre-week').click(function(){
		$('#nex-week').fadeIn();
		currentWeekIndex -= 1;
		if (currentWeekIndex >= 0 ){
			fnPrintWeekMap(weekAry[currentWeekIndex].id);
		}else{
			currentWeekIndex = 0;
			$('#pre-week').fadeOut();
		}
	});

	$('#nex-week').click(function(){
		$('#pre-week').fadeIn();
		currentWeekIndex ++;
		if (currentWeekIndex < weekAryLength) {
			fnPrintWeekMap(weekAry[currentWeekIndex].id);
		}else{
			currentWeekIndex = weekAryLength - 1;
			$('#nex-week').fadeOut();
		}
	});

	// ==========================================
	// == TEST WEEK v
	// ==========================================
	const thisDay = new Date().getDay() - 1;
	const dayList = ['一', '二', '三', '四', '五', '六', '日'];
	console.log(thisDay, dayList[thisDay]);
	
});