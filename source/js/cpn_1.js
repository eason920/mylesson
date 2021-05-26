// ==========================================
// == FILTER v
// ==========================================
const prefix = 'https://funday.asia/';
Vue.filter('filterBGC', (string) => { return 'background-color:' + string });
Vue.filter('filterRadarItem', (number) => { return 'ritem' + ( Number(number) -1 ) });
Vue.filter('filterPercent', (percent) => { return 'width:'+ percent + '%' });

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
			this.$emit('connect_select_lv');
		}
	}
};

const cpn_colbox_row = {
	props: ['prop'],
	template: `
		<div class="collbox-row">
			<div class="collbox-col">{{prop.cursor}}</div>
			<div class="collbox-col">{{prop.already}}</div>
			<div class="collbox-col">{{prop.suggest}}</div>
			<div class="collbox-col">
				<div class="collbox-percent"
					:style="prop.percent | filterPercent"
					:class='{"is-less": prop.percent <= 20}'
				>
					<span>{{prop.percent}}%</span>
				</div>
			</div>
		</div>
	`
};

const cpn_colbox_block = {
	props: ['prop'],
	template: `
		<div class="collbox-block">
			<div class="collbox-title">
				<div class="collbox-row">
					<div class="collbox-col">{{prop.title}}</div>
					<div class="collbox-col">己上過數量</div>
					<div class="collbox-col">建議數量</div>
					<div class="collbox-col">目前進度</div>
				</div>
			</div>
			<div class="collbox-box">
				<cpn_colbox_row
					v-for='(row, j) in prop.item'
					:prop='row'
					:key='j'
				></cpn_colbox_row>
			</div>
		</div>
	`,
	components: {
		cpn_colbox_row
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