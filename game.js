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
    let playerSelection;
    let playerSelectionCheck;
    do{
        playerSelection = prompt("Choose: Rock, Paper, Scissor").toLowerCase();
        playerSelectionCheck = (playerSelection=='rock'||playerSelection=='paper'||playerSelection=='scissor')
        console.assert(playerSelectionCheck,'Wrong input, please enter correct choice: Rock, Paper, Scissor');
    }while(!playerSelectionCheck)
    let result = gameLogic(computerSelection,playerSelection);
    console.log(getResultMessage(result,computerSelection,playerSelection));
    return result;
}

function game(){
    let playerScore = 0;
    let cpuScore = 0;

    for(let i = 0; i < 5; i++){
        let result = play();
        if(result==true){
            playerScore++;
        }else if(result==false){
            cpuScore++
        }
    }

    if(playerScore>cpuScore){
        alert(`CPU:${cpuScore} | Player: ${playerScore} \n Congratulations! You Won!`)
    }else if(playerScore<cpuScore){
        alert(`CPU:${cpuScore} | Player: ${playerScore} \n Better luck next time!`)
    }else{
        alert(`CPU:${cpuScore} | Player: ${playerScore} \n It's a draw!`)
    }
}

game();