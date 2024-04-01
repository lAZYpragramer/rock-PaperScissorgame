const computerScoreEl = document.getElementById("computer-score");
const playerScoreEl = document.getElementById("user-score");

/*creating a const to call all buttons*/
const buttons = document.querySelectorAll("button");
const resultEl = document.querySelector("#result");

let playerScore =0;
let computerScore = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        /*console.log('user choice:', button.id,"\ncomputer choice:",computerPlay() );*/
       const result =  playround(button.id, computerPlay())
       resultEl.textContent = result;

       /*console.log(result);*/

    })
});

/*creating the cumputer to give a random choice*/
function computerPlay(){
    const choices = ["rock","paper","scissors"];
    /*creates the number for the choice of the moves*/ 
    const randomChoice = Math.floor(Math.random() * choices.length)
    /*we use the value and return the string in the array */
    return choices[randomChoice];
} 

function playround(playerSelection,Comperselection){
    if(playerSelection === Comperselection){

        return "Its a Tie!!";
    }else if((playerSelection == "rock" &&
    Comperselection === "scissors")||
    (playerSelection === "paper" && 
    Comperselection === "rock")||
    (playerSelection === "scissors" && 
    Comperselection === "paper")){
        playerScore++;
        playerScoreEl.textContent = playerScore;
        return "You Win!! " + playerSelection + " beats " + Comperselection;
    }else{
        computerScore++;
        computerScoreEl.textContent = computerScore;
        return "You lose!! " + Comperselection + " beats " + playerSelection;
    }
}