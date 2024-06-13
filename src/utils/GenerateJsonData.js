const { v4: uuidv4 } = require("uuid");

const generateData = () => {
  const names = [
    "Jacob Janvi",
    "Emily Stone",
    "Michael Johnson",
    "Sarah Parker",
    "David Brown",
    "Sophia Green",
    "James White",
    "Olivia Black",
    "Lucas King",
    "Ava Lee",
    "Ethan Harris",
    "Isabella Clark",
    "Mason Lewis",
    "Mia Robinson",
    "Logan Walker",
    "Amelia Young",
    "Alexander Hall",
    "Evelyn Allen",
    "Benjamin Scott",
    "Aria Wright",
    "William Adams",
    "Lily Mitchell",
    "Elijah Turner",
    "Grace Campbell",
    "Daniel Perez",
    "Chloe Morgan",
    "Matthew Ramirez",
    "Victoria Rivera",
    "Henry Phillips",
    "Zoe Gomez",
  ];
  const emails = names.map(
    (name) => name.toLowerCase().replace(" ", "") + "@gmail.com"
  );
  const reviewDescriptions = [
    "This platform serves well",
    "Amazing service and user-friendly",
    "Highly recommend this platform",
    "Satisfactory experience overall",
    "Great customer support and service",
    "User interface is very intuitive",
    "Would definitely use it again",
    "A bit slow but overall good",
    "Had a pleasant experience using this",
    "Very efficient and reliable",
    "Could be better with more features",
    "Excellent performance",
    "Good but has some bugs",
    "Very satisfied with the service",
    "Helped me a lot",
    "Not bad, could improve",
    "Great value for the price",
    "Smooth and seamless experience",
    "Met my expectations",
    "Very professional service",
    "Impressive platform",
    "Will recommend to others",
    "Quite easy to use",
    "Fast and efficient",
    "Loved the experience",
    "Needs improvement in some areas",
    "User-friendly but slow",
    "Overall a good platform",
    "Very happy with the service",
    "Exceeded my expectations",
  ];
  const imgUrl =
    "https://plus.unsplash.com/premium_photo-1663045225240-3c305414e9a3?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const data = [];

  for (let i = 0; i < 30; i++) {
    data.push({
      _id: uuidv4(),
      name: names[i],
      email: emails[i],
      reviewDescription: reviewDescriptions[i],
      imgUrl: imgUrl,
    });
  }

  return data;
};

console.log(JSON.stringify(generateData(), null, 2));
