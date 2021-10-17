// Program that reads string and count number of characters present in the string

// function getStrLength(str) {
//     let len = 0;
//     for(let char of str) {
//         len++
//     }
//     return len;
// }
// console.log(getStrLength('hello'));







// Write a program to delete all vowels from a string. Assume string is not more than 80 characters long

// function removeVowels(str) {
//     let removedStr = str.replaceAll(/[aeiou]/ig,'')
//     return removedStr;
// }
// console.log(removeVowels('hai hEllo'));






// A program that reads three strings and prints the longest and smallest one

// function getLongestStr(...strings) {
//     let maxStr = strings[0];
//     for(let str of strings) {
//         if(str.length > maxStr.length) {
//             maxStr = str;
//         }
//     }
//     return maxStr;
// } 
// function getSmallestStr(...strings) {
//     let minStr = strings[0];
//     for(let str of strings) {
//         if(str.length < minStr.length) {
//             minStr = str;
//         }
//     }
//     return minStr;
// } 
// console.log(getLongestStr('hi','hello','how are you'));
// console.log(getSmallestStr('hi','hello','how are you'));








// Write a program which receives a string str that calculates the length of a string and return true if the length is greater than 7 without using strlen()

// function checkStrLen(str) {
//     let len = 0;
//     for(let char of str) {
//         len++;
//     }
//     if(len > 7) {
//         return true;
//     }
// }
// console.log(checkStrLen('hello john'));







// Write a program that takes two strings and copies smaller string into bigger string

// function copyString(strOne,strTwo) {
//     if(strOne.length >= strTwo.length) {
//         return strOne + strTwo;
//     } else {
//         return strTwo + strOne;
//     }
// }
// console.log(copyString('hello','Hai'));







// Given a string, determine if it is a palindrome, considering only alphanumeric characters

// function checkPalindromeString(str) {
//     let flag = 1;
//     for(let i=0; i<str.length; i++) {
//         if(str[i] !== str[str.length-i-1]) {
//             flag = 0;
//             break;
//         }
//     }
//     if(flag) {
//         return `${str} is a palindrome`;
//     } else {
//         return `${str} is not a palindrome`
//     }
// }
// console.log(checkPalindromeString('abcba'));







// Write a program that masks all but last four characters of the string "5565534276455423" to '#'

// function blurDigits(str) {
//     let newStr = '';
//     for(var i=0; i<str.length-4; i++) {
//         newStr += '#';
//     }
//     for(; i<str.length; i++) {
//         newStr += str[i];
//     }
//     return newStr;
// }
// console.log(blurDigits('5565534276455423'));







// Given an input string S and two characters c1 and c2, you need to replace every occurrence of character c1 with character c2 in the given string

// function myReplaceAll(str,c1,c2) {
//     let replacedStr = '';
//     for(let char of str) {
//         if(char === c1) {
//             replacedStr += c2;
//         } else {
//             replacedStr += char;
//         }
//     }
//     return replacedStr;
// }
// console.log(myReplaceAll('hello','h','e'));








// Given an input string S that contains multiple words, you need to remove all the spaces present in the input string. There can be multiple spaces present after any word

// function removeSpace(str) {
//     let RemovedStr = '';
//     for(let char of str) {
//         if(char === ' ') {
//             continue;
//         } else {
//             RemovedStr += char;
//         }
//     }
//     return RemovedStr;
// }
// console.log(removeSpace('Hello,   how are      you?'));








