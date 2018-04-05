//Back end
var player1 = 0;
var player2 = 0;
var turnScore = 0;
var playerOneArr =[];
var playerTwoArr =[];

var diceRoll;

function getRandomInt(min, max) { //Returns random number between 1 and 6
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) +min;
}

function getScore() {
  turnScore += player1;
  return player1;
}


if (diceRoll === 1) {
}




// function roll {
//   var diceRoll = roll
// }

//Front End
$(document).ready(function() {
  $("button#roll1").click(function(event) {
    var diceRoll = getRandomInt(1,6)
    var currentScore1 = 0;
    var initial = 0 + diceRoll;
    playerOneArr.push(initial)

    playerOneArr.forEach(function(score){
      currentScore1 += score;
        playerOneArr.forEach(function(score, i) {
          if (score == 1) {
            playerOneArr[i] = 0
            $("#roll2").toggle();
            $("#hold2").toggle();
            $("#roll1").toggle();
            $("#hold1").toggle();
          }
        });

        if (currentScore1 >=100) {
        playerOneArr = [];
        alert("YOU WIN!!!");
      }




      $("#score1").text(currentScore1);
    });
    console.log(currentScore1)
    console.log(playerOneArr)

  });

  $("button#hold1").click(function(event) {
    $("#roll2").toggle();
    $("#hold2").toggle();
    $("#roll1").toggle();
    $("#hold1").toggle();
  });



    $("button#roll2").click(function(event) {
      var diceRoll = getRandomInt(1,6)
      var currentScore2 = 0;
      var initial = 0 + diceRoll;
      playerTwoArr.push(initial)

      playerTwoArr.forEach(function(score2){
        currentScore2 += score2;
          playerTwoArr.forEach(function(score2, i) {
            if (score2 == 1) {
              playerTwoArr[i] = 0
              $("#roll2").toggle();
              $("#hold2").toggle();
              $("#roll1").toggle();
              $("#hold1").toggle();
            }
          });

          if (currentScore2 >=100) {
          playerTwoArr = [];
          alert("YOU WIN!!!");
        }
        $("#score2").text(currentScore2);
      });

  });
    $("button#hold2").click(function(event) {
      $("#roll2").toggle();
      $("#hold2").toggle();
      $("#roll1").toggle();
      $("#hold1").toggle();
    });
});
