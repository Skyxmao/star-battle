function meteorites_load(){
    setInterval( function(){
        if(!(pause==true)){
            meteorites_create();
        }
    }, 6000 );
    
}
function meteorites_create(){
     meteorites_list[meteorites_i] = document.createElement('img');
    var _this = meteorites_list[meteorites_i];
    _this.setAttribute('class','meteorites');
    _this.setAttribute('src',"images/" + random_meteorites());
    _this.style.marginLeft=960 + "px";
    _this.style.marginTop=_random(100,500) + "px";
    _this.style.height = 100 +"px";
    _this.style.width = 100 +"px";
    var now_i = meteorites_i;
    
    _this.setAttribute('life',2);
  
    _this.setAttribute('time',setInterval(function(){
        if(!(pause==true))
        _this.style.marginLeft = getx(_this) - 10 + "px"; 
        /* RANDOM STOP*/
        
        
        if( getx(_this) < 0 ){
            
            clearInterval(_this.getAttribute('time'));
            
            GameArea.removeChild(_this);
            
            meteorites_list.splice(now_i,1);
        }
        
        
    },50));

    GameArea.append(_this);
    meteorites_i++;
}

