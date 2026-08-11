// const generateCartSummary = (items) => {

//   let totalQty = 0;
//   let totalPrice = 0;
//   let discount = 0;
//   let total = 0;

//   for (let item of items) {
//     const {price,qty} = item;

//     totalQty += qty; 
//     totalPrice += (price*qty);
    
//     discount = (totalPrice*10)/100;

//     total = totalPrice-discount;

//   }

//   return `Items = ${totalQty}
// Subtotal = ${totalPrice}
// Discount = ${discount}
// Total = ${total}`


// }

// const items = [
//   {name: "Shirt", price:800, qty:2},
//   {name: "Shoes", price:2500, qty:1},
//   {name: "Watch", price:1500, qty:1},
// ]

// console.log(generateCartSummary(items));



const generateCartSummary = (items,discount=0) => {

  const cart = items.reduce ((summary,item) => {

    
    const {price,qty} = item;
    
    summary.totalQty +=qty;
    summary.subTotal +=price*qty;
    
    return summary;

  },
  {
      subTotal : 0,
      totalQty : 0
    });

  const discountPrice = (cart.subTotal*discount)/100;
  const total = cart.subTotal - discountPrice;
  
  return`Items = ${cart.totalQty}
Subtotal = ${cart.subTotal}
Discount = ${discountPrice}
Total = ${total}`;
};


const items = [
  {name: "Shirt", price:800, qty:2},
  {name: "Shoes", price:2500, qty:1},
  {name: "Watch", price:1500, qty:1}
];

console.log(generateCartSummary(items,10));
