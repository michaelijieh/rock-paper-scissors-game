document.getElementById('buttons').style.display = "none";
document.getElementById('endGame').style.display = "none"
// document.getElementById('cpuHeader').style.display = "none";
document.getElementById('cpuShowSelection').style.display = "none";


const start = document.getElementById('startGame');
start.addEventListener('click', () => {
    document.getElementById('buttons').style.display = "block";
    document.getElementById('startGame').style.display = "none";
    document.getElementById('endGame').style.display = "block";
    document.getElementById('headerBar').style.display = "none";

    let info = "waiting..."
    results(info)

})

const restart = document.getElementById('endGame');
restart.addEventListener('click', () => {
    location.reload()
}) 


const buttons = document.querySelectorAll('input');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.value.toLowerCase())
    })
})



function getComputerChoice () {
    let number = Math.ceil(Math.random() * 3);
    let cpuSelect;

    if (number === 3) {
        cpuSelect = "rock";
        return cpuSelect;
    } else if (number === 2) {
        cpuSelect = "paper";
        return cpuSelect;    
    } else if (number === 1) {
        cpuSelect = "scissors";
        return cpuSelect;
    }    
  }


function cpuScoreBoard (cpuScore) {
    const cpuAggScore = document.getElementById('cpuScoreBoard');
    cpuAggScore.innerText = cpuScore;
}


function playerScoreBoard (playerScore) {
    const playerAggScore = document.getElementById('playerScoreBoard');
    playerAggScore.innerText = playerScore;
}


function results (info, cpuSelect, playerSelect) {
    const results = document.getElementById('results');
    const winInfo = (`You win!! ${playerSelect} beats ${cpuSelect}`);
    const loseInfo = (`You lose!! ${cpuSelect} beats ${playerSelect}`)


    if (info === winInfo) {
        results.style.color = "green";
        results.textContent = info;
    } else if (info === loseInfo) {
        results.style.color = 'red';
        results.textContent = info;
    } else {
        results.style.color = 'black'
        results.textContent = info;
    }
}

function endGame () {
    buttons.forEach(button => {
        button.disabled = true;
        button.style.display = "none";

    })
    document.getElementById('selectionText').style.display = "none";
    document.getElementById('scoreBoard').style.display = "none";
    document.getElementById('cpuHeader').style.display = "none";
    document.getElementById('cpuShowSelection').style.display = "none";
    document.getElementById('playerHeader').style.display = "none";
    document.getElementById('playerShowSelection').style.display = "none";
    document.getElementById('line1').style.display = "none";
    document.getElementById('line2').style.display = "none";

    
}


let playerSelect;
let playerScore = 0;
let cpuScore = 0;


function playRound (message) {
    
    let playerSelect = message;
    let cpuSelect = getComputerChoice();
    document.getElementById('cpuHeader').style.display = "block";
    document.getElementById('cpuShowSelection').style.display = "block";
    document.getElementById('cpuShowSelection').innerText = cpuSelect;

    document.getElementById('playerHeader').style.display = "block";
    document.getElementById('playerShowSelection').style.display = "block";
    document.getElementById('playerShowSelection').innerText = playerSelect;



    if ((cpuSelect == "rock" && playerSelect == "scissors") || 
        (cpuSelect == "scissors" && playerSelect == "paper") || 
        (cpuSelect == "paper" && playerSelect == "rock")) {
        let info = (`You lose!! ${cpuSelect} beats ${playerSelect}`)
        results(info, cpuSelect, playerSelect);
        cpuScore++;
        cpuScoreBoard(cpuScore);
    
    } else if ((cpuSelect == "paper" && playerSelect == "scissors") ||
        (cpuSelect == "rock" && playerSelect == "paper") ||
        (cpuSelect == "scissors" && playerSelect == "rock") ) {
        let info = (`You win!! ${playerSelect} beats ${cpuSelect}`);
        results(info, cpuSelect, playerSelect);
        playerScore++;
        playerScoreBoard(playerScore);
        
    } else {
        let info = (`Try again! ${cpuSelect} is same as ${playerSelect}`);
        return results(info);
      }
    
    if ( (cpuScore + playerScore === 5 && cpuScore > 3) || cpuScore >= 3) {
        endGame()
        let info = (`You lost! ${playerScore} - ${cpuScore} against the Computer! Better luck next time. \nTo play again, press Restart Game`)
        results(info, cpuSelect, playerSelect)


    } else if ((cpuScore + playerScore === 5 && playerScore > 3) || playerScore >= 3) {
        endGame()
        let info = (`You won! ${playerScore} - ${cpuScore} against the Computer`)
        results(info, cpuSelect, playerSelect)
        
    }

    
}



