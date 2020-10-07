$(function(){
    let index = 0;//li eq값
    $('.cont1 ul > li').hover(function(){
        index = $(this).index()+1;
        $(this).find('img').attr('src','img/cont1_icon'+index+'_on.png');
    },function(){
        $(this).find('img').attr('src','img/cont1_icon'+index+'.png');
    })
})