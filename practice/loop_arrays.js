function concatenateArrays(arr1, arr2) {
  const newArray = [];
  for (let i = 0; i < arr1.length; i++) {
    newArray.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    newArray.push(arr2[i]);
  }
  return newArray;
}

const array1 = [1, 2, 3];
const array2 = ["a", "b", "c"];
const result = concatenateArrays(array1, array2);
console.log(result); // Output: [1, 2, 3, 'a', 'b', 'c']
