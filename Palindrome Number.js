/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    if (x !== 0 && x % 10 === 0) {
        return false;
    }
    let str = x.toString();
    let rev = str.split("").reverse().join("");
    return rev === str;
};
