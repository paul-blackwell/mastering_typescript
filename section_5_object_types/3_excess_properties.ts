function printName(person: { first: string; last: string }): void {
  console.log(`${person.first} ${person.last}`);
}


printName({first: 'Mick', last: 'Jagger', age: 47}) // TS will complain as we have an extra age value
const singer = { first: 'Mick', last: 'Jagger', age: 47 };
printName(singer); // Doesn't complain is we pass the object in like this even if it has an extra age value
