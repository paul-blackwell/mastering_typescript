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

interface Cat {
  name: string;
  breed: string;
}

function identity<T>(item: T): T {
  return item;
}

identity<number>(7);
identity<string>('Hello');
identity<Cat>({name: 'Hades', breed: 'short hair'});
