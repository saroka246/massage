$(document).ready(function(){
    const swiper = new Swiper('.first-slider', {
    pagination: {
          el: ".first-dots",
        },
    });
    const swiper2 = new Swiper('.second-slider', {
        pagination: {
              el: ".control-wrapper",
            },
    });
    $(".fdCmjh").click(function(){
        $(".SIZyN,.goCOZK").show();
        $(".jIdasn").hide();
    });
    $(".fSOLxL").click(function(){
        $(".jIdasn").show();
        $(".SIZyN,.goCOZK").hide();
    });
    $(".faQtnk .styled__SelectorButton-ttyclh-2").click(function(){
        if(!$(this).hasClass("fobrvG")){
            $(this).parent().parent().find('.fobrvG').removeClass('fobrvG').addClass('eZZOwh');
            $(this).removeClass('eZZOwh').addClass('fobrvG');
        }
    });
    $(".hkTCvF .styled__SelectorButton-ttyclh-2").click(function(){
        if(!$(this).hasClass("fobrvG")){
            $(this).parent().parent().find('.fobrvG').removeClass('fobrvG').addClass('eZZOwh');
            $(this).removeClass('eZZOwh').addClass('fobrvG');
        }
    });
});
