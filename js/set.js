$("#sound").click(function(){
    if(!pause){
        audio_on=!audio_on;
        if(audio_on == true){
            backgroundAudio.play();
            $(this).attr("src","images/sound.png");
        }else{
            backgroundAudio.pause();
            $(this).attr("src","images/Nosound.png");
        }
    }
});
$("#pause").click(function(){
    pause = !pause;

    if(!(pause==true)){
        $(this).attr("src","images/pause.png");
        if((audio_on == true))
        backgroundAudio.play();
    }else{
         $(this).attr("src","images/pausetrue.png");
         backgroundAudio.pause();
    }
});

$(document).keydown(function(e){
    if(e.keyCode == 80){
        $("#pause").trigger("click");
    }
});

$("#fontPlus").click(function(){
    if( parseInt($(".score_all").css("font-size")) <= 48 )
    $(".score_all").css('font-size', parseInt($(".score_all").css("font-size")) + 1 +"px");
    
});
$("#fontSub").click(function(){
    if( parseInt($(".score_all").css("font-size")) >= 18 )
    $(".score_all").css('font-size', parseInt($(".score_all").css("font-size")) - 1 +"px");
    
});
