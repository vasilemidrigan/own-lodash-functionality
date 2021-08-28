const _ = {
    clamp(number, lowerBound, upperBound) {
        if(number < lowerBound) {
            return lowerBound;
        } else if (number >= lowerBound && number <= upperBound) {
            return number;
        } else {
            return upperBound;
        }
    },
    inRange(nr, startValue, endValue) {
        if(endValue === undefined) {
            endValue = startValue;
            startValue = 0;
        } 
        const startValueKeep = startValue;
        if(startValue > endValue) {
           startValue = endValue;
           endValue = startValueKeep;
        }
        if(nr < startValue) {
            return false;
        } else if(nr >= endValue) {
            return false;
        } else if (nr >= startValue && nr < endValue) {
            return true;
        }
    }
};

// Do not write or modify code below this line.
module.exports = _;