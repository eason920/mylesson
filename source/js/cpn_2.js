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


// ==========================================
// == BLOCK 1 v
// ==========================================
const cpnTread = {
	props: ['prop', 'reqFn', 'reqPic'],
	template: `
		<div class="grid1-item add-hr"
			:onclick='reqFn'
		>
			<div class="grid-subtitle">{{prop.ch_subject}}</div>
			<div class="grid-content"><img class="grid1-img" :src='reqPic'/>{{prop.ch_article}}</div>
			<div class="grid-view">...｜ {{prop.ndate}}</div>
		</div>
	`
	// <div class="grid-view"><img src="./2020/images/view.svg"/><span>{{prop.read_count}}</span></div>
}

const cpnFade = {
	props: ['prop', 'reqFn', 'reqPic'],
	template: `
		<div class="fade-main-item"
			:onclick='reqFn'
			:style="reqPic"
			@mouseover='emitEvent'
			@mouseout='emitEvent2'
		>
			<div class="grid-subtitle">{{prop.ch_subject}}</div>
			<div class="fade-en">{{prop.en_subject}}</div>
		</div>
	`,
	methods: {
		emitEvent(){
			this.$emit('connecter');
		},
		emitEvent2(){
			this.$emit('connecter2')
		}
	}
};

const cpnFadeDot = {
	props: ['prop', 'reqIndex'],
	template: `
		<div 
			class="fade-dot-item"
			:class="{'active': reqIndex==0}"
			@mouseover='emitEvent(), emitEvent2()'
		></div>
	`,
	data: function(){
		return {
			cKey: this.reqIndex,
		}
	},
	methods: {
		emitEvent(){
			this.$emit('connecter')
		},
		emitEvent2(){
			this.$emit('connecter2')
		},
		emitEvent3(){
			this.$emit('connecter3')
		}
	}
}

const cpnMixin = {
	props: ['prop', 'reqFn', 'reqPic'],
	template: `
		<div class="grid22-item add-hr"
			:onclick='reqFn'
		>
			<div class="grid22-img" :style="reqPic"></div>
			<div class="grid22-right">
				<div class="grid22-above">
					<div class="grid22-ch">{{prop.ch_subject}}</div>
					<div class="grid22-en">{{prop.en_subject}}</div>
					<div class="grid-content">{{prop.ch_article}}</div>
				</div>
				<div class="grid-view">...｜ {{prop.ndate}}</div>
			</div>
		</div>
	`
};

const cpnLiving = {
	props: ['prop', 'reqFn'],
	template: `
		<div class="grid3-item add-hr"
			:onclick='reqFn'
		>
			<div class="grid-subtitle">{{prop.ch_subject}}</div>
			<div class="grid-content">{{prop.ch_article}}</div>
			<div class="grid-view">...｜ {{prop.ndate}}</div>
		</div>
	`
};

const cpnColumns = {
	props: ['prop', 'reqFn', 'reqPic', 'reqRepeat'],
	template: `
		<div class="grid32-item add-hr"
			:class='{"is-repeat": reqRepeat}'
			:onclick='reqFn'
		>
			<div class="grid-subtitle">{{prop.columns_ChSubject}}</div>
			<div class="grid-content">
				<div class="grid32-img" :style='reqPic'></div>
				{{prop.columns_Ch}}
			</div>
			<div class="grid-view">...｜ {{prop.columns_udate}}</div>
		</div>
	`
}

const cpnOffice = {
	props: ['prop', 'reqFn', 'reqCategory'],
	template: `
		<div class="grid4-item add-hr" 
			:onclick='reqFn' 
			:data-category="reqCategory"  
		>
			<div class="grid4-sort" v-text='fnFilterCategory(prop.ch_class)'></div>
			<div class="grid4-right">
				<div class="grid-subtitle">{{prop.ch_subject}}</div>
				<div class="grid4-en">{{prop.en_subject}}</div>
			</div>
		</div>
	`,
	methods: {
		fnFilterCategory(str){
			console.log('cpn off ', str, str == '淺談職場');
			if( str == '淺談職場'){ return '公告'};
			return str;
		}
	}
}

const cpnTales = {
	props: ['prop', 'reqFn', 'reqPic'],
	template: `
		<div class="grid42-item add-hr" 
			:onclick='reqFn'
		>
			<div class="grid42-img" :style="reqPic"></div>
			<div class="grid-subtitle">{{prop.subject}}</div>
		</div>
	`
};

// ==========================================
// == BLOCK 2 v
// ==========================================
const cpnBlog = {
	props: ['prop', 'reqFn', 'reqPic'],
	template: `
	<div class="grid1-item add-hr" 
		:onclick='reqFn'
	>
		<img :src="reqPic" />
		<div class="grid-subtitle">{{prop.subject}}</div>
	</div>
	`
};

const cpnProgram = {
	props: ['prop', 'reqFn', 'reqPic'],
	template: `
	<div class="grid3-item" :onclick="reqFn">
		<div class="grid3-img" :style="reqPic"></div>
		<div class="grid3-box">
			<div class="grid3-sort">{{prop.classify}}</div>
			<div class="grid3-ch">{{prop.subject}}</div>
		</div>
	</div>
	`
};

const cpnMusicbox = {
	props: ['prop', 'reqFn', 'reqPic'],
	template: `
	<div class="grid5-item" :onclick='reqFn'>
		<div class="grid5-img" :style="reqPic"></div>
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
const cpnSideItem = {
	props: ['prop', 'reqFn', 'reqSort'],
	template: `
			<div class="sidebar-item" 
				:class='{"is-no-level": !prop.level }'
				:data-sort='reqSort'
				:onclick='reqFn'
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