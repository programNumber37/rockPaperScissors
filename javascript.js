let r= "rock";
let s= "scissors";
let p= "paper";




function getComputerChoice() {
    let a = Math.random();
    
    if (a <= 1/3) {
        return r;
    } else if (a > 1/3 && a <= 2/3) {
        return p;
    } else {
        return s;
    }
}

function getHumanChoice(){
    let choice = prompt("rock, paper or scissors?");
    return choice;
}





function playRound(computerChoice, humanChoice) {
    if (computerChoice == humanChoice) {
        return "Draw";

    } else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        return "You lose, paper beats rock";
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        return "You win, Rock beats Scissors";

    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        return "You win, paper beats rock";
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        return "You lose, scissors beats paper";

    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        return "You lose, rock beats scissors";
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        return "You win, scissors beats paper";
    }
}

function playGame(){
    
    humanScore=0;
    computerScore=0;
    let roundsAmount = prompt("How many rounds would you like to play?"); 
    

    for (let i = 1; i <= roundsAmount; i++) {
        console.log(`Round ${i}:`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        console.log(`Computer chose: ${computerSelection}`);
        console.log(`You chose: ${humanSelection}`);
        
        const result = playRound(computerSelection, humanSelection);
        console.log(result);
        console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
        console.log("------------------------");
    }


    if(humanScore>computerScore){
        console.log("YOU WIN")
        console.log(`Score - ${humanScore} / ${computerScore}`);
    }
    else if(humanScore<computerScore){
        console.log("YOU LOOSE")
        console.log(`Score - ${humanScore} / ${computerScore}`);
    }else {
        console.log("DRAW")
        console.log(`Score - ${humanScore} / ${computerScore}`);

    }


    

    
}

playGame();









console.log(computerSelection);
console.log(playRound(computerSelection,humanSelection));
