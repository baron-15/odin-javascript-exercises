const caesar = function(text, shift) {
    let converted = "";
    let shiftConverted = shift % 26;
    for(let i=0; i<text.length; i++)
    converted += convertTool(text[i],shiftConverted);
    return converted;
}

function convertTool(letterConvert, sft) {
    let convertedLetter = "";
    let convertedLetterCode = 65;
    if (letterConvert.charCodeAt(0) >= 65 && letterConvert.charCodeAt(0) <=90) {
    convertedLetterCode = letterConvert.charCodeAt(0) + sft;
    if (convertedLetterCode < 65){
        convertedLetterCode += 26;
    }
    else if (convertedLetterCode > 90){
        convertedLetterCode -= 26;
    }
    convertedLetter = String.fromCharCode(convertedLetterCode);
    return convertedLetter;
    }
    else if (letterConvert.charCodeAt(0) >= 97 && letterConvert.charCodeAt(0) <=122) {
        convertedLetterCode = letterConvert.charCodeAt(0) + sft;
        if (convertedLetterCode < 97){
            convertedLetterCode += 26;
        }
        else if (convertedLetterCode > 122){
            convertedLetterCode -= 26;
        }
        convertedLetter = String.fromCharCode(convertedLetterCode);
        return convertedLetter;
    }
    else return letterConvert;
}

// Do not edit below this line
module.exports = caesar;
