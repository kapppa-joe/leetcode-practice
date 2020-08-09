/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
    this._store = [];    
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    if(this._store[key % 1000]) {
        this._store[key % 1000][key / 1000 | 0] = key;
    } else {
        this._store[key % 1000] = [];
        this._store[key % 1000][key / 1000 | 0] = key;
    }

};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    if (this._store[key % 1000]) {delete this._store[key % 1000][key / 1000 | 0]}
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
   return this._store[key % 1000] ? this._store[key % 1000][key / 1000 | 0] === key : false;
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */