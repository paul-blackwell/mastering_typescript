/**
 * Arrays can be typed using a type
 * annotation followed by empty array
 * brackets, like number[] for an array of numbers.
 *
 * Note: these arrays only allow data of that one type inside them.
 * More on that later!
 */

const activeUsers: string[] = [];
activeUsers.push('Tony');
// activeUsers.push(12); won't work

const ageList: number[] = [45, 56, 13];
ageList[0] = 99;
// ageList[0] = 'asdsad'; won't work

