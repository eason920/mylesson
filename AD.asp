﻿ <%   
 response.Buffer = true   
 session.CodePage = 65001   
 response.Charset = "utf-8"
 %>
<!-- #include virtual="include/DBConnection.asp"-->
<%

 sql="SELECT * from member where  customer_id="&session("IP_indx")&" and indx="&session("indx")&" and (DATEDIFF(d, GETDATE(), enddate) >= 0) AND (DATEDIFF(d, startdate, GETDATE()) <= 30) and ispay=0 "
 rs.open sql,connection2,1,3
 if not rs.eof then
  onSale="1"
 end if
 rs.close
'onSale="0"

'if onSale="1" then
'  if  datediff("d",date(),"2017/9/10")>=0 then
'    Pic="CountDown/0901_mb_7.jpg"
'    link="location.href='https://goo.gl/R8fjxD'"
'  else
'    Pic="CountDown/0911_mb_7.jpg"
'    link="location.href='https://goo.gl/R8fjxD'"  
'  end if	  
'  Pic_str1="1023phone7_"
'  Pic_str2="1001phone7.png"
'  Pic_str3="1101mb7.png"
'  
'   Pic="CountDown/180102mbN.png"
'  link="location.href='buy'"   
'else
'  Pic_str1="1023phone_"
'  Pic_str2="1001phone.png"
'  Pic_str3="1101mb.png"
  
   
 if datediff("d",date(),"2018/3/26")>=0  then

   Pic="CountDown/180201mb.png"
 link="location.href='buy'"  
	

	
 elseif	 datediff("d",date(),"2018/3/27")<=0 then
    Pic="CountDown/180327mb.png"
 link="location.href='buy'"  
 end if
'end if

function Longin_times(id,cid)
 sql="SELECT  SUM(counts) AS c FROM  login_count WHERE (user_id = "&id&") AND (IP_index = "&cid&") GROUP BY  user_id" 

 set rs2=connection2.execute(sql)
 if not rs2.eof then
   Longin_times=rs2("c")
 else
   Longin_times=0  
 end if
 rs2.close
end function

'Pic="1016mobile-newspaper.jpg"
'link="location.href='../../wlfunday/pdf/007.pdf'"

Pic="CountDown/20181226MB.jpg"
link="location.href='../../../newmylessonmobile/NavigationPage'"


' Pic_str4="1207mb.png" 
'
'if datediff("d",date(),"2017/10/24")=0 then
' Pic="CountDown/"&Pic_str1&"7day.png"
' link="location.href='https://goo.gl/A1ZJpV'"   
'elseif datediff("d",date(),"2017/10/25")=0 then
' Pic="CountDown/"&Pic_str1&"5day.png"
' link="location.href='https://goo.gl/A1ZJpV'"    
'elseif datediff("d",date(),"2017/10/26")=0 then
' Pic="CountDown/"&Pic_str1&"5day.png"
' link="location.href='https://goo.gl/A1ZJpV'"    
'elseif datediff("d",date(),"2017/10/27")=0 then
' Pic="CountDown/"&Pic_str1&"3day.png"
' link="location.href='https://goo.gl/A1ZJpV'"    
'elseif datediff("d",date(),"2017/10/28")=0 then
' Pic="CountDown/"&Pic_str1&"3day.png"
' link="location.href='https://goo.gl/A1ZJpV'"    
'elseif datediff("d",date(),"2017/10/29")=0 then
' Pic="CountDown/"&Pic_str1&"1day.png"
' link="location.href='https://goo.gl/Kre5q4'"     
'elseif datediff("d",date(),"2017/10/30")=0 then
' Pic="CountDown/"&Pic_str1&"0day.png"
' link="location.href='https://goo.gl/Kre5q4'"  
'elseif datediff("d",date(),"2017/10/31")=0 then
' Pic="CountDown/"&Pic_str1&"0day.png"
' link="location.href='https://goo.gl/Kre5q4'"  
'elseif datediff("d",date(),"2017/10/16")>=0 then
' Pic="CountDown/"&Pic_str2
' link="location.href='https://goo.gl/Kre5q4'"      
'elseif datediff("d",date(),"2017/12/6")>=0 then
' Pic="CountDown/"&Pic_str3
' link="location.href='https://goo.gl/Kre5q4'"  
'elseif datediff("d",date(),"2017/12/7")<=0 then
' Pic="CountDown/"&Pic_str4
' link="location.href='https://goo.gl/Kre5q4'"       
'end if

