
	var preBodyStyle='';
	var	preBodyClass='';
	var bool_lightBox=false;
	

	
	function DIYLightBox(mode,boxWidth,boxHeight,ul,tamplet){
		$('.float-masker').remove();
		if(tamplet=='b'){
			DIYLightBoxL(mode,boxWidth,boxHeight,ul)
			return false;
		}	

		if($('#lightBoxDIY')!=undefined){
			closeBox()
		}
	  
		if 	(bool_lightBox==false){

			if ($('body').attr('style')==undefined){
				preBodyStyle=""
			}else{
				preBodyStyle = $('body').attr('style')
			}
			
			if ($('body').attr('class')==undefined){
				preBodyClass=""
			}else{
				preBodyClass = $('body').attr('class')
			}		
	
			$('body').attr('class','')
			$('body').attr('style','')
			$('body').attr('style','overflow:hidden;')
			
			// for #DIYBoxContent v
			const wh = $(window).innerHeight();
			const bh = Number( boxHeight.replace('px', '') );
			const mt = ( wh - bh ) / 2;

			// for #close v
			const deco = 15;
			const ww = $(window).innerWidth();
			const bw = Number( boxWidth.replace('px', '') );
			const left = ( ww - bw ) / 2 + bw - deco;
			const top = mt - deco;
			


				$('body').append('<div id="lightBoxDIY"  style="width:100%;height:100vh;background-color: rgba(0,0,0,0.8);position: fixed;z-index: 98;top:0px;left:0px;"></div>')
				$('#lightBoxDIY').append('<span id="DVLight"><div id="DIYBoxContent" style="padding:10px;margin:'+mt+'px auto 0;width:'+parseInt(boxWidth)+'px;height:'+parseInt(boxHeight)+'px;background-color:white;"></div></span>')
				$('#DIYBoxContent').append('<div id="close" onclick="closeBox();removeFloat()" style="position:absolute;top:'+top+'px;left:'+left+'px;background-color: grey;padding: 6px 8px;border-radius: 30px;font-size:14px;color: #000000;z-index:999; cursor:pointer;width:30px;text-align: center;font-family:arial;">X</div>')	


				if(mode=="iframe"){
					$('#DIYBoxContent').append('<iframe src="'+ul+'" width="100%" height="100%" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" ></iframe>')
				}else{
					$.ajax({
						url: ul,
						type:'GET',
						dateType:'html',
						error: function(data){
							//alert('data  error');
						},
						success:function(data){
							$('#DIYBoxContent').append(data)
						}			   
					});
				}
				
				$("#DVLight").draggable({ handle: "#DIYBoxContent" ,opacity:1});	
				bool_lightBox=true


		}
	
	
	}

	function DIYLightBoxAD(mode,boxWidth,boxHeight,ul,tamplet){
		console.log('%chere','color:yellow');
		$('.float-masker').remove();
		if(tamplet=='b'){
			DIYLightBoxL(mode,boxWidth,boxHeight,ul)
			return false;
		}	

		if($('#lightBoxDIY')!=undefined){
			closeBox()
		}
	  
		if 	(bool_lightBox==false){

			if ($('body').attr('style')==undefined){
				preBodyStyle=""
			}else{
				preBodyStyle = $('body').attr('style')
			}
			
			if ($('body').attr('class')==undefined){
				preBodyClass=""
			}else{
				preBodyClass = $('body').attr('class')
			}		
	
			$('body').attr('class','')
			$('body').attr('style','')
			$('body').attr('style','overflow:hidden;')
			
			// for #DIYBoxContent v
			const wh = $(window).innerHeight();
			const bh = Number( boxHeight.replace('px', '') );
			const mt = ( wh - bh ) / 2;

			// for #close v
			const deco = 15;
			const ww = $(window).innerWidth();
			const bw = Number( boxWidth.replace('px', '') );
			const left = ( ww - bw ) / 2 + bw - deco;
			const top = mt - deco;
			
			setTimeout(function(){

				$('body').append('<div id="lightBoxDIY" class="lightBoxAD" style="width:100%;height:100vh;background-color: rgba(0,0,0,0.8);position: fixed;z-index: 98;top:0px;left:0px;"></div>')
				$('#lightBoxDIY').append('<span id="DVLight"><div id="DIYBoxContent" style="padding:10px;margin:'+mt+'px auto 0;width:'+parseInt(boxWidth)+'px;height:'+parseInt(boxHeight)+'px;background-color:white;"></div></span>')
				$('#DIYBoxContent').append('<div id="close" onclick="closeBox();removeFloat()" style="position:absolute;top:'+top+'px;left:'+left+'px;background-color: grey;padding: 6px 8px;border-radius: 30px;font-size:14px;color: #000000;z-index:999; cursor:pointer;width:30px;text-align: center;font-family:arial;">X</div>')	


				if(mode=="iframe"){
					$('#DIYBoxContent').append('<iframe src="'+ul+'" width="100%" height="100%" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" ></iframe>')
				}else{
					$.ajax({
						url: ul,
						type:'GET',
						dateType:'html',
						error: function(data){
							//alert('data  error');
						},
						success:function(data){
							$('#DIYBoxContent').append(data)
						}			   
					});
				}
				
				$("#DVLight").draggable({ handle: "#DIYBoxContent" ,opacity:1});	
				bool_lightBox=true

			}, 2500);
		}
	
	
	}	

	function DIYLightBoxL(mode,boxWidth,boxHeight,ul){
		if($('#lightBoxDIY')!=undefined){
			closeBox()
		}
		
		  if (bool_lightBox==false){
			if ((mode!="iframe") && (mode!="ajax")){
				
			}else{
				if ($('body').attr('style')==undefined){
					preBodyStyle=""
				}else{
					preBodyStyle = $('body').attr('style')
				}
				
				if ($('body').attr('class')==undefined){
					preBodyClass=""
				}else{
					preBodyClass = $('body').attr('class')
				}		
		
				$('body').attr('class','')
				$('body').attr('style','')
				$('body').attr('style','overflow:hidden;')
				
				var boxTop ="35%"
				if (boxHeight!=""){
					boxTop = (0.5*(parseInt($('body').height())-parseInt(boxHeight))).toString()+"px"
				}
				
				$('body').append('<div id="lightBoxDIY"  style="position: fixed;top: 0;right: 0;bottom: 0;left: 0;background-color: rgba(255, 255, 255, 0.7);z-index: 98;"></div>')
				$('#lightBoxDIY').append('<div id="suClose" style="width: 40px;height: 40px;font-size: 2rem;font-weight: bold;display: flex;justify-content: center;align-items: center;background-color: #d9d9d9;border: solid 2px #333;border-radius: 50%;position: fixed;right: calc( 50% - 940px/2 + 15px );top: calc( 50% - 600px/2 + 15px );cursor: pointer;z-index:999;">╳</div>')	

  
				if(mode=="iframe"){
					$('#lightBoxDIY').append('<iframe src="'+ul+'" width="100%" height="100%" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" ></iframe>')
				}else{
					$.ajax({
						url: ul,
						type:'GET',
						dateType:'html',
						error: function(data){
							//alert('data  error');
					   },
						success:function(data){
							$('#lightBoxDIY').append(data)
						}			   
					});
				}
				
				//$("#DVLight").draggable({ handle: "#DIYBoxContent" ,opacity:1});	
				//bool_lightBox=true
			}
		  }
	  
	  
	}

	function DIYLightBoxFull(mode,ul){
      if($('#lightBoxDIY')!=undefined){
		  closeBox()
	  }
	  
		if 	(bool_lightBox==false){
		  if ((mode!="iframe") && (mode!="ajax")){
			  
		  }else{
			  if ($('body').attr('style')==undefined){
				  preBodyStyle=""
			  }else{
				  preBodyStyle = $('body').attr('style')
			  }
			  
			  if ($('body').attr('class')==undefined){
				  preBodyClass=""
			  }else{
				  preBodyClass = $('body').attr('class')
			  }		
	  
			  $('body').attr('class','')
			  $('body').attr('style','')
			  $('body').attr('style','position:absolute;overflow:hidden;width:100%;height:100vh')
			  var boxTop ="35%",boxheight=''
                boxTop =15+"px"
			   boxTop = (0.02*  parseInt($('body').height())  )+"px"
			    //boxheight = parseInt($('body').height()) - (0.1* parseInt($('body').height()))+"px"
				
			  $('body').append('<div id="lightBoxDIY"  style="width:100%;height:100vh;background-color: rgba(0,0,0,0.8);position: fixed;z-index: 98;top:0px;left:0px;"></div>')
			  $('#lightBoxDIY').append('<span id="DVLight"><div id="DIYBoxContent" style="margin:0 auto;top:'+boxTop+';width:90%;height:92%;background-color:white;" onclick="closeBox();removeFloat()"></div></span>')
			  $('#DIYBoxContent').append('<div id="close" onclick="closeBox();removeFloat()" style="position:absolute;top: -15px;right: -15px;background-color: grey;padding: 6px 8px;border-radius: 30px;font-size:14px;color: #000000;z-index:999; cursor:pointer; ">X</div>')	


			  if(mode=="iframe"){
				  $('#DIYBoxContent').append('<iframe src="'+ul+'" width="100%" height="100%" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" ></iframe>')
			  }else{
				  $.ajax({
					  url: ul,
					  type:'GET',
					  dateType:'html',
					  error: function(data){
						  //alert('data  error');
					 },
					  success:function(data){
						  $('#DIYBoxContent').append(data)
					  }			   
				  });
			  }
			  

			  bool_lightBox=true
		  }
		}
	
	
	}
	
	function closeBox(){
		$('#lightBoxDIY').remove()
		$('body').attr('class',preBodyClass)
		$('body').attr('style',preBodyStyle)
		bool_lightBox=false;
	};
	
	const removeFloat = function(){
		$('.float, .float-entrance').removeClass('is-float-open');
	}
