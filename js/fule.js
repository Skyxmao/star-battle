function fule_load(){
     fule_create();
    setInterval(function(){
        if(!(pause==true)){
            fule_create();
        }
    },5000);
    
}
function fule_create(){
            
    fule_list[fule_i] = document.createElement('img');
    var _this = fule_list[fule_i];
    _this.setAttribute('class','asdasd');
    _this.setAttribute('src','images/Fule.png');
    
    
    _this.style.position = 'absolute';
    _this.style.marginLeft=_random(100,500) + "px";
    _this.style.marginTop= 0 + "px";
    _this.style.height = 23 +"px";
    _this.style.width = 14 +"px";
    var now_i = fule_i;
    
    
    _this.setAttribute('time',setInterval(function(){
        if(!(pause==true))
        _this.style.marginTop = gety(_this) + 5 + "px"; 
        /* RANDOM STOP*/
        
        
        if( gety(_this) > 600 ){
            
            clearInterval(_this.getAttribute('time'));
            
            GameArea.removeChild(_this);
            
            fule_list.splice(now_i,1);
        }
        
        
        checkHit(_this,player,function(){
            
            if($.inArray(_this,GameArea.childNodes) != -1){
                
                 clearInterval(_this.getAttribute('time'));
            
                GameArea.removeChild(_this);
            
                fule_list.splice(now_i,1);
                
                addFule(15);
                
            }
            
        });
        
        
    },50));
    
    GameArea.append(_this);
    fule_i++;
}