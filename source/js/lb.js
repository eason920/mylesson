let listEditable = false;

$(()=>{
	console.log('lb');
	


	let str;
	$('.edit-item').click(function(){
		listEditable = true;
		$('#lb').addClass('is-editable');
		str= ''
		const $this = $(this);
		const skin = $this.parent().attr('data-skin');
		const sort = Number($this.attr('data-index'));
		$('.edit-item').removeClass('active');
		$this.addClass('active');
		console.log( skin,  sort);
		str += '<div class="weekmap-item" ';
		str += 'data-skin="' + skin + '" ';
		str += 'sata-sort="' + sort + '" ';
		str += 'data-done="0">';
		str += '<div class="weekmap-status"></div>';
		str += '<div class="weekmap-text">'
		str += todoList[sort].title;
		str += '</div>' // -text
		str += '</div>' // -item
		console.log(str);
	});

	$('#edit-unedit').click(function(){
		listEditable = false;
		$('#lb').removeClass('is-editable');
		$('.edit-item').removeClass('active');
	});

	$('.weekmap-hours[data-edit="true"]').hover(function(){
		if( listEditable ){
			$('.weekmap-hours').removeClass('is-hover');
			$(this).addClass('is-hover');
		};
	}, function(){
		$('.weekmap-hours').removeClass('is-hover');
	});

	$('.weekmap-hours[data-edit="true"]').click(function(){
		const $this = $(this);
		const $target = $this.find('.weekmap-in');
		if( listEditable ){
			$target.append(str);
		};
	});

	// $('.weekmap-item').click(function(){
	$('#lb').on('click', '.weekmap-item', function(){
		const $this = $(this);
		if( $this.attr('data-done') == 4 ){
			$this.attr('data-done', 0);
		}else{
			$this.attr('data-done', 4);
		}
		
	});

	// ==========================================
	// == LIGHT BOX v
	// ==========================================
	$('#contact, #lbmasker').click(function(){
		fnDatepickerJump(thisWeekYear, thisWeekMonth);
		// fnDatepickerJump(currentWeekYear, currentWeekMonth);
		$('#lbmasker, #lb').toggleClass('open');
	});

	$('#contact').click();
});