const reverseString = function(string) {
    //change the string into an array then reverse the array?
    let reversedString = "";
    for(i=string.length -1; i>= 0; i--) {
        reversedString += string[i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
