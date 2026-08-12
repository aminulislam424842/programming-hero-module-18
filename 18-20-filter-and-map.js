const filterAndSquareEvens = (arr) => {
  const squares = arr.filter (x=>x%2===0).map(x=> x*x);

  return squares;
}

const number1 = [1,2,3,4,5];
const number2 = [10,15,20,25];
const number3 = [2,4,6,8];

console.log(filterAndSquareEvens(number1));
console.log(filterAndSquareEvens(number2));
console.log(filterAndSquareEvens(number3));