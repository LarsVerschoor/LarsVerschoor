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
  initSnake()
  initFood()
  initObstacles()
  initUserInput()
  gameLoop = setInterval(() => {
    updateSnake()
    if (snakeDeath) {
      clearInterval(gameLoop)
      updateLocalStorage(snakePositions.length - 1)
      initSnake()
      toggleScreen('home')
      return
    }
    updateFood()
    updateObstacles()
    renderSnake()
    renderFood()
    renderObstacles()
  }, 150)
}

function updateLocalStorage(score) {
  const highScores = JSON.parse(localStorage.getItem('highScores'))
  switch(gameMode){
    case 'casual':
      if (highScores.casual >= score) return
      highScores.casual = score
      break
    case 'obstacles':
      if (highScores.obstacles >= score) return
      highScores.obstacles = score
      break
    case 'solidWalls':
      if (highScores.solidWalls >= score) return
      highScores.solidWalls = score
      break
    case 'foodMadness':
      if (highScores.foodMadness >= score) return
      highScores.foodMadness = score
      break
    case 'completeMadness':
      if (highScores.completeMadness >= score) return
      highScores.completeMadness = score
      break
  }
  localStorage.setItem('highScores', JSON.stringify(highScores))
}