/**
 * @param {number[][]} rects
 */
var Solution = function(rects) {
    const countPoints = (rect) => {
        return (rect[2] - rect[0] + 1) * (rect[3] - rect[1] + 1);
    }

    this._pool = new Map();
    let totalPoints = 0;

    for (let i in rects) {
        totalPoints += countPoints(rects[i]);
        this._pool.set(totalPoints, rects[i]);
    }

    this._maxRandValue = totalPoints;
    this._keys = Array.from(this._pool.keys());
};

/**
 * @return {number[]}
 */
Solution.prototype.pick = function() {
    const getPoint = (rect, value) => {
        let x = rect[0] + parseInt(value % (rect[2] - rect[0] + 1));
        let y = rect[1] + parseInt(value / (rect[2] - rect[0] + 1));
        return [x, y]
    }
    
    let rand = parseInt(Math.random() * this._maxRandValue);
    for (let i = 0; i < this._keys.length; i++) {
        if (this._keys[i] > rand) {
            rand -=  (i === 0 ? 0 : this._keys[i - 1]);
            return getPoint(this._pool.get(this._keys[i]), rand);
        }
    }
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(rects)
 * var param_1 = obj.pick()
 */

 let rects = [[0,0,0,5], [20,20,20,22], [100, 30, 102, 30]];
 let s = new Solution(rects);
