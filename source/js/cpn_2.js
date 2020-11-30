// ==========================================
// == FILTER v
// ==========================================
Vue.filter('filterBG', (str) => { return 'background-image: url(' + str + ')' });

// ==========================================
// == BLOCK 1 v
// ==========================================
const cpnTread = {
	props: ['prop', 'reqUrl', 'reqPic'],
	template: `
	<a class="grid1-item add-hr" :href="reqUrl">
		<div class="grid-subtitle">{{prop.ch_article}}</div>
		<div class="grid-content"><img class="grid1-img" :src='reqPic'/>{{prop.ch_article}}</div>
		<div class="grid-bottom">(繼續閱讀)
			<div class="grid-view"> <img src="images/view.svg"/><span>{{prop.read_count}}</span></div>
		</div>
	</a>
	`
}

const cpnLiving = {
	props: ['prop', 'reqUrl'],
	template: `
			<a class="grid3-item add-hr" :href="reqUrl">
				<div class="grid-subtitle">{{prop.ch_subject}}</div>
				<div class="grid-content">{{prop.ch_article}}</div>
				<div class="grid-bottom">(繼續閱讀)
					<div class="grid-view"><img src="images/view.svg"/><span>{{prop.read_count}}</span></div>
				</div>
			</a>
		`
};

const cpnOffice = {
	props: ['prop', 'reqUrl'],
	template: `
			<a class="grid4-item add-hr" :href="reqUrl">
				<div class="grid4-sort is-s1">{{prop.sort}}</div>
				<div class="grid4-right">
					<div class="grid-subtitle">{{prop.ch_subject}}</div>
					<div class="grid4-en">{{prop.en_subject}}</div>
				</div>
			</a>
		`
}

const cpnSideItem = {
	props: ['prop', 'reqUrl', 'reqSort'],
	template: `
			<a class="sidebar-item" :data-sort='reqSort' :href='reqUrl'>
				<div class="sidebar-left">
					<div class="sidebar-dot"></div>
					<div class="sidebar-info">
						<div class="sidebar-time">{{prop.time}}</div>
						<div class="sidebar-title">{{prop.title}}</div>
					</div>
				</div>
				<div class="sidebar-right">{{prop.lv}}</div>
			</a>
		`
};

const cpnMixin = {
	props: ['prop', 'reqUrl', 'reqPic'],
	template: `
			<a class="grid22-item add-hr" :href="reqUrl">
				<div class="grid22-img" :style="reqPic"></div>
				<div class="grid22-right">
					<div class="grid22-above">
						<div class="grid22-ch">{{prop.ch_subject}}</div>
						<div class="grid22-en">{{prop.en_subject}}</div>
						<div class="grid-content">{{prop.ch_article}}</div>
					</div>
					<div class="grid-bottom">(繼續閱讀)
						<div class="grid-view"> <img src="images/view.svg"/><span>{{prop.read_count}}</span></div>
					</div>
				</div>
			</a>
		`
};

const cpnFade = {
	props: ['prop', 'reqUrl', 'reqPic'],
	template: `
		<a class="fade-main-item" :href="reqUrl" :style="reqPic">
			<div class="grid-subtitle">{{prop.ch_subject}}</div>
			<div class="fade-en">{{prop.en_subject}}</div>
		</a>
	`
};

const cpnTales = {
	props: ['prop', 'reqUrl', 'reqPic'],
	template: `
		<a class="grid42-item add-hr" :href="reqUrl">
			<div class="grid42-img" :style="reqPic"></div>
			<div class="grid-subtitle">{{prop.ch_subject}}</div>
		</a>
	`
};

// ==========================================
// == BLOCK 2 v
// ==========================================
const cpnBlog = {
	props: ['prop', 'reqUrl', 'reqPic'],
	template: `
	<a class="grid1-item add-hr" :href="reqUrl">
		<img :src="reqPic" />
		<div class="grid-subtitle">{{prop.subject}}</div>
	</a>
	`
};

const cpnProgram = {
	props: ['prop', 'reqUrl', 'reqPic'],
	template: `
	<a class="grid3-item" :href="reqUrl">
		<div class="grid3-img" :style="reqPic"></div>
		<div class="grid3-box">
			<div class="grid3-sort">{{prop.classify}}</div>
			<div class="grid3-ch">{{prop.subject}}</div>
		</div>
	</a>
	`
};

const cpnMusicbox = {
	props: ['prop', 'reqUrl', 'reqPic'],
	template: `
	<a class="grid5-item" :href='reqUrl'>
		<div class="grid5-img" :style="reqPic"></div>
		<div class="grid5-under">
			<div class="grid5-actor">{{prop.singer}}</div>
			<div class="grid5-subtitle">{{prop.song}}</div>
			<div class="grid5-btn"></div>
		</div>
	</a>
	`
}