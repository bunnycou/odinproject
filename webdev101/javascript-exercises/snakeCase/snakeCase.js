const snakeCase = function(x) {
    var ABC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R" ,"S", "T", "U", "V", "W", "X", "Y", "Z"];
    var abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r" ,"s", "t", "u", "v", "w", "x", "y", "z"];

    var a = x;

    var ans = "";
    if (x.search("\\.\\.") > -1) {
        a = x.split("..")
        a = a.join(" ").toLowerCase().trim();
    }
    if (x.search("-") > -1) {
        a = x.split("-")
        a = a.join(" ").toLowerCase().trim();
    }

    var sarr = a.split(" ");
    
    sarr.forEach(und)

    ans = ans.substring(0, ans.length-1);

    return ans;

    function und(x) {
        //for a split at space
        var s = Array.from(x)
        s.forEach(und2)
        ans += "_"

        function und2(x) {
            if (abc.includes(x)) {
                ans += x;
            } else if (ABC.includes(x)) {
                if (Array.from(ans)[Array.from(ans).length - 1] != "_" && Array.from(ans).length > 1) {
                    ans += `_${x.toLowerCase()}`;
                } else {
                    ans += x.toLowerCase();
                }
            }
        }
    }
    
}

module.exports = snakeCase
