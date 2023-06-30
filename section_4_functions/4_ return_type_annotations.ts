function square(num: number): number {
  return num * num;
}
square(3);

function greet(person: string): string {
  return `Hi there, ${person}!`;
}

 
// With default parameter
function greetWithDefaultParameter(person: string = 'stranger'): string {
  return `Hi there, ${person}!`;
}

greetWithDefaultParameter();

function rando(num: number): number | string {
  if (Math.random() < 0.5) {
    return num.toString();
  }
  return num;
}

// Arrow function example
const add = (x: number, y: number): number => {
  return x + y;
}
