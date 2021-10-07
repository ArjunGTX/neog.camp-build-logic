// Write a program to find the maximum out of three given numbers.

// function getMaximum(...numbers) {
//     let max = 0;
//     for(let i=0; i<numbers.length; i++) {
//         if(numbers[i] > max) {
//             max = numbers[i];
//         }
//     }
//     return max;
// }
// console.log(getMaximum(1,2,3,4,5));




// Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".

// function fizzBuzz(limit) {
//     let resultArray = [];
//     for(let i=1; i<=limit; i++) {
//         if(i%3 === 0) {
//             resultArray.push('Fizz');
//         } else if(i%5 === 0) {
//             resultArray.push('Buzz');
//         } else {
//             resultArray.push(i);
//         }
//     }
//     return resultArray;
// }
// console.log(fizzBuzz(100));




// Print the following star pattern

// for(let i=1; i<=5; i++) {
//     for(let j=1; j<=i; j++) {
//         //requires readline to work
//         process.stdout.write(' * ');
//     }
//     console.log('');
// }




// Write a program to take a number input from user and print multiplication table 12 times for that number.

// function printMultiplicationTable(number,limit) {
//     for(let i=1; i<=limit; i++) {
//         console.log(`${number} * ${i} = ${number * i}`);
//     }
// }
// printMultiplicationTable(10,12);