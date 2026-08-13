const mergeAndSort = (arrays) => {
  return [...arrays.flat()].sort((a, b) =>a-b)
}

const arrays = [[3, 1], [4, 2], [5, 0]]

console.log(mergeAndSort(arrays))