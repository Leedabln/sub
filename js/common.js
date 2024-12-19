$(function(){
    $('.gnb > li').mouseenter(function(){ //gnb 안에 있는 li  //마우스 올렸을때
        $(this).find('.depth02').slideDown(); /* 2차 메뉴들이 슬라이드 다운되어 나오네 */
    });
    $('.gnb > li').mouseleave(function(){ // 마우스가 벗어났을때 
        $('.depth02').slideUp(); // 2차 메뉴들을 올리겠다
    }); //slideDown slideUp 소문자 대문자 잘 확인하자..
}); // script end