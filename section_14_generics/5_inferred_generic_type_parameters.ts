function getRandomElement<T>(list: T[]): T {
  const randIdx = Math.floor(Math.random() * list.length);
  return list[randIdx];
}

getRandomElement(['a', 'b', 'c', 'd']); // TS infers type  of string
getRandomElement([1, 2, 3, 4]); // TS infers type  of number
