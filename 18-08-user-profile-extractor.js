const extractUserProfile = (user) => {
  const { name, email } = user;
  return `${name}
${email}`;
};

let user = {
  name: "Aminul",
  email: "aminulislam424842@gmail.com",
  age: 21
}

console.log(extractUserProfile(user));