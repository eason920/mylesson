$(()=>{
	$('#runway-official-restart').click(function(){
		const nickName = $('.Mnameb span').text();
		const check = confirm('確定要重置會員「'+nickName+'」的升級規劃時間嗎?')
		if( check ){
			$.ajax({
				type: "POST",
				url: "./2020/api/runningUpdate.asp?Rstart=R",
				success: function(res){
					$('#runway-finish b').text('');
	
					// init v
					fnAfterUpdatePlay();
				}
			});
		}
	});
});