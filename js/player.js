function player_load(){
    /* default TOP*/
player.style.marginLeft=0;
setInterval(function(){
    if(move['up']==true){
        if(parseInt(player.style.marginTop) > 0){
           player.style.marginTop=gety(player)-speed+"px"; 
        }
    }else if(move['left']==true){
        if(parseInt(player.style.marginLeft) > 0 ){
             player.style.marginLeft=getx(player)-speed+"px"; 
        }
        
    }else if(move['right']==true){
        if(parseInt(player.style.marginLeft) <880){
            player.style.marginLeft=getx(player)+speed+"px";
        }
       
    }else if(move['down']==true){
        if(parseInt(player.style.marginTop) < 525){
            player.style.marginTop=gety(player)+speed+"px"; 
        }  
    }
},50);

key['up'].hover(function(){
    if(!(pause==true))
    move['up']=true;
},function(){
    move['up']=false;
});

key['down'].hover(function(){
    if(!(pause==true))
    move['down']=true;
},function(){
    move['down']=false;
});

key['left'].hover(function(){
    if(!(pause==true))
    move['left']=true;
},function(){
    move['left']=false;
});

key['right'].hover(function(){
    if(!(pause==true))
    move['right']=true;
},function(){
    move['right']=false;
});


/* Player_Attack */
$(document).keyup(function(event){
    if(event.keyCode==32){
        if(!(pause==true)){
           player_attack();
        }
    }
});
}



function player_attack(){
    playaudio('shoot');
    var bullte_position_x=getx(player);
    var bullte_position_y=gety(player);
    
    player_bullet[player_bullet_i]=document.createElement('img');
    var _this=player_bullet[player_bullet_i];
    var now_i=player_bullet_i;
    _this.setAttribute('class','player_bullet');
    _this.setAttribute('src','images/player_bullet.png');
    _this.style.marginLeft=bullte_position_x+10+"px";
    _this.style.marginTop=bullte_position_y+20+"px";
    _this.style.width=102 + "px";
    _this.style.height=28 + "px";
    
    
    _this.setAttribute('time',setInterval(function(){
            /* MOVE START */ 
            if(!(pause==true)){
               _this.style.marginLeft = getx(_this) + 10 +"px";
            }
            
            /* MOVE END */
        
        
        /*  REMOVE _ THIS _ START */
            if(getx(_this) > 800){
                clearInterval(_this.getAttribute('time'));
                
                
                if($.inArray(_this,GameArea.childNodes) !=-1){
                    GameArea.removeChild(_this);
                }
                player_bullet.splice(now_i,1);
            }
            
            for( var i =0 ; i< enemy.length ; i++){
                if( enemy[i] == undefined ){
                    continue;
                }
                checkHit(_this,enemy[i],function(){
                    playaudio("destroyed");
                    
 
                    clearInterval(enemy[i].getAttribute('time'));
                    clearInterval(enemy[i].getAttribute('bullet_time'));
                    
                    clearInterval(_this.getAttribute('time'));
          
                    player_bullet.splice(now_i,1);
                    if($.inArray(_this,GameArea.childNodes) !=-1){
                        GameArea.removeChild(_this);
                    }
                    
                    
                    GameArea.removeChild(enemy[i]);
                    enemy.splice(i,1);
                    
                    nowEnemy -- ;
                    addScore(5);
                    return 0;
                });

                
            }
        
            /* friendly with my bullet  */
            for(var j=0;j<friendly.length;j++){
                if(friendly[j] == undefined)
                    continue;
                if($.inArray(friendly[j],GameArea.childNodes) != -1)
                checkHit(_this,friendly[j],function(){
                     clearInterval(friendly[j].getAttribute('time'));
            
                    GameArea.removeChild(friendly[j]);

                    friendly.splice(j,1);
                    
                    player_bullet.splice(now_i,1);
                    if($.inArray(_this,GameArea.childNodes) !=-1){
                        GameArea.removeChild(_this);
                    }
                    
                    
                    playaudio("destroyed");
                    
                    addScore(-10);
                });
            }
            
        
            /* metherorites with my bullet */
            for(var j=0;j<meteorites_list.length;j++){
                if(meteorites_list[j] == undefined)
                    continue;
                if($.inArray(meteorites_list[j],GameArea))
                checkHit(_this,meteorites_list[j],function(){
                    
                    if($.inArray(_this,GameArea.childNodes) !=-1){
                            GameArea.removeChild(_this);
                            meteorites_list[j].setAttribute('life',meteorites_list[j].getAttribute('life') - 1);
                           
                        }
                        player_bullet.splice(now_i,1);
                    
                     
                        if(meteorites_list[j].getAttribute('life') == 0){
                            clearInterval(meteorites_list[j].getAttribute('time'));

                            GameArea.removeChild(meteorites_list[j]);

                            meteorites_list.splice(j,1);

                            playaudio("destroyed");

                            addScore(10);
                    }
                    
                       
                });
            }
            
        /*  REMOVE _ THIS _ END */
        
    },50));

    
    GameArea.append(_this);
    
    player_bullet_i++;
    
}
