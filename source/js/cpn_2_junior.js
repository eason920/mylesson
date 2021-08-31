// ==========================================
// == FILTER v
// ==========================================
const prefix = 'https://funday.asia/';
Vue.filter('filterBG', (str) => { return 'background-image: url(' + str + ')' });
Vue.filter('filterSrc', (str) => {
	// if( str !== undefined){
		return prefix + 'en/pic/'+str
	// }
});
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


// ==========================================
// == BLOCK 1 v
// ==========================================
const cpn_tread = {
	props: ['prop', 'req_fn', 'req_pic', 'req_style'],
	template: `
		<div class="grid1-item add-hr"
			:onclick='req_fn'
		>
			<div class="grid-subtitle">{{prop.ch_subject}}</div>
			<div class="grid-content">
				<img class="grid1-img" :src='req_pic'/>
				<div class="grid1-text"
					:style='req_style'
				>{{prop.ch_article}}</div>
			</div>
			<div class="grid-view">...｜ {{prop.ndate}}</div>
		</div>
	`
	// <div class="grid-view"><img src="./2020/images/view.svg"/><span>{{prop.read_count}}</span></div>
}

const cpn_fade = {
	props: ['prop', 'req_fn', 'req_pic'],
	template: `
		<div class="fade-main-item"
			:onclick='req_fn'
			:style="req_pic"
			@mouseover='emit_mouseover'
			@mouseout='emit_mouseout'
		>
			<div class="grid-subtitle">{{prop.ch_subject}}</div>
			<div class="fade-en">{{prop.en_subject}}</div>
		</div>
	`,
	methods: {
		emit_mouseover(){
			this.$emit('connect_mouseover');
		},
		emit_mouseout(){
			this.$emit('connect_mouseout')
		}
	}
};

const cpn_fade_dot = {
	props: ['prop'],
	template: `
		<div 
			class="fade-dot-item"
			@mouseover='emit_mouseover(), emit_mouseover2()'
		></div>
	`,
	methods: {
		emit_mouseover(){
			this.$emit('connect_mouseover')
		},
		emit_mouseover2(){
			this.$emit('connect_mouseover2')
		},
	}
}

const cpn_mixin = {
	props: ['prop', 'req_fn', 'req_pic'],
	template: `
		<div class="grid22-item add-hr"
			:onclick='req_fn'
		>
			<div class="grid22-title">
			<div class="grid-view">{{prop.ndate}}</div>
			<div class="grid22-ch">
					<img src="./2020/images/2jr/icon_apple.png"/>
					{{prop.ch_subject}}
				</div>
				<div class="grid22-en">{{prop.en_subject}}</div>
			</div>
			<div class="grid22-info">
				<div class="grid22-left" :style="req_pic"></div>
				<div class="grid22-right">
					<div class="grid22-above">
						<div class="grid-content">{{prop.ch_article}}</div>
					</div>
				</div>
			</div>
		</div>
	`
};

// const cpn_living = {
// 	props: ['prop', 'req_fn'],
// 	template: `
// 		<div class="grid3-item add-hr"
// 			:onclick='req_fn'
// 		>
// 			<div class="grid-subtitle">{{prop.ch_subject}}</div>
// 			<div class="grid-content">{{prop.ch_article}}</div>
// 			<div class="grid-view">...｜ {{prop.ndate}}</div>
// 		</div>
// 	`
// };

const cpn_columns = {
	props: ['prop', 'req_fn', 'req_pic', 'req_repeat'],
	template: `
		<div class="grid32-item add-hr"
			:class='{"is-repeat": req_repeat}'
			:onclick='req_fn'
		>
			<div class="grid-subtitle">{{prop.columns_ChSubject}}</div>
			<div class="grid-content">
				<div class="grid32-img" :style='req_pic'></div>
				<div class="grid32-text">{{prop.columns_Ch}}</div>
			</div>
			<div class="grid-view">...｜ {{prop.columns_udate}}</div>
		</div>
	`
}

// const cpn_office = {
// 	props: ['prop', 'req_fn', 'req_category'],
// 	template: `
// 		<div class="grid4-item add-hr" 
// 			:onclick='req_fn' 
// 			:data-category="req_category"
// 		>
// 			<div class="grid4-sort" v-text='fnFilterCategory(prop.ch_class)'></div>
// 			<div class="grid4-right">
// 				<div class="grid-subtitle">{{prop.ch_subject}}</div>
// 				<div class="grid4-en">{{prop.en_subject}}</div>
// 			</div>
// 		</div>
// 	`,
// 	methods: {
// 		fnFilterCategory(str){
// 			// console.log('cpn off ', str, str == '淺談職場');
// 			if( str == '淺談職場'){ return '公告'};
// 			return str;
// 		}
// 	}
// }

const cpn_tales = {
	props: ['prop', 'req_fn', 'req_pic'],
	template: `
		<div class="tales-item"
			:onclick='req_fn'
		>
			<div class="tales-item-img" :style="req_pic"></div>
			<div class="tales-item-titlebox">
				<div class="tales-item-title">{{prop.subject}}</div>
				<div class="tales-item-title-en">{{prop.subject_en}}</div>
			</div>
		</div>
	`
};

// ==========================================
// == BLOCK 2 v
// ==========================================
const cpn_blog = {
	props: ['prop', 'req_fn', 'req_pic'],
	template: `
	<div class="grid1-item add-hr" 
		:onclick='req_fn'
	>
		<img :src="req_pic" />
		<div class="grid-subtitle">{{prop.subject}}</div>
	</div>
	`
};

const cpn_program = {
	props: ['prop', 'req_fn', 'req_pic'],
	template: `
	<div class="grid3-item" :onclick="req_fn">
		<div class="grid3-img" :style="req_pic"></div>
		<div class="grid3-box">
			<div class="grid3-sort">{{prop.classify}}</div>
			<div class="grid3-ch">{{prop.subject}}</div>
		</div>
	</div>
	`
};

const cpn_musicbox = {
	props: ['prop', 'req_fn', 'req_pic'],
	template: `
	<div class="grid5-item" :onclick='req_fn'>
		<div class="grid5-img" :style="req_pic"></div>
		<div class="grid5-under">
			<div class="grid5-actor">{{prop.singer}}</div>
			<div class="grid5-subtitle">{{prop.song}}</div>
			<div class="grid5-btn"></div>
		</div>
	</div>
	`
}

// =============================
// == SIDE-BAR v
// =============================
const cpn_side_item = {
	props: ['prop', 'req_fn', 'req_sort'],
	template: `
			<div class="sidebar-item" 
				:class='{"is-no-level": !prop.level }'
				:data-sort='req_sort'
				:onclick='req_fn'
			>
				<div class="sidebar-left">
					<div class="sidebar-dot"></div>
					<div class="sidebar-info">
						<div class="sidebar-time"><span>{{prop.sort}}</span>{{prop.date}}</div>
						<div class="sidebar-title">{{prop.level}} {{prop.subject}}</div>
					</div>
				</div>
				<div class="sidebar-right">{{prop.level}}</div>
			</div>
		`
};