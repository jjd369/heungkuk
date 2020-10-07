//비쥬얼 슬라이드 
$(function(){
	
	let dot_nav = true;
	let slider_wrap = $('.v_slider_wrap');
	let btn_l =$('.v_slider_button > a:eq(0)');
	let btn_r =$('.v_slider_button > a:eq(1)');
	let slide=$('.v_slider_wrap > div');
	let current_slide = 0;

	//slide wrap의 전체 넓이 
	$('.v_slider_wrap').css({width:100*(slide.length+1)+'%'});
	//slide 넓이
	slide.css({width:100/(slide.length+1)+'%'});
	// slider-0 복제
	slide.eq(0).clone().appendTo(slider_wrap);
	//arrow right click 
	btn_r.on('click',function(){
		 
		if(current_slide < slide.length){
			current_slide++;
			//마지막 슬라이드에서 클릭시
			if(current_slide == slide.length){
				slider_wrap.animate({
					left:-(current_slide)*100+'%'
				},250,function(){
					$(this).css({left:'0%'})
				})
				current_slide=0;
			}else{
				slider_wrap.animate({left:-(current_slide)*100+'%'},250)
			}

			//도트 = ture 
			if(dot_nav){
				$(".dot").each(function(){
					if($(this).hasClass('active'))
						$(this).removeClass('active')
				})

				$(".dot-"+current_slide).addClass("active")
			}
		}
	})
	//arrow left click 
	btn_l.on('click',function(){
		 
		if(current_slide >= 0){
			current_slide--;
			//마지막 슬라이드에서 클릭시
			if(current_slide == -1){
				slider_wrap.css({left:'-'+(slide.length*100)+'%'})
				current_slide=slide.length-1;
				slider_wrap.animate({left:-(current_slide*100)+'%'},250);
			}else{
				slider_wrap.animate({left:-(current_slide)*100+'%'},250);
			}

			//도트 = ture 
			if(dot_nav){
				$(".dot").each(function(){
					if($(this).hasClass('active'))
						$(this).removeClass('active')
				})

				$(".dot-"+current_slide).addClass("active")
			}
		}
	})

	//dot 추가
	if(dot_nav){
		for( let i=0;i<slide.length;i++){
			if(i==0){
				$('.dot_nav').append("<span class='dot dot-"+ i +" active' slide-nbr="+i+"></span>")
			}else{
				$('.dot_nav').append("<span class='dot dot-"+i+"'slide-nbr="+i+"></span>")
			}
		}
	}
	//dot click js
	$('.dot').each(function(){
		$(this).on('click',function(){
			
			if(!$(this).hasClass()){
				// active 초기화 
				$('.dot').each(function(){
					if($(this).hasClass('active')){
						$(this).removeClass('active')
					}
				})
				// 클릭한 도트에 active 추가
				$(this).addClass('active')
				console.log($(this).attr('slide-nbr'))
				//클릭된 dot 와 현재 슬라이드의 값을 동일화 
				if(current_slide != $(this).attr('slide-nbr')){
					slider_wrap.animate({
						"left": - ($(this).attr('slide-nbr') * 100) + "%"
					}, Math.abs(current_slide - $(this).attr('slide-nbr')) * 250 )

					current_slide = $(this).attr('slide-nbr')
				}
			}
		})
	})
})
