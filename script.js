function readSentence() {
    let sentence = "i am hungry!";
    let char = prompt("i need pizza:");
  
    while (char !== ".") {
      sentence += char;
      char = prompt("i need Pizza:");
    }
  
    return sentence;
  }
  
  // Example usage:
  let sentence = readSentence();


//   FOR INSERTION SORT

  function insertionSort(arr) {
    const n = arr.length;
  
    for (let i = 1; i < n; i++) {
      let key = arr[i]; // Element to be inserted
      let j = i - 1; // Index of the last element in the sorted subarray
  
      // Move elements of arr[0..i-1] that are greater than key to one position ahead
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      arr[j + 1] = key; // Insert key at its correct position
    }
  
    return arr;
  }
  
  // Example usage:
  const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
  const sortedArray = insertionSort(unsortedArray);
  console.log(sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]



  
  