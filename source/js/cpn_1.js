// ==========================================
// == FILTER v
// ==========================================
const prefix = 'https://funday.asia/';
Vue.filter('filterBG', (str) => { return 'background-image: url(' + str + ')' });
Vue.filter('filterSrc', (str) => { return prefix + 'en/pic/'+str });
Vue.filter('filterMagazineSrc', (str) => { return prefix + 'funMz/'+str });
Vue.filter('filterColumnSrc', (str) => { return prefix + 'column/pic/' + str });
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