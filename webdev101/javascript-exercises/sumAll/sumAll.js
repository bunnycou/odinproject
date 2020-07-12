const sumAll = function(x, y) {
    if (typeof(x) != "number" || typeof(y) != "number" || x < 0 || y < 0) {
        return "ERROR";
    }

    var sum = 0;

    if (x > y) {
        for (var i = y; i <= x; i++) {
            sum += i;
        }
    } else {
        for (var i = x; i <= y; i++) {
            sum += i;
        }
    }

    return sum;
}

module.exports = sumAll
