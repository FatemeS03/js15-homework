// ? Question-2:Write a function called "printPersons" that takes an array of persons and displays them on the screen.
const persons = [
  { name: "Alice", age: 18 },
  { name: "Bob", age: 21 },
  { name: "Charlie", age: 15 },
];

function printPersons(item) {
  item.forEach(i => {
    console.log(`The Name is ${i.name},The Age is ${i.age}`);
  });
} 
printPersons(persons)