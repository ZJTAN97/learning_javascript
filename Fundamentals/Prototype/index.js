// object literals
const person = {
    alive: true
};

const musician = {
    plays: true
};

// method 1 of inheriting with prototype chain
musician.__proto__ = person;
// method 2 of inheriting with prototype chain
Object.setPrototypeOf(musician, person);

console.log(Object.getPrototypeOf(musician) === musician.__proto__); // true

console.log(musician.plays); // true
console.log(musician.alive); // true; it will walk up the chain to "person" to get the alive property


// further extending the prototype chain.
const guitarist = {
    strings: 6,
    __proto__: musician,
};


// Rules of prototypal inheritance
// 1. No circular references allowed
// 2. The __proto__ value must be an object or null.
// 3. An object can only directly inherit from one object.


// Inheritting a getting and setter methods
const car = {
    doors: 2,
    seats: "vinyl",
    get seatMaterial() {
        return this.seats;
    },
    set seatMaterial(material) {
        this.seats = material;
    }
};

const luxuryCar = {};
Object.setPrototypeOf(luxuryCar, car);
luxuryCar.seatMaterial = "leather"; // this will refer to "luxuryCar"
console.log(luxuryCar.seats); // leather
console.log(luxuryCar.valueOf()); // inherited valueOf() from the JS object


// looping through direct and inherited keys
Object.keys(luxuryCar).forEach(key => {
    console.log(key);
})

// A for...in loop includes inherited props
for(let key in luxuryCar) {
    console.log(key);
}


// Object constructor functions and prototypes
function Animal(species) {
    this.species = species;
    this.eats = true;
}

Animal.prototype.walks = function() {
    return `A ${this.species} is walking.`;
}

const Bear = new Animal("bear");
console.log(Bear.walks()); // A bear is walking



// An ES6 Classes example of inheritance
class Vehicle {
    constructor() {
        this.wheels = 4;
        this.motorized = true;
    }

    ready() {
        return "Ready to go!";
    }
}


class MotorCycle extends Vehicle {
    constructor() {
        super();
        this.wheels = 2;
    }

    wheelie() {
        return "On one wheel now!";
    }
}


const myBike = new MotorCycle();
console.log(myBike);