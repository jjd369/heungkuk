$(function(){
	/*gnb 데스크탑*/
	var gnbLi = $('.gnb > ul > li > a')
	var sub = $('#header .gnb .sub');
	var min = $('.header_wrap').height();
	var max 
		//main menu click js 
	gnbLi.on("mouseenter click",function(){
		max = $(this).next().height()+min;
		console.log('.sub:nth-child(3)');
		$('.header_wrap').stop().css('box-shadow','10px 10px 20px 1px rgba(0, 0, 0, .2)').animate({height:max},'fast','swing');
		sub.hide();	
		$(this).next('div').css({display:'flex'});
		gnbLi.removeClass('on');
		$(this).addClass('on');
		})
		
	$('.header_wrap').mouseleave(function(){
		console.log('mouseleave');
		sub.stop().css({display:'none'});
			$('.header_wrap').stop().css('box-shadow','none').animate({height:min},'fast','swing');
			gnbLi.removeClass('on');
		
		$('.sub > dl > dd').removeClass('on');
		$('.sub > dl > dd').find('ul').slideUp(400);
	});

	// sub menu js
	$('.gnb .sub_sub').parent().find('a:eq(0)').append('<span><img src="img/more_under.png" alt="more"/></span>')
	console.log($('.sub_sub').parent().next('a'))

	$('#header .gnb .sub > ul > li>ul >li').click(function(){
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$(this).find('ul').slideUp(400);	
		}else{
			$('#header .gnb .sub > ul > li>ul >li').removeClass('on');
			$('#header .gnb .sub > ul > li>ul >li').find('ul').css('display','none');
			$(this).addClass('on');
			$(this).find('ul').slideDown(400);
		}
	})
});