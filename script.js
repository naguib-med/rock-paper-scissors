const choices = ["Rock", "Paper", "Scissors"];

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", function() {
        const userChoice = this.innerText;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        const result = determineWinner(userChoice, computerChoice);
        document.getElementById("result").innerText = `You chose ${userChoice}, Computer chose ${computerChoice}. ${result}`;
    });
});

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a draw!";
    }
    if ((userChoice === "Rock" && computerChoice === "Scissors") ||
        (userChoice === "Scissors" && computerChoice === "Paper") ||
        (userChoice === "Paper" && computerChoice === "Rock")) {
        return "You win!";
    }
    return "Computer wins!";
}
