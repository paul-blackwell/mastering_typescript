"use strict";
// class Player {
//   // Once you set first and last you can't change them (readonly)
//   public readonly first: string;
//   public readonly last: string;
//   public score: number = 0;
//   constructor(first: string, last: string) {
//     this.first = first;
//     this.last = last;
//   }
//   private secretMethod(): void {
//     console.log('Secret method');
//   }
// }
class Player {
    // public - is accessible everywhere
    // private -  only accessible in the class
    // protected - protected is only accessible in class and child classes
    constructor(first, last, _score) {
        this.first = first;
        this.last = last;
        this._score = _score;
    }
    secretMethod() {
        console.log('Secret method');
    }
    get fullName() {
        return `${this.first}, ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0)
            throw new Error('Score can not be negative');
        this._score = newScore;
    }
}
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this._score = 999999999;
    }
}
const elton = new Player('Elton', 'Steele', 100);
console.log(elton.fullName);
elton.score = 99;
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log(`${this.color} ${this.brand} jacket`);
    }
}
const bike1 = new Bike('red');
const jacket1 = new Jacket('Prada', 'black');
/* -------------------------------------------------------------- */
// Abstract Classes
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    greet() {
        console.log('Hello');
    }
}
class FullTimeEmployee extends Employee {
    getPay() {
        return 13;
    }
}
class PartTimeEmployee extends Employee {
    getPay() {
        return 6.5;
    }
}
