/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
const dfs = (start, end, result) => {
    if (start === undefined || end === undefined) {
        return -1;
    }
    if (start === end) {
        return result;
    }
    start.visited = 1;
    for (let neighbor of start.neighbors.keys()) {
        if (neighbor.visited === 0) {
            let res = dfs(neighbor, end, result * start.neighbors.get(neighbor));
            if (res != -1)
                return res;
        }
    }
    return -1;
}
var calcEquation = function(equations, values, queries) {
    let graph = new Graph(equations, values);
    let answers = [];

    for (let i = 0; i < queries.length; i++) {
        let start = graph.nodeMap[queries[i][0]];
        let end = graph.nodeMap[queries[i][1]];
        answers[i] = dfs(start, end, 1);
        graph.reset();
    }
    return answers;
};


class Node {
    constructor(val) {
        this.val = val;
        this.visited = 0;
        this.neighbors = new Map();
    }
}

class Graph {
    constructor(equations, values) {
        this.nodeMap = {};
        for (let i = 0; i < equations.length; i++) {
            let first = equations[i][0];
            let second = equations[i][1];
            let value = values[i];
            if (!this.nodeMap[first]) {
                this.nodeMap[first] = new Node(first);
            }
            if (!this.nodeMap[second]) {
                this.nodeMap[second] = new Node(second);
            }
            this.nodeMap[first].neighbors.set(this.nodeMap[second], value);
            this.nodeMap[second].neighbors.set(this.nodeMap[first], 1 / value);
        }
    }

    reset() {
        for (let k of Object.keys(this.nodeMap)) {
            this.nodeMap[k].visited = 0;
        }
    }
}
