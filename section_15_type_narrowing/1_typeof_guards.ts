/**
 * 
 * typeof Type Guards
 * typeof Type Guards involve simply doing a 
 * type check before working with a value. 
 * Since unions allow multiple types for a value, 
 * we can first check what came through 
 * before working with it.
 * 
 */

function triple(value: number | string) {
  if(typeof value === 'string') {
    return value.repeat(3);
  }
  return value * 3;
}
