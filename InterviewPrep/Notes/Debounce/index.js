const debounce = ( fn, delay ) => {

    let timeoutId;

    // higher order function
    return function(...args) {

        if(timeoutId) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout( () => {
            fn(...args);
        }, delay)
    }

}


document.getElementById("myid").addEventListener("click", debounce(e => {
    console.log('clicked');
}, 500))


