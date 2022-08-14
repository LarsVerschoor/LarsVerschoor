const allGameGridItems = document.querySelectorAll('.game-grid__item')

let positions = [0, 1, 2, 3, 4, 5, 6, 7, 8]
let currentPlayer = 'cross'

allGameGridItems.forEach((gridItem, positionIndex) => {
  gridItem.addEventListener('click', () => {
    if (checkWin() === true || checkTie() === true) return
    if (positions[positionIndex] === 'cross' || positions[positionIndex] === 'circle') return
    
    placeNewPlayer(positionIndex)
    renderGame()

    if (checkWin() === true) {
      removeHoverEffects()
      displayPlayerWon()
      return
    }
    if (checkTie() === true) {
      removeHoverEffects()
      displayTie()
      return
    }

    const root = document.querySelector(':root')
    if (currentPlayer === 'cross') {
      currentPlayer = 'circle'
      root.style.setProperty('--hover-image', 'url(images/lowOpacityCircle.svg)')
      return
    }
    currentPlayer = 'cross'
    root.style.setProperty('--hover-image', 'url(images/lowOpacityCross.svg)')
  })
})

function placeNewPlayer(positionIndex) {positions[positionIndex] = currentPlayer}

function renderGame() {
  for (let i = 0; i < positions.length; i++) {
    allGameGridItems[i].style.backgroundImage = 'none'
  }
  for (let i = 0; i < positions.length; i++) {
    if (positions[i] === 'cross') {
      allGameGridItems[i].style.backgroundImage = 'url(images/cross.svg)'
    }
    if (positions[i] === 'circle') {
      allGameGridItems[i].style.backgroundImage = 'url(images/circle.svg)'
    }
  }
  for (let i = 0; i < positions.length; i++) {
    if (typeof(positions[i]) !== 'number') allGameGridItems[i].classList.add('occupied')
    else allGameGridItems[i].classList.remove('occupied')
  }
}

function checkWin() {
  let x = currentPlayer
  if (positions[0] === x && positions[1] === x & positions[2] === x) return true
  if (positions[3] === x && positions[4] === x & positions[5] === x) return true
  if (positions[6] === x && positions[7] === x & positions[8] === x) return true
  if (positions[0] === x && positions[3] === x & positions[6] === x) return true
  if (positions[1] === x && positions[4] === x & positions[7] === x) return true
  if (positions[2] === x && positions[5] === x & positions[8] === x) return true
  if (positions[0] === x && positions[4] === x & positions[8] === x) return true
  if (positions[2] === x && positions[4] === x & positions[6] === x) return true
  return false
}

function displayPlayerWon() {
  setTimeout(() => {
    if(confirm(`${currentPlayer} has won!\nStarting a new game`) === false) {
      alert('Okay, you can start a new game by refreshing this page.')
      removeHoverEffects()
      return
    } else resetGame()
  }, 200)
}

function resetGame() {
  positions = [0, 1, 2, 3, 4, 5, 6, 7, 8]
  currentPlayer = 'cross'
  renderGame()
}

function checkTie() {
  let freePositions = 9
  for (let i = 0; i < positions.length; i++) if (typeof(positions[i]) !== 'number') freePositions--
  if (freePositions === 0) return true
  return false
}

function displayTie() {
  setTimeout(() => {
    if(confirm(`It's a tie...\nStarting a new game!`) === false) {
      alert('Okay, you can start a new game by refreshing this page.')
      removeHoverEffects()
      return
    } else resetGame()
  }, 200)
}

function removeHoverEffects() {
  for (let i = 0; i < positions.length; i++) {
    allGameGridItems[i].classList.remove('occupied')
    allGameGridItems[i].classList.add('occupied')
  }
}