'周末
'   weekchk=Weekday(date()) 
'   
'   if (weekchk="1" or  weekchk="7" or weekchk="6")  and request.Cookies("Ispay")<>"1" then
'    Pic="CountDown/0707weekM.png"
'    link="location.href='https://goo.gl/nt7fHe'"     
'   end if
ISpay="0"
Dim RandomInt
'註冊1,2日內
  sql="SELECT startdate,enddate,Ispay,Pdate from member where  customer_id="&session("IP_indx")&" and indx="&session("indx")
  rs.open sql,connection2,1,3
  if not rs.eof then
    ISpay=rs("Ispay")

    if  datediff("d",rs("startdate"),now())<=30 and rs("Ispay")="0" then  '註冊30日內並未付費
      Ltime=Longin_times(session("indx"),session("IP_indx"))

      'if Ltime<="3" and session("AD1")<>"4" then   '登入3次內
      'Pic="../../subscription/AD/ad_20190503_mobile.jpg"
      'link="location.href='../../NewMylessonmobile/member/'" 
      'closeLink="./AD.asp"
      'session("AD1")="4"         
      'else
      Pic="../../subscription/AD/20191017_mobile_3990.jpg"
      link="Fa(5,0,274);location.href='https://funday.asia/landing_reflink.asp?ad_id=1366'"  
      closeLink="../NewMylessonmobile/NavigationPage/"
      session("AD1")="" 
      'end if

    elseif  (rs("Ispay")="0") or (datediff("d",rs("enddate"),now())>0 and rs("Ispay")="1" ) then  '超過30並未付費 or 付費但過期
      Pic="../../subscription/AD/20191017_mobile_4790.jpg"
      link="Fa(5,0,274);location.href='https://funday.asia/landing_reflink.asp?ad_id=1366'" 
      closeLink="../NewMylessonmobile/NavigationPage/"
    else
      'Pic="../../subscription/AD/FUNDAY_mb_buy_page_popup_plan_4.jpg"
      'link="location.href='../../subscription/product'"     

      if datediff("d",rs("Pdate"),now())<=0 then 

        sql = "select b.levels from  member_levels b where  b.member_id = '"&session("indx")&"'"
        set rstop = connection2.execute(sql)
        if not rstop.eof then
            levels_numX=rstop("levels")       
        end if

        if levels_numX>="2" then


          Randomize
          RandomInt = Int((2 - 1 + 1) * Rnd + 1)
          if RandomInt="1" then
            Pic="../../subscription/AD/Certifications-MB.jpg?1100611"
            link="location.href='../NewMylessonmobile/?topic=extPractice'"
          else
            Pic="../../subscription/AD/popad_mobile_magazine_15.jpg"
           'link="location.href='../NewMylessonmobile/Magazine/list.asp?SN=2020060018'" 
            link="return false;"
          end if
          closeLink="../NewMylessonmobile/NavigationPage/"
        else
          Pic="../../subscription/AD/popad_mobile_magazine_15.jpg"
          'link="location.href='../NewMylessonmobile/Magazine/list.asp?SN=2020060018'" 
          link="return false;"
          closeLink="../NewMylessonmobile/NavigationPage/"         
        end if

      else

          Randomize
          RandomInt = Int((2 - 1 + 1) * Rnd + 1)

        ' if RandomInt="1" then
        ' Pic="../../newmylessonmobile/countdown/20190114_paper_mobile.png"
        '  link="location.href='../../wlfunday/pdf/008.pdf'"
        ' elseif RandomInt="2" then
          Pic="../../subscription/AD/popad_mobile_magazine_15.jpg"
          'link="location.href='../NewMylessonmobile/Magazine/list.asp?SN=2020060018'" 
          link="return false;"
          closeLink="../NewMylessonmobile/NavigationPage/"
        ' end if
      end if

      Pic="../../subscription/AD/2021newyear-mb.jpg"
      link="return false;"
      closeLink="../NewMylessonmobile/NavigationPage/"
    
    end if


  else

    Pic="../../subscription/AD/FUNDAY_mb_buy_page_popup_plan_4.jpg"
    link="Fa(5,0,274);location.href='../../subscription/product'" 
    closeLink="../NewMylessonmobile/NavigationPage/"
  end if
  rs.close 



