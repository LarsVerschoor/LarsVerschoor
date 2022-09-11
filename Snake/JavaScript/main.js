import {updateSnake, renderSnake, checkSnakeDeath, initSnake, removeSnake, snakeSegments} from './snake.js'
import {updateFood, renderFood, initFood, removeFood} from './food.js'
import {displayHomeScreen, settings} from './homeScreen.js'
import {updateStatistics} from './statistics.js'

if (window.confirm(I am currently designing snake v3.\nWant to see the current design?)) {
  window.open("https://www.figma.com/proto/8p3brM3XVNQ6OEje79hmyL/Untitled?node-id=1%3A2&scaling=contain&page-id=0%3A1")
}

let mainLoop = undefined
let millisecondsBetweenSnakeMove = 150

function main() {
  mainLoop = setInterval(() => {
    updateFood()
    renderFood()
    updateSnake()

    if (!checkSnakeDeath()) renderSnake()
    else {
      updateStatistics('previousScore', snakeSegments.length - 1)
      removeSnake()
      removeFood()
      clearInterval(mainLoop)
      displayHomeScreen()
    }
    
  }, millisecondsBetweenSnakeMove)
}

export function init() {
  // remove all elements
  const mainElement = document.querySelector('main')
  millisecondsBetweenSnakeMove = settings[2].value
  const allMainElementChildren = mainElement.children

  if (allMainElementChildren) {
    for (let i = 0; i < allMainElementChildren.length; i++) allMainElementChildren[i].remove()
  }
  
  //prepare main element for game start
  mainElement.classList = 'game-grid'
  const scoreElement = document.createElement('p')
  scoreElement.classList = 'score-element'
  mainElement.appendChild(scoreElement)

  // initialize all variables before game start
  initSnake()
  initFood()
  main()

  updateStatistics('gamesPlayed', 1)
}

displayHomeScreen()
