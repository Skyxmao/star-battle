function enemy_load(){
    /* LOAD */
    
    setInterval(function(){
        {
            if(!(pause == true) && (nowEnemy < 3)){
                enemy_generate();
                nowEnemy ++ ;
            }
        }
    },1000)
    
        

}
    
function enemy_generate(){
        
    enemy[enemy_i] = document.createElement('div');
    var _this = enemy[enemy_i];
    _this.setAttribute('class','enemy');
    
    _this.style.marginLeft=960 + "px";
    _this.style.marginTop=_random(100,500) + "px";
    _this.style.height = 80 +"px";
    _this.style.width = 80 +"px";
    var position_x=_random(500 , 800);
    _this.setAttribute('time',setInterval(function(){
        _this.style.marginLeft = getx(_this) - 10 + "px"; 
        /* RANDOM STOP*/
        if( getx(_this) <  position_x){
            enemy_attack(_this);
            clearInterval(_this.getAttribute('time'));
           _this.setAttribute('bullet_time',setInterval(function(){
               if(!(pause == true))
                enemy_attack(_this);
           },5000));
        }
        
        
    },50));
    
    
    keyframe(_this);
    GameArea.append(_this);
    enemy_i++;
        
}
function enemy_attack(el){
    var bullte_position_x=getx(el);
    var bullte_position_y=gety(el);
    
    enemy_bullet[enemy_bullet_i]=document.createElement('img');
    var _this=enemy_bullet[enemy_bullet_i];
    
    _this.setAttribute('class','player_bullet');
    _this.setAttribute('src','images/enemy_bullte.png');
    _this.style.marginLeft=bullte_position_x+10+"px";
    _this.style.marginTop=bullte_position_y+20+"px";
    _this.style.width=102 + "px";
    _this.style.height=28 + "px";
    
    
    _this.setAttribute('time',setInterval(function(){
            /* MOVE START */ 
            if(!(pause==true)){
               _this.style.marginLeft = getx(_this) - 10 +"px";
            }
           
            /* MOVE END */
        
        
        /*  REMOVE _ THIS _ START */
            if(getx(_this) < 0){
                clearInterval(_this.getAttribute('time'));
                GameArea.removeChild(_this);
            }
            
            
              checkHit(player,_this,function(){
                clearInterval(_this.getAttribute('time'));
                if($.inArray(_this,GameArea.childNodes) !=-1){
                GameArea.removeChild(_this);
                  addFule(-15);
                }
              });  
       
            
        
            
        /*  REMOVE _ THIS _ END */
        
    },50));

    GameArea.append(_this);
    
    
    enemy_bullet_i++;
}