/*The Fibonacci sequence is defined as follows: the first number of the sequence is 0, the second number is 1, and the nth number is
the sum of the (n - 1)th and (n - 2)th numbers. Write a function that takes in an integer n and returns the nth Fibonacci number.*/

//AE
//recursive
function getNthFib(n, mem = { 1: 0, 2: 1 }) {
    if (mem[n] === undefined) {
        mem[n] = getNthFib(n - 1) + getNthFib(n - 2)
    }
    return mem[n]
}

//iterative
// function getNthFib(n) {
//     if (n === 1) return 0
//     if (n === 2) return 1
//     let a = 0; let b = 1; let c = 0;
//     for (let i = 2; i < n; i++) {
//         c = a + b
//         a = b
//         b = c
//     }
//     return c
// }

console.log(getNthFib(8))