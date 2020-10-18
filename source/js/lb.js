let updateObj = {};

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

	// ADD ITEM - VISION v
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
		if( $('#lb').attr('data-edit') == 'true' ){ $target.append(str) };
	});

	// DELETE ITEM v
	$('#lb').on('click', '.weekmap-item', function(){
		const $this = $(this);
		if( $('#lb').attr('data-edit') == 'false' ){
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
		updateObj = {
			dt_id: viewWeekId,
			dt_year: viewYear,
			dt_week: viewWeek,
			dt_month: viewMonth,
			date_list: []
		};

		const hoursAry = ['m', 'a', 'e'];
		let wTodos = 0;
		let wTruth = 0
		$('#lb .weekmap-date .weekmap-td').each(function(t){
			const $td = $(this);
			updateObj.date_list[t] = {};
			updateObj.date_list[t].date = viewWeekAry[t];
			updateObj.date_list[t].daily_done = false;
			updateObj.date_list[t].hours = {};
			let dTodos = 0;
			let dTruth = 0;
			$td.find('.weekmap-hours').each(function(h){
				const $hours = $(this);
				const hKey = hoursAry[h];
				updateObj.date_list[t].hours[hKey] = [];
				$hours.find('.weekmap-item').each(function(i){
					const $item = $(this);
					const sVal = $item.attr('data-sort');
					const dVal = $item.attr('data-done');
					if( dVal != 4 ){
						dTodos ++
						wTodos ++;
						updateObj.date_list[t].hours[hKey][i] = {};
						updateObj.date_list[t].hours[hKey][i].done = dVal;
						updateObj.date_list[t].hours[hKey][i].sort = sVal;
					}
					if( dVal == 1 ){ 
						dTruth ++;
						wTruth ++;
					};
				});
				updateObj.date_list[t].daily_todos = dTodos;
				updateObj.date_list[t].daily_truth = dTruth;
			})
		})

		updateObj.weekly_todos= wTodos;
		updateObj.weekly_truth= wTruth;


		updateObj.weekly_todos = wTodos;

		console.log(updateObj);

		apiWeek[viewWeekId] = updateObj;
		fnPrintWeekMap( viewWeekId );
		// fnWeekObjUpdate();

	});

	// $('#edit-week').click();
});