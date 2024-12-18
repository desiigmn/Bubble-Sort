function bubbleSort(arr) {
    let comparisons = "";
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < arr.length - 1; i++) {
        comparisons += `Comparing ${arr[i]} and ${arr[i + 1]}\n`;
        if (arr[i] > arr[i + 1]) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // Destructuring swap
          swapped = true;
          comparisons += `Swapped ${arr[i + 1]} and ${arr[i]}\n`;
        }
      }
    } while (swapped);
    alert(comparisons);
    return arr;
  }
  
  const numbers = [];
  
  function pushNumber() {
    const input = prompt("Enter a number to add (or click Cancel to finish):");
    if (input === null) {
      alert("Input cancelled. No more numbers will be added.");
      return false;
    }
  
    const number = Number(input);
    if (!isNaN(number)) {
      numbers.push(number);
      alert(`Added ${number}\nCurrent Numbers: ${numbers.join(", ")}`);
      return true;
    } else {
      alert("Invalid input. Please enter a valid number.");
      return true;
    }
  }
  
  function main() {
    const initialInput = prompt(
      "Enter numbers separated by commas (e.g., 42, 25, 12...):",
      "42, 25, 12, 63, 48, 10, 16, 5, 30, 78"
    );
  
    if (initialInput) {
      const inputNumbers = initialInput.split(",").map(Number);
      inputNumbers.forEach((num) => {
        if (!isNaN(num)) {
          numbers.push(num);
        }
      });
    } else {
      alert("No numbers entered. Using default values.");
      numbers.push(42, 25, 12, 63, 48, 10, 16, 5, 30, 78);
    }
  
    let adding = true;
    while (adding) {
      adding = pushNumber();
    }
  
    alert("Original Array:", numbers);
    const sortedArray = bubbleSort(numbers);
    alert("Sorted Array:", sortedArray);
    alert("Sorted Array: " + sortedArray.join(", "));
  }
  