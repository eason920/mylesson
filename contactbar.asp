<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001" %>   
<!-- #include virtual="include/DBConnection.asp"--> 
<!--#include virtual="include/aspJSON1.17.asp"-->
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

	Str_count="{"
	Str_count=Str_count&Chr("34")&"member_index"&Chr("34")&" : "&Chr("34")&mindx&Chr("34")
	Str_count=Str_count&"}"

	postData=Str_count
	'response.write CStr(Len(postData))

	url="http://sales.funday.asia:81/api/serviceInfo"
	Set winHttpS = CreateObject("WinHttp.WinHttpRequest.5.1")
	winHttpS.setTimeouts 30000, 30000, 70000, 70000
	winHttpS.Open "POST", url, False
	winHttpS.SetRequestHeader "Content-Type", "application/json"
	winHttpS.SetRequestHeader "Statuskey", "member_id|"  
	winHttpS.SetRequestHeader "Content-Length", CStr(Len(postData))
	winHttpS.Send (postData)
	result = winHttpS.ResponseText
	getStatus = winHttpS.Status
    Set winHttpS = nothing	

	Response.CacheControl = "cache"
	Response.AddHeader "Pragma", "cache"
	Response.charset = "UTF-8"
	response.contentType = "application/json"

    if getStatus="200" then
		Set oJSON=new aspJSON
		oJSON.loadJSON(result)
		sales_id=oJSON.data("sales_index")
		sales_name=oJSON.data("sales_name")
		sales_phto=oJSON.data("sales_phto")
		ac_id=oJSON.data("ac_index")
		ac_name=oJSON.data("ac_name")
		ac_phto=oJSON.data("ac_phto")
	else
		sales_id=""
		sales_name=""
		sales_phto=""
		ac_id=""
		ac_name=""
		ac_phto=""				
	end if
    'response.end()

%>
<script language="Javascript">

var ClientsId=window.location.hostname.split(".");

var SE_id='<%=sales_id%>';
var SE_name='<%=sales_name%>';
var SE_phto='<%=sales_phto%>';
var AC_id='<%=ac_id%>';
var AC_name='<%=ac_name%>';
var AC_phto='<%=ac_phto%>';


</script>

<link href="./2020/css/contactbar.css?dd=<%=now%>" rel="stylesheet">

<div Class="Top-div">
	<div Class="SE-div SE-All" onclick="SE_ACChange(1)">專屬顧問</div>
	<div Class="AC-div" style="display:none;" onclick="SE_ACChange(2)">語言諮詢師</div>
</div>
<div Class="Down-div">
	<div Class="Block-div">
		<div Class="Name-div">
			<div Class="title"></div>
			<div Class="tel"></div>
		</div>
		<div Class="Phto-div">
			<div Class="circle"></div>
		</div>
	</div>
	<%response.write 1 %>
	<%if request.cookies("mylesson_id")=""  then%>
	<div Class="Messageboard-div" onclick="GoLink('MessageBoard')">前往留言版</div>
	<%end if%>
</div>

<script>
<%if request.cookies("mylesson_id")=""  then%>
	const Messageboard_div=`<div Class="Messageboard-div" onclick="GoLink('MessageBoard')">前往留言版</div>`
<%else%>
	const Messageboard_div=""
<%end if%>
const telicon=`<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.6154 8.81478L9.81625 8.60936C9.38417 8.55978 8.95917 8.70853 8.65459 9.01311L7.35125 10.3164C5.34667 9.29645 3.70334 7.6602 2.68334 5.64853L3.99375 4.33811C4.29834 4.03353 4.44709 3.60853 4.3975 3.17645L4.19209 1.39145C4.10709 0.676029 3.505 0.137695 2.7825 0.137695H1.55709C0.756669 0.137695 0.0908361 0.803529 0.140419 1.60395C0.515836 7.65311 5.35375 12.4839 11.3958 12.8594C12.1963 12.9089 12.8621 12.2431 12.8621 11.4427V10.2173C12.8692 9.50186 12.3308 8.89978 11.6154 8.81478Z" fill="white" fill-opacity="0.8"/>
</svg>`
if (SE_id!=''){
	SE_ACChange(1)
	if(AC_id!=''){
		$('.SE-div').removeClass('SE-All');
		$('.AC-div').show()
	}
}else{
	const Name_div=`<div Class="title"></div>`
	const str ='<div Class="Center-div">' + Name_div + Messageboard_div + '</div>' 
	$('#contact .Down-div').html(str)

	//$('.Center-div .title').html('免費預約')
	$('.SE-div').html('客服中心').removeAttr('onclick');
	$('.Center-div .title').html(telicon+' 02-2523-9777').css('transform', 'scale(1.5)');
}

if( SE_id!='' && AC_id !='' ){
	// init v
	$('.SE-div').addClass('active');
	$('.SE-div, .AC-div').css('cursor', 'pointer')

	// action event v
	$('.SE-div, .AC-div').click(function(){
		$('.SE-div, .AC-div').removeClass('active');
		$(this).addClass('active');
	})
}

function SE_ACChange(id){
	// if( SE_id!='' && AC_id !='' ){
		if(id==1){
			var phto_V=SE_phto
			var name_V=SE_name
			// $('.SE-div').addClass('active');
			// $('.AC-div').removeClass('active');
		}else if(id==2){
			var phto_V=AC_phto
			var name_V=AC_name
			// $('.AC-div').addClass('active');
			// $('.SE-div').removeClass('active');		
		}

		document.documentElement.style.setProperty('--phto','url('+phto_V+')');

		const Name_div=`
							<div Class="title"></div>
							<div Class="tel"></div>`
		
		const Photo_div=`<div Class="Phto-div"><div Class="circle"></div></div>`

		const str = '<div Class="Left-div">' + Name_div + '</div><div Class="Right-div">' + Photo_div + '</div>';
		$('.Down-div').html(str)

		$('.Left-div .title').html(name_V)
		$('.Left-div .tel').html(telicon+' 02-2523-9777')	
	// };
};
</script>
