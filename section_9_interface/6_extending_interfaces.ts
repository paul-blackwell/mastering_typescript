interface Dog {
  name: string;
  age: number;
}

interface Dog {
  breed: string;
  bark(): string;
}

interface ServiceDog extends Dog {
  job: 'drug sniffer' | 'bomb sniffer' | 'guide dog';
}

const chewy: ServiceDog = {
  name: 'Chewy',
  age: 4.5,
  breed: 'Lab',
  bark() {
    return 'Bark';
  },
  job: 'guide dog',
};
