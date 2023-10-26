/**
 * Truthiness Guards 
 * Truthiness Type Guards involve 
 * checking a value for being truthy or 
 * falsy before working with it. 
 * This is helpful in avoiding errors when 
 * values might be null or undefined.
 */

const printLetters = (word?: string) => {
  if(word) {
    for (let char of word) {
      console.log(char);
    }
  } else {
    console.log('You did not pass in a word')
  }
}
