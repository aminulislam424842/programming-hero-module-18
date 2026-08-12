/** 
            ES6

const removeDuplicates = (arr) => {
  const  remove = [...new Set(arr)];
  return remove
}

const arr = [1,2,2,3,4,4,5];

console.log(removeDuplicates(arr))

*/

//         traditional 

function removeDuplicates(arr) {
  let emptyArr = [];

  for (let number of arr) {
    if (!emptyArr.includes(number)) {
      emptyArr.push(number);
    }
  }
  return emptyArr;
}

const arr = [1, 2, 2, 3, 4, 4, 5];

console.log(removeDuplicates(arr))