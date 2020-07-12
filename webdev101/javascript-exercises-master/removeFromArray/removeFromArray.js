const removeFromArray = function(arr) {
    for (var i = 1; i < arguments.length; i++) {
        arr = arr.filter(x => {
            return x !== arguments[i];
        })
    }

    return arr;
}

module.exports = removeFromArray
