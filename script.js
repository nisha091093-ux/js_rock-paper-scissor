let humanScore = 0
let computerScore = 0

const results = document.querySelector("#results");
const score = document.querySelector("#score");

function getComputerChoice () {
    let randomNumber = Math.random();

    if (randomNumber <  1 / 3) {
        return "rock";
    } else if (randomNumber < 2 / 3) {
       return "paper"; 
    } else {
        return "scissors"
    }

}

function playRound (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        results.textContent = "It's a Draw!"
    } 

    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore ++;
        results.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    }
    else {
        computerScore ++;
        results.textContent = `You Lose! ${computerChoice} beats ${humanChoice}`;
    }

    // Display running score
    score.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;

    //Check winner

    if (humanScore === 5) {
        results.textContent = "🎉 You won the game!";
        disableButtons();
        return;
    }
    else if (computerScore === 5) {
        results.textContent = "🤖 Computer won the game!";
        disableButtons();
        return;
    }
}

// Button to play

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

//disable button when end games
function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}


//Button click events

rockButton.addEventListener("click", function () {
    const computerSelection = getComputerChoice ();
    playRound ("rock", computerSelection);
});

paperButton.addEventListener("click", function () {
    const computerSelection = getComputerChoice ();
    playRound ("paper", computerSelection);
});

scissorsButton.addEventListener("click", function () {
    const computerSelection = getComputerChoice ();
    playRound ("scissors", computerSelection);
});

