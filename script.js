function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
function getComputerChoice(){
    let choices = ["rock","paper","scissors"];
    return choices[getRandomInt(3)]
}

let playerScore = 0;
let computerScore = 0;

function updateScore() {
    const playerScorePara = document.getElementById("playerScore");
    const computerScorePara = document.getElementById("computerScore");

    playerScorePara.textContent = `Player: ${playerScore}`;
    computerScorePara.textContent = `Computer: ${computerScore}`;
}



function playRound(playerChoice , compChoice){
    if (playerChoice===compChoice){
        return("There is a tie!");
    }
    if (playerChoice==="rock" && compChoice==="paper"){
        computerScore++;
        updateScore();
        return "You lose! Paper beats rock!";
    }
    if (playerChoice==="rock" && compChoice==="scissors"){
        playerScore++;
        updateScore();
        return "You win! Rock beats scissors!";
    }
    if (playerChoice==="paper" && compChoice==="rock"){
        playerScore++;
        updateScore();
        return "You win! Paper beats rock!";
    }
    if (playerChoice==="paper" && compChoice==="scissors"){
        computerScore++;
        updateScore();
        return "You lose! Paper loses to scissors!";
    }
    if (playerChoice==="scissors" && compChoice==="paper"){
        playerScore++;
        updateScore();
        return "You win! Scissors beat paper!";
    }
    if (playerChoice==="scissors" && compChoice==="rock"){
        computerScore++;
        updateScore();
        return "You lose! Rock beats scissors!";
    }    

}
let guri = document.querySelector('.rock')
let letra = document.querySelector('.paper')
let gershera = document.querySelector('.scissors')
guri.addEventListener('click', () => handleClick('rock'))
letra.addEventListener('click', () => handleClick('paper'))
gershera.addEventListener('click', () => handleClick('scissors'))

function handleClick(x){
    alert("you have choosen "+ x)
    let y = getComputerChoice();
    alert("The computer has choosen "+ y)
    alert(playRound(x,y));

}
console.log(computerScore+" "+playerScore)