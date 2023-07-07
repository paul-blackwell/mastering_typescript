/**
 * Sometimes you might have more specific information about a value's 
 * type, and you want to make sure Typescript knows it too. 
 * 
 * You can assert a value's type by using the 'as' keyword, followed by the 
 * specific type you want to assert
 */

// Typescript infers a type of HTMLElement
// const myPic = document.querySelector('profile-image');

// But we know a more specific type, so let's assert it!
const myPic = document.querySelector('profile-image') as HTMLImageElement;

