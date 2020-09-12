let gamesChoices = [`rock`,`paper`,`scissor`]
let playerScore=0, computerScore=0, drawScore=0;
let numberOfRounds = 5;

function computerPlay() {
    return gamesChoices[Math.floor(Math.random()*3)]
}

function userPlay() {
    let playerSelection = prompt(`Do you want to choose rock, paper or scissor?`).toLowerCase()
    if(gamesChoices.includes(playerSelection) === false){
        console.log(`Re enter your options`)
    }
    return playerSelection
}

function playGame(playerSelection, computerSelection) {
    playerSelection = userPlay();
    computerSelection = computerPlay();
    if (playerSelection === `rock` && computerSelection === `rock` || playerSelection === `scissor` && computerSelection === `scissor` || playerSelection === `paper` && computerSelection === `paper`){
        console.log(`Same Pinch, It's a draw`);
        drawScore+=1
    }
    else if (playerSelection === `paper` && computerSelection === `rock` || playerSelection === `scissor` && computerSelection === `paper` || playerSelection === `rock` && computerSelection ===`scissor`){
        console.log(`Player Wins`);
        playerScore+=1
    }
    else if (playerSelection === `paper` && computerSelection === `scissor` || playerSelection ===`scissor` && computerSelection === `rock` || playerSelection === `rock` && computerSelection === `paper`){
        console.log(`Computer wins!`);
        computerScore+=1
    }
}
// Looping the game 5 times
function startGame() {
    for (let i=0; i<numberOfRounds; i++){
        playGame()
    }
    console.log(`Final scores are`,'\n', `Player score is`,playerScore,'\n',`Computer Score is`,computerScore,'\n',`Draw Score is`,drawScore)
}
startGame()










