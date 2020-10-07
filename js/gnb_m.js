$(function(){
    /*gnb btn*/
    $('.gnb_btn').on('click',function(){
        $('.gnb_m').css('display','block');
    })
    $('.gnb_m  ul > li > a , .gnb_m  ul > li > ul >li a').on('click',function(){
        /* more 버튼을 가지고 있으면*/
        if($(this).find('img').attr('src') == 'img/more.png'){
            $(this).next().css('display','block');
            $('.gnb_m .gnb_m_wrap > ul').animate({'left':'-=100%'},200);
        }
        /* back 버튼을 가지고 있으면*/
        if($(this).find('img').attr('src') == 'img/back.png'){
            $('.gnb_m .gnb_m_wrap > ul').animate({'left':'+=100%'},200);
            $(this).parent().parent().css('display','none');
        }
    })
    /*close*/
    $('.gnb_m .close').on('click',function(){
        $('.gnb_m').css('display','none');
    })

})