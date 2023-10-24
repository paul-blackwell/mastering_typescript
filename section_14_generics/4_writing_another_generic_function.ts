function getRandomElement<T>(list: T[]): T {
  const randIdx = Math.floor(Math.random() * list.length);
  return list[randIdx];
}

console.log(getRandomElement<string>(['a', 'b', 'c']));
console.log(getRandomElement<number>([2, 5, 9, 4]));
