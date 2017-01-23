exports = (typeof window === 'undefined') ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */
// debugger
exports.eveningExerciseAnswers = {
  indexOf : function(arr, item) {
    var index = arr.indexOf(item);
    return index;
  },

  sum : function(arr) {
    // var arr=[1,2,3,4];
    // return eval(arr.join('+'));
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum
  },

  remove : function(arr, item) {
    return arr.filter(function(element){
    return element !== item;
  });
  },

  reverseString : function(str) {
    reversed = str.split("").reverse().join("");
    return reversed
  },

  longestSubString : function(str) {
    var string = str.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < string.length; i++) {
        if (longest < string[i].length) {
            longest = string[i].length;
            word = string[i];
        }
    }
    return word;
  },

  letterMoveForward : function(str) {
    var caesar = str.replace(/[a-z]/gi, function(c) {
        switch (c) {
          case 'z': return 'a';
          case 'Z': return 'A';
          default:  return String.fromCharCode(1 + c.charCodeAt(0));
        }
    });
    return caesar
  },

  capitalizeWords : function(str) {
    return str.replace(/\w\S*/g, function(txt){
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
};
