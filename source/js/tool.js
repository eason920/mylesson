// JavaScript Document

function GoLink(target,parameter){
   var url='../../../../myLesson/2020/link.asp';
		
	$.ajax({
	   url: url+'?'+parameter,
	   cache: false,
	   type:'POST',
	   data: {
	    target:target
	    },
	   dateType:'html',
	   error: function(data){
		   alert('Link Error');
		   },
	   success:function(data){
		   $('body').append(data)
		   }	
		   
	   });
	   
}


function Message_show(){	
   var	dds = Date.now();
	$.ajax({
	   url: '../../../../messageboard/?dd='+dds,		
	   type:'GET',
	   dateType:'html',
	   success:function(xml){
		   //alert(1)
        $('body').append(xml)
		   }	
		   
	   });
}

function bulletinIconUI(){
	var ui = '<div id="bulletinIcon" onclick="bulletinUI()" style="position:fixed;right: 20px;bottom: 70px;width: 50px;height: 50px;'
	ui += 'cursor: pointer;background-color: #ff7126;border-radius: 25px;background-image: url(\'../../../../library/Bulletin/images/paper-push-pin.png\');'
	ui += 'background-repeat: no-repeat;background-size: auto 50%;background-position: center;z-index: 5;box-shadow: 0px 3px 8px 0 rgba(255, 112, 42, 0.39);"></div>'
	$('body').prepend(ui)
	
}

function bulletinUI(){
	if($('#bulletinIframe').html()==undefined){
		var ui = '<div id="bulletinIframe" data-val="1" style="position: fixed;width: 100vw;height: 100vh;background-color: rgba(0,0,0,0.4);z-index: 30;">'
		ui += '<div style="border-radius:20px;position:fixed;width: 852px;height: 402px;top: calc(50vh - 225px);margin: 0 auto;left: 0;right: 0;">'
		ui += '<iframe src="../../../../library/Bulletin/bulletin.asp" width="100%" height="100%" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>'
		ui += '</div></div>'
		$('body').prepend(ui)
		
		//$( "#bulletinIframe" ).css('left','initial')
		//$( "#bulletinIframe" ).css('top','calc(50vh + 225px)')
		//$( "#bulletinIframe" ).animate({
			//opacity: 1,
			//top: "calc(50vh - 225px)",
			//right: "calc(50vw + 425px)"
		  //}, 1000, function() {
			//$( "#bulletinIframe" ).css('left','0')
			//$( "#bulletinIframe" ).css('right','0')
		//});
		//$('#bulletinIframe').show(700)
	}
}

function bullinIconRemove(){
	//$('#bulletinIframe').hide(700)
	//setTimeout(function (){
		$('#bulletinIframe').remove()
	//},1000)
}

function tutor_Eva(){
	if($('#EvaIframe').html()==undefined){
		var ui = '<div id="EvaIframe" data-val="1" style="position: fixed;top: 0px;width: 100vw;height: 100vh;background-color: rgba(0,0,0,0.4);z-index: 30;">'
		/*ui += '<div style="border-radius:20px;position:fixed;width: 720px;height: 480px;top: calc(50vh - 365px);margin: 0 auto;left: 0;right: 0;background-color:#F0F0F0;">'*/
		ui +='<div id="EaF" style="border-radius:20px;position:fixed;width: 680px;height: 480px;top: calc(50vh - 365px);margin: 0 auto;left: 0;right: 0;background-color:#89D4D2;cursor:pointer;">'
		ui += '<iframe  src="../../../../Tutor_Eva/" width="720px" height="440px" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" style="position:relative;left:10px;margin-top:10px;"></iframe>'
		ui += '</div></div>'
		/*ui += '</div>'*/
		$('body').prepend(ui)
		
	 $(function(){
        $("#EaF").draggable();
      });
					  
	} 
}


function tutor_EvaRemove(){
	$('#EvaIframe').remove()
}


/*


<div class="surveylb">
  <div class="surveylb-close"></div>
  <iframe src='https://www.surveycake.com/s/oY98W'>
</div>
*/