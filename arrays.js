// Find sum of an array and display the output . Example [10,4,5,2,5,6,9].
// Find average of an array and display the output.

// function getSum(arr) {
//     let sum = 0;
//     let avg;
    
//     for(let num of arr) {
//         sum += num;
//     }
//     return sum;
// }
// console.log(getSum([1,2,3,4,5]));








// Find maximum and minimum of an array.

// function getMinMax(arr) {
//     let max = min = arr[0];
//     for(let num of arr) {
//         if(num > max) {
//             max = num;
//         }
//         if(num < min) {
//             min = num;
//         }
//     }
//     return [min,max];
// }
// console.log(getMinMax([1,2,3,4,5]));







// Find Median and Mode of an array.
// Median : (N+1/2)th term.
// Mode : Most repeating term

// function medianMode(arr) {
//     const countObj = {};
//     let median = arr[((arr.length + 1) / 2) - 1];
//     for(let i=0; i<arr.length; i++) {
//         if(countObj.hasOwnProperty(arr[i])) {
//             countObj[arr[i]] += 1; 
//         } else {
//             countObj[arr[i]] = 1;
//         }
//     }
//     let maxCount = 0;
//     let mode = arr[0];
//     for(let num in countObj) {
//         if(countObj[num] > maxCount ) {
//             maxCount = countObj[num];
//             mode = Number(num);
//         }
//     }
//     return [median,mode]
// }
// console.log(medianMode([1,2,3,4,5,5,6]));
