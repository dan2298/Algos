/*Implement a method to perform basic string compression using the counts of repeated characters. For examplle, the string aabcccccaaa 
would become a2b1c5a3. If the "compressed" string would not become smaller than the original string, your method should return the 
original string. You can assume the string has only uppercase and lowecase letters (a-z).*/
//CTCI

function stringCompression(str) {
    let newStr = str[0];
    let currentCounter = 1;
    for (let i = 1; i < str.length; i++) {
        if (str[i] === str[i - 1]) {
            currentCounter++;
        } else {
            newStr += currentCounter
            newStr += str[i]
            currentCounter = 1
        }
    }
    newStr += currentCounter
    return str.length < newStr.length ? str.length : newStr
}

console.log(stringCompression('aabcccccaaa'))

//O(n)
//O(1)