$( document ).ready(function() {
   
  $('#dogMeme').click( 
    function(
    ){
      //code goes here
      console.log("position: ", $('#dogMeme').position() );
    }
  ); 
  
 
  $( "#dogMeme" ).draggable({
      stop: function() {
        if(  $('#dogMeme').position().left > 500){
        //  alert("you haswss wowzazzz ");
          
           $('#dogMeme').attr('src','https://static.demilked.com/wp-content/uploads/2022/09/it-humor-memes-5.jpeg');
    }
     
        else if( $('#dogMeme').position().left > 300 && $('#dogMeme').position().left < 500){
          alert("please try again");
        }    
        else {
          alert("Awesome! You won! You have wow!");
        }
    }
    
    
  
    
    
  });
  
  
  
  
  
});