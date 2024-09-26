const result = document.querySelector('.result');
const humanScore = document.querySelector('#human-score');
const roboScore = document.querySelector('#robo-score');
const machineChoiceDisplay = document.querySelector('#machine-choice'); 

let humanScoreNumber = 0;
let machineScoreNumber = 0;

const choiceEmojis = {
    rock: '&#x1F44A;',    // ✊
    paper: '&#x1F590;',   // 🖐️
    scissors: '&#x270C;'  // ✌️
};

const playHuman = (humanChoice) => {
    const machineChoice = playMachine();
    console.log('Escolha do Humano: ' + humanChoice);
    console.log('Escolha da Máquina: ' + machineChoice);
    
   
    machineChoiceDisplay.innerHTML = choiceEmojis[machineChoice]; 
    
   
    playTheGame(humanChoice, machineChoice);
};

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
};

const playTheGame = (human, machine) => {
    console.log('Humano: ' + human + " Máquina: " + machine);
    
    if (human === machine) {
        result.innerHTML = 'Deu empate!';
    } else if ((human === 'paper' && machine === 'rock') ||
               (human === 'rock' && machine === 'scissors') ||
               (human === 'scissors' && machine === 'paper')) {
        humanScoreNumber++;
        humanScore.innerHTML = humanScoreNumber;
        result.innerHTML = 'Você ganhou!';
    } else {
        machineScoreNumber++;
        roboScore.innerHTML = machineScoreNumber;
        result.innerHTML = 'Você perdeu para o Robô!';
    }
};
