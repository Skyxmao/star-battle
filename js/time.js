function fule_and_time_load(){
    setInterval(function(){
        if(!(pause==true)){
            fule_time();
        }
    },1000);
}