const cpn_card = {
	props: ['prop'],
	template: `
		<div class="course">
			<div class="itemA">
				<div class="top-div">
					<div class="subTitle">實力</div>
				</div>
			</div>
			<div class="about-in">
				<div class="starbox">
					<div class="starBox">
						<div class="starBox-ul">難度<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i></div>
					</div>
				</div>
				<div class="card">
					<div class="card-body">
						<div class="bg-clr-w3l">
							<div style="background-image: url()">{{prop.Tutorimg}}</div>
						</div>
						<h5 class="card-titleN">{{prop.Tutor}}</h5>
						<h5 class="card-titleR">{{prop.Class_Group}} {{prop.lv}}</h5>
					</div>
					<h2 class="card-titleF">{{prop.class_cname}}</h2>
					<div class="itembox">
						<h5 class="card-titleB">候位
							<div class="peopleBox">
								<div class="peopleBox">
									<i class="fa fa-user" aria-hidden="true"></i>
									<i class="fa fa-user-o" aria-hidden="true"></i>
									<i class="fa fa-user-o" aria-hidden="true"></i>
									<i class="fa fa-user-o" aria-hidden="true"></i>
									<i class="fa fa-user-o" aria-hidden="true"></i>
									<i class="fa fa-user-o" aria-hidden="true"></i>
								</div>
							</div>
						</h5>
						<div class="card-title-j" on-click='prop.id'>加入課程</div>
					</div>
				</div>
			</div>
		</div>
	`,
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
				></cpn_card>
			</div>
		</div>
	`,
	components: {
		cpn_card
	}
}