let currentWeekYear;
let currentWeekMonth;
let currentWeek;
let currentWeekId;
let currentDate;
let currentFaceId;
let currentWeekAry;
let currentWeekRate;
//
const completeObj = {
	monthy: {
		202008: 50,
		202009: 89,
		202010: 15
	},
	seasons: [
		{year: 2020, season: 2, rate: 55},
		{year: 2020, season: 3, rate: 12},
		// {year: 2021, season: 0, rate: 55}
	],
	season_area: [
		[1,2,3],
		[4,5,6],
		[7,8,9],
		[10,11,12]
	]
};

// const seasonApi ={
// 	p: 12,
// 	c: 55,
// 	1: c,
// 	12: p,
// 	11: p
// }
//
const fnGetThisMonth = function(){
	let month = Number( $('.ui-datepicker-month:eq(0)').text().split(' ')[0] );
	if( month === 0 ){month = 12}
	if( String(month).length < 2 ){ month = '0' + month };
	return month;
};

const fnGetThisYear = function(){
	return $('.ui-datepicker-year:eq(0)').text();
};

const fnGetViewWeekAry = function(week){
	const ary= [];
	$('#datepicker tbody tr').each(function(){
		const text = $(this).find('.ui-datepicker-week-col').text();
		if( Number(text) == Number(week) ){
			$(this).find('td > *').each(function(){
				ary.push( $(this).text() );
			});
		};
	});
	ary.splice(7);
	return ary;
};

const fnDatepickerJump = function(year, month){
	$("#datepicker").datepicker("setDate",$.datepicker.parseDate("yy/mm/dd", year + "/" + month +"/01"));
};

const fnCircle = function(selector, value){
	let $target = $('#completebox-'+ selector +' .completebox-vision');
	let color;
	let duration;
	switch(true){
		case selector == 7:
			color= "#01c3e0";
			duration = 800;
			break;
		case selector == 30:
			color= "#F0854F";
			duration = 1400;
			break;
		case selector == 90:
			color= "#D44458";
			duration = 2000;
			break;
		default:
	};

	$target.circleProgress({
		startAngle: 4.7,
		value,
		fill: {color},
		emptyFill: '#E8E9ED',
		animation: {
			duration,
			// easing: 'linear'
		},
		animationStartValue: 0.0,
		size: 77,
		thickness: '4'
	});

};

$(()=>{
	// ==========================================
	// == PLUGIN SETTING v
	// ==========================================
	// DATA-PICKER v
	$( "#datepicker" ).datepicker({
		showWeek: true,
		showOtherMonths: true,
		numberOfMonths: 2,
		// defaultDate: "+2m +7d",// < 自定初始己選日期(?)
		// minDate: -20, maxDate: "+1M +10D" // < 限制可選日期範圍
	});
	
	currentWeekYear = fnGetThisYear();
	currentWeekMonth = fnGetThisMonth();
	currentWeek = $('.ui-datepicker-today').siblings().eq(0).text();
	currentWeekAry = fnGetViewWeekAry(currentWeek);
	// currentWeek = 1
	// console.log( currentWeek, String(currentWeek).length);
	if( String(currentWeek).length < 2 ){
		currentWeekId = currentWeekYear + '0' + currentWeek;
	}else{
		currentWeekId = currentWeekYear + String(currentWeek);
	}
	// console.log(currentWeekId);
	currentWeekRate = apiWeek[currentWeekId].weekly_rate;
	currentDate = $('.ui-datepicker-today:eq(0) > *').text();
	//
	if( String(currentWeekMonth).length < 2 ){
		currentFaceId = currentWeekYear + '0' + currentWeekMonth;
	}else{
		currentFaceId = currentWeekYear + String(currentWeekMonth);
	};
	// console.log(currentFaceId);
});