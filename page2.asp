<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001" %>   
<!-- #include virtual="include/DBConnection.asp"--> 
<!-- #include virtual="mylesson/2020/Upgrade.asp"-->
<%
response.Buffer = true
session.Codepage =65001
response.Charset = "utf-8"  

mindx=Get_mid()  '--使用者ID
cindx=Get_cid()  '--customer ID
enddate=Get_enddate()  '--使用者到期日

if session("indx")="" then
	response.write "<script>location.href='../../'</script>"
	response.end()
end if


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
		<title>My Lesson page 2</title>
		<link href="./2020/css/mylesson_2.css?<%=Timer%>" rel="stylesheet"/>
		<link href="./2020/assets/plugins/perfect-scrollbar-master/perfect-scrollbar.css?<%=Timer%>" rel="stylesheet"/>
		<!--link href="./2020/css/memberbar.css?<%=Timer%>" rel="stylesheet"/-->
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
		<script src="./2020/js/cpn_2.js?<%=Timer%>"></script>
		<!---->
		<script src="./2020/assets/plugins/jquery-ui/1.11.2.js"></script>
		<script src="../jquery.cookie.js"></script>    
		<script src="../js/MessageVer2/alert.js" type="text/javascript"></script>        
		<!---->
		<script src="../js/Uinfo.js"></script>
		<script src="./2020/js/lightBoxDIY-V2.js?<%=Timer%>"></script>    
		<script src="./2020/js/tool.js?dd=<%=Timer%>"></script> 
	</head>

	<body>
		<div id="nav">
			<div class="wrapper">
				<!-- #include virtual="Self-Study/header_mylesson.asp"-->
			</div>
		</div>
		<div id="content">
			<div id="prev-page">
				<svg fill="none">
					<path d="M19 2L2 23.5L19 45" stroke="white" stroke-width="4"></path>
				</svg>
			</div>
			<div id="next-page">
				<svg fill="none">
					<path d="M2 2L19 23.5L2 45" stroke="white" stroke-width="4"></path>
				</svg>
			</div>
			<div class="wrapper" id="app">
				<div id="block0">
					<div id="block0-title">閱讀與聽力課程</div>
					<div id="circle-box">
						<!-- <div class="circle-item" data-type="cursor"><img src="./2020/images/cursor.svg" /></div> -->
						<!-- <div class="circle-item" data-type="noti"><img src="./2020/images/noti.svg" /></div> -->
						<div class="circle-item" @click='fnOpenSideBar' data-type="side"><img src="./2020/images/sidebar_open.svg" /></div>
					</div>
				</div>
				<div id="block1">
					<div class="grid1">
						<div class="grid-title">國際時事</div>
						<div class="grid1-box">
							<cpn-tread v-bind:prop='key' v-for='key in trend' :req-url='key.news_id' :req-pic='key.pic'></cpn-tread>
						</div>
					</div>
					<div class="grid2">
						<div id="fade">
							<div class="fade-main">
								<cpn-fade v-bind:prop='key' v-for='key in fade' :req-url='key.news_id' :req-pic='key.pic | filterBG'>
								</cpn-fade>
							</div>
							<div class="fade-dot">
								<div class="fade-dot-item active"></div>
								<div class="fade-dot-item"></div>
								<div class="fade-dot-item"></div>
								<div class="fade-dot-item"></div>
							</div>
						</div>
						<div class="grid22-box">
							<cpn-mixin v-bind:prop='key' v-for='key in mixin' :req-url='key.news_id' :req-pic='key.pic | filterBG'>
							</cpn-mixin>
						</div>
					</div>
					<div class="grid3">
						<div class="grid3-video">
							<iframe src="https://www.youtube.com/embed/Nw7wwHm4GxU?controls=0" frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen="allowfullscreen"></iframe>
						</div>
						<div class="grid-title is-1">生活新知</div>
						<div class="grid3-box">
							<cpn-living v-bind:prop='key' v-for='key in living' :req-url='key.news_id'></cpn-living>
						</div>
						<div class="grid-title is-2">雜誌</div>
						<div class="grid3-mgz" style="background-image: url(https://funday.asia/funMz/2020080019/P1.jpg)"></div>
					</div>
					<div class="grid4">
						<div class="grid-title is-1">商務情境</div>
						<div class="grid4-box">
							<cpn-office v-bind:prop='key' v-for='key in office' :req-url='key.news_id'></cpn-office>
						</div>
						<a class="grid4-wt" href="#" style="background-image: url(./2020/images/wt.png)"></a>
						<a class="grid4-wt" href="#" style="background-image: url(./2020/images/wt.png)">
							<div class="grid4-week">2020/11/20~2020/11/27</div>
						</a>
						<div class="grid-title is-2">童話故事</div>
						<div class="grid42-box">
							<cpn-tales :prop='key' v-for='key in tales' :req-url='key.news_id' :req-pic='key.pic | filterBG'>
							</cpn-tales>
						</div>
					</div>
				</div>
				<div id="block-title">
					<div class="grid1">
						<div class="grid-title">部落格</div>
					</div>
					<div class="grid2">
						<div class="grid-title">看影片學英文</div>
					</div>
					<div class="grid3">
						<div class="grid-title">賞電影 / 聊新知</div>
					</div>
					<div class="grid4">
						<div class="grid-title">北捷微電影</div>
					</div>
					<div class="title-group"></div>
				</div>
				<div id="block2">
					<div class="grid1">
						<div class="grid1-box">
							<cpn-blog
								:prop='key'
								v-for='key in blog'
								:req-url='key.indx'
								:req-pic='key.pic'
							></cpn-blog>
						</div>
					</div>
					<div class="grid2">
						<div class="grid2-video">
							<iframe src="https://www.youtube.com/embed/Nw7wwHm4GxU?controls=0" frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen="allowfullscreen"></iframe>
						</div>
					</div>
					<div class="grid3">
						<cpn-program
							:prop='key'
							v-for='key in program1'
							:req-url='key.indx'
							:req-pic='key.pic | filterBG'
						></cpn-program>
					</div>
					<div class="grid4">
						<cpn-program
							:prop='key'
							v-for='key in program2'
							:req-url='key.indx'
							:req-pic='key.pic | filterBG'
						></cpn-program>
					</div>
					<div class="grid5">
						<div class="grid5-title">唱歌學英文</div>
						<div class="grid5-box">
							<cpn-musicbox
								:prop='key'
								v-for='key in musicbox'
								:req-url='key.index'
								:req-pic='key.pic | filterBG'
							></cpn-musicbox>
						</div>
					</div>
				</div>
				<div id="foo">
					<div id="foo-left"></div>
					<div id="foo-right"></div>
					<div class="f1">需要其他協助嗎? 請聯絡我們
						<div class="msg-board" onclick="GoLink('MessageBoard')" title="留言版"></div>
					</div>
					<div class="f2"><span class="f2-1">服務時間：週一～週六 10:00~12:30、13:30~17:30、18:30~22:00 | 02-2523-9777 / 0800-023-777
							(限市話)</span><span class="f2-2">© 2020 Brainstorm Digital Communications Corp. All rights reserved. Privacy
							Policy</span></div>
				</div>
			</div>
			<div id="sidebar">
				<div id="sidebar-title">
					<div id="sidebar-icon"><img src="./2020/images/member.svg" />個人等級</div>
					<div id="sidebar-level">A2-3</div>
				</div>
				<div id="sidebar-scroller">
					<div id="sidebar-scroller-title">複習列表 REVIEW</div>
					<div id="sidebar-list">
						<cpn-side-item v-bind:prop='key' v-for='key in review' :req-sort='key.sort' :req-url='key.url'>
						</cpn-side-item>
					</div>
				</div>
				<div id="sidebar-under">
					<div id="sidebar-under-title">個人收錄</div>
					<ul id="sidebar-under-list">
						<li class="sidebar-under-item">
							<a href="https://funday.asia/newpage2/wordcard/" target='_blank'><img src="./2020/images/under1.svg" />單字</a>
						</li>
						<li class="sidebar-under-hr"></li>
						<li class="sidebar-under-item">
							<a href="https://funday.asia/Personal_Sentences/list.asp" target='_blank'><img src="./2020/images/under2.svg" />佳句</a>
						</li>
						<li class="sidebar-under-hr"></li>
						<li class="sidebar-under-item">
							<a href="https://funday.asia/search/article/#Collect" target='_blank' @click.prev ><img src="./2020/images/under3.svg" />文章</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</body>
