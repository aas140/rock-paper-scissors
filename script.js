let humanScore = 0, computerScore = 0;

function getComputerChoice(){
    let n= Math.random();
    if(n<1/3) return "rock";
    else if(n<2/3) return "paper";
    else return "scissor";
}

function getHumanChoice(){
    let choice = prompt("Enter you choice");
    return choice;
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();

    if((humanChoice=="scissor" && computerChoice=="paper") || (humanChoice=="paper" && computerChoice=="rock") || (humanChoice=="rock" && computerChoice=="scissor")){
        humanScore++;
        return "human won!"
    }
    else if((humanChoice=="paper" && computerChoice=="scissor") || (humanChoice=="rock" && computerChoice=="paper") || (humanChoice=="scissor" && computerChoice=="rock")){
        computerScore++;
        return "computer won!"
    }
    else return "TIE"

}

function playGame(){
    for(let i=1; i<=5; i++){
        console.log("ROUND "+ i);
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        let winner = playRound(humanChoice, computerChoice);    
        console.log(winner);
                  
    }
    if(humanScore>computerScore) console.log("Human is Winner!!!");
    else if(computerScore>humanScore)console.log("Computer is Winner");
    else console.log("Game is TIE!");
}

playGame();
