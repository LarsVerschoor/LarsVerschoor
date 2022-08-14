import {positions as foodPositions, remove as removeFood} from './food.js'

export let bodyPositions = [
  {x: 10, y: 10},
  {x: 10, y: 11},
  {x: 10, y: 12}
]

let snakeDirection = 'up'
let lastSnakeDirection
let lastTailPosition

export function create() {
  bodyPositions = []
  bodyPositions.push({x: 11, y: 13})
  bodyPositions.push({x: 11, y: 14})
  bodyPositions.push({x: 11, y: 15})
}

export function update() {
  if (checkEatenFood()) {
    removeFood(bodyPositions[0])
    bodyPositions.push(lastTailPosition)
  }
  
  lastTailPosition = bodyPositions[bodyPositions.length - 1]

  for (let i = bodyPositions.length - 2; i >= 0; i--) {
    bodyPositions[i + 1] = { ...bodyPositions[i] }
  }

  // moving directions
  lastSnakeDirection = snakeDirection

  if (snakeDirection === 'up') {
    bodyPositions[0].y--
    return
  }
  if (snakeDirection === 'down') {
    bodyPositions[0].y++
    return
  }
  if (snakeDirection === 'left') {
    bodyPositions[0].x--
    return
  }
  if (snakeDirection === 'right') {
    bodyPositions[0].x++
    return
  }
}

export function render(onlyHead) { // works
  if (onlyHead) {
    const headElement = document.querySelector('.head')
    headElement.classList.remove('up')
     headElement.classList.remove('down')
      headElement.classList.remove('left')
       headElement.classList.remove('right')
    headElement.classList.add(snakeDirection)
    
    return
  }

  // remove snake
  const allSnakeBodyElements = document.querySelectorAll('.snake')
  allSnakeBodyElements.forEach(element => {
    element.remove()
  })

  // render body
  const gameGrid = document.querySelector('#gameGrid')
  for (let i = 1; i < bodyPositions.length; i++) {
    const newBodyElement = document.createElement('div')
    newBodyElement.classList.add('snake')
    newBodyElement.style.gridColumn = bodyPositions[i].x
    newBodyElement.style.gridRow = bodyPositions[i].y

    gameGrid.appendChild(newBodyElement)
  }

  // render head
  const newHeadElement = document.createElement('div')
  newHeadElement.classList.add('snake')
  newHeadElement.classList.add('head')
  newHeadElement.style.gridColumn = bodyPositions[0].x
  newHeadElement.style.gridRow = bodyPositions[0].y
  
  // render eyes
  const leftEyeElement = document.createElement('div')
  const rightEyeElement = document.createElement('div')
  const leftPupilElement = document.createElement('div')
  const rightPupilElement = document.createElement('div')

  leftEyeElement.appendChild(leftPupilElement)
  rightEyeElement.appendChild(rightPupilElement)

  newHeadElement.appendChild(leftEyeElement)
  newHeadElement.appendChild(rightEyeElement)

  newHeadElement.classList.add(snakeDirection)

  gameGrid.appendChild(newHeadElement)
}

window.addEventListener('keydown', (e) => {
  if ((e.key === 'ArrowUp' || e.key === 'w') && lastSnakeDirection !== 'down') snakeDirection = 'up'
  if ((e.key === 'ArrowDown' || e.key === 's') && lastSnakeDirection !== 'up') snakeDirection = 'down'
  if ((e.key === 'ArrowLeft' || e.key === 'a') && lastSnakeDirection !== 'right') snakeDirection = 'left'
  if ((e.key === 'ArrowRight' || e.key === 'd') && lastSnakeDirection !== 'left') snakeDirection = 'right'
})

export function isOnSnake(position) {
  for (let i = 0; i < bodyPositions.length; i++) {
    console.log('food: ' + position.x, position.y)
    console.log('snake: ' + bodyPositions[i].x, bodyPositions[i].y)
    if (position.x === bodyPositions[i].x && position.y === bodyPositions[i].y) {
      console.log('test2')
      return true
      
    }
  }
  return false
}

function checkEatenFood() {
  for (let i = 0; i < foodPositions.length; i++) {
    if (foodPositions[i].x === bodyPositions[0].x && foodPositions[i].y === bodyPositions[0].y) {
      return true
    }
  }
}

export function checkCollision() {
  for (let i = 1; i < bodyPositions.length; i++) {
    if (bodyPositions[i].x === bodyPositions[0].x && bodyPositions[i].y === bodyPositions[0].y) {
      return true
    }
  }
}

export function checkOnPlayArea() {
  if (bodyPositions[0].x > 21 || bodyPositions[0].x <= 0 || bodyPositions[0].y > 21 || bodyPositions[0].y <= 0) {
      return false
  }
  return true
}

export function reset() {
  bodyPositions = []
  snakeDirection = 'up'
  lastSnakeDirection = undefined
  lastTailPosition = undefined
}