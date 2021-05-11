// A closure is a function that remembers its outer variables and can access them.
// In some languages, it is not possible, or a function should be written in a special 
// way to make it happen

let add = (function() {
    let counter = 0
    return function() {counter+= 1; return counter}
})

add()
add()