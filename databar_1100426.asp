<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001" %>   
<!-- #include virtual="include/DBConnection.asp"--> 
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

nowTime = date() & " " &  FormatDateTime(Now,4) & ":" & Second(Now)

LearningC=0
StudyC=0
TutorC=0
LoginC=0
monthAry=0


	sql="select CEILING(sum(counts))counts from ( select case when counts >= 0 then Round(cast(counts as float )*30/60,2) else 0 end  counts from learning_time as subTable where member_id='"+CStr(mindx)+"' and customer_id='"+CStr(cindx)+"' and datediff(yyyy,cdate,getdate())=0 ) subTable"                                    
	rs.open sql,connection2,1,3
	if not rs.eof  then
		monthAry = rs("counts")
	else 
		monthAry = 0
	end if
	LearningC=monthAry    
	rs.close




	sql="SELECT SUM(subNum)counts FROM ( SELECT COUNT(distinct news_id) as subNum FROM learning_time as subTable where member_id='"+CStr(mindx)+"' and customer_id='"+CStr(cindx)+"' and datediff(yyyy,cdate,getdate())=0 group by  news_id , cdate ) subTable"                                   
	rs.open sql,connection2,1,3
	if not rs.eof  then
		monthAry = rs("counts")
	else 
		monthAry = 0
	end if
	StudyC=StudyC+monthAry      
	rs.close




	sql="select  count(indx)counts from tutor_class_order where member_id='"+CStr(mindx)+"' and customer_id='"+CStr(cindx)+"' and datediff(yyyy,cdate,getdate())=0" 
	rs.open sql,connection,1,3
	if not rs.eof  then
		monthAry = rs("counts")
	else 
		monthAry = 0
	end if
	TutorC=TutorC+monthAry
	rs.close



	sql="select  sum(counts)counts from Login_log where member_id='"+CStr(mindx)+"' and customer_id='"+CStr(cindx)+"' and datediff(yyyy,cdate,getdate())=0 " 
	rs.open sql,connection2,1,3
	if not rs.eof  then
		monthAry = rs("counts")
	else 
		monthAry = 0
	end if
	LoginC=LoginC+monthAry
	rs.close

%>


<link href="./2020/css/databar_status.css?dd=<%=Timer%>" rel="stylesheet">

<div class="db-left-div">
	<div class="db-Top-div">
		<div class="db-circle" onclick="DivBlock('loginCount')">
			<div class="subCount" id="LoginC">0</div>
			<div class="subUnit">次</div>
			<div class="db-subTitle">總登入數</div>
		</div>
		<div class="db-circle" onclick="DivBlock('studyMaterial')">
			<div class="subCount" id="StudyC">0</div>
			<div class="subUnit">次</div>
			<div class="db-subTitle" >閱讀課程</div>
		</div>
		<div class="db-circle" onclick="DivBlock('learnMinute')">
			<div class="subCount" id="LearningC">0</div>
			<div class="subUnit">分</div>
			<div class="db-subTitle" >學習分鐘數</div>
		</div>
		<div class="db-circle" onclick="DivBlock('onlineClass')">
			<div class="subCount" id="TutorC">0</div>
			<div class="subUnit">堂</div>
			<div class="db-subTitle" >互動課程</div> 
		</div>
		<div class="db-circle" onclick="DivBlock('onlineClass')">
			<div class="subCount" id="LearningPoint">168</div>
			<div class="subUnit">點</div>
			<div class="db-subTitle" >學習點數</div> 
		</div>				
	</div>
	<div class="under-div">
		<div class="db-circle" onclick="DivScores('Toeic')">
			<div class="subUnit">
				<div class="TOEIC-icon"></div>
			</div>
			<div class="db-subTitle">多益模擬測驗</div>
		</div>
		<div class="db-circle" onclick="DivScores('Tutor')">
			<div class="subUnit">
				<div class="Tutor-icon"></div>
			</div>
			<div class="db-subTitle" >互動課程給分</div>
		</div>
		<div class="db-circle" onclick="DivScores('lr')">
			<div class="subUnit">
				<div class="Listen-icon"></div>
			</div>
			<div class="db-subTitle" >聽讀課後練習</div>
		</div>
		<div class="db-circle" onclick="DivScores('Weekly')">
			<div class="subUnit">
				<div class="Writing-icon"></div>
			</div>
			<div class="db-subTitle" >每週測驗</div>
		</div>		
	</div>
</div>
<div class="db-right-div"></div>
<script src="../../../../track/js/countUp.js"></script>   
<script>
var options = {
	  useEasing : false,
	  useGrouping : true,
	  separator : ',',
	  decimal : '.',
	  prefix : '',
	  suffix : ''
};

var LearningC='<%=LearningC%>'
    myLearning = new CountUp("LearningC", 0, LearningC, 0, 2, options);
    myLearning.start();

var StudyC='<%=StudyC%>'
    myStudy = new CountUp("StudyC", 0, StudyC, 0, 2, options);
    myStudy.start();

var TutorC='<%=TutorC%>'
    myTutor = new CountUp("TutorC", 0, TutorC, 0, 2, options);
    myTutor.start();

var LoginC='<%=LoginC%>'
    myLogin = new CountUp("LoginC", 0, LoginC, 0, 2, options);
    myLogin.start();
</script>






