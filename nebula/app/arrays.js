exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  removeWithoutCopy : function(arr, item) {
    for (i = 0; i < arr.length; i++) {
      if (arr[i] == item) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr
  },

  append : function(arr, item) {

    arr.push(item);
    return arr;

  },

  truncate : function(arr) {
    arr.splice(-1, 1);
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.splice(0, 1);
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item)
    return arr
  },

  count : function(arr, item) {
    var count = 0;
    for (i = 0; i < arr.length; i++) {
      if (arr[i] === item)
      count++;
    }
    return count
  },

  duplicates : function(arr) {
    var results = [];
      for (var i = 0, len = arr.length - 1; i < len; i++) {
        if((results.indexOf(arr[i]) == -1) && (arr.indexOf(arr[i], i + 1) != -1)) {
        results.push(arr[i]);
      }
    }
    return results;
  },

  square : function(arr) {
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i] * arr[i];
    }
    return arr;
  },

  findAllOccurrences : function(arr, target) {
    var results = [];
    for (var i = 0; i < arr.length; i++)
      if (arr[i] === target)
        results.push(i);
    return results;
  }
};
