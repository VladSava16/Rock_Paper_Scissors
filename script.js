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


const btns = document.querySelectorAll('button');

btns.forEach(choice => {
    choice.addEventListener('click', game(e))
});

let playerScore = 0;
let computerScore = 0;