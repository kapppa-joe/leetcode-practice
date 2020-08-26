/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    
    const fn = (n) => {
        if (n % 15 === 0) {
            return "FizzBuzz";
        } else if (n % 5 === 0) {
            return "Buzz";
        } else if (n % 3 === 0) {
            return "Fizz";
        }
        return '' + n;
    }

    return Array(n).fill().map((_, i) => fn(i + 1));
};