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

type FarmAnimal = Pig | Rooster | Cow;

function getFarmAnimalSound(animal: FarmAnimal) {
  switch (animal.kind) {
    case 'pig':
      return 'Oink!';
    case 'cow':
      return 'Moo';
    case 'rooster':
      return 'Cockadoodledoo!';
  }
}

const stevie: Rooster = {
  name: 'Stevie Chicks',
  weight: 2,
  age: 1.5,
  kind: 'rooster',
};


console.log(getFarmAnimalSound(stevie))
