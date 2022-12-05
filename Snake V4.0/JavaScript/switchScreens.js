const viewCode = document.querySelector('.view-code')
viewCode.addEventListener('click', () => {
  window.open(new URL('https://github.com/LarsVerschoor/LarsVerschoor'))
})

const allScreens = [
  {
    name: 'startScreen',
    element: document.querySelector('#startScreen'),
    toggleButtons: document.querySelectorAll('#backButton')
  },
  {
    name: 'playScreen',
    element: document.querySelector('#playScreen'),
    toggleButtons: [document.querySelector('#startScreenOption.play')]
  },
  {
    name: 'settingsScreen',
    element: document.querySelector('#settingsScreen'),
    toggleButtons: [document.querySelector('#startScreenOption.settings')]
  }
]

removeAllScreens()
toggleScreen(allScreens[0])

function removeAllScreens() {
  allScreens.forEach(screen => {
    screen.element.style.display = 'none'
  })
}

function toggleScreen(screenToToggle) {
  screenToToggle.element.style.display = 'flex'
}

allScreens.forEach(screen => {
  if (typeof(screen.toggleButtons) === 'object') {
    screen.toggleButtons.forEach(toggleButton => {
      toggleButton.addEventListener('click', () => {
        console.log(`clicked at ${screen.name}`)
        removeAllScreens()
        toggleScreen(screen)
      })
    })
  }
})