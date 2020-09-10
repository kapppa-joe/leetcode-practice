/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let n = secret.length;
    let cowsCheck = {}
    let bulls = 0, cows = 0;

    for (let i = 0; i < n; i++) {
        if (secret[i] === guess[i]) {
            bulls++;
        } else {
            cowsCheck[secret[i]] = cowsCheck[secret[i]] ? cowsCheck[secret[i]] + 1 : 1;
            cowsCheck[guess[i]] = cowsCheck[guess[i]] ? cowsCheck[guess[i]] + n : n;
        }
    }
    for (let v of Object.values(cowsCheck)) {
        cows += Math.min((v / n | 0), (v % n));
    }

    return `${bulls}A${cows}B`;
};