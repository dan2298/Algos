/*Write a function that, given a string, returns its longest palindromic substring. A palindrome is defined as a string 
that is written the same forward and backward. Assume that there will only be one longest palindromic substring.*/
// AE

// function longestPalindromicSubstring(string) {
//     // Write your code here.
//     if (string.length === 1) { return string }
//     const map = {}
//     for (let i = 0; i < string.length; i++) {
//         let str = checkPalimdrone(i, string)
//         if (str !== undefined) {
//             map[str.length] = str
//         }
//     }
//     return map[(Math.max(...Object.keys(map)))]
// }

// function checkPalimdrone(idx, string) {
//     let pointer1 = idx + 1
//     let pointer = idx - 1;
//     let isPalindrome = false;
//     if (string[idx] === string[pointer1]) {
//         pointer = idx
//     }
//     for (let i = 0; i < Math.floor(string.length / 2); i++) {
//         if (string[pointer] === string[pointer1]) {
//             isPalindrome = true
//             pointer1++;
//             pointer--;
//         } else {
//             break;
//         }
//     }
//     if (isPalindrome) {
//         return string.substring(pointer + 1, pointer1)
//     }
// }

//===================================

function longestPalindromicSubstring(string) {
    let longestPalindrome = [0, 1]
    for (let i = 0; i < string.length; i++) {
        let evn = checkPalimdrone(string, i, i, i + 1)
        let odd = checkPalimdrone(string, i, i - 1, i + 1)
        let longest;
        if (evn[1] - evn[0] > odd[1] - odd[0]) {
            longest = evn
        } else {
            longest = odd
        }
        if (longest[1] - longest[0] > longestPalindrome[1] - longestPalindrome[0]) {
            longestPalindrome = longest
        }
    }
    return string.substring([longestPalindrome[0]], longestPalindrome[1])
}

function checkPalimdrone(string, idx, left, right) {
    while (left > 0 || right < string.length) {
        if (string[left] !== string[right]) {
            break;
        }
        left--
        right++
    }
    return [left + 1, right]
}

console.log(longestPalindromicSubstring('abaxyzzyxf'))
//time: O(n^2)
//space: O(1)