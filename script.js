function computerPlay(){
    let choice = Math.floor(Math.random() * 3) + 1;
    if(choice == 1)
        return "rock"
    else if(choice == 2)
        return "paper";
    return "scissors";
}

function play(playerSelection, computerSelection){
    if(playerSelection == "rock"){
        if(computerSelection == "rock")
            return -1;
        else if(computerSelection == "paper")
            return 0;
        return 1;
    }
    else if(playerSelection== "paper"){
        if(computerSelection == "rock")
            return 1;
        else if(computerSelection == "paper")
            return -1;
        return 0;
    }
    else if(playerSelection == "scissors"){
        if(computerSelection == "rock")
            return 0;
        else if(computerSelection == "paper")
            return 1;
        return -1;
    }
}

function game(playerSelection){
    let computerSelection = computerPlay();
    let result = play(playerSelection, computerSelection);
    console.log(playerSelection, computerSelection);
    if(result == -1)
        currentResult.textContent = "It's a tie!";
    else if(result == 0){
        currentResult.textContent = "You lose!";
        computerScore++;
    }
    else{
        currentResult.textContent = "You win!";
        playerScore++;
    }
    if(playerScore == 5)
        totalScore.textContent = `You win the game ${playerScore} - ${computerScore}`;
    else if(computerScore == 5)
        totalScore.textContent = `You lose the game ${playerScore} - ${computerScore}`;
    else
        totalScore.textContent = `Total score: ${playerScore} - ${computerScore}`;
}

const btns = document.querySelectorAll('button');
const currentResult = document.querySelector('.current-round-result');
const totalScore = document.querySelector('.total-score');

btns.forEach(choice => {
    choice.addEventListener('click', (e) => game(e.target.classList.value))
});

let playerScore = 0;
let computerScore = 0;