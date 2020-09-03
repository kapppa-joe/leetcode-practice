/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let n = s.length;
    if (n < 2) return false;

    let divisors = primeSieve(parseInt(n / 2));
    divisors.push(n);
    for (let i of divisors) {
        if (n % i === 0) {
            check: {
                let m = n / i;
                let sub = s.slice(0, m);
                for (let j = m; j <= n - m; j += m) {
                    if (s.slice(j, m + j) !== sub) break check;
                }
                return true;
            }
        }
    }
    return false;
};

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