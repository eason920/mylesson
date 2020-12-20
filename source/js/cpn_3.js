Vue.filter('filterBg', (str) => { return 'background-image: url('+ str +')'});

const cpn_card = {
	props: ['prop', 'req_pic'],
	template: `
		<div class="course" 
			:class='{"is-camp": camp, "is-empty": empty}'
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
					<h2 class="card-titleF">{{prop.class_cname}}</h2>
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
				star = i < vm.prop.Stars ? 'fa fa-star' : 'fa fa-star-o';
			}else{
				star = 'fa fa-star'
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
			room = i < vm.prop.Pre_join ? 'fa fa-user' : 'fa fa-user-o';
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
	},
	data(){
		return {
			category: {
				skin: '',
				text: ''
			},
			course: '',
			camp: false,
			empty: false,
			star: [], room: [],
			link: {
				href: '', text: '',
			}
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
				<span class="date">{{prop.time}}:00</span>
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