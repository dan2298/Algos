// Implement an algorithm to determine if a string has all unique characters
// CTCI

function isUnique(string) {
    const map = {};
    for (let i = 0; i < string.length; i++) {
        if (map[string[i]] !== undefined) {
            return false;
        }
    }
    return true;
}

console.log(isUnique('hello world!`'))
console.log(isUnique('Algos fun')) 
