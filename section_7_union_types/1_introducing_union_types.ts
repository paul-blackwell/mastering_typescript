/**
 * Union types allow us to give a value a few
 * different possible types. If the eventual value's
 * type is included, Typescript will be happy.
 *
 * We can create a union type by using the single | (pipe character)
 * to separate the types we want to include. It's like saying,
 * "This thing is allowed to be this, this, or this".
 * Typescript will enforce it from there.
 */

let age: number | string = 21;
age = 23;
age = '24';

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinates: Point | Loc = { x: 1, y: 34 };
coordinates = { lat: 321.212, long: 23.334 };
