import {gameMode} from './main.js'
import {isOnObstacle} from './obstacles.js'
import {requestedDirection as inputDirection} from './userInput.js'
export let snakeDeath = false
export let snakePositions = undefined
let snakeDirection = undefined
let snakeCollapsing = undefined
let lengthToAdd = 0
let score

export function init() {
  snakeDeath = false
  lengthToAdd = 0
  snakePositions = [
    {x: 11, y: 11},
    {x: 11, y: 12},
    {x: 11, y: 13}
  ]
  snakeCollapsing = false
  snakeDirection = undefined
  score = 0
}



export function updateSnake() {
  if (lengthToAdd > 0) {
    increaseSnakeLength(0)
  }
  if (snakeCollapsing === true) {
    snakePositions.pop()
    if (snakePositions.length === 0) snakeDeath = true
    return
  }
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

  const prevHeadPos = {x: snakePositions[0].x, y: snakePositions[0].y}
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

  if (gameMode !== 'solidWalls') {
    if (snakePositions[0].x >= 21) snakePositions[0].x -= 21
    if (snakePositions[0].x < 1) snakePositions[0].x += 21
    if (snakePositions[0].y >= 21) snakePositions[0].y -= 21
    if (snakePositions[0].y < 1) snakePositions[0].y += 21
  } else {
    if (snakePositions[0].x > 21 || snakePositions[0].x <= 0 || snakePositions[0].y > 21 || snakePositions[0].y <= 0) {
      snakeCollapsing = true
      updateLocalStorage(score)
    }
  }
  
  for (let i = 1; i < snakePositions.length; i++) {
    if (snakePositions[0].x === snakePositions[i].x && snakePositions[0].y === snakePositions[i].y) {
      snakeCollapsing = true
      updateLocalStorage(score)
    }
  }
  
  if (isOnObstacle(snakePositions[0].x, snakePositions[0].y)) {
    snakeCollapsing = true
    updateLocalStorage(score)
  }

  if (snakeCollapsing === true) {
    snakePositions.splice(1, 1)
    snakePositions[0].x = prevHeadPos.x
    snakePositions[0].y = prevHeadPos.y
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
  let leftEye = document.createElement('div')
  leftEye.classList = 'eye'
  
  let rightEye = document.createElement('div')
  rightEye.classList= 'eye'
  let leftPupil = document.createElement('div')
  leftPupil.classList = 'pupil'
  let rightPupil = document.createElement('div')
  rightPupil.classList = 'pupil'
  leftEye.appendChild(leftPupil)
  rightEye.appendChild(rightPupil)
  if (snakeCollapsing === true) {
    leftPupil.classList.add('dead')
    rightPupil.classList.add('dead')
  }
  newElement.appendChild(leftEye)
  newElement.appendChild(rightEye)
  newElement.classList.add(snakeDirection)
  gameGrid.appendChild(newElement)
  
  if (snakeCollapsing) return
  const scoreElement = document.querySelector('.score')
  scoreElement.innerText = `Score: ${snakePositions.length - 1}`
  score = snakePositions.length - 1
}

export function increaseSnakeLength(amount) {
  lengthToAdd += amount
  snakePositions.push({...snakePositions[snakePositions.length - 1]})
  lengthToAdd--
}

export function isOnSnake(x, y) {
  for (let i = 0; i < snakePositions.length; i++) {
    if (snakePositions[i].x === x && snakePositions[i].y === y) {
      return true
    }
  }
  return false
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
    case 'speed':
      if (highScores.speed >= score) return
      highScores.speed = score
      break
    case 'goldRush':
      if (highScores.goldRush >= score) return
      highScores.goldRush = score
      break
    // als gamemode er niet in staat, aanmaken. zo hoef je die javascript in index.html niet te hebben.
  }
  localStorage.setItem('highScores', JSON.stringify(highScores))
}