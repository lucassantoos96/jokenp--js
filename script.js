
const result = document.querySelector('.result')
const myScore = document.querySelector('#my-score')
const machineScore = document.querySelector('#machine-score')

let myScoreNumber = 0
let machineScoreNumber = 0

const GAME_OPTIONS = {
ROCK: 'rock',
PAPER: 'paper',                    // ENUM -> Evita cometer erros toda vez que o valor for usado  // 
SCISSORS: 'scissors'
}

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())

}


const playMachine = () => {

    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}


const playTheGame = (human, machine) => {

    console.log('Humano:  ' + human + "  Maquina: " + machine)

    if (human === machine) {
        result.innerHTML = "Deu empate &#x1F449;&#x1F3FC;&#x1F448;&#x1F3FC; !!"
    } else if (
        human === GAME_OPTIONS.PAPER && machine ===GAME_OPTIONS.ROCK ||
        human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS ||
        human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER) {
myScoreNumber++;
            myScore.innerHTML = myScoreNumber
            result.innerHTML = " Você venceu &#x1F44F;&#x1F3FC; !! "
        } else {
            machineScoreNumber++;
            machineScore.innerHTML = machineScoreNumber
            result.innerHTML = "Você perdeu &#x1F44E;&#x1F3FC; !! "
        }

}


// papel -> pedra -> tesoura

