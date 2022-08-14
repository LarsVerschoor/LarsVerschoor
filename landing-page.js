const projects = [
  {
    name: 'snake',
    url: 'https://larsverschoor.pages.dev/Snake/'
  },
  {
    name: 'tic tac toe',
    url: 'https://larsverschoor.pages.dev/Tic%20Tac%20Toe/'
  }
]



for (let i = 0; i < projects.length; i++) {
  const anchorElement = document.createElement('a')
  anchorElement.innerText = projects[i].name
  anchorElement.href = projects[i].url
  document.body.appendChild(anchorElement)
}