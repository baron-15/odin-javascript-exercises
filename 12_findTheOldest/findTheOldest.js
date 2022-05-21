const findTheOldest = function(list) {
const sorted = list.sort(function(a, b) {
    if (!a.yearOfDeath) {a.yearOfDeath = 2022;}
    if (!b.yearOfDeath) {b.yearOfDeath = 2022;}
    const lastGuy = a.yearOfDeath - a.yearOfBirth;
    const nextGuy = b.yearOfDeath - b.yearOfBirth;
    return (lastGuy > nextGuy) ? -1 :1;
    });
    return sorted[0];
}

// Do not edit below this line
module.exports = findTheOldest;
