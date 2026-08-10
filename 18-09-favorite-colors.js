const getFirstTwoColors = (colors) => {
  const [first, second] = colors;

  return `${first}
${second}`;
}

let colors = ["Red", "Blue", "Green"]

console.log(getFirstTwoColors(colors))