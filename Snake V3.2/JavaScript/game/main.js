import {toggleScreen} from '../UI.js'
import {init as initSnake, updateSnake, renderSnake, snakeDeath, snakePositions} from './snake.js'
import {updateFood, renderFood, init as initFood} from './food.js'
import {updateObstacles, renderObstacles, init as initObstacles} from './obstacles.js'
import {init as initUserInput} from './userInput.js'

toggleScreen('home')
let gameLoop = undefined

const startGameButtons = document.querySelectorAll('.gamemode__play')
export let gameMode = undefined

for (let i = 0; i < startGameButtons.length; i++) {
  startGameButtons[i].addEventListener('click', () => {
    gameMode = startGameButtons[i].id
    toggleScreen('game')
    init()
  })
}

function init() {
  let snakeSpeed = 150
  if (gameMode === 'speed') snakeSpeed = 80
  initSnake()
  initFood()
  initObstacles()
  initUserInput()
  gameLoop = setInterval(() => {
    updateSnake()
    if (snakeDeath) {
      clearInterval(gameLoop)
      initSnake()
      toggleScreen('home')
      return
    }
    updateFood()
    updateObstacles()
    renderSnake()
    renderFood()
    renderObstacles()
  }, snakeSpeed)
}