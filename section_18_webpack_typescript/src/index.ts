import Dog from './Dog.js';
import { add, multiply, divide } from './utils.js';
import ShelterDog from './ShelterDog.js';

console.log('from index file');

const elton = new Dog('Elton', 'Aussie', 0.5);
elton.bark();

console.log(add(4, 5));
console.log(multiply(4, 5));
console.log(divide(4, 5));

const buffy = new ShelterDog('Buffy', 'Pitbull', 5, 'Desert springs shelter');
