const getOrderStatus = (status) => {
  if (status === "delivered") {
    return "Order Delivered";
  }
  else {
    return "Order Processing";
  }
}

console.log(getOrderStatus("delivered"));
console.log(getOrderStatus("pending"));
console.log(getOrderStatus("cancelled"));