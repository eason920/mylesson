let nickName;

const fnCheckWeekTest = function(){
	let sum=0;
	$('#lb .weekmap-date .weekmap-td').each(function(){
		const $td = $(this);
		$td.find('.weekmap-hours').each(function(){
			const $box = $(this).find('.weekmap-in');
			$box.find('.weekmap-item').each(function(){
				if ( $(this).attr('data-sort') == 3 ){ sum ++ };
			})
		})
	});
	return sum;
};

$(()=>{
	let str;
	let selectSort;
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
		str += '<div class="weekmap-item" ';
		str += 'data-skin="' + skin + '" ';
		str += 'data-sort="' + sort + '" ';
		str += 'data-done="0">';
		str += '<div class="weekmap-status"></div>';
		str += '<div class="weekmap-text">'
		str += bus.todoList[sort].title;
		str += '</div>' // -text
		str += '</div>' // -item

		//
		selectSort = sort;
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
			const weekTest = fnCheckWeekTest();
			const camp = $target.find('.weekmap-item[data-sort="10"]').length;
			if( sum < 5 ){
				switch(true){
					case selectSort == 3:
						console.log(weekTest, weekTest < 1);
						weekTest < 1 ? $target.append(str) : alert('每週只可安排一則「每週測驗」');
						break;
					case selectSort == 10:
						camp < 2 ? $target.append(str) : alert('每時段規劃「研習營」的上限為二個');
						break;
					default:
						$target.append(str);
				}

			}else{
				alert('每時段規劃上限為5則');
			}
		};
	});

	// DELETE ITEM v
	$('#lb').on('click', '.weekmap-item', function(){
		const $this = $(this);
		if ($('#lb').attr('data-edit') == 'false' && $this.parent().parent().attr('data-plan') == 'true' ){
			$this.attr('data-done') == 4 ? $this.attr('data-done', 0) : $this.attr('data-done', 4);
		}
	});

	// OPEN v
	// $('#edit-week, #lb-close, #lbmasker, #edit-send').click(function(){
	$('#lb-close, #lbmasker, #edit-send').click(function(){
		const $lb = $('#lb');
		const $mk = $('#lbmasker');
		//
		$lb.fadeOut(100);
		$mk.fadeOut(100);
		setTimeout(()=>{
			$lb.addClass('is-hide');
			$mk.addClass('is-hide');
		}, 400);
		//
		$lb.attr('data-edit', false);
		$('.edit-item').removeClass('active');
	});

	$('#edit-send').click(function(){
		const delay = 100;
		$('#load-cal').fadeIn(delay);
		$('#calbox, #achive, #facemap-open').fadeOut(delay);
		const obj = fnWeekObjMemo();
		//
		// fnWeekObjUpdate( obj );
		// $.ajax({
		// 	type:"POST",
		// 	url:"./2020/api/Wschedule.asp",
		// 	data:{
		// 		dt_id: viewWeekId
		// 	},
		// 	dataType:"json",
		// 	success: function(data){	
		// 		weekData[viewWeekId] = data;
		// 		fnPrintWeekMap( viewWeekId );
		// 		console.log(data);
		// 		console.log( weekData[viewWeekId] );
		// 		// CIRCLE ANIMATE v
		// 		// week
		// 		fnCircle(7, weekData[viewWeekId].weekly_rate/100);
		// 		$('#completebox-7 .completebox-text').text( fnMathRound10(weekData[viewWeekId].weekly_rate) + '%' ).removeClass('is-un');
		// 	}
		// });
		// ^ old
		// v new
		const reg = new RegExp(',null', 'g')
		const data = JSON.stringify(obj).replace(reg, '');
		console.log(data);

		$.ajax({
			type:"POST",
			url:"./2020/api/WscheduleUpdate.asp",
			data,
			dataType:"html",
			success:function(data){	
				console.log('update');
				console.log('success', data);
				$.ajax({
					type:"POST",
					url:"./2020/api/Wschedule.asp",
					data:{
						dt_id: viewWeekId
					},
					dataType:"json",
					success:function(data){	
						console.log('get');
						weekData[viewWeekId] = data;
						fnPrintWeekMap(viewWeekId);
						fnCircle(7, weekData[viewWeekId].weekly_rate/100);
						$('#completebox-7 .completebox-text').text( fnMathRound10(weekData[viewWeekId].weekly_rate) + '%' ).removeClass('is-un');
					
						$('#load-cal').fadeOut();
						$('#calbox, #achive, #facemap-open').fadeIn();
					},
					error:function(){
						alert('因網路不穩定造成更新失敗，請稍候再試');
					}
				});

			},
			error:function(data){
				alert('因網路不穩定造成更新失敗，請稍候再試');
			}
		});

		$.ajax({
			type: "POST",
			url: "./2020/API/running.asp",
			success: function(res){
				completeObj = JSON.parse(res);

				// CIRCLE ANIMATE v
				// month
				fnCircle(30, completeObj.monthy[currentFaceId]/100 );
				$('#completebox-30 .completebox-text').text( fnMathRound10(completeObj.monthy[currentFaceId]) + '%' ).removeClass('is-un');
				// season
				fnCircle(90, completeObj.seasons[1].rate/100 );
				$('#completebox-90 .completebox-text').text( fnMathRound10(completeObj.seasons[1].rate) + '%' ).removeClass('is-un');
			}
		});
	});

	$('#edit-clean').click(function(){
		$('#lb .weekmap-hours[data-plan="true"]').find('.weekmap-in').html('');
	});
});