const findMostExpensiveProduct = (products) => {
  const expensiveProduct = products.reduce((mostExpensive, currentProduct) => {
    return currentProduct.price > mostExpensive.price ? currentProduct : mostExpensive;
  })

  return expensiveProduct.name;
}

const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 30000 },
  { name: "Watch", price: 10000 }
];

console.log(findMostExpensiveProduct(products))