function findMode(str) {
    words = str.trim().split(" ");  //Get tokens or words
    dict = new Object();            //create a new dictionary
    words.forEach(function(word) {
        if (dict[word]!=null) {
            dict[word]++;           //increment counter for word
            console.log("Increasing the count for " + word + " to:" + dict[word]);
        }
        else {
            dict[word]=1;           //init entry for word
            console.log(word + " found for the first time!");
        }
    });
    var max = -1;
    var maxKey = null;
    for (var key in dict) {
        if (max < dict[key]) {
            max = dict[key]
            maxKey = key;
        }
    }
    var maxKeyObject = Object();
    maxKeyObject.mode = maxKey;
    maxKeyObject.occurences = max;
    return maxKeyObject;
}