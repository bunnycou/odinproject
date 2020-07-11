const reverseString = function(string) {
    var s = "";
    var a = Array.from(string);
    a.forEach(reverse)

    return s;

    function reverse(char) {
        s = char + s;
    }
}

module.exports = reverseString
