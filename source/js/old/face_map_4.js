// 若改摸擬第一次，除註記上方，且應刪除 application>cookie>faceAry ^
// date = 日期(1~31)
// day = 星期(monday, tuesday, wednsday, friday, sataday, sunday)
let faceAry= {};
let thisMonthFaceId = 0;
let thisMonthFaceLength = 0;
let thisMonthShouldLength = 0;

const fnCountThisMonthShouldLength = function(){
	// COUNT 1 : FROM OTHER MONTH v
	let count1 = 0;
	$('#datepicker tbody tr:eq(0) td').each(function(){
		if( $(this).find('*').text() === '1' ){
			count1 = $(this).index() - 1;// -1 for hide week td
		}
	});

	// COUNT 2 : FROM THIS MONTH v
	const count2 = Number(thisDate) - 1;// -1 is today

	// COUNT v
	const total = count1 + count2;
	// console.log(count1, count2, total);

	return total;
}

const fnGetFaceAry = function(id){
	// let resFaceAry = Cookies.get('faceAry');
	for (a in apiFace){
		// console.log(a, apiFace[a]);
		if( a === id ){
			// console.log( apiFace[a] );
			faceAry = apiFace[a];
		}
	}

	console.log( faceAry.list === undefined );
	if (faceAry.list === undefined){
		faceAry.id = id;
		faceAry.list= [];
	}
	// if( resFaceAry === undefined ){
	// 	// console.log('%cface data : first', 'color:greenyellow;font-size:15px');
	// 	resFaceAry = [];
	// }else{
	// 	// console.log('%cface data : had data', 'color:greenyellow;font-size:15px');
	// 	resFaceAry = JSON.parse( resFaceAry);
	// };
	// faceAry= resFaceAry;
	console.log( faceAry );
};

const fnPrintFaceCalendar = function(id){
	let faceString = '';
	$('#facemap').html('');
	for(a in faceAry){
		if( faceAry[a].id === id ){
			for( b in faceAry[a].list ){
				faceString += '<div class="facemap-item"><div '
				faceString += 'data-face="' + faceAry[a].list[b]
				faceString += '"></div></div>'
			};
		};
	};
	$('#facemap').append(faceString);
};
const fnSavefaceAry= function(){
	Cookies.set('faceAry', JSON.stringify(faceAry) );
	// console.log('%cfaceArySaved', 'font-size: 20px;color: yellow');
};

const fnDatepickerJump = function(year, month){
	$("#datepicker").datepicker("setDate",$.datepicker.parseDate("yy/mm/dd", year + "/" + month +"/01"));
};

$(()=>{
	// ==========================================
	// == INIT v
	// ==========================================
	thisMonthFaceId = fnGetThisWeekYear() + fnGetThisWeekMonth();
	thisMonthShouldLength = fnCountThisMonthShouldLength();
	thisMonthFaceLength = faceAry.length;

	fnGetFaceAry(thisMonthFaceId);

	let recordIdx = 0
	const fnFaceDataRecording = function(){
		$('#prev-week').click();
		const ary = [];
		console.log(apiWeek[viewWeekId]);
		recordIdx ++;
		if(recordIdx > 11){
			clearInterval(rId);

			// DATE-PICKER v
			fnDatepickerJump(thisWeekYear, thisWeekMonth);

			// WEEK MAP v
			fnPrintWeekMap( thisWeekId );
			$('#prev-week').fadeIn();
			viewIndex = 0;
			viewMonth = thisWeekMonth;
			viewYear = thisWeekYear;
			viewWeek = thisWeek;
			viewWeekId = thisWeekId;
			viewWeekAry = fnGetViewWeekAry(viewWeek);

			// VISION v
			$('#load-cal').fadeOut();
			$('#calbox, #achive').fadeIn();
		}
	};
	let rId = setInterval( fnFaceDataRecording, 0);
	// $('#load-cal').fadeOut();
	// $('#calbox, #achive').fadeIn();
		
	// ==========================================
	// == 檢視 FACE ARY v
	// ==========================================
	// console.log(thisMonthFaceLength, !thisMonthFaceLength);
	if( !thisMonthFaceLength ){
		// --------------------------------
		// -- 第一次使用本功能 v
		// -- build & 儲存 json v
		// --------------------------------
		// 1.補本月
		// 2.補前月,前前月 > 前月&前前月有跨年否?

		// 2.補前月,前前月 v
		let preYear = thisWeekYear;
		const list = [];
		let round = 1;
		for(i=1;i<=42;i++){list.push(0)};
		const fnPushPreMonth = function(round){
			// M
			let preMonth= String( Number( thisWeekMonth ) - round );
			if( preMonth === '0' ){preMonth = '12'};
			if( preMonth === '-1' ){preMonth = '11'}
			if( preMonth.length < 2){ preMonth = '0' + preMonth };

			// Y
			if( (Number(thisWeekMonth) - Number(preMonth)) < 1 ){
				preYear = Number(thisWeekYear) - 1;
			};

			const id = preYear + preMonth;
			const preMonthObj = {id, list};
			// faceAry.push(preMonthObj);
		};
		
		for(i=1;i<=2;i++){ // < 2 為「除本月的前二月」意思
			fnPushPreMonth(round);
			round ++;
		};
		
		// 1.補本月 v
		const thisMonthObj = {
			id: thisMonthFaceId,
			list: []
		};

		for (i=0; i < thisMonthShouldLength; i++) {
			thisMonthObj.list.push(0);
		};
		
		// faceAry.push(thisMonthObj);
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
		if (thisMonthFaceLength > 3) {
			// 月滿洩 v
			console.log('月滿洩, delete');
			const newAry = faceAry.splice(-3);
			faceAry = newAry;
			// fnSavefaceAry();
		} else if (thisMonthFaceLength < 3) {
			//小於3要補 v
			console.log('月少於3要補 v');
		}

		// --------------------------------
		// 「日」為單位 v
		const currentLength = faceAry[faceAry.length - 1].list.length;
		// console.log(currentLength);
		// 應有個補「缺不同月內的」的函式 ****>>重核先前月的紀錄並不論如何都要update，即可補起
		// 補「缺同個月內」的 v
		if( currentLength < thisMonthShouldLength ){
			// console.log('less , should add');
			// fnSavefaceAry();
		}else{
			// console.log('is enough');
		}
	}

	// ==========================================
	// == 打印本月 FACE MAP v
	// ==========================================
	fnPrintFaceCalendar(thisMonthFaceId);

	$('#month-pre').click(function(){
		$('.ui-icon-circle-triangle-w').click();
	});

	$('#month-nex').click(function(){
		$('.ui-icon-circle-triangle-e').click();
	});

	$('#month-pre, #month-nex').click(function(){
		const id = fnGetThisWeekYear() + fnGetThisWeekMonth();
		// fnPrintFaceCalendar(id);
	});
});