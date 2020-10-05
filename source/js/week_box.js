const weekAry = {};
//
let thisWeek = 0;
let nextWeek = 0;
//
let thisWeekYear = 0;
let nextWeekYear = 0;
//
let thisWeekAry = [];
let nextWeekAry = [];

const fnGetWeekAry = function(currentWeek){
	nextWeekYear = thisWeekYear;
	
	const ary1= [];
	const ary2= [];

	nextWeek = Number(currentWeek) + 1;
	// $('.ui-datepicker-week-col').each(function(){
	// 	const week = $(this).$find
	// });

	console.log(currentWeek, nextWeek);

	$('#datepicker tbody tr').each(function(){
		const week = $(this).find('.ui-datepicker-week-col').text();
		console.log(week, week === String(currentWeek), week === String(nextWeek));
		// ary 1 v
		if( week === String(currentWeek) ){
			$(this).find('td > *').each(function(){
				ary1.push( $(this).text() );
			});
		};

		// ary 2 v
		if( week === String(nextWeek) ){
			$(this).find('td > *').each(function(){
				ary2.push( $(this).text() );
			});
		};
		// 遇跨年度時，重取 ary2 (新年度第一週必為1)
		if (ary2.length < 1){
			if( week === '1' ){
				$(this).find('td > *').each(function(){
					ary2.push( $(this).text() );
				});
			};
		};
	});

	ary1.splice(7);
	ary2.splice(7);
	thisWeekAry = ary1;
	nextWeekAry = ary2;
	console.log('thisWeekAry', thisWeekAry); 
	console.log('nextWeekAry', nextWeekAry);
	console.log('year', thisWeekYear, nextWeekYear);
}

$(()=>{
	thisWeek = $('.ui-datepicker-today').siblings().eq(0).text();
	thisWeekYear = $('.ui-datepicker-year').text();

	fnGetWeekAry(thisWeek);

	$('#try-week').click(function(){
		const target = $('#datepicker tbody tr:eq(0) .ui-datepicker-week-col').text();
		console.log('clicked try week', target);
		fnGetWeekAry(target);
	});

		

	// ==========================================
	// == TEST: get time v
	// ==========================================
	const thisDay = new Date().getDay() - 1;
	const dayList = ['一', '二', '三', '四', '五', '六', '日'];
	console.log(thisDay, dayList[thisDay]);


	// ==========================================
	// == INIT v
	// ==========================================
	for( a in demoWeekAry){
		console.log(a);
		weekAry[a] = demoWeekAry[a];
	}
	console.log(weekAry);

	// ==========================================
	// == APPEND v
	// ==========================================
	let str = '';
	str += thisWeekAry[0];

	// thisWeekAry.forEach(){

	// }
	// --------------------------------
	// --------------------------------
	// for( a in weekAry ){
	// 	console.log('----------------');
	// 	console.log(a);
	// 	$('.week-date').append(
	// 		$('<div>', {class:"week-td"}).append(
	// 			$('<div>', {class:"week-box"}).append(
	// 				for(b in weekAry[a].m.list){

	// 				}
	// 			),
	// 			$('<div>', {class:"week-box"}),
	// 			$('<div>', {class:"week-box"}),
	// 		)
	// 	);
	// }
	// --------------------------------
	// --------------------------------
	// weekAryAry = [1,2,3,4,5]
	// weekAryAry.forEach(function(item,i){
	// 	console.log(item);
	// });

});