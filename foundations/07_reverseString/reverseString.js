const reverseString = function(word) {
    let splited = word.split("");
    let reversed = splited.reverse();
    let together = reversed.join("");
    return together;
};

// Do not edit below this line
module.exports = reverseString;
