let updateObj = {};
const hoursAry = ['m', 'a', 'e'];
const fnMemoUpdateObj = function(string){
	console.log(string, string=='clone');
	updateObj = {
		"dt_id": viewWeekId,
		"dt_year": viewYear,
		"dt_week": viewWeek,
		"dt_month": viewMonth,
		"date_list": []
	};

	$('#lb .weekmap-date .weekmap-td').each(function (t) {
		const $td = $(this);
		updateObj.date_list[t] = {};
		updateObj.date_list[t].date = viewWeekAry[t];
		updateObj.date_list[t].daily_done = false;
		updateObj.date_list[t].hours = {};
		let dTodos = 0;
		let dTruth = 0;
		$td.find('.weekmap-hours').each(function (h) {
			const $hours = $(this);
			const hKey = hoursAry[h];
			updateObj.date_list[t].hours[hKey] = [];
			$hours.find('.weekmap-item').each(function (i) {
				const $item = $(this);
				const sVal = $item.attr('data-sort');
				const dVal = $item.attr('data-done');
				if (dVal != 4) {
					dTodos++
					// wTodos++;
					updateObj.date_list[t].hours[hKey][i] = {};
					if( string == 'clone'){
						updateObj.date_list[t].hours[hKey][i].done = 0;
					}else{
						updateObj.date_list[t].hours[hKey][i].done = dVal;
					}
					updateObj.date_list[t].hours[hKey][i].sort = sVal;
				}
				if (dVal == 1) {
					dTruth++;
					// wTruth++;
				};
			});
			updateObj.date_list[t].daily_todos = dTodos;
			updateObj.date_list[t].daily_truth = dTruth;
		})
	})
}
$(()=>{
	let str;
	$('.edit-item').click(function(){
		// listEditable = true;
		// $('#lb').addClass('is-editable');
		$('#lb').attr('data-edit', true);
		str= ''
		const $this = $(this);
		const skin = $this.parent().attr('data-skin');
		const sort = Number($this.attr('data-sort'));
		$('.edit-item').removeClass('active');
		$this.addClass('active');
		console.log( skin,  sort);
		str += '<div class="weekmap-item" ';
		str += 'data-skin="' + skin + '" ';
		str += 'data-sort="' + sort + '" ';
		str += 'data-done="0">';
		str += '<div class="weekmap-status"></div>';
		str += '<div class="weekmap-text">'
		str += todoList[sort].title;
		str += '</div>' // -text
		str += '</div>' // -item
		// console.log(str);
	});

	$('#edit-unedit').click(function(){
		// listEditable = false;
		$('#lb').attr('data-edit', 'false' );
		$('#lb').removeClass('is-editable');
		$('.edit-item').removeClass('active');
	});

	// HOVER ITEM - VISION v
	$('#lb').on('mouseover', '.weekmap-hours[data-plan="true"]', function(){
		$('.weekmap-hours').removeClass('is-hover');
		$(this).addClass('is-hover');
	});
			
	$('#lb').on('mouseout', '.weekmap-hours[data-plan="true"]', function(){
		$('.weekmap-hours').removeClass('is-hover');
	})

	// ADD ITEM - HTML v
	$('#lb').on('click', '.weekmap-hours[data-plan="true"]', function(){
		const $target = $(this).find('.weekmap-in');
		const sum = $(this).find('.weekmap-item').length;
		if( $('#lb').attr('data-edit') == 'true' ){
			if (sum < 5) {
				$target.append(str)
			}else {
				alert('每時段規劃上限為5則');
			};
		};
	});

	// DELETE ITEM v
	$('#lb').on('click', '.weekmap-item', function(){
		const $this = $(this);
		if ($('#lb').attr('data-edit') == 'false' && $this.parent().parent().attr('data-plan') == 'true' ){
			if( $this.attr('data-done') == 4 ){
				$this.attr('data-done', 0);
			}else{
				$this.attr('data-done', 4);
			}
		}
	});

	// OPEN v
	$('#edit-week, #lb-close, #lbmasker, #edit-send').click(function(){
		const $lb = $('#lb');
		const $mk = $('#lbmasker');
		//
		if( $lb.is(':hidden') ){
			fnPrintWeekMap(viewWeekId);
			$lb.css('display', 'flex');
			$mk.show();
			setTimeout(()=>{
				$lb.removeClass('is-hide');
				$mk.removeClass('is-hide');
			}, 300);
		}else{
			$lb.fadeOut(100);
			$mk.fadeOut(100);
			setTimeout(()=>{
				$lb.addClass('is-hide');
				$mk.addClass('is-hide');
			}, 400);
		}
		//
		$lb.attr('data-edit', false);
		$('.edit-item').removeClass('active');
	});

	$('#edit-send').click(function(){
		fnMemoUpdateObj();
		apiWeek[viewWeekId] = updateObj;
		console.log('JSON', updateObj);
		console.log( 'STRING' ,JSON.stringify(updateObj) );
		$.ajax({
			type: "post",
			url: "https://funday.asia/mylesson/2020/api/jsonTest.asp",
			dataType: "json",
			// data: JSON.stringify(updateObj),
			data: updateObj,
			success: function(){
				// console.log('got json test', JSON.stringify(updateObj));
				console.log('got obj', updateObj);
			}
		})
		fnPrintWeekMap( viewWeekId );
		fnWeekObjUpdate();

	});

	$('#edit-clean').click(function(){
		console.log('clean');
		$('.weekmap-hours[data-plan="true"]').find('.weekmap-in').html('');
		// $('.weekmap-hours[data-plan="true"]').find('.weekmap-in').html() = '';
	});

	// $('#edit-week').click();
});