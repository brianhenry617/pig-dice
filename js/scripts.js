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
    var currentScore = 0;
    var initial = 0 + diceRoll;
    playerOneArr.push(initial)

    playerOneArr.forEach(function(score){
      currentScore += score;



      $("#score1").text(currentScore);

      if (currentScore >=100) {
        playerOneArr = [];
        alert("YOU WIN!!!");

        // player1.hide() idea
      }
    });
    console.log(playerOneArr)
    });



    $("button#roll2").click(function(event) {
      var diceRoll = getRandomInt(1,6)
      var currentScore = 0;
      var initial = 0 + diceRoll;
      playerTwoArr.push(initial)

      playerTwoArr.forEach(function(score){
        currentScore += score;
          playerTwoArr.forEach(function(score, i) {
            if (score == 1) {
              playerTwoArr[i] = 0
            }
          });

          if (currentScore >=100) {
          playerTwoArr = [];
          alert("YOU WIN!!!");
        }



        $("#score2").text(currentScore);
      });
console.log(playerTwoArr)
console.log(currentScore)

  });
});
