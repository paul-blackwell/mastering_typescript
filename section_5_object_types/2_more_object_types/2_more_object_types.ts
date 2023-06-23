/**
 * Objects can be typed by declaring what the object should
 * look like in the annotation.
 *
 * Accessing a property that isn't defined or performing operations
 * without keeping types in mind will throw errors!
 */

function printName(person: { first: string; last: string }): void {
  console.log(`${person.first} ${person.last}`);
}

printName({ first: 'Thomas', last: 'Jenkins' });

let coordinate: { x: number; y: number } = { x: 32, y: 32 };

function randomCoordinate(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}
