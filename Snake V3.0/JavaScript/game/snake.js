import {gameMode} from './main.js'
import {isOnObstacle} from './obstacles.js'
import {requestedDirection as inputDirection} from './userInput.js'
export let snakeDeath = false
export let snakePositions = undefined
let snakeDirection = undefined

export function init() {
  snakeDeath = false
  snakePositions = [
    {x: 11, y: 11},
    {x: 11, y: 12},
    {x: 11, y: 13}
  ]
  
  snakeDirection = undefined
}

export function updateSnake() {
  if (inputDirection !== undefined) {
    if (inputDirection === 'up' && snakeDirection !== 'down') snakeDirection = 'up'
    if (inputDirection === 'left' && snakeDirection !== 'right') snakeDirection = 'left'
    if (inputDirection === 'down' && snakeDirection !== 'up' && snakeDirection) snakeDirection = 'down'
    if (inputDirection === 'right' && snakeDirection !== 'left') snakeDirection = 'right'
  }

  if (!snakeDirection) return
  for (let i = snakePositions.length - 1; i > 0; i--) {
    snakePositions[i] = {...snakePositions[i - 1]}
  }

  switch (snakeDirection) {
    case 'up':
      snakePositions[0].y -= 1
      break
    case 'left':
      snakePositions[0].x -= 1
      break
    case 'down':
      snakePositions[0].y += 1
      break
    case 'right':
      snakePositions[0].x += 1
  }

  if (isOnObstacle(snakePositions[0].x, snakePositions[0].y)) snakeDeath = true

  if (gameMode !== 'solidWalls') {
    if (snakePositions[0].x > 21) snakePositions[0].x -= 21
    if (snakePositions[0].x < 1) snakePositions[0].x += 21
    if (snakePositions[0].y > 21) snakePositions[0].y -= 21
    if (snakePositions[0].y < 1) snakePositions[0].y += 21
  } else {
    if (snakePositions[0].x > 21 || snakePositions[0].x <= 0 || snakePositions[0].y > 21 || snakePositions[0].y <= 0) {
      snakeDeath = true
    }
  }
  
  for (let i = 1; i < snakePositions.length; i++) {
    if (snakePositions[0].x === snakePositions[i].x && snakePositions[0].y === snakePositions[i].y) snakeDeath = true
  }
}

export function renderSnake() {
  // Removing Old Elements
  const allOldSnakeElements = document.querySelectorAll('.snake')
  const allOldHeadElements = document.querySelectorAll('.head')

  for (let i = 0; i < allOldSnakeElements.length; i++) {
    allOldSnakeElements[i].remove()
  }
  for (let i = 0; i < allOldHeadElements.length; i++) {
    allOldHeadElements[i].remove()
  }

  // Adding New Elements
  const gameGrid = document.querySelector('.game')
  for (let i = 1; i < snakePositions.length; i++) {
    const newElement = document.createElement('div')
    newElement.classList = 'snake'
    newElement.style.gridColumn = snakePositions[i].x
    newElement.style.gridRow = snakePositions[i].y
    gameGrid.appendChild(newElement)
  }
  const newElement = document.createElement('div')
  newElement.classList = 'head'
  newElement.style.gridColumn = snakePositions[0].x
  newElement.style.gridRow = snakePositions[0].y
  gameGrid.appendChild(newElement)
}

export function increaseSnakeLength() {
  snakePositions.push({...snakePositions[snakePositions.length - 1]})
}

export function isOnSnake(x, y) {
  for (let i = 0; i < snakePositions.length; i++) {
    if (snakePositions[i].x === x && snakePositions[i].y === y) {
      return true
    }
  }
  return false
}
