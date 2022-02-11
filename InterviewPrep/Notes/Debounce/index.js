const debounce = ( fn, delay ) => {
    let timeoutId;
    // higher order function
    return (...args) => {
        if(timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout( () => {
            fn(...args);
        }, delay)
    }
}

const button = document.getElementById("myid");

button.addEventListener("click", debounce(e => {
    console.log('clicked');
}, 500)) // not the best use case for debounce

// can be easily replaced by this
button.addEventListener("click", () => {
    console.log('clicked!');
    button.disabled = true;
    setTimeout(() => button.disabled = false, 2000);
})



const input = document.getElementById("filterText");

input.addEventListener('input', debounce(e => {
    console.log(`Text input is ${e.target.value} and currently searching..`)
}, 250));