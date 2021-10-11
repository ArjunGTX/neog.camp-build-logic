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
// console.log(getMaximum(1,2,3));








// Write program to take a month as an input from the user and find out whether the month has 31 days or not.

// function checkNoOfDays(month) {
//     const monthsWith31Days = ['january','march','may','july','august','october','december'];
//     for(let i=0; i<monthsWith31Days.length; i++) {
//         if(monthsWith31Days[i] === month.toLowerCase()) {
//             return true;
//         } else {
//             return false;
//         }
//     }
// }
// console.log(checkNoOfDays('January'));








// Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".

// function fizzBuzz(limit) {
//     let resultArray = [];
//     for(let i=1; i<=limit; i++) {
//         if((i%3 === 0) && (i%5 === 0)) {
//             resultArray.push('FizzBuzz');
//         } else if(i%5 === 0) {
//             resultArray.push('Buzz');
//         } else if(i%3 === 0) {
//             resultArray.push('Fizz')
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







// Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....

// function getFibonacciSeries(limit) {
//     let n1 = 0;
//     let n2 = 1;
//     let n3;
//     let fibonacciSeries = [n1,n2];
//     for(let i=2; i<limit; i++) {
//         n3 = n1 + n2;
//         fibonacciSeries.push(n3);
//         n1 = n2;
//         n2 = n3;
//     }
//     return fibonacciSeries;
// }
// console.log(getFibonacciSeries(10));






// Write a program to take an input from a user and find its Factorial.

// function getFactorial(number) {
//     let factorial = 1;
//     if(number > 0){
//         for(let i=1; i<=number; i++) {
//             factorial *= i;
//         }
//         return factorial;
//     } else if(number === 0) {
//         return 1;
//     } else {
//         return 'Invalid Input';
//     }
// }
// console.log(getFactorial(5));







// Write a Program to take a number input from user and find if the number is Prime or not.

// function checkPrime(number) {
//     if(number > 0 && number <=3) {
//         return true;
//     } else {
//         for(let i=2; i<= number/2; i++) {
//             if(number%i === 0) {
//                 return false;
//             } else {
//                 return true;
//             }
//         }
//     } 
// }
// console.log(checkPrime(7));







// Write a program to take a day as an input and determine whether it is a weekday or weekend

// function checkDay(day) {
//     const weekDays = ['monday','tuesday','wednesday','thursday','friday'];
//     const weekend = ['saturday','sunday'];
//     if(weekDays.includes(day.toLowerCase())) {
//         return `${day} is a weekday`;
//     } else if(weekend.includes(day.toLowerCase())) {
//         return `${day} is a weekend`;
//     } else {
//         return 'invalid day'
//     }
// }
// console.log(checkDay('sunday'));