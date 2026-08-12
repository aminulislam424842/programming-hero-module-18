const sumObjectValues = (obj) => {

  // let value = Object.values(obj);

  // const total = value.reduce((total, element) => total + element, 0);

  const total = Object.values(obj).reduce((total, elem) => total + elem, 0)

  return total;
}

const values1 = {
  a: 10,
  b: 20,
  c: 30
}
const values2 = {
  x: 5,
  y: 15
}
const values3 = {
  p: -10,
  q: 10,
  r: 5
}

console.log(sumObjectValues(values1));
console.log(sumObjectValues(values2));
console.log(sumObjectValues(values3));