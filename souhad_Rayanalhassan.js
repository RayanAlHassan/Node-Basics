//ex 1
// const inputString = "aebcdbdaze";
// function removeDuplicate(inputString) {
//   let result = "";

//   for (let i = 0; i < inputString.length; i++) {
//     let currentChar = inputString[i];
//     let isDuplicate = false;

//     for (let j = 0; j < result.length; j++) {
//       if (currentChar === result[j]) {
//         isDuplicate = true;
//         break;
//       }
//     }

//     if (!isDuplicate) {
//       result += currentChar;
//     }
//   }

//   return result;
// }
// const result = removeDuplicate(inputString);
// console.log(result);

// ex2
// var Array1 = [0, 1, 2, 3, 4, 5];
// var Array2 = [4, 5, 6, 7, 8, 9, 0];

// function CommonItemsArray(Array1, Array2) {
//   var commonArray = []; // Create an array for common items in another two arrays.
//   for (var i = 0; i < Array1.length; i++) {
//     for (var j = 0; j < Array2.length; j++) {
//       if (Array1[i] == Array2[j]) {
//         // If the item is common in both arrays
//         commonArray.push(Array1[i]); // Push common items to the array
//       }
//     }
//   }
//   return commonArray; // Return the common items
// }
// const commonArray = CommonItemsArray(Array1, Array2);
// console.log(commonArray);

// ex  2.2
// var arr1 = [0, 1, 2, 3, 4, 5];
// var arr2 = [4, 5, 6, 7, 8, 9, 0];

// var arr3 = [];
// const length1 = arr1.length;
// const length2 = arr2.length;
// let k = 0;
// const totalLength = length1 + length2;
// for (let i = 0; i <= totalLength; i++) {
//   arr3.push(arr1[i]);
//   if (i > length1) {
//     arr3.push(arr2[k]);
//     k = k + 1;
//   }
// }
// let uniqueArr = [];
// for (let i of arr3) {
//   if (uniqueArr.indexOf(i) === -1) {
//     uniqueArr.push(i);
//   }
// }
// console.log(uniqueArr);

// ex 3

// var arr = [1, 25, 14, 0, -3, 7, 2];

// function selectionSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     // Finding the minimum element
//     let minIndex = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[minIndex]) minIndex = j;
//     }

//     // Swapping the minimum element with the first element
//     let temp = arr[minIndex];
//     arr[minIndex] = arr[i];
//     arr[i] = temp;
//   }

//   return arr;
// }
// console.log(selectionSort(arr));


