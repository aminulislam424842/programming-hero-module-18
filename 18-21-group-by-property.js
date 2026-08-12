const groupByProperty = (arr, key) => {
  return  arr.reduce ((grouped , item) => {
    const propertyValue = item[key];

    if (!grouped[propertyValue]) {
      grouped[propertyValue] = [];
    }

    grouped[propertyValue].push(item);


    return grouped;
  },
    {

    }
  );
}

const students = [
  { name: "Aminul", department: "CST" },
  { name: "Nafis", department: "EEE" },
  { name: "Tamim", department: "CST" },
  { name: "Rafi", department: "EEE" }
];

const types = [
  {type:"fruit",name:"Apple"},
  {type:"fruit",name:"Mango"},
  {type:"veg",name:"Carrot"},
]
console.log(groupByProperty(students,"department"));
console.log(groupByProperty(types,"type"));