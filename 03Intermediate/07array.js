var countries = ["Nigeria", "USA", "Japan", "Canada"];

var states = new Array("Edo", "Delta State", "Rivers", "Lagos");

// console.log(states[1]);

// console.log(states.length); // thisImportant for looping through
states[0] = "Abeokuta"; // Replace first value
// console.log(states);

var user = ["Osasere", "edenosas1@gmail.com", 3, 34, true]; // bad data structure
// console.log(user);

user.pop(); // remove last value from user array
// console.log(user);

user.unshift("newOsasere");
// console.log(user);
user.shift(); // remove first value from user array
// console.log(user);

console.log(user.indexOf('Osasere'));