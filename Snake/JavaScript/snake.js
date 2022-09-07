import {settings} from './homeScreen.js'
import {updateStatistics} from './statistics.js'

export let deathByBorder = false

export let snakeSegments = [{x: 11, y: 11}]
let lastSnakeDirection = undefined
let snakeDirection = undefined
let lastSnakePosition = undefined

export function updateSnake() {

  if (snakeDirection) {
    lastSnakePosition = snakeSegments[snakeSegments.length - 1]
    for (let i = snakeSegments.length - 1; i >= 1; i--) {
      snakeSegments[i] = {...snakeSegments[i - 1]}
    }

    if (snakeDirection === 'left') snakeSegments[0].x -= 1
    if (snakeDirection === 'right') snakeSegments[0].x += 1
    if (snakeDirection === 'up') snakeSegments[0].y -= 1
    if (snakeDirection === 'down') snakeSegments[0].y += 1

    // teleporting through the game-grid borders
    if (deathByBorder === false) {
      if (snakeSegments[0].x > 21) snakeSegments[0].x -= 21
      if (snakeSegments[0].x < 1) snakeSegments[0].x += 21
      if (snakeSegments[0].y > 21) snakeSegments[0].y -= 21
      if (snakeSegments[0].y < 1) snakeSegments[0].y += 21
    }
    

    lastSnakeDirection = snakeDirection
  }
  const scoreElement = document.querySelector('.score-element')
  scoreElement.innerText = `score: ${snakeSegments.length - 1}`

  if (snakeDirection) updateStatistics('positionsMoved', 1)
}

export function renderSnake() {
  // remove old elements
  const allSnakeElements = document.querySelectorAll('.snake-segment, .snake-head')
  allSnakeElements.forEach(element => {
    element.remove()
  })

  // create new elements
  const gameGrid = document.querySelector('.game-grid')
  for (let i = 1; i < snakeSegments.length; i++) {
    const element = document.createElement('div')
    element.classList = 'snake-segment'
    element.style.gridColumn = snakeSegments[i].x
    element.style.gridRow = snakeSegments[i].y
    gameGrid.appendChild(element)
  }
  const headElement = document.createElement('div')
  headElement.classList = 'snake-head'
  headElement.style.gridColumn = snakeSegments[0].x
  headElement.style.gridRow = snakeSegments[0].y

  for (let i = 0; i < 2; i++) {
    const eyeElement = document.createElement('div')
    eyeElement.classList = 'snake-eye'

    const pupilElement = document.createElement('div')
    pupilElement.classList = 'snake-pupil'

    eyeElement.appendChild(pupilElement)
    headElement.appendChild(eyeElement)
  }

  if (!snakeDirection || snakeDirection === 'up') headElement.classList.add('up')
  if (snakeDirection === 'left') headElement.classList.add('left')
  if (snakeDirection === 'down') headElement.classList.add('down')
  if (snakeDirection === 'right') headElement.classList.add('right')

  gameGrid.appendChild(headElement)
}

export function increaseSnakeLength() {
  snakeSegments.push(lastSnakePosition)
}

window.addEventListener('keydown', (e) => {
  if ((e.key === 'w' || e.key === 'ArrowUp') && lastSnakeDirection !== 'down') snakeDirection = 'up'
  if ((e.key === 'a' || e.key === 'ArrowLeft') && lastSnakeDirection !== 'right') snakeDirection = 'left'
  if ((e.key === 's' || e.key === 'ArrowDown') && lastSnakeDirection !== 'up') snakeDirection = 'down'
  if ((e.key === 'd' || e.key === 'ArrowRight') && lastSnakeDirection !== 'left') snakeDirection = 'right'
})

export function isOnSnake(position) { // 17, 7, false
  for (let i = 0; i < snakeSegments.length; i++) {
    if (position.x === snakeSegments[i].x && position.y === snakeSegments[i].y) {
      return true
    }
  }
  return false
}

export function checkSnakeDeath() {
  for (let i = 1; i < snakeSegments.length; i++) {
    if (snakeSegments[0].x === snakeSegments[i].x && snakeSegments[0].y === snakeSegments[i].y) return true
  }
  if (deathByBorder === true) {
    if (snakeSegments[0].x > 21 || snakeSegments[0].x < 1 || snakeSegments[0].y > 21 || snakeSegments[0].y < 1) return true
  }
  return false
}

export function initSnake() {
  snakeSegments = [{x: 11, y: 11}]
  lastSnakeDirection = undefined
  snakeDirection = undefined
  lastSnakePosition = undefined
  let root = document.documentElement
  root.style.setProperty('--color-snake', `${settings[3].value}`)
  root.style.setProperty('--color-snake-head', `${settings[4].value}`)
  deathByBorder = settings[1].value
}

export function removeSnake() {
  snakeSegments = []
  const allSnakeElements = document.querySelectorAll('.snake-segment, .snake-head')
  allSnakeElements.forEach(element => {
    element.remove()
  })
}