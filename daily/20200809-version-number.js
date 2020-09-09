/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let v1 = version1.split('.').map(x => parseInt(x));
    let v2 = version2.split('.').map(x => parseInt(x));

    while (v1.length !== v2.length) {
        if (v1.length < v2.length) {
            v1.push(0);
        } else {
            v2.push(0);
        }
    }

    for (let i = 0; i < v1.length; i++) {
        if (v1[i] > v2[i]) {
            return 1
        } else if (v1[i] < v2[i]) {
            return -1
        }
    }
    return 0;
};