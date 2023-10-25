function makeEmptyArray<T = number>(): T[] {
  return [];
}

// Defaults to const numbs: number[]
const numbs = makeEmptyArray();

// But if we wanted a boolean array, const booleans: boolean[]
const booleans = makeEmptyArray<boolean>()
