const flattenArray = (arr) => {
  if (arr.length === 0) {
    return [];
  }

  const [first, ...rest] = arr;

  if (Array.isArray(first)) {
    return [...flattenArray(first), ...flattenArray(rest)];
  }

  return [first, ...flattenArray(rest)]
}

const numbers = [1, [2, [3, 4], 5]];
const letter = ["a", ["b", ["c"]]];
const num = [[1], [2, [3]], 4];

console.log(flattenArray(numbers));
console.log(flattenArray(letter));
console.log(flattenArray(num));