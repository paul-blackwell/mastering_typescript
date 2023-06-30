function square(num: number) {
  return num * num;
}

function greet(person: string) {
  return `Hi there, ${person}!`;
}

square(3); // Will work
// square('asasa'); Won't work

greet('Paul'); // Will work
// greet(true) // Won't work

// Multiple parameters

// Standard function
function doSomething(person: string, age: number, isFunny: boolean) {}

// Arrow function
const doSomethingArrow = (person: string, age: number, isFunny: boolean) => {};

doSomething('Paul', 20, true); // Will work
// doSomething('Paul'); won't work
// doSomething(20, 'Paul', true); // won't work

