const findSecondLargest = (arr) => {
  const result = arr.reduce((acc, current) => {
    if (current > acc.largest) {
      acc.secondLargest = acc.largest;
      acc.largest = current;
    }
    else if (current > acc.secondLargest && current < acc.largest
    ) {
      acc.secondLargest = current;
    }
    return acc;
  },
    {
      largest: -Infinity,
      secondLargest: -Infinity
    })
  return result.secondLargest
}


const numbers = [10, 5, 20, 8, 15];

console.log(findSecondLargest(numbers));