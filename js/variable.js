/* GLOBAL */
var GameArea=document.getElementById('GameArea');
var pause=false; // PAUSE
var score=0;
var fule=15;
var gametime=0;
var score_flag=false;
var deatch=false;

/* player */
var player=document.getElementById('player');
player.style.height=80+"px";
player.style.width=80+"px";
var speed=8;
var moveflag=true;
var move=[];
move['left']='false';
move['right']='false';
move['up']='false';
move['down']='false';

var key=[];
key['left']=$("#key_left");
key['right']=$("#key_right");
key['up']=$("#key_up");
key['down']=$("#key_bottom");

/* player bullet */

var player_bullet=[];
var player_bullet_i=0




/* Enemy */
var enemy = [];
var enemy_i=0;
var enemy_bullet=[];
var enemy_bullet_i=0;
var nowEnemy = 0;

/* Enemy _ bullet */
var Enemy_bullet = [];
var Enemy_bullet_i=0;
var Enemy_time = [];
/* AUDIO */

var backgroundAudio=new Audio("sounds/background.mp3");
backgroundAudio.loop = true;
backgroundAudio.volume = 1;
var audio_on=true;


 /* friendly */
var friendly=[];
var friendly_i = 0;

/* meteorites */
var meteorites_list=[];
var meteorites_life=[];
var meteorites_i=0;


/* Fule */
var fule_list=[];
var fule_i=0;