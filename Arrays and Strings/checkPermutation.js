// Write a function to check whether two given strings are Permutation of each other or not. 
// CTCI

function checkPermutation(str1, str2) {
    if (str1.length !== str2.length) return false;
    const map = {}
    for (let i = 0; i < str1.length; i++) {
        if (!map[str1[i]]) {
            map[str1[i]] = 0
        }
        map[str1[i]]++
    }

    for (let i = 0; i < str2.length; i++) {
        if (!map[str2[i]]) {
            return false
        }
        map[str2[i]]--
    }

    let keys = Object.keys(map)
    for (let i = 0; i < keys.length; i++) {
        if (map[keys[i]] !== 0) {
            return false
        }
    }
    return true;
}

console.log(checkPermutation('iceman', 'cinema'))

//time: O(n + m)
//space: O(n + m)