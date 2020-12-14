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
	</head>

	<body>
		<div id="nav">
			<div class="wrapper">
				<!-- #include virtual="Self-Study/header_mylesson.asp"-->
			</div>
		</div>
		<img src="./2020/images/loading_ bigger.gif" id="ms2-loading">
		<div id="content">
			<a href='./intro.asp' id="prev-page">
				<svg fill="none">
					<path d="M19 2L2 23.5L19 45" stroke="#354E85" stroke-width="4"></path>
				</svg>
			</a>
			<div id="next-page" style='display: none'>
				<svg fill="none">
					<path d="M2 2L19 23.5L2 45" stroke="#354E85" stroke-width="4"></path>
				</svg>
			</div>
			<div class="wrapper" id="app">
				<div id="block0">
					<div class="grid1">
						<div id="block0-title">閱讀與聽力課程</div>
					</div>
					<div class="grid2"></div>
					<div class="grid3"></div>
					<div class="grid4">
						<div id="searchart">
							<input type="text" 
								id="searchart-input" 
								placeholder="輸入文章編號或標題..." 
								v-model='search_text' 
								@keyup.enter='fnGoSearch'/>
							<div id="searchart-send" title="文章搜尋" @click="fnGoSearch"></div>
						</div>
						<div id="circle-box">
							<!-- <div class="circle-item" data-type="cursor"><img src="./2020/images/cursor.svg" /></div> -->
							<!-- <div class="circle-item" data-type="noti"><img src="./2020/images/noti.svg" /></div> -->
							<div class="circle-item" @click='fnOpenSideBar' data-type="side"><img src="./2020/images/sidebar_open.svg" /></div>
						</div>
					</div>
				</div>
				<div id="block1">
					<div class="grid1">
						<a class="grid-title" href="https://funday.asia/search/article/?category=1">國際 ‧ 時事</a>
						<div class="grid1-box">
							<cpn_tread
								:prop='item'
								v-for='(item, i) in trend'
								:req_fn='fnGoLink("News", item.xml)'
								:req_pic='item.pic | filterSrc'
								:key='i'
							></cpn_tread>
						</div>
					</div>
					<div class="grid2">
						<div id="fade">
							<img src="./2020/images/empty.png">
							<div class="fade-main">
								<cpn_fade
									:prop='item'
									:class='{"active": reactiveFade == i}'
									v-for='(item, i) in fade' 
									:req_fn='fnGoLink("News", item.xml)' 
									:req_pic='item.pic | filterSrc | filterBG'
									@connect_mouseover='fnClearInterval'
									@connect_mouseout='fnSetInterval'
									:key='i'
								></cpn_fade>
							</div>
							<div class="fade-dot">
								<cpn_fade_dot
									:class='{"active": reactiveFade == i}'
									:prop='item'
									v-for='(item, i) in fade'
									@connect_mouseover='fnDotOver(i)'
									@connect_mouseover2='fnClearInterval'
									:key='i'
								></cpn_fade_dot>
							</div>
						</div>
						<div class="grid22-box">
							<cpn_mixin
								:prop='item'
								v-for='(item, i) in mixin' 
								:req_fn='fnGoLink("News", item.xml)' 
								:req_pic='item.pic | filterSrc | filterBG'
								:key='i'
							></cpn_mixin>
						</div>
					</div>
					<div class="grid3">
						<div class="grid3-video"
							:style='program.above.pic | filterBG'
							:onclick='fnGoLink("FunProgram", program.above.indx)'
						>
							<!--iframe src="https://www.youtube.com/embed/Nw7wwHm4GxU?controls=0" frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen="allowfullscreen"></iframe-->
						</div>
						<a class="grid-title is-1" href="https://funday.asia/search/article/?category=2">生活 ‧ 新知</a>
						<div class="grid3-box">
							<cpn_living
								:prop='item'
								v-for='(item, i) in living' 
								:req_fn='fnGoLink("News", item.xml)'
								:key='i'
								></cpn_living>
						</div>
						<a href='https://funday.asia/self-study/column/' class="grid-title is-3">專欄</a>
						<div class="grid32-box">
							<cpn_columns
								:prop='item'
								v-for='(item, i) in columns'
								:req_fn='fnGoLink("Column", item.columns_id)'
								:req_pic='item.columns_pic | filterColumnSrc | filterBG'
								:req_repeat='item.repeat'
								:key='i'
							></cpn_columns>
						</div>
						<a href="https://funday.asia/self-study/?scroll=magazine" class="grid-title is-2">雜誌</a>
						<a class="grid3-mgz"
							href='#'
							:onclick='fnGoLink("MZ", magazine.SN)'
							:style='magazine.pic | filterBG '
						></a>
					</div>
					<div class="grid4">
						<a class="grid-title is-1" href="https://funday.asia/search/article/?category=3">商務 ‧ 情境</a>
						<div class="grid4-box">
							<cpn_office
								:prop='item'
								v-for='(item, i) in office' 
								:req_fn='fnGoLink("News", item.xml)'
								:req_category='item.class_id | filterOffice14Class'
								:key='i'
							></cpn_office>
						</div>
						<a class="grid4-wt is-ad" href="https://funday.asia/lifeWeb" target="_blank" style="background-image: url(./2020/images/ad.jpg)"></a>
						<a class="grid4-wt" href="#" style="background-image: url(./2020/images/wt.png)" :onclick='fnGoLink("FunTest", WeeklyTest.link)' >
							<div class="grid4-week">{{ WeeklyTest.subject }}</div>
						</a>
						<div class="grid-title is-2" onclick="GoLink('SearchStory')">童話故事</div>
						<div class="grid42-box">
							<cpn_tales 
								:prop='item'
								v-for='(item, i) in tales' 
								:req_fn='fnGoLink("FairyTales", item.indx)'
								:req_pic='item.pic | filterBG'
								:key='i'
							></cpn_tales>
						</div>
					</div>
				</div>
				<div id="block-title">
					<div class="grid1">
						<a href="https://funday.asia/blogDesktop/" class="grid-title">部落格</a>
					</div>
					<div class="grid2">
						<div class="grid-title" onclick="GoLink('SearchVideo')">看影片學英文</div>
					</div>
					<div class="grid3">
						<a href="https://funday.asia/search/Program/?category=1" class="grid-title">賞電影 / 聊新知</a>
					</div>
					<div class="grid4">
						<a href="https://funday.asia/search/Program/?category=2" class="grid-title">北捷微電影</a>
					</div>
					<div class="title-group"></div>
				</div>
				<div id="block2">
					<div class="grid1">
						<div class="grid1-box">
							<cpn_blog
								:prop='item'
								v-for='(item, i) in blog'
								:req_fn='fnGoLink("Blog", item.indx)'
								:req_pic='item.pic'
								:key='i'
							></cpn_blog>
						</div>
					</div>
					<div class="grid2">
						<div class="grid2-video"
							:style='program.under.pic | filterBG'
							:onclick='fnGoLink("FunProgram", program.under.indx)'
						>
							<!--iframe src="https://www.youtube.com/embed/Nw7wwHm4GxU?controls=0" frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen="allowfullscreen"></iframe-->
						</div>
					</div>
					<div class="grid3">
						<cpn_program
							:prop='item'
							v-for='(item, i) in program1'
							:req_fn='fnGoLink("FunProgram", item.indx)'
							:req_pic='item.pic | filterBG'
							:key='i'
						></cpn_program>
					</div>
					<div class="grid4">
						<cpn_program
							:prop='item'
							v-for='(item, i) in program2'
							:req_fn='fnGoLink("FunProgram", item.indx)'
							:req_pic='item.pic | filterBG'
							:key='i'
						></cpn_program>
					</div>
					<div class="grid5">
						<div class="grid5-title" onclick="GoLink('SearchMusicbox')">唱歌學英文</div>
						<div class="grid5-box">
							<cpn_musicbox
								:prop='item'
								v-for='(item, i) in musicbox'
								:req_fn='fnGoLink("MusicBoxPlay", item.indx)'
								:req_pic='item.pic | filterBG'
								:key='i'
							></cpn_musicbox>
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
					<div id="sidebar-level">{{memberLvStep}}</div>
				</div>
				<div id="sidebar-scroller" @scroll='fnScroll'>
					<div id="sidebar-scroller-title">複習列表 REVIEW</div>
					<div id="sidebar-list">
						<cpn_side_item
							:prop='item'
							v-for='(item, i) in review' 
							:req_sort='item.sort | filterSort' 
							:req_fn='fnGoLinkSide(item.sort, item.id)'
							:key='i'
						></cpn_side_item>
						<!-- :req_fn='item.id' -->
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
							<a href="https://funday.asia/search/article/?collect" target='_blank' @click.prev ><img src="./2020/images/under3.svg" />文章</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</body>
