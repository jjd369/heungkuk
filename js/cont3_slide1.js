//cont3 슬라이드
$(function(){
	var pager = $('.cont3_box3 .slider .controls > a');
	var pic = $('.cont3_box3 .slider ul').find('li');
	var index = 0;
	var left = $('.cont3_box3 .slider a.left')
	var right = $('.cont3_box3 .slider a.right')
	
	pager.click(function(){
		index = $(this).index();
		pic.hide();
		pic.eq(index).stop().css({'display':'block','opacity':0}).animate({'opacity':1},500);
		pager.removeClass('on');
		$(this).addClass('on');
		return false;
	});

	left.click(function(){
		index--;
		if(index < 0){
			index = pager.length-1;
		}
		pager.eq(index).click();
		return false;
	});
	
	right.click(function(){
		index++;
		if(index > pager.length-1){
			index = 0;
		}
		pager.eq(index).click();
		return false;
	})
	pager.eq(0).click();

	var timer2 = setInterval(function(){
		right.click();
	},4000);
	
	$('.cont3_box3 .slider').hover(function(){
		clearInterval(timer2);
	},function(){
		timer2 = setInterval(function(){
		right.click();
	},4000);
	})
})