// let passAry = [
// 	{ id: '202007', list: [
// 			0,0,1,
// 			1,2,2,1,2,1,1,
// 			2,2,1,2,1,1,1,
// 			2,1,2,2,2,2,2,
// 			1,1,1,1,2,1,2,
// 			2,2
// 		]
// 	},
// 	{ id: '202008', list: [
// 		0,0,0,0,0,1,2,2,1,1,2,2,
// 		2,1,2,2,2,2,2,
// 		2,2,2,2,2,2,2,
// 		1,1,1,1,1,1,1,
// 		2,1,2
// 	]},
// 	{ id: '202009', list: [
// 		0,1,2,1,1,2,1,
// 		2,2,2,2,1,1,2,
// 		1,1,1,1,1,1,1,
// 		2,2,2,1,1,1,2,
// 		2
// 	]}
// ];
let passAry = [];
// by setting ^v by cookie /data;
// const passAry = JSON.parse( Cookies.get('passAry') );

let passString = '';
let passId = 0;

const fnPrintPassCalendar = function(){
	passString = '';
	$('#passmap').html('');
	for(a in passAry){
		if( passAry[a].id === passId ){
			for( b in passAry[a].list ){
				passString += '<div class="passmap-item"><div '
				passString += 'data-pass="' + passAry[a].list[b]
				passString += '"></div></div>'
			};
		};
	};
	$('#passmap').append(passString);
};

const fnGetPassId = function(){
	const year = $('.ui-datepicker-year:eq(0)').text();
	let month = Number( $('.ui-datepicker-month:eq(0)').text().split(' ')[0] );
	if( month === 0 ){month = 12}
	if( String(month).length < 2 ){ month = '0' + month };
	return year + month;
};

const fnSavePassAry = function(){
	Cookies.set('passAry', JSON.stringify(passAry) );
	console.log('%cpassAry Saved', 'font-size: 20px;color: yellow');
};

$(()=>{
	$( "#datepicker" ).datepicker({
		showWeek: true,
		showOtherMonths: true,
		numberOfMonths: 2
	});
	
	const thisWeek = $('.ui-datepicker-today').siblings().eq(0).text();
	const nextWeek = Number(thisWeek) + 1;

	// $('#datepicker tbody tr').forEach(function(item){
	// 	console.log(item);
	// });
	const bb = $('#datepicker tbody tr').length;
	// $.each( $('#datepicker tbody tr'), function( i, item ){
	// 	let target;
	// 	console.log( item );
	// 	// typeof( item ) => object
	// 	// item.find('ui-datepicker-week-col').text() => err
	// 	// JSON.stringify(item) object => {}
	// });
	// $.each( $('.ui-datepicker-week-col'), function(i, item){
	// 	console.log( item.attr('class') );
	// } )
	let aryThisWeek = [];
	let aryNextWeek = [];
	$('#datepicker tbody tr').each(function(){
		const week = $(this).find('.ui-datepicker-week-col').text();
		if( week === String(thisWeek) ){
			$(this).find('td > *').each(function(){
				aryThisWeek.push( $(this).text() );
			});
		};
		if( week === String(nextWeek) ){
			$(this).find('td > *').each(function(){
				aryNextWeek.push( $(this).text() );
			});
		};
	});
	aryThisWeek.splice(7);
	aryNextWeek.splice(7);
	console.log(aryThisWeek, aryNextWeek);
	
	
	// console.log(`
	// %cthis week is ${thisWeek};
	// ${bb}
	// `, 'color:yellow');

	// ==========================================
	// == GET PASSID v
	// == PASS ARY CALENDAR v
	// ==========================================
	passId = fnGetPassId();

	// 第一次進此服務者, build & 儲存 json v
	console.log( passAry.length );
	if( !passAry.length ){
		console.log('no');
		let empty1 = 0;
		$('#datepicker tbody tr:eq(0) td').each(function(){
			if( $(this).find('*').text() === '1' ){
				empty1 = $(this).index() - 1;
			}
		});

		const today = $('.ui-datepicker-current-day:eq(0) > *').text();
		const empty2 = Number(today) - 1;
		const empty = empty1 + empty2;
		console.log(empty1, empty2, empty);

		const obj = {
			id: passId,
			list: []
		}

		for(i=0;i<empty;i++){
			obj.list.push(0);
		}
		passAry.push(obj);
		console.log(passAry);

		fnSavePassAry();
	};

	
	fnPrintPassCalendar();
	// console.log(passId);

	$('#month-pre').click(function(){
		$('.ui-icon-circle-triangle-w').click();
	});

	$('#month-nex').click(function(){
		$('.ui-icon-circle-triangle-e').click();
	});

	$('#month-pre, #month-nex').click(function(){
		passId = fnGetPassId();
		// console.log(passId);
		fnPrintPassCalendar();
	});

	//- PASS ARY CALENDAR v
	
	


	// ==========================================
	// == TEST: cookie 
	// ==========================================
	Cookies.set('myCookie', true)
	Cookies.set('eason', '170');
	
	console.log( Cookies.get('myCookie') );
	console.log( '%c'+(Cookies.get('eason')), 'color:yellow');

	// ==========================================
	// == TEST: get time v
	// ==========================================
	const DATE = new Date();
	const week = DATE.getDay();
	const dayList = ['一', '二', '三', '四', '五', '六', '日'];
	console.log(dayList[week]);

	$('#contact, #lbmasker').click(function(){
		$('#lbmasker, #lb').toggleClass('open');
	});
});