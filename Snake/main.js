import {create as createSnake, update as updateSnake, render as renderSnake, checkCollision, checkOnPlayArea, reset as resetSnake} from './snake.js'
import {create as createFood, update as updateFood, render as renderFood, reset as resetFood} from './food.js'
import {update as renderScore, renderDeath, reset as resetHUD} from './HUD.js'

document.addEventListener('swiped', (e) => {
  console.log(e)
  alert('swipe')
})

let mainLoop

export function main() {
  reset()

  createSnake()
  createFood()

  mainLoop = setInterval(() => {
    update()
    if (!checkGameOver()) {
      render()
      
    } else {
      render(true)
      clearInterval(mainLoop)
      setTimeout(() => {
        renderDeath()
      }, 600)
    }
  }, 150)
}

function update() {
  updateFood()
  updateSnake()

}

function render(onlyHead) {
  
  if (onlyHead === true) {
    renderSnake(true)
  } else {
    renderSnake()
    renderFood()
    renderScore()
  }
}

function checkGameOver() {
  if (checkCollision() || !checkOnPlayArea()) return true
  return false
}

main()

function reset() {
  mainLoop = undefined
  resetSnake()
  resetFood()
  resetHUD()
}
