// Set timeout is a form of callback
setTimeout(() => {
    console.log('Wait 1 seconds')
}, 1000)


// button event handler in browser JS
// const btn
// btn.addEventListener('click', () => {
//     console.log('this is also another form of callback')
// })

const fs = require('fs')
// error first callback
fs.readFile('./test.txt', {encoding:'utf-8'}, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log('data exists')
        console.log(data)
    }
})