import {init} from './main.js'
import {displayStatsScreen} from './statistics.js'

export const settings = [
  {
    name: 'amountOfFood',
    type: 'range',
    min: '1',
    max: '5',
    value: 1
  },
  {
    name: 'deathByBorder',
    type: 'checkbox',
    value: false
  },
  {
    name: 'millisecondsBetweenSnakeMove',
    type: 'number',
    value: 150
  },
  {
    name: 'snakeColor',
    type: 'color',
    value: '#3fc600'
  },
  {
    name: 'snakeHeadColor',
    type: 'color',
    value: '#1d5d00'
  },
  {
    name: 'foodColor',
    type: 'color',
    value: '#d00000'
  }
]

export function displayHomeScreen() {
  // removing elements
  clearMainElement()

  // adding elements
  const mainElement = document.querySelector('main')
  mainElement.classList = 'home-screen'
  
  const homeScreenWrapper = document.createElement('div')
  homeScreenWrapper.classList = 'home-screen__content'

  const titleElement = document.createElement('h1')
  titleElement.classList = 'title'
  titleElement.innerText = 'SNAKE'

  const buttonsContainer = document.createElement('div')
  buttonsContainer.classList = 'button-container'

  const playButton = document.createElement('button')
  playButton.classList = 'play-button'
  playButton.innerText = 'play'

  const settingsButton = document.createElement('button')
  settingsButton.classList = 'settings-button'
  settingsButton.innerText = 'settings'

  const statsButton = document.createElement('button')
  statsButton.classList = 'stats-button'
  statsButton.innerText = 'statistics (beta v)'

  const creditsButton = document.createElement('button')
  creditsButton.classList = 'credits-button'
  creditsButton.innerText = 'credits (beta v)'

  const exitGameButton = document.createElement('button')
  exitGameButton.classList = 'exit-button'
  exitGameButton.innerText = 'exit'

  buttonsContainer.appendChild(playButton)
  buttonsContainer.appendChild(settingsButton)
  buttonsContainer.appendChild(statsButton)
  buttonsContainer.appendChild(creditsButton)
  buttonsContainer.appendChild(exitGameButton)

  homeScreenWrapper.appendChild(titleElement)
  homeScreenWrapper.appendChild(buttonsContainer)

  playButton.addEventListener('click', () => {
    init()
  })

  settingsButton.addEventListener('click', () => {
    displaySettingsScreen()
  })

  exitGameButton.addEventListener('click', () => {
    window.close()
  })

  statsButton.addEventListener('click', () => {
    clearMainElement()
    displayStatsScreen()
  })

  creditsButton.addEventListener('click', () => {
    displayCredits()
  })

  // display everything
  mainElement.appendChild(homeScreenWrapper)
}

function displaySettingsScreen() {
  clearMainElement()

  const mainElement = document.querySelector('main')
  mainElement.classList = 'settings-screen'

  const settingsWrapper = document.createElement('div')
  settingsWrapper.classList = 'settings-screen__content'

  const goBackArrow = document.createElement('button')
  goBackArrow.classList = 'back-arrow'
  goBackArrow.innerText = '<- Go back'

  goBackArrow.addEventListener('click', () => {
    displayHomeScreen()
  })

  const titleElement = document.createElement('h2')
  titleElement.innerText = 'Settings'

  settingsWrapper.appendChild(goBackArrow)
  settingsWrapper.appendChild(titleElement)

  settings.forEach(setting => {
    const containerElement = document.createElement('div')
    containerElement.classList = 'setting-block'
    const nameElement = document.createElement('p')
    nameElement.classList = 'setting-name'
    const inputElement = document.createElement('input')
    inputElement.classList = 'setting'

    nameElement.innerText = setting.name
    inputElement.type = setting.type
    if (setting.type === 'checkbox') {
      inputElement.checked = setting.value
    } else {
      inputElement.value = setting.value
    }
    
    inputElement.id = setting.name
    if (setting.min) inputElement.min = setting.min
    if (setting.max) inputElement.max = setting.max

    let valueElement
    if (setting.type === 'range') {
      valueElement = document.createElement('p')
      valueElement.innerText = inputElement.valueAsNumber
      inputElement.addEventListener('input', () => {
        valueElement.innerText = inputElement.valueAsNumber
      })
    }

    containerElement.appendChild(nameElement)
    containerElement.appendChild(inputElement)
    if (valueElement) {
      containerElement.appendChild(valueElement)
    }
    
    inputElement.addEventListener('change', () => {
      if (setting.type === 'range' || setting.type === 'number') {
        setting.value = inputElement.valueAsNumber
      } else if (setting.type === 'checkbox') {
        if (inputElement.checked) setting.value = true
        else setting.value = false
      } else {
        setting.value = inputElement.value
      }
    })

    settingsWrapper.appendChild(containerElement)
  })
  mainElement.appendChild(settingsWrapper)
}

function clearMainElement() {
  const mainElement = document.querySelector('main')
  const allMainElementChildren = mainElement.children
  for (let i = 0; i < allMainElementChildren.length; i++) allMainElementChildren[i].remove()
  mainElement.innerHTML = ''
}

function displayCredits() {
  clearMainElement()

  const mainElement = document.querySelector('main')
  mainElement.classList = undefined

  const goBackArrow = document.createElement('button')
  goBackArrow.classList = 'back-arrow'
  goBackArrow.innerText = '<- Go back'

  goBackArrow.addEventListener('click', () => {
    displayHomeScreen()
  })

  mainElement.appendChild(goBackArrow)

  const programmerElement = document.createElement('p')
  const designerElement = document.createElement('p')
  const soundEffectsElement = document.createElement('p')
  const everyThingElement = document.createElement('p')

  programmerElement.innerText = 'Programmer: Lars Verschoor'
  designerElement.innerText = 'Designer: Lars Verschoor'
  soundEffectsElement.innerText = 'Sound-Effects (coming soon): Lars Verschoor'
  everyThingElement.innerText = 'Everything Else: Lars Verschoor'

  mainElement.appendChild(programmerElement)
  mainElement.appendChild(designerElement)
  mainElement.appendChild(soundEffectsElement)
  mainElement.appendChild(everyThingElement)
}