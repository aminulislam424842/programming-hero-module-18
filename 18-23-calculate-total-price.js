const calculateTotalPrice = (items) => {
  const calculate = items.reduce((total, item) => {
    const { price, qty } = item;

    const subPrice = (price * qty);

    let totalPrice = total + subPrice;

    return totalPrice;
  }, 0)

  return calculate;
}

const item1 = [
  { price: 10, qty: 2 },
  { price: 20, qty: 3 }
]

const item2 = [
  { price: 5, qty: 5 }
]
const item3 = [
  { price: 100, qty: 1 },
  { price: 50, qty: 2 },
  { price: 25, qty: 4 },
]

console.log(calculateTotalPrice(item1))
console.log(calculateTotalPrice(item2))
console.log(calculateTotalPrice(item3))