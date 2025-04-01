import { play, raund, targetNumber, humanScore, computerGuess, computerScore, advanceRound } from "./script.js"


const raundI = document.querySelector('#raund .raund p')
raundI.textContent = 1

const targetNumberI = document.querySelector('#target-number p')
const raundPlayNumberButton = document.querySelector('#raund button')
const humanGueesButton = document.querySelector('#human button')
const computerGueesNumberI = document.querySelector('#computer .guess p')
const computerScoreI = document.querySelector('#computer .score p')
const humanScoreI = document.querySelector('#human .score p')
const humanSection = document.querySelector('#human')
const computerSection = document.querySelector('#computer')
const inputHumanGuess = document.querySelector('input')

//desabilitar el boton de next raund
raundPlayNumberButton.disabled = true

// iniciar juego
function iniciarJuego(humanGuees) {
    //iniciar el juego
    const winHuman = play(humanGuees)
    //cargar valores
    raundI.textContent = raund
    targetNumberI.textContent = targetNumber
    humanScoreI.textContent = humanScore
    computerGueesNumberI.textContent = computerGuess
    computerScoreI.textContent = computerScore

    if (winHuman) {
        humanSection.className = 'win'
    }
    else {
        computerSection.className = 'win'
    }
}

humanGueesButton.onclick = () => {
    //obtener la opcion del humano 
    const humanGuees = Number(inputHumanGuess.value)

    iniciarJuego(humanGuees)

    inputHumanGuess.disabled = true
    raundPlayNumberButton.disabled = false
    humanGueesButton.disabled = true
}

raundPlayNumberButton.onclick = () => {
    humanGueesButton.disabled = false
    raundPlayNumberButton.disabled = true
    inputHumanGuess.disabled = false

    advanceRound()

    humanSection.className = 'human'

    computerSection.className = 'computer'

    raundI.textContent = raund
}


