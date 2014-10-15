//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
  if (input.slice(-1) == '?'){
    return "Sure."
  }else if (input == input.toUpperCase()) {
    return "Whoa, chill out!"
  }else if (input.slice(-1) == '.'){
    return "Whatever."
  }
};

module.exports = Bob;
