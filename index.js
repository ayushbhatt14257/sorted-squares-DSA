let array = [1, 2, 3, 5, 6, 8, 9];

// sample output = [1, 4, 9, 25, 36, 64, 81]

// 1) O(nlog(n)) Time | O(n) Space

// let sortedSquares = new Array(array.length).fill(0);
// for (let i = 0; i < array.length; i++) {
//     let value = array[i];
//     sortedSquares[i] = value * value;
// }
// sortedSquares.sort((a, b) => a - b);
// console.log(sortedSquares);

// 2) O(n) Time | O(n) Space 

let sortedSquares = new Array(array.length).fill(0);
let smallerValueIdx = 0;
let largerValueIdx = array.length - 1;

for (let i = array.length - 1; i >= 0; i--) {
    const smallerValue = array[smallerValueIdx];
    const largerValue = array[largerValueIdx];

    if (Math.abs(smallerValue) > Math.abs(largerValue)) {
        sortedSquares[i] = smallerValue * smallerValue;
        smallerValueIdx++
    } else {
        sortedSquares[i] = largerValue * largerValue;
        largerValueIdx--;
    }
}
console.log(sortedSquares);