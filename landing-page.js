const projects = [
  {
    name: 'snake',
    url: 'https://larsverschoor.pages.dev/Snake/'
  },
  {
    name: 'tic tac toe',
    url: 'https://larsverschoor.pages.dev/Tic%20Tac%20Toe/'
  },
  {
    name: 'De Anaalgangers',
    url: 'https://larsverschoor.pages.dev/De%20Anaalgangers/'
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
