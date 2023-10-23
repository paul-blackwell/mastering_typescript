function numberIdentity(item: number): number {
  return item;
}

function stringIdentity(item: string): string {
  return item;
}

function booleanIdentity(item: boolean): boolean {
  return item;
}

/**
 * Not a good idea 
 * From Ts perspective this could mean it actually accepts and string and then returns a number
 * It doesn't mean whatever type you pass to it, it has to return that type
 */
// function identity(item: any): any {
//   return item;
// }


