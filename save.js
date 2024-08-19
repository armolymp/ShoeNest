$(document).ready(function(){
    $("#favo").on("click",function(){
        try{
          $(this).attr('disabled',true);
          var shoeToAdd = $(this).closest("p").attr("id");
          var favouritShoeId = JSON.parse(localStorage.getItem("favShoe"));
          if(favouritShoeId == null){
            favouritShoeId = [];
          }
          favouritShoeId.push(shoeToAdd);
          localStorage.setItem("favShoe",JSON.stringify(favouritShoeId));
        }
        catch(e){
          if(e == QUOTA_EXCEEDED_ERR){
            console.log("Error local storage limit exceeded")
          }
          else{
            console.log("Saving to local storage")
          }
        }
      });
});