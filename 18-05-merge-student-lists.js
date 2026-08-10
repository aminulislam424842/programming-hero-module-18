// const mergeStudentLists = (list1, list2) => {
//   return [].concat(...list1,...list2);
// }

// console.log(mergeStudentLists([1,2],[3,4]));


const mergeStudentLists = (...studentsList) => {
  return [].concat(...studentsList);
}
let class1StudentName = ["Aminul", "Nafis", "Tamim"];
let class2StudentName = ["Mahi", "Rafi", "Joy"];
let class3StudentName = ["Azad", "Yousuf", "Samiul"];

console.log(mergeStudentLists(class1StudentName, class2StudentName, class3StudentName))