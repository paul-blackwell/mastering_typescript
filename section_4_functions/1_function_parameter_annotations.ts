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
