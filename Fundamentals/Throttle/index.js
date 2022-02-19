const initApp = () => {
    const tbutton = document.querySelector("#throttle");
    tbutton.addEventListener("click", throttle(clickLog, 2000));
}

const clickLog = () => console.log("click");

document.addEventListener("DOMContentLoaded", initApp);

const throttle = (fn, delay) => {
    let lastTime = 0;
    console.log("called Throttle immediately.");
    return (...args) => {
        const now = new Date().getTime();
        if(now - lastTime < delay) {
            console.log(`Please wait ${2000 - (now-lastTime)} ms`)
            return;
        };
        lastTime = now;
        fn(...args); 
    }
};