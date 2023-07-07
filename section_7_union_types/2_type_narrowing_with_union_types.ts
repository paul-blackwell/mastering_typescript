/**
 * Narrowing the Type is simply doing a type 
 * check before working with a value. If your 
 * value is a string you may want to use it 
 * differently than if you got a number.
 * 
 * Since unions allow multiple types for a value, 
 * it's good to check what came through 
 * before working with it.
 */

function printAge(age: number | string): void {
  console.log(`You are ${age} years old`);
}

printAge(23);
printAge('87');


// Won't give you a warning
function calculateTax(price: number | string, tax: number) {
  if(typeof price === 'string') {
    price = parseFloat(price.replace('$', ''));
  }
   price * tax;
}

// Will give you a warning
// function calculateTax(price: number | string, tax: number) {
//    return price * tax;
// }

