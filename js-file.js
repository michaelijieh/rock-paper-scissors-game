document.getElementById('buttons').style.display = "none";
document.getElementById('restartGame').style.display = "none"

const start = document.getElementById('startGame');
start.addEventListener('click', function () {
    document.getElementById('buttons').style.display = "block";
    document.getElementById('startGame').style.display = "none";
    document.getElementById('restartGame').style.display = "block";

})

const restart = document.getElementById('restartGame');
restart.addEventListener('click', function () {
    location.reload()
}) 


const buttons = document.querySelectorAll('input');
buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})


function getComputerChoice () {
    let cpuSelect = Math.ceil(Math.random() * 3);
    
    if (cpuSelect === 3) {
      return cpuSelect = "rock";
    } else if (cpuSelect === 2) {
      return cpuSelect = "paper";
    } else {
      return cpuSelect = "scissors";
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
        results.style.color = 'grey'
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
    
}


let playerSelect;
let playerScore = 0;
let cpuScore = 0;


function playRound (message) {
    let playerSelect = message;
    let cpuSelect = getComputerChoice();
    console.log (playerSelect, cpuSelect);


    if ((cpuSelect == "rock" && playerSelect == "scissors") || 
        (cpuSelect == "scissors" && playerSelect == "paper") || 
        (cpuSelect == "paper" && playerSelect == "rock")) {
        let info = (`You lose!! ${cpuSelect} beats ${playerSelect}`)
        results(info, cpuSelect, playerSelect);
        cpuScore++;
        cpuScoreBoard(cpuScore);

        if ((Math.abs(cpuScore - playerScore) === 3 && cpuScore > playerScore) || (cpuScore + playerScore === 5)) {
            endGame()
            let info = (`You lost ${playerScore} - ${cpuScore} against the Computer! Better luck next time. \nTo play again, press Restart Game`)
            results(info, cpuSelect, playerSelect)
        }
        
        
      } else if ((cpuSelect == "paper" && playerSelect == "scissors") ||
        (cpuSelect == "rock" && playerSelect == "paper") ||
        (cpuSelect == "scissors" && playerSelect == "rock") ) {
        let info = (`You win!! ${playerSelect} beats ${cpuSelect}`);
        results(info, cpuSelect, playerSelect);
        playerScore++;
        playerScoreBoard(playerScore);
        if ((Math.abs(cpuScore - playerScore) === 3 && playerScore > cpuScore) || (cpuScore + playerScore === 5)) {
            endGame()
            let info = (`You won ${playerScore} - ${cpuScore} against the Computer. \nTo play again, press Restart Game`)
            results(info, cpuSelect, playerSelect)
            
        }


      } else {
        let info = (`It's a tie. Try again ${cpuSelect} is same as ${playerSelect}`);
        return results(info);
      }
}



