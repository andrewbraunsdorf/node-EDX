exports.sayHelloInEnglish = function() {
  return 'Hello';
};

exports.sayHelloInSwedish = function() {
  return 'Hej';
};

exports.sayHelloInTatar = function() {
  return 'Isänme';
};

module.exports = {
  sayHelloInEnglish() {
    return 'Hello';
  },

  sayHelloInSwedish() {
    return 'Hej';
  },

  sayHelloInTatar() {
    return 'Isänme';
  }
};