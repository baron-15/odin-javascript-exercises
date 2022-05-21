let printed ='';
const repeatString = function(str, num) {
printed ='';
if (num<0) {
    return 'ERROR';
}
else for (let i = 1; i<=num; i++) {
    printed += str;
}
return printed;
};

// Do not edit below this line
module.exports = repeatString;
