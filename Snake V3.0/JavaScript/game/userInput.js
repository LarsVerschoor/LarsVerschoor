export let requestedDirection = undefined

export function init() {
  requestedDirection = undefined
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'w' || e.key === 'ArrowUp') requestedDirection = 'up'
  if (e.key === 'a' || e.key === 'ArrowLeft') requestedDirection = 'left'
  if (e.key === 's' || e.key === 'ArrowDown') requestedDirection = 'down'
  if (e.key === 'd' || e.key === 'ArrowRight') requestedDirection = 'right'
})

let touchstartX
let touchstartY

document.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX
  touchstartY = e.changedTouches[0].screenY
})

document.addEventListener('touchend', e => {
  checkDirection(e.changedTouches[0].screenX, e.changedTouches[0].screenY)
})

function checkDirection(xEnd, yEnd) {
  let right = touchstartX - xEnd
  let up = touchstartY - yEnd
  let down = -(touchstartY - yEnd)
  let left = -(touchstartX - xEnd)
  if (up > right && up > left && up > down) requestedDirection = 'up'
  if (left > right && left > up && left > down) requestedDirection = 'left'
  if (down > up && down > right && down > left) requestedDirection = 'down'
  if (right > down && right > left && right > up) requestedDirection = 'right'
}
