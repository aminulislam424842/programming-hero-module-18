const processStudentResults = (students) => {
  const studentsWithTotalMarks = students.map(student => {
    const totalMarks = student.marks.reduce((total, mark) => total + mark, 0);
    const avgMarks = totalMarks / student.marks.length;

    let grade;

    if (avgMarks >= 80) grade = "A+";
    else if (avgMarks >= 70) grade = "A";
    else if (avgMarks >= 60) grade = "B";
    else if (avgMarks >= 50) grade = "C";
    else grade = "F";

    return {
      name: student.name,
      totalMarks: totalMarks,
      grade: grade
    };
  });
  const topper = studentsWithTotalMarks.reduce((currentTopper, nextTopper) => {
    return currentTopper.totalMarks > nextTopper.totalMarks ? currentTopper : nextTopper;
  })
  return topper.name;
}

const students = [
  { name: "Aminul", marks: [80, 90, 85] },
  { name: "Nafis", marks: [60, 55, 70] },
  { name: "Tamim", marks: [95, 92, 98] }
]

console.log(processStudentResults(students))