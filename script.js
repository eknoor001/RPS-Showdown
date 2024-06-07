let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const index = Math.floor(Math.random() * 3);
    return options[index];
}

const drawGame = () => {
    return "Game was draw";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin === true) {
        userScore++;
        document.querySelector("#user-score").innerHTML = userScore;
        document.querySelector("#msg").innerHTML = `you win! ${userChoice} beats ${compChoice}`;
        document.querySelector("#msg").style.backgroundColor = "green";
    
    } else {
        compScore++;
        document.querySelector("#comp-score").innerHTML = compScore;
        document.querySelector("#msg").innerHTML = `You loose! ${userChoice} beats by ${compChoice}`;
        document.querySelector("#msg").style.backgroundColor = "red";

    }
}

const playGame = (userChoice) => {
    //Generate computer choice
    const compChoice = genCompChoice();

    console.log(`${userChoice} || ${compChoice}`);

    if (userChoice === compChoice) {
        const draw = drawGame();
        document.querySelector("#msg").innerHTML = draw;
        document.querySelector("#msg").style.backgroundColor = "#081b31";
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }


}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    })
})