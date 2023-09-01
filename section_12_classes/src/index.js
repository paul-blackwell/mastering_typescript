class Player {
  static description = 'Player in our game'; 

  /**
   * This is the same in JS as adding this.score = 0; in the constructor
   * and the # makes a property should only be usable inside the Player class
   */
  #score = 0;
  #numbLives = 10;

  constructor(first, last) {
    this.first = first;
    this.last = last;
  }

  static randomPlayer() {
    return new Player('Andy', 'Samberg');
  }

  get fullName() {
    return `${this.first} ${this.last}`
  }

  get score() {
    return this.#score;
  }

  set fullName(newFullName) {
    const [first, last] = newFullName.split(' ');
    this.first = first;
    this.last = last;
  }

  set score(newScore) {
    if(newScore < 0) {
      throw new Error('Score must be positive');
    }
   
    this.#score = newScore;
  }

  getScore() {
    return this.#score;
  }

  updateScore(newScore) {
    return this.#score = newScore; 
  }

  taunt() {
    console.log('Boyah!')
  }

  loseLife() {
    this.#numbLives -= 1;
  }
}

class AdminPlayer extends Player {
  constructor(first, last, powers) {
    super(first, last);
    this.powers = powers;
  }

  isAdmin = true;
}

//const player1 = new Player('blue', 'steele');

// player1.loseLife()
// player1.updateScore(1)
// console.log(player1.getScore())
// player1.fullName = 'Amy Adams'
// console.log(player1.fullName)
// player1.score = 10;
// console.log(player1.score)

// const player2 = new Player('charlie', 'brown');
// player2.taunt();
// console.log(player2.first)

const admin = new AdminPlayer('admin', 'mc admin', ['delete', 'restore world']);
console.log(admin);
