const fibonacci = function(x) {
    var num = [1, 1];
    for (var i = 2; i < x; i++) {
        num.push(num[num.length - 1] + num[num.length - 2]);
    }
    if (x < 0) {
        return "OOPS";
    } else {
        return num[num.length - 1];
    }
}

module.exports = fibonacci
