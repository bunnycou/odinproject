const palindromes = function(string) {
    var news = oneword(string);
    var swen = reverse(news);

    if (news == swen) {
        return true;
    } else {
        return false;
    }

    function oneword(s) {
        var news = "";

        s = s.toLowerCase();

        Array.from(s).forEach(element => {
            if (element.search(/[a-z]/) > -1) {
                news += element;
            }
        })

        return news;
    }

    function reverse(s) {
        var news = "";

        Array.from(s).forEach(element => {
            news = element + news;
        })

        return news;
    }
}

module.exports = palindromes
