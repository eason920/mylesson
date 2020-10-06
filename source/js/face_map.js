// 若改摸擬第一次，除註記上方，且應刪除 application>cookie>faceAry ^
let thisMonth= 0;

let thisYear = 0;

let thisDate= 0;
// date = 日期(1~31)
// day = 星期(monday, tuesday, wednsday, friday, sataday, sunday)
//
let faceAry= [];

let faceId = 0;

let dateShouldLength = 0;

const fnCountDateShouldLength = function(){
	// COUNT 1 FROM OTHER MONTH v
	let count1 = 0;
	$('#datepicker tbody tr:eq(0) td').each(function(){
		if( $(this).find('*').text() === '1' ){
			count1 = $(this).index() - 1;// -1 for hide week td
		}
	});

	// COUNT 2 FROM THIS MONTH v
	const count2 = Number(thisDate) - 1;// -1 for today

	// COUNT v
	const total = count1 + count2;
	// console.log(count1, count2, total);

	return total;
}

const fnGetFaceAry = function(){
	let resFaceAry = Cookies.get('faceAry');
	if( resFaceAry === undefined ){
		// console.log('%cface data : first', 'color:greenyellow;font-size:15px');
		resFaceAry = [];
	}else{
		// console.log('%cface data : had data', 'color:greenyellow;font-size:15px');
		resFaceAry = JSON.parse( resFaceAry);
	};
	faceAry= resFaceAry;
	// console.log( faceAry );
};

const fnPrintFaceCalendar = function(){
	let faceString = '';
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

const fnGetThisYear = function(){
	return $('.ui-datepicker-year:eq(0)').text();
};

const fnGetThisMonth = function(){
	let month = Number( $('.ui-datepicker-month:eq(0)').text().split(' ')[0] );
	if( month === 0 ){month = 12}
	if( String(month).length < 2 ){ month = '0' + month };
	return month;
};

const fnSavefaceAry= function(){
	Cookies.set('faceAry', JSON.stringify(faceAry) );
	// console.log('%cfaceArySaved', 'font-size: 20px;color: yellow');

};

$(()=>{
	// ==========================================
	// == INIT v
	// ==========================================
	fnGetFaceAry();

	$( "#datepicker" ).datepicker({
		showWeek: true,
		showOtherMonths: true,
		numberOfMonths: 2,
		// defaultDate: "+2m +7d",// < 自定初始己選日期(?)
		// minDate: -20, maxDate: "+1M +10D" // < 限制可選日期範圍
	});

	thisDate = $('.ui-datepicker-today:eq(0) > *').text();
	thisYear = fnGetThisYear();
	thisMonth = fnGetThisMonth();
	// console.log(thisDate);
	
		
	// ==========================================
	// == FACE 陣列 & 視覺 v
	// ==========================================
	faceId = fnGetThisYear() + fnGetThisMonth();
	dateShouldLength = fnCountDateShouldLength();

	const faceLength = faceAry.length;
	// console.log(faceLength, !faceLength);
	// 第一次進此服務者, build & 儲存 json v
	if( !faceLength ){
		// --------------------------------
		// -- 第一次使用本功能 v
		// --------------------------------
		// 1.補本月
		// 2.補前月,前前月 > 前月&前前月有跨年否?

		// 2.補前月,前前月 v
		let preYear = thisYear;
		const list = [];
		let round = 1;
		for(i=1;i<=42;i++){list.push(0)};
		const fnPushPreMonth = function(round){
			// M
			let preMonth= String( Number( thisMonth ) - round );
			if( preMonth === '0' ){preMonth = '12'};
			if( preMonth === '-1' ){preMonth = '11'}
			if( preMonth.length < 2){ preMonth = '0' + preMonth };

			// Y
			if( (Number(thisMonth) - Number(preMonth)) < 1 ){
				preYear = Number(thisYear) - 1;
			};

			const id = preYear + preMonth;
			const preMonthObj = {id, list};
			faceAry.push(preMonthObj);
		};
		
		for(i=1;i<=2;i++){ // < 2 為「除本月的前二月」意思
			fnPushPreMonth(round);
			round ++;
		};
		
		// 1.補本月 v
		const thisMonthObj = {
			id: faceId,
			list: []
		};

		for (i=0; i < dateShouldLength; i++) {
			thisMonthObj.list.push(0);
		};
		
		faceAry.push(thisMonthObj);
		// console.log(faceAry);

		// fnSavefaceAry();
	}else{
		// --------------------------------
		// -- 己使用過本功能 v
		// --------------------------------
		// 1.只缺一日
		// 2.缺同一月內
		// 3.缺一個月
		// 4.缺一個月以上
		// --
		// Limit:
		// 1.紀錄三個月內的(包含本月&前推二個月)
		
		// --------------------------------
		// 「月」為單位 v
		if (faceLength > 3) {
			// 月滿洩 v
			// console.log('月滿洩, delete');
			const newAry = faceAry.splice(-3);
			faceAry = newAry;
			// fnSavefaceAry();
		} else if (faceLength < 3) {
			//小於3要補 v
			// console.log('月少於3要補 v');
		}

		// --------------------------------
		// 「日」為單位 v
		const currentLength = faceAry[faceAry.length - 1].list.length;
		// console.log(currentLength);
		// 應有個補「缺不同月內的」的函式 ****>>重核先前月的紀錄並不論如何都要update，即可補起
		// 補「缺同個月內」的 v
		if( currentLength < dateShouldLength ){
			// console.log('less , should add');
			// fnSavefaceAry();
		}else{
			// console.log('is enough');
		}
	}

	// ==========================================
	// == 準備工作完成 v
	// ==========================================
	fnPrintFaceCalendar();

	$('#month-pre').click(function(){
		$('.ui-icon-circle-triangle-w').click();
	});

	$('#month-nex').click(function(){
		$('.ui-icon-circle-triangle-e').click();
	});

	$('#month-pre, #month-nex').click(function(){
		faceId = fnGetThisYear() + fnGetThisMonth();
		fnPrintFaceCalendar();
	});
});