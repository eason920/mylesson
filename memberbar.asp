<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001" %>   
<!-- #include virtual="include/DBConnection.asp"--> 
<!-- #include virtual="teaching/PointFunction/Tutor_function.asp"--> 
<% if request.cookies("mylesson_id")=""  then%>
<!-- #include virtual="track/Upgrade.asp"-->
<%end if%>
<%
response.Buffer = true
session.Codepage =65001
response.Charset = "utf-8"  


if request.cookies("mylesson_id")<>""  then
	mindx=request.cookies("mylesson_id") '--使用者ID
	cindx=411  '--customer ID

	sql = "select enddate from member where indx='"&mindx&"' and customer_id='"&cindx&"'"
	recordset1.open sql,connection2,1,3
	if not recordset1.eof then
		enddate = recordset1("enddate")
	end if
	recordset1.close
else
	mindx=Get_mid()  '--使用者ID
	cindx=Get_cid()  '--customer ID
	enddate=Get_enddate()  '--使用者到期日
end if


if mindx="" then
	response.write "<script>location.href='../../'</script>"
	response.end()
end if

nowTime = date() & " " &  FormatDateTime(Now,4) & ":" & Second(Now)

if enddate<>"False" then
	enddatechk=datediff("d",now(),enddate)
end if

if mindx<>"False" then

	sql = "select realname,filename,nickname,sex,Pdate from member where indx='"&mindx&"' and customer_id='"&cindx&"'"
	recordset1.open sql,connection2,1,3
	if not recordset1.eof then
		realname = recordset1("realname")
		nickname = recordset1("nickname")
		filename = recordset1("filename")
		sex=recordset1("sex")
		Pdate=recordset1("Pdate")
	end if
	recordset1.close

	if  cindx = 411 then 			
		
		CVer=ContractVer(mindx)
		
		if CVer="1" then
			'response.write mindx
			t_point=Get_exchange_pointA(cindx,mindx)
					
		else

			sqer ="select sum(tutorpoint_b) as c,sum(tutorpoint_s) as c2 from exchange.dbo.order_pay where member_id='"&mindx&"' "
			set rse = connection2.execute(sqer)
			
			if not rse.eof then
				t_point = rse("c")+rse("c2")
			else
				t_point="0"
			end if
		
		end if
		
	else

		sql9 = "select t_point from tutor_point where member_id ='"&mindx&"'"
		set rs9 = connection.execute(sql9)
		if not rs9.eof then
			t_point = rs9("t_point")
		else
			t_point = 0
		end if

		rs9.close				
				
	end if

end if

if len(filename)>3 then
	filename="../../member/files/"&filename
else
	if sex=1 or sex="" then
		filename= "../../newpage2/images/Pic-B.png"
	else
		filename= "../../newpage2/images/Pic-G.png"
	end if
end if     

if mindx<>"False" then

	sql="select * from member_Levels where member_id="&mindx&" and customer_id="&cindx
	set rs=connection2.execute(sql)
	if not rs.eof then

		select case rs("Levels")
		case 1
		Levelsx="A1-"&rs("Levels_step")
		case 2
		Levelsx="A2-"&rs("Levels_step")
		case 3
		Levelsx="B1-"&rs("Levels_step")
		case 4
		Levelsx="B2-"&rs("Levels_step")
		case 5
		Levelsx="C1-"&rs("Levels_step")
		case 6
		Levelsx="C2-"&rs("Levels_step")
		case 7
		Levelsx="C2-"&rs("Levels_step")
		end select
		
		InterveiwPDF=rs("PDF")
	else
		Levelsx="A2-?"
		InterveiwPDF=""
	end if

end if

if mindx<>"" then 
 
	sql="select * from member_Levels where member_id="&mindx&" and customer_id="&cindx
	set rs=connection2.execute(sql)
	if not rs.eof then	  
		InterveiwPDF=rs("PDF")
		levels=rs("Levels")
		levels_step=rs("Levels_step")
	else
		InterveiwPDF=""
		levels=""
		levels_step=""
	end if

	sql="select TOP (1) indx from member_FuntestLV where member_id="&mindx&" and customer_id="&cindx
	set rs=connection2.execute(sql)
	if not rs.eof then	  
		grammarExam="Show"
	else
		grammarExam=""
	end if

	rs.close
else

	InterveiwPDF=""
	grammarExam=""

end if

if InterveiwPDF<>"" then
	InterVeiw_Str="GoLink('InterviewPDF','PDF="&InterveiwPDF&"');"
else
	InterVeiw_Str="DIYLightBox('iframe','920px','546px','../../Interview/index2020.asp?relink=../../')"
end if

if grammarExam="Show" and  InterveiwPDF<>"" then
	grammarExam_Str="GoLink('InterviewPDF','PDF="&InterveiwPDF&"');"
elseif grammarExam="Show" then
	grammarExam_Str="DIYLightBox('iframe','850px','800px','../../library/Level_Test/answer_page.asp?indx=1')" 
	grammarExam_Str="window.open('../../../../library/Level_Test/answer_page.asp?indx=1')"	
else
	grammarExam_Str="GoLink('InterviewExam')"
end if

%>


<link href="./2020/css/memberbar.css?dd=<%=now%>" rel="stylesheet">


<div class="DivBlock"></div>
<div class="DivIndx"></div>
<div class="DivScores"></div>


