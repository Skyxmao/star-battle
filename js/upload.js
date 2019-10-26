/* UPLOAD SCORE */

$("#continue_button").click(function(){
   
    var time=gametime;
    var name=null;
    if($("#name_input").val().length<3){
       alert("Name at least 3 words.");
    }else{
        if(score_flag == false){
        
         $("#loading_text").show();
        $("#name_input").hide();
        name=$("#name_input").val();
        $.ajax({
            url:"php/register.php",
            type:"POST",
            dataType:"JSON",
            data:{score,time,name},
            error:function(){
                 alert("failure");
                $("#loading_text").hide();
                $("#name_input").show();
            },
            success:function(result){
               for(i in result){
                  htmlcontent='<tr class="ranking_list_tr"><td>'+result[i].sort+'</td><td>'+result[i].name+'</td><td>'+result[i].score+'</td><td>'+result[i].time+'s</td></tr>'
                   $("#ranking_list").append(htmlcontent);
               }
               game_over_to_ranking();
                score_flag=true;
            }
        });
        }
    }
    
});