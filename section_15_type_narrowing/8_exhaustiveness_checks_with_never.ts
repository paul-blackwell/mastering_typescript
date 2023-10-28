/**
 * discriminated unions
 * A common pattern in Typescript involves creating a literal property that is common
 * across multiple types.
 *
 * We can then narrow the type using that literal property
 */

interface Rooster {
  name: string;
  weight: number;
  age: number;
  kind: 'rooster';
}

interface Cow {
  name: string;
  weight: number;
  age: number;
  kind: 'cow';
}

interface Pig {
  name: string;
  weight: number;
  age: number;
  kind: 'pig';
}

interface Sheep {
  name: string;
  weight: number;
  age: number;
  kind: 'sheep';
}

type FarmAnimal = Pig | Rooster | Cow | Sheep;

function getFarmAnimalSound(animal: FarmAnimal) {
  switch (animal.kind) {
    case 'pig':
      return 'Oink!';
    case 'cow':
      return 'Moo';
    case 'rooster':
      return 'Cockadoodledoo!';
    case 'sheep':
      return 'Baaa';
    default:
      // We should never get here, if we handed all cases correctly
      // const shouldNeverGetHere: never = animal;
      // return shouldNeverGetHere
      const _exhaustiveCheck: never = animal;
      return _exhaustiveCheck;
  }
}

const stevie: Rooster = {
  name: 'Stevie Chicks',
  weight: 2,
  age: 1.5,
  kind: 'rooster',
};

console.log(getFarmAnimalSound(stevie));
