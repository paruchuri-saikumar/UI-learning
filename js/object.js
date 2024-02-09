const userDetails = {
  firstName: "Mounika",
  lastName: "Polineni",
};

const userEducation = {
  school: "Noble E.M High School",
  Graduation: "Usha Rama College of Engineering and Technology",
};
const userAddress = {
  age: 28,
  address: {
    city: "Nasik",
    state: "Maharastra",
  },
};

const userFullDetails = {
  ...userDetails,
  ...userEducation,
  ...userAddress,
}; // to join multiple objects using spread operator

console.log(userDetails);
console.log(userDetails.firstName);
console.log(userDetails["firstName"]);

console.log(userFullDetails);
