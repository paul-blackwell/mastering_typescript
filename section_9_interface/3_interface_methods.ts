interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  // sayHi: () => string;
  sayHi(): string; // Does the same as "sayHi: () => string;"
}

const thomas: Person = {
  id: 1213221,
  first: 'Thomas',
  last: 'Hardy',
  nickname: 'Tom',
  sayHi: () => {
    return 'Hello!';
  },
};
