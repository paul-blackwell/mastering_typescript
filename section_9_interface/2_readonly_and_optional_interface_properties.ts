interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
}

const thomas: Person = { id: 1213221, first: 'Thomas', last: 'Hardy', nickname: 'Tom' };

thomas.first = 'Tom';

// Can't do this because id is readonly
// thomas.id = 23232;
