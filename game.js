const options = document.querySelectorAll('button')
const messageDiv = document.querySelector('.message');
const scoreDiv = document.querySelector('.score');  
const numberOfGames = 5;
let gamesPlayed = 0;
let playerScore = 0;
let cpuScore = 0;

options.forEach(option =>{
    option.addEventListener('click', play)
})

function getComputerChoice(){
    let choice = Number.parseInt(Math.random()*3)+1;
    if(choice==1){
        return 'Rock'
    } else if(choice==2){
        return 'Paper'
    }else{
        return 'Scissor'
    }
}

function gameLogic(computerSelection, playerSelection){
    let isPlayerWinner = true;
    if(computerSelection=='Paper'&&playerSelection=='Rock'){
        isPlayerWinner = false;
    }else if(computerSelection=='Rock'&&playerSelection=='Scissor'){
        isPlayerWinner = false;
    }else if(computerSelection=='Scissor'&&playerSelection=='Paper'){
        isPlayerWinner = false;
    }else if(computerSelection==playerSelection){
        return 'Draw';
    }
    return isPlayerWinner;
}

function getResultMessage(result,computerSelection,playerSelection){
    if(result&&result!='Draw'){
        return `You Win! ${playerSelection} beats ${computerSelection}!` 
    }else if(!result&&result!='Draw'){
        return `You Lose! ${computerSelection} beats ${playerSelection}!` 
    }else{
        return 'It\'s a draw!'
    }
}

function play(event){

    let computerSelection = getComputerChoice();
    let playerSelection = event.target.dataset.value;

    let result = gameLogic(computerSelection,playerSelection);
    // console.log(getResultMessage(result,computerSelection,playerSelection));
    messageDiv.innerText = getResultMessage(result,computerSelection,playerSelection);
    // return result;
    updateGame(result);
}

function updateScoreDiv(cpuScore, playerScore){
    scoreDiv.innerText = `Games Played: ${gamesPlayed}/5 | CPU: ${cpuScore} | Player: ${playerScore}`;
}

function updateMessageDiv(){
    if(playerScore>cpuScore){
        messageDiv.innerText = 'Congratulations! You Won!';
    }else if(playerScore<cpuScore){
        messageDiv.innerText = 'Better luck next time!';
    }else{
        messageDiv.innerText = 'Match Draw!';
    }
}

function updateGame(result){
    if(gamesPlayed == 5){
        updateMessageDiv();
    }else{
        if(result==true){
            playerScore++;
            gamesPlayed++;
        }else if(result==false){
            cpuScore++;
            gamesPlayed++;
        }
    }
    updateScoreDiv(cpuScore, playerScore);
}