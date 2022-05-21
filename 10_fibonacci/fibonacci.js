const fibonacci = function(fib) {
    if (fib < 0) {
    return 'OOPS';
}
    else if (fib==1 || fib ==2) {
    return 1;
}

let val = [];
val[0]=1;
val[1]=1;
for (let i=2; i<fib; i++) {
    val[i]=val[i-1]+val[i-2];
}
return val[fib-1];

};

// Do not edit below this line
module.exports = fibonacci;
