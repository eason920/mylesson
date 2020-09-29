let faceAry= [
	{ id: '202007', list: [
			0,0,1,
			1,2,2,1,2,1,1,
			2,2,1,2,1,1,1,
			2,1,2,2,2,2,2,
			1,1,1,1,2,1,2,
			2,2
		]
	},
	{ id: '202008', list: [
		0,0,0,0,0,1,2,2,1,1,2,2,
		2,1,2,2,2,2,2,
		2,2,2,2,2,2,2,
		1,1,1,1,1,1,1,
		2,1,2
	]},
	{ id: '202009', list: [
		0,1,2,1,1,2,1,
		2,2,2,2,1,1,2,
		1,1,1,1,1,1,1,
		2,2,2,1,1,1,2,
		2
	]}
];
// let faceAry= [];
// by setting ^v by cookie /data;
// const faceAry= JSON.parse( Cookies.get('faceAry') );

let faceString = '';
let faceId = 0;

const fnPrintFaceCalendar = function(){
	faceString = '';
	$('#facemap').html('');
	for(a in faceAry){
		if( faceAry[a].id === faceId ){
			for( b in faceAry[a].list ){
				faceString += '<div class="facemap-item"><div '
				faceString += 'data-face="' + faceAry[a].list[b]
				faceString += '"></div></div>'
			};
		};
	};
	$('#facemap').append(faceString);
};

const fnGetfaceId = function(){
	const year = $('.ui-datepicker-year:eq(0)').text();
	let month = Number( $('.ui-datepicker-month:eq(0)').text().split(' ')[0] );
	if( month === 0 ){month = 12}
	if( String(month).length < 2 ){ month = '0' + month };
	return year + month;
};

const fnSavefaceAry= function(){
	Cookies.set('faceAry', JSON.stringify(faceAry) );
	console.log('%cfaceArySaved', 'font-size: 20px;color: yellow');
};

$(()=>{
	$( "#datepicker" ).datepicker({
		showWeek: true,
		showOtherMonths: true,
		numberOfMonths: 2
	});
	
	const thisWeek = $('.ui-datepicker-today').siblings().eq(0).text();
	const nextWeek = Number(thisWeek) + 1;

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
	
	// ==========================================
	// == GET faceId v
	// == FACE ARY CALENDAR v
	// ==========================================
	faceId = fnGetfaceId();

	// 第一次進此服務者, build & 儲存 json v
	if( !faceAry.length ){
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
			id: faceId,
			list: []
		}

		for(i=0;i<empty;i++){
			obj.list.push(0);
		}
		faceAry.push(obj);
		console.log(faceAry);

		fnSavefaceAry();
	};

	
	fnPrintFaceCalendar();

	$('#month-pre').click(function(){
		$('.ui-icon-circle-triangle-w').click();
	});

	$('#month-nex').click(function(){
		$('.ui-icon-circle-triangle-e').click();
	});

	$('#month-pre, #month-nex').click(function(){
		faceId = fnGetfaceId();
		fnPrintFaceCalendar();
	});

	//- FACE ARY CALENDAR v
	
	


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