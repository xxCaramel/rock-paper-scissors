
let p = 0;
let c = 0;
game();



function computerPlay(){

   let x = Math.floor((Math.random() * 3) + 1);

   switch (x) {

    case 1:
         return "rock";
       break;
    case 2:
         return "paper";
      break;
    case 3:
        return "scissors";
      break;

   }



 }

function player(){
    let x = prompt("Rock-Paper-Scissors?");
    return x

 }

function play(player, computer){

   console.log(player.toUpperCase() + " Player|Computer " + computer.toUpperCase());

   if (player.toLowerCase() === computer) {
     console.log("Tied!!!");
   } else if (player === "rock") {

      switch (computer) {
        case "paper":
        console.log("Computer Wins!! Rock < Paper");
        c+=1;
        break;

        case "scissors":
        console.log("Player Wins!! Rock > Scissors");
         p+=1;
        break;

      }

    } else if (player.toLowerCase() === "paper") {

        switch (computer) {
          case "rock":
          console.log("Player Wins!! Rock < Paper");
          p+=1;
          break;

          case "scissors":
          console.log("Computer Wins!! Paper < Scissors");
          c+=1;
          break;

         }

      } else if (player.toLowerCase() === "scissors") {

         switch (computer) {
           case "rock":
           console.log("Computer Wins!! Rock > Paper");
           c+=1;
           break;

           case "paper":
           console.log("Player Wins!! Paper < Scissors");
           p+=1;
           break;

            }

      }


 }

function game(){

  for (var i = 0; i < 5; i++) {
    play(player(),computerPlay());
    console.log("Player: " + p + "  Computer: " + c);

  }


  if (p > c ) {
    console.log("Player Wins!!!");
  } else {
    console.log("Computer Wins!!!");
  }


}
