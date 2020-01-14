/*Write a function that takes in an array of strings and returns a list of groups of anagrams. Anagrams are strings made up of
 exactly the same letters, where order doesn't matter. For example, "cinema" and "iceman" are anagrams; similarly, "foo" and "ofo"
 are anagrams. Note that the groups of anagrams don't need to be ordered in any particular way.*/
// AE

// function groupAnagrams(words) {
//     const map = {}
//     const result = []
//     let newWords = words.map(word => word.split('').sort().join(''))
//     for (let i = 0; i < words.length; i++) {
//         if (!map[newWords[i]]) {
//             map[newWords[i]] = []
//         }
//         map[newWords[i]].push(words[i])
//     }

//     //can use Object.values instead
//     for (let i in map) {
//         result.push(map[i])
//     }
//     return result
// }

function groupAnagrams(array) {
    if (array.length < 2) return array;
    const map = {}
    const newArr = array.map(word => word.split('').sort().join(''))
    for (let i = 0; i < newArr.length; i++) {
        if (!map[newArr[i]]) map[newArr[i]] = []
        map[newArr[i]].push(array[i])
    }
    return [...Object.values(map)]
}

console.log(groupAnagrams(['zor', 'asd', 'dsa', 'wdq', 'das', 'roz']))
//time: O(wnlog n)
//space: O(n)