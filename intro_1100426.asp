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
    <title>My Lesson page1</title>
    <link href="./2020/css/mylesson_1.css?<%=Timer%>" rel="stylesheet"/>
    <link href="./2020/css/mylesson_1_status.css?<%=Timer%>" rel="stylesheet"/>
    <!--link href="./2020/assets/plugins/perfect-scrollbar-master/perfect-scrollbar.css" rel="stylesheet"/>
    <style>
      /* v scrollbar 是否永遠顥示的跟據，而且一定要放外面，不可寫到 .css 中 v */
      .ps__rail-x, .ps__rail-y {
      	opacity: 0.6;
      }
      /* ^ scrollbar 是否永遠顥示的跟據，而且一定要放外面，不可寫到 .css 中 ^ */
    </style-->
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" ></script>
    <script src="https://code.jquery.com/ui/1.11.2/jquery-ui.js"></script>
    <script>
      $(()=>{
      	$('.label-item').click(function(){
      		const status = $(this).attr('data-status');
      		$('.label-item').removeClass('active');
      		$(this).addClass('active');
      		if( status == '0'){
      			$('#status-vue').fadeOut();
      		}else{
      			$('#status-vue').fadeIn();
      		};
      	});

        //$('.label-item[data-status="1"]').click();
      });
    </script>
    <!--script src="./2020/assets/plugins/chart-js/Chart-2.7.2.min.js"></script-->
    <!--script src="./2020/js/mylesson_pie.js"></script-->
    <!--script src="./2020/js/mylesson_radar.js"></script-->
    <!--script src="./2020/assets/plugins/perfect-scrollbar-master/perfect-scrollbar.min.js"></script-->
    <script src="../../jquery.cookie.js"></script>    
    <script src="../../js/MessageVer2/alert.js" type="text/javascript"></script>        
    <!--script src="./2020/assets/plugins/jquery-ui/1.12.1.js"></script-->
    <script src="./2020/assets/plugins/jquery-ui/i18n/datepicker-zh-TW.js"></script>
    <script src="./2020/assets/plugins/jquery-circle-progress/jquery-circle-progress.js"></script>
    <!-- <script src="./2020/js/week_ary.js"></script> -->
    <!--script src="./2020/js/mylesson_status.js"></script-->
    <script src="./2020/js/mylesson.js?<%=Timer%>"></script>
    <script src="./2020/js/week_map.js?<%=Timer%>"></script>
    <script src="./2020/js/lb.js?<%=Timer%>"></script>
    <script src="./2020/js/face_map.js?<%=Timer%>"></script>
    <script src="./2020/js/play.js?<%=Timer%>"></script>

    <script src="../../js/Uinfo.js"></script>
    <script src="./2020/js/lightBoxDIY-V2.js?<%=Timer%>"></script>    
    <script src="./2020/js/tool.js?dd=<%=now%>"></script>    
  <style>
    .nav-float-item.is-announce{display: none}
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
        $('.DivScores').html('<iframe src="https://exchange.funday.asia/pointnew/?indx=<%=session("indx")%>&key1=<%=pass1%>" width="100%" height="100%" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="yes"></iframe>');  
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
    function weekly(id){
      $('html').append('<div id="newsdiv" style="position:fixed; top:0px;left:0px; width:100%;height:100%;z-index:99;"><iframe src="../../funtest/Ans.asp?indx='+id+'"  width="100%" height="100%" frameborder="no" border="0" marginwidth="0" marginheight="0" ></iframe></div>')
    }
  </script>
  </head>

  <body>
    <div id="nav">
      <div class="wrapper">
        <!-- #include virtual="Self-Study/header_mylesson.asp"-->
      </div>
    </div>
    <div id="content">
      <div class="wrapper">
        <div id="main">
          <a href='intro3.asp' id="prev-page">
            <svg fill="none">
              <path d="M19 2L2 23.5L19 45" stroke="#354e85" stroke-width="4"></path>
            </svg>
          </a>
          <a href="intro2.asp" id="next-page">
            <svg fill="none">
              <path d="M2 2L19 23.5L2 45" stroke="#354e85" stroke-width="4"></path>
            </svg>
          </a>
          <div id="member"></div>
          <div id="right">
            <div id="label"><div class="label-item active" data-status="0">每週課表</div><div class="label-item" data-status="1">學習狀況</div></div>
            <iframe id="status-vue"></iframe>
            <!--iframe id="status-vue" src="./2020/intro_vue.html"></iframe-->
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
      <div class="f2"><span class="f2-1">服務時間：週一～週日14:00~17:30、18:30~22:00  |  02-2523-9777 / 0800-023-777 (限市話)</span><span class="f2-2"></span></div>
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
  if( /chart/.test(location.href) ){
    setTimeout(()=>{
      $('.label-item[data-status="1"]').click();
    },1000);
  };

  $(".f2-2").text('© ' + new Date().getFullYear() + ' Brainstorm Digital Communications Corp. All rights reserved. Privacy Policy');

  $.ajax({
    type:"POST",
    url:"./2020/memberbar.asp",
    dataType:"html",
    success:function(data){	
      $('#member').html(data);
      const text = $('.Mnameb span').text();
      $('#runway-client .guest').attr('title', text);

      const lv = $('.Mlv').text().split('-')[0];
      $('#status-vue').attr('src', './2020/intro_status_vue.asp?' + lv );
      // <iframe id="status-vue" src="./2020/intro_status_vue.asp"></iframe>
    }
  });

  $.ajax({
    type:"POST",
    url:"./2020/databar_1100426.asp",
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
