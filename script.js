const totalScore = {computerScore:0, playerScore:0}

//restituisce la scelta del giocatore
function onclickRPS(playerChoice){
    const compChoice = computerChoice()
    const score = result(playerChoice, compChoice)
    showResult(score, playerChoice, compChoice)
}

//ascolta quando un bottone viene schiacciato
function playGame(){
    const buttons = document.querySelectorAll(".rpsButton")
    buttons.forEach(button => {
        button.onclick = () => onclickRPS(button.value)
    });
    const clear = document.getElementById("clear")
    clear.onclick = () => endGame(totalScore)
}
console.log(playGame())

//funzione che compie una scelta per il computer
function computerChoice(){
    const choices =['Rock', 'Paper', 'Scissors']
    const random = Math.floor(Math.random() * 3)
    return choices[random]
}

//Compara le scelte e da' il risultato
//Umano-macchina(sasso-forbice) --> 1 per l'umano
function result(playerChoice, computerChoice){
    let score;
    if(playerChoice === computerChoice)
        score = 0
    else if(playerChoice == 'Rock' 
            && computerChoice == 'Scissors'   
            || playerChoice == 'Paper' 
            && computerChoice == 'Rock' 
            ||playerChoice == 'Scissors' 
            && computerChoice == 'Paper' )
            score = 1
        else
        score = -1
    if(score == 1)
        totalScore['playerScore'] ++
    else if(score == -1)
        totalScore['computerScore'] ++ 

    return score
}

//mostra il risultato in modo carino
function showResult(score, playerChoice, computerChoice){
    const result = document.getElementById("textResult")
    const choices = document.getElementById("choices")
    const player = document.getElementById("playerScore")
    const computer = document.getElementById("computerScore")
    if(score == -1)
        result.innerText = "You lost!"
    else if(score == 0)
        result.innerText = "It's a tie!"
    else
        result.innerText = "You won!"
    player.innerText = `Player Score: ${totalScore['playerScore']}/5`
    computer.innerText = `Computer Score: ${totalScore['computerScore']}/5`
    choices.innerText = `👨​ ${playerChoice} vs 🤖​ ${computerChoice}`

    if(totalScore['computerScore'] == 5)
    {
        endGame(totalScore)
        result.innerText = 'The computer won. Try again!🤖'
    }else if(totalScore['playerScore'] == 5){
        endGame(totalScore)
        result.innerText = 'Congratulations, you won!👨'
    }

}

//Cancella l'output e pulisce tutto
function endGame(totalScore){
    const result = document.getElementById("textResult")
    const choices = document.getElementById("choices")
    const player = document.getElementById("playerScore")
    const computer = document.getElementById("computerScore")
    computer.innerText = 'Computer Score:'
    player.innerText = 'Player Score:'
    totalScore['playerScore'] = 0
    totalScore['computerScore'] = 0
    result.innerText = ''
    choices.innerText = ''
}