/**
 * instanceof Narrowing
 * instanceof is a Javascript operator that allows us to check
 * if one thing is an instance of another (remember prototypes?).
 *
 * This can help us narrow types when working
 * with things like classes.
 */

function printFullDate(date: string | Date) {
  if (date instanceof Date) {
    console.log(date.toUTCString());
  } else {
    console.log(new Date(date).toUTCString());
  }
}

/* ----------------------------------------------------------------- */

class User {
  constructor(public username: string) {}
}

class Company {
  constructor(public name: string) {}
}

function printName(entity: User | Company) {
  if (entity instanceof User) {
    console.log(entity.username);
  } else {
    console.log(entity.name);
  }
}
