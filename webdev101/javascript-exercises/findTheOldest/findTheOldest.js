let findTheOldest = function(x) {
    var olda = 0;
    var age = 0;
    var p = 0;
    var d = new Date();
    var year = d.getFullYear();
    for (var i = 0; i < x.length; i ++) {
        if (x[i].yearOfDeath) {
            age = x[i].yearOfDeath - x[i].yearOfBirth;
        } else {
            age = year - x[i].yearOfBirth;
        }
        if (age > olda) {
            olda = age;
            p = i;
        }
    }
    return x[p];
}

module.exports = findTheOldest
