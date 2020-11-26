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
		<title>My Lesson page2</title>
		<link href="./2020/css/mylesson_2.css?<%=Timer%>" rel="stylesheet"/>
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
			#lightBoxDIY{display: none}
		</style>
		<!---->
		<script src="./2020/assets/plugins/jquery/jquery.1.12.4.min.js"></script>
		<script src="./2020/assets/plugins/vue/vue2.6.12.js"></script>
		<script src="./2020/assets/plugins/jquery-ui/1.11.2.js"></script>
		<script src="../jquery.cookie.js"></script>    
		<script src="../js/MessageVer2/alert.js" type="text/javascript"></script>        
		<!---->
		<!--script src="./2020/js/mylesson_2.js"></script-->
		<script src="./2020/assets/plugins/slick/slick.min.js"></script>
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
			<div id="app" class="wrapper">
				<div id="block0">
					<div id="block0-title">閱讀與聽力課程</div>
					<div id="circle-box">
						<div class="circle-item"><img src="2020/images/sidebar_open.svg"/></div>
						<div class="circle-item"></div>
						<div class="circle-item"></div>
					</div>
				</div>
				<div id="block1">
					<div class="grid1">
						<div class="grid-title" onclick='GoLink("FunProgram","indx=203")'>國際時事</div>
						<div class="grid1-box"><a class="grid1-item add-hr" href="#">
								<div class="grid-subtitle">桃園機場計程車更加專業桃園機場計程車更加專業</div>
								<div class="grid-content"><img class="grid1-img" src="https://funday.asia/en/pic/201117img-newsC19483-1-1ss.jpg"/>包括中國、日本和韓國在內的亞太國家簽署了世界最大的區域自由貿易協定，簽署國家的人口和經濟產出約佔全球三分之一。同時，這項協定由中國領頭，進一步鞏固了中國在亞太地區的影響力。</div>
								<div class="grid-bottom">(繼續閱讀)
									<div class="grid-view"> <img src="2020/images/view.svg"/><span>988</span></div>
								</div></a><a class="grid1-item add-hr" href="#">
								<div class="grid-subtitle">桃園機場計程車更加專業桃園機場計程車更加專業</div>
								<div class="grid-content"><img class="grid1-img" src="https://funday.asia/en/pic/201117img-newsC19483-1-1ss.jpg"/>包括中國、日本和韓國在內的亞太國家簽署了世界最大的區域自由貿易協定，簽署國家的人口和經濟產出約佔全球三分之一。同時，這項協定由中國領頭，進一步鞏固了中國在亞太地區的影響力。</div>
								<div class="grid-bottom">(繼續閱讀)
									<div class="grid-view"> <img src="2020/images/view.svg"/><span>988</span></div>
								</div></a><a class="grid1-item add-hr" href="#">
								<div class="grid-subtitle">桃園機場計程車更加專業桃園機場計程車更加專業</div>
								<div class="grid-content"><img class="grid1-img" src="https://funday.asia/en/pic/201117img-newsC19483-1-1ss.jpg"/>包括中國、日本和韓國在內的亞太國家簽署了世界最大的區域自由貿易協定，簽署國家的人口和經濟產出約佔全球三分之一。同時，這項協定由中國領頭，進一步鞏固了中國在亞太地區的影響力。</div>
								<div class="grid-bottom">(繼續閱讀)
									<div class="grid-view"> <img src="2020/images/view.svg"/><span>988</span></div>
								</div></a><a class="grid1-item add-hr" href="#">
								<div class="grid-subtitle">桃園機場計程車更加專業桃園機場計程車更加專業</div>
								<div class="grid-content"><img class="grid1-img" src="https://funday.asia/en/pic/201117img-newsC19483-1-1ss.jpg"/>包括中國、日本和韓國在內的亞太國家簽署了世界最大的區域自由貿易協定，簽署國家的人口和經濟產出約佔全球三分之一。同時，這項協定由中國領頭，進一步鞏固了中國在亞太地區的影響力。</div>
								<div class="grid-bottom">(繼續閱讀)
									<div class="grid-view"> <img src="2020/images/view.svg"/><span>988</span></div>
								</div></a><a class="grid1-item add-hr" href="#">
								<div class="grid-subtitle">桃園機場計程車更加專業桃園機場計程車更加專業</div>
								<div class="grid-content"><img class="grid1-img" src="https://funday.asia/en/pic/201117img-newsC19483-1-1ss.jpg"/>包括中國、日本和韓國在內的亞太國家簽署了世界最大的區域自由貿易協定，簽署國家的人口和經濟產出約佔全球三分之一。同時，這項協定由中國領頭，進一步鞏固了中國在亞太地區的影響力。</div>
								<div class="grid-bottom">(繼續閱讀)
									<div class="grid-view"> <img src="2020/images/view.svg"/><span>988</span></div>
								</div></a><a class="grid1-item add-hr" href="#">
								<div class="grid-subtitle">桃園機場計程車更加專業桃園機場計程車更加專業</div>
								<div class="grid-content"><img class="grid1-img" src="https://funday.asia/en/pic/201117img-newsC19483-1-1ss.jpg"/>包括中國、日本和韓國在內的亞太國家簽署了世界最大的區域自由貿易協定，簽署國家的人口和經濟產出約佔全球三分之一。同時，這項協定由中國領頭，進一步鞏固了中國在亞太地區的影響力。</div>
								<div class="grid-bottom">(繼續閱讀)
									<div class="grid-view"> <img src="2020/images/view.svg"/><span>988</span></div>
								</div></a><a class="grid1-item add-hr" href="#">
								<div class="grid-subtitle">桃園機場計程車更加專業桃園機場計程車更加專業</div>
								<div class="grid-content"><img class="grid1-img" src="https://funday.asia/en/pic/201117img-newsC19483-1-1ss.jpg"/>包括中國、日本和韓國在內的亞太國家簽署了世界最大的區域自由貿易協定，簽署國家的人口和經濟產出約佔全球三分之一。同時，這項協定由中國領頭，進一步鞏固了中國在亞太地區的影響力。</div>
								<div class="grid-bottom">(繼續閱讀)
									<div class="grid-view"> <img src="2020/images/view.svg"/><span>988</span></div>
								</div></a><a class="grid1-item add-hr" href="#">
								<div class="grid-subtitle">桃園機場計程車更加專業桃園機場計程車更加專業</div>
								<div class="grid-content"><img class="grid1-img" src="https://funday.asia/en/pic/201117img-newsC19483-1-1ss.jpg"/>包括中國、日本和韓國在內的亞太國家簽署了世界最大的區域自由貿易協定，簽署國家的人口和經濟產出約佔全球三分之一。同時，這項協定由中國領頭，進一步鞏固了中國在亞太地區的影響力。</div>
								<div class="grid-bottom">(繼續閱讀)
									<div class="grid-view"> <img src="2020/images/view.svg"/><span>988</span></div>
								</div></a></div>
					</div>
					<div class="grid2">
						<div id="sliderbox">
							<div id="slider">
								<div><a href="#" style="background-image: url(https://funday.asia/en/pic/201117img-newsC19483-1-1ss.jpg)">
										<div class="grid-subtitle">《天能》上映六天破億1 上映六天破億1 上映六天破億1 上映六天破億1 上映六天破億1</div>
										<div class="grid2-en">“Tenet” Rakes in Billions of Dollars After “Tenet” Rakes in Billions of Dollars After</div></a></div>
								<div><a href="#" style="background-image: url(https://funday.asia/en/pic/201117img-newsC19483-1-1ss.jpg)">
										<div class="grid-subtitle">《天能》上映六天破億2</div>
										<div class="grid2-en">“Tenet” Rakes in Billions of Dollars After...</div></a></div>
								<div><a href="#" style="background-image: url(https://funday.asia/en/pic/201117img-newsC19483-1-1ss.jpg)">
										<div class="grid-subtitle">《天能》上映六天破億3</div>
										<div class="grid2-en">“Tenet” Rakes in Billions of Dollars After...</div></a></div>
								<div><a href="#" style="background-image: url(https://funday.asia/en/pic/201117img-newsC19483-1-1ss.jpg)">
										<div class="grid-subtitle">《天能》上映六天破億4</div>
										<div class="grid2-en">“Tenet” Rakes in Billions of Dollars After...</div></a></div>
							</div>
						</div>
						<div class="grid22-box"><a class="grid22-item add-hr" href="#">
								<div class="grid22-img" style="background-image: url(https://funday.asia/en/pic/201117img-newsC19483-1-1ss.jpg)"></div>
								<div class="grid22-right">
									<div class="grid22-above">
										<div class="grid22-ch">桃園機場計程車更加專業桃園機場計程車更加專業桃園機場計程車更加專業</div>
										<div class="grid22-en">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis vero nobis optio, quibusdam doloribus repellendus architecto tenetur assumenda explicabo neque laudantium, perspiciatis reprehenderit. Voluptatibus eius recusandae cupiditate optio mollitia praesentium!</div>
										<div class="grid-content">
											包括中國、日本和韓國在內的亞太國家簽署了世界最大的區域自由貿易協定，簽署國家的人口和經濟產出約佔全球三分之一。同時，這項協定由中國領頭，進一步鞏固了中國在亞太地區的影響力。</div>
									</div>
									<div class="grid-bottom">(繼續閱讀)
										<div class="grid-view"> <img src="2020/images/view.svg"/><span>988</span></div>
									</div>
								</div></a><a class="grid22-item add-hr" href="#">
								<div class="grid22-img" style="background-image: url(https://funday.asia/en/pic/201117img-newsC19483-1-1ss.jpg)"></div>
								<div class="grid22-right">
									<div class="grid22-above">
										<div class="grid22-ch">桃園機場計程車更加專業桃園機場計程車更加專業桃園機場計程車更加專業</div>
										<div class="grid22-en">Adipisicing elit. Quis praium!</div>
										<div class="grid-content">
											包括中國、日本和韓國在內的亞太國家簽署了世界最大的區域自由貿易協定，簽署國家的人口和經濟產出約佔全球三分之一。同時，這項協定由中國領頭，進一步鞏固了中國在亞太地區的影響力。</div>
									</div>
									<div class="grid-bottom">(繼續閱讀)
										<div class="grid-view"> <img src="2020/images/view.svg"/><span>988</span></div>
									</div>
								</div></a><a class="grid22-item add-hr" href="#">
								<div class="grid22-img" style="background-image: url(https://funday.asia/en/pic/201117img-newsC19483-1-1ss.jpg)"></div>
								<div class="grid22-right">
									<div class="grid22-above">
										<div class="grid22-ch">桃園機場計程車更加專業桃園機場計程車更加專業桃園機場計程車更加專業</div>
										<div class="grid22-en">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis vero nobis optio, quibusdam doloribus repellendus architecto tenetur assumenda explicabo neque laudantium, perspiciatis reprehenderit. Voluptatibus eius recusandae cupiditate optio mollitia praesentium!</div>
										<div class="grid-content">
											包括中國、日本和韓國在內的亞太國家簽署了世界最大的區域自由貿易協定，簽署國家的人口和經濟產出約佔全球三分之一。同時，這項協定由中國領頭，進一步鞏固了中國在亞太地區的影響力。</div>
									</div>
									<div class="grid-bottom">(繼續閱讀)
										<div class="grid-view"> <img src="2020/images/view.svg"/><span>988</span></div>
									</div>
								</div></a><a class="grid22-item add-hr" href="#">
								<div class="grid22-img" style="background-image: url(https://funday.asia/en/pic/201117img-newsC19483-1-1ss.jpg)"></div>
								<div class="grid22-right">
									<div class="grid22-above">
										<div class="grid22-ch">桃園機場計程車更加專業桃園機場計程車更加專業桃園機場計程車更加專業</div>
										<div class="grid22-en">Adipisicing elit. Quis praium!</div>
										<div class="grid-content">
											包括中國、日本和韓國在內的亞太國家簽署了世界最大的區域自由貿易協定，簽署國家的人口和經濟產出約佔全球三分之一。同時，這項協定由中國領頭，進一步鞏固了中國在亞太地區的影響力。</div>
									</div>
									<div class="grid-bottom">(繼續閱讀)
										<div class="grid-view"> <img src="2020/images/view.svg"/><span>988</span></div>
									</div>
								</div></a><a class="grid22-item add-hr" href="#">
								<div class="grid22-img" style="background-image: url(https://funday.asia/en/pic/201117img-newsC19483-1-1ss.jpg)"></div>
								<div class="grid22-right">
									<div class="grid22-above">
										<div class="grid22-ch">桃園機場計程車更加專業桃園機場計程車更加專業桃園機場計程車更加專業</div>
										<div class="grid22-en">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis vero nobis optio, quibusdam doloribus repellendus architecto tenetur assumenda explicabo neque laudantium, perspiciatis reprehenderit. Voluptatibus eius recusandae cupiditate optio mollitia praesentium!</div>
										<div class="grid-content">
											包括中國、日本和韓國在內的亞太國家簽署了世界最大的區域自由貿易協定，簽署國家的人口和經濟產出約佔全球三分之一。同時，這項協定由中國領頭，進一步鞏固了中國在亞太地區的影響力。</div>
									</div>
									<div class="grid-bottom">(繼續閱讀)
										<div class="grid-view"> <img src="2020/images/view.svg"/><span>988</span></div>
									</div>
								</div></a><a class="grid22-item add-hr" href="#">
								<div class="grid22-img" style="background-image: url(https://funday.asia/en/pic/201117img-newsC19483-1-1ss.jpg)"></div>
								<div class="grid22-right">
									<div class="grid22-above">
										<div class="grid22-ch">桃園機場計程車更加專業桃園機場計程車更加專業桃園機場計程車更加專業</div>
										<div class="grid22-en">Adipisicing elit. Quis praium!</div>
										<div class="grid-content">
											包括中國、日本和韓國在內的亞太國家簽署了世界最大的區域自由貿易協定，簽署國家的人口和經濟產出約佔全球三分之一。同時，這項協定由中國領頭，進一步鞏固了中國在亞太地區的影響力。</div>
									</div>
									<div class="grid-bottom">(繼續閱讀)
										<div class="grid-view"> <img src="2020/images/view.svg"/><span>988</span></div>
									</div>
								</div></a><a class="grid22-item add-hr" href="#">
								<div class="grid22-img" style="background-image: url(https://funday.asia/en/pic/201117img-newsC19483-1-1ss.jpg)"></div>
								<div class="grid22-right">
									<div class="grid22-above">
										<div class="grid22-ch">桃園機場計程車更加專業桃園機場計程車更加專業桃園機場計程車更加專業</div>
										<div class="grid22-en">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis vero nobis optio, quibusdam doloribus repellendus architecto tenetur assumenda explicabo neque laudantium, perspiciatis reprehenderit. Voluptatibus eius recusandae cupiditate optio mollitia praesentium!</div>
										<div class="grid-content">
											包括中國、日本和韓國在內的亞太國家簽署了世界最大的區域自由貿易協定，簽署國家的人口和經濟產出約佔全球三分之一。同時，這項協定由中國領頭，進一步鞏固了中國在亞太地區的影響力。</div>
									</div>
									<div class="grid-bottom">(繼續閱讀)
										<div class="grid-view"> <img src="2020/images/view.svg"/><span>988</span></div>
									</div>
								</div></a><a class="grid22-item add-hr" href="#">
								<div class="grid22-img" style="background-image: url(https://funday.asia/en/pic/201117img-newsC19483-1-1ss.jpg)"></div>
								<div class="grid22-right">
									<div class="grid22-above">
										<div class="grid22-ch">桃園機場計程車更加專業桃園機場計程車更加專業桃園機場計程車更加專業</div>
										<div class="grid22-en">Adipisicing elit. Quis praium!</div>
										<div class="grid-content">
											包括中國、日本和韓國在內的亞太國家簽署了世界最大的區域自由貿易協定，簽署國家的人口和經濟產出約佔全球三分之一。同時，這項協定由中國領頭，進一步鞏固了中國在亞太地區的影響力。</div>
									</div>
									<div class="grid-bottom">(繼續閱讀)
										<div class="grid-view"> <img src="2020/images/view.svg"/><span>988</span></div>
									</div>
								</div></a></div>
					</div>
					<div class="grid3">
						<div class="grid3-video">
							<iframe src="https://www.youtube.com/embed/Nw7wwHm4GxU?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
						</div>
						<div class="grid-title is-1">生活新知</div>
						<div class="grid3-box"><a class="grid3-item add-hr" href="#">
								<div class="grid-subtitle">桃園機場計程車更加專業</div>
								<div class="grid-content">
									包括中國、日本和韓國在內的亞太國家簽署了世界最大的區域自由貿易協定，簽署國家的人口和經濟產出約佔全球三分之一。同時，這項協定由中國領頭，進一步鞏固了中國在亞太地區的影響力。</div>
								<div class="grid-bottom">(繼續閱讀)
									<div class="grid-view"> <img src="2020/images/view.svg"/><span>988</span></div>
								</div></a><a class="grid3-item add-hr" href="#">
								<div class="grid-subtitle">桃園機場計程車更加專業</div>
								<div class="grid-content">
									包括中國、日本和韓國在內的亞太國家簽署了世界最大的區域自由貿易協定，簽署國家的人口和經濟產出約佔全球三分之一。同時，這項協定由中國領頭，進一步鞏固了中國在亞太地區的影響力。</div>
								<div class="grid-bottom">(繼續閱讀)
									<div class="grid-view"> <img src="2020/images/view.svg"/><span>988</span></div>
								</div></a><a class="grid3-item add-hr" href="#">
								<div class="grid-subtitle">桃園機場計程車更加專業</div>
								<div class="grid-content">
									包括中國、日本和韓國在內的亞太國家簽署了世界最大的區域自由貿易協定，簽署國家的人口和經濟產出約佔全球三分之一。同時，這項協定由中國領頭，進一步鞏固了中國在亞太地區的影響力。</div>
								<div class="grid-bottom">(繼續閱讀)
									<div class="grid-view"> <img src="2020/images/view.svg"/><span>988</span></div>
								</div></a><a class="grid3-item add-hr" href="#">
								<div class="grid-subtitle">桃園機場計程車更加專業</div>
								<div class="grid-content">
									包括中國、日本和韓國在內的亞太國家簽署了世界最大的區域自由貿易協定，簽署國家的人口和經濟產出約佔全球三分之一。同時，這項協定由中國領頭，進一步鞏固了中國在亞太地區的影響力。</div>
								<div class="grid-bottom">(繼續閱讀)
									<div class="grid-view"> <img src="2020/images/view.svg"/><span>988</span></div>
								</div></a><a class="grid3-item add-hr" href="#">
								<div class="grid-subtitle">桃園機場計程車更加專業</div>
								<div class="grid-content">
									包括中國、日本和韓國在內的亞太國家簽署了世界最大的區域自由貿易協定，簽署國家的人口和經濟產出約佔全球三分之一。同時，這項協定由中國領頭，進一步鞏固了中國在亞太地區的影響力。</div>
								<div class="grid-bottom">(繼續閱讀)
									<div class="grid-view"> <img src="2020/images/view.svg"/><span>988</span></div>
								</div></a><a class="grid3-item add-hr" href="#">
								<div class="grid-subtitle">桃園機場計程車更加專業</div>
								<div class="grid-content">
									包括中國、日本和韓國在內的亞太國家簽署了世界最大的區域自由貿易協定，簽署國家的人口和經濟產出約佔全球三分之一。同時，這項協定由中國領頭，進一步鞏固了中國在亞太地區的影響力。</div>
								<div class="grid-bottom">(繼續閱讀)
									<div class="grid-view"> <img src="2020/images/view.svg"/><span>988</span></div>
								</div></a><a class="grid3-item add-hr" href="#">
								<div class="grid-subtitle">桃園機場計程車更加專業</div>
								<div class="grid-content">
									包括中國、日本和韓國在內的亞太國家簽署了世界最大的區域自由貿易協定，簽署國家的人口和經濟產出約佔全球三分之一。同時，這項協定由中國領頭，進一步鞏固了中國在亞太地區的影響力。</div>
								<div class="grid-bottom">(繼續閱讀)
									<div class="grid-view"> <img src="2020/images/view.svg"/><span>988</span></div>
								</div></a></div>
						<div class="grid-title is-2">雜誌</div>
						<div class="grid3-mgz" style="background-image: url(https://funday.asia/funMz/2020080019/P1.jpg)"></div>
					</div>
					<div class="grid4">
						<div class="grid-title is-1">商務情境</div>
						<div class="grid4-box"><a class="grid4-item add-hr" href="#">
								<div class="grid4-sort is-s1">商用</div>
								<div class="grid4-right">
									<div class="grid-subtitle">桃園機場計程車更加專業桃園機場計程車更加專業</div>
									<div class="grid4-en">AI News Anchor Makes Debut in South Korea</div>
								</div></a><a class="grid4-item add-hr" href="#">
								<div class="grid4-sort is-s2">上班族</div>
								<div class="grid4-right">
									<div class="grid-subtitle">桃園機場計程車更加專業</div>
									<div class="grid4-en">AI News Anchor Makes Debut in South Korea</div>
								</div></a><a class="grid4-item add-hr" href="#">
								<div class="grid4-sort is-s1">商用</div>
								<div class="grid4-right">
									<div class="grid-subtitle">桃園機場計程車更加專業桃園機場計程車更加專業</div>
									<div class="grid4-en">AI News Anchor Makes Debut in South Korea</div>
								</div></a><a class="grid4-item add-hr" href="#">
								<div class="grid4-sort is-s2">上班族</div>
								<div class="grid4-right">
									<div class="grid-subtitle">桃園機場計程車更加專業</div>
									<div class="grid4-en">AI News Anchor Makes Debut in South Korea</div>
								</div></a><a class="grid4-item add-hr" href="#">
								<div class="grid4-sort is-s1">商用</div>
								<div class="grid4-right">
									<div class="grid-subtitle">桃園機場計程車更加專業桃園機場計程車更加專業</div>
									<div class="grid4-en">AI News Anchor Makes Debut in South Korea</div>
								</div></a><a class="grid4-item add-hr" href="#">
								<div class="grid4-sort is-s2">上班族</div>
								<div class="grid4-right">
									<div class="grid-subtitle">桃園機場計程車更加專業</div>
									<div class="grid4-en">AI News Anchor Makes Debut in South Korea</div>
								</div></a><a class="grid4-item add-hr" href="#">
								<div class="grid4-sort is-s1">商用</div>
								<div class="grid4-right">
									<div class="grid-subtitle">桃園機場計程車更加專業桃園機場計程車更加專業</div>
									<div class="grid4-en">AI News Anchor Makes Debut in South Korea</div>
								</div></a><a class="grid4-item add-hr" href="#">
								<div class="grid4-sort is-s2">上班族</div>
								<div class="grid4-right">
									<div class="grid-subtitle">桃園機場計程車更加專業</div>
									<div class="grid4-en">AI News Anchor Makes Debut in South Korea</div>
								</div></a><a class="grid4-item add-hr" href="#">
								<div class="grid4-sort is-s1">商用</div>
								<div class="grid4-right">
									<div class="grid-subtitle">桃園機場計程車更加專業桃園機場計程車更加專業</div>
									<div class="grid4-en">AI News Anchor Makes Debut in South Korea</div>
								</div></a><a class="grid4-item add-hr" href="#">
								<div class="grid4-sort is-s2">上班族</div>
								<div class="grid4-right">
									<div class="grid-subtitle">桃園機場計程車更加專業</div>
									<div class="grid4-en">AI News Anchor Makes Debut in South Korea</div>
								</div></a></div><a class="grid4-wt" href="#" style="background-image: url(./2020/images/wt.png)">
							<div class="grid4-week">2020/11/20~2020/11/27</div></a>
						<div class="grid-title is-2">童話故事</div>
						<div class="grid42-box"><a class="grid42-item add-hr" href="#">
								<div class="grid42-img" style="background-image: url(https://dsn.funday.asia/photo/Story/20200106113259_img.jpg)"></div>
								<div class="grid-subtitle">桃園機場計程車更加專業桃園機場計程車更加專業桃園機場計程車更加專業</div></a><a class="grid42-item add-hr" href="#">
								<div class="grid42-img" style="background-image: url(https://dsn.funday.asia/photo/Story/20200106113259_img.jpg)"></div>
								<div class="grid-subtitle">桃園機場計程車更加專業桃園機場計程車更加專業桃園機場計程車更加專業</div></a><a class="grid42-item add-hr" href="#">
								<div class="grid42-img" style="background-image: url(https://dsn.funday.asia/photo/Story/20200106113259_img.jpg)"></div>
								<div class="grid-subtitle">桃園機場計程車更加專業桃園機場計程車更加專業桃園機場計程車更加專業</div></a></div>
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
						<div class="grid1-box"><a class="grid1-item add-hr" href="#"><img src="https://funday.asia/BlogS/files/img-e-504.jpg"/>
								<div class="grid-subtitle">名句背後的故事 _ 史恩·康納萊</div></a><a class="grid1-item add-hr" href="#"><img src="https://funday.asia/BlogS/files/img-e-504.jpg"/>
								<div class="grid-subtitle">名句背後的故事 _ 史恩·康納萊</div></a><a class="grid1-item add-hr" href="#"><img src="https://funday.asia/BlogS/files/img-e-504.jpg"/>
								<div class="grid-subtitle">名句背後的故事 _ 史恩·康納萊</div></a></div>
					</div>
					<div class="grid2">
						<div class="grid2-video">
							<iframe src="https://www.youtube.com/embed/Nw7wwHm4GxU?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
						</div>
					</div>
					<div class="grid3"><a class="grid3-item" href="#">
							<div class="grid3-img" style="background-image: url(https://img.youtube.com/vi/Nw7wwHm4GxU/1.jpg)"></div>
							<div class="grid3-box">
								<div class="grid3-sort">Cinephile</div>
								<div class="grid3-ch">美好的一年美好的一年美好的一年</div>
								<div class="grid3-en">A Good Year</div>
							</div></a>
						<div class="grid3-hr"></div><a class="grid3-item" href="#">
							<div class="grid3-img" style="background-image: url(https://img.youtube.com/vi/Nw7wwHm4GxU/1.jpg)"></div>
							<div class="grid3-box">
								<div class="grid3-sort">Cinephile</div>
								<div class="grid3-ch">美好的一年美好的一年美好的一年</div>
								<div class="grid3-en">A Good Year</div>
							</div></a>
						<div class="grid3-hr"></div><a class="grid3-item" href="#">
							<div class="grid3-img" style="background-image: url(https://img.youtube.com/vi/Nw7wwHm4GxU/1.jpg)"></div>
							<div class="grid3-box">
								<div class="grid3-sort">Cinephile</div>
								<div class="grid3-ch">美好的一年美好的一年美好的一年</div>
								<div class="grid3-en">A Good Year</div>
							</div></a>
						<div class="grid3-hr"></div><a class="grid3-item" href="#">
							<div class="grid3-img" style="background-image: url(https://img.youtube.com/vi/Nw7wwHm4GxU/1.jpg)"></div>
							<div class="grid3-box">
								<div class="grid3-sort">Cinephile</div>
								<div class="grid3-ch">美好的一年美好的一年美好的一年</div>
								<div class="grid3-en">A Good Year</div>
							</div></a>
						<div class="grid3-hr"></div>
					</div>
					<div class="grid4"><a class="grid3-item" href="#">
							<div class="grid3-img" style="background-image: url(https://img.youtube.com/vi/Nw7wwHm4GxU/1.jpg)"></div>
							<div class="grid3-box">
								<div class="grid3-sort">Cinephile</div>
								<div class="grid3-ch">美好的一年美好的一年美好的一年</div>
								<div class="grid3-en">A Good Year</div>
							</div></a>
						<div class="grid3-hr"></div><a class="grid3-item" href="#">
							<div class="grid3-img" style="background-image: url(https://img.youtube.com/vi/Nw7wwHm4GxU/1.jpg)"></div>
							<div class="grid3-box">
								<div class="grid3-sort">Cinephile</div>
								<div class="grid3-ch">美好的一年美好的一年美好的一年</div>
								<div class="grid3-en">A Good Year</div>
							</div></a>
						<div class="grid3-hr"></div><a class="grid3-item" href="#">
							<div class="grid3-img" style="background-image: url(https://img.youtube.com/vi/Nw7wwHm4GxU/1.jpg)"></div>
							<div class="grid3-box">
								<div class="grid3-sort">Cinephile</div>
								<div class="grid3-ch">美好的一年美好的一年美好的一年</div>
								<div class="grid3-en">A Good Year</div>
							</div></a>
						<div class="grid3-hr"></div><a class="grid3-item" href="#">
							<div class="grid3-img" style="background-image: url(https://img.youtube.com/vi/Nw7wwHm4GxU/1.jpg)"></div>
							<div class="grid3-box">
								<div class="grid3-sort">Cinephile</div>
								<div class="grid3-ch">美好的一年美好的一年美好的一年</div>
								<div class="grid3-en">A Good Year</div>
							</div></a>
						<div class="grid3-hr"></div>
					</div>
					<div class="grid5">
						<div class="grid5-title">唱歌學英文</div>
						<div class="grid5-box">
							<div class="grid5-item">
								<div class="grid5-img" style="background-image: url(https://img.youtube.com/vi/bo_efYhYU2A/hqdefault.jpg)"></div>
								<div class="grid5-under">
									<div class="grid5-actor">Margaret Berger Margaret Berger</div>
									<div class="grid5-subtitle">I Feed You My Love I Feed You My Love</div>
									<div class="grid5-btn"></div>
								</div>
							</div>
							<div class="grid5-item">
								<div class="grid5-img" style="background-image: url(https://img.youtube.com/vi/bo_efYhYU2A/hqdefault.jpg)"></div>
								<div class="grid5-under">
									<div class="grid5-actor">Margaret Berger Margaret Berger</div>
									<div class="grid5-subtitle">I Feed You My Love I Feed You My Love</div>
									<div class="grid5-btn"></div>
								</div>
							</div>
							<div class="grid5-item">
								<div class="grid5-img" style="background-image: url(https://img.youtube.com/vi/bo_efYhYU2A/hqdefault.jpg)"></div>
								<div class="grid5-under">
									<div class="grid5-actor">Margaret Berger Margaret Berger</div>
									<div class="grid5-subtitle">I Feed You My Love I Feed You My Love</div>
									<div class="grid5-btn"></div>
								</div>
							</div>
							<div class="grid5-item">
								<div class="grid5-img" style="background-image: url(https://img.youtube.com/vi/bo_efYhYU2A/hqdefault.jpg)"></div>
								<div class="grid5-under">
									<div class="grid5-actor">Margaret Berger Margaret Berger</div>
									<div class="grid5-subtitle">I Feed You My Love I Feed You My Love</div>
									<div class="grid5-btn"></div>
								</div>
							</div>
							<div class="grid5-item">
								<div class="grid5-img" style="background-image: url(https://img.youtube.com/vi/bo_efYhYU2A/hqdefault.jpg)"></div>
								<div class="grid5-under">
									<div class="grid5-actor">Margaret Berger Margaret Berger</div>
									<div class="grid5-subtitle">I Feed You My Love I Feed You My Love</div>
									<div class="grid5-btn"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="foo">
			<div class="f1">需要其他協助嗎?  請聯絡我們
				<div class="msg-board" onclick="GoLink('MessageBoard')" title="留言版"></div>
			</div>
			<div class="f2"><span class="f2-1">服務時間：週一～週六 10:00~12:30、13:30~17:30、18:30~22:00  |  02-2523-9777 / 0800-023-777 (限市話)</span><span class="f2-2">© 2020 Brainstorm Digital Communications Corp. All rights reserved. Privacy Policy</span></div>
		</div>
	</body>
