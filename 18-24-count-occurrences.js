const countOccurrences = (arr) => {
  const occurrences = arr.reduce((acc, elem) => {
    if (!acc[elem]) {
      acc[elem] = 1;
    }
    else {
      acc[elem]++;
    }
    return acc;
  }, {})
  return occurrences
}

const acc1 = ["a", "b", "a", "c", "b", "c"];
const acc2 = [1, 2, 1, 3, 2, 1, 4];
const acc3 = [true, false, true]

console.log(countOccurrences(acc1))
console.log(countOccurrences(acc2))
console.log(countOccurrences(acc3))