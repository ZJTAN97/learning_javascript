// Use let and const instead of var //

// in this case the i is only valid within this blog
for(let i=0; i<5; i++) {
    console.log(i)
}
console.log(i) //undefined


// In this case i will still be valid outside of the loop
for(var i=0; i<5; i++) {
    console.log(i)
}
console.log(i) // i will be 5


// arrow functions //

function sum(x, y) {
    return x + y
}

const sum = (x, y) => {
    return x + y
}

