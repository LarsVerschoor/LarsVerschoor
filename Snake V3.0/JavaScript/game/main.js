import {toggleScreen} from '../UI.js'
import {init as initSnake, updateSnake, renderSnake, snakeDeath, snakePositions} from './snake.js'
import {updateFood, renderFood, init as initFood} from './food.js'
import {updateObstacles, renderObstacles, init as initObstacles} from './obstacles.js'

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
  if (highScores.gameMode > score) return
  switch(gameMode){
    case 'casual':
      highScores.casual = score
      break
    case 'obstacles':
      highScores.obstacles = score
      break
    case 'solidWalls':
      highScores.solidWalls = score
      break
    case 'foodMadness':
      highScores.foodMadness = score
      break
    case 'completeMadness':
      highScores.completeMadness = score
      break
  }
  localStorage.setItem('highScores', JSON.stringify(highScores))
}
