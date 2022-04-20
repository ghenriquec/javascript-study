let person = {
  name: "John",
  age: 30,
  weigth: 88.6
}

for (let prop in person) {
  console.log(`${prop}: ${person[prop]}`);
}