//Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.
//LT

var firstUniqChar = function (s) {
    const map = {}
    for (let i = 0; i < s.length; i++) {
        if (!map[s[i]]) {
            map[s[i]] = 0
        }
        map[s[i]]++
    }

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === 1) {
            return i;
        }
    }
    return -1;
};

console.log(firstUniqChar('leetcode'))