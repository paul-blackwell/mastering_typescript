/**
 * Interfaces
 * Interfaces serve almost the exact same purpose as type aliases
 * (with a slightly different syntax).
 *
 * We can use them to create reusable, modular types that describe the shapes of objects
 */

// type Point = {
//   x: number;
//   y: number;
// };

// const pt: Point = { x: 213, y: 12 };

interface Point {
  x: number;
  y: number;
}

const pt: Point = { x: 213, y: 12 };
