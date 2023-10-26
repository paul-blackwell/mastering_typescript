/**
 * Equality Narrowing 
 * equality Type Guards involve comparing types to each other 
 * before doing certain operations with values. 
 * 
 * By checking two values against one another, we can be sure they're both 
 * the same before working with them in a type-specific way.
 */

function someDemo(x: string | number, y: string | boolean) {
  if (x === y) {
    x.toUpperCase();
  }
}
