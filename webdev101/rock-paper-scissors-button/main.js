// declare variables
let choices = ["rock", "paper", "scissors"]
let playerChoice = ""
let computerChoice = ""
let playerScore = 0
let computerScore = 0

//get computer choice
function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)]
}

//run a round, calls all other functions
function playRound(pc) {
    playerChoice = pc
    computerChoice = computerPlay()
    console.log(computerChoice);
    if (((playerChoice == "rock") && (computerChoice == "scissors")) || ((playerChoice == "paper") && (computerChoice == "rock")) || ((playerChoice == "scissors") && (computerChoice == "paper"))) {
        playerScore += 1
        document.getElementById('player').textContent = `Player: ${playerScore}`
    } else if (((computerChoice == "rock") && (playerChoice == "scissors")) || ((computerChoice == "paper") && (playerChoice == "rock")) || ((computerChoice == "scissors") && (playerChoice == "paper"))) {
        computerScore += 1
        var csText = document.getElementById('computer').textContent = `Computer: ${computerScore}`
    } else {
        return;
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', (e) =>{
        console.log(e.target.attributes[0].textContent);
        playRound(e.target.attributes[0].textContent);
    })
})