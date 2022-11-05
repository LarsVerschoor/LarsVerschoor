import {gameMode} from './main.js'
import {isOnFood} from './food.js'
import {isOnSnake} from './snake.js'
let obstacles = []

export function init() {
  obstacles = []
}

function createObstacle() {
  const x = Math.floor(Math.random() * 21) + 1
  const y = Math.floor(Math.random() * 21) + 1
  if (isOnFood(x, y) || isOnSnake(x, y) || isOnObstacle(x, y)) return createObstacle()
  return {x, y}
}

export function updateObstacles() {
  if (gameMode === 'obstacles' || gameMode === 'completeMadness') {
    let obstaclesToAdd = 15 - obstacles.length
    for (let i = 0; i < obstaclesToAdd; i++) {
      obstacles.push(createObstacle())
    }
  } else return
}

export function renderObstacles() {
  const gameGrid = document.querySelector('.game')
  // Remove All Old Elements
  const allOldElements = document.querySelectorAll('.obstacle')
  allOldElements.forEach(oldElement => {oldElement.remove()})

  // Create All New Elements
  for (let i = 0; i < obstacles.length; i++) {
    const newElement = document.createElement('div')
    newElement.classList = 'obstacle'
    newElement.style.gridColumn = obstacles[i].x
    newElement.style.gridRow = obstacles[i].y
    gameGrid.appendChild(newElement)
  }
}

export function isOnObstacle(x, y) {
  for (let i = 0; i < obstacles.length; i++) {
    if (obstacles[i].x === x && obstacles[i].y === y) return true
  }
  return false
}