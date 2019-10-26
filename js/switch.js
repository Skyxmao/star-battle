/* in_game => Game Over   */

function in_game_to_game_over(){
    $("#in_game").hide();
    $("#gameover").show();
    
    $("#game_over_time").html(gametime);
    $("#game_over_score").html(score);
}

function game_over_to_ranking(){
     $("#gameover").hide();
    $("#ranking").show();
}
function game_start_to_in_game(){
    $("#in_game").show();
    $("#gamestart").hide();
}
$("#ranking_play_game").click(function(){
    location.reload();
});


$("#Instructions_button").click(function(){
     $("#Instructions").show();
    $("#gamestart").hide();

    
});
$("#ok_button").click(function(){
     $("#gamestart").show();
    $("#Instructions").hide();
});
setTimeout(function(){
    $("#gamestart").fadeIn();
    $("#headnimate").hide();
},2300);