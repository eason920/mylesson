let currentWeekYear;
let currentWeekMonth;
let currentWeek;
let currentWeekId;
let currentDate;
let currentFaceId;
let currentWeekAry;
let currentWeekRate;
//
const bus = {
	hoursAry: ['m', 'a', 'e'],
	todoList: [
		{skin: 1, "sort": 0, title: "文章"},
		{skin: 1, "sort": 1, title: "影片"},
		{skin: 1, "sort": 2, title: "專欄"},
		{skin: 1, "sort": 3, title: "每週測驗"},
		{skin: 1, "sort": 4, title: "音樂"},
		{skin: 1, "sort": 5, title: "童話故事"},
		//
		{skin: 2, "sort": 6, title: "實力衝刺"},
		{skin: 2, "sort": 7, title: "寫作練習"},
		{skin: 2, "sort": 8, title: "會話練習"},
		{skin: 2, "sort": 9, title: "朗讀練習"},
		{skin: 2, "sort": 10, title: "研習營"},
	],
	levelAry: ['無', '輕', '中', '重', '極重'],
	season_area: [
		[1,2,3],
		[4,5,6],
		[7,8,9],
	],
	weekMax53: [2015, 2020, 2026, 2032, 2037, 2043, 2048],
	weeklyAry: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
	monthAry: ["January","February","March","April","May","June","July","August","September","October", "November", "December"],
}
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
	play: {
		turtle: 0,
		robbit: 0
	}
};
//
const weekData = {
	202034: demoWeekObj_202034,
	202038: demoWeekObj_202038,
	202039: demoWeekObj_202039,
	202040: demoWeekObj_202040,
	202041: demoWeekObj_202041,
	202042: demoWeekObj_202042,
	202043: demoWeekObj_202043
}
// date_list[0].hors.m[0].done v
// 0 = 時間未到
// 1 = 完成
// 2 = 完成一半
// 3 = 未完成    
// 4 = 編輯模式下待刪項目

// date_list[0].daily_done v
// 0 = 時間未到 / 非本週數字
// 1 = 完成
// 3 = 未完成
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

const fnWeekObjMemo = function(string){
	let obj = {
		"dt_id": viewWeekId,
		"dt_year": viewYear,
		"dt_week": viewWeek,
		"dt_month": viewMonth,
		"date_list": []
	};

	$('#lb .weekmap-date .weekmap-td').each(function (t) {
		const $td = $(this);
		obj.date_list[t] = {};
		obj.date_list[t].date = viewWeekAry[t];
		obj.date_list[t].daily_done = false;
		obj.date_list[t].hours = {};
		let dTodos = 0;
		let dTruth = 0;
		$td.find('.weekmap-hours').each(function (h) {
			const $hours = $(this);
			const hKey = bus.hoursAry[h];
			obj.date_list[t].hours[hKey] = [];
			$hours.find('.weekmap-item').each(function (i) {
				const $item = $(this);
				const sVal = $item.attr('data-sort');
				const dVal = $item.attr('data-done');
				if (dVal != 4) {
					dTodos++;
					obj.date_list[t].hours[hKey][i] = {};
					if( string == 'clone'){
						obj.date_list[t].hours[hKey][i].done = 0;
					}else{
						obj.date_list[t].hours[hKey][i].done = dVal;
					}
					obj.date_list[t].hours[hKey][i].sort = sVal;
				};

				if (dVal == 1) { dTruth++ };
			});
			obj.date_list[t].daily_todos = dTodos;
			obj.date_list[t].daily_truth = dTruth;
		});
	});

	// 取回舊有 rate 資料 v
	if( weekData[viewWeekId] ){
		obj.weekly_rate = weekData[viewWeekId].weekly_rate;
	};

	return obj;
};

const fnWeekObjUpdate = function(obj){
	console.log(weekData);
	console.log('JSON', obj);
	// console.log( 'STRING' ,JSON.stringify(obj) );
	// $.ajax({
	// 	type: "post",
	// 	url: "https://funday.asia/mylesson/2020/api/jsonTest.asp",
	// 	dataType: "json",
	// 	// data: JSON.stringify(obj),
	// 	data: obj,
	// 	success: function(){
	// 		// console.log('got json test', JSON.stringify(obj));
	// 		console.log('got obj', obj);
	// 	}
	// })
	console.log('%cUpdated!', 'color:greenyellow;font-size:20px;');
}

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
	// currentWeekRate = weekData[currentWeekId].weekly_rate;
	currentDate = $('.ui-datepicker-today:eq(0) > *').text();
	//
	if( String(currentWeekMonth).length < 2 ){
		currentFaceId = currentWeekYear + '0' + currentWeekMonth;
	}else{
		currentFaceId = currentWeekYear + String(currentWeekMonth);
	};
	// console.log(currentFaceId);
});