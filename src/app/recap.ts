const username: string = 'Nicolas';
const usernameExtra: string | number | boolean = false;
const sum = (a: number, b: number):number => {
  return a + b;
}

sum(1, 2);

// class Person {
//   private age: number;
//   lastName: string;

//   constructor(age: number, lastName: string) {
//     this.age = age;
//     this.lastName = lastName;
//   }
// }

// Shortcut for class construction
class Person {
  constructor(private age: number, public lastName: string) {}
}

const nico = new Person(15, 'Molina');
nico.lastName;
