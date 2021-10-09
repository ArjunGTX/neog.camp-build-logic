// Given a sentence, your functions should return the number of words in the sentence.

// function numberOfWords(sentence) {
//     let trimmedSentence = sentence.trim();
//     if(trimmedSentence === null || trimmedSentence === "") {
//         return 0;
//     } else {
//         let wordCount = 1;
//         for(let i=0; i<trimmedSentence.length; i++) {
//             if(trimmedSentence[i] === ' ') {
//                 wordCount++
//             }
//         }
//         return wordCount;
//     }
   
// }
// console.log(numberOfWords('hey there'));




// Given an array, your function should return the length of the array.

// function arrayLength(arr) {
//     let len = 0
//     for(let element of arr) {
//         len++;
//     }
//     return len;
// }
// console.log(arrayLength([1,2,3,4,5,5,6,7,7]));



// Given an array and an item, your function should return the index at which the item is present.

// function getIndexOf(arr,item) {
//     for(let i=0; i<arr.length; i++) {
//         if(arr[i] === item) {
//             return i;
//         }
//     }
// }
// console.log(getIndexOf([1,2,3,4,5],5));




// Given an array and two numbers, your function should replace all entries of first number in an array with the second number.

// function myReplaceAll(arr,newItem,oldItem) {
//     for(let i=0; i<arr.length; i++) {
//         if(arr[i] === oldItem) {
//             arr[i] = newItem;
//         }
//     }
//     return arr;
// }
// console.log(myReplaceAll([1,2,3,4,5],8,3));




// Given two arrays, your function should return single merged array.

// function getMergedArray(arrOne,arrTwo) {
//     let mergedArray = [];
//     for(let i=0; i<arrOne.length; i++) {
//         mergedArray.push(arrOne[i]);
//     }
//     for(let i=0; i<arrTwo.length; i++) {
//         mergedArray.push(arrTwo[i]);
//     }
//     return mergedArray;
// }
// console.log(getMergedArray([1,2,3],[4,5,6]));




// Given a string and an index, your function should return the character present at that index in the string.

// function getCharAt(str,index) {
//    return str[index];
// }
// console.log(getCharAt('hello',4));




// Given two dates, your function should return which one comes before the other.

// function minDate(dateStrOne,dateStrTwo) {
//     let dateOne = new Date(dateStrOne);
//     let dateTwo = new Date(dateStrTwo);
//     if(dateOne.getTime < dateTwo.getTime) {
//         return dateStrOne;
//     } else {
//         return dateStrTwo;
//     }
// }
// console.log(minDate('02/05/2021', '24/01/2021'));




// Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places.

// function encodeString(str,encodeValue) {
//     let encodedArray = [];
//     for(let i=0; i<str.length; i++) {
//         let encodedChar = String.fromCharCode(str.charCodeAt(i) + encodeValue);
//         encodedArray.push(encodedChar);
//     }
//     return encodedArray.join('');
// }
// console.log(encodeString('abcd',2));




// Given a sentence, return a sentence with first letter of all words as capital.

// function toSentenceCase(sentence) {
//     let trimmedSentence = sentence.trim();
//     let formattedSentenceArray = [trimmedSentence[0].toUpperCase()];
//     for(let i=1; i<trimmedSentence.length; i++) {
//         if(trimmedSentence[i-1] === " ") {
//             formattedSentenceArray.push(trimmedSentence[i].toUpperCase());
//         } else {
//             formattedSentenceArray.push(trimmedSentence[i]);
//         }
//     }
//     return formattedSentenceArray.join('');
// }
// console.log(toSentenceCase('hi how are you')
// );




// Given an array of numbers, your function should return an array in the ascending order.

// function sortArray(arr) {
//     for(let i=0; i<arr.length; i++) {
//         for(let j=0; j<arr.length-i-1; j++) {
//             if(arr[j] > arr[j+1]) {
//                 var temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr;
// }
// console.log(sortArray([5,4,3,2,1]));





// Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.

// function reverseCharactersOfWord(sentence) {
//     let trimmedSentence = sentence.trim();
//     let wordArray = trimmedSentence.split(' ');
//     let reversedArray = [];
//     for(let word of wordArray) {
//         let reversedWord = '';
//         for(let i = word.length-1; i>=0; i--) {
//             reversedWord += word[i];
//         }
//         reversedArray.push(reversedWord);
//     }
//     return reversedArray.join(' ');
// }
// console.log(reverseCharactersOfWord('hi there'));