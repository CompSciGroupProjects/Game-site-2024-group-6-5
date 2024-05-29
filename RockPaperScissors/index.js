function getRandomInt(max)
{
    return Math.floor(Math.random() * (max + 1));
}

function runGame(playerChoice)
{
    const computerChoice = ["rock", "paper", "scissors"][getRandomInt(2)];
    console.log(playerChoice);
    console.log(computerChoice);

    const playerchoiceSpan = document.getElementById('player-choice');
    playerchoiceSpan.innerHTML = playerChoice;

    const computerchoiceSpan = document.getElementById('computer-choice');
    computerchoiceSpan.innerHTML = computerChoice;

    const gameResult = document.querySelector('.game__result');
    const resultSpan = document.getElementById('result');
    if (playerChoice === computerChoice)
    {
        resultSpan.innerHTML = 'You Tied';
    }
    else if(playerChoice === "rock")
    {
        if(computerChoice === "scissors")
        {
            resultSpan.innerHTML = 'You Won';
        }
        else
        {
            resultSpan.innerHTML = 'You Lost';
        }
    }
    else if(playerChoice === "paper")
    {
        if(computerChoice === "rock")
        {
            resultSpan.innerHTML = 'You Won';
        }
        else
        {
            resultSpan.innerHTML = 'You Lost';
        }
    }
    else if(playerChoice === "scissors")
    {
        if(computerChoice === "paper")
        {
            resultSpan.innerHTML = 'You Won';
        }
        else
        {
            resultSpan.innerHTML = 'You Lost';
        }
    }

    gameResult.classList.remove('hide');
}