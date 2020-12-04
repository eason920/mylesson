// ==========================================
// == FILTER v
// ==========================================
Vue.filter('filterBG', (str) => { return 'background-image: url(' + str + ')' });
Vue.filter('filterSrc', (str) => { return 'https://funday.asia/en/pic/'+str });
Vue.filter('filterMagazineSrc', (str) => { return 'https://funday.asia/funMz/'+str });
Vue.filter('filterArticleLink', (id) => { return 'https://funday.asia/learning2020/?rid='+id});
Vue.filter('filterTalesLink', (id) => { return 'https://funday.asia/self-study/FairyTales/?sid='+id });
Vue.filter('filterBlogLink', (id) => { return 'https://funday.asia/blogDesktop/blog.asp?classify=life&blog=' + id })
Vue.filter('filterMusicFn', (id) => { return 'GoLink("MusicBoxPlay","whichStart=1&musicNo='+id+'")'});
Vue.filter('filterProgramFn', (id) => { return 'GoLink("FunProgram","indx='+id+'")'});
Vue.filter('filterMagazineFn', (id) => {return 'https://funday.asia/self-study/MZ/?SN='+id})
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
})
// ==========================================
// == BLOCK 1 v
// ==========================================
const cpnTread = {
	props: ['prop', 'reqUrl', 'reqPic'],
	template: `
		<a class="grid1-item add-hr" :href="reqUrl" target='article'>
			<div class="grid-subtitle">{{prop.ch_subject}}</div>
			<div class="grid-content"><img class="grid1-img" :src='reqPic'/>{{prop.ch_article}}</div>
			<div class="grid-bottom">
				(繼續閱讀)
				<div class="grid-view">{{prop.ndate}}</div>
			</div>
		</a>
	`
	// <div class="grid-view"><img src="./2020/images/view.svg"/><span>{{prop.read_count}}</span></div>
}

const cpnFade = {
	props: ['prop', 'reqUrl', 'reqPic'],
	template: `
		<a
			class="fade-main-item"
			:href="reqUrl"
			:style="reqPic"
			target='article'
			@mouseover='emitEvent'
			@mouseout='emitEvent2'
		>
			<div class="grid-subtitle">{{prop.ch_subject}}</div>
			<div class="fade-en">{{prop.en_subject}}</div>
		</a>
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
			@mouseover='emitEvent'
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
	}
}

const cpnMixin = {
	props: ['prop', 'reqUrl', 'reqPic'],
	template: `
		<a class="grid22-item add-hr" :href="reqUrl" target='article'>
			<div class="grid22-img" :style="reqPic"></div>
			<div class="grid22-right">
				<div class="grid22-above">
					<div class="grid22-ch">{{prop.ch_subject}}</div>
					<div class="grid22-en">{{prop.en_subject}}</div>
					<div class="grid-content">{{prop.ch_article}}</div>
				</div>
				<div class="grid-bottom">
					(繼續閱讀)
					<div class="grid-view">{{prop.ndate}}</div>
				</div>
			</div>
		</a>
	`
};

const cpnLiving = {
	props: ['prop', 'reqUrl'],
	template: `
		<a class="grid3-item add-hr" :href="reqUrl" target='article'>
			<div class="grid-subtitle">{{prop.ch_subject}}</div>
			<div class="grid-content">{{prop.ch_article}}</div>
			<div class="grid-bottom">
				(繼續閱讀)
				<div class="grid-view">{{prop.ndate}}</div>
			</div>
		</a>
	`
};

const cpnOffice = {
	props: ['prop', 'reqUrl', 'reqCategory'],
	template: `
		<a class="grid4-item add-hr" :href="reqUrl" :data-category="reqCategory"  target='article'>
			<div class="grid4-sort">{{prop.ch_category}}</div>
			<div class="grid4-right">
				<div class="grid-subtitle">{{prop.ch_subject}}</div>
				<div class="grid4-en">{{prop.en_subject}}</div>
			</div>
		</a>
	`
}

const cpnTales = {
	props: ['prop', 'reqUrl', 'reqPic'],
	template: `
		<a class="grid42-item add-hr" :href="reqUrl" target='tales'>
			<div class="grid42-img" :style="reqPic"></div>
			<div class="grid-subtitle">{{prop.subject}}</div>
		</a>
	`
};

// ==========================================
// == BLOCK 2 v
// ==========================================
const cpnBlog = {
	props: ['prop', 'reqUrl', 'reqPic'],
	template: `
	<a class="grid1-item add-hr" :href="reqUrl" target='blog'>
		<img :src="reqPic" />
		<div class="grid-subtitle">{{prop.subject}}</div>
	</a>
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
	props: ['prop', 'reqUrl', 'reqSort'],
	template: `
			<a class="sidebar-item" 
				:class='{"is-no-level": !prop.level }'
				:data-sort='reqSort'
				:href='reqUrl'
				target='article'>
				<div class="sidebar-left">
					<div class="sidebar-dot"></div>
					<div class="sidebar-info">
						<div class="sidebar-time"><span>{{prop.sort}}</span>{{prop.date}}</div>
						<div class="sidebar-title">{{prop.level}} {{prop.subject}}</div>
					</div>
				</div>
				<div class="sidebar-right">{{prop.level}}</div>
			</a>
		`
};