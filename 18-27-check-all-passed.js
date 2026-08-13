const checkAllPassed = (students) => {
  return students.every(({passed}) => passed===true)
}
const result = [
  {name:"A",passed:true},
  {name:"B",passed:true},
]
console.log(checkAllPassed(result))