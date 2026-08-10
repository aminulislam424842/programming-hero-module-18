const getSafeUserCity = (user) => {
  return  user.address?.city?? "UNknown City";
}

const user1 = {
  name: "Aminul",
  address: {
    city: "Rajshahi"
  }
};
const user2 = {
  name: "Nafis",
};

console.log(getSafeUserCity(user1))
console.log(getSafeUserCity(user2))