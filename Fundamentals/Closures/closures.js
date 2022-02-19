for(var i=0; i<3; i++) {

    const log = () => {
        console.log(i)
    }

    setTimeout(log, 100);

}

// var get hoisted to global scope
// output: 3, 3, 3


for(let i=0; i<3; i++) {

    const log = () => {
        console.log(i)
    }

    setTimeout(log, 100);

}

// let is block scoped
// output: 3, 3, 3

