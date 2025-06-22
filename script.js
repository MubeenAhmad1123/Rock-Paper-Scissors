

let userscore=0;
let compscore=0;

 const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userscorepara = document.querySelector("#userScore")
const compscorepara = document.querySelector("#compScore")
 choices.forEach( (choice)=>{
    choice.addEventListener("click", ( ) =>{
      const userChoise =  choice.getAttribute("id");
      playGame(userChoise)
        
    })
 })
 const drawGame = ()=>{
    
    msg.innerText = "Game Was Draw"
    msg.style.backgroundColor = "gray";

 }

const gencompchoice = ()=>{

    const options = ["rock","paper","scissor"] ;
    const randomindx = Math.floor(Math.random()*3 );
    return options[randomindx];


}
const playGame = (userChoise)=>{
console.log("user choice =", userChoise );
const compChoice = gencompchoice();
console.log("Comp choice =", compChoice );

if (userChoise === compChoice) {
    drawGame();
} else {
    let userwin = true;
    if (userChoise === "rock") {

        userwin = compChoice === "paper"? false:true; 
    } else if(userChoise === "paper"){
        userwin = compChoice === "scissor"?false:true;

    }else if(userChoise==="scissor"){
        userwin= compChoice==="rock"?false:true;
    }
    showWinner(userwin, userChoise, compChoice)
    return userwin;
}


}
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin === true) {
        userscore++;
        userscorepara.innerText= userscore
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compscorepara.innerText= compscore
        msg.innerText = `You Lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};




