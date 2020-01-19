let util = require('util');

// parent
function Animal(name) {
    this.name = name;
}

Animal.prototype.walk = function () {
    console.log(`${this.name} walks.`);
};

// child
function Rabbit(name) {
    this.name = name;
}

util.inherits(Rabbit, Animal);

Rabbit.prototype.jump = function () {
    console.log(`${this.name} jumps.`);
};

// usage
let rabbit = new Rabbit('Our Rabbit');
rabbit.walk();
rabbit.jump();