<div class="left-Div">
	<div class="Member_DV">
		<div  class="Mcircle">
			<div class="Minner" style="background-image: url(<%=filename%>);" ></div>
		</div>	
		<div class="Mnameb" ><span ><%=nickname%></span> <%if request.cookies("mylesson_id")=""  then%><span class="Edit" onclick="GoLink('MyCard')"><svg width="15"  viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.9016 4.75249L19.0172 3.88546L19.161 3.74445C19.4073 3.50236 19.5456 3.17433 19.5456 2.83234C19.5456 2.49035 19.4073 2.16232 19.161 1.92023L17.9838 0.765232C17.7367 0.524289 17.4024 0.389081 17.0539 0.38916C16.7055 0.389239 16.3712 0.524598 16.1242 0.765653L1.8877 14.7284C1.84299 14.7721 1.80851 14.8248 1.78668 14.8829L0.358626 18.6543C0.329461 18.7315 0.323494 18.8153 0.341432 18.8957C0.359371 18.9761 0.400462 19.0498 0.459826 19.1079C0.519189 19.1661 0.594331 19.2064 0.676326 19.2239C0.758321 19.2414 0.843725 19.2355 0.922395 19.2069L4.7678 17.8059C4.82685 17.7843 4.88045 17.7505 4.92492 17.7068L18.3974 4.49336L18.9718 5.05645L13.2523 10.666C13.2116 10.7059 13.1793 10.7533 13.1573 10.8055C13.1352 10.8576 13.1239 10.9135 13.1239 10.97C13.1239 11.0264 13.1352 11.0823 13.1573 11.1345C13.1793 11.1866 13.2116 11.234 13.2523 11.2739C13.293 11.3138 13.3413 11.3455 13.3945 11.3671C13.4476 11.3887 13.5046 11.3998 13.5622 11.3998C13.6198 11.3998 13.6767 11.3887 13.7299 11.3671C13.7831 11.3455 13.8314 11.3138 13.8721 11.2739L19.9016 5.36043C19.9423 5.32052 19.9746 5.27313 19.9966 5.22098C20.0186 5.16882 20.03 5.11292 20.03 5.05646C20.03 5 20.0186 4.9441 19.9966 4.89194C19.9746 4.83979 19.9423 4.7924 19.9016 4.75249ZM16.7441 1.37399C16.8263 1.29348 16.9377 1.24823 17.0539 1.24815C17.1701 1.24807 17.2816 1.29317 17.3639 1.37357L18.5411 2.52815C18.6232 2.60893 18.6692 2.71831 18.6692 2.83233C18.6692 2.94635 18.6232 3.05572 18.5411 3.13651L16.2126 5.42024L14.4155 3.6577L16.7441 1.37399ZM4.61495 16.7949L2.81751 15.0323L11.2554 6.75698L13.0524 8.51972L4.61495 16.7949ZM11.8753 6.14901L13.7956 4.26561L15.5928 6.02816L13.6722 7.9118L11.8753 6.14901ZM2.37077 15.81L3.822 17.2331L1.51356 18.0741L2.37077 15.81Z" fill="white"/></svg></span><%end if%></div>					
		<div  class="Mlv" ><%=Levelsx%></div>
		<!--div  class="logout" >登出</div-->
		<div  class="Minfo link" >
			<span class="Minfo_type">數位學堂到期日：</span>
			<span class="Minfo_count" > <%=year(enddate)&"/"&month(enddate)&"/"&day(enddate)%> </span>
			<%if Pdate<>"" then%> 
				<span class="Minfo_type">線上視訊到期日：</span>
				<span class="Minfo_count" > <%=Pdate%> </span>
			<%end if%>
			<%if CVer="1" then%>
				<span class="Minfo_type " >學習堂數：</span>			
			<%else%>
				<span class="Minfo_type " >學習點數：</span>
			<%end if%>
			<span class="Minfo_count" ><%=t_point%></span>
		</div>
		<div class="record" onclick="DivPoint()">點數使用紀錄</div>
		<div class="Reportblock link" onclick="<%=InterVeiw_Str%>">
			<span class="Levelreport"></span>
			<span class="Levelreport2">英語能力診斷報告</span>
			<%if InterveiwPDF="" or isnull(InterveiwPDF) then%>
				<span class="examGo">待測</span>
			<%end if%>	
		</div>
		<div class="Reportblock link" onclick="<%=grammarExam_Str%>">
			<span class="Levelexam"></span>
			<span class="Levelexam2">CEFR 測驗</span>
			<%if grammarExam="" then%>
				<span class="examGo">待測</span>
			<%end if%>
		</div>

	</div>
	<div class="Learning_index_DV">
		<div class="Learning_tips">
			<div class="indicator">學習指標<a href="https://funday.asia/Self-Study/learning_record/about.asp" target="_blank">?</a></div>
			<div class="up">PASS</div>
		</div>
		<iframe id="LI1"  src="../../track/LessonIndex/intro2.asp" width="250px" height="80%" frameborder="0" border="0" cellspacing="0" marginwidth="0" marginheight="0" scrolling="no" ></iframe>
		<iframe id="LI2" style="display:none;" src="../../track/LessonIndex/intro3.asp" width="250px" height="100%" frameborder="0" border="0" cellspacing="0" marginwidth="0" marginheight="0" scrolling="no" ></iframe>
	</div>
</div>

<script>
$(document).ready(function(){
	
	upLevel_icon()

    $(window).resize(function() {
        upLevel_icon()
    });
});

const upLevel_icon=()=>{
	//(wdth>=1600)?($('.Learning_index_DV .up').css('top','45px');$('#LI1').show();$('#LI2').hide();):($('.Learning_index_DV .up').css('top','0px');$('#LI2').show();$('#LI1').hide();)
	var wdth=$(window).width();
	var heght=$(window).height();


	if(wdth>=1600){
		$('#LI1').show();
		$('#LI2').hide();
	}else{
		$('#LI2').show();
		$('#LI1').hide();
	}

	
}



</script>
