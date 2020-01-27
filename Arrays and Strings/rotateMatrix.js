/*Given an image represented by an NxN matrix, where each pixel in the image is represented by an integer, write a method to rotate 
the image by 90 degrees. Can you do this in place? */
//CTCI

function rotateMaxtrix(matrix) {
    if (matrix.length !== matrix[0].length) return false
    for (let i = 0; i < matrix.length / 2; i++) {
        let first = i
        let last = matrix.length - 1 - i
        for (let j = first; j < last; j++) {
            let pointer = j - first
            //temp variable
            let top = matrix[first][j]
            //left to top
            matrix[first][j] = matrix[last - pointer][first]
            //bottom to left
            matrix[last - pointer][first] = matrix[last][last - pointer]
            //right to bottom
            matrix[last][last - pointer] = matrix[pointer][last]
            //top to right
            matrix[pointer][last] = top
        }
    }
    return matrix
}

console.log(rotateMaxtrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]))
//time: O(n^2)
//space:O(1)