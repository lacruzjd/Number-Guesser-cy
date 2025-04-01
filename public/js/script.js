let humanScore = 0
let computerScore = 0
let raund = 1

let targetNumber = 0
let computerGuess = 0

// generar un numero aleatorio entre el 0 y el 9
const randomNumber = () => Math.floor(Math.random() * 10)

function getAbsoluteDistance(num1, num2) {
    return Math.abs(num1 - num2)
}

// determinar ganador
function compareGuesses(targetNumber, humanNumber, computerNumber) {
    const humanDistance = getAbsoluteDistance(humanNumber, targetNumber)
    const computerDistance = (getAbsoluteDistance(computerNumber, targetNumber))

    if (humanDistance <= computerDistance) {
        return true
    }
    return false
}

//aumentar la puntuacion del ganador
function updateScore(winner) {
    if (winner === 'human') {
        humanScore++
    } else {
        computerScore++
    }
}

//pasar al siguiente raund
export function advanceRound() {
    raund++
}

export {
    raund,
    targetNumber,
    computerGuess,
    computerScore,
    humanScore
}

export function play(humanGuees) {

    if (humanGuees >= 0 && humanGuees <= 9) {

        targetNumber = randomNumber()
        computerGuess = randomNumber()

        if (compareGuesses(targetNumber, humanGuees, computerGuess)) {
            updateScore('human')
            return true
        } else {
            updateScore('computer')
            return false
        }
    } else {
        throw Error('Input a number between 0 and 9')
    }

}