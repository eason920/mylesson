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
		<script src="./assets/plugins/jquery/jquery.1.12.4.min.js"></script>
		<script src="./assets/plugins/chart-js/Chart-2.7.2.min.js"></script>
		<script src="./assets/plugins/vue/vue2.6.12.min.js"></script>
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
								<!-- v reactive 4. 此另名 compouted 函式(reactiveNowSuggest)給 view 中的 cpn 使用 -->
								<cpn_colbox_block
									v-for= '(block, i) in reactiveNowSuggest'
									:prop = 'block'
									:key = 'i'
								>
							</div>
						</div>
					</div>
					<div id="status-bottom">
						<div id="pie">
							<div class="status-title">學習面向</div>
							<div id="piebox">
								<div class="piebox-item">
									<canvas class="pie" id="pieA1" width="120" height="120"></canvas>
									<canvas class="pie" id="pieA2" width="120" height="120"></canvas>
									<canvas class="pie" id="pieB1" width="120" height="120"></canvas>
									<canvas class="pie" id="pieB2" width="120" height="120"></canvas>
									<canvas class="pie" id="pieC1" width="120" height="120"></canvas>	
								</div>
							</div>
							<div class="canvas-valbox">
								<cpn_pie_val_box
									v-for='(value, key) in pieColor'
									:class='{"is-hidden": /紀錄/.test(key) }'
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
				// api 本機 v
				// url: './data/big_data.json' + vm.time,
				// api 測試 v (帶id可測試不同帳號結果)
				// url: 'https://funday.asia/mylesson/2020/data/data.asp?member_id=303222&customer_id=411',
				// 227332
				// 303222
				
				// api 正式 v (參數全部不帶)
				url: 'https://funday.asia/mylesson/2020/data/data2.asp',
				dataType: 'json',
				success: function(data){
					console.log('data is ', data);
					vm.bigData = data;
					for( lv in vm.bigData ){
						for( idx in vm.bigData[lv].suggest ){
							for( idx2 in vm.bigData[lv].suggest[idx].item ){
								// basic count v
								const already = vm.bigData[lv].suggest[idx].item[idx2].already;
								const suggest = vm.bigData[lv].suggest[idx].item[idx2].suggest;
								let percent = Math.floor( already / suggest * 100 );

								// else 1 : less now level v
								const idxThis = vm.level.findIndex(item => item == lv );
								const idxMember = vm.level.findIndex(item => item == vm.selectedLevel);

								// else 2 > 100 bug (& else 1) v
								if( percent > 100 || idxThis < idxMember ){ percent = 100 };

								// write v
								vm.bigData[lv].suggest[idx].item[idx2].percent = percent;
								//
							}
						}
					}
					vm.bigDataNow = vm.bigData[vm.selectedLevel];
					vm.fnAll(vm.bigData, vm.selectedLevel);
				}
			});
		},
		computed: {
			reactiveNowSuggest(){
				return this.bigDataNow.suggest; //- reactive 3. 被變化的 data 另名設定入 computed 中
			}
		},
		methods: {
			fnSelectLv(lv){
				const vm = this;
				if( vm.selectedLevel != lv ){
					vm.selectedLevel = lv;
					vm.bigDataNow = vm.bigData[vm.selectedLevel]; //- reactive 2. 主動行為觸發 methods 函式中的 data
					vm.fnAll(vm.bigData, lv);
				}else{
					console.log('the same label');
				}
			},
			fnAll(data, lv){
				const vm = this;
				vm.fnRenderPie(data[lv].pie, lv);
				vm.fnRenderRadar(data[lv].radar_basic, data[lv].radar, lv);
				$('#status-page').load('../../TeachingCenter/concept4_part.html #' + lv.toLowerCase() + ' > *');
			},
			fnRenderPie(DATA, lv){
				const vm = this;
				$('.pie').hide();
				$('#pie'+lv).show();
				// reset v (不是正確清除字體變粗方法，只會使 chart.js 沒有繪製 )
				// Chart.plugins.register({
				// 	afterDatasetsDraw: function(chartInstance, easing) {
				// 		const ctx = chartInstance.chart.ctx;
				// 		chartInstance.data.datasets.forEach(function(item, i) {
				// 			const meta = chartInstance.getDatasetMeta(i);
				// 			if (!meta.hidden && meta.type == 'pie' ) {
				// 				ctx.clearRect(0,0,135,135)
				// 			}
				// 		});
				// 	}
				// });

				// 配色 v
				let dataBackgroundColor = [];
				DATA.labels.forEach(function(item){
					for( key in vm.pieColor ){
						if( item == key ){
							dataBackgroundColor.push( vm.pieColor[key] )
						}
					}
				});
				
				// labels & data v
				let dataLabels = DATA.labels;
				let dataData = DATA.data;

				if( DATA.data[0] == -1 && DATA.data[1] == -1 && DATA.data[2] == -1 ){
					dataData = [-1];

					const idxThis = vm.level.findIndex(item => item == lv );
					const idxMember = vm.level.findIndex(item => item == location.href.split('?')[1]);
					switch(true){
						case idxThis < idxMember:
							dataLabels = ['歷史紀錄不及備載'];
							dataBackgroundColor = ["#fcb5c3"]
							break;
						case idxThis == idxMember:
							dataLabels = ['尚無學習紀錄'];
							dataBackgroundColor = ["#a7c6ff"]
							break;
						default:
					};
				};

				const	data ={
					labels: dataLabels,
					datasets: [{
						data: dataData,
						backgroundColor: dataBackgroundColor
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
				new Chart( document.getElementById("pie"+lv), {
					type: 'pie',
					data,
					options
				});

				// 文字繪製只執行一次(多次字會變粗)(只一次，但數值變化效果仍在) v
				if( !vm.drawTxt ){
					vm.drawTxt = true;
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
				};
			},
			fnChartRadar(data, labels, max, lv) {
				const vm = this;

				const idxThis = vm.level.findIndex(item => item == lv.split('-')[0] );
				const idxMember = vm.level.findIndex(item => item == location.href.split('?')[1]);

				// console.log('this', idxThis, '/mem', idxMember, 'm > this', idxMember > idxThis);
				// if( idxMember > idxThis ){
				// 	console.log('is -1 ?', data, '/', data[0], '/', data[0] == -1 );
				// };
				// console.log('>>>>lv', lv);
				// console.log('>>>>>', labels);
				// console.log('>>>>>', max);

				new Chart($("#chartRadar"), {
					type: 'radar',
					data: {
						labels,
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
			fnRenderRadar(radarBasic, radar, lv){
				const vm = this;
				// ------------------------------------
				// -- RADAR : MSG WRITE
				// ------------------------------------
				const math = function (num, pos) {
					const size = Math.pow(10, pos);
					return Math.round(num * size) / size;
				}

				let memAry = [];
				const cutEnd = radar.level.indexOf('-');
				const level = radar.level.slice(0, cutEnd);

				const stepMax = radarBasic.step;
				$('.canvars-box1').removeClass('A1 A2 B1 B2 C1').addClass(level);

				const idxThis = vm.level.findIndex( item => item == lv );
				const idxMem = vm.level.findIndex( item => item == location.href.split('?')[1] );
				const isLessLv = idxThis < idxMem ? true : false;
				let index = 0;
				
				for( let a in radarBasic.group ){
					// 各值說明：
					// A1: {
					// 	"radar_basic": {
					// 		"title": ["字彙","基礎文法","理解力","發音","簡易應答"],
					// 		"step": 3,
					// 		"group": {
					// 			"vocabulary": [117,271,449],
					//			^a(key本身文字) ^unit(值本身) <## A & UNIT ##
					// 			"grammar": [96,211,342],
					//			^a ...
					// 		}
					// 	},
					// 	"radar":{ 
					// 		"level":"A1-3",
					// 		"title": ["字彙","基礎文法","理解力","發音","簡易應答"],
					// 		"data":[0,0,0,0,0] <## MEM_NUM & INDEX ##
					//            ^memNum(值本身)
					//						^index(取值順序)
					// 	}
					// }
					const unit = radarBasic.group[a];

					let ary_single;
					
					let memNum = radar.data[index];
					if( isLessLv ){
						const max = radarBasic.group[a].length - 1;
						memNum = radarBasic.group[a][max];
					}
					
					let now = '', miss = '', next = '';
					switch(true){
						case memNum < unit[0]:
							// 不分等級、第一角
							now = level + '-1';
							miss = unit[0] - memNum;
							next = level + '-1';
							ary_single = math(memNum / (unit[0]), 1);
							break;
						case memNum >= unit[0] && memNum < unit[1] :
							// console.log(a + ' is -1');
							now = level + '-1';
							miss = unit[1] - memNum;
							next = level + '-2';
							ary_single = math((memNum - unit[0]) / (unit[1] - unit[0]), 1) + 1;
							break;				
						case memNum >= unit[1] && memNum < unit[2] :
							// console.log(a + ' is -2');
							now = level + '-2';
							miss = unit[2] - memNum;
							next = level + '-3';
							ary_single = math((memNum - unit[1]) / (unit[2] - unit[1]), 1) + 2;
							break;						
						case stepMax >= 4 &&memNum >= unit[2] && memNum < unit[3] :
							// console.log(a + ' is -3');
							now = level + '-3';
							miss = unit[3] - memNum;
							next = level + '-4';
							ary_single = math((memNum - unit[2]) / (unit[3] - unit[2]), 1) + 3;
							break;				
						case stepMax >= 5 && memNum >= unit[3] && memNum < unit[4] :
							// console.log(a + ' is -4');
							now = level + '-4';
							miss = unit[4] - memNum;
							next = level + '-5';
							ary_single = math((memNum - unit[3]) / (unit[4] - unit[3]), 1) + 4;
							break;
						case stepMax >= 6 && memNum >= unit[4] && memNum < unit[5] :
							// console.log(a + ' is -5');
							next = level + '-6';
							now = level + '-5';
							miss = unit[5] - memNum;
							ary_single = math((memNum - unit[4]) / (unit[5] - unit[4]), 1) + 5;
							break;
						default:
							// console.log(a + 'is -' + stepMax);
							now = level + '-' + stepMax;
							ary_single = stepMax;
							$('.ritem' + index).addClass('is-top');
					};
					memAry.push(ary_single);

					$('.ritem' + index + ' .radar-now').text(memNum + ' ( ' + now + ' )');
					$('.ritem' + index + ' .radar-step').text('+' + miss + ' ➜ ' + next);
					index += 1
				};

				// ------------------------------------
				// -- RADAR : MAIN ACTION
				// ------------------------------------
				vm.fnChartRadar(memAry, radarBasic.title, stepMax, radar.level);
			}
		},
		data: {
			drawTxt: false,
			bigData: new Object,
			bigDataNow: new Object, //- reactive 1. 綁定 data
			time: '?' + new Date().getTime(),
			selectedLevel: location.href.split('?')[1],
			level: ['A1', 'A2', 'B1', 'B2', 'C1'],
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
			// cpn_colbox_row
		},
		el: "#app"
	})
</script>