/**
 * Type Predicates
 *
 * Typescript allows us to write custom functions that can narrow the type of a value.
 * These functions have a very special return type called a type predicate.
 *
 * A predicate takes the form parameterName is Type
 */

interface Cat {
  name: string;
  numLives: number;
}

interface Dog {
  name: string;
  breed: string;
}

function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).numLives !== undefined;
}

function makeNoise(animal: Cat | Dog): string {
  if(isCat(animal)) {
    return 'Meow';
  } else {
    return 'woof'
  }
}
