function merge<T extends object, U extends object>(object1: T, object2: U) {
  return { ...object1, ...object2 };
}

const comboObj = merge({ name: 'colt' }, { pets: ['blue', 'elton'] });

// We don't want the ability to do this
// console.log(merge({name: 'Colt'}, 9));

// But we want to do something like this
console.log(merge({ name: 'Colt' }, { num: 9 }));


/* ------------------------------------------------------------------------------- */

interface Lengthy {
  length: number;
}

function printDoubleLength<T extends Lengthy>(thing: T): number {
  return thing.length * 2;
}

// We could always do this
// function printDoubleLength(thing: Lengthy): number {
//   return thing.length * 2;
// }

printDoubleLength('asdadas');
