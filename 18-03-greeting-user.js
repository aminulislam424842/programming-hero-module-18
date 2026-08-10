const greetUser = (name = "Guest") => {
  return `Hello ${name}`;
}

console.log(greetUser("Aminul"))
console.log(greetUser())