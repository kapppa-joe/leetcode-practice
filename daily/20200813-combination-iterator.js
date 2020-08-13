/**
 * @param {string} characters
 * @param {number} combinationLength
 */
var CombinationIterator = function(characters, combinationLength) {
    let chars = characters.split('');
    let maxBit = 2 ** (characters.length - 1);

    const countBits = (n) => {
       let i;
       for (i = 0; n > 0; i++) {n = n & (n-1);}
       return i
    }

    const bitFlagsToString = (flags) => {
        return chars.filter((_, i) => (maxBit >> i | flags) === flags).join('');
    }
    
    this._pool = Array(2 ** characters.length).fill()
                    .map((_, int) => int)
                    .filter(bitFlags => countBits(bitFlags) === combinationLength)
                    .map(bitFlagsToString);

};

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function() {
    return this._pool.pop();
};


/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function() {
    return this._pool.length > 0;
};

/** 
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

 let ci = new CombinationIterator("abcde", 3);