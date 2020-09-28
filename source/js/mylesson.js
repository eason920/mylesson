$(()=>{
	$(function () {

	});


$( "#datepicker" ).datepicker({
	showWeek: true,
	showOtherMonths: true,
	numberOfMonths: 2
});

const thisWeek = $('.ui-datepicker-today').siblings().eq(0).text();
const nextWeek = thisWeek + 1;

console.log(`
%cthis week is ${thisWeek}
`, 'color:yellow');


	$('#contact, #lbmasker').click(function(){
		$('#lbmasker, #lb').toggleClass('open');
	});


});