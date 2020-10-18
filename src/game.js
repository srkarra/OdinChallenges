let gameChoices = [`rock`,`paper`,`scissor`]
let playerScore=0, computerScore=0, drawScore=0;
let round = 0;
let playerSelection,computerSelection;
let roundWinner = document.getElementById("winner")
let lastScore = document.getElementById("score")
let selections = document.getElementById("selections")

function computerPlay() {
    computerSelection = gameChoices[Math.floor(Math.random()*3)]
    console.log(computerSelection)
    return computerSelection
}
function playRound(){
        computerPlay()
        playGame()
        round += 1
    console.log(round)
}
function playGame() {
    if (playerSelection === computerSelection){
        roundWinner.textContent = "This round is a draw"
        drawScore+=1
    }
    else if (playerSelection === `paper` && computerSelection === `rock` || playerSelection === `scissor` && computerSelection === `paper` || playerSelection === `rock` && computerSelection ===`scissor`){
        roundWinner.textContent ="In this round:" + "Player Wins"
        playerScore+=1
    }
    else if (playerSelection === `paper` && computerSelection === `scissor` || playerSelection ===`scissor` && computerSelection === `rock` || playerSelection === `rock` && computerSelection === `paper`){
        roundWinner.textContent = "In this round:" + "Computer Wins"
        computerScore+=1
    }
    else {
        console.log("Something went wrong")
    }
}
function updateScore() {
    lastScore.textContent = 'Your Score: ' + playerScore + ' 🏁 ' + ' Computer Score: ' + computerScore;
}
function selectedOptions() {
    selections.textContent = 'Your Selection: ' + playerSelection + ' 🏁 '  + ' Computer Selection: ' + computerSelection;
}
function userPlay(clicked_id)
{
        playerSelection = String(clicked_id)
        playRound()
        updateScore()
        selectedOptions()
}
function gameReset(clicked_text) {
    playerScore=0;
    computerScore=0;
    playerSelection = ''
    computerSelection=''
    lastScore.textContent = 'Your Score: ' + playerScore + ' ' + 'Computer Score: ' + computerScore;
    selections.textContent = 'Your Selection: ' + playerSelection + ' ' + 'Computer Selection: ' + computerSelection;
    roundWinner.textContent = ''
    return clicked_text
}
gameReset()


