<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>
<!-- #include virtual="include/dbconnection.asp"-->  
<%   
	response.Buffer = true   
	session.CodePage = 65001   
	response.Charset = "utf-8"

	sql="select count(indx) as c from member where customer_id=411"
	set rs=connection2.execute(sql)
	if not rs.eof then
		num=rs("c")
	end if
%>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>vue</title>
		<link href="./css/mylesson_vue.css" rel="stylesheet">
		<script>
			const memberLevel = 'c1';
		</script>
		<script src="./assets/plugins/jquery/jquery.1.12.4.min.js"></script>
		<script src="./assets/plugins/chart-js/Chart-2.7.2.min.js"></script>
		<script src="./assets/plugins/vue/vue2.6.12.js"></script>
		<!--script src="./js/mylesson_pie.js"></script-->
		<!--script src="./js/mylesson_radar.js"></script-->
		<script src="./js/mylesson_vue.js"></script>
		<script src="./js/cpn_1.js"></script>
	</head>
	<body> 
		<div id="app">
			<div id="level">
				<cpn_level_item
					v-for='(item, i) in level'
					:prop='item'
					:class='{"active": item == selectedLevel}'
					:key='i'
					@connect_select_lv='fnSelectLv(item)'
				>
			</div>
			<div id="status-box">
				<div id="status-left"> 
					<div id="status-top">
						<div class="status-title">課程建議</div>
						<div id="collbox">
							<div class="collbox-content">
								<cpn_colbox_block
									v-for='(item, i) in bigDataNow.suggest'
									:prop='item'
									:key='i'
								>
								<!--v-for='(item, i) in reactiveNowSuggest'-->
								<!--v-for='(item, i) in bigData.c1.suggest'-->
							</div>
						</div>
					</div>
					<div id="status-bottom">
						<div id="pie">
							<div class="status-title">學習面向</div>
							<div id="piebox">
								<!-- .status-title 學習面向-->
								<!-- **應前往「js/crm_canvas.js」中增的變數「defaultCanvasHtml.pie」中結構以下變化-->
								<!-- .piebox-item-->
								<!-- 	.canvars-title-->
								<!-- 	canvas#pie0(width='120' height='120')-->
							</div>
							<div class="canvas-valbox">
								<cpn_pie_val_box
									v-for='(value, key) in pieColor'
									:req_key='key'
									:req_val='value | filterBGC'
									:key='key'
								>
							</div>
						</div>
						<div class="sambr-canvas">
							<div class="canvars-box1">
								<div class="canvars-title">學習指標</div>
								<canvas id="chartRadar" height="140" width="260"></canvas>
								<cpn_radar_item
									v-for='(num, i) in 7'
									:class='num | filterRadarItem'
									:key='i'
								>
							</div>
						</div>
					</div>
				</div>
				<div id="status-right">
					<div class="status-title">養成目標</div>
					<div id="status-iframe">
						<div id="status-page"></div>
					</div>
				</div>
			</div>
		</div>
	</body>
