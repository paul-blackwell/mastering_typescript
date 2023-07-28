/**
 * Tuples 
 * Tuples are a special type exclusive to TypeScript (they don't exist in JS)
 * 
 * Tuples are arrays of fixed lengths and ordered with specific 
 * types - like super rigid arrays.
 */

// Creating a Tuple with its type definition
let myTuple: [number, string];

// CAN assign it values per its specs
myTuple = [10, 'Typescript is fun'];

// CAN'T assign it values of dif structure
// myTuple = ['Typescript is fun', 10];

// A better example is RGB
const color: [number, number, number] = [255, 0, 45];

