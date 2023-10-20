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

  constructor(public first: string, public last: string, protected _score: number) {}

  private secretMethod(): void {
    console.log('Secret method');
  }

  get fullName(): string {
    return `${this.first}, ${this.last}`;
  }

  get score(): number {
    return this._score;
  }

  set score(newScore: number) {
    if (newScore < 0) throw new Error('Score can not be negative');
    this._score = newScore;
  }
}

class SuperPlayer extends Player {
  public isAdmin: boolean = true;
  maxScore() {
    this._score = 999999999;
  }
}

const elton = new Player('Elton', 'Steele', 100);
console.log(elton.fullName);
elton.score = 99;

/* -------------------------------------------------------------- */

interface Colorful {
  color: string;
}

interface Printable {
  print(): void;
}

class Bike implements Colorful {
  constructor(public color: string) {}
}

class Jacket implements Colorful, Printable {
  constructor(public brand: string, public color: string) {}

  print(): void {
    console.log(`${this.color} ${this.brand} jacket`);
  }
}

const bike1 = new Bike('red');

const jacket1 = new Jacket('Prada', 'black');

/* -------------------------------------------------------------- */

// Abstract Classes

abstract class Employee {
  constructor(public first: string, public last: string) {}
  abstract getPay(): number;
  greet() {
    console.log('Hello');
  }
}

class FullTimeEmployee extends Employee {
  constructor(first: string, last: string, private salary: number) {
    super(first, last);
  }
  getPay(): number {
    return this.salary;
  }
}

class PartTimeEmployee extends Employee {
  constructor(
    first: string,
    last: string,
    private hourlyRate: number,
    private hoursWorked: number
  ) {
    super(first, last);
  }
  getPay(): number {
    return this.hourlyRate * this.hoursWorked;
  }
}

const betty = new FullTimeEmployee('Betty', 'White', 95000);
console.log(betty.getPay());

const bill = new PartTimeEmployee('Bill', 'Billerson', 24, 1100);
console.log(bill.getPay());
