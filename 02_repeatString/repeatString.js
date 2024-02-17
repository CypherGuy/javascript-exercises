const repeatString = function(toRepeat, times) {
    if (times < 0) {
        return 'ERROR';
    } else if (times === 0) {
        return '';
    } else {
    return toRepeat.repeat(times);
    }
};

// Do not edit below this line
module.exports = repeatString;