Ta=Array("1292","2107","4094","4097","5752","5827","7028","7032","7086","7681","8658","12966","13216","15913","16193","17793","17952","18597","18838","18976","19055","19248","19748","19909","20288","20763","20816","21029","21162","21290","21424","22094","23408","24655","24663","26836","26990","27546","27910","28109","28161","28561","29001","29808","29911","30234","30304","30465","30804","30891","30933","31034","31445","31564","31958","32001","32371","32469","32528","33299","33391","33593","34024","35983","36181","36251","36358","36385","36429","36581","36617","38230","38299","38496","38660","38734","39854","40200","40272","40521","41304","41478","41684","41851","42504","42771","43485","43599","43659","43665","43669","44381","44678","44762","44978","45605","45858","46114","46141","46835","46928","47265","47399","47427","47750","47992","48082","48224","48252","48326","48471","49161","49214","49521","49702","50003","50022","50335","51168","51565","51877","52118","52260","52422","52535","52680","52990","52992","53169","53261","53357","53394","53402","53677","53698","53854","53945","54025","54027","54134","54525","54616","54620","54634","54824","55050","55053","55334","55337","55894","55969","56121","56161","56212","56393","56908","56955","57125","57163","57239","57242","57487","57975","58007","58167","58505","58574","58781","58867","58964","59151","59245","59421","59495","59503","59735","60119","60307","60486","60539","60545","60575","60731","61221","61384","61502","61661","61683","61787","61815","62039","62560","62584","62749","62765","62922","62964","63025","63078","63081","63278","63302","63403","63432","63487","63844","63972","64263","64279","64367","64510","64604","64779","65014","65023","65070","65119","65161","65299","65599","65679","65686","66026","66065","66521","66619","66647","66658","66748","66819","67128","67390","67391","67393","67431","67450","67503","67774","67837","67841","67861","67882","67901","67934","68056","68140","68238","68284","68298","68426","68519","68622","68651","68721","68801","68814","68872","68973","69479","69718","69803","69810","69826","69921","70108","70284","70395","70585","70858","70877","70943","70995","71130","71346","71584","71599","71983","72157","72472","72727","72805","72851","72895","72977","73020","73504","73801","73843","73903","74053","74232","74356","74565","74824","75012","75138","75161","75484","75635","75662","75747","75808","75853","75909","75938","76291","76315","76617","76643","76893","76920","76943","77106","77127","77146","77356","77628","77738","77891","77978","78020","78116","78201","78250","78406","78407","78728","78821","78987","79066","79094","79312","79539","79582","79713","79800","79879","80220","80396","80441","80786","80959","81102","81128","81131","81353","81379","81422","81579","81834","82136","82164","82291","82517","82584","82792","82828","82854","82906","82962","83362","83603","83718","83914","84163","84832","85195","85286","85304","85471","86012","86100","86277","86407","86454","86470","86534","86593","86639","87778","87819","88288","88329","88454","88674","88692","88942","89049","89377","89690","89903","89986","90012","90313","90686","90876","90886","90989","91076","91081","91087","91353","91494","91926","92069","92184","92256","92509","92513","92838","92990","93005","93365","93428","93598","93661","93742","94169","94197","94395","94525","94711","94944","95117","95362","95479","95482","95548","95551","95615","95656","95896","95930","96254","96444","96466","96495","96639","96742","96877","97015","97050","97220","97259","97301","97306","97467","98047","98062","98120","98634","98883","98903","99169","99633","99649","99778","99782","99873","100062","100169","100224","100543","100605","100820","100956","100981","101117","101141","101149","101284","101399","101451","101478","101482","101484","101591","101658","101743","101775","101777","101822","101871","101962","102148","102173","102340","102448","102829","103224","103423","103739","103893","104136","104283","104651","104680","104919","104926","105427","105532","105556","105585","105623","105635","105676","105681","105959","105964","106094","106355","106540","106709","106839","106853","106855","106943","106990","107493","107622","108037","108194","108247","108279","109222","109428","109534","109557","110166","110244","110284","110529","110685","110794","110864","110958","111059","111166","111331","111541","111704","111751","111810","111948","112012","112327","112660","112833","112865","113266","113588","113640","113661","113809","113975","114158","114424","114625","114663","115178","115313","115408","115495","115531","116038","116116","116119","116267","116354","116401","116623","116675","116711","116864","116942","116954","116968","117139","117146","117166","117242","117283","117321","117593","118174","118234","118359","118503","118834","118873","119122","119342","119442","119474","119812","120074","120119","120196","120216","120320","120447","120461","120476","120508","120571","120622","120703","120825","120980","120985","120989","121111","121250","121298","121786","121847","121933","121980","122102","122447","122479","122724","122795","122952","123268","123361","123374","123580","123687","123802","123826","124010","124040","124232","124246","124407","124672","124775","124801","124978","125102","125194","125422","125476","125674","125890","125936","126050","126057","126100","126157","126344","126555","126639","126667","126809","126896","126913","126993","127453","127461","127514","127568","127665","127961","128125","128129","128498","128574","128698","129537","129799","129842","129988","130211","130272","130378","130451","130597","130602","130694","130740","131018","131291","131370","131536","131798","131972","132064","132317","132574","132878","133031","133145","133869","134008","134474","134569","134785","134881","134906","135120","135169","135384","135388","135428","135698","135924","136086","136229","136236","136242","136353","136355","136574","136650","136783","136986","137424","137541","137776","137821","138003","138139","138172","138246","138274","138322","138480","138633","138937","139021","139361","139679","139732","139836","139987","140244","140284","140688","140732","141019","141080","141261","141491","141537","141722","142219","142233","142678","143273","143363","143485","143489","143529","143692","143902","144275","144828","145352","145554","145577","145587","145855","146209","146256","146333","146354","146365","146720","146893","147098","147154","147480","147585","147662","147677","147690","147906","148153","148241","148278","148471","148892","148959","149042","149220","149386","149511","149536","149983","150014","150042","150046","150091","150129","150274","150290","150363","150414","150468","150511","150528","150789","151206","151265","151464","151482","151810","151966","152064","152184","152402","153174","153744","153787","154156","154175","154382","154685","154724","155129","155150","155244","155611","155692","155777","155951","156199","156225","156252","156350","156420","156424","156493","156872","156897","157506","158020","158065","158066","158236","158305","158338","158751","158996","159300","159472","159644","159960","160245","160354","160440","160646","160785","161154","161512","162083","162294","162555","162740","162747","162995","163155","163169","163308","163566","163697","163811","163955","164214","164217","164466","164515","164748","164970","164985","165268","166133","166375","166586","166651","166674","166994","167090","167236","167284","167289","167832","167895","168107","168215","168242","168246","168252","168530","168815","168966","169197","169215","169466","169563","169717","169933","170031","170169","170234","170272","170890","170986","171491","171903","171938","171940","172296","172303","172559","172812","172839","173039","173140","173142","173199","173304","173313","173507","173554","173783","173807","173937","174208","174224","174237","174314","174344","174459","174462","174647","174902","174984","175138","175498","175695","175773","176040","176199","176484","176510","176618","177230","177264","177574","177661","177687","177751","178057","178108","178118","178242","178567","178718","178770","179080","179113","179921","180106","180157","180372","180414","180467","180517","180539","180546","180704","180969","180981","181122","181160","181195","181234","181356","181366","181431","181569","181570","181640","181641","181965","181996","182159","182249","182286","182540","182607","182627","182833","182946","183110","183140","183313","183316","183755","183843","183963","184255","184297","184406","184515","184787","185097","185450","185556","185719","186090","186145","186355","186798","186941","187286","187365","187395","187437","187453","187613","187647","187688","187718","187780","187783","187990","188128","188148","188213","188422","188431","188617","188637","188649","188798","188809","188886","188943","189097","189098","189111","189209","189210","189365","189592","189669","189868","189902","189971","190050","190053","190063","190159","190498","190793","190908","191569","191724","191990","192037","192067","192257","192280","192325","192328","192366","192679","192911","192921","192977","192985","193046","193087","193105","193477","193528","193540","193948","194029","194110","194131","194149","194300","194410","194445","194511","194707","194808","194945","194977","194989","195100","195171","195331","195543","196009","196148","196434","196600","196889","197245","197250","197571","197778","198056","198092","198110","198174","198318","198437","198498","198686","198753","198781","199155","199302","199844","199903","200180","200183","200336","200397","200574","200608","200712","200800","200923","201193","201363","201531","201685","201696","201742","201810","201830","201840","201968","202047","202059","202062","202129","202295","202386","202568","202624","202753","202963","203764","203902","203925","204027","204109","204628","204799","204898","205099","205162","205208","205287","205473","205717","206022","206127","206227","206300","206313","206467","206492","206602","207314","207404","207455","207822","208031","208081","208182","208253","208462","208578","209294","209443","209458","209492","209513","209534","209788","209866","209896","210020","210078","210320","210369","210372","210383","210684","210836","211130","211188","211296","211415","211647","211783","211841","211909","212043","212192","212282","213234","213268","213425","213488","213781","213983","214413","214488","214493","214594","214854","215065","215079","215122","215144","215320","215797","215810","215975","216016","216048","216092","216113","216271","216294","216361","216599","216623","216731","216747","216761","216882","216972","217039","217087","217378","217398","217441","217669","217798","218038","218181","218300","218464","218518","218562","218695","218739","218785","218820","219058","219086","219095","219261","219301","219357","219479","219492","219599","219846","220171","220386","220745","220919","221062","221078","221407","221568","221889","222058","222494","223418","223515","223733","223843","223903","224037","224466","224473","224492","224567","224610","224771","224891","225234","225399","225469","225598","225877","225974","226055","226402","226436","226459","226487","226639","226700","226884","226901","227088","227120","227413","227612","227640","228045","228110","228627","228901","228939","229036","229044","229339","229530","229860","230025","230280","230333","230343","230565","230791","230792","230922","230957","231081","231144","231916","231967","232016","232209","232248","232372","232464","232569","232641","232950","233038","233163","233355","233398","233761","233800","234012","234017","234151","234196","234574","235136","235345","235431","235670","236263","236307","236355","236428","236480","236586","236795","236958","237037","237474","237530","237539","237542","237820","237859","238012","238177","238404","238924","238948","239257","239356","239390","239428","239480","239578","239725","239780","240183","240316","240794","241241","241404","241532","241747","241762","242272","242558","242705","242984","243134","243553","243697","244377","244472","244709","244966","245041","245615","245687","245832","245846","246019","246245","246254","246298","246322","246361","246474","247150","248000","248017","248022","248320","248471","248498","248544","248729","249185","249224","249276","249304","249420","249505","249592","249814","249839","249848","250074","250184","250186","250273","250569","250883","251016","251019","251270","251467","251558","251918","252022","252242","252440","252658","252956","253018","253024","253180","253215","253222","253498","253589","253851","254050","254074","254280","254339","254463","254553","254610","254716","254814","255055","255074","255246","255284","255301","255404","255450","255535","255846","255912","255928","255987","256028","256243","256255","256841","256895","257030","257074","257316","257435","257636","257936","258087","258130","258236","258245","258282","258380","258647","258725","258930","259158","259207","259216","259466","259532","259623","260120","260256","260755","260871","260976","261234","261308","261647","261698","261809","261941","261981","262277","262652","262691","262733","262918","263162","263221","263523","263532","263582","263751","263836","263926","264032","264241","264252","264737","264779","264808","265246","265605","265656","265868","266044","266087","266269","266363","266364","266479","266651","266869","266993","266997","267023","267362","267687","267772","268076","268102","268120","268240","268267","268512","268683","268784","268950","268994","269162","269190","269295","269307","269366","269546","269795","269957","270187","270368","270553","270786","271137","271201","271445","271451","271453","271918","271922","271986","271989","272076","272112","272149","272244","272316","272693","272793","273326","273533","273637","273701","273725","273815","273904","274341","274378","274596","274617","274643","274747","274753","274770","274807","275159","276358","276456","276839","277056","277116","277137","277206","277268","277300","277416","277424","277508","277698","277722","277777","277991","277993","278172","278207","278272","278598","278622","278675","278797","279073","279194","279431","279486","279529","279658","279685","279735","279834","279891","279981","280202","280377","280387","280404","280702","281386","281411","281604","281654","281731","281812","281890","281920","282043","282061","282231","282383","282500","282641","282841","282844","282966","283059","283132","283174","283225","283431","283884","283915","283980","284253","284356","284413","284658","284740","284746","284888","285189","285278","285639","285955","286024","286340","286395","286558","286643","286658","286710","286897","286997","287295","287680","287693","287725","288000","288044","288115","288147","288922","288966","289086","289100","289125","289279","289367","289392","289401","289603","289744","290131","290311","290366","290573","290700","290735","290775","291337","291365","291373","291401","291450","291518","291562","291592","291651","292011","292112","292180","292252","292515","292557","292561","292565","292638","292651","292934","293076","293193","293194","293313","293381","293461","293528","293602","293818","293927","293974","294083","294137","294163","294313","294472","294493","294511","294607","294624","294820","294975","295205","295544","295605","295609","295788","296143","296182","296285","296333","296846","297035","297323","297339","297343","297358","297588","297632","297650","297833","298060","298156","298168","298248","298343","298423","298555","298757","298823","299149","299167","299295","299297","299685","299999","300004","300114","300138","300365","300368","300609","300841","300899","301214","301310","301440","301656","302253","302654","302688","302704","302754","302898","303222","303254","303484","303606","303695","303857","304057","304231","304510","304624","304738","304739","304753","304904","305043","305098","305214","305233","305554","305669","305865","306195","306334","306535","306629","307023","307148","307237","307314","307578","307788","307797","308438","308503","308595","308603","308625","308871","309571","309948","309956","310254","310318","310567","310635","311304","311327","311402","311463","311603","311609","312459","312628","312747","312811","313313","313452","313521","313551","313632","313950","314242","314254","314314","314649","314765","314795","314944","315049","315092","315104","315127","315303","315530","315675","315928","317374","317614","317645","317784","317800","318062","318095","318471","318627","318699","319272","319438","319445","320420","320562","320660","320686","320719","320840","320869","320878","320934","321026","321029","321109","321145","321146","321870","322173","322410","322595","322649","322996","323160","323223","323345","323843","324334","324383","324520","324673","324923","324934","325019","325073","325094","325134","325230","325532","325655","325746","325876","326073","326588","326606","326747","327002","327133","327138","327229","327302","327332","327397","327436","327550","327856","327995","328250","328780","328887","329031","329071","329181","329182","329343","329459","329692","329919","330335","330378","330399","330417","330598","330907","331231","331285","331560","331821","331834","331916","332281","332524","332904","332953","332991","333458","333694","333703","333792","334791","334820","335149","335234","335275")

  For Each x In Ta
    if session("indx")=int(x) then
      'Pic="../../subscription/AD/Certifications-MB2.jpg"
      'link="window.open('https://www.facebook.com/GoldenFunday')"
      Pic="../../subscription/AD/2021newyear-mb.jpg"
      link="return false;"
    end if
  Next

  Pic="../../subscription/AD/Certifications-MB.jpg?1100611"
  link="location.href='../NewMylessonmobile/?topic=extPractice'"

