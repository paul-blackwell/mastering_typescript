/**
 * Instead of writing out object types in an annotation,
 * we can declare them separaretly in a type alias, which is
 * simply the desired shape of the object.
 *
 * This allows us to make our code more
 * readable and even reuse the types
 * elsewhere in our code.
 */

type Point = {
  x: number;
  y: number;
};

let coordinate: Point = { x: 34, y: 2 };

function randomCoordinate(): Point {
  return { x: Math.random(), y: Math.random() };
}

function doublePoint(point: Point): Point {
  return { x: point.x * 2, y: point.y * 2 };
}
