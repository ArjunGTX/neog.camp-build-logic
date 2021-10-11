// Write a program to calculate sum of N natural digits, as input by the users?

// function calcSum(limit) {
//     return (limit* (limit + 1)) / 2;
// }
// console.log(calcSum(10));





// Write a Program to Print N Odd Number in Descending Order.

// function printOddNumbers(limit) {
//     for(let i=limit; i>0; i--) {
//         if(i%2 !== 0) {
//             console.log(i);
//         }
//     }
// }
// printOddNumbers(10); 




// Write a JavaScript program to compute the sum of all digits that occur in a given string.

// function sumOfDigits(number) {
//     let sum = 0;
//     while(number > 0) {
//         sum += Math.floor(number % 10);
//         number /= 10;
//     }
//     return sum;
// }
// console.log(sumOfDigits('123'));





// Write a JavaScript program that reverses a number.

// function reverseNumber(number) {
//     let reverse = 0;
//     while(number > 0) {
//         reverse = reverse * 10 + (number % 10)
//         number = Math.floor(number/10);
//     }
//     return reverse;
// }
// console.log(reverseNumber(1234));




// Write a Program to cyclically Rotate a Number by X positions in the left direction, as provided by the user.

// function rotateDigits(number,degree) {
//     let i = 0;
//     let strNumber = number.toString(10);
//     let num = '';
//     let middleNum = '';
//     let endNum = '';
//     const rotatedArray = [];
//     for(; i< degree; i++) {
//         num += strNumber[i];
//     }
//     for(;i< strNumber.length-degree; i++) {
//         middleNum += strNumber[i];
//     }
//     for(; i< strNumber.length; i++) {
//         endNum += strNumber[i];
//     }
//     rotatedArray.push(endNum);
//     rotatedArray.push(middleNum);
//     rotatedArray.push(num);

//     return Number(rotatedArray.join(''));
// }
// console.log(rotateDigits(1234,2));




// Write a Program to convert Decimal to Binary.

// function getBinary(number) {
//     let remainderArray = [];
//     let remainder = 0;
//     while(number > 0) {
//         remainder = number%2;
//         number = Math.floor(number/2);
//         remainderArray.unshift(remainder)
//     }
//     return Number(remainderArray.join(''));
// }
// console.log(getBinary(5));