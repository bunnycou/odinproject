const caesar = function(x, y) {
    var a = Array.from(x);
    var s = "";
    var index = x;
    var ABC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R" ,"S", "T", "U", "V", "W", "X", "Y", "Z"];
    var abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r" ,"s", "t", "u", "v", "w", "x", "y", "z"];

    a.forEach(func)    

    function func(x) {
        if (ABC.includes(x)) {
            index = ABC.indexOf(x) + y;
            while (index > 25) {
                index -= 26;
            }
            while (index < 0) {
                index += 26;
            }
            s += ABC[index];
        } else if (abc.includes(x)) {
            index = abc.indexOf(x) + y;
            while (index > 25) {
                index -= 26;
            }
            while (index < 0) {
                index += 26;
            }
            s += abc[index];
        } else {
            s += x;
        }
    }

    return s;
}

module.exports = caesar
