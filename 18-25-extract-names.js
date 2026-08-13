const extractNames = (users) => {
  return users.map (({name}) => name );
}
const students = [
  { name: "Aminul", age: 21 },
  { name: "Nafis", age: 22 },
  { name: "Tamim", age: 20 }
];
console.log(extractNames(students))