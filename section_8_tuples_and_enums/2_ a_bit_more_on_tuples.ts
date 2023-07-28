type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, 'Okay'];

/** 
 * Note:
 * With tuples is you add/ removed values to the tuple after it has 
 * been declared and TS won't complain. It's a limitation of tuples
 */
goodRes.push(123);
goodRes.pop();
goodRes.pop();
goodRes.pop();

// We can also have an array of tuples
const responses: HTTPResponse[] = [[404, 'Not found'], [200, 'Ok']];
