// synchronous
function f1() {
    console.log('function 1');
}

function f2() {
    f1();
    console.log('function 2');
}

function f3() {
    f2();
}

f3();

// output
// function 1
// function 2