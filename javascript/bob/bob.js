//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {

  if (input == input.toUpperCase() && numbers(input)){
    return "Whoa, chill out!";
  }else{
    return punctuationChecker(input.slice(-1));
  }

  function punctuationChecker(punct){

    if(punct == "?"){
      return "Sure."
    }else{
      return "Whatever."
    }
  };

  function numbers(input){
    return [".", "!", "?"].indexOf(input.slice(-1)) != -1
  };
}

module.exports = Bob;
