Vue.filter('filterBg', (str) => { return 'background-image: url('+ str +')'});

const cpn_card = {
	props: ['prop', 'req_pic'],
	template: `
		<div class="course" 
			:class='{"is-camp": camp, "is-talk": talk, "is-empty": empty}'
		>
			<div :class="category.skin">
				<div class="top-div">
					<div class="subTitle">{{category.text}}</div>
				</div>
			</div>
			<div class="about-in">
				<div class="starbox">
					<div class="starBox">
						<div class="starBox-ul">
							難度
							<i aria-hidden="true"
								v-for='(item, i) in star'
								:class='item'
								:key='i'
							></i>
						</div>
					</div>
				</div>
				<div class="card">
					<div class="card-body">
						<div class="bg-clr-w3l">
							<div :style="req_pic"></div>
						</div>
						<h5 class="card-titleN">{{prop.Tutor}}</h5>
						<h5 class="card-titleR">{{course}}</h5>
					</div>
					<h2 class="card-titleF">{{title}}</h2>
					<div class="itembox">
						<h5 class="card-titleB">候位
							<div class="peopleBox">
								<div class="peopleBox">
									<i aria-hidden='true'
										v-for='(item, i) in room'
										:class='item'
										:key='i'
									></i>
								</div>
							</div>
						</h5>
						<a class="card-title" 
							:data-check='prop.JoinCheck' 
							:href='link.href'
						>{{link.text}}</a>
					</div>
				</div>
			</div>
		</div>
	`,
	created() {
		const vm = this;
		// IS EMPTY 
		if(vm.prop.empty){ vm.empty = true };

		// CAMP
		const c = vm.prop.Class_Group;
		if (c == '研習營'){vm.camp = true}

		// TALK
		if( c == '脫口說英文' ){vm.talk = true}

		// CATEGORY v	
		if( c == '生活會話教室' || c == '咖啡廳' || c == '脫口說英文' || c == '語感教室' || c == '研習營' ){
			vm.category.text = '會話'
			vm.category.skin = 'itemB';
		}else{
			vm.category.text = '實力';
			vm.category.skin = 'itemA';
		};
				
		// STARS v
		let star;
		for( i=0; i< 3; i++ ){
			if (c != '研習營'){
				star = i < vm.prop.Stars ? 'fas fa-star' : 'far fa-star';
			}else{
				star = 'fas fa-star'
			}
			vm.star.push(star)
		};

		// COURSE NAME v
		let ch;
		switch( vm.prop.Class_Group ){
			case '文法進修教室': ch = '文法進修';break;
			case '商務寫作教室': ch = '商務寫作';break;
			case '生活會話教室': ch = '生活會話';break;
			default:
				ch = vm.prop.Class_Group
		};
		vm.course = ch + ' ' + vm.prop.lv;

		// ROOM & WAITING v
		let room;
		for( i=0; i< vm.prop.RoomCont; i++ ){
			room = i < vm.prop.Pre_join ? 'fas fa-user' : 'far fa-user';
			vm.room.push(room)
		};

		// LINK v
		vm.link.href = "../teaching/?cls=" + vm.prop.Class_GroupE + "&index=" + vm.prop.id;
		//
		switch( vm.prop.JoinCheck ){
			case "7": vm.link.text = '可候位 ';break;
			case "1": vm.link.text = 'Join';break;
			case "4": vm.link.text = '準備中 ';break;//課程準備中
			case "3": vm.link.text = '上課中';break;
			case "5": vm.link.text = '因故未開';break;//本課程因故未開課
			case "0": vm.link.text = '時間未到';break;
			case "8": vm.link.text = '課程結束';break;//本課程已結束
			default:
		};

		// TITLE
		if( !/&quot;/i.test( vm.prop.class_cname ) ){
			vm.title = vm.prop.class_cname;
		}else{
			const regexp = new RegExp('&quot;', 'g');
			vm.title = vm.prop.class_cname.replace(regexp, '"');
		};
	},
	data(){
		return {
			category: {
				skin: '',
				text: ''
			},
			course: '',
			camp: false,
			talk: false,
			empty: false,
			star: [], room: [],
			link: {
				href: '', text: '',
			},
			title: '',
		}
	},
	methods: {
		fnBg(){
			console.log(this.prop.Tutorimg);
			return 'background-image: url(./image/aa.png)'
		}
	},
}

