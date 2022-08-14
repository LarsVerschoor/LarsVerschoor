import {isOnSnake} from './snake.js'

export const positions = []
const amountOfFood = 1

export function create() {
  const newFood = {x: Math.floor(Math.random() * 21) + 1, y: Math.floor(Math.random() * 21) + 1}
  if (isOnSnake(newFood)) {
    create()
    return
  }
  positions.push(newFood)
}

export function remove(positionToRemove) {
  for (let i = 0; i < positions.length; i++) {
    if (positionToRemove.x === positions[i].x && positionToRemove.y === positions[i].y) {
      positions.pop(i)
    }
  }
}

export function update() {
  const foodToCreate = amountOfFood - positions.length
  for (let i = 0; i < foodToCreate; i++) {
    create()
  }
}

export function render() {
  const allFoodElements = document.querySelectorAll('.food')
  allFoodElements.forEach(element => {
    element.remove()
  })

  for (let i = 0; i < positions.length; i++) {
    const gameGrid = document.querySelector('#gameGrid')
    const newFoodElement = document.createElement('div')
    newFoodElement.classList.add('food')
    newFoodElement.style.gridColumn = positions[i].x
    newFoodElement.style.gridRow = positions[i].y
    gameGrid.appendChild(newFoodElement)
  }
}

export function reset() {
  positions.forEach(position => {
    positions.pop(position)
  })
}