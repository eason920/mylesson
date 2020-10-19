let currentWeekYear;
let currentWeekMonth;
let currentWeek;
let currentWeekId;
let currentDate;
let currentFaceId

const fnGetThisMonth = function(){
	let month = Number( $('.ui-datepicker-month:eq(0)').text().split(' ')[0] );
	if( month === 0 ){month = 12}
	if( String(month).length < 2 ){ month = '0' + month };
	return month;
};

const fnGetThisYear = function(){
	return $('.ui-datepicker-year:eq(0)').text();
};

const fnDatepickerJump = function(year, month){
	$("#datepicker").datepicker("setDate",$.datepicker.parseDate("yy/mm/dd", year + "/" + month +"/01"));
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
	// currentWeek = 1
	// console.log( currentWeek, String(currentWeek).length);
	if( String(currentWeek).length < 2 ){
		currentWeekId = currentWeekYear + '0' + currentWeek;
	}else{
		currentWeekId = currentWeekYear + String(currentWeek);
	}
	currentDate = $('.ui-datepicker-today:eq(0) > *').text();

	// console.log(currentWeekId);
	//
	if( String(currentWeekMonth).length < 2 ){
		currentFaceId = currentWeekYear + '0' + currentWeekMonth;
	}else{
		currentFaceId = currentWeekYear + String(currentWeekMonth);
	};
	// console.log(currentFaceId);
});