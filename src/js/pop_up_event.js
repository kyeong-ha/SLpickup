$(function(){
    $("#privacy_policy_btn").click(function(){        
        $("#privacy_popup").css('display','flex').hide().fadeIn();
        document.body.style.overflow = 'hidden';
        document.body.style.touchAction = 'none';
    });
    $("#terms_of_service_btn").click(function(){        
        $("#terms_popup").css('display','flex').hide().fadeIn();
        document.body.style.overflow = 'hidden';
        document.body.style.touchAction = 'none';
    });

    $("#privacy_confirm").click(function(){
        $("#privacy_popup").fadeOut();
        document.body.style.overflow = '';
        document.body.style.touchAction = '';
    });
    $("#terms_confirm").click(function(){
        $("#terms_popup").fadeOut();
        document.body.style.overflow = '';
        document.body.style.touchAction = '';
    });
});

/* 외부영역 클릭시 창 닫기 */
$(document).mouseup(function (e){
	let LayerPopup = $(".popup-wrap");
	if(LayerPopup.has(e.target).length === 0){
		LayerPopup.fadeOut();
	}
});

document.querySelectorAll('.pop-button').forEach(button => button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>');