session("ADcheck")="1"
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" href="https://code.jquery.com/mobile/1.3.2/jquery.mobile-1.3.2.min.css" />
<link rel="stylesheet" href="https://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" />
<link rel="stylesheet" href="css/b.css" />
<link rel="stylesheet" href="./css/lightbox_ad_mb.css?<%=Timer()%>"/>
<script src="https://code.jquery.com/jquery-1.9.1.min.js"></script>
<script src="https://code.jquery.com/mobile/1.3.2/jquery.mobile-1.3.2.min.js"></script>
<script src='../../../../Funfa/Fa.js'></script>
<script  src="../../jquery.cookie.js"></script>
<script  src="../../jquery-animate-clip.js"></script>
<meta name="viewport" content="width=device-width,height=device-height,minimum-scale=1,maximum-scale=1"/>
<title>FUNDAY announce</title>
</head>
<script>
var Wem=parseInt($(window).width());
var Hem=parseInt($(window).height());

function gcd(m,n) {
    while(n != 0) { 
        var r = m % n; 
        m = n; 
        n = r; 
    } 
    return m;
}

function lcm(m,n) {
    return m * n / gcd(m, n);
}


</script>
<style>
#aag img{max-width:100%}
</style>
<body>

<div style="position:absolute; top:0px; left:0px; width:100%; height:100%; background:#000; text-align:center; padding-top:0px;background-image: url('<%=Pic%>');background-position:center center;background-size:cover;background-repeat: no-repeat;" >
 <div style="position:fixed; top:5px; left:90%; z-index:2;"><a href="<%=closeLink%>" rel="external" and data-ajax="false"><img  src="AD/關閉.png" align="middle" border="0"/></a></div>
