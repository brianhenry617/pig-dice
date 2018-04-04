//Back end
var player1 = 0;
var player2 = 0;
var turnScore = 0;
newArr =[];

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
  $("button#roll").click(function(event) {
    var diceRoll = getRandomInt(1,6)
    // if (diceRoll === 1) {
    //   xxx + 0
    // } else {
    //
    // }

    var currentScore = 0;
    var initial = 0 + diceRoll;
    newArr.push(initial)

    newArr.forEach(function(score){
      currentScore += score;
    });

    console.log(currentScore)






    // var currentScore = 0 + diceRoll;
    //   if (diceRoll === 1) {
    //     turnScore = 0;
    // } else if (diceRoll >1){
    //   turnScore += currentScore
    // }
    //
    //
    // console.log(currentScore)



  // $("button#hold").click(function(event) {
  //   event.preventDefault();
  // })

  });
});
