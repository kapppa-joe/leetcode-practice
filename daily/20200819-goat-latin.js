/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
    const convertWord = (word, num = 0) => {
        if (!word) return "";
        
        if ("AEIOUaeiou".includes(word[0])) {
            return word + 'ma' + 'a'.repeat(num + 1);
        } else {
            return word.slice(1) + word[0] + 'ma' + 'a'.repeat(num + 1);
        }
    }    
    return S.split(' ').map((word, i) => convertWord(word, i)).join(' ');
};


