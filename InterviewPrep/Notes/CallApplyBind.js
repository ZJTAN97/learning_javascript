let bob = function(num, str) {
    console.log('bob', num, str, this);
}

let bill = {
    name: "Bill Murray",
    movie: "Lost in Translation",
    myMethod: function(fn) {
        let n = arguments[1];
        let s = arguments[2];
        fn.apply(bill, [n,s]);
    }
}


bill.myMethod(bob, 4, 'ciao');