/**
 * When we may want to use implicit types is when we
 * declare a variable separately from initializing it
 */
const movies = ['Arrival', 'The thing', 'Aliens', 'Amadeus'];

/**
 * If we don't implicitly set the type TS will infer the type to ANY
 * (WE DON'T WANT THIS) this is because TS has no way on knowing
 * what type to set
 */
// let foundMovie;

// So we must set the type
let foundMovie: string;

for (let movie of movies) {
  if (movie === 'Amadeus') {
    foundMovie = 'Amadeus';
  }
}