</html>
<script>
	$("#slider").slick({
		dots: true, // 動畫控制點點 : 有
		infinite: true, // 無止境動畫
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true, // 自動幻影格 : 是
		autoplaySpeed: 1000, // 影格的停留展示時間 : 毫秒
		speed: 800, // 切幻影格的速率 : 毫秒
		pauseOnFocus: true, // 聚焦就停止動畫 : 否
		pauseOnHover: true,// 滑鼠over 就停止動畫 : 否
		variableWidth: true,// 是否接受 .slick-slide 非 100% 寬
		prevArrow: true,
		nextArrow: false,
		// 客製化 nex & pre 鈕：https://codepen.io/blanks-site/embed/dZNEwW?height=350&theme-id=dark&slug-hash=dZNEwW&default-tab=js%2Cresult&user=blanks-site&embed-version=2&pen-title=slick-arrows&preview=true 
		responsive: [
			// {
			// 	breakpoint: 1024,
			// 	settings: {
			// 		slidesToShow: 3,
			// 		slidesToScroll: 3,
			// 		infinite: true,
			// 		dots: true
			// 	}
			// },
			// 	{
			// 	breakpoint: 600,
			// 	settings: {
			// 		slidesToShow: 2,
			// 		slidesToScroll: 2
			// 	}
			// },
			// {
			// 	breakpoint: 480,
			// 	settings: {
			// 		slidesToShow: 1,
			// 		slidesToScroll: 1
			// 	}
			// }
			// vvv 值得一試 值得一試 值得一試 vvv
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick" // 
			// instead of a settings object
			// ^^^ 值得一試 值得一試 值得一試 ^^^
		]
	});

	// const mylesson2 = new Vue({
	// 	el: '#app',
	// 	data:{
	// 		ary: []
	// 	},
	// 	created(){
	// 		const vm = this;

	// 		vm.fnGiveHeight();
	// 		$(window).resize(()=>{ vm.fnGiveHeight() });

	// 		$.ajax({
	// 			type: 'GET',
	// 			url: 'https://funday.asia/self-study/json/news_array.json',
	// 			success: function(res){
	// 				vm.ary = res;
	// 				console.log('ary ajax >>', vm.ary);
	// 			}
	// 		});

			

	// 		const width = $('#sliderbox').width();
	// 		$('.slick-slide').css({width});
	// 	},
	// 	methods: {
	// 		// fnGiveHeight = function(){
	// 		fnGiveHeight(){
	// 			const rate1 = 0.56;
	// 			const rate2 = 0.67;
	// 			const rate3 = 1.33;
	// 			const rate4 = 1.49;
	// 			const rate5 = 0.562;

	// 			// --------------------------------
	// 			// SLIDER v
	// 			const hSlider = $('#sliderbox').width() * 0.675;
	// 			$('#sliderbox').css('height', hSlider);

	// 			const hSliderOuter = $('#sliderbox').outerHeight(true);
	// 			console.log(hSliderOuter);
	// 			$('#block1 .grid22-box').css('height', 'calc(100% - ' + hSliderOuter +'px)')

	// 			// BOX1 GRID2	
	// 			const hb1g2 = $('#block1 .grid22-img').width() * rate1;
	// 			$('#block1 .grid22-img').css('height', hb1g2);

	// 			// --------------------------------
	// 			// BOX1 GRID3 MAGAZINE v
	// 			const hb1mgz = $('#block1 .grid3-mgz').width() * rate3;
	// 			$('#block1 .grid3-mgz').css('height', hb1mgz);

	// 			// BOX1 GRID3 LIST v
	// 			const hb1g3v = $('#block1 .grid3-video').outerHeight(true);
	// 			const hb1g3t1 = $('#block1 .grid-title.is-1').outerHeight(true);
	// 			const hb1g3t2 = $('#block1 .grid-title.is-2').outerHeight(true);
	// 			const hb1g3subtract = hb1g3v + hb1g3t1 + hb1g3t2 + hb1mgz;
	// 			$('#block1 .grid3-box').css('height', 'calc( 100% - ' + hb1g3subtract + 'px )');

	// 			// --------------------------------
	// 			// BOX1 GRID4-2 LIST v
	// 			const hb1g42img = $('#block1 .grid42-img').width() * rate1;
	// 			$('#block1 .grid42-img').css('height', hb1g42img);

	// 			// BLOCK 1 WEEK TEST v
	// 			const hb1g4wt = $('#block1 .grid4-wt').width() * rate4;
	// 			$('#block1 .grid4-wt').css('height', hb1g4wt);

	// 			// BOX1 GRID4-1 LIST v
	// 			const hb1g4t1 = $('#block1 .grid4 .grid-title.is-1').outerHeight(true);
	// 			const hb1g4t2 = $('#block1 .grid4 .grid-title.is-2').outerHeight(true);
	// 			const hb1g42 = $('#block1 .grid42-box').outerHeight(true)
	// 			const hb1g4subtract = hb1g4wt + hb1g4t1 + hb1g4t2 + hb1g42;
	// 			console.log(hb1g4t1, hb1g4wt, hb1g4t2,hb1g42, hb1g4subtract);
	// 			$('#block1 .grid4-box').css('height', 'calc( 100% - ' + hb1g4subtract + 'px)');

	// 			// ================================
	// 			// ================================
	// 			// BLOCK2 GRID3 v
	// 			const hb2g3 = $('#block2 .grid3-img').width() * rate1;
	// 			$('#block2 .grid3-img').css('height', hb2g3);

	// 			// BLOCK2 GRID2&3 v
	// 			const hb2g2v = $('#block2 .grid2-video').width() * rate5;
	// 			$('#block2 .grid2, #block2 .grid3, #block2 .grid4').css('height', hb2g2v);

	// 			// BLOCK2 GRID5 MUSIC v
	// 			const hb2g5img = $('#block2 .grid5-img').width() * rate1;
	// 			$('#block2 .grid5-img').css('height', hb2g5img);

	// 			// BLOCK2
	// 			const hb2gutter = 13;
	// 			const hb2g5 = $('#block2 .grid5-title').outerHeight() + hb2g5img + $('#block2 .grid5-under').outerHeight(true);
	// 			const h2 = hb2g2v + hb2g5 + hb2gutter;

	// 			console.log(hb2g2v, hb2g5, h2);
	// 			$('#block2 .grid1').css('height', h2)
	// 		},
	// 	}
	// });

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
