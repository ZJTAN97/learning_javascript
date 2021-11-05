// create a promise
const myPromise = new Promise((resolve, reject) => {
    const rand = Math.floor(Math.random() * 2)
    if (rand===0) {
        resolve() // means something went right
    } else {
        reject() // means something went wrong
    }
})

myPromise
    .then(() => console.log('Success'))
    .catch(() => console.log('Something went wrong'))


// fs readFile with promises
const fs = require('fs')
fs.promises
    .readFile('./test.txt', { encoding: 'utf-8' })
    .then((data) => console.log(data))
    .catch((err) => console.log(err))

const fetch = require('node-fetch')
// fetch with promises
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))