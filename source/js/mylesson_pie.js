const defaultCanvasHtml = {
	pie: '<div class="piebox-item"><canvas id="canvasPie" width="120" height="120"></canvas></div>',
};

const pie_color = {
	"基礎養成": "#f5355a",
	"自我意識": "#a476c1",
	"生活": "#fcbfe0",
	"專業通則": "#ffa800",
	"社交": "#7ddaeb",
	"通識": "#69d685"
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
	for( key in pie_color ){
		valboxHtml += '<div class="canvas-valbox-item">';
		valboxHtml += '<div class="canvas-valbox-block" style="background-color:'+ pie_color[key] +'">';
		valboxHtml += '</div>'
		valboxHtml += '<div class="canvas-valbox-name">';
		valboxHtml += key;
		valboxHtml += '</div>'
		valboxHtml += '</div>'
	};
	$('.canvas-valbox').html(valboxHtml);

	// 配色 v
	const backgroundColor = [];
	DATA.labels.forEach(function(item){
		for( key in pie_color ){
			if( item == key ){
				backgroundColor.push( pie_color[key] )
			}
		}
	});

	// 各階顯示 / 隱藏 v
	$('.piebox-item').show();
	const data = {
		labels: DATA.labels,
		datasets: [{
			data: DATA.data,
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

	new Chart( document.getElementById("canvasPie"), {
		type: 'pie',
		data,
		options
	});
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