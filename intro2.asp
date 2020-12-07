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
			<a href='./intro.asp' id="prev-page">
				<svg fill="none">
					<path d="M19 2L2 23.5L19 45" stroke="white" stroke-width="4"></path>
				</svg>
			</a>
			<div id="next-page" style='display: none'>
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
						<div class="grid-title" onclick="GoLink('SearchArticle')">國際 ‧ 時事</div>
						<div class="grid1-box">
							<cpn-tread
								:prop='item'
								v-for='(item, i) in trend'
								:req-fn='fnGoLink("News", item.xml)'
								:req-pic='item.pic | filterSrc'
								:key='i'
							></cpn-tread>
						</div>
					</div>
					<div class="grid2">
						<div id="fade">
							<div class="fade-main">
								<cpn-fade
									:prop='item'
									v-for='(item, i) in fade' 
									:req-fn='fnGoLink("News", item.xml)' 
									:req-pic='item.pic | filterSrc | filterBG'
									:key='i'
									@connecter='fnClearInterval'
									@connecter2='fnSetInterval'
								></cpn-fade>
							</div>
							<div class="fade-dot">
								<cpn-Fade-dot
									:prop='item'
									v-for='(item, i) in fade'
									:req-index='i'
									@connecter='fnDotOver(i)'
									:key='i'
								></cpn-fade-dot>
							</div>
						</div>
						<div class="grid22-box">
							<cpn-mixin
								:prop='item'
								v-for='(item, i) in mixin' 
								:req-fn='fnGoLink("News", item.xml)' 
								:req-pic='item.pic | filterSrc | filterBG'
								:key='i'
							></cpn-mixin>
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
						<div class="grid-title is-1" onclick="GoLink('SearchArticle')">生活 ‧ 新知</div>
						<div class="grid3-box">
							<cpn-living
								:prop='item'
								v-for='(item, i) in living' 
								:req-fn='fnGoLink("News", item.xml)'
								:key='i'
								></cpn-living>
						</div>
						<div class="grid-title is-2">雜誌</div>
						<a class="grid3-mgz"
							href='#'
							:onclick='fnGoLink("MZ", magazine.SN)'
							:style='magazine.pic | filterBG '
						></a>
					</div>
					<div class="grid4">
						<div class="grid-title is-1" onclick="GoLink('SearchArticle')">商務 ‧ 情境</div>
						<div class="grid4-box">
							<cpn-office
								:prop='item'
								v-for='(item, i) in office' 
								:req-fn='fnGoLink("News", item.xml)'
								:req-category='item.en_category'
								:key='i'
							></cpn-office>
						</div>
						<a class="grid4-wt" href="#" style="background-image: url(./2020/images/wt.png)"></a>
						<a class="grid4-wt" href="#" style="background-image: url(./2020/images/wt.png)">
							<div class="grid4-week">2020/11/20~2020/11/27</div>
						</a>
						<div class="grid-title is-2" onclick="GoLink('SearchStory')">童話故事</div>
						<div class="grid42-box">
							<cpn-tales 
								:prop='item'
								v-for='(item, i) in tales' 
								:req-fn='fnGoLink("FairyTales", item.indx)'
								:req-pic='item.pic | filterBG'
								:key='i'
							></cpn-tales>
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
						<div class="grid-title" onclick="GoLink('SearchVideo')">賞電影 / 聊新知</div>
					</div>
					<div class="grid4">
						<div class="grid-title" onclick="GoLink('SearchVideo')">北捷微電影</div>
					</div>
					<div class="title-group"></div>
				</div>
				<div id="block2">
					<div class="grid1">
						<div class="grid1-box">
							<cpn-blog
								:prop='item'
								v-for='(item, i) in blog'
								:req-fn='fnGoLink("Blog", item.indx)'
								:req-pic='item.pic'
								:key='i'
							></cpn-blog>
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
						<cpn-program
							:prop='item'
							v-for='(item, i) in program1'
							:req-fn='fnGoLink("FunProgram", item.indx)'
							:req-pic='item.pic | filterBG'
							:key='i'
						></cpn-program>
					</div>
					<div class="grid4">
						<cpn-program
							:prop='item'
							v-for='(item, i) in program2'
							:req-fn='fnGoLink("FunProgram", item.indx)'
							:req-pic='item.pic | filterBG'
							:key='i'
						></cpn-program>
					</div>
					<div class="grid5">
						<div class="grid5-title" onclick="GoLink('SearchMusicbox')">唱歌學英文</div>
						<div class="grid5-box">
							<cpn-musicbox
								:prop='item'
								v-for='(item, i) in musicbox'
								:req-fn='fnGoLink("MusicBoxPlay", item.indx)'
								:req-pic='item.pic | filterBG'
								:key='i'
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
					<div id="sidebar-level">{{memberLvStep}}</div>
				</div>
				<div id="sidebar-scroller" @scroll='fnScroll'>
					<div id="sidebar-scroller-title">複習列表 REVIEW</div>
					<div id="sidebar-list">
						<cpn-side-item
							:prop='item'
							v-for='(item, i) in review' 
							:req-sort='item.sort | filterSort' 
							:req-fn='fnGoLinkSide(item.sort, item.id)'
							:key='i'
						></cpn-side-item>
						<!-- :req-fn='item.id' -->
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
							<a href="https://funday.asia/search/article/#Course?collect" target='_blank' @click.prev ><img src="./2020/images/under3.svg" />文章</a>
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
				console.log('from', from, '/ id ', id);
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
						value = 'PG=funtest.asp%3Findx%3D';
						type = 2;
						break;
					case '實力衝刺':
						transEn = 'Tutro';
						type = 2;
						break;
					case '會話':
						transEn = 'Practice';
						type = 2;
						break;
					case '研習營':
						transEn = 'Conference';
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
					return 'is type 2 '+transEn;
				}else{
					return '';
				}
				// switch( from ){
				// 	case 'News':
				// 		value = "xml=" + id;
				// 		break;
				// 	case 'MZ':
				// 		value = 'SN=' + id;
				// 		break;
				// 	case 'FunProgram':
				// 		value = 'indx='+id;
				// 		break;
				// 	case 'FairyTales':
				// 		value = "sid=" + id;
				// 		break;
				// 	case 'Blog':
				// 		value = "classify=life&blog=" + id;
				// 		break;
				// 	case 'MusicBoxPlay':
				// 		value = "whichStart=1&musicNo=" + id;
				// 		break;
				// 	case 'default':
				// 		value = id;
				// 	default:

				// }
				// return 'GoLink("'+ from +'", "' + value + '")';
			},

			fnScroll(){
				const vm = this;
				const regexp1 = new RegExp(" ", "g");
				const regexp2 = new RegExp(":", "g");
				const regexp3 = new RegExp("px", "g");
				const h = $('#sidebar-scroller').outerHeight();
				const s = $('#sidebar-scroller .ps__thumb-y').attr('style').replace(regexp1, '').replace(regexp2, '').replace(regexp3, '').replace('top', '').replace('height', '').split(';');
				console.log('scroll get h > ', h, ' / s >', s);
				const sum = Number(s[0]) + Number(s[1]);
				console.log('sum is ', sum, sum == h );
				if( sum == h ){
					
					console.log('i is ', vm.getApi);
					$.ajax({
						type: 'GET',
						url: './2020/api/reviewbar.asp?PG=' + vm.getApi,
						success(res){
							console.log('review page 1+ success >', JSON.parse(res));
							const ary = JSON.parse(res);
							ary.forEach(function(item){
								vm.review.push(item);
							})
							console.log('1+ after review >', vm.review);
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
			cpnSideItem,
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

					// --------------------------------
					// -- MUTIPLE v
					// --------------------------------
					vm.blog = res[idxBlo].data;
					vm.tales = res[idxSto].data;
					vm.musicbox = res[idxMus].data;
					
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

					// --------------------------------
					// -- FADE & MIXIN v
					// --------------------------------
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
						vm.mixin.push(vm.trend[0]);
						vm.trend.splice(0,1);
						//
						vm.mixin.push(vm.living[0]);
						vm.living.splice(0,1);
						//
						mixinIndex ++;
						if( mixinIndex >= mixinMax ){ 
							clearInterval(mid);
						};
					};

					let fadeIndex = 0;
					const fadeMax = 2; // FADE-SHOW = 2 + 2
					let fid = setInterval(fadePush, 0);
					let mixinIndex = 0;
					const mixinMax = 4;// MIXIN = 4 + 4
					let mid;

					// vm.mixin.sort(function(n, c){
					// 	console.log('next ', n.ndate, '/ current ', c.ndate, ' n > c ? ', n.ndate > c.ndate );
					// 	if( n.ndate > c.ndate ){ return -1 }else{ return 1 };
					// });

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
					vm.addAry();

					// PROGRAM ABOVE & UNDER v
					vm.program.above.indx = vm.program1[0].indx;
					vm.program.above.pic= vm.program1[0].pic;
					vm.program.under.indx = vm.program1[1].indx;
					vm.program.under.pic= vm.program1[1].pic;
					vm.program1.splice(0, 2);

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
					setTimeout(()=>{vm.fnGiveHeight()}, 800);

					// ==========================================
					// == FADE ANIMATION v
					// ==========================================
					vm.fnSetInterval();
				}
			});

			// ==========================================
			// == EVENT v
			// ==========================================
			$(window).resize(()=>{ vm.fnGiveHeight() });
		},
		methods: {
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
					default:
						value = id;
				}
				return 'GoLink("'+ from +'", "' + value + '")';
			},
			
			fnClearInterval() {
				let vm = this;
				window.clearInterval(vm.timeOutRefresh);
			},

			fnSetInterval() {
				let vm = this;
				this.timeOutRefresh = window.setInterval(() => {
					vm.sIndex ++;
					if( vm.sIndex >= vm.sMax ){ vm.sIndex = 0 };
					//
					vm.fnFadeAni(vm.sIndex, 1500);
				}, vm.fadeTimeDelay);
			},

			fnDotOver(i){
				const vm = this;
				if( i != vm.sIndex ){ vm.fnFadeAni(i, 300) };
				vm.sIndex = i;
			},

			fnFadeAni(i, duration){
				$('.fade-dot-item').removeClass('active').eq(i).addClass('active');
				$('.fade-main-item').fadeOut(duration).eq(i).fadeIn(duration);
			},

			addAry(){
				const vm = this;
				// // TREAD
				// for(i=0; i<=2; i++){
				// 	vm.trend.push( vm.trend[i] );
				// }
				// // PROGRAM
				// for(i=0; i<=4; i++){
				// 	vm.program1.push( vm.program1[0] );
				// }
				// // MIXIN
				// for(i=0; i<=2; i++){
				// 	vm.mixin.push( vm.trend[i] );
				// };
				// // LIVING
				// for(i=0; i<=2; i++){
				// 	vm.living.push( vm.trend[i] );
				// };
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
				for(i=0; i<=4; i++){
					vm.office[i].en_category = '2';
					vm.office[i].ch_category = '商務';
				}
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
				// BLOCK1 GRID2 v
				const hFade = $('#fade').width() * rate6;
				$('#fade').css('height', hFade);

				const hFadeOuter = $('#fade').outerHeight(true);
				$('#block1 .grid22-box').css('height', 'calc(100% - ' + hFadeOuter +'px)');

				// --------------------------------
				// BLOCK1 GRID22
				const hb1g2img = $('.grid22-img').width() * rate5;
				$('.grid22-img').css('height', hb1g2img);

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
				// BLOCK 1 WEEK TEST v
				const hb1g4wt = $('#block1 .grid4-wt').width() * 1;
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

					console.log('getApi is (add if )', vueSideBar._data.getApi );
					if( vueSideBar._data.getApi == 0 ){
						$.ajax({
							type: 'GET',
							url: './2020/api/reviewbar.asp?PG=' + vueSideBar._data.getApi,
							success(res){
								// cpn-side-item
								console.log('review success >', JSON.parse(res));
								vueSideBar._data.review = JSON.parse(res);
								console.log('vm.review', vm.review);
								vueSideBar._data.getApi ++;
							}
						});
					};
				};
			}
		},
		data: {
			memberLevel: <%=asp_lv%>,
			// FADE-SHOW v
			sIndex: 0,
			sMax: 4,
			fadeTimeDelay: 2000,

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
			
			// BLOCK 1 v
			trend: [],
			fade: [],
			mixin: [],
			living: [],
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
			cpnTread,
			cpnLiving,
			cpnOffice,
			cpnSideItem,
			cpnMixin,
			cpnFade,
			cpnFadeDot,
			cpnTales,
			// 2 v
			cpnBlog,
			cpnProgram,
			cpnMusicbox
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
