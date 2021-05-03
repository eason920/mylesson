const defaultCanvasHtml = {
	pie: '<div class="piebox-item"><canvas id="pie0" width="120" height="120"></canvas></div>',
};

const renderPie = function(DATA){
	// reset v
	// Chart.plugins.register({
	// 	afterDatasetsDraw: function(chartInstance, easing) {
	// 		const ctx = chartInstance.chart.ctx;
	// 		chartInstance.data.datasets.forEach(function() {
	// 			const meta = chartInstance.getDatasetMeta(i);
	// 			if (!meta.hidden && meta.type == 'pie' ) {
	// 				ctx.clearRect(0,0,135,135)
	// 			}
	// 		});
	// 	}
	// });

	// html v
	$('#piebox').html(defaultCanvasHtml.pie);

	// main v
	//- PIE VALUE BOX v
	let valboxHtml = '';
	for( key in DATA.pie_color ){
		valboxHtml += '<div class="canvas-valbox-item">';
		valboxHtml += '<div class="canvas-valbox-block" style="background-color:'+ DATA.pie_color[key] +'">';
		valboxHtml += '</div>'
		valboxHtml += '<div class="canvas-valbox-name">';
		valboxHtml += key;
		valboxHtml += '</div>'
		valboxHtml += '</div>'
	};
	$('.canvas-valbox').html(valboxHtml);

	//- PIE v
	// Chart.defaults.global.defaultFontFamily = "Arial";
	// Chart.defaults.global.defaultFontSize = 12;
	const pieLength = DATA.pie.length - 1;

	// if( pieLength+1 >= 5 ){
	// 	$('#piebox').removeAttr('style').css('width', $('.piebox-item').width() * (pieLength+1) );
	// }else{
	// 	$('#piebox').css('justify-content', 'space-around')
	// }

	// for(i=0;i<=5;i++){
	// for(i=0;i<=5;i++){
	for(i=0;i<=pieLength;i++){
		if( DATA.pie[i] != undefined ){
			// 配色 v
			const backgroundColor = [];
			DATA.pie[i].labels.forEach(function(item){
				for( key in DATA.pie_color ){
					if( item == key ){
						backgroundColor.push( DATA.pie_color[key] )
					}
				}
			});

			// 各階顯示 / 隱藏 v
			$('.piebox-item:eq('+i+')').show();
			const data = {
				labels: DATA.pie[i].labels,
				datasets: [{
					data: DATA.pie[i].data,
					backgroundColor
				}]
			};
			
			// 結構 cnavas v
			const options = {
				legend: { // AREA : 上方導引色塊
					display: false
				},
				tooltips: { // AREA : 在點上 mouseover 出的報告小視窗
					displayColors: false, // 小色塊顯示
				}
			};
		
			new Chart( document.getElementById("pie"+i), {
				type: 'pie',
				data,
				options
			});
		};
	};

};

// --------------------------------
Chart.plugins.register({
	afterDatasetsDraw: function(chartInstance, easing) {
		// To only draw at the end of animation, check for easing === 1
		const ctx = chartInstance.chart.ctx;

		let total = 0;
		chartInstance.data.datasets[0].data.forEach(function(item){
			total += item;
		})
		// console.log(total);
		// console.log('----', chartInstance.data.datasets[0].data);
		chartInstance.data.datasets.forEach(function(dataset, i) {
			const meta = chartInstance.getDatasetMeta(i);
			// console.log('meta is ', meta);
			if (!meta.hidden && meta.type == 'pie' ) {
				meta.data.forEach(function(element, index) {
					// if( element._chart.config.type == 'pie'){
						// Draw the text in black, with the specified font
						ctx.fillStyle = '#000';
						const fontSize = 15;
						const fontStyle = 'normal';
						const fontFamily = 'Helvetica Neue';
						ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
						// Just naively convert to string for now
						const dataString = dataset.data[index].toString();
						// const percent = Math.round(dataString / total * 100 * 10)/10;
						const percent = Math.round(dataString / total * 100 );
						// Make sure alignment settings are correct
						ctx.textAlign = 'center';
						ctx.textBaseline = 'middle';
						const position = element.tooltipPosition();
						// ctx.fillText( percent +'%(' + dataString + ')' , position.x, position.y);
						ctx.fillText( percent +'%' , position.x, position.y);
					// }
				});
			}
		});
	}
});