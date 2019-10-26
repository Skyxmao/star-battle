/* LOAD  */
$("#gamestart_button").click(function(){
    player_load();
    enemy_load();
    friendly_load();
    commonTimer();
    meteorites_load();
    fule_load();
    fule_and_time_load();
    backgroundAudio.play();
    game_start_to_in_game();
});

//checkImpact();