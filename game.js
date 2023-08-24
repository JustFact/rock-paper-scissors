function getComputerChoice(){
    let choice = Number.parseInt(Math.random()*3)+1;
    if(choice==1){
        return 'rock'
    } else if(choice==2){
        return 'paper'
    }else{
        return 'scissor'
    }
}

function gameLogic(computerSelection, playerSelection){
    let isPlayerWinner = true;
    if(computerSelection=='paper'&&playerSelection=='rock'){
        isPlayerWinner = false;
    }else if(computerSelection=='rock'&&playerSelection=='scissor'){
        isPlayerWinner = false;
    }else if(computerSelection=='scissor'&&playerSelection=='paper'){
        isPlayerWinner = false;
    }else if(computerSelection==playerSelection){
        return 'It\'s a draw!'
    }
    
    if(isPlayerWinner){
        return `You Win! ${playerSelection.toLowerCase()} beats ${computerSelection.toLowerCase()}!` 
    }else{
        return `You Lose! ${computerSelection.toLowerCase()} beats ${playerSelection.toLowerCase()}!` 
    }
}

function play(){
    let computerSelection = getComputerChoice().toLowerCase();
    let playerSelection = prompt("Choose: Rock, Paper, Scissor").toLowerCase();
    return gameLogic(computerSelection,playerSelection);
}