function getComputerChoice() {
    let randomNumber = Math.random();

    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}


function getHumanChoice() {
    let choice = prompt("Choose rock, paper, or scissors:");

    return choice;
}


function playGame() {

    let humanScore = 0;
    let computerScore = 0;


    function playRound(humanChoice, computerChoice) {

        humanChoice = humanChoice.toLowerCase();


        if (humanChoice === computerChoice) {
            console.log("It's a Draw!");
        }


        else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
        }


        else {
            computerScore++;
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
        }
    }


    // Play 5 rounds
    for (let i = 0; i < 5; i++) {

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

    }
    

    // Display final score
    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);


    // Announce final winner
    if (humanScore > computerScore) {
        console.log("🎉 You won the game!");
    } 
    
    else if (computerScore > humanScore) {
        console.log("🤖 Computer won the game!");
    } 
    
    else {
        console.log("It's a tie game!");
    }
}


// Start the game
playGame();