</html>
		<script src="./2020/js/tool.js?dd=<%=Timer%>"></script> 
<script>
	const vueSideBar = new Vue({
		el: '#sidebar',
		created(){
			const vm = this;
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

			vm.memberLvStep = transEn + '-' + <%=asp_step%>;
		},
		methods: {
			fnGoLinkSide(from, id){
				let transEn;
				let value;
				let type;

				switch(from){
					// type 1 v
					case '文章':
						transEn = 'News';
						value = 'xml=';
						type = 1;
						break;
					case '影片':
						transEn = 'FunProgram';
						value = 'indx=';
						type = 1;
						break;
					case '專欄':
						transEn = 'Column';
						value = 'xml=';
						type = 1;
						break;
					case '音樂':
						transEn = 'MusicBoxPlay';
						value = 'whichStart=1&musicNo=';
						type = 1;
						break;
					case '童話':
						transEn = 'FairyTales';
						value = 'sid=';
						type = 1;
						break;
					// type 2 v
					case '測驗':
						transEn = 'FunTest';
						value = 'PG=answer_page.asp?indx=';
						type = 2;
						break;
					case '實力衝刺':
						transEn = 'TutorIndx';
						value = 'indx=';						
						type = 2;
						break;
					case '會話':
						transEn = 'PracticeIndx';
						value = 'indx=';						
						type = 2;
						break;
					case '研習營':
						transEn = 'Conference';
						value = 'indx=';	
						type = 2;
						break;
					// type 3 v
					default:
						// 寫作 & 朗讀練習
						type = 3;
				};

				if( type == 1 ){
					return "GoLink('"+ transEn + "', '"+ value + id + "')";
				}else if(type == 2){
					return "GoLink('"+ transEn + "', '"+ value + id + "')";
				}else{
					return '';
				}
			},

			fnScroll(){
				const vm = this;
				const regexp1 = new RegExp(" ", "g");
				const regexp2 = new RegExp(":", "g");
				const regexp3 = new RegExp("px", "g");
				const h = $('#sidebar-scroller').outerHeight();
				const s = $('#sidebar-scroller .ps__thumb-y').attr('style').replace(regexp1, '').replace(regexp2, '').replace(regexp3, '').replace('top', '').replace('height', '').split(';');
				const sum = Number(s[0]) + Number(s[1]);
				if( sum == h ){
					$.ajax({
						type: 'GET',
						url: './2020/api/reviewbar.asp?PG=' + vm.getApi,
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
			review: [],
			getApi: 0,
			memberLvStep: '',
		},
		components: {
			cpn_side_item,
		}
	});

	const vueMain = new Vue({
		created() {
			const vm = this;
			vm.sideBarWidth = $('#sidebar').width();

			$.ajax({
				type: 'GET',
				url: './2020/api/Pg2Json.asp?levels=' + vm.memberLevel,
				success: function(res){
					console.log('success data is >', res);
					const idxArt = res.findIndex(item => item.classify.toLowerCase() == 'article');
					const idxCol = res.findIndex(item => item.classify.toLowerCase() == 'columns');
					const idxPro = res.findIndex(item => item.classify.toLowerCase() == 'program');
					const idxSto = res.findIndex(item => item.classify.toLowerCase() == 'story');
					const idxMus = res.findIndex(item => item.classify.toLowerCase() == 'musicbox');
					const idxMaz = res.findIndex(item => item.classify.toLowerCase() == 'magazine');
					const idxBlo = res.findIndex(item => item.classify.toLowerCase() == 'blog');
					const idxAD = res.findIndex(item => item.classify.toLowerCase() == 'ad');
					const idxWeeklyTest = res.findIndex(item => item.classify.toLowerCase() == 'weeklytest');

					// --------------------------------
					// -- MUTIPLE v
					// --------------------------------
					vm.blog = res[idxBlo].data;
					vm.tales = res[idxSto].data;
					vm.musicbox = res[idxMus].data;
					vm.WeeklyTest=res[idxWeeklyTest].data;

					vm.WeeklyTest.subject=vm.WeeklyTest[0].subject
					vm.WeeklyTest.link=vm.WeeklyTest[0].link;


					// --------------------------------
					// -- ARTICLE v
					// --------------------------------
					let artTrend = [];
					let artLiving = [];
					let artOffice = [];
					//
					res[idxArt].data.forEach(function(item, i){
						const type = item.articletype.toLowerCase();
						switch( type ){
							case 'trend': artTrend.push(item);break;
							case 'living': artLiving.push(item);break;
							case 'office': artOffice.push(item);break;
							default:
						}
					});
					//
					artTrend.sort(function(n, c){
						if( n.news_id > c.news_id ){ return -1 }else{ return 1 };
					});

					artLiving.sort(function(n, c){
						if( n.news_id > c.news_id ){ return -1 }else{ return 1 };
					});

					artOffice.sort(function(n, c){
						if( n.news_id > c.news_id ){ return -1 }else{ return 1 };
					});
					//
					vm.trend = artTrend;
					vm.living = artLiving;
					vm.office = artOffice;

					// console.log('trend ', vm.trend);
					// console.log('living ', vm.living);	

					// --------------------------------
					// -- PROGRAM v
					// --------------------------------
					let programAll = res[idxPro].data;
					//
					programAll.forEach(function(item, i){
						if( /mrt/i.test(item.classify) ){
							vm.program2.push(item);
						}else{
							vm.program1.push(item);
						}
					});

					// JUST FOR DEMO v
					// vm.addAry();

					// PROGRAM ABOVE & UNDER v
					vm.program.above.indx = vm.program1[0].indx;
					vm.program.above.pic= vm.program1[0].pic;
					vm.program.under.indx = vm.program1[1].indx;
					vm.program.under.pic= vm.program1[1].pic;
					vm.program1.splice(0, 2);

					// --------------------------------
					// -- COLUMNS v
					// --------------------------------
					vm.columns = res[idxCol].data;
					if( vm.columns[1].columns_EnSubject == vm.columns[0].columns_EnSubject ){ vm.columns[1].repeat = true };
					if( vm.columns[2].columns_EnSubject == vm.columns[1].columns_EnSubject ){ vm.columns[2].repeat = true };

					// --------------------------------
					// -- MAGAZINE v
					// --------------------------------
					vm.magazine.pic = res[idxMaz].data[0].pic;
					vm.magazine.SN = res[idxMaz].data[0].SN;

					// ==========================================
					// == PLUGIN v
					// ==========================================
					new PerfectScrollbar('#content .wrapper');
					new PerfectScrollbar('#sidebar-scroller');

					// --------------------------------
					// -- FADE & MIXIN v
					// --------------------------------
					let fadeIndex = 0;
					const fadeMax = 2; // FADE-SHOW = 2 + 2
					let fid;
					let mixinIndex = 0;
					const mixinMax = 5;// MIXIN = 5+5
					let mid;
					let mm = 0;

					const fadePush = function(){
						vm.fade.push(vm.trend[0]);
						vm.trend.splice(0,1);
						//
						vm.fade.push(vm.living[0]);
						vm.living.splice(0,1);
						//
						fadeIndex ++;
						if( fadeIndex >= fadeMax ){ 
							clearInterval(fid);
							mid = setInterval(mixinPush, 0);
						};
					};

					const mixinPush = function(){
						vm.mixin[mm] = vm.trend[0];
						vm.trend.splice(0,1);
						mm ++
						//
						vm.mixin[mm] =vm.living[0];
						vm.living.splice(0,1);
						mm ++;
						//
						mixinIndex ++;
						if( mixinIndex >= mixinMax ){ 
							clearInterval(mid);
							//
							vm.mixin.sort(function(n, c){
								if( n.ndate > c.ndate ){ return -1 }else{ return 1 };
							});

							// ==========================================
							// == RENDER END v
							// ==========================================
							$('#ms2-loading').fadeOut(200);
							$('#content').fadeIn(200);
							setTimeout(()=>{
								vm.fnGiveHeight();
							}, 0);

							// ==========================================
							// == FADE ANIMATION v
							// ==========================================
							vm.fnSetInterval();
						};
					};

					fid = setInterval(fadePush, 0);
				}
			});

			// ==========================================
			// == EVENT v
			// ==========================================
			$(window).resize(()=>{ vm.fnGiveHeight() });
		},
		computed: {
			reactiveFade(){
				return this.sIndex;
			}
		},
		methods: {
			fnSearch(){

			},

			fnGoSearch(){
				const vm = this;
				console.log('fnGoSearch ', vm.search_text);
				const href = 'https://funday.asia/search/article/?key=' + vm.search_text;
				window.open(href, 'search')
			},

			fnGoLink(from, id){
				let value;
				switch( from ){
					case 'News':
						value = "xml=" + id;
						break;
					case 'MZ':
						value = 'SN=' + id;
						break;
					case 'FunProgram':
						value = 'indx='+id;
						break;
					case 'FairyTales':
						value = "sid=" + id;
						break;
					case 'Blog':
						value = "classify=life&blog=" + id;
						break;
					case 'MusicBoxPlay':
						value = "whichStart=1&musicNo=" + id;
						break;
					case 'FunTest':
						value = "PG=" +id;
						break;
					case 'Column':
						value = "xml=" + id;
						break;					
					default:
						value = id;
				}
				return 'GoLink("'+ from +'", "' + value + '")';
			},
			
			fnClearInterval() {
				window.clearInterval(this.fadeControl);
			},

			fnSetInterval() {
				let vm = this;
				vm.fadeControl = window.setInterval(() => {
					vm.sIndex ++;
					if( vm.sIndex >= vm.sMax ){ vm.sIndex = 0 };
				}, vm.fadeTimeDelay);
			},

			fnDotOver(i){
				if( i != this.sIndex ){ this.sIndex = i };
			},

			addAry(){
				const vm = this;
				// OFFICE
				// vm.office[0].en_category = '1';
				// vm.office[0].ch_category = '書信';
				// vm.office[1].en_category = '2';
				// vm.office[1].ch_category = '對話';
				// vm.office[2].en_category = '3';
				// vm.office[2].ch_category = '公告';
				// vm.office[3].en_category = '4';
				// vm.office[3].ch_category = '報告';
				// vm.office[4].en_category = '1';
				// vm.office[4].ch_category = '書信';
				for(i=0; i<=5; i++){
					vm.office[i].en_category = '2';
					vm.office[i].ch_category = '商務';
					vm.office.push( vm.office[i] );
				};

				// TALES
				// vm.tales.push(vm.tales[0]);

				// MIXIN 
				// vm.mixin[9] = vm.mixin[0];
				// vm.mixin[10] = vm.mixin[0];
			},

			fnGiveHeight(){
				const rate1 = 0.56;
				const rate2 = 0.67;
				const rate3 = 1.33;
				const rate4 = 1.49;
				const rate5 = 0.562;
				const rate6 = 0.645;
				const rate7 = 1.2;
				const rate8 = 0.566;

				// --------------------------------
				// FADE SHOW v
				// const hFade = $('#fade').width() * rate6;
				// $('#fade').css('height', hFade);

				// --------------------------------
				// MIXIN v
				const hFadeOuter = $('#fade').outerHeight(true);
				$('#block1 .grid22-box').css('height', 'calc(100% - ' + hFadeOuter +'px)');

				// MIXIN IMG v
				const hb1g2img = $('.grid22-img').width() * rate5;
				$('.grid22-img').css('height', hb1g2img);

				// --------------------------------
				// MAGAZINE v
				const hb1mgz = $('#block1 .grid3-mgz').width() * rate3;
				$('#block1 .grid3-mgz').css('height', hb1mgz);

				// --------------------------------
				// LIVING v
				const hb1g3v = $('#block1 .grid3-video').outerHeight(true);
				const hb1g3t1 = $('#block1 .grid-title.is-1').outerHeight(true);
				const hb1g3t2 = $('#block1 .grid-title.is-2').outerHeight(true);
				const hb1g3t3 = $('#block1 .grid-title.is-3').outerHeight(true);
				const hCol = $('.grid32-box').height();
				const hb1g3subtract = hb1g3v + hb1g3t1 + hb1g3t2 + hb1g3t3 + hCol + hb1mgz;
				$('#block1 .grid3-box').css('height', 'calc( 100% - ' + hb1g3subtract + 'px )');				

				// --------------------------------
				// WEEKLY TEST v
				const hb1g4wt = $('#block1 .grid4-wt').width() * rate7;
				$('#block1 .grid4-wt').css('height', hb1g4wt);

				// BOX1 GRID4-2 LIST v
				const hb1g42img = $('#block1 .grid42-img').width() * rate1;
				$('#block1 .grid42-img').css('height', hb1g42img);
				
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
				const mgb2g5row1 = 30;
				const hb2g5 = $('#block2 .grid5-title').outerHeight() + ( hb2g5img + $('#block2 .grid5-under').outerHeight(true) ) * 2 + mgb2g5row1;
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

					if( vueSideBar._data.getApi == 0 ){
						$.ajax({
							type: 'GET',
							url: './2020/api/reviewbar.asp?PG=' + vueSideBar._data.getApi,
							success(res){
								// cpn-side-item
								vueSideBar._data.review = JSON.parse(res);
								vueSideBar._data.getApi ++;
							}
						});
					};
				};
			}
		},
		data: {
			search_text: '',
			//
			memberLevel: <%=asp_lv%>,
			// FADE-SHOW v
			sIndex: 0,
			sMax: 4,
			fadeTimeDelay: 4000,
			fadeControl: '',

			// PROGRAM SINGLE v
			program: {
				above: {
					indx: 0,
					pic: '',
				},
				under: {
					indx: 0,
					pic: ''
				}
			},

			// MAGAZINE v
			magazine: {
				pic: '',
				SN: ''
			},
			WeeklyTest:{
				link:'',
				subject:''
			},
			// BLOCK 1 v
			trend: [],
			fade: [],
			mixin: [{},{},{},{},{},{},{},{},{},{}],
			living: [],
			columns: [{},{},{}],
			office: [],
			tales: [],

			// BLOCK 2 v
			blog: [],
			program1: [],
			program2: [],
			musicbox: [],

			// SIDE-BAR v
			uiGutter: 0,
			transX: 0,
			transX1199: -265,
			sideBarWidth: 0,
			gutter: 5,
		},
		components: {
			// 1 v
			cpn_tread,
			cpn_fade,
			cpn_fade_dot,
			cpn_mixin,
			cpn_living,
			cpn_columns,
			cpn_office,
			cpn_tales,
			// 2 v
			cpn_blog,
			cpn_program,
			cpn_musicbox,
			// side v
			cpn_side_item,

		},
		el: '#app',
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
	
	<%if  session("Login_guided")="4"  then%>
		if(parseInt($(window).height())>720){
			DIYLightBox('iframe','1280px','720px','../../../KOBO/detail.asp')    
		}else{
			DIYLightBox('iframe','980px','592px','../../../KOBO/detail.asp')    
		}   
	<%end if%>
	
</script>
