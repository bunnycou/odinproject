const repeatString = function(one, num) {
    var two = "";
    if (num < 0) {
        return "ERROR";
    } else {
        for (var i = 0; i < num; i++) {
            two += one;
        }
        return two;
    }
}

module.exports = repeatString
