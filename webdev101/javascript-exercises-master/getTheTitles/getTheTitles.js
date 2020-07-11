const getTheTitles = function(x) {
    var a = [];
    x.forEach(tit);
    return a;

    function tit(x) {
        a.push(x.title);
    }
}

module.exports = getTheTitles;
