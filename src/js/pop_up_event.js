$(function(){
    $("#privacy_policy_btn").click(function(){        
        $("#privacy_popup").css('display','flex').hide().fadeIn();
    });
    $("#terms_of_service_btn").click(function(){        
        $("#terms_popup").css('display','flex').hide().fadeIn();
    });

    $("#privacy_confirm").click(function(){
        $("#privacy_popup").fadeOut();
    });
    $("#terms_confirm").click(function(){
        $("#terms_popup").fadeOut();
    });
});

document.querySelectorAll('.pop-button').forEach(button => button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>');

