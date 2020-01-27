/* Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same
forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
You can ignore casing and non-letter characters.*/
//CTCI

function isPalindromePermutation(str) {
    const map = {}
    let numOfOdds = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/[a-zA-Z0-9]/g)) {
            if (!map[str[i]]) {
                map[str[i]] = 0
            }
            map[str[i]]++
        }
    }

    for (let i of Object.values(map)) {
        if (i % 2 !== 0) {
            numOfOdds++;
        }
    }
    return numOfOdds > 1 ? false : true
}

console.log(isPalindromePermutation('taco cat'))

//time: O(n)
//space: O(n)