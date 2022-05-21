const getTheTitles = function(book) {
    const theTitles = book.map(fullBook);
    function fullBook (fullNames) {
      return fullNames.title;
    }
    return theTitles;
}

// Do not edit below this line
module.exports = getTheTitles;
