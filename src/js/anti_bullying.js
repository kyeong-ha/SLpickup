/** @foramt */

$(document).ready(function() {
    $(document).bind("contextmenu", function(e){ // 오른쪽 마우스 차단
        return false;
    });
 
    $('img').bind("contextmenu",function(e){ // 그림 오른쪽 마우스 차단
        return false; 
    }); 
 
    $('img').bind("selectstart",function(e){ // 그림 오른쪽 마우스 차단
        return false;  
    }); 
}); 
 
document.oncontextmenu=function(){return false;} // 우클릭 방지
document.onselectstart=function(){return false;} // 드래그 방지
document.ondragstart=function(){return false;} // 선택 방지
document.onmousedown=function(){return false;}