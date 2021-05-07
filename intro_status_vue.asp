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
			const memberLevel = 'b2';
		</script>
		<script src="./assets/plugins/jquery/jquery.1.12.4.min.js"></script>
		<script src="./assets/plugins/chart-js/Chart-2.7.2.min.js"></script>
		<script src="./assets/plugins/vue/vue2.6.12.js"></script>
		<script src="./js/mylesson_pie.js"></script>
		<script src="./js/mylesson_radar.js"></script>
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
							<div class="collbox-content"></div>
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
								<div class="canvas-valbox-item"> 
									<!--.canvas-valbox-name 正規教室-->
									<!--.canvas-valbox-block(style='background-color: #aaa')-->
								</div>
							</div>
						</div>
						<div class="sambr-canvas">
							<div class="canvars-box1">
								<div class="canvars-title">學習指標</div>
								<canvas id="chartRadar" height="140" width="260"></canvas>
								<div class="radar-item ritem0">
									<div class="radar-now"></div>
									<div class="radar-step"></div>
								</div>
								<div class="radar-item ritem1"> 
									<div class="radar-now"></div>
									<div class="radar-step"></div>
								</div>
								<div class="radar-item ritem2"> 
									<div class="radar-now"></div>
									<div class="radar-step"></div>
								</div>
								<div class="radar-item ritem3"> 
									<div class="radar-now"></div>
									<div class="radar-step"></div>
								</div>
								<div class="radar-item ritem4"> 
									<div class="radar-now"></div>
									<div class="radar-step"></div>
								</div>
								<div class="radar-item ritem5">
									<div class="radar-now"></div>
									<div class="radar-step"></div>
								</div>
								<div class="radar-item ritem6"> 
									<div class="radar-now"></div>
									<div class="radar-step"></div>
								</div>
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
						// renderAll(memberLevel);
						//
						// new PerfectScrollbar('#collbox');
						// new PerfectScrollbar('#status-iframe');
					}
				});

		},
		computed: {
			reactiveBigDataNow(){
				return this.bigData[this.selectedLevel];
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
		},
		data: {
			bigData: new Object,
			time: '?' + new Date().getTime(),
			selectedLevel: memberLevel,
			level: ['a1', 'a2', 'b1', 'b2', 'c1'],
		},
		components: {
			cpn_level_item,
		},
		el: "#app"
	})
</script>