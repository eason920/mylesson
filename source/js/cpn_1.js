// ==========================================
// == FILTER v
// ==========================================
const prefix = 'https://funday.asia/';
Vue.filter('filterBGC', (string) => { return 'background-color:' + string });
Vue.filter('filterRadarItem', (number) => { return 'ritem' + ( Number(number) -1 ) });
// Vue.filter('filterBG', (str) => { return 'background-image: url(' + str + ')' });
// Vue.filter('filterSrc', (str) => { return prefix + 'en/pic/'+str });
// Vue.filter('filterMagazineSrc', (str) => { return prefix + 'funMz/'+str });
// Vue.filter('filterColumnSrc', (str) => { return prefix + 'column/pic/' + str });
//
Vue.filter('filterSort', (str) => {
	let i;
	switch( str ){
		case '影片': i = 1;break;
		case '測驗': i = 12;break;
		case '寫作': i = 3;break;
		case '童話': i = 4;break;
		case '專欄': i = 5;break;
		case '文章': i = 6;break;
		case '音樂': i = 7;break;
		case '會話': i = 8;break;
		case '研習營': i = 9;break;
		case '實力衝刺': i = 10;break;
		case '朗讀練習': i = 11;break;
	}
	return i;
});
//
Vue.filter('filterOffice14Name', (str) => {
	if(str == '淺談職場'){ return '公告' }else{ return str};
});
Vue.filter('filterOffice14Class', (id) => {
	if( id == '14'){ return '37-14' }else{ return id }
})

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

const cpn_colbox_block = {
	props: ['prop'],
	template: `
		<div class="collbox-block">
			<div class="collbox-title">
				<div class="collbox-row">
					<div class="collbox-col">數位學堂</div>
					<div class="collbox-col">己上過數量</div>
					<div class="collbox-col">建議數量</div>
					<div class="collbox-col">目前進度</div>
				</div>
			</div>
			<div class="collbox-box">
				<!--div class="collbox-row">
					<div class="collbox-col">數位項目2</div>
					<div class="collbox-col">45</div>
					<div class="collbox-col">36</div>
					<div class="collbox-col">
						<div class="collbox-percent" style="width:100%"><span>100%</span></div>
					</div>
				</div>
				<div class="collbox-row">
					<div class="collbox-col">數位項目3</div>
					<div class="collbox-col">10</div>
					<div class="collbox-col">77</div>
					<div class="collbox-col">
						<div class="collbox-percent is-less" style="width:13%"><span>13%</span></div>
					</div>
				</div-->
			</div>
		</div>
	`
};

const cpn_colbox_row = {
	props: [],
	template: `
		<div class="collbox-row">
			<div class="collbox-col">數位項目1</div>
			<div class="collbox-col">13</div>
			<div class="collbox-col">36</div>
			<div class="collbox-col">
				<div class="collbox-percent" style="width:36%"><span>36%</span></div>
			</div>
		</div>
	`
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