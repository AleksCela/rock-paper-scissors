function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
function getComputerChoice(){
    let choices = ["rock","paper","scissors"];
    return choices[getRandomInt(3)]
}
function playRound(playerChoice , compChoice){
    if (playerChoice===compChoice){
        return "There is a tie!";
    }
    if (playerChoice==="rock" && compChoice==="paper"){
        return "You lose! Paper beats rock!";
    }
    if (playerChoice==="rock" && compChoice==="scissors"){
        return "You win! Rock beats scissors!";
    }
    if (playerChoice==="paper" && compChoice==="rock"){
        return "You win! Paper beats rock!";
    }
    if (playerChoice==="paper" && compChoice==="scissors"){
        return "You lose! Paper loses to scissors!";
    }
    if (playerChoice==="scissors" && compChoice==="paper"){
        return "You win! Scissors beat paper!";
    }
    if (playerChoice==="scissors" && compChoice==="rock"){
        return "You lose! Rock beats scissors!";
    }    
}
function game(){
    let x = prompt("Enter rock/paper/scissorS:");
    let y = getComputerChoice();
    console.log(x,y);
    alert(playRound(x,y));
}
game();