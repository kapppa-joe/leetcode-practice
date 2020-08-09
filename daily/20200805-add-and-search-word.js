/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
    this.data = {};
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    if (this.data[word.length]) {
        this.data[word.length].push(word);
    } else {
        this.data[word.length] = [word];
    }
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    if (!this.data[word.length]) return false;
    let results = this.data[word.length];
    for (let i = 0; i < word.length; i++) {
        if (word[i] === '.') continue;
        
        results = results.filter(storedWord => storedWord[i] === word[i]);
        if (results.length === 0) return false;
    }
    return results.length > 0;
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */