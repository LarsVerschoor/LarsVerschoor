export const gameModes = new Array()

gameModes.push(
  {
    name: 'Standard',
    changes: [],
    highScore: 0,
    playtime: 0,
    foodEaten: 0,
    deaths: 0
  },
  {
    name: 'Easy',
    changes: ['+food', '-speed'],
    highScore: 0,
    playtime: 0,
    foodEaten: 0,
    deaths: 0
  },
  {
    name: 'Extra Food',
    changes: ['+food'],
    highScore: 0,
    playtime: 0,
    foodEaten: 0,
    deaths: 0
  },
  {
    name: 'Obstacles',
    changes: ['+food', '+obstacles', '-speed'],
    highScore: 0,
    playtime: 0,
    foodEaten: 0,
    deaths: 0
  },
  {
    name: 'Extra Speed',
    changes: ['+speed'],
    highScore: 0,
    playtime: 0,
    foodEaten: 0,
    deaths: 0
  },
  {
    name: 'Hardcore',
    changes: ['+speed', '+food', '+obstacles'],
    highScore: 0,
    playtime: 0,
    foodEaten: 0,
    deaths: 0
  },
  {
    name: 'Gold Rush',
    changes: ['+speed', '+goldenFood'],
    highScore: 0,
    playtime: 0,
    foodEaten: 0,
    deaths: 0
  },
  {
    name: 'Solid Walls',
    changes: ['+walls'],
    highScore: 0,
    playtime: 0,
    foodEaten: 0,
    deaths: 0
  }//,
  // {
  //   name: 'Time Limit',
  //   changes: ['+timeLimit'],
  //   highScore: 0,
  //   playtime: 0,
  //   foodEaten: 0,
  //   deaths: 0
  // }
)

if (localStorage.getItem('highScores') === null) {
  localStorage.setItem('highScores', JSON.stringify(gameModes))
} else {
  gameModes.splice(0, gameModes.length)
  let localStorageHighScores = JSON.parse(localStorage.getItem('highScores'))
  for(let i = 0; i < localStorageHighScores.length; i++) {
    gameModes.push(localStorageHighScores[i])
  }
}
console.log(gameModes)

console.log(gameModes.length)
gameModes.forEach(gameMode => {
  console.log(gameMode)
  const gameModesContainer = document.querySelector('.gamemodes-container')
  gameModesContainer.innerHTML += `<div class="gamemode-card">
        <img src="images/${gameMode.name}.svg" alt="" class="gamemode-card__img">
        <h3 class="gamemode-card__title">${gameMode.name}</h3>
        <p class="gamemode-card__highscore">High-Score: <span>${gameMode.highScore}</span></p>
        <p class="gamemode-card__playtime">Playtime: <span>${gameMode.playtime}</span></p>
        <p class="gamemode-card__foodeaten">Food Eaten: <span>${gameMode.foodEaten}</span></p>
        <p class="gamemode-card__deaths">Total Deaths: <span>${gameMode.deaths}</span></p>
        <button class="gamemode-card__playbutton">${'PLAY'}</button>
      </div>`
})