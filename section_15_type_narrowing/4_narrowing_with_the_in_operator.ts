/**
 * in Operator Narrowing 
 * Javascript's in operator helps check if a certain property exists in an object.
 * 
 * This means we can use it to check if a value exists in an object, according to
 * its type alias or aliases, before working with it.
 */

interface Movie {
  title: string,
  duration: number,
}

interface TVShow {
  title: string,
  numEpisodes: number,
  episodeDuration: number,
}
