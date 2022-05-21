const sumAll = function(first, last) {
    let sum=0;
    if (first !== parseInt(first, 10) || last !== parseInt(last, 10)) {
        return 'ERROR';
    }
    else if ( first < 0 || last < 0) {
        return 'ERROR';
    }
    if (first>last) {
        let temp=0;
        temp = first;
        first = last;
        last = temp;
    }

    for (let i=first; i<=last; i++) {
        sum += i;
    }

return sum;
};

// Do not edit below this line
module.exports = sumAll;
