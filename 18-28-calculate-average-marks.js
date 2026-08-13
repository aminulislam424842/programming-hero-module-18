const calculateAverageMarks = (marks) => {
  const calculateMarks = marks.reduce((total, num) => {
    const totalMarks = total + num;
    return totalMarks
  }, 0)
  const average = calculateMarks/ marks.length;

  return average.toFixed(2);;
}

const marks = [80, 90, 70];

console.log(calculateAverageMarks(marks));