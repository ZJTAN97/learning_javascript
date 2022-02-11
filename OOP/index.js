class Person {

    #age;

    constructor(name, age) {
        this.name = name;
        // Encapsulation
        // Protect your data
        this.#age = age;
    }

    getName () {
        return this.name;
    };

    getAge () {
        return this.#age;
    }

}

let Person1 = new Person("Docker", 13);

console.log(Person1.getName());
console.log(Person1.getAge()); // 13
console.log(Person1.age); // undefined
// console.log(Person1.#age); // error


class House {
    constructor(address, price, residents) {
        this.address = address;
        this.price = price;
        this.residents = residents;
    }

    getAddress() {
        return this.address;
    }

    getPrice() {
        return this.price;
    }

    getResidents() {
        return this.residents;
    }


    addResident(resident) {
        this.residents.push(resident);
    }

}



// Abstraction
// hiding implementation of a piece of code






// Inheritance
class Programmer extends Person {
    constructor(name, age, company, salary, language) {
        super(name, age);
        this.company = company;
        this.salary = salary;
        this.language = language;
    }

    greet() {
        console.log(`Hello, I work for ${this.company}.`);
        console.log(`My name is ${this.getName()}`);
    }
}


let programmer = new Programmer("Docker", 13, "Docker", 4500, "TypeScript");
programmer.greet();


// Polymorphism
// can take many forms