class Person {
    constructor(name) {
        this.name = name;
    }

    arrowPrintName() {
        setTimeout(() => {
            console.log('Arrow: ' + this.name);
        }, 100)
    }

    printName() {
        setTimeout(function() {
            console.log('Function: ' + this.name);
        }, 100)
    }
}


let person = new Person("Docker");

person.arrowPrintName();
person.printName();
console.log(this.name);