var greetings = require('./greetings.js');

console.log('Swedish ' +
  greetings.sayHelloInSwedish() +
  ' & English ' +
  greetings.sayHelloInEnglish() +
  ' & Tatar ' +
  greetings.sayHelloInTatar());

// // greeting methods
// var sayHelloInEnglish = function() {
//   return 'Hello';
// };

// var sayHelloInSwedish = function() {
//   return 'Hej';
// };

// var sayHelloInTatar = function() {
//   return 'Isänme';
// };

// console.log('Swedish ' +
//   sayHelloInSwedish() +
//   ' & English ' +
//   sayHelloInEnglish() +
//   ' & Tatar ' +
//   sayHelloInTatar());