const cpn_block = {
	props: ['prop', 'req_ary'],
	template: `
		<div class="memberbox">
			<div class="time-left">
				<span class="date">{{prop.time}}</span>
				<ul class="timeline">
					<li class="work">
						<div class="relative"><span class="timeline-circle"></span></div>
					</li>
				</ul>
			</div>
			<div class="course-all">
				<cpn_card
					:prop='item'
					v-for='(item, i) in req_ary'
					:key='i'
					:req_pic='item.Tutorimg | filterBg'
				></cpn_card>
			</div>
		</div>
	`,
	components: {
		cpn_card
	}
}

const cpn_bulletin = {
	props: ['prop'],
	template: `
	<div class="bulletinCntDiv">
		<div class="bulletinCnt">
		<i class="far fa-clock"></i>
			<span v-html="decodeURIComponent(prop.content)"></span>
			<img src='./2020/images/bulletin_empty.png'>
		</div>
		<div class="bulletin-date">{{ prop.date }} </div>
	</div>
	`,
};

const cpn_side_item = {
	props: ['prop', 'req_online', 'req_download', 'req_pdf', 'req_pdf2'],
	template: `
		<div class="sidebar-list-item">
			<h5 class="gradeN"><span>{{prop.level}}</span>{{prop.sort}}</h5>
			<h5 class="gradeR">{{prop.date}}</h5>
			<div class="gradeCnt">{{prop.subject}}</div>
			<div class="gradeR is-download">
				<a title='下載「課程補充教材」'
					v-if='req_pdf2'
					:href='req_pdf2'
				>
					<i class="far fa-file-alt"></i>
				</a>
				<a title='下載「課程教材」'
					v-if='req_pdf'
					:href='req_pdf'
				>
					<i class="fas fa-file-alt"></i>
				</a>
				<a title='下載「課程影片」'
					v-if='req_download'
					:href='req_download'
				>
					<i class="fas fa-cloud-download-alt"></i>
				</a>
				<a target='window_play' title='線上觀看課程影片'
					v-if='req_online'
					:href='req_online'
				>
					<i class="fas fa-play-circle"></i>
				</a>
			</div>
		</div>
	`,
	created(){
		const vm = this;
		const c = vm.prop.sort;
		if( c == '生活會話教室' || c == '咖啡廳' || c == '脫口說英文' || c == '語感教室' || c == '研習營' ){
			vm.category='Life'
		}else{
			vm.category='Formal'
		}
		vm.link = '../teaching/?cls=' + vm.category +'&index=' + vm.prop.id;
		//==> 點了只會有「課程未開課」結果，故不放連結
	},
	data(){
		return {
			category: '',
			link: '',
		}
	},
}

const cpn_homework = {
	props: ['prop'],
	template: `
		<a class="sidebar-under-circle"
			:href="link"
			:data-status="status"
			v-text='text'
			:title='title'
		></a>
	`,
	created(){
		const vm = this;
		const id = vm.prop.id;
		const link = vm.prop.link;
		console.log('id', id, ' /link ');
		switch(true){
			case id!='' && link!='':
				vm.title = vm.prop.Rating;
				vm.status = vm.prop.Rating == '批改中' ? 3 : 2;
				break
			case id=='' && link!='':
				vm.status = 1;
				vm.title = '繳交新作業'
				vm.text = vm.prop.Rating;
				break;
			default:
				vm.status = 0;
		};
		vm.link = link;
	},
	data(){
		return {
			status: '',
			link: '',
			text: '',
			title: ''
		}
	}
}