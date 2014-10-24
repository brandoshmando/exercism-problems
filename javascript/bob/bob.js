//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
  var response;
  if (input == input.toUpperCase()){
    return "Whoa, chill out!";
  }else{
    return punctuationChecker(input.slice(-1));
  }

  function punctuationChecker(punct){
    if (punct == "!" || punct == "."){
      return "Whatever."
    }else if(punct == "?"){
      return "Sure."
    }
  };
}

module.exports = Bob;
