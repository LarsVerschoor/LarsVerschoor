import {displayHomeScreen} from './homeScreen.js'

let statistics = {
  highScore: 0,
  previousScore: 0,
  foodEaten: 0,
  gamesPlayed: 0,
  positionsMoved: 0,
}

if (localStorage.getItem('statistics') !== null) {
  statistics = JSON.parse(localStorage.getItem('statistics'))
}

export function updateStatistics(stat, value) { // ooit nog een switch van maken
  if (stat === 'previousScore') {
    statistics.previousScore = value
    if (statistics.previousScore > statistics.highScore) {
      statistics.highScore = statistics.previousScore
    }
    localStorage.setItem('statistics', JSON.stringify(statistics))
    return
  }
  if (stat === 'foodEaten') {
    statistics.foodEaten += value
    localStorage.setItem('statistics', JSON.stringify(statistics))
    return
  }
  if (stat === 'gamesPlayed') {
    statistics.gamesPlayed += value
    localStorage.setItem('statistics', JSON.stringify(statistics))
    return
  }
  if (stat === 'positionsMoved') {
    statistics.positionsMoved += value
    localStorage.setItem('statistics', JSON.stringify(statistics))
    return
  }
  console.log(statistics)
}

export function displayStatsScreen() {
  const mainElement = document.querySelector('main')
  mainElement.classList = undefined;
   const goBackArrow = document.createElement('button')
  goBackArrow.classList = 'back-arrow'
  goBackArrow.innerText = '<- Go back'

  goBackArrow.addEventListener('click', () => {
    displayHomeScreen()
  })
    
  mainElement.appendChild(goBackArrow)
    const names = Object.getOwnPropertyNames(statistics)
    for (let i = 0; i < names.length; i++) {
      const statElement = document.createElement('p')
      const values = Object.values(statistics)
      statElement.innerText = `${names[i]} ${values[i]}`
      mainElement.appendChild(statElement)
      
    }
}