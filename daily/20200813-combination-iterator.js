/**
 * @param {string} characters
 * @param {number} combinationLength
 */
var CombinationIterator = function(characters, combinationLength) {
    this._chars = characters.split('');
    this._maxBit = 2 ** (characters.length - 1);

    const countBits = (n) => {
       let i;
       for (i = 0; n > 0; i++) {n = n & (n-1);}
       return i
    }

    this._pool = Array(2 ** characters.length).fill()
                    .map((_, int) => int)
                    .reverse()
                    .filter(bitFlags => countBits(bitFlags) === combinationLength);
    this._curr = 0;
};

/**
 * @param {n} number (a number to store bitflags for combination)
 * @return {string}
 */
CombinationIterator.prototype._bitFlagsToString = function(flags) {
    return this._chars.filter((_, i) => (this._maxBit >> i | flags) === flags).join('');
};


/**
 * @return {string}
 */
CombinationIterator.prototype.next = function() {
    if (this._curr >= this._pool.length) return "";
    let result = this._bitFlagsToString(this._pool[this._curr]);
    this._curr++;
    return result;
};


/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function() {
    return this._curr < this._pool.length;
};

/** 
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

 let ci = new CombinationIterator("abcde", 3);