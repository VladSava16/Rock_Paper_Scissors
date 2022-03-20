function computerPlay(){
    let choice = Math.floor(Math.random() * 3) + 1;
    if(choice == 1)
        return "rock"
    else if(choice == 2)
        return "paper";
    return "scissors";
}
function play(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() == "rock"){
        if(computerSelection == "rock")
            return -1;
        else if(computerSelection == "paper")
            return 0;
        return 1;
    }
    else if(playerSelection.toLowerCase() == "paper"){
        if(computerSelection == "rock")
            return 1;
        else if(computerSelection == "paper")
            return -1;
        return 0;
    }
    else if(playerSelection.toLowerCase() == "scissors"){
        if(computerSelection == "rock")
            return 0;
        else if(computerSelection == "paper")
            return 1;
        return -1;
    }
}

function game(){
    for(let i = 1; i <= 5; i++){
        let playerSelection = prompt("Enter your weapon");
        let computerSelection = computerPlay();

        let result = play(playerSelection, computerSelection);
        if(result == 1){
            console.log("You win.");
            playerScore++;
        }
        else if(result == 0){
            console.log("You lose.");
            computerScore++;
        }
        else
            console.log("It's a tie.");
    }
    console.log(`The score is ${playerScore} to ${computerScore}.`);
}

let playerScore = 0;
let computerScore = 0;

game();