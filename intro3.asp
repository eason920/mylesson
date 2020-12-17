<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001" %>   
<!-- #include virtual="include/DBConnection.asp"--> 
<!-- #include virtual="mylesson/2020/Upgrade.asp"-->
<%
response.Buffer = true
session.Codepage =65001
response.Charset = "utf-8"  

mindx=session("indx")  '--使用者ID
cindx=session("ip_indx")  '--customer ID
enddate=Get_enddate()  '--使用者到期日

if session("indx")="" then
	response.write "<script>location.href='../../'</script>"
	response.end()
end if


sql="select * from member_Levels where member_id="&mindx&" and customer_id="&cindx
set rs=connection2.execute(sql)
if not rs.eof then	  
	asp_lv=rs("Levels")
	asp_step=rs("Levels_step")
else
	asp_lv="2"
	asp_step="1"
end if

response.cookies("Backurl")="../../../../mylesson/intro2.asp"
%>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8"/>
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
		<meta name="description" content="FUNDAY台灣最大英語數位資料庫，超過1萬多篇主題時事/商用英語，每日更新，每天只要15分鐘，使用線上工具，透過老師講解與文章測驗，吸收最新生活用語和國際議題，跨平台學習不受限！國內50所大學語言中心培訓實績；上百間大型公民營企業培訓經驗；採用歐洲理事會CEFR語言學習架構；幫你建立個人專屬的學習計畫與追蹤功能，讓學習與生活結合，開拓更寬廣的國際視野，成為你的終身學習夥伴。">
		<meta name="keywords" content="看新聞學英文,英文閱讀,時事英文,線上英文,學習英文,看電影學英文,英語會話,雙語新聞,線上英文課程,英聽,聽力練習,線上英語,英文文法,聽音樂學英文,英文寫作,英語口說">
		<meta name="author" content="">
		<meta property="og:title" content="FUNDAY全球華人最佳外語學習平台，每天只要15分鐘，讓英文融入生活" >
		<meta property="og:url" content="https://funday.asia">
		<meta property="og:image" content="https://funday.asia/images/Image02.jpg">
		<meta property="og:description" content="FUNDAY台灣最大英語數位資料庫，超過1萬多篇主題時事/商用英語，每日更新，每天只要15分鐘，使用線上工具，透過老師講解與文章測驗，吸收最新生活用語和國際議題，跨平台學習不受限！國內50所大學語言中心培訓實績；上百間大型公民營企業培訓經驗；採用歐洲理事會CEFR語言學習架構；幫你建立個人專屬的學習計畫與追蹤功能，讓學習與生活結合，開拓更寬廣的國際視野，成為你的終身學習夥伴。" >
		<meta property="og:keywords" content="看新聞學英文,英文閱讀,時事英文,線上英文,學習英文,看電影學英文,英語會話,雙語新聞,線上英文課程,英聽,聽力練習,線上英語,英文文法,聽音樂學英文,英文寫作,英語口說">    
		<title>My Lesson page 3</title>
		<link href="./2020/assets/plugins/bootstrap/bootstrap.4.0.css" rel="stylesheet"/>
		<link href="./2020/css/mylesson_3.css?<%=Timer%>" rel="stylesheet"/>
		<link href="./2020/assets/plugins/perfect-scrollbar-master/perfect-scrollbar.css?<%=Timer%>" rel="stylesheet"/>
		<link href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet"/>
		<style>
			.wd {
				position: fixed;
				width: 100%;
				height: 100%;
				top: 0px;
				left: 0px;
				background-color: rgba(0, 0, 0, 0.6);
				z-index: 6;
			}
			/* 藏廣告用，應刪除 */
			/* #lightBoxDIY{display: none} */

			/* v scrollbar 是否永遠顥示的跟據 v */
			.ps__rail-x{
				opacity: 0!important;
			}
			.ps__rail-y {
				opacity: 0.6;
			}
			/* ^ scrollbar 是否永遠顥示的跟據 ^ */
		</style>
		<!---->
		<script src="./2020/assets/plugins/jquery/jquery.1.12.4.min.js"></script>
		<script src="./2020/assets/plugins/vue/vue2.6.12.js"></script>
		<script src="./2020/assets/plugins/perfect-scrollbar-master/perfect-scrollbar.min.js"></script>
		<script src="./2020/js/cpn_3.js?<%=Timer%>"></script>
		<!---->
		<script src="./2020/assets/plugins/jquery-ui/1.11.2.js"></script>
		<script src="../jquery.cookie.js"></script>    
		<script src="../js/MessageVer2/alert.js" type="text/javascript"></script>        
		<!---->
		<script src="../js/Uinfo.js"></script>
		<script src="./2020/js/lightBoxDIY-V2.js?<%=Timer%>"></script>    
	</head>

	<body>
		<div id="nav">
			<div class="wrapper">
				<!-- #include virtual="Self-Study/header_mylesson.asp"-->
			</div>
		</div>
		<img src="./2020/images/loading_ bigger.gif" id="ms2-loading">
		<div id="content">
			<a href='./intro2.asp' id="prev-page">
				<svg fill="none">
					<path d="M19 2L2 23.5L19 45" stroke="#354E85" stroke-width="4"></path>
				</svg>
			</a>
			<a href='./intro.asp' id="next-page">
				<svg fill="none">
					<path d="M2 2L19 23.5L2 45" stroke="#354E85" stroke-width="4"></path>
				</svg>
			</a>

			<!-- MAIN -->
			<div id="app" class="wrapper">
				<section class="section">
					<!-- course-nav-->
					<nav class="tgnav">
						<div class="tgnav-cart">真人視訊課程</div>
						<ul class="tgnav-groups">
							<li class="tgnav-group itemB"><a href="https://funday.asia/Tutor/Schedule/" target="new">
									<svg width="17" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M5.1 9.26316C5.56944 9.26316 5.95 8.88614 5.95 8.42105C5.95 7.95597 5.56944 7.57895 5.1 7.57895C4.63056 7.57895 4.25 7.95597 4.25 8.42105C4.25 8.88614 4.63056 9.26316 5.1 9.26316Z" fill="white"></path>
										<path d="M9.35 8.42105C9.35 8.88614 8.96944 9.26316 8.5 9.26316C8.03056 9.26316 7.65 8.88614 7.65 8.42105C7.65 7.95597 8.03056 7.57895 8.5 7.57895C8.96944 7.57895 9.35 7.95597 9.35 8.42105Z" fill="white"></path>
										<path d="M11.9 9.26316C12.3694 9.26316 12.75 8.88614 12.75 8.42105C12.75 7.95597 12.3694 7.57895 11.9 7.57895C11.4306 7.57895 11.05 7.95597 11.05 8.42105C11.05 8.88614 11.4306 9.26316 11.9 9.26316Z" fill="white"></path>
										<path d="M5.95 11.7895C5.95 12.2546 5.56944 12.6316 5.1 12.6316C4.63056 12.6316 4.25 12.2546 4.25 11.7895C4.25 11.3244 4.63056 10.9474 5.1 10.9474C5.56944 10.9474 5.95 11.3244 5.95 11.7895Z" fill="white"></path>
										<path d="M8.5 12.6316C8.96944 12.6316 9.35 12.2546 9.35 11.7895C9.35 11.3244 8.96944 10.9474 8.5 10.9474C8.03056 10.9474 7.65 11.3244 7.65 11.7895C7.65 12.2546 8.03056 12.6316 8.5 12.6316Z" fill="white"></path>
										<path fill-rule="evenodd" clip-rule="evenodd" d="M5.1 0.842105C5.1 0.377023 4.71944 0 4.25 0C3.78056 0 3.4 0.377023 3.4 0.842105H1.7C0.761116 0.842105 0 1.59615 0 2.52632V14.3158C0 15.246 0.761116 16 1.7 16H15.3C16.2389 16 17 15.246 17 14.3158V2.52632C17 1.59615 16.2389 0.842105 15.3 0.842105H13.6C13.6 0.377023 13.2194 0 12.75 0C12.2806 0 11.9 0.377023 11.9 0.842105H5.1ZM1.7 4.21053V2.52632H15.3V4.21053H1.7ZM1.7 5.89474V14.3158H10.3459L15.3 9.40766V5.89474H1.7ZM15.3 11.7895L12.75 14.3158H15.3V11.7895Z" fill="white"></path>
									</svg></a></li>
							<li class="tgnav-group itemB"
								@mouseover='fnBulletinShow'
							><a class="nav-group-link">
									<svg width="17" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M9.91442 1.81464C9.91591 1.79328 9.91667 1.77172 9.91667 1.74998C9.91667 1.24372 9.50626 0.833313 9 0.833313C8.49374 0.833313 8.08333 1.24372 8.08333 1.74998C8.08333 1.77172 8.08409 1.79328 8.08558 1.81464C4.97488 2.25847 2.58333 4.93327 2.58333 8.16665V14.5833H1.66667C1.16041 14.5833 0.75 14.9937 0.75 15.5C0.75 16.0062 1.16041 16.4166 1.66667 16.4166H6.25C6.25 17.9354 7.48122 19.1666 9 19.1666C10.5188 19.1666 11.75 17.9354 11.75 16.4166H16.3333C16.8396 16.4166 17.25 16.0062 17.25 15.5C17.25 14.9937 16.8396 14.5833 16.3333 14.5833H15.4167V8.16665C15.4167 4.93327 13.0251 2.25847 9.91442 1.81464ZM13.5833 8.16665V14.5833H4.41667V8.16665C4.41667 5.63534 6.4687 3.58331 9 3.58331C11.5313 3.58331 13.5833 5.63534 13.5833 8.16665ZM9 17.3333C8.49374 17.3333 8.08333 16.9229 8.08333 16.4166H9.91667C9.91667 16.9229 9.50626 17.3333 9 17.3333Z" fill="white"></path>
									</svg></a></li>
							<li class="tgnav-group itemC"><a class="tgnav-group-link">
									<svg width="17" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M7.15948 2.60016H17.5995C18.5565 2.60016 19.3395 3.35616 19.3395 4.28016V14.3602C19.3395 15.2842 18.5565 16.0402 17.5995 16.0402H7.15948C6.20248 16.0402 5.41948 15.2842 5.41948 14.3602V4.28016C5.41948 3.35616 6.20248 2.60016 7.15948 2.60016ZM1.93945 5.96024H3.67945V17.7202H15.8595V19.4002H3.67945C2.72245 19.4002 1.93945 18.6442 1.93945 17.7202V5.96024ZM17.5994 14.3603H7.1594V4.28028H17.5994V14.3603ZM15.8596 8.48019H8.8996V10.1602H15.8596V8.48019ZM8.8996 11.0002H12.3796V12.6802H8.8996V11.0002ZM15.8596 5.96024H8.8996V7.64024H15.8596V5.96024Z" fill="white"></path>
									</svg></a></li>
						</ul>
					</nav>
					<cpn_block
						:prop='item'
						v-for='(item, i) in timeBlock'
						v-if='item.ary.length != 0'
						:key='i'
						:req_ary='item.ary'
					></cpn_block>
					<!-- 18:00 member-->
					<div class="memberbox">
						<div class="time-left"><span class="date">99:00</span>
							<ul class="timeline">
								<li class="work">
									<div class="relative"><span class="timeline-circle"></span></div>
								</li>
							</ul>
						</div>
						<div class="course-all">
							<cpn_card
								:prop='item'
								v-for='(item, i) in ary'
								:key='i'
							></cpn_card>
						</div>
					</div>
					<!-- 19:00 member-->
					<div class="memberbox">
						<div class="time-left"><span class="date">19:00</span>
							<ul class="timeline">
								<li class="work">
									<div class="relative"><span class="timeline-circle"></span></div>
								</li>
							</ul>
						</div>
						<div class="course-all">
							<div class="course">
								<div class="itemB">
									<div class="top-div">
										<div class="subTitle">會話</div>
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
												<div style="background-image: url(https://funday.asia/tutor/files/20737-3.jpg)"></div>
											</div>
											<h5 class="card-titleN">Mason</h5>
											<h5 class="card-titleR">正規教室 A1</h5>
										</div>
										<h2 class="card-titleF">Funday文章回顧:NBA放?</h2>
										<div class="itembox">
											<h5 class="card-titleB">候位
												<div class="peopleBox">
													<div class="peopleBox"><i class="fa fa-user" aria-hidden="true"></i><i class="fa fa-user-o" aria-hidden="true"></i><i class="fa fa-user-o" aria-hidden="true"></i><i class="fa fa-user-o" aria-hidden="true"></i><i class="fa fa-user-o" aria-hidden="true"></i><i class="fa fa-user-o" aria-hidden="true"></i></div>
												</div>
											</h5>
											<div class="card-title-s">我要候位</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- 20:00 member-->
					<div class="memberbox">
						<div class="time-left"><span class="date">20:00</span>
							<ul class="timeline">
								<li class="work">
									<div class="relative"><span class="timeline-circle"></span></div>
								</li>
							</ul>
						</div>
						<div class="course-all">
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
												<div style="background-image: url(https://funday.asia/tutor/files/20737-3.jpg)"></div>
											</div>
											<h5 class="card-titleN">Mason</h5>
											<h5 class="card-titleR">正規教室 A1</h5>
										</div>
										<h2 class="card-titleF">Funday文章回顧:NBA放棄林書豪NBA放棄林書豪NBA放棄林書豪NBA放棄林書豪NBA放棄林書豪NBA放棄林書豪?</h2>
										<div class="itembox">
											<h5 class="card-titleB">候位
												<div class="peopleBox">
													<div class="peopleBox"><i class="fa fa-user" aria-hidden="true"></i><i class="fa fa-user-o" aria-hidden="true"></i><i class="fa fa-user-o" aria-hidden="true"></i><i class="fa fa-user-o" aria-hidden="true"></i><i class="fa fa-user-o" aria-hidden="true"></i><i class="fa fa-user-o" aria-hidden="true"></i></div>
												</div>
											</h5>
											<div class="card-title-j">加入課程</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id="foo">
						<div id="foo-left"></div>
						<div id="foo-right"></div>
						<div class="f1">需要其他協助嗎?  請聯絡我們
							<div class="msg-board" onclick="GoLink('MessageBoard')" title="留言版"></div>
						</div>
						<div class="f2"><span class="f2-1">服務時間：週一～週六 10:00~12:30、13:30~17:30、18:30~22:00  |  02-2523-9777 / 0800-023-777 (限市話)</span><span class="f2-2">© 2020 Brainstorm Digital Communications Corp. All rights reserved. Privacy Policy</span></div>
					</div>
				</section>
			</div>

			<!-- SIDE-BAR -->
			<div id="sidebar">
				<div id="sidebar-title">
					<div id="sidebar-icon"><img src="./2020/images/member.svg"/>個人等級</div>
					<div id="sidebar-level">A2-3</div>
				</div>
				<div id="sidebar-scroller">
					<div id="sidebar-scroller-title">複習列表 REVIEW</div>
					<div id="sidebar-list">
						<div class="sidebar-list-item">
							<h5 class="gradeN"> <span>A2</span>正規教室</h5>
							<h5 class="gradeR">2020/07/30</h5>
							<div class="gradeCnt">Funday文章回顧:NBA放棄林書豪NBA放棄林書豪?</div>
							<h5 class="gradeR is-download"><i class="fa fa-play-circle-o" aria-hidden="true"></i><i class="fa fa-cloud-download" aria-hidden="true"></i></h5>
						</div>
					</div>
				</div>
				<div id="sidebar-under">
					<div id="sidebar-under-title">家庭作業HOMEWORK</div>
					<div class="sidebar-under-box">
						<div class="sidebar-under-subtitle">寫作練習</div>
						<div class="sidebar-under-dot"><i class="fa fa-circle" aria-hidden="true" data-status="1"></i><i class="fa fa-circle" aria-hidden="true" data-status="2"></i><i class="fa fa-circle" aria-hidden="true" data-status="3"></i><i class="fa fa-circle" aria-hidden="true" data-status="4"></i><i class="fa fa-circle" aria-hidden="true" data-status="5"></i><i class="fa fa-circle" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i></div>
					</div>
					<div class="sidebar-under-box">
						<div class="sidebar-under-subtitle">朗讀練習</div>
						<div class="sidebar-under-dot"><i class="fa fa-circle" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i></div>
					</div>
				</div>
			</div>

			<!-- BULLETIN -->
			<div id='bulletinbox' class="tgnav-group-dropdown"
				v-if='reactiveBulletinShow == 1'
				@mouseout='show = 0'>
				<div class="bulletinToolbox1"></div>
				<div class="bulletinIconDiv">
					<div class="bulletinTxt1"><i class="fa fa-thumb-tack" aria-hidden="true"></i>Bulletin</div>
					<div class="bulletinDate">2020.11.20</div>
				</div>
				<div class="bulletinCntDiv" data-val="0">
					<div class="bulletinCnt"><i class="fa fa-clock-o" aria-hidden="true"></i>Lillian老師因身體不適，原訂11/21+晚上21:00~22:50課程將由Honnie老師和Joy老師代為授課，造成您的不便，敬請見諒。</div>
				</div>
				<div id="bulletinDiv"></div>
			</div>
		</div>
	</body>
