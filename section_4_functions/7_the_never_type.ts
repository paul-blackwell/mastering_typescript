/**
 * The never type represents values that NEVER occur. 
 * We might use it to annotate a function 
 * that always throws an exception, or a 
 * function that never finishes executing.
 * 
 * Don't confuse with void - void returns 
 * undefined or null, which is technically still a 
 * type of value. With never, a function doesn't 
 * even finish executing.
 */

function makeError(msg: string) : never {
  throw new Error(msg);
}

// function gameLoop(): never {
//   while(true) {
//     console.log('Game loop running!')
//   }
// }
