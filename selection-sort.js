

function selectionSort(arr) {

  // Copy the original array

  // Create an array to store the sorted values

  // While the array is not empty...

    // Do not move this console.log
    // console.log(sorted.join(","));

    // Find the index of the minimum value in the unsorted half

    // Save and remove the value at the min index

    // Add the min value to the end of the sorted array

    let unsorted = [...arr];
    let sorted = [];

    while (unsorted.length > 0) {
      console.log(sorted.join(","));
      let minIndex = 0;
      let min = unsorted[0];
      for (let i = 1; i < unsorted.length; i++) {
        if (unsorted[i] < min) {
          min = unsorted[i];
          minIndex = i;
        }
      }
      unsorted.splice(minIndex, 1);
      sorted.push(min);
    }
    return sorted;

}



function selectionSortInPlace(arr) {

  // Set a pointer at zero diving the array into sorted and unsorted halves

  // Repeat while the unsorted half is not empty:

    // Do not move this console.log
    // console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half

    // Save the min value

    // Shift every unsorted value to the left of the min value to the right by 1

    // Put the min value at the divider

    // Increment the divider and repeat

    let divider = 0;
    while (divider < arr.length) {
      console.log(arr.join(","));
      let minIndex = divider;
      for (let i = divider + 1; i < arr.length; i++) {
        if (arr[i] < arr[minIndex]) {
          minIndex = i;
        }
      }
      let min = arr[minIndex];
      for (let i = minIndex; i > divider; i--) {
        arr[i] = arr[i - 1];
      }
      arr[divider] = min;
      divider++;
    }

}


module.exports = [selectionSort, selectionSortInPlace];
