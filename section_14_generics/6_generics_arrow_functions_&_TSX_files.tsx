
// This works in TSX
// function getRandomElement<T>(list: T[]): T {
//   const randIdx = Math.floor(Math.random() * list.length);
//   return list[randIdx];
// }

// This won't work in TSX
// const getRandomElement = <T>(list: T[]): T => {
//   const randIdx = Math.floor(Math.random() * list.length);
//   return list[randIdx];
// }

// This works in TSX just need to add '<T,>' not '<T>'
const getRandomElement = <T,>(list: T[]): T => {
  const randIdx = Math.floor(Math.random() * list.length);
  return list[randIdx];
};

