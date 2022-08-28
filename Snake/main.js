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









// mobile swipe zooi





document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 && lastSnakeDirection !== 'right') {
            snakeDirection = 'left'
        } else if (xDiff < 0 && lastSnakeDirection !== 'left') {
            snakeDirection = 'right'
        }                       
    } else {
        if ( yDiff > 0 && lastSnakeDirection !== 'down') {
            snakeDirection = 'up' 
        } else if (yDiff < 0 && lastSnakeDirection !== 'up') { 
            snakeDirection = 'down'
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};
