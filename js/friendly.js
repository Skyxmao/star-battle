function friendly_load(){
    /* LOAD */
    setInterval(function(){
        if(!(pause==true)){
            friendly_create();
        }
    },7000)
    
}
    
function friendly_create(){
        
    friendly[friendly_i] = document.createElement('div');
    var _this = friendly[friendly_i];
    _this.setAttribute('class','friend');
    _this.style.position='absolute';
    _this.style.marginLeft=960 + "px";
    _this.style.marginTop=_random(100,500) + "px";
    _this.style.height = 70 +"px";
    _this.style.width = 80 +"px";
    var now_i = friendly_i;
    
    
    _this.setAttribute('time',setInterval(function(){
        if(!(pause==true))
        _this.style.marginLeft = getx(_this) - 10 + "px"; 
        /* RANDOM STOP*/
        
        
        if( getx(_this) < 0 ){
            
            clearInterval(_this.getAttribute('time'));
            
            GameArea.removeChild(_this);
            
            friendly.splice(now_i,1);
        }
        
        
    },50));
    
    
    keyframe(_this);
    GameArea.append(_this);
    friendly_i++;
        
}