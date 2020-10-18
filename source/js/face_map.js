let apiFace = {};
let faceAry = {};
let fId;
let doAdd = true;
let faceId;

const fnDatepickerJump = function(year, month){
	$("#datepicker").datepicker("setDate",$.datepicker.parseDate("yy/mm/dd", year + "/" + month +"/01"));
};

const fnRecolrApiFace = function(){
	// --------------------------------
	// -- CURR WEEK v
	// --------------------------------
	const currMonth = viewMonth;
	if (doAdd) {
		if (String(viewMonth).length < 2) {
			faceId = viewYear + '0' + String(viewMonth);
		} else {
			faceId = viewYear + String(viewMonth);
		};

		apiFace[faceId] = {};
		apiFace[faceId].week_list = [];

		let weekId;
		let monthMax = -1;
		$('.ui-datepicker-group-first tbody tr').each(function (i) { monthMax ++ });
		console.log(monthMax);
		$('.ui-datepicker-group-first tbody tr').each(function (i) {
			const week = $(this).find('.ui-datepicker-week-col').text();
			apiFace[faceId].week_list.push({ week });
			//
			apiFace[faceId].week_list[i].date = [];
			apiFace[faceId].week_list[i].daily_done = [];
			//
			if (String(week).length < 2) {
				weekId = viewYear + '0' + String(week);
			} else {
				weekId = viewYear + String(week);
			};
			if (apiWeek[weekId]) {
				monthMax ++;
				apiFace[faceId].week_list[i].weekly_todos = apiWeek[weekId].weekly_todos;
				apiFace[faceId].week_list[i].weekly_truth = apiWeek[weekId].weekly_truth;

				for (a in apiWeek[weekId].date_list ){
					apiFace[faceId].week_list[i].date.push( apiWeek[weekId].date_list[a].date );
					apiFace[faceId].week_list[i].daily_done.push( apiWeek[weekId].date_list[a].daily_done );
				};

				
				// console.log(i, i==0, apiWeek[weekId]);
				// console.log(i, i == 6, apiWeek[weekId]);
			};
			
		});
		
		console.log('-----');

		// apiFace[faceId].monthly_todos = mTodos;
		// apiFace[faceId].monthly_truth = mTruth;
		// console.log( apiFace[faceId]. );

		doAdd = false;
	}

	// --------------------------------
	// -- PREV WEEK v 
	// --------------------------------
	recordIndex++;
	$('#prev-week').click();// < ** 連動「viewWeekId 退位」程式**

	const prevMonth = viewMonth;
	if (currMonth != prevMonth) { 
		doAdd = true;
		mTodos = 0;
		mTruth = 0;
	};

	// --------------------------------
	// -- DONE & INIT v
	// --------------------------------
	if (recordIndex > recordMax) {
		clearInterval(fId);

		// DATE-PICKER v
		fnDatepickerJump(thisWeekYear, thisWeekMonth);

		// WEEK MAP v
		console.log(thisWeekId);
		fnPrintWeekMap(thisWeekId);
		viewIndex = 0;
		viewMonth = thisWeekMonth;
		viewYear = thisWeekYear;
		viewWeek = thisWeek;
		viewWeekId = thisWeekId;
		viewWeekAry = fnGetViewWeekAry(viewWeek);
		viewMin = -11;// 11+1 = 12 = 三個月

		// VISION v
		$('#prev-week').fadeIn();
		$('#edit-week').removeClass('is-unedit');
		$('#load-cal').fadeOut();
		$('#calbox, #achive').fadeIn();
		console.log(apiFace);
	}
};

$(()=>{
	// file:week_map.js-fn:fnRecordApiWeek -> file:face_map.js-fn:fnRecolrApiFace ->fn:fnPringFaceMap
	$('#month-pre').click(function () {
		$('.ui-icon-circle-triangle-w').click();
	});

	$('#month-nex').click(function () {
		$('.ui-icon-circle-triangle-e').click();
	});

	$('#month-pre, #month-nex').click(function () {

	});

})