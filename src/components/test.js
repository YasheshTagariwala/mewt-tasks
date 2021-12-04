// Assuming the input array is an (integer/real numbers) array and there no null/undefined/string elements.
// Assuming 0 (ZERO) as minimum positive

function getRandomArray(min, max, arrayLength) {
    let randomInty = () => Math.floor(Math.random() * (max - min + 1)) + min
    return Array.from({length: arrayLength}, () => randomInty());
}

function getMinimumPositiveValue(inputArray) {
    // Sorting the array to find values faster. O(n log(n))
    inputArray.sort((a, b) => a - b);

    // Edge Case 1:- If there are No Negative values in Array
    if (inputArray[0] > 0) {
        return {minimumPositiveSum: inputArray[0], elements: [inputArray[0]]}
    }

    // Edge Case 2:- If there are No Positive values in Array
    if (inputArray[inputArray.length - 1] < 0) {
        return {minimumPositiveSum: 'Min Positive Sum Not Possible', elements: []}
    }

    // Main Case:- Loop through the input array and sum the elements until
    // you find the minimum positive sum
    let outputArray = [];
    let minimumPositiveSum = 0;
    for (let i = 0; i < inputArray.length; i++) {
        minimumPositiveSum += inputArray[i];
        outputArray.push(inputArray[i]);
        // Exit Case:- if we find the minimum positive sum, then return the value with the elements.
        if (minimumPositiveSum >= 0) {
            return {minimumPositiveSum, elements: outputArray};
        }
    }
    // Edge Case:- If we do not find any positive sum.
    // In case Negative sum of elements > Positive sum of elements.
    return {minimumPositiveSum: 'Min Positive Sum Not Possible', elements: []};
}

let inputArray = getRandomArray(-70, 100, 50);
console.log(getMinimumPositiveValue(inputArray));

// Worst case:- Time complexity
// n + n log(n);
// Worst case:- Space complexity
// 2n + 1

// Edge case:- Time complexity
// n log(n)
// Edge case:- Space complexity
// n

// Other ways to do it.
// 1. Create all the combinations of array then find the sum of all the array and then find the minimum sum from then to get the combination.
// 2. Maybe, We can loop through the array twice one using forward looping and one using backward looping and find the sum
