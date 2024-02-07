// selectors
const pokemonInfo = document.querySelector('.pokemonInfo')
const pokemonBtn = document.querySelector('.pokemonBtn')

pokemonBtn.addEventListener('click', getData)

function getData() {
  const getRandomnumber = Math.floor(Math.random() * 1025) + 1
  const data = fetch(`https://pokeapi.co/api/v2/pokemon/${getRandomnumber}`)

  // Show loading icon
  pokemonInfo.innerHTML = '<div class="loading">Waiting for Pokemon...</div>'

  data
    .then((data) => {
      return data.json()
    })
    .then((pokemon) => {
      // create a new div element for the pokemon
      const createDiv = document.createElement('div')
      createDiv.classList.add('pokemon')

      // create a new img element
      const createImg = document.createElement('img')
      createImg.classList.add('pokemonImg')
      createImg.src = pokemon.sprites.front_default
      createDiv.appendChild(createImg)
      // create a p element for the name
      const createName = document.createElement('p')
      createName.classList.add('pokemonName')
      createDiv.appendChild(createName)
      createName.textContent = pokemon.name

      // clear the previous pokemon
      pokemonInfo.innerHTML = ''
      pokemonInfo.appendChild(createDiv)
    })
    .catch((error) => {
      console.log(error)
      pokemonInfo.innerHTML =
        '<div class="error">An error occurred,please try again.</div>'
    })
}
