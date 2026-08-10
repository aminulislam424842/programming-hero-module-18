const calculateStudentAverage=(marks)=> {
  const totalMark = marks.reduce((total,mark) => total + mark,0);
  const avgMark = totalMark/marks.length;

  return avgMark;
}

console.log(calculateStudentAverage([80,90,100]))
console.log(calculateStudentAverage([60,70,80]))