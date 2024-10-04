export default function appendToEachArrayValue(array, appendString) {
  const newArray = []; // Create a new array

  for (const value of array) {
    newArray.push(appendString + value); // Append the modified value to the new array
  }

  return newArray; // Return the new array
}
