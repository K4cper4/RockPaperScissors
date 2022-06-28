'use strict'
// OLD SCRIPT
function game() 
{   
    let rounds = prompt("How many round do you want?")
    let playerCount = 0
    let computerCount = 0

    if (rounds !== null)
    {
        for (let i = 0; i < rounds; i++)
        {
            console.log(`Round ${i + 1}`)

            let pick = prompt("Pick Rock, Paper or Scissors")
            let playerChoice = pick.toLowerCase()
            let types = ["rock", "paper", "scissors"]
            

            function computerPlay()
            {
                let randomNumber = Math.floor(Math.random() * 3)
                let computerChoice = types[randomNumber]
                return computerChoice
            }

            let computerChoice = computerPlay()

            console.log(`Player: ${playerChoice}`)
            console.log(`Bot: ${computerChoice}`)

            function playRound(playerSelection, computerSelection)
            {
                if (computerSelection === playerSelection)
                {
                    return `Draw! Both picked ${playerSelection}!`
                }
                else if (computerSelection === "rock" && playerSelection === "paper")
                {
                    playerCount += 1
                    return `You win! Paper beats rock!`
                }
                else if (computerSelection === "paper" && playerSelection === "scissors")
                {
                    playerCount += 1
                    return `You win! Scissors beats paper!`
                }
                else if (computerSelection === "scissors" && playerSelection === "rock")
                {
                    playerCount += 1
                    return `You win! Rock beats scissors!`
                }
                else if (computerSelection === "paper" && playerSelection === "rock")
                {
                    computerCount += 1
                    return `You lose! Paper beats rock!`
                }
                else if (computerSelection === "scissors" && playerSelection === "paper")
                {
                    computerCount += 1
                    return `You lose! Scissors beats paper!`
                }
                else if (computerSelection === "rock" && playerSelection === "scissors")
                {
                    computerCount += 1
                    return `You lose! Rock beats scissors!`
                }
            }

            console.log(playRound(playerChoice, computerChoice))
        }
        if (playerCount > computerCount)
        {
            console.log(`Player won! The result is ${playerCount}:${computerCount}`)
        }
        else if (playerCount < computerCount)
        {
            console.log(`Bot won! The result is ${playerCount}:${computerCount}`)
        }
        else
        {
            console.log("Draw!")
        }
    }
    else
    {
        alert("You entered wrong number!")
    }
}

game()