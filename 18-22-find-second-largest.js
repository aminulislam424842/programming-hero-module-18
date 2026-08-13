// const findSecondLargest = (arr) => {
//   const result = arr.reduce((acc, current) => {
//     if (current > acc.largest) {
//       acc.secondLargest = acc.largest;
//       acc.largest = current;
//     }
//     else if (current > acc.secondLargest && current < acc.largest
//     ) {
//       acc.secondLargest = current;
//     }
//     return acc;
//   },
//     {
//       largest: -Infinity,
//       secondLargest: -Infinity
//     })
//   return result.secondLargest
// }


// const numbers = [10, 5, 20, 8, 15];

// console.log(findSecondLargest(numbers));


//       use set

const findSecondLargest = (arr) => {
  const uniqueNumbers = [...new Set(arr)];

  uniqueNumbers.sort((a,b) => b-a);

  return uniqueNumbers.length < 2 ? null : uniqueNumbers[1];
}

const numbers = [10, 5, 20, 8, 15];

const number = [5,5,5,5]

console.log(findSecondLargest(numbers));
console.log(findSecondLargest(number));