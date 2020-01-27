/*Write a function that takes in a string and that returns its longest substring without duplicate characters. 
Assume that there will only be one longest substring without duplication.*/
//AE

function longestSubstringWithoutDuplication(string) {
    let longest = [0, 1]
    let map = {}
    let current = [0, 1];
    for (let i = 0; i < string.length; i++) {
        if (map[string[i]] !== undefined) {
            current[0] = Math.max(current[0], map[string[i]] + 1)
        }
        current[1] = i + 1
        if (longest[1] - longest[0] < current[1] - current[0]) {
            longest = [...current]
        }
        map[string[i]] = i;
    }
    return string.substring(longest[0], longest[1])
}

// "clem entisacap"
// "mentisac"

console.log(longestSubstringWithoutDuplication('abcdeabcdefc'))

//time: O(n)
//space: O(1)