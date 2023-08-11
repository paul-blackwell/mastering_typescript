/**
 * Types vs. Interfaces
 */

// type Person = {
//   name: string;
// };

// Error! TS complains about duplicate types
// type Person = {
//   age: number;
// };

// Error! Age didn't get added to Person type
// const person: Person = {
//   name: 'Jerry',
//   age: 42,
// };

/**
 * However, you can do this with an interface
 */

interface Person {
  name: string;
}

interface Person {
  age: number;
}

// Perfectly okay - Person has name & age
const person: Person = {
  name: 'Jerry',
  age: 42,
};

/**
 * This is useful if we want to add to third party code or code from another file
 */

// Lets imagine Dog is coming from a third party
interface Dog {
  name: string;
  age: number;
}

// But in our app we want Dog to also have a breed and bark method
interface Dog {
  breed: string;
  bark(): string;
}

const elton: Dog = {
  name: 'Elton',
  age: 0.5,
  breed: 'Australian Shepherd',
  bark() {
    return 'woof woof';
  },
};
