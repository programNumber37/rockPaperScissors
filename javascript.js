let r= "rock";
let s= "scissors";
let p= "paper";

let computerScore =0;
let humanScore =0;
let currentRound =0;
const totalRound = 5;




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
    
    currentRound++;
    let roundResult = "";

    if (computerChoice == humanChoice) {
        console.log("DRAW");
        roundResult="DRAW";

    } else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        console.log("You lose, paper beats rock");
        roundResult="You lose, paper beats rock";
       
        
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        console.log("You win, Rock beats Scissors");
        roundResult="You win, Rock beats Scissors";
    

    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        console.log("You win, paper beats rock");
        roundResult="You win, paper beats rock";
        
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        console.log("You lose, scissors beats paper");
        roundResult="You lose, scissors beats paper";
        

    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        console.log("You lose, rock beats scissors");
        roundResult="You lose, rock beats scissors";
       
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        console.log("You win, scissors beats paper");
        roundResult="You win, scissors beats paper";
        
    }

    results.textContent = `Round ${currentRound}: ${roundResult}
        Score - You: ${humanScore}, Computer: ${computerScore}`;





    if (currentRound == totalRound){
        let gameResult = "";
        if(humanScore>computerScore){
            console.log("YOU WIN")
            console.log(`Score - ${humanScore} / ${computerScore}`);
    
            gameResult = "You WIN";
    
    
        }
        else if(humanScore<computerScore){
            console.log("YOU LOOSE")
            console.log(`Score - ${humanScore} / ${computerScore}`);

            gameResult = "You LOOSE";
        }else {
            console.log("DRAW")
            console.log(`Score - ${humanScore} / ${computerScore}`);

            gameResult = "DRAW";
    
        }
    

    results.textContent += `\n\nGame Over! ${gameResult}
            Final Score - You: ${humanScore}, Computer: ${computerScore}`;


        currentRound = 0;
        humanScore = 0;
        computerScore = 0;
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


const rockButton = document.querySelector(".rock")
rockButton.addEventListener("click", ()=>{


    if(currentRound<totalRound){
        playRound(getComputerChoice(),"rock");
    }
    
})
const paperButton = document.querySelector(".paper")
paperButton.addEventListener("click", ()=>{

    if(currentRound<totalRound){
        playRound(getComputerChoice(),"paper");
    }

})
const scissorsButton = document.querySelector(".scissors")
scissorsButton.addEventListener("click", ()=>{
    

    if(currentRound<totalRound){
        playRound(getComputerChoice(),"scissors");
    }
})

const results = document.querySelector("div");




//playGame();









//console.log(computerSelection);
//console.log(playRound(computerSelection,humanSelection));
