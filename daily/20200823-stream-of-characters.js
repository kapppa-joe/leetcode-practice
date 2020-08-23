class Node {
    constructor() {
        this.keys = new Map();
        this.end = false;
    }
}

/**
 * @param {string[]} words
 */
class StreamChecker {
    constructor(words) {
        this.root = new Node();
        for (let word of words) {
            this.add(word);
        }
        this.ptrs = new Set();
    }

    add(word, node = this.root) {
        if (word.length === 0) {
            node.end = true;
            return;
        }
        if (!node.keys.has(word[0])) {
            node.keys.set(word[0], new Node());
        }
        return this.add(word.slice(1), node.keys.get(word[0]));
    }

    /** 
     * @param {letteracter} letter
     * @return {boolean}
     */
    query(letter) {
        let ptrs = [...this.ptrs];
        for (let ptr of ptrs) {
            this.ptrs.delete(ptr);
            if (ptr.keys.has(letter)) {
                this.ptrs.add(ptr.keys.get(letter));
            }
        }
        if (this.root.keys.has(letter)) {
            this.ptrs.add(this.root.keys.get(letter));
        }
        for (let ptr of this.ptrs) {
            if (ptr.end) {
                return true
            }
        }
        return false;
    }
}
/** 
 * Your StreamChecker object will be instantiated and called as such:
 * var obj = new StreamChecker(words)
 * var param_1 = obj.query(letter)
 */

let sc = new StreamChecker(["cd","f","kl","cde"]);