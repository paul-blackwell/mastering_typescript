interface Person {
  name: string;
}

interface Employee {
  readonly id: number;
  email: string;
}

interface Engineer extends Person, Employee {
  level: string;
  languages: string[];
}

const pierre: Engineer = {
  name: 'Pierre',
  id: 123897,
  email: 'pierre@gmail.com',
  level: 'senior',
  languages: ['JS', 'Python'],
};
