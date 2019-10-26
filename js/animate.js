
function keyframe(el){
    var bg_position=0;
    var me=el;
    setInterval(function(){
        if(bg_position==0){
            me.style.backgroundPosition="80px";
            bg_position=80;
        }else if(bg_position==80){
            me.style.backgroundPosition="160px";
            bg_position=160;
        }else if(bg_position==160){
            me.style.backgroundPosition="240px";
            bg_position=240;
        }else if(bg_position==240){
            me.style.backgroundPosition="0px";
            bg_position=0;
        }
    },200);
}
keyframe(player);
keyframe(document.getElementById('friend_animate'));
keyframe(document.getElementById('enemy_animate'));
keyframe(document.getElementById('player_animate'));