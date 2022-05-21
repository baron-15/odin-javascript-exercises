const palindromes = function (inputString) {
    inputString = inputString.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
    console.log(inputString);
    const length = inputString.length;
for (let i=0; i< (length/2+1); i++) {
    if (inputString[i] != inputString[length-i-1]) {
        return false;
    }
}
return true;
};

// Do not edit below this line
module.exports = palindromes;
