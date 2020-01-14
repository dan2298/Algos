/* Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, s1 and s2, write code 
to check if s2 is a rotation of s1 using only one call to isSubstring */
//CTCI

function stringRotation(str1, str2) {
    if (str1.length !== str2.length) return false;

    let str = ''
    for (let i = 0; i < str2.length; i++) {
        if (str2[i] === str1[0]) {
            if (str2.slice(i) + str === str1) {
                return true
            }
        }
        str += str2[i]
    }
    return false;
}

console.log(stringRotation('waterbottle', 'erbottlewat'))

//Time O(n)
//Space O(1)