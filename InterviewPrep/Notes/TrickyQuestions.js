// Tricky Question 1
(function() {
    var a = b = 3;
    // is the same as
    // var b = 3;
    // var a = b;
}) ();

console.log("a defined? " + (typeof a !== 'undefined')) // false
console.log("a defined? " + (typeof b !== 'undefined')) // true



// Tricky Question 2
var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo); // bar
        console.log("outer func:  self.foo = " + self.foo); // bar
        (function() {
            console.log("inner func:  this.foo = " + this.foo); // undefined
            console.log("inner func:  self.foo = " + self.foo); // bar
        }());
    }
};
myObject.func();



// Tricky Question 3
console.log(1 + + "2" + "2");


// Tricky Question 4
var a={},
    b={key:'b'},
    c={key:'c'};

a[b]=123;
a[c]=456;

console.log(a);
console.log(a[b]);



// Tricky Question 5
console.log('----- Question 5 ------')
var length = 10;
function fn() {
	console.log(this.length);
}

var obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
  }
};

obj.method(fn, 1);



// Tricky Question 6
// console.log('----- Question 6 ------')
// for (let i = 0; i < 5; i++) {
//     console.log('hi')
//     setTimeout(function() { console.log(i); }, i * 1000 );
//   }



// Tricky Question 7
console.log("------ Question 7 --------")
function foo() {
    console.log(1);

    setTimeout(() => console.log(2), 0);

    const promise = new Promise((resolve, reject) => {
        resolve(console.log(3));
    })

    console.log(4);

}
foo() // 1, 3, 4, 2
// read on javascript job queue and task queue, promise go to job queue, set timeout go to task queue
// job queue gets higher precedence than task queue 