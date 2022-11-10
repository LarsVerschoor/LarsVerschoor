const projects = [
  {
    name: 'snake V2.2',
    url: 'https://larsverschoor.pages.dev/Snake/'
  },
  {
    name: 'tic tac toe',
    url: 'https://larsverschoor.pages.dev/Tic%20Tac%20Toe/'
  },
  {
    name: 'Snake V3.4',
    url: 'https://larsverschoor.pages.dev/Snake%20V3.4/'
  },
  {
    name: 'Woorden Engels',
    url: 'https://larsverschoor.pages.dev/Woorden%20engels/'
  }
  {
    name: 'Telefoon Menu',
    url: 'https://larsverschoor.pages.dev/mobile%20nav/'
  }
]



for (let i = 0; i < projects.length; i++) {
  const buttonElement = document.createElement('button')
  buttonElement.innerText = projects[i].name
  if (projects[i].url) {
    buttonElement.addEventListener('click', () => {
      window.open(projects[i].url)
    })
  }
  buttonElement.classList = 'project-button'
  document.body.appendChild(buttonElement)
}
