$(document).ready(function() {

var seconds = 60; 
console.log (seconds)
var intervalId = 0;
console.log (intervalId)
var correctAnswers = 1;
console.log (correctAnswers)
var incorrectAnswers = 2;
console.log (incorrectAnswers)


$("#numCorrectAnswers").text(correctAnswers);
$("#numIncorrectAnswers").text(incorrectAnswers);

 

  

//events that will affect what shows on the screen for the user. 

//game begins with a start screen, the questions, results & timer are hidden

$(".questionsSection").hide();
  $(".resultsPage").hide();


 
   
 

  //click event, will trigger the game to begin 
    $("#gameStart").on('click', function(){
        $(".resultsPage").hide();
        $(".questionsSection").show();
        $(".open").hide();
        
    })

  //end of game. user clicks to see their results   
    $("#submitBtn").on('click', function(){
        $(".resultsPage").show();
        $(".questionsSection").hide();
        $(".open").hide();
        
    })
    //play again takes the user back to the start screen
    $("#playAgain").on('click', function(){
        $(".resultsPage").hide();
        $(".questionsSection").hide();
        $(".open").show();
        
    })

  

  });
