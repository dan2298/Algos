/*Write a function that takes in two non-empty arrays of integers. The function should find the pair of numbers (one from the
first array, one from the second array) whose absolute difference is closest to zero. The function should return an array 
containing these two numbers, with the number from the first array in the first position. */
//AE

// function smallestDifference(arrayOne, arrayTwo) {
//     // Write your code here.
//     let closest = 10000000000
//     let result = []
//     for (let i = 0; i < arrayOne.length; i++) {
//         for (let j = 0; j < arrayTwo.length; j++) {
//             const difference = Math.abs(arrayOne[i] - arrayTwo[j])
//             if (difference < closest) {
//                 closest = difference
//                 result[0] = arrayOne[i]
//                 result[1] = arrayTwo[j]
//             }
//         }
//     }
//     return result;
// }

function smallestDifference(arrayOne, arrayTwo) {
    arrayOne.sort((a, b) => a - b)
    arrayTwo.sort((a, b) => a - b)
    let closest = [arrayOne[0], arrayTwo[0]]
    let p1 = 0
    let p2 = 0
    while (p1 <= arrayOne.length - 1 && p2 <= arrayTwo.length - 1) {
        if (arrayOne[p1] === arrayTwo[p2]) {
            return [arrayOne[p1], arrayTwo[p2]]
        }

        if (arrayOne[p1] < arrayTwo[p2]) {
            p1++
        } else {
            p2++
        }

        if (Math.abs(closest[0] - closest[1]) > Math.abs(arrayOne[p1] - arrayTwo[p2])) {
            closest[0] = arrayOne[p1]
            closest[1] = arrayTwo[p2]
        }
    }
    return closest
}

console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]))