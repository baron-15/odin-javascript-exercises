const removeFromArray = function(arr, ...remove) {
    let removeLength = remove.length;

    for(let i=0; i<arr.length; i++){ 
        for (let j=0; j<removeLength; j++) {
        if ( arr[i] === remove[j]) {
            arr.splice(i, 1); 
            i--;
        }
    }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
