const calculateShoppingTotal = (...prices) => {
  return prices.reduce((sum, p) => sum + p, 0);;
}

console.log(calculateShoppingTotal(100, 200, 300));
console.log(calculateShoppingTotal(50, 50));
console.log(calculateShoppingTotal(500));
