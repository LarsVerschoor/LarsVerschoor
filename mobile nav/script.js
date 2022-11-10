const navCloseButton = document.querySelector('.nav__close-img')
const navBar = document.querySelector('nav')
const navBurger = document.querySelector('.nav-burger-img')
navBar.style.transform = `translate(${navBar.clientWidth}px, 0)`
const navLinkElements = document.querySelectorAll('.nav__link')

navLinkElements.forEach(element => {
  element.addEventListener('click', () => {
    navBar.style.transform = `translate(${navBar.clientWidth}px, 0)`
  })
})

console.log(navBar.clientWidth)
let navBarOpen = false

navCloseButton.addEventListener('click', () => {
  navBar.style.transform = `translate(${navBar.clientWidth}px, 0)`
})

navBurger.addEventListener('click', () => {
  navBar.style.transform = 'translate(0, 0)'
})