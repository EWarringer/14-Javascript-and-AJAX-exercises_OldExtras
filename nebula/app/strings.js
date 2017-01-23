exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    return str.replace(/(\w)\1+/g,function(x){
    if(x.length>amount) {
      return x.slice(-amount);
    } else {
      return x;
    }
  });
  },
  wordWrap: function(str, cols) {

    var count = 0;
    var words = str.split(" ");
    var result = [];
    for(var i = 0; i < words.length; i++) {
      count += words[i].length;
      result.push(words[i]);
      var nextWord = words[i + 1]
      if (nextWord) {
        var nextWordCharacters = nextWord.length;
        if (count + nextWordCharacters < cols) {
          result.push(" ");
          count+=1;
        } else {
          result.push("\n");
          count = 0;
        }
      }
    }
    return result.join("");
  },

  reverseString: function(str) {
    reversed = str.split("").reverse().join("");
    return reversed;
  }
};
