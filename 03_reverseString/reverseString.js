let output='';
const reverseString = function(str) {
    output = '';
    strLength = str.length;
    for (let i=0; i < strLength; i++) {
    output += str[strLength-i-1];
}
return output;
};

// Do not edit below this line
module.exports = reverseString;
