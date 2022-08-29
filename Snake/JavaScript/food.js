import {isOnSnake, increaseSnakeLength} from './snake.js'
import {settings} from './homeScreen.js'

let amountOfFoodSegments = 1
let foodSegments = []


function createNewFoodSegment() {
  const newFoodSegment = {x: Math.floor(Math.random() * 21) + 1, y: Math.floor(Math.random() * 21) + 1}

  if (isOnSnake(newFoodSegment)) {
    createNewFoodSegment()
    return
  }
  foodSegments.push(newFoodSegment)
}

export function updateFood() {
  for (let i = 0; i < foodSegments.length; i++) {
    if (isOnSnake(foodSegments[i])) {
      foodSegments.splice([i], 1)
      createNewFoodSegment()
      increaseSnakeLength()
    }
  }
}

export function renderFood() {
  // remove old food elements
  const allFoodElements = document.querySelectorAll('.food-segment')
  allFoodElements.forEach(element => {
    element.remove()
  })

  // create new food elements
  const gameGrid = document.querySelector('.game-grid')
  foodSegments.forEach(segment => {
    const element = document.createElement('div')
    element.classList = 'food-segment'
    element.style.gridColumn = segment.x
    element.style.gridRow = segment.y
    gameGrid.appendChild(element)
  })
}



export function initFood() {
  foodSegments = []
  amountOfFoodSegments = settings[0].value
  
  for (let i = 0; i < amountOfFoodSegments; i++) {
    createNewFoodSegment()
  }

  let root = document.documentElement
  root.style.setProperty('--color-food', settings[5].value)
}

export function removeFood() {
  foodSegments = []
  const allFoodElements = document.querySelectorAll('.food-segment')
  allFoodElements.forEach(element => {
    element.remove()
  })
}