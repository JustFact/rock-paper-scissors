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
