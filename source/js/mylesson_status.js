let bigData = new Object;
let firstLoad = true;
const lvAry = ['a1', 'a2', 'b1', 'b2', 'c1'];
const defLvIndex = lvAry.findIndex( (item) => item == memberLevel );
let nowLv = memberLevel;

// --------------------------------
const renderSuggest = function(data){
	let html = '';
	data.forEach(function(item){
		const title = item.title;
		html += '<div class="collbox-title"> <div class="collbox-row"> <div class="collbox-col">' + title + '</div><div class="collbox-col">己上過堂數</div><div class="collbox-col">建議堂數</div><div class="collbox-col">目前進度</div></div></div>';
		html += '<div class="collbox-box">';
		item.item.forEach(function(obj){
			const cursor = obj.cursor;
			const already = obj.already;
			const suggest = obj.suggest;
			let percent = Math.round( already / suggest * 100 );
			if( percent > 100 ){percent = 100};
			html += '<div class="collbox-row">';
			html += ' <div class="collbox-col">' + cursor + '</div>';
			html += ' <div class="collbox-col">' + already + '</div>';
			html += ' <div class="collbox-col">' + suggest + '</div>';
			html += ' <div class="collbox-col">';
			html += '  <div class="collbox-percent';
			if( percent <= 20 ){ html += ' is-less' }
			html += '" style="width:' + percent + '%"><span>' + percent + '%</span></div>';
			html += ' </div>';
			html += '</div>';
		});
		html += '</div>'
	});
	$('.collbox-content').html(html);
};

const renderAll = function(lv){
	renderSuggest(bigData[lv].suggest);
	renderPie(bigData[lv].pie);
	renderRadar(bigData[lv].radar_basic, bigData[lv].radar);
	$('#status-iframe').load('../TeachingCenter/concept4_part.html #' + lv + ' > *');
}


$(()=>{
	$('.level-item:eq('+ defLvIndex +')').addClass('active');

	// --------------------------------
	$('.label-item').click(function(){
		const status = $(this).attr('data-status');
		$('.label-item').removeClass('active');
		$(this).addClass('active');
		if( status == '0'){
			$('#status').fadeOut();
		}else{
			$('#status').fadeIn();
			if( firstLoad ){
				firstLoad = false;
				const time = '?' + new Date().getTime();
				$.ajax({
					type: 'GET',
					// url: './data/big_data.json' + time,
					url: './2020/data/big_data.json' + time,
					dataType: 'json',
					success: function(data){
						bigData = data;
						renderAll(memberLevel);
					}
				});
			}
		};
	});

	// --------------------------------
	$('.level-item').click(function(){
		const txt = $(this).text();
		if( txt !== nowLv ){
			console.log('different');
			$('.level-item').removeClass('active');
			$(this).addClass('active');
			nowLv = txt;
			console.log('and change nowLv to > ', nowLv);
			renderAll(txt);
		}else{
			console.log('the same ');
		}
	})
});