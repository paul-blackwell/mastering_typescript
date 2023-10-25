function merge<T,U>(object1: T, object2: U) {
  return { ...object1, ...object2 };
}

const comboObj = merge({ name: 'colt' }, { pets: ['blue', 'elton'] });
