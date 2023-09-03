const options = document.querySelectorAll('button')
const messageDiv = document.querySelector('.message');    


options.forEach(option =>{
    option.addEventListener('click', play)
})

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

function play(event){
    let computerSelection = getComputerChoice().toLowerCase();
    let playerSelection = event.target.dataset.value;

    let result = gameLogic(computerSelection,playerSelection);
    console.log(getResultMessage(result,computerSelection,playerSelection));
    messageDiv.innerText = getResultMessage(result,computerSelection,playerSelection);
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