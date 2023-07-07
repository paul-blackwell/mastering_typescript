/**
 * Literal types are not just types - but
 * the values themselves too!
 *
 * On it's own, they may not seem useful,
 * but combine them with unions and you
 * can have very fine-tuned type options
 * for Typescript to enforce.
 */

let zero: 0 = 0;
let mood: 'Happy' | 'Sad' = 'Happy';
mood = 'Sad';

type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

let today: DayOfWeek = 'Monday';


// A function with a literal + union type parameter
const giveAnswer = (answer: 'yes' | 'no' | 'maybe' ) => {
  return `The answer is ${answer}`;
}

// Can provide one of the literals in the union
giveAnswer('no');

// Can't provide anything else
giveAnswer('I am not sure')
