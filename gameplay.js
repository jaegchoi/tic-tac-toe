function computerPlay() {
    let decision;
    switch (Math.floor(Math.random() * 3)) {
        case 1:
            decision = 'rock';
            break;
        case 2:
            decision = 'paper';
            break;
        case 3:
            decision = 'scissors';
            break;
    }
    console.log(`Computer selected ${decision}`);
    return decision;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection !== 'rock' &&
        playerSelection !== 'paper' &&
        playerSelection !== 'scissors') {
        console.log('Player selection must be rock paper or scissors');
        return;
    }

    let winner;
    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'rock')) {
        winner = 'player';
    } else {
        winner = 'computer';
    }

    return winner;
}

function game() {

    let playerScore = 0;
    let computerScore = 0;
    let rounds = 5;
    
    for(let i = 0; i < rounds; i++) {
        let playerSelection = window.prompt('Type in rock, paper, or scissors');
        let computerSelection = computerPlay();
        let winner = playRound(playerSelection, computerSelection);

        console.log(`Player picked ${playerSelection}, computer picked ${computerSelection}, I wonder who wins`);

        console.log(`${winner} wins round ${i}`);
        winner === 'player' ? playerScore++ : computerScore++;
    }
    if ( playerScore > computerScore) {
        console.log(`Player won ${playerScore}:${computerScore}`);
    } else if (computerScore > playerScore) {
        console.log(`The compute won ${computerScore}:${playerSCore}`);
    } else {
        console.log(`Tie game: ${playerScore}:${computerScore}`);
    }
}

game();