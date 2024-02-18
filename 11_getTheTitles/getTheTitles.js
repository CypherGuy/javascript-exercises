const getTheTitles = function(bookDict) {
    titles = []
    for(let i = 0; i < bookDict.length; i++){
        titles.push(bookDict[i]["title"])
    }
    return titles
};

// Do not edit below this line
module.exports = getTheTitles;
