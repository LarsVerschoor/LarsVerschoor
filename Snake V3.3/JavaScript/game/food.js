import {gameMode} from './main.js'
import {isOnSnake, increaseSnakeLength} from './snake.js'
import {isOnObstacle} from './obstacles.js'
let foodElements = []

export function init() {
  foodElements = []
}

function createNewFoodElement() {
  let x = Math.floor(Math.random() * 21) + 1
  let y = Math.floor(Math.random() * 21) + 1
  let goldenApple = false
  let goldenAppleChanceIndex = .05
  if (gameMode === 'goldRush') goldenAppleChanceIndex = 1
  if (Math.random() < goldenAppleChanceIndex) goldenApple = true
  if (isOnSnake(x, y) || isOnObstacle(x, y) || isOnFood(x, y)) {
    return createNewFoodElement()
  }
  const newApple = {
    x: x,
    y: y,
    goldenApple: goldenApple
  }
  return newApple
}

export function updateFood() {
  for (let i = 0; i < foodElements.length; i++) {
    if (isOnSnake(foodElements[i].x, foodElements[i].y)) {
      if (foodElements[i].goldenApple === false) increaseSnakeLength(1)
      else increaseSnakeLength(5)
      foodElements.splice(i, 1)
    }
  }
  let foodToAdd
  if (gameMode === 'foodMadness' || gameMode === 'completeMadness') {
    foodToAdd = 4 - foodElements.length
  } else {
    foodToAdd = 1 - foodElements.length
  }
  for (let i = 0; i < foodToAdd; i++) {
    foodElements.push(createNewFoodElement())
  }
  return
}

export function renderFood() {
  // Remove Old Food Elements
  const allOldFoodElements = document.querySelectorAll('.food')
  allOldFoodElements.forEach(oldFoodElement => {
    oldFoodElement.remove()
  })

  // Create New Food Elements
  const gameGrid = document.querySelector('.game')
  for (let i = 0; i < foodElements.length; i++) {
    
    const newFoodElement = document.createElement('div')
    newFoodElement.classList = 'food'
    newFoodElement.style.gridColumn = foodElements[i].x
    newFoodElement.style.gridRow = foodElements[i].y
    if (foodElements[i].goldenApple === true) newFoodElement.classList.add('golden')
    gameGrid.appendChild(newFoodElement)
  }
}

export function isOnFood(x, y) {
  for (let i = 0; i < foodElements.length; i++) {
    if (foodElements[i].x === x && foodElements[i].y === y) {
      return true
    }
  }
  return false
}