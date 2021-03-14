// load file with async/await
const fs = require('fs')

const loadFile = async () => {
    try {
        const data = await fs.promises.readFile('./test.txt', {encoding: 'utf-8'})
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}
loadFile()


const fetch = require('node-fetch')
// fetch pokemon with async await
const fetchPokemon = async (id) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()
        console.log(data)
    } catch(err) {
        console.log(err)
    }
}
fetchPokemon(13)