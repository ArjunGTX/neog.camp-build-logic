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