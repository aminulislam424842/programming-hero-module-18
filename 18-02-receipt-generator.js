const generateReceipt = (product, price, qty) => {
  let total = price * qty;

  return `
  -------------------------
          RECEIPT            
  -------------------------
  Product  :  ${product}
  Price    :  ${price}  BDT
  Qty      :  ${qty}
  Total    :  ${total}  BDT
  -------------------------`
}
console.log(generateReceipt("Notebook",50,3));