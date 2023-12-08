function reverseWords(str) {
    var words = str.split(" ");
    var reversedWords = words.map(function (word) {
        return word.split("").reverse().join("");
    });
    var result = reversedWords.join(" ");
    return result;
}
var inputString = "Geeks for Geeks";
var outputString = reverseWords(inputString);
console.log(outputString);
