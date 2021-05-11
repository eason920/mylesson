// ==========================================
// == FILTER v
// ==========================================
const prefix = 'https://funday.asia/';
Vue.filter('filterBGC', (string) => { return 'background-color:' + string });
Vue.filter('filterRadarItem', (number) => { return 'ritem' + ( Number(number) -1 ) });
// Vue.filter('filterPercent', (percent) => { return 'width:'+ percent });

// ==========================================
// == COMPONENTS v
// ==========================================
const cpn_level_item = {
	props: ['prop'],
	template: `
		<div class="level-item"
			@click='emit_select_lv'
		>{{prop}}</div>
	`,
	methods: {
		emit_select_lv(){
			console.log('test emit');
			this.$emit('connect_select_lv');
		}
	}
};

const cpn_pie_val_box = {
	props: ['req_key', 'req_val'],
	template: `
		<div class="canvas-valbox-item">
			<div class="canvas-valbox-block" :style="req_val">
			</div>
			<div class="canvas-valbox-name">{{req_key}}</div>
		</div>
	`
};

const cpn_radar_item = {
	props: [],
	template: `
		<div class="radar-item">
			<div class="radar-now"></div>
			<div class="radar-step"></div>
		</div>
	`
};

// --------------------------------
// --------------------------------
// const cpn_colbox_block = {
// 	props: ['prop'],
// 	template: `
// 		<div class="collbox-block">
// 			<div class="collbox-title">
// 				<div class="collbox-row">
// 					<div class="collbox-col">數位學堂</div>
// 					<div class="collbox-col">己上過數量</div>
// 					<div class="collbox-col">建議數量</div>
// 					<div class="collbox-col">目前進度</div>
// 				</div>
// 			</div>
// 			<div class="collbox-box">
// 				<!--div class="collbox-row">
// 					<div class="collbox-col">數位項目2</div>
// 					<div class="collbox-col">45</div>
// 					<div class="collbox-col">36</div>
// 					<div class="collbox-col">
// 						<div class="collbox-percent" style="width:100%"><span>100%</span></div>
// 					</div>
// 				</div>
// 				<div class="collbox-row">
// 					<div class="collbox-col">數位項目3</div>
// 					<div class="collbox-col">10</div>
// 					<div class="collbox-col">77</div>
// 					<div class="collbox-col">
// 						<div class="collbox-percent is-less" style="width:13%"><span>13%</span></div>
// 					</div>
// 				</div-->
// 			</div>
// 		</div>
// 	`
// };

// const cpn_colbox_row = {
// 	props: [],
// 	template: `
// 		<div class="collbox-row">
// 			<div class="collbox-col">數位項目1</div>
// 			<div class="collbox-col">13</div>
// 			<div class="collbox-col">36</div>
// 			<div class="collbox-col">
// 				<div class="collbox-percent" style="width:36%"><span>36%</span></div>
// 			</div>
// 		</div>
// 	`
// };