// function isEven(element) {
//     return element % 2 === 0;
// }

// console.log(isEven(2))

var resultTrue = [2, 4, 6, 8].every((e) => (e % 2 === 0));
var resultFalse = [2, 4, 7, 8].every((e) => (e % 2 === 0));


console.log(resultTrue);
console.log(resultFalse);