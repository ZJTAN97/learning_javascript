const Toast = {
    // do in JS instead of html for better seperation
    init() {
        this.hideTimeout = null;
        this.el = document.createElement("div");
        this.el.className = "toast";
        document.body.appendChild(this.el);
    },

    show(message, state) {
        // to reset the timeout if user keeps clicking
        // guard against stacking of timeout
        clearTimeout(this.hideTimeout);
        this.el.textContent = message;
        this.el.className = "toast toast--visible";

        if(state) {
            this.el.classList.add(`toast--${state}`);
        }

        this.hideTimeout = setTimeout(() => {
            // wait 1.5s before making notification disappear
            this.el.classList.remove('toast--visible');
        }, 3000);
    }

};


document.addEventListener("DOMContentLoaded", () => Toast.init());

const btn = document.getElementById("toast-btn");
const successBtn = document.getElementById("toast-btn-success");
const errorBtn = document.getElementById("toast-btn-error");
btn.addEventListener('click', () => {
    Toast.show("Sample message");
})
successBtn.addEventListener('click', () => {
    Toast.show("Success message", "success");
})
errorBtn.addEventListener('click', () => {
    Toast.show("Error message", "error");
})