$(()=>{
	let str;
	$('.edit-item').click(function(){
		// listEditable = true;
		// $('#lb').addClass('is-editable');
		$('#lb').attr('data-edit', 1);
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
		$('#lb').attr('data-edit', 0);
		$('#lb').removeClass('is-editable');
		$('.edit-item').removeClass('active');
	});

	// ADD ITEM - VISION v
	$('#lb').on('mouseover', '.weekmap-hours[data-edit="true"]', function(){
		$('.weekmap-hours').removeClass('is-hover');
		$(this).addClass('is-hover');
	});
			
	$('#lb').on('mouseout', '.weekmap-hours[data-edit="true"]', function(){
		$('.weekmap-hours').removeClass('is-hover');
	})

	// ADD ITEM - HTML v
	$('#lb').on('click', '.weekmap-hours[data-edit="true"]', function(){
		const $target = $(this).find('.weekmap-in');
		if( $('#lb').attr('data-edit') == 1 ){ $target.append(str) };
	});

	// DELETE ITEM v
	$('#lb').on('click', '.weekmap-item', function(){
		const $this = $(this);
		if( $this.attr('data-done') == 4 ){
			$this.attr('data-done', 0);
		}else{
			$this.attr('data-done', 4);
		}
		
	});

	// OPEN v
	$('#edit-week, #lb-close, #lbmasker, #edit-send').click(function(){
		const $lb = $('#lb');
		const $mk = $('#lbmasker');
		// fnPrintWeekMap( apiWeek[currentWeekId]);
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
		$lb.attr('data-edit', 0);
		$('.edit-item').removeClass('active');
	});
	// $('#edit-week').click();
});