const input = document.getElementById("input");
let currentInput = null;
let prevInput = null;
input.addEventListener("input", (e) => {
    currentInput = e.target.value;
})


const button = document.getElementById("submit");
button.addEventListener("click", () => {
    if(!!prevInput) {
        const prevBlock = document.getElementById(`${prevInput}`);
        prevBlock.style.backgroundColor = "white";
    }
    if(currentInput > 9 || currentInput < 0) {
        alert("Please key in 1 to 9")
        input.value = ""
    }
    else {
        const block = document.getElementById(`${currentInput}`);
        block.style.backgroundColor = "green";
        if(prevInput === currentInput) {
            block.style.backgroundColor = "white";
            prevInput = null;
        } else {
            prevInput = currentInput;
        }
    }

})

