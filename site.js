const welcomeMessageHeader = document.querySelector('#welcome > h2')

const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

var welcomeMessage = "Good Morning"

if (isAfternoon) { 
    welcomeMessage = "Good Afternoon"
}
else if (isEvening) {
    welcomeMessage = "Good Evening"
}

welcomeMessageHeader.textContent = welcomeMessage

localStorage.setItem("It's a secret to everybody.", 'I had to look it up. I was a wee lad when I played the first zelda game on my gameboy')

const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0

const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
        console.log(urls[imageIndex])
    })
}

showImages()

const prevButton = document.querySelector('#prev')
const nextButton = document.querySelector('#next')

prevButton.addEventListener('click', () => {
    currentImage--
    showImages()
})

nextButton.addEventListener('click', () => {
    currentImage++
    showImages()
})

setInterval(() => {
    currentImage++
    showImages()
}, 5000)



const displayRandomPokemon = (async () => {

const getRandomPokemon = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 150)
    return getJsonFrom(url);
}

const renderPokemon = pokemon => {
    const spriteUrl = pokemon.sprites['front_default']
    const img = document.createElement('img')
    img.src = spriteUrl
    img.alt = pokemon.name
    const imgDiv = document.querySelector('#pokemonImage')
    imgDiv.append(img)
}

const getJsonFrom = async url => {
    const response = await fetch(url)
    const json = await response.json()
    //i think this didn't work because of the weird prototype object at the end and getting everything but that seemed like way too much of a hassle 
    //so I just left it as json
    //return JSON.parse(json)
    return json
}

var pokemon = await getRandomPokemon()
renderPokemon(pokemon)
})()
