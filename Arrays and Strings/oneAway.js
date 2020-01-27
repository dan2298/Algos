/*There are three types of edits that can be performed on strings, insert a character, remove a character, or replace a character. 
Given two strings, write a function to check if they are one edit (or zero edits) away. */
//CTCI

function oneAway(str, word) {
    let diff = 0
    const wordMap = {}
    const map = {}
    //replacement based on length of strings
    if (str.length === word.length) {
        for (let i = 0; i < str.length; i++) {
            if (str[i] !== word[i]) {
                diff++;
            }
        }
        return diff > 1 ? false : true
    }

    //insertion/delete
    for (let i = 0; i < str.length; i++) {
        if (!map[str[i]]) {
            map[str[i]] = 0
        }
        map[str[i]]++
    }

    for (let i = 0; i < word.length; i++) {
        if (!wordMap[word[i]]) {
            wordMap[word[i]] = 0
        }
        wordMap[word[i]]++
    }

    for (let i of Object.keys(map)) {
        if (map[i] !== wordMap[i]) {
            diff++
        }
    }
    return diff > 1 ? false : true

}
console.log(oneAway('pale', 'pal'))

//time: O(n)
//space: O(1)