const _ = {
  //    clamp(yourNumber, lowerBound, upperBound) {}
  //clamps number within the inclusice lower and upper bounds.
  clamp(number, lowerBound, upperBound) {
    if (number < lowerBound) {
      return lowerBound;
    } else if (number >= lowerBound && number <= upperBound) {
      return number;
    } else {
      return upperBound;
    }
  },
  //    inRange(yourNumber, startRange, endRange) {}
  // Checks if n is between startValue and up to, but not including, endValue.
  // If endValue is not specified, it's set to start with startValue then set to 0.
  // If startValue is greater than endValue the params are swapped to support negative ranges.
  inRange(nr, startValue, endValue) {
    if (endValue === undefined) {
      endValue = startValue;
      startValue = 0;
    }
    const startValueKeep = startValue;
    if (startValue > endValue) {
      startValue = endValue;
      endValue = startValueKeep;
    }
    if (nr < startValue) {
      return false;
    } else if (nr >= endValue) {
      return false;
    } else if (nr >= startValue && nr < endValue) {
      return true;
    }
  },
  //    words(stringArg) {}
  // A slightly simplified version of original lodash words() string method.
  // The method takes one argument - a string.
  // Splits the strings into an array of words.
  words(strings) {
    const toArr = strings.split(" ");
    return toArr;
  },
  //    pad(string, lenght) {}
  //  A slightly simplified version of the original .pad() lodash method
  //  With only whitespaces
  pad(string, length) {
    if (length <= string.length) {
      return string;
    }
    if (typeof length === "number" && length > string.length) {
      const pads = length - string.length; // 8 - 4 = 4
      const padsDiv2 = pads / 2; // 4 / 2 = 2
      if (pads % 2 === 0) {
        string = string.padStart(string.length + padsDiv2, " ");
        string = string.padEnd(length, " ");
      } else if (pads % 2 != 0) {
        const padStart = Math.floor(padsDiv2);
        const padEnd = Math.floor(padsDiv2 + 1);
        string = string.padStart(string.length + padStart, " ");
        string = string.padEnd(string.length + padEnd, " ");
      }
      return string;
    }
  },
  //     has(object, key)
  //  The method takes two argument, an object and a key
  //  It checks to see if the provided object contains a value
  //    at the specified key
  //  It will return true if the object contains a value at the key, and
  //    false if not.
  //  Only check for unnested values
  has(obj, key) {
    check = obj[key] != undefined;
    return check;
  },
  //    invert(object)
  //  The method takes an object as an argument
  //  And iterates through objects properties and swaps the key value pairs
  invert(obj) {
      const entries = Object.entries(obj);
      let tmp;
      const swappedEntries = (entries) => {
        for (let i = 0; i <= entries.length - 1; i++) {
          tmp = entries[i][0];
          entries[i][0] = entries[i][1];
          entries[i][1] = tmp;
        }
        return entries;
      };
      const swappedObject = Object.fromEntries(swappedEntries(entries));
      return swappedObject;
  },
  //    drop(array, number)
  //  The method takes 2 arguments, an array and a number
  //  The number argument represent the numbers to drop from the begining
  //      of the array
  //  As a result, drop() return an array which contains the numbers from
  //      the original array, excluding the specified number of elements
  //      from the begining of the array
  //  If the number argument is not specified, it should to drop one element
  drop(arr, num) {
    if (num === undefined) {
      return arr.slice(1);
    } else {
      return arr.slice(num);
    }
  },
  //  dropWhile(array, predicateFunction(curentElem, curentElemIndex, arr))
  //  the predicate function takes three arguments:
  //    - the current element
  //    - the current element index
  //    - the hole array
  //  the method creates a new copy of the supplied array, dropping elements
  //    from the beginning of the array, until an element causes the predicate
  //    function to return falsy
  dropWhile(array, predicate) {
    // to do
  },
};


// Do not write or modify code below this line.
module.exports = _;