<!--<span style="position:fixed; top:46%; left:40%; z-index:3; color:#F00; padding:5px 5px 5px 5px; background-color:#fff; border:1px #000000 solid; border-radius:5px;" onclick="location.href='../NewMylessonmobile/Buy'">立即訂閱</span>-->

<div style="position:fixed;top: 8vh;width: 100%;height: 92vh;z-index:3;color:#F00;padding:5px 5px 5px 5px;border-radius:5px;" onclick="<%=link%>"></div>

<!--<a href="../NewMylessonmobile/intro.asp" rel="external" and data-ajax="false"><img id="ADP" src="CountDown/<%=Pic%>" align="middle"  height="100%" border="0"/></a>-->
<!--<a href="../NewMylessonmobile/intro.asp" rel="external" and data-ajax="false"><img id="ADP" src="AD/手機登入廣告.jpg" align="middle"  width="100%" border="0"/></a>-->
<!--<a href="intro.asp" rel="external" and data-ajax="false"><img id="ADP" src="AD/系統維護通知-20140815.jpg" align="middle"  width="100%" border="0"/></a>-->
</div>
</body>
</html>
<Script>

if (!window.addEventListener) {
  window.attachEvent('onload', setOrientation);
  window.attachEvent('orientationchange', setOrientation); 
}
else {
   window.addEventListener('load', setOrientation, false);
   window.addEventListener('orientationchange', setOrientation, false); 
}


function setOrientation() {
var orient;
if (window.orientation) { 
orient = Math.abs(window.orientation) === 90 ? 'landscape' : 'portrait';
}
else if (window.screen) {
var width = screen.width;
var height = screen.height;
orient = (width > height) ? 'landscape' : 'portrait';
}
else {
orient = 'unknow';
}
//var item = document.getElementsByTagName('p')[0];
//item.className = orient; 
//alert(orient)
if(orient=='portrait'){
//  $('#ADP').height(Hem*0.95+'px')
}else if(orient=='landscape'){
// $('#ADP').height(Wem*0.8+'px')
}


}

</script>
