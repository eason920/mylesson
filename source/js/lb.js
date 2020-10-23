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
		str += bus.todoList[sort].title;
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
		const obj = fnWeekObjMemo();
		apiWeek[viewWeekId] = obj;
		//
		fnPrintWeekMap( viewWeekId );
		fnWeekObjUpdate( obj );
	});

	$('#edit-clean').click(function(){
		console.log('clean');
		$('.weekmap-hours[data-plan="true"]').find('.weekmap-in').html('');
		// $('.weekmap-hours[data-plan="true"]').find('.weekmap-in').html() = '';
	});

	// $('#edit-week').click();
});