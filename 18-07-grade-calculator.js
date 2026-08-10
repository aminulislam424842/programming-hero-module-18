const calculateGrade = (marks) => {
  if (marks >= 80) { return "A+" }
  else if (marks >= 70) { return "A" }
  else if (marks >= 60) { return "B" }
  else if (marks >= 50) { return "C" }
  else { return "F" }
}

console.log(calculateGrade(90))
console.log(calculateGrade(75))
console.log(calculateGrade(65))
console.log(calculateGrade(55))
console.log(calculateGrade(30))