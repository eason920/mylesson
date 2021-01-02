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
		<style>
			#DVLight{
				height: 100vh;
				display: block;
			}

			#DIYBoxContent{
				padding: 0!important;
				width: 100vw!important;
				background-image: linear-gradient(to right, #c12011, #9c1215);
				position: fixed;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				height: 100vh!important;
				margin: auto!important;
			}

			#close{
				background: white!important;
				height: 29px;
				line-height: 19px;
				top: 40px!important;
				right: 40px;
				left: auto!important;
			}

			#DIYBoxContent > div:nth-child(2){
				background-image: url(../../subscription/AD/mylesson_pop_macbook.gif);
				background-size: contain;
				background-position: center;
				background-repeat: no-repeat;
			}

			#DIYBoxContent > div:nth-child(2) img{
				display: none
			}
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
		<!---->
		<script src="https://kit.fontawesome.com/506022d22e.js" crossorigin="anonymous"></script> 
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
			<div id="app" class="wrapper" @scroll='fnBulletinTop'>
				<section class="section">
					<!-- course-nav-->
					<nav class="tgnav">
						<div class="tgnav-cart">
							真人視訊課程
							<span>{{reactiveNowTime}}</span>
							<a href='intro3.asp'> 手動刷新開課狀態</a>
							<!--span>{{reactiveRefreshTimer}}</span-->
						</div>
						<ul class="tgnav-groups">
							<li class="tgnav-group itemB" @mouseover='fnBulletinShow'>
								<a class="nav-group-link" title="公告">
									<svg width="17" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M9.91442 1.81464C9.91591 1.79328 9.91667 1.77172 9.91667 1.74998C9.91667 1.24372 9.50626 0.833313 9 0.833313C8.49374 0.833313 8.08333 1.24372 8.08333 1.74998C8.08333 1.77172 8.08409 1.79328 8.08558 1.81464C4.97488 2.25847 2.58333 4.93327 2.58333 8.16665V14.5833H1.66667C1.16041 14.5833 0.75 14.9937 0.75 15.5C0.75 16.0062 1.16041 16.4166 1.66667 16.4166H6.25C6.25 17.9354 7.48122 19.1666 9 19.1666C10.5188 19.1666 11.75 17.9354 11.75 16.4166H16.3333C16.8396 16.4166 17.25 16.0062 17.25 15.5C17.25 14.9937 16.8396 14.5833 16.3333 14.5833H15.4167V8.16665C15.4167 4.93327 13.0251 2.25847 9.91442 1.81464ZM13.5833 8.16665V14.5833H4.41667V8.16665C4.41667 5.63534 6.4687 3.58331 9 3.58331C11.5313 3.58331 13.5833 5.63534 13.5833 8.16665ZM9 17.3333C8.49374 17.3333 8.08333 16.9229 8.08333 16.4166H9.91667C9.91667 16.9229 9.50626 17.3333 9 17.3333Z" fill="white"></path>
									</svg>
								</a>
							</li>
							<li class="tgnav-group itemC" @click='fnSideBarToggle'>
								<a class="tgnav-group-link" title="複習列表">
									<svg width="17" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M7.15948 2.60016H17.5995C18.5565 2.60016 19.3395 3.35616 19.3395 4.28016V14.3602C19.3395 15.2842 18.5565 16.0402 17.5995 16.0402H7.15948C6.20248 16.0402 5.41948 15.2842 5.41948 14.3602V4.28016C5.41948 3.35616 6.20248 2.60016 7.15948 2.60016ZM1.93945 5.96024H3.67945V17.7202H15.8595V19.4002H3.67945C2.72245 19.4002 1.93945 18.6442 1.93945 17.7202V5.96024ZM17.5994 14.3603H7.1594V4.28028H17.5994V14.3603ZM15.8596 8.48019H8.8996V10.1602H15.8596V8.48019ZM8.8996 11.0002H12.3796V12.6802H8.8996V11.0002ZM15.8596 5.96024H8.8996V7.64024H15.8596V5.96024Z" fill="white"></path>
									</svg>
								</a>
							</li>
						</ul>
					</nav>
					<div>
						<cpn_block
							:prop='item'
							v-for='(item, i) in timeBlock'
							:key='i'
							:req_ary='item.ary'
							v-if='item.ary.length != 0'
						></cpn_block>
					</div>
					<div id='allEmpty'></div>
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
					<div id="sidebar-level">{{memberLvStep}}</div>
				</div>
				<div id="sidebar-scroller" @scroll='fnScroll'>
					<div id="sidebar-scroller-title">複習列表 REVIEW</div>
					<div id="sidebar-list">
						<cpn_side_item
							v-for='(item, i) in review'
							:prop='item'
							:key='i'
							:req_pdf2='item.PPT2link'
							:req_pdf='item.PPT1link'
							:req_online='item.playlink'
							:req_download='item.downloadlink'
						></cpn_side_item>
					</div>
					<img src="./2020/images/loading_small.gif" id="sidebar-loading">
				</div>
				<div id="sidebar-under3">
					<div id="sidebar-under-title">家庭作業HOMEWORK</div>
					<div class="sidebar-under-box">
						<div class="sidebar-under-subtitle">寫作練習</div>
						<div class="sidebar-under-dot"
							v-if='writing.length != 0'
						>
							<!--div class="sidebar-under-circle" data-status="2" title="批改中"></div>
							<div class="sidebar-under-circle" data-status="1">+</div>
							<div class="sidebar-under-circle" data-status="0"></div-->
							<cpn_homework
								v-for='(item, i) in writing'
								:prop='item'
								:key='i'
							></cpm_homework>
						</div>
						<div class="sidebar-under-dot" v-else>
							<span>(未例入此次升級評量)</span>
						</div>
					</div>
					<div class="sidebar-under-box">
						<div class="sidebar-under-subtitle">朗讀練習</div>
						<div class="sidebar-under-dot"
							v-if='speech.length != 0'
						>
							<cpn_homework
								v-for='(item, i ) in speech'
								:prop='item'
								:key='i'
							></cpm_homework>
						</div>
						<div class="sidebar-under-dot" v-else>
							<span>(未例入此次升級評量)</span>
						</div>
					</div>
				</div>
			</div>

			<!-- BULLETIN -->
			<div id='bulletinbox' class="tgnav-group-dropdown"
				v-if='reactiveBulletinShow == 1'
				:style='reactiveStyle'
				@mouseover='fnBulletinMouseOver'
				@mouseout='fnBulletinMouseOut'
			>
				<div class="addarea"></div>
				<div class="bulletinToolbox1"></div>
				<div class="bulletinIconDiv">
					<div class="bulletinTxt1">
						<i class="fas fa-thumbtack"></i>
						Bulletin
					</div>
				</div>
				<cpn_bulletin
					:prop='item'
					v-for='(item, i) in ary'
					:key='i'
					v-if='i<4'
				></cpn_bulletin>
			</div>
		</div>
	</body>
