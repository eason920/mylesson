<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001" %>   
<!-- #include virtual="include/DBConnection.asp"--> 

<%
response.Buffer = true
session.Codepage =65001
response.Charset = "utf-8"  

mindx=request.cookies("mylesson_id")
cindx=411


'if session("indx")="" then
'  response.write "<script>location.href='../../'</script>"
'  response.end()
'end if


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
    <title>My Lesson page1</title>
    <link href="./2020/css/mylesson_1.css?<%=Timer%>" rel="stylesheet"/>
    <link href="./2020/css/opintro.css?<%=Timer%>" rel="stylesheet"/>
    <!-- <script src="./2020/assets/plugins/jquery/jquery.1.12.4.min.js"></script> -->
    <!--JQ: ^ eason 1.12.4 v kai 3.5.1 -->
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" ></script>
    <script src="https://code.jquery.com/ui/1.11.2/jquery-ui.js"></script>
    <script src="../../jquery.cookie.js"></script>    
    <script src="../../js/MessageVer2/alert.js" type="text/javascript"></script>        
    <script src="./2020/assets/plugins/jquery-ui/1.12.1.js"></script>
    <script src="./2020/assets/plugins/jquery-ui/i18n/datepicker-zh-TW.js"></script>
    <script src="./2020/assets/plugins/jquery-circle-progress/jquery-circle-progress.js"></script>
    <!-- <script src="./2020/js/week_ary.js"></script> -->
    <script src="./2020/js/mylesson.js?<%=Timer%>"></script>
    <script src="./2020/js/week_map.js?<%=Timer%>"></script>
    <script src="./2020/js/lb.js?<%=Timer%>"></script>
    <script src="./2020/js/face_map.js?<%=Timer%>"></script>
    <script src="./2020/js/play.js?<%=Timer%>"></script>
    <script src="./2020/js/opintro.js?<%=Timer%>"></script>
    <script src="../../js/Uinfo.js"></script>
    <script src="./2020/js/lightBoxDIY-V2.js?<%=Timer%>"></script>    
    <script src="./2020/js/tool.js?dd=<%=now%>"></script>    
  <style>
  .wd2{
    position:fixed;
    width:100%;
    height:100%;
    top:0px;
    left:0px;
    background-color:rgba(0, 0, 0, 0.6);
    z-index:6;
  }
  .DivBlock,.DivIndx,.DivScores{
    position:relative;
    margin:0 auto;
    padding-left: 10px;
    padding-right: 10px;
    margin-top:20px;
    margin-bottom:-10px;
    border-radius: 16px;
    font-size: 13px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 32px;
    letter-spacing: -0.3px;
    text-align: left;
    color: #888888;  
    background-color: #ffffff;
    border: solid 1px #bcbcbc;
    position:absolute;
    float:left;
    left:calc(50% - (777px) / 2);
    top:calc(50% - (493px) / 2);	
    width: 777px;
    height: 500px;
    border-radius: 5px;

    background-color: #ffffff;
    box-shadow: 0px 4px 9px 0 rgba(0, 0, 0, 0.26);
    display:none;
    z-index:7;
  }
  .DivIndx{ width: 755px; height: 650px;}
  .DivScores{ width: 850px; height: 633px;}
  .DVShow{ background: url(../../track/images/Loading.svg) center center no-repeat; background-size: 200px;background-color: #ffffff;}
  </style>
  <script>
  var ClientsId=window.location.hostname.split(".");

  function DivPoint(){
    if($('.DivScores').css('display')=='none'){	
      $('.DivScores').html('<iframe src="https://exchange.funday.asia/pointnew/?indx=<%=mindx%>&key1=<%=pass1%>" width="100%" height="100%" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="yes"></iframe>');  
      $('body').append('<div class="wd2" onclick="removeWd2()" ></div>'); 
      $('.DivScores').fadeIn();
    }
  }

  function DivBlock(type){
    if($('.DivBlock').css('display')=='none'){	
      $('.DivBlock').attr('class','DivBlock DVShow')   
      $('.DivBlock').html('<iframe src="../../../../track/LessonGraph?type='+type+'" width="100%" height="100%" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>');  
      $('body').append('<div class="wd2" onclick="removeWd2()" ></div>'); 
      $('.DivBlock').fadeIn();
    }
  }

  function DivScores(type){
    if($('.DivScores').css('display')=='none'){	
      $('.DivScores').attr('class','DivScores DVShow')  
      $('.DivScores').html('<iframe src="../../../../track/pointsRecord?type='+type+'" width="100%" height="100%" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>');  
      $('body').append('<div class="wd2" onclick="removeWd2()" ></div>'); 
      $('.DivScores').fadeIn();
    }
  }


  function DivIndx(){
    if($('.DivIndx').css('display')=='none'){	
      $('.DivIndx').html('<iframe src="../../../../track/LessonIndex/barChart/" width="100%" height="100%" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>');  
      $('body').append('<div class="wd2" onclick="removeWd2()" ></div>'); 
      $('.DivIndx').fadeIn();
    }
  }

  function removeWd2(){

  $('.setting_DV,.Search_DV,.DivBlock,.DivIndx,.DivScores').fadeOut();
  $('.SerachBar').css('z-index','1');
  if($("#toolbar").css("left")>"-425px"){
    $("#toolbar").attr('class','toolbarSlideout');
  }
  $('.wd2').remove();
  
  }
  </script>
  </head>

  <body>
    <div id="nav">

    </div>
    <div id="content">
      <div class="wrapper">
        <div id="main">
          <div id="prev-page" style="display: none">
            <svg fill="none">
              <path d="M19 2L2 23.5L19 45" stroke="white" stroke-width="4"></path>
            </svg>
          </div>
          <div id="next-page" style="display: none">
            <svg fill="none">
              <path d="M2 2L19 23.5L2 45" stroke="white" stroke-width="4"></path>
            </svg>
          </div>
          <div id="member"></div>
          <div id="right">
            <div id="above">
              <div id="facemap-open" style="display: none" title="觀看本月學習成效">
                <svg viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6667 1.74998V2.66665H5.33333V1.74998C5.33333 1.24581 4.92083 0.833313 4.41667 0.833313C3.9125 0.833313 3.5 1.24581 3.5 1.74998V2.66665H2.58333C1.56583 2.66665 0.759167 3.49165 0.759167 4.49998L0.75 17.3333C0.75 18.3416 1.56583 19.1666 2.58333 19.1666H15.4167C16.425 19.1666 17.25 18.3416 17.25 17.3333V4.49998C17.25 3.49165 16.425 2.66665 15.4167 2.66665H14.5V1.74998C14.5 1.24581 14.0875 0.833313 13.5833 0.833313C13.0792 0.833313 12.6667 1.24581 12.6667 1.74998ZM12.6667 10.9166H9.91667C9.4125 10.9166 9 11.3291 9 11.8333V14.5833C9 15.0875 9.4125 15.5 9.91667 15.5H12.6667C13.1708 15.5 13.5833 15.0875 13.5833 14.5833V11.8333C13.5833 11.3291 13.1708 10.9166 12.6667 10.9166ZM3.5 17.3333H14.5C15.0042 17.3333 15.4167 16.9208 15.4167 16.4166V7.24998H2.58333V16.4166C2.58333 16.9208 2.99583 17.3333 3.5 17.3333Z" fill="#354E85"></path>
                </svg>
              </div>
              <div id="load-cal"></div>
              <div id="calbox" style="display: none">
                <div id="prev-week" title="上一週">
                  <svg fill="none">
                    <path d="M10 22L2 11.7778L10 1.55556" stroke="#354E85" stroke-width="3" stroke-linejoin="round"></path>
                  </svg>
                  Prev Week
                </div>
                <div id="next-week" title="下一週">
                  Next Week
                  <svg fill="none">
                    <path d="M2 1L10 11.2222L2 21.4444" stroke="#354E85" stroke-width="3" stroke-linejoin="round"></path>
                  </svg>
                </div>
                <div class="weekmap">
                  <div class="weekmap-title"></div>
                  <div class="weekmap-main">
                    <div class="weekmap-time">
                      <div class="weekmap-area">04:00<br/>
                        <div class="weekmap-area-text">上午</div>
                      </div>
                      <div class="weekmap-area">12:00<br/>
                        <div class="weekmap-area-text">下午</div>
                      </div>
                      <div class="weekmap-area">18:00<br/>
                        <div class="weekmap-area-text">晚上</div>
                      </div>
                    </div>
                    <div class="weekmap-cal">
                      <div class="weekmap-week weekmap-tr"></div>
                      <div class="weekmap-date weekmap-tr"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="achive" style="display: none">
                <div id="week-clone" title="複製此週學習排程">
                  <svg viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.08033C0 0.930062 0.930063 0 2.08033 0C2.08464 0 2.08894 2.08603e-05 2.09324 6.24274e-05H11.3908C12.5414 6.24274e-05 13.4709 0.930435 13.4709 2.08033V11.9475C13.4709 13.0978 12.5411 14.0277 11.3908 14.0277H2.08033C0.930442 14.0277 0 13.0982 0 11.9475V2.08033ZM2.61357 2.61363V11.4141H10.8574V2.61363H2.61357Z" fill="white"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.08056 1.30682C1.652 1.30682 1.30701 1.65182 1.30701 2.08037V11.9476C1.30701 12.3762 1.652 12.721 2.08056 12.721H11.391C11.8196 12.721 12.1644 12.3762 12.1644 11.9476V2.08037C12.1644 1.65188 11.8196 1.30689 11.391 1.30689H2.08056V1.30682Z" fill="white"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.804321 2.08036C0.804321 1.37422 1.37434 0.804199 2.08048 0.804199C2.08316 0.804199 2.08583 0.80422 2.08849 0.804262H11.3909C12.0972 0.804262 12.6669 1.3744 12.6669 2.08036V11.9475C12.6669 12.6537 12.0971 13.2236 11.3909 13.2236H2.08048C1.37449 13.2236 0.804321 12.6539 0.804321 11.9475V2.08036ZM2.0757 1.80946C1.92699 1.81197 1.80955 1.93099 1.80955 2.08036V11.9475C1.80955 12.0984 1.92937 12.2183 2.08048 12.2183H11.3909C11.5419 12.2183 11.6617 12.0986 11.6617 11.9475V2.08036C11.6617 1.92934 11.5418 1.80949 11.3909 1.80949H2.08048C2.07889 1.80949 2.0773 1.80948 2.0757 1.80946Z" fill="#354E85"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.73248 6.95232C4.73248 5.80236 5.66233 4.87183 6.81266 4.87183H16.1231C17.2734 4.87183 18.2036 5.80201 18.2036 6.95232V16.8195C18.2036 17.9705 17.2727 18.8997 16.1231 18.8997H6.81266C5.66302 18.8997 4.73248 17.9702 4.73248 16.8195V6.95232ZM7.34605 7.48539V16.2861H15.59V7.48539H7.34605Z" fill="white"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.81282 6.17859C6.38455 6.17859 6.03943 6.52371 6.03943 6.9523V16.8195C6.03943 17.2481 6.38455 17.5929 6.81282 17.5929H16.1233C16.5518 17.5929 16.897 17.2481 16.897 16.8195V6.9523C16.897 6.52371 16.5518 6.17859 16.1233 6.17859H6.81282Z" fill="white"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5368 6.95228C5.5368 6.24624 6.10682 5.67596 6.81281 5.67596H16.1232C16.8294 5.67596 17.3996 6.24611 17.3996 6.95228V16.8195C17.3996 17.5259 16.8292 18.0955 16.1232 18.0955H6.81281C6.10708 18.0955 5.5368 17.5258 5.5368 16.8195V6.95228ZM6.81281 6.68119C6.66225 6.68119 6.54203 6.80115 6.54203 6.95228V16.8195C6.54203 16.9703 6.66199 17.0903 6.81281 17.0903H16.1232C16.2745 17.0903 16.3943 16.9702 16.3943 16.8195V6.95228C16.3943 6.80128 16.2742 6.68119 16.1232 6.68119H6.81281Z" fill="#354E85"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.09103 5.49357C3.70038 5.31471 4.35011 5.59982 4.63105 6.16937C5.65983 8.25505 6.99751 9.12503 8.0523 9.50556C8.39467 9.62908 8.71728 9.70438 9.00259 9.74911V9.13521C9.00259 8.60814 9.31922 8.13267 9.80553 7.92946C10.2919 7.72625 10.8526 7.83508 11.2276 8.20545L14.1166 11.0587C14.365 11.304 14.5049 11.6386 14.5051 11.9877C14.5053 12.3369 14.3657 12.6716 14.1176 12.9172L11.2286 15.7765C10.8539 16.1475 10.2928 16.2568 9.80618 16.0538C9.31952 15.8507 9.00259 15.3751 9.00259 14.8478V14.1538C8.29485 14.0817 7.40168 13.9027 6.48868 13.4905C4.49916 12.5922 2.58679 10.6577 2.16059 6.89451C2.08913 6.26348 2.48167 5.67243 3.09103 5.49357ZM11.3037 12.025L11.3396 11.9894L11.2946 11.945C11.2843 11.9567 11.2739 11.9683 11.2632 11.9797C11.277 11.9945 11.2905 12.0096 11.3037 12.025Z" fill="white"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.45868 6.7475C4.20656 13.3511 9.94034 12.9075 10.309 12.8731V14.8478L13.1979 11.9885L10.309 9.13526V11.0865C9.87536 11.1377 5.82457 11.5439 3.45868 6.7475Z" fill="#354E85"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.31713 6.26523C3.5515 6.19643 3.8014 6.30609 3.90945 6.52515C5.0331 8.80316 6.53477 9.81318 7.77901 10.2621C8.61637 10.5641 9.35371 10.6176 9.80637 10.6134V9.13525C9.80637 8.93253 9.92816 8.74966 10.1152 8.6715C10.3022 8.59334 10.5179 8.6352 10.6622 8.77765L13.5511 11.6309C13.6466 11.7252 13.7004 11.8539 13.7005 11.9882C13.7006 12.1225 13.6469 12.2512 13.5515 12.3457L10.6625 15.205C10.5184 15.3477 10.3026 15.3897 10.1154 15.3116C9.92827 15.2336 9.80637 15.0506 9.80637 14.8478V13.3936C9.14516 13.389 7.99711 13.2894 6.81922 12.7576C5.08602 11.975 3.35331 10.2833 2.95927 6.80405C2.93179 6.56135 3.08277 6.33402 3.31713 6.26523ZM4.74613 9.46613C5.40018 10.7287 6.33575 11.4364 7.23289 11.8414C8.68751 12.4982 10.1088 12.3869 10.2623 12.3726C10.4031 12.3595 10.5429 12.4063 10.6475 12.5015C10.752 12.5967 10.8116 12.7316 10.8116 12.8731V13.6432L12.483 11.9888L10.8116 10.3381V11.0865C10.8116 11.3413 10.6209 11.5558 10.3679 11.5857C10.1134 11.6157 8.90406 11.7366 7.43788 11.2076C6.57179 10.8952 5.62854 10.3602 4.74613 9.46613Z" fill="#354E85"></path>
                  </svg>
                </div>
                <div id="edit-week" title="編緝此週學習排程">
                  <svg viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.000915527 3.10631C0.0186097 3.09918 0.0162907 3.08233 0.0200854 3.06799C0.0511243 2.93001 0.129219 2.8072 0.240916 2.72071C0.352613 2.63421 0.49092 2.58946 0.632009 2.59415C1.12054 2.59246 1.60909 2.5937 2.09763 2.5937C3.78141 2.5937 5.46518 2.59373 7.14895 2.59381C7.49007 2.59386 7.73397 2.78959 7.79227 3.1081C7.80494 3.1903 7.8007 3.27422 7.7798 3.35471C7.75889 3.43519 7.72177 3.51055 7.67072 3.57612C7.61967 3.6417 7.55577 3.69612 7.48294 3.73603C7.41011 3.77594 7.32991 3.8005 7.24726 3.80819C7.20134 3.81119 7.15513 3.81053 7.10905 3.81053C5.17947 3.81063 3.24989 3.80995 1.32031 3.80849C1.23417 3.80837 1.21693 3.8325 1.21698 3.91439C1.21903 7.83647 1.21888 11.7585 1.21653 15.6806C1.21648 15.7686 1.24309 15.7826 1.32264 15.7826C5.23711 15.7807 9.15158 15.7809 13.066 15.7831C13.1532 15.7832 13.1678 15.7573 13.1677 15.6774C13.1655 13.7287 13.165 11.7799 13.1661 9.83121C13.1662 9.50015 13.3643 9.25265 13.6696 9.19908C13.7545 9.18398 13.8415 9.18719 13.925 9.20851C14.0085 9.22983 14.0865 9.26875 14.1538 9.32269C14.2211 9.37662 14.2761 9.44432 14.3152 9.52126C14.3543 9.5982 14.3766 9.68262 14.3805 9.76887C14.3824 9.80572 14.3817 9.84273 14.3817 9.87967C14.3817 12.01 14.3817 14.1404 14.3817 16.2707C14.3817 16.6933 14.2594 16.8661 13.8664 16.9988H0.498741C0.214173 16.9513 0.0552558 16.778 0.000915527 16.4999V16.4445C0.0128019 16.4128 0.0159331 16.3784 0.00998044 16.345C0.0104489 11.9776 0.0104489 7.61019 0.00998044 3.24279C0.0159334 3.2094 0.0128022 3.17502 0.000915527 3.14326V3.10631Z" fill="#354E85"></path>
                    <path d="M4.14967 12.2619C4.15086 12.1693 4.17213 12.0782 4.212 11.9947C4.67345 10.9145 5.1348 9.83437 5.59606 8.75415C5.63833 8.65513 5.69939 8.56527 5.77586 8.48958C8.53085 5.72974 11.2855 2.96958 14.0399 0.209098C14.3166 -0.0682211 14.6748 -0.0704178 14.9527 0.206845C15.5667 0.819354 16.1797 1.43289 16.7917 2.04744C17.0682 2.32494 17.0698 2.68708 16.794 2.96344C14.0349 5.72802 11.2754 8.49225 8.51564 11.2561C8.44644 11.3261 8.36435 11.382 8.27391 11.4206C7.19015 11.8847 6.10657 12.3492 5.02317 12.8141C4.59414 12.9973 4.14748 12.7125 4.14967 12.2619Z" fill="#354E85"></path>
                    <path d="M7.9184 10.1301C7.58498 9.79559 7.25229 9.46212 6.92033 9.12972C6.89467 9.10409 6.89214 9.0863 6.9205 9.06354C6.93429 9.05128 6.94741 9.03828 6.95979 9.02461C8.89996 7.08068 10.8397 5.13628 12.7789 3.19142C12.8329 3.1372 12.8577 3.1365 12.9112 3.1911C13.2124 3.49872 13.5165 3.80351 13.8236 4.10546C13.8698 4.15111 13.8681 4.17425 13.8229 4.21945C11.8685 6.17522 9.9149 8.13185 7.96215 10.0893C7.94921 10.1023 7.93536 10.1143 7.9184 10.1301Z" fill="#FEFEFE"></path>
                    <path d="M14.4501 3.58559C14.4362 3.57262 14.4233 3.56122 14.4111 3.54902C14.0941 3.23149 13.7769 2.91419 13.4595 2.59711C13.4248 2.56267 13.4255 2.54451 13.4594 2.51072C13.7928 2.17915 14.1249 1.84633 14.4557 1.51225C14.4926 1.47494 14.5108 1.485 14.5419 1.51637C14.856 1.83248 15.171 2.14762 15.4869 2.4618C15.5175 2.49226 15.5279 2.50964 15.4908 2.5465C15.1572 2.87783 14.825 3.21049 14.4941 3.54448C14.4811 3.55746 14.4673 3.56954 14.4501 3.58559Z" fill="#FEFEFE"></path>
                    <path d="M7.17473 10.5666L5.91205 11.1097C6.09907 10.6728 6.27902 10.2524 6.45639 9.83807L7.17473 10.5666Z" fill="#FEFEFE"></path>
                  </svg>
                </div>
                <div id="achive-level">課程強度<span>def</span></div>
                <div id="achive-barmasker">
                  <div class="achive-title">自主學習</div>
                  <div class="achive-bar is-bar1">
                    <div class="achive-percent"></div>
                  </div>
                  <div class="achive-title">互動課程</div>
                  <div class="achive-bar is-bar2">
                    <div class="achive-percent"></div>
                  </div>
                </div>
                <div class="achive-title">學習建議</div>
                <div id="achive-msg">建議您多安排幾篇文章，或上互動課程，讓學習更扎實喔!</div>
                <div id="completebox-7">
                  <div class="completebox-vision"></div>
                  <div class="completebox-text"></div>
                  <div class="completebox-title">週完成率</div>
                  <div class="completebox-time">10.26 ~ 2021.11.01</div>
                </div>
              </div>
              <div id="facemap-lb">
                <div id="datepicker"></div>
                <div id="facemap"></div>
                <div id="completebox">
                  <div id="completebox-30">
                    <div class="completebox-vision"></div>
                    <div class="completebox-text"></div>
                    <div class="completebox-title">月完成率</div>
                    <div class="completebox-time">2020.08</div>
                  </div>
                  <div id="completebox-90">
                    <div class="completebox-vision"></div>
                    <div class="completebox-text"></div>
                    <div class="completebox-title">季完成率</div>
                    <div class="completebox-time">10 ~ 12</div>
                  </div>
                </div>
                <svg id="month-prev" width="6" height="15" viewBox="0 0 6 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.05624 0.963867L0.710449 7.36398L5.05624 13.7641" stroke="#7E7E7E"></path>
                </svg>
                <svg id="month-next" width="6" height="15" viewBox="0 0 6 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.756745 13.7641L5.10254 7.36399L0.756746 0.963876" stroke="#7E7E7E"></path>
                </svg>
              </div>
            </div>
            <div id="under">
              <div id="data"></div>
              <div id="contact"></div>
            </div>
          </div>
        </div>
        <div id="runway"> 
          <div id="runway-way"></div>
          <div id="runway-time"> 
            <div class="guest"></div>
          </div>
          <div id="runway-client">
            <div class="guest">
              <span class="status"></span>
            </div>
          </div>
          <div id="runway-official-restart">重置行程</div>
          <div id="runway-finish"><b></b></div>
          <div id="runway-start"></div>
          <div id="runway-extend"></div>
          <div id="runway-next-lv">C3</div>
        </div>
      </div>
    </div>
    <div id="foo">
      <div class="f1">需要其他協助嗎?  請聯絡我們
        <div class="msg-board" onclick="GoLink('MessageBoard')" title="留言版"></div>
      </div>
      <div class="f2"><span class="f2-1">服務時間：週一～週六 10:00~12:30、13:30~17:30、18:30~22:00  |  02-2523-9777 / 0800-023-777 (限市話)</span><span class="f2-2">© 2020 Brainstorm Digital Communications Corp. All rights reserved. Privacy Policy</span></div>
    </div>
    <div id="runway-masker"></div>
    <div id="runway-lb">
      <div id="runway-close">╳</div>
      <div id="runway-title">請選擇預計升B1日期</div>
      <svg id="runway-month-prev" width="6" height="15" viewBox="0 0 6 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.05624 0.963867L0.710449 7.36398L5.05624 13.7641" stroke="#7E7E7E"></path>
      </svg>
      <svg id="runway-month-next" width="6" height="15" viewBox="0 0 6 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.756745 13.7641L5.10254 7.36399L0.756746 0.963876" stroke="#7E7E7E"></path>
      </svg>
      <div id="runway-date"></div>
      <div id="runway-btnbox">
        <div id="runway-cancel">取消</div>
        <div id="runway-send">開始!</div>
      </div>
    </div>
    <div class="is-hide" id="lbmasker"></div>
    <div class="is-hide" id="lb" data-edit="false">
      <div id="lb-left">
        <div id="edit-out">
          <div id="edit-title">
            <svg viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <rect width="20" height="20" fill="url(#pattern0)"></rect>
              <path d="M11.6873 18.4463C11.6881 18.3792 11.7035 18.3131 11.7324 18.2527C12.0668 17.4699 12.4012 16.6871 12.7355 15.9042C12.7661 15.8325 12.8104 15.7673 12.8658 15.7125C14.8623 13.7124 16.8586 11.7121 18.8547 9.71159C19.0553 9.51062 19.3149 9.50903 19.5163 9.70996C19.9613 10.1538 20.4055 10.5985 20.849 11.0438C21.0494 11.245 21.0505 11.5074 20.8506 11.7077C18.8511 13.7112 16.8513 15.7144 14.8513 17.7174C14.8012 17.7681 14.7417 17.8086 14.6761 17.8366C13.8907 18.173 13.1054 18.5096 12.3203 18.8465C12.0094 18.9793 11.6857 18.7728 11.6873 18.4463Z" fill="#5A5A5A"></path>
              <path d="M14.4186 16.9013C14.177 16.6589 13.9359 16.4172 13.6953 16.1763C13.6767 16.1578 13.6749 16.1449 13.6954 16.1284C13.7054 16.1195 13.7149 16.1101 13.7239 16.1002C15.1299 14.6914 16.5356 13.2823 17.941 11.8728C17.9801 11.8335 17.9982 11.833 18.0369 11.8726C18.2552 12.0955 18.4756 12.3164 18.6981 12.5352C18.7316 12.5683 18.7303 12.5851 18.6976 12.6178C17.2812 14.0352 15.8655 15.4532 14.4503 16.8718C14.4409 16.8811 14.4309 16.8899 14.4186 16.9013Z" fill="#EEEEEE"></path>
              <path d="M19.1521 12.1586C19.1421 12.1492 19.1326 12.1409 19.1238 12.1321C18.8941 11.902 18.6642 11.672 18.4342 11.4422C18.4091 11.4173 18.4095 11.4041 18.4342 11.3796C18.6757 11.1393 18.9164 10.8981 19.1561 10.656C19.1829 10.629 19.1961 10.6363 19.2187 10.659C19.4462 10.8881 19.6745 11.1165 19.9035 11.3442C19.9257 11.3663 19.9332 11.3789 19.9063 11.4056C19.6646 11.6457 19.4238 11.8868 19.184 12.1288C19.1746 12.1382 19.1646 12.147 19.1521 12.1586Z" fill="#EEEEEE"></path>
              <path d="M13.8795 17.2176L12.9645 17.6113C13.1 17.2946 13.2304 16.99 13.359 16.6897L13.8795 17.2176Z" fill="#EEEEEE"></path>
              <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlink:href="#image0" transform="translate(0 -0.005) scale(0.01)"></use>
                </pattern>
                <image id="image0" width="100" height="101" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABlCAYAAAC7vkbxAAAACXBIWXMAAC4jAAAuIwF4pT92AAAEA0lEQVR4nO2d0VHjMBCG927uHTqADqADQgXH+z5cSggVHHQAHeQe9h0quKSD0EHoACrgRsxmJmcsW5Ys8w/5v8d4vJH029JqtZa+vb29CcHhO7XAgoKAQUHAoCBgUBAwKAgYFAQMCgIGBQGDgoBBQcD4MVVxVHUuIlciciwiDyKyNLOXQpvHbnPuPy2D7ZHs7sr74jaXJTZTmSS4qKpbETlp/PwqIqcljaeq4d6jpl0zOy6wGe7dtth9NrPTXLupVO+yVHXWIoZ4hectv6fanbc02rtdv5ZLzO6J16UqU4whXZW4KrDbdW8tu19CkFp0dUvZXdZnQy8LDAoCRrGXparnPV1EGCR/Ra49icgi86/vRORsYrt/3LWO8WJmm8z/fSdLEPc2QoV/lvz5F+YxCGtmq6FVHCSI++hhUndx6C2eyDp4bUPmWsmCqGqYFG0iPjqJEybA52a2TWmjIYP6A8XI4sjbLokkQVT1pmOgI/2ceRv2kvqG5HosZGAb9o4h7lH9jVx+Dn9kZtFX0p+M35HLazPLCkeo6qrDuahl99bMok+6ql6529wWuwtc9nleKW9IV8VmXWIcGt4Wne3V1yQlM/V1qudwSHibrHOrPEXopMsHLxG0a0ZcMlvuKlPRwlcKUwjSFWooWYW7y7zWR63yJlFdEJ+lXrsDsCNMlu5zQgt7dsOTfOu29u3elnSlXqb7ht1Q9uvSpeEUJllTN7PwxN7trbhtxqicezw3O7slAjfsLtw7PB/TbgqTJTlIxYrVsOsPzGRC7OB6CBgUBIwqXVZq3KaDZXNg9kySkjScVbNr87GnJHFhO3a+Vq0xJBYqSWXVMh+Yj7AO0xwTZoVlXY/tCrPLAoOCgEFBwKAgYFAQMCgIGBQEDAoCBgUBo9ZM/bLw/rYVv0XhZwZtayTLwoju6OsjVQSpFA4vSmKO2NwWLiOPDrssMCgIGLXC76Wf9n5IKOtJYEvhQ5JbTxJfCtkJeTH4hoBBQcCgIGBQEDAoCBgUBAwKAgYFAYOCgFEr2pv9wYrTFkUtDS62BRGLPq4ZoUwfqBXtHX0bo5CRXsHmcopvPobALgsMCgIGk62ZbJ0Ek60JBhQEDAoCBgUBg4KAQUHAoCBgUBAwKAgYTLZmsnW2TSZbk2yy3+QUQWKv5YXv+0728DaJbanb28WldFld3c9KVRdor/0nctqz011vV5601XjkDCkyjKQzrFLHkNIFJ5K4D+SQzfg33G48myczSxpvh3hZMz+AhQzjacgycbIgvgfhzA8rIWk8+u7f458fso8nB+xOwuQRFv/zuneSad0Tdkh9OFMHg4KAQUHAoCBgUBAwKAgYFAQMCgIGBQGDgoBBQcCgIGBQECRE5B8KHV8gCZC1KwAAAABJRU5ErkJggg=="></image>
              </defs>
            </svg>安排課程
          </div>
          <div class="edit-subtitle is-bar1">自主學習</div>
          <div class="edit-box" data-skin="1">
            <div class="edit-item" data-sort="0">文章</div>
            <div class="edit-item" data-sort="1">影片</div>
            <div class="edit-item" data-sort="2">專欄</div>
            <div class="edit-item" data-sort="3">每週測驗</div>
            <div class="edit-item" data-sort="4">音樂</div>
            <div class="edit-item" data-sort="5">童話故事</div>
          </div>
          <div class="edit-subtitle is-bar2">互動學習</div>
          <div class="edit-box" data-skin="2">
            <div class="edit-item" data-sort="6">實力衝刺</div>
            <div class="edit-item" data-sort="7">寫作練習</div>
            <div class="edit-item" data-sort="8">會話練習</div>
            <div class="edit-item" data-sort="9">朗讀練習</div>
            <div class="edit-item" data-sort="10">研習營</div>
            <div id="edit-unedit">取消編輯</div>
          </div>
        </div>
        <div id="sticky">
          <div id="sticky-top"></div>
          <div id="sticky-middle"> <b>Hello </b><b>Funkey ,</b>
            <div id="sticky-msg">here</div>
          </div>
          <div id="sticky-bottom"></div>
        </div>
      </div>
      <div id="lb-right">
        <svg id="lb-close" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M-2.20633e-05 17.1979L16.1999 0.998006L17.9818 2.77991L1.78188 18.9798L-2.20633e-05 17.1979Z" fill="#7E7E7E"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1.80005 0.998026L18 17.198L16.2181 18.9799L0.0181453 2.77993L1.80005 0.998026Z" fill="#7E7E7E"></path>
        </svg>
        <div id="lb-above">
          <div class="weekmap">
            <div class="weekmap-title"></div>
            <div class="weekmap-main">
              <div class="weekmap-time">
                <div class="weekmap-area">04:00<br/>
                  <div class="weekmap-area-text">上午</div>
                </div>
                <div class="weekmap-area">12:00<br/>
                  <div class="weekmap-area-text">下午</div>
                </div>
                <div class="weekmap-area">18:00<br/>
                  <div class="weekmap-area-text">晚上</div>
                </div>
              </div>
              <div class="weekmap-cal">
                <div class="weekmap-week weekmap-tr"></div>
                <div class="weekmap-date weekmap-tr"></div>
              </div>
            </div>
          </div>
        </div>
        <div id="lb-under">
          <div id="edit-send">送出</div>
          <div id="edit-clean">清空</div>
        </div>
      </div>
    </div>
  </body>
</html>
<script>

  $.ajax({
    type:"POST",
    url:"./2020/memberbar.asp",
    dataType:"html",
    success:function(data){	
      $('#member').html(data);
    }
  });

  $.ajax({
    type:"POST",
    url:"./2020/databar.asp",
    dataType:"html",
    success:function(data){	
      $('#data').html(data);
    }
  });

  $.ajax({
    type:"POST",
    url:"./2020/contactbar.asp",
    dataType:"html",
    success:function(data){	
      $('#contact').html(data);
    }
  });   



</script>
