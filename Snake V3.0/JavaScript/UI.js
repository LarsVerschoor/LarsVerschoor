const homeScreen = document.querySelector('main')
const playScreen = document.querySelector('.play')
const gameScreen = document.querySelector('.game')
const settingsScreen = document.querySelector('.settings')
const creditsScreen = document.querySelector('.credits')

function removeAllScreens() {
  homeScreen.style.display = 'none'
  playScreen.style.display = 'none'
  gameScreen.style.display = 'none'
  settingsScreen.style.display = 'none'
  creditsScreen.style.display = 'none'
}

export function toggleScreen(screen) {
  removeAllScreens()
  switch (screen) {
    case 'home':
      homeScreen.style.display = 'flex'
      break
    case 'play':
      
      playScreen.style.display = 'flex'
      const casual = document.querySelector('.gamemode__high-score.casual')
      const obstacles = document.querySelector('.gamemode__high-score.obstacles')
      const solidWalls = document.querySelector('.gamemode__high-score.solidWalls')
      const foodMadness = document.querySelector('.gamemode__high-score.foodMadness')
      const completeMadness = document.querySelector('.gamemode__high-score.completeMadness')
      const highScores = JSON.parse(localStorage.getItem('highScores'))
      casual.innerText = `High-Score: ${highScores.casual}`
      obstacles.innerText = `High-Score: ${highScores.obstacles}`
      solidWalls.innerText = `High-Score: ${highScores.solidWalls}`
      foodMadness.innerText = `High-Score: ${highScores.foodMadness}`
      completeMadness.innerText = `High-Score: ${highScores.completeMadness}`
      break
    case 'game':
      gameScreen.style.display = 'grid'
      break
    case 'settings':
      settingsScreen.style.display = 'flex'
      break
    case 'credits':
      creditsScreen.style.display = 'flex'
      break
  }
}

const mainOptions = document.querySelectorAll('.main__option')

for (let i = 0; i < mainOptions.length; i++) {
  mainOptions[i].addEventListener('click', () => {
    switch (i) {
      case 0:
        toggleScreen('play')
        break
      case 1:
        toggleScreen('settings')
        break
      case 2:
        toggleScreen('credits')
        break
      case 3:
        window.close()
        break
    }
  })
}

const homeButtons = document.querySelectorAll('.home-button')

for (let i = 0; i < homeButtons.length; i++) {
  homeButtons[i].addEventListener('click', () => {
    toggleScreen('home')
  })
}