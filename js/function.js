function getx(el){
    return parseInt(el.style.marginLeft);
}
function gety(el){
    return parseInt(el.style.marginTop);
}
function _random(min,max){
     return parseInt(Math.random() * (min - max + 1) + max);
}
function addScore( Many ){
    
    score += Many;
    document.getElementById('score').innerHTML="Score:"+score;
    
}
function fule_time(){
    fule-=1;
    gametime +=1;
    document.getElementById('gametime').innerHTML="Time:"+gametime+"s";
    document.getElementById('fule').innerHTML=fule;
}
function addFule( Many ){

    fule += Many;
    
    if(fule > 30){
        fule=30;
    }
    
    document.getElementById('fule').innerHTML=fule;
}

function playaudio(name){
    if(audio_on == true){
        if(name == "shoot"){
            var PAudio = new Audio("sounds/shoot.mp3");
                PAudio.volume = .12;
                PAudio.load();
                PAudio.play();
        }else if(name == "destroyed"){
            var PAudio = new Audio("sounds/destroyed.mp3");
                PAudio.volume = .12;
                PAudio.load();
                PAudio.play();
        }
    }
}
function commonTimer(){
    setInterval(function(){
        
        
        /* ENEMY WITH PLAYER */
        for(var i=0;i<enemy.length;i++){
            if(enemy[i] == undefined)
                continue;
            if($.inArray(enemy[i],GameArea.childNodes) !=-1)
            checkHit(player,enemy[i],function(){
                playaudio("destroyed");
                clearInterval(enemy[i].getAttribute('time'));
                clearInterval(enemy[i].getAttribute('bullet_time'));
                GameArea.removeChild(enemy[i]);
                enemy.splice(i,1);
                addFule(-15);
                nowEnemy -- ;
            });
        }
        
        
        /* FRIENDLY WITH PLAYER */
         for(var i=0;i<friendly.length;i++){
            if(friendly[i] == undefined)
                continue;
            if($.inArray(friendly[i],GameArea.childNodes) !=-1)
            checkHit(player,friendly[i],function(){
                playaudio("destroyed");
                clearInterval(friendly[i].getAttribute('time'));
                GameArea.removeChild(friendly[i]);
                friendly.splice(i,1);
                addFule(-15);
                addScore(-10);
            });
        }
        /* METERORITES WITH PLAYER */
         for(var i=0;i<meteorites_list.length;i++){
            if(meteorites_list[i] == undefined)
                continue;
            if($.inArray(meteorites_list[i],GameArea.childNodes) !=-1)
            checkHit(player,meteorites_list[i],function(){
                playaudio("destroyed");
                clearInterval(meteorites_list[i].getAttribute('time'));
                GameArea.removeChild(meteorites_list[i]);
                meteorites_list.splice(i,1);
                addFule(-15);
            });
        }
        
        checkDetch();
    },50);
}

function random_meteorites(){
    var random_now=_random(0,5);
   if(random_now == 1){
       return 'aestroid_brown.png';
   }else if(random_now == 2){
       return 'aestroid_dark.png';
    }else if(random_now == 3){
        return 'aestroid_gray.png';
    }else if(random_now == 4){
        return 'aestroid_gray_2.png';
    }
}

function checkDetch(){
    if(fule < 0 && deatch == false){
        deatch = true;
        pause = true;
        backgroundAudio.pause();
        in_game_to_game_over();
    }
}
function checkHit(item,hitObj,callback){
    		
		var itemTop=parseInt(item.style.marginTop);
			itemFoot=parseInt(item.style.marginTop)+parseInt(item.style.height);
			itemLeft=parseInt(item.style.marginLeft);
			itemRight=parseInt(item.style.marginLeft)+parseInt(item.style.width);
	
		var hitTop=parseInt(hitObj.style.marginTop);
			hitFoot=parseInt(hitObj.style.marginTop) + parseInt(hitObj.style.height);
			hitLeft=parseInt(hitObj.style.marginLeft);
			hitRight=parseInt(hitObj.style.marginLeft) + parseInt(hitObj.style.width);

        
            if(itemFoot > hitTop && itemRight > hitLeft &&　itemTop < hitFoot && itemLeft < hitRight){
				callback();
		  }
}