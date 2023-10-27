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

function getRuntime(media: Movie | TVShow): number {
  if('numEpisodes' in media) {
    return media.numEpisodes * media.episodeDuration
  }

  return media.duration;
}

console.log(getRuntime({title: 'Amadeus', duration: 140}));
console.log(getRuntime({ title: 'Spongebob', numEpisodes: 80, episodeDuration: 30 }));
