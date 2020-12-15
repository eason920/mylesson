<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>  
<!-- #include virtual="include/DBConnection.asp"--> 
<%
 response.Buffer = true   
 session.CodePage = 65001   
 response.Charset = "utf-8"

 
target=SafeSqlStr(request("target"),15)

' authority(5) 桌機版權限(不用再判斷到期日)   1 為 有 ,0 為 無

if session("indx")<>"" then
  VIP=authority(5)
  VIP2=authority(5)
  VIP3=0
  enddate=Get_enddate()  '--使用者到期日
  if enddate<>"False" then
   enddatechk=datediff("d",now(),enddate)
  end if
else
  VIP=0
  VIP2=0
  VIP3=0
  enddatechk=0
end if

select case target
   case "MusicBox"
      Redirect_str="window.open('../../newpage2/dashboard/?type=m1','_blank')"
      VIP=1
      VIP2=1	 
   case "Records"
      Redirect_str="window.open('../../newpage2/dashboard/?type=r1')"
   case "Sentences"
      Redirect_str="window.open('../../Personal_Sentences/list.asp')"
   case "WordCard"
      Redirect_str="window.open('../../newpage2/wordcard/')"	 
   case "Booking"
      Redirect_str="window.open('../../newpage2/dashboard/?type=r4')"
   case "Library"
      Redirect_str="location.href='../../self-study'"   
      VIP=1
      VIP2=1	 
   case "Tutor"
      Redirect_str="location.href='../../teaching/?cls=Formal'"
   case "Practice"	 
      Redirect_str="location.href='../../teaching/?cls=Life'"
   case "TutorIndx"
      Redirect_str="location.href='../../teaching/?cls=Formal&index=" & request("indx")&"'"
   case "PracticeIndx"	 
      Redirect_str="location.href='../../teaching/?cls=Life&index=" & request("indx")&"'"   
   case "Conference"
      Redirect_str="location.href='../../teaching/tutorConference/?cls=Conference&index=" & request("indx")&"'"            
   case "Mylesson"
      Redirect_str="location.href='../../self-study/mylesson/'" 
      VIP3=Request.Cookies("product") 
   case "Training"
      Redirect_str="location.href='../../teaching/Mylesson/'"
   case "Schedule"
      Redirect_str="window.open('../../Tutor/Schedule')"
   case "Video"
      tf3 = "if(confirm('如果您未上過此堂課，將會扣除您的點數一點，\n\n上過此堂課則不會扣點，您是否確定播放？')){"
      Redirect_str= tf3 +"window.open('http://exchange.fun-day.com.tw/exchange_index/download_mchk.asp?m=" & session("indx") & "&type=5&pay=1&class_id=" & request("class_id") & "&jnr=1&download=0&host=" & request.servervariables("HTTP_HOST") & "')}"
      VIP3=Request.Cookies("product") 
   case "FunTest"
      Redirect_str="$('html').append(""<div id='newsdiv' style='position:fixed; top:0px;left:0px; width:100%;height:100%;z-index:99;'><iframe src='../../newpage2/post_article.htm?xml="&escape(request("PG"))&"&newpage=Funtest'  width='100%' height='100%' frameborder='no' border='0' marginwidth='0' marginheight='0' ></iframe></div>"")"
      VIP3=Request.Cookies("product") 
   case "Search"
      Redirect_str="Search_fomsb()"
   case "PointRecord"
      Redirect_str="window.open('../../newpage2/point', '_bank', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,screenX=0,screenY=0,left=0,top=0,maximize=1')"	
   case "LogOut"
      Redirect_str="location.href='../../member/logout.asp'"
      VIP=1
      VIP2=1
   case "News"
      Redirect_str="location.href='../../link.asp?xml="&request("xml")&"&newpage=news'"
      VIP=1
      VIP2=1
   case "Column"
      Redirect_str="location.href='../../self-study/column/column.asp?column="&request("xml")&"'"
      VIP=1
      VIP2=1   
   case "Lttc_News"
      Redirect_str="$('html').append(""<div id='newsdiv' style='position:fixed; top:0px;left:0px; width:100%;height:100%;z-index:99;'><iframe src='../../LTTC/link.asp?xml="&request("xml")&"&newpage="&request("newpage")&"'  width='100%' height='100%' frameborder='no' border='0' marginwidth='0' marginheight='0' ></iframe></div>"");$('body').attr('style','overflow:hidden;')"
      VIP3=Request.Cookies("product") 
   case "Lttc_Exam"
      Redirect_str="window.open('"&unescape(request("link"))&"')"	
      VIP=1
      VIP2=1 
      VIP3=Request.Cookies("product") 
   case "Toeic_Jnr"
      Redirect_str="downloadLiveNone('"&request("xml")&"','"&now()&"')"
      if authority(7)=0 or (request.Cookies("Ispay")="0" or enddatechk<"0") then
         VIP2=0
      end if
      VIP3=Request.Cookies("product")  
   case "Toeic_Test"
      Redirect_str="window.open('../../toeic_c/check2.asp?indx="&request("xml")&"')"	 
      if authority(7)=0 or (request.Cookies("Ispay")="0" or enddatechk<"0") then
         VIP2=0
      end if
      VIP3=Request.Cookies("product") 
   case "MyCard"
      Redirect_str="DIYLightBox('iframe','560px','260px','../../member/member_edit2017.asp')"
   case "Medit"
      Redirect_str="DIYLightBox('iframe','560px','260px','../../member/member_edit2017.asp')"	 
   case "PlayList"
      Redirect_str="DIYLightBox('iframe','358px','350px','../../library/playMenu/Home2.asp')"
   case "PlayList0"
      Redirect_str="DIYLightBox('iframe','500px','600px','../../library/PlayList/?typeS=0')"

      VIP3=Request.Cookies("product")  
   case "PlayList1"
      Redirect_str="DIYLightBox('iframe','500px','600px','../../library/PlayList/?typeS=1')"

      VIP3=Request.Cookies("product")  
   case "PlayList2"
      Redirect_str="DIYLightBox('iframe','500px','600px','../../library/PlayList/?typeS=2')"

      VIP3=Request.Cookies("product")  
   case "PlayList3"
      Redirect_str="DIYLightBox('iframe','500px','600px','../../library/MusicBox')"	 

   case "MusicBoxPlay"
      Redirect_str="DIYLightBox('iframe','500px','600px','../../library/musicbox/musicbox.asp?musicNo="&request("musicNo")&"&whichStart="&request("whichStart")&"')"
      VIP=1
      VIP2=1	 
   case "FunCard"
      VIP=1
      VIP2=1	    
      Redirect_str="DIYLightBox('iframe','358px','220px','../../Funcard2/card.htm')"     
   case "ToeicPage"
      Redirect_str="window.open('../../default/Toeic.asp')"	 
      if authority(7)=0 or (request.Cookies("Ispay")="0" or enddatechk<"0") then
         VIP2=0
      end if 
      VIP3=Request.Cookies("product") 
   case "LttcPage"
      Redirect_str="window.open('../../default/Lttc.asp')" 
      VIP3=Request.Cookies("product") 
   case "Channel"
      Redirect_str="location.href='Channel.asp?channel="&request("xml")&"'"	 
   case "Levels"
      Redirect_str="location.href='Levels.asp?chLevel="&request("xml")&"'"	 
   case "InterviewPDF"
      Redirect_str="location.href='https://sales.funday.asia/Interview/cnfiles/"&request("PDF")&"'"
      VIP=1
      VIP2=1   
   case "InterviewExam"
      Redirect_str="window.open('../../library/Level_Test/','_blank')"	
      VIP=1
      VIP2=1    
   case "Track"
      Redirect_str="location.href='../../mylesson/intro2.asp'"
      VIP3=Request.Cookies("product")   
   case "MZ"
      Redirect_str="location.href='../../self-study/MZ?SN="&request("SN")&"'"
      VIP=1
      VIP2=1
   case "InterviewAns"
      Redirect_str="DIYLightBox('iframe','850px','800px','../../library/Level_Test/answer_page.asp?indx=1')"  
      VIP=1
      VIP2=1   
   case "JoinNetDownload"
      Redirect_str="DIYLightBox('iframe','450px','133px','../../default/toeic/joindownload.asp')"
      VIP=1
      VIP2=1   
   case "MessageBoard"
      Redirect_str="Message_show()"
      VIP=1
      VIP2=1  
   case "BlogList"
      Redirect_str="window.open('../../../../blogDesktop/')"	  
      VIP=1
      VIP2=1 
   case "Blog"
      Redirect_str="window.open('../../../../blogDesktop/blog.asp?classify="&request("classify")&"&blog="&request("blog")&"')"	
      VIP=1
      VIP2=1 	 
   case "FB"  
      Redirect_str="window.open('"&(request("link"))&"')"
      VIP=1		 
      VIP2=1		 
   case "ToeicJoin"
      Redirect_str="window.open('https://www.examservice.com.tw/Account/LogOn?ReturnUrl=%2fScore')"
      VIP=1		 
      VIP2=1	 
   case "LttcJoin"
      Redirect_str="window.open('https://reg6.lttc.org.tw/GEPT_Exam/')"
      VIP=1	 
      VIP2=1	 
      VIP3=Request.Cookies("product") 
   case "Buy"
      Redirect_str="location.href='../../Buy'"
      VIP=1
      VIP2=1
   case "Buy1"
      Redirect_str="location.href='https://funday.asia/landing_reflink.asp?ad_id=1367'"
      VIP=1
      VIP2=1
   case "Buy2"
      Redirect_str="location.href='https://funday.asia/landing_reflink.asp?ad_id=1367'"
      VIP=1
      VIP2=1
   case "AD"
      Redirect_str="window.open('https://blog.hamibook.com.tw/?p=108128')"
      VIP=1
      VIP2=1      
   case "Home"
      Redirect_str="location.href='../../../Self-Study'"
      VIP=1
      VIP2=1
   case "Login"
      Redirect_str="location.href='../../../?Login=1'"
   case "FunProgram"
      Redirect_str="DIYLightBox('iframe','500px','600px','/FunProgram/?ProgramNo="&request("indx")&"')"	
      VIP=1
      VIP2=1       
   case "FairyTales"
      Redirect_str="location.href='/self-study/FairyTales/?sid="&request("sid")&"'"
      VIP=1
      VIP2=1
   case "GiftBox"
      Redirect_str="DIYLightBox('iframe','683px','452px','../../checkin/giftbox.asp')"   
      VIP=1
      VIP2=1
   case  "SearchArticle"
      Redirect_str="window.open('../../search/article')"             
   case  "SearchVideo"
      Redirect_str="window.open('../../search/Program')"   
   case  "SearchStory"
      Redirect_str="window.open('../../search/tales')"   
   case  "SearchMusicbox"
      Redirect_str="window.open('../../search/musicbox')"  
   case  "SearchBlog"
      Redirect_str="window.open('../../search/blog')"                              
end select
%>
<script>
   
   if('<%=VIP%>'=='1' && '<%=VIP2%>'=='1' && '<%=VIP3%>'!='228'  ){
      <%=Redirect_str%>;
   }else{
      <%
      if session("indx")="" then
         message="請先登入Funday 會員"
      else
         if VIP="0" then
            message="此功能僅付費會員使用"
         elseif VIP2="0" then
            message="此功能為進階課程，僅限VIP會員使用！"	   
         elseif VIP3="228" then
            message="本功能僅供完整方案以上會員使用"	    
         end if
      end if

      'response.write "console.log('"&message&"');"
      'response.end
      %> 	    
      <%if message="請先登入Funday 會員" then%>
      //DIYLightBox('iframe','500px','245px','../../join2020/regstate2.html?dd=<%=now%>') 
      JoinusLightBoxLogin()
	  <%else%>
      alert('<%=message%>');//location.href='../../Buy';
      <%end if%>
   }
</script>