</html>
<script>
	const vueSideBar = new Vue({
		el: '#sidebar',
		data: {
			review: [
				{
					sort: '1',
					time: '2020/11/30',
					title: 'cdn1桃園機場計程車更加專業桃園機場計程車更加專業',
					url: 's_link1',
					lv: 'B2-2'
				},
				{
					sort: '2',
					time: '2020/11/29',
					title: 'cdn2桃園機場計程車更加專業桃園機場計程車更加專業',
					url: 's_link2',
					lv: 'A2-1'
				},
			]
		},
		components: {
			cpnSideItem,
		}
	});

	const vueMain = new Vue({
		el: '#app',
		components: {
			// 1 v
			cpnTread,
			cpnLiving,
			cpnOffice,
			cpnSideItem,
			cpnMixin,
			cpnFade,
			cpnTales,
			// 2 v
			cpnBlog,
			cpnProgram,
			cpnMusicbox
		},
		created() {
			const vm = this;
			vm.sideBarWidth = $('#sidebar').width();
			setTimeout(()=>{
				vm.fnGiveHeight();
			}, 0);

			$.ajax({
				type: 'GET',
				url: 'https://funday.asia/self-study/json/news_array.json',
				success: function(res){
					console.log('got ', res);
				}
			});

			// ==========================================
			// == EVENT v
			// ==========================================
			$(window).resize(()=>{ vm.fnGiveHeight() });
		},
		methods: {
			fnGiveHeight(){
				const rate1 = 0.56;
				const rate2 = 0.67;
				const rate3 = 1.33;
				const rate4 = 1.49;
				const rate5 = 0.562;
				const rate6 = 0.645;
				const rate7 = 1.2;
				const rate8 = 0.566

				// --------------------------------
				// BLOCK1 GRID2 v
				const hFade = $('#fade').width() * rate6;
				$('#fade').css('height', hFade);

				const hFadeOuter = $('#fade').outerHeight(true);
				$('#block1 .grid22-box').css('height', 'calc(100% - ' + hFadeOuter +'px)');

				// --------------------------------
				// BOX1 GRID3 MAGAZINE v
				const hb1mgz = $('#block1 .grid3-mgz').width() * rate3;
				$('#block1 .grid3-mgz').css('height', hb1mgz);

				// BOX1 GRID3 LIST v
				const hb1g3v = $('#block1 .grid3-video').outerHeight(true);
				const hb1g3t1 = $('#block1 .grid-title.is-1').outerHeight(true);
				const hb1g3t2 = $('#block1 .grid-title.is-2').outerHeight(true);
				const hb1g3subtract = hb1g3v + hb1g3t1 + hb1g3t2 + hb1mgz;
				$('#block1 .grid3-box').css('height', 'calc( 100% - ' + hb1g3subtract + 'px )');

				// --------------------------------
				// BOX1 GRID4-2 LIST v
				const hb1g42img = $('#block1 .grid42-img').width() * rate1;
				$('#block1 .grid42-img').css('height', hb1g42img);

				// BLOCK 1 WEEK TEST v
				const hb1g4wt = $('#block1 .grid4-wt').width() * 1;
				$('#block1 .grid4-wt').css('height', hb1g4wt);

				// BOX1 GRID4-1 LIST v
				const hb1g4t1 = $('#block1 .grid4 .grid-title.is-1').outerHeight(true);
				const hb1g4t2 = $('#block1 .grid4 .grid-title.is-2').outerHeight(true);
				const hb1g42 = $('#block1 .grid42-box').outerHeight(true)
				const hb1g4subtract = hb1g4wt * 2 + hb1g4t1 + hb1g4t2 + hb1g42;
				$('#block1 .grid4-box').css('height', 'calc( 100% - ' + hb1g4subtract + 'px)');

				// ================================
				// ================================
				// BLOCK2 GRID3 v
				const hb2g3 = $('#block2 .grid3-img').width() * rate1;
				$('#block2 .grid3-img').css('height', hb2g3);

				// BLOCK2 GRID2&3 v
				const hb2g2v = $('#block2 .grid2-video').width() * rate8;
				$('#block2 .grid2, #block2 .grid3, #block2 .grid4').css('height', hb2g2v);

				// BLOCK2 GRID5 MUSIC v
				const hb2g5img = $('#block2 .grid5-img').width() * rate1;
				$('#block2 .grid5-img').css('height', hb2g5img);

				// BLOCK2
				const hb2gutter = 13;
				const hb2g5 = $('#block2 .grid5-title').outerHeight() + hb2g5img + $('#block2 .grid5-under').outerHeight(true);
				const h2 = hb2g2v + hb2g5 + hb2gutter;

				$('#block2 .grid1').css('height', h2);
				
				// ================================
				// ================================
				// SIDE v	
				const vm = this;
				const ww = $(window).width();
				if( ww >= 1200 ){
					vm.uiGutter = ( ww - $('#app').outerWidth() ) / 2;
					vm.transX = vm.uiGutter - vm.sideBarWidth - vm.gutter;
					console.log('vm.uiGutter', vm.uiGutter);
					console.log('vm.sideBarWidth', vm.sideBarWidth);
				}else{
					vm.transX = vm.transX1199;
				};
				if( $('#sidebar').hasClass('is-open') ){
					$('#app').css('transform', 'translateX(' + vm.transX + 'px)');
				};
			},
			
			fnOpenSideBar(){
				const vm = this;
				if( $('#sidebar').hasClass('is-open') ){
					$('#sidebar').removeClass('is-open');
					$('#content .wrapper').removeAttr('style')
				}else{
					$('#sidebar').addClass('is-open');
					if ($(window).width() < 1200) { vm.transX = vm.transX1199 }
					$('#content .wrapper').css('transform', 'translateX('+ vm.transX +'px)');
				}
			}
		},
		data: {
			uiGutter: 0,
			transX: 0,
			transX1199: -265,
			sideBarWidth: 0,
			gutter: 5,
			dUrl: '1887',
			dPic: 'https://funday.asia/en/pic/201125img-newsC19514-1-1m.jpg',
			trend: [
				{
					news_id: '11',
					ch_subject: 'trend1馬斯克晉升全球第三大富豪',
					pic: 'https://funday.asia/en/pic/201124img-newsC19509-1-1ss.jpg',
					ch_article: '特斯拉將加入標準普爾500指數，是擴大投資人基礎的里程碑。標普道瓊指數公司11月16日宣佈，這家電動汽車製造商12月21日開盤前將納入基準指數，以配合12月單季調整。',
					read_count: 11
				},
				{
					news_id: '12',
					ch_subject: 'trend2馬斯克晉升全球第三大富豪',
					pic: 'https://funday.asia/en/pic/201125img-newsC19514-1-1m.jpg',
					ch_article: '特斯拉將加入標準普爾500指數，是擴大投資人基礎的里程碑。標普道瓊指數公司11月16日宣佈，這家電動汽車製造商12月21日開盤前將納入基準指數，以配合12月單季調整。',
					read_count: 12
				},
			],
			fade: [
				{
					news_id: '19514',
					ch_subject: 'mf1馬斯克晉升全球第三大富豪',
					pic: 'https://funday.asia/en/pic/201125img-newsC19514-1-1m.jpg',
					en_subject: 'Termination of Contract"',
				},
				{
					news_id: '19514',
					ch_subject: 'mf2馬斯克晉升全球第三大富豪',
					pic: 'https://funday.asia/en/pic/201124img-newsC19509-1-1.jpg',
					en_subject: 'Termination of Contract"',
				},
				{
					news_id: '19514',
					ch_subject: 'mf3馬斯克晉升全球第三大富豪',
					pic: 'https://funday.asia/en/pic/201125img-newsC19514-1-1m.jpg',
					en_subject: 'Termination of Contract"',
				},
				{
					news_id: '19514',
					ch_subject: 'mf4馬斯克晉升全球第三大富豪',
					pic: 'https://funday.asia/en/pic/201117img-newsC19483-1-1.jpg',
					en_subject: 'Termination of Contract"',
				},
			],
			mixin: [
				{
					news_id: '19514',
					ch_subject: 'mixin1馬斯克晉升全球第三大富豪',
					pic: 'https://funday.asia/en/pic/201125img-newsC19514-1-1m.jpg',
					en_subject: 'Termination of Contract"',
					ch_article: '特斯拉將加入標準普爾500指數，是擴大投資人基礎的里程碑。標普道瓊指數公司11月16日宣佈，這家電動汽車製造商12月21日開盤前將納入基準指數，以配合12月單季調整。',
					read_count: 888
				},
				{
					news_id: '19514',
					ch_subject: 'mixin2馬斯克晉升全球第三大富豪',
					pic: 'https://funday.asia/en/pic/201125img-newsC19514-1-1m.jpg',
					en_subject: 'Termination of Contract"',
					ch_article: '特斯拉將加入標準普爾500指數，是擴大投資人基礎的里程碑。標普道瓊指數公司11月16日宣佈，這家電動汽車製造商12月21日開盤前將納入基準指數，以配合12月單季調整。',
					read_count: 888
				},
			],
			living: [
				{
					news_id: '19514',
					ch_subject: 'living1馬斯克晉升全球第三大富豪',
					ch_article: '特斯拉將加入標準普爾500指數，是擴大投資人基礎的里程碑。標普道瓊指數公司11月16日宣佈，這家電動汽車製造商12月21日開盤前將納入基準指數，以配合12月單季調整。',
					read_count: 31
				},
				{
					news_id: '19514',
					ch_subject: 'living2馬斯克晉升全球第三大富豪',
					ch_article: '特斯拉將加入標準普爾500指數，是擴大投資人基礎的里程碑。標普道瓊指數公司11月16日宣佈，這家電動汽車製造商12月21日開盤前將納入基準指數，以配合12月單季調整。',
					read_count: 32
				}
			],
			office: [
				{
					news_id: '19514',
					ch_subject: 'office1馬斯克晉升全球第三大富豪',
					en_subject: 'Termination of Contract"',
					sort: '書信',
				},
				{
					news_id: '19514',
					ch_subject: 'office2馬斯克晉升全球第三大富豪',
					en_subject: 'Termination of Contract"',
					sort: '對話',
				}
			],
			tales: [
				{
					news_id: '19514',
					ch_subject: 'tales1馬斯克晉升全球第三大富豪',
					pic: 'https://funday.asia/en/pic/201125img-newsC19514-1-1m.jpg',
				},
				{
					news_id: '19514',
					ch_subject: 'tales2馬斯克晉升全球第三大富豪',
					pic: 'https://dsn.funday.asia/photo/Story/20200106113259_img.jpg',
				}
			],

			// BLOCK 2 v
			blog: [
				{
					pic: "https://funday.asia/BlogS/files/img-e-508.jpg",
					classify: "專題",
					subject: "blog1名句背後的故事 _ 伊比鳩魯",
					ndate: "2020/11/25",
					isNew: "1",
					indx: "508"
				},
				{
					pic: "https://funday.asia/BlogS/files/img-e-507.png",
					classify: "英語力",
					subject: "blog2英文文法大解密 - 過去事實相反的假設",
					ndate: "2020/11/20",
					isNew: "0",
					indx: "507"
				},
				{
					pic: "https://funday.asia/BlogS/files/img-e-508.jpg",
					classify: "專題",
					subject: "blog3名句背後的故事 _ 伊比鳩魯",
					ndate: "2020/11/25",
					isNew: "1",
					indx: "508"
				},
			],
			program1: [
				{
					pic: "https://dsn.funday.asia/photo/Program/202011251554372395達文西密碼_YT封面.jpg",
					classify: "Cinephile",
					subject: "p11 達文西密碼 The Da Vinic Code",
					isNew: "1",
					indx: "203"
				},
				{
					pic: "https://dsn.funday.asia/photo/Program/202011251505487754EP16.jpg",
					classify: "MRT_APP",
					subject: "p12 MRT | 捷運微電影 EP16",
					isNew: "0",
					indx: "202"
				},
				{
					pic: "https://dsn.funday.asia/photo/Program/202011251503321328EP15.jpg",
					classify: "MRT_Funday",
					subject: "p13 MRT | 捷運微電影 EP15",
					isNew: "0",
					indx: "200"
				},
				{
					pic: "https://dsn.funday.asia/photo/Program/202011251554372395達文西密碼_YT封面.jpg",
					classify: "Cinephile",
					subject: "p11 達文西密碼 The Da Vinic Code",
					isNew: "1",
					indx: "203"
				},
			],
			program2: [
				{
					pic: "https://dsn.funday.asia/photo/Program/202011251505061185EP16.jpg",
					classify: "p21 MRT_Funday",
					subject: "MRT | 捷運微電影 EP16",
					isNew: "0",
					indx: "201"
				},
				{
					pic: "https://dsn.funday.asia/photo/Program/202011251503321328EP15.jpg",
					classify: "p22 MRT_Funday",
					subject: "MRT | 捷運微電影 EP15",
					isNew: "0",
					indx: "200"
				},
				{
					pic: "https://dsn.funday.asia/photo/Program/202011251554372395達文西密碼_YT封面.jpg",
					classify: "Cinephile",
					subject: "p23 達文西密碼 The Da Vinic Code",
					isNew: "1",
					indx: "203"
				},
				{
					pic: "https://dsn.funday.asia/photo/Program/202011251554372395達文西密碼_YT封面.jpg",
					classify: "Cinephile",
					subject: "p11 達文西密碼 The Da Vinic Code",
					isNew: "1",
					indx: "203"
				},
			],
			musicbox: [
				{
					"pic": "https://img.youtube.com/vi/4NRXx6U8ABQ/hqdefault.jpg",
					"singer": "The Weeknd",
					"song": "Blinding Lights",
					"isNew": "1",
					"indx": "893"
				},
				{
					"pic": "https://img.youtube.com/vi/oygrmJFKYZY/hqdefault.jpg",
					"singer": "Dua Lipa",
					"song": "Don’t Start Now",
					"isNew": "0",
					"indx": "883"
				},
			],

			ary: [0, 8, 9, 4, 5, 7]
		},
	});

	$(()=>{
		new PerfectScrollbar('#content .wrapper');
		new PerfectScrollbar('#sidebar-scroller');

		// =============================
		// == FADE SHOW v
		// =============================
		const $item = $('.fade-main-item');
		const $dot = $('.fade-dot-item');
		const max = $item.length - 1;
		const fadeTimeDelay = 2000;
		const fadeTimeChange = 1500;
		const fadeTimeDotChange = 300;

		let i = 0;
		const fadeAni = function () {
			i < max ? i++ : i = 0
			$item.fadeOut(fadeTimeChange).eq(i).fadeIn(fadeTimeChange);
			$dot.removeClass('active').eq(i).addClass('active');
		};

		let sid = setInterval(fadeAni, fadeTimeDelay);
		$('.fade-main-item, .fade-dot-item').hover(function () {
			clearInterval(sid);
		}, function () {
			sid = setInterval(fadeAni, fadeTimeDelay);
		});

		$dot.mouseover(function () {
			const idx = $(this).index();
			$item.fadeOut(fadeTimeDotChange).eq(idx).fadeIn(fadeTimeDotChange);
			$dot.removeClass('active').eq(idx).addClass('active');
		});
	});
	
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
	
	<%if  session("Login_guided")="4"  then%>
		if(parseInt($(window).height())>720){
			DIYLightBox('iframe','1280px','720px','../../../KOBO/detail.asp')    
		}else{
			DIYLightBox('iframe','980px','592px','../../../KOBO/detail.asp')    
		}   
	<%end if%>
	
</script>
