'use strict'

let playerCount = 0;
let computerCount = 0;
let roundWinner = ''

function playRound(playerSelection, computerSelection)
{
    if (computerSelection === playerSelection)
    {
        roundWinner = 'tie'
    }
    else if (computerSelection === "rock" && playerSelection === "paper")
    {
        playerCount++
        roundWinner = 'player'
    }
    else if (computerSelection === "paper" && playerSelection === "scissors")
    {
        playerCount++
        roundWinner = 'player'
    }
    else if (computerSelection === "scissors" && playerSelection === "rock")
    {
        playerCount++
        roundWinner = 'player'
    }
    else if (computerSelection === "paper" && playerSelection === "rock")
    {
        computerCount++
        roundWinner = 'bot'
    }
    else if (computerSelection === "scissors" && playerSelection === "paper")
    {
        computerCount++
        roundWinner = 'bot'
    }
    else if (computerSelection === "rock" && playerSelection === "scissors")
    {
        computerCount++
        roundWinner = 'bot'
    }
}

const result = document.querySelector('.result-box')
const scoreInfo = document.querySelector('.score')

const rock = document.querySelector('#rock');

rock.addEventListener("click", () =>
{
    handleClick("rock")
});

const paper = document.querySelector('#paper');

paper.addEventListener("click", () =>
{
    handleClick("paper")
});

const scissors = document.querySelector('#scissors');

scissors.addEventListener("click", () =>
{
    handleClick("scissors")
});

function computerPlay()
{
    let types = ["rock", "paper", "scissors"]
    let randomNumber = Math.floor(Math.random() * 3)
    let computerChoice = types[randomNumber]
    return computerChoice
}

function isGameOver()
{
    if (playerCount === 5)
    {
        return true
    }
    else if (computerCount === 5)
    {
        return true
    }
}

function updateScore(playerSelection, computerSelection)
{
    if (roundWinner === 'tie') 
    {
        scoreInfo.textContent = `It's a tie! Both picked ${playerSelection}!`
    } 
    else if (roundWinner === 'player') 
    {
        scoreInfo.textContent = `You won! Computer picked ${computerSelection}!`
    } 
    else if (roundWinner === 'bot') 
    {
        scoreInfo.textContent = `You lost! Computer picked ${computerSelection}!`
    }

    result.textContent = `${playerCount} : ${computerCount}`
}

//Initialize game

function handleClick(playerSelection)
{
    if (isGameOver())
    {
        if (playerCount === 5)
        {
            modalTitle.textContent = "You won! Congrats!"
            modalText.textContent = `The result was ${playerCount} : ${computerCount}!`
        }
        else if (computerCount === 5)
        {
            modalTitle.textContent = "You lost! Unlucky!"
            modalText.textContent = `The result was ${playerCount} : ${computerCount}!`
        }

        return modal.style.display = "block";
    }

    const computerSelection = computerPlay()
    console.log(playerSelection)
    console.log(computerSelection)
    playRound(playerSelection, computerSelection)
    console.log(roundWinner)
    console.log(`${playerCount}:${computerCount}`)
    updateScore(playerSelection, computerSelection)
}

//Modal
const modal = document.querySelector('#myModal')
const modalTitle = document.querySelector('.modal-title')
const modalText = document.querySelector('.modal-text')
const modalPlayAgain = document.querySelector('#play-again')
const modalMenu = document.querySelector('#menu-button')

window.onclick = function(event) 
{
    if (event.target == modal) 
    {
      modal.style.display = "none";
    }
}

modalMenu.addEventListener("click", () =>
{
    window.open('index.html', '_self')
});

modalPlayAgain.addEventListener("click", () =>
{
    window.open('main.html', '_self')
});