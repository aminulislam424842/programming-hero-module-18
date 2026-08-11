const generateCheckoutSummary = (order) => {
  const cart = order.items.map((items) => {
    const { price, qty } = items;
    return {
      totalItem: qty,
      subTotal: price * qty
    }
  }).reduce((summary, item) => {
    summary.totalItem += item.totalItem;
    summary.subTotal += item.subTotal;
    return summary;
  },
    {
      totalItem: 0,
      subTotal: 0
    })
  const discountAmount = cart.subTotal * order.discountRate;
  const payableAmount =
    cart.subTotal - discountAmount + order.shipping;

  return `Customer Name        : ${order.name}
Total Items          : ${cart.totalItem}
SubTotal             : ${cart.subTotal}
Discount             : ${discountAmount}
Shipping Charge      : ${order.shipping}
Final Payable Amount : ${payableAmount}`;
};

const order = {
  name: "Aminul",
  items: [
    { name: "Shirt", price: 800, qty: 2 },
    { name: "Shoes", price: 2500, qty: 1 },
    { name: "Watch", price: 1500, qty: 1 }
  ],
  discountRate: 0.1,
  shipping: 120
};

console.log(generateCheckoutSummary(order));