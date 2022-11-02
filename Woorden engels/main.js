import {wordlist, updateFinished} from './woordenlijst.js'

function render() {
  document.querySelector('main').innerHTML = '<h1>Engelse woorden examenidioom</h1>'
  document.querySelector('nav').innerHTML = '<p>navigatie</p>'

  for (let i = 0; i < wordlist.length; i++) {

    // Titel van hoofdstuk woorden
    const titleElement = document.createElement('h2')
    titleElement.innerText = wordlist[i].name
    titleElement.id = i
    document.querySelector('main').appendChild(titleElement)

    // Link van hoofdstuk woorden
    const linkElement = document.createElement('a')
    linkElement.innerText = wordlist[i].name
    if (wordlist[i].finished === true) linkElement.innerText = `${wordlist[i].name} V`
    linkElement.href = `#${i}`
    linkElement.id = `navLink${i}`
    document.querySelector('nav').appendChild(linkElement)

    // HTML Table maken
    const tableElement = document.createElement('table')
    let checked = ''
    if (wordlist[i].finished === true) checked = 'checked'

    const tableHeader = document.createElement('tr')
    const tableDataEngels = document.createElement('th')
    const tableDataNederlands = document.createElement('th')
    const checkboxElement = document.createElement('td')

    tableDataEngels.innerText = 'Engels'
    tableDataNederlands.innerText = 'Nederlands'
    if (wordlist[i].finished === true) checkboxElement.innerHTML = `klaar: <input type="checkbox" class="check" checked/>`
    else checkboxElement.innerHTML = `klaar: <input type="checkbox" class="check"/>`
    
    checkboxElement.children[0].addEventListener('change', () => {
      console.log(checkboxElement.children[0].checked)
      updateFinished(wordlist[i], checkboxElement.children[0].checked)
      
      const navElement = document.querySelector(`#navLink${i}`)
      if (checkboxElement.children[0].checked === true) {
        navElement.innerText = `${wordlist[i].name} V`
      } else navElement.innerText = wordlist[i].name

      render()
    })


    tableHeader.appendChild(tableDataEngels)
    tableHeader.appendChild(tableDataNederlands)
    tableHeader.appendChild(checkboxElement)

    tableElement.appendChild(tableHeader)
    document.querySelector('main').appendChild(tableElement)

    // Alle woorden in de table zetten
    for (let x = 0; x < wordlist[i].words.length; x++) {
      const tableRow = document.createElement('tr')
      const tableDataEngels = document.createElement('td')
      const tableDataNederlands = document.createElement('td')
      const checkboxElement = document.createElement('td')

      if (wordlist[i].words[x].finished === true) checkboxElement.innerHTML = `<input type="checkbox" class="check" checked/>`
      else checkboxElement.innerHTML = `<input type="checkbox" class="check"/>`
      

      tableDataEngels.classList = 'engels'
      tableDataNederlands.classList = 'nederlands'
      if (wordlist[i].words[x].finished === true || wordlist[i].finished === true) tableDataNederlands.classList.add('finished')

      tableRow.appendChild(tableDataEngels)
      tableRow.appendChild(tableDataNederlands)
      tableRow.appendChild(checkboxElement)

      checkboxElement.children[0].addEventListener('change', () => {
        console.log(checkboxElement.children[0].checked)
        updateFinished(wordlist[i].words[x], checkboxElement.children[0].checked)
        if (wordlist[i].words[x].finished) tableDataNederlands.classList.add('finished')
        else tableDataNederlands.classList.remove('finished')
      })

      tableDataEngels.innerText = wordlist[i].words[x].english
      tableDataNederlands.innerText = wordlist[i].words[x].dutch

      tableElement.appendChild(tableRow)
    }
    document.querySelector('main').appendChild(tableElement)
  }
}

render()