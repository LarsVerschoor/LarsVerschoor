import {bodyPositions as snakeBodyPositions} from './snake.js'
import {main} from './main.js'
const scoreElement = document.querySelector('.score')

export function update() {
  scoreElement.innerText = `Score: ${snakeBodyPositions.length}`
}

export function renderDeath() {
  const deathScreenElement = document.createElement('div')
  deathScreenElement.classList.add('death-screen')
  const deathConfirmationElement = document.createElement('p')
  deathConfirmationElement.classList.add('death-confirmation')
  deathConfirmationElement.innerText = 'YOU DIED'

  const scoreElement = document.createElement('p')
  scoreElement.classList.add('death-score')
  scoreElement.innerText = `You snake was ${snakeBodyPositions.length} segments long!`

  const optionsContainer = document.createElement('div')
  optionsContainer.classList.add('death-options-container')

  const playAgainButton = document.createElement('button')
  playAgainButton.innerText = 'PLAY AGAIN'
  playAgainButton.classList.add('death-option')
  playAgainButton.addEventListener('click', () => {
    main()
  })

  const exitButton = document.createElement('button')
  exitButton.innerText = 'EXIT GAME'
  exitButton.classList.add('death-option')
  exitButton.addEventListener('click', () => {
    window.close()
  })

  optionsContainer.appendChild(playAgainButton)
  optionsContainer.appendChild(exitButton)
  
  deathScreenElement.appendChild(deathConfirmationElement)
  deathScreenElement.appendChild(scoreElement)
  deathScreenElement.appendChild(optionsContainer)

  document.body.appendChild(deathScreenElement)
}

export function reset() {
  const deathScreenElement = document.querySelector('.death-screen')
  if (deathScreenElement) deathScreenElement.remove()
  
  scoreElement.innerText = 'Score: 3'
}