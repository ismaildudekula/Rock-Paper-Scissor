let userCount = 0;
let compCount = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");

let drawGame = () => {
    msg.innerText = "It's draw";
};

let showinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        msg.innerText = "You Won";
        userScore.innerText = userCount;
        compScore.innerText = compCount;
    }
    else {
        msg.innerText = "You Lost";
        userScore.innerText = userCount;
        compScore.innerText = compCount;
    }
};


let playGame = (userChoice) =>{
    const choiceArr = ["rock","paper","scissor"];
    let compChoice = choiceArr[Math.floor(Math.random()*3)];

    let userWin = true;
    if( userChoice === compChoice){
        drawGame();
    }
    else{
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        userWin ? userCount++ : compCount++;
        showinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice =  choice.getAttribute("id");
        playGame(userChoice);
    });
});