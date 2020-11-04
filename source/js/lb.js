let nickName;

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
		str += '<div class="weekmap-item" ';
		str += 'data-skin="' + skin + '" ';
		str += 'data-sort="' + sort + '" ';
		str += 'data-done="0">';
		str += '<div class="weekmap-status"></div>';
		str += '<div class="weekmap-text">'
		str += bus.todoList[sort].title;
		str += '</div>' // -text
		str += '</div>' // -item
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
			sum < 5 ? $target.append(str) : alert('每時段規劃上限為5則');
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
	$('#edit-week, #lb-close, #lbmasker, #edit-send').click(function(){
		console.log( nickName == undefined );
		if( nickName == undefined ){
			nickName = $('.Mnameb span').text();
			$('#sticky-middle b:eq(1)').text(nickName + ' :');
		}

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
		const obj = fnWeekObjMemo();
		//
		fnWeekObjUpdate( obj );
		$.ajax({
			type:"POST",
			url:"./2020/api/Wschedule.asp",
			data:{
				dt_id: viewWeekId
			},
			dataType:"json",
			success: function(data){	
				weekData[viewWeekId] = data;
				fnPrintWeekMap( viewWeekId );

				// CIRCLE ANIMATE v
				// week
				fnCircle(7, weekData[currentWeekId].weekly_rate/100);
				$('#completebox-7 .completebox-text').text( fnMathRound10(weekData[currentWeekId].weekly_rate) + '%' ).removeClass('is-un');
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

	// $('#edit-week').click();
});