</html>
		<script src="./2020/js/tool.js?dd=<%=Timer%>"></script> 
<script>
	const vueBulletin = new Vue({
		created(){
			$(window).resize(function(){
				
			});
		},
		computed: {
			reactiveBulletinShow(){
				return this.show;
			}
		},
		data: {
			show: 0,
			ary: []
		},
		el: '#bulletinbox',
	});

	const vueMain = new Vue({
		created(){
			const vm = this;
			$.ajax({
				type: 'GET',
				url: './2020/api/classList.asp?levels=' + vm.memberLevel,
				success(res){
					vm.ary = res.data;
					console.log('ary is ', vm.ary);
					$('#ms2-loading').fadeOut();
					$('#content').fadeIn();

					for( a in res.data ){
						const t = res.data[a].class_btime.split(':')[0];
						for( b in vm.timeBlock ){
							const t2 = vm.timeBlock[b].time;
							if(t == t2){
								vm.timeBlock[b].ary.push(res.data[a]);
							}
						}
					};

					setTimeout(()=>{
						console.log('finish is ', vm.timeBlock);
					},1000);

					new PerfectScrollbar('#content .wrapper');
					new PerfectScrollbar('#sidebar-scroller');
				}
			});

			
		},
		methods: {
			fnBulletinShow(){
				vueBulletin._data.show = 1;
				//
				const left1 = $('.nav-group-link').offset().left;
				const w = ( $('.tgnav-group-dropdown').innerWidth() )/2;
				const left = left1 - w + 25 - 4;// 25 = :before 50 / 2 , 4 = fix
				console.log( 'left', left1, ' / ', w , ' / ', left );
				$('.tgnav-group-dropdown').css({'left': left});
			},
		},
		
		data: {
			memberLevel: <%=asp_lv%>,
			ary: [],
			// ary00: [], ary01: [], ary08: [], ary09: [], ary10: [], ary11: [], ary12: [], //7
			// ary13: [], ary14: [], ary15: [], ary16: [], ary17: [], ary18: [], //6
			// ary19: [], ary20: [], ary21: [], ary22: [], ary23: [], ary24: [], //6
			timeBlock: [
				{time: '00', ary: []}, {time: '01', ary: []}, {time: '08', ary: []}, {time: '09', ary: []}, 
				{time: '10', ary: []}, {time: '11', ary: []}, {time: '12', ary: []}, {time: '13', ary: []}, 
				{time: '14', ary: []}, {time: '15', ary: []}, {time: '16', ary: []}, {time: '17', ary: []}, 
				{time: '18', ary: []}, {time: '19', ary: []}, {time: '20', ary: []}, {time: '21', ary: []}, 
				{time: '22', ary: []}, {time: '23', ary: []} 
			],
			bus: {
			}
		},
		el: '#app',
		components: {
			cpn_block,
		}
	});

	Vue.config.devtools = false;
	
	// ==========================================
	// == SYSTEN (BACK-END) v
	// ==========================================
	<%
	if session("Login_guided")="3"   then
		'response.Write  "DIYLightBox('ajax','1280px','720px','../../../library/AD.asp?Full=1')"
		response.write " var Login_guided="&session("Login_guided")
		session("Login_guided")=""
	else
	response.write " var Login_guided=0"
	end if
	%>
	
  if(Login_guided==3){
    if(parseInt($(window).height())>720){
      DIYLightBox('ajax','1280px','720px','../../../library/AD.asp?Full=1')
    }else{
      DIYLightBox('ajax','980px','592px','../../../library/AD.asp')    
    }
  } 


  <%if  session("Login_guided")="4"  then%>
    if(parseInt($(window).height())>720){
      DIYLightBox('iframe','1280px','720px','../../../KOBO/detail.asp')    
    }else if(parseInt($(window).height())>592){
      DIYLightBox('iframe','980px','592px','../../../KOBO/detail.asp')    
    }else{
      DIYLightBox('iframe','880px','492px','../../../KOBO/detail.asp')  
    }   
  <%
  session("Login_guided")=""
  end if%>
	
</script>