</html>
		<script src="./2020/js/tool.js?dd=<%=Timer%>"></script> 
<script>
	const vueBulletin = new Vue({
		created(){
			const vm = this;
			$(window).resize(function(){ vm.show= 0 });

			$.ajax({
				type: 'GET',
				url: './2020/api/bulletin.asp',
				success(res){
					vm.ary = res.bulletin;
				}
			});
		},
		methods: {
			fnBulletinMouseOver(){
				const vm = this;
				vm.show = 1;
				window.clearInterval(vm.hideControl);
			},

			fnBulletinMouseOut(){
				const vm = this;
				if( !$('#app').is(':animated') ){
					vm.hideControl = window.setInterval(()=>{
						vm.hide ++;
						if( vm.hide == 2 ){ 
							vm.show = 0;
							vm.hide = 0;
						};
					}, 50);// 50 * 2
				}
			},
		},
		computed: {
			
			reactiveBulletinShow(){
				return this.show;
			},
			reactiveStyle(){
				return 'top:' + vueMain._data.bulletinTop + 'px;left:' + vueMain._data.bulletinLeft +'px';
			}
		},
		data: {
			show: 0,
			hideControl: '',
			hide: 0,
			ary: [],
		},
		el: '#bulletinbox',
		components: {
			cpn_bulletin
		}
	});

	const vueSideBar = new Vue({
		created(){
			const vm = this;

			// LEVEL v
			let transEn;
			switch( <%=asp_lv%> ){
				case 1:
					transEn = 'A1'; break;
				case 2:
					transEn = 'A2'; break;
				case 3:
					transEn = 'B1'; break;
				case 4:
					transEn = 'B2'; break;
				case 5:
					transEn = 'C1'; break;
				default:
			};
			vm.transEn = transEn;
			vm.memberLvStep = transEn + '-' + <%=asp_step%>;

		},
		methods: {
			fnScroll(){
				const vm = this;
				const regexp1 = new RegExp(" ", "g");
				const regexp2 = new RegExp(":", "g");
				const regexp3 = new RegExp("px", "g");
				const h = $('#sidebar-scroller').outerHeight();
				const s = $('#sidebar-scroller .ps__thumb-y').attr('style').replace(regexp1, '').replace(regexp2, '').replace(regexp3, '').replace('top', '').replace('height', '').split(';');
				const sum = Number(s[0]) + Number(s[1]);
				if( sum == h ){
					// const url = './2020/api/reviewClassbar.asp?member_id=141091&PG=' + vm.getApi;
					const url = './2020/api/reviewClassbar.asp?PG=' + vm.getApi;
					$.ajax({
						type: 'GET',
						url,
						success(res){
							const ary = JSON.parse(res);
							ary.forEach(function(item){	vm.review.push(item) })
							vm.getApi ++;
						},
						error(){
							console.log('should be max');
						}
					});
				}
			},
		},
		data: {
			//
			transEn: '',
			memberLvStep: '',
			getApi: 0,
			review: [],
			writing: [],
			speech: [],
		},
		el: '#sidebar',
		components: {
			cpn_side_item,
			cpn_homework
		}
	});

	const vueMain = new Vue({
		created(){
			const vm = this;
			vm.fnGetTime();
			
			// REFRESH-IMTER
			window.setInterval(()=>{
				console.log('%c====================', 'color:yellow');

				const minutes = new Date().getMinutes();
				// const refresh = vm.refresh.setting.findIndex(function(item){
					// 	return item == minutes;
				// });

				// if( refresh >= 0 ){
				if( minutes >= 55 || minutes <= 15 ){
					vm.fnGetTime();
					// window.location.reload()
					if( minutes != 15 ){
						// ON-TIME HOURSE v
						let hours;
						if( minutes >= 55 ){
							// 55 ~ 59 v
							console.log('>=15');
							hours = new Date().getHours();
							hours = hours + 1;
							// Number( new Date().gethours() ) + 1;
						}else{
							// 0 ~ 14, 15己在第一層篩除在外 v
							console.log('<15');
							hours = new Date().getHours();
						};

						// ON-TIME INDEX OF ARY v
						let index;
						for( a in vm.timeBlock ){
							if( vm.timeBlock[a].time == hours ){ index = a };
						};

						// ON-TIME API v
						const url ='./2020/api/classList.asp?levels=' + vm.memberLevel + '&H=' + hours;
						console.log('block', vm.timeBlock[index]);
						console.log('minutes is >> ', minutes, ' / minutes >= 15 ? >> ' , (minutes >= 15), ' / hours is >>', hours, ' / index is >>', index, ' / time is >>',vm.timeBlock[index].time , ' / ajax url >>', url );
						$.ajax({
							type: 'GET',
							url,
							success(res){
								console.log('api >>',res.data);
								// 1 
								vm.timeBlock[index].ary = [];

								// 2
								setTimeout(()=>{
									vm.timeBlock[index].ary = res.data;

									// 補齊未滿 3n / 4n v
									const max = $(window).width() > 1366 ? 4 : 3;
									const l = vm.timeBlock[index].ary.length;
									// console.log('after 1000', l);
									if( l != 0 && l%max > 0 ){
										const addNum = max - (l%max);
										for( i=0;i<addNum;i++ ){
											console.log('i is >>', i);
											vm.timeBlock[index].ary.push({empty: true});
										};
									}
								},200);
							}
						});

					}else{
						// 歸零 v
						//* 15 整，API 己無該時段的資料 v
						window.location.reload();
					}
				};
				// vm.refresh.timer = minutes + ' / ' + refresh + ' / refresh ? ' + (refresh >= 0);
			}, 1000 * 50);
			
			// SIDE v
			const ww = $(window).width();
			vm.sideBarWidth = $('#sidebar').width();

			//
			$.ajax({
				type: 'GET',
				// url: './2020/api/classList.asp?levels=2',
				url: './2020/api/classList.asp?levels=' + vm.memberLevel,
				success(res){
					console.log(res.data, res.data.length, res.data.length == 0);
					if( res.data.length != 0 ){
						for( a in res.data ){
							const resTime = res.data[a].class_btime.split(':')[0];
							for( b in vm.timeBlock ){
								const vueTime = vm.timeBlock[b].time;
								if( resTime == vueTime ){
									if( resTime != '00' ){
										vm.timeBlock[b].ary.push(res.data[a]);
									}else{
										const dDate = res.data[a].classdate.split('/')[2];
										const today = new Date().getDate();
										if( dDate == today){
											if( vm.timeBlock[b].isToday ){
												vm.timeBlock[b].ary.push(res.data[a]);
											};
										}else{
											if( !vm.timeBlock[b].isToday ){
												vm.timeBlock[b].ary.push(res.data[a]);
											};
										};
									};
								};
								if( a == res.data.length - 1 && b == vm.timeBlock.length -1 ){
									vm.fnAfterAry();

									//for demo
									// vm.fnSideBarToggle();
									// $('.tgnav-group.itemC').click();
								}
							};
						};
					}else{
						$('#ms2-loading').fadeOut();
						$('#content').fadeIn();
						$('#app').css('overflow', 'hidden');
						//
						$('#allEmpty').append( $('<div>', {'class':'all-empty'}).text('今日己無合適您等級 (' + vueSideBar._data.transEn + ') 的課程') )
					};
				}
			});
		},

		computed: {
			// 	reactiveRefreshTimer(){
			// 		return this.refresh.timer;
			// 	},

			reactiveNowTime(){
				return this.nowTime;
			},
		},

		methods: {
			fnGetTime(){
				const vm = this;
				const date = new Date();
				const hours = String(date.getHours()).length < 2 ? '0'+date.getHours() : date.getHours();
				const minutes = String(date.getMinutes()).length < 2 ? '0'+date.getMinutes() : date.getMinutes();
				const seconds = String(date.getSeconds()).length < 2 ? '0'+date.getSeconds() : date.getSeconds();
				vm.nowTime = '以下結果取自 ' + hours + ' 點 ' + minutes +' 分 ' + seconds + ' 秒';
			},

			fnAfterAry(){
				const vm = this;
				console.log('timeBlock ', vm.timeBlock);
				
				// 加載 scroll 套件 v
				new PerfectScrollbar('#content .wrapper');
				setTimeout(()=>{
					$('#content .wrapper').scrollTop(1);
				},0);
				//
				$('#ms2-loading').fadeOut();
				$('#content').fadeIn();
				
				// 補齊未滿 3n / 4n v
				const max = $(window).width() > 1366 ? 4 : 3;
				for( a in vm.timeBlock ){
					const l = vm.timeBlock[a].ary.length;
					if( l != 0 && l%max > 0 ){
						const addNum = max - (l%max);
						for( i=0;i<addNum;i++ ){
							vm.timeBlock[a].ary.push({empty: true});
						};
					}
				}
			},

			fnBulletinShow(){
				const vm = this;
				//
				const buttonLeft = $('.nav-group-link').offset().left;
				const left = buttonLeft - vm.bulletinWidth / 2 + 25 - 4;// 25 = :before 50 / 2 , 4 = fix
				// $('.tgnav-group-dropdown').css({'left': left});
				vm.bulletinLeft = left;
				//
				vueBulletin._data.show = 1;
			},

			fnSideBarToggle(){
				const vm = this;
				const ww = $(window).width();

				if( $('#sidebar').hasClass('is-open') ){
					// OPEN > CLOSE
					$('#sidebar').removeClass('is-open');
					$('#content .wrapper').removeAttr('style')
				}else{
					// CLOSE > OPEN
					$('#sidebar').addClass('is-open');
					if ( ww < 1200) { vm.transX = vm.transX1199 }else{
						vm.uiGutter = ( ww - $('#app').outerWidth() ) / 2;
						vm.transX = vm.uiGutter - vm.sideBarWidth - vm.gutter;
					}
					$('#content .wrapper').css('transform', 'translateX('+ vm.transX +'px)');
					
					// SCROLLER HEIGHT v
					vm.fnScrollerHeight();

					// API v
					console.log('%c'+vueSideBar._data.getApi == 0,'color:yellow');
					if( vueSideBar._data.getApi == 0 ){
						// HOME-WORK v
						$.ajax({
							type: 'GET',
							// url: './2020/api/homework.asp?member_id=1179',
							url: './2020/api/homework.asp',
							success(res){
								console.log('home work ', res);
								console.log('writing', vueSideBar._data.writing);
								console.log('speech', vueSideBar._data.speech);
								// SH = speech, HW = writing
								for( a in res.data ){
									if( res.data[a].type != 'SH' ){
										vueSideBar._data.writing.push( res.data[a] );
									}else{
										vueSideBar._data.speech.push( res.data[a] );
									};
									if( a == (res.data.length - 1) ){
										console.log('is last');
									}
								};

								// SCROLLER HEIGHT v
								setTimeout(()=>{
									vm.fnScrollerHeight();
								}, 0);


								// HISTORY PREV 20 v
								$.ajax({
									type: 'GET',
									// url: './2020/api/reviewbar.asp?PG=' + vueSideBar._data.getApi,
									// url: './2020/api/reviewClassbar.asp?member_id=141091',
									url: './2020/api/reviewClassbar.asp',
									success(res){
										vueSideBar._data.review = JSON.parse(res);
										vueSideBar._data.getApi ++;
										$('#sidebar-loading').fadeOut();

										// 加載 scroll 套件 v
										new PerfectScrollbar('#sidebar-scroller');
										setTimeout(()=>{
											$('#sidebar-scroller').scrollTop(1);
										},0);
									}
								});


							}
						});

						
					};
				};
			},

			fnScrollerHeight(){
				const th = $('#sidebar-title').height();
				const bh = $('#sidebar-under3').innerHeight();
				const subtract = th + bh;
				$('#sidebar-scroller').css('height', 'calc( 100% - ' + subtract + 'px)')
			},

			fnBulletinTop(){
				const vm = this;
				const st = $('#app').scrollTop();
				const top = 30 + 40 - st;
				vm.bulletinTop = top;
			},
		},
		
		data: {

			nowTime: '',
			refresh:{
				setting: [55, 56, 57, 58, 59, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 , 14, 15],
				timer: '',
			},
			//
			bulletinWidth: 350,
			bulletinTop: 70,// = .tgnav.padding-top + .tgnav-group.itemB.height
			bulletinLeft: 0,
			memberLevel: <%=asp_lv%>,
			// SIDE-BAR v
			uiGutter: 0,
			transX: 0,
			transX1199: -265,
			sideBarWidth: 0,
			gutter: 5,
			//
			timeBlock: [
				{time: '00', ary: [], isToday: true}, 
				{time: '01', ary: []}, {time: '08', ary: []}, {time: '09', ary: []}, 
				{time: '10', ary: []}, {time: '11', ary: []}, {time: '12', ary: []}, {time: '13', ary: []}, 
				{time: '14', ary: []}, {time: '15', ary: []}, {time: '16', ary: []}, {time: '17', ary: []}, 
				{time: '18', ary: []}, {time: '19', ary: []}, {time: '20', ary: []}, {time: '21', ary: []}, 
				{time: '22', ary: []}, {time: '23', ary: []},
				{time: '00', ary: [], isToday: false}
			],
			bus: {
			}
		},
		el: '#app',
		components: {
			cpn_block,
		}
	});

	// Vue.config.devtools = false;
	
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
