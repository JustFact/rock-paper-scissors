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
        return 'draw';
    }
    return isPlayerWinner;
}

function getResultMessage(result,computerSelection,playerSelection){
    if(result&&result!='draw'){
        return `You Win! ${playerSelection.toLowerCase()} beats ${computerSelection.toLowerCase()}!` 
    }else if(!result&&result!='draw'){
        return `You Lose! ${computerSelection.toLowerCase()} beats ${playerSelection.toLowerCase()}!` 
    }else{
        return 'It\'s a draw!'
    }
}

function play(){
    let computerSelection = getComputerChoice().toLowerCase();
    let playerSelection = prompt("Choose: Rock, Paper, Scissor").toLowerCase();
    let result = gameLogic(computerSelection,playerSelection);
    return getResultMessage(result,computerSelection,playerSelection);
}