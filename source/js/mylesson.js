let thisWeekYear = 0;
let thisWeekMonth= 0;
let thisWeek = 0;
let thisWeekId = 0;
let thisDate= 0;

const fnGetThisWeekMonth = function(){
	let month = Number( $('.ui-datepicker-month:eq(0)').text().split(' ')[0] );
	if( month === 0 ){month = 12}
	if( String(month).length < 2 ){ month = '0' + month };
	return month;
};

const fnGetThisWeekYear = function(){
	return $('.ui-datepicker-year:eq(0)').text();
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

	thisWeekYear = fnGetThisWeekYear();
	thisWeekMonth = fnGetThisWeekMonth();
	thisWeek = $('.ui-datepicker-today').siblings().eq(0).text();
	thisWeekId = String(thisWeekYear) + thisWeek;
	thisDate = $('.ui-datepicker-today:eq(0) > *').text();

	// ==========================================
	// == LIGHT BOX v
	// ==========================================
	$('#contact, #lbmasker').click(function(){
		$('#lbmasker, #lb').toggleClass('open');
	});
});