const leapYears = function(input) {
    let yr = parseInt(input);
    if (yr % 4 !== 0) {
        return false;
    }
    else if (yr % 100 === 0)
    {
        if (yr % 400 === 0)
        {return true;}
        else return false;
    }
    else return true;
};

// Do not edit below this line
module.exports = leapYears;
