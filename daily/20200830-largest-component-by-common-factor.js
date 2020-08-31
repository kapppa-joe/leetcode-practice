/**
 * @param {number[]} A
 * @return {number}
 */
var largestComponentSize = function(A) {
    let maxA = A.reduce((max, i) => max >= i ? max : i);
    let primes = primeSieve(maxA);

    const primeFactors = (n) => {
        if (primes.includes(n)) return [n];

        let result = [];
        for (let i of primes) {
            if (i > n) break;
            if (n % i === 0) {
                result.push(i);
                while (n % i === 0) {
                    n = n / i;
                }
            }
        }
        return result;
    }

    let uf = new UnionFind(maxA);
    let primeToIndex = {};

    for (let i = 0; i < A.length; i++) {
        let pf = primeFactors(A[i]);
        for (let p of pf) {
            if (p in primeToIndex) {
                uf.union(i, primeToIndex[p]);
            }
            primeToIndex[p] = i;
        }
    }

    return uf.size.reduce((max, i) => max >= i ? max : i);
};

class UnionFind {
    constructor(n) {
        this.uf = Array(n).fill().map((_, i) => i);
        this.size = Array(n).fill(1);
    }

    find(x) {
        while (x !== this.uf[x]) {
            this.uf[x] = this.uf[this.uf[x]];
            x = this.uf[x];
        }
        return this.uf[x];
    }

    union(x, y) {
        let rootX = this.find(x);
        let rootY = this.find(y);

        if (rootX === rootY) return;
        this.uf[rootX] = rootY;
        this.size[rootY] += this.size[rootX]
        this.size[rootX] = 0;
    }
}

const primeSieve = (n) => {
    let sieve = Array(n + 1).fill(true);

    sieve[0] = false;
    sieve[1] = false;

    for (let i = 2; i * i <= n; i++) {
        if (sieve[i]) {
            for (let j = i * i; j <= n; j += i) {
                sieve[j] = false;
            }
        }
    }

    return sieve.map((x, i) => x ? i : x).filter(i => i);
}