$(function(){
	var pager2 = $('.cont3_box2 .slider .controls > a');
	var pic2 = $('.cont3_box2 .slider ul').find('li');
	var index1 = 0;
	var left2 = $('.cont3_box2 .slider a.left');
	var right2 = $('.cont3_box2 .slider a.right');
    var playOn = false;
    var roll;//자동플레이를 위한 설정된 값
    pic2.hide();
      		
	function play(){
      if(!playOn){
    playOn = true;
    roll = setInterval(function(){
      right2.click();
    },5000);
   }
    }
    function stop(){
      if(playOn){
		playOn =false;
		clearInterval(roll);
		}
    }

	 pager2.click(function(){
     stop();
	  index1 = $(this).index();//0~3
	  pic2.hide();
	  pic2.eq(index1).stop().css({'display':'block','opacity':0}).animate({'opacity':1},500);
		pager2.removeClass('on');
		$(this).addClass('on');
		
	  play();
	  return false;
    }); 

	left2.click(function(){
		index1--;
		if(index1 < 0){
			index1 = pager2.length-1;
		}
		pager2.eq(index1).click();
		return false;
	});
	
	right2.click(function(){
		index1++;
		if(index1 > pager2.length-1){
			index1 = 0;
		}
		pager2.eq(index1).click();
		return false;
	})
	    //play()
       $('.play').click(function(){
      play();
   return false;
    });

    //stop()
     $('.stop').click(function(){
      stop();
   return false;
    });

    //시작하기
       pager2.eq(index1).click();
})