</html>
<script>
	const app = new Vue({
		created(){
			const vm = this;
			$.ajax({
				type: 'GET',
				url: './data/big_data.json' + vm.time,
				dataType: 'json',
				success: function(data){
					vm.bigData = data;
					vm.bigDataNow = vm.bigData[vm.selectedLevel];
					vm.fnRenderPie(vm.bigData[vm.selectedLevel].pie);
					vm.fnRenderRadar(vm.bigData[vm.selectedLevel].radar_basic, vm.bigData[vm.selectedLevel].radar);
				}
			});
		},
		computed: {
			reactiveNowBigData(){
				return this.bigData[this.selectedLevel];
			},
			reactiveNowSuggest(){
				//- bigData.c1.suggest
				return this.bigData[this.selectedLevel];
			},
			reactiveNowPie(){
				return this.bigData[this.selectedLevel].pie;
			}
		},
		methods: {
			fnSelectLv(lv){
				const vm = this;
				if( vm.selectedLevel != lv ){
					vm.selectedLevel = lv;
					$('#status-page').load('../../TeachingCenter/concept4_part.html #' + lv + ' > *');
				}else{
					console.log('the same label');
				}
			},
			fnRenderPie(DATA){
				const vm = this;
				// html v
				$('#piebox').html(vm.defHtml.pie);

				// 配色 v
				const backgroundColor = [];
				DATA.labels.forEach(function(item){
					for( key in vm.pieColor ){
						if( item == key ){
							backgroundColor.push( vm.pieColor[key] )
						}
					}
				});

				const data = {
					labels: DATA.labels,
					datasets: [{
						data: DATA.data,
						backgroundColor
					}]
				};
				
				const options = {
					legend: { // AREA : 上方導引色塊
						display: false
					},
					tooltips: { // AREA : 在點上 mouseover 出的報告小視窗
						displayColors: false, // 小色塊顯示
					}
				};

				// 結構 cnavas v
				new Chart( document.getElementById("canvasPie"), {
					type: 'pie',
					data,
					options
				});

				Chart.plugins.register({
					afterDatasetsDraw: function(chartInstance, easing) {
						// To only draw at the end of animation, check for easing === 1
						const ctx = chartInstance.chart.ctx;
						let total = 0;
						chartInstance.data.datasets[0].data.forEach(function(item){
							total += item;
						});
						chartInstance.data.datasets.forEach(function(dataset, i) {
							const meta = chartInstance.getDatasetMeta(i);
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
									ctx.fillText( percent +'%' , position.x, position.y);
									// }
								});
							}
						});
					}
				});
			},
			fnAfterRenderPie(){},
			fnChartRadar(data, level, max) {
				const vm = this;
				new Chart($("#chartRadar"), {
					type: 'radar',
					data: {
						labels: level.title,
						datasets: [{
							data,
							backgroundColor: vm.radarColor.color2,
							borderColor: vm.radarColor.color1,
							pointBackgroundColor: vm.radarColor.colorT,
							pointBorderColor: vm.radarColor.colorT,
							// pointHoverBackgroundColor: vm.radarColor.color3,
							// pointHoverBorderColor: vm.radarColor.color1,
							borderWidth: .1
						}]
					},
					options: {
						responsive: false,
						maintainAspectRatio: true,
						scale: {
							gridLines: { // AREA : x & y 軸(axis)導引線
								display: true,
								color: vm.radarColor.color3,
								lineWidth: .2
							},
							angleLines: { // 放射導引線
								display: true,
								lineWidth: .2,
								color: vm.radarColor.color3
							},
							ticks: { // AREA : 同心導引圈的「數字」
								beginAtZero: true,
								stepSize: 1, // 限定每圈彼此的間隔數字
								min: 0,
								max,
								backdropColor: 'transparent',// 文字背景清空
								display: false, // 導引圈數字隱藏
								borderColor: vm.radarColor.color3,
							},
							pointLabels: { // AREA : 各軸代表意義文字
								display: true,
								fontSize: 13, // 字級
								fontColor: "#f74769",
								fontFamily: "PingFangTC-Regular, Microsoft JhengHei, sans-serif"
							}
						},
						legend: { // AREA : 上方導引色塊
							display: false
						},
						tooltips: { // AREA : 在點上 mouseover 出的報告小視窗
							enabled: false, // 是否要運作
							caretPadding: 10, // 與 point 的距離
							displayColors: false, // 小色塊顯示
						}
					}
				});
			},
			fnRenderRadar(levelDATA, DATA){
				const vm = this;
				// ------------------------------------
				// -- RADAR : MSG WRITE
				// ------------------------------------
				const math = function (num, pos) {
					const size = Math.pow(10, pos);
					return Math.round(num * size) / size;
				}

				let memAry = [];
				const cutEnd = DATA.level.indexOf('-');
				const level = DATA.level.slice(0, cutEnd);

				const stepMax = levelDATA.step;
				$('.canvars-box1').removeClass('A1 A2 B1 B2 C1').addClass(level);
				let index = 0;
				for( let a in levelDATA.group ){
					const unit = levelDATA.group[a];

					let ary;
					
					const memNum = DATA.data[index];
					
					let now = '', miss = '', next = '';
					switch(true){
						case memNum < unit[0]:
							now = level + '-1';
							miss = unit[0] - memNum;
							next = level + '-1';
							ary = math(memNum / (unit[0]), 1);
							break;
						case memNum >= unit[0] && memNum < unit[1] :
							// console.log(a + ' is -1');
							now = level + '-1';
							miss = unit[1] - memNum;
							next = level + '-2';
							ary = math((memNum - unit[0]) / (unit[1] - unit[0]), 1) + 1;
							break;				
						case memNum >= unit[1] && memNum < unit[2] :
							// console.log(a + ' is -2');
							now = level + '-2';
							miss = unit[2] - memNum;
							next = level + '-3';
							ary = math((memNum - unit[1]) / (unit[2] - unit[1]), 1) + 2;
							break;						
						case stepMax >= 4 &&memNum >= unit[2] && memNum < unit[3] :
							// console.log(a + ' is -3');
							now = level + '-3';
							miss = unit[3] - memNum;
							next = level + '-4';
							ary = math((memNum - unit[2]) / (unit[3] - unit[2]), 1) + 3;
							break;				
						case stepMax >= 5 && memNum >= unit[3] && memNum < unit[4] :
							// console.log(a + ' is -4');
							now = level + '-4';
							miss = unit[4] - memNum;
							next = level + '-5';
							ary = math((memNum - unit[3]) / (unit[4] - unit[3]), 1) + 4;
							break;
						case stepMax >= 6 && memNum >= unit[4] && memNum < unit[5] :
							// console.log(a + ' is -5');
							next = level + '-6';
							now = level + '-5';
							miss = unit[5] - memNum;
							ary = math((memNum - unit[4]) / (unit[5] - unit[4]), 1) + 5;
							break;
						default:
							// console.log(a + 'is -' + stepMax);
							now = level + '-' + stepMax;
							ary = stepMax;
							$('.ritem' + index).addClass('is-top');
					};
					
					memAry.push(ary);

					$('.ritem' + index + ' .radar-now').text(memNum + ' ( ' + now + ' )');
					$('.ritem' + index + ' .radar-step').text('+' + miss + ' ➜ ' + next);
					index += 1
				};

				// ------------------------------------
				// -- RADAR : MAIN ACTION
				// ------------------------------------
				vm.fnChartRadar(memAry, levelDATA, stepMax);
			}
		},
		data: {
			bigData: new Object,
			bigDataNow: new Object,
			time: '?' + new Date().getTime(),
			selectedLevel: memberLevel,
			level: ['a1', 'a2', 'b1', 'b2', 'c1'],
			defHtml: {
				pie: '<div class="piebox-item"><canvas id="canvasPie" width="120" height="120"></canvas></div>'
			},
			pieColor: {
				基礎養成: "#f5355a",
				自我意識: "#a476c1",
				生活: "#fcbfe0",
				專業通則: "#ffa800",
				社交: "#7ddaeb",
				通識: "#69d685"
			},
			radarColor: {
				color1: '#f74769',
				color2: 'rgba(247, 71, 105, .4)',
				color3: '#aaa',
				colorT: 'transparent',
			}
		},
		components: {
			cpn_level_item,
			cpn_pie_val_box,
			cpn_radar_item,
			cpn_colbox_block,
			cpn_colbox_row
		},
		el: "#app"
	})
</script>